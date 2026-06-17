import { spawnSync } from "node:child_process";
import {
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  statSync,
  writeFileSync
} from "node:fs";
import path from "node:path";

const repoDataFile = "data/llm-wiki-repositories.json";
const structureDataFile = "data/llm-wiki-structure-analysis-100.json";
const outputDataFile = "data/llm-wiki-code-level-analysis-100.json";
const outputReportFile = "reports/llm-wiki/02-code-level-pipeline-comparison.md";
const perRepoReportDir = "reports/llm-wiki/code-level-repositories";

const SKIP_GLOBS = [
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
  "!*.svg",
  "!*.ico",
  "!*.pdf",
  "!*.zip",
  "!*.tar",
  "!*.gz",
  "!*.dylib",
  "!*.so",
  "!*.dll"
];

const CODE_EXTENSIONS = new Set([
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
  ".cs",
  ".rb",
  ".php",
  ".swift",
  ".scala",
  ".sql",
  ".sh",
  ".bash",
  ".zsh",
  ".ps1"
]);

const CONFIG_EXTENSIONS = new Set([".json", ".yaml", ".yml", ".toml", ".ini", ".env", ".conf"]);
const TEXT_EXTENSIONS = new Set([".md", ".mdx", ".txt", ".rst"]);

const PHASES = [
  {
    key: "ingestion",
    label: "Ingestion/source intake",
    rg: "\\b(ingest|ingestion|document[_-]?loader|data[_-]?loader|source[_-]?(watch|sync|import|loader|ingest|lifecycle)|connector|crawler|webclip|webclipper|upload|scrape|scraper|scheduled[_-]?import|sync_sources|syncSources|watchSources|sourceLifecycle)\\b",
    js: /\b(ingest|ingestion|document[_-]?loader|data[_-]?loader|source[_-]?(watch|sync|import|loader|ingest|lifecycle)|connector|crawler|webclip|webclipper|upload|scrape|scraper|scheduled[_-]?import|sync_sources|syncSources|watchSources|sourceLifecycle)\b/i
  },
  {
    key: "parsing",
    label: "Parsing/OCR/document extraction",
    rg: "\\b(pdf|ocr|mineru|tika|unstructured|pymupdf|pdfplumber|pdfminer|pdfium|readability|beautifulsoup|cheerio|docx|pptx|mammoth|pandoc|html2text|markitdown|llama_parse|extract_text|extractText)\\b",
    js: /\b(pdf|ocr|mineru|tika|unstructured|pymupdf|pdfplumber|pdfminer|pdfium|readability|beautifulsoup|cheerio|docx|pptx|mammoth|pandoc|html2text|markitdown|llama_parse|extract_text|extractText)\b/i
  },
  {
    key: "chunking",
    label: "Chunking/splitting",
    rg: "\\b(chunk|chunker|splitter|split_text|splitText|segment|token_window|tokenWindow|overlap|RecursiveCharacterTextSplitter|TextSplitter)\\b",
    js: /\b(chunk|chunker|splitter|split_text|splitText|segment|token_window|tokenWindow|overlap|RecursiveCharacterTextSplitter|TextSplitter)\b/i
  },
  {
    key: "embedding",
    label: "Embedding/vector index",
    rg: "\\b(embedding|embeddings|embedder|vector|faiss|milvus|qdrant|weaviate|chroma|chromadb|lancedb|pinecone|pgvector|hnsw|annoy|opensearch|elasticsearch|similarity_search|similaritySearch)\\b",
    js: /\b(embedding|embeddings|embedder|vector|faiss|milvus|qdrant|weaviate|chroma|chromadb|lancedb|pinecone|pgvector|hnsw|annoy|opensearch|elasticsearch|similarity_search|similaritySearch)\b/i
  },
  {
    key: "retrieval",
    label: "Retrieval/search/rerank",
    rg: "\\b(retrieve|retriever|retrieval|hybrid_search|hybridSearch|bm25|rerank|reranker|rrf|reciprocal_rank|search|query_engine|queryEngine|rank_documents|rankDocuments)\\b",
    js: /\b(retrieve|retriever|retrieval|hybrid_search|hybridSearch|bm25|rerank|reranker|rrf|reciprocal_rank|search|query_engine|queryEngine|rank_documents|rankDocuments)\b/i
  },
  {
    key: "wikiGraph",
    label: "Wiki/graph/entity model",
    rg: "\\b(knowledge_graph|knowledgeGraph|graphrag|graph_rag|entity|entities|relation|relations|triplet|community|wikilink|backlink|obsidian|markdown_page|markdownPage|wiki_page|wikiPage)\\b",
    js: /\b(knowledge_graph|knowledgeGraph|graphrag|graph_rag|entity|entities|relation|relations|triplet|community|wikilink|backlink|obsidian|markdown_page|markdownPage|wiki_page|wikiPage)\b/i
  },
  {
    key: "memoryUpdate",
    label: "Memory/update lifecycle",
    rg: "\\b(memory|remember|cache|incremental|sync|watch|dedup|dedupe|merge|upsert|delete|stale|snapshot|lifecycle|refresh|reindex|invalidate|compaction)\\b",
    js: /\b(memory|remember|cache|incremental|sync|watch|dedup|dedupe|merge|upsert|delete|stale|snapshot|lifecycle|refresh|reindex|invalidate|compaction)\b/i
  },
  {
    key: "provenance",
    label: "Provenance/citation/evidence",
    rg: "\\b(citation|citations|source_id|sourceId|source_metadata|sourceMetadata|provenance|evidence|lineage|attribution|source_url|sourceUrl|footnote|source_path|sourcePath)\\b",
    js: /\b(citation|citations|source_id|sourceId|source_metadata|sourceMetadata|provenance|evidence|lineage|attribution|source_url|sourceUrl|footnote|source_path|sourcePath)\b/i
  },
  {
    key: "evalObservability",
    label: "Evaluation/observability",
    rg: "\\b(eval|evaluation|benchmark|metric|metrics|recall|precision|ndcg|mrr|ragas|deepeval|phoenix|langfuse|tracing|telemetry|observability|opentelemetry)\\b",
    js: /\b(eval|evaluation|benchmark|metric|metrics|recall|precision|ndcg|mrr|ragas|deepeval|phoenix|langfuse|tracing|telemetry|observability|opentelemetry)\b/i
  },
  {
    key: "agentMcp",
    label: "Agent/MCP/tool surface",
    rg: "\\b(agent|agents|tool_call|toolCall|mcp|modelcontextprotocol|claude|codex|gemini|openai|anthropic|ollama|llm_client|llmClient|function_call|functionCall)\\b",
    js: /\b(agent|agents|tool_call|toolCall|mcp|modelcontextprotocol|claude|codex|gemini|openai|anthropic|ollama|llm_client|llmClient|function_call|functionCall)\b/i
  }
];

