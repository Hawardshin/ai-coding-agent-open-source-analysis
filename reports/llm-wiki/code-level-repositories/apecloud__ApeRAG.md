# apecloud/ApeRAG 코드 레벨 분석

생성일: 2026-06-17T23:31:44.410Z

## 기본 판정

| 항목 | 값 |
| --- | --- |
| type | graph-rag/kg |
| maturity | A integrated platform (108) |
| stars | 1193 |
| language | Python |
| tags | rag, knowledge-base, agent-knowledge |
| files/code/source | 1097/804/732 |
| tests/ci | 74/22 |
| local path | sources/apecloud__ApeRAG |

## 파이프라인 단계

| 단계 | 상태 | matched files | source files | evidence |
| --- | --- | --- | --- | --- |
| Ingestion/source intake | code | 64 | 32 | aperag/config.py:29 from aperag.vectorstore.connector import VectorStoreConnectorAdaptor |
| Parsing/OCR/document extraction | code | 84 | 35 | aperag/config.py:153 # OCR/ASR |
| Chunking/splitting | code | 64 | 31 | aperag/docparser/chunking.py:180 splitter = SimpleSemanticSplitter(self.tokenizer) |
| Embedding/vector index | code | 179 | 88 | aperag/llm/embed/base_embedding.py:50 Get embedding dimension by probing the embedding service. |
| Retrieval/search/rerank | code | 256 | 143 | aperag/app.py:81 description="Knowledge management and retrieval system", |
| Wiki/graph/entity model | code | 84 | 39 | aperag/db/models.py:734 """LightRAG VDB Entity Storage Model""" |
| Memory/update lifecycle | code | 293 | 168 | aperag/app.py:83 lifespan=combined_lifespan, # Combined lifecycle management |
| Provenance/citation/evidence | code | 36 | 21 | aperag/db/models.py:756 source_id = Column(String(256), nullable=True) |
| Evaluation/observability | code | 99 | 53 | aperag/app.py:19 # Initialize OpenTelemetry FIRST - before any other imports |
| Agent/MCP/tool surface | code | 154 | 77 | aperag/app.py:36 from aperag.agent.agent_event_listener import agent_event_listener # noqa: E402 |

## 의존성 신호

- LLM/app framework: langchain, llama-index, openai, llama-index-embeddings-langchain, llama-index-vector-stores-qdrant, litellm, sentence-transformers, transformers
- Vector/search store: qdrant-client, elasticsearch, llama-index-vector-stores-qdrant, pgvector
- Graph/KG store: neo4j
- Document parsing/OCR: markitdown, pypdfium2
- Eval/observability: opentelemetry-api, opentelemetry-sdk, opentelemetry-exporter-otlp, opentelemetry-exporter-jaeger, opentelemetry-instrumentation-fastapi, opentelemetry-instrumentation-sqlalchemy, ragas
- Persistence/database: redis, psycopg2-binary, asyncpg, sqlalchemy, pgvector, psycopg, psycopg-pool, aiosqlite

## 주요 파일 후보

### Ingestion/source intake

- `aperag/config.py`
- `config/export_tasks.py`
- `scripts/release-charts.sh`
- `.github/utils/release_gitlab.sh`
- `.github/utils/utils.sh`
- `aperag/context/context.py`
- `aperag/docparser/mineru_parser.py`
- `aperag/index/summary_index.py`
- `aperag/index/vector_index.py`
- `aperag/index/vision_index.py`
- `aperag/schema/view_models.py`
- `aperag/service/chat_document_service.py`
- ... 6 more

### Parsing/OCR/document extraction

- `aperag/config.py`
- `aperag/docparser/docray_parser.py`
- `aperag/docparser/markitdown_parser.py`
- `aperag/docparser/mineru_common.py`
- `aperag/docparser/mineru_parser.py`
- `aperag/docparser/utils.py`
- `aperag/evaluation/run.py`
- `aperag/index/document_parser.py`
- `aperag/mcp/server.py`
- `aperag/schema/view_models.py`
- `aperag/service/collection_service.py`
- `aperag/service/document_service.py`
- ... 6 more

### Chunking/splitting

