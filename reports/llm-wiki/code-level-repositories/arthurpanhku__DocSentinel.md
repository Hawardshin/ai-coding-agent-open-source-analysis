# arthurpanhku/DocSentinel 코드 레벨 분석

생성일: 2026-06-17T23:31:13.756Z

## 기본 판정

| 항목 | 값 |
| --- | --- |
| type | rag-knowledge-platform |
| maturity | A integrated platform (102) |
| stars | 88 |
| language | Python |
| tags | rag, knowledge-base, document-chat, agent-knowledge, korea-signal |
| files/code/source | 127/66/54 |
| tests/ci | 12/4 |
| local path | sources/arthurpanhku__DocSentinel |

## 파이프라인 단계

| 단계 | 상태 | matched files | source files | evidence |
| --- | --- | --- | --- | --- |
| Ingestion/source intake | code | 22 | 4 | app/api/kb.py:1 """Knowledge base API: upload document, query (hybrid RAG).""" |
| Parsing/OCR/document extraction | code | 35 | 7 | app/mcp_server.py:17 Assess a security document (PDF, Word, etc.) and return a risk report. |
| Chunking/splitting | code | 9 | 4 | app/agent/orchestrator.py:89 def _split_text_with_overlap(text: str, chunk_size: int, overlap: int) -> list[str]: |
| Embedding/vector index | code | 30 | 7 | app/mcp_server.py:75 return json.dumps({"status": "active", "backend": "chroma"}) |
| Retrieval/search/rerank | code | 19 | 7 | app/mcp_server.py:56 query: The search query (e.g., "password complexity requirements"). |
| Wiki/graph/entity model | code | 13 | 3 | app/kb/__init__.py:1 from .graph_rag import GraphRAGService, get_graph_rag_service |
| Memory/update lifecycle | code | 29 | 14 | app/agent/orchestrator.py:357 "and merge remediations. " |
| Provenance/citation/evidence | code | 16 | 4 | app/agent/orchestrator.py:2 Agent orchestration: multi-agent flow with citations, confidence, and history reuse. |
| Evaluation/observability | code | 7 | 1 | frontend/src/pages/Dashboard.tsx:90 <Metric label="Total tasks" value={tasks.length} icon={<FileCheck2 className="h-4 w-4" />} /> |
| Agent/MCP/tool surface | code | 47 | 13 | app/mcp_server.py:4 from mcp.server.fastmcp import FastMCP |

## 의존성 신호

- LLM/app framework: langchain, langchain-openai, langchain-anthropic, langchain-community, langchain-core, sentence-transformers, openai, langchain-text-splitters
- Vector/search store: chromadb
- Document parsing/OCR: pymupdf, python-docx, PyPDF2

## 주요 파일 후보

### Ingestion/source intake

- `app/api/kb.py`
- `app/core/config.py`
- `app/kb/service.py`
- `frontend/src/pages/KnowledgeBase.tsx`
- `.github/workflows/ci.yml`
- `docs/02-api-specification.yaml`
- `ARCHITECTURE.md`
- `CHANGELOG.md`
- `README_de.md`
- `README_fr.md`
- `README.md`
- `SPEC.md`
- ... 6 more

### Parsing/OCR/document extraction

- `app/mcp_server.py`
- `app/kb/service.py`
- `app/models/parser.py`
- `app/parser/service.py`
- `scripts/generate_test_pdfs.py`
- `frontend/src/pages/Assessments.tsx`
- `frontend/src/pages/KnowledgeBase.tsx`
- `pyproject.toml`
- `tests/test_assessments_api.py`
- `tests/test_graph_rag.py`
- `tests/test_orchestrator.py`
- `tests/test_parser_docling.py`
- ... 6 more

### Chunking/splitting

- `app/agent/orchestrator.py`
- `app/kb/graph_rag.py`
- `app/kb/service.py`
- `frontend/src/pages/KnowledgeBase.tsx`
- `tests/test_kb_history.py`
- `tests/test_orchestrator.py`
- `ARCHITECTURE.md`
- `SPEC.md`
- `docs/01-architecture-and-tech-stack.md`

### Embedding/vector index

