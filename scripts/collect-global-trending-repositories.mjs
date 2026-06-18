import { execFileSync } from "node:child_process";
import { mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";

const generatedAt = new Date().toISOString();
const targetCount = Number(process.env.GLOBAL_TREND_TARGET_COUNT || 500);
const orgPageLimit = Number(process.env.GLOBAL_ORG_PAGE_LIMIT ?? 1);
const trendingScrapeEnabled = process.env.GLOBAL_SKIP_TRENDING_SCRAPE !== "1";
const outputRepoFile = "data/global-trending-repositories-500.json";
const outputSignalFile = "data/global-trend-source-signals-2026-06-18.json";

const trendSources = [
  {
    source: "GitHub Trending",
    title: "Trending repositories on GitHub today",
    url: "https://github.com/trending",
    observedSignals: ["codebase-memory-mcp", "agent-reach", "cloud-native", "support-ops", "agentic-video"],
    seedRepos: ["DeusData/codebase-memory-mcp", "Panniantong/Agent-Reach", "meshery/meshery", "chatwoot/chatwoot", "calesthio/OpenMontage"]
  },
  {
    source: "OSSInsight",
    title: "Trending AI Repositories on GitHub - real-time rankings",
    url: "https://ossinsight.io/trending/ai",
    observedSignals: ["ai-agents", "coding-agents", "mcp-servers", "rag", "inference", "vector-db", "vibe-coding"]
  },
  {
    source: "GitHub Octoverse 2025",
    title: "AI, agents, and typed languages driving open source shifts",
    url: "https://octoverse.github.com/",
    observedSignals: ["ai", "agents", "typescript", "typed-languages", "global-open-source-growth"]
  },
  {
    source: "Vela Partners",
    title: "19 Emerging Trends Reshaping Open-Source AI Infrastructure in 2026",
    url: "https://vela.partners/blog/emerging-open-source-ai-infrastructure-trends-2026",
    observedSignals: ["ai-infrastructure", "recent-star-growth", "agents", "data-infra", "observability"],
    notes: "The report says it scanned 854 repositories with significant 90-day traction."
  },
  {
    source: "LangChain",
    title: "The best AI agent frameworks in 2026",
    url: "https://www.langchain.com/resources/ai-agent-frameworks",
    observedSignals: ["langchain", "langgraph", "crewai", "microsoft-agent-framework", "llamaindex-workflows", "google-adk", "openai-agents-sdk", "mastra"]
  },
  {
    source: "Firecrawl",
    title: "Best GitHub repositories for AI developers to star in 2026",
    url: "https://www.firecrawl.dev/blog/best-github-repos",
    observedSignals: ["supply-chain-scanning", "web-context", "system-design", "developer-roadmap", "claude-skills", "llm-training"]
  },
  {
    source: "ITPro",
    title: "MCP and AGENTS.md donated to Linux Foundation / Agentic AI Foundation",
    url: "https://www.itpro.com/software/open-source/anthropic-says-mcp-will-stay-open-neutral-and-community-driven-after-donating-project-to-linux-foundation",
    observedSignals: ["mcp", "agents-md", "agentic-ai-foundation", "open-standards", "agent-interoperability"]
  },
  {
    source: "Hacker News",
    title: "Show HN / open-source AI agent projects",
    url: "https://news.ycombinator.com/",
    observedSignals: ["show-hn", "developer-tools", "ai-agents", "open-source-launches"],
    notes: "HN is used as a qualitative launch/momentum signal, not a complete repository ranking."
  }
];

const githubSearchQueries = [
  { label: "ai-agent-framework", q: "ai agent framework pushed:>2025-09-01 stars:>50", sort: "updated", weight: 28 },
  { label: "coding-agent", q: "coding agent pushed:>2025-09-01 stars:>50", sort: "updated", weight: 30 },
  { label: "mcp-server", q: "mcp server pushed:>2025-09-01 stars:>20", sort: "updated", weight: 30 },
  { label: "model-context-protocol", q: "model context protocol pushed:>2025-09-01 stars:>20", sort: "updated", weight: 30 },
  { label: "rag", q: "rag pushed:>2025-09-01 stars:>50", sort: "updated", weight: 25 },
  { label: "llm-app", q: "llm application pushed:>2025-09-01 stars:>50", sort: "updated", weight: 20 },
  { label: "local-llm", q: "local llm pushed:>2025-09-01 stars:>50", sort: "updated", weight: 22 },
  { label: "llm-inference", q: "llm inference pushed:>2025-01-01 stars:>100", sort: "updated", weight: 20 },
  { label: "vector-db", q: "vector database pushed:>2025-01-01 stars:>100", sort: "updated", weight: 18 },
  { label: "agent-memory", q: "agent memory pushed:>2025-01-01 stars:>20", sort: "updated", weight: 22 },
  { label: "code-search", q: "code search pushed:>2025-01-01 stars:>100", sort: "updated", weight: 17 },
  { label: "developer-tools", q: "developer tools pushed:>2026-01-01 stars:>100", sort: "updated", weight: 15 },
  { label: "security-scanner", q: "security scanner pushed:>2026-01-01 stars:>100", sort: "updated", weight: 16 },
  { label: "supply-chain-security", q: "supply chain security pushed:>2025-01-01 stars:>50", sort: "updated", weight: 17 },
  { label: "observability", q: "observability pushed:>2026-01-01 stars:>100", sort: "updated", weight: 14 },
  { label: "opentelemetry", q: "opentelemetry pushed:>2025-01-01 stars:>100", sort: "updated", weight: 14 },
  { label: "database", q: "database pushed:>2026-01-01 stars:>100", sort: "updated", weight: 13 },
  { label: "postgres", q: "postgres pushed:>2026-01-01 stars:>50", sort: "updated", weight: 13 },
  { label: "kubernetes", q: "kubernetes pushed:>2026-01-01 stars:>100", sort: "updated", weight: 13 },
  { label: "cloud-native", q: "cloud native pushed:>2026-01-01 stars:>100", sort: "updated", weight: 13 },
  { label: "rust-cli", q: "rust cli pushed:>2026-01-01 stars:>100", sort: "updated", weight: 13 },
  { label: "typescript-library", q: "typescript library pushed:>2026-01-01 stars:>100", sort: "updated", weight: 12 },
  { label: "react", q: "react pushed:>2026-01-01 stars:>100", sort: "updated", weight: 11 },
  { label: "nextjs", q: "nextjs pushed:>2026-01-01 stars:>100", sort: "updated", weight: 11 },
  { label: "terminal", q: "terminal pushed:>2026-01-01 stars:>100", sort: "updated", weight: 12 },
  { label: "browser-automation-ai", q: "browser automation ai pushed:>2025-01-01 stars:>20", sort: "updated", weight: 18 },
  { label: "data-engineering-ai", q: "data engineering ai pushed:>2025-01-01 stars:>50", sort: "updated", weight: 15 },
  { label: "workflow-automation", q: "workflow automation pushed:>2026-01-01 stars:>100", sort: "updated", weight: 14 },
  { label: "open-source-ai", q: "open source ai pushed:>2025-09-01 stars:>100", sort: "updated", weight: 18 },
  { label: "agents-md", q: "AGENTS.md pushed:>2025-09-01 stars:>20", sort: "updated", weight: 18 }
];

const globalOrgNames = [
  "openai",
  "modelcontextprotocol",
  "anthropics",
  "google-gemini",
  "microsoft",
  "github",
  "langchain-ai",
  "run-llama",
  "crewAIInc",
  "agno-agi",
  "All-Hands-AI",
  "cline",
  "RooCodeInc",
  "TabbyML",
  "ollama",
  "ggml-org",
  "vllm-project",
  "sgl-project",
  "huggingface",
  "langgenius",
  "open-webui",
  "infiniflow",
  "mem0ai",
  "qdrant",
  "milvus-io",
  "weaviate",
  "chroma-core",
  "lancedb",
  "elastic",
  "opensearch-project",
  "opentelemetry",
  "prometheus",
  "grafana",
  "kubernetes",
  "helm",
  "envoyproxy",
  "istio",
  "supabase",
  "vercel",
  "cloudflare",
  "astral-sh",
  "oven-sh",
  "denoland",
  "rust-lang",
  "pytorch",
  "tensorflow",
  "fastapi",
  "apache",
  "getsentry"
];

const seedRepos = [
  "DeusData/codebase-memory-mcp",
  "Panniantong/Agent-Reach",
  "meshery/meshery",
  "chatwoot/chatwoot",
  "calesthio/OpenMontage",
  "Significant-Gravitas/AutoGPT",
  "ollama/ollama",
  "langchain-ai/langchain",
  "langgenius/dify",
  "open-webui/open-webui",
  "ggml-org/llama.cpp",
  "nomic-ai/gpt4all",
  "zed-industries/zed",
  "infiniflow/ragflow",
  "All-Hands-AI/OpenHands",
  "modelcontextprotocol/servers",
  "FoundationAgents/MetaGPT",
  "toeverything/AFFiNE",
  "vllm-project/vllm",
  "anomalyco/opencode",
  "google-gemini/gemini-cli",
  "cline/cline",
  "microsoft/autogen",
  "Mintplex-Labs/anything-llm",
  "openai/codex",
  "anthropics/claude-code",
  "run-llama/llama_index",
  "FlowiseAI/Flowise",
  "milvus-io/milvus",
  "mem0ai/mem0",
  "crewAIInc/crewAI",
  "facebookresearch/faiss",
  "mudler/LocalAI",
  "paul-gauthier/aider",
  "agno-agi/agno",
  "TabbyML/tabby",
  "continuedev/continue",
  "upstash/context7",
  "qdrant/qdrant",
  "block/goose",
  "chroma-core/chroma",
  "deepset-ai/haystack",
  "Mozilla-Ocho/llamafile",
  "github/github-mcp-server",
  "openai/openai-agents-python",
  "mastra-ai/mastra",
  "google/adk-python",
  "firecrawl/firecrawl",
  "perplexityai/bumblebee",
  "karpathy/nanochat",
  "kamranahmedse/developer-roadmap"
];

const excludedReposForClone = [
  { name: "torvalds/linux", reason: "Very large repository; not needed for this trend corpus." },
  { name: "chromium/chromium", reason: "Very large repository; not needed for this trend corpus." },
  { name: "llvm/llvm-project", reason: "Very large repository; not needed for this trend corpus." },
  { name: "tensorflow/tensorflow", reason: "Very large repository; covered by org metadata but excluded to keep clone corpus reproducible." },
  { name: "microsoft/vscode", reason: "Very large repository; covered by adjacent agent/code tooling repositories." }
];
const excludedRepoNames = new Set(excludedReposForClone.map((item) => item.name.toLowerCase()));

function ghApi(endpoint, fields = {}, options = {}) {
  const args = ["api", "-X", "GET", "-H", "Accept: application/vnd.github+json", endpoint];
  for (const [key, value] of Object.entries(fields)) args.push("-f", `${key}=${value}`);
  try {
    return JSON.parse(execFileSync("gh", args, {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "pipe"],
      maxBuffer: 40 * 1024 * 1024,
      timeout: Number(process.env.GH_API_TIMEOUT_MS || 20000)
    }));
  } catch (error) {
    const stderr = String(error.stderr || "").trim();
    if (!options.quiet) console.error(`gh api failed: ${endpoint} ${stderr}`);
    return null;
  }
}

