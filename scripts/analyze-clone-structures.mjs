import { execFileSync } from "node:child_process";
import {
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  rmSync,
  statSync,
  writeFileSync
} from "node:fs";
import path from "node:path";

const sourcesDir = "sources";
const dataFile = process.env.STRUCTURE_ANALYSIS_DATA_FILE || "data/clone-structure-analysis-127.json";
const summaryReportFile = process.env.STRUCTURE_ANALYSIS_REPORT_FILE || "reports/clone-structure-analysis-127.md";
const perRepoReportDir = process.env.STRUCTURE_ANALYSIS_REPORT_DIR || "reports/clone-structures";
const targetGroupFilter = process.env.TARGET_GROUP_FILTER || "";

const SKIP_DIR_NAMES = new Set([
  ".git",
  "node_modules",
  ".venv",
  "venv",
  "__pycache__",
  ".pytest_cache",
  ".mypy_cache",
  ".ruff_cache",
  ".next",
  ".nuxt",
  ".turbo",
  ".cache",
  "dist",
  "build",
  "target",
  "coverage",
  ".idea",
  ".vscode-test"
]);

const MANIFEST_PATTERNS = [
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
];

function readJson(file, fallback = null) {
  try {
    return JSON.parse(readFileSync(file, "utf8"));
  } catch {
    return fallback;
  }
}

function git(dir, args, fallback = "") {
  try {
    return execFileSync("git", ["-C", dir, ...args], {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"]
    }).trim();
  } catch {
    return fallback;
  }
}

function localDirForName(name) {
  return name.replace("/", "__");
}

function nameFromDir(dir) {
  return dir.replace("__", "/");
}

