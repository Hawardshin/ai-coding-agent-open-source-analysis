import { spawnSync } from "node:child_process";
import { existsSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const repositoriesFile = process.env.REPOSITORIES_FILE || "data/repositories.json";
const sourcesDir = process.env.SOURCES_DIR || "sources";
const repositories = JSON.parse(await import("node:fs/promises").then((fs) => fs.readFile(repositoriesFile, "utf8")));

mkdirSync(sourcesDir, { recursive: true });

for (const repo of repositories) {
  const target = join(sourcesDir, repo.name.replace("/", "__"));
  if (existsSync(join(target, ".git"))) {
    console.error(`skip existing: ${repo.name}`);
    continue;
  }

  console.error(`clone: ${repo.name}`);
  const result = spawnSync("git", [
    "clone",
    "--depth",
    "1",
    "--filter=blob:none",
    repo.url,
    target
  ], {
    stdio: "inherit"
  });

  if (result.status !== 0) {
    console.error(`clone failed: ${repo.name}`);
  }
}