async function fetchText(url) {
  const response = await fetch(url, {
    headers: {
      "User-Agent": "codex-global-trend-research/1.0",
      "Accept": "text/html,application/xhtml+xml"
    }
  });
  if (!response.ok) throw new Error(`${url} HTTP ${response.status}`);
  return response.text();
}

async function fetchTrendingNames() {
  const languages = ["", "python", "typescript", "javascript", "rust", "go", "java", "c", "cpp", "ruby"];
  const periods = ["daily", "weekly", "monthly"];
  const found = new Map();
  for (const language of languages) {
    for (const period of periods) {
      const url = `https://github.com/trending${language ? `/${language}` : ""}?since=${period}`;
      try {
        const html = await fetchText(url);
        const matches = [...html.matchAll(/href="\/([A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+)"/g)]
          .map((match) => match[1])
          .filter((name) => !name.includes("topics/") && !name.includes("sponsors/"));
        let rank = 0;
        for (const name of matches) {
          rank += 1;
          if (!/^[^/]+\/[^/]+$/.test(name)) continue;
          const key = name.toLowerCase();
          if (!found.has(key)) found.set(key, { name, sightings: [] });
          found.get(key).sightings.push({ language: language || "all", period, rank });
        }
      } catch (error) {
        console.error(`trending scrape failed: ${url} ${error.message}`);
      }
    }
  }
  return [...found.values()];
}