function normalizeRepoUrl(url) {
  return String(url || "")
    .replace(/^git@github.com:/, "https://github.com/")
    .replace(/\.git$/, "")
    .replace(/^https:\/\/github.com\//, "")
    .toLowerCase();
}

function safeRead(file, limit = 500_000) {
  try {
    if (statSync(file).size > limit) return "";
    return readFileSync(file, "utf8");
  } catch {
    return "";
  }
}

function walk(root, max = 80_000) {
  const files = [];
  const dirs = [];
  const stack = [""];
  while (stack.length > 0 && files.length < max) {
    const relDir = stack.pop();
    const absDir = path.join(root, relDir);
    let entries = [];
    try {
      entries = readdirSync(absDir, { withFileTypes: true });
    } catch {
      continue;
    }
    for (const entry of entries) {
      if (SKIP_DIR_NAMES.has(entry.name)) continue;
      const relPath = path.join(relDir, entry.name).replaceAll(path.sep, "/");
      if (entry.isDirectory()) {
        dirs.push(relPath);
        stack.push(relPath);
      } else if (entry.isFile()) {
        files.push(relPath);
      }
    }
  }
  files.sort();
  dirs.sort();
  return { files, dirs, truncated: files.length >= max };
}

function topExtensions(files) {
  const counts = new Map();
  for (const file of files) {
    const ext = path.extname(file).toLowerCase() || path.basename(file).toLowerCase();
    counts.set(ext, (counts.get(ext) || 0) + 1);
  }
  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .slice(0, 14)
    .map(([extension, count]) => ({ extension, count }));
}

function rootEntries(root) {
  try {
    return readdirSync(root, { withFileTypes: true })
      .filter((entry) => entry.name !== ".git")
      .map((entry) => ({
        name: entry.name,
        type: entry.isDirectory() ? "dir" : entry.isFile() ? "file" : "other"
      }))
      .sort((a, b) => a.name.localeCompare(b.name));
  } catch {
    return [];
  }
}

function topDirectories(files) {
  const counts = new Map();
  for (const file of files) {
    const [first, second] = file.split("/");
    const key = second ? `${first}/` : "(root)";
    counts.set(key, (counts.get(key) || 0) + 1);
  }
  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .slice(0, 18)
    .map(([dir, count]) => ({ dir, count }));
}

function importantDirs(files) {
  const dirCounts = new Map();
  for (const file of files) {
    const parts = file.split("/");
    for (let depth = 1; depth <= Math.min(parts.length - 1, 3); depth += 1) {
      const key = `${parts.slice(0, depth).join("/")}/`;
      dirCounts.set(key, (dirCounts.get(key) || 0) + 1);
    }
  }
  const preferred = [
    "src/",
    "lib/",
    "core/",
    "app/",
    "apps/",
    "packages/",
    "crates/",
    "cmd/",
    "cli/",
    "server/",
    "client/",
    "frontend/",
    "backend/",
    "web/",
    "docs/",
    "examples/",
    "tests/",
    "test/",
    "templates/",
    "commands/",
    "skills/",
    "agents/",
    "tools/",
    "scripts/",
    "extensions/",
    "plugins/",
    "openspec/",
    "specs/",
    ".kiro/",
    ".specify/",
    "agent-os/"
  ];
  const picked = [];
  for (const key of preferred) {
    if (dirCounts.has(key)) picked.push({ dir: key, count: dirCounts.get(key), reason: "preferred" });
  }
  for (const [dir, count] of [...dirCounts.entries()].sort((a, b) => b[1] - a[1])) {
    if (picked.length >= 24) break;
    if (!picked.some((item) => item.dir === dir)) picked.push({ dir, count, reason: "large" });
  }
  return picked.slice(0, 24);
}

function filesMatching(files, predicate, limit = 40) {
  return files.filter(predicate).slice(0, limit);
}

function findManifests(files) {
  return filesMatching(files, (file) => MANIFEST_PATTERNS.includes(path.basename(file)), 100);
}

function findDocs(files) {
  return filesMatching(
    files,
    (file) =>
      /^readme(\.[a-z0-9]+)?$/i.test(path.basename(file)) ||
      /^contributing(\.[a-z0-9]+)?$/i.test(path.basename(file)) ||
      /^docs?\//i.test(file) ||
      /\/docs?\//i.test(file),
    80
  );
}

function findAgentInstructionFiles(files) {
  return filesMatching(
    files,
    (file) =>
      /(^|\/)(AGENTS|CLAUDE|GEMINI|CODEX|CURSOR|WINDSURF|COPILOT)\.md$/i.test(file) ||
      file.includes(".claude/") ||
      file.includes(".codex/") ||
      file.includes(".cursor/") ||
      file.includes(".github/copilot") ||
      file.includes("mcp") ||
      file.includes("skill"),
    100
  );
}

function findSpecArtifacts(files) {
  return filesMatching(
    files,
    (file) =>
      file.startsWith(".kiro/") ||
      file.startsWith(".specify/") ||
      file.startsWith("openspec/") ||
      file.startsWith("specs/") ||
      file.startsWith("agent-os/") ||
      file.includes("/specs/") ||
      file.includes("/templates/") ||
      file.includes("/commands/") ||
      file.includes("/skills/") ||
      /requirements\.md$/i.test(file) ||
      /design\.md$/i.test(file) ||
      /tasks\.md$/i.test(file) ||
      /spec-template\.md$/i.test(file) ||
      /plan-template\.md$/i.test(file),
    140
  );
}

function findCiFiles(files) {
  return filesMatching(
    files,
    (file) =>
      file.startsWith(".github/workflows/") ||
      file.startsWith(".gitlab-ci") ||
      file === "Dockerfile" ||
      file.endsWith("/Dockerfile") ||
      /docker-compose|compose\.ya?ml/i.test(file),
    80
  );
}

function findTestFiles(files) {
  return filesMatching(
    files,
    (file) =>
      /^tests?\//i.test(file) ||
      /\/tests?\//i.test(file) ||
      /\.(test|spec)\.(js|jsx|ts|tsx|py|go|rs)$/i.test(file),
    120
  );
}

function parsePackageJson(root, manifests) {
  return manifests
    .filter((file) => path.basename(file) === "package.json")
    .slice(0, 30)
    .map((file) => {
      const json = readJson(path.join(root, file), {});
      return {
        path: file,
        name: json.name || null,
        type: json.type || null,
        private: Boolean(json.private),
        bin: json.bin || null,
        scripts: json.scripts || {},
        dependencies: Object.keys(json.dependencies || {}).slice(0, 60),
        devDependencies: Object.keys(json.devDependencies || {}).slice(0, 60),
        workspaces: json.workspaces || null
      };
    });
}

function parsePyproject(root, manifests) {
  return manifests
    .filter((file) => path.basename(file) === "pyproject.toml")
    .slice(0, 20)
    .map((file) => {
      const text = safeRead(path.join(root, file));
      return {
        path: file,
        name: text.match(/^\s*name\s*=\s*["']([^"']+)["']/m)?.[1] || null,
        buildSystem: text.match(/^\s*requires\s*=\s*\[([^\]]+)/m)?.[1]?.slice(0, 160) || null,
        hasPoetry: text.includes("[tool.poetry]"),
        hasUv: text.includes("[tool.uv"),
        hasRuff: text.includes("[tool.ruff"),
        hasPytest: text.includes("[tool.pytest")
      };
    });
}

function parseCargo(root, manifests) {
  return manifests
    .filter((file) => path.basename(file) === "Cargo.toml")
    .slice(0, 25)
    .map((file) => {
      const text = safeRead(path.join(root, file));
      return {
        path: file,
        packageName: text.match(/^\s*name\s*=\s*["']([^"']+)["']/m)?.[1] || null,
        hasWorkspace: /^\s*\[workspace\]/m.test(text),
        memberHint: text.match(/^\s*members\s*=\s*\[([^\]]+)/m)?.[1]?.slice(0, 180) || null
      };
    });
}

function parseGoMod(root, manifests) {
  return manifests
    .filter((file) => path.basename(file) === "go.mod")
    .slice(0, 20)
    .map((file) => {
      const text = safeRead(path.join(root, file));
      return {
        path: file,
        module: text.match(/^module\s+(.+)$/m)?.[1] || null,
        go: text.match(/^go\s+(.+)$/m)?.[1] || null
      };
    });
}

function readmeSummary(root, docs) {
  const readme =
    docs.find((file) => !file.includes("/") && /^readme(\.[a-z0-9]+)?$/i.test(path.basename(file))) ||
    docs.find((file) => /^readme(\.[a-z0-9]+)?$/i.test(path.basename(file)));
  if (!readme) return { path: null, headings: [], excerpt: "" };
  const text = safeRead(path.join(root, readme), 350_000);
  const headings = [...text.matchAll(/^#{1,3}\s+(.+)$/gm)].map((match) => match[1].trim()).slice(0, 18);
  const excerpt = text
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/!\[[^\]]*\]\([^)]+\)/g, " ")
    .replace(/\[[^\]]+\]\([^)]+\)/g, (match) => match.replace(/^\[|\]\([^)]+\)$/g, ""))
    .replace(/[#>*_`|:-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 900);
  return { path: readme, headings, excerpt };
}

function inferArchitecture(analysis) {
  const manifests = new Set(analysis.manifests.map((file) => path.basename(file)));
  const dirs = new Set(analysis.rootEntries.filter((entry) => entry.type === "dir").map((entry) => `${entry.name}/`));
  const notes = [];
  const languages = [];

  if (manifests.has("package.json")) languages.push("Node/TypeScript/JavaScript");
  if (manifests.has("pyproject.toml") || manifests.has("requirements.txt")) languages.push("Python");
  if (manifests.has("Cargo.toml")) languages.push("Rust");
  if (manifests.has("go.mod")) languages.push("Go");
  if (dirs.has("crates/") || dirs.has("packages/") || dirs.has("apps/") || analysis.packageJson.some((pkg) => pkg.workspaces)) {
    notes.push("Monorepo/workspace 구조가 보이며 여러 패키지나 crate를 한 저장소에서 관리한다.");
  }
  if (dirs.has("src/") || dirs.has("lib/") || dirs.has("core/")) {
    notes.push("핵심 구현은 `src/`, `lib/`, `core/` 계열 디렉터리에 집중되어 있다.");
  }
  if (dirs.has("docs/") || analysis.docs.length > 15) {
    notes.push("문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.");
  }
  if (analysis.specArtifacts.length > 0) {
    notes.push("스펙/템플릿/명령/스킬 아티팩트가 있어 에이전트나 SDD 워크플로우가 저장소 구조의 일부다.");
  }
  if (analysis.agentInstructionFiles.length > 0) {
    notes.push("AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.");
  }
  if (analysis.testFiles.length > 20) {
    notes.push("테스트 파일이 충분히 노출되어 기능 검증과 회귀 검증 흐름을 추적할 수 있다.");
  }
  if (analysis.ciFiles.length > 0) {
    notes.push("CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.");
  }
  if (notes.length === 0) {
    notes.push("루트 파일과 manifest 중심의 얕은 구조이며, README와 주요 manifest부터 읽어야 한다.");
  }

  return {
    stack: languages.length ? languages : ["unknown/mixed"],
    notes
  };
}

function table(rows, headers) {
  if (!rows.length) return "_없음_\n";
  const lines = [];
  lines.push(`| ${headers.join(" | ")} |`);
  lines.push(`| ${headers.map(() => "---").join(" | ")} |`);
  for (const row of rows) {
    lines.push(`| ${headers.map((header) => String(row[header] ?? "").replaceAll("|", "\\|").replace(/\n/g, " ")).join(" | ")} |`);
  }
  return `${lines.join("\n")}\n`;
}

function list(items, limit = 40) {
  if (!items.length) return "_없음_\n";
  return `${items.slice(0, limit).map((item) => `- \`${item}\``).join("\n")}${items.length > limit ? `\n- ... ${items.length - limit} more` : ""}\n`;
}

function writeRepoReport(analysis) {
  const lines = [];
  lines.push(`# ${analysis.name} 구조 분석`);
  lines.push("");
  lines.push(`생성일: ${analysis.generatedAt}`);
  lines.push("");
  lines.push("## 기본 정보");
  lines.push("");
  lines.push(table([
    {
      항목: "local path",
      값: analysis.localPath
    },
    { 항목: "remote", 값: analysis.remote || "unknown" },
    { 항목: "HEAD", 값: `${analysis.head.short} (${analysis.head.date}) ${analysis.head.subject}` },
    { 항목: "branch", 값: analysis.branch || "unknown" },
    { 항목: "groups", 값: analysis.groups.join(", ") || "local-only" },
    { 항목: "files", 값: analysis.fileCount },
    { 항목: "dirs", 값: analysis.dirCount },
    { 항목: "stack", 값: analysis.architecture.stack.join(", ") }
  ], ["항목", "값"]));

  lines.push("## 구조 해석");
  lines.push("");
  for (const note of analysis.architecture.notes) lines.push(`- ${note}`);
  lines.push("");

  lines.push("## README 신호");
  lines.push("");
  lines.push(`- 파일: ${analysis.readme.path ? `\`${analysis.readme.path}\`` : "없음"}`);
  if (analysis.readme.headings.length) {
    lines.push(`- 주요 heading: ${analysis.readme.headings.map((item) => `\`${item}\``).join(", ")}`);
  }
  if (analysis.readme.excerpt) {
    lines.push("");
    lines.push(`> ${analysis.readme.excerpt}`);
    lines.push("");
  }

  lines.push("## 루트 엔트리");
  lines.push("");
  lines.push(table(analysis.rootEntries.map((entry) => ({ 이름: entry.name, 타입: entry.type })), ["이름", "타입"]));

  lines.push("## 큰 디렉터리");
  lines.push("");
  lines.push(table(analysis.topDirectories.map((item) => ({ 디렉터리: item.dir, 파일수: item.count })), ["디렉터리", "파일수"]));

  lines.push("## 핵심 디렉터리 후보");
  lines.push("");
  lines.push(table(analysis.importantDirs.map((item) => ({ 디렉터리: item.dir, 파일수: item.count, 근거: item.reason })), ["디렉터리", "파일수", "근거"]));

  lines.push("## Manifest / 런타임 표면");
  lines.push("");
  lines.push("### Manifest 파일");
  lines.push("");
  lines.push(list(analysis.manifests, 80));

  if (analysis.packageJson.length) {
    lines.push("### package.json");
    lines.push("");
    lines.push(table(analysis.packageJson.map((pkg) => ({
      경로: pkg.path,
      이름: pkg.name || "",
      scripts: Object.keys(pkg.scripts || {}).slice(0, 16).join(", "),
      deps: pkg.dependencies.slice(0, 14).join(", ")
    })), ["경로", "이름", "scripts", "deps"]));
  }

  if (analysis.pyproject.length) {
    lines.push("### pyproject.toml");
    lines.push("");
    lines.push(table(analysis.pyproject.map((pkg) => ({
      경로: pkg.path,
      이름: pkg.name || "",
      poetry: pkg.hasPoetry,
      uv: pkg.hasUv,
      ruff: pkg.hasRuff,
      pytest: pkg.hasPytest
    })), ["경로", "이름", "poetry", "uv", "ruff", "pytest"]));
  }

  if (analysis.cargo.length) {
    lines.push("### Cargo.toml");
    lines.push("");
    lines.push(table(analysis.cargo.map((pkg) => ({
      경로: pkg.path,
      이름: pkg.packageName || "",
      workspace: pkg.hasWorkspace,
      members: pkg.memberHint || ""
    })), ["경로", "이름", "workspace", "members"]));
  }

  if (analysis.goMod.length) {
    lines.push("### go.mod");
    lines.push("");
    lines.push(table(analysis.goMod.map((pkg) => ({
      경로: pkg.path,
      module: pkg.module || "",
      go: pkg.go || ""
    })), ["경로", "module", "go"]));
  }

  lines.push("## 문서 / 에이전트 / 스펙 아티팩트");
  lines.push("");
  lines.push("### 문서 후보");
  lines.push("");
  lines.push(list(analysis.docs, 50));
  lines.push("### 에이전트 지침 후보");
  lines.push("");
  lines.push(list(analysis.agentInstructionFiles, 80));
  lines.push("### 스펙/템플릿/명령/스킬 후보");
  lines.push("");
  lines.push(list(analysis.specArtifacts, 100));

  lines.push("## 테스트 / CI / 배포 표면");
  lines.push("");
  lines.push("### 테스트 후보");
  lines.push("");
  lines.push(list(analysis.testFiles, 80));
  lines.push("### CI/Docker 후보");
  lines.push("");
  lines.push(list(analysis.ciFiles, 80));

  lines.push("## 확장자 분포");
  lines.push("");
  lines.push(table(analysis.topExtensions.map((item) => ({ 확장자: item.extension, 파일수: item.count })), ["확장자", "파일수"]));

  lines.push("## 다음 심층 분석 포인트");
  lines.push("");
  const next = [];
  if (analysis.readme.path) next.push(`${analysis.readme.path}의 workflow/usage 섹션`);
  for (const dir of analysis.importantDirs.slice(0, 5)) next.push(`${dir.dir} 내부 책임 분리`);
  for (const file of analysis.specArtifacts.slice(0, 5)) next.push(`${file} 스펙/명령 의미`);
  for (const file of analysis.manifests.slice(0, 5)) next.push(`${file} 실행 스크립트와 패키지 경계`);
  lines.push(list([...new Set(next)], 18));

  writeFileSync(path.join(perRepoReportDir, `${analysis.safeName}.md`), `${lines.join("\n")}\n`);
}

function repoReportPath(analysis) {
  return `${perRepoReportDir}/${analysis.safeName}.md`.replaceAll("\\", "/");
}

function loadTargets() {
  const targets = new Map();
  function add(name, url, group) {
    if (!name && !url) return;
    const key = normalizeRepoUrl(url || `https://github.com/${name}`);
    if (!targets.has(key)) targets.set(key, { name: name || key, url: url || `https://github.com/${name}`, groups: [] });
    if (!targets.get(key).groups.includes(group)) targets.get(key).groups.push(group);
  }

  for (const repo of readJson("data/repositories.json", [])) add(repo.name, repo.url, "core-agent-30");
  for (const repo of readJson("data/adjacent-tech-repositories.json", [])) add(repo.name, repo.url, "adjacent-tech-50");
  for (const repo of readJson("data/spec-driven-repositories.json", { repositories: [] }).repositories || []) add(repo.name, repo.url, "spec-driven-20");
  for (const repo of readJson("data/llm-wiki-repositories.json", { repositories: [] }).repositories || []) add(repo.name, repo.url, "llm-wiki-100");
  for (const repo of readJson("data/current-clone-inventory-107.json", [])) {
    const remote = repo.remote;
    add(remote ? normalizeRepoUrl(remote) : repo.dir?.replace("__", "/"), remote, "previous-clone-inventory-107");
  }
  return targets;
}

