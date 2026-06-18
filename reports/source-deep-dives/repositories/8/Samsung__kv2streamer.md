# Samsung/kv2streamer 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

kv2streamer is a library that allows developers to access the new Kinect V2 sensor data and tracking capabilities from non-windows OS. It provides a server-side application that can stream out Kinect V2 data to multiple client-side applications accessing the client-side API running on non-windows OS over LAN.

## 요약

- 조사 단위: `sources/Samsung__kv2streamer` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 154 files, 36 directories, depth score 69, key references 9개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 agent/tool runtime, retrieval/vector path, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 config=sample-client-applications/kv2client_codelite/Makefile, kv2server-applications/oscpack/Makefile이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 9개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | Samsung/kv2streamer |
| 주제 | 일반 AI 오픈소스 / 일반 AI 오픈소스 |
| Region | korea |
| Language | C++ |
| Stars | 52 |
| Forks | 17 |
| License | NOASSERTION |
| 성숙도 | 초기 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/Samsung__kv2streamer](../../../../sources/Samsung__kv2streamer) |
| 기존 보고서 | [reports/korea-trending/repositories/Samsung__kv2streamer.md](../../../korea-trending/repositories/Samsung__kv2streamer.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 154 / 36 |
| 관측 최대 깊이 | 5 |
| 상위 디렉터리 | kv2server-applications, kv2streamer-lib, sample-client-applications |
| 상위 확장자 | .h: 59, .cpp: 54, (none): 11, .txt: 6, .conf: 3, .cmake: 2, .filters: 2, .sln: 2, .user: 2, .vcxproj: 2, .bat: 1, .check_cache: 1 |
| 소스 패턴 | agent/tool runtime, retrieval/vector path, eval/test harness |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| kv2server-applications | source boundary | 1 |
| kv2streamer-lib | source boundary | 1 |
| sample-client-applications | source boundary | 1 |


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
| config | [sample-client-applications/kv2client_codelite/Makefile](../../../../sources/Samsung__kv2streamer/sample-client-applications/kv2client_codelite/Makefile) | config signal |
| config | [kv2server-applications/oscpack/Makefile](../../../../sources/Samsung__kv2streamer/kv2server-applications/oscpack/Makefile) | config signal |
| docs | [README.md](../../../../sources/Samsung__kv2streamer/README.md) | docs signal |
| docs | [sample-client-applications/kv2client_codelite/README](../../../../sources/Samsung__kv2streamer/sample-client-applications/kv2client_codelite/README) | docs signal |
| docs | [kv2server-applications/oscpack/README](../../../../sources/Samsung__kv2streamer/kv2server-applications/oscpack/README) | docs signal |
| eval | [kv2server-applications/oscpack/tests/OscReceiveTest.cpp](../../../../sources/Samsung__kv2streamer/kv2server-applications/oscpack/tests/OscReceiveTest.cpp) | eval signal |
| eval | [kv2server-applications/oscpack/tests/OscReceiveTest.h](../../../../sources/Samsung__kv2streamer/kv2server-applications/oscpack/tests/OscReceiveTest.h) | eval signal |
| eval | [kv2server-applications/oscpack/tests/OscSendTests.cpp](../../../../sources/Samsung__kv2streamer/kv2server-applications/oscpack/tests/OscSendTests.cpp) | eval signal |
| eval | [kv2server-applications/oscpack/tests/OscSendTests.h](../../../../sources/Samsung__kv2streamer/kv2server-applications/oscpack/tests/OscSendTests.h) | eval signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 3 | [kv2streamer-lib/tool/CMakeLists.txt](../../../../sources/Samsung__kv2streamer/kv2streamer-lib/tool/CMakeLists.txt)<br>[kv2streamer-lib/tool/kv2client-config.h.in](../../../../sources/Samsung__kv2streamer/kv2streamer-lib/tool/kv2client-config.h.in)<br>[kv2streamer-lib/tool/kv2client-version.cxx](../../../../sources/Samsung__kv2streamer/kv2streamer-lib/tool/kv2client-version.cxx) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 4 | [kv2streamer-lib/kv2client/body_index/BodyIndexFrameStreamer.cpp](../../../../sources/Samsung__kv2streamer/kv2streamer-lib/kv2client/body_index/BodyIndexFrameStreamer.cpp)<br>[kv2streamer-lib/kv2client/body_index/BodyIndexFrameStreamer.h](../../../../sources/Samsung__kv2streamer/kv2streamer-lib/kv2client/body_index/BodyIndexFrameStreamer.h)<br>[kv2streamer-lib/kv2client/body_index/IBodyIndexFrame.cpp](../../../../sources/Samsung__kv2streamer/kv2streamer-lib/kv2client/body_index/IBodyIndexFrame.cpp)<br>[kv2streamer-lib/kv2client/body_index/IBodyIndexFrame.h](../../../../sources/Samsung__kv2streamer/kv2streamer-lib/kv2client/body_index/IBodyIndexFrame.h) |
| spec | 0 | 명확하지 않음 |
| eval | 6 | [kv2server-applications/oscpack/tests/OscReceiveTest.cpp](../../../../sources/Samsung__kv2streamer/kv2server-applications/oscpack/tests/OscReceiveTest.cpp)<br>[kv2server-applications/oscpack/tests/OscReceiveTest.h](../../../../sources/Samsung__kv2streamer/kv2server-applications/oscpack/tests/OscReceiveTest.h)<br>[kv2server-applications/oscpack/tests/OscSendTests.cpp](../../../../sources/Samsung__kv2streamer/kv2server-applications/oscpack/tests/OscSendTests.cpp)<br>[kv2server-applications/oscpack/tests/OscSendTests.h](../../../../sources/Samsung__kv2streamer/kv2server-applications/oscpack/tests/OscSendTests.h)<br>[kv2server-applications/oscpack/tests/OscUnitTests.cpp](../../../../sources/Samsung__kv2streamer/kv2server-applications/oscpack/tests/OscUnitTests.cpp)<br>[kv2server-applications/oscpack/tests/OscUnitTests.h](../../../../sources/Samsung__kv2streamer/kv2server-applications/oscpack/tests/OscUnitTests.h) |
| security | 0 | 명확하지 않음 |
| ci | 0 | 명확하지 않음 |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 3 | [README.md](../../../../sources/Samsung__kv2streamer/README.md)<br>[sample-client-applications/kv2client_codelite/README](../../../../sources/Samsung__kv2streamer/sample-client-applications/kv2client_codelite/README)<br>[kv2server-applications/oscpack/README](../../../../sources/Samsung__kv2streamer/kv2server-applications/oscpack/README) |
| config | 2 | [sample-client-applications/kv2client_codelite/Makefile](../../../../sources/Samsung__kv2streamer/sample-client-applications/kv2client_codelite/Makefile)<br>[kv2server-applications/oscpack/Makefile](../../../../sources/Samsung__kv2streamer/kv2server-applications/oscpack/Makefile) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 6 | [kv2server-applications/oscpack/tests/OscReceiveTest.cpp](../../../../sources/Samsung__kv2streamer/kv2server-applications/oscpack/tests/OscReceiveTest.cpp)<br>[kv2server-applications/oscpack/tests/OscReceiveTest.h](../../../../sources/Samsung__kv2streamer/kv2server-applications/oscpack/tests/OscReceiveTest.h)<br>[kv2server-applications/oscpack/tests/OscSendTests.cpp](../../../../sources/Samsung__kv2streamer/kv2server-applications/oscpack/tests/OscSendTests.cpp)<br>[kv2server-applications/oscpack/tests/OscSendTests.h](../../../../sources/Samsung__kv2streamer/kv2server-applications/oscpack/tests/OscSendTests.h)<br>[kv2server-applications/oscpack/tests/OscUnitTests.cpp](../../../../sources/Samsung__kv2streamer/kv2server-applications/oscpack/tests/OscUnitTests.cpp)<br>[kv2server-applications/oscpack/tests/OscUnitTests.h](../../../../sources/Samsung__kv2streamer/kv2server-applications/oscpack/tests/OscUnitTests.h) |
| CI workflow | 0 | 명확하지 않음 |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | path scan에서 primary entrypoint가 명확하지 않음 |
| operation | CI workflow 경로가 명확하지 않음; container/deploy 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `sample-client-applications/kv2client_codelite/Makefile`, `kv2server-applications/oscpack/Makefile`, `README.md`.
2. agent/tool runtime 매핑: `kv2streamer-lib/tool/CMakeLists.txt`, `kv2streamer-lib/tool/kv2client-config.h.in`, `kv2streamer-lib/tool/kv2client-version.cxx`.
3. retrieval/memory/indexing 확인: `kv2streamer-lib/kv2client/body_index/BodyIndexFrameStreamer.cpp`, `kv2streamer-lib/kv2client/body_index/BodyIndexFrameStreamer.h`, `kv2streamer-lib/kv2client/body_index/IBodyIndexFrame.cpp`.
4. test/eval 파일로 동작 검증: `kv2server-applications/oscpack/tests/OscReceiveTest.cpp`, `kv2server-applications/oscpack/tests/OscReceiveTest.h`, `kv2server-applications/oscpack/tests/OscSendTests.cpp`.

## 기존 레포 인사이트

일반 AI 오픈소스 관점에서 kv2streamer is a library that allows developers to access the new Kinect V2 sensor data and tracking capabilities from n. 핵심 구조 신호는 C++, README.md, LICENSE, docs이며, 소스+보고서 근거 수준으로 초기 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, CI 신호가 명확하지 않음, 더 깊은 구조 스캔 필요입니다.
