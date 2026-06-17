# sgl-project/sglang 구조 분석

생성일: 2026-06-17T22:41:11.818Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/sgl-project__sglang |
| remote | https://github.com/sgl-project/sglang |
| HEAD | 9f6b233 (2026-06-12) docs(minimax-m3): warm-steady-state benchmark numbers (#28062) |
| branch | main |
| groups | adjacent-tech-50, previous-clone-inventory-107 |
| files | 6477 |
| dirs | 1022 |
| stack | Python, Rust, Go |

## 구조 해석

- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- 스펙/템플릿/명령/스킬 아티팩트가 있어 에이전트나 SDD 워크플로우가 저장소 구조의 일부다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- 테스트 파일이 충분히 노출되어 기능 검증과 회귀 검증 흐름을 추적할 수 있다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `News`, `About`, `Getting Started`, `Benchmark and Performance`, `Adoption and Sponsorship`, `Contact Us`, `Acknowledgment`

> <div align="center" id="sglangtop" <img src="https //raw.githubusercontent.com/sgl project/sglang/main/assets/logo.png" alt="logo" width="400" margin="10px" </img </div <p align="center" <a href="https //lmsys.org/blog/" <b Blog</b </a <a href="https //docs.sglang.io/" <b Documentation</b </a <a href="https //roadmap.sglang.io/" <b Roadmap</b </a <a href="https //slack.sglang.io/" <b Join Slack</b </a <a href="https //meet.sglang.io/" <b Weekly Dev Meeting</b </a <a href="https //github.com/sgl project/sgl learning materials?tab=readme ov file slides" <b Slides</b </a </p News [2026/02] 🔥 Unlocking 25x Inference Performance with SGLang on NVIDIA GB300 NVL72 (blog). [2026/01] 🔥 SGLang Diffusion accelerates video and image generation (blog). [2025/12] SGLang provides day 0 support for latest open models (MiMo V2 Flash, Nemotron 3 Nano, Mistral Large 3, LLaDA 2.0 Diffusion LLM, MiniMax M2

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .claude | dir |
| .codespellrc | file |
| .coveragerc | file |
| .devcontainer | dir |
| .dockerignore | other |
| .github | dir |
| .gitignore | file |
| .isort.cfg | file |
| .pre-commit-config.yaml | file |
| 3rdparty | dir |
| assets | dir |
| benchmark | dir |
| docker | dir |
| docs | dir |
| docs_new | dir |
| examples | dir |
| experimental | dir |
| LICENSE | file |
| proto | dir |
| python | dir |
| README.md | file |
| rust | dir |
| scripts | dir |
| sgl-kernel | dir |
| sgl-model-gateway | dir |
| test | dir |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| python/ | 3089 |
| test/ | 1327 |
| sgl-model-gateway/ | 408 |
| docs_new/ | 394 |
| sgl-kernel/ | 313 |
| benchmark/ | 180 |
| docs/ | 174 |
| experimental/ | 136 |
| scripts/ | 104 |
| .github/ | 100 |
| .claude/ | 98 |
| examples/ | 91 |
| docker/ | 19 |
| 3rdparty/ | 17 |
| rust/ | 13 |
| (root) | 7 |
| assets/ | 4 |
| .devcontainer/ | 2 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| docs/ | 174 | preferred |
| examples/ | 91 | preferred |
| test/ | 1327 | preferred |
| scripts/ | 104 | preferred |
| python/ | 3089 | large |
| python/sglang/ | 3083 | large |
| python/sglang/srt/ | 1978 | large |
| test/registered/ | 1058 | large |
| python/sglang/multimodal_gen/ | 663 | large |
| sgl-model-gateway/ | 408 | large |
| docs_new/ | 394 | large |
| sgl-kernel/ | 313 | large |
| python/sglang/jit_kernel/ | 249 | large |
| test/manual/ | 237 | large |
| benchmark/ | 180 | large |
| sgl-kernel/csrc/ | 173 | large |
| sgl-model-gateway/src/ | 172 | large |
| test/registered/unit/ | 166 | large |
| docs_new/docs/ | 160 | large |
| python/sglang/test/ | 138 | large |
| experimental/ | 136 | large |
| experimental/sgl-router/ | 136 | large |
| test/registered/ascend/ | 112 | large |
| test/registered/jit/ | 110 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `.devcontainer/Dockerfile`
- `3rdparty/amd/wheel/sglang/pyproject.toml`
- `docker/Dockerfile`
- `docs/requirements.txt`
- `examples/frontend_language/usage/triton/Dockerfile`
- `experimental/sgl-router/Cargo.toml`
- `experimental/sgl-router/tests/e2e/k8s_integration/requirements.txt`
- `experimental/sgl-router/tests/e2e/pyproject.toml`
- `experimental/sgl-router/tests/e2e/requirements.txt`
- `python/pyproject.toml`
- `rust/sglang-grpc/Cargo.toml`
- `sgl-kernel/Dockerfile`
- `sgl-kernel/pyproject.toml`
- `sgl-model-gateway/Cargo.toml`
- `sgl-model-gateway/bindings/golang/Cargo.toml`
- `sgl-model-gateway/bindings/golang/examples/oai_server/go.mod`
- `sgl-model-gateway/bindings/golang/go.mod`
- `sgl-model-gateway/bindings/python/Cargo.toml`
- `sgl-model-gateway/bindings/python/pyproject.toml`
- `sgl-model-gateway/e2e_test/pyproject.toml`
- `sgl-model-gateway/examples/wasm/wasm-guest-auth/Cargo.toml`
- `sgl-model-gateway/examples/wasm/wasm-guest-logging/Cargo.toml`
- `sgl-model-gateway/examples/wasm/wasm-guest-ratelimit/Cargo.toml`

### pyproject.toml

| 경로 | 이름 | poetry | uv | ruff | pytest |
| --- | --- | --- | --- | --- | --- |
| 3rdparty/amd/wheel/sglang/pyproject.toml | amd-sglang | false | false | false | false |
| experimental/sgl-router/tests/e2e/pyproject.toml |  | false | false | false | true |
| python/pyproject.toml | sglang | false | true | false | false |
| sgl-kernel/pyproject.toml | sglang-kernel | false | false | false | false |
| sgl-model-gateway/bindings/python/pyproject.toml | sglang-router | false | false | false | true |
| sgl-model-gateway/e2e_test/pyproject.toml | sgl-model-gateway-e2e-tests | false | false | false | true |

### Cargo.toml

| 경로 | 이름 | workspace | members |
| --- | --- | --- | --- |
| experimental/sgl-router/Cargo.toml | sgl-router | true | "." |
| rust/sglang-grpc/Cargo.toml | sglang-grpc | false |  |
| sgl-model-gateway/Cargo.toml | sgl-model-gateway | true | "bindings/python" |
| sgl-model-gateway/bindings/golang/Cargo.toml | sgl-model-gateway-golang | false |  |
| sgl-model-gateway/bindings/python/Cargo.toml | sgl-model-gateway-python | false |  |
| sgl-model-gateway/examples/wasm/wasm-guest-auth/Cargo.toml | wasm-guest-auth | false |  |
| sgl-model-gateway/examples/wasm/wasm-guest-logging/Cargo.toml | wasm-guest-logging | false |  |
| sgl-model-gateway/examples/wasm/wasm-guest-ratelimit/Cargo.toml | wasm-guest-ratelimit | false |  |

### go.mod

| 경로 | module | go |
| --- | --- | --- |
| sgl-model-gateway/bindings/golang/examples/oai_server/go.mod | oai_server | 1.24.0 |
| sgl-model-gateway/bindings/golang/go.mod | github.com/sglang/sglang-go-grpc-sdk | 1.24.0 |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `.claude/skills/llm-serving-auto-benchmark/configs/cookbook-llm/README.md`
- `3rdparty/amd/wheel/README.md`
- `README.md`
- `benchmark/asr/README.md`
- `benchmark/benchmark_vllm_060/README.md`
- `benchmark/blog_v0_2/README.md`
- `benchmark/boolq/README.md`
- `benchmark/ceval/README.md`
- `benchmark/deepseek_v3/README.md`
- `benchmark/dspy/README.md`
- `benchmark/generative_agents/README.md`
- `benchmark/gpt_oss/README.md`
- `benchmark/gsm8k/README.md`
- `benchmark/hellaswag/README.md`
- `benchmark/hicache/README.md`
- `benchmark/json_decode_regex/README.md`
- `benchmark/json_jump_forward/README.md`
- `benchmark/json_schema/README.md`
- `benchmark/kernels/all_reduce/README.md`
- `benchmark/kernels/deepseek/README.md`
- `benchmark/kernels/flashinfer_allreduce_fusion/README.md`
- `benchmark/kernels/fused_moe_triton/README.md`
- `benchmark/kernels/quantization/README.md`
- `benchmark/line_retrieval/README.md`
- `benchmark/llava_bench/README.md`
- `benchmark/llm_judge/README.md`
- `benchmark/long_json_decode/README.md`
- `benchmark/mmlu/README.md`
- `benchmark/mmmu/README.md`
- `benchmark/mtbench/README.md`
- `benchmark/multi_chain_reasoning/README.md`
- `benchmark/multi_document_qa/README.md`
- `benchmark/multi_turn_chat/README.md`
- `benchmark/react/README.md`
- `benchmark/reasoning_benchmark/README.md`
- `benchmark/tip_suggestion/README.md`
- `benchmark/tree_of_thought_deep/README.md`
- `benchmark/tree_of_thought_v0/README.md`
- `docs/Makefile`
- `docs/README.md`
- `docs/_static/css/custom_log.css`
- `docs/_static/css/readthedocs.css`
- `docs/_static/image/dpa.png`
- `docs/_static/image/logo.ico`
- `docs/_static/image/logo.png`
- `docs/_static/js/deprecation_banner.js`
- `docs/advanced_features/adaptive_speculative_decoding.md`
- `docs/advanced_features/attention_backend.md`
- `docs/advanced_features/breakable_cuda_graph.md`
- `docs/advanced_features/checkpoint_engine.md`
- ... 30 more

### 에이전트 지침 후보

- `.claude/rules/modify-component-must-read.md`
- `.claude/skills/add-jit-kernel/SKILL.md`
- `.claude/skills/add-sgl-kernel/SKILL.md`
- `.claude/skills/ci-workflow-guide/SKILL.md`
- `.claude/skills/clean-startup-log/SKILL.md`
- `.claude/skills/cookbook-add-model/SKILL.md`
- `.claude/skills/cookbook-add-model/references/authoring-reference.md`
- `.claude/skills/cookbook-add-model/references/engine-axis.md`
- `.claude/skills/cookbook-add-model/references/mintlify-authoring.md`
- `.claude/skills/cookbook-add-model/references/vendor-logo.md`
- `.claude/skills/cookbook-add-model/templates/benchmarks.jsx.tmpl`
- `.claude/skills/cookbook-add-model/templates/config.jsx.tmpl`
- `.claude/skills/cookbook-add-model/templates/page.mdx.tmpl`
- `.claude/skills/cookbook-review-pr/SKILL.md`
- `.claude/skills/debug-cuda-crash/SKILL.md`
- `.claude/skills/debug-distributed-hang/SKILL.md`
- `.claude/skills/env-var-conventions/SKILL.md`
- `.claude/skills/generate-profile/SKILL.md`
- `.claude/skills/large-class-init-style/SKILL.md`
- `.claude/skills/llm-serving-auto-benchmark/SKILL.md`
- `.claude/skills/llm-serving-auto-benchmark/configs/cookbook-llm/README.md`
- `.claude/skills/llm-serving-auto-benchmark/configs/cookbook-llm/deepseek-math-v2.yaml`
- `.claude/skills/llm-serving-auto-benchmark/configs/cookbook-llm/deepseek-r1-0528.yaml`
- `.claude/skills/llm-serving-auto-benchmark/configs/cookbook-llm/deepseek-v3.1.yaml`
- `.claude/skills/llm-serving-auto-benchmark/configs/cookbook-llm/deepseek-v3.2.yaml`
- `.claude/skills/llm-serving-auto-benchmark/configs/cookbook-llm/deepseek-v3.yaml`
- `.claude/skills/llm-serving-auto-benchmark/configs/cookbook-llm/devstral-small-2-24b-instruct-2512.yaml`
- `.claude/skills/llm-serving-auto-benchmark/configs/cookbook-llm/ernie-4.5-21b-a3b-pt.yaml`
- `.claude/skills/llm-serving-auto-benchmark/configs/cookbook-llm/glm-4.5.yaml`
- `.claude/skills/llm-serving-auto-benchmark/configs/cookbook-llm/glm-4.6.yaml`
- `.claude/skills/llm-serving-auto-benchmark/configs/cookbook-llm/glm-4.7-flash.yaml`
- `.claude/skills/llm-serving-auto-benchmark/configs/cookbook-llm/glm-4.7.yaml`
- `.claude/skills/llm-serving-auto-benchmark/configs/cookbook-llm/glm-5-fp8.yaml`
- `.claude/skills/llm-serving-auto-benchmark/configs/cookbook-llm/glyph.yaml`
- `.claude/skills/llm-serving-auto-benchmark/configs/cookbook-llm/gpt-oss-120b.yaml`
- `.claude/skills/llm-serving-auto-benchmark/configs/cookbook-llm/intern-s1.yaml`
- `.claude/skills/llm-serving-auto-benchmark/configs/cookbook-llm/kimi-k2-instruct.yaml`
- `.claude/skills/llm-serving-auto-benchmark/configs/cookbook-llm/kimi-k2.5.yaml`
- `.claude/skills/llm-serving-auto-benchmark/configs/cookbook-llm/kimi-linear-48b-a3b-instruct.yaml`
- `.claude/skills/llm-serving-auto-benchmark/configs/cookbook-llm/ling-2.5-1t.yaml`
- `.claude/skills/llm-serving-auto-benchmark/configs/cookbook-llm/llada2-1-mini.yaml`
- `.claude/skills/llm-serving-auto-benchmark/configs/cookbook-llm/llama-3.1-70b-instruct.yaml`
- `.claude/skills/llm-serving-auto-benchmark/configs/cookbook-llm/llama-3.3-70b-instruct.yaml`
- `.claude/skills/llm-serving-auto-benchmark/configs/cookbook-llm/llama-4-maverick-17b-128e-instruct-fp8.yaml`
- `.claude/skills/llm-serving-auto-benchmark/configs/cookbook-llm/llama-4-scout-17b-16e-instruct.yaml`
- `.claude/skills/llm-serving-auto-benchmark/configs/cookbook-llm/mimo-v2-flash.yaml`
- `.claude/skills/llm-serving-auto-benchmark/configs/cookbook-llm/minimax-m2.1.yaml`
- `.claude/skills/llm-serving-auto-benchmark/configs/cookbook-llm/minimax-m2.5.yaml`
- `.claude/skills/llm-serving-auto-benchmark/configs/cookbook-llm/ministral-3-8b-instruct-2512.yaml`
- `.claude/skills/llm-serving-auto-benchmark/configs/cookbook-llm/mistral-small-4-119b-2603.yaml`
- `.claude/skills/llm-serving-auto-benchmark/configs/cookbook-llm/nemotron-3-nano-30b-a3b-bf16.yaml`
- `.claude/skills/llm-serving-auto-benchmark/configs/cookbook-llm/nemotron-3-super-120b-a12b-bf16.yaml`
- `.claude/skills/llm-serving-auto-benchmark/configs/cookbook-llm/qwen3-235b-a22b.yaml`
- `.claude/skills/llm-serving-auto-benchmark/configs/cookbook-llm/qwen3-coder-480b-a35b-instruct.yaml`
- `.claude/skills/llm-serving-auto-benchmark/configs/cookbook-llm/qwen3-coder-next.yaml`
- `.claude/skills/llm-serving-auto-benchmark/configs/cookbook-llm/qwen3-next-80b-a3b-instruct.yaml`
- `.claude/skills/llm-serving-auto-benchmark/configs/cookbook-llm/qwen35-397b-a17b-fp8.yaml`
- `.claude/skills/llm-serving-auto-benchmark/configs/cookbook-llm/ring-2.5-1t.yaml`
- `.claude/skills/llm-serving-auto-benchmark/configs/cookbook-llm/step-3.5-flash.yaml`
- `.claude/skills/llm-serving-auto-benchmark/references/container-runbook.md`
- `.claude/skills/llm-serving-auto-benchmark/references/example-plan.yaml`
- `.claude/skills/llm-serving-auto-benchmark/references/framework-reference.md`
- `.claude/skills/llm-serving-auto-benchmark/references/result-schema.md`
- `.claude/skills/llm-serving-auto-benchmark/scripts/compare_benchmark_results.py`
- `.claude/skills/llm-serving-auto-benchmark/scripts/validate_cookbook_configs.py`
- `.claude/skills/llm-torch-profiler-analysis/SKILL.md`
- `.claude/skills/llm-torch-profiler-analysis/references/fuse-overlap-catalog.md`
- `.claude/skills/llm-torch-profiler-analysis/references/heuristics.md`
- `.claude/skills/llm-torch-profiler-analysis/references/overlap-catalog.md`
- `.claude/skills/llm-torch-profiler-analysis/references/source-map.md`
- `.claude/skills/llm-torch-profiler-analysis/references/vllm-torch-compile-fusions.md`
- `.claude/skills/llm-torch-profiler-analysis/scripts/analyze_llm_torch_profile.py`
- `.claude/skills/llm-torch-profiler-analysis/scripts/analyze_sglang_torch_profile.py`
- `.claude/skills/llm-torch-profiler-analysis/scripts/make_trtllm_py_executor_override.py`
- `.claude/skills/llm-torch-profiler-analysis/scripts/probe_llm_server.py`
- `.claude/skills/llm-torch-profiler-analysis/scripts/profile_common.py`
- `.claude/skills/llm-torch-profiler-analysis/scripts/render_triage_markdown_bundle.py`
- `.claude/skills/llm-torch-profiler-analysis/scripts/run_llm_single_model_matrix_host.sh`
- `.claude/skills/llm-torch-profiler-analysis/scripts/run_sglang_torch_profile_host.sh`
- `.claude/skills/llm-torch-profiler-analysis/scripts/run_trtllm_pytorch_profile_host.sh`
- ... 20 more

### 스펙/템플릿/명령/스킬 후보

- `.claude/skills/add-jit-kernel/SKILL.md`
- `.claude/skills/add-sgl-kernel/SKILL.md`
- `.claude/skills/ci-workflow-guide/SKILL.md`
- `.claude/skills/clean-startup-log/SKILL.md`
- `.claude/skills/cookbook-add-model/SKILL.md`
- `.claude/skills/cookbook-add-model/references/authoring-reference.md`
- `.claude/skills/cookbook-add-model/references/engine-axis.md`
- `.claude/skills/cookbook-add-model/references/mintlify-authoring.md`
- `.claude/skills/cookbook-add-model/references/vendor-logo.md`
- `.claude/skills/cookbook-add-model/templates/benchmarks.jsx.tmpl`
- `.claude/skills/cookbook-add-model/templates/config.jsx.tmpl`
- `.claude/skills/cookbook-add-model/templates/page.mdx.tmpl`
- `.claude/skills/cookbook-review-pr/SKILL.md`
- `.claude/skills/debug-cuda-crash/SKILL.md`
- `.claude/skills/debug-distributed-hang/SKILL.md`
- `.claude/skills/env-var-conventions/SKILL.md`
- `.claude/skills/generate-profile/SKILL.md`
- `.claude/skills/large-class-init-style/SKILL.md`
- `.claude/skills/llm-serving-auto-benchmark/SKILL.md`
- `.claude/skills/llm-serving-auto-benchmark/configs/cookbook-llm/README.md`
- `.claude/skills/llm-serving-auto-benchmark/configs/cookbook-llm/deepseek-math-v2.yaml`
- `.claude/skills/llm-serving-auto-benchmark/configs/cookbook-llm/deepseek-r1-0528.yaml`
- `.claude/skills/llm-serving-auto-benchmark/configs/cookbook-llm/deepseek-v3.1.yaml`
- `.claude/skills/llm-serving-auto-benchmark/configs/cookbook-llm/deepseek-v3.2.yaml`
- `.claude/skills/llm-serving-auto-benchmark/configs/cookbook-llm/deepseek-v3.yaml`
- `.claude/skills/llm-serving-auto-benchmark/configs/cookbook-llm/devstral-small-2-24b-instruct-2512.yaml`
- `.claude/skills/llm-serving-auto-benchmark/configs/cookbook-llm/ernie-4.5-21b-a3b-pt.yaml`
- `.claude/skills/llm-serving-auto-benchmark/configs/cookbook-llm/glm-4.5.yaml`
- `.claude/skills/llm-serving-auto-benchmark/configs/cookbook-llm/glm-4.6.yaml`
- `.claude/skills/llm-serving-auto-benchmark/configs/cookbook-llm/glm-4.7-flash.yaml`
- `.claude/skills/llm-serving-auto-benchmark/configs/cookbook-llm/glm-4.7.yaml`
- `.claude/skills/llm-serving-auto-benchmark/configs/cookbook-llm/glm-5-fp8.yaml`
- `.claude/skills/llm-serving-auto-benchmark/configs/cookbook-llm/glyph.yaml`
- `.claude/skills/llm-serving-auto-benchmark/configs/cookbook-llm/gpt-oss-120b.yaml`
- `.claude/skills/llm-serving-auto-benchmark/configs/cookbook-llm/intern-s1.yaml`
- `.claude/skills/llm-serving-auto-benchmark/configs/cookbook-llm/kimi-k2-instruct.yaml`
- `.claude/skills/llm-serving-auto-benchmark/configs/cookbook-llm/kimi-k2.5.yaml`
- `.claude/skills/llm-serving-auto-benchmark/configs/cookbook-llm/kimi-linear-48b-a3b-instruct.yaml`
- `.claude/skills/llm-serving-auto-benchmark/configs/cookbook-llm/ling-2.5-1t.yaml`
- `.claude/skills/llm-serving-auto-benchmark/configs/cookbook-llm/llada2-1-mini.yaml`
- `.claude/skills/llm-serving-auto-benchmark/configs/cookbook-llm/llama-3.1-70b-instruct.yaml`
- `.claude/skills/llm-serving-auto-benchmark/configs/cookbook-llm/llama-3.3-70b-instruct.yaml`
- `.claude/skills/llm-serving-auto-benchmark/configs/cookbook-llm/llama-4-maverick-17b-128e-instruct-fp8.yaml`
- `.claude/skills/llm-serving-auto-benchmark/configs/cookbook-llm/llama-4-scout-17b-16e-instruct.yaml`
- `.claude/skills/llm-serving-auto-benchmark/configs/cookbook-llm/mimo-v2-flash.yaml`
- `.claude/skills/llm-serving-auto-benchmark/configs/cookbook-llm/minimax-m2.1.yaml`
- `.claude/skills/llm-serving-auto-benchmark/configs/cookbook-llm/minimax-m2.5.yaml`
- `.claude/skills/llm-serving-auto-benchmark/configs/cookbook-llm/ministral-3-8b-instruct-2512.yaml`
- `.claude/skills/llm-serving-auto-benchmark/configs/cookbook-llm/mistral-small-4-119b-2603.yaml`
- `.claude/skills/llm-serving-auto-benchmark/configs/cookbook-llm/nemotron-3-nano-30b-a3b-bf16.yaml`
- `.claude/skills/llm-serving-auto-benchmark/configs/cookbook-llm/nemotron-3-super-120b-a12b-bf16.yaml`
- `.claude/skills/llm-serving-auto-benchmark/configs/cookbook-llm/qwen3-235b-a22b.yaml`
- `.claude/skills/llm-serving-auto-benchmark/configs/cookbook-llm/qwen3-coder-480b-a35b-instruct.yaml`
- `.claude/skills/llm-serving-auto-benchmark/configs/cookbook-llm/qwen3-coder-next.yaml`
- `.claude/skills/llm-serving-auto-benchmark/configs/cookbook-llm/qwen3-next-80b-a3b-instruct.yaml`
- `.claude/skills/llm-serving-auto-benchmark/configs/cookbook-llm/qwen35-397b-a17b-fp8.yaml`
- `.claude/skills/llm-serving-auto-benchmark/configs/cookbook-llm/ring-2.5-1t.yaml`
- `.claude/skills/llm-serving-auto-benchmark/configs/cookbook-llm/step-3.5-flash.yaml`
- `.claude/skills/llm-serving-auto-benchmark/references/container-runbook.md`
- `.claude/skills/llm-serving-auto-benchmark/references/example-plan.yaml`
- `.claude/skills/llm-serving-auto-benchmark/references/framework-reference.md`
- `.claude/skills/llm-serving-auto-benchmark/references/result-schema.md`
- `.claude/skills/llm-serving-auto-benchmark/scripts/compare_benchmark_results.py`
- `.claude/skills/llm-serving-auto-benchmark/scripts/validate_cookbook_configs.py`
- `.claude/skills/llm-torch-profiler-analysis/SKILL.md`
- `.claude/skills/llm-torch-profiler-analysis/references/fuse-overlap-catalog.md`
- `.claude/skills/llm-torch-profiler-analysis/references/heuristics.md`
- `.claude/skills/llm-torch-profiler-analysis/references/overlap-catalog.md`
- `.claude/skills/llm-torch-profiler-analysis/references/source-map.md`
- `.claude/skills/llm-torch-profiler-analysis/references/vllm-torch-compile-fusions.md`
- `.claude/skills/llm-torch-profiler-analysis/scripts/analyze_llm_torch_profile.py`
- `.claude/skills/llm-torch-profiler-analysis/scripts/analyze_sglang_torch_profile.py`
- `.claude/skills/llm-torch-profiler-analysis/scripts/make_trtllm_py_executor_override.py`
- `.claude/skills/llm-torch-profiler-analysis/scripts/probe_llm_server.py`
- `.claude/skills/llm-torch-profiler-analysis/scripts/profile_common.py`
- `.claude/skills/llm-torch-profiler-analysis/scripts/render_triage_markdown_bundle.py`
- `.claude/skills/llm-torch-profiler-analysis/scripts/run_llm_single_model_matrix_host.sh`
- `.claude/skills/llm-torch-profiler-analysis/scripts/run_sglang_torch_profile_host.sh`
- `.claude/skills/llm-torch-profiler-analysis/scripts/run_trtllm_pytorch_profile_host.sh`
- `.claude/skills/llm-torch-profiler-analysis/scripts/run_vllm_torch_profile_host.sh`
- `.claude/skills/llm-torch-profiler-analysis/scripts/triage_kernel_helpers.py`
- `.claude/skills/llm-torch-profiler-analysis/scripts/triage_overlap_helpers.py`
- `.claude/skills/mechanical-refactor-verify/SKILL.md`
- `.claude/skills/mechanical-refactor-verify/mechanical_refactor_verify_utils.py`
- `.claude/skills/scripted-runtime-notes/SKILL.md`
- `.claude/skills/sglang-bisect-ci-regression/SKILL.md`
- `.claude/skills/sglang-cherrypick/SKILL.md`
- `.claude/skills/sglang-prod-incident-triage/SKILL.md`
- `.claude/skills/sglang-prod-incident-triage/references/case-studies.md`
- `.claude/skills/sglang-prod-incident-triage/references/decision-tree.md`
- `.claude/skills/sglang-prod-incident-triage/references/endpoints-and-signals.md`
- `.claude/skills/sglang-prod-incident-triage/references/replay-trace-profile.md`
- `.claude/skills/sglang-prod-incident-triage/scripts/incident_artifact_tool.py`
- `.claude/skills/sglang-prod-incident-triage/scripts/replay_trusted_request_dump.py`
- `.claude/skills/sglang-sota-performance/SKILL.md`
- `.claude/skills/speculative-naming/SKILL.md`
- `.claude/skills/write-sglang-test/SKILL.md`
- `docs/advanced_features/hicache_design.md`
- `python/sglang/multimodal_gen/.claude/skills/sglang-diffusion-add-model/SKILL.md`
- `python/sglang/multimodal_gen/.claude/skills/sglang-diffusion-add-model/references/testing-and-accuracy.md`
- ... 7 more

## 테스트 / CI / 배포 표면

### 테스트 후보

- `experimental/sgl-router/tests/component/discovery/mod.rs`
- `experimental/sgl-router/tests/component/discovery/static_urls.rs`
- `experimental/sgl-router/tests/component/health/circuit_breaker.rs`
- `experimental/sgl-router/tests/component/health/mod.rs`
- `experimental/sgl-router/tests/component/main.rs`
- `experimental/sgl-router/tests/component/policies/cache_aware_zmq.rs`
- `experimental/sgl-router/tests/component/policies/kv_events_hash_parity.rs`
- `experimental/sgl-router/tests/component/policies/kv_events_tree_concurrent.rs`
- `experimental/sgl-router/tests/component/policies/kv_events_two_subscribers.rs`
- `experimental/sgl-router/tests/component/policies/mod.rs`
- `experimental/sgl-router/tests/component/policies/power_of_two.rs`
- `experimental/sgl-router/tests/component/policies/round_robin.rs`
- `experimental/sgl-router/tests/component/policies/zmq_helpers.rs`
- `experimental/sgl-router/tests/component/tokenizer/mod.rs`
- `experimental/sgl-router/tests/component/tokenizer/parity.rs`
- `experimental/sgl-router/tests/component/workers/concurrent_state.rs`
- `experimental/sgl-router/tests/component/workers/manager.rs`
- `experimental/sgl-router/tests/component/workers/mod.rs`
- `experimental/sgl-router/tests/e2e/chat_completions/test_load_based_policy.py`
- `experimental/sgl-router/tests/e2e/chat_completions/test_two_router_convergence.py`
- `experimental/sgl-router/tests/e2e/chat_completions/test_validation.py`
- `experimental/sgl-router/tests/e2e/conftest.py`
- `experimental/sgl-router/tests/e2e/infra/__init__.py`
- `experimental/sgl-router/tests/e2e/infra/gateway.py`
- `experimental/sgl-router/tests/e2e/infra/model_pool.py`
- `experimental/sgl-router/tests/e2e/infra/model_specs.py`
- `experimental/sgl-router/tests/e2e/k8s_integration/Dockerfile.fake_worker`
- `experimental/sgl-router/tests/e2e/k8s_integration/Dockerfile.router`
- `experimental/sgl-router/tests/e2e/k8s_integration/conftest.py`
- `experimental/sgl-router/tests/e2e/k8s_integration/fake_worker.py`
- `experimental/sgl-router/tests/e2e/k8s_integration/manifests/namespace.yaml`
- `experimental/sgl-router/tests/e2e/k8s_integration/manifests/rbac-cluster-scoped.yaml`
- `experimental/sgl-router/tests/e2e/k8s_integration/manifests/rbac.yaml`
- `experimental/sgl-router/tests/e2e/k8s_integration/manifests/router-cluster-scoped.yaml`
- `experimental/sgl-router/tests/e2e/k8s_integration/manifests/router.yaml`
- `experimental/sgl-router/tests/e2e/k8s_integration/requirements.txt`
- `experimental/sgl-router/tests/e2e/k8s_integration/setup.sh`
- `experimental/sgl-router/tests/e2e/k8s_integration/test_cross_namespace.py`
- `experimental/sgl-router/tests/e2e/k8s_integration/test_discovery.py`
- `experimental/sgl-router/tests/e2e/k8s_integration/test_lifecycle.py`
- `experimental/sgl-router/tests/e2e/k8s_integration/test_reconciliation.py`
- `experimental/sgl-router/tests/e2e/pyproject.toml`
- `experimental/sgl-router/tests/e2e/requirements.txt`
- `experimental/sgl-router/tests/e2e/test_chat_smoke.py`
- `experimental/sgl-router/tests/e2e/test_tokenize_smoke.py`
- `experimental/sgl-router/tests/fixtures/kv_events_hash_parity.json`
- `experimental/sgl-router/tests/fixtures/tiny_tokenizer.json`
- `experimental/sgl-router/tests/fixtures/tokenizer_parity/deepseek-v3p2/long.json`
- `experimental/sgl-router/tests/fixtures/tokenizer_parity/deepseek-v3p2/multi_turn_with_tools.json`
- `experimental/sgl-router/tests/fixtures/tokenizer_parity/deepseek-v3p2/short.json`
- `experimental/sgl-router/tests/fixtures/tokenizer_parity/deepseek-v3p2/special_token_heavy.json`
- `experimental/sgl-router/tests/fixtures/tokenizer_parity/gpt-oss-20b/long.json`
- `experimental/sgl-router/tests/fixtures/tokenizer_parity/gpt-oss-20b/multi_turn_with_tools.json`
- `experimental/sgl-router/tests/fixtures/tokenizer_parity/gpt-oss-20b/short.json`
- `experimental/sgl-router/tests/fixtures/tokenizer_parity/gpt-oss-20b/special_token_heavy.json`
- `experimental/sgl-router/tests/fixtures/tokenizer_parity/qwen3-30b/long.json`
- `experimental/sgl-router/tests/fixtures/tokenizer_parity/qwen3-30b/multi_turn_with_tools.json`
- `experimental/sgl-router/tests/fixtures/tokenizer_parity/qwen3-30b/short.json`
- `experimental/sgl-router/tests/fixtures/tokenizer_parity/qwen3-30b/special_token_heavy.json`
- `experimental/sgl-router/tests/proxy/chat_routing.rs`
- `experimental/sgl-router/tests/proxy/common/mock_worker.rs`
- `experimental/sgl-router/tests/proxy/common/mod.rs`
- `experimental/sgl-router/tests/proxy/common/streaming.rs`
- `experimental/sgl-router/tests/proxy/failover.rs`
- `experimental/sgl-router/tests/proxy/graceful_shutdown.rs`
- `experimental/sgl-router/tests/proxy/header_forwarding.rs`
- `experimental/sgl-router/tests/proxy/main.rs`
- `experimental/sgl-router/tests/proxy/pd_bootstrap_injection.rs`
- `experimental/sgl-router/tests/proxy/pd_pool_isolation.rs`
- `experimental/sgl-router/tests/proxy/sticky_routing.rs`
- `experimental/sgl-router/tests/proxy/timeout.rs`
- `experimental/sgl-router/tests/scripts/generate_kv_events_hash_parity.py`
- `experimental/sgl-router/tests/scripts/generate_parity_fixtures.py`
- `python/sglang/jit_kernel/tests/deepseek_v4/__init__.py`
- `python/sglang/jit_kernel/tests/deepseek_v4/common.py`
- `python/sglang/jit_kernel/tests/kv_canary/__init__.py`
- `python/sglang/jit_kernel/tests/kv_canary/_canary_helpers.py`
- `python/sglang/jit_kernel/tests/kv_canary/_constants.py`
- `python/sglang/jit_kernel/tests/kv_canary/_differential.py`
- `python/sglang/jit_kernel/tests/kv_canary/_fixtures.py`
- ... 40 more

### CI/Docker 후보

- `.devcontainer/Dockerfile`
- `.github/workflows/_docker-build-and-publish.yml`
- `.github/workflows/_docker-cleanup-nightly.yml`
- `.github/workflows/_pr-test-check-changes.yml`
- `.github/workflows/_pr-test-sgl-kernel-build.yml`
- `.github/workflows/_pr-test-stage.yml`
- `.github/workflows/amd-aiter-scout.yml`
- `.github/workflows/amd-ci-job-monitor.yml`
- `.github/workflows/auto-tune.yml`
- `.github/workflows/bot-bump-flashinfer-version.yml`
- `.github/workflows/bot-bump-kernel-version-to-sglang.yml`
- `.github/workflows/bot-bump-kernel-version.yml`
- `.github/workflows/bot-bump-sglang-version.yml`
- `.github/workflows/bot-cherry-pick.yml`
- `.github/workflows/cancel-pr-workflow-on-merge.yml`
- `.github/workflows/cancel-unfinished-pr-tests.yml`
- `.github/workflows/ci-auto-bisect.yml`
- `.github/workflows/ci-coverage-overview.yml`
- `.github/workflows/ci-failure-monitor.yml`
- `.github/workflows/close-inactive-issues.yml`
- `.github/workflows/diffusion-ci-gt-gen-npu.yml`
- `.github/workflows/diffusion-ci-gt-gen.yml`
- `.github/workflows/full-test-npu.yml`
- `.github/workflows/labeler.yml`
- `.github/workflows/lint.yml`
- `.github/workflows/list-active-pr-runs.yml`
- `.github/workflows/nightly-72-gpu-gb200.yml`
- `.github/workflows/nightly-experimental-sgl-router-docker.yml`
- `.github/workflows/nightly-link-check.yml`
- `.github/workflows/nightly-release-gateway.yml`
- `.github/workflows/nightly-test-amd-rocm720.yml`
- `.github/workflows/nightly-test-amd.yml`
- `.github/workflows/nightly-test-intel.yml`
- `.github/workflows/nightly-test-musa.yml`
- `.github/workflows/nightly-test-npu.yml`
- `.github/workflows/nightly-test-nvidia.yml`
- `.github/workflows/open-pr-copy-from-oss.yml`
- `.github/workflows/open-pr-copy-to-oss.yml`
- `.github/workflows/patch-docker-dev.yml`
- `.github/workflows/pr-benchmark-rust.yml`
- `.github/workflows/pr-gate.yml`
- `.github/workflows/pr-states.yml`
- `.github/workflows/pr-test-amd-rocm720.yml`
- `.github/workflows/pr-test-amd.yml`
- `.github/workflows/pr-test-arm64.yml`
- `.github/workflows/pr-test-extra.yml`
- `.github/workflows/pr-test-jit-kernel.yml`
- `.github/workflows/pr-test-multimodal-gen.yml`
- `.github/workflows/pr-test-musa.yml`
- `.github/workflows/pr-test-npu.yml`
- `.github/workflows/pr-test-rust.yml`
- `.github/workflows/pr-test-sgl-kernel.yml`
- `.github/workflows/pr-test-sgl-router.yml`
- `.github/workflows/pr-test-xeon.yml`
- `.github/workflows/pr-test-xpu.yml`
- `.github/workflows/pr-test.yml`
- `.github/workflows/release-branch-cut.yml`
- `.github/workflows/release-docker-amd-nightly.yml`
- `.github/workflows/release-docker-amd-rocm720-nightly.yml`
- `.github/workflows/release-docker-amd.yml`
- `.github/workflows/release-docker-dev.yml`
- `.github/workflows/release-docker-gateway.yml`
- `.github/workflows/release-docker-intel-xpu-nightly.yml`
- `.github/workflows/release-docker-npu-nightly.yml`
- `.github/workflows/release-docker-npu.yml`
- `.github/workflows/release-docker-runtime.yml`
- `.github/workflows/release-docker-xeon.yml`
- `.github/workflows/release-docker.yml`
- `.github/workflows/release-pypi-gateway.yml`
- `.github/workflows/release-pypi-nightly.yml`
- `.github/workflows/release-pypi-pr.yml`
- `.github/workflows/release-pypi.yml`
- `.github/workflows/release-tag.yml`
- `.github/workflows/release-whl-deepgemm.yml`
- `.github/workflows/release-whl-kernel.yml`
- `.github/workflows/rerun-test.yml`
- `.github/workflows/retag-docker.yml`
- `.github/workflows/runner-utilization.yml`
- `.github/workflows/slash-command-handler.yml`
- `.github/workflows/stress-test.yml`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .py | 4134 |
| .json | 558 |
| .rs | 348 |
| .md | 281 |
| .mdx | 237 |
| .cuh | 136 |
| .yml | 92 |
| .jsx | 81 |
| .yaml | 77 |
| .sh | 69 |
| .cu | 62 |
| .h | 61 |
| .png | 51 |
| .cpp | 42 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `docs/ 내부 책임 분리`
- `examples/ 내부 책임 분리`
- `test/ 내부 책임 분리`
- `scripts/ 내부 책임 분리`
- `python/ 내부 책임 분리`
- `.claude/skills/add-jit-kernel/SKILL.md 스펙/명령 의미`
- `.claude/skills/add-sgl-kernel/SKILL.md 스펙/명령 의미`
- `.claude/skills/ci-workflow-guide/SKILL.md 스펙/명령 의미`
- `.claude/skills/clean-startup-log/SKILL.md 스펙/명령 의미`
- `.claude/skills/cookbook-add-model/SKILL.md 스펙/명령 의미`
- `.devcontainer/Dockerfile 실행 스크립트와 패키지 경계`
- `3rdparty/amd/wheel/sglang/pyproject.toml 실행 스크립트와 패키지 경계`
- `docker/Dockerfile 실행 스크립트와 패키지 경계`
- `docs/requirements.txt 실행 스크립트와 패키지 경계`
- `examples/frontend_language/usage/triton/Dockerfile 실행 스크립트와 패키지 경계`

