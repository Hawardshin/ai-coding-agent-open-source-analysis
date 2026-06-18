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
const maxFilesPerRepo = 15000;
const maxDepth = 12;

const topicDefinitions = [
  { slug: "coding-agent-ide", title: "Coding Agent and IDE", korean: "코딩 에이전트/IDE", focus: "CLI/IDE 엔트리포인트, 에이전트 런타임, 도구 실행, 에이전트 지시문" },
  { slug: "agent-harness-mcp", title: "Agent Harness and MCP", korean: "에이전트 하네스/MCP", focus: "MCP 서버/클라이언트, tool registry, workflow/orchestration, hooks/skills" },
  { slug: "llm-wiki-rag", title: "LLM Wiki, RAG, and Knowledge", korean: "LLM 위키/RAG/지식베이스", focus: "ingestion, chunking, embedding, retrieval, memory, vector store" },
  { slug: "spec-driven", title: "Spec-Driven and Requirements", korean: "스펙 드리븐/요구사항", focus: "requirements, ADR, design docs, spec artifacts, acceptance/test trace" },
  { slug: "eval-observability", title: "Evals, Observability, and Quality", korean: "평가/관측/품질", focus: "eval suites, benchmark harness, tracing, observability, quality gates" },
  { slug: "ai-infrastructure-serving", title: "AI Infrastructure and Serving", korean: "AI 인프라/서빙", focus: "model serving, API server, deployment, Docker/Kubernetes, runtime adapters" },
  { slug: "data-vector-platform", title: "Data and Vector Platforms", korean: "데이터/벡터 플랫폼", focus: "storage, index, embedding/vector path, query engine, persistence" },
  { slug: "security-governance", title: "Security, Governance, and Safety", korean: "보안/거버넌스/안전", focus: "sandbox, permission, policy, auth, guardrail, secret handling" },
  { slug: "developer-productivity", title: "Developer Productivity and DevTools", korean: "개발 생산성/DevTools", focus: "CLI/devtool entrypoints, SDK shape, CI/build scripts, automation" },
  { slug: "general-ai-open-source", title: "General AI Open Source", korean: "일반 AI 오픈소스", focus: "main architecture, dependency stack, tests, deployment, docs" }
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
      details.packageName = pkg.name || null;
      details.packageScripts = Object.keys(pkg.scripts || {}).slice(0, 20);
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
    if (!filePath || seen.has(filePath) || /[\n|()[\]<>]/.test(filePath)) return;
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
  if (!paths.length) return "not obvious";
  return paths.slice(0, max).join(", ");
}

function buildDeepInsight(repo, scan, manifests, patterns, references) {
  const topic = topicBySlug.get(repo.role) || topicBySlug.get("general-ai-open-source");
  const focusBuckets = topicBuckets(repo.role);
  const primaryBucket = focusBuckets.find((bucket) => scan.buckets[bucket]?.length) || "entrypoints";
  const primaryPaths = summarizePaths(scan.buckets[primaryBucket] || []);
  const operations = [
    scan.bucketCounts.eval ? "test/eval 경로가 보임" : null,
    scan.bucketCounts.ci ? "CI workflow가 보임" : null,
    scan.bucketCounts.container ? "container/deploy 파일이 보임" : null,
    scan.bucketCounts.instruction ? "에이전트 지시문 파일이 보임" : null
  ].filter(Boolean).join(", ") || "운영 보조 파일은 추가 확인 필요";
  const deps = manifests.dependencyCues.length ? manifests.dependencyCues.slice(0, 6).join(", ") : "dependency cue 약함";
  return `${topic.korean} 관점에서 ${patterns.slice(0, 3).join(", ")} 구조로 읽힌다. 핵심 소스 근거는 ${primaryBucket}=${primaryPaths}이고, 의존성 단서는 ${deps}, 검증/운영 단서는 ${operations}이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 ${references.length}개 파일 경로를 직접 스캔해야 확인된다.`;
}