- `app/mcp_server.py`
- `app/agent/orchestrator.py`
- `app/api/kb.py`
- `app/core/config.py`
- `app/kb/graph_rag.py`
- `app/kb/service.py`
- `frontend/src/pages/KnowledgeBase.tsx`
- `docker-compose.yml`
- `pyproject.toml`
- `tests/test_graph_rag.py`
- `tests/test_kb_history.py`
- `ARCHITECTURE.md`
- ... 6 more

### Retrieval/search/rerank

- `app/mcp_server.py`
- `app/api/assessments.py`
- `app/api/kb.py`
- `app/core/guardrails.py`
- `app/kb/graph_rag.py`
- `app/kb/service.py`
- `frontend/src/pages/KnowledgeBase.tsx`
- `tests/test_graph_rag.py`
- `ARCHITECTURE.md`
- `CHANGELOG.md`
- `README_ru.md`
- `README.md`
- ... 6 more

### Wiki/graph/entity model

- `app/kb/__init__.py`
- `app/kb/graph_rag.py`
- `app/kb/service.py`
- `pyproject.toml`
- `tests/test_graph_rag.py`
- `ARCHITECTURE.md`
- `CHANGELOG.md`
- `CODE_OF_CONDUCT.md`
- `requirements.txt`
- `SPEC.md`
- `docs/01-architecture-and-tech-stack.md`
- `docs/LAUNCH-CHECKLIST.md`
- ... 1 more

### Memory/update lifecycle

- `app/agent/orchestrator.py`
- `app/agent/skills_service.py`
- `app/api/assessments.py`
- `app/api/kb.py`
- `app/api/skills.py`
- `app/kb/service.py`
- `app/parser/service.py`
- `scripts/generate_test_pdfs.py`
- `frontend/src/components/Layout.tsx`
- `frontend/src/lib/api.ts`
- `frontend/src/pages/Dashboard.tsx`
- `frontend/src/pages/KnowledgeBase.tsx`
- ... 6 more

### Provenance/citation/evidence

- `app/agent/orchestrator.py`
- `app/agent/skills_registry.py`
- `frontend/src/pages/Assessments.tsx`
- `frontend/src/pages/KnowledgeBase.tsx`
- `examples/templates/soc2_type2/skill.json`
- `tests/test_orchestrator.py`
- `ARCHITECTURE.md`
- `CHANGELOG.md`
- `CODE_OF_CONDUCT.md`
- `CONTRIBUTING_WITH_AI.md`
- `README_ru.md`
- `README.md`
- ... 4 more

### Evaluation/observability

- `frontend/src/pages/Dashboard.tsx`
- `ARCHITECTURE.md`
- `CHANGELOG.md`
- `CONTRIBUTING_WITH_AI.md`
- `README.md`
- `SPEC.md`
- `docs/03-assessment-report-and-skill-contract.md`

### Agent/MCP/tool surface

- `app/mcp_server.py`
- `app/agent/orchestrator.py`
- `app/agent/skills_registry.py`
- `app/agent/skills_service.py`
- `app/api/assessments.py`
- `app/api/health.py`
- `app/api/skills.py`
- `app/core/config.py`
- `app/kb/graph_rag.py`
- `app/llm/base.py`
- `app/models/skill.py`
- `deploy.sh`
- ... 6 more

## Evidence lines

### Ingestion/source intake

| file | line | text |
| --- | --- | --- |
| app/api/kb.py | 1 | """Knowledge base API: upload document, query (hybrid RAG).""" |
| app/api/kb.py | 24 | """Upload a document to the knowledge base (vector + graph RAG).""" |
| app/core/config.py | 25 | # Upload & parser (PRD §7.2 APP-01) |
| app/kb/service.py | 85 | # Ingest |
| app/kb/service.py | 91 | """Ingest one parsed document into vector store + graph RAG.""" |
| app/kb/service.py | 143 | """Vector-store-only ingest (no graph RAG).""" |
| frontend/src/pages/KnowledgeBase.tsx | 1 | import { Database, FolderSync, Search, Upload } from "lucide-react"; |
| frontend/src/pages/KnowledgeBase.tsx | 30 | setError(err instanceof Error ? err.message : "Upload failed."); |

### Parsing/OCR/document extraction

