# LimEulYoung/legal_mcp 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

Legal MCP Server for Korean law search

## 요약

- 조사 단위: `sources/LimEulYoung__legal_mcp` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 112 files, 12 directories, depth score 91, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 api/server, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 retrieval=src/utils/embedding.py, benchmark/scripts/rag_benchmark_claude.py, benchmark/scripts/rag_benchmark_gemini.py이고, 의존성 단서는 openai, anthropic, mcp, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 지식/RAG 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

## 바로가기

| 이동 | 여기서 볼 것 |
| --- | --- |
| [전체 시작 README](../../../../README.md) | 레포 전체 목적, 핵심 카테고리, 읽는 순서. |
| [전체 보고서 읽기 지도](../../../README.md) | 모든 보고서의 시작점, 주제, 폴더 지도. |
| [주제별 보고서 목차](../../../by-topic/README.md) | 조사 질문 기준으로 보고서를 찾는 입구. |
| [표/CSV 목차](../../../tables/README.md) | 표로 빠르게 훑고 CSV로 비교하는 입구. |
| [레포별 인사이트](../../../repository-insights/README.md) | 레포별 총평과 위험 신호. |
| [소스 딥다이브](../../README.md) | 주제별 소스 경로 근거. |
| [레포별 소스 딥다이브](../README.md) | 로컬 클론 1개당 1개 Markdown 딥다이브. |
| [소스 트렌드 인사이트](../../../source-insights/README.md) | 카테고리별 트렌드와 레포별 특징 비교. |


## 레포 컨텍스트

