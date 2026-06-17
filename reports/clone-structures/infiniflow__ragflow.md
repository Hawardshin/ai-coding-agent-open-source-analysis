# infiniflow/ragflow 구조 분석

생성일: 2026-06-17T22:41:11.818Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/infiniflow__ragflow |
| remote | https://github.com/infiniflow/ragflow |
| HEAD | d32e05d (2026-06-12) Go: add more file parser (#15979) |
| branch | main |
| groups | adjacent-tech-50, previous-clone-inventory-107 |
| files | 3628 |
| dirs | 571 |
| stack | Node/TypeScript/JavaScript, Python, Go |

## 구조 해석

- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- 스펙/템플릿/명령/스킬 아티팩트가 있어 에이전트나 SDD 워크플로우가 저장소 구조의 일부다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- 테스트 파일이 충분히 노출되어 기능 검증과 회귀 검증 흐름을 추적할 수 있다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `💡 What is RAGFlow?`, `🎮 Get Started`, `🔥 Latest Updates`, `🎉 Stay Tuned`, `🌟 Key Features`, `🍭 **"Quality in, quality out"**`, `🍱 **Template-based chunking**`, `🌱 **Grounded citations with reduced hallucinations**`, `🍔 **Compatibility with heterogeneous data sources**`, `🛀 **Automated and effortless RAG workflow**`, `🔎 System Architecture`, `🎬 Self-Hosting`, `📝 Prerequisites`, `🚀 Start up the server`, `🔧 Configurations`, `Switch doc engine from Elasticsearch to Infinity`, `🔧 Build a Docker image`, `🔨 Launch service from source for development`

> <div align="center" <a href="https //cloud.ragflow.io/" <img src="web/src/assets/logo with text.svg" width="520" alt="ragflow logo" </a </div <p align="center" <a href="./README.md" <img alt="README in English" src="https //img.shields.io/badge/English DBEDFA" </a <a href="./README zh.md" <img alt="简体中文版自述文件" src="https //img.shields.io/badge/简体中文 DFE0E5" </a <a href="./README tzh.md" <img alt="繁體版中文自述文件" src="https //img.shields.io/badge/繁體中文 DFE0E5" </a <a href="./README ja.md" <img alt="日本語のREADME" src="https //img.shields.io/badge/日本語 DFE0E5" </a <a href="./README ko.md" <img alt="한국어" src="https //img.shields.io/badge/한국어 DFE0E5" </a <a href="./README fr.md" <img alt="README en Français" src="https //img.shields.io/badge/Français DFE0E5" </a <a href="./README id.md" <img alt="Bahasa Indonesia" src="https //img.shields.io/badge/Bahasa Indonesia DFE0E5" </a <a href="./README pt br.md"

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .agents | dir |
| .dockerignore | file |
| .gitattributes | file |
| .github | dir |
| .gitignore | file |
| .pre-commit-config.yaml | file |
| .rooignore | file |
| .trivyignore | file |
| admin | dir |
| agent | dir |
| AGENTS.md | file |
| api | dir |
| bin | dir |
| build.sh | file |
| check_comment_ascii.py | file |
| CLAUDE.md | file |
| cmd | dir |
| codecov.yml | file |
| common | dir |
| conf | dir |
| deepdoc | dir |
| docker | dir |
| Dockerfile | file |
| Dockerfile_tei | file |
| Dockerfile.deps | file |
| Dockerfile.scratch.oc9 | file |
| docs | dir |
| download_deps.py | file |
| example | dir |
| go.mod | file |
| go.sum | file |
| helm | dir |
| internal | dir |
| LICENSE | file |
| mcp | dir |
| memory | dir |
| pyproject.toml | file |
| rag | dir |
| README_ar.md | file |
| README_fr.md | file |
| README_id.md | file |
| README_ja.md | file |
| README_ko.md | file |
| README_pt_br.md | file |
| README_tr.md | file |
| README_tzh.md | file |
| README_zh.md | file |
| README.md | file |
| run_go_tests.sh | file |
| run_tests.py | file |
| sdk | dir |
| SECURITY.md | file |
| show_env.sh | file |
| test | dir |
| test.py | file |
| tools | dir |
| uv.lock | file |
| web | dir |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| web/ | 1514 |
| internal/ | 757 |
| test/ | 367 |
| rag/ | 186 |
| agent/ | 152 |
| api/ | 126 |
| docs/ | 113 |
| common/ | 99 |
| conf/ | 74 |
| deepdoc/ | 47 |
| (root) | 36 |
| tools/ | 35 |
| docker/ | 22 |
| sdk/ | 21 |
| admin/ | 19 |
| helm/ | 19 |
| memory/ | 12 |
| example/ | 10 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| cmd/ | 4 | preferred |
| web/ | 1514 | preferred |
| docs/ | 113 | preferred |
| test/ | 367 | preferred |
| tools/ | 35 | preferred |
| web/src/ | 1463 | large |
| internal/ | 757 | large |
| web/src/pages/ | 726 | large |
| web/src/assets/ | 282 | large |
| web/src/components/ | 272 | large |
| test/testcases/ | 200 | large |
| rag/ | 186 | large |
| internal/agent/ | 163 | large |
| agent/ | 152 | large |
| internal/entity/ | 146 | large |
| internal/cpp/ | 127 | large |
| api/ | 126 | large |
| test/unit_test/ | 116 | large |
| internal/entity/models/ | 115 | large |
| common/ | 99 | large |
| internal/service/ | 79 | large |
| docs/guides/ | 77 | large |
| conf/ | 74 | large |
| common/data_source/ | 63 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `Dockerfile`
- `admin/client/pyproject.toml`
- `admin/client/uv.lock`
- `agent/sandbox/docker-compose.yml`
- `agent/sandbox/executor_manager/Dockerfile`
- `agent/sandbox/executor_manager/requirements.txt`
- `agent/sandbox/pyproject.toml`
- `agent/sandbox/sandbox_base_image/nodejs/Dockerfile`
- `agent/sandbox/sandbox_base_image/nodejs/package.json`
- `agent/sandbox/sandbox_base_image/python/Dockerfile`
- `agent/sandbox/sandbox_base_image/python/requirements.txt`
- `agent/sandbox/uv.lock`
- `docker/docker-compose.yml`
- `go.mod`
- `pyproject.toml`
- `sdk/python/pyproject.toml`
- `sdk/python/uv.lock`
- `tools/chatgpt-on-wechat/plugins/requirements.txt`
- `tools/es-to-oceanbase-migration/pyproject.toml`
- `tools/es-to-oceanbase-migration/uv.lock`
- `tools/firecrawl/requirements.txt`
- `uv.lock`
- `web/package.json`
- `web/tsconfig.json`
- `web/vite.config.ts`

### package.json

| 경로 | 이름 | scripts | deps |
| --- | --- | --- | --- |
| agent/sandbox/sandbox_base_image/nodejs/package.json | nodejs | test | axios |
| web/package.json |  | build, build-storybook, dev, lint, prepare, preview, storybook, test, type-check | @ant-design/icons, @antv/g2, @antv/g6, @extend-ai/react-docx, @floating-ui/react, @hookform/resolvers, @js-preview/excel, @lexical/react, @mdx-js/rollup, @monaco-editor/react, @radix-ui/react-accordion, @radix-ui/react-alert-dialog, @radix-ui/react-aspect-ratio, @radix-ui/react-avatar |

### pyproject.toml

| 경로 | 이름 | poetry | uv | ruff | pytest |
| --- | --- | --- | --- | --- | --- |
| admin/client/pyproject.toml | ragflow-cli | false | false | false | false |
| agent/sandbox/pyproject.toml | gvisor-sandbox | false | true | true | false |
| pyproject.toml | ragflow | false | true | true | true |
| sdk/python/pyproject.toml | ragflow-sdk | false | false | false | true |
| tools/es-to-oceanbase-migration/pyproject.toml | es-ob-migration | false | true | false | true |

### go.mod

| 경로 | module | go |
| --- | --- | --- |
| go.mod | ragflow | 1.25.0 |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `README.md`
- `admin/client/README.md`
- `agent/plugin/README.md`
- `agent/sandbox/README.md`
- `agent/sandbox/tests/README.md`
- `api/apps/auth/README.md`
- `api/common/README.md`
- `deepdoc/README.md`
- `docker/README.md`
- `docs/_category_.json`
- `docs/administrator/_category_.json`
- `docs/administrator/admin/_category_.json`
- `docs/administrator/admin/admin_service.md`
- `docs/administrator/admin/admin_ui.md`
- `docs/administrator/admin/ragflow_cli.md`
- `docs/administrator/configurations/_category_.json`
- `docs/administrator/configurations/config_ssl_cert.md`
- `docs/administrator/configurations/configurations.md`
- `docs/administrator/migration/_category_.json`
- `docs/administrator/migration/backup_and_migration.md`
- `docs/administrator/migration/database_schema_and_migration.md`
- `docs/administrator/tracing.mdx`
- `docs/administrator/upgrade_ragflow.mdx`
- `docs/basics/_category_.json`
- `docs/basics/agent_context_engine.md`
- `docs/basics/rag.md`
- `docs/develop/_category_.json`
- `docs/develop/acquire_ragflow_api_key.md`
- `docs/develop/agent-go-port-design.md`
- `docs/develop/build_docker_image.mdx`
- `docs/develop/contributing.md`
- `docs/develop/deepwiki.md`
- `docs/develop/launch_ragflow_from_source.md`
- `docs/develop/mcp/_category_.json`
- `docs/develop/mcp/launch_mcp_server.md`
- `docs/develop/mcp/mcp_client_example.md`
- `docs/develop/mcp/mcp_tools.md`
- `docs/develop/switch_doc_engine.md`
- `docs/faq.mdx`
- `docs/guides/_category_.json`
- `docs/guides/agent/_category_.json`
- `docs/guides/agent/agent_component_reference/_category_.json`
- `docs/guides/agent/agent_component_reference/agent.mdx`
- `docs/guides/agent/agent_component_reference/await_response.mdx`
- `docs/guides/agent/agent_component_reference/begin.md`
- `docs/guides/agent/agent_component_reference/categorize.mdx`
- `docs/guides/agent/agent_component_reference/chunker_title.md`
- `docs/guides/agent/agent_component_reference/chunker_token.md`
- `docs/guides/agent/agent_component_reference/code.mdx`
- `docs/guides/agent/agent_component_reference/execute_sql.md`
- ... 30 more

### 에이전트 지침 후보

- `.agents/skills/go-naming/SKILL.md`
- `.github/copilot-instructions.md`
- `AGENTS.md`
- `CLAUDE.md`
- `api/apps/restful_apis/mcp_api.py`
- `api/db/services/mcp_server_service.py`
- `common/mcp_tool_call_conn.py`
- `conf/skill_es_mapping.json`
- `conf/skill_infinity_mapping.json`
- `docs/develop/mcp/_category_.json`
- `docs/develop/mcp/launch_mcp_server.md`
- `docs/develop/mcp/mcp_client_example.md`
- `docs/develop/mcp/mcp_tools.md`
- `internal/cli/filesystem/skill.go`
- `internal/cli/filesystem/skill_hub/security/guard.go`
- `internal/cli/filesystem/skill_hub/security/patterns.go`
- `internal/cli/filesystem/skill_hub/security/scanner.go`
- `internal/cli/filesystem/skill_hub/source/clawhub.go`
- `internal/cli/filesystem/skill_hub/source/github.go`
- `internal/cli/filesystem/skill_hub/source/interface.go`
- `internal/cli/filesystem/skill_hub/source/local.go`
- `internal/cli/filesystem/skill_hub/source/skillssh.go`
- `internal/cli/filesystem/skill_hub/source/types.go`
- `internal/cli/filesystem/skill_install.go`
- `internal/cli/filesystem/skill_uninstall.go`
- `internal/dao/mcp.go`
- `internal/dao/mcp_test.go`
- `internal/dao/skill_search_config.go`
- `internal/dao/skill_space.go`
- `internal/entity/mcp.go`
- `internal/entity/skill_search.go`
- `internal/entity/skill_space.go`
- `internal/handler/mcp.go`
- `internal/handler/mcp_test.go`
- `internal/handler/skill_search.go`
- `internal/service/mcp.go`
- `internal/service/mcp_test.go`
- `internal/service/skill_indexer.go`
- `internal/service/skill_search.go`
- `internal/service/skill_space.go`
- `internal/utility/mcp_client.go`
- `internal/utility/mcp_client_test.go`
- `mcp/client/client.py`
- `mcp/client/streamable_http_client.py`
- `mcp/server/server.py`
- `test/testcases/restful_api/test_mcp_routes_unit.py`
- `test/testcases/test_web_api/test_mcp_server_app/test_mcp_server_app_unit.py`
- `web/.agents/skills/tanstack-query-best-practices/SKILL.md`
- `web/.agents/skills/tanstack-query-best-practices/rules/cache-gc-time.md`
- `web/.agents/skills/tanstack-query-best-practices/rules/cache-invalidation.md`
- `web/.agents/skills/tanstack-query-best-practices/rules/cache-placeholder-vs-initial.md`
- `web/.agents/skills/tanstack-query-best-practices/rules/cache-stale-time.md`
- `web/.agents/skills/tanstack-query-best-practices/rules/err-error-boundaries.md`
- `web/.agents/skills/tanstack-query-best-practices/rules/inf-page-params.md`
- `web/.agents/skills/tanstack-query-best-practices/rules/mut-invalidate-queries.md`
- `web/.agents/skills/tanstack-query-best-practices/rules/mut-mutation-state.md`
- `web/.agents/skills/tanstack-query-best-practices/rules/mut-optimistic-updates.md`
- `web/.agents/skills/tanstack-query-best-practices/rules/network-mode.md`
- `web/.agents/skills/tanstack-query-best-practices/rules/parallel-use-queries.md`
- `web/.agents/skills/tanstack-query-best-practices/rules/perf-select-transform.md`
- `web/.agents/skills/tanstack-query-best-practices/rules/persist-queries.md`
- `web/.agents/skills/tanstack-query-best-practices/rules/pf-intent-prefetch.md`
- `web/.agents/skills/tanstack-query-best-practices/rules/qk-array-structure.md`
- `web/.agents/skills/tanstack-query-best-practices/rules/qk-factory-pattern.md`
- `web/.agents/skills/tanstack-query-best-practices/rules/qk-hierarchical-organization.md`
- `web/.agents/skills/tanstack-query-best-practices/rules/qk-include-dependencies.md`
- `web/.agents/skills/tanstack-query-best-practices/rules/qk-serializable.md`
- `web/.agents/skills/tanstack-query-best-practices/rules/query-cancellation.md`
- `web/.agents/skills/tanstack-query-best-practices/rules/ssr-dehydration.md`
- `web/CLAUDE.md`
- `web/skills-lock.json`
- `web/src/assets/svg/home-icon/skill-folder.svg`
- `web/src/assets/svg/home-icon/skill-space.svg`
- `web/src/assets/svg/home-icon/skills.svg`
- `web/src/hooks/use-mcp-request.ts`
- `web/src/interfaces/database/mcp-server.ts`
- `web/src/interfaces/database/mcp.ts`
- `web/src/interfaces/request/mcp.ts`
- `web/src/pages/agent/form/agent-form/tool-popover/use-update-mcp.ts`
- `web/src/pages/agent/form/tool-form/mcp-form/index.tsx`
- ... 20 more

### 스펙/템플릿/명령/스킬 후보

- `.agents/skills/go-naming/SKILL.md`
- `agent/templates/advanced_ingestion_pipeline.json`
- `agent/templates/chunk_summary.json`
- `agent/templates/customer_feedback_dispatcher.json`
- `agent/templates/cv_analysis_and_candidate_evaluation.json`
- `agent/templates/data_analysis_beginner_assistant.json`
- `agent/templates/deep_research.json`
- `agent/templates/ingestion_pipeline_book.json`
- `agent/templates/ingestion_pipeline_general.json`
- `agent/templates/ingestion_pipeline_laws.json`
- `agent/templates/ingestion_pipeline_manual.json`
- `agent/templates/ingestion_pipeline_one.json`
- `agent/templates/ingestion_pipeline_paper.json`
- `agent/templates/ingestion_pipeline_resume.json`
- `agent/templates/market_seo_article_writer.json`
- `agent/templates/photo_text_translator.json`
- `agent/templates/reflective_academic_paper_generator.json`
- `agent/templates/seo_article_writer.json`
- `agent/templates/smart_customer_service_specialist.json`
- `agent/templates/stock_market_research_assistant.json`
- `agent/templates/text2sql_data_expert.json`
- `agent/templates/title_chunker.json`
- `agent/templates/trip_planner.json`
- `agent/templates/user_interaction.json`
- `agent/templates/web_search_assistant.json`
- `agent/templates/your_starter_dataset_chatbot.json`
- `docs/develop/agent-go-port-design.md`
- `helm/templates/_helpers.tpl`
- `helm/templates/elasticsearch-config.yaml`
- `helm/templates/elasticsearch.yaml`
- `helm/templates/env.yaml`
- `helm/templates/infinity.yaml`
- `helm/templates/ingress.yaml`
- `helm/templates/minio.yaml`
- `helm/templates/mysql-config.yaml`
- `helm/templates/mysql.yaml`
- `helm/templates/opensearch-config.yaml`
- `helm/templates/opensearch.yaml`
- `helm/templates/ragflow.yaml`
- `helm/templates/ragflow_config.yaml`
- `helm/templates/redis.yaml`
- `helm/templates/tests/test-connection.yaml`
- `internal/agent/component/io/templates/content_types.xml`
- `internal/agent/component/io/templates/document.xml.tmpl`
- `internal/agent/component/io/templates/document_rels.xml.tmpl`
- `internal/agent/component/io/templates/footer.xml.tmpl`
- `internal/agent/component/io/templates/header.xml.tmpl`
- `internal/agent/component/io/templates/rels.xml`
- `internal/agent/component/io/templates/styles.xml.tmpl`
- `web/.agents/skills/tanstack-query-best-practices/SKILL.md`
- `web/.agents/skills/tanstack-query-best-practices/rules/cache-gc-time.md`
- `web/.agents/skills/tanstack-query-best-practices/rules/cache-invalidation.md`
- `web/.agents/skills/tanstack-query-best-practices/rules/cache-placeholder-vs-initial.md`
- `web/.agents/skills/tanstack-query-best-practices/rules/cache-stale-time.md`
- `web/.agents/skills/tanstack-query-best-practices/rules/err-error-boundaries.md`
- `web/.agents/skills/tanstack-query-best-practices/rules/inf-page-params.md`
- `web/.agents/skills/tanstack-query-best-practices/rules/mut-invalidate-queries.md`
- `web/.agents/skills/tanstack-query-best-practices/rules/mut-mutation-state.md`
- `web/.agents/skills/tanstack-query-best-practices/rules/mut-optimistic-updates.md`
- `web/.agents/skills/tanstack-query-best-practices/rules/network-mode.md`
- `web/.agents/skills/tanstack-query-best-practices/rules/parallel-use-queries.md`
- `web/.agents/skills/tanstack-query-best-practices/rules/perf-select-transform.md`
- `web/.agents/skills/tanstack-query-best-practices/rules/persist-queries.md`
- `web/.agents/skills/tanstack-query-best-practices/rules/pf-intent-prefetch.md`
- `web/.agents/skills/tanstack-query-best-practices/rules/qk-array-structure.md`
- `web/.agents/skills/tanstack-query-best-practices/rules/qk-factory-pattern.md`
- `web/.agents/skills/tanstack-query-best-practices/rules/qk-hierarchical-organization.md`
- `web/.agents/skills/tanstack-query-best-practices/rules/qk-include-dependencies.md`
- `web/.agents/skills/tanstack-query-best-practices/rules/qk-serializable.md`
- `web/.agents/skills/tanstack-query-best-practices/rules/query-cancellation.md`
- `web/.agents/skills/tanstack-query-best-practices/rules/ssr-dehydration.md`
- `web/src/pages/skills/components/code-viewer.tsx`
- `web/src/pages/skills/components/create-space-dialog.tsx`
- `web/src/pages/skills/components/delete-selected-spaces-dialog.tsx`
- `web/src/pages/skills/components/delete-space-dialog.tsx`
- `web/src/pages/skills/components/markdown-viewer.tsx`
- `web/src/pages/skills/components/rename-space-dialog.tsx`
- `web/src/pages/skills/components/search-config-modal.tsx`
- `web/src/pages/skills/components/skill-card.tsx`
- `web/src/pages/skills/components/skill-detail.tsx`
- `web/src/pages/skills/components/upload-modal.tsx`
- `web/src/pages/skills/hooks.ts`
- `web/src/pages/skills/index.tsx`
- `web/src/pages/skills/types.ts`
- `web/src/pages/skills/utils.ts`
- `web/src/pages/skills/validation.ts`

## 테스트 / CI / 배포 표면

### 테스트 후보

- `agent/sandbox/tests/MIGRATION_GUIDE.md`
- `agent/sandbox/tests/QUICKSTART.md`
- `agent/sandbox/tests/README.md`
- `agent/sandbox/tests/__init__.py`
- `agent/sandbox/tests/pytest.ini`
- `agent/sandbox/tests/sandbox_security_tests_full.py`
- `agent/sandbox/tests/test_aliyun_codeinterpreter.py`
- `agent/sandbox/tests/test_aliyun_codeinterpreter_integration.py`
- `agent/sandbox/tests/test_providers.py`
- `agent/sandbox/tests/test_security.py`
- `agent/sandbox/tests/verify_sdk.py`
- `agent/test/client.py`
- `agent/test/dsl_examples/categorize_and_agent_with_tavily.json`
- `agent/test/dsl_examples/exesql.json`
- `agent/test/dsl_examples/headhunter_zh.json`
- `agent/test/dsl_examples/iteration.json`
- `agent/test/dsl_examples/retrieval_and_generate.json`
- `agent/test/dsl_examples/retrieval_categorize_and_generate.json`
- `agent/test/dsl_examples/tavily_and_generate.json`
- `helm/templates/tests/test-connection.yaml`
- `rag/flow/tests/client.py`
- `rag/flow/tests/dsl_examples/general_pdf_all.json`
- `rag/flow/tests/dsl_examples/title_chunker.json`
- `sdk/python/test/conftest.py`
- `sdk/python/test/test_frontend_api/common.py`
- `sdk/python/test/test_frontend_api/get_email.py`
- `sdk/python/test/test_frontend_api/test_chunk.py`
- `sdk/python/test/test_frontend_api/test_dataset.py`
- `sdk/python/test/test_http_api/test_file_management_within_dataset/test_stop_parse_documents.py`
- `test/README.md`
- `test/__init__.py`
- `test/benchmark/README.md`
- `test/benchmark/__init__.py`
- `test/benchmark/__main__.py`
- `test/benchmark/auth.py`
- `test/benchmark/chat.py`
- `test/benchmark/cli.py`
- `test/benchmark/dataset.py`
- `test/benchmark/http_client.py`
- `test/benchmark/metrics.py`
- `test/benchmark/report.py`
- `test/benchmark/retrieval.py`
- `test/benchmark/run_chat.sh`
- `test/benchmark/run_retrieval.sh`
- `test/benchmark/run_retrieval_chat.sh`
- `test/benchmark/test_docs/Doc1.pdf`
- `test/benchmark/test_docs/Doc2.pdf`
- `test/benchmark/test_docs/Doc3.pdf`
- `test/benchmark/test_docs/dv.json`
- `test/benchmark/utils.py`
- `test/fixtures/mineru/bmw_page_chrome_content_list.json`
- `test/playwright/.gitignore`
- `test/playwright/README.md`
- `test/playwright/__init__.py`
- `test/playwright/auth/test_login_success_optional.py`
- `test/playwright/auth/test_register_success_optional.py`
- `test/playwright/auth/test_register_then_login_flow.py`
- `test/playwright/auth/test_smoke_auth_page.py`
- `test/playwright/auth/test_sso_optional.py`
- `test/playwright/auth/test_toggle_login_register.py`
- `test/playwright/auth/test_validation_presence.py`
- `test/playwright/conftest.py`
- `test/playwright/e2e/__init__.py`
- `test/playwright/e2e/test_dataset_upload_parse.py`
- `test/playwright/e2e/test_model_providers_zhipu_ai_defaults.py`
- `test/playwright/e2e/test_next_apps_agent.py`
- `test/playwright/e2e/test_next_apps_chat.py`
- `test/playwright/e2e/test_next_apps_search.py`
- `test/playwright/helpers/__init__.py`
- `test/playwright/helpers/_auth_helpers.py`
- `test/playwright/helpers/_next_apps_helpers.py`
- `test/playwright/helpers/auth_selectors.py`
- `test/playwright/helpers/auth_waits.py`
- `test/playwright/helpers/datasets.py`
- `test/playwright/helpers/debug_utils.py`
- `test/playwright/helpers/env_utils.py`
- `test/playwright/helpers/flow_context.py`
- `test/playwright/helpers/flow_steps.py`
- `test/playwright/helpers/model_providers.py`
- `test/playwright/helpers/response_capture.py`
- ... 40 more

### CI/Docker 후보

- `.github/workflows/release.yml`
- `.github/workflows/tests.yml`
- `Dockerfile`
- `agent/sandbox/docker-compose.yml`
- `agent/sandbox/executor_manager/Dockerfile`
- `agent/sandbox/sandbox_base_image/nodejs/Dockerfile`
- `agent/sandbox/sandbox_base_image/python/Dockerfile`
- `docker/docker-compose-CN-oc9.yml`
- `docker/docker-compose-base.yml`
- `docker/docker-compose-macos.yml`
- `docker/docker-compose.yml`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .py | 923 |
| .tsx | 728 |
| .go | 615 |
| .ts | 401 |
| .svg | 250 |
| .md | 186 |
| .json | 154 |
| .h | 63 |
| .less | 38 |
| .woff2 | 38 |
| .cpp | 29 |
| .cc | 23 |
| .sh | 22 |
| .mdx | 19 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `cmd/ 내부 책임 분리`
- `web/ 내부 책임 분리`
- `docs/ 내부 책임 분리`
- `test/ 내부 책임 분리`
- `tools/ 내부 책임 분리`
- `.agents/skills/go-naming/SKILL.md 스펙/명령 의미`
- `agent/templates/advanced_ingestion_pipeline.json 스펙/명령 의미`
- `agent/templates/chunk_summary.json 스펙/명령 의미`
- `agent/templates/customer_feedback_dispatcher.json 스펙/명령 의미`
- `agent/templates/cv_analysis_and_candidate_evaluation.json 스펙/명령 의미`
- `Dockerfile 실행 스크립트와 패키지 경계`
- `admin/client/pyproject.toml 실행 스크립트와 패키지 경계`
- `admin/client/uv.lock 실행 스크립트와 패키지 경계`
- `agent/sandbox/docker-compose.yml 실행 스크립트와 패키지 경계`
- `agent/sandbox/executor_manager/Dockerfile 실행 스크립트와 패키지 경계`