function normalizeRepo(raw, source) {
  const name = raw.full_name || raw.nameWithOwner || raw.name;
  if (!name || !name.includes("/")) return null;
  const [owner, repo] = name.split("/");
  return {
    name,
    owner,
    repo,
    url: raw.html_url || raw.url || `https://github.com/${name}`,
    description: raw.description || "",
    language: raw.language || raw.primaryLanguage?.name || null,
    stars: raw.stargazers_count ?? raw.stargazerCount ?? raw.stars ?? 0,
    forks: raw.forks_count ?? raw.forkCount ?? raw.forks ?? 0,
    openIssues: raw.open_issues_count ?? raw.openIssues?.totalCount ?? raw.openIssues ?? 0,
    pushedAt: raw.pushed_at || raw.pushedAt || raw.updated_at || raw.updatedAt || null,
    updatedAt: raw.updated_at || raw.updatedAt || null,
    createdAt: raw.created_at || raw.createdAt || null,
    topics: raw.topics || raw.repositoryTopics?.nodes?.map((node) => node.topic?.name).filter(Boolean) || [],
    license: raw.license?.spdx_id || raw.licenseInfo?.spdxId || null,
    archived: Boolean(raw.archived || raw.isArchived),
    fork: Boolean(raw.fork || raw.isFork),
    size: raw.size || 0,
    homepage: raw.homepage || null,
    sources: [source],
    matchedLabels: [],
    matchedQueries: [],
    seed: source.kind === "seed",
    trendingSightings: source.kind === "github-trending" ? source.sightings || [] : []
  };
}

