# bzsanti/oxidizePdf 구조 분석

생성일: 2026-06-17T22:56:52.162Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/bzsanti__oxidizePdf |
| remote | https://github.com/bzsanti/oxidizePdf |
| HEAD | f7fe568 (2026-06-17) Merge pull request #342 from bzsanti/release/2.16.2 |
| branch | main |
| groups | llm-wiki-100 |
| files | 1662 |
| dirs | 276 |
| stack | Rust |

## 구조 해석

- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- 스펙/템플릿/명령/스킬 아티팩트가 있어 에이전트나 SDD 워크플로우가 저장소 구조의 일부다.
- 테스트 파일이 충분히 노출되어 기능 검증과 회귀 검증 흐름을 추적할 수 있다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `oxidize-pdf`, `Why oxidize-pdf for RAG?`, `Quick Start`, `RAG Pipeline -- One Liner`, `Custom Chunk Size`, `JSON for Vector Store Ingestion`, `Element Partitioning`, `Also in the box`, `Full Feature Set`, `AI/RAG Pipeline`, `PDF Processing`, `Performance`, `Testing`, `License`, `Links`

> oxidize pdf The Rust PDF library built for AI. Parse any PDF into structure aware, embedding ready chunks with one line of code. Pure Rust, zero C dependencies, 99.3% success rate on 9,000+ real world PDFs. Why oxidize pdf for RAG? Most PDF libraries give you a wall of text. oxidize pdf gives you structured, metadata rich chunks ready for your vector store What you get Why it matters chunk.full text Heading context prepended better embeddings chunk.page numbers Citation back to source pages chunk.bounding boxes Spatial position for visual grounding chunk.element types Filter by "table", "title", "paragraph" chunk.token estimate Right size chunks for your model's context window chunk.heading context Section awareness without post processing Performance Pure Rust, 3,000 4,000 pages/sec generation, 85ms full text extraction for a 930KB PDF. Quick Start RAG Pipeline One Liner Custom Chunk Si

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .cargo | dir |
| .claudeignore | file |
| .github | dir |
| .gitignore | file |
| .idea | dir |
| .plan | file |
| .tarpaulin.toml | file |
| API_DOCUMENTATION.md | file |
| benches | dir |
| BENCHMARK_RESULTS.md | file |
| Cargo.lock | file |
| Cargo.toml | file |
| CHANGELOG.md | file |
| CLAUDE.local.md | file |
| CODE_OF_CONDUCT.md | file |
| codecov.yml | file |
| CONTRIBUTING.md | file |
| COVERAGE_REPORT.md | file |
| coverage_report.txt | file |
| dev-tools | dir |
| docs | dir |
| IMPLEMENTACION_OCR_API.md | file |
| ISO_COMPLIANCE_MATRIX_CURATED.toml | file |
| ISO_COMPLIANCE_MATRIX.toml | file |
| ISO_VERIFICATION_STATUS.toml | file |
| landing | dir |
| LICENSE | file |
| lints | dir |
| MIGRATION.md | file |
| oxidize-pdf-core | dir |
| PERFORMANCE.md | file |
| PNG_DECODER_ISSUES.md | file |
| PROJECT_PROGRESS.md | file |
| README.md | file |
| REPOSITORY_ARCHITECTURE.md | file |
| scripts | dir |
| SECURITY_MEASURES.md | file |
| SECURITY.md | file |
| tarpaulin_lib_only.txt | file |
| tarpaulin_output.txt | file |
| test-corpus | dir |
| test-pdfs | dir |
| tests | dir |
| tools | dir |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| oxidize-pdf-core/ | 854 |
| .github/ | 570 |
| tools/ | 63 |
| docs/ | 49 |
| dev-tools/ | 31 |
| (root) | 30 |
| scripts/ | 14 |
| test-pdfs/ | 12 |
| lints/ | 11 |
| test-corpus/ | 11 |
| benches/ | 10 |
| tests/ | 4 |
| landing/ | 2 |
| .cargo/ | 1 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| docs/ | 49 | preferred |
| tests/ | 4 | preferred |
| tools/ | 63 | preferred |
| scripts/ | 14 | preferred |
| oxidize-pdf-core/ | 854 | large |
| .github/ | 570 | large |
| .github/benchmarks/ | 558 | large |
| .github/benchmarks/baseline/ | 557 | large |
| oxidize-pdf-core/src/ | 383 | large |
| oxidize-pdf-core/tests/ | 305 | large |
| oxidize-pdf-core/examples/ | 147 | large |
| oxidize-pdf-core/src/text/ | 62 | large |
| oxidize-pdf-core/src/verification/ | 42 | large |
| oxidize-pdf-core/src/parser/ | 36 | large |
| oxidize-pdf-core/tests/fixtures/ | 36 | large |
| dev-tools/ | 31 | large |
| docs/superpowers/ | 27 | large |
| oxidize-pdf-core/src/graphics/ | 21 | large |
| oxidize-pdf-core/src/operations/ | 21 | large |
| tools/analysis/ | 21 | large |
| dev-tools/iso-curator/ | 19 | large |
| oxidize-pdf-core/examples/results/ | 19 | large |
| docs/superpowers/plans/ | 17 | large |
| oxidize-pdf-core/src/forms/ | 17 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `Cargo.toml`
- `benches/lopdf_comparison/Cargo.toml`
- `dev-tools/iso-curator/Cargo.toml`
- `dev-tools/pipeline-profiler/Cargo.toml`
- `lints/Cargo.toml`
- `oxidize-pdf-core/Cargo.toml`

