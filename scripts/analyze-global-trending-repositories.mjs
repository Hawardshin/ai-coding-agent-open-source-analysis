import { spawnSync } from "node:child_process";
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

const repoDataFile = "data/global-trending-repositories-500.json";
const cloneStatusFile = "data/global-trending-clone-status-500.json";
const sourceSignalsFile = "data/global-trend-source-signals-2026-06-18.json";
const outputDataFile = "data/global-trending-analysis-500.json";
const outputReportFile = "reports/global-trending/00-global-open-source-trend-report-2026-06-18.md";
const perRepoReportDir = "reports/global-trending/repositories";
const generatedAt = new Date().toISOString();

const maxFilesPerRepo = Number(process.env.GLOBAL_TREND_ANALYSIS_FILE_LIMIT || 8000);
const maxSampleFilesPerRepo = Number(process.env.GLOBAL_TREND_ANALYSIS_SAMPLE_LIMIT || 140);
const maxReadBytesPerFile = Number(process.env.GLOBAL_TREND_ANALYSIS_READ_LIMIT || 90_000);
const maxAggregateCharsPerRepo = Number(process.env.GLOBAL_TREND_ANALYSIS_TEXT_LIMIT || 1_200_000);

const SKIP_DIRS = new Set([".git", "node_modules", "vendor", "dist", "build", "target", "coverage", "__pycache__", ".venv", "venv", ".next", ".nuxt", ".cache"]);
const RG_SKIP_GLOBS = [...SKIP_DIRS].map((dir) => `!${dir}/**`).concat(["!*.lock", "!*.min.*", "!*.map", "!*.png", "!*.jpg", "!*.jpeg", "!*.gif", "!*.webp", "!*.ico", "!*.pdf", "!*.zip", "!*.tar", "!*.gz", "!*.7z", "!*.dylib", "!*.so", "!*.dll", "!*.wasm"]);
const TEXT_EXTENSIONS = new Set([".md", ".mdx", ".txt", ".rst", ".adoc", ".json", ".jsonc", ".yaml", ".yml", ".toml", ".ini", ".env", ".conf", ".ts", ".tsx", ".js", ".jsx", ".mjs", ".cjs", ".py", ".go", ".rs", ".java", ".kt", ".kts", ".swift", ".cs", ".php", ".rb", ".scala", ".sh", ".bash", ".zsh", ".ps1", ".sql", ".proto", ".graphql", ".svelte", ".vue", ".astro", ".html", ".css", ".scss"]);
const MANIFEST_BASENAMES = new Set(["package.json", "pyproject.toml", "requirements.txt", "go.mod", "Cargo.toml", "pom.xml", "build.gradle", "build.gradle.kts", "Dockerfile", "docker-compose.yml", "docker-compose.yaml", "compose.yml", "compose.yaml", "Makefile", "tsconfig.json", "vite.config.ts", "next.config.js", "next.config.mjs", "README.md", "AGENTS.md", "CLAUDE.md", "GEMINI.md"]);

