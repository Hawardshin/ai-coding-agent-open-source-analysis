# neo4j-labs/llm-graph-builder 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

Neo4j graph construction from unstructured data using LLMs

## 요약

- 조사 단위: `sources/neo4j-labs__llm-graph-builder` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 354 files, 65 directories, depth score 109, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 retrieval=POC_Documents/V1/Local-to-global-genAI_GraphRAG_V1, frontend/index.html, frontend/src/index.css이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 지식/RAG 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | neo4j-labs/llm-graph-builder |
| 주제 | LLM 위키/RAG/지식베이스 / LLM 위키/RAG/지식베이스 |
| Region | mixed |
| Language | Jupyter Notebook |
| Stars | 4799 |
| Forks | 826 |
| License | Apache-2.0 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/neo4j-labs__llm-graph-builder](../../../../sources/neo4j-labs__llm-graph-builder) |
| 기존 보고서 | [reports/llm-wiki/repositories/neo4j-labs__llm-graph-builder.md](../../../llm-wiki/repositories/neo4j-labs__llm-graph-builder.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 354 / 65 |
| 관측 최대 깊이 | 7 |
| 상위 디렉터리 | .github, backend, cronjob, data, docs, experiments, frontend, POC_Documents, POC_Experiments |
| 상위 확장자 | .tsx: 110, .jpg: 62, .ts: 39, .py: 36, .svg: 23, .ipynb: 14, (none): 14, .json: 10, .png: 10, .md: 7, .adoc: 3, .css: 3 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 39 |
| .github | ci surface | 1 |
| backend | top-level component | 1 |
| cronjob | top-level component | 1 |
| data | top-level component | 1 |
| experiments | top-level component | 1 |
| frontend | top-level component | 1 |
| POC_Documents | documentation surface | 1 |
| POC_Experiments | top-level component | 1 |


## 실행 방식

_root manifest에서 추출된 command surface가 없습니다._


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
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
| retrieval | [POC_Documents/V1/Local-to-global-genAI_GraphRAG_V1](../../../../sources/neo4j-labs__llm-graph-builder/POC_Documents/V1/Local-to-global-genAI_GraphRAG_V1) | retrieval signal |
| retrieval | [frontend/index.html](../../../../sources/neo4j-labs__llm-graph-builder/frontend/index.html) | retrieval signal |
| retrieval | [frontend/src/index.css](../../../../sources/neo4j-labs__llm-graph-builder/frontend/src/index.css) | retrieval signal |
| retrieval | [frontend/src/components/Popups/RetryConfirmation/Index.tsx](../../../../sources/neo4j-labs__llm-graph-builder/frontend/src/components/Popups/RetryConfirmation/Index.tsx) | retrieval signal |
| entrypoints | [frontend/src/App.css](../../../../sources/neo4j-labs__llm-graph-builder/frontend/src/App.css) | entrypoints signal |
| entrypoints | [frontend/src/App.tsx](../../../../sources/neo4j-labs__llm-graph-builder/frontend/src/App.tsx) | entrypoints signal |
| entrypoints | [frontend/src/main.tsx](../../../../sources/neo4j-labs__llm-graph-builder/frontend/src/main.tsx) | entrypoints signal |
| docs | [README.md](../../../../sources/neo4j-labs__llm-graph-builder/README.md) | docs signal |
| docs | [frontend/README.md](../../../../sources/neo4j-labs__llm-graph-builder/frontend/README.md) | docs signal |
| docs | [experiments/README.md](../../../../sources/neo4j-labs__llm-graph-builder/experiments/README.md) | docs signal |
| docs | [docs/project architecture.png](../../../../sources/neo4j-labs__llm-graph-builder/docs/project architecture.png) | docs signal |
| eval | [experiments/RAGAS_evaluation.csv](../../../../sources/neo4j-labs__llm-graph-builder/experiments/RAGAS_evaluation.csv) | eval signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 7 | [frontend/src/App.css](../../../../sources/neo4j-labs__llm-graph-builder/frontend/src/App.css)<br>[frontend/src/App.tsx](../../../../sources/neo4j-labs__llm-graph-builder/frontend/src/App.tsx)<br>[frontend/src/index.css](../../../../sources/neo4j-labs__llm-graph-builder/frontend/src/index.css)<br>[frontend/src/main.tsx](../../../../sources/neo4j-labs__llm-graph-builder/frontend/src/main.tsx)<br>[cronjob/reset_monthly_tokens/main.py](../../../../sources/neo4j-labs__llm-graph-builder/cronjob/reset_monthly_tokens/main.py)<br>[cronjob/reset_daily_tokens/main.py](../../../../sources/neo4j-labs__llm-graph-builder/cronjob/reset_daily_tokens/main.py)<br>[backend/src/main.py](../../../../sources/neo4j-labs__llm-graph-builder/backend/src/main.py) |
| agentRuntime | 9 | [frontend/src/hooks/useHasSelections.tsx](../../../../sources/neo4j-labs__llm-graph-builder/frontend/src/hooks/useHasSelections.tsx)<br>[frontend/src/hooks/useSourceInput.tsx](../../../../sources/neo4j-labs__llm-graph-builder/frontend/src/hooks/useSourceInput.tsx)<br>[frontend/src/hooks/useSpeech.tsx](../../../../sources/neo4j-labs__llm-graph-builder/frontend/src/hooks/useSpeech.tsx)<br>[frontend/src/hooks/useSse.tsx](../../../../sources/neo4j-labs__llm-graph-builder/frontend/src/hooks/useSse.tsx)<br>[frontend/src/context/Alert.tsx](../../../../sources/neo4j-labs__llm-graph-builder/frontend/src/context/Alert.tsx)<br>[frontend/src/context/ThemeWrapper.tsx](../../../../sources/neo4j-labs__llm-graph-builder/frontend/src/context/ThemeWrapper.tsx)<br>[frontend/src/context/UserCredentials.tsx](../../../../sources/neo4j-labs__llm-graph-builder/frontend/src/context/UserCredentials.tsx)<br>[frontend/src/context/UserMessages.tsx](../../../../sources/neo4j-labs__llm-graph-builder/frontend/src/context/UserMessages.tsx) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 30 | [POC_Documents/V1/Local-to-global-genAI_GraphRAG_V1](../../../../sources/neo4j-labs__llm-graph-builder/POC_Documents/V1/Local-to-global-genAI_GraphRAG_V1)<br>[frontend/index.html](../../../../sources/neo4j-labs__llm-graph-builder/frontend/index.html)<br>[frontend/src/index.css](../../../../sources/neo4j-labs__llm-graph-builder/frontend/src/index.css)<br>[frontend/src/components/Popups/RetryConfirmation/Index.tsx](../../../../sources/neo4j-labs__llm-graph-builder/frontend/src/components/Popups/RetryConfirmation/Index.tsx)<br>[frontend/src/components/Popups/GraphEnhancementDialog/index.tsx](../../../../sources/neo4j-labs__llm-graph-builder/frontend/src/components/Popups/GraphEnhancementDialog/index.tsx)<br>[frontend/src/components/Popups/GraphEnhancementDialog/PostProcessingCheckList/index.tsx](../../../../sources/neo4j-labs__llm-graph-builder/frontend/src/components/Popups/GraphEnhancementDialog/PostProcessingCheckList/index.tsx)<br>[frontend/src/components/Popups/GraphEnhancementDialog/DeleteTabForOrphanNodes/index.tsx](../../../../sources/neo4j-labs__llm-graph-builder/frontend/src/components/Popups/GraphEnhancementDialog/DeleteTabForOrphanNodes/index.tsx)<br>[frontend/src/components/Popups/GraphEnhancementDialog/Deduplication/index.tsx](../../../../sources/neo4j-labs__llm-graph-builder/frontend/src/components/Popups/GraphEnhancementDialog/Deduplication/index.tsx) |
| spec | 3 | [cronjob/reset_monthly_tokens/requirements.txt](../../../../sources/neo4j-labs__llm-graph-builder/cronjob/reset_monthly_tokens/requirements.txt)<br>[cronjob/reset_daily_tokens/requirements.txt](../../../../sources/neo4j-labs__llm-graph-builder/cronjob/reset_daily_tokens/requirements.txt)<br>[backend/requirements.txt](../../../../sources/neo4j-labs__llm-graph-builder/backend/requirements.txt) |
| eval | 5 | [experiments/RAGAS_evaluation.csv](../../../../sources/neo4j-labs__llm-graph-builder/experiments/RAGAS_evaluation.csv)<br>[backend/Performance_test.py](../../../../sources/neo4j-labs__llm-graph-builder/backend/Performance_test.py)<br>[backend/test_commutiesqa.py](../../../../sources/neo4j-labs__llm-graph-builder/backend/test_commutiesqa.py)<br>[backend/test_integrationqa.py](../../../../sources/neo4j-labs__llm-graph-builder/backend/test_integrationqa.py)<br>[backend/src/ragas_eval.py](../../../../sources/neo4j-labs__llm-graph-builder/backend/src/ragas_eval.py) |
| security | 2 | [frontend/src/components/Auth/Auth.tsx](../../../../sources/neo4j-labs__llm-graph-builder/frontend/src/components/Auth/Auth.tsx)<br>[docs/frontend/images/Gcloud_auth.jpg](../../../../sources/neo4j-labs__llm-graph-builder/docs/frontend/images/Gcloud_auth.jpg) |
| ci | 0 | 명확하지 않음 |
| container | 3 | [docker-compose.yml](../../../../sources/neo4j-labs__llm-graph-builder/docker-compose.yml)<br>[frontend/Dockerfile](../../../../sources/neo4j-labs__llm-graph-builder/frontend/Dockerfile)<br>[backend/Dockerfile](../../../../sources/neo4j-labs__llm-graph-builder/backend/Dockerfile) |
| instruction | 0 | 명확하지 않음 |
| docs | 69 | [README.md](../../../../sources/neo4j-labs__llm-graph-builder/README.md)<br>[frontend/README.md](../../../../sources/neo4j-labs__llm-graph-builder/frontend/README.md)<br>[experiments/README.md](../../../../sources/neo4j-labs__llm-graph-builder/experiments/README.md)<br>[docs/project architecture.png](../../../../sources/neo4j-labs__llm-graph-builder/docs/project architecture.png)<br>[docs/project_docs.adoc](../../../../sources/neo4j-labs__llm-graph-builder/docs/project_docs.adoc)<br>[docs/frontend/frontend_docs.adoc](../../../../sources/neo4j-labs__llm-graph-builder/docs/frontend/frontend_docs.adoc)<br>[docs/frontend/images/AdditionalMetricEval.jpg](../../../../sources/neo4j-labs__llm-graph-builder/docs/frontend/images/AdditionalMetricEval.jpg)<br>[docs/frontend/images/AllFilesGraph.jpg](../../../../sources/neo4j-labs__llm-graph-builder/docs/frontend/images/AllFilesGraph.jpg) |
| config | 5 | [frontend/package.json](../../../../sources/neo4j-labs__llm-graph-builder/frontend/package.json)<br>[frontend/tsconfig.json](../../../../sources/neo4j-labs__llm-graph-builder/frontend/tsconfig.json)<br>[cronjob/reset_monthly_tokens/requirements.txt](../../../../sources/neo4j-labs__llm-graph-builder/cronjob/reset_monthly_tokens/requirements.txt)<br>[cronjob/reset_daily_tokens/requirements.txt](../../../../sources/neo4j-labs__llm-graph-builder/cronjob/reset_daily_tokens/requirements.txt)<br>[backend/requirements.txt](../../../../sources/neo4j-labs__llm-graph-builder/backend/requirements.txt) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 5 | [experiments/RAGAS_evaluation.csv](../../../../sources/neo4j-labs__llm-graph-builder/experiments/RAGAS_evaluation.csv)<br>[backend/Performance_test.py](../../../../sources/neo4j-labs__llm-graph-builder/backend/Performance_test.py)<br>[backend/test_commutiesqa.py](../../../../sources/neo4j-labs__llm-graph-builder/backend/test_commutiesqa.py)<br>[backend/test_integrationqa.py](../../../../sources/neo4j-labs__llm-graph-builder/backend/test_integrationqa.py)<br>[backend/src/ragas_eval.py](../../../../sources/neo4j-labs__llm-graph-builder/backend/src/ragas_eval.py) |
| CI workflow | 0 | 명확하지 않음 |
| 컨테이너/배포 | 3 | [docker-compose.yml](../../../../sources/neo4j-labs__llm-graph-builder/docker-compose.yml)<br>[frontend/Dockerfile](../../../../sources/neo4j-labs__llm-graph-builder/frontend/Dockerfile)<br>[backend/Dockerfile](../../../../sources/neo4j-labs__llm-graph-builder/backend/Dockerfile) |
| 보안/정책 | 2 | [frontend/src/components/Auth/Auth.tsx](../../../../sources/neo4j-labs__llm-graph-builder/frontend/src/components/Auth/Auth.tsx)<br>[docs/frontend/images/Gcloud_auth.jpg](../../../../sources/neo4j-labs__llm-graph-builder/docs/frontend/images/Gcloud_auth.jpg) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | CI workflow 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `POC_Documents/V1/Local-to-global-genAI_GraphRAG_V1`, `frontend/index.html`, `frontend/src/index.css`.
2. entrypoint를 따라 실행 흐름 확인: `frontend/src/App.css`, `frontend/src/App.tsx`, `frontend/src/index.css`.
3. agent/tool runtime 매핑: `frontend/src/hooks/useHasSelections.tsx`, `frontend/src/hooks/useSourceInput.tsx`, `frontend/src/hooks/useSpeech.tsx`.
4. retrieval/memory/indexing 확인: `POC_Documents/V1/Local-to-global-genAI_GraphRAG_V1`, `frontend/index.html`, `frontend/src/index.css`.
5. test/eval 파일로 동작 검증: `experiments/RAGAS_evaluation.csv`, `backend/Performance_test.py`, `backend/test_commutiesqa.py`.

## 기존 레포 인사이트

LLM 위키/RAG/지식베이스 관점에서 Neo4j graph construction from unstructured data using LLMs. 핵심 구조 신호는 Jupyter Notebook, docker-compose.yml, README.md, LICENSE, ci, docs이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

mixed 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 지식/RAG 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 더 깊은 구조 스캔 필요입니다.
