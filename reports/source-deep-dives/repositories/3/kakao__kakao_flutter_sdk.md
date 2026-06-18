# kakao/kakao_flutter_sdk Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Flutter SDK for Kakao Open API

## 요약

- 조사 단위: `sources/kakao__kakao_flutter_sdk` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 466 files, 172 directories, depth score 86, key references 7개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

개발 생산성/DevTools 관점에서 monorepo/workspace, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 ci=.github/workflows/publish-docs.yml, .github/workflows/publish.yml이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 7개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | kakao/kakao_flutter_sdk |
| Topic | Developer Productivity and DevTools / 개발 생산성/DevTools |
| Region | korea |
| Language | Dart |
| Stars | 195 |
| Forks | 74 |
| License | Apache-2.0 |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/kakao__kakao_flutter_sdk](../../../../sources/kakao__kakao_flutter_sdk) |
| Existing report | [reports/korea-trending/repositories/kakao__kakao_flutter_sdk.md](../../../korea-trending/repositories/kakao__kakao_flutter_sdk.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 466 / 172 |
| Max observed depth | 12 |
| Top directories | .github, example, packages, scripts |
| Top extensions | .dart: 288, .png: 37, (none): 31, .yaml: 25, .kt: 15, .swift: 11, .xml: 11, .md: 7, .gradle: 4, .plist: 4, .json: 3, .kts: 3 |
| Source patterns | monorepo/workspace, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| packages/kakao_flutter_sdk_auth | packages workspace | 37 |
| packages/kakao_flutter_sdk_common | packages workspace | 15 |
| packages/kakao_flutter_sdk_user | packages workspace | 10 |
| packages/kakao_flutter_sdk_talk | packages workspace | 7 |
| packages/kakao_flutter_sdk_navi | packages workspace | 4 |
| packages/kakao_flutter_sdk_share | packages workspace | 4 |
| packages/kakao_flutter_sdk_template | packages workspace | 2 |
| .github | ci surface | 1 |
| example | top-level component | 1 |
| packages | source boundary | 1 |
| packages/kakao_flutter_sdk_friend | packages workspace | 1 |
| scripts | top-level component | 1 |


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
| ci | [.github/workflows/publish-docs.yml](../../../../sources/kakao__kakao_flutter_sdk/.github/workflows/publish-docs.yml) | ci signal |
| ci | [.github/workflows/publish.yml](../../../../sources/kakao__kakao_flutter_sdk/.github/workflows/publish.yml) | ci signal |
| docs | [README.md](../../../../sources/kakao__kakao_flutter_sdk/README.md) | docs signal |
| docs | [example/README.md](../../../../sources/kakao__kakao_flutter_sdk/example/README.md) | docs signal |
| docs | [example/ios/Runner/Assets.xcassets/LaunchImage.imageset/README.md](../../../../sources/kakao__kakao_flutter_sdk/example/ios/Runner/Assets.xcassets/LaunchImage.imageset/README.md) | docs signal |
| eval | [packages/kakao_flutter_sdk_user/test/access_token_info_test.dart](../../../../sources/kakao__kakao_flutter_sdk/packages/kakao_flutter_sdk_user/test/access_token_info_test.dart) | eval support |
| eval | [packages/kakao_flutter_sdk_user/test/test_enum_map.dart](../../../../sources/kakao__kakao_flutter_sdk/packages/kakao_flutter_sdk_user/test/test_enum_map.dart) | eval support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 40 | [example/ios/Runner.xcworkspace/contents.xcworkspacedata](../../../../sources/kakao__kakao_flutter_sdk/example/ios/Runner.xcworkspace/contents.xcworkspacedata)<br>[example/ios/Runner.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist](../../../../sources/kakao__kakao_flutter_sdk/example/ios/Runner.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist)<br>[example/ios/Runner.xcworkspace/xcshareddata/WorkspaceSettings.xcsettings](../../../../sources/kakao__kakao_flutter_sdk/example/ios/Runner.xcworkspace/xcshareddata/WorkspaceSettings.xcsettings)<br>[example/ios/Runner.xcodeproj/project.pbxproj](../../../../sources/kakao__kakao_flutter_sdk/example/ios/Runner.xcodeproj/project.pbxproj)<br>[example/ios/Runner.xcodeproj/xcshareddata/xcschemes/Runner.xcscheme](../../../../sources/kakao__kakao_flutter_sdk/example/ios/Runner.xcodeproj/xcshareddata/xcschemes/Runner.xcscheme)<br>[example/ios/Runner.xcodeproj/project.xcworkspace/contents.xcworkspacedata](../../../../sources/kakao__kakao_flutter_sdk/example/ios/Runner.xcodeproj/project.xcworkspace/contents.xcworkspacedata)<br>[example/ios/Runner.xcodeproj/project.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist](../../../../sources/kakao__kakao_flutter_sdk/example/ios/Runner.xcodeproj/project.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist)<br>[example/ios/Runner.xcodeproj/project.xcworkspace/xcshareddata/WorkspaceSettings.xcsettings](../../../../sources/kakao__kakao_flutter_sdk/example/ios/Runner.xcodeproj/project.xcworkspace/xcshareddata/WorkspaceSettings.xcsettings) |
| mcp | 0 | not obvious |
| retrieval | 1 | [example/web/index.html](../../../../sources/kakao__kakao_flutter_sdk/example/web/index.html) |
| spec | 0 | not obvious |
| eval | 60 | [packages/kakao_flutter_sdk_user/test/access_token_info_test.dart](../../../../sources/kakao__kakao_flutter_sdk/packages/kakao_flutter_sdk_user/test/access_token_info_test.dart)<br>[packages/kakao_flutter_sdk_user/test/test_enum_map.dart](../../../../sources/kakao__kakao_flutter_sdk/packages/kakao_flutter_sdk_user/test/test_enum_map.dart)<br>[packages/kakao_flutter_sdk_user/test/user_api_scenario_test.dart](../../../../sources/kakao__kakao_flutter_sdk/packages/kakao_flutter_sdk_user/test/user_api_scenario_test.dart)<br>[packages/kakao_flutter_sdk_user/test/user_api_test.dart](../../../../sources/kakao__kakao_flutter_sdk/packages/kakao_flutter_sdk_user/test/user_api_test.dart)<br>[packages/kakao_flutter_sdk_user/test/user_me_test.dart](../../../../sources/kakao__kakao_flutter_sdk/packages/kakao_flutter_sdk_user/test/user_me_test.dart)<br>[packages/kakao_flutter_sdk_user/test/user_platform_stub_test.dart](../../../../sources/kakao__kakao_flutter_sdk/packages/kakao_flutter_sdk_user/test/user_platform_stub_test.dart)<br>[packages/kakao_flutter_sdk_user/test/user_revoked_service_terms_test.dart](../../../../sources/kakao__kakao_flutter_sdk/packages/kakao_flutter_sdk_user/test/user_revoked_service_terms_test.dart)<br>[packages/kakao_flutter_sdk_user/test/user_scopes_test.dart](../../../../sources/kakao__kakao_flutter_sdk/packages/kakao_flutter_sdk_user/test/user_scopes_test.dart) |
| security | 66 | [packages/kakao_flutter_sdk_common/test/model/kakao_auth_exception_test.dart](../../../../sources/kakao__kakao_flutter_sdk/packages/kakao_flutter_sdk_common/test/model/kakao_auth_exception_test.dart)<br>[packages/kakao_flutter_sdk_common/lib/src/model/kakao_auth_exception.dart](../../../../sources/kakao__kakao_flutter_sdk/packages/kakao_flutter_sdk_common/lib/src/model/kakao_auth_exception.dart)<br>[packages/kakao_flutter_sdk_common/lib/src/model/kakao_auth_exception.g.dart](../../../../sources/kakao__kakao_flutter_sdk/packages/kakao_flutter_sdk_common/lib/src/model/kakao_auth_exception.g.dart)<br>[packages/kakao_flutter_sdk_auth/.gitignore](../../../../sources/kakao__kakao_flutter_sdk/packages/kakao_flutter_sdk_auth/.gitignore)<br>[packages/kakao_flutter_sdk_auth/.metadata](../../../../sources/kakao__kakao_flutter_sdk/packages/kakao_flutter_sdk_auth/.metadata)<br>[packages/kakao_flutter_sdk_auth/analysis_options.yaml](../../../../sources/kakao__kakao_flutter_sdk/packages/kakao_flutter_sdk_auth/analysis_options.yaml)<br>[packages/kakao_flutter_sdk_auth/pubspec.yaml](../../../../sources/kakao__kakao_flutter_sdk/packages/kakao_flutter_sdk_auth/pubspec.yaml)<br>[packages/kakao_flutter_sdk_auth/test/auth_api_test.dart](../../../../sources/kakao__kakao_flutter_sdk/packages/kakao_flutter_sdk_auth/test/auth_api_test.dart) |
| ci | 2 | [.github/workflows/publish-docs.yml](../../../../sources/kakao__kakao_flutter_sdk/.github/workflows/publish-docs.yml)<br>[.github/workflows/publish.yml](../../../../sources/kakao__kakao_flutter_sdk/.github/workflows/publish.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 3 | [README.md](../../../../sources/kakao__kakao_flutter_sdk/README.md)<br>[example/README.md](../../../../sources/kakao__kakao_flutter_sdk/example/README.md)<br>[example/ios/Runner/Assets.xcassets/LaunchImage.imageset/README.md](../../../../sources/kakao__kakao_flutter_sdk/example/ios/Runner/Assets.xcassets/LaunchImage.imageset/README.md) |
| config | 0 | not obvious |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 60 | [packages/kakao_flutter_sdk_user/test/access_token_info_test.dart](../../../../sources/kakao__kakao_flutter_sdk/packages/kakao_flutter_sdk_user/test/access_token_info_test.dart)<br>[packages/kakao_flutter_sdk_user/test/test_enum_map.dart](../../../../sources/kakao__kakao_flutter_sdk/packages/kakao_flutter_sdk_user/test/test_enum_map.dart)<br>[packages/kakao_flutter_sdk_user/test/user_api_scenario_test.dart](../../../../sources/kakao__kakao_flutter_sdk/packages/kakao_flutter_sdk_user/test/user_api_scenario_test.dart)<br>[packages/kakao_flutter_sdk_user/test/user_api_test.dart](../../../../sources/kakao__kakao_flutter_sdk/packages/kakao_flutter_sdk_user/test/user_api_test.dart)<br>[packages/kakao_flutter_sdk_user/test/user_me_test.dart](../../../../sources/kakao__kakao_flutter_sdk/packages/kakao_flutter_sdk_user/test/user_me_test.dart)<br>[packages/kakao_flutter_sdk_user/test/user_platform_stub_test.dart](../../../../sources/kakao__kakao_flutter_sdk/packages/kakao_flutter_sdk_user/test/user_platform_stub_test.dart) |
| CI workflows | 2 | [.github/workflows/publish-docs.yml](../../../../sources/kakao__kakao_flutter_sdk/.github/workflows/publish-docs.yml)<br>[.github/workflows/publish.yml](../../../../sources/kakao__kakao_flutter_sdk/.github/workflows/publish.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 66 | [packages/kakao_flutter_sdk_common/test/model/kakao_auth_exception_test.dart](../../../../sources/kakao__kakao_flutter_sdk/packages/kakao_flutter_sdk_common/test/model/kakao_auth_exception_test.dart)<br>[packages/kakao_flutter_sdk_common/lib/src/model/kakao_auth_exception.dart](../../../../sources/kakao__kakao_flutter_sdk/packages/kakao_flutter_sdk_common/lib/src/model/kakao_auth_exception.dart)<br>[packages/kakao_flutter_sdk_common/lib/src/model/kakao_auth_exception.g.dart](../../../../sources/kakao__kakao_flutter_sdk/packages/kakao_flutter_sdk_common/lib/src/model/kakao_auth_exception.g.dart)<br>[packages/kakao_flutter_sdk_auth/.gitignore](../../../../sources/kakao__kakao_flutter_sdk/packages/kakao_flutter_sdk_auth/.gitignore)<br>[packages/kakao_flutter_sdk_auth/.metadata](../../../../sources/kakao__kakao_flutter_sdk/packages/kakao_flutter_sdk_auth/.metadata)<br>[packages/kakao_flutter_sdk_auth/analysis_options.yaml](../../../../sources/kakao__kakao_flutter_sdk/packages/kakao_flutter_sdk_auth/analysis_options.yaml) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `.github/workflows/publish-docs.yml`, `.github/workflows/publish.yml`, `README.md`.
2. Map agent/tool runtime through: `example/ios/Runner.xcworkspace/contents.xcworkspacedata`, `example/ios/Runner.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist`, `example/ios/Runner.xcworkspace/xcshareddata/WorkspaceSettings.xcsettings`.
3. Inspect retrieval/memory/indexing through: `example/web/index.html`.
4. Verify behavior through test/eval files: `packages/kakao_flutter_sdk_user/test/access_token_info_test.dart`, `packages/kakao_flutter_sdk_user/test/test_enum_map.dart`, `packages/kakao_flutter_sdk_user/test/user_api_scenario_test.dart`.

## Existing Repository Insight

개발 생산성/DevTools 관점에서 Flutter SDK for Kakao Open API. 핵심 구조 신호는 Dart, README.md, LICENSE, ci, docs, spec-artifacts이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 개발 생산성/DevTools 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, needs deeper structural scan입니다.
