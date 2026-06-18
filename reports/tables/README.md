# 표/CSV 중심 보고서 목차

생성 시각: 2026-06-18T15:31:47.876Z

이 페이지는 개별 보고서를 열기 전에 전체 조사 구조를 표로 먼저 훑기 위한 입구입니다.

## 요약

- 조사 단위: 보고서, 주제, 폴더, 보고서 유형을 표와 CSV로 정리한 탐색 허브입니다.
- 포함 범위: 2,594개 보고서, 18개 주제, 16개 폴더 README 지도입니다.
- 데이터 파일: topic/folder/type matrix/all reports CSV를 제공하므로 GitHub 화면과 스프레드시트 양쪽에서 탐색할 수 있습니다.

## 총평

이 README는 읽기보다는 비교와 찾기에 최적화된 입구입니다. 빠른 구조 파악은 주제 요약 표와 폴더 요약 표를 먼저 보고, 특정 보고서 찾기는 `data/report-tables/reports.csv`를 쓰는 방식이 가장 효율적입니다.

## 바로가기

| 이동 | 여기서 볼 것 |
| --- | --- |
| [전체 시작 README](../../README.md) | 레포 전체 목적, 핵심 카테고리, 읽는 순서. |
| [전체 보고서 읽기 지도](../README.md) | 모든 보고서의 시작점, 주제, 폴더 지도. |
| [주제별 보고서 목차](../by-topic/README.md) | 조사 질문 기준으로 보고서를 찾는 입구. |
| [표/CSV 목차](README.md) | 표로 빠르게 훑고 CSV로 비교하는 입구. |
| [레포별 인사이트](../repository-insights/README.md) | 레포별 총평, 위험 신호, 다음에 볼 링크. |
| [소스 딥다이브](../source-deep-dives/README.md) | 로컬 클론에서 뽑은 파일 경로 근거. |
| [소스 트렌드 인사이트](../source-insights/README.md) | 카테고리별 트렌드와 레포별 특징 비교. |
| [근거 카테고리](../categories/README.md) | 오픈소스, 논문, 발표, 참고자료의 artifact 분류. |


## 데이터 파일

| 파일 | 내용 |
| --- | --- |
| [data/report-index.json](../../data/report-index.json) | 전체 보고서 JSON 인덱스. |
| [data/report-tables/topics.csv](../../data/report-tables/topics.csv) | 주제 요약 표. |
| [data/report-tables/folders.csv](../../data/report-tables/folders.csv) | 폴더 요약 표. |
| [data/report-tables/topic-kind-matrix.csv](../../data/report-tables/topic-kind-matrix.csv) | 주제 x 보고서 유형 매트릭스. |
| [data/report-tables/reports.csv](../../data/report-tables/reports.csv) | 모든 색인 보고서의 평면 표. |
| [data/report-tables/repository-insights.csv](../../data/report-tables/repository-insights.csv) | 레포별 인사이트, 위험, 근거, 다음 링크. |
| [data/report-tables/source-deep-scan.csv](../../data/report-tables/source-deep-scan.csv) | 소스 경로 deep scan row와 구현 신호. |
| [data/report-tables/source-category-insights.csv](../../data/report-tables/source-category-insights.csv) | 카테고리별 트렌드, feature, bucket, dependency, risk 집계. |
| [data/report-tables/source-repo-feature-comparison.csv](../../data/report-tables/source-repo-feature-comparison.csv) | 레포별 소스 특징 비교 매트릭스. |

## 주제 요약 표

