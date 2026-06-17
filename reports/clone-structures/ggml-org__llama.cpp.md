# ggml-org/llama.cpp 구조 분석

생성일: 2026-06-17T22:41:11.818Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/ggml-org__llama.cpp |
| remote | https://github.com/ggml-org/llama.cpp |
| HEAD | ebc1077 (2026-06-12) server : fix reasoning budget WebUI precedence over model.ini (#24517) |
| branch | master |
| groups | adjacent-tech-50, previous-clone-inventory-107 |
| files | 2985 |
| dirs | 347 |
| stack | Node/TypeScript/JavaScript, Python |

## 구조 해석

- 핵심 구현은 `src/`, `lib/`, `core/` 계열 디렉터리에 집중되어 있다.
- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- 스펙/템플릿/명령/스킬 아티팩트가 있어 에이전트나 SDD 워크플로우가 저장소 구조의 일부다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- 테스트 파일이 충분히 노출되어 기능 검증과 회귀 검증 흐름을 추적할 수 있다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `llama.cpp`, `Recent API changes`, `Hot topics`, `Quick start`, `Use a local model file`, `Or download and run a model directly from Hugging Face`, `Launch OpenAI-compatible API server`, `Description`, `Supported backends`, `Obtaining and quantizing models`, `[`llama-cli`](tools/cli)`, `[`llama-server`](tools/server)`, `[`llama-perplexity`](tools/perplexity)`, `[`llama-bench`](tools/llama-bench)`, `[`llama-simple`](examples/simple)`, `Contributing`, `Other documentation`, `XCFramework`

> llama.cpp Manifesto / ggml / ops LLM inference in C/C++ Recent API changes Changelog for libllama API Changelog for llama server REST API Hot topics Hugging Face cache migration models downloaded with hf are now stored in the standard Hugging Face cache directory, enabling sharing with other HF tools. guide using the new WebUI of llama.cpp guide running gpt oss with llama.cpp [[FEEDBACK] Better packaging for llama.cpp to support downstream consumers 🤗](https //github.com/ggml org/llama.cpp/discussions/15313) Support for the gpt oss model with native MXFP4 format has been added PR Collaboration with NVIDIA Comment Multimodal support arrived in llama server 12898 documentation VS Code extension for FIM completions https //github.com/ggml org/llama.vscode Vim/Neovim plugin for FIM completions https //github.com/ggml org/llama.vim Hugging Face Inference Endpoints now support GGUF out of the

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .clang-format | file |
| .clang-tidy | file |
| .devops | dir |
| .dockerignore | file |
| .ecrc | file |
| .editorconfig | file |
| .flake8 | file |
| .gemini | dir |
| .github | dir |
| .gitignore | file |
| .gitmodules | file |
| .pi | dir |
| .pre-commit-config.yaml | file |
| AGENTS.md | file |
| app | dir |
| AUTHORS | file |
| benches | dir |
| build-xcframework.sh | file |
| ci | dir |
| CLAUDE.md | file |
| cmake | dir |
| CMakeLists.txt | file |
| CMakePresets.json | file |
| CODEOWNERS | file |
| common | dir |
| CONTRIBUTING.md | file |
| conversion | dir |
| convert_hf_to_gguf_update.py | file |
| convert_hf_to_gguf.py | file |
| convert_llama_ggml_to_gguf.py | file |
| convert_lora_to_gguf.py | file |
| docs | dir |
| examples | dir |
| flake.nix | file |
| ggml | dir |
| gguf-py | dir |
| grammars | dir |
| include | dir |
| LICENSE | file |
| licenses | dir |
| Makefile | file |
| media | dir |
| models | dir |
| mypy.ini | file |
| pocs | dir |
| pyproject.toml | file |
| pyrightconfig.json | file |
| README.md | file |
| requirements | dir |
| requirements.txt | file |
| scripts | dir |
| SECURITY.md | file |
| src | dir |
| tests | dir |
| tools | dir |
| ty.toml | file |
| vendor | dir |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| ggml/ | 1097 |
| tools/ | 793 |
| examples/ | 218 |
| src/ | 192 |
| models/ | 108 |
| conversion/ | 81 |
| tests/ | 78 |
| common/ | 71 |
| .github/ | 67 |
| scripts/ | 65 |
| docs/ | 60 |
| (root) | 31 |
| gguf-py/ | 26 |
| .devops/ | 24 |
| cmake/ | 12 |
| requirements/ | 12 |
| media/ | 11 |
| grammars/ | 9 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| src/ | 192 | preferred |
| app/ | 2 | preferred |
| docs/ | 60 | preferred |
| examples/ | 218 | preferred |
| tests/ | 78 | preferred |
| tools/ | 793 | preferred |
| scripts/ | 65 | preferred |
| ggml/ | 1097 | large |
| ggml/src/ | 1070 | large |
| tools/ui/ | 599 | large |
| tools/ui/src/ | 509 | large |
| ggml/src/ggml-cuda/ | 261 | large |
| ggml/src/ggml-vulkan/ | 191 | large |
| ggml/src/ggml-opencl/ | 145 | large |
| ggml/src/ggml-sycl/ | 137 | large |
| src/models/ | 134 | large |
| models/ | 108 | large |
| conversion/ | 81 | large |
| common/ | 71 | large |
| ggml/src/ggml-hexagon/ | 69 | large |
| tools/mtmd/ | 69 | large |
| .github/ | 67 | large |
| ggml/src/ggml-cpu/ | 67 | large |
| tools/server/ | 61 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `examples/gguf-hash/deps/rotate-bits/package.json`
- `examples/gguf-hash/deps/sha1/package.json`
- `examples/gguf-hash/deps/sha256/package.json`
- `examples/model-conversion/requirements.txt`
- `gguf-py/pyproject.toml`
- `pyproject.toml`
- `requirements.txt`
- `scripts/jinja/requirements.txt`
- `scripts/snapdragon/qdc/requirements.txt`
- `tools/mtmd/requirements.txt`
- `tools/server/bench/requirements.txt`
- `tools/server/bench/speed-bench/requirements.txt`
- `tools/server/tests/requirements.txt`
- `tools/ui/package.json`
- `tools/ui/tsconfig.json`
- `tools/ui/vite.config.ts`

### package.json

| 경로 | 이름 | scripts | deps |
| --- | --- | --- | --- |
| examples/gguf-hash/deps/rotate-bits/package.json | rotate-bits |  |  |
| examples/gguf-hash/deps/sha1/package.json | sha1 |  |  |
| examples/gguf-hash/deps/sha256/package.json | sha256 |  | jb55/rotate-bits.h |
| tools/ui/package.json | llama-ui | build, build-pwa-assets, dev, preview, prepare, check, check:watch, reset, format, lint, test, test:e2e, test:e2e:pwa, test:client, test:unit, test:unit:pwa |  |

### pyproject.toml

| 경로 | 이름 | poetry | uv | ruff | pytest |
| --- | --- | --- | --- | --- | --- |
| gguf-py/pyproject.toml | gguf | true | false | false | false |
| pyproject.toml | llama-cpp-scripts | true | true | false | false |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `CONTRIBUTING.md`
- `README.md`
- `ci/README.md`
- `common/jinja/README.md`
- `docs/android.md`
- `docs/android/imported-into-android-studio.jpg`
- `docs/autoparser.md`
- `docs/backend/BLIS.md`
- `docs/backend/CANN.md`
- `docs/backend/CUDA-FEDORA.md`
- `docs/backend/OPENCL.md`
- `docs/backend/OPENVINO.md`
- `docs/backend/SYCL.md`
- `docs/backend/VirtGPU.md`
- `docs/backend/VirtGPU/configuration.md`
- `docs/backend/VirtGPU/development.md`
- `docs/backend/ZenDNN.md`
- `docs/backend/snapdragon/CMakeUserPresets.json`
- `docs/backend/snapdragon/README.md`
- `docs/backend/snapdragon/developer.md`
- `docs/backend/snapdragon/linux.md`
- `docs/backend/snapdragon/windows.md`
- `docs/backend/zDNN.md`
- `docs/build-riscv64-spacemit.md`
- `docs/build-s390x.md`
- `docs/build.md`
- `docs/development/HOWTO-add-model.md`
- `docs/development/debugging-tests.md`
- `docs/development/llama-star/idea-arch.key`
- `docs/development/llama-star/idea-arch.pdf`
- `docs/development/parsing.md`
- `docs/development/token_generation_performance_tips.md`
- `docs/docker.md`
- `docs/function-calling.md`
- `docs/install.md`
- `docs/llguidance.md`
- `docs/multi-gpu.md`
- `docs/multimodal.md`
- `docs/multimodal/MobileVLM.md`
- `docs/multimodal/gemma3.md`
- `docs/multimodal/glmedge.md`
- `docs/multimodal/granitevision.md`
- `docs/multimodal/llava.md`
- `docs/multimodal/minicpmo2.6.md`
- `docs/multimodal/minicpmo4.0.md`
- `docs/multimodal/minicpmv2.5.md`
- `docs/multimodal/minicpmv2.6.md`
- `docs/multimodal/minicpmv4.0.md`
- `docs/multimodal/minicpmv4.5.md`
- `docs/multimodal/minicpmv4.6.md`
- ... 30 more

### 에이전트 지침 후보

- `AGENTS.md`
- `CLAUDE.md`
- `tools/ui/docs/flows/mcp-flow.md`
- `tools/ui/src/lib/components/app/mcp/McpActiveServersAvatars.svelte`
- `tools/ui/src/lib/components/app/mcp/McpCapabilitiesBadges.svelte`
- `tools/ui/src/lib/components/app/mcp/McpConnectionLogs.svelte`
- `tools/ui/src/lib/components/app/mcp/McpLogo.svelte`
- `tools/ui/src/lib/components/app/mcp/McpResourcePreview.svelte`
- `tools/ui/src/lib/components/app/mcp/McpResourceTemplateForm.svelte`
- `tools/ui/src/lib/components/app/mcp/McpResourcesBrowser/McpResourcesBrowser.svelte`
- `tools/ui/src/lib/components/app/mcp/McpResourcesBrowser/McpResourcesBrowserEmptyState.svelte`
- `tools/ui/src/lib/components/app/mcp/McpResourcesBrowser/McpResourcesBrowserHeader.svelte`
- `tools/ui/src/lib/components/app/mcp/McpResourcesBrowser/McpResourcesBrowserServerItem.svelte`
- `tools/ui/src/lib/components/app/mcp/McpResourcesBrowser/mcp-resources-browser.ts`
- `tools/ui/src/lib/components/app/mcp/McpServerCard/McpServerCard.svelte`
- `tools/ui/src/lib/components/app/mcp/McpServerCard/McpServerCardActions.svelte`
- `tools/ui/src/lib/components/app/mcp/McpServerCard/McpServerCardDeleteDialog.svelte`
- `tools/ui/src/lib/components/app/mcp/McpServerCard/McpServerCardEditForm.svelte`
- `tools/ui/src/lib/components/app/mcp/McpServerCard/McpServerCardHeader.svelte`
- `tools/ui/src/lib/components/app/mcp/McpServerCard/McpServerCardToolsList.svelte`
- `tools/ui/src/lib/components/app/mcp/McpServerCardSkeleton.svelte`
- `tools/ui/src/lib/components/app/mcp/McpServerForm.svelte`
- `tools/ui/src/lib/components/app/mcp/McpServerIdentity.svelte`
- `tools/ui/src/lib/components/app/mcp/McpServerInfo.svelte`
- `tools/ui/src/lib/components/app/mcp/index.ts`
- `tools/ui/src/lib/constants/mcp-form.ts`
- `tools/ui/src/lib/constants/mcp-resource.ts`
- `tools/ui/src/lib/constants/mcp.ts`
- `tools/ui/src/lib/enums/mcp.enums.ts`
- `tools/ui/src/lib/services/mcp.service.ts`
- `tools/ui/src/lib/stores/mcp-resources.svelte.ts`
- `tools/ui/src/lib/stores/mcp.svelte.ts`
- `tools/ui/src/lib/types/mcp.d.ts`
- `tools/ui/src/lib/utils/mcp.ts`
- `tools/ui/src/routes/mcp-servers/+page.svelte`
- `tools/ui/tests/unit/mcp-service.test.ts`

### 스펙/템플릿/명령/스킬 후보

- `models/templates/Apertus-8B-Instruct.jinja`
- `models/templates/Apriel-1.6-15b-Thinker-fixed.jinja`
- `models/templates/Bielik-11B-v3.0-Instruct.jinja`
- `models/templates/ByteDance-Seed-OSS.jinja`
- `models/templates/CohereForAI-c4ai-command-r-plus-tool_use.jinja`
- `models/templates/CohereForAI-c4ai-command-r7b-12-2024-tool_use.jinja`
- `models/templates/GLM-4.6.jinja`
- `models/templates/GLM-4.7-Flash.jinja`
- `models/templates/GigaChat3-10B-A1.8B.jinja`
- `models/templates/GigaChat3.1-10B-A1.8B.jinja`
- `models/templates/HuggingFaceTB-SmolLM3-3B.jinja`
- `models/templates/Kimi-K2-Instruct.jinja`
- `models/templates/Kimi-K2-Thinking.jinja`
- `models/templates/LFM2-8B-A1B.jinja`
- `models/templates/LFM2.5-8B-A1B.jinja`
- `models/templates/LFM2.5-Instruct.jinja`
- `models/templates/MiMo-VL.jinja`
- `models/templates/MiniMax-M2.jinja`
- `models/templates/Mistral-Small-3.2-24B-Instruct-2506.jinja`
- `models/templates/NVIDIA-Nemotron-3-Nano-30B-A3B-BF16.jinja`
- `models/templates/NVIDIA-Nemotron-Nano-v2.jinja`
- `models/templates/NousResearch-Hermes-2-Pro-Llama-3-8B-tool_use.jinja`
- `models/templates/NousResearch-Hermes-3-Llama-3.1-8B-tool_use.jinja`
- `models/templates/Qwen-QwQ-32B.jinja`
- `models/templates/Qwen-Qwen2.5-7B-Instruct.jinja`
- `models/templates/Qwen-Qwen3-0.6B.jinja`
- `models/templates/Qwen3-Coder.jinja`
- `models/templates/Qwen3.5-4B.jinja`
- `models/templates/README.md`
- `models/templates/Reka-Edge.jinja`
- `models/templates/StepFun3.5-Flash.jinja`
- `models/templates/deepseek-ai-DeepSeek-R1-Distill-Llama-8B.jinja`
- `models/templates/deepseek-ai-DeepSeek-R1-Distill-Qwen-32B.jinja`
- `models/templates/deepseek-ai-DeepSeek-V3.1.jinja`
- `models/templates/deepseek-ai-DeepSeek-V3.2.jinja`
- `models/templates/fireworks-ai-llama-3-firefunction-v2.jinja`
- `models/templates/google-gemma-2-2b-it.jinja`
- `models/templates/google-gemma-4-31B-it-interleaved.jinja`
- `models/templates/google-gemma-4-31B-it.jinja`
- `models/templates/ibm-granite-granite-3.3-2B-Instruct.jinja`
- `models/templates/ibm-granite-granite-4.0.jinja`
- `models/templates/ibm-granite-granite-4.1.jinja`
- `models/templates/llama-cpp-deepseek-r1.jinja`
- `models/templates/llama-cpp-rwkv-world.jinja`
- `models/templates/meetkai-functionary-medium-v3.1.jinja`
- `models/templates/meetkai-functionary-medium-v3.2.jinja`
- `models/templates/meta-llama-Llama-3.1-8B-Instruct.jinja`
- `models/templates/meta-llama-Llama-3.2-3B-Instruct.jinja`
- `models/templates/meta-llama-Llama-3.3-70B-Instruct.jinja`
- `models/templates/microsoft-Phi-3.5-mini-instruct.jinja`
- `models/templates/mistralai-Ministral-3-14B-Reasoning-2512.jinja`
- `models/templates/mistralai-Mistral-Nemo-Instruct-2407.jinja`
- `models/templates/moonshotai-Kimi-K2.jinja`
- `models/templates/openai-gpt-oss-120b.jinja`
- `models/templates/stepfun-ai-Step-3.5-Flash.jinja`
- `models/templates/unsloth-Apriel-1.5.jinja`
- `models/templates/unsloth-mistral-Devstral-Small-2507.jinja`
- `models/templates/upstage-Solar-Open-100B.jinja`

## 테스트 / CI / 배포 표면

### 테스트 후보

- `examples/llama.android/lib/src/test/java/android/llama/cpp/ExampleUnitTest.kt`
- `gguf-py/tests/__init__.py`
- `gguf-py/tests/test_metadata.py`
- `gguf-py/tests/test_quants.py`
- `scripts/snapdragon/qdc/tests/conftest.py`
- `scripts/snapdragon/qdc/tests/linux/run_linux.sh`
- `scripts/snapdragon/qdc/tests/run_backend_ops_posix.py`
- `scripts/snapdragon/qdc/tests/run_bench_tests_posix.py`
- `scripts/snapdragon/qdc/tests/utils.py`
- `tests/.gitignore`
- `tests/CMakeLists.txt`
- `tests/export-graph-ops.cpp`
- `tests/get-model.cpp`
- `tests/get-model.h`
- `tests/gguf-model-data.cpp`
- `tests/gguf-model-data.h`
- `tests/peg-parser/simple-tokenize.cpp`
- `tests/peg-parser/simple-tokenize.h`
- `tests/peg-parser/test-basic.cpp`
- `tests/peg-parser/test-gbnf-generation.cpp`
- `tests/peg-parser/test-json-parser.cpp`
- `tests/peg-parser/test-json-serialization.cpp`
- `tests/peg-parser/test-python-dict-parser.cpp`
- `tests/peg-parser/test-unicode.cpp`
- `tests/peg-parser/tests.h`
- `tests/snapshots/deepseek-v3.1.schema`
- `tests/snapshots/gemma-3-4b-it.schema`
- `tests/snapshots/glm-4.6v.schema`
- `tests/snapshots/gpt-oss-120b.schema`
- `tests/snapshots/meta-llama-3.1-70b-instruct.schema`
- `tests/snapshots/nemotron-nano-3-30b-a3b.schema`
- `tests/snapshots/qwen3-0.6b.schema`
- `tests/snapshots/qwen3-14b.schema`
- `tests/snapshots/qwen3-coder-next.schema`
- `tests/snapshots/qwen3.5-27b.schema`
- `tests/snapshots/qwen3.5-397b-a17b.schema`
- `tests/snapshots/step-3.5-flash.schema`
- `tests/test-alloc.cpp`
- `tests/test-arg-parser.cpp`
- `tests/test-autorelease.cpp`
- `tests/test-backend-ops.cpp`
- `tests/test-backend-sampler.cpp`
- `tests/test-barrier.cpp`
- `tests/test-c.c`
- `tests/test-chat-auto-parser.cpp`
- `tests/test-chat-peg-parser.cpp`
- `tests/test-chat-template.cpp`
- `tests/test-chat.cpp`
- `tests/test-col2im-1d.cpp`
- `tests/test-double-float.cpp`
- `tests/test-gbnf-validator.cpp`
- `tests/test-gguf-model-data.cpp`
- `tests/test-gguf.cpp`
- `tests/test-grammar-integration.cpp`
- `tests/test-grammar-llguidance.cpp`
- `tests/test-grammar-parser.cpp`
- `tests/test-jinja.cpp`
- `tests/test-json-partial.cpp`
- `tests/test-json-schema-to-grammar.cpp`
- `tests/test-llama-archs.cpp`
- `tests/test-llama-grammar.cpp`
- `tests/test-log.cpp`
- `tests/test-lora-conversion-inference.sh`
- `tests/test-model-load-cancel.cpp`
- `tests/test-mtmd-c-api.c`
- `tests/test-opt.cpp`
- `tests/test-peg-parser.cpp`
- `tests/test-quant-type-selection.cpp`
- `tests/test-quantize-fns.cpp`
- `tests/test-quantize-perf.cpp`
- `tests/test-quantize-stats.cpp`
- `tests/test-reasoning-budget.cpp`
- `tests/test-recurrent-state-rollback.cpp`
- `tests/test-regex-partial.cpp`
- `tests/test-rope.cpp`
- `tests/test-sampling.cpp`
- `tests/test-save-load-state.cpp`
- `tests/test-state-restore-fragmented.cpp`
- `tests/test-thread-safety.cpp`
- `tests/test-tokenizer-0.cpp`
- ... 40 more

### CI/Docker 후보

- `.github/workflows/ai-issues.yml`
- `.github/workflows/bench.yml.disabled`
- `.github/workflows/build-3rd-party.yml`
- `.github/workflows/build-and-test-snapdragon.yml`
- `.github/workflows/build-android.yml`
- `.github/workflows/build-apple.yml`
- `.github/workflows/build-cache.yml`
- `.github/workflows/build-cann.yml`
- `.github/workflows/build-cmake-pkg.yml`
- `.github/workflows/build-cpu.yml`
- `.github/workflows/build-cross.yml`
- `.github/workflows/build-cuda-ubuntu.yml`
- `.github/workflows/build-cuda-windows.yml`
- `.github/workflows/build-ibm.yml`
- `.github/workflows/build-msys.yml`
- `.github/workflows/build-opencl.yml`
- `.github/workflows/build-openvino.yml`
- `.github/workflows/build-riscv.yml`
- `.github/workflows/build-rpc.yml`
- `.github/workflows/build-sanitize.yml`
- `.github/workflows/build-self-hosted.yml`
- `.github/workflows/build-sycl.yml`
- `.github/workflows/build-virtgpu.yml`
- `.github/workflows/build-vulkan.yml`
- `.github/workflows/build-webgpu.yml`
- `.github/workflows/check-vendor.yml`
- `.github/workflows/close-issue.yml`
- `.github/workflows/code-style.yml`
- `.github/workflows/copilot-setup-steps.yml`
- `.github/workflows/docker.yml`
- `.github/workflows/editorconfig.yml`
- `.github/workflows/gguf-publish.yml`
- `.github/workflows/hip-quality-check.yml`
- `.github/workflows/labeler.yml`
- `.github/workflows/pre-tokenizer-hashes.yml`
- `.github/workflows/python-check-requirements.yml`
- `.github/workflows/python-lint.yml`
- `.github/workflows/python-type-check.yml`
- `.github/workflows/release.yml`
- `.github/workflows/server-sanitize.yml`
- `.github/workflows/server-self-hosted.yml`
- `.github/workflows/server.yml`
- `.github/workflows/ui-build-self-hosted.yml`
- `.github/workflows/ui-build.yml`
- `.github/workflows/ui-publish.yml`
- `.github/workflows/ui-self-hosted.yml`
- `.github/workflows/ui.yml`
- `.github/workflows/update-ops-docs.yml`
- `.github/workflows/winget.yml`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .cpp | 545 |
| .svelte | 281 |
| .ts | 273 |
| .h | 232 |
| .py | 196 |
| .cu | 184 |
| .comp | 160 |
| .cl | 142 |
| .md | 120 |
| .txt | 99 |
| .cuh | 74 |
| .sh | 66 |
| .yml | 66 |
| .hpp | 61 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `src/ 내부 책임 분리`
- `app/ 내부 책임 분리`
- `docs/ 내부 책임 분리`
- `examples/ 내부 책임 분리`
- `tests/ 내부 책임 분리`
- `models/templates/Apertus-8B-Instruct.jinja 스펙/명령 의미`
- `models/templates/Apriel-1.6-15b-Thinker-fixed.jinja 스펙/명령 의미`
- `models/templates/Bielik-11B-v3.0-Instruct.jinja 스펙/명령 의미`
- `models/templates/ByteDance-Seed-OSS.jinja 스펙/명령 의미`
- `models/templates/CohereForAI-c4ai-command-r-plus-tool_use.jinja 스펙/명령 의미`
- `examples/gguf-hash/deps/rotate-bits/package.json 실행 스크립트와 패키지 경계`
- `examples/gguf-hash/deps/sha1/package.json 실행 스크립트와 패키지 경계`
- `examples/gguf-hash/deps/sha256/package.json 실행 스크립트와 패키지 경계`
- `examples/model-conversion/requirements.txt 실행 스크립트와 패키지 경계`
- `gguf-py/pyproject.toml 실행 스크립트와 패키지 경계`

