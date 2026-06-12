# Source Inventory

Generated at: 2026-06-12T15:55:41.066Z

| # | Repository | Commit | Lang | Files | License | Archived | Source dirs |
| -: | --- | --- | --- | ---: | --- | --- | --- |
| 1 | vllm-project/vllm | a30addc | Python | 5488 | apache-2.0 | no | docs |
| 2 | ggml-org/llama.cpp | ebc1077 | C++ | 2985 | mit | no | src, docs |
| 3 | ollama/ollama | 12e0437 | Go | 1233 | mit | no | server, docs |
| 4 | sgl-project/sglang | 9f6b233 | Python | 6477 | apache-2.0 | no | python, docs |
| 5 | huggingface/text-generation-inference | b4adbf2 | Python | 878 | apache-2.0 | yes | server, docs |
| 6 | huggingface/transformers | f208766 | Python | 6097 | apache-2.0 | no | src, docs |
| 7 | huggingface/accelerate | fb77442 | Python | 356 | apache-2.0 | no | src, docs |
| 8 | mlc-ai/mlc-llm | 2008fe8 | Python | 693 | apache-2.0 | no | python, docs |
| 9 | EricLBuehler/mistral.rs | c22c2e2 | Rust | 1325 | mit | no | docs |
| 10 | mudler/LocalAI | 4ce0f61 | Go | 2606 | mit | no | backend, core, docs |
| 11 | oobabooga/text-generation-webui | ed888c7 | Python | 358 | agpl-3.0 | no | docs |
| 12 | lm-sys/FastChat | 587d5cf | Python | 219 | apache-2.0 | no | docs |
| 13 | NVIDIA/TensorRT-LLM | db7161b | Python | 10452 | other | no | docs |
| 14 | microsoft/BitNet | 01eb415 | Python | 71 | mit | no | src, docs |
| 15 | xorbitsai/inference | 1fbae04 | Python | 1884 | apache-2.0 | no | frontend |
| 16 | run-llama/llama_index | d8d7ffb | Python | 10012 | mit | no | docs |
| 17 | langchain-ai/langchain | 0392b6b | Python | 2937 | mit | no |  |
| 18 | deepset-ai/haystack | acbf725 | MDX | 8383 | apache-2.0 | no |  |
| 19 | microsoft/graphrag | 6d02c23 | Python | 893 | mit | no | packages, docs |
| 20 | HKUDS/LightRAG | ad7161b | Python | 679 | mit | no | docs |
| 21 | mem0ai/mem0 | 06d33f6 | Python | 1671 | apache-2.0 | no | server, cli, docs |
| 22 | getzep/zep | faf2ace | Python | 536 | apache-2.0 | no |  |
| 23 | stanford-oval/storm | fb951af | Python | 74 | mit | no | frontend |
| 24 | weaviate/Verba | 70b6cfb | Python | 377 | bsd-3-clause | yes | frontend |
| 25 | khoj-ai/khoj | 9258f57 | Python | 701 | agpl-3.0 | no | src |
| 26 | QuivrHQ/quivr | 947a785 | Python | 231 | other | no | core, docs |
| 27 | infiniflow/ragflow | d32e05d | Python | 3628 | apache-2.0 | no | agent, docs |
| 28 | qdrant/qdrant | 44ad62f | Rust | 1874 | apache-2.0 | no | src, docs |
| 29 | milvus-io/milvus | 14c4cf6 | Go | 5254 | apache-2.0 | no | client, docs |
| 30 | chroma-core/chroma | b8bf764 | Rust | 2029 | apache-2.0 | no | docs |
| 31 | weaviate/weaviate | 24163af | Go | 4747 | bsd-3-clause | no | client, docs |
| 32 | lancedb/lancedb | dfbe5be | HTML | 586 | apache-2.0 | no | python, docs |
| 33 | pgvector/pgvector | 1f68c73 | C | 150 | other | no | src |
| 34 | timescale/pgvectorscale | 57c88b7 | Rust | 96 | postgresql | no |  |
| 35 | facebookresearch/faiss | 20afed0 | C++ | 1058 | mit | no |  |
| 36 | typesense/typesense | c5e2e5b | C++ | 484 | gpl-3.0 | no | src |
| 37 | explodinggradients/ragas | 298b682 | Python | 694 | apache-2.0 | no | src, docs |
| 38 | promptfoo/promptfoo | 30dc14b | TypeScript | 5400 | mit | no | src, docs |
| 39 | confident-ai/deepeval | c399fb4 | Python | 2022 | apache-2.0 | no | docs |
| 40 | truera/trulens | 3fb807e | Python | 1234 | mit | no | src, docs |
| 41 | Arize-ai/phoenix | 3d33799 | Python | 6021 | other | no | src, packages, docs |
| 42 | langfuse/langfuse | de483b3 | TypeScript | 3660 | other | no | packages |
| 43 | agenta-ai/agenta | a2e9150 | TypeScript | 9270 | other | no | docs |
| 44 | BerriAI/litellm | 729b005 | Python | 6958 | other | no | backend, docs |
| 45 | stanfordnlp/dspy | 85027b1 | Python | 540 | mit | no | docs |
| 46 | pydantic/pydantic-ai | 3c98a10 | Python | 2095 | mit | no | docs |
| 47 | guardrails-ai/guardrails | 6fa9524 | Python | 552 | apache-2.0 | no | docs |
| 48 | humanlayer/humanlayer | bdea199 | TypeScript | 794 | other | no | packages, apps, docs |
| 49 | microsoft/promptflow | 3928a72 | Python | 4036 | mit | no | src, docs |
| 50 | openai/evals | 8eac7a7 | Python | 1728 | other | no | docs |

## Per-repository Notes

### 1. vllm-project/vllm

- Source: `sources/vllm-project__vllm`
- GitHub: A high-throughput and memory-efficient inference and serving engine for LLMs
- Root entries: `.buildkite/`, `.clang-format`, `.coveragerc`, `.dockerignore`, `.gemini/`, `.git-blame-ignore-revs`, `.github/`, `.gitignore`, `.markdownlint.yaml`, `.pre-commit-config.yaml`, `.readthedocs.yaml`, `.shellcheckrc`, `.yapfignore`, `AGENTS.md`, `CLAUDE.md`, `CMakeLists.txt`, `CODE_OF_CONDUCT.md`, `CONTRIBUTING.md`, `DCO`, `LICENSE`, `MANIFEST.in`, `README.md`, `RELEASE.md`, `SECURITY.md`
- Manifests: `benchmarks/kernels/requirements.txt`, `benchmarks/multi_turn/requirements.txt`, `docker/Dockerfile`, `examples/features/structured_outputs/pyproject.toml`, `pyproject.toml`, `rust/Cargo.toml`, `rust/src/chat/Cargo.toml`, `rust/src/cmd/Cargo.toml`, `rust/src/engine-core-client/Cargo.toml`, `rust/src/llm/Cargo.toml`, `rust/src/managed-engine/Cargo.toml`, `rust/src/metrics/Cargo.toml`, `rust/src/mock-engine/Cargo.toml`, `rust/src/reasoning-parser/Cargo.toml`, `rust/src/server/Cargo.toml`, `rust/src/text/Cargo.toml`, `rust/src/tokenizer/Cargo.toml`, `rust/src/tool-parser/Cargo.toml`, `rust/src/tool-parser/python/Cargo.toml`
- Top extensions: `.py` 3422, `.json` 596, `.md` 281, `.rs` 220, `.yaml` 210, `.sh` 119, `.cu` 92, `.jinja` 91, `.png` 87, `.cuh` 77, `.txt` 61, `.hpp` 41
- CLI hints: examples/features/structured_outputs/pyproject.toml: {"structured-outputs":"structured_outputs:main"}; pyproject.toml: {"vllm":"vllm.entrypoints.cli.main:main"}

### 2. ggml-org/llama.cpp

- Source: `sources/ggml-org__llama.cpp`
- GitHub: LLM inference in C/C++
- Root entries: `.clang-format`, `.clang-tidy`, `.devops/`, `.dockerignore`, `.ecrc`, `.editorconfig`, `.flake8`, `.gemini/`, `.github/`, `.gitignore`, `.gitmodules`, `.pi/`, `.pre-commit-config.yaml`, `AGENTS.md`, `AUTHORS`, `CLAUDE.md`, `CMakeLists.txt`, `CMakePresets.json`, `CODEOWNERS`, `CONTRIBUTING.md`, `LICENSE`, `Makefile`, `README.md`, `SECURITY.md`
- Manifests: `examples/gguf-hash/deps/rotate-bits/package.json`, `examples/gguf-hash/deps/sha1/package.json`, `examples/gguf-hash/deps/sha256/package.json`, `examples/model-conversion/requirements.txt`, `gguf-py/pyproject.toml`, `pyproject.toml`, `requirements.txt`, `scripts/jinja/requirements.txt`, `scripts/snapdragon/qdc/requirements.txt`, `tools/mtmd/requirements.txt`, `tools/server/bench/requirements.txt`, `tools/server/bench/speed-bench/requirements.txt`, `tools/server/tests/requirements.txt`, `tools/ui/package.json`, `tools/ui/tsconfig.json`, `tools/ui/vite.config.ts`
- Top extensions: `.cpp` 545, `.svelte` 281, `.ts` 273, `.h` 232, `.py` 196, `.cu` 184, `.comp` 160, `.cl` 142, `.md` 120, `.txt` 99, `.cuh` 74, `.sh` 66
- CLI hints: gguf-py/pyproject.toml: {"gguf-convert-endian":"gguf.scripts.gguf_convert_endian:main","gguf-dump":"gguf.scripts.gguf_dump:main","gguf-set-metadata":"gguf.scripts.gguf_set_metadata:main","gguf-new-metadata":"gguf.scripts.gguf_new_metadata:main","gguf-editor-gui":"gguf.scripts.gguf_editor_gui:main"}; pyproject.toml: {"llama-convert-hf-to-gguf":"convert_hf_to_gguf:main","llama-convert-lora-to-gguf":"convert_lora_to_gguf:main","llama-convert-llama-ggml-to-gguf":"convert_llama_ggml_to_gguf:main","llama-ggml-vk-generate-shaders":"ggml_vk_generate_shaders:main"}

### 3. ollama/ollama

- Source: `sources/ollama__ollama`
- GitHub: Get up and running with Kimi-K2.6, GLM-5.1, MiniMax, DeepSeek, gpt-oss, Qwen, Gemma and other models.
- Root entries: `.dockerignore`, `.gitattributes`, `.github/`, `.gitignore`, `.golangci.yaml`, `AGENTS.md`, `CLAUDE.md`, `CMakeLists.txt`, `CMakePresets.json`, `CONTRIBUTING.md`, `Dockerfile`, `LICENSE`, `LLAMA_CPP_VERSION`, `MLX_C_VERSION`, `MLX_VERSION`, `README.md`, `SECURITY.md`, `anthropic/`, `api/`, `app/`, `auth/`, `cmake/`, `cmd/`, `convert/`
- Manifests: `Dockerfile`, `app/ui/app/package.json`, `app/ui/app/tsconfig.json`, `app/ui/app/vite.config.ts`, `go.mod`
- Top extensions: `.go` 730, `.png` 62, `.mdx` 55, `.json` 45, `.h` 44, `.tsx` 39, `.ts` 33, `.md` 26, `.gotmpl` 22, `system-user-assistant-user` 20, `user` 20, `user-assistant-user` 20
- CLI hints: manual inspection required

### 4. sgl-project/sglang

