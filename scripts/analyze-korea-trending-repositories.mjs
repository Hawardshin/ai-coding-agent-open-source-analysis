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

const repoDataFile = "data/korea-trending-repositories-500.json";
const cloneStatusFile = "data/korea-trending-clone-status-500.json";
const sourceSignalsFile = "data/korea-trend-source-signals-2026-06-18.json";
const outputDataFile = "data/korea-trending-analysis-500.json";
const outputReportFile = "reports/korea-trending/00-korea-open-source-trend-report-2026-06-18.md";
const perRepoReportDir = "reports/korea-trending/repositories";

const generatedAt = new Date().toISOString();
const maxFilesPerRepo = Number(process.env.KOREA_TREND_ANALYSIS_FILE_LIMIT || 8000);
const maxSampleFilesPerRepo = Number(process.env.KOREA_TREND_ANALYSIS_SAMPLE_LIMIT || 140);
const maxReadBytesPerFile = Number(process.env.KOREA_TREND_ANALYSIS_READ_LIMIT || 90_000);
const maxAggregateCharsPerRepo = Number(process.env.KOREA_TREND_ANALYSIS_TEXT_LIMIT || 1_200_000);

const RG_SKIP_GLOBS = [
  "!.git/**",
  "!node_modules/**",
  "!vendor/**",
  "!dist/**",
  "!build/**",
  "!target/**",
  "!coverage/**",
  "!__pycache__/**",
  "!.venv/**",
  "!venv/**",
  "!.next/**",
  "!.nuxt/**",
  "!.cache/**",
  "!*.lock",
  "!*.min.*",
  "!*.map",
  "!*.png",
  "!*.jpg",
  "!*.jpeg",
  "!*.gif",
  "!*.webp",
  "!*.ico",
  "!*.pdf",
  "!*.zip",
  "!*.tar",
  "!*.gz",
  "!*.7z",
  "!*.dylib",
  "!*.so",
  "!*.dll",
  "!*.wasm"
];

const SKIP_DIRS = new Set([
  ".git",
  "node_modules",
  "vendor",
  "dist",
  "build",
  "target",
  "coverage",
  "__pycache__",
  ".venv",
  "venv",
  ".next",
  ".nuxt",
  ".cache"
]);

const TEXT_EXTENSIONS = new Set([
  ".md",
  ".mdx",
  ".txt",
  ".rst",
  ".adoc",
  ".json",
  ".jsonc",
  ".yaml",
  ".yml",
  ".toml",
  ".ini",
  ".env",
  ".conf",
  ".ts",
  ".tsx",
  ".js",
  ".jsx",
  ".mjs",
  ".cjs",
  ".py",
  ".go",
  ".rs",
  ".java",
  ".kt",
  ".kts",
  ".swift",
  ".cs",
  ".php",
  ".rb",
  ".scala",
  ".sh",
  ".bash",
  ".zsh",
  ".ps1",
  ".sql",
  ".proto",
  ".graphql",
  ".svelte",
  ".vue",
  ".astro",
  ".html",
  ".css",
  ".scss"
]);

const MANIFEST_BASENAMES = new Set([
  "package.json",
  "pyproject.toml",
  "requirements.txt",
  "go.mod",
  "Cargo.toml",
  "pom.xml",
  "build.gradle",
  "build.gradle.kts",
  "Dockerfile",
  "docker-compose.yml",
  "docker-compose.yaml",
  "compose.yml",
  "compose.yaml",
  "Makefile",
  "tsconfig.json",
  "vite.config.ts",
  "next.config.js",
  "next.config.mjs",
  "README.md",
  "AGENTS.md",
  "CLAUDE.md",
  "GEMINI.md"
]);

