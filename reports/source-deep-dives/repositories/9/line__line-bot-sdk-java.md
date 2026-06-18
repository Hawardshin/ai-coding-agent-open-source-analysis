# line/line-bot-sdk-java 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

LINE Messaging API SDK for Java

## 요약

- 조사 단위: `sources/line__line-bot-sdk-java` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 725 files, 450 directories, depth score 78, key references 10개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

개발 생산성/DevTools 관점에서 retrieval/vector path, eval/test harness, security/policy surface 구조로 읽힌다. 핵심 소스 근거는 ci=.github/workflows/check-eol-newrelease.yml, .github/workflows/close-issue.yml, .github/workflows/create-draft-release.yml이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 10개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | line/line-bot-sdk-java |
| 주제 | 개발 생산성/DevTools / 개발 생산성/DevTools |
| Region | korea |
| Language | Java |
| Stars | 641 |
| Forks | 929 |
| License | Apache-2.0 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/line__line-bot-sdk-java](../../../../sources/line__line-bot-sdk-java) |
| 기존 보고서 | [reports/korea-trending/repositories/line__line-bot-sdk-java.md](../../../korea-trending/repositories/line__line-bot-sdk-java.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 725 / 450 |
| 관측 최대 깊이 | 13 |
| 상위 디렉터리 | .github, buildSrc, clients, config, generator, gradle, line-bot-integration-test, line-bot-jackson, line-bot-parser, line-bot-webhook, line-openapi, samples, spring-boot, tests |
| 상위 확장자 | .java: 508, .json: 43, (none): 43, .kts: 29, .ftlh: 28, .xml: 15, .yml: 14, .md: 12, .pebble: 8, .png: 5, .imports: 3, .properties: 3 |
| 소스 패턴 | retrieval/vector path, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 0 | 명확하지 않음 |
| mcp | 0 | 명확하지 않음 |
| retrieval | 2 | [samples/sample-manage-audience/src/main/resources/templates/index.ftlh](../../../../sources/line__line-bot-sdk-java/samples/sample-manage-audience/src/main/resources/templates/index.ftlh)<br>[samples/sample-manage-audience/src/main/resources/templates/request_log/index.ftlh](../../../../sources/line__line-bot-sdk-java/samples/sample-manage-audience/src/main/resources/templates/request_log/index.ftlh) |
| spec | 0 | 명확하지 않음 |
| eval | 107 | [tests/maven-pom-validation-test.py](../../../../sources/line__line-bot-sdk-java/tests/maven-pom-validation-test.py)<br>[spring-boot/line-bot-spring-boot-webmvc/src/test/resources/callback-request-with-destination.json](../../../../sources/line__line-bot-sdk-java/spring-boot/line-bot-spring-boot-webmvc/src/test/resources/callback-request-with-destination.json)<br>[spring-boot/line-bot-spring-boot-webmvc/src/test/resources/callback-request.json](../../../../sources/line__line-bot-sdk-java/spring-boot/line-bot-spring-boot-webmvc/src/test/resources/callback-request.json)<br>[spring-boot/line-bot-spring-boot-webmvc/src/test/resources/logback-test.xml](../../../../sources/line__line-bot-sdk-java/spring-boot/line-bot-spring-boot-webmvc/src/test/resources/logback-test.xml)<br>[spring-boot/line-bot-spring-boot-web/src/test/java/com/linecorp/bot/spring/boot/web/interceptor/LineBotServerInterceptorTest.java](../../../../sources/line__line-bot-sdk-java/spring-boot/line-bot-spring-boot-web/src/test/java/com/linecorp/bot/spring/boot/web/interceptor/LineBotServerInterceptorTest.java)<br>[spring-boot/line-bot-spring-boot-handler/src/test/resources/callback-request-with-destination.json](../../../../sources/line__line-bot-sdk-java/spring-boot/line-bot-spring-boot-handler/src/test/resources/callback-request-with-destination.json)<br>[spring-boot/line-bot-spring-boot-handler/src/test/resources/logback-test.xml](../../../../sources/line__line-bot-sdk-java/spring-boot/line-bot-spring-boot-handler/src/test/resources/logback-test.xml)<br>[spring-boot/line-bot-spring-boot-handler/src/test/java/com/linecorp/bot/spring/boot/handler/support/EventTestUtil.java](../../../../sources/line__line-bot-sdk-java/spring-boot/line-bot-spring-boot-handler/src/test/java/com/linecorp/bot/spring/boot/handler/support/EventTestUtil.java) |
| security | 10 | [clients/line-channel-access-token-client/src/test/java/com/linecorp/bot/oauth/client/ChannelAccessTokenClientExTest.java](../../../../sources/line__line-bot-sdk-java/clients/line-channel-access-token-client/src/test/java/com/linecorp/bot/oauth/client/ChannelAccessTokenClientExTest.java)<br>[clients/line-channel-access-token-client/src/main/java/com/linecorp/bot/oauth/model/ChannelAccessTokenKeyIdsResponse.java](../../../../sources/line__line-bot-sdk-java/clients/line-channel-access-token-client/src/main/java/com/linecorp/bot/oauth/model/ChannelAccessTokenKeyIdsResponse.java)<br>[clients/line-channel-access-token-client/src/main/java/com/linecorp/bot/oauth/model/ErrorResponse.java](../../../../sources/line__line-bot-sdk-java/clients/line-channel-access-token-client/src/main/java/com/linecorp/bot/oauth/model/ErrorResponse.java)<br>[clients/line-channel-access-token-client/src/main/java/com/linecorp/bot/oauth/model/IssueChannelAccessTokenResponse.java](../../../../sources/line__line-bot-sdk-java/clients/line-channel-access-token-client/src/main/java/com/linecorp/bot/oauth/model/IssueChannelAccessTokenResponse.java)<br>[clients/line-channel-access-token-client/src/main/java/com/linecorp/bot/oauth/model/IssueShortLivedChannelAccessTokenResponse.java](../../../../sources/line__line-bot-sdk-java/clients/line-channel-access-token-client/src/main/java/com/linecorp/bot/oauth/model/IssueShortLivedChannelAccessTokenResponse.java)<br>[clients/line-channel-access-token-client/src/main/java/com/linecorp/bot/oauth/model/IssueStatelessChannelAccessTokenResponse.java](../../../../sources/line__line-bot-sdk-java/clients/line-channel-access-token-client/src/main/java/com/linecorp/bot/oauth/model/IssueStatelessChannelAccessTokenResponse.java)<br>[clients/line-channel-access-token-client/src/main/java/com/linecorp/bot/oauth/model/VerifyChannelAccessTokenResponse.java](../../../../sources/line__line-bot-sdk-java/clients/line-channel-access-token-client/src/main/java/com/linecorp/bot/oauth/model/VerifyChannelAccessTokenResponse.java)<br>[clients/line-channel-access-token-client/src/main/java/com/linecorp/bot/oauth/client/ChannelAccessTokenClient.java](../../../../sources/line__line-bot-sdk-java/clients/line-channel-access-token-client/src/main/java/com/linecorp/bot/oauth/client/ChannelAccessTokenClient.java) |
| ci | 8 | [.github/workflows/check-eol-newrelease.yml](../../../../sources/line__line-bot-sdk-java/.github/workflows/check-eol-newrelease.yml)<br>[.github/workflows/close-issue.yml](../../../../sources/line__line-bot-sdk-java/.github/workflows/close-issue.yml)<br>[.github/workflows/create-draft-release.yml](../../../../sources/line__line-bot-sdk-java/.github/workflows/create-draft-release.yml)<br>[.github/workflows/generate-code.yml](../../../../sources/line__line-bot-sdk-java/.github/workflows/generate-code.yml)<br>[.github/workflows/gradle.yml](../../../../sources/line__line-bot-sdk-java/.github/workflows/gradle.yml)<br>[.github/workflows/label-issue.yml](../../../../sources/line__line-bot-sdk-java/.github/workflows/label-issue.yml)<br>[.github/workflows/pom-validation.yml](../../../../sources/line__line-bot-sdk-java/.github/workflows/pom-validation.yml)<br>[.github/workflows/publish.yml](../../../../sources/line__line-bot-sdk-java/.github/workflows/publish.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 7 | [README.md](../../../../sources/line__line-bot-sdk-java/README.md)<br>[spring-boot/line-bot-spring-boot-client/README.md](../../../../sources/line__line-bot-sdk-java/spring-boot/line-bot-spring-boot-client/README.md)<br>[samples/sample-spring-boot-kitchensink/README.md](../../../../sources/line__line-bot-sdk-java/samples/sample-spring-boot-kitchensink/README.md)<br>[samples/sample-spring-boot-echo-kotlin/README.md](../../../../sources/line__line-bot-sdk-java/samples/sample-spring-boot-echo-kotlin/README.md)<br>[samples/sample-spring-boot-echo/README.md](../../../../sources/line__line-bot-sdk-java/samples/sample-spring-boot-echo/README.md)<br>[line-bot-integration-test/README.md](../../../../sources/line__line-bot-sdk-java/line-bot-integration-test/README.md)<br>[clients/line-bot-messaging-api-client/src/test/resources/flex/reconstruction/README.md](../../../../sources/line__line-bot-sdk-java/clients/line-bot-messaging-api-client/src/test/resources/flex/reconstruction/README.md) |
| config | 0 | 명확하지 않음 |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 107 | [tests/maven-pom-validation-test.py](../../../../sources/line__line-bot-sdk-java/tests/maven-pom-validation-test.py)<br>[spring-boot/line-bot-spring-boot-webmvc/src/test/resources/callback-request-with-destination.json](../../../../sources/line__line-bot-sdk-java/spring-boot/line-bot-spring-boot-webmvc/src/test/resources/callback-request-with-destination.json)<br>[spring-boot/line-bot-spring-boot-webmvc/src/test/resources/callback-request.json](../../../../sources/line__line-bot-sdk-java/spring-boot/line-bot-spring-boot-webmvc/src/test/resources/callback-request.json)<br>[spring-boot/line-bot-spring-boot-webmvc/src/test/resources/logback-test.xml](../../../../sources/line__line-bot-sdk-java/spring-boot/line-bot-spring-boot-webmvc/src/test/resources/logback-test.xml)<br>[spring-boot/line-bot-spring-boot-web/src/test/java/com/linecorp/bot/spring/boot/web/interceptor/LineBotServerInterceptorTest.java](../../../../sources/line__line-bot-sdk-java/spring-boot/line-bot-spring-boot-web/src/test/java/com/linecorp/bot/spring/boot/web/interceptor/LineBotServerInterceptorTest.java)<br>[spring-boot/line-bot-spring-boot-handler/src/test/resources/callback-request-with-destination.json](../../../../sources/line__line-bot-sdk-java/spring-boot/line-bot-spring-boot-handler/src/test/resources/callback-request-with-destination.json) |
| CI workflow | 8 | [.github/workflows/check-eol-newrelease.yml](../../../../sources/line__line-bot-sdk-java/.github/workflows/check-eol-newrelease.yml)<br>[.github/workflows/close-issue.yml](../../../../sources/line__line-bot-sdk-java/.github/workflows/close-issue.yml)<br>[.github/workflows/create-draft-release.yml](../../../../sources/line__line-bot-sdk-java/.github/workflows/create-draft-release.yml)<br>[.github/workflows/generate-code.yml](../../../../sources/line__line-bot-sdk-java/.github/workflows/generate-code.yml)<br>[.github/workflows/gradle.yml](../../../../sources/line__line-bot-sdk-java/.github/workflows/gradle.yml)<br>[.github/workflows/label-issue.yml](../../../../sources/line__line-bot-sdk-java/.github/workflows/label-issue.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 10 | [clients/line-channel-access-token-client/src/test/java/com/linecorp/bot/oauth/client/ChannelAccessTokenClientExTest.java](../../../../sources/line__line-bot-sdk-java/clients/line-channel-access-token-client/src/test/java/com/linecorp/bot/oauth/client/ChannelAccessTokenClientExTest.java)<br>[clients/line-channel-access-token-client/src/main/java/com/linecorp/bot/oauth/model/ChannelAccessTokenKeyIdsResponse.java](../../../../sources/line__line-bot-sdk-java/clients/line-channel-access-token-client/src/main/java/com/linecorp/bot/oauth/model/ChannelAccessTokenKeyIdsResponse.java)<br>[clients/line-channel-access-token-client/src/main/java/com/linecorp/bot/oauth/model/ErrorResponse.java](../../../../sources/line__line-bot-sdk-java/clients/line-channel-access-token-client/src/main/java/com/linecorp/bot/oauth/model/ErrorResponse.java)<br>[clients/line-channel-access-token-client/src/main/java/com/linecorp/bot/oauth/model/IssueChannelAccessTokenResponse.java](../../../../sources/line__line-bot-sdk-java/clients/line-channel-access-token-client/src/main/java/com/linecorp/bot/oauth/model/IssueChannelAccessTokenResponse.java)<br>[clients/line-channel-access-token-client/src/main/java/com/linecorp/bot/oauth/model/IssueShortLivedChannelAccessTokenResponse.java](../../../../sources/line__line-bot-sdk-java/clients/line-channel-access-token-client/src/main/java/com/linecorp/bot/oauth/model/IssueShortLivedChannelAccessTokenResponse.java)<br>[clients/line-channel-access-token-client/src/main/java/com/linecorp/bot/oauth/model/IssueStatelessChannelAccessTokenResponse.java](../../../../sources/line__line-bot-sdk-java/clients/line-channel-access-token-client/src/main/java/com/linecorp/bot/oauth/model/IssueStatelessChannelAccessTokenResponse.java) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | path scan에서 primary entrypoint가 명확하지 않음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `.github/workflows/check-eol-newrelease.yml`, `.github/workflows/close-issue.yml`, `.github/workflows/create-draft-release.yml`.
2. retrieval/memory/indexing 확인: `samples/sample-manage-audience/src/main/resources/templates/index.ftlh`, `samples/sample-manage-audience/src/main/resources/templates/request_log/index.ftlh`.
3. test/eval 파일로 동작 검증: `tests/maven-pom-validation-test.py`, `spring-boot/line-bot-spring-boot-webmvc/src/test/resources/callback-request-with-destination.json`, `spring-boot/line-bot-spring-boot-webmvc/src/test/resources/callback-request.json`.

## 기존 레포 인사이트

개발 생산성/DevTools 관점에서 LINE Messaging API SDK for Java. 핵심 구조 신호는 Java, README.md, tests, ci, docs이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 개발 생산성/DevTools 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 더 깊은 구조 스캔 필요입니다.
