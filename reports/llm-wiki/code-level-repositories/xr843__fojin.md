# xr843/fojin 코드 레벨 분석

생성일: 2026-06-17T23:31:29.727Z

## 기본 판정

| 항목 | 값 |
| --- | --- |
| type | graph-rag/kg |
| maturity | A integrated platform (108) |
| stars | 312 |
| language | Python |
| tags | rag, knowledge-base, korea-signal |
| files/code/source | 826/626/555 |
| tests/ci | 71/9 |
| local path | sources/xr843__fojin |

## 파이프라인 단계

| 단계 | 상태 | matched files | source files | evidence |
| --- | --- | --- | --- | --- |
| Ingestion/source intake | code | 41 | 31 | backend/app/main.py:503 # and /texts/{id}/read so Google's no-JS crawler sees real titles |
| Parsing/OCR/document extraction | code | 36 | 27 | backend/app/main.py:243 "description": "Export texts in PDF, EPUB, and other formats / 导出经文为 PDF、EPUB 等格式", |
| Chunking/splitting | code | 67 | 43 | backend/scripts/build_alignments.py:1 """Build chunk-level cross-canon alignments for FoJin 三语 RAG MVP. |
| Embedding/vector index | code | 63 | 42 | backend/alembic/versions/0098_add_hnsw_index_on_text_embeddings.py:1 """add HNSW vector index on text_embeddings for faster similarity search |
| Retrieval/search/rerank | code | 154 | 116 | backend/app/services/precise_retrieval.py:1 """Metadata-direct text retrieval for queries naming a specific 经名+卷号. |
| Wiki/graph/entity model | code | 119 | 104 | backend/app/main.py:65 knowledge_graph, |
| Memory/update lifecycle | code | 223 | 179 | backend/app/main.py:98 # in-memory snapshot of 31k CBETA gaiji entries; rebuilt only on |
| Provenance/citation/evidence | code | 168 | 140 | backend/alembic/versions/0128_add_kg_entity_provenance.py:1 """Add provenance tracking to kg_entities. |
| Evaluation/observability | code | 31 | 20 | backend/app/main.py:142 \| Metric \| Value \| |
| Agent/MCP/tool surface | code | 73 | 58 | backend/app/config.py:39 # LLM (OpenAI-compatible API) — primary model |

## 의존성 신호

- LLM/app framework: openai
- Vector/search store: elasticsearch, pgvector
- Document parsing/OCR: pypdf, python-docx, beautifulsoup4
- Persistence/database: aiosqlite, asyncpg, sqlalchemy, redis, pgvector

## 주요 파일 후보

### Ingestion/source intake

- `backend/app/main.py`
- `backend/scripts/build_alignments.py`
- `backend/alembic/versions/0031_add_source_distributions_and_priority_sources.py`
- `backend/alembic/versions/0033_import_google_discovered_sources.py`
- `backend/alembic/versions/0122_normalize_sources_metadata.py`
- `backend/alembic/versions/0128_add_kg_entity_provenance.py`
- `backend/alembic/versions/0129_add_chat_attachments.py`
- `backend/alembic/versions/0132_source_health_status_and_3_new_sources.py`
- `backend/alembic/versions/0149_backfill_primary_source_licenses.py`
- `backend/alembic/versions/0156_add_mitra_alignments.py`
- `backend/alembic/versions/0157_add_text_content_trgm_index.py`
- `backend/app/api/chat.py`
- ... 6 more

### Parsing/OCR/document extraction

- `backend/app/main.py`
- `backend/alembic/versions/0022_seed_research_sources.py`
- `backend/alembic/versions/0023_fix_urls_add_sources_upgrade_types.py`
- `backend/alembic/versions/0052_add_specialized_buddhist_text_sources.py`
- `backend/alembic/versions/0053_add_more_specialized_buddhist_sources.py`
- `backend/alembic/versions/0054_ensure_openpecha_source_exists.py`
- `backend/alembic/versions/0056_add_tier_data_sources_and_distributions.py`
- `backend/alembic/versions/0060_add_tripitaka_canon_sources.py`
- `backend/alembic/versions/0088_add_foyan_and_texta_sources.py`
- `backend/alembic/versions/0091_add_dharmamitra_source.py`
- `backend/alembic/versions/0097_add_more_global_sources.py`
- `backend/alembic/versions/0121_add_16_academic_ai_regional_sources.py`
- ... 6 more

