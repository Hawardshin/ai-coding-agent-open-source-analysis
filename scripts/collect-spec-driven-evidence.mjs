import { mkdir, writeFile } from "node:fs/promises";

const OPENALEX = "https://api.openalex.org/works";

const queries = [
  { category: "spec-driven-ai", q: "spec driven development", mode: "title", max: 40 },
  { category: "specification-driven", q: "specification driven development", mode: "title", max: 60 },
  { category: "requirements-engineering", q: "requirements engineering", mode: "title", max: 90 },
  { category: "srs", q: "software requirements specification", mode: "title", max: 90 },
  { category: "traceability", q: "requirements traceability", mode: "title", max: 90 },
  { category: "requirements-llm", q: "large language models requirements engineering", mode: "title", max: 70 },
  { category: "requirements-generation", q: "automated requirements generation", mode: "title", max: 70 },
  { category: "nl-requirements", q: "natural language requirements", mode: "title", max: 70 },
  { category: "bdd-living-docs", q: "behavior driven development", mode: "title", max: 80 },
  { category: "tdd-acceptance", q: "test driven development", mode: "title", max: 90 },
  { category: "acceptance-criteria", q: "acceptance criteria software", mode: "title", max: 40 },
  { category: "formal-specification", q: "formal specification software", mode: "title", max: 80 },
  { category: "program-synthesis", q: "natural language program synthesis", mode: "title", max: 50 },
  { category: "mbse-requirements", q: "model based systems engineering requirements", mode: "title", max: 70 },
  { category: "agent-memory", q: "persistent memory LLM agents", mode: "title", max: 40 },
  { category: "agent-memory", q: "memory LLM agents", mode: "title", max: 60 },
  { category: "context-engineering", q: "context engineering LLM agents", mode: "title", max: 40 },
  { category: "software-agents", q: "AI agents software engineering", mode: "title", max: 70 },
  { category: "software-repair", q: "automated program repair tests", mode: "title", max: 50 },
  { category: "api-contracts", q: "API contract testing", mode: "title", max: 40 },
  { category: "api-contracts", q: "OpenAPI specification", mode: "title", max: 40 }
];

const maxPerQuery = Number(process.env.MAX_PER_QUERY || "90");
const minTotal = Number(process.env.MIN_TOTAL || "500");
const fromDate = process.env.FROM_PUBLICATION_DATE || "2010-01-01";
const politeEmail = process.env.OPENALEX_MAILTO || "codex-research@example.com";

function abstractFromInvertedIndex(index) {
  if (!index) return "";
  const entries = [];
  for (const [word, positions] of Object.entries(index)) {
    for (const position of positions) entries[position] = word;
  }
  return entries.filter(Boolean).join(" ");
}

function normalizeWork(work, sourceQuery, rank) {
  const authors = (work.authorships || []).slice(0, 8).map((a) => ({
    name: a.author?.display_name || null,
    institutions: (a.institutions || []).slice(0, 3).map((i) => i.display_name)
  }));
  const concepts = (work.concepts || []).slice(0, 10).map((c) => ({
    name: c.display_name,
    score: c.score
  }));
  const abstract = abstractFromInvertedIndex(work.abstract_inverted_index);
  return {
    id: work.id,
    doi: work.doi,
    title: work.title || work.display_name,
    publicationYear: work.publication_year,
    publicationDate: work.publication_date,
    type: work.type,
    citedByCount: work.cited_by_count || 0,
    landingPageUrl: work.primary_location?.landing_page_url || null,
    pdfUrl: work.primary_location?.pdf_url || work.open_access?.oa_url || null,
    sourceName: work.primary_location?.source?.display_name || null,
    sourceType: work.primary_location?.source?.type || null,
    isOpenAccess: Boolean(work.open_access?.is_oa),
    authors,
    concepts,
    abstractSample: abstract.slice(0, 900),
    firstSeenQuery: sourceQuery.q,
    firstSeenCategory: sourceQuery.category,
    firstSeenRank: rank
  };
}

