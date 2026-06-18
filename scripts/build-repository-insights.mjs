import { existsSync } from "node:fs";
import { mkdir, readFile, readdir, rm, stat, writeFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const generatedAt = new Date().toISOString();
const outputDataFile = path.join(root, "data", "repository-insights.json");
const outputCsvFile = path.join(root, "data", "report-tables", "repository-insights.csv");
const outputReportDir = path.join(root, "reports", "repository-insights");
const outputByRoleDir = path.join(outputReportDir, "by-role");

const roleDefinitions = [
  {
    slug: "coding-agent-ide",
    title: "코딩 에이전트/IDE",
    korean: "코딩 에이전트/IDE",
    priority: 90,
    categories: ["coding-agents-ides"],
    keywords: ["codex", "claude", "aider", "openhands", "cline", "roo", "gemini", "ide", "code review", "coding agent"]
  },
  {
    slug: "agent-harness-mcp",
    title: "에이전트 하네스/MCP",
    korean: "에이전트 하네스/MCP",
    priority: 85,
    categories: ["agent-harness-orchestration", "mcp-tools-protocols"],
    keywords: ["mcp", "harness", "agent", "tool", "workflow", "orchestration", "skill"]
  },
  {
    slug: "llm-wiki-rag",
    title: "LLM 위키/RAG/지식베이스",
    korean: "LLM 위키/RAG/지식베이스",
    priority: 80,
    categories: ["llm-wiki-rag-knowledge", "context-memory"],
    keywords: ["rag", "wiki", "knowledge", "retrieval", "graphrag", "memory", "document"]
  },
  {
    slug: "spec-driven",
    title: "스펙 드리븐/요구사항",
    korean: "스펙 드리븐/요구사항",
    priority: 78,
    categories: ["spec-driven-requirements"],
    keywords: ["spec", "requirements", "traceability", "acceptance", "sdd", "kiro"]
  },
  {
    slug: "eval-observability",
    title: "평가/관측/품질",
    korean: "평가/관측/품질",
    priority: 72,
    categories: ["evals-observability-quality"],
    keywords: ["eval", "benchmark", "observability", "trace", "quality", "test", "monitoring"]
  },
  {
    slug: "ai-infrastructure-serving",
    title: "AI 인프라/서빙",
    korean: "AI 인프라/서빙",
    priority: 70,
    categories: ["ai-infrastructure-serving", "local-llm-models"],
    keywords: ["vllm", "inference", "serving", "llama", "ollama", "gpu", "model"]
  },
  {
    slug: "data-vector-platform",
    title: "데이터/벡터 플랫폼",
    korean: "데이터/벡터 플랫폼",
    priority: 68,
    categories: ["data-platforms-vector-databases"],
    keywords: ["vector", "database", "qdrant", "milvus", "weaviate", "chroma", "embedding", "index"]
  },
  {
    slug: "security-governance",
    title: "보안/거버넌스/안전",
    korean: "보안/거버넌스/안전",
    priority: 65,
    categories: ["security-governance-safety"],
    keywords: ["security", "sandbox", "guardrail", "policy", "scanner", "audit", "permission"]
  },
  {
    slug: "developer-productivity",
    title: "개발 생산성/DevTools",
    korean: "개발 생산성/DevTools",
    priority: 60,
    categories: ["developer-productivity-devtools"],
    keywords: ["devtools", "cli", "sdk", "automation", "github action", "code search", "productivity"]
  },
  {
    slug: "general-ai-open-source",
    title: "일반 AI 오픈소스",
    korean: "일반 AI 오픈소스",
    priority: 10,
    categories: ["global-ai-open-source", "korean-ai-open-source"],
    keywords: ["ai", "llm", "open source"]
  }
];

const roleBySlug = new Map(roleDefinitions.map((role) => [role.slug, role]));

function safeArray(value) {
  return Array.isArray(value) ? value : [];
}

async function readJson(relativePath, fallback = null) {
  const file = path.join(root, relativePath);
  if (!existsSync(file)) return fallback;
  return JSON.parse(await readFile(file, "utf8"));
}

function repoSafeName(name) {
  return String(name || "")
    .replace(/^https:\/\/github\.com\//, "")
    .replace(/\.git$/, "")
    .replaceAll("/", "__")
    .replace(/[^A-Za-z0-9_.-]+/g, "_");
}

function tableText(value) {
  return String(value ?? "").replace(/\s+/g, " ").replaceAll("|", "\\|").trim();
}

function csvValue(value) {
  const text = String(value ?? "");
  return /[",\n]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text;
}

function renderCsv(headers, rows) {
  return [
    headers.map(csvValue).join(","),
    ...rows.map((row) => headers.map((header) => csvValue(row[header])).join(","))
  ].join("\n") + "\n";
}

function linkFrom(baseDir, target, label) {
  if (!target) return "";
  const relative = path.relative(path.join(root, baseDir), path.join(root, target)).replaceAll(path.sep, "/");
  return `[${tableText(label)}](${relative})`;
}

function renderMarkdown(content) {
  return `${content.trimEnd()}\n`;
}

function externalOrText(label, url) {
  if (!url) return tableText(label);
  return `[${tableText(label)}](${url})`;
}

function cleanText(value, max = 220) {
  return String(value || "")
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/[#>*_`[\]()|:-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, max);
}

function slugify(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9가-힣]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

function chooseRole(repo) {
  const haystack = [
    repo.title,
    repo.summary,
    safeArray(repo.categories).join(" "),
    safeArray(repo.originTags).join(" "),
    safeArray(repo.sourceDatasets).join(" ")
  ].join(" ").toLowerCase();
  const matches = roleDefinitions
    .map((role) => {
      const categoryHits = safeArray(role.categories).filter((category) => safeArray(repo.categories).includes(category)).length;
      const keywordHits = safeArray(role.keywords).filter((keyword) => haystack.includes(keyword.toLowerCase())).length;
      return { role, score: categoryHits * 10 + keywordHits + role.priority / 100 };
    })
    .filter((entry) => entry.score > entry.role.priority / 100)
    .sort((a, b) => b.score - a.score || b.role.priority - a.role.priority);
  return matches[0]?.role || roleBySlug.get("general-ai-open-source");
}

function regionSignal(repo) {
  const sources = safeArray(repo.sourceDatasets).join(" ");
  const categories = safeArray(repo.categories).join(" ");
  if (/korea|korean/.test(`${sources} ${categories}`)) return "korea";
  if (/global/.test(`${sources} ${categories}`)) return "global";
  return "mixed";
}

function repoReportCandidates(repo) {
  const safe = repoSafeName(repo.name || repo.title);
  return [
    repo.reportPath,
    `reports/repositories/${safe.replace("__", "-")}.md`,
    `reports/global-trending/repositories/${safe}.md`,
    `reports/korea-trending/repositories/${safe}.md`,
    `reports/llm-wiki/repositories/${safe}.md`,
    `reports/llm-wiki/code-level-repositories/${safe}.md`,
    `reports/clone-structures/${safe}.md`
  ].filter(Boolean);
}

function firstExisting(paths) {
  return paths.find((file) => existsSync(path.join(root, file))) || null;
}

function buildReportMap(reportIndex) {
  const byPath = new Map();
  for (const report of safeArray(reportIndex?.reports)) byPath.set(report.path, report);
  return byPath;
}

function cloneKey(value) {
  return String(value || "").toLowerCase().replace(/^https:\/\/github\.com\//, "").replace(/\.git$/, "");
}

function buildCloneMap(cloneData) {
  const map = new Map();
  for (const item of safeArray(cloneData?.analyses)) {
    for (const key of [item.name, item.dir, item.safeName, item.remote, item.normalizedRemote].filter(Boolean)) {
      map.set(cloneKey(key).replace("__", "/"), item);
      map.set(cloneKey(key), item);
    }
  }
  return map;
}

async function readIfExists(file, maxChars = 12000) {
  if (!existsSync(file)) return "";
  const text = await readFile(file, "utf8");
  return text.slice(0, maxChars);
}

async function inspectSource(localPath, cloneAnalysis = null) {
  if (!localPath) return null;
  const absolute = path.join(root, localPath);
  if (!existsSync(absolute)) return null;
  const entries = await readdir(absolute, { withFileTypes: true }).catch(() => []);
  const dirs = entries.filter((entry) => entry.isDirectory()).map((entry) => entry.name).sort();
  const files = entries.filter((entry) => entry.isFile()).map((entry) => entry.name).sort();
  const fileSet = new Set(files.map((file) => file.toLowerCase()));
  const manifestNames = [
    "package.json", "pyproject.toml", "requirements.txt", "Cargo.toml", "go.mod", "pom.xml",
    "build.gradle", "Dockerfile", "docker-compose.yml", "Makefile", "README.md", "AGENTS.md",
    "CLAUDE.md", "LICENSE"
  ];
  const manifests = manifestNames.filter((name) => fileSet.has(name.toLowerCase()));
  const packageJsonPath = path.join(absolute, "package.json");
  let packageInfo = null;
  if (existsSync(packageJsonPath)) {
    try {
      const pkg = JSON.parse(await readFile(packageJsonPath, "utf8"));
      packageInfo = {
        name: pkg.name || null,
        scripts: Object.keys(pkg.scripts || {}).slice(0, 20),
        dependencies: Object.keys({ ...(pkg.dependencies || {}), ...(pkg.devDependencies || {}) }).slice(0, 80)
      };
    } catch {
      packageInfo = { parseError: true, scripts: [], dependencies: [] };
    }
  }
  const pyproject = await readIfExists(path.join(absolute, "pyproject.toml"), 8000);
  const requirements = await readIfExists(path.join(absolute, "requirements.txt"), 8000);
  const goMod = await readIfExists(path.join(absolute, "go.mod"), 8000);
  const cargoToml = await readIfExists(path.join(absolute, "Cargo.toml"), 8000);
  const dependencyText = [
    safeArray(packageInfo?.dependencies).join(" "),
    pyproject,
    requirements,
    goMod,
    cargoToml
  ].join(" ").toLowerCase();
  const dependencyCues = [
    "openai", "anthropic", "langchain", "llamaindex", "llama-index", "modelcontextprotocol",
    "mcp", "fastapi", "next", "react", "vue", "svelte", "vscode", "electron", "pydantic",
    "torch", "transformers", "vllm", "ollama", "chroma", "qdrant", "milvus", "weaviate",
    "pgvector", "faiss", "playwright", "puppeteer", "docker"
  ].filter((cue) => dependencyText.includes(cue));

  const hasTests = Boolean(cloneAnalysis?.testFiles?.length) || dirs.some((dir) => /test|spec|__tests__/.test(dir.toLowerCase())) || files.some((file) => /\.(test|spec)\./.test(file));
  const hasCi = Boolean(cloneAnalysis?.ciFiles?.length) || dirs.some((dir) => dir === ".github" || dir.toLowerCase().includes("ci"));
  const hasDocs = Boolean(cloneAnalysis?.docs?.length) || dirs.some((dir) => /docs?|website|site/.test(dir.toLowerCase())) || files.some((file) => /^readme/i.test(file));
  const hasDocker = manifests.some((name) => /docker/i.test(name)) || files.some((file) => /docker/i.test(file));
  const hasAgentInstructions = Boolean(cloneAnalysis?.agentInstructionFiles?.length) || manifests.some((name) => /agents|claude/i.test(name)) || files.some((file) => /agents|claude|cursor|copilot/i.test(file));
  const hasSpecArtifacts = Boolean(cloneAnalysis?.specArtifacts?.length) || dirs.some((dir) => /spec|requirements|adr|docs/.test(dir.toLowerCase())) || files.some((file) => /spec|requirements|prd|adr/i.test(file));

  return {
    localPath,
    exists: true,
    topDirectories: dirs.slice(0, 20),
    topFiles: files.slice(0, 20),
    manifests,
    packageInfo,
    dependencyCues: [...new Set(dependencyCues)].slice(0, 20),
    hasTests,
    hasCi,
    hasDocs,
    hasDocker,
    hasAgentInstructions,
    hasSpecArtifacts
  };
}

function evidenceLevel(repo, cloneAnalysis, source, reportPath) {
  if (cloneAnalysis && source && reportPath) return "심층 소스+보고서";
  if (source && reportPath) return "소스+보고서";
  if (cloneAnalysis && reportPath) return "클론 구조+보고서";
  if (source) return "소스만";
  if (reportPath) return "보고서만";
  return "메타데이터만";
}

function architectureSignals(repo, source, cloneAnalysis) {
  const signals = [];
  if (repo.language) signals.push(repo.language);
  if (source?.manifests?.length) signals.push(...source.manifests.slice(0, 5));
  if (source?.dependencyCues?.length) signals.push(...source.dependencyCues.slice(0, 8));
  if (source?.hasTests) signals.push("tests");
  if (source?.hasCi) signals.push("ci");
  if (source?.hasDocs) signals.push("docs");
  if (source?.hasDocker) signals.push("docker");
  if (source?.hasAgentInstructions) signals.push("agent-instructions");
  if (source?.hasSpecArtifacts) signals.push("spec-artifacts");
  if (cloneAnalysis?.fileCount) signals.push(`${cloneAnalysis.fileCount} files`);
  return [...new Set(signals)].slice(0, 18);
}

function maturityBand(repo, source, cloneAnalysis, reportPath) {
  const stars = Number(repo.stars || 0);
  let score = 0;
  if (stars >= 10000) score += 3;
  else if (stars >= 1000) score += 2;
  else if (stars >= 100) score += 1;
  if (source?.hasTests) score += 1;
  if (source?.hasCi) score += 1;
  if (source?.hasDocs) score += 1;
  if (reportPath) score += 1;
  if (cloneAnalysis) score += 1;
  if (score >= 6) return "고신호";
  if (score >= 4) return "안정";
  if (score >= 2) return "초기";
  return "관찰";
}

function strategicUse(repo, role, maturity, evidence) {
  if (role.slug === "coding-agent-ide" && /소스/.test(evidence)) return "코딩 에이전트 참고 구현";
  if (role.slug === "llm-wiki-rag") return "지식/RAG 패턴 참고";
  if (role.slug === "spec-driven") return "스펙 workflow와 요구사항 참고";
  if (role.slug === "agent-harness-mcp") return "도구/하네스 패턴 참고";
  if (role.slug === "eval-observability") return "품질/평가 비교 지점";
  if (maturity === "관찰") return "트렌드 관찰 후보";
  return "아키텍처 비교 지점";
}

function riskNotes(repo, source, cloneAnalysis, reportPath) {
  const risks = [];
  if (!reportPath) risks.push("전용 보고서 링크 없음");
  if (!source) risks.push("로컬 소스 없음");
  if (source && !source.hasTests) risks.push("테스트 신호가 명확하지 않음");
  if (source && !source.hasCi) risks.push("CI 신호가 명확하지 않음");
  if (!repo.license) risks.push("라이선스 메타데이터 없음");
  if (repo.fork) risks.push("fork 레포");
  if (repo.archived) risks.push("archived 레포");
  if (!cloneAnalysis && source) risks.push("더 깊은 구조 스캔 필요");
  return risks.slice(0, 5);
}

function buildInsight(repo, role, source, cloneAnalysis, reportPath, evidence, maturity) {
  const signals = architectureSignals(repo, source, cloneAnalysis);
  const signalText = signals.slice(0, 6).join(", ") || "메타데이터만";
  const summary = cleanText(repo.summary, 120) || "설명 메타데이터가 짧습니다";
  return `${role.korean} 관점에서 ${summary}. 핵심 구조 신호는 ${signalText}이며, ${evidence} 근거 수준으로 ${maturity} 후보로 읽는 것이 좋습니다.`;
}

function buildAssessment(repo, role, risks, strategy) {
  const region = regionSignal(repo);
  const riskText = risks.length ? risks.join(", ") : "큰 메타데이터 위험이 명확하지 않음";
  return `${region} 신호의 ${role.korean} 레포입니다. 활용 관점은 ${strategy}이고, 후속 확인 포인트는 ${riskText}입니다.`;
}

async function buildInsightRows() {
  const categoryIndex = await readJson("data/category-index.json", {});
  const reportIndex = await readJson("data/report-index.json", {});
  const cloneData = await readJson("data/clone-structure-analysis-127.json", {});
  const reportMap = buildReportMap(reportIndex);
  const cloneMap = buildCloneMap(cloneData);
  const repos = safeArray(categoryIndex.items).filter((item) => item.kind === "repository");

  const rows = [];
  for (const repo of repos) {
    const name = repo.name || repo.title;
    const safe = repoSafeName(name);
    const reportPath = firstExisting(repoReportCandidates(repo));
    const report = reportPath ? reportMap.get(reportPath) || null : null;
    const cloneAnalysis = cloneMap.get(cloneKey(name)) || cloneMap.get(safe.toLowerCase()) || null;
    const source = await inspectSource(repo.localPath, cloneAnalysis);
    const role = chooseRole(repo);
    const evidence = evidenceLevel(repo, cloneAnalysis, source, reportPath);
    const maturity = maturityBand(repo, source, cloneAnalysis, reportPath);
    const risks = riskNotes(repo, source, cloneAnalysis, reportPath);
    const strategy = strategicUse(repo, role, maturity, evidence);
    const signals = architectureSignals(repo, source, cloneAnalysis);
    const insight = buildInsight(repo, role, source, cloneAnalysis, reportPath, evidence, maturity);
    const assessment = buildAssessment(repo, role, risks, strategy);
    rows.push({
      id: repo.id,
      name,
      title: repo.title,
      url: repo.url,
      summary: repo.summary,
      role: role.slug,
      roleTitle: role.title,
      roleKorean: role.korean,
      region: regionSignal(repo),
      language: repo.language || null,
      stars: Number(repo.stars || 0),
      forks: Number(repo.forks || 0),
      license: repo.license || null,
      score: Number(repo.score || 0),
      maturity,
      evidence,
      strategy,
      categories: safeArray(repo.categories),
      sourceDatasets: safeArray(repo.sourceDatasets),
      originTags: safeArray(repo.originTags).slice(0, 30),
      localPath: repo.localPath || null,
      reportPath,
      reportTitle: report?.title || null,
      sourceExists: Boolean(source),
      cloneAnalysis: Boolean(cloneAnalysis),
      sourceSignals: signals,
      topDirectories: source?.topDirectories || safeArray(cloneAnalysis?.topDirectories).map((entry) => entry.name || entry.path || entry).slice(0, 20),
      manifests: source?.manifests || safeArray(cloneAnalysis?.manifests).map((entry) => entry.path || entry).slice(0, 20),
      dependencyCues: source?.dependencyCues || [],
      hasTests: Boolean(source?.hasTests || cloneAnalysis?.testFiles?.length),
      hasCi: Boolean(source?.hasCi || cloneAnalysis?.ciFiles?.length),
      hasDocs: Boolean(source?.hasDocs || cloneAnalysis?.docs?.length),
      hasAgentInstructions: Boolean(source?.hasAgentInstructions || cloneAnalysis?.agentInstructionFiles?.length),
      hasSpecArtifacts: Boolean(source?.hasSpecArtifacts || cloneAnalysis?.specArtifacts?.length),
      risks,
      insight,
      assessment
    });
  }
  return rows.sort((a, b) => b.score - a.score || b.stars - a.stars || a.name.localeCompare(b.name));
}

function countsBy(rows, keyFn) {
  return rows.reduce((acc, row) => {
    const key = keyFn(row) || "unknown";
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});
}

function renderInsightTable(rows, baseDir, limit = Infinity) {
  const selected = rows.slice(0, limit);
  if (!selected.length) return "_No repository insights indexed._\n";
  const body = selected.map((repo) => {
    const name = externalOrText(repo.name, repo.url);
    const report = repo.reportPath ? linkFrom(baseDir, repo.reportPath, "보고서") : "";
    const source = repo.localPath ? linkFrom(baseDir, repo.localPath, "소스") : "";
    const links = [report, source].filter(Boolean).join(" / ");
    return `| ${name} | ${tableText(repo.roleKorean)} | ${repo.stars} | ${tableText(repo.maturity)} | ${tableText(repo.evidence)} | ${tableText(repo.insight)} | ${tableText(repo.risks.join(", ") || "없음")} | ${links} |`;
  }).join("\n");
  return `| 레포 | 역할 | Stars | 성숙도 | 근거 수준 | 인사이트 | 위험 신호 | 링크 |\n| --- | --- | ---: | --- | --- | --- | --- | --- |\n${body}\n`;
}

function renderRoleSummary(rows, baseDir) {
  const counts = countsBy(rows, (row) => row.role);
  return Object.entries(counts)
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .map(([role, count]) => {
      const def = roleBySlug.get(role);
      return `| ${linkFrom(baseDir, `reports/repository-insights/by-role/${role}/README.md`, def?.title || role)} | ${count} | ${tableText(def?.korean || role)} |`;
    })
    .join("\n");
}

function renderNavigation(baseDir) {
  return `## 바로가기

| 이동 | 여기서 볼 것 |
| --- | --- |
| ${linkFrom(baseDir, "README.md", "전체 시작 README")} | 레포 전체 목적, 핵심 카테고리, 읽는 순서. |
| ${linkFrom(baseDir, "reports/README.md", "전체 보고서 읽기 지도")} | 모든 보고서의 시작점, 주제, 폴더 지도. |
| ${linkFrom(baseDir, "reports/tables/README.md", "표/CSV 목차")} | 표로 빠르게 훑고 CSV로 비교하는 입구. |
| ${linkFrom(baseDir, "reports/repository-insights/README.md", "레포별 인사이트")} | 레포별 총평과 역할군 페이지. |
| ${linkFrom(baseDir, "reports/source-deep-dives/README.md", "소스 딥다이브")} | 로컬 클론에서 뽑은 파일 경로 근거. |
| ${linkFrom(baseDir, "reports/source-insights/README.md", "소스 트렌드 인사이트")} | 카테고리별 트렌드와 레포별 특징 비교. |
| ${linkFrom(baseDir, "reports/categories/README.md", "근거 카테고리")} | 오픈소스, 논문, 발표, 참고자료의 artifact 분류. |
`;
}

function renderMainReadme(rows, roleSummaries) {
  const baseDir = "reports/repository-insights";
  const evidenceCounts = countsBy(rows, (row) => row.evidence);
  const maturityCounts = countsBy(rows, (row) => row.maturity);
  const withReport = rows.filter((row) => row.reportPath).length;
  const withSource = rows.filter((row) => row.sourceExists).length;
  return `# 레포별 인사이트

생성 시각: ${generatedAt}

이 보고서는 기존 카테고리/주제/폴더 인덱스 위에 레포별 판단 row를 얹어, 어떤 레포를 어떤 관점으로 읽어야 하는지 바로 볼 수 있게 만든 표 중심 README입니다.

## 요약

- 조사 단위: 레포 항목 ${rows.length.toLocaleString("en-US")}개를 레포별로 다시 분석한 상세 인사이트 표입니다.
- 포함 범위: 로컬 소스, 기존 보고서 링크, 카테고리 멤버십, 언어/stars/license, 소스 manifest 신호를 합쳐 역할, 성숙도, 근거 수준, 인사이트, 위험 신호를 계산했습니다.
- 탐색 방식: 이 README에서 전체 상위 레포를 보고, 역할군별 README로 들어가면 각 역할군의 모든 레포 인사이트를 볼 수 있습니다.

## 총평

기존 표가 “어디에 무엇이 있는지”를 보여줬다면, 이 보고서는 “각 레포를 어떤 관점으로 읽어야 하는지”를 정리합니다. 각 row의 인사이트와 위험 신호를 먼저 보고, 보고서/소스 링크로 들어가면 조사 시간을 줄일 수 있습니다. CSV와 JSON은 전체 ${rows.length.toLocaleString("en-US")}개 레포를 빠짐없이 담습니다.

${renderNavigation(baseDir)}

## 범위

| 항목 | 수 |
| --- | ---: |
| 레포별 인사이트 | ${rows.length} |
| 보고서 링크가 있는 레포 | ${withReport} |
| 로컬 소스가 있는 레포 | ${withSource} |
| 역할군 | ${roleSummaries.length} |

## 근거 수준 분포

${Object.entries(evidenceCounts).sort((a, b) => b[1] - a[1]).map(([key, count]) => `- ${key}: ${count}`).join("\n")}

## 성숙도 분포

${Object.entries(maturityCounts).sort((a, b) => b[1] - a[1]).map(([key, count]) => `- ${key}: ${count}`).join("\n")}

## 역할군 목차

| 역할군 README | 레포 수 | 한국어 라벨 |
| --- | ---: | --- |
${renderRoleSummary(rows, baseDir)}

## 레포별 핵심 인사이트

${renderInsightTable(rows, baseDir, 120)}

## 데이터 파일

- ${linkFrom(baseDir, "data/repository-insights.json", "data/repository-insights.json")}
- ${linkFrom(baseDir, "data/report-tables/repository-insights.csv", "data/report-tables/repository-insights.csv")}
`;
}

function renderRoleIndex(rows) {
  const baseDir = "reports/repository-insights/by-role";
  return `# 역할군별 레포 인사이트

생성 시각: ${generatedAt}

## 요약

- 조사 단위: repository insights를 역할군별로 나눈 하위 목차입니다.
- 포함 범위: ${rows.length.toLocaleString("en-US")}개 레포, ${roleDefinitions.length}개 역할군입니다.
- 탐색 방식: 역할 README로 들어가면 해당 역할군 레포의 인사이트, 위험 신호, 보고서/소스 링크를 한 표에서 볼 수 있습니다.

## 총평

역할별 페이지는 비슷한 레포를 비교하기 위한 입구입니다. 코딩 에이전트, RAG, MCP, spec-driven, eval, infrastructure처럼 읽는 목적이 다를 때 이 목차에서 시작하는 것이 가장 빠릅니다.

${renderNavigation(baseDir)}

## 역할군

| 역할군 README | 레포 수 | 한국어 라벨 |
| --- | ---: | --- |
${renderRoleSummary(rows, baseDir)}
`;
}

function renderRoleReadme(role, rows) {
  const baseDir = `reports/repository-insights/by-role/${role.slug}`;
  const withReport = rows.filter((row) => row.reportPath).length;
  const withSource = rows.filter((row) => row.sourceExists).length;
  return `# ${role.title}

생성 시각: ${generatedAt}

${role.korean} 역할군에 속한 repository-level insight 목록입니다.

## 요약

- 조사 단위: \`${role.slug}\` 역할로 분류된 레포 묶음입니다.
- 포함 범위: ${rows.length.toLocaleString("en-US")}개 레포, 보고서 링크 ${withReport}, 로컬 소스 ${withSource}.
- 탐색 방식: Insight로 읽을 이유를 확인하고, Risks로 후속 검증 포인트를 본 뒤 report/source 링크로 들어가면 됩니다.

## 총평

이 역할군은 같은 문제를 서로 다른 구현 방식으로 푸는 레포들을 비교하기 좋습니다. 성숙도와 근거 수준이 높은 항목은 참고 구현으로, 관찰 또는 메타데이터만 있는 항목은 트렌드 후보로 읽는 편이 적절합니다.

${renderNavigation(baseDir)}

## 레포별 인사이트

${renderInsightTable(rows, baseDir)}
`;
}

function buildCsvRows(rows) {
  return rows.map((row) => ({
    name: row.name,
    url: row.url,
    role: row.role,
    roleKorean: row.roleKorean,
    region: row.region,
    language: row.language,
    stars: row.stars,
    forks: row.forks,
    license: row.license,
    score: row.score,
    maturity: row.maturity,
    evidence: row.evidence,
    strategy: row.strategy,
    categories: row.categories.join(";"),
    sourceDatasets: row.sourceDatasets.join(";"),
    sourceSignals: row.sourceSignals.join(";"),
    dependencyCues: row.dependencyCues.join(";"),
    risks: row.risks.join(";"),
    insight: row.insight,
    assessment: row.assessment,
    reportPath: row.reportPath,
    localPath: row.localPath
  }));
}

async function main() {
  const rows = await buildInsightRows();
  const roleSummaries = Object.entries(countsBy(rows, (row) => row.role))
    .map(([role, count]) => ({ role, count, ...roleBySlug.get(role) }))
    .sort((a, b) => b.count - a.count || a.role.localeCompare(b.role));

  await rm(outputReportDir, { recursive: true, force: true });
  await mkdir(outputReportDir, { recursive: true });
  await mkdir(outputByRoleDir, { recursive: true });
  await mkdir(path.dirname(outputCsvFile), { recursive: true });
  await mkdir(path.dirname(outputDataFile), { recursive: true });

  await writeFile(outputDataFile, JSON.stringify({
    generatedAt,
    description: "Repository-level insight index generated from category metadata, report links, and local source signals.",
    count: rows.length,
    roleSummaries,
    repositories: rows
  }, null, 2));

  await writeFile(outputCsvFile, renderCsv([
    "name", "url", "role", "roleKorean", "region", "language", "stars", "forks", "license",
    "score", "maturity", "evidence", "strategy", "categories", "sourceDatasets",
    "sourceSignals", "dependencyCues", "risks", "insight", "assessment", "reportPath", "localPath"
  ], buildCsvRows(rows)));

  await writeFile(path.join(outputReportDir, "README.md"), renderMarkdown(renderMainReadme(rows, roleSummaries)));
  await writeFile(path.join(outputByRoleDir, "README.md"), renderMarkdown(renderRoleIndex(rows)));

  for (const summary of roleSummaries) {
    const role = roleBySlug.get(summary.role) || summary;
    const roleRows = rows.filter((row) => row.role === summary.role);
    const roleDir = path.join(outputByRoleDir, role.slug);
    await mkdir(roleDir, { recursive: true });
    await writeFile(path.join(roleDir, "README.md"), renderMarkdown(renderRoleReadme(role, roleRows)));
  }

  console.error(`repository insights: ${rows.length}`);
  console.error(`role groups: ${roleSummaries.length}`);
}

await main();
