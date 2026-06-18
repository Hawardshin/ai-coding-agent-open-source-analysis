import { spawn } from "node:child_process";
import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import path from "node:path";

const inputFile = "data/korea-trending-repositories-500.json";
const outputFile = "data/korea-trending-clone-status-500.json";
const concurrency = Number(process.env.CLONE_CONCURRENCY || 6);
const timeoutMs = Number(process.env.CLONE_TIMEOUT_MS || 180000);

const data = JSON.parse(readFileSync(inputFile, "utf8"));
const repos = data.repositories || [];
const startedAt = new Date().toISOString();
const results = [];
const byName = new Map();

function writeCheckpoint(done = false) {
  const ok = results.filter((item) => item.status === "cloned" || item.status === "existing").length;
  const failed = results.filter((item) => item.status === "failed").length;
  const payload = {
    generatedAt: new Date().toISOString(),
    startedAt,
    done,
    inputFile,
    targetCount: repos.length,
    completedCount: results.length,
    okCount: ok,
    failedCount: failed,
    concurrency,
    timeoutMs,
    results
  };
  mkdirSync(path.dirname(outputFile), { recursive: true });
  writeFileSync(outputFile, `${JSON.stringify(payload, null, 2)}\n`);
}

function run(command, args, options = {}) {
  return new Promise((resolve) => {
    const child = spawn(command, args, {
      cwd: options.cwd || process.cwd(),
      stdio: ["ignore", "pipe", "pipe"]
    });
    let stdout = "";
    let stderr = "";
    const timer = setTimeout(() => {
      child.kill("SIGTERM");
      setTimeout(() => child.kill("SIGKILL"), 3000).unref();
    }, options.timeoutMs || timeoutMs);
    child.stdout.on("data", (chunk) => { stdout += chunk.toString(); });
    child.stderr.on("data", (chunk) => { stderr += chunk.toString(); });
    child.on("close", (code, signal) => {
      clearTimeout(timer);
      resolve({ code, signal, stdout, stderr });
    });
  });
}

async function cloneRepo(repo, index) {
  const localPath = repo.localPath;
  const gitDir = path.join(localPath, ".git");
  const started = Date.now();
  if (existsSync(gitDir)) {
    const head = await run("git", ["-C", localPath, "rev-parse", "--short", "HEAD"], { timeoutMs: 10000 });
    const deleted = await run("git", ["-C", localPath, "ls-files", "-d"], { timeoutMs: 10000 });
    if (deleted.code === 0 && deleted.stdout.trim()) {
      rmSync(localPath, { recursive: true, force: true });
    } else {
      return {
        index,
        name: repo.name,
        url: repo.url,
        localPath,
        status: "existing",
        head: head.stdout.trim() || null,
        durationMs: Date.now() - started
      };
    }
  }

  {
    mkdirSync(path.dirname(localPath), { recursive: true });
    rmSync(localPath, { recursive: true, force: true });

    const baseArgs = ["clone", "--depth=1", "--single-branch", "--filter=blob:none", repo.url, localPath];
    let result = await run("git", baseArgs, { timeoutMs });
    let mode = "partial";
    if (result.code !== 0) {
      rmSync(localPath, { recursive: true, force: true });
      result = await run("git", ["clone", "--depth=1", "--single-branch", repo.url, localPath], { timeoutMs });
      mode = "shallow";
    }

    if (result.code !== 0) {
      rmSync(localPath, { recursive: true, force: true });
      return {
        index,
        name: repo.name,
        url: repo.url,
        localPath,
        status: "failed",
        mode,
        code: result.code,
        signal: result.signal,
        error: (result.stderr || result.stdout).trim().slice(0, 1200),
        durationMs: Date.now() - started
      };
    }

    const newHead = await run("git", ["-C", localPath, "rev-parse", "--short", "HEAD"], { timeoutMs: 10000 });
    return {
      index,
      name: repo.name,
      url: repo.url,
      localPath,
      status: "cloned",
      mode,
      head: newHead.stdout.trim() || null,
      durationMs: Date.now() - started
    };
  }
}

let next = 0;
let active = 0;

await new Promise((resolve) => {
  function launch() {
    while (active < concurrency && next < repos.length) {
      const index = next;
      const repo = repos[index];
      next += 1;
      active += 1;
      cloneRepo(repo, index + 1)
        .then((result) => {
          results.push(result);
          byName.set(result.name, result);
          const ok = result.status === "cloned" || result.status === "existing";
          console.error(`[${results.length}/${repos.length}] ${ok ? "ok" : "fail"} ${result.name} ${result.status}${result.head ? ` ${result.head}` : ""}`);
          writeCheckpoint(false);
        })
        .catch((error) => {
          const result = {
            index: index + 1,
            name: repo.name,
            url: repo.url,
            localPath: repo.localPath,
            status: "failed",
            error: String(error?.stack || error).slice(0, 1200)
          };
          results.push(result);
          byName.set(result.name, result);
          console.error(`[${results.length}/${repos.length}] fail ${repo.name}`);
          writeCheckpoint(false);
        })
        .finally(() => {
          active -= 1;
          if (results.length >= repos.length) resolve();
          else launch();
        });
    }
  }
  launch();
});

results.sort((a, b) => a.index - b.index);
writeCheckpoint(true);

const okCount = results.filter((item) => item.status === "cloned" || item.status === "existing").length;
const failedCount = results.filter((item) => item.status === "failed").length;
console.error(`clone complete: ok=${okCount} failed=${failedCount}`);
