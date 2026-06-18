# NVIDIA/TensorRT-LLM Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Local clone structure analysis: 10452 files, 1071 directories.

## 요약

- 조사 단위: `sources/NVIDIA__TensorRT-LLM` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 10,448 files, 1,070 directories, depth score 138, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

평가/관측/품질 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 eval=triton_backend/tools/tests/__init__.py, triton_backend/tools/tests/test_fill_template.py, triton_backend/tools/tests/test_llmapi_cancel.py이고, 의존성 단서는 openai, mcp, fastapi, pydantic, click, torch, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 quality and evaluation comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | NVIDIA/TensorRT-LLM |
| Topic | Evals, Observability, and Quality / 평가/관측/품질 |
| Region | mixed |
| Language | none |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | solid |
| Evidence | deep-source+report |
| Source | [sources/NVIDIA__TensorRT-LLM](../../../../sources/NVIDIA__TensorRT-LLM) |
| Existing report | [reports/clone-structures/NVIDIA__TensorRT-LLM.md](../../../clone-structures/NVIDIA__TensorRT-LLM.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 10448 / 1070 |
| Max observed depth | 10 |
| Top directories | .claude, .codex, .devcontainer, .github, 3rdparty, benchmarks, cpp, docker, docs, enroot, examples, jenkins, scripts, security_scanning, tensorrt_llm, tests, triton_backend, triton_kernels |
| Top extensions | .zst: 3781, .py: 2776, .h: 777, .yaml: 659, .cpp: 501, .md: 454, .cu: 339, .txt: 191, .png: 179, .yml: 109, (none): 95, .sh: 76 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 77 |
| examples/scaffolding | examples workspace | 20 |
| examples/models | examples workspace | 14 |
| .codex | top-level component | 1 |
| .devcontainer | deployment surface | 1 |
| .github | ci surface | 1 |
| 3rdparty | top-level component | 1 |
| benchmarks | validation surface | 1 |
| cpp | top-level component | 1 |
| docker | documentation surface | 1 |
| docs | documentation surface | 1 |
| enroot | top-level component | 1 |
| examples | top-level component | 1 |
| examples/llm-api | examples workspace | 1 |
| examples/ngram | examples workspace | 1 |
| examples/quantization | examples workspace | 1 |
| examples/ray_orchestrator | examples workspace | 1 |
| examples/redrafter | examples workspace | 1 |


## How It Runs

_No command surface extracted from root manifests._


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai |
| agentProtocols | mcp |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | torch, transformers, llama |
| webRuntime | fastapi |
| developerSurface | click |
| observability | prometheus |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| eval | [triton_backend/tools/tests/__init__.py](../../../../sources/NVIDIA__TensorRT-LLM/triton_backend/tools/tests/__init__.py) | eval signal |
| eval | [triton_backend/tools/tests/test_fill_template.py](../../../../sources/NVIDIA__TensorRT-LLM/triton_backend/tools/tests/test_fill_template.py) | eval signal |
| eval | [triton_backend/tools/tests/test_llmapi_cancel.py](../../../../sources/NVIDIA__TensorRT-LLM/triton_backend/tools/tests/test_llmapi_cancel.py) | eval signal |
| eval | [triton_backend/tools/inflight_batcher_llm/benchmark_core_model.py](../../../../sources/NVIDIA__TensorRT-LLM/triton_backend/tools/inflight_batcher_llm/benchmark_core_model.py) | eval signal |
| entrypoints | [tests/microbenchmarks/bench_moe/__main__.py](../../../../sources/NVIDIA__TensorRT-LLM/tests/microbenchmarks/bench_moe/__main__.py) | entrypoints signal |
| entrypoints | [tensorrt_llm/usage/schemas/__main__.py](../../../../sources/NVIDIA__TensorRT-LLM/tensorrt_llm/usage/schemas/__main__.py) | entrypoints signal |
| entrypoints | [tensorrt_llm/serve/scripts/time_breakdown/__main__.py](../../../../sources/NVIDIA__TensorRT-LLM/tensorrt_llm/serve/scripts/time_breakdown/__main__.py) | entrypoints signal |
| entrypoints | [jenkins/scripts/pulse_in_pipeline_scanning/main.py](../../../../sources/NVIDIA__TensorRT-LLM/jenkins/scripts/pulse_in_pipeline_scanning/main.py) | entrypoints signal |
| config | [pyproject.toml](../../../../sources/NVIDIA__TensorRT-LLM/pyproject.toml) | config signal |
| config | [requirements-dev.txt](../../../../sources/NVIDIA__TensorRT-LLM/requirements-dev.txt) | config signal |
| config | [requirements.txt](../../../../sources/NVIDIA__TensorRT-LLM/requirements.txt) | config signal |
| config | [triton_backend/requirements.txt](../../../../sources/NVIDIA__TensorRT-LLM/triton_backend/requirements.txt) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 10 | [tests/microbenchmarks/bench_moe/__main__.py](../../../../sources/NVIDIA__TensorRT-LLM/tests/microbenchmarks/bench_moe/__main__.py)<br>[tensorrt_llm/usage/schemas/__main__.py](../../../../sources/NVIDIA__TensorRT-LLM/tensorrt_llm/usage/schemas/__main__.py)<br>[tensorrt_llm/serve/scripts/time_breakdown/__main__.py](../../../../sources/NVIDIA__TensorRT-LLM/tensorrt_llm/serve/scripts/time_breakdown/__main__.py)<br>[jenkins/scripts/pulse_in_pipeline_scanning/main.py](../../../../sources/NVIDIA__TensorRT-LLM/jenkins/scripts/pulse_in_pipeline_scanning/main.py)<br>[jenkins/scripts/cbts/main.py](../../../../sources/NVIDIA__TensorRT-LLM/jenkins/scripts/cbts/main.py)<br>[examples/scaffolding/contrib/open_deep_research/WordLlama/main.py](../../../../sources/NVIDIA__TensorRT-LLM/examples/scaffolding/contrib/open_deep_research/WordLlama/main.py)<br>[examples/scaffolding/contrib/mcp/websearch/main.py](../../../../sources/NVIDIA__TensorRT-LLM/examples/scaffolding/contrib/mcp/websearch/main.py)<br>[examples/scaffolding/contrib/mcp/e2b/main.py](../../../../sources/NVIDIA__TensorRT-LLM/examples/scaffolding/contrib/mcp/e2b/main.py) |
| agentRuntime | 448 | [AGENTS.md](../../../../sources/NVIDIA__TensorRT-LLM/AGENTS.md)<br>[triton_backend/tools/__init__.py](../../../../sources/NVIDIA__TensorRT-LLM/triton_backend/tools/__init__.py)<br>[triton_backend/tools/fill_template.py](../../../../sources/NVIDIA__TensorRT-LLM/triton_backend/tools/fill_template.py)<br>[triton_backend/tools/llmapi_client.py](../../../../sources/NVIDIA__TensorRT-LLM/triton_backend/tools/llmapi_client.py)<br>[triton_backend/tools/utils.sh](../../../../sources/NVIDIA__TensorRT-LLM/triton_backend/tools/utils.sh)<br>[triton_backend/tools/whisper/client.py](../../../../sources/NVIDIA__TensorRT-LLM/triton_backend/tools/whisper/client.py)<br>[triton_backend/tools/utils/__init__.py](../../../../sources/NVIDIA__TensorRT-LLM/triton_backend/tools/utils/__init__.py)<br>[triton_backend/tools/utils/utils.py](../../../../sources/NVIDIA__TensorRT-LLM/triton_backend/tools/utils/utils.py) |
| mcp | 23 | [tests/unittest/scaffolding/test_mcp_worker.py](../../../../sources/NVIDIA__TensorRT-LLM/tests/unittest/scaffolding/test_mcp_worker.py)<br>[tensorrt_llm/scaffolding/contrib/mcp/__init__.py](../../../../sources/NVIDIA__TensorRT-LLM/tensorrt_llm/scaffolding/contrib/mcp/__init__.py)<br>[tensorrt_llm/scaffolding/contrib/mcp/chat_handler.py](../../../../sources/NVIDIA__TensorRT-LLM/tensorrt_llm/scaffolding/contrib/mcp/chat_handler.py)<br>[tensorrt_llm/scaffolding/contrib/mcp/chat_task.py](../../../../sources/NVIDIA__TensorRT-LLM/tensorrt_llm/scaffolding/contrib/mcp/chat_task.py)<br>[tensorrt_llm/scaffolding/contrib/mcp/mcp_controller.py](../../../../sources/NVIDIA__TensorRT-LLM/tensorrt_llm/scaffolding/contrib/mcp/mcp_controller.py)<br>[tensorrt_llm/scaffolding/contrib/mcp/mcp_task.py](../../../../sources/NVIDIA__TensorRT-LLM/tensorrt_llm/scaffolding/contrib/mcp/mcp_task.py)<br>[tensorrt_llm/scaffolding/contrib/mcp/mcp_utils.py](../../../../sources/NVIDIA__TensorRT-LLM/tensorrt_llm/scaffolding/contrib/mcp/mcp_utils.py)<br>[tensorrt_llm/scaffolding/contrib/mcp/mcp_worker.py](../../../../sources/NVIDIA__TensorRT-LLM/tensorrt_llm/scaffolding/contrib/mcp/mcp_worker.py) |
| retrieval | 79 | [tests/unittest/trt/functional/test_embedding_single_gpu.py](../../../../sources/NVIDIA__TensorRT-LLM/tests/unittest/trt/functional/test_embedding_single_gpu.py)<br>[tests/unittest/trt/functional/test_index_select.py](../../../../sources/NVIDIA__TensorRT-LLM/tests/unittest/trt/functional/test_index_select.py)<br>[tests/unittest/others/test_graph_rewriter.py](../../../../sources/NVIDIA__TensorRT-LLM/tests/unittest/others/test_graph_rewriter.py)<br>[tests/unittest/llmapi/test_memory_profiling.py](../../../../sources/NVIDIA__TensorRT-LLM/tests/unittest/llmapi/test_memory_profiling.py)<br>[tests/unittest/auto_deploy/singlegpu/test_graph_canonicalize.py](../../../../sources/NVIDIA__TensorRT-LLM/tests/unittest/auto_deploy/singlegpu/test_graph_canonicalize.py)<br>[tests/unittest/auto_deploy/singlegpu/compile/test_captured_graph.py](../../../../sources/NVIDIA__TensorRT-LLM/tests/unittest/auto_deploy/singlegpu/compile/test_captured_graph.py)<br>[tests/unittest/auto_deploy/singlegpu/compile/test_cuda_graph_batch_sizes.py](../../../../sources/NVIDIA__TensorRT-LLM/tests/unittest/auto_deploy/singlegpu/compile/test_cuda_graph_batch_sizes.py)<br>[tests/unittest/auto_deploy/singlegpu/compile/test_piecewise_memory.py](../../../../sources/NVIDIA__TensorRT-LLM/tests/unittest/auto_deploy/singlegpu/compile/test_piecewise_memory.py) |
| spec | 94 | [requirements-dev.txt](../../../../sources/NVIDIA__TensorRT-LLM/requirements-dev.txt)<br>[requirements.txt](../../../../sources/NVIDIA__TensorRT-LLM/requirements.txt)<br>[triton_backend/requirements.txt](../../../../sources/NVIDIA__TensorRT-LLM/triton_backend/requirements.txt)<br>[triton_backend/tools/dataset/mini_cnn_eval_spec_decoding.json](../../../../sources/NVIDIA__TensorRT-LLM/triton_backend/tools/dataset/mini_cnn_eval_spec_decoding.json)<br>[triton_backend/all_models/multimodal/requirements-llava-onevision.txt](../../../../sources/NVIDIA__TensorRT-LLM/triton_backend/all_models/multimodal/requirements-llava-onevision.txt)<br>[triton_backend/all_models/multimodal/requirements-mistral3.1.txt](../../../../sources/NVIDIA__TensorRT-LLM/triton_backend/all_models/multimodal/requirements-mistral3.1.txt)<br>[triton_backend/all_models/multimodal/requirements-mllama.txt](../../../../sources/NVIDIA__TensorRT-LLM/triton_backend/all_models/multimodal/requirements-mllama.txt)<br>[triton_backend/all_models/multimodal/requirements-qwen2vl.txt](../../../../sources/NVIDIA__TensorRT-LLM/triton_backend/all_models/multimodal/requirements-qwen2vl.txt) |
| eval | 1948 | [triton_backend/tools/tests/__init__.py](../../../../sources/NVIDIA__TensorRT-LLM/triton_backend/tools/tests/__init__.py)<br>[triton_backend/tools/tests/test_fill_template.py](../../../../sources/NVIDIA__TensorRT-LLM/triton_backend/tools/tests/test_fill_template.py)<br>[triton_backend/tools/tests/test_llmapi_cancel.py](../../../../sources/NVIDIA__TensorRT-LLM/triton_backend/tools/tests/test_llmapi_cancel.py)<br>[triton_backend/tools/inflight_batcher_llm/benchmark_core_model.py](../../../../sources/NVIDIA__TensorRT-LLM/triton_backend/tools/inflight_batcher_llm/benchmark_core_model.py)<br>[triton_backend/tools/inflight_batcher_llm/end_to_end_test.py](../../../../sources/NVIDIA__TensorRT-LLM/triton_backend/tools/inflight_batcher_llm/end_to_end_test.py)<br>[triton_backend/tools/inflight_batcher_llm/speculative_decoding_test.py](../../../../sources/NVIDIA__TensorRT-LLM/triton_backend/tools/inflight_batcher_llm/speculative_decoding_test.py)<br>[triton_backend/tools/inflight_batcher_llm/test_max_queue_size.py](../../../../sources/NVIDIA__TensorRT-LLM/triton_backend/tools/inflight_batcher_llm/test_max_queue_size.py)<br>[triton_backend/tools/gpt/benchmark_core_model.py](../../../../sources/NVIDIA__TensorRT-LLM/triton_backend/tools/gpt/benchmark_core_model.py) |
| security | 116 | [SECURITY.md](../../../../sources/NVIDIA__TensorRT-LLM/SECURITY.md)<br>[security_scanning/metadata.json](../../../../sources/NVIDIA__TensorRT-LLM/security_scanning/metadata.json)<br>[security_scanning/poetry.lock](../../../../sources/NVIDIA__TensorRT-LLM/security_scanning/poetry.lock)<br>[security_scanning/pyproject.toml](../../../../sources/NVIDIA__TensorRT-LLM/security_scanning/pyproject.toml)<br>[security_scanning/triton_backend/poetry.lock](../../../../sources/NVIDIA__TensorRT-LLM/security_scanning/triton_backend/poetry.lock)<br>[security_scanning/triton_backend/pyproject.toml](../../../../sources/NVIDIA__TensorRT-LLM/security_scanning/triton_backend/pyproject.toml)<br>[security_scanning/tests/integration/defs/perf/poetry.lock](../../../../sources/NVIDIA__TensorRT-LLM/security_scanning/tests/integration/defs/perf/poetry.lock)<br>[security_scanning/tests/integration/defs/perf/pyproject.toml](../../../../sources/NVIDIA__TensorRT-LLM/security_scanning/tests/integration/defs/perf/pyproject.toml) |
| ci | 74 | [triton_backend/ci/README.md](../../../../sources/NVIDIA__TensorRT-LLM/triton_backend/ci/README.md)<br>[triton_backend/ci/L0_backend_trtllm/base_metrics_verification_tests.py](../../../../sources/NVIDIA__TensorRT-LLM/triton_backend/ci/L0_backend_trtllm/base_metrics_verification_tests.py)<br>[triton_backend/ci/L0_backend_trtllm/custom_metrics_verification_tests.py](../../../../sources/NVIDIA__TensorRT-LLM/triton_backend/ci/L0_backend_trtllm/custom_metrics_verification_tests.py)<br>[triton_backend/ci/L0_backend_trtllm/generate_engines.sh](../../../../sources/NVIDIA__TensorRT-LLM/triton_backend/ci/L0_backend_trtllm/generate_engines.sh)<br>[triton_backend/ci/L0_backend_trtllm/simple_data.json](../../../../sources/NVIDIA__TensorRT-LLM/triton_backend/ci/L0_backend_trtllm/simple_data.json)<br>[triton_backend/ci/L0_backend_trtllm/test.sh](../../../../sources/NVIDIA__TensorRT-LLM/triton_backend/ci/L0_backend_trtllm/test.sh)<br>[jenkins/Build.groovy](../../../../sources/NVIDIA__TensorRT-LLM/jenkins/Build.groovy)<br>[jenkins/BuildDockerImage.groovy](../../../../sources/NVIDIA__TensorRT-LLM/jenkins/BuildDockerImage.groovy) |
| container | 5 | [jenkins/docker/Dockerfile.dind](../../../../sources/NVIDIA__TensorRT-LLM/jenkins/docker/Dockerfile.dind)<br>[docker/Dockerfile.multi](../../../../sources/NVIDIA__TensorRT-LLM/docker/Dockerfile.multi)<br>[docker/Dockerfile.user](../../../../sources/NVIDIA__TensorRT-LLM/docker/Dockerfile.user)<br>[.devcontainer/docker-compose.override-example.yml](../../../../sources/NVIDIA__TensorRT-LLM/.devcontainer/docker-compose.override-example.yml)<br>[.devcontainer/docker-compose.yml](../../../../sources/NVIDIA__TensorRT-LLM/.devcontainer/docker-compose.yml) |
| instruction | 11 | [AGENTS.md](../../../../sources/NVIDIA__TensorRT-LLM/AGENTS.md)<br>[CLAUDE.md](../../../../sources/NVIDIA__TensorRT-LLM/CLAUDE.md)<br>[tensorrt_llm/runtime/kv_cache_manager_v2/AGENTS.md](../../../../sources/NVIDIA__TensorRT-LLM/tensorrt_llm/runtime/kv_cache_manager_v2/AGENTS.md)<br>[tensorrt_llm/runtime/kv_cache_manager_v2/CLAUDE.md](../../../../sources/NVIDIA__TensorRT-LLM/tensorrt_llm/runtime/kv_cache_manager_v2/CLAUDE.md)<br>[.codex/AGENTS.md](../../../../sources/NVIDIA__TensorRT-LLM/.codex/AGENTS.md)<br>[.codex/config.toml](../../../../sources/NVIDIA__TensorRT-LLM/.codex/config.toml)<br>[.codex/skills/ad-model-onboard/SKILL.md](../../../../sources/NVIDIA__TensorRT-LLM/.codex/skills/ad-model-onboard/SKILL.md)<br>[.codex/agents/ad_debug_agent.toml](../../../../sources/NVIDIA__TensorRT-LLM/.codex/agents/ad_debug_agent.toml) |
| docs | 539 | [README.md](../../../../sources/NVIDIA__TensorRT-LLM/README.md)<br>[triton_kernels/README.md](../../../../sources/NVIDIA__TensorRT-LLM/triton_kernels/README.md)<br>[triton_backend/inflight_batcher_llm/client/README.md](../../../../sources/NVIDIA__TensorRT-LLM/triton_backend/inflight_batcher_llm/client/README.md)<br>[triton_backend/ci/README.md](../../../../sources/NVIDIA__TensorRT-LLM/triton_backend/ci/README.md)<br>[triton_backend/all_models/disaggregated_serving/README.md](../../../../sources/NVIDIA__TensorRT-LLM/triton_backend/all_models/disaggregated_serving/README.md)<br>[tests/README.md](../../../../sources/NVIDIA__TensorRT-LLM/tests/README.md)<br>[tests/unittest/llmapi/apps/README.md](../../../../sources/NVIDIA__TensorRT-LLM/tests/unittest/llmapi/apps/README.md)<br>[tests/scripts/cute_dsl_kernels/README.md](../../../../sources/NVIDIA__TensorRT-LLM/tests/scripts/cute_dsl_kernels/README.md) |
| config | 199 | [pyproject.toml](../../../../sources/NVIDIA__TensorRT-LLM/pyproject.toml)<br>[requirements-dev.txt](../../../../sources/NVIDIA__TensorRT-LLM/requirements-dev.txt)<br>[requirements.txt](../../../../sources/NVIDIA__TensorRT-LLM/requirements.txt)<br>[triton_backend/requirements.txt](../../../../sources/NVIDIA__TensorRT-LLM/triton_backend/requirements.txt)<br>[triton_backend/all_models/multimodal/requirements-llava-onevision.txt](../../../../sources/NVIDIA__TensorRT-LLM/triton_backend/all_models/multimodal/requirements-llava-onevision.txt)<br>[triton_backend/all_models/multimodal/requirements-mistral3.1.txt](../../../../sources/NVIDIA__TensorRT-LLM/triton_backend/all_models/multimodal/requirements-mistral3.1.txt)<br>[triton_backend/all_models/multimodal/requirements-mllama.txt](../../../../sources/NVIDIA__TensorRT-LLM/triton_backend/all_models/multimodal/requirements-mllama.txt)<br>[triton_backend/all_models/multimodal/requirements-qwen2vl.txt](../../../../sources/NVIDIA__TensorRT-LLM/triton_backend/all_models/multimodal/requirements-qwen2vl.txt) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 1948 | [triton_backend/tools/tests/__init__.py](../../../../sources/NVIDIA__TensorRT-LLM/triton_backend/tools/tests/__init__.py)<br>[triton_backend/tools/tests/test_fill_template.py](../../../../sources/NVIDIA__TensorRT-LLM/triton_backend/tools/tests/test_fill_template.py)<br>[triton_backend/tools/tests/test_llmapi_cancel.py](../../../../sources/NVIDIA__TensorRT-LLM/triton_backend/tools/tests/test_llmapi_cancel.py)<br>[triton_backend/tools/inflight_batcher_llm/benchmark_core_model.py](../../../../sources/NVIDIA__TensorRT-LLM/triton_backend/tools/inflight_batcher_llm/benchmark_core_model.py)<br>[triton_backend/tools/inflight_batcher_llm/end_to_end_test.py](../../../../sources/NVIDIA__TensorRT-LLM/triton_backend/tools/inflight_batcher_llm/end_to_end_test.py)<br>[triton_backend/tools/inflight_batcher_llm/speculative_decoding_test.py](../../../../sources/NVIDIA__TensorRT-LLM/triton_backend/tools/inflight_batcher_llm/speculative_decoding_test.py) |
| CI workflows | 74 | [triton_backend/ci/README.md](../../../../sources/NVIDIA__TensorRT-LLM/triton_backend/ci/README.md)<br>[triton_backend/ci/L0_backend_trtllm/base_metrics_verification_tests.py](../../../../sources/NVIDIA__TensorRT-LLM/triton_backend/ci/L0_backend_trtllm/base_metrics_verification_tests.py)<br>[triton_backend/ci/L0_backend_trtllm/custom_metrics_verification_tests.py](../../../../sources/NVIDIA__TensorRT-LLM/triton_backend/ci/L0_backend_trtllm/custom_metrics_verification_tests.py)<br>[triton_backend/ci/L0_backend_trtllm/generate_engines.sh](../../../../sources/NVIDIA__TensorRT-LLM/triton_backend/ci/L0_backend_trtllm/generate_engines.sh)<br>[triton_backend/ci/L0_backend_trtllm/simple_data.json](../../../../sources/NVIDIA__TensorRT-LLM/triton_backend/ci/L0_backend_trtllm/simple_data.json)<br>[triton_backend/ci/L0_backend_trtllm/test.sh](../../../../sources/NVIDIA__TensorRT-LLM/triton_backend/ci/L0_backend_trtllm/test.sh) |
| Containers / deploy | 5 | [jenkins/docker/Dockerfile.dind](../../../../sources/NVIDIA__TensorRT-LLM/jenkins/docker/Dockerfile.dind)<br>[docker/Dockerfile.multi](../../../../sources/NVIDIA__TensorRT-LLM/docker/Dockerfile.multi)<br>[docker/Dockerfile.user](../../../../sources/NVIDIA__TensorRT-LLM/docker/Dockerfile.user)<br>[.devcontainer/docker-compose.override-example.yml](../../../../sources/NVIDIA__TensorRT-LLM/.devcontainer/docker-compose.override-example.yml)<br>[.devcontainer/docker-compose.yml](../../../../sources/NVIDIA__TensorRT-LLM/.devcontainer/docker-compose.yml) |
| Security / policy | 116 | [SECURITY.md](../../../../sources/NVIDIA__TensorRT-LLM/SECURITY.md)<br>[security_scanning/metadata.json](../../../../sources/NVIDIA__TensorRT-LLM/security_scanning/metadata.json)<br>[security_scanning/poetry.lock](../../../../sources/NVIDIA__TensorRT-LLM/security_scanning/poetry.lock)<br>[security_scanning/pyproject.toml](../../../../sources/NVIDIA__TensorRT-LLM/security_scanning/pyproject.toml)<br>[security_scanning/triton_backend/poetry.lock](../../../../sources/NVIDIA__TensorRT-LLM/security_scanning/triton_backend/poetry.lock)<br>[security_scanning/triton_backend/pyproject.toml](../../../../sources/NVIDIA__TensorRT-LLM/security_scanning/triton_backend/pyproject.toml) |
| Agent instructions | 11 | [AGENTS.md](../../../../sources/NVIDIA__TensorRT-LLM/AGENTS.md)<br>[CLAUDE.md](../../../../sources/NVIDIA__TensorRT-LLM/CLAUDE.md)<br>[tensorrt_llm/runtime/kv_cache_manager_v2/AGENTS.md](../../../../sources/NVIDIA__TensorRT-LLM/tensorrt_llm/runtime/kv_cache_manager_v2/AGENTS.md)<br>[tensorrt_llm/runtime/kv_cache_manager_v2/CLAUDE.md](../../../../sources/NVIDIA__TensorRT-LLM/tensorrt_llm/runtime/kv_cache_manager_v2/CLAUDE.md)<br>[.codex/AGENTS.md](../../../../sources/NVIDIA__TensorRT-LLM/.codex/AGENTS.md)<br>[.codex/config.toml](../../../../sources/NVIDIA__TensorRT-LLM/.codex/config.toml) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `triton_backend/tools/tests/__init__.py`, `triton_backend/tools/tests/test_fill_template.py`, `triton_backend/tools/tests/test_llmapi_cancel.py`.
2. Trace execution through entrypoints: `tests/microbenchmarks/bench_moe/__main__.py`, `tensorrt_llm/usage/schemas/__main__.py`, `tensorrt_llm/serve/scripts/time_breakdown/__main__.py`.
3. Map agent/tool runtime through: `AGENTS.md`, `triton_backend/tools/__init__.py`, `triton_backend/tools/fill_template.py`.
4. Inspect retrieval/memory/indexing through: `tests/unittest/trt/functional/test_embedding_single_gpu.py`, `tests/unittest/trt/functional/test_index_select.py`, `tests/unittest/others/test_graph_rewriter.py`.
5. Verify behavior through test/eval files: `triton_backend/tools/tests/__init__.py`, `triton_backend/tools/tests/test_fill_template.py`, `triton_backend/tools/tests/test_llmapi_cancel.py`.

## Existing Repository Insight

평가/관측/품질 관점에서 Local clone structure analysis 10452 files, 1071 directories.. 핵심 구조 신호는 pyproject.toml, requirements.txt, README.md, AGENTS.md, CLAUDE.md, openai이며, deep-source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

mixed 신호의 평가/관측/품질 레포입니다. 활용 관점은 quality and evaluation comparison point이고, 후속 확인 포인트는 license metadata missing입니다.
