import { execFileSync } from "node:child_process";
import { mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";

const generatedAt = new Date().toISOString();
const targetCount = Number(process.env.KOREA_TREND_TARGET_COUNT || 500);

const outputRepoFile = "data/korea-trending-repositories-500.json";
const outputSignalFile = "data/korea-trend-source-signals-2026-06-18.json";

const trendSources = [
  {
    source: "GeekNews",
    title: "GeekNews latest page",
    url: "https://news.hada.io/",
    observedSignals: ["local-llm", "graph-memory-mcp", "opencode-webui", "openrouter", "coreutils-windows"],
    notes: "Latest front page showed local LLM, Graph-based AI Memory MCP, OpenCode Web UI/GitOps, OpenRouter Fusion, and Microsoft Coreutils for Windows."
  },
  {
    source: "GeekNews",
    title: "Show GN: MemoryWeft graph-based AI Memory MCP",
    url: "https://news.hada.io/topic?id=30557",
    seedRepos: ["rawdev/MemoryWeft"],
    observedSignals: ["mcp", "agent-memory", "graph-rag", "sqlite", "postgresql"]
  },
  {
    source: "GeekNews",
    title: "Show GN: OpenDocuments RAG platform",
    url: "https://news.hada.io/topic?id=27910",
    seedRepos: ["joungminsung/OpenDocuments"],
    observedSignals: ["rag", "knowledge-base", "mcp", "hybrid-search", "lancedb", "ollama"]
  },
  {
    source: "GeekNews",
    title: "LLM-Wiki - LLM managed knowledge base",
    url: "https://news.hada.io/topic?id=28208",
    seedRepos: ["nashsu/llm_wiki", "hjhun/llm-wiki"],
    observedSignals: ["llm-wiki", "agent-memory", "markdown-wiki", "claude-code", "codex"]
  },
  {
    source: "GeekNews Weekly",
    title: "GN#352 LLM Wiki / Korean Law MCP / local LLM server",
    url: "https://news.hada.io/weekly/202614",
    observedSignals: ["llm-wiki", "korean-law-mcp", "claude-code", "local-llm", "lemonade"]
  },
  {
    source: "GeekNews Show",
    title: "Show GN open-source/product feed",
    url: "https://news.hada.io/show",
    observedSignals: ["macos-tooling", "rust", "javascript", "lora", "hangul-library", "web-game"]
  },
  {
    source: "우아한형제들 기술블로그",
    title: "2026 posts on RAG, harness engineering, MCP stdio, GenAI",
    url: "https://techblog.woowahan.com/",
    observedSignals: ["rag", "harness-engineering", "cursor-rules", "skills", "mcp", "genai-platform"]
  },
  {
    source: "컬리 기술블로그",
    title: "AI orchestration, LLM Wiki + RAG, Claude Code operations",
    url: "https://helloworld.kurly.com/blog/ai-orchestration-2/",
    observedSignals: ["ai-orchestration", "task-dag", "branch-hunt", "local-semantic-search", "llm-wiki-rag"]
  },
  {
    source: "컬리 기술블로그",
    title: "Claude Code workflow and collection-script-first pattern",
    url: "https://helloworld.kurly.com/blog/claude-code-redesign-my-day/",
    observedSignals: ["claude-code", "mcp", "collection-script", "llm-wiki", "rag"]
  },
  {
    source: "당근 기술블로그",
    title: "Karrot GenAI platform / LLM router",
    url: "https://medium.com/daangn/karrots-genai-platform-5cf6e813838e",
    observedSignals: ["llm-router", "ai-gateway", "genai-platform"]
  },
  {
    source: "DEVOCEAN",
    title: "Context Engineering / AI agent automation summaries",
    url: "https://devocean.sk.com/blog/techBoardDetail.do?ID=167772&boardType=techBlog",
    observedSignals: ["context-engineering", "agent", "rag", "mcp", "strands-agents"]
  },
  {
    source: "Toss Tech",
    title: "AI delegation, RAG, agent platforms, developer role shift",
    url: "https://toss.tech/article/will-ai-replace-developers",
    observedSignals: ["ai-delegation", "rag", "agent-platform", "developer-workflow"]
  },
  {
    source: "NAVER D2",
    title: "Engineering Day / platform and monitoring topics",
    url: "https://d2.naver.com/",
    observedSignals: ["error-monitoring", "sdk", "platform-engineering", "frontend", "infra"]
  },
  {
    source: "LinkedIn public search snippets",
    title: "MCP/RAG/Agents and open-source AI stack posts",
    url: "https://www.linkedin.com/search/results/content/?keywords=MCP%20RAG%20Agents%20open%20source",
    observedSignals: ["mcp", "rag", "ai-agent", "open-source-ai-stack"],
    notes: "LinkedIn content is often login-gated; only public search snippets were used as weak signal."
  }
];

const githubSearchQueries = [
  { label: "korean-llm", q: "korean llm pushed:>2025-01-01", sort: "updated", weight: 28 },
  { label: "korean-rag", q: "korean rag pushed:>2025-01-01", sort: "updated", weight: 30 },
  { label: "hangul", q: "hangul pushed:>2025-01-01", sort: "updated", weight: 24 },
  { label: "korean-nlp", q: "korean nlp pushed:>2025-01-01", sort: "updated", weight: 24 },
  { label: "korea-ai", q: "korea ai pushed:>2025-01-01", sort: "updated", weight: 22 },
  { label: "korea-mcp", q: "korea mcp pushed:>2025-01-01", sort: "updated", weight: 26 },
  { label: "korean-law-mcp", q: "korean law mcp pushed:>2025-01-01", sort: "updated", weight: 30 },
  { label: "mcp-server", q: "mcp server pushed:>2025-09-01 stars:>20", sort: "updated", weight: 18 },
  { label: "model-context-protocol", q: "model context protocol pushed:>2025-09-01 stars:>20", sort: "updated", weight: 18 },
  { label: "rag-kb", q: "rag knowledge base pushed:>2025-09-01 stars:>20", sort: "updated", weight: 18 },
  { label: "llm-wiki", q: "llm wiki pushed:>2025-09-01", sort: "updated", weight: 22 },
  { label: "ai-agent-framework", q: "ai agent framework pushed:>2025-09-01 stars:>50", sort: "updated", weight: 18 },
  { label: "coding-agent", q: "coding agent pushed:>2025-09-01 stars:>50", sort: "updated", weight: 18 },
  { label: "claude-code", q: "claude code pushed:>2025-09-01", sort: "updated", weight: 20 },
  { label: "codex-cli", q: "codex cli pushed:>2025-09-01", sort: "updated", weight: 18 },
  { label: "local-llm", q: "local llm pushed:>2025-09-01 stars:>50", sort: "updated", weight: 17 },
  { label: "ollama", q: "ollama pushed:>2025-09-01 stars:>50", sort: "updated", weight: 16 },
  { label: "context-engineering", q: "context engineering pushed:>2025-01-01", sort: "updated", weight: 17 },
  { label: "opentelemetry-observability", q: "observability opentelemetry pushed:>2025-01-01 stars:>50", sort: "updated", weight: 13 },
  { label: "kubernetes-ai", q: "kubernetes ai pushed:>2025-01-01 stars:>20", sort: "updated", weight: 13 },
  { label: "react19", q: "react 19 pushed:>2025-01-01 stars:>50", sort: "updated", weight: 10 },
  { label: "nextjs-ai", q: "nextjs ai pushed:>2025-01-01 stars:>20", sort: "updated", weight: 12 },
  { label: "rust-ai", q: "rust ai pushed:>2025-01-01 stars:>20", sort: "updated", weight: 12 },
  { label: "go-ai-agent", q: "go ai agent pushed:>2025-01-01 stars:>20", sort: "updated", weight: 12 },
  { label: "spring-ai-mcp", q: "spring ai mcp pushed:>2025-01-01", sort: "updated", weight: 15 },
  { label: "vector-db-rag", q: "vector database rag pushed:>2025-01-01 stars:>20", sort: "updated", weight: 15 }
];

const koreaOrgNames = [
  "naver",
  "naver-ai",
  "kakao",
  "kakaopay",
  "kakaobrain",
  "line",
  "linecorp",
  "toss",
  "tosslab",
  "daangn",
  "karrotmkt",
  "woowacourse",
  "woowahan",
  "hyperconnect",
  "kurly",
  "coupang",
  "nhn",
  "sktelecom",
  "devocean-sk",
  "upstage-ai",
  "samsung",
  "lgai-exaone"
];

const seedRepos = [
  "rawdev/MemoryWeft",
  "joungminsung/OpenDocuments",
  "nashsu/llm_wiki",
  "hjhun/llm-wiki",
  "Marker-Inc-Korea/AutoRAG",
  "kakao/khaiii",
  "kakaobrain/pororo",
  "naver/arcus",
  "naver/nbase-arc",
  "upstage-ai/dataverse",
  "line/centraldogma",
  "toss/es-toolkit"
];

const excludedReposForClone = [
  {
    name: "Samsung/tizen-docs",
    reason: "Repeated shallow and partial clones failed during the 500-repository corpus run; excluded so the published corpus contains 500 readable local checkouts."
  }
];
const excludedRepoNames = new Set(excludedReposForClone.map((item) => item.name.toLowerCase()));

function ghApi(endpoint, fields = {}, options = {}) {
  const args = ["api", "-X", "GET", "-H", "Accept: application/vnd.github+json", endpoint];
  for (const [key, value] of Object.entries(fields)) {
    args.push("-f", `${key}=${value}`);
  }
  try {
    return JSON.parse(execFileSync("gh", args, {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "pipe"],
      maxBuffer: 32 * 1024 * 1024
    }));
  } catch (error) {
    const stderr = String(error.stderr || "").trim();
    if (!options.quiet) console.error(`gh api failed: ${endpoint} ${stderr}`);
    return null;
  }
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
    stars: raw.stargazers_count ?? raw.stargazerCount ?? 0,
    forks: raw.forks_count ?? raw.forkCount ?? 0,
    openIssues: raw.open_issues_count ?? raw.openIssues?.totalCount ?? 0,
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
    seed: source.kind === "seed"
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
  add("korea-signal", hasAny(text, ["korea", "korean", "hangul", "한국", "한국어", "한글", "naver", "kakao", "toss", "daangn", "karrot", "woowa", "kurly", "upstage"]) || koreaOrgNames.includes(repo.owner.toLowerCase()));
  add("ai-agent", hasAny(text, ["agent", "agents", "autonomous", "workflow", "orchestration"]));
  add("mcp", hasAny(text, ["mcp", "model-context-protocol", "model context protocol"]));
  add("rag", hasAny(text, ["rag", "retrieval", "knowledge base", "knowledge-base", "vector", "embedding", "rerank"]));
  add("llm-wiki", hasAny(text, ["llm wiki", "llm-wiki", "wiki", "obsidian"]));
  add("local-llm", hasAny(text, ["ollama", "local llm", "llama.cpp", "vllm", "gguf", "on-device"]));
  add("context-engineering", hasAny(text, ["context engineering", "prompt", "memory", "knowledge"]));
  add("coding-agent", hasAny(text, ["coding agent", "claude code", "codex", "cursor", "cline", "opencode"]));
  add("frontend", hasAny(text, ["react", "nextjs", "next.js", "vue", "svelte", "frontend"]));
  add("infra", hasAny(text, ["kubernetes", "helm", "terraform", "operator", "observability", "opentelemetry", "prometheus"]));
  add("data-ml", hasAny(text, ["ml", "machine learning", "deep learning", "pytorch", "tensorflow", "dataset", "pipeline"]));
  add("security", hasAny(text, ["security", "auth", "oauth", "vulnerability", "privacy"]));
  return tags;
}

