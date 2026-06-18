# reshaprio/reshapr 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

The open source, no-code MCP Server for AI-Native API Access

## 요약

- 조사 단위: `sources/reshaprio__reshapr` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 616 files, 202 directories, depth score 113, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=web-ui/src/routes/(app)/services/[id]/mcp-prompts/+page.svelte, web-ui/src/routes/(app)/services/[id]/mcp-custom-tools/+page.svelte, web-ui/src/routes/(app)/mcp-prompts/+page.svelte이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | reshaprio/reshapr |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Java |
| Stars | 106 |
| Forks | 19 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/reshaprio__reshapr](../../../../sources/reshaprio__reshapr) |
| 기존 보고서 | [reports/global-trending/repositories/reshaprio__reshapr.md](../../../global-trending/repositories/reshaprio__reshapr.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 616 / 202 |
| 관측 최대 깊이 | 10 |
| 상위 디렉터리 | .github, .mvn, api, cli, commons, control-plane, dev, install, proxy, web-ui |
| 상위 확장자 | .java: 244, .svelte: 114, .ts: 97, .yaml: 33, .json: 16, (none): 15, .html: 12, .properties: 10, .yml: 10, .sh: 8, .sql: 8, .jar: 5 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 5 | [web-ui/src/app.css](../../../../sources/reshaprio__reshapr/web-ui/src/app.css)<br>[web-ui/src/app.d.ts](../../../../sources/reshaprio__reshapr/web-ui/src/app.d.ts)<br>[web-ui/src/app.html](../../../../sources/reshaprio__reshapr/web-ui/src/app.html)<br>[dev/github-user-mcp-app/main.ts](../../../../sources/reshaprio__reshapr/dev/github-user-mcp-app/main.ts)<br>[cli/src/cli.ts](../../../../sources/reshaprio__reshapr/cli/src/cli.ts) |
| agentRuntime | 6 | [proxy/src/main/java/io/reshapr/proxy/context/MethodHandlingContext.java](../../../../sources/reshaprio__reshapr/proxy/src/main/java/io/reshapr/proxy/context/MethodHandlingContext.java)<br>[proxy/src/main/java/io/reshapr/proxy/context/MethodHandlingInfo.java](../../../../sources/reshaprio__reshapr/proxy/src/main/java/io/reshapr/proxy/context/MethodHandlingInfo.java)<br>[proxy/src/main/java/io/reshapr/proxy/context/SessionInfo.java](../../../../sources/reshaprio__reshapr/proxy/src/main/java/io/reshapr/proxy/context/SessionInfo.java)<br>[control-plane/src/test/resources/io/reshapr/ctrl/artifacts/tools-output-filters-invalid.yaml](../../../../sources/reshaprio__reshapr/control-plane/src/test/resources/io/reshapr/ctrl/artifacts/tools-output-filters-invalid.yaml)<br>[control-plane/src/test/resources/io/reshapr/ctrl/artifacts/tools-output-filters-valid.yaml](../../../../sources/reshaprio__reshapr/control-plane/src/test/resources/io/reshapr/ctrl/artifacts/tools-output-filters-valid.yaml)<br>[cli/src/utils/context.ts](../../../../sources/reshaprio__reshapr/cli/src/utils/context.ts) |
| mcp | 52 | `web-ui/src/routes/(app)/services/[id]/mcp-prompts/+page.svelte`<br>`web-ui/src/routes/(app)/services/[id]/mcp-custom-tools/+page.svelte`<br>`web-ui/src/routes/(app)/mcp-prompts/+page.svelte`<br>`web-ui/src/routes/(app)/mcp-custom-tools/+page.svelte`<br>[proxy/src/test/resources/io/reshapr/proxy/mcp/github-api-filters.yaml](../../../../sources/reshaprio__reshapr/proxy/src/test/resources/io/reshapr/proxy/mcp/github-api-filters.yaml)<br>[proxy/src/test/resources/io/reshapr/proxy/mcp/github-api.graphql](../../../../sources/reshaprio__reshapr/proxy/src/test/resources/io/reshapr/proxy/mcp/github-api.graphql)<br>[proxy/src/test/resources/io/reshapr/proxy/mcp/trade-api-3.0.1-openapi.yaml](../../../../sources/reshaprio__reshapr/proxy/src/test/resources/io/reshapr/proxy/mcp/trade-api-3.0.1-openapi.yaml)<br>[proxy/src/test/resources/io/reshapr/proxy/mcp/script/github-user-script-tools.yaml](../../../../sources/reshaprio__reshapr/proxy/src/test/resources/io/reshapr/proxy/mcp/script/github-user-script-tools.yaml) |
| retrieval | 19 | [web-ui/src/lib/components/ui/tooltip/index.ts](../../../../sources/reshaprio__reshapr/web-ui/src/lib/components/ui/tooltip/index.ts)<br>[web-ui/src/lib/components/ui/textarea/index.ts](../../../../sources/reshaprio__reshapr/web-ui/src/lib/components/ui/textarea/index.ts)<br>[web-ui/src/lib/components/ui/tabs/index.ts](../../../../sources/reshaprio__reshapr/web-ui/src/lib/components/ui/tabs/index.ts)<br>[web-ui/src/lib/components/ui/table/index.ts](../../../../sources/reshaprio__reshapr/web-ui/src/lib/components/ui/table/index.ts)<br>[web-ui/src/lib/components/ui/sheet/index.ts](../../../../sources/reshaprio__reshapr/web-ui/src/lib/components/ui/sheet/index.ts)<br>[web-ui/src/lib/components/ui/separator/index.ts](../../../../sources/reshaprio__reshapr/web-ui/src/lib/components/ui/separator/index.ts)<br>[web-ui/src/lib/components/ui/select/index.ts](../../../../sources/reshaprio__reshapr/web-ui/src/lib/components/ui/select/index.ts)<br>[web-ui/src/lib/components/ui/progress/index.ts](../../../../sources/reshaprio__reshapr/web-ui/src/lib/components/ui/progress/index.ts) |
| spec | 0 | 명확하지 않음 |
| eval | 36 | [proxy/src/test/resources/io/reshapr/proxy/mcp/github-api-filters.yaml](../../../../sources/reshaprio__reshapr/proxy/src/test/resources/io/reshapr/proxy/mcp/github-api-filters.yaml)<br>[proxy/src/test/resources/io/reshapr/proxy/mcp/github-api.graphql](../../../../sources/reshaprio__reshapr/proxy/src/test/resources/io/reshapr/proxy/mcp/github-api.graphql)<br>[proxy/src/test/resources/io/reshapr/proxy/mcp/trade-api-3.0.1-openapi.yaml](../../../../sources/reshaprio__reshapr/proxy/src/test/resources/io/reshapr/proxy/mcp/trade-api-3.0.1-openapi.yaml)<br>[proxy/src/test/resources/io/reshapr/proxy/mcp/script/github-user-script-tools.yaml](../../../../sources/reshaprio__reshapr/proxy/src/test/resources/io/reshapr/proxy/mcp/script/github-user-script-tools.yaml)<br>[proxy/src/test/resources/io/reshapr/proxy/mcp/converters/github-api-custom-tools.yaml](../../../../sources/reshaprio__reshapr/proxy/src/test/resources/io/reshapr/proxy/mcp/converters/github-api-custom-tools.yaml)<br>[proxy/src/test/java/io/reshapr/proxy/secret/SecretReferenceResolverTest.java](../../../../sources/reshaprio__reshapr/proxy/src/test/java/io/reshapr/proxy/secret/SecretReferenceResolverTest.java)<br>[proxy/src/test/java/io/reshapr/proxy/proxy/ProxyServiceTest.java](../../../../sources/reshaprio__reshapr/proxy/src/test/java/io/reshapr/proxy/proxy/ProxyServiceTest.java)<br>[proxy/src/test/java/io/reshapr/proxy/mcp/ReshaprResourcesMcpResourceBuilderTest.java](../../../../sources/reshaprio__reshapr/proxy/src/test/java/io/reshapr/proxy/mcp/ReshaprResourcesMcpResourceBuilderTest.java) |
| security | 41 | [web-ui/src/routes/api/auth/switch-org/+server.ts](../../../../sources/reshaprio__reshapr/web-ui/src/routes/api/auth/switch-org/+server.ts)<br>[web-ui/src/routes/api/auth/session/+server.ts](../../../../sources/reshaprio__reshapr/web-ui/src/routes/api/auth/session/+server.ts)<br>[web-ui/src/routes/api/auth/logout/+server.ts](../../../../sources/reshaprio__reshapr/web-ui/src/routes/api/auth/logout/+server.ts)<br>[web-ui/src/routes/api/auth/login/+server.ts](../../../../sources/reshaprio__reshapr/web-ui/src/routes/api/auth/login/+server.ts)<br>[web-ui/src/routes/api/auth/login/oidc/+server.ts](../../../../sources/reshaprio__reshapr/web-ui/src/routes/api/auth/login/oidc/+server.ts)<br>[web-ui/src/routes/api/auth/callback/oidc/+server.ts](../../../../sources/reshaprio__reshapr/web-ui/src/routes/api/auth/callback/oidc/+server.ts)<br>[web-ui/src/lib/stores/auth.svelte.ts](../../../../sources/reshaprio__reshapr/web-ui/src/lib/stores/auth.svelte.ts)<br>[web-ui/src/lib/server/auth.ts](../../../../sources/reshaprio__reshapr/web-ui/src/lib/server/auth.ts) |
| ci | 4 | [.github/workflows/build-containers.yml](../../../../sources/reshaprio__reshapr/.github/workflows/build-containers.yml)<br>[.github/workflows/build-verify.yml](../../../../sources/reshaprio__reshapr/.github/workflows/build-verify.yml)<br>[.github/workflows/cli-e2e-tests.yml](../../../../sources/reshaprio__reshapr/.github/workflows/cli-e2e-tests.yml)<br>[.github/workflows/release.yml](../../../../sources/reshaprio__reshapr/.github/workflows/release.yml) |
| container | 12 | [web-ui/Dockerfile](../../../../sources/reshaprio__reshapr/web-ui/Dockerfile)<br>[proxy/src/main/docker/Dockerfile.jvm](../../../../sources/reshaprio__reshapr/proxy/src/main/docker/Dockerfile.jvm)<br>[proxy/src/main/docker/Dockerfile.legacy-jar](../../../../sources/reshaprio__reshapr/proxy/src/main/docker/Dockerfile.legacy-jar)<br>[proxy/src/main/docker/Dockerfile.native](../../../../sources/reshaprio__reshapr/proxy/src/main/docker/Dockerfile.native)<br>[proxy/src/main/docker/Dockerfile.native-micro](../../../../sources/reshaprio__reshapr/proxy/src/main/docker/Dockerfile.native-micro)<br>[install/docker-compose-all-in-one.yml](../../../../sources/reshaprio__reshapr/install/docker-compose-all-in-one.yml)<br>[install/docker-compose-ui-addon.yml](../../../../sources/reshaprio__reshapr/install/docker-compose-ui-addon.yml)<br>[install/docker-compose.yml](../../../../sources/reshaprio__reshapr/install/docker-compose.yml) |
| instruction | 0 | 명확하지 않음 |
| docs | 3 | [README.md](../../../../sources/reshaprio__reshapr/README.md)<br>[dev/github-user-mcp-app/README.md](../../../../sources/reshaprio__reshapr/dev/github-user-mcp-app/README.md)<br>[cli/README.md](../../../../sources/reshaprio__reshapr/cli/README.md) |
| config | 6 | [web-ui/package.json](../../../../sources/reshaprio__reshapr/web-ui/package.json)<br>[web-ui/tsconfig.json](../../../../sources/reshaprio__reshapr/web-ui/tsconfig.json)<br>[dev/github-user-mcp-app/package.json](../../../../sources/reshaprio__reshapr/dev/github-user-mcp-app/package.json)<br>[dev/github-user-mcp-app/tsconfig.json](../../../../sources/reshaprio__reshapr/dev/github-user-mcp-app/tsconfig.json)<br>[cli/package.json](../../../../sources/reshaprio__reshapr/cli/package.json)<br>[cli/tsconfig.json](../../../../sources/reshaprio__reshapr/cli/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 36 | [proxy/src/test/resources/io/reshapr/proxy/mcp/github-api-filters.yaml](../../../../sources/reshaprio__reshapr/proxy/src/test/resources/io/reshapr/proxy/mcp/github-api-filters.yaml)<br>[proxy/src/test/resources/io/reshapr/proxy/mcp/github-api.graphql](../../../../sources/reshaprio__reshapr/proxy/src/test/resources/io/reshapr/proxy/mcp/github-api.graphql)<br>[proxy/src/test/resources/io/reshapr/proxy/mcp/trade-api-3.0.1-openapi.yaml](../../../../sources/reshaprio__reshapr/proxy/src/test/resources/io/reshapr/proxy/mcp/trade-api-3.0.1-openapi.yaml)<br>[proxy/src/test/resources/io/reshapr/proxy/mcp/script/github-user-script-tools.yaml](../../../../sources/reshaprio__reshapr/proxy/src/test/resources/io/reshapr/proxy/mcp/script/github-user-script-tools.yaml)<br>[proxy/src/test/resources/io/reshapr/proxy/mcp/converters/github-api-custom-tools.yaml](../../../../sources/reshaprio__reshapr/proxy/src/test/resources/io/reshapr/proxy/mcp/converters/github-api-custom-tools.yaml)<br>[proxy/src/test/java/io/reshapr/proxy/secret/SecretReferenceResolverTest.java](../../../../sources/reshaprio__reshapr/proxy/src/test/java/io/reshapr/proxy/secret/SecretReferenceResolverTest.java) |
| CI workflow | 4 | [.github/workflows/build-containers.yml](../../../../sources/reshaprio__reshapr/.github/workflows/build-containers.yml)<br>[.github/workflows/build-verify.yml](../../../../sources/reshaprio__reshapr/.github/workflows/build-verify.yml)<br>[.github/workflows/cli-e2e-tests.yml](../../../../sources/reshaprio__reshapr/.github/workflows/cli-e2e-tests.yml)<br>[.github/workflows/release.yml](../../../../sources/reshaprio__reshapr/.github/workflows/release.yml) |
| 컨테이너/배포 | 12 | [web-ui/Dockerfile](../../../../sources/reshaprio__reshapr/web-ui/Dockerfile)<br>[proxy/src/main/docker/Dockerfile.jvm](../../../../sources/reshaprio__reshapr/proxy/src/main/docker/Dockerfile.jvm)<br>[proxy/src/main/docker/Dockerfile.legacy-jar](../../../../sources/reshaprio__reshapr/proxy/src/main/docker/Dockerfile.legacy-jar)<br>[proxy/src/main/docker/Dockerfile.native](../../../../sources/reshaprio__reshapr/proxy/src/main/docker/Dockerfile.native)<br>[proxy/src/main/docker/Dockerfile.native-micro](../../../../sources/reshaprio__reshapr/proxy/src/main/docker/Dockerfile.native-micro)<br>[install/docker-compose-all-in-one.yml](../../../../sources/reshaprio__reshapr/install/docker-compose-all-in-one.yml) |
| 보안/정책 | 41 | [web-ui/src/routes/api/auth/switch-org/+server.ts](../../../../sources/reshaprio__reshapr/web-ui/src/routes/api/auth/switch-org/+server.ts)<br>[web-ui/src/routes/api/auth/session/+server.ts](../../../../sources/reshaprio__reshapr/web-ui/src/routes/api/auth/session/+server.ts)<br>[web-ui/src/routes/api/auth/logout/+server.ts](../../../../sources/reshaprio__reshapr/web-ui/src/routes/api/auth/logout/+server.ts)<br>[web-ui/src/routes/api/auth/login/+server.ts](../../../../sources/reshaprio__reshapr/web-ui/src/routes/api/auth/login/+server.ts)<br>[web-ui/src/routes/api/auth/login/oidc/+server.ts](../../../../sources/reshaprio__reshapr/web-ui/src/routes/api/auth/login/oidc/+server.ts)<br>[web-ui/src/routes/api/auth/callback/oidc/+server.ts](../../../../sources/reshaprio__reshapr/web-ui/src/routes/api/auth/callback/oidc/+server.ts) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | agent instruction 파일이 명확하지 않음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `proxy/src/main/java/io/reshapr/proxy/context/MethodHandlingContext.java`, `proxy/src/main/java/io/reshapr/proxy/context/MethodHandlingInfo.java`, `proxy/src/main/java/io/reshapr/proxy/context/SessionInfo.java`.
2. entrypoint를 따라 실행 흐름 확인: `web-ui/src/app.css`, `web-ui/src/app.d.ts`, `web-ui/src/app.html`.
3. agent/tool runtime 매핑: `proxy/src/main/java/io/reshapr/proxy/context/MethodHandlingContext.java`, `proxy/src/main/java/io/reshapr/proxy/context/MethodHandlingInfo.java`, `proxy/src/main/java/io/reshapr/proxy/context/SessionInfo.java`.
4. retrieval/memory/indexing 확인: `web-ui/src/lib/components/ui/tooltip/index.ts`, `web-ui/src/lib/components/ui/textarea/index.ts`, `web-ui/src/lib/components/ui/tabs/index.ts`.
5. test/eval 파일로 동작 검증: `proxy/src/test/resources/io/reshapr/proxy/mcp/github-api-filters.yaml`, `proxy/src/test/resources/io/reshapr/proxy/mcp/github-api.graphql`, `proxy/src/test/resources/io/reshapr/proxy/mcp/trade-api-3.0.1-openapi.yaml`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 The open source, no code MCP Server for AI Native API Access. 핵심 구조 신호는 Java, pom.xml, README.md, LICENSE, ci, docs이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
