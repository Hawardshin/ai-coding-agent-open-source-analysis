# bzsanti/oxidizePdf Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Pure Rust PDF library for AI/RAG: structure-aware chunking, no ML, no C deps.

## 요약

- 조사 단위: `sources/bzsanti__oxidizePdf` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 1,662 files, 276 directories, depth score 124, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 retrieval=oxidize-pdf-core/tests/chunk_page_mapper_test.rs, oxidize-pdf-core/tests/element_graph_integration_test.rs, oxidize-pdf-core/tests/element_graph_test.rs이고, 의존성 단서는 next, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 knowledge/RAG pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

## Navigation

| Entry | Use it for |
| --- | --- |
| [Repository README](../../../../README.md) | Repo-wide orientation and top-level data/report structure. |
| [Reports Reading Index](../../../README.md) | Main report navigation, topics, and folder map. |
| [Reports by Topic](../../../by-topic/README.md) | Topic-first report navigation. |
| [Report Tables](../../../tables/README.md) | Table-first view and CSV exports. |
| [Repository Insights](../../../repository-insights/README.md) | Repository-by-repository assessment rows. |
| [Source Deep Dives](../../README.md) | Source-path-level findings by topic. |
| [Source Repository Deep Dives](../README.md) | One Markdown deep dive per cloned repository. |


## Repository Context

