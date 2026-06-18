# langchain-ai/langgraph Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Local clone structure analysis: 666 files, 158 directories.

## 요약

- 조사 단위: `sources/langchain-ai__langgraph` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 666 files, 158 directories, depth score 132, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=AGENTS.md, libs/sdk-py/integration/graph/tools_agent.py, libs/prebuilt/tests/memory_assert.py이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | langchain-ai/langgraph |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 35062 |
| Forks | 5869 |
| License | none |
| Maturity | high-signal |
| Evidence | deep-source+report |
| Source | [sources/langchain-ai__langgraph](../../../../sources/langchain-ai__langgraph) |
| Existing report | [reports/global-trending/repositories/langchain-ai__langgraph.md](../../../global-trending/repositories/langchain-ai__langgraph.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 666 / 158 |
| Max observed depth | 9 |
| Top directories | .github, docs, examples, libs |
| Top extensions | .py: 446, .ipynb: 35, .json: 30, .yml: 28, (none): 28, .toml: 21, .md: 18, .lock: 13, .typed: 13, .txt: 11, .ts: 7, .example: 5 |
| Source patterns | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| libs/cli | libs workspace | 85 |
| libs/sdk-py | libs workspace | 57 |
| libs/langgraph | libs workspace | 21 |
| libs/checkpoint-conformance | libs workspace | 13 |
| libs/prebuilt | libs workspace | 10 |
| libs/checkpoint | libs workspace | 8 |
| docs | documentation surface | 5 |
| libs/checkpoint-postgres | libs workspace | 2 |
| .github | ci surface | 1 |
| examples | top-level component | 1 |
| examples/README.md | examples workspace | 1 |
| libs | source boundary | 1 |
| libs/checkpoint-sqlite | libs workspace | 1 |
| libs/sdk-js | libs workspace | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | all | make all |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | install | make install |
| utility | Makefile | .PHONY | make .PHONY |
| quality | Makefile | lint | make lint |
| utility | Makefile | .PHONY | make .PHONY |
| quality | Makefile | format | make format |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | lock | make lock |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | lock-upgrade | make lock-upgrade |
| utility | Makefile | .PHONY | make .PHONY |
| test | Makefile | test | make test |


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
| agentRuntime | [AGENTS.md](../../../../sources/langchain-ai__langgraph/AGENTS.md) | agentRuntime signal |
| agentRuntime | [libs/sdk-py/integration/graph/tools_agent.py](../../../../sources/langchain-ai__langgraph/libs/sdk-py/integration/graph/tools_agent.py) | agentRuntime signal |
| agentRuntime | [libs/prebuilt/tests/memory_assert.py](../../../../sources/langchain-ai__langgraph/libs/prebuilt/tests/memory_assert.py) | agentRuntime signal |
| agentRuntime | [libs/prebuilt/langgraph/prebuilt/tool_node.py](../../../../sources/langchain-ai__langgraph/libs/prebuilt/langgraph/prebuilt/tool_node.py) | agentRuntime signal |
| entrypoints | [libs/langgraph/langgraph/pregel/main.py](../../../../sources/langchain-ai__langgraph/libs/langgraph/langgraph/pregel/main.py) | entrypoints signal |
| entrypoints | [libs/langgraph/bench/__main__.py](../../../../sources/langchain-ai__langgraph/libs/langgraph/bench/__main__.py) | entrypoints signal |
| entrypoints | [libs/cli/uv-examples/monorepo/apps/agent/src/agent/__init__.py](../../../../sources/langchain-ai__langgraph/libs/cli/uv-examples/monorepo/apps/agent/src/agent/__init__.py) | entrypoints signal |
| entrypoints | [libs/cli/uv-examples/monorepo/apps/agent/src/agent/graph.py](../../../../sources/langchain-ai__langgraph/libs/cli/uv-examples/monorepo/apps/agent/src/agent/graph.py) | entrypoints signal |
| instruction | [CLAUDE.md](../../../../sources/langchain-ai__langgraph/CLAUDE.md) | instruction signal |
| config | [Makefile](../../../../sources/langchain-ai__langgraph/Makefile) | config signal |
| config | [libs/sdk-py/Makefile](../../../../sources/langchain-ai__langgraph/libs/sdk-py/Makefile) | config signal |
| config | [libs/sdk-py/pyproject.toml](../../../../sources/langchain-ai__langgraph/libs/sdk-py/pyproject.toml) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 11 | [libs/langgraph/langgraph/pregel/main.py](../../../../sources/langchain-ai__langgraph/libs/langgraph/langgraph/pregel/main.py)<br>[libs/langgraph/bench/__main__.py](../../../../sources/langchain-ai__langgraph/libs/langgraph/bench/__main__.py)<br>[libs/cli/uv-examples/monorepo/apps/agent/src/agent/__init__.py](../../../../sources/langchain-ai__langgraph/libs/cli/uv-examples/monorepo/apps/agent/src/agent/__init__.py)<br>[libs/cli/uv-examples/monorepo/apps/agent/src/agent/graph.py](../../../../sources/langchain-ai__langgraph/libs/cli/uv-examples/monorepo/apps/agent/src/agent/graph.py)<br>[libs/cli/python-monorepo-example/apps/agent/src/agent/__init__.py](../../../../sources/langchain-ai__langgraph/libs/cli/python-monorepo-example/apps/agent/src/agent/__init__.py)<br>[libs/cli/python-monorepo-example/apps/agent/src/agent/graph.py](../../../../sources/langchain-ai__langgraph/libs/cli/python-monorepo-example/apps/agent/src/agent/graph.py)<br>[libs/cli/python-monorepo-example/apps/agent/src/agent/state.py](../../../../sources/langchain-ai__langgraph/libs/cli/python-monorepo-example/apps/agent/src/agent/state.py)<br>[libs/cli/langgraph_cli/__main__.py](../../../../sources/langchain-ai__langgraph/libs/cli/langgraph_cli/__main__.py) |
| agentRuntime | 42 | [AGENTS.md](../../../../sources/langchain-ai__langgraph/AGENTS.md)<br>[libs/sdk-py/integration/graph/tools_agent.py](../../../../sources/langchain-ai__langgraph/libs/sdk-py/integration/graph/tools_agent.py)<br>[libs/prebuilt/tests/memory_assert.py](../../../../sources/langchain-ai__langgraph/libs/prebuilt/tests/memory_assert.py)<br>[libs/prebuilt/langgraph/prebuilt/tool_node.py](../../../../sources/langchain-ai__langgraph/libs/prebuilt/langgraph/prebuilt/tool_node.py)<br>[libs/prebuilt/langgraph/prebuilt/tool_validator.py](../../../../sources/langchain-ai__langgraph/libs/prebuilt/langgraph/prebuilt/tool_validator.py)<br>[libs/langgraph/tests/agents.py](../../../../sources/langchain-ai__langgraph/libs/langgraph/tests/agents.py)<br>[libs/langgraph/tests/memory_assert.py](../../../../sources/langchain-ai__langgraph/libs/langgraph/tests/memory_assert.py)<br>[libs/cli/uv-examples/simple/src/agent/__init__.py](../../../../sources/langchain-ai__langgraph/libs/cli/uv-examples/simple/src/agent/__init__.py) |
| mcp | 0 | not obvious |
| retrieval | 55 | [libs/sdk-py/tests/integration/test_factory_graph.py](../../../../sources/langchain-ai__langgraph/libs/sdk-py/tests/integration/test_factory_graph.py)<br>[libs/sdk-py/tests/integration/test_remote_graph_v3.py](../../../../sources/langchain-ai__langgraph/libs/sdk-py/tests/integration/test_remote_graph_v3.py)<br>[libs/sdk-py/integration/graph/__init__.py](../../../../sources/langchain-ai__langgraph/libs/sdk-py/integration/graph/__init__.py)<br>[libs/sdk-py/integration/graph/deep_agent.py](../../../../sources/langchain-ai__langgraph/libs/sdk-py/integration/graph/deep_agent.py)<br>[libs/sdk-py/integration/graph/factory_graph.py](../../../../sources/langchain-ai__langgraph/libs/sdk-py/integration/graph/factory_graph.py)<br>[libs/sdk-py/integration/graph/streaming_graph.py](../../../../sources/langchain-ai__langgraph/libs/sdk-py/integration/graph/streaming_graph.py)<br>[libs/sdk-py/integration/graph/tools_agent.py](../../../../sources/langchain-ai__langgraph/libs/sdk-py/integration/graph/tools_agent.py)<br>[libs/prebuilt/tests/memory_assert.py](../../../../sources/langchain-ai__langgraph/libs/prebuilt/tests/memory_assert.py) |
| spec | 14 | [libs/langgraph/tests/example_app/requirements.txt](../../../../sources/langchain-ai__langgraph/libs/langgraph/tests/example_app/requirements.txt)<br>[libs/cli/examples/graphs_reqs_b/requirements.txt](../../../../sources/langchain-ai__langgraph/libs/cli/examples/graphs_reqs_b/requirements.txt)<br>[libs/cli/examples/graphs_reqs_a/requirements.txt](../../../../sources/langchain-ai__langgraph/libs/cli/examples/graphs_reqs_a/requirements.txt)<br>[libs/checkpoint-conformance/langgraph/checkpoint/conformance/spec/__init__.py](../../../../sources/langchain-ai__langgraph/libs/checkpoint-conformance/langgraph/checkpoint/conformance/spec/__init__.py)<br>[libs/checkpoint-conformance/langgraph/checkpoint/conformance/spec/_delta_fixtures.py](../../../../sources/langchain-ai__langgraph/libs/checkpoint-conformance/langgraph/checkpoint/conformance/spec/_delta_fixtures.py)<br>[libs/checkpoint-conformance/langgraph/checkpoint/conformance/spec/test_copy_thread.py](../../../../sources/langchain-ai__langgraph/libs/checkpoint-conformance/langgraph/checkpoint/conformance/spec/test_copy_thread.py)<br>[libs/checkpoint-conformance/langgraph/checkpoint/conformance/spec/test_delete_for_runs.py](../../../../sources/langchain-ai__langgraph/libs/checkpoint-conformance/langgraph/checkpoint/conformance/spec/test_delete_for_runs.py)<br>[libs/checkpoint-conformance/langgraph/checkpoint/conformance/spec/test_delete_thread.py](../../../../sources/langchain-ai__langgraph/libs/checkpoint-conformance/langgraph/checkpoint/conformance/spec/test_delete_thread.py) |
| eval | 250 | [libs/sdk-py/tests/test_api_parity.py](../../../../sources/langchain-ai__langgraph/libs/sdk-py/tests/test_api_parity.py)<br>[libs/sdk-py/tests/test_assistants_client.py](../../../../sources/langchain-ai__langgraph/libs/sdk-py/tests/test_assistants_client.py)<br>[libs/sdk-py/tests/test_cache.py](../../../../sources/langchain-ai__langgraph/libs/sdk-py/tests/test_cache.py)<br>[libs/sdk-py/tests/test_client_exports.py](../../../../sources/langchain-ai__langgraph/libs/sdk-py/tests/test_client_exports.py)<br>[libs/sdk-py/tests/test_client_stream.py](../../../../sources/langchain-ai__langgraph/libs/sdk-py/tests/test_client_stream.py)<br>[libs/sdk-py/tests/test_crons_client.py](../../../../sources/langchain-ai__langgraph/libs/sdk-py/tests/test_crons_client.py)<br>[libs/sdk-py/tests/test_encryption.py](../../../../sources/langchain-ai__langgraph/libs/sdk-py/tests/test_encryption.py)<br>[libs/sdk-py/tests/test_errors.py](../../../../sources/langchain-ai__langgraph/libs/sdk-py/tests/test_errors.py) |
| security | 3 | [libs/sdk-py/langgraph_sdk/auth/__init__.py](../../../../sources/langchain-ai__langgraph/libs/sdk-py/langgraph_sdk/auth/__init__.py)<br>[libs/sdk-py/langgraph_sdk/auth/exceptions.py](../../../../sources/langchain-ai__langgraph/libs/sdk-py/langgraph_sdk/auth/exceptions.py)<br>[libs/sdk-py/langgraph_sdk/auth/types.py](../../../../sources/langchain-ai__langgraph/libs/sdk-py/langgraph_sdk/auth/types.py) |
| ci | 17 | [.github/workflows/_integration_test.yml](../../../../sources/langchain-ai__langgraph/.github/workflows/_integration_test.yml)<br>[.github/workflows/_lint.yml](../../../../sources/langchain-ai__langgraph/.github/workflows/_lint.yml)<br>[.github/workflows/_sdk_integration_test.yml](../../../../sources/langchain-ai__langgraph/.github/workflows/_sdk_integration_test.yml)<br>[.github/workflows/_test_langgraph.yml](../../../../sources/langchain-ai__langgraph/.github/workflows/_test_langgraph.yml)<br>[.github/workflows/_test_release.yml](../../../../sources/langchain-ai__langgraph/.github/workflows/_test_release.yml)<br>[.github/workflows/_test.yml](../../../../sources/langchain-ai__langgraph/.github/workflows/_test.yml)<br>[.github/workflows/baseline.yml](../../../../sources/langchain-ai__langgraph/.github/workflows/baseline.yml)<br>[.github/workflows/bench.yml](../../../../sources/langchain-ai__langgraph/.github/workflows/bench.yml) |
| container | 2 | [libs/sdk-py/integration/docker-compose.yml](../../../../sources/langchain-ai__langgraph/libs/sdk-py/integration/docker-compose.yml)<br>[libs/sdk-py/integration/Dockerfile](../../../../sources/langchain-ai__langgraph/libs/sdk-py/integration/Dockerfile) |
| instruction | 2 | [AGENTS.md](../../../../sources/langchain-ai__langgraph/AGENTS.md)<br>[CLAUDE.md](../../../../sources/langchain-ai__langgraph/CLAUDE.md) |
| docs | 16 | [README.md](../../../../sources/langchain-ai__langgraph/README.md)<br>[libs/sdk-py/README.md](../../../../sources/langchain-ai__langgraph/libs/sdk-py/README.md)<br>[libs/sdk-js/README.md](../../../../sources/langchain-ai__langgraph/libs/sdk-js/README.md)<br>[libs/prebuilt/README.md](../../../../sources/langchain-ai__langgraph/libs/prebuilt/README.md)<br>[libs/langgraph/README.md](../../../../sources/langchain-ai__langgraph/libs/langgraph/README.md)<br>[libs/cli/README.md](../../../../sources/langchain-ai__langgraph/libs/cli/README.md)<br>[libs/cli/js-examples/README.md](../../../../sources/langchain-ai__langgraph/libs/cli/js-examples/README.md)<br>[libs/checkpoint-sqlite/README.md](../../../../sources/langchain-ai__langgraph/libs/checkpoint-sqlite/README.md) |
| config | 54 | [Makefile](../../../../sources/langchain-ai__langgraph/Makefile)<br>[libs/sdk-py/Makefile](../../../../sources/langchain-ai__langgraph/libs/sdk-py/Makefile)<br>[libs/sdk-py/pyproject.toml](../../../../sources/langchain-ai__langgraph/libs/sdk-py/pyproject.toml)<br>[libs/sdk-py/uv.lock](../../../../sources/langchain-ai__langgraph/libs/sdk-py/uv.lock)<br>[libs/prebuilt/Makefile](../../../../sources/langchain-ai__langgraph/libs/prebuilt/Makefile)<br>[libs/prebuilt/pyproject.toml](../../../../sources/langchain-ai__langgraph/libs/prebuilt/pyproject.toml)<br>[libs/prebuilt/uv.lock](../../../../sources/langchain-ai__langgraph/libs/prebuilt/uv.lock)<br>[libs/langgraph/Makefile](../../../../sources/langchain-ai__langgraph/libs/langgraph/Makefile) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 250 | [libs/sdk-py/tests/test_api_parity.py](../../../../sources/langchain-ai__langgraph/libs/sdk-py/tests/test_api_parity.py)<br>[libs/sdk-py/tests/test_assistants_client.py](../../../../sources/langchain-ai__langgraph/libs/sdk-py/tests/test_assistants_client.py)<br>[libs/sdk-py/tests/test_cache.py](../../../../sources/langchain-ai__langgraph/libs/sdk-py/tests/test_cache.py)<br>[libs/sdk-py/tests/test_client_exports.py](../../../../sources/langchain-ai__langgraph/libs/sdk-py/tests/test_client_exports.py)<br>[libs/sdk-py/tests/test_client_stream.py](../../../../sources/langchain-ai__langgraph/libs/sdk-py/tests/test_client_stream.py)<br>[libs/sdk-py/tests/test_crons_client.py](../../../../sources/langchain-ai__langgraph/libs/sdk-py/tests/test_crons_client.py) |
| CI workflows | 17 | [.github/workflows/_integration_test.yml](../../../../sources/langchain-ai__langgraph/.github/workflows/_integration_test.yml)<br>[.github/workflows/_lint.yml](../../../../sources/langchain-ai__langgraph/.github/workflows/_lint.yml)<br>[.github/workflows/_sdk_integration_test.yml](../../../../sources/langchain-ai__langgraph/.github/workflows/_sdk_integration_test.yml)<br>[.github/workflows/_test_langgraph.yml](../../../../sources/langchain-ai__langgraph/.github/workflows/_test_langgraph.yml)<br>[.github/workflows/_test_release.yml](../../../../sources/langchain-ai__langgraph/.github/workflows/_test_release.yml)<br>[.github/workflows/_test.yml](../../../../sources/langchain-ai__langgraph/.github/workflows/_test.yml) |
| Containers / deploy | 2 | [libs/sdk-py/integration/docker-compose.yml](../../../../sources/langchain-ai__langgraph/libs/sdk-py/integration/docker-compose.yml)<br>[libs/sdk-py/integration/Dockerfile](../../../../sources/langchain-ai__langgraph/libs/sdk-py/integration/Dockerfile) |
| Security / policy | 3 | [libs/sdk-py/langgraph_sdk/auth/__init__.py](../../../../sources/langchain-ai__langgraph/libs/sdk-py/langgraph_sdk/auth/__init__.py)<br>[libs/sdk-py/langgraph_sdk/auth/exceptions.py](../../../../sources/langchain-ai__langgraph/libs/sdk-py/langgraph_sdk/auth/exceptions.py)<br>[libs/sdk-py/langgraph_sdk/auth/types.py](../../../../sources/langchain-ai__langgraph/libs/sdk-py/langgraph_sdk/auth/types.py) |
| Agent instructions | 2 | [AGENTS.md](../../../../sources/langchain-ai__langgraph/AGENTS.md)<br>[CLAUDE.md](../../../../sources/langchain-ai__langgraph/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `AGENTS.md`, `libs/sdk-py/integration/graph/tools_agent.py`, `libs/prebuilt/tests/memory_assert.py`.
2. Trace execution through entrypoints: `libs/langgraph/langgraph/pregel/main.py`, `libs/langgraph/bench/__main__.py`, `libs/cli/uv-examples/monorepo/apps/agent/src/agent/__init__.py`.
3. Map agent/tool runtime through: `AGENTS.md`, `libs/sdk-py/integration/graph/tools_agent.py`, `libs/prebuilt/tests/memory_assert.py`.
4. Inspect retrieval/memory/indexing through: `libs/sdk-py/tests/integration/test_factory_graph.py`, `libs/sdk-py/tests/integration/test_remote_graph_v3.py`, `libs/sdk-py/integration/graph/__init__.py`.
5. Verify behavior through test/eval files: `libs/sdk-py/tests/test_api_parity.py`, `libs/sdk-py/tests/test_assistants_client.py`, `libs/sdk-py/tests/test_cache.py`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Local clone structure analysis 666 files, 158 directories.. 핵심 구조 신호는 Python, Makefile, README.md, AGENTS.md, CLAUDE.md, LICENSE이며, deep-source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing입니다.
