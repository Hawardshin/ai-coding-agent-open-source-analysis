# memgraph/memgraph Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

High-performance open-source in-memory graph database for GraphRAG, AI memory, agentic AI, and real-time graph analytics. Cypher-compatible, built in C++.

## 요약

- 조사 단위: `sources/memgraph__memgraph` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 6,018 files, 1,777 directories, depth score 124, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 retrieval=tools/memory_usage, tools/run_vector_search_index_benchmark.bash, tools/ci/monitoring/manifests/vector.yaml.tmpl이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 knowledge/RAG pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | memgraph/memgraph |
| Topic | LLM Wiki, RAG, and Knowledge / LLM 위키/RAG/지식베이스 |
| Region | global |
| Language | C++ |
| Stars | 4163 |
| Forks | 236 |
| License | none |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/memgraph__memgraph](../../../../sources/memgraph__memgraph) |
| Existing report | [reports/global-trending/repositories/memgraph__memgraph.md](../../../global-trending/repositories/memgraph__memgraph.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 6018 / 1777 |
| Max observed depth | 9 |
| Top directories | .cargo-husky, .githooks, .github, ADRs, cmake, conan_config, conan_recipes, config, environment, import, include, libs, licenses, mage, mgcxx, query_modules, release, skills, src, tests |
| Top extensions | .yml: 971, .cyp: 837, .cpp: 794, .py: 731, .hpp: 705, .cypher: 379, .txt: 325, .bin: 214, (none): 176, .yaml: 151, .sh: 141, .feature: 122 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
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


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 11 | [tools/bench-graph-client/main.py](../../../../sources/memgraph__memgraph/tools/bench-graph-client/main.py)<br>[tests/integration/telemetry/server.py](../../../../sources/memgraph__memgraph/tests/integration/telemetry/server.py)<br>[tests/integration/license_info/server.py](../../../../sources/memgraph__memgraph/tests/integration/license_info/server.py)<br>[tests/e2e/graphql/graphql_library_config/server.js](../../../../sources/memgraph__memgraph/tests/e2e/graphql/graphql_library_config/server.js)<br>[src/rpc/server.cpp](../../../../sources/memgraph__memgraph/src/rpc/server.cpp)<br>[src/rpc/server.hpp](../../../../sources/memgraph__memgraph/src/rpc/server.hpp)<br>[src/communication/server.hpp](../../../../sources/memgraph__memgraph/src/communication/server.hpp)<br>[src/communication/websocket/server.cpp](../../../../sources/memgraph__memgraph/src/communication/websocket/server.cpp) |
| agentRuntime | 363 | [tools/analyze_ftime_trace.py](../../../../sources/memgraph__memgraph/tools/analyze_ftime_trace.py)<br>[tools/analyze_rpc_calls](../../../../sources/memgraph__memgraph/tools/analyze_rpc_calls)<br>[tools/coverage_binary](../../../../sources/memgraph__memgraph/tools/coverage_binary)<br>[tools/git-clang-format](../../../../sources/memgraph__memgraph/tools/git-clang-format)<br>[tools/git-clang-tidy](../../../../sources/memgraph__memgraph/tools/git-clang-tidy)<br>[tools/header-checker.py](../../../../sources/memgraph__memgraph/tools/header-checker.py)<br>[tools/lsan.supp](../../../../sources/memgraph__memgraph/tools/lsan.supp)<br>[tools/manage_distributed_card_fraud](../../../../sources/memgraph__memgraph/tools/manage_distributed_card_fraud) |
| mcp | 0 | not obvious |
| retrieval | 413 | [tools/memory_usage](../../../../sources/memgraph__memgraph/tools/memory_usage)<br>[tools/run_vector_search_index_benchmark.bash](../../../../sources/memgraph__memgraph/tools/run_vector_search_index_benchmark.bash)<br>[tools/ci/monitoring/manifests/vector.yaml.tmpl](../../../../sources/memgraph__memgraph/tools/ci/monitoring/manifests/vector.yaml.tmpl)<br>[tools/bench-graph-client/main.py](../../../../sources/memgraph__memgraph/tools/bench-graph-client/main.py)<br>[tools/bench-graph-client/requirements.txt](../../../../sources/memgraph__memgraph/tools/bench-graph-client/requirements.txt)<br>[tests/unit/db_memory_tracking.cpp](../../../../sources/memgraph__memgraph/tests/unit/db_memory_tracking.cpp)<br>[tests/unit/query_plan_orderby_index.cpp](../../../../sources/memgraph__memgraph/tests/unit/query_plan_orderby_index.cpp)<br>[tests/unit/query_procedures_mgp_graph.cpp](../../../../sources/memgraph__memgraph/tests/unit/query_procedures_mgp_graph.cpp) |
| spec | 16 | [requirements.txt](../../../../sources/memgraph__memgraph/requirements.txt)<br>[tools/requirements.txt](../../../../sources/memgraph__memgraph/tools/requirements.txt)<br>[tools/bench-graph-client/requirements.txt](../../../../sources/memgraph__memgraph/tools/bench-graph-client/requirements.txt)<br>[tests/requirements.txt](../../../../sources/memgraph__memgraph/tests/requirements.txt)<br>[tests/query_modules/requirements.txt](../../../../sources/memgraph__memgraph/tests/query_modules/requirements.txt)<br>[tests/integration/ldap/requirements.txt](../../../../sources/memgraph__memgraph/tests/integration/ldap/requirements.txt)<br>[tests/gql_behave/requirements.txt](../../../../sources/memgraph__memgraph/tests/gql_behave/requirements.txt)<br>[src/auth/reference_modules/requirements.txt](../../../../sources/memgraph__memgraph/src/auth/reference_modules/requirements.txt) |
| eval | 4188 | [tools/analyze_ftime_trace.py](../../../../sources/memgraph__memgraph/tools/analyze_ftime_trace.py)<br>[tools/run_vector_search_index_benchmark.bash](../../../../sources/memgraph__memgraph/tools/run_vector_search_index_benchmark.bash)<br>[tools/tests/client/output_tabular/escaping.txt](../../../../sources/memgraph__memgraph/tools/tests/client/output_tabular/escaping.txt)<br>[tools/tests/client/output_tabular/multiline_query_with_comments.txt](../../../../sources/memgraph__memgraph/tools/tests/client/output_tabular/multiline_query_with_comments.txt)<br>[tools/tests/client/output_tabular/multiline_query.txt](../../../../sources/memgraph__memgraph/tools/tests/client/output_tabular/multiline_query.txt)<br>[tools/tests/client/output_tabular/multiple_columns.txt](../../../../sources/memgraph__memgraph/tools/tests/client/output_tabular/multiple_columns.txt)<br>[tools/tests/client/output_tabular/multiple_queries_per_line.txt](../../../../sources/memgraph__memgraph/tools/tests/client/output_tabular/multiple_queries_per_line.txt)<br>[tools/tests/client/output_tabular/query_per_line.txt](../../../../sources/memgraph__memgraph/tools/tests/client/output_tabular/query_per_line.txt) |
| security | 97 | [tests/unit/auth_checker.cpp](../../../../sources/memgraph__memgraph/tests/unit/auth_checker.cpp)<br>[tests/unit/auth_handler.cpp](../../../../sources/memgraph__memgraph/tests/unit/auth_handler.cpp)<br>[tests/unit/auth_models_comm.cpp](../../../../sources/memgraph__memgraph/tests/unit/auth_models_comm.cpp)<br>[tests/unit/auth_models.cpp](../../../../sources/memgraph__memgraph/tests/unit/auth_models.cpp)<br>[tests/unit/auth.cpp](../../../../sources/memgraph__memgraph/tests/unit/auth.cpp)<br>[tests/unit/auth_kvstore/v3/000004.log](../../../../sources/memgraph__memgraph/tests/unit/auth_kvstore/v3/000004.log)<br>[tests/unit/auth_kvstore/v3/CURRENT](../../../../sources/memgraph__memgraph/tests/unit/auth_kvstore/v3/CURRENT)<br>[tests/unit/auth_kvstore/v3/IDENTITY](../../../../sources/memgraph__memgraph/tests/unit/auth_kvstore/v3/IDENTITY) |
| ci | 114 | [tools/ci/aggregate_build_tests.py](../../../../sources/memgraph__memgraph/tools/ci/aggregate_build_tests.py)<br>[tools/ci/build-gssapi.sh](../../../../sources/memgraph__memgraph/tools/ci/build-gssapi.sh)<br>[tools/ci/build-heaptrack.sh](../../../../sources/memgraph__memgraph/tools/ci/build-heaptrack.sh)<br>[tools/ci/build-mgconsole.sh](../../../../sources/memgraph__memgraph/tools/ci/build-mgconsole.sh)<br>[tools/ci/build-pymgclient.sh](../../../../sources/memgraph__memgraph/tools/ci/build-pymgclient.sh)<br>[tools/ci/clean_conan.sh](../../../../sources/memgraph__memgraph/tools/ci/clean_conan.sh)<br>[tools/ci/compute-build-threads.sh](../../../../sources/memgraph__memgraph/tools/ci/compute-build-threads.sh)<br>[tools/ci/container-test-mage.sh](../../../../sources/memgraph__memgraph/tools/ci/container-test-mage.sh) |
| container | 57 | [tools/ci/monitoring/docker-compose.host-network.yml](../../../../sources/memgraph__memgraph/tools/ci/monitoring/docker-compose.host-network.yml)<br>[tools/ci/monitoring/docker-compose.yml](../../../../sources/memgraph__memgraph/tools/ci/monitoring/docker-compose.yml)<br>[tests/stress/standalone/native/deployment/deployment.sh](../../../../sources/memgraph__memgraph/tests/stress/standalone/native/deployment/deployment.sh)<br>[tests/stress/ha/native/deployment/deployment.sh](../../../../sources/memgraph__memgraph/tests/stress/ha/native/deployment/deployment.sh)<br>[tests/stress/ha/eks/deployment/cluster.yaml](../../../../sources/memgraph__memgraph/tests/stress/ha/eks/deployment/cluster.yaml)<br>[tests/stress/ha/eks/deployment/deployment.sh](../../../../sources/memgraph__memgraph/tests/stress/ha/eks/deployment/deployment.sh)<br>[tests/stress/ha/eks/deployment/gp3-sc.yaml](../../../../sources/memgraph__memgraph/tests/stress/ha/eks/deployment/gp3-sc.yaml)<br>[tests/stress/ha/eks/deployment/monitoring-service.yaml.tmpl](../../../../sources/memgraph__memgraph/tests/stress/ha/eks/deployment/monitoring-service.yaml.tmpl) |
| instruction | 0 | not obvious |
| docs | 31 | [README.md](../../../../sources/memgraph__memgraph/README.md)<br>[tools/ci/query_module_count/readme.md](../../../../sources/memgraph__memgraph/tools/ci/query_module_count/readme.md)<br>[tools/ci/monitoring/README.md](../../../../sources/memgraph__memgraph/tools/ci/monitoring/README.md)<br>[tests/stress/README.md](../../../../sources/memgraph__memgraph/tests/stress/README.md)<br>[tests/query_modules/README.md](../../../../sources/memgraph__memgraph/tests/query_modules/README.md)<br>[tests/mgbench/README.md](../../../../sources/memgraph__memgraph/tests/mgbench/README.md)<br>[tests/manual/js/transaction_timeout/README.md](../../../../sources/memgraph__memgraph/tests/manual/js/transaction_timeout/README.md)<br>[tests/jepsen/README.md](../../../../sources/memgraph__memgraph/tests/jepsen/README.md) |
| config | 26 | [pyproject.toml](../../../../sources/memgraph__memgraph/pyproject.toml)<br>[requirements.txt](../../../../sources/memgraph__memgraph/requirements.txt)<br>[tools/requirements.txt](../../../../sources/memgraph__memgraph/tools/requirements.txt)<br>[tools/bench-graph-client/requirements.txt](../../../../sources/memgraph__memgraph/tools/bench-graph-client/requirements.txt)<br>[tests/requirements.txt](../../../../sources/memgraph__memgraph/tests/requirements.txt)<br>[tests/query_modules/requirements.txt](../../../../sources/memgraph__memgraph/tests/query_modules/requirements.txt)<br>[tests/manual/js/transaction_timeout/package.json](../../../../sources/memgraph__memgraph/tests/manual/js/transaction_timeout/package.json)<br>[tests/integration/ldap/requirements.txt](../../../../sources/memgraph__memgraph/tests/integration/ldap/requirements.txt) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 4188 | [tools/analyze_ftime_trace.py](../../../../sources/memgraph__memgraph/tools/analyze_ftime_trace.py)<br>[tools/run_vector_search_index_benchmark.bash](../../../../sources/memgraph__memgraph/tools/run_vector_search_index_benchmark.bash)<br>[tools/tests/client/output_tabular/escaping.txt](../../../../sources/memgraph__memgraph/tools/tests/client/output_tabular/escaping.txt)<br>[tools/tests/client/output_tabular/multiline_query_with_comments.txt](../../../../sources/memgraph__memgraph/tools/tests/client/output_tabular/multiline_query_with_comments.txt)<br>[tools/tests/client/output_tabular/multiline_query.txt](../../../../sources/memgraph__memgraph/tools/tests/client/output_tabular/multiline_query.txt)<br>[tools/tests/client/output_tabular/multiple_columns.txt](../../../../sources/memgraph__memgraph/tools/tests/client/output_tabular/multiple_columns.txt) |
| CI workflows | 114 | [tools/ci/aggregate_build_tests.py](../../../../sources/memgraph__memgraph/tools/ci/aggregate_build_tests.py)<br>[tools/ci/build-gssapi.sh](../../../../sources/memgraph__memgraph/tools/ci/build-gssapi.sh)<br>[tools/ci/build-heaptrack.sh](../../../../sources/memgraph__memgraph/tools/ci/build-heaptrack.sh)<br>[tools/ci/build-mgconsole.sh](../../../../sources/memgraph__memgraph/tools/ci/build-mgconsole.sh)<br>[tools/ci/build-pymgclient.sh](../../../../sources/memgraph__memgraph/tools/ci/build-pymgclient.sh)<br>[tools/ci/clean_conan.sh](../../../../sources/memgraph__memgraph/tools/ci/clean_conan.sh) |
| Containers / deploy | 57 | [tools/ci/monitoring/docker-compose.host-network.yml](../../../../sources/memgraph__memgraph/tools/ci/monitoring/docker-compose.host-network.yml)<br>[tools/ci/monitoring/docker-compose.yml](../../../../sources/memgraph__memgraph/tools/ci/monitoring/docker-compose.yml)<br>[tests/stress/standalone/native/deployment/deployment.sh](../../../../sources/memgraph__memgraph/tests/stress/standalone/native/deployment/deployment.sh)<br>[tests/stress/ha/native/deployment/deployment.sh](../../../../sources/memgraph__memgraph/tests/stress/ha/native/deployment/deployment.sh)<br>[tests/stress/ha/eks/deployment/cluster.yaml](../../../../sources/memgraph__memgraph/tests/stress/ha/eks/deployment/cluster.yaml)<br>[tests/stress/ha/eks/deployment/deployment.sh](../../../../sources/memgraph__memgraph/tests/stress/ha/eks/deployment/deployment.sh) |
| Security / policy | 97 | [tests/unit/auth_checker.cpp](../../../../sources/memgraph__memgraph/tests/unit/auth_checker.cpp)<br>[tests/unit/auth_handler.cpp](../../../../sources/memgraph__memgraph/tests/unit/auth_handler.cpp)<br>[tests/unit/auth_models_comm.cpp](../../../../sources/memgraph__memgraph/tests/unit/auth_models_comm.cpp)<br>[tests/unit/auth_models.cpp](../../../../sources/memgraph__memgraph/tests/unit/auth_models.cpp)<br>[tests/unit/auth.cpp](../../../../sources/memgraph__memgraph/tests/unit/auth.cpp)<br>[tests/unit/auth_kvstore/v3/000004.log](../../../../sources/memgraph__memgraph/tests/unit/auth_kvstore/v3/000004.log) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | many top-level directories; module boundaries need review |
| operation | none |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `tools/memory_usage`, `tools/run_vector_search_index_benchmark.bash`, `tools/ci/monitoring/manifests/vector.yaml.tmpl`.
2. Trace execution through entrypoints: `tools/bench-graph-client/main.py`, `tests/integration/telemetry/server.py`, `tests/integration/license_info/server.py`.
3. Map agent/tool runtime through: `tools/analyze_ftime_trace.py`, `tools/analyze_rpc_calls`, `tools/coverage_binary`.
4. Inspect retrieval/memory/indexing through: `tools/memory_usage`, `tools/run_vector_search_index_benchmark.bash`, `tools/ci/monitoring/manifests/vector.yaml.tmpl`.
5. Verify behavior through test/eval files: `tools/analyze_ftime_trace.py`, `tools/run_vector_search_index_benchmark.bash`, `tools/tests/client/output_tabular/escaping.txt`.

## Existing Repository Insight

LLM 위키/RAG/지식베이스 관점에서 High performance open source in memory graph database for GraphRAG, AI memory, agentic AI, and real time graph analytics. 핵심 구조 신호는 C++, pyproject.toml, requirements.txt, README.md, LICENSE, tests이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 knowledge/RAG pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
