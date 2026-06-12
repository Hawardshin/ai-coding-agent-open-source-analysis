import { execFileSync } from "node:child_process";
import {
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  statSync,
  writeFileSync
} from "node:fs";
import { basename, dirname, extname, join, relative } from "node:path";

const repositoriesFile = process.env.REPOSITORIES_FILE || "data/repositories.json";
const metadataFile = process.env.GITHUB_METADATA_FILE || "data/github-metadata.json";
const sourcesDir = process.env.SOURCES_DIR || "sources";
const inventoryFile = process.env.SOURCE_INVENTORY_FILE || "data/source-inventory.json";
const inventoryReportFile = process.env.SOURCE_INVENTORY_REPORT_FILE || "reports/00-source-inventory.md";
const repositories = JSON.parse(readFileSync(repositoriesFile, "utf8"));
const metadata = JSON.parse(readFileSync(metadataFile, "utf8"));
const metaByName = new Map(metadata.map((item) => [item.name, item]));

const SKIP_DIRS = new Set([
  ".git",
  "node_modules",
  ".venv",
  "venv",
  "__pycache__",
  ".pytest_cache",
  ".mypy_cache",
  ".ruff_cache",
  ".next",
  "dist",
  "build",
  "target",
  ".turbo",
  ".cache",
  "coverage",
  ".idea",
  ".vscode-test"
]);

const MANIFEST_NAMES = new Set([
  "package.json",
  "pyproject.toml",
  "Cargo.toml",
  "go.mod",
  "requirements.txt",
  "poetry.lock",
  "uv.lock",
  "pnpm-lock.yaml",
  "pnpm-workspace.yaml",
  "yarn.lock",
  "bun.lock",
  "turbo.json",
  "nx.json",
  "deno.json",
  "deno.jsonc",
  "tsconfig.json",
  "vite.config.ts",
  "next.config.js",
  "docker-compose.yml",
  "compose.yml",
  "Dockerfile"
]);

function repoDir(name) {
  return join(sourcesDir, name.replace("/", "__"));
}

function git(dir, args) {
  return execFileSync("git", ["-C", dir, ...args], { encoding: "utf8" }).trim();
}

function listFiles(root, max = 40000) {
  const out = [];
  const stack = [root];
  while (stack.length && out.length < max) {
    const current = stack.pop();
    let entries = [];
    try {
      entries = readdirSync(current, { withFileTypes: true });
    } catch {
      continue;
    }
    for (const entry of entries) {
      const full = join(current, entry.name);
      const rel = relative(root, full);
      if (entry.isDirectory()) {
        if (!SKIP_DIRS.has(entry.name)) stack.push(full);
      } else if (entry.isFile()) {
        out.push(rel);
      }
    }
  }
  return out.sort();
}

function safeRead(path, limit = 800_000) {
  try {
    if (statSync(path).size > limit) return null;
    return readFileSync(path, "utf8");
  } catch {
    return null;
  }
}

function parseJson(path) {
  const text = safeRead(path);
  if (!text) return null;
  try {
    return JSON.parse(text);
  } catch {
    return null;
  }
}

function extractTomlScripts(text) {
  if (!text) return {};
  const scripts = {};
  let section = "";
  for (const line of text.split(/\r?\n/)) {
    const header = line.match(/^\s*\[([^\]]+)\]\s*$/);
    if (header) {
      section = header[1];
      continue;
    }
    if (section === "project.scripts" || section === "tool.poetry.scripts") {
      const match = line.match(/^\s*([A-Za-z0-9_.-]+)\s*=\s*["']([^"']+)["']/);
      if (match) scripts[match[1]] = match[2];
    }
  }
  return scripts;
}

function topExtensions(files) {
  const counts = new Map();
  for (const file of files) {
    let ext = extname(file).toLowerCase();
    if (!ext) ext = basename(file).toLowerCase();
    counts.set(ext, (counts.get(ext) || 0) + 1);
  }
  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 12)
    .map(([extension, count]) => ({ extension, count }));
}

