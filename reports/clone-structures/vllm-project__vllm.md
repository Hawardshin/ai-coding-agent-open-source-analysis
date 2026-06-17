# vllm-project/vllm 구조 분석

생성일: 2026-06-17T22:41:11.818Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/vllm-project__vllm |
| remote | https://github.com/vllm-project/vllm |
| HEAD | a30addc (2026-06-12) [Docs][KV Connector][NIXL] document KV Transfer stat logging and Prometheus metrics (#44055) |
| branch | main |
| groups | adjacent-tech-50, previous-clone-inventory-107 |
| files | 5488 |
| dirs | 713 |
| stack | Python, Rust |

## 구조 해석

- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- 스펙/템플릿/명령/스킬 아티팩트가 있어 에이전트나 SDD 워크플로우가 저장소 구조의 일부다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- 테스트 파일이 충분히 노출되어 기능 검증과 회귀 검증 흐름을 추적할 수 있다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `About`, `Getting Started`, `Contributing`, `Citation`, `Contact Us`, `Media Kit`

> <! markdownlint disable MD001 MD041 <p align="center" <picture <source media="(prefers color scheme dark)" srcset="https //raw.githubusercontent.com/vllm project/vllm/main/docs/assets/logos/vllm logo text dark.png" <img alt="vLLM" src="https //raw.githubusercontent.com/vllm project/vllm/main/docs/assets/logos/vllm logo text light.png" width=55% </picture </p <h3 align="center" Easy, fast, and cheap LLM serving for everyone </h3 <p align="center" <a href="https //docs.vllm.ai" <b Documentation</b </a <a href="https //blog.vllm.ai/" <b Blog</b </a <a href="https //arxiv.org/abs/2309.06180" <b Paper</b </a <a href="https //x.com/vllm project" <b Twitter/X</b </a <a href="https //discuss.vllm.ai" <b User Forum</b </a <a href="https //slack.vllm.ai" <b Developer Slack</b </a </p 🔥 We have built a vLLM website to help you get started with vLLM. Please visit vllm.ai to learn more. For events, 

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .buildkite | dir |
| .clang-format | file |
| .coveragerc | file |
| .dockerignore | file |
| .gemini | dir |
| .git-blame-ignore-revs | file |
| .github | dir |
| .gitignore | file |
| .markdownlint.yaml | file |
| .pre-commit-config.yaml | file |
| .readthedocs.yaml | file |
| .shellcheckrc | file |
| .yapfignore | file |
| AGENTS.md | file |
| benchmarks | dir |
| build_rust.sh | file |
| CLAUDE.md | file |
| cmake | dir |
| CMakeLists.txt | file |
| CODE_OF_CONDUCT.md | file |
| codecov.yml | file |
| CONTRIBUTING.md | file |
| csrc | dir |
| DCO | file |
| docker | dir |
| docs | dir |
| examples | dir |
| LICENSE | file |
| MANIFEST.in | file |
| mkdocs.yaml | file |
| pyproject.toml | file |
| README.md | file |
| RELEASE.md | file |
| requirements | dir |
| rust | dir |
| rust-toolchain.toml | file |
| scripts | dir |
| SECURITY.md | file |
| setup.py | file |
| tests | dir |
| tools | dir |
| use_existing_torch.py | file |
| vllm | dir |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| vllm/ | 2388 |
| tests/ | 1487 |
| docs/ | 334 |
| rust/ | 298 |
| csrc/ | 292 |
| examples/ | 254 |
| .buildkite/ | 178 |
| benchmarks/ | 111 |
| tools/ | 44 |
| .github/ | 30 |
| (root) | 28 |
| requirements/ | 19 |
| docker/ | 15 |
| cmake/ | 8 |
| .gemini/ | 1 |
| scripts/ | 1 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| docs/ | 334 | preferred |
| examples/ | 254 | preferred |
| tests/ | 1487 | preferred |
| tools/ | 44 | preferred |
| scripts/ | 1 | preferred |
| vllm/ | 2388 | large |
| vllm/model_executor/ | 1236 | large |
| vllm/model_executor/layers/ | 847 | large |
| vllm/model_executor/models/ | 299 | large |
| rust/ | 298 | large |
| vllm/v1/ | 296 | large |
| csrc/ | 292 | large |
| rust/src/ | 288 | large |
| tests/v1/ | 251 | large |
| tests/entrypoints/ | 218 | large |
| tests/kernels/ | 202 | large |
| csrc/libtorch_stable/ | 179 | large |
| .buildkite/ | 178 | large |
| vllm/entrypoints/ | 174 | large |
| tests/models/ | 171 | large |
| tests/evals/ | 124 | large |
| vllm/distributed/ | 121 | large |
| benchmarks/ | 111 | large |
| vllm/transformers_utils/ | 111 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `benchmarks/kernels/requirements.txt`
- `benchmarks/multi_turn/requirements.txt`
- `docker/Dockerfile`
- `examples/features/structured_outputs/pyproject.toml`
- `pyproject.toml`
- `rust/Cargo.toml`
- `rust/src/chat/Cargo.toml`
- `rust/src/cmd/Cargo.toml`
- `rust/src/engine-core-client/Cargo.toml`
- `rust/src/llm/Cargo.toml`
- `rust/src/managed-engine/Cargo.toml`
- `rust/src/metrics/Cargo.toml`
- `rust/src/mock-engine/Cargo.toml`
- `rust/src/reasoning-parser/Cargo.toml`
- `rust/src/server/Cargo.toml`
- `rust/src/text/Cargo.toml`
- `rust/src/tokenizer/Cargo.toml`
- `rust/src/tool-parser/Cargo.toml`
- `rust/src/tool-parser/python/Cargo.toml`

### pyproject.toml

| 경로 | 이름 | poetry | uv | ruff | pytest |
| --- | --- | --- | --- | --- | --- |
| examples/features/structured_outputs/pyproject.toml | examples-online-structured-outputs | false | false | false | false |
| pyproject.toml | vllm | false | true | true | true |

### Cargo.toml

| 경로 | 이름 | workspace | members |
| --- | --- | --- | --- |
| rust/Cargo.toml |  | true |      "src/chat",     "src/cmd",     "src/engine-core-client",     "src/llm",     "src/managed-engine",     "src/metrics",     "src/mock-engine",     "src/reasoning-parser",     "sr |
| rust/src/chat/Cargo.toml | vllm-chat | false |  |
| rust/src/cmd/Cargo.toml | vllm-cmd | false |  |
| rust/src/engine-core-client/Cargo.toml | vllm-engine-core-client | false |  |
| rust/src/llm/Cargo.toml | vllm-llm | false |  |
| rust/src/managed-engine/Cargo.toml | vllm-managed-engine | false |  |
| rust/src/metrics/Cargo.toml | vllm-metrics | false |  |
| rust/src/mock-engine/Cargo.toml | vllm-mock-engine | false |  |
| rust/src/reasoning-parser/Cargo.toml | vllm-reasoning-parser | false |  |
| rust/src/server/Cargo.toml | vllm-server | false |  |
| rust/src/text/Cargo.toml | vllm-text | false |  |
| rust/src/tokenizer/Cargo.toml | vllm-tokenizer | false |  |
| rust/src/tool-parser/Cargo.toml | vllm-tool-parser | false |  |
| rust/src/tool-parser/python/Cargo.toml | vllm-tool-parser-py | false |  |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `.buildkite/performance-benchmarks/README.md`
- `CONTRIBUTING.md`
- `README.md`
- `benchmarks/README.md`
- `benchmarks/attention_benchmarks/README.md`
- `benchmarks/auto_tune/README.md`
- `benchmarks/kernels/deepgemm/README.md`
- `benchmarks/multi_turn/README.md`
- `csrc/libtorch_stable/quantization/machete/Readme.md`
- `docs/.nav.yml`
- `docs/README.md`
- `docs/api/README.md`
- `docs/api/vllm/.meta.yml`
- `docs/assets/contributing/dockerfile-stages-dependency.png`
- `docs/assets/contributing/load-pattern-examples.png`
- `docs/assets/contributing/vllm_bench_serve_dataset_stats.png`
- `docs/assets/contributing/vllm_bench_serve_timeline.html`
- `docs/assets/deployment/anything-llm-chat-with-doc.png`
- `docs/assets/deployment/anything-llm-chat-without-doc.png`
- `docs/assets/deployment/anything-llm-provider.png`
- `docs/assets/deployment/anything-llm-upload-doc.png`
- `docs/assets/deployment/architecture_helm_deployment.png`
- `docs/assets/deployment/chatbox-chat.png`
- `docs/assets/deployment/chatbox-settings.png`
- `docs/assets/deployment/claude-code-example.png`
- `docs/assets/deployment/dify-chat.png`
- `docs/assets/deployment/dify-create-chatbot.png`
- `docs/assets/deployment/dify-settings.png`
- `docs/assets/deployment/dp_external_lb.png`
- `docs/assets/deployment/dp_internal_lb.png`
- `docs/assets/deployment/hf-inference-endpoints-catalog.png`
- `docs/assets/deployment/hf-inference-endpoints-choose-infra.png`
- `docs/assets/deployment/hf-inference-endpoints-click-deploy-button.png`
- `docs/assets/deployment/hf-inference-endpoints-configure-container.png`
- `docs/assets/deployment/hf-inference-endpoints-create-endpoint.png`
- `docs/assets/deployment/hf-inference-endpoints-locate-deploy-button.png`
- `docs/assets/deployment/hf-inference-endpoints-new-endpoint.png`
- `docs/assets/deployment/hf-inference-endpoints-select-hardware.png`
- `docs/assets/deployment/hf-inference-endpoints-select-model.png`
- `docs/assets/deployment/open_webui.png`
- `docs/assets/deployment/streamlit-chat.png`
- `docs/assets/design/arch_overview/entrypoints.excalidraw.png`
- `docs/assets/design/arch_overview/llm_engine.excalidraw.png`
- `docs/assets/design/arch_overview/v1_process_architecture_tp2_dp4.png`
- `docs/assets/design/arch_overview/v1_process_architecture_tp4.png`
- `docs/assets/design/cuda_graphs/current_design.png`
- `docs/assets/design/cuda_graphs/executor_runtime.png`
- `docs/assets/design/cuda_graphs/previous_design.png`
- `docs/assets/design/cuda_graphs/wrapper_flow.png`
- `docs/assets/design/debug_vllm_compile/design_diagram.png`
- ... 30 more

### 에이전트 지침 후보

- `AGENTS.md`
- `CLAUDE.md`
- `docs/serving/integrations/codex.md`
- `examples/tool_calling/openai_responses_client_with_mcp_tools.py`
- `rust/AGENTS.md`
- `rust/CLAUDE.md`
- `tests/entrypoints/openai/responses/test_mcp_tools.py`
- `vllm/entrypoints/mcp/__init__.py`
- `vllm/entrypoints/mcp/tool.py`
- `vllm/entrypoints/mcp/tool_server.py`

### 스펙/템플릿/명령/스킬 후보

- `examples/deployment/chart-helm/templates/_helpers.tpl`
- `examples/deployment/chart-helm/templates/configmap.yaml`
- `examples/deployment/chart-helm/templates/custom-objects.yaml`
- `examples/deployment/chart-helm/templates/deployment.yaml`
- `examples/deployment/chart-helm/templates/hpa.yaml`
- `examples/deployment/chart-helm/templates/job.yaml`
- `examples/deployment/chart-helm/templates/poddisruptionbudget.yaml`
- `examples/deployment/chart-helm/templates/pvc.yaml`
- `examples/deployment/chart-helm/templates/secrets.yaml`
- `examples/deployment/chart-helm/templates/service.yaml`
- `rust/src/chat/tests/templates/qwen3.jinja`
- `rust/src/chat/tests/templates/qwen35.jinja`
- `rust/src/chat/tests/templates/vllm_examples/README.md`
- `rust/src/chat/tests/templates/vllm_examples/template_alpaca.jinja`
- `rust/src/chat/tests/templates/vllm_examples/template_baichuan.jinja`
- `rust/src/chat/tests/templates/vllm_examples/template_chatglm.jinja`
- `rust/src/chat/tests/templates/vllm_examples/template_chatglm2.jinja`
- `rust/src/chat/tests/templates/vllm_examples/template_chatml.jinja`
- `rust/src/chat/tests/templates/vllm_examples/template_falcon.jinja`
- `rust/src/chat/tests/templates/vllm_examples/template_falcon_180b.jinja`
- `rust/src/chat/tests/templates/vllm_examples/template_inkbot.jinja`
- `rust/src/chat/tests/templates/vllm_examples/template_teleflm.jinja`
- `rust/src/chat/tests/templates/vllm_examples/tool_chat_template_deepseekr1.jinja`
- `rust/src/chat/tests/templates/vllm_examples/tool_chat_template_deepseekv3.jinja`
- `rust/src/chat/tests/templates/vllm_examples/tool_chat_template_deepseekv31.jinja`
- `rust/src/chat/tests/templates/vllm_examples/tool_chat_template_functiongemma.jinja`
- `rust/src/chat/tests/templates/vllm_examples/tool_chat_template_gemma3_pythonic.jinja`
- `rust/src/chat/tests/templates/vllm_examples/tool_chat_template_gemma4.jinja`
- `rust/src/chat/tests/templates/vllm_examples/tool_chat_template_glm4.jinja`
- `rust/src/chat/tests/templates/vllm_examples/tool_chat_template_granite.jinja`
- `rust/src/chat/tests/templates/vllm_examples/tool_chat_template_granite_20b_fc.jinja`
- `rust/src/chat/tests/templates/vllm_examples/tool_chat_template_hermes.jinja`
- `rust/src/chat/tests/templates/vllm_examples/tool_chat_template_hunyuan_a13b.jinja`
- `rust/src/chat/tests/templates/vllm_examples/tool_chat_template_internlm2_tool.jinja`
- `rust/src/chat/tests/templates/vllm_examples/tool_chat_template_llama3.1_json.jinja`
- `rust/src/chat/tests/templates/vllm_examples/tool_chat_template_llama3.2_json.jinja`
- `rust/src/chat/tests/templates/vllm_examples/tool_chat_template_llama3.2_pythonic.jinja`
- `rust/src/chat/tests/templates/vllm_examples/tool_chat_template_llama4_json.jinja`
- `rust/src/chat/tests/templates/vllm_examples/tool_chat_template_llama4_pythonic.jinja`
- `rust/src/chat/tests/templates/vllm_examples/tool_chat_template_minimax_m1.jinja`
- `rust/src/chat/tests/templates/vllm_examples/tool_chat_template_mistral.jinja`
- `rust/src/chat/tests/templates/vllm_examples/tool_chat_template_mistral3.jinja`
- `rust/src/chat/tests/templates/vllm_examples/tool_chat_template_mistral_parallel.jinja`
- `rust/src/chat/tests/templates/vllm_examples/tool_chat_template_phi4_mini.jinja`
- `rust/src/chat/tests/templates/vllm_examples/tool_chat_template_qwen3coder.jinja`
- `rust/src/chat/tests/templates/vllm_examples/tool_chat_template_toolace.jinja`
- `rust/src/chat/tests/templates/vllm_examples/tool_chat_template_xlam_llama.jinja`
- `rust/src/chat/tests/templates/vllm_examples/tool_chat_template_xlam_qwen.jinja`

## 테스트 / CI / 배포 표면

### 테스트 후보

- `.buildkite/performance-benchmarks/tests/genai-perf-tests.json`
- `.buildkite/performance-benchmarks/tests/latency-tests-arm64-cpu.json`
- `.buildkite/performance-benchmarks/tests/latency-tests-cpu.json`
- `.buildkite/performance-benchmarks/tests/latency-tests-hpu.json`
- `.buildkite/performance-benchmarks/tests/latency-tests.json`
- `.buildkite/performance-benchmarks/tests/nightly-tests.json`
- `.buildkite/performance-benchmarks/tests/serving-tests-arm64-cpu.json`
- `.buildkite/performance-benchmarks/tests/serving-tests-cpu-asr.json`
- `.buildkite/performance-benchmarks/tests/serving-tests-cpu-embed.json`
- `.buildkite/performance-benchmarks/tests/serving-tests-cpu-text.json`
- `.buildkite/performance-benchmarks/tests/serving-tests-cpu.json`
- `.buildkite/performance-benchmarks/tests/serving-tests-hpu.json`
- `.buildkite/performance-benchmarks/tests/serving-tests.json`
- `.buildkite/performance-benchmarks/tests/throughput-tests-arm64-cpu.json`
- `.buildkite/performance-benchmarks/tests/throughput-tests-cpu.json`
- `.buildkite/performance-benchmarks/tests/throughput-tests-hpu.json`
- `.buildkite/performance-benchmarks/tests/throughput-tests.json`
- `examples/deployment/chart-helm/tests/deployment_test.yaml`
- `examples/deployment/chart-helm/tests/job_test.yaml`
- `examples/deployment/chart-helm/tests/pvc_test.yaml`
- `requirements/test/cuda.in`
- `requirements/test/cuda.txt`
- `requirements/test/nightly-torch.txt`
- `requirements/test/rocm.in`
- `requirements/test/rocm.txt`
- `requirements/test/xpu.in`
- `requirements/test/xpu.txt`
- `rust/src/chat/tests/chat.rs`
- `rust/src/chat/tests/roundtrip.rs`
- `rust/src/chat/tests/templates/qwen3.jinja`
- `rust/src/chat/tests/templates/qwen35.jinja`
- `rust/src/chat/tests/templates/vllm_examples/README.md`
- `rust/src/chat/tests/templates/vllm_examples/template_alpaca.jinja`
- `rust/src/chat/tests/templates/vllm_examples/template_baichuan.jinja`
- `rust/src/chat/tests/templates/vllm_examples/template_chatglm.jinja`
- `rust/src/chat/tests/templates/vllm_examples/template_chatglm2.jinja`
- `rust/src/chat/tests/templates/vllm_examples/template_chatml.jinja`
- `rust/src/chat/tests/templates/vllm_examples/template_falcon.jinja`
- `rust/src/chat/tests/templates/vllm_examples/template_falcon_180b.jinja`
- `rust/src/chat/tests/templates/vllm_examples/template_inkbot.jinja`
- `rust/src/chat/tests/templates/vllm_examples/template_teleflm.jinja`
- `rust/src/chat/tests/templates/vllm_examples/tool_chat_template_deepseekr1.jinja`
- `rust/src/chat/tests/templates/vllm_examples/tool_chat_template_deepseekv3.jinja`
- `rust/src/chat/tests/templates/vllm_examples/tool_chat_template_deepseekv31.jinja`
- `rust/src/chat/tests/templates/vllm_examples/tool_chat_template_functiongemma.jinja`
- `rust/src/chat/tests/templates/vllm_examples/tool_chat_template_gemma3_pythonic.jinja`
- `rust/src/chat/tests/templates/vllm_examples/tool_chat_template_gemma4.jinja`
- `rust/src/chat/tests/templates/vllm_examples/tool_chat_template_glm4.jinja`
- `rust/src/chat/tests/templates/vllm_examples/tool_chat_template_granite.jinja`
- `rust/src/chat/tests/templates/vllm_examples/tool_chat_template_granite_20b_fc.jinja`
- `rust/src/chat/tests/templates/vllm_examples/tool_chat_template_hermes.jinja`
- `rust/src/chat/tests/templates/vllm_examples/tool_chat_template_hunyuan_a13b.jinja`
- `rust/src/chat/tests/templates/vllm_examples/tool_chat_template_internlm2_tool.jinja`
- `rust/src/chat/tests/templates/vllm_examples/tool_chat_template_llama3.1_json.jinja`
- `rust/src/chat/tests/templates/vllm_examples/tool_chat_template_llama3.2_json.jinja`
- `rust/src/chat/tests/templates/vllm_examples/tool_chat_template_llama3.2_pythonic.jinja`
- `rust/src/chat/tests/templates/vllm_examples/tool_chat_template_llama4_json.jinja`
- `rust/src/chat/tests/templates/vllm_examples/tool_chat_template_llama4_pythonic.jinja`
- `rust/src/chat/tests/templates/vllm_examples/tool_chat_template_minimax_m1.jinja`
- `rust/src/chat/tests/templates/vllm_examples/tool_chat_template_mistral.jinja`
- `rust/src/chat/tests/templates/vllm_examples/tool_chat_template_mistral3.jinja`
- `rust/src/chat/tests/templates/vllm_examples/tool_chat_template_mistral_parallel.jinja`
- `rust/src/chat/tests/templates/vllm_examples/tool_chat_template_phi4_mini.jinja`
- `rust/src/chat/tests/templates/vllm_examples/tool_chat_template_qwen3coder.jinja`
- `rust/src/chat/tests/templates/vllm_examples/tool_chat_template_toolace.jinja`
- `rust/src/chat/tests/templates/vllm_examples/tool_chat_template_xlam_llama.jinja`
- `rust/src/chat/tests/templates/vllm_examples/tool_chat_template_xlam_qwen.jinja`
- `rust/src/engine-core-client/src/tests/client.rs`
- `rust/src/engine-core-client/src/tests/mod.rs`
- `rust/src/engine-core-client/src/tests/python_compat.py`
- `rust/src/llm/tests/generate.rs`
- `tests/__init__.py`
- `tests/basic_correctness/__init__.py`
- `tests/basic_correctness/test_basic_correctness.py`
- `tests/basic_correctness/test_cpu_offload.py`
- `tests/basic_correctness/test_mem.py`
- `tests/basic_correctness/test_prefetch_offload.py`
- `tests/benchmarks/__init__.py`
- `tests/benchmarks/sweep/__init__.py`
- `tests/benchmarks/sweep/test_param_sweep.py`
- ... 40 more

### CI/Docker 후보

- `.github/workflows/add_label_automerge.yml`
- `.github/workflows/issue_autolabel.yml`
- `.github/workflows/macos-smoke-test.yml`
- `.github/workflows/matchers/actionlint.json`
- `.github/workflows/matchers/markdownlint.json`
- `.github/workflows/matchers/mypy.json`
- `.github/workflows/new_pr_bot.yml`
- `.github/workflows/pre-commit.yml`
- `.github/workflows/scripts/build.sh`
- `.github/workflows/scripts/create_release.js`
- `.github/workflows/scripts/cuda-install.sh`
- `.github/workflows/scripts/env.sh`
- `.github/workflows/scripts/pytorch-install.sh`
- `.github/workflows/stale.yml`
- `docker/Dockerfile`
- `examples/observability/prometheus_grafana/docker-compose.yaml`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .py | 3422 |
| .json | 596 |
| .md | 281 |
| .rs | 220 |
| .yaml | 210 |
| .sh | 119 |
| .cu | 92 |
| .jinja | 91 |
| .png | 87 |
| .cuh | 77 |
| .txt | 61 |
| .hpp | 41 |
| .h | 40 |
| .cpp | 33 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `docs/ 내부 책임 분리`
- `examples/ 내부 책임 분리`
- `tests/ 내부 책임 분리`
- `tools/ 내부 책임 분리`
- `scripts/ 내부 책임 분리`
- `examples/deployment/chart-helm/templates/_helpers.tpl 스펙/명령 의미`
- `examples/deployment/chart-helm/templates/configmap.yaml 스펙/명령 의미`
- `examples/deployment/chart-helm/templates/custom-objects.yaml 스펙/명령 의미`
- `examples/deployment/chart-helm/templates/deployment.yaml 스펙/명령 의미`
- `examples/deployment/chart-helm/templates/hpa.yaml 스펙/명령 의미`
- `benchmarks/kernels/requirements.txt 실행 스크립트와 패키지 경계`
- `benchmarks/multi_turn/requirements.txt 실행 스크립트와 패키지 경계`
- `docker/Dockerfile 실행 스크립트와 패키지 경계`
- `examples/features/structured_outputs/pyproject.toml 실행 스크립트와 패키지 경계`
- `pyproject.toml 실행 스크립트와 패키지 경계`