function buildSourceRisks(scan, references) {
  const risks = [];
  if (scan.truncated) risks.push(`scan truncated at ${maxFilesPerRepo} files`);
  if (!scan.bucketCounts.entrypoints) risks.push("entrypoint path not obvious");
  if (!scan.bucketCounts.eval) risks.push("test/eval path not obvious");
  if (!scan.bucketCounts.ci) risks.push("ci path not obvious");
  if (!references.length) risks.push("no high-confidence source references");
  return risks.slice(0, 5);
}

async function buildRows() {
  const insightData = await readJson(inputInsightsFile, { repositories: [] });
  const rows = [];
  for (const repo of safeArray(insightData.repositories)) {
    const absolute = repo.localPath ? path.join(root, repo.localPath) : null;
    if (!absolute || !existsSync(absolute)) continue;
    const scan = await scanFiles(absolute);
    const manifests = await extractManifestDetails(absolute);
    const patterns = detectPatterns(repo, scan, manifests);
    const references = selectReferences(repo, scan, manifests);
    const score = sourceDepthScore(repo, scan, references, patterns);
    const risks = buildSourceRisks(scan, references);
    rows.push({
      id: repo.id,
      name: repo.name,
      url: repo.url,
      role: repo.role,
      roleTitle: repo.roleTitle,
      roleKorean: repo.roleKorean,
      region: repo.region,
      language: repo.language,
      stars: repo.stars,
      maturity: repo.maturity,
      evidence: repo.evidence,
      reportPath: repo.reportPath,
      localPath: repo.localPath,
      fileCount: scan.fileCount,
      dirCount: scan.dirCount,
      maxDepth: scan.maxObservedDepth,
      truncated: scan.truncated,
      topDirectories: scan.topDirectories,
      bucketCounts: scan.bucketCounts,
      buckets: scan.buckets,
      packageScripts: manifests.packageScripts,
      packageBins: manifests.packageBins,
      packageEntrypoints: manifests.packageEntrypoints,
      makeTargets: manifests.makeTargets,
      pythonProjectScripts: manifests.pythonProjectScripts,
      goModule: manifests.goModule,
      rustPackage: manifests.rustPackage,
      dependencyCues: manifests.dependencyCues,
      patterns,
      keySourceReferences: references,
      sourceDepthScore: score,
      sourceRisks: risks,
      deepInsight: buildDeepInsight(repo, scan, manifests, patterns, references)
    });
  }
  return rows.sort((a, b) => b.sourceDepthScore - a.sourceDepthScore || b.stars - a.stars || a.name.localeCompare(b.name));
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
  return refs.length ? refs.join("<br>") : "not obvious";
}

function renderSourceTable(rows, baseDir, limit = Infinity) {
  const selected = rows.slice(0, limit);
  if (!selected.length) return "_No source deep-scan rows indexed._\n";
  const body = selected.map((row) => {
    const repo = externalOrText(row.name, row.url);
    const source = linkFrom(baseDir, row.localPath, "source");
    const report = row.reportPath ? linkFrom(baseDir, row.reportPath, "report") : "";
    const links = [report, source].filter(Boolean).join(" / ");
    return `| ${repo} | ${row.fileCount} / ${row.dirCount} | ${row.sourceDepthScore} | ${tableText(row.patterns.join(", "))} | ${renderReferenceLinks(row, baseDir, 4)} | ${tableText(row.deepInsight)} | ${tableText(row.sourceRisks.join(", ") || "none")} | ${links} |`;
  }).join("\n");
  return `| Repository | Files / Dirs | Depth score | Source pattern | Key source references | Deep source insight | Risks | Links |\n| --- | ---: | ---: | --- | --- | --- | --- | --- |\n${body}\n`;
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
  return `## Navigation

| Entry | Use it for |
| --- | --- |
| ${linkFrom(baseDir, "README.md", "Repository README")} | Repo-wide orientation and top-level data/report structure. |
| ${linkFrom(baseDir, "reports/README.md", "Reports Reading Index")} | Main report navigation, topics, and folder map. |
| ${linkFrom(baseDir, "reports/by-topic/README.md", "Reports by Topic")} | Topic-first report navigation. |
| ${linkFrom(baseDir, "reports/tables/README.md", "Report Tables")} | Table-first view and CSV exports. |
| ${linkFrom(baseDir, "reports/repository-insights/README.md", "Repository Insights")} | Repository-by-repository assessment rows. |
| ${linkFrom(baseDir, "reports/source-deep-dives/README.md", "Source Deep Dives")} | Source-path-level findings by topic. |
`;
}

