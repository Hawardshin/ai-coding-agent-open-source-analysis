# yusufkaraaslan/Skill_Seekers 코드 레벨 분석

생성일: 2026-06-17T23:31:48.468Z

## 기본 판정

| 항목 | 값 |
| --- | --- |
| type | graph-rag/kg |
| maturity | A integrated platform (106) |
| stars | 14134 |
| language | Python |
| tags | document-chat, agent-knowledge, korea-signal |
| files/code/source | 2927/472/269 |
| tests/ci | 120/10 |
| local path | sources/yusufkaraaslan__Skill_Seekers |

## 파이프라인 단계

| 단계 | 상태 | matched files | source files | evidence |
| --- | --- | --- | --- | --- |
| Ingestion/source intake | code | 378 | 116 | src/skill_seekers/benchmark/runner.py:65 with bench.timer("scrape"): |
| Parsing/OCR/document extraction | code | 223 | 65 | src/skill_seekers/cli/__init__.py:11 - pdf_scraper: Extract documentation from PDF files |
| Chunking/splitting | code | 104 | 35 | src/skill_seekers/cli/chat_scraper.py:1320 Each section represents a chunk of conversation from a single |
| Embedding/vector index | code | 193 | 31 | src/skill_seekers/cli/embedding_pipeline.py:3 Custom Embedding Pipeline |
| Retrieval/search/rerank | code | 146 | 52 | src/skill_seekers/benchmark/runner.py:307 ts_match = re.search(r"_\d{8}_\d{6}$", stem) |
| Wiki/graph/entity model | code | 86 | 16 | src/skill_seekers/cli/codebase_scraper.py:96 "code_of_conduct": "community", |
| Memory/update lifecycle | code | 373 | 107 | src/skill_seekers/benchmark/__init__.py:12 - Memory usage tracking |
| Provenance/citation/evidence | code | 70 | 32 | src/skill_seekers/cli/ai_enhancer.py:173 desc += f"\n Evidence: {', '.join(p.get('evidence', []))}" |
| Evaluation/observability | code | 131 | 14 | src/skill_seekers/benchmark/__init__.py:18 from skill_seekers.benchmark import Benchmark |
| Agent/MCP/tool surface | code | 421 | 123 | src/skill_seekers/__init__.py:2 Skill Seekers - Convert documentation, GitHub repos, and PDFs into Claude AI skills. |

## 의존성 신호

- LLM/app framework: openai, haystack-ai, langchain, langchain-community, langchain-openai, llama-index, llama-index-core, llama-index-llms-openai
- Vector/search store: chromadb, faiss-cpu, pinecone-client, qdrant-client, weaviate-client, pinecone
- Graph/KG store: networkx
- Document parsing/OCR: beautifulsoup4, PyMuPDF, pytesseract, mammoth, python-docx
- Persistence/database: sqlalchemy

## 주요 파일 후보

### Ingestion/source intake

- `src/skill_seekers/benchmark/runner.py`
- `src/skill_seekers/cli/__init__.py`
- `src/skill_seekers/cli/asciidoc_scraper.py`
- `src/skill_seekers/cli/benchmark_cli.py`
- `src/skill_seekers/cli/browser_renderer.py`
- `src/skill_seekers/cli/chat_scraper.py`
- `src/skill_seekers/cli/cloud_storage_cli.py`
- `src/skill_seekers/cli/codebase_scraper.py`
- `src/skill_seekers/cli/config_command.py`
- `src/skill_seekers/cli/conflict_detector.py`
- `src/skill_seekers/cli/confluence_scraper.py`
- `src/skill_seekers/cli/create_command.py`
- ... 6 more

### Parsing/OCR/document extraction

- `src/skill_seekers/cli/__init__.py`
- `src/skill_seekers/cli/chat_scraper.py`
- `src/skill_seekers/cli/codebase_scraper.py`
- `src/skill_seekers/cli/config_validator.py`
- `src/skill_seekers/cli/confluence_scraper.py`
- `src/skill_seekers/cli/create_command.py`
- `src/skill_seekers/cli/dependency_analyzer.py`
- `src/skill_seekers/cli/doc_scraper.py`
- `src/skill_seekers/cli/doctor.py`
- `src/skill_seekers/cli/document_skill_builder.py`
- `src/skill_seekers/cli/enhance_skill_local.py`
- `src/skill_seekers/cli/enhance_skill.py`
- ... 6 more

