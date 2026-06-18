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
const outputComparisonCsv = path.join(root, "data", "report-tables", "source-category-comparisons.csv");

const categories = [
  { slug: "coding-agent-ide", title: "코딩 에이전트/IDE", korean: "코딩 에이전트/IDE", lens: "CLI/IDE 실행면, 코드 수정 루프, 샌드박스, 에이전트 지시문" },
  { slug: "agent-harness-mcp", title: "에이전트 하네스/MCP", korean: "에이전트 하네스/MCP", lens: "MCP, 도구 등록부, 워크플로 오케스트레이션, hooks/skills" },
  { slug: "llm-wiki-rag", title: "LLM 위키/RAG/지식베이스", korean: "LLM 위키/RAG/지식베이스", lens: "수집, chunking, embedding, retrieval, memory, vector store" },
  { slug: "spec-driven", title: "스펙 드리븐/요구사항", korean: "스펙 드리븐/요구사항", lens: "요구사항, ADR, 설계 문서, 스펙 산출물, acceptance/test trace" },
  { slug: "eval-observability", title: "평가/관측/품질", korean: "평가/관측/품질", lens: "평가 suite, benchmark harness, tracing, observability, quality gate" },
  { slug: "ai-infrastructure-serving", title: "AI 인프라/서빙", korean: "AI 인프라/서빙", lens: "모델 서빙, API server, 배포, Docker/Kubernetes, runtime adapter" },
  { slug: "data-vector-platform", title: "데이터/벡터 플랫폼", korean: "데이터/벡터 플랫폼", lens: "저장소, index, embedding/vector 경로, query engine, persistence" },
  { slug: "security-governance", title: "보안/거버넌스/안전", korean: "보안/거버넌스/안전", lens: "sandbox, permission, policy, auth, guardrail, secret handling" },
  { slug: "developer-productivity", title: "개발 생산성/DevTools", korean: "개발 생산성/DevTools", lens: "CLI/devtool entrypoint, SDK 형태, CI/build script, automation" },
  { slug: "general-ai-open-source", title: "일반 AI 오픈소스", korean: "일반 AI 오픈소스", lens: "주요 구조, 의존성 스택, 테스트, 배포, 문서" }
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

function ratio(value, total) {
  if (!total) return 0;
  return number(value) / total;
}

function pctRatio(value) {
  return `${Math.round(number(value) * 100)}%`;
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

function truncateText(value, maxLength = 120) {
  const text = tableText(value);
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength - 1)}…`;
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

const categoryUseCases = {
  "coding-agent-ide": "코딩 에이전트 제품/IDE 루프를 설계할 때 참고 구현 후보로 본다.",
  "agent-harness-mcp": "MCP, 도구 등록부, 워크플로 오케스트레이션, hooks/skills를 실제 제품 구조에 넣을 때 기준 카테고리로 본다.",
  "llm-wiki-rag": "문서/코드 지식을 수집하고 검색하고 기억으로 유지하는 RAG/knowledge architecture 비교에 쓴다.",
  "spec-driven": "요구사항, 설계 문서, acceptance/test trace를 장기 기억으로 남기는 방식 비교에 쓴다.",
  "eval-observability": "agent/RAG 품질을 운영 중에 측정하고 회귀를 막는 평가/관측성 구조 비교에 쓴다.",
  "ai-infrastructure-serving": "모델 서빙, API, 컨테이너, 배포, runtime adapter를 운영 기준으로 비교할 때 쓴다.",
  "data-vector-platform": "embedding/vector/index/query persistence 구조를 고를 때 쓴다.",
  "security-governance": "sandbox, permission, policy, guardrail, secret handling을 agent 실행 안정성 관점에서 본다.",
  "developer-productivity": "CLI, SDK, 자동화, CI, code search를 개발자 workflow로 묶는 방식을 비교한다.",
  "general-ai-open-source": "넓은 AI 오픈소스 후보를 탐색하되, 특정 설계 패턴은 더 세부 카테고리와 대조해서 읽는다."
};

function categoryCoverage(summary, bucket) {
  return ratio(summary.bucketCoverage?.[bucket], summary.count);
}

function featureCoverage(summary, feature) {
  return ratio(summary.featureCounts?.[feature], summary.count);
}

function perRepo(value, summary) {
  return summary.count ? (number(value) / summary.count).toFixed(1) : "0.0";
}

function topFeaturePhrase(summary, limit = 3) {
  const entries = topEntries(summary.featureCounts, limit);
  if (!entries.length) return "강한 feature 신호 없음";
  return entries.map((entry) => `${entry.key} ${pct(entry.count, summary.count)}`).join(", ");
}

function topBucketPhrase(summary, limit = 3) {
  const entries = topEntries(summary.bucketCoverage, limit);
  if (!entries.length) return "강한 bucket 신호 없음";
  return entries.map((entry) => `${entry.key} ${pct(entry.count, summary.count)}`).join(", ");
}

function topLanguagePhrase(summary, limit = 3) {
  const entries = topEntries(summary.languages, limit);
  if (!entries.length) return "언어 신호 없음";
  return entries.map((entry) => `${entry.key} ${entry.count}`).join(", ");
}

function categoryStrength(summary) {
  const parts = [];
  const trendRatio = ratio(summary.trendRepoCount, summary.count);
  if (trendRatio >= 0.85) parts.push(`트렌드 연결률 ${pctRatio(trendRatio)}로 현재성 강함`);
  if (categoryCoverage(summary, "eval") >= 0.7) parts.push(`test/eval coverage ${pctRatio(categoryCoverage(summary, "eval"))}`);
  if (categoryCoverage(summary, "mcp") >= 0.5) parts.push(`MCP/tool 경로 ${pctRatio(categoryCoverage(summary, "mcp"))}`);
  if (categoryCoverage(summary, "retrieval") >= 0.65) parts.push(`retrieval/memory 경로 ${pctRatio(categoryCoverage(summary, "retrieval"))}`);
  if (categoryCoverage(summary, "container") >= 0.5) parts.push(`배포/컨테이너 경로 ${pctRatio(categoryCoverage(summary, "container"))}`);
  if (categoryCoverage(summary, "instruction") >= 0.45) parts.push(`agent instruction 파일 ${pctRatio(categoryCoverage(summary, "instruction"))}`);
  if (featureCoverage(summary, "cli-first") >= 0.6) parts.push(`CLI 사용면이 강함`);
  if (featureCoverage(summary, "api/server") >= 0.55) parts.push(`API/server 표면이 강함`);
  return parts.slice(0, 3).join("; ") || `${topFeaturePhrase(summary, 2)}가 주요 강점`;
}

function categoryGap(summary) {
  const gaps = [];
  const trendRatio = ratio(summary.trendRepoCount, summary.count);
  if (trendRatio < 0.25) gaps.push(`트렌드 연결률 ${pctRatio(trendRatio)}라 현재성 검증 필요`);
  if (categoryCoverage(summary, "security") < 0.25) gaps.push(`security/policy 경로 ${pctRatio(categoryCoverage(summary, "security"))}`);
  if (categoryCoverage(summary, "eval") < 0.45) gaps.push(`test/eval 경로 ${pctRatio(categoryCoverage(summary, "eval"))}`);
  if (categoryCoverage(summary, "ci") < 0.45) gaps.push(`CI 경로 ${pctRatio(categoryCoverage(summary, "ci"))}`);
  if (summary.sourceDepthMedian < 80) gaps.push(`중앙 소스 깊이 ${summary.sourceDepthMedian}로 직접 확인 필요`);
  if (summary.keyReferenceTotal / Math.max(summary.count, 1) < 6) gaps.push(`레포당 핵심 참조 ${perRepo(summary.keyReferenceTotal, summary)}개`);
  return gaps.slice(0, 3).join("; ") || "큰 구조적 공백은 표면상 작지만, 대표 레포별 위험 신호를 확인해야 함";
}

function categoryDecision(summary) {
  const useCase = categoryUseCases[summary.slug] || "동일 유형 레포 비교의 기준점으로 쓴다.";
  const firstRepo = summary.topRepositories[0]?.name || "대표 레포 없음";
  const topTrend = summary.topTrendRepositories[0]?.name || firstRepo;
  return `${useCase} 먼저 ${firstRepo}를 구조 기준점으로 보고, 현재성은 ${topTrend}와 대조한다.`;
}

function categoryProfile(summary, allSummaries) {
  const averageDepth = median(allSummaries.map((item) => item.sourceDepthMedian));
  const topFeature = topEntries(summary.featureCounts, 1)[0]?.key || "feature 신호 약함";
  const topBucket = topEntries(summary.bucketCoverage, 1)[0]?.key || "bucket 신호 약함";
  const referenceDensity = Number(perRepo(summary.keyReferenceTotal, summary));
  const depthPosition = summary.sourceDepthMedian >= averageDepth ? "소스 근거가 평균 이상" : "소스 근거가 평균보다 얕음";
  return {
    useCase: categoryUseCases[summary.slug] || "동일 유형 레포 비교의 기준점으로 쓴다.",
    strength: categoryStrength(summary),
    gap: categoryGap(summary),
    decision: categoryDecision(summary),
    topFeature,
    topBucket,
    topLanguages: topLanguagePhrase(summary),
    featureSummary: topFeaturePhrase(summary, 5),
    bucketSummary: topBucketPhrase(summary, 5),
    referenceDensity,
    depthPosition,
    trendHeat: pct(summary.trendRepoCount, summary.count)
  };
}

function repoPosition(row, summary) {
  const notes = [];
  if (row.compareScore >= summary.compareScoreMedian) notes.push("카테고리 중앙값보다 비교 점수 높음");
  if (row.trendScore >= summary.trendScoreMedian && row.trendScore > 0) notes.push("트렌드 점수 우위");
  if (row.sourceDepthScore >= summary.sourceDepthMedian) notes.push("소스 깊이 우위");
  if (row.keyReferenceCount >= Math.max(8, summary.keyReferenceMedian)) notes.push("핵심 파일 참조 충분");
  const topFeatures = new Set(topEntries(summary.featureCounts, 4).map((entry) => entry.key));
  const matchedFeatures = row.featureTags.filter((tag) => topFeatures.has(tag));
  if (matchedFeatures.length >= 2) notes.push(`대표 feature 일치: ${matchedFeatures.slice(0, 3).join(", ")}`);
  if (row.risks.length) notes.push(`확인 필요: ${row.risks.slice(0, 2).join(", ")}`);
  return notes.slice(0, 4).join("; ") || "대표성은 있으나 추가 소스 확인 필요";
}

function repoReadReason(row) {
  const reasons = [];
  if (row.featureTags.includes("mcp/protocol")) reasons.push("MCP/tool 연결 방식");
  if (row.featureTags.includes("retrieval-memory")) reasons.push("retrieval/memory 구조");
  if (row.featureTags.includes("spec-artifacts")) reasons.push("spec/요구사항 산출물");
  if (row.featureTags.includes("tests-evals")) reasons.push("검증 표면");
  if (row.featureTags.includes("security-policy")) reasons.push("보안/정책 표면");
  if (row.featureTags.includes("container-deploy")) reasons.push("배포 구조");
  if (row.featureTags.includes("agent-instructions")) reasons.push("agent-native 개발 지시문");
  return reasons.slice(0, 4).join(", ") || row.standout;
}

function buildRepoComparisons(summary, limit = 18) {
  const selected = [...summary.topRepositories]
    .sort((a, b) => b.compareScore - a.compareScore || b.trendScore - a.trendScore || b.stars - a.stars)
    .slice(0, limit);
  return selected.map((row, index) => ({
    rank: index + 1,
    name: row.name,
    url: row.url,
    compareScore: row.compareScore,
    trendScore: row.trendScore,
    stars: row.stars,
    language: row.language,
    reason: repoReadReason(row),
    position: repoPosition(row, summary),
    risk: row.risks.slice(0, 3).join(", ") || "큰 위험 신호 없음",
    sourceDeepDivePath: row.sourceDeepDivePath,
    reportPath: row.reportPath,
    localPath: row.localPath
  }));
}

const comparisonMetrics = [
  { key: "trend", label: "트렌드 연결률", value: (summary) => ratio(summary.trendRepoCount, summary.count), render: (value) => pctRatio(value) },
  { key: "global", label: "글로벌 비중", value: (summary) => ratio(summary.globalTrendCount, summary.count), render: (value) => pctRatio(value) },
  { key: "korea", label: "한국 비중", value: (summary) => ratio(summary.koreaTrendCount, summary.count), render: (value) => pctRatio(value) },
  { key: "mcp", label: "MCP 경로", value: (summary) => categoryCoverage(summary, "mcp"), render: (value) => pctRatio(value) },
  { key: "retrieval", label: "retrieval 경로", value: (summary) => categoryCoverage(summary, "retrieval"), render: (value) => pctRatio(value) },
  { key: "spec", label: "spec 경로", value: (summary) => categoryCoverage(summary, "spec"), render: (value) => pctRatio(value) },
  { key: "eval", label: "test/eval 경로", value: (summary) => categoryCoverage(summary, "eval"), render: (value) => pctRatio(value) },
  { key: "security", label: "security 경로", value: (summary) => categoryCoverage(summary, "security"), render: (value) => pctRatio(value) },
  { key: "container", label: "배포 경로", value: (summary) => categoryCoverage(summary, "container"), render: (value) => pctRatio(value) },
  { key: "instruction", label: "instruction 경로", value: (summary) => categoryCoverage(summary, "instruction"), render: (value) => pctRatio(value) },
  { key: "depth", label: "소스 깊이 중앙값", value: (summary) => summary.sourceDepthMedian / 126, render: (_value, summary) => String(summary.sourceDepthMedian) },
  { key: "refs", label: "레포당 핵심 참조", value: (summary) => Math.min(1, number(perRepo(summary.keyReferenceTotal, summary)) / 12), render: (_value, summary) => perRepo(summary.keyReferenceTotal, summary) }
];

function buildPairwiseComparisons(summaries) {
  const pairs = [];
  for (let i = 0; i < summaries.length; i += 1) {
    for (let j = i + 1; j < summaries.length; j += 1) {
      const left = summaries[i];
      const right = summaries[j];
      const metricDiffs = comparisonMetrics
        .map((metric) => {
          const leftValue = metric.value(left);
          const rightValue = metric.value(right);
          return {
            key: metric.key,
            label: metric.label,
            leftValue,
            rightValue,
            diff: leftValue - rightValue,
            leftRendered: metric.render(leftValue, left),
            rightRendered: metric.render(rightValue, right)
          };
        })
        .sort((a, b) => Math.abs(b.diff) - Math.abs(a.diff));
      const main = metricDiffs.slice(0, 3);
      const score = Math.round(main.reduce((acc, item) => acc + Math.abs(item.diff), 0) * 100);
      const contrast = main.map((item) => `${item.label}: ${left.korean} ${item.leftRendered} vs ${right.korean} ${item.rightRendered}`).join("; ");
      const leftFeature = left.comparisonProfile?.topFeature || topEntries(left.featureCounts, 1)[0]?.key || "feature";
      const rightFeature = right.comparisonProfile?.topFeature || topEntries(right.featureCounts, 1)[0]?.key || "feature";
      const decision = `${left.korean}: ${leftFeature} 중심, ${right.korean}: ${rightFeature} 중심으로 보면 차이가 빨리 보입니다.`;
      pairs.push({
        left: left.slug,
        leftKorean: left.korean,
        right: right.slug,
        rightKorean: right.korean,
        score,
        contrast,
        decision,
        mainAxes: main.map((item) => item.label)
      });
    }
  }
  return pairs.sort((a, b) => b.score - a.score || a.leftKorean.localeCompare(b.leftKorean));
}

function enrichComparativeInsights(summaries) {
  for (const summary of summaries) {
    summary.comparisonProfile = categoryProfile(summary, summaries);
    summary.repoComparisons = buildRepoComparisons(summary);
  }
  return {
    pairwise: buildPairwiseComparisons(summaries),
    categoryDecisions: summaries.map((summary) => ({
      slug: summary.slug,
      korean: summary.korean,
      useCase: summary.comparisonProfile.useCase,
      strength: summary.comparisonProfile.strength,
      gap: summary.comparisonProfile.gap,
      decision: summary.comparisonProfile.decision,
      representativeRepo: summary.topRepositories[0]?.name || "",
      trendHeat: summary.comparisonProfile.trendHeat,
      featureSummary: summary.comparisonProfile.featureSummary,
      bucketSummary: summary.comparisonProfile.bucketSummary
    }))
  };
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
    compareScoreMedian: median(rows.map((row) => row.compareScore)),
    fileCountMedian: median(rows.map((row) => row.fileCount)),
    keyReferenceTotal: sum(rows.map((row) => row.keyReferenceCount)),
    keyReferenceMedian: median(rows.map((row) => row.keyReferenceCount)),
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
  return `## 바로가기

| 이동 | 여기서 볼 것 |
| --- | --- |
| ${linkFrom(baseDir, "README.md", "전체 시작 README")} | 레포 전체 목적, 핵심 카테고리, 읽는 순서. |
| ${linkFrom(baseDir, "reports/README.md", "전체 보고서 읽기 지도")} | 모든 보고서의 시작점, 주제, 폴더 지도. |
| ${linkFrom(baseDir, "reports/source-deep-dives/README.md", "소스 딥다이브")} | 소스 경로 근거와 레포별 딥다이브. |
| ${linkFrom(baseDir, "reports/source-deep-dives/repositories/README.md", "레포별 소스 딥다이브")} | 로컬 클론 1개당 1개 Markdown 딥다이브. |
| ${linkFrom(baseDir, "reports/repository-insights/README.md", "레포별 인사이트")} | 레포별 총평과 역할군 페이지. |
| ${linkFrom(baseDir, "reports/source-insights/README.md", "소스 트렌드 인사이트")} | 카테고리별 트렌드와 레포별 특징 비교. |
| ${linkFrom(baseDir, "reports/source-insights/comparative-report.md", "상세 비교 리포트")} | 카테고리 간 차이와 대표 레포 판단표. |
| ${linkFrom(baseDir, "reports/source-insights/by-category/README.md", "카테고리별 소스 인사이트")} | 카테고리 기준의 소스 인사이트 페이지. |
| ${linkFrom(baseDir, "reports/tables/README.md", "표/CSV 목차")} | CSV와 표 중심 탐색. |
`;
}

function renderExternalTrendSources() {
  return `| 출처 | 활용 방식 |
| --- | --- |
${externalTrendSources.map((source) => `| ${externalLink(source.label, source.url)} | ${tableText(source.signal)} |`).join("\n")}
`;
}

function renderCategoryTable(summaries, baseDir) {
  const rows = summaries
    .sort((a, b) => b.count - a.count || a.korean.localeCompare(b.korean))
    .map((summary) => `| ${linkFrom(baseDir, `reports/source-insights/by-category/${summary.slug}/README.md`, summary.korean)} | ${summary.count} | ${summary.trendRepoCount} | ${summary.globalTrendCount} / ${summary.koreaTrendCount} | ${summary.keyReferenceTotal} | ${tableText(topEntryText(summary.featureCounts, 4) || "없음")} | ${tableText(summary.insights[0])} |`)
    .join("\n");
  return `| 카테고리 | 레포 수 | 트렌드 연결 | 글로벌 / 한국 | 핵심 참조 | 주요 feature | 첫 인사이트 |
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
        row.sourceDeepDivePath ? linkFrom(baseDir, row.sourceDeepDivePath, "소스 딥다이브") : null,
        row.reportPath ? linkFrom(baseDir, row.reportPath, "보고서") : null,
        row.localPath ? linkFrom(baseDir, row.localPath, "소스") : null
      ].filter(Boolean).join(" / ");
      return `| ${repo} | ${tableText(row.roleKorean)} | ${row.compareScore} | ${row.trendScore} | ${row.stars} | ${tableText(row.language)} | ${tableText(row.featureTags.join(", "))} | ${tableText(row.standout)} | ${tableText(row.risks.join(", ") || "없음")} | ${links} |`;
    })
    .join("\n");
  return `| 레포 | 카테고리 | 비교 점수 | 트렌드 점수 | Stars | 언어 | Features | 특징 | 위험 신호 | 링크 |
| --- | --- | ---: | ---: | ---: | --- | --- | --- | --- | --- |
${body}
`;
}