| file | line | text |
| --- | --- | --- |
| app/mcp_server.py | 17 | Assess a security document (PDF, Word, etc.) and return a risk report. |
| app/kb/service.py | 388 | if suffix not in {".pdf", ".docx", ".xlsx", ".pptx", ".txt", ".md"}: |
| app/kb/service.py | 415 | if suffix not in {".pdf", ".docx", ".xlsx", ".pptx", ".txt", ".md"}: |
| app/models/parser.py | 18 | type: Literal["pdf", "docx", "xlsx", "pptx", "txt", "md", "mmd", "mermaid"] |
| app/parser/service.py | 3 | Primary engine: Docling (preserves tables, headings, OCR for scanned PDFs). |
| app/parser/service.py | 4 | Fallback: legacy parsers (PyMuPDF, python-docx, openpyxl, python-pptx). |
| app/parser/service.py | 25 | Supports PDF, DOCX, XLSX, PPTX with table/heading preservation. |
| app/parser/service.py | 73 | import fitz # PyMuPDF |

### Chunking/splitting

| file | line | text |
| --- | --- | --- |
| app/agent/orchestrator.py | 89 | def _split_text_with_overlap(text: str, chunk_size: int, overlap: int) -> list[str]: |
| app/agent/orchestrator.py | 108 | start = boundary - overlap |
| app/agent/orchestrator.py | 391 | f"Available chunk IDs: {chunk_ids}. " |
| app/agent/orchestrator.py | 394 | '`"quote"` (verbatim excerpt from that chunk supporting a finding). ' |
| app/agent/orchestrator.py | 405 | f"Available chunk IDs: {chunk_ids}. " |
| app/agent/orchestrator.py | 408 | '`"quote"` (verbatim excerpt from that chunk supporting a finding). ' |
| app/agent/orchestrator.py | 458 | """Build SourceCitation objects from the reviewer's declared chunk references.""" |
| app/agent/orchestrator.py | 479 | f"{'history://' if is_history else ''}{file}#chunk={paragraph_id}" |

### Embedding/vector index

| file | line | text |
| --- | --- | --- |
| app/mcp_server.py | 75 | return json.dumps({"status": "active", "backend": "chroma"}) |
| app/agent/orchestrator.py | 427 | source_type = metadata.get("source_type", "vector") |
| app/api/kb.py | 24 | """Upload a document to the knowledge base (vector + graph RAG).""" |
| app/api/kb.py | 41 | """Hybrid RAG query: vector similarity + graph retrieval.""" |
| app/core/config.py | 64 | # Vector / KB |
| app/core/config.py | 65 | VECTOR_STORE_TYPE: Literal["chroma"] = "chroma" |
| app/core/config.py | 66 | CHROMA_PERSIST_DIR: str = "./data/chroma" |
| app/kb/graph_rag.py | 10 | - naive: vector similarity only (like traditional RAG) |

### Retrieval/search/rerank

