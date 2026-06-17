# getzep/graphiti 코드 레벨 분석

생성일: 2026-06-17T23:31:27.209Z

## 기본 판정

| 항목 | 값 |
| --- | --- |
| type | graph-rag/kg |
| maturity | A integrated platform (104) |
| stars | 27553 |
| language | Python |
| tags | rag, knowledge-base, agent-knowledge |
| files/code/source | 343/258/188 |
| tests/ci | 63/22 |
| local path | sources/getzep__graphiti |

## 파이프라인 단계

| 단계 | 상태 | matched files | source files | evidence |
| --- | --- | --- | --- | --- |
| Ingestion/source intake | code | 13 | 6 | server/graph_service/main.py:7 from graph_service.routers import ingest, retrieve |
| Parsing/OCR/document extraction | code | 5 | 2 | graphiti_core/prompts/extract_nodes.py:64 extract_text: PromptVersion |
| Chunking/splitting | code | 5 | 3 | graphiti_core/utils/content_chunking.py:79 # Short content always processes fine - no need to chunk |
| Embedding/vector index | code | 65 | 30 | server/graph_service/zep_graphiti.py:35 await new_node.generate_name_embedding(self.embedder) |
| Retrieval/search/rerank | code | 76 | 37 | server/graph_service/main.py:7 from graph_service.routers import ingest, retrieve |
| Wiki/graph/entity model | code | 127 | 82 | server/graph_service/routers/ingest.py:73 @router.post('/entity-node', status_code=status.HTTP_201_CREATED) |
| Memory/update lifecycle | code | 136 | 90 | server/graph_service/zep_graphiti.py:58 await edge.delete(self.driver) |
| Provenance/citation/evidence | code | 10 | 6 | graphiti_core/graphiti.py:715 building episodic edges with correct attribution. |
| Evaluation/observability | code | 31 | 11 | graphiti_core/graphiti.py:74 from graphiti_core.telemetry import capture_event |
| Agent/MCP/tool surface | code | 116 | 39 | server/graph_service/zep_graphiti.py:8 from graphiti_core.llm_client import LLMClient # type: ignore |

## 의존성 신호

- LLM/app framework: openai, anthropic, sentence-transformers, langchain-aws, langchain-anthropic, langchain-openai, transformers
- Vector/search store: opensearch-py
- Graph/KG store: kuzu, neo4j, falkordb, falkordblite
- Eval/observability: opentelemetry-api, opentelemetry-sdk
- Persistence/database: redis

## 주요 파일 후보

### Ingestion/source intake

- `server/graph_service/main.py`
- `server/graph_service/dto/__init__.py`
- `graphiti_core/graphiti.py`
- `graphiti_core/driver/graph_operations/graph_operations.py`
- `graphiti_core/utils/maintenance/node_operations.py`
- `mcp_server/src/services/queue_service.py`
- `.github/workflows/server-tests.yml`
- `examples/quickstart/dense_vs_normal_ingestion.py`
- `server/tests/test_live_falkordb_int.py`
- `mcp_server/tests/test_core_parity.py`
- `CLAUDE.md`
- `README.md`
- ... 1 more

### Parsing/OCR/document extraction

- `graphiti_core/prompts/extract_nodes.py`
- `graphiti_core/utils/maintenance/node_operations.py`
- `tests/utils/maintenance/test_entity_extraction.py`
- `README.md`
- `mcp_server/README.md`

### Chunking/splitting

- `graphiti_core/utils/content_chunking.py`
- `graphiti_core/helpers.py`
- `graphiti_core/utils/bulk_utils.py`
- `tests/utils/test_content_chunking.py`
- `examples/quickstart/dense_vs_normal_ingestion.py`

### Embedding/vector index

- `server/graph_service/zep_graphiti.py`
- `graphiti_core/edges.py`
- `graphiti_core/graph_queries.py`
- `graphiti_core/graphiti_types.py`
- `graphiti_core/graphiti.py`
- `graphiti_core/helpers.py`
- `graphiti_core/nodes.py`
- `graphiti_core/driver/neptune_driver.py`
- `graphiti_core/embedder/azure_openai.py`
- `graphiti_core/embedder/gemini.py`
- `graphiti_core/embedder/openai.py`
- `graphiti_core/embedder/voyage.py`
- ... 6 more

### Retrieval/search/rerank

