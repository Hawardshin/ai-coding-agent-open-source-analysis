# line/line-bot-sdk-go 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

LINE Messaging API SDK for Go

## 요약

- 조사 단위: `sources/line__line-bot-sdk-go` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 545 files, 83 directories, depth score 94, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

개발 생산성/DevTools 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 entrypoints=examples/richmenu_helper/main.go, examples/kitchensink/server.go, examples/insight_helper/main.go이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | line/line-bot-sdk-go |
| 주제 | 개발 생산성/DevTools / 개발 생산성/DevTools |
| Region | korea |
| Language | Go |
| Stars | 951 |
| Forks | 242 |
| License | Apache-2.0 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/line__line-bot-sdk-go](../../../../sources/line__line-bot-sdk-go) |
| 기존 보고서 | [reports/korea-trending/repositories/line__line-bot-sdk-go.md](../../../korea-trending/repositories/line__line-bot-sdk-go.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 545 / 83 |
| 관측 최대 깊이 | 9 |
| 상위 디렉터리 | .github, examples, generator, line-openapi, linebot, script, testdata, tools, util |
| 상위 확장자 | .go: 457, (none): 35, .pebble: 12, .java: 7, .yml: 7, .md: 6, .png: 5, .sh: 3, .jpg: 2, .cjs: 1, .codegenconfig: 1, .jar: 1 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| .github | ci surface | 1 |
| examples | top-level component | 1 |
| examples/delivery_helper | examples workspace | 1 |
| examples/echo_bot | examples workspace | 1 |
| examples/echo_bot_handler | examples workspace | 1 |
| examples/insight_helper | examples workspace | 1 |
| examples/kitchensink | examples workspace | 1 |
| examples/richmenu_helper | examples workspace | 1 |
| generator | top-level component | 1 |
| line-openapi | source boundary | 1 |
| linebot | top-level component | 1 |
| script | top-level component | 1 |
| testdata | validation surface | 1 |
| tools | top-level component | 1 |
| util | top-level component | 1 |


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
| entrypoints | [examples/richmenu_helper/main.go](../../../../sources/line__line-bot-sdk-go/examples/richmenu_helper/main.go) | entrypoints signal |
| entrypoints | [examples/kitchensink/server.go](../../../../sources/line__line-bot-sdk-go/examples/kitchensink/server.go) | entrypoints signal |
| entrypoints | [examples/insight_helper/main.go](../../../../sources/line__line-bot-sdk-go/examples/insight_helper/main.go) | entrypoints signal |
| entrypoints | [examples/echo_bot_handler/server.go](../../../../sources/line__line-bot-sdk-go/examples/echo_bot_handler/server.go) | entrypoints signal |
| config | [go.mod](../../../../sources/line__line-bot-sdk-go/go.mod) | config signal |
| ci | [.github/workflows/check-eol-newrelease.yml](../../../../sources/line__line-bot-sdk-go/.github/workflows/check-eol-newrelease.yml) | ci signal |
| ci | [.github/workflows/close-issue.yml](../../../../sources/line__line-bot-sdk-go/.github/workflows/close-issue.yml) | ci signal |
| ci | [.github/workflows/create-draft-release.yml](../../../../sources/line__line-bot-sdk-go/.github/workflows/create-draft-release.yml) | ci signal |
| ci | [.github/workflows/generate-code.yml](../../../../sources/line__line-bot-sdk-go/.github/workflows/generate-code.yml) | ci signal |
| docs | [README.md](../../../../sources/line__line-bot-sdk-go/README.md) | docs signal |
| eval | [util/find_dollar_sign_test.go](../../../../sources/line__line-bot-sdk-go/util/find_dollar_sign_test.go) | eval support |
| eval | [script/test.sh](../../../../sources/line__line-bot-sdk-go/script/test.sh) | eval support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 6 | [examples/richmenu_helper/main.go](../../../../sources/line__line-bot-sdk-go/examples/richmenu_helper/main.go)<br>[examples/kitchensink/server.go](../../../../sources/line__line-bot-sdk-go/examples/kitchensink/server.go)<br>[examples/insight_helper/main.go](../../../../sources/line__line-bot-sdk-go/examples/insight_helper/main.go)<br>[examples/echo_bot_handler/server.go](../../../../sources/line__line-bot-sdk-go/examples/echo_bot_handler/server.go)<br>[examples/echo_bot/server.go](../../../../sources/line__line-bot-sdk-go/examples/echo_bot/server.go)<br>[examples/delivery_helper/main.go](../../../../sources/line__line-bot-sdk-go/examples/delivery_helper/main.go) |
| agentRuntime | 1 | [tools/openapi-generator-cli.jar](../../../../sources/line__line-bot-sdk-go/tools/openapi-generator-cli.jar) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 0 | 명확하지 않음 |
| spec | 0 | 명확하지 않음 |
| eval | 65 | [util/find_dollar_sign_test.go](../../../../sources/line__line-bot-sdk-go/util/find_dollar_sign_test.go)<br>[script/test.sh](../../../../sources/line__line-bot-sdk-go/script/test.sh)<br>[linebot/account_link_test.go](../../../../sources/line__line-bot-sdk-go/linebot/account_link_test.go)<br>[linebot/audience_test.go](../../../../sources/line__line-bot-sdk-go/linebot/audience_test.go)<br>[linebot/client_test.go](../../../../sources/line__line-bot-sdk-go/linebot/client_test.go)<br>[linebot/delivery_test.go](../../../../sources/line__line-bot-sdk-go/linebot/delivery_test.go)<br>[linebot/example_test.go](../../../../sources/line__line-bot-sdk-go/linebot/example_test.go)<br>[linebot/flex_test.go](../../../../sources/line__line-bot-sdk-go/linebot/flex_test.go) |
| security | 3 | [linebot/oauth_test.go](../../../../sources/line__line-bot-sdk-go/linebot/oauth_test.go)<br>[linebot/oauth.go](../../../../sources/line__line-bot-sdk-go/linebot/oauth.go)<br>[linebot/manage_audience/model_audience_group_permission.go](../../../../sources/line__line-bot-sdk-go/linebot/manage_audience/model_audience_group_permission.go) |
| ci | 6 | [.github/workflows/check-eol-newrelease.yml](../../../../sources/line__line-bot-sdk-go/.github/workflows/check-eol-newrelease.yml)<br>[.github/workflows/close-issue.yml](../../../../sources/line__line-bot-sdk-go/.github/workflows/close-issue.yml)<br>[.github/workflows/create-draft-release.yml](../../../../sources/line__line-bot-sdk-go/.github/workflows/create-draft-release.yml)<br>[.github/workflows/generate-code.yml](../../../../sources/line__line-bot-sdk-go/.github/workflows/generate-code.yml)<br>[.github/workflows/go.yml](../../../../sources/line__line-bot-sdk-go/.github/workflows/go.yml)<br>[.github/workflows/label-issue.yml](../../../../sources/line__line-bot-sdk-go/.github/workflows/label-issue.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 1 | [README.md](../../../../sources/line__line-bot-sdk-go/README.md) |
| config | 1 | [go.mod](../../../../sources/line__line-bot-sdk-go/go.mod) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 65 | [util/find_dollar_sign_test.go](../../../../sources/line__line-bot-sdk-go/util/find_dollar_sign_test.go)<br>[script/test.sh](../../../../sources/line__line-bot-sdk-go/script/test.sh)<br>[linebot/account_link_test.go](../../../../sources/line__line-bot-sdk-go/linebot/account_link_test.go)<br>[linebot/audience_test.go](../../../../sources/line__line-bot-sdk-go/linebot/audience_test.go)<br>[linebot/client_test.go](../../../../sources/line__line-bot-sdk-go/linebot/client_test.go)<br>[linebot/delivery_test.go](../../../../sources/line__line-bot-sdk-go/linebot/delivery_test.go) |
| CI workflow | 6 | [.github/workflows/check-eol-newrelease.yml](../../../../sources/line__line-bot-sdk-go/.github/workflows/check-eol-newrelease.yml)<br>[.github/workflows/close-issue.yml](../../../../sources/line__line-bot-sdk-go/.github/workflows/close-issue.yml)<br>[.github/workflows/create-draft-release.yml](../../../../sources/line__line-bot-sdk-go/.github/workflows/create-draft-release.yml)<br>[.github/workflows/generate-code.yml](../../../../sources/line__line-bot-sdk-go/.github/workflows/generate-code.yml)<br>[.github/workflows/go.yml](../../../../sources/line__line-bot-sdk-go/.github/workflows/go.yml)<br>[.github/workflows/label-issue.yml](../../../../sources/line__line-bot-sdk-go/.github/workflows/label-issue.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 3 | [linebot/oauth_test.go](../../../../sources/line__line-bot-sdk-go/linebot/oauth_test.go)<br>[linebot/oauth.go](../../../../sources/line__line-bot-sdk-go/linebot/oauth.go)<br>[linebot/manage_audience/model_audience_group_permission.go](../../../../sources/line__line-bot-sdk-go/linebot/manage_audience/model_audience_group_permission.go) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `examples/richmenu_helper/main.go`, `examples/kitchensink/server.go`, `examples/insight_helper/main.go`.
2. entrypoint를 따라 실행 흐름 확인: `examples/richmenu_helper/main.go`, `examples/kitchensink/server.go`, `examples/insight_helper/main.go`.
3. agent/tool runtime 매핑: `tools/openapi-generator-cli.jar`.
4. test/eval 파일로 동작 검증: `util/find_dollar_sign_test.go`, `script/test.sh`, `linebot/account_link_test.go`.

## 기존 레포 인사이트

개발 생산성/DevTools 관점에서 LINE Messaging API SDK for Go. 핵심 구조 신호는 Go, go.mod, README.md, tests, ci, docs이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 개발 생산성/DevTools 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 더 깊은 구조 스캔 필요입니다.
