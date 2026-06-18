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
const outputInsightMapDir = path.join(root, "reports", "insight-map");
const sourceTrendInsightsFile = path.join(root, "data", "source-trend-insights.json");
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
  "reports/insight-map/README.md",
  "reports/tables/README.md",
  ...folderGuides.map((guide) => `${guide.dir}/README.md`)
]);

const insightTopicGuides = {
  "start-here": {
    meaning: "레포 전체 조사를 처음 읽을 때 흐름을 잡는 입구입니다. 어떤 질문을 먼저 보고 어떤 보고서로 내려갈지 정합니다.",
    primaryQuestion: "이 레포에서 먼저 무엇을 읽어야 하는가?",
    extract: ["전체 조사 구조", "핵심 보고서 우선순위", "깊게 들어갈 다음 링크"],
    output: "처음 10분 안에 읽을 순서와 핵심 위치를 결정합니다."
  },
  "category-guides": {
    meaning: "오픈소스, 연구, 발표, 블로그, 트렌드 자료를 artifact 성격으로 묶은 근거 지도입니다.",
    primaryQuestion: "각 근거는 어떤 종류이고 어떤 조사 질문을 뒷받침하는가?",
    extract: ["근거 유형별 분포", "주제별 원천 자료 위치", "자료 신뢰도와 활용 범위"],
    output: "분석의 근거가 어디에서 왔는지 추적합니다."
  },
  "full-source-scan": {
    meaning: "사용자의 말과 실제 소스 파일, 심볼, 문맥을 연결하는 검색/인덱싱 방식에 대한 주제입니다.",
    primaryQuestion: "코딩 에이전트는 어떤 파일을 찾아 읽고, 왜 그 파일이 답이라고 판단하는가?",
    extract: ["파일 발견과 랭킹 축", "grep/symbol/AST/embedding의 역할", "문맥 예산과 증거 연결 방식"],
    output: "전체 소스 스캔 시스템을 설계할 때 필요한 탐색 파이프라인을 뽑습니다."
  },
  "source-code-deep-dives": {
    meaning: "로컬에 클론된 실제 레포에서 entrypoint, runtime, retrieval, spec, eval, security, CI/container 경로를 뽑은 구현 근거입니다.",
    primaryQuestion: "README 설명이 아니라 실제 코드에서 어떤 구조가 확인되는가?",
    extract: ["핵심 파일 경로", "구현 패턴과 feature bucket", "레포별 위험 신호와 검증 표면"],
    output: "레포별로 바로 확인할 코드 근거와 구현 차이를 얻습니다."
  },
  "coding-agents": {
    meaning: "Codex, Claude Code, Aider, OpenHands, Cline/Roo류 코딩 에이전트와 IDE 보조 도구를 비교하는 주제입니다.",
    primaryQuestion: "코딩 에이전트 제품은 어떤 실행 루프와 코드 수정 표면을 가져야 하는가?",
    extract: ["CLI/IDE 실행면", "파일 수정 및 diff 루프", "테스트/리뷰/sandbox 구조"],
    output: "코딩 에이전트 제품 구조와 구현 후보를 비교합니다."
  },
  "agent-harness": {
    meaning: "MCP, tool registry, hooks, skills, workflow orchestration처럼 에이전트 실행을 받치는 하네스 계층입니다.",
    primaryQuestion: "LLM이 도구와 워크플로를 안전하게 실행하려면 어떤 하네스가 필요한가?",
    extract: ["MCP/tool 연결", "hooks/skills/plugin 구조", "workflow orchestration과 권한 경계"],
    output: "에이전트 런타임과 도구 실행 기반 설계 기준을 얻습니다."
  },
  "spec-driven": {
    meaning: "요구사항, ADR, acceptance criteria, executable specs, SDD 도구를 장기 기억과 코드 변경에 연결하는 주제입니다.",
    primaryQuestion: "스펙을 어떻게 뽑고 저장하고 테스트 trace와 연결해야 오래 기억되는가?",
    extract: ["스펙 추출 방식", "요구사항-설계-테스트 추적성", "spec memory와 acceptance gate"],
    output: "스펙 드리븐 개발 체계를 만들 때 필요한 산출물과 연결 규칙을 뽑습니다."
  },
  "llm-wiki": {
    meaning: "LLM wiki, RAG, GraphRAG, 문서 지식베이스, ingestion, retrieval, provenance를 묶은 지식 지속성 주제입니다.",
    primaryQuestion: "코드와 문서를 어떻게 수집하고 검색하고 출처와 함께 기억할 것인가?",
    extract: ["ingestion/chunking pipeline", "embedding/vector/graph retrieval", "provenance와 knowledge update 방식"],
    output: "LLM 지식베이스와 코드 위키를 설계할 때 필요한 파이프라인 차이를 비교합니다."
  },
  "presentations-conferences": {
    meaning: "컨퍼런스, 키노트, 웨비나, 발표 자료에서 산업 신호와 구현 방향을 읽는 주제입니다.",
    primaryQuestion: "최근 발표들이 AI 활용과 에이전트 설계에서 무엇을 강조하는가?",
    extract: ["빅테크 발표 흐름", "Amazon/AWS와 기업 도입 신호", "한국/글로벌 컨퍼런스 차이"],
    output: "논문/코드만으로 보이지 않는 산업 채택 방향을 보완합니다."
  },
  "ai-usage-trends": {
    meaning: "기업, 빅테크, Amazon/AWS, 한국 컨퍼런스에서 나타나는 최근 AI 활용 트렌드입니다.",
    primaryQuestion: "최근 6~12개월 AI 활용은 어떤 업무와 아키텍처로 이동하고 있는가?",
    extract: ["agentic enterprise 흐름", "업무 자동화 적용 지점", "국내외 도입 방식 차이"],
    output: "실제 제품/조직 적용 관점의 우선순위를 뽑습니다."
  },
  "global-trending-open-source": {
    meaning: "전세계 AI/agent/RAG/devtool/security/infrastructure 오픈소스 트렌딩 코퍼스입니다.",
    primaryQuestion: "글로벌에서 star velocity와 커뮤니티 신호가 강한 프로젝트는 무엇인가?",
    extract: ["글로벌 인기 프로젝트", "언어/스택/카테고리 분포", "급상승 구현 패턴"],
    output: "전세계 트렌드 기준의 후보군과 비교 대상을 뽑습니다."
  },
  "korea-trending-open-source": {
    meaning: "한국 개발자 커뮤니티, 한국 AI/MCP/RAG 프로젝트, 국내 기술 블로그와 오픈소스 흐름입니다.",
    primaryQuestion: "한국에서 실제 관심을 받고 있는 소스와 구현 주제는 무엇인가?",
    extract: ["국내 트렌드 레포", "한국어/국내 도메인 MCP/RAG 흐름", "기업/커뮤니티별 기술 신호"],
    output: "국내 맥락에서 우선 볼 프로젝트와 차별점을 뽑습니다."
  },
  "adjacent-infrastructure": {
    meaning: "컨텍스트 엔지니어링, RAG 인프라, 벡터 DB, 로컬 LLM 서빙, 평가/관측성 같은 주변 스택입니다.",
    primaryQuestion: "에이전트를 제품화하려면 주변 인프라에서 무엇을 갖춰야 하는가?",
    extract: ["컨텍스트/메모리 계층", "서빙과 벡터 인프라", "eval/observability 연결"],
    output: "에이전트 외부 의존 스택과 운영 준비도를 판단합니다."
  },
  "clone-structure-inventory": {
    meaning: "로컬에 클론한 upstream 소스의 물리 구조, manifest, source directory, entrypoint 목록입니다.",
    primaryQuestion: "분석 대상 소스는 실제로 어디에 있고 어떤 구조를 갖는가?",
    extract: ["로컬 소스 위치", "레포별 파일 구조", "entrypoint와 주요 디렉터리"],
    output: "분석 근거가 되는 원본 소스 트리를 찾습니다."
  },
  "comparisons": {
    meaning: "레포 간 taxonomy, 기능 비교, 유사도 cluster, 카테고리 차이를 보는 비교 지도입니다.",
    primaryQuestion: "비슷해 보이는 프로젝트들은 무엇이 다르고 어느 카테고리에 속하는가?",
    extract: ["기능별 비교", "유사군과 차이점", "카테고리 간 설계 거리"],
    output: "후보 프로젝트를 비교하고 선택 기준을 세웁니다."
  },
  "research-foundations": {
    meaning: "논문, 근거자료, 이론 충돌, 연구 종합 보고서를 묶은 학술/공신력 근거 주제입니다.",
    primaryQuestion: "코드와 트렌드를 설명하는 연구적 근거는 무엇인가?",
    extract: ["핵심 논문과 이론", "상충되는 관점", "실무 설계로 옮길 수 있는 원칙"],
    output: "주장과 설계 판단의 근거 수준을 보강합니다."
  },
  "source-catalogs-and-inventories": {
    meaning: "조사에 사용한 원천 목록, evidence ledger, clone inventory, source catalog입니다.",
    primaryQuestion: "자료 목록과 출처를 빠짐없이 추적하려면 어디를 봐야 하는가?",
    extract: ["전체 자료 목록", "클론/근거 인벤토리", "데이터 파일 위치"],
    output: "분석 대상과 근거 목록의 누락 여부를 확인합니다."
  },
  "repository-deep-dives": {
    meaning: "핵심 에이전트, 글로벌/한국 트렌딩, LLM wiki, 클론 구조의 레포별 상세 보고서입니다.",
    primaryQuestion: "특정 레포 하나를 깊게 볼 때 어떤 요약과 근거가 있는가?",
    extract: ["레포별 총평", "구현 특징과 위험 신호", "다음에 볼 소스/보고서 링크"],
    output: "개별 레포를 선택하거나 제외할 판단 근거를 뽑습니다."
  }
};

