# milvus-io/milvus Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Local clone structure analysis: 5254 files, 788 directories.

## 요약

- 조사 단위: `sources/milvus-io__milvus` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 5,254 files, 788 directories, depth score 134, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

데이터/벡터 플랫폼 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 retrieval=tests/restful_client_v2/testcases/test_embedding_rerank_function.py, tests/restful_client_v2/testcases/test_index_operation.py, tests/restful_client_v2/testcases/test_vector_operations.py이고, 의존성 단서는 milvus, opentelemetry, prometheus, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | milvus-io/milvus |
| Topic | Data and Vector Platforms / 데이터/벡터 플랫폼 |
| Region | global |
| Language | Go |
| Stars | 44821 |
| Forks | 4072 |
| License | none |
| Maturity | high-signal |
| Evidence | deep-source+report |
| Source | [sources/milvus-io__milvus](../../../../sources/milvus-io__milvus) |
| Existing report | [reports/global-trending/repositories/milvus-io__milvus.md](../../../global-trending/repositories/milvus-io__milvus.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 5254 / 788 |
| Max observed depth | 10 |
| Top directories | .github, ci, client, cmd, configs, deployments, docs, examples, githooks, internal, pkg, scripts, tests, tools |
| Top extensions | .go: 3240, .cpp: 413, .h: 387, .py: 306, .yaml: 175, .md: 165, (none): 104, .rs: 86, .sh: 85, .png: 67, .txt: 61, .yml: 35 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 158 |
| docs | documentation surface | 37 |
| cmd/tools | cmd workspace | 8 |
| client | source boundary | 3 |
| examples/telemetry_demo | examples workspace | 2 |
| examples/telemetry_e2e_test | examples workspace | 2 |
| .github | ci surface | 1 |
| ci | ci surface | 1 |
| cmd | source boundary | 1 |
| cmd/main.go | cmd workspace | 1 |
| configs | top-level component | 1 |
| deployments | deployment surface | 1 |
| examples | top-level component | 1 |
| githooks | top-level component | 1 |
| internal | top-level component | 1 |
| pkg | top-level component | 1 |
| scripts | top-level component | 1 |
| tools | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | Makefile | milvus | make milvus |
| build | Makefile | build-go | make build-go |
| utility | Makefile | milvus-gpu | make milvus-gpu |
| build | Makefile | get-build-deps | make get-build-deps |
| utility | Makefile | getdeps | make getdeps |
| utility | Makefile | get-proto-deps | make get-proto-deps |
| quality | Makefile | cppcheck | make cppcheck |
| quality | Makefile | rustfmt | make rustfmt |
| quality | Makefile | rustcheck | make rustcheck |
| quality | Makefile | fmt | make fmt |
| quality | Makefile | lint-fix | make lint-fix |
| quality | Makefile | static-check | make static-check |
| utility | Makefile | verifiers | make verifiers |
| utility | Makefile | binlog | make binlog |
| utility | Makefile | meta-migration | make meta-migration |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | milvus |
| modelRuntime | none |
| webRuntime | none |
| developerSurface | none |
| observability | opentelemetry, prometheus |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| retrieval | [tests/restful_client_v2/testcases/test_embedding_rerank_function.py](../../../../sources/milvus-io__milvus/tests/restful_client_v2/testcases/test_embedding_rerank_function.py) | retrieval signal |
| retrieval | [tests/restful_client_v2/testcases/test_index_operation.py](../../../../sources/milvus-io__milvus/tests/restful_client_v2/testcases/test_index_operation.py) | retrieval signal |
| retrieval | [tests/restful_client_v2/testcases/test_vector_operations.py](../../../../sources/milvus-io__milvus/tests/restful_client_v2/testcases/test_vector_operations.py) | retrieval signal |
| retrieval | [tests/restful_client/testcases/test_vector_operations.py](../../../../sources/milvus-io__milvus/tests/restful_client/testcases/test_vector_operations.py) | retrieval signal |
| entrypoints | [pkg/streaming/util/message/codegen/main.go](../../../../sources/milvus-io__milvus/pkg/streaming/util/message/codegen/main.go) | entrypoints signal |
| entrypoints | [internal/util/streamingutil/service/interceptor/server.go](../../../../sources/milvus-io__milvus/internal/util/streamingutil/service/interceptor/server.go) | entrypoints signal |
| entrypoints | [internal/streamingnode/server/server.go](../../../../sources/milvus-io__milvus/internal/streamingnode/server/server.go) | entrypoints signal |
| entrypoints | [internal/streamingcoord/server/server.go](../../../../sources/milvus-io__milvus/internal/streamingcoord/server/server.go) | entrypoints signal |
| container | [docker-compose.yml](../../../../sources/milvus-io__milvus/docker-compose.yml) | container signal |
| container | [tests/python_client/Dockerfile](../../../../sources/milvus-io__milvus/tests/python_client/Dockerfile) | container signal |
| container | [tests/python_client/deploy/__init__.py](../../../../sources/milvus-io__milvus/tests/python_client/deploy/__init__.py) | container signal |
| container | [tests/python_client/deploy/base.py](../../../../sources/milvus-io__milvus/tests/python_client/deploy/base.py) | container signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 22 | [pkg/streaming/util/message/codegen/main.go](../../../../sources/milvus-io__milvus/pkg/streaming/util/message/codegen/main.go)<br>[internal/util/streamingutil/service/interceptor/server.go](../../../../sources/milvus-io__milvus/internal/util/streamingutil/service/interceptor/server.go)<br>[internal/streamingnode/server/server.go](../../../../sources/milvus-io__milvus/internal/streamingnode/server/server.go)<br>[internal/streamingcoord/server/server.go](../../../../sources/milvus-io__milvus/internal/streamingcoord/server/server.go)<br>[internal/querynodev2/server.go](../../../../sources/milvus-io__milvus/internal/querynodev2/server.go)<br>[internal/querycoordv2/server.go](../../../../sources/milvus-io__milvus/internal/querycoordv2/server.go)<br>[internal/http/server.go](../../../../sources/milvus-io__milvus/internal/http/server.go)<br>[internal/datacoord/server.go](../../../../sources/milvus-io__milvus/internal/datacoord/server.go) |
| agentRuntime | 121 | [tools/mgit.py](../../../../sources/milvus-io__milvus/tools/mgit.py)<br>[tools/README.md](../../../../sources/milvus-io__milvus/tools/README.md)<br>[tools/test_mgit_design_doc.py](../../../../sources/milvus-io__milvus/tools/test_mgit_design_doc.py)<br>[tools/check/revive.toml](../../../../sources/milvus-io__milvus/tools/check/revive.toml)<br>[tests/python_client/chaos/scripts/workflow_analyse.py](../../../../sources/milvus-io__milvus/tests/python_client/chaos/scripts/workflow_analyse.py)<br>[tests/python_client/chaos/chaos_objects/memory_stress/chaos_datanode_memory_stress.yaml](../../../../sources/milvus-io__milvus/tests/python_client/chaos/chaos_objects/memory_stress/chaos_datanode_memory_stress.yaml)<br>[tests/python_client/chaos/chaos_objects/memory_stress/chaos_etcd_memory_stress.yaml](../../../../sources/milvus-io__milvus/tests/python_client/chaos/chaos_objects/memory_stress/chaos_etcd_memory_stress.yaml)<br>[tests/python_client/chaos/chaos_objects/memory_stress/chaos_indexnode_memory_stress.yaml](../../../../sources/milvus-io__milvus/tests/python_client/chaos/chaos_objects/memory_stress/chaos_indexnode_memory_stress.yaml) |
| mcp | 0 | not obvious |
| retrieval | 355 | [tests/restful_client_v2/testcases/test_embedding_rerank_function.py](../../../../sources/milvus-io__milvus/tests/restful_client_v2/testcases/test_embedding_rerank_function.py)<br>[tests/restful_client_v2/testcases/test_index_operation.py](../../../../sources/milvus-io__milvus/tests/restful_client_v2/testcases/test_index_operation.py)<br>[tests/restful_client_v2/testcases/test_vector_operations.py](../../../../sources/milvus-io__milvus/tests/restful_client_v2/testcases/test_vector_operations.py)<br>[tests/restful_client/testcases/test_vector_operations.py](../../../../sources/milvus-io__milvus/tests/restful_client/testcases/test_vector_operations.py)<br>[tests/python_client/testcases/test_index.py](../../../../sources/milvus-io__milvus/tests/python_client/testcases/test_index.py)<br>[tests/python_client/testcases/test_text_embedding_function_e2e.py](../../../../sources/milvus-io__milvus/tests/python_client/testcases/test_text_embedding_function_e2e.py)<br>[tests/python_client/testcases/async_milvus_client/test_index_async.py](../../../../sources/milvus-io__milvus/tests/python_client/testcases/async_milvus_client/test_index_async.py)<br>[tests/python_client/scale/test_index_node_scale.py](../../../../sources/milvus-io__milvus/tests/python_client/scale/test_index_node_scale.py) |
| spec | 121 | [tools/test_mgit_design_doc.py](../../../../sources/milvus-io__milvus/tools/test_mgit_design_doc.py)<br>[tests/restful_client_v2/requirements.txt](../../../../sources/milvus-io__milvus/tests/restful_client_v2/requirements.txt)<br>[tests/restful_client/requirements.txt](../../../../sources/milvus-io__milvus/tests/restful_client/requirements.txt)<br>[tests/python_client/requirements.txt](../../../../sources/milvus-io__milvus/tests/python_client/requirements.txt)<br>[tests/python_client/deploy/requirements.txt](../../../../sources/milvus-io__milvus/tests/python_client/deploy/requirements.txt)<br>[tests/python_client/data_verify/requirements.txt](../../../../sources/milvus-io__milvus/tests/python_client/data_verify/requirements.txt)<br>[tests/python_client/chaos/requirements.txt](../../../../sources/milvus-io__milvus/tests/python_client/chaos/requirements.txt)<br>[tests/go_client/requirements.txt](../../../../sources/milvus-io__milvus/tests/go_client/requirements.txt) |
| eval | 1961 | [tools/test_mgit_design_doc.py](../../../../sources/milvus-io__milvus/tools/test_mgit_design_doc.py)<br>[tests/.python-version](../../../../sources/milvus-io__milvus/tests/.python-version)<br>[tests/Makefile](../../../../sources/milvus-io__milvus/tests/Makefile)<br>[tests/OWNERS](../../../../sources/milvus-io__milvus/tests/OWNERS)<br>[tests/README_CN.md](../../../../sources/milvus-io__milvus/tests/README_CN.md)<br>[tests/README.md](../../../../sources/milvus-io__milvus/tests/README.md)<br>[tests/ruff.toml](../../../../sources/milvus-io__milvus/tests/ruff.toml)<br>[tests/scripts/breakdown_rolling_update.py](../../../../sources/milvus-io__milvus/tests/scripts/breakdown_rolling_update.py) |
| security | 79 | [tests/python_client/milvus_client/test_milvus_client_rbac.py](../../../../sources/milvus-io__milvus/tests/python_client/milvus_client/test_milvus_client_rbac.py)<br>[tests/python_client/cdc/testcases/test_rbac.py](../../../../sources/milvus-io__milvus/tests/python_client/cdc/testcases/test_rbac.py)<br>[tests/integration/rbac/privilege_group_test.go](../../../../sources/milvus-io__milvus/tests/integration/rbac/privilege_group_test.go)<br>[tests/integration/rbac/rbac_alias_test.go](../../../../sources/milvus-io__milvus/tests/integration/rbac/rbac_alias_test.go)<br>[tests/integration/rbac/rbac_backup_test.go](../../../../sources/milvus-io__milvus/tests/integration/rbac/rbac_backup_test.go)<br>[tests/integration/rbac/rbac_basic_test.go](../../../../sources/milvus-io__milvus/tests/integration/rbac/rbac_basic_test.go)<br>[tests/integration/rbac/rbac_grant_cleanup_test.go](../../../../sources/milvus-io__milvus/tests/integration/rbac/rbac_grant_cleanup_test.go)<br>[tests/go_client/testcases/advcases/rbac_test.go](../../../../sources/milvus-io__milvus/tests/go_client/testcases/advcases/rbac_test.go) |
| ci | 47 | [tests/scripts/values/ci/nightly-one-pod.yaml](../../../../sources/milvus-io__milvus/tests/scripts/values/ci/nightly-one-pod.yaml)<br>[tests/scripts/values/ci/nightly.yaml](../../../../sources/milvus-io__milvus/tests/scripts/values/ci/nightly.yaml)<br>[tests/scripts/values/ci/pr-4am.yaml](../../../../sources/milvus-io__milvus/tests/scripts/values/ci/pr-4am.yaml)<br>[tests/scripts/values/ci/pr-arm.yaml](../../../../sources/milvus-io__milvus/tests/scripts/values/ci/pr-arm.yaml)<br>[tests/scripts/values/ci/pr-gpu.yaml](../../../../sources/milvus-io__milvus/tests/scripts/values/ci/pr-gpu.yaml)<br>[tests/scripts/values/ci/pr.yaml](../../../../sources/milvus-io__milvus/tests/scripts/values/ci/pr.yaml)<br>[ci/jenkins/MetaMigrationBuilder.groovy](../../../../sources/milvus-io__milvus/ci/jenkins/MetaMigrationBuilder.groovy)<br>[ci/jenkins/Nightly.groovy](../../../../sources/milvus-io__milvus/ci/jenkins/Nightly.groovy) |
| container | 40 | [docker-compose.yml](../../../../sources/milvus-io__milvus/docker-compose.yml)<br>[tests/python_client/Dockerfile](../../../../sources/milvus-io__milvus/tests/python_client/Dockerfile)<br>[tests/python_client/deploy/__init__.py](../../../../sources/milvus-io__milvus/tests/python_client/deploy/__init__.py)<br>[tests/python_client/deploy/base.py](../../../../sources/milvus-io__milvus/tests/python_client/deploy/base.py)<br>[tests/python_client/deploy/check_healthy.sh](../../../../sources/milvus-io__milvus/tests/python_client/deploy/check_healthy.sh)<br>[tests/python_client/deploy/cluster-values.yaml](../../../../sources/milvus-io__milvus/tests/python_client/deploy/cluster-values.yaml)<br>[tests/python_client/deploy/common.py](../../../../sources/milvus-io__milvus/tests/python_client/deploy/common.py)<br>[tests/python_client/deploy/conftest.py](../../../../sources/milvus-io__milvus/tests/python_client/deploy/conftest.py) |
| instruction | 1 | [CLAUDE.md](../../../../sources/milvus-io__milvus/CLAUDE.md) |
| docs | 235 | [README_CN.md](../../../../sources/milvus-io__milvus/README_CN.md)<br>[README.md](../../../../sources/milvus-io__milvus/README.md)<br>[tools/README.md](../../../../sources/milvus-io__milvus/tools/README.md)<br>[tests/README_CN.md](../../../../sources/milvus-io__milvus/tests/README_CN.md)<br>[tests/README.md](../../../../sources/milvus-io__milvus/tests/README.md)<br>[tests/restful_client_v2/README.md](../../../../sources/milvus-io__milvus/tests/restful_client_v2/README.md)<br>[tests/restful_client/README.md](../../../../sources/milvus-io__milvus/tests/restful_client/README.md)<br>[tests/python_client/README_CN.md](../../../../sources/milvus-io__milvus/tests/python_client/README_CN.md) |
| config | 21 | [go.mod](../../../../sources/milvus-io__milvus/go.mod)<br>[Makefile](../../../../sources/milvus-io__milvus/Makefile)<br>[tests/Makefile](../../../../sources/milvus-io__milvus/tests/Makefile)<br>[tests/restful_client_v2/requirements.txt](../../../../sources/milvus-io__milvus/tests/restful_client_v2/requirements.txt)<br>[tests/restful_client/requirements.txt](../../../../sources/milvus-io__milvus/tests/restful_client/requirements.txt)<br>[tests/python_client/requirements.txt](../../../../sources/milvus-io__milvus/tests/python_client/requirements.txt)<br>[tests/python_client/deploy/requirements.txt](../../../../sources/milvus-io__milvus/tests/python_client/deploy/requirements.txt)<br>[tests/python_client/data_verify/requirements.txt](../../../../sources/milvus-io__milvus/tests/python_client/data_verify/requirements.txt) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 1961 | [tools/test_mgit_design_doc.py](../../../../sources/milvus-io__milvus/tools/test_mgit_design_doc.py)<br>[tests/.python-version](../../../../sources/milvus-io__milvus/tests/.python-version)<br>[tests/Makefile](../../../../sources/milvus-io__milvus/tests/Makefile)<br>[tests/OWNERS](../../../../sources/milvus-io__milvus/tests/OWNERS)<br>[tests/README_CN.md](../../../../sources/milvus-io__milvus/tests/README_CN.md)<br>[tests/README.md](../../../../sources/milvus-io__milvus/tests/README.md) |
| CI workflows | 47 | [tests/scripts/values/ci/nightly-one-pod.yaml](../../../../sources/milvus-io__milvus/tests/scripts/values/ci/nightly-one-pod.yaml)<br>[tests/scripts/values/ci/nightly.yaml](../../../../sources/milvus-io__milvus/tests/scripts/values/ci/nightly.yaml)<br>[tests/scripts/values/ci/pr-4am.yaml](../../../../sources/milvus-io__milvus/tests/scripts/values/ci/pr-4am.yaml)<br>[tests/scripts/values/ci/pr-arm.yaml](../../../../sources/milvus-io__milvus/tests/scripts/values/ci/pr-arm.yaml)<br>[tests/scripts/values/ci/pr-gpu.yaml](../../../../sources/milvus-io__milvus/tests/scripts/values/ci/pr-gpu.yaml)<br>[tests/scripts/values/ci/pr.yaml](../../../../sources/milvus-io__milvus/tests/scripts/values/ci/pr.yaml) |
| Containers / deploy | 40 | [docker-compose.yml](../../../../sources/milvus-io__milvus/docker-compose.yml)<br>[tests/python_client/Dockerfile](../../../../sources/milvus-io__milvus/tests/python_client/Dockerfile)<br>[tests/python_client/deploy/__init__.py](../../../../sources/milvus-io__milvus/tests/python_client/deploy/__init__.py)<br>[tests/python_client/deploy/base.py](../../../../sources/milvus-io__milvus/tests/python_client/deploy/base.py)<br>[tests/python_client/deploy/check_healthy.sh](../../../../sources/milvus-io__milvus/tests/python_client/deploy/check_healthy.sh)<br>[tests/python_client/deploy/cluster-values.yaml](../../../../sources/milvus-io__milvus/tests/python_client/deploy/cluster-values.yaml) |
| Security / policy | 79 | [tests/python_client/milvus_client/test_milvus_client_rbac.py](../../../../sources/milvus-io__milvus/tests/python_client/milvus_client/test_milvus_client_rbac.py)<br>[tests/python_client/cdc/testcases/test_rbac.py](../../../../sources/milvus-io__milvus/tests/python_client/cdc/testcases/test_rbac.py)<br>[tests/integration/rbac/privilege_group_test.go](../../../../sources/milvus-io__milvus/tests/integration/rbac/privilege_group_test.go)<br>[tests/integration/rbac/rbac_alias_test.go](../../../../sources/milvus-io__milvus/tests/integration/rbac/rbac_alias_test.go)<br>[tests/integration/rbac/rbac_backup_test.go](../../../../sources/milvus-io__milvus/tests/integration/rbac/rbac_backup_test.go)<br>[tests/integration/rbac/rbac_basic_test.go](../../../../sources/milvus-io__milvus/tests/integration/rbac/rbac_basic_test.go) |
| Agent instructions | 1 | [CLAUDE.md](../../../../sources/milvus-io__milvus/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `tests/restful_client_v2/testcases/test_embedding_rerank_function.py`, `tests/restful_client_v2/testcases/test_index_operation.py`, `tests/restful_client_v2/testcases/test_vector_operations.py`.
2. Trace execution through entrypoints: `pkg/streaming/util/message/codegen/main.go`, `internal/util/streamingutil/service/interceptor/server.go`, `internal/streamingnode/server/server.go`.
3. Map agent/tool runtime through: `tools/mgit.py`, `tools/README.md`, `tools/test_mgit_design_doc.py`.
4. Inspect retrieval/memory/indexing through: `tests/restful_client_v2/testcases/test_embedding_rerank_function.py`, `tests/restful_client_v2/testcases/test_index_operation.py`, `tests/restful_client_v2/testcases/test_vector_operations.py`.
5. Verify behavior through test/eval files: `tools/test_mgit_design_doc.py`, `tests/.python-version`, `tests/Makefile`.

## Existing Repository Insight

데이터/벡터 플랫폼 관점에서 Local clone structure analysis 5254 files, 788 directories.. 핵심 구조 신호는 Go, go.mod, docker-compose.yml, Makefile, README.md, CLAUDE.md이며, deep-source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 데이터/벡터 플랫폼 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 license metadata missing입니다.