### Chunking/splitting

- `src/skill_seekers/cli/chat_scraper.py`
- `src/skill_seekers/cli/code_analyzer.py`
- `src/skill_seekers/cli/create_command.py`
- `src/skill_seekers/cli/defaults.py`
- `src/skill_seekers/cli/enhance_skill_local.py`
- `src/skill_seekers/cli/enhance_skill.py`
- `src/skill_seekers/cli/incremental_updater.py`
- `src/skill_seekers/cli/openapi_scraper.py`
- `src/skill_seekers/cli/opencode_skill_splitter.py`
- `src/skill_seekers/cli/package_skill.py`
- `src/skill_seekers/cli/pdf_extractor_poc.py`
- `src/skill_seekers/cli/rag_chunker.py`
- ... 6 more

### Embedding/vector index

- `src/skill_seekers/cli/embedding_pipeline.py`
- `src/skill_seekers/embedding/__init__.py`
- `src/skill_seekers/embedding/cache.py`
- `src/skill_seekers/embedding/generator.py`
- `src/skill_seekers/embedding/models.py`
- `src/skill_seekers/embedding/server.py`
- `src/skill_seekers/benchmark/__init__.py`
- `src/skill_seekers/benchmark/runner.py`
- `src/skill_seekers/cli/benchmark_cli.py`
- `src/skill_seekers/cli/code_analyzer.py`
- `src/skill_seekers/cli/doctor.py`
- `src/skill_seekers/cli/epub_scraper.py`
- ... 6 more

### Retrieval/search/rerank

- `src/skill_seekers/benchmark/runner.py`
- `src/skill_seekers/cli/agent_client.py`
- `src/skill_seekers/cli/asciidoc_scraper.py`
- `src/skill_seekers/cli/code_analyzer.py`
- `src/skill_seekers/cli/codebase_scraper.py`
- `src/skill_seekers/cli/config_enhancer.py`
- `src/skill_seekers/cli/config_extractor.py`
- `src/skill_seekers/cli/confluence_scraper.py`
- `src/skill_seekers/cli/dependency_analyzer.py`
- `src/skill_seekers/cli/enhancement_workflow.py`
- `src/skill_seekers/cli/how_to_guide_builder.py`
- `src/skill_seekers/cli/html_scraper.py`
- ... 6 more

### Wiki/graph/entity model

- `src/skill_seekers/cli/codebase_scraper.py`
- `src/skill_seekers/cli/confluence_scraper.py`
- `src/skill_seekers/cli/epub_scraper.py`
- `src/skill_seekers/cli/generate_router.py`
- `src/skill_seekers/cli/notion_scraper.py`
- `src/skill_seekers/cli/pattern_recognizer.py`
- `src/skill_seekers/cli/scan_command.py`
- `src/skill_seekers/mcp/server_fastmcp.py`
- `src/skill_seekers/mcp/server_legacy.py`
- `src/skill_seekers/mcp/server.py`
- `src/skill_seekers/services/source_manager.py`
- `src/skill_seekers/cli/parsers/scan_parser.py`
- ... 6 more

### Memory/update lifecycle

- `src/skill_seekers/benchmark/__init__.py`
- `src/skill_seekers/benchmark/framework.py`
- `src/skill_seekers/benchmark/models.py`
- `src/skill_seekers/benchmark/runner.py`
- `src/skill_seekers/cli/ai_enhancer.py`
- `src/skill_seekers/cli/benchmark_cli.py`
- `src/skill_seekers/cli/chat_scraper.py`
- `src/skill_seekers/cli/cloud_storage_cli.py`
- `src/skill_seekers/cli/codebase_scraper.py`
- `src/skill_seekers/cli/config_enhancer.py`
- `src/skill_seekers/cli/config_extractor.py`
- `src/skill_seekers/cli/config_manager.py`
- ... 6 more

### Provenance/citation/evidence