### Chunking/splitting

- `backend/scripts/build_alignments.py`
- `backend/scripts/classify_buddhist_persons.py`
- `backend/scripts/export_alignment_dataset.py`
- `backend/scripts/import_gaiji.py`
- `backend/scripts/import_mitra_alignments.py`
- `backend/alembic/versions/0060_add_tripitaka_canon_sources.py`
- `backend/alembic/versions/0120_extend_alignment_chunk_level.py`
- `backend/alembic/versions/0156_add_mitra_alignments.py`
- `backend/app/api/alignment.py`
- `backend/app/api/chat.py`
- `backend/app/api/og.py`
- `backend/app/api/seo.py`
- ... 6 more

### Embedding/vector index

- `backend/alembic/versions/0098_add_hnsw_index_on_text_embeddings.py`
- `backend/alembic/versions/0108_add_source_embedding.py`
- `backend/app/services/embedding.py`
- `backend/scripts/archive/misc/embedding_server.py`
- `backend/scripts/archive/misc/generate_embeddings.py`
- `backend/scripts/archive/misc/generate_source_embeddings.py`
- `backend/app/config.py`
- `backend/app/main.py`
- `backend/scripts/base_importer.py`
- `backend/scripts/build_alignments.py`
- `backend/scripts/import_catalog.py`
- `backend/scripts/import_content.py`
- ... 6 more

### Retrieval/search/rerank

- `backend/app/services/precise_retrieval.py`
- `backend/app/services/rag_retrieval.py`
- `backend/app/config.py`
- `backend/app/database.py`
- `backend/app/main.py`
- `backend/eval/run_eval.py`
- `backend/scripts/audit_enrichable.py`
- `backend/scripts/audit_entity_languages.py`
- `backend/scripts/build_alignments.py`
- `backend/scripts/classify_buddhist_persons.py`
- `backend/scripts/extract_structured_kg.py`
- `backend/scripts/fetch_amap_temples_v3.py`
- ... 6 more

### Wiki/graph/entity model

- `backend/app/main.py`
- `backend/scripts/audit_enrichable.py`
- `backend/scripts/audit_entity_languages.py`
- `backend/scripts/audit_entity_types_wikidata.py`
- `backend/scripts/audit_noise_entities.py`
- `backend/scripts/audit_persons_detail.py`
- `backend/scripts/audit_remaining.py`
- `backend/scripts/backfill_address_regeo.py`
- `backend/scripts/backfill_person_coords_v3.py`
- `backend/scripts/check_dynasty_gaps.py`
- `backend/scripts/check_geo_gaps.py`
- `backend/scripts/classify_buddhist_persons.py`
- ... 6 more

### Memory/update lifecycle

- `backend/app/main.py`
- `backend/scripts/audit_works.py`
- `backend/scripts/build_works.py`
- `backend/scripts/extract_structured_kg.py`
- `backend/scripts/health_check_sources.py`
- `backend/scripts/import_catalog.py`
- `backend/scripts/import_content.py`
- `backend/scripts/import_gaiji.py`
- `backend/scripts/import_mitra_alignments.py`
- `backend/scripts/run_amap_v3.sh`
- `backend/scripts/seed_hot_questions.py`
- `backend/scripts/sync_dila_combined.py`
- ... 6 more

### Provenance/citation/evidence

- `backend/alembic/versions/0128_add_kg_entity_provenance.py`
- `backend/app/services/provenance.py`
- `backend/app/main.py`
- `backend/eval/scorer.py`
- `backend/scripts/backfill_cbeta_identifiers.py`
- `backend/scripts/build_alignments.py`
- `backend/scripts/classify_buddhist_persons.py`
- `backend/scripts/export_alignment_dataset.py`
- `backend/scripts/extract_structured_kg.py`
- `backend/scripts/import_catalog.py`
- `backend/scripts/import_dila_dict.py`
- `backend/scripts/import_stats.py`
- ... 6 more

