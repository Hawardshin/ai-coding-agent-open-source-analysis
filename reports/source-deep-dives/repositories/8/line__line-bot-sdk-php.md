# line/line-bot-sdk-php 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

LINE Messaging API SDK for PHP

## 요약

- 조사 단위: `sources/line__line-bot-sdk-php` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 1,825 files, 85 directories, depth score 79, key references 10개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

개발 생산성/DevTools 관점에서 agent/tool runtime, retrieval/vector path, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 ci=.github/workflows/check-eol-newrelease.yml, .github/workflows/close-issue.yml, .github/workflows/create-draft-release.yml이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 10개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | line/line-bot-sdk-php |
| 주제 | 개발 생산성/DevTools / 개발 생산성/DevTools |
| Region | korea |
| Language | PHP |
| Stars | 733 |
| Forks | 647 |
| License | Apache-2.0 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/line__line-bot-sdk-php](../../../../sources/line__line-bot-sdk-php) |
| 기존 보고서 | [reports/korea-trending/repositories/line__line-bot-sdk-php.md](../../../korea-trending/repositories/line__line-bot-sdk-php.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 1825 / 85 |
| 관측 최대 깊이 | 9 |
| 상위 디렉터리 | .github, docs, examples, generator, line-openapi, src, test, tools |
| 상위 확장자 | .html: 1264, .php: 502, (none): 16, .yml: 9, .md: 8, .xml: 5, .json: 4, .css: 3, .js: 3, .jpg: 2, .mustache: 2, .sh: 2 |
| 소스 패턴 | agent/tool runtime, retrieval/vector path, eval/test harness |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 41 |
| src | source boundary | 38 |
| examples/EchoBot | examples workspace | 2 |
| examples/KitchenSink | examples workspace | 2 |
| .github | ci surface | 1 |
| examples | top-level component | 1 |
| generator | top-level component | 1 |
| line-openapi | source boundary | 1 |
| test | validation surface | 1 |
| tools | top-level component | 1 |


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
| ci | [.github/workflows/check-eol-newrelease.yml](../../../../sources/line__line-bot-sdk-php/.github/workflows/check-eol-newrelease.yml) | ci signal |
| ci | [.github/workflows/close-issue.yml](../../../../sources/line__line-bot-sdk-php/.github/workflows/close-issue.yml) | ci signal |
| ci | [.github/workflows/create-draft-release.yml](../../../../sources/line__line-bot-sdk-php/.github/workflows/create-draft-release.yml) | ci signal |
| ci | [.github/workflows/generate-code.yml](../../../../sources/line__line-bot-sdk-php/.github/workflows/generate-code.yml) | ci signal |
| docs | [README.md](../../../../sources/line__line-bot-sdk-php/README.md) | docs signal |
| docs | [examples/KitchenSink/README.md](../../../../sources/line__line-bot-sdk-php/examples/KitchenSink/README.md) | docs signal |
| docs | [examples/EchoBot/README.md](../../../../sources/line__line-bot-sdk-php/examples/EchoBot/README.md) | docs signal |
| docs | [docs/index.html](../../../../sources/line__line-bot-sdk-php/docs/index.html) | docs signal |
| eval | [test/clients/messaging-api/Model/TextMessageTest.php](../../../../sources/line__line-bot-sdk-php/test/clients/messaging-api/Model/TextMessageTest.php) | eval support |
| eval | [test/clients/messaging-api/Api/MessagingApiApiTest.php](../../../../sources/line__line-bot-sdk-php/test/clients/messaging-api/Api/MessagingApiApiTest.php) | eval support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 8 | [tools/.openapi-generator-ignore](../../../../sources/line__line-bot-sdk-php/tools/.openapi-generator-ignore)<br>[tools/bootstrap.php](../../../../sources/line__line-bot-sdk-php/tools/bootstrap.php)<br>[tools/check_copyright.sh](../../../../sources/line__line-bot-sdk-php/tools/check_copyright.sh)<br>[tools/patch-gen-oas-client.php](../../../../sources/line__line-bot-sdk-php/tools/patch-gen-oas-client.php)<br>[tools/custom-template/model_generic.mustache](../../../../sources/line__line-bot-sdk-php/tools/custom-template/model_generic.mustache)<br>[tools/custom-template/ObjectSerializer.mustache](../../../../sources/line__line-bot-sdk-php/tools/custom-template/ObjectSerializer.mustache)<br>[docs/files/tools-bootstrap.html](../../../../sources/line__line-bot-sdk-php/docs/files/tools-bootstrap.html)<br>[docs/files/tools-patch-gen-oas-client.html](../../../../sources/line__line-bot-sdk-php/docs/files/tools-patch-gen-oas-client.html) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 3 | [examples/KitchenSink/public/index.php](../../../../sources/line__line-bot-sdk-php/examples/KitchenSink/public/index.php)<br>[examples/EchoBot/public/index.php](../../../../sources/line__line-bot-sdk-php/examples/EchoBot/public/index.php)<br>[docs/index.html](../../../../sources/line__line-bot-sdk-php/docs/index.html) |
| spec | 0 | 명확하지 않음 |
| eval | 272 | [test/clients/messaging-api/Model/TextMessageTest.php](../../../../sources/line__line-bot-sdk-php/test/clients/messaging-api/Model/TextMessageTest.php)<br>[test/clients/messaging-api/Api/MessagingApiApiTest.php](../../../../sources/line__line-bot-sdk-php/test/clients/messaging-api/Api/MessagingApiApiTest.php)<br>[test/clients/channel-access-token/Api/ChannelAccessTokenApiTest.php](../../../../sources/line__line-bot-sdk-php/test/clients/channel-access-token/Api/ChannelAccessTokenApiTest.php)<br>[src/webhook/test/Model/AccountLinkEventTest.php](../../../../sources/line__line-bot-sdk-php/src/webhook/test/Model/AccountLinkEventTest.php)<br>[src/webhook/test/Model/ActivatedEventTest.php](../../../../sources/line__line-bot-sdk-php/src/webhook/test/Model/ActivatedEventTest.php)<br>[src/webhook/test/Model/AllMentioneeTest.php](../../../../sources/line__line-bot-sdk-php/src/webhook/test/Model/AllMentioneeTest.php)<br>[src/webhook/test/Model/AttachedModuleContentTest.php](../../../../sources/line__line-bot-sdk-php/src/webhook/test/Model/AttachedModuleContentTest.php)<br>[src/webhook/test/Model/AudioMessageContentTest.php](../../../../sources/line__line-bot-sdk-php/src/webhook/test/Model/AudioMessageContentTest.php) |
| security | 0 | 명확하지 않음 |
| ci | 7 | [.github/workflows/check-eol-newrelease.yml](../../../../sources/line__line-bot-sdk-php/.github/workflows/check-eol-newrelease.yml)<br>[.github/workflows/close-issue.yml](../../../../sources/line__line-bot-sdk-php/.github/workflows/close-issue.yml)<br>[.github/workflows/create-draft-release.yml](../../../../sources/line__line-bot-sdk-php/.github/workflows/create-draft-release.yml)<br>[.github/workflows/generate-code.yml](../../../../sources/line__line-bot-sdk-php/.github/workflows/generate-code.yml)<br>[.github/workflows/label-issue.yml](../../../../sources/line__line-bot-sdk-php/.github/workflows/label-issue.yml)<br>[.github/workflows/php-checks.yml](../../../../sources/line__line-bot-sdk-php/.github/workflows/php-checks.yml)<br>[.github/workflows/release.yml](../../../../sources/line__line-bot-sdk-php/.github/workflows/release.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 1273 | [README.md](../../../../sources/line__line-bot-sdk-php/README.md)<br>[examples/KitchenSink/README.md](../../../../sources/line__line-bot-sdk-php/examples/KitchenSink/README.md)<br>[examples/EchoBot/README.md](../../../../sources/line__line-bot-sdk-php/examples/EchoBot/README.md)<br>[docs/index.html](../../../../sources/line__line-bot-sdk-php/docs/index.html)<br>[docs/reports/deprecated.html](../../../../sources/line__line-bot-sdk-php/docs/reports/deprecated.html)<br>[docs/reports/errors.html](../../../../sources/line__line-bot-sdk-php/docs/reports/errors.html)<br>[docs/reports/markers.html](../../../../sources/line__line-bot-sdk-php/docs/reports/markers.html)<br>[docs/packages/Application.html](../../../../sources/line__line-bot-sdk-php/docs/packages/Application.html) |
| config | 0 | 명확하지 않음 |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 272 | [test/clients/messaging-api/Model/TextMessageTest.php](../../../../sources/line__line-bot-sdk-php/test/clients/messaging-api/Model/TextMessageTest.php)<br>[test/clients/messaging-api/Api/MessagingApiApiTest.php](../../../../sources/line__line-bot-sdk-php/test/clients/messaging-api/Api/MessagingApiApiTest.php)<br>[test/clients/channel-access-token/Api/ChannelAccessTokenApiTest.php](../../../../sources/line__line-bot-sdk-php/test/clients/channel-access-token/Api/ChannelAccessTokenApiTest.php)<br>[src/webhook/test/Model/AccountLinkEventTest.php](../../../../sources/line__line-bot-sdk-php/src/webhook/test/Model/AccountLinkEventTest.php)<br>[src/webhook/test/Model/ActivatedEventTest.php](../../../../sources/line__line-bot-sdk-php/src/webhook/test/Model/ActivatedEventTest.php)<br>[src/webhook/test/Model/AllMentioneeTest.php](../../../../sources/line__line-bot-sdk-php/src/webhook/test/Model/AllMentioneeTest.php) |
| CI workflow | 7 | [.github/workflows/check-eol-newrelease.yml](../../../../sources/line__line-bot-sdk-php/.github/workflows/check-eol-newrelease.yml)<br>[.github/workflows/close-issue.yml](../../../../sources/line__line-bot-sdk-php/.github/workflows/close-issue.yml)<br>[.github/workflows/create-draft-release.yml](../../../../sources/line__line-bot-sdk-php/.github/workflows/create-draft-release.yml)<br>[.github/workflows/generate-code.yml](../../../../sources/line__line-bot-sdk-php/.github/workflows/generate-code.yml)<br>[.github/workflows/label-issue.yml](../../../../sources/line__line-bot-sdk-php/.github/workflows/label-issue.yml)<br>[.github/workflows/php-checks.yml](../../../../sources/line__line-bot-sdk-php/.github/workflows/php-checks.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | path scan에서 primary entrypoint가 명확하지 않음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `.github/workflows/check-eol-newrelease.yml`, `.github/workflows/close-issue.yml`, `.github/workflows/create-draft-release.yml`.
2. agent/tool runtime 매핑: `tools/.openapi-generator-ignore`, `tools/bootstrap.php`, `tools/check_copyright.sh`.
3. retrieval/memory/indexing 확인: `examples/KitchenSink/public/index.php`, `examples/EchoBot/public/index.php`, `docs/index.html`.
4. test/eval 파일로 동작 검증: `test/clients/messaging-api/Model/TextMessageTest.php`, `test/clients/messaging-api/Api/MessagingApiApiTest.php`, `test/clients/channel-access-token/Api/ChannelAccessTokenApiTest.php`.

## 기존 레포 인사이트

개발 생산성/DevTools 관점에서 LINE Messaging API SDK for PHP. 핵심 구조 신호는 PHP, README.md, LICENSE, tests, ci, docs이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 개발 생산성/DevTools 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 더 깊은 구조 스캔 필요입니다.