### Cargo.toml

| 경로 | 이름 | workspace | members |
| --- | --- | --- | --- |
| Cargo.toml |  | true |      "oxidize-pdf-core",  |
| benches/lopdf_comparison/Cargo.toml | lopdf-comparison | true |  |
| dev-tools/iso-curator/Cargo.toml | iso-curator | false |  |
| dev-tools/pipeline-profiler/Cargo.toml | pipeline-profiler | false |  |
| lints/Cargo.toml | oxidize-pdf-lints | false |  |
| oxidize-pdf-core/Cargo.toml | oxidize-pdf | false |  |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `.github/benchmarks/README.md`
- `CONTRIBUTING.md`
- `README.md`
- `benches/lopdf_comparison/README.md`
- `dev-tools/README.md`
- `docs/CI_CD_ERROR_PATTERNS.md`
- `docs/COVERAGE_METHODOLOGY.md`
- `docs/DEVELOPMENT_GUIDELINES.md`
- `docs/IDEAL_USE_CASES.md`
- `docs/INVOICE_EXTRACTION_GUIDE.md`
- `docs/ISO_REQUIREMENTS_METHODOLOGY.md`
- `docs/ISO_TESTING_SYSTEM.md`
- `docs/JPEG_EXTRACTION_STATUS.md`
- `docs/JPEG_EXTRACTION_TEST_METHODOLOGY.md`
- `docs/LINTS.md`
- `docs/OPTIMIZATION_GUIDE.md`
- `docs/PDF_RECOVERY_STRATEGY.md`
- `docs/PERFORMANCE_HONEST_REPORT.md`
- `docs/README.md`
- `docs/RELEASE_PROCESS.md`
- `docs/RELEASE_PROCESS_V2.md`
- `docs/TABLE_DETECTION_GUIDE.md`
- `docs/coverage_history.csv`
- `docs/migration/v2.8.md`
- `docs/reports/error_focus_report.md`
- `docs/reports/pdf_analysis_report.md`
- `docs/superpowers/plans/2026-04-18-font-subsetting-improvements.md`
- `docs/superpowers/plans/2026-05-08-per-document-font-metrics.md`
- `docs/superpowers/plans/2026-05-09-issue-212-form-appearance-type0.md`
- `docs/superpowers/plans/2026-05-13-add-page-text-context-injection.md`
- `docs/superpowers/plans/2026-05-20-issue-261-paragraph-reconstruction.md`
- `docs/superpowers/plans/2026-05-20-issue-261-pr-body.md`
- `docs/superpowers/plans/2026-05-20-issue-261-verification.md`
- `docs/superpowers/plans/2026-05-20-issue-262-verification.md`
- `docs/superpowers/plans/2026-05-20-rag-realworld-rust-pr-body.md`
- `docs/superpowers/plans/2026-05-20-rag-realworld-rust.md`
- `docs/superpowers/plans/2026-05-21-marked-content-extraction.md`
- `docs/superpowers/plans/2026-05-23-issue-265-line-interleaving.md`
- `docs/superpowers/plans/2026-05-25-cid-encoding-cmap.md`
- `docs/superpowers/plans/2026-05-28-issue-271-partitioner-classifier.md`
- `docs/superpowers/plans/2026-06-06-issue-292-ruling-table-partition.md`
- `docs/superpowers/plans/2026-06-06-issue-293-language-detection.md`
- `docs/superpowers/plans/2026-06-13-analysis-spi.md`
- `docs/superpowers/specs/2026-04-18-font-subsetting-improvements-design.md`
- `docs/superpowers/specs/2026-05-07-per-document-font-metrics-design.md`
- `docs/superpowers/specs/2026-05-20-rag-realworld-examples-design.md`
- `docs/superpowers/specs/2026-05-21-marked-content-extraction-design.md`
- `docs/superpowers/specs/2026-05-23-issue-265-line-interleaving-design.md`
- `docs/superpowers/specs/2026-05-25-cid-encoding-cmap-design.md`
- `docs/superpowers/specs/2026-05-28-issue-271-partitioner-classifier-design.md`
- ... 13 more