const generatedAt = new Date().toISOString();
const targetMap = loadTargets();
const sourceDirs = readdirSync(sourcesDir, { withFileTypes: true })
  .filter((entry) => entry.isDirectory() && existsSync(path.join(sourcesDir, entry.name, ".git")))
  .map((entry) => entry.name)
  .sort();

rmSync(perRepoReportDir, { recursive: true, force: true });
mkdirSync(perRepoReportDir, { recursive: true });
mkdirSync("data", { recursive: true });
mkdirSync("reports", { recursive: true });
mkdirSync(path.dirname(summaryReportFile), { recursive: true });
mkdirSync(path.dirname(dataFile), { recursive: true });

const analyses = [];

for (const dir of sourceDirs) {
  const root = path.join(sourcesDir, dir);
  const remote = git(root, ["remote", "get-url", "origin"]);
  const normalizedRemote = normalizeRepoUrl(remote);
  const target = targetMap.get(normalizedRemote);
  if (targetGroupFilter && !target?.groups?.includes(targetGroupFilter)) continue;
  const { files, dirs, truncated } = walk(root);
  const manifests = findManifests(files);
  const docs = findDocs(files);
  const analysis = {
    generatedAt,
    dir,
    safeName: dir.replace(/[^A-Za-z0-9_.-]+/g, "-"),
    name: target?.name || normalizedRemote || nameFromDir(dir),
    localPath: root,
    remote,
    normalizedRemote,
    groups: target?.groups || ["local-only"],
    branch: git(root, ["branch", "--show-current"]),
    head: {
      full: git(root, ["rev-parse", "HEAD"]),
      short: git(root, ["rev-parse", "--short", "HEAD"]),
      date: git(root, ["log", "-1", "--format=%cs"]),
      subject: git(root, ["log", "-1", "--format=%s"])
    },
    fileCount: files.length,
    dirCount: dirs.length,
    truncated,
    rootEntries: rootEntries(root),
    topDirectories: topDirectories(files),
    importantDirs: importantDirs(files),
    topExtensions: topExtensions(files),
    manifests,
    packageJson: parsePackageJson(root, manifests),
    pyproject: parsePyproject(root, manifests),
    cargo: parseCargo(root, manifests),
    goMod: parseGoMod(root, manifests),
    docs,
    readme: readmeSummary(root, docs),
    agentInstructionFiles: findAgentInstructionFiles(files),
    specArtifacts: findSpecArtifacts(files),
    testFiles: findTestFiles(files),
    ciFiles: findCiFiles(files)
  };
  analysis.architecture = inferArchitecture(analysis);
  analyses.push(analysis);
  writeRepoReport(analysis);
}

