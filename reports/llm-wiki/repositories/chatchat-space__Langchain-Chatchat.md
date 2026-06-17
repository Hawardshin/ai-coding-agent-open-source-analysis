# chatchat-space/Langchain-Chatchat 구조 분석

생성일: 2026-06-17T22:56:52.162Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/chatchat-space__Langchain-Chatchat |
| remote | https://github.com/chatchat-space/Langchain-Chatchat |
| HEAD | 49165d6 (2025-11-10) Refactor tool message formatting and enhance error handling in all_tools.py; update nest_asyncio dependency in pyproject.toml (#5408) |
| branch | master |
| groups | llm-wiki-100 |
| files | 523 |
| dirs | 138 |
| stack | Python |

## 구조 해석

- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- 테스트 파일이 충분히 노출되어 기능 검증과 회귀 검증 흐름을 추적할 수 있다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `目录`, `概述`, `功能介绍`, `0.3.x 版本功能一览`, `已支持的模型部署框架与模型`, `快速上手`, `pip 安装部署`, `on linux or macos`, `on windows`, `其它配置`, `源码安装部署/开发部署`, `Docker 部署`, `旧版本迁移`, `项目里程碑`, `协议`, `联系我们`, `Telegram`, `项目交流群`

> <a href="https //trendshift.io/repositories/329" target=" blank" <img src="https //trendshift.io/api/badge/repositories/329" alt="chatchat space%2FLangchain Chatchat Trendshift" style="width 250px; height 55px;" width="250" height="55"/ </a 🌍 READ THIS IN ENGLISH 📃 LangChain Chatchat (原 Langchain ChatGLM) 基于 ChatGLM 等大语言模型与 Langchain 等应用框架实现，开源、可离线部署的 RAG 与 Agent 应用项目。 目录 概述 功能介绍 0.3.x 功能一览 已支持的模型推理框架与模型 快速上手 pip 安装部署 源码安装部署/开发部署 Docker 部署 项目里程碑 联系我们 概述 🤖️ 一种利用 langchain 思想实现的基于本地知识库的问答应用，目标期望建立一套对中文场景与开源模型支持友好、可离线运行的知识库问答解决方案。 💡 受 GanymedeNil 的项目 document.ai 和 AlexZhangji 创建的 ChatGLM 6B Pull Request 启发，建立了全流程可使用开源模型实现的本地知识库问答应用。本项目的最新版本中可使用 Xinference、Ollama 等框架接入 GLM 4 Chat、 Qwen2 Instruct、 Llama3 等模型，依托于 langchain 框架支持通过基于 FastAPI 提供的 API 调用服务，或使用基于 Streamlit 的 WebUI 进行操作。 ✅ 本项目支持市面上主流的开源 LLM、 Embedding 模型与向量数据库，可实现全部使用 开源 模型 离线私有部署 。与此同时，本项目也支持 OpenAI GPT API 的调用，并将在后续持续扩充对各类模型及模

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .github | dir |
| .gitignore | file |
| .gitmodules | file |
| docker | dir |
| docs | dir |
| libs | dir |
| LICENSE | file |
| markdown_docs | dir |
| poetry.toml | file |
| pyproject.toml | file |
| README_en.md | file |
| README.md | file |
| release.py | file |
| tools | dir |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| libs/ | 358 |
| markdown_docs/ | 91 |
| docs/ | 43 |
| .github/ | 10 |
| tools/ | 9 |
| (root) | 8 |
| docker/ | 4 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| docs/ | 43 | preferred |
| tools/ | 9 | preferred |
| libs/ | 358 | large |
| libs/chatchat-server/ | 282 | large |
| libs/chatchat-server/chatchat/ | 192 | large |
| markdown_docs/ | 91 | large |
| libs/python-sdk/ | 76 | large |
| markdown_docs/server/ | 74 | large |
| libs/python-sdk/open_chatcaht/ | 64 | large |
| libs/chatchat-server/langchain_chatchat/ | 50 | large |
| docs/img/ | 32 | large |
| libs/chatchat-server/tests/ | 31 | large |
| markdown_docs/server/knowledge_base/ | 18 | large |
| markdown_docs/server/agent/ | 14 | large |
| markdown_docs/server/db/ | 12 | large |
| markdown_docs/server/model_workers/ | 12 | large |
| .github/ | 10 | large |
| libs/python-sdk/tests/ | 10 | large |
| markdown_docs/server/chat/ | 8 | large |
| tools/autodl_start_script/ | 8 | large |
| .github/workflows/ | 7 | large |
| docs/contributing/ | 7 | large |
| markdown_docs/document_loaders/ | 6 | large |
| docker/ | 4 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `docker/Dockerfile`
- `libs/chatchat-server/pyproject.toml`
- `libs/python-sdk/pyproject.toml`
- `pyproject.toml`

### pyproject.toml

| 경로 | 이름 | poetry | uv | ruff | pytest |
| --- | --- | --- | --- | --- | --- |
| libs/chatchat-server/pyproject.toml | langchain-chatchat | true | false | true | true |
| libs/python-sdk/pyproject.toml | open_langchain_chatchat | true | false | false | false |
| pyproject.toml | Chatchat | true | false | true | false |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `README.md`
- `docs/contributing/README.md`
- `docs/contributing/README_dev.md`
- `docs/contributing/agent.md`
- `docs/contributing/api.md`
- `docs/contributing/code.md`
- `docs/contributing/repo_structure.md`
- `docs/contributing/settings.md`
- `docs/img/LLM_success.png`
- `docs/img/agent_continue.png`
- `docs/img/agent_success.png`
- `docs/img/chatchat-qrcode.jpg`
- `docs/img/chatchat_icon_blue_square_v2.png`
- `docs/img/docker_logs.png`
- `docs/img/fastapi_docs_026.png`
- `docs/img/init_knowledge_base.jpg`
- `docs/img/knowledge_base_success.jpg`
- `docs/img/langchain+chatglm.png`
- `docs/img/langchain+chatglm2.png`
- `docs/img/langchain_chatchat_0.3.0.png`
- `docs/img/langchain_chatchat_webui.png`
- `docs/img/logo-long-chatchat-trans-v2.png`
- `docs/img/official_account_qr.png`
- `docs/img/official_wechat_mp_account.png`
- `docs/img/partners/autodl.svg`
- `docs/img/partners/aws.svg`
- `docs/img/partners/chatglm.svg`
- `docs/img/partners/zhenfund.svg`
- `docs/img/qr_code_112.jpg`
- `docs/img/qr_code_113.jpg`
- `docs/img/qr_code_113_2.jpg`
- `docs/img/qr_code_114.jpg`
- `docs/img/qr_code_114_2.jpg`
- `docs/img/qr_code_115.jpg`
- `docs/img/qr_code_115_2.jpg`
- `docs/img/qr_code_116.jpg`
- `docs/img/qr_code_116_2.jpg`
- `docs/img/qr_code_116_3.jpg`
- `docs/img/qr_code_117.jpg`
- `docs/img/qr_code_117_2.jpg`
- `docs/install/README_docker.md`
- `docs/install/README_text2sql.md`
- `docs/install/README_xinference.md`
- `docs/install/README_xinference_en.md`
- `libs/chatchat-server/README.md`
- `libs/chatchat-server/chatchat/data/nltk_data/corpora/cmudict/README`
- `libs/chatchat-server/chatchat/data/nltk_data/tokenizers/punkt/PY3/README`
- `libs/chatchat-server/chatchat/data/nltk_data/tokenizers/punkt/README`
- `libs/chatchat-server/tests/data/knowledge_base/test_kb_for_migrate/content/readme.md`
- `libs/python-sdk/open_chatcaht/types/knowledge_base/doc/__init__.py`
- ... 7 more

### 에이전트 지침 후보

- `libs/chatchat-server/chatchat/server/api_server/mcp_routes.py`
- `libs/chatchat-server/chatchat/server/db/models/mcp_connection_model.py`
- `libs/chatchat-server/chatchat/server/db/repository/mcp_connection_repository.py`
- `libs/chatchat-server/chatchat/webui_pages/mcp/__init__.py`
- `libs/chatchat-server/chatchat/webui_pages/mcp/dialogue.py`
- `libs/chatchat-server/langchain_chatchat/agent_toolkits/mcp_kit/client.py`
- `libs/chatchat-server/langchain_chatchat/agent_toolkits/mcp_kit/prompts.py`
- `libs/chatchat-server/langchain_chatchat/agent_toolkits/mcp_kit/tools.py`
- `libs/chatchat-server/tests/integration_tests/mcp_platform_tools/math_server.py`
- `libs/chatchat-server/tests/integration_tests/mcp_platform_tools/test_mcp_platform_tools.py`
- `libs/chatchat-server/tests/unit_tests/test_mcp_prompts.py`
- `markdown_docs/server/model_workers/gemini.md`

### 스펙/템플릿/명령/스킬 후보

_없음_

## 테스트 / CI / 배포 표면

### 테스트 후보

- `libs/chatchat-server/tests/api/test_kb_api.py`
- `libs/chatchat-server/tests/api/test_kb_api_request.py`
- `libs/chatchat-server/tests/api/test_kb_summary_api.py`
- `libs/chatchat-server/tests/api/test_openai_wrap.py`
- `libs/chatchat-server/tests/api/test_server_state_api.py`
- `libs/chatchat-server/tests/api/test_stream_chat_api.py`
- `libs/chatchat-server/tests/api/test_stream_chat_api_thread.py`
- `libs/chatchat-server/tests/api/test_tools.py`
- `libs/chatchat-server/tests/conftest.py`
- `libs/chatchat-server/tests/custom_splitter/test_different_splitter.py`
- `libs/chatchat-server/tests/data/knowledge_base/test_kb_for_migrate/content/readme.md`
- `libs/chatchat-server/tests/document_loader/test_imgloader.py`
- `libs/chatchat-server/tests/document_loader/test_pdfloader.py`
- `libs/chatchat-server/tests/integration_tests/keep`
- `libs/chatchat-server/tests/integration_tests/mcp_platform_tools/math_server.py`
- `libs/chatchat-server/tests/integration_tests/mcp_platform_tools/test_mcp_platform_tools.py`
- `libs/chatchat-server/tests/integration_tests/platform_tools/test_platform_tools.py`
- `libs/chatchat-server/tests/integration_tests/test_sdk_import.py`
- `libs/chatchat-server/tests/kb_vector_db/__init__.py`
- `libs/chatchat-server/tests/kb_vector_db/test_faiss_kb.py`
- `libs/chatchat-server/tests/kb_vector_db/test_milvus_db.py`
- `libs/chatchat-server/tests/kb_vector_db/test_pg_db.py`
- `libs/chatchat-server/tests/kb_vector_db/test_relyt_db.py`
- `libs/chatchat-server/tests/samples/ocr_test.docx`
- `libs/chatchat-server/tests/samples/ocr_test.jpg`
- `libs/chatchat-server/tests/samples/ocr_test.pdf`
- `libs/chatchat-server/tests/samples/ocr_test.pptx`
- `libs/chatchat-server/tests/test_migrate.py`
- `libs/chatchat-server/tests/test_qwen_agent.py`
- `libs/chatchat-server/tests/unit_tests/test_mcp_prompts.py`
- `libs/chatchat-server/tests/unit_tests/test_sdk_import.py`
- `libs/python-sdk/tests/__init__.py`
- `libs/python-sdk/tests/chat_test.py`
- `libs/python-sdk/tests/data/upload_file1.txt`
- `libs/python-sdk/tests/data/upload_file2.txt`
- `libs/python-sdk/tests/kb_test.py`
- `libs/python-sdk/tests/server_test.py`
- `libs/python-sdk/tests/standard_openai_test.py`
- `libs/python-sdk/tests/tools_test.py`
- `libs/python-sdk/tests/装饰器声明请求_test.py`
- `libs/python-sdk/tests/装饰器声明请求_test1.py`

### CI/Docker 후보

- `.github/workflows/_integration_test.yml`
- `.github/workflows/_release.yml`
- `.github/workflows/_test.yml`
- `.github/workflows/_test_release.yml`
- `.github/workflows/close-issue.yml`
- `.github/workflows/docker-build.yaml`
- `.github/workflows/label_ad_issue.yml`
- `docker/Dockerfile`
- `docker/docker-compose.yaml`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .py | 281 |
| .md | 115 |
| .pickle | 39 |
| .jpg | 16 |
| .png | 16 |
| .sh | 10 |
| .yml | 7 |
| .toml | 6 |
| .svg | 4 |
| .txt | 3 |
| readme | 3 |
| .csv | 2 |
| .js | 2 |
| .pdf | 2 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `docs/ 내부 책임 분리`
- `tools/ 내부 책임 분리`
- `libs/ 내부 책임 분리`
- `libs/chatchat-server/ 내부 책임 분리`
- `libs/chatchat-server/chatchat/ 내부 책임 분리`
- `docker/Dockerfile 실행 스크립트와 패키지 경계`
- `libs/chatchat-server/pyproject.toml 실행 스크립트와 패키지 경계`
- `libs/python-sdk/pyproject.toml 실행 스크립트와 패키지 경계`
- `pyproject.toml 실행 스크립트와 패키지 경계`

