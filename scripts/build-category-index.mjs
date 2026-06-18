import { existsSync } from "node:fs";
import { mkdir, readdir, rm, writeFile, readFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const generatedAt = new Date().toISOString();
const dataDir = path.join(root, "data");
const categoriesDataDir = path.join(dataDir, "categories");
const reportsCategoriesDir = path.join(root, "reports", "categories");

const taxonomy = [
  {
    slug: "coding-agents-ides",
    title: "코딩 에이전트/IDE",
    description: "Codex, Claude Code, Aider, OpenHands, Cline/Roo, Gemini CLI, 코드 리뷰, 코딩 보조, agentic IDE workflow를 묶은 카테고리입니다.",
    keywords: ["codex", "claude code", "aider", "openhands", "cline", "roo", "gemini-cli", "gemini cli", "coding agent", "swe-agent", "open-swe", "code agent", "code review", "developer workflow", "ide", "vscode-copilot", "qwen-code", "tabby", "continue"]
  },
  {
    slug: "agent-harness-orchestration",
    title: "에이전트 하네스/오케스트레이션",
    description: "agent harness, multi-agent runtime, skills, tools, workflows, task orchestration, production agent framework를 묶은 카테고리입니다.",
    keywords: ["agent", "agents", "harness", "orchestration", "workflow", "multi-agent", "multi agent", "skills", "tool use", "tool-use", "langgraph", "autogen", "crewai", "pydantic-ai", "mastra", "agentos", "agent os", "agentic"]
  },
  {
    slug: "mcp-tools-protocols",
    title: "MCP/도구/프로토콜",
    description: "Model Context Protocol 서버, tool registry, gateway, connector, protocol SDK, tool-calling infrastructure를 묶은 카테고리입니다.",
    keywords: ["mcp", "model context protocol", "mcp-server", "mcp server", "tool server", "tooling layer", "gateway", "connector", "protocol"]
  },
  {
    slug: "spec-driven-requirements",
    title: "스펙 드리븐/요구사항",
    description: "spec-driven development, requirements engineering, acceptance criteria, BDD/TDD, traceability, API contract, formal specification을 묶은 카테고리입니다.",
    keywords: ["spec-driven", "spec driven", "requirements", "acceptance criteria", "traceability", "bdd", "tdd", "formal specification", "api contract", "openspec", "kiro", "spec-kit", "sdd", "prd"]
  },
  {
    slug: "llm-wiki-rag-knowledge",
    title: "LLM 위키/RAG/지식베이스",
    description: "LLM-maintained wiki, RAG, GraphRAG, knowledge base, document chat, retrieval, notebook, source-aware knowledge system을 묶은 카테고리입니다.",
    keywords: ["llm wiki", "wiki", "rag", "retrieval", "graphrag", "graph rag", "knowledge base", "knowledge graph", "document chat", "notebooklm", "docs", "search", "retrieval-augmented-generation"]
  },
  {
    slug: "context-memory",
    title: "컨텍스트/메모리",
    description: "long-term memory, session state, context engineering, recall, persistence, personalization, agent memory system을 묶은 카테고리입니다.",
    keywords: ["memory", "long-term-memory", "context", "context engineering", "recall", "persistent", "persistence", "session", "personalization", "state-management", "zep", "mem0"]
  },
  {
    slug: "evals-observability-quality",
    title: "평가/관측/품질",
    description: "prompt/agent eval, tracing, observability, quality gate, benchmark, testing, monitoring, reliability system을 묶은 카테고리입니다.",
    keywords: ["eval", "evals", "evaluation", "benchmark", "observability", "tracing", "trace", "quality", "quality gate", "monitoring", "test", "testing", "promptfoo", "deepeval", "ragas", "langfuse", "phoenix", "trulens", "opik"]
  },
  {
    slug: "security-governance-safety",
    title: "보안/거버넌스/안전",
    description: "sandboxing, policy, governance, guardrail, prompt-injection defense, supply-chain security, identity, audit, safe agent execution을 묶은 카테고리입니다.",
    keywords: ["security", "sandbox", "safe", "safety", "governance", "guardrail", "guardrails", "policy", "prompt injection", "prompt-injection", "identity", "audit", "sbom", "fuzzer", "scanner", "permission", "risk"]
  },
  {
    slug: "ai-infrastructure-serving",
    title: "AI 인프라/서빙",
    description: "LLM serving, inference engine, GPU, AI factory, training/inference infrastructure, Kubernetes, runtime, model deployment를 묶은 카테고리입니다.",
    keywords: ["vllm", "inference", "serving", "llm serving", "text-generation-inference", "tgi", "sglang", "gpu", "trainium", "nvidia", "kubernetes", "runtime", "deployment", "ai factory", "ai-factories", "llama.cpp", "localai", "ollama"]
  },
  {
    slug: "data-platforms-vector-databases",
    title: "데이터 플랫폼/벡터 DB",
    description: "vector database, graph database, search engine, data store, embedding, indexing, retrieval infrastructure를 묶은 카테고리입니다.",
    keywords: ["vector", "vector db", "database", "postgres", "pgvector", "qdrant", "milvus", "weaviate", "chroma", "lancedb", "redis", "vespa", "typesense", "faiss", "embedding", "indexing", "graph database"]
  },
  {
    slug: "developer-productivity-devtools",
    title: "개발 생산성/DevTools",
    description: "developer tooling, automation, CI, GitHub Actions, CLI, SDK, workflow accelerator, code search, productivity system을 묶은 카테고리입니다.",
    keywords: ["devtools", "developer-tools", "developer tools", "cli", "sdk", "github action", "github actions", "ci", "automation", "productivity", "code search", "repo map", "source indexing", "toolbox"]
  },
  {
    slug: "local-llm-models",
    title: "로컬 LLM/모델",
    description: "local model runtime, open model, model optimization, transformers, small model, edge inference, model-serving UI를 묶은 카테고리입니다.",
    keywords: ["local llm", "local-llm", "open model", "open-models", "model", "models", "transformers", "bitnet", "llama", "mlx", "gguf", "gpt4all", "text-generation-webui", "edge-ai"]
  },
  {
    slug: "korean-ai-open-source",
    title: "한국 AI/오픈소스",
    description: "한국 트렌딩 레포, 한국 AI 서비스, NAVER, Kakao, Samsung, SK, Toss, LINE, NHN, 한국 RAG/MCP, 국내 컨퍼런스 신호를 묶은 카테고리입니다.",
    keywords: ["korea", "korean", "한국", "naver", "kakao", "samsung", "sktelecom", "sk telecom", "toss", "line", "nhn", "daangn", "kakaobrain", "seoul"]
  },
  {
    slug: "global-ai-open-source",
    title: "글로벌 AI 오픈소스",
    description: "글로벌 트렌딩 AI, LLM, agent, RAG, devtool, security, infrastructure 오픈소스 레포를 묶은 카테고리입니다.",
    keywords: ["global-trending", "global ai", "open source", "oss"]
  },
  {
    slug: "research-papers",
    title: "논문/연구 근거",
    description: "OpenAlex 논문, 연구, 요구사항 연구, agent 연구, source scanning 연구, evidence corpus 항목을 묶은 카테고리입니다.",
    keywords: ["paper", "research", "study", "journal", "conference paper", "openalex", "doi", "publication"]
  },
  {
    slug: "presentations-conferences",
    title: "발표/컨퍼런스",
    description: "conference session, keynote, webinar, event recap, recording, schedule, presentation-method reference를 묶은 카테고리입니다.",
    keywords: ["conference", "presentation", "keynote", "webinar", "recording", "session", "event", "summit", "devday", "re:invent", "gtc", "build", "cloud next", "dan25"]
  },
  {
    slug: "ai-usage-trends",
    title: "AI 활용 트렌드",
    description: "Amazon/AWS, Microsoft, Google, NVIDIA, Salesforce, OpenAI, Anthropic, GitHub, NAVER, Samsung, SK, 한국 행사에서 나온 최근 AI 도입 트렌드입니다.",
    keywords: ["ai usage trend", "agentic enterprise", "agentic-ai", "enterprise-ai", "physical-ai", "consumer-ai", "ai-infrastructure", "agentforce", "agentcore", "gemini enterprise", "copilot studio"]
  }
];

const taxonomyBySlug = new Map(taxonomy.map((category) => [category.slug, category]));

const categoryTopicMap = {
  "coding-agents-ides": ["coding-agents", "repository-deep-dives"],
  "agent-harness-orchestration": ["agent-harness", "coding-agents"],
  "mcp-tools-protocols": ["agent-harness"],
  "spec-driven-requirements": ["spec-driven"],
  "llm-wiki-rag-knowledge": ["llm-wiki"],
  "context-memory": ["llm-wiki", "adjacent-infrastructure"],
  "evals-observability-quality": ["adjacent-infrastructure", "agent-harness"],
  "security-governance-safety": ["agent-harness"],
  "ai-infrastructure-serving": ["adjacent-infrastructure"],
  "data-platforms-vector-databases": ["adjacent-infrastructure", "llm-wiki"],
  "developer-productivity-devtools": ["coding-agents", "full-source-scan"],
  "local-llm-models": ["adjacent-infrastructure"],
  "korean-ai-open-source": ["korea-trending-open-source"],
  "global-ai-open-source": ["global-trending-open-source"],
  "research-papers": ["research-foundations"],
  "presentations-conferences": ["presentations-conferences"],
  "ai-usage-trends": ["ai-usage-trends", "presentations-conferences"]
};

function safeArray(value) {
  return Array.isArray(value) ? value : [];
}

async function readJson(relativePath, fallback = null) {
  const file = path.join(root, relativePath);
  if (!existsSync(file)) return fallback;
  return JSON.parse(await readFile(file, "utf8"));
}

function uniq(values) {
  return [...new Set(safeArray(values).filter(Boolean))];
}

function rel(file) {
  return path.relative(root, file).replaceAll(path.sep, "/");
}

function cleanText(value) {
  return String(value || "")
    .replace(/\s+/g, " ")
    .trim();
}

function tableText(value) {
  return cleanText(value).replaceAll("|", "\\|");
}

function repoSafeName(name) {
  return String(name || "")
    .replace(/^https:\/\/github\.com\//, "")
    .replace(/\.git$/, "")
    .replaceAll("/", "__")
    .replace(/[^A-Za-z0-9_.-]+/g, "_");
}

function repoNameFromSourceDir(dir) {
  return dir.includes("__") ? dir.replace("__", "/") : dir;
}

function repoUrlFromName(name) {
  return name && name.includes("/") ? `https://github.com/${name}` : null;
}

function sourceDirForName(name) {
  const safe = repoSafeName(name);
  return safe ? `sources/${safe}` : null;
}

function existingReport(paths) {
  for (const file of paths) {
    if (file && existsSync(path.join(root, file))) return file;
  }
  return null;
}

function textBlob(item) {
  return [
    item.title,
    item.name,
    item.summary,
    item.description,
    item.company,
    item.event,
    item.source,
    item.sourceName,
    item.kind,
    safeArray(item.tags).join(" "),
    safeArray(item.originTags).join(" "),
    safeArray(item.sourceDatasets).join(" "),
    safeArray(item.existingCategories).join(" ")
  ].filter(Boolean).join(" ").toLowerCase();
}

function escapeRegExp(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function matchesKeyword(text, keyword) {
  const needle = String(keyword || "").toLowerCase().trim();
  if (!needle) return false;
  if (/^[a-z0-9_.-]+$/.test(needle)) {
    return new RegExp(`(^|[^a-z0-9])${escapeRegExp(needle)}([^a-z0-9]|$)`, "i").test(text);
  }
  return text.includes(needle);
}

function categoryCanMatchItem(categorySlug, item) {
  if (categorySlug === "global-ai-open-source") return item.kind === "repository";
  if (categorySlug === "korean-ai-open-source") return item.kind === "repository" || item.kind === "trend-reference";
  if (categorySlug === "research-papers") return item.kind === "research-paper";
  if (categorySlug === "presentations-conferences") return ["presentation", "conference-reference", "trend-reference"].includes(item.kind);
  if (categorySlug === "ai-usage-trends") return item.kind === "trend-reference";
  return true;
}

function assignCategories(item) {
  const text = textBlob(item);
  const categories = new Set();

  if (item.kind === "repository" && safeArray(item.sourceDatasets).some((source) => source.includes("korea"))) {
    categories.add("korean-ai-open-source");
  }
  if (item.kind === "repository" && safeArray(item.sourceDatasets).some((source) => source.includes("global"))) {
    categories.add("global-ai-open-source");
  }
  if (item.kind === "research-paper") categories.add("research-papers");
  if (["presentation", "conference-reference", "trend-reference"].includes(item.kind)) categories.add("presentations-conferences");
  if (item.kind === "trend-reference") categories.add("ai-usage-trends");

  for (const category of taxonomy) {
    if (!categoryCanMatchItem(category.slug, item)) continue;
    if (safeArray(category.keywords).some((keyword) => matchesKeyword(text, keyword))) {
      categories.add(category.slug);
    }
  }

  if (item.kind === "repository" && categories.size === 0) categories.add("global-ai-open-source");
  if (item.kind !== "repository" && categories.size === 0) categories.add("research-papers");

  return [...categories].filter((slug) => taxonomyBySlug.has(slug));
}

function scoreItem(item) {
  const stars = Number(item.stars || 0);
  const citedBy = Number(item.citedByCount || 0);
  const base = Number(item.score || item.priorityScore || item.trendScore || 0);
  const sourceBoost = safeArray(item.sourceDatasets).length * 20;
  return base + sourceBoost + Math.log10(stars + 1) * 35 + Math.log10(citedBy + 1) * 25;
}

function mergeItem(existing, next) {
  return {
    ...existing,
    ...Object.fromEntries(Object.entries(next).filter(([, value]) => value !== null && value !== undefined && value !== "")),
    sourceDatasets: uniq([...safeArray(existing.sourceDatasets), ...safeArray(next.sourceDatasets)]),
    sourcePaths: uniq([...safeArray(existing.sourcePaths), ...safeArray(next.sourcePaths)]),
    originTags: uniq([...safeArray(existing.originTags), ...safeArray(next.originTags)]),
    existingCategories: uniq([...safeArray(existing.existingCategories), ...safeArray(next.existingCategories)]),
    matchedQueries: uniq([...safeArray(existing.matchedQueries), ...safeArray(next.matchedQueries)]),
    localPath: existing.localPath || next.localPath || null,
    reportPath: existing.reportPath || next.reportPath || null,
    stars: Math.max(Number(existing.stars || 0), Number(next.stars || 0)),
    forks: Math.max(Number(existing.forks || 0), Number(next.forks || 0))
  };
}

function normalizeRepo(raw, sourceDataset, sourcePath) {
  const github = raw.github || {};
  const name = raw.name || github.nameWithOwner || raw.remote?.replace(/^https:\/\/github\.com\//, "").replace(/\.git$/, "") || null;
  if (!name) return null;
  const topics = safeArray(raw.topics).map((topic) => typeof topic === "string" ? topic : topic?.name).filter(Boolean);
  const githubTopics = safeArray(github.repositoryTopics).map((topic) => topic.name || topic.topic?.name).filter(Boolean);
  const localPath = raw.localPath || raw.sourceDir || sourceDirForName(name);
  const safe = repoSafeName(name);
  const reportPath = raw.reportPath || existingReport([
    `reports/global-trending/repositories/${safe}.md`,
    `reports/korea-trending/repositories/${safe}.md`,
    `reports/llm-wiki/repositories/${safe}.md`,
    `reports/llm-wiki/code-level-repositories/${safe}.md`,
    `reports/clone-structures/${safe}.md`
  ]);
  return {
    id: `repository:${name.toLowerCase()}`,
    kind: "repository",
    name,
    title: name,
    url: raw.url || github.url || raw.remote || repoUrlFromName(name),
    summary: cleanText(raw.description || github.description || raw.note || raw.category || ""),
    language: raw.language || github.primaryLanguage?.name || null,
    stars: raw.stars || github.stargazerCount || 0,
    forks: raw.forks || github.forkCount || 0,
    license: raw.license || github.licenseInfo?.spdxId || github.licenseInfo?.name || null,
    updatedAt: raw.updatedAt || raw.pushedAt || github.updatedAt || github.pushedAt || null,
    localPath,
    reportPath,
    sourceDatasets: [sourceDataset],
    sourcePaths: [sourcePath],
    originTags: uniq([
      ...safeArray(raw.tags),
      ...topics,
      ...githubTopics,
      ...safeArray(raw.matchedLabels),
      raw.category,
      raw.seed ? "seed" : null,
      raw.koreaSignal ? "korea-signal" : null
    ]),
    existingCategories: uniq([raw.category]),
    matchedQueries: safeArray(raw.matchedQueries),
    sourceRank: raw.rank || null,
    score: raw.priorityScore || raw.score || raw.trendScore || 0
  };
}

function normalizeCloneAnalysis(raw) {
  const name = raw.name || repoNameFromSourceDir(raw.dir);
  const safe = repoSafeName(name);
  return {
    id: `repository:${name.toLowerCase()}`,
    kind: "repository",
    name,
    title: name,
    url: raw.remote || repoUrlFromName(name),
    summary: `Local clone structure analysis: ${raw.fileCount || 0} files, ${raw.dirCount || 0} directories.`,
    language: null,
    stars: 0,
    forks: 0,
    license: null,
    updatedAt: raw.head?.date || null,
    localPath: raw.localPath || `sources/${raw.dir}`,
    reportPath: existingReport([`reports/clone-structures/${safe}.md`]),
    sourceDatasets: ["clone-structure-analysis"],
    sourcePaths: ["data/clone-structure-analysis-127.json"],
    originTags: uniq([...(raw.groups || []), ...(raw.agentInstructionFiles || []).map((file) => path.basename(file))]),
    existingCategories: safeArray(raw.groups),
    matchedQueries: [],
    fileCount: raw.fileCount || 0,
    score: (raw.fileCount || 0) > 1000 ? 100 : 20
  };
}

function normalizePaper(raw) {
  const concepts = safeArray(raw.concepts).map((concept) => concept.name).filter(Boolean);
  const matched = safeArray(raw.matchedCategories);
  return {
    id: `paper:${raw.id || raw.doi || raw.title}`,
    kind: "research-paper",
    title: raw.title || "Untitled paper",
    url: raw.landingPageUrl || raw.doi || raw.pdfUrl || raw.id || null,
    summary: cleanText(raw.abstractSample || ""),
    year: raw.publicationYear || null,
    publicationDate: raw.publicationDate || null,
    sourceName: raw.sourceName || null,
    sourceType: raw.sourceType || null,
    citedByCount: raw.citedByCount || 0,
    sourceDatasets: ["spec-driven-evidence-corpus"],
    sourcePaths: ["data/spec-driven-evidence-corpus-500.json"],
    originTags: uniq([...concepts, ...matched, raw.type, raw.sourceType, raw.sourceName]),
    existingCategories: matched,
    matchedQueries: safeArray(raw.matchedQueries),
    score: raw.citedByCount || 0
  };
}

function normalizeMaterial(raw, sourceDataset, sourcePath, kind) {
  const tags = uniq([
    ...safeArray(raw.tags),
    ...safeArray(raw.categories),
    ...safeArray(raw.trendTags),
    ...safeArray(raw.designTags),
    raw.materialType,
    raw.format,
    raw.company,
    raw.event,
    raw.source
  ]);
  return {
    id: `${kind}:${raw.id || raw.url || raw.title}`,
    kind,
    title: raw.title || "Untitled reference",
    url: raw.url || null,
    summary: cleanText(raw.summary || ""),
    company: raw.company || null,
    event: raw.event || null,
    eventDate: raw.eventDate || raw.startsAt || null,
    source: raw.source || null,
    materialType: raw.materialType || null,
    sourceType: raw.sourceType || null,
    sourceDatasets: [sourceDataset],
    sourcePaths: [sourcePath],
    originTags: tags,
    existingCategories: uniq([...safeArray(raw.categories), ...safeArray(raw.trendTags)]),
    score: raw.score || 0
  };
}

function compactItem(item) {
  const categories = assignCategories(item);
  return {
    id: item.id,
    kind: item.kind,
    title: item.title || item.name,
    name: item.name || null,
    url: item.url || null,
    summary: item.summary || "",
    categories,
    sourceDatasets: safeArray(item.sourceDatasets),
    sourcePaths: safeArray(item.sourcePaths),
    originTags: safeArray(item.originTags).slice(0, 40),
    language: item.language || null,
    stars: item.stars || 0,
    forks: item.forks || 0,
    license: item.license || null,
    updatedAt: item.updatedAt || null,
    localPath: item.localPath || null,
    reportPath: item.reportPath || null,
    year: item.year || null,
    citedByCount: item.citedByCount || 0,
    event: item.event || null,
    eventDate: item.eventDate || null,
    company: item.company || null,
    score: Number(scoreItem(item).toFixed(2))
  };
}

async function collectRepositories() {
  const repoMap = new Map();
  const add = (item) => {
    if (!item) return;
    const key = item.name?.toLowerCase() || item.url?.toLowerCase() || item.id;
    repoMap.set(key, repoMap.has(key) ? mergeItem(repoMap.get(key), item) : item);
  };

  for (const repo of safeArray((await readJson("data/global-trending-repositories-500.json", {})).repositories)) {
    add(normalizeRepo(repo, "global-trending-repositories", "data/global-trending-repositories-500.json"));
  }
  for (const repo of safeArray((await readJson("data/korea-trending-repositories-500.json", {})).repositories)) {
    add(normalizeRepo(repo, "korea-trending-repositories", "data/korea-trending-repositories-500.json"));
  }
  for (const repo of safeArray((await readJson("data/llm-wiki-repositories.json", {})).repositories)) {
    add(normalizeRepo(repo, "llm-wiki-repositories", "data/llm-wiki-repositories.json"));
  }
  for (const repo of safeArray((await readJson("data/spec-driven-repositories.json", {})).repositories)) {
    add(normalizeRepo(repo, "spec-driven-repositories", "data/spec-driven-repositories.json"));
  }
  for (const repo of safeArray(await readJson("data/adjacent-tech-repositories.json", []))) {
    add(normalizeRepo(repo, "adjacent-tech-repositories", "data/adjacent-tech-repositories.json"));
  }
  for (const repo of safeArray(await readJson("data/adjacent-tech-source-inventory.json", []))) {
    add(normalizeRepo(repo, "adjacent-tech-source-inventory", "data/adjacent-tech-source-inventory.json"));
  }
  for (const repo of safeArray(await readJson("data/repositories.json", []))) {
    add(normalizeRepo(repo, "seed-repositories", "data/repositories.json"));
  }
  for (const analysis of safeArray((await readJson("data/clone-structure-analysis-127.json", {})).analyses)) {
    add(normalizeCloneAnalysis(analysis));
  }

  const sourcesDir = path.join(root, "sources");
  if (existsSync(sourcesDir)) {
    for (const entry of await readdir(sourcesDir, { withFileTypes: true })) {
      if (!entry.isDirectory()) continue;
      const name = repoNameFromSourceDir(entry.name);
      const key = name.toLowerCase();
      const existing = repoMap.get(key);
      if (existing) {
        existing.localPath ||= `sources/${entry.name}`;
        existing.sourceDatasets = uniq([...safeArray(existing.sourceDatasets), "source-directory"]);
      } else {
        add({
          id: `repository:${key}`,
          kind: "repository",
          name,
          title: name,
          url: repoUrlFromName(name),
          summary: "Local source directory present in this repository.",
          localPath: `sources/${entry.name}`,
          reportPath: existingReport([
            `reports/global-trending/repositories/${entry.name}.md`,
            `reports/korea-trending/repositories/${entry.name}.md`,
            `reports/llm-wiki/repositories/${entry.name}.md`,
            `reports/clone-structures/${entry.name}.md`
          ]),
          sourceDatasets: ["source-directory"],
          sourcePaths: ["sources/"],
          originTags: ["local-source"],
          existingCategories: [],
          matchedQueries: [],
          stars: 0,
          forks: 0,
          score: 0
        });
      }
    }
  }

  return [...repoMap.values()].map(compactItem);
}

async function collectPapers() {
  const corpus = await readJson("data/spec-driven-evidence-corpus-500.json", {});
  return safeArray(corpus.works).map((work) => compactItem(normalizePaper(work)));
}

async function collectMaterials() {
  const items = [];
  const harness = await readJson("data/claude-codex-harness-materials-1000.json", {});
  for (const material of safeArray(harness.materials)) {
    items.push(compactItem(normalizeMaterial(material, "claude-codex-harness-materials", "data/claude-codex-harness-materials-1000.json", "reference-material")));
  }
  const conference = await readJson("data/reference-index/agent-harness-conference-sources.json", {});
  for (const material of safeArray(conference.materials)) {
    items.push(compactItem(normalizeMaterial(material, "agent-harness-conference-sources", "data/reference-index/agent-harness-conference-sources.json", "conference-reference")));
  }
  const aiTrends = await readJson("data/reference-index/ai-usage-trend-conferences-6-12mo.json", {});
  for (const material of safeArray(aiTrends.materials)) {
    items.push(compactItem(normalizeMaterial(material, "ai-usage-trend-conferences", "data/reference-index/ai-usage-trend-conferences-6-12mo.json", "trend-reference")));
  }
  return items;
}

function countsByKind(items) {
  return items.reduce((acc, item) => {
    acc[item.kind] = (acc[item.kind] || 0) + 1;
    return acc;
  }, {});
}

function sortItems(items) {
  return [...items].sort((a, b) => {
    const scoreDiff = (b.score || 0) - (a.score || 0);
    if (scoreDiff) return scoreDiff;
    const starDiff = (b.stars || 0) - (a.stars || 0);
    if (starDiff) return starDiff;
    return String(a.title).localeCompare(String(b.title));
  });
}

function markdownLink(label, url) {
  if (!url) return tableText(label);
  return `[${tableText(label)}](${url})`;
}

function pathLink(label, target, fromDir) {
  if (!target) return "";
  const absolute = path.join(root, target);
  const relative = path.relative(path.join(root, fromDir), absolute).replaceAll(path.sep, "/");
  return `[${tableText(label)}](${relative})`;
}

function navigationBlock(fromDir) {
  return `## 바로가기

| 이동 | 여기서 볼 것 |
| --- | --- |
| ${pathLink("전체 시작 README", "README.md", fromDir)} | 레포 전체 목적, 핵심 카테고리, 읽는 순서. |
| ${pathLink("전체 보고서 읽기 지도", "reports/README.md", fromDir)} | 모든 보고서의 시작점, 주제, 폴더 지도. |
| ${pathLink("주제별 보고서 목차", "reports/by-topic/README.md", fromDir)} | 조사 질문 기준으로 보고서를 찾는 입구. |
| ${pathLink("표/CSV 목차", "reports/tables/README.md", fromDir)} | 표로 빠르게 훑고 CSV로 비교하는 입구. |
| ${pathLink("레포별 인사이트", "reports/repository-insights/README.md", fromDir)} | 레포별 총평, 위험 신호, 다음에 볼 링크. |
| ${pathLink("소스 딥다이브", "reports/source-deep-dives/README.md", fromDir)} | 로컬 클론에서 뽑은 파일 경로 근거. |
| ${pathLink("근거 카테고리", "reports/categories/README.md", fromDir)} | 오픈소스, 논문, 발표, 참고자료의 artifact 분류. |
`;
}

function relatedTopicLinks(categorySlug, fromDir) {
  return safeArray(categoryTopicMap[categorySlug])
    .map((topicSlug) => pathLink(topicSlug, `reports/by-topic/${topicSlug}/README.md`, fromDir))
    .filter(Boolean)
    .join(", ");
}

function itemCountText(count) {
  return `${count.toLocaleString("en-US")}개 항목`;
}

function topKindText(counts, limit = 5) {
  return Object.entries(counts)
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .slice(0, limit)
    .map(([kind, count]) => `${kind} (${count})`)
    .join(", ");
}

function renderItemTable(items, fromDir, limit = 40) {
  const rows = sortItems(items).slice(0, limit).map((item) => {
    const title = markdownLink(item.title, item.url);
    const score = Number(item.score || 0).toFixed(1);
    const meta = [
      item.language,
      item.stars ? `${item.stars} stars` : null,
      item.year,
      item.eventDate,
      item.company
    ].filter(Boolean).join(", ");
    const local = pathLink("소스", item.localPath, fromDir);
    const report = pathLink("보고서", item.reportPath, fromDir);
    const links = [local, report].filter(Boolean).join(" / ");
    return `| ${title} | ${tableText(item.kind)} | ${tableText(meta)} | ${score} | ${links} |`;
  });
  if (!rows.length) return "_이 섹션에 색인된 항목이 없습니다._\n";
  return `| 항목 | 유형 | 메타데이터 | 점수 | 링크 |
| --- | --- | --- | ---: | --- |
${rows.join("\n")}\n`;
}

function renderCategoryReadme(category, items) {
  const fromDir = `reports/categories/${category.slug}`;
  const repos = items.filter((item) => item.kind === "repository");
  const papers = items.filter((item) => item.kind === "research-paper");
  const presentations = items.filter((item) => ["conference-reference", "trend-reference"].includes(item.kind));
  const references = items.filter((item) => item.kind === "reference-material");
  const counts = countsByKind(items);

  return `# ${category.title}

생성 시각: ${generatedAt}

${category.description}

## 요약

- 조사 단위: \`${category.slug}\` artifact 카테고리에 속한 오픈소스, 논문, 발표/트렌드, 참고자료 묶음입니다.
- 포함 범위: ${itemCountText(items.length)}이며, 주요 구성은 ${tableText(topKindText(counts) || "없음")}입니다.
- 연결 보고서: ${relatedTopicLinks(category.slug, fromDir) || "없음"}.

## 총평

이 README는 보고서 파일이 아니라 조사 근거와 대상 artifact를 기준으로 정리한 입구입니다. 상단의 관련 report topic으로 넘어가면 같은 주제를 보고서 관점에서 읽을 수 있고, 아래 표들은 해당 카테고리의 주요 오픈소스, 연구, 발표, 참고자료를 우선순위대로 훑는 데 적합합니다.

${navigationBlock(fromDir)}

## 범위

- 전체 분류 항목: ${items.length}
- 오픈소스/레포: ${repos.length}
- 논문/연구자료: ${papers.length}
- 발표/컨퍼런스/트렌드 자료: ${presentations.length}
- 참고자료: ${references.length}
- 데이터 파일: ${pathLink(`data/categories/${category.slug}.json`, `data/categories/${category.slug}.json`, fromDir)}
- 연결된 보고서 주제: ${relatedTopicLinks(category.slug, fromDir) || "없음"}

## 유형별 구성

${Object.entries(counts).sort((a, b) => b[1] - a[1]).map(([kind, count]) => `- ${kind}: ${count}`).join("\n") || "- 없음"}

## 주요 오픈소스

${renderItemTable(repos, fromDir, 45)}

## 주요 연구/논문

${renderItemTable(papers, fromDir, 25)}

## 주요 발표/컨퍼런스 자료

${renderItemTable(presentations, fromDir, 35)}

## 주요 참고자료

${renderItemTable(references, fromDir, 25)}

전체 카테고리 멤버십은 ${pathLink(`data/categories/${category.slug}.json`, `data/categories/${category.slug}.json`, fromDir)}에 저장됩니다.
`;
}

function renderRootReadme(categorySummaries, totals) {
  const rows = categorySummaries
    .sort((a, b) => b.counts.total - a.counts.total || a.title.localeCompare(b.title))
    .map((category) => {
      const folder = `[폴더](${category.slug}/README.md)`;
      const data = `[데이터](../../data/categories/${category.slug}.json)`;
      const topics = relatedTopicLinks(category.slug, "reports/categories");
      return `| ${category.title} | ${category.counts.total} | ${category.counts.repository || 0} | ${category.counts["research-paper"] || 0} | ${(category.counts["conference-reference"] || 0) + (category.counts["trend-reference"] || 0)} | ${topics || "없음"} | ${folder} / ${data} |`;
    })
    .join("\n");

  return `# 근거 카테고리 목차

생성 시각: ${generatedAt}

이 폴더는 흩어져 있는 오픈소스, 연구, 발표, 트렌드 근거를 오래 유지할 수 있는 taxonomy로 다시 묶은 목차입니다. 원본 파일은 그대로 두고, 카테고리 README가 원본 데이터, 보고서, 클론 소스 위치로 연결합니다.

## 요약

- 조사 단위: 전체 조사 근거를 artifact 기준으로 분류한 상위 목차입니다.
- 포함 범위: ${itemCountText(totals.totalItems)}, ${categorySummaries.length}개 카테고리 폴더입니다.
- 탐색 방식: 아래 카테고리 표에서 카테고리 README로 들어가면 요약, 총평, 주요 오픈소스, 연구, 발표, 참고자료를 볼 수 있습니다.

## 총평

이 README는 “무슨 근거와 대상이 모였는가”를 파악하는 데 가장 적합합니다. 보고서 자체를 읽으려면 전체 보고서 읽기 지도로, 표와 CSV로 비교하려면 표/CSV 목차로 이동하면 됩니다.

${navigationBlock("reports/categories")}

## 전체 규모

- 고유 정규화 항목: ${totals.totalItems}
- 오픈소스/레포 항목: ${totals.byKind.repository || 0}
- 논문/연구자료: ${totals.byKind["research-paper"] || 0}
- 컨퍼런스/트렌드 자료: ${(totals.byKind["conference-reference"] || 0) + (totals.byKind["trend-reference"] || 0)}
- 참고자료: ${totals.byKind["reference-material"] || 0}
- 카테고리 폴더: ${categorySummaries.length}

## 카테고리 한눈에 보기

| 카테고리 | 전체 | 레포 | 논문 | 발표 | 연결된 보고서 주제 | 링크 |
| --- | ---: | ---: | ---: | ---: | --- | --- |
${rows}

## 데이터 파일

- [data/category-index.json](../../data/category-index.json)
- [data/categories/](../../data/categories/)

## 메모

- 하나의 항목은 source metadata에 따라 여러 카테고리에 동시에 속할 수 있습니다.
- category JSON 파일은 전체 멤버십이고, Markdown 페이지는 읽기 좋은 상위 항목과 안정 링크를 보여줍니다.
- \`data/\`, \`reports/\`, \`sources/\` 아래 기존 파일은 이동하지 않으므로 현재 링크와 로컬 경로가 유지됩니다.
`;
}

async function main() {
  const repositories = await collectRepositories();
  const papers = await collectPapers();
  const materials = await collectMaterials();
  const allItems = [...repositories, ...papers, ...materials];
  const categoryMap = new Map(taxonomy.map((category) => [category.slug, []]));

  for (const item of allItems) {
    for (const category of item.categories) {
      if (categoryMap.has(category)) categoryMap.get(category).push(item);
    }
  }

  await rm(categoriesDataDir, { recursive: true, force: true });
  await rm(reportsCategoriesDir, { recursive: true, force: true });
  await mkdir(categoriesDataDir, { recursive: true });
  await mkdir(reportsCategoriesDir, { recursive: true });

  const categorySummaries = [];
  for (const category of taxonomy) {
    const items = sortItems(categoryMap.get(category.slug) || []);
    const categoryData = {
      generatedAt,
      slug: category.slug,
      title: category.title,
      description: category.description,
      counts: {
        total: items.length,
        ...countsByKind(items)
      },
      items
    };
    await writeFile(path.join(categoriesDataDir, `${category.slug}.json`), JSON.stringify(categoryData, null, 2));
    const categoryReportDir = path.join(reportsCategoriesDir, category.slug);
    await mkdir(categoryReportDir, { recursive: true });
    await writeFile(path.join(categoryReportDir, "README.md"), renderCategoryReadme(category, items));
    categorySummaries.push({
      slug: category.slug,
      title: category.title,
      description: category.description,
      counts: categoryData.counts,
      dataPath: `data/categories/${category.slug}.json`,
      reportPath: `reports/categories/${category.slug}/README.md`,
      topItems: items.slice(0, 12).map((item) => ({
        title: item.title,
        kind: item.kind,
        url: item.url,
        score: item.score
      }))
    });
  }

  const totals = {
    generatedAt,
    totalItems: allItems.length,
    byKind: countsByKind(allItems),
    sourceDirectories: repositories.filter((item) => item.localPath?.startsWith("sources/")).length,
    taxonomy: taxonomy.map((category) => ({
      slug: category.slug,
      title: category.title,
      description: category.description,
      keywords: category.keywords
    }))
  };

  const categoryIndex = {
    generatedAt,
    description: "Unified category index for all repository open-source, research, presentation, and trend artifacts.",
    totals,
    categories: categorySummaries,
    items: sortItems(allItems)
  };

  await writeFile(path.join(dataDir, "category-index.json"), JSON.stringify(categoryIndex, null, 2));
  await writeFile(path.join(reportsCategoriesDir, "README.md"), renderRootReadme(categorySummaries, totals));

  console.error(`category index items: ${allItems.length}`);
  console.error(`repositories: ${repositories.length}`);
  console.error(`papers: ${papers.length}`);
  console.error(`materials: ${materials.length}`);
  console.error(`categories: ${categorySummaries.length}`);
}

await main();
