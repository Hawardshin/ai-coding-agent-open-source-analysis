# bzsanti/oxidizePdf 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

Pure Rust PDF library for AI/RAG: structure-aware chunking, no ML, no C deps.

## 요약

- 조사 단위: `sources/bzsanti__oxidizePdf` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 1,662 files, 276 directories, depth score 118, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 retrieval=oxidize-pdf-core/tests/chunk_page_mapper_test.rs, oxidize-pdf-core/tests/element_graph_integration_test.rs, oxidize-pdf-core/tests/element_graph_test.rs이고, 의존성 단서는 next, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 지식/RAG 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

## 바로가기

| 이동 | 여기서 볼 것 |
| --- | --- |
| [전체 시작 README](../../../../README.md) | 레포 전체 목적, 핵심 카테고리, 읽는 순서. |
| [전체 보고서 읽기 지도](../../../README.md) | 모든 보고서의 시작점, 주제, 폴더 지도. |
| [주제별 보고서 목차](../../../by-topic/README.md) | 조사 질문 기준으로 보고서를 찾는 입구. |
| [표/CSV 목차](../../../tables/README.md) | 표로 빠르게 훑고 CSV로 비교하는 입구. |
| [레포별 인사이트](../../../repository-insights/README.md) | 레포별 총평과 위험 신호. |
| [소스 딥다이브](../../README.md) | 주제별 소스 경로 근거. |
| [레포별 소스 딥다이브](../README.md) | 로컬 클론 1개당 1개 Markdown 딥다이브. |
| [소스 트렌드 인사이트](../../../source-insights/README.md) | 카테고리별 트렌드와 레포별 특징 비교. |


## 레포 컨텍스트

