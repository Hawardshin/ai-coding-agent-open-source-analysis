# stacklok/toolhive Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

ToolHive is an enterprise-grade platform for running and managing Model Context Protocol (MCP) servers.

## 요약

- 조사 단위: `sources/stacklok__toolhive` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 2,292 files, 389 directories, depth score 132, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

AI 인프라/서빙 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 entrypoints=pkg/vmcp/server/server.go, pkg/oauthproto/oauthtest/server.go, pkg/mcp/server/server.go이고, 의존성 단서는 mcp, modelcontextprotocol, opentelemetry, prometheus, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | stacklok/toolhive |
| Topic | AI Infrastructure and Serving / AI 인프라/서빙 |
| Region | global |
| Language | Go |
| Stars | 1889 |
| Forks | 229 |
| License | none |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/stacklok__toolhive](../../../../sources/stacklok__toolhive) |
| Existing report | [reports/global-trending/repositories/stacklok__toolhive.md](../../../global-trending/repositories/stacklok__toolhive.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 2292 / 389 |
| Max observed depth | 9 |
| Top directories | .claude, .github, cmd, config, containers, deploy, docs, examples, hack, pkg, skills, test |
| Top extensions | .go: 1702, .yaml: 273, .md: 228, .yml: 33, .json: 13, (none): 10, .svg: 9, .tpl: 5, .sh: 4, .gotmpl: 3, .tmpl: 3, .sql: 2 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 39 |
| cmd/thv-operator | cmd workspace | 8 |
| examples/operator | examples workspace | 5 |
| cmd/thv | cmd workspace | 2 |
| .github | ci surface | 1 |
| cmd | source boundary | 1 |
| cmd/help | cmd workspace | 1 |
| cmd/thv-proxyrunner | cmd workspace | 1 |
| cmd/vmcp | cmd workspace | 1 |
| config | top-level component | 1 |
| containers | top-level component | 1 |
| deploy | deployment surface | 1 |
| examples | top-level component | 1 |
| examples/otel | examples workspace | 1 |
| hack | top-level component | 1 |
| pkg | top-level component | 1 |
| skills | top-level component | 1 |
| test | validation surface | 1 |


## How It Runs

_No command surface extracted from root manifests._


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | mcp, modelcontextprotocol |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | none |
| developerSurface | none |
| observability | opentelemetry, prometheus |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| entrypoints | [pkg/vmcp/server/server.go](../../../../sources/stacklok__toolhive/pkg/vmcp/server/server.go) | entrypoints signal |
| entrypoints | [pkg/oauthproto/oauthtest/server.go](../../../../sources/stacklok__toolhive/pkg/oauthproto/oauthtest/server.go) | entrypoints signal |
| entrypoints | [pkg/mcp/server/server.go](../../../../sources/stacklok__toolhive/pkg/mcp/server/server.go) | entrypoints signal |
| entrypoints | [pkg/authserver/server.go](../../../../sources/stacklok__toolhive/pkg/authserver/server.go) | entrypoints signal |
| container | [pkg/vmcp/k8s/backend_reconciler_integration_test.go](../../../../sources/stacklok__toolhive/pkg/vmcp/k8s/backend_reconciler_integration_test.go) | container signal |
| container | [pkg/vmcp/k8s/backend_reconciler_test.go](../../../../sources/stacklok__toolhive/pkg/vmcp/k8s/backend_reconciler_test.go) | container signal |
| container | [pkg/vmcp/k8s/backend_reconciler.go](../../../../sources/stacklok__toolhive/pkg/vmcp/k8s/backend_reconciler.go) | container signal |
| container | [pkg/vmcp/k8s/manager_test.go](../../../../sources/stacklok__toolhive/pkg/vmcp/k8s/manager_test.go) | container signal |
| config | [go.mod](../../../../sources/stacklok__toolhive/go.mod) | config signal |
| ci | [deploy/charts/operator-crds/ci/default-values.yaml](../../../../sources/stacklok__toolhive/deploy/charts/operator-crds/ci/default-values.yaml) | ci signal |
| ci | [deploy/charts/operator/ci/autoScalingEnabled-values.yaml](../../../../sources/stacklok__toolhive/deploy/charts/operator/ci/autoScalingEnabled-values.yaml) | ci signal |
| ci | [deploy/charts/operator/ci/default-values.yaml](../../../../sources/stacklok__toolhive/deploy/charts/operator/ci/default-values.yaml) | ci signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 11 | [pkg/vmcp/server/server.go](../../../../sources/stacklok__toolhive/pkg/vmcp/server/server.go)<br>[pkg/oauthproto/oauthtest/server.go](../../../../sources/stacklok__toolhive/pkg/oauthproto/oauthtest/server.go)<br>[pkg/mcp/server/server.go](../../../../sources/stacklok__toolhive/pkg/mcp/server/server.go)<br>[pkg/authserver/server.go](../../../../sources/stacklok__toolhive/pkg/authserver/server.go)<br>[pkg/api/server.go](../../../../sources/stacklok__toolhive/pkg/api/server.go)<br>[cmd/vmcp/main.go](../../../../sources/stacklok__toolhive/cmd/vmcp/main.go)<br>[cmd/thv-proxyrunner/main.go](../../../../sources/stacklok__toolhive/cmd/thv-proxyrunner/main.go)<br>[cmd/thv-operator/main.go](../../../../sources/stacklok__toolhive/cmd/thv-operator/main.go) |
| agentRuntime | 175 | [test/integration/authserver/runner_integration_test.go](../../../../sources/stacklok__toolhive/test/integration/authserver/runner_integration_test.go)<br>[skills/toolhive-cli-user/SKILL.md](../../../../sources/stacklok__toolhive/skills/toolhive-cli-user/SKILL.md)<br>[skills/toolhive-cli-user/references/COMMANDS.md](../../../../sources/stacklok__toolhive/skills/toolhive-cli-user/references/COMMANDS.md)<br>[skills/toolhive-cli-user/references/EXAMPLES.md](../../../../sources/stacklok__toolhive/skills/toolhive-cli-user/references/EXAMPLES.md)<br>[pkg/vmcp/server/workflow_converter_test.go](../../../../sources/stacklok__toolhive/pkg/vmcp/server/workflow_converter_test.go)<br>[pkg/vmcp/server/workflow_converter.go](../../../../sources/stacklok__toolhive/pkg/vmcp/server/workflow_converter.go)<br>[pkg/vmcp/internal/compositetools/workflow_converter_test.go](../../../../sources/stacklok__toolhive/pkg/vmcp/internal/compositetools/workflow_converter_test.go)<br>[pkg/vmcp/internal/compositetools/workflow_converter.go](../../../../sources/stacklok__toolhive/pkg/vmcp/internal/compositetools/workflow_converter.go) |
| mcp | 131 | [test/integration/vmcp/helpers/mcp_client.go](../../../../sources/stacklok__toolhive/test/integration/vmcp/helpers/mcp_client.go)<br>[test/e2e/fetch_mcp_server_test.go](../../../../sources/stacklok__toolhive/test/e2e/fetch_mcp_server_test.go)<br>[test/e2e/mcp_client_helpers.go](../../../../sources/stacklok__toolhive/test/e2e/mcp_client_helpers.go)<br>[test/e2e/osv_mcp_server_test.go](../../../../sources/stacklok__toolhive/test/e2e/osv_mcp_server_test.go)<br>[test/e2e/osv_streamable_http_mcp_server_test.go](../../../../sources/stacklok__toolhive/test/e2e/osv_streamable_http_mcp_server_test.go)<br>[test/e2e/remote_mcp_query_params_test.go](../../../../sources/stacklok__toolhive/test/e2e/remote_mcp_query_params_test.go)<br>[test/e2e/remote_mcp_server_test.go](../../../../sources/stacklok__toolhive/test/e2e/remote_mcp_server_test.go)<br>[test/e2e/stdio_proxy_over_streamable_http_mcp_server_test.go](../../../../sources/stacklok__toolhive/test/e2e/stdio_proxy_over_streamable_http_mcp_server_test.go) |
| retrieval | 12 | [pkg/vmcp/cli/embedding_manager_test.go](../../../../sources/stacklok__toolhive/pkg/vmcp/cli/embedding_manager_test.go)<br>[pkg/vmcp/cli/embedding_manager.go](../../../../sources/stacklok__toolhive/pkg/vmcp/cli/embedding_manager.go)<br>[pkg/authserver/storage/memory_test.go](../../../../sources/stacklok__toolhive/pkg/authserver/storage/memory_test.go)<br>[pkg/authserver/storage/memory.go](../../../../sources/stacklok__toolhive/pkg/authserver/storage/memory.go)<br>[examples/operator/embedding-servers/basic-embedding.yaml](../../../../sources/stacklok__toolhive/examples/operator/embedding-servers/basic-embedding.yaml)<br>[examples/operator/embedding-servers/embedding-advanced.yaml](../../../../sources/stacklok__toolhive/examples/operator/embedding-servers/embedding-advanced.yaml)<br>[examples/operator/embedding-servers/embedding-with-cache.yaml](../../../../sources/stacklok__toolhive/examples/operator/embedding-servers/embedding-with-cache.yaml)<br>[examples/operator/embedding-servers/README.md](../../../../sources/stacklok__toolhive/examples/operator/embedding-servers/README.md) |
| spec | 10 | [test/e2e/thv-operator/acceptance_tests/helpers.go](../../../../sources/stacklok__toolhive/test/e2e/thv-operator/acceptance_tests/helpers.go)<br>[test/e2e/thv-operator/acceptance_tests/ratelimit_test.go](../../../../sources/stacklok__toolhive/test/e2e/thv-operator/acceptance_tests/ratelimit_test.go)<br>[test/e2e/thv-operator/acceptance_tests/suite_test.go](../../../../sources/stacklok__toolhive/test/e2e/thv-operator/acceptance_tests/suite_test.go)<br>[pkg/transport/proxy/streamable/streamable_proxy_spec_test.go](../../../../sources/stacklok__toolhive/pkg/transport/proxy/streamable/streamable_proxy_spec_test.go)<br>[docs/arch/03-transport-architecture.md](../../../../sources/stacklok__toolhive/docs/arch/03-transport-architecture.md)<br>[docs/arch/09-operator-architecture.md](../../../../sources/stacklok__toolhive/docs/arch/09-operator-architecture.md)<br>[docs/arch/10-virtual-mcp-architecture.md](../../../../sources/stacklok__toolhive/docs/arch/10-virtual-mcp-architecture.md)<br>[cmd/thv-operator/DESIGN.md](../../../../sources/stacklok__toolhive/cmd/thv-operator/DESIGN.md) |
| eval | 1030 | [test/testkit/sse_server.go](../../../../sources/stacklok__toolhive/test/testkit/sse_server.go)<br>[test/testkit/streamable_server.go](../../../../sources/stacklok__toolhive/test/testkit/streamable_server.go)<br>[test/testkit/testkit_test.go](../../../../sources/stacklok__toolhive/test/testkit/testkit_test.go)<br>[test/testkit/testkit.go](../../../../sources/stacklok__toolhive/test/testkit/testkit.go)<br>[test/integration/vmcp/passthrough_headers_test.go](../../../../sources/stacklok__toolhive/test/integration/vmcp/passthrough_headers_test.go)<br>[test/integration/vmcp/vmcp_integration_test.go](../../../../sources/stacklok__toolhive/test/integration/vmcp/vmcp_integration_test.go)<br>[test/integration/vmcp/vmcp_typing_integration_test.go](../../../../sources/stacklok__toolhive/test/integration/vmcp/vmcp_typing_integration_test.go)<br>[test/integration/vmcp/helpers/backend.go](../../../../sources/stacklok__toolhive/test/integration/vmcp/helpers/backend.go) |
| security | 228 | [SECURITY.md](../../../../sources/stacklok__toolhive/SECURITY.md)<br>[test/e2e/audit_middleware_e2e_test.go](../../../../sources/stacklok__toolhive/test/e2e/audit_middleware_e2e_test.go)<br>[test/e2e/cimd_auth_helpers_test.go](../../../../sources/stacklok__toolhive/test/e2e/cimd_auth_helpers_test.go)<br>[test/e2e/cimd_auth_test.go](../../../../sources/stacklok__toolhive/test/e2e/cimd_auth_test.go)<br>[test/e2e/proxy_oauth_test.go](../../../../sources/stacklok__toolhive/test/e2e/proxy_oauth_test.go)<br>[test/e2e/thv-operator/virtualmcp/virtualmcp_auth_discovery_test.go](../../../../sources/stacklok__toolhive/test/e2e/thv-operator/virtualmcp/virtualmcp_auth_discovery_test.go)<br>[test/e2e/thv-operator/virtualmcp/virtualmcp_external_auth_test.go](../../../../sources/stacklok__toolhive/test/e2e/thv-operator/virtualmcp/virtualmcp_external_auth_test.go)<br>[test/e2e/chainsaw/operator/single-tenancy/test-scenarios/vmcp/assert-oidc-security.yaml](../../../../sources/stacklok__toolhive/test/e2e/chainsaw/operator/single-tenancy/test-scenarios/vmcp/assert-oidc-security.yaml) |
| ci | 37 | [deploy/charts/operator-crds/ci/default-values.yaml](../../../../sources/stacklok__toolhive/deploy/charts/operator-crds/ci/default-values.yaml)<br>[deploy/charts/operator/ci/autoScalingEnabled-values.yaml](../../../../sources/stacklok__toolhive/deploy/charts/operator/ci/autoScalingEnabled-values.yaml)<br>[deploy/charts/operator/ci/default-values.yaml](../../../../sources/stacklok__toolhive/deploy/charts/operator/ci/default-values.yaml)<br>[deploy/charts/operator/ci/extraEnvVars-values.yaml](../../../../sources/stacklok__toolhive/deploy/charts/operator/ci/extraEnvVars-values.yaml)<br>[deploy/charts/operator/ci/extraPodAndContainerSecurityContext-values.yaml](../../../../sources/stacklok__toolhive/deploy/charts/operator/ci/extraPodAndContainerSecurityContext-values.yaml)<br>[deploy/charts/operator/ci/extraPodAnnotationsAndLabels-values.yaml](../../../../sources/stacklok__toolhive/deploy/charts/operator/ci/extraPodAnnotationsAndLabels-values.yaml)<br>[deploy/charts/operator/ci/extraVolumes-values.yaml](../../../../sources/stacklok__toolhive/deploy/charts/operator/ci/extraVolumes-values.yaml)<br>[.github/workflows/api-compat-noop.yml](../../../../sources/stacklok__toolhive/.github/workflows/api-compat-noop.yml) |
| container | 107 | [pkg/vmcp/k8s/backend_reconciler_integration_test.go](../../../../sources/stacklok__toolhive/pkg/vmcp/k8s/backend_reconciler_integration_test.go)<br>[pkg/vmcp/k8s/backend_reconciler_test.go](../../../../sources/stacklok__toolhive/pkg/vmcp/k8s/backend_reconciler_test.go)<br>[pkg/vmcp/k8s/backend_reconciler.go](../../../../sources/stacklok__toolhive/pkg/vmcp/k8s/backend_reconciler.go)<br>[pkg/vmcp/k8s/manager_test.go](../../../../sources/stacklok__toolhive/pkg/vmcp/k8s/manager_test.go)<br>[pkg/vmcp/k8s/manager.go](../../../../sources/stacklok__toolhive/pkg/vmcp/k8s/manager.go)<br>[pkg/k8s/client_test.go](../../../../sources/stacklok__toolhive/pkg/k8s/client_test.go)<br>[pkg/k8s/client.go](../../../../sources/stacklok__toolhive/pkg/k8s/client.go)<br>[pkg/k8s/config_test.go](../../../../sources/stacklok__toolhive/pkg/k8s/config_test.go) |
| instruction | 1 | [CLAUDE.md](../../../../sources/stacklok__toolhive/CLAUDE.md) |
| docs | 199 | [README.md](../../../../sources/stacklok__toolhive/README.md)<br>[test/e2e/README.md](../../../../sources/stacklok__toolhive/test/e2e/README.md)<br>[test/e2e/thv-operator/virtualmcp/README.md](../../../../sources/stacklok__toolhive/test/e2e/thv-operator/virtualmcp/README.md)<br>[examples/otel/README.md](../../../../sources/stacklok__toolhive/examples/otel/README.md)<br>[examples/operator/embedding-servers/README.md](../../../../sources/stacklok__toolhive/examples/operator/embedding-servers/README.md)<br>[docs/authz.md](../../../../sources/stacklok__toolhive/docs/authz.md)<br>[docs/cli-best-practices.md](../../../../sources/stacklok__toolhive/docs/cli-best-practices.md)<br>[docs/error-handling.md](../../../../sources/stacklok__toolhive/docs/error-handling.md) |
| config | 1 | [go.mod](../../../../sources/stacklok__toolhive/go.mod) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 1030 | [test/testkit/sse_server.go](../../../../sources/stacklok__toolhive/test/testkit/sse_server.go)<br>[test/testkit/streamable_server.go](../../../../sources/stacklok__toolhive/test/testkit/streamable_server.go)<br>[test/testkit/testkit_test.go](../../../../sources/stacklok__toolhive/test/testkit/testkit_test.go)<br>[test/testkit/testkit.go](../../../../sources/stacklok__toolhive/test/testkit/testkit.go)<br>[test/integration/vmcp/passthrough_headers_test.go](../../../../sources/stacklok__toolhive/test/integration/vmcp/passthrough_headers_test.go)<br>[test/integration/vmcp/vmcp_integration_test.go](../../../../sources/stacklok__toolhive/test/integration/vmcp/vmcp_integration_test.go) |
| CI workflows | 37 | [deploy/charts/operator-crds/ci/default-values.yaml](../../../../sources/stacklok__toolhive/deploy/charts/operator-crds/ci/default-values.yaml)<br>[deploy/charts/operator/ci/autoScalingEnabled-values.yaml](../../../../sources/stacklok__toolhive/deploy/charts/operator/ci/autoScalingEnabled-values.yaml)<br>[deploy/charts/operator/ci/default-values.yaml](../../../../sources/stacklok__toolhive/deploy/charts/operator/ci/default-values.yaml)<br>[deploy/charts/operator/ci/extraEnvVars-values.yaml](../../../../sources/stacklok__toolhive/deploy/charts/operator/ci/extraEnvVars-values.yaml)<br>[deploy/charts/operator/ci/extraPodAndContainerSecurityContext-values.yaml](../../../../sources/stacklok__toolhive/deploy/charts/operator/ci/extraPodAndContainerSecurityContext-values.yaml)<br>[deploy/charts/operator/ci/extraPodAnnotationsAndLabels-values.yaml](../../../../sources/stacklok__toolhive/deploy/charts/operator/ci/extraPodAnnotationsAndLabels-values.yaml) |
| Containers / deploy | 107 | [pkg/vmcp/k8s/backend_reconciler_integration_test.go](../../../../sources/stacklok__toolhive/pkg/vmcp/k8s/backend_reconciler_integration_test.go)<br>[pkg/vmcp/k8s/backend_reconciler_test.go](../../../../sources/stacklok__toolhive/pkg/vmcp/k8s/backend_reconciler_test.go)<br>[pkg/vmcp/k8s/backend_reconciler.go](../../../../sources/stacklok__toolhive/pkg/vmcp/k8s/backend_reconciler.go)<br>[pkg/vmcp/k8s/manager_test.go](../../../../sources/stacklok__toolhive/pkg/vmcp/k8s/manager_test.go)<br>[pkg/vmcp/k8s/manager.go](../../../../sources/stacklok__toolhive/pkg/vmcp/k8s/manager.go)<br>[pkg/k8s/client_test.go](../../../../sources/stacklok__toolhive/pkg/k8s/client_test.go) |
| Security / policy | 228 | [SECURITY.md](../../../../sources/stacklok__toolhive/SECURITY.md)<br>[test/e2e/audit_middleware_e2e_test.go](../../../../sources/stacklok__toolhive/test/e2e/audit_middleware_e2e_test.go)<br>[test/e2e/cimd_auth_helpers_test.go](../../../../sources/stacklok__toolhive/test/e2e/cimd_auth_helpers_test.go)<br>[test/e2e/cimd_auth_test.go](../../../../sources/stacklok__toolhive/test/e2e/cimd_auth_test.go)<br>[test/e2e/proxy_oauth_test.go](../../../../sources/stacklok__toolhive/test/e2e/proxy_oauth_test.go)<br>[test/e2e/thv-operator/virtualmcp/virtualmcp_auth_discovery_test.go](../../../../sources/stacklok__toolhive/test/e2e/thv-operator/virtualmcp/virtualmcp_auth_discovery_test.go) |
| Agent instructions | 1 | [CLAUDE.md](../../../../sources/stacklok__toolhive/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `pkg/vmcp/server/server.go`, `pkg/oauthproto/oauthtest/server.go`, `pkg/mcp/server/server.go`.
2. Trace execution through entrypoints: `pkg/vmcp/server/server.go`, `pkg/oauthproto/oauthtest/server.go`, `pkg/mcp/server/server.go`.
3. Map agent/tool runtime through: `test/integration/authserver/runner_integration_test.go`, `skills/toolhive-cli-user/SKILL.md`, `skills/toolhive-cli-user/references/COMMANDS.md`.
4. Inspect retrieval/memory/indexing through: `pkg/vmcp/cli/embedding_manager_test.go`, `pkg/vmcp/cli/embedding_manager.go`, `pkg/authserver/storage/memory_test.go`.
5. Verify behavior through test/eval files: `test/testkit/sse_server.go`, `test/testkit/streamable_server.go`, `test/testkit/testkit_test.go`.

## Existing Repository Insight

AI 인프라/서빙 관점에서 ToolHive is an enterprise grade platform for running and managing Model Context Protocol MCP servers.. 핵심 구조 신호는 Go, go.mod, README.md, CLAUDE.md, LICENSE, modelcontextprotocol이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 AI 인프라/서빙 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
