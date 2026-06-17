# iikarus/Dragon-Brain 코드 레벨 분석

생성일: 2026-06-17T23:31:23.938Z

## 기본 판정

| 항목 | 값 |
| --- | --- |
| type | graph-rag/kg |
| maturity | A integrated platform (84) |
| stars | 48 |
| language | Python |
| tags | rag, knowledge-base, agent-knowledge, korea-signal |
| files/code/source | 341/236/124 |
| tests/ci | 112/3 |
| local path | sources/iikarus__Dragon-Brain |

## 파이프라인 단계

| 단계 | 상태 | matched files | source files | evidence |
| --- | --- | --- | --- | --- |
| Ingestion/source intake | code | 4 | 2 | benchmarks/longmemeval/ablation.py:114 # Ingest into an isolated project |
| Parsing/OCR/document extraction | doc-only | 1 | 0 | tests/gauntlet/test_contracts.py:310 evidence=["paper.pdf"], |
| Chunking/splitting | doc-only | 7 | 0 | tests/unit/test_activation_radar.py:4 perfect overlap, and mixed results. |
| Embedding/vector index | code | 188 | 72 | src/claude_memory/embedding_server.py:13 from claude_memory.embedding import EmbeddingService |
| Retrieval/search/rerank | code | 140 | 49 | src/claude_memory/activation.py:1 """Spreading Activation Engine for associative memory retrieval. |
| Wiki/graph/entity model | code | 182 | 72 | src/claude_memory/activation.py:63 seeds = engine.activate(["entity-1", "entity-2"]) |
| Memory/update lifecycle | code | 193 | 75 | src/claude_memory/activation.py:1 """Spreading Activation Engine for associative memory retrieval. |
| Provenance/citation/evidence | code | 59 | 6 | src/claude_memory/crud_maintenance.py:102 evidence: $evidence, |
| Evaluation/observability | code | 53 | 16 | src/claude_memory/analysis.py:41 """Compute graph health metrics including community count. |
| Agent/MCP/tool surface | code | 106 | 31 | src/claude_memory/analysis.py:118 """E-4: Session reconnect — structured briefing for a returning agent.""" |

## 의존성 신호

- LLM/app framework: sentence-transformers
- Vector/search store: qdrant, qdrant-client
- Graph/KG store: falkordb
- Persistence/database: redis

## 주요 파일 후보

### Ingestion/source intake

- `benchmarks/longmemeval/ablation.py`
- `benchmarks/longmemeval/runner.py`
- `benchmarks/longmemeval/README.md`
- `benchmarks/longmemeval/RESULTS.md`

### Parsing/OCR/document extraction

- `tests/gauntlet/test_contracts.py`

### Chunking/splitting

- `tests/unit/test_activation_radar.py`
- `tests/unit/test_longmemeval_metrics.py`
- `process/issues/14a_BUILD_SPEC.md`
- `process/issues/22a_AUDIT_SPEC.md`
- `process/issues/22a_BUILD_SPEC.md`
- `demos/cybersecurity-soc/README.md`
- `demos/medical-practice/README.md`

### Embedding/vector index

- `src/claude_memory/embedding_server.py`
- `src/claude_memory/embedding.py`
- `src/claude_memory/activation.py`
- `src/claude_memory/analysis.py`
- `src/claude_memory/clustering.py`
- `src/claude_memory/crud_maintenance.py`
- `src/claude_memory/crud.py`
- `src/claude_memory/fts_store.py`
- `src/claude_memory/interfaces.py`
- `src/claude_memory/merge.py`
- `src/claude_memory/repository_queries.py`
- `src/claude_memory/repository.py`
- ... 6 more

### Retrieval/search/rerank

- `src/claude_memory/activation.py`
- `src/claude_memory/analysis.py`
- `src/claude_memory/context_manager.py`
- `src/claude_memory/crud_maintenance.py`
- `src/claude_memory/crud.py`
- `src/claude_memory/date_parser.py`
- `src/claude_memory/embedding_server.py`
- `src/claude_memory/entity_extraction.py`
- `src/claude_memory/exceptions.py`
- `src/claude_memory/fts_store.py`
- `src/claude_memory/interfaces.py`
- `src/claude_memory/merge.py`
- ... 6 more

### Wiki/graph/entity model

- `src/claude_memory/activation.py`
- `src/claude_memory/analysis.py`
- `src/claude_memory/context_manager.py`
- `src/claude_memory/crud_maintenance.py`
- `src/claude_memory/crud.py`
- `src/claude_memory/entity_extraction.py`
- `src/claude_memory/fts_store.py`
- `src/claude_memory/graph_algorithms.py`
- `src/claude_memory/interfaces.py`
- `src/claude_memory/librarian.py`
- `src/claude_memory/merge.py`
- `src/claude_memory/ontology.py`
- ... 6 more

### Memory/update lifecycle

- `src/claude_memory/activation.py`
- `src/claude_memory/analysis.py`
- `src/claude_memory/clustering.py`
- `src/claude_memory/crud_maintenance.py`
- `src/claude_memory/crud.py`
- `src/claude_memory/embedding.py`
- `src/claude_memory/exceptions.py`
- `src/claude_memory/fts_store.py`
- `src/claude_memory/graph_algorithms.py`
- `src/claude_memory/interfaces.py`
- `src/claude_memory/librarian.py`
- `src/claude_memory/lock_manager.py`
- ... 6 more

### Provenance/citation/evidence

- `src/claude_memory/crud_maintenance.py`
- `src/claude_memory/crud.py`
- `src/claude_memory/ontology.py`
- `src/claude_memory/schema.py`
- `src/claude_memory/server.py`
- `benchmarks/longmemeval/metric_verification.py`
- `ontology.json`
- `tests/e2e_functional.py`
- `tests/gauntlet/test_contracts.py`
- `tests/unit/test_analyze_graph.py`
- `tests/unit/test_memory_service.py`
- `tests/unit/test_merge.py`
- ... 6 more

### Evaluation/observability

- `src/claude_memory/analysis.py`
- `src/claude_memory/clustering.py`
- `src/claude_memory/logging_config.py`
- `src/claude_memory/repository_async.py`
- `src/claude_memory/repository_queries.py`
- `src/claude_memory/search.py`
- `src/claude_memory/stats.py`
- `src/claude_memory/tools_extra.py`
- `src/dashboard/app.py`
- `scripts/embedding_eval.py`
- `benchmarks/longmemeval/__init__.py`
- `benchmarks/longmemeval/ablation.py`
- ... 6 more

### Agent/MCP/tool surface

- `src/claude_memory/analysis.py`
- `src/claude_memory/crud.py`
- `src/claude_memory/exceptions.py`
- `src/claude_memory/fts_store.py`
- `src/claude_memory/graph_algorithms.py`
- `src/claude_memory/librarian.py`
- `src/claude_memory/merge.py`
- `src/claude_memory/search.py`
- `src/claude_memory/server.py`
- `src/claude_memory/stats.py`
- `src/claude_memory/temporal.py`
- `src/claude_memory/tools_extra.py`
- ... 6 more

## Evidence lines

### Ingestion/source intake

| file | line | text |
| --- | --- | --- |
| benchmarks/longmemeval/ablation.py | 114 | # Ingest into an isolated project |
| benchmarks/longmemeval/runner.py | 111 | """Ingest haystack sessions for one evaluation instance. |
| benchmarks/longmemeval/runner.py | 163 | logger.exception("Failed to ingest session %d for %s", i, instance["question_id"]) |
| benchmarks/longmemeval/runner.py | 219 | 2. For each instance: ingest sessions → query → evaluate |
| benchmarks/longmemeval/runner.py | 248 | # Ingest -- returns mapping of dataset session IDs -> entity UUIDs |
| benchmarks/longmemeval/runner.py | 375 | help="Skip observation storage during ingestion (faster runs)", |
| benchmarks/longmemeval/README.md | 41 | 2. **Ingest** each question's haystack sessions as Dragon Brain entities |
| benchmarks/longmemeval/README.md | 65 | \| `runner.py` \| Main benchmark pipeline (ingest → query → evaluate) \| |

