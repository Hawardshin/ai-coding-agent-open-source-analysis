# nhn/toast-haste.framework 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

TOAST Haste framework is a pure java implementation of asynchronous game server framework

## 요약

- 조사 단위: `sources/nhn__toast-haste.framework` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 153 files, 129 directories, depth score 52, key references 6개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 eval/test harness, security/policy surface 구조로 읽힌다. 핵심 소스 근거는 docs=README_KR.md, README.md이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 6개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | nhn/toast-haste.framework |
| 주제 | 일반 AI 오픈소스 / 일반 AI 오픈소스 |
| Region | korea |
| Language | Java |
| Stars | 100 |
| Forks | 29 |
| License | Apache-2.0 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/nhn__toast-haste.framework](../../../../sources/nhn__toast-haste.framework) |
| 기존 보고서 | [reports/korea-trending/repositories/nhn__toast-haste.framework.md](../../../korea-trending/repositories/nhn__toast-haste.framework.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 153 / 129 |
| 관측 최대 깊이 | 10 |
| 상위 디렉터리 | .github, all, bootstrap, common, example, framework, license, objectpool, protocol, security, transport, transport-tcp, transport-udp |
| 상위 확장자 | .java: 126, .xml: 12, .txt: 8, .md: 5, .properties: 1, (none): 1 |
| 소스 패턴 | eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| .github | ci surface | 1 |
| all | top-level component | 1 |
| bootstrap | top-level component | 1 |
| common | top-level component | 1 |
| example | top-level component | 1 |
| framework | top-level component | 1 |
| license | top-level component | 1 |
| objectpool | top-level component | 1 |
| protocol | top-level component | 1 |
| security | top-level component | 1 |
| transport | top-level component | 1 |
| transport-tcp | top-level component | 1 |
| transport-udp | top-level component | 1 |


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
| docs | [README_KR.md](../../../../sources/nhn__toast-haste.framework/README_KR.md) | docs signal |
| docs | [README.md](../../../../sources/nhn__toast-haste.framework/README.md) | docs signal |
| eval | [transport-udp/src/test/java/com/nhnent/haste/transport/udp/OutgoingCommandTest.java](../../../../sources/nhn__toast-haste.framework/transport-udp/src/test/java/com/nhnent/haste/transport/udp/OutgoingCommandTest.java) | eval signal |
| eval | [security/src/test/java/com/nhnent/haste/security/AesTest.java](../../../../sources/nhn__toast-haste.framework/security/src/test/java/com/nhnent/haste/security/AesTest.java) | eval signal |
| eval | [security/src/test/java/com/nhnent/haste/security/Base64.java](../../../../sources/nhn__toast-haste.framework/security/src/test/java/com/nhnent/haste/security/Base64.java) | eval signal |
| eval | [security/src/test/java/com/nhnent/haste/security/BigIntegerTest.java](../../../../sources/nhn__toast-haste.framework/security/src/test/java/com/nhnent/haste/security/BigIntegerTest.java) | eval signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 0 | 명확하지 않음 |
| mcp | 0 | 명확하지 않음 |
| retrieval | 0 | 명확하지 않음 |
| spec | 0 | 명확하지 않음 |
| eval | 22 | [transport-udp/src/test/java/com/nhnent/haste/transport/udp/OutgoingCommandTest.java](../../../../sources/nhn__toast-haste.framework/transport-udp/src/test/java/com/nhnent/haste/transport/udp/OutgoingCommandTest.java)<br>[security/src/test/java/com/nhnent/haste/security/AesTest.java](../../../../sources/nhn__toast-haste.framework/security/src/test/java/com/nhnent/haste/security/AesTest.java)<br>[security/src/test/java/com/nhnent/haste/security/Base64.java](../../../../sources/nhn__toast-haste.framework/security/src/test/java/com/nhnent/haste/security/Base64.java)<br>[security/src/test/java/com/nhnent/haste/security/BigIntegerTest.java](../../../../sources/nhn__toast-haste.framework/security/src/test/java/com/nhnent/haste/security/BigIntegerTest.java)<br>[security/src/test/java/com/nhnent/haste/security/DiffieHellmanTest.java](../../../../sources/nhn__toast-haste.framework/security/src/test/java/com/nhnent/haste/security/DiffieHellmanTest.java)<br>[security/src/test/java/com/nhnent/haste/security/Md5Test.java](../../../../sources/nhn__toast-haste.framework/security/src/test/java/com/nhnent/haste/security/Md5Test.java)<br>[security/src/test/java/com/nhnent/haste/security/ShaTest.java](../../../../sources/nhn__toast-haste.framework/security/src/test/java/com/nhnent/haste/security/ShaTest.java)<br>[security/src/test/java/com/nhnent/haste/security/TestConstants.java](../../../../sources/nhn__toast-haste.framework/security/src/test/java/com/nhnent/haste/security/TestConstants.java) |
| security | 18 | [security/pom.xml](../../../../sources/nhn__toast-haste.framework/security/pom.xml)<br>[security/src/test/java/com/nhnent/haste/security/AesTest.java](../../../../sources/nhn__toast-haste.framework/security/src/test/java/com/nhnent/haste/security/AesTest.java)<br>[security/src/test/java/com/nhnent/haste/security/Base64.java](../../../../sources/nhn__toast-haste.framework/security/src/test/java/com/nhnent/haste/security/Base64.java)<br>[security/src/test/java/com/nhnent/haste/security/BigIntegerTest.java](../../../../sources/nhn__toast-haste.framework/security/src/test/java/com/nhnent/haste/security/BigIntegerTest.java)<br>[security/src/test/java/com/nhnent/haste/security/DiffieHellmanTest.java](../../../../sources/nhn__toast-haste.framework/security/src/test/java/com/nhnent/haste/security/DiffieHellmanTest.java)<br>[security/src/test/java/com/nhnent/haste/security/Md5Test.java](../../../../sources/nhn__toast-haste.framework/security/src/test/java/com/nhnent/haste/security/Md5Test.java)<br>[security/src/test/java/com/nhnent/haste/security/ShaTest.java](../../../../sources/nhn__toast-haste.framework/security/src/test/java/com/nhnent/haste/security/ShaTest.java)<br>[security/src/test/java/com/nhnent/haste/security/TestConstants.java](../../../../sources/nhn__toast-haste.framework/security/src/test/java/com/nhnent/haste/security/TestConstants.java) |
| ci | 0 | 명확하지 않음 |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 2 | [README_KR.md](../../../../sources/nhn__toast-haste.framework/README_KR.md)<br>[README.md](../../../../sources/nhn__toast-haste.framework/README.md) |
| config | 0 | 명확하지 않음 |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 22 | [transport-udp/src/test/java/com/nhnent/haste/transport/udp/OutgoingCommandTest.java](../../../../sources/nhn__toast-haste.framework/transport-udp/src/test/java/com/nhnent/haste/transport/udp/OutgoingCommandTest.java)<br>[security/src/test/java/com/nhnent/haste/security/AesTest.java](../../../../sources/nhn__toast-haste.framework/security/src/test/java/com/nhnent/haste/security/AesTest.java)<br>[security/src/test/java/com/nhnent/haste/security/Base64.java](../../../../sources/nhn__toast-haste.framework/security/src/test/java/com/nhnent/haste/security/Base64.java)<br>[security/src/test/java/com/nhnent/haste/security/BigIntegerTest.java](../../../../sources/nhn__toast-haste.framework/security/src/test/java/com/nhnent/haste/security/BigIntegerTest.java)<br>[security/src/test/java/com/nhnent/haste/security/DiffieHellmanTest.java](../../../../sources/nhn__toast-haste.framework/security/src/test/java/com/nhnent/haste/security/DiffieHellmanTest.java)<br>[security/src/test/java/com/nhnent/haste/security/Md5Test.java](../../../../sources/nhn__toast-haste.framework/security/src/test/java/com/nhnent/haste/security/Md5Test.java) |
| CI workflow | 0 | 명확하지 않음 |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 18 | [security/pom.xml](../../../../sources/nhn__toast-haste.framework/security/pom.xml)<br>[security/src/test/java/com/nhnent/haste/security/AesTest.java](../../../../sources/nhn__toast-haste.framework/security/src/test/java/com/nhnent/haste/security/AesTest.java)<br>[security/src/test/java/com/nhnent/haste/security/Base64.java](../../../../sources/nhn__toast-haste.framework/security/src/test/java/com/nhnent/haste/security/Base64.java)<br>[security/src/test/java/com/nhnent/haste/security/BigIntegerTest.java](../../../../sources/nhn__toast-haste.framework/security/src/test/java/com/nhnent/haste/security/BigIntegerTest.java)<br>[security/src/test/java/com/nhnent/haste/security/DiffieHellmanTest.java](../../../../sources/nhn__toast-haste.framework/security/src/test/java/com/nhnent/haste/security/DiffieHellmanTest.java)<br>[security/src/test/java/com/nhnent/haste/security/Md5Test.java](../../../../sources/nhn__toast-haste.framework/security/src/test/java/com/nhnent/haste/security/Md5Test.java) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | path scan에서 primary entrypoint가 명확하지 않음 |
| operation | CI workflow 경로가 명확하지 않음; container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `README_KR.md`, `README.md`, `transport-udp/src/test/java/com/nhnent/haste/transport/udp/OutgoingCommandTest.java`.
2. test/eval 파일로 동작 검증: `transport-udp/src/test/java/com/nhnent/haste/transport/udp/OutgoingCommandTest.java`, `security/src/test/java/com/nhnent/haste/security/AesTest.java`, `security/src/test/java/com/nhnent/haste/security/Base64.java`.

## 기존 레포 인사이트

일반 AI 오픈소스 관점에서 TOAST Haste framework is a pure java implementation of asynchronous game server framework. 핵심 구조 신호는 Java, pom.xml, README.md, ci, docs이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 더 깊은 구조 스캔 필요입니다.