| 주제 | 보고서 수 | 설명 | 데이터 |
| --- | ---: | --- | --- |
| [레포별 딥다이브](../by-topic/repository-deep-dives/README.md) | 2434 | 핵심 에이전트, 글로벌/한국 트렌딩, LLM wiki, 클론 구조의 레포별 상세 보고서입니다. | [json](../../data/report-categories/repository-deep-dives.json) |
| [비교/유사도 지도](../by-topic/comparisons/README.md) | 1194 | 레포 간 비교, taxonomy matrix, similarity cluster를 보는 주제입니다. | [json](../../data/report-categories/comparisons.json) |
| [소스 코드 딥다이브](../by-topic/source-code-deep-dives/README.md) | 1186 | 로컬 클론에서 뽑은 entrypoint, runtime, retrieval, spec, eval, security, CI/container 경로 근거입니다. | [json](../../data/report-categories/source-code-deep-dives.json) |
| [글로벌 트렌딩 오픈소스](../by-topic/global-trending-open-source/README.md) | 502 | 전세계 트렌딩 오픈소스 코퍼스와 레포별 보고서를 묶은 주제입니다. | [json](../../data/report-categories/global-trending-open-source.json) |
| [한국 트렌딩 오픈소스](../by-topic/korea-trending-open-source/README.md) | 502 | 한국 개발자 커뮤니티, 한국 AI/MCP/RAG 프로젝트, 국내 트렌드 보고서를 묶은 주제입니다. | [json](../../data/report-categories/korea-trending-open-source.json) |
| [LLM 위키/RAG/지식베이스](../by-topic/llm-wiki/README.md) | 292 | LLM wiki, GraphRAG, 문서 지식베이스, ingestion, retrieval, provenance를 보는 주제입니다. | [json](../../data/report-categories/llm-wiki.json) |
| [에이전트 하네스/MCP/오케스트레이션](../by-topic/agent-harness/README.md) | 281 | MCP, tool registry, hooks, skills, orchestration, workflow 실행 기반을 보는 주제입니다. | [json](../../data/report-categories/agent-harness.json) |
| [클론 구조/인벤토리](../by-topic/clone-structure-inventory/README.md) | 128 | 로컬 클론 목록, 구조 분석, manifest, source directory, 레포별 구조 보고서입니다. | [json](../../data/report-categories/clone-structure-inventory.json) |
| [코딩 에이전트/IDE](../by-topic/coding-agents/README.md) | 124 | 터미널 에이전트, IDE 에이전트, 코드 리뷰 에이전트, 코딩 보조 도구를 묶은 주제입니다. | [json](../../data/report-categories/coding-agents.json) |
| [스펙 드리븐/요구사항](../by-topic/spec-driven/README.md) | 42 | 스펙 추출, 요구사항, 추적성, acceptance criteria, SDD 근거를 보는 주제입니다. | [json](../../data/report-categories/spec-driven.json) |
| [먼저 읽기](../by-topic/start-here/README.md) | 21 | 전체 조사 흐름과 핵심 시작점을 빠르게 잡는 상위 지도입니다. | [json](../../data/report-categories/start-here.json) |
| [인접 AI 인프라](../by-topic/adjacent-infrastructure/README.md) | 18 | 컨텍스트 엔지니어링, RAG 인프라, 벡터 DB, 로컬 LLM 서빙, 평가/관측성을 보는 주제입니다. | [json](../../data/report-categories/adjacent-infrastructure.json) |
| [카테고리별 근거](../by-topic/category-guides/README.md) | 18 | 오픈소스, 연구, 발표, 트렌드 근거를 artifact 기준으로 묶은 분류 지도입니다. | [json](../../data/report-categories/category-guides.json) |
| [발표/컨퍼런스](../by-topic/presentations-conferences/README.md) | 9 | 컨퍼런스, 키노트, 웨비나, 발표 방법론과 산업 신호를 모은 주제입니다. | [json](../../data/report-categories/presentations-conferences.json) |
| [연구 근거](../by-topic/research-foundations/README.md) | 7 | 논문, 근거자료, 충돌 이론, 연구 종합 보고서를 모은 주제입니다. | [json](../../data/report-categories/research-foundations.json) |
| [소스 카탈로그/인벤토리](../by-topic/source-catalogs-and-inventories/README.md) | 6 | 조사에 사용한 소스 카탈로그, 인벤토리, 클론 목록, evidence ledger입니다. | [json](../../data/report-categories/source-catalogs-and-inventories.json) |
| [AI 활용 트렌드](../by-topic/ai-usage-trends/README.md) | 3 | 빅테크, Amazon/AWS, 한국 컨퍼런스, 기업 도입 신호를 모은 최근 AI 활용 트렌드입니다. | [json](../../data/report-categories/ai-usage-trends.json) |
| [전체 소스 스캔/코드 검색](../by-topic/full-source-scan/README.md) | 3 | 코딩 에이전트가 소스를 발견하고 인덱싱하고 사용자 의도와 코드 위치를 연결하는 방식입니다. | [json](../../data/report-categories/full-source-scan.json) |

## 폴더 요약 표