- Source: `sources/sgl-project__sglang`
- GitHub: SGLang is a high-performance serving framework for large language models and multimodal models.
- Root entries: `.claude/`, `.codespellrc`, `.coveragerc`, `.devcontainer/`, `.dockerignore`, `.github/`, `.gitignore`, `.isort.cfg`, `.pre-commit-config.yaml`, `3rdparty/`, `LICENSE`, `README.md`, `assets/`, `benchmark/`, `docker/`, `docs/`, `docs_new/`, `examples/`, `experimental/`, `proto/`, `python/`, `rust/`, `scripts/`, `sgl-kernel/`
- Manifests: `.devcontainer/Dockerfile`, `3rdparty/amd/wheel/sglang/pyproject.toml`, `docker/Dockerfile`, `docs/requirements.txt`, `examples/frontend_language/usage/triton/Dockerfile`, `experimental/sgl-router/Cargo.toml`, `experimental/sgl-router/tests/e2e/k8s_integration/requirements.txt`, `experimental/sgl-router/tests/e2e/pyproject.toml`, `experimental/sgl-router/tests/e2e/requirements.txt`, `python/pyproject.toml`, `rust/sglang-grpc/Cargo.toml`, `sgl-kernel/Dockerfile`, `sgl-kernel/pyproject.toml`, `sgl-model-gateway/Cargo.toml`, `sgl-model-gateway/bindings/golang/Cargo.toml`, `sgl-model-gateway/bindings/golang/examples/oai_server/go.mod`, `sgl-model-gateway/bindings/golang/go.mod`, `sgl-model-gateway/bindings/python/Cargo.toml`, `sgl-model-gateway/bindings/python/pyproject.toml`, `sgl-model-gateway/e2e_test/pyproject.toml`, `sgl-model-gateway/examples/wasm/wasm-guest-auth/Cargo.toml`, `sgl-model-gateway/examples/wasm/wasm-guest-logging/Cargo.toml`, `sgl-model-gateway/examples/wasm/wasm-guest-ratelimit/Cargo.toml`
- Top extensions: `.py` 4134, `.json` 558, `.rs` 348, `.md` 281, `.mdx` 237, `.cuh` 136, `.yml` 92, `.jsx` 81, `.yaml` 77, `.sh` 69, `.cu` 62, `.h` 61
- CLI hints: 3rdparty/amd/wheel/sglang/pyproject.toml: {"sglang":"sglang.cli.main:main"}; python/pyproject.toml: {"sglang":"sglang.cli.main:main","killall_sglang":"sglang.cli.killall:main"}; sgl-model-gateway/bindings/python/pyproject.toml: {"smg":"sglang_router.cli:main","amg":"sglang_router.cli:main","sglang-router":"sglang_router.cli:main"}

### 5. huggingface/text-generation-inference

- Source: `sources/huggingface__text-generation-inference`
- GitHub: Large Language Model Text Generation Inference
- Root entries: `.dockerignore`, `.github/`, `.gitignore`, `.pre-commit-config.yaml`, `.redocly.lint-ignore.yaml`, `CODE_OF_CONDUCT.md`, `CONTRIBUTING.md`, `Cargo.lock`, `Cargo.toml`, `Dockerfile`, `Dockerfile.neuron`, `Dockerfile.nix`, `Dockerfile_amd`, `Dockerfile_gaudi`, `Dockerfile_intel`, `Dockerfile_llamacpp`, `Dockerfile_trtllm`, `LICENSE`, `Makefile`, `README.md`, `assets/`, `backends/`, `benchmark/`, `clients/`
- Manifests: `Cargo.toml`, `Dockerfile`, `backends/client/Cargo.toml`, `backends/gaudi/server/poetry.lock`, `backends/gaudi/server/pyproject.toml`, `backends/gaudi/server/requirements.txt`, `backends/grpc-metadata/Cargo.toml`, `backends/llamacpp/Cargo.toml`, `backends/llamacpp/requirements.txt`, `backends/neuron/Cargo.toml`, `backends/neuron/server/pyproject.toml`, `backends/neuron/tests/requirements.txt`, `backends/trtllm/Cargo.toml`, `backends/v2/Cargo.toml`, `backends/v3/Cargo.toml`, `benchmark/Cargo.toml`, `clients/python/poetry.lock`, `clients/python/pyproject.toml`, `integration-tests/pyproject.toml`, `integration-tests/requirements.txt`, `integration-tests/uv.lock`, `launcher/Cargo.toml`, `load_tests/poetry.lock`, `load_tests/pyproject.toml`
- Top extensions: `.py` 380, `.json` 206, `.rs` 64, `.md` 56, `.cuh` 22, `.toml` 18, `.yaml` 17, `.txt` 11, `.cu` 9, `.lock` 8, `.nix` 8, `makefile` 8
- CLI hints: backends/gaudi/server/pyproject.toml: {"text-generation-server":"text_generation_server.cli:app"}; backends/neuron/server/pyproject.toml: {"text-generation-server":"text_generation_server.cli:app"}; server/pyproject.toml: {"text-generation-server":"text_generation_server.cli:app"}

### 6. huggingface/transformers

- Source: `sources/huggingface__transformers`
- GitHub: 🤗 Transformers: the model-definition framework for state-of-the-art machine learning models in text, vision, audio, and multimodal models, for both inference and training. 
- Root entries: `.ai/`, `.circleci/`, `.git-blame-ignore-revs`, `.gitattributes`, `.github/`, `.gitignore`, `AGENTS.md`, `CITATION.cff`, `CLAUDE.md`, `CODE_OF_CONDUCT.md`, `CONTRIBUTING.md`, `ISSUES.md`, `LICENSE`, `MIGRATION_GUIDE_V5.md`, `Makefile`, `README.md`, `SECURITY.md`, `awesome-transformers.md`, `benchmark/`, `benchmark_v2/`, `conftest.py`, `docker/`, `docs/`, `doctest_list.txt`
- Manifests: `benchmark/requirements.txt`, `benchmark_v2/requirements.txt`, `docker/transformers-all-latest-gpu/Dockerfile`, `docker/transformers-doc-builder/Dockerfile`, `docker/transformers-gpu/Dockerfile`, `docker/transformers-intel-cpu/Dockerfile`, `docker/transformers-pytorch-amd-gpu/Dockerfile`, `docker/transformers-pytorch-deepspeed-amd-gpu/Dockerfile`, `docker/transformers-pytorch-deepspeed-latest-gpu/Dockerfile`, `docker/transformers-pytorch-deepspeed-nightly-gpu/Dockerfile`, `docker/transformers-pytorch-gpu/Dockerfile`, `docker/transformers-pytorch-tpu/Dockerfile`, `docker/transformers-pytorch-xpu/Dockerfile`, `docker/transformers-quantization-latest-gpu/Dockerfile`, `examples/pytorch/audio-classification/requirements.txt`, `examples/pytorch/contrastive-image-text/requirements.txt`, `examples/pytorch/image-classification/requirements.txt`, `examples/pytorch/image-pretraining/requirements.txt`, `examples/pytorch/instance-segmentation/requirements.txt`, `examples/pytorch/language-modeling/requirements.txt`, `examples/pytorch/multiple-choice/requirements.txt`, `examples/pytorch/object-detection/requirements.txt`, `examples/pytorch/question-answering/requirements.txt`, `examples/pytorch/semantic-segmentation/requirements.txt`
- Top extensions: `.py` 4495, `.md` 1378, `.yml` 79, `.json` 40, `.txt` 36, `dockerfile` 12, `.yaml` 11, `.sh` 7, `.dockerfile` 7, `.model` 6, `.gitignore` 4, `.tsv` 4
- CLI hints: manual inspection required

### 7. huggingface/accelerate

- Source: `sources/huggingface__accelerate`
- GitHub: 🚀 A simple way to launch, train, and use PyTorch models on almost any device and distributed configuration, automatic mixed precision (including fp8), and easy-to-configure FSDP and DeepSpeed support
- Root entries: `.devcontainer/`, `.github/`, `.gitignore`, `.pre-commit-config.yaml`, `CODE_OF_CONDUCT.md`, `CONTRIBUTING.md`, `LICENSE`, `Makefile`, `README.md`, `benchmarks/`, `docker/`, `docs/`, `examples/`, `manim_animations/`, `pyproject.toml`, `setup.py`, `src/`, `tests/`, `utils/`
- Manifests: `benchmarks/fp8/ms_amp/Dockerfile`, `benchmarks/fp8/torchao/Dockerfile`, `benchmarks/fp8/transformer_engine/Dockerfile`, `docker/accelerate-cpu/Dockerfile`, `docker/accelerate-gpu-deepspeed/Dockerfile`, `docker/accelerate-gpu/Dockerfile`, `examples/inference/pippy/requirements.txt`, `examples/requirements.txt`, `pyproject.toml`
- Top extensions: `.py` 197, `.md` 78, `.yml` 21, `.yaml` 21, `.json` 11, `.png` 7, `dockerfile` 6, `.sh` 6, `makefile` 2, `.txt` 2, `.csv` 2, `.gitignore` 1
- CLI hints: manual inspection required

### 8. mlc-ai/mlc-llm

- Source: `sources/mlc-ai__mlc-llm`
- GitHub: Universal LLM Deployment Engine with ML Compilation
- Root entries: `.clang-format`, `.github/`, `.gitignore`, `.gitmodules`, `.pre-commit-config.yaml`, `.yamllint.yaml`, `3rdparty/`, `CMakeLists.txt`, `CONTRIBUTORS.md`, `LICENSE`, `NOTICE`, `README.md`, `android/`, `ci/`, `cmake/`, `cpp/`, `docs/`, `examples/`, `ios/`, `pyproject.toml`, `python/`, `scripts/`, `site/`, `tests/`
- Manifests: `docs/requirements.txt`, `examples/rest/nodejs/package.json`, `examples/rest/nodejs/tsconfig.json`, `pyproject.toml`, `python/requirements.txt`
- Top extensions: `.py` 389, `.cc` 44, `.h` 41, `.rst` 25, `.md` 22, `.swift` 18, `.xml` 17, `.kt` 14, `.json` 14, `.sh` 11, `.png` 10, `.svg` 10
- CLI hints: manual inspection required

### 9. EricLBuehler/mistral.rs

- Source: `sources/EricLBuehler__mistral.rs`
- GitHub: Fast, flexible LLM inference
- Root entries: `.cargo/`, `.dockerignore`, `.gitattributes`, `.github/`, `.gitignore`, `.typos.toml`, `AGENTS.md`, `CLAUDE.md`, `Cargo.lock`, `Cargo.toml`, `Dockerfile`, `Dockerfile.cuda-13.0-ubi9`, `Dockerfile.cuda-all`, `Dockerfile.manylinux`, `LICENSE`, `Makefile`, `README.md`, `calibration_data/`, `chat_templates/`, `docs/`, `examples/`, `game_of_life_plots/`, `install.ps1`, `install.sh`
- Manifests: `Cargo.toml`, `Dockerfile`, `docs/package.json`, `docs/tsconfig.json`, `mistralrs-audio/Cargo.toml`, `mistralrs-bench/Cargo.toml`, `mistralrs-cli/Cargo.toml`, `mistralrs-cli/webui/package.json`, `mistralrs-cli/webui/tsconfig.json`, `mistralrs-cli/webui/vite.config.ts`, `mistralrs-code-exec/Cargo.toml`, `mistralrs-core/Cargo.toml`, `mistralrs-flash-attn/Cargo.toml`, `mistralrs-macros/Cargo.toml`, `mistralrs-mcp/Cargo.toml`, `mistralrs-paged-attn/Cargo.toml`, `mistralrs-pyo3/Cargo.toml`, `mistralrs-pyo3/pyproject.toml`, `mistralrs-quant/Cargo.toml`, `mistralrs-sandbox/Cargo.toml`, `mistralrs-server-core/Cargo.toml`, `mistralrs-server/Cargo.toml`, `mistralrs-vision/Cargo.toml`, `mistralrs/Cargo.toml`
- Top extensions: `.rs` 634, `.md` 134, `.py` 132, `.cu` 119, `.cuh` 42, `.metal` 37, `.toml` 31, `.json` 26, `.h` 23, `.woff` 20, `.ttf` 20, `.woff2` 19
- CLI hints: manual inspection required

### 10. mudler/LocalAI