function scoreRepo(repo, queryWeights) {
  const text = `${repo.name} ${repo.description} ${(repo.topics || []).join(" ")}`;
  const labels = new Set(repo.matchedLabels);
  let score = 0;
  score += Math.min(55, Math.log10((repo.stars || 0) + 1) * 18);
  score += Math.min(16, Math.log10((repo.forks || 0) + 1) * 6);
  const age = daysSince(repo.pushedAt);
  if (age <= 7) score += 24;
  else if (age <= 30) score += 20;
  else if (age <= 90) score += 15;
  else if (age <= 180) score += 10;
  else if (age <= 365) score += 6;
  let queryScore = 0;
  for (const label of labels) queryScore += queryWeights.get(label) || 0;
  score += Math.min(45, queryScore);
  if (repo.seed) score += 45;
  if (koreaOrgNames.includes(repo.owner.toLowerCase())) score += 28;
  if (hasAny(text, ["korean", "korea", "hangul", "한국", "한국어", "한글"])) score += 24;
  if (hasAny(text, ["mcp", "model context protocol"])) score += 18;
  if (hasAny(text, ["rag", "knowledge base", "retrieval", "embedding", "vector"])) score += 16;
  if (hasAny(text, ["agent", "claude code", "codex", "cursor", "opencode"])) score += 16;
  if (hasAny(text, ["llm wiki", "llm-wiki", "obsidian"])) score += 16;
  if (hasAny(text, ["ollama", "local llm", "vllm", "llama.cpp"])) score += 12;
  if ((repo.stars || 0) === 0) score -= 35;
  else if ((repo.stars || 0) < 5) score -= 18;
  if (repo.archived) score -= 100;
  if (repo.fork) score -= 35;
  if ((repo.size || 0) > 1_000_000) score -= 10;
  return Math.round(score);
}