| 폴더 README | 보고서 수 | 역할 | 주요 관련 주제 |
| --- | ---: | --- | --- |
| [global-trending](../global-trending/README.md) | 501 | 전세계 오픈소스 트렌드 코퍼스. | 글로벌 트렌딩 오픈소스 (501), 레포별 딥다이브 (500), 에이전트 하네스/MCP/오케스트레이션 (82), 코딩 에이전트/IDE (26) |
| [korea-trending](../korea-trending/README.md) | 501 | 한국 오픈소스 트렌드 코퍼스. | 한국 트렌딩 오픈소스 (501), 레포별 딥다이브 (500), 에이전트 하네스/MCP/오케스트레이션 (46), LLM 위키/RAG/지식베이스 (15) |
| [global-trending/repositories](../global-trending/repositories/README.md) | 500 | 글로벌 트렌드 레포별 딥다이브. | 글로벌 트렌딩 오픈소스 (500), 레포별 딥다이브 (500), 에이전트 하네스/MCP/오케스트레이션 (82), 코딩 에이전트/IDE (26) |
| [korea-trending/repositories](../korea-trending/repositories/README.md) | 500 | 한국 트렌드 레포별 딥다이브. | 레포별 딥다이브 (500), 한국 트렌딩 오픈소스 (500), 에이전트 하네스/MCP/오케스트레이션 (46), LLM 위키/RAG/지식베이스 (15) |
| [llm-wiki](../llm-wiki/README.md) | 203 | 지식베이스와 retrieval 프로젝트 분석. | LLM 위키/RAG/지식베이스 (203), 레포별 딥다이브 (100), 코딩 에이전트/IDE (6), 에이전트 하네스/MCP/오케스트레이션 (4) |
| [clone-structures](../clone-structures/README.md) | 127 | 클론된 오픈소스의 물리 소스 트리 분석. | 레포별 딥다이브 (127), 클론 구조/인벤토리 (127), 스펙 드리븐/요구사항 (15), 코딩 에이전트/IDE (10) |
| [llm-wiki/code-level-repositories](../llm-wiki/code-level-repositories/README.md) | 100 | LLM wiki 프로젝트의 상세 코드 경로 딥다이브. | LLM 위키/RAG/지식베이스 (100), 코딩 에이전트/IDE (3), 에이전트 하네스/MCP/오케스트레이션 (2) |
| [llm-wiki/repositories](../llm-wiki/repositories/README.md) | 100 | LLM wiki 코퍼스 레포 요약. | LLM 위키/RAG/지식베이스 (100), 레포별 딥다이브 (100), 코딩 에이전트/IDE (3), 에이전트 하네스/MCP/오케스트레이션 (2) |
| [repositories](../repositories/README.md) | 30 | 핵심 30개 프로젝트 분석. | 레포별 딥다이브 (30), 코딩 에이전트/IDE (30) |
| [presentations](../presentations/README.md) | 5 | 발표와 산업 신호 카탈로그. | 발표/컨퍼런스 (5), AI 활용 트렌드 (2), 먼저 읽기 (2), 소스 카탈로그/인벤토리 (2) |
| [adjacent-tech](../adjacent-tech/README.md) | 4 | 인접 스택 종합과 소스맵. | LLM 위키/RAG/지식베이스 (4), 인접 AI 인프라 (4), 에이전트 하네스/MCP/오케스트레이션 (2), 먼저 읽기 (1) |
| [research](../research/README.md) | 4 | 논문, 근거, 이론 종합. | 연구 근거 (4), 먼저 읽기 (3), 코딩 에이전트/IDE (1) |
| [agent-harness](../agent-harness/README.md) | 2 | 에이전트 실행과 하네스 연구. | 에이전트 하네스/MCP/오케스트레이션 (2), 코딩 에이전트/IDE (2), 먼저 읽기 (1) |
| [comparisons](../comparisons/README.md) | 2 | 프로젝트 간 비교와 관계 지도. | 먼저 읽기 (2), 비교/유사도 지도 (2), 소스 코드 딥다이브 (1) |
| [full-source-scan](../full-source-scan/README.md) | 1 | 소스 발견과 코드 검색 메커니즘. | 전체 소스 스캔/코드 검색 (1) |
| [spec-driven](../spec-driven/README.md) | 1 | 스펙 드리븐 개발과 요구사항 분석. | 먼저 읽기 (1), 스펙 드리븐/요구사항 (1) |

