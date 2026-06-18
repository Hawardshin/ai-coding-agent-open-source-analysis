# milvus-io/milvus 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

Local clone structure analysis: 5254 files, 788 directories.

## 요약

- 조사 단위: `sources/milvus-io__milvus` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 5,254 files, 788 directories, depth score 122, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

데이터/벡터 플랫폼 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 retrieval=tests/restful_client_v2/testcases/test_embedding_rerank_function.py, tests/restful_client_v2/testcases/test_index_operation.py, tests/restful_client_v2/testcases/test_vector_operations.py이고, 의존성 단서는 milvus, opentelemetry, prometheus, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | milvus-io/milvus |
| 주제 | 데이터/벡터 플랫폼 / 데이터/벡터 플랫폼 |
| Region | global |
| Language | Go |
| Stars | 44821 |
| Forks | 4072 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 심층 소스+보고서 |
| 소스 | [sources/milvus-io__milvus](../../../../sources/milvus-io__milvus) |
| 기존 보고서 | [reports/global-trending/repositories/milvus-io__milvus.md](../../../global-trending/repositories/milvus-io__milvus.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 5254 / 788 |
| 관측 최대 깊이 | 10 |
| 상위 디렉터리 | .github, ci, client, cmd, configs, deployments, docs, examples, githooks, internal, pkg, scripts, tests, tools |
| 상위 확장자 | .go: 3240, .cpp: 413, .h: 387, .py: 306, .yaml: 175, .md: 165, (none): 104, .rs: 86, .sh: 85, .png: 67, .txt: 61, .yml: 35 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
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


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
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


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | milvus |
| modelRuntime | 없음 |
| webRuntime | 없음 |
| developerSurface | 없음 |
| observability | opentelemetry, prometheus |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 22 | [pkg/streaming/util/message/codegen/main.go](../../../../sources/milvus-io__milvus/pkg/streaming/util/message/codegen/main.go)<br>[internal/util/streamingutil/service/interceptor/server.go](../../../../sources/milvus-io__milvus/internal/util/streamingutil/service/interceptor/server.go)<br>[internal/streamingnode/server/server.go](../../../../sources/milvus-io__milvus/internal/streamingnode/server/server.go)<br>[internal/streamingcoord/server/server.go](../../../../sources/milvus-io__milvus/internal/streamingcoord/server/server.go)<br>[internal/querynodev2/server.go](../../../../sources/milvus-io__milvus/internal/querynodev2/server.go)<br>[internal/querycoordv2/server.go](../../../../sources/milvus-io__milvus/internal/querycoordv2/server.go)<br>[internal/http/server.go](../../../../sources/milvus-io__milvus/internal/http/server.go)<br>[internal/datacoord/server.go](../../../../sources/milvus-io__milvus/internal/datacoord/server.go) |
| agentRuntime | 121 | [tools/mgit.py](../../../../sources/milvus-io__milvus/tools/mgit.py)<br>[tools/README.md](../../../../sources/milvus-io__milvus/tools/README.md)<br>[tools/test_mgit_design_doc.py](../../../../sources/milvus-io__milvus/tools/test_mgit_design_doc.py)<br>[tools/check/revive.toml](../../../../sources/milvus-io__milvus/tools/check/revive.toml)<br>[tests/python_client/chaos/scripts/workflow_analyse.py](../../../../sources/milvus-io__milvus/tests/python_client/chaos/scripts/workflow_analyse.py)<br>[tests/python_client/chaos/chaos_objects/memory_stress/chaos_datanode_memory_stress.yaml](../../../../sources/milvus-io__milvus/tests/python_client/chaos/chaos_objects/memory_stress/chaos_datanode_memory_stress.yaml)<br>[tests/python_client/chaos/chaos_objects/memory_stress/chaos_etcd_memory_stress.yaml](../../../../sources/milvus-io__milvus/tests/python_client/chaos/chaos_objects/memory_stress/chaos_etcd_memory_stress.yaml)<br>[tests/python_client/chaos/chaos_objects/memory_stress/chaos_indexnode_memory_stress.yaml](../../../../sources/milvus-io__milvus/tests/python_client/chaos/chaos_objects/memory_stress/chaos_indexnode_memory_stress.yaml) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 355 | [tests/restful_client_v2/testcases/test_embedding_rerank_function.py](../../../../sources/milvus-io__milvus/tests/restful_client_v2/testcases/test_embedding_rerank_function.py)<br>[tests/restful_client_v2/testcases/test_index_operation.py](../../../../sources/milvus-io__milvus/tests/restful_client_v2/testcases/test_index_operation.py)<br>[tests/restful_client_v2/testcases/test_vector_operations.py](../../../../sources/milvus-io__milvus/tests/restful_client_v2/testcases/test_vector_operations.py)<br>[tests/restful_client/testcases/test_vector_operations.py](../../../../sources/milvus-io__milvus/tests/restful_client/testcases/test_vector_operations.py)<br>[tests/python_client/testcases/test_index.py](../../../../sources/milvus-io__milvus/tests/python_client/testcases/test_index.py)<br>[tests/python_client/testcases/test_text_embedding_function_e2e.py](../../../../sources/milvus-io__milvus/tests/python_client/testcases/test_text_embedding_function_e2e.py)<br>[tests/python_client/testcases/async_milvus_client/test_index_async.py](../../../../sources/milvus-io__milvus/tests/python_client/testcases/async_milvus_client/test_index_async.py)<br>[tests/python_client/scale/test_index_node_scale.py](../../../../sources/milvus-io__milvus/tests/python_client/scale/test_index_node_scale.py) |
| spec | 121 | [tools/test_mgit_design_doc.py](../../../../sources/milvus-io__milvus/tools/test_mgit_design_doc.py)<br>[tests/restful_client_v2/requirements.txt](../../../../sources/milvus-io__milvus/tests/restful_client_v2/requirements.txt)<br>[tests/restful_client/requirements.txt](../../../../sources/milvus-io__milvus/tests/restful_client/requirements.txt)<br>[tests/python_client/requirements.txt](../../../../sources/milvus-io__milvus/tests/python_client/requirements.txt)<br>[tests/python_client/deploy/requirements.txt](../../../../sources/milvus-io__milvus/tests/python_client/deploy/requirements.txt)<br>[tests/python_client/data_verify/requirements.txt](../../../../sources/milvus-io__milvus/tests/python_client/data_verify/requirements.txt)<br>[tests/python_client/chaos/requirements.txt](../../../../sources/milvus-io__milvus/tests/python_client/chaos/requirements.txt)<br>[tests/go_client/requirements.txt](../../../../sources/milvus-io__milvus/tests/go_client/requirements.txt) |
| eval | 1961 | [tools/test_mgit_design_doc.py](../../../../sources/milvus-io__milvus/tools/test_mgit_design_doc.py)<br>[tests/.python-version](../../../../sources/milvus-io__milvus/tests/.python-version)<br>[tests/Makefile](../../../../sources/milvus-io__milvus/tests/Makefile)<br>[tests/OWNERS](../../../../sources/milvus-io__milvus/tests/OWNERS)<br>[tests/README_CN.md](../../../../sources/milvus-io__milvus/tests/README_CN.md)<br>[tests/README.md](../../../../sources/milvus-io__milvus/tests/README.md)<br>[tests/ruff.toml](../../../../sources/milvus-io__milvus/tests/ruff.toml)<br>[tests/scripts/breakdown_rolling_update.py](../../../../sources/milvus-io__milvus/tests/scripts/breakdown_rolling_update.py) |
| security | 79 | [tests/python_client/milvus_client/test_milvus_client_rbac.py](../../../../sources/milvus-io__milvus/tests/python_client/milvus_client/test_milvus_client_rbac.py)<br>[tests/python_client/cdc/testcases/test_rbac.py](../../../../sources/milvus-io__milvus/tests/python_client/cdc/testcases/test_rbac.py)<br>[tests/integration/rbac/privilege_group_test.go](../../../../sources/milvus-io__milvus/tests/integration/rbac/privilege_group_test.go)<br>[tests/integration/rbac/rbac_alias_test.go](../../../../sources/milvus-io__milvus/tests/integration/rbac/rbac_alias_test.go)<br>[tests/integration/rbac/rbac_backup_test.go](../../../../sources/milvus-io__milvus/tests/integration/rbac/rbac_backup_test.go)<br>[tests/integration/rbac/rbac_basic_test.go](../../../../sources/milvus-io__milvus/tests/integration/rbac/rbac_basic_test.go)<br>[tests/integration/rbac/rbac_grant_cleanup_test.go](../../../../sources/milvus-io__milvus/tests/integration/rbac/rbac_grant_cleanup_test.go)<br>[tests/go_client/testcases/advcases/rbac_test.go](../../../../sources/milvus-io__milvus/tests/go_client/testcases/advcases/rbac_test.go) |
| ci | 47 | [tests/scripts/values/ci/nightly-one-pod.yaml](../../../../sources/milvus-io__milvus/tests/scripts/values/ci/nightly-one-pod.yaml)<br>[tests/scripts/values/ci/nightly.yaml](../../../../sources/milvus-io__milvus/tests/scripts/values/ci/nightly.yaml)<br>[tests/scripts/values/ci/pr-4am.yaml](../../../../sources/milvus-io__milvus/tests/scripts/values/ci/pr-4am.yaml)<br>[tests/scripts/values/ci/pr-arm.yaml](../../../../sources/milvus-io__milvus/tests/scripts/values/ci/pr-arm.yaml)<br>[tests/scripts/values/ci/pr-gpu.yaml](../../../../sources/milvus-io__milvus/tests/scripts/values/ci/pr-gpu.yaml)<br>[tests/scripts/values/ci/pr.yaml](../../../../sources/milvus-io__milvus/tests/scripts/values/ci/pr.yaml)<br>[ci/jenkins/MetaMigrationBuilder.groovy](../../../../sources/milvus-io__milvus/ci/jenkins/MetaMigrationBuilder.groovy)<br>[ci/jenkins/Nightly.groovy](../../../../sources/milvus-io__milvus/ci/jenkins/Nightly.groovy) |
| container | 40 | [docker-compose.yml](../../../../sources/milvus-io__milvus/docker-compose.yml)<br>[tests/python_client/Dockerfile](../../../../sources/milvus-io__milvus/tests/python_client/Dockerfile)<br>[tests/python_client/deploy/__init__.py](../../../../sources/milvus-io__milvus/tests/python_client/deploy/__init__.py)<br>[tests/python_client/deploy/base.py](../../../../sources/milvus-io__milvus/tests/python_client/deploy/base.py)<br>[tests/python_client/deploy/check_healthy.sh](../../../../sources/milvus-io__milvus/tests/python_client/deploy/check_healthy.sh)<br>[tests/python_client/deploy/cluster-values.yaml](../../../../sources/milvus-io__milvus/tests/python_client/deploy/cluster-values.yaml)<br>[tests/python_client/deploy/common.py](../../../../sources/milvus-io__milvus/tests/python_client/deploy/common.py)<br>[tests/python_client/deploy/conftest.py](../../../../sources/milvus-io__milvus/tests/python_client/deploy/conftest.py) |
| instruction | 1 | [CLAUDE.md](../../../../sources/milvus-io__milvus/CLAUDE.md) |
| docs | 235 | [README_CN.md](../../../../sources/milvus-io__milvus/README_CN.md)<br>[README.md](../../../../sources/milvus-io__milvus/README.md)<br>[tools/README.md](../../../../sources/milvus-io__milvus/tools/README.md)<br>[tests/README_CN.md](../../../../sources/milvus-io__milvus/tests/README_CN.md)<br>[tests/README.md](../../../../sources/milvus-io__milvus/tests/README.md)<br>[tests/restful_client_v2/README.md](../../../../sources/milvus-io__milvus/tests/restful_client_v2/README.md)<br>[tests/restful_client/README.md](../../../../sources/milvus-io__milvus/tests/restful_client/README.md)<br>[tests/python_client/README_CN.md](../../../../sources/milvus-io__milvus/tests/python_client/README_CN.md) |
| config | 21 | [go.mod](../../../../sources/milvus-io__milvus/go.mod)<br>[Makefile](../../../../sources/milvus-io__milvus/Makefile)<br>[tests/Makefile](../../../../sources/milvus-io__milvus/tests/Makefile)<br>[tests/restful_client_v2/requirements.txt](../../../../sources/milvus-io__milvus/tests/restful_client_v2/requirements.txt)<br>[tests/restful_client/requirements.txt](../../../../sources/milvus-io__milvus/tests/restful_client/requirements.txt)<br>[tests/python_client/requirements.txt](../../../../sources/milvus-io__milvus/tests/python_client/requirements.txt)<br>[tests/python_client/deploy/requirements.txt](../../../../sources/milvus-io__milvus/tests/python_client/deploy/requirements.txt)<br>[tests/python_client/data_verify/requirements.txt](../../../../sources/milvus-io__milvus/tests/python_client/data_verify/requirements.txt) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 1961 | [tools/test_mgit_design_doc.py](../../../../sources/milvus-io__milvus/tools/test_mgit_design_doc.py)<br>[tests/.python-version](../../../../sources/milvus-io__milvus/tests/.python-version)<br>[tests/Makefile](../../../../sources/milvus-io__milvus/tests/Makefile)<br>[tests/OWNERS](../../../../sources/milvus-io__milvus/tests/OWNERS)<br>[tests/README_CN.md](../../../../sources/milvus-io__milvus/tests/README_CN.md)<br>[tests/README.md](../../../../sources/milvus-io__milvus/tests/README.md) |
| CI workflow | 47 | [tests/scripts/values/ci/nightly-one-pod.yaml](../../../../sources/milvus-io__milvus/tests/scripts/values/ci/nightly-one-pod.yaml)<br>[tests/scripts/values/ci/nightly.yaml](../../../../sources/milvus-io__milvus/tests/scripts/values/ci/nightly.yaml)<br>[tests/scripts/values/ci/pr-4am.yaml](../../../../sources/milvus-io__milvus/tests/scripts/values/ci/pr-4am.yaml)<br>[tests/scripts/values/ci/pr-arm.yaml](../../../../sources/milvus-io__milvus/tests/scripts/values/ci/pr-arm.yaml)<br>[tests/scripts/values/ci/pr-gpu.yaml](../../../../sources/milvus-io__milvus/tests/scripts/values/ci/pr-gpu.yaml)<br>[tests/scripts/values/ci/pr.yaml](../../../../sources/milvus-io__milvus/tests/scripts/values/ci/pr.yaml) |
| 컨테이너/배포 | 40 | [docker-compose.yml](../../../../sources/milvus-io__milvus/docker-compose.yml)<br>[tests/python_client/Dockerfile](../../../../sources/milvus-io__milvus/tests/python_client/Dockerfile)<br>[tests/python_client/deploy/__init__.py](../../../../sources/milvus-io__milvus/tests/python_client/deploy/__init__.py)<br>[tests/python_client/deploy/base.py](../../../../sources/milvus-io__milvus/tests/python_client/deploy/base.py)<br>[tests/python_client/deploy/check_healthy.sh](../../../../sources/milvus-io__milvus/tests/python_client/deploy/check_healthy.sh)<br>[tests/python_client/deploy/cluster-values.yaml](../../../../sources/milvus-io__milvus/tests/python_client/deploy/cluster-values.yaml) |
| 보안/정책 | 79 | [tests/python_client/milvus_client/test_milvus_client_rbac.py](../../../../sources/milvus-io__milvus/tests/python_client/milvus_client/test_milvus_client_rbac.py)<br>[tests/python_client/cdc/testcases/test_rbac.py](../../../../sources/milvus-io__milvus/tests/python_client/cdc/testcases/test_rbac.py)<br>[tests/integration/rbac/privilege_group_test.go](../../../../sources/milvus-io__milvus/tests/integration/rbac/privilege_group_test.go)<br>[tests/integration/rbac/rbac_alias_test.go](../../../../sources/milvus-io__milvus/tests/integration/rbac/rbac_alias_test.go)<br>[tests/integration/rbac/rbac_backup_test.go](../../../../sources/milvus-io__milvus/tests/integration/rbac/rbac_backup_test.go)<br>[tests/integration/rbac/rbac_basic_test.go](../../../../sources/milvus-io__milvus/tests/integration/rbac/rbac_basic_test.go) |
| 에이전트 지시문 | 1 | [CLAUDE.md](../../../../sources/milvus-io__milvus/CLAUDE.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `tests/restful_client_v2/testcases/test_embedding_rerank_function.py`, `tests/restful_client_v2/testcases/test_index_operation.py`, `tests/restful_client_v2/testcases/test_vector_operations.py`.
2. entrypoint를 따라 실행 흐름 확인: `pkg/streaming/util/message/codegen/main.go`, `internal/util/streamingutil/service/interceptor/server.go`, `internal/streamingnode/server/server.go`.
3. agent/tool runtime 매핑: `tools/mgit.py`, `tools/README.md`, `tools/test_mgit_design_doc.py`.
4. retrieval/memory/indexing 확인: `tests/restful_client_v2/testcases/test_embedding_rerank_function.py`, `tests/restful_client_v2/testcases/test_index_operation.py`, `tests/restful_client_v2/testcases/test_vector_operations.py`.
5. test/eval 파일로 동작 검증: `tools/test_mgit_design_doc.py`, `tests/.python-version`, `tests/Makefile`.

## 기존 레포 인사이트

데이터/벡터 플랫폼 관점에서 Local clone structure analysis 5254 files, 788 directories.. 핵심 구조 신호는 Go, go.mod, docker-compose.yml, Makefile, README.md, CLAUDE.md이며, 심층 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 데이터/벡터 플랫폼 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 라이선스 메타데이터 없음입니다.