const candidates = new Map();
const queryWeights = new Map(githubSearchQueries.map((query) => [query.label, query.weight]));
const queryStats = [];

for (const query of githubSearchQueries) {
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
for (const org of koreaOrgNames) {
  let orgCount = 0;
  for (let page = 1; page <= 2; page += 1) {
    const repos = ghApi(`orgs/${org}/repos?per_page=100&page=${page}&sort=pushed&direction=desc`, {}, { quiet: page === 1 });
    if (!Array.isArray(repos)) break;
    orgCount += repos.length;
    for (const repo of repos) addRepo(candidates, repo, { kind: "korea-org", org });
    if (repos.length < 100) break;
  }
  orgStats.push({ org, returned: orgCount });
}

const seedStats = [];
for (const name of seedRepos) {
  const repo = ghApi(`repos/${name}`);
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
      tags,
      koreaSignal: tags.includes("korea-signal"),
      trendScore: score,
      localPath: `sources/${repo.name.replace("/", "__")}`
    };
  })
  .filter((repo) => !repo.archived)
  .filter((repo) => !repo.fork || repo.seed)
  .filter((repo) => !excludedRepoNames.has(repo.name.toLowerCase()))
  .sort((a, b) => b.trendScore - a.trendScore || b.stars - a.stars || String(b.pushedAt || "").localeCompare(String(a.pushedAt || "")));

