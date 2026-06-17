# mlc-ai/mlc-llm 구조 분석

생성일: 2026-06-17T22:41:11.818Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/mlc-ai__mlc-llm |
| remote | https://github.com/mlc-ai/mlc-llm |
| HEAD | 2008fe8 (2026-05-11) Auto updated submodule references |
| branch | main |
| groups | adjacent-tech-50, previous-clone-inventory-107 |
| files | 693 |
| dirs | 206 |
| stack | Node/TypeScript/JavaScript, Python |

## 구조 해석

- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- 테스트 파일이 충분히 노출되어 기능 검증과 회귀 검증 흐름을 추적할 수 있다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `MLC LLM`, `About`, `Get Started`, `Citation`

> <div align="center" MLC LLM Universal LLM Deployment Engine with ML Compilation Get Started Documentation Blog </div About MLC LLM is a machine learning compiler and high performance deployment engine for large language models. The mission of this project is to enable everyone to develop, optimize, and deploy AI models natively on everyone's platforms. <div align="center" <table style="width 100%" <thead <tr <th style="width 15%" </th <th style="width 20%" AMD GPU</th <th style="width 20%" NVIDIA GPU</th <th style="width 20%" Apple GPU</th <th style="width 24%" Intel GPU</th </tr </thead <tbody <tr <td Linux / Win</td <td ✅ Vulkan, ROCm</td <td ✅ Vulkan, CUDA</td <td N/A</td <td ✅ Vulkan</td </tr <tr <td macOS</td <td ✅ Metal (dGPU)</td <td N/A</td <td ✅ Metal</td <td ✅ Metal (iGPU)</td </tr <tr <td Web Browser</td <td colspan=4 ✅ WebGPU and WASM </td </tr <tr <td iOS / iPadOS</td <td co

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .clang-format | file |
| .github | dir |
| .gitignore | file |
| .gitmodules | file |
| .pre-commit-config.yaml | file |
| .yamllint.yaml | file |
| 3rdparty | dir |
| android | dir |
| ci | dir |
| cmake | dir |
| CMakeLists.txt | file |
| CONTRIBUTORS.md | file |
| cpp | dir |
| docs | dir |
| examples | dir |
| ios | dir |
| LICENSE | file |
| NOTICE | file |
| pyproject.toml | file |
| python | dir |
| README.md | file |
| scripts | dir |
| site | dir |
| tests | dir |
| version.py | file |
| web | dir |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| python/ | 324 |
| cpp/ | 81 |
| android/ | 67 |
| tests/ | 56 |
| ios/ | 49 |
| docs/ | 37 |
| site/ | 23 |
| examples/ | 14 |
| .github/ | 12 |
| (root) | 12 |
| ci/ | 8 |
| scripts/ | 5 |
| web/ | 4 |
| cmake/ | 1 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| web/ | 4 | preferred |
| docs/ | 37 | preferred |
| examples/ | 14 | preferred |
| tests/ | 56 | preferred |
| scripts/ | 5 | preferred |
| python/ | 324 | large |
| python/mlc_llm/ | 322 | large |
| python/mlc_llm/model/ | 133 | large |
| cpp/ | 81 | large |
| android/ | 67 | large |
| tests/python/ | 54 | large |
| cpp/serve/ | 50 | large |
| ios/ | 49 | large |
| android/MLCChat/ | 30 | large |
| python/mlc_llm/conversation_template/ | 30 | large |
| ios/MLCChat/ | 28 | large |
| android/MLCEngineExample/ | 26 | large |
| python/mlc_llm/compiler_pass/ | 24 | large |
| site/ | 23 | large |
| android/MLCChat/app/ | 20 | large |
| ios/MLCChat/MLCChat/ | 20 | large |
| python/mlc_llm/serve/ | 20 | large |
| tests/python/serve/ | 19 | large |
| cpp/serve/engine_actions/ | 17 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `docs/requirements.txt`
- `examples/rest/nodejs/package.json`
- `examples/rest/nodejs/tsconfig.json`
- `pyproject.toml`
- `python/requirements.txt`

### package.json

| 경로 | 이름 | scripts | deps |
| --- | --- | --- | --- |
| examples/rest/nodejs/package.json | mlc-llm-js-examples | example | @types/node, dotenv, langchain, needle, openai, typescript |

### pyproject.toml

| 경로 | 이름 | poetry | uv | ruff | pytest |
| --- | --- | --- | --- | --- | --- |
| pyproject.toml | mlc_llm | false | false | true | false |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `README.md`
- `android/MLCChat/README.md`
- `android/MLCEngineExample/README.md`
- `android/README.md`
- `docs/.gitignore`
- `docs/Makefile`
- `docs/README.md`
- `docs/_static/img/code_completion.png`
- `docs/_static/img/ide_code_settings.png`
- `docs/_static/img/ide_code_templates.png`
- `docs/_static/img/mlc-logo-with-text-landscape.svg`
- `docs/_static/img/project-structure.svg`
- `docs/_static/img/project-workflow.svg`
- `docs/community/faq.rst`
- `docs/community/guideline.rst`
- `docs/compilation/compile_models.rst`
- `docs/compilation/configure_quantization.rst`
- `docs/compilation/convert_weights.rst`
- `docs/compilation/define_new_models.rst`
- `docs/compilation/package_libraries_and_weights.rst`
- `docs/conf.py`
- `docs/deploy/android.rst`
- `docs/deploy/cli.rst`
- `docs/deploy/ide_integration.rst`
- `docs/deploy/ios.rst`
- `docs/deploy/mlc_chat_config.rst`
- `docs/deploy/python_engine.rst`
- `docs/deploy/rest.rst`
- `docs/deploy/webllm.rst`
- `docs/get_started/introduction.rst`
- `docs/get_started/quick_start.rst`
- `docs/index.rst`
- `docs/install/conda.rst`
- `docs/install/emcc.rst`
- `docs/install/gpu.rst`
- `docs/install/mlc_llm.rst`
- `docs/install/tvm.rst`
- `docs/make.bat`
- `docs/microserving/tutorial.rst`
- `docs/privacy.rst`
- `docs/requirements.txt`
- `examples/rest/nodejs/README.MD`
- `ios/MLCChat/README.md`
- `ios/MLCEngineExample/README.md`
- `ios/MLCSwift/README.md`
- `ios/README.md`
- `tests/README.md`
- `web/README.md`