const DEP_CAPABILITIES = [
  {
    key: "llmFramework",
    label: "LLM/app framework",
    re: /(langchain|llama[-_]?index|haystack|semantic[-_]?kernel|dspy|crewai|autogen|litellm|openai|anthropic|ollama|transformers|sentence[-_]?transformers|vllm)/i
  },
  {
    key: "vectorStore",
    label: "Vector/search store",
    re: /(qdrant|chroma|chromadb|milvus|pymilvus|weaviate|faiss|lancedb|pinecone|pgvector|elastic|opensearch|vespa|meilisearch|hnsw|annoy)/i
  },
  {
    key: "graphStore",
    label: "Graph/KG store",
    re: /(neo4j|falkor|kuzu|networkx|igraph|graphrag|dgraph|arangodb|tigergraph)/i
  },
  {
    key: "documentParsing",
    label: "Document parsing/OCR",
    re: /(unstructured|pypdf|pdfplumber|pymupdf|pdfminer|tika|mammoth|python-docx|docx|readability|cheerio|beautifulsoup|bs4|markitdown|mineru|paddleocr|tesseract|easyocr)/i
  },
  {
    key: "evalObservability",
    label: "Eval/observability",
    re: /(ragas|deepeval|langfuse|phoenix|trulens|promptfoo|opentelemetry|sentry|prometheus|grafana|wandb|mlflow)/i
  },
  {
    key: "persistence",
    label: "Persistence/database",
    re: /(sqlite|postgres|postgresql|pg|prisma|sequelize|typeorm|drizzle|mongodb|redis|duckdb|supabase|mysql|sqlalchemy|gorm)/i
  }
];

function readJson(file, fallback = null) {
  try {
    return JSON.parse(readFileSync(file, "utf8"));
  } catch {
    return fallback;
  }
}

function safeRead(file, limit = 700_000) {
  try {
    if (statSync(file).size > limit) return "";
    return readFileSync(file, "utf8");
  } catch {
    return "";
  }
}

function safeCell(value) {
  return String(value ?? "")
    .replaceAll("|", "\\|")
    .replace(/\n/g, " ")
    .trim();
}

function table(rows, headers) {
  if (!rows.length) return "_없음_\n";
  const lines = [];
  lines.push(`| ${headers.join(" | ")} |`);
  lines.push(`| ${headers.map(() => "---").join(" | ")} |`);
  for (const row of rows) {
    lines.push(`| ${headers.map((header) => safeCell(row[header])).join(" | ")} |`);
  }
  return `${lines.join("\n")}\n`;
}

function list(items, limit = 30) {
  if (!items.length) return "_없음_\n";
  const visible = items.slice(0, limit).map((item) => `- ${item}`);
  if (items.length > limit) visible.push(`- ... ${items.length - limit} more`);
  return `${visible.join("\n")}\n`;
}

