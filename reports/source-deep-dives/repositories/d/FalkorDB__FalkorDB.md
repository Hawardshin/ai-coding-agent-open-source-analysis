# FalkorDB/FalkorDB Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

A super fast Graph Database uses GraphBLAS under the hood for its sparse adjacency matrix graph representation. Our goal is to provide the best Knowledge Graph for LLM (GraphRAG).

## 요약

- 조사 단위: `sources/FalkorDB__FalkorDB` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 6,846 files, 422 directories, depth score 114, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 agent/tool runtime, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 retrieval=tests/unit/test_graph.c, tests/unit/test_query_graph.c, tests/unit/test_vector.c이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 knowledge/RAG pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | FalkorDB/FalkorDB |
| Topic | LLM Wiki, RAG, and Knowledge / LLM 위키/RAG/지식베이스 |
| Region | mixed |
| Language | C |
| Stars | 4597 |
| Forks | 393 |
| License | NOASSERTION |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/FalkorDB__FalkorDB](../../../../sources/FalkorDB__FalkorDB) |
| Existing report | [reports/llm-wiki/repositories/FalkorDB__FalkorDB.md](../../../llm-wiki/repositories/FalkorDB__FalkorDB.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 6846 / 422 |
| Max observed depth | 8 |
| Top directories | .github, assets, demo, deps, src, tests |
| Top extensions | .c: 4555, .m: 822, .h: 546, .feature: 220, .py: 148, (none): 85, .tex: 76, .yml: 51, .txt: 44, .cpp: 29, .md: 23, .cmake: 20 |
| Source patterns | agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 79 |
| src | source boundary | 12 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| demo | top-level component | 1 |
| deps | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | all | make all |
| utility | Makefile | help | make help |
| build | Makefile | build | make build |
| utility | Makefile | deps | make deps |
| utility | Makefile | clean | make clean |
| test | Makefile | test | make test |
| test | Makefile | unit-tests | make unit-tests |
| test | Makefile | flow-tests | make flow-tests |
| test | Makefile | tck-tests | make tck-tests |
| utility | Makefile | benchmark | make benchmark |
| test | Makefile | coverage | make coverage |
| utility | Makefile | run | make run |


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
| retrieval | [tests/unit/test_graph.c](../../../../sources/FalkorDB__FalkorDB/tests/unit/test_graph.c) | retrieval signal |
| retrieval | [tests/unit/test_query_graph.c](../../../../sources/FalkorDB__FalkorDB/tests/unit/test_query_graph.c) | retrieval signal |
| retrieval | [tests/unit/test_vector.c](../../../../sources/FalkorDB__FalkorDB/tests/unit/test_vector.c) | retrieval signal |
| retrieval | [tests/tck/features/expressions/graph/Graph1.feature](../../../../sources/FalkorDB__FalkorDB/tests/tck/features/expressions/graph/Graph1.feature) | retrieval signal |
| docs | [README.md](../../../../sources/FalkorDB__FalkorDB/README.md) | docs signal |
| docs | [deps/libcypher-parser/README.md](../../../../sources/FalkorDB__FalkorDB/deps/libcypher-parser/README.md) | docs signal |
| docs | [deps/libcypher-parser/linter/doc/cypher-lint.1.in](../../../../sources/FalkorDB__FalkorDB/deps/libcypher-parser/linter/doc/cypher-lint.1.in) | docs signal |
| docs | [deps/libcypher-parser/linter/doc/Makefile.am](../../../../sources/FalkorDB__FalkorDB/deps/libcypher-parser/linter/doc/Makefile.am) | docs signal |
| eval | [tests/__init__.py](../../../../sources/FalkorDB__FalkorDB/tests/__init__.py) | eval signal |
| eval | [tests/common.sh](../../../../sources/FalkorDB__FalkorDB/tests/common.sh) | eval signal |
| eval | [tests/Dockerfile.alpine](../../../../sources/FalkorDB__FalkorDB/tests/Dockerfile.alpine) | eval signal |
| eval | [tests/Dockerfile.amazonlinux2023](../../../../sources/FalkorDB__FalkorDB/tests/Dockerfile.amazonlinux2023) | eval signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 20 | [deps/GraphBLAS/Source/memory/GB_calloc_memory.c](../../../../sources/FalkorDB__FalkorDB/deps/GraphBLAS/Source/memory/GB_calloc_memory.c)<br>[deps/GraphBLAS/Source/memory/GB_free_memory.c](../../../../sources/FalkorDB__FalkorDB/deps/GraphBLAS/Source/memory/GB_free_memory.c)<br>[deps/GraphBLAS/Source/memory/GB_malloc_memory.c](../../../../sources/FalkorDB__FalkorDB/deps/GraphBLAS/Source/memory/GB_malloc_memory.c)<br>[deps/GraphBLAS/Source/memory/GB_memcpy.c](../../../../sources/FalkorDB__FalkorDB/deps/GraphBLAS/Source/memory/GB_memcpy.c)<br>[deps/GraphBLAS/Source/memory/GB_memory.h](../../../../sources/FalkorDB__FalkorDB/deps/GraphBLAS/Source/memory/GB_memory.h)<br>[deps/GraphBLAS/Source/memory/GB_memoryUsage.c](../../../../sources/FalkorDB__FalkorDB/deps/GraphBLAS/Source/memory/GB_memoryUsage.c)<br>[deps/GraphBLAS/Source/memory/GB_memset.c](../../../../sources/FalkorDB__FalkorDB/deps/GraphBLAS/Source/memory/GB_memset.c)<br>[deps/GraphBLAS/Source/memory/GB_realloc_memory.c](../../../../sources/FalkorDB__FalkorDB/deps/GraphBLAS/Source/memory/GB_realloc_memory.c) |
| mcp | 0 | not obvious |
| retrieval | 294 | [tests/unit/test_graph.c](../../../../sources/FalkorDB__FalkorDB/tests/unit/test_graph.c)<br>[tests/unit/test_query_graph.c](../../../../sources/FalkorDB__FalkorDB/tests/unit/test_query_graph.c)<br>[tests/unit/test_vector.c](../../../../sources/FalkorDB__FalkorDB/tests/unit/test_vector.c)<br>[tests/tck/features/expressions/graph/Graph1.feature](../../../../sources/FalkorDB__FalkorDB/tests/tck/features/expressions/graph/Graph1.feature)<br>[tests/tck/features/expressions/graph/Graph2.feature](../../../../sources/FalkorDB__FalkorDB/tests/tck/features/expressions/graph/Graph2.feature)<br>[tests/tck/features/expressions/graph/Graph3.feature](../../../../sources/FalkorDB__FalkorDB/tests/tck/features/expressions/graph/Graph3.feature)<br>[tests/tck/features/expressions/graph/Graph4.feature](../../../../sources/FalkorDB__FalkorDB/tests/tck/features/expressions/graph/Graph4.feature)<br>[tests/tck/features/expressions/graph/Graph5.feature](../../../../sources/FalkorDB__FalkorDB/tests/tck/features/expressions/graph/Graph5.feature) |
| spec | 63 | [tests/requirements.txt](../../../../sources/FalkorDB__FalkorDB/tests/requirements.txt)<br>[tests/benchmarks/benchmarks_requirements.txt](../../../../sources/FalkorDB__FalkorDB/tests/benchmarks/benchmarks_requirements.txt)<br>[tests/benchmarks/comparison_requirements.txt](../../../../sources/FalkorDB__FalkorDB/tests/benchmarks/comparison_requirements.txt)<br>[deps/GraphBLAS/Test/GB_spec_accum_mask.m](../../../../sources/FalkorDB__FalkorDB/deps/GraphBLAS/Test/GB_spec_accum_mask.m)<br>[deps/GraphBLAS/Test/GB_spec_accum.m](../../../../sources/FalkorDB__FalkorDB/deps/GraphBLAS/Test/GB_spec_accum.m)<br>[deps/GraphBLAS/Test/GB_spec_apply.m](../../../../sources/FalkorDB__FalkorDB/deps/GraphBLAS/Test/GB_spec_apply.m)<br>[deps/GraphBLAS/Test/GB_spec_assign.m](../../../../sources/FalkorDB__FalkorDB/deps/GraphBLAS/Test/GB_spec_assign.m)<br>[deps/GraphBLAS/Test/GB_spec_binop_positional.m](../../../../sources/FalkorDB__FalkorDB/deps/GraphBLAS/Test/GB_spec_binop_positional.m) |
| eval | 1193 | [tests/__init__.py](../../../../sources/FalkorDB__FalkorDB/tests/__init__.py)<br>[tests/common.sh](../../../../sources/FalkorDB__FalkorDB/tests/common.sh)<br>[tests/Dockerfile.alpine](../../../../sources/FalkorDB__FalkorDB/tests/Dockerfile.alpine)<br>[tests/Dockerfile.amazonlinux2023](../../../../sources/FalkorDB__FalkorDB/tests/Dockerfile.amazonlinux2023)<br>[tests/Dockerfile.debian](../../../../sources/FalkorDB__FalkorDB/tests/Dockerfile.debian)<br>[tests/Dockerfile.rhel](../../../../sources/FalkorDB__FalkorDB/tests/Dockerfile.rhel)<br>[tests/requirements.txt](../../../../sources/FalkorDB__FalkorDB/tests/requirements.txt)<br>[tests/upgrade/test_upgrade.py](../../../../sources/FalkorDB__FalkorDB/tests/upgrade/test_upgrade.py) |
| security | 1 | [SECURITY.md](../../../../sources/FalkorDB__FalkorDB/SECURITY.md) |
| ci | 36 | [deps/GraphBLAS/cpu_features/cmake/ci/Makefile](../../../../sources/FalkorDB__FalkorDB/deps/GraphBLAS/cpu_features/cmake/ci/Makefile)<br>[deps/GraphBLAS/cpu_features/cmake/ci/README.md](../../../../sources/FalkorDB__FalkorDB/deps/GraphBLAS/cpu_features/cmake/ci/README.md)<br>[deps/GraphBLAS/cpu_features/cmake/ci/vagrant/freebsd/Vagrantfile](../../../../sources/FalkorDB__FalkorDB/deps/GraphBLAS/cpu_features/cmake/ci/vagrant/freebsd/Vagrantfile)<br>[deps/GraphBLAS/cpu_features/cmake/ci/sample/CMakeLists.txt](../../../../sources/FalkorDB__FalkorDB/deps/GraphBLAS/cpu_features/cmake/ci/sample/CMakeLists.txt)<br>[deps/GraphBLAS/cpu_features/cmake/ci/sample/main.cpp](../../../../sources/FalkorDB__FalkorDB/deps/GraphBLAS/cpu_features/cmake/ci/sample/main.cpp)<br>[deps/GraphBLAS/cpu_features/cmake/ci/docker/toolchain/Dockerfile](../../../../sources/FalkorDB__FalkorDB/deps/GraphBLAS/cpu_features/cmake/ci/docker/toolchain/Dockerfile)<br>[deps/GraphBLAS/cpu_features/cmake/ci/docker/amd64/Dockerfile](../../../../sources/FalkorDB__FalkorDB/deps/GraphBLAS/cpu_features/cmake/ci/docker/amd64/Dockerfile)<br>[deps/GraphBLAS/cpu_features/cmake/ci/doc/docker.dot](../../../../sources/FalkorDB__FalkorDB/deps/GraphBLAS/cpu_features/cmake/ci/doc/docker.dot) |
| container | 8 | [tests/Dockerfile.alpine](../../../../sources/FalkorDB__FalkorDB/tests/Dockerfile.alpine)<br>[tests/Dockerfile.amazonlinux2023](../../../../sources/FalkorDB__FalkorDB/tests/Dockerfile.amazonlinux2023)<br>[tests/Dockerfile.debian](../../../../sources/FalkorDB__FalkorDB/tests/Dockerfile.debian)<br>[tests/Dockerfile.rhel](../../../../sources/FalkorDB__FalkorDB/tests/Dockerfile.rhel)<br>[deps/GraphBLAS/cpu_features/cmake/ci/docker/toolchain/Dockerfile](../../../../sources/FalkorDB__FalkorDB/deps/GraphBLAS/cpu_features/cmake/ci/docker/toolchain/Dockerfile)<br>[deps/GraphBLAS/cpu_features/cmake/ci/docker/amd64/Dockerfile](../../../../sources/FalkorDB__FalkorDB/deps/GraphBLAS/cpu_features/cmake/ci/docker/amd64/Dockerfile)<br>[deps/GraphBLAS/cpu_features/bazel/ci/docker/Dockerfile](../../../../sources/FalkorDB__FalkorDB/deps/GraphBLAS/cpu_features/bazel/ci/docker/Dockerfile)<br>[deps/GraphBLAS/cpu_features/.github/workflows/Dockerfile](../../../../sources/FalkorDB__FalkorDB/deps/GraphBLAS/cpu_features/.github/workflows/Dockerfile) |
| instruction | 0 | not obvious |
| docs | 138 | [README.md](../../../../sources/FalkorDB__FalkorDB/README.md)<br>[deps/libcypher-parser/README.md](../../../../sources/FalkorDB__FalkorDB/deps/libcypher-parser/README.md)<br>[deps/libcypher-parser/linter/doc/cypher-lint.1.in](../../../../sources/FalkorDB__FalkorDB/deps/libcypher-parser/linter/doc/cypher-lint.1.in)<br>[deps/libcypher-parser/linter/doc/Makefile.am](../../../../sources/FalkorDB__FalkorDB/deps/libcypher-parser/linter/doc/Makefile.am)<br>[deps/libcypher-parser/lib/doc/doxygen.cfg](../../../../sources/FalkorDB__FalkorDB/deps/libcypher-parser/lib/doc/doxygen.cfg)<br>[deps/libcypher-parser/lib/doc/Makefile.am](../../../../sources/FalkorDB__FalkorDB/deps/libcypher-parser/lib/doc/Makefile.am)<br>[deps/GraphBLAS/README.md](../../../../sources/FalkorDB__FalkorDB/deps/GraphBLAS/README.md)<br>[deps/GraphBLAS/zstd/README_zstd.md](../../../../sources/FalkorDB__FalkorDB/deps/GraphBLAS/zstd/README_zstd.md) |
| config | 19 | [Cargo.lock](../../../../sources/FalkorDB__FalkorDB/Cargo.lock)<br>[Cargo.toml](../../../../sources/FalkorDB__FalkorDB/Cargo.toml)<br>[Makefile](../../../../sources/FalkorDB__FalkorDB/Makefile)<br>[tests/requirements.txt](../../../../sources/FalkorDB__FalkorDB/tests/requirements.txt)<br>[tests/flow/Makefile](../../../../sources/FalkorDB__FalkorDB/tests/flow/Makefile)<br>[deps/GraphBLAS/Makefile](../../../../sources/FalkorDB__FalkorDB/deps/GraphBLAS/Makefile)<br>[deps/GraphBLAS/Test/Makefile](../../../../sources/FalkorDB__FalkorDB/deps/GraphBLAS/Test/Makefile)<br>[deps/GraphBLAS/Tcov/Makefile](../../../../sources/FalkorDB__FalkorDB/deps/GraphBLAS/Tcov/Makefile) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 1193 | [tests/__init__.py](../../../../sources/FalkorDB__FalkorDB/tests/__init__.py)<br>[tests/common.sh](../../../../sources/FalkorDB__FalkorDB/tests/common.sh)<br>[tests/Dockerfile.alpine](../../../../sources/FalkorDB__FalkorDB/tests/Dockerfile.alpine)<br>[tests/Dockerfile.amazonlinux2023](../../../../sources/FalkorDB__FalkorDB/tests/Dockerfile.amazonlinux2023)<br>[tests/Dockerfile.debian](../../../../sources/FalkorDB__FalkorDB/tests/Dockerfile.debian)<br>[tests/Dockerfile.rhel](../../../../sources/FalkorDB__FalkorDB/tests/Dockerfile.rhel) |
| CI workflows | 36 | [deps/GraphBLAS/cpu_features/cmake/ci/Makefile](../../../../sources/FalkorDB__FalkorDB/deps/GraphBLAS/cpu_features/cmake/ci/Makefile)<br>[deps/GraphBLAS/cpu_features/cmake/ci/README.md](../../../../sources/FalkorDB__FalkorDB/deps/GraphBLAS/cpu_features/cmake/ci/README.md)<br>[deps/GraphBLAS/cpu_features/cmake/ci/vagrant/freebsd/Vagrantfile](../../../../sources/FalkorDB__FalkorDB/deps/GraphBLAS/cpu_features/cmake/ci/vagrant/freebsd/Vagrantfile)<br>[deps/GraphBLAS/cpu_features/cmake/ci/sample/CMakeLists.txt](../../../../sources/FalkorDB__FalkorDB/deps/GraphBLAS/cpu_features/cmake/ci/sample/CMakeLists.txt)<br>[deps/GraphBLAS/cpu_features/cmake/ci/sample/main.cpp](../../../../sources/FalkorDB__FalkorDB/deps/GraphBLAS/cpu_features/cmake/ci/sample/main.cpp)<br>[deps/GraphBLAS/cpu_features/cmake/ci/docker/toolchain/Dockerfile](../../../../sources/FalkorDB__FalkorDB/deps/GraphBLAS/cpu_features/cmake/ci/docker/toolchain/Dockerfile) |
| Containers / deploy | 8 | [tests/Dockerfile.alpine](../../../../sources/FalkorDB__FalkorDB/tests/Dockerfile.alpine)<br>[tests/Dockerfile.amazonlinux2023](../../../../sources/FalkorDB__FalkorDB/tests/Dockerfile.amazonlinux2023)<br>[tests/Dockerfile.debian](../../../../sources/FalkorDB__FalkorDB/tests/Dockerfile.debian)<br>[tests/Dockerfile.rhel](../../../../sources/FalkorDB__FalkorDB/tests/Dockerfile.rhel)<br>[deps/GraphBLAS/cpu_features/cmake/ci/docker/toolchain/Dockerfile](../../../../sources/FalkorDB__FalkorDB/deps/GraphBLAS/cpu_features/cmake/ci/docker/toolchain/Dockerfile)<br>[deps/GraphBLAS/cpu_features/cmake/ci/docker/amd64/Dockerfile](../../../../sources/FalkorDB__FalkorDB/deps/GraphBLAS/cpu_features/cmake/ci/docker/amd64/Dockerfile) |
| Security / policy | 1 | [SECURITY.md](../../../../sources/FalkorDB__FalkorDB/SECURITY.md) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | none |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `tests/unit/test_graph.c`, `tests/unit/test_query_graph.c`, `tests/unit/test_vector.c`.
2. Map agent/tool runtime through: `deps/GraphBLAS/Source/memory/GB_calloc_memory.c`, `deps/GraphBLAS/Source/memory/GB_free_memory.c`, `deps/GraphBLAS/Source/memory/GB_malloc_memory.c`.
3. Inspect retrieval/memory/indexing through: `tests/unit/test_graph.c`, `tests/unit/test_query_graph.c`, `tests/unit/test_vector.c`.
4. Verify behavior through test/eval files: `tests/__init__.py`, `tests/common.sh`, `tests/Dockerfile.alpine`.

## Existing Repository Insight

LLM 위키/RAG/지식베이스 관점에서 A super fast Graph Database uses GraphBLAS under the hood for its sparse adjacency matrix graph representation. Our goal. 핵심 구조 신호는 C, Cargo.toml, Makefile, README.md, tests, ci이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

mixed 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 knowledge/RAG pattern reference이고, 후속 확인 포인트는 needs deeper structural scan입니다.
