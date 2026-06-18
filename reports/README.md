# 전체 보고서 읽기 지도

생성 시각: 2026-06-18T15:47:35.662Z

이 페이지는 GitHub나 로컬 checkout에서 레포를 그대로 읽기 위한 최상위 보고서 지도입니다. 배포용 웹 UI는 제거되어 있으므로, 이 README와 하위 카테고리/표/JSON 인덱스를 기준으로 탐색하면 됩니다.

## 요약

- 조사 단위: 레포에 커밋된 모든 Markdown 보고서의 최상위 읽기 지도입니다.
- 포함 범위: 2,595개 보고서, 18개 보고서 주제, 16개 폴더 README 지도입니다.
- 탐색 방식: 먼저 읽기로 전체 흐름을 잡고, 주제별 목차로 조사에 들어가며, 폴더별 README 지도로 실제 폴더 구조를 따라갑니다.

## 총평

이 README 하나를 시작점으로 삼으면 레포 전체 조사를 끊긴 링크 없이 따라갈 수 있습니다. 주제 중심으로 볼 때는 주제별 보고서 목차, 물리 구조 중심으로 볼 때는 폴더별 README 지도, 정량 비교가 필요할 때는 표/CSV 목차를 쓰는 구성이 가장 읽기 쉽습니다.

## 핵심 먼저

| 하고 싶은 일 | 먼저 볼 곳 | 이유 |
| --- | --- | --- |
| 전체 주제 의미를 한 번에 파악 | [전체 인사이트 지도](insight-map/README.md) | 각 주제의 의미, 위치, 뽑아낼 인사이트가 한 문서에 있습니다. |
| 구현 차이와 대표 레포 비교 | [상세 비교 리포트](source-insights/comparative-report.md) | 카테고리별 강점, 약점, 대표 레포 판단표가 있습니다. |
| 실제 파일 경로 확인 | [소스 딥다이브](source-deep-dives/README.md) | 로컬 클론에서 뽑은 entrypoint와 구현 근거를 봅니다. |
| 전체 목록을 빠르게 필터링 | [표/CSV 목차](tables/README.md) | CSV와 matrix로 많은 항목을 비교합니다. |

## 범위

- 색인된 Markdown 보고서: 2595
- 보고서 주제: 18
- 폴더 README 지도: 16
- 데이터 인덱스: [data/report-index.json](../data/report-index.json)
- 주제 데이터 폴더: [data/report-categories/](../data/report-categories)
- 표 데이터 폴더: [data/report-tables/](../data/report-tables)

## 바로가기

| 이동 | 여기서 볼 것 |
| --- | --- |
| [먼저 읽기](by-topic/start-here/README.md) | 주요 조사 흐름을 처음부터 잡는 순서. |
| [전체 인사이트 지도](insight-map/README.md) | 각 주제의 의미, 위치, 뽑아낼 인사이트를 한 문서에서 확인. |
| [주제별 보고서 목차](by-topic/README.md) | 모든 Markdown 보고서를 조사 질문 기준으로 탐색. |
| [표/CSV 목차](tables/README.md) | 표, CSV, 주제/유형 matrix 중심 탐색. |
| [레포별 인사이트](repository-insights/README.md) | 레포별 총평, 위험, 근거, 다음 읽기 링크. |
| [소스 딥다이브](source-deep-dives/README.md) | 로컬 클론에서 뽑은 파일 경로 근거. |
| [근거 카테고리](categories/README.md) | 오픈소스, 논문, 발표, 트렌드 출처의 artifact 분류. |

## 먼저 읽기

