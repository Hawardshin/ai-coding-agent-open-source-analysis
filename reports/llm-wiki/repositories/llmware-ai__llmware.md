# llmware-ai/llmware 구조 분석

생성일: 2026-06-17T22:56:52.162Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/llmware-ai__llmware |
| remote | https://github.com/llmware-ai/llmware |
| HEAD | 081bc08 (2026-05-17) Merge pull request #1302 from llmware-ai/update-051726-1 |
| branch | main |
| groups | llm-wiki-100 |
| files | 546 |
| dirs | 70 |
| stack | Python |

## 구조 해석

- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `llmware`, `🧰🛠️ Unified framework for building knowledge-based local, private, secure LLM-based applications`, `🎯  Key features`, `300+ Models in Catalog with 50+ RAG-optimized BLING, DRAGON and Industry BERT models`, `Full support for GGUF, OpenVINO, Onnxruntime, HuggingFace, Sentence Transformers and major API-based models`, `Easy to extend to add custom models - see examples`, `all models accessed through the ModelCatalog`, `to use any model in the ModelCatalog - "load_model" method and pass the model_name parameter`, `call model with: inference`, `call model with: stream`, `to integrate model into a Prompt`, `to parse and text chunk a set of documents (pdf, pptx, docx, xlsx, txt, csv, md, json/jsonl, wav, png, jpg, html)`, `step 1 - create a library, which is the 'knowledge-base container' construct`, `- libraries have both text collection (DB) resources, and file resources (e.g., llmware_data/accounts/{library_name})`, `- embeddings and queries are run against a library`, `step 2 - add_files is the universal ingestion function - point it at a local file folder with mixed file types`, `- files will be routed by file extension to the correct parser, parsed, text chunked and indexed in text collection DB`, `to install an embedding on a library - pick an embedding model and vector_db`

> llmware 🧰🛠️ Unified framework for building knowledge based local, private, secure LLM based applications llmware is optimized for AI PC and local laptop, edge and self hosted deployment across a wide range of Windows, Mac and Linux platforms, with support for GGUF, OpenVINO, ONNXRuntime, ONNXRuntime QNN (Qualcomm), WindowsLocalFoundry, and Pytorch, providing a high level interface that makes it easy to leverage the right inferencing technology optimized for the target platform. llmware has two main components 1. Model catalog with 300+ models models prepackaged in quantized, optimized formats, to leverage on device GPU and NPU capabilities, with support for major open source model families and 50+ llmware finetuned SLIM, Bling, Dragon and Industry Bert models specialized for key tasks in enterprise process automation. Also supports leading cloud models from OpenAI, Anthropic and Google

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .github | dir |
| .gitignore | file |
| .python-version | file |
| docs | dir |
| LICENSE | file |
| llmware | dir |
| NOTICE | file |
| README.md | file |
| repo_docs | dir |
| scripts | dir |
| setup.py | file |
| solutions | dir |
| tests | dir |
| tutorials | dir |
| welcome_to_llmware_windows.sh | file |
| welcome_to_llmware.sh | file |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| solutions/ | 202 |
| llmware/ | 190 |
| docs/ | 62 |
| tutorials/ | 45 |
| tests/ | 20 |
| scripts/ | 13 |
| (root) | 8 |
| repo_docs/ | 5 |
| .github/ | 1 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| docs/ | 62 | preferred |
| tests/ | 20 | preferred |
| scripts/ | 13 | preferred |
| solutions/ | 202 | large |
| llmware/ | 190 | large |
| llmware/lib/ | 173 | large |
| llmware/lib/gguf/ | 89 | large |
| tutorials/ | 45 | large |
| solutions/slim_agents/ | 39 | large |
| tutorials/notebooks/ | 39 | large |
| llmware/lib/windows/ | 36 | large |
| llmware/lib/linux/ | 35 | large |
| solutions/sources/ | 32 | large |
| solutions/gguf/ | 26 | large |
| solutions/models/ | 26 | large |
| solutions/use_cases/ | 23 | large |
| solutions/embeddings/ | 19 | large |
| docs/components/ | 15 | large |
| tutorials/notebooks/fast_start_examples/ | 14 | large |
| docs/examples/ | 13 | large |
| llmware/lib/darwin/ | 13 | large |
| solutions/use_cases/lecture_tool/ | 13 | large |
| tutorials/notebooks/NoteBook_Examples/ | 12 | large |
| solutions/openvino/ | 11 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `llmware/requirements.txt`
- `scripts/docker/Dockerfile`
- `solutions/use_cases/lecture_tool/requirements.txt`

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `README.md`
- `docs/1.0.4`
- `docs/3.4.2`
- `docs/Gemfile`
- `docs/Gemfile.lock`
- `docs/_config.yml`
- `docs/_includes/footer_custom.html`
- `docs/_includes/head_custom.html`
- `docs/assets/images/favicon.ico`
- `docs/assets/images/hf-logo.svg`
- `docs/assets/images/llmware_logo_color_cropped.png`
- `docs/community/community.md`
- `docs/community/faq.md`
- `docs/community/join_our_community.md`
- `docs/community/need_help.md`
- `docs/community/troubleshooting.md`
- `docs/components/agent_inference_server.md`
- `docs/components/agents.md`
- `docs/components/components.md`
- `docs/components/data_stores.md`
- `docs/components/embedding_models.md`
- `docs/components/gguf.md`
- `docs/components/library.md`
- `docs/components/model_catalog.md`
- `docs/components/prompt_with_sources.md`
- `docs/components/query.md`
- `docs/components/rag_optimized_models.md`
- `docs/components/release_history.md`
- `docs/components/slim_models.md`
- `docs/components/vector_databases.md`
- `docs/components/whisper_cpp.md`
- `docs/contributing/code.md`
- `docs/contributing/contributing.md`
- `docs/contributing/documentation.md`
- `docs/examples/agents.md`
- `docs/examples/datasets.md`
- `docs/examples/embedding.md`
- `docs/examples/examples.md`
- `docs/examples/getting_started.md`
- `docs/examples/models.md`
- `docs/examples/notebooks.md`
- `docs/examples/parsing.md`
- `docs/examples/prompts.md`
- `docs/examples/retrieval.md`
- `docs/examples/structured_tables.md`
- `docs/examples/ui.md`
- `docs/examples/use_cases.md`
- `docs/getting_started/clone_repo.md`
- `docs/getting_started/fast_start.md`
- `docs/getting_started/getting_started.md`
- ... 25 more

