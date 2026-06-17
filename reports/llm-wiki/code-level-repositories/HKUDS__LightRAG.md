# HKUDS/LightRAG 코드 레벨 분석

생성일: 2026-06-17T23:31:22.009Z

## 기본 판정

| 항목 | 값 |
| --- | --- |
| type | graph-rag/kg |
| maturity | A integrated platform (106) |
| stars | 36711 |
| language | Python |
| tags | rag, knowledge-base, korea-signal |
| files/code/source | 663/498/266 |
| tests/ci | 120/13 |
| local path | sources/HKUDS__LightRAG |

## 파이프라인 단계

| 단계 | 상태 | matched files | source files | evidence |
| --- | --- | --- | --- | --- |
| Ingestion/source intake | code | 57 | 30 | lightrag/constants.py:134 # enqueue docs_format (the 'lightrag' ingestion entrypoint was removed). |
| Parsing/OCR/document extraction | code | 127 | 50 | lightrag/base.py:800 PARSING = "parsing" # Phase 1: content extraction (parse_native/mineru/docling) |
| Chunking/splitting | code | 131 | 52 | lightrag_webui/vite.config.ts:76 // Ensure consistent chunk naming format |
| Embedding/vector index | code | 196 | 70 | k8s-deploy/install_lightrag_dev.sh:65 --set-string env.EMBEDDING_MODEL=text-embedding-ada-002 \ |
| Retrieval/search/rerank | code | 155 | 67 | lightrag/evaluation/offline_retrieval_check.py:71 def reciprocal_rank(self) -> float: |
| Wiki/graph/entity model | code | 130 | 46 | lightrag/addon_params.py:4 controls things like summary language and entity-type prompt overrides. The |
| Memory/update lifecycle | code | 262 | 115 | lightrag_webui/eslint.config.js:4 import reactRefresh from 'eslint-plugin-react-refresh' |
| Provenance/citation/evidence | code | 94 | 41 | lightrag/base.py:156 containing citation information for the retrieved content. |
| Evaluation/observability | code | 50 | 19 | lightrag/llm_roles.py:37 ``api/config.py``, queue observability, role config update flow) iterates |
| Agent/MCP/tool surface | code | 121 | 41 | k8s-deploy/install_lightrag_dev.sh:26 read -s -p "Enter your OpenAI API key: " OPENAI_API_KEY |

## 의존성 신호

- LLM/app framework: anthropic, llama-index, llama-index-llms-openai, ollama, openai, langchain-text-splitters, langchain-experimental
- Vector/search store: faiss-cpu, opensearch-py, pgvector, pymilvus, qdrant-client
- Graph/KG store: networkx, neo4j
- Document parsing/OCR: pypdf, python-docx
- Eval/observability: ragas, langfuse
- Persistence/database: asyncpg, pgvector, redis

## 주요 파일 후보

### Ingestion/source intake

- `lightrag/constants.py`
- `lightrag/lightrag.py`
- `lightrag/pipeline.py`
- `lightrag/utils_graph.py`
- `lightrag/utils_pipeline.py`
- `lightrag/utils.py`
- `lightrag/api/config.py`
- `lightrag/kg/faiss_impl.py`
- `lightrag/kg/json_doc_status_impl.py`
- `lightrag/kg/json_kv_impl.py`
- `lightrag/kg/nano_vector_db_impl.py`
- `lightrag/kg/networkx_impl.py`
- ... 6 more

### Parsing/OCR/document extraction

- `lightrag/base.py`
- `lightrag/constants.py`
- `lightrag/pipeline.py`
- `lightrag/table_markup.py`
- `lightrag/utils_pipeline.py`
- `scripts/regen_native_docx_golden.py`
- `lightrag/api/lightrag_server.py`
- `lightrag/chunker/__init__.py`
- `lightrag/chunker/paragraph_semantic.py`
- `lightrag/parser/__init__.py`
- `lightrag/parser/_markdown.py`
- `lightrag/parser/base.py`
- ... 6 more

### Chunking/splitting

- `lightrag_webui/vite.config.ts`
- `lightrag/addon_params.py`
- `lightrag/base.py`
- `lightrag/chunk_schema.py`
- `lightrag/constants.py`
- `lightrag/exceptions.py`
- `lightrag/lightrag.py`
- `lightrag/multimodal_context.py`
- `lightrag/operate.py`
- `lightrag/pipeline.py`
- `lightrag/prompt.py`
- `lightrag/rerank.py`
- ... 6 more

### Embedding/vector index