const SIGNALS = [
  {
    key: "mcp",
    label: "MCP / tool protocol",
    weight: 12,
    re: /\b(mcp|model context protocol|modelcontextprotocol|mcpserver|mcp server|stdio server|tool protocol)\b/gi
  },
  {
    key: "aiAgent",
    label: "AI agent / tool use",
    weight: 11,
    re: /\b(agent|agents|multi[-_ ]agent|tool_call|toolcall|function_call|functioncall|planner|planning|orchestration|langgraph|crewai|autogen|pydantic[-_ ]ai|strands[-_ ]agents)\b/gi
  },
  {
    key: "rag",
    label: "RAG / retrieval",
    weight: 11,
    re: /\b(rag|retrieval|retriever|retrieve|knowledge base|knowledge-base|vector search|hybrid search|bm25|rerank|reranker|embedding|embeddings|chunk|chunking|semantic search)\b/gi
  },
  {
    key: "llmWikiMemory",
    label: "LLM wiki / memory / graph",
    weight: 10,
    re: /\b(llm[-_ ]?wiki|wiki|obsidian|markdown knowledge|backlink|graph[-_ ]?rag|knowledge graph|memory|memories|remember|entity|entities|relation|triplet|episodic|semantic memory)\b/gi
  },
  {
    key: "localLlm",
    label: "Local LLM / on-device inference",
    weight: 8,
    re: /\b(local llm|ollama|llama\.cpp|gguf|vllm|llamacpp|on[-_ ]device|edge inference|mlx|tgi|text-generation-inference)\b/gi
  },
  {
    key: "koreanNlp",
    label: "Korean language / Korea domain",
    weight: 10,
    re: /\b(korean|korea|hangul|hangeul|한국|한국어|한글|형태소|국어|naver|kakao|toss|daangn|woowa|kurly|upstage|samsung|linecorp|line[-_ ]?(bot|sdk|developers?))\b/gi
  },
  {
    key: "specDriven",
    label: "Spec / doc-driven workflow",
    weight: 8,
    re: /\b(spec|specification|requirements?|design doc|design\.md|tasks?\.md|prd|adr|architecture decision|acceptance criteria|constitution|cursor rules|claude\.md|agents\.md)\b/gi
  },
  {
    key: "frontendDx",
    label: "Frontend / developer experience",
    weight: 6,
    re: /\b(react|next\.?js|vue|svelte|vite|storybook|frontend|design system|sdk|developer experience|dx|typescript)\b/gi
  },
  {
    key: "infraObservability",
    label: "Infra / observability",
    weight: 6,
    re: /\b(kubernetes|k8s|helm|terraform|docker compose|opentelemetry|prometheus|grafana|observability|tracing|monitoring|sentry|platform engineering)\b/gi
  },
  {
    key: "securityCompliance",
    label: "Security / compliance",
    weight: 5,
    re: /\b(security|oauth|oidc|jwt|authn|authz|privacy|pii|compliance|sbom|vulnerability|credential|secret|policy)\b/gi
  }
];

const CAPABILITIES = [
  { key: "llmFramework", label: "LLM/app framework", re: /(langchain|llama[-_]?index|haystack|semantic[-_]?kernel|dspy|crewai|autogen|litellm|openai|anthropic|ollama|transformers|sentence[-_]?transformers|vllm|pydantic[-_]?ai)/i },
  { key: "vectorSearch", label: "Vector/search store", re: /(qdrant|chroma|chromadb|milvus|pymilvus|weaviate|faiss|lancedb|pinecone|pgvector|elastic|opensearch|vespa|meilisearch|bm25|hnsw|annoy)/i },
  { key: "graphMemory", label: "Graph/memory store", re: /(neo4j|falkor|kuzu|networkx|igraph|graphrag|dgraph|arangodb|graphiti|memory|sqlite|postgres|redis)/i },
  { key: "documentParsing", label: "Document parsing/OCR", re: /(unstructured|pypdf|pdfplumber|pymupdf|pdfminer|tika|mammoth|python-docx|docx|readability|cheerio|beautifulsoup|markitdown|mineru|paddleocr|tesseract|hwp|hwpx)/i },
  { key: "evalObservability", label: "Eval/observability", re: /(ragas|deepeval|langfuse|phoenix|trulens|promptfoo|opentelemetry|sentry|prometheus|grafana|wandb|mlflow|benchmark)/i },
  { key: "localRuntime", label: "Local runtime", re: /(ollama|llama\.cpp|gguf|vllm|mlx|localai|tgi|text-generation-inference|edge inference)/i }
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

function relPath(file) {
  return file.replaceAll(path.sep, "/");
}

function safeCell(value) {
  return String(value ?? "")
    .replaceAll("|", "\\|")
    .replace(/\n/g, " ")
    .trim();
}

function table(rows, headers) {
  if (!rows.length) return "_없음_\n";
  const lines = [`| ${headers.join(" | ")} |`, `| ${headers.map(() => "---").join(" | ")} |`];
  for (const row of rows) lines.push(`| ${headers.map((header) => safeCell(row[header])).join(" | ")} |`);
  return `${lines.join("\n")}\n`;
}

function bulletList(items, limit = 30) {
  if (!items.length) return "_없음_\n";
  const visible = items.slice(0, limit).map((item) => `- ${item}`);
  if (items.length > limit) visible.push(`- ... ${items.length - limit} more`);
  return `${visible.join("\n")}\n`;
}

function countBy(items, keyFn) {
  const counts = new Map();
  for (const item of items) {
    const key = keyFn(item);
    if (!key) continue;
    counts.set(key, (counts.get(key) || 0) + 1);
  }
  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .map(([key, count]) => ({ key, count }));
}

function topCounts(counts, limit = 20) {
  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .slice(0, limit)
    .map(([key, count]) => ({ key, count }));
}

function increment(map, key, amount = 1) {
  map.set(key, (map.get(key) || 0) + amount);
}

function runRgFiles(repoPath) {
  const args = ["--files", "--hidden"];
  for (const glob of RG_SKIP_GLOBS) args.push("-g", glob);
  const result = spawnSync("rg", args, {
    cwd: repoPath,
    encoding: "utf8",
    maxBuffer: 24 * 1024 * 1024
  });
  if (result.status === 0 || result.stdout) {
    return result.stdout.split(/\r?\n/).filter(Boolean).slice(0, maxFilesPerRepo).map(relPath);
  }
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
        if (SKIP_DIRS.has(entry.name)) continue;
        walk(path.join(dir, entry.name), prefix ? `${prefix}/${entry.name}` : entry.name);
      } else if (entry.isFile()) {
        files.push(prefix ? `${prefix}/${entry.name}` : entry.name);
      }
    }
  }
  walk(repoPath);
  return files;
}

