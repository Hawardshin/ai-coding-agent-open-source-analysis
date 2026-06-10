import { execFileSync } from "node:child_process";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const repositories = JSON.parse(readFileSync("data/repositories.json", "utf8"));

const fields = [
  "nameWithOwner",
  "description",
  "url",
  "homepageUrl",
  "stargazerCount",
  "forkCount",
  "watchers",
  "isArchived",
  "isFork",
  "isPrivate",
  "createdAt",
  "updatedAt",
  "pushedAt",
  "defaultBranchRef",
  "primaryLanguage",
  "licenseInfo",
  "repositoryTopics",
  "latestRelease"
].join(",");

function ghJson(args) {
  const out = execFileSync("gh", args, {
    encoding: "utf8",
    maxBuffer: 1024 * 1024 * 20
  });
  return JSON.parse(out);
}

const results = [];

for (const repo of repositories) {
  const ownerRepo = repo.name;
  console.error(`metadata: ${ownerRepo}`);
  try {
    const json = ghJson([
      "repo",
      "view",
      ownerRepo,
      "--json",
      fields
    ]);
    results.push({
      ...repo,
      exists: true,
      fetchedAt: new Date().toISOString(),
      github: json
    });
  } catch (error) {
    results.push({
      ...repo,
      exists: false,
      fetchedAt: new Date().toISOString(),
      error: String(error.message || error)
    });
  }
}

mkdirSync("data", { recursive: true });
writeFileSync("data/github-metadata.json", `${JSON.stringify(results, null, 2)}\n`);

const summary = results.map((item) => ({
  rank: item.rank,
  name: item.name,
  exists: item.exists,
  stars: item.github?.stargazerCount ?? null,
  archived: item.github?.isArchived ?? null,
  pushedAt: item.github?.pushedAt ?? null,
  license: item.github?.licenseInfo?.spdxId ?? item.github?.licenseInfo?.key ?? item.github?.licenseInfo?.name ?? null,
  language: item.github?.primaryLanguage?.name ?? null
}));
writeFileSync("data/github-metadata-summary.json", `${JSON.stringify(summary, null, 2)}\n`);