| file | line | text |
| --- | --- | --- |
| app/mcp_server.py | 56 | query: The search query (e.g., "password complexity requirements"). |
| app/api/assessments.py | 251 | "to retrieve the result." |
| app/api/kb.py | 41 | """Hybrid RAG query: vector similarity + graph retrieval.""" |
| app/core/guardrails.py | 44 | match = pattern.search(text) |
| app/kb/graph_rag.py | 5 | aware retrieval. Particularly valuable for cybersecurity documents where |
| app/kb/graph_rag.py | 46 | """Wrapper around LightRAG for graph-based knowledge retrieval.""" |
| app/kb/service.py | 3 | Hybrid retrieval merges vector similarity + entity-relationship graph. |
| app/kb/service.py | 31 | """Hybrid KB: ChromaDB (vector) + LightRAG (graph) for enriched retrieval. |

### Wiki/graph/entity model

| file | line | text |
| --- | --- | --- |
| app/kb/__init__.py | 1 | from .graph_rag import GraphRAGService, get_graph_rag_service |
| app/kb/graph_rag.py | 4 | Builds a knowledge graph from ingested documents, enabling entity-relationship |
| app/kb/graph_rag.py | 11 | - local: entity-centric graph traversal |
| app/kb/graph_rag.py | 12 | - global: community-level summaries |
| app/kb/graph_rag.py | 77 | logger.info("GraphRAG initialized at %s", working_dir) |
| app/kb/graph_rag.py | 116 | logger.info("GraphRAG: inserted document from %s", source) |
| app/kb/graph_rag.py | 118 | logger.error("GraphRAG insert failed: %s", e) |
| app/kb/graph_rag.py | 157 | logger.error("GraphRAG query failed: %s", e) |

### Memory/update lifecycle

| file | line | text |
| --- | --- | --- |
| app/agent/orchestrator.py | 357 | "and merge remediations. " |
| app/agent/orchestrator.py | 362 | "Merge into one unified JSON assessment, deduplicating findings " |
| app/agent/skills_service.py | 86 | raise ValueError("Cannot delete built-in skills.") |
| app/api/assessments.py | 80 | # In-memory task store (MVP — see TODO #9 for persistent storage) |
| app/api/kb.py | 50 | @router.post("/reindex") |
| app/api/skills.py | 50 | @router.delete("/{skill_id}") |
| app/api/skills.py | 52 | """Delete a custom skill.""" |
| app/kb/service.py | 135 | # Fall back to vector-only for sync callers in async context |

### Provenance/citation/evidence

| file | line | text |
| --- | --- | --- |
| app/agent/orchestrator.py | 2 | Agent orchestration: multi-agent flow with citations, confidence, and history reuse. |
| app/agent/orchestrator.py | 133 | # KB lookup and evidence extraction are independent — run in parallel. |
| app/agent/orchestrator.py | 224 | """Extract security-relevant evidence via LLM, with a keyword-scan fallback.""" |
| app/agent/orchestrator.py | 236 | "You are a security evidence extractor. " |
| app/agent/orchestrator.py | 239 | "Return only evidence lines, one per line, maximum 30 lines." |
| app/agent/orchestrator.py | 244 | "Extract relevant evidence lines:" |
| app/agent/orchestrator.py | 253 | "LLM evidence extraction failed, falling back to keyword scan: %s", e |
| app/agent/orchestrator.py | 263 | """Keyword-based evidence extraction used when LLM extraction is unavailable.""" |

### Evaluation/observability

| file | line | text |
| --- | --- | --- |
| frontend/src/pages/Dashboard.tsx | 90 | <Metric label="Total tasks" value={tasks.length} icon={<FileCheck2 className="h-4 w-4" />} /> |
| frontend/src/pages/Dashboard.tsx | 91 | <Metric label="Needs review" value={stats.pendingReview} icon={<TimerReset className="h-4 w-4" />} tone="warn" /> |
| frontend/src/pages/Dashboard.tsx | 92 | <Metric label="High risk tasks" value={stats.highRisk} icon={<ShieldAlert className="h-4 w-4" />} tone="bad" /> |
| frontend/src/pages/Dashboard.tsx | 93 | <Metric label="Open remediations" value={stats.openRemediations} icon={<ArrowRight className="h-4 w-4" />} tone="accent" /> |
| frontend/src/pages/Dashboard.tsx | 145 | function Metric({ |
| ARCHITECTURE.md | 283 | \| **Testing** \| SAST/DAST triage, penetration test evaluation, vulnerability fix verification \| Scan reports, pen-test findings \| |
| CHANGELOG.md | 58 | - **Testing**: SAST/DAST report triage, penetration test findings evaluation, vulnerability verification. |
| CHANGELOG.md | 60 | - **Operations**: Vulnerability monitoring, incident response evaluation, patch management, log audit. |

### Agent/MCP/tool surface

| file | line | text |
| --- | --- | --- |
| app/mcp_server.py | 4 | from mcp.server.fastmcp import FastMCP |
| app/mcp_server.py | 6 | from app.agent.orchestrator import run_assessment |
| app/mcp_server.py | 11 | mcp = FastMCP("DocSentinel") |
| app/mcp_server.py | 14 | @mcp.tool() |
| app/mcp_server.py | 50 | @mcp.tool() |
| app/mcp_server.py | 72 | @mcp.resource("kb://stats") |
| app/mcp_server.py | 79 | mcp.run() |
| app/agent/orchestrator.py | 2 | Agent orchestration: multi-agent flow with citations, confidence, and history reuse. |

## Gap

_없음_
