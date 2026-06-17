# opendataloader-project/opendataloader-pdf 구조 분석

생성일: 2026-06-17T22:56:52.162Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/opendataloader-project__opendataloader-pdf |
| remote | https://github.com/opendataloader-project/opendataloader-pdf |
| HEAD | d184517 (2026-06-16) Fix the issue where list item can appear before previous one (bbox) |
| branch | main |
| groups | llm-wiki-100 |
| files | 331 |
| dirs | 101 |
| stack | Node/TypeScript/JavaScript, Python |

## 구조 해석

- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- 스펙/템플릿/명령/스킬 아티팩트가 있어 에이전트나 SDD 워크플로우가 저장소 구조의 일부다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- 테스트 파일이 충분히 노출되어 기능 검증과 회귀 검증 흐름을 추적할 수 있다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `OpenDataLoader PDF`, `Get Started in 30 Seconds`, `Batch all files in one call — each convert() spawns a JVM process, so repeated calls are slow`, `What Problems Does This Solve?`, `Capability Matrix`, `Extraction Benchmarks`, `Which Mode Should I Use?`, `Quick Start`, `Python`, `Batch all files in one call — each convert() spawns a JVM process, so repeated calls are slow`, `Node.js`, `Java`, `Hybrid Mode: #1 Accuracy for Complex PDFs`, `Batch all files in one call — each invocation spawns a JVM process, so repeated calls are slow`, `Batch all files in one call — each convert() spawns a JVM process, so repeated calls are slow`, `OCR for Scanned PDFs`, `Formula Extraction (LaTeX)`, `Server: enable formula enrichment`

> <! AI AGENT SUMMARY name opendataloader pdf category PDF data extraction, PDF accessibility automation license Apache 2.0 solves [PDF to structured data for RAG/LLM pipelines, accelerate PDF accessibility remediation — layout analysis + auto tagging to Tagged PDF as foundation for PDF/UA (first open source end to end)] input PDF files (digital, scanned, tagged) output Markdown, JSON (with bounding boxes), HTML, Tagged PDF, PDF/UA (enterprise) sdk Python, Node.js, Java requirements Java 11+ pricing open source core (data extraction, layout analysis, auto tagging to Tagged PDF), enterprise add on (PDF/UA export, accessibility studio) extraction benchmark 1 overall extraction accuracy (0.907) in hybrid mode, 0.928 table extraction accuracy, 0.015s/page local mode accessibility validation PDF Association collaboration, Well Tagged PDF specification, veraPDF automated validation key different

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .editorconfig | file |
| .gitattributes | file |
| .github | dir |
| .gitignore | file |
| build-scripts | dir |
| CHANGELOG.md | file |
| CLAUDE.md | file |
| CODE_OF_CONDUCT.md | file |
| CONTRIBUTING.md | file |
| docs | dir |
| examples | dir |
| java | dir |
| LICENSE | file |
| LICENSE_TEMPLATE | dir |
| node | dir |
| NOTICE | file |
| options.json | file |
| package.json | file |
| python | dir |
| README.md | file |
| samples | dir |
| schema.json | file |
| scripts | dir |
| SUPPORT.md | file |
| THIRD_PARTY | dir |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| java/ | 179 |
| python/ | 28 |
| docs/ | 24 |
| node/ | 19 |
| scripts/ | 17 |
| samples/ | 16 |
| THIRD_PARTY/ | 15 |
| (root) | 14 |
| .github/ | 9 |
| examples/ | 7 |
| build-scripts/ | 2 |
| LICENSE_TEMPLATE/ | 1 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| docs/ | 24 | preferred |
| examples/ | 7 | preferred |
| scripts/ | 17 | preferred |
| java/ | 179 | large |
| java/opendataloader-pdf-core/ | 172 | large |
| java/opendataloader-pdf-core/src/ | 171 | large |
| python/ | 28 | large |
| python/opendataloader-pdf/ | 21 | large |
| docs/hybrid/ | 19 | large |
| node/ | 19 | large |
| node/opendataloader-pdf/ | 19 | large |
| samples/ | 16 | large |
| THIRD_PARTY/ | 15 | large |
| samples/pdf/ | 14 | large |
| THIRD_PARTY/licenses/ | 13 | large |
| python/opendataloader-pdf/tests/ | 10 | large |
| .github/ | 9 | large |
| samples/pdf/pdfua-1-reference-suite-1-1/ | 9 | large |
| docs/hybrid/experiments/ | 8 | large |
| docs/hybrid/research/ | 8 | large |
| examples/python/ | 7 | large |
| python/opendataloader-pdf-mcp/ | 7 | large |
| python/opendataloader-pdf/src/ | 7 | large |
| docs/superpowers/ | 5 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `examples/python/batch/requirements.txt`
- `examples/python/rag/requirements.txt`
- `node/opendataloader-pdf/package.json`
- `node/opendataloader-pdf/pnpm-lock.yaml`
- `node/opendataloader-pdf/tsconfig.json`
- `package.json`
- `python/opendataloader-pdf-mcp/pyproject.toml`
- `python/opendataloader-pdf-mcp/uv.lock`
- `python/opendataloader-pdf/pyproject.toml`
- `python/opendataloader-pdf/uv.lock`