function addRepo(map, raw, source) {
  const repo = normalizeRepo(raw, source);
  if (!repo) return;
  const key = repo.name.toLowerCase();
  const existing = map.get(key);
  if (existing) {
    existing.sources.push(source);
    existing.matchedLabels.push(...repo.matchedLabels);
    existing.matchedQueries.push(...repo.matchedQueries);
    existing.seed = existing.seed || repo.seed;
    existing.trendingSightings.push(...(repo.trendingSightings || []));
    return;
  }
  map.set(key, repo);
}

function daysSince(value) {
  if (!value) return 9999;
  const time = Date.parse(value);
  if (!Number.isFinite(time)) return 9999;
  return Math.max(0, (Date.now() - time) / 86400000);
}

function hasAny(text, words) {
  const lower = text.toLowerCase();
  return words.some((word) => lower.includes(word.toLowerCase()));
}

function classify(repo) {
  const text = `${repo.name} ${repo.description} ${(repo.topics || []).join(" ")}`.toLowerCase();
  const tags = [];
  const add = (tag, condition) => { if (condition) tags.push(tag); };
  add("ai-agent", hasAny(text, ["agent", "agents", "autonomous", "workflow", "orchestration", "langgraph", "crewai", "autogen"]));
  add("coding-agent", hasAny(text, ["coding agent", "code agent", "claude code", "codex", "cursor", "cline", "opencode", "aider", "openhands", "goose"]));
  add("mcp", hasAny(text, ["mcp", "model-context-protocol", "model context protocol", "agents.md", "agents md"]));
  add("rag", hasAny(text, ["rag", "retrieval", "knowledge base", "knowledge-base", "vector", "embedding", "rerank", "semantic search"]));
  add("local-llm", hasAny(text, ["ollama", "local llm", "llama.cpp", "vllm", "gguf", "mlx", "on-device", "inference"]));
  add("llm-app", hasAny(text, ["llm", "chatbot", "openai", "anthropic", "gemini", "model provider"]));
  add("devtools", hasAny(text, ["developer tools", "cli", "sdk", "terminal", "code search", "debugger", "ide", "editor"]));
  add("infra", hasAny(text, ["kubernetes", "helm", "terraform", "operator", "cloud native", "service mesh", "serverless"]));
  add("observability", hasAny(text, ["observability", "opentelemetry", "prometheus", "grafana", "tracing", "monitoring", "sentry"]));
  add("security", hasAny(text, ["security", "auth", "oauth", "vulnerability", "privacy", "sbom", "supply chain", "scanner"]));
  add("database", hasAny(text, ["database", "postgres", "sqlite", "mysql", "analytics database", "olap", "warehouse"]));
  add("frontend", hasAny(text, ["react", "nextjs", "next.js", "vue", "svelte", "frontend", "design system"]));
  add("data-ml", hasAny(text, ["machine learning", "deep learning", "pytorch", "tensorflow", "dataset", "pipeline", "mlops"]));
  return tags;
}