- `server/graph_service/main.py`
- `server/graph_service/dto/__init__.py`
- `server/graph_service/dto/retrieve.py`
- `server/graph_service/routers/retrieve.py`
- `graphiti_core/decorators.py`
- `graphiti_core/graph_queries.py`
- `graphiti_core/graphiti.py`
- `graphiti_core/helpers.py`
- `graphiti_core/cross_encoder/bge_reranker_client.py`
- `graphiti_core/cross_encoder/gemini_reranker_client.py`
- `graphiti_core/cross_encoder/openai_reranker_client.py`
- `graphiti_core/driver/falkordb_driver.py`
- ... 6 more

### Wiki/graph/entity model

- `server/graph_service/routers/ingest.py`
- `server/graph_service/routers/retrieve.py`
- `graphiti_core/edges.py`
- `graphiti_core/errors.py`
- `graphiti_core/graph_queries.py`
- `graphiti_core/graphiti.py`
- `graphiti_core/helpers.py`
- `graphiti_core/nodes.py`
- `graphiti_core/driver/driver.py`
- `graphiti_core/driver/kuzu_driver.py`
- `graphiti_core/driver/record_parsers.py`
- `graphiti_core/llm_client/client.py`
- ... 6 more

### Memory/update lifecycle

- `server/graph_service/zep_graphiti.py`
- `server/graph_service/dto/retrieve.py`
- `server/graph_service/routers/ingest.py`
- `server/graph_service/routers/retrieve.py`
- `graphiti_core/decorators.py`
- `graphiti_core/edges.py`
- `graphiti_core/graphiti.py`
- `graphiti_core/nodes.py`
- `.github/scripts/setup-triage-labels.sh`
- `graphiti_core/driver/kuzu_driver.py`
- `graphiti_core/driver/neptune_driver.py`
- `graphiti_core/llm_client/anthropic_client.py`
- ... 6 more

### Provenance/citation/evidence

- `graphiti_core/graphiti.py`
- `graphiti_core/prompts/extract_nodes.py`
- `mcp_server/src/graphiti_mcp_server.py`
- `graphiti_core/utils/maintenance/combined_extraction.py`
- `graphiti_core/utils/maintenance/edge_operations.py`
- `graphiti_core/utils/maintenance/node_operations.py`
- `CODE_OF_CONDUCT.md`
- `README.md`
- `mcp_server/README.md`
- `examples/podcast/podcast_transcript.txt`

### Evaluation/observability

- `graphiti_core/graphiti.py`
- `graphiti_core/tracer.py`
- `graphiti_core/llm_client/anthropic_client.py`
- `graphiti_core/llm_client/client.py`
- `graphiti_core/llm_client/gemini_client.py`
- `graphiti_core/llm_client/openai_base_client.py`
- `graphiti_core/llm_client/openai_generic_client.py`
- `graphiti_core/prompts/lib.py`
- `graphiti_core/search/search_utils.py`
- `graphiti_core/telemetry/__init__.py`
- `graphiti_core/telemetry/telemetry.py`
- `pyproject.toml`
- ... 6 more

### Agent/MCP/tool surface

- `server/graph_service/zep_graphiti.py`
- `graphiti_core/graphiti_types.py`
- `graphiti_core/graphiti.py`
- `mcp_server/main.py`
- `graphiti_core/cross_encoder/gemini_reranker_client.py`
- `graphiti_core/cross_encoder/openai_reranker_client.py`
- `graphiti_core/embedder/__init__.py`
- `graphiti_core/embedder/azure_openai.py`
- `graphiti_core/embedder/gemini.py`
- `graphiti_core/embedder/openai.py`
- `graphiti_core/llm_client/__init__.py`
- `graphiti_core/llm_client/anthropic_client.py`
- ... 6 more

## Evidence lines

### Ingestion/source intake

| file | line | text |
| --- | --- | --- |
| server/graph_service/main.py | 7 | from graph_service.routers import ingest, retrieve |
| server/graph_service/main.py | 24 | app.include_router(ingest.router) |
| server/graph_service/dto/__init__.py | 2 | from .ingest import AddEntityNodeRequest, AddMessagesRequest |
| graphiti_core/graphiti.py | 445 | the next run picks up any episode whose ``created_at`` (ingestion |
| graphiti_core/driver/graph_operations/graph_operations.py | 393 | (ingestion time). If provided, only returns episodes added |
| graphiti_core/driver/graph_operations/graph_operations.py | 395 | by ingestion time (not ``valid_at``) keeps backfilled episodes |
| graphiti_core/driver/graph_operations/graph_operations.py | 406 | ingestion-time filter watermark). |
| graphiti_core/utils/maintenance/node_operations.py | 479 | ingestion workflow remains deterministic even when the model misbehaves. |

