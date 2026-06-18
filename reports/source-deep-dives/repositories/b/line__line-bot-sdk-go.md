# line/line-bot-sdk-go Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

LINE Messaging API SDK for Go

## 요약

- 조사 단위: `sources/line__line-bot-sdk-go` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 545 files, 83 directories, depth score 100, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

개발 생산성/DevTools 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 entrypoints=examples/richmenu_helper/main.go, examples/kitchensink/server.go, examples/insight_helper/main.go이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | line/line-bot-sdk-go |
| Topic | Developer Productivity and DevTools / 개발 생산성/DevTools |
| Region | korea |
| Language | Go |
| Stars | 951 |
| Forks | 242 |
| License | Apache-2.0 |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/line__line-bot-sdk-go](../../../../sources/line__line-bot-sdk-go) |
| Existing report | [reports/korea-trending/repositories/line__line-bot-sdk-go.md](../../../korea-trending/repositories/line__line-bot-sdk-go.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 545 / 83 |
| Max observed depth | 9 |
| Top directories | .github, examples, generator, line-openapi, linebot, script, testdata, tools, util |
| Top extensions | .go: 457, (none): 35, .pebble: 12, .java: 7, .yml: 7, .md: 6, .png: 5, .sh: 3, .jpg: 2, .cjs: 1, .codegenconfig: 1, .jar: 1 |
| Source patterns | cli-first, api/server, agent/tool runtime, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
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


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 6 | [examples/richmenu_helper/main.go](../../../../sources/line__line-bot-sdk-go/examples/richmenu_helper/main.go)<br>[examples/kitchensink/server.go](../../../../sources/line__line-bot-sdk-go/examples/kitchensink/server.go)<br>[examples/insight_helper/main.go](../../../../sources/line__line-bot-sdk-go/examples/insight_helper/main.go)<br>[examples/echo_bot_handler/server.go](../../../../sources/line__line-bot-sdk-go/examples/echo_bot_handler/server.go)<br>[examples/echo_bot/server.go](../../../../sources/line__line-bot-sdk-go/examples/echo_bot/server.go)<br>[examples/delivery_helper/main.go](../../../../sources/line__line-bot-sdk-go/examples/delivery_helper/main.go) |
| agentRuntime | 1 | [tools/openapi-generator-cli.jar](../../../../sources/line__line-bot-sdk-go/tools/openapi-generator-cli.jar) |
| mcp | 0 | not obvious |
| retrieval | 0 | not obvious |
| spec | 0 | not obvious |
| eval | 65 | [util/find_dollar_sign_test.go](../../../../sources/line__line-bot-sdk-go/util/find_dollar_sign_test.go)<br>[script/test.sh](../../../../sources/line__line-bot-sdk-go/script/test.sh)<br>[linebot/account_link_test.go](../../../../sources/line__line-bot-sdk-go/linebot/account_link_test.go)<br>[linebot/audience_test.go](../../../../sources/line__line-bot-sdk-go/linebot/audience_test.go)<br>[linebot/client_test.go](../../../../sources/line__line-bot-sdk-go/linebot/client_test.go)<br>[linebot/delivery_test.go](../../../../sources/line__line-bot-sdk-go/linebot/delivery_test.go)<br>[linebot/example_test.go](../../../../sources/line__line-bot-sdk-go/linebot/example_test.go)<br>[linebot/flex_test.go](../../../../sources/line__line-bot-sdk-go/linebot/flex_test.go) |
| security | 3 | [linebot/oauth_test.go](../../../../sources/line__line-bot-sdk-go/linebot/oauth_test.go)<br>[linebot/oauth.go](../../../../sources/line__line-bot-sdk-go/linebot/oauth.go)<br>[linebot/manage_audience/model_audience_group_permission.go](../../../../sources/line__line-bot-sdk-go/linebot/manage_audience/model_audience_group_permission.go) |
| ci | 6 | [.github/workflows/check-eol-newrelease.yml](../../../../sources/line__line-bot-sdk-go/.github/workflows/check-eol-newrelease.yml)<br>[.github/workflows/close-issue.yml](../../../../sources/line__line-bot-sdk-go/.github/workflows/close-issue.yml)<br>[.github/workflows/create-draft-release.yml](../../../../sources/line__line-bot-sdk-go/.github/workflows/create-draft-release.yml)<br>[.github/workflows/generate-code.yml](../../../../sources/line__line-bot-sdk-go/.github/workflows/generate-code.yml)<br>[.github/workflows/go.yml](../../../../sources/line__line-bot-sdk-go/.github/workflows/go.yml)<br>[.github/workflows/label-issue.yml](../../../../sources/line__line-bot-sdk-go/.github/workflows/label-issue.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 1 | [README.md](../../../../sources/line__line-bot-sdk-go/README.md) |
| config | 1 | [go.mod](../../../../sources/line__line-bot-sdk-go/go.mod) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 65 | [util/find_dollar_sign_test.go](../../../../sources/line__line-bot-sdk-go/util/find_dollar_sign_test.go)<br>[script/test.sh](../../../../sources/line__line-bot-sdk-go/script/test.sh)<br>[linebot/account_link_test.go](../../../../sources/line__line-bot-sdk-go/linebot/account_link_test.go)<br>[linebot/audience_test.go](../../../../sources/line__line-bot-sdk-go/linebot/audience_test.go)<br>[linebot/client_test.go](../../../../sources/line__line-bot-sdk-go/linebot/client_test.go)<br>[linebot/delivery_test.go](../../../../sources/line__line-bot-sdk-go/linebot/delivery_test.go) |
| CI workflows | 6 | [.github/workflows/check-eol-newrelease.yml](../../../../sources/line__line-bot-sdk-go/.github/workflows/check-eol-newrelease.yml)<br>[.github/workflows/close-issue.yml](../../../../sources/line__line-bot-sdk-go/.github/workflows/close-issue.yml)<br>[.github/workflows/create-draft-release.yml](../../../../sources/line__line-bot-sdk-go/.github/workflows/create-draft-release.yml)<br>[.github/workflows/generate-code.yml](../../../../sources/line__line-bot-sdk-go/.github/workflows/generate-code.yml)<br>[.github/workflows/go.yml](../../../../sources/line__line-bot-sdk-go/.github/workflows/go.yml)<br>[.github/workflows/label-issue.yml](../../../../sources/line__line-bot-sdk-go/.github/workflows/label-issue.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 3 | [linebot/oauth_test.go](../../../../sources/line__line-bot-sdk-go/linebot/oauth_test.go)<br>[linebot/oauth.go](../../../../sources/line__line-bot-sdk-go/linebot/oauth.go)<br>[linebot/manage_audience/model_audience_group_permission.go](../../../../sources/line__line-bot-sdk-go/linebot/manage_audience/model_audience_group_permission.go) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `examples/richmenu_helper/main.go`, `examples/kitchensink/server.go`, `examples/insight_helper/main.go`.
2. Trace execution through entrypoints: `examples/richmenu_helper/main.go`, `examples/kitchensink/server.go`, `examples/insight_helper/main.go`.
3. Map agent/tool runtime through: `tools/openapi-generator-cli.jar`.
4. Verify behavior through test/eval files: `util/find_dollar_sign_test.go`, `script/test.sh`, `linebot/account_link_test.go`.

## Existing Repository Insight

개발 생산성/DevTools 관점에서 LINE Messaging API SDK for Go. 핵심 구조 신호는 Go, go.mod, README.md, tests, ci, docs이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 개발 생산성/DevTools 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 needs deeper structural scan입니다.
