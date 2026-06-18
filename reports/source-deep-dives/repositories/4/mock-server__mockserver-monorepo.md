# mock-server/mockserver-monorepo 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

MockServer is an HTTP(S) mock server and proxy for testing that lets you mock APIs, inspect and modify live traffic, and inject failures. It supports HTTP/1.1, HTTP/2, gRPC, WebSockets, TCP and more on a single port, with additional support for HTTP/3, message brokers, and AI/LLM APIs.

## 요약

- 조사 단위: `sources/mock-server__mockserver-monorepo` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 4,309 files, 1,297 directories, depth score 126, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

평가/관측/품질 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 eval=scripts/local_single_test.sh, scripts/log_event_size_test_docker.sh, scripts/log_event_size_test_intellij_tls_load.sh이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 품질/평가 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | mock-server/mockserver-monorepo |
| 주제 | 평가/관측/품질 / 평가/관측/품질 |
| Region | global |
| Language | Java |
| Stars | 4893 |
| Forks | 1110 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/mock-server__mockserver-monorepo](../../../../sources/mock-server__mockserver-monorepo) |
| 기존 보고서 | [reports/global-trending/repositories/mock-server__mockserver-monorepo.md](../../../global-trending/repositories/mock-server__mockserver-monorepo.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 4309 / 1297 |
| 관측 최대 깊이 | 13 |
| 상위 디렉터리 | .buildkite, .claude, .github, .opencode, .tmp, container_integration_tests, docker, docker_build, docs, examples, helm, jekyll-www.mock-server.com, mockserver, mockserver-client-dotnet, mockserver-client-go, mockserver-client-node, mockserver-client-php, mockserver-client-python, mockserver-client-ruby, mockserver-client-rust |
| 상위 확장자 | .java: 1982, .md: 327, .sh: 309, .json: 271, .ts: 149, .html: 123, .tsx: 107, .js: 97, .xml: 88, .bru: 84, .yml: 73, (none): 73 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 14 |
| .github | ci surface | 1 |
| container_integration_tests | validation surface | 1 |
| docker | documentation surface | 1 |
| docker_build | documentation surface | 1 |
| examples | top-level component | 1 |
| helm | deployment surface | 1 |
| jekyll-www.mock-server.com | source boundary | 1 |
| mockserver | source boundary | 1 |
| mockserver-client-dotnet | source boundary | 1 |
| mockserver-client-go | source boundary | 1 |
| mockserver-client-node | source boundary | 1 |
| mockserver-client-php | source boundary | 1 |
| mockserver-client-python | source boundary | 1 |
| mockserver-client-ruby | source boundary | 1 |
| mockserver-client-rust | source boundary | 1 |
| mockserver-core | source boundary | 1 |
| mockserver-integration-testing | validation surface | 1 |


## 실행 방식

_root manifest에서 추출된 command surface가 없습니다._


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | 없음 |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| eval | [scripts/local_single_test.sh](../../../../sources/mock-server__mockserver-monorepo/scripts/local_single_test.sh) | eval signal |
| eval | [scripts/log_event_size_test_docker.sh](../../../../sources/mock-server__mockserver-monorepo/scripts/log_event_size_test_docker.sh) | eval signal |
| eval | [scripts/log_event_size_test_intellij_tls_load.sh](../../../../sources/mock-server__mockserver-monorepo/scripts/log_event_size_test_intellij_tls_load.sh) | eval signal |
| eval | [scripts/log_event_size_test_intellij_tls.sh](../../../../sources/mock-server__mockserver-monorepo/scripts/log_event_size_test_intellij_tls.sh) | eval signal |
| entrypoints | [server.json](../../../../sources/mock-server__mockserver-monorepo/server.json) | entrypoints signal |
| entrypoints | [packaging/asdf/bin/download](../../../../sources/mock-server__mockserver-monorepo/packaging/asdf/bin/download) | entrypoints signal |
| entrypoints | [packaging/asdf/bin/install](../../../../sources/mock-server__mockserver-monorepo/packaging/asdf/bin/install) | entrypoints signal |
| entrypoints | [packaging/asdf/bin/latest-stable](../../../../sources/mock-server__mockserver-monorepo/packaging/asdf/bin/latest-stable) | entrypoints signal |
| config | [mockserver-vscode/package.json](../../../../sources/mock-server__mockserver-monorepo/mockserver-vscode/package.json) | config signal |
| config | [mockserver-vscode/tsconfig.json](../../../../sources/mock-server__mockserver-monorepo/mockserver-vscode/tsconfig.json) | config signal |
| config | [mockserver-ui/package.json](../../../../sources/mock-server__mockserver-monorepo/mockserver-ui/package.json) | config signal |
| config | [mockserver-ui/tsconfig.json](../../../../sources/mock-server__mockserver-monorepo/mockserver-ui/tsconfig.json) | config signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 65 | [server.json](../../../../sources/mock-server__mockserver-monorepo/server.json)<br>[packaging/asdf/bin/download](../../../../sources/mock-server__mockserver-monorepo/packaging/asdf/bin/download)<br>[packaging/asdf/bin/install](../../../../sources/mock-server__mockserver-monorepo/packaging/asdf/bin/install)<br>[packaging/asdf/bin/latest-stable](../../../../sources/mock-server__mockserver-monorepo/packaging/asdf/bin/latest-stable)<br>[packaging/asdf/bin/list-all](../../../../sources/mock-server__mockserver-monorepo/packaging/asdf/bin/list-all)<br>[mockserver-ui/src/App.tsx](../../../../sources/mock-server__mockserver-monorepo/mockserver-ui/src/App.tsx)<br>[mockserver-ui/src/main.tsx](../../../../sources/mock-server__mockserver-monorepo/mockserver-ui/src/main.tsx)<br>[mockserver-testcontainers/node/src/index.ts](../../../../sources/mock-server__mockserver-monorepo/mockserver-testcontainers/node/src/index.ts) |
| agentRuntime | 70 | [AGENTS.md](../../../../sources/mock-server__mockserver-monorepo/AGENTS.md)<br>[packaging/chocolatey/tools/chocolateyinstall.ps1](../../../../sources/mock-server__mockserver-monorepo/packaging/chocolatey/tools/chocolateyinstall.ps1)<br>[packaging/chocolatey/tools/chocolateyuninstall.ps1](../../../../sources/mock-server__mockserver-monorepo/packaging/chocolatey/tools/chocolateyuninstall.ps1)<br>[mockserver-ui/src/hooks/DebugMismatchContext.ts](../../../../sources/mock-server__mockserver-monorepo/mockserver-ui/src/hooks/DebugMismatchContext.ts)<br>[mockserver-ui/src/hooks/GenerateStubContext.ts](../../../../sources/mock-server__mockserver-monorepo/mockserver-ui/src/hooks/GenerateStubContext.ts)<br>[mockserver-ui/src/hooks/useConnectionParams.ts](../../../../sources/mock-server__mockserver-monorepo/mockserver-ui/src/hooks/useConnectionParams.ts)<br>[mockserver-ui/src/hooks/useDebugMismatch.ts](../../../../sources/mock-server__mockserver-monorepo/mockserver-ui/src/hooks/useDebugMismatch.ts)<br>[mockserver-ui/src/hooks/useExpansion.ts](../../../../sources/mock-server__mockserver-monorepo/mockserver-ui/src/hooks/useExpansion.ts) |
| mcp | 33 | [terraform/website/mcp-dns.tf](../../../../sources/mock-server__mockserver-monorepo/terraform/website/mcp-dns.tf)<br>[scripts/release/components/mcp.sh](../../../../sources/mock-server__mockserver-monorepo/scripts/release/components/mcp.sh)<br>[mockserver-client-python/tests/test_mcp.py](../../../../sources/mock-server__mockserver-monorepo/mockserver-client-python/tests/test_mcp.py)<br>[mockserver-client-python/mockserver/mcp.py](../../../../sources/mock-server__mockserver-monorepo/mockserver-client-python/mockserver/mcp.py)<br>[mockserver-client-node/test/no_proxy/mcp_mock_builder_test.js](../../../../sources/mock-server__mockserver-monorepo/mockserver-client-node/test/no_proxy/mcp_mock_builder_test.js)<br>[mockserver/mockserver-netty/src/test/java/org/mockserver/netty/mcp/CreateExpectationsFromRecordedTrafficIntegrationTest.java](../../../../sources/mock-server__mockserver-monorepo/mockserver/mockserver-netty/src/test/java/org/mockserver/netty/mcp/CreateExpectationsFromRecordedTrafficIntegrationTest.java)<br>[mockserver/mockserver-netty/src/test/java/org/mockserver/netty/mcp/ExplainUnmatchedIntegrationTest.java](../../../../sources/mock-server__mockserver-monorepo/mockserver/mockserver-netty/src/test/java/org/mockserver/netty/mcp/ExplainUnmatchedIntegrationTest.java)<br>[mockserver/mockserver-netty/src/test/java/org/mockserver/netty/mcp/JsonRpcMessageTest.java](../../../../sources/mock-server__mockserver-monorepo/mockserver/mockserver-netty/src/test/java/org/mockserver/netty/mcp/JsonRpcMessageTest.java) |
| retrieval | 15 | [terraform/ses-email-forwarding/lambda/index.js](../../../../sources/mock-server__mockserver-monorepo/terraform/ses-email-forwarding/lambda/index.js)<br>[mockserver-ui/index.html](../../../../sources/mock-server__mockserver-monorepo/mockserver-ui/index.html)<br>[mockserver-ui/src/store/index.ts](../../../../sources/mock-server__mockserver-monorepo/mockserver-ui/src/store/index.ts)<br>[mockserver-testcontainers/node/src/index.ts](../../../../sources/mock-server__mockserver-monorepo/mockserver-testcontainers/node/src/index.ts)<br>[mockserver-node/index.d.ts](../../../../sources/mock-server__mockserver-monorepo/mockserver-node/index.d.ts)<br>[mockserver-node/index.js](../../../../sources/mock-server__mockserver-monorepo/mockserver-node/index.js)<br>[mockserver-client-node/index.d.ts](../../../../sources/mock-server__mockserver-monorepo/mockserver-client-node/index.d.ts)<br>[mockserver-client-node/index.js](../../../../sources/mock-server__mockserver-monorepo/mockserver-client-node/index.js) |
| spec | 23 | [mockserver-client-ruby/spec/integration_spec.rb](../../../../sources/mock-server__mockserver-monorepo/mockserver-client-ruby/spec/integration_spec.rb)<br>[mockserver-client-ruby/spec/spec_helper.rb](../../../../sources/mock-server__mockserver-monorepo/mockserver-client-ruby/spec/spec_helper.rb)<br>[mockserver-client-ruby/spec/mockserver/binary_launcher_spec.rb](../../../../sources/mock-server__mockserver-monorepo/mockserver-client-ruby/spec/mockserver/binary_launcher_spec.rb)<br>[mockserver-client-ruby/spec/mockserver/breakpoint_spec.rb](../../../../sources/mock-server__mockserver-monorepo/mockserver-client-ruby/spec/mockserver/breakpoint_spec.rb)<br>[mockserver-client-ruby/spec/mockserver/client_spec.rb](../../../../sources/mock-server__mockserver-monorepo/mockserver-client-ruby/spec/mockserver/client_spec.rb)<br>[mockserver-client-ruby/spec/mockserver/errors_spec.rb](../../../../sources/mock-server__mockserver-monorepo/mockserver-client-ruby/spec/mockserver/errors_spec.rb)<br>[mockserver-client-ruby/spec/mockserver/forward_chain_expectation_spec.rb](../../../../sources/mock-server__mockserver-monorepo/mockserver-client-ruby/spec/mockserver/forward_chain_expectation_spec.rb)<br>[mockserver-client-ruby/spec/mockserver/models_spec.rb](../../../../sources/mock-server__mockserver-monorepo/mockserver-client-ruby/spec/mockserver/models_spec.rb) |
| eval | 1516 | [scripts/local_single_test.sh](../../../../sources/mock-server__mockserver-monorepo/scripts/local_single_test.sh)<br>[scripts/log_event_size_test_docker.sh](../../../../sources/mock-server__mockserver-monorepo/scripts/log_event_size_test_docker.sh)<br>[scripts/log_event_size_test_intellij_tls_load.sh](../../../../sources/mock-server__mockserver-monorepo/scripts/log_event_size_test_intellij_tls_load.sh)<br>[scripts/log_event_size_test_intellij_tls.sh](../../../../sources/mock-server__mockserver-monorepo/scripts/log_event_size_test_intellij_tls.sh)<br>[scripts/log_event_size_test_intellij.sh](../../../../sources/mock-server__mockserver-monorepo/scripts/log_event_size_test_intellij.sh)<br>[scripts/release/test-all.sh](../../../../sources/mock-server__mockserver-monorepo/scripts/release/test-all.sh)<br>[scripts/release/test-cosign-signing.sh](../../../../sources/mock-server__mockserver-monorepo/scripts/release/test-cosign-signing.sh)<br>[scripts/collections/test_collections.py](../../../../sources/mock-server__mockserver-monorepo/scripts/collections/test_collections.py) |
| security | 22 | [SECURITY.md](../../../../sources/mock-server__mockserver-monorepo/SECURITY.md)<br>[terraform/website/security-hardening.tf](../../../../sources/mock-server__mockserver-monorepo/terraform/website/security-hardening.tf)<br>[terraform/buildkite-agents/security-hardening.tf](../../../../sources/mock-server__mockserver-monorepo/terraform/buildkite-agents/security-hardening.tf)<br>[mockserver/mockserver-async/src/test/java/org/mockserver/async/security/KafkaSecurityPropertiesTest.java](../../../../sources/mock-server__mockserver-monorepo/mockserver/mockserver-async/src/test/java/org/mockserver/async/security/KafkaSecurityPropertiesTest.java)<br>[mockserver/mockserver-async/src/test/java/org/mockserver/async/security/MqttSecurityOptionsTest.java](../../../../sources/mock-server__mockserver-monorepo/mockserver/mockserver-async/src/test/java/org/mockserver/async/security/MqttSecurityOptionsTest.java)<br>[mockserver/mockserver-async/src/main/java/org/mockserver/async/security/KafkaSecurity.java](../../../../sources/mock-server__mockserver-monorepo/mockserver/mockserver-async/src/main/java/org/mockserver/async/security/KafkaSecurity.java)<br>[mockserver/mockserver-async/src/main/java/org/mockserver/async/security/KafkaSecurityProperties.java](../../../../sources/mock-server__mockserver-monorepo/mockserver/mockserver-async/src/main/java/org/mockserver/async/security/KafkaSecurityProperties.java)<br>[mockserver/mockserver-async/src/main/java/org/mockserver/async/security/MqttSecurity.java](../../../../sources/mock-server__mockserver-monorepo/mockserver/mockserver-async/src/main/java/org/mockserver/async/security/MqttSecurity.java) |
| ci | 42 | [terraform/buildkite-pipelines/backend.tf](../../../../sources/mock-server__mockserver-monorepo/terraform/buildkite-pipelines/backend.tf)<br>[terraform/buildkite-pipelines/clusters.tf](../../../../sources/mock-server__mockserver-monorepo/terraform/buildkite-pipelines/clusters.tf)<br>[terraform/buildkite-pipelines/pipelines.tf](../../../../sources/mock-server__mockserver-monorepo/terraform/buildkite-pipelines/pipelines.tf)<br>[terraform/buildkite-pipelines/providers.tf](../../../../sources/mock-server__mockserver-monorepo/terraform/buildkite-pipelines/providers.tf)<br>[terraform/buildkite-pipelines/README.md](../../../../sources/mock-server__mockserver-monorepo/terraform/buildkite-pipelines/README.md)<br>[terraform/buildkite-pipelines/versions.tf](../../../../sources/mock-server__mockserver-monorepo/terraform/buildkite-pipelines/versions.tf)<br>[terraform/buildkite-agents/aws-config.tf](../../../../sources/mock-server__mockserver-monorepo/terraform/buildkite-agents/aws-config.tf)<br>[terraform/buildkite-agents/backend.tf](../../../../sources/mock-server__mockserver-monorepo/terraform/buildkite-agents/backend.tf) |
| container | 126 | [mockserver-performance-test/stack/docker-compose.yml](../../../../sources/mock-server__mockserver-monorepo/mockserver-performance-test/stack/docker-compose.yml)<br>[helm/artifacthub-repo.yml](../../../../sources/mock-server__mockserver-monorepo/helm/artifacthub-repo.yml)<br>[helm/mockserver-config/Chart.yaml](../../../../sources/mock-server__mockserver-monorepo/helm/mockserver-config/Chart.yaml)<br>[helm/mockserver-config/README.md](../../../../sources/mock-server__mockserver-monorepo/helm/mockserver-config/README.md)<br>[helm/mockserver-config/templates/configmap.yaml](../../../../sources/mock-server__mockserver-monorepo/helm/mockserver-config/templates/configmap.yaml)<br>[helm/mockserver-config/static/initializerJson.json](../../../../sources/mock-server__mockserver-monorepo/helm/mockserver-config/static/initializerJson.json)<br>[helm/mockserver-config/static/mockserver.properties](../../../../sources/mock-server__mockserver-monorepo/helm/mockserver-config/static/mockserver.properties)<br>[helm/mockserver/.helmignore](../../../../sources/mock-server__mockserver-monorepo/helm/mockserver/.helmignore) |
| instruction | 2 | [AGENTS.md](../../../../sources/mock-server__mockserver-monorepo/AGENTS.md)<br>[CLAUDE.md](../../../../sources/mock-server__mockserver-monorepo/CLAUDE.md) |
| docs | 191 | [README.md](../../../../sources/mock-server__mockserver-monorepo/README.md)<br>[terraform/README.md](../../../../sources/mock-server__mockserver-monorepo/terraform/README.md)<br>[terraform/website/backend.tf](../../../../sources/mock-server__mockserver-monorepo/terraform/website/backend.tf)<br>[terraform/website/binaries.tf](../../../../sources/mock-server__mockserver-monorepo/terraform/website/binaries.tf)<br>[terraform/website/cross-account-role.tf](../../../../sources/mock-server__mockserver-monorepo/terraform/website/cross-account-role.tf)<br>[terraform/website/dnssec.tf](../../../../sources/mock-server__mockserver-monorepo/terraform/website/dnssec.tf)<br>[terraform/website/main.tf](../../../../sources/mock-server__mockserver-monorepo/terraform/website/main.tf)<br>[terraform/website/marketplace-verification.tf](../../../../sources/mock-server__mockserver-monorepo/terraform/website/marketplace-verification.tf) |
| config | 73 | [mockserver-vscode/package.json](../../../../sources/mock-server__mockserver-monorepo/mockserver-vscode/package.json)<br>[mockserver-vscode/tsconfig.json](../../../../sources/mock-server__mockserver-monorepo/mockserver-vscode/tsconfig.json)<br>[mockserver-ui/package.json](../../../../sources/mock-server__mockserver-monorepo/mockserver-ui/package.json)<br>[mockserver-ui/tsconfig.json](../../../../sources/mock-server__mockserver-monorepo/mockserver-ui/tsconfig.json)<br>[mockserver-testcontainers/rust/Cargo.toml](../../../../sources/mock-server__mockserver-monorepo/mockserver-testcontainers/rust/Cargo.toml)<br>[mockserver-testcontainers/python/pyproject.toml](../../../../sources/mock-server__mockserver-monorepo/mockserver-testcontainers/python/pyproject.toml)<br>[mockserver-testcontainers/node/package.json](../../../../sources/mock-server__mockserver-monorepo/mockserver-testcontainers/node/package.json)<br>[mockserver-testcontainers/node/tsconfig.json](../../../../sources/mock-server__mockserver-monorepo/mockserver-testcontainers/node/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 1516 | [scripts/local_single_test.sh](../../../../sources/mock-server__mockserver-monorepo/scripts/local_single_test.sh)<br>[scripts/log_event_size_test_docker.sh](../../../../sources/mock-server__mockserver-monorepo/scripts/log_event_size_test_docker.sh)<br>[scripts/log_event_size_test_intellij_tls_load.sh](../../../../sources/mock-server__mockserver-monorepo/scripts/log_event_size_test_intellij_tls_load.sh)<br>[scripts/log_event_size_test_intellij_tls.sh](../../../../sources/mock-server__mockserver-monorepo/scripts/log_event_size_test_intellij_tls.sh)<br>[scripts/log_event_size_test_intellij.sh](../../../../sources/mock-server__mockserver-monorepo/scripts/log_event_size_test_intellij.sh)<br>[scripts/release/test-all.sh](../../../../sources/mock-server__mockserver-monorepo/scripts/release/test-all.sh) |
| CI workflow | 42 | [terraform/buildkite-pipelines/backend.tf](../../../../sources/mock-server__mockserver-monorepo/terraform/buildkite-pipelines/backend.tf)<br>[terraform/buildkite-pipelines/clusters.tf](../../../../sources/mock-server__mockserver-monorepo/terraform/buildkite-pipelines/clusters.tf)<br>[terraform/buildkite-pipelines/pipelines.tf](../../../../sources/mock-server__mockserver-monorepo/terraform/buildkite-pipelines/pipelines.tf)<br>[terraform/buildkite-pipelines/providers.tf](../../../../sources/mock-server__mockserver-monorepo/terraform/buildkite-pipelines/providers.tf)<br>[terraform/buildkite-pipelines/README.md](../../../../sources/mock-server__mockserver-monorepo/terraform/buildkite-pipelines/README.md)<br>[terraform/buildkite-pipelines/versions.tf](../../../../sources/mock-server__mockserver-monorepo/terraform/buildkite-pipelines/versions.tf) |
| 컨테이너/배포 | 126 | [mockserver-performance-test/stack/docker-compose.yml](../../../../sources/mock-server__mockserver-monorepo/mockserver-performance-test/stack/docker-compose.yml)<br>[helm/artifacthub-repo.yml](../../../../sources/mock-server__mockserver-monorepo/helm/artifacthub-repo.yml)<br>[helm/mockserver-config/Chart.yaml](../../../../sources/mock-server__mockserver-monorepo/helm/mockserver-config/Chart.yaml)<br>[helm/mockserver-config/README.md](../../../../sources/mock-server__mockserver-monorepo/helm/mockserver-config/README.md)<br>[helm/mockserver-config/templates/configmap.yaml](../../../../sources/mock-server__mockserver-monorepo/helm/mockserver-config/templates/configmap.yaml)<br>[helm/mockserver-config/static/initializerJson.json](../../../../sources/mock-server__mockserver-monorepo/helm/mockserver-config/static/initializerJson.json) |
| 보안/정책 | 22 | [SECURITY.md](../../../../sources/mock-server__mockserver-monorepo/SECURITY.md)<br>[terraform/website/security-hardening.tf](../../../../sources/mock-server__mockserver-monorepo/terraform/website/security-hardening.tf)<br>[terraform/buildkite-agents/security-hardening.tf](../../../../sources/mock-server__mockserver-monorepo/terraform/buildkite-agents/security-hardening.tf)<br>[mockserver/mockserver-async/src/test/java/org/mockserver/async/security/KafkaSecurityPropertiesTest.java](../../../../sources/mock-server__mockserver-monorepo/mockserver/mockserver-async/src/test/java/org/mockserver/async/security/KafkaSecurityPropertiesTest.java)<br>[mockserver/mockserver-async/src/test/java/org/mockserver/async/security/MqttSecurityOptionsTest.java](../../../../sources/mock-server__mockserver-monorepo/mockserver/mockserver-async/src/test/java/org/mockserver/async/security/MqttSecurityOptionsTest.java)<br>[mockserver/mockserver-async/src/main/java/org/mockserver/async/security/KafkaSecurity.java](../../../../sources/mock-server__mockserver-monorepo/mockserver/mockserver-async/src/main/java/org/mockserver/async/security/KafkaSecurity.java) |
| 에이전트 지시문 | 2 | [AGENTS.md](../../../../sources/mock-server__mockserver-monorepo/AGENTS.md)<br>[CLAUDE.md](../../../../sources/mock-server__mockserver-monorepo/CLAUDE.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 상위 디렉터리가 많아 모듈 경계 재확인 필요 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `scripts/local_single_test.sh`, `scripts/log_event_size_test_docker.sh`, `scripts/log_event_size_test_intellij_tls_load.sh`.
2. entrypoint를 따라 실행 흐름 확인: `server.json`, `packaging/asdf/bin/download`, `packaging/asdf/bin/install`.
3. agent/tool runtime 매핑: `AGENTS.md`, `packaging/chocolatey/tools/chocolateyinstall.ps1`, `packaging/chocolatey/tools/chocolateyuninstall.ps1`.
4. retrieval/memory/indexing 확인: `terraform/ses-email-forwarding/lambda/index.js`, `mockserver-ui/index.html`, `mockserver-ui/src/store/index.ts`.
5. test/eval 파일로 동작 검증: `scripts/local_single_test.sh`, `scripts/log_event_size_test_docker.sh`, `scripts/log_event_size_test_intellij_tls_load.sh`.

## 기존 레포 인사이트

평가/관측/품질 관점에서 MockServer is an HTTP S mock server and proxy for testing that lets you mock APIs, inspect and modify live traffic, and . 핵심 구조 신호는 Java, README.md, AGENTS.md, CLAUDE.md, tests, ci이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 평가/관측/품질 레포입니다. 활용 관점은 품질/평가 비교 지점이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