function scoreRepo(repo, queryWeights) {
  const text = `${repo.name} ${repo.description} ${(repo.topics || []).join(" ")}`;
  const labels = new Set(repo.matchedLabels);
  let score = 0;
  score += Math.min(70, Math.log10((repo.stars || 0) + 1) * 18);
  score += Math.min(18, Math.log10((repo.forks || 0) + 1) * 5);
  const age = daysSince(repo.pushedAt);
  if (age <= 7) score += 28;
  else if (age <= 30) score += 23;
  else if (age <= 90) score += 17;
  else if (age <= 180) score += 11;
  else if (age <= 365) score += 6;
  let queryScore = 0;
  for (const label of labels) queryScore += queryWeights.get(label) || 0;
  score += Math.min(55, queryScore);
  if (repo.seed) score += 45;
  if ((repo.trendingSightings || []).length) {
    const bestDaily = repo.trendingSightings.some((item) => item.period === "daily");
    score += Math.min(55, repo.trendingSightings.length * 9 + (bestDaily ? 14 : 0));
  }
  if (hasAny(text, ["mcp", "model context protocol", "agents.md"])) score += 20;
  if (hasAny(text, ["agent", "coding agent", "claude code", "codex", "opencode", "aider"])) score += 19;
  if (hasAny(text, ["rag", "retrieval", "embedding", "vector", "semantic search"])) score += 15;
  if (hasAny(text, ["ollama", "local llm", "vllm", "llama.cpp", "gguf"])) score += 13;
  if (hasAny(text, ["security", "supply chain", "scanner", "sbom"])) score += 10;
  if ((repo.stars || 0) === 0) score -= 50;
  else if ((repo.stars || 0) < 10) score -= 18;
  if (repo.archived) score -= 100;
  if (repo.fork) score -= 40;
  if ((repo.size || 0) > 700_000) score -= 30;
  else if ((repo.size || 0) > 300_000) score -= 10;
  return Math.round(score);
}

const candidates = new Map();
const activeGithubSearchQueries = githubSearchQueries.slice(0, Number(process.env.GLOBAL_SEARCH_QUERY_LIMIT || githubSearchQueries.length));
const queryWeights = new Map(activeGithubSearchQueries.map((query) => [query.label, query.weight]));
const queryStats = [];

const trendingNames = trendingScrapeEnabled ? await fetchTrendingNames() : [];
trendingNames.sort((a, b) => {
  const bestA = Math.min(...a.sightings.map((item) => item.rank || 999));
  const bestB = Math.min(...b.sightings.map((item) => item.rank || 999));
  return b.sightings.length - a.sightings.length || bestA - bestB || a.name.localeCompare(b.name);
});
const trendingNamesForMetadata = trendingNames.slice(0, Number(process.env.GLOBAL_TRENDING_METADATA_LIMIT || 400));
const trendingStats = { returned: trendingNames.length, fetched: 0, failed: 0 };
for (const item of trendingNamesForMetadata) {
  const repo = ghApi(`repos/${item.name}`, {}, { quiet: true });
  if (!repo) {
    trendingStats.failed += 1;
    continue;
  }
  trendingStats.fetched += 1;
  addRepo(candidates, repo, { kind: "github-trending", name: item.name, sightings: item.sightings });
}

for (const query of activeGithubSearchQueries) {
  const result = ghApi("search/repositories", {
    q: query.q,
    sort: query.sort,
    order: "desc",
    per_page: "100"
  });
  const items = result?.items || [];
  queryStats.push({ label: query.label, q: query.q, sort: query.sort, count: result?.total_count || 0, returned: items.length });
  for (const item of items) {
    const repo = normalizeRepo(item, { kind: "github-search", label: query.label, q: query.q });
    if (!repo) continue;
    repo.matchedLabels.push(query.label);
    repo.matchedQueries.push(query.q);
    addRepo(candidates, repo, { kind: "github-search", label: query.label, q: query.q });
    const existing = candidates.get(repo.name.toLowerCase());
    existing.matchedLabels.push(query.label);
    existing.matchedQueries.push(query.q);
  }
}