| 보고서 | 유형 | 폴더 | 우선순위 |
| --- | --- | --- | ---: |
| [30개 오픈소스 AI 코딩/에이전트 프로젝트 비교 분류 보고서](comparisons/01-project-taxonomy-and-feature-comparison.md) | comparison-report | comparisons | 182 |
| [유사군별 비교와 관계 지도](comparisons/02-similarity-clusters.md) | comparison-report | comparisons | 182 |
| [LLM 위키 / AI 지식베이스 오픈소스 100개 구조 분석 총괄](llm-wiki/00-llm-wiki-100-summary.md) | llm-wiki-report | llm-wiki/00-llm-wiki-100-summary.md | 182 |
| [LLM 위키 / AI 지식베이스 오픈소스 100개 비교 요약](llm-wiki/01-llm-wiki-100-selection-and-patterns.md) | llm-wiki-report | llm-wiki/01-llm-wiki-100-selection-and-patterns.md | 182 |
| [LLM Wiki 100 Code-Level Pipeline Comparison](llm-wiki/02-code-level-pipeline-comparison.md) | llm-wiki-report | llm-wiki/02-code-level-pipeline-comparison.md | 182 |
| [AI 에이전트/하네스/컨텍스트/루프 엔지니어링 근거자료 165선](research/02-evidence-catalog-100-sources.md) | research-synthesis | research | 182 |
| [Spec-Driven Development: 스펙 추출과 스펙 메모리 합성 보고서](spec-driven/00-spec-extraction-and-spec-memory-synthesis.md) | spec-driven-report | spec-driven | 182 |
| [Source Inventory](00-source-inventory.md) | overview-report | root | 158 |
| [컨텍스트 엔지니어링, RAG, vLLM/local LLM, 에이전트 하네스 최신 트렌드 분석](adjacent-tech/01-context-rag-vllm-local-llm-harness-trends.md) | infrastructure-report | adjacent-tech | 157 |
| [Claude Code / Codex Harness Materials 1000+ Corpus](agent-harness/00-claude-code-codex-harness-materials-1000.md) | agent-harness-report | agent-harness | 157 |
| [근거 카테고리 목차](categories/README.md) | category-guide | categories | 157 |
| [Global Trending Open Source 500 Analysis](global-trending/00-global-open-source-trend-report-2026-06-18.md) | global-trending-report | global-trending | 157 |


## 핵심 총괄 보고서 펼쳐보기

<details>
<summary>핵심 총괄 보고서 30개 보기</summary>

| 보고서 | 유형 | 폴더 | 우선순위 |
| --- | --- | --- | ---: |
| [30개 오픈소스 AI 코딩/에이전트 프로젝트 비교 분류 보고서](comparisons/01-project-taxonomy-and-feature-comparison.md) | comparison-report | comparisons | 182 |
| [유사군별 비교와 관계 지도](comparisons/02-similarity-clusters.md) | comparison-report | comparisons | 182 |
| [LLM 위키 / AI 지식베이스 오픈소스 100개 구조 분석 총괄](llm-wiki/00-llm-wiki-100-summary.md) | llm-wiki-report | llm-wiki/00-llm-wiki-100-summary.md | 182 |
| [LLM 위키 / AI 지식베이스 오픈소스 100개 비교 요약](llm-wiki/01-llm-wiki-100-selection-and-patterns.md) | llm-wiki-report | llm-wiki/01-llm-wiki-100-selection-and-patterns.md | 182 |
| [LLM Wiki 100 Code-Level Pipeline Comparison](llm-wiki/02-code-level-pipeline-comparison.md) | llm-wiki-report | llm-wiki/02-code-level-pipeline-comparison.md | 182 |
| [AI 에이전트/하네스/컨텍스트/루프 엔지니어링 근거자료 165선](research/02-evidence-catalog-100-sources.md) | research-synthesis | research | 182 |
| [Spec-Driven Development: 스펙 추출과 스펙 메모리 합성 보고서](spec-driven/00-spec-extraction-and-spec-memory-synthesis.md) | spec-driven-report | spec-driven | 182 |
| [Source Inventory](00-source-inventory.md) | overview-report | root | 158 |
| [컨텍스트 엔지니어링, RAG, vLLM/local LLM, 에이전트 하네스 최신 트렌드 분석](adjacent-tech/01-context-rag-vllm-local-llm-harness-trends.md) | infrastructure-report | adjacent-tech | 157 |
| [컨텍스트/RAG/vLLM/local LLM/하네스 50개 레포지토리 상세 분석](adjacent-tech/02-repository-analysis-50.md) | infrastructure-report | adjacent-tech | 157 |
| [Claude Code / Codex Harness Materials 1000+ Corpus](agent-harness/00-claude-code-codex-harness-materials-1000.md) | agent-harness-report | agent-harness | 157 |
| [근거 카테고리 목차](categories/README.md) | category-guide | categories | 157 |
| [Full Source Scan Deep Dive: 필요한 파일을 찾고 읽는 구현 로직](full-source-scan/02-file-discovery-reading-implementation-deep-dive.md) | source-scan-report | full-source-scan | 157 |
| [Global Trending Open Source 500 Analysis](global-trending/00-global-open-source-trend-report-2026-06-18.md) | global-trending-report | global-trending | 157 |
| [한국 개발자 커뮤니티 트렌딩 오픈소스 500개 분석](korea-trending/00-korea-open-source-trend-report-2026-06-18.md) | korea-trending-report | korea-trending | 157 |
| [Agent Harness Conference and Presentation Patterns](presentations/00-agent-harness-conference-presentation-patterns.md) | presentation-report | presentations | 157 |
| [AI Usage Trend Conferences: Big Tech, Amazon/AWS, Global and Korea](presentations/01-ai-usage-trends-bigtech-korea-6-12mo.md) | presentation-report | presentations | 157 |
| [레포별 인사이트](repository-insights/README.md) | overview-report | repository-insights | 157 |
| [2026 AI 코딩 에이전트 설계 트렌드 종합 보고서](research/01-agent-trends-2026.md) | research-synthesis | research | 157 |
| [소스 딥다이브](source-deep-dives/README.md) | source-deep-dive-report | source-deep-dives | 157 |
| [소스 트렌드 인사이트](source-insights/README.md) | source-insight-report | source-insights | 157 |
| [에이전트 하네스/오케스트레이션](categories/agent-harness-orchestration/README.md) | category-guide | categories | 156 |
| [AI 인프라/서빙](categories/ai-infrastructure-serving/README.md) | category-guide | categories | 156 |
| [AI 활용 트렌드](categories/ai-usage-trends/README.md) | category-guide | categories | 156 |
| [코딩 에이전트/IDE](categories/coding-agents-ides/README.md) | category-guide | categories | 156 |
| [컨텍스트/메모리](categories/context-memory/README.md) | category-guide | categories | 156 |
| [데이터 플랫폼/벡터 DB](categories/data-platforms-vector-databases/README.md) | category-guide | categories | 156 |
| [개발 생산성/DevTools](categories/developer-productivity-devtools/README.md) | category-guide | categories | 156 |
| [평가/관측/품질](categories/evals-observability-quality/README.md) | category-guide | categories | 156 |
| [글로벌 AI 오픈소스](categories/global-ai-open-source/README.md) | category-guide | categories | 156 |

