# kakao/n2 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

TOROS N2 - lightweight approximate Nearest Neighbor library which runs fast even with large datasets

## 요약

- 조사 단위: `sources/kakao__n2` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 79 files, 45 directories, depth score 79, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 agent/tool runtime, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 retrieval=docs/index.rst, docs/imgs/mem/memory_usage.png이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 지식/RAG 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | kakao/n2 |
| 주제 | LLM 위키/RAG/지식베이스 / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | Jupyter Notebook |
| Stars | 581 |
| Forks | 70 |
| License | Apache-2.0 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/kakao__n2](../../../../sources/kakao__n2) |
| 기존 보고서 | [reports/korea-trending/repositories/kakao__n2.md](../../../korea-trending/repositories/kakao__n2.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 79 / 45 |
| 관측 최대 깊이 | 4 |
| 상위 디렉터리 | benchmarks, bindings, docs, examples, include, src, tests, third_party |
| 상위 확장자 | .h: 17, .py: 12, (none): 9, .rst: 8, .cc: 7, .md: 5, .go: 4, .png: 3, .cpp: 2, .txt: 2, .yml: 2, .css: 1 |
| 소스 패턴 | agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 22 |
| tests | validation surface | 8 |
| src | source boundary | 2 |
| benchmarks | validation surface | 1 |
| bindings | top-level component | 1 |
| examples | top-level component | 1 |
| include | top-level component | 1 |
| third_party | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 1 | [docs/imgs/mem/memory_usage.png](../../../../sources/kakao__n2/docs/imgs/mem/memory_usage.png) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 2 | [docs/index.rst](../../../../sources/kakao__n2/docs/index.rst)<br>[docs/imgs/mem/memory_usage.png](../../../../sources/kakao__n2/docs/imgs/mem/memory_usage.png) |
| spec | 2 | [docs/requirements.txt](../../../../sources/kakao__n2/docs/requirements.txt)<br>[benchmarks/requirements.txt](../../../../sources/kakao__n2/benchmarks/requirements.txt) |
| eval | 9 | [tests/python_test/__init__.py](../../../../sources/kakao__n2/tests/python_test/__init__.py)<br>[tests/python_test/test_n2.py](../../../../sources/kakao__n2/tests/python_test/test_n2.py)<br>[tests/model/test.n2](../../../../sources/kakao__n2/tests/model/test.n2)<br>[tests/golang_test/n2_test.go](../../../../sources/kakao__n2/tests/golang_test/n2_test.go)<br>[tests/cpp_test/Makefile](../../../../sources/kakao__n2/tests/cpp_test/Makefile)<br>[tests/cpp_test/n2_test.cpp](../../../../sources/kakao__n2/tests/cpp_test/n2_test.cpp)<br>[docs/benchmark.rst](../../../../sources/kakao__n2/docs/benchmark.rst)<br>[benchmarks/benchmark_script.py](../../../../sources/kakao__n2/benchmarks/benchmark_script.py) |
| security | 0 | 명확하지 않음 |
| ci | 0 | 명확하지 않음 |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 16 | [README.rst](../../../../sources/kakao__n2/README.rst)<br>[docs/benchmark.rst](../../../../sources/kakao__n2/docs/benchmark.rst)<br>[docs/conf.py](../../../../sources/kakao__n2/docs/conf.py)<br>[docs/cpp_api.rst](../../../../sources/kakao__n2/docs/cpp_api.rst)<br>[docs/go_api.rst](../../../../sources/kakao__n2/docs/go_api.rst)<br>[docs/index.rst](../../../../sources/kakao__n2/docs/index.rst)<br>[docs/install.rst](../../../../sources/kakao__n2/docs/install.rst)<br>[docs/Makefile](../../../../sources/kakao__n2/docs/Makefile) |
| config | 7 | [Makefile](../../../../sources/kakao__n2/Makefile)<br>[tests/cpp_test/Makefile](../../../../sources/kakao__n2/tests/cpp_test/Makefile)<br>[src/Makefile](../../../../sources/kakao__n2/src/Makefile)<br>[docs/Makefile](../../../../sources/kakao__n2/docs/Makefile)<br>[docs/requirements.txt](../../../../sources/kakao__n2/docs/requirements.txt)<br>[benchmarks/Makefile](../../../../sources/kakao__n2/benchmarks/Makefile)<br>[benchmarks/requirements.txt](../../../../sources/kakao__n2/benchmarks/requirements.txt) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 9 | [tests/python_test/__init__.py](../../../../sources/kakao__n2/tests/python_test/__init__.py)<br>[tests/python_test/test_n2.py](../../../../sources/kakao__n2/tests/python_test/test_n2.py)<br>[tests/model/test.n2](../../../../sources/kakao__n2/tests/model/test.n2)<br>[tests/golang_test/n2_test.go](../../../../sources/kakao__n2/tests/golang_test/n2_test.go)<br>[tests/cpp_test/Makefile](../../../../sources/kakao__n2/tests/cpp_test/Makefile)<br>[tests/cpp_test/n2_test.cpp](../../../../sources/kakao__n2/tests/cpp_test/n2_test.cpp) |
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

1. 핵심 참조에서 시작: `docs/index.rst`, `docs/imgs/mem/memory_usage.png`, `README.rst`.
2. agent/tool runtime 매핑: `docs/imgs/mem/memory_usage.png`.
3. retrieval/memory/indexing 확인: `docs/index.rst`, `docs/imgs/mem/memory_usage.png`.
4. test/eval 파일로 동작 검증: `tests/python_test/__init__.py`, `tests/python_test/test_n2.py`, `tests/model/test.n2`.

## 기존 레포 인사이트

LLM 위키/RAG/지식베이스 관점에서 TOROS N2 lightweight approximate Nearest Neighbor library which runs fast even with large datasets. 핵심 구조 신호는 Jupyter Notebook, Makefile, LICENSE, tests, docs, spec-artifacts이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 지식/RAG 패턴 참고이고, 후속 확인 포인트는 CI 신호가 명확하지 않음, 더 깊은 구조 스캔 필요입니다.