const localRemoteSet = new Set(analyses.map((item) => item.normalizedRemote));
const targetValues = [...targetMap.values()].filter((target) => !targetGroupFilter || target.groups.includes(targetGroupFilter));
const missingTargets = targetValues
  .filter((target) => !localRemoteSet.has(normalizeRepoUrl(target.url)))
  .sort((a, b) => a.name.localeCompare(b.name));

const summary = {
  generatedAt,
  targetGroupFilter: targetGroupFilter || null,
  sourceCloneCount: analyses.length,
  targetCount: targetValues.length,
  missingTargetCount: missingTargets.length,
  missingTargets,
  analyses
};

writeFileSync(dataFile, JSON.stringify(summary, null, 2) + "\n");

const lines = [];
lines.push(`# ${process.env.STRUCTURE_ANALYSIS_TITLE || `${analyses.length}개 로컬 클론 구조 분석 총괄`}`);
lines.push("");
lines.push(`생성일: ${generatedAt}`);
lines.push("");
lines.push("## 검증 범위");
lines.push("");
if (targetGroupFilter) lines.push(`- target group filter: \`${targetGroupFilter}\``);
lines.push(`- 실제 로컬 클론: ${analyses.length}개`);
lines.push(`- 데이터 파일에 명시된 target: ${targetValues.length}개`);
lines.push(`- target 중 로컬 클론 누락: ${missingTargets.length}개`);
lines.push(`- 레포별 상세 보고서: \`${perRepoReportDir}/*.md\``);
lines.push(`- 구조 데이터: \`${dataFile}\``);
lines.push("");

