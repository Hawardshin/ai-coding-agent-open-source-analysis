# LearningCircuit/local-deep-research 코드 레벨 분석

생성일: 2026-06-17T23:31:37.722Z

## 기본 판정

| 항목 | 값 |
| --- | --- |
| type | rag-knowledge-platform |
| maturity | A integrated platform (108) |
| stars | 8493 |
| language | Python |
| tags | rag, document-chat, korea-signal |
| files/code/source | 2964/2519/667 |
| tests/ci | 120/75 |
| local path | sources/LearningCircuit__local-deep-research |

## 파이프라인 단계

| 단계 | 상태 | matched files | source files | evidence |
| --- | --- | --- | --- | --- |
| Ingestion/source intake | code | 93 | 21 | src/local_deep_research/database/library_init.py:76 "display_name": "User Upload", |
| Parsing/OCR/document extraction | code | 303 | 78 | src/local_deep_research/report_generator.py:225 """Truncate text at a sentence boundary to preserve readability. |
| Chunking/splitting | code | 93 | 30 | src/local_deep_research/citation_handlers/base_citation_handler.py:40 for chunk in self.llm.stream(prompt): |
| Embedding/vector index | code | 228 | 71 | src/local_deep_research/embeddings/__init__.py:2 Embedding providers for Local Deep Research. |
| Retrieval/search/rerank | code | 1028 | 277 | src/local_deep_research/constants.py:24 # Code-side single source of truth for the default search engine, used by |
| Wiki/graph/entity model | code | 143 | 42 | src/local_deep_research/search_system.py:66 - "browsecomp-entity": Entity-focused search for BrowseComp questions with knowledge graph building |
| Memory/update lifecycle | code | 1010 | 283 | src/local_deep_research/citation_handler.py:22 # Try to get from settings snapshot, default to standard |
| Provenance/citation/evidence | code | 270 | 84 | src/local_deep_research/citation_handler.py:10 Configurable citation handler that delegates to specific implementations. |
| Evaluation/observability | code | 506 | 122 | src/local_deep_research/citation_handler.py:60 "Using ForcedAnswerCitationHandler for better benchmark performance" |
| Agent/MCP/tool surface | code | 631 | 132 | src/local_deep_research/constants.py:8 # Honest, identifying User-Agent for APIs that prefer/require identification |

## 의존성 신호

- LLM/app framework: langchain, langchain-community, langchain-core, langchain-ollama, langchain-openai, langchain-anthropic, openai, sentence-transformers
- Vector/search store: faiss-cpu, elasticsearch
- Document parsing/OCR: beautifulsoup4, pypdf, pdfplumber, unstructured, docx, python-docx
- Persistence/database: sqlalchemy, sqlalchemy-utc

## 주요 파일 후보

### Ingestion/source intake

- `src/local_deep_research/database/library_init.py`
- `src/local_deep_research/document_loaders/bytes_loader.py`
- `src/local_deep_research/document_loaders/loader_registry.py`
- `src/local_deep_research/security/file_upload_validator.py`
- `src/local_deep_research/security/filename_sanitizer.py`
- `src/local_deep_research/security/rate_limiter.py`
- `src/local_deep_research/web/app_factory.py`
- `src/local_deep_research/database/models/library.py`
- `src/local_deep_research/research_library/downloaders/playwright_html.py`
- `src/local_deep_research/research_library/routes/rag_routes.py`
- `src/local_deep_research/research_library/services/library_service.py`
- `src/local_deep_research/research_library/services/pdf_storage_manager.py`
- ... 6 more

### Parsing/OCR/document extraction

- `src/local_deep_research/report_generator.py`
- `src/local_deep_research/api/client.py`
- `src/local_deep_research/content_fetcher/__init__.py`
- `src/local_deep_research/content_fetcher/fetcher.py`
- `src/local_deep_research/content_fetcher/url_classifier.py`
- `src/local_deep_research/document_loaders/__init__.py`
- `src/local_deep_research/document_loaders/loader_registry.py`
- `src/local_deep_research/document_loaders/xls_loader.py`
- `src/local_deep_research/document_loaders/yaml_loader.py`
- `src/local_deep_research/exporters/__init__.py`
- `src/local_deep_research/exporters/base.py`
- `src/local_deep_research/exporters/odt_exporter.py`
- ... 6 more

### Chunking/splitting

- `src/local_deep_research/citation_handlers/base_citation_handler.py`
- `src/local_deep_research/journal_quality/db.py`
- `src/local_deep_research/security/data_sanitizer.py`
- `src/local_deep_research/security/path_validator.py`
- `src/local_deep_research/security/safe_requests.py`
- `src/local_deep_research/utilities/openalex_enrichment.py`
- `src/local_deep_research/advanced_search_system/candidate_exploration/base_explorer.py`
- `src/local_deep_research/advanced_search_system/strategies/langgraph_agent_strategy.py`
- `src/local_deep_research/database/models/library.py`
- `src/local_deep_research/embeddings/splitters/text_splitter_registry.py`
- `src/local_deep_research/journal_quality/data_sources/base.py`
- `src/local_deep_research/research_library/routes/rag_routes.py`
- ... 6 more

### Embedding/vector index

- `src/local_deep_research/embeddings/__init__.py`
- `src/local_deep_research/embeddings/embeddings_config.py`
- `src/local_deep_research/embeddings/providers/__init__.py`
- `src/local_deep_research/embeddings/providers/base.py`
- `src/local_deep_research/embeddings/splitters/text_splitter_registry.py`
- `src/local_deep_research/web_search_engines/engines/local_embedding_manager.py`
- `src/local_deep_research/embeddings/providers/implementations/__init__.py`
- `src/local_deep_research/embeddings/providers/implementations/ollama.py`
- `src/local_deep_research/embeddings/providers/implementations/openai.py`
- `src/local_deep_research/embeddings/providers/implementations/sentence_transformers.py`
- `src/local_deep_research/web/static/js/embedding_settings.js`
- `src/local_deep_research/api/research_functions.py`
- ... 6 more

### Retrieval/search/rerank

- `src/local_deep_research/constants.py`
- `src/local_deep_research/report_generator.py`
- `src/local_deep_research/search_system_factory.py`
- `src/local_deep_research/search_system.py`
- `src/local_deep_research/advanced_search_system/__init__.py`
- `src/local_deep_research/api/benchmark_functions.py`
- `src/local_deep_research/api/client.py`
- `src/local_deep_research/api/research_functions.py`
- `src/local_deep_research/api/settings_utils.py`
- `src/local_deep_research/benchmarks/benchmark_functions.py`
- `src/local_deep_research/benchmarks/graders.py`
- `src/local_deep_research/benchmarks/runners.py`
- ... 6 more

### Wiki/graph/entity model

- `src/local_deep_research/search_system.py`
- `src/local_deep_research/api/client.py`
- `src/local_deep_research/chat/context.py`
- `src/local_deep_research/chat/service.py`
- `src/local_deep_research/citation_handlers/precision_extraction_handler.py`
- `src/local_deep_research/database/sqlcipher_utils.py`
- `src/local_deep_research/domain_classifier/classifier.py`
- `src/local_deep_research/error_handling/report_generator.py`
- `src/local_deep_research/security/url_validator.py`
- `src/local_deep_research/advanced_search_system/candidate_exploration/base_explorer.py`
- `src/local_deep_research/advanced_search_system/candidate_exploration/parallel_explorer.py`
- `src/local_deep_research/advanced_search_system/candidate_exploration/progressive_explorer.py`
- ... 6 more

### Memory/update lifecycle

- `src/local_deep_research/citation_handler.py`
- `src/local_deep_research/constants.py`
- `src/local_deep_research/report_generator.py`
- `src/local_deep_research/search_system_factory.py`
- `src/local_deep_research/search_system.py`
- `src/local_deep_research/api/research_functions.py`
- `src/local_deep_research/api/settings_utils.py`
- `src/local_deep_research/benchmarks/graders.py`
- `src/local_deep_research/chat/routes.py`
- `src/local_deep_research/chat/service.py`
- `src/local_deep_research/citation_handlers/base_citation_handler.py`
- `src/local_deep_research/citation_handlers/forced_answer_citation_handler.py`
- ... 6 more

### Provenance/citation/evidence

- `src/local_deep_research/citation_handler.py`
- `src/local_deep_research/constants.py`
- `src/local_deep_research/report_generator.py`
- `src/local_deep_research/search_system_factory.py`
- `src/local_deep_research/search_system.py`
- `src/local_deep_research/benchmarks/graders.py`
- `src/local_deep_research/citation_handlers/__init__.py`
- `src/local_deep_research/citation_handlers/base_citation_handler.py`
- `src/local_deep_research/citation_handlers/forced_answer_citation_handler.py`
- `src/local_deep_research/citation_handlers/precision_extraction_handler.py`
- `src/local_deep_research/citation_handlers/standard_citation_handler.py`
- `src/local_deep_research/document_loaders/bytes_loader.py`
- ... 6 more

### Evaluation/observability

- `src/local_deep_research/citation_handler.py`
- `src/local_deep_research/constants.py`
- `src/local_deep_research/search_system.py`
- `src/local_deep_research/api/benchmark_functions.py`
- `src/local_deep_research/api/client.py`
- `src/local_deep_research/api/research_functions.py`
- `src/local_deep_research/benchmarks/__init__.py`
- `src/local_deep_research/benchmarks/benchmark_functions.py`
- `src/local_deep_research/benchmarks/graders.py`
- `src/local_deep_research/benchmarks/metrics.py`
- `src/local_deep_research/benchmarks/runners.py`
- `src/local_deep_research/benchmarks/templates.py`
- ... 6 more

### Agent/MCP/tool surface

- `src/local_deep_research/constants.py`
- `src/local_deep_research/report_generator.py`
- `src/local_deep_research/search_system_factory.py`
- `src/local_deep_research/search_system.py`
- `src/local_deep_research/api/research_functions.py`
- `src/local_deep_research/api/settings_utils.py`
- `src/local_deep_research/benchmarks/graders.py`
- `src/local_deep_research/chat/routes.py`
- `src/local_deep_research/config/llm_config.py`
- `src/local_deep_research/config/thread_settings.py`
- `src/local_deep_research/content_fetcher/fetcher.py`
- `src/local_deep_research/database/thread_metrics.py`
- ... 6 more

## Evidence lines

### Ingestion/source intake

| file | line | text |
| --- | --- | --- |
| src/local_deep_research/database/library_init.py | 76 | "display_name": "User Upload", |
| src/local_deep_research/database/library_init.py | 78 | "icon": "upload", |
| src/local_deep_research/document_loaders/bytes_loader.py | 26 | filename: str = "upload", |
| src/local_deep_research/document_loaders/bytes_loader.py | 52 | filename = "upload" |
| src/local_deep_research/document_loaders/bytes_loader.py | 123 | filename: str = "upload", |
| src/local_deep_research/document_loaders/loader_registry.py | 109 | # ODT can be advertised as supported, accept an upload, and only then fail with |
| src/local_deep_research/document_loaders/loader_registry.py | 114 | # format is omitted and the upload path returns a clear "Unsupported format" |
| src/local_deep_research/security/file_upload_validator.py | 2 | Centralized file upload validation for security. |

### Parsing/OCR/document extraction

| file | line | text |
| --- | --- | --- |
| src/local_deep_research/report_generator.py | 225 | """Truncate text at a sentence boundary to preserve readability. |
| src/local_deep_research/api/client.py | 113 | # Simple CSRF extraction without BeautifulSoup dependency |
| src/local_deep_research/content_fetcher/__init__.py | 7 | - Direct PDF links |
| src/local_deep_research/content_fetcher/fetcher.py | 7 | - Direct PDF links |
| src/local_deep_research/content_fetcher/fetcher.py | 22 | _NO_HTML_FALLBACK = {URLType.HTML, URLType.DOI, URLType.INVALID, URLType.PDF} |
| src/local_deep_research/content_fetcher/fetcher.py | 115 | elif url_type == URLType.PDF: |
| src/local_deep_research/content_fetcher/fetcher.py | 213 | prefer_text: If True, prefer text extraction over PDF download |
| src/local_deep_research/content_fetcher/fetcher.py | 305 | content_type = ContentType.TEXT if prefer_text else ContentType.PDF |

