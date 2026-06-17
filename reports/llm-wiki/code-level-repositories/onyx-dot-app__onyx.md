# onyx-dot-app/onyx 코드 레벨 분석

생성일: 2026-06-17T23:31:26.904Z

## 기본 판정

| 항목 | 값 |
| --- | --- |
| type | rag-knowledge-platform |
| maturity | A integrated platform (108) |
| stars | 30391 |
| language | Python |
| tags | rag, document-chat, korea-signal |
| files/code/source | 5467/4768/3642 |
| tests/ci | 120/60 |
| local path | sources/onyx-dot-app__onyx |

## 파이프라인 단계

| 단계 | 상태 | matched files | source files | evidence |
| --- | --- | --- | --- | --- |
| Ingestion/source intake | code | 770 | 436 | backend/onyx/hooks/points/document_ingestion.py:55 "Connector source type (e.g. confluence, slack, google_drive). " |
| Parsing/OCR/document extraction | code | 171 | 99 | backend/scripts/build_docx_preview.py:1 """Preview + compare harness for the build-session Markdown -> DOCX converter. |
| Chunking/splitting | code | 270 | 191 | backend/onyx/indexing/chunking/document_chunker.py:23 Drop-in replacement for `Chunker._chunk_document_with_sections`. |
| Embedding/vector index | code | 255 | 144 | backend/alembic/versions/1f60f60c3401_embedding_model_search_settings.py:1 """embedding model -> search settings |
| Retrieval/search/rerank | code | 762 | 526 | backend/alembic/versions/50b683a8295c_add_additional_retrieval_controls_to_.py:1 """Add additional retrieval controls to Persona |
| Wiki/graph/entity model | code | 139 | 102 | backend/alembic/versions/0816326d83aa_add_federated_connector_tables.py:51 sa.Column("entities", postgresql.JSONB(), nullable=False), |
| Memory/update lifecycle | code | 1917 | 1280 | backend/model_server/encoders.py:34 pre-warms rotary caches once, and wraps encode() with a lock to avoid cache races. |
| Provenance/citation/evidence | code | 176 | 129 | backend/onyx/main.py:734 # Set endpoint context for per-endpoint DB pool attribution metrics. |
| Evaluation/observability | code | 286 | 167 | backend/onyx/main.py:137 from onyx.server.metrics.postgres_connection_pool import ( |
| Agent/MCP/tool surface | code | 785 | 448 | backend/onyx/main.py:92 from onyx.server.features.mcp.api import admin_router as mcp_admin_router |

## 의존성 신호

- LLM/app framework: litellm, openai, langchain-core, sentence-transformers, transformers
- Vector/search store: opensearch-py, github.com/alecthomas/chroma/v2
- Document parsing/OCR: docx-preview, beautifulsoup4, markitdown, python-docx, pypdf, pypdfium2, unstructured, unstructured-client
- Eval/observability: @sentry/nextjs, prometheus-client, prometheus_client, prometheus_fastapi_instrumentator, sentry-sdk, langfuse, opentelemetry-proto
- Persistence/database: asyncpg, fastapi-users-db-sqlalchemy, psycopg2-binary, redis, SQLAlchemy, types-psycopg2, charm.land/lipgloss/v2, github.com/charmbracelet/lipgloss

## 주요 파일 후보

### Ingestion/source intake

- `backend/onyx/hooks/points/document_ingestion.py`
- `backend/onyx/server/onyx_api/ingestion.py`
- `backend/onyx/main.py`
- `backend/onyx/setup.py`
- `backend/scripts/add_connector_creation_script.py`
- `backend/scripts/force_delete_connector_by_id.py`
- `backend/scripts/resume_paused_connectors.py`
- `backend/scripts/run_enterpriserag_bench_questions.py`
- `backend/scripts/update_connector_prune_freq.py`
- `backend/scripts/upload_files_as_connectors.py`
- `backend/shared_configs/configs.py`
- `backend/alembic/versions/0816326d83aa_add_federated_connector_tables.py`
- ... 6 more

### Parsing/OCR/document extraction

- `backend/scripts/build_docx_preview.py`
- `backend/alembic/versions/0cd424f32b1d_user_file_data_preparation_and_backfill.py`
- `backend/alembic/versions/2020d417ec84_single_onyx_craft_migration.py`
- `backend/alembic/versions/7f5b159041be_skill_built_in_id_discriminator.py`
- `backend/onyx/chat/llm_step.py`
- `backend/onyx/configs/constants.py`
- `backend/onyx/db/enums.py`
- `backend/onyx/db/models.py`
- `backend/onyx/file_processing/extract_file_text.py`
- `backend/onyx/file_processing/file_types.py`
- `backend/onyx/file_processing/html_utils.py`
- `backend/onyx/file_processing/image_utils.py`
- ... 6 more

### Chunking/splitting

- `backend/onyx/indexing/chunking/document_chunker.py`
- `backend/onyx/indexing/chunking/section_chunker.py`
- `backend/onyx/indexing/chunking/text_section_chunker.py`
- `backend/onyx/indexing/chunking/tabular_section_chunker/sheet_descriptor.py`
- `backend/onyx/indexing/chunking/tabular_section_chunker/tabular_section_chunker.py`
- `backend/onyx/indexing/chunking/tabular_section_chunker/util.py`
- `backend/alembic/run_multitenant_migrations.py`
- `backend/scripts/chat_loadtest.py`
- `backend/alembic/versions/12635f6655b7_drive_canonical_ids.py`
- `backend/alembic/versions/2955778aa44c_add_chunk_count_to_document.py`
- `backend/alembic/versions/3781a5eb12cb_add_chunk_stats_table.py`
- `backend/alembic/versions/8aabb57f3b49_restructure_document_indices.py`
- ... 6 more

### Embedding/vector index

- `backend/alembic/versions/1f60f60c3401_embedding_model_search_settings.py`
- `backend/alembic/versions/44f856ae2a4a_add_cloud_embedding_model.py`
- `backend/alembic/versions/dbaa756c2ccf_embedding_models.py`
- `backend/alembic/versions/f17bf3b0d9f1_embedding_provider_by_provider_type.py`
- `backend/onyx/configs/embedding_configs.py`
- `backend/onyx/natural_language_processing/query_embedding_cache.py`
- `backend/onyx/kg/utils/embeddings.py`
- `backend/onyx/server/metrics/embedding.py`
- `backend/scripts/debugging/opensearch/embedding_io.py`
- `backend/onyx/server/manage/embedding/api.py`
- `backend/model_server/encoders.py`
- `backend/onyx/main.py`
- ... 6 more

### Retrieval/search/rerank

- `backend/alembic/versions/50b683a8295c_add_additional_retrieval_controls_to_.py`
- `backend/alembic/versions/7ccea01261f6_store_chat_retrieval_docs.py`
- `backend/alembic/versions/8e1ac4f39a9f_enable_contextual_retrieval.py`
- `backend/onyx/federated_connectors/federated_retrieval.py`
- `backend/onyx/prompts/contextual_retrieval.py`
- `backend/onyx/connectors/google_drive/file_retrieval.py`
- `backend/onyx/document_index/vespa/chunk_retrieval.py`
- `backend/scripts/debugging/opensearch/benchmark_retrieval.py`
- `backend/ee/onyx/external_permissions/google_drive/folder_retrieval.py`
- `backend/onyx/context/search/retrieval/search_runner.py`
- `backend/alembic/env.py`
- `backend/onyx/main.py`
- ... 6 more

### Wiki/graph/entity model

- `backend/alembic/versions/0816326d83aa_add_federated_connector_tables.py`
- `backend/alembic/versions/36e9220ab794_update_kg_trigger_functions.py`
- `backend/alembic/versions/495cb26ce93e_create_knowlege_graph_tables.py`
- `backend/alembic/versions/7b9b952abdf6_update_entities.py`
- `backend/alembic/versions/90e3b9af7da4_tag_fix.py`
- `backend/alembic/versions/9drpiiw74ljy_add_config_to_federated_connector.py`
- `backend/alembic/versions/b156fa702355_chat_reworked.py`
- `backend/alembic/versions/c9e2cd766c29_add_s3_file_store_table.py`
- `backend/onyx/auth/email_utils.py`
- `backend/onyx/chat/save_chat.py`
- `backend/onyx/configs/app_configs.py`
- `backend/onyx/configs/constants.py`
- ... 6 more

### Memory/update lifecycle

- `backend/model_server/encoders.py`
- `backend/model_server/main.py`
- `backend/onyx/main.py`
- `backend/onyx/setup.py`
- `backend/scripts/celery_purge_queue.py`
- `backend/scripts/coding_agent_test.py`
- `backend/scripts/docker_memory_tracking.sh`
- `backend/scripts/force_delete_connector_by_id.py`
- `backend/scripts/hard_delete_chats.py`
- `backend/scripts/make_foss_repo.sh`
- `backend/scripts/orphan_doc_cleanup_script.py`
- `backend/scripts/reset_indexes.py`
- ... 6 more

### Provenance/citation/evidence

- `backend/onyx/main.py`
- `backend/scripts/run_enterpriserag_bench_questions.py`
- `backend/shared_configs/contextvars.py`
- `backend/alembic/versions/7f5b159041be_skill_built_in_id_discriminator.py`
- `backend/alembic/versions/8818cf73fa1a_drop_include_citations.py`
- `backend/alembic/versions/9f696734098f_combine_search_and_chat.py`
- `backend/alembic/versions/b156fa702355_chat_reworked.py`
- `backend/alembic/versions/fcd135795f21_add_slack_bot_display_type.py`
- `backend/onyx/chat/chat_state.py`
- `backend/onyx/chat/chat_utils.py`
- `backend/onyx/chat/citation_processor.py`
- `backend/onyx/chat/citation_utils.py`
- ... 6 more

### Evaluation/observability

- `backend/onyx/main.py`
- `backend/onyx/mcp_server_main.py`
- `backend/scripts/chat_feedback_dump.py`
- `backend/scripts/chat_loadtest.py`
- `backend/shared_configs/configs.py`
- `backend/model_server/legacy/onyx_torch_model.py`
- `backend/onyx/auth/users.py`
- `backend/onyx/background/periodic_poller.py`
- `backend/onyx/chat/compression.py`
- `backend/onyx/chat/llm_loop.py`
- `backend/onyx/chat/llm_step.py`
- `backend/onyx/chat/process_message.py`
- ... 6 more

### Agent/MCP/tool surface

- `backend/onyx/main.py`
- `backend/onyx/mcp_server_main.py`
- `backend/onyx/setup.py`
- `backend/scripts/chat_feedback_dump.py`
- `backend/scripts/coding_agent_test.py`
- `backend/scripts/rotate_llm_provider_keys.py`
- `backend/shared_configs/configs.py`
- `backend/shared_configs/enums.py`
- `backend/shared_configs/model_server_models.py`
- `backend/alembic/versions/12635f6655b7_drive_canonical_ids.py`
- `backend/alembic/versions/177de57c21c9_display_custom_llm_models.py`
- `backend/alembic/versions/2a391f840e85_add_last_refreshed_at_mcp_server.py`
- ... 6 more

## Evidence lines

### Ingestion/source intake

| file | line | text |
| --- | --- | --- |
| backend/onyx/hooks/points/document_ingestion.py | 55 | "Connector source type (e.g. confluence, slack, google_drive). " |
| backend/onyx/hooks/points/document_ingestion.py | 94 | If a Document Ingestion hook is configured, it takes precedence — |
| backend/onyx/hooks/points/document_ingestion.py | 95 | Document Ingestion Light will not run. Configure only one per deployment. |
| backend/onyx/hooks/points/document_ingestion.py | 103 | display_name = "Document Ingestion" |
| backend/onyx/hooks/points/document_ingestion.py | 111 | docs_url = "https://docs.onyx.app/admins/advanced_configs/hook_extensions#document-ingestion" |
| backend/onyx/server/onyx_api/ingestion.py | 43 | @router.get("/connector-docs/{cc_pair_id}") |
| backend/onyx/server/onyx_api/ingestion.py | 60 | @router.get("/ingestion") |
| backend/onyx/server/onyx_api/ingestion.py | 76 | @router.post("/ingestion", dependencies=[Depends(require_vector_db)]) |

### Parsing/OCR/document extraction

| file | line | text |
| --- | --- | --- |
| backend/scripts/build_docx_preview.py | 1 | """Preview + compare harness for the build-session Markdown -> DOCX converter. |
| backend/scripts/build_docx_preview.py | 4 | toward the visual output that pandoc/pypandoc produces. It can: |
| backend/scripts/build_docx_preview.py | 6 | * ``generate`` a ``.docx`` from a Markdown file using the in-tree mistune |
| backend/scripts/build_docx_preview.py | 7 | converter, and (when ``pypandoc`` is importable) the pandoc reference output |
| backend/scripts/build_docx_preview.py | 9 | * ``compare`` two ``.docx`` files structurally (paragraph-style histogram, |
| backend/scripts/build_docx_preview.py | 15 | # Generate <stem>.mistune.docx (+ <stem>.pypandoc.docx if pypandoc present) |
| backend/scripts/build_docx_preview.py | 19 | python -m scripts.build_docx_preview compare a.docx b.docx |
| backend/scripts/build_docx_preview.py | 25 | converter is to avoid shipping the pandoc binary). Install it transiently when |