- `src/skill_seekers/cli/ai_enhancer.py`
- `src/skill_seekers/cli/architectural_pattern_detector.py`
- `src/skill_seekers/cli/asciidoc_scraper.py`
- `src/skill_seekers/cli/cloud_storage_cli.py`
- `src/skill_seekers/cli/conflict_detector.py`
- `src/skill_seekers/cli/dependency_analyzer.py`
- `src/skill_seekers/cli/document_skill_builder.py`
- `src/skill_seekers/cli/enhance_skill_local.py`
- `src/skill_seekers/cli/enhance_skill.py`
- `src/skill_seekers/cli/jupyter_scraper.py`
- `src/skill_seekers/cli/pattern_recognizer.py`
- `src/skill_seekers/cli/scan_command.py`
- ... 6 more

### Evaluation/observability

- `src/skill_seekers/benchmark/__init__.py`
- `src/skill_seekers/benchmark/framework.py`
- `src/skill_seekers/benchmark/models.py`
- `src/skill_seekers/benchmark/runner.py`
- `src/skill_seekers/cli/benchmark_cli.py`
- `src/skill_seekers/cli/chat_scraper.py`
- `src/skill_seekers/cli/jupyter_scraper.py`
- `src/skill_seekers/cli/pdf_scraper.py`
- `src/skill_seekers/cli/quality_metrics.py`
- `src/skill_seekers/cli/adaptors/faiss_helpers.py`
- `src/skill_seekers/cli/adaptors/pinecone_adaptor.py`
- `src/skill_seekers/cli/adaptors/qdrant.py`
- ... 6 more

### Agent/MCP/tool surface

- `src/skill_seekers/__init__.py`
- `src/skill_seekers/cli/agent_client.py`
- `src/skill_seekers/cli/ai_enhancer.py`
- `src/skill_seekers/cli/architectural_pattern_detector.py`
- `src/skill_seekers/cli/codebase_scraper.py`
- `src/skill_seekers/cli/config_command.py`
- `src/skill_seekers/cli/config_enhancer.py`
- `src/skill_seekers/cli/config_extractor.py`
- `src/skill_seekers/cli/config_manager.py`
- `src/skill_seekers/cli/config_validator.py`
- `src/skill_seekers/cli/constants.py`
- `src/skill_seekers/cli/create_command.py`
- ... 6 more

## Evidence lines

### Ingestion/source intake

| file | line | text |
| --- | --- | --- |
| src/skill_seekers/benchmark/runner.py | 65 | with bench.timer("scrape"): |
| src/skill_seekers/cli/__init__.py | 16 | - upload_skill: Upload skills to target platform |
| src/skill_seekers/cli/asciidoc_scraper.py | 837 | f.write("---\n\n**Generated by Skill Seeker** \| AsciiDoc Scraper\n") |
| src/skill_seekers/cli/benchmark_cli.py | 107 | # Upload benchmark |
| src/skill_seekers/cli/benchmark_cli.py | 108 | with bench.timer("upload"): |
| src/skill_seekers/cli/browser_renderer.py | 120 | self._context = self._browser.new_context(user_agent="Mozilla/5.0 (Documentation Scraper)") |
| src/skill_seekers/cli/chat_scraper.py | 1651 | f.write(f"**Generated by Skill Seeker** \| {platform_label} Chat Scraper\n") |
| src/skill_seekers/cli/cloud_storage_cli.py | 5 | Upload, download, and manage skills in cloud storage (S3, GCS, Azure). |

### Parsing/OCR/document extraction

| file | line | text |
| --- | --- | --- |
| src/skill_seekers/cli/__init__.py | 11 | - pdf_scraper: Extract documentation from PDF files |
| src/skill_seekers/cli/chat_scraper.py | 215 | Follows the same pipeline pattern as the EPUB, Jupyter, and PPTX scrapers: |
| src/skill_seekers/cli/codebase_scraper.py | 1140 | # Use relative path from directory for better graph readability |
| src/skill_seekers/cli/config_validator.py | 8 | - pdf (PDF document scraping) |
| src/skill_seekers/cli/config_validator.py | 10 | - word (Word .docx document scraping) |
| src/skill_seekers/cli/config_validator.py | 17 | - pptx (PowerPoint presentation extraction) |
| src/skill_seekers/cli/config_validator.py | 48 | "pdf", |
| src/skill_seekers/cli/config_validator.py | 57 | "pptx", |

