# LMCache/LMCache 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

LMCache: Supercharge Your LLM with the Fastest KV Cache Layer

## 요약

- 조사 단위: `sources/LMCache__LMCache` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 1,857 files, 381 directories, depth score 122, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

AI 인프라/서빙 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 entrypoints=operator/cmd/main.go, lmcache/v1/standalone/__main__.py, lmcache/v1/server/__main__.py이고, 의존성 단서는 express, torch, vllm, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | LMCache/LMCache |
| 주제 | AI 인프라/서빙 / AI 인프라/서빙 |
| Region | global |
| Language | Python |
| Stars | 9269 |
| Forks | 1343 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/LMCache__LMCache](../../../../sources/LMCache__LMCache) |
| 기존 보고서 | [reports/global-trending/repositories/LMCache__LMCache.md](../../../global-trending/repositories/LMCache__LMCache.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 1857 / 381 |
| 관측 최대 깊이 | 8 |
| 상위 디렉터리 | .buildkite, .claude, .cursor, .gemini, .github, asset, benchmarks, csrc, docker, docs, examples, lmcache, operator, requirements, rust, setup_extensions, tests, tools |
| 상위 확장자 | .py: 938, .rst: 165, .md: 133, .po: 132, .yaml: 123, .sh: 90, .yml: 52, .go: 50, .cpp: 27, .txt: 25, .h: 22, .png: 19 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 57 |
| docs | documentation surface | 47 |
| examples/kv_cache_reuse | examples workspace | 12 |
| examples/chunk_statistics | examples workspace | 6 |
| examples/disagg_prefill | examples workspace | 3 |
| examples/agents | examples workspace | 2 |
| examples/disagg_prefill_mp | examples workspace | 2 |
| examples/kv_cache_calculator | examples workspace | 2 |
| examples/observability | examples workspace | 2 |
| .github | ci surface | 1 |
| asset | top-level component | 1 |
| benchmarks | validation surface | 1 |
| csrc | source boundary | 1 |
| docker | documentation surface | 1 |
| examples | top-level component | 1 |
| examples/cache_with_configs | examples workspace | 1 |
| examples/frontend | examples workspace | 1 |
| examples/kubernetes | examples workspace | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | pyproject.toml | lmcache | lmcache |
| serve-dev | pyproject.toml | lmcache_server | lmcache_server |
| utility | pyproject.toml | lmcache_controller | lmcache_controller |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | torch, vllm |
| webRuntime | express |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| entrypoints | [operator/cmd/main.go](../../../../sources/LMCache__LMCache/operator/cmd/main.go) | entrypoints signal |
| entrypoints | [lmcache/v1/standalone/__main__.py](../../../../sources/LMCache__LMCache/lmcache/v1/standalone/__main__.py) | entrypoints signal |
| entrypoints | [lmcache/v1/server/__main__.py](../../../../sources/LMCache__LMCache/lmcache/v1/server/__main__.py) | entrypoints signal |
| entrypoints | [lmcache/v1/multiprocess/server.py](../../../../sources/LMCache__LMCache/lmcache/v1/multiprocess/server.py) | entrypoints signal |
| container | [operator/Dockerfile](../../../../sources/LMCache__LMCache/operator/Dockerfile) | container signal |
| container | [examples/observability/docker-compose.yml](../../../../sources/LMCache__LMCache/examples/observability/docker-compose.yml) | container signal |
| container | [examples/kubernetes/health_probe.py](../../../../sources/LMCache__LMCache/examples/kubernetes/health_probe.py) | container signal |
| container | [docker/Dockerfile](../../../../sources/LMCache__LMCache/docker/Dockerfile) | container signal |
| config | [pyproject.toml](../../../../sources/LMCache__LMCache/pyproject.toml) | config signal |
| config | [rust/raw_block/Cargo.toml](../../../../sources/LMCache__LMCache/rust/raw_block/Cargo.toml) | config signal |
| config | [rust/raw_block/pyproject.toml](../../../../sources/LMCache__LMCache/rust/raw_block/pyproject.toml) | config signal |
| config | [requirements/bench.txt](../../../../sources/LMCache__LMCache/requirements/bench.txt) | config signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 13 | [operator/cmd/main.go](../../../../sources/LMCache__LMCache/operator/cmd/main.go)<br>[lmcache/v1/standalone/__main__.py](../../../../sources/LMCache__LMCache/lmcache/v1/standalone/__main__.py)<br>[lmcache/v1/server/__main__.py](../../../../sources/LMCache__LMCache/lmcache/v1/server/__main__.py)<br>[lmcache/v1/multiprocess/server.py](../../../../sources/LMCache__LMCache/lmcache/v1/multiprocess/server.py)<br>[lmcache/v1/mp_coordinator/__main__.py](../../../../sources/LMCache__LMCache/lmcache/v1/mp_coordinator/__main__.py)<br>[lmcache/v1/api_server/__main__.py](../../../../sources/LMCache__LMCache/lmcache/v1/api_server/__main__.py)<br>[lmcache/tools/transfer_channel_benchmark/__main__.py](../../../../sources/LMCache__LMCache/lmcache/tools/transfer_channel_benchmark/__main__.py)<br>[lmcache/tools/mp_status_viewer/__main__.py](../../../../sources/LMCache__LMCache/lmcache/tools/mp_status_viewer/__main__.py) |
| agentRuntime | 62 | [AGENTS.md](../../../../sources/LMCache__LMCache/AGENTS.md)<br>[tools/check_spdx_header.py](../../../../sources/LMCache__LMCache/tools/check_spdx_header.py)<br>[tools/translate_docs_zh.py](../../../../sources/LMCache__LMCache/tools/translate_docs_zh.py)<br>[tests/v1/distributed/memory_manager/__init__.py](../../../../sources/LMCache__LMCache/tests/v1/distributed/memory_manager/__init__.py)<br>[tests/v1/distributed/memory_manager/test_gds_l1_memory_manager.py](../../../../sources/LMCache__LMCache/tests/v1/distributed/memory_manager/test_gds_l1_memory_manager.py)<br>[tests/tools/test_cache_simulator.py](../../../../sources/LMCache__LMCache/tests/tools/test_cache_simulator.py)<br>[tests/tools/test_controller_zmq_benchmark.py](../../../../sources/LMCache__LMCache/tests/tools/test_controller_zmq_benchmark.py)<br>[operator/AGENTS.md](../../../../sources/LMCache__LMCache/operator/AGENTS.md) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 65 | [tests/v1/test_memory_management.py](../../../../sources/LMCache__LMCache/tests/v1/test_memory_management.py)<br>[tests/v1/lookup_client/test_chunk_statistics_lookup_client.py](../../../../sources/LMCache__LMCache/tests/v1/lookup_client/test_chunk_statistics_lookup_client.py)<br>[tests/v1/distributed/test_l1_memory_manager.py](../../../../sources/LMCache__LMCache/tests/v1/distributed/test_l1_memory_manager.py)<br>[tests/v1/distributed/memory_manager/__init__.py](../../../../sources/LMCache__LMCache/tests/v1/distributed/memory_manager/__init__.py)<br>[tests/v1/distributed/memory_manager/test_gds_l1_memory_manager.py](../../../../sources/LMCache__LMCache/tests/v1/distributed/memory_manager/test_gds_l1_memory_manager.py)<br>[lmcache/v1/lazy_memory_allocator.py](../../../../sources/LMCache__LMCache/lmcache/v1/lazy_memory_allocator.py)<br>[lmcache/v1/memory_management.py](../../../../sources/LMCache__LMCache/lmcache/v1/memory_management.py)<br>[lmcache/v1/transfer_channel/mock_memory_channel.py](../../../../sources/LMCache__LMCache/lmcache/v1/transfer_channel/mock_memory_channel.py) |
| spec | 65 | [requirements/bench.txt](../../../../sources/LMCache__LMCache/requirements/bench.txt)<br>[requirements/build.txt](../../../../sources/LMCache__LMCache/requirements/build.txt)<br>[requirements/cli.txt](../../../../sources/LMCache__LMCache/requirements/cli.txt)<br>[requirements/common.txt](../../../../sources/LMCache__LMCache/requirements/common.txt)<br>[requirements/cuda.txt](../../../../sources/LMCache__LMCache/requirements/cuda.txt)<br>[requirements/cuda12_core.txt](../../../../sources/LMCache__LMCache/requirements/cuda12_core.txt)<br>[requirements/cuda13_core.txt](../../../../sources/LMCache__LMCache/requirements/cuda13_core.txt)<br>[requirements/docs.txt](../../../../sources/LMCache__LMCache/requirements/docs.txt) |
| eval | 620 | [tests/__init__.py](../../../../sources/LMCache__LMCache/tests/__init__.py)<br>[tests/aerospike_ce.conf.template](../../../../sources/LMCache__LMCache/tests/aerospike_ce.conf.template)<br>[tests/conftest.py](../../../../sources/LMCache__LMCache/tests/conftest.py)<br>[tests/test_banner.py](../../../../sources/LMCache__LMCache/tests/test_banner.py)<br>[tests/test_observability.py](../../../../sources/LMCache__LMCache/tests/test_observability.py)<br>[tests/test_serde.py](../../../../sources/LMCache__LMCache/tests/test_serde.py)<br>[tests/test_utils.py](../../../../sources/LMCache__LMCache/tests/test_utils.py)<br>[tests/v1/__init__.py](../../../../sources/LMCache__LMCache/tests/v1/__init__.py) |
| security | 39 | [SECURITY.md](../../../../sources/LMCache__LMCache/SECURITY.md)<br>[tests/v1/test_cache_policy.py](../../../../sources/LMCache__LMCache/tests/v1/test_cache_policy.py)<br>[tests/v1/storage_backend/test_audit_connector.py](../../../../sources/LMCache__LMCache/tests/v1/storage_backend/test_audit_connector.py)<br>[tests/v1/distributed/test_isolated_lru_eviction_policy.py](../../../../sources/LMCache__LMCache/tests/v1/distributed/test_isolated_lru_eviction_policy.py)<br>[tests/v1/distributed/test_lru_eviction_policy.py](../../../../sources/LMCache__LMCache/tests/v1/distributed/test_lru_eviction_policy.py)<br>[tests/v1/distributed/test_prefetch_policy.py](../../../../sources/LMCache__LMCache/tests/v1/distributed/test_prefetch_policy.py)<br>[tests/v1/distributed/test_store_policy.py](../../../../sources/LMCache__LMCache/tests/v1/distributed/test_store_policy.py)<br>[setup_extensions/policy.py](../../../../sources/LMCache__LMCache/setup_extensions/policy.py) |
| ci | 31 | [.github/workflows/actionlint.dockerfile](../../../../sources/LMCache__LMCache/.github/workflows/actionlint.dockerfile)<br>[.github/workflows/actionlint.yml](../../../../sources/LMCache__LMCache/.github/workflows/actionlint.yml)<br>[.github/workflows/aerospike_integration.yml](../../../../sources/LMCache__LMCache/.github/workflows/aerospike_integration.yml)<br>[.github/workflows/automerge-labeler.yml](../../../../sources/LMCache__LMCache/.github/workflows/automerge-labeler.yml)<br>[.github/workflows/build_cli_artifacts.yml](../../../../sources/LMCache__LMCache/.github/workflows/build_cli_artifacts.yml)<br>[.github/workflows/build_cpu_artifacts.yml](../../../../sources/LMCache__LMCache/.github/workflows/build_cpu_artifacts.yml)<br>[.github/workflows/build_cu129_artifacts.yml](../../../../sources/LMCache__LMCache/.github/workflows/build_cu129_artifacts.yml)<br>[.github/workflows/build_doc.yml](../../../../sources/LMCache__LMCache/.github/workflows/build_doc.yml) |
| container | 8 | [operator/Dockerfile](../../../../sources/LMCache__LMCache/operator/Dockerfile)<br>[examples/observability/docker-compose.yml](../../../../sources/LMCache__LMCache/examples/observability/docker-compose.yml)<br>[examples/kubernetes/health_probe.py](../../../../sources/LMCache__LMCache/examples/kubernetes/health_probe.py)<br>[docker/Dockerfile](../../../../sources/LMCache__LMCache/docker/Dockerfile)<br>[docker/Dockerfile.lightweight](../../../../sources/LMCache__LMCache/docker/Dockerfile.lightweight)<br>[docker/Dockerfile.rocm](../../../../sources/LMCache__LMCache/docker/Dockerfile.rocm)<br>[docker/Dockerfile.rocm-lightweight](../../../../sources/LMCache__LMCache/docker/Dockerfile.rocm-lightweight)<br>[docker/Dockerfile.standalone](../../../../sources/LMCache__LMCache/docker/Dockerfile.standalone) |
| instruction | 3 | [AGENTS.md](../../../../sources/LMCache__LMCache/AGENTS.md)<br>[CLAUDE.md](../../../../sources/LMCache__LMCache/CLAUDE.md)<br>[operator/AGENTS.md](../../../../sources/LMCache__LMCache/operator/AGENTS.md) |
| docs | 428 | [README.md](../../../../sources/LMCache__LMCache/README.md)<br>[tests/disagg/README.md](../../../../sources/LMCache__LMCache/tests/disagg/README.md)<br>[rust/raw_block/README.md](../../../../sources/LMCache__LMCache/rust/raw_block/README.md)<br>[operator/README.md](../../../../sources/LMCache__LMCache/operator/README.md)<br>[lmcache/v1/multiprocess/protocols/README.md](../../../../sources/LMCache__LMCache/lmcache/v1/multiprocess/protocols/README.md)<br>[lmcache/v1/mp_observability/README.md](../../../../sources/LMCache__LMCache/lmcache/v1/mp_observability/README.md)<br>[lmcache/tools/transfer_channel_benchmark/README.md](../../../../sources/LMCache__LMCache/lmcache/tools/transfer_channel_benchmark/README.md)<br>[lmcache/tools/controller_benchmark/README.md](../../../../sources/LMCache__LMCache/lmcache/tools/controller_benchmark/README.md) |
| config | 22 | [pyproject.toml](../../../../sources/LMCache__LMCache/pyproject.toml)<br>[rust/raw_block/Cargo.toml](../../../../sources/LMCache__LMCache/rust/raw_block/Cargo.toml)<br>[rust/raw_block/pyproject.toml](../../../../sources/LMCache__LMCache/rust/raw_block/pyproject.toml)<br>[requirements/bench.txt](../../../../sources/LMCache__LMCache/requirements/bench.txt)<br>[requirements/build.txt](../../../../sources/LMCache__LMCache/requirements/build.txt)<br>[requirements/cli.txt](../../../../sources/LMCache__LMCache/requirements/cli.txt)<br>[requirements/common.txt](../../../../sources/LMCache__LMCache/requirements/common.txt)<br>[requirements/cuda.txt](../../../../sources/LMCache__LMCache/requirements/cuda.txt) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 620 | [tests/__init__.py](../../../../sources/LMCache__LMCache/tests/__init__.py)<br>[tests/aerospike_ce.conf.template](../../../../sources/LMCache__LMCache/tests/aerospike_ce.conf.template)<br>[tests/conftest.py](../../../../sources/LMCache__LMCache/tests/conftest.py)<br>[tests/test_banner.py](../../../../sources/LMCache__LMCache/tests/test_banner.py)<br>[tests/test_observability.py](../../../../sources/LMCache__LMCache/tests/test_observability.py)<br>[tests/test_serde.py](../../../../sources/LMCache__LMCache/tests/test_serde.py) |
| CI workflow | 31 | [.github/workflows/actionlint.dockerfile](../../../../sources/LMCache__LMCache/.github/workflows/actionlint.dockerfile)<br>[.github/workflows/actionlint.yml](../../../../sources/LMCache__LMCache/.github/workflows/actionlint.yml)<br>[.github/workflows/aerospike_integration.yml](../../../../sources/LMCache__LMCache/.github/workflows/aerospike_integration.yml)<br>[.github/workflows/automerge-labeler.yml](../../../../sources/LMCache__LMCache/.github/workflows/automerge-labeler.yml)<br>[.github/workflows/build_cli_artifacts.yml](../../../../sources/LMCache__LMCache/.github/workflows/build_cli_artifacts.yml)<br>[.github/workflows/build_cpu_artifacts.yml](../../../../sources/LMCache__LMCache/.github/workflows/build_cpu_artifacts.yml) |
| 컨테이너/배포 | 8 | [operator/Dockerfile](../../../../sources/LMCache__LMCache/operator/Dockerfile)<br>[examples/observability/docker-compose.yml](../../../../sources/LMCache__LMCache/examples/observability/docker-compose.yml)<br>[examples/kubernetes/health_probe.py](../../../../sources/LMCache__LMCache/examples/kubernetes/health_probe.py)<br>[docker/Dockerfile](../../../../sources/LMCache__LMCache/docker/Dockerfile)<br>[docker/Dockerfile.lightweight](../../../../sources/LMCache__LMCache/docker/Dockerfile.lightweight)<br>[docker/Dockerfile.rocm](../../../../sources/LMCache__LMCache/docker/Dockerfile.rocm) |
| 보안/정책 | 39 | [SECURITY.md](../../../../sources/LMCache__LMCache/SECURITY.md)<br>[tests/v1/test_cache_policy.py](../../../../sources/LMCache__LMCache/tests/v1/test_cache_policy.py)<br>[tests/v1/storage_backend/test_audit_connector.py](../../../../sources/LMCache__LMCache/tests/v1/storage_backend/test_audit_connector.py)<br>[tests/v1/distributed/test_isolated_lru_eviction_policy.py](../../../../sources/LMCache__LMCache/tests/v1/distributed/test_isolated_lru_eviction_policy.py)<br>[tests/v1/distributed/test_lru_eviction_policy.py](../../../../sources/LMCache__LMCache/tests/v1/distributed/test_lru_eviction_policy.py)<br>[tests/v1/distributed/test_prefetch_policy.py](../../../../sources/LMCache__LMCache/tests/v1/distributed/test_prefetch_policy.py) |
| 에이전트 지시문 | 3 | [AGENTS.md](../../../../sources/LMCache__LMCache/AGENTS.md)<br>[CLAUDE.md](../../../../sources/LMCache__LMCache/CLAUDE.md)<br>[operator/AGENTS.md](../../../../sources/LMCache__LMCache/operator/AGENTS.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `operator/cmd/main.go`, `lmcache/v1/standalone/__main__.py`, `lmcache/v1/server/__main__.py`.
2. entrypoint를 따라 실행 흐름 확인: `operator/cmd/main.go`, `lmcache/v1/standalone/__main__.py`, `lmcache/v1/server/__main__.py`.
3. agent/tool runtime 매핑: `AGENTS.md`, `tools/check_spdx_header.py`, `tools/translate_docs_zh.py`.
4. retrieval/memory/indexing 확인: `tests/v1/test_memory_management.py`, `tests/v1/lookup_client/test_chunk_statistics_lookup_client.py`, `tests/v1/distributed/test_l1_memory_manager.py`.
5. test/eval 파일로 동작 검증: `tests/__init__.py`, `tests/aerospike_ce.conf.template`, `tests/conftest.py`.

## 기존 레포 인사이트

AI 인프라/서빙 관점에서 LMCache Supercharge Your LLM with the Fastest KV Cache Layer. 핵심 구조 신호는 Python, pyproject.toml, README.md, AGENTS.md, CLAUDE.md, LICENSE이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 AI 인프라/서빙 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