const SIGNALS = [
  { key: "aiAgent", label: "AI agent / orchestration", weight: 13, re: /\b(agent|agents|multi[-_ ]agent|tool_call|toolcall|function_call|functioncall|planner|planning|orchestration|langgraph|crewai|autogen|pydantic[-_ ]ai|workflow engine)\b/gi },
  { key: "codingAgent", label: "Coding agent / software automation", weight: 13, re: /\b(coding agent|code agent|software engineer agent|swe|claude code|codex|cline|opencode|openhands|aider|goose|cursor|codebase|repo map|code search)\b/gi },
  { key: "mcp", label: "MCP / agent interoperability", weight: 12, re: /\b(mcp|model context protocol|modelcontextprotocol|mcpserver|mcp server|agents\.md|agentic ai foundation|tool protocol)\b/gi },
  { key: "rag", label: "RAG / retrieval / knowledge", weight: 11, re: /\b(rag|retrieval|retriever|knowledge base|knowledge-base|vector search|hybrid search|bm25|rerank|embedding|chunking|semantic search|knowledge graph)\b/gi },
  { key: "localLlm", label: "Local LLM / inference", weight: 10, re: /\b(local llm|ollama|llama\.cpp|gguf|vllm|llamacpp|on[-_ ]device|edge inference|mlx|tgi|text-generation-inference|inference server)\b/gi },
  { key: "devtools", label: "Developer tools / DX", weight: 8, re: /\b(cli|sdk|developer tools|devtools|terminal|debugger|ide|editor|formatter|linter|package manager|build tool|dx)\b/gi },
  { key: "infra", label: "Cloud native / infrastructure", weight: 8, re: /\b(kubernetes|k8s|helm|terraform|operator|container|docker|service mesh|serverless|cloud native|gateway|proxy)\b/gi },
  { key: "observability", label: "Observability / evaluation", weight: 8, re: /\b(observability|opentelemetry|prometheus|grafana|tracing|monitoring|sentry|langfuse|phoenix|eval|evaluation|benchmark|ragas|deepeval|promptfoo)\b/gi },
  { key: "security", label: "Security / supply chain", weight: 8, re: /\b(security|oauth|oidc|jwt|authn|authz|privacy|pii|compliance|sbom|vulnerability|credential|secret|supply chain|scanner|malware)\b/gi },
  { key: "database", label: "Database / data infrastructure", weight: 7, re: /\b(database|postgres|postgresql|sqlite|mysql|redis|olap|warehouse|analytics|lakehouse|query engine|vector database)\b/gi },
  { key: "frontend", label: "Frontend / app framework", weight: 6, re: /\b(react|next\.?js|vue|svelte|vite|storybook|frontend|design system|tailwind|component library)\b/gi },
  { key: "dataMl", label: "Data / ML platform", weight: 7, re: /\b(machine learning|deep learning|pytorch|tensorflow|dataset|pipeline|mlops|training|finetuning|fine-tuning|tokenizer|model serving)\b/gi }
];

const CAPABILITIES = [
  { key: "llmFramework", label: "LLM/app framework", re: /(langchain|llama[-_]?index|haystack|semantic[-_]?kernel|dspy|crewai|autogen|litellm|openai|anthropic|ollama|transformers|sentence[-_]?transformers|vllm|pydantic[-_]?ai|mastra)/i },
  { key: "vectorSearch", label: "Vector/search store", re: /(qdrant|chroma|chromadb|milvus|pymilvus|weaviate|faiss|lancedb|pinecone|pgvector|elastic|opensearch|vespa|meilisearch|bm25|hnsw|annoy)/i },
  { key: "infraOps", label: "Infra/Ops", re: /(kubernetes|helm|terraform|docker|containerd|envoy|istio|opentelemetry|prometheus|grafana|serverless|cloudflare|supabase)/i },
  { key: "securityTooling", label: "Security tooling", re: /(semgrep|trivy|grype|syft|osv|slsa|sigstore|cosign|sbom|vulnerability|scanner|secret)/i },
  { key: "frontendStack", label: "Frontend stack", re: /(react|next|vue|svelte|vite|tailwind|storybook|component|design-system)/i },
  { key: "databaseRuntime", label: "Database/runtime", re: /(postgres|sqlite|mysql|redis|duckdb|clickhouse|supabase|mongodb|turso|neon|timescale)/i }
];

function readJson(file, fallback = null) {
  try {
    return JSON.parse(readFileSync(file, "utf8"));
  } catch {
    return fallback;
  }
}

function safeRead(file, limit = maxReadBytesPerFile) {
  try {
    const stats = statSync(file);
    if (!stats.isFile() || stats.size > limit) return "";
    return readFileSync(file, "utf8");
  } catch {
    return "";
  }
}

function safeCell(value) {
  return String(value ?? "").replaceAll("|", "\\|").replace(/\n/g, " ").trim();
}

function table(rows, headers) {
  if (!rows.length) return "_none_\n";
  const lines = [`| ${headers.join(" | ")} |`, `| ${headers.map(() => "---").join(" | ")} |`];
  for (const row of rows) lines.push(`| ${headers.map((header) => safeCell(row[header])).join(" | ")} |`);
  return `${lines.join("\n")}\n`;
}

function bulletList(items, limit = 30) {
  if (!items.length) return "_none_\n";
  const visible = items.slice(0, limit).map((item) => `- ${item}`);
  if (items.length > limit) visible.push(`- ... ${items.length - limit} more`);
  return `${visible.join("\n")}\n`;
}

function increment(map, key, amount = 1) {
  map.set(key, (map.get(key) || 0) + amount);
}

function topCounts(counts, limit = 30) {
  return [...counts.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])).slice(0, limit).map(([key, count]) => ({ key, count }));
}

function countBy(items, keyFn) {
  const counts = new Map();
  for (const item of items) {
    const key = keyFn(item);
    if (key) increment(counts, key);
  }
  return topCounts(counts, 40);
}

