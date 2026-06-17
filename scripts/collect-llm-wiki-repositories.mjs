import { execFileSync } from "node:child_process";
import { mkdirSync, writeFileSync } from "node:fs";

const queries = [
  { label: "direct-llm-wiki-stars", q: "llm wiki in:name,description,readme", sort: "stars" },
  { label: "direct-ai-wiki-stars", q: "ai wiki llm in:name,description,readme", sort: "stars" },
  { label: "wiki-rag-stars", q: "wiki rag in:name,description,readme", sort: "stars" },
  { label: "repo-wiki-stars", q: "repo wiki llm in:name,description,readme", sort: "stars" },
  { label: "knowledge-base-llm-stars", q: "knowledge base llm in:name,description,readme", sort: "stars" },
  { label: "rag-knowledge-base-stars", q: "rag knowledge base in:name,description,readme", sort: "stars" },
  { label: "document-chat-rag-stars", q: "document chat rag in:name,description,readme", sort: "stars" },
  { label: "chat-with-docs-stars", q: "chat with documents llm in:name,description,readme", sort: "stars" },
  { label: "chat-with-pdf-stars", q: "chat pdf langchain in:name,description,readme", sort: "stars" },
  { label: "notebooklm-stars", q: "notebooklm open source in:name,description,readme", sort: "stars" },
  { label: "personal-kb-stars", q: "personal knowledge base llm in:name,description,readme", sort: "stars" },
  { label: "knowledge-graph-rag-stars", q: "knowledge graph rag llm in:name,description,readme", sort: "stars" },
  { label: "graphrag-stars", q: "graphrag in:name,description,readme", sort: "stars" },
  { label: "enterprise-kb-stars", q: "enterprise knowledge base ai in:name,description,readme", sort: "stars" },
  { label: "mcp-knowledge-stars", q: "mcp knowledge base in:name,description,readme", sort: "stars" },
  { label: "llm-wiki-recent", q: "llm wiki in:name,description,readme pushed:>2025-09-01", sort: "updated" },
  { label: "ai-knowledge-recent", q: "ai knowledge base llm in:name,description,readme pushed:>2025-09-01", sort: "updated" },
  { label: "rag-recent", q: "rag knowledge base in:name,description,readme pushed:>2025-09-01", sort: "updated" },
  { label: "notebooklm-recent", q: "notebooklm in:name,description,readme pushed:>2025-09-01", sort: "updated" },
  { label: "korean-rag", q: "korean rag llm in:name,description,readme", sort: "stars" },
  { label: "hangul-rag", q: "한국어 RAG LLM in:name,description,readme", sort: "stars" },
  { label: "korea-knowledge", q: "korea knowledge base llm in:name,description,readme", sort: "stars" },
  { label: "korean-recent", q: "korean rag llm in:name,description,readme pushed:>2025-01-01", sort: "updated" }
];

const targetCount = Number(process.env.LLM_WIKI_TARGET_COUNT || "100");
const perPage = Number(process.env.GITHUB_PER_PAGE || "100");

function ghApiSearch(query) {
  const args = [
    "api",
    "-X",
    "GET",
    "search/repositories",
    "-f",
    `q=${query.q}`,
    "-f",
    `sort=${query.sort}`,
    "-f",
    "order=desc",
    "-f",
    `per_page=${perPage}`
  ];
  const raw = execFileSync("gh", args, { encoding: "utf8", maxBuffer: 40 * 1024 * 1024 });
  return JSON.parse(raw).items || [];
}

function daysSince(dateString) {
  const then = new Date(dateString).getTime();
  if (!Number.isFinite(then)) return 9999;
  return Math.max(0, (Date.now() - then) / 86400000);
}

