# linny006/rag-radar 코드 레벨 분석

생성일: 2026-06-17T23:31:22.125Z

## 기본 판정

| 항목 | 값 |
| --- | --- |
| type | curated-list/tutorial |
| maturity | D small/demo/list (23) |
| stars | 1 |
| language | Python |
| tags | rag, knowledge-base, korea-signal |
| files/code/source | 10/1/1 |
| tests/ci | 0/1 |
| local path | sources/linny006__rag-radar |

## 파이프라인 단계

| 단계 | 상태 | matched files | source files | evidence |
| --- | --- | --- | --- | --- |
| Ingestion/source intake | doc-only | 2 | 0 | data/items.json:138 "description": "Convert the public web into AI-ready Markdown with a local Python CLI/SDK/MCP crawler.", |
| Parsing/OCR/document extraction | doc-only | 2 | 0 | data/items.json:165 "description": "Apple-native iOS/macOS app for document intelligence, OCR, cited answers, and source-backed retrieval over PDFs, scans, ", |
| Chunking/splitting | absent | 0 | 0 |  |
| Embedding/vector index | doc-only | 7 | 0 | data/items.json:120 "description": "AI-agent operations platform for the job search \u2014 multi-provider LLMs, RAG over pgvector, multi-step LangChain agents, a", |
| Retrieval/search/rerank | code | 8 | 1 | tracker.py:30 # The default fetcher queries the GitHub Search API for repos matching a |
| Wiki/graph/entity model | doc-only | 2 | 0 | data/items.json:183 "description": "MOOTx01 Community Edition", |
| Memory/update lifecycle | code | 5 | 1 | tracker.py:5 the README between sentinel markers, writes a new JSON snapshot. The |
| Provenance/citation/evidence | doc-only | 2 | 0 | data/items.json:93 "description": "AI Research Wiki 2026: Auto-Building Knowledge Base with Deep Citation Syntheses", |
| Evaluation/observability | doc-only | 7 | 0 | data/items.json:426 "description": "Self-hosted long-term memory engine for AI assistants with replayable state, low-drift digests, and grounded recall.", |
| Agent/MCP/tool surface | doc-only | 7 | 0 | data/items.json:3 "description": "Autonomous AI Security Agent leveraging LLMs, RAG, and Knowledge Graphs for automated CVE analysis and auto-patching.", |

## 의존성 신호

_없음_

## 주요 파일 후보

### Ingestion/source intake

- `data/items.json`
- `README.md`

### Parsing/OCR/document extraction

- `data/items.json`
- `README.md`

### Embedding/vector index

- `data/items.json`
- `README_CN.md`
- `README_ES.md`
- `README_JA.md`
- `README_KO.md`
- `README_PT.md`
- `README.md`

### Retrieval/search/rerank

- `tracker.py`
- `data/items.json`
- `README_CN.md`
- `README_ES.md`
- `README_JA.md`
- `README_KO.md`
- `README_PT.md`
- `README.md`

### Wiki/graph/entity model

- `data/items.json`
- `README.md`

### Memory/update lifecycle

- `tracker.py`
- `data/items.json`
- `README_ES.md`
- `README_PT.md`
- `README.md`

### Provenance/citation/evidence

- `data/items.json`
- `README.md`

### Evaluation/observability

- `data/items.json`
- `README_CN.md`
- `README_ES.md`
- `README_JA.md`
- `README_KO.md`
- `README_PT.md`
- `README.md`

### Agent/MCP/tool surface

- `data/items.json`
- `README_CN.md`
- `README_ES.md`
- `README_JA.md`
- `README_KO.md`
- `README_PT.md`
- `README.md`

## Evidence lines

### Ingestion/source intake

