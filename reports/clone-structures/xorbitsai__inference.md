# xorbitsai/inference 구조 분석

생성일: 2026-06-17T22:41:11.818Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/xorbitsai__inference |
| remote | https://github.com/xorbitsai/inference |
| HEAD | 1fbae04 (2026-06-12) fix(monitor): correct alert rule labels/expressions and add 4 new rules (#5016) |
| branch | main |
| groups | adjacent-tech-50, previous-clone-inventory-107 |
| files | 1884 |
| dirs | 350 |
| stack | Node/TypeScript/JavaScript, Python |

## 구조 해석

- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- 스펙/템플릿/명령/스킬 아티팩트가 있어 에이전트나 SDD 워크플로우가 저장소 구조의 일부다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- 테스트 파일이 충분히 노출되어 기능 검증과 회귀 검증 흐름을 추적할 수 있다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `Xorbits Inference: Model Serving Made Easy 🤖`, `🔥 Hot Topics`, `Framework Enhancements`, `New Models`, `Integrations`, `Key Features`, `Why Xinference`, `Using Xinference`, `Staying Ahead`, `Getting Started`, `Jupyter Notebook`, `Docker`, `K8s via helm`, `add repo`, `update indexes and query xinference versions`, `install xinference`, `Quick Start`, `Getting involved`

> <div align="center" <img src="./assets/xorbits logo.png" width="180px" alt="xorbits" / Xorbits Inference Model Serving Made Easy 🤖 <p align="center" <a href="https //xinference.io/en" Xinference Enterprise</a · <a href="https //inference.readthedocs.io/en/latest/getting started/installation.html installation" Self hosting</a · <a href="https //inference.readthedocs.io/" Documentation</a </p <p align="center" <a href="./README.md" <img alt="README in English" src="https //img.shields.io/badge/English 454545?style=for the badge" </a <a href="./README zh CN.md" <img alt="简体中文版自述文件" src="https //img.shields.io/badge/中文介绍 d9d9d9?style=for the badge" </a <a href="./README ja JP.md" <img alt="日本語のREADME" src="https //img.shields.io/badge/日本語 d9d9d9?style=for the badge" </a </p </div <br / Xorbits Inference(Xinference) is a powerful and versatile library designed to serve language, speech recog

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .dockerignore | file |
| .gitattributes | file |
| .github | dir |
| .gitignore | file |
| .pre-commit-config.yaml | file |
| .readthedocs.yaml | file |
| AGENTS.md | file |
| assets | dir |
| benchmark | dir |
| CLAUDE.md | other |
| doc | dir |
| examples | dir |
| frontend | dir |
| LICENSE | file |
| MANIFEST.in | file |
| monitor | dir |
| pyproject.toml | file |
| README_ja_JP.md | file |
| README_zh_CN.md | file |
| README.md | file |
| setup.cfg | file |
| setup.py | file |
| versioneer.py | file |
| xinference | dir |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| xinference/ | 1138 |
| doc/ | 548 |
| frontend/ | 117 |
| monitor/ | 28 |
| (root) | 15 |
| examples/ | 14 |
| .github/ | 10 |
| benchmark/ | 8 |
| assets/ | 6 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| frontend/ | 117 | preferred |
| examples/ | 14 | preferred |
| xinference/ | 1138 | large |
| xinference/thirdparty/ | 687 | large |
| doc/ | 548 | large |
| doc/source/ | 534 | large |
| doc/source/models/ | 341 | large |
| xinference/model/ | 261 | large |
| xinference/thirdparty/indextts/ | 196 | large |
| doc/source/locale/ | 144 | large |
| xinference/model/llm/ | 114 | large |
| xinference/thirdparty/fish_speech/ | 110 | large |
| frontend/src/ | 106 | large |
| xinference/ui/ | 84 | large |
| xinference/ui/web/ | 78 | large |
| xinference/thirdparty/melo/ | 72 | large |
| frontend/src/components/ | 66 | large |
| xinference/thirdparty/f5_tts/ | 50 | large |
| xinference/thirdparty/cosyvoice/ | 49 | large |
| xinference/thirdparty/matcha/ | 45 | large |
| xinference/model/audio/ | 40 | large |
| xinference/api/ | 36 | large |
| xinference/thirdparty/audiotools/ | 32 | large |
| xinference/thirdparty/megatts3/ | 32 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `frontend/package.json`
- `frontend/tsconfig.json`
- `monitor/filebeat/docker-compose.yml`
- `pyproject.toml`
- `xinference/deploy/docker/Dockerfile`
- `xinference/deploy/docker/docker-compose.yml`
- `xinference/ui/web/ui/package.json`

### package.json

| 경로 | 이름 | scripts | deps |
| --- | --- | --- | --- |
| frontend/package.json | inference-frontend | dev, build, start, lint, format | @radix-ui/react-alert-dialog, @radix-ui/react-checkbox, @radix-ui/react-collapsible, @radix-ui/react-dialog, @radix-ui/react-dropdown-menu, @radix-ui/react-icons, @radix-ui/react-label, @radix-ui/react-popover, @radix-ui/react-progress, @radix-ui/react-radio-group, @radix-ui/react-scroll-area, @radix-ui/react-select, @radix-ui/react-separator, @radix-ui/react-slider |
| xinference/ui/web/ui/package.json | xinference-ui | start, build, test, eject, format | @emotion/react, @emotion/styled, @fullcalendar/core, @fullcalendar/daygrid, @fullcalendar/list, @fullcalendar/timegrid, @mui/icons-material, @mui/lab, @mui/material, @mui/system, @mui/x-data-grid, @mui/x-date-pickers, @nivo/bar, @nivo/core |

### pyproject.toml

| 경로 | 이름 | poetry | uv | ruff | pytest |
| --- | --- | --- | --- | --- | --- |
| pyproject.toml |  | false | false | false | true |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `README.md`
- `benchmark/README.md`
- `doc/Makefile`
- `doc/source/_static/actor.svg`
- `doc/source/_static/custom.css`
- `doc/source/_static/distributed_inference.png`
- `doc/source/_static/favicon.svg`
- `doc/source/_static/hf-pipeline.png`
- `doc/source/_static/launch_env.png`
- `doc/source/_static/limit_mm_per_prompt.png`
- `doc/source/_static/manage_virtual_envs1.png`
- `doc/source/_static/manage_virtual_envs2.png`
- `doc/source/_static/model_update.png`
- `doc/source/_static/model_virtual_env.png`
- `doc/source/_static/modelscope-pipeline.png`
- `doc/source/_static/qwen-image-lightning.png`
- `doc/source/_static/switcher.json`
- `doc/source/_static/xllamacpp_param.png`
- `doc/source/conf.py`
- `doc/source/development/contributing_codebase.rst`
- `doc/source/development/contributing_environment.rst`
- `doc/source/development/index.rst`
- `doc/source/development/xinference_internals.rst`
- `doc/source/examples/ai_podcast.rst`
- `doc/source/examples/chatbot.rst`
- `doc/source/examples/gradio_chatinterface.rst`
- `doc/source/examples/index.rst`
- `doc/source/examples/langchain_streamlit_doc_chat.rst`
- `doc/source/examples/pdf_chatbot.rst`
- `doc/source/gen_docs.py`
- `doc/source/getting_started/environments.rst`
- `doc/source/getting_started/index.rst`
- `doc/source/getting_started/installation.rst`
- `doc/source/getting_started/installation_npu.rst`
- `doc/source/getting_started/logging.rst`
- `doc/source/getting_started/release_notes.rst`
- `doc/source/getting_started/troubleshooting.rst`
- `doc/source/getting_started/using_docker_image.rst`
- `doc/source/getting_started/using_kubernetes.rst`
- `doc/source/getting_started/using_xinference.rst`
- `doc/source/index.rst`
- `doc/source/locale/zh_CN/LC_MESSAGES/development/contributing_codebase.po`
- `doc/source/locale/zh_CN/LC_MESSAGES/development/contributing_environment.po`
- `doc/source/locale/zh_CN/LC_MESSAGES/development/index.po`
- `doc/source/locale/zh_CN/LC_MESSAGES/development/xinference_internals.po`
- `doc/source/locale/zh_CN/LC_MESSAGES/examples/ai_podcast.po`
- `doc/source/locale/zh_CN/LC_MESSAGES/examples/chatbot.po`
- `doc/source/locale/zh_CN/LC_MESSAGES/examples/gradio_chatinterface.po`
- `doc/source/locale/zh_CN/LC_MESSAGES/examples/index.po`
- `doc/source/locale/zh_CN/LC_MESSAGES/examples/langchain_streamlit_doc_chat.po`
- ... 30 more

### 에이전트 지침 후보

- `AGENTS.md`

### 스펙/템플릿/명령/스킬 후보

- `doc/templates/audio.rst.jinja`
- `doc/templates/audio_index.rst.jinja`
- `doc/templates/embedding.rst.jinja`
- `doc/templates/embedding_index.rst.jinja`
- `doc/templates/image.rst.jinja`
- `doc/templates/image_index.rst.jinja`
- `doc/templates/llm.rst.jinja`
- `doc/templates/llm_index.rst.jinja`
- `doc/templates/metrics.jinja`
- `doc/templates/rerank.rst.jinja`
- `doc/templates/rerank_index.rst.jinja`
- `doc/templates/video.rst.jinja`
- `doc/templates/video_index.rst.jinja`
- `xinference/thirdparty/audiotools/core/templates/__init__.py`
- `xinference/thirdparty/audiotools/core/templates/headers.html`
- `xinference/thirdparty/audiotools/core/templates/pandoc.css`
- `xinference/thirdparty/audiotools/core/templates/widget.html`

## 테스트 / CI / 배포 표면

### 테스트 후보

- `xinference/api/tests/__init__.py`
- `xinference/api/tests/test_admin.py`
- `xinference/api/tests/test_launch_history.py`
- `xinference/api/tests/test_utils.py`
- `xinference/client/tests/__init__.py`
- `xinference/client/tests/test_async_client.py`
- `xinference/client/tests/test_async_client_with_auth.py`
- `xinference/client/tests/test_client.py`
- `xinference/client/tests/test_client_with_auth.py`
- `xinference/core/tests/__init__.py`
- `xinference/core/tests/test_cluster_metrics.py`
- `xinference/core/tests/test_continuous_batching.py`
- `xinference/core/tests/test_heartbeat.py`
- `xinference/core/tests/test_launch_strategy.py`
- `xinference/core/tests/test_metrics.py`
- `xinference/core/tests/test_model.py`
- `xinference/core/tests/test_progressor.py`
- `xinference/core/tests/test_restful_api.py`
- `xinference/core/tests/test_types.py`
- `xinference/core/tests/test_utils.py`
- `xinference/core/tests/test_worker.py`
- `xinference/deploy/test/__init__.py`
- `xinference/deploy/test/test_cmdline.py`
- `xinference/deploy/test/test_utils.py`
- `xinference/model/audio/tests/__init__.py`
- `xinference/model/audio/tests/basic_ref_en.wav`
- `xinference/model/audio/tests/bbc_news.npy`
- `xinference/model/audio/tests/bbc_news.wav`
- `xinference/model/audio/tests/common_voice_zh-CN_38026095.mp3`
- `xinference/model/audio/tests/cross_lingual_prompt.wav`
- `xinference/model/audio/tests/jfk.flac`
- `xinference/model/audio/tests/test_chattts.py`
- `xinference/model/audio/tests/test_cosyvoice.py`
- `xinference/model/audio/tests/test_f5tts.py`
- `xinference/model/audio/tests/test_f5tts_mlx.py`
- `xinference/model/audio/tests/test_fish_speech.py`
- `xinference/model/audio/tests/test_funasr.py`
- `xinference/model/audio/tests/test_kokoro.py`
- `xinference/model/audio/tests/test_megatts.py`
- `xinference/model/audio/tests/test_melotts.py`
- `xinference/model/audio/tests/test_whisper.py`
- `xinference/model/audio/tests/test_whisper_mlx.py`
- `xinference/model/audio/tests/zero_shot_prompt.wav`
- `xinference/model/embedding/flag/tests/__init__.py`
- `xinference/model/embedding/flag/tests/test_flag.py`
- `xinference/model/embedding/llama_cpp/tests/__init__.py`
- `xinference/model/embedding/llama_cpp/tests/test_llama_cpp.py`
- `xinference/model/embedding/sentence_transformers/tests/__init__.py`
- `xinference/model/embedding/sentence_transformers/tests/test_jina_task_mapping.py`
- `xinference/model/embedding/sentence_transformers/tests/test_jina_v5_omni_shapes.py`
- `xinference/model/embedding/sentence_transformers/tests/test_sentence_transformers.py`
- `xinference/model/embedding/tests/__init__.py`
- `xinference/model/embedding/tests/test_embedding_models.py`
- `xinference/model/embedding/tests/test_integrated_embedding.py`
- `xinference/model/embedding/tests/test_qwen3_vl_engine_params.py`
- `xinference/model/embedding/vllm/tests/__init__.py`
- `xinference/model/embedding/vllm/tests/test_vllm_embedding.py`
- `xinference/model/flexible/tests/__init__.py`
- `xinference/model/flexible/tests/test_flexible_models.py`
- `xinference/model/image/ocr/tests/__init__.py`
- `xinference/model/image/ocr/tests/test_deepseek_ocr_safe_eval.py`
- `xinference/model/image/tests/__init__.py`
- `xinference/model/image/tests/test_got_ocr2.py`
- `xinference/model/image/tests/test_stable_diffusion.py`
- `xinference/model/llm/llama_cpp/tests/__init__.py`
- `xinference/model/llm/llama_cpp/tests/assets/surprise.png`
- `xinference/model/llm/llama_cpp/tests/test_gguf.py`
- `xinference/model/llm/llama_cpp/tests/test_structured.py`
- `xinference/model/llm/lmdeploy/tests/__init__.py`
- `xinference/model/llm/mlx/tests/__init__.py`
- `xinference/model/llm/mlx/tests/fish.png`
- `xinference/model/llm/mlx/tests/test_distributed_model.py`
- `xinference/model/llm/mlx/tests/test_mlx.py`
- `xinference/model/llm/tests/__init__.py`
- `xinference/model/llm/tests/test_harmony.py`
- `xinference/model/llm/tests/test_llm_family.py`
- `xinference/model/llm/tests/test_llm_model.py`
- `xinference/model/llm/tests/test_memory_estimate.py`
- `xinference/model/llm/tests/test_multimodal.py`
- `xinference/model/llm/tests/test_stream_options.py`
- ... 31 more

### CI/Docker 후보

- `.github/workflows/assign.yaml`
- `.github/workflows/docker-cd.yaml`
- `.github/workflows/issue.yaml`
- `.github/workflows/pr_auto_run_gen_docs.yaml`
- `.github/workflows/python.yaml`
- `.github/workflows/release.yaml`
- `monitor/filebeat/docker-compose.yml`
- `xinference/deploy/docker/Dockerfile`
- `xinference/deploy/docker/docker-compose-distributed.yml`
- `xinference/deploy/docker/docker-compose.yml`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .py | 954 |
| .rst | 372 |
| .po | 144 |
| .tsx | 82 |
| .js | 68 |
| .json | 38 |
| .png | 27 |
| .ts | 23 |
| .md | 22 |
| .yaml | 19 |
| .yml | 16 |
| .txt | 15 |
| .jinja | 13 |
| .css | 9 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `frontend/ 내부 책임 분리`
- `examples/ 내부 책임 분리`
- `xinference/ 내부 책임 분리`
- `xinference/thirdparty/ 내부 책임 분리`
- `doc/ 내부 책임 분리`
- `doc/templates/audio.rst.jinja 스펙/명령 의미`
- `doc/templates/audio_index.rst.jinja 스펙/명령 의미`
- `doc/templates/embedding.rst.jinja 스펙/명령 의미`
- `doc/templates/embedding_index.rst.jinja 스펙/명령 의미`
- `doc/templates/image.rst.jinja 스펙/명령 의미`
- `frontend/package.json 실행 스크립트와 패키지 경계`
- `frontend/tsconfig.json 실행 스크립트와 패키지 경계`
- `monitor/filebeat/docker-compose.yml 실행 스크립트와 패키지 경계`
- `pyproject.toml 실행 스크립트와 패키지 경계`
- `xinference/deploy/docker/Dockerfile 실행 스크립트와 패키지 경계`