### Chunking/splitting

| file | line | text |
| --- | --- | --- |
| src/local_deep_research/citation_handlers/base_citation_handler.py | 40 | for chunk in self.llm.stream(prompt): |
| src/local_deep_research/citation_handlers/base_citation_handler.py | 42 | chunk |
| src/local_deep_research/citation_handlers/base_citation_handler.py | 43 | if isinstance(chunk, str) |
| src/local_deep_research/citation_handlers/base_citation_handler.py | 44 | else getattr(chunk, "content", str(chunk)) |
| src/local_deep_research/citation_handlers/base_citation_handler.py | 76 | "Stream failed before any chunk; falling back to invoke()" |
| src/local_deep_research/journal_quality/db.py | 446 | Chunked at 900 params per chunk. Defensive: SQLite's actual |
| src/local_deep_research/journal_quality/db.py | 470 | CHUNK = 900 |
| src/local_deep_research/journal_quality/db.py | 472 | for i in range(0, len(uniq), CHUNK): |

### Embedding/vector index

| file | line | text |
| --- | --- | --- |
| src/local_deep_research/embeddings/__init__.py | 2 | Embedding providers for Local Deep Research. |
| src/local_deep_research/embeddings/__init__.py | 4 | This module provides a unified interface for different embedding providers, |
| src/local_deep_research/embeddings/__init__.py | 12 | from local_deep_research.embeddings import get_embeddings |
| src/local_deep_research/embeddings/__init__.py | 14 | embeddings = get_embeddings( |
| src/local_deep_research/embeddings/__init__.py | 16 | model="text-embedding-3-small", |
| src/local_deep_research/embeddings/embeddings_config.py | 2 | Central configuration for embedding providers. |
| src/local_deep_research/embeddings/embeddings_config.py | 5 | for different embedding providers, similar to llm_config.py. |
| src/local_deep_research/embeddings/embeddings_config.py | 10 | from langchain_core.embeddings import Embeddings |

### Retrieval/search/rerank

| file | line | text |
| --- | --- | --- |
| src/local_deep_research/constants.py | 24 | # Code-side single source of truth for the default search engine, used by |
| src/local_deep_research/constants.py | 25 | # every reader that needs a fallback for a MISSING ``search.tool`` setting |
| src/local_deep_research/constants.py | 91 | # --- Default RAG / Local Search text separators --- |
| src/local_deep_research/constants.py | 111 | "Your research history indexed for AI-powered semantic search. " |
| src/local_deep_research/constants.py | 114 | "your previous research. Used by the History page search when in " |
| src/local_deep_research/constants.py | 118 | # --- Available search strategies (UI-facing) --- |
| src/local_deep_research/constants.py | 132 | "description": "Fast & precise Q&A with iterative search. Good for complex queries requiring specific answers.", |
| src/local_deep_research/constants.py | 152 | "description": "Agentic research where the LLM autonomously decides what to search, which engines to use, and when to synthesize. Supports all search engines as tools.", |

### Wiki/graph/entity model

| file | line | text |
| --- | --- | --- |
| src/local_deep_research/search_system.py | 66 | - "browsecomp-entity": Entity-focused search for BrowseComp questions with knowledge graph building |
| src/local_deep_research/api/client.py | 389 | Submit your benchmark results to help the community. |
| src/local_deep_research/api/client.py | 428 | Get community benchmark results. |
| src/local_deep_research/chat/context.py | 105 | - key_entities: Important entities mentioned |
| src/local_deep_research/chat/context.py | 272 | # Add key entities and topics |
| src/local_deep_research/chat/context.py | 273 | entities = self.accumulated_context.get("key_entities", []) |
| src/local_deep_research/chat/context.py | 274 | if entities: |
| src/local_deep_research/chat/context.py | 275 | parts.append(f"Key entities discussed: {', '.join(entities[:10])}") |

### Memory/update lifecycle

| file | line | text |
| --- | --- | --- |
| src/local_deep_research/citation_handler.py | 22 | # Try to get from settings snapshot, default to standard |
| src/local_deep_research/constants.py | 47 | Lifecycle:: |
| src/local_deep_research/constants.py | 66 | # --- Active lifecycle states --- |
| src/local_deep_research/report_generator.py | 48 | settings_snapshot: Optional settings snapshot for configurable values. |
| src/local_deep_research/report_generator.py | 69 | # Load context settings from snapshot or use defaults |
| src/local_deep_research/report_generator.py | 485 | # strategies that cache it at __init__ time |
| src/local_deep_research/report_generator.py | 588 | # kept here so in-memory consumers (MCP `generate_report`, |
| src/local_deep_research/search_system_factory.py | 21 | """Get a setting value from the snapshot, handling nested dict structure.""" |

### Provenance/citation/evidence

| file | line | text |
| --- | --- | --- |
| src/local_deep_research/citation_handler.py | 10 | Configurable citation handler that delegates to specific implementations. |
| src/local_deep_research/citation_handler.py | 23 | if "citation.handler_type" in self.settings_snapshot: |
| src/local_deep_research/citation_handler.py | 24 | value = self.settings_snapshot["citation.handler_type"] |
| src/local_deep_research/citation_handler.py | 41 | """Create the appropriate citation handler based on type.""" |
| src/local_deep_research/citation_handler.py | 79 | f"Unknown citation handler type: {handler_type}, falling back to standard" |
| src/local_deep_research/constants.py | 127 | "description": "Comprehensive research with inline citations. Focuses on finding and extracting information from authoritative sources.", |
| src/local_deep_research/constants.py | 137 | "description": "Detailed long-form output with citations. Uses standard citation handler for comprehensive answers.", |
| src/local_deep_research/constants.py | 225 | # if it's in DOAJ (evidence-based) OR has h-index strictly greater than |

### Evaluation/observability

| file | line | text |
| --- | --- | --- |
| src/local_deep_research/citation_handler.py | 60 | "Using ForcedAnswerCitationHandler for better benchmark performance" |
| src/local_deep_research/citation_handler.py | 66 | if handler_type in ["precision", "precision_extraction", "simpleqa"]: |
| src/local_deep_research/constants.py | 63 | the benchmark subsystem (BenchmarkStatus, BenchmarkTaskStatus). |
| src/local_deep_research/constants.py | 229 | # metric, not an integrity signal. Reviews of predatory-vs-legitimate |
| src/local_deep_research/search_system.py | 61 | - "early-stop-constrained": Parallel constraint search with immediate evaluation and early stopping at 99% confidence |
| src/local_deep_research/search_system.py | 64 | - "concurrent-dual-confidence": Concurrent search & evaluation with progressive constraint relaxation |
| src/local_deep_research/search_system.py | 67 | - "iterative-refinement": Iteratively refines results using LLM evaluation and follow-up queries |
| src/local_deep_research/search_system.py | 77 | programmatic_mode: If True, disables database operations and metrics tracking. |

### Agent/MCP/tool surface

| file | line | text |
| --- | --- | --- |
| src/local_deep_research/constants.py | 8 | # Honest, identifying User-Agent for APIs that prefer/require identification |
| src/local_deep_research/constants.py | 15 | # Browser-like User-Agent for sites that may block bot requests |
| src/local_deep_research/constants.py | 145 | "name": "mcp", |
| src/local_deep_research/constants.py | 146 | "label": "MCP ReAct (Agentic research - LLM decides tools)", |
| src/local_deep_research/constants.py | 150 | "name": "langgraph-agent", |
| src/local_deep_research/constants.py | 151 | "label": "LangGraph Agent (Autonomous agentic research)", |
| src/local_deep_research/report_generator.py | 588 | # kept here so in-memory consumers (MCP `generate_report`, |
| src/local_deep_research/search_system_factory.py | 338 | # MCP strategy (ReAct pattern - agentic research) |

## Gap

_없음_
