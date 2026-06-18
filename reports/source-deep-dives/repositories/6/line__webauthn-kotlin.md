# line/webauthn-kotlin 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

WebAuthn Kotlin is an open-source toolkit for secure, password-less authentication in mobile apps. Developed in Kotlin, it integrates seamlessly with native Android apps, adhering to WebAuthn 2.0 standards for enhanced security and user experience.

## 요약

- 조사 단위: `sources/line__webauthn-kotlin` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 76 files, 36 directories, depth score 40, key references 3개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

보안/거버넌스/안전 관점에서 eval/test harness 구조로 읽힌다. 핵심 소스 근거는 ci=.github/workflows/publish.yml이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 3개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | line/webauthn-kotlin |
| 주제 | 보안/거버넌스/안전 / 보안/거버넌스/안전 |
| Region | korea |
| Language | Kotlin |
| Stars | 24 |
| Forks | 8 |
| License | Apache-2.0 |
| 성숙도 | 초기 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/line__webauthn-kotlin](../../../../sources/line__webauthn-kotlin) |
| 기존 보고서 | [reports/korea-trending/repositories/line__webauthn-kotlin.md](../../../korea-trending/repositories/line__webauthn-kotlin.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 76 / 36 |
| 관측 최대 깊이 | 10 |
| 상위 디렉터리 | .github, gradle, webauthn |
| 상위 확장자 | .kt: 56, (none): 5, .md: 4, .gradle: 3, .properties: 2, .xml: 2, .bat: 1, .jar: 1, .pro: 1, .yml: 1 |
| 소스 패턴 | eval/test harness |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| .github | ci surface | 1 |
| gradle | top-level component | 1 |
| webauthn | source boundary | 1 |


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
| ci | [.github/workflows/publish.yml](../../../../sources/line__webauthn-kotlin/.github/workflows/publish.yml) | ci signal |
| eval | [webauthn/src/test/java/com/linecorp/webauthn/AuthenticatorTest.kt](../../../../sources/line__webauthn-kotlin/webauthn/src/test/java/com/linecorp/webauthn/AuthenticatorTest.kt) | eval support |
| eval | [webauthn/src/test/java/com/linecorp/webauthn/PublicKeyCredentialTest.kt](../../../../sources/line__webauthn-kotlin/webauthn/src/test/java/com/linecorp/webauthn/PublicKeyCredentialTest.kt) | eval support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 0 | 명확하지 않음 |
| mcp | 0 | 명확하지 않음 |
| retrieval | 0 | 명확하지 않음 |
| spec | 0 | 명확하지 않음 |
| eval | 3 | [webauthn/src/test/java/com/linecorp/webauthn/AuthenticatorTest.kt](../../../../sources/line__webauthn-kotlin/webauthn/src/test/java/com/linecorp/webauthn/AuthenticatorTest.kt)<br>[webauthn/src/test/java/com/linecorp/webauthn/PublicKeyCredentialTest.kt](../../../../sources/line__webauthn-kotlin/webauthn/src/test/java/com/linecorp/webauthn/PublicKeyCredentialTest.kt)<br>[webauthn/src/test/java/com/linecorp/webauthn/util/MockCredentialSourceStorage.kt](../../../../sources/line__webauthn-kotlin/webauthn/src/test/java/com/linecorp/webauthn/util/MockCredentialSourceStorage.kt) |
| security | 0 | 명확하지 않음 |
| ci | 1 | [.github/workflows/publish.yml](../../../../sources/line__webauthn-kotlin/.github/workflows/publish.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 1 | [README.md](../../../../sources/line__webauthn-kotlin/README.md) |
| config | 0 | 명확하지 않음 |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 3 | [webauthn/src/test/java/com/linecorp/webauthn/AuthenticatorTest.kt](../../../../sources/line__webauthn-kotlin/webauthn/src/test/java/com/linecorp/webauthn/AuthenticatorTest.kt)<br>[webauthn/src/test/java/com/linecorp/webauthn/PublicKeyCredentialTest.kt](../../../../sources/line__webauthn-kotlin/webauthn/src/test/java/com/linecorp/webauthn/PublicKeyCredentialTest.kt)<br>[webauthn/src/test/java/com/linecorp/webauthn/util/MockCredentialSourceStorage.kt](../../../../sources/line__webauthn-kotlin/webauthn/src/test/java/com/linecorp/webauthn/util/MockCredentialSourceStorage.kt) |
| CI workflow | 1 | [.github/workflows/publish.yml](../../../../sources/line__webauthn-kotlin/.github/workflows/publish.yml) |
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

1. 핵심 참조에서 시작: `.github/workflows/publish.yml`, `webauthn/src/test/java/com/linecorp/webauthn/AuthenticatorTest.kt`, `webauthn/src/test/java/com/linecorp/webauthn/PublicKeyCredentialTest.kt`.
2. test/eval 파일로 동작 검증: `webauthn/src/test/java/com/linecorp/webauthn/AuthenticatorTest.kt`, `webauthn/src/test/java/com/linecorp/webauthn/PublicKeyCredentialTest.kt`, `webauthn/src/test/java/com/linecorp/webauthn/util/MockCredentialSourceStorage.kt`.

## 기존 레포 인사이트

보안/거버넌스/안전 관점에서 WebAuthn Kotlin is an open source toolkit for secure, password less authentication in mobile apps. Developed in Kotlin, . 핵심 구조 신호는 Kotlin, build.gradle, README.md, LICENSE, ci, docs이며, 소스+보고서 근거 수준으로 초기 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 보안/거버넌스/안전 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 더 깊은 구조 스캔 필요입니다.
