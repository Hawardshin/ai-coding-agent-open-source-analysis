# line/flutter_line_sdk Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

A Flutter plugin that lets developers access LINE's native SDKs in Flutter apps with Dart.

## 요약

- 조사 단위: `sources/line__flutter_line_sdk` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 124 files, 73 directories, depth score 75, key references 6개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

개발 생산성/DevTools 관점에서 api/server, agent/tool runtime, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 entrypoints=example/lib/src/app.dart이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 6개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | line/flutter_line_sdk |
| Topic | Developer Productivity and DevTools / 개발 생산성/DevTools |
| Region | korea |
| Language | Dart |
| Stars | 228 |
| Forks | 55 |
| License | Apache-2.0 |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/line__flutter_line_sdk](../../../../sources/line__flutter_line_sdk) |
| Existing report | [reports/korea-trending/repositories/line__flutter_line_sdk.md](../../../korea-trending/repositories/line__flutter_line_sdk.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 124 / 73 |
| Max observed depth | 11 |
| Top directories | .claude, .github, android, example, ios, lib, test |
| Top extensions | .png: 23, .dart: 16, .kt: 13, (none): 12, .xml: 8, .md: 7, .gradle: 5, .plist: 4, .properties: 4, .swift: 4, .resolved: 3, .yaml: 3 |
| Source patterns | api/server, agent/tool runtime, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| .github | ci surface | 1 |
| android | top-level component | 1 |
| example | top-level component | 1 |
| ios | top-level component | 1 |
| lib | source boundary | 1 |
| test | validation surface | 1 |


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
| entrypoints | [example/lib/src/app.dart](../../../../sources/line__flutter_line_sdk/example/lib/src/app.dart) | entrypoints signal |
| ci | [.github/workflows/build.yml](../../../../sources/line__flutter_line_sdk/.github/workflows/build.yml) | ci signal |
| docs | [README.md](../../../../sources/line__flutter_line_sdk/README.md) | docs signal |
| docs | [example/README.md](../../../../sources/line__flutter_line_sdk/example/README.md) | docs signal |
| docs | [example/ios/Runner/Assets.xcassets/LaunchImage.imageset/README.md](../../../../sources/line__flutter_line_sdk/example/ios/Runner/Assets.xcassets/LaunchImage.imageset/README.md) | docs signal |
| eval | [test/flutter_line_sdk_test.dart](../../../../sources/line__flutter_line_sdk/test/flutter_line_sdk_test.dart) | eval support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 1 | [example/lib/src/app.dart](../../../../sources/line__flutter_line_sdk/example/lib/src/app.dart) |
| agentRuntime | 37 | [example/ios/Runner.xcworkspace/contents.xcworkspacedata](../../../../sources/line__flutter_line_sdk/example/ios/Runner.xcworkspace/contents.xcworkspacedata)<br>[example/ios/Runner.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist](../../../../sources/line__flutter_line_sdk/example/ios/Runner.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist)<br>[example/ios/Runner.xcworkspace/xcshareddata/WorkspaceSettings.xcsettings](../../../../sources/line__flutter_line_sdk/example/ios/Runner.xcworkspace/xcshareddata/WorkspaceSettings.xcsettings)<br>[example/ios/Runner.xcworkspace/xcshareddata/swiftpm/Package.resolved](../../../../sources/line__flutter_line_sdk/example/ios/Runner.xcworkspace/xcshareddata/swiftpm/Package.resolved)<br>[example/ios/Runner.xcodeproj/project.pbxproj](../../../../sources/line__flutter_line_sdk/example/ios/Runner.xcodeproj/project.pbxproj)<br>[example/ios/Runner.xcodeproj/xcshareddata/xcschemes/Runner.xcscheme](../../../../sources/line__flutter_line_sdk/example/ios/Runner.xcodeproj/xcshareddata/xcschemes/Runner.xcscheme)<br>[example/ios/Runner.xcodeproj/project.xcworkspace/contents.xcworkspacedata](../../../../sources/line__flutter_line_sdk/example/ios/Runner.xcodeproj/project.xcworkspace/contents.xcworkspacedata)<br>[example/ios/Runner.xcodeproj/project.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist](../../../../sources/line__flutter_line_sdk/example/ios/Runner.xcodeproj/project.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist) |
| mcp | 0 | not obvious |
| retrieval | 0 | not obvious |
| spec | 0 | not obvious |
| eval | 1 | [test/flutter_line_sdk_test.dart](../../../../sources/line__flutter_line_sdk/test/flutter_line_sdk_test.dart) |
| security | 1 | [android/src/main/kotlin/com/linecorp/linesdk/auth/LineAuthenticationConfigFactory.kt](../../../../sources/line__flutter_line_sdk/android/src/main/kotlin/com/linecorp/linesdk/auth/LineAuthenticationConfigFactory.kt) |
| ci | 1 | [.github/workflows/build.yml](../../../../sources/line__flutter_line_sdk/.github/workflows/build.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 3 | [README.md](../../../../sources/line__flutter_line_sdk/README.md)<br>[example/README.md](../../../../sources/line__flutter_line_sdk/example/README.md)<br>[example/ios/Runner/Assets.xcassets/LaunchImage.imageset/README.md](../../../../sources/line__flutter_line_sdk/example/ios/Runner/Assets.xcassets/LaunchImage.imageset/README.md) |
| config | 0 | not obvious |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 1 | [test/flutter_line_sdk_test.dart](../../../../sources/line__flutter_line_sdk/test/flutter_line_sdk_test.dart) |
| CI workflows | 1 | [.github/workflows/build.yml](../../../../sources/line__flutter_line_sdk/.github/workflows/build.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 1 | [android/src/main/kotlin/com/linecorp/linesdk/auth/LineAuthenticationConfigFactory.kt](../../../../sources/line__flutter_line_sdk/android/src/main/kotlin/com/linecorp/linesdk/auth/LineAuthenticationConfigFactory.kt) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `example/lib/src/app.dart`, `.github/workflows/build.yml`, `README.md`.
2. Trace execution through entrypoints: `example/lib/src/app.dart`.
3. Map agent/tool runtime through: `example/ios/Runner.xcworkspace/contents.xcworkspacedata`, `example/ios/Runner.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist`, `example/ios/Runner.xcworkspace/xcshareddata/WorkspaceSettings.xcsettings`.
4. Verify behavior through test/eval files: `test/flutter_line_sdk_test.dart`.

## Existing Repository Insight

개발 생산성/DevTools 관점에서 A Flutter plugin that lets developers access LINE's native SDKs in Flutter apps with Dart.. 핵심 구조 신호는 Dart, README.md, LICENSE, tests, ci, docs이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 개발 생산성/DevTools 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 needs deeper structural scan입니다.
