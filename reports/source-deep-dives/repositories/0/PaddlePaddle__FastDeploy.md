# PaddlePaddle/FastDeploy 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

High-performance Inference and Deployment Toolkit for LLMs and VLMs based on PaddlePaddle

## 요약

- 조사 단위: `sources/PaddlePaddle__FastDeploy` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 2,445 files, 375 directories, depth score 122, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

AI 인프라/서빙 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 entrypoints=fastdeploy/golang_router/cmd/main.go, fastdeploy/entrypoints/cli/main.py, fastdeploy/entrypoints/cli/benchmark/main.py이고, 의존성 단서는 openai, fastapi, express, transformers, opentelemetry, prometheus, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | PaddlePaddle/FastDeploy |
| 주제 | AI 인프라/서빙 / AI 인프라/서빙 |
| Region | global |
| Language | Python |
| Stars | 3698 |
| Forks | 752 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/PaddlePaddle__FastDeploy](../../../../sources/PaddlePaddle__FastDeploy) |
| 기존 보고서 | [reports/global-trending/repositories/PaddlePaddle__FastDeploy.md](../../../global-trending/repositories/PaddlePaddle__FastDeploy.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 2445 / 375 |
| 관측 최대 깊이 | 9 |
| 상위 디렉터리 | .claude, .github, benchmarks, custom_ops, dockerfiles, docs, examples, fastdeploy, scripts, tests, tools |
| 상위 확장자 | .py: 1165, .cu: 199, .h: 193, .md: 193, .yaml: 139, .cc: 123, .cuh: 65, .sh: 62, .xpu: 60, .cpp: 56, .yml: 44, .go: 38 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
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


## 실행 방식

_root manifest에서 추출된 command surface가 없습니다._


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | transformers |
| webRuntime | fastapi, express |
| developerSurface | 없음 |
| observability | opentelemetry, prometheus |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 3 | [fastdeploy/golang_router/cmd/main.go](../../../../sources/PaddlePaddle__FastDeploy/fastdeploy/golang_router/cmd/main.go)<br>[fastdeploy/entrypoints/cli/main.py](../../../../sources/PaddlePaddle__FastDeploy/fastdeploy/entrypoints/cli/main.py)<br>[fastdeploy/entrypoints/cli/benchmark/main.py](../../../../sources/PaddlePaddle__FastDeploy/fastdeploy/entrypoints/cli/benchmark/main.py) |
| agentRuntime | 47 | [tools/dockerfile/docker_build.sh](../../../../sources/PaddlePaddle__FastDeploy/tools/dockerfile/docker_build.sh)<br>[tools/dockerfile/Dockerfile.ci](../../../../sources/PaddlePaddle__FastDeploy/tools/dockerfile/Dockerfile.ci)<br>[tools/dockerfile/requirements_paddle_nv.txt](../../../../sources/PaddlePaddle__FastDeploy/tools/dockerfile/requirements_paddle_nv.txt)<br>[tools/deep_gemm_pre-compile/generate_config.py](../../../../sources/PaddlePaddle__FastDeploy/tools/deep_gemm_pre-compile/generate_config.py)<br>[tools/deep_gemm_pre-compile/pre_compile.py](../../../../sources/PaddlePaddle__FastDeploy/tools/deep_gemm_pre-compile/pre_compile.py)<br>[tools/deep_gemm_pre-compile/pre_compile.sh](../../../../sources/PaddlePaddle__FastDeploy/tools/deep_gemm_pre-compile/pre_compile.sh)<br>[tools/deep_gemm_pre-compile/README.md](../../../../sources/PaddlePaddle__FastDeploy/tools/deep_gemm_pre-compile/README.md)<br>[tools/codestyle/pre_commit.sh](../../../../sources/PaddlePaddle__FastDeploy/tools/codestyle/pre_commit.sh) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 39 | [tests/worker/test_recover_batch_index_sampling_mask.py](../../../../sources/PaddlePaddle__FastDeploy/tests/worker/test_recover_batch_index_sampling_mask.py)<br>[tests/pooling/test_embedding.py](../../../../sources/PaddlePaddle__FastDeploy/tests/pooling/test_embedding.py)<br>[tests/pooling/test_Qwen3-Embedding_serving.py](../../../../sources/PaddlePaddle__FastDeploy/tests/pooling/test_Qwen3-Embedding_serving.py)<br>[tests/operators/test_fused_get_rotary_embedding.py](../../../../sources/PaddlePaddle__FastDeploy/tests/operators/test_fused_get_rotary_embedding.py)<br>[tests/operators/test_fused_neox_rope_embedding.py](../../../../sources/PaddlePaddle__FastDeploy/tests/operators/test_fused_neox_rope_embedding.py)<br>[tests/graph_optimization/test_block_wise_cuda_graph.py](../../../../sources/PaddlePaddle__FastDeploy/tests/graph_optimization/test_block_wise_cuda_graph.py)<br>[tests/graph_optimization/test_cuda_graph_dynamic_subgraph.py](../../../../sources/PaddlePaddle__FastDeploy/tests/graph_optimization/test_cuda_graph_dynamic_subgraph.py)<br>[tests/graph_optimization/test_cuda_graph_op_unit.py](../../../../sources/PaddlePaddle__FastDeploy/tests/graph_optimization/test_cuda_graph_op_unit.py) |
| spec | 29 | [requirements_dcu.txt](../../../../sources/PaddlePaddle__FastDeploy/requirements_dcu.txt)<br>[requirements_guided_decoding.txt](../../../../sources/PaddlePaddle__FastDeploy/requirements_guided_decoding.txt)<br>[requirements_iluvatar.txt](../../../../sources/PaddlePaddle__FastDeploy/requirements_iluvatar.txt)<br>[requirements_metaxgpu.txt](../../../../sources/PaddlePaddle__FastDeploy/requirements_metaxgpu.txt)<br>[requirements.txt](../../../../sources/PaddlePaddle__FastDeploy/requirements.txt)<br>[tools/dockerfile/requirements_paddle_nv.txt](../../../../sources/PaddlePaddle__FastDeploy/tools/dockerfile/requirements_paddle_nv.txt)<br>[tests/spec_decode/test_benchmark_ngram_kernel.py](../../../../sources/PaddlePaddle__FastDeploy/tests/spec_decode/test_benchmark_ngram_kernel.py)<br>[tests/spec_decode/test_mtp_proposer.py](../../../../sources/PaddlePaddle__FastDeploy/tests/spec_decode/test_mtp_proposer.py) |
| eval | 707 | [tests/conftest.py](../../../../sources/PaddlePaddle__FastDeploy/tests/conftest.py)<br>[tests/cov_pytest.ini](../../../../sources/PaddlePaddle__FastDeploy/tests/cov_pytest.ini)<br>[tests/test_envs.py](../../../../sources/PaddlePaddle__FastDeploy/tests/test_envs.py)<br>[tests/utils.py](../../../../sources/PaddlePaddle__FastDeploy/tests/utils.py)<br>[tests/xpu_ci/conftest.py](../../../../sources/PaddlePaddle__FastDeploy/tests/xpu_ci/conftest.py)<br>[tests/xpu_ci/README.md](../../../../sources/PaddlePaddle__FastDeploy/tests/xpu_ci/README.md)<br>[tests/xpu_ci/unit_test/pytest.ini](../../../../sources/PaddlePaddle__FastDeploy/tests/xpu_ci/unit_test/pytest.ini)<br>[tests/xpu_ci/unit_test/test_placeholder.py](../../../../sources/PaddlePaddle__FastDeploy/tests/xpu_ci/unit_test/test_placeholder.py) |
| security | 2 | [tests/distributed/test_custom_allreduce_guard.py](../../../../sources/PaddlePaddle__FastDeploy/tests/distributed/test_custom_allreduce_guard.py)<br>[custom_ops/gpu_ops/cutlass_extensions/gemm/dispatch_policy.hpp](../../../../sources/PaddlePaddle__FastDeploy/custom_ops/gpu_ops/cutlass_extensions/gemm/dispatch_policy.hpp) |
| ci | 41 | [.github/workflows/_accuracy_test.yml](../../../../sources/PaddlePaddle__FastDeploy/.github/workflows/_accuracy_test.yml)<br>[.github/workflows/_base_test.yml](../../../../sources/PaddlePaddle__FastDeploy/.github/workflows/_base_test.yml)<br>[.github/workflows/_build_linux_cu129.yml](../../../../sources/PaddlePaddle__FastDeploy/.github/workflows/_build_linux_cu129.yml)<br>[.github/workflows/_build_linux_cu130.yml](../../../../sources/PaddlePaddle__FastDeploy/.github/workflows/_build_linux_cu130.yml)<br>[.github/workflows/_build_linux_fd_router.yml](../../../../sources/PaddlePaddle__FastDeploy/.github/workflows/_build_linux_fd_router.yml)<br>[.github/workflows/_build_linux_rl.yml](../../../../sources/PaddlePaddle__FastDeploy/.github/workflows/_build_linux_rl.yml)<br>[.github/workflows/_build_linux.yml](../../../../sources/PaddlePaddle__FastDeploy/.github/workflows/_build_linux.yml)<br>[.github/workflows/_build_xpu.yml](../../../../sources/PaddlePaddle__FastDeploy/.github/workflows/_build_xpu.yml) |
| container | 11 | [tools/dockerfile/docker_build.sh](../../../../sources/PaddlePaddle__FastDeploy/tools/dockerfile/docker_build.sh)<br>[tools/dockerfile/Dockerfile.ci](../../../../sources/PaddlePaddle__FastDeploy/tools/dockerfile/Dockerfile.ci)<br>[tools/dockerfile/requirements_paddle_nv.txt](../../../../sources/PaddlePaddle__FastDeploy/tools/dockerfile/requirements_paddle_nv.txt)<br>[tests/ci_validation/deploy/deploy.py](../../../../sources/PaddlePaddle__FastDeploy/tests/ci_validation/deploy/deploy.py)<br>[tests/ci_validation/deploy/ernie45t_21b_cinn_fp8.yaml](../../../../sources/PaddlePaddle__FastDeploy/tests/ci_validation/deploy/ernie45t_21b_cinn_fp8.yaml)<br>[tests/ci_validation/deploy/ernie45t_21b_cinn_wint4.yaml](../../../../sources/PaddlePaddle__FastDeploy/tests/ci_validation/deploy/ernie45t_21b_cinn_wint4.yaml)<br>[tests/ci_validation/deploy/ernie45t_21b_sot_fp8.yaml](../../../../sources/PaddlePaddle__FastDeploy/tests/ci_validation/deploy/ernie45t_21b_sot_fp8.yaml)<br>[tests/ci_validation/deploy/ernie45t_21b_sot_wint4.yaml](../../../../sources/PaddlePaddle__FastDeploy/tests/ci_validation/deploy/ernie45t_21b_sot_wint4.yaml) |
| instruction | 1 | [.github/copilot-instructions.md](../../../../sources/PaddlePaddle__FastDeploy/.github/copilot-instructions.md) |
| docs | 204 | [mkdocs.yml](../../../../sources/PaddlePaddle__FastDeploy/mkdocs.yml)<br>[README_CN.md](../../../../sources/PaddlePaddle__FastDeploy/README_CN.md)<br>[README_EN.md](../../../../sources/PaddlePaddle__FastDeploy/README_EN.md)<br>[tools/deep_gemm_pre-compile/README.md](../../../../sources/PaddlePaddle__FastDeploy/tools/deep_gemm_pre-compile/README.md)<br>[tests/xpu_ci/README.md](../../../../sources/PaddlePaddle__FastDeploy/tests/xpu_ci/README.md)<br>[fastdeploy/cache_manager/transfer_factory/kvcache_transfer/README_CN.md](../../../../sources/PaddlePaddle__FastDeploy/fastdeploy/cache_manager/transfer_factory/kvcache_transfer/README_CN.md)<br>[fastdeploy/cache_manager/transfer_factory/kvcache_transfer/README.md](../../../../sources/PaddlePaddle__FastDeploy/fastdeploy/cache_manager/transfer_factory/kvcache_transfer/README.md)<br>[examples/splitwise/README.md](../../../../sources/PaddlePaddle__FastDeploy/examples/splitwise/README.md) |
| config | 13 | [pyproject.toml](../../../../sources/PaddlePaddle__FastDeploy/pyproject.toml)<br>[requirements_dcu.txt](../../../../sources/PaddlePaddle__FastDeploy/requirements_dcu.txt)<br>[requirements_guided_decoding.txt](../../../../sources/PaddlePaddle__FastDeploy/requirements_guided_decoding.txt)<br>[requirements_iluvatar.txt](../../../../sources/PaddlePaddle__FastDeploy/requirements_iluvatar.txt)<br>[requirements_metaxgpu.txt](../../../../sources/PaddlePaddle__FastDeploy/requirements_metaxgpu.txt)<br>[requirements.txt](../../../../sources/PaddlePaddle__FastDeploy/requirements.txt)<br>[tools/dockerfile/requirements_paddle_nv.txt](../../../../sources/PaddlePaddle__FastDeploy/tools/dockerfile/requirements_paddle_nv.txt)<br>[tests/ci_validation/server/requirements.txt](../../../../sources/PaddlePaddle__FastDeploy/tests/ci_validation/server/requirements.txt) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 707 | [tests/conftest.py](../../../../sources/PaddlePaddle__FastDeploy/tests/conftest.py)<br>[tests/cov_pytest.ini](../../../../sources/PaddlePaddle__FastDeploy/tests/cov_pytest.ini)<br>[tests/test_envs.py](../../../../sources/PaddlePaddle__FastDeploy/tests/test_envs.py)<br>[tests/utils.py](../../../../sources/PaddlePaddle__FastDeploy/tests/utils.py)<br>[tests/xpu_ci/conftest.py](../../../../sources/PaddlePaddle__FastDeploy/tests/xpu_ci/conftest.py)<br>[tests/xpu_ci/README.md](../../../../sources/PaddlePaddle__FastDeploy/tests/xpu_ci/README.md) |
| CI workflow | 41 | [.github/workflows/_accuracy_test.yml](../../../../sources/PaddlePaddle__FastDeploy/.github/workflows/_accuracy_test.yml)<br>[.github/workflows/_base_test.yml](../../../../sources/PaddlePaddle__FastDeploy/.github/workflows/_base_test.yml)<br>[.github/workflows/_build_linux_cu129.yml](../../../../sources/PaddlePaddle__FastDeploy/.github/workflows/_build_linux_cu129.yml)<br>[.github/workflows/_build_linux_cu130.yml](../../../../sources/PaddlePaddle__FastDeploy/.github/workflows/_build_linux_cu130.yml)<br>[.github/workflows/_build_linux_fd_router.yml](../../../../sources/PaddlePaddle__FastDeploy/.github/workflows/_build_linux_fd_router.yml)<br>[.github/workflows/_build_linux_rl.yml](../../../../sources/PaddlePaddle__FastDeploy/.github/workflows/_build_linux_rl.yml) |
| 컨테이너/배포 | 11 | [tools/dockerfile/docker_build.sh](../../../../sources/PaddlePaddle__FastDeploy/tools/dockerfile/docker_build.sh)<br>[tools/dockerfile/Dockerfile.ci](../../../../sources/PaddlePaddle__FastDeploy/tools/dockerfile/Dockerfile.ci)<br>[tools/dockerfile/requirements_paddle_nv.txt](../../../../sources/PaddlePaddle__FastDeploy/tools/dockerfile/requirements_paddle_nv.txt)<br>[tests/ci_validation/deploy/deploy.py](../../../../sources/PaddlePaddle__FastDeploy/tests/ci_validation/deploy/deploy.py)<br>[tests/ci_validation/deploy/ernie45t_21b_cinn_fp8.yaml](../../../../sources/PaddlePaddle__FastDeploy/tests/ci_validation/deploy/ernie45t_21b_cinn_fp8.yaml)<br>[tests/ci_validation/deploy/ernie45t_21b_cinn_wint4.yaml](../../../../sources/PaddlePaddle__FastDeploy/tests/ci_validation/deploy/ernie45t_21b_cinn_wint4.yaml) |
| 보안/정책 | 2 | [tests/distributed/test_custom_allreduce_guard.py](../../../../sources/PaddlePaddle__FastDeploy/tests/distributed/test_custom_allreduce_guard.py)<br>[custom_ops/gpu_ops/cutlass_extensions/gemm/dispatch_policy.hpp](../../../../sources/PaddlePaddle__FastDeploy/custom_ops/gpu_ops/cutlass_extensions/gemm/dispatch_policy.hpp) |
| 에이전트 지시문 | 1 | [.github/copilot-instructions.md](../../../../sources/PaddlePaddle__FastDeploy/.github/copilot-instructions.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `fastdeploy/golang_router/cmd/main.go`, `fastdeploy/entrypoints/cli/main.py`, `fastdeploy/entrypoints/cli/benchmark/main.py`.
2. entrypoint를 따라 실행 흐름 확인: `fastdeploy/golang_router/cmd/main.go`, `fastdeploy/entrypoints/cli/main.py`, `fastdeploy/entrypoints/cli/benchmark/main.py`.
3. agent/tool runtime 매핑: `tools/dockerfile/docker_build.sh`, `tools/dockerfile/Dockerfile.ci`, `tools/dockerfile/requirements_paddle_nv.txt`.
4. retrieval/memory/indexing 확인: `tests/worker/test_recover_batch_index_sampling_mask.py`, `tests/pooling/test_embedding.py`, `tests/pooling/test_Qwen3-Embedding_serving.py`.
5. test/eval 파일로 동작 검증: `tests/conftest.py`, `tests/cov_pytest.ini`, `tests/test_envs.py`.

## 기존 레포 인사이트

AI 인프라/서빙 관점에서 High performance Inference and Deployment Toolkit for LLMs and VLMs based on PaddlePaddle. 핵심 구조 신호는 Python, pyproject.toml, requirements.txt, LICENSE, openai, fastapi이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 AI 인프라/서빙 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
