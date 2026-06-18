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
    title: "Coding Agents and IDEs",
    description: "Codex, Claude Code, Aider, OpenHands, Cline/Roo, Gemini CLI, code review, coding assistants, and agentic IDE workflows.",
    keywords: ["codex", "claude code", "aider", "openhands", "cline", "roo", "gemini-cli", "gemini cli", "coding agent", "swe-agent", "open-swe", "code agent", "code review", "developer workflow", "ide", "vscode-copilot", "qwen-code", "tabby", "continue"]
  },
  {
    slug: "agent-harness-orchestration",
    title: "Agent Harness and Orchestration",
    description: "Agent harnesses, multi-agent runtimes, skills, tools, workflows, task orchestration, and production agent frameworks.",
    keywords: ["agent", "agents", "harness", "orchestration", "workflow", "multi-agent", "multi agent", "skills", "tool use", "tool-use", "langgraph", "autogen", "crewai", "pydantic-ai", "mastra", "agentos", "agent os", "agentic"]
  },
  {
    slug: "mcp-tools-protocols",
    title: "MCP, Tools, and Protocols",
    description: "Model Context Protocol servers, tool registries, gateways, connectors, protocol SDKs, and tool-calling infrastructure.",
    keywords: ["mcp", "model context protocol", "mcp-server", "mcp server", "tool server", "tooling layer", "gateway", "connector", "protocol"]
  },
  {
    slug: "spec-driven-requirements",
    title: "Spec-Driven and Requirements",
    description: "Spec-driven development, requirements engineering, acceptance criteria, BDD/TDD, traceability, API contracts, and formal specifications.",
    keywords: ["spec-driven", "spec driven", "requirements", "acceptance criteria", "traceability", "bdd", "tdd", "formal specification", "api contract", "openspec", "kiro", "spec-kit", "sdd", "prd"]
  },
  {
    slug: "llm-wiki-rag-knowledge",
    title: "LLM Wiki, RAG, and Knowledge Bases",
    description: "LLM-maintained wikis, RAG, GraphRAG, knowledge bases, document chat, retrieval, notebooks, and source-aware knowledge systems.",
    keywords: ["llm wiki", "wiki", "rag", "retrieval", "graphrag", "graph rag", "knowledge base", "knowledge graph", "document chat", "notebooklm", "docs", "search", "retrieval-augmented-generation"]
  },
  {
    slug: "context-memory",
    title: "Context and Memory",
    description: "Long-term memory, session state, context engineering, recall, persistence, personalization, and agent memory systems.",
    keywords: ["memory", "long-term-memory", "context", "context engineering", "recall", "persistent", "persistence", "session", "personalization", "state-management", "zep", "mem0"]
  },
  {
    slug: "evals-observability-quality",
    title: "Evals, Observability, and Quality",
    description: "Prompt and agent evals, tracing, observability, quality gates, benchmarks, testing, monitoring, and reliability systems.",
    keywords: ["eval", "evals", "evaluation", "benchmark", "observability", "tracing", "trace", "quality", "quality gate", "monitoring", "test", "testing", "promptfoo", "deepeval", "ragas", "langfuse", "phoenix", "trulens", "opik"]
  },
  {
    slug: "security-governance-safety",
    title: "Security, Governance, and Safety",
    description: "Sandboxing, policy, governance, guardrails, prompt-injection defense, supply-chain security, identity, audit, and safe agent execution.",
    keywords: ["security", "sandbox", "safe", "safety", "governance", "guardrail", "guardrails", "policy", "prompt injection", "prompt-injection", "identity", "audit", "sbom", "fuzzer", "scanner", "permission", "risk"]
  },
  {
    slug: "ai-infrastructure-serving",
    title: "AI Infrastructure and Serving",
    description: "LLM serving, inference engines, GPUs, AI factories, training/inference infrastructure, Kubernetes, runtimes, and model deployment.",
    keywords: ["vllm", "inference", "serving", "llm serving", "text-generation-inference", "tgi", "sglang", "gpu", "trainium", "nvidia", "kubernetes", "runtime", "deployment", "ai factory", "ai-factories", "llama.cpp", "localai", "ollama"]
  },
  {
    slug: "data-platforms-vector-databases",
    title: "Data Platforms and Vector Databases",
    description: "Vector databases, graph databases, search engines, data stores, embeddings, indexing, and retrieval infrastructure.",
    keywords: ["vector", "vector db", "database", "postgres", "pgvector", "qdrant", "milvus", "weaviate", "chroma", "lancedb", "redis", "vespa", "typesense", "faiss", "embedding", "indexing", "graph database"]
  },
  {
    slug: "developer-productivity-devtools",
    title: "Developer Productivity and DevTools",
    description: "Developer tooling, automation, CI, GitHub Actions, CLIs, SDKs, workflow accelerators, code search, and productivity systems.",
    keywords: ["devtools", "developer-tools", "developer tools", "cli", "sdk", "github action", "github actions", "ci", "automation", "productivity", "code search", "repo map", "source indexing", "toolbox"]
  },
  {
    slug: "local-llm-models",
    title: "Local LLMs and Models",
    description: "Local model runtimes, open models, model optimization, transformers, small models, edge inference, and model-serving UIs.",
    keywords: ["local llm", "local-llm", "open model", "open-models", "model", "models", "transformers", "bitnet", "llama", "mlx", "gguf", "gpt4all", "text-generation-webui", "edge-ai"]
  },
  {
    slug: "korean-ai-open-source",
    title: "Korean AI and Open Source",
    description: "Korea-trending repositories, Korean AI services, NAVER, Kakao, Samsung, SK, Toss, LINE, NHN, Korean RAG/MCP, and Korea conference signals.",
    keywords: ["korea", "korean", "한국", "naver", "kakao", "samsung", "sktelecom", "sk telecom", "toss", "line", "nhn", "daangn", "kakaobrain", "seoul"]
  },
  {
    slug: "global-ai-open-source",
    title: "Global AI Open Source",
    description: "Global-trending AI, LLM, agent, RAG, devtool, security, and infrastructure open-source repositories.",
    keywords: ["global-trending", "global ai", "open source", "oss"]
  },
  {
    slug: "research-papers",
    title: "Research Papers and Evidence",
    description: "OpenAlex papers, studies, requirements research, agent research, source scanning research, and evidence corpus entries.",
    keywords: ["paper", "research", "study", "journal", "conference paper", "openalex", "doi", "publication"]
  },
  {
    slug: "presentations-conferences",
    title: "Presentations and Conferences",
    description: "Conference sessions, keynotes, webinars, event recaps, recordings, schedules, and presentation-method references.",
    keywords: ["conference", "presentation", "keynote", "webinar", "recording", "session", "event", "summit", "devday", "re:invent", "gtc", "build", "cloud next", "dan25"]
  },
  {
    slug: "ai-usage-trends",
    title: "AI Usage Trends",
    description: "Recent AI adoption trends from Amazon/AWS, Microsoft, Google, NVIDIA, Salesforce, OpenAI, Anthropic, GitHub, NAVER, Samsung, SK, and Korea events.",
    keywords: ["ai usage trend", "agentic enterprise", "agentic-ai", "enterprise-ai", "physical-ai", "consumer-ai", "ai-infrastructure", "agentforce", "agentcore", "gemini enterprise", "copilot studio"]
  }
];

