# line/flutter_line_sdk 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

A Flutter plugin that lets developers access LINE's native SDKs in Flutter apps with Dart.

## 요약

- 조사 단위: `sources/line__flutter_line_sdk` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 124 files, 73 directories, depth score 69, key references 6개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

개발 생산성/DevTools 관점에서 api/server, agent/tool runtime, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 entrypoints=example/lib/src/app.dart이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 6개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | line/flutter_line_sdk |
| 주제 | 개발 생산성/DevTools / 개발 생산성/DevTools |
| Region | korea |
| Language | Dart |
| Stars | 228 |
| Forks | 55 |
| License | Apache-2.0 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/line__flutter_line_sdk](../../../../sources/line__flutter_line_sdk) |
| 기존 보고서 | [reports/korea-trending/repositories/line__flutter_line_sdk.md](../../../korea-trending/repositories/line__flutter_line_sdk.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 124 / 73 |
| 관측 최대 깊이 | 11 |
| 상위 디렉터리 | .claude, .github, android, example, ios, lib, test |
| 상위 확장자 | .png: 23, .dart: 16, .kt: 13, (none): 12, .xml: 8, .md: 7, .gradle: 5, .plist: 4, .properties: 4, .swift: 4, .resolved: 3, .yaml: 3 |
| 소스 패턴 | api/server, agent/tool runtime, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| .github | ci surface | 1 |
| android | top-level component | 1 |
| example | top-level component | 1 |
| ios | top-level component | 1 |
| lib | source boundary | 1 |
| test | validation surface | 1 |


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
| entrypoints | [example/lib/src/app.dart](../../../../sources/line__flutter_line_sdk/example/lib/src/app.dart) | entrypoints signal |
| ci | [.github/workflows/build.yml](../../../../sources/line__flutter_line_sdk/.github/workflows/build.yml) | ci signal |
| docs | [README.md](../../../../sources/line__flutter_line_sdk/README.md) | docs signal |
| docs | [example/README.md](../../../../sources/line__flutter_line_sdk/example/README.md) | docs signal |
| docs | [example/ios/Runner/Assets.xcassets/LaunchImage.imageset/README.md](../../../../sources/line__flutter_line_sdk/example/ios/Runner/Assets.xcassets/LaunchImage.imageset/README.md) | docs signal |
| eval | [test/flutter_line_sdk_test.dart](../../../../sources/line__flutter_line_sdk/test/flutter_line_sdk_test.dart) | eval support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 1 | [example/lib/src/app.dart](../../../../sources/line__flutter_line_sdk/example/lib/src/app.dart) |
| agentRuntime | 37 | [example/ios/Runner.xcworkspace/contents.xcworkspacedata](../../../../sources/line__flutter_line_sdk/example/ios/Runner.xcworkspace/contents.xcworkspacedata)<br>[example/ios/Runner.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist](../../../../sources/line__flutter_line_sdk/example/ios/Runner.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist)<br>[example/ios/Runner.xcworkspace/xcshareddata/WorkspaceSettings.xcsettings](../../../../sources/line__flutter_line_sdk/example/ios/Runner.xcworkspace/xcshareddata/WorkspaceSettings.xcsettings)<br>[example/ios/Runner.xcworkspace/xcshareddata/swiftpm/Package.resolved](../../../../sources/line__flutter_line_sdk/example/ios/Runner.xcworkspace/xcshareddata/swiftpm/Package.resolved)<br>[example/ios/Runner.xcodeproj/project.pbxproj](../../../../sources/line__flutter_line_sdk/example/ios/Runner.xcodeproj/project.pbxproj)<br>[example/ios/Runner.xcodeproj/xcshareddata/xcschemes/Runner.xcscheme](../../../../sources/line__flutter_line_sdk/example/ios/Runner.xcodeproj/xcshareddata/xcschemes/Runner.xcscheme)<br>[example/ios/Runner.xcodeproj/project.xcworkspace/contents.xcworkspacedata](../../../../sources/line__flutter_line_sdk/example/ios/Runner.xcodeproj/project.xcworkspace/contents.xcworkspacedata)<br>[example/ios/Runner.xcodeproj/project.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist](../../../../sources/line__flutter_line_sdk/example/ios/Runner.xcodeproj/project.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 0 | 명확하지 않음 |
| spec | 0 | 명확하지 않음 |
| eval | 1 | [test/flutter_line_sdk_test.dart](../../../../sources/line__flutter_line_sdk/test/flutter_line_sdk_test.dart) |
| security | 1 | [android/src/main/kotlin/com/linecorp/linesdk/auth/LineAuthenticationConfigFactory.kt](../../../../sources/line__flutter_line_sdk/android/src/main/kotlin/com/linecorp/linesdk/auth/LineAuthenticationConfigFactory.kt) |
| ci | 1 | [.github/workflows/build.yml](../../../../sources/line__flutter_line_sdk/.github/workflows/build.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 3 | [README.md](../../../../sources/line__flutter_line_sdk/README.md)<br>[example/README.md](../../../../sources/line__flutter_line_sdk/example/README.md)<br>[example/ios/Runner/Assets.xcassets/LaunchImage.imageset/README.md](../../../../sources/line__flutter_line_sdk/example/ios/Runner/Assets.xcassets/LaunchImage.imageset/README.md) |
| config | 0 | 명확하지 않음 |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 1 | [test/flutter_line_sdk_test.dart](../../../../sources/line__flutter_line_sdk/test/flutter_line_sdk_test.dart) |
| CI workflow | 1 | [.github/workflows/build.yml](../../../../sources/line__flutter_line_sdk/.github/workflows/build.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 1 | [android/src/main/kotlin/com/linecorp/linesdk/auth/LineAuthenticationConfigFactory.kt](../../../../sources/line__flutter_line_sdk/android/src/main/kotlin/com/linecorp/linesdk/auth/LineAuthenticationConfigFactory.kt) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `example/lib/src/app.dart`, `.github/workflows/build.yml`, `README.md`.
2. entrypoint를 따라 실행 흐름 확인: `example/lib/src/app.dart`.
3. agent/tool runtime 매핑: `example/ios/Runner.xcworkspace/contents.xcworkspacedata`, `example/ios/Runner.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist`, `example/ios/Runner.xcworkspace/xcshareddata/WorkspaceSettings.xcsettings`.
4. test/eval 파일로 동작 검증: `test/flutter_line_sdk_test.dart`.

## 기존 레포 인사이트

개발 생산성/DevTools 관점에서 A Flutter plugin that lets developers access LINE's native SDKs in Flutter apps with Dart.. 핵심 구조 신호는 Dart, README.md, LICENSE, tests, ci, docs이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 개발 생산성/DevTools 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 더 깊은 구조 스캔 필요입니다.