function runRgFiles(repoPath) {
  const args = ["--files", "--hidden"];
  for (const glob of RG_SKIP_GLOBS) args.push("-g", glob);
  const result = spawnSync("rg", args, { cwd: repoPath, encoding: "utf8", maxBuffer: 24 * 1024 * 1024 });
  if (result.status === 0 || result.stdout) return result.stdout.split(/\r?\n/).filter(Boolean).slice(0, maxFilesPerRepo).map((file) => file.replaceAll(path.sep, "/"));
  return null;
}

function walkFiles(repoPath, limit = maxFilesPerRepo) {
  const files = [];
  function walk(dir, prefix = "") {
    if (files.length >= limit) return;
    let entries;
    try {
      entries = readdirSync(dir, { withFileTypes: true });
    } catch {
      return;
    }
    for (const entry of entries) {
      if (files.length >= limit) return;
      if (entry.isDirectory()) {
        if (!SKIP_DIRS.has(entry.name)) walk(path.join(dir, entry.name), prefix ? `${prefix}/${entry.name}` : entry.name);
      } else if (entry.isFile()) {
        files.push(prefix ? `${prefix}/${entry.name}` : entry.name);
      }
    }
  }
  walk(repoPath);
  return files;
}

function listRepoFiles(repoPath) {
  return runRgFiles(repoPath) || walkFiles(repoPath);
}

function isTextFile(file) {
  return MANIFEST_BASENAMES.has(path.basename(file)) || TEXT_EXTENSIONS.has(path.extname(file).toLowerCase());
}