### Chunking/splitting

| file | line | text |
| --- | --- | --- |
| backend/onyx/indexing/chunking/document_chunker.py | 23 | Drop-in replacement for `Chunker._chunk_document_with_sections`. |
| backend/onyx/indexing/chunking/document_chunker.py | 45 | def chunk( |
| backend/onyx/indexing/chunking/document_chunker.py | 96 | chunker = self._select_chunker(section) |
| backend/onyx/indexing/chunking/document_chunker.py | 97 | result = chunker.chunk_section( |
| backend/onyx/indexing/chunking/section_chunker.py | 16 | texts = cast(list[str], blurb_splitter.chunk(text)) |
| backend/onyx/indexing/chunking/section_chunker.py | 27 | return list(cast(Sequence[str], mini_chunk_splitter.chunk(chunk_text))) |
| backend/onyx/indexing/chunking/section_chunker.py | 32 | """Section-local chunk content without document-scoped fields. |
| backend/onyx/indexing/chunking/text_section_chunker.py | 88 | split_texts = cast(list[str], self.chunk_splitter.chunk(section_text)) |

### Embedding/vector index

| file | line | text |
| --- | --- | --- |
| backend/alembic/versions/1f60f60c3401_embedding_model_search_settings.py | 1 | """embedding model -> search settings |
| backend/alembic/versions/44f856ae2a4a_add_cloud_embedding_model.py | 1 | """add cloud embedding model and update embedding_model |
| backend/alembic/versions/dbaa756c2ccf_embedding_models.py | 1 | """Embedding Models |
| backend/alembic/versions/dbaa756c2ccf_embedding_models.py | 92 | # since all index attempts must be associated with an embedding model, |
| backend/alembic/versions/dbaa756c2ccf_embedding_models.py | 108 | # insert an embedding model row that corresponds to the embedding model |
| backend/alembic/versions/dbaa756c2ccf_embedding_models.py | 110 | # all index_attempts must be associated with an embedding model, so without this |
| backend/alembic/versions/dbaa756c2ccf_embedding_models.py | 127 | # if the user has not overridden the default embedding model via env variables, |
| backend/alembic/versions/f17bf3b0d9f1_embedding_provider_by_provider_type.py | 1 | """embedding provider by provider type |

### Retrieval/search/rerank

| file | line | text |
| --- | --- | --- |
| backend/alembic/versions/50b683a8295c_add_additional_retrieval_controls_to_.py | 1 | """Add additional retrieval controls to Persona |
| backend/alembic/versions/7ccea01261f6_store_chat_retrieval_docs.py | 1 | """Store Chat Retrieval Docs |
| backend/alembic/versions/8e1ac4f39a9f_enable_contextual_retrieval.py | 1 | """enable contextual retrieval |
| backend/onyx/federated_connectors/federated_retrieval.py | 12 | from onyx.context.search.models import ChunkIndexRequest |
| backend/onyx/federated_connectors/federated_retrieval.py | 13 | from onyx.context.search.models import InferenceChunk |
| backend/onyx/federated_connectors/federated_retrieval.py | 46 | # Slack federated search requires a Slack federated connector to be linked |
| backend/onyx/federated_connectors/federated_retrieval.py | 47 | # via document sets. If no document sets are provided, skip Slack federated search. |
| backend/onyx/federated_connectors/federated_retrieval.py | 50 | "Skipping Slack federated search: no document sets provided, " |

### Wiki/graph/entity model

| file | line | text |
| --- | --- | --- |
| backend/alembic/versions/0816326d83aa_add_federated_connector_tables.py | 51 | sa.Column("entities", postgresql.JSONB(), nullable=False), |
| backend/alembic/versions/36e9220ab794_update_kg_trigger_functions.py | 104 | -- Set name and name trigrams for all entities referencing this document |
| backend/alembic/versions/495cb26ce93e_create_knowlege_graph_tables.py | 549 | -- Set name and name trigrams for all entities referencing this document |
| backend/alembic/versions/7b9b952abdf6_update_entities.py | 1 | """update-entities |
| backend/alembic/versions/7b9b952abdf6_update_entities.py | 24 | # new entity type metadata_attribute_conversion |
| backend/alembic/versions/7b9b952abdf6_update_entities.py | 275 | # delete removed entity types |
| backend/alembic/versions/7b9b952abdf6_update_entities.py | 282 | # update entity type attributes |
| backend/alembic/versions/90e3b9af7da4_tag_fix.py | 79 | document, key, and source triplet. This only works if we remove old tags |

### Memory/update lifecycle

| file | line | text |
| --- | --- | --- |
| backend/model_server/encoders.py | 34 | pre-warms rotary caches once, and wraps encode() with a lock to avoid cache races. |
| backend/model_server/main.py | 34 | HF_CACHE_PATH = Path(".cache/huggingface") |
| backend/model_server/main.py | 35 | TEMP_HF_CACHE_PATH = Path(".cache/temp_huggingface") |
| backend/model_server/main.py | 50 | This moves the files from the temp huggingface cache to the huggingface cache |
| backend/model_server/main.py | 54 | the files in the existing huggingface cache that don't exist in the temp |
| backend/model_server/main.py | 55 | huggingface cache. |
| backend/model_server/main.py | 78 | logger.notice("Moving contents of temp_huggingface to huggingface cache.") |
| backend/model_server/main.py | 81 | logger.notice("Moved contents of temp_huggingface to huggingface cache.") |

### Provenance/citation/evidence

| file | line | text |
| --- | --- | --- |
| backend/onyx/main.py | 734 | # Set endpoint context for per-endpoint DB pool attribution metrics. |
| backend/scripts/run_enterpriserag_bench_questions.py | 62 | class Citation(TypedDict, total=False): |
| backend/scripts/run_enterpriserag_bench_questions.py | 270 | (citation for citation in citation_info if _is_valid_citation(citation)), |
| backend/scripts/run_enterpriserag_bench_questions.py | 276 | for citation in sorted_citations: |
| backend/scripts/run_enterpriserag_bench_questions.py | 277 | document_id = citation["document_id"] |
| backend/scripts/run_enterpriserag_bench_questions.py | 285 | def _is_valid_citation(citation: object) -> TypeGuard[Citation]: |
| backend/scripts/run_enterpriserag_bench_questions.py | 287 | isinstance(citation, dict) |
| backend/scripts/run_enterpriserag_bench_questions.py | 289 | citation.get("document_id"), # ty: ignore[invalid-argument-type] |

### Evaluation/observability

| file | line | text |
| --- | --- | --- |
| backend/onyx/main.py | 137 | from onyx.server.metrics.postgres_connection_pool import ( |
| backend/onyx/main.py | 140 | from onyx.server.metrics.prometheus_setup import setup_prometheus_metrics |
| backend/onyx/main.py | 159 | from onyx.tracing.setup import setup_tracing |
| backend/onyx/main.py | 165 | from onyx.utils.telemetry import get_or_generate_uuid |
| backend/onyx/main.py | 166 | from onyx.utils.telemetry import optional_telemetry |
| backend/onyx/main.py | 167 | from onyx.utils.telemetry import RecordType |
| backend/onyx/main.py | 341 | # Register pool metrics now that engines are created. |
| backend/onyx/main.py | 352 | # Self-hosted license seat + expiry gauges on /metrics (EE-only, no-op on CE) |

### Agent/MCP/tool surface

| file | line | text |
| --- | --- | --- |
| backend/onyx/main.py | 92 | from onyx.server.features.mcp.api import admin_router as mcp_admin_router |
| backend/onyx/main.py | 93 | from onyx.server.features.mcp.api import router as mcp_router |
| backend/onyx/main.py | 463 | description="Onyx API for AI-powered chat with search, document indexing, agents, actions, and more", |
| backend/onyx/mcp_server_main.py | 1 | """Entry point for MCP server - HTTP POST transport with API key auth.""" |
| backend/onyx/mcp_server_main.py | 16 | """Run the MCP server.""" |
| backend/onyx/mcp_server_main.py | 18 | logger.info("MCP server is disabled (MCP_SERVER_ENABLED=false)") |
| backend/onyx/mcp_server_main.py | 23 | logger.info("Starting MCP server on %s:%s", MCP_SERVER_HOST, MCP_SERVER_PORT) |
| backend/onyx/setup.py | 244 | logger.notice("Setting up default OpenAI LLM for dev.") |

## Gap

_없음_
