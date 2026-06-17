# infiniflow/ragflow 코드 레벨 분석

생성일: 2026-06-17T23:31:34.477Z

## 기본 판정

| 항목 | 값 |
| --- | --- |
| type | graph-rag/kg |
| maturity | A integrated platform (108) |
| stars | 83027 |
| language | Python |
| tags | rag, agent-knowledge, korea-signal |
| files/code/source | 3355/2695/2311 |
| tests/ci | 120/11 |
| local path | sources/infiniflow__ragflow |

## 파이프라인 단계

| 단계 | 상태 | matched files | source files | evidence |
| --- | --- | --- | --- | --- |
| Ingestion/source intake | code | 281 | 194 | internal/dao/ingestion.go:72 // create ingestion task |
| Parsing/OCR/document extraction | code | 346 | 224 | cmd/ingestor.go:158 ingestor := ingestion.NewIngestor(name, 2, []string{"pdf", "docx", "txt"}) |
| Chunking/splitting | code | 419 | 307 | cmd/server_main.go:47 "ragflow/internal/service/chunk" |
| Embedding/vector index | code | 413 | 250 | internal/utility/embedding_lru.go:24 // EmbeddingLRU is a thread-safe LRU cache for embeddings. |
| Retrieval/search/rerank | code | 747 | 520 | internal/handler/dify_retrieval_handler_test.go:108 func (m *mockRetrievalService) Retrieval(ctx context.Context, req *nlp.RetrievalRequest) (*nlp.RetrievalResult, error) { |
| Wiki/graph/entity model | code | 325 | 260 | internal/admin/service_variables_test.go:20 "ragflow/internal/entity" |
| Memory/update lifecycle | code | 913 | 702 | cmd/admin_server.go:28 "ragflow/internal/cache" |
| Provenance/citation/evidence | code | 104 | 67 | internal/handler/searchbot.go:322 // @Description Retrieves chunks, builds prompt, and streams LLM answer with citations via SSE. |
| Evaluation/observability | code | 140 | 83 | internal/admin/service.go:703 result.DeletedDetails = append(result.DeletedDetails, fmt.Sprintf("- Deleted %d langfuse records.", result.LangfuseCount)) |
| Agent/MCP/tool surface | code | 746 | 554 | cmd/server_main.go:40 "ragflow/internal/agent/runtime" |

## 의존성 신호

- LLM/app framework: openai-speech-stream-player, anthropic, ollama, openai, litellm
- Vector/search store: elasticsearch-dsl, opensearch-py, elasticsearch, github.com/elastic/go-elasticsearch/v8, github.com/elastic/elastic-transport-go/v8
- Graph/KG store: graphrag
- Document parsing/OCR: @extend-ai/react-docx, beautifulsoup4, mammoth, pdfplumber, pypdf, python-docx, readability-lxml, tika
- Eval/observability: langfuse, github.com/prometheus/client_golang, github.com/prometheus/client_model, go.opentelemetry.io/contrib/instrumentation/net/http/otelhttp, go.opentelemetry.io/otel, go.opentelemetry.io/otel/exporters/otlp/otlptrace, go.opentelemetry.io/otel/exporters/otlp/otlptrace/otlptracehttp, go.opentelemetry.io/otel/sdk
- Persistence/database: mysql-connector-python, psycopg2-binary, pymysql, sqlalchemy, github.com/alicebob/miniredis/v2, github.com/glebarez/sqlite, github.com/go-sql-driver/mysql, github.com/redis/go-redis/v9

## 주요 파일 후보

### Ingestion/source intake

- `internal/dao/ingestion.go`
- `internal/ingestion/chunk_engine_test.go`
- `internal/ingestion/chunk_engine.go`
- `internal/ingestion/ingestion_service.go`
- `cmd/ingestor.go`
- `internal/admin/handler.go`
- `internal/admin/router.go`
- `internal/cli/admin_command.go`
- `internal/cli/admin_parser.go`
- `internal/cli/http_client.go`
- `internal/cli/lexer.go`
- `internal/cli/user_command.go`
- ... 6 more

### Parsing/OCR/document extraction

- `cmd/ingestor.go`
- `internal/cli/admin_parser.go`
- `internal/cli/lexer.go`
- `internal/cli/user_command.go`
- `internal/cli/user_parser.go`
- `internal/common/logger.go`
- `internal/deepdoc/client_test.go`
- `internal/deepdoc/client.go`
- `internal/deepdoc/ocr.go`
- `internal/entity/types.go`
- `internal/handler/document_test.go`
- `internal/router/router.go`
- ... 6 more

### Chunking/splitting

- `cmd/server_main.go`
- `internal/cli/lexer.go`
- `internal/cli/response.go`
- `internal/cli/user_command.go`
- `internal/cli/user_parser.go`
- `internal/common/parser_config.go`
- `internal/dao/kb.go`
- `internal/engine/engine.go`
- `internal/handler/chunk.go`
- `internal/handler/datasets.go`
- `internal/handler/dify_retrieval_handler_test.go`
- `internal/handler/dify_retrieval_handler.go`
- ... 6 more

### Embedding/vector index

- `internal/utility/embedding_lru.go`
- `internal/admin/service.go`
- `internal/cli/admin_parser.go`
- `internal/cli/cli.go`
- `internal/cli/lexer.go`
- `internal/cli/response.go`
- `internal/cli/user_command.go`
- `internal/cli/user_parser.go`
- `internal/common/constants.go`
- `internal/common/number.go`
- `internal/common/numeric.go`
- `internal/dao/skill_search_config.go`
- ... 6 more

### Retrieval/search/rerank

- `internal/handler/dify_retrieval_handler_test.go`
- `internal/handler/dify_retrieval_handler.go`
- `internal/agent/tool/retrieval.go`
- `internal/service/kg/retrieval_test.go`
- `internal/service/kg/retrieval.go`
- `internal/service/nlp/retrieval.go`
- `cmd/server_main.go`
- `internal/admin/service.go`
- `internal/cache/redis.go`
- `internal/cli/admin_parser.go`
- `internal/cli/benchmark.go`
- `internal/cli/cli.go`
- ... 6 more

### Wiki/graph/entity model

- `internal/admin/service_variables_test.go`
- `internal/admin/service.go`
- `internal/common/kg_query_rewrite_test.go`
- `internal/common/kg_query_rewrite.go`
- `internal/common/parser_config.go`
- `internal/dao/api_token_test.go`
- `internal/dao/api_token.go`
- `internal/dao/canvas_template.go`
- `internal/dao/chat_session_test.go`
- `internal/dao/chat_session.go`
- `internal/dao/chat.go`
- `internal/dao/connector.go`
- ... 6 more

### Memory/update lifecycle

- `cmd/admin_server.go`
- `cmd/ingestor.go`
- `cmd/server_main.go`
- `internal/admin/handler.go`
- `internal/admin/router.go`
- `internal/admin/service.go`
- `internal/admin/state.go`
- `internal/cache/redis.go`
- `internal/cli/admin_command.go`
- `internal/cli/admin_parser.go`
- `internal/cli/benchmark.go`
- `internal/cli/cli_http.go`
- ... 6 more

### Provenance/citation/evidence

- `internal/handler/searchbot.go`
- `internal/service/ask_service.go`
- `internal/service/chunk_types.go`
- `internal/service/citation_test.go`
- `internal/service/citation.go`
- `internal/agent/canvas/node_body.go`
- `internal/agent/component/v1_stubs.go`
- `internal/agent/dsl/loader_test.go`
- `internal/agent/tool/google_scholar.go`
- `internal/agent/tool/pubmed.go`
- `internal/agent/workflowx/parallel_test.go`
- `internal/cli/filesystem/skill_install.go`
- ... 6 more

### Evaluation/observability

- `internal/admin/service.go`
- `internal/cli/admin_command.go`
- `internal/cli/admin_parser.go`
- `internal/cli/benchmark.go`
- `internal/cli/cli_http.go`
- `internal/cli/lexer.go`
- `internal/cli/response.go`
- `internal/cli/user_command.go`
- `internal/cli/user_parser.go`
- `internal/common/metadata_utils.go`
- `internal/common/number.go`
- `internal/common/status_message.go`
- ... 6 more

### Agent/MCP/tool surface

- `cmd/server_main.go`
- `internal/admin/handler.go`
- `internal/admin/router.go`
- `internal/admin/service.go`
- `internal/cli/admin_command.go`
- `internal/cli/admin_parser.go`
- `internal/cli/cli.go`
- `internal/cli/lexer.go`
- `internal/cli/user_parser.go`
- `internal/dao/api_token_test.go`
- `internal/dao/api_token.go`
- `internal/dao/chat_session_test.go`
- ... 6 more

## Evidence lines

### Ingestion/source intake

| file | line | text |
| --- | --- | --- |
| internal/dao/ingestion.go | 72 | // create ingestion task |
| internal/dao/ingestion.go | 88 | // UpdateStatus Update ingestion task status |
| internal/dao/ingestion.go | 266 | // get all ingestion tasklets |
| internal/dao/ingestion.go | 274 | // get all ingestion tasklet log |
| internal/dao/ingestion.go | 297 | // get all ingestion task log |
| internal/ingestion/chunk_engine_test.go | 17 | package ingestion |
| internal/ingestion/chunk_engine_test.go | 24 | "ragflow/internal/ingestion/chunk" |
| internal/ingestion/chunk_engine.go | 17 | package ingestion |

### Parsing/OCR/document extraction

| file | line | text |
| --- | --- | --- |
| cmd/ingestor.go | 158 | ingestor := ingestion.NewIngestor(name, 2, []string{"pdf", "docx", "txt"}) |
| internal/cli/admin_parser.go | 1298 | modelType = "ocr" |
| internal/cli/admin_parser.go | 1363 | modelType = "ocr" |
| internal/cli/lexer.go | 384 | case "OCR": |
| internal/cli/user_command.go | 2362 | url := "/file/ocr" |
| internal/cli/user_command.go | 2366 | return nil, fmt.Errorf("failed to OCR document: %w", err) |
| internal/cli/user_command.go | 2369 | return nil, fmt.Errorf("failed to OCR document: HTTP %d, body: %s", resp.StatusCode, string(resp.Body)) |
| internal/cli/user_command.go | 2373 | return nil, fmt.Errorf("OCR document failed: invalid JSON (%w)", err) |

### Chunking/splitting

| file | line | text |
| --- | --- | --- |
| cmd/server_main.go | 47 | "ragflow/internal/service/chunk" |
| cmd/server_main.go | 188 | chunkService := chunk.NewChunkService() |
| internal/cli/lexer.go | 440 | case "CHUNK": |
| internal/cli/lexer.go | 451 | return Token{Type: TokenChunkStore, Value: "CHUNK STORE"} |
| internal/cli/response.go | 143 | return "chunk" |
| internal/cli/user_command.go | 693 | for _, chunk := range chunks { |
| internal/cli/user_command.go | 694 | if chunkMap, ok := chunk.(map[string]interface{}); ok { |
| internal/cli/user_command.go | 924 | // CreateChunkStore creates a chunk store in doc engine |

### Embedding/vector index

| file | line | text |
| --- | --- | --- |
| internal/utility/embedding_lru.go | 24 | // EmbeddingLRU is a thread-safe LRU cache for embeddings. |
| internal/utility/embedding_lru.go | 25 | // The key is a combination of question and embedding ID. |
| internal/utility/embedding_lru.go | 48 | // buildKey creates a composite key from question and embedding ID. |
| internal/utility/embedding_lru.go | 55 | // Get retrieves the embedding for the given question and embedding ID. |
| internal/utility/embedding_lru.go | 56 | // Returns the embedding and true if found, otherwise nil and false. |
| internal/utility/embedding_lru.go | 67 | embedding := make([]float64, len(ent.value)) |
| internal/utility/embedding_lru.go | 68 | copy(embedding, ent.value) |
| internal/utility/embedding_lru.go | 69 | return embedding, true |

### Retrieval/search/rerank

| file | line | text |
| --- | --- | --- |
| internal/handler/dify_retrieval_handler_test.go | 108 | func (m *mockRetrievalService) Retrieval(ctx context.Context, req *nlp.RetrievalRequest) (*nlp.RetrievalResult, error) { |
| internal/handler/dify_retrieval_handler_test.go | 141 | func (m *mockDocEngine) Search(ctx context.Context, req *types.SearchRequest) (*types.SearchResult, error) { |
| internal/handler/dify_retrieval_handler_test.go | 165 | r.POST("/api/v1/dify/retrieval", h.Retrieval) |
| internal/handler/dify_retrieval_handler_test.go | 166 | r.GET("/api/v1/dify/retrieval", h.Retrieval) |
| internal/handler/dify_retrieval_handler_test.go | 167 | r.GET("/api/v1/dify/retrieval/health", h.HealthCheck) |
| internal/handler/dify_retrieval_handler_test.go | 182 | r.POST("/api/v1/dify/retrieval", h.Retrieval) |
| internal/handler/dify_retrieval_handler_test.go | 191 | req, _ := http.NewRequest("GET", "/api/v1/dify/retrieval/health", nil) |
| internal/handler/dify_retrieval_handler_test.go | 210 | req, _ := http.NewRequest("POST", "/api/v1/dify/retrieval", strings.NewReader(body)) |

### Wiki/graph/entity model

| file | line | text |
| --- | --- | --- |
| internal/admin/service_variables_test.go | 20 | "ragflow/internal/entity" |
| internal/admin/service_variables_test.go | 44 | setting := entity.SystemSettings{Name: "test.setting", DataType: tt.dataType} |
| internal/admin/service.go | 34 | "ragflow/internal/entity" |
| internal/admin/service.go | 96 | if u, ok := user.(*entity.User); ok { |
| internal/admin/service.go | 113 | var user *entity.User |
| internal/admin/service.go | 118 | //var document *entity.Document |
| internal/admin/service.go | 125 | var latestLog *entity.IngestionTaskLog |
| internal/admin/service.go | 167 | func (s *Service) StopIngestionTasks(tasks []string) ([]*entity.IngestionTask, error) { |

### Memory/update lifecycle

| file | line | text |
| --- | --- | --- |
| cmd/admin_server.go | 28 | "ragflow/internal/cache" |
| cmd/admin_server.go | 92 | // Initialize Redis cache |
| cmd/admin_server.go | 93 | if err := cache.Init(&cfg.Redis); err != nil { |
| cmd/admin_server.go | 96 | defer cache.Close() |
| cmd/admin_server.go | 103 | // This must be done after Cache is initialized |
| cmd/admin_server.go | 104 | if err := server.InitVariables(cache.Get()); err != nil { |
| cmd/ingestor.go | 35 | "ragflow/internal/cache" |
| cmd/ingestor.go | 124 | // Initialize Redis cache |

### Provenance/citation/evidence

| file | line | text |
| --- | --- | --- |
| internal/handler/searchbot.go | 322 | // @Description Retrieves chunks, builds prompt, and streams LLM answer with citations via SSE. |
| internal/service/ask_service.go | 67 | // Embedder may be nil; if nil, citation insertion is skipped. |
| internal/service/ask_service.go | 164 | // Phase 4: Finalize — citation insertion + reference formatting. |
| internal/service/ask_service.go | 168 | // Attempt citation insertion if embedder is available. |
| internal/service/chunk_types.go | 686 | "name_kwd", "raptor_kwd", "removed_kwd", "source_id", "tag_kwd", |
| internal/service/citation_test.go | 174 | t.Fatal("expected citations found") |
| internal/service/citation_test.go | 191 | t.Fatal("expected citations after threshold descent") |
| internal/service/citation_test.go | 199 | t.Errorf("expected no citations for low similarity") |

### Evaluation/observability

| file | line | text |
| --- | --- | --- |
| internal/admin/service.go | 703 | result.DeletedDetails = append(result.DeletedDetails, fmt.Sprintf("- Deleted %d langfuse records.", result.LangfuseCount)) |
| internal/cli/admin_command.go | 26 | // Returns benchmark result map if iterations > 1, otherwise prints status |
| internal/cli/admin_command.go | 28 | // Get iterations from command params (for benchmark) |
| internal/cli/admin_command.go | 35 | // Benchmark mode: multiple iterations |
| internal/cli/admin_command.go | 60 | // Returns benchmark result map if iterations > 1, otherwise prints status |
| internal/cli/admin_command.go | 62 | // Get iterations from command params (for benchmark) |
| internal/cli/admin_command.go | 69 | // Benchmark mode: multiple iterations |
| internal/cli/admin_command.go | 101 | // Check for benchmark iterations |

### Agent/MCP/tool surface

| file | line | text |
| --- | --- | --- |
| cmd/server_main.go | 40 | "ragflow/internal/agent/runtime" |
| internal/admin/handler.go | 413 | // GetUserAgents handle get user agents |
| internal/admin/handler.go | 421 | agents, err := h.service.GetUserAgents(username) |
| internal/admin/handler.go | 427 | success(c, agents, "") |
| internal/admin/router.go | 72 | protected.GET("/users/:username/agents", r.handler.GetUserAgents) |
| internal/admin/service.go | 662 | // 7. Delete user canvas (agents) |
| internal/admin/service.go | 903 | // GetUserAgents get user agents |
| internal/admin/service.go | 905 | // TODO: Implement get user agents |

## Gap

_없음_