| 항목 | 값 |
| --- | --- |
| 레포 | LimEulYoung/legal_mcp |
| 주제 | LLM 위키/RAG/지식베이스 / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | Python |
| Stars | 없음 |
| Forks | 없음 |
| License | 없음 |
| 성숙도 | 초기 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/LimEulYoung__legal_mcp](../../../../sources/LimEulYoung__legal_mcp) |
| 기존 보고서 | [reports/korea-trending/repositories/LimEulYoung__legal_mcp.md](../../../korea-trending/repositories/LimEulYoung__legal_mcp.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 112 / 12 |
| 관측 최대 깊이 | 4 |
| 상위 디렉터리 | assets, benchmark, docs, src |
| 상위 확장자 | .json: 70, .py: 30, .md: 5, .csv: 2, .png: 2, .example: 1, .txt: 1, (none): 1 |
| 소스 패턴 | api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 12 |
| src | source boundary | 9 |
| assets | top-level component | 1 |
| benchmark | validation surface | 1 |


## 실행 방식

_root manifest에서 추출된 command surface가 없습니다._


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai, anthropic |
| agentProtocols | mcp |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | 없음 |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| retrieval | [src/utils/embedding.py](../../../../sources/LimEulYoung__legal_mcp/src/utils/embedding.py) | retrieval signal |
| retrieval | [benchmark/scripts/rag_benchmark_claude.py](../../../../sources/LimEulYoung__legal_mcp/benchmark/scripts/rag_benchmark_claude.py) | retrieval signal |
| retrieval | [benchmark/scripts/rag_benchmark_gemini.py](../../../../sources/LimEulYoung__legal_mcp/benchmark/scripts/rag_benchmark_gemini.py) | retrieval signal |
| retrieval | [benchmark/scripts/rag_benchmark_gpt.py](../../../../sources/LimEulYoung__legal_mcp/benchmark/scripts/rag_benchmark_gpt.py) | retrieval signal |
| entrypoints | [src/server.py](../../../../sources/LimEulYoung__legal_mcp/src/server.py) | entrypoints signal |
| docs | [README.md](../../../../sources/LimEulYoung__legal_mcp/README.md) | docs signal |
| docs | [docs/config-spec.md](../../../../sources/LimEulYoung__legal_mcp/docs/config-spec.md) | docs signal |
| docs | [docs/elasticsearch-fields.md](../../../../sources/LimEulYoung__legal_mcp/docs/elasticsearch-fields.md) | docs signal |
| docs | [docs/modules-spec.md](../../../../sources/LimEulYoung__legal_mcp/docs/modules-spec.md) | docs signal |
| eval | [docs/tools-spec.md](../../../../sources/LimEulYoung__legal_mcp/docs/tools-spec.md) | eval signal |
| eval | [benchmark/benchmark_2025.csv](../../../../sources/LimEulYoung__legal_mcp/benchmark/benchmark_2025.csv) | eval signal |
| config | [requirements.txt](../../../../sources/LimEulYoung__legal_mcp/requirements.txt) | config signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 1 | [src/server.py](../../../../sources/LimEulYoung__legal_mcp/src/server.py) |
| agentRuntime | 7 | [src/tools/__init__.py](../../../../sources/LimEulYoung__legal_mcp/src/tools/__init__.py)<br>[src/tools/get_case_content.py](../../../../sources/LimEulYoung__legal_mcp/src/tools/get_case_content.py)<br>[src/tools/get_statute_content.py](../../../../sources/LimEulYoung__legal_mcp/src/tools/get_statute_content.py)<br>[src/tools/list_statute_articles.py](../../../../sources/LimEulYoung__legal_mcp/src/tools/list_statute_articles.py)<br>[src/tools/search_cases.py](../../../../sources/LimEulYoung__legal_mcp/src/tools/search_cases.py)<br>[src/tools/search_statutes.py](../../../../sources/LimEulYoung__legal_mcp/src/tools/search_statutes.py)<br>[docs/tools-spec.md](../../../../sources/LimEulYoung__legal_mcp/docs/tools-spec.md) |
| mcp | 25 | [benchmark/scripts/mcp_benchmark_claude.py](../../../../sources/LimEulYoung__legal_mcp/benchmark/scripts/mcp_benchmark_claude.py)<br>[benchmark/scripts/mcp_benchmark_gemini_guided_high.py](../../../../sources/LimEulYoung__legal_mcp/benchmark/scripts/mcp_benchmark_gemini_guided_high.py)<br>[benchmark/scripts/mcp_benchmark_gemini_guided_low.py](../../../../sources/LimEulYoung__legal_mcp/benchmark/scripts/mcp_benchmark_gemini_guided_low.py)<br>[benchmark/scripts/mcp_benchmark_gemini.py](../../../../sources/LimEulYoung__legal_mcp/benchmark/scripts/mcp_benchmark_gemini.py)<br>[benchmark/scripts/mcp_benchmark_gpt.py](../../../../sources/LimEulYoung__legal_mcp/benchmark/scripts/mcp_benchmark_gpt.py)<br>[benchmark/results/2026/mcp_benchmark_claude_sonnet_4_5_20250929_max_result.json](../../../../sources/LimEulYoung__legal_mcp/benchmark/results/2026/mcp_benchmark_claude_sonnet_4_5_20250929_max_result.json)<br>[benchmark/results/2026/mcp_benchmark_claude_sonnet_4_5_20250929_none_result.json](../../../../sources/LimEulYoung__legal_mcp/benchmark/results/2026/mcp_benchmark_claude_sonnet_4_5_20250929_none_result.json)<br>[benchmark/results/2026/mcp_benchmark_gemini_2_5_pro_low_result.json](../../../../sources/LimEulYoung__legal_mcp/benchmark/results/2026/mcp_benchmark_gemini_2_5_pro_low_result.json) |
| retrieval | 20 | [src/utils/embedding.py](../../../../sources/LimEulYoung__legal_mcp/src/utils/embedding.py)<br>[benchmark/scripts/rag_benchmark_claude.py](../../../../sources/LimEulYoung__legal_mcp/benchmark/scripts/rag_benchmark_claude.py)<br>[benchmark/scripts/rag_benchmark_gemini.py](../../../../sources/LimEulYoung__legal_mcp/benchmark/scripts/rag_benchmark_gemini.py)<br>[benchmark/scripts/rag_benchmark_gpt.py](../../../../sources/LimEulYoung__legal_mcp/benchmark/scripts/rag_benchmark_gpt.py)<br>[benchmark/results/2026/rag_benchmark_claude_sonnet_4_5_20250929_max_result.json](../../../../sources/LimEulYoung__legal_mcp/benchmark/results/2026/rag_benchmark_claude_sonnet_4_5_20250929_max_result.json)<br>[benchmark/results/2026/rag_benchmark_claude_sonnet_4_5_20250929_non_thinking_result.json](../../../../sources/LimEulYoung__legal_mcp/benchmark/results/2026/rag_benchmark_claude_sonnet_4_5_20250929_non_thinking_result.json)<br>[benchmark/results/2026/rag_benchmark_gemini_2_5_pro_low_result.json](../../../../sources/LimEulYoung__legal_mcp/benchmark/results/2026/rag_benchmark_gemini_2_5_pro_low_result.json)<br>[benchmark/results/2026/rag_benchmark_gemini_2_5_pro_max_result.json](../../../../sources/LimEulYoung__legal_mcp/benchmark/results/2026/rag_benchmark_gemini_2_5_pro_max_result.json) |
| spec | 4 | [requirements.txt](../../../../sources/LimEulYoung__legal_mcp/requirements.txt)<br>[docs/config-spec.md](../../../../sources/LimEulYoung__legal_mcp/docs/config-spec.md)<br>[docs/modules-spec.md](../../../../sources/LimEulYoung__legal_mcp/docs/modules-spec.md)<br>[docs/tools-spec.md](../../../../sources/LimEulYoung__legal_mcp/docs/tools-spec.md) |
| eval | 89 | [docs/config-spec.md](../../../../sources/LimEulYoung__legal_mcp/docs/config-spec.md)<br>[docs/modules-spec.md](../../../../sources/LimEulYoung__legal_mcp/docs/modules-spec.md)<br>[docs/tools-spec.md](../../../../sources/LimEulYoung__legal_mcp/docs/tools-spec.md)<br>[benchmark/benchmark_2025.csv](../../../../sources/LimEulYoung__legal_mcp/benchmark/benchmark_2025.csv)<br>[benchmark/benchmark_2026.csv](../../../../sources/LimEulYoung__legal_mcp/benchmark/benchmark_2026.csv)<br>[benchmark/scripts/ablation_claude.py](../../../../sources/LimEulYoung__legal_mcp/benchmark/scripts/ablation_claude.py)<br>[benchmark/scripts/ablation_gemini.py](../../../../sources/LimEulYoung__legal_mcp/benchmark/scripts/ablation_gemini.py)<br>[benchmark/scripts/ablation_gpt.py](../../../../sources/LimEulYoung__legal_mcp/benchmark/scripts/ablation_gpt.py) |
| security | 0 | 명확하지 않음 |
| ci | 0 | 명확하지 않음 |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 5 | [README.md](../../../../sources/LimEulYoung__legal_mcp/README.md)<br>[docs/config-spec.md](../../../../sources/LimEulYoung__legal_mcp/docs/config-spec.md)<br>[docs/elasticsearch-fields.md](../../../../sources/LimEulYoung__legal_mcp/docs/elasticsearch-fields.md)<br>[docs/modules-spec.md](../../../../sources/LimEulYoung__legal_mcp/docs/modules-spec.md)<br>[docs/tools-spec.md](../../../../sources/LimEulYoung__legal_mcp/docs/tools-spec.md) |
| config | 1 | [requirements.txt](../../../../sources/LimEulYoung__legal_mcp/requirements.txt) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 89 | [docs/config-spec.md](../../../../sources/LimEulYoung__legal_mcp/docs/config-spec.md)<br>[docs/modules-spec.md](../../../../sources/LimEulYoung__legal_mcp/docs/modules-spec.md)<br>[docs/tools-spec.md](../../../../sources/LimEulYoung__legal_mcp/docs/tools-spec.md)<br>[benchmark/benchmark_2025.csv](../../../../sources/LimEulYoung__legal_mcp/benchmark/benchmark_2025.csv)<br>[benchmark/benchmark_2026.csv](../../../../sources/LimEulYoung__legal_mcp/benchmark/benchmark_2026.csv)<br>[benchmark/scripts/ablation_claude.py](../../../../sources/LimEulYoung__legal_mcp/benchmark/scripts/ablation_claude.py) |
| CI workflow | 0 | 명확하지 않음 |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | CI workflow 경로가 명확하지 않음; container/deploy 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `src/utils/embedding.py`, `benchmark/scripts/rag_benchmark_claude.py`, `benchmark/scripts/rag_benchmark_gemini.py`.
2. entrypoint를 따라 실행 흐름 확인: `src/server.py`.
3. agent/tool runtime 매핑: `src/tools/__init__.py`, `src/tools/get_case_content.py`, `src/tools/get_statute_content.py`.
4. retrieval/memory/indexing 확인: `src/utils/embedding.py`, `benchmark/scripts/rag_benchmark_claude.py`, `benchmark/scripts/rag_benchmark_gemini.py`.
5. test/eval 파일로 동작 검증: `docs/config-spec.md`, `docs/modules-spec.md`, `docs/tools-spec.md`.

## 기존 레포 인사이트

LLM 위키/RAG/지식베이스 관점에서 Legal MCP Server for Korean law search. 핵심 구조 신호는 Python, requirements.txt, README.md, openai, anthropic, mcp이며, 소스+보고서 근거 수준으로 초기 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 지식/RAG 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, CI 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
