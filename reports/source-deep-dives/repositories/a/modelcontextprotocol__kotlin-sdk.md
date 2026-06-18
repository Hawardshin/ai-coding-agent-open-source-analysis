# modelcontextprotocol/kotlin-sdk Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

The official Kotlin SDK for Model Context Protocol servers and clients. Maintained in collaboration with JetBrains

## 요약

- 조사 단위: `sources/modelcontextprotocol__kotlin-sdk` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 412 files, 311 directories, depth score 111, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

개발 생산성/DevTools 관점에서 api/server, agent/tool runtime, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 entrypoints=samples/simple-streamable-server/src/main/kotlin/io/modelcontextprotocol/sample/server/server.kt, samples/kotlin-mcp-server/src/main/kotlin/io/modelcontextprotocol/sample/server/server.kt, kotlin-sdk-server/src/commonMain/kotlin/io/modelcontextprotocol/kotlin/sdk/server/Server.kt이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | modelcontextprotocol/kotlin-sdk |
| Topic | Developer Productivity and DevTools / 개발 생산성/DevTools |
| Region | global |
| Language | Kotlin |
| Stars | 1390 |
| Forks | 217 |
| License | none |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/modelcontextprotocol__kotlin-sdk](../../../../sources/modelcontextprotocol__kotlin-sdk) |
| Existing report | [reports/global-trending/repositories/modelcontextprotocol__kotlin-sdk.md](../../../global-trending/repositories/modelcontextprotocol__kotlin-sdk.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 412 / 311 |
| Max observed depth | 12 |
| Top directories | .claude, .github, buildSrc, config, conformance-test, docs, gradle, integration-test, kotlin-sdk, kotlin-sdk-client, kotlin-sdk-core, kotlin-sdk-server, kotlin-sdk-testing, samples, test-utils |
| Top extensions | .kt: 274, .kts: 28, .properties: 26, .md: 20, (none): 12, .yml: 10, .bat: 6, .jar: 6, .toml: 6, .xml: 6, .json: 5, .ts: 5 |
| Source patterns | api/server, agent/tool runtime, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
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


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 3 | [samples/simple-streamable-server/src/main/kotlin/io/modelcontextprotocol/sample/server/server.kt](../../../../sources/modelcontextprotocol__kotlin-sdk/samples/simple-streamable-server/src/main/kotlin/io/modelcontextprotocol/sample/server/server.kt)<br>[samples/kotlin-mcp-server/src/main/kotlin/io/modelcontextprotocol/sample/server/server.kt](../../../../sources/modelcontextprotocol__kotlin-sdk/samples/kotlin-mcp-server/src/main/kotlin/io/modelcontextprotocol/sample/server/server.kt)<br>[kotlin-sdk-server/src/commonMain/kotlin/io/modelcontextprotocol/kotlin/sdk/server/Server.kt](../../../../sources/modelcontextprotocol__kotlin-sdk/kotlin-sdk-server/src/commonMain/kotlin/io/modelcontextprotocol/kotlin/sdk/server/Server.kt) |
| agentRuntime | 9 | [AGENTS.md](../../../../sources/modelcontextprotocol__kotlin-sdk/AGENTS.md)<br>[samples/kotlinlang-mcp-server/src/test/kotlin/org/kotlinlang/mcp/tools/GetKotlinlangPageTest.kt](../../../../sources/modelcontextprotocol__kotlin-sdk/samples/kotlinlang-mcp-server/src/test/kotlin/org/kotlinlang/mcp/tools/GetKotlinlangPageTest.kt)<br>[samples/kotlinlang-mcp-server/src/test/kotlin/org/kotlinlang/mcp/tools/SearchKotlinlangTest.kt](../../../../sources/modelcontextprotocol__kotlin-sdk/samples/kotlinlang-mcp-server/src/test/kotlin/org/kotlinlang/mcp/tools/SearchKotlinlangTest.kt)<br>[samples/kotlinlang-mcp-server/src/main/kotlin/org/kotlinlang/mcp/tools/GetKotlinlangPage.kt](../../../../sources/modelcontextprotocol__kotlin-sdk/samples/kotlinlang-mcp-server/src/main/kotlin/org/kotlinlang/mcp/tools/GetKotlinlangPage.kt)<br>[samples/kotlinlang-mcp-server/src/main/kotlin/org/kotlinlang/mcp/tools/SearchKotlinlang.kt](../../../../sources/modelcontextprotocol__kotlin-sdk/samples/kotlinlang-mcp-server/src/main/kotlin/org/kotlinlang/mcp/tools/SearchKotlinlang.kt)<br>[kotlin-sdk-core/src/commonMain/kotlin/io/modelcontextprotocol/kotlin/sdk/types/tools.dsl.kt](../../../../sources/modelcontextprotocol__kotlin-sdk/kotlin-sdk-core/src/commonMain/kotlin/io/modelcontextprotocol/kotlin/sdk/types/tools.dsl.kt)<br>[kotlin-sdk-core/src/commonMain/kotlin/io/modelcontextprotocol/kotlin/sdk/types/tools.kt](../../../../sources/modelcontextprotocol__kotlin-sdk/kotlin-sdk-core/src/commonMain/kotlin/io/modelcontextprotocol/kotlin/sdk/types/tools.kt)<br>[.claude/skills/mcp-docs/SKILL.md](../../../../sources/modelcontextprotocol__kotlin-sdk/.claude/skills/mcp-docs/SKILL.md) |
| mcp | 313 | [test-utils/src/jvmMain/kotlin/io/modelcontextprotocol/kotlin/test/utils/DisabledOnCI.kt](../../../../sources/modelcontextprotocol__kotlin-sdk/test-utils/src/jvmMain/kotlin/io/modelcontextprotocol/kotlin/test/utils/DisabledOnCI.kt)<br>[test-utils/src/jvmMain/kotlin/io/modelcontextprotocol/kotlin/test/utils/platform.jvm.kt](../../../../sources/modelcontextprotocol__kotlin-sdk/test-utils/src/jvmMain/kotlin/io/modelcontextprotocol/kotlin/test/utils/platform.jvm.kt)<br>[test-utils/src/jvmMain/kotlin/io/modelcontextprotocol/kotlin/test/utils/processBuilders.kt](../../../../sources/modelcontextprotocol__kotlin-sdk/test-utils/src/jvmMain/kotlin/io/modelcontextprotocol/kotlin/test/utils/processBuilders.kt)<br>[test-utils/src/jvmMain/kotlin/io/modelcontextprotocol/kotlin/test/utils/processUtils.kt](../../../../sources/modelcontextprotocol__kotlin-sdk/test-utils/src/jvmMain/kotlin/io/modelcontextprotocol/kotlin/test/utils/processUtils.kt)<br>[test-utils/src/jvmMain/kotlin/io/modelcontextprotocol/kotlin/test/utils/Retry.kt](../../../../sources/modelcontextprotocol__kotlin-sdk/test-utils/src/jvmMain/kotlin/io/modelcontextprotocol/kotlin/test/utils/Retry.kt)<br>[test-utils/src/jvmMain/kotlin/io/modelcontextprotocol/kotlin/test/utils/testing.kt](../../../../sources/modelcontextprotocol__kotlin-sdk/test-utils/src/jvmMain/kotlin/io/modelcontextprotocol/kotlin/test/utils/testing.kt)<br>[test-utils/src/jvmMain/kotlin/io/modelcontextprotocol/kotlin/test/utils/TypeScriptRunner.kt](../../../../sources/modelcontextprotocol__kotlin-sdk/test-utils/src/jvmMain/kotlin/io/modelcontextprotocol/kotlin/test/utils/TypeScriptRunner.kt)<br>[test-utils/src/commonMain/kotlin/io/modelcontextprotocol/kotlin/test/utils/ktor.kt](../../../../sources/modelcontextprotocol__kotlin-sdk/test-utils/src/commonMain/kotlin/io/modelcontextprotocol/kotlin/test/utils/ktor.kt) |
| retrieval | 0 | not obvious |
| spec | 0 | not obvious |
| eval | 127 | [test-utils/build.gradle.kts](../../../../sources/modelcontextprotocol__kotlin-sdk/test-utils/build.gradle.kts)<br>[test-utils/detekt-baseline-main.xml](../../../../sources/modelcontextprotocol__kotlin-sdk/test-utils/detekt-baseline-main.xml)<br>[test-utils/src/jvmMain/kotlin/io/modelcontextprotocol/kotlin/test/utils/DisabledOnCI.kt](../../../../sources/modelcontextprotocol__kotlin-sdk/test-utils/src/jvmMain/kotlin/io/modelcontextprotocol/kotlin/test/utils/DisabledOnCI.kt)<br>[test-utils/src/jvmMain/kotlin/io/modelcontextprotocol/kotlin/test/utils/platform.jvm.kt](../../../../sources/modelcontextprotocol__kotlin-sdk/test-utils/src/jvmMain/kotlin/io/modelcontextprotocol/kotlin/test/utils/platform.jvm.kt)<br>[test-utils/src/jvmMain/kotlin/io/modelcontextprotocol/kotlin/test/utils/processBuilders.kt](../../../../sources/modelcontextprotocol__kotlin-sdk/test-utils/src/jvmMain/kotlin/io/modelcontextprotocol/kotlin/test/utils/processBuilders.kt)<br>[test-utils/src/jvmMain/kotlin/io/modelcontextprotocol/kotlin/test/utils/processUtils.kt](../../../../sources/modelcontextprotocol__kotlin-sdk/test-utils/src/jvmMain/kotlin/io/modelcontextprotocol/kotlin/test/utils/processUtils.kt)<br>[test-utils/src/jvmMain/kotlin/io/modelcontextprotocol/kotlin/test/utils/Retry.kt](../../../../sources/modelcontextprotocol__kotlin-sdk/test-utils/src/jvmMain/kotlin/io/modelcontextprotocol/kotlin/test/utils/Retry.kt)<br>[test-utils/src/jvmMain/kotlin/io/modelcontextprotocol/kotlin/test/utils/testing.kt](../../../../sources/modelcontextprotocol__kotlin-sdk/test-utils/src/jvmMain/kotlin/io/modelcontextprotocol/kotlin/test/utils/testing.kt) |
| security | 12 | [SECURITY.md](../../../../sources/modelcontextprotocol__kotlin-sdk/SECURITY.md)<br>[conformance-test/src/main/kotlin/io/modelcontextprotocol/kotlin/sdk/conformance/auth/authCodeFlow.kt](../../../../sources/modelcontextprotocol__kotlin-sdk/conformance-test/src/main/kotlin/io/modelcontextprotocol/kotlin/sdk/conformance/auth/authCodeFlow.kt)<br>[conformance-test/src/main/kotlin/io/modelcontextprotocol/kotlin/sdk/conformance/auth/basicScenario.kt](../../../../sources/modelcontextprotocol__kotlin-sdk/conformance-test/src/main/kotlin/io/modelcontextprotocol/kotlin/sdk/conformance/auth/basicScenario.kt)<br>[conformance-test/src/main/kotlin/io/modelcontextprotocol/kotlin/sdk/conformance/auth/clientRegistration.kt](../../../../sources/modelcontextprotocol__kotlin-sdk/conformance-test/src/main/kotlin/io/modelcontextprotocol/kotlin/sdk/conformance/auth/clientRegistration.kt)<br>[conformance-test/src/main/kotlin/io/modelcontextprotocol/kotlin/sdk/conformance/auth/crossAppAccessScenario.kt](../../../../sources/modelcontextprotocol__kotlin-sdk/conformance-test/src/main/kotlin/io/modelcontextprotocol/kotlin/sdk/conformance/auth/crossAppAccessScenario.kt)<br>[conformance-test/src/main/kotlin/io/modelcontextprotocol/kotlin/sdk/conformance/auth/discovery.kt](../../../../sources/modelcontextprotocol__kotlin-sdk/conformance-test/src/main/kotlin/io/modelcontextprotocol/kotlin/sdk/conformance/auth/discovery.kt)<br>[conformance-test/src/main/kotlin/io/modelcontextprotocol/kotlin/sdk/conformance/auth/JWTScenario.kt](../../../../sources/modelcontextprotocol__kotlin-sdk/conformance-test/src/main/kotlin/io/modelcontextprotocol/kotlin/sdk/conformance/auth/JWTScenario.kt)<br>[conformance-test/src/main/kotlin/io/modelcontextprotocol/kotlin/sdk/conformance/auth/pkce.kt](../../../../sources/modelcontextprotocol__kotlin-sdk/conformance-test/src/main/kotlin/io/modelcontextprotocol/kotlin/sdk/conformance/auth/pkce.kt) |
| ci | 8 | [.github/workflows/apidocs.yaml](../../../../sources/modelcontextprotocol__kotlin-sdk/.github/workflows/apidocs.yaml)<br>[.github/workflows/automations.yml](../../../../sources/modelcontextprotocol__kotlin-sdk/.github/workflows/automations.yml)<br>[.github/workflows/build.yml](../../../../sources/modelcontextprotocol__kotlin-sdk/.github/workflows/build.yml)<br>[.github/workflows/codeql.yml](../../../../sources/modelcontextprotocol__kotlin-sdk/.github/workflows/codeql.yml)<br>[.github/workflows/conformance.yml](../../../../sources/modelcontextprotocol__kotlin-sdk/.github/workflows/conformance.yml)<br>[.github/workflows/dependabot-auto-merge.yml](../../../../sources/modelcontextprotocol__kotlin-sdk/.github/workflows/dependabot-auto-merge.yml)<br>[.github/workflows/gradle-publish.yml](../../../../sources/modelcontextprotocol__kotlin-sdk/.github/workflows/gradle-publish.yml)<br>[.github/workflows/samples.yml](../../../../sources/modelcontextprotocol__kotlin-sdk/.github/workflows/samples.yml) |
| container | 1 | [samples/kotlinlang-mcp-server/Dockerfile](../../../../sources/modelcontextprotocol__kotlin-sdk/samples/kotlinlang-mcp-server/Dockerfile) |
| instruction | 1 | [AGENTS.md](../../../../sources/modelcontextprotocol__kotlin-sdk/AGENTS.md) |
| docs | 12 | [README.md](../../../../sources/modelcontextprotocol__kotlin-sdk/README.md)<br>[samples/README.md](../../../../sources/modelcontextprotocol__kotlin-sdk/samples/README.md)<br>[samples/weather-stdio-server/README.md](../../../../sources/modelcontextprotocol__kotlin-sdk/samples/weather-stdio-server/README.md)<br>[samples/simple-streamable-server/README.md](../../../../sources/modelcontextprotocol__kotlin-sdk/samples/simple-streamable-server/README.md)<br>[samples/notebooks/README.md](../../../../sources/modelcontextprotocol__kotlin-sdk/samples/notebooks/README.md)<br>[samples/kotlinlang-mcp-server/README.md](../../../../sources/modelcontextprotocol__kotlin-sdk/samples/kotlinlang-mcp-server/README.md)<br>[samples/kotlin-mcp-server/README.md](../../../../sources/modelcontextprotocol__kotlin-sdk/samples/kotlin-mcp-server/README.md)<br>[samples/kotlin-mcp-client/README.md](../../../../sources/modelcontextprotocol__kotlin-sdk/samples/kotlin-mcp-client/README.md) |
| config | 2 | [integration-test/src/jvmTest/typescript/package.json](../../../../sources/modelcontextprotocol__kotlin-sdk/integration-test/src/jvmTest/typescript/package.json)<br>[integration-test/src/jvmTest/typescript/tsconfig.json](../../../../sources/modelcontextprotocol__kotlin-sdk/integration-test/src/jvmTest/typescript/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 127 | [test-utils/build.gradle.kts](../../../../sources/modelcontextprotocol__kotlin-sdk/test-utils/build.gradle.kts)<br>[test-utils/detekt-baseline-main.xml](../../../../sources/modelcontextprotocol__kotlin-sdk/test-utils/detekt-baseline-main.xml)<br>[test-utils/src/jvmMain/kotlin/io/modelcontextprotocol/kotlin/test/utils/DisabledOnCI.kt](../../../../sources/modelcontextprotocol__kotlin-sdk/test-utils/src/jvmMain/kotlin/io/modelcontextprotocol/kotlin/test/utils/DisabledOnCI.kt)<br>[test-utils/src/jvmMain/kotlin/io/modelcontextprotocol/kotlin/test/utils/platform.jvm.kt](../../../../sources/modelcontextprotocol__kotlin-sdk/test-utils/src/jvmMain/kotlin/io/modelcontextprotocol/kotlin/test/utils/platform.jvm.kt)<br>[test-utils/src/jvmMain/kotlin/io/modelcontextprotocol/kotlin/test/utils/processBuilders.kt](../../../../sources/modelcontextprotocol__kotlin-sdk/test-utils/src/jvmMain/kotlin/io/modelcontextprotocol/kotlin/test/utils/processBuilders.kt)<br>[test-utils/src/jvmMain/kotlin/io/modelcontextprotocol/kotlin/test/utils/processUtils.kt](../../../../sources/modelcontextprotocol__kotlin-sdk/test-utils/src/jvmMain/kotlin/io/modelcontextprotocol/kotlin/test/utils/processUtils.kt) |
| CI workflows | 8 | [.github/workflows/apidocs.yaml](../../../../sources/modelcontextprotocol__kotlin-sdk/.github/workflows/apidocs.yaml)<br>[.github/workflows/automations.yml](../../../../sources/modelcontextprotocol__kotlin-sdk/.github/workflows/automations.yml)<br>[.github/workflows/build.yml](../../../../sources/modelcontextprotocol__kotlin-sdk/.github/workflows/build.yml)<br>[.github/workflows/codeql.yml](../../../../sources/modelcontextprotocol__kotlin-sdk/.github/workflows/codeql.yml)<br>[.github/workflows/conformance.yml](../../../../sources/modelcontextprotocol__kotlin-sdk/.github/workflows/conformance.yml)<br>[.github/workflows/dependabot-auto-merge.yml](../../../../sources/modelcontextprotocol__kotlin-sdk/.github/workflows/dependabot-auto-merge.yml) |
| Containers / deploy | 1 | [samples/kotlinlang-mcp-server/Dockerfile](../../../../sources/modelcontextprotocol__kotlin-sdk/samples/kotlinlang-mcp-server/Dockerfile) |
| Security / policy | 12 | [SECURITY.md](../../../../sources/modelcontextprotocol__kotlin-sdk/SECURITY.md)<br>[conformance-test/src/main/kotlin/io/modelcontextprotocol/kotlin/sdk/conformance/auth/authCodeFlow.kt](../../../../sources/modelcontextprotocol__kotlin-sdk/conformance-test/src/main/kotlin/io/modelcontextprotocol/kotlin/sdk/conformance/auth/authCodeFlow.kt)<br>[conformance-test/src/main/kotlin/io/modelcontextprotocol/kotlin/sdk/conformance/auth/basicScenario.kt](../../../../sources/modelcontextprotocol__kotlin-sdk/conformance-test/src/main/kotlin/io/modelcontextprotocol/kotlin/sdk/conformance/auth/basicScenario.kt)<br>[conformance-test/src/main/kotlin/io/modelcontextprotocol/kotlin/sdk/conformance/auth/clientRegistration.kt](../../../../sources/modelcontextprotocol__kotlin-sdk/conformance-test/src/main/kotlin/io/modelcontextprotocol/kotlin/sdk/conformance/auth/clientRegistration.kt)<br>[conformance-test/src/main/kotlin/io/modelcontextprotocol/kotlin/sdk/conformance/auth/crossAppAccessScenario.kt](../../../../sources/modelcontextprotocol__kotlin-sdk/conformance-test/src/main/kotlin/io/modelcontextprotocol/kotlin/sdk/conformance/auth/crossAppAccessScenario.kt)<br>[conformance-test/src/main/kotlin/io/modelcontextprotocol/kotlin/sdk/conformance/auth/discovery.kt](../../../../sources/modelcontextprotocol__kotlin-sdk/conformance-test/src/main/kotlin/io/modelcontextprotocol/kotlin/sdk/conformance/auth/discovery.kt) |
| Agent instructions | 1 | [AGENTS.md](../../../../sources/modelcontextprotocol__kotlin-sdk/AGENTS.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `samples/simple-streamable-server/src/main/kotlin/io/modelcontextprotocol/sample/server/server.kt`, `samples/kotlin-mcp-server/src/main/kotlin/io/modelcontextprotocol/sample/server/server.kt`, `kotlin-sdk-server/src/commonMain/kotlin/io/modelcontextprotocol/kotlin/sdk/server/Server.kt`.
2. Trace execution through entrypoints: `samples/simple-streamable-server/src/main/kotlin/io/modelcontextprotocol/sample/server/server.kt`, `samples/kotlin-mcp-server/src/main/kotlin/io/modelcontextprotocol/sample/server/server.kt`, `kotlin-sdk-server/src/commonMain/kotlin/io/modelcontextprotocol/kotlin/sdk/server/Server.kt`.
3. Map agent/tool runtime through: `AGENTS.md`, `samples/kotlinlang-mcp-server/src/test/kotlin/org/kotlinlang/mcp/tools/GetKotlinlangPageTest.kt`, `samples/kotlinlang-mcp-server/src/test/kotlin/org/kotlinlang/mcp/tools/SearchKotlinlangTest.kt`.
4. Verify behavior through test/eval files: `test-utils/build.gradle.kts`, `test-utils/detekt-baseline-main.xml`, `test-utils/src/jvmMain/kotlin/io/modelcontextprotocol/kotlin/test/utils/DisabledOnCI.kt`.

## Existing Repository Insight

개발 생산성/DevTools 관점에서 The official Kotlin SDK for Model Context Protocol servers and clients. Maintained in collaboration with JetBrains. 핵심 구조 신호는 Kotlin, README.md, AGENTS.md, LICENSE, tests, ci이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 개발 생산성/DevTools 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
