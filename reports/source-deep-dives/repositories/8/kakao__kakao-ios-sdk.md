# kakao/kakao-ios-sdk 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

kakao/kakao-ios-sdk

## 요약

- 조사 단위: `sources/kakao__kakao-ios-sdk` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 185 files, 72 directories, depth score 42, key references 4개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

개발 생산성/DevTools 관점에서 security/policy surface 구조로 읽힌다. 핵심 소스 근거는 docs=README.md, Sources/KakaoSDKUser/README.md, Sources/KakaoSDKTemplate/README.md이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 운영 보조 파일은 추가 확인 필요이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 4개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | kakao/kakao-ios-sdk |
| 주제 | 개발 생산성/DevTools / 개발 생산성/DevTools |
| Region | korea |
| Language | Swift |
| Stars | 39 |
| Forks | 13 |
| License | Apache-2.0 |
| 성숙도 | 초기 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/kakao__kakao-ios-sdk](../../../../sources/kakao__kakao-ios-sdk) |
| 기존 보고서 | [reports/korea-trending/repositories/kakao__kakao-ios-sdk.md](../../../korea-trending/repositories/kakao__kakao-ios-sdk.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 185 / 72 |
| 관측 최대 깊이 | 8 |
| 상위 디렉터리 | Sources |
| 상위 확장자 | .swift: 70, (none): 21, .json: 16, .plist: 16, .h: 13, .md: 12, .swiftinterface: 12, .strings: 6, .swiftdoc: 6, .pdf: 5, .modulemap: 4, .xcprivacy: 2 |
| 소스 패턴 | security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| Sources | top-level component | 1 |


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
| docs | [README.md](../../../../sources/kakao__kakao-ios-sdk/README.md) | docs signal |
| docs | [Sources/KakaoSDKUser/README.md](../../../../sources/kakao__kakao-ios-sdk/Sources/KakaoSDKUser/README.md) | docs signal |
| docs | [Sources/KakaoSDKTemplate/README.md](../../../../sources/kakao__kakao-ios-sdk/Sources/KakaoSDKTemplate/README.md) | docs signal |
| docs | [Sources/KakaoSDKTalk/README.md](../../../../sources/kakao__kakao-ios-sdk/Sources/KakaoSDKTalk/README.md) | docs signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 0 | 명확하지 않음 |
| mcp | 0 | 명확하지 않음 |
| retrieval | 0 | 명확하지 않음 |
| spec | 0 | 명확하지 않음 |
| eval | 0 | 명확하지 않음 |
| security | 10 | [Sources/KakaoSDKAuth/auth/Auth.swift](../../../../sources/kakao__kakao-ios-sdk/Sources/KakaoSDKAuth/auth/Auth.swift)<br>[Sources/KakaoSDKAuth/auth/AuthApi.swift](../../../../sources/kakao__kakao-ios-sdk/Sources/KakaoSDKAuth/auth/AuthApi.swift)<br>[Sources/KakaoSDKAuth/auth/AuthApiCommon.swift](../../../../sources/kakao__kakao-ios-sdk/Sources/KakaoSDKAuth/auth/AuthApiCommon.swift)<br>[Sources/KakaoSDKAuth/auth/AuthController.swift](../../../../sources/kakao__kakao-ios-sdk/Sources/KakaoSDKAuth/auth/AuthController.swift)<br>[Sources/KakaoSDKAuth/auth/AuthRequestAdapter.swift](../../../../sources/kakao__kakao-ios-sdk/Sources/KakaoSDKAuth/auth/AuthRequestAdapter.swift)<br>[Sources/KakaoSDKAuth/auth/AuthRequestRetrier.swift](../../../../sources/kakao__kakao-ios-sdk/Sources/KakaoSDKAuth/auth/AuthRequestRetrier.swift)<br>[Sources/KakaoSDKAuth/auth/MigrateManager.swift](../../../../sources/kakao__kakao-ios-sdk/Sources/KakaoSDKAuth/auth/MigrateManager.swift)<br>[Sources/KakaoSDKAuth/auth/TokenManagable.swift](../../../../sources/kakao__kakao-ios-sdk/Sources/KakaoSDKAuth/auth/TokenManagable.swift) |
| ci | 0 | 명확하지 않음 |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 12 | [README.md](../../../../sources/kakao__kakao-ios-sdk/README.md)<br>[Sources/KakaoSDKUser/README.md](../../../../sources/kakao__kakao-ios-sdk/Sources/KakaoSDKUser/README.md)<br>[Sources/KakaoSDKTemplate/README.md](../../../../sources/kakao__kakao-ios-sdk/Sources/KakaoSDKTemplate/README.md)<br>[Sources/KakaoSDKTalk/README.md](../../../../sources/kakao__kakao-ios-sdk/Sources/KakaoSDKTalk/README.md)<br>[Sources/KakaoSDKShare/README.md](../../../../sources/kakao__kakao-ios-sdk/Sources/KakaoSDKShare/README.md)<br>[Sources/KakaoSDKNavi/README.md](../../../../sources/kakao__kakao-ios-sdk/Sources/KakaoSDKNavi/README.md)<br>[Sources/KakaoSDKFriendCore/README.md](../../../../sources/kakao__kakao-ios-sdk/Sources/KakaoSDKFriendCore/README.md)<br>[Sources/KakaoSDKFriend/README.md](../../../../sources/kakao__kakao-ios-sdk/Sources/KakaoSDKFriend/README.md) |
| config | 0 | 명확하지 않음 |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 0 | 명확하지 않음 |
| CI workflow | 0 | 명확하지 않음 |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 10 | [Sources/KakaoSDKAuth/auth/Auth.swift](../../../../sources/kakao__kakao-ios-sdk/Sources/KakaoSDKAuth/auth/Auth.swift)<br>[Sources/KakaoSDKAuth/auth/AuthApi.swift](../../../../sources/kakao__kakao-ios-sdk/Sources/KakaoSDKAuth/auth/AuthApi.swift)<br>[Sources/KakaoSDKAuth/auth/AuthApiCommon.swift](../../../../sources/kakao__kakao-ios-sdk/Sources/KakaoSDKAuth/auth/AuthApiCommon.swift)<br>[Sources/KakaoSDKAuth/auth/AuthController.swift](../../../../sources/kakao__kakao-ios-sdk/Sources/KakaoSDKAuth/auth/AuthController.swift)<br>[Sources/KakaoSDKAuth/auth/AuthRequestAdapter.swift](../../../../sources/kakao__kakao-ios-sdk/Sources/KakaoSDKAuth/auth/AuthRequestAdapter.swift)<br>[Sources/KakaoSDKAuth/auth/AuthRequestRetrier.swift](../../../../sources/kakao__kakao-ios-sdk/Sources/KakaoSDKAuth/auth/AuthRequestRetrier.swift) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | path scan에서 primary entrypoint가 명확하지 않음 |
| operation | CI workflow 경로가 명확하지 않음; container/deploy 경로가 명확하지 않음; test/eval 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `README.md`, `Sources/KakaoSDKUser/README.md`, `Sources/KakaoSDKTemplate/README.md`.

## 기존 레포 인사이트

개발 생산성/DevTools 관점에서 설명 메타데이터가 짧습니다. 핵심 구조 신호는 Swift, README.md, LICENSE, docs이며, 소스+보고서 근거 수준으로 초기 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 개발 생산성/DevTools 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, CI 신호가 명확하지 않음, 더 깊은 구조 스캔 필요입니다.