## 주제 x 보고서 유형 매트릭스

| 주제 | 보고서 수 | agent-harness-report | category-guide | clone-structure-report | comparison-report | global-trending-report | infrastructure-report | korea-trending-report | llm-wiki-report | overview-report | per-repository-report | presentation-report | research-synthesis | source-deep-dive-report | source-insight-report | source-scan-report | spec-driven-report |
| --- | ---: | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 레포별 딥다이브 | 2434 | 0 | 0 | 127 | 0 | 0 | 0 | 0 | 0 | 11 | 1130 | 0 | 0 | 1165 | 0 | 0 | 1 |
| 비교/유사도 지도 | 1194 | 0 | 0 | 0 | 2 | 0 | 0 | 0 | 2 | 11 | 1 | 0 | 0 | 1165 | 12 | 0 | 1 |
| 소스 코드 딥다이브 | 1186 | 0 | 2 | 0 | 1 | 0 | 1 | 1 | 2 | 2 | 0 | 0 | 0 | 1165 | 12 | 0 | 0 |
| 글로벌 트렌딩 오픈소스 | 502 | 0 | 1 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 500 | 0 | 0 | 0 | 0 | 0 | 0 |
| 한국 트렌딩 오픈소스 | 502 | 0 | 1 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 500 | 0 | 0 | 0 | 0 | 0 | 0 |
| LLM 위키/RAG/지식베이스 | 292 | 0 | 1 | 4 | 0 | 0 | 4 | 0 | 103 | 1 | 128 | 0 | 0 | 50 | 1 | 0 | 0 |
| 에이전트 하네스/MCP/오케스트레이션 | 281 | 2 | 2 | 5 | 0 | 0 | 2 | 0 | 2 | 1 | 130 | 1 | 0 | 135 | 1 | 0 | 0 |
| 클론 구조/인벤토리 | 128 | 0 | 0 | 127 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 코딩 에이전트/IDE | 124 | 2 | 1 | 10 | 0 | 0 | 0 | 0 | 3 | 2 | 64 | 1 | 1 | 39 | 1 | 0 | 0 |
| 스펙 드리븐/요구사항 | 42 | 0 | 1 | 15 | 0 | 0 | 0 | 0 | 0 | 1 | 3 | 0 | 0 | 19 | 1 | 0 | 2 |
| 먼저 읽기 | 21 | 1 | 1 | 0 | 2 | 1 | 1 | 1 | 3 | 4 | 0 | 2 | 3 | 1 | 0 | 0 | 1 |
| 인접 AI 인프라 | 18 | 0 | 3 | 1 | 0 | 0 | 4 | 0 | 0 | 2 | 3 | 0 | 0 | 4 | 1 | 0 | 0 |
| 카테고리별 근거 | 18 | 0 | 18 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 발표/컨퍼런스 | 9 | 0 | 1 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 1 | 5 | 0 | 1 | 0 | 0 | 0 |
| 연구 근거 | 7 | 0 | 1 | 0 | 0 | 0 | 1 | 0 | 0 | 1 | 0 | 0 | 4 | 0 | 0 | 0 | 0 |
| 소스 카탈로그/인벤토리 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 4 | 0 | 2 | 0 | 0 | 0 | 0 | 0 |
| AI 활용 트렌드 | 3 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 0 | 0 | 0 | 0 | 0 |
| 전체 소스 스캔/코드 검색 | 3 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 0 | 0 | 0 | 0 | 0 | 1 | 0 |


## 우선순위 상위 80개 보고서