### package.json

| 경로 | 이름 | scripts | deps |
| --- | --- | --- | --- |
| node/opendataloader-pdf/package.json | @opendataloader/pdf | setup, build, test, format, lint, lint:fix | commander |
| package.json | opendataloader-pdf-workspace | build-java, export-options, generate-options, sync-options, generate-schema, sync-schema, sync |  |

### pyproject.toml

| 경로 | 이름 | poetry | uv | ruff | pytest |
| --- | --- | --- | --- | --- | --- |
| python/opendataloader-pdf-mcp/pyproject.toml | opendataloader-pdf-mcp | false | false | false | false |
| python/opendataloader-pdf/pyproject.toml | opendataloader-pdf | false | true | true | false |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `CONTRIBUTING.md`
- `README.md`
- `docs/hybrid/docling-speed-optimization-plan.md`
- `docs/hybrid/experiments/chunking_strategy/conclusion.json`
- `docs/hybrid/experiments/chunking_strategy/docling_benchmark_report.json`
- `docs/hybrid/experiments/chunking_strategy/docling_page_range_benchmark.py`
- `docs/hybrid/experiments/speed/baseline_results.json`
- `docs/hybrid/experiments/speed/fastapi_results.json`
- `docs/hybrid/experiments/speed/speed-experiment-2026-01-03.md`
- `docs/hybrid/experiments/speed/subprocess_results.json`
- `docs/hybrid/experiments/triage/triage-experiments.md`
- `docs/hybrid/hybrid-mode-design.md`
- `docs/hybrid/hybrid-mode-tasks.md`
- `docs/hybrid/research/comparison-summary.md`
- `docs/hybrid/research/docling-openapi.json`
- `docs/hybrid/research/docling-sample-response-lorem.json`
- `docs/hybrid/research/docling-sample-response.json`
- `docs/hybrid/research/documents-with-tables.txt`
- `docs/hybrid/research/iobject-structure.md`
- `docs/hybrid/research/opendataloader-sample-response.json`
- `docs/hybrid/research/opendataloader-sample-response.md`
- `docs/superpowers/plans/2026-03-16-cid-font-detection.md`
- `docs/superpowers/plans/2026-04-18-hancom-ai-mock-server.md`
- `docs/superpowers/plans/2026-04-29-hybrid-hancom-ai-options.md`
- `docs/superpowers/specs/2026-03-16-cid-font-detection-design.md`
- `docs/superpowers/specs/2026-04-29-hybrid-hancom-ai-options-design.md`
- `examples/python/batch/README.md`
- `examples/python/rag/README.md`
- `python/opendataloader-pdf-mcp/README.md`

### 에이전트 지침 후보