### Chunking/splitting

| file | line | text |
| --- | --- | --- |
| src/skill_seekers/cli/chat_scraper.py | 1320 | Each section represents a chunk of conversation from a single |
| src/skill_seekers/cli/code_analyzer.py | 1767 | # Extract vendor name (first segment) |
| src/skill_seekers/cli/create_command.py | 626 | skill-seekers create <source> --chunk-for-rag |
| src/skill_seekers/cli/defaults.py | 35 | fallback: returned when any segment is missing |
| src/skill_seekers/cli/enhance_skill_local.py | 340 | chunk = lines[i : min(i + 4, len(lines))] |
| src/skill_seekers/cli/enhance_skill_local.py | 341 | chunk_chars = sum(len(line_text) for line_text in chunk) |
| src/skill_seekers/cli/enhance_skill_local.py | 344 | result.extend(chunk) |
| src/skill_seekers/cli/enhance_skill.py | 353 | - Group by TOPIC, not by timestamp (e.g., "Setting Up the State Machine" not "Segment 3") |

### Embedding/vector index

| file | line | text |
| --- | --- | --- |
| src/skill_seekers/cli/embedding_pipeline.py | 3 | Custom Embedding Pipeline |
| src/skill_seekers/cli/embedding_pipeline.py | 5 | Provides flexible embedding generation with multiple providers, |
| src/skill_seekers/cli/embedding_pipeline.py | 21 | """Configuration for embedding generation.""" |
| src/skill_seekers/cli/embedding_pipeline.py | 34 | """Result of embedding generation.""" |
| src/skill_seekers/cli/embedding_pipeline.py | 36 | embeddings: list[list[float]] |
| src/skill_seekers/cli/embedding_pipeline.py | 46 | """Track embedding generation costs.""" |
| src/skill_seekers/cli/embedding_pipeline.py | 80 | """Abstract base class for embedding providers.""" |
| src/skill_seekers/cli/embedding_pipeline.py | 84 | """Generate embeddings for texts.""" |

### Retrieval/search/rerank

