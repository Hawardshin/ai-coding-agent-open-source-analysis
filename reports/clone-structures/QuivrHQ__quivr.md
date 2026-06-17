# QuivrHQ/quivr 구조 분석

생성일: 2026-06-17T22:41:11.818Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/QuivrHQ__quivr |
| remote | https://github.com/QuivrHQ/quivr |
| HEAD | 947a785 (2025-06-19) fix: add Claude 4 support (#3645) |
| branch | main |
| groups | adjacent-tech-50, previous-clone-inventory-107 |
| files | 231 |
| dirs | 54 |
| stack | Python |

## 구조 해석

- 핵심 구현은 `src/`, `lib/`, `core/` 계열 디렉터리에 집중되어 있다.
- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- 스펙/템플릿/명령/스킬 아티팩트가 있어 에이전트나 SDD 워크플로우가 저장소 구조의 일부다.
- 테스트 파일이 충분히 노출되어 기능 검증과 회귀 검증 흐름을 추적할 수 있다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `Quivr - Your Second Brain, Empowered by Generative AI`, `Key Features 🎯`, `Getting Started 🚀`, `Prerequisites 📋`, `30 seconds Installation 💽`, `Configuration`, `Workflows`, `Maximum number of previous conversation iterations`, `to include in the context of the answer`, `Reranker configuration`, `Configuration for the LLM`, `Go further`, `Contributors ✨`, `Contribute 🤝`, `Partners ❤️`, `License 📄`

> Quivr Your Second Brain, Empowered by Generative AI <div align="center" <img src="./logo.png" alt="Quivr logo" width="31%" style="border radius 50%; padding bottom 20px"/ </div Quivr, helps you build your second brain, utilizes the power of GenerativeAI to be your personal assistant ! Key Features 🎯 Opiniated RAG We created a RAG that is opinionated, fast and efficient so you can focus on your product LLMs Quivr works with any LLM, you can use it with OpenAI, Anthropic, Mistral, Gemma, etc. Any File Quivr works with any file, you can use it with PDF, TXT, Markdown, etc and even add your own parsers. Customize your RAG Quivr allows you to customize your RAG, add internet search, add tools, etc. Integrations with Megaparse Quivr works with Megaparse, so you can ingest your files with Megaparse and use the RAG with Quivr. We take care of the RAG so you can focus on your product. Simply ins

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .flake8 | file |
| .github | dir |
| .gitignore | file |
| .pre-commit-config.yaml | file |
| .python-version | file |
| .readthedocs.yaml | file |
| .release-please-manifest.json | file |
| .vscode | dir |
| CHANGELOG.md | file |
| core | dir |
| docs | dir |
| examples | dir |
| LICENSE | file |
| logo.png | file |
| README.md | file |
| release-please-config.json | file |
| vercel.json | file |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| core/ | 91 |
| examples/ | 74 |
| docs/ | 40 |
| (root) | 12 |
| .github/ | 11 |
| .vscode/ | 3 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| core/ | 91 | preferred |
| docs/ | 40 | preferred |
| examples/ | 74 | preferred |
| core/quivr_core/ | 41 | large |
| core/tests/ | 37 | large |
| docs/docs/ | 31 | large |
| core/tests/processor/ | 24 | large |
| examples/chatbot/ | 24 | large |
| examples/chatbot_voice/ | 24 | large |
| examples/quivr-whisper/ | 14 | large |
| examples/chatbot/.chainlit/ | 12 | large |
| examples/chatbot_voice/.chainlit/ | 12 | large |
| .github/ | 11 | large |
| core/quivr_core/processor/ | 9 | large |
| core/quivr_core/rag/ | 9 | large |
| examples/simple_question/ | 8 | large |
| docs/docs/workflows/ | 7 | large |
| docs/docs/examples/ | 6 | large |
| .github/ISSUE_TEMPLATE/ | 5 | large |
| core/quivr_core/brain/ | 5 | large |
| core/quivr_core/llm_tools/ | 5 | large |
| examples/quivr-whisper/static/ | 5 | large |
| .github/workflows/ | 4 | large |
| core/quivr_core/storage/ | 4 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `core/pyproject.toml`
- `docs/pyproject.toml`
- `examples/chatbot/pyproject.toml`
- `examples/chatbot_voice/pyproject.toml`
- `examples/quivr-whisper/pyproject.toml`
- `examples/simple_question/pyproject.toml`

### pyproject.toml

| 경로 | 이름 | poetry | uv | ruff | pytest |
| --- | --- | --- | --- | --- | --- |
| core/pyproject.toml | quivr-core | false | false | false | true |
| docs/pyproject.toml | docs | false | false | false | false |
| examples/chatbot/pyproject.toml | chatbot | false | false | false | false |
| examples/chatbot_voice/pyproject.toml | chatbot | false | false | false | false |
| examples/quivr-whisper/pyproject.toml | quivr-whisper | false | false | false | false |
| examples/simple_question/pyproject.toml | simple-question | false | false | false | false |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `README.md`
- `core/README.md`
- `docs/.gitignore`
- `docs/.python-version`
- `docs/README.md`
- `docs/docs/brain/brain.md`
- `docs/docs/brain/chat.md`
- `docs/docs/brain/index.md`
- `docs/docs/config/base_config.md`
- `docs/docs/config/config.md`
- `docs/docs/config/index.md`
- `docs/docs/css/style.css`
- `docs/docs/examples/assets/chatbot_voice_flask.mp4`
- `docs/docs/examples/chatbot.md`
- `docs/docs/examples/chatbot_voice.md`
- `docs/docs/examples/chatbot_voice_flask.md`
- `docs/docs/examples/custom_storage.md`
- `docs/docs/examples/index.md`
- `docs/docs/index.md`
- `docs/docs/parsers/index.md`
- `docs/docs/parsers/megaparse.md`
- `docs/docs/parsers/simple.md`
- `docs/docs/quickstart.md`
- `docs/docs/storage/base.md`
- `docs/docs/storage/index.md`
- `docs/docs/storage/local_storage.md`
- `docs/docs/vectorstores/faiss.md`
- `docs/docs/vectorstores/index.md`
- `docs/docs/vectorstores/pgvector.md`
- `docs/docs/workflows/examples/basic_ingestion.excalidraw.png`
- `docs/docs/workflows/examples/basic_ingestion.md`
- `docs/docs/workflows/examples/basic_rag.excalidraw.png`
- `docs/docs/workflows/examples/basic_rag.md`
- `docs/docs/workflows/examples/rag_with_web_search.excalidraw.png`
- `docs/docs/workflows/examples/rag_with_web_search.md`
- `docs/docs/workflows/index.md`
- `docs/mkdocs.yml`
- `docs/overrides/empty`
- `docs/pyproject.toml`
- `docs/requirements-dev.lock`
- `docs/requirements.lock`
- `docs/src/docs/__init__.py`
- `examples/chatbot/README.md`
- `examples/chatbot_voice/README.md`
- `examples/quivr-whisper/README.md`
- `examples/simple_question/README.md`

### 에이전트 지침 후보

_없음_

### 스펙/템플릿/명령/스킬 후보

- `examples/quivr-whisper/templates/index.html`

## 테스트 / CI / 배포 표면

### 테스트 후보

- `core/tests/__init__.py`
- `core/tests/chunk_stream_fixture.jsonl`
- `core/tests/conftest.py`
- `core/tests/fixture_chunks.py`
- `core/tests/processor/__init__.py`
- `core/tests/processor/community/__init__.py`
- `core/tests/processor/community/test_markdown_processor.py`
- `core/tests/processor/data/dummy.pdf`
- `core/tests/processor/data/guidelines_code.md`
- `core/tests/processor/docx/__init__.py`
- `core/tests/processor/docx/demo.docx`
- `core/tests/processor/docx/test_docx.py`
- `core/tests/processor/epub/__init__.py`
- `core/tests/processor/epub/page-blanche.epub`
- `core/tests/processor/epub/sway.epub`
- `core/tests/processor/epub/test_epub_processor.py`
- `core/tests/processor/odt/__init__.py`
- `core/tests/processor/odt/bad_odt.odt`
- `core/tests/processor/odt/sample.odt`
- `core/tests/processor/odt/test_odt.py`
- `core/tests/processor/pdf/__init__.py`
- `core/tests/processor/pdf/sample.pdf`
- `core/tests/processor/pdf/test_unstructured_pdf_processor.py`
- `core/tests/processor/test_default_implementations.py`
- `core/tests/processor/test_registry.py`
- `core/tests/processor/test_simple_txt_processor.py`
- `core/tests/processor/test_tika_processor.py`
- `core/tests/processor/test_txt_processor.py`
- `core/tests/rag_config.yaml`
- `core/tests/rag_config_workflow.yaml`
- `core/tests/test_brain.py`
- `core/tests/test_chat_history.py`
- `core/tests/test_config.py`
- `core/tests/test_llm_endpoint.py`
- `core/tests/test_quivr_file.py`
- `core/tests/test_quivr_rag.py`
- `core/tests/test_utils.py`

### CI/Docker 후보

- `.github/workflows/backend-core-tests.yml`
- `.github/workflows/conventional-pr-title.yml`
- `.github/workflows/release-please-core.yml`
- `.github/workflows/stale.yml`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .py | 77 |
| .md | 39 |
| .json | 28 |
| .lock | 12 |
| .yml | 11 |
| .png | 8 |
| .toml | 8 |
| .gitignore | 7 |
| .python-version | 7 |
| .yaml | 7 |
| .svg | 3 |
| .css | 2 |
| .epub | 2 |
| .flake8 | 2 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `core/ 내부 책임 분리`
- `docs/ 내부 책임 분리`
- `examples/ 내부 책임 분리`
- `core/quivr_core/ 내부 책임 분리`
- `core/tests/ 내부 책임 분리`
- `examples/quivr-whisper/templates/index.html 스펙/명령 의미`
- `core/pyproject.toml 실행 스크립트와 패키지 경계`
- `docs/pyproject.toml 실행 스크립트와 패키지 경계`
- `examples/chatbot/pyproject.toml 실행 스크립트와 패키지 경계`
- `examples/chatbot_voice/pyproject.toml 실행 스크립트와 패키지 경계`
- `examples/quivr-whisper/pyproject.toml 실행 스크립트와 패키지 경계`

