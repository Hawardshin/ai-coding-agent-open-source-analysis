# agentgateway/agentgateway Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Next Generation Agentic Proxy for AI Agents and MCP servers

## 요약

- 조사 단위: `sources/agentgateway__agentgateway` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 1,796 files, 351 directories, depth score 128, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=examples/mcp-authentication/auth_server.py, examples/mcp-authentication/config.yaml, examples/mcp-authentication/README.md이고, 의존성 단서는 openai, modelcontextprotocol, cobra, opentelemetry, prometheus, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | agentgateway/agentgateway |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | Rust |
| Stars | 3339 |
| Forks | 546 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/agentgateway__agentgateway](../../../../sources/agentgateway__agentgateway) |
| Existing report | [reports/global-trending/repositories/agentgateway__agentgateway.md](../../../global-trending/repositories/agentgateway__agentgateway.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 1796 / 351 |
| Max observed depth | 10 |
| Top directories | .cargo, .githooks, .github, api, architecture, common, controller, crates, design, examples, img, manifests, schema, tools, ui |
| Top extensions | .yaml: 508, .go: 359, .rs: 358, .snap: 161, .json: 74, .tsx: 73, .md: 57, (none): 49, .png: 18, .toml: 18, .ts: 18, .golden: 15 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
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


## How It Runs

| Category | Source | Name | Command |
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


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai |
| agentProtocols | modelcontextprotocol |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | none |
| developerSurface | cobra |
| observability | opentelemetry, prometheus |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
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


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
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
| instruction | 0 | not obvious |
| docs | 39 | [README.md](../../../../sources/agentgateway__agentgateway/README.md)<br>[ui/README.md](../../../../sources/agentgateway__agentgateway/ui/README.md)<br>[schema/README.md](../../../../sources/agentgateway__agentgateway/schema/README.md)<br>[manifests/jwt/README.md](../../../../sources/agentgateway__agentgateway/manifests/jwt/README.md)<br>[examples/README.md](../../../../sources/agentgateway__agentgateway/examples/README.md)<br>[examples/tls/README.md](../../../../sources/agentgateway__agentgateway/examples/tls/README.md)<br>[examples/telemetry/README.md](../../../../sources/agentgateway__agentgateway/examples/telemetry/README.md)<br>[examples/telemetry/tracing/README.md](../../../../sources/agentgateway__agentgateway/examples/telemetry/tracing/README.md) |
| config | 23 | [Cargo.lock](../../../../sources/agentgateway__agentgateway/Cargo.lock)<br>[Cargo.toml](../../../../sources/agentgateway__agentgateway/Cargo.toml)<br>[go.mod](../../../../sources/agentgateway__agentgateway/go.mod)<br>[Makefile](../../../../sources/agentgateway__agentgateway/Makefile)<br>[ui/package.json](../../../../sources/agentgateway__agentgateway/ui/package.json)<br>[ui/tsconfig.json](../../../../sources/agentgateway__agentgateway/ui/tsconfig.json)<br>[tools/go.mod](../../../../sources/agentgateway__agentgateway/tools/go.mod)<br>[examples/a2a/strands-agents/pyproject.toml](../../../../sources/agentgateway__agentgateway/examples/a2a/strands-agents/pyproject.toml) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 649 | [examples/telemetry/tracing/langfuse.yaml](../../../../sources/agentgateway__agentgateway/examples/telemetry/tracing/langfuse.yaml)<br>[examples/telemetry/tracing/openllmetry.yaml](../../../../sources/agentgateway__agentgateway/examples/telemetry/tracing/openllmetry.yaml)<br>[examples/telemetry/tracing/otel.yaml](../../../../sources/agentgateway__agentgateway/examples/telemetry/tracing/otel.yaml)<br>[examples/telemetry/tracing/phoenix.yaml](../../../../sources/agentgateway__agentgateway/examples/telemetry/tracing/phoenix.yaml)<br>[examples/telemetry/tracing/README.md](../../../../sources/agentgateway__agentgateway/examples/telemetry/tracing/README.md)<br>[examples/telemetry/img/gemini-tracing.png](../../../../sources/agentgateway__agentgateway/examples/telemetry/img/gemini-tracing.png) |
| CI workflows | 8 | [controller/hack/ci/get-recent-flakes.sh](../../../../sources/agentgateway__agentgateway/controller/hack/ci/get-recent-flakes.sh)<br>[.github/workflows/cache-e2e](../../../../sources/agentgateway__agentgateway/.github/workflows/cache-e2e)<br>[.github/workflows/cache-lint](../../../../sources/agentgateway__agentgateway/.github/workflows/cache-lint)<br>[.github/workflows/cache-test](../../../../sources/agentgateway__agentgateway/.github/workflows/cache-test)<br>[.github/workflows/debug_cache.yml](../../../../sources/agentgateway__agentgateway/.github/workflows/debug_cache.yml)<br>[.github/workflows/nightly.yml](../../../../sources/agentgateway__agentgateway/.github/workflows/nightly.yml) |
| Containers / deploy | 56 | [Dockerfile](../../../../sources/agentgateway__agentgateway/Dockerfile)<br>[Dockerfile.windows](../../../../sources/agentgateway__agentgateway/Dockerfile.windows)<br>[examples/telemetry/docker-compose.yaml](../../../../sources/agentgateway__agentgateway/examples/telemetry/docker-compose.yaml)<br>[examples/openapi/docker-compose.yaml](../../../../sources/agentgateway__agentgateway/examples/openapi/docker-compose.yaml)<br>[examples/oidc/docker-compose.yaml](../../../../sources/agentgateway__agentgateway/examples/oidc/docker-compose.yaml)<br>[examples/oauth2-proxy/docker-compose.yaml](../../../../sources/agentgateway__agentgateway/examples/oauth2-proxy/docker-compose.yaml) |
| Security / policy | 120 | [SECURITY.md](../../../../sources/agentgateway__agentgateway/SECURITY.md)<br>[ui/src/lib/policy-constants.ts](../../../../sources/agentgateway__agentgateway/ui/src/lib/policy-constants.ts)<br>[ui/src/lib/policy-defaults.ts](../../../../sources/agentgateway__agentgateway/ui/src/lib/policy-defaults.ts)<br>[ui/src/lib/policy-utils.ts](../../../../sources/agentgateway__agentgateway/ui/src/lib/policy-utils.ts)<br>[ui/src/components/policy-config.tsx](../../../../sources/agentgateway__agentgateway/ui/src/components/policy-config.tsx)<br>[ui/src/components/policy/form-components.tsx](../../../../sources/agentgateway__agentgateway/ui/src/components/policy/form-components.tsx) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | agent instruction files not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `examples/mcp-authentication/auth_server.py`, `examples/mcp-authentication/config.yaml`, `examples/mcp-authentication/README.md`.
2. Trace execution through entrypoints: `tools/cmd/oss_compliance/main.go`, `examples/a2a/strands-agents/__main__.py`, `crates/xtask/src/main.rs`.
3. Map agent/tool runtime through: `ui/src/hooks/use-mobile.ts`, `ui/src/hooks/use-xds-mode.ts`, `tools/actionlint`.
4. Inspect retrieval/memory/indexing through: `ui/src/components/setup-wizard/index.tsx`, `ui/src/components/forms/index.ts`, `controller/pkg/utils/krtutil/index.go`.
5. Verify behavior through test/eval files: `examples/telemetry/tracing/langfuse.yaml`, `examples/telemetry/tracing/openllmetry.yaml`, `examples/telemetry/tracing/otel.yaml`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Next Generation Agentic Proxy for AI Agents and MCP servers. 핵심 구조 신호는 Rust, Cargo.toml, go.mod, Dockerfile, Makefile, README.md이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