- Source: `sources/mudler__LocalAI`
- GitHub: LocalAI is the open-source AI engine. Run any model - LLMs, vision, voice, image, video - on any hardware. No GPU required.
- Root entries: `.agents/`, `.air.toml`, `.devcontainer-scripts/`, `.devcontainer/`, `.docker/`, `.dockerignore`, `.editorconfig`, `.env`, `.gitattributes`, `.githooks/`, `.github/`, `.gitignore`, `.gitmodules`, `.golangci.yml`, `.goreleaser.yaml`, `.vscode/`, `.yamllint`, `AGENTS.md`, `CLAUDE.md`, `CONTRIBUTING.md`, `Dockerfile`, `Entitlements.plist`, `LICENSE`, `Makefile`
- Manifests: `Dockerfile`, `backend/python/ace-step/requirements.txt`, `backend/python/chatterbox/requirements.txt`, `backend/python/common/template/requirements.txt`, `backend/python/coqui/requirements.txt`, `backend/python/diffusers/requirements.txt`, `backend/python/faster-qwen3-tts/requirements.txt`, `backend/python/faster-whisper/requirements.txt`, `backend/python/fish-speech/requirements.txt`, `backend/python/insightface/requirements.txt`, `backend/python/kitten-tts/requirements.txt`, `backend/python/kokoro/requirements.txt`, `backend/python/liquid-audio/requirements.txt`, `backend/python/llama-cpp-quantization/requirements.txt`, `backend/python/mlx-audio/requirements.txt`, `backend/python/mlx-distributed/requirements.txt`, `backend/python/mlx-vlm/requirements.txt`, `backend/python/mlx/requirements.txt`, `backend/python/moonshine/requirements.txt`, `backend/python/nemo/requirements.txt`, `backend/python/neutts/requirements.txt`, `backend/python/outetts/requirements.txt`, `backend/python/pocket-tts/requirements.txt`, `backend/python/qwen-asr/requirements.txt`
- Top extensions: `.go` 1117, `.txt` 274, `.sh` 204, `.md` 125, `.jsx` 115, `.yaml` 109, `.py` 99, `.js` 95, `.json` 92, `.html` 64, `makefile` 62, `.png` 45
- CLI hints: manual inspection required

### 11. oobabooga/text-generation-webui

- Source: `sources/oobabooga__text-generation-webui`
- GitHub: Open-source desktop app for local LLMs. Text, vision, tool-calling, OpenAI/Anthropic-compatible API. 100% private.
- Root entries: `.github/`, `.gitignore`, `Colab-TextGen-GPU.ipynb`, `LICENSE`, `README.md`, `cmd_linux.sh`, `cmd_macos.sh`, `cmd_windows.bat`, `css/`, `desktop/`, `docker/`, `docs/`, `download-model.py`, `extensions/`, `js/`, `modules/`, `one_click.py`, `requirements/`, `server.py`, `setup.cfg`, `start_linux.sh`, `start_macos.sh`, `start_windows.bat`, `update_wizard_linux.sh`
- Manifests: `desktop/package.json`, `docker/TensorRT-LLM/Dockerfile`, `docker/amd/Dockerfile`, `docker/amd/docker-compose.yml`, `docker/cpu/Dockerfile`, `docker/cpu/docker-compose.yml`, `docker/intel/Dockerfile`, `docker/intel/docker-compose.yml`, `docker/nvidia/Dockerfile`, `docker/nvidia/docker-compose.yml`, `extensions/coqui_tts/requirements.txt`, `extensions/google_translate/requirements.txt`, `extensions/ngrok/requirements.txt`, `extensions/silero_tts/requirements.txt`, `extensions/superbooga/requirements.txt`, `extensions/superboogav2/requirements.txt`, `extensions/whisper_stt/requirements.txt`, `requirements/full/requirements.txt`, `requirements/portable/requirements.txt`
- Top extensions: `.py` 97, `.woff` 38, `.woff2` 38, `.txt` 35, `.md` 24, `.ttf` 22, `.css` 17, `.js` 16, `.yml` 13, `.yaml` 12, `.json` 8, `.gbnf` 8
- CLI hints: manual inspection required

### 12. lm-sys/FastChat

- Source: `sources/lm-sys__FastChat`
- GitHub: An open platform for training, serving, and evaluating large language models. Release repo for Vicuna and Chatbot Arena.
- Root entries: `.github/`, `.gitignore`, `.pylintrc`, `LICENSE`, `README.md`, `assets/`, `data/`, `docker/`, `docs/`, `fastchat/`, `format.sh`, `playground/`, `pyproject.toml`, `scripts/`, `tests/`, `theme.json`
- Manifests: `docker/Dockerfile`, `docker/docker-compose.yml`, `pyproject.toml`
- Top extensions: `.py` 148, `.md` 32, `.sh` 9, `.png` 5, `.jsonl` 5, `.json` 4, `.yml` 2, `.jpg` 2, `.yaml` 2, `.gitignore` 1, `.pylintrc` 1, `license` 1
- CLI hints: manual inspection required

### 13. NVIDIA/TensorRT-LLM

- Source: `sources/NVIDIA__TensorRT-LLM`
- GitHub: TensorRT LLM provides users with an easy-to-use Python API to define Large Language Models (LLMs) and supports state-of-the-art optimizations to perform inference efficiently on NVIDIA GPUs. TensorRT LLM also contains components to create Python and C++ runtimes that orchestrate the inference execution in a performant way.
- Root entries: `.clang-format`, `.clang-tidy`, `.clangd`, `.claude/`, `.cmake-format.json`, `.coderabbit.yaml`, `.codex/`, `.cursorignore`, `.devcontainer/`, `.dockerignore`, `.editorconfig`, `.gitattributes`, `.github/`, `.gitignore`, `.gitmodules`, `.nspect-allowlist.toml`, `.pre-commit-config.yaml`, `3rdparty/`, `AGENTS.md`, `ATTRIBUTIONS-CPP-aarch64.md`, `ATTRIBUTIONS-CPP-x86_64.md`, `ATTRIBUTIONS-Python.md`, `CLAUDE.md`, `CODE_OF_CONDUCT.md`
- Manifests: `.devcontainer/docker-compose.yml`, `cpp/kernels/fmha_v2/requirements.txt`, `docs/requirements.txt`, `examples/apps/requirements.txt`, `examples/auto_deploy/requirements.txt`, `examples/draft_target_model/requirements.txt`, `examples/eagle/requirements.txt`, `examples/llm-eval/lm-eval-harness/requirements.txt`, `examples/longbench/requirements.txt`, `examples/lookahead/requirements.txt`, `examples/medusa/requirements.txt`, `examples/models/contrib/baichuan/requirements.txt`, `examples/models/contrib/bloom/requirements.txt`, `examples/models/contrib/chatglm-6b/requirements.txt`, `examples/models/contrib/chatglm2-6b/requirements.txt`, `examples/models/contrib/chatglm3-6b-32k/requirements.txt`, `examples/models/contrib/dbrx/requirements.txt`, `examples/models/contrib/deepseek_v1/requirements.txt`, `examples/models/contrib/deepseek_v2/requirements.txt`, `examples/models/contrib/falcon/requirements.txt`, `examples/models/contrib/gptj/requirements.txt`, `examples/models/contrib/gptneox/requirements.txt`, `examples/models/contrib/grok/requirements.txt`, `examples/models/contrib/hyperclovax/requirements.txt`
- Top extensions: `.zst` 3781, `.py` 2776, `.h` 777, `.yaml` 659, `.cpp` 501, `.md` 454, `.cu` 339, `.txt` 191, `.png` 179, `.yml` 109, `.sh` 76, `.toml` 71
- CLI hints: scripts/attribution/sbom/pyproject.toml: {"trtllm-sbom":"trtllm_sbom.cli:main"}

### 14. microsoft/BitNet

- Source: `sources/microsoft__BitNet`
- GitHub: Official inference framework for 1-bit LLMs
- Root entries: `.gitignore`, `.gitmodules`, `3rdparty/`, `CMakeLists.txt`, `CODE_OF_CONDUCT.md`, `LICENSE`, `README.md`, `SECURITY.md`, `assets/`, `docs/`, `gpu/`, `include/`, `media/`, `preset_kernels/`, `requirements.txt`, `run_inference.py`, `run_inference_server.py`, `setup_env.py`, `src/`, `utils/`
- Manifests: `gpu/requirements.txt`, `requirements.txt`
- Top extensions: `.py` 25, `.png` 10, `.h` 9, `.md` 6, `.ini` 6, `.txt` 4, `.sh` 3, `.cpp` 2, `.gitignore` 1, `.gitmodules` 1, `license` 1, `.cu` 1
- CLI hints: manual inspection required

### 15. xorbitsai/inference

- Source: `sources/xorbitsai__inference`
- GitHub: Swap GPT for any LLM by changing a single line of code. Xinference lets you run open-source, speech, and multimodal models on cloud, on-prem, or your laptop — all through one unified, production-ready inference API.
- Root entries: `.dockerignore`, `.gitattributes`, `.github/`, `.gitignore`, `.pre-commit-config.yaml`, `.readthedocs.yaml`, `AGENTS.md`, `CLAUDE.md`, `LICENSE`, `MANIFEST.in`, `README.md`, `README_ja_JP.md`, `README_zh_CN.md`, `assets/`, `benchmark/`, `doc/`, `examples/`, `frontend/`, `monitor/`, `pyproject.toml`, `setup.cfg`, `setup.py`, `versioneer.py`, `xinference/`
- Manifests: `frontend/package.json`, `frontend/tsconfig.json`, `monitor/filebeat/docker-compose.yml`, `pyproject.toml`, `xinference/deploy/docker/Dockerfile`, `xinference/deploy/docker/docker-compose.yml`, `xinference/ui/web/ui/package.json`
- Top extensions: `.py` 954, `.rst` 372, `.po` 144, `.tsx` 82, `.js` 68, `.json` 38, `.png` 27, `.ts` 23, `.md` 22, `.yaml` 19, `.yml` 16, `.txt` 15
- CLI hints: manual inspection required

### 16. run-llama/llama_index

- Source: `sources/run-llama__llama_index`
- GitHub: LlamaIndex is the leading document agent and OCR platform
- Root entries: `.github/`, `.gitignore`, `.pre-commit-config.yaml`, `.readthedocs.yaml`, `CHANGELOG.md`, `CITATION.cff`, `CODE_OF_CONDUCT.md`, `CONTRIBUTING.md`, `LICENSE`, `Makefile`, `README.md`, `RELEASE_HEAD.md`, `SECURITY.md`, `STALE.md`, `docs.config.mjs`, `docs/`, `llama-dev/`, `llama-index-core/`, `llama-index-instrumentation/`, `llama-index-integrations/`, `llama-index-utils/`, `pyproject.toml`, `scripts/`, `uv.lock`
- Manifests: `docs/api_reference/poetry.lock`, `docs/api_reference/pyproject.toml`, `llama-dev/pyproject.toml`, `llama-dev/tests/data/llama-index-integrations/storage/subcat/pkg2/pyproject.toml`, `llama-dev/tests/data/llama-index-integrations/vector_stores/pkg1/pyproject.toml`, `llama-dev/tests/data/llama-index-packs/pack1/pyproject.toml`, `llama-dev/tests/data/llama-index-packs/pack2/pyproject.toml`, `llama-dev/tests/data/llama-index-utils/util/pyproject.toml`, `llama-dev/uv.lock`, `llama-index-core/pyproject.toml`, `llama-index-core/tests/docker-compose.yml`, `llama-index-core/uv.lock`, `llama-index-instrumentation/pyproject.toml`, `llama-index-instrumentation/uv.lock`, `llama-index-integrations/agent/llama-index-agent-agentmesh/pyproject.toml`, `llama-index-integrations/agent/llama-index-agent-agentmesh/uv.lock`, `llama-index-integrations/agent/llama-index-agent-azure/pyproject.toml`, `llama-index-integrations/callbacks/llama-index-callbacks-agentops/pyproject.toml`, `llama-index-integrations/callbacks/llama-index-callbacks-agentops/uv.lock`, `llama-index-integrations/callbacks/llama-index-callbacks-aim/pyproject.toml`, `llama-index-integrations/callbacks/llama-index-callbacks-aim/uv.lock`, `llama-index-integrations/callbacks/llama-index-callbacks-argilla/pyproject.toml`, `llama-index-integrations/callbacks/llama-index-callbacks-argilla/uv.lock`, `llama-index-integrations/callbacks/llama-index-callbacks-arize-phoenix/pyproject.toml`
- Top extensions: `.py` 3826, `.md` 1808, `.ipynb` 759, `.toml` 641, `.lock` 620, `makefile` 614, `license` 600, `.gitignore` 587, `.txt` 131, `.yml` 91, `.png` 89, `.typed` 80
- CLI hints: docs/api_reference/pyproject.toml: {"merge-external-docs":"scripts.merge_external_docs:main","prepare-for-build":"scripts.prepare_for_build:main","serve":"scripts.serve:main"}; llama-dev/pyproject.toml: {"llama-dev":"llama_dev.cli:cli"}; llama-index-instrumentation/pyproject.toml: {"llama-index-instrumentation":"llama_index_instrumentation:main"}

### 17. langchain-ai/langchain

