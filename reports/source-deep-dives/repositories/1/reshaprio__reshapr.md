# reshaprio/reshapr Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

The open source, no-code MCP Server for AI-Native API Access

## 요약

- 조사 단위: `sources/reshaprio__reshapr` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 616 files, 202 directories, depth score 119, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=web-ui/src/routes/(app)/services/[id]/mcp-prompts/+page.svelte, web-ui/src/routes/(app)/services/[id]/mcp-custom-tools/+page.svelte, web-ui/src/routes/(app)/mcp-prompts/+page.svelte이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | reshaprio/reshapr |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Java |
| Stars | 106 |
| Forks | 19 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/reshaprio__reshapr](../../../../sources/reshaprio__reshapr) |
| Existing report | [reports/global-trending/repositories/reshaprio__reshapr.md](../../../global-trending/repositories/reshaprio__reshapr.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 616 / 202 |
| Max observed depth | 10 |
| Top directories | .github, .mvn, api, cli, commons, control-plane, dev, install, proxy, web-ui |
| Top extensions | .java: 244, .svelte: 114, .ts: 97, .yaml: 33, .json: 16, (none): 15, .html: 12, .properties: 10, .yml: 10, .sh: 8, .sql: 8, .jar: 5 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| .github | ci surface | 1 |
| api | source boundary | 1 |
| cli | top-level component | 1 |
| commons | top-level component | 1 |
| control-plane | top-level component | 1 |
| dev | top-level component | 1 |
| install | top-level component | 1 |
| proxy | top-level component | 1 |
| web-ui | source boundary | 1 |


## How It Runs

_No command surface extracted from root manifests._


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
| agentRuntime | [proxy/src/main/java/io/reshapr/proxy/context/MethodHandlingContext.java](../../../../sources/reshaprio__reshapr/proxy/src/main/java/io/reshapr/proxy/context/MethodHandlingContext.java) | agentRuntime signal |
| agentRuntime | [proxy/src/main/java/io/reshapr/proxy/context/MethodHandlingInfo.java](../../../../sources/reshaprio__reshapr/proxy/src/main/java/io/reshapr/proxy/context/MethodHandlingInfo.java) | agentRuntime signal |
| agentRuntime | [proxy/src/main/java/io/reshapr/proxy/context/SessionInfo.java](../../../../sources/reshaprio__reshapr/proxy/src/main/java/io/reshapr/proxy/context/SessionInfo.java) | agentRuntime signal |
| agentRuntime | [control-plane/src/test/resources/io/reshapr/ctrl/artifacts/tools-output-filters-invalid.yaml](../../../../sources/reshaprio__reshapr/control-plane/src/test/resources/io/reshapr/ctrl/artifacts/tools-output-filters-invalid.yaml) | agentRuntime signal |
| entrypoints | [web-ui/src/app.css](../../../../sources/reshaprio__reshapr/web-ui/src/app.css) | entrypoints signal |
| entrypoints | [web-ui/src/app.d.ts](../../../../sources/reshaprio__reshapr/web-ui/src/app.d.ts) | entrypoints signal |
| entrypoints | [web-ui/src/app.html](../../../../sources/reshaprio__reshapr/web-ui/src/app.html) | entrypoints signal |
| entrypoints | [dev/github-user-mcp-app/main.ts](../../../../sources/reshaprio__reshapr/dev/github-user-mcp-app/main.ts) | entrypoints signal |
| config | [web-ui/package.json](../../../../sources/reshaprio__reshapr/web-ui/package.json) | config signal |
| config | [web-ui/tsconfig.json](../../../../sources/reshaprio__reshapr/web-ui/tsconfig.json) | config signal |
| config | [dev/github-user-mcp-app/package.json](../../../../sources/reshaprio__reshapr/dev/github-user-mcp-app/package.json) | config signal |
| config | [dev/github-user-mcp-app/tsconfig.json](../../../../sources/reshaprio__reshapr/dev/github-user-mcp-app/tsconfig.json) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 5 | [web-ui/src/app.css](../../../../sources/reshaprio__reshapr/web-ui/src/app.css)<br>[web-ui/src/app.d.ts](../../../../sources/reshaprio__reshapr/web-ui/src/app.d.ts)<br>[web-ui/src/app.html](../../../../sources/reshaprio__reshapr/web-ui/src/app.html)<br>[dev/github-user-mcp-app/main.ts](../../../../sources/reshaprio__reshapr/dev/github-user-mcp-app/main.ts)<br>[cli/src/cli.ts](../../../../sources/reshaprio__reshapr/cli/src/cli.ts) |
| agentRuntime | 6 | [proxy/src/main/java/io/reshapr/proxy/context/MethodHandlingContext.java](../../../../sources/reshaprio__reshapr/proxy/src/main/java/io/reshapr/proxy/context/MethodHandlingContext.java)<br>[proxy/src/main/java/io/reshapr/proxy/context/MethodHandlingInfo.java](../../../../sources/reshaprio__reshapr/proxy/src/main/java/io/reshapr/proxy/context/MethodHandlingInfo.java)<br>[proxy/src/main/java/io/reshapr/proxy/context/SessionInfo.java](../../../../sources/reshaprio__reshapr/proxy/src/main/java/io/reshapr/proxy/context/SessionInfo.java)<br>[control-plane/src/test/resources/io/reshapr/ctrl/artifacts/tools-output-filters-invalid.yaml](../../../../sources/reshaprio__reshapr/control-plane/src/test/resources/io/reshapr/ctrl/artifacts/tools-output-filters-invalid.yaml)<br>[control-plane/src/test/resources/io/reshapr/ctrl/artifacts/tools-output-filters-valid.yaml](../../../../sources/reshaprio__reshapr/control-plane/src/test/resources/io/reshapr/ctrl/artifacts/tools-output-filters-valid.yaml)<br>[cli/src/utils/context.ts](../../../../sources/reshaprio__reshapr/cli/src/utils/context.ts) |
| mcp | 52 | `web-ui/src/routes/(app)/services/[id]/mcp-prompts/+page.svelte`<br>`web-ui/src/routes/(app)/services/[id]/mcp-custom-tools/+page.svelte`<br>`web-ui/src/routes/(app)/mcp-prompts/+page.svelte`<br>`web-ui/src/routes/(app)/mcp-custom-tools/+page.svelte`<br>[proxy/src/test/resources/io/reshapr/proxy/mcp/github-api-filters.yaml](../../../../sources/reshaprio__reshapr/proxy/src/test/resources/io/reshapr/proxy/mcp/github-api-filters.yaml)<br>[proxy/src/test/resources/io/reshapr/proxy/mcp/github-api.graphql](../../../../sources/reshaprio__reshapr/proxy/src/test/resources/io/reshapr/proxy/mcp/github-api.graphql)<br>[proxy/src/test/resources/io/reshapr/proxy/mcp/trade-api-3.0.1-openapi.yaml](../../../../sources/reshaprio__reshapr/proxy/src/test/resources/io/reshapr/proxy/mcp/trade-api-3.0.1-openapi.yaml)<br>[proxy/src/test/resources/io/reshapr/proxy/mcp/script/github-user-script-tools.yaml](../../../../sources/reshaprio__reshapr/proxy/src/test/resources/io/reshapr/proxy/mcp/script/github-user-script-tools.yaml) |
| retrieval | 19 | [web-ui/src/lib/components/ui/tooltip/index.ts](../../../../sources/reshaprio__reshapr/web-ui/src/lib/components/ui/tooltip/index.ts)<br>[web-ui/src/lib/components/ui/textarea/index.ts](../../../../sources/reshaprio__reshapr/web-ui/src/lib/components/ui/textarea/index.ts)<br>[web-ui/src/lib/components/ui/tabs/index.ts](../../../../sources/reshaprio__reshapr/web-ui/src/lib/components/ui/tabs/index.ts)<br>[web-ui/src/lib/components/ui/table/index.ts](../../../../sources/reshaprio__reshapr/web-ui/src/lib/components/ui/table/index.ts)<br>[web-ui/src/lib/components/ui/sheet/index.ts](../../../../sources/reshaprio__reshapr/web-ui/src/lib/components/ui/sheet/index.ts)<br>[web-ui/src/lib/components/ui/separator/index.ts](../../../../sources/reshaprio__reshapr/web-ui/src/lib/components/ui/separator/index.ts)<br>[web-ui/src/lib/components/ui/select/index.ts](../../../../sources/reshaprio__reshapr/web-ui/src/lib/components/ui/select/index.ts)<br>[web-ui/src/lib/components/ui/progress/index.ts](../../../../sources/reshaprio__reshapr/web-ui/src/lib/components/ui/progress/index.ts) |
| spec | 0 | not obvious |
| eval | 36 | [proxy/src/test/resources/io/reshapr/proxy/mcp/github-api-filters.yaml](../../../../sources/reshaprio__reshapr/proxy/src/test/resources/io/reshapr/proxy/mcp/github-api-filters.yaml)<br>[proxy/src/test/resources/io/reshapr/proxy/mcp/github-api.graphql](../../../../sources/reshaprio__reshapr/proxy/src/test/resources/io/reshapr/proxy/mcp/github-api.graphql)<br>[proxy/src/test/resources/io/reshapr/proxy/mcp/trade-api-3.0.1-openapi.yaml](../../../../sources/reshaprio__reshapr/proxy/src/test/resources/io/reshapr/proxy/mcp/trade-api-3.0.1-openapi.yaml)<br>[proxy/src/test/resources/io/reshapr/proxy/mcp/script/github-user-script-tools.yaml](../../../../sources/reshaprio__reshapr/proxy/src/test/resources/io/reshapr/proxy/mcp/script/github-user-script-tools.yaml)<br>[proxy/src/test/resources/io/reshapr/proxy/mcp/converters/github-api-custom-tools.yaml](../../../../sources/reshaprio__reshapr/proxy/src/test/resources/io/reshapr/proxy/mcp/converters/github-api-custom-tools.yaml)<br>[proxy/src/test/java/io/reshapr/proxy/secret/SecretReferenceResolverTest.java](../../../../sources/reshaprio__reshapr/proxy/src/test/java/io/reshapr/proxy/secret/SecretReferenceResolverTest.java)<br>[proxy/src/test/java/io/reshapr/proxy/proxy/ProxyServiceTest.java](../../../../sources/reshaprio__reshapr/proxy/src/test/java/io/reshapr/proxy/proxy/ProxyServiceTest.java)<br>[proxy/src/test/java/io/reshapr/proxy/mcp/ReshaprResourcesMcpResourceBuilderTest.java](../../../../sources/reshaprio__reshapr/proxy/src/test/java/io/reshapr/proxy/mcp/ReshaprResourcesMcpResourceBuilderTest.java) |
| security | 41 | [web-ui/src/routes/api/auth/switch-org/+server.ts](../../../../sources/reshaprio__reshapr/web-ui/src/routes/api/auth/switch-org/+server.ts)<br>[web-ui/src/routes/api/auth/session/+server.ts](../../../../sources/reshaprio__reshapr/web-ui/src/routes/api/auth/session/+server.ts)<br>[web-ui/src/routes/api/auth/logout/+server.ts](../../../../sources/reshaprio__reshapr/web-ui/src/routes/api/auth/logout/+server.ts)<br>[web-ui/src/routes/api/auth/login/+server.ts](../../../../sources/reshaprio__reshapr/web-ui/src/routes/api/auth/login/+server.ts)<br>[web-ui/src/routes/api/auth/login/oidc/+server.ts](../../../../sources/reshaprio__reshapr/web-ui/src/routes/api/auth/login/oidc/+server.ts)<br>[web-ui/src/routes/api/auth/callback/oidc/+server.ts](../../../../sources/reshaprio__reshapr/web-ui/src/routes/api/auth/callback/oidc/+server.ts)<br>[web-ui/src/lib/stores/auth.svelte.ts](../../../../sources/reshaprio__reshapr/web-ui/src/lib/stores/auth.svelte.ts)<br>[web-ui/src/lib/server/auth.ts](../../../../sources/reshaprio__reshapr/web-ui/src/lib/server/auth.ts) |
| ci | 4 | [.github/workflows/build-containers.yml](../../../../sources/reshaprio__reshapr/.github/workflows/build-containers.yml)<br>[.github/workflows/build-verify.yml](../../../../sources/reshaprio__reshapr/.github/workflows/build-verify.yml)<br>[.github/workflows/cli-e2e-tests.yml](../../../../sources/reshaprio__reshapr/.github/workflows/cli-e2e-tests.yml)<br>[.github/workflows/release.yml](../../../../sources/reshaprio__reshapr/.github/workflows/release.yml) |
| container | 12 | [web-ui/Dockerfile](../../../../sources/reshaprio__reshapr/web-ui/Dockerfile)<br>[proxy/src/main/docker/Dockerfile.jvm](../../../../sources/reshaprio__reshapr/proxy/src/main/docker/Dockerfile.jvm)<br>[proxy/src/main/docker/Dockerfile.legacy-jar](../../../../sources/reshaprio__reshapr/proxy/src/main/docker/Dockerfile.legacy-jar)<br>[proxy/src/main/docker/Dockerfile.native](../../../../sources/reshaprio__reshapr/proxy/src/main/docker/Dockerfile.native)<br>[proxy/src/main/docker/Dockerfile.native-micro](../../../../sources/reshaprio__reshapr/proxy/src/main/docker/Dockerfile.native-micro)<br>[install/docker-compose-all-in-one.yml](../../../../sources/reshaprio__reshapr/install/docker-compose-all-in-one.yml)<br>[install/docker-compose-ui-addon.yml](../../../../sources/reshaprio__reshapr/install/docker-compose-ui-addon.yml)<br>[install/docker-compose.yml](../../../../sources/reshaprio__reshapr/install/docker-compose.yml) |
| instruction | 0 | not obvious |
| docs | 3 | [README.md](../../../../sources/reshaprio__reshapr/README.md)<br>[dev/github-user-mcp-app/README.md](../../../../sources/reshaprio__reshapr/dev/github-user-mcp-app/README.md)<br>[cli/README.md](../../../../sources/reshaprio__reshapr/cli/README.md) |
| config | 6 | [web-ui/package.json](../../../../sources/reshaprio__reshapr/web-ui/package.json)<br>[web-ui/tsconfig.json](../../../../sources/reshaprio__reshapr/web-ui/tsconfig.json)<br>[dev/github-user-mcp-app/package.json](../../../../sources/reshaprio__reshapr/dev/github-user-mcp-app/package.json)<br>[dev/github-user-mcp-app/tsconfig.json](../../../../sources/reshaprio__reshapr/dev/github-user-mcp-app/tsconfig.json)<br>[cli/package.json](../../../../sources/reshaprio__reshapr/cli/package.json)<br>[cli/tsconfig.json](../../../../sources/reshaprio__reshapr/cli/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 36 | [proxy/src/test/resources/io/reshapr/proxy/mcp/github-api-filters.yaml](../../../../sources/reshaprio__reshapr/proxy/src/test/resources/io/reshapr/proxy/mcp/github-api-filters.yaml)<br>[proxy/src/test/resources/io/reshapr/proxy/mcp/github-api.graphql](../../../../sources/reshaprio__reshapr/proxy/src/test/resources/io/reshapr/proxy/mcp/github-api.graphql)<br>[proxy/src/test/resources/io/reshapr/proxy/mcp/trade-api-3.0.1-openapi.yaml](../../../../sources/reshaprio__reshapr/proxy/src/test/resources/io/reshapr/proxy/mcp/trade-api-3.0.1-openapi.yaml)<br>[proxy/src/test/resources/io/reshapr/proxy/mcp/script/github-user-script-tools.yaml](../../../../sources/reshaprio__reshapr/proxy/src/test/resources/io/reshapr/proxy/mcp/script/github-user-script-tools.yaml)<br>[proxy/src/test/resources/io/reshapr/proxy/mcp/converters/github-api-custom-tools.yaml](../../../../sources/reshaprio__reshapr/proxy/src/test/resources/io/reshapr/proxy/mcp/converters/github-api-custom-tools.yaml)<br>[proxy/src/test/java/io/reshapr/proxy/secret/SecretReferenceResolverTest.java](../../../../sources/reshaprio__reshapr/proxy/src/test/java/io/reshapr/proxy/secret/SecretReferenceResolverTest.java) |
| CI workflows | 4 | [.github/workflows/build-containers.yml](../../../../sources/reshaprio__reshapr/.github/workflows/build-containers.yml)<br>[.github/workflows/build-verify.yml](../../../../sources/reshaprio__reshapr/.github/workflows/build-verify.yml)<br>[.github/workflows/cli-e2e-tests.yml](../../../../sources/reshaprio__reshapr/.github/workflows/cli-e2e-tests.yml)<br>[.github/workflows/release.yml](../../../../sources/reshaprio__reshapr/.github/workflows/release.yml) |
| Containers / deploy | 12 | [web-ui/Dockerfile](../../../../sources/reshaprio__reshapr/web-ui/Dockerfile)<br>[proxy/src/main/docker/Dockerfile.jvm](../../../../sources/reshaprio__reshapr/proxy/src/main/docker/Dockerfile.jvm)<br>[proxy/src/main/docker/Dockerfile.legacy-jar](../../../../sources/reshaprio__reshapr/proxy/src/main/docker/Dockerfile.legacy-jar)<br>[proxy/src/main/docker/Dockerfile.native](../../../../sources/reshaprio__reshapr/proxy/src/main/docker/Dockerfile.native)<br>[proxy/src/main/docker/Dockerfile.native-micro](../../../../sources/reshaprio__reshapr/proxy/src/main/docker/Dockerfile.native-micro)<br>[install/docker-compose-all-in-one.yml](../../../../sources/reshaprio__reshapr/install/docker-compose-all-in-one.yml) |
| Security / policy | 41 | [web-ui/src/routes/api/auth/switch-org/+server.ts](../../../../sources/reshaprio__reshapr/web-ui/src/routes/api/auth/switch-org/+server.ts)<br>[web-ui/src/routes/api/auth/session/+server.ts](../../../../sources/reshaprio__reshapr/web-ui/src/routes/api/auth/session/+server.ts)<br>[web-ui/src/routes/api/auth/logout/+server.ts](../../../../sources/reshaprio__reshapr/web-ui/src/routes/api/auth/logout/+server.ts)<br>[web-ui/src/routes/api/auth/login/+server.ts](../../../../sources/reshaprio__reshapr/web-ui/src/routes/api/auth/login/+server.ts)<br>[web-ui/src/routes/api/auth/login/oidc/+server.ts](../../../../sources/reshaprio__reshapr/web-ui/src/routes/api/auth/login/oidc/+server.ts)<br>[web-ui/src/routes/api/auth/callback/oidc/+server.ts](../../../../sources/reshaprio__reshapr/web-ui/src/routes/api/auth/callback/oidc/+server.ts) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | agent instruction files not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `proxy/src/main/java/io/reshapr/proxy/context/MethodHandlingContext.java`, `proxy/src/main/java/io/reshapr/proxy/context/MethodHandlingInfo.java`, `proxy/src/main/java/io/reshapr/proxy/context/SessionInfo.java`.
2. Trace execution through entrypoints: `web-ui/src/app.css`, `web-ui/src/app.d.ts`, `web-ui/src/app.html`.
3. Map agent/tool runtime through: `proxy/src/main/java/io/reshapr/proxy/context/MethodHandlingContext.java`, `proxy/src/main/java/io/reshapr/proxy/context/MethodHandlingInfo.java`, `proxy/src/main/java/io/reshapr/proxy/context/SessionInfo.java`.
4. Inspect retrieval/memory/indexing through: `web-ui/src/lib/components/ui/tooltip/index.ts`, `web-ui/src/lib/components/ui/textarea/index.ts`, `web-ui/src/lib/components/ui/tabs/index.ts`.
5. Verify behavior through test/eval files: `proxy/src/test/resources/io/reshapr/proxy/mcp/github-api-filters.yaml`, `proxy/src/test/resources/io/reshapr/proxy/mcp/github-api.graphql`, `proxy/src/test/resources/io/reshapr/proxy/mcp/trade-api-3.0.1-openapi.yaml`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 The open source, no code MCP Server for AI Native API Access. 핵심 구조 신호는 Java, pom.xml, README.md, LICENSE, ci, docs이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