| 보고서 | 유형 | 폴더 | 주제 |
| --- | --- | --- | --- |
| [30개 오픈소스 AI 코딩/에이전트 프로젝트 비교 분류 보고서](../comparisons/01-project-taxonomy-and-feature-comparison.md) | comparison-report | comparisons | 먼저 읽기, 소스 코드 딥다이브, 비교/유사도 지도 |
| [유사군별 비교와 관계 지도](../comparisons/02-similarity-clusters.md) | comparison-report | comparisons | 먼저 읽기, 비교/유사도 지도 |
| [LLM 위키 / AI 지식베이스 오픈소스 100개 구조 분석 총괄](../llm-wiki/00-llm-wiki-100-summary.md) | llm-wiki-report | llm-wiki/00-llm-wiki-100-summary.md | 먼저 읽기, 소스 코드 딥다이브, LLM 위키/RAG/지식베이스 |
| [LLM 위키 / AI 지식베이스 오픈소스 100개 비교 요약](../llm-wiki/01-llm-wiki-100-selection-and-patterns.md) | llm-wiki-report | llm-wiki/01-llm-wiki-100-selection-and-patterns.md | 먼저 읽기, 소스 코드 딥다이브, LLM 위키/RAG/지식베이스, 비교/유사도 지도 |
| [LLM Wiki 100 Code-Level Pipeline Comparison](../llm-wiki/02-code-level-pipeline-comparison.md) | llm-wiki-report | llm-wiki/02-code-level-pipeline-comparison.md | 먼저 읽기, LLM 위키/RAG/지식베이스, 비교/유사도 지도 |
| [AI 에이전트/하네스/컨텍스트/루프 엔지니어링 근거자료 165선](../research/02-evidence-catalog-100-sources.md) | research-synthesis | research | 먼저 읽기, 코딩 에이전트/IDE, 연구 근거 |
| [Spec-Driven Development: 스펙 추출과 스펙 메모리 합성 보고서](../spec-driven/00-spec-extraction-and-spec-memory-synthesis.md) | spec-driven-report | spec-driven | 먼저 읽기, 스펙 드리븐/요구사항 |
| [Source Inventory](../00-source-inventory.md) | overview-report | root | 먼저 읽기, 전체 소스 스캔/코드 검색, 소스 카탈로그/인벤토리 |
| [컨텍스트 엔지니어링, RAG, vLLM/local LLM, 에이전트 하네스 최신 트렌드 분석](../adjacent-tech/01-context-rag-vllm-local-llm-harness-trends.md) | infrastructure-report | adjacent-tech | 먼저 읽기, 에이전트 하네스/MCP/오케스트레이션, LLM 위키/RAG/지식베이스, 인접 AI 인프라 |
| [컨텍스트/RAG/vLLM/local LLM/하네스 50개 레포지토리 상세 분석](../adjacent-tech/02-repository-analysis-50.md) | infrastructure-report | adjacent-tech | LLM 위키/RAG/지식베이스, 인접 AI 인프라 |
| [Claude Code / Codex Harness Materials 1000+ Corpus](../agent-harness/00-claude-code-codex-harness-materials-1000.md) | agent-harness-report | agent-harness | 먼저 읽기, 코딩 에이전트/IDE, 에이전트 하네스/MCP/오케스트레이션 |
| [근거 카테고리 목차](../categories/README.md) | category-guide | categories | 먼저 읽기, 카테고리별 근거 |
| [Full Source Scan Deep Dive: 필요한 파일을 찾고 읽는 구현 로직](../full-source-scan/02-file-discovery-reading-implementation-deep-dive.md) | source-scan-report | full-source-scan | 전체 소스 스캔/코드 검색 |
| [Global Trending Open Source 500 Analysis](../global-trending/00-global-open-source-trend-report-2026-06-18.md) | global-trending-report | global-trending | 먼저 읽기, 글로벌 트렌딩 오픈소스 |
| [한국 개발자 커뮤니티 트렌딩 오픈소스 500개 분석](../korea-trending/00-korea-open-source-trend-report-2026-06-18.md) | korea-trending-report | korea-trending | 먼저 읽기, 소스 코드 딥다이브, 한국 트렌딩 오픈소스 |
| [Agent Harness Conference and Presentation Patterns](../presentations/00-agent-harness-conference-presentation-patterns.md) | presentation-report | presentations | 먼저 읽기, 에이전트 하네스/MCP/오케스트레이션, 발표/컨퍼런스 |
| [AI Usage Trend Conferences: Big Tech, Amazon/AWS, Global and Korea](../presentations/01-ai-usage-trends-bigtech-korea-6-12mo.md) | presentation-report | presentations | 먼저 읽기, 발표/컨퍼런스, AI 활용 트렌드 |
| [레포별 인사이트](../repository-insights/README.md) | overview-report | repository-insights | 먼저 읽기, 비교/유사도 지도, 레포별 딥다이브 |
| [2026 AI 코딩 에이전트 설계 트렌드 종합 보고서](../research/01-agent-trends-2026.md) | research-synthesis | research | 먼저 읽기, 연구 근거 |
| [소스 딥다이브](../source-deep-dives/README.md) | source-deep-dive-report | source-deep-dives | 먼저 읽기, 소스 코드 딥다이브, 비교/유사도 지도, 레포별 딥다이브 |
| [소스 트렌드 인사이트](../source-insights/README.md) | source-insight-report | source-insights | 소스 코드 딥다이브, 비교/유사도 지도 |
| [에이전트 하네스/오케스트레이션](../categories/agent-harness-orchestration/README.md) | category-guide | categories | 카테고리별 근거, 에이전트 하네스/MCP/오케스트레이션 |
| [AI 인프라/서빙](../categories/ai-infrastructure-serving/README.md) | category-guide | categories | 카테고리별 근거, 인접 AI 인프라 |
| [AI 활용 트렌드](../categories/ai-usage-trends/README.md) | category-guide | categories | 카테고리별 근거, AI 활용 트렌드 |
| [코딩 에이전트/IDE](../categories/coding-agents-ides/README.md) | category-guide | categories | 카테고리별 근거, 코딩 에이전트/IDE |
| [컨텍스트/메모리](../categories/context-memory/README.md) | category-guide | categories | 카테고리별 근거 |
| [데이터 플랫폼/벡터 DB](../categories/data-platforms-vector-databases/README.md) | category-guide | categories | 카테고리별 근거, 인접 AI 인프라 |
| [개발 생산성/DevTools](../categories/developer-productivity-devtools/README.md) | category-guide | categories | 카테고리별 근거 |
| [평가/관측/품질](../categories/evals-observability-quality/README.md) | category-guide | categories | 카테고리별 근거, 인접 AI 인프라 |
| [글로벌 AI 오픈소스](../categories/global-ai-open-source/README.md) | category-guide | categories | 카테고리별 근거, 소스 코드 딥다이브, 글로벌 트렌딩 오픈소스 |
| [한국 AI/오픈소스](../categories/korean-ai-open-source/README.md) | category-guide | categories | 카테고리별 근거, 소스 코드 딥다이브, 한국 트렌딩 오픈소스 |
| [LLM 위키/RAG/지식베이스](../categories/llm-wiki-rag-knowledge/README.md) | category-guide | categories | 카테고리별 근거, LLM 위키/RAG/지식베이스 |
| [로컬 LLM/모델](../categories/local-llm-models/README.md) | category-guide | categories | 카테고리별 근거 |
| [MCP/도구/프로토콜](../categories/mcp-tools-protocols/README.md) | category-guide | categories | 카테고리별 근거, 에이전트 하네스/MCP/오케스트레이션 |
| [발표/컨퍼런스](../categories/presentations-conferences/README.md) | category-guide | categories | 카테고리별 근거, 발표/컨퍼런스 |
| [논문/연구 근거](../categories/research-papers/README.md) | category-guide | categories | 카테고리별 근거, 연구 근거 |
| [보안/거버넌스/안전](../categories/security-governance-safety/README.md) | category-guide | categories | 카테고리별 근거 |
| [스펙 드리븐/요구사항](../categories/spec-driven-requirements/README.md) | category-guide | categories | 카테고리별 근거, 스펙 드리븐/요구사항 |
| [역할군별 레포 인사이트](../repository-insights/by-role/README.md) | overview-report | repository-insights | 비교/유사도 지도, 레포별 딥다이브 |
| [주제별 소스 딥다이브](../source-deep-dives/by-topic/README.md) | source-deep-dive-report | source-deep-dives | 소스 코드 딥다이브, 비교/유사도 지도, 레포별 딥다이브 |
| [카테고리별 소스 인사이트](../source-insights/by-category/README.md) | source-insight-report | source-insights | 소스 코드 딥다이브, 비교/유사도 지도 |
| [에이전트 하네스/MCP](../repository-insights/by-role/agent-harness-mcp/README.md) | overview-report | repository-insights | 에이전트 하네스/MCP/오케스트레이션, 비교/유사도 지도, 레포별 딥다이브 |
| [AI 인프라/서빙](../repository-insights/by-role/ai-infrastructure-serving/README.md) | overview-report | repository-insights | 비교/유사도 지도, 레포별 딥다이브 |
| [코딩 에이전트/IDE](../repository-insights/by-role/coding-agent-ide/README.md) | overview-report | repository-insights | 코딩 에이전트/IDE, 비교/유사도 지도, 레포별 딥다이브 |
| [데이터/벡터 플랫폼](../repository-insights/by-role/data-vector-platform/README.md) | overview-report | repository-insights | 비교/유사도 지도, 레포별 딥다이브 |
| [개발 생산성/DevTools](../repository-insights/by-role/developer-productivity/README.md) | overview-report | repository-insights | 비교/유사도 지도, 레포별 딥다이브 |
| [평가/관측/품질](../repository-insights/by-role/eval-observability/README.md) | overview-report | repository-insights | 인접 AI 인프라, 비교/유사도 지도, 레포별 딥다이브 |
| [일반 AI 오픈소스](../repository-insights/by-role/general-ai-open-source/README.md) | overview-report | repository-insights | 소스 코드 딥다이브, 비교/유사도 지도, 레포별 딥다이브 |
| [LLM 위키/RAG/지식베이스](../repository-insights/by-role/llm-wiki-rag/README.md) | overview-report | repository-insights | LLM 위키/RAG/지식베이스, 비교/유사도 지도, 레포별 딥다이브 |
| [보안/거버넌스/안전](../repository-insights/by-role/security-governance/README.md) | overview-report | repository-insights | 비교/유사도 지도, 레포별 딥다이브 |
| [스펙 드리븐/요구사항](../repository-insights/by-role/spec-driven/README.md) | spec-driven-report | repository-insights | 스펙 드리븐/요구사항, 비교/유사도 지도, 레포별 딥다이브 |
| [에이전트 하네스/MCP 소스 딥다이브](../source-deep-dives/by-topic/agent-harness-mcp/README.md) | source-deep-dive-report | source-deep-dives | 소스 코드 딥다이브, 에이전트 하네스/MCP/오케스트레이션, 비교/유사도 지도, 레포별 딥다이브 |
| [AI 인프라/서빙 소스 딥다이브](../source-deep-dives/by-topic/ai-infrastructure-serving/README.md) | source-deep-dive-report | source-deep-dives | 소스 코드 딥다이브, 비교/유사도 지도, 레포별 딥다이브 |
| [코딩 에이전트/IDE 소스 딥다이브](../source-deep-dives/by-topic/coding-agent-ide/README.md) | source-deep-dive-report | source-deep-dives | 소스 코드 딥다이브, 코딩 에이전트/IDE, 비교/유사도 지도, 레포별 딥다이브 |
| [데이터/벡터 플랫폼 소스 딥다이브](../source-deep-dives/by-topic/data-vector-platform/README.md) | source-deep-dive-report | source-deep-dives | 소스 코드 딥다이브, 비교/유사도 지도, 레포별 딥다이브 |
| [개발 생산성/DevTools 소스 딥다이브](../source-deep-dives/by-topic/developer-productivity/README.md) | source-deep-dive-report | source-deep-dives | 소스 코드 딥다이브, 비교/유사도 지도, 레포별 딥다이브 |
| [평가/관측/품질 소스 딥다이브](../source-deep-dives/by-topic/eval-observability/README.md) | source-deep-dive-report | source-deep-dives | 소스 코드 딥다이브, 인접 AI 인프라, 비교/유사도 지도, 레포별 딥다이브 |
| [일반 AI 오픈소스 소스 딥다이브](../source-deep-dives/by-topic/general-ai-open-source/README.md) | source-deep-dive-report | source-deep-dives | 소스 코드 딥다이브, 비교/유사도 지도, 레포별 딥다이브 |
| [LLM 위키/RAG/지식베이스 소스 딥다이브](../source-deep-dives/by-topic/llm-wiki-rag/README.md) | source-deep-dive-report | source-deep-dives | 소스 코드 딥다이브, LLM 위키/RAG/지식베이스, 비교/유사도 지도, 레포별 딥다이브 |
| [보안/거버넌스/안전 소스 딥다이브](../source-deep-dives/by-topic/security-governance/README.md) | source-deep-dive-report | source-deep-dives | 소스 코드 딥다이브, 비교/유사도 지도, 레포별 딥다이브 |
| [스펙 드리븐/요구사항 소스 딥다이브](../source-deep-dives/by-topic/spec-driven/README.md) | source-deep-dive-report | source-deep-dives | 소스 코드 딥다이브, 스펙 드리븐/요구사항, 비교/유사도 지도, 레포별 딥다이브 |
| [에이전트 하네스/MCP 소스 인사이트](../source-insights/by-category/agent-harness-mcp/README.md) | source-insight-report | source-insights | 소스 코드 딥다이브, 에이전트 하네스/MCP/오케스트레이션, 비교/유사도 지도 |
| [AI 인프라/서빙 소스 인사이트](../source-insights/by-category/ai-infrastructure-serving/README.md) | source-insight-report | source-insights | 소스 코드 딥다이브, 비교/유사도 지도 |
| [코딩 에이전트/IDE 소스 인사이트](../source-insights/by-category/coding-agent-ide/README.md) | source-insight-report | source-insights | 소스 코드 딥다이브, 코딩 에이전트/IDE, 비교/유사도 지도 |
| [데이터/벡터 플랫폼 소스 인사이트](../source-insights/by-category/data-vector-platform/README.md) | source-insight-report | source-insights | 소스 코드 딥다이브, 비교/유사도 지도 |
| [개발 생산성/DevTools 소스 인사이트](../source-insights/by-category/developer-productivity/README.md) | source-insight-report | source-insights | 소스 코드 딥다이브, 비교/유사도 지도 |
| [평가/관측/품질 소스 인사이트](../source-insights/by-category/eval-observability/README.md) | source-insight-report | source-insights | 소스 코드 딥다이브, 인접 AI 인프라, 비교/유사도 지도 |
| [일반 AI 오픈소스 소스 인사이트](../source-insights/by-category/general-ai-open-source/README.md) | source-insight-report | source-insights | 소스 코드 딥다이브, 비교/유사도 지도 |
| [LLM 위키/RAG/지식베이스 소스 인사이트](../source-insights/by-category/llm-wiki-rag/README.md) | source-insight-report | source-insights | 소스 코드 딥다이브, LLM 위키/RAG/지식베이스, 비교/유사도 지도 |
| [보안/거버넌스/안전 소스 인사이트](../source-insights/by-category/security-governance/README.md) | source-insight-report | source-insights | 소스 코드 딥다이브, 비교/유사도 지도 |
| [스펙 드리븐/요구사항 소스 인사이트](../source-insights/by-category/spec-driven/README.md) | source-insight-report | source-insights | 소스 코드 딥다이브, 스펙 드리븐/요구사항, 비교/유사도 지도 |
| [127개 로컬 클론 구조 분석 총괄](../clone-structure-analysis-127.md) | overview-report | root | 먼저 읽기, 클론 구조/인벤토리 |
| [전체 소스 스캔과 사용자 의도-코드 연결 방식 리서치 요약](../full-source-scan-research-summary-2026-06-18.md) | overview-report | root | 먼저 읽기, 전체 소스 스캔/코드 검색, 소스 코드 딥다이브 |
| [Codex Harness Setup Guide from Claude Code Patterns](../agent-harness/codex-harness-setup-guide.md) | agent-harness-report | agent-harness | 코딩 에이전트/IDE, 에이전트 하네스/MCP/오케스트레이션 |
| [AI Usage Trend Conference Source Catalog](../presentations/ai-usage-trend-source-catalog-6-12mo.md) | presentation-report | presentations | 발표/컨퍼런스, AI 활용 트렌드, 소스 카탈로그/인벤토리 |
| [Conference Source Catalog](../presentations/conference-source-catalog.md) | presentation-report | presentations | 발표/컨퍼런스, 소스 카탈로그/인벤토리 |
| [KalyanKS-NLP/rag-zero-to-hero-guide 코드 레벨 분석](../llm-wiki/code-level-repositories/KalyanKS-NLP__rag-zero-to-hero-guide.md) | llm-wiki-report | llm-wiki/code-level-repositories | 코딩 에이전트/IDE, LLM 위키/RAG/지식베이스 |
| [VectifyAI/PageIndex 코드 레벨 분석](../llm-wiki/code-level-repositories/VectifyAI__PageIndex.md) | llm-wiki-report | llm-wiki/code-level-repositories | LLM 위키/RAG/지식베이스 |
| [Source Inventory](../adjacent-tech-source-inventory.md) | overview-report | root | 인접 AI 인프라, 소스 카탈로그/인벤토리 |
| [Current Clone Inventory: 107 Open Source Repositories](../current-clone-inventory-107.md) | overview-report | root | 소스 카탈로그/인벤토리 |
