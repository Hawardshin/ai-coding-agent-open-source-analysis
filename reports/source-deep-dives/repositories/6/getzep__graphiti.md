# getzep/graphiti Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Build Real-Time Knowledge Graphs for AI Agents

## 요약

- 조사 단위: `sources/getzep__graphiti` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 352 files, 72 directories, depth score 127, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=mcp_server/.env.example, mcp_server/.python-version, mcp_server/main.py이고, 의존성 단서는 openai, anthropic, langchain, langgraph, pydantic, transformers, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | getzep/graphiti |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | mixed |
| Language | Python |
| Stars | 27553 |
| Forks | 2761 |
| License | Apache-2.0 |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/getzep__graphiti](../../../../sources/getzep__graphiti) |
| Existing report | [reports/llm-wiki/repositories/getzep__graphiti.md](../../../llm-wiki/repositories/getzep__graphiti.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 352 / 72 |
| Max observed depth | 5 |
| Top directories | .github, examples, graphiti_core, images, mcp_server, server, signatures, spec, tests |
| Top extensions | .py: 255, .md: 23, .yml: 23, (none): 7, .example: 6, .json: 5, .yaml: 5, .ini: 4, .lock: 4, .toml: 4, .sh: 3, .txt: 3 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 43 |
| server | source boundary | 17 |
| examples/opentelemetry | examples workspace | 3 |
| examples/quickstart | examples workspace | 3 |
| examples/ecommerce | examples workspace | 2 |
| .github | ci surface | 1 |
| examples | top-level component | 1 |
| examples/azure-openai | examples workspace | 1 |
| examples/gliner2 | examples workspace | 1 |
| examples/langgraph-agent | examples workspace | 1 |
| examples/wizard_of_oz | examples workspace | 1 |
| graphiti_core | top-level component | 1 |
| images | top-level component | 1 |
| mcp_server | source boundary | 1 |
| signatures | top-level component | 1 |
| spec | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | all | make all |
| utility | Makefile | install | make install |
| quality | Makefile | format | make format |
| quality | Makefile | lint | make lint |
| test | Makefile | test | make test |
| quality | Makefile | check | make check |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai, anthropic |
| agentProtocols | none |
| agentFrameworks | langchain, langgraph |
| vectorStores | none |
| modelRuntime | transformers |
| webRuntime | none |
| developerSurface | none |
| observability | opentelemetry |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [mcp_server/.env.example](../../../../sources/getzep__graphiti/mcp_server/.env.example) | mcp signal |
| mcp | [mcp_server/.python-version](../../../../sources/getzep__graphiti/mcp_server/.python-version) | mcp signal |
| mcp | [mcp_server/main.py](../../../../sources/getzep__graphiti/mcp_server/main.py) | mcp signal |
| mcp | [mcp_server/pyproject.toml](../../../../sources/getzep__graphiti/mcp_server/pyproject.toml) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/getzep__graphiti/AGENTS.md) | agentRuntime signal |
| agentRuntime | [examples/wizard_of_oz/runner.py](../../../../sources/getzep__graphiti/examples/wizard_of_oz/runner.py) | agentRuntime signal |
| agentRuntime | [examples/langgraph-agent/agent.ipynb](../../../../sources/getzep__graphiti/examples/langgraph-agent/agent.ipynb) | agentRuntime signal |
| agentRuntime | [examples/ecommerce/runner.ipynb](../../../../sources/getzep__graphiti/examples/ecommerce/runner.ipynb) | agentRuntime signal |
| entrypoints | [server/graph_service/main.py](../../../../sources/getzep__graphiti/server/graph_service/main.py) | entrypoints signal |
| instruction | [CLAUDE.md](../../../../sources/getzep__graphiti/CLAUDE.md) | instruction signal |
| config | [Makefile](../../../../sources/getzep__graphiti/Makefile) | config signal |
| config | [pyproject.toml](../../../../sources/getzep__graphiti/pyproject.toml) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 2 | [server/graph_service/main.py](../../../../sources/getzep__graphiti/server/graph_service/main.py)<br>[mcp_server/main.py](../../../../sources/getzep__graphiti/mcp_server/main.py) |
| agentRuntime | 5 | [AGENTS.md](../../../../sources/getzep__graphiti/AGENTS.md)<br>[examples/wizard_of_oz/runner.py](../../../../sources/getzep__graphiti/examples/wizard_of_oz/runner.py)<br>[examples/langgraph-agent/agent.ipynb](../../../../sources/getzep__graphiti/examples/langgraph-agent/agent.ipynb)<br>[examples/ecommerce/runner.ipynb](../../../../sources/getzep__graphiti/examples/ecommerce/runner.ipynb)<br>[examples/ecommerce/runner.py](../../../../sources/getzep__graphiti/examples/ecommerce/runner.py) |
| mcp | 59 | [mcp_server/.env.example](../../../../sources/getzep__graphiti/mcp_server/.env.example)<br>[mcp_server/.python-version](../../../../sources/getzep__graphiti/mcp_server/.python-version)<br>[mcp_server/main.py](../../../../sources/getzep__graphiti/mcp_server/main.py)<br>[mcp_server/pyproject.toml](../../../../sources/getzep__graphiti/mcp_server/pyproject.toml)<br>[mcp_server/pytest.ini](../../../../sources/getzep__graphiti/mcp_server/pytest.ini)<br>[mcp_server/README.md](../../../../sources/getzep__graphiti/mcp_server/README.md)<br>[mcp_server/uv.lock](../../../../sources/getzep__graphiti/mcp_server/uv.lock)<br>[mcp_server/tests/__init__.py](../../../../sources/getzep__graphiti/mcp_server/tests/__init__.py) |
| retrieval | 23 | [tests/evals/eval_e2e_graph_building.py](../../../../sources/getzep__graphiti/tests/evals/eval_e2e_graph_building.py)<br>[server/graph_service/__init__.py](../../../../sources/getzep__graphiti/server/graph_service/__init__.py)<br>[server/graph_service/config.py](../../../../sources/getzep__graphiti/server/graph_service/config.py)<br>[server/graph_service/main.py](../../../../sources/getzep__graphiti/server/graph_service/main.py)<br>[server/graph_service/zep_graphiti.py](../../../../sources/getzep__graphiti/server/graph_service/zep_graphiti.py)<br>[server/graph_service/routers/__init__.py](../../../../sources/getzep__graphiti/server/graph_service/routers/__init__.py)<br>[server/graph_service/routers/ingest.py](../../../../sources/getzep__graphiti/server/graph_service/routers/ingest.py)<br>[server/graph_service/routers/retrieve.py](../../../../sources/getzep__graphiti/server/graph_service/routers/retrieve.py) |
| spec | 2 | [spec/driver-operations-redesign.md](../../../../sources/getzep__graphiti/spec/driver-operations-redesign.md)<br>[examples/quickstart/requirements.txt](../../../../sources/getzep__graphiti/examples/quickstart/requirements.txt) |
| eval | 70 | [docker-compose.test.yml](../../../../sources/getzep__graphiti/docker-compose.test.yml)<br>[OTEL_TRACING.md](../../../../sources/getzep__graphiti/OTEL_TRACING.md)<br>[tests/helpers_test.py](../../../../sources/getzep__graphiti/tests/helpers_test.py)<br>[tests/test_add_triplet.py](../../../../sources/getzep__graphiti/tests/test_add_triplet.py)<br>[tests/test_edge_int.py](../../../../sources/getzep__graphiti/tests/test_edge_int.py)<br>[tests/test_entity_exclusion_int.py](../../../../sources/getzep__graphiti/tests/test_entity_exclusion_int.py)<br>[tests/test_graphiti_int.py](../../../../sources/getzep__graphiti/tests/test_graphiti_int.py)<br>[tests/test_graphiti_mock.py](../../../../sources/getzep__graphiti/tests/test_graphiti_mock.py) |
| security | 4 | [SECURITY.md](../../../../sources/getzep__graphiti/SECURITY.md)<br>[tests/test_node_label_security.py](../../../../sources/getzep__graphiti/tests/test_node_label_security.py)<br>[tests/utils/search/test_search_security.py](../../../../sources/getzep__graphiti/tests/utils/search/test_search_security.py)<br>[.github/secret_scanning.yml](../../../../sources/getzep__graphiti/.github/secret_scanning.yml) |
| ci | 15 | [.github/workflows/ai-moderator.yml](../../../../sources/getzep__graphiti/.github/workflows/ai-moderator.yml)<br>[.github/workflows/cla.yml](../../../../sources/getzep__graphiti/.github/workflows/cla.yml)<br>[.github/workflows/claude-code-review-manual.yml](../../../../sources/getzep__graphiti/.github/workflows/claude-code-review-manual.yml)<br>[.github/workflows/claude-code-review.yml](../../../../sources/getzep__graphiti/.github/workflows/claude-code-review.yml)<br>[.github/workflows/claude.yml](../../../../sources/getzep__graphiti/.github/workflows/claude.yml)<br>[.github/workflows/codeql.yml](../../../../sources/getzep__graphiti/.github/workflows/codeql.yml)<br>[.github/workflows/lint.yml](../../../../sources/getzep__graphiti/.github/workflows/lint.yml)<br>[.github/workflows/mcp-server-tests.yml](../../../../sources/getzep__graphiti/.github/workflows/mcp-server-tests.yml) |
| container | 8 | [docker-compose.test.yml](../../../../sources/getzep__graphiti/docker-compose.test.yml)<br>[docker-compose.yml](../../../../sources/getzep__graphiti/docker-compose.yml)<br>[Dockerfile](../../../../sources/getzep__graphiti/Dockerfile)<br>[mcp_server/docker/docker-compose-falkordb.yml](../../../../sources/getzep__graphiti/mcp_server/docker/docker-compose-falkordb.yml)<br>[mcp_server/docker/docker-compose-neo4j.yml](../../../../sources/getzep__graphiti/mcp_server/docker/docker-compose-neo4j.yml)<br>[mcp_server/docker/docker-compose.yml](../../../../sources/getzep__graphiti/mcp_server/docker/docker-compose.yml)<br>[mcp_server/docker/Dockerfile](../../../../sources/getzep__graphiti/mcp_server/docker/Dockerfile)<br>[mcp_server/docker/Dockerfile.standalone](../../../../sources/getzep__graphiti/mcp_server/docker/Dockerfile.standalone) |
| instruction | 2 | [AGENTS.md](../../../../sources/getzep__graphiti/AGENTS.md)<br>[CLAUDE.md](../../../../sources/getzep__graphiti/CLAUDE.md) |
| docs | 12 | [README.md](../../../../sources/getzep__graphiti/README.md)<br>[tests/evals/data/longmemeval_data/README.md](../../../../sources/getzep__graphiti/tests/evals/data/longmemeval_data/README.md)<br>[server/README.md](../../../../sources/getzep__graphiti/server/README.md)<br>[mcp_server/README.md](../../../../sources/getzep__graphiti/mcp_server/README.md)<br>[mcp_server/tests/README.md](../../../../sources/getzep__graphiti/mcp_server/tests/README.md)<br>[mcp_server/docs/cursor_rules.md](../../../../sources/getzep__graphiti/mcp_server/docs/cursor_rules.md)<br>[mcp_server/docker/README-falkordb-combined.md](../../../../sources/getzep__graphiti/mcp_server/docker/README-falkordb-combined.md)<br>[mcp_server/docker/README.md](../../../../sources/getzep__graphiti/mcp_server/docker/README.md) |
| config | 11 | [Makefile](../../../../sources/getzep__graphiti/Makefile)<br>[pyproject.toml](../../../../sources/getzep__graphiti/pyproject.toml)<br>[uv.lock](../../../../sources/getzep__graphiti/uv.lock)<br>[server/Makefile](../../../../sources/getzep__graphiti/server/Makefile)<br>[server/pyproject.toml](../../../../sources/getzep__graphiti/server/pyproject.toml)<br>[server/uv.lock](../../../../sources/getzep__graphiti/server/uv.lock)<br>[mcp_server/pyproject.toml](../../../../sources/getzep__graphiti/mcp_server/pyproject.toml)<br>[mcp_server/uv.lock](../../../../sources/getzep__graphiti/mcp_server/uv.lock) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 70 | [docker-compose.test.yml](../../../../sources/getzep__graphiti/docker-compose.test.yml)<br>[OTEL_TRACING.md](../../../../sources/getzep__graphiti/OTEL_TRACING.md)<br>[tests/helpers_test.py](../../../../sources/getzep__graphiti/tests/helpers_test.py)<br>[tests/test_add_triplet.py](../../../../sources/getzep__graphiti/tests/test_add_triplet.py)<br>[tests/test_edge_int.py](../../../../sources/getzep__graphiti/tests/test_edge_int.py)<br>[tests/test_entity_exclusion_int.py](../../../../sources/getzep__graphiti/tests/test_entity_exclusion_int.py) |
| CI workflows | 15 | [.github/workflows/ai-moderator.yml](../../../../sources/getzep__graphiti/.github/workflows/ai-moderator.yml)<br>[.github/workflows/cla.yml](../../../../sources/getzep__graphiti/.github/workflows/cla.yml)<br>[.github/workflows/claude-code-review-manual.yml](../../../../sources/getzep__graphiti/.github/workflows/claude-code-review-manual.yml)<br>[.github/workflows/claude-code-review.yml](../../../../sources/getzep__graphiti/.github/workflows/claude-code-review.yml)<br>[.github/workflows/claude.yml](../../../../sources/getzep__graphiti/.github/workflows/claude.yml)<br>[.github/workflows/codeql.yml](../../../../sources/getzep__graphiti/.github/workflows/codeql.yml) |
| Containers / deploy | 8 | [docker-compose.test.yml](../../../../sources/getzep__graphiti/docker-compose.test.yml)<br>[docker-compose.yml](../../../../sources/getzep__graphiti/docker-compose.yml)<br>[Dockerfile](../../../../sources/getzep__graphiti/Dockerfile)<br>[mcp_server/docker/docker-compose-falkordb.yml](../../../../sources/getzep__graphiti/mcp_server/docker/docker-compose-falkordb.yml)<br>[mcp_server/docker/docker-compose-neo4j.yml](../../../../sources/getzep__graphiti/mcp_server/docker/docker-compose-neo4j.yml)<br>[mcp_server/docker/docker-compose.yml](../../../../sources/getzep__graphiti/mcp_server/docker/docker-compose.yml) |
| Security / policy | 4 | [SECURITY.md](../../../../sources/getzep__graphiti/SECURITY.md)<br>[tests/test_node_label_security.py](../../../../sources/getzep__graphiti/tests/test_node_label_security.py)<br>[tests/utils/search/test_search_security.py](../../../../sources/getzep__graphiti/tests/utils/search/test_search_security.py)<br>[.github/secret_scanning.yml](../../../../sources/getzep__graphiti/.github/secret_scanning.yml) |
| Agent instructions | 2 | [AGENTS.md](../../../../sources/getzep__graphiti/AGENTS.md)<br>[CLAUDE.md](../../../../sources/getzep__graphiti/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `mcp_server/.env.example`, `mcp_server/.python-version`, `mcp_server/main.py`.
2. Trace execution through entrypoints: `server/graph_service/main.py`, `mcp_server/main.py`.
3. Map agent/tool runtime through: `AGENTS.md`, `examples/wizard_of_oz/runner.py`, `examples/langgraph-agent/agent.ipynb`.
4. Inspect retrieval/memory/indexing through: `tests/evals/eval_e2e_graph_building.py`, `server/graph_service/__init__.py`, `server/graph_service/config.py`.
5. Verify behavior through test/eval files: `docker-compose.test.yml`, `OTEL_TRACING.md`, `tests/helpers_test.py`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Build Real Time Knowledge Graphs for AI Agents. 핵심 구조 신호는 Python, pyproject.toml, Dockerfile, docker-compose.yml, Makefile, README.md이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

mixed 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 needs deeper structural scan입니다.
