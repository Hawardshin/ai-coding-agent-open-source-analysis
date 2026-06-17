# iammonth1997/paperwiki-research-compiler 코드 레벨 분석

생성일: 2026-06-17T23:31:24.053Z

## 기본 판정

| 항목 | 값 |
| --- | --- |
| type | curated-list/template |
| maturity | D small/demo/list (4) |
| stars | 0 |
| language | HTML |
| tags | rag, knowledge-base, agent-knowledge, korea-signal |
| files/code/source | 4/0/0 |
| tests/ci | 0/1 |
| local path | sources/iammonth1997__paperwiki-research-compiler |

## 파이프라인 단계

| 단계 | 상태 | matched files | source files | evidence |
| --- | --- | --- | --- | --- |
| Ingestion/source intake | doc-only | 1 | 0 | README.md:42 A[User Query / Source Upload] --> B[Local DeBERTa-v3 Zero-Shot Classifier] |
| Parsing/OCR/document extraction | doc-only | 1 | 0 | README.md:51 I -->\|Yes\| J[Web/PDF Crawler + Citation Collector] |
| Chunking/splitting | absent | 0 | 0 |  |
| Embedding/vector index | doc-only | 1 | 0 | README.md:298 The knowledge graph is the heart of PaperWiki. Unlike vector databases (which store flat embeddings), PaperWiki uses a **property graph** with typed edges. |
| Retrieval/search/rerank | doc-only | 1 | 0 | README.md:45 C -->\|Existing Domain\| E[Retrieve Knowledge Graph Node] |
| Wiki/graph/entity model | doc-only | 1 | 0 | README.md:46 D --> F[LLM Summarization & Entity Extraction] |
| Memory/update lifecycle | doc-only | 2 | 0 | .github/workflows/ZUtChhJWVTcI.yml:22 const words = ["fix", "update", "refactor", "add", "remove", "improve", "optimize", "feature", "bug", "docs", "test", "style", "merge", "cleanup", "adjust", "rename", "enhance", "replace", "format", "config", "release", |
| Provenance/citation/evidence | doc-only | 1 | 0 | README.md:32 Imagine a research assistant that never forgets. PaperWiki is not another note-taking app—it is a **self-growing, compound wiki** that digests PDFs, web pages, academic papers, and raw text into interconnected knowledge. |
| Evaluation/observability | doc-only | 1 | 0 | README.md:287 \| Metric \| Value \| |
| Agent/MCP/tool surface | doc-only | 1 | 0 | README.md:19 - [OpenAI and Claude API Integration](#openai-and-claude-api-integration) |

## 의존성 신호

_없음_

## 주요 파일 후보

### Ingestion/source intake

- `README.md`

### Parsing/OCR/document extraction

- `README.md`

### Embedding/vector index

- `README.md`

### Retrieval/search/rerank

- `README.md`

### Wiki/graph/entity model

- `README.md`

### Memory/update lifecycle

- `.github/workflows/ZUtChhJWVTcI.yml`
- `README.md`

### Provenance/citation/evidence

- `README.md`

### Evaluation/observability

- `README.md`

### Agent/MCP/tool surface

- `README.md`

## Evidence lines

### Ingestion/source intake

| file | line | text |
| --- | --- | --- |
| README.md | 42 | A[User Query / Source Upload] --> B[Local DeBERTa-v3 Zero-Shot Classifier] |
| README.md | 51 | I -->\|Yes\| J[Web/PDF Crawler + Citation Collector] |
| README.md | 61 | *Figure: PaperWiki's data flow from ingestion to output. Every arrow represents an autonomous decision made without human intervention.* |
| README.md | 263 | 2. **Source Collection** — A web crawler (with built-in rate limiting and politeness) gathers 15–30 high-authority sources (arXiv, PubMed, Semantic Scholar, Google Scholar, Wikipedia). |

### Parsing/OCR/document extraction

| file | line | text |
| --- | --- | --- |
| README.md | 51 | I -->\|Yes\| J[Web/PDF Crawler + Citation Collector] |
| README.md | 155 | export_format: ["markdown", "pdf", "html"] |

### Embedding/vector index

| file | line | text |
| --- | --- | --- |
| README.md | 298 | The knowledge graph is the heart of PaperWiki. Unlike vector databases (which store flat embeddings), PaperWiki uses a **property graph** with typed edges. |

### Retrieval/search/rerank

| file | line | text |
| --- | --- | --- |
| README.md | 45 | C -->\|Existing Domain\| E[Retrieve Knowledge Graph Node] |
| README.md | 72 | - **Responsive Web UI** – Built with React and Tailwind CSS, the interface adapts to mobile, tablet, or desktop. The search bar supports natural language queries. |
| README.md | 75 | - **Local-First Privacy** – All classification and entity extraction runs locally. Only optional web search and synthesis requests travel to external APIs (configurable). |
| README.md | 324 | - **Optional External APIs** — Web search and LLM synthesis are disabled by default. You must explicitly enable them and provide API keys. |
| README.md | 339 | - Violation of terms of service of third-party APIs (OpenAI, Anthropic, web search engines). |

### Wiki/graph/entity model

| file | line | text |
| --- | --- | --- |
| README.md | 46 | D --> F[LLM Summarization & Entity Extraction] |
| README.md | 75 | - **Local-First Privacy** – All classification and entity extraction runs locally. Only optional web search and synthesis requests travel to external APIs (configurable). |
| README.md | 267 | 6. **Knowledge Graph Update** — New entities, relationships, and claims are merged into the persistent graph. |
| README.md | 310 | 1. Extracts all named entities from the new text. |

### Memory/update lifecycle

| file | line | text |
| --- | --- | --- |
| .github/workflows/ZUtChhJWVTcI.yml | 22 | const words = ["fix", "update", "refactor", "add", "remove", "improve", "optimize", "feature", "bug", "docs", "test", "style", "merge", "cleanup", "adjust", "rename", "enhance", "replace", "format", "config", "release", |
| README.md | 70 | - **Session-Persistent Memory** – The wiki remembers everything from previous sessions. Start today's query where yesterday's research ended. |
| README.md | 149 | memory: |
| README.md | 291 | \| Memory footprint \| 1.2 GB (GPU), 3.5 GB (CPU) \| |
| README.md | 313 | 4. Deduplicates: if two nodes represent the same concept (e.g., "machine learning" and "ML"), they merge with property union. |
| README.md | 352 | Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation |

### Provenance/citation/evidence

| file | line | text |
| --- | --- | --- |
| README.md | 32 | Imagine a research assistant that never forgets. PaperWiki is not another note-taking app—it is a **self-growing, compound wiki** that digests PDFs, web pages, academic papers, and raw text into interconnected knowledge. |
| README.md | 51 | I -->\|Yes\| J[Web/PDF Crawler + Citation Collector] |
| README.md | 76 | - **Citing and Citation Management** – Every synthesis includes clickable references. The citation manager supports APA, MLA, Chicago, and Nature formats. |
| README.md | 160 | - Produce PhD-quality syntheses (3,000–5,000 words with heavy citation). |
| README.md | 161 | - Use the local DeBERTa-v3 classifier with a 0.65 confidence threshold (higher requires more evidence before routing). |
| README.md | 250 | \| Citation Index Update \| Daily \| Re-checks broken links, updates DOI metadata \| |
| README.md | 264 | 3. **Citation Extraction** — Each source is summarized into 2–3 key claims with exact citations. |
| README.md | 266 | 5. **Citation Formatting** — All references are formatted in the chosen citation style. |

### Evaluation/observability

| file | line | text |
| --- | --- | --- |
| README.md | 287 | \| Metric \| Value \| |
| README.md | 327 | - **No Telemetry** — PaperWiki does not phone home. No analytics, no crash reports, no usage statistics. |

### Agent/MCP/tool surface

| file | line | text |
| --- | --- | --- |
| README.md | 19 | - [OpenAI and Claude API Integration](#openai-and-claude-api-integration) |
| README.md | 57 | H --> O[Periodic Consolidation Agent] |
| README.md | 73 | - **24/7 Autonomous Operation** – Runs as a background daemon or Docker container. The consolidation agent performs periodic deduplication and cross-linking without user input. |
| README.md | 74 | - **OpenAI and Claude API Integration** – Use GPT-4o for premium synthesis quality or Claude 3.5 Sonnet for cost-effective summarization. Both supported with configurable fallback chains. |
| README.md | 147 | openai: "sk-your-key-here" # Optional |
| README.md | 148 | claude: "sk-ant-your-key-here" # Optional |
| README.md | 163 | - Enable both OpenAI and Claude as fallback synthesis engines. |
| README.md | 209 | 2. **Wiki content** — On-the-fly translation via the configured LLM (OpenAI, Claude, or local open-source model). |

## Gap

- Provenance/citation/evidence
- Evaluation/observability
- Memory/update lifecycle
- tests
