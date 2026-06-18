# pathwaycom/llm-app Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Ready-to-run cloud templates for RAG, AI pipelines, and enterprise search with live data. 🐳Docker-friendly.⚡Always in sync with Sharepoint, Google Drive, S3, Kafka, PostgreSQL, real-time data APIs, and more.

## 요약

- 조사 단위: `sources/pathwaycom__llm-app` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 135 files, 36 directories, depth score 98, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 api/server, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 retrieval=templates/question_answering_rag/.env.example, templates/question_answering_rag/app.py, templates/question_answering_rag/app.yaml이고, 의존성 단서는 openai, 검증/운영 단서는 CI workflow가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 knowledge/RAG pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | pathwaycom/llm-app |
| Topic | LLM Wiki, RAG, and Knowledge / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | Jupyter Notebook |
| Stars | 59331 |
| Forks | 1430 |
| License | MIT |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/pathwaycom__llm-app](../../../../sources/pathwaycom__llm-app) |
| Existing report | [reports/llm-wiki/repositories/pathwaycom__llm-app.md](../../../llm-wiki/repositories/pathwaycom__llm-app.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 135 / 36 |
| Max observed depth | 5 |
| Top directories | .github, assets, cookbooks, templates |
| Top extensions | .pdf: 29, (none): 18, .py: 17, .md: 13, .txt: 10, .png: 9, .yml: 9, .yaml: 7, .example: 5, .gif: 4, .svg: 4, .toml: 3 |
| Source patterns | api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| cookbooks | top-level component | 1 |
| templates | top-level component | 1 |


## How It Runs

_No command surface extracted from root manifests._


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai |
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
| retrieval | [templates/question_answering_rag/.env.example](../../../../sources/pathwaycom__llm-app/templates/question_answering_rag/.env.example) | retrieval signal |
| retrieval | [templates/question_answering_rag/app.py](../../../../sources/pathwaycom__llm-app/templates/question_answering_rag/app.py) | retrieval signal |
| retrieval | [templates/question_answering_rag/app.yaml](../../../../sources/pathwaycom__llm-app/templates/question_answering_rag/app.yaml) | retrieval signal |
| retrieval | [templates/question_answering_rag/docker-compose.yml](../../../../sources/pathwaycom__llm-app/templates/question_answering_rag/docker-compose.yml) | retrieval signal |
| entrypoints | [templates/unstructured_to_sql_on_the_fly/ui/server.py](../../../../sources/pathwaycom__llm-app/templates/unstructured_to_sql_on_the_fly/ui/server.py) | entrypoints signal |
| entrypoints | [templates/drive_alert/ui/server.py](../../../../sources/pathwaycom__llm-app/templates/drive_alert/ui/server.py) | entrypoints signal |
| docs | [README.md](../../../../sources/pathwaycom__llm-app/README.md) | docs signal |
| docs | [templates/unstructured_to_sql_on_the_fly/README.md](../../../../sources/pathwaycom__llm-app/templates/unstructured_to_sql_on_the_fly/README.md) | docs signal |
| docs | [templates/slides_ai_search/README.md](../../../../sources/pathwaycom__llm-app/templates/slides_ai_search/README.md) | docs signal |
| docs | [templates/question_answering_rag/README.md](../../../../sources/pathwaycom__llm-app/templates/question_answering_rag/README.md) | docs signal |
| config | [pyproject.toml](../../../../sources/pathwaycom__llm-app/pyproject.toml) | config signal |
| config | [templates/unstructured_to_sql_on_the_fly/requirements.txt](../../../../sources/pathwaycom__llm-app/templates/unstructured_to_sql_on_the_fly/requirements.txt) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 2 | [templates/unstructured_to_sql_on_the_fly/ui/server.py](../../../../sources/pathwaycom__llm-app/templates/unstructured_to_sql_on_the_fly/ui/server.py)<br>[templates/drive_alert/ui/server.py](../../../../sources/pathwaycom__llm-app/templates/drive_alert/ui/server.py) |
| agentRuntime | 0 | not obvious |
| mcp | 17 | [templates/document_store_mcp_server/__init__.py](../../../../sources/pathwaycom__llm-app/templates/document_store_mcp_server/__init__.py)<br>[templates/document_store_mcp_server/.env.example](../../../../sources/pathwaycom__llm-app/templates/document_store_mcp_server/.env.example)<br>[templates/document_store_mcp_server/app.py](../../../../sources/pathwaycom__llm-app/templates/document_store_mcp_server/app.py)<br>[templates/document_store_mcp_server/app.yaml](../../../../sources/pathwaycom__llm-app/templates/document_store_mcp_server/app.yaml)<br>[templates/document_store_mcp_server/docker-compose.yml](../../../../sources/pathwaycom__llm-app/templates/document_store_mcp_server/docker-compose.yml)<br>[templates/document_store_mcp_server/Dockerfile](../../../../sources/pathwaycom__llm-app/templates/document_store_mcp_server/Dockerfile)<br>[templates/document_store_mcp_server/README.md](../../../../sources/pathwaycom__llm-app/templates/document_store_mcp_server/README.md)<br>[templates/document_store_mcp_server/requirements.txt](../../../../sources/pathwaycom__llm-app/templates/document_store_mcp_server/requirements.txt) |
| retrieval | 39 | [templates/question_answering_rag/.env.example](../../../../sources/pathwaycom__llm-app/templates/question_answering_rag/.env.example)<br>[templates/question_answering_rag/app.py](../../../../sources/pathwaycom__llm-app/templates/question_answering_rag/app.py)<br>[templates/question_answering_rag/app.yaml](../../../../sources/pathwaycom__llm-app/templates/question_answering_rag/app.yaml)<br>[templates/question_answering_rag/docker-compose.yml](../../../../sources/pathwaycom__llm-app/templates/question_answering_rag/docker-compose.yml)<br>[templates/question_answering_rag/Dockerfile](../../../../sources/pathwaycom__llm-app/templates/question_answering_rag/Dockerfile)<br>[templates/question_answering_rag/README.md](../../../../sources/pathwaycom__llm-app/templates/question_answering_rag/README.md)<br>[templates/question_answering_rag/requirements.txt](../../../../sources/pathwaycom__llm-app/templates/question_answering_rag/requirements.txt)<br>[templates/question_answering_rag/ui/Dockerfile](../../../../sources/pathwaycom__llm-app/templates/question_answering_rag/ui/Dockerfile) |
| spec | 10 | [templates/unstructured_to_sql_on_the_fly/requirements.txt](../../../../sources/pathwaycom__llm-app/templates/unstructured_to_sql_on_the_fly/requirements.txt)<br>[templates/slides_ai_search/requirements.txt](../../../../sources/pathwaycom__llm-app/templates/slides_ai_search/requirements.txt)<br>[templates/slides_ai_search/ui/requirements.txt](../../../../sources/pathwaycom__llm-app/templates/slides_ai_search/ui/requirements.txt)<br>[templates/question_answering_rag/requirements.txt](../../../../sources/pathwaycom__llm-app/templates/question_answering_rag/requirements.txt)<br>[templates/question_answering_rag/ui/requirements.txt](../../../../sources/pathwaycom__llm-app/templates/question_answering_rag/ui/requirements.txt)<br>[templates/private_rag/requirements.txt](../../../../sources/pathwaycom__llm-app/templates/private_rag/requirements.txt)<br>[templates/multimodal_rag/requirements.txt](../../../../sources/pathwaycom__llm-app/templates/multimodal_rag/requirements.txt)<br>[templates/document_store_mcp_server/requirements.txt](../../../../sources/pathwaycom__llm-app/templates/document_store_mcp_server/requirements.txt) |
| eval | 0 | not obvious |
| security | 0 | not obvious |
| ci | 1 | [.github/workflows/python-lint.yml](../../../../sources/pathwaycom__llm-app/.github/workflows/python-lint.yml) |
| container | 20 | [templates/unstructured_to_sql_on_the_fly/docker-compose.yml](../../../../sources/pathwaycom__llm-app/templates/unstructured_to_sql_on_the_fly/docker-compose.yml)<br>[templates/unstructured_to_sql_on_the_fly/Dockerfile](../../../../sources/pathwaycom__llm-app/templates/unstructured_to_sql_on_the_fly/Dockerfile)<br>[templates/unstructured_to_sql_on_the_fly/ui/Dockerfile](../../../../sources/pathwaycom__llm-app/templates/unstructured_to_sql_on_the_fly/ui/Dockerfile)<br>[templates/slides_ai_search/docker-compose.yml](../../../../sources/pathwaycom__llm-app/templates/slides_ai_search/docker-compose.yml)<br>[templates/slides_ai_search/Dockerfile](../../../../sources/pathwaycom__llm-app/templates/slides_ai_search/Dockerfile)<br>[templates/slides_ai_search/ui/Dockerfile](../../../../sources/pathwaycom__llm-app/templates/slides_ai_search/ui/Dockerfile)<br>[templates/slides_ai_search/nginx/Dockerfile](../../../../sources/pathwaycom__llm-app/templates/slides_ai_search/nginx/Dockerfile)<br>[templates/question_answering_rag/docker-compose.yml](../../../../sources/pathwaycom__llm-app/templates/question_answering_rag/docker-compose.yml) |
| instruction | 0 | not obvious |
| docs | 10 | [README.md](../../../../sources/pathwaycom__llm-app/README.md)<br>[templates/unstructured_to_sql_on_the_fly/README.md](../../../../sources/pathwaycom__llm-app/templates/unstructured_to_sql_on_the_fly/README.md)<br>[templates/slides_ai_search/README.md](../../../../sources/pathwaycom__llm-app/templates/slides_ai_search/README.md)<br>[templates/question_answering_rag/README.md](../../../../sources/pathwaycom__llm-app/templates/question_answering_rag/README.md)<br>[templates/private_rag/README.md](../../../../sources/pathwaycom__llm-app/templates/private_rag/README.md)<br>[templates/multimodal_rag/README.md](../../../../sources/pathwaycom__llm-app/templates/multimodal_rag/README.md)<br>[templates/drive_alert/README.md](../../../../sources/pathwaycom__llm-app/templates/drive_alert/README.md)<br>[templates/document_store_mcp_server/README.md](../../../../sources/pathwaycom__llm-app/templates/document_store_mcp_server/README.md) |
| config | 11 | [pyproject.toml](../../../../sources/pathwaycom__llm-app/pyproject.toml)<br>[templates/unstructured_to_sql_on_the_fly/requirements.txt](../../../../sources/pathwaycom__llm-app/templates/unstructured_to_sql_on_the_fly/requirements.txt)<br>[templates/slides_ai_search/requirements.txt](../../../../sources/pathwaycom__llm-app/templates/slides_ai_search/requirements.txt)<br>[templates/slides_ai_search/ui/requirements.txt](../../../../sources/pathwaycom__llm-app/templates/slides_ai_search/ui/requirements.txt)<br>[templates/question_answering_rag/requirements.txt](../../../../sources/pathwaycom__llm-app/templates/question_answering_rag/requirements.txt)<br>[templates/question_answering_rag/ui/requirements.txt](../../../../sources/pathwaycom__llm-app/templates/question_answering_rag/ui/requirements.txt)<br>[templates/private_rag/requirements.txt](../../../../sources/pathwaycom__llm-app/templates/private_rag/requirements.txt)<br>[templates/multimodal_rag/requirements.txt](../../../../sources/pathwaycom__llm-app/templates/multimodal_rag/requirements.txt) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 0 | not obvious |
| CI workflows | 1 | [.github/workflows/python-lint.yml](../../../../sources/pathwaycom__llm-app/.github/workflows/python-lint.yml) |
| Containers / deploy | 20 | [templates/unstructured_to_sql_on_the_fly/docker-compose.yml](../../../../sources/pathwaycom__llm-app/templates/unstructured_to_sql_on_the_fly/docker-compose.yml)<br>[templates/unstructured_to_sql_on_the_fly/Dockerfile](../../../../sources/pathwaycom__llm-app/templates/unstructured_to_sql_on_the_fly/Dockerfile)<br>[templates/unstructured_to_sql_on_the_fly/ui/Dockerfile](../../../../sources/pathwaycom__llm-app/templates/unstructured_to_sql_on_the_fly/ui/Dockerfile)<br>[templates/slides_ai_search/docker-compose.yml](../../../../sources/pathwaycom__llm-app/templates/slides_ai_search/docker-compose.yml)<br>[templates/slides_ai_search/Dockerfile](../../../../sources/pathwaycom__llm-app/templates/slides_ai_search/Dockerfile)<br>[templates/slides_ai_search/ui/Dockerfile](../../../../sources/pathwaycom__llm-app/templates/slides_ai_search/ui/Dockerfile) |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | test/eval path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `templates/question_answering_rag/.env.example`, `templates/question_answering_rag/app.py`, `templates/question_answering_rag/app.yaml`.
2. Trace execution through entrypoints: `templates/unstructured_to_sql_on_the_fly/ui/server.py`, `templates/drive_alert/ui/server.py`.
3. Inspect retrieval/memory/indexing through: `templates/question_answering_rag/.env.example`, `templates/question_answering_rag/app.py`, `templates/question_answering_rag/app.yaml`.

## Existing Repository Insight

LLM 위키/RAG/지식베이스 관점에서 Ready to run cloud templates for RAG, AI pipelines, and enterprise search with live data. 🐳Docker friendly.⚡Always in s. 핵심 구조 신호는 Jupyter Notebook, pyproject.toml, README.md, LICENSE, openai, ci이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 knowledge/RAG pattern reference이고, 후속 확인 포인트는 test signal not obvious, needs deeper structural scan입니다.
