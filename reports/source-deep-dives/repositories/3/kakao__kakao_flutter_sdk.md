# kakao/kakao_flutter_sdk 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

Flutter SDK for Kakao Open API

## 요약

- 조사 단위: `sources/kakao__kakao_flutter_sdk` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 466 files, 172 directories, depth score 80, key references 7개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

개발 생산성/DevTools 관점에서 monorepo/workspace, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 ci=.github/workflows/publish-docs.yml, .github/workflows/publish.yml이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 7개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | kakao/kakao_flutter_sdk |
| 주제 | 개발 생산성/DevTools / 개발 생산성/DevTools |
| Region | korea |
| Language | Dart |
| Stars | 195 |
| Forks | 74 |
| License | Apache-2.0 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/kakao__kakao_flutter_sdk](../../../../sources/kakao__kakao_flutter_sdk) |
| 기존 보고서 | [reports/korea-trending/repositories/kakao__kakao_flutter_sdk.md](../../../korea-trending/repositories/kakao__kakao_flutter_sdk.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 466 / 172 |
| 관측 최대 깊이 | 12 |
| 상위 디렉터리 | .github, example, packages, scripts |
| 상위 확장자 | .dart: 288, .png: 37, (none): 31, .yaml: 25, .kt: 15, .swift: 11, .xml: 11, .md: 7, .gradle: 4, .plist: 4, .json: 3, .kts: 3 |
| 소스 패턴 | monorepo/workspace, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
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
| ci | [.github/workflows/publish-docs.yml](../../../../sources/kakao__kakao_flutter_sdk/.github/workflows/publish-docs.yml) | ci signal |
| ci | [.github/workflows/publish.yml](../../../../sources/kakao__kakao_flutter_sdk/.github/workflows/publish.yml) | ci signal |
| docs | [README.md](../../../../sources/kakao__kakao_flutter_sdk/README.md) | docs signal |
| docs | [example/README.md](../../../../sources/kakao__kakao_flutter_sdk/example/README.md) | docs signal |
| docs | [example/ios/Runner/Assets.xcassets/LaunchImage.imageset/README.md](../../../../sources/kakao__kakao_flutter_sdk/example/ios/Runner/Assets.xcassets/LaunchImage.imageset/README.md) | docs signal |
| eval | [packages/kakao_flutter_sdk_user/test/access_token_info_test.dart](../../../../sources/kakao__kakao_flutter_sdk/packages/kakao_flutter_sdk_user/test/access_token_info_test.dart) | eval support |
| eval | [packages/kakao_flutter_sdk_user/test/test_enum_map.dart](../../../../sources/kakao__kakao_flutter_sdk/packages/kakao_flutter_sdk_user/test/test_enum_map.dart) | eval support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 40 | [example/ios/Runner.xcworkspace/contents.xcworkspacedata](../../../../sources/kakao__kakao_flutter_sdk/example/ios/Runner.xcworkspace/contents.xcworkspacedata)<br>[example/ios/Runner.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist](../../../../sources/kakao__kakao_flutter_sdk/example/ios/Runner.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist)<br>[example/ios/Runner.xcworkspace/xcshareddata/WorkspaceSettings.xcsettings](../../../../sources/kakao__kakao_flutter_sdk/example/ios/Runner.xcworkspace/xcshareddata/WorkspaceSettings.xcsettings)<br>[example/ios/Runner.xcodeproj/project.pbxproj](../../../../sources/kakao__kakao_flutter_sdk/example/ios/Runner.xcodeproj/project.pbxproj)<br>[example/ios/Runner.xcodeproj/xcshareddata/xcschemes/Runner.xcscheme](../../../../sources/kakao__kakao_flutter_sdk/example/ios/Runner.xcodeproj/xcshareddata/xcschemes/Runner.xcscheme)<br>[example/ios/Runner.xcodeproj/project.xcworkspace/contents.xcworkspacedata](../../../../sources/kakao__kakao_flutter_sdk/example/ios/Runner.xcodeproj/project.xcworkspace/contents.xcworkspacedata)<br>[example/ios/Runner.xcodeproj/project.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist](../../../../sources/kakao__kakao_flutter_sdk/example/ios/Runner.xcodeproj/project.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist)<br>[example/ios/Runner.xcodeproj/project.xcworkspace/xcshareddata/WorkspaceSettings.xcsettings](../../../../sources/kakao__kakao_flutter_sdk/example/ios/Runner.xcodeproj/project.xcworkspace/xcshareddata/WorkspaceSettings.xcsettings) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 1 | [example/web/index.html](../../../../sources/kakao__kakao_flutter_sdk/example/web/index.html) |
| spec | 0 | 명확하지 않음 |
| eval | 60 | [packages/kakao_flutter_sdk_user/test/access_token_info_test.dart](../../../../sources/kakao__kakao_flutter_sdk/packages/kakao_flutter_sdk_user/test/access_token_info_test.dart)<br>[packages/kakao_flutter_sdk_user/test/test_enum_map.dart](../../../../sources/kakao__kakao_flutter_sdk/packages/kakao_flutter_sdk_user/test/test_enum_map.dart)<br>[packages/kakao_flutter_sdk_user/test/user_api_scenario_test.dart](../../../../sources/kakao__kakao_flutter_sdk/packages/kakao_flutter_sdk_user/test/user_api_scenario_test.dart)<br>[packages/kakao_flutter_sdk_user/test/user_api_test.dart](../../../../sources/kakao__kakao_flutter_sdk/packages/kakao_flutter_sdk_user/test/user_api_test.dart)<br>[packages/kakao_flutter_sdk_user/test/user_me_test.dart](../../../../sources/kakao__kakao_flutter_sdk/packages/kakao_flutter_sdk_user/test/user_me_test.dart)<br>[packages/kakao_flutter_sdk_user/test/user_platform_stub_test.dart](../../../../sources/kakao__kakao_flutter_sdk/packages/kakao_flutter_sdk_user/test/user_platform_stub_test.dart)<br>[packages/kakao_flutter_sdk_user/test/user_revoked_service_terms_test.dart](../../../../sources/kakao__kakao_flutter_sdk/packages/kakao_flutter_sdk_user/test/user_revoked_service_terms_test.dart)<br>[packages/kakao_flutter_sdk_user/test/user_scopes_test.dart](../../../../sources/kakao__kakao_flutter_sdk/packages/kakao_flutter_sdk_user/test/user_scopes_test.dart) |
| security | 66 | [packages/kakao_flutter_sdk_common/test/model/kakao_auth_exception_test.dart](../../../../sources/kakao__kakao_flutter_sdk/packages/kakao_flutter_sdk_common/test/model/kakao_auth_exception_test.dart)<br>[packages/kakao_flutter_sdk_common/lib/src/model/kakao_auth_exception.dart](../../../../sources/kakao__kakao_flutter_sdk/packages/kakao_flutter_sdk_common/lib/src/model/kakao_auth_exception.dart)<br>[packages/kakao_flutter_sdk_common/lib/src/model/kakao_auth_exception.g.dart](../../../../sources/kakao__kakao_flutter_sdk/packages/kakao_flutter_sdk_common/lib/src/model/kakao_auth_exception.g.dart)<br>[packages/kakao_flutter_sdk_auth/.gitignore](../../../../sources/kakao__kakao_flutter_sdk/packages/kakao_flutter_sdk_auth/.gitignore)<br>[packages/kakao_flutter_sdk_auth/.metadata](../../../../sources/kakao__kakao_flutter_sdk/packages/kakao_flutter_sdk_auth/.metadata)<br>[packages/kakao_flutter_sdk_auth/analysis_options.yaml](../../../../sources/kakao__kakao_flutter_sdk/packages/kakao_flutter_sdk_auth/analysis_options.yaml)<br>[packages/kakao_flutter_sdk_auth/pubspec.yaml](../../../../sources/kakao__kakao_flutter_sdk/packages/kakao_flutter_sdk_auth/pubspec.yaml)<br>[packages/kakao_flutter_sdk_auth/test/auth_api_test.dart](../../../../sources/kakao__kakao_flutter_sdk/packages/kakao_flutter_sdk_auth/test/auth_api_test.dart) |
| ci | 2 | [.github/workflows/publish-docs.yml](../../../../sources/kakao__kakao_flutter_sdk/.github/workflows/publish-docs.yml)<br>[.github/workflows/publish.yml](../../../../sources/kakao__kakao_flutter_sdk/.github/workflows/publish.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 3 | [README.md](../../../../sources/kakao__kakao_flutter_sdk/README.md)<br>[example/README.md](../../../../sources/kakao__kakao_flutter_sdk/example/README.md)<br>[example/ios/Runner/Assets.xcassets/LaunchImage.imageset/README.md](../../../../sources/kakao__kakao_flutter_sdk/example/ios/Runner/Assets.xcassets/LaunchImage.imageset/README.md) |
| config | 0 | 명확하지 않음 |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 60 | [packages/kakao_flutter_sdk_user/test/access_token_info_test.dart](../../../../sources/kakao__kakao_flutter_sdk/packages/kakao_flutter_sdk_user/test/access_token_info_test.dart)<br>[packages/kakao_flutter_sdk_user/test/test_enum_map.dart](../../../../sources/kakao__kakao_flutter_sdk/packages/kakao_flutter_sdk_user/test/test_enum_map.dart)<br>[packages/kakao_flutter_sdk_user/test/user_api_scenario_test.dart](../../../../sources/kakao__kakao_flutter_sdk/packages/kakao_flutter_sdk_user/test/user_api_scenario_test.dart)<br>[packages/kakao_flutter_sdk_user/test/user_api_test.dart](../../../../sources/kakao__kakao_flutter_sdk/packages/kakao_flutter_sdk_user/test/user_api_test.dart)<br>[packages/kakao_flutter_sdk_user/test/user_me_test.dart](../../../../sources/kakao__kakao_flutter_sdk/packages/kakao_flutter_sdk_user/test/user_me_test.dart)<br>[packages/kakao_flutter_sdk_user/test/user_platform_stub_test.dart](../../../../sources/kakao__kakao_flutter_sdk/packages/kakao_flutter_sdk_user/test/user_platform_stub_test.dart) |
| CI workflow | 2 | [.github/workflows/publish-docs.yml](../../../../sources/kakao__kakao_flutter_sdk/.github/workflows/publish-docs.yml)<br>[.github/workflows/publish.yml](../../../../sources/kakao__kakao_flutter_sdk/.github/workflows/publish.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 66 | [packages/kakao_flutter_sdk_common/test/model/kakao_auth_exception_test.dart](../../../../sources/kakao__kakao_flutter_sdk/packages/kakao_flutter_sdk_common/test/model/kakao_auth_exception_test.dart)<br>[packages/kakao_flutter_sdk_common/lib/src/model/kakao_auth_exception.dart](../../../../sources/kakao__kakao_flutter_sdk/packages/kakao_flutter_sdk_common/lib/src/model/kakao_auth_exception.dart)<br>[packages/kakao_flutter_sdk_common/lib/src/model/kakao_auth_exception.g.dart](../../../../sources/kakao__kakao_flutter_sdk/packages/kakao_flutter_sdk_common/lib/src/model/kakao_auth_exception.g.dart)<br>[packages/kakao_flutter_sdk_auth/.gitignore](../../../../sources/kakao__kakao_flutter_sdk/packages/kakao_flutter_sdk_auth/.gitignore)<br>[packages/kakao_flutter_sdk_auth/.metadata](../../../../sources/kakao__kakao_flutter_sdk/packages/kakao_flutter_sdk_auth/.metadata)<br>[packages/kakao_flutter_sdk_auth/analysis_options.yaml](../../../../sources/kakao__kakao_flutter_sdk/packages/kakao_flutter_sdk_auth/analysis_options.yaml) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | path scan에서 primary entrypoint가 명확하지 않음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `.github/workflows/publish-docs.yml`, `.github/workflows/publish.yml`, `README.md`.
2. agent/tool runtime 매핑: `example/ios/Runner.xcworkspace/contents.xcworkspacedata`, `example/ios/Runner.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist`, `example/ios/Runner.xcworkspace/xcshareddata/WorkspaceSettings.xcsettings`.
3. retrieval/memory/indexing 확인: `example/web/index.html`.
4. test/eval 파일로 동작 검증: `packages/kakao_flutter_sdk_user/test/access_token_info_test.dart`, `packages/kakao_flutter_sdk_user/test/test_enum_map.dart`, `packages/kakao_flutter_sdk_user/test/user_api_scenario_test.dart`.

## 기존 레포 인사이트

개발 생산성/DevTools 관점에서 Flutter SDK for Kakao Open API. 핵심 구조 신호는 Dart, README.md, LICENSE, ci, docs, spec-artifacts이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 개발 생산성/DevTools 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 더 깊은 구조 스캔 필요입니다.