if (missingTargets.length) {
  lines.push("## 로컬 클론 누락 target");
  lines.push("");
  lines.push(table(missingTargets.map((target) => ({
    repo: target.name,
    url: target.url,
    groups: target.groups.join(", ")
  })), ["repo", "url", "groups"]));
} else {
  lines.push("## 로컬 클론 누락 target");
  lines.push("");
  lines.push("명시 target 기준 누락 없음.\n");
}

lines.push("## 그룹별 분포");
lines.push("");
const groupCounts = new Map();
for (const analysis of analyses) {
  for (const group of analysis.groups) groupCounts.set(group, (groupCounts.get(group) || 0) + 1);
}
lines.push(table([...groupCounts.entries()].sort((a, b) => a[0].localeCompare(b[0])).map(([group, count]) => ({ group, count })), ["group", "count"]));

lines.push("## 스택/런타임 분포");
lines.push("");
const stackCounts = new Map();
for (const analysis of analyses) {
  for (const stack of analysis.architecture.stack) stackCounts.set(stack, (stackCounts.get(stack) || 0) + 1);
}
lines.push(table([...stackCounts.entries()].sort((a, b) => b[1] - a[1]).map(([stack, count]) => ({ stack, count })), ["stack", "count"]));

lines.push("## 전체 레포 구조 요약");
lines.push("");
lines.push(table(analyses.map((analysis) => ({
  repo: analysis.name,
  group: analysis.groups.join(", "),
  files: analysis.fileCount,
  stack: analysis.architecture.stack.join(", "),
  manifests: analysis.manifests.slice(0, 4).join(", "),
  specs: analysis.specArtifacts.length,
  agents: analysis.agentInstructionFiles.length,
  report: repoReportPath(analysis)
})), ["repo", "group", "files", "stack", "manifests", "specs", "agents", "report"]));

