# HKUDS/LightRAG 구조 분석

생성일: 2026-06-17T22:56:52.162Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/HKUDS__LightRAG |
| remote | https://github.com/HKUDS/LightRAG |
| HEAD | ad7161b (2026-06-12) 📝 chore(env): remove milvus migration memory settings |
| branch | main |
| groups | adjacent-tech-50, llm-wiki-100, previous-clone-inventory-107 |
| files | 679 |
| dirs | 124 |
| stack | Node/TypeScript/JavaScript, Python |

## 구조 해석

- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- 스펙/템플릿/명령/스킬 아티팩트가 있어 에이전트나 SDD 워크플로우가 저장소 구조의 일부다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- 테스트 파일이 충분히 노출되어 기능 검증과 회귀 검증 흐름을 추적할 수 있다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `🚀 LightRAG: Simple and Fast Retrieval-Augmented Generation`, `🎉 News`, `Installation`, `Install LightRAG Server`, `Install LightRAG Server as tool using uv (recommended)`, `Or using pip`, `python -m venv .venv`, `source .venv/bin/activate  # Windows: .venv\Scripts\activate`, `pip install "lightrag-hku[api]"`, `Build front-end artifacts`, `Setup env file`, `Obtain the env.example file by downloading it from the GitHub repository root`, `or by copying it from a local source checkout.`, `Launch the server`, `Bootstrap the development environment (recommended)`, `Or on Windows: .venv\Scripts\activate`, `make dev installs the test toolchain plus the full offline stack`, `(API, storage backends, and provider integrations), then builds the frontend.`

> <div align="center" <div style="margin 20px 0;" <img src="./assets/logo.png" width="120" height="120" alt="LightRAG Logo" style="border radius 20px; box shadow 0 8px 32px rgba(0, 217, 255, 0.3);" </div 🚀 LightRAG Simple and Fast Retrieval Augmented Generation <div align="center" <a href="https //trendshift.io/repositories/13043" target=" blank" <img src="https //trendshift.io/api/badge/repositories/13043" alt="HKUDS%2FLightRAG Trendshift" style="width 250px; height 55px;" width="250" height="55"/ </a </div <p </p <div align="center" <div style="width 100%; height 2px; margin 20px 0; background linear gradient(90deg, transparent, 00d9ff, transparent);" </div </div <div align="center" <div style="background linear gradient(135deg, 667eea 0%, 764ba2 100%); border radius 15px; padding 25px; text align center;" <p <a href='https //github.com/HKUDS/LightRAG' <img src='https //img.shields.io/b

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .claude | dir |
| .clinerules | dir |
| .dockerignore | file |
| .gitattributes | file |
| .github | dir |
| .gitignore | file |
| .pre-commit-config.yaml | file |
| AGENTS.md | file |
| assets | dir |
| CLAUDE.md | file |
| config.ini.example | file |
| docker-build-push.sh | file |
| docker-compose-full.yml | file |
| docker-compose.podman.yml | file |
| docker-compose.yml | file |
| Dockerfile | file |
| Dockerfile.lite | file |
| Dockerfile.postgres | file |
| docs | dir |
| env.docker-compose-full | file |
| env.example | file |
| examples | dir |
| k8s-deploy | dir |
| LICENSE | file |
| lightrag | dir |
| lightrag_webui | dir |
| lightrag.service.example | file |
| Makefile | file |
| MANIFEST.in | file |
| prompts | dir |
| pyproject.toml | file |
| README-zh.md | file |
| README.assets | dir |
| README.md | file |
| reproduce | dir |
| requirements-offline-llm.txt | file |
| requirements-offline-storage.txt | file |
| requirements-offline.txt | file |
| scripts | dir |
| SECURITY.md | file |
| setup.py | file |
| tests | dir |
| uv.lock | file |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| tests/ | 217 |
| lightrag/ | 162 |
| lightrag_webui/ | 126 |
| docs/ | 30 |
| examples/ | 30 |
| k8s-deploy/ | 30 |
| (root) | 29 |
| scripts/ | 24 |
| .github/ | 15 |
| reproduce/ | 7 |
| .claude/ | 2 |
| assets/ | 2 |
| prompts/ | 2 |
| README.assets/ | 2 |
| .clinerules/ | 1 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| docs/ | 30 | preferred |
| examples/ | 30 | preferred |
| tests/ | 217 | preferred |
| scripts/ | 24 | preferred |
| lightrag/ | 162 | large |
| lightrag_webui/ | 126 | large |
| lightrag_webui/src/ | 110 | large |
| tests/kg/ | 65 | large |
| lightrag_webui/src/components/ | 60 | large |
| tests/parser/ | 45 | large |
| lightrag/parser/ | 42 | large |
| k8s-deploy/ | 30 | large |
| tests/llm/ | 27 | large |
| tests/parser/docx/ | 24 | large |
| lightrag/tools/ | 21 | large |
| scripts/setup/ | 21 | large |
| lightrag/api/ | 19 | large |
| tests/api/ | 19 | large |
| lightrag/llm/ | 18 | large |
| tests/kg/postgres_impl/ | 18 | large |
| lightrag/kg/ | 17 | large |
| lightrag/parser/external/ | 17 | large |
| tests/pipeline/ | 17 | large |
| .github/ | 15 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `Dockerfile`
- `docker-compose.yml`
- `lightrag/tools/lightrag_visualizer/requirements.txt`
- `lightrag_webui/bun.lock`
- `lightrag_webui/package.json`
- `lightrag_webui/tsconfig.json`
- `lightrag_webui/vite.config.ts`
- `pyproject.toml`
- `uv.lock`

