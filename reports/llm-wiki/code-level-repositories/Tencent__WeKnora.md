# Tencent/WeKnora 코드 레벨 분석

생성일: 2026-06-17T23:31:12.955Z

## 기본 판정

| 항목 | 값 |
| --- | --- |
| type | graph-rag/kg |
| maturity | A integrated platform (108) |
| stars | 16422 |
| language | Go |
| tags | rag, knowledge-base, document-chat, agent-knowledge, korea-signal |
| files/code/source | 1943/1543/1508 |
| tests/ci | 19/8 |
| local path | sources/Tencent__WeKnora |

## 파이프라인 단계

| 단계 | 상태 | matched files | source files | evidence |
| --- | --- | --- | --- | --- |
| Ingestion/source intake | code | 156 | 131 | internal/agent/prompts_wiki.go:4 // concept page produced by ONE ingest batch in a single call, so the whole set |
| Parsing/OCR/document extraction | code | 184 | 128 | internal/agent/observe.go:183 // XML blocks inside the `<runtime_context>` envelope without losing readability. |
| Chunking/splitting | code | 295 | 261 | internal/agent/engine_test.go:40 for _, chunk := range resp.chunks { |
| Embedding/vector index | code | 344 | 286 | internal/models/embedding/aliyun.go:1 package embedding |
| Retrieval/search/rerank | code | 446 | 368 | internal/types/retrieval_config.go:8 // RetrievalConfig holds the global retrieval/search configuration for a tenant. |
| Wiki/graph/entity model | code | 135 | 106 | internal/agent/prompts_wiki_test.go:90 const slugs = "entity/acme = Acme Corp\nconcept/rag = Retrieval-Augmented Generation" |
| Memory/update lifecycle | code | 651 | 583 | internal/agent/act.go:9 "sync" |
| Provenance/citation/evidence | code | 95 | 80 | internal/agent/prompts_wiki.go:206 - "details": A short 1-3 sentence fallback summary in {{.Language}}. This is ONLY used when chunk-level citation fails downstream, so it does NOT need to be exhaustive. Keep it under 300 characters. |
| Evaluation/observability | code | 159 | 130 | internal/agent/act.go:16 "github.com/Tencent/WeKnora/internal/tracing/langfuse" |
| Agent/MCP/tool surface | code | 513 | 436 | cmd/desktop/main.go:79 'agent-list-container','agent-list-content','org-list-container','org-list-content','aside_box', |

## 의존성 신호

- LLM/app framework: github.com/ollama/ollama, github.com/sashabaranov/go-openai
- Vector/search store: github.com/elastic/go-elasticsearch/v7, github.com/elastic/go-elasticsearch/v8, github.com/milvus-io/milvus/client/v2, github.com/opensearch-project/opensearch-go/v4, github.com/pgvector/pgvector-go, github.com/qdrant/go-client, github.com/weaviate/weaviate, github.com/weaviate/weaviate-go-client/v5
- Graph/KG store: github.com/neo4j/neo4j-go-driver/v6
- Document parsing/OCR: docx-preview, beautifulsoup4, markitdown, pypdf, pypdfium2, python-docx
- Eval/observability: github.com/getsentry/sentry-go, github.com/grpc-ecosystem/go-grpc-prometheus, github.com/prometheus/client_golang, github.com/prometheus/client_model, github.com/prometheus/common, github.com/prometheus/procfs, go.opentelemetry.io/auto/sdk, go.opentelemetry.io/contrib/instrumentation/google.golang.org/grpc/otelgrpc
- Persistence/database: github.com/charmbracelet/lipgloss, github.com/asg017/sqlite-vec-go-bindings, github.com/duckdb/duckdb-go/v2, github.com/go-sql-driver/mysql, github.com/jackc/pgx/v5, github.com/pganalyze/pg_query_go/v6, github.com/pgvector/pgvector-go, github.com/redis/go-redis/v9

## 주요 파일 후보

### Ingestion/source intake

- `internal/agent/prompts_wiki.go`
- `internal/container/container.go`
- `internal/datasource/connector_test.go`
- `internal/datasource/connector.go`
- `internal/datasource/errors.go`
- `internal/handler/datasource_credentials.go`
- `internal/handler/datasource.go`
- `internal/handler/knowledge.go`
- `internal/handler/wiki_page.go`
- `internal/im/service.go`
- `internal/router/router.go`
- `internal/router/task.go`
- ... 6 more

### Parsing/OCR/document extraction

- `internal/agent/observe.go`
- `internal/agent/prompts_wiki.go`
- `internal/agent/prompts.go`
- `internal/config/config.go`
- `internal/errors/parse_error_codes.go`
- `internal/handler/initialization.go`
- `internal/handler/knowledge.go`
- `internal/handler/tenant.go`
- `internal/im/service.go`
- `internal/router/router_files_test.go`
- `internal/router/router.go`
- `internal/searchutil/imageinfo.go`
- ... 6 more

### Chunking/splitting

- `internal/agent/engine_test.go`
- `internal/agent/finalize.go`
- `internal/agent/prompts_wiki.go`
- `internal/agent/think.go`
- `internal/container/container.go`
- `internal/datasource/scheduler.go`
- `internal/handler/chunk.go`
- `internal/handler/chunker_debug_test.go`
- `internal/handler/chunker_debug.go`
- `internal/handler/embed_channel_exchange_test.go`
- `internal/handler/embed_channel.go`
- `internal/handler/embed_flow_test.go`
- ... 6 more

### Embedding/vector index

- `internal/models/embedding/aliyun.go`
- `internal/models/embedding/azure_openai_test.go`
- `internal/models/embedding/azure_openai.go`
- `internal/models/embedding/batch.go`
- `internal/models/embedding/config_from_model_test.go`
- `internal/models/embedding/dimensions_policy_test.go`
- `internal/models/embedding/embedder.go`
- `internal/models/embedding/gemini_test.go`
- `internal/models/embedding/gemini.go`
- `internal/models/embedding/jina.go`
- `internal/models/embedding/langfuse_wrapper.go`
- `internal/models/embedding/llm_debug.go`
- ... 6 more

### Retrieval/search/rerank

- `internal/types/retrieval_config.go`
- `internal/tracing/langfuse/retrieval_obs.go`
- `internal/agent/act.go`
- `internal/agent/engine.go`
- `internal/agent/observe_test.go`
- `internal/agent/observe.go`
- `internal/agent/prompts_wiki_test.go`
- `internal/agent/prompts_wiki.go`
- `internal/agent/prompts.go`
- `internal/config/config.go`
- `internal/container/audit_sink.go`
- `internal/container/container.go`
- ... 6 more

### Wiki/graph/entity model

- `internal/agent/prompts_wiki_test.go`
- `internal/agent/prompts_wiki.go`
- `internal/common/tools_test.go`
- `internal/event/event_data.go`
- `internal/event/event.go`
- `internal/handler/initialization.go`
- `internal/handler/knowledgebase.go`
- `internal/handler/web_search_provider.go`
- `internal/handler/wiki_page.go`
- `internal/im/command.go`
- `internal/router/rbac.go`
- `internal/router/router.go`
- ... 6 more

### Memory/update lifecycle

- `internal/agent/act.go`
- `internal/agent/engine_test.go`
- `internal/agent/engine.go`
- `internal/agent/observe.go`
- `internal/agent/prompts_wiki_test.go`
- `internal/agent/prompts_wiki.go`
- `internal/agent/prompts.go`
- `internal/config/auth_legacy_env_test.go`
- `internal/config/config.go`
- `internal/container/audit_sink_test.go`
- `internal/container/cleanup.go`
- `internal/container/container.go`
- ... 6 more

### Provenance/citation/evidence

- `internal/agent/prompts_wiki.go`
- `internal/handler/knowledgebase_copy_preflight_test.go`
- `internal/handler/knowledgebase.go`
- `internal/im/service.go`
- `internal/types/embedding.go`
- `internal/types/faq.go`
- `internal/types/graph.go`
- `internal/types/retriever.go`
- `internal/types/task.go`
- `internal/types/wiki_page.go`
- `internal/application/repository/wiki_page.go`
- `internal/application/service/chunk.go`
- ... 6 more

### Evaluation/observability

- `internal/agent/act.go`
- `internal/agent/engine.go`
- `internal/agent/langfuse_test.go`
- `internal/agent/prompts_wiki.go`
- `internal/container/container.go`
- `internal/datasource/scheduler.go`
- `internal/handler/auth_register_by_invite.go`
- `internal/handler/chunker_debug_test.go`
- `internal/handler/chunker_debug.go`
- `internal/handler/evaluation.go`
- `internal/handler/knowledge.go`
- `internal/handler/knowledgebase.go`
- ... 6 more

### Agent/MCP/tool surface

- `cmd/desktop/main.go`
- `cmd/desktop/update.go`
- `internal/agent/act.go`
- `internal/agent/const.go`
- `internal/agent/engine_image_test.go`
- `internal/agent/engine_test.go`
- `internal/agent/engine.go`
- `internal/agent/finalize.go`
- `internal/agent/langfuse_test.go`
- `internal/agent/observe_test.go`
- `internal/agent/observe.go`
- `internal/agent/prompts_wiki_test.go`
- ... 6 more

## Evidence lines

### Ingestion/source intake

| file | line | text |
| --- | --- | --- |
| internal/agent/prompts_wiki.go | 4 | // concept page produced by ONE ingest batch in a single call, so the whole set |
| internal/agent/prompts_wiki.go | 48 | // Wiki ingest prompt templates for LLM-powered wiki page generation. |
| internal/agent/prompts_wiki.go | 49 | // These prompts are used by the wiki ingest pipeline to extract structured |
| internal/container/container.go | 58 | feishuConnector "github.com/Tencent/WeKnora/internal/datasource/connector/feishu" |
| internal/container/container.go | 59 | notionConnector "github.com/Tencent/WeKnora/internal/datasource/connector/notion" |
| internal/container/container.go | 60 | yuqueConnector "github.com/Tencent/WeKnora/internal/datasource/connector/yuque" |
| internal/container/container.go | 416 | // initLangfuse initializes the Langfuse ingestion client. |
| internal/container/container.go | 1297 | // startup hang; xlsx/xls ingest may fail later without these extensions. |

### Parsing/OCR/document extraction

| file | line | text |
| --- | --- | --- |
| internal/agent/observe.go | 183 | // XML blocks inside the `<runtime_context>` envelope without losing readability. |
| internal/agent/prompts_wiki.go | 56 | // content (e.g. scanned PDFs named after the scanner model "MX5280.pdf"), |
| internal/agent/prompts.go | 71 | FileType string // File type (pdf, docx, etc.) |
| internal/config/config.go | 176 | // for OCR-heavy large PDFs while ensuring forward progress. |
| internal/errors/parse_error_codes.go | 23 | // error (encoding, corrupted file, OCR engine crash, ...). |
| internal/errors/parse_error_codes.go | 43 | // ErrCodeMultimodalVLMFailed — a single image's OCR or caption call |
| internal/errors/parse_error_codes.go | 49 | // The parent still completes (caption / OCR is optional content), |
| internal/handler/initialization.go | 2226 | "ocr": result["ocr"], |

### Chunking/splitting

| file | line | text |
| --- | --- | --- |
| internal/agent/engine_test.go | 40 | for _, chunk := range resp.chunks { |
| internal/agent/engine_test.go | 41 | ch <- chunk |
| internal/agent/finalize.go | 96 | func(chunk *types.StreamResponse, fullContent string) { |
| internal/agent/finalize.go | 98 | if chunk.ResponseType == types.ResponseTypeThinking { |
| internal/agent/finalize.go | 101 | if chunk.Content != "" { |
| internal/agent/finalize.go | 102 | logger.Debugf(ctx, "[Agent][FinalAnswer] Emitting answer chunk: %d chars", len(chunk.Content)) |
| internal/agent/finalize.go | 108 | Content: chunk.Content, |
| internal/agent/finalize.go | 109 | Done: chunk.Done, |

### Embedding/vector index

| file | line | text |
| --- | --- | --- |
| internal/models/embedding/aliyun.go | 1 | package embedding |
| internal/models/embedding/aliyun.go | 18 | // AliyunMultimodalEmbeddingEndpoint 阿里云 DashScope 多模态 Embedding API 端点 |
| internal/models/embedding/aliyun.go | 19 | AliyunMultimodalEmbeddingEndpoint = "/api/v1/services/embeddings/multimodal-embedding/multimodal-embedding" |
| internal/models/embedding/aliyun.go | 22 | // AliyunEmbedder implements text vectorization using Aliyun DashScope multimodal embedding API |
| internal/models/embedding/aliyun.go | 47 | // AliyunEmbedParameters represents the parameters for Aliyun DashScope multimodal embedding |
| internal/models/embedding/aliyun.go | 52 | // AliyunEmbedRequest represents an Aliyun DashScope multimodal embedding request |
| internal/models/embedding/aliyun.go | 59 | // AliyunEmbedInput represents the input structure for Aliyun embedding |
| internal/models/embedding/aliyun.go | 69 | // AliyunEmbedResponse represents an Aliyun DashScope embedding response |

### Retrieval/search/rerank

| file | line | text |
| --- | --- | --- |
| internal/types/retrieval_config.go | 8 | // RetrievalConfig holds the global retrieval/search configuration for a tenant. |
| internal/types/retrieval_config.go | 9 | // This replaces the retrieval-related fields previously scattered in ConversationConfig |
| internal/types/retrieval_config.go | 10 | // and ChatHistoryConfig. Both knowledge search and message search share these parameters. |
| internal/types/retrieval_config.go | 13 | // at /tenants/kv/retrieval-config. |
| internal/types/retrieval_config.go | 15 | // EmbeddingTopK is the maximum number of chunks returned by vector search (default: 50) |
| internal/types/retrieval_config.go | 23 | // RerankThreshold is the minimum rerank score (-10 to 10, default: 0.2) |
| internal/types/retrieval_config.go | 25 | // RerankModelID is the ID of the rerank model to use (required for search) |
| internal/types/retrieval_config.go | 32 | // RRFVectorWeight is the weight applied to the vector retriever inside RRF. |

### Wiki/graph/entity model

| file | line | text |
| --- | --- | --- |
| internal/agent/prompts_wiki_test.go | 90 | const slugs = "entity/acme = Acme Corp\nconcept/rag = Retrieval-Augmented Generation" |
| internal/agent/prompts_wiki.go | 3 | // WikiTaxonomyPlanPrompt assigns a directory path (category) to every entity / |
| internal/agent/prompts_wiki.go | 31 | - Do NOT use the item type ("entity"/"concept") as a folder. Do NOT put slashes inside a single label. |
| internal/agent/prompts_wiki.go | 43 | {"slug": "entity/zhang-san", "path": ["人物"]}, |
| internal/agent/prompts_wiki.go | 77 | 5. **Wiki-link rule**: The available_wiki_pages list above maps slugs to display names and their aliases (format: "[[slug]] = display name (Aliases: a, b)"). Whenever you mention a name or alias that matches a listed ent |
| internal/agent/prompts_wiki.go | 87 | // WikiKnowledgeExtractPrompt extracts both entities and concepts in a single LLM call. |
| internal/agent/prompts_wiki.go | 88 | // Returns a JSON object with "entities" and "concepts" arrays. |
| internal/agent/prompts_wiki.go | 90 | const WikiKnowledgeExtractPrompt = `You are a knowledge extraction system. Analyze the following document and extract all significant entities AND key concepts. |

### Memory/update lifecycle

| file | line | text |
| --- | --- | --- |
| internal/agent/act.go | 9 | "sync" |
| internal/agent/act.go | 18 | "golang.org/x/sync/errgroup" |
| internal/agent/act.go | 199 | var mu sync.Mutex |
| internal/agent/engine_test.go | 6 | "sync" |
| internal/agent/engine_test.go | 25 | mu sync.Mutex |
| internal/agent/engine.go | 10 | agentmemory "github.com/Tencent/WeKnora/internal/agent/memory" |
| internal/agent/engine.go | 32 | // engine therefore does not maintain its own cache, system-prompt store, or |
| internal/agent/engine.go | 47 | memoryConsolidator *agentmemory.Consolidator // Memory consolidator for LLM-powered summarization (optional) |

### Provenance/citation/evidence

| file | line | text |
| --- | --- | --- |
| internal/agent/prompts_wiki.go | 206 | - "details": A short 1-3 sentence fallback summary in {{.Language}}. This is ONLY used when chunk-level citation fails downstream, so it does NOT need to be exhaustive. Keep it under 300 characters. |
| internal/agent/prompts_wiki.go | 260 | const WikiChunkCitationPrompt = `You are a precise citation system. Your job is to scan a batch of document chunks and decide, for each candidate entity/concept below, which chunks substantively discuss it. |
| internal/agent/prompts_wiki.go | 289 | "citations": { |
| internal/agent/prompts_wiki.go | 306 | If nothing in this batch is cite-worthy, return: {"citations": {}, "new_slugs": []} |
| internal/agent/prompts_wiki.go | 321 | ### STRICT CITATION & MERGE RULES (CRITICAL): |
| internal/agent/prompts_wiki.go | 322 | 1. **Preserve Citations:** When merging new information with existing content, you MUST strictly preserve all existing inline chunk citations (e.g., [c003]). |
| internal/agent/prompts_wiki.go | 323 | 2. **Mandatory Tracing:** Any newly added factual claim, entity, or numerical data MUST be followed by an inline citation to the appropriate new source chunk (e.g., [c003]). |
| internal/agent/prompts_wiki.go | 324 | 3. **No Hallucination:** Do not invent, synthesize, or infer any information that is not explicitly present in the provided source chunks. If the new chunks clearly and directly supersede or contradict existing content, |

### Evaluation/observability

| file | line | text |
| --- | --- | --- |
| internal/agent/act.go | 16 | "github.com/Tencent/WeKnora/internal/tracing/langfuse" |
| internal/agent/act.go | 21 | // langfuseToolOutputPreview caps the Output field we send to Langfuse for a |
| internal/agent/act.go | 24 | // Langfuse UI for every tool call is noisy. We keep a generous slice so the |
| internal/agent/act.go | 43 | // map. Used when we choose not to send the raw arguments to Langfuse |
| internal/agent/act.go | 54 | // finishToolSpan serialises a completed tool call into a Langfuse span |
| internal/agent/act.go | 56 | // a single assignment per line and the observability-specific logic |
| internal/agent/act.go | 58 | func finishToolSpan(span *langfuse.Span, tc types.ToolCall, execErr error, durationMs int64) { |
| internal/agent/act.go | 77 | // search-result payloads). Only report key shape so Langfuse |

### Agent/MCP/tool surface

| file | line | text |
| --- | --- | --- |
| cmd/desktop/main.go | 79 | 'agent-list-container','agent-list-content','org-list-container','org-list-content','aside_box', |
| cmd/desktop/update.go | 59 | // Add User-Agent header which is required/recommended by GitHub API |
| cmd/desktop/update.go | 60 | req.Header.Set("User-Agent", "WeKnora-Lite-Desktop-App") |
| internal/agent/act.go | 1 | package agent |
| internal/agent/act.go | 12 | agenttools "github.com/Tencent/WeKnora/internal/agent/tools" |
| internal/agent/act.go | 58 | func finishToolSpan(span *langfuse.Span, tc types.ToolCall, execErr error, durationMs int64) { |
| internal/agent/act.go | 175 | logger.Infof(ctx, "[Agent][Round-%d] Executing %d tool call(s)", round, n) |
| internal/agent/act.go | 196 | logger.Infof(ctx, "[Agent][Round-%d] Parallel execution of %d tool calls", round, n) |

## Gap

_없음_