### Evaluation/observability

- `backend/app/main.py`
- `backend/eval/__init__.py`
- `backend/eval/run_eval.py`
- `backend/eval/scorer.py`
- `backend/scripts/audit_works.py`
- `backend/scripts/backfill_person_coords_v3.py`
- `backend/scripts/build_alignments.py`
- `backend/scripts/import_content.py`
- `backend/alembic/versions/0097_add_more_global_sources.py`
- `backend/alembic/versions/0098_add_hnsw_index_on_text_embeddings.py`
- `backend/alembic/versions/0121_add_16_academic_ai_regional_sources.py`
- `backend/app/api/stats.py`
- ... 6 more

### Agent/MCP/tool surface

- `backend/app/config.py`
- `backend/scripts/audit_entity_types_wikidata.py`
- `backend/scripts/audit_sources.py`
- `backend/scripts/backfill_address_regeo.py`
- `backend/scripts/build_alignments.py`
- `backend/scripts/fetch_academic_feeds.py`
- `backend/scripts/fetch_amap_temples_v3.py`
- `backend/scripts/health_check_sources.py`
- `backend/scripts/sync_dila_combined.py`
- `backend/scripts/validate_persons_wikidata.py`
- `backend/alembic/versions/0097_add_more_global_sources.py`
- `backend/alembic/versions/0104_add_research_fields.py`
- ... 6 more

## Evidence lines

### Ingestion/source intake

| file | line | text |
| --- | --- | --- |
| backend/app/main.py | 503 | # and /texts/{id}/read so Google's no-JS crawler sees real titles |
| backend/scripts/build_alignments.py | 167 | # T0251 (text_id=9) has corrupted ingestion — only 明太祖御制序 + 唐慧忠序， |
| backend/scripts/build_alignments.py | 272 | # 84000 这两本藏译目前 chunks=0 未 ingest（参考 prod 2026-06-09 实测）。 |
| backend/alembic/versions/0031_add_source_distributions_and_priority_sources.py | 1 | """add source_distributions and seed priority ingest endpoints |
| backend/alembic/versions/0033_import_google_discovered_sources.py | 11 | Data discovered 2026-03-02 via Apify Google Search Scraper. |
| backend/alembic/versions/0122_normalize_sources_metadata.py | 9 | 2. `has_local_fulltext` was almost never flipped to true even as ingestion |
| backend/alembic/versions/0128_add_kg_entity_provenance.py | 3 | Today the only ingestion-lineage signal on a kg_entity row is ``created_at`` |
| backend/alembic/versions/0128_add_kg_entity_provenance.py | 31 | - ``ingested_at``: wall-clock time of the most recent ingestion that |

### Parsing/OCR/document extraction

| file | line | text |
| --- | --- | --- |
| backend/app/main.py | 243 | "description": "Export texts in PDF, EPUB, and other formats / 导出经文为 PDF、EPUB 等格式", |
| backend/alembic/versions/0022_seed_research_sources.py | 169 | "description": "基于 AI 的藏语辞典、翻译与 OCR 工具", |
| backend/alembic/versions/0023_fix_urls_add_sources_upgrade_types.py | 65 | ("openpecha", "api", "面向藏文 pecha 的开放文本生态，提供 REST API、OCR、搜索与标注工具"), |
| backend/alembic/versions/0052_add_specialized_buddhist_text_sources.py | 275 | "code": "buda-tibetan-ocr-app", |
| backend/alembic/versions/0052_add_specialized_buddhist_text_sources.py | 276 | "name": "Tibetan OCR App", |
| backend/alembic/versions/0052_add_specialized_buddhist_text_sources.py | 278 | "url": "https://github.com/buda-base/tibetan-ocr-app", |
| backend/alembic/versions/0052_add_specialized_buddhist_text_sources.py | 280 | "license_note": "BUDA / BDRC 官方藏文 OCR 应用仓库，可辅助影像到文本的研究流程。", |
| backend/alembic/versions/0053_add_more_specialized_buddhist_sources.py | 135 | "description": "DILA《现代语译长阿含经注解索引》平台，提供 HTML / PDF / XML 形式的研究索引资源。", |

### Chunking/splitting

| file | line | text |
| --- | --- | --- |
| backend/scripts/build_alignments.py | 1 | """Build chunk-level cross-canon alignments for FoJin 三语 RAG MVP. |
| backend/scripts/build_alignments.py | 5 | for chunk in text_a.chunks: |
| backend/scripts/build_alignments.py | 6 | candidates = pgvector top-20 of text_b chunks by cosine distance to chunk.vec |
| backend/scripts/build_alignments.py | 8 | verdict = llm_verify(chunk.text, cand.text, a_lang, b_lang) |
| backend/scripts/build_alignments.py | 10 | insert alignment_pairs(chunk, cand, confidence, method='embed_llm') |
| backend/scripts/build_alignments.py | 67 | EMBED_TOP_K = 20 # pgvector candidates per source chunk |
| backend/scripts/build_alignments.py | 68 | MAX_PARALLEL_PER_CHUNK = 3 # stop after accepting this many targets for one src chunk |
| backend/scripts/build_alignments.py | 137 | and for each chunk, pgvector-search top-K candidates inside text_b's |

