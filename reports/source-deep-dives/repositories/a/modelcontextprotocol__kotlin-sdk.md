# modelcontextprotocol/kotlin-sdk 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

The official Kotlin SDK for Model Context Protocol servers and clients. Maintained in collaboration with JetBrains

## 요약

- 조사 단위: `sources/modelcontextprotocol__kotlin-sdk` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 412 files, 311 directories, depth score 105, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

개발 생산성/DevTools 관점에서 api/server, agent/tool runtime, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 entrypoints=samples/simple-streamable-server/src/main/kotlin/io/modelcontextprotocol/sample/server/server.kt, samples/kotlin-mcp-server/src/main/kotlin/io/modelcontextprotocol/sample/server/server.kt, kotlin-sdk-server/src/commonMain/kotlin/io/modelcontextprotocol/kotlin/sdk/server/Server.kt이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | modelcontextprotocol/kotlin-sdk |
| 주제 | 개발 생산성/DevTools / 개발 생산성/DevTools |
| Region | global |
| Language | Kotlin |
| Stars | 1390 |
| Forks | 217 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/modelcontextprotocol__kotlin-sdk](../../../../sources/modelcontextprotocol__kotlin-sdk) |
| 기존 보고서 | [reports/global-trending/repositories/modelcontextprotocol__kotlin-sdk.md](../../../global-trending/repositories/modelcontextprotocol__kotlin-sdk.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 412 / 311 |
| 관측 최대 깊이 | 12 |
| 상위 디렉터리 | .claude, .github, buildSrc, config, conformance-test, docs, gradle, integration-test, kotlin-sdk, kotlin-sdk-client, kotlin-sdk-core, kotlin-sdk-server, kotlin-sdk-testing, samples, test-utils |
| 상위 확장자 | .kt: 274, .kts: 28, .properties: 26, .md: 20, (none): 12, .yml: 10, .bat: 6, .jar: 6, .toml: 6, .xml: 6, .json: 5, .ts: 5 |
| 소스 패턴 | api/server, agent/tool runtime, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 4 |
| .github | ci surface | 1 |
| buildSrc | source boundary | 1 |
| config | top-level component | 1 |
| conformance-test | validation surface | 1 |
| gradle | top-level component | 1 |
| integration-test | validation surface | 1 |
| kotlin-sdk | top-level component | 1 |
| kotlin-sdk-client | source boundary | 1 |
| kotlin-sdk-core | top-level component | 1 |
| kotlin-sdk-server | source boundary | 1 |
| kotlin-sdk-testing | validation surface | 1 |
| samples | top-level component | 1 |
| test-utils | validation surface | 1 |


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
| entrypoints | [samples/simple-streamable-server/src/main/kotlin/io/modelcontextprotocol/sample/server/server.kt](../../../../sources/modelcontextprotocol__kotlin-sdk/samples/simple-streamable-server/src/main/kotlin/io/modelcontextprotocol/sample/server/server.kt) | entrypoints signal |
| entrypoints | [samples/kotlin-mcp-server/src/main/kotlin/io/modelcontextprotocol/sample/server/server.kt](../../../../sources/modelcontextprotocol__kotlin-sdk/samples/kotlin-mcp-server/src/main/kotlin/io/modelcontextprotocol/sample/server/server.kt) | entrypoints signal |
| entrypoints | [kotlin-sdk-server/src/commonMain/kotlin/io/modelcontextprotocol/kotlin/sdk/server/Server.kt](../../../../sources/modelcontextprotocol__kotlin-sdk/kotlin-sdk-server/src/commonMain/kotlin/io/modelcontextprotocol/kotlin/sdk/server/Server.kt) | entrypoints signal |
| config | [integration-test/src/jvmTest/typescript/package.json](../../../../sources/modelcontextprotocol__kotlin-sdk/integration-test/src/jvmTest/typescript/package.json) | config signal |
| config | [integration-test/src/jvmTest/typescript/tsconfig.json](../../../../sources/modelcontextprotocol__kotlin-sdk/integration-test/src/jvmTest/typescript/tsconfig.json) | config signal |
| ci | [.github/workflows/apidocs.yaml](../../../../sources/modelcontextprotocol__kotlin-sdk/.github/workflows/apidocs.yaml) | ci signal |
| ci | [.github/workflows/automations.yml](../../../../sources/modelcontextprotocol__kotlin-sdk/.github/workflows/automations.yml) | ci signal |
| ci | [.github/workflows/build.yml](../../../../sources/modelcontextprotocol__kotlin-sdk/.github/workflows/build.yml) | ci signal |
| ci | [.github/workflows/codeql.yml](../../../../sources/modelcontextprotocol__kotlin-sdk/.github/workflows/codeql.yml) | ci signal |
| docs | [README.md](../../../../sources/modelcontextprotocol__kotlin-sdk/README.md) | docs signal |
| docs | [samples/README.md](../../../../sources/modelcontextprotocol__kotlin-sdk/samples/README.md) | docs signal |
| docs | [samples/weather-stdio-server/README.md](../../../../sources/modelcontextprotocol__kotlin-sdk/samples/weather-stdio-server/README.md) | docs signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 3 | [samples/simple-streamable-server/src/main/kotlin/io/modelcontextprotocol/sample/server/server.kt](../../../../sources/modelcontextprotocol__kotlin-sdk/samples/simple-streamable-server/src/main/kotlin/io/modelcontextprotocol/sample/server/server.kt)<br>[samples/kotlin-mcp-server/src/main/kotlin/io/modelcontextprotocol/sample/server/server.kt](../../../../sources/modelcontextprotocol__kotlin-sdk/samples/kotlin-mcp-server/src/main/kotlin/io/modelcontextprotocol/sample/server/server.kt)<br>[kotlin-sdk-server/src/commonMain/kotlin/io/modelcontextprotocol/kotlin/sdk/server/Server.kt](../../../../sources/modelcontextprotocol__kotlin-sdk/kotlin-sdk-server/src/commonMain/kotlin/io/modelcontextprotocol/kotlin/sdk/server/Server.kt) |
| agentRuntime | 9 | [AGENTS.md](../../../../sources/modelcontextprotocol__kotlin-sdk/AGENTS.md)<br>[samples/kotlinlang-mcp-server/src/test/kotlin/org/kotlinlang/mcp/tools/GetKotlinlangPageTest.kt](../../../../sources/modelcontextprotocol__kotlin-sdk/samples/kotlinlang-mcp-server/src/test/kotlin/org/kotlinlang/mcp/tools/GetKotlinlangPageTest.kt)<br>[samples/kotlinlang-mcp-server/src/test/kotlin/org/kotlinlang/mcp/tools/SearchKotlinlangTest.kt](../../../../sources/modelcontextprotocol__kotlin-sdk/samples/kotlinlang-mcp-server/src/test/kotlin/org/kotlinlang/mcp/tools/SearchKotlinlangTest.kt)<br>[samples/kotlinlang-mcp-server/src/main/kotlin/org/kotlinlang/mcp/tools/GetKotlinlangPage.kt](../../../../sources/modelcontextprotocol__kotlin-sdk/samples/kotlinlang-mcp-server/src/main/kotlin/org/kotlinlang/mcp/tools/GetKotlinlangPage.kt)<br>[samples/kotlinlang-mcp-server/src/main/kotlin/org/kotlinlang/mcp/tools/SearchKotlinlang.kt](../../../../sources/modelcontextprotocol__kotlin-sdk/samples/kotlinlang-mcp-server/src/main/kotlin/org/kotlinlang/mcp/tools/SearchKotlinlang.kt)<br>[kotlin-sdk-core/src/commonMain/kotlin/io/modelcontextprotocol/kotlin/sdk/types/tools.dsl.kt](../../../../sources/modelcontextprotocol__kotlin-sdk/kotlin-sdk-core/src/commonMain/kotlin/io/modelcontextprotocol/kotlin/sdk/types/tools.dsl.kt)<br>[kotlin-sdk-core/src/commonMain/kotlin/io/modelcontextprotocol/kotlin/sdk/types/tools.kt](../../../../sources/modelcontextprotocol__kotlin-sdk/kotlin-sdk-core/src/commonMain/kotlin/io/modelcontextprotocol/kotlin/sdk/types/tools.kt)<br>[.claude/skills/mcp-docs/SKILL.md](../../../../sources/modelcontextprotocol__kotlin-sdk/.claude/skills/mcp-docs/SKILL.md) |
| mcp | 313 | [test-utils/src/jvmMain/kotlin/io/modelcontextprotocol/kotlin/test/utils/DisabledOnCI.kt](../../../../sources/modelcontextprotocol__kotlin-sdk/test-utils/src/jvmMain/kotlin/io/modelcontextprotocol/kotlin/test/utils/DisabledOnCI.kt)<br>[test-utils/src/jvmMain/kotlin/io/modelcontextprotocol/kotlin/test/utils/platform.jvm.kt](../../../../sources/modelcontextprotocol__kotlin-sdk/test-utils/src/jvmMain/kotlin/io/modelcontextprotocol/kotlin/test/utils/platform.jvm.kt)<br>[test-utils/src/jvmMain/kotlin/io/modelcontextprotocol/kotlin/test/utils/processBuilders.kt](../../../../sources/modelcontextprotocol__kotlin-sdk/test-utils/src/jvmMain/kotlin/io/modelcontextprotocol/kotlin/test/utils/processBuilders.kt)<br>[test-utils/src/jvmMain/kotlin/io/modelcontextprotocol/kotlin/test/utils/processUtils.kt](../../../../sources/modelcontextprotocol__kotlin-sdk/test-utils/src/jvmMain/kotlin/io/modelcontextprotocol/kotlin/test/utils/processUtils.kt)<br>[test-utils/src/jvmMain/kotlin/io/modelcontextprotocol/kotlin/test/utils/Retry.kt](../../../../sources/modelcontextprotocol__kotlin-sdk/test-utils/src/jvmMain/kotlin/io/modelcontextprotocol/kotlin/test/utils/Retry.kt)<br>[test-utils/src/jvmMain/kotlin/io/modelcontextprotocol/kotlin/test/utils/testing.kt](../../../../sources/modelcontextprotocol__kotlin-sdk/test-utils/src/jvmMain/kotlin/io/modelcontextprotocol/kotlin/test/utils/testing.kt)<br>[test-utils/src/jvmMain/kotlin/io/modelcontextprotocol/kotlin/test/utils/TypeScriptRunner.kt](../../../../sources/modelcontextprotocol__kotlin-sdk/test-utils/src/jvmMain/kotlin/io/modelcontextprotocol/kotlin/test/utils/TypeScriptRunner.kt)<br>[test-utils/src/commonMain/kotlin/io/modelcontextprotocol/kotlin/test/utils/ktor.kt](../../../../sources/modelcontextprotocol__kotlin-sdk/test-utils/src/commonMain/kotlin/io/modelcontextprotocol/kotlin/test/utils/ktor.kt) |
| retrieval | 0 | 명확하지 않음 |
| spec | 0 | 명확하지 않음 |
| eval | 127 | [test-utils/build.gradle.kts](../../../../sources/modelcontextprotocol__kotlin-sdk/test-utils/build.gradle.kts)<br>[test-utils/detekt-baseline-main.xml](../../../../sources/modelcontextprotocol__kotlin-sdk/test-utils/detekt-baseline-main.xml)<br>[test-utils/src/jvmMain/kotlin/io/modelcontextprotocol/kotlin/test/utils/DisabledOnCI.kt](../../../../sources/modelcontextprotocol__kotlin-sdk/test-utils/src/jvmMain/kotlin/io/modelcontextprotocol/kotlin/test/utils/DisabledOnCI.kt)<br>[test-utils/src/jvmMain/kotlin/io/modelcontextprotocol/kotlin/test/utils/platform.jvm.kt](../../../../sources/modelcontextprotocol__kotlin-sdk/test-utils/src/jvmMain/kotlin/io/modelcontextprotocol/kotlin/test/utils/platform.jvm.kt)<br>[test-utils/src/jvmMain/kotlin/io/modelcontextprotocol/kotlin/test/utils/processBuilders.kt](../../../../sources/modelcontextprotocol__kotlin-sdk/test-utils/src/jvmMain/kotlin/io/modelcontextprotocol/kotlin/test/utils/processBuilders.kt)<br>[test-utils/src/jvmMain/kotlin/io/modelcontextprotocol/kotlin/test/utils/processUtils.kt](../../../../sources/modelcontextprotocol__kotlin-sdk/test-utils/src/jvmMain/kotlin/io/modelcontextprotocol/kotlin/test/utils/processUtils.kt)<br>[test-utils/src/jvmMain/kotlin/io/modelcontextprotocol/kotlin/test/utils/Retry.kt](../../../../sources/modelcontextprotocol__kotlin-sdk/test-utils/src/jvmMain/kotlin/io/modelcontextprotocol/kotlin/test/utils/Retry.kt)<br>[test-utils/src/jvmMain/kotlin/io/modelcontextprotocol/kotlin/test/utils/testing.kt](../../../../sources/modelcontextprotocol__kotlin-sdk/test-utils/src/jvmMain/kotlin/io/modelcontextprotocol/kotlin/test/utils/testing.kt) |
| security | 12 | [SECURITY.md](../../../../sources/modelcontextprotocol__kotlin-sdk/SECURITY.md)<br>[conformance-test/src/main/kotlin/io/modelcontextprotocol/kotlin/sdk/conformance/auth/authCodeFlow.kt](../../../../sources/modelcontextprotocol__kotlin-sdk/conformance-test/src/main/kotlin/io/modelcontextprotocol/kotlin/sdk/conformance/auth/authCodeFlow.kt)<br>[conformance-test/src/main/kotlin/io/modelcontextprotocol/kotlin/sdk/conformance/auth/basicScenario.kt](../../../../sources/modelcontextprotocol__kotlin-sdk/conformance-test/src/main/kotlin/io/modelcontextprotocol/kotlin/sdk/conformance/auth/basicScenario.kt)<br>[conformance-test/src/main/kotlin/io/modelcontextprotocol/kotlin/sdk/conformance/auth/clientRegistration.kt](../../../../sources/modelcontextprotocol__kotlin-sdk/conformance-test/src/main/kotlin/io/modelcontextprotocol/kotlin/sdk/conformance/auth/clientRegistration.kt)<br>[conformance-test/src/main/kotlin/io/modelcontextprotocol/kotlin/sdk/conformance/auth/crossAppAccessScenario.kt](../../../../sources/modelcontextprotocol__kotlin-sdk/conformance-test/src/main/kotlin/io/modelcontextprotocol/kotlin/sdk/conformance/auth/crossAppAccessScenario.kt)<br>[conformance-test/src/main/kotlin/io/modelcontextprotocol/kotlin/sdk/conformance/auth/discovery.kt](../../../../sources/modelcontextprotocol__kotlin-sdk/conformance-test/src/main/kotlin/io/modelcontextprotocol/kotlin/sdk/conformance/auth/discovery.kt)<br>[conformance-test/src/main/kotlin/io/modelcontextprotocol/kotlin/sdk/conformance/auth/JWTScenario.kt](../../../../sources/modelcontextprotocol__kotlin-sdk/conformance-test/src/main/kotlin/io/modelcontextprotocol/kotlin/sdk/conformance/auth/JWTScenario.kt)<br>[conformance-test/src/main/kotlin/io/modelcontextprotocol/kotlin/sdk/conformance/auth/pkce.kt](../../../../sources/modelcontextprotocol__kotlin-sdk/conformance-test/src/main/kotlin/io/modelcontextprotocol/kotlin/sdk/conformance/auth/pkce.kt) |
| ci | 8 | [.github/workflows/apidocs.yaml](../../../../sources/modelcontextprotocol__kotlin-sdk/.github/workflows/apidocs.yaml)<br>[.github/workflows/automations.yml](../../../../sources/modelcontextprotocol__kotlin-sdk/.github/workflows/automations.yml)<br>[.github/workflows/build.yml](../../../../sources/modelcontextprotocol__kotlin-sdk/.github/workflows/build.yml)<br>[.github/workflows/codeql.yml](../../../../sources/modelcontextprotocol__kotlin-sdk/.github/workflows/codeql.yml)<br>[.github/workflows/conformance.yml](../../../../sources/modelcontextprotocol__kotlin-sdk/.github/workflows/conformance.yml)<br>[.github/workflows/dependabot-auto-merge.yml](../../../../sources/modelcontextprotocol__kotlin-sdk/.github/workflows/dependabot-auto-merge.yml)<br>[.github/workflows/gradle-publish.yml](../../../../sources/modelcontextprotocol__kotlin-sdk/.github/workflows/gradle-publish.yml)<br>[.github/workflows/samples.yml](../../../../sources/modelcontextprotocol__kotlin-sdk/.github/workflows/samples.yml) |
| container | 1 | [samples/kotlinlang-mcp-server/Dockerfile](../../../../sources/modelcontextprotocol__kotlin-sdk/samples/kotlinlang-mcp-server/Dockerfile) |
| instruction | 1 | [AGENTS.md](../../../../sources/modelcontextprotocol__kotlin-sdk/AGENTS.md) |
| docs | 12 | [README.md](../../../../sources/modelcontextprotocol__kotlin-sdk/README.md)<br>[samples/README.md](../../../../sources/modelcontextprotocol__kotlin-sdk/samples/README.md)<br>[samples/weather-stdio-server/README.md](../../../../sources/modelcontextprotocol__kotlin-sdk/samples/weather-stdio-server/README.md)<br>[samples/simple-streamable-server/README.md](../../../../sources/modelcontextprotocol__kotlin-sdk/samples/simple-streamable-server/README.md)<br>[samples/notebooks/README.md](../../../../sources/modelcontextprotocol__kotlin-sdk/samples/notebooks/README.md)<br>[samples/kotlinlang-mcp-server/README.md](../../../../sources/modelcontextprotocol__kotlin-sdk/samples/kotlinlang-mcp-server/README.md)<br>[samples/kotlin-mcp-server/README.md](../../../../sources/modelcontextprotocol__kotlin-sdk/samples/kotlin-mcp-server/README.md)<br>[samples/kotlin-mcp-client/README.md](../../../../sources/modelcontextprotocol__kotlin-sdk/samples/kotlin-mcp-client/README.md) |
| config | 2 | [integration-test/src/jvmTest/typescript/package.json](../../../../sources/modelcontextprotocol__kotlin-sdk/integration-test/src/jvmTest/typescript/package.json)<br>[integration-test/src/jvmTest/typescript/tsconfig.json](../../../../sources/modelcontextprotocol__kotlin-sdk/integration-test/src/jvmTest/typescript/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 127 | [test-utils/build.gradle.kts](../../../../sources/modelcontextprotocol__kotlin-sdk/test-utils/build.gradle.kts)<br>[test-utils/detekt-baseline-main.xml](../../../../sources/modelcontextprotocol__kotlin-sdk/test-utils/detekt-baseline-main.xml)<br>[test-utils/src/jvmMain/kotlin/io/modelcontextprotocol/kotlin/test/utils/DisabledOnCI.kt](../../../../sources/modelcontextprotocol__kotlin-sdk/test-utils/src/jvmMain/kotlin/io/modelcontextprotocol/kotlin/test/utils/DisabledOnCI.kt)<br>[test-utils/src/jvmMain/kotlin/io/modelcontextprotocol/kotlin/test/utils/platform.jvm.kt](../../../../sources/modelcontextprotocol__kotlin-sdk/test-utils/src/jvmMain/kotlin/io/modelcontextprotocol/kotlin/test/utils/platform.jvm.kt)<br>[test-utils/src/jvmMain/kotlin/io/modelcontextprotocol/kotlin/test/utils/processBuilders.kt](../../../../sources/modelcontextprotocol__kotlin-sdk/test-utils/src/jvmMain/kotlin/io/modelcontextprotocol/kotlin/test/utils/processBuilders.kt)<br>[test-utils/src/jvmMain/kotlin/io/modelcontextprotocol/kotlin/test/utils/processUtils.kt](../../../../sources/modelcontextprotocol__kotlin-sdk/test-utils/src/jvmMain/kotlin/io/modelcontextprotocol/kotlin/test/utils/processUtils.kt) |
| CI workflow | 8 | [.github/workflows/apidocs.yaml](../../../../sources/modelcontextprotocol__kotlin-sdk/.github/workflows/apidocs.yaml)<br>[.github/workflows/automations.yml](../../../../sources/modelcontextprotocol__kotlin-sdk/.github/workflows/automations.yml)<br>[.github/workflows/build.yml](../../../../sources/modelcontextprotocol__kotlin-sdk/.github/workflows/build.yml)<br>[.github/workflows/codeql.yml](../../../../sources/modelcontextprotocol__kotlin-sdk/.github/workflows/codeql.yml)<br>[.github/workflows/conformance.yml](../../../../sources/modelcontextprotocol__kotlin-sdk/.github/workflows/conformance.yml)<br>[.github/workflows/dependabot-auto-merge.yml](../../../../sources/modelcontextprotocol__kotlin-sdk/.github/workflows/dependabot-auto-merge.yml) |
| 컨테이너/배포 | 1 | [samples/kotlinlang-mcp-server/Dockerfile](../../../../sources/modelcontextprotocol__kotlin-sdk/samples/kotlinlang-mcp-server/Dockerfile) |
| 보안/정책 | 12 | [SECURITY.md](../../../../sources/modelcontextprotocol__kotlin-sdk/SECURITY.md)<br>[conformance-test/src/main/kotlin/io/modelcontextprotocol/kotlin/sdk/conformance/auth/authCodeFlow.kt](../../../../sources/modelcontextprotocol__kotlin-sdk/conformance-test/src/main/kotlin/io/modelcontextprotocol/kotlin/sdk/conformance/auth/authCodeFlow.kt)<br>[conformance-test/src/main/kotlin/io/modelcontextprotocol/kotlin/sdk/conformance/auth/basicScenario.kt](../../../../sources/modelcontextprotocol__kotlin-sdk/conformance-test/src/main/kotlin/io/modelcontextprotocol/kotlin/sdk/conformance/auth/basicScenario.kt)<br>[conformance-test/src/main/kotlin/io/modelcontextprotocol/kotlin/sdk/conformance/auth/clientRegistration.kt](../../../../sources/modelcontextprotocol__kotlin-sdk/conformance-test/src/main/kotlin/io/modelcontextprotocol/kotlin/sdk/conformance/auth/clientRegistration.kt)<br>[conformance-test/src/main/kotlin/io/modelcontextprotocol/kotlin/sdk/conformance/auth/crossAppAccessScenario.kt](../../../../sources/modelcontextprotocol__kotlin-sdk/conformance-test/src/main/kotlin/io/modelcontextprotocol/kotlin/sdk/conformance/auth/crossAppAccessScenario.kt)<br>[conformance-test/src/main/kotlin/io/modelcontextprotocol/kotlin/sdk/conformance/auth/discovery.kt](../../../../sources/modelcontextprotocol__kotlin-sdk/conformance-test/src/main/kotlin/io/modelcontextprotocol/kotlin/sdk/conformance/auth/discovery.kt) |
| 에이전트 지시문 | 1 | [AGENTS.md](../../../../sources/modelcontextprotocol__kotlin-sdk/AGENTS.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `samples/simple-streamable-server/src/main/kotlin/io/modelcontextprotocol/sample/server/server.kt`, `samples/kotlin-mcp-server/src/main/kotlin/io/modelcontextprotocol/sample/server/server.kt`, `kotlin-sdk-server/src/commonMain/kotlin/io/modelcontextprotocol/kotlin/sdk/server/Server.kt`.
2. entrypoint를 따라 실행 흐름 확인: `samples/simple-streamable-server/src/main/kotlin/io/modelcontextprotocol/sample/server/server.kt`, `samples/kotlin-mcp-server/src/main/kotlin/io/modelcontextprotocol/sample/server/server.kt`, `kotlin-sdk-server/src/commonMain/kotlin/io/modelcontextprotocol/kotlin/sdk/server/Server.kt`.
3. agent/tool runtime 매핑: `AGENTS.md`, `samples/kotlinlang-mcp-server/src/test/kotlin/org/kotlinlang/mcp/tools/GetKotlinlangPageTest.kt`, `samples/kotlinlang-mcp-server/src/test/kotlin/org/kotlinlang/mcp/tools/SearchKotlinlangTest.kt`.
4. test/eval 파일로 동작 검증: `test-utils/build.gradle.kts`, `test-utils/detekt-baseline-main.xml`, `test-utils/src/jvmMain/kotlin/io/modelcontextprotocol/kotlin/test/utils/DisabledOnCI.kt`.

## 기존 레포 인사이트

개발 생산성/DevTools 관점에서 The official Kotlin SDK for Model Context Protocol servers and clients. Maintained in collaboration with JetBrains. 핵심 구조 신호는 Kotlin, README.md, AGENTS.md, LICENSE, tests, ci이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 개발 생산성/DevTools 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