function filePriority(file) {
  const lower = file.toLowerCase();
  let score = 0;
  if (/(^|\/)readme\.(md|txt|rst|adoc)$/i.test(file)) score += 100;
  if (MANIFEST_BASENAMES.has(path.basename(file))) score += 75;
  if (/(^|\/)(agents|claude|gemini|copilot-instructions)\.md$/i.test(file)) score += 85;
  if (/(^|\/)(docs?|specs?|prompts?|\.cursor|\.github\/workflows|examples?)\//i.test(file)) score += 40;
  if (/(mcp|agent|rag|retrieval|embedding|vector|memory|llm|prompt|eval|benchmark|security|kubernetes|database|frontend|cli)/i.test(lower)) score += 35;
  if (/(test|spec|example|sample|demo)/i.test(lower)) score += 10;
  if (lower.split("/").length <= 2) score += 10;
  return score;
}

function selectSampleFiles(files) {
  return files.filter(isTextFile).map((file) => ({ file, score: filePriority(file) })).sort((a, b) => b.score - a.score || a.file.localeCompare(b.file)).slice(0, maxSampleFilesPerRepo).map((item) => item.file);
}

function findManifests(files) {
  return files.filter((file) => MANIFEST_BASENAMES.has(path.basename(file)) || /(^|\/)(package|pyproject|requirements|go|cargo|docker-compose|compose|pom|build\.gradle|tsconfig)\./i.test(file)).sort((a, b) => filePriority(b) - filePriority(a) || a.localeCompare(b)).slice(0, 40);
}

function findReadme(files, repoPath) {
  const file = files.filter((candidate) => /(^|\/)readme\.(md|txt|rst|adoc)$/i.test(candidate)).sort((a, b) => a.split("/").length - b.split("/").length || a.localeCompare(b))[0] || null;
  if (!file) return { file: null, title: null, excerpt: "", headings: [] };
  const content = safeRead(path.join(repoPath, file), 200_000);
  return {
    file,
    title: content.match(/^#\s+(.+)$/m)?.[1]?.trim() || null,
    headings: [...content.matchAll(/^#{1,3}\s+(.+)$/gm)].slice(0, 10).map((match) => match[1].trim()),
    excerpt: content.replace(/```[\s\S]*?```/g, " ").replace(/[#>*_`[\]()|:-]+/g, " ").replace(/\s+/g, " ").trim().slice(0, 700)
  };
}

function findSpecArtifacts(files) {
  return files.filter((file) => /(^|\/)(agents|claude|gemini|copilot-instructions|requirements?|design|tasks?|spec|specification|prd|adr|architecture|roadmap|plan|prompt|eval|benchmark|cursor-rules?)\.(md|mdx|txt|ya?ml|json|toml)$/i.test(file) || /(^|\/)(\.cursor|\.kiro|\.claude|\.github\/instructions|\.github\/prompts|docs\/adr|docs\/architecture|specs?|prompts?)\//i.test(file)).sort((a, b) => filePriority(b) - filePriority(a) || a.localeCompare(b)).slice(0, 50);
}

function findAgentInstructionFiles(files) {
  return files.filter((file) => /(^|\/)(AGENTS|CLAUDE|GEMINI|CODY|COPILOT|cursor-rules?|copilot-instructions)\.(md|txt|ya?ml|json)$/i.test(file) || /(^|\/)(\.cursor|\.claude|\.github\/instructions|\.github\/prompts|prompts?)\//i.test(file)).sort((a, b) => filePriority(b) - filePriority(a) || a.localeCompare(b)).slice(0, 40);
}

function classifyStack(files, manifests) {
  const stacks = [];
  const text = `${files.join("\n")}\n${manifests.join("\n")}`.toLowerCase();
  const has = (re) => re.test(text);
  if (has(/(^|\/)(package\.json|tsconfig\.json|vite\.config|next\.config)|\.(ts|tsx|js|jsx|mjs|cjs|vue|svelte|astro)$/m)) stacks.push("Node/TypeScript/JavaScript");
  if (has(/(^|\/)(pyproject\.toml|requirements\.txt|poetry\.lock|uv\.lock)|\.py$/m)) stacks.push("Python");
  if (has(/(^|\/)cargo\.toml|\.rs$/m)) stacks.push("Rust");
  if (has(/(^|\/)go\.mod|\.go$/m)) stacks.push("Go");
  if (has(/(^|\/)(pom\.xml|build\.gradle|build\.gradle\.kts)|\.(java|kt|kts)$/m)) stacks.push("Java/Kotlin");
  if (has(/\.swift$/m)) stacks.push("Swift");
  if (has(/\.(c|cc|cpp|h|hpp)$/m)) stacks.push("C/C++");
  if (has(/\.(cs|fs)$/m)) stacks.push(".NET");
  if (has(/\.rb$/m)) stacks.push("Ruby");
  if (has(/\.php$/m)) stacks.push("PHP");
  if (!stacks.length && has(/\.(md|rst|adoc)$/m)) stacks.push("docs/awesome-list");
  return stacks.length ? stacks.slice(0, 6) : ["unknown/mixed"];
}

function getHead(repoPath) {
  const result = spawnSync("git", ["-C", repoPath, "rev-parse", "--short", "HEAD"], { encoding: "utf8", maxBuffer: 1024 * 1024 });
  return result.stdout?.trim() || null;
}

function topList(counts, limit = 16) {
  return [...counts.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])).slice(0, limit).map(([key, count]) => ({ key, count }));
}

function extCounts(files) {
  const counts = new Map();
  for (const file of files) increment(counts, path.extname(file).toLowerCase() || "[no-ext]");
  return topList(counts);
}

function dirCounts(files) {
  const counts = new Map();
  for (const file of files) increment(counts, file.split("/")[0] || ".");
  return topList(counts, 14);
}

function sampleRepoText(repoPath, files) {
  const sampleFiles = selectSampleFiles(files);
  const perFile = [];
  let aggregate = "";
  for (const file of sampleFiles) {
    if (aggregate.length >= maxAggregateCharsPerRepo) break;
    const content = safeRead(path.join(repoPath, file));
    if (!content) continue;
    const trimmed = content.slice(0, maxReadBytesPerFile);
    perFile.push({ file, content: trimmed });
    aggregate += `\n\n--- FILE: ${file} ---\n${trimmed}`;
  }
  return { sampleFiles: perFile.map((item) => item.file), perFile, aggregate: aggregate.slice(0, maxAggregateCharsPerRepo) };
}

function detectSignals(sample) {
  return SIGNALS.map((signal) => {
    const matches = sample.aggregate.match(signal.re);
    const count = matches ? Math.min(matches.length, 500) : 0;
    const evidenceFiles = [];
    if (count) {
      for (const item of sample.perFile) {
        signal.re.lastIndex = 0;
        if (signal.re.test(item.content)) evidenceFiles.push(item.file);
        if (evidenceFiles.length >= 6) break;
      }
    }
    signal.re.lastIndex = 0;
    return { key: signal.key, label: signal.label, count, evidenceFiles, present: count > 0 };
  });
}

function detectCapabilities(sample, manifests) {
  const text = `${sample.aggregate}\n${manifests.join("\n")}`;
  return CAPABILITIES.filter((capability) => capability.re.test(text)).map((capability) => ({ key: capability.key, label: capability.label }));
}

function deriveCategories(repo, detectedSignals, capabilities, files) {
  const categories = new Set(repo.tags || []);
  for (const signal of detectedSignals) {
    if (!signal.present) continue;
    if (signal.key === "aiAgent") categories.add("ai-agent");
    if (signal.key === "codingAgent") categories.add("coding-agent");
    if (signal.key === "mcp") categories.add("mcp");
    if (signal.key === "rag") categories.add("rag");
    if (signal.key === "localLlm") categories.add("local-llm");
    if (signal.key === "devtools") categories.add("devtools");
    if (signal.key === "infra") categories.add("infra");
    if (signal.key === "observability") categories.add("observability");
    if (signal.key === "security") categories.add("security");
    if (signal.key === "database") categories.add("database");
    if (signal.key === "frontend") categories.add("frontend");
    if (signal.key === "dataMl") categories.add("data-ml");
  }
  for (const capability of capabilities) categories.add(capability.key);
  if (files.some((file) => /(^|\/)(sdk|client|api|openapi)\b/i.test(file))) categories.add("sdk-api");
  if (files.some((file) => /(^|\/)(examples?|samples?|demo)\//i.test(file))) categories.add("example-rich");
  return [...categories].sort();
}

function priorityScore(repo, signals, files, manifests, specArtifacts, agentInstructionFiles) {
  const signalScore = signals.reduce((sum, signal) => {
    const config = SIGNALS.find((item) => item.key === signal.key);
    return sum + (signal.present ? config.weight + Math.min(12, signal.count / 20) : 0);
  }, 0);
  const metadata = (repo.trendScore || 0) * 1.25 + Math.min(62, Math.log10((repo.stars || 0) + 1) * 17);
  const maturity = Math.min(18, Math.log10(files.length + 1) * 6) + Math.min(14, manifests.length * 1.5);
  const docs = Math.min(20, specArtifacts.length * 1.1 + agentInstructionFiles.length * 1.2);
  const trendBoost = (repo.trendingSightings || []).length ? Math.min(20, repo.trendingSightings.length * 3) : 0;
  const lowAdoptionPenalty = (repo.stars || 0) === 0 ? 45 : ((repo.stars || 0) < 10 ? 18 : 0);
  return Math.round(metadata + signalScore + maturity + docs + trendBoost - lowAdoptionPenalty);
}

function insightFor(repo, categories, stacks) {
  const points = [];
  if (categories.includes("coding-agent")) points.push("Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.");
  if (categories.includes("mcp")) points.push("MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.");
  if (categories.includes("rag")) points.push("RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.");
  if (categories.includes("local-llm")) points.push("로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.");
  if (categories.includes("infra")) points.push("cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.");
  if (categories.includes("security")) points.push("security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.");
  if (categories.includes("frontend")) points.push("frontend/DX 신호가 있어 실제 사용자 인터페이스와 개발자 경험을 확인할 가치가 있다.");
  if (!points.length) points.push(`${stacks.join(", ")} 기반의 글로벌 OSS 후보로, GitHub recency/stars/trending 신호 기준으로 포함되었다.`);
  if (repo.stars > 30000) points.push("글로벌 스타 수가 높아 생태계 표준 또는 학습 기준점으로 우선순위가 높다.");
  return points.slice(0, 5);
}

function analyzeRepo(repo, cloneResult) {
  const repoPath = repo.localPath;
  if (!existsSync(repoPath) || !existsSync(path.join(repoPath, ".git"))) {
    return { name: repo.name, url: repo.url, localPath: repoPath, cloneStatus: "missing", categories: repo.tags || [], error: "local clone missing" };
  }
  const files = listRepoFiles(repoPath);
  const manifests = findManifests(files);
  const readme = findReadme(files, repoPath);
  const specArtifacts = findSpecArtifacts(files);
  const agentInstructionFiles = findAgentInstructionFiles(files);
  const sample = sampleRepoText(repoPath, files);
  const detectedSignals = detectSignals(sample);
  const capabilities = detectCapabilities(sample, manifests);
  const categories = deriveCategories(repo, detectedSignals, capabilities, files);
  const stacks = classifyStack(files, manifests);
  const score = priorityScore(repo, detectedSignals, files, manifests, specArtifacts, agentInstructionFiles);
  const reportPath = `${perRepoReportDir}/${repo.name.replace("/", "__")}.md`;
  return {
    name: repo.name,
    owner: repo.owner,
    repo: repo.repo,
    url: repo.url,
    description: repo.description || "",
    language: repo.language || null,
    stars: repo.stars || 0,
    forks: repo.forks || 0,
    license: repo.license || null,
    pushedAt: repo.pushedAt || null,
    trendScore: repo.trendScore || 0,
    priorityScore: score,
    tags: repo.tags || [],
    categories,
    stacks,
    localPath: repoPath,
    head: cloneResult?.head || getHead(repoPath),
    cloneStatus: cloneResult?.status || "existing",
    trendingSightings: repo.trendingSightings || [],
    fileCount: files.length,
    fileLimitHit: files.length >= maxFilesPerRepo,
    manifestCount: manifests.length,
    manifests: manifests.slice(0, 20),
    readme,
    extensionCounts: extCounts(files),
    topDirectories: dirCounts(files),
    docsCount: files.filter((file) => /(^|\/)(docs?|wiki|guides?)\//i.test(file) || /\.(md|mdx|rst|adoc)$/i.test(file)).length,
    testCount: files.filter((file) => /(^|\/)(__tests__|tests?|specs?|e2e|fixtures?)\//i.test(file) || /(\.test\.|\.spec\.|_test\.)/i.test(file)).length,
    ciCount: files.filter((file) => /(^|\/)(\.github\/workflows|Dockerfile|docker-compose|compose\.ya?ml|helm|k8s|kubernetes|terraform)\b/i.test(file)).length,
    specArtifactCount: specArtifacts.length,
    specArtifacts: specArtifacts.slice(0, 20),
    agentInstructionFileCount: agentInstructionFiles.length,
    agentInstructionFiles: agentInstructionFiles.slice(0, 15),
    sampleFiles: sample.sampleFiles.slice(0, 30),
    detectedSignals,
    capabilities,
    insight: insightFor(repo, categories, stacks),
    reportPath
  };
}

function writeMarkdown(file, lines) {
  mkdirSync(path.dirname(file), { recursive: true });
  writeFileSync(file, `${lines.join("\n").replace(/\n+$/g, "")}\n`);
}

function signalRows(analysis) {
  return analysis.detectedSignals.filter((signal) => signal.present).sort((a, b) => b.count - a.count || a.label.localeCompare(b.label)).map((signal) => ({ signal: signal.label, matches: signal.count, evidence: signal.evidenceFiles.slice(0, 3).join(", ") }));
}

function writeRepoReport(analysis) {
  writeMarkdown(analysis.reportPath, [
    `# ${analysis.name}`,
    "",
    `Generated: ${generatedAt}`,
    "",
    "## Basic Info",
    "",
    table([
      { key: "GitHub", value: analysis.url },
      { key: "local path", value: analysis.localPath },
      { key: "HEAD", value: analysis.head || "" },
      { key: "stars/forks", value: `${analysis.stars} / ${analysis.forks}` },
      { key: "language", value: analysis.language || "" },
      { key: "license", value: analysis.license || "" },
      { key: "pushedAt", value: analysis.pushedAt || "" },
      { key: "trendScore / priorityScore", value: `${analysis.trendScore} / ${analysis.priorityScore}` }
    ], ["key", "value"]),
    "",
    "## Interpretation",
    "",
    bulletList(analysis.insight),
    "",
    "## Detected Trend Signals",
    "",
    table(signalRows(analysis), ["signal", "matches", "evidence"]),
    "",
    "## Categories And Stack",
    "",
    table([
      { key: "categories", value: analysis.categories.join(", ") },
      { key: "stacks", value: analysis.stacks.join(", ") },
      { key: "capabilities", value: analysis.capabilities.map((item) => item.label).join(", ") || "" }
    ], ["key", "value"]),
    "",
    "## Structure Summary",
    "",
    table([
      { key: "files", value: `${analysis.fileCount}${analysis.fileLimitHit ? " (capped)" : ""}` },
      { key: "manifests", value: analysis.manifestCount },
      { key: "docs", value: analysis.docsCount },
      { key: "tests", value: analysis.testCount },
      { key: "ci/ops", value: analysis.ciCount },
      { key: "spec artifacts", value: analysis.specArtifactCount },
      { key: "agent instruction files", value: analysis.agentInstructionFileCount }
    ], ["key", "value"]),
    "",
    "## README Signal",
    "",
    table([{ file: analysis.readme.file || "", title: analysis.readme.title || "", headings: analysis.readme.headings.join(" / "), excerpt: analysis.readme.excerpt }], ["file", "title", "headings", "excerpt"]),
    "",
    "## Key Files",
    "",
    "### Manifests",
    "",
    bulletList(analysis.manifests, 20),
    "",
    "### Spec / Docs / Prompt Artifacts",
    "",
    bulletList(analysis.specArtifacts, 20),
    "",
    "### Agent Instruction Files",
    "",
    bulletList(analysis.agentInstructionFiles, 15),
    "",
    "## Top Directories",
    "",
    table(analysis.topDirectories.map((item) => ({ dir: item.key, count: item.count })), ["dir", "count"]),
    "",
    "## Extension Distribution",
    "",
    table(analysis.extensionCounts.map((item) => ({ ext: item.key, count: item.count })), ["ext", "count"]),
    "",
    "## Next Deep-Dive Points",
    "",
    bulletList([
      "Trace README and manifest entrypoints before judging runtime quality.",
      "Use evidence files to follow agent/MCP/RAG/security/infra flows in code.",
      "For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior."
    ])
  ]);
}

function repoRows(analyses, limit = 50) {
  return analyses.slice(0, limit).map((analysis) => ({
    repo: analysis.name,
    score: analysis.priorityScore,
    stars: analysis.stars,
    stack: analysis.stacks.join(", "),
    categories: analysis.categories.slice(0, 5).join(", "),
    report: analysis.reportPath
  }));
}

function writeSummaryReport(data, stats) {
  const topByPriority = [...data.analyses].sort((a, b) => b.priorityScore - a.priorityScore || b.stars - a.stars);
  const topByTrend = [...data.analyses].sort((a, b) => b.trendScore - a.trendScore || b.stars - a.stars);
  const sourceRows = (data.trendSources || []).map((source) => ({ source: source.source, title: source.title, signals: (source.observedSignals || []).join(", "), url: source.url }));
  const collectionMethod = data.trendingScrapeEnabled
    ? "This corpus combines live GitHub Trending, GitHub Search recency/stars, major global OSS organizations, seed repositories, and qualitative sources such as OSSInsight, Octoverse, Vela, LangChain, Firecrawl, ITPro, and Hacker News. The ranking is a practical triage score, not a statistically complete measurement of all global open source."
    : "This corpus combines qualitative GitHub Trending/OSSInsight/report signals with GitHub Search recency/stars and seed repositories. Live GitHub Trending scraping was disabled in this run because GitHub's volatile HTML fetches were slow; the final repository-level ranking comes from GitHub Search and seed metadata. The ranking is a practical triage score, not a statistically complete measurement of all global open source.";
  writeMarkdown(outputReportFile, [
    "# Global Trending Open Source 500 Analysis",
    "",
    `Generated: ${generatedAt}`,
    "",
    "## Scope",
    "",
    bulletList([
      `Selected repositories: ${data.repositories.length}`,
      `Local clone success: ${stats.cloneOkCount}`,
      `Local clone failed: ${stats.cloneFailedCount}`,
      `Per-repository reports: \`${perRepoReportDir}/*.md\``,
      `Analysis data: \`${outputDataFile}\``,
      `Clone status data: \`${cloneStatusFile}\``
    ]),
    "",
    "## Collection Method",
    "",
    collectionMethod,
    "",
    "## Trend Sources",
    "",
    table(sourceRows, ["source", "title", "signals", "url"]),
    "",
    "## Main Global Trends",
    "",
    bulletList([
      "AI agents are no longer only app frameworks; they now include coding agents, browser agents, codebase-memory tools, and workflow runtimes.",
      "MCP and AGENTS.md are becoming interoperability surfaces for tools and repository-specific agent behavior.",
      "RAG, vector search, graph memory, and local inference are converging into self-hosted knowledge systems.",
      "Security and supply-chain scanning are moving closer to agent workflows because agents execute tools and install dependencies.",
      "Cloud-native infrastructure, observability, and evaluation remain core because agentic systems need traceability and runtime controls.",
      "Frontend and developer-experience projects continue to trend globally as the interface layer for AI-first workflows."
    ]),
    "",
    "## Category Distribution",
    "",
    table(stats.categoryCounts.slice(0, 35).map((item) => ({ category: item.key, count: item.count })), ["category", "count"]),
    "",
    "## Stack Distribution",
    "",
    table(stats.stackCounts.slice(0, 20).map((item) => ({ stack: item.key, count: item.count })), ["stack", "count"]),
    "",
    "## Signal Distribution",
    "",
    table(stats.signalCounts.map((item) => ({ signal: item.key, repos: item.count })), ["signal", "repos"]),
    "",
    "## Priority Deep-Dive Candidates",
    "",
    table(repoRows(topByPriority, 60), ["repo", "score", "stars", "stack", "categories", "report"]),
    "",
    "## Original Trend Ranking Leaders",
    "",
    table(repoRows(topByTrend, 40), ["repo", "score", "stars", "stack", "categories", "report"]),
    "",
    "## Caveats",
    "",
    bulletList([
      "This is a 2026-06-18 snapshot from public web/GitHub metadata and shallow local clones.",
      "Static signal matching is triage. Runtime behavior, project health, security, and license suitability require separate review.",
      "`fileLimitHit=true` repositories hit the file scan cap and should be deep-scanned separately.",
      "GitHub Trending is volatile and may change by hour, language, and region."
    ])
  ]);
}

const repoData = readJson(repoDataFile);
const cloneStatus = readJson(cloneStatusFile, { results: [] });
const signalData = readJson(sourceSignalsFile, { trendSources: [] });
if (!repoData?.repositories?.length) throw new Error(`No repositories found in ${repoDataFile}`);

const cloneByName = new Map((cloneStatus.results || []).map((item) => [item.name, item]));
rmSync(perRepoReportDir, { recursive: true, force: true });
mkdirSync(perRepoReportDir, { recursive: true });

const analyses = [];
for (const [index, repo] of repoData.repositories.entries()) {
  const analysis = analyzeRepo(repo, cloneByName.get(repo.name));
  analyses.push(analysis);
  writeRepoReport(analysis);
  console.error(`[${index + 1}/${repoData.repositories.length}] analyzed ${repo.name}`);
}

const categoryCountsMap = new Map();
const stackCountsMap = new Map();
const signalCountsMap = new Map();
for (const analysis of analyses) {
  for (const category of analysis.categories || []) increment(categoryCountsMap, category);
  for (const stack of analysis.stacks || []) increment(stackCountsMap, stack);
  for (const signal of analysis.detectedSignals || []) if (signal.present) increment(signalCountsMap, signal.label);
}

const cloneOkCount = (cloneStatus.results || []).filter((item) => item.status === "cloned" || item.status === "existing").length;
const cloneFailedCount = (cloneStatus.results || []).filter((item) => item.status === "failed").length;
const sortedStars = [...repoData.repositories].sort((a, b) => (a.stars || 0) - (b.stars || 0));

const stats = {
  generatedAt,
  repositoryCount: repoData.repositories.length,
  cloneOkCount,
  cloneFailedCount,
  categoryCounts: topCounts(categoryCountsMap, 100),
  stackCounts: topCounts(stackCountsMap, 30),
  signalCounts: topCounts(signalCountsMap, 20),
  languageCounts: countBy(repoData.repositories, (repo) => repo.language || "unknown"),
  medianStars: sortedStars[Math.floor(sortedStars.length / 2)]?.stars || 0,
  zeroStarCount: repoData.repositories.filter((repo) => (repo.stars || 0) === 0).length,
  fileLimitHitCount: analyses.filter((analysis) => analysis.fileLimitHit).length,
  averagePriorityScore: Math.round(analyses.reduce((sum, analysis) => sum + (analysis.priorityScore || 0), 0) / analyses.length)
};

const output = {
  generatedAt,
  method: {
    repositoryFile: repoDataFile,
    cloneStatusFile,
    sourceSignalsFile,
    maxFilesPerRepo,
    maxSampleFilesPerRepo,
    maxReadBytesPerFile,
    note: "Static structure analysis over shallow local clones. Signal matches are heuristic and should be treated as triage, not proof of feature quality."
  },
  trendSources: signalData.trendSources || repoData.trendSources || [],
  trendingScrapeEnabled: Boolean(repoData.trendingScrapeEnabled),
  repositories: repoData.repositories.map((repo) => ({
    name: repo.name,
    url: repo.url,
    trendScore: repo.trendScore,
    tags: repo.tags,
    localPath: repo.localPath
  })),
  stats,
  analyses
};

mkdirSync(path.dirname(outputDataFile), { recursive: true });
writeFileSync(outputDataFile, `${JSON.stringify(output, null, 2)}\n`);
writeSummaryReport(output, stats);

console.error(`wrote ${outputDataFile}`);
console.error(`wrote ${outputReportFile}`);
console.error(`wrote ${analyses.length} repository reports under ${perRepoReportDir}`);
