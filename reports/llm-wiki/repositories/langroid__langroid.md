# langroid/langroid 구조 분석

생성일: 2026-06-17T22:56:52.162Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/langroid__langroid |
| remote | https://github.com/langroid/langroid |
| HEAD | cf5a398 (2026-06-15) bump: version 0.65.6 → 0.65.7 |
| branch | main |
| groups | llm-wiki-100 |
| files | 723 |
| dirs | 95 |
| stack | Python |

## 구조 해석

- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- 스펙/템플릿/명령/스킬 아티팩트가 있어 에이전트나 SDD 워크플로우가 저장소 구조의 일부다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- 테스트 파일이 충분히 노출되어 기능 검증과 회귀 검증 흐름을 추적할 수 있다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `Quick glimpse of coding with Langroid`, `set up LLM`, `use LLM directly`, `use LLM in an Agent`, `wrap Agent in a Task to run interactive loop with user (or other agents)`, `2-Agent chat loop: Teacher Agent asks questions to Student Agent`, `🔥 Updates/Releases`, `🚀 Demo`, `⚡ Highlights`, `⚙️ Installation and Setup`, `Install `langroid``, `Claude Code Plugin (Optional)`, `Set up environment variables (API keys, etc)`, `🐳 Docker Instructions`, `get the .env file template from `langroid` repo`, `Edit the .env file with your favorite editor (here nano), and remove any un-used settings. E.g. there are "dummy" values like "your-redis-port" etc -- if you are not using them, you MUST remove them.`, `launch the container (the appropriate image for your architecture will be pulled automatically)`, `Use this command to run any of the scripts in the `examples` directory`

> <div align="center" <img src="https //raw.githubusercontent.com/langroid/langroid/main/docs/assets/langroid card lambda ossem rust 1200 630.png" alt="Logo" width="400" align="center" </div <div align="center" </div <h3 align="center" <a target=" blank" href="https //langroid.github.io/langroid/" rel="dofollow" <strong Documentation</strong </a &middot; <a target=" blank" href="https //github.com/langroid/langroid examples" rel="dofollow" <strong Examples Repo</strong </a &middot; <a target=" blank" href="https //discord.gg/ZU36McDgDs" rel="dofollow" <strong Discord</strong </a &middot; <a target=" blank" href="https //github.com/langroid/langroid/blob/main/CONTRIBUTING.md" rel="dofollow" <strong Contributing</strong </a <br / </h3 Langroid is an intuitive, lightweight, extensible and principled Python framework to easily build LLM powered applications, from CMU and UW Madison researchers

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .blackignore | file |
| .chainlit | dir |
| .claude-plugin | dir |
| .coveragerc | file |
| .env-template | file |
| .github | dir |
| .gitignore | file |
| .pre-commit-config.yaml | file |
| ai-instructions | dir |
| ai-notes | dir |
| bump_version.sh | file |
| chainlit.md | file |
| CLAUDE.md | file |
| CODE_OF_CONDUCT.md | file |
| CONTRIBUTING.md | file |
| Dockerfile | file |
| docs | dir |
| examples | dir |
| issues | dir |
| langroid | dir |
| LICENSE | file |
| llms-compressed.txt | file |
| llms-no-tests-compressed.txt | file |
| llms-no-tests-no-examples-compressed.txt | file |
| llms-no-tests-no-examples.txt | file |
| llms-no-tests.txt | file |
| llms.txt | file |
| Makefile | file |
| mkdocs.yml | file |
| plugins | dir |
| PR_954_REVIEW.md | file |
| PR_REVIEW_975.md | file |
| public | dir |
| pyproject.toml | file |
| pytest.ini | file |
| README.md | file |
| release-notes | dir |
| repomix.config.json | file |
| scripts | dir |
| SECURITY.md | file |
| setup.cfg | file |
| tests | dir |
| uv.lock | file |
| visual_log.sh | file |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| examples/ | 220 |
| tests/ | 143 |
| langroid/ | 141 |
| docs/ | 119 |
| (root) | 30 |
| issues/ | 25 |
| release-notes/ | 13 |
| plugins/ | 10 |
| .github/ | 9 |
| public/ | 4 |
| .chainlit/ | 3 |
| ai-notes/ | 3 |
| .claude-plugin/ | 1 |
| ai-instructions/ | 1 |
| scripts/ | 1 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| docs/ | 119 | preferred |
| examples/ | 220 | preferred |
| tests/ | 143 | preferred |
| scripts/ | 1 | preferred |
| plugins/ | 10 | preferred |
| langroid/ | 141 | large |
| tests/main/ | 126 | large |
| langroid/agent/ | 59 | large |
| examples/basic/ | 57 | large |
| docs/notes/ | 42 | large |
| examples/docqa/ | 38 | large |
| examples/chainlit/ | 35 | large |
| langroid/agent/special/ | 30 | large |
| issues/ | 25 | large |
| docs/quick-start/ | 21 | large |
| langroid/parsing/ | 19 | large |
| tests/main/data/ | 19 | large |
| docs/blog/ | 18 | large |
| langroid/utils/ | 18 | large |
| langroid/agent/tools/ | 17 | large |
| docs/assets/ | 16 | large |
| docs/blog/posts/ | 16 | large |
| examples/mcp/ | 15 | large |
| langroid/language_models/ | 14 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `Dockerfile`
- `examples/docqa/streamlit-app/requirements.txt`
- `examples/langdb/requirements.txt`
- `examples/portkey/requirements.txt`
- `pyproject.toml`
- `tests/main/mcp/weather-server-python/pyproject.toml`
- `tests/main/mcp/weather-server-python/uv.lock`
- `uv.lock`

