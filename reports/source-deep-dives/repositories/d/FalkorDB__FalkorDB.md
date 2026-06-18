# FalkorDB/FalkorDB 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

A super fast Graph Database uses GraphBLAS under the hood for its sparse adjacency matrix graph representation. Our goal is to provide the best Knowledge Graph for LLM (GraphRAG).

## 요약

- 조사 단위: `sources/FalkorDB__FalkorDB` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 6,846 files, 422 directories, depth score 108, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 agent/tool runtime, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 retrieval=tests/unit/test_graph.c, tests/unit/test_query_graph.c, tests/unit/test_vector.c이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 지식/RAG 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | FalkorDB/FalkorDB |
| 주제 | LLM 위키/RAG/지식베이스 / LLM 위키/RAG/지식베이스 |
| Region | mixed |
| Language | C |
| Stars | 4597 |
| Forks | 393 |
| License | NOASSERTION |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/FalkorDB__FalkorDB](../../../../sources/FalkorDB__FalkorDB) |
| 기존 보고서 | [reports/llm-wiki/repositories/FalkorDB__FalkorDB.md](../../../llm-wiki/repositories/FalkorDB__FalkorDB.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 6846 / 422 |
| 관측 최대 깊이 | 8 |
| 상위 디렉터리 | .github, assets, demo, deps, src, tests |
| 상위 확장자 | .c: 4555, .m: 822, .h: 546, .feature: 220, .py: 148, (none): 85, .tex: 76, .yml: 51, .txt: 44, .cpp: 29, .md: 23, .cmake: 20 |
| 소스 패턴 | agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 79 |
| src | source boundary | 12 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| demo | top-level component | 1 |
| deps | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 20 | [deps/GraphBLAS/Source/memory/GB_calloc_memory.c](../../../../sources/FalkorDB__FalkorDB/deps/GraphBLAS/Source/memory/GB_calloc_memory.c)<br>[deps/GraphBLAS/Source/memory/GB_free_memory.c](../../../../sources/FalkorDB__FalkorDB/deps/GraphBLAS/Source/memory/GB_free_memory.c)<br>[deps/GraphBLAS/Source/memory/GB_malloc_memory.c](../../../../sources/FalkorDB__FalkorDB/deps/GraphBLAS/Source/memory/GB_malloc_memory.c)<br>[deps/GraphBLAS/Source/memory/GB_memcpy.c](../../../../sources/FalkorDB__FalkorDB/deps/GraphBLAS/Source/memory/GB_memcpy.c)<br>[deps/GraphBLAS/Source/memory/GB_memory.h](../../../../sources/FalkorDB__FalkorDB/deps/GraphBLAS/Source/memory/GB_memory.h)<br>[deps/GraphBLAS/Source/memory/GB_memoryUsage.c](../../../../sources/FalkorDB__FalkorDB/deps/GraphBLAS/Source/memory/GB_memoryUsage.c)<br>[deps/GraphBLAS/Source/memory/GB_memset.c](../../../../sources/FalkorDB__FalkorDB/deps/GraphBLAS/Source/memory/GB_memset.c)<br>[deps/GraphBLAS/Source/memory/GB_realloc_memory.c](../../../../sources/FalkorDB__FalkorDB/deps/GraphBLAS/Source/memory/GB_realloc_memory.c) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 294 | [tests/unit/test_graph.c](../../../../sources/FalkorDB__FalkorDB/tests/unit/test_graph.c)<br>[tests/unit/test_query_graph.c](../../../../sources/FalkorDB__FalkorDB/tests/unit/test_query_graph.c)<br>[tests/unit/test_vector.c](../../../../sources/FalkorDB__FalkorDB/tests/unit/test_vector.c)<br>[tests/tck/features/expressions/graph/Graph1.feature](../../../../sources/FalkorDB__FalkorDB/tests/tck/features/expressions/graph/Graph1.feature)<br>[tests/tck/features/expressions/graph/Graph2.feature](../../../../sources/FalkorDB__FalkorDB/tests/tck/features/expressions/graph/Graph2.feature)<br>[tests/tck/features/expressions/graph/Graph3.feature](../../../../sources/FalkorDB__FalkorDB/tests/tck/features/expressions/graph/Graph3.feature)<br>[tests/tck/features/expressions/graph/Graph4.feature](../../../../sources/FalkorDB__FalkorDB/tests/tck/features/expressions/graph/Graph4.feature)<br>[tests/tck/features/expressions/graph/Graph5.feature](../../../../sources/FalkorDB__FalkorDB/tests/tck/features/expressions/graph/Graph5.feature) |
| spec | 63 | [tests/requirements.txt](../../../../sources/FalkorDB__FalkorDB/tests/requirements.txt)<br>[tests/benchmarks/benchmarks_requirements.txt](../../../../sources/FalkorDB__FalkorDB/tests/benchmarks/benchmarks_requirements.txt)<br>[tests/benchmarks/comparison_requirements.txt](../../../../sources/FalkorDB__FalkorDB/tests/benchmarks/comparison_requirements.txt)<br>[deps/GraphBLAS/Test/GB_spec_accum_mask.m](../../../../sources/FalkorDB__FalkorDB/deps/GraphBLAS/Test/GB_spec_accum_mask.m)<br>[deps/GraphBLAS/Test/GB_spec_accum.m](../../../../sources/FalkorDB__FalkorDB/deps/GraphBLAS/Test/GB_spec_accum.m)<br>[deps/GraphBLAS/Test/GB_spec_apply.m](../../../../sources/FalkorDB__FalkorDB/deps/GraphBLAS/Test/GB_spec_apply.m)<br>[deps/GraphBLAS/Test/GB_spec_assign.m](../../../../sources/FalkorDB__FalkorDB/deps/GraphBLAS/Test/GB_spec_assign.m)<br>[deps/GraphBLAS/Test/GB_spec_binop_positional.m](../../../../sources/FalkorDB__FalkorDB/deps/GraphBLAS/Test/GB_spec_binop_positional.m) |
| eval | 1193 | [tests/__init__.py](../../../../sources/FalkorDB__FalkorDB/tests/__init__.py)<br>[tests/common.sh](../../../../sources/FalkorDB__FalkorDB/tests/common.sh)<br>[tests/Dockerfile.alpine](../../../../sources/FalkorDB__FalkorDB/tests/Dockerfile.alpine)<br>[tests/Dockerfile.amazonlinux2023](../../../../sources/FalkorDB__FalkorDB/tests/Dockerfile.amazonlinux2023)<br>[tests/Dockerfile.debian](../../../../sources/FalkorDB__FalkorDB/tests/Dockerfile.debian)<br>[tests/Dockerfile.rhel](../../../../sources/FalkorDB__FalkorDB/tests/Dockerfile.rhel)<br>[tests/requirements.txt](../../../../sources/FalkorDB__FalkorDB/tests/requirements.txt)<br>[tests/upgrade/test_upgrade.py](../../../../sources/FalkorDB__FalkorDB/tests/upgrade/test_upgrade.py) |
| security | 1 | [SECURITY.md](../../../../sources/FalkorDB__FalkorDB/SECURITY.md) |
| ci | 36 | [deps/GraphBLAS/cpu_features/cmake/ci/Makefile](../../../../sources/FalkorDB__FalkorDB/deps/GraphBLAS/cpu_features/cmake/ci/Makefile)<br>[deps/GraphBLAS/cpu_features/cmake/ci/README.md](../../../../sources/FalkorDB__FalkorDB/deps/GraphBLAS/cpu_features/cmake/ci/README.md)<br>[deps/GraphBLAS/cpu_features/cmake/ci/vagrant/freebsd/Vagrantfile](../../../../sources/FalkorDB__FalkorDB/deps/GraphBLAS/cpu_features/cmake/ci/vagrant/freebsd/Vagrantfile)<br>[deps/GraphBLAS/cpu_features/cmake/ci/sample/CMakeLists.txt](../../../../sources/FalkorDB__FalkorDB/deps/GraphBLAS/cpu_features/cmake/ci/sample/CMakeLists.txt)<br>[deps/GraphBLAS/cpu_features/cmake/ci/sample/main.cpp](../../../../sources/FalkorDB__FalkorDB/deps/GraphBLAS/cpu_features/cmake/ci/sample/main.cpp)<br>[deps/GraphBLAS/cpu_features/cmake/ci/docker/toolchain/Dockerfile](../../../../sources/FalkorDB__FalkorDB/deps/GraphBLAS/cpu_features/cmake/ci/docker/toolchain/Dockerfile)<br>[deps/GraphBLAS/cpu_features/cmake/ci/docker/amd64/Dockerfile](../../../../sources/FalkorDB__FalkorDB/deps/GraphBLAS/cpu_features/cmake/ci/docker/amd64/Dockerfile)<br>[deps/GraphBLAS/cpu_features/cmake/ci/doc/docker.dot](../../../../sources/FalkorDB__FalkorDB/deps/GraphBLAS/cpu_features/cmake/ci/doc/docker.dot) |
| container | 8 | [tests/Dockerfile.alpine](../../../../sources/FalkorDB__FalkorDB/tests/Dockerfile.alpine)<br>[tests/Dockerfile.amazonlinux2023](../../../../sources/FalkorDB__FalkorDB/tests/Dockerfile.amazonlinux2023)<br>[tests/Dockerfile.debian](../../../../sources/FalkorDB__FalkorDB/tests/Dockerfile.debian)<br>[tests/Dockerfile.rhel](../../../../sources/FalkorDB__FalkorDB/tests/Dockerfile.rhel)<br>[deps/GraphBLAS/cpu_features/cmake/ci/docker/toolchain/Dockerfile](../../../../sources/FalkorDB__FalkorDB/deps/GraphBLAS/cpu_features/cmake/ci/docker/toolchain/Dockerfile)<br>[deps/GraphBLAS/cpu_features/cmake/ci/docker/amd64/Dockerfile](../../../../sources/FalkorDB__FalkorDB/deps/GraphBLAS/cpu_features/cmake/ci/docker/amd64/Dockerfile)<br>[deps/GraphBLAS/cpu_features/bazel/ci/docker/Dockerfile](../../../../sources/FalkorDB__FalkorDB/deps/GraphBLAS/cpu_features/bazel/ci/docker/Dockerfile)<br>[deps/GraphBLAS/cpu_features/.github/workflows/Dockerfile](../../../../sources/FalkorDB__FalkorDB/deps/GraphBLAS/cpu_features/.github/workflows/Dockerfile) |
| instruction | 0 | 명확하지 않음 |
| docs | 138 | [README.md](../../../../sources/FalkorDB__FalkorDB/README.md)<br>[deps/libcypher-parser/README.md](../../../../sources/FalkorDB__FalkorDB/deps/libcypher-parser/README.md)<br>[deps/libcypher-parser/linter/doc/cypher-lint.1.in](../../../../sources/FalkorDB__FalkorDB/deps/libcypher-parser/linter/doc/cypher-lint.1.in)<br>[deps/libcypher-parser/linter/doc/Makefile.am](../../../../sources/FalkorDB__FalkorDB/deps/libcypher-parser/linter/doc/Makefile.am)<br>[deps/libcypher-parser/lib/doc/doxygen.cfg](../../../../sources/FalkorDB__FalkorDB/deps/libcypher-parser/lib/doc/doxygen.cfg)<br>[deps/libcypher-parser/lib/doc/Makefile.am](../../../../sources/FalkorDB__FalkorDB/deps/libcypher-parser/lib/doc/Makefile.am)<br>[deps/GraphBLAS/README.md](../../../../sources/FalkorDB__FalkorDB/deps/GraphBLAS/README.md)<br>[deps/GraphBLAS/zstd/README_zstd.md](../../../../sources/FalkorDB__FalkorDB/deps/GraphBLAS/zstd/README_zstd.md) |
| config | 19 | [Cargo.lock](../../../../sources/FalkorDB__FalkorDB/Cargo.lock)<br>[Cargo.toml](../../../../sources/FalkorDB__FalkorDB/Cargo.toml)<br>[Makefile](../../../../sources/FalkorDB__FalkorDB/Makefile)<br>[tests/requirements.txt](../../../../sources/FalkorDB__FalkorDB/tests/requirements.txt)<br>[tests/flow/Makefile](../../../../sources/FalkorDB__FalkorDB/tests/flow/Makefile)<br>[deps/GraphBLAS/Makefile](../../../../sources/FalkorDB__FalkorDB/deps/GraphBLAS/Makefile)<br>[deps/GraphBLAS/Test/Makefile](../../../../sources/FalkorDB__FalkorDB/deps/GraphBLAS/Test/Makefile)<br>[deps/GraphBLAS/Tcov/Makefile](../../../../sources/FalkorDB__FalkorDB/deps/GraphBLAS/Tcov/Makefile) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 1193 | [tests/__init__.py](../../../../sources/FalkorDB__FalkorDB/tests/__init__.py)<br>[tests/common.sh](../../../../sources/FalkorDB__FalkorDB/tests/common.sh)<br>[tests/Dockerfile.alpine](../../../../sources/FalkorDB__FalkorDB/tests/Dockerfile.alpine)<br>[tests/Dockerfile.amazonlinux2023](../../../../sources/FalkorDB__FalkorDB/tests/Dockerfile.amazonlinux2023)<br>[tests/Dockerfile.debian](../../../../sources/FalkorDB__FalkorDB/tests/Dockerfile.debian)<br>[tests/Dockerfile.rhel](../../../../sources/FalkorDB__FalkorDB/tests/Dockerfile.rhel) |
| CI workflow | 36 | [deps/GraphBLAS/cpu_features/cmake/ci/Makefile](../../../../sources/FalkorDB__FalkorDB/deps/GraphBLAS/cpu_features/cmake/ci/Makefile)<br>[deps/GraphBLAS/cpu_features/cmake/ci/README.md](../../../../sources/FalkorDB__FalkorDB/deps/GraphBLAS/cpu_features/cmake/ci/README.md)<br>[deps/GraphBLAS/cpu_features/cmake/ci/vagrant/freebsd/Vagrantfile](../../../../sources/FalkorDB__FalkorDB/deps/GraphBLAS/cpu_features/cmake/ci/vagrant/freebsd/Vagrantfile)<br>[deps/GraphBLAS/cpu_features/cmake/ci/sample/CMakeLists.txt](../../../../sources/FalkorDB__FalkorDB/deps/GraphBLAS/cpu_features/cmake/ci/sample/CMakeLists.txt)<br>[deps/GraphBLAS/cpu_features/cmake/ci/sample/main.cpp](../../../../sources/FalkorDB__FalkorDB/deps/GraphBLAS/cpu_features/cmake/ci/sample/main.cpp)<br>[deps/GraphBLAS/cpu_features/cmake/ci/docker/toolchain/Dockerfile](../../../../sources/FalkorDB__FalkorDB/deps/GraphBLAS/cpu_features/cmake/ci/docker/toolchain/Dockerfile) |
| 컨테이너/배포 | 8 | [tests/Dockerfile.alpine](../../../../sources/FalkorDB__FalkorDB/tests/Dockerfile.alpine)<br>[tests/Dockerfile.amazonlinux2023](../../../../sources/FalkorDB__FalkorDB/tests/Dockerfile.amazonlinux2023)<br>[tests/Dockerfile.debian](../../../../sources/FalkorDB__FalkorDB/tests/Dockerfile.debian)<br>[tests/Dockerfile.rhel](../../../../sources/FalkorDB__FalkorDB/tests/Dockerfile.rhel)<br>[deps/GraphBLAS/cpu_features/cmake/ci/docker/toolchain/Dockerfile](../../../../sources/FalkorDB__FalkorDB/deps/GraphBLAS/cpu_features/cmake/ci/docker/toolchain/Dockerfile)<br>[deps/GraphBLAS/cpu_features/cmake/ci/docker/amd64/Dockerfile](../../../../sources/FalkorDB__FalkorDB/deps/GraphBLAS/cpu_features/cmake/ci/docker/amd64/Dockerfile) |
| 보안/정책 | 1 | [SECURITY.md](../../../../sources/FalkorDB__FalkorDB/SECURITY.md) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | path scan에서 primary entrypoint가 명확하지 않음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `tests/unit/test_graph.c`, `tests/unit/test_query_graph.c`, `tests/unit/test_vector.c`.
2. agent/tool runtime 매핑: `deps/GraphBLAS/Source/memory/GB_calloc_memory.c`, `deps/GraphBLAS/Source/memory/GB_free_memory.c`, `deps/GraphBLAS/Source/memory/GB_malloc_memory.c`.
3. retrieval/memory/indexing 확인: `tests/unit/test_graph.c`, `tests/unit/test_query_graph.c`, `tests/unit/test_vector.c`.
4. test/eval 파일로 동작 검증: `tests/__init__.py`, `tests/common.sh`, `tests/Dockerfile.alpine`.

## 기존 레포 인사이트

LLM 위키/RAG/지식베이스 관점에서 A super fast Graph Database uses GraphBLAS under the hood for its sparse adjacency matrix graph representation. Our goal. 핵심 구조 신호는 C, Cargo.toml, Makefile, README.md, tests, ci이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

mixed 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 지식/RAG 패턴 참고이고, 후속 확인 포인트는 더 깊은 구조 스캔 필요입니다.
