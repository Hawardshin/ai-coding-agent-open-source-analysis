# arc53/DocsGPT 코드 레벨 분석

생성일: 2026-06-17T23:31:30.315Z

## 기본 판정

| 항목 | 값 |
| --- | --- |
| type | graph-rag/kg |
| maturity | A integrated platform (108) |
| stars | 17938 |
| language | Python |
| tags | rag, document-chat, agent-knowledge, korea-signal |
| files/code/source | 1251/1057/603 |
| tests/ci | 120/26 |
| local path | sources/arc53__DocsGPT |

## 파이프라인 단계

| 단계 | 상태 | matched files | source files | evidence |
| --- | --- | --- | --- | --- |
| Ingestion/source intake | code | 167 | 71 | application/app.py:28 from application.api.connector.routes import connector # noqa: E402 |
| Parsing/OCR/document extraction | code | 87 | 29 | setup.ps1:501 $pdf_image = Read-Host "Parse PDF pages as images for better table/chart extraction? (y/N)" |
| Chunking/splitting | code | 140 | 64 | application/parser/chunking.py:9 class Chunker: |
| Embedding/vector index | code | 109 | 39 | application/parser/embedding_pipeline.py:28 Remove NUL characters that can cause vector store ingestion to fail. |
| Retrieval/search/rerank | code | 258 | 102 | application/mcp_server.py:1 """FastMCP server exposing DocsGPT retrieval over streamable HTTP. |
| Wiki/graph/entity model | code | 12 | 2 | frontend/src/Navigation.tsx:659 alt="Join Discord community" |
| Memory/update lifecycle | code | 441 | 217 | application/app.py:226 # browser still carries a stale or expired Bearer token — otherwise the |
| Provenance/citation/evidence | code | 142 | 66 | application/usage.py:112 # Repository would raise on the attribution check — log instead |
| Evaluation/observability | code | 28 | 10 | application/core/logging_config.py:52 When OTLP log export is enabled, ``opentelemetry-instrument`` attaches a |
| Agent/MCP/tool surface | code | 475 | 207 | setup.ps1:229 Write-ColorText "2) Serve Local (with Ollama)" -ForegroundColor "Yellow" |

## 의존성 신호

- LLM/app framework: anthropic, langchain, langchain-community, langchain-core, langchain-openai, langchain-text-splitters, openai, sentence-transformers
- Vector/search store: faiss-cpu
- Graph/KG store: networkx
- Document parsing/OCR: beautifulsoup4, docx2txt, pypdf
- Eval/observability: opentelemetry-distro, opentelemetry-exporter-otlp, opentelemetry-instrumentation-celery, opentelemetry-instrumentation-flask, opentelemetry-instrumentation-logging, opentelemetry-instrumentation-psycopg, opentelemetry-instrumentation-redis, opentelemetry-instrumentation-requests
- Persistence/database: @types/pg, pg, opentelemetry-instrumentation-psycopg, opentelemetry-instrumentation-redis, opentelemetry-instrumentation-sqlalchemy, psycopg, redis, sqlalchemy

## 주요 파일 후보

### Ingestion/source intake

- `application/app.py`
- `application/worker.py`
- `application/core/settings.py`
- `application/llm/google_ai.py`
- `application/llm/openai.py`
- `application/parser/embedding_pipeline.py`
- `application/seed/seeder.py`
- `frontend/src/Navigation.tsx`
- `frontend/src/store.ts`
- `scripts/db/backfill.py`
- `scripts/db/migrate_model_ids.py`
- `scripts/qa/durability_e2e.py`
- ... 6 more

### Parsing/OCR/document extraction

- `setup.ps1`
- `setup.sh`
- `application/utils.py`
- `application/worker.py`
- `application/core/model_yaml.py`
- `application/core/settings.py`
- `application/llm/anthropic.py`
- `application/llm/google_ai.py`
- `application/llm/openai.py`
- `application/llm/handlers/base.py`
- `application/parser/file/bulk.py`
- `application/parser/file/constants.py`
- ... 6 more

### Chunking/splitting

- `application/parser/chunking.py`
- `application/cache.py`
- `application/worker.py`
- `scripts/mock_llm.py`
- `application/agents/default_tools.py`
- `application/devices/broker.py`
- `application/devices/denylist.py`
- `application/devices/normalizer.py`
- `application/devices/splitter.py`
- `application/llm/google_ai.py`
- `application/llm/openai.py`
- `application/llm/sagemaker.py`
- ... 6 more

### Embedding/vector index

- `application/parser/embedding_pipeline.py`
- `application/vectorstore/embeddings_local.py`
- `md-gen.py`
- `setup.ps1`
- `setup.sh`
- `.devcontainer/post-create-command.sh`
- `application/worker.py`
- `scripts/migrate_to_v1_vectorstore.py`
- `application/core/db_uri.py`
- `application/core/settings.py`
- `application/parser/chunking.py`
- `application/vectorstore/base.py`
- ... 6 more

### Retrieval/search/rerank

- `application/mcp_server.py`
- `application/worker.py`
- `scripts/migrate_to_v1_vectorstore.py`
- `scripts/mock_llm.py`
- `application/agents/agentic_agent.py`
- `application/agents/base.py`
- `application/agents/headless_runner.py`
- `application/agents/research_agent.py`
- `application/devices/denylist.py`
- `application/retriever/base.py`
- `application/retriever/classic_rag.py`
- `application/retriever/retriever_creator.py`
- ... 6 more

### Wiki/graph/entity model

- `frontend/src/Navigation.tsx`
- `application/api/user/team_sharing.py`
- `frontend/package-lock.json`
- `extensions/react-widget/package-lock.json`
- `docs/package-lock.json`
- `CODE_OF_CONDUCT.md`
- `README.md`
- `application/requirements.txt`
- `docs/content/index.mdx`
- `docs/content/Agents/basics.mdx`
- `docs/content/Deploying/Postgres-Migration.mdx`
- `docs/content/Tools/creating-a-tool.mdx`

### Memory/update lifecycle

- `application/app.py`
- `application/asgi.py`
- `application/cache.py`
- `application/gunicorn_worker.py`
- `application/logging.py`
- `application/worker.py`
- `frontend/vitest.setup.ts`
- `scripts/mock_llm.py`
- `application/agents/base.py`
- `application/agents/default_tools.py`
- `application/agents/research_agent.py`
- `application/agents/tool_executor.py`
- ... 6 more

### Provenance/citation/evidence

- `application/usage.py`
- `application/worker.py`
- `scripts/migrate_to_v1_vectorstore.py`
- `application/agents/headless_runner.py`
- `application/agents/research_agent.py`
- `application/agents/workflow_agent.py`
- `application/core/model_registry.py`
- `application/core/model_yaml.py`
- `application/llm/base.py`
- `application/parser/embedding_pipeline.py`
- `application/retriever/classic_rag.py`
- `application/seed/seeder.py`
- ... 6 more

### Evaluation/observability

- `application/core/logging_config.py`
- `application/devices/splitter.py`
- `application/events/publisher.py`
- `application/agents/workflows/cel_evaluator.py`
- `application/alembic/versions/0002_app_metadata.py`
- `application/api/devices/pairing.py`
- `application/api/user/scheduler_worker.py`
- `application/storage/db/serialization.py`
- `application/storage/db/repositories/app_metadata.py`
- `frontend/src/components/ui/time-picker.tsx`
- `.devcontainer/docker-compose.override.yaml`
- `tests/test_integration.py`
- ... 6 more

### Agent/MCP/tool surface

- `setup.ps1`
- `setup.sh`
- `application/app.py`
- `application/asgi.py`
- `application/logging.py`
- `application/mcp_server.py`
- `application/usage.py`
- `application/utils.py`
- `application/worker.py`
- `scripts/mock_llm.py`
- `application/agents/agent_creator.py`
- `application/agents/agentic_agent.py`
- ... 6 more

## Evidence lines

### Ingestion/source intake

| file | line | text |
| --- | --- | --- |
| application/app.py | 28 | from application.api.connector.routes import connector # noqa: E402 |
| application/app.py | 67 | app.register_blueprint(connector) |
| application/worker.py | 85 | name=f"ingest-heartbeat-{source_id}", |
| application/worker.py | 119 | "source.ingest.progress", |
| application/worker.py | 407 | Ingest and process documents. |
| application/worker.py | 412 | formats (list of str): List of file extensions to consider for ingestion (e.g., [".rst", ".md"]). |
| application/worker.py | 413 | job_name (str): Name of the job for this ingestion task (original, unsanitized). |
| application/worker.py | 416 | user (str): Identifier for the user initiating the ingestion (original, unsanitized). |

### Parsing/OCR/document extraction

| file | line | text |
| --- | --- | --- |
| setup.ps1 | 501 | $pdf_image = Read-Host "Parse PDF pages as images for better table/chart extraction? (y/N)" |
| setup.ps1 | 504 | Write-ColorText "PDF-as-image parsing enabled." -ForegroundColor "Green" |
| setup.ps1 | 507 | $ocr_enabled = Read-Host "Enable OCR for document processing (Docling)? (y/N)" |
| setup.ps1 | 510 | Write-ColorText "Docling OCR enabled." -ForegroundColor "Green" |
| setup.ps1 | 572 | Write-ColorText "5) Document Processing (PDF as image, OCR)" -ForegroundColor "Yellow" |
| setup.sh | 359 | read -p "$(echo -e "${DEFAULT_FG}Parse PDF pages as images for better table/chart extraction? (y/N): ${NC}")" pdf_image |
| setup.sh | 362 | echo -e "${GREEN}PDF-as-image parsing enabled.${NC}" |
| setup.sh | 365 | read -p "$(echo -e "${DEFAULT_FG}Enable OCR for document processing (Docling)? (y/N): ${NC}")" ocr_enabled |

### Chunking/splitting

| file | line | text |
| --- | --- | --- |
| application/parser/chunking.py | 9 | class Chunker: |
| application/parser/chunking.py | 87 | def chunk( |
| application/cache.py | 116 | for chunk in cached_response: |
| application/cache.py | 117 | yield chunk |
| application/cache.py | 124 | for chunk in func(self, model, messages, stream, tools, *args, **kwargs): |
| application/cache.py | 125 | yield chunk |
| application/cache.py | 126 | stream_cache_data.append(str(chunk)) |
| application/worker.py | 21 | from application.parser.chunking import Chunker |

### Embedding/vector index

| file | line | text |
| --- | --- | --- |
| application/parser/embedding_pipeline.py | 28 | Remove NUL characters that can cause vector store ingestion to fail. |
| application/parser/embedding_pipeline.py | 47 | """Add a document's text and metadata to the vector store with retry logic. |
| application/parser/embedding_pipeline.py | 50 | store: The vector store object. |
| application/parser/embedding_pipeline.py | 160 | """Embeds documents and stores them in a vector store. |
| application/parser/embedding_pipeline.py | 171 | folder_name: Directory to save the vector store. |
| application/parser/embedding_pipeline.py | 191 | OSError: If unable to create folder or save vector store. |
| application/parser/embedding_pipeline.py | 211 | # Initialize vector store |
| application/parser/embedding_pipeline.py | 212 | if settings.VECTOR_STORE == "faiss": |

### Retrieval/search/rerank

| file | line | text |
| --- | --- | --- |
| application/mcp_server.py | 1 | """FastMCP server exposing DocsGPT retrieval over streamable HTTP. |
| application/mcp_server.py | 25 | search, |
| application/mcp_server.py | 43 | """Search the caller's DocsGPT knowledge base. |
| application/mcp_server.py | 46 | the MCP request — the same opaque key that ``/api/search`` accepts |
| application/mcp_server.py | 54 | return await asyncio.to_thread(search, api_key, query, chunks) |
| application/worker.py | 401 | retriever="classic", |
| application/worker.py | 417 | retriever (str): Type of retriever to use for processing the documents. |
| application/worker.py | 599 | "retriever": retriever, |

### Wiki/graph/entity model

| file | line | text |
| --- | --- | --- |
| frontend/src/Navigation.tsx | 659 | alt="Join Discord community" |
| application/api/user/team_sharing.py | 4 | the grant endpoint and the per-entity list/get/update paths share one source of |
| extensions/react-widget/package-lock.json | 1708 | "node_modules/@eslint-community/eslint-utils": { |
| extensions/react-widget/package-lock.json | 1710 | "resolved": "https://registry.npmjs.org/@eslint-community/eslint-utils/-/eslint-utils-4.9.1.tgz", |
| extensions/react-widget/package-lock.json | 1727 | "node_modules/@eslint-community/regexpp": { |
| extensions/react-widget/package-lock.json | 1729 | "resolved": "https://registry.npmjs.org/@eslint-community/regexpp/-/regexpp-4.12.2.tgz", |
| extensions/react-widget/package-lock.json | 4219 | "entities": "^4.4.0" |
| extensions/react-widget/package-lock.json | 4555 | "@eslint-community/regexpp": "^4.12.2", |

### Memory/update lifecycle

| file | line | text |
| --- | --- | --- |
| application/app.py | 226 | # browser still carries a stale or expired Bearer token — otherwise the |
| application/app.py | 283 | response.headers["Access-Control-Allow-Methods"] = "GET, POST, PUT, PATCH, DELETE, OPTIONS" |
| application/asgi.py | 34 | allow_methods=["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"], |
| application/cache.py | 17 | # hash so the cache key stays bounded in size and stable across identical content. |
| application/cache.py | 72 | logger.error(f"Cache key generation failed: {e}") |
| application/cache.py | 89 | logger.error(f"Error setting cache: {e}", exc_info=True) |
| application/cache.py | 105 | logger.error(f"Cache key generation failed: {e}") |
| application/cache.py | 114 | logger.info(f"Cache hit for stream key: {cache_key}") |

### Provenance/citation/evidence

| file | line | text |
| --- | --- | --- |
| application/usage.py | 112 | # Repository would raise on the attribution check — log instead |
| application/worker.py | 66 | def _ingest_heartbeat_loop(source_id, stop_event, interval=INGEST_HEARTBEAT_INTERVAL_SECONDS): |
| application/worker.py | 71 | IngestChunkProgressRepository(conn).bump_heartbeat(source_id) |
| application/worker.py | 74 | f"Heartbeat failed for {source_id}: {e}", exc_info=True |
| application/worker.py | 78 | def _start_ingest_heartbeat(source_id): |
| application/worker.py | 83 | args=(str(source_id), stop_event), |
| application/worker.py | 85 | name=f"ingest-heartbeat-{source_id}", |
| application/worker.py | 99 | def _make_parse_progress_callback(task, user, source_id, start_pct, end_pct): |

### Evaluation/observability

| file | line | text |
| --- | --- | --- |
| application/core/logging_config.py | 52 | When OTLP log export is enabled, ``opentelemetry-instrument`` attaches a |
| application/core/logging_config.py | 64 | if h.__class__.__module__.startswith("opentelemetry") |
| application/devices/splitter.py | 1 | """Compound-command splitter for safety evaluation.""" |
| application/events/publisher.py | 39 | """ISO 8601 UTC with millisecond precision and Z suffix.""" |
| application/agents/workflows/cel_evaluator.py | 45 | raise CelEvaluationError(f"CEL evaluation error: {exc}") from exc |
| application/alembic/versions/0002_app_metadata.py | 6 | than dedicated columns so future one-off settings (telemetry opt-in |
| application/api/devices/pairing.py | 354 | result = redis_client.eval(_CLAIM_PAIRING_LUA, 1, key) |
| application/api/devices/pairing.py | 356 | logger.exception("redis eval failed during pairing claim") |

### Agent/MCP/tool surface

| file | line | text |
| --- | --- | --- |
| setup.ps1 | 229 | Write-ColorText "2) Serve Local (with Ollama)" -ForegroundColor "Yellow" |
| setup.ps1 | 246 | Write-ColorText "2) Ollama" -ForegroundColor "Yellow" |
| setup.ps1 | 264 | Write-ColorText "1) OpenAI" -ForegroundColor "Yellow" |
| setup.ps1 | 265 | Write-ColorText "2) Google (Vertex AI, Gemini)" -ForegroundColor "Yellow" |
| setup.ps1 | 266 | Write-ColorText "3) Anthropic (Claude)" -ForegroundColor "Yellow" |
| setup.ps1 | 275 | # Function to prompt for Ollama CPU/GPU options |
| setup.ps1 | 279 | Write-ColorText "Serve Local with Ollama" -ForegroundColor "White" -Bold |
| setup.ps1 | 280 | Write-ColorText "Choose how to serve Ollama:" -ForegroundColor "White" |

## Gap

_없음_
