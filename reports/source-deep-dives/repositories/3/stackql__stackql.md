# stackql/stackql Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Query, provision and operate Cloud, SaaS, API and Model Context Protocol (MCP) resources through a unified SQL-based framework for humans and AI agents.

## 요약

- 조사 단위: `sources/stackql__stackql` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 1,074 files, 485 directories, depth score 132, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=test/robot/functional/mcp.robot, pkg/mcp_server/backend.go, pkg/mcp_server/client_format_test.go이고, 의존성 단서는 modelcontextprotocol, cobra, opentelemetry, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | stackql/stackql |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Go |
| Stars | 862 |
| Forks | 79 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/stackql__stackql](../../../../sources/stackql__stackql) |
| Existing report | [reports/global-trending/repositories/stackql__stackql.md](../../../global-trending/repositories/stackql__stackql.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 1074 / 485 |
| Max observed depth | 10 |
| Top directories | .github, cicd, docs, internal, mcp_client, pkg, stackql, test |
| Top extensions | .go: 312, .json: 221, .yaml: 112, .txt: 91, (none): 65, .md: 46, .csv: 39, .py: 39, .iql: 31, .sig: 27, .xml: 18, .robot: 16 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 42 |
| .github | ci surface | 1 |
| cicd | ci surface | 1 |
| internal | top-level component | 1 |
| mcp_client | source boundary | 1 |
| pkg | top-level component | 1 |
| stackql | top-level component | 1 |
| test | validation surface | 1 |


## How It Runs

_No command surface extracted from root manifests._


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | modelcontextprotocol |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | none |
| developerSurface | cobra |
| observability | opentelemetry |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [test/robot/functional/mcp.robot](../../../../sources/stackql__stackql/test/robot/functional/mcp.robot) | mcp signal |
| mcp | [pkg/mcp_server/backend.go](../../../../sources/stackql__stackql/pkg/mcp_server/backend.go) | mcp signal |
| mcp | [pkg/mcp_server/client_format_test.go](../../../../sources/stackql__stackql/pkg/mcp_server/client_format_test.go) | mcp signal |
| mcp | [pkg/mcp_server/client.go](../../../../sources/stackql__stackql/pkg/mcp_server/client.go) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/stackql__stackql/AGENTS.md) | agentRuntime signal |
| agentRuntime | [pkg/mcp_server/tools_test.go](../../../../sources/stackql__stackql/pkg/mcp_server/tools_test.go) | agentRuntime signal |
| agentRuntime | [internal/stackql/internal_data_transfer/internaldto/executor_output.go](../../../../sources/stackql__stackql/internal/stackql/internal_data_transfer/internaldto/executor_output.go) | agentRuntime signal |
| agentRuntime | [docs/case-studies/sandbox-01.md](../../../../sources/stackql__stackql/docs/case-studies/sandbox-01.md) | agentRuntime signal |
| entrypoints | [server.json](../../../../sources/stackql__stackql/server.json) | entrypoints signal |
| entrypoints | [test/deprecated/python/main.py](../../../../sources/stackql__stackql/test/deprecated/python/main.py) | entrypoints signal |
| entrypoints | [stackql/main.go](../../../../sources/stackql__stackql/stackql/main.go) | entrypoints signal |
| entrypoints | [pkg/mcp_server/server.go](../../../../sources/stackql__stackql/pkg/mcp_server/server.go) | entrypoints signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 6 | [server.json](../../../../sources/stackql__stackql/server.json)<br>[test/deprecated/python/main.py](../../../../sources/stackql__stackql/test/deprecated/python/main.py)<br>[stackql/main.go](../../../../sources/stackql__stackql/stackql/main.go)<br>[pkg/mcp_server/server.go](../../../../sources/stackql__stackql/pkg/mcp_server/server.go)<br>[mcp_client/cmd/main.go](../../../../sources/stackql__stackql/mcp_client/cmd/main.go)<br>[internal/stackql/psqlwire/server.go](../../../../sources/stackql__stackql/internal/stackql/psqlwire/server.go) |
| agentRuntime | 5 | [AGENTS.md](../../../../sources/stackql__stackql/AGENTS.md)<br>[pkg/mcp_server/tools_test.go](../../../../sources/stackql__stackql/pkg/mcp_server/tools_test.go)<br>[internal/stackql/internal_data_transfer/internaldto/executor_output.go](../../../../sources/stackql__stackql/internal/stackql/internal_data_transfer/internaldto/executor_output.go)<br>[docs/case-studies/sandbox-01.md](../../../../sources/stackql__stackql/docs/case-studies/sandbox-01.md)<br>[cicd/scripts/context.sh](../../../../sources/stackql__stackql/cicd/scripts/context.sh) |
| mcp | 29 | [test/robot/functional/mcp.robot](../../../../sources/stackql__stackql/test/robot/functional/mcp.robot)<br>[pkg/mcp_server/backend.go](../../../../sources/stackql__stackql/pkg/mcp_server/backend.go)<br>[pkg/mcp_server/client_format_test.go](../../../../sources/stackql__stackql/pkg/mcp_server/client_format_test.go)<br>[pkg/mcp_server/client.go](../../../../sources/stackql__stackql/pkg/mcp_server/client.go)<br>[pkg/mcp_server/config_legacy_test.go](../../../../sources/stackql__stackql/pkg/mcp_server/config_legacy_test.go)<br>[pkg/mcp_server/config.go](../../../../sources/stackql__stackql/pkg/mcp_server/config.go)<br>[pkg/mcp_server/example_backend.go](../../../../sources/stackql__stackql/pkg/mcp_server/example_backend.go)<br>[pkg/mcp_server/gate.go](../../../../sources/stackql__stackql/pkg/mcp_server/gate.go) |
| retrieval | 3 | [internal/stackql/primitivegraph/graph_holder.go](../../../../sources/stackql__stackql/internal/stackql/primitivegraph/graph_holder.go)<br>[internal/stackql/primitivegraph/graph.go](../../../../sources/stackql__stackql/internal/stackql/primitivegraph/graph.go)<br>[internal/stackql/primitivebuilder/dataflow_graph.go](../../../../sources/stackql__stackql/internal/stackql/primitivebuilder/dataflow_graph.go) |
| spec | 3 | [docs/high-level-design.md](../../../../sources/stackql__stackql/docs/high-level-design.md)<br>[docs/code-design/ast-analysis.md](../../../../sources/stackql__stackql/docs/code-design/ast-analysis.md)<br>[cicd/requirements.txt](../../../../sources/stackql__stackql/cicd/requirements.txt) |
| eval | 693 | [test/poetry.lock](../../../../sources/stackql__stackql/test/poetry.lock)<br>[test/poetry.toml](../../../../sources/stackql__stackql/test/poetry.toml)<br>[test/pyproject.toml](../../../../sources/stackql__stackql/test/pyproject.toml)<br>[test/README.md](../../../../sources/stackql__stackql/test/README.md)<br>[test/tmp/.gitignore](../../../../sources/stackql__stackql/test/tmp/.gitignore)<br>[test/tls/scratchpad/.gitignore](../../../../sources/stackql__stackql/test/tls/scratchpad/.gitignore)<br>[test/test-generators/live-integration/live-integration.json](../../../../sources/stackql__stackql/test/test-generators/live-integration/live-integration.json)<br>[test/test-generators/always/locally-executable.json](../../../../sources/stackql__stackql/test/test-generators/always/locally-executable.json) |
| security | 18 | [SECURITY.md](../../../../sources/stackql__stackql/SECURITY.md)<br>[test/registry-sandbox/.gitignore](../../../../sources/stackql__stackql/test/registry-sandbox/.gitignore)<br>[test/registry-sandbox/src/.gitignore](../../../../sources/stackql__stackql/test/registry-sandbox/src/.gitignore)<br>[test/registry/src/stackql_auth_testing/v0.1.0/provider.yaml](../../../../sources/stackql__stackql/test/registry/src/stackql_auth_testing/v0.1.0/provider.yaml)<br>[test/registry/src/stackql_auth_testing/v0.1.0/services/collectors.yaml](../../../../sources/stackql__stackql/test/registry/src/stackql_auth_testing/v0.1.0/services/collectors.yaml)<br>[test/registry/src/stackql_auth_testing/v0.1.0/services/provisioning.yaml](../../../../sources/stackql__stackql/test/registry/src/stackql_auth_testing/v0.1.0/services/provisioning.yaml)<br>[test/python/stackql_test_tooling/flask/static_auth/app.py](../../../../sources/stackql__stackql/test/python/stackql_test_tooling/flask/static_auth/app.py)<br>[test/python/stackql_test_tooling/flask/static_auth/expectations.json](../../../../sources/stackql__stackql/test/python/stackql_test_tooling/flask/static_auth/expectations.json) |
| ci | 7 | [.github/workflows/build-expt.yaml](../../../../sources/stackql__stackql/.github/workflows/build-expt.yaml)<br>[.github/workflows/build.yml](../../../../sources/stackql__stackql/.github/workflows/build.yml)<br>[.github/workflows/claude.yml](../../../../sources/stackql__stackql/.github/workflows/claude.yml)<br>[.github/workflows/contribute.yaml](../../../../sources/stackql__stackql/.github/workflows/contribute.yaml)<br>[.github/workflows/goreleaser.yml](../../../../sources/stackql__stackql/.github/workflows/goreleaser.yml)<br>[.github/workflows/lint.yml](../../../../sources/stackql__stackql/.github/workflows/lint.yml)<br>[.github/workflows/scenario.yaml](../../../../sources/stackql__stackql/.github/workflows/scenario.yaml) |
| container | 15 | [docker-compose-credentials.yml](../../../../sources/stackql__stackql/docker-compose-credentials.yml)<br>[docker-compose-externals.yml](../../../../sources/stackql__stackql/docker-compose-externals.yml)<br>[docker-compose-live.yml](../../../../sources/stackql__stackql/docker-compose-live.yml)<br>[docker-compose-persist-postgres.yml](../../../../sources/stackql__stackql/docker-compose-persist-postgres.yml)<br>[docker-compose-testing.yml](../../../../sources/stackql__stackql/docker-compose-testing.yml)<br>[docker-compose.yml](../../../../sources/stackql__stackql/docker-compose.yml)<br>[Dockerfile](../../../../sources/stackql__stackql/Dockerfile)<br>[test/registry/src/k8s/v0.1.0/provider.yaml](../../../../sources/stackql__stackql/test/registry/src/k8s/v0.1.0/provider.yaml) |
| instruction | 2 | [AGENTS.md](../../../../sources/stackql__stackql/AGENTS.md)<br>[CLAUDE.md](../../../../sources/stackql__stackql/CLAUDE.md) |
| docs | 60 | [README.md](../../../../sources/stackql__stackql/README.md)<br>[test/README.md](../../../../sources/stackql__stackql/test/README.md)<br>[test/tcp/reverse-proxy/nginx/README.md](../../../../sources/stackql__stackql/test/tcp/reverse-proxy/nginx/README.md)<br>[test/server/mtls/README.md](../../../../sources/stackql__stackql/test/server/mtls/README.md)<br>[test/robot/README.md](../../../../sources/stackql__stackql/test/robot/README.md)<br>[test/python/stackql_test_tooling/README.md](../../../../sources/stackql__stackql/test/python/stackql_test_tooling/README.md)<br>[test/python/stackql_test_tooling/flask/README.md](../../../../sources/stackql__stackql/test/python/stackql_test_tooling/flask/README.md)<br>[pkg/mcp_server/README.md](../../../../sources/stackql__stackql/pkg/mcp_server/README.md) |
| config | 4 | [go.mod](../../../../sources/stackql__stackql/go.mod)<br>[test/poetry.lock](../../../../sources/stackql__stackql/test/poetry.lock)<br>[test/pyproject.toml](../../../../sources/stackql__stackql/test/pyproject.toml)<br>[cicd/requirements.txt](../../../../sources/stackql__stackql/cicd/requirements.txt) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 693 | [test/poetry.lock](../../../../sources/stackql__stackql/test/poetry.lock)<br>[test/poetry.toml](../../../../sources/stackql__stackql/test/poetry.toml)<br>[test/pyproject.toml](../../../../sources/stackql__stackql/test/pyproject.toml)<br>[test/README.md](../../../../sources/stackql__stackql/test/README.md)<br>[test/tmp/.gitignore](../../../../sources/stackql__stackql/test/tmp/.gitignore)<br>[test/tls/scratchpad/.gitignore](../../../../sources/stackql__stackql/test/tls/scratchpad/.gitignore) |
| CI workflows | 7 | [.github/workflows/build-expt.yaml](../../../../sources/stackql__stackql/.github/workflows/build-expt.yaml)<br>[.github/workflows/build.yml](../../../../sources/stackql__stackql/.github/workflows/build.yml)<br>[.github/workflows/claude.yml](../../../../sources/stackql__stackql/.github/workflows/claude.yml)<br>[.github/workflows/contribute.yaml](../../../../sources/stackql__stackql/.github/workflows/contribute.yaml)<br>[.github/workflows/goreleaser.yml](../../../../sources/stackql__stackql/.github/workflows/goreleaser.yml)<br>[.github/workflows/lint.yml](../../../../sources/stackql__stackql/.github/workflows/lint.yml) |
| Containers / deploy | 15 | [docker-compose-credentials.yml](../../../../sources/stackql__stackql/docker-compose-credentials.yml)<br>[docker-compose-externals.yml](../../../../sources/stackql__stackql/docker-compose-externals.yml)<br>[docker-compose-live.yml](../../../../sources/stackql__stackql/docker-compose-live.yml)<br>[docker-compose-persist-postgres.yml](../../../../sources/stackql__stackql/docker-compose-persist-postgres.yml)<br>[docker-compose-testing.yml](../../../../sources/stackql__stackql/docker-compose-testing.yml)<br>[docker-compose.yml](../../../../sources/stackql__stackql/docker-compose.yml) |
| Security / policy | 18 | [SECURITY.md](../../../../sources/stackql__stackql/SECURITY.md)<br>[test/registry-sandbox/.gitignore](../../../../sources/stackql__stackql/test/registry-sandbox/.gitignore)<br>[test/registry-sandbox/src/.gitignore](../../../../sources/stackql__stackql/test/registry-sandbox/src/.gitignore)<br>[test/registry/src/stackql_auth_testing/v0.1.0/provider.yaml](../../../../sources/stackql__stackql/test/registry/src/stackql_auth_testing/v0.1.0/provider.yaml)<br>[test/registry/src/stackql_auth_testing/v0.1.0/services/collectors.yaml](../../../../sources/stackql__stackql/test/registry/src/stackql_auth_testing/v0.1.0/services/collectors.yaml)<br>[test/registry/src/stackql_auth_testing/v0.1.0/services/provisioning.yaml](../../../../sources/stackql__stackql/test/registry/src/stackql_auth_testing/v0.1.0/services/provisioning.yaml) |
| Agent instructions | 2 | [AGENTS.md](../../../../sources/stackql__stackql/AGENTS.md)<br>[CLAUDE.md](../../../../sources/stackql__stackql/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `test/robot/functional/mcp.robot`, `pkg/mcp_server/backend.go`, `pkg/mcp_server/client_format_test.go`.
2. Trace execution through entrypoints: `server.json`, `test/deprecated/python/main.py`, `stackql/main.go`.
3. Map agent/tool runtime through: `AGENTS.md`, `pkg/mcp_server/tools_test.go`, `internal/stackql/internal_data_transfer/internaldto/executor_output.go`.
4. Inspect retrieval/memory/indexing through: `internal/stackql/primitivegraph/graph_holder.go`, `internal/stackql/primitivegraph/graph.go`, `internal/stackql/primitivebuilder/dataflow_graph.go`.
5. Verify behavior through test/eval files: `test/poetry.lock`, `test/poetry.toml`, `test/pyproject.toml`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Query, provision and operate Cloud, SaaS, API and Model Context Protocol MCP resources through a unified SQL based frame. 핵심 구조 신호는 Go, go.mod, Dockerfile, docker-compose.yml, README.md, AGENTS.md이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