### Parsing/OCR/document extraction

| file | line | text |
| --- | --- | --- |
| graphiti_core/prompts/extract_nodes.py | 64 | extract_text: PromptVersion |
| graphiti_core/prompts/extract_nodes.py | 75 | extract_text: PromptFunction |
| graphiti_core/prompts/extract_nodes.py | 278 | def extract_text(context: dict[str, Any]) -> list[Message]: |
| graphiti_core/prompts/extract_nodes.py | 280 | 'You are an entity extraction specialist for unstructured text. ' |
| graphiti_core/prompts/extract_nodes.py | 648 | 'extract_text': extract_text, |
| graphiti_core/utils/maintenance/node_operations.py | 265 | prompt = prompt_library.extract_nodes.extract_text(context) |
| graphiti_core/utils/maintenance/node_operations.py | 266 | prompt_name = 'extract_nodes.extract_text' |
| graphiti_core/utils/maintenance/node_operations.py | 272 | prompt = prompt_library.extract_nodes.extract_text(context) |

### Chunking/splitting

| file | line | text |
| --- | --- | --- |
| graphiti_core/utils/content_chunking.py | 79 | # Short content always processes fine - no need to chunk |
| graphiti_core/utils/content_chunking.py | 141 | # Scalar value, no need to chunk |
| graphiti_core/utils/content_chunking.py | 226 | content: JSON string to chunk |
| graphiti_core/utils/content_chunking.py | 227 | chunk_size_tokens: Target size per chunk in tokens (default from env) |
| graphiti_core/utils/content_chunking.py | 228 | overlap_tokens: Overlap between chunks in tokens (default from env) |
| graphiti_core/utils/content_chunking.py | 259 | """Chunk a JSON array by splitting at element boundaries.""" |
| graphiti_core/utils/content_chunking.py | 271 | # Check if adding this element would exceed chunk size |
| graphiti_core/utils/content_chunking.py | 273 | # Save current chunk |

### Embedding/vector index

| file | line | text |
| --- | --- | --- |
| server/graph_service/zep_graphiti.py | 35 | await new_node.generate_name_embedding(self.embedder) |
| graphiti_core/edges.py | 29 | from graphiti_core.embedder import EmbedderClient |
| graphiti_core/edges.py | 266 | fact_embedding: list[float] \| None = Field(default=None, description='embedding of the fact') |
| graphiti_core/edges.py | 287 | async def generate_embedding(self, embedder: EmbedderClient): |
| graphiti_core/edges.py | 291 | self.fact_embedding = await embedder.create(input_data=[text]) |
| graphiti_core/edges.py | 1038 | async def create_entity_edge_embeddings(embedder: EmbedderClient, edges: list[EntityEdge]): |
| graphiti_core/edges.py | 1044 | fact_embeddings = await embedder.create_batch([edge.fact for edge in filtered_edges]) |
| graphiti_core/graph_queries.py | 91 | # Convert to string representation for embedding in queries |

### Retrieval/search/rerank

| file | line | text |
| --- | --- | --- |
| server/graph_service/main.py | 7 | from graph_service.routers import ingest, retrieve |
| server/graph_service/main.py | 23 | app.include_router(retrieve.router) |
| server/graph_service/dto/__init__.py | 3 | from .retrieve import FactResult, GetMemoryRequest, GetMemoryResponse, SearchQuery, SearchResults |
| server/graph_service/dto/retrieve.py | 10 | None, description='The group ids for the memories to search' |
| server/graph_service/dto/retrieve.py | 13 | max_facts: int = Field(default=10, description='The maximum number of facts to retrieve') |
| server/graph_service/dto/retrieve.py | 35 | max_facts: int = Field(default=10, description='The maximum number of facts to retrieve') |
| server/graph_service/dto/retrieve.py | 37 | ..., description='The uuid of the node to center the retrieval on' |
| server/graph_service/dto/retrieve.py | 40 | ..., description='The messages to build the retrieval query from ' |

### Wiki/graph/entity model