function renderCategorySummaryBlocks(summaries, baseDir) {
  return summaries
    .sort((a, b) => b.count - a.count || a.korean.localeCompare(b.korean))
    .map((summary) => `### ${linkFrom(baseDir, `reports/source-insights/by-category/${summary.slug}/README.md`, summary.korean)}

- 레포 수: ${summary.count}, 트렌드 연결: ${summary.trendRepoCount}, 글로벌/한국: ${summary.globalTrendCount}/${summary.koreaTrendCount}
- 주요 소스 feature: ${tableText(topEntryText(summary.featureCounts, 6) || "없음")}
- 주요 bucket: ${tableText(topEntryText(summary.bucketCoverage, 6) || "없음")}
- 대표 레포: ${summary.topRepositories.slice(0, 5).map((repo) => repo.name).join(", ") || "없음"}
- 인사이트: ${summary.insights[0]}
`)
    .join("\n");
}

function renderCategoryDecisionTable(summaries, baseDir) {
  const rows = summaries
    .sort((a, b) => b.count - a.count || a.korean.localeCompare(b.korean))
    .map((summary) => {
      const profile = summary.comparisonProfile;
      const repo = summary.topRepositories[0];
      const repoLink = repo?.url ? externalLink(repo.name, repo.url) : tableText(repo?.name || "없음");
      const detail = linkFrom(baseDir, `reports/source-insights/by-category/${summary.slug}/README.md`, summary.korean);
      return `| ${detail} | ${profile.useCase} | ${profile.strength} | ${profile.gap} | ${repoLink} | ${profile.decision} |`;
    })
    .join("\n");
  return `| 카테고리 | 읽는 목적 | 강점 | 약점/검증 포인트 | 대표 레포 | 판단 |
| --- | --- | --- | --- | --- | --- |
${rows}
`;
}

