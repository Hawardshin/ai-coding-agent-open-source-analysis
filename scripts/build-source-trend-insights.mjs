import { existsSync } from "node:fs";
import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const generatedAt = new Date().toISOString();
const sourceDataFile = path.join(root, "data", "source-deep-scan.json");
const globalTrendFile = path.join(root, "data", "global-trending-analysis-500.json");
const koreaTrendFile = path.join(root, "data", "korea-trending-analysis-500.json");
const outputDataFile = path.join(root, "data", "source-trend-insights.json");
const outputReportDir = path.join(root, "reports", "source-insights");
const outputByCategoryDir = path.join(outputReportDir, "by-category");
const outputCategoryCsv = path.join(root, "data", "report-tables", "source-category-insights.csv");
const outputRepoCsv = path.join(root, "data", "report-tables", "source-repo-feature-comparison.csv");

const categories = [
  { slug: "coding-agent-ide", title: "Coding Agent and IDE", korean: "코딩 에이전트/IDE", lens: "CLI/IDE 실행면, 코드 수정 루프, 샌드박스, 에이전트 지시문" },
  { slug: "agent-harness-mcp", title: "Agent Harness and MCP", korean: "에이전트 하네스/MCP", lens: "MCP, tool registry, workflow/orchestration, hooks/skills" },
  { slug: "llm-wiki-rag", title: "LLM Wiki, RAG, and Knowledge", korean: "LLM 위키/RAG/지식베이스", lens: "ingestion, chunking, embedding, retrieval, memory, vector store" },
  { slug: "spec-driven", title: "Spec-Driven and Requirements", korean: "스펙 드리븐/요구사항", lens: "requirements, ADR, design docs, spec artifacts, acceptance/test trace" },
  { slug: "eval-observability", title: "Evals, Observability, and Quality", korean: "평가/관측/품질", lens: "eval suites, benchmark harness, tracing, observability, quality gates" },
  { slug: "ai-infrastructure-serving", title: "AI Infrastructure and Serving", korean: "AI 인프라/서빙", lens: "model serving, API server, deployment, Docker/Kubernetes, runtime adapters" },
  { slug: "data-vector-platform", title: "Data and Vector Platforms", korean: "데이터/벡터 플랫폼", lens: "storage, index, embedding/vector path, query engine, persistence" },
  { slug: "security-governance", title: "Security, Governance, and Safety", korean: "보안/거버넌스/안전", lens: "sandbox, permission, policy, auth, guardrail, secret handling" },
  { slug: "developer-productivity", title: "Developer Productivity and DevTools", korean: "개발 생산성/DevTools", lens: "CLI/devtool entrypoints, SDK shape, CI/build scripts, automation" },
  { slug: "general-ai-open-source", title: "General AI Open Source", korean: "일반 AI 오픈소스", lens: "main architecture, dependency stack, tests, deployment, docs" }
];

const categoryBySlug = new Map(categories.map((category) => [category.slug, category]));

const externalTrendSources = [
  {
    label: "OSSInsight Trending AI",
    url: "https://ossinsight.io/trending/ai",
    signal: "AI agents, LLM tools, MCP servers, coding agents, RAG, inference, vector DB를 실시간 랭킹 축으로 본다."
  },
  {
    label: "GitHub Trending",
    url: "https://github.com/trending",
    signal: "언어/기간별 단기 star velocity와 커뮤니티 노출을 확인하는 기본 외부 표면이다."
  },
  {
    label: "OSSInsight Agent Memory Race",
    url: "https://ossinsight.io/blog/agent-memory-race-2026",
    signal: "agent memory가 2026년 독립 카테고리로 경쟁 중이라는 외부 해석 신호다."
  },
  {
    label: "Firecrawl Agentic AI Trends",
    url: "https://www.firecrawl.dev/blog/agentic-ai-trends",
    signal: "CLI agents, MCP/tool use, browser/data workflows 같은 agentic AI 구현 축을 트렌드 해석 보조 신호로 쓴다."
  }
];

function safeArray(value) {
  return Array.isArray(value) ? value : [];
}

async function readJson(file, fallback) {
  if (!existsSync(file)) return fallback;
  return JSON.parse(await readFile(file, "utf8"));
}

function tableText(value) {
  return String(value ?? "").replace(/\s+/g, " ").replaceAll("|", "\\|").trim();
}