function listRepoFiles(repoPath) {
  const fromRg = runRgFiles(repoPath);
  return fromRg || walkFiles(repoPath);
}

function isTextFile(file) {
  const base = path.basename(file);
  if (MANIFEST_BASENAMES.has(base)) return true;
  return TEXT_EXTENSIONS.has(path.extname(file).toLowerCase());
}

function basenameMatches(file, names) {
  const base = path.basename(file).toLowerCase();
  return names.some((name) => base === name.toLowerCase());
}

function filePriority(file) {
  const lower = file.toLowerCase();
  let score = 0;
  if (/(^|\/)readme\.(md|txt|rst|adoc)$/i.test(file)) score += 100;
  if (MANIFEST_BASENAMES.has(path.basename(file))) score += 80;
  if (/(^|\/)(agents|claude|gemini|copilot-instructions)\.md$/i.test(file)) score += 85;
  if (/(^|\/)(docs?|specs?|prompts?|\.cursor|\.kiro|\.github\/workflows)\//i.test(file)) score += 45;
  if (/(mcp|agent|rag|retrieval|embedding|vector|wiki|memory|korean|hangul|hwp|law|llm|prompt|eval|benchmark)/i.test(lower)) score += 35;
  if (/(test|spec|example|sample|demo)/i.test(lower)) score += 10;
  if (lower.split("/").length <= 2) score += 10;
  return score;
}

function selectSampleFiles(files) {
  return files
    .filter(isTextFile)
    .map((file) => ({ file, score: filePriority(file) }))
    .sort((a, b) => b.score - a.score || a.file.localeCompare(b.file))
    .slice(0, maxSampleFilesPerRepo)
    .map((item) => item.file);
}

function extCounts(files) {
  const counts = new Map();
  for (const file of files) {
    let ext = path.extname(file).toLowerCase();
    if (!ext) ext = "[no-ext]";
    increment(counts, ext);
  }
  return topCounts(counts, 16);
}

function dirCounts(files) {
  const counts = new Map();
  for (const file of files) {
    const first = file.split("/")[0] || ".";
    increment(counts, first);
  }
  return topCounts(counts, 14);
}

function findManifests(files) {
  return files
    .filter((file) => MANIFEST_BASENAMES.has(path.basename(file)) || /(^|\/)(package|pyproject|requirements|go|cargo|docker-compose|compose|pom|build\.gradle|tsconfig)\./i.test(file))
    .sort((a, b) => filePriority(b) - filePriority(a) || a.localeCompare(b))
    .slice(0, 40);
}

function findReadme(files, repoPath) {
  const candidates = files
    .filter((file) => /(^|\/)readme\.(md|txt|rst|adoc)$/i.test(file))
    .sort((a, b) => a.split("/").length - b.split("/").length || a.localeCompare(b));
  const file = candidates[0] || null;
  if (!file) return { file: null, title: null, excerpt: "", headings: [] };
  const content = safeRead(path.join(repoPath, file), 200_000);
  const title = content.match(/^#\s+(.+)$/m)?.[1]?.trim() || null;
  const headings = [...content.matchAll(/^#{1,3}\s+(.+)$/gm)].slice(0, 10).map((match) => match[1].trim());
  const excerpt = content
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/[#>*_`[\]()|:-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 700);
  return { file, title, excerpt, headings };
}

function findSpecArtifacts(files) {
  return files
    .filter((file) => /(^|\/)(agents|claude|gemini|copilot-instructions|requirements?|design|tasks?|spec|specification|prd|adr|architecture|roadmap|plan|prompt|eval|benchmark|cursor-rules?)\.(md|mdx|txt|ya?ml|json|toml)$/i.test(file)
      || /(^|\/)(\.cursor|\.kiro|\.claude|\.github\/instructions|docs\/adr|docs\/architecture|specs?|prompts?)\//i.test(file))
    .sort((a, b) => filePriority(b) - filePriority(a) || a.localeCompare(b))
    .slice(0, 50);
}

function findAgentInstructionFiles(files) {
  return files
    .filter((file) => /(^|\/)(AGENTS|CLAUDE|GEMINI|CODY|COPILOT|cursor-rules?|copilot-instructions)\.(md|txt|ya?ml|json)$/i.test(file)
      || /(^|\/)(\.cursor|\.claude|\.github\/instructions|\.github\/prompts|prompts?)\//i.test(file))
    .sort((a, b) => filePriority(b) - filePriority(a) || a.localeCompare(b))
    .slice(0, 40);
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
  const result = spawnSync("git", ["-C", repoPath, "rev-parse", "--short", "HEAD"], {
    encoding: "utf8",
    maxBuffer: 1024 * 1024
  });
  return result.stdout?.trim() || null;
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

function countSignalMatches(text, re) {
  const matches = text.match(re);
  return matches ? Math.min(matches.length, 500) : 0;
}

function detectSignals(sample) {
  return SIGNALS.map((signal) => {
    const count = countSignalMatches(sample.aggregate, signal.re);
    const evidenceFiles = [];
    if (count > 0) {
      for (const item of sample.perFile) {
        signal.re.lastIndex = 0;
        if (signal.re.test(item.content)) evidenceFiles.push(item.file);
        if (evidenceFiles.length >= 6) break;
      }
    }
    signal.re.lastIndex = 0;
    return {
      key: signal.key,
      label: signal.label,
      count,
      evidenceFiles,
      present: count > 0
    };
  });
}

function detectCapabilities(sample, manifests) {
  const text = `${sample.aggregate}\n${manifests.join("\n")}`;
  return CAPABILITIES
    .filter((capability) => capability.re.test(text))
    .map((capability) => ({ key: capability.key, label: capability.label }));
}

function deriveCategories(repo, detectedSignals, capabilities, files) {
  const categories = new Set(repo.tags || []);
  for (const signal of detectedSignals) {
    if (!signal.present) continue;
    if (signal.key === "aiAgent") categories.add("ai-agent");
    if (signal.key === "mcp") categories.add("mcp");
    if (signal.key === "rag") categories.add("rag");
    if (signal.key === "llmWikiMemory") categories.add("llm-wiki-memory");
    if (signal.key === "localLlm") categories.add("local-llm");
    if (signal.key === "koreanNlp") categories.add("korea-signal");
    if (signal.key === "specDriven") categories.add("spec-driven");
    if (signal.key === "frontendDx") categories.add("frontend-dx");
    if (signal.key === "infraObservability") categories.add("infra-observability");
    if (signal.key === "securityCompliance") categories.add("security-compliance");
  }
  for (const capability of capabilities) categories.add(capability.key);
  if (files.some((file) => /(^|\/)(sdk|client|api|openapi)\b/i.test(file))) categories.add("sdk-api");
  if (files.some((file) => /(^|\/)(examples?|samples?|demo)\//i.test(file))) categories.add("example-rich");
  return [...categories].sort();
}

function analysisPriority(repo, signals, files, manifests, specArtifacts, agentInstructionFiles) {
  const signalScore = signals.reduce((sum, signal) => {
    const config = SIGNALS.find((item) => item.key === signal.key);
    return sum + (signal.present ? config.weight + Math.min(12, signal.count / 20) : 0);
  }, 0);
  const metadataScore = (repo.trendScore || 0) * 1.25 + Math.min(55, Math.log10((repo.stars || 0) + 1) * 18);
  const maturity = Math.min(18, Math.log10(files.length + 1) * 6) + Math.min(14, manifests.length * 1.5);
  const docs = Math.min(20, specArtifacts.length * 1.1 + agentInstructionFiles.length * 1.2);
  const seedBoost = repo.seed ? 20 : 0;
  const lowAdoptionPenalty = (repo.stars || 0) === 0 ? 45 : ((repo.stars || 0) < 5 ? 18 : 0);
  return Math.round(metadataScore + signalScore + maturity + docs + seedBoost - lowAdoptionPenalty);
}

function insightFor(repo, categories, stacks) {
  const points = [];
  if (categories.includes("mcp")) points.push("MCP 서버/도구 표면이 있어 Claude Code/Codex류 에이전트와 직접 연결하기 좋다.");
  if (categories.includes("rag")) points.push("검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.");
  if (categories.includes("llm-wiki-memory")) points.push("위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.");
  if (categories.includes("local-llm")) points.push("로컬 LLM/온디바이스 실행 신호가 있어 비용/보안/오프라인 요구와 연결된다.");
  if (categories.includes("korea-signal")) points.push("한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.");
  if (categories.includes("spec-driven")) points.push("스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.");
  if (categories.includes("frontend-dx")) points.push("프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.");
  if (!points.length) points.push(`${stacks.join(", ")} 기반의 일반 오픈소스 후보로, 트렌드 점수와 최근 업데이트 기준으로 포함되었다.`);
  if (repo.stars > 10000) points.push("스타 수가 높아 글로벌 채택/학습 자료로도 우선순위가 높다.");
  return points.slice(0, 5);
}

function analyzeRepo(repo, cloneResult) {
  const repoPath = repo.localPath;
  const exists = existsSync(repoPath) && existsSync(path.join(repoPath, ".git"));
  if (!exists) {
    return {
      name: repo.name,
      url: repo.url,
      localPath: repoPath,
      cloneStatus: "missing",
      categories: repo.tags || [],
      error: "local clone missing"
    };
  }

  const files = listRepoFiles(repoPath);
  const manifests = findManifests(files);
  const readme = findReadme(files, repoPath);
  const specArtifacts = findSpecArtifacts(files);
  const agentInstructionFiles = findAgentInstructionFiles(files);
  const docsCount = files.filter((file) => /(^|\/)(docs?|wiki|guides?)\//i.test(file) || /\.(md|mdx|rst|adoc)$/i.test(file)).length;
  const testCount = files.filter((file) => /(^|\/)(__tests__|tests?|specs?|e2e|fixtures?)\//i.test(file) || /(\.test\.|\.spec\.|_test\.)/i.test(file)).length;
  const ciCount = files.filter((file) => /(^|\/)(\.github\/workflows|Dockerfile|docker-compose|compose\.ya?ml|helm|k8s|kubernetes|terraform)\b/i.test(file)).length;
  const sample = sampleRepoText(repoPath, files);
  const signals = detectSignals(sample);
  const capabilities = detectCapabilities(sample, manifests);
  const categories = deriveCategories(repo, signals, capabilities, files);
  const stacks = classifyStack(files, manifests);
  const priorityScore = analysisPriority(repo, signals, files, manifests, specArtifacts, agentInstructionFiles);
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
    priorityScore,
    tags: repo.tags || [],
    categories,
    stacks,
    localPath: repoPath,
    head: cloneResult?.head || getHead(repoPath),
    cloneStatus: cloneResult?.status || "existing",
    fileCount: files.length,
    fileLimitHit: files.length >= maxFilesPerRepo,
    manifestCount: manifests.length,
    manifests: manifests.slice(0, 20),
    readme,
    extensionCounts: extCounts(files),
    topDirectories: dirCounts(files),
    docsCount,
    testCount,
    ciCount,
    specArtifactCount: specArtifacts.length,
    specArtifacts: specArtifacts.slice(0, 20),
    agentInstructionFileCount: agentInstructionFiles.length,
    agentInstructionFiles: agentInstructionFiles.slice(0, 15),
    sampleFiles: sample.sampleFiles.slice(0, 30),
    detectedSignals: signals,
    capabilities,
    insight: insightFor(repo, categories, stacks),
    reportPath
  };
}

function writeMarkdown(file, lines) {
  mkdirSync(path.dirname(file), { recursive: true });
  const body = lines.join("\n").replace(/\n+$/g, "");
  writeFileSync(file, `${body}\n`);
}

function signalSummaryRows(analysis) {
  return analysis.detectedSignals
    .filter((signal) => signal.present)
    .sort((a, b) => b.count - a.count || a.label.localeCompare(b.label))
    .map((signal) => ({
      signal: signal.label,
      matches: signal.count,
      evidence: signal.evidenceFiles.slice(0, 3).join(", ")
    }));
}

function writeRepoReport(analysis) {
  const lines = [
    `# ${analysis.name}`,
    "",
    `생성일: ${generatedAt}`,
    "",
    "## 기본 정보",
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
    "## 한줄 해석",
    "",
    bulletList(analysis.insight),
    "",
    "## 감지된 트렌드 신호",
    "",
    table(signalSummaryRows(analysis), ["signal", "matches", "evidence"]),
    "",
    "## 분류와 스택",
    "",
    table([
      { key: "categories", value: analysis.categories.join(", ") },
      { key: "stacks", value: analysis.stacks.join(", ") },
      { key: "capabilities", value: analysis.capabilities.map((item) => item.label).join(", ") || "" }
    ], ["key", "value"]),
    "",
    "## 구조 요약",
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
    "## README 신호",
    "",
    table([
      { key: "file", value: analysis.readme.file || "" },
      { key: "title", value: analysis.readme.title || "" },
      { key: "headings", value: analysis.readme.headings.join(" / ") },
      { key: "excerpt", value: analysis.readme.excerpt }
    ], ["key", "value"]),
    "",
    "## 주요 파일",
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
    "## 상위 디렉터리",
    "",
    table(analysis.topDirectories.map((item) => ({ dir: item.key, count: item.count })), ["dir", "count"]),
    "",
    "## 확장자 분포",
    "",
    table(analysis.extensionCounts.map((item) => ({ ext: item.key, count: item.count })), ["ext", "count"]),
    "",
    "## 다음 심층 분석 포인트",
    "",
    bulletList([
      "README와 manifest에서 실제 실행 경로를 확인한다.",
      "감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.",
      "스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다."
    ])
  ];
  writeMarkdown(analysis.reportPath, lines);
}

function repoRows(analyses, limit = 40) {
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
  const sourceRows = (data.trendSources || []).map((source) => ({
    source: source.source,
    title: source.title,
    signals: (source.observedSignals || []).join(", "),
    url: source.url
  }));

  const lines = [
    "# 한국 개발자 커뮤니티 트렌딩 오픈소스 500개 분석",
    "",
    `생성일: ${generatedAt}`,
    "",
    "## 검증 범위",
    "",
    bulletList([
      `선정 저장소: ${data.repositories.length}개`,
      `로컬 클론 성공: ${stats.cloneOkCount}개`,
      `로컬 클론 실패: ${stats.cloneFailedCount}개`,
      `저장소별 상세 보고서: \`${perRepoReportDir}/*.md\``,
      `구조/신호 데이터: \`${outputDataFile}\``,
      `클론 상태 데이터: \`${cloneStatusFile}\``
    ]),
    "",
    "## 수집 기준",
    "",
    "GeekNews, 국내 기술블로그, LinkedIn 공개 검색 스니펫을 정성 신호로 잡고, GitHub 검색/조직/seed 저장소를 recency, stars, forks, 한국 관련성, AI/RAG/MCP/LLM-wiki 신호로 다시 랭킹했다. LinkedIn은 로그인 장벽 때문에 공개 검색 결과 수준의 약한 신호로만 사용했다.",
    "",
    "## 참조한 트렌드 소스",
    "",
    table(sourceRows, ["source", "title", "signals", "url"]),
    "",
    "## 핵심 트렌드 해석",
    "",
    bulletList([
      "MCP는 국내에서도 법률/공공데이터/금융/사내 도구 연결로 빠르게 확산 중이며, 단순 API 래퍼보다 에이전트가 호출하기 쉬운 도구 표면이 중요해지고 있다.",
      "RAG와 LLM 위키는 별개 흐름이 아니라 문서 수집, chunking, retrieval, provenance, memory update를 묶는 지속 지식베이스 문제로 합쳐지고 있다.",
      "한국어/한글/국내 도메인 데이터는 범용 LLM 앱과 별도로 tokenizer, 형태소, HWP/HWPX, 법령/공시/청약/시장 데이터 연결에서 로컬 요구가 강하다.",
      "LINE/NAVER/Toss/Daangn/Samsung/NHN 계열은 AI만이 아니라 SDK, frontend DX, platform/infra 라이브러리까지 국내 실무 채택 가능성이 높은 기반 오픈소스를 계속 만든다.",
      "Claude Code/Codex류 워크플로는 README보다 AGENTS/CLAUDE/Cursor rules/spec docs/prompts 같은 에이전트 지침 파일이 실제 소스 탐색 품질을 좌우하는 쪽으로 이동하고 있다.",
      "로컬 LLM과 self-hosted 지식베이스는 보안, 비용, 내부망 배포 요구 때문에 한국 기업 환경에서 계속 중요한 축이 될 가능성이 높다."
    ]),
    "",
    "## 카테고리 분포",
    "",
    table(stats.categoryCounts.slice(0, 30).map((item) => ({ category: item.key, count: item.count })), ["category", "count"]),
    "",
    "## 스택 분포",
    "",
    table(stats.stackCounts.slice(0, 20).map((item) => ({ stack: item.key, count: item.count })), ["stack", "count"]),
    "",
    "## 감지 신호 분포",
    "",
    table(stats.signalCounts.map((item) => ({ signal: item.key, repos: item.count })), ["signal", "repos"]),
    "",
    "## 우선 심층 분석 후보",
    "",
    table(repoRows(topByPriority, 50), ["repo", "score", "stars", "stack", "categories", "report"]),
    "",
    "## 원래 트렌드 랭킹 상위",
    "",
    table(repoRows(topByTrend, 30), ["repo", "score", "stars", "stack", "categories", "report"]),
    "",
    "## 데이터 사용 시 주의",
    "",
    bulletList([
      "이 산출물은 2026-06-18 현재 공개 웹/검색/GitHub 메타데이터와 로컬 shallow clone 기준이다.",
      "정적 분석 결과이므로 런타임 동작, 보안성, 라이선스 적합성은 별도 검토가 필요하다.",
      "fileCount는 과도하게 큰 저장소에서 상한을 적용할 수 있다. `fileLimitHit=true` 항목은 별도 심층 스캔이 필요하다.",
      "한국 트렌드 신호는 커뮤니티와 기술블로그의 질적 신호를 반영한 것이며, 전체 한국 개발자 생태계를 통계적으로 대표한다고 볼 수는 없다."
    ])
  ];
  writeMarkdown(outputReportFile, lines);
}

const repoData = readJson(repoDataFile);
const cloneStatus = readJson(cloneStatusFile, { results: [] });
const signalData = readJson(sourceSignalsFile, { trendSources: [] });
if (!repoData?.repositories?.length) {
  throw new Error(`No repositories found in ${repoDataFile}`);
}

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
  for (const signal of analysis.detectedSignals || []) {
    if (signal.present) increment(signalCountsMap, signal.label);
  }
}

const cloneOkCount = (cloneStatus.results || []).filter((item) => item.status === "cloned" || item.status === "existing").length;
const cloneFailedCount = (cloneStatus.results || []).filter((item) => item.status === "failed").length;

const stats = {
  generatedAt,
  repositoryCount: repoData.repositories.length,
  cloneOkCount,
  cloneFailedCount,
  categoryCounts: topCounts(categoryCountsMap, 80),
  stackCounts: topCounts(stackCountsMap, 30),
  signalCounts: topCounts(signalCountsMap, 20),
  languageCounts: countBy(repoData.repositories, (repo) => repo.language || "unknown").slice(0, 30),
  medianStars: [...repoData.repositories].sort((a, b) => (a.stars || 0) - (b.stars || 0))[Math.floor(repoData.repositories.length / 2)]?.stars || 0,
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
