# kkollsga/kglite 코드 레벨 분석

생성일: 2026-06-17T23:31:46.103Z

## 기본 판정

| 항목 | 값 |
| --- | --- |
| type | graph-rag/kg |
| maturity | A integrated platform (104) |
| stars | 31 |
| language | Rust |
| tags | rag, knowledge-base, agent-knowledge |
| files/code/source | 893/614/379 |
| tests/ci | 120/4 |
| local path | sources/kkollsga__kglite |

## 파이프라인 단계

| 단계 | 상태 | matched files | source files | evidence |
| --- | --- | --- | --- | --- |
| Ingestion/source intake | code | 49 | 21 | benchmarks/api_benchmark.py:7 Ingest-measurement mode (PR0 baseline for disk-graph-improvement-plan): |
| Parsing/OCR/document extraction | code | 8 | 6 | crates/kglite/src/datasets/sec/fetch.rs:490 assert!(!is_exhibit21_attachment_name("ex21.pdf")); |
| Chunking/splitting | code | 80 | 48 | benchmarks/api_benchmark.py:690 Edges in chunk i only reference nodes in chunks 0..=i so source/target always exist. |
| Embedding/vector index | code | 125 | 67 | crates/kglite/src/graph/embedding_carry.rs:1 //! Cross-graph embedding carry — `DirGraph::copy_embeddings_from`. |
| Retrieval/search/rerank | code | 103 | 49 | benchmarks/api_benchmark.py:221 "CONTAINS search", |
| Wiki/graph/entity model | code | 353 | 111 | benchmarks/api_benchmark.py:39 from kglite import KnowledgeGraph, load # noqa: E402 |
| Memory/update lifecycle | code | 398 | 215 | benchmarks/api_benchmark.py:2 across memory, mapped, and disk storage modes on 4 datasets. |
| Provenance/citation/evidence | code | 148 | 49 | crates/kglite/src/datasets/sec/extract/provenance.rs:1 //! Provenance footer for every extracted info row. |
| Evaluation/observability | code | 168 | 81 | benchmarks/api_benchmark.py:1 """KGLite API Benchmark — tests API compatibility, performance, and correctness |
| Agent/MCP/tool surface | code | 174 | 88 | benchmarks/api_benchmark.py:44 LEGAL_BUILD_SCRIPT = Path("/Volumes/EksternalHome/Koding/MCP servers/legal") |

## 의존성 신호

- Graph/KG store: neo4j, networkx

## 주요 파일 후보

### Ingestion/source intake

- `benchmarks/api_benchmark.py`
- `kglite/__init__.py`
- `kglite/code_tree/__init__.py`
- `kglite/okf/__init__.py`
- `crates/kglite-mcp-server/src/csv_http.rs`
- `kglite/datasets/sec/wrapper.py`
- `crates/kglite/src/code_tree/models.rs`
- `crates/kglite/src/graph/dir_graph.rs`
- `crates/kglite/src/graph/mod.rs`
- `crates/kglite/src/okf/mod.rs`
- `crates/kglite/src/okf/model.rs`
- `crates/kglite-py/src/code_tree/pyapi/entry.rs`
- ... 6 more

### Parsing/OCR/document extraction

- `crates/kglite/src/datasets/sec/fetch.rs`
- `crates/kglite/src/datasets/sec/extract/provenance.rs`
- `crates/kglite/src/datasets/sec/extract/util.rs`
- `crates/kglite/src/datasets/sec/parsers/exhibit21.rs`
- `crates/kglite/src/datasets/sec/parsers/form4.rs`
- `crates/kglite/src/datasets/sec/parsers/idx.rs`
- `tests/fixtures/build_tiny_graph.py`
- `crates/kglite-mcp-server/skills/cypher_query.md`

### Chunking/splitting

- `benchmarks/api_benchmark.py`
- `kglite/datasets/wikidata.py`
- `crates/kglite/src/code_tree/models.rs`
- `crates/kglite/src/graph/dir_graph.rs`
- `crates/kglite/src/graph/explore.rs`
- `crates/kglite/src/graph/mod.rs`
- `crates/kglite/src/okf/build.rs`
- `crates/kglite-py/src/graph/pyapi/kg_fluent.rs`
- `crates/kglite/src/code_tree/builder/call_edges.rs`
- `crates/kglite/src/code_tree/builder/load.rs`
- `crates/kglite/src/code_tree/builder/other_edges.rs`
- `crates/kglite/src/code_tree/parsers/cpp.rs`
- ... 6 more

### Embedding/vector index

- `crates/kglite/src/graph/embedding_carry.rs`
- `kglite/_mcp_embed.py`
- `kglite/mcp_server.py`
- `scripts/cypher_conformance.py`
- `crates/kglite-bolt-server/src/backend.rs`
- `crates/kglite-c/src/embedder.rs`
- `crates/kglite-c/src/lib.rs`
- `crates/kglite-c/src/session.rs`
- `crates/kglite-mcp-server/src/lib.rs`
- `crates/kglite-mcp-server/src/tools.rs`
- `crates/kglite-py/src/lib.rs`
- `crates/kglite/src/lib.rs`
- ... 6 more

### Retrieval/search/rerank

- `benchmarks/api_benchmark.py`
- `benchmarks/benchmark_wikidata_cypher.py`
- `scripts/cypher_conformance.py`
- `scripts/refresh_release_constants.py`
- `crates/kglite/src/graph/dir_graph.rs`
- `crates/kglite/src/graph/explore.rs`
- `crates/kglite/src/graph/handle.rs`
- `crates/kglite/src/graph/schema.rs`
- `crates/kglite-py/src/graph/pyapi/algorithms.rs`
- `crates/kglite-py/src/graph/pyapi/frozen.rs`
- `crates/kglite-py/src/graph/pyapi/indexes.rs`
- `crates/kglite-py/src/graph/pyapi/kg_fluent.rs`
- ... 6 more

### Wiki/graph/entity model

- `benchmarks/api_benchmark.py`
- `benchmarks/bench_algorithms_quick.py`
- `benchmarks/bench_graph_traversal.py`
- `benchmarks/benchmark_cypher_scalability.py`
- `benchmarks/benchmark_storage_modes.py`
- `benchmarks/benchmark_wikidata_cypher.py`
- `benchmarks/wiki_benchmark.py`
- `kglite/__init__.py`
- `kglite/neo4j_export.py`
- `kglite/networkx_interop.py`
- `kglite/progress.py`
- `scripts/bolt_conformance.py`
- ... 6 more

### Memory/update lifecycle

- `benchmarks/api_benchmark.py`
- `benchmarks/bench_graph_traversal.py`
- `benchmarks/bench_save_subset.py`
- `benchmarks/benchmark_cypher_scalability.py`
- `benchmarks/benchmark_wikidata_describe.py`
- `benchmarks/wiki_benchmark.py`
- `kglite/neo4j_export.py`
- `kglite/progress.py`
- `scripts/compare_bench.py`
- `scripts/cypher_conformance.py`
- `scripts/perf_audit.py`
- `scripts/refresh_release_constants.py`
- ... 6 more

### Provenance/citation/evidence

- `crates/kglite/src/datasets/sec/extract/provenance.rs`
- `benchmarks/api_benchmark.py`
- `benchmarks/bench_graph_traversal.py`
- `benchmarks/bench_save_subset.py`
- `benchmarks/benchmark_cypher_scalability.py`
- `kglite/neo4j_export.py`
- `crates/kglite-mcp-server/src/tools.rs`
- `crates/kglite-py/src/lib.rs`
- `crates/kglite-py/src/graph/mod.rs`
- `crates/kglite/src/okf/build.rs`
- `crates/kglite/src/okf/links.rs`
- `crates/kglite-py/src/graph/pyapi/algorithms.rs`
- ... 6 more

### Evaluation/observability

- `benchmarks/api_benchmark.py`
- `benchmarks/bench_algorithms_quick.py`
- `benchmarks/bench_graph_traversal.py`
- `benchmarks/benchmark_cypher_scalability.py`
- `benchmarks/benchmark_describe.py`
- `benchmarks/benchmark_legal_graph.py`
- `benchmarks/benchmark_storage_modes.py`
- `benchmarks/benchmark_wikidata_cypher.py`
- `benchmarks/benchmark_wikidata_describe.py`
- `benchmarks/wiki_benchmark.py`
- `scripts/compare_bench.py`
- `scripts/perf_audit.py`
- ... 6 more

### Agent/MCP/tool surface

- `benchmarks/api_benchmark.py`
- `benchmarks/benchmark_cypher_scalability.py`
- `benchmarks/benchmark_describe.py`
- `benchmarks/benchmark_legal_graph.py`
- `benchmarks/benchmark_wikidata_cypher.py`
- `kglite/_mcp_embed.py`
- `kglite/claude_config.py`
- `kglite/mcp_server.py`
- `scripts/compare_bench.py`
- `kglite/okf/__init__.py`
- `crates/kglite-bolt-server/src/main.rs`
- `crates/kglite-c/src/embedder.rs`
- ... 6 more

## Evidence lines

### Ingestion/source intake

| file | line | text |
| --- | --- | --- |
| benchmarks/api_benchmark.py | 7 | Ingest-measurement mode (PR0 baseline for disk-graph-improvement-plan): |
| benchmarks/api_benchmark.py | 9 | python benchmarks/api_benchmark.py --measure-ingest |
| benchmarks/api_benchmark.py | 592 | print(" BUILD THROUGHPUT (N-Triples ingest)") |
| benchmarks/api_benchmark.py | 602 | # Ingest-measurement harness (PR0 of disk-graph-improvement-plan) |
| benchmarks/api_benchmark.py | 610 | # reproducibility. Optional --ingest-dataset wiki5m runs on the N-Triples |
| benchmarks/api_benchmark.py | 865 | # the measurement window on purpose — it's orchestration, not ingest. |
| benchmarks/api_benchmark.py | 942 | """Run all three ingest scenarios in isolated subprocesses, stream rows to benchmarks/ingest_baseline.csv. |
| benchmarks/api_benchmark.py | 950 | print(f" INGEST MEASUREMENT — mode={mode} dataset={dataset}") |