### 에이전트 지침 후보

- `docs/components/agents.md`
- `docs/examples/agents.md`

### 스펙/템플릿/명령/스킬 후보

_없음_

## 테스트 / CI / 배포 표면

### 테스트 후보

- `tests/README.md`
- `tests/configs/test_account_overrides.py`
- `tests/configs/test_path_overrides.py`
- `tests/embeddings/test_all_embedding_dbs.py`
- `tests/embeddings/test_embedding_model_load.py`
- `tests/embeddings/test_install_embeddings.py`
- `tests/embeddings/test_sentence_transformers_load.py`
- `tests/library/test_library.py`
- `tests/models/test_agent_llmfx_process.py`
- `tests/models/test_cloud_model_providers.py`
- `tests/models/test_cohere_command_r_model.py`
- `tests/models/test_gguf_model_load.py`
- `tests/models/test_hf_model_load_prompt.py`
- `tests/models/test_prompt_benchmark_test.py`
- `tests/models/test_slim_fx_model_load.py`
- `tests/models/test_whisper_cpp_model_load.py`
- `tests/retrieval/test_search_in_memory.py`
- `tests/run-tests.py`
- `tests/set-env.sh`
- `tests/utils.py`

### CI/Docker 후보

- `.github/workflows/pages.yml`
- `scripts/devcontainer/docker-compose.yaml`
- `scripts/docker/Dockerfile`
- `scripts/docker/docker-compose-neo4j.yaml`
- `scripts/docker/docker-compose-pgvector.yaml`
- `scripts/docker/docker-compose-qdrant.yaml`
- `scripts/docker/docker-compose-redis-stack.yaml`
- `scripts/docker/docker-compose.yaml`
- `scripts/docker/docker-compose_mongo_milvus.yaml`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .py | 232 |
| .md | 68 |
| .dll | 64 |
| .ipynb | 31 |
| .so | 29 |
| .0 | 22 |
| .dylib | 19 |
| .1 | 12 |
| .yaml | 7 |
| .5 | 6 |
| .sh | 5 |
| .3 | 4 |
| .8 | 4 |
| .2 | 3 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `docs/ 내부 책임 분리`
- `tests/ 내부 책임 분리`
- `scripts/ 내부 책임 분리`
- `solutions/ 내부 책임 분리`
- `llmware/ 내부 책임 분리`
- `llmware/requirements.txt 실행 스크립트와 패키지 경계`
- `scripts/docker/Dockerfile 실행 스크립트와 패키지 경계`
- `solutions/use_cases/lecture_tool/requirements.txt 실행 스크립트와 패키지 경계`

