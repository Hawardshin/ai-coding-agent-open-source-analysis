import { mkdir, readdir, readFile, stat, writeFile } from "node:fs/promises";
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";

const root = process.cwd();
const webDir = path.join(root, "web");
const assetsDir = path.join(webDir, "assets");

async function listFiles(dir, predicate, acc = []) {
  if (!existsSync(dir)) return acc;
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await listFiles(full, predicate, acc);
    } else if (predicate(full)) {
      acc.push(full);
    }
  }
  return acc;
}

function rel(file) {
  return path.relative(root, file).replaceAll(path.sep, "/");
}

function titleFromMarkdown(markdown, fallback) {
  const heading = markdown.match(/^#\s+(.+)$/m);
  return heading ? heading[1].trim() : fallback;
}

function excerpt(text, max = 360) {
  return String(text || "")
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/[#>*_`[\]()|:-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, max);
}

function categoryFromPath(filePath) {
  if (filePath === "README.md") return "overview";
  if (filePath.includes("/repositories/")) return "repository-analysis";
  if (filePath.includes("/comparisons/")) return "comparison";
  if (filePath.includes("/research/")) return "research";
  if (filePath.includes("/adjacent-tech/")) return "adjacent-tech";
  if (filePath.includes("spec-driven")) return "spec-driven";
  if (filePath.includes("full-source-scan")) return "source-scan";
  return "report";
}

function safeArray(value) {
  return Array.isArray(value) ? value : [];
}

async function addMarkdownDocs(docs) {
  const markdownFiles = [
    path.join(root, "README.md"),
    ...(await listFiles(path.join(root, "reports"), (file) => file.endsWith(".md")))
  ];

  for (const file of markdownFiles.sort()) {
    const content = await readFile(file, "utf8");
    const filePath = rel(file);
    const info = await stat(file);
    docs.push({
      id: `doc:${filePath}`,
      type: "report",
      category: categoryFromPath(filePath),
      title: titleFromMarkdown(content, path.basename(filePath)),
      path: filePath,
      updatedAt: info.mtime.toISOString(),
      summary: excerpt(content),
      content
    });
  }
}

async function addEvidenceDocs(docs) {
  const corpusPath = path.join(root, "data/spec-driven-evidence-corpus-500.json");
  if (!existsSync(corpusPath)) return;
  const corpus = JSON.parse(await readFile(corpusPath, "utf8"));
  for (const work of safeArray(corpus.works)) {
    const authors = safeArray(work.authors).map((author) => author.name).filter(Boolean);
    const concepts = safeArray(work.concepts).map((concept) => concept.name).filter(Boolean);
    const categories = safeArray(work.matchedCategories);
    const content = [
      work.title,
      work.abstractSample,
      work.sourceName,
      authors.join(", "),
      concepts.join(", "),
      categories.join(", "),
      safeArray(work.matchedQueries).join(" ")
    ].filter(Boolean).join("\n\n");

    docs.push({
      id: `paper:${work.id || work.doi || work.title}`,
      type: "paper",
      category: categories[0] || "paper",
      title: work.title || "Untitled work",
      path: "data/spec-driven-evidence-corpus-500.json",
      year: work.publicationYear || null,
      sourceName: work.sourceName || null,
      citedByCount: work.citedByCount || 0,
      url: work.doi || work.landingPageUrl || work.pdfUrl || work.id || null,
      authors,
      concepts,
      categories,
      summary: excerpt(work.abstractSample || content),
      content
    });
  }
}

async function addSpecRepoDocs(docs) {
  const repoPath = path.join(root, "data/spec-driven-repositories.json");
  if (!existsSync(repoPath)) return;
  const data = JSON.parse(await readFile(repoPath, "utf8"));
  for (const repo of safeArray(data.repositories)) {
    const github = repo.github || {};
    const topics = safeArray(github.repositoryTopics).map((topic) => topic.name || topic.topic?.name).filter(Boolean);
    const content = [
      repo.name,
      github.description,
      topics.join(", "),
      repo.localCommit,
      repo.localPath
    ].filter(Boolean).join("\n");

    docs.push({
      id: `repo:${repo.name}`,
      type: "repository",
      category: "spec-driven-open-source",
      title: repo.name,
      path: repo.localPath,
      url: repo.url || github.url || null,
      stars: github.stargazerCount || 0,
      forks: github.forkCount || 0,
      language: github.primaryLanguage?.name || null,
      license: github.licenseInfo?.spdxId || github.licenseInfo?.name || null,
      updatedAt: github.updatedAt || null,
      summary: github.description || "Spec-driven development repository",
      content
    });
  }
}

async function addLlmWikiRepoDocs(docs) {
  const repoPath = path.join(root, "data/llm-wiki-repositories.json");
  if (!existsSync(repoPath)) return;
  const data = JSON.parse(await readFile(repoPath, "utf8"));
  for (const repo of safeArray(data.repositories)) {
    const topics = safeArray(repo.topics);
    const tags = safeArray(repo.tags);
    const content = [
      repo.name,
      repo.description,
      tags.join(", "),
      topics.join(", "),
      safeArray(repo.matchedLabels).join(", "),
      safeArray(repo.matchedQueries).join("\n"),
      repo.localPath
    ].filter(Boolean).join("\n");

    docs.push({
      id: `repo:llm-wiki:${repo.name}`,
      type: "repository",
      category: "llm-wiki-open-source",
      title: repo.name,
      path: repo.localPath,
      url: repo.url || null,
      stars: repo.stars || 0,
      forks: repo.forks || 0,
      language: repo.language || null,
      license: repo.license || null,
      updatedAt: repo.pushedAt || repo.updatedAt || null,
      summary: repo.description || tags.join(", ") || "LLM wiki / AI knowledge-base repository",
      content
    });
  }
}

async function addKoreaTrendingRepoDocs(docs) {
  const analysisPath = path.join(root, "data/korea-trending-analysis-500.json");
  const repoPath = path.join(root, "data/korea-trending-repositories-500.json");
  if (!existsSync(repoPath)) return;
  const repoData = JSON.parse(await readFile(repoPath, "utf8"));
  const analysisData = existsSync(analysisPath) ? JSON.parse(await readFile(analysisPath, "utf8")) : { analyses: [] };
  const analysisByName = new Map(safeArray(analysisData.analyses).map((analysis) => [analysis.name, analysis]));

  for (const repo of safeArray(repoData.repositories)) {
    const analysis = analysisByName.get(repo.name) || {};
    const signals = safeArray(analysis.detectedSignals).filter((signal) => signal.present).map((signal) => signal.label);
    const categories = safeArray(analysis.categories);
    const stacks = safeArray(analysis.stacks);
    const content = [
      repo.name,
      repo.description,
      categories.join(", "),
      stacks.join(", "),
      signals.join(", "),
      safeArray(repo.tags).join(", "),
      safeArray(repo.matchedLabels).join(", "),
      repo.localPath,
      analysis.readme?.excerpt
    ].filter(Boolean).join("\n");

    docs.push({
      id: `repo:korea-trending:${repo.name}`,
      type: "repository",
      category: "korea-trending-open-source",
      title: repo.name,
      path: analysis.reportPath || repo.localPath,
      url: repo.url || null,
      stars: repo.stars || 0,
      forks: repo.forks || 0,
      language: repo.language || null,
      license: repo.license || null,
      updatedAt: repo.pushedAt || repo.updatedAt || null,
      summary: repo.description || categories.join(", ") || "Korea-trending open source repository",
      content
    });
  }
}

async function addGlobalTrendingRepoDocs(docs) {
  const analysisPath = path.join(root, "data/global-trending-analysis-500.json");
  const repoPath = path.join(root, "data/global-trending-repositories-500.json");
  if (!existsSync(repoPath)) return;
  const repoData = JSON.parse(await readFile(repoPath, "utf8"));
  const analysisData = existsSync(analysisPath) ? JSON.parse(await readFile(analysisPath, "utf8")) : { analyses: [] };
  const analysisByName = new Map(safeArray(analysisData.analyses).map((analysis) => [analysis.name, analysis]));

  for (const repo of safeArray(repoData.repositories)) {
    const analysis = analysisByName.get(repo.name) || {};
    const signals = safeArray(analysis.detectedSignals).filter((signal) => signal.present).map((signal) => signal.label);
    const categories = safeArray(analysis.categories);
    const stacks = safeArray(analysis.stacks);
    const content = [
      repo.name,
      repo.description,
      categories.join(", "),
      stacks.join(", "),
      signals.join(", "),
      safeArray(repo.tags).join(", "),
      safeArray(repo.matchedLabels).join(", "),
      repo.localPath,
      analysis.readme?.excerpt
    ].filter(Boolean).join("\n");

    docs.push({
      id: `repo:global-trending:${repo.name}`,
      type: "repository",
      category: "global-trending-open-source",
      title: repo.name,
      path: analysis.reportPath || repo.localPath,
      url: repo.url || null,
      stars: repo.stars || 0,
      forks: repo.forks || 0,
      language: repo.language || null,
      license: repo.license || null,
      updatedAt: repo.pushedAt || repo.updatedAt || null,
      summary: repo.description || categories.join(", ") || "Global-trending open source repository",
      content
    });
  }
}

async function addDataFileDocs(docs) {
  const dataFiles = await listFiles(path.join(root, "data"), (file) => file.endsWith(".json"));
  for (const file of dataFiles.sort()) {
    const filePath = rel(file);
    const info = await stat(file);
    let summary = "";
    let title = filePath;
    try {
      const raw = await readFile(file, "utf8");
      const parsed = JSON.parse(raw);
      const count = Array.isArray(parsed) ? parsed.length : parsed.count || parsed.selectedCount || parsed.repositories?.length || parsed.works?.length;
      title = `${filePath}${count ? ` (${count})` : ""}`;
      summary = excerpt(JSON.stringify(parsed).slice(0, 3000));
    } catch {
      summary = "JSON metadata file";
    }
    docs.push({
      id: `data:${filePath}`,
      type: "data",
      category: "data",
      title,
      path: filePath,
      updatedAt: info.mtime.toISOString(),
      summary,
      content: summary
    });
  }
}

const docs = [];
await addMarkdownDocs(docs);
await addEvidenceDocs(docs);
await addSpecRepoDocs(docs);
await addLlmWikiRepoDocs(docs);
await addKoreaTrendingRepoDocs(docs);
await addGlobalTrendingRepoDocs(docs);
await addDataFileDocs(docs);

docs.sort((a, b) => {
  const typeOrder = { report: 0, repository: 1, paper: 2, data: 3 };
  return (typeOrder[a.type] ?? 9) - (typeOrder[b.type] ?? 9) || a.title.localeCompare(b.title);
});

const stats = {
  generatedAt: new Date().toISOString(),
  totalDocuments: docs.length,
  byType: docs.reduce((acc, doc) => {
    acc[doc.type] = (acc[doc.type] || 0) + 1;
    return acc;
  }, {}),
  byCategory: docs.reduce((acc, doc) => {
    acc[doc.category] = (acc[doc.category] || 0) + 1;
    return acc;
  }, {})
};

function awaitReadFile(file) {
  return readFileSync(file, "utf8");
}

function topReposBy(predicate, limit = 6) {
  const analysisFiles = [
    path.join(root, "data/clone-structure-analysis-127.json"),
    path.join(root, "data/llm-wiki-structure-analysis-100.json")
  ];
  const analyses = [];
  for (const cloneAnalysisPath of analysisFiles) {
    if (!existsSync(cloneAnalysisPath)) continue;
    const cloneData = JSON.parse(awaitReadFile(cloneAnalysisPath));
    analyses.push(...safeArray(cloneData.analyses));
  }
  return analyses
    .filter(predicate)
    .sort((a, b) => {
      const scoreA = (a.specArtifacts?.length || 0) * 2 + (a.agentInstructionFiles?.length || 0) + (a.fileCount > 2000 ? 30 : 0);
      const scoreB = (b.specArtifacts?.length || 0) * 2 + (b.agentInstructionFiles?.length || 0) + (b.fileCount > 2000 ? 30 : 0);
      return scoreB - scoreA || a.name.localeCompare(b.name);
    })
    .slice(0, limit)
    .map((item) => item.name);
}

function topLlmWikiRepos(limit = 6) {
  const repoPath = path.join(root, "data/llm-wiki-repositories.json");
  if (!existsSync(repoPath)) return [];
  const data = JSON.parse(awaitReadFile(repoPath));
  return safeArray(data.repositories)
    .sort((a, b) => {
      const directA = safeArray(a.tags).includes("direct-llm-wiki") ? 1000 : 0;
      const directB = safeArray(b.tags).includes("direct-llm-wiki") ? 1000 : 0;
      return directB + (b.score || 0) - (directA + (a.score || 0)) || (b.stars || 0) - (a.stars || 0);
    })
    .slice(0, limit)
    .map((repo) => repo.name);
}

function topKoreaTrendingRepos(limit = 8) {
  const analysisPath = path.join(root, "data/korea-trending-analysis-500.json");
  if (!existsSync(analysisPath)) return [];
  const data = JSON.parse(awaitReadFile(analysisPath));
  return safeArray(data.analyses)
    .sort((a, b) => (b.priorityScore || 0) - (a.priorityScore || 0) || (b.stars || 0) - (a.stars || 0))
    .slice(0, limit)
    .map((repo) => repo.name);
}

function topGlobalTrendingRepos(limit = 8) {
  const analysisPath = path.join(root, "data/global-trending-analysis-500.json");
  if (!existsSync(analysisPath)) return [];
  const data = JSON.parse(awaitReadFile(analysisPath));
  return safeArray(data.analyses)
    .sort((a, b) => (b.priorityScore || 0) - (a.priorityScore || 0) || (b.stars || 0) - (a.stars || 0))
    .slice(0, limit)
    .map((repo) => repo.name);
}

const trends = [
  {
    title: "Global-trending OSS",
    summary: "GitHub Search, seed repositories, OSSInsight/Octoverse/HN/report signals 기반 500개 글로벌 오픈소스",
    query: "global trending open source ai agents mcp rag local llm devtools security observability database",
    category: "global-trending-open-source",
    repos: topGlobalTrendingRepos()
  },
  {
    title: "Korea-trending OSS",
    summary: "GeekNews, 국내 기술블로그, LinkedIn 공개 검색 신호 기반 500개 오픈소스",
    query: "korea korean geeknews mcp rag llm wiki local llm toss naver kakao line",
    category: "korea-trending-open-source",
    repos: topKoreaTrendingRepos()
  },
  {
    title: "Spec-driven / SDD",
    summary: "requirements, design, tasks, Kiro, Spec Kit, OpenSpec 계열",
    query: "spec requirements design tasks kiro openspec",
    category: "all",
    repos: topReposBy((item) => item.groups?.includes("spec-driven-20"))
  },
  {
    title: "Agent coding harnesses",
    summary: "Codex, Claude/Cline/Roo, OpenHands, Goose, Gemini CLI류 실행 하네스",
    query: "agent harness codex cli tools sandbox",
    category: "all",
    repos: topReposBy((item) => item.groups?.includes("core-agent-30"))
  },
  {
    title: "Code search / repo map",
    summary: "source indexing, symbol graph, ripgrep, vector/BM25 search",
    query: "code search repo map index symbol graph",
    category: "all",
    repos: topReposBy((item) => /sourcebot|codanna|mcp-code-search|pgr|aider|continue|roo|context7/i.test(item.name))
  },
  {
    title: "Context and memory",
    summary: "long-running agent memory, steering, context persistence, session resume",
    query: "memory context steering persistent session resume",
    category: "agent-memory",
    repos: topReposBy((item) => /mem0|zep|agentmemory|gsd|cc-sdd|context|kiro/i.test(item.name))
  },
  {
    title: "RAG / local LLM stack",
    summary: "RAG frameworks, vector DBs, local inference, vLLM/TGI/llama.cpp",
    query: "rag vector local llm inference vllm llama",
    category: "all",
    repos: topReposBy((item) => item.groups?.includes("adjacent-tech-50"))
  },
  {
    title: "LLM wiki / AI knowledge base",
    summary: "self-maintaining wiki, document knowledge base, GraphRAG, NotebookLM-like tools",
    query: "llm wiki knowledge base rag notebooklm graph rag korean",
    category: "llm-wiki-open-source",
    repos: topLlmWikiRepos()
  },
  {
    title: "Evaluation / observability",
    summary: "prompt eval, agent eval, tracing, observability, quality gates",
    query: "evaluation observability tracing quality gates",
    category: "all",
    repos: topReposBy((item) => /eval|phoenix|langfuse|promptfoo|deepeval|ragas|trulens|agenta/i.test(item.name))
  }
];

await mkdir(assetsDir, { recursive: true });
await writeFile(path.join(assetsDir, "search-index.json"), JSON.stringify({ stats, docs }, null, 2));
await writeFile(path.join(assetsDir, "stats.json"), JSON.stringify(stats, null, 2));
await writeFile(path.join(assetsDir, "trends.json"), JSON.stringify(trends, null, 2));

console.error(`web index: ${docs.length} documents`);
