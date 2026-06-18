# line/line-bot-sdk-java Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

LINE Messaging API SDK for Java

## 요약

- 조사 단위: `sources/line__line-bot-sdk-java` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 725 files, 450 directories, depth score 84, key references 10개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

개발 생산성/DevTools 관점에서 retrieval/vector path, eval/test harness, security/policy surface 구조로 읽힌다. 핵심 소스 근거는 ci=.github/workflows/check-eol-newrelease.yml, .github/workflows/close-issue.yml, .github/workflows/create-draft-release.yml이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 10개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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


## Repository Context

| Field | Value |
| --- | --- |
| Repository | line/line-bot-sdk-java |
| Topic | Developer Productivity and DevTools / 개발 생산성/DevTools |
| Region | korea |
| Language | Java |
| Stars | 641 |
| Forks | 929 |
| License | Apache-2.0 |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/line__line-bot-sdk-java](../../../../sources/line__line-bot-sdk-java) |
| Existing report | [reports/korea-trending/repositories/line__line-bot-sdk-java.md](../../../korea-trending/repositories/line__line-bot-sdk-java.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 725 / 450 |
| Max observed depth | 13 |
| Top directories | .github, buildSrc, clients, config, generator, gradle, line-bot-integration-test, line-bot-jackson, line-bot-parser, line-bot-webhook, line-openapi, samples, spring-boot, tests |
| Top extensions | .java: 508, .json: 43, (none): 43, .kts: 29, .ftlh: 28, .xml: 15, .yml: 14, .md: 12, .pebble: 8, .png: 5, .imports: 3, .properties: 3 |
| Source patterns | retrieval/vector path, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 2 |
| .github | ci surface | 1 |
| buildSrc | source boundary | 1 |
| clients | source boundary | 1 |
| config | top-level component | 1 |
| generator | top-level component | 1 |
| gradle | top-level component | 1 |
| line-bot-integration-test | validation surface | 1 |
| line-bot-jackson | top-level component | 1 |
| line-bot-parser | top-level component | 1 |
| line-bot-webhook | source boundary | 1 |
| line-openapi | source boundary | 1 |
| samples | top-level component | 1 |
| spring-boot | top-level component | 1 |


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
| ci | [.github/workflows/check-eol-newrelease.yml](../../../../sources/line__line-bot-sdk-java/.github/workflows/check-eol-newrelease.yml) | ci signal |
| ci | [.github/workflows/close-issue.yml](../../../../sources/line__line-bot-sdk-java/.github/workflows/close-issue.yml) | ci signal |
| ci | [.github/workflows/create-draft-release.yml](../../../../sources/line__line-bot-sdk-java/.github/workflows/create-draft-release.yml) | ci signal |
| ci | [.github/workflows/generate-code.yml](../../../../sources/line__line-bot-sdk-java/.github/workflows/generate-code.yml) | ci signal |
| docs | [README.md](../../../../sources/line__line-bot-sdk-java/README.md) | docs signal |
| docs | [spring-boot/line-bot-spring-boot-client/README.md](../../../../sources/line__line-bot-sdk-java/spring-boot/line-bot-spring-boot-client/README.md) | docs signal |
| docs | [samples/sample-spring-boot-kitchensink/README.md](../../../../sources/line__line-bot-sdk-java/samples/sample-spring-boot-kitchensink/README.md) | docs signal |
| docs | [samples/sample-spring-boot-echo-kotlin/README.md](../../../../sources/line__line-bot-sdk-java/samples/sample-spring-boot-echo-kotlin/README.md) | docs signal |
| eval | [tests/maven-pom-validation-test.py](../../../../sources/line__line-bot-sdk-java/tests/maven-pom-validation-test.py) | eval support |
| eval | [spring-boot/line-bot-spring-boot-webmvc/src/test/resources/callback-request-with-destination.json](../../../../sources/line__line-bot-sdk-java/spring-boot/line-bot-spring-boot-webmvc/src/test/resources/callback-request-with-destination.json) | eval support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 2 | [samples/sample-manage-audience/src/main/resources/templates/index.ftlh](../../../../sources/line__line-bot-sdk-java/samples/sample-manage-audience/src/main/resources/templates/index.ftlh)<br>[samples/sample-manage-audience/src/main/resources/templates/request_log/index.ftlh](../../../../sources/line__line-bot-sdk-java/samples/sample-manage-audience/src/main/resources/templates/request_log/index.ftlh) |
| spec | 0 | not obvious |
| eval | 107 | [tests/maven-pom-validation-test.py](../../../../sources/line__line-bot-sdk-java/tests/maven-pom-validation-test.py)<br>[spring-boot/line-bot-spring-boot-webmvc/src/test/resources/callback-request-with-destination.json](../../../../sources/line__line-bot-sdk-java/spring-boot/line-bot-spring-boot-webmvc/src/test/resources/callback-request-with-destination.json)<br>[spring-boot/line-bot-spring-boot-webmvc/src/test/resources/callback-request.json](../../../../sources/line__line-bot-sdk-java/spring-boot/line-bot-spring-boot-webmvc/src/test/resources/callback-request.json)<br>[spring-boot/line-bot-spring-boot-webmvc/src/test/resources/logback-test.xml](../../../../sources/line__line-bot-sdk-java/spring-boot/line-bot-spring-boot-webmvc/src/test/resources/logback-test.xml)<br>[spring-boot/line-bot-spring-boot-web/src/test/java/com/linecorp/bot/spring/boot/web/interceptor/LineBotServerInterceptorTest.java](../../../../sources/line__line-bot-sdk-java/spring-boot/line-bot-spring-boot-web/src/test/java/com/linecorp/bot/spring/boot/web/interceptor/LineBotServerInterceptorTest.java)<br>[spring-boot/line-bot-spring-boot-handler/src/test/resources/callback-request-with-destination.json](../../../../sources/line__line-bot-sdk-java/spring-boot/line-bot-spring-boot-handler/src/test/resources/callback-request-with-destination.json)<br>[spring-boot/line-bot-spring-boot-handler/src/test/resources/logback-test.xml](../../../../sources/line__line-bot-sdk-java/spring-boot/line-bot-spring-boot-handler/src/test/resources/logback-test.xml)<br>[spring-boot/line-bot-spring-boot-handler/src/test/java/com/linecorp/bot/spring/boot/handler/support/EventTestUtil.java](../../../../sources/line__line-bot-sdk-java/spring-boot/line-bot-spring-boot-handler/src/test/java/com/linecorp/bot/spring/boot/handler/support/EventTestUtil.java) |
| security | 10 | [clients/line-channel-access-token-client/src/test/java/com/linecorp/bot/oauth/client/ChannelAccessTokenClientExTest.java](../../../../sources/line__line-bot-sdk-java/clients/line-channel-access-token-client/src/test/java/com/linecorp/bot/oauth/client/ChannelAccessTokenClientExTest.java)<br>[clients/line-channel-access-token-client/src/main/java/com/linecorp/bot/oauth/model/ChannelAccessTokenKeyIdsResponse.java](../../../../sources/line__line-bot-sdk-java/clients/line-channel-access-token-client/src/main/java/com/linecorp/bot/oauth/model/ChannelAccessTokenKeyIdsResponse.java)<br>[clients/line-channel-access-token-client/src/main/java/com/linecorp/bot/oauth/model/ErrorResponse.java](../../../../sources/line__line-bot-sdk-java/clients/line-channel-access-token-client/src/main/java/com/linecorp/bot/oauth/model/ErrorResponse.java)<br>[clients/line-channel-access-token-client/src/main/java/com/linecorp/bot/oauth/model/IssueChannelAccessTokenResponse.java](../../../../sources/line__line-bot-sdk-java/clients/line-channel-access-token-client/src/main/java/com/linecorp/bot/oauth/model/IssueChannelAccessTokenResponse.java)<br>[clients/line-channel-access-token-client/src/main/java/com/linecorp/bot/oauth/model/IssueShortLivedChannelAccessTokenResponse.java](../../../../sources/line__line-bot-sdk-java/clients/line-channel-access-token-client/src/main/java/com/linecorp/bot/oauth/model/IssueShortLivedChannelAccessTokenResponse.java)<br>[clients/line-channel-access-token-client/src/main/java/com/linecorp/bot/oauth/model/IssueStatelessChannelAccessTokenResponse.java](../../../../sources/line__line-bot-sdk-java/clients/line-channel-access-token-client/src/main/java/com/linecorp/bot/oauth/model/IssueStatelessChannelAccessTokenResponse.java)<br>[clients/line-channel-access-token-client/src/main/java/com/linecorp/bot/oauth/model/VerifyChannelAccessTokenResponse.java](../../../../sources/line__line-bot-sdk-java/clients/line-channel-access-token-client/src/main/java/com/linecorp/bot/oauth/model/VerifyChannelAccessTokenResponse.java)<br>[clients/line-channel-access-token-client/src/main/java/com/linecorp/bot/oauth/client/ChannelAccessTokenClient.java](../../../../sources/line__line-bot-sdk-java/clients/line-channel-access-token-client/src/main/java/com/linecorp/bot/oauth/client/ChannelAccessTokenClient.java) |
| ci | 8 | [.github/workflows/check-eol-newrelease.yml](../../../../sources/line__line-bot-sdk-java/.github/workflows/check-eol-newrelease.yml)<br>[.github/workflows/close-issue.yml](../../../../sources/line__line-bot-sdk-java/.github/workflows/close-issue.yml)<br>[.github/workflows/create-draft-release.yml](../../../../sources/line__line-bot-sdk-java/.github/workflows/create-draft-release.yml)<br>[.github/workflows/generate-code.yml](../../../../sources/line__line-bot-sdk-java/.github/workflows/generate-code.yml)<br>[.github/workflows/gradle.yml](../../../../sources/line__line-bot-sdk-java/.github/workflows/gradle.yml)<br>[.github/workflows/label-issue.yml](../../../../sources/line__line-bot-sdk-java/.github/workflows/label-issue.yml)<br>[.github/workflows/pom-validation.yml](../../../../sources/line__line-bot-sdk-java/.github/workflows/pom-validation.yml)<br>[.github/workflows/publish.yml](../../../../sources/line__line-bot-sdk-java/.github/workflows/publish.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 7 | [README.md](../../../../sources/line__line-bot-sdk-java/README.md)<br>[spring-boot/line-bot-spring-boot-client/README.md](../../../../sources/line__line-bot-sdk-java/spring-boot/line-bot-spring-boot-client/README.md)<br>[samples/sample-spring-boot-kitchensink/README.md](../../../../sources/line__line-bot-sdk-java/samples/sample-spring-boot-kitchensink/README.md)<br>[samples/sample-spring-boot-echo-kotlin/README.md](../../../../sources/line__line-bot-sdk-java/samples/sample-spring-boot-echo-kotlin/README.md)<br>[samples/sample-spring-boot-echo/README.md](../../../../sources/line__line-bot-sdk-java/samples/sample-spring-boot-echo/README.md)<br>[line-bot-integration-test/README.md](../../../../sources/line__line-bot-sdk-java/line-bot-integration-test/README.md)<br>[clients/line-bot-messaging-api-client/src/test/resources/flex/reconstruction/README.md](../../../../sources/line__line-bot-sdk-java/clients/line-bot-messaging-api-client/src/test/resources/flex/reconstruction/README.md) |
| config | 0 | not obvious |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 107 | [tests/maven-pom-validation-test.py](../../../../sources/line__line-bot-sdk-java/tests/maven-pom-validation-test.py)<br>[spring-boot/line-bot-spring-boot-webmvc/src/test/resources/callback-request-with-destination.json](../../../../sources/line__line-bot-sdk-java/spring-boot/line-bot-spring-boot-webmvc/src/test/resources/callback-request-with-destination.json)<br>[spring-boot/line-bot-spring-boot-webmvc/src/test/resources/callback-request.json](../../../../sources/line__line-bot-sdk-java/spring-boot/line-bot-spring-boot-webmvc/src/test/resources/callback-request.json)<br>[spring-boot/line-bot-spring-boot-webmvc/src/test/resources/logback-test.xml](../../../../sources/line__line-bot-sdk-java/spring-boot/line-bot-spring-boot-webmvc/src/test/resources/logback-test.xml)<br>[spring-boot/line-bot-spring-boot-web/src/test/java/com/linecorp/bot/spring/boot/web/interceptor/LineBotServerInterceptorTest.java](../../../../sources/line__line-bot-sdk-java/spring-boot/line-bot-spring-boot-web/src/test/java/com/linecorp/bot/spring/boot/web/interceptor/LineBotServerInterceptorTest.java)<br>[spring-boot/line-bot-spring-boot-handler/src/test/resources/callback-request-with-destination.json](../../../../sources/line__line-bot-sdk-java/spring-boot/line-bot-spring-boot-handler/src/test/resources/callback-request-with-destination.json) |
| CI workflows | 8 | [.github/workflows/check-eol-newrelease.yml](../../../../sources/line__line-bot-sdk-java/.github/workflows/check-eol-newrelease.yml)<br>[.github/workflows/close-issue.yml](../../../../sources/line__line-bot-sdk-java/.github/workflows/close-issue.yml)<br>[.github/workflows/create-draft-release.yml](../../../../sources/line__line-bot-sdk-java/.github/workflows/create-draft-release.yml)<br>[.github/workflows/generate-code.yml](../../../../sources/line__line-bot-sdk-java/.github/workflows/generate-code.yml)<br>[.github/workflows/gradle.yml](../../../../sources/line__line-bot-sdk-java/.github/workflows/gradle.yml)<br>[.github/workflows/label-issue.yml](../../../../sources/line__line-bot-sdk-java/.github/workflows/label-issue.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 10 | [clients/line-channel-access-token-client/src/test/java/com/linecorp/bot/oauth/client/ChannelAccessTokenClientExTest.java](../../../../sources/line__line-bot-sdk-java/clients/line-channel-access-token-client/src/test/java/com/linecorp/bot/oauth/client/ChannelAccessTokenClientExTest.java)<br>[clients/line-channel-access-token-client/src/main/java/com/linecorp/bot/oauth/model/ChannelAccessTokenKeyIdsResponse.java](../../../../sources/line__line-bot-sdk-java/clients/line-channel-access-token-client/src/main/java/com/linecorp/bot/oauth/model/ChannelAccessTokenKeyIdsResponse.java)<br>[clients/line-channel-access-token-client/src/main/java/com/linecorp/bot/oauth/model/ErrorResponse.java](../../../../sources/line__line-bot-sdk-java/clients/line-channel-access-token-client/src/main/java/com/linecorp/bot/oauth/model/ErrorResponse.java)<br>[clients/line-channel-access-token-client/src/main/java/com/linecorp/bot/oauth/model/IssueChannelAccessTokenResponse.java](../../../../sources/line__line-bot-sdk-java/clients/line-channel-access-token-client/src/main/java/com/linecorp/bot/oauth/model/IssueChannelAccessTokenResponse.java)<br>[clients/line-channel-access-token-client/src/main/java/com/linecorp/bot/oauth/model/IssueShortLivedChannelAccessTokenResponse.java](../../../../sources/line__line-bot-sdk-java/clients/line-channel-access-token-client/src/main/java/com/linecorp/bot/oauth/model/IssueShortLivedChannelAccessTokenResponse.java)<br>[clients/line-channel-access-token-client/src/main/java/com/linecorp/bot/oauth/model/IssueStatelessChannelAccessTokenResponse.java](../../../../sources/line__line-bot-sdk-java/clients/line-channel-access-token-client/src/main/java/com/linecorp/bot/oauth/model/IssueStatelessChannelAccessTokenResponse.java) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `.github/workflows/check-eol-newrelease.yml`, `.github/workflows/close-issue.yml`, `.github/workflows/create-draft-release.yml`.
2. Inspect retrieval/memory/indexing through: `samples/sample-manage-audience/src/main/resources/templates/index.ftlh`, `samples/sample-manage-audience/src/main/resources/templates/request_log/index.ftlh`.
3. Verify behavior through test/eval files: `tests/maven-pom-validation-test.py`, `spring-boot/line-bot-spring-boot-webmvc/src/test/resources/callback-request-with-destination.json`, `spring-boot/line-bot-spring-boot-webmvc/src/test/resources/callback-request.json`.

## Existing Repository Insight

개발 생산성/DevTools 관점에서 LINE Messaging API SDK for Java. 핵심 구조 신호는 Java, README.md, tests, ci, docs이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 개발 생산성/DevTools 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 needs deeper structural scan입니다.