- `CLAUDE.md`
- `python/opendataloader-pdf-mcp/README.md`
- `python/opendataloader-pdf-mcp/pyproject.toml`
- `python/opendataloader-pdf-mcp/src/opendataloader_pdf_mcp/__init__.py`
- `python/opendataloader-pdf-mcp/src/opendataloader_pdf_mcp/server.py`
- `python/opendataloader-pdf-mcp/tests/conftest.py`
- `python/opendataloader-pdf-mcp/tests/test_convert_pdf.py`
- `python/opendataloader-pdf-mcp/uv.lock`

### 스펙/템플릿/명령/스킬 후보

- `docs/hybrid/hybrid-mode-design.md`
- `docs/hybrid/hybrid-mode-tasks.md`
- `docs/superpowers/specs/2026-03-16-cid-font-detection-design.md`
- `docs/superpowers/specs/2026-04-29-hybrid-hancom-ai-options-design.md`

## 테스트 / CI / 배포 표면

### 테스트 후보

- `java/opendataloader-pdf-cli/src/test/java/org/opendataloader/pdf/cli/CLIMainTest.java`
- `java/opendataloader-pdf-cli/src/test/java/org/opendataloader/pdf/cli/FormatLogRegressionTest.java`
- `java/opendataloader-pdf-core/src/test/java/org/opendataloader/pdf/EmbedImagesIntegrationTest.java`
- `java/opendataloader-pdf-core/src/test/java/org/opendataloader/pdf/HybridBackendFailureIntegrationTest.java`
- `java/opendataloader-pdf-core/src/test/java/org/opendataloader/pdf/ImageDirIntegrationTest.java`
- `java/opendataloader-pdf-core/src/test/java/org/opendataloader/pdf/IncludeHeaderFooterJsonIntegrationTest.java`
- `java/opendataloader-pdf-core/src/test/java/org/opendataloader/pdf/IntegrationTest.java`
- `java/opendataloader-pdf-core/src/test/java/org/opendataloader/pdf/Issue336IntegrationTest.java`
- `java/opendataloader-pdf-core/src/test/java/org/opendataloader/pdf/Issue408IntegrationTest.java`
- `java/opendataloader-pdf-core/src/test/java/org/opendataloader/pdf/PageSeparatorIntegrationTest.java`
- `java/opendataloader-pdf-core/src/test/java/org/opendataloader/pdf/PagesOptionIntegrationTest.java`
- `java/opendataloader-pdf-core/src/test/java/org/opendataloader/pdf/api/AutoTaggerTest.java`
- `java/opendataloader-pdf-core/src/test/java/org/opendataloader/pdf/api/ConfigTest.java`
- `java/opendataloader-pdf-core/src/test/java/org/opendataloader/pdf/api/FilterConfigTest.java`
- `java/opendataloader-pdf-core/src/test/java/org/opendataloader/pdf/api/cli/CLIOptionsContentSafetyTest.java`
- `java/opendataloader-pdf-core/src/test/java/org/opendataloader/pdf/api/cli/CLIOptionsTest.java`
- `java/opendataloader-pdf-core/src/test/java/org/opendataloader/pdf/containers/StaticLayoutContainersTest.java`
- `java/opendataloader-pdf-core/src/test/java/org/opendataloader/pdf/entities/PictureDescriptionE2ETest.java`
- `java/opendataloader-pdf-core/src/test/java/org/opendataloader/pdf/entities/SemanticPictureTest.java`
- `java/opendataloader-pdf-core/src/test/java/org/opendataloader/pdf/html/HtmlGeneratorTest.java`
- `java/opendataloader-pdf-core/src/test/java/org/opendataloader/pdf/hybrid/DiskPageImageCacheTest.java`
- `java/opendataloader-pdf-core/src/test/java/org/opendataloader/pdf/hybrid/DoclingFastServerClientTest.java`
- `java/opendataloader-pdf-core/src/test/java/org/opendataloader/pdf/hybrid/DoclingSchemaTransformerTest.java`
- `java/opendataloader-pdf-core/src/test/java/org/opendataloader/pdf/hybrid/ElementMetadataTest.java`
- `java/opendataloader-pdf-core/src/test/java/org/opendataloader/pdf/hybrid/HancomAIClientRequestIdTest.java`
- `java/opendataloader-pdf-core/src/test/java/org/opendataloader/pdf/hybrid/HancomAISchemaTransformerTest.java`
- `java/opendataloader-pdf-core/src/test/java/org/opendataloader/pdf/hybrid/HancomClientTest.java`
- `java/opendataloader-pdf-core/src/test/java/org/opendataloader/pdf/hybrid/HancomSchemaTransformerTest.java`
- `java/opendataloader-pdf-core/src/test/java/org/opendataloader/pdf/hybrid/HealthCheckTest.java`
- `java/opendataloader-pdf-core/src/test/java/org/opendataloader/pdf/hybrid/HybridClientFactoryTest.java`
- `java/opendataloader-pdf-core/src/test/java/org/opendataloader/pdf/hybrid/MemoryPageImageCacheTest.java`
- `java/opendataloader-pdf-core/src/test/java/org/opendataloader/pdf/hybrid/OcrStrategyTest.java`
- `java/opendataloader-pdf-core/src/test/java/org/opendataloader/pdf/hybrid/TextSimilarityTest.java`
- `java/opendataloader-pdf-core/src/test/java/org/opendataloader/pdf/hybrid/TriageLoggerTest.java`
- `java/opendataloader-pdf-core/src/test/java/org/opendataloader/pdf/hybrid/TriageProcessorIntegrationTest.java`
- `java/opendataloader-pdf-core/src/test/java/org/opendataloader/pdf/hybrid/TriageProcessorTest.java`
- `java/opendataloader-pdf-core/src/test/java/org/opendataloader/pdf/json/serializers/ElementMetadataSerializerTest.java`
- `java/opendataloader-pdf-core/src/test/java/org/opendataloader/pdf/json/serializers/ImageSerializerTest.java`
- `java/opendataloader-pdf-core/src/test/java/org/opendataloader/pdf/json/serializers/LineArtSerializerTest.java`
- `java/opendataloader-pdf-core/src/test/java/org/opendataloader/pdf/markdown/MarkdownGeneratorTest.java`
- `java/opendataloader-pdf-core/src/test/java/org/opendataloader/pdf/markdown/MarkdownTableTest.java`
- `java/opendataloader-pdf-core/src/test/java/org/opendataloader/pdf/processors/CaptionProcessorTest.java`
- `java/opendataloader-pdf-core/src/test/java/org/opendataloader/pdf/processors/CidFontDetectionTest.java`
- `java/opendataloader-pdf-core/src/test/java/org/opendataloader/pdf/processors/ContentFilterProcessorTest.java`
- `java/opendataloader-pdf-core/src/test/java/org/opendataloader/pdf/processors/DocumentProcessorMagicNumberTest.java`
- `java/opendataloader-pdf-core/src/test/java/org/opendataloader/pdf/processors/HeaderFooterProcessorTest.java`
- `java/opendataloader-pdf-core/src/test/java/org/opendataloader/pdf/processors/HeadingProcessorTest.java`
- `java/opendataloader-pdf-core/src/test/java/org/opendataloader/pdf/processors/HybridDocumentProcessorTest.java`
- `java/opendataloader-pdf-core/src/test/java/org/opendataloader/pdf/processors/LevelProcessorTest.java`
- `java/opendataloader-pdf-core/src/test/java/org/opendataloader/pdf/processors/ListProcessorTest.java`
- `java/opendataloader-pdf-core/src/test/java/org/opendataloader/pdf/processors/ParagraphProcessorTest.java`
- `java/opendataloader-pdf-core/src/test/java/org/opendataloader/pdf/processors/SpecialTableProcessorTest.java`
- `java/opendataloader-pdf-core/src/test/java/org/opendataloader/pdf/processors/StrikethroughProcessorTest.java`
- `java/opendataloader-pdf-core/src/test/java/org/opendataloader/pdf/processors/TableBorderProcessorTest.java`
- `java/opendataloader-pdf-core/src/test/java/org/opendataloader/pdf/processors/TextLineProcessorTest.java`
- `java/opendataloader-pdf-core/src/test/java/org/opendataloader/pdf/processors/TextProcessorTest.java`
- `java/opendataloader-pdf-core/src/test/java/org/opendataloader/pdf/processors/readingorder/XYCutPlusPlusSorterTest.java`
- `java/opendataloader-pdf-core/src/test/java/org/opendataloader/pdf/regression/ToUnicodeRegressionTest.java`
- `java/opendataloader-pdf-core/src/test/java/org/opendataloader/pdf/utils/Base64ImageUtilsTest.java`
- `java/opendataloader-pdf-core/src/test/java/org/opendataloader/pdf/utils/ContentSanitizerTest.java`
- `java/opendataloader-pdf-core/src/test/java/org/opendataloader/pdf/utils/ImageFormatSupportTest.java`
- `java/opendataloader-pdf-core/src/test/java/org/opendataloader/pdf/utils/ImagesUtilsTest.java`
- `java/opendataloader-pdf-core/src/test/java/org/opendataloader/pdf/utils/ModeWeightStatisticsTest.java`
- `java/opendataloader-pdf-core/src/test/java/org/opendataloader/pdf/utils/TextNodeStatisticsTest.java`
- `java/opendataloader-pdf-core/src/test/resources/cid-font-no-tounicode.pdf`
- `java/opendataloader-pdf-core/src/test/resources/generate-cid-test-pdf.py`
- `node/opendataloader-pdf/test/convert-options.test.ts`
- `node/opendataloader-pdf/test/convert.integration.test.ts`
- `node/opendataloader-pdf/test/executeJar.unit.test.ts`
- `node/opendataloader-pdf/test/run.integration.test.ts`
- `node/opendataloader-pdf/test/streaming.integration.test.ts`
- `python/opendataloader-pdf-mcp/tests/conftest.py`
- `python/opendataloader-pdf-mcp/tests/test_convert_pdf.py`
- `python/opendataloader-pdf/tests/conftest.py`
- `python/opendataloader-pdf/tests/test_cli_options.py`
- `python/opendataloader-pdf/tests/test_convert_integration.py`
- `python/opendataloader-pdf/tests/test_hybrid_server.py`
- `python/opendataloader-pdf/tests/test_hybrid_server_nonblocking.py`
- `python/opendataloader-pdf/tests/test_hybrid_server_ocr_options.py`
- `python/opendataloader-pdf/tests/test_hybrid_server_partial_success.py`
- ... 3 more