### pyproject.toml

| 경로 | 이름 | poetry | uv | ruff | pytest |
| --- | --- | --- | --- | --- | --- |
| pyproject.toml | langroid | false | true | true | true |
| tests/main/mcp/weather-server-python/pyproject.toml | weather | false | false | false | false |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `CONTRIBUTING.md`
- `README.md`
- `docs/FAQ.md`
- `docs/assets/DepChatbot.png`
- `docs/assets/demos/dependency_chatbot.gif`
- `docs/assets/demos/lease-extractor-demo.gif`
- `docs/assets/langroid-card-cobalt-blue-1200-630.png`
- `docs/assets/langroid-card-cobalt-blue.png`
- `docs/assets/langroid-card-lambda-ossem-rust-1200-630.png`
- `docs/assets/langroid-card-ossem-rust-1200x630.png`
- `docs/assets/langroid-card-ossem-rust.png`
- `docs/assets/langroid-lance.png`
- `docs/assets/langroid_neo4j_logos.png`
- `docs/assets/nullify-logo.jpg`
- `docs/assets/nullify-logo.png`
- `docs/assets/orange-logo-lambda-563.png`
- `docs/assets/orange-logo-lambda.png`
- `docs/assets/orange-logo.png`
- `docs/assets/pure-lambda-non-circular.png`
- `docs/auto_docstring.py`
- `docs/blog/.authors.yml`
- `docs/blog/index.md`
- `docs/blog/posts/chat-completion.md`
- `docs/blog/posts/figures/confusion.png`
- `docs/blog/posts/figures/langroid-arch.png`
- `docs/blog/posts/figures/malade-arch.png`
- `docs/blog/posts/figures/omop-ground-truth.png`
- `docs/blog/posts/figures/omop-results.png`
- `docs/blog/posts/figures/variance-histogram.png`
- `docs/blog/posts/langroid-architecture.md`
- `docs/blog/posts/langroid-intro.md`
- `docs/blog/posts/langroid-knowledge-graph.md`
- `docs/blog/posts/langroid-lancedb.md`
- `docs/blog/posts/local-llm-formatting.md`
- `docs/blog/posts/local-llm.md`
- `docs/blog/posts/malade.md`
- `docs/blog/posts/multi-agent-debate.md`
- `docs/blog/posts/test.md`
- `docs/demos/targeting/audience-targeting.md`
- `docs/demos/targeting/targeting.gif`
- `docs/demos/targeting/targeting.png`
- `docs/examples/agent-tree.md`
- `docs/examples/chat-tree.png`
- `docs/examples/guide.md`
- `docs/index.md`
- `docs/javascripts/mathjax.js`
- `docs/logos/pure-lambda-non-circular.png`
- `docs/notes/async-streaming.md`
- `docs/notes/azure-openai-models.md`
- `docs/notes/chunking.md`
- ... 30 more

### 에이전트 지침 후보