### Embedding/vector index

| file | line | text |
| --- | --- | --- |
| backend/alembic/versions/0098_add_hnsw_index_on_text_embeddings.py | 1 | """add HNSW vector index on text_embeddings for faster similarity search |
| backend/alembic/versions/0098_add_hnsw_index_on_text_embeddings.py | 3 | Without a vector index, every cosine similarity query performs a full |
| backend/alembic/versions/0098_add_hnsw_index_on_text_embeddings.py | 4 | table scan (O(n)). An HNSW index reduces this to O(log n) with |
| backend/alembic/versions/0098_add_hnsw_index_on_text_embeddings.py | 25 | "ON text_embeddings USING hnsw (embedding vector_cosine_ops) " |
| backend/alembic/versions/0108_add_source_embedding.py | 1 | """Add embedding column to data_sources for AI Chat source recommendation. |
| backend/alembic/versions/0108_add_source_embedding.py | 16 | op.execute("ALTER TABLE data_sources ADD COLUMN embedding vector(1024)") |
| backend/alembic/versions/0108_add_source_embedding.py | 20 | op.drop_column("data_sources", "embedding") |
| backend/app/services/embedding.py | 13 | # In-process LRU cache for query embeddings (avoids repeated API calls for identical queries) |

### Retrieval/search/rerank

| file | line | text |
| --- | --- | --- |
| backend/app/services/precise_retrieval.py | 1 | """Metadata-direct text retrieval for queries naming a specific 经名+卷号. |
| backend/app/services/precise_retrieval.py | 5 | chunks in vector space. Vector retrieval over a 678K-chunk index can |
| backend/app/services/precise_retrieval.py | 8 | text, will happily summarise whatever the retrieval served up. |
| backend/app/services/precise_retrieval.py | 14 | RAG pipeline skips vector search entirely. On an ambiguous or missing |
| backend/app/services/precise_retrieval.py | 16 | retrieval — the LLM is more reliable when it has any context than when |
| backend/app/services/precise_retrieval.py | 171 | cleanly — we'd rather fall back to vector search than guess wrong. |
| backend/app/services/precise_retrieval.py | 237 | m = _TITLE_JUAN_RE.search(query) |
| backend/app/services/precise_retrieval.py | 257 | caller falls back to vector retrieval. |

### Wiki/graph/entity model

| file | line | text |
| --- | --- | --- |
| backend/app/main.py | 65 | knowledge_graph, |
| backend/app/main.py | 68 | relations, |
| backend/app/main.py | 149 | \| Knowledge Graph / 知识图谱 \| Entities, relations, and graph traversal \| |
| backend/app/main.py | 207 | "description": "Knowledge graph: entities, relations, and graph traversal / 知识图谱：实体、关系与图遍历", |
| backend/app/main.py | 214 | "name": "relations", |
| backend/app/main.py | 215 | "description": "Text relations and parallel reading / 经文关系与平行对读", |
| backend/app/main.py | 263 | "description": "Community-submitted data source suggestions / 社区数据源推荐", |
| backend/app/main.py | 448 | app.include_router(relations.router, prefix="/api") |

### Memory/update lifecycle

| file | line | text |
| --- | --- | --- |
| backend/app/main.py | 98 | # in-memory snapshot of 31k CBETA gaiji entries; rebuilt only on |
| backend/app/main.py | 115 | # Background loop: keep the cross-canon catalog cache warm so no real user |
| backend/app/main.py | 309 | allow_methods=["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"], |
| backend/scripts/audit_works.py | 107 | """Pass-1 multi-witness Works are the false-merge risk surface. Return the |
| backend/scripts/build_works.py | 280 | # work_id -> Work, to attach aliased works into the alias cache. |
| backend/scripts/build_works.py | 386 | # Over-broad title → do NOT merge; leave for pass-4 singletons. |
| backend/scripts/extract_structured_kg.py | 4 | Idempotent extractor — safe to run repeatedly (upsert semantics). |
| backend/scripts/extract_structured_kg.py | 5 | Entity dedup: (entity_type, name_zh) for person/dynasty; (entity_type, text_id) for text. |