### Parsing/OCR/document extraction

| file | line | text |
| --- | --- | --- |
| crates/kglite/src/datasets/sec/fetch.rs | 490 | assert!(!is_exhibit21_attachment_name("ex21.pdf")); |
| crates/kglite/src/datasets/sec/extract/provenance.rs | 24 | //! - `source_page`: page number for paginated HTML/PDF filings |
| crates/kglite/src/datasets/sec/extract/util.rs | 358 | assert!(!is_exhibit21_name("ex-21.pdf")); |
| crates/kglite/src/datasets/sec/parsers/exhibit21.rs | 8 | //! 3. PDF-extracted text with weird whitespace |
| crates/kglite/src/datasets/sec/parsers/form4.rs | 116 | /// See https://www.sec.gov/about/forms/form4data.pdf for the full list. |
| crates/kglite/src/datasets/sec/parsers/idx.rs | 189 | file_path: "edgar/data/1/something-else.pdf".into(), |
| tests/fixtures/build_tiny_graph.py | 80 | "Grover's algorithm for unstructured database search.", |
| crates/kglite-mcp-server/skills/cypher_query.md | 89 | - `RETURN n, m AS alias` works; aliasing improves readability when joining tables in the head of your reasoning. |

### Chunking/splitting

| file | line | text |
| --- | --- | --- |
| benchmarks/api_benchmark.py | 690 | Edges in chunk i only reference nodes in chunks 0..=i so source/target always exist. |
| benchmarks/api_benchmark.py | 711 | # Edges: source in this chunk, target in any chunk 0..=ci |
| benchmarks/api_benchmark.py | 780 | """Add one chunk, save, repeat. Measures write amplification on disk mode. |
| kglite/datasets/wikidata.py | 212 | # `save()` consolidates the per-segment artifacts into a top-level |
| crates/kglite/src/code_tree/models.rs | 61 | /// constants* (terminal segment matches `SCREAMING_SNAKE_CASE`). |
| crates/kglite/src/graph/dir_graph.rs | 1808 | // which causes seal to write an empty segment and lose the |
| crates/kglite/src/graph/explore.rs | 424 | /// Merge `(start, end, name)` triples that overlap or are within a |
| crates/kglite/src/graph/mod.rs | 54 | /// Range overlap: valid_from <= end AND (valid_to IS NULL OR valid_to >= start). |

### Embedding/vector index

| file | line | text |
| --- | --- | --- |
| crates/kglite/src/graph/embedding_carry.rs | 1 | //! Cross-graph embedding carry — `DirGraph::copy_embeddings_from`. |
| crates/kglite/src/graph/embedding_carry.rs | 17 | /// Copy every embedding store from `src` into this graph, matching |
| crates/kglite/src/graph/embedding_carry.rs | 19 | /// rebuild). For the dominant embedding workflow: rebuild a fresh graph |
| crates/kglite/src/graph/embedding_carry.rs | 22 | /// `embeddings()` snapshot → `add_embeddings()` restore dance. Carries the |
| crates/kglite/src/graph/embedding_carry.rs | 25 | /// actually changed). A vector whose source id has no matching node here is |
| crates/kglite/src/graph/embedding_carry.rs | 34 | let store_keys: Vec<(String, String)> = src.embeddings.keys().cloned().collect(); |
| crates/kglite/src/graph/embedding_carry.rs | 37 | let Some(src_store) = src.embeddings.get(&(node_type.clone(), prop.clone())) else { |
| crates/kglite/src/graph/embedding_carry.rs | 53 | let Some(embedding) = src_store.get_embedding(src_idx) else { |

### Retrieval/search/rerank

| file | line | text |
| --- | --- | --- |
| benchmarks/api_benchmark.py | 221 | "CONTAINS search", |
| benchmarks/benchmark_wikidata_cypher.py | 7 | 4. Edge-type — tests sorted CSR binary search |
| benchmarks/benchmark_wikidata_cypher.py | 63 | # ── 4. EDGE-TYPE FILTERING (sorted CSR binary search) ────────── |
| benchmarks/benchmark_wikidata_cypher.py | 64 | # Q5 "human" — massive P31 hub. Binary search should skip millions. |
| scripts/cypher_conformance.py | 87 | "text_score", # KGLite-only semantic search function |
| scripts/refresh_release_constants.py | 60 | m = re.search(r'^\s*version\s*=\s*"([^"]+)"\s*$', text, re.MULTILINE) |
| scripts/refresh_release_constants.py | 100 | cur_match = re.search(r'^(GOLDEN_V3_DIGEST = )"([0-9a-f]{64})"', text, re.MULTILINE) |
| scripts/refresh_release_constants.py | 119 | marker = re.search(r"( )\}\s*\n\)\s*\n", text) |

### Wiki/graph/entity model

| file | line | text |
| --- | --- | --- |
| benchmarks/api_benchmark.py | 39 | from kglite import KnowledgeGraph, load # noqa: E402 |
| benchmarks/api_benchmark.py | 99 | """Create a KnowledgeGraph with the right storage kwargs.""" |
| benchmarks/api_benchmark.py | 106 | return KnowledgeGraph(**kwargs) |
| benchmarks/bench_algorithms_quick.py | 61 | g = kglite.KnowledgeGraph() |
| benchmarks/bench_algorithms_quick.py | 129 | bench("label_propagation", lambda: g.cypher("CALL label_propagation() YIELD node, community")) |
| benchmarks/bench_algorithms_quick.py | 131 | bench("louvain", lambda: g.cypher("CALL louvain() YIELD node, community")) |
| benchmarks/bench_graph_traversal.py | 281 | g = kglite.KnowledgeGraph() |
| benchmarks/bench_graph_traversal.py | 365 | # This is the purest traversal benchmark: same entity type, same edge type, |

### Memory/update lifecycle

| file | line | text |
| --- | --- | --- |
| benchmarks/api_benchmark.py | 2 | across memory, mapped, and disk storage modes on 4 datasets. |
| benchmarks/api_benchmark.py | 12 | (one-shot, incremental-10-save, mutation-stream) on the disk backend, |
| benchmarks/api_benchmark.py | 18 | Memory results are ground truth. Mismatches in mapped/disk are flagged as errors. |
| benchmarks/api_benchmark.py | 124 | sys.argv = ["build_legal_graph.py", "--storage", mode if mode != "memory" else "default"] |
| benchmarks/api_benchmark.py | 461 | storage = mode if mode != "memory" else "default" |
| benchmarks/api_benchmark.py | 503 | """Compare results across modes. Memory is ground truth.""" |
| benchmarks/api_benchmark.py | 505 | if "memory" not in modes: |
| benchmarks/api_benchmark.py | 506 | print("WARNING: no memory results to use as ground truth") |

### Provenance/citation/evidence

| file | line | text |
| --- | --- | --- |
| crates/kglite/src/datasets/sec/extract/provenance.rs | 1 | //! Provenance footer for every extracted info row. |
| crates/kglite/src/datasets/sec/extract/provenance.rs | 4 | //! eight provenance columns. Their values let any reader resolve the |
| crates/kglite/src/datasets/sec/extract/provenance.rs | 17 | //! - `source_url`: relative path under |
| crates/kglite/src/datasets/sec/extract/provenance.rs | 34 | /// Provenance footer values for one extracted info row. |
| crates/kglite/src/datasets/sec/extract/provenance.rs | 41 | pub struct Provenance { |
| crates/kglite/src/datasets/sec/extract/provenance.rs | 52 | impl Provenance { |
| crates/kglite/src/datasets/sec/extract/provenance.rs | 55 | /// can splice provenance out by suffix without per-table mapping. |
| crates/kglite/src/datasets/sec/extract/provenance.rs | 60 | "source_url", |

### Evaluation/observability

| file | line | text |
| --- | --- | --- |
| benchmarks/api_benchmark.py | 1 | """KGLite API Benchmark — tests API compatibility, performance, and correctness |
| benchmarks/api_benchmark.py | 1000 | print(f"KGLite v{kglite.__version__} API Benchmark") |
| benchmarks/bench_algorithms_quick.py | 1 | """Quick benchmark for graph algorithm performance (Steps 2,3,4 optimizations).""" |
| benchmarks/bench_graph_traversal.py | 2 | Benchmark: SQLite vs DuckDB vs KGLite — graph traversal performance. |
| benchmarks/bench_graph_traversal.py | 340 | # ── Benchmark harness ────────────────────────────────────────────────────── |
| benchmarks/bench_graph_traversal.py | 365 | # This is the purest traversal benchmark: same entity type, same edge type, |
| benchmarks/benchmark_cypher_scalability.py | 267 | # Benchmark definitions |
| benchmarks/benchmark_cypher_scalability.py | 457 | # These queries have explosion potential — the benchmark |

