# agentgateway/agentgateway 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

Next Generation Agentic Proxy for AI Agents and MCP servers

## 요약

- 조사 단위: `sources/agentgateway__agentgateway` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 1,796 files, 351 directories, depth score 122, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=examples/mcp-authentication/auth_server.py, examples/mcp-authentication/config.yaml, examples/mcp-authentication/README.md이고, 의존성 단서는 openai, modelcontextprotocol, cobra, opentelemetry, prometheus, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | agentgateway/agentgateway |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | Rust |
| Stars | 3339 |
| Forks | 546 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/agentgateway__agentgateway](../../../../sources/agentgateway__agentgateway) |
| 기존 보고서 | [reports/global-trending/repositories/agentgateway__agentgateway.md](../../../global-trending/repositories/agentgateway__agentgateway.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 1796 / 351 |
| 관측 최대 깊이 | 10 |
| 상위 디렉터리 | .cargo, .githooks, .github, api, architecture, common, controller, crates, design, examples, img, manifests, schema, tools, ui |
| 상위 확장자 | .yaml: 508, .go: 359, .rs: 358, .snap: 161, .json: 74, .tsx: 73, .md: 57, (none): 49, .png: 18, .toml: 18, .ts: 18, .golden: 15 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| crates/agentgateway | crates workspace | 80 |
| crates/cel-fork | crates workspace | 10 |
| examples/telemetry | examples workspace | 9 |
| examples/mcp-authentication | examples workspace | 8 |
| examples/ai-prompt-guard | examples workspace | 6 |
| examples/a2a | examples workspace | 5 |
| crates/agentgateway-app | crates workspace | 4 |
| crates/celx | crates workspace | 4 |
| crates/pool | crates workspace | 4 |
| crates/core | crates workspace | 3 |
| crates/hbone | crates workspace | 3 |
| crates/htpasswd-verify-fork | crates workspace | 3 |
| crates/protos | crates workspace | 3 |
| examples/openapi | examples workspace | 3 |
| examples/tailscale-auth | examples workspace | 3 |
| api | source boundary | 2 |
| crates/xds | crates workspace | 2 |
| crates/xtask | crates workspace | 2 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| container | Makefile | docker | make docker |
| utility | Makefile | .PHONY | make .PHONY |
| container | Makefile | docker-ci | make docker-ci |
| utility | Makefile | .PHONY | make .PHONY |
| container | Makefile | docker-musl | make docker-musl |
| utility | Makefile | .PHONY | make .PHONY |
| build | Makefile | build | make build |
| utility | Makefile | .PHONY | make .PHONY |
| build | Makefile | build-target | make build-target |
| utility | Makefile | .PHONY | make .PHONY |
| quality | Makefile | lint | make lint |
| utility | Makefile | .PHONY | make .PHONY |
| quality | Makefile | fix-lint | make fix-lint |
| utility | Makefile | .PHONY | make .PHONY |
| quality | Makefile | format | make format |
| utility | Makefile | .PHONY | make .PHONY |
| test | Makefile | test | make test |
| utility | Makefile | .PHONY | make .PHONY |
| test | Makefile | test-release | make test-release |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai |
| agentProtocols | modelcontextprotocol |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | 없음 |
| developerSurface | cobra |
| observability | opentelemetry, prometheus |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| mcp | [examples/mcp-authentication/auth_server.py](../../../../sources/agentgateway__agentgateway/examples/mcp-authentication/auth_server.py) | mcp signal |
| mcp | [examples/mcp-authentication/config.yaml](../../../../sources/agentgateway__agentgateway/examples/mcp-authentication/config.yaml) | mcp signal |
| mcp | [examples/mcp-authentication/README.md](../../../../sources/agentgateway__agentgateway/examples/mcp-authentication/README.md) | mcp signal |
| mcp | [examples/mcp-authentication/keycloak/docker-compose.yml](../../../../sources/agentgateway__agentgateway/examples/mcp-authentication/keycloak/docker-compose.yml) | mcp signal |
| agentRuntime | [ui/src/hooks/use-mobile.ts](../../../../sources/agentgateway__agentgateway/ui/src/hooks/use-mobile.ts) | agentRuntime signal |
| agentRuntime | [ui/src/hooks/use-xds-mode.ts](../../../../sources/agentgateway__agentgateway/ui/src/hooks/use-xds-mode.ts) | agentRuntime signal |
| agentRuntime | [tools/actionlint](../../../../sources/agentgateway__agentgateway/tools/actionlint) | agentRuntime signal |
| agentRuntime | [tools/applyconfiguration-gen](../../../../sources/agentgateway__agentgateway/tools/applyconfiguration-gen) | agentRuntime signal |
| entrypoints | [tools/cmd/oss_compliance/main.go](../../../../sources/agentgateway__agentgateway/tools/cmd/oss_compliance/main.go) | entrypoints signal |
| entrypoints | [examples/a2a/strands-agents/__main__.py](../../../../sources/agentgateway__agentgateway/examples/a2a/strands-agents/__main__.py) | entrypoints signal |
| entrypoints | [crates/xtask/src/main.rs](../../../../sources/agentgateway__agentgateway/crates/xtask/src/main.rs) | entrypoints signal |
| entrypoints | [crates/xds/src/lib.rs](../../../../sources/agentgateway__agentgateway/crates/xds/src/lib.rs) | entrypoints signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 21 | [tools/cmd/oss_compliance/main.go](../../../../sources/agentgateway__agentgateway/tools/cmd/oss_compliance/main.go)<br>[examples/a2a/strands-agents/__main__.py](../../../../sources/agentgateway__agentgateway/examples/a2a/strands-agents/__main__.py)<br>[crates/xtask/src/main.rs](../../../../sources/agentgateway__agentgateway/crates/xtask/src/main.rs)<br>[crates/xds/src/lib.rs](../../../../sources/agentgateway__agentgateway/crates/xds/src/lib.rs)<br>[crates/protos/src/lib.rs](../../../../sources/agentgateway__agentgateway/crates/protos/src/lib.rs)<br>[crates/pool/src/lib.rs](../../../../sources/agentgateway__agentgateway/crates/pool/src/lib.rs)<br>[crates/htpasswd-verify-fork/src/lib.rs](../../../../sources/agentgateway__agentgateway/crates/htpasswd-verify-fork/src/lib.rs)<br>[crates/hbone/src/lib.rs](../../../../sources/agentgateway__agentgateway/crates/hbone/src/lib.rs) |
| agentRuntime | 66 | [ui/src/hooks/use-mobile.ts](../../../../sources/agentgateway__agentgateway/ui/src/hooks/use-mobile.ts)<br>[ui/src/hooks/use-xds-mode.ts](../../../../sources/agentgateway__agentgateway/ui/src/hooks/use-xds-mode.ts)<br>[tools/actionlint](../../../../sources/agentgateway__agentgateway/tools/actionlint)<br>[tools/applyconfiguration-gen](../../../../sources/agentgateway__agentgateway/tools/applyconfiguration-gen)<br>[tools/buf](../../../../sources/agentgateway__agentgateway/tools/buf)<br>[tools/check_clean_repo.sh](../../../../sources/agentgateway__agentgateway/tools/check_clean_repo.sh)<br>[tools/client-gen](../../../../sources/agentgateway__agentgateway/tools/client-gen)<br>[tools/controller-gen](../../../../sources/agentgateway__agentgateway/tools/controller-gen) |
| mcp | 72 | [examples/mcp-authentication/auth_server.py](../../../../sources/agentgateway__agentgateway/examples/mcp-authentication/auth_server.py)<br>[examples/mcp-authentication/config.yaml](../../../../sources/agentgateway__agentgateway/examples/mcp-authentication/config.yaml)<br>[examples/mcp-authentication/README.md](../../../../sources/agentgateway__agentgateway/examples/mcp-authentication/README.md)<br>[examples/mcp-authentication/keycloak/docker-compose.yml](../../../../sources/agentgateway__agentgateway/examples/mcp-authentication/keycloak/docker-compose.yml)<br>[examples/mcp-authentication/keycloak/mcp-realm.json](../../../../sources/agentgateway__agentgateway/examples/mcp-authentication/keycloak/mcp-realm.json)<br>[crates/protos/proto/ext_mcp.proto](../../../../sources/agentgateway__agentgateway/crates/protos/proto/ext_mcp.proto)<br>[crates/agentgateway/src/types/local_tests/mcp_config.yaml](../../../../sources/agentgateway__agentgateway/crates/agentgateway/src/types/local_tests/mcp_config.yaml)<br>[crates/agentgateway/src/types/local_tests/mcp_normalized.snap](../../../../sources/agentgateway__agentgateway/crates/agentgateway/src/types/local_tests/mcp_normalized.snap) |
| retrieval | 5 | [ui/src/components/setup-wizard/index.tsx](../../../../sources/agentgateway__agentgateway/ui/src/components/setup-wizard/index.tsx)<br>[ui/src/components/forms/index.ts](../../../../sources/agentgateway__agentgateway/ui/src/components/forms/index.ts)<br>[controller/pkg/utils/krtutil/index.go](../../../../sources/agentgateway__agentgateway/controller/pkg/utils/krtutil/index.go)<br>[controller/pkg/pluginsdk/krtutil/index.go](../../../../sources/agentgateway__agentgateway/controller/pkg/pluginsdk/krtutil/index.go)<br>[controller/pkg/helm/embed.go](../../../../sources/agentgateway__agentgateway/controller/pkg/helm/embed.go) |
| spec | 7 | [img/architecture.svg](../../../../sources/agentgateway__agentgateway/img/architecture.svg)<br>[design/288-inferencepool-ai-policies.md](../../../../sources/agentgateway__agentgateway/design/288-inferencepool-ai-policies.md)<br>[design/README.md](../../../../sources/agentgateway__agentgateway/design/README.md)<br>[design/template.md](../../../../sources/agentgateway__agentgateway/design/template.md)<br>[architecture/cel.md](../../../../sources/agentgateway__agentgateway/architecture/cel.md)<br>[architecture/configuration.md](../../../../sources/agentgateway__agentgateway/architecture/configuration.md)<br>[architecture/README.md](../../../../sources/agentgateway__agentgateway/architecture/README.md) |
| eval | 649 | [examples/telemetry/tracing/langfuse.yaml](../../../../sources/agentgateway__agentgateway/examples/telemetry/tracing/langfuse.yaml)<br>[examples/telemetry/tracing/openllmetry.yaml](../../../../sources/agentgateway__agentgateway/examples/telemetry/tracing/openllmetry.yaml)<br>[examples/telemetry/tracing/otel.yaml](../../../../sources/agentgateway__agentgateway/examples/telemetry/tracing/otel.yaml)<br>[examples/telemetry/tracing/phoenix.yaml](../../../../sources/agentgateway__agentgateway/examples/telemetry/tracing/phoenix.yaml)<br>[examples/telemetry/tracing/README.md](../../../../sources/agentgateway__agentgateway/examples/telemetry/tracing/README.md)<br>[examples/telemetry/img/gemini-tracing.png](../../../../sources/agentgateway__agentgateway/examples/telemetry/img/gemini-tracing.png)<br>[crates/pool/src/blackbox_tests.rs](../../../../sources/agentgateway__agentgateway/crates/pool/src/blackbox_tests.rs)<br>[crates/core/src/test_helpers.rs](../../../../sources/agentgateway__agentgateway/crates/core/src/test_helpers.rs) |
| security | 120 | [SECURITY.md](../../../../sources/agentgateway__agentgateway/SECURITY.md)<br>[ui/src/lib/policy-constants.ts](../../../../sources/agentgateway__agentgateway/ui/src/lib/policy-constants.ts)<br>[ui/src/lib/policy-defaults.ts](../../../../sources/agentgateway__agentgateway/ui/src/lib/policy-defaults.ts)<br>[ui/src/lib/policy-utils.ts](../../../../sources/agentgateway__agentgateway/ui/src/lib/policy-utils.ts)<br>[ui/src/components/policy-config.tsx](../../../../sources/agentgateway__agentgateway/ui/src/components/policy-config.tsx)<br>[ui/src/components/policy/form-components.tsx](../../../../sources/agentgateway__agentgateway/ui/src/components/policy/form-components.tsx)<br>[ui/src/components/policy/form-renderers.tsx](../../../../sources/agentgateway__agentgateway/ui/src/components/policy/form-renderers.tsx)<br>[ui/src/components/forms/rbac-config-form.tsx](../../../../sources/agentgateway__agentgateway/ui/src/components/forms/rbac-config-form.tsx) |
| ci | 8 | [controller/hack/ci/get-recent-flakes.sh](../../../../sources/agentgateway__agentgateway/controller/hack/ci/get-recent-flakes.sh)<br>[.github/workflows/cache-e2e](../../../../sources/agentgateway__agentgateway/.github/workflows/cache-e2e)<br>[.github/workflows/cache-lint](../../../../sources/agentgateway__agentgateway/.github/workflows/cache-lint)<br>[.github/workflows/cache-test](../../../../sources/agentgateway__agentgateway/.github/workflows/cache-test)<br>[.github/workflows/debug_cache.yml](../../../../sources/agentgateway__agentgateway/.github/workflows/debug_cache.yml)<br>[.github/workflows/nightly.yml](../../../../sources/agentgateway__agentgateway/.github/workflows/nightly.yml)<br>[.github/workflows/pull_request.yml](../../../../sources/agentgateway__agentgateway/.github/workflows/pull_request.yml)<br>[.github/workflows/release.yml](../../../../sources/agentgateway__agentgateway/.github/workflows/release.yml) |
| container | 56 | [Dockerfile](../../../../sources/agentgateway__agentgateway/Dockerfile)<br>[Dockerfile.windows](../../../../sources/agentgateway__agentgateway/Dockerfile.windows)<br>[examples/telemetry/docker-compose.yaml](../../../../sources/agentgateway__agentgateway/examples/telemetry/docker-compose.yaml)<br>[examples/openapi/docker-compose.yaml](../../../../sources/agentgateway__agentgateway/examples/openapi/docker-compose.yaml)<br>[examples/oidc/docker-compose.yaml](../../../../sources/agentgateway__agentgateway/examples/oidc/docker-compose.yaml)<br>[examples/oauth2-proxy/docker-compose.yaml](../../../../sources/agentgateway__agentgateway/examples/oauth2-proxy/docker-compose.yaml)<br>[examples/mcp-authentication/keycloak/docker-compose.yml](../../../../sources/agentgateway__agentgateway/examples/mcp-authentication/keycloak/docker-compose.yml)<br>[controller/test/helm/helm_version_test.go](../../../../sources/agentgateway__agentgateway/controller/test/helm/helm_version_test.go) |
| instruction | 0 | 명확하지 않음 |
| docs | 39 | [README.md](../../../../sources/agentgateway__agentgateway/README.md)<br>[ui/README.md](../../../../sources/agentgateway__agentgateway/ui/README.md)<br>[schema/README.md](../../../../sources/agentgateway__agentgateway/schema/README.md)<br>[manifests/jwt/README.md](../../../../sources/agentgateway__agentgateway/manifests/jwt/README.md)<br>[examples/README.md](../../../../sources/agentgateway__agentgateway/examples/README.md)<br>[examples/tls/README.md](../../../../sources/agentgateway__agentgateway/examples/tls/README.md)<br>[examples/telemetry/README.md](../../../../sources/agentgateway__agentgateway/examples/telemetry/README.md)<br>[examples/telemetry/tracing/README.md](../../../../sources/agentgateway__agentgateway/examples/telemetry/tracing/README.md) |
| config | 23 | [Cargo.lock](../../../../sources/agentgateway__agentgateway/Cargo.lock)<br>[Cargo.toml](../../../../sources/agentgateway__agentgateway/Cargo.toml)<br>[go.mod](../../../../sources/agentgateway__agentgateway/go.mod)<br>[Makefile](../../../../sources/agentgateway__agentgateway/Makefile)<br>[ui/package.json](../../../../sources/agentgateway__agentgateway/ui/package.json)<br>[ui/tsconfig.json](../../../../sources/agentgateway__agentgateway/ui/tsconfig.json)<br>[tools/go.mod](../../../../sources/agentgateway__agentgateway/tools/go.mod)<br>[examples/a2a/strands-agents/pyproject.toml](../../../../sources/agentgateway__agentgateway/examples/a2a/strands-agents/pyproject.toml) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 649 | [examples/telemetry/tracing/langfuse.yaml](../../../../sources/agentgateway__agentgateway/examples/telemetry/tracing/langfuse.yaml)<br>[examples/telemetry/tracing/openllmetry.yaml](../../../../sources/agentgateway__agentgateway/examples/telemetry/tracing/openllmetry.yaml)<br>[examples/telemetry/tracing/otel.yaml](../../../../sources/agentgateway__agentgateway/examples/telemetry/tracing/otel.yaml)<br>[examples/telemetry/tracing/phoenix.yaml](../../../../sources/agentgateway__agentgateway/examples/telemetry/tracing/phoenix.yaml)<br>[examples/telemetry/tracing/README.md](../../../../sources/agentgateway__agentgateway/examples/telemetry/tracing/README.md)<br>[examples/telemetry/img/gemini-tracing.png](../../../../sources/agentgateway__agentgateway/examples/telemetry/img/gemini-tracing.png) |
| CI workflow | 8 | [controller/hack/ci/get-recent-flakes.sh](../../../../sources/agentgateway__agentgateway/controller/hack/ci/get-recent-flakes.sh)<br>[.github/workflows/cache-e2e](../../../../sources/agentgateway__agentgateway/.github/workflows/cache-e2e)<br>[.github/workflows/cache-lint](../../../../sources/agentgateway__agentgateway/.github/workflows/cache-lint)<br>[.github/workflows/cache-test](../../../../sources/agentgateway__agentgateway/.github/workflows/cache-test)<br>[.github/workflows/debug_cache.yml](../../../../sources/agentgateway__agentgateway/.github/workflows/debug_cache.yml)<br>[.github/workflows/nightly.yml](../../../../sources/agentgateway__agentgateway/.github/workflows/nightly.yml) |
| 컨테이너/배포 | 56 | [Dockerfile](../../../../sources/agentgateway__agentgateway/Dockerfile)<br>[Dockerfile.windows](../../../../sources/agentgateway__agentgateway/Dockerfile.windows)<br>[examples/telemetry/docker-compose.yaml](../../../../sources/agentgateway__agentgateway/examples/telemetry/docker-compose.yaml)<br>[examples/openapi/docker-compose.yaml](../../../../sources/agentgateway__agentgateway/examples/openapi/docker-compose.yaml)<br>[examples/oidc/docker-compose.yaml](../../../../sources/agentgateway__agentgateway/examples/oidc/docker-compose.yaml)<br>[examples/oauth2-proxy/docker-compose.yaml](../../../../sources/agentgateway__agentgateway/examples/oauth2-proxy/docker-compose.yaml) |
| 보안/정책 | 120 | [SECURITY.md](../../../../sources/agentgateway__agentgateway/SECURITY.md)<br>[ui/src/lib/policy-constants.ts](../../../../sources/agentgateway__agentgateway/ui/src/lib/policy-constants.ts)<br>[ui/src/lib/policy-defaults.ts](../../../../sources/agentgateway__agentgateway/ui/src/lib/policy-defaults.ts)<br>[ui/src/lib/policy-utils.ts](../../../../sources/agentgateway__agentgateway/ui/src/lib/policy-utils.ts)<br>[ui/src/components/policy-config.tsx](../../../../sources/agentgateway__agentgateway/ui/src/components/policy-config.tsx)<br>[ui/src/components/policy/form-components.tsx](../../../../sources/agentgateway__agentgateway/ui/src/components/policy/form-components.tsx) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | agent instruction 파일이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `examples/mcp-authentication/auth_server.py`, `examples/mcp-authentication/config.yaml`, `examples/mcp-authentication/README.md`.
2. entrypoint를 따라 실행 흐름 확인: `tools/cmd/oss_compliance/main.go`, `examples/a2a/strands-agents/__main__.py`, `crates/xtask/src/main.rs`.
3. agent/tool runtime 매핑: `ui/src/hooks/use-mobile.ts`, `ui/src/hooks/use-xds-mode.ts`, `tools/actionlint`.
4. retrieval/memory/indexing 확인: `ui/src/components/setup-wizard/index.tsx`, `ui/src/components/forms/index.ts`, `controller/pkg/utils/krtutil/index.go`.
5. test/eval 파일로 동작 검증: `examples/telemetry/tracing/langfuse.yaml`, `examples/telemetry/tracing/openllmetry.yaml`, `examples/telemetry/tracing/otel.yaml`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Next Generation Agentic Proxy for AI Agents and MCP servers. 핵심 구조 신호는 Rust, Cargo.toml, go.mod, Dockerfile, Makefile, README.md이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
