# Samsung/netcoredbg Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

NetCoreDbg is a managed code debugger with GDB/MI, VSCode DAP and CLI interfaces for CoreCLR.

## 요약

- 조사 단위: `sources/Samsung__netcoredbg` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 496 files, 122 directories, depth score 85, key references 8개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

개발 생산성/DevTools 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 entrypoints=src/main.cpp이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 8개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | Samsung/netcoredbg |
| Topic | Developer Productivity and DevTools / 개발 생산성/DevTools |
| Region | korea |
| Language | C# |
| Stars | 1288 |
| Forks | 147 |
| License | MIT |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/Samsung__netcoredbg](../../../../sources/Samsung__netcoredbg) |
| Existing report | [reports/korea-trending/repositories/Samsung__netcoredbg.md](../../../korea-trending/repositories/Samsung__netcoredbg.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 496 / 122 |
| Max observed depth | 4 |
| Top directories | .ahub, .github, docs, packaging, src, test-suite, third_party, tools |
| Top extensions | .cs: 121, .h: 115, .cpp: 97, .csproj: 88, .txt: 13, .md: 12, (none): 9, .cmake: 8, .sh: 5, .nupkg: 4, .xml: 4, .drawio: 3 |
| Source patterns | cli-first, agent/tool runtime, retrieval/vector path, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 15 |
| src | source boundary | 4 |
| .github | ci surface | 1 |
| packaging | top-level component | 1 |
| test-suite | validation surface | 1 |
| third_party | top-level component | 1 |
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
| entrypoints | [src/main.cpp](../../../../sources/Samsung__netcoredbg/src/main.cpp) | entrypoints signal |
| config | [docs/guide/Makefile](../../../../sources/Samsung__netcoredbg/docs/guide/Makefile) | config signal |
| docs | [README.md](../../../../sources/Samsung__netcoredbg/README.md) | docs signal |
| docs | [tools/getvscodecmd/README.md](../../../../sources/Samsung__netcoredbg/tools/getvscodecmd/README.md) | docs signal |
| docs | [third_party/linenoise-ng/README.md](../../../../sources/Samsung__netcoredbg/third_party/linenoise-ng/README.md) | docs signal |
| docs | [third_party/libelfin/README.md](../../../../sources/Samsung__netcoredbg/third_party/libelfin/README.md) | docs signal |
| eval | [test-suite/llvm-gcov.sh](../../../../sources/Samsung__netcoredbg/test-suite/llvm-gcov.sh) | eval support |
| eval | [test-suite/README.md](../../../../sources/Samsung__netcoredbg/test-suite/README.md) | eval support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 1 | [src/main.cpp](../../../../sources/Samsung__netcoredbg/src/main.cpp) |
| agentRuntime | 4 | [tools/getvscodecmd/get-vscodecmd.py](../../../../sources/Samsung__netcoredbg/tools/getvscodecmd/get-vscodecmd.py)<br>[tools/getvscodecmd/README.md](../../../../sources/Samsung__netcoredbg/tools/getvscodecmd/README.md)<br>[tools/generrmsg/GenErrMsg.cs](../../../../sources/Samsung__netcoredbg/tools/generrmsg/GenErrMsg.cs)<br>[tools/generrmsg/nuget.xml](../../../../sources/Samsung__netcoredbg/tools/generrmsg/nuget.xml) |
| mcp | 0 | not obvious |
| retrieval | 1 | [third_party/libelfin/dwarf/small_vector.h](../../../../sources/Samsung__netcoredbg/third_party/libelfin/dwarf/small_vector.h) |
| spec | 0 | not obvious |
| eval | 225 | [test-suite/llvm-gcov.sh](../../../../sources/Samsung__netcoredbg/test-suite/llvm-gcov.sh)<br>[test-suite/README.md](../../../../sources/Samsung__netcoredbg/test-suite/README.md)<br>[test-suite/run_cli_test.sh](../../../../sources/Samsung__netcoredbg/test-suite/run_cli_test.sh)<br>[test-suite/run_tests.ps1](../../../../sources/Samsung__netcoredbg/test-suite/run_tests.ps1)<br>[test-suite/run_tests.sh](../../../../sources/Samsung__netcoredbg/test-suite/run_tests.sh)<br>[test-suite/sdb_run_tests.ps1](../../../../sources/Samsung__netcoredbg/test-suite/sdb_run_tests.ps1)<br>[test-suite/sdb_run_tests.sh](../../../../sources/Samsung__netcoredbg/test-suite/sdb_run_tests.sh)<br>[test-suite/sdb_run_tizen_tests.sh](../../../../sources/Samsung__netcoredbg/test-suite/sdb_run_tizen_tests.sh) |
| security | 0 | not obvious |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 20 | [README.md](../../../../sources/Samsung__netcoredbg/README.md)<br>[tools/getvscodecmd/README.md](../../../../sources/Samsung__netcoredbg/tools/getvscodecmd/README.md)<br>[third_party/linenoise-ng/README.md](../../../../sources/Samsung__netcoredbg/third_party/linenoise-ng/README.md)<br>[third_party/libelfin/README.md](../../../../sources/Samsung__netcoredbg/third_party/libelfin/README.md)<br>[test-suite/README.md](../../../../sources/Samsung__netcoredbg/test-suite/README.md)<br>[src/unittests/README.md](../../../../sources/Samsung__netcoredbg/src/unittests/README.md)<br>[src/coreclr/README.md](../../../../sources/Samsung__netcoredbg/src/coreclr/README.md)<br>[docs/cli.md](../../../../sources/Samsung__netcoredbg/docs/cli.md) |
| config | 1 | [docs/guide/Makefile](../../../../sources/Samsung__netcoredbg/docs/guide/Makefile) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 225 | [test-suite/llvm-gcov.sh](../../../../sources/Samsung__netcoredbg/test-suite/llvm-gcov.sh)<br>[test-suite/README.md](../../../../sources/Samsung__netcoredbg/test-suite/README.md)<br>[test-suite/run_cli_test.sh](../../../../sources/Samsung__netcoredbg/test-suite/run_cli_test.sh)<br>[test-suite/run_tests.ps1](../../../../sources/Samsung__netcoredbg/test-suite/run_tests.ps1)<br>[test-suite/run_tests.sh](../../../../sources/Samsung__netcoredbg/test-suite/run_tests.sh)<br>[test-suite/sdb_run_tests.ps1](../../../../sources/Samsung__netcoredbg/test-suite/sdb_run_tests.ps1) |
| CI workflows | 0 | not obvious |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | CI workflow path not obvious; container/deploy path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `src/main.cpp`, `docs/guide/Makefile`, `README.md`.
2. Trace execution through entrypoints: `src/main.cpp`.
3. Map agent/tool runtime through: `tools/getvscodecmd/get-vscodecmd.py`, `tools/getvscodecmd/README.md`, `tools/generrmsg/GenErrMsg.cs`.
4. Inspect retrieval/memory/indexing through: `third_party/libelfin/dwarf/small_vector.h`.
5. Verify behavior through test/eval files: `test-suite/llvm-gcov.sh`, `test-suite/README.md`, `test-suite/run_cli_test.sh`.

## Existing Repository Insight

개발 생산성/DevTools 관점에서 NetCoreDbg is a managed code debugger with GDB/MI, VSCode DAP and CLI interfaces for CoreCLR.. 핵심 구조 신호는 C#, README.md, LICENSE, tests, ci, docs이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 개발 생산성/DevTools 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 needs deeper structural scan입니다.