- Source: `sources/langchain-ai__langchain`
- GitHub: The agent engineering platform.
- Root entries: `.devcontainer/`, `.dockerignore`, `.editorconfig`, `.gitattributes`, `.github/`, `.gitignore`, `.markdownlint.json`, `.mcp.json`, `.pre-commit-config.yaml`, `.vscode/`, `AGENTS.md`, `CITATION.cff`, `CLAUDE.md`, `LICENSE`, `README.md`, `libs/`
- Manifests: `libs/core/pyproject.toml`, `libs/core/uv.lock`, `libs/langchain/pyproject.toml`, `libs/langchain/uv.lock`, `libs/langchain_v1/pyproject.toml`, `libs/langchain_v1/uv.lock`, `libs/model-profiles/pyproject.toml`, `libs/model-profiles/uv.lock`, `libs/partners/anthropic/pyproject.toml`, `libs/partners/anthropic/uv.lock`, `libs/partners/chroma/pyproject.toml`, `libs/partners/chroma/uv.lock`, `libs/partners/deepseek/pyproject.toml`, `libs/partners/deepseek/uv.lock`, `libs/partners/exa/pyproject.toml`, `libs/partners/exa/uv.lock`, `libs/partners/fireworks/pyproject.toml`, `libs/partners/fireworks/uv.lock`, `libs/partners/groq/pyproject.toml`, `libs/partners/groq/uv.lock`, `libs/partners/huggingface/pyproject.toml`, `libs/partners/huggingface/uv.lock`, `libs/partners/mistralai/pyproject.toml`, `libs/partners/mistralai/uv.lock`
- Top extensions: `.py` 2520, `.gz` 61, `.json` 47, `.yml` 38, `.toml` 29, `.md` 28, `.ambr` 26, `makefile` 23, `.lock` 21, `.typed` 20, `.sh` 20, `license` 18
- CLI hints: libs/model-profiles/pyproject.toml: {"langchain-profiles":"langchain_model_profiles.cli:main"}

### 18. deepset-ai/haystack

- Source: `sources/deepset-ai__haystack`
- GitHub: Open-source AI orchestration framework for building context-engineered, production-ready LLM applications. Design modular pipelines and agent workflows with explicit control over retrieval, routing, memory, and generation. Built for scalable agents, RAG, multimodal applications, semantic search, and conversational systems.
- Root entries: `.github/`, `.gitignore`, `.pre-commit-config.yaml`, `AGENTS.md`, `CITATION.cff`, `CLAUDE.md`, `CONTRIBUTING.md`, `LICENSE`, `README.md`, `SECURITY.md`, `VERSION.txt`, `code_of_conduct.txt`, `docker/`, `docs-website/`, `e2e/`, `examples/`, `haystack/`, `images/`, `license-header.txt`, `licenserc.toml`, `pydoc/`, `pyproject.toml`, `releasenotes/`, `scripts/`
- Manifests: `docs-website/api/tsconfig.json`, `docs-website/package.json`, `pyproject.toml`
- Top extensions: `.mdx` 4833, `.md` 1646, `.yaml` 1064, `.py` 567, `.yml` 65, `.json` 39, `.png` 38, `.svg` 34, `.js` 14, `.txt` 13, `.tsx` 6, `.pdf` 6
- CLI hints: manual inspection required

### 19. microsoft/graphrag

- Source: `sources/microsoft__graphrag`
- GitHub: A modular graph-based Retrieval-Augmented Generation (RAG) system
- Root entries: `.gitattributes`, `.github/`, `.gitignore`, `.semversioner/`, `.vscode/`, `.vsts-ci.yml`, `CHANGELOG.md`, `CODEOWNERS`, `CODE_OF_CONDUCT.md`, `CONTRIBUTING.md`, `DEVELOPING.md`, `LICENSE`, `RAI_TRANSPARENCY.md`, `README.md`, `RELEASE.md`, `SECURITY.md`, `SUPPORT.md`, `breaking-changes.md`, `cspell.config.yaml`, `dictionary.txt`, `docs/`, `mkdocs.yaml`, `packages/`, `pyproject.toml`
- Manifests: `packages/graphrag-cache/pyproject.toml`, `packages/graphrag-chunking/pyproject.toml`, `packages/graphrag-common/pyproject.toml`, `packages/graphrag-input/pyproject.toml`, `packages/graphrag-llm/pyproject.toml`, `packages/graphrag-storage/pyproject.toml`, `packages/graphrag-vectors/pyproject.toml`, `packages/graphrag/pyproject.toml`, `pyproject.toml`, `unified-search-app/Dockerfile`, `unified-search-app/pyproject.toml`, `unified-search-app/uv.lock`, `uv.lock`
- Top extensions: `.py` 570, `.md` 56, `.json` 53, `.ipynb` 40, `.txt` 21, `.yml` 20, `.parquet` 18, `.txn` 16, `.manifest` 16, `.png` 12, `.yaml` 11, `.toml` 11
- CLI hints: packages/graphrag/pyproject.toml: {"graphrag":"graphrag.cli.main:app"}

### 20. HKUDS/LightRAG

- Source: `sources/HKUDS__LightRAG`
- GitHub: [EMNLP2025] "LightRAG: Simple and Fast Retrieval-Augmented Generation"
- Root entries: `.claude/`, `.clinerules/`, `.dockerignore`, `.gitattributes`, `.github/`, `.gitignore`, `.pre-commit-config.yaml`, `AGENTS.md`, `CLAUDE.md`, `Dockerfile`, `Dockerfile.lite`, `Dockerfile.postgres`, `LICENSE`, `MANIFEST.in`, `Makefile`, `README-zh.md`, `README.assets/`, `README.md`, `SECURITY.md`, `assets/`, `config.ini.example`, `docker-build-push.sh`, `docker-compose-full.yml`, `docker-compose.podman.yml`
- Manifests: `Dockerfile`, `docker-compose.yml`, `lightrag/tools/lightrag_visualizer/requirements.txt`, `lightrag_webui/bun.lock`, `lightrag_webui/package.json`, `lightrag_webui/tsconfig.json`, `lightrag_webui/vite.config.ts`, `pyproject.toml`, `uv.lock`
- Top extensions: `.py` 374, `.tsx` 74, `.md` 52, `.yml` 29, `.json` 25, `.ts` 25, `.sh` 22, `.yaml` 15, `.png` 12, `.jsonl` 8, `.txt` 7, `.example` 4
- CLI hints: pyproject.toml: {"lightrag-server":"lightrag.api.lightrag_server:main","lightrag-gunicorn":"lightrag.api.run_with_gunicorn:main","lightrag-hash-password":"lightrag.tools.hash_password:main","lightrag-download-cache":"lightrag.tools.download_cache:main","lightrag-clean-llmqc":"lightrag.tools.clean_llm_query_cache:main","lightrag-rebuild-vdb":"lightrag.tools.rebuild_vdb:main"}

### 21. mem0ai/mem0

- Source: `sources/mem0ai__mem0`
- GitHub: Universal memory layer for AI Agents
- Root entries: `.agents/`, `.claude-plugin/`, `.codex-plugin/`, `.cursor-plugin/`, `.github/`, `.gitignore`, `.pre-commit-config.yaml`, `AGENTS.md`, `CLAUDE.md`, `CONTRIBUTING.md`, `LICENSE`, `LLM.md`, `Makefile`, `README.md`, `cli/`, `cookbooks/`, `docs/`, `evaluation/`, `examples/`, `integrations/`, `marketplace.json`, `mem0-ts/`, `mem0/`, `openmemory/`
- Manifests: `cli/node/package.json`, `cli/node/pnpm-lock.yaml`, `cli/node/pnpm-workspace.yaml`, `cli/node/tsconfig.json`, `cli/python/pyproject.toml`, `examples/mem0-demo/package.json`, `examples/mem0-demo/tsconfig.json`, `examples/multimodal-demo/package.json`, `examples/multimodal-demo/tsconfig.json`, `examples/multimodal-demo/vite.config.ts`, `examples/openai-inbuilt-tools/package.json`, `examples/vercel-ai-sdk-chat-app/package.json`, `examples/vercel-ai-sdk-chat-app/tsconfig.json`, `examples/vercel-ai-sdk-chat-app/vite.config.ts`, `examples/yt-assistant-chrome/package.json`, `integrations/mem0-plugin/.opencode-plugin/bun.lock`, `integrations/mem0-plugin/.opencode-plugin/package.json`, `integrations/mem0-plugin/.opencode-plugin/tsconfig.json`, `integrations/mem0-plugin/requirements.txt`, `integrations/openclaw/package.json`, `integrations/openclaw/pnpm-lock.yaml`, `integrations/openclaw/pnpm-workspace.yaml`, `integrations/openclaw/tsconfig.json`, `integrations/pi-agent-plugin/package.json`
- Top extensions: `.py` 372, `.ts` 333, `.mdx` 241, `.tsx` 227, `.md` 129, `.json` 65, `.png` 54, `.yml` 35, `.svg` 33, `.sh` 28, `.yaml` 16, `.js` 16
- CLI hints: cli/node/package.json: {"mem0":"./dist/index.js"}; integrations/mem0-plugin/.opencode-plugin/package.json: {"mem0-opencode":"./cli.ts"}; cli/python/pyproject.toml: {"mem0":"mem0_cli.app:main"}

### 22. getzep/zep

- Source: `sources/getzep__zep`
- GitHub: Zep | Examples, Integrations, & More
- Root entries: `.cursor/`, `.env.example`, `.github/`, `.gitignore`, `CODE_OF_CONDUCT.md`, `CONTRIBUTING.md`, `LICENSE`, `README.md`, `SECURITY.md`, `assets/`, `benchmarks/`, `examples/`, `integrations/`, `legacy/`, `mcp/`, `ontology/`, `pyproject.toml`, `zep-eval-harness/`
- Manifests: `benchmarks/locomo/pyproject.toml`, `benchmarks/longmemeval/pyproject.toml`, `examples/go/chunking-example/go.mod`, `examples/python/agent-memory-full-example/requirements.txt`, `examples/python/chunking-example/requirements.txt`, `examples/python/context-templates-example/requirements.txt`, `examples/python/elevenlabs-zep-example/react-app/package.json`, `examples/python/openai-agents-sdk/pyproject.toml`, `examples/python/requirements.txt`, `examples/python/user-summary-instructions-example/requirements.txt`, `examples/python/zep-quickstart-dashboard/requirements.txt`, `examples/typescript/chunking-example/package.json`, `examples/typescript/chunking-example/tsconfig.json`, `examples/typescript/langgraph/package.json`, `examples/typescript/zep-graph-visualization/package.json`, `examples/typescript/zep-graph-visualization/tsconfig.json`, `examples/typescript/zep-graph-visualization/yarn.lock`, `integrations/python/zep_adk/pyproject.toml`, `integrations/python/zep_autogen/pyproject.toml`, `integrations/python/zep_crewai/pyproject.toml`, `integrations/python/zep_livekit/examples/full-example/requirements.txt`, `integrations/python/zep_livekit/pyproject.toml`, `legacy/src/go.mod`, `mcp/zep-mcp-server/Dockerfile`
- Top extensions: `.py` 129, `.go` 122, `.json` 94, `.md` 41, `.ts` 18, `.tsx` 17, `.example` 15, `.txt` 13, `.gitignore` 10, `.yaml` 9, `.toml` 9, `.svg` 6
- CLI hints: manual inspection required

### 23. stanford-oval/storm

- Source: `sources/stanford-oval__storm`
- GitHub: An LLM-powered knowledge curation system that researches a topic and generates a full-length report with citations.
- Root entries: `.github/`, `.gitignore`, `.pre-commit-config.yaml`, `CONTRIBUTING.md`, `LICENSE`, `MANIFEST.in`, `README.md`, `assets/`, `examples/`, `frontend/`, `knowledge_storm/`, `requirements.txt`, `setup.py`
- Manifests: `frontend/demo_light/requirements.txt`, `requirements.txt`
- Top extensions: `.py` 52, `.md` 5, `.jpg` 5, `.yml` 2, `.svg` 2, `.txt` 2, `.gitignore` 1, `.yaml` 1, `license` 1, `.in` 1, `.pdf` 1, `.toml` 1
- CLI hints: manual inspection required

### 24. weaviate/Verba