- `aperag/docparser/chunking.py`
- `config/export_tasks.py`
- `models/generate_model_configs.py`
- `aperag/graph/lightrag_manager.py`
- `aperag/index/fulltext_index.py`
- `aperag/index/summary_index.py`
- `aperag/objectstore/local.py`
- `aperag/objectstore/s3.py`
- `aperag/schema/view_models.py`
- `aperag/service/agent_chat_service.py`
- `aperag/service/chat_completion_service.py`
- `aperag/service/chat_service.py`
- ... 6 more

### Embedding/vector index

- `aperag/llm/embed/base_embedding.py`
- `aperag/llm/embed/embedding_service.py`
- `aperag/llm/embed/embedding_utils.py`
- `web/src/api/models/embedding-data.ts`
- `web/src/api/models/embedding-request.ts`
- `web/src/api/models/embedding-response.ts`
- `web/src/api/models/embedding-usage.ts`
- `aperag/config.py`
- `config/celery_tasks.py`
- `models/generate_model_configs.py`
- `scripts/entrypoint.sh`
- `scripts/init-es.sh`
- ... 6 more

### Retrieval/search/rerank

- `aperag/app.py`
- `aperag/config.py`
- `aperag/exceptions.py`
- `models/generate_model_configs.py`
- `.github/utils/extract_chart_n_image_list.sh`
- `.github/utils/generate_release_notes.py`
- `aperag/agent/agent_history_manager.py`
- `aperag/agent/i18n.py`
- `aperag/agent/tool_reference_extractor.py`
- `aperag/agent/tool_use_message_formatters.py`
- `aperag/concurrent_control/__init__.py`
- `aperag/concurrent_control/manager.py`
- ... 6 more

### Wiki/graph/entity model

- `aperag/db/models.py`
- `aperag/index/vision_index.py`
- `aperag/schema/view_models.py`
- `aperag/service/graph_service.py`
- `aperag/service/prompt_template_service.py`
- `aperag/views/prompts.py`
- `aperag/db/repositories/graph.py`
- `aperag/db/repositories/lightrag.py`
- `aperag/graph/lightrag/base.py`
- `aperag/graph/lightrag/context_types.py`
- `aperag/graph/lightrag/lightrag.py`
- `aperag/graph/lightrag/namespace.py`
- ... 6 more

### Memory/update lifecycle

- `aperag/app.py`
- `aperag/config.py`
- `config/celery_tasks.py`
- `models/generate_model_configs.py`
- `scripts/download_tiktokens.py`
- `.github/utils/feature_triage.sh`
- `.github/utils/merge_releasing_branch.sh`
- `.github/utils/merge_releasing_pr.sh`
- `.github/utils/pcregrep.py`
- `.github/utils/release_gitlab.sh`
- `.github/utils/utils.sh`
- `aperag/agent/__init__.py`
- ... 6 more

### Provenance/citation/evidence

- `aperag/db/models.py`
- `aperag/schema/view_models.py`
- `aperag/service/graph_service.py`
- `aperag/service/prompt_template_service.py`
- `aperag/service/test_mcp_agent.py`
- `aperag/db/repositories/graph.py`
- `aperag/db/repositories/lightrag.py`
- `aperag/graph/lightrag/base.py`
- `aperag/graph/lightrag/lightrag.py`
- `aperag/graph/lightrag/operate.py`
- `aperag/graph/lightrag/prompt.py`
- `aperag/graph/lightrag/types.py`
- ... 6 more

### Evaluation/observability

- `aperag/app.py`
- `aperag/config.py`
- `config/celery_tasks.py`
- `.github/utils/extract_chart_n_image_list.sh`
- `.github/utils/functions.bash`
- `aperag/concurrent_control/redis_lock.py`
- `aperag/db/models.py`
- `aperag/db/ops.py`
- `aperag/evaluation/__init__.py`
- `aperag/evaluation/run.py`
- `aperag/flow/engine.py`
- `aperag/mcp/server.py`
- ... 6 more

### Agent/MCP/tool surface

- `aperag/app.py`
- `aperag/exceptions.py`
- `models/generate_model_configs.py`
- `scripts/download_tiktokens.py`
- `aperag/agent/__init__.py`
- `aperag/agent/agent_config.py`
- `aperag/agent/agent_event_listener.py`
- `aperag/agent/agent_event_processor.py`
- `aperag/agent/agent_history_manager.py`
- `aperag/agent/agent_memory_manager.py`
- `aperag/agent/agent_message_queue.py`
- `aperag/agent/agent_session_manager_lifecycle.py`
- ... 6 more

