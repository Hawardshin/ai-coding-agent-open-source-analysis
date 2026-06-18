# line/line-bot-sdk-ruby 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

LINE Messaging API SDK for Ruby

## 요약

- 조사 단위: `sources/line__line-bot-sdk-ruby` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 842 files, 129 directories, depth score 78, key references 10개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

개발 생산성/DevTools 관점에서 spec/docs-driven, eval/test harness, security/policy surface 구조로 읽힌다. 핵심 소스 근거는 ci=.github/workflows/check-eol-newrelease.yml, .github/workflows/close-issue.yml, .github/workflows/create-draft-release.yml이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 10개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | line/line-bot-sdk-ruby |
| 주제 | 개발 생산성/DevTools / 개발 생산성/DevTools |
| Region | korea |
| Language | Ruby |
| Stars | 491 |
| Forks | 126 |
| License | Apache-2.0 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/line__line-bot-sdk-ruby](../../../../sources/line__line-bot-sdk-ruby) |
| 기존 보고서 | [reports/korea-trending/repositories/line__line-bot-sdk-ruby.md](../../../korea-trending/repositories/line__line-bot-sdk-ruby.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 842 / 129 |
| 관측 최대 깊이 | 9 |
| 상위 디렉터리 | .github, examples, generator, lib, line-openapi, sig, sig-vendor, spec |
| 상위 확장자 | .rb: 371, .rbs: 342, (none): 69, .md: 11, .yml: 11, .java: 7, .pebble: 7, .lock: 6, .png: 4, .txt: 2, .yaml: 2, .cjs: 1 |
| 소스 패턴 | spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 0 | 명확하지 않음 |
| mcp | 0 | 명확하지 않음 |
| retrieval | 0 | 명확하지 않음 |
| spec | 16 | [spec/spec_helper.rb](../../../../sources/line__line-bot-sdk-ruby/spec/spec_helper.rb)<br>[spec/workflows/ruby_version_consistency_spec.rb](../../../../sources/line__line-bot-sdk-ruby/spec/workflows/ruby_version_consistency_spec.rb)<br>[spec/shared/no_missing_require_spec.rb](../../../../sources/line__line-bot-sdk-ruby/spec/shared/no_missing_require_spec.rb)<br>[spec/line/bot/line_bot_api_gem_spec.rb](../../../../sources/line__line-bot-sdk-ruby/spec/line/bot/line_bot_api_gem_spec.rb)<br>[spec/line/bot/line_bot_gem_spec.rb](../../../../sources/line__line-bot-sdk-ruby/spec/line/bot/line_bot_gem_spec.rb)<br>[spec/line/bot/v2/misc_spec.rb](../../../../sources/line__line-bot-sdk-ruby/spec/line/bot/v2/misc_spec.rb)<br>[spec/line/bot/v2/utils_spec.rb](../../../../sources/line__line-bot-sdk-ruby/spec/line/bot/v2/utils_spec.rb)<br>[spec/line/bot/v2/webhook_parser_skip_verification_spec.rb](../../../../sources/line__line-bot-sdk-ruby/spec/line/bot/v2/webhook_parser_skip_verification_spec.rb) |
| eval | 20 | [spec/spec_helper.rb](../../../../sources/line__line-bot-sdk-ruby/spec/spec_helper.rb)<br>[spec/workflows/ruby_version_consistency_spec.rb](../../../../sources/line__line-bot-sdk-ruby/spec/workflows/ruby_version_consistency_spec.rb)<br>[spec/shared/no_missing_require_spec.rb](../../../../sources/line__line-bot-sdk-ruby/spec/shared/no_missing_require_spec.rb)<br>[spec/line/bot/line_bot_api_gem_spec.rb](../../../../sources/line__line-bot-sdk-ruby/spec/line/bot/line_bot_api_gem_spec.rb)<br>[spec/line/bot/line_bot_gem_spec.rb](../../../../sources/line__line-bot-sdk-ruby/spec/line/bot/line_bot_gem_spec.rb)<br>[spec/line/bot/v2/misc_spec.rb](../../../../sources/line__line-bot-sdk-ruby/spec/line/bot/v2/misc_spec.rb)<br>[spec/line/bot/v2/utils_spec.rb](../../../../sources/line__line-bot-sdk-ruby/spec/line/bot/v2/utils_spec.rb)<br>[spec/line/bot/v2/webhook_parser_skip_verification_spec.rb](../../../../sources/line__line-bot-sdk-ruby/spec/line/bot/v2/webhook_parser_skip_verification_spec.rb) |
| security | 2 | [sig/line/bot/v2/manage_audience/model/audience_group_permission.rbs](../../../../sources/line__line-bot-sdk-ruby/sig/line/bot/v2/manage_audience/model/audience_group_permission.rbs)<br>[lib/line/bot/v2/manage_audience/model/audience_group_permission.rb](../../../../sources/line__line-bot-sdk-ruby/lib/line/bot/v2/manage_audience/model/audience_group_permission.rb) |
| ci | 8 | [.github/workflows/check-eol-newrelease.yml](../../../../sources/line__line-bot-sdk-ruby/.github/workflows/check-eol-newrelease.yml)<br>[.github/workflows/close-issue.yml](../../../../sources/line__line-bot-sdk-ruby/.github/workflows/close-issue.yml)<br>[.github/workflows/create-draft-release.yml](../../../../sources/line__line-bot-sdk-ruby/.github/workflows/create-draft-release.yml)<br>[.github/workflows/deploy-doc.yml](../../../../sources/line__line-bot-sdk-ruby/.github/workflows/deploy-doc.yml)<br>[.github/workflows/generate-code.yml](../../../../sources/line__line-bot-sdk-ruby/.github/workflows/generate-code.yml)<br>[.github/workflows/label-issue.yml](../../../../sources/line__line-bot-sdk-ruby/.github/workflows/label-issue.yml)<br>[.github/workflows/publish.yml](../../../../sources/line__line-bot-sdk-ruby/.github/workflows/publish.yml)<br>[.github/workflows/pull_request.yml](../../../../sources/line__line-bot-sdk-ruby/.github/workflows/pull_request.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 6 | [README.md](../../../../sources/line__line-bot-sdk-ruby/README.md)<br>[examples/v2/rich_menu/README.md](../../../../sources/line__line-bot-sdk-ruby/examples/v2/rich_menu/README.md)<br>[examples/v2/kitchensink/README.md](../../../../sources/line__line-bot-sdk-ruby/examples/v2/kitchensink/README.md)<br>[examples/v2/echobot/README.md](../../../../sources/line__line-bot-sdk-ruby/examples/v2/echobot/README.md)<br>[examples/v2/channel_access_token/README.md](../../../../sources/line__line-bot-sdk-ruby/examples/v2/channel_access_token/README.md)<br>[examples/v2/audience/README.md](../../../../sources/line__line-bot-sdk-ruby/examples/v2/audience/README.md) |
| config | 0 | 명확하지 않음 |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 20 | [spec/spec_helper.rb](../../../../sources/line__line-bot-sdk-ruby/spec/spec_helper.rb)<br>[spec/workflows/ruby_version_consistency_spec.rb](../../../../sources/line__line-bot-sdk-ruby/spec/workflows/ruby_version_consistency_spec.rb)<br>[spec/shared/no_missing_require_spec.rb](../../../../sources/line__line-bot-sdk-ruby/spec/shared/no_missing_require_spec.rb)<br>[spec/line/bot/line_bot_api_gem_spec.rb](../../../../sources/line__line-bot-sdk-ruby/spec/line/bot/line_bot_api_gem_spec.rb)<br>[spec/line/bot/line_bot_gem_spec.rb](../../../../sources/line__line-bot-sdk-ruby/spec/line/bot/line_bot_gem_spec.rb)<br>[spec/line/bot/v2/misc_spec.rb](../../../../sources/line__line-bot-sdk-ruby/spec/line/bot/v2/misc_spec.rb) |
| CI workflow | 8 | [.github/workflows/check-eol-newrelease.yml](../../../../sources/line__line-bot-sdk-ruby/.github/workflows/check-eol-newrelease.yml)<br>[.github/workflows/close-issue.yml](../../../../sources/line__line-bot-sdk-ruby/.github/workflows/close-issue.yml)<br>[.github/workflows/create-draft-release.yml](../../../../sources/line__line-bot-sdk-ruby/.github/workflows/create-draft-release.yml)<br>[.github/workflows/deploy-doc.yml](../../../../sources/line__line-bot-sdk-ruby/.github/workflows/deploy-doc.yml)<br>[.github/workflows/generate-code.yml](../../../../sources/line__line-bot-sdk-ruby/.github/workflows/generate-code.yml)<br>[.github/workflows/label-issue.yml](../../../../sources/line__line-bot-sdk-ruby/.github/workflows/label-issue.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 2 | [sig/line/bot/v2/manage_audience/model/audience_group_permission.rbs](../../../../sources/line__line-bot-sdk-ruby/sig/line/bot/v2/manage_audience/model/audience_group_permission.rbs)<br>[lib/line/bot/v2/manage_audience/model/audience_group_permission.rb](../../../../sources/line__line-bot-sdk-ruby/lib/line/bot/v2/manage_audience/model/audience_group_permission.rb) |
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
2. test/eval 파일로 동작 검증: `spec/spec_helper.rb`, `spec/workflows/ruby_version_consistency_spec.rb`, `spec/shared/no_missing_require_spec.rb`.

## 기존 레포 인사이트

개발 생산성/DevTools 관점에서 LINE Messaging API SDK for Ruby. 핵심 구조 신호는 Ruby, README.md, LICENSE, tests, ci, docs이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 개발 생산성/DevTools 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 더 깊은 구조 스캔 필요입니다.
