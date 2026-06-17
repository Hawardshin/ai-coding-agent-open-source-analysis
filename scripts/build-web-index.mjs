import { mkdir, readdir, readFile, stat, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
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

await mkdir(assetsDir, { recursive: true });
await writeFile(path.join(assetsDir, "search-index.json"), JSON.stringify({ stats, docs }, null, 2));
await writeFile(path.join(assetsDir, "stats.json"), JSON.stringify(stats, null, 2));

console.error(`web index: ${docs.length} documents`);