### Parsing/OCR/document extraction

| file | line | text |
| --- | --- | --- |
| tests/gauntlet/test_contracts.py | 310 | evidence=["paper.pdf"], |

### Chunking/splitting

| file | line | text |
| --- | --- | --- |
| tests/unit/test_activation_radar.py | 4 | perfect overlap, and mixed results. |
| tests/unit/test_activation_radar.py | 120 | """Happy: some overlap, some bridges, some questionable → correct partition.""" |
| tests/unit/test_activation_radar.py | 125 | ENTITY_A: 0.5, # activated + similar → overlap (neither list) |
| tests/unit/test_activation_radar.py | 129 | ENTITY_A: 0.8, # similar + activated → overlap |
| tests/unit/test_longmemeval_metrics.py | 37 | """Zero overlap between retrieved and relevant → all zeros.""" |
| process/issues/14a_BUILD_SPEC.md | 3 | **Issue:** [iikarus/Dragon-Brain#14](https://github.com/iikarus/Dragon-Brain/issues/14) — sub-issue 14a (per-file chunk) |
| process/issues/14a_BUILD_SPEC.md | 4 | **Pilot status:** First sub-chunk validating the Deepthink blueprint (Topographical Forcing). |
| process/issues/22a_AUDIT_SPEC.md | 3 | **Issue:** parent #22 — sub-chunk 22a |

### Embedding/vector index

| file | line | text |
| --- | --- | --- |
| src/claude_memory/embedding_server.py | 13 | from claude_memory.embedding import EmbeddingService |
| src/claude_memory/embedding_server.py | 18 | logger = logging.getLogger("embedding-server") |
| src/claude_memory/embedding_server.py | 31 | """Response payload containing computed embedding vectors.""" |
| src/claude_memory/embedding_server.py | 33 | embeddings: list[list[float]] |
| src/claude_memory/embedding_server.py | 40 | logger.info("Initializing Embedding Service...") |
| src/claude_memory/embedding_server.py | 48 | app = FastAPI(title="Embedding Service", lifespan=lifespan) |
| src/claude_memory/embedding_server.py | 53 | """Encode input texts and return their embedding vectors.""" |
| src/claude_memory/embedding_server.py | 56 | return {"embeddings": []} |

### Retrieval/search/rerank

| file | line | text |
| --- | --- | --- |
| src/claude_memory/activation.py | 1 | """Spreading Activation Engine for associative memory retrieval. |
| src/claude_memory/analysis.py | 200 | graph update to prevent ghost search results. |
| src/claude_memory/context_manager.py | 1 | """Context window optimization — manages token budgets for retrieval results.""" |
| src/claude_memory/context_manager.py | 44 | """Govern context window usage by optimizing retrieval results.""" |
| src/claude_memory/crud_maintenance.py | 36 | """Fire-and-forget salience increment so search returns immediately.""" |
| src/claude_memory/crud.py | 147 | # 2. Write to Vector Engine (Qdrant) - Source of Truth for Search |
| src/claude_memory/crud.py | 178 | # 3. Index in FTS5 (lexical search channel) |
| src/claude_memory/date_parser.py | 5 | datetime windows for use as hard filters in temporal retrieval (Tier 2.4). |

### Wiki/graph/entity model

| file | line | text |
| --- | --- | --- |
| src/claude_memory/activation.py | 63 | seeds = engine.activate(["entity-1", "entity-2"]) |
| src/claude_memory/activation.py | 84 | seed_ids: Entity IDs to activate. |
| src/claude_memory/activation.py | 178 | def _recency_score(entity: dict[str, Any]) -> float: |
| src/claude_memory/activation.py | 181 | More recent entities score closer to 1.0. Uses an exponential |
| src/claude_memory/activation.py | 184 | ts_str = entity.get("occurred_at") or entity.get("created_at") |
| src/claude_memory/activation.py | 218 | candidates: Entity dicts (must have ``"id"`` key). |
| src/claude_memory/activation.py | 245 | for entity in candidates: |
| src/claude_memory/activation.py | 246 | eid = entity.get("id", "") |

### Memory/update lifecycle

| file | line | text |
| --- | --- | --- |
| src/claude_memory/activation.py | 1 | """Spreading Activation Engine for associative memory retrieval. |
| src/claude_memory/activation.py | 209 | """Merge scores into a composite rank and return sorted candidates. |
| src/claude_memory/analysis.py | 1 | """Analysis & maintenance operations for the Exocortex memory system. |
| src/claude_memory/analysis.py | 3 | Provides graph analytics, gap detection, stale entity management, |
| src/claude_memory/analysis.py | 4 | memory consolidation, and ontology management. |
| src/claude_memory/analysis.py | 33 | """Graph health / gaps / stale / consolidation — mixed into MemoryService.""" |
| src/claude_memory/analysis.py | 206 | await self.vector_store.delete(params.entity_id) |
| src/claude_memory/analysis.py | 210 | """Hard delete archived entities older than N days. |

### Provenance/citation/evidence

| file | line | text |
| --- | --- | --- |
| src/claude_memory/crud_maintenance.py | 102 | evidence: $evidence, |
| src/claude_memory/crud_maintenance.py | 114 | "evidence": params.evidence, |
| src/claude_memory/crud.py | 123 | "evidence": params.evidence, |
| src/claude_memory/ontology.py | 34 | "description": "A piece of empirical evidence or note.", |
| src/claude_memory/schema.py | 37 | # Attribution |
| src/claude_memory/schema.py | 88 | evidence: list[str] = Field(default_factory=list) |
| src/claude_memory/schema.py | 128 | evidence: list[str] = Field(default_factory=list) |
| src/claude_memory/schema.py | 171 | evidence: list[str] = Field(default_factory=list) |

### Evaluation/observability

| file | line | text |
| --- | --- | --- |
| src/claude_memory/analysis.py | 41 | """Compute graph health metrics including community count. |
| src/claude_memory/clustering.py | 65 | db = DBSCAN(eps=self.eps, min_samples=self.min_samples, metric="cosine").fit(X) |
| src/claude_memory/clustering.py | 93 | # metric was euclidean. |
| src/claude_memory/logging_config.py | 1 | """Structured logging configuration for production observability.""" |
| src/claude_memory/repository_async.py | 153 | """Compute basic graph health metrics.""" |
| src/claude_memory/repository_queries.py | 197 | """Compute basic graph health metrics. |
| src/claude_memory/search.py | 594 | # Re-score merged candidates using cross-encoder for precision |
| src/claude_memory/stats.py | 3 | Tracks per-search metrics in a deque for statistical drift detection. |

### Agent/MCP/tool surface

| file | line | text |
| --- | --- | --- |
| src/claude_memory/analysis.py | 118 | """E-4: Session reconnect — structured briefing for a returning agent.""" |
| src/claude_memory/crud.py | 1 | """CRUD operations for the Claude Memory system. |
| src/claude_memory/exceptions.py | 1 | """Domain exceptions for the Claude Memory system. |
| src/claude_memory/fts_store.py | 8 | - SQLite database stored at ``~/.claude-memory/fts_index.db`` |
| src/claude_memory/fts_store.py | 30 | _DEFAULT_DB_DIR = Path.home() / ".claude-memory" |
| src/claude_memory/fts_store.py | 42 | the default location (``~/.claude-memory/fts_index.db``). |
| src/claude_memory/graph_algorithms.py | 1 | """Pure-Python graph algorithms for the Claude Memory system. |
| src/claude_memory/librarian.py | 1 | """Autonomous librarian agent — clusters, consolidates, and prunes memory nodes.""" |

## Gap

_없음_