function renderPairwiseComparisonTable(pairs, baseDir, limit = 20) {
  const rows = pairs.slice(0, limit)
    .map((pair) => {
      const left = linkFrom(baseDir, `reports/source-insights/by-category/${pair.left}/README.md`, pair.leftKorean);
      const right = linkFrom(baseDir, `reports/source-insights/by-category/${pair.right}/README.md`, pair.rightKorean);
      return `| ${left} ↔ ${right} | ${pair.score} | ${pair.contrast} | ${pair.decision} |`;
    })
    .join("\n");
  return `| 비교 | 차이 점수 | 가장 갈리는 축 | 읽는 판단 |
| --- | ---: | --- | --- |
${rows}
`;
}

function renderRepoDecisionTable(repoComparisons, baseDir, limit = 18) {
  const rows = repoComparisons.slice(0, limit).map((repo) => {
    const name = repo.url ? externalLink(repo.name, repo.url) : tableText(repo.name);
    const links = [
      repo.sourceDeepDivePath ? linkFrom(baseDir, repo.sourceDeepDivePath, "소스 딥다이브") : null,
      repo.reportPath ? linkFrom(baseDir, repo.reportPath, "보고서") : null,
      repo.localPath ? linkFrom(baseDir, repo.localPath, "소스") : null
    ].filter(Boolean).join(" / ");
    return `| ${repo.rank} | ${name} | ${repo.compareScore} | ${repo.trendScore} | ${tableText(repo.language)} | ${tableText(repo.reason)} | ${tableText(repo.position)} | ${tableText(repo.risk)} | ${links} |`;
  }).join("\n");
  return `| 순위 | 레포 | 비교 점수 | 트렌드 점수 | 언어 | 왜 봐야 하나 | 카테고리 안에서의 위치 | 위험/확인 | 링크 |
| ---: | --- | ---: | ---: | --- | --- | --- | --- | --- |
${rows}
`;
}

