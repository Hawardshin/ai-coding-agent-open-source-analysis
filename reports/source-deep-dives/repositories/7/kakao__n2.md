# kakao/n2 Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

TOROS N2 - lightweight approximate Nearest Neighbor library which runs fast even with large datasets

## 요약

- 조사 단위: `sources/kakao__n2` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 79 files, 45 directories, depth score 85, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 agent/tool runtime, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 retrieval=docs/index.rst, docs/imgs/mem/memory_usage.png이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 knowledge/RAG pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | kakao/n2 |
| Topic | LLM Wiki, RAG, and Knowledge / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | Jupyter Notebook |
| Stars | 581 |
| Forks | 70 |
| License | Apache-2.0 |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/kakao__n2](../../../../sources/kakao__n2) |
| Existing report | [reports/korea-trending/repositories/kakao__n2.md](../../../korea-trending/repositories/kakao__n2.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 79 / 45 |
| Max observed depth | 4 |
| Top directories | benchmarks, bindings, docs, examples, include, src, tests, third_party |
| Top extensions | .h: 17, .py: 12, (none): 9, .rst: 8, .cc: 7, .md: 5, .go: 4, .png: 3, .cpp: 2, .txt: 2, .yml: 2, .css: 1 |
| Source patterns | agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 22 |
| tests | validation surface | 8 |
| src | source boundary | 2 |
| benchmarks | validation surface | 1 |
| bindings | top-level component | 1 |
| examples | top-level component | 1 |
| include | top-level component | 1 |
| third_party | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | Makefile | all | make all |
| utility | Makefile | go | make go |
| utility | Makefile | shared_lib | make shared_lib |
| utility | Makefile | static_lib | make static_lib |
| utility | Makefile | install | make install |
| test | Makefile | test_all | make test_all |
| test | Makefile | test_cpp | make test_cpp |
| test | Makefile | test_python | make test_python |
| test | Makefile | gtest | make gtest |
| test | Makefile | gtest-all.o | make gtest-all.o |
| test | Makefile | gtest_main.o | make gtest_main.o |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | clean | make clean |


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
| retrieval | [docs/index.rst](../../../../sources/kakao__n2/docs/index.rst) | retrieval signal |
| retrieval | [docs/imgs/mem/memory_usage.png](../../../../sources/kakao__n2/docs/imgs/mem/memory_usage.png) | retrieval signal |
| docs | [README.rst](../../../../sources/kakao__n2/README.rst) | docs signal |
| docs | [docs/benchmark.rst](../../../../sources/kakao__n2/docs/benchmark.rst) | docs signal |
| docs | [docs/conf.py](../../../../sources/kakao__n2/docs/conf.py) | docs signal |
| docs | [docs/cpp_api.rst](../../../../sources/kakao__n2/docs/cpp_api.rst) | docs signal |
| eval | [tests/python_test/__init__.py](../../../../sources/kakao__n2/tests/python_test/__init__.py) | eval signal |
| eval | [tests/python_test/test_n2.py](../../../../sources/kakao__n2/tests/python_test/test_n2.py) | eval signal |
| eval | [tests/model/test.n2](../../../../sources/kakao__n2/tests/model/test.n2) | eval signal |
| eval | [tests/golang_test/n2_test.go](../../../../sources/kakao__n2/tests/golang_test/n2_test.go) | eval signal |
| config | [Makefile](../../../../sources/kakao__n2/Makefile) | config signal |
| config | [tests/cpp_test/Makefile](../../../../sources/kakao__n2/tests/cpp_test/Makefile) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 1 | [docs/imgs/mem/memory_usage.png](../../../../sources/kakao__n2/docs/imgs/mem/memory_usage.png) |
| mcp | 0 | not obvious |
| retrieval | 2 | [docs/index.rst](../../../../sources/kakao__n2/docs/index.rst)<br>[docs/imgs/mem/memory_usage.png](../../../../sources/kakao__n2/docs/imgs/mem/memory_usage.png) |
| spec | 2 | [docs/requirements.txt](../../../../sources/kakao__n2/docs/requirements.txt)<br>[benchmarks/requirements.txt](../../../../sources/kakao__n2/benchmarks/requirements.txt) |
| eval | 9 | [tests/python_test/__init__.py](../../../../sources/kakao__n2/tests/python_test/__init__.py)<br>[tests/python_test/test_n2.py](../../../../sources/kakao__n2/tests/python_test/test_n2.py)<br>[tests/model/test.n2](../../../../sources/kakao__n2/tests/model/test.n2)<br>[tests/golang_test/n2_test.go](../../../../sources/kakao__n2/tests/golang_test/n2_test.go)<br>[tests/cpp_test/Makefile](../../../../sources/kakao__n2/tests/cpp_test/Makefile)<br>[tests/cpp_test/n2_test.cpp](../../../../sources/kakao__n2/tests/cpp_test/n2_test.cpp)<br>[docs/benchmark.rst](../../../../sources/kakao__n2/docs/benchmark.rst)<br>[benchmarks/benchmark_script.py](../../../../sources/kakao__n2/benchmarks/benchmark_script.py) |
| security | 0 | not obvious |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 16 | [README.rst](../../../../sources/kakao__n2/README.rst)<br>[docs/benchmark.rst](../../../../sources/kakao__n2/docs/benchmark.rst)<br>[docs/conf.py](../../../../sources/kakao__n2/docs/conf.py)<br>[docs/cpp_api.rst](../../../../sources/kakao__n2/docs/cpp_api.rst)<br>[docs/go_api.rst](../../../../sources/kakao__n2/docs/go_api.rst)<br>[docs/index.rst](../../../../sources/kakao__n2/docs/index.rst)<br>[docs/install.rst](../../../../sources/kakao__n2/docs/install.rst)<br>[docs/Makefile](../../../../sources/kakao__n2/docs/Makefile) |
| config | 7 | [Makefile](../../../../sources/kakao__n2/Makefile)<br>[tests/cpp_test/Makefile](../../../../sources/kakao__n2/tests/cpp_test/Makefile)<br>[src/Makefile](../../../../sources/kakao__n2/src/Makefile)<br>[docs/Makefile](../../../../sources/kakao__n2/docs/Makefile)<br>[docs/requirements.txt](../../../../sources/kakao__n2/docs/requirements.txt)<br>[benchmarks/Makefile](../../../../sources/kakao__n2/benchmarks/Makefile)<br>[benchmarks/requirements.txt](../../../../sources/kakao__n2/benchmarks/requirements.txt) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 9 | [tests/python_test/__init__.py](../../../../sources/kakao__n2/tests/python_test/__init__.py)<br>[tests/python_test/test_n2.py](../../../../sources/kakao__n2/tests/python_test/test_n2.py)<br>[tests/model/test.n2](../../../../sources/kakao__n2/tests/model/test.n2)<br>[tests/golang_test/n2_test.go](../../../../sources/kakao__n2/tests/golang_test/n2_test.go)<br>[tests/cpp_test/Makefile](../../../../sources/kakao__n2/tests/cpp_test/Makefile)<br>[tests/cpp_test/n2_test.cpp](../../../../sources/kakao__n2/tests/cpp_test/n2_test.cpp) |
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

1. Start from key references: `docs/index.rst`, `docs/imgs/mem/memory_usage.png`, `README.rst`.
2. Map agent/tool runtime through: `docs/imgs/mem/memory_usage.png`.
3. Inspect retrieval/memory/indexing through: `docs/index.rst`, `docs/imgs/mem/memory_usage.png`.
4. Verify behavior through test/eval files: `tests/python_test/__init__.py`, `tests/python_test/test_n2.py`, `tests/model/test.n2`.

## Existing Repository Insight

LLM 위키/RAG/지식베이스 관점에서 TOROS N2 lightweight approximate Nearest Neighbor library which runs fast even with large datasets. 핵심 구조 신호는 Jupyter Notebook, Makefile, LICENSE, tests, docs, spec-artifacts이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 knowledge/RAG pattern reference이고, 후속 확인 포인트는 ci signal not obvious, needs deeper structural scan입니다.