function csvValue(value) {
  const text = String(value ?? "").trim();
  return /[",\n]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text;
}

function renderCsv(headers, rows) {
  return [
    headers.map(csvValue).join(","),
    ...rows.map((row) => headers.map((header) => csvValue(row[header])).join(","))
  ].join("\n") + "\n";
}

function renderMarkdown(content) {
  return `${content.trimEnd()}\n`;
}

function linkFrom(baseDir, target, label) {
  if (!target) return "";
  const relative = path.relative(path.join(root, baseDir), path.join(root, target)).replaceAll(path.sep, "/");
  return `[${tableText(label)}](${relative})`;
}

function externalLink(label, url) {
  return `[${tableText(label)}](${url})`;
}

function repoKey(value) {
  return String(value || "")
    .replace(/^https:\/\/github\.com\//, "")
    .replace(/\.git$/, "")
    .toLowerCase();
}

function countBy(items, valueFn) {
  const counts = {};
  for (const item of items) {
    const value = valueFn(item);
    if (!value) continue;
    counts[value] = (counts[value] || 0) + 1;
  }
  return counts;
}

function addCounts(target, values, weight = 1) {
  for (const value of values) {
    if (!value) continue;
    target[value] = (target[value] || 0) + weight;
  }
}

function topEntries(counts, limit = 8) {
  return Object.entries(counts || {})
    .filter(([, count]) => count > 0)
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .slice(0, limit)
    .map(([key, count]) => ({ key, count }));
}

function topEntryText(counts, limit = 5) {
  return topEntries(counts, limit).map((entry) => `${entry.key} (${entry.count})`).join(", ");
}

function median(values) {
  const sorted = values.filter((value) => Number.isFinite(value)).sort((a, b) => a - b);
  if (!sorted.length) return 0;
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 ? sorted[mid] : Math.round((sorted[mid - 1] + sorted[mid]) / 2);
}

function pct(value, total) {
  if (!total) return "0%";
  return `${Math.round((value / total) * 100)}%`;
}

function number(value) {
  return Number(value || 0);
}

function sum(values) {
  return values.reduce((acc, value) => acc + number(value), 0);
}

function max(values) {
  return values.reduce((acc, value) => Math.max(acc, number(value)), 0);
}

function commandCategories(row) {
  const categories = safeArray(row.commands).map((command) => command.category).filter(Boolean);
  if (!categories.length && row.commandSummary) {
    for (const [key, value] of Object.entries(row.commandSummary)) {
      if (number(value) > 0) categories.push(key);
    }
  }
  return [...new Set(categories)];
}

function dependencyGroupNames(row) {
  const groups = [];
  for (const [group, cues] of Object.entries(row.dependencyGroups || {})) {
    if (safeArray(cues).length) groups.push(group);
  }
  return groups;
}

function dominantBuckets(row, limit = 5) {
  return topEntries(row.bucketCounts || {}, limit).map((entry) => entry.key);
}

function featureTags(row) {
  const tags = [];
  const buckets = row.bucketCounts || {};
  const patterns = safeArray(row.patterns);
  const deps = dependencyGroupNames(row);
  const commands = commandCategories(row);

  if (patterns.includes("monorepo/workspace")) tags.push("monorepo");
  if (patterns.includes("cli-first")) tags.push("cli-first");
  if (patterns.includes("api/server")) tags.push("api/server");
  if (patterns.includes("agent/tool runtime") || buckets.agentRuntime > 0) tags.push("agent-runtime");
  if (buckets.mcp > 0 || deps.includes("agentProtocols")) tags.push("mcp/protocol");
  if (buckets.retrieval > 0 || deps.includes("vectorStores")) tags.push("retrieval-memory");
  if (buckets.spec > 0) tags.push("spec-artifacts");
  if (buckets.eval > 0 || commands.includes("test")) tags.push("tests-evals");
  if (buckets.security > 0) tags.push("security-policy");
  if (buckets.container > 0) tags.push("container-deploy");
  if (buckets.instruction > 0) tags.push("agent-instructions");
  if (deps.includes("modelRuntime")) tags.push("model-runtime");
  if (deps.includes("webRuntime")) tags.push("web-runtime");
  if (deps.includes("observability")) tags.push("observability");
  return [...new Set(tags)].slice(0, 10);
}

function standout(row) {
  const tags = featureTags(row);
  if (tags.includes("mcp/protocol") && tags.includes("agent-runtime")) return "MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포";
  if (tags.includes("retrieval-memory") && tags.includes("tests-evals")) return "RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포";
  if (tags.includes("spec-artifacts") && tags.includes("tests-evals")) return "스펙/요구사항 산출물과 테스트 추적을 같이 볼 수 있는 레포";
  if (tags.includes("security-policy") && tags.includes("container-deploy")) return "보안/정책 표면과 배포 표면이 함께 드러나는 운영형 레포";
  if (tags.includes("cli-first") && tags.includes("agent-instructions")) return "CLI 사용면과 agent instruction 파일이 같이 보이는 개발자 워크플로 레포";
  if (tags.includes("model-runtime")) return "모델 런타임/서빙 의존성이 직접 잡히는 인프라형 레포";
  if (tags.includes("web-runtime")) return "웹 런타임/SDK 표면이 강한 애플리케이션형 레포";
  return tags.slice(0, 4).join(", ") || "소스 구조 신호가 약해 추가 수동 확인이 필요한 레포";
}

function buildTrendMap(globalData, koreaData) {
  const map = new Map();
  function merge(item, scope) {
    const keys = [item.name, item.url, item.localPath].filter(Boolean).map(repoKey);
    const existing = keys.map((key) => map.get(key)).find(Boolean) || {
      scopes: new Set(),
      trendScore: 0,
      priorityScore: 0,
      tags: new Set(),
      categories: new Set(),
      pushedAt: null,
      updatedAt: null,
      sightings: 0
    };
    existing.scopes.add(scope);
    existing.trendScore = Math.max(existing.trendScore, number(item.trendScore));
    existing.priorityScore = Math.max(existing.priorityScore, number(item.priorityScore));
    for (const tag of safeArray(item.tags)) existing.tags.add(tag);
    for (const category of safeArray(item.categories)) existing.categories.add(category);
    existing.pushedAt = [existing.pushedAt, item.pushedAt].filter(Boolean).sort().at(-1) || null;
    existing.updatedAt = [existing.updatedAt, item.updatedAt].filter(Boolean).sort().at(-1) || null;
    existing.sightings += safeArray(item.trendingSightings).length;
    for (const key of keys) map.set(key, existing);
  }
  for (const item of safeArray(globalData?.analyses)) merge(item, "global");
  for (const item of safeArray(koreaData?.analyses)) merge(item, "korea");
  return map;
}

function enrichRepository(row, trendMap) {
  const trend = [row.name, row.url, row.localPath].map(repoKey).map((key) => trendMap.get(key)).find(Boolean);
  const tags = featureTags(row);
  const trendScopes = trend ? [...trend.scopes].sort() : [];
  const trendScore = trend?.trendScore || 0;
  const sourceScore = number(row.sourceDepthScore) + safeArray(row.keySourceReferences).length * 2;
  const compareScore = Math.round(
    sourceScore +
    Math.log10(number(row.stars) + 1) * 18 +
    trendScore * 1.4 +
    tags.length * 3 -
    safeArray(row.sourceRisks).length * 3
  );

  return {
    name: row.name,
    title: row.title,
    url: row.url,
    role: row.role,
    roleTitle: row.roleTitle,
    roleKorean: row.roleKorean,
    region: row.region,
    language: row.language || "unknown",
    stars: number(row.stars),
    forks: number(row.forks),
    maturity: row.maturity,
    evidence: row.evidence,
    localPath: row.localPath,
    reportPath: row.reportPath,
    sourceDeepDivePath: row.sourceDeepDivePath,
    fileCount: number(row.fileCount),
    dirCount: number(row.dirCount),
    sourceDepthScore: number(row.sourceDepthScore),
    keyReferenceCount: safeArray(row.keySourceReferences).length,
    patterns: safeArray(row.patterns),
    dominantBuckets: dominantBuckets(row),
    bucketCounts: row.bucketCounts || {},
    dependencyGroups: dependencyGroupNames(row),
    commandCategories: commandCategories(row),
    riskCategories: Object.entries(row.sourceRiskCategories || {}).filter(([, value]) => number(value) > 0).map(([key]) => key),
    risks: safeArray(row.sourceRisks),
    featureTags: tags,
    standout: standout(row),
    trendScore,
    trendPriorityScore: trend?.priorityScore || 0,
    trendScopes,
    trendTags: trend ? [...trend.tags].sort() : [],
    trendCategories: trend ? [...trend.categories].sort() : [],
    trendSightings: trend?.sightings || 0,
    pushedAt: trend?.pushedAt || null,
    compareScore,
    deepInsight: row.deepInsight,
    repositoryInsight: row.repositoryInsight
  };
}

function categoryNarrative(category, rows, aggregate) {
  const insights = [];
  const count = rows.length;
  const topPatterns = topEntryText(aggregate.patternCounts, 3) || "pattern signal weak";
  const topBuckets = topEntryText(aggregate.bucketCoverage, 4) || "bucket signal weak";
  const trendRatio = pct(aggregate.trendRepoCount, count);
  const evalCoverage = aggregate.bucketCoverage.eval || 0;
  const securityCoverage = aggregate.bucketCoverage.security || 0;
  const mcpCoverage = aggregate.bucketCoverage.mcp || 0;
  const retrievalCoverage = aggregate.bucketCoverage.retrieval || 0;
  const specCoverage = aggregate.bucketCoverage.spec || 0;
  const containerCoverage = aggregate.bucketCoverage.container || 0;
  const instructionCoverage = aggregate.bucketCoverage.instruction || 0;

  insights.push(`${category.korean} 카테고리는 ${count}개 레포로 구성되며, 현재 트렌드 데이터와 직접 연결된 레포 비중은 ${trendRatio}입니다.`);
  insights.push(`구조적으로 가장 많이 반복되는 패턴은 ${topPatterns}이고, 파일 근거 bucket은 ${topBuckets} 순서로 강합니다.`);
  if (mcpCoverage / count >= 0.35) insights.push(`MCP/tool protocol 표면이 ${pct(mcpCoverage, count)}에서 보입니다. 단순 라이브러리보다 agent tool 연결/registry를 비교해야 합니다.`);
  if (retrievalCoverage / count >= 0.35) insights.push(`RAG, memory, vector/index 경로가 ${pct(retrievalCoverage, count)}에서 보입니다. 저장소별 차이는 vector store보다 ingestion/chunking/eval 연결 방식에서 갈립니다.`);
  if (specCoverage / count >= 0.25) insights.push(`spec/requirements/ADR 경로가 ${pct(specCoverage, count)}에서 잡힙니다. spec-driven 관점에서는 문서 존재보다 acceptance/test trace까지 연결되는지가 핵심입니다.`);
  if (evalCoverage / count >= 0.45) insights.push(`test/eval 표면이 ${pct(evalCoverage, count)}로 높습니다. production reference로 볼 때 검증 harness와 CI를 먼저 비교하는 편이 좋습니다.`);
  if (securityCoverage / count < 0.2) insights.push(`security/policy 소스 경로는 ${pct(securityCoverage, count)}에 그칩니다. agent 권한, secret, sandbox가 중요한 카테고리라면 보안 표면 누락을 별도 리스크로 봐야 합니다.`);
  if (containerCoverage / count >= 0.35) insights.push(`container/deploy 경로가 ${pct(containerCoverage, count)}에서 확인됩니다. 로컬 데모형보다 운영 배포형 레포 비중이 높습니다.`);
  if (instructionCoverage / count >= 0.25) insights.push(`AGENTS/CLAUDE/Codex/Cursor류 instruction 파일이 ${pct(instructionCoverage, count)}에서 보여 agent-native 개발 방식이 이미 레포 구조에 들어와 있습니다.`);
  return [...new Set(insights)].slice(0, 8);
}

function aggregateCategory(category, rows) {
  const patternCounts = {};
  const featureCounts = {};
  const dependencyGroupCounts = {};
  const commandCounts = {};
  const bucketCoverage = {};
  const bucketHits = {};
  const riskCounts = {};

  for (const row of rows) {
    addCounts(patternCounts, row.patterns);
    addCounts(featureCounts, row.featureTags);
    addCounts(dependencyGroupCounts, row.dependencyGroups);
    addCounts(commandCounts, row.commandCategories);
    addCounts(riskCounts, row.riskCategories);
    for (const [bucket, count] of Object.entries(row.bucketCounts || {})) {
      bucketHits[bucket] = (bucketHits[bucket] || 0) + number(count);
      if (number(count) > 0) bucketCoverage[bucket] = (bucketCoverage[bucket] || 0) + 1;
    }
  }

  const aggregate = {
    slug: category.slug,
    title: category.title,
    korean: category.korean,
    lens: category.lens,
    count: rows.length,
    trendRepoCount: rows.filter((row) => row.trendScore > 0).length,
    globalTrendCount: rows.filter((row) => row.trendScopes.includes("global")).length,
    koreaTrendCount: rows.filter((row) => row.trendScopes.includes("korea")).length,
    bothTrendCount: rows.filter((row) => row.trendScopes.includes("global") && row.trendScopes.includes("korea")).length,
    starsTotal: sum(rows.map((row) => row.stars)),
    starsMedian: median(rows.map((row) => row.stars)),
    trendScoreMax: max(rows.map((row) => row.trendScore)),
    trendScoreMedian: median(rows.map((row) => row.trendScore)),
    fileCountMedian: median(rows.map((row) => row.fileCount)),
    keyReferenceTotal: sum(rows.map((row) => row.keyReferenceCount)),
    sourceDepthMedian: median(rows.map((row) => row.sourceDepthScore)),
    languages: countBy(rows, (row) => row.language),
    maturity: countBy(rows, (row) => row.maturity),
    evidence: countBy(rows, (row) => row.evidence),
    regions: countBy(rows, (row) => row.region),
    patternCounts,
    featureCounts,
    dependencyGroupCounts,
    commandCounts,
    bucketCoverage,
    bucketHits,
    riskCounts,
    topRepositories: [...rows].sort((a, b) => b.compareScore - a.compareScore || b.stars - a.stars).slice(0, 30),
    topTrendRepositories: [...rows].filter((row) => row.trendScore > 0).sort((a, b) => b.trendScore - a.trendScore || b.compareScore - a.compareScore).slice(0, 20),
    topRiskRepositories: [...rows].filter((row) => row.risks.length).sort((a, b) => b.risks.length - a.risks.length || b.compareScore - a.compareScore).slice(0, 20)
  };
  aggregate.insights = categoryNarrative(category, rows, aggregate);
  return aggregate;
}

function renderNavigation(baseDir) {
  return `## Navigation

| Entry | Use it for |
| --- | --- |
| ${linkFrom(baseDir, "README.md", "Repository README")} | Repo-wide orientation and top-level data/report structure. |
| ${linkFrom(baseDir, "reports/README.md", "Reports Reading Index")} | Main report navigation, topics, and folder map. |
| ${linkFrom(baseDir, "reports/source-deep-dives/README.md", "Source Deep Dives")} | Source-path evidence and per-repository deep dives. |
| ${linkFrom(baseDir, "reports/source-deep-dives/repositories/README.md", "Source Repository Deep Dives")} | One Markdown deep dive per cloned repository. |
| ${linkFrom(baseDir, "reports/repository-insights/README.md", "Repository Insights")} | Repository-level assessment and role pages. |
| ${linkFrom(baseDir, "reports/source-insights/README.md", "Source Trend Insights")} | Category trend insights and repository feature comparison. |
| ${linkFrom(baseDir, "reports/source-insights/by-category/README.md", "Source Insights by Category")} | Category-first source insight pages. |
| ${linkFrom(baseDir, "reports/tables/README.md", "Report Tables")} | CSV and table-first navigation. |
`;
}

function renderExternalTrendSources() {
  return `| Source | How it is used |
| --- | --- |
${externalTrendSources.map((source) => `| ${externalLink(source.label, source.url)} | ${tableText(source.signal)} |`).join("\n")}
`;
}

function renderCategoryTable(summaries, baseDir) {
  const rows = summaries
    .sort((a, b) => b.count - a.count || a.korean.localeCompare(b.korean))
    .map((summary) => `| ${linkFrom(baseDir, `reports/source-insights/by-category/${summary.slug}/README.md`, summary.korean)} | ${summary.count} | ${summary.trendRepoCount} | ${summary.globalTrendCount} / ${summary.koreaTrendCount} | ${summary.keyReferenceTotal} | ${tableText(topEntryText(summary.featureCounts, 4) || "none")} | ${tableText(summary.insights[0])} |`)
    .join("\n");
  return `| Category | Repos | Trend-linked | Global / Korea | Key refs | Dominant features | First insight |
| --- | ---: | ---: | ---: | ---: | --- | --- |
${rows}
`;
}

function renderRepositoryComparisonTable(rows, baseDir, limit = 80) {
  const body = [...rows]
    .sort((a, b) => b.compareScore - a.compareScore || b.trendScore - a.trendScore || b.stars - a.stars)
    .slice(0, limit)
    .map((row) => {
      const repo = row.url ? externalLink(row.name, row.url) : tableText(row.name);
      const links = [
        row.sourceDeepDivePath ? linkFrom(baseDir, row.sourceDeepDivePath, "source deep dive") : null,
        row.reportPath ? linkFrom(baseDir, row.reportPath, "report") : null,
        row.localPath ? linkFrom(baseDir, row.localPath, "source") : null
      ].filter(Boolean).join(" / ");
      return `| ${repo} | ${tableText(row.roleKorean)} | ${row.compareScore} | ${row.trendScore} | ${row.stars} | ${tableText(row.language)} | ${tableText(row.featureTags.join(", "))} | ${tableText(row.standout)} | ${tableText(row.risks.join(", ") || "none")} | ${links} |`;
    })
    .join("\n");
  return `| Repository | Category | Compare score | Trend score | Stars | Language | Features | Standout | Risks | Links |
| --- | --- | ---: | ---: | ---: | --- | --- | --- | --- | --- |
${body}
`;
}

function renderCategorySummaryBlocks(summaries, baseDir) {
  return summaries
    .sort((a, b) => b.count - a.count || a.korean.localeCompare(b.korean))
    .map((summary) => `### ${linkFrom(baseDir, `reports/source-insights/by-category/${summary.slug}/README.md`, summary.korean)}

- Repos: ${summary.count}, trend-linked: ${summary.trendRepoCount}, global/korea: ${summary.globalTrendCount}/${summary.koreaTrendCount}
- Dominant source features: ${tableText(topEntryText(summary.featureCounts, 6) || "none")}
- Dominant buckets: ${tableText(topEntryText(summary.bucketCoverage, 6) || "none")}
- Top repos: ${summary.topRepositories.slice(0, 5).map((repo) => repo.name).join(", ") || "none"}
- Insight: ${summary.insights[0]}
`)
    .join("\n");
}

function renderMainReadme(data) {
  const baseDir = "reports/source-insights";
  return `# Source Trend Insights

Generated: ${generatedAt}

## 요약

- 조사 단위: 로컬에 클론된 ${data.totals.repositories.toLocaleString("en-US")}개 소스 레포의 source deep-scan 결과를 카테고리별로 다시 집계했습니다.
- 포함 범위: 카테고리 ${data.categories.length}개, key source reference ${data.totals.keyReferences.toLocaleString("en-US")}개, 레포별 비교 row ${data.repositories.length.toLocaleString("en-US")}개입니다.
- 탐색 방식: Category Insight Map에서 큰 흐름을 보고, Repository Feature Comparison에서 레포별 특징과 링크를 따라가면 됩니다.

## 총평

현재 소스 트렌드는 agent harness/MCP, RAG/knowledge, AI infrastructure, developer tooling이 가장 큰 덩어리로 잡힙니다. 단순 star 순위보다 실제 소스에서 보이는 entrypoint, MCP, retrieval, spec, eval, security, CI/container, agent instruction 경로가 더 유용한 비교 축입니다. 이 보고서는 외부 트렌드 신호를 방향성 확인에만 쓰고, 최종 판단은 로컬 소스의 파일 경로 근거와 레포별 deep dive 링크에 둡니다.

${renderNavigation(baseDir)}

## External Trend Signals Checked

${renderExternalTrendSources()}

## Category Insight Map

${renderCategoryTable(data.categories, baseDir)}

## Category Highlights

${renderCategorySummaryBlocks(data.categories, baseDir)}

## Repository Feature Comparison

${renderRepositoryComparisonTable(data.repositories, baseDir, 120)}

## Data Files

| Data | Use it for |
| --- | --- |
| ${linkFrom(baseDir, "data/source-trend-insights.json", "data/source-trend-insights.json")} | Complete category aggregates and repository comparison rows. |
| ${linkFrom(baseDir, "data/report-tables/source-category-insights.csv", "data/report-tables/source-category-insights.csv")} | Spreadsheet-friendly category insight table. |
| ${linkFrom(baseDir, "data/report-tables/source-repo-feature-comparison.csv", "data/report-tables/source-repo-feature-comparison.csv")} | Spreadsheet-friendly all-repository feature comparison table. |
`;
}

function renderByCategoryIndex(summaries) {
  const baseDir = "reports/source-insights/by-category";
  return `# Source Insights by Category

Generated: ${generatedAt}

## 요약

- 조사 단위: source trend insight를 카테고리별 README로 나눈 인덱스입니다.
- 포함 범위: ${summaries.length}개 카테고리, ${sum(summaries.map((summary) => summary.count)).toLocaleString("en-US")}개 레포입니다.
- 탐색 방식: 각 카테고리 README에서 trend signal, source feature, 대표 레포, 위험 신호를 같이 봅니다.

## 총평

카테고리별 페이지는 같은 유형의 레포를 서로 비교하기 위한 입구입니다. 전체 순위는 source-insights 메인 README가 빠르고, 특정 주제의 설계 패턴과 대표 레포를 고를 때는 이 인덱스에서 내려가는 편이 좋습니다.

${renderNavigation(baseDir)}

## Categories

${renderCategoryTable(summaries, baseDir)}
`;
}

function renderInsightList(insights) {
  return insights.map((insight) => `- ${insight}`).join("\n");
}

function renderCountTable(counts, title, baseDir = null) {
  const rows = topEntries(counts, 12)
    .map((entry) => `| ${tableText(entry.key)} | ${entry.count} |`)
    .join("\n");
  if (!rows) return `### ${title}\n\n_No signals._\n`;
  return `### ${title}

| Signal | Count |
| --- | ---: |
${rows}
`;
}

function renderCategoryReadme(summary) {
  const baseDir = `reports/source-insights/by-category/${summary.slug}`;
  return `# ${summary.title} Source Insights

Generated: ${generatedAt}

${summary.lens}

## 요약

- 조사 단위: ${summary.korean} 카테고리에 속한 ${summary.count}개 source-scanned 레포입니다.
- 포함 범위: trend-linked ${summary.trendRepoCount}개, key source reference ${summary.keyReferenceTotal}개, median source depth ${summary.sourceDepthMedian}입니다.
- 탐색 방식: Category Insights를 먼저 보고, Top Repository Comparison의 source deep dive 링크를 따라 구현 근거를 확인합니다.

## 총평

${summary.insights[0]} 이 카테고리의 비교 핵심은 star 순위가 아니라 dominant features, evidence buckets, validation surface, risk category를 같은 기준으로 맞춰 보는 것입니다.

${renderNavigation(baseDir)}

## Category Insights

${renderInsightList(summary.insights)}

## Trend and Source Metrics

| Field | Value |
| --- | --- |
| Repositories | ${summary.count} |
| Trend-linked repositories | ${summary.trendRepoCount} |
| Global / Korea trend count | ${summary.globalTrendCount} / ${summary.koreaTrendCount} |
| Both global and Korea | ${summary.bothTrendCount} |
| Max / median trend score | ${summary.trendScoreMax} / ${summary.trendScoreMedian} |
| Total / median stars | ${summary.starsTotal} / ${summary.starsMedian} |
| Key source references | ${summary.keyReferenceTotal} |
| Median file count | ${summary.fileCountMedian} |

## Source Feature Distribution

${renderCountTable(summary.featureCounts, "Dominant Features")}

${renderCountTable(summary.patternCounts, "Architecture Patterns")}

${renderCountTable(summary.bucketCoverage, "Evidence Bucket Coverage")}

${renderCountTable(summary.dependencyGroupCounts, "Dependency Groups")}

${renderCountTable(summary.commandCounts, "Command Surface")}

${renderCountTable(summary.riskCounts, "Risk Categories")}

## Top Trend Repositories

${renderRepositoryComparisonTable(summary.topTrendRepositories.length ? summary.topTrendRepositories : summary.topRepositories, baseDir, 40)}

## Top Repository Comparison

${renderRepositoryComparisonTable(summary.topRepositories, baseDir, 80)}

## Risk Watchlist

${summary.topRiskRepositories.length ? renderRepositoryComparisonTable(summary.topRiskRepositories, baseDir, 30) : "_No source risk rows in this category._\n"}
`;
}

function categoryCsvRows(summaries) {
  return summaries.map((summary) => ({
    slug: summary.slug,
    title: summary.title,
    korean: summary.korean,
    repositories: summary.count,
    trendLinked: summary.trendRepoCount,
    globalTrend: summary.globalTrendCount,
    koreaTrend: summary.koreaTrendCount,
    bothTrend: summary.bothTrendCount,
    maxTrendScore: summary.trendScoreMax,
    medianTrendScore: summary.trendScoreMedian,
    totalStars: summary.starsTotal,
    medianStars: summary.starsMedian,
    keyReferences: summary.keyReferenceTotal,
    medianSourceDepth: summary.sourceDepthMedian,
    dominantFeatures: topEntryText(summary.featureCounts, 8),
    dominantBuckets: topEntryText(summary.bucketCoverage, 8),
    dominantDependencies: topEntryText(summary.dependencyGroupCounts, 8),
    dominantCommands: topEntryText(summary.commandCounts, 8),
    dominantRisks: topEntryText(summary.riskCounts, 8),
    firstInsight: summary.insights[0]
  }));
}

function repoCsvRows(rows) {
  return rows.map((row) => ({
    name: row.name,
    url: row.url,
    category: row.role,
    categoryKorean: row.roleKorean,
    region: row.region,
    language: row.language,
    stars: row.stars,
    forks: row.forks,
    trendScore: row.trendScore,
    trendScopes: row.trendScopes.join(";"),
    compareScore: row.compareScore,
    maturity: row.maturity,
    evidence: row.evidence,
    fileCount: row.fileCount,
    dirCount: row.dirCount,
    sourceDepthScore: row.sourceDepthScore,
    keyReferenceCount: row.keyReferenceCount,
    features: row.featureTags.join(";"),
    dominantBuckets: row.dominantBuckets.join(";"),
    dependencyGroups: row.dependencyGroups.join(";"),
    commandCategories: row.commandCategories.join(";"),
    riskCategories: row.riskCategories.join(";"),
    risks: row.risks.join(";"),
    standout: row.standout,
    sourceDeepDivePath: row.sourceDeepDivePath,
    reportPath: row.reportPath,
    localPath: row.localPath
  }));
}

async function main() {
  const sourceData = await readJson(sourceDataFile, { repositories: [] });
  const globalTrendData = await readJson(globalTrendFile, { analyses: [] });
  const koreaTrendData = await readJson(koreaTrendFile, { analyses: [] });
  const trendMap = buildTrendMap(globalTrendData, koreaTrendData);

  const repositories = safeArray(sourceData.repositories).map((row) => enrichRepository(row, trendMap));
  const categorySummaries = categories
    .map((category) => aggregateCategory(category, repositories.filter((row) => row.role === category.slug)))
    .filter((summary) => summary.count > 0)
    .sort((a, b) => b.count - a.count || a.korean.localeCompare(b.korean));

  const output = {
    generatedAt,
    description: "Category-level source trend insights and repository feature comparison generated from source-deep-scan and trend analysis data.",
    externalTrendSources,
    totals: {
      repositories: repositories.length,
      categories: categorySummaries.length,
      trendLinkedRepositories: repositories.filter((row) => row.trendScore > 0).length,
      globalTrendRepositories: repositories.filter((row) => row.trendScopes.includes("global")).length,
      koreaTrendRepositories: repositories.filter((row) => row.trendScopes.includes("korea")).length,
      keyReferences: sum(repositories.map((row) => row.keyReferenceCount))
    },
    categories: categorySummaries,
    repositories
  };

  await mkdir(path.dirname(outputDataFile), { recursive: true });
  await mkdir(path.dirname(outputCategoryCsv), { recursive: true });
  await rm(outputReportDir, { recursive: true, force: true });
  await mkdir(outputByCategoryDir, { recursive: true });

  await writeFile(outputDataFile, JSON.stringify(output, null, 2));
  await writeFile(outputCategoryCsv, renderCsv([
    "slug", "title", "korean", "repositories", "trendLinked", "globalTrend", "koreaTrend", "bothTrend",
    "maxTrendScore", "medianTrendScore", "totalStars", "medianStars", "keyReferences", "medianSourceDepth",
    "dominantFeatures", "dominantBuckets", "dominantDependencies", "dominantCommands", "dominantRisks", "firstInsight"
  ], categoryCsvRows(categorySummaries)));
  await writeFile(outputRepoCsv, renderCsv([
    "name", "url", "category", "categoryKorean", "region", "language", "stars", "forks", "trendScore", "trendScopes",
    "compareScore", "maturity", "evidence", "fileCount", "dirCount", "sourceDepthScore", "keyReferenceCount",
    "features", "dominantBuckets", "dependencyGroups", "commandCategories", "riskCategories", "risks", "standout",
    "sourceDeepDivePath", "reportPath", "localPath"
  ], repoCsvRows(repositories)));

  await writeFile(path.join(outputReportDir, "README.md"), renderMarkdown(renderMainReadme(output)));
  await writeFile(path.join(outputByCategoryDir, "README.md"), renderMarkdown(renderByCategoryIndex(categorySummaries)));
  for (const summary of categorySummaries) {
    const dir = path.join(outputByCategoryDir, summary.slug);
    await mkdir(dir, { recursive: true });
    await writeFile(path.join(dir, "README.md"), renderMarkdown(renderCategoryReadme(summary)));
  }

  console.error(`source trend insight categories: ${categorySummaries.length}`);
  console.error(`source trend insight repositories: ${repositories.length}`);
}

await main();