| file | line | text |
| --- | --- | --- |
| data/items.json | 138 | "description": "Convert the public web into AI-ready Markdown with a local Python CLI/SDK/MCP crawler.", |
| data/items.json | 273 | "description": "AI-powered invoice data extraction and ERP export. Upload or email PDF invoices, review fields, detect duplicates, and e", |
| README.md | 60 | \| 16 \| [raintree-technology/docpull](https://github.com/raintree-technology/docpull) \| 23 \| Python \| 2026-06-17 \| Convert the public web into AI-ready Markdown with a local Python CLI/SDK/MCP crawler. \| |
| README.md | 75 | \| 31 \| [jesuspascuall/invoiceprocessors](https://github.com/jesuspascuall/invoiceprocessors) \| 1 \| Python \| 2026-06-17 \| AI-powered invoice data extraction and ERP export. Upload or email PDF invoices, review fields, det |

### Parsing/OCR/document extraction

| file | line | text |
| --- | --- | --- |
| data/items.json | 165 | "description": "Apple-native iOS/macOS app for document intelligence, OCR, cited answers, and source-backed retrieval over PDFs, scans, ", |
| data/items.json | 273 | "description": "AI-powered invoice data extraction and ERP export. Upload or email PDF invoices, review fields, detect duplicates, and e", |
| data/items.json | 399 | "description": "RAG Chatbot built with FastAPI, Gemini API, ChromaDB, and PDF-based document retrieval.", |
| README.md | 63 | \| 19 \| [Gunnarguy/OpenIntelligence](https://github.com/Gunnarguy/OpenIntelligence) \| 18 \| Swift \| 2026-06-17 \| Apple-native iOS/macOS app for document intelligence, OCR, cited answers, and source-backed retrieval over PD |
| README.md | 75 | \| 31 \| [jesuspascuall/invoiceprocessors](https://github.com/jesuspascuall/invoiceprocessors) \| 1 \| Python \| 2026-06-17 \| AI-powered invoice data extraction and ERP export. Upload or email PDF invoices, review fields, det |
| README.md | 89 | \| 45 \| [karthikanchipaku/Rag-ChatBot](https://github.com/karthikanchipaku/Rag-ChatBot) \| 0 \| Python \| 2026-06-17 \| RAG Chatbot built with FastAPI, Gemini API, ChromaDB, and PDF-based document retrieval. \| |

### Embedding/vector index

| file | line | text |
| --- | --- | --- |
| data/items.json | 120 | "description": "AI-agent operations platform for the job search \u2014 multi-provider LLMs, RAG over pgvector, multi-step LangChain agents, a", |
| data/items.json | 291 | "description": "Live-updating landscape of vector database projects, integrations, and benchmarks \u2014 refreshed every ", |
| data/items.json | 292 | "id": "linny006/vector-db-live", |
| data/items.json | 294 | "name": "linny006/vector-db-live", |
| data/items.json | 297 | "url": "https://github.com/linny006/vector-db-live" |
| data/items.json | 399 | "description": "RAG Chatbot built with FastAPI, Gemini API, ChromaDB, and PDF-based document retrieval.", |
| README_CN.md | 44 | - [vector-db-live](https://github.com/linny006/vector-db-live) — Newest vector DB projects and integrations (`topic:vector-database`) |
| README_ES.md | 12 | RAG Radar monitorea continuamente GitHub en busca de proyectos, librerías y patrones de producción de generación aumentada por recuperación (RAG) recién publicados. Puntúa y categoriza los descubrimientos por tipo de com |

### Retrieval/search/rerank

| file | line | text |
| --- | --- | --- |
| tracker.py | 30 | # The default fetcher queries the GitHub Search API for repos matching a |
| tracker.py | 49 | url = "https://api.github.com/search/repositories" |
| data/items.json | 75 | "description": "Run and manage local AI models, search your files and code, and crawl the web, all in one program. Cited answers, local-", |
| data/items.json | 120 | "description": "AI-agent operations platform for the job search \u2014 multi-provider LLMs, RAG over pgvector, multi-step LangChain agents, a", |
| data/items.json | 165 | "description": "Apple-native iOS/macOS app for document intelligence, OCR, cited answers, and source-backed retrieval over PDFs, scans, ", |
| data/items.json | 201 | "description": "A mention-driven hybrid-RAG assistant that replies with the most relevant podcast clip: HyDE, dense + sparse retrieval, ", |
| data/items.json | 210 | "description": "Markdown-first, long-term memory infrastructure for AI agents. Hybrid BM25 + semantic search across markdown/code files ", |
| data/items.json | 219 | "description": "Agent-safe code retrieval for MCP coding agents: runtime-first search, exact reads, call graph context, and fresh repo e", |

### Wiki/graph/entity model

| file | line | text |
| --- | --- | --- |
| data/items.json | 183 | "description": "MOOTx01 Community Edition", |
| data/items.json | 346 | "id": "axiom-orion/genealogy-graphrag", |
| data/items.json | 348 | "name": "axiom-orion/genealogy-graphrag", |
| data/items.json | 351 | "url": "https://github.com/axiom-orion/genealogy-graphrag" |
| README.md | 65 | \| 21 \| [codedaptive/mootx01-ce](https://github.com/codedaptive/mootx01-ce) \| 1 \| Swift \| 2026-06-17 \| MOOTx01 Community Edition \| |
| README.md | 83 | \| 39 \| [axiom-orion/genealogy-graphrag](https://github.com/axiom-orion/genealogy-graphrag) \| 0 \| Python \| 2026-06-17 \| Provenance-grounded genealogy QA: fuses dense + BM25 + kinship-graph retrieval with a cross-encoder r |

### Memory/update lifecycle

| file | line | text |
| --- | --- | --- |
| tracker.py | 5 | the README between sentinel markers, writes a new JSON snapshot. The |
| data/items.json | 30 | "description": "Configure the system. Watch it fail. Understand why. Interactive lab for AI engineers and PMs \u2014 RAG failure simulation, ", |
| data/items.json | 102 | "description": "Persistent memory MCP for AI agents \u2014 SQLite, knowledge graph, 12 tools with ToolAnnotations", |
| data/items.json | 147 | "description": "Self-hosted Dakera AI memory server \u2014 Docker Compose, Kubernetes, Helm, HA cluster setup, and monitoring.", |
| data/items.json | 156 | "description": "A private, self-hosted AI assistant with persistent memory. Runs on your machine. Nobody else controls it.", |
| data/items.json | 210 | "description": "Markdown-first, long-term memory infrastructure for AI agents. Hybrid BM25 + semantic search across markdown/code files ", |
| data/items.json | 237 | "description": "Lightweight in-memory knowledge graph with Cypher query support", |
| data/items.json | 390 | "description": "Typed, provenance-tracked memory layer for LLM agents: consolidation, supersession, and an audit log that keep retrieval", |

### Provenance/citation/evidence

| file | line | text |
| --- | --- | --- |
| data/items.json | 93 | "description": "AI Research Wiki 2026: Auto-Building Knowledge Base with Deep Citation Syntheses", |
| data/items.json | 345 | "description": "Provenance-grounded genealogy QA: fuses dense + BM25 + kinship-graph retrieval with a cross-encoder reranker, so relatio", |
| data/items.json | 390 | "description": "Typed, provenance-tracked memory layer for LLM agents: consolidation, supersession, and an audit log that keep retrieval", |
| README.md | 55 | \| 11 \| [iammonth1997/paperwiki-research-compiler](https://github.com/iammonth1997/paperwiki-research-compiler) \| 0 \| HTML \| 2026-06-17 \| AI Research Wiki 2026: Auto-Building Knowledge Base with Deep Citation Syntheses \| |
| README.md | 83 | \| 39 \| [axiom-orion/genealogy-graphrag](https://github.com/axiom-orion/genealogy-graphrag) \| 0 \| Python \| 2026-06-17 \| Provenance-grounded genealogy QA: fuses dense + BM25 + kinship-graph retrieval with a cross-encoder r |
| README.md | 88 | \| 44 \| [axiom-orion/agent-memory-service](https://github.com/axiom-orion/agent-memory-service) \| 0 \| Python \| 2026-06-17 \| Typed, provenance-tracked memory layer for LLM agents: consolidation, supersession, and an audit |

### Evaluation/observability

| file | line | text |
| --- | --- | --- |
| data/items.json | 426 | "description": "Self-hosted long-term memory engine for AI assistants with replayable state, low-drift digests, and grounded recall.", |
| README_CN.md | 42 | - [llm-eval-tracker](https://github.com/linny006/llm-eval-tracker) — Newest LLM evaluation tools and benchmarks (`topic:llm-eval`) |
| README_CN.md | 45 | - [llmops-radar](https://github.com/linny006/llmops-radar) — Newest LLMOps tooling (observability, deployment) (`topic:llmops`) |
| README_CN.md | 47 | - [agent-eval-harness](https://github.com/linny006/agent-eval-harness) — Live benchmark of AI coding agents (`topic:llm-eval`) |
| README_ES.md | 42 | - [llm-eval-tracker](https://github.com/linny006/llm-eval-tracker) — Newest LLM evaluation tools and benchmarks (`topic:llm-eval`) |
| README_ES.md | 45 | - [llmops-radar](https://github.com/linny006/llmops-radar) — Newest LLMOps tooling (observability, deployment) (`topic:llmops`) |
| README_ES.md | 47 | - [agent-eval-harness](https://github.com/linny006/agent-eval-harness) — Live benchmark of AI coding agents (`topic:llm-eval`) |
| README_JA.md | 42 | - [llm-eval-tracker](https://github.com/linny006/llm-eval-tracker) — Newest LLM evaluation tools and benchmarks (`topic:llm-eval`) |

### Agent/MCP/tool surface

| file | line | text |
| --- | --- | --- |
| data/items.json | 3 | "description": "Autonomous AI Security Agent leveraging LLMs, RAG, and Knowledge Graphs for automated CVE analysis and auto-patching.", |
| data/items.json | 12 | "description": "Give your agent a proper IDE and OS. The sensorimotor cortex for coding agents (OpenCode + Pi), part of CortexKit: symbo", |
| data/items.json | 48 | "description": "Memento \u2014 structured, sourced, living knowledge substrate for AI agents, via MCP. Typed blocks, propose-validate loop. A", |
| data/items.json | 102 | "description": "Persistent memory MCP for AI agents \u2014 SQLite, knowledge graph, 12 tools with ToolAnnotations", |
| data/items.json | 111 | "description": "Context engineering, abstracted. Build AI agents whose every LLM call traces back to what was injected, who triggered it", |
| data/items.json | 120 | "description": "AI-agent operations platform for the job search \u2014 multi-provider LLMs, RAG over pgvector, multi-step LangChain agents, a", |
| data/items.json | 138 | "description": "Convert the public web into AI-ready Markdown with a local Python CLI/SDK/MCP crawler.", |
| data/items.json | 193 | "id": "dajiaohuang/dnd-dm-agent", |

## Gap

- Provenance/citation/evidence
- Evaluation/observability
- tests