function writeMarkdown(file, lines) {
  const cleaned = [...lines];
  while (cleaned.length && cleaned[cleaned.length - 1] === "") cleaned.pop();
  const body = cleaned.join("\n").replace(/\n+$/g, "");
  writeFileSync(file, `${body}\n`);
}

function safeName(name) {
  return name.replace(/[^a-zA-Z0-9_.-]+/g, "__");
}

function isTextPath(file) {
  const ext = path.extname(file).toLowerCase();
  return CODE_EXTENSIONS.has(ext) || CONFIG_EXTENSIONS.has(ext) || TEXT_EXTENSIONS.has(ext);
}

function isSourcePath(file) {
  const ext = path.extname(file).toLowerCase();
  if (!CODE_EXTENSIONS.has(ext)) return false;
  if (/(\b|\/)(test|tests|spec|__tests__|fixtures|examples|docs)(\/|\b)/i.test(file)) return false;
  if (/\.(test|spec)\.(js|jsx|ts|tsx|py|go|rs)$/i.test(file)) return false;
  return true;
}

function isDocPath(file) {
  const ext = path.extname(file).toLowerCase();
  return TEXT_EXTENSIONS.has(ext) || /(^|\/)docs?\//i.test(file);
}

function isTestPath(file) {
  return /(^|\/)(test|tests|__tests__)(\/|$)/i.test(file) || /\.(test|spec)\.(js|jsx|ts|tsx|py|go|rs)$/i.test(file);
}

function isCiPath(file) {
  return file.startsWith(".github/workflows/") || /(^|\/)(Dockerfile|docker-compose|compose\.ya?ml)$/i.test(file);
}

function runRg(cwd, args, timeout = 20_000, maxBuffer = 8_000_000) {
  const result = spawnSync("rg", args, {
    cwd,
    encoding: "utf8",
    timeout,
    maxBuffer
  });
  if (result.error) return "";
  return result.stdout || "";
}

function rgFiles(root) {
  if (!existsSync(root)) return [];
  const args = ["--files", "--hidden", ...SKIP_GLOBS.flatMap((glob) => ["--glob", glob])];
  const output = runRg(root, args, 20_000, 12_000_000);
  if (output.trim()) return output.split(/\r?\n/).filter(Boolean).sort();
  return walkFiles(root).sort();
}