</details>

## 주제별 목차

| 주제 | 보고서 수 | 설명 |
| --- | ---: | --- |
| [레포별 딥다이브](by-topic/repository-deep-dives/README.md) | 2434 | 핵심 에이전트, 글로벌/한국 트렌딩, LLM wiki, 클론 구조의 레포별 상세 보고서입니다. |
| [비교/유사도 지도](by-topic/comparisons/README.md) | 1195 | 레포 간 비교, taxonomy matrix, similarity cluster를 보는 주제입니다. |
| [소스 코드 딥다이브](by-topic/source-code-deep-dives/README.md) | 1187 | 로컬 클론에서 뽑은 entrypoint, runtime, retrieval, spec, eval, security, CI/container 경로 근거입니다. |
| [글로벌 트렌딩 오픈소스](by-topic/global-trending-open-source/README.md) | 502 | 전세계 트렌딩 오픈소스 코퍼스와 레포별 보고서를 묶은 주제입니다. |
| [한국 트렌딩 오픈소스](by-topic/korea-trending-open-source/README.md) | 502 | 한국 개발자 커뮤니티, 한국 AI/MCP/RAG 프로젝트, 국내 트렌드 보고서를 묶은 주제입니다. |
| [LLM 위키/RAG/지식베이스](by-topic/llm-wiki/README.md) | 292 | LLM wiki, GraphRAG, 문서 지식베이스, ingestion, retrieval, provenance를 보는 주제입니다. |
| [에이전트 하네스/MCP/오케스트레이션](by-topic/agent-harness/README.md) | 281 | MCP, tool registry, hooks, skills, orchestration, workflow 실행 기반을 보는 주제입니다. |
| [클론 구조/인벤토리](by-topic/clone-structure-inventory/README.md) | 128 | 로컬 클론 목록, 구조 분석, manifest, source directory, 레포별 구조 보고서입니다. |
| [코딩 에이전트/IDE](by-topic/coding-agents/README.md) | 124 | 터미널 에이전트, IDE 에이전트, 코드 리뷰 에이전트, 코딩 보조 도구를 묶은 주제입니다. |
| [스펙 드리븐/요구사항](by-topic/spec-driven/README.md) | 42 | 스펙 추출, 요구사항, 추적성, acceptance criteria, SDD 근거를 보는 주제입니다. |
| [먼저 읽기](by-topic/start-here/README.md) | 21 | 전체 조사 흐름과 핵심 시작점을 빠르게 잡는 상위 지도입니다. |
| [인접 AI 인프라](by-topic/adjacent-infrastructure/README.md) | 18 | 컨텍스트 엔지니어링, RAG 인프라, 벡터 DB, 로컬 LLM 서빙, 평가/관측성을 보는 주제입니다. |
| [카테고리별 근거](by-topic/category-guides/README.md) | 18 | 오픈소스, 연구, 발표, 트렌드 근거를 artifact 기준으로 묶은 분류 지도입니다. |
| [발표/컨퍼런스](by-topic/presentations-conferences/README.md) | 9 | 컨퍼런스, 키노트, 웨비나, 발표 방법론과 산업 신호를 모은 주제입니다. |
| [연구 근거](by-topic/research-foundations/README.md) | 7 | 논문, 근거자료, 충돌 이론, 연구 종합 보고서를 모은 주제입니다. |
| [소스 카탈로그/인벤토리](by-topic/source-catalogs-and-inventories/README.md) | 6 | 조사에 사용한 소스 카탈로그, 인벤토리, 클론 목록, evidence ledger입니다. |
| [AI 활용 트렌드](by-topic/ai-usage-trends/README.md) | 3 | 빅테크, Amazon/AWS, 한국 컨퍼런스, 기업 도입 신호를 모은 최근 AI 활용 트렌드입니다. |
| [전체 소스 스캔/코드 검색](by-topic/full-source-scan/README.md) | 3 | 코딩 에이전트가 소스를 발견하고 인덱싱하고 사용자 의도와 코드 위치를 연결하는 방식입니다. |