| file | line | text |
| --- | --- | --- |
| src/skill_seekers/benchmark/runner.py | 307 | ts_match = re.search(r"_\d{8}_\d{6}$", stem) |
| src/skill_seekers/cli/agent_client.py | 741 | header = header_re.search(raw_output, content_start) |
| src/skill_seekers/cli/asciidoc_scraper.py | 339 | open_m = RE_LISTING_DELIM.search(text, attr_m.end()) |
| src/skill_seekers/cli/asciidoc_scraper.py | 346 | close_m = re.search( |
| src/skill_seekers/cli/asciidoc_scraper.py | 364 | close_m = re.search(r"^" + re.escape(delim) + r"$", text[m.end() + 1 :], re.MULTILINE) |
| src/skill_seekers/cli/asciidoc_scraper.py | 380 | close_m = re.search(r"^" + re.escape(delim) + r"$", text[m.end() + 1 :], re.MULTILINE) |
| src/skill_seekers/cli/code_analyzer.py | 1443 | is_suspend = re.search(r"\bsuspend\b", decl_prefix) is not None |
| src/skill_seekers/cli/code_analyzer.py | 1898 | script_match = re.search( |

### Wiki/graph/entity model

| file | line | text |
| --- | --- | --- |
| src/skill_seekers/cli/codebase_scraper.py | 96 | "code_of_conduct": "community", |
| src/skill_seekers/cli/confluence_scraper.py | 15 | to the extracted export directory containing ``entities.xml`` or HTML files. |
| src/skill_seekers/cli/confluence_scraper.py | 554 | - An ``entities.xml`` file (full XML export from admin) |
| src/skill_seekers/cli/confluence_scraper.py | 576 | # Check for entities.xml (full XML export) |
| src/skill_seekers/cli/confluence_scraper.py | 577 | entities_xml = export_dir / "entities.xml" |
| src/skill_seekers/cli/confluence_scraper.py | 581 | print(f" Parsed entities.xml: {len(pages)} pages") |
| src/skill_seekers/cli/confluence_scraper.py | 598 | "Expected either entities.xml or HTML files from Confluence export." |
| src/skill_seekers/cli/confluence_scraper.py | 660 | """Parse Confluence entities.xml export file. |

### Memory/update lifecycle

| file | line | text |
| --- | --- | --- |
| src/skill_seekers/benchmark/__init__.py | 12 | - Memory usage tracking |
| src/skill_seekers/benchmark/framework.py | 40 | self.memory: list[MemoryUsage] = [] |
| src/skill_seekers/benchmark/framework.py | 50 | """Add memory usage.""" |
| src/skill_seekers/benchmark/framework.py | 51 | self.memory.append(usage) |
| src/skill_seekers/benchmark/framework.py | 92 | memory=self.memory, |
| src/skill_seekers/benchmark/framework.py | 113 | # Track memory |
| src/skill_seekers/benchmark/framework.py | 114 | with benchmark.memory("process_data"): |
| src/skill_seekers/benchmark/framework.py | 165 | def memory(self, operation: str): |

### Provenance/citation/evidence

| file | line | text |
| --- | --- | --- |
| src/skill_seekers/cli/ai_enhancer.py | 173 | desc += f"\n Evidence: {', '.join(p.get('evidence', []))}" |
| src/skill_seekers/cli/ai_enhancer.py | 185 | 5. "confidence_boost": Confidence adjustment from -0.2 to +0.2 based on evidence quality |
| src/skill_seekers/cli/architectural_pattern_detector.py | 37 | evidence: list[str] # List of evidence supporting detection |
| src/skill_seekers/cli/architectural_pattern_detector.py | 60 | "evidence": p.evidence, |
| src/skill_seekers/cli/architectural_pattern_detector.py | 340 | # Build evidence |
| src/skill_seekers/cli/architectural_pattern_detector.py | 341 | evidence = [] |
| src/skill_seekers/cli/architectural_pattern_detector.py | 351 | evidence.append("Models directory with model classes") |
| src/skill_seekers/cli/architectural_pattern_detector.py | 356 | evidence.append("Views directory with view files") |

### Evaluation/observability

| file | line | text |
| --- | --- | --- |
| src/skill_seekers/benchmark/__init__.py | 18 | from skill_seekers.benchmark import Benchmark |
| src/skill_seekers/benchmark/__init__.py | 20 | # Create benchmark |
| src/skill_seekers/benchmark/__init__.py | 21 | benchmark = Benchmark("scraping-test") |
| src/skill_seekers/benchmark/__init__.py | 24 | with benchmark.timer("scrape_pages"): |
| src/skill_seekers/benchmark/__init__.py | 28 | report = benchmark.report() |
| src/skill_seekers/benchmark/__init__.py | 31 | from .framework import Benchmark, BenchmarkResult |
| src/skill_seekers/benchmark/__init__.py | 33 | from .models import BenchmarkReport, Metric |
| src/skill_seekers/benchmark/__init__.py | 36 | "Benchmark", |

### Agent/MCP/tool surface

| file | line | text |
| --- | --- | --- |
| src/skill_seekers/__init__.py | 2 | Skill Seekers - Convert documentation, GitHub repos, and PDFs into Claude AI skills. |
| src/skill_seekers/__init__.py | 5 | documentation from various sources into uploadable Claude AI skills. |
| src/skill_seekers/cli/agent_client.py | 8 | - API mode: Anthropic, Moonshot/Kimi, Google Gemini, OpenAI (via adaptor pattern) |
| src/skill_seekers/cli/agent_client.py | 9 | - LOCAL mode: Claude Code, Kimi Code, Codex, Copilot, OpenCode, custom agents |
| src/skill_seekers/cli/agent_client.py | 17 | # Or with explicit agent |
| src/skill_seekers/cli/agent_client.py | 18 | client = AgentClient(mode="local", agent="kimi") |
| src/skill_seekers/cli/agent_client.py | 37 | # Agent presets for LOCAL mode — THE single source of truth, also consumed by |
| src/skill_seekers/cli/agent_client.py | 41 | # directory by each consumer. "supports_skip_permissions" agents get |

## Gap

_없음_