function safeArray(value) {
  return Array.isArray(value) ? value : [];
}

async function readJsonIfExists(file) {
  try {
    return JSON.parse(await readFile(file, "utf8"));
  } catch {
    return null;
  }
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

function externalLink(label, url) {
  return url ? `[${tableText(label)}](${url})` : tableText(label);
}

function inlineList(items) {
  return safeArray(items).map(tableText).join("<br>");
}

function bulletList(items) {
  const list = safeArray(items).filter(Boolean);
  return list.length ? list.map((item) => `- ${tableText(item)}`).join("\n") : "- 없음";
}

function detailsBlock(summary, body) {
  return `<details>
<summary>${summary}</summary>

${body.trim()}

</details>`;
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
| ${linkFrom(baseDir, "reports/insight-map/README.md", "전체 인사이트 지도")} | 각 주제의 의미, 위치, 뽑아낼 인사이트를 한 문서에서 확인. |
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
  const guide = topicGuide(category);
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

## 핵심 먼저

| 항목 | 내용 |
| --- | --- |
| 핵심 질문 | ${tableText(guide.primaryQuestion)} |
| 먼저 뽑을 것 | ${inlineList(guide.extract)} |
| 최종 활용 | ${tableText(guide.output)} |
| 먼저 볼 보고서 | ${topReportLinksForTopic({ ...category, reports }, baseDir, 5)} |

## 범위

- 보고서 수: ${reports.length}
- 데이터: ${linkFrom(baseDir, `data/report-categories/${category.slug}.json`, `data/report-categories/${category.slug}.json`)}

## 세부 분포 펼쳐보기

${detailsBlock("보고서 유형과 출처 폴더 보기", `### 보고서 유형

${Object.entries(byKind).sort((a, b) => b[1] - a[1]).map(([kind, count]) => `- ${kind}: ${count}`).join("\n") || "- 없음"}

### 출처 폴더

${Object.entries(byFolder).sort((a, b) => b[1] - a[1]).slice(0, 20).map(([folder, count]) => `- ${folder}: ${count}`).join("\n") || "- 없음"}`)}

## 추천 읽기 경로

${renderReportTable(reports, baseDir, 30)}

## 전체 보고서 펼쳐보기

${detailsBlock(`전체 보고서 ${reports.length}개 보기`, renderReportTable(reports, baseDir))}
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
| ${linkFrom(baseDir, "data/report-tables/insight-topic-map.csv", "data/report-tables/insight-topic-map.csv")} | 주제별 의미, 위치, 질문, 추출 인사이트 지도. |
| ${linkFrom(baseDir, "data/report-tables/source-insight-category-map.csv", "data/report-tables/source-insight-category-map.csv")} | 소스 인사이트 카테고리별 의미, 강점, 검증 포인트, 대표 레포. |
| ${linkFrom(baseDir, "data/report-tables/folders.csv", "data/report-tables/folders.csv")} | 폴더 요약 표. |
| ${linkFrom(baseDir, "data/report-tables/topic-kind-matrix.csv", "data/report-tables/topic-kind-matrix.csv")} | 주제 x 보고서 유형 매트릭스. |
| ${linkFrom(baseDir, "data/report-tables/reports.csv", "data/report-tables/reports.csv")} | 모든 색인 보고서의 평면 표. |
| ${linkFrom(baseDir, "data/report-tables/repository-insights.csv", "data/report-tables/repository-insights.csv")} | 레포별 인사이트, 위험, 근거, 다음 링크. |
| ${linkFrom(baseDir, "data/report-tables/source-deep-scan.csv", "data/report-tables/source-deep-scan.csv")} | 소스 경로 deep scan row와 구현 신호. |
| ${linkFrom(baseDir, "data/report-tables/source-category-insights.csv", "data/report-tables/source-category-insights.csv")} | 카테고리별 트렌드, feature, bucket, dependency, risk 집계. |
| ${linkFrom(baseDir, "data/report-tables/source-category-comparisons.csv", "data/report-tables/source-category-comparisons.csv")} | 카테고리별 강점/약점/대표 레포/판단 비교 표. |
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

function topicGuide(category) {
  return insightTopicGuides[category.slug] || {
    meaning: category.description,
    primaryQuestion: `${category.title} 주제에서 어떤 판단을 내려야 하는가?`,
    extract: [category.description, "관련 보고서 위치", "대표 데이터와 다음 링크"],
    output: "해당 주제의 보고서와 근거를 빠르게 찾습니다."
  };
}

function topicReadmePath(category) {
  return `reports/by-topic/${category.slug}/README.md`;
}

function topicDataPath(category) {
  return `data/report-categories/${category.slug}.json`;
}

function topReportLinksForTopic(category, baseDir, limit = 3) {
  return sortReports(category.reports)
    .slice(0, limit)
    .map((report) => linkFrom(baseDir, report.path, report.title))
    .join("<br>") || "없음";
}

function relatedTopicsFor(category, categories, limit = 5) {
  const ids = new Set(category.reports.map((report) => report.id));
  return categories
    .filter((candidate) => candidate.slug !== category.slug)
    .map((candidate) => ({
      slug: candidate.slug,
      title: candidate.title,
      count: candidate.reports.filter((report) => ids.has(report.id)).length
    }))
    .filter((candidate) => candidate.count > 0)
    .sort((a, b) => b.count - a.count || a.title.localeCompare(b.title))
    .slice(0, limit);
}

function renderTopicInsightTable(categories, baseDir) {
  const rows = categories
    .sort((a, b) => b.count - a.count || a.title.localeCompare(b.title))
    .map((category) => {
      const guide = topicGuide(category);
      const firstInsight = safeArray(guide.extract)[0] || guide.output;
      return `| ${linkFrom(baseDir, topicReadmePath(category), category.title)} | ${category.count} | ${tableText(guide.primaryQuestion)} | ${tableText(firstInsight)} | ${linkFrom(baseDir, topicReadmePath(category), "읽기")} / ${linkFrom(baseDir, topicDataPath(category), "데이터")} |`;
    })
    .join("\n");
  return `| 주제 | 수 | 핵심 질문 | 먼저 뽑을 것 | 위치 |
| --- | ---: | --- | --- | --- |
${rows}
`;
}

function renderTopicInsightDetail(category, categories, baseDir) {
  const guide = topicGuide(category);
  const related = relatedTopicsFor(category, categories)
    .map((topic) => `${linkFrom(baseDir, topicReadmePath(topic), topic.title)} (${topic.count})`)
    .join(", ") || "없음";
  const byKind = countsBy(category.reports, (report) => report.kind);
  const byFolder = countsBy(category.reports, (report) => report.folder);
  const body = `${guide.meaning}

| 항목 | 내용 |
| --- | --- |
| 이 주제가 답하는 질문 | ${tableText(guide.primaryQuestion)} |
| 위치 | ${linkFrom(baseDir, topicReadmePath(category), "주제 README")} / ${linkFrom(baseDir, topicDataPath(category), "JSON 데이터")} |
| 보고서 수 | ${category.reports.length} |
| 주요 보고서 유형 | ${tableText(topEntries(byKind, 5) || "없음")} |
| 주요 폴더 | ${tableText(topEntries(byFolder, 5) || "없음")} |
| 먼저 볼 보고서 | ${topReportLinksForTopic(category, baseDir, 5)} |
| 같이 볼 주제 | ${related} |
| 최종 활용 | ${tableText(guide.output)} |

뽑아낼 인사이트:

${bulletList(guide.extract)}
`;
  return detailsBlock(`<strong>${tableText(category.title)}</strong> · ${tableText(guide.output)}`, body);
}

function renderSourceCategoryInsightTable(sourceTrendData, baseDir) {
  const categories = safeArray(sourceTrendData?.categories);
  if (!categories.length) return "_소스 인사이트 데이터가 아직 없습니다._\n";
  const rows = categories
    .sort((a, b) => b.count - a.count || a.korean.localeCompare(b.korean))
    .map((category) => {
      const profile = category.comparisonProfile || {};
      const representative = category.topRepositories?.[0];
      const categoryLink = linkFrom(baseDir, `reports/source-insights/by-category/${category.slug}/README.md`, category.korean);
      const representativeLink = representative?.url ? externalLink(representative.name, representative.url) : tableText(representative?.name || "없음");
      return `| ${categoryLink} | ${category.count} | ${tableText(profile.strength || category.insights?.[0])} | ${tableText(profile.gap || "대표 레포별 위험 신호 확인")} | ${representativeLink} | ${linkFrom(baseDir, `reports/source-insights/by-category/${category.slug}/README.md`, "읽기")} |`;
    })
    .join("\n");
  return `| 카테고리 | 레포 | 핵심 강점 | 먼저 확인할 것 | 대표 레포 | 위치 |
| --- | ---: | --- | --- | --- | --- |
${rows}
`;
}

function renderSourceCategoryInsightDetail(category, baseDir) {
  const profile = category.comparisonProfile || {};
  const repos = safeArray(category.repoComparisons).slice(0, 8).map((repo) => {
    const name = repo.url ? externalLink(repo.name, repo.url) : tableText(repo.name);
    const links = [
      repo.sourceDeepDivePath ? linkFrom(baseDir, repo.sourceDeepDivePath, "소스 딥다이브") : null,
      repo.reportPath ? linkFrom(baseDir, repo.reportPath, "보고서") : null
    ].filter(Boolean).join(" / ");
    return `| ${repo.rank} | ${name} | ${repo.compareScore} | ${repo.trendScore} | ${tableText(repo.reason)} | ${tableText(repo.position)} | ${links} |`;
  }).join("\n");
  const body = `${profile.useCase || category.lens}

| 항목 | 내용 |
| --- | --- |
| 위치 | ${linkFrom(baseDir, `reports/source-insights/by-category/${category.slug}/README.md`, "카테고리 README")} / ${linkFrom(baseDir, "reports/source-insights/comparative-report.md", "상세 비교 리포트")} |
| 레포 수 | ${category.count} |
| 트렌드 연결 | ${category.trendRepoCount} |
| 글로벌 / 한국 | ${category.globalTrendCount} / ${category.koreaTrendCount} |
| 강점 | ${tableText(profile.strength || "없음")} |
| 약점/검증 | ${tableText(profile.gap || "대표 레포별 위험 신호 확인")} |
| 대표 feature | ${tableText(profile.featureSummary || "없음")} |
| 대표 bucket | ${tableText(profile.bucketSummary || "없음")} |
| 결론 | ${tableText(profile.decision || category.insights?.[0] || "없음")} |

대표 레포:

| 순위 | 레포 | 비교 점수 | 트렌드 점수 | 왜 봐야 하나 | 카테고리 안에서의 위치 | 링크 |
| ---: | --- | ---: | ---: | --- | --- | --- |
${repos || "| - | 없음 | - | - | - | - | - |"}
`;
  return detailsBlock(`<strong>${tableText(category.korean)}</strong> · ${tableText(profile.strength || "핵심 구현 신호 확인")}`, body);
}

function renderInsightMapReadme(reportIndex, categories, sourceTrendData) {
  const baseDir = "reports/insight-map";
  const sourceCategories = safeArray(sourceTrendData?.categories);
  const totalMemberships = categories.reduce((sum, category) => sum + category.reports.length, 0);
  return `# 전체 인사이트 지도

생성 시각: ${generatedAt}

이 문서는 “각 주제가 어디에 있고, 무슨 의미이며, 어떤 인사이트를 뽑아야 하는지”를 한 곳에서 보기 위한 최상위 지도입니다. 깊은 폴더를 먼저 열지 말고, 이 문서에서 주제의 의미와 위치를 잡은 뒤 필요한 보고서로 들어가면 됩니다.

## 요약

- 조사 단위: ${categories.length}개 보고서 주제, ${sourceCategories.length}개 소스 인사이트 카테고리, ${reportIndex.reports.length.toLocaleString("en-US")}개 Markdown 보고서입니다.
- 포함 범위: 주제 멤버십 ${totalMemberships.toLocaleString("en-US")}개, 소스 스캔 레포 ${sourceTrendData?.totals?.repositories?.toLocaleString("en-US") || "0"}개를 한 문서에서 연결합니다.
- 탐색 방식: 먼저 “보고서 주제 전체 지도”에서 질문의 의미를 잡고, “소스 인사이트 카테고리 지도”에서 실제 구현 비교로 내려갑니다.

## 총평

이 레포의 인사이트는 세 층으로 읽어야 합니다. 첫째, 보고서 주제는 왜 조사했는지를 설명합니다. 둘째, 소스 인사이트 카테고리는 실제 클론 소스에서 무엇이 반복되는지를 보여줍니다. 셋째, 레포별 딥다이브는 특정 프로젝트를 선택하거나 제외할 근거를 줍니다. 이 문서 하나를 기준점으로 삼으면 각 주제의 의미, 위치, 추출해야 할 판단이 끊기지 않습니다.

${renderNavigationBlock(baseDir)}

## 핵심만 먼저

| 핵심 | 바로 볼 곳 | 판단 |
| --- | --- | --- |
| 주제의 의미 | ${linkFrom(baseDir, "reports/insight-map/README.md", "이 문서")} | “왜 이 주제를 봐야 하는가”를 먼저 잡습니다. |
| 구현 차이 | ${linkFrom(baseDir, "reports/source-insights/comparative-report.md", "상세 비교 리포트")} | 카테고리별 강점, 약점, 대표 레포를 비교합니다. |
| 실제 코드 근거 | ${linkFrom(baseDir, "reports/source-deep-dives/README.md", "소스 딥다이브")} | README 설명이 아니라 파일 경로로 확인합니다. |
| 전체 자료 목록 | ${linkFrom(baseDir, "reports/tables/README.md", "표/CSV 목차")} | 많은 항목은 표로 필터링합니다. |

## 읽는 흐름

1. 아래 “보고서 주제 핵심 지도”에서 질문과 먼저 뽑을 것을 확인합니다.
2. 필요한 주제의 README로 들어가 요약과 추천 읽기 경로를 봅니다.
3. 구현 판단이 필요하면 “소스 인사이트 핵심 지도”에서 카테고리와 대표 레포를 고릅니다.
4. 세부 레포, 파일 경로, 전체 목록은 아래 접힘 영역과 CSV에서 확인합니다.

## 바로 판단할 것

| 질문 | 바로 볼 위치 | 뽑을 결론 |
| --- | --- | --- |
| 전체 구조가 뭔가? | ${linkFrom(baseDir, "reports/README.md", "전체 보고서 읽기 지도")} | 조사 범위, 주제 수, 폴더별 역할 |
| 특정 주제가 어디 있나? | ${linkFrom(baseDir, "reports/by-topic/README.md", "주제별 보고서 목차")} | 주제 README와 JSON 데이터 위치 |
| 구현 차이는 어디서 보나? | ${linkFrom(baseDir, "reports/source-insights/comparative-report.md", "상세 비교 리포트")} | 카테고리별 강점, 약점, 대표 레포 |
| 실제 파일 근거는 어디 있나? | ${linkFrom(baseDir, "reports/source-deep-dives/README.md", "소스 딥다이브")} | entrypoint, runtime, retrieval, spec, eval, security 경로 |
| 많은 항목을 표로 보려면? | ${linkFrom(baseDir, "reports/tables/README.md", "표/CSV 목차")} | CSV 기반 필터링과 비교 |

## 보고서 주제 핵심 지도

${renderTopicInsightTable(categories, baseDir)}

## 소스 인사이트 핵심 지도

${renderSourceCategoryInsightTable(sourceTrendData, baseDir)}

## 주제별 상세 해석 펼쳐보기

${categories
  .sort((a, b) => b.reports.length - a.reports.length || a.title.localeCompare(b.title))
  .map((category) => renderTopicInsightDetail(category, categories, baseDir))
  .join("\n")}

## 소스 인사이트 상세 해석 펼쳐보기

${sourceCategories
  .sort((a, b) => b.count - a.count || a.korean.localeCompare(b.korean))
  .map((category) => renderSourceCategoryInsightDetail(category, baseDir))
  .join("\n")}
`;
}

function buildTableFiles(reportIndex, categories, folderSummaries, sourceTrendData) {
  const topicRows = categories.map((category) => ({
    topic: category.title,
    slug: category.slug,
    reports: category.count,
    readme: `reports/by-topic/${category.slug}/README.md`,
    data: `data/report-categories/${category.slug}.json`,
    description: category.description
  }));
  const insightTopicRows = categories.map((category) => {
    const guide = topicGuide(category);
    return {
      topic: category.title,
      slug: category.slug,
      reports: category.reports.length,
      meaning: guide.meaning,
      primary_question: guide.primaryQuestion,
      extract_insights: safeArray(guide.extract).join("; "),
      output: guide.output,
      readme: topicReadmePath(category),
      data: topicDataPath(category),
      first_reports: sortReports(category.reports).slice(0, 5).map((report) => report.path).join("; ")
    };
  });
  const sourceCategoryRows = safeArray(sourceTrendData?.categories).map((category) => {
    const profile = category.comparisonProfile || {};
    const representative = category.topRepositories?.[0];
    return {
      category: category.korean,
      slug: category.slug,
      repositories: category.count,
      trend_linked: category.trendRepoCount,
      global: category.globalTrendCount,
      korea: category.koreaTrendCount,
      meaning: profile.useCase || category.lens,
      strength: profile.strength,
      gap: profile.gap,
      decision: profile.decision,
      representative_repo: representative?.name || "",
      readme: `reports/source-insights/by-category/${category.slug}/README.md`,
      comparative_report: "reports/source-insights/comparative-report.md"
    };
  });
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
      name: "insight-topic-map.csv",
      headers: ["topic", "slug", "reports", "meaning", "primary_question", "extract_insights", "output", "readme", "data", "first_reports"],
      rows: insightTopicRows
    },
    {
      name: "source-insight-category-map.csv",
      headers: ["category", "slug", "repositories", "trend_linked", "global", "korea", "meaning", "strength", "gap", "decision", "representative_repo", "readme", "comparative_report"],
      rows: sourceCategoryRows
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

## 핵심 먼저

| 하고 싶은 일 | 먼저 볼 곳 | 이유 |
| --- | --- | --- |
| 전체 주제 의미를 한 번에 파악 | ${linkFrom("reports", "reports/insight-map/README.md", "전체 인사이트 지도")} | 각 주제의 의미, 위치, 뽑아낼 인사이트가 한 문서에 있습니다. |
| 구현 차이와 대표 레포 비교 | ${linkFrom("reports", "reports/source-insights/comparative-report.md", "상세 비교 리포트")} | 카테고리별 강점, 약점, 대표 레포 판단표가 있습니다. |
| 실제 파일 경로 확인 | ${linkFrom("reports", "reports/source-deep-dives/README.md", "소스 딥다이브")} | 로컬 클론에서 뽑은 entrypoint와 구현 근거를 봅니다. |
| 전체 목록을 빠르게 필터링 | ${linkFrom("reports", "reports/tables/README.md", "표/CSV 목차")} | CSV와 matrix로 많은 항목을 비교합니다. |

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
| ${linkFrom("reports", "reports/insight-map/README.md", "전체 인사이트 지도")} | 각 주제의 의미, 위치, 뽑아낼 인사이트를 한 문서에서 확인. |
| ${linkFrom("reports", "reports/by-topic/README.md", "주제별 보고서 목차")} | 모든 Markdown 보고서를 조사 질문 기준으로 탐색. |
| ${linkFrom("reports", "reports/tables/README.md", "표/CSV 목차")} | 표, CSV, 주제/유형 matrix 중심 탐색. |
| ${linkFrom("reports", "reports/repository-insights/README.md", "레포별 인사이트")} | 레포별 총평, 위험, 근거, 다음 읽기 링크. |
| ${linkFrom("reports", "reports/source-deep-dives/README.md", "소스 딥다이브")} | 로컬 클론에서 뽑은 파일 경로 근거. |
| ${linkFrom("reports", "reports/categories/README.md", "근거 카테고리")} | 오픈소스, 논문, 발표, 트렌드 출처의 artifact 분류. |

## 먼저 읽기

${renderReportTable(start, "reports", 12)}

## 핵심 총괄 보고서 펼쳐보기

${detailsBlock("핵심 총괄 보고서 30개 보기", renderReportTable(highSignal, "reports", 30))}

## 주제별 목차

| 주제 | 보고서 수 | 설명 |
| --- | ---: | --- |
${rows}

## 폴더별 README 지도

${renderFolderMap(folderSummaries, "reports")}

## 읽는 순서

1. ${linkFrom("reports", "reports/insight-map/README.md", "reports/insight-map/README.md")}에서 각 주제의 의미와 위치를 먼저 잡습니다.
2. ${linkFrom("reports", "reports/categories/README.md", "reports/categories/README.md")}에서 조사 대상과 근거 카테고리를 봅니다.
3. ${linkFrom("reports", "reports/by-topic/README.md", "reports/by-topic/README.md")}에서 질문별 보고서 묶음을 확인합니다.
4. 구현 근거가 필요하면 ${linkFrom("reports", "reports/source-deep-dives/README.md", "reports/source-deep-dives/README.md")}에서 소스 경로를 봅니다.
5. 넓게 비교해야 하면 ${linkFrom("reports", "reports/tables/README.md", "reports/tables/README.md")}에서 표와 CSV를 봅니다.
6. 실제 폴더 위치를 이미 알면 위의 폴더별 README 지도를 사용합니다.
7. 완전한 기계 판독 목록은 \`data/report-index.json\`, \`data/report-categories/*.json\`, \`data/report-tables/*.csv\`를 사용합니다.
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
  await rm(outputInsightMapDir, { recursive: true, force: true });
  await mkdir(outputDataDir, { recursive: true });
  await mkdir(outputDataTablesDir, { recursive: true });
  await mkdir(outputReportDir, { recursive: true });
  await mkdir(outputReportTablesDir, { recursive: true });
  await mkdir(outputInsightMapDir, { recursive: true });

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
  const sourceTrendData = await readJsonIfExists(sourceTrendInsightsFile);

  await writeFile(outputDataFile, JSON.stringify(reportIndex, null, 2));
  for (const tableFile of buildTableFiles(reportIndex, categories, folderSummaries, sourceTrendData)) {
    await writeFile(path.join(outputDataTablesDir, tableFile.name), renderCsv(tableFile.headers, tableFile.rows));
  }
  for (const folder of folderSummaries) {
    await mkdir(path.join(root, folder.dir), { recursive: true });
    await writeFile(path.join(root, folder.readmePath), renderMarkdown(renderFolderReadme(folder, folder.reports, categories)));
  }
  await writeFile(path.join(outputInsightMapDir, "README.md"), renderMarkdown(renderInsightMapReadme(reportIndex, categories, sourceTrendData)));
  await writeFile(path.join(outputReportDir, "README.md"), renderMarkdown(renderByTopicIndex(categorySummaries)));
  await writeFile(path.join(outputReportTablesDir, "README.md"), renderMarkdown(renderTablesReadme(reportIndex, categories, folderSummaries)));
  await writeFile(outputReportsReadme, renderMarkdown(renderReportsReadme({ ...reportIndex, categories }, categorySummaries, folderSummaries)));

  console.error(`reports indexed: ${reports.length}`);
  console.error(`report topics: ${categorySummaries.length}`);
  console.error(`folder guides: ${folderSummaries.length}`);
}

await main();