### package.json

| 경로 | 이름 | scripts | deps |
| --- | --- | --- | --- |
| lightrag_webui/package.json | lightrag-webui | dev, build, lint, preview, test, test:watch, test:coverage, dev:bun, build:bun, preview:bun | @faker-js/faker, @radix-ui/react-alert-dialog, @radix-ui/react-checkbox, @radix-ui/react-dialog, @radix-ui/react-popover, @radix-ui/react-progress, @radix-ui/react-scroll-area, @radix-ui/react-select, @radix-ui/react-separator, @radix-ui/react-slot, @radix-ui/react-tabs, @radix-ui/react-tooltip, @radix-ui/react-use-controllable-state, @react-sigma/core |

### pyproject.toml

| 경로 | 이름 | poetry | uv | ruff | pytest |
| --- | --- | --- | --- | --- | --- |
| pyproject.toml | lightrag-hku | false | false | true | true |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `.github/CONTRIBUTING.md`
- `README.md`
- `docs/AdvancedFeatures.md`
- `docs/Algorithm.md`
- `docs/AsymmetricEmbedding.md`
- `docs/DockerDeployment.md`
- `docs/FileProcessingPipeline-zh.md`
- `docs/FileProcessingPipeline.md`
- `docs/FrontendBuildGuide.md`
- `docs/InteractiveSetup.md`
- `docs/LightRAG-API-Server-zh.md`
- `docs/LightRAG-API-Server.assets/image-20250323122538997.png`
- `docs/LightRAG-API-Server.assets/image-20250323122754387.png`
- `docs/LightRAG-API-Server.assets/image-20250323123011220.png`
- `docs/LightRAG-API-Server.assets/image-20250323194750379.png`
- `docs/LightRAG-API-Server.md`
- `docs/LightRAGSidecarFormat-zh.md`
- `docs/LightRAGSidecarFormat.md`
- `docs/MilvusConfigurationGuide.md`
- `docs/MultiSiteDeployment.md`
- `docs/OfflineDeployment.md`
- `docs/ParagraphSemanticChunking-zh.md`
- `docs/ParagraphSemanticChunking.md`
- `docs/ParserDebugCLI-zh.md`
- `docs/ParserDebugCLI.md`
- `docs/ProgramingWithCore.md`
- `docs/Reproduce.md`
- `docs/RoleSpecificLLMConfiguration-zh.md`
- `docs/RoleSpecificLLMConfiguration.md`
- `docs/ThirdPartyParser-zh.md`
- `docs/ThirdPartyParser.md`
- `docs/UV_LOCK_GUIDE.md`
- `k8s-deploy/README.md`
- `k8s-deploy/databases/README.md`
- `lightrag/evaluation/sample_documents/README.md`
- `lightrag/tools/lightrag_visualizer/README.md`
- `lightrag_webui/README.md`

### 에이전트 지침 후보