function renderComparativeReport(data) {
  const baseDir = "reports/source-insights";
  const topPair = data.comparativeInsights.pairwise[0];
  return `# 소스 인사이트 상세 비교 리포트

생성 시각: ${generatedAt}

## 요약

- 조사 단위: ${data.categories.length}개 카테고리와 ${data.repositories.length.toLocaleString("en-US")}개 레포를 같은 축으로 비교한 판단형 리포트입니다.
- 비교 축: 트렌드 연결률, 글로벌/한국 비중, MCP/retrieval/spec/eval/security/container/instruction coverage, 소스 깊이, 레포당 핵심 참조입니다.
- 가장 큰 차이가 나는 쌍: ${topPair ? `${topPair.leftKorean} ↔ ${topPair.rightKorean}` : "없음"}입니다.

## 총평

이 리포트는 “어느 카테고리를 먼저 봐야 하는가”, “각 카테고리에서 대표 레포는 무엇인가”, “서로 무엇이 다르게 구현되는가”를 한 번에 보도록 만든 생성형 비교 보고서입니다. 단순 star 순위가 아니라 실제 소스에서 확인된 feature/bucket/위험 신호를 기준으로 판단합니다.

${renderNavigation(baseDir)}

## 읽는 법

- 차이 점수는 두 카테고리의 트렌드 연결률, 지역 비중, MCP/retrieval/spec/eval/security/container/instruction coverage, 소스 깊이, 핵심 참조 밀도 차이를 합친 값입니다. 점수가 클수록 같은 AI 오픈소스라도 설계 초점이 멀리 떨어져 있습니다.
- 대표 레포는 star만으로 고르지 않고, trendScore, compareScore, source depth, key source reference, 실제 파일 bucket을 같이 본 후보입니다.
- 강점은 카테고리 안에서 많이 반복되는 구현 표면입니다. 약점/검증 포인트는 실제 적용 전에 직접 확인해야 하는 공백입니다.
- 레포별 판단표의 “왜 봐야 하나”는 그 레포에서 확인된 MCP, retrieval, spec, eval, security, CLI, 배포 같은 구조 신호를 사람이 읽기 좋은 문장으로 압축한 것입니다.

## 카테고리 의사결정 표

${renderCategoryDecisionTable(data.categories, baseDir)}

## 카테고리 간 차이 전체 비교

${renderPairwiseComparisonTable(data.comparativeInsights.pairwise, baseDir, 45)}

## 카테고리별 대표 레포 판단표

${data.categories.map((summary) => `### ${summary.korean}

${summary.comparisonProfile.decision}

${renderRepoDecisionTable(summary.repoComparisons, baseDir, 12)}
`).join("\n")}

## 읽는 결론

1. 에이전트 실행 구조를 보려면 에이전트 하네스/MCP와 코딩 에이전트/IDE를 먼저 비교합니다.
2. 지식 지속성은 LLM 위키/RAG/지식베이스와 데이터/벡터 플랫폼을 같이 읽어야 ingestion과 storage의 책임 분리가 보입니다.
3. 운영 품질은 평가/관측/품질, 보안/거버넌스/안전, AI 인프라/서빙을 함께 봐야 검증, 권한, 배포 표면이 이어집니다.
4. 스펙 드리븐/요구사항은 아직 트렌드 연결이 약하므로, 대표 레포의 문서와 테스트 trace를 직접 확인하는 방식이 더 중요합니다.
`;
}