function findManifestFiles(files) {
  return files.filter((file) => MANIFEST_NAMES.has(basename(file))).slice(0, 80);
}

function findReadmes(files) {
  return files.filter((file) => /^readme(\.[a-z]+)?$/i.test(basename(file))).slice(0, 20);
}

function findLicenses(files) {
  return files
    .filter((file) => /^(license|licence|copying|notice)(\.[a-z0-9]+)?$/i.test(basename(file)))
    .slice(0, 20);
}

function rootEntries(root) {
  return readdirSync(root, { withFileTypes: true })
    .filter((entry) => entry.name !== ".git")
    .map((entry) => `${entry.name}${entry.isDirectory() ? "/" : ""}`)
    .sort();
}

function packageInfo(root, files) {
  const packages = [];
  for (const file of files.filter((item) => basename(item) === "package.json").slice(0, 40)) {
    const json = parseJson(join(root, file));
    if (!json) continue;
    packages.push({
      path: file,
      name: json.name || null,
      type: json.type || null,
      private: Boolean(json.private),
      bin: json.bin || null,
      main: json.main || null,
      module: json.module || null,
      scripts: json.scripts || {},
      activationEvents: json.activationEvents || null,
      contributes: json.contributes ? Object.keys(json.contributes) : null,
      dependencies: json.dependencies ? Object.keys(json.dependencies).slice(0, 40) : [],
      devDependencies: json.devDependencies ? Object.keys(json.devDependencies).slice(0, 40) : []
    });
  }
  return packages;
}

function pyprojectInfo(root, files) {
  return files
    .filter((item) => basename(item) === "pyproject.toml")
    .slice(0, 25)
    .map((file) => {
      const text = safeRead(join(root, file));
      const projectName = text?.match(/^\s*name\s*=\s*["']([^"']+)["']/m)?.[1] || null;
      return {
        path: file,
        name: projectName,
        scripts: extractTomlScripts(text)
      };
    });
}

function cargoInfo(root, files) {
  return files
    .filter((item) => basename(item) === "Cargo.toml")
    .slice(0, 30)
    .map((file) => {
      const text = safeRead(join(root, file));
      return {
        path: file,
        packageName: text?.match(/^\s*name\s*=\s*["']([^"']+)["']/m)?.[1] || null,
        hasWorkspace: /^\s*\[workspace\]/m.test(text || ""),
        binNames: [...(text || "").matchAll(/^\s*name\s*=\s*["']([^"']+)["']/gm)]
          .map((match) => match[1])
          .slice(0, 10)
      };
    });
}

function searchSamples(root, pattern, limit = 20) {
  try {
    const out = execFileSync("rg", [
      "--glob",
      "!node_modules",
      "--glob",
      "!dist",
      "--glob",
      "!build",
      "--glob",
      "!target",
      "--line-number",
      "--no-heading",
      "--max-count",
      "1",
      pattern,
      root
    ], {
      encoding: "utf8",
      maxBuffer: 1024 * 1024 * 4
    });
    return out
      .trim()
      .split(/\r?\n/)
      .filter(Boolean)
      .slice(0, limit)
      .map((line) => line.replace(`${root}/`, ""));
  } catch {
    return [];
  }
}

function sourceDirs(root) {
  const candidates = [
    "src",
    "packages",
    "apps",
    "crates",
    "python",
    "client",
    "server",
    "backend",
    "frontend",
    "core",
    "cli",
    "extension",
    "agent",
    "docs"
  ];
  return candidates.filter((dir) => existsSync(join(root, dir)));
}

const inventory = [];

