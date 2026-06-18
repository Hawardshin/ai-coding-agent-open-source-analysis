# jonigl/ollama-mcp-bridge Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Extend the Ollama API with dynamic AI tool integration from multiple MCP (Model Context Protocol) servers. Fully compatible, transparent, and developer-friendly, ideal for building powerful local LLM applications, AI agents, and custom chatbots

## 요약

- 조사 단위: `sources/jonigl__ollama-mcp-bridge` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 38 files, 7 directories, depth score 92, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=mcp-config.json, src/ollama_mcp_bridge/__init__.py, src/ollama_mcp_bridge/api.py이고, 의존성 단서는 mcp, fastapi, vscode, typer, ollama, llama, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | jonigl/ollama-mcp-bridge |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 93 |
| Forks | 32 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/jonigl__ollama-mcp-bridge](../../../../sources/jonigl__ollama-mcp-bridge) |
| Existing report | [reports/global-trending/repositories/jonigl__ollama-mcp-bridge.md](../../../global-trending/repositories/jonigl__ollama-mcp-bridge.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 38 / 7 |
| Max observed depth | 3 |
| Top directories | .github, misc, mock-weather-mcp-server, src, tests |
| Top extensions | .py: 16, .yml: 7, .md: 4, (none): 4, .lock: 2, .png: 2, .toml: 2, .json: 1 |
| Source patterns | cli-first, api/server, agent/tool runtime, eval/test harness, containerized deploy, ui/extension surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 10 |
| tests | validation surface | 8 |
| .github | ci surface | 1 |
| misc | top-level component | 1 |
| mock-weather-mcp-server | source boundary | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | pyproject.toml | ollama-mcp-bridge | ollama-mcp-bridge |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | mcp |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | ollama, llama |
| webRuntime | fastapi |
| developerSurface | vscode, typer |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [mcp-config.json](../../../../sources/jonigl__ollama-mcp-bridge/mcp-config.json) | mcp signal |
| mcp | [src/ollama_mcp_bridge/__init__.py](../../../../sources/jonigl__ollama-mcp-bridge/src/ollama_mcp_bridge/__init__.py) | mcp signal |
| mcp | [src/ollama_mcp_bridge/api.py](../../../../sources/jonigl__ollama-mcp-bridge/src/ollama_mcp_bridge/api.py) | mcp signal |
| mcp | [src/ollama_mcp_bridge/lifecycle.py](../../../../sources/jonigl__ollama-mcp-bridge/src/ollama_mcp_bridge/lifecycle.py) | mcp signal |
| entrypoints | [src/ollama_mcp_bridge/main.py](../../../../sources/jonigl__ollama-mcp-bridge/src/ollama_mcp_bridge/main.py) | entrypoints signal |
| entrypoints | [mock-weather-mcp-server/main.py](../../../../sources/jonigl__ollama-mcp-bridge/mock-weather-mcp-server/main.py) | entrypoints signal |
| config | [pyproject.toml](../../../../sources/jonigl__ollama-mcp-bridge/pyproject.toml) | config signal |
| config | [uv.lock](../../../../sources/jonigl__ollama-mcp-bridge/uv.lock) | config signal |
| config | [mock-weather-mcp-server/pyproject.toml](../../../../sources/jonigl__ollama-mcp-bridge/mock-weather-mcp-server/pyproject.toml) | config signal |
| config | [mock-weather-mcp-server/uv.lock](../../../../sources/jonigl__ollama-mcp-bridge/mock-weather-mcp-server/uv.lock) | config signal |
| ci | [.github/workflows/build_and_push_docker_image.yml](../../../../sources/jonigl__ollama-mcp-bridge/.github/workflows/build_and_push_docker_image.yml) | ci support |
| ci | [.github/workflows/ci.yml](../../../../sources/jonigl__ollama-mcp-bridge/.github/workflows/ci.yml) | ci support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 2 | [src/ollama_mcp_bridge/main.py](../../../../sources/jonigl__ollama-mcp-bridge/src/ollama_mcp_bridge/main.py)<br>[mock-weather-mcp-server/main.py](../../../../sources/jonigl__ollama-mcp-bridge/mock-weather-mcp-server/main.py) |
| agentRuntime | 0 | not obvious |
| mcp | 15 | [mcp-config.json](../../../../sources/jonigl__ollama-mcp-bridge/mcp-config.json)<br>[src/ollama_mcp_bridge/__init__.py](../../../../sources/jonigl__ollama-mcp-bridge/src/ollama_mcp_bridge/__init__.py)<br>[src/ollama_mcp_bridge/api.py](../../../../sources/jonigl__ollama-mcp-bridge/src/ollama_mcp_bridge/api.py)<br>[src/ollama_mcp_bridge/lifecycle.py](../../../../sources/jonigl__ollama-mcp-bridge/src/ollama_mcp_bridge/lifecycle.py)<br>[src/ollama_mcp_bridge/main.py](../../../../sources/jonigl__ollama-mcp-bridge/src/ollama_mcp_bridge/main.py)<br>[src/ollama_mcp_bridge/mcp_manager.py](../../../../sources/jonigl__ollama-mcp-bridge/src/ollama_mcp_bridge/mcp_manager.py)<br>[src/ollama_mcp_bridge/proxy_service.py](../../../../sources/jonigl__ollama-mcp-bridge/src/ollama_mcp_bridge/proxy_service.py)<br>[src/ollama_mcp_bridge/schemas.py](../../../../sources/jonigl__ollama-mcp-bridge/src/ollama_mcp_bridge/schemas.py) |
| retrieval | 0 | not obvious |
| spec | 0 | not obvious |
| eval | 8 | [tests/conftest.py](../../../../sources/jonigl__ollama-mcp-bridge/tests/conftest.py)<br>[tests/test_api.py](../../../../sources/jonigl__ollama-mcp-bridge/tests/test_api.py)<br>[tests/test_env_expansion.py](../../../../sources/jonigl__ollama-mcp-bridge/tests/test_env_expansion.py)<br>[tests/test_error_handling.py](../../../../sources/jonigl__ollama-mcp-bridge/tests/test_error_handling.py)<br>[tests/test_ollama_proxy_timeout_env.py](../../../../sources/jonigl__ollama-mcp-bridge/tests/test_ollama_proxy_timeout_env.py)<br>[tests/test_tool_filtering.py](../../../../sources/jonigl__ollama-mcp-bridge/tests/test_tool_filtering.py)<br>[tests/test_unit.py](../../../../sources/jonigl__ollama-mcp-bridge/tests/test_unit.py)<br>[.github/workflows/test-publish.yml](../../../../sources/jonigl__ollama-mcp-bridge/.github/workflows/test-publish.yml) |
| security | 0 | not obvious |
| ci | 4 | [.github/workflows/build_and_push_docker_image.yml](../../../../sources/jonigl__ollama-mcp-bridge/.github/workflows/build_and_push_docker_image.yml)<br>[.github/workflows/ci.yml](../../../../sources/jonigl__ollama-mcp-bridge/.github/workflows/ci.yml)<br>[.github/workflows/publish.yml](../../../../sources/jonigl__ollama-mcp-bridge/.github/workflows/publish.yml)<br>[.github/workflows/test-publish.yml](../../../../sources/jonigl__ollama-mcp-bridge/.github/workflows/test-publish.yml) |
| container | 2 | [docker-compose.yml](../../../../sources/jonigl__ollama-mcp-bridge/docker-compose.yml)<br>[Dockerfile](../../../../sources/jonigl__ollama-mcp-bridge/Dockerfile) |
| instruction | 0 | not obvious |
| docs | 2 | [README.md](../../../../sources/jonigl__ollama-mcp-bridge/README.md)<br>[mock-weather-mcp-server/README.md](../../../../sources/jonigl__ollama-mcp-bridge/mock-weather-mcp-server/README.md) |
| config | 4 | [pyproject.toml](../../../../sources/jonigl__ollama-mcp-bridge/pyproject.toml)<br>[uv.lock](../../../../sources/jonigl__ollama-mcp-bridge/uv.lock)<br>[mock-weather-mcp-server/pyproject.toml](../../../../sources/jonigl__ollama-mcp-bridge/mock-weather-mcp-server/pyproject.toml)<br>[mock-weather-mcp-server/uv.lock](../../../../sources/jonigl__ollama-mcp-bridge/mock-weather-mcp-server/uv.lock) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 8 | [tests/conftest.py](../../../../sources/jonigl__ollama-mcp-bridge/tests/conftest.py)<br>[tests/test_api.py](../../../../sources/jonigl__ollama-mcp-bridge/tests/test_api.py)<br>[tests/test_env_expansion.py](../../../../sources/jonigl__ollama-mcp-bridge/tests/test_env_expansion.py)<br>[tests/test_error_handling.py](../../../../sources/jonigl__ollama-mcp-bridge/tests/test_error_handling.py)<br>[tests/test_ollama_proxy_timeout_env.py](../../../../sources/jonigl__ollama-mcp-bridge/tests/test_ollama_proxy_timeout_env.py)<br>[tests/test_tool_filtering.py](../../../../sources/jonigl__ollama-mcp-bridge/tests/test_tool_filtering.py) |
| CI workflows | 4 | [.github/workflows/build_and_push_docker_image.yml](../../../../sources/jonigl__ollama-mcp-bridge/.github/workflows/build_and_push_docker_image.yml)<br>[.github/workflows/ci.yml](../../../../sources/jonigl__ollama-mcp-bridge/.github/workflows/ci.yml)<br>[.github/workflows/publish.yml](../../../../sources/jonigl__ollama-mcp-bridge/.github/workflows/publish.yml)<br>[.github/workflows/test-publish.yml](../../../../sources/jonigl__ollama-mcp-bridge/.github/workflows/test-publish.yml) |
| Containers / deploy | 2 | [docker-compose.yml](../../../../sources/jonigl__ollama-mcp-bridge/docker-compose.yml)<br>[Dockerfile](../../../../sources/jonigl__ollama-mcp-bridge/Dockerfile) |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | security/policy surface not obvious; agent instruction files not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `mcp-config.json`, `src/ollama_mcp_bridge/__init__.py`, `src/ollama_mcp_bridge/api.py`.
2. Trace execution through entrypoints: `src/ollama_mcp_bridge/main.py`, `mock-weather-mcp-server/main.py`.
3. Verify behavior through test/eval files: `tests/conftest.py`, `tests/test_api.py`, `tests/test_env_expansion.py`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Extend the Ollama API with dynamic AI tool integration from multiple MCP Model Context Protocol servers. Fully compatibl. 핵심 구조 신호는 Python, pyproject.toml, Dockerfile, docker-compose.yml, README.md, LICENSE이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
