# line/aes-gcm-siv 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

AES-GCM-SIV (RFC 8452) implementation for C, Android and Java, with hardware acceleration support.

## 요약

- 조사 단위: `sources/line__aes-gcm-siv` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 83 files, 44 directories, depth score 54, key references 10개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 eval/test harness 구조로 읽힌다. 핵심 소스 근거는 docs=README.md, lib/README.md, java/README.md이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 10개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | line/aes-gcm-siv |
| 주제 | 일반 AI 오픈소스 / 일반 AI 오픈소스 |
| Region | korea |
| Language | C |
| Stars | 51 |
| Forks | 10 |
| License | Apache-2.0 |
| 성숙도 | 초기 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/line__aes-gcm-siv](../../../../sources/line__aes-gcm-siv) |
| 기존 보고서 | [reports/korea-trending/repositories/line__aes-gcm-siv.md](../../../korea-trending/repositories/line__aes-gcm-siv.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 83 / 44 |
| 관측 최대 깊이 | 9 |
| 상위 디렉터리 | .github, android, java, jni, lib |
| 상위 확장자 | .h: 12, .c: 11, (none): 10, .txt: 8, .java: 7, .md: 7, .cpp: 6, .gradle: 6, .properties: 4, .yaml: 3, .bat: 2, .cmake: 2 |
| 소스 패턴 | eval/test harness |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| lib | source boundary | 16 |
| .github | ci surface | 1 |
| android | top-level component | 1 |
| java | top-level component | 1 |
| jni | top-level component | 1 |


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
| docs | [README.md](../../../../sources/line__aes-gcm-siv/README.md) | docs signal |
| docs | [lib/README.md](../../../../sources/line__aes-gcm-siv/lib/README.md) | docs signal |
| docs | [java/README.md](../../../../sources/line__aes-gcm-siv/java/README.md) | docs signal |
| docs | [android/README.md](../../../../sources/line__aes-gcm-siv/android/README.md) | docs signal |
| eval | [lib/tests/CMakeLists.txt](../../../../sources/line__aes-gcm-siv/lib/tests/CMakeLists.txt) | eval signal |
| eval | [lib/tests/googletest.cmake](../../../../sources/line__aes-gcm-siv/lib/tests/googletest.cmake) | eval signal |
| eval | [lib/tests/unit_tests/api.cpp](../../../../sources/line__aes-gcm-siv/lib/tests/unit_tests/api.cpp) | eval signal |
| eval | [lib/tests/unit_tests/CMakeLists.txt](../../../../sources/line__aes-gcm-siv/lib/tests/unit_tests/CMakeLists.txt) | eval signal |
| ci | [.github/workflows/clang-format.yaml](../../../../sources/line__aes-gcm-siv/.github/workflows/clang-format.yaml) | ci support |
| ci | [.github/workflows/memcheck.yaml](../../../../sources/line__aes-gcm-siv/.github/workflows/memcheck.yaml) | ci support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 0 | 명확하지 않음 |
| mcp | 0 | 명확하지 않음 |
| retrieval | 0 | 명확하지 않음 |
| spec | 0 | 명확하지 않음 |
| eval | 17 | [lib/tests/CMakeLists.txt](../../../../sources/line__aes-gcm-siv/lib/tests/CMakeLists.txt)<br>[lib/tests/googletest.cmake](../../../../sources/line__aes-gcm-siv/lib/tests/googletest.cmake)<br>[lib/tests/unit_tests/api.cpp](../../../../sources/line__aes-gcm-siv/lib/tests/unit_tests/api.cpp)<br>[lib/tests/unit_tests/CMakeLists.txt](../../../../sources/line__aes-gcm-siv/lib/tests/unit_tests/CMakeLists.txt)<br>[lib/tests/unit_tests/kat.cpp](../../../../sources/line__aes-gcm-siv/lib/tests/unit_tests/kat.cpp)<br>[lib/tests/unit_tests/main.cpp](../../../../sources/line__aes-gcm-siv/lib/tests/unit_tests/main.cpp)<br>[lib/tests/unit_tests/thirdparty_kat.cpp](../../../../sources/line__aes-gcm-siv/lib/tests/unit_tests/thirdparty_kat.cpp)<br>[lib/tests/unit_tests/utils.cpp](../../../../sources/line__aes-gcm-siv/lib/tests/unit_tests/utils.cpp) |
| security | 0 | 명확하지 않음 |
| ci | 3 | [.github/workflows/clang-format.yaml](../../../../sources/line__aes-gcm-siv/.github/workflows/clang-format.yaml)<br>[.github/workflows/memcheck.yaml](../../../../sources/line__aes-gcm-siv/.github/workflows/memcheck.yaml)<br>[.github/workflows/unit_tests.yaml](../../../../sources/line__aes-gcm-siv/.github/workflows/unit_tests.yaml) |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 4 | [README.md](../../../../sources/line__aes-gcm-siv/README.md)<br>[lib/README.md](../../../../sources/line__aes-gcm-siv/lib/README.md)<br>[java/README.md](../../../../sources/line__aes-gcm-siv/java/README.md)<br>[android/README.md](../../../../sources/line__aes-gcm-siv/android/README.md) |
| config | 0 | 명확하지 않음 |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 17 | [lib/tests/CMakeLists.txt](../../../../sources/line__aes-gcm-siv/lib/tests/CMakeLists.txt)<br>[lib/tests/googletest.cmake](../../../../sources/line__aes-gcm-siv/lib/tests/googletest.cmake)<br>[lib/tests/unit_tests/api.cpp](../../../../sources/line__aes-gcm-siv/lib/tests/unit_tests/api.cpp)<br>[lib/tests/unit_tests/CMakeLists.txt](../../../../sources/line__aes-gcm-siv/lib/tests/unit_tests/CMakeLists.txt)<br>[lib/tests/unit_tests/kat.cpp](../../../../sources/line__aes-gcm-siv/lib/tests/unit_tests/kat.cpp)<br>[lib/tests/unit_tests/main.cpp](../../../../sources/line__aes-gcm-siv/lib/tests/unit_tests/main.cpp) |
| CI workflow | 3 | [.github/workflows/clang-format.yaml](../../../../sources/line__aes-gcm-siv/.github/workflows/clang-format.yaml)<br>[.github/workflows/memcheck.yaml](../../../../sources/line__aes-gcm-siv/.github/workflows/memcheck.yaml)<br>[.github/workflows/unit_tests.yaml](../../../../sources/line__aes-gcm-siv/.github/workflows/unit_tests.yaml) |
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

1. 핵심 참조에서 시작: `README.md`, `lib/README.md`, `java/README.md`.
2. test/eval 파일로 동작 검증: `lib/tests/CMakeLists.txt`, `lib/tests/googletest.cmake`, `lib/tests/unit_tests/api.cpp`.

## 기존 레포 인사이트

일반 AI 오픈소스 관점에서 AES GCM SIV RFC 8452 implementation for C, Android and Java, with hardware acceleration support.. 핵심 구조 신호는 C, README.md, LICENSE, ci, docs이며, 소스+보고서 근거 수준으로 초기 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 더 깊은 구조 스캔 필요입니다.
