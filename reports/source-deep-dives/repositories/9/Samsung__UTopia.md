# Samsung/UTopia Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

UT based automated fuzz driver generation

## 요약

- 조사 단위: `sources/Samsung__UTopia` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 415 files, 85 directories, depth score 71, key references 7개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 agent/tool runtime, eval/test harness, containerized deploy 구조로 읽힌다. 핵심 소스 근거는 docs=README.md, helper/README.md이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 7개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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


## Repository Context

| Field | Value |
| --- | --- |
| Repository | Samsung/UTopia |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | C++ |
| Stars | 168 |
| Forks | 26 |
| License | Apache-2.0 |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/Samsung__UTopia](../../../../sources/Samsung__UTopia) |
| Existing report | [reports/korea-trending/repositories/Samsung__UTopia.md](../../../korea-trending/repositories/Samsung__UTopia.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 415 / 85 |
| Max observed depth | 6 |
| Top directories | .github, cmake, docker, external, helper, include, lib, res, tests, tools |
| Top extensions | .cpp: 175, .h: 132, .txt: 28, .proto: 19, .cc: 15, .c: 10, .json: 8, .py: 8, (none): 8, .hpp: 5, .md: 3, .yml: 2 |
| Source patterns | agent/tool runtime, eval/test harness, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 41 |
| .github | ci surface | 1 |
| cmake | top-level component | 1 |
| docker | documentation surface | 1 |
| external | top-level component | 1 |
| helper | top-level component | 1 |
| include | top-level component | 1 |
| lib | source boundary | 1 |
| res | top-level component | 1 |
| tools | top-level component | 1 |


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
| docs | [README.md](../../../../sources/Samsung__UTopia/README.md) | docs signal |
| docs | [helper/README.md](../../../../sources/Samsung__UTopia/helper/README.md) | docs signal |
| eval | [tests/CMakeLists.txt](../../../../sources/Samsung__UTopia/tests/CMakeLists.txt) | eval signal |
| eval | [tests/GtestMain.cpp](../../../../sources/Samsung__UTopia/tests/GtestMain.cpp) | eval signal |
| eval | [tests/TestASTUtils.cpp](../../../../sources/Samsung__UTopia/tests/TestASTUtils.cpp) | eval signal |
| eval | [tests/TestHelper.cpp](../../../../sources/Samsung__UTopia/tests/TestHelper.cpp) | eval signal |
| container | [docker/Dockerfile](../../../../sources/Samsung__UTopia/docker/Dockerfile) | container support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 7 | [tools/CMakeLists.txt](../../../../sources/Samsung__UTopia/tools/CMakeLists.txt)<br>[tools/ut_analyzer/CMakeLists.txt](../../../../sources/Samsung__UTopia/tools/ut_analyzer/CMakeLists.txt)<br>[tools/ut_analyzer/main.cpp](../../../../sources/Samsung__UTopia/tools/ut_analyzer/main.cpp)<br>[tools/target_analyzer/CMakeLists.txt](../../../../sources/Samsung__UTopia/tools/target_analyzer/CMakeLists.txt)<br>[tools/target_analyzer/main.cpp](../../../../sources/Samsung__UTopia/tools/target_analyzer/main.cpp)<br>[tools/fuzz_generator/CMakeLists.txt](../../../../sources/Samsung__UTopia/tools/fuzz_generator/CMakeLists.txt)<br>[tools/fuzz_generator/main.cpp](../../../../sources/Samsung__UTopia/tools/fuzz_generator/main.cpp) |
| mcp | 0 | not obvious |
| retrieval | 0 | not obvious |
| spec | 0 | not obvious |
| eval | 126 | [tests/CMakeLists.txt](../../../../sources/Samsung__UTopia/tests/CMakeLists.txt)<br>[tests/GtestMain.cpp](../../../../sources/Samsung__UTopia/tests/GtestMain.cpp)<br>[tests/TestASTUtils.cpp](../../../../sources/Samsung__UTopia/tests/TestASTUtils.cpp)<br>[tests/TestHelper.cpp](../../../../sources/Samsung__UTopia/tests/TestHelper.cpp)<br>[tests/TestHelper.h](../../../../sources/Samsung__UTopia/tests/TestHelper.h)<br>[tests/utils/TestAssignUtil.cpp](../../../../sources/Samsung__UTopia/tests/utils/TestAssignUtil.cpp)<br>[tests/utils/TestFileUtil.cpp](../../../../sources/Samsung__UTopia/tests/utils/TestFileUtil.cpp)<br>[tests/utils/TestLLVMUtil.cpp](../../../../sources/Samsung__UTopia/tests/utils/TestLLVMUtil.cpp) |
| security | 0 | not obvious |
| ci | 0 | not obvious |
| container | 1 | [docker/Dockerfile](../../../../sources/Samsung__UTopia/docker/Dockerfile) |
| instruction | 0 | not obvious |
| docs | 2 | [README.md](../../../../sources/Samsung__UTopia/README.md)<br>[helper/README.md](../../../../sources/Samsung__UTopia/helper/README.md) |
| config | 0 | not obvious |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 126 | [tests/CMakeLists.txt](../../../../sources/Samsung__UTopia/tests/CMakeLists.txt)<br>[tests/GtestMain.cpp](../../../../sources/Samsung__UTopia/tests/GtestMain.cpp)<br>[tests/TestASTUtils.cpp](../../../../sources/Samsung__UTopia/tests/TestASTUtils.cpp)<br>[tests/TestHelper.cpp](../../../../sources/Samsung__UTopia/tests/TestHelper.cpp)<br>[tests/TestHelper.h](../../../../sources/Samsung__UTopia/tests/TestHelper.h)<br>[tests/utils/TestAssignUtil.cpp](../../../../sources/Samsung__UTopia/tests/utils/TestAssignUtil.cpp) |
| CI workflows | 0 | not obvious |
| Containers / deploy | 1 | [docker/Dockerfile](../../../../sources/Samsung__UTopia/docker/Dockerfile) |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | CI workflow path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `README.md`, `helper/README.md`, `tests/CMakeLists.txt`.
2. Map agent/tool runtime through: `tools/CMakeLists.txt`, `tools/ut_analyzer/CMakeLists.txt`, `tools/ut_analyzer/main.cpp`.
3. Verify behavior through test/eval files: `tests/CMakeLists.txt`, `tests/GtestMain.cpp`, `tests/TestASTUtils.cpp`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 UT based automated fuzz driver generation. 핵심 구조 신호는 C++, README.md, LICENSE, tests, ci, docs이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 needs deeper structural scan입니다.
