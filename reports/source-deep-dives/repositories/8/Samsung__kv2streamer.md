# Samsung/kv2streamer Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

kv2streamer is a library that allows developers to access the new Kinect V2 sensor data and tracking capabilities from non-windows OS. It provides a server-side application that can stream out Kinect V2 data to multiple client-side applications accessing the client-side API running on non-windows OS over LAN.

## 요약

- 조사 단위: `sources/Samsung__kv2streamer` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 154 files, 36 directories, depth score 75, key references 9개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 agent/tool runtime, retrieval/vector path, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 config=sample-client-applications/kv2client_codelite/Makefile, kv2server-applications/oscpack/Makefile이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 9개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| [Source Trend Insights](../../../source-insights/README.md) | Category trend insights and repository feature comparison from source evidence. |


## Repository Context

| Field | Value |
| --- | --- |
| Repository | Samsung/kv2streamer |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | C++ |
| Stars | 52 |
| Forks | 17 |
| License | NOASSERTION |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/Samsung__kv2streamer](../../../../sources/Samsung__kv2streamer) |
| Existing report | [reports/korea-trending/repositories/Samsung__kv2streamer.md](../../../korea-trending/repositories/Samsung__kv2streamer.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 154 / 36 |
| Max observed depth | 5 |
| Top directories | kv2server-applications, kv2streamer-lib, sample-client-applications |
| Top extensions | .h: 59, .cpp: 54, (none): 11, .txt: 6, .conf: 3, .cmake: 2, .filters: 2, .sln: 2, .user: 2, .vcxproj: 2, .bat: 1, .check_cache: 1 |
| Source patterns | agent/tool runtime, retrieval/vector path, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| kv2server-applications | source boundary | 1 |
| kv2streamer-lib | source boundary | 1 |
| sample-client-applications | source boundary | 1 |


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
| config | [sample-client-applications/kv2client_codelite/Makefile](../../../../sources/Samsung__kv2streamer/sample-client-applications/kv2client_codelite/Makefile) | config signal |
| config | [kv2server-applications/oscpack/Makefile](../../../../sources/Samsung__kv2streamer/kv2server-applications/oscpack/Makefile) | config signal |
| docs | [README.md](../../../../sources/Samsung__kv2streamer/README.md) | docs signal |
| docs | [sample-client-applications/kv2client_codelite/README](../../../../sources/Samsung__kv2streamer/sample-client-applications/kv2client_codelite/README) | docs signal |
| docs | [kv2server-applications/oscpack/README](../../../../sources/Samsung__kv2streamer/kv2server-applications/oscpack/README) | docs signal |
| eval | [kv2server-applications/oscpack/tests/OscReceiveTest.cpp](../../../../sources/Samsung__kv2streamer/kv2server-applications/oscpack/tests/OscReceiveTest.cpp) | eval signal |
| eval | [kv2server-applications/oscpack/tests/OscReceiveTest.h](../../../../sources/Samsung__kv2streamer/kv2server-applications/oscpack/tests/OscReceiveTest.h) | eval signal |
| eval | [kv2server-applications/oscpack/tests/OscSendTests.cpp](../../../../sources/Samsung__kv2streamer/kv2server-applications/oscpack/tests/OscSendTests.cpp) | eval signal |
| eval | [kv2server-applications/oscpack/tests/OscSendTests.h](../../../../sources/Samsung__kv2streamer/kv2server-applications/oscpack/tests/OscSendTests.h) | eval signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 3 | [kv2streamer-lib/tool/CMakeLists.txt](../../../../sources/Samsung__kv2streamer/kv2streamer-lib/tool/CMakeLists.txt)<br>[kv2streamer-lib/tool/kv2client-config.h.in](../../../../sources/Samsung__kv2streamer/kv2streamer-lib/tool/kv2client-config.h.in)<br>[kv2streamer-lib/tool/kv2client-version.cxx](../../../../sources/Samsung__kv2streamer/kv2streamer-lib/tool/kv2client-version.cxx) |
| mcp | 0 | not obvious |
| retrieval | 4 | [kv2streamer-lib/kv2client/body_index/BodyIndexFrameStreamer.cpp](../../../../sources/Samsung__kv2streamer/kv2streamer-lib/kv2client/body_index/BodyIndexFrameStreamer.cpp)<br>[kv2streamer-lib/kv2client/body_index/BodyIndexFrameStreamer.h](../../../../sources/Samsung__kv2streamer/kv2streamer-lib/kv2client/body_index/BodyIndexFrameStreamer.h)<br>[kv2streamer-lib/kv2client/body_index/IBodyIndexFrame.cpp](../../../../sources/Samsung__kv2streamer/kv2streamer-lib/kv2client/body_index/IBodyIndexFrame.cpp)<br>[kv2streamer-lib/kv2client/body_index/IBodyIndexFrame.h](../../../../sources/Samsung__kv2streamer/kv2streamer-lib/kv2client/body_index/IBodyIndexFrame.h) |
| spec | 0 | not obvious |
| eval | 6 | [kv2server-applications/oscpack/tests/OscReceiveTest.cpp](../../../../sources/Samsung__kv2streamer/kv2server-applications/oscpack/tests/OscReceiveTest.cpp)<br>[kv2server-applications/oscpack/tests/OscReceiveTest.h](../../../../sources/Samsung__kv2streamer/kv2server-applications/oscpack/tests/OscReceiveTest.h)<br>[kv2server-applications/oscpack/tests/OscSendTests.cpp](../../../../sources/Samsung__kv2streamer/kv2server-applications/oscpack/tests/OscSendTests.cpp)<br>[kv2server-applications/oscpack/tests/OscSendTests.h](../../../../sources/Samsung__kv2streamer/kv2server-applications/oscpack/tests/OscSendTests.h)<br>[kv2server-applications/oscpack/tests/OscUnitTests.cpp](../../../../sources/Samsung__kv2streamer/kv2server-applications/oscpack/tests/OscUnitTests.cpp)<br>[kv2server-applications/oscpack/tests/OscUnitTests.h](../../../../sources/Samsung__kv2streamer/kv2server-applications/oscpack/tests/OscUnitTests.h) |
| security | 0 | not obvious |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 3 | [README.md](../../../../sources/Samsung__kv2streamer/README.md)<br>[sample-client-applications/kv2client_codelite/README](../../../../sources/Samsung__kv2streamer/sample-client-applications/kv2client_codelite/README)<br>[kv2server-applications/oscpack/README](../../../../sources/Samsung__kv2streamer/kv2server-applications/oscpack/README) |
| config | 2 | [sample-client-applications/kv2client_codelite/Makefile](../../../../sources/Samsung__kv2streamer/sample-client-applications/kv2client_codelite/Makefile)<br>[kv2server-applications/oscpack/Makefile](../../../../sources/Samsung__kv2streamer/kv2server-applications/oscpack/Makefile) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 6 | [kv2server-applications/oscpack/tests/OscReceiveTest.cpp](../../../../sources/Samsung__kv2streamer/kv2server-applications/oscpack/tests/OscReceiveTest.cpp)<br>[kv2server-applications/oscpack/tests/OscReceiveTest.h](../../../../sources/Samsung__kv2streamer/kv2server-applications/oscpack/tests/OscReceiveTest.h)<br>[kv2server-applications/oscpack/tests/OscSendTests.cpp](../../../../sources/Samsung__kv2streamer/kv2server-applications/oscpack/tests/OscSendTests.cpp)<br>[kv2server-applications/oscpack/tests/OscSendTests.h](../../../../sources/Samsung__kv2streamer/kv2server-applications/oscpack/tests/OscSendTests.h)<br>[kv2server-applications/oscpack/tests/OscUnitTests.cpp](../../../../sources/Samsung__kv2streamer/kv2server-applications/oscpack/tests/OscUnitTests.cpp)<br>[kv2server-applications/oscpack/tests/OscUnitTests.h](../../../../sources/Samsung__kv2streamer/kv2server-applications/oscpack/tests/OscUnitTests.h) |
| CI workflows | 0 | not obvious |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | CI workflow path not obvious; container/deploy path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `sample-client-applications/kv2client_codelite/Makefile`, `kv2server-applications/oscpack/Makefile`, `README.md`.
2. Map agent/tool runtime through: `kv2streamer-lib/tool/CMakeLists.txt`, `kv2streamer-lib/tool/kv2client-config.h.in`, `kv2streamer-lib/tool/kv2client-version.cxx`.
3. Inspect retrieval/memory/indexing through: `kv2streamer-lib/kv2client/body_index/BodyIndexFrameStreamer.cpp`, `kv2streamer-lib/kv2client/body_index/BodyIndexFrameStreamer.h`, `kv2streamer-lib/kv2client/body_index/IBodyIndexFrame.cpp`.
4. Verify behavior through test/eval files: `kv2server-applications/oscpack/tests/OscReceiveTest.cpp`, `kv2server-applications/oscpack/tests/OscReceiveTest.h`, `kv2server-applications/oscpack/tests/OscSendTests.cpp`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 kv2streamer is a library that allows developers to access the new Kinect V2 sensor data and tracking capabilities from n. 핵심 구조 신호는 C++, README.md, LICENSE, docs이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, ci signal not obvious, needs deeper structural scan입니다.