const selected = repos.slice(0, targetCount);
const overflow = repos.slice(targetCount, targetCount + 100);

const selection = {
  generatedAt,
  targetCount,
  candidateCount: repos.length,
  selectedCount: selected.length,
  selectionNote: "Korea trending signal combines public GeekNews/tech-blog/LinkedIn-search topic signals, Korean/Korea/Korean-language repository search, Korean organization repositories, and GitHub recency/stars. Sources are weighted as trend hints, not as a statistically complete ranking.",
  queryStats,
  orgStats,
  seedStats,
  excludedReposForClone,
  trendSources,
  repositories: selected,
  overflowRepositories: overflow
};

const signals = {
  generatedAt,
  trendSources,
  githubSearchQueries,
  koreaOrgNames,
  seedRepos,
  excludedReposForClone,
  method: {
    ranking: "trendScore = source/query weights + recency + stars/forks + Korea signal + topic signal - archived/fork/very-large penalties",
    targetCount,
    caveats: [
      "LinkedIn was used only as a weak public search-snippet source because most content is login-gated.",
      "GeekNews and Korean engineering blogs are qualitative trend sources; GitHub metadata supplies repository-level ranking.",
      "The list intentionally mixes Korean-origin repositories and global repositories currently discussed in Korean developer communities."
    ]
  }
};

mkdirSync(path.dirname(outputRepoFile), { recursive: true });
writeFileSync(outputRepoFile, `${JSON.stringify(selection, null, 2)}\n`);
writeFileSync(outputSignalFile, `${JSON.stringify(signals, null, 2)}\n`);

console.error(`wrote ${outputRepoFile}: selected ${selected.length} / candidates ${repos.length}`);
console.error(`wrote ${outputSignalFile}`);
