# neo4j-labs/llm-graph-builder Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Neo4j graph construction from unstructured data using LLMs

## 요약

- 조사 단위: `sources/neo4j-labs__llm-graph-builder` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 354 files, 65 directories, depth score 115, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 retrieval=POC_Documents/V1/Local-to-global-genAI_GraphRAG_V1, frontend/index.html, frontend/src/index.css이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 knowledge/RAG pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

## Navigation

| Entry | Use it for |
| --- | --- |
| [Repository README](../../../../README.md) | Repo-wide orientation and top-level data/report structure. |
| [Reports Reading Index](../../../README.md) | Main report navigation, topics, and folder map. |
| [Reports by Topic](../../../by-topic/README.md) | Topic-first report navigation. |
| [Report Tables](../../../tables/README.md) | Table-first view and CSV exports. |
| [Repository Insights](../../../repository-insights/README.md) | Repository-by-repository assessment rows. |
| [Source Deep Dives](../../README.md) | Source-path-level findings by topic. |
| [Source Repository Deep Dives](../README.md) | One Markdown deep dive per cloned repository. |


## Repository Context

| Field | Value |
| --- | --- |
| Repository | neo4j-labs/llm-graph-builder |
| Topic | LLM Wiki, RAG, and Knowledge / LLM 위키/RAG/지식베이스 |
| Region | mixed |
| Language | Jupyter Notebook |
| Stars | 4799 |
| Forks | 826 |
| License | Apache-2.0 |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/neo4j-labs__llm-graph-builder](../../../../sources/neo4j-labs__llm-graph-builder) |
| Existing report | [reports/llm-wiki/repositories/neo4j-labs__llm-graph-builder.md](../../../llm-wiki/repositories/neo4j-labs__llm-graph-builder.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 354 / 65 |
| Max observed depth | 7 |
| Top directories | .github, backend, cronjob, data, docs, experiments, frontend, POC_Documents, POC_Experiments |
| Top extensions | .tsx: 110, .jpg: 62, .ts: 39, .py: 36, .svg: 23, .ipynb: 14, (none): 14, .json: 10, .png: 10, .md: 7, .adoc: 3, .css: 3 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
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


## How It Runs

_No command surface extracted from root manifests._


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | none |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
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


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 7 | [frontend/src/App.css](../../../../sources/neo4j-labs__llm-graph-builder/frontend/src/App.css)<br>[frontend/src/App.tsx](../../../../sources/neo4j-labs__llm-graph-builder/frontend/src/App.tsx)<br>[frontend/src/index.css](../../../../sources/neo4j-labs__llm-graph-builder/frontend/src/index.css)<br>[frontend/src/main.tsx](../../../../sources/neo4j-labs__llm-graph-builder/frontend/src/main.tsx)<br>[cronjob/reset_monthly_tokens/main.py](../../../../sources/neo4j-labs__llm-graph-builder/cronjob/reset_monthly_tokens/main.py)<br>[cronjob/reset_daily_tokens/main.py](../../../../sources/neo4j-labs__llm-graph-builder/cronjob/reset_daily_tokens/main.py)<br>[backend/src/main.py](../../../../sources/neo4j-labs__llm-graph-builder/backend/src/main.py) |
| agentRuntime | 9 | [frontend/src/hooks/useHasSelections.tsx](../../../../sources/neo4j-labs__llm-graph-builder/frontend/src/hooks/useHasSelections.tsx)<br>[frontend/src/hooks/useSourceInput.tsx](../../../../sources/neo4j-labs__llm-graph-builder/frontend/src/hooks/useSourceInput.tsx)<br>[frontend/src/hooks/useSpeech.tsx](../../../../sources/neo4j-labs__llm-graph-builder/frontend/src/hooks/useSpeech.tsx)<br>[frontend/src/hooks/useSse.tsx](../../../../sources/neo4j-labs__llm-graph-builder/frontend/src/hooks/useSse.tsx)<br>[frontend/src/context/Alert.tsx](../../../../sources/neo4j-labs__llm-graph-builder/frontend/src/context/Alert.tsx)<br>[frontend/src/context/ThemeWrapper.tsx](../../../../sources/neo4j-labs__llm-graph-builder/frontend/src/context/ThemeWrapper.tsx)<br>[frontend/src/context/UserCredentials.tsx](../../../../sources/neo4j-labs__llm-graph-builder/frontend/src/context/UserCredentials.tsx)<br>[frontend/src/context/UserMessages.tsx](../../../../sources/neo4j-labs__llm-graph-builder/frontend/src/context/UserMessages.tsx) |
| mcp | 0 | not obvious |
| retrieval | 30 | [POC_Documents/V1/Local-to-global-genAI_GraphRAG_V1](../../../../sources/neo4j-labs__llm-graph-builder/POC_Documents/V1/Local-to-global-genAI_GraphRAG_V1)<br>[frontend/index.html](../../../../sources/neo4j-labs__llm-graph-builder/frontend/index.html)<br>[frontend/src/index.css](../../../../sources/neo4j-labs__llm-graph-builder/frontend/src/index.css)<br>[frontend/src/components/Popups/RetryConfirmation/Index.tsx](../../../../sources/neo4j-labs__llm-graph-builder/frontend/src/components/Popups/RetryConfirmation/Index.tsx)<br>[frontend/src/components/Popups/GraphEnhancementDialog/index.tsx](../../../../sources/neo4j-labs__llm-graph-builder/frontend/src/components/Popups/GraphEnhancementDialog/index.tsx)<br>[frontend/src/components/Popups/GraphEnhancementDialog/PostProcessingCheckList/index.tsx](../../../../sources/neo4j-labs__llm-graph-builder/frontend/src/components/Popups/GraphEnhancementDialog/PostProcessingCheckList/index.tsx)<br>[frontend/src/components/Popups/GraphEnhancementDialog/DeleteTabForOrphanNodes/index.tsx](../../../../sources/neo4j-labs__llm-graph-builder/frontend/src/components/Popups/GraphEnhancementDialog/DeleteTabForOrphanNodes/index.tsx)<br>[frontend/src/components/Popups/GraphEnhancementDialog/Deduplication/index.tsx](../../../../sources/neo4j-labs__llm-graph-builder/frontend/src/components/Popups/GraphEnhancementDialog/Deduplication/index.tsx) |
| spec | 3 | [cronjob/reset_monthly_tokens/requirements.txt](../../../../sources/neo4j-labs__llm-graph-builder/cronjob/reset_monthly_tokens/requirements.txt)<br>[cronjob/reset_daily_tokens/requirements.txt](../../../../sources/neo4j-labs__llm-graph-builder/cronjob/reset_daily_tokens/requirements.txt)<br>[backend/requirements.txt](../../../../sources/neo4j-labs__llm-graph-builder/backend/requirements.txt) |
| eval | 5 | [experiments/RAGAS_evaluation.csv](../../../../sources/neo4j-labs__llm-graph-builder/experiments/RAGAS_evaluation.csv)<br>[backend/Performance_test.py](../../../../sources/neo4j-labs__llm-graph-builder/backend/Performance_test.py)<br>[backend/test_commutiesqa.py](../../../../sources/neo4j-labs__llm-graph-builder/backend/test_commutiesqa.py)<br>[backend/test_integrationqa.py](../../../../sources/neo4j-labs__llm-graph-builder/backend/test_integrationqa.py)<br>[backend/src/ragas_eval.py](../../../../sources/neo4j-labs__llm-graph-builder/backend/src/ragas_eval.py) |
| security | 2 | [frontend/src/components/Auth/Auth.tsx](../../../../sources/neo4j-labs__llm-graph-builder/frontend/src/components/Auth/Auth.tsx)<br>[docs/frontend/images/Gcloud_auth.jpg](../../../../sources/neo4j-labs__llm-graph-builder/docs/frontend/images/Gcloud_auth.jpg) |
| ci | 0 | not obvious |
| container | 3 | [docker-compose.yml](../../../../sources/neo4j-labs__llm-graph-builder/docker-compose.yml)<br>[frontend/Dockerfile](../../../../sources/neo4j-labs__llm-graph-builder/frontend/Dockerfile)<br>[backend/Dockerfile](../../../../sources/neo4j-labs__llm-graph-builder/backend/Dockerfile) |
| instruction | 0 | not obvious |
| docs | 69 | [README.md](../../../../sources/neo4j-labs__llm-graph-builder/README.md)<br>[frontend/README.md](../../../../sources/neo4j-labs__llm-graph-builder/frontend/README.md)<br>[experiments/README.md](../../../../sources/neo4j-labs__llm-graph-builder/experiments/README.md)<br>[docs/project architecture.png](../../../../sources/neo4j-labs__llm-graph-builder/docs/project architecture.png)<br>[docs/project_docs.adoc](../../../../sources/neo4j-labs__llm-graph-builder/docs/project_docs.adoc)<br>[docs/frontend/frontend_docs.adoc](../../../../sources/neo4j-labs__llm-graph-builder/docs/frontend/frontend_docs.adoc)<br>[docs/frontend/images/AdditionalMetricEval.jpg](../../../../sources/neo4j-labs__llm-graph-builder/docs/frontend/images/AdditionalMetricEval.jpg)<br>[docs/frontend/images/AllFilesGraph.jpg](../../../../sources/neo4j-labs__llm-graph-builder/docs/frontend/images/AllFilesGraph.jpg) |
| config | 5 | [frontend/package.json](../../../../sources/neo4j-labs__llm-graph-builder/frontend/package.json)<br>[frontend/tsconfig.json](../../../../sources/neo4j-labs__llm-graph-builder/frontend/tsconfig.json)<br>[cronjob/reset_monthly_tokens/requirements.txt](../../../../sources/neo4j-labs__llm-graph-builder/cronjob/reset_monthly_tokens/requirements.txt)<br>[cronjob/reset_daily_tokens/requirements.txt](../../../../sources/neo4j-labs__llm-graph-builder/cronjob/reset_daily_tokens/requirements.txt)<br>[backend/requirements.txt](../../../../sources/neo4j-labs__llm-graph-builder/backend/requirements.txt) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 5 | [experiments/RAGAS_evaluation.csv](../../../../sources/neo4j-labs__llm-graph-builder/experiments/RAGAS_evaluation.csv)<br>[backend/Performance_test.py](../../../../sources/neo4j-labs__llm-graph-builder/backend/Performance_test.py)<br>[backend/test_commutiesqa.py](../../../../sources/neo4j-labs__llm-graph-builder/backend/test_commutiesqa.py)<br>[backend/test_integrationqa.py](../../../../sources/neo4j-labs__llm-graph-builder/backend/test_integrationqa.py)<br>[backend/src/ragas_eval.py](../../../../sources/neo4j-labs__llm-graph-builder/backend/src/ragas_eval.py) |
| CI workflows | 0 | not obvious |
| Containers / deploy | 3 | [docker-compose.yml](../../../../sources/neo4j-labs__llm-graph-builder/docker-compose.yml)<br>[frontend/Dockerfile](../../../../sources/neo4j-labs__llm-graph-builder/frontend/Dockerfile)<br>[backend/Dockerfile](../../../../sources/neo4j-labs__llm-graph-builder/backend/Dockerfile) |
| Security / policy | 2 | [frontend/src/components/Auth/Auth.tsx](../../../../sources/neo4j-labs__llm-graph-builder/frontend/src/components/Auth/Auth.tsx)<br>[docs/frontend/images/Gcloud_auth.jpg](../../../../sources/neo4j-labs__llm-graph-builder/docs/frontend/images/Gcloud_auth.jpg) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | CI workflow path not obvious |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `POC_Documents/V1/Local-to-global-genAI_GraphRAG_V1`, `frontend/index.html`, `frontend/src/index.css`.
2. Trace execution through entrypoints: `frontend/src/App.css`, `frontend/src/App.tsx`, `frontend/src/index.css`.
3. Map agent/tool runtime through: `frontend/src/hooks/useHasSelections.tsx`, `frontend/src/hooks/useSourceInput.tsx`, `frontend/src/hooks/useSpeech.tsx`.
4. Inspect retrieval/memory/indexing through: `POC_Documents/V1/Local-to-global-genAI_GraphRAG_V1`, `frontend/index.html`, `frontend/src/index.css`.
5. Verify behavior through test/eval files: `experiments/RAGAS_evaluation.csv`, `backend/Performance_test.py`, `backend/test_commutiesqa.py`.

## Existing Repository Insight

LLM 위키/RAG/지식베이스 관점에서 Neo4j graph construction from unstructured data using LLMs. 핵심 구조 신호는 Jupyter Notebook, docker-compose.yml, README.md, LICENSE, ci, docs이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

mixed 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 knowledge/RAG pattern reference이고, 후속 확인 포인트는 test signal not obvious, needs deeper structural scan입니다.
