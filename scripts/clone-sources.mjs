import { spawnSync } from "node:child_process";
import { existsSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const repositories = JSON.parse(await import("node:fs/promises").then((fs) => fs.readFile("data/repositories.json", "utf8")));

mkdirSync("sources", { recursive: true });

for (const repo of repositories) {
  const target = join("sources", repo.name.replace("/", "__"));
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

