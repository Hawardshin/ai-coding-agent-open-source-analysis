# alibaba/zvec Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

A lightweight, lightning-fast, in-process vector database

## 요약

- 조사 단위: `sources/alibaba__zvec` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 1,188 files, 205 directories, depth score 110, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 agent/tool runtime, retrieval/vector path, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 retrieval=tools/core/index_meta_helper.h, tools/core/vecs_index_holder.h, tests/db/sqlengine/vector_recall_test.cc이고, 의존성 단서는 next, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 knowledge/RAG pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | alibaba/zvec |
| Topic | LLM Wiki, RAG, and Knowledge / LLM 위키/RAG/지식베이스 |
| Region | global |
| Language | C++ |
| Stars | 10812 |
| Forks | 625 |
| License | none |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/alibaba__zvec](../../../../sources/alibaba__zvec) |
| Existing report | [reports/global-trending/repositories/alibaba__zvec.md](../../../global-trending/repositories/alibaba__zvec.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 1188 / 205 |
| Max observed depth | 7 |
| Top directories | .github, cmake, examples, python, scripts, src, tests, thirdparty, tools |
| Top extensions | .cc: 496, .h: 418, .txt: 76, .py: 69, .yml: 28, .i: 17, .patch: 15, .c: 10, (none): 9, .cpp: 6, .md: 6, .sh: 6 |
| Source patterns | agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface, containerized deploy, ui/extension surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 79 |
| src | source boundary | 17 |
| .github | ci surface | 1 |
| cmake | top-level component | 1 |
| examples | top-level component | 1 |
| python | top-level component | 1 |
| scripts | top-level component | 1 |
| thirdparty | top-level component | 1 |
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
| webRuntime | next |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| retrieval | [tools/core/index_meta_helper.h](../../../../sources/alibaba__zvec/tools/core/index_meta_helper.h) | retrieval signal |
| retrieval | [tools/core/vecs_index_holder.h](../../../../sources/alibaba__zvec/tools/core/vecs_index_holder.h) | retrieval signal |
| retrieval | [tests/db/sqlengine/vector_recall_test.cc](../../../../sources/alibaba__zvec/tests/db/sqlengine/vector_recall_test.cc) | retrieval signal |
| retrieval | [tests/db/index/CMakeLists.txt](../../../../sources/alibaba__zvec/tests/db/index/CMakeLists.txt) | retrieval signal |
| docs | [README_CN.md](../../../../sources/alibaba__zvec/README_CN.md) | docs signal |
| docs | [README.md](../../../../sources/alibaba__zvec/README.md) | docs signal |
| docs | [tools/core/README.md](../../../../sources/alibaba__zvec/tools/core/README.md) | docs signal |
| docs | [scripts/README.md](../../../../sources/alibaba__zvec/scripts/README.md) | docs signal |
| eval | [tools/db/fts_bench_main.cc](../../../../sources/alibaba__zvec/tools/db/fts_bench_main.cc) | eval signal |
| eval | [tools/core/bench_original.cc](../../../../sources/alibaba__zvec/tools/core/bench_original.cc) | eval signal |
| eval | [tools/core/bench_result.h](../../../../sources/alibaba__zvec/tools/core/bench_result.h) | eval signal |
| eval | [tools/core/bench.cc](../../../../sources/alibaba__zvec/tools/core/bench.cc) | eval signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 61 | [tools/CMakeLists.txt](../../../../sources/alibaba__zvec/tools/CMakeLists.txt)<br>[tools/db/CMakeLists.txt](../../../../sources/alibaba__zvec/tools/db/CMakeLists.txt)<br>[tools/db/fts_bench_main.cc](../../../../sources/alibaba__zvec/tools/db/fts_bench_main.cc)<br>[tools/core/bench_original.cc](../../../../sources/alibaba__zvec/tools/core/bench_original.cc)<br>[tools/core/bench_result.h](../../../../sources/alibaba__zvec/tools/core/bench_result.h)<br>[tools/core/bench.cc](../../../../sources/alibaba__zvec/tools/core/bench.cc)<br>[tools/core/CMakeLists.txt](../../../../sources/alibaba__zvec/tools/core/CMakeLists.txt)<br>[tools/core/convert_cohere_parquet.py](../../../../sources/alibaba__zvec/tools/core/convert_cohere_parquet.py) |
| mcp | 0 | not obvious |
| retrieval | 298 | [tools/core/index_meta_helper.h](../../../../sources/alibaba__zvec/tools/core/index_meta_helper.h)<br>[tools/core/vecs_index_holder.h](../../../../sources/alibaba__zvec/tools/core/vecs_index_holder.h)<br>[tests/db/sqlengine/vector_recall_test.cc](../../../../sources/alibaba__zvec/tests/db/sqlengine/vector_recall_test.cc)<br>[tests/db/index/CMakeLists.txt](../../../../sources/alibaba__zvec/tests/db/index/CMakeLists.txt)<br>[tests/db/index/utils/utils.cc](../../../../sources/alibaba__zvec/tests/db/index/utils/utils.cc)<br>[tests/db/index/utils/utils.h](../../../../sources/alibaba__zvec/tests/db/index/utils/utils.h)<br>[tests/db/index/storage/arrow_ipc_writer_test.cc](../../../../sources/alibaba__zvec/tests/db/index/storage/arrow_ipc_writer_test.cc)<br>[tests/db/index/storage/bufferpool_store_test.cc](../../../../sources/alibaba__zvec/tests/db/index/storage/bufferpool_store_test.cc) |
| spec | 0 | not obvious |
| eval | 243 | [tools/db/fts_bench_main.cc](../../../../sources/alibaba__zvec/tools/db/fts_bench_main.cc)<br>[tools/core/bench_original.cc](../../../../sources/alibaba__zvec/tools/core/bench_original.cc)<br>[tools/core/bench_result.h](../../../../sources/alibaba__zvec/tools/core/bench_result.h)<br>[tools/core/bench.cc](../../../../sources/alibaba__zvec/tools/core/bench.cc)<br>[tests/android_gmock_main.cc](../../../../sources/alibaba__zvec/tests/android_gmock_main.cc)<br>[tests/android_gtest_main.cc](../../../../sources/alibaba__zvec/tests/android_gtest_main.cc)<br>[tests/CMakeLists.txt](../../../../sources/alibaba__zvec/tests/CMakeLists.txt)<br>[tests/ios_test_sandbox.cc](../../../../sources/alibaba__zvec/tests/ios_test_sandbox.cc) |
| security | 3 | [tests/ios_test_sandbox.cc](../../../../sources/alibaba__zvec/tests/ios_test_sandbox.cc)<br>[tests/ailego/pattern/scope_guard_test.cc](../../../../sources/alibaba__zvec/tests/ailego/pattern/scope_guard_test.cc)<br>[src/ailego/pattern/scope_guard.h](../../../../sources/alibaba__zvec/src/ailego/pattern/scope_guard.h) |
| ci | 20 | [.github/workflows/_build_wheel_job.yml](../../../../sources/alibaba__zvec/.github/workflows/_build_wheel_job.yml)<br>[.github/workflows/01-ci-pipeline.yml](../../../../sources/alibaba__zvec/.github/workflows/01-ci-pipeline.yml)<br>[.github/workflows/02-lint-check.yml](../../../../sources/alibaba__zvec/.github/workflows/02-lint-check.yml)<br>[.github/workflows/03-macos-linux-build.yml](../../../../sources/alibaba__zvec/.github/workflows/03-macos-linux-build.yml)<br>[.github/workflows/04-android-build.yml](../../../../sources/alibaba__zvec/.github/workflows/04-android-build.yml)<br>[.github/workflows/05-windows-build.yml](../../../../sources/alibaba__zvec/.github/workflows/05-windows-build.yml)<br>[.github/workflows/06-ios-build.yml](../../../../sources/alibaba__zvec/.github/workflows/06-ios-build.yml)<br>[.github/workflows/07-linux-riscv-build.yml](../../../../sources/alibaba__zvec/.github/workflows/07-linux-riscv-build.yml) |
| container | 1 | [.github/workflows/docker/Dockerfile.linux_x64_glibc228](../../../../sources/alibaba__zvec/.github/workflows/docker/Dockerfile.linux_x64_glibc228) |
| instruction | 0 | not obvious |
| docs | 4 | [README_CN.md](../../../../sources/alibaba__zvec/README_CN.md)<br>[README.md](../../../../sources/alibaba__zvec/README.md)<br>[tools/core/README.md](../../../../sources/alibaba__zvec/tools/core/README.md)<br>[scripts/README.md](../../../../sources/alibaba__zvec/scripts/README.md) |
| config | 1 | [pyproject.toml](../../../../sources/alibaba__zvec/pyproject.toml) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 243 | [tools/db/fts_bench_main.cc](../../../../sources/alibaba__zvec/tools/db/fts_bench_main.cc)<br>[tools/core/bench_original.cc](../../../../sources/alibaba__zvec/tools/core/bench_original.cc)<br>[tools/core/bench_result.h](../../../../sources/alibaba__zvec/tools/core/bench_result.h)<br>[tools/core/bench.cc](../../../../sources/alibaba__zvec/tools/core/bench.cc)<br>[tests/android_gmock_main.cc](../../../../sources/alibaba__zvec/tests/android_gmock_main.cc)<br>[tests/android_gtest_main.cc](../../../../sources/alibaba__zvec/tests/android_gtest_main.cc) |
| CI workflows | 20 | [.github/workflows/_build_wheel_job.yml](../../../../sources/alibaba__zvec/.github/workflows/_build_wheel_job.yml)<br>[.github/workflows/01-ci-pipeline.yml](../../../../sources/alibaba__zvec/.github/workflows/01-ci-pipeline.yml)<br>[.github/workflows/02-lint-check.yml](../../../../sources/alibaba__zvec/.github/workflows/02-lint-check.yml)<br>[.github/workflows/03-macos-linux-build.yml](../../../../sources/alibaba__zvec/.github/workflows/03-macos-linux-build.yml)<br>[.github/workflows/04-android-build.yml](../../../../sources/alibaba__zvec/.github/workflows/04-android-build.yml)<br>[.github/workflows/05-windows-build.yml](../../../../sources/alibaba__zvec/.github/workflows/05-windows-build.yml) |
| Containers / deploy | 1 | [.github/workflows/docker/Dockerfile.linux_x64_glibc228](../../../../sources/alibaba__zvec/.github/workflows/docker/Dockerfile.linux_x64_glibc228) |
| Security / policy | 3 | [tests/ios_test_sandbox.cc](../../../../sources/alibaba__zvec/tests/ios_test_sandbox.cc)<br>[tests/ailego/pattern/scope_guard_test.cc](../../../../sources/alibaba__zvec/tests/ailego/pattern/scope_guard_test.cc)<br>[src/ailego/pattern/scope_guard.h](../../../../sources/alibaba__zvec/src/ailego/pattern/scope_guard.h) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `tools/core/index_meta_helper.h`, `tools/core/vecs_index_holder.h`, `tests/db/sqlengine/vector_recall_test.cc`.
2. Map agent/tool runtime through: `tools/CMakeLists.txt`, `tools/db/CMakeLists.txt`, `tools/db/fts_bench_main.cc`.
3. Inspect retrieval/memory/indexing through: `tools/core/index_meta_helper.h`, `tools/core/vecs_index_holder.h`, `tests/db/sqlengine/vector_recall_test.cc`.
4. Verify behavior through test/eval files: `tools/db/fts_bench_main.cc`, `tools/core/bench_original.cc`, `tools/core/bench_result.h`.

## Existing Repository Insight

LLM 위키/RAG/지식베이스 관점에서 A lightweight, lightning fast, in process vector database. 핵심 구조 신호는 C++, pyproject.toml, README.md, LICENSE, next, tests이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 knowledge/RAG pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