### 에이전트 지침 후보

_없음_

### 스펙/템플릿/명령/스킬 후보

- `dev-tools/iso-curator/src/commands/analyze.rs`
- `dev-tools/iso-curator/src/commands/classify.rs`
- `dev-tools/iso-curator/src/commands/consolidate.rs`
- `dev-tools/iso-curator/src/commands/link.rs`
- `dev-tools/iso-curator/src/commands/mod.rs`
- `dev-tools/iso-curator/src/commands/report.rs`
- `dev-tools/iso-curator/src/commands/scan.rs`
- `dev-tools/iso-curator/src/commands/stats.rs`
- `docs/superpowers/specs/2026-04-18-font-subsetting-improvements-design.md`
- `docs/superpowers/specs/2026-05-07-per-document-font-metrics-design.md`
- `docs/superpowers/specs/2026-05-20-rag-realworld-examples-design.md`
- `docs/superpowers/specs/2026-05-21-marked-content-extraction-design.md`
- `docs/superpowers/specs/2026-05-23-issue-265-line-interleaving-design.md`
- `docs/superpowers/specs/2026-05-25-cid-encoding-cmap-design.md`
- `docs/superpowers/specs/2026-05-28-issue-271-partitioner-classifier-design.md`
- `docs/superpowers/specs/2026-06-06-issue-292-ruling-table-partition-design.md`
- `docs/superpowers/specs/2026-06-06-issue-293-language-detection-design.md`
- `docs/superpowers/specs/2026-06-13-analysis-spi-design.md`
- `oxidize-pdf-core/src/templates/context.rs`
- `oxidize-pdf-core/src/templates/error.rs`
- `oxidize-pdf-core/src/templates/integration_test.rs`
- `oxidize-pdf-core/src/templates/mod.rs`
- `oxidize-pdf-core/src/templates/parser.rs`
- `oxidize-pdf-core/src/templates/renderer.rs`

## 테스트 / CI / 배포 표면

### 테스트 후보