| file | line | text |
| --- | --- | --- |
| server/graph_service/routers/ingest.py | 73 | @router.post('/entity-node', status_code=status.HTTP_201_CREATED) |
| server/graph_service/routers/ingest.py | 87 | @router.delete('/entity-edge/{uuid}', status_code=status.HTTP_200_OK) |
| server/graph_service/routers/ingest.py | 90 | return Result(message='Entity Edge deleted', success=True) |
| server/graph_service/routers/retrieve.py | 30 | @router.get('/entity-edge/{uuid}', status_code=status.HTTP_200_OK) |
| graphiti_core/edges.py | 176 | MATCH (n:Episodic)-[e:MENTIONS {uuid: $uuid}]->(m:Entity) |
| graphiti_core/edges.py | 202 | MATCH (n:Episodic)-[e:MENTIONS]->(m:Entity) |
| graphiti_core/edges.py | 238 | MATCH (n:Episodic)-[e:MENTIONS]->(m:Entity) |
| graphiti_core/edges.py | 264 | name: str = Field(description='name of the edge, relation name') |

### Memory/update lifecycle

| file | line | text |
| --- | --- | --- |
| server/graph_service/zep_graphiti.py | 58 | await edge.delete(self.driver) |
| server/graph_service/zep_graphiti.py | 61 | await node.delete(self.driver) |
| server/graph_service/zep_graphiti.py | 64 | await episode.delete(self.driver) |
| server/graph_service/zep_graphiti.py | 69 | await edge.delete(self.driver) |
| server/graph_service/zep_graphiti.py | 76 | await episode.delete(self.driver) |
| server/graph_service/dto/retrieve.py | 34 | group_id: str = Field(..., description='The group id of the memory to get') |
| server/graph_service/routers/ingest.py | 87 | @router.delete('/entity-edge/{uuid}', status_code=status.HTTP_200_OK) |
| server/graph_service/routers/ingest.py | 93 | @router.delete('/group/{group_id}', status_code=status.HTTP_200_OK) |

### Provenance/citation/evidence

| file | line | text |
| --- | --- | --- |
| graphiti_core/graphiti.py | 715 | building episodic edges with correct attribution. |
| graphiti_core/prompts/extract_nodes.py | 557 | - Counts, sequences, and repeated patterns when the evidence supports them |
| graphiti_core/prompts/extract_nodes.py | 562 | - Be exhaustive within the evidence. Prefer retaining a supported concrete detail over omitting it for brevity. |
| graphiti_core/prompts/extract_nodes.py | 564 | from a name, a single mention, or weak evidence. |
| graphiti_core/prompts/extract_nodes.py | 567 | - Include all materially relevant named participants that appear in the evidence. |
| graphiti_core/prompts/extract_nodes.py | 577 | - If the evidence is insufficient or ambiguous, omit the claim. |
| mcp_server/src/graphiti_mcp_server.py | 156 | - get_episode_entities: trace provenance — the entities and facts created by specific episode UUIDs. |
| mcp_server/src/graphiti_mcp_server.py | 973 | Use this to trace provenance: given one or more episode UUIDs, return the graph |

### Evaluation/observability

| file | line | text |
| --- | --- | --- |
| graphiti_core/graphiti.py | 74 | from graphiti_core.telemetry import capture_event |
| graphiti_core/graphiti.py | 184 | An OpenTelemetry tracer instance for distributed tracing. If not provided, tracing is disabled (no-op). |
| graphiti_core/graphiti.py | 247 | # Capture telemetry event |
| graphiti_core/graphiti.py | 251 | """Capture telemetry event for Graphiti initialization.""" |
| graphiti_core/graphiti.py | 268 | # Silently handle telemetry errors |
| graphiti_core/tracer.py | 23 | from opentelemetry.trace import Span, StatusCode |
| graphiti_core/tracer.py | 26 | from opentelemetry.trace import Span, StatusCode |
| graphiti_core/tracer.py | 84 | """Wrapper for OpenTelemetry span.""" |

### Agent/MCP/tool surface

| file | line | text |
| --- | --- | --- |
| server/graph_service/zep_graphiti.py | 8 | from graphiti_core.llm_client import LLMClient # type: ignore |
| server/graph_service/zep_graphiti.py | 23 | llm_client: LLMClient \| None = None, |
| server/graph_service/zep_graphiti.py | 26 | super().__init__(uri, user, password, llm_client, **kwargs) # type: ignore |
| server/graph_service/zep_graphiti.py | 109 | client.llm_client.config.base_url = settings.openai_base_url |
| server/graph_service/zep_graphiti.py | 111 | client.llm_client.config.api_key = settings.openai_api_key |
| server/graph_service/zep_graphiti.py | 113 | client.llm_client.model = settings.model_name |
| graphiti_core/graphiti_types.py | 22 | from graphiti_core.llm_client import LLMClient |
| graphiti_core/graphiti_types.py | 28 | llm_client: LLMClient |

## Gap

_없음_