function renderMainReadme(rows) {
  const baseDir = "reports/source-deep-dives";
  const bucketTotals = aggregateBucketCounts(rows);
  const sourceReferenceCount = rows.reduce((sum, row) => sum + row.keySourceReferences.length, 0);
  const truncatedCount = rows.filter((row) => row.truncated).length;
  return `# Source Deep Dives

Generated: ${generatedAt}

This report adds topic-first, source-path-level evidence extracted from the locally cloned repositories under \`sources/\`.

## 요약

- 조사 단위: 로컬 clone ${rows.length.toLocaleString("en-US")}개를 실제 파일 트리 기준으로 다시 스캔한 source deep-scan 보고서입니다.
- 포함 범위: file/dir count, entrypoint, agent runtime, MCP, retrieval/vector, spec, eval/test, security, CI, container, instruction file 경로를 주제별로 묶었습니다.
- 탐색 방식: 아래 Topic Index에서 주제를 고른 뒤, 각 레포 row의 Key source references를 따라가면 README만으로는 보이지 않는 구현 경로를 바로 확인할 수 있습니다.

## 총평

기존 repository insights가 레포별 총평과 위험도를 보여줬다면, 이 보고서는 “왜 그렇게 판단했는가”를 로컬 소스 파일 경로로 증명합니다. 특히 agent runtime, MCP, RAG, spec, eval, security처럼 README 설명만으로는 구조가 숨겨지는 영역을 주제별 표로 끌어올렸습니다.

${renderNavigation(baseDir)}

## Coverage

| Metric | Count |
| --- | ---: |
| Source-scanned repositories | ${rows.length} |
| Key source references extracted | ${sourceReferenceCount} |
| Truncated large scans | ${truncatedCount} |
| Entrypoint path hits | ${bucketTotals.entrypoints} |
| Agent/runtime path hits | ${bucketTotals.agentRuntime} |
| MCP path hits | ${bucketTotals.mcp} |
| Retrieval/vector path hits | ${bucketTotals.retrieval} |
| Spec/requirements path hits | ${bucketTotals.spec} |
| Eval/test path hits | ${bucketTotals.eval} |
| Security/policy path hits | ${bucketTotals.security} |
| Instruction file path hits | ${bucketTotals.instruction} |

## Topic Index

| Topic README | Repositories | Korean label | Source focus |
| --- | ---: | --- | --- |
${renderTopicSummary(rows, baseDir)}

## Source Pattern Matrix

| Topic | Repos | Entrypoint | Agent runtime | MCP | Retrieval | Spec | Eval/Test | Security | Instruction | CI | Container |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
${renderBucketMatrix(rows)}

## Highest Source-Depth Findings

${renderSourceTable(rows, baseDir, 80)}

## Data Files

- ${linkFrom(baseDir, "data/source-deep-scan.json", "data/source-deep-scan.json")}
- ${linkFrom(baseDir, "data/report-tables/source-deep-scan.csv", "data/report-tables/source-deep-scan.csv")}
`;
}

function renderTopicIndex(rows) {
  const baseDir = "reports/source-deep-dives/by-topic";
  return `# Source Deep Dives by Topic

Generated: ${generatedAt}

## 요약

- 조사 단위: source deep-scan rows를 역할/주제별 README로 나눈 목차입니다.
- 포함 범위: ${rows.length.toLocaleString("en-US")} repositories across ${topicDefinitions.length} topic groups.
- 탐색 방식: 주제 README로 들어가면 해당 주제의 파일 경로 근거, deep source insight, risk를 한 표에서 볼 수 있습니다.

## 총평

주제별 deep dive는 레포 이름보다 “무엇을 알고 싶은가”를 기준으로 읽을 때 효과적입니다. 예를 들어 MCP 구현만 보려면 Agent Harness and MCP, RAG 파이프라인만 보려면 LLM Wiki/RAG, 테스트와 관측성만 보려면 Evals/Observability에서 시작하면 됩니다.

${renderNavigation(baseDir)}

## Topics

| Topic README | Repositories | Korean label | Source focus |
| --- | ---: | --- | --- |
${renderTopicSummary(rows, baseDir)}
`;
}