## 폴더별 README 지도

| 폴더 README | 보고서 수 | 역할 | 주요 보고서 유형 |
| --- | ---: | --- | --- |
| [global-trending](global-trending/README.md) | 501 | 전세계 오픈소스 트렌드 코퍼스. | per-repository-report (500), global-trending-report (1) |
| [korea-trending](korea-trending/README.md) | 501 | 한국 오픈소스 트렌드 코퍼스. | per-repository-report (500), korea-trending-report (1) |
| [global-trending/repositories](global-trending/repositories/README.md) | 500 | 글로벌 트렌드 레포별 딥다이브. | per-repository-report (500) |
| [korea-trending/repositories](korea-trending/repositories/README.md) | 500 | 한국 트렌드 레포별 딥다이브. | per-repository-report (500) |
| [llm-wiki](llm-wiki/README.md) | 203 | 지식베이스와 retrieval 프로젝트 분석. | llm-wiki-report (103), per-repository-report (100) |
| [clone-structures](clone-structures/README.md) | 127 | 클론된 오픈소스의 물리 소스 트리 분석. | clone-structure-report (127) |
| [llm-wiki/code-level-repositories](llm-wiki/code-level-repositories/README.md) | 100 | LLM wiki 프로젝트의 상세 코드 경로 딥다이브. | llm-wiki-report (100) |
| [llm-wiki/repositories](llm-wiki/repositories/README.md) | 100 | LLM wiki 코퍼스 레포 요약. | per-repository-report (100) |
| [repositories](repositories/README.md) | 30 | 핵심 30개 프로젝트 분석. | per-repository-report (30) |
| [presentations](presentations/README.md) | 5 | 발표와 산업 신호 카탈로그. | presentation-report (5) |
| [adjacent-tech](adjacent-tech/README.md) | 4 | 인접 스택 종합과 소스맵. | infrastructure-report (4) |
| [research](research/README.md) | 4 | 논문, 근거, 이론 종합. | research-synthesis (4) |
| [agent-harness](agent-harness/README.md) | 2 | 에이전트 실행과 하네스 연구. | agent-harness-report (2) |
| [comparisons](comparisons/README.md) | 2 | 프로젝트 간 비교와 관계 지도. | comparison-report (2) |
| [full-source-scan](full-source-scan/README.md) | 1 | 소스 발견과 코드 검색 메커니즘. | source-scan-report (1) |
| [spec-driven](spec-driven/README.md) | 1 | 스펙 드리븐 개발과 요구사항 분석. | spec-driven-report (1) |


## 읽는 순서

1. [reports/insight-map/README.md](insight-map/README.md)에서 각 주제의 의미와 위치를 먼저 잡습니다.
2. [reports/categories/README.md](categories/README.md)에서 조사 대상과 근거 카테고리를 봅니다.
3. [reports/by-topic/README.md](by-topic/README.md)에서 질문별 보고서 묶음을 확인합니다.
4. 구현 근거가 필요하면 [reports/source-deep-dives/README.md](source-deep-dives/README.md)에서 소스 경로를 봅니다.
5. 넓게 비교해야 하면 [reports/tables/README.md](tables/README.md)에서 표와 CSV를 봅니다.
6. 실제 폴더 위치를 이미 알면 위의 폴더별 README 지도를 사용합니다.
7. 완전한 기계 판독 목록은 `data/report-index.json`, `data/report-categories/*.json`, `data/report-tables/*.csv`를 사용합니다.
