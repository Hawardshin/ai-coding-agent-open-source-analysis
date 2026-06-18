import { mkdir, readFile, readdir, rm, stat, writeFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const generatedAt = new Date().toISOString();
const reportsDir = path.join(root, "reports");
const outputDataFile = path.join(root, "data", "report-index.json");
const outputDataDir = path.join(root, "data", "report-categories");
const outputReportDir = path.join(root, "reports", "by-topic");
const outputReportsReadme = path.join(root, "reports", "README.md");

const taxonomy = [
  {
    slug: "start-here",
    title: "Start Here",
    description: "High-level maps and entry points for reading the repository.",
    keywords: [],
    pathRules: [
      /^reports\/categories\/README\.md$/,
      /^reports\/00-source-inventory\.md$/,
      /^reports\/clone-structure-analysis-127\.md$/,
      /^reports\/full-source-scan-research-summary/,
      /^reports\/agent-harness\/00-/,
      /^reports\/adjacent-tech\/01-/,
      /^reports\/comparisons\//,
      /^reports\/global-trending\/00-/,
      /^reports\/korea-trending\/00-/,
      /^reports\/llm-wiki\/0[0-2]-/,
      /^reports\/presentations\/0[0-1]-/,
      /^reports\/research\/0[1-3]-/,
      /^reports\/spec-driven\/00-/
    ]
  },
  {
    slug: "category-guides",
    title: "Category Guides",
    description: "Generated category pages that group open-source, research, presentation, and trend artifacts.",
    keywords: [],
    pathRules: [/^reports\/categories\//]
  },
  {
    slug: "full-source-scan",
    title: "Full Source Scan and Code Retrieval",
    description: "How coding agents discover, index, search, and read source code.",
    keywords: ["source scan", "repo map", "symbol graph", "code search", "file discovery"],
    pathRules: [/^reports\/full-source-scan\//, /^reports\/full-source-scan-research-summary/, /^reports\/00-source-inventory\.md$/]
  },
  {
    slug: "coding-agents",
    title: "Coding Agents and IDEs",
    description: "Core coding-agent repositories, terminal agents, IDE agents, and code-review agents.",
    keywords: ["codex", "claude", "aider", "openhands", "cline", "roo", "gemini", "coding agent", "ide", "code review"],
    pathRules: [/^reports\/repositories\//, /^reports\/agent-harness\//]
  },
  {
    slug: "agent-harness",
    title: "Agent Harness, MCP, and Orchestration",
    description: "Agent harness materials, MCP tooling, orchestration, hooks, skills, and workflow infrastructure.",
    keywords: ["harness", "mcp", "orchestration", "skills", "hooks", "tool-calling", "agent workflow"],
    pathRules: [/^reports\/agent-harness\//]
  },
  {
    slug: "spec-driven",
    title: "Spec-Driven and Requirements",
    description: "Spec extraction, requirements, traceability, acceptance criteria, and SDD evidence.",
    keywords: ["spec", "requirements", "traceability", "acceptance", "sdd", "kiro", "openspec"],
    pathRules: [/spec-driven/, /spec-driven-evidence/]
  },
  {
    slug: "llm-wiki",
    title: "LLM Wiki, RAG, and Knowledge Bases",
    description: "LLM wiki, GraphRAG, document knowledge base, ingestion, retrieval, and provenance reports.",
    keywords: ["llm wiki", "wiki", "rag", "graphrag", "knowledge", "document", "retrieval"],
    pathRules: [/^reports\/llm-wiki\//]
  },
  {
    slug: "presentations-conferences",
    title: "Presentations and Conferences",
    description: "Conference, talk, webinar, and presentation-method research.",
    keywords: ["conference", "presentation", "keynote", "summit", "devday", "webinar", "발표"],
    pathRules: [/^reports\/presentations\//]
  },
  {
    slug: "ai-usage-trends",
    title: "AI Usage Trends",
    description: "Recent AI usage trends from big-tech, Amazon/AWS, Korean conferences, and enterprise adoption signals.",
    keywords: ["ai usage", "agentic enterprise", "enterprise adoption"],
    pathRules: [/ai-usage-trends/, /bigtech-korea/, /^reports\/categories\/ai-usage-trends\//]
  },
  {
    slug: "global-trending-open-source",
    title: "Global Trending Open Source",
    description: "Global trending open-source corpus and per-repository reports.",
    keywords: [],
    pathRules: [/^reports\/global-trending\//, /^reports\/categories\/global-ai-open-source\//]
  },
  {
    slug: "korea-trending-open-source",
    title: "Korea Trending Open Source",
    description: "Korean open-source corpus, Korean AI/MCP/RAG projects, and Korean trend reports.",
    keywords: ["한국 개발자 커뮤니티"],
    pathRules: [/^reports\/korea-trending\//, /^reports\/categories\/korean-ai-open-source\//]
  },
  {
    slug: "adjacent-infrastructure",
    title: "Adjacent AI Infrastructure",
    description: "Context engineering, RAG infrastructure, vector databases, local LLM serving, evals, and observability.",
    keywords: ["vllm", "local llm", "vector database", "observability", "eval harness"],
    pathRules: [/^reports\/adjacent-tech/, /^reports\/adjacent-tech-source-inventory/, /^reports\/categories\/ai-infrastructure-serving\//, /^reports\/categories\/data-platforms-vector-databases\//]
  },
  {
    slug: "clone-structure-inventory",
    title: "Clone Structure and Inventory",
    description: "Clone inventories, structural analysis, manifests, source directories, and per-repository structure reports.",
    keywords: ["source dirs"],
    pathRules: [/^reports\/clone-structures\//, /^reports\/clone-structure-analysis-127\.md$/, /^reports\/current-clone-inventory\.md$/]
  },
  {
    slug: "comparisons",
    title: "Comparisons and Similarity Maps",
    description: "Cross-repository comparisons, taxonomy matrices, and similarity clusters.",
    keywords: ["comparison", "compare", "taxonomy", "cluster", "matrix", "similarity", "비교"],
    pathRules: [/^reports\/comparisons\//]
  },
  {
    slug: "research-foundations",
    title: "Research Foundations",
    description: "Evidence catalogs, conflicting theories, source catalogs, and research synthesis.",
    keywords: ["evidence catalog", "research synthesis", "근거자료", "논문"],
    pathRules: [/^reports\/research\//, /evidence-corpus/, /^reports\/categories\/research-evidence\//]
  },
  {
    slug: "source-catalogs-and-inventories",
    title: "Source Catalogs and Inventories",
    description: "Source catalogs, inventory files, clone lists, and evidence ledgers used by the investigations.",
    keywords: ["source catalog", "source inventory", "evidence corpus", "clone inventory"],
    pathRules: [/source-inventory/, /source-catalog/, /current-clone-inventory/, /evidence-corpus/, /clone-inventory/]
  },
  {
    slug: "repository-deep-dives",
    title: "Repository Deep Dives",
    description: "Detailed per-repository reports across core agents, global trending, Korea trending, LLM wiki, and clone structures.",
    keywords: [],
    pathRules: [/\/repositories\//, /^reports\/clone-structures\//]
  }
];

function safeArray(value) {
  return Array.isArray(value) ? value : [];
}

function slugify(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9가-힣]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

function rel(file) {
  return path.relative(root, file).replaceAll(path.sep, "/");
}

function cleanText(value) {
  return String(value || "")
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/[#>*_`[\]()|:-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function tableText(value) {
  return String(value || "")
    .replace(/\s+/g, " ")
    .replaceAll("|", "\\|")
    .trim();
}

function titleFromMarkdown(content, fallback) {
  const heading = content.match(/^#\s+(.+)$/m);
  return heading ? heading[1].trim() : fallback;
}

function excerpt(content, max = 260) {
  return cleanText(content).slice(0, max);
}

async function listMarkdownFiles(dir, acc = []) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    const relative = rel(full);
    if (entry.isDirectory()) {
      if (relative === "reports/by-topic") continue;
      await listMarkdownFiles(full, acc);
    } else if (entry.name.endsWith(".md")) {
      if (relative === "reports/README.md") continue;
      acc.push(full);
    }
  }
  return acc;
}

function inferReportKind(filePath) {
  if (filePath.includes("/repositories/")) return "per-repository-report";
  if (filePath.includes("/clone-structures/")) return "clone-structure-report";
  if (filePath.includes("/categories/")) return "category-guide";
  if (filePath.includes("/presentations/")) return "presentation-report";
  if (filePath.includes("/research/")) return "research-synthesis";
  if (filePath.includes("/comparisons/")) return "comparison-report";
  if (filePath.includes("/adjacent-tech/")) return "infrastructure-report";
  if (filePath.includes("/llm-wiki/")) return "llm-wiki-report";
  if (filePath.includes("/global-trending/")) return "global-trending-report";
  if (filePath.includes("/korea-trending/")) return "korea-trending-report";
  if (filePath.includes("/agent-harness/")) return "agent-harness-report";
  if (filePath.includes("/spec-driven/")) return "spec-driven-report";
  if (filePath.includes("/full-source-scan/")) return "source-scan-report";
  return "overview-report";
}

function inferFolder(filePath) {
  const parts = filePath.split("/");
  if (parts.length <= 2) return "root";
  if (parts[1] === "global-trending" && parts[2] === "repositories") return "global-trending/repositories";
  if (parts[1] === "korea-trending" && parts[2] === "repositories") return "korea-trending/repositories";
  if (parts[1] === "llm-wiki" && parts[2]) return `llm-wiki/${parts[2]}`;
  return parts[1];
}

function priorityScore(report) {
  let score = 0;
  if (!report.path.includes("/repositories/") && !report.path.includes("/clone-structures/")) score += 120;
  if (/\/00-|\/01-|\/02-|README\.md$/.test(report.path)) score += 40;
  if (/summary|synthesis|총괄|요약|index|catalog|guide|comparison/i.test(`${report.title} ${report.path}`)) score += 25;
  if (report.kind.includes("per-repository") || report.kind.includes("clone-structure")) score -= 25;
  score -= report.path.split("/").length;
  return score;
}

function matchesCategory(report, category) {
  const haystack = `${report.path} ${report.title}`.toLowerCase();
  return safeArray(category.pathRules).some((rule) => rule.test(report.path)) ||
    safeArray(category.keywords).some((keyword) => haystack.includes(String(keyword).toLowerCase()));
}

function assignCategories(report) {
  const categories = taxonomy.filter((category) => matchesCategory(report, category)).map((category) => category.slug);
  if (!categories.length) categories.push("start-here");
  return [...new Set(categories)];
}

function linkFrom(baseDir, target, label) {
  const relative = path.relative(path.join(root, baseDir), path.join(root, target)).replaceAll(path.sep, "/");
  return `[${tableText(label)}](${relative})`;
}

function sortReports(reports) {
  return [...reports].sort((a, b) => b.priority - a.priority || a.path.localeCompare(b.path));
}

function renderReportTable(reports, baseDir, limit = Infinity) {
  const rows = sortReports(reports).slice(0, limit).map((report) => {
    const title = linkFrom(baseDir, report.path, report.title);
    return `| ${title} | ${tableText(report.kind)} | ${tableText(report.folder)} | ${report.priority} |`;
  });
  if (!rows.length) return "_No reports indexed._\n";
  return `| Report | Type | Folder | Priority |\n| --- | --- | --- | ---: |\n${rows.join("\n")}\n`;
}

function countsBy(reports, keyFn) {
  return reports.reduce((acc, report) => {
    const key = keyFn(report) || "unknown";
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});
}

function renderCategoryReadme(category, reports) {
  const baseDir = `reports/by-topic/${category.slug}`;
  const byKind = countsBy(reports, (report) => report.kind);
  const byFolder = countsBy(reports, (report) => report.folder);
  return `# ${category.title}

Generated: ${generatedAt}

${category.description}

## Counts

- Reports: ${reports.length}
- Data: ${linkFrom(baseDir, `data/report-categories/${category.slug}.json`, `data/report-categories/${category.slug}.json`)}

## Report Types

${Object.entries(byKind).sort((a, b) => b[1] - a[1]).map(([kind, count]) => `- ${kind}: ${count}`).join("\n") || "- none"}

## Source Folders

${Object.entries(byFolder).sort((a, b) => b[1] - a[1]).slice(0, 20).map(([folder, count]) => `- ${folder}: ${count}`).join("\n") || "- none"}

## Recommended Reading Path

${renderReportTable(reports, baseDir, 30)}

## All Reports

${renderReportTable(reports, baseDir)}
`;
}

function renderByTopicIndex(categorySummaries) {
  const baseDir = "reports/by-topic";
  const rows = categorySummaries
    .sort((a, b) => b.count - a.count || a.title.localeCompare(b.title))
    .map((category) => `| ${linkFrom(baseDir, category.reportPath, category.title)} | ${category.count} | ${tableText(category.description)} | ${linkFrom(baseDir, category.dataPath, "data")} |`)
    .join("\n");
  return `# Reports by Topic

Generated: ${generatedAt}

This folder groups the repository's Markdown reports by investigation line. Original reports remain in their existing locations; these pages are reading indexes.

| Topic | Reports | Description | Data |
| --- | ---: | --- | --- |
${rows}
`;
}

function renderReportsReadme(reportIndex, categorySummaries) {
  const start = reportIndex.categories.find((category) => category.slug === "start-here")?.reports || [];
  const highSignal = sortReports(reportIndex.reports.filter((report) =>
    !report.path.includes("/repositories/") &&
    !report.path.includes("/clone-structures/") &&
    !report.path.includes("/code-level-repositories/")
  )).slice(0, 30);
  const rows = categorySummaries
    .sort((a, b) => b.count - a.count || a.title.localeCompare(b.title))
    .map((category) => `| ${linkFrom("reports", category.reportPath, category.title)} | ${category.count} | ${tableText(category.description)} |`)
    .join("\n");

  return `# Reports Reading Index

Generated: ${generatedAt}

This is the entry point for reading the repository directly from GitHub or a local checkout. Deployment-specific web UI has been removed; use these category pages and JSON indexes instead.

## Scope

- Markdown reports indexed: ${reportIndex.reports.length}
- Topic categories: ${categorySummaries.length}
- Data index: ${linkFrom("reports", "data/report-index.json", "data/report-index.json")}
- Topic data folder: ${linkFrom("reports", "data/report-categories", "data/report-categories/")}

## Start Here

${renderReportTable(start, "reports", 20)}

## High-Signal Overview Reports

${renderReportTable(highSignal, "reports", 30)}

## Topics

| Topic | Reports | Description |
| --- | ---: | --- |
${rows}

## Practical Reading Order

1. Open ${linkFrom("reports", "reports/categories/README.md", "reports/categories/README.md")} for artifact-level categories.
2. Open ${linkFrom("reports", "reports/by-topic/README.md", "reports/by-topic/README.md")} for report-level categories.
3. Use per-topic pages under \`reports/by-topic/\` to drill into specific investigations.
4. Use \`data/report-index.json\` and \`data/report-categories/*.json\` when you need complete machine-readable membership.
`;
}

async function collectReports() {
  const files = await listMarkdownFiles(reportsDir);
  const reports = [];
  for (const file of files) {
    const content = await readFile(file, "utf8");
    const info = await stat(file);
    const filePath = rel(file);
    const report = {
      id: `report:${filePath}`,
      path: filePath,
      title: titleFromMarkdown(content, path.basename(filePath)),
      summary: excerpt(content),
      kind: inferReportKind(filePath),
      folder: inferFolder(filePath),
      updatedAt: info.mtime.toISOString()
    };
    report.categories = assignCategories(report);
    report.priority = priorityScore(report);
    reports.push(report);
  }
  return sortReports(reports);
}

async function main() {
  const reports = await collectReports();
  await rm(outputDataDir, { recursive: true, force: true });
  await rm(outputReportDir, { recursive: true, force: true });
  await mkdir(outputDataDir, { recursive: true });
  await mkdir(outputReportDir, { recursive: true });

  const categorySummaries = [];
  const categories = [];
  for (const category of taxonomy) {
    const categoryReports = sortReports(reports.filter((report) => report.categories.includes(category.slug)));
    const categoryData = {
      generatedAt,
      slug: category.slug,
      title: category.title,
      description: category.description,
      count: categoryReports.length,
      reports: categoryReports
    };
    const dataPath = `data/report-categories/${category.slug}.json`;
    const reportPath = `reports/by-topic/${category.slug}/README.md`;
    await writeFile(path.join(outputDataDir, `${category.slug}.json`), JSON.stringify(categoryData, null, 2));
    await mkdir(path.join(outputReportDir, category.slug), { recursive: true });
    await writeFile(path.join(outputReportDir, category.slug, "README.md"), renderCategoryReadme(category, categoryReports));
    categories.push(categoryData);
    categorySummaries.push({
      slug: category.slug,
      title: category.title,
      description: category.description,
      count: categoryReports.length,
      dataPath,
      reportPath
    });
  }

  const reportIndex = {
    generatedAt,
    description: "Report-level reading index for all Markdown reports in this repository.",
    counts: {
      reports: reports.length,
      byKind: countsBy(reports, (report) => report.kind),
      byFolder: countsBy(reports, (report) => report.folder)
    },
    taxonomy: taxonomy.map(({ slug, title, description, keywords }) => ({ slug, title, description, keywords })),
    categories: categorySummaries.map((category) => ({
      ...category,
      reports: reports.filter((report) => report.categories.includes(category.slug)).map((report) => report.id)
    })),
    reports
  };

  await writeFile(outputDataFile, JSON.stringify(reportIndex, null, 2));
  await writeFile(path.join(outputReportDir, "README.md"), renderByTopicIndex(categorySummaries));
  await writeFile(outputReportsReadme, renderReportsReadme({ ...reportIndex, categories }, categorySummaries));

  console.error(`reports indexed: ${reports.length}`);
  console.error(`report topics: ${categorySummaries.length}`);
}

await main();
