# opensolon/solon Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

🔥 Java enterprise application development framework for full scenario: Restrained, Efficient, Open, Ecologicalll!!! 700% higher concurrency 50% memory savings Startup is 10 times faster. Packing 90% smaller; Compatible with java8 ~ java25; Supports LTS. (Replaceable spring)

## 요약

- 조사 단위: `sources/opensolon__solon` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 3,286 files, 2,714 directories, depth score 80, key references 6개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 agent/tool runtime, retrieval/vector path, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=solon-projects/solon-tool/solon-maven-plugin/src/main/java/org/noear/solon/maven/plugin/tools/SolonMavenUtil.java, solon-projects/solon-tool/solon-maven-plugin/src/main/java/org/noear/solon/maven/plugin/tools/StringUtils.java, solon-projects/solon-tool/solon-gradle-plugin/src/main/java/org/noear/solon/gradle/tools/MainClassFinder.java이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 6개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | opensolon/solon |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Java |
| Stars | 2749 |
| Forks | 261 |
| License | none |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/opensolon__solon](../../../../sources/opensolon__solon) |
| Existing report | [reports/global-trending/repositories/opensolon__solon.md](../../../global-trending/repositories/opensolon__solon.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 3286 / 2714 |
| Max observed depth | 13 |
| Top directories | __hatch, __release, __test, .gitee, .github, solon, solon-parent, solon-projects, solon-shortcuts, style |
| Top extensions | .java: 2539, .xml: 159, (none): 141, .yml: 109, .properties: 106, .md: 90, .json: 32, .jks: 16, .htm: 10, .cfg: 8, .crt: 8, .html: 8 |
| Source patterns | agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| __hatch | top-level component | 1 |
| __release | top-level component | 1 |
| __test | validation surface | 1 |
| .github | ci surface | 1 |
| solon | top-level component | 1 |
| solon-parent | top-level component | 1 |
| solon-projects | top-level component | 1 |
| solon-shortcuts | top-level component | 1 |
| style | top-level component | 1 |


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
| agentRuntime | [solon-projects/solon-tool/solon-maven-plugin/src/main/java/org/noear/solon/maven/plugin/tools/SolonMavenUtil.java](../../../../sources/opensolon__solon/solon-projects/solon-tool/solon-maven-plugin/src/main/java/org/noear/solon/maven/plugin/tools/SolonMavenUtil.java) | agentRuntime signal |
| agentRuntime | [solon-projects/solon-tool/solon-maven-plugin/src/main/java/org/noear/solon/maven/plugin/tools/StringUtils.java](../../../../sources/opensolon__solon/solon-projects/solon-tool/solon-maven-plugin/src/main/java/org/noear/solon/maven/plugin/tools/StringUtils.java) | agentRuntime signal |
| agentRuntime | [solon-projects/solon-tool/solon-gradle-plugin/src/main/java/org/noear/solon/gradle/tools/MainClassFinder.java](../../../../sources/opensolon__solon/solon-projects/solon-tool/solon-gradle-plugin/src/main/java/org/noear/solon/gradle/tools/MainClassFinder.java) | agentRuntime signal |
| agentRuntime | [solon-projects/nami/nami/src/main/java/org/noear/nami/Context.java](../../../../sources/opensolon__solon/solon-projects/nami/nami/src/main/java/org/noear/nami/Context.java) | agentRuntime signal |
| eval | [solon-projects/solon-web/solon-web-webservices/src/test/resources/app.properties](../../../../sources/opensolon__solon/solon-projects/solon-web/solon-web-webservices/src/test/resources/app.properties) | eval support |
| eval | [solon-projects/solon-web/solon-web-webservices/src/test/java/demo/server/ServerTest.java](../../../../sources/opensolon__solon/solon-projects/solon-web/solon-web-webservices/src/test/java/demo/server/ServerTest.java) | eval support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 7 | [solon-projects/solon-tool/solon-maven-plugin/src/main/java/org/noear/solon/maven/plugin/tools/SolonMavenUtil.java](../../../../sources/opensolon__solon/solon-projects/solon-tool/solon-maven-plugin/src/main/java/org/noear/solon/maven/plugin/tools/SolonMavenUtil.java)<br>[solon-projects/solon-tool/solon-maven-plugin/src/main/java/org/noear/solon/maven/plugin/tools/StringUtils.java](../../../../sources/opensolon__solon/solon-projects/solon-tool/solon-maven-plugin/src/main/java/org/noear/solon/maven/plugin/tools/StringUtils.java)<br>[solon-projects/solon-tool/solon-gradle-plugin/src/main/java/org/noear/solon/gradle/tools/MainClassFinder.java](../../../../sources/opensolon__solon/solon-projects/solon-tool/solon-gradle-plugin/src/main/java/org/noear/solon/gradle/tools/MainClassFinder.java)<br>[solon-projects/nami/nami/src/main/java/org/noear/nami/Context.java](../../../../sources/opensolon__solon/solon-projects/nami/nami/src/main/java/org/noear/nami/Context.java)<br>[solon/src/main/java/org/noear/solon/core/handle/Context.java](../../../../sources/opensolon__solon/solon/src/main/java/org/noear/solon/core/handle/Context.java)<br>[__test/src/test/java/features/tool/BindPropsProcessorTest.java](../../../../sources/opensolon__solon/__test/src/test/java/features/tool/BindPropsProcessorTest.java)<br>[__test/src/test/java/features/tool/ComplexBindPropsProcessorTest.java](../../../../sources/opensolon__solon/__test/src/test/java/features/tool/ComplexBindPropsProcessorTest.java) |
| mcp | 0 | not obvious |
| retrieval | 1 | [__test/src/main/resources/static/test/index.html](../../../../sources/opensolon__solon/__test/src/main/resources/static/test/index.html) |
| spec | 0 | not obvious |
| eval | 1482 | [solon-projects/solon-web/solon-web-webservices/src/test/resources/app.properties](../../../../sources/opensolon__solon/solon-projects/solon-web/solon-web-webservices/src/test/resources/app.properties)<br>[solon-projects/solon-web/solon-web-webservices/src/test/java/demo/server/ServerTest.java](../../../../sources/opensolon__solon/solon-projects/solon-web/solon-web-webservices/src/test/java/demo/server/ServerTest.java)<br>[solon-projects/solon-web/solon-web-webservices/src/test/java/demo/client2/ClientTest2.java](../../../../sources/opensolon__solon/solon-projects/solon-web/solon-web-webservices/src/test/java/demo/client2/ClientTest2.java)<br>[solon-projects/solon-web/solon-web-webservices/src/test/java/demo/client/ClientTest.java](../../../../sources/opensolon__solon/solon-projects/solon-web/solon-web-webservices/src/test/java/demo/client/ClientTest.java)<br>[solon-projects/solon-web/solon-web-webdav/src/test/java/org/noear/solon/web/webdav/test/Demo.java](../../../../sources/opensolon__solon/solon-projects/solon-web/solon-web-webdav/src/test/java/org/noear/solon/web/webdav/test/Demo.java)<br>[solon-projects/solon-web/solon-web-staticfiles/src/test/resources/app.yml](../../../../sources/opensolon__solon/solon-projects/solon-web/solon-web-staticfiles/src/test/resources/app.yml)<br>[solon-projects/solon-web/solon-web-staticfiles/src/test/resources/META-INF/resources/doc.html](../../../../sources/opensolon__solon/solon-projects/solon-web/solon-web-staticfiles/src/test/resources/META-INF/resources/doc.html)<br>[solon-projects/solon-web/solon-web-staticfiles/src/test/resources/META-INF/resources/webjars/hello.html](../../../../sources/opensolon__solon/solon-projects/solon-web/solon-web-staticfiles/src/test/resources/META-INF/resources/webjars/hello.html) |
| security | 165 | [solon-projects/solon-security/solon-security-web/NOTICE](../../../../sources/opensolon__solon/solon-projects/solon-security/solon-security-web/NOTICE)<br>[solon-projects/solon-security/solon-security-web/pom.xml](../../../../sources/opensolon__solon/solon-projects/solon-security/solon-security-web/pom.xml)<br>[solon-projects/solon-security/solon-security-web/README.md](../../../../sources/opensolon__solon/solon-projects/solon-security/solon-security-web/README.md)<br>[solon-projects/solon-security/solon-security-web/src/test/java/demo/security/web/DemoFilter.java](../../../../sources/opensolon__solon/solon-projects/solon-security/solon-security-web/src/test/java/demo/security/web/DemoFilter.java)<br>[solon-projects/solon-security/solon-security-web/src/main/java/org/noear/solon/security/web/SecurityFilter.java](../../../../sources/opensolon__solon/solon-projects/solon-security/solon-security-web/src/main/java/org/noear/solon/security/web/SecurityFilter.java)<br>[solon-projects/solon-security/solon-security-web/src/main/java/org/noear/solon/security/web/header/CacheControlHeadersHandler.java](../../../../sources/opensolon__solon/solon-projects/solon-security/solon-security-web/src/main/java/org/noear/solon/security/web/header/CacheControlHeadersHandler.java)<br>[solon-projects/solon-security/solon-security-web/src/main/java/org/noear/solon/security/web/header/HstsHeaderHandler.java](../../../../sources/opensolon__solon/solon-projects/solon-security/solon-security-web/src/main/java/org/noear/solon/security/web/header/HstsHeaderHandler.java)<br>[solon-projects/solon-security/solon-security-web/src/main/java/org/noear/solon/security/web/header/XContentTypeOptionsHeaderHandler.java](../../../../sources/opensolon__solon/solon-projects/solon-security/solon-security-web/src/main/java/org/noear/solon/security/web/header/XContentTypeOptionsHeaderHandler.java) |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 121 | [README_CN.md](../../../../sources/opensolon__solon/README_CN.md)<br>[README_EN.md](../../../../sources/opensolon__solon/README_EN.md)<br>[README_JP.md](../../../../sources/opensolon__solon/README_JP.md)<br>[README_RU.md](../../../../sources/opensolon__solon/README_RU.md)<br>[README.md](../../../../sources/opensolon__solon/README.md)<br>[solon-projects/README.md](../../../../sources/opensolon__solon/solon-projects/README.md)<br>[solon-projects/solon-web/solon-web-webservices/README.md](../../../../sources/opensolon__solon/solon-projects/solon-web/solon-web-webservices/README.md)<br>[solon-projects/solon-web/solon-web-webdav/README.md](../../../../sources/opensolon__solon/solon-projects/solon-web/solon-web-webdav/README.md) |
| config | 0 | not obvious |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 1482 | [solon-projects/solon-web/solon-web-webservices/src/test/resources/app.properties](../../../../sources/opensolon__solon/solon-projects/solon-web/solon-web-webservices/src/test/resources/app.properties)<br>[solon-projects/solon-web/solon-web-webservices/src/test/java/demo/server/ServerTest.java](../../../../sources/opensolon__solon/solon-projects/solon-web/solon-web-webservices/src/test/java/demo/server/ServerTest.java)<br>[solon-projects/solon-web/solon-web-webservices/src/test/java/demo/client2/ClientTest2.java](../../../../sources/opensolon__solon/solon-projects/solon-web/solon-web-webservices/src/test/java/demo/client2/ClientTest2.java)<br>[solon-projects/solon-web/solon-web-webservices/src/test/java/demo/client/ClientTest.java](../../../../sources/opensolon__solon/solon-projects/solon-web/solon-web-webservices/src/test/java/demo/client/ClientTest.java)<br>[solon-projects/solon-web/solon-web-webdav/src/test/java/org/noear/solon/web/webdav/test/Demo.java](../../../../sources/opensolon__solon/solon-projects/solon-web/solon-web-webdav/src/test/java/org/noear/solon/web/webdav/test/Demo.java)<br>[solon-projects/solon-web/solon-web-staticfiles/src/test/resources/app.yml](../../../../sources/opensolon__solon/solon-projects/solon-web/solon-web-staticfiles/src/test/resources/app.yml) |
| CI workflows | 0 | not obvious |
| Containers / deploy | 0 | not obvious |
| Security / policy | 165 | [solon-projects/solon-security/solon-security-web/NOTICE](../../../../sources/opensolon__solon/solon-projects/solon-security/solon-security-web/NOTICE)<br>[solon-projects/solon-security/solon-security-web/pom.xml](../../../../sources/opensolon__solon/solon-projects/solon-security/solon-security-web/pom.xml)<br>[solon-projects/solon-security/solon-security-web/README.md](../../../../sources/opensolon__solon/solon-projects/solon-security/solon-security-web/README.md)<br>[solon-projects/solon-security/solon-security-web/src/test/java/demo/security/web/DemoFilter.java](../../../../sources/opensolon__solon/solon-projects/solon-security/solon-security-web/src/test/java/demo/security/web/DemoFilter.java)<br>[solon-projects/solon-security/solon-security-web/src/main/java/org/noear/solon/security/web/SecurityFilter.java](../../../../sources/opensolon__solon/solon-projects/solon-security/solon-security-web/src/main/java/org/noear/solon/security/web/SecurityFilter.java)<br>[solon-projects/solon-security/solon-security-web/src/main/java/org/noear/solon/security/web/header/CacheControlHeadersHandler.java](../../../../sources/opensolon__solon/solon-projects/solon-security/solon-security-web/src/main/java/org/noear/solon/security/web/header/CacheControlHeadersHandler.java) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | CI workflow path not obvious; container/deploy path not obvious |
| security | agent instruction files not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `solon-projects/solon-tool/solon-maven-plugin/src/main/java/org/noear/solon/maven/plugin/tools/SolonMavenUtil.java`, `solon-projects/solon-tool/solon-maven-plugin/src/main/java/org/noear/solon/maven/plugin/tools/StringUtils.java`, `solon-projects/solon-tool/solon-gradle-plugin/src/main/java/org/noear/solon/gradle/tools/MainClassFinder.java`.
2. Map agent/tool runtime through: `solon-projects/solon-tool/solon-maven-plugin/src/main/java/org/noear/solon/maven/plugin/tools/SolonMavenUtil.java`, `solon-projects/solon-tool/solon-maven-plugin/src/main/java/org/noear/solon/maven/plugin/tools/StringUtils.java`, `solon-projects/solon-tool/solon-gradle-plugin/src/main/java/org/noear/solon/gradle/tools/MainClassFinder.java`.
3. Inspect retrieval/memory/indexing through: `__test/src/main/resources/static/test/index.html`.
4. Verify behavior through test/eval files: `solon-projects/solon-web/solon-web-webservices/src/test/resources/app.properties`, `solon-projects/solon-web/solon-web-webservices/src/test/java/demo/server/ServerTest.java`, `solon-projects/solon-web/solon-web-webservices/src/test/java/demo/client2/ClientTest2.java`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 🔥 Java enterprise application development framework for full scenario Restrained, Efficient, Open, Ecologicalll!!! 700%. 핵심 구조 신호는 Java, pom.xml, README.md, LICENSE, tests, ci이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