- Source: `sources/weaviate__Verba`
- GitHub: Retrieval Augmented Generation (RAG) chatbot powered by Weaviate
- Root entries: `.github/`, `.gitignore`, `CHANGELOG.md`, `CONTRIBUTING.md`, `Dockerfile`, `FRONTEND.md`, `LICENSE`, `MANIFEST.in`, `PYTHON_TUTORIAL.md`, `README.md`, `TECHNICAL.md`, `docker-compose.yml`, `frontend/`, `goldenverba/`, `img/`, `pypi_commands.sh`, `setup.py`
- Manifests: `Dockerfile`, `docker-compose.yml`, `frontend/next.config.js`, `frontend/package.json`, `frontend/tsconfig.json`
- Top extensions: `.js` 151, `.py` 56, `.woff2` 41, `.tsx` 32, `.png` 29, `.css` 11, `.md` 8, `.ts` 7, `.glsl` 6, `.json` 4, `.hdr` 4, `.gltf` 4
- CLI hints: manual inspection required

### 25. khoj-ai/khoj

- Source: `sources/khoj-ai__khoj`
- GitHub: Your AI second brain. Self-hostable. Get answers from the web or your docs. Build custom agents, schedule automations, do deep research. Turn any online or local LLM into your personal, autonomous AI (gpt, claude, gemini, llama, qwen, mistral). Get started - free.
- Root entries: `.devcontainer/`, `.dockerignore`, `.gitattributes`, `.github/`, `.gitignore`, `.pre-commit-config.yaml`, `.vscode/`, `Dockerfile`, `LICENSE`, `README.md`, `computer.Dockerfile`, `docker-compose.yml`, `documentation/`, `gunicorn-config.py`, `manifest.json`, `prod.Dockerfile`, `pyproject.toml`, `pytest.ini`, `scripts/`, `src/`, `tests/`, `uv.lock`, `versions.json`
- Manifests: `.devcontainer/Dockerfile`, `Dockerfile`, `docker-compose.yml`, `documentation/package.json`, `documentation/yarn.lock`, `pyproject.toml`, `src/interface/desktop/package.json`, `src/interface/desktop/yarn.lock`, `src/interface/obsidian/package.json`, `src/interface/obsidian/tsconfig.json`, `src/interface/obsidian/yarn.lock`, `src/interface/web/bun.lock`, `src/interface/web/package.json`, `src/interface/web/tsconfig.json`, `src/telemetry/Dockerfile`, `src/telemetry/requirements.txt`, `uv.lock`
- Top extensions: `.py` 251, `.tsx` 81, `.png` 72, `.md` 42, `.svg` 34, `.json` 27, `.css` 27, `.ts` 22, `.markdown` 19, `.js` 17, `.yml` 15, `.html` 14
- CLI hints: pyproject.toml: {"khoj":"khoj.main:run"}

### 26. QuivrHQ/quivr

- Source: `sources/QuivrHQ__quivr`
- GitHub: Opiniated RAG for integrating GenAI in your apps 🧠   Focus on your product rather than the RAG. Easy integration in existing products with customisation!  Any LLM: GPT4, Groq, Llama. Any Vectorstore: PGVector, Faiss. Any Files. Anyway you want.
- Root entries: `.flake8`, `.github/`, `.gitignore`, `.pre-commit-config.yaml`, `.python-version`, `.readthedocs.yaml`, `.release-please-manifest.json`, `.vscode/`, `CHANGELOG.md`, `LICENSE`, `README.md`, `core/`, `docs/`, `examples/`, `logo.png`, `release-please-config.json`, `vercel.json`
- Manifests: `core/pyproject.toml`, `docs/pyproject.toml`, `examples/chatbot/pyproject.toml`, `examples/chatbot_voice/pyproject.toml`, `examples/quivr-whisper/pyproject.toml`, `examples/simple_question/pyproject.toml`
- Top extensions: `.py` 77, `.md` 39, `.json` 28, `.lock` 12, `.yml` 11, `.toml` 8, `.png` 8, `.gitignore` 7, `.yaml` 7, `.python-version` 7, `.svg` 3, `.flake8` 2
- CLI hints: manual inspection required

### 27. infiniflow/ragflow

- Source: `sources/infiniflow__ragflow`
- GitHub: RAGFlow is a leading open-source Retrieval-Augmented Generation (RAG) engine that fuses cutting-edge RAG with Agent capabilities to create a superior context layer for LLMs
- Root entries: `.agents/`, `.dockerignore`, `.gitattributes`, `.github/`, `.gitignore`, `.pre-commit-config.yaml`, `.rooignore`, `.trivyignore`, `AGENTS.md`, `CLAUDE.md`, `Dockerfile`, `Dockerfile.deps`, `Dockerfile.scratch.oc9`, `Dockerfile_tei`, `LICENSE`, `README.md`, `README_ar.md`, `README_fr.md`, `README_id.md`, `README_ja.md`, `README_ko.md`, `README_pt_br.md`, `README_tr.md`, `README_tzh.md`
- Manifests: `Dockerfile`, `admin/client/pyproject.toml`, `admin/client/uv.lock`, `agent/sandbox/docker-compose.yml`, `agent/sandbox/executor_manager/Dockerfile`, `agent/sandbox/executor_manager/requirements.txt`, `agent/sandbox/pyproject.toml`, `agent/sandbox/sandbox_base_image/nodejs/Dockerfile`, `agent/sandbox/sandbox_base_image/nodejs/package.json`, `agent/sandbox/sandbox_base_image/python/Dockerfile`, `agent/sandbox/sandbox_base_image/python/requirements.txt`, `agent/sandbox/uv.lock`, `docker/docker-compose.yml`, `go.mod`, `pyproject.toml`, `sdk/python/pyproject.toml`, `sdk/python/uv.lock`, `tools/chatgpt-on-wechat/plugins/requirements.txt`, `tools/es-to-oceanbase-migration/pyproject.toml`, `tools/es-to-oceanbase-migration/uv.lock`, `tools/firecrawl/requirements.txt`, `uv.lock`, `web/package.json`, `web/tsconfig.json`
- Top extensions: `.py` 923, `.tsx` 728, `.go` 615, `.ts` 401, `.svg` 250, `.md` 186, `.json` 154, `.h` 63, `.woff2` 38, `.less` 38, `.cpp` 29, `.cc` 23
- CLI hints: admin/client/pyproject.toml: {"ragflow-cli":"ragflow_cli:main"}; tools/es-to-oceanbase-migration/pyproject.toml: {"es-ob-migrate":"es_ob_migration.cli:main"}

### 28. qdrant/qdrant

- Source: `sources/qdrant__qdrant`
- GitHub: Qdrant - High-performance, massive-scale Vector Database and Vector Search Engine for the next generation of AI. Also available in the cloud https://cloud.qdrant.io/
- Root entries: `.config/`, `.dockerignore`, `.gitattributes`, `.github/`, `.gitignore`, `.rusty-hook.toml`, `CONTRIBUTING.md`, `Cargo.lock`, `Cargo.toml`, `Dockerfile`, `LICENSE`, `README.md`, `clippy.toml`, `config/`, `docs/`, `lib/`, `openapi/`, `pkg/`, `rustfmt.toml`, `shell.nix`, `src/`, `tests/`, `tools/`
- Manifests: `Cargo.toml`, `Dockerfile`, `lib/api/Cargo.toml`, `lib/bm25/Cargo.toml`, `lib/collection/Cargo.toml`, `lib/common/cancel/Cargo.toml`, `lib/common/common/Cargo.toml`, `lib/common/dataset/Cargo.toml`, `lib/common/io_bridge_object_store/Cargo.toml`, `lib/common/issues/Cargo.toml`, `lib/edge/Cargo.toml`, `lib/edge/publish/Cargo.toml`, `lib/edge/publish/examples/Cargo.toml`, `lib/edge/python/Cargo.toml`, `lib/edge/python/codegen/Cargo.toml`, `lib/edge/python/pyproject.toml`, `lib/gpu/Cargo.toml`, `lib/gridstore/Cargo.toml`, `lib/macros/Cargo.toml`, `lib/posting_list/Cargo.toml`, `lib/quantization/Cargo.toml`, `lib/segment/Cargo.toml`, `lib/shard/Cargo.toml`, `lib/sparse/Cargo.toml`
- Top extensions: `.rs` 1391, `.py` 208, `.json` 59, `.toml` 32, `.sh` 32, `.yaml` 23, `.comp` 22, `.md` 21, `.yml` 19, `.proto` 16, `.gitignore` 7, `.png` 6
- CLI hints: manual inspection required

### 29. milvus-io/milvus

- Source: `sources/milvus-io__milvus`
- GitHub: Milvus is a high-performance, cloud-native vector database built for scalable vector ANN search
- Root entries: `.clang-format`, `.clang-tidy`, `.clang-tidy-ignore`, `.contributors`, `.devcontainer.json`, `.dockerignore`, `.env`, `.github/`, `.gitignore`, `.golangci.yml`, `.pre-commit-config.yaml`, `AGENTS.md`, `CLAUDE.md`, `CODE_OF_CONDUCT.md`, `CODE_REVIEW.md`, `COMMAND_HELP.md`, `COMMITTERS`, `CONTRIBUTING.md`, `DEVELOPMENT.md`, `LICENSE`, `MAINTAINERS`, `Makefile`, `OWNERS`, `OWNERS_ALIASES`
- Manifests: `client/go.mod`, `cmd/tools/binlogv2/requirements.txt`, `deployments/docker/dev/docker-compose.yml`, `deployments/docker/gpu/standalone/docker-compose.yml`, `deployments/docker/standalone/docker-compose.yml`, `deployments/offline/requirements.txt`, `docker-compose.yml`, `examples/telemetry_demo/go.mod`, `examples/telemetry_e2e_test/go.mod`, `go.mod`, `internal/core/thirdparty/tantivy/tantivy-binding/Cargo.toml`, `pkg/go.mod`, `tests/_helm/Dockerfile`, `tests/docker/Dockerfile`, `tests/docker/docker-compose.yml`, `tests/go_client/Dockerfile`, `tests/go_client/go.mod`, `tests/go_client/requirements.txt`, `tests/python_client/Dockerfile`, `tests/python_client/chaos/requirements.txt`, `tests/python_client/data_verify/requirements.txt`, `tests/python_client/deploy/cluster/docker-compose.yml`, `tests/python_client/deploy/requirements.txt`, `tests/python_client/deploy/standalone/docker-compose.yml`
- Top extensions: `.go` 3240, `.cpp` 413, `.h` 387, `.py` 306, `.yaml` 175, `.md` 165, `.rs` 86, `.sh` 85, `.png` 67, `.txt` 61, `owners` 55, `.yml` 35
- CLI hints: manual inspection required

### 30. chroma-core/chroma

- Source: `sources/chroma-core__chroma`
- GitHub: Search infrastructure for AI
- Root entries: `.config/`, `.dockerignore`, `.gitattributes`, `.github/`, `.gitignore`, `.pre-commit-config.yaml`, `.taplo.toml`, `.vscode/`, `AGENTS.md`, `CLAUDE.md`, `Cargo.lock`, `Cargo.toml`, `DEVELOP.md`, `Dockerfile`, `Dockerfile.windows`, `LICENSE`, `README.md`, `RELEASE_PROCESS.md`, `Tiltfile`, `bandit.yaml`, `bin/`, `chromadb/`, `clients/`, `compose-env.linux`
- Manifests: `.github/actions/bandit-scan/Dockerfile`, `Cargo.toml`, `Dockerfile`, `bin/templates/docker-compose.yml`, `clients/js/examples/node/package.json`, `clients/js/examples/node/pnpm-lock.yaml`, `clients/js/package.json`, `clients/js/packages/chromadb-client/package.json`, `clients/js/packages/chromadb-client/tsconfig.json`, `clients/js/packages/chromadb-core/package.json`, `clients/js/packages/chromadb-core/tsconfig.json`, `clients/js/packages/chromadb/package.json`, `clients/js/packages/chromadb/tsconfig.json`, `clients/js/pnpm-lock.yaml`, `clients/js/pnpm-workspace.yaml`, `clients/js/tsconfig.json`, `clients/new-js/package.json`, `clients/new-js/packages/ai-embeddings/all/package.json`, `clients/new-js/packages/ai-embeddings/all/tsconfig.json`, `clients/new-js/packages/ai-embeddings/chroma-bm25/package.json`, `clients/new-js/packages/ai-embeddings/chroma-bm25/tsconfig.json`, `clients/new-js/packages/ai-embeddings/chroma-cloud-qwen/package.json`, `clients/new-js/packages/ai-embeddings/chroma-cloud-qwen/tsconfig.json`, `clients/new-js/packages/ai-embeddings/chroma-cloud-splade/package.json`
- Top extensions: `.rs` 653, `.py` 240, `.ts` 230, `.mdx` 125, `.json` 122, `.go` 98, `.sql` 95, `.md` 79, `.yaml` 77, `.png` 57, `.toml` 46, `.yml` 35
- CLI hints: clients/js/packages/chromadb/package.json: {"chroma":"dist/cli.mjs"}; clients/new-js/packages/chromadb/package.json: {"chroma":"dist/cli.mjs"}; pyproject.toml: {"chroma":"chromadb.cli.cli:app"}

