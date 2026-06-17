# semantica-agi/semantica 코드 레벨 분석

생성일: 2026-06-17T23:31:21.177Z

## 기본 판정

| 항목 | 값 |
| --- | --- |
| type | graph-rag/kg |
| maturity | A integrated platform (108) |
| stars | 1225 |
| language | Python |
| tags | rag, knowledge-base, agent-knowledge, korea-signal |
| files/code/source | 888/670/438 |
| tests/ci | 120/10 |
| local path | sources/semantica-agi__semantica |

## 파이프라인 단계

| 단계 | 상태 | matched files | source files | evidence |
| --- | --- | --- | --- | --- |
| Ingestion/source intake | code | 121 | 50 | docs_check.py:185 "semantica.ingest", "semantica.parse", "semantica.split", "semantica.normalize", |
| Parsing/OCR/document extraction | code | 95 | 40 | semantica/__init__.py:4 A comprehensive Python framework for transforming unstructured data into |
| Chunking/splitting | code | 85 | 48 | semantica/cli.py:1471 @click.option("--chunk-size", default=512, type=int, show_default=True) |
| Embedding/vector index | code | 201 | 86 | semantica/embeddings/__init__.py:2 Embeddings Generation Module |
| Retrieval/search/rerank | code | 217 | 111 | docs_check.py:163 if os.path.exists(fpath) and re.search(pat, read(fpath)) |
| Wiki/graph/entity model | code | 451 | 214 | mcp/schemas.py:268 "description": "Entity or node ID to get provenance for", |
| Memory/update lifecycle | code | 320 | 171 | docs_check.py:122 # ── 4. No stale repo URLs ───────────────────────────────────────────────────── |
| Provenance/citation/evidence | code | 255 | 133 | semantica/conflicts/conflicts_provenance.py:2 Provenance-enabled wrapper for conflict detection with unified backend. |
| Evaluation/observability | code | 185 | 98 | mcp/schemas.py:277 "metrics": { |
| Agent/MCP/tool surface | code | 160 | 65 | integrations/__init__.py:4 Optional integration packages for agentic frameworks (Google ADK, Claude Agent SDK, Agno, etc.). |

## 의존성 신호

- LLM/app framework: transformers, sentence-transformers, openai, anthropic, ollama, litellm
- Vector/search store: faiss-cpu, qdrant-client, weaviate-client, pinecone-client, pymilvus, pgvector, faiss-gpu
- Graph/KG store: networkx, neo4j, falkordb
- Document parsing/OCR: beautifulsoup4, pypdf2, python-docx
- Eval/observability: prometheus-client, opentelemetry-api, opentelemetry-sdk, opentelemetry-semantic-conventions, opentelemetry-instrumentation
- Persistence/database: redis, psycopg, pgvector

## 주요 파일 후보

### Ingestion/source intake

- `docs_check.py`
- `semantica/__init__.py`
- `semantica/cli.py`
- `cookbook/advanced/snowflake_ingestion_examples.py`
- `integrations/agno/knowledge_graph.py`
- `semantica/core/orchestrator.py`
- `semantica/ingest/__init__.py`
- `semantica/ingest/api_ingestor.py`
- `semantica/ingest/config.py`
- `semantica/ingest/db_ingestor.py`
- `semantica/ingest/duckdb_ingestor.py`
- `semantica/ingest/elastic_ingestor.py`
- ... 6 more

### Parsing/OCR/document extraction

- `semantica/__init__.py`
- `semantica/cli.py`
- `semantica/context/context_provenance.py`
- `semantica/context/context_retriever.py`
- `semantica/core/__init__.py`
- `semantica/core/methods.py`
- `semantica/core/orchestrator.py`
- `semantica/graph_store/graph_store_provenance.py`
- `semantica/ingest/__init__.py`
- `semantica/ingest/email_ingestor.py`
- `semantica/ingest/feed_ingestor.py`
- `semantica/ingest/file_ingestor.py`
- ... 6 more

### Chunking/splitting

- `semantica/cli.py`
- `integrations/agno/knowledge_graph.py`
- `semantica/context/agent_memory.py`
- `semantica/context/context_graph.py`
- `semantica/context/context_retriever.py`
- `semantica/context/decision_query.py`
- `semantica/context/entity_linker.py`
- `semantica/deduplication/similarity_calculator.py`
- `semantica/embeddings/__init__.py`
- `semantica/embeddings/config.py`
- `semantica/embeddings/methods.py`
- `semantica/embeddings/pooling_strategies.py`
- ... 6 more

### Embedding/vector index

- `semantica/embeddings/__init__.py`
- `semantica/embeddings/config.py`
- `semantica/embeddings/embedding_generator.py`
- `semantica/embeddings/embeddings_provenance.py`
- `semantica/embeddings/graph_embedding_manager.py`
- `semantica/embeddings/methods.py`
- `semantica/embeddings/pooling_strategies.py`
- `semantica/embeddings/provider_stores.py`
- `semantica/embeddings/registry.py`
- `semantica/embeddings/text_embedder.py`
- `semantica/embeddings/vector_embedding_manager.py`
- `semantica/kg/node_embeddings.py`
- ... 6 more

### Retrieval/search/rerank

- `docs_check.py`
- `mcp/schemas.py`
- `semantica/cli.py`
- `explorer/src/App.tsx`
- `integrations/agno/context_store.py`
- `integrations/agno/decision_kit.py`
- `integrations/agno/kg_toolkit.py`
- `integrations/agno/knowledge_graph.py`
- `integrations/agno/shared_context.py`
- `integrations/openclaw/mcp_tool.py`
- `mcp/tools/decisions.py`
- `mcp/tools/export.py`
- ... 6 more

### Wiki/graph/entity model

- `mcp/schemas.py`
- `mcp/session.py`
- `semantica/__init__.py`
- `semantica/cli.py`
- `explorer/src/App.tsx`
- `integrations/agno/__init__.py`
- `integrations/agno/context_store.py`
- `integrations/agno/decision_kit.py`
- `integrations/agno/kg_toolkit.py`
- `integrations/agno/knowledge_graph.py`
- `integrations/agno/shared_context.py`
- `integrations/openclaw/mcp_tool.py`
- ... 6 more

### Memory/update lifecycle

- `docs_check.py`
- `explorer/eslint.config.js`
- `semantica/cli.py`
- `semantica/server.py`
- `explorer/src/App.tsx`
- `integrations/agno/context_store.py`
- `integrations/agno/decision_kit.py`
- `integrations/agno/kg_toolkit.py`
- `integrations/agno/knowledge_graph.py`
- `integrations/agno/shared_context.py`
- `mcp/tools/extraction.py`
- `semantica/change_management/__init__.py`
- ... 6 more

### Provenance/citation/evidence

- `semantica/conflicts/conflicts_provenance.py`
- `semantica/context/context_provenance.py`
- `semantica/deduplication/deduplication_provenance.py`
- `semantica/embeddings/embeddings_provenance.py`
- `semantica/export/export_provenance.py`
- `semantica/graph_store/graph_store_provenance.py`
- `semantica/ingest/ingest_provenance.py`
- `semantica/kg/kg_provenance.py`
- `semantica/kg/provenance_tracker.py`
- `semantica/llms/llms_provenance.py`
- `semantica/normalize/normalize_provenance.py`
- `semantica/ontology/ontology_provenance.py`
- ... 6 more

### Evaluation/observability

- `mcp/schemas.py`
- `semantica/__init__.py`
- `semantica/cli.py`
- `explorer/src/App.tsx`
- `integrations/agno/decision_kit.py`
- `mcp/tools/graph.py`
- `semantica/change_management/managers.py`
- `semantica/context/__init__.py`
- `semantica/context/agent_context.py`
- `semantica/context/causal_analyzer.py`
- `semantica/context/context_graph.py`
- `semantica/context/decision_query.py`
- ... 6 more

### Agent/MCP/tool surface

- `integrations/__init__.py`
- `mcp/__init__.py`
- `mcp/__main__.py`
- `mcp/schemas.py`
- `mcp/server.py`
- `mcp/session.py`
- `semantica/cli.py`
- `integrations/agno/__init__.py`
- `integrations/agno/context_store.py`
- `integrations/agno/decision_kit.py`
- `integrations/agno/kg_toolkit.py`
- `integrations/agno/knowledge_graph.py`
- ... 6 more

## Evidence lines

### Ingestion/source intake

| file | line | text |
| --- | --- | --- |
| docs_check.py | 185 | "semantica.ingest", "semantica.parse", "semantica.split", "semantica.normalize", |
| semantica/__init__.py | 99 | def ingest(self): |
| semantica/__init__.py | 100 | """Access ingestion module.""" |
| semantica/__init__.py | 102 | self._ingest = _ModuleProxy("ingest") |
| semantica/__init__.py | 204 | "ingest", |
| semantica/cli.py | 371 | ("📥 Data Ingestion", ["ingest", "watch", "parse", "split", "normalize"]), |
| semantica/cli.py | 432 | ("semantica ingest data/", "load documents into the knowledge base"), |
| semantica/cli.py | 960 | """Watch a directory and auto-ingest new or changed files. |

### Parsing/OCR/document extraction

| file | line | text |
| --- | --- | --- |
| semantica/__init__.py | 4 | A comprehensive Python framework for transforming unstructured data into |
| semantica/cli.py | 433 | ("semantica extract doc.pdf", "extract entities and relations"), |
| semantica/cli.py | 955 | @click.option("--patterns", default="*.pdf,*.docx,*.txt,*.csv,*.json", |
| semantica/cli.py | 966 | semantica watch ./reports/ --patterns "*.pdf,*.docx" |
| semantica/cli.py | 1351 | _INGEST_FORMATS = ["pdf", "docx", "csv", "excel", "html", "json", "parquet", "xml", "rdf"] |
| semantica/cli.py | 1378 | semantica ingest ./reports/q1.pdf |
| semantica/cli.py | 1426 | type=click.Choice(["pdf", "docx", "code", "csv", "email", "excel", |
| semantica/cli.py | 1427 | "html", "image", "json", "pptx", "xml", "web"]), |

### Chunking/splitting

| file | line | text |
| --- | --- | --- |
| semantica/cli.py | 1471 | @click.option("--chunk-size", default=512, type=int, show_default=True) |
| semantica/cli.py | 1472 | @click.option("--overlap", default=64, type=int, show_default=True) |
| semantica/cli.py | 1479 | overlap: int, fmt: str, output: Optional[str], |
| semantica/cli.py | 1481 | """Chunk documents with configurable strategies. |
| semantica/cli.py | 1485 | semantica split report.pdf --strategy semantic --chunk-size 256 |
| semantica/cli.py | 1494 | chunks = fn(input_path, chunk_size=chunk_size, overlap=overlap) |
| integrations/agno/knowledge_graph.py | 117 | Maximum characters per text chunk during ingestion. |
| integrations/agno/knowledge_graph.py | 380 | for chunk in chunks: |

### Embedding/vector index

| file | line | text |
| --- | --- | --- |
| semantica/embeddings/__init__.py | 2 | Embeddings Generation Module |
| semantica/embeddings/__init__.py | 4 | This module provides comprehensive embedding generation and management capabilities |
| semantica/embeddings/__init__.py | 5 | for the Semantica framework, supporting text content with multiple embedding models |
| semantica/embeddings/__init__.py | 10 | Embedding Generation: |
| semantica/embeddings/__init__.py | 11 | - Sentence-transformers Encoding: Transformer-based sentence embedding generation using pre-trained models |
| semantica/embeddings/__init__.py | 12 | - FastEmbed Encoding: Fast and efficient embedding generation using FastEmbed library |
| semantica/embeddings/__init__.py | 13 | - Hash-based Fallback Embeddings: SHA-256 hash-based deterministic embeddings (128-dimensional) |
| semantica/embeddings/__init__.py | 17 | - Cosine Similarity: Dot product divided by vector norms for normalized similarity (0-1 range) |

### Retrieval/search/rerank

| file | line | text |
| --- | --- | --- |
| docs_check.py | 163 | if os.path.exists(fpath) and re.search(pat, read(fpath)) |
| docs_check.py | 176 | if in_block and re.search(r":\s*(list\|dict\|tuple\|set)\[", line): |
| mcp/schemas.py | 205 | "description": "Search term or phrase", |
| semantica/cli.py | 1664 | """Generate, index, and search embeddings.""" |
| semantica/cli.py | 1721 | @embed.command("search") |
| semantica/cli.py | 1727 | @click.option("--hybrid", is_flag=True, default=False, help="Dense + sparse hybrid search.") |
| semantica/cli.py | 1733 | """Semantic similarity search over the vector store. |
| semantica/cli.py | 1737 | semantica embed search "CEO of Acme Corp" --store qdrant --top-k 5 --hybrid |

### Wiki/graph/entity model

| file | line | text |
| --- | --- | --- |
| mcp/schemas.py | 268 | "description": "Entity or node ID to get provenance for", |
| mcp/session.py | 25 | community-detection, and embedding features are available. |
| semantica/__init__.py | 163 | """Access triplet store module.""" |
| semantica/cli.py | 433 | ("semantica extract doc.pdf", "extract entities and relations"), |
| semantica/cli.py | 1226 | @click.option("--mode", type=click.Choice(["centrality", "community", "connectivity", "all"]), |
| semantica/cli.py | 1231 | """Run centrality, community detection, or connectivity analysis.""" |
| semantica/cli.py | 1250 | @click.option("--from", "from_entity", required=True, help="Source entity name.") |
| semantica/cli.py | 1251 | @click.option("--to", "to_entity", required=True, help="Target entity name.") |

### Memory/update lifecycle

| file | line | text |
| --- | --- | --- |
| docs_check.py | 122 | # ── 4. No stale repo URLs ───────────────────────────────────────────────────── |
| docs_check.py | 123 | @check("No stale repo URLs") |
| docs_check.py | 125 | stale = ["Hawksight-AI/semantica", "semantica-dev/semantica"] |
| docs_check.py | 130 | for pat in stale |
| explorer/eslint.config.js | 4 | import reactRefresh from 'eslint-plugin-react-refresh' |
| semantica/cli.py | 371 | ("📥 Data Ingestion", ["ingest", "watch", "parse", "split", "normalize"]), |
| semantica/cli.py | 449 | cli_ctx.store_backend or cfg.get("graph_db", {}).get("backend", "memory") |
| semantica/cli.py | 813 | backend = cli_ctx.store_backend or cfg.get("graph_db", {}).get("backend", "memory") |

### Provenance/citation/evidence

| file | line | text |
| --- | --- | --- |
| semantica/conflicts/conflicts_provenance.py | 2 | Provenance-enabled wrapper for conflict detection with unified backend. |
| semantica/conflicts/conflicts_provenance.py | 4 | This module provides unified provenance backend integration for SourceTracker |
| semantica/conflicts/conflicts_provenance.py | 21 | """SourceTracker using unified provenance backend.""" |
| semantica/conflicts/conflicts_provenance.py | 28 | from semantica.provenance import ProvenanceManager |
| semantica/conflicts/conflicts_provenance.py | 39 | from semantica.provenance import SourceReference |
| semantica/context/context_provenance.py | 2 | Provenance-enabled wrapper for context management. |
| semantica/context/context_provenance.py | 7 | ctx = ContextManagerWithProvenance(provenance=True) |
| semantica/context/context_provenance.py | 19 | """Context manager with provenance tracking.""" |

### Evaluation/observability

| file | line | text |
| --- | --- | --- |
| mcp/schemas.py | 277 | "metrics": { |
| mcp/schemas.py | 287 | "description": "Top N nodes to return per metric (default: 10)", |
| semantica/__init__.py | 184 | """Access evaluation module.""" |
| semantica/cli.py | 1198 | """Show node/edge counts, density, and graph metrics.""" |
| semantica/cli.py | 1216 | table.add_column("Metric", style=_KEY, no_wrap=True) |
| semantica/cli.py | 4221 | f'eval "$({env_var}={click_shell}_source semantica)"' |
| explorer/src/App.tsx | 1080 | /* ── Metrics strip ─────────────────────────────────────── */ |
| explorer/src/App.tsx | 1081 | .landing-metrics { |

### Agent/MCP/tool surface

| file | line | text |
| --- | --- | --- |
| integrations/__init__.py | 4 | Optional integration packages for agentic frameworks (Google ADK, Claude Agent SDK, Agno, etc.). |
| mcp/__init__.py | 2 | Semantica MCP Server Package |
| mcp/__init__.py | 4 | A full Model Context Protocol (MCP) server for Semantica — exposes knowledge graph |
| mcp/__init__.py | 6 | and export capabilities as MCP tools and resources. |
| mcp/__init__.py | 9 | python -m mcp.server # from repo root |
| mcp/__init__.py | 12 | Configure in Claude Desktop, Windsurf, Cline, Continue, VS Code: |
| mcp/__init__.py | 17 | "args": ["-m", "mcp.server"], |
| mcp/__main__.py | 1 | """Entry point: python -m mcp.server""" |

## Gap

_없음_