function renderMainReadme(data) {
  const baseDir = "reports/source-insights";
  return `# 소스 트렌드 인사이트

생성 시각: ${generatedAt}

## 요약

- 조사 단위: 로컬에 클론된 ${data.totals.repositories.toLocaleString("en-US")}개 소스 레포의 소스 심층 스캔 결과를 카테고리별로 다시 집계했습니다.
- 포함 범위: 카테고리 ${data.categories.length}개, key source reference ${data.totals.keyReferences.toLocaleString("en-US")}개, 레포별 비교 row ${data.repositories.length.toLocaleString("en-US")}개입니다.
- 탐색 방식: 카테고리 한눈에 보기에서 큰 흐름을 보고, 레포별 특징 비교에서 레포별 특징과 링크를 따라가면 됩니다.

## 총평

현재 소스 트렌드는 에이전트 하네스/MCP, RAG/지식베이스, AI 인프라, 개발 도구가 가장 큰 덩어리로 잡힙니다. 단순 star 순위보다 실제 소스에서 보이는 entrypoint, MCP, retrieval, spec, eval, security, CI/container, agent instruction 경로가 더 유용한 비교 축입니다. 이 보고서는 외부 트렌드 신호를 방향성 확인에만 쓰고, 최종 판단은 로컬 소스의 파일 경로 근거와 레포별 소스 딥다이브 링크에 둡니다.

${renderNavigation(baseDir)}

## 확인한 외부 트렌드 신호

${renderExternalTrendSources()}

## 카테고리 한눈에 보기

${renderCategoryTable(data.categories, baseDir)}

## 카테고리 의사결정 비교

${renderCategoryDecisionTable(data.categories, baseDir)}

## 가장 차이가 큰 카테고리 비교

${renderPairwiseComparisonTable(data.comparativeInsights.pairwise, baseDir, 12)}

## 카테고리별 핵심 포인트

${renderCategorySummaryBlocks(data.categories, baseDir)}

## 레포별 특징 비교

${renderRepositoryComparisonTable(data.repositories, baseDir, 120)}

## 데이터 파일

| 데이터 | 활용 방식 |
| --- | --- |
| ${linkFrom(baseDir, "data/source-trend-insights.json", "data/source-trend-insights.json")} | 전체 카테고리 집계와 레포 비교 row. |
| ${linkFrom(baseDir, "data/report-tables/source-category-insights.csv", "data/report-tables/source-category-insights.csv")} | 스프레드시트용 카테고리 인사이트 표. |
| ${linkFrom(baseDir, "data/report-tables/source-category-comparisons.csv", "data/report-tables/source-category-comparisons.csv")} | 카테고리별 강점/약점/판단 비교 표. |
| ${linkFrom(baseDir, "data/report-tables/source-repo-feature-comparison.csv", "data/report-tables/source-repo-feature-comparison.csv")} | 스프레드시트용 전체 레포 feature 비교 표. |
`;
}