### 31. weaviate/weaviate

- Source: `sources/weaviate__weaviate`
- GitHub: Weaviate is an open-source vector database that stores both objects and vectors, allowing for the combination of vector search with structured filtering with the fault tolerance and scalability of a cloud-native database​.
- Root entries: `.claude/`, `.codeclimate.yml`, `.dockerignore`, `.gitattributes`, `.github/`, `.gitignore`, `.golangci.yml`, `.goreleaser.yaml`, `.mockery.yaml`, `.pre-commit-config.yaml`, `.protolint.yaml`, `CITATION.cff`, `CLAUDE.md`, `CODE_OF_CONDUCT.md`, `CONTRIBUTING.md`, `Dockerfile`, `LICENSE`, `Makefile`, `README.md`, `adapters/`, `ci/`, `client/`, `cluster/`, `cmd/`
- Manifests: `Dockerfile`, `docker-compose.yml`, `go.mod`, `pyproject.toml`, `test/acceptance_with_go_client/go.mod`, `test/acceptance_with_python/requirements.txt`, `test/benchmark_bm25/go.mod`, `test/docker/mockoidc/Dockerfile`, `test/docker/mockoidchelper/Dockerfile`
- Top extensions: `.go` 4375, `.py` 53, `.sh` 43, `.json` 32, `.yaml` 27, `.yml` 26, `.s` 25, `.db` 21, `.c` 21, `.md` 18, `.proto` 17, `.bloom` 16
- CLI hints: manual inspection required

### 32. lancedb/lancedb

- Source: `sources/lancedb__lancedb`
- GitHub: Developer-friendly OSS embedded retrieval library for multimodal AI. Search More; Manage Less.
- Root entries: `.agents/`, `.bumpversion.toml`, `.cargo/`, `.github/`, `.gitignore`, `.pre-commit-config.yaml`, `AGENTS.md`, `CLAUDE.md`, `CONTRIBUTING.md`, `Cargo.lock`, `Cargo.toml`, `LICENSE`, `Makefile`, `README.md`, `REVIEW.md`, `RUST_THIRD_PARTY_LICENSES.html`, `about.hbs`, `about.toml`, `ci/`, `deny.toml`, `docker-compose.yml`, `dockerfiles/`, `docs/`, `java/`
- Manifests: `Cargo.toml`, `docker-compose.yml`, `dockerfiles/Dockerfile`, `docs/package.json`, `docs/requirements.txt`, `docs/tsconfig.json`, `nodejs/Cargo.toml`, `nodejs/__test__/tsconfig.json`, `nodejs/examples/package.json`, `nodejs/examples/pnpm-lock.yaml`, `nodejs/examples/pnpm-workspace.yaml`, `nodejs/examples/tsconfig.json`, `nodejs/npm/darwin-arm64/package.json`, `nodejs/npm/linux-arm64-gnu/package.json`, `nodejs/npm/linux-arm64-musl/package.json`, `nodejs/npm/linux-x64-gnu/package.json`, `nodejs/npm/linux-x64-musl/package.json`, `nodejs/npm/win32-arm64-msvc/package.json`, `nodejs/npm/win32-x64-msvc/package.json`, `nodejs/package.json`, `nodejs/pnpm-lock.yaml`, `nodejs/pnpm-workspace.yaml`, `nodejs/tsconfig.json`, `python/Cargo.toml`
- Top extensions: `.md` 160, `.py` 118, `.rs` 113, `.ts` 44, `.yml` 32, `.json` 20, `.png` 19, `.toml` 11, `.sh` 7, `.txt` 7, `.gitignore` 5, `.yaml` 5
- CLI hints: manual inspection required

### 33. pgvector/pgvector

- Source: `sources/pgvector__pgvector`
- GitHub: Open-source vector similarity search for Postgres
- Root entries: `.editorconfig`, `.github/`, `.gitignore`, `CHANGELOG.md`, `Dockerfile`, `LICENSE`, `META.json`, `Makefile`, `Makefile.win`, `README.md`, `sql/`, `src/`, `test/`, `vector.control`
- Manifests: `Dockerfile`
- Top extensions: `.sql` 51, `.pl` 45, `.c` 19, `.out` 14, `.h` 8, `.md` 2, `.pm` 2, `.editorconfig` 1, `.yml` 1, `.gitignore` 1, `dockerfile` 1, `license` 1
- CLI hints: manual inspection required

### 34. timescale/pgvectorscale

- Source: `sources/timescale__pgvectorscale`
- GitHub: Postgres extension for vector search (DiskANN), complements pgvector for performance and scale. Postgres OSS licensed.
- Root entries: `.cargo/`, `.dockerignore`, `.github/`, `.gitignore`, `.pre-commit-config.yaml`, `CONTRIBUTING.md`, `Cargo.toml`, `DEVELOPMENT.md`, `LICENSE`, `Makefile`, `NOTICE`, `README.md`, `TESTING.md`, `pgvectorscale/`, `scripts/`, `tests/`
- Manifests: `Cargo.toml`, `pgvectorscale/Cargo.toml`, `pgvectorscale/pgvectorscale_derive/Cargo.toml`, `scripts/requirements.txt`, `tests/requirements.txt`
- Top extensions: `.rs` 47, `.sql` 11, `.yml` 9, `.md` 5, `.toml` 4, `.yaml` 4, `.py` 4, `.gitignore` 2, `.sh` 2, `.txt` 2, `.dockerignore` 1, `codeowners` 1
- CLI hints: manual inspection required

### 35. facebookresearch/faiss

- Source: `sources/facebookresearch__faiss`
- GitHub: A library for efficient similarity search and clustering of dense vectors.
- Root entries: `.clang-format`, `.dockerignore`, `.github/`, `.gitignore`, `CHANGELOG.md`, `CMakeLists.txt`, `CODE_OF_CONDUCT.md`, `CONTRIBUTING.md`, `Doxyfile`, `INSTALL.md`, `LICENSE`, `README.md`, `THIRD_PARTY_NOTICES`, `benchs/`, `c_api/`, `cmake/`, `conda/`, `contrib/`, `demos/`, `faiss/`, `misc/`, `perf_tests/`, `pyproject-gpu.toml`, `pyproject.toml`
- Manifests: `faiss/cppcontrib/docker_dev/Dockerfile`, `pyproject.toml`
- Top extensions: `.cpp` 315, `.h` 308, `.py` 187, `.cu` 74, `.cuh` 65, `.md` 18, `.txt` 16, `.sh` 14, `.yml` 13, `.mm` 13, `.yaml` 5, `.cmake` 4
- CLI hints: manual inspection required

### 36. typesense/typesense

- Source: `sources/typesense__typesense`
- GitHub: Open Source alternative to Algolia + Pinecone and an Easier-to-Use alternative to ElasticSearch ⚡ 🔍 ✨ Fast, typo tolerant, in-memory fuzzy Search Engine for building delightful search experiences
- Root entries: `.bazelrc`, `.bazelversion`, `.github/`, `.gitignore`, `BUILD`, `CMakeLists.txt`, `CONTRIBUTING.md`, `DESIGN.md`, `LICENSE.txt`, `README.md`, `SECURITY.md`, `SHOWCASE.md`, `TODO.md`, `WORKSPACE`, `api_tests/`, `assets/`, `bazel/`, `benchmark/`, `build.sh`, `ci_build.sh`, `ci_build_v2.sh`, `cmake/`, `debian-pkg/`, `docker-build.sh`
- Manifests: `api_tests/bun.lock`, `api_tests/package.json`, `api_tests/tsconfig.json`, `benchmark/Dockerfile`, `benchmark/docker-compose.yml`, `benchmark/package.json`, `benchmark/pnpm-lock.yaml`, `benchmark/tsconfig.json`, `tests/package.json`, `tests/pnpm-lock.yaml`, `tests/tsconfig.json`
- Top extensions: `.cpp` 142, `.h` 103, `.ts` 65, `.build` 24, `.cmake` 18, `.patch` 15, `.md` 11, `.txt` 11, `build` 10, `.dockerfile` 10, `.jsonl` 10, `.sh` 8
- CLI hints: api_tests/package.json: {"typesense-api-tests":"./src/cli.ts"}; benchmark/package.json: {"ts-cli":"./dist/index.js"}

### 37. explodinggradients/ragas

- Source: `sources/explodinggradients__ragas`
- GitHub: Supercharge Your LLM Application Evaluations 🚀
- Root entries: `.claude/`, `.cursor/`, `.dockerignore`, `.gitattributes`, `.github/`, `.gitignore`, `.pre-commit-config.yaml`, `.readthedocs.yml`, `CLAUDE.md`, `CODE_OF_CONDUCT.md`, `CONTRIBUTING.md`, `LICENSE`, `Makefile`, `README.md`, `SECURITY.md`, `docs/`, `examples/`, `mkdocs-pdf.yml`, `mkdocs.yml`, `pyproject.toml`, `scripts/`, `src/`, `tests/`
- Manifests: `examples/pyproject.toml`, `examples/ragas_examples/improve_rag/pyproject.toml`, `examples/ragas_examples/rag_eval/pyproject.toml`, `pyproject.toml`, `tests/benchmarks/Dockerfile`
- Top extensions: `.py` 387, `.md` 163, `.png` 41, `.ipynb` 23, `.yml` 9, `.css` 9, `.json` 7, `.txt` 6, `.csv` 6, `.mdc` 5, `.js` 5, `.gif` 4
- CLI hints: examples/pyproject.toml: {"ragas-agent-evals":"ragas_examples.agent_evals.evals:main","ragas-benchmark-llm":"ragas_examples.benchmark_llm.evals:main","ragas-prompt-evals":"ragas_examples.prompt_evals.evals:main","ragas-rag-evals":"ragas_examples.rag_eval.evals:main","ragas-workflow-evals":"ragas_examples.workflow_eval.evals:main","ragas-improve-rag":"ragas_examples.improve_rag.evals:main","ragas-text2sql-evals":"ragas_examples.text2sql.evals:main","ragas-llamaindex-agent-evals":"ragas_examples.llamaIndex_agent_evals.evals:main","ragas-judge-alignment":"ragas_examples.judge_alignment.evals:main"}; pyproject.toml: {"ragas":"ragas.cli:app"}

### 38. promptfoo/promptfoo

- Source: `sources/promptfoo__promptfoo`
- GitHub: Test your prompts, agents, and RAGs. Red teaming/pentesting/vulnerability scanning for AI. Compare performance of GPT, Claude, Gemini, DeepSeek, and more. Simple declarative configs with command line and CI/CD integration.  Used by OpenAI and Anthropic.
- Root entries: `.agents/`, `.biomeignore`, `.claude-plugin/`, `.claude/`, `.cursor/`, `.devcontainer/`, `.dockerignore`, `.git-blame-ignore-revs`, `.github/`, `.gitignore`, `.husky/`, `.mailmap`, `.npmignore`, `.npmrc`, `.nvmrc`, `.prettierignore`, `.prettierrc.yaml`, `.release-please-manifest.json`, `.rubocop.yml`, `.ruff.toml`, `.vscode/`, `AGENTS.md`, `CHANGELOG.md`, `CITATION.cff`
- Manifests: `.devcontainer/docker-compose.yml`, `Dockerfile`, `code-scan-action/package.json`, `code-scan-action/tsconfig.json`, `examples/claude-agent-sdk/advanced/workspace/package.json`, `examples/claude-agent-sdk/working-dir/sample-project/package.json`, `examples/config-node-package-typescript/package.json`, `examples/config-node-package/package.json`, `examples/config-stateful-session-management/package.json`, `examples/config-ts/package.json`, `examples/config-ts/tsconfig.json`, `examples/config-websockets/basic/test-server/package.json`, `examples/config-websockets/streaming/server/package.json`, `examples/eval-bert-score/requirements.txt`, `examples/eval-f-score/requirements.txt`, `examples/eval-image-classification/requirements.txt`, `examples/eval-rag-full/requirements.txt`, `examples/integration-browser/headless/requirements.txt`, `examples/integration-crewai/requirements.txt`, `examples/integration-docker/code-generation-sandbox/requirements.txt`, `examples/integration-google-adk/requirements.txt`, `examples/integration-jest/package.json`, `examples/integration-langchain/requirements.txt`, `examples/integration-opentelemetry/javascript/package.json`
- Top extensions: `.ts` 1950, `.md` 833, `.tsx` 631, `.yaml` 625, `.png` 367, `.json` 166, `.jpg` 109, `.js` 106, `.py` 103, `.svg` 89, `.txt` 85, `.css` 75
- CLI hints: package.json: {"promptfoo":"dist/src/entrypoint.js","pf":"dist/src/entrypoint.js"}