function lowerText(repo) {
  return [
    repo.full_name,
    repo.name,
    repo.description,
    repo.language,
    ...(repo.topics || [])
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
}

function classify(repo, matchedLabels) {
  const text = lowerText(repo);
  const tags = [];
  if (/llm.?wiki|wiki.?llm|wiki rag|wikichat|repo.?wiki/.test(text)) tags.push("direct-llm-wiki");
  if (/rag|retrieval|retrieval augmented/.test(text)) tags.push("rag");
  if (/knowledge base|knowledge-base|knowledge graph|knowledge-graph|second brain|personal knowledge|kb/.test(text)) tags.push("knowledge-base");
  if (/document|docs|pdf|notebook|notebooklm|chat with/.test(text)) tags.push("document-chat");
  if (/mcp|agent|assistant/.test(text)) tags.push("agent-knowledge");
  if (/korean|korea|한국|hangul|koalpaca|naver|upstage|skt|etri/.test(text) || matchedLabels.some((label) => label.includes("korean") || label.includes("hangul") || label.includes("korea"))) tags.push("korea-signal");
  if (repo.stargazers_count >= 10000) tags.push("star-heavy");
  if (daysSince(repo.pushed_at) < 120) tags.push("recently-active");
  return [...new Set(tags)];
}

function relevance(repo, matchedLabels) {
  const text = lowerText(repo);
  let score = Math.log10((repo.stargazers_count || 0) + 1) * 18;
  score += Math.log10((repo.forks_count || 0) + 1) * 6;
  const age = daysSince(repo.pushed_at);
  if (age < 14) score += 25;
  else if (age < 60) score += 18;
  else if (age < 180) score += 10;
  if (/llm.?wiki|wiki.?llm|wiki rag|wikichat|repo.?wiki/.test(text)) score += 42;
  if (/knowledge base|knowledge-base|knowledge graph|knowledge-graph|second brain|personal knowledge/.test(text)) score += 28;
  if (/rag|retrieval augmented|retrieval/.test(text)) score += 24;
  if (/document|docs|pdf|notebooklm|notebook|chat with/.test(text)) score += 18;
  if (/mcp|agent|assistant/.test(text)) score += 8;
  if (/korean|korea|한국|hangul|koalpaca|naver|upstage|skt|etri/.test(text) || matchedLabels.some((label) => label.includes("korean") || label.includes("hangul") || label.includes("korea"))) score += 18;
  score += Math.min(18, matchedLabels.length * 3);
  if (repo.archived || repo.disabled || repo.fork) score -= 50;
  return Math.round(score * 100) / 100;
}

const byName = new Map();
const queryStats = [];

for (const query of queries) {
  let items = [];
  try {
    items = ghApiSearch(query);
  } catch (error) {
    queryStats.push({ ...query, error: String(error.message || error), count: 0 });
    continue;
  }
  queryStats.push({ ...query, count: items.length });
  for (const repo of items) {
    if (repo.archived || repo.disabled || repo.fork) continue;
    const key = repo.full_name.toLowerCase();
    const existing = byName.get(key) || {
      name: repo.full_name,
      url: repo.html_url,
      description: repo.description || "",
      language: repo.language || null,
      stars: repo.stargazers_count || 0,
      forks: repo.forks_count || 0,
      openIssues: repo.open_issues_count || 0,
      pushedAt: repo.pushed_at,
      updatedAt: repo.updated_at,
      createdAt: repo.created_at,
      topics: repo.topics || [],
      license: repo.license?.spdx_id || repo.license?.name || null,
      matchedQueries: [],
      matchedLabels: []
    };
    existing.matchedQueries.push(query.q);
    existing.matchedLabels.push(query.label);
    byName.set(key, existing);
  }
}

const selected = [...byName.values()]
  .map((repo) => {
    repo.matchedQueries = [...new Set(repo.matchedQueries)];
    repo.matchedLabels = [...new Set(repo.matchedLabels)];
    repo.tags = classify(repo, repo.matchedLabels);
    repo.score = relevance(repo, repo.matchedLabels);
    repo.localPath = `sources/${repo.name.replace("/", "__")}`;
    return repo;
  })
  .filter((repo) => repo.tags.some((tag) => ["direct-llm-wiki", "rag", "knowledge-base", "document-chat", "korea-signal"].includes(tag)))
  .sort((a, b) => b.score - a.score || b.stars - a.stars || a.name.localeCompare(b.name))
  .slice(0, targetCount);

mkdirSync("data", { recursive: true });
writeFileSync(
  "data/llm-wiki-repositories.json",
  JSON.stringify(
    {
      collectedAt: new Date().toISOString(),
      count: selected.length,
      candidateCount: byName.size,
      queryStats,
      selectionNote:
        "Selected from GitHub search queries covering LLM wiki, AI wiki, RAG knowledge bases, document chat, NotebookLM-like tools, knowledge graphs, MCP knowledge hubs, and Korean/Korea RAG signals. Score combines direct LLM-wiki relevance, knowledge-base/RAG/doc-chat terms, stars, forks, recent pushes, query overlap, and Korea signals.",
      repositories: selected
    },
    null,
    2
  ) + "\n"
);

console.error(`selected ${selected.length} repositories from ${byName.size} candidates`);
