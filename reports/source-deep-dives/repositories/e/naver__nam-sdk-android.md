# naver/nam-sdk-android 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

Naver Ad Manager SDK for Android

## 요약

- 조사 단위: `sources/naver__nam-sdk-android` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 132 files, 70 directories, depth score 50, key references 7개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

개발 생산성/DevTools 관점에서 security/policy surface 구조로 읽힌다. 핵심 소스 근거는 ci=.github/workflows/android.yml, .github/workflows/spotless.yml, .github/workflows/stale.yml이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 CI 워크플로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 7개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | naver/nam-sdk-android |
| 주제 | 개발 생산성/DevTools / 개발 생산성/DevTools |
| Region | korea |
| Language | Java |
| Stars | 16 |
| Forks | 없음 |
| License | NOASSERTION |
| 성숙도 | 초기 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/naver__nam-sdk-android](../../../../sources/naver__nam-sdk-android) |
| 기존 보고서 | [reports/korea-trending/repositories/naver__nam-sdk-android.md](../../../korea-trending/repositories/naver__nam-sdk-android.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 132 / 70 |
| 관측 최대 깊이 | 9 |
| 상위 디렉터리 | .github, docs, gradle, java-sample, kotlin-sample, mediation |
| 상위 확장자 | .xml: 39, .md: 28, .webp: 20, .kt: 10, .java: 9, (none): 7, .yml: 6, .kts: 3, .png: 3, .pro: 2, .properties: 2, .bat: 1 |
| 소스 패턴 | security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 13 |
| .github | ci surface | 1 |
| gradle | top-level component | 1 |
| java-sample | top-level component | 1 |
| kotlin-sample | top-level component | 1 |
| mediation | top-level component | 1 |


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
| ci | [.github/workflows/android.yml](../../../../sources/naver__nam-sdk-android/.github/workflows/android.yml) | ci signal |
| ci | [.github/workflows/spotless.yml](../../../../sources/naver__nam-sdk-android/.github/workflows/spotless.yml) | ci signal |
| ci | [.github/workflows/stale.yml](../../../../sources/naver__nam-sdk-android/.github/workflows/stale.yml) | ci signal |
| docs | [README.md](../../../../sources/naver__nam-sdk-android/README.md) | docs signal |
| docs | [mediation/vungle/README.md](../../../../sources/naver__nam-sdk-android/mediation/vungle/README.md) | docs signal |
| docs | [mediation/unity/README.md](../../../../sources/naver__nam-sdk-android/mediation/unity/README.md) | docs signal |
| docs | [mediation/teads/README.md](../../../../sources/naver__nam-sdk-android/mediation/teads/README.md) | docs signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 0 | 명확하지 않음 |
| mcp | 0 | 명확하지 않음 |
| retrieval | 0 | 명확하지 않음 |
| spec | 0 | 명확하지 않음 |
| eval | 0 | 명확하지 않음 |
| security | 2 | [kotlin-sample/src/main/res/xml/network_security_config.xml](../../../../sources/naver__nam-sdk-android/kotlin-sample/src/main/res/xml/network_security_config.xml)<br>[java-sample/src/main/res/xml/network_security_config.xml](../../../../sources/naver__nam-sdk-android/java-sample/src/main/res/xml/network_security_config.xml) |
| ci | 3 | [.github/workflows/android.yml](../../../../sources/naver__nam-sdk-android/.github/workflows/android.yml)<br>[.github/workflows/spotless.yml](../../../../sources/naver__nam-sdk-android/.github/workflows/spotless.yml)<br>[.github/workflows/stale.yml](../../../../sources/naver__nam-sdk-android/.github/workflows/stale.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 29 | [README.md](../../../../sources/naver__nam-sdk-android/README.md)<br>[mediation/vungle/README.md](../../../../sources/naver__nam-sdk-android/mediation/vungle/README.md)<br>[mediation/unity/README.md](../../../../sources/naver__nam-sdk-android/mediation/unity/README.md)<br>[mediation/teads/README.md](../../../../sources/naver__nam-sdk-android/mediation/teads/README.md)<br>[mediation/pangle/README.md](../../../../sources/naver__nam-sdk-android/mediation/pangle/README.md)<br>[mediation/nda/README.md](../../../../sources/naver__nam-sdk-android/mediation/nda/README.md)<br>[mediation/moloco/README.md](../../../../sources/naver__nam-sdk-android/mediation/moloco/README.md)<br>[mediation/lan/README.md](../../../../sources/naver__nam-sdk-android/mediation/lan/README.md) |
| config | 0 | 명확하지 않음 |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 0 | 명확하지 않음 |
| CI workflow | 3 | [.github/workflows/android.yml](../../../../sources/naver__nam-sdk-android/.github/workflows/android.yml)<br>[.github/workflows/spotless.yml](../../../../sources/naver__nam-sdk-android/.github/workflows/spotless.yml)<br>[.github/workflows/stale.yml](../../../../sources/naver__nam-sdk-android/.github/workflows/stale.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 2 | [kotlin-sample/src/main/res/xml/network_security_config.xml](../../../../sources/naver__nam-sdk-android/kotlin-sample/src/main/res/xml/network_security_config.xml)<br>[java-sample/src/main/res/xml/network_security_config.xml](../../../../sources/naver__nam-sdk-android/java-sample/src/main/res/xml/network_security_config.xml) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | path scan에서 primary entrypoint가 명확하지 않음 |
| operation | container/deploy 경로가 명확하지 않음; test/eval 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `.github/workflows/android.yml`, `.github/workflows/spotless.yml`, `.github/workflows/stale.yml`.

## 기존 레포 인사이트

개발 생산성/DevTools 관점에서 Naver Ad Manager SDK for Android. 핵심 구조 신호는 Java, README.md, ci, docs, spec-artifacts이며, 소스+보고서 근거 수준으로 초기 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 개발 생산성/DevTools 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 더 깊은 구조 스캔 필요입니다.
