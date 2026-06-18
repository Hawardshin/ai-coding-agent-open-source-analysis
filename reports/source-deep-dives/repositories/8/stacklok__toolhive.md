# stacklok/toolhive 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

ToolHive is an enterprise-grade platform for running and managing Model Context Protocol (MCP) servers.

## 요약

- 조사 단위: `sources/stacklok__toolhive` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 2,292 files, 389 directories, depth score 126, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

AI 인프라/서빙 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 entrypoints=pkg/vmcp/server/server.go, pkg/oauthproto/oauthtest/server.go, pkg/mcp/server/server.go이고, 의존성 단서는 mcp, modelcontextprotocol, opentelemetry, prometheus, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | stacklok/toolhive |
| 주제 | AI 인프라/서빙 / AI 인프라/서빙 |
| Region | global |
| Language | Go |
| Stars | 1889 |
| Forks | 229 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/stacklok__toolhive](../../../../sources/stacklok__toolhive) |
| 기존 보고서 | [reports/global-trending/repositories/stacklok__toolhive.md](../../../global-trending/repositories/stacklok__toolhive.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 2292 / 389 |
| 관측 최대 깊이 | 9 |
| 상위 디렉터리 | .claude, .github, cmd, config, containers, deploy, docs, examples, hack, pkg, skills, test |
| 상위 확장자 | .go: 1702, .yaml: 273, .md: 228, .yml: 33, .json: 13, (none): 10, .svg: 9, .tpl: 5, .sh: 4, .gotmpl: 3, .tmpl: 3, .sql: 2 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
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


## 실행 방식

_root manifest에서 추출된 command surface가 없습니다._


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | mcp, modelcontextprotocol |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | 없음 |
| developerSurface | 없음 |
| observability | opentelemetry, prometheus |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
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


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 1030 | [test/testkit/sse_server.go](../../../../sources/stacklok__toolhive/test/testkit/sse_server.go)<br>[test/testkit/streamable_server.go](../../../../sources/stacklok__toolhive/test/testkit/streamable_server.go)<br>[test/testkit/testkit_test.go](../../../../sources/stacklok__toolhive/test/testkit/testkit_test.go)<br>[test/testkit/testkit.go](../../../../sources/stacklok__toolhive/test/testkit/testkit.go)<br>[test/integration/vmcp/passthrough_headers_test.go](../../../../sources/stacklok__toolhive/test/integration/vmcp/passthrough_headers_test.go)<br>[test/integration/vmcp/vmcp_integration_test.go](../../../../sources/stacklok__toolhive/test/integration/vmcp/vmcp_integration_test.go) |
| CI workflow | 37 | [deploy/charts/operator-crds/ci/default-values.yaml](../../../../sources/stacklok__toolhive/deploy/charts/operator-crds/ci/default-values.yaml)<br>[deploy/charts/operator/ci/autoScalingEnabled-values.yaml](../../../../sources/stacklok__toolhive/deploy/charts/operator/ci/autoScalingEnabled-values.yaml)<br>[deploy/charts/operator/ci/default-values.yaml](../../../../sources/stacklok__toolhive/deploy/charts/operator/ci/default-values.yaml)<br>[deploy/charts/operator/ci/extraEnvVars-values.yaml](../../../../sources/stacklok__toolhive/deploy/charts/operator/ci/extraEnvVars-values.yaml)<br>[deploy/charts/operator/ci/extraPodAndContainerSecurityContext-values.yaml](../../../../sources/stacklok__toolhive/deploy/charts/operator/ci/extraPodAndContainerSecurityContext-values.yaml)<br>[deploy/charts/operator/ci/extraPodAnnotationsAndLabels-values.yaml](../../../../sources/stacklok__toolhive/deploy/charts/operator/ci/extraPodAnnotationsAndLabels-values.yaml) |
| 컨테이너/배포 | 107 | [pkg/vmcp/k8s/backend_reconciler_integration_test.go](../../../../sources/stacklok__toolhive/pkg/vmcp/k8s/backend_reconciler_integration_test.go)<br>[pkg/vmcp/k8s/backend_reconciler_test.go](../../../../sources/stacklok__toolhive/pkg/vmcp/k8s/backend_reconciler_test.go)<br>[pkg/vmcp/k8s/backend_reconciler.go](../../../../sources/stacklok__toolhive/pkg/vmcp/k8s/backend_reconciler.go)<br>[pkg/vmcp/k8s/manager_test.go](../../../../sources/stacklok__toolhive/pkg/vmcp/k8s/manager_test.go)<br>[pkg/vmcp/k8s/manager.go](../../../../sources/stacklok__toolhive/pkg/vmcp/k8s/manager.go)<br>[pkg/k8s/client_test.go](../../../../sources/stacklok__toolhive/pkg/k8s/client_test.go) |
| 보안/정책 | 228 | [SECURITY.md](../../../../sources/stacklok__toolhive/SECURITY.md)<br>[test/e2e/audit_middleware_e2e_test.go](../../../../sources/stacklok__toolhive/test/e2e/audit_middleware_e2e_test.go)<br>[test/e2e/cimd_auth_helpers_test.go](../../../../sources/stacklok__toolhive/test/e2e/cimd_auth_helpers_test.go)<br>[test/e2e/cimd_auth_test.go](../../../../sources/stacklok__toolhive/test/e2e/cimd_auth_test.go)<br>[test/e2e/proxy_oauth_test.go](../../../../sources/stacklok__toolhive/test/e2e/proxy_oauth_test.go)<br>[test/e2e/thv-operator/virtualmcp/virtualmcp_auth_discovery_test.go](../../../../sources/stacklok__toolhive/test/e2e/thv-operator/virtualmcp/virtualmcp_auth_discovery_test.go) |
| 에이전트 지시문 | 1 | [CLAUDE.md](../../../../sources/stacklok__toolhive/CLAUDE.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `pkg/vmcp/server/server.go`, `pkg/oauthproto/oauthtest/server.go`, `pkg/mcp/server/server.go`.
2. entrypoint를 따라 실행 흐름 확인: `pkg/vmcp/server/server.go`, `pkg/oauthproto/oauthtest/server.go`, `pkg/mcp/server/server.go`.
3. agent/tool runtime 매핑: `test/integration/authserver/runner_integration_test.go`, `skills/toolhive-cli-user/SKILL.md`, `skills/toolhive-cli-user/references/COMMANDS.md`.
4. retrieval/memory/indexing 확인: `pkg/vmcp/cli/embedding_manager_test.go`, `pkg/vmcp/cli/embedding_manager.go`, `pkg/authserver/storage/memory_test.go`.
5. test/eval 파일로 동작 검증: `test/testkit/sse_server.go`, `test/testkit/streamable_server.go`, `test/testkit/testkit_test.go`.

## 기존 레포 인사이트

AI 인프라/서빙 관점에서 ToolHive is an enterprise grade platform for running and managing Model Context Protocol MCP servers.. 핵심 구조 신호는 Go, go.mod, README.md, CLAUDE.md, LICENSE, modelcontextprotocol이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 AI 인프라/서빙 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