| Field | Value |
| --- | --- |
| Repository | bzsanti/oxidizePdf |
| Topic | LLM Wiki, RAG, and Knowledge / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | Rust |
| Stars | 176 |
| Forks | 21 |
| License | MIT |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/bzsanti__oxidizePdf](../../../../sources/bzsanti__oxidizePdf) |
| Existing report | [reports/llm-wiki/repositories/bzsanti__oxidizePdf.md](../../../llm-wiki/repositories/bzsanti__oxidizePdf.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 1662 / 276 |
| Max observed depth | 9 |
| Top directories | .cargo, .github, benches, dev-tools, docs, landing, lints, oxidize-pdf-core, scripts, test-corpus, test-pdfs, tests, tools |
| Top extensions | .rs: 807, .svg: 347, .json: 187, .md: 94, .py: 57, .pdf: 40, .html: 29, .sh: 23, (none): 15, .toml: 13, .yml: 9, .disabled: 7 |
| Source patterns | cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy, ui/extension surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 44 |
| tests | validation surface | 5 |
| .github | ci surface | 1 |
| benches | validation surface | 1 |
| dev-tools | top-level component | 1 |
| landing | top-level component | 1 |
| lints | top-level component | 1 |
| oxidize-pdf-core | top-level component | 1 |
| scripts | top-level component | 1 |
| test-corpus | validation surface | 1 |
| test-pdfs | validation surface | 1 |
| tools | top-level component | 1 |


## How It Runs

_No command surface extracted from root manifests._


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | next |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| retrieval | [oxidize-pdf-core/tests/chunk_page_mapper_test.rs](../../../../sources/bzsanti__oxidizePdf/oxidize-pdf-core/tests/chunk_page_mapper_test.rs) | retrieval signal |
| retrieval | [oxidize-pdf-core/tests/element_graph_integration_test.rs](../../../../sources/bzsanti__oxidizePdf/oxidize-pdf-core/tests/element_graph_integration_test.rs) | retrieval signal |
| retrieval | [oxidize-pdf-core/tests/element_graph_test.rs](../../../../sources/bzsanti__oxidizePdf/oxidize-pdf-core/tests/element_graph_test.rs) | retrieval signal |
| retrieval | [oxidize-pdf-core/tests/font_embedding_integration_test.rs](../../../../sources/bzsanti__oxidizePdf/oxidize-pdf-core/tests/font_embedding_integration_test.rs) | retrieval signal |
| entrypoints | [dev-tools/pipeline-profiler/src/main.rs](../../../../sources/bzsanti__oxidizePdf/dev-tools/pipeline-profiler/src/main.rs) | entrypoints signal |
| entrypoints | [dev-tools/iso-curator/src/main.rs](../../../../sources/bzsanti__oxidizePdf/dev-tools/iso-curator/src/main.rs) | entrypoints signal |
| docs | [README.md](../../../../sources/bzsanti__oxidizePdf/README.md) | docs signal |
| docs | [tools/scripts/README_DEBUG_REMOVAL.md](../../../../sources/bzsanti__oxidizePdf/tools/scripts/README_DEBUG_REMOVAL.md) | docs signal |
| docs | [tools/benchmarks/README.md](../../../../sources/bzsanti__oxidizePdf/tools/benchmarks/README.md) | docs signal |
| docs | [test-corpus/README.md](../../../../sources/bzsanti__oxidizePdf/test-corpus/README.md) | docs signal |
| eval | [BENCHMARK_RESULTS.md](../../../../sources/bzsanti__oxidizePdf/BENCHMARK_RESULTS.md) | eval signal |
| eval | [tools/test_commercial_compatibility.py](../../../../sources/bzsanti__oxidizePdf/tools/test_commercial_compatibility.py) | eval signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 2 | [dev-tools/pipeline-profiler/src/main.rs](../../../../sources/bzsanti__oxidizePdf/dev-tools/pipeline-profiler/src/main.rs)<br>[dev-tools/iso-curator/src/main.rs](../../../../sources/bzsanti__oxidizePdf/dev-tools/iso-curator/src/main.rs) |
| agentRuntime | 74 | [tools/analyze_form_structure.py](../../../../sources/bzsanti__oxidizePdf/tools/analyze_form_structure.py)<br>[tools/analyze_pdf_structure.py](../../../../sources/bzsanti__oxidizePdf/tools/analyze_pdf_structure.py)<br>[tools/dump_pdf_content.py](../../../../sources/bzsanti__oxidizePdf/tools/dump_pdf_content.py)<br>[tools/extract_iso_requirements_final.py](../../../../sources/bzsanti__oxidizePdf/tools/extract_iso_requirements_final.py)<br>[tools/forms_implementation.patch](../../../../sources/bzsanti__oxidizePdf/tools/forms_implementation.patch)<br>[tools/generate_cid_tables.py](../../../../sources/bzsanti__oxidizePdf/tools/generate_cid_tables.py)<br>[tools/github_issue_body.md](../../../../sources/bzsanti__oxidizePdf/tools/github_issue_body.md)<br>[tools/master_compliance_analyzer.py](../../../../sources/bzsanti__oxidizePdf/tools/master_compliance_analyzer.py) |
| mcp | 0 | not obvious |
| retrieval | 64 | [oxidize-pdf-core/tests/chunk_page_mapper_test.rs](../../../../sources/bzsanti__oxidizePdf/oxidize-pdf-core/tests/chunk_page_mapper_test.rs)<br>[oxidize-pdf-core/tests/element_graph_integration_test.rs](../../../../sources/bzsanti__oxidizePdf/oxidize-pdf-core/tests/element_graph_integration_test.rs)<br>[oxidize-pdf-core/tests/element_graph_test.rs](../../../../sources/bzsanti__oxidizePdf/oxidize-pdf-core/tests/element_graph_test.rs)<br>[oxidize-pdf-core/tests/font_embedding_integration_test.rs](../../../../sources/bzsanti__oxidizePdf/oxidize-pdf-core/tests/font_embedding_integration_test.rs)<br>[oxidize-pdf-core/tests/font_embedding_integration.rs](../../../../sources/bzsanti__oxidizePdf/oxidize-pdf-core/tests/font_embedding_integration.rs)<br>[oxidize-pdf-core/tests/hybrid_chunking_graph_test.rs](../../../../sources/bzsanti__oxidizePdf/oxidize-pdf-core/tests/hybrid_chunking_graph_test.rs)<br>[oxidize-pdf-core/tests/memory_optimization_integration.rs](../../../../sources/bzsanti__oxidizePdf/oxidize-pdf-core/tests/memory_optimization_integration.rs)<br>[oxidize-pdf-core/tests/memory_optimization_tests.rs](../../../../sources/bzsanti__oxidizePdf/oxidize-pdf-core/tests/memory_optimization_tests.rs) |
| spec | 20 | [REPOSITORY_ARCHITECTURE.md](../../../../sources/bzsanti__oxidizePdf/REPOSITORY_ARCHITECTURE.md)<br>[tools/extract_iso_requirements_final.py](../../../../sources/bzsanti__oxidizePdf/tools/extract_iso_requirements_final.py)<br>[tools/scripts/ARCHITECTURE.md](../../../../sources/bzsanti__oxidizePdf/tools/scripts/ARCHITECTURE.md)<br>[test-corpus/t1-spec/download.sh](../../../../sources/bzsanti__oxidizePdf/test-corpus/t1-spec/download.sh)<br>[oxidize-pdf-core/tests/architecture_simple_test.rs](../../../../sources/bzsanti__oxidizePdf/oxidize-pdf-core/tests/architecture_simple_test.rs)<br>[oxidize-pdf-core/tests/new_architecture_test.rs](../../../../sources/bzsanti__oxidizePdf/oxidize-pdf-core/tests/new_architecture_test.rs)<br>[oxidize-pdf-core/tests/t1_spec.rs](../../../../sources/bzsanti__oxidizePdf/oxidize-pdf-core/tests/t1_spec.rs)<br>[oxidize-pdf-core/examples/parse_iso_spec.rs](../../../../sources/bzsanti__oxidizePdf/oxidize-pdf-core/examples/parse_iso_spec.rs) |
| eval | 545 | [BENCHMARK_RESULTS.md](../../../../sources/bzsanti__oxidizePdf/BENCHMARK_RESULTS.md)<br>[tools/test_commercial_compatibility.py](../../../../sources/bzsanti__oxidizePdf/tools/test_commercial_compatibility.py)<br>[tools/test_issue_20.rs](../../../../sources/bzsanti__oxidizePdf/tools/test_issue_20.rs)<br>[tools/test_lenient_parsing.rs](../../../../sources/bzsanti__oxidizePdf/tools/test_lenient_parsing.rs)<br>[tools/test_page_content.py](../../../../sources/bzsanti__oxidizePdf/tools/test_page_content.py)<br>[tools/test_simple_forms.py](../../../../sources/bzsanti__oxidizePdf/tools/test_simple_forms.py)<br>[tools/scripts/create_test_pdf.py](../../../../sources/bzsanti__oxidizePdf/tools/scripts/create_test_pdf.py)<br>[tools/scripts/generate_test_pdfs.py](../../../../sources/bzsanti__oxidizePdf/tools/scripts/generate_test_pdfs.py) |
| security | 175 | [ISO_COMPLIANCE_MATRIX_CURATED.toml](../../../../sources/bzsanti__oxidizePdf/ISO_COMPLIANCE_MATRIX_CURATED.toml)<br>[ISO_COMPLIANCE_MATRIX.toml](../../../../sources/bzsanti__oxidizePdf/ISO_COMPLIANCE_MATRIX.toml)<br>[SECURITY_MEASURES.md](../../../../sources/bzsanti__oxidizePdf/SECURITY_MEASURES.md)<br>[SECURITY.md](../../../../sources/bzsanti__oxidizePdf/SECURITY.md)<br>[tools/master_compliance_analyzer.py](../../../../sources/bzsanti__oxidizePdf/tools/master_compliance_analyzer.py)<br>[scripts/generate_compliance_report.py](../../../../sources/bzsanti__oxidizePdf/scripts/generate_compliance_report.py)<br>[oxidize-pdf-core/tests/type0_font_parsing_security_test.rs](../../../../sources/bzsanti__oxidizePdf/oxidize-pdf-core/tests/type0_font_parsing_security_test.rs)<br>[oxidize-pdf-core/src/verification/compliance_report.rs](../../../../sources/bzsanti__oxidizePdf/oxidize-pdf-core/src/verification/compliance_report.rs) |
| ci | 8 | [.github/workflows/benchmark-baseline.yml.disabled](../../../../sources/bzsanti__oxidizePdf/.github/workflows/benchmark-baseline.yml.disabled)<br>[.github/workflows/benchmark-pr.yml.disabled](../../../../sources/bzsanti__oxidizePdf/.github/workflows/benchmark-pr.yml.disabled)<br>[.github/workflows/benchmarks.yml.disabled](../../../../sources/bzsanti__oxidizePdf/.github/workflows/benchmarks.yml.disabled)<br>[.github/workflows/ci.yml](../../../../sources/bzsanti__oxidizePdf/.github/workflows/ci.yml)<br>[.github/workflows/corpus-tests.yml](../../../../sources/bzsanti__oxidizePdf/.github/workflows/corpus-tests.yml)<br>[.github/workflows/coverage.yml](../../../../sources/bzsanti__oxidizePdf/.github/workflows/coverage.yml)<br>[.github/workflows/release.yml](../../../../sources/bzsanti__oxidizePdf/.github/workflows/release.yml)<br>[.github/workflows/verify-corpus.yml](../../../../sources/bzsanti__oxidizePdf/.github/workflows/verify-corpus.yml) |
| container | 7 | [oxidize-pdf-core/src/charts/bar_chart.rs](../../../../sources/bzsanti__oxidizePdf/oxidize-pdf-core/src/charts/bar_chart.rs)<br>[oxidize-pdf-core/src/charts/chart_builder.rs](../../../../sources/bzsanti__oxidizePdf/oxidize-pdf-core/src/charts/chart_builder.rs)<br>[oxidize-pdf-core/src/charts/chart_renderer.rs](../../../../sources/bzsanti__oxidizePdf/oxidize-pdf-core/src/charts/chart_renderer.rs)<br>[oxidize-pdf-core/src/charts/dashboard_integration.rs](../../../../sources/bzsanti__oxidizePdf/oxidize-pdf-core/src/charts/dashboard_integration.rs)<br>[oxidize-pdf-core/src/charts/line_chart.rs](../../../../sources/bzsanti__oxidizePdf/oxidize-pdf-core/src/charts/line_chart.rs)<br>[oxidize-pdf-core/src/charts/mod.rs](../../../../sources/bzsanti__oxidizePdf/oxidize-pdf-core/src/charts/mod.rs)<br>[oxidize-pdf-core/src/charts/pie_chart.rs](../../../../sources/bzsanti__oxidizePdf/oxidize-pdf-core/src/charts/pie_chart.rs) |
| instruction | 0 | not obvious |
| docs | 63 | [README.md](../../../../sources/bzsanti__oxidizePdf/README.md)<br>[tools/scripts/README_DEBUG_REMOVAL.md](../../../../sources/bzsanti__oxidizePdf/tools/scripts/README_DEBUG_REMOVAL.md)<br>[tools/benchmarks/README.md](../../../../sources/bzsanti__oxidizePdf/tools/benchmarks/README.md)<br>[test-corpus/README.md](../../../../sources/bzsanti__oxidizePdf/test-corpus/README.md)<br>[scripts/README.md](../../../../sources/bzsanti__oxidizePdf/scripts/README.md)<br>[oxidize-pdf-core/examples/README.md](../../../../sources/bzsanti__oxidizePdf/oxidize-pdf-core/examples/README.md)<br>[oxidize-pdf-core/examples/doc/.gitkeep](../../../../sources/bzsanti__oxidizePdf/oxidize-pdf-core/examples/doc/.gitkeep)<br>[oxidize-pdf-core/examples/doc/BATCH_PROCESSING.md](../../../../sources/bzsanti__oxidizePdf/oxidize-pdf-core/examples/doc/BATCH_PROCESSING.md) |
| config | 7 | [Cargo.lock](../../../../sources/bzsanti__oxidizePdf/Cargo.lock)<br>[Cargo.toml](../../../../sources/bzsanti__oxidizePdf/Cargo.toml)<br>[oxidize-pdf-core/Cargo.toml](../../../../sources/bzsanti__oxidizePdf/oxidize-pdf-core/Cargo.toml)<br>[lints/Cargo.toml](../../../../sources/bzsanti__oxidizePdf/lints/Cargo.toml)<br>[dev-tools/pipeline-profiler/Cargo.toml](../../../../sources/bzsanti__oxidizePdf/dev-tools/pipeline-profiler/Cargo.toml)<br>[dev-tools/iso-curator/Cargo.toml](../../../../sources/bzsanti__oxidizePdf/dev-tools/iso-curator/Cargo.toml)<br>[benches/lopdf_comparison/Cargo.toml](../../../../sources/bzsanti__oxidizePdf/benches/lopdf_comparison/Cargo.toml) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 545 | [BENCHMARK_RESULTS.md](../../../../sources/bzsanti__oxidizePdf/BENCHMARK_RESULTS.md)<br>[tools/test_commercial_compatibility.py](../../../../sources/bzsanti__oxidizePdf/tools/test_commercial_compatibility.py)<br>[tools/test_issue_20.rs](../../../../sources/bzsanti__oxidizePdf/tools/test_issue_20.rs)<br>[tools/test_lenient_parsing.rs](../../../../sources/bzsanti__oxidizePdf/tools/test_lenient_parsing.rs)<br>[tools/test_page_content.py](../../../../sources/bzsanti__oxidizePdf/tools/test_page_content.py)<br>[tools/test_simple_forms.py](../../../../sources/bzsanti__oxidizePdf/tools/test_simple_forms.py) |
| CI workflows | 8 | [.github/workflows/benchmark-baseline.yml.disabled](../../../../sources/bzsanti__oxidizePdf/.github/workflows/benchmark-baseline.yml.disabled)<br>[.github/workflows/benchmark-pr.yml.disabled](../../../../sources/bzsanti__oxidizePdf/.github/workflows/benchmark-pr.yml.disabled)<br>[.github/workflows/benchmarks.yml.disabled](../../../../sources/bzsanti__oxidizePdf/.github/workflows/benchmarks.yml.disabled)<br>[.github/workflows/ci.yml](../../../../sources/bzsanti__oxidizePdf/.github/workflows/ci.yml)<br>[.github/workflows/corpus-tests.yml](../../../../sources/bzsanti__oxidizePdf/.github/workflows/corpus-tests.yml)<br>[.github/workflows/coverage.yml](../../../../sources/bzsanti__oxidizePdf/.github/workflows/coverage.yml) |
| Containers / deploy | 7 | [oxidize-pdf-core/src/charts/bar_chart.rs](../../../../sources/bzsanti__oxidizePdf/oxidize-pdf-core/src/charts/bar_chart.rs)<br>[oxidize-pdf-core/src/charts/chart_builder.rs](../../../../sources/bzsanti__oxidizePdf/oxidize-pdf-core/src/charts/chart_builder.rs)<br>[oxidize-pdf-core/src/charts/chart_renderer.rs](../../../../sources/bzsanti__oxidizePdf/oxidize-pdf-core/src/charts/chart_renderer.rs)<br>[oxidize-pdf-core/src/charts/dashboard_integration.rs](../../../../sources/bzsanti__oxidizePdf/oxidize-pdf-core/src/charts/dashboard_integration.rs)<br>[oxidize-pdf-core/src/charts/line_chart.rs](../../../../sources/bzsanti__oxidizePdf/oxidize-pdf-core/src/charts/line_chart.rs)<br>[oxidize-pdf-core/src/charts/mod.rs](../../../../sources/bzsanti__oxidizePdf/oxidize-pdf-core/src/charts/mod.rs) |
| Security / policy | 175 | [ISO_COMPLIANCE_MATRIX_CURATED.toml](../../../../sources/bzsanti__oxidizePdf/ISO_COMPLIANCE_MATRIX_CURATED.toml)<br>[ISO_COMPLIANCE_MATRIX.toml](../../../../sources/bzsanti__oxidizePdf/ISO_COMPLIANCE_MATRIX.toml)<br>[SECURITY_MEASURES.md](../../../../sources/bzsanti__oxidizePdf/SECURITY_MEASURES.md)<br>[SECURITY.md](../../../../sources/bzsanti__oxidizePdf/SECURITY.md)<br>[tools/master_compliance_analyzer.py](../../../../sources/bzsanti__oxidizePdf/tools/master_compliance_analyzer.py)<br>[scripts/generate_compliance_report.py](../../../../sources/bzsanti__oxidizePdf/scripts/generate_compliance_report.py) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `oxidize-pdf-core/tests/chunk_page_mapper_test.rs`, `oxidize-pdf-core/tests/element_graph_integration_test.rs`, `oxidize-pdf-core/tests/element_graph_test.rs`.
2. Trace execution through entrypoints: `dev-tools/pipeline-profiler/src/main.rs`, `dev-tools/iso-curator/src/main.rs`.
3. Map agent/tool runtime through: `tools/analyze_form_structure.py`, `tools/analyze_pdf_structure.py`, `tools/dump_pdf_content.py`.
4. Inspect retrieval/memory/indexing through: `oxidize-pdf-core/tests/chunk_page_mapper_test.rs`, `oxidize-pdf-core/tests/element_graph_integration_test.rs`, `oxidize-pdf-core/tests/element_graph_test.rs`.
5. Verify behavior through test/eval files: `BENCHMARK_RESULTS.md`, `tools/test_commercial_compatibility.py`, `tools/test_issue_20.rs`.

## Existing Repository Insight

LLM 위키/RAG/지식베이스 관점에서 Pure Rust PDF library for AI/RAG structure aware chunking, no ML, no C deps.. 핵심 구조 신호는 Rust, Cargo.toml, README.md, LICENSE, next, tests이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 knowledge/RAG pattern reference이고, 후속 확인 포인트는 needs deeper structural scan입니다.
