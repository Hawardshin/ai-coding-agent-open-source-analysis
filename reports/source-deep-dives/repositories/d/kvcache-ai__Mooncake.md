# kvcache-ai/Mooncake Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Mooncake is the serving platform for Kimi, a leading LLM service provided by Moonshot AI.

## 요약

- 조사 단위: `sources/kvcache-ai__Mooncake` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 1,201 files, 320 directories, depth score 117, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

AI 인프라/서빙 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 entrypoints=mooncake-transfer-engine/rust/src/main.rs, mooncake-transfer-engine/example/http-metadata-server/main.go, mooncake-store/go/examples/basic/main.go이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | kvcache-ai/Mooncake |
| Topic | AI Infrastructure and Serving / AI 인프라/서빙 |
| Region | global |
| Language | C++ |
| Stars | 5603 |
| Forks | 857 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/kvcache-ai__Mooncake](../../../../sources/kvcache-ai__Mooncake) |
| Existing report | [reports/global-trending/repositories/kvcache-ai__Mooncake.md](../../../global-trending/repositories/kvcache-ai__Mooncake.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 1201 / 320 |
| Max observed depth | 8 |
| Top directories | .claude, .claude-plugin, .devcontainer, .github, benchmarks, docker, docs, extern, FAST25-release, image, monitoring, mooncake-common, mooncake-ep, mooncake-integration, mooncake-p2p-store, mooncake-pg, mooncake-rl, mooncake-store, mooncake-transfer-engine, mooncake-wheel |
| Top extensions | .cpp: 364, .h: 292, .md: 115, .py: 111, .txt: 83, .png: 56, .sh: 27, .yml: 24, .go: 18, .cuh: 13, (none): 12, .cmake: 11 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 66 |
| .devcontainer | deployment surface | 1 |
| .github | ci surface | 1 |
| benchmarks | validation surface | 1 |
| docker | documentation surface | 1 |
| extern | top-level component | 1 |
| FAST25-release | top-level component | 1 |
| image | top-level component | 1 |
| monitoring | top-level component | 1 |
| mooncake-common | top-level component | 1 |
| mooncake-ep | top-level component | 1 |
| mooncake-integration | top-level component | 1 |
| mooncake-p2p-store | top-level component | 1 |
| mooncake-pg | top-level component | 1 |
| mooncake-rl | top-level component | 1 |
| mooncake-store | top-level component | 1 |
| mooncake-transfer-engine | top-level component | 1 |
| mooncake-wheel | top-level component | 1 |


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
| entrypoints | [mooncake-transfer-engine/rust/src/main.rs](../../../../sources/kvcache-ai__Mooncake/mooncake-transfer-engine/rust/src/main.rs) | entrypoints signal |
| entrypoints | [mooncake-transfer-engine/example/http-metadata-server/main.go](../../../../sources/kvcache-ai__Mooncake/mooncake-transfer-engine/example/http-metadata-server/main.go) | entrypoints signal |
| entrypoints | [mooncake-store/go/examples/basic/main.go](../../../../sources/kvcache-ai__Mooncake/mooncake-store/go/examples/basic/main.go) | entrypoints signal |
| entrypoints | [mooncake-common/k8s-lease/cmd/envtest-server/main.go](../../../../sources/kvcache-ai__Mooncake/mooncake-common/k8s-lease/cmd/envtest-server/main.go) | entrypoints signal |
| container | [mooncake-store/tests/ha/leadership/backends/k8s/high_availability_k8s_test.cpp](../../../../sources/kvcache-ai__Mooncake/mooncake-store/tests/ha/leadership/backends/k8s/high_availability_k8s_test.cpp) | container signal |
| container | [mooncake-store/src/ha/leadership/backends/k8s/k8s_leader_coordinator.cpp](../../../../sources/kvcache-ai__Mooncake/mooncake-store/src/ha/leadership/backends/k8s/k8s_leader_coordinator.cpp) | container signal |
| container | [mooncake-store/include/ha/leadership/backends/k8s/k8s_leader_coordinator.h](../../../../sources/kvcache-ai__Mooncake/mooncake-store/include/ha/leadership/backends/k8s/k8s_leader_coordinator.h) | container signal |
| container | [monitoring/docker-compose.yml](../../../../sources/kvcache-ai__Mooncake/monitoring/docker-compose.yml) | container signal |
| config | [requirements_docs.txt](../../../../sources/kvcache-ai__Mooncake/requirements_docs.txt) | config signal |
| config | [requirements-dev.txt](../../../../sources/kvcache-ai__Mooncake/requirements-dev.txt) | config signal |
| config | [mooncake-wheel/pyproject.toml](../../../../sources/kvcache-ai__Mooncake/mooncake-wheel/pyproject.toml) | config signal |
| config | [mooncake-transfer-engine/rust/Cargo.lock](../../../../sources/kvcache-ai__Mooncake/mooncake-transfer-engine/rust/Cargo.lock) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 5 | [mooncake-transfer-engine/rust/src/main.rs](../../../../sources/kvcache-ai__Mooncake/mooncake-transfer-engine/rust/src/main.rs)<br>[mooncake-transfer-engine/example/http-metadata-server/main.go](../../../../sources/kvcache-ai__Mooncake/mooncake-transfer-engine/example/http-metadata-server/main.go)<br>[mooncake-store/go/examples/basic/main.go](../../../../sources/kvcache-ai__Mooncake/mooncake-store/go/examples/basic/main.go)<br>[mooncake-common/k8s-lease/cmd/envtest-server/main.go](../../../../sources/kvcache-ai__Mooncake/mooncake-common/k8s-lease/cmd/envtest-server/main.go)<br>[benchmarks/storage_benchmark_v1/__main__.py](../../../../sources/kvcache-ai__Mooncake/benchmarks/storage_benchmark_v1/__main__.py) |
| agentRuntime | 21 | [mooncake-transfer-engine/tests/memory_location_test.cpp](../../../../sources/kvcache-ai__Mooncake/mooncake-transfer-engine/tests/memory_location_test.cpp)<br>[mooncake-transfer-engine/tent/src/transport/rdma/context.cpp](../../../../sources/kvcache-ai__Mooncake/mooncake-transfer-engine/tent/src/transport/rdma/context.cpp)<br>[mooncake-transfer-engine/tent/src/runtime/memory_prober.cpp](../../../../sources/kvcache-ai__Mooncake/mooncake-transfer-engine/tent/src/runtime/memory_prober.cpp)<br>[mooncake-transfer-engine/tent/include/tent/transport/rdma/context.h](../../../../sources/kvcache-ai__Mooncake/mooncake-transfer-engine/tent/include/tent/transport/rdma/context.h)<br>[mooncake-transfer-engine/tent/include/tent/runtime/memory_prober.h](../../../../sources/kvcache-ai__Mooncake/mooncake-transfer-engine/tent/include/tent/runtime/memory_prober.h)<br>[mooncake-transfer-engine/src/memory_location.cpp](../../../../sources/kvcache-ai__Mooncake/mooncake-transfer-engine/src/memory_location.cpp)<br>[mooncake-transfer-engine/src/transport/ascend_transport/ascend_direct_transport/context_manager.cpp](../../../../sources/kvcache-ai__Mooncake/mooncake-transfer-engine/src/transport/ascend_transport/ascend_direct_transport/context_manager.cpp)<br>[mooncake-transfer-engine/rust/src/memory_pool.rs](../../../../sources/kvcache-ai__Mooncake/mooncake-transfer-engine/rust/src/memory_pool.rs) |
| mcp | 0 | not obvious |
| retrieval | 59 | [mooncake-transfer-engine/tests/memory_location_test.cpp](../../../../sources/kvcache-ai__Mooncake/mooncake-transfer-engine/tests/memory_location_test.cpp)<br>[mooncake-transfer-engine/tent/src/runtime/memory_prober.cpp](../../../../sources/kvcache-ai__Mooncake/mooncake-transfer-engine/tent/src/runtime/memory_prober.cpp)<br>[mooncake-transfer-engine/tent/include/tent/runtime/memory_prober.h](../../../../sources/kvcache-ai__Mooncake/mooncake-transfer-engine/tent/include/tent/runtime/memory_prober.h)<br>[mooncake-transfer-engine/src/memory_location.cpp](../../../../sources/kvcache-ai__Mooncake/mooncake-transfer-engine/src/memory_location.cpp)<br>[mooncake-transfer-engine/rust/src/memory_pool.rs](../../../../sources/kvcache-ai__Mooncake/mooncake-transfer-engine/rust/src/memory_pool.rs)<br>[mooncake-transfer-engine/include/memory_location.h](../../../../sources/kvcache-ai__Mooncake/mooncake-transfer-engine/include/memory_location.h)<br>[mooncake-transfer-engine/example/memory_pool.cpp](../../../../sources/kvcache-ai__Mooncake/mooncake-transfer-engine/example/memory_pool.cpp)<br>[mooncake-store/src/memory_alloc.cpp](../../../../sources/kvcache-ai__Mooncake/mooncake-store/src/memory_alloc.cpp) |
| spec | 36 | [requirements_docs.txt](../../../../sources/kvcache-ai__Mooncake/requirements_docs.txt)<br>[requirements-dev.txt](../../../../sources/kvcache-ai__Mooncake/requirements-dev.txt)<br>[scripts/check_hicache_hugepage_requirements.py](../../../../sources/kvcache-ai__Mooncake/scripts/check_hicache_hugepage_requirements.py)<br>[scripts/test_hicache_hugepage_requirements.py](../../../../sources/kvcache-ai__Mooncake/scripts/test_hicache_hugepage_requirements.py)<br>[image/architecture.png](../../../../sources/kvcache-ai__Mooncake/image/architecture.png)<br>[docs/source/zh_archive/architecture.md](../../../../sources/kvcache-ai__Mooncake/docs/source/zh_archive/architecture.md)<br>[docs/source/image/architecture.png](../../../../sources/kvcache-ai__Mooncake/docs/source/image/architecture.png)<br>[docs/source/image/conductor/architecture.png](../../../../sources/kvcache-ai__Mooncake/docs/source/image/conductor/architecture.png) |
| eval | 300 | [scripts/bench_engram_store_27b.py](../../../../sources/kvcache-ai__Mooncake/scripts/bench_engram_store_27b.py)<br>[scripts/run_tests.sh](../../../../sources/kvcache-ai__Mooncake/scripts/run_tests.sh)<br>[scripts/test_async_store.py](../../../../sources/kvcache-ai__Mooncake/scripts/test_async_store.py)<br>[scripts/test_copy_move_api.py](../../../../sources/kvcache-ai__Mooncake/scripts/test_copy_move_api.py)<br>[scripts/test_drain_http_api.py](../../../../sources/kvcache-ai__Mooncake/scripts/test_drain_http_api.py)<br>[scripts/test_engram_store.py](../../../../sources/kvcache-ai__Mooncake/scripts/test_engram_store.py)<br>[scripts/test_hicache_hugepage_requirements.py](../../../../sources/kvcache-ai__Mooncake/scripts/test_hicache_hugepage_requirements.py)<br>[scripts/test_installation.sh](../../../../sources/kvcache-ai__Mooncake/scripts/test_installation.sh) |
| security | 0 | not obvious |
| ci | 17 | [.github/workflows/assistant.yml](../../../../sources/kvcache-ai__Mooncake/.github/workflows/assistant.yml)<br>[.github/workflows/ci_ascend.yml](../../../../sources/kvcache-ai__Mooncake/.github/workflows/ci_ascend.yml)<br>[.github/workflows/ci_cu13.yml](../../../../sources/kvcache-ai__Mooncake/.github/workflows/ci_cu13.yml)<br>[.github/workflows/ci.yml](../../../../sources/kvcache-ai__Mooncake/.github/workflows/ci.yml)<br>[.github/workflows/code-review.yml](../../../../sources/kvcache-ai__Mooncake/.github/workflows/code-review.yml)<br>[.github/workflows/deploy.yml](../../../../sources/kvcache-ai__Mooncake/.github/workflows/deploy.yml)<br>[.github/workflows/e2e-ci.yml](../../../../sources/kvcache-ai__Mooncake/.github/workflows/e2e-ci.yml)<br>[.github/workflows/integration-test.yml](../../../../sources/kvcache-ai__Mooncake/.github/workflows/integration-test.yml) |
| container | 8 | [mooncake-store/tests/ha/leadership/backends/k8s/high_availability_k8s_test.cpp](../../../../sources/kvcache-ai__Mooncake/mooncake-store/tests/ha/leadership/backends/k8s/high_availability_k8s_test.cpp)<br>[mooncake-store/src/ha/leadership/backends/k8s/k8s_leader_coordinator.cpp](../../../../sources/kvcache-ai__Mooncake/mooncake-store/src/ha/leadership/backends/k8s/k8s_leader_coordinator.cpp)<br>[mooncake-store/include/ha/leadership/backends/k8s/k8s_leader_coordinator.h](../../../../sources/kvcache-ai__Mooncake/mooncake-store/include/ha/leadership/backends/k8s/k8s_leader_coordinator.h)<br>[monitoring/docker-compose.yml](../../../../sources/kvcache-ai__Mooncake/monitoring/docker-compose.yml)<br>[docs/source/deployment/mooncake-store-deployment-guide.md](../../../../sources/kvcache-ai__Mooncake/docs/source/deployment/mooncake-store-deployment-guide.md)<br>[docs/source/deployment/nvmf-ssd-deployment-guide.md](../../../../sources/kvcache-ai__Mooncake/docs/source/deployment/nvmf-ssd-deployment-guide.md)<br>[docs/source/deployment/ssd-offload.md](../../../../sources/kvcache-ai__Mooncake/docs/source/deployment/ssd-offload.md)<br>[.devcontainer/Dockerfile](../../../../sources/kvcache-ai__Mooncake/.devcontainer/Dockerfile) |
| instruction | 0 | not obvious |
| docs | 146 | [README.md](../../../../sources/kvcache-ai__Mooncake/README.md)<br>[scripts/tone_tests/README_en.md](../../../../sources/kvcache-ai__Mooncake/scripts/tone_tests/README_en.md)<br>[scripts/tone_tests/README_zh.md](../../../../sources/kvcache-ai__Mooncake/scripts/tone_tests/README_zh.md)<br>[mooncake-wheel/mooncake/README.md](../../../../sources/kvcache-ai__Mooncake/mooncake-wheel/mooncake/README.md)<br>[mooncake-store/tests/e2e/readme.md](../../../../sources/kvcache-ai__Mooncake/mooncake-store/tests/e2e/readme.md)<br>[mooncake-store/src/hf3fs/README.md](../../../../sources/kvcache-ai__Mooncake/mooncake-store/src/hf3fs/README.md)<br>[mooncake-store/rust/README.md](../../../../sources/kvcache-ai__Mooncake/mooncake-store/rust/README.md)<br>[mooncake-pg/tests/README.md](../../../../sources/kvcache-ai__Mooncake/mooncake-pg/tests/README.md) |
| config | 13 | [requirements_docs.txt](../../../../sources/kvcache-ai__Mooncake/requirements_docs.txt)<br>[requirements-dev.txt](../../../../sources/kvcache-ai__Mooncake/requirements-dev.txt)<br>[mooncake-wheel/pyproject.toml](../../../../sources/kvcache-ai__Mooncake/mooncake-wheel/pyproject.toml)<br>[mooncake-transfer-engine/rust/Cargo.lock](../../../../sources/kvcache-ai__Mooncake/mooncake-transfer-engine/rust/Cargo.lock)<br>[mooncake-transfer-engine/rust/Cargo.toml](../../../../sources/kvcache-ai__Mooncake/mooncake-transfer-engine/rust/Cargo.toml)<br>[mooncake-transfer-engine/example/http-metadata-server/go.mod](../../../../sources/kvcache-ai__Mooncake/mooncake-transfer-engine/example/http-metadata-server/go.mod)<br>[mooncake-store/rust/Cargo.lock](../../../../sources/kvcache-ai__Mooncake/mooncake-store/rust/Cargo.lock)<br>[mooncake-store/rust/Cargo.toml](../../../../sources/kvcache-ai__Mooncake/mooncake-store/rust/Cargo.toml) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 300 | [scripts/bench_engram_store_27b.py](../../../../sources/kvcache-ai__Mooncake/scripts/bench_engram_store_27b.py)<br>[scripts/run_tests.sh](../../../../sources/kvcache-ai__Mooncake/scripts/run_tests.sh)<br>[scripts/test_async_store.py](../../../../sources/kvcache-ai__Mooncake/scripts/test_async_store.py)<br>[scripts/test_copy_move_api.py](../../../../sources/kvcache-ai__Mooncake/scripts/test_copy_move_api.py)<br>[scripts/test_drain_http_api.py](../../../../sources/kvcache-ai__Mooncake/scripts/test_drain_http_api.py)<br>[scripts/test_engram_store.py](../../../../sources/kvcache-ai__Mooncake/scripts/test_engram_store.py) |
| CI workflows | 17 | [.github/workflows/assistant.yml](../../../../sources/kvcache-ai__Mooncake/.github/workflows/assistant.yml)<br>[.github/workflows/ci_ascend.yml](../../../../sources/kvcache-ai__Mooncake/.github/workflows/ci_ascend.yml)<br>[.github/workflows/ci_cu13.yml](../../../../sources/kvcache-ai__Mooncake/.github/workflows/ci_cu13.yml)<br>[.github/workflows/ci.yml](../../../../sources/kvcache-ai__Mooncake/.github/workflows/ci.yml)<br>[.github/workflows/code-review.yml](../../../../sources/kvcache-ai__Mooncake/.github/workflows/code-review.yml)<br>[.github/workflows/deploy.yml](../../../../sources/kvcache-ai__Mooncake/.github/workflows/deploy.yml) |
| Containers / deploy | 8 | [mooncake-store/tests/ha/leadership/backends/k8s/high_availability_k8s_test.cpp](../../../../sources/kvcache-ai__Mooncake/mooncake-store/tests/ha/leadership/backends/k8s/high_availability_k8s_test.cpp)<br>[mooncake-store/src/ha/leadership/backends/k8s/k8s_leader_coordinator.cpp](../../../../sources/kvcache-ai__Mooncake/mooncake-store/src/ha/leadership/backends/k8s/k8s_leader_coordinator.cpp)<br>[mooncake-store/include/ha/leadership/backends/k8s/k8s_leader_coordinator.h](../../../../sources/kvcache-ai__Mooncake/mooncake-store/include/ha/leadership/backends/k8s/k8s_leader_coordinator.h)<br>[monitoring/docker-compose.yml](../../../../sources/kvcache-ai__Mooncake/monitoring/docker-compose.yml)<br>[docs/source/deployment/mooncake-store-deployment-guide.md](../../../../sources/kvcache-ai__Mooncake/docs/source/deployment/mooncake-store-deployment-guide.md)<br>[docs/source/deployment/nvmf-ssd-deployment-guide.md](../../../../sources/kvcache-ai__Mooncake/docs/source/deployment/nvmf-ssd-deployment-guide.md) |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | many top-level directories; module boundaries need review |
| operation | none |
| security | security/policy surface not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `mooncake-transfer-engine/rust/src/main.rs`, `mooncake-transfer-engine/example/http-metadata-server/main.go`, `mooncake-store/go/examples/basic/main.go`.
2. Trace execution through entrypoints: `mooncake-transfer-engine/rust/src/main.rs`, `mooncake-transfer-engine/example/http-metadata-server/main.go`, `mooncake-store/go/examples/basic/main.go`.
3. Map agent/tool runtime through: `mooncake-transfer-engine/tests/memory_location_test.cpp`, `mooncake-transfer-engine/tent/src/transport/rdma/context.cpp`, `mooncake-transfer-engine/tent/src/runtime/memory_prober.cpp`.
4. Inspect retrieval/memory/indexing through: `mooncake-transfer-engine/tests/memory_location_test.cpp`, `mooncake-transfer-engine/tent/src/runtime/memory_prober.cpp`, `mooncake-transfer-engine/tent/include/tent/runtime/memory_prober.h`.
5. Verify behavior through test/eval files: `scripts/bench_engram_store_27b.py`, `scripts/run_tests.sh`, `scripts/test_async_store.py`.

## Existing Repository Insight

AI 인프라/서빙 관점에서 Mooncake is the serving platform for Kimi, a leading LLM service provided by Moonshot AI.. 핵심 구조 신호는 C++, README.md, ci, docs, docker, spec-artifacts이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 AI 인프라/서빙 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