### Agent/MCP/tool surface

| file | line | text |
| --- | --- | --- |
| benchmarks/api_benchmark.py | 44 | LEGAL_BUILD_SCRIPT = Path("/Volumes/EksternalHome/Koding/MCP servers/legal") |
| benchmarks/api_benchmark.py | 45 | SODIR_BUILD_SCRIPT = Path("/Volumes/EksternalHome/Koding/MCP servers") |
| benchmarks/benchmark_cypher_scalability.py | 307 | # 2b. Single-hop from specific node (anchored) — typical MCP query |
| benchmarks/benchmark_describe.py | 13 | LEGAL_PATH = "/Volumes/EksternalHome/Koding/MCP servers/legal/norwegian_law.kgl" |
| benchmarks/benchmark_describe.py | 14 | PROSPECT_PATH = "/Volumes/EksternalHome/Koding/MCP servers/prospect_mcp/sodir_graph.kgl" |
| benchmarks/benchmark_legal_graph.py | 3 | Source: /Volumes/EksternalHome/Koding/MCP servers/legal/norwegian_law.kgl |
| benchmarks/benchmark_legal_graph.py | 16 | SOURCE_GRAPH = "/Volumes/EksternalHome/Koding/MCP servers/legal/norwegian_law.kgl" |
| benchmarks/benchmark_wikidata_cypher.py | 48 | # ── 2. ANCHORED HOPS — the MCP sweet spot ────────────────────── |

## Gap

_없음_