lines.push("## 우선 심층 분석이 필요한 후보");
lines.push("");
const needsDeepDive = analyses
  .map((analysis) => ({
    repo: analysis.name,
    score:
      analysis.specArtifacts.length * 2 +
      analysis.agentInstructionFiles.length +
      (analysis.fileCount > 2000 ? 20 : 0) +
      (analysis.architecture.stack.length > 1 ? 10 : 0),
    why: [
      analysis.specArtifacts.length ? `spec artifacts ${analysis.specArtifacts.length}` : null,
      analysis.agentInstructionFiles.length ? `agent files ${analysis.agentInstructionFiles.length}` : null,
      analysis.fileCount > 2000 ? `large repo ${analysis.fileCount} files` : null,
      analysis.architecture.stack.length > 1 ? `multi-stack ${analysis.architecture.stack.join("/")}` : null
    ].filter(Boolean).join("; "),
    report: repoReportPath(analysis)
  }))
  .sort((a, b) => b.score - a.score)
  .slice(0, 30);
lines.push(table(needsDeepDive, ["repo", "score", "why", "report"]));

lines.push("## 해석 메모");
lines.push("");
lines.push("- 이 결과는 실제 로컬 클론의 파일 구조, manifest, 문서, 에이전트 지침, 스펙 아티팩트를 기준으로 만든 구조 분석이다.");
lines.push("- 이전 보고서가 주로 30개 핵심 에이전트와 50개 adjacent-stack에 집중되어 있었으므로, 이번 산출물은 나머지 로컬 클론까지 동일 기준으로 덮는 보강 자료다.");
lines.push("- 자동 구조 분석이므로 의미/품질 평가는 각 레포별 상세 보고서의 `다음 심층 분석 포인트`를 따라 추가 수동 독해가 필요하다.");

writeFileSync(summaryReportFile, `${lines.join("\n")}\n`);

console.error(`analyzed ${analyses.length} local clones; missing targets ${missingTargets.length}`);