- `k8s-deploy/install_lightrag_dev.sh`
- `k8s-deploy/install_lightrag.sh`
- `lightrag/base.py`
- `lightrag/constants.py`
- `lightrag/file_atomic.py`
- `lightrag/lightrag.py`
- `lightrag/llm_roles.py`
- `lightrag/operate.py`
- `lightrag/pipeline.py`
- `lightrag/rerank.py`
- `lightrag/utils_graph.py`
- `lightrag/utils.py`
- ... 6 more

### Retrieval/search/rerank

- `lightrag/evaluation/offline_retrieval_check.py`
- `lightrag_webui/src/features/RetrievalView.tsx`
- `lightrag_webui/src/components/retrieval/ChatMessage.tsx`
- `k8s-deploy/install_lightrag.sh`
- `lightrag/base.py`
- `lightrag/constants.py`
- `lightrag/lightrag.py`
- `lightrag/llm_roles.py`
- `lightrag/multimodal_context.py`
- `lightrag/operate.py`
- `lightrag/pipeline.py`
- `lightrag/prompt.py`
- ... 6 more

### Wiki/graph/entity model

- `lightrag/addon_params.py`
- `lightrag/base.py`
- `lightrag/chunk_schema.py`
- `lightrag/constants.py`
- `lightrag/lightrag.py`
- `lightrag/llm_roles.py`
- `lightrag/multimodal_context.py`
- `lightrag/namespace.py`
- `lightrag/operate.py`
- `lightrag/pipeline.py`
- `lightrag/prompt_multimodal.py`
- `lightrag/prompt.py`
- ... 6 more

### Memory/update lifecycle

- `lightrag_webui/eslint.config.js`
- `lightrag_webui/vite.config.ts`
- `lightrag/addon_params.py`
- `lightrag/base.py`
- `lightrag/constants.py`
- `lightrag/file_atomic.py`
- `lightrag/lightrag.py`
- `lightrag/llm_roles.py`
- `lightrag/multimodal_context.py`
- `lightrag/operate.py`
- `lightrag/pipeline.py`
- `lightrag/prompt.py`
- ... 6 more

### Provenance/citation/evidence

- `lightrag/base.py`
- `lightrag/chunk_schema.py`
- `lightrag/constants.py`
- `lightrag/exceptions.py`
- `lightrag/lightrag.py`
- `lightrag/operate.py`
- `lightrag/pipeline.py`
- `lightrag/prompt_multimodal.py`
- `lightrag/prompt.py`
- `lightrag/storage_migrations.py`
- `lightrag/utils_graph.py`
- `lightrag/utils_pipeline.py`
- ... 6 more

### Evaluation/observability

- `lightrag/llm_roles.py`
- `lightrag/pipeline.py`
- `reproduce/batch_eval.py`
- `k8s-deploy/databases/02-install-database.sh`
- `lightrag/api/lightrag_server.py`
- `lightrag/chunker/paragraph_semantic.py`
- `lightrag/evaluation/__init__.py`
- `lightrag/evaluation/eval_rag_quality.py`
- `lightrag/evaluation/offline_retrieval_check.py`
- `lightrag/kg/milvus_impl.py`
- `lightrag/kg/postgres_impl.py`
- `lightrag/llm/_vision_utils.py`
- ... 6 more

### Agent/MCP/tool surface

- `k8s-deploy/install_lightrag_dev.sh`
- `k8s-deploy/install_lightrag.sh`
- `lightrag/constants.py`
- `lightrag/lightrag.py`
- `lightrag/rerank.py`
- `lightrag/utils.py`
- `reproduce/batch_eval.py`
- `reproduce/Step_1_openai_compatible.py`
- `reproduce/Step_2.py`
- `reproduce/Step_3_openai_compatible.py`
- `.claude/hooks/session-start.sh`
- `lightrag/api/config.py`
- ... 6 more

## Evidence lines

### Ingestion/source intake

