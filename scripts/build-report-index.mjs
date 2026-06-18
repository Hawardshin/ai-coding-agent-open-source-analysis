import { mkdir, readFile, readdir, rm, stat, writeFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const generatedAt = new Date().toISOString();
const reportsDir = path.join(root, "reports");
const outputDataFile = path.join(root, "data", "report-index.json");
const outputDataDir = path.join(root, "data", "report-categories");
const outputDataTablesDir = path.join(root, "data", "report-tables");
const outputReportDir = path.join(root, "reports", "by-topic");
const outputReportTablesDir = path.join(root, "reports", "tables");
const outputReportsReadme = path.join(root, "reports", "README.md");

const taxonomy = [
  {
    slug: "start-here",
    title: "먼저 읽기",
    description: "전체 조사 흐름과 핵심 시작점을 빠르게 잡는 상위 지도입니다.",
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
      /^reports\/spec-driven\/00-/,
      /^reports\/repository-insights\/README\.md$/,
      /^reports\/source-deep-dives\/README\.md$/
    ]
  },
  {
    slug: "category-guides",
    title: "카테고리별 근거",
    description: "오픈소스, 연구, 발표, 트렌드 근거를 artifact 기준으로 묶은 분류 지도입니다.",
    keywords: [],
    pathRules: [/^reports\/categories\//]
  },
  {
    slug: "full-source-scan",
    title: "전체 소스 스캔/코드 검색",
    description: "코딩 에이전트가 소스를 발견하고 인덱싱하고 사용자 의도와 코드 위치를 연결하는 방식입니다.",
    keywords: ["source scan", "repo map", "symbol graph", "code search", "file discovery"],
    pathRules: [/^reports\/full-source-scan\//, /^reports\/full-source-scan-research-summary/, /^reports\/00-source-inventory\.md$/]
  },
  {
    slug: "source-code-deep-dives",
    title: "소스 코드 딥다이브",
    description: "로컬 클론에서 뽑은 entrypoint, runtime, retrieval, spec, eval, security, CI/container 경로 근거입니다.",
    keywords: ["source deep scan", "source insight", "entrypoint", "runtime", "source path", "implementation evidence", "소스"],
    pathRules: [/^reports\/source-deep-dives\//, /^reports\/source-insights\//, /source-deep-scan/, /source-trend-insights/]
  },
  {
    slug: "coding-agents",
    title: "코딩 에이전트/IDE",
    description: "터미널 에이전트, IDE 에이전트, 코드 리뷰 에이전트, 코딩 보조 도구를 묶은 주제입니다.",
    keywords: ["codex", "claude", "aider", "openhands", "cline", "roo", "gemini", "coding agent", "ide", "code review"],
    pathRules: [/^reports\/repositories\//, /^reports\/agent-harness\//]
  },
  {
    slug: "agent-harness",
    title: "에이전트 하네스/MCP/오케스트레이션",
    description: "MCP, tool registry, hooks, skills, orchestration, workflow 실행 기반을 보는 주제입니다.",
    keywords: ["harness", "mcp", "orchestration", "skills", "hooks", "tool-calling", "agent workflow"],
    pathRules: [/^reports\/agent-harness\//]
  },
  {
    slug: "spec-driven",
    title: "스펙 드리븐/요구사항",
    description: "스펙 추출, 요구사항, 추적성, acceptance criteria, SDD 근거를 보는 주제입니다.",
    keywords: ["spec", "requirements", "traceability", "acceptance", "sdd", "kiro", "openspec"],
    pathRules: [/spec-driven/, /spec-driven-evidence/]
  },
  {
    slug: "llm-wiki",
    title: "LLM 위키/RAG/지식베이스",
    description: "LLM wiki, GraphRAG, 문서 지식베이스, ingestion, retrieval, provenance를 보는 주제입니다.",
    keywords: ["llm wiki", "wiki", "rag", "graphrag", "knowledge", "document", "retrieval"],
    pathRules: [/^reports\/llm-wiki\//]
  },
  {
    slug: "presentations-conferences",
    title: "발표/컨퍼런스",
    description: "컨퍼런스, 키노트, 웨비나, 발표 방법론과 산업 신호를 모은 주제입니다.",
    keywords: ["conference", "presentation", "keynote", "summit", "devday", "webinar", "발표"],
    pathRules: [/^reports\/presentations\//]
  },
  {
    slug: "ai-usage-trends",
    title: "AI 활용 트렌드",
    description: "빅테크, Amazon/AWS, 한국 컨퍼런스, 기업 도입 신호를 모은 최근 AI 활용 트렌드입니다.",
    keywords: ["ai usage", "agentic enterprise", "enterprise adoption"],
    pathRules: [/ai-usage-trends/, /bigtech-korea/, /^reports\/categories\/ai-usage-trends\//]
  },
  {
    slug: "global-trending-open-source",
    title: "글로벌 트렌딩 오픈소스",
    description: "전세계 트렌딩 오픈소스 코퍼스와 레포별 보고서를 묶은 주제입니다.",
    keywords: [],
    pathRules: [/^reports\/global-trending\//, /^reports\/categories\/global-ai-open-source\//]
  },
  {
    slug: "korea-trending-open-source",
    title: "한국 트렌딩 오픈소스",
    description: "한국 개발자 커뮤니티, 한국 AI/MCP/RAG 프로젝트, 국내 트렌드 보고서를 묶은 주제입니다.",
    keywords: ["한국 개발자 커뮤니티"],
    pathRules: [/^reports\/korea-trending\//, /^reports\/categories\/korean-ai-open-source\//]
  },
  {
    slug: "adjacent-infrastructure",
    title: "인접 AI 인프라",
    description: "컨텍스트 엔지니어링, RAG 인프라, 벡터 DB, 로컬 LLM 서빙, 평가/관측성을 보는 주제입니다.",
    keywords: ["vllm", "local llm", "vector database", "observability", "eval harness"],
    pathRules: [/^reports\/adjacent-tech/, /^reports\/adjacent-tech-source-inventory/, /^reports\/categories\/ai-infrastructure-serving\//, /^reports\/categories\/data-platforms-vector-databases\//]
  },
  {
    slug: "clone-structure-inventory",
    title: "클론 구조/인벤토리",
    description: "로컬 클론 목록, 구조 분석, manifest, source directory, 레포별 구조 보고서입니다.",
    keywords: ["source dirs"],
    pathRules: [/^reports\/clone-structures\//, /^reports\/clone-structure-analysis-127\.md$/, /^reports\/current-clone-inventory\.md$/]
  },
  {
    slug: "comparisons",
    title: "비교/유사도 지도",
    description: "레포 간 비교, taxonomy matrix, similarity cluster를 보는 주제입니다.",
    keywords: ["comparison", "compare", "taxonomy", "cluster", "matrix", "similarity", "비교"],
    pathRules: [/^reports\/comparisons\//, /^reports\/repository-insights\//, /^reports\/source-deep-dives\//, /^reports\/source-insights\//]
  },
  {
    slug: "research-foundations",
    title: "연구 근거",
    description: "논문, 근거자료, 충돌 이론, 연구 종합 보고서를 모은 주제입니다.",
    keywords: ["evidence catalog", "research synthesis", "근거자료", "논문"],
    pathRules: [/^reports\/research\//, /evidence-corpus/, /^reports\/categories\/research-evidence\//]
  },
  {
    slug: "source-catalogs-and-inventories",
    title: "소스 카탈로그/인벤토리",
    description: "조사에 사용한 소스 카탈로그, 인벤토리, 클론 목록, evidence ledger입니다.",
    keywords: ["source catalog", "source inventory", "evidence corpus", "clone inventory"],
    pathRules: [/source-inventory/, /source-catalog/, /current-clone-inventory/, /evidence-corpus/, /clone-inventory/]
  },
  {
    slug: "repository-deep-dives",
    title: "레포별 딥다이브",
    description: "핵심 에이전트, 글로벌/한국 트렌딩, LLM wiki, 클론 구조의 레포별 상세 보고서입니다.",
    keywords: [],
    pathRules: [/\/repositories\//, /^reports\/clone-structures\//, /^reports\/repository-insights\//, /^reports\/source-deep-dives\//]
  }
];

const folderGuides = [
  {
    dir: "reports/adjacent-tech",
    title: "인접 AI 인프라 보고서",
    description: "컨텍스트 엔지니어링, RAG, 로컬 LLM 서빙, 벡터 DB, 평가, 관측성, 하네스 인프라를 묶은 보고서입니다.",
    role: "인접 스택 종합과 소스맵."
  },
  {
    dir: "reports/agent-harness",
    title: "에이전트 하네스 보고서",
    description: "Claude Code, Codex, harness 구성, MCP, hooks, skills, orchestration 자료를 묶은 보고서입니다.",
    role: "에이전트 실행과 하네스 연구."
  },
  {
    dir: "reports/clone-structures",
    title: "클론 구조 보고서",
    description: "로컬 클론의 manifest, source directory, 주요 entrypoint를 정리한 구조 보고서입니다.",
    role: "클론된 오픈소스의 물리 소스 트리 분석."
  },
  {
    dir: "reports/comparisons",
    title: "비교 보고서",
    description: "프로젝트 간 taxonomy, 기능 비교, 유사도 cluster를 정리한 보고서입니다.",
    role: "프로젝트 간 비교와 관계 지도."
  },
  {
    dir: "reports/full-source-scan",
    title: "전체 소스 스캔 보고서",
    description: "코딩 에이전트가 파일을 찾고, symbol을 검색하고, 사용자 의도와 소스 코드를 연결하는 방식을 다룹니다.",
    role: "소스 발견과 코드 검색 메커니즘."
  },
  {
    dir: "reports/global-trending",
    title: "글로벌 트렌딩 보고서",
    description: "500개 글로벌 코퍼스의 오픈소스 트렌드 종합과 레포별 보고서입니다.",
    role: "전세계 오픈소스 트렌드 코퍼스."
  },
  {
    dir: "reports/global-trending/repositories",
    title: "글로벌 트렌딩 레포별 보고서",
    description: "글로벌 트렌딩 오픈소스 코퍼스의 레포별 보고서 표입니다.",
    role: "글로벌 트렌드 레포별 딥다이브."
  },
  {
    dir: "reports/korea-trending",
    title: "한국 트렌딩 보고서",
    description: "한국 개발자 커뮤니티 트렌드 종합과 500개 한국 코퍼스의 레포별 보고서입니다.",
    role: "한국 오픈소스 트렌드 코퍼스."
  },
  {
    dir: "reports/korea-trending/repositories",
    title: "한국 트렌딩 레포별 보고서",
    description: "한국 트렌딩 오픈소스 코퍼스의 레포별 보고서 표입니다.",
    role: "한국 트렌드 레포별 딥다이브."
  },
  {
    dir: "reports/llm-wiki",
    title: "LLM 위키/지식베이스 보고서",
    description: "LLM wiki, RAG, GraphRAG, 문서 지식베이스, code-level pipeline, provenance 보고서입니다.",
    role: "지식베이스와 retrieval 프로젝트 분석."
  },
  {
    dir: "reports/llm-wiki/code-level-repositories",
    title: "LLM 위키 코드 레벨 레포 보고서",
    description: "LLM wiki, RAG, 문서 파이프라인, memory 프로젝트의 코드 레벨 구현 보고서입니다.",
    role: "LLM wiki 프로젝트의 상세 코드 경로 딥다이브."
  },
  {
    dir: "reports/llm-wiki/repositories",
    title: "LLM 위키 레포별 보고서",
    description: "선정된 LLM wiki/지식베이스 프로젝트의 레포별 구조 보고서입니다.",
    role: "LLM wiki 코퍼스 레포 요약."
  },
  {
    dir: "reports/presentations",
    title: "발표/컨퍼런스 보고서",
    description: "컨퍼런스, 발표, Amazon/AWS, 빅테크, 한국, AI 활용 트렌드 자료입니다.",
    role: "발표와 산업 신호 카탈로그."
  },
  {
    dir: "reports/repositories",
    title: "핵심 레포 보고서",
    description: "원래 조사한 AI 코딩 에이전트, IDE 에이전트, 브라우저 에이전트, MCP, 프레임워크 레포의 주요 딥다이브입니다.",
    role: "핵심 30개 프로젝트 분석."
  },
  {
    dir: "reports/research",
    title: "연구 보고서",
    description: "연구 종합, 근거 카탈로그, 충돌 이론, 남은 질문을 정리한 보고서입니다.",
    role: "논문, 근거, 이론 종합."
  },
  {
    dir: "reports/spec-driven",
    title: "스펙 드리븐 보고서",
    description: "스펙 추출, 요구사항, 추적성, executable specs, SDD tooling, spec memory 연구입니다.",
    role: "스펙 드리븐 개발과 요구사항 분석."
  }
];

const generatedNavigationReadmes = new Set([
  "reports/tables/README.md",
  ...folderGuides.map((guide) => `${guide.dir}/README.md`)
]);

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
  return String(value ?? "")
    .replace(/\s+/g, " ")
    .replaceAll("|", "\\|")
    .trim();
}

function renderMarkdown(content) {
  return `${content.trimEnd()}\n`;
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
      if (generatedNavigationReadmes.has(relative)) continue;
      acc.push(full);
    }
  }
  return acc;
}

function inferReportKind(filePath) {
  if (filePath.includes("/source-insights/")) return "source-insight-report";
  if (filePath.includes("/source-deep-dives/")) return "source-deep-dive-report";
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

function renderNavigationBlock(baseDir) {
  return `## 바로가기

| 이동 | 여기서 볼 것 |
| --- | --- |
| ${linkFrom(baseDir, "README.md", "전체 시작 README")} | 레포 전체 목적, 핵심 카테고리, 읽는 순서. |
| ${linkFrom(baseDir, "reports/README.md", "전체 보고서 읽기 지도")} | 모든 보고서의 시작점, 주제, 폴더 지도. |
| ${linkFrom(baseDir, "reports/by-topic/README.md", "주제별 보고서 목차")} | 조사 질문 기준으로 보고서를 찾는 입구. |
| ${linkFrom(baseDir, "reports/tables/README.md", "표/CSV 목차")} | 표로 빠르게 훑고 CSV로 비교하는 입구. |
| ${linkFrom(baseDir, "reports/repository-insights/README.md", "레포별 인사이트")} | 레포별 총평, 위험 신호, 다음에 볼 링크. |
| ${linkFrom(baseDir, "reports/source-deep-dives/README.md", "소스 딥다이브")} | 로컬 클론에서 뽑은 파일 경로 근거. |
| ${linkFrom(baseDir, "reports/source-insights/README.md", "소스 트렌드 인사이트")} | 카테고리별 트렌드와 레포별 특징 비교. |
| ${linkFrom(baseDir, "reports/categories/README.md", "근거 카테고리")} | 오픈소스, 논문, 발표, 참고자료의 artifact 분류. |
`;
}

function sortReports(reports) {
  return [...reports].sort((a, b) => b.priority - a.priority || a.path.localeCompare(b.path));
}

function renderReportTable(reports, baseDir, limit = Infinity) {
  const rows = sortReports(reports).slice(0, limit).map((report) => {
    const title = linkFrom(baseDir, report.path, report.title);
    return `| ${title} | ${tableText(report.kind)} | ${tableText(report.folder)} | ${report.priority} |`;
  });
  if (!rows.length) return "_색인된 보고서가 없습니다._\n";
  return `| 보고서 | 유형 | 폴더 | 우선순위 |\n| --- | --- | --- | ---: |\n${rows.join("\n")}\n`;
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

function countsBy(reports, keyFn) {
  return reports.reduce((acc, report) => {
    const key = keyFn(report) || "unknown";
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});
}

function topEntries(counts, limit = 5) {
  return Object.entries(counts)
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .slice(0, limit)
    .map(([name, count]) => `${name} (${count})`)
    .join(", ");
}

function reportCountText(count) {
  return `${count.toLocaleString("en-US")}개 보고서`;
}

function reportsForFolderGuide(guide, reports) {
  const prefix = `${guide.dir}/`;
  return reports.filter((report) => report.path.startsWith(prefix));
}

function topicIntersectionSummary(folderReports, categories, baseDir) {
  const rows = categories
    .map((category) => {
      const count = folderReports.filter((report) => report.categories.includes(category.slug)).length;
      return { ...category, count };
    })
    .filter((category) => category.count > 0)
    .sort((a, b) => b.count - a.count || a.title.localeCompare(b.title))
    .map((category) => `| ${linkFrom(baseDir, `reports/by-topic/${category.slug}/README.md`, category.title)} | ${category.count} |`)
    .join("\n");
  if (!rows) return "_연결된 주제 페이지가 없습니다._\n";
  return `| 주제 | 이 폴더의 보고서 수 |\n| --- | ---: |\n${rows}\n`;
}

function renderFolderReadme(guide, reports, categories) {
  const byKind = countsBy(reports, (report) => report.kind);
  const baseDir = guide.dir;
  const relatedTopicCount = categories.filter((category) => reports.some((report) => report.categories.includes(category.slug))).length;
  return `# ${guide.title}

생성 시각: ${generatedAt}

${guide.description}

## 요약

- 조사 단위: \`${guide.dir}\` 물리 폴더에 모인 보고서 묶음입니다.
- 포함 범위: ${reportCountText(reports.length)}이며, 주요 유형은 ${tableText(topEntries(byKind, 5) || "없음")}입니다.
- 탐색 방식: 아래 바로가기에서 상위 인덱스로 이동하거나, 관련 주제 페이지에서 같은 보고서를 주제 기준으로 다시 볼 수 있습니다.

## 총평

이 README는 원본 보고서를 옮기지 않고 폴더 단위로 읽는 입구입니다. 먼저 추천 읽기 경로로 핵심 보고서를 훑고, 필요하면 폴더 전체 보고서에서 개별 조사로 내려가는 흐름이 가장 안정적입니다. 관련 주제 페이지 ${relatedTopicCount}개와 연결되어 있어 폴더 기준과 주제 기준을 오가며 볼 수 있습니다.

${renderNavigationBlock(baseDir)}

## 폴더 요약

| 항목 | 값 |
| --- | --- |
| 폴더 | \`${guide.dir}\` |
| 역할 | ${tableText(guide.role)} |
| 보고서 수 | ${reports.length} |
| 주요 보고서 유형 | ${tableText(topEntries(byKind, 8) || "없음")} |

## 관련 주제 페이지

${topicIntersectionSummary(reports, categories, baseDir)}

## 추천 읽기 경로

${renderReportTable(reports, baseDir, 30)}

## 폴더 전체 보고서

${renderReportTable(reports, baseDir)}
`;
}

function buildFolderSummaries(reports, categories) {
  return folderGuides.map((guide) => {
    const folderReports = sortReports(reportsForFolderGuide(guide, reports));
    const byKind = countsBy(folderReports, (report) => report.kind);
    const relatedTopics = categories
      .map((category) => ({
        slug: category.slug,
        title: category.title,
        count: folderReports.filter((report) => report.categories.includes(category.slug)).length
      }))
      .filter((topic) => topic.count > 0)
      .sort((a, b) => b.count - a.count || a.title.localeCompare(b.title));
    return {
      ...guide,
      count: folderReports.length,
      readmePath: `${guide.dir}/README.md`,
      byKind,
      relatedTopics,
      reports: folderReports
    };
  });
}

function renderFolderMap(folderSummaries, baseDir) {
  const rows = folderSummaries
    .sort((a, b) => b.count - a.count || a.dir.localeCompare(b.dir))
    .map((folder) => `| ${linkFrom(baseDir, folder.readmePath, folder.dir.replace(/^reports\//, ""))} | ${folder.count} | ${tableText(folder.role)} | ${tableText(topEntries(folder.byKind, 4) || "없음")} |`)
    .join("\n");
  return `| 폴더 README | 보고서 수 | 역할 | 주요 보고서 유형 |\n| --- | ---: | --- | --- |\n${rows}\n`;
}

function renderCategoryReadme(category, reports) {
  const baseDir = `reports/by-topic/${category.slug}`;
  const byKind = countsBy(reports, (report) => report.kind);
  const byFolder = countsBy(reports, (report) => report.folder);
  const dominantFolders = topEntries(byFolder, 5) || "없음";
  const dominantKinds = topEntries(byKind, 5) || "없음";
  return `# ${category.title}

생성 시각: ${generatedAt}

${category.description}

## 요약

- 조사 단위: \`${category.slug}\` 주제에 속한 보고서 묶음입니다.
- 포함 범위: ${reportCountText(reports.length)}이며, 주요 보고서 유형은 ${tableText(dominantKinds)}입니다.
- 주요 출처 폴더: ${tableText(dominantFolders)}.

## 총평

이 README는 같은 주제에 흩어진 보고서를 한 번에 따라가도록 만든 주제형 입구입니다. 추천 읽기 경로는 먼저 읽을 보고서를 우선순위로 보여주고, 전체 보고서는 빠짐없는 목록을 제공합니다. 같은 보고서가 여러 주제에 걸칠 수 있으므로, 큰 흐름은 이 페이지에서 보고 세부 파일 위치는 폴더 값을 확인하는 방식이 좋습니다.

${renderNavigationBlock(baseDir)}

## 범위

- 보고서 수: ${reports.length}
- 데이터: ${linkFrom(baseDir, `data/report-categories/${category.slug}.json`, `data/report-categories/${category.slug}.json`)}

## 보고서 유형

${Object.entries(byKind).sort((a, b) => b[1] - a[1]).map(([kind, count]) => `- ${kind}: ${count}`).join("\n") || "- 없음"}

## 출처 폴더

${Object.entries(byFolder).sort((a, b) => b[1] - a[1]).slice(0, 20).map(([folder, count]) => `- ${folder}: ${count}`).join("\n") || "- 없음"}

## 추천 읽기 경로

${renderReportTable(reports, baseDir, 30)}

## 전체 보고서

${renderReportTable(reports, baseDir)}
`;
}

function renderByTopicIndex(categorySummaries) {
  const baseDir = "reports/by-topic";
  const rows = categorySummaries
    .sort((a, b) => b.count - a.count || a.title.localeCompare(b.title))
    .map((category) => `| ${linkFrom(baseDir, category.reportPath, category.title)} | ${category.count} | ${tableText(category.description)} | ${linkFrom(baseDir, category.dataPath, "데이터")} |`)
    .join("\n");
  return `# 주제별 보고서 목차

생성 시각: ${generatedAt}

이 폴더는 레포의 Markdown 보고서를 조사 질문별로 다시 묶은 읽기용 목차입니다. 원본 보고서는 기존 위치에 그대로 두고, 이 페이지들은 하이퍼링크로 따라가기 쉽게 만든 보고서 지도입니다.

## 요약

- 조사 단위: 전체 Markdown 보고서를 ${categorySummaries.length}개 주제로 다시 묶은 상위 목차입니다.
- 포함 범위: ${reportCountText(categorySummaries.reduce((sum, category) => sum + category.count, 0))}의 주제 멤버십을 보여줍니다. 한 보고서는 여러 주제에 동시에 들어갈 수 있습니다.
- 탐색 방식: 아래 표에서 주제 README로 들어가면 해당 주제의 요약, 총평, 추천 읽기 경로, 전체 보고서 목록을 볼 수 있습니다.

## 총평

주제별 README는 “무엇을 알고 싶은가”에서 출발할 때 가장 빠른 길입니다. 레포 위치를 이미 알고 있다면 폴더 README를 쓰고, 전체를 표로 훑고 싶다면 표/CSV 목차를 쓰면 됩니다.

${renderNavigationBlock(baseDir)}

## 카테고리 한눈에 보기

| 주제 | 보고서 수 | 설명 | 데이터 |
| --- | ---: | --- | --- |
${rows}
`;
}

function renderTopicKindMatrix(categories) {
  const kinds = [...new Set(categories.flatMap((category) => category.reports.map((report) => report.kind)))].sort();
  const headers = ["Topic", "Reports", ...kinds];
  const rows = categories
    .map((category) => {
      const byKind = countsBy(category.reports, (report) => report.kind);
      return {
        Topic: category.title,
        Reports: category.count,
        ...Object.fromEntries(kinds.map((kind) => [kind, byKind[kind] || 0]))
      };
    })
    .sort((a, b) => b.Reports - a.Reports || a.Topic.localeCompare(b.Topic));
  const markdownRows = rows.map((row) => `| ${headers.map((header) => tableText(row[header])).join(" | ")} |`).join("\n");
  const displayHeaders = headers.map((header) => header === "Topic" ? "주제" : header === "Reports" ? "보고서 수" : header);
  return `| ${displayHeaders.map(tableText).join(" | ")} |\n| ${headers.map((header, index) => index === 1 ? "---:" : "---").join(" | ")} |\n${markdownRows}\n`;
}

function renderTablesReadme(reportIndex, categories, folderSummaries) {
  const baseDir = "reports/tables";
  const topicRows = categories
    .sort((a, b) => b.count - a.count || a.title.localeCompare(b.title))
    .map((category) => `| ${linkFrom(baseDir, `reports/by-topic/${category.slug}/README.md`, category.title)} | ${category.count} | ${tableText(category.description)} | ${linkFrom(baseDir, `data/report-categories/${category.slug}.json`, "json")} |`)
    .join("\n");
  const folderRows = folderSummaries
    .sort((a, b) => b.count - a.count || a.dir.localeCompare(b.dir))
    .map((folder) => `| ${linkFrom(baseDir, folder.readmePath, folder.dir.replace(/^reports\//, ""))} | ${folder.count} | ${tableText(folder.role)} | ${tableText(folder.relatedTopics.slice(0, 4).map((topic) => `${topic.title} (${topic.count})`).join(", "))} |`)
    .join("\n");
  const reportRows = sortReports(reportIndex.reports).slice(0, 80).map((report) => {
    const topicNames = report.categories
      .map((slug) => categories.find((category) => category.slug === slug)?.title || slug)
      .join(", ");
    return `| ${linkFrom(baseDir, report.path, report.title)} | ${tableText(report.kind)} | ${tableText(report.folder)} | ${tableText(topicNames)} |`;
  }).join("\n");

  return `# 표/CSV 중심 보고서 목차

생성 시각: ${generatedAt}

이 페이지는 개별 보고서를 열기 전에 전체 조사 구조를 표로 먼저 훑기 위한 입구입니다.

## 요약

- 조사 단위: 보고서, 주제, 폴더, 보고서 유형을 표와 CSV로 정리한 탐색 허브입니다.
- 포함 범위: ${reportCountText(reportIndex.reports.length)}, ${categories.length}개 주제, ${folderSummaries.length}개 폴더 README 지도입니다.
- 데이터 파일: topic/folder/type matrix/all reports CSV를 제공하므로 GitHub 화면과 스프레드시트 양쪽에서 탐색할 수 있습니다.

## 총평

이 README는 읽기보다는 비교와 찾기에 최적화된 입구입니다. 빠른 구조 파악은 주제 요약 표와 폴더 요약 표를 먼저 보고, 특정 보고서 찾기는 \`data/report-tables/reports.csv\`를 쓰는 방식이 가장 효율적입니다.

${renderNavigationBlock(baseDir)}

## 데이터 파일

| 파일 | 내용 |
| --- | --- |
| ${linkFrom(baseDir, "data/report-index.json", "data/report-index.json")} | 전체 보고서 JSON 인덱스. |
| ${linkFrom(baseDir, "data/report-tables/topics.csv", "data/report-tables/topics.csv")} | 주제 요약 표. |
| ${linkFrom(baseDir, "data/report-tables/folders.csv", "data/report-tables/folders.csv")} | 폴더 요약 표. |
| ${linkFrom(baseDir, "data/report-tables/topic-kind-matrix.csv", "data/report-tables/topic-kind-matrix.csv")} | 주제 x 보고서 유형 매트릭스. |
| ${linkFrom(baseDir, "data/report-tables/reports.csv", "data/report-tables/reports.csv")} | 모든 색인 보고서의 평면 표. |
| ${linkFrom(baseDir, "data/report-tables/repository-insights.csv", "data/report-tables/repository-insights.csv")} | 레포별 인사이트, 위험, 근거, 다음 링크. |
| ${linkFrom(baseDir, "data/report-tables/source-deep-scan.csv", "data/report-tables/source-deep-scan.csv")} | 소스 경로 deep scan row와 구현 신호. |
| ${linkFrom(baseDir, "data/report-tables/source-category-insights.csv", "data/report-tables/source-category-insights.csv")} | 카테고리별 트렌드, feature, bucket, dependency, risk 집계. |
| ${linkFrom(baseDir, "data/report-tables/source-repo-feature-comparison.csv", "data/report-tables/source-repo-feature-comparison.csv")} | 레포별 소스 특징 비교 매트릭스. |

## 주제 요약 표

| 주제 | 보고서 수 | 설명 | 데이터 |
| --- | ---: | --- | --- |
${topicRows}

## 폴더 요약 표

| 폴더 README | 보고서 수 | 역할 | 주요 관련 주제 |
| --- | ---: | --- | --- |
${folderRows}

## 주제 x 보고서 유형 매트릭스

${renderTopicKindMatrix(categories)}

## 우선순위 상위 80개 보고서

| 보고서 | 유형 | 폴더 | 주제 |
| --- | --- | --- | --- |
${reportRows}
`;
}

function buildTableFiles(reportIndex, categories, folderSummaries) {
  const topicRows = categories.map((category) => ({
    topic: category.title,
    slug: category.slug,
    reports: category.count,
    readme: `reports/by-topic/${category.slug}/README.md`,
    data: `data/report-categories/${category.slug}.json`,
    description: category.description
  }));
  const folderRows = folderSummaries.map((folder) => ({
    folder: folder.dir,
    readme: folder.readmePath,
    reports: folder.count,
    role: folder.role,
    main_report_types: topEntries(folder.byKind, 8),
    related_topics: folder.relatedTopics.map((topic) => `${topic.title} (${topic.count})`).join("; ")
  }));
  const kinds = [...new Set(categories.flatMap((category) => category.reports.map((report) => report.kind)))].sort();
  const matrixRows = categories.map((category) => {
    const byKind = countsBy(category.reports, (report) => report.kind);
    return {
      topic: category.title,
      slug: category.slug,
      reports: category.count,
      ...Object.fromEntries(kinds.map((kind) => [kind, byKind[kind] || 0]))
    };
  });
  const reportRows = reportIndex.reports.map((report) => ({
    path: report.path,
    title: report.title,
    kind: report.kind,
    folder: report.folder,
    priority: report.priority,
    categories: report.categories.join(";"),
    summary: report.summary
  }));

  return [
    {
      name: "topics.csv",
      headers: ["topic", "slug", "reports", "readme", "data", "description"],
      rows: topicRows
    },
    {
      name: "folders.csv",
      headers: ["folder", "readme", "reports", "role", "main_report_types", "related_topics"],
      rows: folderRows
    },
    {
      name: "topic-kind-matrix.csv",
      headers: ["topic", "slug", "reports", ...kinds],
      rows: matrixRows
    },
    {
      name: "reports.csv",
      headers: ["path", "title", "kind", "folder", "priority", "categories", "summary"],
      rows: reportRows
    }
  ];
}

function renderReportsReadme(reportIndex, categorySummaries, folderSummaries) {
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

  return `# 전체 보고서 읽기 지도

생성 시각: ${generatedAt}

이 페이지는 GitHub나 로컬 checkout에서 레포를 그대로 읽기 위한 최상위 보고서 지도입니다. 배포용 웹 UI는 제거되어 있으므로, 이 README와 하위 카테고리/표/JSON 인덱스를 기준으로 탐색하면 됩니다.

## 요약

- 조사 단위: 레포에 커밋된 모든 Markdown 보고서의 최상위 읽기 지도입니다.
- 포함 범위: ${reportCountText(reportIndex.reports.length)}, ${categorySummaries.length}개 보고서 주제, ${folderSummaries.length}개 폴더 README 지도입니다.
- 탐색 방식: 먼저 읽기로 전체 흐름을 잡고, 주제별 목차로 조사에 들어가며, 폴더별 README 지도로 실제 폴더 구조를 따라갑니다.

## 총평

이 README 하나를 시작점으로 삼으면 레포 전체 조사를 끊긴 링크 없이 따라갈 수 있습니다. 주제 중심으로 볼 때는 주제별 보고서 목차, 물리 구조 중심으로 볼 때는 폴더별 README 지도, 정량 비교가 필요할 때는 표/CSV 목차를 쓰는 구성이 가장 읽기 쉽습니다.

## 범위

- 색인된 Markdown 보고서: ${reportIndex.reports.length}
- 보고서 주제: ${categorySummaries.length}
- 폴더 README 지도: ${folderSummaries.length}
- 데이터 인덱스: ${linkFrom("reports", "data/report-index.json", "data/report-index.json")}
- 주제 데이터 폴더: ${linkFrom("reports", "data/report-categories", "data/report-categories/")}
- 표 데이터 폴더: ${linkFrom("reports", "data/report-tables", "data/report-tables/")}

## 바로가기

| 이동 | 여기서 볼 것 |
| --- | --- |
| ${linkFrom("reports", "reports/by-topic/start-here/README.md", "먼저 읽기")} | 주요 조사 흐름을 처음부터 잡는 순서. |
| ${linkFrom("reports", "reports/by-topic/README.md", "주제별 보고서 목차")} | 모든 Markdown 보고서를 조사 질문 기준으로 탐색. |
| ${linkFrom("reports", "reports/tables/README.md", "표/CSV 목차")} | 표, CSV, 주제/유형 matrix 중심 탐색. |
| ${linkFrom("reports", "reports/repository-insights/README.md", "레포별 인사이트")} | 레포별 총평, 위험, 근거, 다음 읽기 링크. |
| ${linkFrom("reports", "reports/source-deep-dives/README.md", "소스 딥다이브")} | 로컬 클론에서 뽑은 파일 경로 근거. |
| ${linkFrom("reports", "reports/categories/README.md", "근거 카테고리")} | 오픈소스, 논문, 발표, 트렌드 출처의 artifact 분류. |

## 먼저 읽기

${renderReportTable(start, "reports", 20)}

## 핵심 총괄 보고서

${renderReportTable(highSignal, "reports", 30)}

## 주제별 목차

| 주제 | 보고서 수 | 설명 |
| --- | ---: | --- |
${rows}

## 폴더별 README 지도

${renderFolderMap(folderSummaries, "reports")}

## 읽는 순서

1. ${linkFrom("reports", "reports/categories/README.md", "reports/categories/README.md")}에서 조사 대상과 근거 카테고리를 먼저 봅니다.
2. ${linkFrom("reports", "reports/by-topic/README.md", "reports/by-topic/README.md")}에서 질문별 보고서 묶음을 확인합니다.
3. 구현 근거가 필요하면 ${linkFrom("reports", "reports/source-deep-dives/README.md", "reports/source-deep-dives/README.md")}에서 소스 경로를 봅니다.
4. 넓게 비교해야 하면 ${linkFrom("reports", "reports/tables/README.md", "reports/tables/README.md")}에서 표와 CSV를 봅니다.
5. 실제 폴더 위치를 이미 알면 위의 폴더별 README 지도를 사용합니다.
6. 완전한 기계 판독 목록은 \`data/report-index.json\`, \`data/report-categories/*.json\`, \`data/report-tables/*.csv\`를 사용합니다.
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
  await rm(outputReportTablesDir, { recursive: true, force: true });
  await mkdir(outputDataDir, { recursive: true });
  await mkdir(outputDataTablesDir, { recursive: true });
  await mkdir(outputReportDir, { recursive: true });
  await mkdir(outputReportTablesDir, { recursive: true });

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
    await writeFile(path.join(outputReportDir, category.slug, "README.md"), renderMarkdown(renderCategoryReadme(category, categoryReports)));
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
  const folderSummaries = buildFolderSummaries(reports, categories);

  await writeFile(outputDataFile, JSON.stringify(reportIndex, null, 2));
  for (const tableFile of buildTableFiles(reportIndex, categories, folderSummaries)) {
    await writeFile(path.join(outputDataTablesDir, tableFile.name), renderCsv(tableFile.headers, tableFile.rows));
  }
  for (const folder of folderSummaries) {
    await mkdir(path.join(root, folder.dir), { recursive: true });
    await writeFile(path.join(root, folder.readmePath), renderMarkdown(renderFolderReadme(folder, folder.reports, categories)));
  }
  await writeFile(path.join(outputReportDir, "README.md"), renderMarkdown(renderByTopicIndex(categorySummaries)));
  await writeFile(path.join(outputReportTablesDir, "README.md"), renderMarkdown(renderTablesReadme(reportIndex, categories, folderSummaries)));
  await writeFile(outputReportsReadme, renderMarkdown(renderReportsReadme({ ...reportIndex, categories }, categorySummaries, folderSummaries)));

  console.error(`reports indexed: ${reports.length}`);
  console.error(`report topics: ${categorySummaries.length}`);
  console.error(`folder guides: ${folderSummaries.length}`);
}

await main();
