# opendataloader-project/opendataloader-pdf 코드 레벨 분석

생성일: 2026-06-17T23:31:36.282Z

## 기본 판정

| 항목 | 값 |
| --- | --- |
| type | rag-knowledge-platform |
| maturity | A integrated platform (100) |
| stars | 25243 |
| language | Java |
| tags | rag, document-chat, korea-signal |
| files/code/source | 313/231/142 |
| tests/ci | 83/2 |
| local path | sources/opendataloader-project__opendataloader-pdf |

## 파이프라인 단계

| 단계 | 상태 | matched files | source files | evidence |
| --- | --- | --- | --- | --- |
| Ingestion/source intake | code | 9 | 3 | python/opendataloader-pdf/src/opendataloader_pdf/hybrid_server.py:87 UPLOAD_CHUNK_SIZE = 1024 * 1024 # 1MB chunks for streaming upload |
| Parsing/OCR/document extraction | code | 256 | 133 | build-scripts/fetch_shaded_jar.py:22 # Example filename: opendataloader-pdf-runtime-0.1.0.jar |
| Chunking/splitting | code | 52 | 24 | node/opendataloader-pdf/src/cli-options.generated.ts:36 program.option('--hybrid-hancom-ai-regionlist-strategy <value>', 'DLA label 7 (regionlist) handling. Requires --hybrid=hancom-ai. Values: table-first (default; check TSR overlap), list-only (skip TSR, always treat as lis |
| Embedding/vector index | code | 11 | 2 | java/opendataloader-pdf-core/src/main/java/org/opendataloader/pdf/hybrid/TriageProcessor.java:65 // ============= Vector Graphics Detection Constants ============= |
| Retrieval/search/rerank | code | 10 | 2 | build-scripts/fetch_shaded_jar.py:37 match = version_regex.search(jar_path.name) |
| Wiki/graph/entity model | code | 112 | 70 | java/opendataloader-pdf-core/src/main/java/org/opendataloader/pdf/containers/StaticLayoutContainers.java:19 import org.verapdf.wcag.algorithms.entities.SemanticHeading; |
| Memory/update lifecycle | code | 65 | 33 | scripts/bench.sh:82 uv sync --quiet |
| Provenance/citation/evidence | code | 27 | 13 | java/opendataloader-pdf-core/src/main/java/org/opendataloader/pdf/entities/EnrichedImageChunk.java:36 * and downstream evidence-report badging — a reviewer treats a human-authored |
| Evaluation/observability | code | 26 | 8 | scripts/bench.sh:2 # Benchmark script for opendataloader-pdf |
| Agent/MCP/tool surface | code | 15 | 3 | python/opendataloader-pdf-mcp/src/opendataloader_pdf_mcp/__init__.py:1 """MCP server for OpenDataLoader PDF.""" |

## 의존성 신호

- LLM/app framework: langchain-opendataloader-pdf, langchain-text-splitters

## 주요 파일 후보

### Ingestion/source intake

- `python/opendataloader-pdf/src/opendataloader_pdf/hybrid_server.py`
- `java/opendataloader-pdf-core/src/main/java/org/opendataloader/pdf/hybrid/HancomClient.java`
- `java/opendataloader-pdf-core/src/main/java/org/opendataloader/pdf/hybrid/HybridConfig.java`
- `.github/workflows/test-benchmark.yml`
- `python/opendataloader-pdf/pyproject.toml`
- `java/opendataloader-pdf-core/src/test/java/org/opendataloader/pdf/hybrid/HancomClientTest.java`
- `CODE_OF_CONDUCT.md`
- `README.md`
- `docs/hybrid/docling-speed-optimization-plan.md`

### Parsing/OCR/document extraction

- `build-scripts/fetch_shaded_jar.py`
- `scripts/bench.sh`
- `scripts/build-all.sh`
- `scripts/build-node.sh`
- `scripts/build-python.sh`
- `scripts/generate-options.mjs`
- `scripts/generate-schema.mjs`
- `scripts/run-cli.sh`
- `scripts/verify-python-sdist.sh`
- `python/opendataloader-pdf/hatch_build.py`
- `scripts/experiments/docling_baseline_bench.py`
- `scripts/experiments/docling_fastapi_bench.py`
- ... 6 more

### Chunking/splitting

- `node/opendataloader-pdf/src/cli-options.generated.ts`
- `node/opendataloader-pdf/src/convert-options.generated.ts`
- `node/opendataloader-pdf/src/index.ts`
- `python/opendataloader-pdf/src/opendataloader_pdf/cli_options_generated.py`
- `python/opendataloader-pdf/src/opendataloader_pdf/convert_generated.py`
- `python/opendataloader-pdf/src/opendataloader_pdf/hybrid_server.py`
- `java/opendataloader-pdf-core/src/main/java/org/opendataloader/pdf/html/HtmlGenerator.java`
- `java/opendataloader-pdf-core/src/main/java/org/opendataloader/pdf/hybrid/DoclingSchemaTransformer.java`
- `java/opendataloader-pdf-core/src/main/java/org/opendataloader/pdf/hybrid/HancomAISchemaTransformer.java`
- `java/opendataloader-pdf-core/src/main/java/org/opendataloader/pdf/hybrid/HybridConfig.java`
- `java/opendataloader-pdf-core/src/main/java/org/opendataloader/pdf/hybrid/TriageProcessor.java`
- `java/opendataloader-pdf-core/src/main/java/org/opendataloader/pdf/json/JsonName.java`
- ... 6 more

### Embedding/vector index

- `java/opendataloader-pdf-core/src/main/java/org/opendataloader/pdf/hybrid/TriageProcessor.java`
- `java/opendataloader-pdf-core/src/main/java/org/opendataloader/pdf/utils/Base64ImageUtils.java`
- `examples/python/rag/basic_chunking.py`
- `examples/python/rag/langchain_example.py`
- `java/opendataloader-pdf-core/src/test/resources/generate-cid-test-pdf.py`
- `docs/hybrid/research/docling-openapi.json`
- `docs/hybrid/experiments/speed/subprocess_results.json`
- `java/opendataloader-pdf-core/src/test/java/org/opendataloader/pdf/processors/StrikethroughProcessorTest.java`
- `docs/superpowers/plans/2026-04-29-hybrid-hancom-ai-options.md`
- `docs/hybrid/experiments/triage/triage-experiments.md`
- `examples/python/rag/README.md`

### Retrieval/search/rerank

- `build-scripts/fetch_shaded_jar.py`
- `java/opendataloader-pdf-core/src/main/java/org/opendataloader/pdf/processors/DocumentProcessor.java`
- `examples/python/rag/basic_chunking.py`
- `docs/hybrid/experiments/speed/subprocess_results.json`
- `java/opendataloader-pdf-core/src/test/java/org/opendataloader/pdf/processors/DocumentProcessorMagicNumberTest.java`
- `CONTRIBUTING.md`
- `README.md`
- `SUPPORT.md`
- `docs/superpowers/plans/2026-03-16-cid-font-detection.md`
- `examples/python/rag/README.md`

### Wiki/graph/entity model

- `java/opendataloader-pdf-core/src/main/java/org/opendataloader/pdf/containers/StaticLayoutContainers.java`
- `java/opendataloader-pdf-core/src/main/java/org/opendataloader/pdf/entities/EnrichedImageChunk.java`
- `java/opendataloader-pdf-core/src/main/java/org/opendataloader/pdf/entities/SemanticFootnote.java`
- `java/opendataloader-pdf-core/src/main/java/org/opendataloader/pdf/entities/SemanticFormula.java`
- `java/opendataloader-pdf-core/src/main/java/org/opendataloader/pdf/entities/SemanticPicture.java`
- `java/opendataloader-pdf-core/src/main/java/org/opendataloader/pdf/html/HtmlGenerator.java`
- `java/opendataloader-pdf-core/src/main/java/org/opendataloader/pdf/hybrid/DoclingSchemaTransformer.java`
- `java/opendataloader-pdf-core/src/main/java/org/opendataloader/pdf/hybrid/HancomAISchemaTransformer.java`
- `java/opendataloader-pdf-core/src/main/java/org/opendataloader/pdf/hybrid/HancomSchemaTransformer.java`
- `java/opendataloader-pdf-core/src/main/java/org/opendataloader/pdf/hybrid/HybridSchemaTransformer.java`
- `java/opendataloader-pdf-core/src/main/java/org/opendataloader/pdf/hybrid/OcrWordInfo.java`
- `java/opendataloader-pdf-core/src/main/java/org/opendataloader/pdf/hybrid/TriageProcessor.java`
- ... 6 more

### Memory/update lifecycle

- `scripts/bench.sh`
- `scripts/build-python.sh`
- `scripts/verify-python-sdist.sh`
- `scripts/experiments/docling_fastapi_bench.py`
- `scripts/experiments/docling_subprocess_bench.py`
- `node/opendataloader-pdf/src/cli-options.generated.ts`
- `node/opendataloader-pdf/src/convert-options.generated.ts`
- `node/opendataloader-pdf/src/index.ts`
- `python/opendataloader-pdf/src/opendataloader_pdf/cli_options_generated.py`
- `python/opendataloader-pdf/src/opendataloader_pdf/convert_generated.py`
- `python/opendataloader-pdf/src/opendataloader_pdf/hybrid_server.py`
- `java/opendataloader-pdf-core/src/main/java/org/opendataloader/pdf/api/AutoTagger.java`
- ... 6 more

### Provenance/citation/evidence

- `java/opendataloader-pdf-core/src/main/java/org/opendataloader/pdf/entities/EnrichedImageChunk.java`
- `java/opendataloader-pdf-core/src/main/java/org/opendataloader/pdf/entities/SemanticFootnote.java`
- `java/opendataloader-pdf-core/src/main/java/org/opendataloader/pdf/html/HtmlGenerator.java`
- `java/opendataloader-pdf-core/src/main/java/org/opendataloader/pdf/hybrid/DoclingFastServerClient.java`
- `java/opendataloader-pdf-core/src/main/java/org/opendataloader/pdf/hybrid/DoclingSchemaTransformer.java`
- `java/opendataloader-pdf-core/src/main/java/org/opendataloader/pdf/hybrid/ElementMetadata.java`
- `java/opendataloader-pdf-core/src/main/java/org/opendataloader/pdf/hybrid/HancomAIClient.java`
- `java/opendataloader-pdf-core/src/main/java/org/opendataloader/pdf/hybrid/HancomAISchemaTransformer.java`
- `java/opendataloader-pdf-core/src/main/java/org/opendataloader/pdf/processors/AutoTaggingProcessor.java`
- `java/opendataloader-pdf-core/src/main/java/org/opendataloader/pdf/processors/HybridDocumentProcessor.java`
- `java/opendataloader-pdf-core/src/main/java/org/opendataloader/pdf/json/serializers/ImageSerializer.java`
- `java/opendataloader-pdf-core/src/main/java/org/opendataloader/pdf/json/serializers/SerializerUtil.java`
- ... 6 more

### Evaluation/observability

- `scripts/bench.sh`
- `scripts/experiments/docling_baseline_bench.py`
- `scripts/experiments/docling_fastapi_bench.py`
- `scripts/experiments/docling_speed_report.py`
- `scripts/experiments/docling_subprocess_bench.py`
- `java/opendataloader-pdf-core/src/main/java/org/opendataloader/pdf/hybrid/TriageLogger.java`
- `java/opendataloader-pdf-core/src/main/java/org/opendataloader/pdf/hybrid/TriageProcessor.java`
- `java/opendataloader-pdf-core/src/main/java/org/opendataloader/pdf/processors/HybridDocumentProcessor.java`
- `.github/workflows/test-benchmark.yml`
- `node/opendataloader-pdf/pnpm-lock.yaml`
- `java/opendataloader-pdf-core/src/test/resources/generate-cid-test-pdf.py`
- `docs/hybrid/experiments/speed/subprocess_results.json`
- ... 6 more

### Agent/MCP/tool surface

- `python/opendataloader-pdf-mcp/src/opendataloader_pdf_mcp/__init__.py`
- `python/opendataloader-pdf-mcp/src/opendataloader_pdf_mcp/server.py`
- `java/opendataloader-pdf-core/src/main/java/org/opendataloader/pdf/containers/StaticLayoutContainers.java`
- `python/opendataloader-pdf-mcp/pyproject.toml`
- `python/opendataloader-pdf-mcp/tests/conftest.py`
- `python/opendataloader-pdf-mcp/tests/test_convert_pdf.py`
- `docs/hybrid/research/docling-openapi.json`
- `docs/hybrid/experiments/speed/subprocess_results.json`
- `CLAUDE.md`
- `README.md`
- `docs/hybrid/hybrid-mode-tasks.md`
- `python/opendataloader-pdf-mcp/README.md`
- ... 3 more

## Evidence lines

### Ingestion/source intake

| file | line | text |
| --- | --- | --- |
| python/opendataloader-pdf/src/opendataloader_pdf/hybrid_server.py | 87 | UPLOAD_CHUNK_SIZE = 1024 * 1024 # 1MB chunks for streaming upload |
| python/opendataloader-pdf/src/opendataloader_pdf/hybrid_server.py | 629 | # Stream upload to temp file and enforce size incrementally |
| python/opendataloader-pdf/src/opendataloader_pdf/hybrid_server.py | 747 | # Stream upload to temp file |
| python/opendataloader-pdf/src/opendataloader_pdf/hybrid_server.py | 922 | help="Maximum upload file size in MB. 0 means no limit (default: 0).", |
| java/opendataloader-pdf-core/src/main/java/org/opendataloader/pdf/hybrid/HancomClient.java | 40 | * <li>Upload PDF file to /v1/dl/files/upload</li> |
| java/opendataloader-pdf-core/src/main/java/org/opendataloader/pdf/hybrid/HancomClient.java | 55 | public static final String DEFAULT_URL = "https://dataloader.cloud.hancom.com/studio-lite/api"; |
| java/opendataloader-pdf-core/src/main/java/org/opendataloader/pdf/hybrid/HancomClient.java | 57 | private static final String UPLOAD_ENDPOINT = "/v1/dl/files/upload"; |
| java/opendataloader-pdf-core/src/main/java/org/opendataloader/pdf/hybrid/HancomClient.java | 133 | // Step 1: Upload PDF |

### Parsing/OCR/document extraction

| file | line | text |
| --- | --- | --- |
| build-scripts/fetch_shaded_jar.py | 22 | # Example filename: opendataloader-pdf-runtime-0.1.0.jar |
| build-scripts/fetch_shaded_jar.py | 23 | jar_pattern = "opendataloader-pdf-runtime-*.jar" |
| build-scripts/fetch_shaded_jar.py | 24 | version_regex = re.compile(r"opendataloader-pdf-runtime-(.+?)\.jar") |
| scripts/bench.sh | 2 | # Benchmark script for opendataloader-pdf |
| scripts/bench.sh | 35 | local target_dir="$PROJECT_ROOT/java/opendataloader-pdf-cli/target" |
| scripts/bench.sh | 37 | jar=$(find "$target_dir" -name "opendataloader-pdf-cli-*-shaded.jar" 2>/dev/null \| head -1) |
| scripts/bench.sh | 39 | jar=$(find "$target_dir" -name "opendataloader-pdf-cli-*.jar" \ |
| scripts/build-all.sh | 55 | cd "$ROOT_DIR/python/opendataloader-pdf" |

### Chunking/splitting

| file | line | text |
| --- | --- | --- |
| node/opendataloader-pdf/src/cli-options.generated.ts | 36 | program.option('--hybrid-hancom-ai-regionlist-strategy <value>', 'DLA label 7 (regionlist) handling. Requires --hybrid=hancom-ai. Values: table-first (default; check TSR overlap), list-only (skip TSR, always treat as lis |
| node/opendataloader-pdf/src/convert-options.generated.ts | 60 | /** DLA label 7 (regionlist) handling. Requires --hybrid=hancom-ai. Values: table-first (default; check TSR overlap), list-only (skip TSR, always treat as list) */ |
| node/opendataloader-pdf/src/index.ts | 56 | // chunk boundaries — Buffer.toString() alone would emit replacement |
| node/opendataloader-pdf/src/index.ts | 63 | const chunk = stdoutDecoder.write(data); |
| node/opendataloader-pdf/src/index.ts | 64 | if (chunk.length === 0) return; |
| node/opendataloader-pdf/src/index.ts | 69 | process.stdout.write(chunk); |
| node/opendataloader-pdf/src/index.ts | 71 | stdout += chunk; |
| node/opendataloader-pdf/src/index.ts | 76 | const chunk = stderrDecoder.write(data); |

### Embedding/vector index

| file | line | text |
| --- | --- | --- |
| java/opendataloader-pdf-core/src/main/java/org/opendataloader/pdf/hybrid/TriageProcessor.java | 65 | // ============= Vector Graphics Detection Constants ============= |
| java/opendataloader-pdf-core/src/main/java/org/opendataloader/pdf/hybrid/TriageProcessor.java | 250 | // New vector graphics signals |
| java/opendataloader-pdf-core/src/main/java/org/opendataloader/pdf/hybrid/TriageProcessor.java | 384 | * Checks if vector graphics indicate table structure. |
| java/opendataloader-pdf-core/src/main/java/org/opendataloader/pdf/hybrid/TriageProcessor.java | 386 | * @return true if any vector graphics signal indicates table. |
| java/opendataloader-pdf-core/src/main/java/org/opendataloader/pdf/hybrid/TriageProcessor.java | 668 | // Signal 2: Vector graphics based table detection (grid lines, borders, line art) |
| java/opendataloader-pdf-core/src/main/java/org/opendataloader/pdf/hybrid/TriageProcessor.java | 756 | // Build vector graphics signals |
| java/opendataloader-pdf-core/src/main/java/org/opendataloader/pdf/utils/Base64ImageUtils.java | 34 | * Maximum image file size for Base64 embedding (10MB). |
| examples/python/rag/basic_chunking.py | 6 | and Python standard library. Ready for integration with any embedding |

### Retrieval/search/rerank

| file | line | text |
| --- | --- | --- |
| build-scripts/fetch_shaded_jar.py | 37 | match = version_regex.search(jar_path.name) |
| java/opendataloader-pdf-core/src/main/java/org/opendataloader/pdf/processors/DocumentProcessor.java | 645 | * search window matches that tolerance while still rejecting any |
| examples/python/rag/basic_chunking.py | 46 | Best for: Fine-grained retrieval, precise citations. |
| examples/python/rag/basic_chunking.py | 68 | Best for: Context-rich retrieval, topic-based search. |
| docs/hybrid/experiments/speed/subprocess_results.json | 175 | "markdown": "## At Home in Exile\n\nTo prepare myself for the journey from my home in Canberra, Australia, I visited the National Library's vast collection of maps. But I could not find Steinkirche, even in old German re |
| docs/hybrid/experiments/speed/subprocess_results.json | 182 | "markdown": "This description told me that Steinkirche was somewhere in the vicinity of Strehlen. Then, according to Elfriede's stories about walking her animals, ducks, geese and a goat to the railway station to meet vi |
| docs/hybrid/experiments/speed/subprocess_results.json | 224 | "markdown": "## 5. The dynamics\n\nThe next step is to construct a model for the dynamics. The idea, which essentially goes back to Boltzmann (see [12]), is that any given macro-state at any given time is extremely likel |
| docs/hybrid/experiments/speed/subprocess_results.json | 763 | "markdown": "An example of a conceptual map created by one of our interviewees\n\n<!-- image -->\n\nIt seemed at times that the remarkable freedom of writing freeform allowed these languages to form, but it was difficult |

### Wiki/graph/entity model

| file | line | text |
| --- | --- | --- |
| java/opendataloader-pdf-core/src/main/java/org/opendataloader/pdf/containers/StaticLayoutContainers.java | 19 | import org.verapdf.wcag.algorithms.entities.SemanticHeading; |
| java/opendataloader-pdf-core/src/main/java/org/opendataloader/pdf/entities/EnrichedImageChunk.java | 16 | package org.opendataloader.pdf.entities; |
| java/opendataloader-pdf-core/src/main/java/org/opendataloader/pdf/entities/EnrichedImageChunk.java | 18 | import org.verapdf.wcag.algorithms.entities.content.ImageChunk; |
| java/opendataloader-pdf-core/src/main/java/org/opendataloader/pdf/entities/SemanticFootnote.java | 16 | package org.opendataloader.pdf.entities; |
| java/opendataloader-pdf-core/src/main/java/org/opendataloader/pdf/entities/SemanticFootnote.java | 18 | import org.verapdf.wcag.algorithms.entities.SemanticParagraph; |
| java/opendataloader-pdf-core/src/main/java/org/opendataloader/pdf/entities/SemanticFormula.java | 16 | package org.opendataloader.pdf.entities; |
| java/opendataloader-pdf-core/src/main/java/org/opendataloader/pdf/entities/SemanticFormula.java | 18 | import org.verapdf.wcag.algorithms.entities.BaseObject; |
| java/opendataloader-pdf-core/src/main/java/org/opendataloader/pdf/entities/SemanticFormula.java | 19 | import org.verapdf.wcag.algorithms.entities.geometry.BoundingBox; |

### Memory/update lifecycle

| file | line | text |
| --- | --- | --- |
| scripts/bench.sh | 82 | uv sync --quiet |
| scripts/build-python.sh | 22 | # don't leave a stale copy in the package dir. |
| scripts/build-python.sh | 33 | uv sync --extra hybrid |
| scripts/verify-python-sdist.sh | 26 | echo "Error: multiple sdists found in $DIST_DIR. Remove stale ones first:" >&2 |
| scripts/experiments/docling_fastapi_bench.py | 83 | with tempfile.NamedTemporaryFile(suffix=".pdf", delete=False) as tmp: |
| scripts/experiments/docling_subprocess_bench.py | 86 | with tempfile.NamedTemporaryFile(suffix=".pdf", delete=False) as tmp: |
| scripts/experiments/docling_subprocess_bench.py | 174 | with tempfile.NamedTemporaryFile(mode="w", suffix=".py", delete=False) as f: |
| node/opendataloader-pdf/src/cli-options.generated.ts | 38 | program.option('--hybrid-hancom-ai-image-cache <value>', 'Page image cache backing. Requires --hybrid=hancom-ai. Values: memory (default), disk'); |

### Provenance/citation/evidence

| file | line | text |
| --- | --- | --- |
| java/opendataloader-pdf-core/src/main/java/org/opendataloader/pdf/entities/EnrichedImageChunk.java | 36 | * and downstream evidence-report badging — a reviewer treats a human-authored |
| java/opendataloader-pdf-core/src/main/java/org/opendataloader/pdf/entities/SemanticFootnote.java | 21 | * Represents a footnote/endnote element. |
| java/opendataloader-pdf-core/src/main/java/org/opendataloader/pdf/html/HtmlGenerator.java | 247 | // readers skip it, and our evidence-report flags it as |
| java/opendataloader-pdf-core/src/main/java/org/opendataloader/pdf/hybrid/DoclingFastServerClient.java | 245 | * elements for each page based on the "prov" (provenance) information. |
| java/opendataloader-pdf-core/src/main/java/org/opendataloader/pdf/hybrid/DoclingSchemaTransformer.java | 55 | * <li>texts (label: caption, footnote) → SemanticParagraph</li> |
| java/opendataloader-pdf-core/src/main/java/org/opendataloader/pdf/hybrid/DoclingSchemaTransformer.java | 86 | private static final String LABEL_FOOTNOTE = "footnote"; |
| java/opendataloader-pdf-core/src/main/java/org/opendataloader/pdf/hybrid/DoclingSchemaTransformer.java | 236 | * Extracts page number from provenance info. |
| java/opendataloader-pdf-core/src/main/java/org/opendataloader/pdf/hybrid/DoclingSchemaTransformer.java | 261 | // Get provenance for position info |

### Evaluation/observability

| file | line | text |
| --- | --- | --- |
| scripts/bench.sh | 2 | # Benchmark script for opendataloader-pdf |
| scripts/bench.sh | 4 | # Clones opendataloader-bench and runs benchmark against locally built JAR. |
| scripts/bench.sh | 7 | # ./scripts/bench.sh # Run full benchmark |
| scripts/bench.sh | 73 | # Step 4: Run benchmark with JAR |
| scripts/bench.sh | 74 | echo "Running benchmark with JAR: $JAR_PATH" |
| scripts/experiments/docling_baseline_bench.py | 2 | """Baseline benchmark using docling-serve HTTP API. |
| scripts/experiments/docling_baseline_bench.py | 24 | PDF_DIR = Path(__file__).parent.parent.parent / "tests" / "benchmark" / "pdfs" |
| scripts/experiments/docling_baseline_bench.py | 52 | """Run baseline benchmark.""" |

### Agent/MCP/tool surface

| file | line | text |
| --- | --- | --- |
| python/opendataloader-pdf-mcp/src/opendataloader_pdf_mcp/__init__.py | 1 | """MCP server for OpenDataLoader PDF.""" |
| python/opendataloader-pdf-mcp/src/opendataloader_pdf_mcp/server.py | 1 | """MCP server for OpenDataLoader PDF.""" |
| python/opendataloader-pdf-mcp/src/opendataloader_pdf_mcp/server.py | 7 | from mcp.server.fastmcp import FastMCP |
| python/opendataloader-pdf-mcp/src/opendataloader_pdf_mcp/server.py | 11 | mcp = FastMCP("opendataloader-pdf") |
| python/opendataloader-pdf-mcp/src/opendataloader_pdf_mcp/server.py | 14 | @mcp.tool() |
| python/opendataloader-pdf-mcp/src/opendataloader_pdf_mcp/server.py | 175 | """Run the MCP server.""" |
| python/opendataloader-pdf-mcp/src/opendataloader_pdf_mcp/server.py | 176 | mcp.run() |
| java/opendataloader-pdf-core/src/main/java/org/opendataloader/pdf/containers/StaticLayoutContainers.java | 193 | // run on workers — matches the CLAUDE.md ThreadLocal-propagation gotcha. |

## Gap

_없음_