### 39. confident-ai/deepeval

- Source: `sources/confident-ai__deepeval`
- GitHub: The LLM Evaluation Framework
- Root entries: `.claude-plugin/`, `.cursor-plugin/`, `.env.example`, `.github/`, `.gitignore`, `.pre-commit-config.yaml`, `.scripts/`, `.vscode/`, `CITATION.cff`, `CONTRIBUTING.md`, `LICENSE.md`, `MAINTAINERS.md`, `MANIFEST.in`, `README.md`, `assets/`, `deepeval/`, `demo_trace_scope/`, `docs/`, `examples/`, `manual_after_evals_iterator.py`, `poetry.lock`, `pyproject.toml`, `scripts/`, `skills/`
- Manifests: `docs/package.json`, `docs/tsconfig.json`, `docs/yarn.lock`, `poetry.lock`, `pyproject.toml`, `typescript/package.json`, `typescript/tsconfig.json`
- Top extensions: `.py` 923, `.json` 329, `.mdx` 206, `.ts` 175, `.tsx` 104, `.svg` 63, `.txt` 60, `.scss` 46, `.md` 33, `.png` 29, `.yml` 10, `.mjs` 10
- CLI hints: pyproject.toml: {"deepeval":"deepeval.cli.main:app"}

### 40. truera/trulens

- Source: `sources/truera__trulens`
- GitHub: Evaluation and Tracking for LLM Experiments and AI Agents
- Root entries: `.agents/`, `.azure_pipelines/`, `.gitattributes`, `.github/`, `.gitignore`, `.grit/`, `.pre-commit-config.yaml`, `.vscode/`, `AGENTS.md`, `CONTRIBUTING.md`, `CONTRIBUTORS.md`, `DEPRECATION.md`, `DEVELOPMENT.md`, `GOVERNANCE.md`, `LANGCHAIN_1X_MIGRATION.md`, `LICENSE`, `MAINTAINERS.md`, `Makefile`, `POLICIES.md`, `README.md`, `RELEASES.md`, `_trulens/`, `benchmarks/`, `conftest.py`
- Manifests: `examples/expositional/frameworks/openai_agent_sdk/openai_agent_sdk_snowflake_tools/frontend/package.json`, `examples/expositional/frameworks/openai_agent_sdk/openai_agent_sdk_snowflake_tools/frontend/tsconfig.json`, `examples/expositional/frameworks/openai_agent_sdk/openai_agent_sdk_snowflake_tools/frontend/vite.config.ts`, `examples/expositional/frameworks/openai_agent_sdk/openai_agent_sdk_snowflake_tools/monitoring_dashboard/pyproject.toml`, `examples/expositional/frameworks/openai_agent_sdk/openai_agent_sdk_snowflake_tools/pyproject.toml`, `examples/expositional/use_cases/snowflake-ai-stack-agentic-eval/requirements.txt`, `examples/expositional/use_cases/snowflake-ai-stack/requirements.txt`, `poetry.lock`, `pyproject.toml`, `src/apps/gepa/pyproject.toml`, `src/apps/langchain/pyproject.toml`, `src/apps/langgraph/pyproject.toml`, `src/apps/llamaindex/pyproject.toml`, `src/apps/nemo/pyproject.toml`, `src/benchmark/pyproject.toml`, `src/connectors/snowflake/pyproject.toml`, `src/core/pyproject.toml`, `src/core/trulens/core/utils/requirements.txt`, `src/dashboard/pyproject.toml`, `src/dashboard/react_components/record_viewer/package.json`, `src/dashboard/react_components/record_viewer/tsconfig.json`, `src/dashboard/react_components/record_viewer/vite.config.ts`, `src/dashboard/react_components/record_viewer_otel/package.json`, `src/dashboard/react_components/record_viewer_otel/tsconfig.json`
- Top extensions: `.py` 471, `.png` 148, `.ipynb` 127, `.md` 123, `.ts` 87, `.tsx` 64, `.json` 32, `.toml` 23, `.typed` 22, `.yaml` 19, `.svg` 13, `.scss` 13
- CLI hints: manual inspection required

### 41. Arize-ai/phoenix

- Source: `sources/Arize-ai__phoenix`
- GitHub: AI Observability & Evaluation
- Root entries: `.agents/`, `.claude/`, `.codex/`, `.cursor/`, `.dockerignore`, `.editorconfig`, `.eslintignore`, `.git-blame-ignore-revs`, `.github/`, `.gitignore`, `.mintignore`, `.nvmrc`, `.oxfmtrc.jsonc`, `.oxlintrc.json`, `.pre-commit-config.yaml`, `.prettierignore`, `.python-version`, `.readthedocs.yaml`, `.release-please-manifest.json`, `.tours/`, `.vale.ini`, `.vscode/`, `AGENTS.md`, `CHANGELOG.md`
- Manifests: `Dockerfile`, `api_reference/requirements.txt`, `app/package.json`, `app/pnpm-lock.yaml`, `app/pnpm-workspace.yaml`, `app/tsconfig.json`, `docker-compose.yml`, `examples/agent_framework_comparison/requirements.txt`, `examples/agents/requirements.txt`, `examples/code_gen_agent/requirements.txt`, `examples/computer_use_agent/Dockerfile`, `examples/computer_use_agent/requirements.txt`, `examples/cron-evals/requirements.txt`, `examples/llamaindex-workflows-research-agent/requirements.txt`, `examples/rag_agent/requirements.txt`, `internal_docs/vignettes/json-jsonb-demo/package.json`, `internal_docs/vignettes/json-jsonb-demo/tsconfig.json`, `js/benchmarks/evals-benchmarks/package.json`, `js/benchmarks/evals-benchmarks/tsconfig.json`, `js/examples/apps/cli-agent-starter-kit/docker-compose.yml`, `js/examples/apps/cli-agent-starter-kit/package.json`, `js/examples/apps/cli-agent-starter-kit/tsconfig.json`, `js/examples/apps/demo-document-relevancy-experiment/package.json`, `js/examples/apps/demo-document-relevancy-experiment/tsconfig.json`
- Top extensions: `.ts` 1796, `.py` 1250, `.tsx` 1140, `.mdx` 689, `.md` 350, `.json` 150, `.ipynb` 128, `.yaml` 83, `.j2` 78, `.yml` 61, `.txt` 44, `.gitignore` 27
- CLI hints: js/examples/apps/cli-agent-starter-kit/package.json: {"cli-agent":"./dist/cli.js"}; js/packages/phoenix-cli/package.json: {"phoenix-cli":"build/index.js","px":"build/index.js"}; js/packages/phoenix-mcp/package.json: {"@arizeai/phoenix-mcp":"./build/index.js"}; pyproject.toml: {"arize-phoenix":"phoenix.server.main:main","phoenix":"phoenix.server.main:main"}

### 42. langfuse/langfuse

- Source: `sources/langfuse__langfuse`
- GitHub: 🪢 Open source AI engineering platform: LLM evals, observability, metrics, prompt management, playground, datasets. Integrates with OpenTelemetry, LangChain, OpenAI SDK, LiteLLM, and more. 🍊YC W23 
- Root entries: `.agents/`, `.codespellrc`, `.devcontainer/`, `.dockerignore`, `.env.dev-azure.example`, `.env.dev-oci.example`, `.env.dev-redis-cluster.example`, `.env.dev.example`, `.env.prod.example`, `.env.test.example`, `.github/`, `.gitignore`, `.husky/`, `.nvmrc`, `.prettierignore`, `.semgrepignore`, `.vscode/`, `AGENTS.md`, `CLAUDE.md`, `CONTRIBUTING.md`, `LICENSE`, `README.cn.md`, `README.ja.md`, `README.kr.md`
- Manifests: `.devcontainer/Dockerfile`, `docker-compose.yml`, `ee/package.json`, `ee/tsconfig.json`, `package.json`, `packages/config-eslint/package.json`, `packages/config-typescript/package.json`, `packages/eslint-plugin/package.json`, `packages/eslint-plugin/tsconfig.json`, `packages/shared/package.json`, `packages/shared/tsconfig.json`, `pnpm-lock.yaml`, `pnpm-workspace.yaml`, `turbo.json`, `web/.storybook/tsconfig.json`, `web/Dockerfile`, `web/package.json`, `web/tsconfig.json`, `worker/Dockerfile`, `worker/package.json`, `worker/tsconfig.json`
- Top extensions: `.ts` 1794, `.tsx` 827, `.sql` 542, `.md` 228, `.json` 84, `.yml` 78, `.sh` 15, `.mjs` 12, `.yaml` 10, `.svg` 10, `.png` 9, `.example` 6
- CLI hints: manual inspection required

### 43. agenta-ai/agenta

- Source: `sources/agenta-ai__agenta`
- GitHub: The open-source LLMOps platform: prompt playground, prompt management, LLM evaluation, and LLM observability all in one place.
- Root entries: `.agents/`, `.all-contributorsrc`, `.better-commits.json`, `.claude/`, `.dockerignore`, `.github/`, `.gitignore`, `.gitleaks.toml`, `.gitleaksignore`, `.husky/`, `.mailmap`, `.pre-commit-config.yaml`, `AGENTS.md`, `CLAUDE.md`, `CODE_OF_CONDUCT.md`, `CONTRIBUTING.md`, `LICENSE`, `README.md`, `SECURITY.md`, `agents/`, `api/`, `clients/`, `docs/`, `ee/`
- Manifests: `api/ee/tests/manual/evaluations/sdk/requirements.txt`, `api/pyproject.toml`, `api/uv.lock`, `clients/python/pyproject.toml`, `clients/python/uv.lock`, `docs/package.json`, `docs/pnpm-lock.yaml`, `docs/tsconfig.json`, `examples/node/observability-opentelemetry/package.json`, `examples/node/observability-vercel-ai/package.json`, `examples/python/RAG_QA_chatbot/frontend/next.config.js`, `examples/python/RAG_QA_chatbot/frontend/package.json`, `examples/python/RAG_QA_chatbot/frontend/tsconfig.json`, `examples/python/RAG_QA_chatbot/pyproject.toml`, `examples/python/custom_workflows/ai-code-reviewer/requirements.txt`, `examples/python/custom_workflows/chain_of_prompts/requirements.txt`, `hosting/railway/oss/alembic/Dockerfile`, `hosting/railway/oss/api/Dockerfile`, `hosting/railway/oss/cron/Dockerfile`, `hosting/railway/oss/gateway/Dockerfile`, `hosting/railway/oss/redis/Dockerfile`, `hosting/railway/oss/services/Dockerfile`, `hosting/railway/oss/web/Dockerfile`, `hosting/railway/oss/worker-evaluations/Dockerfile`
- Top extensions: `.ts` 2777, `.py` 2118, `.json` 1179, `.tsx` 1083, `.mdx` 733, `.md` 647, `.png` 266, `.http` 73, `.sh` 39, `.yaml` 38, `.gitkeep` 34, `.yml` 33
- CLI hints: manual inspection required

### 44. BerriAI/litellm

