# kvcache-ai/Mooncake 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

Mooncake is the serving platform for Kimi, a leading LLM service provided by Moonshot AI.

## 요약

- 조사 단위: `sources/kvcache-ai__Mooncake` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 1,201 files, 320 directories, depth score 111, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

AI 인프라/서빙 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 entrypoints=mooncake-transfer-engine/rust/src/main.rs, mooncake-transfer-engine/example/http-metadata-server/main.go, mooncake-store/go/examples/basic/main.go이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | kvcache-ai/Mooncake |
| 주제 | AI 인프라/서빙 / AI 인프라/서빙 |
| Region | global |
| Language | C++ |
| Stars | 5603 |
| Forks | 857 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/kvcache-ai__Mooncake](../../../../sources/kvcache-ai__Mooncake) |
| 기존 보고서 | [reports/global-trending/repositories/kvcache-ai__Mooncake.md](../../../global-trending/repositories/kvcache-ai__Mooncake.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 1201 / 320 |
| 관측 최대 깊이 | 8 |
| 상위 디렉터리 | .claude, .claude-plugin, .devcontainer, .github, benchmarks, docker, docs, extern, FAST25-release, image, monitoring, mooncake-common, mooncake-ep, mooncake-integration, mooncake-p2p-store, mooncake-pg, mooncake-rl, mooncake-store, mooncake-transfer-engine, mooncake-wheel |
| 상위 확장자 | .cpp: 364, .h: 292, .md: 115, .py: 111, .txt: 83, .png: 56, .sh: 27, .yml: 24, .go: 18, .cuh: 13, (none): 12, .cmake: 11 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 5 | [mooncake-transfer-engine/rust/src/main.rs](../../../../sources/kvcache-ai__Mooncake/mooncake-transfer-engine/rust/src/main.rs)<br>[mooncake-transfer-engine/example/http-metadata-server/main.go](../../../../sources/kvcache-ai__Mooncake/mooncake-transfer-engine/example/http-metadata-server/main.go)<br>[mooncake-store/go/examples/basic/main.go](../../../../sources/kvcache-ai__Mooncake/mooncake-store/go/examples/basic/main.go)<br>[mooncake-common/k8s-lease/cmd/envtest-server/main.go](../../../../sources/kvcache-ai__Mooncake/mooncake-common/k8s-lease/cmd/envtest-server/main.go)<br>[benchmarks/storage_benchmark_v1/__main__.py](../../../../sources/kvcache-ai__Mooncake/benchmarks/storage_benchmark_v1/__main__.py) |
| agentRuntime | 21 | [mooncake-transfer-engine/tests/memory_location_test.cpp](../../../../sources/kvcache-ai__Mooncake/mooncake-transfer-engine/tests/memory_location_test.cpp)<br>[mooncake-transfer-engine/tent/src/transport/rdma/context.cpp](../../../../sources/kvcache-ai__Mooncake/mooncake-transfer-engine/tent/src/transport/rdma/context.cpp)<br>[mooncake-transfer-engine/tent/src/runtime/memory_prober.cpp](../../../../sources/kvcache-ai__Mooncake/mooncake-transfer-engine/tent/src/runtime/memory_prober.cpp)<br>[mooncake-transfer-engine/tent/include/tent/transport/rdma/context.h](../../../../sources/kvcache-ai__Mooncake/mooncake-transfer-engine/tent/include/tent/transport/rdma/context.h)<br>[mooncake-transfer-engine/tent/include/tent/runtime/memory_prober.h](../../../../sources/kvcache-ai__Mooncake/mooncake-transfer-engine/tent/include/tent/runtime/memory_prober.h)<br>[mooncake-transfer-engine/src/memory_location.cpp](../../../../sources/kvcache-ai__Mooncake/mooncake-transfer-engine/src/memory_location.cpp)<br>[mooncake-transfer-engine/src/transport/ascend_transport/ascend_direct_transport/context_manager.cpp](../../../../sources/kvcache-ai__Mooncake/mooncake-transfer-engine/src/transport/ascend_transport/ascend_direct_transport/context_manager.cpp)<br>[mooncake-transfer-engine/rust/src/memory_pool.rs](../../../../sources/kvcache-ai__Mooncake/mooncake-transfer-engine/rust/src/memory_pool.rs) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 59 | [mooncake-transfer-engine/tests/memory_location_test.cpp](../../../../sources/kvcache-ai__Mooncake/mooncake-transfer-engine/tests/memory_location_test.cpp)<br>[mooncake-transfer-engine/tent/src/runtime/memory_prober.cpp](../../../../sources/kvcache-ai__Mooncake/mooncake-transfer-engine/tent/src/runtime/memory_prober.cpp)<br>[mooncake-transfer-engine/tent/include/tent/runtime/memory_prober.h](../../../../sources/kvcache-ai__Mooncake/mooncake-transfer-engine/tent/include/tent/runtime/memory_prober.h)<br>[mooncake-transfer-engine/src/memory_location.cpp](../../../../sources/kvcache-ai__Mooncake/mooncake-transfer-engine/src/memory_location.cpp)<br>[mooncake-transfer-engine/rust/src/memory_pool.rs](../../../../sources/kvcache-ai__Mooncake/mooncake-transfer-engine/rust/src/memory_pool.rs)<br>[mooncake-transfer-engine/include/memory_location.h](../../../../sources/kvcache-ai__Mooncake/mooncake-transfer-engine/include/memory_location.h)<br>[mooncake-transfer-engine/example/memory_pool.cpp](../../../../sources/kvcache-ai__Mooncake/mooncake-transfer-engine/example/memory_pool.cpp)<br>[mooncake-store/src/memory_alloc.cpp](../../../../sources/kvcache-ai__Mooncake/mooncake-store/src/memory_alloc.cpp) |
| spec | 36 | [requirements_docs.txt](../../../../sources/kvcache-ai__Mooncake/requirements_docs.txt)<br>[requirements-dev.txt](../../../../sources/kvcache-ai__Mooncake/requirements-dev.txt)<br>[scripts/check_hicache_hugepage_requirements.py](../../../../sources/kvcache-ai__Mooncake/scripts/check_hicache_hugepage_requirements.py)<br>[scripts/test_hicache_hugepage_requirements.py](../../../../sources/kvcache-ai__Mooncake/scripts/test_hicache_hugepage_requirements.py)<br>[image/architecture.png](../../../../sources/kvcache-ai__Mooncake/image/architecture.png)<br>[docs/source/zh_archive/architecture.md](../../../../sources/kvcache-ai__Mooncake/docs/source/zh_archive/architecture.md)<br>[docs/source/image/architecture.png](../../../../sources/kvcache-ai__Mooncake/docs/source/image/architecture.png)<br>[docs/source/image/conductor/architecture.png](../../../../sources/kvcache-ai__Mooncake/docs/source/image/conductor/architecture.png) |
| eval | 300 | [scripts/bench_engram_store_27b.py](../../../../sources/kvcache-ai__Mooncake/scripts/bench_engram_store_27b.py)<br>[scripts/run_tests.sh](../../../../sources/kvcache-ai__Mooncake/scripts/run_tests.sh)<br>[scripts/test_async_store.py](../../../../sources/kvcache-ai__Mooncake/scripts/test_async_store.py)<br>[scripts/test_copy_move_api.py](../../../../sources/kvcache-ai__Mooncake/scripts/test_copy_move_api.py)<br>[scripts/test_drain_http_api.py](../../../../sources/kvcache-ai__Mooncake/scripts/test_drain_http_api.py)<br>[scripts/test_engram_store.py](../../../../sources/kvcache-ai__Mooncake/scripts/test_engram_store.py)<br>[scripts/test_hicache_hugepage_requirements.py](../../../../sources/kvcache-ai__Mooncake/scripts/test_hicache_hugepage_requirements.py)<br>[scripts/test_installation.sh](../../../../sources/kvcache-ai__Mooncake/scripts/test_installation.sh) |
| security | 0 | 명확하지 않음 |
| ci | 17 | [.github/workflows/assistant.yml](../../../../sources/kvcache-ai__Mooncake/.github/workflows/assistant.yml)<br>[.github/workflows/ci_ascend.yml](../../../../sources/kvcache-ai__Mooncake/.github/workflows/ci_ascend.yml)<br>[.github/workflows/ci_cu13.yml](../../../../sources/kvcache-ai__Mooncake/.github/workflows/ci_cu13.yml)<br>[.github/workflows/ci.yml](../../../../sources/kvcache-ai__Mooncake/.github/workflows/ci.yml)<br>[.github/workflows/code-review.yml](../../../../sources/kvcache-ai__Mooncake/.github/workflows/code-review.yml)<br>[.github/workflows/deploy.yml](../../../../sources/kvcache-ai__Mooncake/.github/workflows/deploy.yml)<br>[.github/workflows/e2e-ci.yml](../../../../sources/kvcache-ai__Mooncake/.github/workflows/e2e-ci.yml)<br>[.github/workflows/integration-test.yml](../../../../sources/kvcache-ai__Mooncake/.github/workflows/integration-test.yml) |
| container | 8 | [mooncake-store/tests/ha/leadership/backends/k8s/high_availability_k8s_test.cpp](../../../../sources/kvcache-ai__Mooncake/mooncake-store/tests/ha/leadership/backends/k8s/high_availability_k8s_test.cpp)<br>[mooncake-store/src/ha/leadership/backends/k8s/k8s_leader_coordinator.cpp](../../../../sources/kvcache-ai__Mooncake/mooncake-store/src/ha/leadership/backends/k8s/k8s_leader_coordinator.cpp)<br>[mooncake-store/include/ha/leadership/backends/k8s/k8s_leader_coordinator.h](../../../../sources/kvcache-ai__Mooncake/mooncake-store/include/ha/leadership/backends/k8s/k8s_leader_coordinator.h)<br>[monitoring/docker-compose.yml](../../../../sources/kvcache-ai__Mooncake/monitoring/docker-compose.yml)<br>[docs/source/deployment/mooncake-store-deployment-guide.md](../../../../sources/kvcache-ai__Mooncake/docs/source/deployment/mooncake-store-deployment-guide.md)<br>[docs/source/deployment/nvmf-ssd-deployment-guide.md](../../../../sources/kvcache-ai__Mooncake/docs/source/deployment/nvmf-ssd-deployment-guide.md)<br>[docs/source/deployment/ssd-offload.md](../../../../sources/kvcache-ai__Mooncake/docs/source/deployment/ssd-offload.md)<br>[.devcontainer/Dockerfile](../../../../sources/kvcache-ai__Mooncake/.devcontainer/Dockerfile) |
| instruction | 0 | 명확하지 않음 |
| docs | 146 | [README.md](../../../../sources/kvcache-ai__Mooncake/README.md)<br>[scripts/tone_tests/README_en.md](../../../../sources/kvcache-ai__Mooncake/scripts/tone_tests/README_en.md)<br>[scripts/tone_tests/README_zh.md](../../../../sources/kvcache-ai__Mooncake/scripts/tone_tests/README_zh.md)<br>[mooncake-wheel/mooncake/README.md](../../../../sources/kvcache-ai__Mooncake/mooncake-wheel/mooncake/README.md)<br>[mooncake-store/tests/e2e/readme.md](../../../../sources/kvcache-ai__Mooncake/mooncake-store/tests/e2e/readme.md)<br>[mooncake-store/src/hf3fs/README.md](../../../../sources/kvcache-ai__Mooncake/mooncake-store/src/hf3fs/README.md)<br>[mooncake-store/rust/README.md](../../../../sources/kvcache-ai__Mooncake/mooncake-store/rust/README.md)<br>[mooncake-pg/tests/README.md](../../../../sources/kvcache-ai__Mooncake/mooncake-pg/tests/README.md) |
| config | 13 | [requirements_docs.txt](../../../../sources/kvcache-ai__Mooncake/requirements_docs.txt)<br>[requirements-dev.txt](../../../../sources/kvcache-ai__Mooncake/requirements-dev.txt)<br>[mooncake-wheel/pyproject.toml](../../../../sources/kvcache-ai__Mooncake/mooncake-wheel/pyproject.toml)<br>[mooncake-transfer-engine/rust/Cargo.lock](../../../../sources/kvcache-ai__Mooncake/mooncake-transfer-engine/rust/Cargo.lock)<br>[mooncake-transfer-engine/rust/Cargo.toml](../../../../sources/kvcache-ai__Mooncake/mooncake-transfer-engine/rust/Cargo.toml)<br>[mooncake-transfer-engine/example/http-metadata-server/go.mod](../../../../sources/kvcache-ai__Mooncake/mooncake-transfer-engine/example/http-metadata-server/go.mod)<br>[mooncake-store/rust/Cargo.lock](../../../../sources/kvcache-ai__Mooncake/mooncake-store/rust/Cargo.lock)<br>[mooncake-store/rust/Cargo.toml](../../../../sources/kvcache-ai__Mooncake/mooncake-store/rust/Cargo.toml) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 300 | [scripts/bench_engram_store_27b.py](../../../../sources/kvcache-ai__Mooncake/scripts/bench_engram_store_27b.py)<br>[scripts/run_tests.sh](../../../../sources/kvcache-ai__Mooncake/scripts/run_tests.sh)<br>[scripts/test_async_store.py](../../../../sources/kvcache-ai__Mooncake/scripts/test_async_store.py)<br>[scripts/test_copy_move_api.py](../../../../sources/kvcache-ai__Mooncake/scripts/test_copy_move_api.py)<br>[scripts/test_drain_http_api.py](../../../../sources/kvcache-ai__Mooncake/scripts/test_drain_http_api.py)<br>[scripts/test_engram_store.py](../../../../sources/kvcache-ai__Mooncake/scripts/test_engram_store.py) |
| CI workflow | 17 | [.github/workflows/assistant.yml](../../../../sources/kvcache-ai__Mooncake/.github/workflows/assistant.yml)<br>[.github/workflows/ci_ascend.yml](../../../../sources/kvcache-ai__Mooncake/.github/workflows/ci_ascend.yml)<br>[.github/workflows/ci_cu13.yml](../../../../sources/kvcache-ai__Mooncake/.github/workflows/ci_cu13.yml)<br>[.github/workflows/ci.yml](../../../../sources/kvcache-ai__Mooncake/.github/workflows/ci.yml)<br>[.github/workflows/code-review.yml](../../../../sources/kvcache-ai__Mooncake/.github/workflows/code-review.yml)<br>[.github/workflows/deploy.yml](../../../../sources/kvcache-ai__Mooncake/.github/workflows/deploy.yml) |
| 컨테이너/배포 | 8 | [mooncake-store/tests/ha/leadership/backends/k8s/high_availability_k8s_test.cpp](../../../../sources/kvcache-ai__Mooncake/mooncake-store/tests/ha/leadership/backends/k8s/high_availability_k8s_test.cpp)<br>[mooncake-store/src/ha/leadership/backends/k8s/k8s_leader_coordinator.cpp](../../../../sources/kvcache-ai__Mooncake/mooncake-store/src/ha/leadership/backends/k8s/k8s_leader_coordinator.cpp)<br>[mooncake-store/include/ha/leadership/backends/k8s/k8s_leader_coordinator.h](../../../../sources/kvcache-ai__Mooncake/mooncake-store/include/ha/leadership/backends/k8s/k8s_leader_coordinator.h)<br>[monitoring/docker-compose.yml](../../../../sources/kvcache-ai__Mooncake/monitoring/docker-compose.yml)<br>[docs/source/deployment/mooncake-store-deployment-guide.md](../../../../sources/kvcache-ai__Mooncake/docs/source/deployment/mooncake-store-deployment-guide.md)<br>[docs/source/deployment/nvmf-ssd-deployment-guide.md](../../../../sources/kvcache-ai__Mooncake/docs/source/deployment/nvmf-ssd-deployment-guide.md) |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 상위 디렉터리가 많아 모듈 경계 재확인 필요 |
| operation | 없음 |
| security | security/policy 표면이 명확하지 않음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `mooncake-transfer-engine/rust/src/main.rs`, `mooncake-transfer-engine/example/http-metadata-server/main.go`, `mooncake-store/go/examples/basic/main.go`.
2. entrypoint를 따라 실행 흐름 확인: `mooncake-transfer-engine/rust/src/main.rs`, `mooncake-transfer-engine/example/http-metadata-server/main.go`, `mooncake-store/go/examples/basic/main.go`.
3. agent/tool runtime 매핑: `mooncake-transfer-engine/tests/memory_location_test.cpp`, `mooncake-transfer-engine/tent/src/transport/rdma/context.cpp`, `mooncake-transfer-engine/tent/src/runtime/memory_prober.cpp`.
4. retrieval/memory/indexing 확인: `mooncake-transfer-engine/tests/memory_location_test.cpp`, `mooncake-transfer-engine/tent/src/runtime/memory_prober.cpp`, `mooncake-transfer-engine/tent/include/tent/runtime/memory_prober.h`.
5. test/eval 파일로 동작 검증: `scripts/bench_engram_store_27b.py`, `scripts/run_tests.sh`, `scripts/test_async_store.py`.

## 기존 레포 인사이트

AI 인프라/서빙 관점에서 Mooncake is the serving platform for Kimi, a leading LLM service provided by Moonshot AI.. 핵심 구조 신호는 C++, README.md, ci, docs, docker, spec-artifacts이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 AI 인프라/서빙 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
