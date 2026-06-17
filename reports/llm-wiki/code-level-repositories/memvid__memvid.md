# memvid/memvid 코드 레벨 분석

생성일: 2026-06-17T23:31:18.616Z

## 기본 판정

| 항목 | 값 |
| --- | --- |
| type | rag-knowledge-platform |
| maturity | A integrated platform (99) |
| stars | 15665 |
| language | Rust |
| tags | rag, knowledge-base, agent-knowledge, korea-signal |
| files/code/source | 216/163/139 |
| tests/ci | 12/5 |
| local path | sources/memvid__memvid |

## 파이프라인 단계

| 단계 | 상태 | matched files | source files | evidence |
| --- | --- | --- | --- | --- |
| Ingestion/source intake | code | 32 | 21 | src/enrichment_worker.rs:1 //! Background enrichment worker for progressive ingestion. |
| Parsing/OCR/document extraction | code | 44 | 27 | src/clip.rs:6 //! enabling semantic search across images and PDF pages with natural language queries. |
| Chunking/splitting | code | 52 | 41 | src/api_embed.rs:449 for chunk in texts.chunks(max_batch) { |
| Embedding/vector index | code | 73 | 50 | src/types/embedding_identity.rs:3 /// Frame-level embedding metadata keys (stored in `Frame.extra_metadata`). |
| Retrieval/search/rerank | code | 86 | 57 | src/api_embed.rs:3 //! This module provides cloud API embedding generation, enabling semantic search |
| Wiki/graph/entity model | code | 30 | 26 | src/graph_search.rs:5 //! 2. Match patterns against entity state (`MemoryCards`) or graph (Logic-Mesh) |
| Memory/update lifecycle | code | 129 | 86 | src/clip.rs:295 /// In-memory CLIP index for similarity search |
| Provenance/citation/evidence | code | 14 | 12 | src/toc.rs:314 source_path: None, |
| Evaluation/observability | code | 60 | 45 | src/api_embed.rs:268 tracing::info!( |
| Agent/MCP/tool surface | code | 30 | 18 | src/api_embed.rs:1 //! API-based embedding providers (OpenAI, Anthropic, etc.) |

## 의존성 신호

- LLM/app framework: candle-transformers
- Vector/search store: hnsw, hnsw_bench

## 주요 파일 후보

### Ingestion/source intake

- `src/enrichment_worker.rs`
- `src/extract_budgeted.rs`
- `src/lib.rs`
- `src/tests_lex_flag.rs`
- `src/analysis/temporal_enrich.rs`
- `src/io/manifest_wal.rs`
- `src/memvid/ask.rs`
- `src/memvid/builder.rs`
- `src/memvid/chunks.rs`
- `src/memvid/enrichment.rs`
- `src/memvid/frame.rs`
- `src/memvid/mutation.rs`
- ... 6 more

### Parsing/OCR/document extraction

- `src/clip.rs`
- `src/extract_budgeted.rs`
- `src/extract.rs`
- `src/lib.rs`
- `src/symspell_cleanup.rs`
- `src/text.rs`
- `src/memvid/chunks.rs`
- `src/memvid/mutation.rs`
- `src/reader/docx.rs`
- `src/reader/mod.rs`
- `src/reader/passthrough.rs`
- `src/reader/pdf.rs`
- ... 6 more

### Chunking/splitting

- `src/api_embed.rs`
- `src/lib.rs`
- `src/symspell_cleanup.rs`
- `src/whisper.rs`
- `src/analysis/temporal_enrich.rs`
- `src/io/manifest_wal.rs`
- `src/io/temporal_index.rs`
- `src/memvid/builder.rs`
- `src/memvid/chunks.rs`
- `src/memvid/doctor.rs`
- `src/memvid/frame.rs`
- `src/memvid/helpers.rs`
- ... 6 more

### Embedding/vector index

- `src/types/embedding_identity.rs`
- `src/types/embedding.rs`
- `src/api_embed.rs`
- `src/clip.rs`
- `src/enrichment_worker.rs`
- `src/error.rs`
- `src/graph_search.rs`
- `src/lib.rs`
- `src/models.rs`
- `src/simd.rs`
- `src/text_embed.rs`
- `src/vec_pq.rs`
- ... 6 more

### Retrieval/search/rerank

- `src/api_embed.rs`
- `src/clip.rs`
- `src/error.rs`
- `src/extract.rs`
- `src/graph_search.rs`
- `src/lex.rs`
- `src/lib.rs`
- `src/simd.rs`
- `src/tests_lex_flag.rs`
- `src/text_embed.rs`
- `src/vec_pq.rs`
- `src/vec.rs`
- ... 6 more

### Wiki/graph/entity model

- `src/graph_search.rs`
- `src/lib.rs`
- `src/analysis/ner.rs`
- `src/enrich/rules.rs`
- `src/memvid/lifecycle.rs`
- `src/memvid/memory.rs`
- `src/memvid/mesh.rs`
- `src/memvid/mutation.rs`
- `src/table/storage.rs`
- `src/triplet/extractor.rs`
- `src/triplet/mod.rs`
- `src/triplet/types.rs`
- ... 6 more

### Memory/update lifecycle

- `src/clip.rs`
- `src/enrichment_worker.rs`
- `src/error.rs`
- `src/extract.rs`
- `src/graph_search.rs`
- `src/lib.rs`
- `src/lockfile.rs`
- `src/pii.rs`
- `src/symspell_cleanup.rs`
- `src/tests_lex_flag.rs`
- `src/text_embed.rs`
- `src/text.rs`
- ... 6 more

### Provenance/citation/evidence

- `src/toc.rs`
- `src/memvid/ask.rs`
- `src/memvid/audit.rs`
- `src/memvid/mutation.rs`
- `src/table/storage.rs`
- `src/triplet/extractor.rs`
- `src/types/acl.rs`
- `src/types/ask.rs`
- `src/types/audit.rs`
- `src/types/frame.rs`
- `src/types/memory_card.rs`
- `src/types/options.rs`
- ... 2 more

### Evaluation/observability

- `src/api_embed.rs`
- `src/clip.rs`
- `src/enrichment_worker.rs`
- `src/extract_budgeted.rs`
- `src/extract.rs`
- `src/symspell_cleanup.rs`
- `src/text_embed.rs`
- `src/toc.rs`
- `src/vec.rs`
- `src/whisper.rs`
- `src/analysis/ner.rs`
- `src/io/wal.rs`
- ... 6 more

### Agent/MCP/tool surface

- `src/api_embed.rs`
- `src/graph_search.rs`
- `src/lib.rs`
- `src/whisper.rs`
- `src/enrich/engine.rs`
- `src/enrich/rules.rs`
- `src/memvid/memory.rs`
- `src/memvid/replay_ops.rs`
- `src/replay/engine.rs`
- `src/replay/mod.rs`
- `src/replay/types.rs`
- `src/triplet/extractor.rs`
- ... 6 more

## Evidence lines

### Ingestion/source intake

| file | line | text |
| --- | --- | --- |
| src/enrichment_worker.rs | 1 | //! Background enrichment worker for progressive ingestion. |
| src/extract_budgeted.rs | 4 | //! enabling sub-second ingestion for large files. Uses pdf-extract (when available) |
| src/extract_budgeted.rs | 20 | /// Calibrated for sub-second total ingestion (<1s including I/O + indexing). |
| src/lib.rs | 110 | // Triplet extraction module for automatic SPO extraction during ingestion |
| src/lib.rs | 150 | // Temporal enrichment for resolving relative time references during ingestion |
| src/tests_lex_flag.rs | 14 | // Phase 1: create, enable lex, ingest docs with periodic seals |
| src/analysis/temporal_enrich.rs | 4 | //! references during document ingestion. This module detects date anchors |
| src/io/manifest_wal.rs | 1 | //! Durable manifest WAL for append-only segment descriptors (parallel ingestion). |

### Parsing/OCR/document extraction

| file | line | text |
| --- | --- | --- |
| src/clip.rs | 6 | //! enabling semantic search across images and PDF pages with natural language queries. |
| src/clip.rs | 20 | #[cfg(all(feature = "clip", not(feature = "pdfium")))] |
| src/clip.rs | 22 | #[cfg(all(feature = "clip", not(feature = "pdfium")))] |
| src/clip.rs | 26 | #[cfg(all(feature = "clip", not(feature = "pdfium")))] |
| src/clip.rs | 1257 | #[cfg(all(feature = "clip", feature = "pdfium"))] |
| src/clip.rs | 1258 | use pdfium_render::prelude::{PdfPageRenderRotation, PdfRenderConfig, Pdfium}; |
| src/clip.rs | 1260 | /// Render PDF pages to images suitable for CLIP embedding (feature-gated). |
| src/clip.rs | 1261 | #[cfg(all(feature = "clip", feature = "pdfium"))] |

### Chunking/splitting

| file | line | text |
| --- | --- | --- |
| src/api_embed.rs | 449 | for chunk in texts.chunks(max_batch) { |
| src/api_embed.rs | 450 | let chunk_embeddings = self.request_embeddings(chunk)?; |
| src/lib.rs | 497 | let segment = without_query |
| src/lib.rs | 502 | if segment.is_empty() { |
| src/lib.rs | 506 | let stem = segment.rsplit_once('.').map_or(segment, \|x\| x.0).trim(); |
| src/lib.rs | 811 | let chunk = hit.chunk_range.expect("chunk range"); |
| src/lib.rs | 812 | assert!(chunk.0 <= start); |
| src/lib.rs | 813 | assert!(chunk.1 >= end); |

### Embedding/vector index

| file | line | text |
| --- | --- | --- |
| src/types/embedding_identity.rs | 3 | /// Frame-level embedding metadata keys (stored in `Frame.extra_metadata`). |
| src/types/embedding_identity.rs | 8 | pub const MEMVID_EMBEDDING_PROVIDER_KEY: &str = "memvid.embedding.provider"; |
| src/types/embedding_identity.rs | 9 | pub const MEMVID_EMBEDDING_MODEL_KEY: &str = "memvid.embedding.model"; |
| src/types/embedding_identity.rs | 10 | pub const MEMVID_EMBEDDING_DIMENSION_KEY: &str = "memvid.embedding.dimension"; |
| src/types/embedding_identity.rs | 11 | pub const MEMVID_EMBEDDING_NORMALIZED_KEY: &str = "memvid.embedding.normalized"; |
| src/types/embedding_identity.rs | 13 | /// Identifies an embedding "vector space" used for semantic search. |
| src/types/embedding_identity.rs | 26 | /// Parse an embedding identity from a frame's `extra_metadata`. |
| src/types/embedding.rs | 1 | //! Embedding provider trait and implementations. |

### Retrieval/search/rerank

| file | line | text |
| --- | --- | --- |
| src/api_embed.rs | 3 | //! This module provides cloud API embedding generation, enabling semantic search |
| src/clip.rs | 6 | //! enabling semantic search across images and PDF pages with natural language queries. |
| src/clip.rs | 15 | //! - **Graceful Degradation**: Works without CLIP, just loses visual search capability. |
| src/clip.rs | 295 | /// In-memory CLIP index for similarity search |
| src/clip.rs | 357 | /// Search for similar embeddings using L2 distance |
| src/clip.rs | 359 | pub fn search(&self, query: &[f32], limit: usize) -> Vec<ClipSearchHit> { |
| src/clip.rs | 438 | /// Search result from CLIP index |
| src/clip.rs | 1503 | /// // Encode query text for search |

### Wiki/graph/entity model

| file | line | text |
| --- | --- | --- |
| src/graph_search.rs | 5 | //! 2. Match patterns against entity state (`MemoryCards`) or graph (Logic-Mesh) |
| src/graph_search.rs | 23 | /// Pattern for detecting entity-related queries. |
| src/graph_search.rs | 84 | // Entity state patterns |
| src/graph_search.rs | 124 | // Create pattern: ?entity :slot "value" |
| src/graph_search.rs | 125 | pattern.add(TriplePattern::any_slot_value("entity", ep.slot, &value)); |
| src/graph_search.rs | 133 | // Check for entity-specific queries like "alice's employer" or "what is alice's job" |
| src/graph_search.rs | 134 | if let Some((entity, slot)) = extract_possessive_query(query_lower) { |
| src/graph_search.rs | 135 | pattern.add(TriplePattern::entity_slot_any(&entity, &slot, "value")); |

### Memory/update lifecycle

| file | line | text |
| --- | --- | --- |
| src/clip.rs | 295 | /// In-memory CLIP index for similarity search |
| src/clip.rs | 593 | use std::sync::Mutex; |
| src/clip.rs | 1129 | /// Maybe unload model if unused for too long (memory management) |
| src/clip.rs | 1508 | pub trait ClipEmbeddingProvider: Send + Sync { |
| src/clip.rs | 1549 | /// Unload models to free memory. |
| src/clip.rs | 1749 | fn assert_send_sync<T: Send + Sync>() {} |
| src/clip.rs | 1751 | // The trait should require Send + Sync |
| src/enrichment_worker.rs | 9 | use std::sync::Arc; |

### Provenance/citation/evidence

| file | line | text |
| --- | --- | --- |
| src/toc.rs | 314 | source_path: None, |
| src/toc.rs | 346 | source_path: None, |
| src/memvid/ask.rs | 382 | let (answer, citations, synthesis_ms) = if request.context_only { |
| src/memvid/ask.rs | 386 | let citations = build_citations(&retrieval.hits, &semantic_scores); |
| src/memvid/ask.rs | 387 | let answer = synthesize_answer(&request.question, &retrieval.hits, &citations); |
| src/memvid/ask.rs | 389 | (answer, citations, synth_ms) |
| src/memvid/ask.rs | 433 | citations, |
| src/memvid/ask.rs | 782 | citations: &[AskCitation], |

### Evaluation/observability

| file | line | text |
| --- | --- | --- |
| src/api_embed.rs | 268 | tracing::info!( |
| src/api_embed.rs | 314 | tracing::warn!( |
| src/api_embed.rs | 347 | tracing::debug!( |
| src/clip.rs | 37 | // warnings from Apple's tracing infrastructure. These are harmless but noisy. |
| src/clip.rs | 348 | tracing::debug!( |
| src/clip.rs | 738 | tracing::debug!(path = %vision_path.display(), "Loading CLIP vision model"); |
| src/clip.rs | 763 | tracing::info!(model = %self.model_info.name, "CLIP vision model loaded"); |
| src/clip.rs | 781 | tracing::debug!(path = %text_path.display(), "Loading CLIP text model"); |

### Agent/MCP/tool surface

| file | line | text |
| --- | --- | --- |
| src/api_embed.rs | 1 | //! API-based embedding providers (OpenAI, Anthropic, etc.) |
| src/api_embed.rs | 28 | // OpenAI Models Registry |
| src/api_embed.rs | 31 | /// OpenAI embedding model information |
| src/api_embed.rs | 46 | /// Available OpenAI embedding models |
| src/api_embed.rs | 90 | /// Configuration for OpenAI embedding provider |
| src/api_embed.rs | 97 | /// Custom API base URL (for Azure OpenAI, proxies, etc.) |
| src/api_embed.rs | 98 | /// Default: "https://api.openai.com/v1" |
| src/api_embed.rs | 113 | base_url: "https://api.openai.com/v1".to_string(), |

## Gap

_없음_