function renderTopicReadme(topic, rows) {
  const baseDir = `reports/source-deep-dives/by-topic/${topic.slug}`;
  const bucketTotals = aggregateBucketCounts(rows);
  const sourceReferenceCount = rows.reduce((sum, row) => sum + row.keySourceReferences.length, 0);
  return `# ${topic.title} Source Deep Dive

Generated: ${generatedAt}

${topic.korean} 주제의 로컬 source deep-scan 결과입니다.

## 요약

- 조사 단위: \`${topic.slug}\` 역할로 분류된 로컬 소스 레포 ${rows.length.toLocaleString("en-US")}개입니다.
- 포함 범위: ${topic.focus} 경로를 중심으로 key source reference ${sourceReferenceCount.toLocaleString("en-US")}개를 추출했습니다.
- 탐색 방식: Deep source insight를 먼저 읽고, Key source references의 파일 링크를 따라가면 소스를 봐야만 알 수 있는 구현 단서를 확인할 수 있습니다.

## 총평

이 주제의 비교 포인트는 추상 기능명이 아니라 실제 파일 배치입니다. entrypoint, runtime, spec/test, CI/container, instruction 파일이 분리돼 있는지 또는 한곳에 섞여 있는지를 보면 재사용 가능한 구조와 후속 검증이 필요한 구조가 빠르게 구분됩니다.

${renderNavigation(baseDir)}

## Topic Coverage

| Metric | Count |
| --- | ---: |
| Repositories | ${rows.length} |
| Key source references | ${sourceReferenceCount} |
| Entrypoint path hits | ${bucketTotals.entrypoints} |
| Agent/runtime path hits | ${bucketTotals.agentRuntime} |
| MCP path hits | ${bucketTotals.mcp} |
| Retrieval/vector path hits | ${bucketTotals.retrieval} |
| Spec/requirements path hits | ${bucketTotals.spec} |
| Eval/test path hits | ${bucketTotals.eval} |
| Security/policy path hits | ${bucketTotals.security} |
| Instruction file path hits | ${bucketTotals.instruction} |

## Repository Source Findings

${renderSourceTable(rows, baseDir)}
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
    dependencyCues: row.dependencyCues.join(";"),
    keySourceReferences: row.keySourceReferences.map((ref) => `${ref.bucket}:${ref.path}`).join(";"),
    sourceRisks: row.sourceRisks.join(";"),
    deepInsight: row.deepInsight,
    reportPath: row.reportPath,
    localPath: row.localPath
  }));
}

async function main() {
  const rows = await buildRows();
  await rm(outputReportDir, { recursive: true, force: true });
  await mkdir(outputReportDir, { recursive: true });
  await mkdir(outputTopicDir, { recursive: true });
  await mkdir(path.dirname(outputDataFile), { recursive: true });
  await mkdir(path.dirname(outputCsvFile), { recursive: true });

  const byTopic = countBy(rows, (row) => row.role);
  await writeFile(outputDataFile, JSON.stringify({
    generatedAt,
    description: "Topic-wise local source deep scan with source-path-level evidence extracted from sources/.",
    count: rows.length,
    byTopic,
    bucketTotals: aggregateBucketCounts(rows),
    repositories: rows
  }, null, 2));
  await writeFile(outputCsvFile, renderCsv([
    "name", "url", "role", "roleKorean", "region", "language", "stars", "maturity", "evidence",
    "fileCount", "dirCount", "maxDepth", "truncated", "sourceDepthScore", "patterns",
    "dependencyCues", "keySourceReferences", "sourceRisks", "deepInsight", "reportPath", "localPath"
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

  console.error(`source deep-scan repositories: ${rows.length}`);
  console.error(`source deep-scan topics: ${Object.keys(byTopic).length}`);
}

await main();