## Evidence lines

### Ingestion/source intake

| file | line | text |
| --- | --- | --- |
| aperag/config.py | 29 | from aperag.vectorstore.connector import VectorStoreConnectorAdaptor |
| config/export_tasks.py | 144 | # Phase 6: upload ZIP to object store |
| scripts/release-charts.sh | 20 | function upload() { |
| scripts/release-charts.sh | 31 | upload aperag |
| scripts/release-charts.sh | 34 | upload llmserver |
| .github/utils/release_gitlab.sh | 18 | 2) upload release asset |
| .github/utils/release_gitlab.sh | 21 | 5) upload code |
| .github/utils/release_gitlab.sh | 27 | -ap, --asset-path Upload asset file path |

### Parsing/OCR/document extraction

| file | line | text |
| --- | --- | --- |
| aperag/config.py | 153 | # OCR/ASR |
| aperag/docparser/docray_parser.py | 36 | ".pdf", |
| aperag/docparser/docray_parser.py | 37 | ".docx", |
| aperag/docparser/docray_parser.py | 39 | ".pptx", |
| aperag/docparser/markitdown_parser.py | 19 | from markitdown import MarkItDown |
| aperag/docparser/markitdown_parser.py | 33 | ".pdf", |
| aperag/docparser/markitdown_parser.py | 34 | ".docx", |
| aperag/docparser/markitdown_parser.py | 35 | ".doc", # convert to .docx first |

### Chunking/splitting

| file | line | text |
| --- | --- | --- |
| aperag/docparser/chunking.py | 180 | splitter = SimpleSemanticSplitter(self.tokenizer) |
| aperag/docparser/chunking.py | 181 | chunks = splitter.split(part.content, self.chunk_size, self.chunk_overlap) |
| aperag/docparser/chunking.py | 185 | for chunk in chunks: |
| aperag/docparser/chunking.py | 186 | parts.append(Part(content=chunk, metadata=metadata.copy())) |
| aperag/docparser/chunking.py | 324 | overlap = "" |
| aperag/docparser/chunking.py | 327 | # to serve as `overlap`. |
| aperag/docparser/chunking.py | 328 | # However, `overlap` cannot be equal to `s[:p]`, otherwise the algorithm won't converge. |
| aperag/docparser/chunking.py | 329 | # Therefore, use the right half of `s[:p]` for splitting to ensure `overlap` is not equal to `s[:p]`. |

### Embedding/vector index

| file | line | text |
| --- | --- | --- |
| aperag/llm/embed/base_embedding.py | 50 | Get embedding dimension by probing the embedding service. |
| aperag/llm/embed/base_embedding.py | 53 | embedding_svc: The embedding service instance |
| aperag/llm/embed/base_embedding.py | 58 | int: The embedding dimension |
| aperag/llm/embed/base_embedding.py | 71 | "Failed to obtain embedding vector while probing dimension", |
| aperag/llm/embed/base_embedding.py | 78 | logger.info(f"Cached embedding dimension for {embedding_provider}/{embedding_model}: {dim}") |
| aperag/llm/embed/base_embedding.py | 81 | logger.error(f"Failed to probe embedding dimension for {embedding_provider}/{embedding_model}: {str(e)}") |
| aperag/llm/embed/base_embedding.py | 83 | f"Failed to probe embedding dimension: {str(e)}", {"provider": embedding_provider, "model": embedding_model} |
| aperag/llm/embed/base_embedding.py | 97 | Create and configure an embedding model instance. |

### Retrieval/search/rerank

| file | line | text |
| --- | --- | --- |
| aperag/app.py | 81 | description="Knowledge management and retrieval system", |
| aperag/app.py | 112 | app.include_router(web_router, prefix="/api/v1") # Add web search router |
| aperag/config.py | 140 | # Fulltext search |
| aperag/exceptions.py | 69 | # Search errors (1700-1799) |
| models/generate_model_configs.py | 222 | mode: Model mode ("chat", "embedding", "rerank") |
| models/generate_model_configs.py | 338 | rerank_models = generate_model_specs(provider_models, provider, "rerank", rerank_blocklist, rerank_tag_rules) |
| models/generate_model_configs.py | 342 | config["rerank"] = rerank_models |
| models/generate_model_configs.py | 381 | rerank_models = generate_model_specs(provider_models, provider, "rerank", rerank_blocklist, rerank_tag_rules) |