- `.claude/hooks/session-start.sh`
- `.claude/settings.json`
- `AGENTS.md`
- `CLAUDE.md`

### 스펙/템플릿/명령/스킬 후보

- `k8s-deploy/lightrag/templates/NOTES.txt`
- `k8s-deploy/lightrag/templates/_helpers.tpl`
- `k8s-deploy/lightrag/templates/deployment.yaml`
- `k8s-deploy/lightrag/templates/pvc.yaml`
- `k8s-deploy/lightrag/templates/secret.yaml`
- `k8s-deploy/lightrag/templates/service.yaml`
- `scripts/setup/templates/memgraph.yml`
- `scripts/setup/templates/milvus-gpu.yml`
- `scripts/setup/templates/milvus.yml`
- `scripts/setup/templates/mongodb.yml`
- `scripts/setup/templates/neo4j.yml`
- `scripts/setup/templates/opensearch.yml`
- `scripts/setup/templates/postgres.yml`
- `scripts/setup/templates/qdrant-gpu.yml`
- `scripts/setup/templates/qdrant.yml`
- `scripts/setup/templates/redis.conf.template`
- `scripts/setup/templates/redis.yml`
- `scripts/setup/templates/vllm-embed-gpu.yml`
- `scripts/setup/templates/vllm-embed.yml`
- `scripts/setup/templates/vllm-rerank-gpu.yml`
- `scripts/setup/templates/vllm-rerank.yml`

## 테스트 / CI / 배포 표면

### 테스트 후보

- `lightrag_webui/src/api/lightrag.test.ts`
- `lightrag_webui/src/features/documentStatusFilters.test.ts`
- `lightrag_webui/src/lib/pathPrefix.test.ts`
- `tests/__init__.py`
- `tests/api/__init__.py`
- `tests/api/auth/__init__.py`
- `tests/api/auth/test_auth.py`
- `tests/api/auth/test_token_auto_renewal.py`
- `tests/api/config/__init__.py`
- `tests/api/config/test_api_config_bedrock.py`
- `tests/api/config/test_api_config_gemini.py`
- `tests/api/config/test_api_config_role_max_async.py`
- `tests/api/config/test_api_config_vlm_enable.py`
- `tests/api/routes/__init__.py`
- `tests/api/routes/test_aquery_data_endpoint.py`
- `tests/api/routes/test_curl_aquery_data.sh`
- `tests/api/routes/test_description_api_validation.py`
- `tests/api/routes/test_document_routes_chunking.py`
- `tests/api/routes/test_document_routes_docx_archive.py`
- `tests/api/routes/test_document_routes_paginated.py`
- `tests/api/routes/test_graph_routes_pipeline_busy.py`
- `tests/api/test_lightrag_ollama_chat.py`
- `tests/api/test_path_prefixes.py`
- `tests/chunker/__init__.py`
- `tests/chunker/test_chunk_options_persistence.py`
- `tests/chunker/test_chunker_recursive_character.py`
- `tests/chunker/test_chunker_semantic_vector.py`
- `tests/chunker/test_chunking.py`
- `tests/chunker/test_chunking_raw_lightrag_parity.py`
- `tests/chunker/test_overlap_validation.py`
- `tests/chunker/test_paragraph_semantic_merge_and_fallback.py`
- `tests/chunker/test_paragraph_semantic_split_long_block.py`
- `tests/chunker/test_paragraph_semantic_table_split.py`
- `tests/chunker/test_rerank_chunking.py`
- `tests/chunker/test_sidecar_backfill_integration.py`
- `tests/chunker/test_token_window_source_span.py`
- `tests/conftest.py`
- `tests/evaluation/__init__.py`
- `tests/evaluation/test_evaluation_offline_retrieval_check.py`
- `tests/extraction/__init__.py`
- `tests/extraction/test_entity_extraction_stability.py`
- `tests/extraction/test_extract_entities.py`
- `tests/extraction/test_keyword_extraction_drivers.py`
- `tests/extraction/test_keyword_parsing.py`
- `tests/extraction/test_keyword_prompt_template.py`
- `tests/extraction/test_summary_sanitization.py`
- `tests/kg/__init__.py`
- `tests/kg/faiss_impl/__init__.py`
- `tests/kg/faiss_impl/test_atomic_write_faiss.py`
- `tests/kg/faiss_impl/test_faiss_deferred_embedding.py`
- `tests/kg/faiss_impl/test_faiss_meta_inconsistency.py`
- `tests/kg/json_impl/__init__.py`
- `tests/kg/json_impl/test_atomic_write_write_json.py`
- `tests/kg/json_impl/test_json_doc_status_storage.py`
- `tests/kg/json_impl/test_write_json_optimization.py`
- `tests/kg/memgraph_impl/__init__.py`
- `tests/kg/memgraph_impl/test_memgraph_storage.py`
- `tests/kg/milvus_impl/__init__.py`
- `tests/kg/milvus_impl/test_milvus_deferred_embedding.py`
- `tests/kg/milvus_impl/test_milvus_index_config.py`
- `tests/kg/milvus_impl/test_milvus_index_creation.py`
- `tests/kg/milvus_impl/test_milvus_kwargs_bridge.py`
- `tests/kg/milvus_impl/test_milvus_migration_memory.py`
- `tests/kg/milvus_impl/test_milvus_migration_retry.py`
- `tests/kg/mongo_impl/__init__.py`
- `tests/kg/mongo_impl/test_client_manager_lifecycle.py`
- `tests/kg/mongo_impl/test_mongo_deferred_embedding.py`
- `tests/kg/mongo_impl/test_mongo_storage.py`
- `tests/kg/nano_impl/__init__.py`
- `tests/kg/nano_impl/test_atomic_write_nano.py`
- `tests/kg/nano_impl/test_nano_deferred_embedding.py`
- `tests/kg/neo4j_impl/__init__.py`
- `tests/kg/neo4j_impl/test_neo4j_fulltext_index.py`
- `tests/kg/neo4j_impl/test_search_labels_sanitize.py`
- `tests/kg/neo4j_impl/test_workspace_label_injection.py`
- `tests/kg/networkx_impl/__init__.py`
- `tests/kg/networkx_impl/test_networkx_atomic_write.py`
- `tests/kg/networkx_impl/test_networkx_index_done.py`
- `tests/kg/opensearch_impl/__init__.py`
- `tests/kg/opensearch_impl/test_cwe89_opensearch_injection.py`
- ... 40 more