function normalizedTitle(title) {
  return String(title || "")
    .toLowerCase()
    .replace(/<[^>]*>/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

async function fetchQueryPage(query, page) {
  const params = new URLSearchParams({
    "per-page": "200",
    page: String(page),
    mailto: politeEmail
  });
  if (query.mode === "title") {
    params.set("filter", `from_publication_date:${fromDate},title.search:${query.q}`);
  } else {
    params.set("search", query.q);
    params.set("filter", `from_publication_date:${fromDate}`);
  }
  const res = await fetch(`${OPENALEX}?${params}`);
  if (!res.ok) {
    throw new Error(`OpenAlex ${res.status} for ${query.q} page ${page}: ${await res.text()}`);
  }
  return res.json();
}

function relevantToCategory(work, category) {
  const haystack = [
    work.title,
    work.abstractSample,
    ...(work.concepts || []).map((concept) => concept.name)
  ].filter(Boolean).join(" ").toLowerCase();

  const tests = {
    "spec-driven-ai": [/spec[- ]driven/, /specification[- ]driven/],
    "specification-driven": [/specification[- ]driven/, /spec[- ]driven/],
    "requirements-engineering": [/requirements? engineering/, /\brequirements?\b/],
    srs: [/software requirements? specification/, /\bsrs\b/, /\brequirements?\b/],
    traceability: [/traceability/, /traceable/],
    "requirements-llm": [/large language model/, /\bllm\b/, /\bgpt\b/, /\brequirements?\b/],
    "requirements-generation": [/requirements?.*(generation|extraction|elicitation)/, /(generation|extraction|elicitation).*requirements?/],
    "nl-requirements": [/natural language.*requirements?/, /requirements?.*natural language/],
    "bdd-living-docs": [/behaviou?r[- ]driven/, /\bbdd\b/, /gherkin/, /cucumber/, /executable specification/, /living documentation/],
    "tdd-acceptance": [/test[- ]driven/, /\btdd\b/],
    "acceptance-criteria": [/acceptance criteria/],
    "formal-specification": [/formal specification/, /formal method/, /temporal logic/, /model checking/],
    "program-synthesis": [/program synthesis/, /natural language.*program/],
    "mbse-requirements": [/model[- ]based systems engineering/, /\bmbse\b/, /systems engineering.*requirements?/],
    "agent-memory": [/memory/, /persistent memory/, /long[- ]term memory/],
    "context-engineering": [/context engineering/, /context management/, /context.*agents?/],
    "software-agents": [/software engineering/, /coding agents?/, /ai agents?/],
    "software-repair": [/program repair/, /software repair/, /test.*repair/],
    "api-contracts": [/api contract/, /contract testing/, /openapi/, /api specification/]
  };

  return (tests[category] || [/.*/]).some((pattern) => pattern.test(haystack));
}

const byKey = new Map();
const queryStats = [];

for (const query of queries) {
  let keptForQuery = 0;
  let page = 1;
  const seenIdsForQuery = new Set();
  const cap = Math.min(query.max || maxPerQuery, maxPerQuery);

  while (keptForQuery < cap) {
    const payload = await fetchQueryPage(query, page);
    const works = payload.results || [];
    if (works.length === 0) break;

    for (let i = 0; i < works.length && keptForQuery < cap; i += 1) {
      const work = works[i];
      const titleKey = normalizedTitle(work.title || work.display_name);
      const key = titleKey.length > 8 ? `title:${titleKey}` : (work.doi || work.id || work.title || "").toLowerCase();
      if (!key) continue;
      if (seenIdsForQuery.has(key)) continue;
      seenIdsForQuery.add(key);

      const rank = (page - 1) * 200 + i + 1;
      const normalized = normalizeWork(work, query, rank);
      if (query.mode !== "title" && !relevantToCategory(normalized, query.category)) continue;

      if (byKey.has(key)) {
        const existing = byKey.get(key);
        existing.matchedQueries.push(query.q);
        existing.matchedCategories = Array.from(new Set([...existing.matchedCategories, query.category]));
      } else {
        normalized.matchedQueries = [query.q];
        normalized.matchedCategories = [query.category];
        byKey.set(key, normalized);
      }
      keptForQuery += 1;
    }
    page += 1;
  }
  queryStats.push({ ...query, kept: keptForQuery });
}

const allWorks = Array.from(byKey.values()).sort((a, b) => {
  const qa = a.firstSeenRank + queries.findIndex((q) => q.category === a.firstSeenCategory) * 1000;
  const qb = b.firstSeenRank + queries.findIndex((q) => q.category === b.firstSeenCategory) * 1000;
  return qa - qb || b.citedByCount - a.citedByCount;
});

const targetCount = Math.max(minTotal, Math.min(allWorks.length, 650));
const buckets = new Map();
for (const work of allWorks) {
  if (!buckets.has(work.firstSeenCategory)) buckets.set(work.firstSeenCategory, []);
  buckets.get(work.firstSeenCategory).push(work);
}

const selected = [];
const selectedIds = new Set();
let madeProgress = true;
while (selected.length < targetCount && madeProgress) {
  madeProgress = false;
  for (const query of queries) {
    const bucket = buckets.get(query.category) || [];
    while (bucket.length > 0) {
      const candidate = bucket.shift();
      if (selectedIds.has(candidate.id)) continue;
      selected.push(candidate);
      selectedIds.add(candidate.id);
      madeProgress = true;
      break;
    }
    if (selected.length >= targetCount) break;
  }
}

for (const work of allWorks) {
  if (selected.length >= targetCount) break;
  if (selectedIds.has(work.id)) continue;
  selected.push(work);
  selectedIds.add(work.id);
}
const topCited = [...selected].sort((a, b) => b.citedByCount - a.citedByCount).slice(0, 60);
const byCategory = selected.reduce((acc, work) => {
  for (const category of work.matchedCategories) acc[category] = (acc[category] || 0) + 1;
  return acc;
}, {});
const byYear = selected.reduce((acc, work) => {
  const year = work.publicationYear || "unknown";
  acc[year] = (acc[year] || 0) + 1;
  return acc;
}, {});

await mkdir("data", { recursive: true });
await mkdir("reports", { recursive: true });

const corpus = {
  collectedAt: new Date().toISOString(),
  source: "OpenAlex Works API",
  fromPublicationDate: fromDate,
  queryStats,
  totalUniqueCollected: allWorks.length,
  selectedCount: selected.length,
  selectionNote:
    "Selected by OpenAlex search relevance order across SDD, requirements engineering, traceability, executable specs, agent memory, context engineering, MBSE, and software-agent queries. This is a reproducible evidence corpus, not a claim that each paper was manually read end-to-end.",
  works: selected
};

await writeFile("data/spec-driven-evidence-corpus-500.json", JSON.stringify(corpus, null, 2) + "\n");

const lines = [];
lines.push("# Spec-Driven Development Evidence Corpus 500+");
lines.push("");
lines.push(`Collected at: ${corpus.collectedAt}`);
lines.push("");
lines.push("This file summarizes the reproducible OpenAlex corpus used by the web research browser and follow-up spec-driven development analysis. It intentionally separates broad evidence collection from manual synthesis.");
lines.push("");
lines.push(`- Source: ${corpus.source}`);
lines.push(`- Publication date filter: ${fromDate} and later`);
lines.push(`- Unique works collected before final cut: ${allWorks.length}`);
lines.push(`- Works retained in corpus: ${selected.length}`);
lines.push("");
lines.push("## Query Stats");
lines.push("");
lines.push("| Category | Query | Retained |");
lines.push("|---|---|---:|");
for (const stat of queryStats) lines.push(`| ${stat.category} | ${stat.q.replaceAll("|", "\\|")} | ${stat.kept} |`);
lines.push("");
lines.push("## Category Coverage");
lines.push("");
lines.push("| Category | Matched works |");
lines.push("|---|---:|");
for (const [category, count] of Object.entries(byCategory).sort((a, b) => b[1] - a[1])) lines.push(`| ${category} | ${count} |`);
lines.push("");
lines.push("## Publication Year Coverage");
lines.push("");
lines.push("| Year | Works |");
lines.push("|---|---:|");
for (const [year, count] of Object.entries(byYear).sort((a, b) => String(b[0]).localeCompare(String(a[0])))) lines.push(`| ${year} | ${count} |`);
lines.push("");
lines.push("## Top Cited Works In The Corpus");
lines.push("");
lines.push("| Cites | Year | Title | Venue/Source | Link |");
lines.push("|---:|---:|---|---|---|");
for (const work of topCited) {
  const link = work.doi || work.landingPageUrl || work.pdfUrl || work.id;
  lines.push(`| ${work.citedByCount} | ${work.publicationYear || ""} | ${String(work.title || "").replaceAll("|", "\\|")} | ${String(work.sourceName || "").replaceAll("|", "\\|")} | ${link ? `[link](${link})` : ""} |`);
}
lines.push("");
lines.push("## Data File");
lines.push("");
lines.push("Full metadata, abstracts samples, authors, URLs, matched queries, and concepts are stored in `data/spec-driven-evidence-corpus-500.json`.");
lines.push("");
lines.push("## Method Limitations");
lines.push("");
lines.push("- OpenAlex search ranking is broad. The corpus includes adjacent fields such as requirements engineering, BDD/TDD, program synthesis, MBSE, API contracts, traceability, and agent memory because SDD reuses these older research lines.");
lines.push("- The 500+ count is an evidence inventory, not an assertion that every work directly advocates AI-era SDD.");
lines.push("- For final decisions, use the curated/key-source section in the comparison report and inspect the JSON metadata for each candidate.");

await writeFile("reports/spec-driven-evidence-corpus-500.md", `${lines.join("\n")}\n`);

console.error(`wrote ${selected.length} works from ${allWorks.length} unique works`);