### Wiki/graph/entity model

| file | line | text |
| --- | --- | --- |
| aperag/db/models.py | 734 | """LightRAG VDB Entity Storage Model""" |
| aperag/db/models.py | 750 | """LightRAG VDB Relation Storage Model""" |
| aperag/db/models.py | 943 | # Only allow one active suggestion per entity combination per collection |
| aperag/db/models.py | 957 | # Entity combination for merging |
| aperag/db/models.py | 958 | entity_ids = Column(ARRAY(String), nullable=False) # Entity IDs suggested for merging |
| aperag/db/models.py | 959 | entity_ids_hash = Column(String(64), nullable=False) # Hash of entity ID combination for uniqueness |
| aperag/db/models.py | 964 | suggested_target_entity = Column(JSON, nullable=False) # Suggested target entity {entity_name, entity_type} |
| aperag/db/models.py | 977 | """Generate hash for entity ID combination""" |

### Memory/update lifecycle

| file | line | text |
| --- | --- | --- |
| aperag/app.py | 83 | lifespan=combined_lifespan, # Combined lifecycle management |
| aperag/config.py | 115 | # Memory backend |
| aperag/config.py | 161 | # Cache |
| aperag/config.py | 232 | """Convert async database URL to sync version for celery""" |
| aperag/config.py | 243 | """Convert sync database URL to async version""" |
| aperag/config.py | 301 | """Decorator to inject sync session into sync functions""" |
| config/celery_tasks.py | 10 | 1. **Fine-grained tasks**: Each operation (parse, create index, delete index, update index) is a separate task |
| config/celery_tasks.py | 37 | - `delete_index_task`: Delete a single type of index |

### Provenance/citation/evidence

| file | line | text |
| --- | --- | --- |
| aperag/db/models.py | 756 | source_id = Column(String(256), nullable=True) |
| aperag/db/models.py | 884 | source_id = Column(Text, nullable=True) |
| aperag/db/models.py | 922 | source_id = Column(Text, nullable=True) |
| aperag/schema/view_models.py | 1195 | source_id: Optional[str] = Field( |
| aperag/schema/view_models.py | 1247 | source_id: Optional[str] = Field( |
| aperag/schema/view_models.py | 1313 | source_id: Optional[str] = Field( |
| aperag/schema/view_models.py | 1359 | source_id: Optional[str] = Field( |
| aperag/service/graph_service.py | 125 | - properties: entity_id, entity_type, description, source_id, file_path, entity_name. |

### Evaluation/observability

| file | line | text |
| --- | --- | --- |
| aperag/app.py | 19 | # Initialize OpenTelemetry FIRST - before any other imports |
| aperag/app.py | 22 | # Initialize tracing with configuration |
| aperag/app.py | 48 | from aperag.views.evaluation import router as evaluation_router |
| aperag/config.py | 169 | # OpenTelemetry/Jaeger Tracing |
| config/celery_tasks.py | 846 | # ========== Evaluation Tasks ========== |
| config/celery_tasks.py | 886 | """Task to initialize a specific evaluation.""" |
| config/celery_tasks.py | 900 | logger.error(f"Failed to initialize evaluation {evaluation_id}: {e}", exc_info=True) |
| config/celery_tasks.py | 906 | """Task to process a batch of items for an evaluation.""" |

### Agent/MCP/tool surface

| file | line | text |
| --- | --- | --- |
| aperag/app.py | 36 | from aperag.agent.agent_event_listener import agent_event_listener # noqa: E402 |
| aperag/app.py | 37 | from aperag.agent.agent_session_manager_lifecycle import agent_session_manager_lifespan # noqa: E402 |
| aperag/app.py | 40 | from aperag.mcp import mcp_server |
| aperag/app.py | 56 | from aperag.views.openai import router as openai_router |
| aperag/app.py | 61 | # Initialize MCP server integration with stateless HTTP to fix OpenAI tool call sequence issues |
| aperag/app.py | 65 | # Combined lifespan function for both MCP and Agent session management |
| aperag/app.py | 67 | """Combined lifespan manager for MCP and Agent sessions.""" |
| aperag/app.py | 71 | # Start MCP server first |

## Gap

_없음_
