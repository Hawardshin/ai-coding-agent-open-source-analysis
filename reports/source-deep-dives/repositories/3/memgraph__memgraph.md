# memgraph/memgraph 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

High-performance open-source in-memory graph database for GraphRAG, AI memory, agentic AI, and real-time graph analytics. Cypher-compatible, built in C++.

## 요약

- 조사 단위: `sources/memgraph__memgraph` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 6,018 files, 1,777 directories, depth score 118, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 retrieval=tools/memory_usage, tools/run_vector_search_index_benchmark.bash, tools/ci/monitoring/manifests/vector.yaml.tmpl이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 지식/RAG 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | memgraph/memgraph |
| 주제 | LLM 위키/RAG/지식베이스 / LLM 위키/RAG/지식베이스 |
| Region | global |
| Language | C++ |
| Stars | 4163 |
| Forks | 236 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/memgraph__memgraph](../../../../sources/memgraph__memgraph) |
| 기존 보고서 | [reports/global-trending/repositories/memgraph__memgraph.md](../../../global-trending/repositories/memgraph__memgraph.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 6018 / 1777 |
| 관측 최대 깊이 | 9 |
| 상위 디렉터리 | .cargo-husky, .githooks, .github, ADRs, cmake, conan_config, conan_recipes, config, environment, import, include, libs, licenses, mage, mgcxx, query_modules, release, skills, src, tests |
| 상위 확장자 | .yml: 971, .cyp: 837, .cpp: 794, .py: 731, .hpp: 705, .cypher: 379, .txt: 325, .bin: 214, (none): 176, .yaml: 151, .sh: 141, .feature: 122 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 129 |
| src | source boundary | 11 |
| .github | ci surface | 1 |
| ADRs | top-level component | 1 |
| cmake | top-level component | 1 |
| conan_config | top-level component | 1 |
| conan_recipes | ci surface | 1 |
| config | top-level component | 1 |
| environment | top-level component | 1 |
| import | top-level component | 1 |
| include | top-level component | 1 |
| libs | source boundary | 1 |
| licenses | top-level component | 1 |
| mage | top-level component | 1 |
| mgcxx | top-level component | 1 |
| query_modules | top-level component | 1 |
| release | top-level component | 1 |
| skills | top-level component | 1 |


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
| retrieval | [tools/memory_usage](../../../../sources/memgraph__memgraph/tools/memory_usage) | retrieval signal |
| retrieval | [tools/run_vector_search_index_benchmark.bash](../../../../sources/memgraph__memgraph/tools/run_vector_search_index_benchmark.bash) | retrieval signal |
| retrieval | [tools/ci/monitoring/manifests/vector.yaml.tmpl](../../../../sources/memgraph__memgraph/tools/ci/monitoring/manifests/vector.yaml.tmpl) | retrieval signal |
| retrieval | [tools/bench-graph-client/main.py](../../../../sources/memgraph__memgraph/tools/bench-graph-client/main.py) | retrieval signal |
| entrypoints | [tests/integration/telemetry/server.py](../../../../sources/memgraph__memgraph/tests/integration/telemetry/server.py) | entrypoints signal |
| entrypoints | [tests/integration/license_info/server.py](../../../../sources/memgraph__memgraph/tests/integration/license_info/server.py) | entrypoints signal |
| entrypoints | [tests/e2e/graphql/graphql_library_config/server.js](../../../../sources/memgraph__memgraph/tests/e2e/graphql/graphql_library_config/server.js) | entrypoints signal |
| docs | [README.md](../../../../sources/memgraph__memgraph/README.md) | docs signal |
| docs | [tools/ci/query_module_count/readme.md](../../../../sources/memgraph__memgraph/tools/ci/query_module_count/readme.md) | docs signal |
| docs | [tools/ci/monitoring/README.md](../../../../sources/memgraph__memgraph/tools/ci/monitoring/README.md) | docs signal |
| docs | [tests/stress/README.md](../../../../sources/memgraph__memgraph/tests/stress/README.md) | docs signal |
| eval | [tools/analyze_ftime_trace.py](../../../../sources/memgraph__memgraph/tools/analyze_ftime_trace.py) | eval signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 11 | [tools/bench-graph-client/main.py](../../../../sources/memgraph__memgraph/tools/bench-graph-client/main.py)<br>[tests/integration/telemetry/server.py](../../../../sources/memgraph__memgraph/tests/integration/telemetry/server.py)<br>[tests/integration/license_info/server.py](../../../../sources/memgraph__memgraph/tests/integration/license_info/server.py)<br>[tests/e2e/graphql/graphql_library_config/server.js](../../../../sources/memgraph__memgraph/tests/e2e/graphql/graphql_library_config/server.js)<br>[src/rpc/server.cpp](../../../../sources/memgraph__memgraph/src/rpc/server.cpp)<br>[src/rpc/server.hpp](../../../../sources/memgraph__memgraph/src/rpc/server.hpp)<br>[src/communication/server.hpp](../../../../sources/memgraph__memgraph/src/communication/server.hpp)<br>[src/communication/websocket/server.cpp](../../../../sources/memgraph__memgraph/src/communication/websocket/server.cpp) |
| agentRuntime | 363 | [tools/analyze_ftime_trace.py](../../../../sources/memgraph__memgraph/tools/analyze_ftime_trace.py)<br>[tools/analyze_rpc_calls](../../../../sources/memgraph__memgraph/tools/analyze_rpc_calls)<br>[tools/coverage_binary](../../../../sources/memgraph__memgraph/tools/coverage_binary)<br>[tools/git-clang-format](../../../../sources/memgraph__memgraph/tools/git-clang-format)<br>[tools/git-clang-tidy](../../../../sources/memgraph__memgraph/tools/git-clang-tidy)<br>[tools/header-checker.py](../../../../sources/memgraph__memgraph/tools/header-checker.py)<br>[tools/lsan.supp](../../../../sources/memgraph__memgraph/tools/lsan.supp)<br>[tools/manage_distributed_card_fraud](../../../../sources/memgraph__memgraph/tools/manage_distributed_card_fraud) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 413 | [tools/memory_usage](../../../../sources/memgraph__memgraph/tools/memory_usage)<br>[tools/run_vector_search_index_benchmark.bash](../../../../sources/memgraph__memgraph/tools/run_vector_search_index_benchmark.bash)<br>[tools/ci/monitoring/manifests/vector.yaml.tmpl](../../../../sources/memgraph__memgraph/tools/ci/monitoring/manifests/vector.yaml.tmpl)<br>[tools/bench-graph-client/main.py](../../../../sources/memgraph__memgraph/tools/bench-graph-client/main.py)<br>[tools/bench-graph-client/requirements.txt](../../../../sources/memgraph__memgraph/tools/bench-graph-client/requirements.txt)<br>[tests/unit/db_memory_tracking.cpp](../../../../sources/memgraph__memgraph/tests/unit/db_memory_tracking.cpp)<br>[tests/unit/query_plan_orderby_index.cpp](../../../../sources/memgraph__memgraph/tests/unit/query_plan_orderby_index.cpp)<br>[tests/unit/query_procedures_mgp_graph.cpp](../../../../sources/memgraph__memgraph/tests/unit/query_procedures_mgp_graph.cpp) |
| spec | 16 | [requirements.txt](../../../../sources/memgraph__memgraph/requirements.txt)<br>[tools/requirements.txt](../../../../sources/memgraph__memgraph/tools/requirements.txt)<br>[tools/bench-graph-client/requirements.txt](../../../../sources/memgraph__memgraph/tools/bench-graph-client/requirements.txt)<br>[tests/requirements.txt](../../../../sources/memgraph__memgraph/tests/requirements.txt)<br>[tests/query_modules/requirements.txt](../../../../sources/memgraph__memgraph/tests/query_modules/requirements.txt)<br>[tests/integration/ldap/requirements.txt](../../../../sources/memgraph__memgraph/tests/integration/ldap/requirements.txt)<br>[tests/gql_behave/requirements.txt](../../../../sources/memgraph__memgraph/tests/gql_behave/requirements.txt)<br>[src/auth/reference_modules/requirements.txt](../../../../sources/memgraph__memgraph/src/auth/reference_modules/requirements.txt) |
| eval | 4188 | [tools/analyze_ftime_trace.py](../../../../sources/memgraph__memgraph/tools/analyze_ftime_trace.py)<br>[tools/run_vector_search_index_benchmark.bash](../../../../sources/memgraph__memgraph/tools/run_vector_search_index_benchmark.bash)<br>[tools/tests/client/output_tabular/escaping.txt](../../../../sources/memgraph__memgraph/tools/tests/client/output_tabular/escaping.txt)<br>[tools/tests/client/output_tabular/multiline_query_with_comments.txt](../../../../sources/memgraph__memgraph/tools/tests/client/output_tabular/multiline_query_with_comments.txt)<br>[tools/tests/client/output_tabular/multiline_query.txt](../../../../sources/memgraph__memgraph/tools/tests/client/output_tabular/multiline_query.txt)<br>[tools/tests/client/output_tabular/multiple_columns.txt](../../../../sources/memgraph__memgraph/tools/tests/client/output_tabular/multiple_columns.txt)<br>[tools/tests/client/output_tabular/multiple_queries_per_line.txt](../../../../sources/memgraph__memgraph/tools/tests/client/output_tabular/multiple_queries_per_line.txt)<br>[tools/tests/client/output_tabular/query_per_line.txt](../../../../sources/memgraph__memgraph/tools/tests/client/output_tabular/query_per_line.txt) |
| security | 97 | [tests/unit/auth_checker.cpp](../../../../sources/memgraph__memgraph/tests/unit/auth_checker.cpp)<br>[tests/unit/auth_handler.cpp](../../../../sources/memgraph__memgraph/tests/unit/auth_handler.cpp)<br>[tests/unit/auth_models_comm.cpp](../../../../sources/memgraph__memgraph/tests/unit/auth_models_comm.cpp)<br>[tests/unit/auth_models.cpp](../../../../sources/memgraph__memgraph/tests/unit/auth_models.cpp)<br>[tests/unit/auth.cpp](../../../../sources/memgraph__memgraph/tests/unit/auth.cpp)<br>[tests/unit/auth_kvstore/v3/000004.log](../../../../sources/memgraph__memgraph/tests/unit/auth_kvstore/v3/000004.log)<br>[tests/unit/auth_kvstore/v3/CURRENT](../../../../sources/memgraph__memgraph/tests/unit/auth_kvstore/v3/CURRENT)<br>[tests/unit/auth_kvstore/v3/IDENTITY](../../../../sources/memgraph__memgraph/tests/unit/auth_kvstore/v3/IDENTITY) |
| ci | 114 | [tools/ci/aggregate_build_tests.py](../../../../sources/memgraph__memgraph/tools/ci/aggregate_build_tests.py)<br>[tools/ci/build-gssapi.sh](../../../../sources/memgraph__memgraph/tools/ci/build-gssapi.sh)<br>[tools/ci/build-heaptrack.sh](../../../../sources/memgraph__memgraph/tools/ci/build-heaptrack.sh)<br>[tools/ci/build-mgconsole.sh](../../../../sources/memgraph__memgraph/tools/ci/build-mgconsole.sh)<br>[tools/ci/build-pymgclient.sh](../../../../sources/memgraph__memgraph/tools/ci/build-pymgclient.sh)<br>[tools/ci/clean_conan.sh](../../../../sources/memgraph__memgraph/tools/ci/clean_conan.sh)<br>[tools/ci/compute-build-threads.sh](../../../../sources/memgraph__memgraph/tools/ci/compute-build-threads.sh)<br>[tools/ci/container-test-mage.sh](../../../../sources/memgraph__memgraph/tools/ci/container-test-mage.sh) |
| container | 57 | [tools/ci/monitoring/docker-compose.host-network.yml](../../../../sources/memgraph__memgraph/tools/ci/monitoring/docker-compose.host-network.yml)<br>[tools/ci/monitoring/docker-compose.yml](../../../../sources/memgraph__memgraph/tools/ci/monitoring/docker-compose.yml)<br>[tests/stress/standalone/native/deployment/deployment.sh](../../../../sources/memgraph__memgraph/tests/stress/standalone/native/deployment/deployment.sh)<br>[tests/stress/ha/native/deployment/deployment.sh](../../../../sources/memgraph__memgraph/tests/stress/ha/native/deployment/deployment.sh)<br>[tests/stress/ha/eks/deployment/cluster.yaml](../../../../sources/memgraph__memgraph/tests/stress/ha/eks/deployment/cluster.yaml)<br>[tests/stress/ha/eks/deployment/deployment.sh](../../../../sources/memgraph__memgraph/tests/stress/ha/eks/deployment/deployment.sh)<br>[tests/stress/ha/eks/deployment/gp3-sc.yaml](../../../../sources/memgraph__memgraph/tests/stress/ha/eks/deployment/gp3-sc.yaml)<br>[tests/stress/ha/eks/deployment/monitoring-service.yaml.tmpl](../../../../sources/memgraph__memgraph/tests/stress/ha/eks/deployment/monitoring-service.yaml.tmpl) |
| instruction | 0 | 명확하지 않음 |
| docs | 31 | [README.md](../../../../sources/memgraph__memgraph/README.md)<br>[tools/ci/query_module_count/readme.md](../../../../sources/memgraph__memgraph/tools/ci/query_module_count/readme.md)<br>[tools/ci/monitoring/README.md](../../../../sources/memgraph__memgraph/tools/ci/monitoring/README.md)<br>[tests/stress/README.md](../../../../sources/memgraph__memgraph/tests/stress/README.md)<br>[tests/query_modules/README.md](../../../../sources/memgraph__memgraph/tests/query_modules/README.md)<br>[tests/mgbench/README.md](../../../../sources/memgraph__memgraph/tests/mgbench/README.md)<br>[tests/manual/js/transaction_timeout/README.md](../../../../sources/memgraph__memgraph/tests/manual/js/transaction_timeout/README.md)<br>[tests/jepsen/README.md](../../../../sources/memgraph__memgraph/tests/jepsen/README.md) |
| config | 26 | [pyproject.toml](../../../../sources/memgraph__memgraph/pyproject.toml)<br>[requirements.txt](../../../../sources/memgraph__memgraph/requirements.txt)<br>[tools/requirements.txt](../../../../sources/memgraph__memgraph/tools/requirements.txt)<br>[tools/bench-graph-client/requirements.txt](../../../../sources/memgraph__memgraph/tools/bench-graph-client/requirements.txt)<br>[tests/requirements.txt](../../../../sources/memgraph__memgraph/tests/requirements.txt)<br>[tests/query_modules/requirements.txt](../../../../sources/memgraph__memgraph/tests/query_modules/requirements.txt)<br>[tests/manual/js/transaction_timeout/package.json](../../../../sources/memgraph__memgraph/tests/manual/js/transaction_timeout/package.json)<br>[tests/integration/ldap/requirements.txt](../../../../sources/memgraph__memgraph/tests/integration/ldap/requirements.txt) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 4188 | [tools/analyze_ftime_trace.py](../../../../sources/memgraph__memgraph/tools/analyze_ftime_trace.py)<br>[tools/run_vector_search_index_benchmark.bash](../../../../sources/memgraph__memgraph/tools/run_vector_search_index_benchmark.bash)<br>[tools/tests/client/output_tabular/escaping.txt](../../../../sources/memgraph__memgraph/tools/tests/client/output_tabular/escaping.txt)<br>[tools/tests/client/output_tabular/multiline_query_with_comments.txt](../../../../sources/memgraph__memgraph/tools/tests/client/output_tabular/multiline_query_with_comments.txt)<br>[tools/tests/client/output_tabular/multiline_query.txt](../../../../sources/memgraph__memgraph/tools/tests/client/output_tabular/multiline_query.txt)<br>[tools/tests/client/output_tabular/multiple_columns.txt](../../../../sources/memgraph__memgraph/tools/tests/client/output_tabular/multiple_columns.txt) |
| CI workflow | 114 | [tools/ci/aggregate_build_tests.py](../../../../sources/memgraph__memgraph/tools/ci/aggregate_build_tests.py)<br>[tools/ci/build-gssapi.sh](../../../../sources/memgraph__memgraph/tools/ci/build-gssapi.sh)<br>[tools/ci/build-heaptrack.sh](../../../../sources/memgraph__memgraph/tools/ci/build-heaptrack.sh)<br>[tools/ci/build-mgconsole.sh](../../../../sources/memgraph__memgraph/tools/ci/build-mgconsole.sh)<br>[tools/ci/build-pymgclient.sh](../../../../sources/memgraph__memgraph/tools/ci/build-pymgclient.sh)<br>[tools/ci/clean_conan.sh](../../../../sources/memgraph__memgraph/tools/ci/clean_conan.sh) |
| 컨테이너/배포 | 57 | [tools/ci/monitoring/docker-compose.host-network.yml](../../../../sources/memgraph__memgraph/tools/ci/monitoring/docker-compose.host-network.yml)<br>[tools/ci/monitoring/docker-compose.yml](../../../../sources/memgraph__memgraph/tools/ci/monitoring/docker-compose.yml)<br>[tests/stress/standalone/native/deployment/deployment.sh](../../../../sources/memgraph__memgraph/tests/stress/standalone/native/deployment/deployment.sh)<br>[tests/stress/ha/native/deployment/deployment.sh](../../../../sources/memgraph__memgraph/tests/stress/ha/native/deployment/deployment.sh)<br>[tests/stress/ha/eks/deployment/cluster.yaml](../../../../sources/memgraph__memgraph/tests/stress/ha/eks/deployment/cluster.yaml)<br>[tests/stress/ha/eks/deployment/deployment.sh](../../../../sources/memgraph__memgraph/tests/stress/ha/eks/deployment/deployment.sh) |
| 보안/정책 | 97 | [tests/unit/auth_checker.cpp](../../../../sources/memgraph__memgraph/tests/unit/auth_checker.cpp)<br>[tests/unit/auth_handler.cpp](../../../../sources/memgraph__memgraph/tests/unit/auth_handler.cpp)<br>[tests/unit/auth_models_comm.cpp](../../../../sources/memgraph__memgraph/tests/unit/auth_models_comm.cpp)<br>[tests/unit/auth_models.cpp](../../../../sources/memgraph__memgraph/tests/unit/auth_models.cpp)<br>[tests/unit/auth.cpp](../../../../sources/memgraph__memgraph/tests/unit/auth.cpp)<br>[tests/unit/auth_kvstore/v3/000004.log](../../../../sources/memgraph__memgraph/tests/unit/auth_kvstore/v3/000004.log) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 상위 디렉터리가 많아 모듈 경계 재확인 필요 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `tools/memory_usage`, `tools/run_vector_search_index_benchmark.bash`, `tools/ci/monitoring/manifests/vector.yaml.tmpl`.
2. entrypoint를 따라 실행 흐름 확인: `tools/bench-graph-client/main.py`, `tests/integration/telemetry/server.py`, `tests/integration/license_info/server.py`.
3. agent/tool runtime 매핑: `tools/analyze_ftime_trace.py`, `tools/analyze_rpc_calls`, `tools/coverage_binary`.
4. retrieval/memory/indexing 확인: `tools/memory_usage`, `tools/run_vector_search_index_benchmark.bash`, `tools/ci/monitoring/manifests/vector.yaml.tmpl`.
5. test/eval 파일로 동작 검증: `tools/analyze_ftime_trace.py`, `tools/run_vector_search_index_benchmark.bash`, `tools/tests/client/output_tabular/escaping.txt`.

## 기존 레포 인사이트

LLM 위키/RAG/지식베이스 관점에서 High performance open source in memory graph database for GraphRAG, AI memory, agentic AI, and real time graph analytics. 핵심 구조 신호는 C++, pyproject.toml, requirements.txt, README.md, LICENSE, tests이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 지식/RAG 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
