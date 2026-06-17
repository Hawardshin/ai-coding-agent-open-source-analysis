# apecloud/ApeRAG 구조 분석

생성일: 2026-06-17T22:56:52.162Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/apecloud__ApeRAG |
| remote | https://github.com/apecloud/ApeRAG |
| HEAD | a6bb55c (2026-04-15) docs: remove hosted live demo line from README (#1459) |
| branch | main |
| groups | llm-wiki-100 |
| files | 1196 |
| dirs | 203 |
| stack | Node/TypeScript/JavaScript, Python |

## 구조 해석

- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- 스펙/템플릿/명령/스킬 아티팩트가 있어 에이전트나 SDD 워크플로우가 저장소 구조의 일부다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- 테스트 파일이 충분히 노출되어 기능 검증과 회귀 검증 흐름을 추적할 수 있다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `ApeRAG`, `Quick Start`, `Enable advanced document parsing service`, `Enable advanced parsing with GPU acceleration`, `Enable advanced document parsing service`, `Enable advanced parsing with GPU acceleration (recommended)`, `Key Features`, `Kubernetes Deployment (Recommended for Production)`, `Prerequisites`, `Clone the Repository`, `Step 1: Deploy Database Services`, `Navigate to database deployment scripts`, `(Optional) Review configuration - defaults work for most cases`, `edit 00-config.sh`, `Install KubeBlocks and deploy databases`, `Monitor database deployment`, `Return to project root for Step 2`, `Step 2: Deploy ApeRAG Application`

> ApeRAG ApeRAG is a production ready RAG (Retrieval Augmented Generation) platform that combines Graph RAG, vector search, and full text search with advanced AI agents. Build sophisticated AI applications with hybrid retrieval, multimodal document processing, intelligent agents, and enterprise grade management features. ApeRAG is the best choice for building your own Knowledge Graph, Context Engineering, and deploying intelligent AI agents that can autonomously search and reason across your knowledge base. 阅读中文文档 Quick Start Key Features Kubernetes Deployment (Recommended for Production) Development Build Docker Image Acknowledgments License Quick Start Before installing ApeRAG, make sure your machine meets the following minimum system requirements CPU = 2 Core RAM = 4 GiB Docker & Docker Compose The easiest way to start ApeRAG is through Docker Compose. Before running the following comma

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .dockerignore | file |
| .github | dir |
| .gitignore | file |
| aperag | dir |
| config | dir |
| deploy | dir |
| docker-compose.yml | file |
| Dockerfile | file |
| docs | dir |
| envs | dir |
| LICENSE | file |
| Makefile | file |
| models | dir |
| pyproject.toml | file |
| README-zh.md | file |
| README.md | file |
| scripts | dir |
| tests | dir |
| uv.lock | file |
| web | dir |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| web/ | 558 |
| aperag/ | 354 |
| docs/ | 99 |
| tests/ | 71 |
| .github/ | 44 |
| deploy/ | 31 |
| scripts/ | 18 |
| (root) | 10 |
| models/ | 5 |
| config/ | 4 |
| envs/ | 2 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| web/ | 558 | preferred |
| docs/ | 99 | preferred |
| tests/ | 71 | preferred |
| scripts/ | 18 | preferred |
| web/src/ | 467 | large |
| aperag/ | 354 | large |
| web/src/api/ | 225 | large |
| web/src/app/ | 112 | large |
| web/src/components/ | 69 | large |
| docs/zh-CN/ | 55 | large |
| web/src/i18n/ | 47 | large |
| aperag/api/ | 46 | large |
| .github/ | 44 | large |
| docs/en-US/ | 44 | large |
| web/docs/ | 44 | large |
| tests/unit_test/ | 33 | large |
| deploy/ | 31 | large |
| tests/e2e_test/ | 30 | large |
| aperag/db/ | 26 | large |
| aperag/service/ | 26 | large |
| web/public/ | 26 | large |
| aperag/migration/ | 24 | large |
| aperag/views/ | 24 | large |
| docs/en-US/images/ | 24 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `.github/utils/requirements.txt`
- `Dockerfile`
- `docker-compose.yml`
- `pyproject.toml`
- `uv.lock`
- `web/Dockerfile`
- `web/package.json`
- `web/tsconfig.json`
- `web/yarn.lock`

### package.json

| 경로 | 이름 | scripts | deps |
| --- | --- | --- | --- |
| web/package.json | web | api:build, api:bundle, api:clean, api:clear, build, dev, lint, prettier, start, i18n:watch | @diceui/combobox, @diceui/mention, @dnd-kit/core, @dnd-kit/modifiers, @dnd-kit/sortable, @dnd-kit/utilities, @hookform/resolvers, @jsdevtools/rehype-toc, @mdx-js/loader, @mdx-js/react, @next/mdx, @openapitools/openapi-generator-cli, @radix-ui/react-alert-dialog, @radix-ui/react-avatar |

### pyproject.toml

| 경로 | 이름 | poetry | uv | ruff | pytest |
| --- | --- | --- | --- | --- | --- |
| pyproject.toml | aperag | false | true | true | true |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `README.md`
- `aperag/concurrent_control/README.md`
- `aperag/docparser/README.md`
- `aperag/evaluation/README.md`
- `aperag/graph/lightrag/README.md`
- `aperag/migration/README`
- `aperag/source/README.md`
- `deploy/aperag/README.md`
- `deploy/databases/README.md`
- `docs/en-US/deployment/_category.yaml`
- `docs/en-US/deployment/build-docker-image.md`
- `docs/en-US/design/_category.yaml`
- `docs/en-US/design/architecture.md`
- `docs/en-US/design/authentication.md`
- `docs/en-US/design/chat_history_design.md`
- `docs/en-US/design/connected_components_optimization.md`
- `docs/en-US/design/document_upload_design.md`
- `docs/en-US/design/graph_index_creation.md`
- `docs/en-US/design/indexing_architecture.md`
- `docs/en-US/design/lightrag_entity_extraction_and_merging.md`
- `docs/en-US/design/quota-system-design.md`
- `docs/en-US/development/_category.yaml`
- `docs/en-US/development/development-guide.md`
- `docs/en-US/images/HarryPotterKG2.png`
- `docs/en-US/images/backend.jpeg`
- `docs/en-US/images/celery.jpeg`
- `docs/en-US/images/chat2.png`
- `docs/en-US/images/collection-page.png`
- `docs/en-US/images/configure-ollama-1.png`
- `docs/en-US/images/configure-ollama-2.png`
- `docs/en-US/images/configure-ollama-3.png`
- `docs/en-US/images/configure-ollama-4.png`
- `docs/en-US/images/configure-ollama-5.png`
- `docs/en-US/images/configure-ollama-6.png`
- `docs/en-US/images/configure-ollama-7.png`
- `docs/en-US/images/dify/aperag-banner.png`
- `docs/en-US/images/dify/step1-subscribe-collection.png`
- `docs/en-US/images/dify/step2-add-mcp.png`
- `docs/en-US/images/dify/step2-api-key.png`
- `docs/en-US/images/dify/step2-configure-mcp.png`
- `docs/en-US/images/dify/step2-mcp-success.png`
- `docs/en-US/images/dify/step3-create-app.png`
- `docs/en-US/images/dify/step3-select-agent.png`
- `docs/en-US/images/dify/step4-configure-agent.png`
- `docs/en-US/images/dify/step4-test-agent.png`
- `docs/en-US/images/feishu-qr-code.png`
- `docs/en-US/images/star-history-2025922.png`
- `docs/en-US/integration/_category.yaml`
- `docs/en-US/integration/dify.md`
- `docs/en-US/integration/mcp-api.md`
- ... 30 more

### 에이전트 지침 후보

- `aperag/agent/mcp_app_factory.py`
- `aperag/mcp/__init__.py`
- `aperag/mcp/server.py`
- `aperag/service/test_mcp_agent.py`
- `aperag/trace/mcp_integration.py`
- `docs/en-US/images/dify/step2-add-mcp.png`
- `docs/en-US/images/dify/step2-configure-mcp.png`
- `docs/en-US/images/dify/step2-mcp-success.png`
- `docs/en-US/integration/mcp-api.md`
- `docs/zh-CN/images/dify/step2-add-mcp.png`
- `docs/zh-CN/images/dify/step2-configure-mcp.png`
- `docs/zh-CN/images/dify/step2-mcp-success.png`
- `docs/zh-CN/integration/mcp-api.md`
- `web/docs/en-US/images/dify/step2-add-mcp.png`
- `web/docs/en-US/images/dify/step2-configure-mcp.png`
- `web/docs/en-US/images/dify/step2-mcp-success.png`
- `web/docs/en-US/integration/mcp-api.md`
- `web/docs/zh-CN/images/dify/step2-add-mcp.png`
- `web/docs/zh-CN/images/dify/step2-configure-mcp.png`
- `web/docs/zh-CN/images/dify/step2-mcp-success.png`
- `web/docs/zh-CN/integration/mcp-api.md`
- `web/public/images/en-US/dify/step2-add-mcp.png`
- `web/public/images/en-US/dify/step2-configure-mcp.png`
- `web/public/images/en-US/dify/step2-mcp-success.png`
- `web/public/images/zh-CN/dify/step2-add-mcp.png`
- `web/public/images/zh-CN/dify/step2-configure-mcp.png`
- `web/public/images/zh-CN/dify/step2-mcp-success.png`

### 스펙/템플릿/명령/스킬 후보

- `deploy/aperag/templates/_helpers.tpl`
- `deploy/aperag/templates/aperag-secret.yaml`
- `deploy/aperag/templates/api-deployment.yaml`
- `deploy/aperag/templates/api-service.yaml`
- `deploy/aperag/templates/celerybeat-deployment.yaml`
- `deploy/aperag/templates/celeryworker-deployment.yaml`
- `deploy/aperag/templates/docray.yaml`
- `deploy/aperag/templates/flower-deployment.yaml`
- `deploy/aperag/templates/frontend-configmap.yaml`
- `deploy/aperag/templates/frontend-deployment.yaml`
- `deploy/aperag/templates/frontend-service.yaml`
- `deploy/aperag/templates/ingress.yaml`
- `docs/en-US/design/chat_history_design.md`
- `docs/en-US/design/document_upload_design.md`
- `docs/en-US/design/quota-system-design.md`
- `docs/zh-CN/design/chat_history_design.md`
- `docs/zh-CN/design/collection_knowledge_export_design.md`
- `docs/zh-CN/design/collection_marketplace_design.md`
- `docs/zh-CN/design/document_upload_design.md`
- `docs/zh-CN/design/evaluation-design.md`
- `docs/zh-CN/design/prompt_customization_design.md`
- `docs/zh-CN/design/quota-system-design.md`
- `docs/zh-CN/design/search_flow_design.md`
- `docs/zh-CN/design/tag_based_permission_design.md`
- `docs/zh-CN/design/url_and_text_import_design.md`
- `docs/zh-CN/design/web-search-design.md`
- `web/docs/en-US/design/chat_history_design.md`
- `web/docs/en-US/design/document_upload_design.md`
- `web/docs/zh-CN/design/chat_history_design.md`
- `web/docs/zh-CN/design/document_upload_design.md`

## 테스트 / CI / 배포 표면

### 테스트 후보

- `aperag/flow/tests/test_validation.py`
- `scripts/test/celery-call-task.sh`
- `scripts/test/celery-with-local-queue.sh`
- `tests/__init__.py`
- `tests/e2e_test/README.md`
- `tests/e2e_test/README_zh.md`
- `tests/e2e_test/__init__.py`
- `tests/e2e_test/cache/test_completion_service_cache.py`
- `tests/e2e_test/cache/test_embedding_service_cache.py`
- `tests/e2e_test/config.py`
- `tests/e2e_test/conftest.py`
- `tests/e2e_test/graphstorage/README-zh.md`
- `tests/e2e_test/graphstorage/README.md`
- `tests/e2e_test/graphstorage/conftest.py`
- `tests/e2e_test/graphstorage/env.template`
- `tests/e2e_test/graphstorage/export_kg_eval.py`
- `tests/e2e_test/graphstorage/graph_storage_oracle.py`
- `tests/e2e_test/graphstorage/graph_storage_test_data.json`
- `tests/e2e_test/graphstorage/networkx_baseline_storage.py`
- `tests/e2e_test/graphstorage/test_graph_storage.py`
- `tests/e2e_test/graphstorage/test_neo4j_storage.py`
- `tests/e2e_test/graphstorage/test_postgres_graph_storage.py`
- `tests/e2e_test/test_api_key.py`
- `tests/e2e_test/test_available_models.py`
- `tests/e2e_test/test_bot.py`
- `tests/e2e_test/test_chat.py`
- `tests/e2e_test/test_collection.py`
- `tests/e2e_test/test_document.py`
- `tests/e2e_test/test_document_download.py`
- `tests/e2e_test/test_llm_provider.py`
- `tests/e2e_test/test_user.py`
- `tests/e2e_test/testdata/basic-flow.yaml`
- `tests/e2e_test/testdata/rag-flow.yaml`
- `tests/e2e_test/utils.py`
- `tests/model_test/README-zh.md`
- `tests/model_test/README.md`
- `tests/model_test/basic-flow.yaml`
- `tests/model_test/test_completion_model.py`
- `tests/model_test/test_embedding_model.py`
- `tests/model_test/test_rerank_model.py`
- `tests/report/Darwin-CPython-3.11-64bit/0001_benchmark-result-20250602163407.json`
- `tests/unit_test/concurrent_control/__init__.py`
- `tests/unit_test/concurrent_control/test_lock_manager.py`
- `tests/unit_test/concurrent_control/test_redis_lock.py`
- `tests/unit_test/concurrent_control/test_thread_safety.py`
- `tests/unit_test/concurrent_control/test_threading_lock.py`
- `tests/unit_test/concurrent_control/test_utilities.py`
- `tests/unit_test/conftest.py`
- `tests/unit_test/docparser/test_chunking.py`
- `tests/unit_test/docparser/test_parse_md.py`
- `tests/unit_test/graphindex/test_case_normalization.py`
- `tests/unit_test/graphindex/test_lightrag_context_types.py`
- `tests/unit_test/graphindex/test_merge_suggestions.py`
- `tests/unit_test/graphindex/test_normalize_extracted_info.py`
- `tests/unit_test/graphindex/test_normalize_simple.py`
- `tests/unit_test/llm/images/one_dog_and_one_cat_on_the_bed.jpg`
- `tests/unit_test/llm/images/two_cats_on_the_purplish_red_sofa.jpg`
- `tests/unit_test/llm/test_image_data.py`
- `tests/unit_test/llm/test_litellm_cache_key.py`
- `tests/unit_test/llm/test_multimodal_embedding.py`
- `tests/unit_test/llm/test_vision_llm.py`
- `tests/unit_test/objectstore/test_async_local.py`
- `tests/unit_test/objectstore/test_async_s3.py`
- `tests/unit_test/objectstore/test_local.py`
- `tests/unit_test/objectstore/test_s3.py`
- `tests/unit_test/test_model_service.py`
- `tests/unit_test/websearch/__init__.py`
- `tests/unit_test/websearch/test_edge_cases.py`
- `tests/unit_test/websearch/test_llm_txt_parsing.py`
- `tests/unit_test/websearch/test_llm_txt_provider.py`
- `tests/unit_test/websearch/test_parallel_search.py`
- `tests/unit_test/websearch/test_reader_service.py`
- `tests/unit_test/websearch/test_real_world.py`
- `tests/unit_test/websearch/test_search_service.py`

### CI/Docker 후보

- `.github/workflows/auto-approve.yml`
- `.github/workflows/cherry-pick.yml`
- `.github/workflows/cicd-pull-request.yml`
- `.github/workflows/cicd-push.yml`
- `.github/workflows/e2e-aperag-test.yml`
- `.github/workflows/e2e-aperag.yml`
- `.github/workflows/issues-addtoproject.yml`
- `.github/workflows/issues-labeluserdoc.yml`
- `.github/workflows/issues-move.yml`
- `.github/workflows/issues-tagstale.yml`
- `.github/workflows/milestoneclose.yml`
- `.github/workflows/pull-request-check.yml`
- `.github/workflows/pull-request-label-size.yaml`
- `.github/workflows/pull-request-stats.yml`
- `.github/workflows/pull-request-user-interaction.yaml`
- `.github/workflows/release-chart.yml`
- `.github/workflows/release-create.yml`
- `.github/workflows/release-image.yml`
- `.github/workflows/release-version.yml`
- `Dockerfile`
- `docker-compose.yml`
- `web/Dockerfile`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .py | 349 |
| .ts | 237 |
| .tsx | 177 |
| .md | 95 |
| .yaml | 95 |
| .png | 89 |
| .json | 56 |
| .sh | 34 |
| .yml | 18 |
| .css | 4 |
| .jpeg | 4 |
| .mjs | 4 |
| .gitignore | 3 |
| .template | 3 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `web/ 내부 책임 분리`
- `docs/ 내부 책임 분리`
- `tests/ 내부 책임 분리`
- `scripts/ 내부 책임 분리`
- `web/src/ 내부 책임 분리`
- `deploy/aperag/templates/_helpers.tpl 스펙/명령 의미`
- `deploy/aperag/templates/aperag-secret.yaml 스펙/명령 의미`
- `deploy/aperag/templates/api-deployment.yaml 스펙/명령 의미`
- `deploy/aperag/templates/api-service.yaml 스펙/명령 의미`
- `deploy/aperag/templates/celerybeat-deployment.yaml 스펙/명령 의미`
- `.github/utils/requirements.txt 실행 스크립트와 패키지 경계`
- `Dockerfile 실행 스크립트와 패키지 경계`
- `docker-compose.yml 실행 스크립트와 패키지 경계`
- `pyproject.toml 실행 스크립트와 패키지 경계`
- `uv.lock 실행 스크립트와 패키지 경계`