### CI/Docker 후보

- `.github/workflows/release.yml`
- `.github/workflows/test-benchmark.yml`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .java | 172 |
| .py | 33 |
| .md | 29 |
| .txt | 17 |
| .json | 16 |
| .pdf | 15 |
| .ts | 11 |
| .sh | 10 |
| .xml | 5 |
| .gitignore | 3 |
| .mjs | 3 |
| .yml | 3 |
| .lock | 2 |
| .toml | 2 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `docs/ 내부 책임 분리`
- `examples/ 내부 책임 분리`
- `scripts/ 내부 책임 분리`
- `java/ 내부 책임 분리`
- `java/opendataloader-pdf-core/ 내부 책임 분리`
- `docs/hybrid/hybrid-mode-design.md 스펙/명령 의미`
- `docs/hybrid/hybrid-mode-tasks.md 스펙/명령 의미`
- `docs/superpowers/specs/2026-03-16-cid-font-detection-design.md 스펙/명령 의미`
- `docs/superpowers/specs/2026-04-29-hybrid-hancom-ai-options-design.md 스펙/명령 의미`
- `examples/python/batch/requirements.txt 실행 스크립트와 패키지 경계`
- `examples/python/rag/requirements.txt 실행 스크립트와 패키지 경계`
- `node/opendataloader-pdf/package.json 실행 스크립트와 패키지 경계`
- `node/opendataloader-pdf/pnpm-lock.yaml 실행 스크립트와 패키지 경계`
- `node/opendataloader-pdf/tsconfig.json 실행 스크립트와 패키지 경계`

