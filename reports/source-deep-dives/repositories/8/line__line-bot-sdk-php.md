# line/line-bot-sdk-php Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

LINE Messaging API SDK for PHP

## 요약

- 조사 단위: `sources/line__line-bot-sdk-php` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 1,825 files, 85 directories, depth score 85, key references 10개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

개발 생산성/DevTools 관점에서 agent/tool runtime, retrieval/vector path, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 ci=.github/workflows/check-eol-newrelease.yml, .github/workflows/close-issue.yml, .github/workflows/create-draft-release.yml이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 10개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | line/line-bot-sdk-php |
| Topic | Developer Productivity and DevTools / 개발 생산성/DevTools |
| Region | korea |
| Language | PHP |
| Stars | 733 |
| Forks | 647 |
| License | Apache-2.0 |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/line__line-bot-sdk-php](../../../../sources/line__line-bot-sdk-php) |
| Existing report | [reports/korea-trending/repositories/line__line-bot-sdk-php.md](../../../korea-trending/repositories/line__line-bot-sdk-php.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 1825 / 85 |
| Max observed depth | 9 |
| Top directories | .github, docs, examples, generator, line-openapi, src, test, tools |
| Top extensions | .html: 1264, .php: 502, (none): 16, .yml: 9, .md: 8, .xml: 5, .json: 4, .css: 3, .js: 3, .jpg: 2, .mustache: 2, .sh: 2 |
| Source patterns | agent/tool runtime, retrieval/vector path, eval/test harness |

### Components

| Component | Role | Signal count |
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


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 8 | [tools/.openapi-generator-ignore](../../../../sources/line__line-bot-sdk-php/tools/.openapi-generator-ignore)<br>[tools/bootstrap.php](../../../../sources/line__line-bot-sdk-php/tools/bootstrap.php)<br>[tools/check_copyright.sh](../../../../sources/line__line-bot-sdk-php/tools/check_copyright.sh)<br>[tools/patch-gen-oas-client.php](../../../../sources/line__line-bot-sdk-php/tools/patch-gen-oas-client.php)<br>[tools/custom-template/model_generic.mustache](../../../../sources/line__line-bot-sdk-php/tools/custom-template/model_generic.mustache)<br>[tools/custom-template/ObjectSerializer.mustache](../../../../sources/line__line-bot-sdk-php/tools/custom-template/ObjectSerializer.mustache)<br>[docs/files/tools-bootstrap.html](../../../../sources/line__line-bot-sdk-php/docs/files/tools-bootstrap.html)<br>[docs/files/tools-patch-gen-oas-client.html](../../../../sources/line__line-bot-sdk-php/docs/files/tools-patch-gen-oas-client.html) |
| mcp | 0 | not obvious |
| retrieval | 3 | [examples/KitchenSink/public/index.php](../../../../sources/line__line-bot-sdk-php/examples/KitchenSink/public/index.php)<br>[examples/EchoBot/public/index.php](../../../../sources/line__line-bot-sdk-php/examples/EchoBot/public/index.php)<br>[docs/index.html](../../../../sources/line__line-bot-sdk-php/docs/index.html) |
| spec | 0 | not obvious |
| eval | 272 | [test/clients/messaging-api/Model/TextMessageTest.php](../../../../sources/line__line-bot-sdk-php/test/clients/messaging-api/Model/TextMessageTest.php)<br>[test/clients/messaging-api/Api/MessagingApiApiTest.php](../../../../sources/line__line-bot-sdk-php/test/clients/messaging-api/Api/MessagingApiApiTest.php)<br>[test/clients/channel-access-token/Api/ChannelAccessTokenApiTest.php](../../../../sources/line__line-bot-sdk-php/test/clients/channel-access-token/Api/ChannelAccessTokenApiTest.php)<br>[src/webhook/test/Model/AccountLinkEventTest.php](../../../../sources/line__line-bot-sdk-php/src/webhook/test/Model/AccountLinkEventTest.php)<br>[src/webhook/test/Model/ActivatedEventTest.php](../../../../sources/line__line-bot-sdk-php/src/webhook/test/Model/ActivatedEventTest.php)<br>[src/webhook/test/Model/AllMentioneeTest.php](../../../../sources/line__line-bot-sdk-php/src/webhook/test/Model/AllMentioneeTest.php)<br>[src/webhook/test/Model/AttachedModuleContentTest.php](../../../../sources/line__line-bot-sdk-php/src/webhook/test/Model/AttachedModuleContentTest.php)<br>[src/webhook/test/Model/AudioMessageContentTest.php](../../../../sources/line__line-bot-sdk-php/src/webhook/test/Model/AudioMessageContentTest.php) |
| security | 0 | not obvious |
| ci | 7 | [.github/workflows/check-eol-newrelease.yml](../../../../sources/line__line-bot-sdk-php/.github/workflows/check-eol-newrelease.yml)<br>[.github/workflows/close-issue.yml](../../../../sources/line__line-bot-sdk-php/.github/workflows/close-issue.yml)<br>[.github/workflows/create-draft-release.yml](../../../../sources/line__line-bot-sdk-php/.github/workflows/create-draft-release.yml)<br>[.github/workflows/generate-code.yml](../../../../sources/line__line-bot-sdk-php/.github/workflows/generate-code.yml)<br>[.github/workflows/label-issue.yml](../../../../sources/line__line-bot-sdk-php/.github/workflows/label-issue.yml)<br>[.github/workflows/php-checks.yml](../../../../sources/line__line-bot-sdk-php/.github/workflows/php-checks.yml)<br>[.github/workflows/release.yml](../../../../sources/line__line-bot-sdk-php/.github/workflows/release.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 1273 | [README.md](../../../../sources/line__line-bot-sdk-php/README.md)<br>[examples/KitchenSink/README.md](../../../../sources/line__line-bot-sdk-php/examples/KitchenSink/README.md)<br>[examples/EchoBot/README.md](../../../../sources/line__line-bot-sdk-php/examples/EchoBot/README.md)<br>[docs/index.html](../../../../sources/line__line-bot-sdk-php/docs/index.html)<br>[docs/reports/deprecated.html](../../../../sources/line__line-bot-sdk-php/docs/reports/deprecated.html)<br>[docs/reports/errors.html](../../../../sources/line__line-bot-sdk-php/docs/reports/errors.html)<br>[docs/reports/markers.html](../../../../sources/line__line-bot-sdk-php/docs/reports/markers.html)<br>[docs/packages/Application.html](../../../../sources/line__line-bot-sdk-php/docs/packages/Application.html) |
| config | 0 | not obvious |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 272 | [test/clients/messaging-api/Model/TextMessageTest.php](../../../../sources/line__line-bot-sdk-php/test/clients/messaging-api/Model/TextMessageTest.php)<br>[test/clients/messaging-api/Api/MessagingApiApiTest.php](../../../../sources/line__line-bot-sdk-php/test/clients/messaging-api/Api/MessagingApiApiTest.php)<br>[test/clients/channel-access-token/Api/ChannelAccessTokenApiTest.php](../../../../sources/line__line-bot-sdk-php/test/clients/channel-access-token/Api/ChannelAccessTokenApiTest.php)<br>[src/webhook/test/Model/AccountLinkEventTest.php](../../../../sources/line__line-bot-sdk-php/src/webhook/test/Model/AccountLinkEventTest.php)<br>[src/webhook/test/Model/ActivatedEventTest.php](../../../../sources/line__line-bot-sdk-php/src/webhook/test/Model/ActivatedEventTest.php)<br>[src/webhook/test/Model/AllMentioneeTest.php](../../../../sources/line__line-bot-sdk-php/src/webhook/test/Model/AllMentioneeTest.php) |
| CI workflows | 7 | [.github/workflows/check-eol-newrelease.yml](../../../../sources/line__line-bot-sdk-php/.github/workflows/check-eol-newrelease.yml)<br>[.github/workflows/close-issue.yml](../../../../sources/line__line-bot-sdk-php/.github/workflows/close-issue.yml)<br>[.github/workflows/create-draft-release.yml](../../../../sources/line__line-bot-sdk-php/.github/workflows/create-draft-release.yml)<br>[.github/workflows/generate-code.yml](../../../../sources/line__line-bot-sdk-php/.github/workflows/generate-code.yml)<br>[.github/workflows/label-issue.yml](../../../../sources/line__line-bot-sdk-php/.github/workflows/label-issue.yml)<br>[.github/workflows/php-checks.yml](../../../../sources/line__line-bot-sdk-php/.github/workflows/php-checks.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | container/deploy path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `.github/workflows/check-eol-newrelease.yml`, `.github/workflows/close-issue.yml`, `.github/workflows/create-draft-release.yml`.
2. Map agent/tool runtime through: `tools/.openapi-generator-ignore`, `tools/bootstrap.php`, `tools/check_copyright.sh`.
3. Inspect retrieval/memory/indexing through: `examples/KitchenSink/public/index.php`, `examples/EchoBot/public/index.php`, `docs/index.html`.
4. Verify behavior through test/eval files: `test/clients/messaging-api/Model/TextMessageTest.php`, `test/clients/messaging-api/Api/MessagingApiApiTest.php`, `test/clients/channel-access-token/Api/ChannelAccessTokenApiTest.php`.

## Existing Repository Insight

개발 생산성/DevTools 관점에서 LINE Messaging API SDK for PHP. 핵심 구조 신호는 PHP, README.md, LICENSE, tests, ci, docs이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 개발 생산성/DevTools 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 needs deeper structural scan입니다.
