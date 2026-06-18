# line/line-bot-sdk-ruby Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

LINE Messaging API SDK for Ruby

## 요약

- 조사 단위: `sources/line__line-bot-sdk-ruby` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 842 files, 129 directories, depth score 84, key references 10개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

개발 생산성/DevTools 관점에서 spec/docs-driven, eval/test harness, security/policy surface 구조로 읽힌다. 핵심 소스 근거는 ci=.github/workflows/check-eol-newrelease.yml, .github/workflows/close-issue.yml, .github/workflows/create-draft-release.yml이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 10개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | line/line-bot-sdk-ruby |
| Topic | Developer Productivity and DevTools / 개발 생산성/DevTools |
| Region | korea |
| Language | Ruby |
| Stars | 491 |
| Forks | 126 |
| License | Apache-2.0 |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/line__line-bot-sdk-ruby](../../../../sources/line__line-bot-sdk-ruby) |
| Existing report | [reports/korea-trending/repositories/line__line-bot-sdk-ruby.md](../../../korea-trending/repositories/line__line-bot-sdk-ruby.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 842 / 129 |
| Max observed depth | 9 |
| Top directories | .github, examples, generator, lib, line-openapi, sig, sig-vendor, spec |
| Top extensions | .rb: 371, .rbs: 342, (none): 69, .md: 11, .yml: 11, .java: 7, .pebble: 7, .lock: 6, .png: 4, .txt: 2, .yaml: 2, .cjs: 1 |
| Source patterns | spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| examples/v2 | examples workspace | 5 |
| lib | source boundary | 4 |
| .github | ci surface | 1 |
| examples | top-level component | 1 |
| generator | top-level component | 1 |
| line-openapi | source boundary | 1 |
| sig | top-level component | 1 |
| sig-vendor | top-level component | 1 |
| spec | top-level component | 1 |


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
| ci | [.github/workflows/check-eol-newrelease.yml](../../../../sources/line__line-bot-sdk-ruby/.github/workflows/check-eol-newrelease.yml) | ci signal |
| ci | [.github/workflows/close-issue.yml](../../../../sources/line__line-bot-sdk-ruby/.github/workflows/close-issue.yml) | ci signal |
| ci | [.github/workflows/create-draft-release.yml](../../../../sources/line__line-bot-sdk-ruby/.github/workflows/create-draft-release.yml) | ci signal |
| ci | [.github/workflows/deploy-doc.yml](../../../../sources/line__line-bot-sdk-ruby/.github/workflows/deploy-doc.yml) | ci signal |
| docs | [README.md](../../../../sources/line__line-bot-sdk-ruby/README.md) | docs signal |
| docs | [examples/v2/rich_menu/README.md](../../../../sources/line__line-bot-sdk-ruby/examples/v2/rich_menu/README.md) | docs signal |
| docs | [examples/v2/kitchensink/README.md](../../../../sources/line__line-bot-sdk-ruby/examples/v2/kitchensink/README.md) | docs signal |
| docs | [examples/v2/echobot/README.md](../../../../sources/line__line-bot-sdk-ruby/examples/v2/echobot/README.md) | docs signal |
| eval | [spec/spec_helper.rb](../../../../sources/line__line-bot-sdk-ruby/spec/spec_helper.rb) | eval support |
| eval | [spec/workflows/ruby_version_consistency_spec.rb](../../../../sources/line__line-bot-sdk-ruby/spec/workflows/ruby_version_consistency_spec.rb) | eval support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 0 | not obvious |
| spec | 16 | [spec/spec_helper.rb](../../../../sources/line__line-bot-sdk-ruby/spec/spec_helper.rb)<br>[spec/workflows/ruby_version_consistency_spec.rb](../../../../sources/line__line-bot-sdk-ruby/spec/workflows/ruby_version_consistency_spec.rb)<br>[spec/shared/no_missing_require_spec.rb](../../../../sources/line__line-bot-sdk-ruby/spec/shared/no_missing_require_spec.rb)<br>[spec/line/bot/line_bot_api_gem_spec.rb](../../../../sources/line__line-bot-sdk-ruby/spec/line/bot/line_bot_api_gem_spec.rb)<br>[spec/line/bot/line_bot_gem_spec.rb](../../../../sources/line__line-bot-sdk-ruby/spec/line/bot/line_bot_gem_spec.rb)<br>[spec/line/bot/v2/misc_spec.rb](../../../../sources/line__line-bot-sdk-ruby/spec/line/bot/v2/misc_spec.rb)<br>[spec/line/bot/v2/utils_spec.rb](../../../../sources/line__line-bot-sdk-ruby/spec/line/bot/v2/utils_spec.rb)<br>[spec/line/bot/v2/webhook_parser_skip_verification_spec.rb](../../../../sources/line__line-bot-sdk-ruby/spec/line/bot/v2/webhook_parser_skip_verification_spec.rb) |
| eval | 20 | [spec/spec_helper.rb](../../../../sources/line__line-bot-sdk-ruby/spec/spec_helper.rb)<br>[spec/workflows/ruby_version_consistency_spec.rb](../../../../sources/line__line-bot-sdk-ruby/spec/workflows/ruby_version_consistency_spec.rb)<br>[spec/shared/no_missing_require_spec.rb](../../../../sources/line__line-bot-sdk-ruby/spec/shared/no_missing_require_spec.rb)<br>[spec/line/bot/line_bot_api_gem_spec.rb](../../../../sources/line__line-bot-sdk-ruby/spec/line/bot/line_bot_api_gem_spec.rb)<br>[spec/line/bot/line_bot_gem_spec.rb](../../../../sources/line__line-bot-sdk-ruby/spec/line/bot/line_bot_gem_spec.rb)<br>[spec/line/bot/v2/misc_spec.rb](../../../../sources/line__line-bot-sdk-ruby/spec/line/bot/v2/misc_spec.rb)<br>[spec/line/bot/v2/utils_spec.rb](../../../../sources/line__line-bot-sdk-ruby/spec/line/bot/v2/utils_spec.rb)<br>[spec/line/bot/v2/webhook_parser_skip_verification_spec.rb](../../../../sources/line__line-bot-sdk-ruby/spec/line/bot/v2/webhook_parser_skip_verification_spec.rb) |
| security | 2 | [sig/line/bot/v2/manage_audience/model/audience_group_permission.rbs](../../../../sources/line__line-bot-sdk-ruby/sig/line/bot/v2/manage_audience/model/audience_group_permission.rbs)<br>[lib/line/bot/v2/manage_audience/model/audience_group_permission.rb](../../../../sources/line__line-bot-sdk-ruby/lib/line/bot/v2/manage_audience/model/audience_group_permission.rb) |
| ci | 8 | [.github/workflows/check-eol-newrelease.yml](../../../../sources/line__line-bot-sdk-ruby/.github/workflows/check-eol-newrelease.yml)<br>[.github/workflows/close-issue.yml](../../../../sources/line__line-bot-sdk-ruby/.github/workflows/close-issue.yml)<br>[.github/workflows/create-draft-release.yml](../../../../sources/line__line-bot-sdk-ruby/.github/workflows/create-draft-release.yml)<br>[.github/workflows/deploy-doc.yml](../../../../sources/line__line-bot-sdk-ruby/.github/workflows/deploy-doc.yml)<br>[.github/workflows/generate-code.yml](../../../../sources/line__line-bot-sdk-ruby/.github/workflows/generate-code.yml)<br>[.github/workflows/label-issue.yml](../../../../sources/line__line-bot-sdk-ruby/.github/workflows/label-issue.yml)<br>[.github/workflows/publish.yml](../../../../sources/line__line-bot-sdk-ruby/.github/workflows/publish.yml)<br>[.github/workflows/pull_request.yml](../../../../sources/line__line-bot-sdk-ruby/.github/workflows/pull_request.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 6 | [README.md](../../../../sources/line__line-bot-sdk-ruby/README.md)<br>[examples/v2/rich_menu/README.md](../../../../sources/line__line-bot-sdk-ruby/examples/v2/rich_menu/README.md)<br>[examples/v2/kitchensink/README.md](../../../../sources/line__line-bot-sdk-ruby/examples/v2/kitchensink/README.md)<br>[examples/v2/echobot/README.md](../../../../sources/line__line-bot-sdk-ruby/examples/v2/echobot/README.md)<br>[examples/v2/channel_access_token/README.md](../../../../sources/line__line-bot-sdk-ruby/examples/v2/channel_access_token/README.md)<br>[examples/v2/audience/README.md](../../../../sources/line__line-bot-sdk-ruby/examples/v2/audience/README.md) |
| config | 0 | not obvious |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 20 | [spec/spec_helper.rb](../../../../sources/line__line-bot-sdk-ruby/spec/spec_helper.rb)<br>[spec/workflows/ruby_version_consistency_spec.rb](../../../../sources/line__line-bot-sdk-ruby/spec/workflows/ruby_version_consistency_spec.rb)<br>[spec/shared/no_missing_require_spec.rb](../../../../sources/line__line-bot-sdk-ruby/spec/shared/no_missing_require_spec.rb)<br>[spec/line/bot/line_bot_api_gem_spec.rb](../../../../sources/line__line-bot-sdk-ruby/spec/line/bot/line_bot_api_gem_spec.rb)<br>[spec/line/bot/line_bot_gem_spec.rb](../../../../sources/line__line-bot-sdk-ruby/spec/line/bot/line_bot_gem_spec.rb)<br>[spec/line/bot/v2/misc_spec.rb](../../../../sources/line__line-bot-sdk-ruby/spec/line/bot/v2/misc_spec.rb) |
| CI workflows | 8 | [.github/workflows/check-eol-newrelease.yml](../../../../sources/line__line-bot-sdk-ruby/.github/workflows/check-eol-newrelease.yml)<br>[.github/workflows/close-issue.yml](../../../../sources/line__line-bot-sdk-ruby/.github/workflows/close-issue.yml)<br>[.github/workflows/create-draft-release.yml](../../../../sources/line__line-bot-sdk-ruby/.github/workflows/create-draft-release.yml)<br>[.github/workflows/deploy-doc.yml](../../../../sources/line__line-bot-sdk-ruby/.github/workflows/deploy-doc.yml)<br>[.github/workflows/generate-code.yml](../../../../sources/line__line-bot-sdk-ruby/.github/workflows/generate-code.yml)<br>[.github/workflows/label-issue.yml](../../../../sources/line__line-bot-sdk-ruby/.github/workflows/label-issue.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 2 | [sig/line/bot/v2/manage_audience/model/audience_group_permission.rbs](../../../../sources/line__line-bot-sdk-ruby/sig/line/bot/v2/manage_audience/model/audience_group_permission.rbs)<br>[lib/line/bot/v2/manage_audience/model/audience_group_permission.rb](../../../../sources/line__line-bot-sdk-ruby/lib/line/bot/v2/manage_audience/model/audience_group_permission.rb) |
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
2. Verify behavior through test/eval files: `spec/spec_helper.rb`, `spec/workflows/ruby_version_consistency_spec.rb`, `spec/shared/no_missing_require_spec.rb`.

## Existing Repository Insight

개발 생산성/DevTools 관점에서 LINE Messaging API SDK for Ruby. 핵심 구조 신호는 Ruby, README.md, LICENSE, tests, ci, docs이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 개발 생산성/DevTools 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 needs deeper structural scan입니다.