### CI/Docker 후보

- `.github/workflows/copilot-setup-steps.yml`
- `.github/workflows/docker-build-lite.yml`
- `.github/workflows/docker-build-manual.yml`
- `.github/workflows/docker-publish.yml`
- `.github/workflows/linting.yaml`
- `.github/workflows/pypi-publish.yml`
- `.github/workflows/stale.yaml`
- `.github/workflows/tests.yml`
- `Dockerfile`
- `docker-compose-full.yml`
- `docker-compose.podman.yml`
- `docker-compose.yml`
- `env.docker-compose-full`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .py | 374 |
| .tsx | 74 |
| .md | 52 |
| .yml | 29 |
| .json | 25 |
| .ts | 25 |
| .sh | 22 |
| .yaml | 15 |
| .png | 12 |
| .jsonl | 8 |
| .txt | 7 |
| .example | 4 |
| .gitignore | 3 |
| .js | 3 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `docs/ 내부 책임 분리`
- `examples/ 내부 책임 분리`
- `tests/ 내부 책임 분리`
- `scripts/ 내부 책임 분리`
- `lightrag/ 내부 책임 분리`
- `k8s-deploy/lightrag/templates/NOTES.txt 스펙/명령 의미`
- `k8s-deploy/lightrag/templates/_helpers.tpl 스펙/명령 의미`
- `k8s-deploy/lightrag/templates/deployment.yaml 스펙/명령 의미`
- `k8s-deploy/lightrag/templates/pvc.yaml 스펙/명령 의미`
- `k8s-deploy/lightrag/templates/secret.yaml 스펙/명령 의미`
- `Dockerfile 실행 스크립트와 패키지 경계`
- `docker-compose.yml 실행 스크립트와 패키지 경계`
- `lightrag/tools/lightrag_visualizer/requirements.txt 실행 스크립트와 패키지 경계`
- `lightrag_webui/bun.lock 실행 스크립트와 패키지 경계`
- `lightrag_webui/package.json 실행 스크립트와 패키지 경계`

