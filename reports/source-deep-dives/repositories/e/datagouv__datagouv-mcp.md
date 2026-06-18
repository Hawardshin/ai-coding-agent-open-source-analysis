# datagouv/datagouv-mcp Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Official data.gouv.fr Model Context Protocol (MCP) server that allows AI chatbots to search, explore, and analyze datasets from the French national Open Data platform, directly through conversation.

## 요약

- 조사 단위: `sources/datagouv__datagouv-mcp` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 53 files, 8 directories, depth score 96, key references 11개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, agent/tool runtime, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 entrypoints=main.py이고, 의존성 단서는 mcp, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 11개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 knowledge/RAG pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| [Source Trend Insights](../../../source-insights/README.md) | Category trend insights and repository feature comparison from source evidence. |


## Repository Context

| Field | Value |
| --- | --- |
| Repository | datagouv/datagouv-mcp |
| Topic | LLM Wiki, RAG, and Knowledge / LLM 위키/RAG/지식베이스 |
| Region | global |
| Language | Python |
| Stars | 1538 |
| Forks | 125 |
| License | none |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/datagouv__datagouv-mcp](../../../../sources/datagouv__datagouv-mcp) |
| Existing report | [reports/global-trending/repositories/datagouv__datagouv-mcp.md](../../../global-trending/repositories/datagouv__datagouv-mcp.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 53 / 8 |
| Max observed depth | 3 |
| Top directories | .circleci, .github, helpers, scripts, tests, tools |
| Top extensions | .py: 37, .yml: 5, .md: 3, (none): 3, .example: 1, .lock: 1, .sh: 1, .toml: 1, .yaml: 1 |
| Source patterns | cli-first, agent/tool runtime, spec/docs-driven, eval/test harness, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 13 |
| .github | ci surface | 1 |
| helpers | top-level component | 1 |
| scripts | top-level component | 1 |
| tools | top-level component | 1 |


## How It Runs

_No command surface extracted from root manifests._


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | mcp |
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
| entrypoints | [main.py](../../../../sources/datagouv__datagouv-mcp/main.py) | entrypoints signal |
| docs | [README.md](../../../../sources/datagouv__datagouv-mcp/README.md) | docs signal |
| eval | [tools/get_dataservice_openapi_spec.py](../../../../sources/datagouv__datagouv-mcp/tools/get_dataservice_openapi_spec.py) | eval signal |
| eval | [tests/__init__.py](../../../../sources/datagouv__datagouv-mcp/tests/__init__.py) | eval signal |
| eval | [tests/test_crawler_api.py](../../../../sources/datagouv__datagouv-mcp/tests/test_crawler_api.py) | eval signal |
| eval | [tests/test_datagouv_api.py](../../../../sources/datagouv__datagouv-mcp/tests/test_datagouv_api.py) | eval signal |
| config | [pyproject.toml](../../../../sources/datagouv__datagouv-mcp/pyproject.toml) | config signal |
| config | [uv.lock](../../../../sources/datagouv__datagouv-mcp/uv.lock) | config signal |
| ci | [.github/workflows/contribution-reminder.yml](../../../../sources/datagouv__datagouv-mcp/.github/workflows/contribution-reminder.yml) | ci support |
| container | [docker-compose.yml](../../../../sources/datagouv__datagouv-mcp/docker-compose.yml) | container support |
| container | [Dockerfile](../../../../sources/datagouv__datagouv-mcp/Dockerfile) | container support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 1 | [main.py](../../../../sources/datagouv__datagouv-mcp/main.py) |
| agentRuntime | 11 | [tools/__init__.py](../../../../sources/datagouv__datagouv-mcp/tools/__init__.py)<br>[tools/get_dataservice_info.py](../../../../sources/datagouv__datagouv-mcp/tools/get_dataservice_info.py)<br>[tools/get_dataservice_openapi_spec.py](../../../../sources/datagouv__datagouv-mcp/tools/get_dataservice_openapi_spec.py)<br>[tools/get_dataset_info.py](../../../../sources/datagouv__datagouv-mcp/tools/get_dataset_info.py)<br>[tools/get_metrics.py](../../../../sources/datagouv__datagouv-mcp/tools/get_metrics.py)<br>[tools/get_resource_info.py](../../../../sources/datagouv__datagouv-mcp/tools/get_resource_info.py)<br>[tools/list_dataset_resources.py](../../../../sources/datagouv__datagouv-mcp/tools/list_dataset_resources.py)<br>[tools/query_resource_data.py](../../../../sources/datagouv__datagouv-mcp/tools/query_resource_data.py) |
| mcp | 2 | [helpers/mcp_client.py](../../../../sources/datagouv__datagouv-mcp/helpers/mcp_client.py)<br>[helpers/mcp_tool_defaults.py](../../../../sources/datagouv__datagouv-mcp/helpers/mcp_tool_defaults.py) |
| retrieval | 0 | not obvious |
| spec | 1 | [tools/get_dataservice_openapi_spec.py](../../../../sources/datagouv__datagouv-mcp/tools/get_dataservice_openapi_spec.py) |
| eval | 13 | [tools/get_dataservice_openapi_spec.py](../../../../sources/datagouv__datagouv-mcp/tools/get_dataservice_openapi_spec.py)<br>[tests/__init__.py](../../../../sources/datagouv__datagouv-mcp/tests/__init__.py)<br>[tests/test_crawler_api.py](../../../../sources/datagouv__datagouv-mcp/tests/test_crawler_api.py)<br>[tests/test_datagouv_api.py](../../../../sources/datagouv__datagouv-mcp/tests/test_datagouv_api.py)<br>[tests/test_env_config.py](../../../../sources/datagouv__datagouv-mcp/tests/test_env_config.py)<br>[tests/test_health_check.py](../../../../sources/datagouv__datagouv-mcp/tests/test_health_check.py)<br>[tests/test_health_endpoint.py](../../../../sources/datagouv__datagouv-mcp/tests/test_health_endpoint.py)<br>[tests/test_matomo.py](../../../../sources/datagouv__datagouv-mcp/tests/test_matomo.py) |
| security | 0 | not obvious |
| ci | 1 | [.github/workflows/contribution-reminder.yml](../../../../sources/datagouv__datagouv-mcp/.github/workflows/contribution-reminder.yml) |
| container | 2 | [docker-compose.yml](../../../../sources/datagouv__datagouv-mcp/docker-compose.yml)<br>[Dockerfile](../../../../sources/datagouv__datagouv-mcp/Dockerfile) |
| instruction | 0 | not obvious |
| docs | 1 | [README.md](../../../../sources/datagouv__datagouv-mcp/README.md) |
| config | 2 | [pyproject.toml](../../../../sources/datagouv__datagouv-mcp/pyproject.toml)<br>[uv.lock](../../../../sources/datagouv__datagouv-mcp/uv.lock) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 13 | [tools/get_dataservice_openapi_spec.py](../../../../sources/datagouv__datagouv-mcp/tools/get_dataservice_openapi_spec.py)<br>[tests/__init__.py](../../../../sources/datagouv__datagouv-mcp/tests/__init__.py)<br>[tests/test_crawler_api.py](../../../../sources/datagouv__datagouv-mcp/tests/test_crawler_api.py)<br>[tests/test_datagouv_api.py](../../../../sources/datagouv__datagouv-mcp/tests/test_datagouv_api.py)<br>[tests/test_env_config.py](../../../../sources/datagouv__datagouv-mcp/tests/test_env_config.py)<br>[tests/test_health_check.py](../../../../sources/datagouv__datagouv-mcp/tests/test_health_check.py) |
| CI workflows | 1 | [.github/workflows/contribution-reminder.yml](../../../../sources/datagouv__datagouv-mcp/.github/workflows/contribution-reminder.yml) |
| Containers / deploy | 2 | [docker-compose.yml](../../../../sources/datagouv__datagouv-mcp/docker-compose.yml)<br>[Dockerfile](../../../../sources/datagouv__datagouv-mcp/Dockerfile) |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | security/policy surface not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `main.py`, `README.md`, `tools/get_dataservice_openapi_spec.py`.
2. Trace execution through entrypoints: `main.py`.
3. Map agent/tool runtime through: `tools/__init__.py`, `tools/get_dataservice_info.py`, `tools/get_dataservice_openapi_spec.py`.
4. Verify behavior through test/eval files: `tools/get_dataservice_openapi_spec.py`, `tests/__init__.py`, `tests/test_crawler_api.py`.

## Existing Repository Insight

LLM 위키/RAG/지식베이스 관점에서 Official data.gouv.fr Model Context Protocol MCP server that allows AI chatbots to search, explore, and analyze datasets. 핵심 구조 신호는 Python, pyproject.toml, Dockerfile, docker-compose.yml, README.md, LICENSE이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 knowledge/RAG pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
