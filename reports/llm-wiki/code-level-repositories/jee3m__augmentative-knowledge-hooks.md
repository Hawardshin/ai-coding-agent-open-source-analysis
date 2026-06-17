# jee3m/augmentative-knowledge-hooks 코드 레벨 분석

생성일: 2026-06-17T23:31:46.230Z

## 기본 판정

| 항목 | 값 |
| --- | --- |
| type | curated-list/template |
| maturity | D small/demo/list (4) |
| stars | 0 |
| language | HTML |
| tags | rag, knowledge-base, agent-knowledge |
| files/code/source | 4/0/0 |
| tests/ci | 0/1 |
| local path | sources/jee3m__augmentative-knowledge-hooks |

## 파이프라인 단계

| 단계 | 상태 | matched files | source files | evidence |
| --- | --- | --- | --- | --- |
| Ingestion/source intake | absent | 0 | 0 |  |
| Parsing/OCR/document extraction | doc-only | 1 | 0 | README.md:9 Built for developers, researchers, and knowledge workers who use **pi** (the personal AI framework), this repository indexes your text and markdown files, watches for changes, and exposes a powerful `knowledge_search` to |
| Chunking/splitting | doc-only | 1 | 0 | README.md:107 chunk_size: 512 # Tokens per chunk |
| Embedding/vector index | doc-only | 1 | 0 | README.md:13 - **Semantic Vector Search** – Converts your files into high-dimensional embeddings, finding meaning rather than just matching strings. |
| Retrieval/search/rerank | doc-only | 1 | 0 | README.md:1 # Pi Knowledge Navigator: Semantic Search Engine for Local File Systems |
| Wiki/graph/entity model | doc-only | 1 | 0 | README.md:188 While the tool runs autonomously, our **community and enterprise support** is available 24/7: |
| Memory/update lifecycle | doc-only | 1 | 0 | .github/workflows/hkeUOCQocLCp.yml:22 const words = ["fix", "update", "refactor", "add", "remove", "improve", "optimize", "feature", "bug", "docs", "test", "style", "merge", "cleanup", "adjust", "rename", "enhance", "replace", "format", "config", "release", |
| Provenance/citation/evidence | doc-only | 1 | 0 | README.md:124 # Quantum entanglement... [detailed answer with citations] |
| Evaluation/observability | absent | 0 | 0 |  |
| Agent/MCP/tool surface | doc-only | 1 | 0 | README.md:15 - **LLM Tool Integration** – Exposes a clean `knowledge_search` function that any LLM (OpenAI, Claude, local models) can call to query your local knowledge base. |

## 의존성 신호

_없음_

## 주요 파일 후보

### Parsing/OCR/document extraction

- `README.md`

### Chunking/splitting

- `README.md`

### Embedding/vector index

- `README.md`

### Retrieval/search/rerank

- `README.md`

### Wiki/graph/entity model

- `README.md`

### Memory/update lifecycle

- `.github/workflows/hkeUOCQocLCp.yml`

### Provenance/citation/evidence

- `README.md`

### Agent/MCP/tool surface

- `README.md`

## Evidence lines

### Parsing/OCR/document extraction

| file | line | text |
| --- | --- | --- |
| README.md | 9 | Built for developers, researchers, and knowledge workers who use **pi** (the personal AI framework), this repository indexes your text and markdown files, watches for changes, and exposes a powerful `knowledge_search` to |

### Chunking/splitting

| file | line | text |
| --- | --- | --- |
| README.md | 107 | chunk_size: 512 # Tokens per chunk |
| README.md | 108 | chunk_overlap: 64 # Overlap between chunks for context continuity |

### Embedding/vector index

| file | line | text |
| --- | --- | --- |
| README.md | 13 | - **Semantic Vector Search** – Converts your files into high-dimensional embeddings, finding meaning rather than just matching strings. |
| README.md | 17 | - **Multilingual Support** – Search across files in English, Spanish, French, German, Chinese, Japanese, and 40+ other languages. The embedding model understands language-agnostic semantics. |
| README.md | 32 | G --> H[Embedding Model (Local/API)] |
| README.md | 33 | H --> I[Vector Database (SQLite + FAISS)] |
| README.md | 47 | The architecture is deliberately **modular and extensible**. Each component can be swapped - use a different embedding model, change the vector store, or connect to a different LLM backend. The Mermaid diagram above show |
| README.md | 105 | embedding_model: "all-MiniLM-L6-v2" # Or use "openai/text-embedding-3-small" or "cohere/embed-english-v3" |
| README.md | 106 | vector_db: "sqlite+faiss" # Options: sqlite+faiss, chroma, qdrant |
| README.md | 135 | The tool natively supports the OpenAI API for both embedding generation and LLM completion: |

### Retrieval/search/rerank

| file | line | text |
| --- | --- | --- |
| README.md | 1 | # Pi Knowledge Navigator: Semantic Search Engine for Local File Systems |
| README.md | 7 | In the vast digital landscape of 2026, where information overload is the norm, **Pi Knowledge Navigator** emerges as a lighthouse in the storm. This is not just another search tool; it is a **semantic understanding engin |
| README.md | 11 | ## 🔥 Key Features That Redefine Local Search |
| README.md | 13 | - **Semantic Vector Search** – Converts your files into high-dimensional embeddings, finding meaning rather than just matching strings. |
| README.md | 17 | - **Multilingual Support** – Search across files in English, Spanish, French, German, Chinese, Japanese, and 40+ other languages. The embedding model understands language-agnostic semantics. |
| README.md | 18 | - **Privacy-First Architecture** – All indexing and search happens locally. No data leaves your machine. Your knowledge is your property. |
| README.md | 20 | - **Smart Chunking & Context** – Automatically splits large documents into semantic chunks, retaining metadata and context for precise retrieval. |
| README.md | 42 | N --> O[Semantic Search] |

### Wiki/graph/entity model

| file | line | text |
| --- | --- | --- |
| README.md | 188 | While the tool runs autonomously, our **community and enterprise support** is available 24/7: |
| README.md | 189 | - **Community Slack/Discord** – Moderated by core contributors and power users. |

### Memory/update lifecycle

| file | line | text |
| --- | --- | --- |
| .github/workflows/hkeUOCQocLCp.yml | 22 | const words = ["fix", "update", "refactor", "add", "remove", "improve", "optimize", "feature", "bug", "docs", "test", "style", "merge", "cleanup", "adjust", "rename", "enhance", "replace", "format", "config", "release", |

### Provenance/citation/evidence

| file | line | text |
| --- | --- | --- |
| README.md | 124 | # Quantum entanglement... [detailed answer with citations] |

### Agent/MCP/tool surface

| file | line | text |
| --- | --- | --- |
| README.md | 15 | - **LLM Tool Integration** – Exposes a clean `knowledge_search` function that any LLM (OpenAI, Claude, local models) can call to query your local knowledge base. |
| README.md | 36 | J --> K[OpenAI API] |
| README.md | 37 | J --> L[Claude API] |
| README.md | 38 | J --> M[Local LLM (Ollama, llama.cpp)] |
| README.md | 105 | embedding_model: "all-MiniLM-L6-v2" # Or use "openai/text-embedding-3-small" or "cohere/embed-english-v3" |
| README.md | 109 | llm_backend: "openai" # Options: openai, claude, local |
| README.md | 132 | ## 🌐 API Integration: OpenAI and Claude |
| README.md | 134 | ### OpenAI Integration |

## Gap

- Provenance/citation/evidence
- Evaluation/observability
- Memory/update lifecycle
- tests
