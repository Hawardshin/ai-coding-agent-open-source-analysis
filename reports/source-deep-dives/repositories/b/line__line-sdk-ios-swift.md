# line/line-sdk-ios-swift 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

Provides a modern way of implementing LINE APIs.

## 요약

- 조사 단위: `sources/line__line-sdk-ios-swift` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 559 files, 193 directories, depth score 63, key references 7개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

개발 생산성/DevTools 관점에서 retrieval/vector path, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 ci=.github/workflows/ci.yaml, .github/workflows/coverage.yaml, .github/workflows/login-test.yaml이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 7개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | line/line-sdk-ios-swift |
| 주제 | 개발 생산성/DevTools / 개발 생산성/DevTools |
| Region | korea |
| Language | Swift |
| Stars | 876 |
| Forks | 98 |
| License | Apache-2.0 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/line__line-sdk-ios-swift](../../../../sources/line__line-sdk-ios-swift) |
| 기존 보고서 | [reports/korea-trending/repositories/line__line-sdk-ios-swift.md](../../../korea-trending/repositories/line__line-sdk-ios-swift.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 559 / 193 |
| 관측 최대 깊이 | 7 |
| 상위 디렉터리 | .github, fastlane, jazzy-templates, LineSDK, LineSDK.xcworkspace, LineSDKSample, LineSDKSample-SwiftUI, script |
| 상위 확장자 | .swift: 336, .png: 65, .strings: 38, .json: 26, .plist: 13, (none): 9, .mustache: 7, .md: 6, .xcscheme: 6, .js: 5, .yaml: 5, .m: 4 |
| 소스 패턴 | retrieval/vector path, eval/test harness |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| .github | ci surface | 1 |
| fastlane | top-level component | 1 |
| jazzy-templates | top-level component | 1 |
| LineSDK | top-level component | 1 |
| LineSDK.xcworkspace | top-level component | 1 |
| LineSDKSample | top-level component | 1 |
| LineSDKSample-SwiftUI | top-level component | 1 |
| script | top-level component | 1 |


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
| ci | [.github/workflows/ci.yaml](../../../../sources/line__line-sdk-ios-swift/.github/workflows/ci.yaml) | ci signal |
| ci | [.github/workflows/coverage.yaml](../../../../sources/line__line-sdk-ios-swift/.github/workflows/coverage.yaml) | ci signal |
| ci | [.github/workflows/login-test.yaml](../../../../sources/line__line-sdk-ios-swift/.github/workflows/login-test.yaml) | ci signal |
| docs | [README.md](../../../../sources/line__line-sdk-ios-swift/README.md) | docs signal |
| docs | [fastlane/README.md](../../../../sources/line__line-sdk-ios-swift/fastlane/README.md) | docs signal |
| eval | [script/test.sh](../../../../sources/line__line-sdk-ios-swift/script/test.sh) | eval support |
| eval | [LineSDK/LineSDKTests/Crypto/SampleRSAKeys/test_private.pem](../../../../sources/line__line-sdk-ios-swift/LineSDK/LineSDKTests/Crypto/SampleRSAKeys/test_private.pem) | eval support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 0 | 명확하지 않음 |
| mcp | 0 | 명확하지 않음 |
| retrieval | 8 | [LineSDK/LineSDK/Graph/Request/GetApproversInFriendsRequest.swift](../../../../sources/line__line-sdk-ios-swift/LineSDK/LineSDK/Graph/Request/GetApproversInFriendsRequest.swift)<br>[LineSDK/LineSDK/Graph/Request/GetApproversInGroupRequest.swift](../../../../sources/line__line-sdk-ios-swift/LineSDK/LineSDK/Graph/Request/GetApproversInGroupRequest.swift)<br>[LineSDK/LineSDK/Graph/Request/GetFriendsRequest.swift](../../../../sources/line__line-sdk-ios-swift/LineSDK/LineSDK/Graph/Request/GetFriendsRequest.swift)<br>[LineSDK/LineSDK/Graph/Request/GetGroupsRequest.swift](../../../../sources/line__line-sdk-ios-swift/LineSDK/LineSDK/Graph/Request/GetGroupsRequest.swift)<br>[LineSDK/LineSDK/Graph/Request/GetShareFriendsRequest.swift](../../../../sources/line__line-sdk-ios-swift/LineSDK/LineSDK/Graph/Request/GetShareFriendsRequest.swift)<br>[LineSDK/LineSDK/Graph/Request/GetShareGroupsRequest.swift](../../../../sources/line__line-sdk-ios-swift/LineSDK/LineSDK/Graph/Request/GetShareGroupsRequest.swift)<br>[LineSDK/LineSDK/Graph/Model/Group.swift](../../../../sources/line__line-sdk-ios-swift/LineSDK/LineSDK/Graph/Model/Group.swift)<br>[LineSDK/LineSDK/Graph/Model/User.swift](../../../../sources/line__line-sdk-ios-swift/LineSDK/LineSDK/Graph/Model/User.swift) |
| spec | 0 | 명확하지 않음 |
| eval | 4 | [script/test.sh](../../../../sources/line__line-sdk-ios-swift/script/test.sh)<br>[LineSDK/LineSDKTests/Crypto/SampleRSAKeys/test_private.pem](../../../../sources/line__line-sdk-ios-swift/LineSDK/LineSDKTests/Crypto/SampleRSAKeys/test_private.pem)<br>[LineSDK/LineSDKTests/Crypto/SampleRSAKeys/test_public.cer](../../../../sources/line__line-sdk-ios-swift/LineSDK/LineSDKTests/Crypto/SampleRSAKeys/test_public.cer)<br>[.github/workflows/login-test.yaml](../../../../sources/line__line-sdk-ios-swift/.github/workflows/login-test.yaml) |
| security | 0 | 명확하지 않음 |
| ci | 3 | [.github/workflows/ci.yaml](../../../../sources/line__line-sdk-ios-swift/.github/workflows/ci.yaml)<br>[.github/workflows/coverage.yaml](../../../../sources/line__line-sdk-ios-swift/.github/workflows/coverage.yaml)<br>[.github/workflows/login-test.yaml](../../../../sources/line__line-sdk-ios-swift/.github/workflows/login-test.yaml) |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 2 | [README.md](../../../../sources/line__line-sdk-ios-swift/README.md)<br>[fastlane/README.md](../../../../sources/line__line-sdk-ios-swift/fastlane/README.md) |
| config | 0 | 명확하지 않음 |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 4 | [script/test.sh](../../../../sources/line__line-sdk-ios-swift/script/test.sh)<br>[LineSDK/LineSDKTests/Crypto/SampleRSAKeys/test_private.pem](../../../../sources/line__line-sdk-ios-swift/LineSDK/LineSDKTests/Crypto/SampleRSAKeys/test_private.pem)<br>[LineSDK/LineSDKTests/Crypto/SampleRSAKeys/test_public.cer](../../../../sources/line__line-sdk-ios-swift/LineSDK/LineSDKTests/Crypto/SampleRSAKeys/test_public.cer)<br>[.github/workflows/login-test.yaml](../../../../sources/line__line-sdk-ios-swift/.github/workflows/login-test.yaml) |
| CI workflow | 3 | [.github/workflows/ci.yaml](../../../../sources/line__line-sdk-ios-swift/.github/workflows/ci.yaml)<br>[.github/workflows/coverage.yaml](../../../../sources/line__line-sdk-ios-swift/.github/workflows/coverage.yaml)<br>[.github/workflows/login-test.yaml](../../../../sources/line__line-sdk-ios-swift/.github/workflows/login-test.yaml) |
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

1. 핵심 참조에서 시작: `.github/workflows/ci.yaml`, `.github/workflows/coverage.yaml`, `.github/workflows/login-test.yaml`.
2. retrieval/memory/indexing 확인: `LineSDK/LineSDK/Graph/Request/GetApproversInFriendsRequest.swift`, `LineSDK/LineSDK/Graph/Request/GetApproversInGroupRequest.swift`, `LineSDK/LineSDK/Graph/Request/GetFriendsRequest.swift`.
3. test/eval 파일로 동작 검증: `script/test.sh`, `LineSDK/LineSDKTests/Crypto/SampleRSAKeys/test_private.pem`, `LineSDK/LineSDKTests/Crypto/SampleRSAKeys/test_public.cer`.

## 기존 레포 인사이트

개발 생산성/DevTools 관점에서 Provides a modern way of implementing LINE APIs.. 핵심 구조 신호는 Swift, README.md, LICENSE, ci, docs, spec-artifacts이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 개발 생산성/DevTools 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 더 깊은 구조 스캔 필요입니다.