### 에이전트 지침 후보

_없음_

### 스펙/템플릿/명령/스킬 후보

_없음_

## 테스트 / CI / 배포 표면

### 테스트 후보

- `tests/README.md`
- `tests/cpp/conv_template_unittest.cc`
- `tests/python/__init__.py`
- `tests/python/compiler_pass/test_fuse_ft_dequantize_matmul_epilogue.py`
- `tests/python/conftest.py`
- `tests/python/conversation_template/test_conversation_protocol.py`
- `tests/python/conversation_template/test_llama_template.py`
- `tests/python/integration/test_model_compile.py`
- `tests/python/json_ffi/test_json_ffi_engine.py`
- `tests/python/json_ffi/test_json_ffi_engine_image.py`
- `tests/python/json_ffi/test_json_ffi_engine_mock.py`
- `tests/python/loader/test_awq.py`
- `tests/python/loader/test_huggingface.py`
- `tests/python/model/test_gemma3.py`
- `tests/python/model/test_gpt2.py`
- `tests/python/model/test_gptNeox.py`
- `tests/python/model/test_kv_cache.py`
- `tests/python/model/test_llama.py`
- `tests/python/model/test_llama_quantization.py`
- `tests/python/model/test_mistral.py`
- `tests/python/model/test_phi.py`
- `tests/python/model/test_qwen3_embedding.py`
- `tests/python/op/test_batch_spec_verify.py`
- `tests/python/op/test_fp8_block_matmul.py`
- `tests/python/op/test_mrope.py`
- `tests/python/op/test_top_p_pivot.py`
- `tests/python/op/test_tree_attn.py`
- `tests/python/op/test_two_stage_softmax.py`
- `tests/python/quantization/test_awq_quantization.py`
- `tests/python/quantization/test_group_quantization.py`
- `tests/python/router/test_router.py`
- `tests/python/serve/evaluate_engine.py`
- `tests/python/serve/server/conftest.py`
- `tests/python/serve/server/test_embedding_server.py`
- `tests/python/serve/server/test_server.py`
- `tests/python/serve/server/test_server_function_call.py`
- `tests/python/serve/server/test_server_image.py`
- `tests/python/serve/test_embedding_engine.py`
- `tests/python/serve/test_event_trace_recorder.py`
- `tests/python/serve/test_radix_tree.py`
- `tests/python/serve/test_serve_async_engine.py`
- `tests/python/serve/test_serve_async_engine_spec.py`
- `tests/python/serve/test_serve_engine.py`
- `tests/python/serve/test_serve_engine_grammar.py`
- `tests/python/serve/test_serve_engine_image.py`
- `tests/python/serve/test_serve_engine_mock.py`
- `tests/python/serve/test_serve_engine_prefix_cache.py`
- `tests/python/serve/test_serve_engine_rnn.py`
- `tests/python/serve/test_serve_engine_spec.py`
- `tests/python/serve/test_serve_sync_engine.py`
- `tests/python/support/test_auto_config.py`
- `tests/python/support/test_auto_target.py`
- `tests/python/support/test_auto_weight.py`
- `tests/python/support/test_cli_convert_weight.py`
- `tests/python/support/test_convert_weight_lora_merge.py`
- `tests/python/tokenizers/test_streamer.py`

### CI/Docker 후보

- `.github/workflows/documentation.yaml`
- `.github/workflows/lint.yml`
- `.github/workflows/update-relax.yaml`
- `.github/workflows/windows-build.yaml`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .py | 389 |
| .cc | 44 |
| .h | 41 |
| .rst | 25 |
| .md | 22 |
| .swift | 18 |
| .xml | 17 |
| .json | 14 |
| .kt | 14 |
| .sh | 11 |
| .png | 10 |
| .svg | 10 |
| .gitignore | 8 |
| .gradle | 7 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `web/ 내부 책임 분리`
- `docs/ 내부 책임 분리`
- `examples/ 내부 책임 분리`
- `tests/ 내부 책임 분리`
- `scripts/ 내부 책임 분리`
- `docs/requirements.txt 실행 스크립트와 패키지 경계`
- `examples/rest/nodejs/package.json 실행 스크립트와 패키지 경계`
- `examples/rest/nodejs/tsconfig.json 실행 스크립트와 패키지 경계`
- `pyproject.toml 실행 스크립트와 패키지 경계`
- `python/requirements.txt 실행 스크립트와 패키지 경계`