function renderByCategoryIndex(summaries) {
  const baseDir = "reports/source-insights/by-category";
  return `# 카테고리별 소스 인사이트

생성 시각: ${generatedAt}

## 요약

- 조사 단위: source trend insight를 카테고리별 README로 나눈 인덱스입니다.
- 포함 범위: ${summaries.length}개 카테고리, ${sum(summaries.map((summary) => summary.count)).toLocaleString("en-US")}개 레포입니다.
- 탐색 방식: 각 카테고리 README에서 trend signal, source feature, 대표 레포, 위험 신호를 같이 봅니다.

## 총평

카테고리별 페이지는 같은 유형의 레포를 서로 비교하기 위한 입구입니다. 전체 순위는 source-insights 메인 README가 빠르고, 특정 주제의 설계 패턴과 대표 레포를 고를 때는 이 인덱스에서 내려가는 편이 좋습니다.

${renderNavigation(baseDir)}

## 카테고리 의사결정 비교

${renderCategoryDecisionTable(summaries, baseDir)}

## 카테고리

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
  if (!rows) return `### ${title}\n\n_감지된 신호가 없습니다._\n`;
  return `### ${title}

| 신호 | 수 |
| --- | ---: |
${rows}
`;
}

function renderCategoryReadme(summary) {
  const baseDir = `reports/source-insights/by-category/${summary.slug}`;
  return `# ${summary.title} 소스 인사이트

생성 시각: ${generatedAt}

${summary.lens}

## 요약

- 조사 단위: ${summary.korean} 카테고리에 속한 ${summary.count}개 source-scanned 레포입니다.
- 포함 범위: trend-linked ${summary.trendRepoCount}개, key source reference ${summary.keyReferenceTotal}개, median source depth ${summary.sourceDepthMedian}입니다.
- 탐색 방식: 카테고리 인사이트를 먼저 보고, 상위 레포 비교의 소스 딥다이브 링크를 따라 구현 근거를 확인합니다.

## 총평

${summary.insights[0]} 이 카테고리의 비교 핵심은 star 순위가 아니라 dominant features, evidence buckets, validation surface, risk category를 같은 기준으로 맞춰 보는 것입니다.

${renderNavigation(baseDir)}

## 카테고리 인사이트

${renderInsightList(summary.insights)}

## 이 카테고리 비교 총평

| 항목 | 판단 |
| --- | --- |
| 읽는 목적 | ${summary.comparisonProfile.useCase} |
| 강점 | ${summary.comparisonProfile.strength} |
| 약점/검증 포인트 | ${summary.comparisonProfile.gap} |
| 대표 feature | ${summary.comparisonProfile.featureSummary} |
| 대표 bucket | ${summary.comparisonProfile.bucketSummary} |
| 대표 언어 | ${summary.comparisonProfile.topLanguages} |
| 소스 근거 위치 | ${summary.comparisonProfile.depthPosition}, 레포당 핵심 참조 ${summary.comparisonProfile.referenceDensity}개 |
| 결론 | ${summary.comparisonProfile.decision} |

## 트렌드/소스 지표

| 항목 | 값 |
| --- | --- |
| 레포 수 | ${summary.count} |
| 트렌드 연결 레포 | ${summary.trendRepoCount} |
| 글로벌 / 한국 트렌드 수 | ${summary.globalTrendCount} / ${summary.koreaTrendCount} |
| 글로벌/한국 동시 포착 | ${summary.bothTrendCount} |
| 최대 / 중앙 트렌드 점수 | ${summary.trendScoreMax} / ${summary.trendScoreMedian} |
| 전체 / 중앙 stars | ${summary.starsTotal} / ${summary.starsMedian} |
| 핵심 소스 참조 | ${summary.keyReferenceTotal} |
| 중앙 파일 수 | ${summary.fileCountMedian} |

## 소스 feature 분포

${renderCountTable(summary.featureCounts, "주요 feature")}

${renderCountTable(summary.patternCounts, "구조 패턴")}

${renderCountTable(summary.bucketCoverage, "근거 bucket coverage")}

${renderCountTable(summary.dependencyGroupCounts, "의존성 그룹")}

${renderCountTable(summary.commandCounts, "명령 표면")}

${renderCountTable(summary.riskCounts, "위험 카테고리")}

## 상위 트렌드 레포

${renderRepositoryComparisonTable(summary.topTrendRepositories.length ? summary.topTrendRepositories : summary.topRepositories, baseDir, 40)}

## 대표 레포 판단표

${renderRepoDecisionTable(summary.repoComparisons, baseDir, 18)}

## 상위 레포 비교

${renderRepositoryComparisonTable(summary.topRepositories, baseDir, 80)}

## 위험 신호 Watchlist

${summary.topRiskRepositories.length ? renderRepositoryComparisonTable(summary.topRiskRepositories, baseDir, 30) : "_이 카테고리에 소스 위험 신호 row가 없습니다._\n"}
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

function categoryComparisonCsvRows(summaries) {
  return summaries.map((summary) => ({
    slug: summary.slug,
    korean: summary.korean,
    repositories: summary.count,
    trendHeat: summary.comparisonProfile.trendHeat,
    useCase: summary.comparisonProfile.useCase,
    strength: summary.comparisonProfile.strength,
    gap: summary.comparisonProfile.gap,
    decision: summary.comparisonProfile.decision,
    representativeRepo: summary.topRepositories[0]?.name || "",
    topFeature: summary.comparisonProfile.topFeature,
    topBucket: summary.comparisonProfile.topBucket,
    topLanguages: summary.comparisonProfile.topLanguages,
    featureSummary: summary.comparisonProfile.featureSummary,
    bucketSummary: summary.comparisonProfile.bucketSummary,
    referenceDensity: summary.comparisonProfile.referenceDensity,
    depthPosition: summary.comparisonProfile.depthPosition
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
  const comparativeInsights = enrichComparativeInsights(categorySummaries);

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
    comparativeInsights,
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
  await writeFile(outputComparisonCsv, renderCsv([
    "slug", "korean", "repositories", "trendHeat", "useCase", "strength", "gap", "decision", "representativeRepo",
    "topFeature", "topBucket", "topLanguages", "featureSummary", "bucketSummary", "referenceDensity", "depthPosition"
  ], categoryComparisonCsvRows(categorySummaries)));
  await writeFile(outputRepoCsv, renderCsv([
    "name", "url", "category", "categoryKorean", "region", "language", "stars", "forks", "trendScore", "trendScopes",
    "compareScore", "maturity", "evidence", "fileCount", "dirCount", "sourceDepthScore", "keyReferenceCount",
    "features", "dominantBuckets", "dependencyGroups", "commandCategories", "riskCategories", "risks", "standout",
    "sourceDeepDivePath", "reportPath", "localPath"
  ], repoCsvRows(repositories)));

  await writeFile(path.join(outputReportDir, "README.md"), renderMarkdown(renderMainReadme(output)));
  await writeFile(path.join(outputReportDir, "comparative-report.md"), renderMarkdown(renderComparativeReport(output)));
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