const taxonomyBySlug = new Map(taxonomy.map((category) => [category.slug, category]));

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
    const local = pathLink("source", item.localPath, fromDir);
    const report = pathLink("report", item.reportPath, fromDir);
    const links = [local, report].filter(Boolean).join(" / ");
    return `| ${title} | ${tableText(item.kind)} | ${tableText(meta)} | ${score} | ${links} |`;
  });
  if (!rows.length) return "_No indexed items in this section._\n";
  return `| Item | Type | Metadata | Score | Local links |\n| --- | --- | --- | ---: | --- |\n${rows.join("\n")}\n`;
}

function renderCategoryReadme(category, items) {
  const fromDir = `reports/categories/${category.slug}`;
  const repos = items.filter((item) => item.kind === "repository");
  const papers = items.filter((item) => item.kind === "research-paper");
  const presentations = items.filter((item) => ["conference-reference", "trend-reference"].includes(item.kind));
  const references = items.filter((item) => item.kind === "reference-material");
  const counts = countsByKind(items);

  return `# ${category.title}

Generated: ${generatedAt}

${category.description}

## Counts

- Total categorized entries: ${items.length}
- Repositories: ${repos.length}
- Research papers: ${papers.length}
- Presentations/conferences/trend references: ${presentations.length}
- Reference materials: ${references.length}
- Data file: ${pathLink(`data/categories/${category.slug}.json`, `data/categories/${category.slug}.json`, fromDir)}

## Type Breakdown

${Object.entries(counts).sort((a, b) => b[1] - a[1]).map(([kind, count]) => `- ${kind}: ${count}`).join("\n") || "- none"}

## Top Open Source

${renderItemTable(repos, fromDir, 45)}

## Top Research

${renderItemTable(papers, fromDir, 25)}

## Top Presentations and Conference References

${renderItemTable(presentations, fromDir, 35)}

## Top Reference Materials

${renderItemTable(references, fromDir, 25)}

Complete category membership is stored in ${pathLink(`data/categories/${category.slug}.json`, `data/categories/${category.slug}.json`, fromDir)}.
`;
}

function renderRootReadme(categorySummaries, totals) {
  const rows = categorySummaries
    .sort((a, b) => b.counts.total - a.counts.total || a.title.localeCompare(b.title))
    .map((category) => {
      const folder = `[folder](${category.slug}/README.md)`;
      const data = `[data](../../data/categories/${category.slug}.json)`;
      return `| ${category.title} | ${category.counts.total} | ${category.counts.repository || 0} | ${category.counts["research-paper"] || 0} | ${(category.counts["conference-reference"] || 0) + (category.counts["trend-reference"] || 0)} | ${folder} / ${data} |`;
    })
    .join("\n");

  return `# Category Index

Generated: ${generatedAt}

This folder reorganizes the repository's scattered open-source, research, presentation, and trend materials into a durable taxonomy. Original source files remain in place; category folders link back to the original data, reports, and cloned source directories.

## Totals

- Unique normalized entries: ${totals.totalItems}
- Repositories/open-source entries: ${totals.byKind.repository || 0}
- Research papers: ${totals.byKind["research-paper"] || 0}
- Conference/trend references: ${(totals.byKind["conference-reference"] || 0) + (totals.byKind["trend-reference"] || 0)}
- Reference materials: ${totals.byKind["reference-material"] || 0}
- Category folders: ${categorySummaries.length}

## Categories

| Category | Total | Repos | Papers | Presentations | Links |
| --- | ---: | ---: | ---: | ---: | --- |
${rows}

## Data Files

- [data/category-index.json](../../data/category-index.json)
- [data/categories/](../../data/categories/)

## Notes

- Items can belong to multiple categories when the source metadata supports it.
- The category JSON files are the complete membership lists; markdown pages show top items and stable links for reading.
- Existing files under \`data/\`, \`reports/\`, and \`sources/\` are not moved, so current web links and local paths remain valid.
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