- Source: `sources/BerriAI__litellm`
- GitHub: Python SDK, Proxy Server (AI Gateway) to call 100+ LLM APIs in OpenAI (or native) format, with cost tracking, guardrails, loadbalancing and logging. [Bedrock, Azure, OpenAI, VertexAI, Cohere, Anthropic, Sagemaker, HuggingFace, VLLM, NVIDIA NIM]
- Root entries: `.circleci/`, `.devcontainer/`, `.dockerignore`, `.env.example`, `.flake8`, `.git-blame-ignore-revs`, `.gitattributes`, `.gitguardian.yaml`, `.githooks/`, `.github/`, `.gitignore`, `.npmrc`, `.semgrep/`, `AGENTS.md`, `ARCHITECTURE.md`, `CLAUDE.md`, `CONTRIBUTING.md`, `Dockerfile`, `GEMINI.md`, `LICENSE`, `Makefile`, `README.md`, `backend/`, `ci_cd/`
- Manifests: `Dockerfile`, `backend/Dockerfile`, `cookbook/anthropic_agent_sdk/requirements.txt`, `cookbook/gollem_go_agent_framework/go.mod`, `cookbook/litellm-ollama-docker-image/Dockerfile`, `cookbook/litellm-ollama-docker-image/requirements.txt`, `cookbook/livekit_agent_sdk/requirements.txt`, `docker-compose.yml`, `enterprise/pyproject.toml`, `gateway/Dockerfile`, `litellm-proxy-extras/pyproject.toml`, `migrations/Dockerfile`, `package.json`, `pyproject.toml`, `tests/llm_translation/test_skills_data/slack-gif-creator/requirements.txt`, `tests/pass_through_tests/package.json`, `tests/proxy_admin_ui_tests/ui_unit_tests/package.json`, `tests/proxy_admin_ui_tests/ui_unit_tests/tsconfig.json`, `ui/Dockerfile`, `ui/litellm-dashboard/package.json`, `ui/litellm-dashboard/tsconfig.json`, `uv.lock`
- Top extensions: `.py` 4346, `.tsx` 876, `.ts` 303, `.yaml` 186, `.svg` 156, `.sql` 130, `.json` 128, `.txt` 126, `.md` 119, `.js` 113, `.png` 101, `.yml` 53
- CLI hints: pyproject.toml: {"litellm":"litellm:run_server","lite":"litellm.proxy.client.cli:cli","litellm-proxy":"litellm.proxy.client.cli:cli"}

### 45. stanfordnlp/dspy

- Source: `sources/stanfordnlp__dspy`
- GitHub: DSPy: The framework for programming—not prompting—language models
- Root entries: `.github/`, `.gitignore`, `.pre-commit-config.yaml`, `CONTRIBUTING.md`, `LICENSE`, `README.md`, `SECURITY.md`, `docs/`, `dspy/`, `pyproject.toml`, `tests/`, `uv.lock`
- Manifests: `.github/.internal_dspyai/pyproject.toml`, `docs/requirements.txt`, `pyproject.toml`, `uv.lock`
- Top extensions: `.py` 260, `.md` 167, `.png` 31, `.ipynb` 20, `.json` 15, `.svg` 13, `.yml` 10, `.js` 4, `.yaml` 3, `.html` 3, `.toml` 2, `.gitignore` 2
- CLI hints: manual inspection required

### 46. pydantic/pydantic-ai

- Source: `sources/pydantic__pydantic-ai`
- GitHub: AI Agent Framework, the Pydantic way
- Root entries: `.agents/`, `.claude/`, `.gemini/`, `.gitattributes`, `.github/`, `.gitignore`, `.pre-commit-config.yaml`, `AGENTS.md`, `CLAUDE.md`, `CONTRIBUTING.md`, `LICENSE`, `Makefile`, `README.md`, `agent_docs/`, `clai/`, `docs-site/`, `docs/`, `examples/`, `mkdocs.yml`, `pydantic_ai_slim/`, `pydantic_evals/`, `pydantic_graph/`, `pyproject.toml`, `scripts/`
- Manifests: `clai/pyproject.toml`, `docs-site/package.json`, `docs-site/tsconfig.json`, `examples/pyproject.toml`, `pydantic_ai_slim/pyproject.toml`, `pydantic_evals/pyproject.toml`, `pydantic_graph/pyproject.toml`, `pyproject.toml`, `uv.lock`
- Top extensions: `.yaml` 1146, `.py` 611, `.md` 240, `.yml` 27, `.png` 15, `.json` 8, `.toml` 7, `.sh` 6, `license` 6, `.svg` 4, `.typed` 4, `.ts` 3
- CLI hints: clai/pyproject.toml: {"clai":"clai:cli"}; pydantic_ai_slim/pyproject.toml: {"pai":"pydantic_ai._cli:cli_exit"}; pyproject.toml: {"pai":"pydantic_ai._cli:cli_exit"}

### 47. guardrails-ai/guardrails

- Source: `sources/guardrails-ai__guardrails`
- GitHub: Adding guardrails to large language models.
- Root entries: `.dockerignore`, `.github/`, `.gitignore`, `.pre-commit-config.yaml`, `CONTRIBUTING.md`, `LICENSE`, `Makefile`, `README.md`, `SECURITY_ADVISORY.md`, `codecov.yml`, `docs/`, `guardrails/`, `poetry.lock`, `pyproject.toml`, `pyrightconfig.json`, `server_ci/`, `test_spec.rail`, `tests/`
- Manifests: `poetry.lock`, `pyproject.toml`, `server_ci/Dockerfile`, `server_ci/requirements.txt`
- Top extensions: `.py` 351, `.txt` 70, `.ipynb` 37, `.rail` 20, `.md` 17, `.json` 13, `.yml` 11, `.sh` 9, `.svg` 4, `.sql` 3, `.dockerignore` 2, `.png` 2
- CLI hints: pyproject.toml: {"guardrails":"guardrails.cli:cli"}

### 48. humanlayer/humanlayer

- Source: `sources/humanlayer__humanlayer`
- GitHub: The best way to get AI coding agents to solve hard problems in complex codebases.
- Root entries: `.claude/`, `.github/`, `.gitignore`, `.npmrc`, `.pre-commit-config.yaml`, `CLAUDE.md`, `CONTRIBUTING.md`, `DEVELOPMENT.md`, `LICENSE`, `Makefile`, `README.md`, `apps/`, `biome.jsonc`, `bun.lock`, `claudecode-go/`, `docker-compose.yml`, `docs/`, `hack/`, `hld/`, `hlyr/`, `humanlayer-wui/`, `humanlayer.md`, `package.json`, `packages/`
- Manifests: `apps/daemon/package.json`, `apps/daemon/tsconfig.json`, `apps/react/package.json`, `apps/react/tsconfig.json`, `bun.lock`, `claudecode-go/go.mod`, `docker-compose.yml`, `docs/Dockerfile`, `hack/linear/bun.lock`, `hack/linear/package.json`, `hack/linear/tsconfig.json`, `hld/e2e/bun.lock`, `hld/e2e/package.json`, `hld/go.mod`, `hld/sdk/typescript/bun.lock`, `hld/sdk/typescript/package.json`, `hld/sdk/typescript/tsconfig.json`, `hlyr/bun.lock`, `hlyr/package.json`, `hlyr/tsconfig.json`, `humanlayer-wui/.storybook/tsconfig.json`, `humanlayer-wui/bun.lock`, `humanlayer-wui/package.json`, `humanlayer-wui/src-tauri/Cargo.toml`
- Top extensions: `.ts` 241, `.tsx` 171, `.go` 106, `.md` 81, `.png` 44, `.json` 43, `.sh` 16, `.gitignore` 14, `.yml` 8, `.lock` 8, `.css` 7, `makefile` 5
- CLI hints: hack/linear/package.json: {"linear":"./dist/linear-cli.js"}; hlyr/package.json: {"humanlayer":"dist/index.js","hlyr":"dist/index.js","codelayer":"dist/index.js","codelayer-nightly":"dist/index.js"}

### 49. microsoft/promptflow

- Source: `sources/microsoft__promptflow`
- GitHub: Build high-quality LLM apps - from prototyping, testing to production deployment and monitoring.
- Root entries: `.cspell.json`, `.devcontainer/`, `.github/`, `.gitignore`, `.pre-commit-config.yaml`, `CODE_OF_CONDUCT.md`, `CONTRIBUTING.md`, `LICENSE`, `README.md`, `SECURITY.md`, `SUPPORT.md`, `benchmark/`, `docs/`, `examples/`, `migration-guide/`, `pylintrc`, `scripts/`, `setup.cfg`, `src/`
- Manifests: `.devcontainer/Dockerfile`, `.devcontainer/requirements.txt`, `benchmark/promptflow-serve/mock_api/Dockerfile`, `benchmark/promptflow-serve/mock_api/requirements.txt`, `benchmark/promptflow-serve/pf_flows/flex_async/requirements.txt`, `benchmark/promptflow-serve/pf_flows/static_async/requirements.txt`, `benchmark/promptflow-serve/pf_flows/static_sync/requirements.txt`, `benchmark/promptflow-serve/requirements.txt`, `benchmark/promptflow-serve/test_runner/docker-compose.yml`, `docs/media/how-to-guides/how-to-enable-streaming-mode/scripts/requirements.txt`, `examples/connections/requirements.txt`, `examples/flex-flows/basic/requirements.txt`, `examples/flex-flows/chat-async-stream/requirements.txt`, `examples/flex-flows/chat-basic/requirements.txt`, `examples/flex-flows/chat-minimal/requirements.txt`, `examples/flex-flows/chat-stream/requirements.txt`, `examples/flex-flows/chat-with-functions/requirements.txt`, `examples/flex-flows/eval-checklist/requirements.txt`, `examples/flex-flows/eval-code-quality/requirements.txt`, `examples/flex-flows/eval-criteria-with-langchain/requirements.txt`, `examples/flows/chat/chat-basic-maf/requirements.txt`, `examples/flows/chat/chat-basic/requirements.txt`, `examples/flows/chat/chat-math-variant-maf/requirements.txt`, `examples/flows/chat/chat-math-variant/requirements.txt`
- Top extensions: `.py` 1637, `.yaml` 565, `.png` 276, `.md` 273, `.jsonl` 245, `.jinja2` 224, `.yml` 179, `.json` 169, `.txt` 146, `.example` 44, `.prompty` 43, `.ipynb` 34
- CLI hints: src/promptflow-azure/pyproject.toml: {"pfazure":"promptflow.azure._cli.entry:main"}; src/promptflow-devkit/pyproject.toml: {"pf":"promptflow._cli.pf:main"}

### 50. openai/evals

- Source: `sources/openai__evals`
- GitHub: Evals is a framework for evaluating LLMs and LLM systems, and an open-source registry of benchmarks.
- Root entries: `.gitattributes`, `.github/`, `.gitignore`, `.pre-commit-config.yaml`, `LICENSE.md`, `MANIFEST.in`, `Makefile`, `README.md`, `SECURITY.md`, `docs/`, `evals/`, `examples/`, `mypy.ini`, `pyproject.toml`, `scripts/`, `tests/`
- Manifests: `evals/elsuite/hr_ml_agent_bench/benchmarks/bipedal_walker/scripts/requirements.txt`, `evals/elsuite/hr_ml_agent_bench/benchmarks/cartpole/scripts/requirements.txt`, `evals/elsuite/hr_ml_agent_bench/benchmarks/cifar10/scripts/requirements.txt`, `evals/elsuite/hr_ml_agent_bench/benchmarks/humanoid/scripts/requirements.txt`, `evals/elsuite/hr_ml_agent_bench/benchmarks/imdb/scripts/requirements.txt`, `evals/elsuite/hr_ml_agent_bench/benchmarks/ogbn_arxiv/scripts/requirements.txt`, `evals/elsuite/hr_ml_agent_bench/benchmarks/spaceship_titanic/scripts/requirements.txt`, `evals/elsuite/hr_ml_agent_bench/requirements.txt`, `evals/elsuite/multistep_web_tasks/docker/dc-evals-bash/Dockerfile`, `evals/elsuite/multistep_web_tasks/docker/flask-playwright/Dockerfile`, `evals/elsuite/multistep_web_tasks/docker/homepage/Dockerfile`, `evals/elsuite/multistep_web_tasks/docker/homepage/requirements.txt`, `evals/elsuite/steganography/scripts/dataset/requirements.txt`, `evals/elsuite/text_compression/scripts/dataset/requirements.txt`, `evals/solvers/providers/google/requirements.txt`, `pyproject.toml`
- Top extensions: `.jsonl` 661, `.yaml` 524, `.py` 353, `.md` 42, `.txt` 39, `.sh` 30, `.png` 13, `.json` 10, `license` 10, `.csv` 9, `.gitignore` 7, `.ipynb` 5
- CLI hints: pyproject.toml: {"oaieval":"evals.cli.oaieval:main","oaievalset":"evals.cli.oaievalset:main"}