### Provenance/citation/evidence

| file | line | text |
| --- | --- | --- |
| backend/alembic/versions/0128_add_kg_entity_provenance.py | 1 | """Add provenance tracking to kg_entities. |
| backend/alembic/versions/0128_add_kg_entity_provenance.py | 3 | Today the only ingestion-lineage signal on a kg_entity row is ``created_at`` |
| backend/alembic/versions/0128_add_kg_entity_provenance.py | 34 | no provenance still has at least an approximate floor. |
| backend/alembic/versions/0128_add_kg_entity_provenance.py | 67 | # (= "unknown lineage") until each ingestion script is wired. |
| backend/app/services/provenance.py | 1 | """Provenance tagging for kg_entities (and any other table that adopts |
| backend/app/services/provenance.py | 50 | """Stamp a ``KGEntity`` with provenance metadata. |
| backend/app/main.py | 58 | citations, |
| backend/app/main.py | 159 | - **Citation export** in BibTeX, RIS, and Chicago formats |

### Evaluation/observability

| file | line | text |
| --- | --- | --- |
| backend/app/main.py | 142 | \| Metric \| Value \| |
| backend/eval/__init__.py | 1 | # AI Chat evaluation system |
| backend/eval/run_eval.py | 1 | """Run AI Chat evaluation against the test set. |
| backend/eval/run_eval.py | 5 | python -m eval.run_eval # Full evaluation |
| backend/eval/run_eval.py | 6 | python -m eval.run_eval --category term_explanation |
| backend/eval/run_eval.py | 7 | python -m eval.run_eval --limit 5 |
| backend/eval/run_eval.py | 8 | python -m eval.run_eval --no-llm |
| backend/eval/run_eval.py | 9 | python -m eval.run_eval --tag baseline-v1 |

### Agent/MCP/tool surface

| file | line | text |
| --- | --- | --- |
| backend/app/config.py | 39 | # LLM (OpenAI-compatible API) — primary model |
| backend/app/config.py | 40 | llm_api_url: str = "https://api.openai.com/v1" |
| backend/scripts/audit_entity_types_wikidata.py | 91 | "User-Agent": USER_AGENT, |
| backend/scripts/audit_sources.py | 70 | headers={"User-Agent": "Mozilla/5.0 (compatible; FoJin-Audit/1.0)"}, |
| backend/scripts/backfill_address_regeo.py | 73 | req = urllib.request.Request(url, headers={"User-Agent": USER_AGENT}) |
| backend/scripts/build_alignments.py | 75 | # Anthropic-vs-OpenAI format purely from URL. Override via env VERIFY_LLM_*. |
| backend/scripts/build_alignments.py | 78 | # deepseek-reasoner, o1, claude-*-thinking), reasoning_tokens inflate cost |
| backend/scripts/build_alignments.py | 98 | "claude-haiku-4-5-20251001": 0.0008, |

## Gap

_없음_