function walkFiles(root, max = 70_000) {
  const files = [];
  const stack = [""];
  const skipDirs = new Set([
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
  while (stack.length && files.length < max) {
    const relDir = stack.pop();
    let entries = [];
    try {
      entries = readdirSync(path.join(root, relDir), { withFileTypes: true });
    } catch {
      continue;
    }
    for (const entry of entries) {
      if (entry.isDirectory() && skipDirs.has(entry.name)) continue;
      const relPath = path.join(relDir, entry.name).replaceAll(path.sep, "/");
      if (entry.isDirectory()) stack.push(relPath);
      else if (entry.isFile()) files.push(relPath);
    }
  }
  return files;
}

function matchingFiles(root, phase) {
  const args = [
    "-l",
    "-i",
    "--no-messages",
    "--hidden",
    "--max-filesize",
    "800K",
    ...SKIP_GLOBS.flatMap((glob) => ["--glob", glob]),
    phase.rg,
    "."
  ];
  return runRg(root, args, 20_000, 6_000_000)
    .split(/\r?\n/)
    .map((file) => file.replace(/^\.\//, ""))
    .filter(Boolean)
    .filter(isTextPath)
    .sort();
}

function sourcePriority(file, phaseKey = "") {
  let score = 0;
  if (isSourcePath(file)) score -= 100;
  if (CONFIG_EXTENSIONS.has(path.extname(file).toLowerCase())) score -= 25;
  if (/^(src|lib|core|server|backend|app|apps|packages|services|internal|cmd)\//i.test(file)) score -= 35;
  if (file.toLowerCase().includes(phaseKey.toLowerCase())) score -= 25;
  if (isTestPath(file)) score += 40;
  if (isDocPath(file)) score += 70;
  if (/example|demo|fixture|sample/i.test(file)) score += 25;
  score += file.split("/").length;
  return score;
}

function collectEvidence(root, files, phase, maxEvidence = 8) {
  const evidence = [];
  const ordered = [...files].sort((a, b) => sourcePriority(a, phase.key) - sourcePriority(b, phase.key) || a.localeCompare(b));
  for (const file of ordered.slice(0, 28)) {
    const text = safeRead(path.join(root, file), 500_000);
    if (!text) continue;
    const lines = text.split(/\r?\n/);
    for (let index = 0; index < lines.length; index += 1) {
      if (!phase.js.test(lines[index])) continue;
      evidence.push({
        path: file,
        line: index + 1,
        text: lines[index].trim().replace(/\s+/g, " ").slice(0, 220)
      });
      if (evidence.length >= maxEvidence) return evidence;
    }
  }
  return evidence;
}

function readPackageDeps(root, files) {
  const deps = [];
  for (const file of files.filter((item) => path.basename(item) === "package.json").slice(0, 40)) {
    const json = readJson(path.join(root, file), {});
    for (const section of ["dependencies", "devDependencies", "peerDependencies", "optionalDependencies"]) {
      for (const dep of Object.keys(json[section] || {})) {
        deps.push({ name: dep, source: file, ecosystem: "npm" });
      }
    }
  }
  return deps;
}

function readPythonDeps(root, files) {
  const deps = [];
  for (const file of files.filter((item) => /^requirements.*\.txt$/i.test(path.basename(item))).slice(0, 30)) {
    for (const line of safeRead(path.join(root, file), 400_000).split(/\r?\n/)) {
      const cleaned = line.replace(/#.*/, "").trim();
      const name = cleaned.match(/^([a-zA-Z0-9_.-]+)/)?.[1];
      if (name && !["http", "https", "git"].includes(name.toLowerCase())) deps.push({ name, source: file, ecosystem: "python" });
    }
  }
  for (const file of files.filter((item) => path.basename(item) === "pyproject.toml").slice(0, 30)) {
    const text = safeRead(path.join(root, file), 600_000);
    for (const match of text.matchAll(/["']([a-zA-Z0-9_.-]+)(?:[<>=~!;,\[][^"']*)?["']/g)) {
      const name = match[1];
      if (name.length > 2 && /[a-zA-Z]/.test(name)) deps.push({ name, source: file, ecosystem: "python" });
    }
  }
  return deps;
}

function readGoDeps(root, files) {
  const deps = [];
  for (const file of files.filter((item) => path.basename(item) === "go.mod").slice(0, 20)) {
    for (const line of safeRead(path.join(root, file), 400_000).split(/\r?\n/)) {
      const name = line.trim().match(/^([a-zA-Z0-9_.-]+\/[^\s]+)/)?.[1];
      if (name) deps.push({ name, source: file, ecosystem: "go" });
    }
  }
  return deps;
}

function readCargoDeps(root, files) {
  const deps = [];
  for (const file of files.filter((item) => path.basename(item) === "Cargo.toml").slice(0, 30)) {
    for (const line of safeRead(path.join(root, file), 400_000).split(/\r?\n/)) {
      const name = line.trim().match(/^([a-zA-Z0-9_-]+)\s*=/)?.[1];
      if (name && !["name", "version", "edition", "workspace", "members"].includes(name)) deps.push({ name, source: file, ecosystem: "rust" });
    }
  }
  return deps;
}

function collectDependencies(root, files) {
  const raw = [...readPackageDeps(root, files), ...readPythonDeps(root, files), ...readGoDeps(root, files), ...readCargoDeps(root, files)];
  const seen = new Set();
  const unique = [];
  for (const dep of raw) {
    const key = `${dep.ecosystem}:${dep.name.toLowerCase()}`;
    if (seen.has(key)) continue;
    seen.add(key);
    unique.push(dep);
  }
  const byCapability = {};
  for (const capability of DEP_CAPABILITIES) {
    byCapability[capability.key] = unique
      .filter((dep) => capability.re.test(dep.name))
      .slice(0, 30);
  }
  return { all: unique.slice(0, 240), byCapability };
}

function phaseStatus(phaseAnalysis) {
  if (phaseAnalysis.sourceFileCount > 0) return "code";
  if (phaseAnalysis.matchingFileCount > 0) return "doc";
  return "-";
}

function hasPhase(dimensions, key) {
  return dimensions[key]?.sourceFileCount > 0 || false;
}

function countPresent(dimensions, keys) {
  return keys.filter((key) => hasPhase(dimensions, key)).length;
}

function isCuratedResource(repo) {
  const text = `${repo.name} ${repo.description || ""} ${(repo.topics || []).join(" ")}`.toLowerCase();
  if ((repo.tags || []).includes("direct-llm-wiki")) return false;
  return /(^|[\/_\s-])(awesome|techniques|zero[-_\s]?to[-_\s]?hero|for[-_\s]?dummies|guide|tutorial|course|resources|examples?|hub|everybody)([\/_\s-]|$)/i.test(text) ||
    /rag_techniques|genai_agents|agents[-_\s]?towards[-_\s]?production|tiny[-_\s]?universe|ai[-_\s]?engineering[-_\s]?hub/i.test(text);
}

function classify(repo, dimensions, deps, codeFileCount) {
  const tags = repo.tags || [];
  const has = (key) => hasPhase(dimensions, key);
  const depHas = (key) => (deps.byCapability[key] || []).length > 0;

  if (tags.includes("direct-llm-wiki") && has("wikiGraph") && has("memoryUpdate")) return "persistent-llm-wiki";
  if (isCuratedResource(repo)) return "curated-list/tutorial";
  if (has("wikiGraph") && (depHas("graphStore") || /graph|kg|kag|graphrag/i.test(`${repo.name} ${repo.description}`))) return "graph-rag/kg";
  if (countPresent(dimensions, ["ingestion", "parsing", "chunking", "embedding", "retrieval"]) >= 4) return "rag-knowledge-platform";
  if (has("agentMcp") && has("memoryUpdate")) return "agent-memory/tooling";
  if (has("parsing") && !has("embedding") && !has("retrieval")) return "document-intelligence";
  if (codeFileCount < 20) return "curated-list/template";
  return "mixed/partial-kb";
}

function maturity(repo, analysis, dimensions, deps, codeFileCount) {
  const pipeline = countPresent(dimensions, ["ingestion", "parsing", "chunking", "embedding", "retrieval"]);
  const memory = countPresent(dimensions, ["wikiGraph", "memoryUpdate", "provenance"]);
  const evals = hasPhase(dimensions, "evalObservability") ? 1 : 0;
  const agent = hasPhase(dimensions, "agentMcp") ? 1 : 0;
  const tests = (analysis?.testFiles?.length || 0) > 0 ? 1 : 0;
  const ci = (analysis?.ciFiles?.length || 0) > 0 ? 1 : 0;
  const depsBonus = Object.values(deps.byCapability).filter((items) => items.length > 0).length >= 3 ? 1 : 0;
  let score = pipeline * 10 + memory * 9 + evals * 6 + agent * 5 + tests * 6 + ci * 4 + depsBonus * 4 + Math.min(6, Math.floor(codeFileCount / 100));
  if (isCuratedResource(repo)) score = Math.min(score, 46);
  let band = "D small/demo/list";
  if (score >= 82) band = "A integrated platform";
  else if (score >= 62) band = "B production-leaning";
  else if (score >= 42) band = "C focused implementation";
  return { score, band, pipelineStages: pipeline, memoryStages: memory, hasTests: Boolean(tests), hasCi: Boolean(ci) };
}

function analyzeRepo(repo, structure) {
  const root = repo.localPath;
  const exists = existsSync(root);
  const files = exists ? rgFiles(root) : [];
  const textFiles = files.filter(isTextPath);
  const codeFiles = files.filter((file) => CODE_EXTENSIONS.has(path.extname(file).toLowerCase()));
  const sourceFiles = files.filter(isSourcePath);
  const dimensions = {};

  for (const phase of PHASES) {
    const matches = exists ? matchingFiles(root, phase) : [];
    const sourceMatches = matches.filter(isSourcePath);
    const docMatches = matches.filter(isDocPath);
    const evidence = exists ? collectEvidence(root, matches, phase) : [];
    dimensions[phase.key] = {
      label: phase.label,
      status: sourceMatches.length > 0 ? "code" : matches.length > 0 ? "doc-only" : "absent",
      matchingFileCount: matches.length,
      sourceFileCount: sourceMatches.length,
      docFileCount: docMatches.length,
      sampleFiles: [...matches].sort((a, b) => sourcePriority(a, phase.key) - sourcePriority(b, phase.key) || a.localeCompare(b)).slice(0, 18),
      evidence
    };
  }

  const dependencies = collectDependencies(root, files);
  const type = classify(repo, dimensions, dependencies, codeFiles.length);
  const maturityInfo = maturity(repo, structure, dimensions, dependencies, codeFiles.length);
  const phaseMarks = Object.fromEntries(PHASES.map((phase) => [phase.key, phaseStatus(dimensions[phase.key])]));
  const gaps = [];
  for (const key of ["provenance", "evalObservability", "memoryUpdate"]) {
    if (!hasPhase(dimensions, key)) gaps.push(PHASES.find((phase) => phase.key === key).label);
  }
  if (!maturityInfo.hasTests) gaps.push("tests");
  if (!maturityInfo.hasCi) gaps.push("ci");

  return {
    name: repo.name,
    url: repo.url,
    localPath: repo.localPath,
    stars: repo.stars || 0,
    forks: repo.forks || 0,
    pushedAt: repo.pushedAt || null,
    language: repo.language || null,
    tags: repo.tags || [],
    score: repo.score || 0,
    exists,
    fileCount: files.length,
    textFileCount: textFiles.length,
    codeFileCount: codeFiles.length,
    sourceFileCount: sourceFiles.length,
    testFileCount: structure?.testFiles?.length || files.filter(isTestPath).length,
    ciFileCount: structure?.ciFiles?.length || files.filter(isCiPath).length,
    stack: structure?.architecture?.stack || [],
    type,
    maturity: maturityInfo,
    phaseMarks,
    dimensions,
    dependencies,
    gaps: gaps.slice(0, 8),
    reportPath: `${perRepoReportDir}/${safeName(repo.name)}.md`
  };
}

function summarize(analyses) {
  const byType = countBy(analyses, (item) => item.type);
  const byBand = countBy(analyses, (item) => item.maturity.band);
  const phaseCoverage = PHASES.map((phase) => ({
    key: phase.key,
    label: phase.label,
    codeRepos: analyses.filter((item) => item.dimensions[phase.key].sourceFileCount > 0).length,
    docOnlyRepos: analyses.filter((item) => item.dimensions[phase.key].sourceFileCount === 0 && item.dimensions[phase.key].matchingFileCount > 0).length,
    totalMatchedRepos: analyses.filter((item) => item.dimensions[phase.key].matchingFileCount > 0).length
  }));
  const dependencyCoverage = DEP_CAPABILITIES.map((capability) => ({
    key: capability.key,
    label: capability.label,
    repos: analyses.filter((item) => (item.dependencies.byCapability[capability.key] || []).length > 0).length
  }));
  return { byType, byBand, phaseCoverage, dependencyCoverage };
}

function countBy(items, selector) {
  const counts = {};
  for (const item of items) {
    const key = selector(item) || "unknown";
    counts[key] = (counts[key] || 0) + 1;
  }
  return counts;
}

function capabilityDeps(dependencies) {
  return DEP_CAPABILITIES
    .map((capability) => {
      const deps = dependencies.byCapability[capability.key] || [];
      return deps.length ? `${capability.label}: ${deps.map((dep) => dep.name).slice(0, 8).join(", ")}` : null;
    })
    .filter(Boolean);
}

function writeRepoReport(analysis) {
  const lines = [];
  lines.push(`# ${analysis.name} 코드 레벨 분석`);
  lines.push("");
  lines.push(`생성일: ${new Date().toISOString()}`);
  lines.push("");
  lines.push("## 기본 판정");
  lines.push("");
  lines.push(table([
    { 항목: "type", 값: analysis.type },
    { 항목: "maturity", 값: `${analysis.maturity.band} (${analysis.maturity.score})` },
    { 항목: "stars", 값: analysis.stars },
    { 항목: "language", 값: analysis.language || "" },
    { 항목: "tags", 값: analysis.tags.join(", ") },
    { 항목: "files/code/source", 값: `${analysis.fileCount}/${analysis.codeFileCount}/${analysis.sourceFileCount}` },
    { 항목: "tests/ci", 값: `${analysis.testFileCount}/${analysis.ciFileCount}` },
    { 항목: "local path", 값: analysis.localPath }
  ], ["항목", "값"]));

  lines.push("## 파이프라인 단계");
  lines.push("");
  lines.push(table(PHASES.map((phase) => {
    const dim = analysis.dimensions[phase.key];
    const evidence = dim.evidence[0];
    return {
      단계: phase.label,
      상태: dim.status,
      "matched files": dim.matchingFileCount,
      "source files": dim.sourceFileCount,
      evidence: evidence ? `${evidence.path}:${evidence.line} ${evidence.text}` : ""
    };
  }), ["단계", "상태", "matched files", "source files", "evidence"]));

  lines.push("## 의존성 신호");
  lines.push("");
  lines.push(list(capabilityDeps(analysis.dependencies)));

  lines.push("## 주요 파일 후보");
  lines.push("");
  for (const phase of PHASES) {
    const dim = analysis.dimensions[phase.key];
    if (!dim.sampleFiles.length) continue;
    lines.push(`### ${phase.label}`);
    lines.push("");
    lines.push(list(dim.sampleFiles.map((file) => `\`${file}\``), 12));
  }

  lines.push("## Evidence lines");
  lines.push("");
  for (const phase of PHASES) {
    const dim = analysis.dimensions[phase.key];
    if (!dim.evidence.length) continue;
    lines.push(`### ${phase.label}`);
    lines.push("");
    lines.push(table(dim.evidence.map((evidence) => ({
      file: evidence.path,
      line: evidence.line,
      text: evidence.text
    })), ["file", "line", "text"]));
  }

  lines.push("## Gap");
  lines.push("");
  lines.push(list(analysis.gaps));

  mkdirSync(perRepoReportDir, { recursive: true });
  writeMarkdown(analysis.reportPath, lines);
}

function top(analyses, predicate, limit = 20) {
  return analyses
    .filter(predicate)
    .sort((a, b) => b.maturity.score - a.maturity.score || b.stars - a.stars || a.name.localeCompare(b.name))
    .slice(0, limit);
}

function marks(analysis) {
  return PHASES.map((phase) => `${phase.key}:${analysis.phaseMarks[phase.key]}`).join(", ");
}

function writeSummaryReport(analyses, summary) {
  const lines = [];
  const generatedAt = new Date().toISOString();
  lines.push("# LLM Wiki 100 Code-Level Pipeline Comparison");
  lines.push("");
  lines.push(`작성일: ${generatedAt}`);
  lines.push("");
  lines.push("이 문서는 `data/llm-wiki-repositories.json`의 100개 로컬 클론을 같은 정적 코드 스캔 기준으로 다시 비교한 결과다. 기존 구조 분석이 README, manifest, 디렉터리 표면을 본 1차 분석이라면, 이 문서는 실제 소스에서 ingestion, parsing, chunking, embedding, retrieval, wiki/graph, memory update, provenance, eval/observability, agent/MCP 신호를 찾는다.");
  lines.push("");
  lines.push("## 산출물");
  lines.push("");
  lines.push("- 정규화 데이터: `data/llm-wiki-code-level-analysis-100.json`");
  lines.push("- 전체 비교 보고서: `reports/llm-wiki/02-code-level-pipeline-comparison.md`");
  lines.push("- 레포별 코드 분석: `reports/llm-wiki/code-level-repositories/*.md`");
  lines.push("");
  lines.push("## 방법");
  lines.push("");
  lines.push("- `rg` 기반 정적 스캔으로 각 레포의 텍스트/코드 파일을 조사했다.");
  lines.push("- `node_modules`, `.git`, build artifact, lock file, binary/media 파일은 제외했다.");
  lines.push("- `code`는 테스트/문서가 아닌 소스 파일에서 직접 매치된 경우, `doc`은 README/docs/config 등에서만 매치된 경우다.");
  lines.push("- 이 분석은 실행/동작 검증이 아니라 코드 표면 비교다. 따라서 false positive/negative가 있을 수 있고, 상위 후보는 레포별 보고서의 evidence line으로 재검토해야 한다.");
  lines.push("");
  lines.push("## 전체 커버리지");
  lines.push("");
  lines.push(table([
    { metric: "분석 레포", value: analyses.length },
    { metric: "로컬 clone 존재", value: analyses.filter((item) => item.exists).length },
    { metric: "평균 code files", value: Math.round(analyses.reduce((sum, item) => sum + item.codeFileCount, 0) / analyses.length) },
    { metric: "평균 maturity score", value: Math.round(analyses.reduce((sum, item) => sum + item.maturity.score, 0) / analyses.length) }
  ], ["metric", "value"]));

  lines.push("## 단계별 구현 신호");
  lines.push("");
  lines.push(table(summary.phaseCoverage.map((item) => ({
    phase: item.label,
    "code repos": item.codeRepos,
    "doc-only repos": item.docOnlyRepos,
    "matched total": item.totalMatchedRepos
  })), ["phase", "code repos", "doc-only repos", "matched total"]));

  lines.push("## 의존성 기반 신호");
  lines.push("");
  lines.push(table(summary.dependencyCoverage.map((item) => ({
    capability: item.label,
    repos: item.repos
  })), ["capability", "repos"]));

  lines.push("## 유형 분포");
  lines.push("");
  lines.push(table(Object.entries(summary.byType).sort((a, b) => b[1] - a[1]).map(([type, count]) => ({ type, count })), ["type", "count"]));

  lines.push("## 성숙도 분포");
  lines.push("");
  lines.push(table(Object.entries(summary.byBand).sort((a, b) => a[0].localeCompare(b[0])).map(([band, count]) => ({ band, count })), ["band", "count"]));

  lines.push("## 코드 레벨 상위 후보");
  lines.push("");
  lines.push(table(top(analyses, () => true, 30).map((item) => ({
    repo: item.name,
    type: item.type,
    maturity: `${item.maturity.band} ${item.maturity.score}`,
    stars: item.stars,
    pipeline: item.maturity.pipelineStages,
    memory: item.maturity.memoryStages,
    report: item.reportPath
  })), ["repo", "type", "maturity", "stars", "pipeline", "memory", "report"]));

  lines.push("## Direct LLM Wiki 구현 비교");
  lines.push("");
  lines.push(table(analyses.filter((item) => item.tags.includes("direct-llm-wiki")).map((item) => ({
    repo: item.name,
    type: item.type,
    maturity: item.maturity.score,
    ingest: item.phaseMarks.ingestion,
    wiki: item.phaseMarks.wikiGraph,
    update: item.phaseMarks.memoryUpdate,
    provenance: item.phaseMarks.provenance,
    eval: item.phaseMarks.evalObservability,
    report: item.reportPath
  })), ["repo", "type", "maturity", "ingest", "wiki", "update", "provenance", "eval", "report"]));

  lines.push("## GraphRAG/KG 상위 구현");
  lines.push("");
  lines.push(table(top(analyses, (item) => item.type === "graph-rag/kg" || item.dimensions.wikiGraph.sourceFileCount > 0, 25).map((item) => ({
    repo: item.name,
    type: item.type,
    graphFiles: item.dimensions.wikiGraph.sourceFileCount,
    retrieval: item.phaseMarks.retrieval,
    vector: item.phaseMarks.embedding,
    deps: capabilityDeps(item.dependencies).slice(0, 2).join("; "),
    report: item.reportPath
  })), ["repo", "type", "graphFiles", "retrieval", "vector", "deps", "report"]));

  lines.push("## RAG 지식베이스 상위 구현");
  lines.push("");
  lines.push(table(top(analyses, (item) => item.type === "rag-knowledge-platform", 25).map((item) => ({
    repo: item.name,
    maturity: item.maturity.score,
    ingest: item.phaseMarks.ingestion,
    parse: item.phaseMarks.parsing,
    chunk: item.phaseMarks.chunking,
    vector: item.phaseMarks.embedding,
    retrieve: item.phaseMarks.retrieval,
    report: item.reportPath
  })), ["repo", "maturity", "ingest", "parse", "chunk", "vector", "retrieve", "report"]));

  lines.push("## 전체 100개 compact matrix");
  lines.push("");
  lines.push(table(analyses.map((item, index) => ({
    no: index + 1,
    repo: item.name,
    type: item.type,
    maturity: item.maturity.score,
    stars: item.stars,
    ingest: item.phaseMarks.ingestion,
    parse: item.phaseMarks.parsing,
    chunk: item.phaseMarks.chunking,
    vector: item.phaseMarks.embedding,
    retrieve: item.phaseMarks.retrieval,
    wiki: item.phaseMarks.wikiGraph,
    update: item.phaseMarks.memoryUpdate,
    prov: item.phaseMarks.provenance,
    eval: item.phaseMarks.evalObservability,
    agent: item.phaseMarks.agentMcp,
    report: item.reportPath
  })), ["no", "repo", "type", "maturity", "stars", "ingest", "parse", "chunk", "vector", "retrieve", "wiki", "update", "prov", "eval", "agent", "report"]));

  lines.push("## 해석");
  lines.push("");
  lines.push("- persistent LLM wiki 구현은 RAG 제품보다 적지만, `wikiGraph`, `memoryUpdate`, `provenance`가 함께 있는지가 실제 차이를 만든다.");
  lines.push("- RAG knowledge platform형은 ingestion -> parsing -> chunking -> embedding -> retrieval 파이프라인이 비교적 뚜렷하다. 그러나 wiki page lifecycle이나 conflict handling은 별도 구현 신호가 약한 경우가 많다.");
  lines.push("- GraphRAG/KG형은 entity/relation/graph store 신호가 강하지만, 사람이 읽는 wiki page와 source provenance를 얼마나 유지하는지는 레포별 확인이 필요하다.");
  lines.push("- awesome list/tutorial 성격의 레포는 stars가 높아도 code-level maturity가 낮게 나오는 것이 정상이다. 이들은 구현체가 아니라 학습/큐레이션 자료로 분리해서 봐야 한다.");
  lines.push("- `evalObservability`와 `provenance`는 전체적으로 약한 축이다. 운영 가능한 LLM wiki/spec memory를 만들 때 가장 먼저 보강해야 할 부분이다.");
  lines.push("");
  lines.push("## 데이터 사용법");
  lines.push("");
  lines.push("각 레포의 상세 evidence는 `data/llm-wiki-code-level-analysis-100.json`의 `repositories[].dimensions`와 레포별 Markdown에 들어 있다. 특정 설계 후보를 뽑을 때는 stars보다 `type`, `maturity.score`, `phaseMarks`, `dependencies.byCapability`를 함께 봐야 한다.");
  lines.push("");

  mkdirSync(path.dirname(outputReportFile), { recursive: true });
  writeMarkdown(outputReportFile, lines);
}

const repoData = readJson(repoDataFile, { repositories: [] });
const structureData = readJson(structureDataFile, { analyses: [] });
const byName = new Map((structureData.analyses || []).map((item) => [item.name.toLowerCase(), item]));
const repositories = [];

for (const repo of repoData.repositories || []) {
  const analysis = analyzeRepo(repo, byName.get(repo.name.toLowerCase()));
  repositories.push(analysis);
  writeRepoReport(analysis);
  console.error(`analyzed ${repo.name}: ${analysis.type} ${analysis.maturity.score}`);
}

const summary = summarize(repositories);
const output = {
  generatedAt: new Date().toISOString(),
  method: {
    kind: "static rg-based code-level scan",
    excluded: SKIP_GLOBS,
    phases: PHASES.map(({ key, label, rg }) => ({ key, label, pattern: rg }))
  },
  repoCount: repositories.length,
  summary,
  repositories
};

mkdirSync(path.dirname(outputDataFile), { recursive: true });
writeFileSync(outputDataFile, `${JSON.stringify(output, null, 2)}\n`);
writeSummaryReport(repositories, summary);

console.error(`wrote ${outputDataFile}`);
console.error(`wrote ${outputReportFile}`);
console.error(`wrote ${repositories.length} per-repo reports to ${perRepoReportDir}`);