- `oxidize-pdf-core/src/verification/tests/mod.rs`
- `oxidize-pdf-core/src/verification/tests/section_10_rendering/mod.rs`
- `oxidize-pdf-core/src/verification/tests/section_10_rendering/test_rendering_basics.rs`
- `oxidize-pdf-core/src/verification/tests/section_11_interactive/mod.rs`
- `oxidize-pdf-core/src/verification/tests/section_11_interactive/test_annotations.rs`
- `oxidize-pdf-core/src/verification/tests/section_11_interactive/test_annotations_structure.rs`
- `oxidize-pdf-core/src/verification/tests/section_11_interactive/test_forms.rs`
- `oxidize-pdf-core/src/verification/tests/section_12_multimedia/mod.rs`
- `oxidize-pdf-core/src/verification/tests/section_12_multimedia/test_3d_artwork.rs`
- `oxidize-pdf-core/src/verification/tests/section_12_multimedia/test_multimedia.rs`
- `oxidize-pdf-core/src/verification/tests/section_7/test_catalog.rs`
- `oxidize-pdf-core/src/verification/tests/section_7_syntax/mod.rs`
- `oxidize-pdf-core/src/verification/tests/section_7_syntax/test_cross_reference.rs`
- `oxidize-pdf-core/src/verification/tests/section_7_syntax/test_document_catalog.rs`
- `oxidize-pdf-core/src/verification/tests/section_7_syntax/test_file_structure.rs`
- `oxidize-pdf-core/src/verification/tests/section_7_syntax/test_objects.rs`
- `oxidize-pdf-core/src/verification/tests/section_7_syntax/test_page_operations.rs`
- `oxidize-pdf-core/src/verification/tests/section_7_syntax/test_page_tree.rs`
- `oxidize-pdf-core/src/verification/tests/section_7_syntax/test_resources.rs`
- `oxidize-pdf-core/src/verification/tests/section_7_syntax/test_streams_filters.rs`
- `oxidize-pdf-core/src/verification/tests/section_8_graphics/mod.rs`
- `oxidize-pdf-core/src/verification/tests/section_8_graphics/test_color_spaces.rs`
- `oxidize-pdf-core/src/verification/tests/section_8_graphics/test_content_parser.rs`
- `oxidize-pdf-core/src/verification/tests/section_8_graphics/test_content_streams.rs`
- `oxidize-pdf-core/src/verification/tests/section_8_graphics/test_coordinate_transformation.rs`
- `oxidize-pdf-core/src/verification/tests/section_8_graphics/test_graphics_state.rs`
- `oxidize-pdf-core/src/verification/tests/section_8_graphics/test_graphics_state_advanced.rs`
- `oxidize-pdf-core/src/verification/tests/section_8_graphics/test_images.rs`
- `oxidize-pdf-core/src/verification/tests/section_8_graphics/test_paths.rs`
- `oxidize-pdf-core/src/verification/tests/section_8_graphics/test_paths_advanced.rs`
- `oxidize-pdf-core/src/verification/tests/section_8_graphics/test_paths_level4.rs`
- `oxidize-pdf-core/src/verification/tests/section_9_text/mod.rs`
- `oxidize-pdf-core/src/verification/tests/section_9_text/test_fonts.rs`
- `oxidize-pdf-core/src/verification/tests/section_9_text/test_text_operators.rs`
- `oxidize-pdf-core/src/verification/tests/section_9_text/test_text_operators_advanced.rs`
- `oxidize-pdf-core/src/writer/pdf_writer/tests/catalog_entries_tests.rs`
- `oxidize-pdf-core/src/writer/pdf_writer/tests/form_filling_tests.rs`
- `oxidize-pdf-core/src/writer/pdf_writer/tests/incremental_update_tests.rs`
- `oxidize-pdf-core/tests/acroform_fields_serialize_test.rs`
- `oxidize-pdf-core/tests/advanced_tables_tests.rs`
- `oxidize-pdf-core/tests/analysis_spi_corpus_parity_test.rs`
- `oxidize-pdf-core/tests/analysis_spi_test.rs`
- `oxidize-pdf-core/tests/annotation_write_test.rs`
- `oxidize-pdf-core/tests/annotations_comprehensive_test.rs`
- `oxidize-pdf-core/tests/annotations_error_handling_test.rs`
- `oxidize-pdf-core/tests/annotations_integration_test.rs`
- `oxidize-pdf-core/tests/annotations_tests.rs`
- `oxidize-pdf-core/tests/architecture_simple_test.rs`
- `oxidize-pdf-core/tests/batch_processing_tests.rs`
- `oxidize-pdf-core/tests/calibrated_color_tests.rs`
- `oxidize-pdf-core/tests/cff_desubroutinize_test.rs`
- `oxidize-pdf-core/tests/cff_subsetter_test.rs`
- `oxidize-pdf-core/tests/charts_tests.rs`
- `oxidize-pdf-core/tests/choice_fields_tests.rs`
- `oxidize-pdf-core/tests/chunk_page_mapper_test.rs`
- `oxidize-pdf-core/tests/cid_cmap_test.rs`
- `oxidize-pdf-core/tests/circular_ref_test.rs`
- `oxidize-pdf-core/tests/cjk_font_integration_test.rs`
- `oxidize-pdf-core/tests/cli_ocr_tests.rs`
- `oxidize-pdf-core/tests/cmap_utils_test.rs`
- `oxidize-pdf-core/tests/common/colorspace_inspect.rs`
- `oxidize-pdf-core/tests/common/mod.rs`
- `oxidize-pdf-core/tests/common/pdf_assembler.rs`
- `oxidize-pdf-core/tests/common/rag_helpers.rs`
- `oxidize-pdf-core/tests/common/synthetic_pdf.rs`
- `oxidize-pdf-core/tests/compression_test.rs`
- `oxidize-pdf-core/tests/content_tokenizer_hang_test.rs`
- `oxidize-pdf-core/tests/corpus_support.rs`
- `oxidize-pdf-core/tests/custom_fonts_test.rs`
- `oxidize-pdf-core/tests/dashboard_integration_test.rs`
- `oxidize-pdf-core/tests/deprecation_parity_test.rs`
- `oxidize-pdf-core/tests/deprecation_warning_test.rs`
- `oxidize-pdf-core/tests/devicen_color_tests.rs`
- `oxidize-pdf-core/tests/document_builder_tests.rs`
- `oxidize-pdf-core/tests/document_limits_integration.rs.disabled`
- `oxidize-pdf-core/tests/draw_image_transparency_tests.rs`
- `oxidize-pdf-core/tests/element_graph_integration_test.rs`
- `oxidize-pdf-core/tests/element_graph_test.rs`
- `oxidize-pdf-core/tests/element_relationships_advanced_test.rs`
- `oxidize-pdf-core/tests/element_relationships_test.rs`
- ... 40 more

