# NVIDIA/Model-Optimizer Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

A unified library of SOTA model optimization techniques like quantization, distillation, pruning, neural architecture search, speculative decoding, etc. It compresses deep learning models for downstream deployment frameworks like TensorRT-LLM, TensorRT, vLLM, etc. to optimize inference speed.

## 요약

- 조사 단위: `sources/NVIDIA__Model-Optimizer` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 1,775 files, 529 directories, depth score 132, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

AI 인프라/서빙 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 entrypoints=tools/mcp/modelopt_mcp/server.py, tools/debugger/server.sh, modelopt/onnx/quantization/__main__.py이고, 의존성 단서는 pydantic, torch, transformers, vllm, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | NVIDIA/Model-Optimizer |
| Topic | AI Infrastructure and Serving / AI 인프라/서빙 |
| Region | global |
| Language | Python |
| Stars | 2944 |
| Forks | 450 |
| License | none |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/NVIDIA__Model-Optimizer](../../../../sources/NVIDIA__Model-Optimizer) |
| Existing report | [reports/global-trending/repositories/NVIDIA__Model-Optimizer.md](../../../global-trending/repositories/NVIDIA__Model-Optimizer.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 1775 / 529 |
| Max observed depth | 10 |
| Top directories | .agents, .claude, .github, .gitlab, docs, examples, experimental, modelopt, modelopt_recipes, tests, tools |
| Top extensions | .py: 1100, .yaml: 279, .md: 157, .sh: 58, .rst: 37, .txt: 26, (none): 20, .yml: 18, .png: 17, .ipynb: 15, .json: 11, .cpp: 7 |
| Source patterns | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
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


## How It Runs

_No command surface extracted from root manifests._


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | torch, transformers, vllm |
| webRuntime | none |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
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


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
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


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 550 | [tools/mcp/tests/__init__.py](../../../../sources/NVIDIA__Model-Optimizer/tools/mcp/tests/__init__.py)<br>[tools/mcp/tests/test_bridge.py](../../../../sources/NVIDIA__Model-Optimizer/tools/mcp/tests/test_bridge.py)<br>[tools/launcher/tests/__init__.py](../../../../sources/NVIDIA__Model-Optimizer/tools/launcher/tests/__init__.py)<br>[tools/launcher/tests/conftest.py](../../../../sources/NVIDIA__Model-Optimizer/tools/launcher/tests/conftest.py)<br>[tools/launcher/tests/test_core_extended.py](../../../../sources/NVIDIA__Model-Optimizer/tools/launcher/tests/test_core_extended.py)<br>[tools/launcher/tests/test_core.py](../../../../sources/NVIDIA__Model-Optimizer/tools/launcher/tests/test_core.py) |
| CI workflows | 15 | [.gitlab/.gitlab-ci.yml](../../../../sources/NVIDIA__Model-Optimizer/.gitlab/.gitlab-ci.yml)<br>[.github/workflows/_example_tests_runner.yml](../../../../sources/NVIDIA__Model-Optimizer/.github/workflows/_example_tests_runner.yml)<br>[.github/workflows/_pr_gate.yml](../../../../sources/NVIDIA__Model-Optimizer/.github/workflows/_pr_gate.yml)<br>[.github/workflows/_wait_for_checks.yml](../../../../sources/NVIDIA__Model-Optimizer/.github/workflows/_wait_for_checks.yml)<br>[.github/workflows/bump_uv_lock.yml](../../../../sources/NVIDIA__Model-Optimizer/.github/workflows/bump_uv_lock.yml)<br>[.github/workflows/claude_review.yml](../../../../sources/NVIDIA__Model-Optimizer/.github/workflows/claude_review.yml) |
| Containers / deploy | 28 | [tests/unit/torch/deploy/test_cpu_deploy_benchmark.py](../../../../sources/NVIDIA__Model-Optimizer/tests/unit/torch/deploy/test_cpu_deploy_benchmark.py)<br>[tests/unit/torch/deploy/test_runtime_config.py](../../../../sources/NVIDIA__Model-Optimizer/tests/unit/torch/deploy/test_runtime_config.py)<br>[tests/unit/torch/deploy/utils/test_torch_onnx_utils.py](../../../../sources/NVIDIA__Model-Optimizer/tests/unit/torch/deploy/utils/test_torch_onnx_utils.py)<br>[tests/unit/torch/deploy/_runtime/tensorrt/test_engine_builder.py](../../../../sources/NVIDIA__Model-Optimizer/tests/unit/torch/deploy/_runtime/tensorrt/test_engine_builder.py)<br>[tests/unit/torch/deploy/_runtime/tensorrt/test_layerwise_profiling.py](../../../../sources/NVIDIA__Model-Optimizer/tests/unit/torch/deploy/_runtime/tensorrt/test_layerwise_profiling.py)<br>[tests/unit/torch/deploy/_runtime/tensorrt/test_tensorrt_utils.py](../../../../sources/NVIDIA__Model-Optimizer/tests/unit/torch/deploy/_runtime/tensorrt/test_tensorrt_utils.py) |
| Security / policy | 1 | [SECURITY.md](../../../../sources/NVIDIA__Model-Optimizer/SECURITY.md) |
| Agent instructions | 3 | [AGENTS.md](../../../../sources/NVIDIA__Model-Optimizer/AGENTS.md)<br>[tools/launcher/CLAUDE.md](../../../../sources/NVIDIA__Model-Optimizer/tools/launcher/CLAUDE.md)<br>[tools/debugger/CLAUDE.md](../../../../sources/NVIDIA__Model-Optimizer/tools/debugger/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `tools/mcp/modelopt_mcp/server.py`, `tools/debugger/server.sh`, `modelopt/onnx/quantization/__main__.py`.
2. Trace execution through entrypoints: `tools/mcp/modelopt_mcp/server.py`, `tools/debugger/server.sh`, `modelopt/onnx/quantization/__main__.py`.
3. Map agent/tool runtime through: `AGENTS.md`, `tools/precommit/check_launcher_yaml.py`, `tools/precommit/check_modelopt_recipes.py`.
4. Inspect retrieval/memory/indexing through: `tests/unit/torch/quantization/test_quant_embedding.py`, `tests/unit/onnx/test_gqa_graph_surgery.py`, `tests/unit/onnx/quantization/test_graph_utils.py`.
5. Verify behavior through test/eval files: `tools/mcp/tests/__init__.py`, `tools/mcp/tests/test_bridge.py`, `tools/launcher/tests/__init__.py`.

## Existing Repository Insight

AI 인프라/서빙 관점에서 A unified library of SOTA model optimization techniques like quantization, distillation, pruning, neural architecture se. 핵심 구조 신호는 Python, pyproject.toml, README.md, AGENTS.md, LICENSE, pydantic이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 AI 인프라/서빙 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