for (const repo of repositories) {
  const root = repoDir(repo.name);
  const files = listFiles(root);
  const github = metaByName.get(repo.name)?.github || {};
  const readmes = findReadmes(files);
  const licenses = findLicenses(files);
  const primaryReadme = readmes[0] ? safeRead(join(root, readmes[0]), 16000) || "" : "";
  inventory.push({
    rank: repo.rank,
    name: repo.name,
    sourceDir: root,
    url: repo.url,
    category: repo.category,
    note: repo.note,
    commit: git(root, ["rev-parse", "--short", "HEAD"]),
    branch: git(root, ["rev-parse", "--abbrev-ref", "HEAD"]),
    fileCount: files.length,
    rootEntries: rootEntries(root).slice(0, 80),
    topExtensions: topExtensions(files),
    manifests: findManifestFiles(files),
    readmes,
    licenses,
    sourceDirs: sourceDirs(root),
    packageJson: packageInfo(root, files),
    pyprojects: pyprojectInfo(root, files),
    cargo: cargoInfo(root, files),
    readmeHead: primaryReadme
      .split(/\r?\n/)
      .filter((line) => line.trim())
      .slice(0, 18),
    search: {
      cli: searchSamples(root, "\\b(command|commander|yargs|click|typer|argparse|cobra|clap|Command::new)\\b", 20),
      tool: searchSamples(root, "\\b(tool|Tool|MCP|mcp|function_call|functionCall|execute_command|run_command|shell|terminal)\\b", 20),
      agent: searchSamples(root, "\\b(agent|Agent|subagent|planner|executor|orchestrator|workflow)\\b", 20),
      authNetwork: searchSamples(root, "\\b(api[_-]?key|token|secret|telemetry|analytics|tracking|posthog|sentry|segment)\\b", 20)
    },
    github: {
      description: github.description || null,
      stars: github.stargazerCount || null,
      forks: github.forkCount || null,
      archived: Boolean(github.isArchived),
      license: github.licenseInfo?.spdxId || github.licenseInfo?.key || github.licenseInfo?.name || null,
      primaryLanguage: github.primaryLanguage?.name || null,
      createdAt: github.createdAt || null,
      pushedAt: github.pushedAt || null,
      topics: github.repositoryTopics?.map((item) => item.name).slice(0, 20) || [],
      latestRelease: github.latestRelease?.tagName || null
    }
  });
}

mkdirSync("data", { recursive: true });
mkdirSync("reports", { recursive: true });
writeFileSync(inventoryFile, `${JSON.stringify(inventory, null, 2)}\n`);

const lines = [
  "# Source Inventory",
  "",
  `Generated at: ${new Date().toISOString()}`,
  "",
  "| # | Repository | Commit | Lang | Files | License | Archived | Source dirs |",
  "| -: | --- | --- | --- | ---: | --- | --- | --- |"
];

for (const item of inventory) {
  lines.push(`| ${item.rank} | ${item.name} | ${item.commit} | ${item.github.primaryLanguage || ""} | ${item.fileCount} | ${item.github.license || ""} | ${item.github.archived ? "yes" : "no"} | ${item.sourceDirs.join(", ")} |`);
}

lines.push("", "## Per-repository Notes", "");

for (const item of inventory) {
  lines.push(`### ${item.rank}. ${item.name}`);
  lines.push("");
  lines.push(`- Source: \`${item.sourceDir}\``);
  lines.push(`- GitHub: ${item.github.description || ""}`);
  lines.push(`- Root entries: ${item.rootEntries.slice(0, 24).map((entry) => `\`${entry}\``).join(", ")}`);
  lines.push(`- Manifests: ${item.manifests.slice(0, 24).map((entry) => `\`${entry}\``).join(", ") || "none detected"}`);
  lines.push(`- Top extensions: ${item.topExtensions.map((entry) => `\`${entry.extension}\` ${entry.count}`).join(", ")}`);
  const bins = item.packageJson.flatMap((pkg) => pkg.bin ? [`${pkg.path}: ${JSON.stringify(pkg.bin)}`] : []);
  const pyScripts = item.pyprojects.flatMap((pkg) => Object.keys(pkg.scripts).length ? [`${pkg.path}: ${JSON.stringify(pkg.scripts)}`] : []);
  lines.push(`- CLI hints: ${[...bins, ...pyScripts].slice(0, 8).join("; ") || "manual inspection required"}`);
  lines.push("");
}

writeFileSync(inventoryReportFile, `${lines.join("\n")}\n`);
