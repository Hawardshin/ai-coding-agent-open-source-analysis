# line/aes-gcm-siv Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

AES-GCM-SIV (RFC 8452) implementation for C, Android and Java, with hardware acceleration support.

## 요약

- 조사 단위: `sources/line__aes-gcm-siv` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 83 files, 44 directories, depth score 60, key references 10개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 eval/test harness 구조로 읽힌다. 핵심 소스 근거는 docs=README.md, lib/README.md, java/README.md이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 10개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | line/aes-gcm-siv |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | C |
| Stars | 51 |
| Forks | 10 |
| License | Apache-2.0 |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/line__aes-gcm-siv](../../../../sources/line__aes-gcm-siv) |
| Existing report | [reports/korea-trending/repositories/line__aes-gcm-siv.md](../../../korea-trending/repositories/line__aes-gcm-siv.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 83 / 44 |
| Max observed depth | 9 |
| Top directories | .github, android, java, jni, lib |
| Top extensions | .h: 12, .c: 11, (none): 10, .txt: 8, .java: 7, .md: 7, .cpp: 6, .gradle: 6, .properties: 4, .yaml: 3, .bat: 2, .cmake: 2 |
| Source patterns | eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| lib | source boundary | 16 |
| .github | ci surface | 1 |
| android | top-level component | 1 |
| java | top-level component | 1 |
| jni | top-level component | 1 |


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


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 0 | not obvious |
| spec | 0 | not obvious |
| eval | 17 | [lib/tests/CMakeLists.txt](../../../../sources/line__aes-gcm-siv/lib/tests/CMakeLists.txt)<br>[lib/tests/googletest.cmake](../../../../sources/line__aes-gcm-siv/lib/tests/googletest.cmake)<br>[lib/tests/unit_tests/api.cpp](../../../../sources/line__aes-gcm-siv/lib/tests/unit_tests/api.cpp)<br>[lib/tests/unit_tests/CMakeLists.txt](../../../../sources/line__aes-gcm-siv/lib/tests/unit_tests/CMakeLists.txt)<br>[lib/tests/unit_tests/kat.cpp](../../../../sources/line__aes-gcm-siv/lib/tests/unit_tests/kat.cpp)<br>[lib/tests/unit_tests/main.cpp](../../../../sources/line__aes-gcm-siv/lib/tests/unit_tests/main.cpp)<br>[lib/tests/unit_tests/thirdparty_kat.cpp](../../../../sources/line__aes-gcm-siv/lib/tests/unit_tests/thirdparty_kat.cpp)<br>[lib/tests/unit_tests/utils.cpp](../../../../sources/line__aes-gcm-siv/lib/tests/unit_tests/utils.cpp) |
| security | 0 | not obvious |
| ci | 3 | [.github/workflows/clang-format.yaml](../../../../sources/line__aes-gcm-siv/.github/workflows/clang-format.yaml)<br>[.github/workflows/memcheck.yaml](../../../../sources/line__aes-gcm-siv/.github/workflows/memcheck.yaml)<br>[.github/workflows/unit_tests.yaml](../../../../sources/line__aes-gcm-siv/.github/workflows/unit_tests.yaml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 4 | [README.md](../../../../sources/line__aes-gcm-siv/README.md)<br>[lib/README.md](../../../../sources/line__aes-gcm-siv/lib/README.md)<br>[java/README.md](../../../../sources/line__aes-gcm-siv/java/README.md)<br>[android/README.md](../../../../sources/line__aes-gcm-siv/android/README.md) |
| config | 0 | not obvious |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 17 | [lib/tests/CMakeLists.txt](../../../../sources/line__aes-gcm-siv/lib/tests/CMakeLists.txt)<br>[lib/tests/googletest.cmake](../../../../sources/line__aes-gcm-siv/lib/tests/googletest.cmake)<br>[lib/tests/unit_tests/api.cpp](../../../../sources/line__aes-gcm-siv/lib/tests/unit_tests/api.cpp)<br>[lib/tests/unit_tests/CMakeLists.txt](../../../../sources/line__aes-gcm-siv/lib/tests/unit_tests/CMakeLists.txt)<br>[lib/tests/unit_tests/kat.cpp](../../../../sources/line__aes-gcm-siv/lib/tests/unit_tests/kat.cpp)<br>[lib/tests/unit_tests/main.cpp](../../../../sources/line__aes-gcm-siv/lib/tests/unit_tests/main.cpp) |
| CI workflows | 3 | [.github/workflows/clang-format.yaml](../../../../sources/line__aes-gcm-siv/.github/workflows/clang-format.yaml)<br>[.github/workflows/memcheck.yaml](../../../../sources/line__aes-gcm-siv/.github/workflows/memcheck.yaml)<br>[.github/workflows/unit_tests.yaml](../../../../sources/line__aes-gcm-siv/.github/workflows/unit_tests.yaml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | container/deploy path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `README.md`, `lib/README.md`, `java/README.md`.
2. Verify behavior through test/eval files: `lib/tests/CMakeLists.txt`, `lib/tests/googletest.cmake`, `lib/tests/unit_tests/api.cpp`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 AES GCM SIV RFC 8452 implementation for C, Android and Java, with hardware acceleration support.. 핵심 구조 신호는 C, README.md, LICENSE, ci, docs이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, needs deeper structural scan입니다.
