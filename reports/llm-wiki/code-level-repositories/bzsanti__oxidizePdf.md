# bzsanti/oxidizePdf 코드 레벨 분석

생성일: 2026-06-17T23:31:45.336Z

## 기본 판정

| 항목 | 값 |
| --- | --- |
| type | rag-knowledge-platform |
| maturity | A integrated platform (104) |
| stars | 176 |
| language | Rust |
| tags | rag, document-chat, korea-signal |
| files/code/source | 1177/803/428 |
| tests/ci | 120/8 |
| local path | sources/bzsanti__oxidizePdf |

## 파이프라인 단계

| 단계 | 상태 | matched files | source files | evidence |
| --- | --- | --- | --- | --- |
| Ingestion/source intake | code | 20 | 6 | dev-tools/pipeline-profiler/src/main.rs:190 let connector = if i == sub_stages.len() - 1 { |
| Parsing/OCR/document extraction | code | 738 | 316 | oxidize-pdf-core/benches.disabled/parsing_benchmark.rs:1 //! PDF Parsing Performance Benchmarks |
| Chunking/splitting | code | 148 | 75 | oxidize-pdf-core/benches.disabled/ai_chunking.rs:18 let chunker = DocumentChunker::new(512, 50); |
| Embedding/vector index | code | 114 | 56 | oxidize-pdf-core/src/text/fonts/embedding.rs:1 //! Font embedding for PDF generation according to ISO 32000-1 Section 9.8 |
| Retrieval/search/rerank | code | 72 | 37 | tools/analyze_form_structure.py:14 acroform_match = re.search(rb'/AcroForm\s+(\d+)\s+0\s+R', content) |
| Wiki/graph/entity model | code | 30 | 10 | oxidize-pdf-core/src/document.rs:66 /// Semantic entities marked in the document for AI processing |
| Memory/update lifecycle | code | 274 | 129 | scripts/release.sh:43 # corpus cache is present locally. |
| Provenance/citation/evidence | code | 36 | 10 | tools/master_compliance_analyzer.py:56 """Scan oxidize-pdf source code for implementation evidence""" |
| Evaluation/observability | code | 203 | 108 | scripts/measure_coverage.sh:78 # Parse JSON for more detailed metrics (requires jq) |
| Agent/MCP/tool surface | code | 32 | 5 | oxidize-pdf-core/src/ai/chunking.rs:173 /// // For Claude with 100K context, you can use larger chunks |

## 의존성 신호

- Document parsing/OCR: rusty-tesseract, ocr-tesseract

## 주요 파일 후보

### Ingestion/source intake

- `dev-tools/pipeline-profiler/src/main.rs`
- `oxidize-pdf-core/src/operations/semantic_redactor.rs`
- `oxidize-pdf-core/src/parser/document.rs`
- `oxidize-pdf-core/src/pipeline/hybrid_chunking.rs`
- `oxidize-pdf-core/src/pipeline/profile.rs`
- `oxidize-pdf-core/src/pipeline/rag.rs`
- `.github/workflows/corpus-tests.yml`
- `.github/workflows/coverage.yml`
- `oxidize-pdf-core/examples/rag_realworld.rs`
- `oxidize-pdf-core/tests/form_actions_tests.rs`
- `oxidize-pdf-core/tests/hybrid_chunker_disjoint_test.rs`
- `oxidize-pdf-core/tests/paragraph_reconstruction_test.rs`
- ... 6 more

### Parsing/OCR/document extraction

- `oxidize-pdf-core/benches.disabled/parsing_benchmark.rs`
- `benches/lopdf_comparison/src/benchmark_parsing.rs`
- `oxidize-pdf-core/src/fonts/type0_parsing.rs`
- `dev-tools/analyze_critical_requirements.py`
- `dev-tools/analyze_unwraps.py`
- `scripts/generate_compliance_report.py`
- `scripts/install-hooks.sh`
- `scripts/measure_coverage.sh`
- `scripts/release.sh`
- `scripts/run_lints.sh`
- `scripts/update_verification_status.py`
- `tools/analyze_form_structure.py`
- ... 6 more

### Chunking/splitting

- `oxidize-pdf-core/benches.disabled/ai_chunking.rs`
- `oxidize-pdf-core/src/ai/chunking.rs`
- `oxidize-pdf-core/src/pipeline/hybrid_chunking.rs`
- `oxidize-pdf-core/src/pipeline/semantic_chunking.rs`
- `dev-tools/generate_png_test_data.rs`
- `tools/generate_cid_tables.py`
- `lints/src/bool_option_pattern.rs`
- `lints/src/duration_primitives.rs`
- `lints/src/missing_context.rs`
- `lints/src/string_errors.rs`
- `oxidize-pdf-core/src/page_forms.rs`
- `tools/scripts/generate_test_pngs.py`
- ... 6 more

### Embedding/vector index

- `oxidize-pdf-core/src/text/fonts/embedding.rs`
- `dev-tools/analyze_critical_requirements.py`
- `lints/src/library_unwraps.rs`
- `oxidize-pdf-core/benches.disabled/image_extraction_benchmark.rs`
- `oxidize-pdf-core/src/coordinate_system.rs`
- `oxidize-pdf-core/src/document.rs`
- `oxidize-pdf-core/src/lib.rs`
- `oxidize-pdf-core/src/page.rs`
- `oxidize-pdf-core/src/advanced_tables/table_builder.rs`
- `oxidize-pdf-core/src/ai/chunking.rs`
- `oxidize-pdf-core/src/ai/formats.rs`
- `oxidize-pdf-core/src/ai/mod.rs`
- ... 6 more

### Retrieval/search/rerank

- `tools/analyze_form_structure.py`
- `tools/analyze_pdf_structure.py`
- `tools/extract_iso_requirements_final.py`
- `tools/generate_cid_tables.py`
- `tools/analysis/analyze_pdfs.py`
- `tools/analysis/check_w_array_detail.py`
- `tools/analysis/check_w_array.py`
- `tools/scripts/create_test_pdf.py`
- `tools/scripts/fix_unused_variables.py`
- `oxidize-pdf-core/src/actions/uri_action.rs`
- `oxidize-pdf-core/src/ai/chunking.rs`
- `oxidize-pdf-core/src/ai/formats.rs`
- ... 6 more

### Wiki/graph/entity model

- `oxidize-pdf-core/src/document.rs`
- `oxidize-pdf-core/src/lib.rs`
- `oxidize-pdf-core/src/operations/semantic_redactor.rs`
- `oxidize-pdf-core/src/semantic/entity_tests.rs`
- `oxidize-pdf-core/src/semantic/entity.rs`
- `oxidize-pdf-core/src/semantic/export_tests.rs`
- `oxidize-pdf-core/src/semantic/export.rs`
- `oxidize-pdf-core/src/semantic/marking.rs`
- `oxidize-pdf-core/src/semantic/mod.rs`
- `oxidize-pdf-core/src/writer/signature.rs`
- `oxidize-pdf-core/Cargo.toml`
- `.github/ISSUE_TEMPLATE/config.yml`
- ... 6 more

### Memory/update lifecycle

- `scripts/release.sh`
- `oxidize-pdf-core/benches.disabled/batch_processing_benchmark.rs`
- `oxidize-pdf-core/benches.disabled/image_extraction_benchmark.rs`
- `oxidize-pdf-core/benches.disabled/ocr_benchmarks.rs`
- `oxidize-pdf-core/benches.disabled/performance_benchmarks.rs`
- `oxidize-pdf-core/benches.disabled/plaintext_benchmark.rs`
- `oxidize-pdf-core/benches/pipeline_benchmark.rs`
- `oxidize-pdf-core/benches/pipeline_granular_benchmark.rs`
- `oxidize-pdf-core/src/document.rs`
- `oxidize-pdf-core/src/error.rs`
- `oxidize-pdf-core/src/lib.rs`
- `oxidize-pdf-core/src/page_tables.rs`
- ... 6 more

### Provenance/citation/evidence

- `tools/master_compliance_analyzer.py`
- `benches/lopdf_comparison/src/lopdf_realistic.rs`
- `oxidize-pdf-core/src/pipeline/chunk_metadata.rs`
- `oxidize-pdf-core/src/pipeline/hybrid_chunking.rs`
- `oxidize-pdf-core/src/pipeline/partition.rs`
- `oxidize-pdf-core/src/pipeline/rag.rs`
- `oxidize-pdf-core/src/structure/tagged.rs`
- `oxidize-pdf-core/src/text/extraction.rs`
- `oxidize-pdf-core/src/verification/compliance_report.rs`
- `dev-tools/iso-curator/src/commands/scan.rs`
- `test-corpus/t4-ai-target/download.sh`
- `oxidize-pdf-core/examples/rag_realworld.rs`
- ... 6 more

### Evaluation/observability

- `scripts/measure_coverage.sh`
- `scripts/run_lints.sh`
- `benches/lopdf_comparison/quick_benchmark.sh`
- `lints/src/duration_primitives.rs`
- `oxidize-pdf-core/benches.disabled/batch_processing_benchmark.rs`
- `oxidize-pdf-core/benches.disabled/image_extraction_benchmark.rs`
- `oxidize-pdf-core/benches.disabled/marked_content_benchmark.rs`
- `oxidize-pdf-core/benches.disabled/ocr_benchmarks.rs`
- `oxidize-pdf-core/benches.disabled/parsing_benchmark.rs`
- `oxidize-pdf-core/benches.disabled/performance_benchmarks.rs`
- `oxidize-pdf-core/benches.disabled/plaintext_benchmark.rs`
- `oxidize-pdf-core/benches/encryption_benchmark.rs`
- ... 6 more

### Agent/MCP/tool surface

- `oxidize-pdf-core/src/ai/chunking.rs`
- `oxidize-pdf-core/src/forms/javascript_engine.rs`
- `oxidize-pdf-core/src/text/extraction_cmap.rs`
- `oxidize-pdf-core/src/text/extraction.rs`
- `oxidize-pdf-core/src/verification/mod.rs`
- `tools/benchmarks/parser_results.json`
- `test-corpus/t4-ai-target/download.sh`
- `oxidize-pdf-core/examples/llm_export_formats.rs`
- `oxidize-pdf-core/examples/rag_realworld.rs`
- `oxidize-pdf-core/tests/encryption_cross_validation_test.rs`
- `oxidize-pdf-core/tests/issue_235_tj_fragment_emission_test.rs`
- `CHANGELOG.md`
- ... 6 more

## Evidence lines

### Ingestion/source intake

| file | line | text |
| --- | --- | --- |
| dev-tools/pipeline-profiler/src/main.rs | 190 | let connector = if i == sub_stages.len() - 1 { |
| dev-tools/pipeline-profiler/src/main.rs | 202 | connector, name, us, pct |
| oxidize-pdf-core/src/operations/semantic_redactor.rs | 4 | //! removing sensitive information (PII, confidential data) before LLM ingestion while |
| oxidize-pdf-core/src/operations/semantic_redactor.rs | 134 | /// redacted PDF suitable for LLM ingestion. |
| oxidize-pdf-core/src/parser/document.rs | 1644 | /// Extract chunks as a JSON string ready for vector store ingestion. |
| oxidize-pdf-core/src/pipeline/hybrid_chunking.rs | 59 | /// required by RAG ingestion (see |
| oxidize-pdf-core/src/pipeline/profile.rs | 38 | /// Optimized for RAG chunking and vector store ingestion. |
| oxidize-pdf-core/src/pipeline/rag.rs | 11 | /// A RAG-ready chunk with full metadata for vector store ingestion. |

### Parsing/OCR/document extraction

| file | line | text |
| --- | --- | --- |
| oxidize-pdf-core/benches.disabled/parsing_benchmark.rs | 1 | //! PDF Parsing Performance Benchmarks |
| oxidize-pdf-core/benches.disabled/parsing_benchmark.rs | 3 | //! Benchmarks for PDF parsing operations including: |
| oxidize-pdf-core/benches.disabled/parsing_benchmark.rs | 16 | // Generate a minimal valid PDF for benchmarking |
| oxidize-pdf-core/benches.disabled/parsing_benchmark.rs | 18 | let mut pdf = Vec::new(); |
| oxidize-pdf-core/benches.disabled/parsing_benchmark.rs | 20 | // PDF Header |
| oxidize-pdf-core/benches.disabled/parsing_benchmark.rs | 21 | pdf.extend_from_slice(b"%PDF-1.4\n"); |
| oxidize-pdf-core/benches.disabled/parsing_benchmark.rs | 24 | let catalog_start = pdf.len(); |
| oxidize-pdf-core/benches.disabled/parsing_benchmark.rs | 25 | pdf.extend_from_slice(b"1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n"); |

### Chunking/splitting

| file | line | text |
| --- | --- | --- |
| oxidize-pdf-core/benches.disabled/ai_chunking.rs | 18 | let chunker = DocumentChunker::new(512, 50); |
| oxidize-pdf-core/benches.disabled/ai_chunking.rs | 25 | chunker |
| oxidize-pdf-core/benches.disabled/ai_chunking.rs | 41 | let chunker = DocumentChunker::new(*chunk_size, 50); |
| oxidize-pdf-core/benches.disabled/ai_chunking.rs | 48 | chunker |
| oxidize-pdf-core/benches.disabled/ai_chunking.rs | 63 | for overlap in [0, 25, 50, 100, 200].iter() { |
| oxidize-pdf-core/benches.disabled/ai_chunking.rs | 64 | let chunker = DocumentChunker::new(512, *overlap); |
| oxidize-pdf-core/benches.disabled/ai_chunking.rs | 67 | BenchmarkId::from_parameter(format!("{}_overlap", overlap)), |
| oxidize-pdf-core/benches.disabled/ai_chunking.rs | 68 | overlap, |

### Embedding/vector index

| file | line | text |
| --- | --- | --- |
| oxidize-pdf-core/src/text/fonts/embedding.rs | 1 | //! Font embedding for PDF generation according to ISO 32000-1 Section 9.8 |
| oxidize-pdf-core/src/text/fonts/embedding.rs | 3 | //! This module provides complete font embedding capabilities including: |
| oxidize-pdf-core/src/text/fonts/embedding.rs | 4 | //! - TrueType font embedding with subsetting |
| oxidize-pdf-core/src/text/fonts/embedding.rs | 14 | /// Font type enumeration for embedding |
| oxidize-pdf-core/src/text/fonts/embedding.rs | 23 | /// Font encoding types for embedding |
| oxidize-pdf-core/src/text/fonts/embedding.rs | 204 | /// Font descriptor for PDF embedding |
| oxidize-pdf-core/src/text/fonts/embedding.rs | 258 | /// PDF font embedding manager |
| oxidize-pdf-core/src/text/fonts/embedding.rs | 288 | /// Font embedding options |

### Retrieval/search/rerank

| file | line | text |
| --- | --- | --- |
| tools/analyze_form_structure.py | 14 | acroform_match = re.search(rb'/AcroForm\s+(\d+)\s+0\s+R', content) |
| tools/analyze_form_structure.py | 21 | acroform_obj = re.search(acroform_obj_pattern, content, re.DOTALL) |
| tools/analyze_form_structure.py | 27 | fields_match = re.search(r'/Fields\s*\[([\d\s+R]+)\]', acroform_content) |
| tools/analyze_form_structure.py | 55 | parent_match = re.search(rb'/Parent\s+(\d+)\s+0\s+R', widget) |
| tools/analyze_form_structure.py | 62 | ft_match = re.search(rb'/FT\s*/(\w+)', widget) |
| tools/analyze_form_structure.py | 67 | t_match = re.search(rb'/T\s*\(([^)]+)\)', widget) |
| tools/analyze_form_structure.py | 72 | rect_match = re.search(rb'/Rect\s*\[([\d\s.]+)\]', widget) |
| tools/analyze_form_structure.py | 87 | kids_match = re.search(rb'/Kids\s*\[([\d\s+R]+)\]', field) |

### Wiki/graph/entity model

| file | line | text |
| --- | --- | --- |
| oxidize-pdf-core/src/document.rs | 66 | /// Semantic entities marked in the document for AI processing |
| oxidize-pdf-core/src/document.rs | 1141 | // ==================== Semantic Entity Methods ==================== |
| oxidize-pdf-core/src/document.rs | 1173 | let entity = SemanticEntity::new(entity_id.clone(), entity_type, bounds); |
| oxidize-pdf-core/src/document.rs | 1174 | self.semantic_entities.push(entity); |
| oxidize-pdf-core/src/document.rs | 1178 | /// Set the content text for an entity |
| oxidize-pdf-core/src/document.rs | 1180 | if let Some(entity) = self |
| oxidize-pdf-core/src/document.rs | 1185 | entity.content = content.into(); |
| oxidize-pdf-core/src/document.rs | 1192 | /// Add metadata to an entity |

### Memory/update lifecycle

| file | line | text |
| --- | --- | --- |
| scripts/release.sh | 43 | # corpus cache is present locally. |
| oxidize-pdf-core/benches.disabled/batch_processing_benchmark.rs | 8 | //! - Memory efficiency under batch loads |
| oxidize-pdf-core/benches.disabled/batch_processing_benchmark.rs | 110 | /// Benchmark: Memory efficiency - parsing multiple PDFs without accumulation |
| oxidize-pdf-core/benches.disabled/batch_processing_benchmark.rs | 132 | // Process PDFs one at a time, allowing memory to be freed |
| oxidize-pdf-core/benches.disabled/batch_processing_benchmark.rs | 138 | // Drop doc here, freeing memory |
| oxidize-pdf-core/benches.disabled/image_extraction_benchmark.rs | 35 | // Save to memory |
| oxidize-pdf-core/benches.disabled/image_extraction_benchmark.rs | 40 | // Read back into memory |
| oxidize-pdf-core/benches.disabled/ocr_benchmarks.rs | 8 | //! - Memory usage patterns |

### Provenance/citation/evidence

| file | line | text |
| --- | --- | --- |
| tools/master_compliance_analyzer.py | 56 | """Scan oxidize-pdf source code for implementation evidence""" |
| tools/master_compliance_analyzer.py | 129 | """Calculate implementation evidence score""" |
| tools/master_compliance_analyzer.py | 262 | - Evidence-based scoring: keyword matching + frequency analysis |
| benches/lopdf_comparison/src/lopdf_realistic.rs | 33 | "Evidence shows that", |
| oxidize-pdf-core/src/pipeline/chunk_metadata.rs | 125 | /// Citation anchor for a chunk on a single page: the axis-aligned union of all |
| oxidize-pdf-core/src/pipeline/chunk_metadata.rs | 184 | /// Per-page citation regions (union bbox of the chunk's elements on each |
| oxidize-pdf-core/src/pipeline/chunk_metadata.rs | 288 | /// Compute the chunk's citation anchor: `(page_span, page_regions)`. Groups the |
| oxidize-pdf-core/src/pipeline/hybrid_chunking.rs | 511 | /// Preserves provenance (page, bbox, parent_heading, heading_path). |

### Evaluation/observability

| file | line | text |
| --- | --- | --- |
| scripts/measure_coverage.sh | 78 | # Parse JSON for more detailed metrics (requires jq) |
| scripts/run_lints.sh | 116 | if eval "$DYLINT_CMD"; then |
| benches/lopdf_comparison/quick_benchmark.sh | 2 | # Quick benchmark runner - measures creation performance without full build |
| benches/lopdf_comparison/quick_benchmark.sh | 4 | echo "🔥 Quick Benchmark: oxidize-pdf vs lopdf" |
| benches/lopdf_comparison/quick_benchmark.sh | 11 | # Build just the creation benchmark (with progress) |
| benches/lopdf_comparison/quick_benchmark.sh | 12 | echo "📦 Building benchmark (this may take a few minutes)..." |
| benches/lopdf_comparison/quick_benchmark.sh | 44 | # Run benchmark |
| benches/lopdf_comparison/quick_benchmark.sh | 45 | echo "🏃 Running creation benchmark..." |

### Agent/MCP/tool surface

| file | line | text |
| --- | --- | --- |
| oxidize-pdf-core/src/ai/chunking.rs | 173 | /// // For Claude with 100K context, you can use larger chunks |
| oxidize-pdf-core/src/forms/javascript_engine.rs | 77 | FunctionCall { |
| oxidize-pdf-core/src/forms/javascript_engine.rs | 346 | ASTNode::FunctionCall { name, args } => { |
| oxidize-pdf-core/src/forms/javascript_engine.rs | 601 | return Ok(ASTNode::FunctionCall { |
| oxidize-pdf-core/src/text/extraction_cmap.rs | 1073 | // PUBLIC TEST HELPERS FOR KERNING (Issue #87 - Quality Agent Required) |
| oxidize-pdf-core/src/text/extraction.rs | 3058 | // CRITICAL KERNING TESTS (Issue #87 - Quality Agent Required) |
| oxidize-pdf-core/src/verification/mod.rs | 21 | // See CLAUDE.md: "Focus on practical PDF functionality, not compliance metrics" |
| tools/benchmarks/parser_results.json | 1353 | "file": "For Claude Desktop Users - Model Context Protocol.pdf", |

## Gap

_없음_
