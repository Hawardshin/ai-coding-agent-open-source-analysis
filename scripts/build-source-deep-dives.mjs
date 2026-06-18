import { createHash } from "node:crypto";
import { existsSync } from "node:fs";
import { mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const generatedAt = new Date().toISOString();
const inputInsightsFile = path.join(root, "data", "repository-insights.json");
const outputDataFile = path.join(root, "data", "source-deep-scan.json");
const outputCsvFile = path.join(root, "data", "report-tables", "source-deep-scan.csv");
const outputReportDir = path.join(root, "reports", "source-deep-dives");
const outputTopicDir = path.join(outputReportDir, "by-topic");
const outputRepositoryDir = path.join(outputReportDir, "repositories");
const maxFilesPerRepo = 15000;
const maxDepth = 12;
const sourceScanConcurrency = Number(process.env.SOURCE_DEEP_SCAN_CONCURRENCY || 12);

const topicDefinitions = [
  { slug: "coding-agent-ide", title: "코딩 에이전트/IDE", korean: "코딩 에이전트/IDE", focus: "CLI/IDE 엔트리포인트, 에이전트 런타임, 도구 실행, 에이전트 지시문" },
  { slug: "agent-harness-mcp", title: "에이전트 하네스/MCP", korean: "에이전트 하네스/MCP", focus: "MCP 서버/클라이언트, 도구 등록부, workflow/orchestration, hooks/skills" },
  { slug: "llm-wiki-rag", title: "LLM 위키/RAG/지식베이스", korean: "LLM 위키/RAG/지식베이스", focus: "수집, chunking, embedding, retrieval, memory, vector store" },
  { slug: "spec-driven", title: "스펙 드리븐/요구사항", korean: "스펙 드리븐/요구사항", focus: "요구사항, ADR, 설계 문서, 스펙 산출물, acceptance/test trace" },
  { slug: "eval-observability", title: "평가/관측/품질", korean: "평가/관측/품질", focus: "평가 suite, benchmark harness, tracing, observability, quality gate" },
  { slug: "ai-infrastructure-serving", title: "AI 인프라/서빙", korean: "AI 인프라/서빙", focus: "모델 서빙, API server, 배포, Docker/Kubernetes, runtime adapter" },
  { slug: "data-vector-platform", title: "데이터/벡터 플랫폼", korean: "데이터/벡터 플랫폼", focus: "저장소, index, embedding/vector 경로, query engine, persistence" },
  { slug: "security-governance", title: "보안/거버넌스/안전", korean: "보안/거버넌스/안전", focus: "sandbox, permission, policy, auth, guardrail, secret handling" },
  { slug: "developer-productivity", title: "개발 생산성/DevTools", korean: "개발 생산성/DevTools", focus: "CLI/devtool entrypoint, SDK 형태, CI/build script, automation" },
  { slug: "general-ai-open-source", title: "일반 AI 오픈소스", korean: "일반 AI 오픈소스", focus: "주요 구조, 의존성 스택, 테스트, 배포, 문서" }
];

const topicBySlug = new Map(topicDefinitions.map((topic) => [topic.slug, topic]));
const skipDirs = new Set([
  ".git", "node_modules", ".venv", "venv", "env", "target", "dist", "build", ".next",
  ".cache", ".turbo", ".pnpm-store", "__pycache__", ".pytest_cache", ".mypy_cache",
  ".ruff_cache", ".gradle", ".idea", ".vscode", "coverage", ".coverage", "vendor"
]);

const bucketRules = [
  ["entrypoints", /(^|\/)(src\/(index|main|cli|server|app)\.|main\.(py|go|rs|ts|tsx|js|jsx)|__main__\.py|bin\/|cmd\/[^/]+\/main\.go|crates\/[^/]+\/src\/(main|lib)\.rs|packages\/[^/]+\/src\/index\.|apps\/[^/]+\/src\/|server\.)/i],
  ["agentRuntime", /(^|\/)(agent|agents|planner|executor|runner|workflow|orchestr|tool|tools|skill|skills|hook|hooks|sandbox|memory|context)(\/|[-_.])/i],
  ["mcp", /(^|\/|[-_.])(mcp|modelcontextprotocol|model-context-protocol|tool-registry|tool_registry)(\/|[-_.])/i],
  ["retrieval", /(^|\/|[-_.])(rag|retriev|retrieval|vector|embed|embedding|chunk|ingest|index|knowledge|wiki|memory|graph|graphrag)(\/|[-_.])/i],
  ["spec", /(^|\/|[-_.])(spec|requirements|requirement|prd|adr|design|architecture|acceptance|traceability|roadmap)(\/|[-_.])/i],
  ["eval", /(^|\/|[-_.])(eval|evaluation|benchmark|bench|quality|trace|tracing|observability|monitor|metric|test|tests|spec)(\/|[-_.])/i],
  ["security", /(^|\/|[-_.])(security|sandbox|policy|permission|auth|oauth|rbac|guard|guardrail|secret|audit|compliance)(\/|[-_.])/i],
  ["ci", /(^|\/)(\.github\/workflows\/|\.gitlab-ci|circleci|azure-pipelines|buildkite|jenkins|ci\/)/i],
  ["container", /(^|\/)(Dockerfile|docker-compose|compose\.ya?ml|helm\/|charts\/|k8s\/|kubernetes\/|deploy\/|deployment\/)/i],
  ["instruction", /(^|\/)(AGENTS\.md|CLAUDE\.md|GEMINI\.md|\.cursor\/rules|copilot-instructions|\.codex\/|\.github\/copilot)/i],
  ["docs", /(^|\/)(README|docs\/|doc\/|website\/|site\/|mkdocs|docusaurus|book\/)/i],
  ["config", /(^|\/)(package\.json|pyproject\.toml|requirements.*\.txt|go\.mod|Cargo\.toml|Makefile|pnpm-workspace\.yaml|turbo\.json|nx\.json|tsconfig\.json|vite\.config|next\.config|uv\.lock|poetry\.lock|Cargo\.lock)$/i]
];

const cueTerms = [
  "openai", "anthropic", "claude", "codex", "gemini", "mcp", "modelcontextprotocol",
  "langchain", "langgraph", "llamaindex", "llama-index", "fastapi", "express", "next",
  "react", "vscode", "electron", "pydantic", "click", "typer", "commander", "cobra",
  "torch", "transformers", "vllm", "ollama", "llama", "chroma", "qdrant", "milvus",
  "weaviate", "pgvector", "faiss", "opentelemetry", "prometheus", "playwright", "puppeteer"
];

const dependencyGroupRules = {
  llmProviders: ["openai", "anthropic", "claude", "gemini"],
  agentProtocols: ["mcp", "modelcontextprotocol", "codex"],
  agentFrameworks: ["langchain", "langgraph", "llamaindex", "llama-index"],
  vectorStores: ["chroma", "qdrant", "milvus", "weaviate", "pgvector", "faiss"],
  modelRuntime: ["torch", "transformers", "vllm", "ollama", "llama"],
  webRuntime: ["fastapi", "express", "next", "react", "vue", "svelte"],
  developerSurface: ["vscode", "electron", "click", "typer", "commander", "cobra"],
  observability: ["opentelemetry", "prometheus"],
  browserAutomation: ["playwright", "puppeteer"]
};

function safeArray(value) {
  return Array.isArray(value) ? value : [];
}

async function readJson(file, fallback = null) {
  if (!existsSync(file)) return fallback;
  return JSON.parse(await readFile(file, "utf8"));
}

async function readIfExists(file, maxChars = 20000) {
  if (!existsSync(file)) return "";
  try {
    const text = await readFile(file, "utf8");
    return text.slice(0, maxChars);
  } catch {
    return "";
  }
}

function tableText(value) {
  return String(value ?? "").replace(/\s+/g, " ").replaceAll("|", "\\|").trim();
}

function csvValue(value) {
  const text = String(value ?? "");
  return /[",\n]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text;
}

function renderCsv(headers, rows) {
  return [
    headers.map(csvValue).join(","),
    ...rows.map((row) => headers.map((header) => csvValue(row[header])).join(","))
  ].join("\n") + "\n";
}

function renderMarkdown(content) {
  return `${content.trimEnd()}\n`;
}

function repoSafeName(value) {
  return String(value || "")
    .replace(/^https:\/\/github\.com\//, "")
    .replace(/\.git$/, "")
    .replaceAll("/", "__")
    .replace(/[^A-Za-z0-9_.-]+/g, "_")
    .slice(0, 120);
}

function canonicalRepoSlug(row) {
  const fromLocalPath = row?.localPath ? path.basename(row.localPath) : "";
  return fromLocalPath || repoSafeName(row?.name || row?.url || "unknown-repository");
}

function shardForSlug(slug) {
  return createHash("sha1").update(slug).digest("hex").slice(0, 1);
}

function isSafeRelativePath(value) {
  return Boolean(value) && !/[\n|()[\]<>]/.test(value);
}

function linkFrom(baseDir, target, label) {
  if (!target) return "";
  const relative = path.relative(path.join(root, baseDir), path.join(root, target)).replaceAll(path.sep, "/");
  return `[${tableText(label)}](${relative})`;
}

function externalOrText(label, url) {
  return url ? `[${tableText(label)}](${url})` : tableText(label);
}

function pushUnique(list, item, limit = 30) {
  if (!item || list.length >= limit) return;
  if (!list.includes(item)) list.push(item);
}

function countBy(rows, keyFn) {
  return rows.reduce((acc, row) => {
    const key = keyFn(row) || "unknown";
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});
}

async function mapLimit(items, limit, mapper) {
  const results = new Array(items.length);
  let nextIndex = 0;
  async function worker() {
    while (nextIndex < items.length) {
      const current = nextIndex;
      nextIndex += 1;
      results[current] = await mapper(items[current], current);
    }
  }
  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, worker));
  return results;
}

function addBucket(scan, bucket, filePath) {
  scan.bucketCounts[bucket] = (scan.bucketCounts[bucket] || 0) + 1;
  pushUnique(scan.buckets[bucket], filePath, 40);
}

function matchBuckets(scan, filePath) {
  for (const [bucket, rule] of bucketRules) {
    if (rule.test(filePath)) addBucket(scan, bucket, filePath);
  }
}

async function scanFiles(absolute) {
  const scan = {
    exists: true,
    fileCount: 0,
    dirCount: 0,
    truncated: false,
    maxObservedDepth: 0,
    topDirectories: [],
    extensions: {},
    buckets: Object.fromEntries(bucketRules.map(([bucket]) => [bucket, []])),
    bucketCounts: Object.fromEntries(bucketRules.map(([bucket]) => [bucket, 0]))
  };
  const stack = [{ dir: absolute, relative: "", depth: 0 }];
  while (stack.length) {
    const current = stack.pop();
    if (current.depth > maxDepth) continue;
    const entries = await readdir(current.dir, { withFileTypes: true }).catch(() => []);
    entries.sort((a, b) => a.name.localeCompare(b.name));
    for (const entry of entries) {
      const relative = current.relative ? `${current.relative}/${entry.name}` : entry.name;
      if (entry.isDirectory()) {
        if (skipDirs.has(entry.name)) continue;
        scan.dirCount += 1;
        if (!current.relative) pushUnique(scan.topDirectories, entry.name, 40);
        stack.push({ dir: path.join(current.dir, entry.name), relative, depth: current.depth + 1 });
      } else if (entry.isFile()) {
        scan.fileCount += 1;
        scan.maxObservedDepth = Math.max(scan.maxObservedDepth, relative.split("/").length);
        const ext = path.extname(entry.name).toLowerCase() || "(none)";
        scan.extensions[ext] = (scan.extensions[ext] || 0) + 1;
        matchBuckets(scan, relative);
        if (scan.fileCount >= maxFilesPerRepo) {
          scan.truncated = true;
          return scan;
        }
      }
    }
  }
  return scan;
}

function firstExistingFile(absolute, candidates) {
  return candidates.find((candidate) => existsSync(path.join(absolute, candidate))) || null;
}

async function extractManifestDetails(absolute) {
  const details = {
    packageName: null,
    packageScripts: [],
    packageScriptCommands: [],
    packageBins: [],
    packageEntrypoints: [],
    makeTargets: [],
    pythonProjectScripts: [],
    goModule: null,
    rustPackage: null,
    dependencyCues: []
  };
  const dependencyTextParts = [];
  const packageFile = path.join(absolute, "package.json");
  if (existsSync(packageFile)) {
    try {
      const pkg = JSON.parse(await readFile(packageFile, "utf8"));
      const scriptEntries = Object.entries(pkg.scripts || {}).slice(0, 40);
      details.packageName = pkg.name || null;
      details.packageScripts = scriptEntries.map(([name]) => name);
      details.packageScriptCommands = scriptEntries.map(([name, command]) => ({
        name,
        command: String(command || "").slice(0, 220)
      }));
      details.packageBins = typeof pkg.bin === "string" ? [pkg.bin] : Object.values(pkg.bin || {}).slice(0, 20);
      details.packageEntrypoints = [pkg.main, pkg.module, pkg.types, pkg.exports && "exports"].filter(Boolean).slice(0, 20);
      dependencyTextParts.push(Object.keys({ ...(pkg.dependencies || {}), ...(pkg.devDependencies || {}), ...(pkg.peerDependencies || {}) }).join(" "));
    } catch {
      dependencyTextParts.push(await readIfExists(packageFile, 12000));
    }
  }
  const pyproject = await readIfExists(path.join(absolute, "pyproject.toml"), 16000);
  if (pyproject) {
    dependencyTextParts.push(pyproject);
    const scriptSection = pyproject.match(/\[(project\.scripts|tool\.poetry\.scripts)\]([\s\S]*?)(\n\[|$)/);
    if (scriptSection) {
      details.pythonProjectScripts = scriptSection[2].split("\n")
        .map((line) => line.match(/^\s*([A-Za-z0-9_.-]+)\s*=/)?.[1])
        .filter(Boolean)
        .slice(0, 20);
    }
  }
  const requirements = await readIfExists(path.join(absolute, "requirements.txt"), 12000);
  if (requirements) dependencyTextParts.push(requirements);
  const goMod = await readIfExists(path.join(absolute, "go.mod"), 12000);
  if (goMod) {
    dependencyTextParts.push(goMod);
    details.goModule = goMod.match(/^module\s+(.+)$/m)?.[1]?.trim() || null;
  }
  const cargoToml = await readIfExists(path.join(absolute, "Cargo.toml"), 12000);
  if (cargoToml) {
    dependencyTextParts.push(cargoToml);
    details.rustPackage = cargoToml.match(/^\s*name\s*=\s*"([^"]+)"/m)?.[1] || null;
  }
  const makefile = await readIfExists(path.join(absolute, "Makefile"), 12000);
  if (makefile) {
    details.makeTargets = makefile.split("\n")
      .map((line) => line.match(/^([A-Za-z0-9_.-]+):(?!=)/)?.[1])
      .filter(Boolean)
      .slice(0, 20);
  }
  const dependencyText = dependencyTextParts.join(" ").toLowerCase();
  details.dependencyCues = cueTerms.filter((cue) => dependencyText.includes(cue.toLowerCase())).slice(0, 30);
  return details;
}

function detectPatterns(repo, scan, manifests) {
  const patterns = [];
  const dirs = new Set(scan.topDirectories.map((dir) => dir.toLowerCase()));
  const cues = new Set(manifests.dependencyCues);
  if (dirs.has("packages") || dirs.has("apps") || scan.buckets.config.some((file) => /pnpm-workspace|turbo|nx/.test(file))) patterns.push("monorepo/workspace");
  if (scan.buckets.entrypoints.some((file) => /cli|bin|cmd|main\./i.test(file)) || manifests.packageBins.length || manifests.pythonProjectScripts.length) patterns.push("cli-first");
  if (cues.has("fastapi") || cues.has("express") || scan.buckets.entrypoints.some((file) => /server|api|app/i.test(file))) patterns.push("api/server");
  if (scan.bucketCounts.agentRuntime > 0 || scan.bucketCounts.mcp > 0) patterns.push("agent/tool runtime");
  if (scan.bucketCounts.retrieval > 0 || ["chroma", "qdrant", "milvus", "weaviate", "pgvector", "faiss"].some((cue) => cues.has(cue))) patterns.push("retrieval/vector path");
  if (scan.bucketCounts.spec > 0) patterns.push("spec/docs-driven");
  if (scan.bucketCounts.eval > 0) patterns.push("eval/test harness");
  if (scan.bucketCounts.security > 0) patterns.push("security/policy surface");
  if (scan.bucketCounts.container > 0) patterns.push("containerized deploy");
  if (["next", "react", "vscode", "electron"].some((cue) => cues.has(cue))) patterns.push("ui/extension surface");
  if (!patterns.length) patterns.push(repo.language ? `${repo.language} source tree` : "general source tree");
  return patterns.slice(0, 8);
}

function dependencyGroups(cues) {
  const cueSet = new Set(safeArray(cues));
  return Object.fromEntries(Object.entries(dependencyGroupRules).map(([group, terms]) => [
    group,
    terms.filter((term) => cueSet.has(term))
  ]));
}

function allBucketPaths(scan) {
  return Object.values(scan.buckets).flatMap((paths) => safeArray(paths));
}

function inferComponents(scan) {
  const counts = new Map();
  const add = (component, role) => {
    if (!component) return;
    const current = counts.get(component) || { component, role, count: 0 };
    current.count += 1;
    counts.set(component, current);
  };
  for (const dir of scan.topDirectories) {
    if (dir.startsWith(".") && ![".github", ".codex", ".devcontainer"].includes(dir)) continue;
    if (/docs?|website|site/i.test(dir)) add(dir, "documentation surface");
    else if (/tests?|e2e|bench/i.test(dir)) add(dir, "validation surface");
    else if (/github|ci/i.test(dir)) add(dir, "ci surface");
    else if (/devcontainer|docker|deploy|k8s|helm/i.test(dir)) add(dir, "deployment surface");
    else if (/packages|apps|crates|cmd|src|lib|libs|server|client|web|api/i.test(dir)) add(dir, "source boundary");
    else add(dir, "top-level component");
  }
  for (const filePath of allBucketPaths(scan)) {
    const parts = filePath.split("/");
    if (parts.length >= 2 && /^(apps|packages|crates|cmd|services|libs|examples)$/i.test(parts[0])) {
      add(`${parts[0]}/${parts[1]}`, `${parts[0]} workspace`);
    } else if (parts.length >= 3 && parts[0] === "python" && parts[1] === "packages") {
      add(`${parts[0]}/${parts[1]}/${parts[2]}`, "python package");
    } else if (parts.length >= 2 && /^(src|lib|server|client|web|api|tests|docs)$/i.test(parts[0])) {
      add(parts[0], "source boundary");
    }
  }
  return [...counts.values()]
    .sort((a, b) => b.count - a.count || a.component.localeCompare(b.component))
    .slice(0, 18);
}

function commandCategory(name, command = "") {
  const text = `${name} ${command}`.toLowerCase();
  if (/test|spec|vitest|jest|pytest|cargo test|go test|coverage/.test(text)) return "test";
  if (/dev|watch|serve|start|server|uvicorn|fastapi|next dev|vite/.test(text)) return "serve-dev";
  if (/build|compile|bundle|dist|release/.test(text)) return "build";
  if (/lint|format|type|tsc|mypy|ruff|eslint|clippy|fmt|prettier|check/.test(text)) return "quality";
  if (/docker|compose|container|image/.test(text)) return "container";
  return "utility";
}

function deriveCommands(manifests) {
  const commands = [];
  for (const item of safeArray(manifests.packageScriptCommands)) {
    commands.push({ source: "package.json", name: item.name, command: item.command, category: commandCategory(item.name, item.command) });
  }
  for (const target of safeArray(manifests.makeTargets)) {
    commands.push({ source: "Makefile", name: target, command: `make ${target}`, category: commandCategory(target) });
  }
  for (const script of safeArray(manifests.pythonProjectScripts)) {
    commands.push({ source: "pyproject.toml", name: script, command: script, category: commandCategory(script) });
  }
  for (const bin of safeArray(manifests.packageBins)) {
    commands.push({ source: "package.json bin", name: path.basename(bin), command: bin, category: "entrypoint" });
  }
  return commands.slice(0, 80);
}

function commandSummary(commands) {
  return {
    test: commands.filter((item) => item.category === "test").slice(0, 10),
    serveDev: commands.filter((item) => item.category === "serve-dev").slice(0, 10),
    build: commands.filter((item) => item.category === "build").slice(0, 10),
    quality: commands.filter((item) => item.category === "quality").slice(0, 10),
    container: commands.filter((item) => item.category === "container").slice(0, 10),
    entrypoint: commands.filter((item) => item.category === "entrypoint").slice(0, 10),
    utility: commands.filter((item) => item.category === "utility").slice(0, 10)
  };
}

function riskCategories(rowLike, scan, references) {
  return {
    architecture: [
      scan.topDirectories.length > 18 ? "상위 디렉터리가 많아 모듈 경계 재확인 필요" : null,
      scan.truncated ? `큰 레포라 ${maxFilesPerRepo}개 파일에서 스캔이 잘림` : null,
      !scan.bucketCounts.entrypoints ? "path scan에서 primary entrypoint가 명확하지 않음" : null
    ].filter(Boolean),
    operation: [
      !scan.bucketCounts.ci ? "CI workflow 경로가 명확하지 않음" : null,
      !scan.bucketCounts.container ? "container/deploy 경로가 명확하지 않음" : null,
      !scan.bucketCounts.eval ? "test/eval 경로가 명확하지 않음" : null
    ].filter(Boolean),
    security: [
      scan.bucketCounts.security ? null : "security/policy 표면이 명확하지 않음",
      rowLike.role === "agent-harness-mcp" && !scan.bucketCounts.instruction ? "agent instruction 파일이 명확하지 않음" : null
    ].filter(Boolean),
    evidenceGaps: [
      !references.length ? "no high-confidence key source references" : null,
      !safeArray(rowLike.dependencyCues).length ? "dependency cue weak in root manifests" : null
    ].filter(Boolean)
  };
}

function assignUniqueDeepDivePaths(rows) {
  const seen = new Map();
  for (const row of rows) {
    const base = canonicalRepoSlug(row);
    const shard = shardForSlug(base);
    const key = `${shard}/${base}`;
    const count = seen.get(key) || 0;
    seen.set(key, count + 1);
    const fileName = count ? `${base}-${count + 1}.md` : `${base}.md`;
    row.sourceDeepDiveSlug = base;
    row.sourceDeepDiveShard = shard;
    row.sourceDeepDivePath = `reports/source-deep-dives/repositories/${shard}/${fileName}`;
  }
  return rows;
}

function topicBuckets(role) {
  if (role === "coding-agent-ide") return ["entrypoints", "agentRuntime", "instruction", "security", "eval"];
  if (role === "agent-harness-mcp") return ["mcp", "agentRuntime", "entrypoints", "instruction", "config"];
  if (role === "llm-wiki-rag") return ["retrieval", "entrypoints", "docs", "eval", "config"];
  if (role === "spec-driven") return ["spec", "instruction", "eval", "docs", "config"];
  if (role === "eval-observability") return ["eval", "entrypoints", "config", "ci"];
  if (role === "ai-infrastructure-serving") return ["entrypoints", "container", "config", "ci"];
  if (role === "data-vector-platform") return ["retrieval", "entrypoints", "container", "config"];
  if (role === "security-governance") return ["security", "instruction", "ci", "config"];
  if (role === "developer-productivity") return ["entrypoints", "config", "ci", "docs"];
  return ["entrypoints", "config", "docs", "eval"];
}

function selectReferences(repo, scan, manifests) {
  const selected = [];
  const seen = new Set();
  const add = (bucket, filePath, reason) => {
    if (!isSafeRelativePath(filePath) || seen.has(filePath)) return;
    seen.add(filePath);
    selected.push({ bucket, path: filePath, reason });
  };
  for (const bucket of topicBuckets(repo.role)) {
    for (const filePath of safeArray(scan.buckets[bucket]).slice(0, 4)) add(bucket, filePath, `${bucket} signal`);
  }
  for (const bucket of ["config", "ci", "container", "eval", "instruction"]) {
    for (const filePath of safeArray(scan.buckets[bucket]).slice(0, 2)) add(bucket, filePath, `${bucket} support`);
  }
  for (const entrypoint of [...manifests.packageBins, ...manifests.packageEntrypoints].slice(0, 8)) {
    const normalized = String(entrypoint || "").replace(/^\.\//, "");
    if (!normalized || normalized === "exports" || /[*{}]/.test(normalized)) continue;
    if (repo.localPath && existsSync(path.join(root, repo.localPath, normalized))) {
      add("manifest-entrypoint", normalized, "package manifest entrypoint");
    }
  }
  return selected.slice(0, 12);
}

function sourceDepthScore(repo, scan, references, patterns) {
  const fileScore = Math.min(30, Math.round(Math.log10(Math.max(scan.fileCount, 1)) * 10));
  const bucketScore = Object.values(scan.bucketCounts).filter((count) => count > 0).length * 4;
  const evidenceScore = references.length * 2 + patterns.length * 3;
  const repoSignal = repo.evidence?.includes("deep") ? 12 : repo.evidence?.includes("source") ? 6 : 0;
  return fileScore + bucketScore + evidenceScore + repoSignal;
}

function summarizePaths(paths, max = 3) {
  if (!paths.length) return "명확하지 않음";
  return paths.slice(0, max).join(", ");
}

function buildDeepInsight(repo, scan, manifests, patterns, references) {
  const topic = topicBySlug.get(repo.role) || topicBySlug.get("general-ai-open-source");
  const focusBuckets = topicBuckets(repo.role);
  const primaryBucket = focusBuckets.find((bucket) => scan.buckets[bucket]?.length) || "entrypoints";
  const primaryPaths = summarizePaths(scan.buckets[primaryBucket] || []);
  const operations = [
    scan.bucketCounts.eval ? "test/eval 경로가 보임" : null,
    scan.bucketCounts.ci ? "CI 워크플로가 보임" : null,
    scan.bucketCounts.container ? "컨테이너/배포 파일이 보임" : null,
    scan.bucketCounts.instruction ? "에이전트 지시문 파일이 보임" : null
  ].filter(Boolean).join(", ") || "운영 보조 파일은 추가 확인 필요";
  const deps = manifests.dependencyCues.length ? manifests.dependencyCues.slice(0, 6).join(", ") : "의존성 단서 약함";
  return `${topic.korean} 관점에서 ${patterns.slice(0, 3).join(", ")} 구조로 읽힌다. 핵심 소스 근거는 ${primaryBucket}=${primaryPaths}이고, 의존성 단서는 ${deps}, 검증/운영 단서는 ${operations}이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 ${references.length}개 파일 경로를 직접 스캔해야 확인된다.`;
}

function buildSourceRisks(scan, references) {
  const risks = [];
  if (scan.truncated) risks.push(`${maxFilesPerRepo}개 파일에서 스캔이 잘림`);
  if (!scan.bucketCounts.entrypoints) risks.push("entrypoint 경로가 명확하지 않음");
  if (!scan.bucketCounts.eval) risks.push("test/eval 경로가 명확하지 않음");
  if (!scan.bucketCounts.ci) risks.push("CI 경로가 명확하지 않음");
  if (!references.length) risks.push("신뢰도 높은 소스 참조 없음");
  return risks.slice(0, 5);
}

async function buildRows() {
  const insightData = await readJson(inputInsightsFile, { repositories: [] });
  const repositories = safeArray(insightData.repositories);
  const rows = await mapLimit(repositories, sourceScanConcurrency, async (repo) => {
    const absolute = repo.localPath ? path.join(root, repo.localPath) : null;
    if (!absolute || !existsSync(absolute)) return null;
    const scan = await scanFiles(absolute);
    const manifests = await extractManifestDetails(absolute);
    const patterns = detectPatterns(repo, scan, manifests);
    const references = selectReferences(repo, scan, manifests);
    const score = sourceDepthScore(repo, scan, references, patterns);
    const risks = buildSourceRisks(scan, references);
    const commands = deriveCommands(manifests);
    const groupedDependencies = dependencyGroups(manifests.dependencyCues);
    const componentMap = inferComponents(scan);
    const sourceDeepDiveSlug = canonicalRepoSlug(repo);
    const sourceDeepDiveShard = shardForSlug(sourceDeepDiveSlug);
    const sourceDeepDivePath = `reports/source-deep-dives/repositories/${sourceDeepDiveShard}/${sourceDeepDiveSlug}.md`;
    const sourceRiskCategories = riskCategories({ ...repo, dependencyCues: manifests.dependencyCues }, scan, references);
    return {
      id: repo.id,
      name: repo.name,
      title: repo.title,
      summary: repo.summary,
      url: repo.url,
      role: repo.role,
      roleTitle: repo.roleTitle,
      roleKorean: repo.roleKorean,
      region: repo.region,
      language: repo.language,
      stars: repo.stars,
      forks: repo.forks,
      license: repo.license,
      maturity: repo.maturity,
      evidence: repo.evidence,
      strategy: repo.strategy,
      categories: safeArray(repo.categories),
      originTags: safeArray(repo.originTags),
      repositoryAssessment: repo.assessment,
      repositoryInsight: repo.insight,
      reportPath: repo.reportPath,
      localPath: repo.localPath,
      sourceDeepDiveSlug,
      sourceDeepDiveShard,
      sourceDeepDivePath,
      fileCount: scan.fileCount,
      dirCount: scan.dirCount,
      maxDepth: scan.maxObservedDepth,
      truncated: scan.truncated,
      extensions: scan.extensions,
      topDirectories: scan.topDirectories,
      bucketCounts: scan.bucketCounts,
      buckets: scan.buckets,
      components: componentMap,
      packageScripts: manifests.packageScripts,
      packageScriptCommands: manifests.packageScriptCommands,
      packageBins: manifests.packageBins,
      packageEntrypoints: manifests.packageEntrypoints,
      makeTargets: manifests.makeTargets,
      pythonProjectScripts: manifests.pythonProjectScripts,
      goModule: manifests.goModule,
      rustPackage: manifests.rustPackage,
      commands,
      commandSummary: commandSummary(commands),
      dependencyCues: manifests.dependencyCues,
      dependencyGroups: groupedDependencies,
      patterns,
      keySourceReferences: references,
      sourceDepthScore: score,
      sourceRisks: risks,
      sourceRiskCategories,
      deepInsight: buildDeepInsight(repo, scan, manifests, patterns, references)
    };
  });
  const sortedRows = rows.filter(Boolean).sort((a, b) => b.sourceDepthScore - a.sourceDepthScore || b.stars - a.stars || a.name.localeCompare(b.name));
  return assignUniqueDeepDivePaths(sortedRows);
}

function aggregateBucketCounts(rows) {
  const totals = Object.fromEntries(bucketRules.map(([bucket]) => [bucket, 0]));
  for (const row of rows) {
    for (const bucket of Object.keys(totals)) totals[bucket] += row.bucketCounts[bucket] || 0;
  }
  return totals;
}

function renderReferenceLinks(row, baseDir, limit = 5) {
  const refs = row.keySourceReferences.slice(0, limit).map((ref) => {
    const target = `${row.localPath}/${ref.path}`;
    return `${linkFrom(baseDir, target, ref.path)} (${ref.bucket})`;
  });
  return refs.length ? refs.join("<br>") : "명확하지 않음";
}

function formatSourcePath(row, baseDir, relativePath, label = relativePath) {
  if (!relativePath) return "";
  const target = `${row.localPath}/${relativePath}`;
  if (isSafeRelativePath(relativePath) && existsSync(path.join(root, target))) {
    return linkFrom(baseDir, target, label);
  }
  return `\`${tableText(relativePath)}\``;
}

function renderSourcePathList(row, baseDir, paths, limit = 12) {
  const selected = safeArray(paths).slice(0, limit);
  if (!selected.length) return "명확하지 않음";
  return selected.map((filePath) => formatSourcePath(row, baseDir, filePath)).join("<br>");
}

function topEntriesFromObject(object, limit = 12) {
  return Object.entries(object || {})
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .slice(0, limit);
}

function renderKeyValueTable(rows) {
  return `| 항목 | 값 |\n| --- | --- |\n${rows.map(([field, value]) => `| ${tableText(field)} | ${tableText(value || "없음")} |`).join("\n")}\n`;
}

function renderComponentTable(row) {
  if (!row.components.length) return "_추출된 모듈 경계 신호가 없습니다._\n";
  return `| 컴포넌트 | 역할 | 신호 수 |\n| --- | --- | ---: |\n${row.components.map((item) => `| ${tableText(item.component)} | ${tableText(item.role)} | ${item.count} |`).join("\n")}\n`;
}

function renderDependencyGroups(row) {
  const groups = Object.entries(row.dependencyGroups || {});
  if (!groups.length) return "_추출된 의존성 그룹이 없습니다._\n";
  return `| 그룹 | 감지된 단서 |\n| --- | --- |\n${groups.map(([group, cues]) => `| ${tableText(group)} | ${tableText(safeArray(cues).join(", ") || "없음")} |`).join("\n")}\n`;
}

function renderCommandTable(commands, limit = 40) {
  const selected = safeArray(commands).slice(0, limit);
  if (!selected.length) return "_root manifest에서 추출된 command surface가 없습니다._\n";
  return `| 카테고리 | 출처 | 이름 | 명령 |\n| --- | --- | --- | --- |\n${selected.map((item) => `| ${tableText(item.category)} | ${tableText(item.source)} | ${tableText(item.name)} | ${tableText(item.command)} |`).join("\n")}\n`;
}

function renderBucketEvidenceTable(row, baseDir) {
  return `| 근거 bucket | Hit 수 | 대표 경로 |\n| --- | ---: | --- |\n${bucketRules.map(([bucket]) => `| ${tableText(bucket)} | ${row.bucketCounts[bucket] || 0} | ${renderSourcePathList(row, baseDir, row.buckets[bucket], 8)} |`).join("\n")}\n`;
}

function renderKeyReferencesTable(row, baseDir) {
  if (!row.keySourceReferences.length) return "_신뢰도 높은 핵심 참조가 추출되지 않았습니다._\n";
  return `| Bucket | 소스 경로 | 중요한 이유 |\n| --- | --- | --- |\n${row.keySourceReferences.map((ref) => `| ${tableText(ref.bucket)} | ${formatSourcePath(row, baseDir, ref.path)} | ${tableText(ref.reason)} |`).join("\n")}\n`;
}

function renderRiskCategoryTable(row) {
  const rows = Object.entries(row.sourceRiskCategories || {}).map(([category, risks]) => {
    const value = safeArray(risks).length ? safeArray(risks).join("; ") : "없음";
    return `| ${tableText(category)} | ${tableText(value)} |`;
  });
  return `| 위험 카테고리 | 발견 사항 |\n| --- | --- |\n${rows.join("\n")}\n`;
}

function renderValidationSurface(row, baseDir) {
  const rows = [
    ["테스트/평가", row.bucketCounts.eval, renderSourcePathList(row, baseDir, row.buckets.eval, 6)],
    ["CI workflow", row.bucketCounts.ci, renderSourcePathList(row, baseDir, row.buckets.ci, 6)],
    ["컨테이너/배포", row.bucketCounts.container, renderSourcePathList(row, baseDir, row.buckets.container, 6)],
    ["보안/정책", row.bucketCounts.security, renderSourcePathList(row, baseDir, row.buckets.security, 6)],
    ["에이전트 지시문", row.bucketCounts.instruction, renderSourcePathList(row, baseDir, row.buckets.instruction, 6)]
  ];
  return `| 표면 | Hit 수 | 대표 경로 |\n| --- | ---: | --- |\n${rows.map(([surface, hits, paths]) => `| ${surface} | ${hits || 0} | ${paths} |`).join("\n")}\n`;
}

function renderReadingPlan(row) {
  const steps = [];
  if (row.keySourceReferences.length) steps.push(`핵심 참조에서 시작: ${row.keySourceReferences.slice(0, 3).map((ref) => `\`${ref.path}\``).join(", ")}.`);
  if (row.buckets.entrypoints?.length) steps.push(`entrypoint를 따라 실행 흐름 확인: ${row.buckets.entrypoints.slice(0, 3).map((item) => `\`${item}\``).join(", ")}.`);
  if (row.buckets.agentRuntime?.length) steps.push(`agent/tool runtime 매핑: ${row.buckets.agentRuntime.slice(0, 3).map((item) => `\`${item}\``).join(", ")}.`);
  if (row.buckets.retrieval?.length) steps.push(`retrieval/memory/indexing 확인: ${row.buckets.retrieval.slice(0, 3).map((item) => `\`${item}\``).join(", ")}.`);
  if (row.buckets.eval?.length) steps.push(`test/eval 파일로 동작 검증: ${row.buckets.eval.slice(0, 3).map((item) => `\`${item}\``).join(", ")}.`);
  if (!steps.length) steps.push("전문화된 source bucket 신호가 약하므로 root manifest와 README부터 확인합니다.");
  return steps.map((step, index) => `${index + 1}. ${step}`).join("\n");
}

function renderSourceTable(rows, baseDir, limit = Infinity) {
  const selected = rows.slice(0, limit);
  if (!selected.length) return "_색인된 소스 심층 스캔 row가 없습니다._\n";
  const body = selected.map((row) => {
    const repo = externalOrText(row.name, row.url);
    const deepDive = row.sourceDeepDivePath ? linkFrom(baseDir, row.sourceDeepDivePath, "딥다이브") : "";
    const source = linkFrom(baseDir, row.localPath, "소스");
    const report = row.reportPath ? linkFrom(baseDir, row.reportPath, "보고서") : "";
    const links = [deepDive, report, source].filter(Boolean).join(" / ");
    return `| ${repo} | ${row.fileCount} / ${row.dirCount} | ${row.sourceDepthScore} | ${tableText(row.patterns.join(", "))} | ${renderReferenceLinks(row, baseDir, 4)} | ${tableText(row.deepInsight)} | ${tableText(row.sourceRisks.join(", ") || "없음")} | ${links} |`;
  }).join("\n");
  return `| 레포 | 파일/디렉터리 | 깊이 점수 | 소스 패턴 | 핵심 소스 참조 | 소스 인사이트 | 위험 신호 | 링크 |\n| --- | ---: | ---: | --- | --- | --- | --- | --- |\n${body}\n`;
}

function renderTopicSummary(rows, baseDir) {
  const counts = countBy(rows, (row) => row.role);
  return topicDefinitions
    .map((topic) => ({ ...topic, count: counts[topic.slug] || 0 }))
    .filter((topic) => topic.count)
    .sort((a, b) => b.count - a.count || a.title.localeCompare(b.title))
    .map((topic) => `| ${linkFrom(baseDir, `reports/source-deep-dives/by-topic/${topic.slug}/README.md`, topic.title)} | ${topic.count} | ${tableText(topic.korean)} | ${tableText(topic.focus)} |`)
    .join("\n");
}

function renderBucketMatrix(rows) {
  const byRole = new Map();
  for (const row of rows) {
    if (!byRole.has(row.role)) byRole.set(row.role, []);
    byRole.get(row.role).push(row);
  }
  return [...byRole.entries()]
    .sort((a, b) => b[1].length - a[1].length || a[0].localeCompare(b[0]))
    .map(([role, roleRows]) => {
      const topic = topicBySlug.get(role) || topicBySlug.get("general-ai-open-source");
      const buckets = aggregateBucketCounts(roleRows);
      return `| ${tableText(topic.title)} | ${roleRows.length} | ${buckets.entrypoints} | ${buckets.agentRuntime} | ${buckets.mcp} | ${buckets.retrieval} | ${buckets.spec} | ${buckets.eval} | ${buckets.security} | ${buckets.instruction} | ${buckets.ci} | ${buckets.container} |`;
    })
    .join("\n");
}

function renderNavigation(baseDir) {
  return `## 바로가기

| 이동 | 여기서 볼 것 |
| --- | --- |
| ${linkFrom(baseDir, "README.md", "전체 시작 README")} | 레포 전체 목적, 핵심 카테고리, 읽는 순서. |
| ${linkFrom(baseDir, "reports/README.md", "전체 보고서 읽기 지도")} | 모든 보고서의 시작점, 주제, 폴더 지도. |
| ${linkFrom(baseDir, "reports/by-topic/README.md", "주제별 보고서 목차")} | 조사 질문 기준으로 보고서를 찾는 입구. |
| ${linkFrom(baseDir, "reports/tables/README.md", "표/CSV 목차")} | 표로 빠르게 훑고 CSV로 비교하는 입구. |
| ${linkFrom(baseDir, "reports/repository-insights/README.md", "레포별 인사이트")} | 레포별 총평과 위험 신호. |
| ${linkFrom(baseDir, "reports/source-deep-dives/README.md", "소스 딥다이브")} | 주제별 소스 경로 근거. |
| ${linkFrom(baseDir, "reports/source-deep-dives/repositories/README.md", "레포별 소스 딥다이브")} | 로컬 클론 1개당 1개 Markdown 딥다이브. |
| ${linkFrom(baseDir, "reports/source-insights/README.md", "소스 트렌드 인사이트")} | 카테고리별 트렌드와 레포별 특징 비교. |
`;
}

function renderMainReadme(rows) {
  const baseDir = "reports/source-deep-dives";
  const bucketTotals = aggregateBucketCounts(rows);
  const sourceReferenceCount = rows.reduce((sum, row) => sum + row.keySourceReferences.length, 0);
  const truncatedCount = rows.filter((row) => row.truncated).length;
  return `# 소스 딥다이브

생성 시각: ${generatedAt}

이 보고서는 \`sources/\` 아래 로컬 클론에서 추출한 소스 경로 수준의 근거를 주제별로 묶은 README입니다.

## 요약

- 조사 단위: 로컬 클론 ${rows.length.toLocaleString("en-US")}개를 실제 파일 트리 기준으로 다시 스캔한 소스 심층 스캔 보고서입니다.
- 포함 범위: file/dir count, entrypoint, agent runtime, MCP, retrieval/vector, spec, eval/test, security, CI, container, instruction file 경로를 주제별로 묶었습니다.
- 탐색 방식: 아래 주제별 목차에서 주제를 고른 뒤, 각 레포 row의 핵심 소스 참조를 따라가면 README만으로는 보이지 않는 구현 경로를 바로 확인할 수 있습니다.

## 총평

기존 repository insights가 레포별 총평과 위험도를 보여줬다면, 이 보고서는 “왜 그렇게 판단했는가”를 로컬 소스 파일 경로로 증명합니다. 특히 agent runtime, MCP, RAG, spec, eval, security처럼 README 설명만으로는 구조가 숨겨지는 영역을 주제별 표로 끌어올렸습니다.

${renderNavigation(baseDir)}

## 범위

| 항목 | 수 |
| --- | ---: |
| 소스 스캔 레포 | ${rows.length} |
| 추출된 핵심 소스 참조 | ${sourceReferenceCount} |
| 큰 스캔에서 잘린 레포 | ${truncatedCount} |
| Entrypoint 경로 hit | ${bucketTotals.entrypoints} |
| Agent/runtime 경로 hit | ${bucketTotals.agentRuntime} |
| MCP 경로 hit | ${bucketTotals.mcp} |
| Retrieval/vector 경로 hit | ${bucketTotals.retrieval} |
| Spec/requirements 경로 hit | ${bucketTotals.spec} |
| Eval/test 경로 hit | ${bucketTotals.eval} |
| Security/policy 경로 hit | ${bucketTotals.security} |
| Instruction 파일 경로 hit | ${bucketTotals.instruction} |

## 주제별 목차

| 주제 README | 레포 수 | 한국어 라벨 | 소스 초점 |
| --- | ---: | --- | --- |
${renderTopicSummary(rows, baseDir)}

## 레포별 딥다이브 파일

- ${linkFrom(baseDir, "reports/source-deep-dives/repositories/README.md", "reports/source-deep-dives/repositories/README.md")}
- 레포별 딥다이브 파일은 주제별 shard 아래에 생성됩니다. 예: \`repositories/agent-harness-mcp/<owner__repo>.md\`.

## 소스 패턴 매트릭스

| 주제 | 레포 수 | Entrypoint | Agent runtime | MCP | Retrieval | Spec | Eval/Test | Security | Instruction | CI | Container |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
${renderBucketMatrix(rows)}

## 소스 깊이 상위 인사이트

${renderSourceTable(rows, baseDir, 80)}

## 데이터 파일

- ${linkFrom(baseDir, "data/source-deep-scan.json", "data/source-deep-scan.json")}
- ${linkFrom(baseDir, "data/report-tables/source-deep-scan.csv", "data/report-tables/source-deep-scan.csv")}
`;
}

function renderTopicIndex(rows) {
  const baseDir = "reports/source-deep-dives/by-topic";
  return `# 주제별 소스 딥다이브

생성 시각: ${generatedAt}

## 요약

- 조사 단위: 소스 심층 스캔 row를 역할/주제별 README로 나눈 목차입니다.
- 포함 범위: ${rows.length.toLocaleString("en-US")}개 레포, ${topicDefinitions.length}개 주제 그룹입니다.
- 탐색 방식: 주제 README로 들어가면 해당 주제의 파일 경로 근거, deep source insight, risk를 한 표에서 볼 수 있습니다.

## 총평

주제별 딥다이브는 레포 이름보다 “무엇을 알고 싶은가”를 기준으로 읽을 때 효과적입니다. 예를 들어 MCP 구현만 보려면 에이전트 하네스/MCP, RAG 파이프라인만 보려면 LLM 위키/RAG, 테스트와 관측성만 보려면 평가/관측/품질에서 시작하면 됩니다.

${renderNavigation(baseDir)}

## 주제

| 주제 README | 레포 수 | 한국어 라벨 | 소스 초점 |
| --- | ---: | --- | --- |
${renderTopicSummary(rows, baseDir)}
`;
}

function renderTopicReadme(topic, rows) {
  const baseDir = `reports/source-deep-dives/by-topic/${topic.slug}`;
  const bucketTotals = aggregateBucketCounts(rows);
  const sourceReferenceCount = rows.reduce((sum, row) => sum + row.keySourceReferences.length, 0);
  return `# ${topic.title} 소스 딥다이브

생성 시각: ${generatedAt}

${topic.korean} 주제의 로컬 소스 심층 스캔 결과입니다.

## 요약

- 조사 단위: \`${topic.slug}\` 역할로 분류된 로컬 소스 레포 ${rows.length.toLocaleString("en-US")}개입니다.
- 포함 범위: ${topic.focus} 경로를 중심으로 key source reference ${sourceReferenceCount.toLocaleString("en-US")}개를 추출했습니다.
- 탐색 방식: 소스 인사이트를 먼저 읽고, 핵심 소스 참조의 파일 링크를 따라가면 소스를 봐야만 알 수 있는 구현 단서를 확인할 수 있습니다.

## 총평

이 주제의 비교 포인트는 추상 기능명이 아니라 실제 파일 배치입니다. entrypoint, runtime, spec/test, CI/container, instruction 파일이 분리돼 있는지 또는 한곳에 섞여 있는지를 보면 재사용 가능한 구조와 후속 검증이 필요한 구조가 빠르게 구분됩니다.

${renderNavigation(baseDir)}

## 주제 범위

| 항목 | 수 |
| --- | ---: |
| 레포 수 | ${rows.length} |
| 핵심 소스 참조 | ${sourceReferenceCount} |
| Entrypoint 경로 hit | ${bucketTotals.entrypoints} |
| Agent/runtime 경로 hit | ${bucketTotals.agentRuntime} |
| MCP 경로 hit | ${bucketTotals.mcp} |
| Retrieval/vector 경로 hit | ${bucketTotals.retrieval} |
| Spec/requirements 경로 hit | ${bucketTotals.spec} |
| Eval/test 경로 hit | ${bucketTotals.eval} |
| Security/policy 경로 hit | ${bucketTotals.security} |
| Instruction 파일 경로 hit | ${bucketTotals.instruction} |

## 레포별 소스 인사이트

${renderSourceTable(rows, baseDir)}
`;
}

function renderRepositoryIndex(rows) {
  const baseDir = "reports/source-deep-dives/repositories";
  const byTopic = countBy(rows, (row) => row.role);
  const byShard = countBy(rows, (row) => row.sourceDeepDiveShard);
  const sourceReferenceCount = rows.reduce((sum, row) => sum + row.keySourceReferences.length, 0);
  const shardRows = [..."0123456789abcdef"].map((shard) => ({
    shard,
    count: byShard[shard] || 0
  })).map(({ shard, count }) => `| ${linkFrom(baseDir, `reports/source-deep-dives/repositories/${shard}/README.md`, shard)} | ${count} |`).join("\n");
  const topicRows = topicDefinitions
    .map((topic) => ({ ...topic, count: byTopic[topic.slug] || 0 }))
    .filter((topic) => topic.count)
    .sort((a, b) => b.count - a.count || a.title.localeCompare(b.title))
    .map((topic) => `| ${linkFrom(baseDir, `reports/source-deep-dives/by-topic/${topic.slug}/README.md`, topic.title)} | ${topic.count} | ${tableText(topic.korean)} | ${tableText(topic.focus)} |`)
    .join("\n");
  return `# 레포별 소스 딥다이브

생성 시각: ${generatedAt}

## 요약

- 조사 단위: 로컬에 클론된 ${rows.length.toLocaleString("en-US")}개 소스 레포 각각의 독립 딥다이브 파일입니다.
- 포함 범위: 레포별 metadata, architecture map, entrypoint/run commands, dependency stack, evidence buckets, validation surface, risks, reading plan입니다.
- 탐색 방식: canonical shard는 안정적인 실제 파일 위치이고, 주제별 view는 같은 레포별 딥다이브를 주제 기준으로 다시 보여주는 인덱스입니다.

## 총평

이 폴더는 기존의 큰 표를 레포 단위 문서로 풀어낸 결과입니다. 대규모 비교는 상위 소스 딥다이브 표가 빠르고, 실제 구현을 따라 읽을 때는 이 레포별 파일이 더 적합합니다. 총 ${sourceReferenceCount.toLocaleString("en-US")}개의 key source reference가 각 보고서에 분산되어 있습니다.

${renderNavigation(baseDir)}

## Canonical Shard

| Shard | 레포 보고서 수 |
| --- | ---: |
${shardRows}

## 주제별 View

| 주제 view | 레포 보고서 수 | 한국어 라벨 | 소스 초점 |
| --- | ---: | --- | --- |
${topicRows}

## 상위 120개 레포 파일

${renderSourceTable(rows, baseDir, 120)}
`;
}

function renderRepositoryShardIndex(shard, rows) {
  const baseDir = `reports/source-deep-dives/repositories/${shard}`;
  const sourceReferenceCount = rows.reduce((sum, row) => sum + row.keySourceReferences.length, 0);
  return `# 레포별 소스 딥다이브: Shard ${shard}

생성 시각: ${generatedAt}

## 요약

- 조사 단위: canonical shard \`${shard}\`에 속한 레포별 소스 딥다이브 ${rows.length.toLocaleString("en-US")}개입니다.
- 포함 범위: 역할과 무관하게 안정적인 파일 경로를 유지하는 레포별 딥다이브 본문입니다.
- 탐색 방식: 아래 표에서 딥다이브 링크를 열면 해당 레포의 구조, 실행 방식, 근거 bucket, 검증 표면을 볼 수 있습니다.

## 총평

이 shard는 파일 시스템 규모를 고르게 나누기 위한 canonical 분할입니다. 주제별 비교는 주제별 소스 딥다이브를 쓰고, 본문 파일의 안정적인 위치는 이 shard 경로를 기준으로 삼으면 됩니다. 이 shard의 key source reference는 ${sourceReferenceCount.toLocaleString("en-US")}개입니다.

${renderNavigation(baseDir)}

## 레포별 딥다이브 파일

${renderSourceTable(rows, baseDir)}
`;
}

function renderRepositoryDeepDive(row) {
  const baseDir = path.dirname(row.sourceDeepDivePath).replaceAll(path.sep, "/");
  const topic = topicBySlug.get(row.role) || topicBySlug.get("general-ai-open-source");
  const sourceLink = linkFrom(baseDir, row.localPath, row.localPath);
  const reportLink = row.reportPath ? linkFrom(baseDir, row.reportPath, row.reportPath) : "없음";
  const extensionSummary = topEntriesFromObject(row.extensions, 12).map(([ext, count]) => `${ext}: ${count}`).join(", ") || "없음";
  return `# ${row.name} 소스 딥다이브

생성 시각: ${generatedAt}

${row.summary || row.title || row.name}

## 요약

- 조사 단위: \`${row.localPath}\` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: ${row.fileCount.toLocaleString("en-US")} files, ${row.dirCount.toLocaleString("en-US")} directories, depth score ${row.sourceDepthScore}, key references ${row.keySourceReferences.length}개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

${row.deepInsight} 기존 레포 평가 관점은 ${row.strategy || "architecture comparison point"}이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

${renderNavigation(baseDir)}

## 레포 컨텍스트

${renderKeyValueTable([
    ["레포", row.name],
    ["주제", `${topic.title} / ${row.roleKorean}`],
    ["Region", row.region],
    ["Language", row.language],
    ["Stars", row.stars],
    ["Forks", row.forks],
    ["License", row.license],
    ["성숙도", row.maturity],
    ["근거 수준", row.evidence],
    ["소스", sourceLink],
    ["기존 보고서", reportLink]
  ])}

## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | ${row.fileCount} / ${row.dirCount} |
| 관측 최대 깊이 | ${row.maxDepth} |
| 상위 디렉터리 | ${tableText(row.topDirectories.slice(0, 20).join(", ") || "없음")} |
| 상위 확장자 | ${tableText(extensionSummary)} |
| 소스 패턴 | ${tableText(row.patterns.join(", ") || "없음")} |

### 컴포넌트

${renderComponentTable(row)}

## 실행 방식

${renderCommandTable(row.commands)}

## 의존성 스택

${renderDependencyGroups(row)}

## 핵심 소스 참조

${renderKeyReferencesTable(row, baseDir)}

## 근거 Bucket

${renderBucketEvidenceTable(row, baseDir)}

## 검증 표면

${renderValidationSurface(row, baseDir)}

## 위험 신호와 후속 확인

${renderRiskCategoryTable(row)}

## 읽기 계획

${renderReadingPlan(row)}

## 기존 레포 인사이트

${row.repositoryInsight || "기존 레포 인사이트가 없습니다."}

## 기존 평가

${row.repositoryAssessment || "기존 평가가 없습니다."}
`;
}

function buildCsvRows(rows) {
  return rows.map((row) => ({
    name: row.name,
    url: row.url,
    role: row.role,
    roleKorean: row.roleKorean,
    region: row.region,
    language: row.language,
    stars: row.stars,
    maturity: row.maturity,
    evidence: row.evidence,
    fileCount: row.fileCount,
    dirCount: row.dirCount,
    maxDepth: row.maxDepth,
    truncated: row.truncated,
    sourceDepthScore: row.sourceDepthScore,
    patterns: row.patterns.join(";"),
    components: row.components.map((item) => `${item.component}:${item.role}:${item.count}`).join(";"),
    dependencyCues: row.dependencyCues.join(";"),
    dependencyGroups: Object.entries(row.dependencyGroups || {}).map(([group, cues]) => `${group}:${safeArray(cues).join("+") || "none"}`).join(";"),
    commands: row.commands.map((item) => `${item.category}:${item.source}:${item.name}`).join(";"),
    keySourceReferences: row.keySourceReferences.map((ref) => `${ref.bucket}:${ref.path}`).join(";"),
    sourceRisks: row.sourceRisks.join(";"),
    deepInsight: row.deepInsight,
    sourceDeepDiveSlug: row.sourceDeepDiveSlug,
    sourceDeepDiveShard: row.sourceDeepDiveShard,
    sourceDeepDivePath: row.sourceDeepDivePath,
    reportPath: row.reportPath,
    localPath: row.localPath
  }));
}

async function main() {
  const rows = await buildRows();
  await rm(outputReportDir, { recursive: true, force: true });
  await mkdir(outputReportDir, { recursive: true });
  await mkdir(outputTopicDir, { recursive: true });
  await mkdir(outputRepositoryDir, { recursive: true });
  await mkdir(path.dirname(outputDataFile), { recursive: true });
  await mkdir(path.dirname(outputCsvFile), { recursive: true });

  const byTopic = countBy(rows, (row) => row.role);
  await writeFile(outputDataFile, JSON.stringify({
    generatedAt,
    description: "sources/에서 추출한 소스 경로 수준 근거를 주제별로 묶은 로컬 소스 심층 스캔입니다.",
    count: rows.length,
    byTopic,
    bucketTotals: aggregateBucketCounts(rows),
    repositories: rows
  }, null, 2));
  await writeFile(outputCsvFile, renderCsv([
    "name", "url", "role", "roleKorean", "region", "language", "stars", "maturity", "evidence",
    "fileCount", "dirCount", "maxDepth", "truncated", "sourceDepthScore", "patterns",
    "components", "dependencyCues", "dependencyGroups", "commands", "keySourceReferences", "sourceRisks",
    "deepInsight", "sourceDeepDiveSlug", "sourceDeepDiveShard", "sourceDeepDivePath", "reportPath", "localPath"
  ], buildCsvRows(rows)));
  await writeFile(path.join(outputReportDir, "README.md"), renderMarkdown(renderMainReadme(rows)));
  await writeFile(path.join(outputTopicDir, "README.md"), renderMarkdown(renderTopicIndex(rows)));

  for (const topic of topicDefinitions) {
    const topicRows = rows.filter((row) => row.role === topic.slug)
      .sort((a, b) => b.sourceDepthScore - a.sourceDepthScore || b.stars - a.stars || a.name.localeCompare(b.name));
    if (!topicRows.length) continue;
    const topicDir = path.join(outputTopicDir, topic.slug);
    await mkdir(topicDir, { recursive: true });
    await writeFile(path.join(topicDir, "README.md"), renderMarkdown(renderTopicReadme(topic, topicRows)));
  }

  await writeFile(path.join(outputRepositoryDir, "README.md"), renderMarkdown(renderRepositoryIndex(rows)));
  for (const shard of "0123456789abcdef") {
    const shardRows = rows.filter((row) => row.sourceDeepDiveShard === shard)
      .sort((a, b) => b.sourceDepthScore - a.sourceDepthScore || b.stars - a.stars || a.name.localeCompare(b.name));
    const shardDir = path.join(outputRepositoryDir, shard);
    await mkdir(shardDir, { recursive: true });
    await writeFile(path.join(shardDir, "README.md"), renderMarkdown(renderRepositoryShardIndex(shard, shardRows)));
    for (const row of shardRows) {
      await writeFile(path.join(root, row.sourceDeepDivePath), renderMarkdown(renderRepositoryDeepDive(row)));
    }
  }

  console.error(`source deep-scan repositories: ${rows.length}`);
  console.error(`source deep-scan topics: ${Object.keys(byTopic).length}`);
  console.error(`source repository deep dives: ${rows.length}`);
}

await main();
