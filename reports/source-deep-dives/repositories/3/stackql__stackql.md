# stackql/stackql 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

Query, provision and operate Cloud, SaaS, API and Model Context Protocol (MCP) resources through a unified SQL-based framework for humans and AI agents.

## 요약

- 조사 단위: `sources/stackql__stackql` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 1,074 files, 485 directories, depth score 126, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=test/robot/functional/mcp.robot, pkg/mcp_server/backend.go, pkg/mcp_server/client_format_test.go이고, 의존성 단서는 modelcontextprotocol, cobra, opentelemetry, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | stackql/stackql |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Go |
| Stars | 862 |
| Forks | 79 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/stackql__stackql](../../../../sources/stackql__stackql) |
| 기존 보고서 | [reports/global-trending/repositories/stackql__stackql.md](../../../global-trending/repositories/stackql__stackql.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 1074 / 485 |
| 관측 최대 깊이 | 10 |
| 상위 디렉터리 | .github, cicd, docs, internal, mcp_client, pkg, stackql, test |
| 상위 확장자 | .go: 312, .json: 221, .yaml: 112, .txt: 91, (none): 65, .md: 46, .csv: 39, .py: 39, .iql: 31, .sig: 27, .xml: 18, .robot: 16 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 42 |
| .github | ci surface | 1 |
| cicd | ci surface | 1 |
| internal | top-level component | 1 |
| mcp_client | source boundary | 1 |
| pkg | top-level component | 1 |
| stackql | top-level component | 1 |
| test | validation surface | 1 |


## 실행 방식

_root manifest에서 추출된 command surface가 없습니다._


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | modelcontextprotocol |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | 없음 |
| developerSurface | cobra |
| observability | opentelemetry |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
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


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 693 | [test/poetry.lock](../../../../sources/stackql__stackql/test/poetry.lock)<br>[test/poetry.toml](../../../../sources/stackql__stackql/test/poetry.toml)<br>[test/pyproject.toml](../../../../sources/stackql__stackql/test/pyproject.toml)<br>[test/README.md](../../../../sources/stackql__stackql/test/README.md)<br>[test/tmp/.gitignore](../../../../sources/stackql__stackql/test/tmp/.gitignore)<br>[test/tls/scratchpad/.gitignore](../../../../sources/stackql__stackql/test/tls/scratchpad/.gitignore) |
| CI workflow | 7 | [.github/workflows/build-expt.yaml](../../../../sources/stackql__stackql/.github/workflows/build-expt.yaml)<br>[.github/workflows/build.yml](../../../../sources/stackql__stackql/.github/workflows/build.yml)<br>[.github/workflows/claude.yml](../../../../sources/stackql__stackql/.github/workflows/claude.yml)<br>[.github/workflows/contribute.yaml](../../../../sources/stackql__stackql/.github/workflows/contribute.yaml)<br>[.github/workflows/goreleaser.yml](../../../../sources/stackql__stackql/.github/workflows/goreleaser.yml)<br>[.github/workflows/lint.yml](../../../../sources/stackql__stackql/.github/workflows/lint.yml) |
| 컨테이너/배포 | 15 | [docker-compose-credentials.yml](../../../../sources/stackql__stackql/docker-compose-credentials.yml)<br>[docker-compose-externals.yml](../../../../sources/stackql__stackql/docker-compose-externals.yml)<br>[docker-compose-live.yml](../../../../sources/stackql__stackql/docker-compose-live.yml)<br>[docker-compose-persist-postgres.yml](../../../../sources/stackql__stackql/docker-compose-persist-postgres.yml)<br>[docker-compose-testing.yml](../../../../sources/stackql__stackql/docker-compose-testing.yml)<br>[docker-compose.yml](../../../../sources/stackql__stackql/docker-compose.yml) |
| 보안/정책 | 18 | [SECURITY.md](../../../../sources/stackql__stackql/SECURITY.md)<br>[test/registry-sandbox/.gitignore](../../../../sources/stackql__stackql/test/registry-sandbox/.gitignore)<br>[test/registry-sandbox/src/.gitignore](../../../../sources/stackql__stackql/test/registry-sandbox/src/.gitignore)<br>[test/registry/src/stackql_auth_testing/v0.1.0/provider.yaml](../../../../sources/stackql__stackql/test/registry/src/stackql_auth_testing/v0.1.0/provider.yaml)<br>[test/registry/src/stackql_auth_testing/v0.1.0/services/collectors.yaml](../../../../sources/stackql__stackql/test/registry/src/stackql_auth_testing/v0.1.0/services/collectors.yaml)<br>[test/registry/src/stackql_auth_testing/v0.1.0/services/provisioning.yaml](../../../../sources/stackql__stackql/test/registry/src/stackql_auth_testing/v0.1.0/services/provisioning.yaml) |
| 에이전트 지시문 | 2 | [AGENTS.md](../../../../sources/stackql__stackql/AGENTS.md)<br>[CLAUDE.md](../../../../sources/stackql__stackql/CLAUDE.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `test/robot/functional/mcp.robot`, `pkg/mcp_server/backend.go`, `pkg/mcp_server/client_format_test.go`.
2. entrypoint를 따라 실행 흐름 확인: `server.json`, `test/deprecated/python/main.py`, `stackql/main.go`.
3. agent/tool runtime 매핑: `AGENTS.md`, `pkg/mcp_server/tools_test.go`, `internal/stackql/internal_data_transfer/internaldto/executor_output.go`.
4. retrieval/memory/indexing 확인: `internal/stackql/primitivegraph/graph_holder.go`, `internal/stackql/primitivegraph/graph.go`, `internal/stackql/primitivebuilder/dataflow_graph.go`.
5. test/eval 파일로 동작 검증: `test/poetry.lock`, `test/poetry.toml`, `test/pyproject.toml`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Query, provision and operate Cloud, SaaS, API and Model Context Protocol MCP resources through a unified SQL based frame. 핵심 구조 신호는 Go, go.mod, Dockerfile, docker-compose.yml, README.md, AGENTS.md이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