| file | line | text |
| --- | --- | --- |
| lightrag/constants.py | 134 | # enqueue docs_format (the 'lightrag' ingestion entrypoint was removed). |
| lightrag/constants.py | 242 | # Processing stage entity/relation extraction (ingestion). Also the wrapper's |
| lightrag/constants.py | 246 | # DEFAULT_PROCESSING_PRIORITY so analysis and ingestion work share the EXTRACT |
| lightrag/constants.py | 247 | # queue fairly and advance evenly — otherwise a busy ingestion queue starves |
| lightrag/lightrag.py | 1514 | upload's upsert and its flush would drop the document body while the |
| lightrag/lightrag.py | 1761 | # doc-ingest pipeline (operate.py:_locked_process_entity_name and |
| lightrag/lightrag.py | 1763 | # insert_custom_kg waits behind an in-flight document ingest |
| lightrag/pipeline.py | 1 | """Document ingestion pipeline mixin for the LightRAG class. |

### Parsing/OCR/document extraction

| file | line | text |
| --- | --- | --- |
| lightrag/base.py | 800 | PARSING = "parsing" # Phase 1: content extraction (parse_native/mineru/docling) |
| lightrag/base.py | 819 | Always a hint-stripped basename (e.g. ``abc.docx``) or the literal |
| lightrag/base.py | 964 | basename: The filename basename to search for (e.g. "report.pdf"). |
| lightrag/base.py | 1033 | [{"reference_id": "1", "file_path": "/path/to/file.pdf"}, ...] |
| lightrag/constants.py | 149 | PARSER_ENGINE_MINERU = "mineru" |
| lightrag/constants.py | 165 | MINERU_RAW_DIR_SUFFIX = ".mineru_raw" # preserved MinerU raw bundle |
| lightrag/constants.py | 216 | # Per-engine parsing concurrency defaults. mineru / docling are |
| lightrag/pipeline.py | 1536 | Marks PARSING, runs the engine-specific parser (mineru / docling / |

### Chunking/splitting

| file | line | text |
| --- | --- | --- |
| lightrag_webui/vite.config.ts | 76 | // Ensure consistent chunk naming format |
| lightrag/addon_params.py | 50 | # Per-strategy chunker parameters; mutate at runtime (e.g. |
| lightrag/addon_params.py | 51 | # ``rag.addon_params["chunker"]["recursive_character"]["separators"] |
| lightrag/addon_params.py | 56 | "chunker": default_chunker_config(), |
| lightrag/addon_params.py | 81 | # ENTITY_TYPE_PROMPT_FILE / SUMMARY_LANGUAGE / chunker still apply. |
| lightrag/addon_params.py | 89 | # Build the chunker default lazily — `default_chunker_config()` reads env |
| lightrag/addon_params.py | 92 | # `chunker` from bypassing a broken environment. |
| lightrag/addon_params.py | 93 | if "chunker" not in normalized: |

### Embedding/vector index

| file | line | text |
| --- | --- | --- |
| k8s-deploy/install_lightrag_dev.sh | 65 | --set-string env.EMBEDDING_MODEL=text-embedding-ada-002 \ |
| k8s-deploy/install_lightrag.sh | 29 | # Create vector extension in PostgreSQL if enabled |
| k8s-deploy/install_lightrag.sh | 32 | print "Creating vector extension in PostgreSQL..." |
| k8s-deploy/install_lightrag.sh | 33 | kubectl exec -it $(kubectl get pods -l kubeblocks.io/role=primary,app.kubernetes.io/instance=pg-cluster -n $NAMESPACE -o name) -n $NAMESPACE -- psql -c "CREATE EXTENSION vector;" |
| k8s-deploy/install_lightrag.sh | 34 | print_success "Vector extension created successfully." |
| k8s-deploy/install_lightrag.sh | 36 | print "Warning: PostgreSQL pods not ready within timeout. Vector extension not created." |
| k8s-deploy/install_lightrag.sh | 78 | --set-string env.EMBEDDING_MODEL=text-embedding-ada-002 \ |
| lightrag/base.py | 92 | - "mix": Integrates knowledge graph and vector retrieval. |

### Retrieval/search/rerank

| file | line | text |
| --- | --- | --- |
| lightrag/evaluation/offline_retrieval_check.py | 71 | def reciprocal_rank(self) -> float: |
| lightrag/evaluation/offline_retrieval_check.py | 186 | reciprocal_ranks = [result.reciprocal_rank() for result in results] |
| lightrag/evaluation/offline_retrieval_check.py | 199 | print("LightRAG sample retrieval check") |
| lightrag/evaluation/offline_retrieval_check.py | 217 | description="Run an offline retrieval check for LightRAG evaluation samples." |
| lightrag/evaluation/offline_retrieval_check.py | 245 | print(f"Sample retrieval check failed: {exc}", file=sys.stderr) |
| lightrag_webui/src/features/RetrievalView.tsx | 10 | import QuerySettings from '@/components/retrieval/QuerySettings' |
| lightrag_webui/src/features/RetrievalView.tsx | 11 | import { ChatMessage, MessageWithError } from '@/components/retrieval/ChatMessage' |
| lightrag_webui/src/features/RetrievalView.tsx | 108 | const isRetrievalTabActive = currentTab === 'retrieval' |

### Wiki/graph/entity model

| file | line | text |
| --- | --- | --- |
| lightrag/addon_params.py | 4 | controls things like summary language and entity-type prompt overrides. The |
| lightrag/base.py | 19 | from .types import KnowledgeGraph |
| lightrag/base.py | 108 | """Number of top items to retrieve. Represents entities in 'local' mode and relationships in 'global' mode.""" |
| lightrag/base.py | 118 | """Maximum number of tokens allocated for entity context in unified token control system.""" |
| lightrag/base.py | 128 | """Maximum total tokens budget for the entire query context (entities + relations + chunks + system prompt).""" |
| lightrag/base.py | 302 | """Delete a single entity by its name. |
| lightrag/base.py | 315 | """Delete relations for a given entity. |
| lightrag/base.py | 728 | """Get all labels(entity names) in the graph. |