- `CLAUDE.md`
- `docs/notes/gemini.md`
- `docs/notes/mcp-tools.md`
- `examples/mcp/any-mcp.py`
- `examples/mcp/biomcp.py`
- `examples/mcp/chainlit-mcp.py`
- `examples/mcp/claude-code-mcp-single.py`
- `examples/mcp/claude-code-mcp.py`
- `examples/mcp/exa-web-search.py`
- `examples/mcp/gitmcp.py`
- `examples/mcp/mcp-fetch.py`
- `examples/mcp/mcp-file-system.py`
- `examples/mcp/memory.py`
- `examples/mcp/openmemory.py`
- `examples/mcp/playwright-mcp.py`
- `examples/mcp/puppeteer-mcp.py`
- `examples/mcp/pyodide_code_executor.py`
- `examples/mcp/xquik-twitter-search.py`
- `issues/20251107-fix-mcp-dectorator.md`
- `langroid/agent/tools/mcp/__init__.py`
- `langroid/agent/tools/mcp/decorators.py`
- `langroid/agent/tools/mcp/fastmcp_client.py`
- `plugins/langroid/skills/add-pattern/SKILL.md`
- `plugins/langroid/skills/patterns/SKILL.md`
- `plugins/langroid/skills/patterns/agent-handler-validation-with-state.md`
- `plugins/langroid/skills/patterns/agent-tool-handler-with-state.md`
- `plugins/langroid/skills/patterns/done-sequences-specific-tool.md`
- `plugins/langroid/skills/patterns/mcp-tool-integration.md`
- `plugins/langroid/skills/patterns/quiet-mode.md`
- `plugins/langroid/skills/patterns/run-batch-tasks.md`
- `plugins/langroid/skills/patterns/task-return-tool.md`
- `tests/main/mcp/weather-server-python/README.md`
- `tests/main/mcp/weather-server-python/pyproject.toml`
- `tests/main/mcp/weather-server-python/uv.lock`
- `tests/main/mcp/weather-server-python/weather.py`
- `tests/main/test_mcp_tools.py`

### 스펙/템플릿/명령/스킬 후보

- `plugins/langroid/skills/add-pattern/SKILL.md`
- `plugins/langroid/skills/patterns/SKILL.md`
- `plugins/langroid/skills/patterns/agent-handler-validation-with-state.md`
- `plugins/langroid/skills/patterns/agent-tool-handler-with-state.md`
- `plugins/langroid/skills/patterns/done-sequences-specific-tool.md`
- `plugins/langroid/skills/patterns/mcp-tool-integration.md`
- `plugins/langroid/skills/patterns/quiet-mode.md`
- `plugins/langroid/skills/patterns/run-batch-tasks.md`
- `plugins/langroid/skills/patterns/task-return-tool.md`

## 테스트 / CI / 배포 표면

### 테스트 후보