const orgStats = [];
for (const org of globalOrgNames) {
  let orgCount = 0;
  for (let page = 1; page <= orgPageLimit; page += 1) {
    const repos = ghApi(`orgs/${org}/repos?per_page=100&page=${page}&sort=pushed&direction=desc`, {}, { quiet: page === 1 });
    if (!Array.isArray(repos)) break;
    orgCount += repos.length;
    for (const repo of repos) addRepo(candidates, repo, { kind: "global-org", org });
    if (repos.length < 100) break;
  }
  orgStats.push({ org, returned: orgCount });
}

const seedStats = [];
for (const name of seedRepos) {
  const repo = ghApi(`repos/${name}`, {}, { quiet: true });
  if (repo) {
    addRepo(candidates, repo, { kind: "seed", name });
    seedStats.push({ name, ok: true });
  } else {
    seedStats.push({ name, ok: false });
  }
}

const repos = [...candidates.values()]
  .map((repo) => {
    const tags = classify(repo);
    const score = scoreRepo(repo, queryWeights);
    return {
      ...repo,
      matchedLabels: [...new Set(repo.matchedLabels)].sort(),
      matchedQueries: [...new Set(repo.matchedQueries)].sort(),
      trendingSightings: repo.trendingSightings || [],
      tags,
      trendScore: score,
      localPath: `sources/${repo.name.replace("/", "__")}`
    };
  })
  .filter((repo) => !repo.archived)
  .filter((repo) => !repo.fork || repo.seed)
  .filter((repo) => !excludedRepoNames.has(repo.name.toLowerCase()))
  .sort((a, b) => b.trendScore - a.trendScore || b.stars - a.stars || String(b.pushedAt || "").localeCompare(String(a.pushedAt || "")));

const selected = repos.slice(0, targetCount);
const overflow = repos.slice(targetCount, targetCount + 160);

const selection = {
  generatedAt,
  targetCount,
  candidateCount: repos.length,
  selectedCount: selected.length,
  selectionNote: trendingScrapeEnabled
    ? "Global trend signal combines GitHub Trending scrape, GitHub Search recency/stars, major global OSS organization repositories, seed repositories, and qualitative trend reports. It intentionally mixes AI/agent projects with broader developer tooling, infrastructure, data, security, frontend, and database projects."
    : "Global trend signal combines qualitative GitHub Trending/OSSInsight/report signals, GitHub Search recency/stars, seed repositories, and optional organization metadata. This run disabled live GitHub Trending scraping to avoid slow volatile HTML fetches; GitHub Search and seed repositories supply repository-level ranking.",
  queryStats,
  orgStats,
  seedStats,
  trendingStats,
  trendingScrapeEnabled,
  trendSources,
  excludedReposForClone,
  repositories: selected,
  overflowRepositories: overflow
};

const signals = {
  generatedAt,
  trendSources,
  githubSearchQueries: activeGithubSearchQueries,
  globalOrgNames,
  seedRepos,
  excludedReposForClone,
  method: {
    ranking: "trendScore = GitHub Trending sightings + source/query weights + recency + stars/forks + topic signal - archived/fork/very-large penalties",
    trendingScrapeEnabled,
    targetCount,
    caveats: [
      "GitHub Trending HTML is volatile and may differ by time of day.",
      "OSSInsight, Octoverse, Vela, LangChain, Firecrawl, ITPro, and HN are used as qualitative trend sources rather than a single authoritative ranking.",
      "The corpus favors cloneable repositories and excludes several extremely large repositories to keep the 500-repository local corpus reproducible."
    ]
  }
};

mkdirSync(path.dirname(outputRepoFile), { recursive: true });
writeFileSync(outputRepoFile, `${JSON.stringify(selection, null, 2)}\n`);
writeFileSync(outputSignalFile, `${JSON.stringify(signals, null, 2)}\n`);

console.error(`wrote ${outputRepoFile}: selected ${selected.length} / candidates ${repos.length}`);
console.error(`wrote ${outputSignalFile}`);
console.error(`trending scrape: returned=${trendingStats.returned} fetched=${trendingStats.fetched} failed=${trendingStats.failed}`);