### Memory/update lifecycle

| file | line | text |
| --- | --- | --- |
| lightrag_webui/eslint.config.js | 4 | import reactRefresh from 'eslint-plugin-react-refresh' |
| lightrag_webui/eslint.config.js | 22 | 'react-refresh': reactRefresh, |
| lightrag_webui/eslint.config.js | 28 | 'react-refresh/only-export-components': ['warn', { allowConstantExport: true }], |
| lightrag_webui/vite.config.ts | 61 | dedupe: ['katex'] |
| lightrag/addon_params.py | 8 | whenever the contents change so the LightRAG runtime can invalidate cached |
| lightrag/base.py | 182 | in-memory ``_pending_*`` buffer) override this to clear that buffer. |
| lightrag/base.py | 186 | buffer is safe and prevents the poisoned/stale records from being |
| lightrag/base.py | 198 | 1. Clear all data from memory and/or external storage |

### Provenance/citation/evidence

| file | line | text |
| --- | --- | --- |
| lightrag/base.py | 156 | containing citation information for the retrieved content. |
| lightrag/base.py | 530 | A list of (source_id, target_id) tuples representing edges, |
| lightrag/base.py | 822 | citation paths all share this value. |
| lightrag/chunk_schema.py | 339 | citations still resolve back to the original parser output. |
| lightrag/constants.py | 48 | # Separator for: description, source_id and relation-key fields(Can not be changed after data inserted) |
| lightrag/exceptions.py | 155 | persisting chunks with missing/incorrect provenance. |
| lightrag/lightrag.py | 594 | """Strategy for enforcing source_id limits: IGNORE_NEW or FIFO.""" |
| lightrag/lightrag.py | 1066 | meta_fields={"entity_name", "source_id", "content", "file_path"}, |

### Evaluation/observability

| file | line | text |
| --- | --- | --- |
| lightrag/llm_roles.py | 37 | ``api/config.py``, queue observability, role config update flow) iterates |
| lightrag/llm_roles.py | 71 | runtime observability and role-builder context. |
| lightrag/llm_roles.py | 477 | """Return effective role LLM runtime configuration (observability snapshot). |
| lightrag/pipeline.py | 146 | # string used by the pipeline observability layer and the resume path. |
| reproduce/batch_eval.py | 53 | Output your evaluation in the following JSON format: |
| reproduce/batch_eval.py | 105 | metadata={"description": "nightly eval job"}, |
| k8s-deploy/databases/02-install-database.sh | 45 | if ! eval "$CONDITION &> /dev/null"; then |
| lightrag/api/lightrag_server.py | 1169 | # Compare timestamps (5 second tolerance to avoid file system time precision issues) |

### Agent/MCP/tool surface

| file | line | text |
| --- | --- | --- |
| k8s-deploy/install_lightrag_dev.sh | 26 | read -s -p "Enter your OpenAI API key: " OPENAI_API_KEY |
| k8s-deploy/install_lightrag_dev.sh | 36 | read -p "Enter OpenAI API base URL (press Enter to skip if not needed): " OPENAI_API_BASE |
| k8s-deploy/install_lightrag_dev.sh | 60 | --set-string env.LLM_BINDING=openai \ |
| k8s-deploy/install_lightrag_dev.sh | 64 | --set-string env.EMBEDDING_BINDING=openai \ |
| k8s-deploy/install_lightrag.sh | 9 | read -s -p "Enter your OpenAI API key: " OPENAI_API_KEY |
| k8s-deploy/install_lightrag.sh | 19 | read -p "Enter OpenAI API base URL (press Enter to skip if not needed): " OPENAI_API_BASE |
| k8s-deploy/install_lightrag.sh | 73 | --set-string env.LLM_BINDING=openai \ |
| k8s-deploy/install_lightrag.sh | 77 | --set-string env.EMBEDDING_BINDING=openai \ |

## Gap

_없음_
