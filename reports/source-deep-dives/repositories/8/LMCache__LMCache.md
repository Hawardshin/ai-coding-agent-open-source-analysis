# LMCache/LMCache Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

LMCache: Supercharge Your LLM with the Fastest KV Cache Layer

## 요약

- 조사 단위: `sources/LMCache__LMCache` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 1,857 files, 381 directories, depth score 128, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

AI 인프라/서빙 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 entrypoints=operator/cmd/main.go, lmcache/v1/standalone/__main__.py, lmcache/v1/server/__main__.py이고, 의존성 단서는 express, torch, vllm, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | LMCache/LMCache |
| Topic | AI Infrastructure and Serving / AI 인프라/서빙 |
| Region | global |
| Language | Python |
| Stars | 9269 |
| Forks | 1343 |
| License | none |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/LMCache__LMCache](../../../../sources/LMCache__LMCache) |
| Existing report | [reports/global-trending/repositories/LMCache__LMCache.md](../../../global-trending/repositories/LMCache__LMCache.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 1857 / 381 |
| Max observed depth | 8 |
| Top directories | .buildkite, .claude, .cursor, .gemini, .github, asset, benchmarks, csrc, docker, docs, examples, lmcache, operator, requirements, rust, setup_extensions, tests, tools |
| Top extensions | .py: 938, .rst: 165, .md: 133, .po: 132, .yaml: 123, .sh: 90, .yml: 52, .go: 50, .cpp: 27, .txt: 25, .h: 22, .png: 19 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
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


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | pyproject.toml | lmcache | lmcache |
| serve-dev | pyproject.toml | lmcache_server | lmcache_server |
| utility | pyproject.toml | lmcache_controller | lmcache_controller |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | torch, vllm |
| webRuntime | express |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
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


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 13 | [operator/cmd/main.go](../../../../sources/LMCache__LMCache/operator/cmd/main.go)<br>[lmcache/v1/standalone/__main__.py](../../../../sources/LMCache__LMCache/lmcache/v1/standalone/__main__.py)<br>[lmcache/v1/server/__main__.py](../../../../sources/LMCache__LMCache/lmcache/v1/server/__main__.py)<br>[lmcache/v1/multiprocess/server.py](../../../../sources/LMCache__LMCache/lmcache/v1/multiprocess/server.py)<br>[lmcache/v1/mp_coordinator/__main__.py](../../../../sources/LMCache__LMCache/lmcache/v1/mp_coordinator/__main__.py)<br>[lmcache/v1/api_server/__main__.py](../../../../sources/LMCache__LMCache/lmcache/v1/api_server/__main__.py)<br>[lmcache/tools/transfer_channel_benchmark/__main__.py](../../../../sources/LMCache__LMCache/lmcache/tools/transfer_channel_benchmark/__main__.py)<br>[lmcache/tools/mp_status_viewer/__main__.py](../../../../sources/LMCache__LMCache/lmcache/tools/mp_status_viewer/__main__.py) |
| agentRuntime | 62 | [AGENTS.md](../../../../sources/LMCache__LMCache/AGENTS.md)<br>[tools/check_spdx_header.py](../../../../sources/LMCache__LMCache/tools/check_spdx_header.py)<br>[tools/translate_docs_zh.py](../../../../sources/LMCache__LMCache/tools/translate_docs_zh.py)<br>[tests/v1/distributed/memory_manager/__init__.py](../../../../sources/LMCache__LMCache/tests/v1/distributed/memory_manager/__init__.py)<br>[tests/v1/distributed/memory_manager/test_gds_l1_memory_manager.py](../../../../sources/LMCache__LMCache/tests/v1/distributed/memory_manager/test_gds_l1_memory_manager.py)<br>[tests/tools/test_cache_simulator.py](../../../../sources/LMCache__LMCache/tests/tools/test_cache_simulator.py)<br>[tests/tools/test_controller_zmq_benchmark.py](../../../../sources/LMCache__LMCache/tests/tools/test_controller_zmq_benchmark.py)<br>[operator/AGENTS.md](../../../../sources/LMCache__LMCache/operator/AGENTS.md) |
| mcp | 0 | not obvious |
| retrieval | 65 | [tests/v1/test_memory_management.py](../../../../sources/LMCache__LMCache/tests/v1/test_memory_management.py)<br>[tests/v1/lookup_client/test_chunk_statistics_lookup_client.py](../../../../sources/LMCache__LMCache/tests/v1/lookup_client/test_chunk_statistics_lookup_client.py)<br>[tests/v1/distributed/test_l1_memory_manager.py](../../../../sources/LMCache__LMCache/tests/v1/distributed/test_l1_memory_manager.py)<br>[tests/v1/distributed/memory_manager/__init__.py](../../../../sources/LMCache__LMCache/tests/v1/distributed/memory_manager/__init__.py)<br>[tests/v1/distributed/memory_manager/test_gds_l1_memory_manager.py](../../../../sources/LMCache__LMCache/tests/v1/distributed/memory_manager/test_gds_l1_memory_manager.py)<br>[lmcache/v1/lazy_memory_allocator.py](../../../../sources/LMCache__LMCache/lmcache/v1/lazy_memory_allocator.py)<br>[lmcache/v1/memory_management.py](../../../../sources/LMCache__LMCache/lmcache/v1/memory_management.py)<br>[lmcache/v1/transfer_channel/mock_memory_channel.py](../../../../sources/LMCache__LMCache/lmcache/v1/transfer_channel/mock_memory_channel.py) |
| spec | 65 | [requirements/bench.txt](../../../../sources/LMCache__LMCache/requirements/bench.txt)<br>[requirements/build.txt](../../../../sources/LMCache__LMCache/requirements/build.txt)<br>[requirements/cli.txt](../../../../sources/LMCache__LMCache/requirements/cli.txt)<br>[requirements/common.txt](../../../../sources/LMCache__LMCache/requirements/common.txt)<br>[requirements/cuda.txt](../../../../sources/LMCache__LMCache/requirements/cuda.txt)<br>[requirements/cuda12_core.txt](../../../../sources/LMCache__LMCache/requirements/cuda12_core.txt)<br>[requirements/cuda13_core.txt](../../../../sources/LMCache__LMCache/requirements/cuda13_core.txt)<br>[requirements/docs.txt](../../../../sources/LMCache__LMCache/requirements/docs.txt) |
| eval | 620 | [tests/__init__.py](../../../../sources/LMCache__LMCache/tests/__init__.py)<br>[tests/aerospike_ce.conf.template](../../../../sources/LMCache__LMCache/tests/aerospike_ce.conf.template)<br>[tests/conftest.py](../../../../sources/LMCache__LMCache/tests/conftest.py)<br>[tests/test_banner.py](../../../../sources/LMCache__LMCache/tests/test_banner.py)<br>[tests/test_observability.py](../../../../sources/LMCache__LMCache/tests/test_observability.py)<br>[tests/test_serde.py](../../../../sources/LMCache__LMCache/tests/test_serde.py)<br>[tests/test_utils.py](../../../../sources/LMCache__LMCache/tests/test_utils.py)<br>[tests/v1/__init__.py](../../../../sources/LMCache__LMCache/tests/v1/__init__.py) |
| security | 39 | [SECURITY.md](../../../../sources/LMCache__LMCache/SECURITY.md)<br>[tests/v1/test_cache_policy.py](../../../../sources/LMCache__LMCache/tests/v1/test_cache_policy.py)<br>[tests/v1/storage_backend/test_audit_connector.py](../../../../sources/LMCache__LMCache/tests/v1/storage_backend/test_audit_connector.py)<br>[tests/v1/distributed/test_isolated_lru_eviction_policy.py](../../../../sources/LMCache__LMCache/tests/v1/distributed/test_isolated_lru_eviction_policy.py)<br>[tests/v1/distributed/test_lru_eviction_policy.py](../../../../sources/LMCache__LMCache/tests/v1/distributed/test_lru_eviction_policy.py)<br>[tests/v1/distributed/test_prefetch_policy.py](../../../../sources/LMCache__LMCache/tests/v1/distributed/test_prefetch_policy.py)<br>[tests/v1/distributed/test_store_policy.py](../../../../sources/LMCache__LMCache/tests/v1/distributed/test_store_policy.py)<br>[setup_extensions/policy.py](../../../../sources/LMCache__LMCache/setup_extensions/policy.py) |
| ci | 31 | [.github/workflows/actionlint.dockerfile](../../../../sources/LMCache__LMCache/.github/workflows/actionlint.dockerfile)<br>[.github/workflows/actionlint.yml](../../../../sources/LMCache__LMCache/.github/workflows/actionlint.yml)<br>[.github/workflows/aerospike_integration.yml](../../../../sources/LMCache__LMCache/.github/workflows/aerospike_integration.yml)<br>[.github/workflows/automerge-labeler.yml](../../../../sources/LMCache__LMCache/.github/workflows/automerge-labeler.yml)<br>[.github/workflows/build_cli_artifacts.yml](../../../../sources/LMCache__LMCache/.github/workflows/build_cli_artifacts.yml)<br>[.github/workflows/build_cpu_artifacts.yml](../../../../sources/LMCache__LMCache/.github/workflows/build_cpu_artifacts.yml)<br>[.github/workflows/build_cu129_artifacts.yml](../../../../sources/LMCache__LMCache/.github/workflows/build_cu129_artifacts.yml)<br>[.github/workflows/build_doc.yml](../../../../sources/LMCache__LMCache/.github/workflows/build_doc.yml) |
| container | 8 | [operator/Dockerfile](../../../../sources/LMCache__LMCache/operator/Dockerfile)<br>[examples/observability/docker-compose.yml](../../../../sources/LMCache__LMCache/examples/observability/docker-compose.yml)<br>[examples/kubernetes/health_probe.py](../../../../sources/LMCache__LMCache/examples/kubernetes/health_probe.py)<br>[docker/Dockerfile](../../../../sources/LMCache__LMCache/docker/Dockerfile)<br>[docker/Dockerfile.lightweight](../../../../sources/LMCache__LMCache/docker/Dockerfile.lightweight)<br>[docker/Dockerfile.rocm](../../../../sources/LMCache__LMCache/docker/Dockerfile.rocm)<br>[docker/Dockerfile.rocm-lightweight](../../../../sources/LMCache__LMCache/docker/Dockerfile.rocm-lightweight)<br>[docker/Dockerfile.standalone](../../../../sources/LMCache__LMCache/docker/Dockerfile.standalone) |
| instruction | 3 | [AGENTS.md](../../../../sources/LMCache__LMCache/AGENTS.md)<br>[CLAUDE.md](../../../../sources/LMCache__LMCache/CLAUDE.md)<br>[operator/AGENTS.md](../../../../sources/LMCache__LMCache/operator/AGENTS.md) |
| docs | 428 | [README.md](../../../../sources/LMCache__LMCache/README.md)<br>[tests/disagg/README.md](../../../../sources/LMCache__LMCache/tests/disagg/README.md)<br>[rust/raw_block/README.md](../../../../sources/LMCache__LMCache/rust/raw_block/README.md)<br>[operator/README.md](../../../../sources/LMCache__LMCache/operator/README.md)<br>[lmcache/v1/multiprocess/protocols/README.md](../../../../sources/LMCache__LMCache/lmcache/v1/multiprocess/protocols/README.md)<br>[lmcache/v1/mp_observability/README.md](../../../../sources/LMCache__LMCache/lmcache/v1/mp_observability/README.md)<br>[lmcache/tools/transfer_channel_benchmark/README.md](../../../../sources/LMCache__LMCache/lmcache/tools/transfer_channel_benchmark/README.md)<br>[lmcache/tools/controller_benchmark/README.md](../../../../sources/LMCache__LMCache/lmcache/tools/controller_benchmark/README.md) |
| config | 22 | [pyproject.toml](../../../../sources/LMCache__LMCache/pyproject.toml)<br>[rust/raw_block/Cargo.toml](../../../../sources/LMCache__LMCache/rust/raw_block/Cargo.toml)<br>[rust/raw_block/pyproject.toml](../../../../sources/LMCache__LMCache/rust/raw_block/pyproject.toml)<br>[requirements/bench.txt](../../../../sources/LMCache__LMCache/requirements/bench.txt)<br>[requirements/build.txt](../../../../sources/LMCache__LMCache/requirements/build.txt)<br>[requirements/cli.txt](../../../../sources/LMCache__LMCache/requirements/cli.txt)<br>[requirements/common.txt](../../../../sources/LMCache__LMCache/requirements/common.txt)<br>[requirements/cuda.txt](../../../../sources/LMCache__LMCache/requirements/cuda.txt) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 620 | [tests/__init__.py](../../../../sources/LMCache__LMCache/tests/__init__.py)<br>[tests/aerospike_ce.conf.template](../../../../sources/LMCache__LMCache/tests/aerospike_ce.conf.template)<br>[tests/conftest.py](../../../../sources/LMCache__LMCache/tests/conftest.py)<br>[tests/test_banner.py](../../../../sources/LMCache__LMCache/tests/test_banner.py)<br>[tests/test_observability.py](../../../../sources/LMCache__LMCache/tests/test_observability.py)<br>[tests/test_serde.py](../../../../sources/LMCache__LMCache/tests/test_serde.py) |
| CI workflows | 31 | [.github/workflows/actionlint.dockerfile](../../../../sources/LMCache__LMCache/.github/workflows/actionlint.dockerfile)<br>[.github/workflows/actionlint.yml](../../../../sources/LMCache__LMCache/.github/workflows/actionlint.yml)<br>[.github/workflows/aerospike_integration.yml](../../../../sources/LMCache__LMCache/.github/workflows/aerospike_integration.yml)<br>[.github/workflows/automerge-labeler.yml](../../../../sources/LMCache__LMCache/.github/workflows/automerge-labeler.yml)<br>[.github/workflows/build_cli_artifacts.yml](../../../../sources/LMCache__LMCache/.github/workflows/build_cli_artifacts.yml)<br>[.github/workflows/build_cpu_artifacts.yml](../../../../sources/LMCache__LMCache/.github/workflows/build_cpu_artifacts.yml) |
| Containers / deploy | 8 | [operator/Dockerfile](../../../../sources/LMCache__LMCache/operator/Dockerfile)<br>[examples/observability/docker-compose.yml](../../../../sources/LMCache__LMCache/examples/observability/docker-compose.yml)<br>[examples/kubernetes/health_probe.py](../../../../sources/LMCache__LMCache/examples/kubernetes/health_probe.py)<br>[docker/Dockerfile](../../../../sources/LMCache__LMCache/docker/Dockerfile)<br>[docker/Dockerfile.lightweight](../../../../sources/LMCache__LMCache/docker/Dockerfile.lightweight)<br>[docker/Dockerfile.rocm](../../../../sources/LMCache__LMCache/docker/Dockerfile.rocm) |
| Security / policy | 39 | [SECURITY.md](../../../../sources/LMCache__LMCache/SECURITY.md)<br>[tests/v1/test_cache_policy.py](../../../../sources/LMCache__LMCache/tests/v1/test_cache_policy.py)<br>[tests/v1/storage_backend/test_audit_connector.py](../../../../sources/LMCache__LMCache/tests/v1/storage_backend/test_audit_connector.py)<br>[tests/v1/distributed/test_isolated_lru_eviction_policy.py](../../../../sources/LMCache__LMCache/tests/v1/distributed/test_isolated_lru_eviction_policy.py)<br>[tests/v1/distributed/test_lru_eviction_policy.py](../../../../sources/LMCache__LMCache/tests/v1/distributed/test_lru_eviction_policy.py)<br>[tests/v1/distributed/test_prefetch_policy.py](../../../../sources/LMCache__LMCache/tests/v1/distributed/test_prefetch_policy.py) |
| Agent instructions | 3 | [AGENTS.md](../../../../sources/LMCache__LMCache/AGENTS.md)<br>[CLAUDE.md](../../../../sources/LMCache__LMCache/CLAUDE.md)<br>[operator/AGENTS.md](../../../../sources/LMCache__LMCache/operator/AGENTS.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `operator/cmd/main.go`, `lmcache/v1/standalone/__main__.py`, `lmcache/v1/server/__main__.py`.
2. Trace execution through entrypoints: `operator/cmd/main.go`, `lmcache/v1/standalone/__main__.py`, `lmcache/v1/server/__main__.py`.
3. Map agent/tool runtime through: `AGENTS.md`, `tools/check_spdx_header.py`, `tools/translate_docs_zh.py`.
4. Inspect retrieval/memory/indexing through: `tests/v1/test_memory_management.py`, `tests/v1/lookup_client/test_chunk_statistics_lookup_client.py`, `tests/v1/distributed/test_l1_memory_manager.py`.
5. Verify behavior through test/eval files: `tests/__init__.py`, `tests/aerospike_ce.conf.template`, `tests/conftest.py`.

## Existing Repository Insight

AI 인프라/서빙 관점에서 LMCache Supercharge Your LLM with the Fastest KV Cache Layer. 핵심 구조 신호는 Python, pyproject.toml, README.md, AGENTS.md, CLAUDE.md, LICENSE이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 AI 인프라/서빙 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