| 항목 | 값 |
| --- | --- |
| 레포 | bzsanti/oxidizePdf |
| 주제 | LLM 위키/RAG/지식베이스 / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | Rust |
| Stars | 176 |
| Forks | 21 |
| License | MIT |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/bzsanti__oxidizePdf](../../../../sources/bzsanti__oxidizePdf) |
| 기존 보고서 | [reports/llm-wiki/repositories/bzsanti__oxidizePdf.md](../../../llm-wiki/repositories/bzsanti__oxidizePdf.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 1662 / 276 |
| 관측 최대 깊이 | 9 |
| 상위 디렉터리 | .cargo, .github, benches, dev-tools, docs, landing, lints, oxidize-pdf-core, scripts, test-corpus, test-pdfs, tests, tools |
| 상위 확장자 | .rs: 807, .svg: 347, .json: 187, .md: 94, .py: 57, .pdf: 40, .html: 29, .sh: 23, (none): 15, .toml: 13, .yml: 9, .disabled: 7 |
| 소스 패턴 | cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy, ui/extension surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
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


## 실행 방식

_root manifest에서 추출된 command surface가 없습니다._


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | next |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 2 | [dev-tools/pipeline-profiler/src/main.rs](../../../../sources/bzsanti__oxidizePdf/dev-tools/pipeline-profiler/src/main.rs)<br>[dev-tools/iso-curator/src/main.rs](../../../../sources/bzsanti__oxidizePdf/dev-tools/iso-curator/src/main.rs) |
| agentRuntime | 74 | [tools/analyze_form_structure.py](../../../../sources/bzsanti__oxidizePdf/tools/analyze_form_structure.py)<br>[tools/analyze_pdf_structure.py](../../../../sources/bzsanti__oxidizePdf/tools/analyze_pdf_structure.py)<br>[tools/dump_pdf_content.py](../../../../sources/bzsanti__oxidizePdf/tools/dump_pdf_content.py)<br>[tools/extract_iso_requirements_final.py](../../../../sources/bzsanti__oxidizePdf/tools/extract_iso_requirements_final.py)<br>[tools/forms_implementation.patch](../../../../sources/bzsanti__oxidizePdf/tools/forms_implementation.patch)<br>[tools/generate_cid_tables.py](../../../../sources/bzsanti__oxidizePdf/tools/generate_cid_tables.py)<br>[tools/github_issue_body.md](../../../../sources/bzsanti__oxidizePdf/tools/github_issue_body.md)<br>[tools/master_compliance_analyzer.py](../../../../sources/bzsanti__oxidizePdf/tools/master_compliance_analyzer.py) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 64 | [oxidize-pdf-core/tests/chunk_page_mapper_test.rs](../../../../sources/bzsanti__oxidizePdf/oxidize-pdf-core/tests/chunk_page_mapper_test.rs)<br>[oxidize-pdf-core/tests/element_graph_integration_test.rs](../../../../sources/bzsanti__oxidizePdf/oxidize-pdf-core/tests/element_graph_integration_test.rs)<br>[oxidize-pdf-core/tests/element_graph_test.rs](../../../../sources/bzsanti__oxidizePdf/oxidize-pdf-core/tests/element_graph_test.rs)<br>[oxidize-pdf-core/tests/font_embedding_integration_test.rs](../../../../sources/bzsanti__oxidizePdf/oxidize-pdf-core/tests/font_embedding_integration_test.rs)<br>[oxidize-pdf-core/tests/font_embedding_integration.rs](../../../../sources/bzsanti__oxidizePdf/oxidize-pdf-core/tests/font_embedding_integration.rs)<br>[oxidize-pdf-core/tests/hybrid_chunking_graph_test.rs](../../../../sources/bzsanti__oxidizePdf/oxidize-pdf-core/tests/hybrid_chunking_graph_test.rs)<br>[oxidize-pdf-core/tests/memory_optimization_integration.rs](../../../../sources/bzsanti__oxidizePdf/oxidize-pdf-core/tests/memory_optimization_integration.rs)<br>[oxidize-pdf-core/tests/memory_optimization_tests.rs](../../../../sources/bzsanti__oxidizePdf/oxidize-pdf-core/tests/memory_optimization_tests.rs) |
| spec | 20 | [REPOSITORY_ARCHITECTURE.md](../../../../sources/bzsanti__oxidizePdf/REPOSITORY_ARCHITECTURE.md)<br>[tools/extract_iso_requirements_final.py](../../../../sources/bzsanti__oxidizePdf/tools/extract_iso_requirements_final.py)<br>[tools/scripts/ARCHITECTURE.md](../../../../sources/bzsanti__oxidizePdf/tools/scripts/ARCHITECTURE.md)<br>[test-corpus/t1-spec/download.sh](../../../../sources/bzsanti__oxidizePdf/test-corpus/t1-spec/download.sh)<br>[oxidize-pdf-core/tests/architecture_simple_test.rs](../../../../sources/bzsanti__oxidizePdf/oxidize-pdf-core/tests/architecture_simple_test.rs)<br>[oxidize-pdf-core/tests/new_architecture_test.rs](../../../../sources/bzsanti__oxidizePdf/oxidize-pdf-core/tests/new_architecture_test.rs)<br>[oxidize-pdf-core/tests/t1_spec.rs](../../../../sources/bzsanti__oxidizePdf/oxidize-pdf-core/tests/t1_spec.rs)<br>[oxidize-pdf-core/examples/parse_iso_spec.rs](../../../../sources/bzsanti__oxidizePdf/oxidize-pdf-core/examples/parse_iso_spec.rs) |
| eval | 545 | [BENCHMARK_RESULTS.md](../../../../sources/bzsanti__oxidizePdf/BENCHMARK_RESULTS.md)<br>[tools/test_commercial_compatibility.py](../../../../sources/bzsanti__oxidizePdf/tools/test_commercial_compatibility.py)<br>[tools/test_issue_20.rs](../../../../sources/bzsanti__oxidizePdf/tools/test_issue_20.rs)<br>[tools/test_lenient_parsing.rs](../../../../sources/bzsanti__oxidizePdf/tools/test_lenient_parsing.rs)<br>[tools/test_page_content.py](../../../../sources/bzsanti__oxidizePdf/tools/test_page_content.py)<br>[tools/test_simple_forms.py](../../../../sources/bzsanti__oxidizePdf/tools/test_simple_forms.py)<br>[tools/scripts/create_test_pdf.py](../../../../sources/bzsanti__oxidizePdf/tools/scripts/create_test_pdf.py)<br>[tools/scripts/generate_test_pdfs.py](../../../../sources/bzsanti__oxidizePdf/tools/scripts/generate_test_pdfs.py) |
| security | 175 | [ISO_COMPLIANCE_MATRIX_CURATED.toml](../../../../sources/bzsanti__oxidizePdf/ISO_COMPLIANCE_MATRIX_CURATED.toml)<br>[ISO_COMPLIANCE_MATRIX.toml](../../../../sources/bzsanti__oxidizePdf/ISO_COMPLIANCE_MATRIX.toml)<br>[SECURITY_MEASURES.md](../../../../sources/bzsanti__oxidizePdf/SECURITY_MEASURES.md)<br>[SECURITY.md](../../../../sources/bzsanti__oxidizePdf/SECURITY.md)<br>[tools/master_compliance_analyzer.py](../../../../sources/bzsanti__oxidizePdf/tools/master_compliance_analyzer.py)<br>[scripts/generate_compliance_report.py](../../../../sources/bzsanti__oxidizePdf/scripts/generate_compliance_report.py)<br>[oxidize-pdf-core/tests/type0_font_parsing_security_test.rs](../../../../sources/bzsanti__oxidizePdf/oxidize-pdf-core/tests/type0_font_parsing_security_test.rs)<br>[oxidize-pdf-core/src/verification/compliance_report.rs](../../../../sources/bzsanti__oxidizePdf/oxidize-pdf-core/src/verification/compliance_report.rs) |
| ci | 8 | [.github/workflows/benchmark-baseline.yml.disabled](../../../../sources/bzsanti__oxidizePdf/.github/workflows/benchmark-baseline.yml.disabled)<br>[.github/workflows/benchmark-pr.yml.disabled](../../../../sources/bzsanti__oxidizePdf/.github/workflows/benchmark-pr.yml.disabled)<br>[.github/workflows/benchmarks.yml.disabled](../../../../sources/bzsanti__oxidizePdf/.github/workflows/benchmarks.yml.disabled)<br>[.github/workflows/ci.yml](../../../../sources/bzsanti__oxidizePdf/.github/workflows/ci.yml)<br>[.github/workflows/corpus-tests.yml](../../../../sources/bzsanti__oxidizePdf/.github/workflows/corpus-tests.yml)<br>[.github/workflows/coverage.yml](../../../../sources/bzsanti__oxidizePdf/.github/workflows/coverage.yml)<br>[.github/workflows/release.yml](../../../../sources/bzsanti__oxidizePdf/.github/workflows/release.yml)<br>[.github/workflows/verify-corpus.yml](../../../../sources/bzsanti__oxidizePdf/.github/workflows/verify-corpus.yml) |
| container | 7 | [oxidize-pdf-core/src/charts/bar_chart.rs](../../../../sources/bzsanti__oxidizePdf/oxidize-pdf-core/src/charts/bar_chart.rs)<br>[oxidize-pdf-core/src/charts/chart_builder.rs](../../../../sources/bzsanti__oxidizePdf/oxidize-pdf-core/src/charts/chart_builder.rs)<br>[oxidize-pdf-core/src/charts/chart_renderer.rs](../../../../sources/bzsanti__oxidizePdf/oxidize-pdf-core/src/charts/chart_renderer.rs)<br>[oxidize-pdf-core/src/charts/dashboard_integration.rs](../../../../sources/bzsanti__oxidizePdf/oxidize-pdf-core/src/charts/dashboard_integration.rs)<br>[oxidize-pdf-core/src/charts/line_chart.rs](../../../../sources/bzsanti__oxidizePdf/oxidize-pdf-core/src/charts/line_chart.rs)<br>[oxidize-pdf-core/src/charts/mod.rs](../../../../sources/bzsanti__oxidizePdf/oxidize-pdf-core/src/charts/mod.rs)<br>[oxidize-pdf-core/src/charts/pie_chart.rs](../../../../sources/bzsanti__oxidizePdf/oxidize-pdf-core/src/charts/pie_chart.rs) |
| instruction | 0 | 명확하지 않음 |
| docs | 63 | [README.md](../../../../sources/bzsanti__oxidizePdf/README.md)<br>[tools/scripts/README_DEBUG_REMOVAL.md](../../../../sources/bzsanti__oxidizePdf/tools/scripts/README_DEBUG_REMOVAL.md)<br>[tools/benchmarks/README.md](../../../../sources/bzsanti__oxidizePdf/tools/benchmarks/README.md)<br>[test-corpus/README.md](../../../../sources/bzsanti__oxidizePdf/test-corpus/README.md)<br>[scripts/README.md](../../../../sources/bzsanti__oxidizePdf/scripts/README.md)<br>[oxidize-pdf-core/examples/README.md](../../../../sources/bzsanti__oxidizePdf/oxidize-pdf-core/examples/README.md)<br>[oxidize-pdf-core/examples/doc/.gitkeep](../../../../sources/bzsanti__oxidizePdf/oxidize-pdf-core/examples/doc/.gitkeep)<br>[oxidize-pdf-core/examples/doc/BATCH_PROCESSING.md](../../../../sources/bzsanti__oxidizePdf/oxidize-pdf-core/examples/doc/BATCH_PROCESSING.md) |
| config | 7 | [Cargo.lock](../../../../sources/bzsanti__oxidizePdf/Cargo.lock)<br>[Cargo.toml](../../../../sources/bzsanti__oxidizePdf/Cargo.toml)<br>[oxidize-pdf-core/Cargo.toml](../../../../sources/bzsanti__oxidizePdf/oxidize-pdf-core/Cargo.toml)<br>[lints/Cargo.toml](../../../../sources/bzsanti__oxidizePdf/lints/Cargo.toml)<br>[dev-tools/pipeline-profiler/Cargo.toml](../../../../sources/bzsanti__oxidizePdf/dev-tools/pipeline-profiler/Cargo.toml)<br>[dev-tools/iso-curator/Cargo.toml](../../../../sources/bzsanti__oxidizePdf/dev-tools/iso-curator/Cargo.toml)<br>[benches/lopdf_comparison/Cargo.toml](../../../../sources/bzsanti__oxidizePdf/benches/lopdf_comparison/Cargo.toml) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 545 | [BENCHMARK_RESULTS.md](../../../../sources/bzsanti__oxidizePdf/BENCHMARK_RESULTS.md)<br>[tools/test_commercial_compatibility.py](../../../../sources/bzsanti__oxidizePdf/tools/test_commercial_compatibility.py)<br>[tools/test_issue_20.rs](../../../../sources/bzsanti__oxidizePdf/tools/test_issue_20.rs)<br>[tools/test_lenient_parsing.rs](../../../../sources/bzsanti__oxidizePdf/tools/test_lenient_parsing.rs)<br>[tools/test_page_content.py](../../../../sources/bzsanti__oxidizePdf/tools/test_page_content.py)<br>[tools/test_simple_forms.py](../../../../sources/bzsanti__oxidizePdf/tools/test_simple_forms.py) |
| CI workflow | 8 | [.github/workflows/benchmark-baseline.yml.disabled](../../../../sources/bzsanti__oxidizePdf/.github/workflows/benchmark-baseline.yml.disabled)<br>[.github/workflows/benchmark-pr.yml.disabled](../../../../sources/bzsanti__oxidizePdf/.github/workflows/benchmark-pr.yml.disabled)<br>[.github/workflows/benchmarks.yml.disabled](../../../../sources/bzsanti__oxidizePdf/.github/workflows/benchmarks.yml.disabled)<br>[.github/workflows/ci.yml](../../../../sources/bzsanti__oxidizePdf/.github/workflows/ci.yml)<br>[.github/workflows/corpus-tests.yml](../../../../sources/bzsanti__oxidizePdf/.github/workflows/corpus-tests.yml)<br>[.github/workflows/coverage.yml](../../../../sources/bzsanti__oxidizePdf/.github/workflows/coverage.yml) |
| 컨테이너/배포 | 7 | [oxidize-pdf-core/src/charts/bar_chart.rs](../../../../sources/bzsanti__oxidizePdf/oxidize-pdf-core/src/charts/bar_chart.rs)<br>[oxidize-pdf-core/src/charts/chart_builder.rs](../../../../sources/bzsanti__oxidizePdf/oxidize-pdf-core/src/charts/chart_builder.rs)<br>[oxidize-pdf-core/src/charts/chart_renderer.rs](../../../../sources/bzsanti__oxidizePdf/oxidize-pdf-core/src/charts/chart_renderer.rs)<br>[oxidize-pdf-core/src/charts/dashboard_integration.rs](../../../../sources/bzsanti__oxidizePdf/oxidize-pdf-core/src/charts/dashboard_integration.rs)<br>[oxidize-pdf-core/src/charts/line_chart.rs](../../../../sources/bzsanti__oxidizePdf/oxidize-pdf-core/src/charts/line_chart.rs)<br>[oxidize-pdf-core/src/charts/mod.rs](../../../../sources/bzsanti__oxidizePdf/oxidize-pdf-core/src/charts/mod.rs) |
| 보안/정책 | 175 | [ISO_COMPLIANCE_MATRIX_CURATED.toml](../../../../sources/bzsanti__oxidizePdf/ISO_COMPLIANCE_MATRIX_CURATED.toml)<br>[ISO_COMPLIANCE_MATRIX.toml](../../../../sources/bzsanti__oxidizePdf/ISO_COMPLIANCE_MATRIX.toml)<br>[SECURITY_MEASURES.md](../../../../sources/bzsanti__oxidizePdf/SECURITY_MEASURES.md)<br>[SECURITY.md](../../../../sources/bzsanti__oxidizePdf/SECURITY.md)<br>[tools/master_compliance_analyzer.py](../../../../sources/bzsanti__oxidizePdf/tools/master_compliance_analyzer.py)<br>[scripts/generate_compliance_report.py](../../../../sources/bzsanti__oxidizePdf/scripts/generate_compliance_report.py) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `oxidize-pdf-core/tests/chunk_page_mapper_test.rs`, `oxidize-pdf-core/tests/element_graph_integration_test.rs`, `oxidize-pdf-core/tests/element_graph_test.rs`.
2. entrypoint를 따라 실행 흐름 확인: `dev-tools/pipeline-profiler/src/main.rs`, `dev-tools/iso-curator/src/main.rs`.
3. agent/tool runtime 매핑: `tools/analyze_form_structure.py`, `tools/analyze_pdf_structure.py`, `tools/dump_pdf_content.py`.
4. retrieval/memory/indexing 확인: `oxidize-pdf-core/tests/chunk_page_mapper_test.rs`, `oxidize-pdf-core/tests/element_graph_integration_test.rs`, `oxidize-pdf-core/tests/element_graph_test.rs`.
5. test/eval 파일로 동작 검증: `BENCHMARK_RESULTS.md`, `tools/test_commercial_compatibility.py`, `tools/test_issue_20.rs`.

## 기존 레포 인사이트

LLM 위키/RAG/지식베이스 관점에서 Pure Rust PDF library for AI/RAG structure aware chunking, no ML, no C deps.. 핵심 구조 신호는 Rust, Cargo.toml, README.md, LICENSE, next, tests이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 지식/RAG 패턴 참고이고, 후속 확인 포인트는 더 깊은 구조 스캔 필요입니다.
