# NVIDIA/Model-Optimizer 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

A unified library of SOTA model optimization techniques like quantization, distillation, pruning, neural architecture search, speculative decoding, etc. It compresses deep learning models for downstream deployment frameworks like TensorRT-LLM, TensorRT, vLLM, etc. to optimize inference speed.

## 요약

- 조사 단위: `sources/NVIDIA__Model-Optimizer` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 1,775 files, 529 directories, depth score 126, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

AI 인프라/서빙 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 entrypoints=tools/mcp/modelopt_mcp/server.py, tools/debugger/server.sh, modelopt/onnx/quantization/__main__.py이고, 의존성 단서는 pydantic, torch, transformers, vllm, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | NVIDIA/Model-Optimizer |
| 주제 | AI 인프라/서빙 / AI 인프라/서빙 |
| Region | global |
| Language | Python |
| Stars | 2944 |
| Forks | 450 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/NVIDIA__Model-Optimizer](../../../../sources/NVIDIA__Model-Optimizer) |
| 기존 보고서 | [reports/global-trending/repositories/NVIDIA__Model-Optimizer.md](../../../global-trending/repositories/NVIDIA__Model-Optimizer.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 1775 / 529 |
| 관측 최대 깊이 | 10 |
| 상위 디렉터리 | .agents, .claude, .github, .gitlab, docs, examples, experimental, modelopt, modelopt_recipes, tests, tools |
| 상위 확장자 | .py: 1100, .yaml: 279, .md: 157, .sh: 58, .rst: 37, .txt: 26, (none): 20, .yml: 18, .png: 17, .ipynb: 15, .json: 11, .cpp: 7 |
| 소스 패턴 | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 35 |
| examples/windows | examples workspace | 26 |
| examples/puzzletron | examples workspace | 24 |
| examples/diffusers | examples workspace | 9 |
| docs | documentation surface | 4 |
| examples/llm_qat | examples workspace | 4 |
| examples/speculative_decoding | examples workspace | 4 |
| examples/llm_distill | examples workspace | 3 |
| examples/specdec_bench | examples workspace | 3 |
| examples/torch_onnx | examples workspace | 3 |
| examples/cnn_qat | examples workspace | 2 |
| examples/gpt-oss | examples workspace | 2 |
| examples/llm_eval | examples workspace | 2 |
| examples/llm_ptq | examples workspace | 2 |
| examples/llm_sparsity | examples workspace | 2 |
| examples/onnx_ptq | examples workspace | 2 |
| examples/vllm_serve | examples workspace | 2 |
| .github | ci surface | 1 |


## 실행 방식

_root manifest에서 추출된 command surface가 없습니다._


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | torch, transformers, vllm |
| webRuntime | 없음 |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| entrypoints | [tools/mcp/modelopt_mcp/server.py](../../../../sources/NVIDIA__Model-Optimizer/tools/mcp/modelopt_mcp/server.py) | entrypoints signal |
| entrypoints | [tools/debugger/server.sh](../../../../sources/NVIDIA__Model-Optimizer/tools/debugger/server.sh) | entrypoints signal |
| entrypoints | [modelopt/onnx/quantization/__main__.py](../../../../sources/NVIDIA__Model-Optimizer/modelopt/onnx/quantization/__main__.py) | entrypoints signal |
| entrypoints | [modelopt/onnx/quantization/autotune/__main__.py](../../../../sources/NVIDIA__Model-Optimizer/modelopt/onnx/quantization/autotune/__main__.py) | entrypoints signal |
| container | [tests/unit/torch/deploy/test_cpu_deploy_benchmark.py](../../../../sources/NVIDIA__Model-Optimizer/tests/unit/torch/deploy/test_cpu_deploy_benchmark.py) | container signal |
| container | [tests/unit/torch/deploy/test_runtime_config.py](../../../../sources/NVIDIA__Model-Optimizer/tests/unit/torch/deploy/test_runtime_config.py) | container signal |
| container | [tests/unit/torch/deploy/utils/test_torch_onnx_utils.py](../../../../sources/NVIDIA__Model-Optimizer/tests/unit/torch/deploy/utils/test_torch_onnx_utils.py) | container signal |
| container | [tests/unit/torch/deploy/_runtime/tensorrt/test_engine_builder.py](../../../../sources/NVIDIA__Model-Optimizer/tests/unit/torch/deploy/_runtime/tensorrt/test_engine_builder.py) | container signal |
| config | [pyproject.toml](../../../../sources/NVIDIA__Model-Optimizer/pyproject.toml) | config signal |
| config | [uv.lock](../../../../sources/NVIDIA__Model-Optimizer/uv.lock) | config signal |
| config | [tools/mcp/pyproject.toml](../../../../sources/NVIDIA__Model-Optimizer/tools/mcp/pyproject.toml) | config signal |
| config | [tools/launcher/pyproject.toml](../../../../sources/NVIDIA__Model-Optimizer/tools/launcher/pyproject.toml) | config signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 10 | [tools/mcp/modelopt_mcp/server.py](../../../../sources/NVIDIA__Model-Optimizer/tools/mcp/modelopt_mcp/server.py)<br>[tools/debugger/server.sh](../../../../sources/NVIDIA__Model-Optimizer/tools/debugger/server.sh)<br>[modelopt/onnx/quantization/__main__.py](../../../../sources/NVIDIA__Model-Optimizer/modelopt/onnx/quantization/__main__.py)<br>[modelopt/onnx/quantization/autotune/__main__.py](../../../../sources/NVIDIA__Model-Optimizer/modelopt/onnx/quantization/autotune/__main__.py)<br>[modelopt/onnx/graph_surgery/__main__.py](../../../../sources/NVIDIA__Model-Optimizer/modelopt/onnx/graph_surgery/__main__.py)<br>[modelopt/onnx/autocast/__main__.py](../../../../sources/NVIDIA__Model-Optimizer/modelopt/onnx/autocast/__main__.py)<br>[examples/speculative_decoding/main.py](../../../../sources/NVIDIA__Model-Optimizer/examples/speculative_decoding/main.py)<br>[examples/puzzletron/main.py](../../../../sources/NVIDIA__Model-Optimizer/examples/puzzletron/main.py) |
| agentRuntime | 202 | [AGENTS.md](../../../../sources/NVIDIA__Model-Optimizer/AGENTS.md)<br>[tools/precommit/check_launcher_yaml.py](../../../../sources/NVIDIA__Model-Optimizer/tools/precommit/check_launcher_yaml.py)<br>[tools/precommit/check_modelopt_recipes.py](../../../../sources/NVIDIA__Model-Optimizer/tools/precommit/check_modelopt_recipes.py)<br>[tools/precommit/normalize_yaml_ext.py](../../../../sources/NVIDIA__Model-Optimizer/tools/precommit/normalize_yaml_ext.py)<br>[tools/precommit/sync_claude_skills.sh](../../../../sources/NVIDIA__Model-Optimizer/tools/precommit/sync_claude_skills.sh)<br>[tools/mcp/pyproject.toml](../../../../sources/NVIDIA__Model-Optimizer/tools/mcp/pyproject.toml)<br>[tools/mcp/README.md](../../../../sources/NVIDIA__Model-Optimizer/tools/mcp/README.md)<br>[tools/mcp/SCOPE.md](../../../../sources/NVIDIA__Model-Optimizer/tools/mcp/SCOPE.md) |
| mcp | 8 | [tools/mcp/pyproject.toml](../../../../sources/NVIDIA__Model-Optimizer/tools/mcp/pyproject.toml)<br>[tools/mcp/README.md](../../../../sources/NVIDIA__Model-Optimizer/tools/mcp/README.md)<br>[tools/mcp/SCOPE.md](../../../../sources/NVIDIA__Model-Optimizer/tools/mcp/SCOPE.md)<br>[tools/mcp/tests/__init__.py](../../../../sources/NVIDIA__Model-Optimizer/tools/mcp/tests/__init__.py)<br>[tools/mcp/tests/test_bridge.py](../../../../sources/NVIDIA__Model-Optimizer/tools/mcp/tests/test_bridge.py)<br>[tools/mcp/modelopt_mcp/__init__.py](../../../../sources/NVIDIA__Model-Optimizer/tools/mcp/modelopt_mcp/__init__.py)<br>[tools/mcp/modelopt_mcp/bridge.py](../../../../sources/NVIDIA__Model-Optimizer/tools/mcp/modelopt_mcp/bridge.py)<br>[tools/mcp/modelopt_mcp/server.py](../../../../sources/NVIDIA__Model-Optimizer/tools/mcp/modelopt_mcp/server.py) |
| retrieval | 67 | [tests/unit/torch/quantization/test_quant_embedding.py](../../../../sources/NVIDIA__Model-Optimizer/tests/unit/torch/quantization/test_quant_embedding.py)<br>[tests/unit/onnx/test_gqa_graph_surgery.py](../../../../sources/NVIDIA__Model-Optimizer/tests/unit/onnx/test_gqa_graph_surgery.py)<br>[tests/unit/onnx/quantization/test_graph_utils.py](../../../../sources/NVIDIA__Model-Optimizer/tests/unit/onnx/quantization/test_graph_utils.py)<br>[tests/gpu/torch/export/test_export_embedding.py](../../../../sources/NVIDIA__Model-Optimizer/tests/gpu/torch/export/test_export_embedding.py)<br>[modelopt/torch/utils/graph.py](../../../../sources/NVIDIA__Model-Optimizer/modelopt/torch/utils/graph.py)<br>[modelopt/torch/utils/memory_monitor.py](../../../../sources/NVIDIA__Model-Optimizer/modelopt/torch/utils/memory_monitor.py)<br>[modelopt/torch/quantization/nn/modules/quant_embedding.py](../../../../sources/NVIDIA__Model-Optimizer/modelopt/torch/quantization/nn/modules/quant_embedding.py)<br>[modelopt/torch/puzzletron/subblock_stats/calc_subblock_params_and_memory.py](../../../../sources/NVIDIA__Model-Optimizer/modelopt/torch/puzzletron/subblock_stats/calc_subblock_params_and_memory.py) |
| spec | 32 | [tools/launcher/docs/architecture.md](../../../../sources/NVIDIA__Model-Optimizer/tools/launcher/docs/architecture.md)<br>[tests/unit/torch/fastgen/test_hook_requirements.py](../../../../sources/NVIDIA__Model-Optimizer/tests/unit/torch/fastgen/test_hook_requirements.py)<br>[tests/unit/torch/export/test_hf_spec_rope_export.py](../../../../sources/NVIDIA__Model-Optimizer/tests/unit/torch/export/test_hf_spec_rope_export.py)<br>[modelopt/torch/export/plugins/hf_spec_configs.py](../../../../sources/NVIDIA__Model-Optimizer/modelopt/torch/export/plugins/hf_spec_configs.py)<br>[modelopt/torch/export/plugins/hf_spec_export.py](../../../../sources/NVIDIA__Model-Optimizer/modelopt/torch/export/plugins/hf_spec_export.py)<br>[experimental/dms/ARCHITECTURE.md](../../../../sources/NVIDIA__Model-Optimizer/experimental/dms/ARCHITECTURE.md)<br>[examples/windows/onnx_ptq/whisper/requirements.txt](../../../../sources/NVIDIA__Model-Optimizer/examples/windows/onnx_ptq/whisper/requirements.txt)<br>[examples/windows/onnx_ptq/sam2/requirements.txt](../../../../sources/NVIDIA__Model-Optimizer/examples/windows/onnx_ptq/sam2/requirements.txt) |
| eval | 550 | [tools/mcp/tests/__init__.py](../../../../sources/NVIDIA__Model-Optimizer/tools/mcp/tests/__init__.py)<br>[tools/mcp/tests/test_bridge.py](../../../../sources/NVIDIA__Model-Optimizer/tools/mcp/tests/test_bridge.py)<br>[tools/launcher/tests/__init__.py](../../../../sources/NVIDIA__Model-Optimizer/tools/launcher/tests/__init__.py)<br>[tools/launcher/tests/conftest.py](../../../../sources/NVIDIA__Model-Optimizer/tools/launcher/tests/conftest.py)<br>[tools/launcher/tests/test_core_extended.py](../../../../sources/NVIDIA__Model-Optimizer/tools/launcher/tests/test_core_extended.py)<br>[tools/launcher/tests/test_core.py](../../../../sources/NVIDIA__Model-Optimizer/tools/launcher/tests/test_core.py)<br>[tools/launcher/tests/test_docker_execution.py](../../../../sources/NVIDIA__Model-Optimizer/tools/launcher/tests/test_docker_execution.py)<br>[tools/launcher/tests/test_docker_launch.py](../../../../sources/NVIDIA__Model-Optimizer/tools/launcher/tests/test_docker_launch.py) |
| security | 1 | [SECURITY.md](../../../../sources/NVIDIA__Model-Optimizer/SECURITY.md) |
| ci | 15 | [.gitlab/.gitlab-ci.yml](../../../../sources/NVIDIA__Model-Optimizer/.gitlab/.gitlab-ci.yml)<br>[.github/workflows/_example_tests_runner.yml](../../../../sources/NVIDIA__Model-Optimizer/.github/workflows/_example_tests_runner.yml)<br>[.github/workflows/_pr_gate.yml](../../../../sources/NVIDIA__Model-Optimizer/.github/workflows/_pr_gate.yml)<br>[.github/workflows/_wait_for_checks.yml](../../../../sources/NVIDIA__Model-Optimizer/.github/workflows/_wait_for_checks.yml)<br>[.github/workflows/bump_uv_lock.yml](../../../../sources/NVIDIA__Model-Optimizer/.github/workflows/bump_uv_lock.yml)<br>[.github/workflows/claude_review.yml](../../../../sources/NVIDIA__Model-Optimizer/.github/workflows/claude_review.yml)<br>[.github/workflows/claude.yml](../../../../sources/NVIDIA__Model-Optimizer/.github/workflows/claude.yml)<br>[.github/workflows/close_inactive_issues_pr.yml](../../../../sources/NVIDIA__Model-Optimizer/.github/workflows/close_inactive_issues_pr.yml) |
| container | 28 | [tests/unit/torch/deploy/test_cpu_deploy_benchmark.py](../../../../sources/NVIDIA__Model-Optimizer/tests/unit/torch/deploy/test_cpu_deploy_benchmark.py)<br>[tests/unit/torch/deploy/test_runtime_config.py](../../../../sources/NVIDIA__Model-Optimizer/tests/unit/torch/deploy/test_runtime_config.py)<br>[tests/unit/torch/deploy/utils/test_torch_onnx_utils.py](../../../../sources/NVIDIA__Model-Optimizer/tests/unit/torch/deploy/utils/test_torch_onnx_utils.py)<br>[tests/unit/torch/deploy/_runtime/tensorrt/test_engine_builder.py](../../../../sources/NVIDIA__Model-Optimizer/tests/unit/torch/deploy/_runtime/tensorrt/test_engine_builder.py)<br>[tests/unit/torch/deploy/_runtime/tensorrt/test_layerwise_profiling.py](../../../../sources/NVIDIA__Model-Optimizer/tests/unit/torch/deploy/_runtime/tensorrt/test_layerwise_profiling.py)<br>[tests/unit/torch/deploy/_runtime/tensorrt/test_tensorrt_utils.py](../../../../sources/NVIDIA__Model-Optimizer/tests/unit/torch/deploy/_runtime/tensorrt/test_tensorrt_utils.py)<br>[tests/unit/deploy/test_deploy_dummy.py](../../../../sources/NVIDIA__Model-Optimizer/tests/unit/deploy/test_deploy_dummy.py)<br>[tests/gpu/torch/deploy/test_gpu_deploy_benchmark.py](../../../../sources/NVIDIA__Model-Optimizer/tests/gpu/torch/deploy/test_gpu_deploy_benchmark.py) |
| instruction | 3 | [AGENTS.md](../../../../sources/NVIDIA__Model-Optimizer/AGENTS.md)<br>[tools/launcher/CLAUDE.md](../../../../sources/NVIDIA__Model-Optimizer/tools/launcher/CLAUDE.md)<br>[tools/debugger/CLAUDE.md](../../../../sources/NVIDIA__Model-Optimizer/tools/debugger/CLAUDE.md) |
| docs | 116 | [README.md](../../../../sources/NVIDIA__Model-Optimizer/README.md)<br>[tools/mcp/README.md](../../../../sources/NVIDIA__Model-Optimizer/tools/mcp/README.md)<br>[tools/launcher/README.md](../../../../sources/NVIDIA__Model-Optimizer/tools/launcher/README.md)<br>[tools/launcher/docs/architecture.md](../../../../sources/NVIDIA__Model-Optimizer/tools/launcher/docs/architecture.md)<br>[tools/launcher/docs/claude_code.md](../../../../sources/NVIDIA__Model-Optimizer/tools/launcher/docs/claude_code.md)<br>[tools/launcher/docs/configuration.md](../../../../sources/NVIDIA__Model-Optimizer/tools/launcher/docs/configuration.md)<br>[tools/launcher/docs/contributing.md](../../../../sources/NVIDIA__Model-Optimizer/tools/launcher/docs/contributing.md)<br>[tools/launcher/docs/testing.md](../../../../sources/NVIDIA__Model-Optimizer/tools/launcher/docs/testing.md) |
| config | 30 | [pyproject.toml](../../../../sources/NVIDIA__Model-Optimizer/pyproject.toml)<br>[uv.lock](../../../../sources/NVIDIA__Model-Optimizer/uv.lock)<br>[tools/mcp/pyproject.toml](../../../../sources/NVIDIA__Model-Optimizer/tools/mcp/pyproject.toml)<br>[tools/launcher/pyproject.toml](../../../../sources/NVIDIA__Model-Optimizer/tools/launcher/pyproject.toml)<br>[experimental/dms/pyproject.toml](../../../../sources/NVIDIA__Model-Optimizer/experimental/dms/pyproject.toml)<br>[examples/windows/onnx_ptq/whisper/requirements.txt](../../../../sources/NVIDIA__Model-Optimizer/examples/windows/onnx_ptq/whisper/requirements.txt)<br>[examples/windows/onnx_ptq/sam2/requirements.txt](../../../../sources/NVIDIA__Model-Optimizer/examples/windows/onnx_ptq/sam2/requirements.txt)<br>[examples/windows/onnx_ptq/genai_llm/requirements.txt](../../../../sources/NVIDIA__Model-Optimizer/examples/windows/onnx_ptq/genai_llm/requirements.txt) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 550 | [tools/mcp/tests/__init__.py](../../../../sources/NVIDIA__Model-Optimizer/tools/mcp/tests/__init__.py)<br>[tools/mcp/tests/test_bridge.py](../../../../sources/NVIDIA__Model-Optimizer/tools/mcp/tests/test_bridge.py)<br>[tools/launcher/tests/__init__.py](../../../../sources/NVIDIA__Model-Optimizer/tools/launcher/tests/__init__.py)<br>[tools/launcher/tests/conftest.py](../../../../sources/NVIDIA__Model-Optimizer/tools/launcher/tests/conftest.py)<br>[tools/launcher/tests/test_core_extended.py](../../../../sources/NVIDIA__Model-Optimizer/tools/launcher/tests/test_core_extended.py)<br>[tools/launcher/tests/test_core.py](../../../../sources/NVIDIA__Model-Optimizer/tools/launcher/tests/test_core.py) |
| CI workflow | 15 | [.gitlab/.gitlab-ci.yml](../../../../sources/NVIDIA__Model-Optimizer/.gitlab/.gitlab-ci.yml)<br>[.github/workflows/_example_tests_runner.yml](../../../../sources/NVIDIA__Model-Optimizer/.github/workflows/_example_tests_runner.yml)<br>[.github/workflows/_pr_gate.yml](../../../../sources/NVIDIA__Model-Optimizer/.github/workflows/_pr_gate.yml)<br>[.github/workflows/_wait_for_checks.yml](../../../../sources/NVIDIA__Model-Optimizer/.github/workflows/_wait_for_checks.yml)<br>[.github/workflows/bump_uv_lock.yml](../../../../sources/NVIDIA__Model-Optimizer/.github/workflows/bump_uv_lock.yml)<br>[.github/workflows/claude_review.yml](../../../../sources/NVIDIA__Model-Optimizer/.github/workflows/claude_review.yml) |
| 컨테이너/배포 | 28 | [tests/unit/torch/deploy/test_cpu_deploy_benchmark.py](../../../../sources/NVIDIA__Model-Optimizer/tests/unit/torch/deploy/test_cpu_deploy_benchmark.py)<br>[tests/unit/torch/deploy/test_runtime_config.py](../../../../sources/NVIDIA__Model-Optimizer/tests/unit/torch/deploy/test_runtime_config.py)<br>[tests/unit/torch/deploy/utils/test_torch_onnx_utils.py](../../../../sources/NVIDIA__Model-Optimizer/tests/unit/torch/deploy/utils/test_torch_onnx_utils.py)<br>[tests/unit/torch/deploy/_runtime/tensorrt/test_engine_builder.py](../../../../sources/NVIDIA__Model-Optimizer/tests/unit/torch/deploy/_runtime/tensorrt/test_engine_builder.py)<br>[tests/unit/torch/deploy/_runtime/tensorrt/test_layerwise_profiling.py](../../../../sources/NVIDIA__Model-Optimizer/tests/unit/torch/deploy/_runtime/tensorrt/test_layerwise_profiling.py)<br>[tests/unit/torch/deploy/_runtime/tensorrt/test_tensorrt_utils.py](../../../../sources/NVIDIA__Model-Optimizer/tests/unit/torch/deploy/_runtime/tensorrt/test_tensorrt_utils.py) |
| 보안/정책 | 1 | [SECURITY.md](../../../../sources/NVIDIA__Model-Optimizer/SECURITY.md) |
| 에이전트 지시문 | 3 | [AGENTS.md](../../../../sources/NVIDIA__Model-Optimizer/AGENTS.md)<br>[tools/launcher/CLAUDE.md](../../../../sources/NVIDIA__Model-Optimizer/tools/launcher/CLAUDE.md)<br>[tools/debugger/CLAUDE.md](../../../../sources/NVIDIA__Model-Optimizer/tools/debugger/CLAUDE.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `tools/mcp/modelopt_mcp/server.py`, `tools/debugger/server.sh`, `modelopt/onnx/quantization/__main__.py`.
2. entrypoint를 따라 실행 흐름 확인: `tools/mcp/modelopt_mcp/server.py`, `tools/debugger/server.sh`, `modelopt/onnx/quantization/__main__.py`.
3. agent/tool runtime 매핑: `AGENTS.md`, `tools/precommit/check_launcher_yaml.py`, `tools/precommit/check_modelopt_recipes.py`.
4. retrieval/memory/indexing 확인: `tests/unit/torch/quantization/test_quant_embedding.py`, `tests/unit/onnx/test_gqa_graph_surgery.py`, `tests/unit/onnx/quantization/test_graph_utils.py`.
5. test/eval 파일로 동작 검증: `tools/mcp/tests/__init__.py`, `tools/mcp/tests/test_bridge.py`, `tools/launcher/tests/__init__.py`.

## 기존 레포 인사이트

AI 인프라/서빙 관점에서 A unified library of SOTA model optimization techniques like quantization, distillation, pruning, neural architecture se. 핵심 구조 신호는 Python, pyproject.toml, README.md, AGENTS.md, LICENSE, pydantic이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 AI 인프라/서빙 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
