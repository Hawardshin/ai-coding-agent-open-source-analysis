# PaddlePaddle/FastDeploy Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

High-performance Inference and Deployment Toolkit for LLMs and VLMs based on PaddlePaddle

## 요약

- 조사 단위: `sources/PaddlePaddle__FastDeploy` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 2,445 files, 375 directories, depth score 128, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

AI 인프라/서빙 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 entrypoints=fastdeploy/golang_router/cmd/main.go, fastdeploy/entrypoints/cli/main.py, fastdeploy/entrypoints/cli/benchmark/main.py이고, 의존성 단서는 openai, fastapi, express, transformers, opentelemetry, prometheus, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | PaddlePaddle/FastDeploy |
| Topic | AI Infrastructure and Serving / AI 인프라/서빙 |
| Region | global |
| Language | Python |
| Stars | 3698 |
| Forks | 752 |
| License | none |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/PaddlePaddle__FastDeploy](../../../../sources/PaddlePaddle__FastDeploy) |
| Existing report | [reports/global-trending/repositories/PaddlePaddle__FastDeploy.md](../../../global-trending/repositories/PaddlePaddle__FastDeploy.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 2445 / 375 |
| Max observed depth | 9 |
| Top directories | .claude, .github, benchmarks, custom_ops, dockerfiles, docs, examples, fastdeploy, scripts, tests, tools |
| Top extensions | .py: 1165, .cu: 199, .h: 193, .md: 193, .yaml: 139, .cc: 123, .cuh: 65, .sh: 62, .xpu: 60, .cpp: 56, .yml: 44, .go: 38 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 76 |
| docs | documentation surface | 40 |
| .github | ci surface | 1 |
| benchmarks | validation surface | 1 |
| custom_ops | top-level component | 1 |
| dockerfiles | documentation surface | 1 |
| examples | top-level component | 1 |
| examples/cache_storage | examples workspace | 1 |
| examples/observability | examples workspace | 1 |
| examples/splitwise | examples workspace | 1 |
| fastdeploy | deployment surface | 1 |
| scripts | top-level component | 1 |
| tools | top-level component | 1 |


## How It Runs

_No command surface extracted from root manifests._


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | transformers |
| webRuntime | fastapi, express |
| developerSurface | none |
| observability | opentelemetry, prometheus |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| entrypoints | [fastdeploy/golang_router/cmd/main.go](../../../../sources/PaddlePaddle__FastDeploy/fastdeploy/golang_router/cmd/main.go) | entrypoints signal |
| entrypoints | [fastdeploy/entrypoints/cli/main.py](../../../../sources/PaddlePaddle__FastDeploy/fastdeploy/entrypoints/cli/main.py) | entrypoints signal |
| entrypoints | [fastdeploy/entrypoints/cli/benchmark/main.py](../../../../sources/PaddlePaddle__FastDeploy/fastdeploy/entrypoints/cli/benchmark/main.py) | entrypoints signal |
| container | [tools/dockerfile/docker_build.sh](../../../../sources/PaddlePaddle__FastDeploy/tools/dockerfile/docker_build.sh) | container signal |
| container | [tools/dockerfile/Dockerfile.ci](../../../../sources/PaddlePaddle__FastDeploy/tools/dockerfile/Dockerfile.ci) | container signal |
| container | [tools/dockerfile/requirements_paddle_nv.txt](../../../../sources/PaddlePaddle__FastDeploy/tools/dockerfile/requirements_paddle_nv.txt) | container signal |
| container | [tests/ci_validation/deploy/deploy.py](../../../../sources/PaddlePaddle__FastDeploy/tests/ci_validation/deploy/deploy.py) | container signal |
| config | [pyproject.toml](../../../../sources/PaddlePaddle__FastDeploy/pyproject.toml) | config signal |
| config | [requirements_dcu.txt](../../../../sources/PaddlePaddle__FastDeploy/requirements_dcu.txt) | config signal |
| config | [requirements_guided_decoding.txt](../../../../sources/PaddlePaddle__FastDeploy/requirements_guided_decoding.txt) | config signal |
| config | [requirements_iluvatar.txt](../../../../sources/PaddlePaddle__FastDeploy/requirements_iluvatar.txt) | config signal |
| ci | [.github/workflows/_accuracy_test.yml](../../../../sources/PaddlePaddle__FastDeploy/.github/workflows/_accuracy_test.yml) | ci signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 3 | [fastdeploy/golang_router/cmd/main.go](../../../../sources/PaddlePaddle__FastDeploy/fastdeploy/golang_router/cmd/main.go)<br>[fastdeploy/entrypoints/cli/main.py](../../../../sources/PaddlePaddle__FastDeploy/fastdeploy/entrypoints/cli/main.py)<br>[fastdeploy/entrypoints/cli/benchmark/main.py](../../../../sources/PaddlePaddle__FastDeploy/fastdeploy/entrypoints/cli/benchmark/main.py) |
| agentRuntime | 47 | [tools/dockerfile/docker_build.sh](../../../../sources/PaddlePaddle__FastDeploy/tools/dockerfile/docker_build.sh)<br>[tools/dockerfile/Dockerfile.ci](../../../../sources/PaddlePaddle__FastDeploy/tools/dockerfile/Dockerfile.ci)<br>[tools/dockerfile/requirements_paddle_nv.txt](../../../../sources/PaddlePaddle__FastDeploy/tools/dockerfile/requirements_paddle_nv.txt)<br>[tools/deep_gemm_pre-compile/generate_config.py](../../../../sources/PaddlePaddle__FastDeploy/tools/deep_gemm_pre-compile/generate_config.py)<br>[tools/deep_gemm_pre-compile/pre_compile.py](../../../../sources/PaddlePaddle__FastDeploy/tools/deep_gemm_pre-compile/pre_compile.py)<br>[tools/deep_gemm_pre-compile/pre_compile.sh](../../../../sources/PaddlePaddle__FastDeploy/tools/deep_gemm_pre-compile/pre_compile.sh)<br>[tools/deep_gemm_pre-compile/README.md](../../../../sources/PaddlePaddle__FastDeploy/tools/deep_gemm_pre-compile/README.md)<br>[tools/codestyle/pre_commit.sh](../../../../sources/PaddlePaddle__FastDeploy/tools/codestyle/pre_commit.sh) |
| mcp | 0 | not obvious |
| retrieval | 39 | [tests/worker/test_recover_batch_index_sampling_mask.py](../../../../sources/PaddlePaddle__FastDeploy/tests/worker/test_recover_batch_index_sampling_mask.py)<br>[tests/pooling/test_embedding.py](../../../../sources/PaddlePaddle__FastDeploy/tests/pooling/test_embedding.py)<br>[tests/pooling/test_Qwen3-Embedding_serving.py](../../../../sources/PaddlePaddle__FastDeploy/tests/pooling/test_Qwen3-Embedding_serving.py)<br>[tests/operators/test_fused_get_rotary_embedding.py](../../../../sources/PaddlePaddle__FastDeploy/tests/operators/test_fused_get_rotary_embedding.py)<br>[tests/operators/test_fused_neox_rope_embedding.py](../../../../sources/PaddlePaddle__FastDeploy/tests/operators/test_fused_neox_rope_embedding.py)<br>[tests/graph_optimization/test_block_wise_cuda_graph.py](../../../../sources/PaddlePaddle__FastDeploy/tests/graph_optimization/test_block_wise_cuda_graph.py)<br>[tests/graph_optimization/test_cuda_graph_dynamic_subgraph.py](../../../../sources/PaddlePaddle__FastDeploy/tests/graph_optimization/test_cuda_graph_dynamic_subgraph.py)<br>[tests/graph_optimization/test_cuda_graph_op_unit.py](../../../../sources/PaddlePaddle__FastDeploy/tests/graph_optimization/test_cuda_graph_op_unit.py) |
| spec | 29 | [requirements_dcu.txt](../../../../sources/PaddlePaddle__FastDeploy/requirements_dcu.txt)<br>[requirements_guided_decoding.txt](../../../../sources/PaddlePaddle__FastDeploy/requirements_guided_decoding.txt)<br>[requirements_iluvatar.txt](../../../../sources/PaddlePaddle__FastDeploy/requirements_iluvatar.txt)<br>[requirements_metaxgpu.txt](../../../../sources/PaddlePaddle__FastDeploy/requirements_metaxgpu.txt)<br>[requirements.txt](../../../../sources/PaddlePaddle__FastDeploy/requirements.txt)<br>[tools/dockerfile/requirements_paddle_nv.txt](../../../../sources/PaddlePaddle__FastDeploy/tools/dockerfile/requirements_paddle_nv.txt)<br>[tests/spec_decode/test_benchmark_ngram_kernel.py](../../../../sources/PaddlePaddle__FastDeploy/tests/spec_decode/test_benchmark_ngram_kernel.py)<br>[tests/spec_decode/test_mtp_proposer.py](../../../../sources/PaddlePaddle__FastDeploy/tests/spec_decode/test_mtp_proposer.py) |
| eval | 707 | [tests/conftest.py](../../../../sources/PaddlePaddle__FastDeploy/tests/conftest.py)<br>[tests/cov_pytest.ini](../../../../sources/PaddlePaddle__FastDeploy/tests/cov_pytest.ini)<br>[tests/test_envs.py](../../../../sources/PaddlePaddle__FastDeploy/tests/test_envs.py)<br>[tests/utils.py](../../../../sources/PaddlePaddle__FastDeploy/tests/utils.py)<br>[tests/xpu_ci/conftest.py](../../../../sources/PaddlePaddle__FastDeploy/tests/xpu_ci/conftest.py)<br>[tests/xpu_ci/README.md](../../../../sources/PaddlePaddle__FastDeploy/tests/xpu_ci/README.md)<br>[tests/xpu_ci/unit_test/pytest.ini](../../../../sources/PaddlePaddle__FastDeploy/tests/xpu_ci/unit_test/pytest.ini)<br>[tests/xpu_ci/unit_test/test_placeholder.py](../../../../sources/PaddlePaddle__FastDeploy/tests/xpu_ci/unit_test/test_placeholder.py) |
| security | 2 | [tests/distributed/test_custom_allreduce_guard.py](../../../../sources/PaddlePaddle__FastDeploy/tests/distributed/test_custom_allreduce_guard.py)<br>[custom_ops/gpu_ops/cutlass_extensions/gemm/dispatch_policy.hpp](../../../../sources/PaddlePaddle__FastDeploy/custom_ops/gpu_ops/cutlass_extensions/gemm/dispatch_policy.hpp) |
| ci | 41 | [.github/workflows/_accuracy_test.yml](../../../../sources/PaddlePaddle__FastDeploy/.github/workflows/_accuracy_test.yml)<br>[.github/workflows/_base_test.yml](../../../../sources/PaddlePaddle__FastDeploy/.github/workflows/_base_test.yml)<br>[.github/workflows/_build_linux_cu129.yml](../../../../sources/PaddlePaddle__FastDeploy/.github/workflows/_build_linux_cu129.yml)<br>[.github/workflows/_build_linux_cu130.yml](../../../../sources/PaddlePaddle__FastDeploy/.github/workflows/_build_linux_cu130.yml)<br>[.github/workflows/_build_linux_fd_router.yml](../../../../sources/PaddlePaddle__FastDeploy/.github/workflows/_build_linux_fd_router.yml)<br>[.github/workflows/_build_linux_rl.yml](../../../../sources/PaddlePaddle__FastDeploy/.github/workflows/_build_linux_rl.yml)<br>[.github/workflows/_build_linux.yml](../../../../sources/PaddlePaddle__FastDeploy/.github/workflows/_build_linux.yml)<br>[.github/workflows/_build_xpu.yml](../../../../sources/PaddlePaddle__FastDeploy/.github/workflows/_build_xpu.yml) |
| container | 11 | [tools/dockerfile/docker_build.sh](../../../../sources/PaddlePaddle__FastDeploy/tools/dockerfile/docker_build.sh)<br>[tools/dockerfile/Dockerfile.ci](../../../../sources/PaddlePaddle__FastDeploy/tools/dockerfile/Dockerfile.ci)<br>[tools/dockerfile/requirements_paddle_nv.txt](../../../../sources/PaddlePaddle__FastDeploy/tools/dockerfile/requirements_paddle_nv.txt)<br>[tests/ci_validation/deploy/deploy.py](../../../../sources/PaddlePaddle__FastDeploy/tests/ci_validation/deploy/deploy.py)<br>[tests/ci_validation/deploy/ernie45t_21b_cinn_fp8.yaml](../../../../sources/PaddlePaddle__FastDeploy/tests/ci_validation/deploy/ernie45t_21b_cinn_fp8.yaml)<br>[tests/ci_validation/deploy/ernie45t_21b_cinn_wint4.yaml](../../../../sources/PaddlePaddle__FastDeploy/tests/ci_validation/deploy/ernie45t_21b_cinn_wint4.yaml)<br>[tests/ci_validation/deploy/ernie45t_21b_sot_fp8.yaml](../../../../sources/PaddlePaddle__FastDeploy/tests/ci_validation/deploy/ernie45t_21b_sot_fp8.yaml)<br>[tests/ci_validation/deploy/ernie45t_21b_sot_wint4.yaml](../../../../sources/PaddlePaddle__FastDeploy/tests/ci_validation/deploy/ernie45t_21b_sot_wint4.yaml) |
| instruction | 1 | [.github/copilot-instructions.md](../../../../sources/PaddlePaddle__FastDeploy/.github/copilot-instructions.md) |
| docs | 204 | [mkdocs.yml](../../../../sources/PaddlePaddle__FastDeploy/mkdocs.yml)<br>[README_CN.md](../../../../sources/PaddlePaddle__FastDeploy/README_CN.md)<br>[README_EN.md](../../../../sources/PaddlePaddle__FastDeploy/README_EN.md)<br>[tools/deep_gemm_pre-compile/README.md](../../../../sources/PaddlePaddle__FastDeploy/tools/deep_gemm_pre-compile/README.md)<br>[tests/xpu_ci/README.md](../../../../sources/PaddlePaddle__FastDeploy/tests/xpu_ci/README.md)<br>[fastdeploy/cache_manager/transfer_factory/kvcache_transfer/README_CN.md](../../../../sources/PaddlePaddle__FastDeploy/fastdeploy/cache_manager/transfer_factory/kvcache_transfer/README_CN.md)<br>[fastdeploy/cache_manager/transfer_factory/kvcache_transfer/README.md](../../../../sources/PaddlePaddle__FastDeploy/fastdeploy/cache_manager/transfer_factory/kvcache_transfer/README.md)<br>[examples/splitwise/README.md](../../../../sources/PaddlePaddle__FastDeploy/examples/splitwise/README.md) |
| config | 13 | [pyproject.toml](../../../../sources/PaddlePaddle__FastDeploy/pyproject.toml)<br>[requirements_dcu.txt](../../../../sources/PaddlePaddle__FastDeploy/requirements_dcu.txt)<br>[requirements_guided_decoding.txt](../../../../sources/PaddlePaddle__FastDeploy/requirements_guided_decoding.txt)<br>[requirements_iluvatar.txt](../../../../sources/PaddlePaddle__FastDeploy/requirements_iluvatar.txt)<br>[requirements_metaxgpu.txt](../../../../sources/PaddlePaddle__FastDeploy/requirements_metaxgpu.txt)<br>[requirements.txt](../../../../sources/PaddlePaddle__FastDeploy/requirements.txt)<br>[tools/dockerfile/requirements_paddle_nv.txt](../../../../sources/PaddlePaddle__FastDeploy/tools/dockerfile/requirements_paddle_nv.txt)<br>[tests/ci_validation/server/requirements.txt](../../../../sources/PaddlePaddle__FastDeploy/tests/ci_validation/server/requirements.txt) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 707 | [tests/conftest.py](../../../../sources/PaddlePaddle__FastDeploy/tests/conftest.py)<br>[tests/cov_pytest.ini](../../../../sources/PaddlePaddle__FastDeploy/tests/cov_pytest.ini)<br>[tests/test_envs.py](../../../../sources/PaddlePaddle__FastDeploy/tests/test_envs.py)<br>[tests/utils.py](../../../../sources/PaddlePaddle__FastDeploy/tests/utils.py)<br>[tests/xpu_ci/conftest.py](../../../../sources/PaddlePaddle__FastDeploy/tests/xpu_ci/conftest.py)<br>[tests/xpu_ci/README.md](../../../../sources/PaddlePaddle__FastDeploy/tests/xpu_ci/README.md) |
| CI workflows | 41 | [.github/workflows/_accuracy_test.yml](../../../../sources/PaddlePaddle__FastDeploy/.github/workflows/_accuracy_test.yml)<br>[.github/workflows/_base_test.yml](../../../../sources/PaddlePaddle__FastDeploy/.github/workflows/_base_test.yml)<br>[.github/workflows/_build_linux_cu129.yml](../../../../sources/PaddlePaddle__FastDeploy/.github/workflows/_build_linux_cu129.yml)<br>[.github/workflows/_build_linux_cu130.yml](../../../../sources/PaddlePaddle__FastDeploy/.github/workflows/_build_linux_cu130.yml)<br>[.github/workflows/_build_linux_fd_router.yml](../../../../sources/PaddlePaddle__FastDeploy/.github/workflows/_build_linux_fd_router.yml)<br>[.github/workflows/_build_linux_rl.yml](../../../../sources/PaddlePaddle__FastDeploy/.github/workflows/_build_linux_rl.yml) |
| Containers / deploy | 11 | [tools/dockerfile/docker_build.sh](../../../../sources/PaddlePaddle__FastDeploy/tools/dockerfile/docker_build.sh)<br>[tools/dockerfile/Dockerfile.ci](../../../../sources/PaddlePaddle__FastDeploy/tools/dockerfile/Dockerfile.ci)<br>[tools/dockerfile/requirements_paddle_nv.txt](../../../../sources/PaddlePaddle__FastDeploy/tools/dockerfile/requirements_paddle_nv.txt)<br>[tests/ci_validation/deploy/deploy.py](../../../../sources/PaddlePaddle__FastDeploy/tests/ci_validation/deploy/deploy.py)<br>[tests/ci_validation/deploy/ernie45t_21b_cinn_fp8.yaml](../../../../sources/PaddlePaddle__FastDeploy/tests/ci_validation/deploy/ernie45t_21b_cinn_fp8.yaml)<br>[tests/ci_validation/deploy/ernie45t_21b_cinn_wint4.yaml](../../../../sources/PaddlePaddle__FastDeploy/tests/ci_validation/deploy/ernie45t_21b_cinn_wint4.yaml) |
| Security / policy | 2 | [tests/distributed/test_custom_allreduce_guard.py](../../../../sources/PaddlePaddle__FastDeploy/tests/distributed/test_custom_allreduce_guard.py)<br>[custom_ops/gpu_ops/cutlass_extensions/gemm/dispatch_policy.hpp](../../../../sources/PaddlePaddle__FastDeploy/custom_ops/gpu_ops/cutlass_extensions/gemm/dispatch_policy.hpp) |
| Agent instructions | 1 | [.github/copilot-instructions.md](../../../../sources/PaddlePaddle__FastDeploy/.github/copilot-instructions.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `fastdeploy/golang_router/cmd/main.go`, `fastdeploy/entrypoints/cli/main.py`, `fastdeploy/entrypoints/cli/benchmark/main.py`.
2. Trace execution through entrypoints: `fastdeploy/golang_router/cmd/main.go`, `fastdeploy/entrypoints/cli/main.py`, `fastdeploy/entrypoints/cli/benchmark/main.py`.
3. Map agent/tool runtime through: `tools/dockerfile/docker_build.sh`, `tools/dockerfile/Dockerfile.ci`, `tools/dockerfile/requirements_paddle_nv.txt`.
4. Inspect retrieval/memory/indexing through: `tests/worker/test_recover_batch_index_sampling_mask.py`, `tests/pooling/test_embedding.py`, `tests/pooling/test_Qwen3-Embedding_serving.py`.
5. Verify behavior through test/eval files: `tests/conftest.py`, `tests/cov_pytest.ini`, `tests/test_envs.py`.

## Existing Repository Insight

AI 인프라/서빙 관점에서 High performance Inference and Deployment Toolkit for LLMs and VLMs based on PaddlePaddle. 핵심 구조 신호는 Python, pyproject.toml, requirements.txt, LICENSE, openai, fastapi이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 AI 인프라/서빙 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