- `tests/README.md`
- `tests/__init__.py`
- `tests/conftest.py`
- `tests/extras/sql/test_automatic_context_extraction.py`
- `tests/extras/test_csv_kg_chat.py`
- `tests/extras/test_doc_chat_agent_llamacpp.py`
- `tests/extras/test_docx_parser_extra.py`
- `tests/extras/test_fastembed_embeddings.py`
- `tests/extras/test_gemini_embeddings.py`
- `tests/extras/test_hf_embeddings.py`
- `tests/extras/test_hf_vector_stores.py`
- `tests/extras/test_llamacpp_embedding_formats.py`
- `tests/extras/test_llamacpp_embeddings.py`
- `tests/extras/test_marker_pdf_parser.py`
- `tests/extras/test_pyarango.py`
- `tests/main/data/amazon-reviews-appliances-100.txt`
- `tests/main/data/color-shape-series.jpg`
- `tests/main/data/color-shape-series.pdf`
- `tests/main/data/color-shape-series.png`
- `tests/main/data/color-shapes.jpg`
- `tests/main/data/color-shapes.pdf`
- `tests/main/data/color-shapes.png`
- `tests/main/data/doc-test-file.doc`
- `tests/main/data/docx-test-file.docx`
- `tests/main/data/dummy.pdf`
- `tests/main/data/github-issues.csv`
- `tests/main/data/image-based-pdf-sample.pdf`
- `tests/main/data/imagenet.pdf`
- `tests/main/data/iris.xls`
- `tests/main/data/openr-1-3.pdf`
- `tests/main/data/sample-test.pdf`
- `tests/main/data/sample.docx`
- `tests/main/data/sample.pptx`
- `tests/main/data/sample.xlsx`
- `tests/main/docker-compose-arango.yml`
- `tests/main/docker-compose-neo4j.yml`
- `tests/main/docker-compose-weaviate.yml`
- `tests/main/mcp/weather-server-python/README.md`
- `tests/main/mcp/weather-server-python/pyproject.toml`
- `tests/main/mcp/weather-server-python/uv.lock`
- `tests/main/mcp/weather-server-python/weather.py`
- `tests/main/sql_chat/sql_test.db`
- `tests/main/sql_chat/test_sql_chat_agent.py`
- `tests/main/sql_chat/test_sql_chat_security.py`
- `tests/main/test_agent.py`
- `tests/main/test_arango_aql_validation.py`
- `tests/main/test_arangodb.py`
- `tests/main/test_arangodb_chat_agent.py`
- `tests/main/test_async_handlers.py`
- `tests/main/test_azure_openai.py`
- `tests/main/test_batch.py`
- `tests/main/test_batch_tasks_typed.py`
- `tests/main/test_callbacks.py`
- `tests/main/test_chat_agent.py`
- `tests/main/test_chat_agent_async.py`
- `tests/main/test_closest_string.py`
- `tests/main/test_code_parser.py`
- `tests/main/test_concurrent_doc_chat_qdrant.py`
- `tests/main/test_concurrent_rag_simple.py`
- `tests/main/test_dataframe_docs.py`
- `tests/main/test_doc_chat_agent.py`
- `tests/main/test_doc_chat_relevance.py`
- `tests/main/test_docx_parser.py`
- `tests/main/test_done_sequence_parser.py`
- `tests/main/test_done_sequences.py`
- `tests/main/test_done_sequences_dsl.py`
- `tests/main/test_embeddings.py`
- `tests/main/test_file_attachment.py`
- `tests/main/test_file_tools.py`
- `tests/main/test_git_utils.py`
- `tests/main/test_global_settings.py`
- `tests/main/test_global_state.py`
- `tests/main/test_handle_message_security.py`
- `tests/main/test_html_logger.py`
- `tests/main/test_json.py`
- `tests/main/test_lance_doc_chat_agent.py`
- `tests/main/test_llm.py`
- `tests/main/test_llm_async.py`
- `tests/main/test_llm_pdf_parser.py`
- `tests/main/test_llm_response.py`
- ... 40 more

### CI/Docker 후보

- `.github/workflows/docker-publish.yml`
- `.github/workflows/mkdocs-deploy.yml`
- `.github/workflows/pytest-subset.yml`
- `.github/workflows/pytest.yml`
- `.github/workflows/requirements-torch.txt`
- `.github/workflows/validate.yml`
- `Dockerfile`
- `tests/main/docker-compose-arango.yml`
- `tests/main/docker-compose-neo4j.yml`
- `tests/main/docker-compose-weaviate.yml`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .py | 432 |
| .md | 147 |
| .png | 44 |
| .txt | 17 |
| .yml | 11 |
| .json | 10 |
| .pdf | 8 |
| .ipynb | 6 |
| .csv | 5 |
| .toml | 4 |
| .gif | 3 |
| .jpg | 3 |
| .sh | 3 |
| .db | 2 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `docs/ 내부 책임 분리`
- `examples/ 내부 책임 분리`
- `tests/ 내부 책임 분리`
- `scripts/ 내부 책임 분리`
- `plugins/ 내부 책임 분리`
- `plugins/langroid/skills/add-pattern/SKILL.md 스펙/명령 의미`
- `plugins/langroid/skills/patterns/SKILL.md 스펙/명령 의미`
- `plugins/langroid/skills/patterns/agent-handler-validation-with-state.md 스펙/명령 의미`
- `plugins/langroid/skills/patterns/agent-tool-handler-with-state.md 스펙/명령 의미`
- `plugins/langroid/skills/patterns/done-sequences-specific-tool.md 스펙/명령 의미`
- `Dockerfile 실행 스크립트와 패키지 경계`
- `examples/docqa/streamlit-app/requirements.txt 실행 스크립트와 패키지 경계`
- `examples/langdb/requirements.txt 실행 스크립트와 패키지 경계`
- `examples/portkey/requirements.txt 실행 스크립트와 패키지 경계`
- `pyproject.toml 실행 스크립트와 패키지 경계`