### CI/Docker 후보

- `.github/workflows/benchmark-baseline.yml.disabled`
- `.github/workflows/benchmark-pr.yml.disabled`
- `.github/workflows/benchmarks.yml.disabled`
- `.github/workflows/ci.yml`
- `.github/workflows/corpus-tests.yml`
- `.github/workflows/coverage.yml`
- `.github/workflows/release.yml`
- `.github/workflows/verify-corpus.yml`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .rs | 807 |
| .svg | 347 |
| .json | 187 |
| .md | 94 |
| .py | 57 |
| .pdf | 40 |
| .html | 29 |
| .sh | 23 |
| .toml | 13 |
| .yml | 9 |
| .disabled | 7 |
| .jpg | 7 |
| .txt | 7 |
| .gitkeep | 4 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `docs/ 내부 책임 분리`
- `tests/ 내부 책임 분리`
- `tools/ 내부 책임 분리`
- `scripts/ 내부 책임 분리`
- `oxidize-pdf-core/ 내부 책임 분리`
- `dev-tools/iso-curator/src/commands/analyze.rs 스펙/명령 의미`
- `dev-tools/iso-curator/src/commands/classify.rs 스펙/명령 의미`
- `dev-tools/iso-curator/src/commands/consolidate.rs 스펙/명령 의미`
- `dev-tools/iso-curator/src/commands/link.rs 스펙/명령 의미`
- `dev-tools/iso-curator/src/commands/mod.rs 스펙/명령 의미`
- `Cargo.toml 실행 스크립트와 패키지 경계`
- `benches/lopdf_comparison/Cargo.toml 실행 스크립트와 패키지 경계`
- `dev-tools/iso-curator/Cargo.toml 실행 스크립트와 패키지 경계`
- `dev-tools/pipeline-profiler/Cargo.toml 실행 스크립트와 패키지 경계`
- `lints/Cargo.toml 실행 스크립트와 패키지 경계`

