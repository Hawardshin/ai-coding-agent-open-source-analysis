# benmaster82/Kwipu 코드 레벨 분석

생성일: 2026-06-17T23:31:23.437Z

## 기본 판정

| 항목 | 값 |
| --- | --- |
| type | graph-rag/kg |
| maturity | B production-leaning (63) |
| stars | 248 |
| language | Python |
| tags | rag, knowledge-base, agent-knowledge, korea-signal |
| files/code/source | 17/3/3 |
| tests/ci | 0/0 |
| local path | sources/benmaster82__Kwipu |

## 파이프라인 단계

| 단계 | 상태 | matched files | source files | evidence |
| --- | --- | --- | --- | --- |
| Ingestion/source intake | absent | 0 | 0 |  |
| Parsing/OCR/document extraction | code | 1 | 1 | geode_graph.py:94 WATCHER_VALID_EXTENSIONS = {".md", ".txt", ".pdf", ".docx"} |
| Chunking/splitting | code | 3 | 2 | geode_graph.py:163 # BM25 CHUNK RETRIEVER |
| Embedding/vector index | code | 5 | 2 | geode_graph.py:73 from llama_index.embeddings.ollama import OllamaEmbedding |
| Retrieval/search/rerank | code | 6 | 3 | geode_graph.py:163 # BM25 CHUNK RETRIEVER |
| Wiki/graph/entity model | code | 6 | 3 | geode_graph.py:367 # OBSIDIAN PRE-PROCESSING (multilingual) |
| Memory/update lifecycle | code | 5 | 1 | geode_graph.py:631 f"Delete '{STORAGE_DIR}/' to rebuild, or restore the previous model." |
| Provenance/citation/evidence | doc-only | 2 | 0 | CONTRIBUTING.md:38 ### Retriever Attribution Logging |
| Evaluation/observability | doc-only | 2 | 0 | CONTRIBUTING.md:41 ### Evaluation Set |
| Agent/MCP/tool surface | code | 6 | 2 | geode_graph.py:72 from llama_index.llms.ollama import Ollama |

## 의존성 신호

- LLM/app framework: llama-index-core, llama-index-llms-ollama, llama-index-embeddings-ollama

## 주요 파일 후보

### Parsing/OCR/document extraction

- `geode_graph.py`

### Chunking/splitting

- `geode_graph.py`
- `lang_config.py`
- `README.md`

### Embedding/vector index

- `geode_graph.py`
- `kwipu_mcp_server.py`
- `CONTRIBUTING.md`
- `README.md`
- `requirements.txt`

### Retrieval/search/rerank

- `geode_graph.py`
- `kwipu_mcp_server.py`
- `lang_config.py`
- `CONTRIBUTING.md`
- `README.md`
- `README.zh-CN.md`

### Wiki/graph/entity model

- `geode_graph.py`
- `kwipu_mcp_server.py`
- `lang_config.py`
- `CONTRIBUTING.md`
- `README.md`
- `README.zh-CN.md`

### Memory/update lifecycle

- `geode_graph.py`
- `CONTRIBUTING.md`
- `README.md`
- `knowledge_base/examples/Meeting Notes - Jan 15.md`
- `knowledge_base/examples/Sprint Review - Feb 3.md`

### Provenance/citation/evidence

- `CONTRIBUTING.md`
- `README.md`

### Evaluation/observability

- `CONTRIBUTING.md`
- `README.md`

### Agent/MCP/tool surface

- `geode_graph.py`
- `kwipu_mcp_server.py`
- `CONTRIBUTING.md`
- `README.md`
- `README.zh-CN.md`
- `requirements.txt`

## Evidence lines

### Parsing/OCR/document extraction

| file | line | text |
| --- | --- | --- |
| geode_graph.py | 94 | WATCHER_VALID_EXTENSIONS = {".md", ".txt", ".pdf", ".docx"} |

### Chunking/splitting

| file | line | text |
| --- | --- | --- |
| geode_graph.py | 163 | # BM25 CHUNK RETRIEVER |
| lang_config.py | 374 | overlap = token_set.intersection(sw) |
| lang_config.py | 375 | scores[lang] = len(overlap) |
| README.md | 173 | First-time graph construction requires an LLM call for each document chunk. Subsequent runs load the graph from disk instantly. Times can vary ±2x depending on note length and model. |

### Embedding/vector index

| file | line | text |
| --- | --- | --- |
| geode_graph.py | 73 | from llama_index.embeddings.ollama import OllamaEmbedding |
| geode_graph.py | 100 | """Initialize LLM and embedding model. Called from main() to avoid side effects on import.""" |
| geode_graph.py | 608 | """Verify that stored graph was built with the same embedding model. |
| geode_graph.py | 629 | f"Embedding model mismatch: storage was built with '{stored_embed}' " |
| geode_graph.py | 634 | # LLM model change is fine (only used for generation, not embeddings) |
| geode_graph.py | 860 | Fast mode: vector + BM25 + temporal only (no LLM call per query). |
| geode_graph.py | 1190 | help=f"Override embedding model (default: {EMBED_MODEL})", |
| kwipu_mcp_server.py | 84 | using a knowledge graph with vector similarity, BM25, and temporal matching. |

### Retrieval/search/rerank

| file | line | text |
| --- | --- | --- |
| geode_graph.py | 163 | # BM25 CHUNK RETRIEVER |
| geode_graph.py | 166 | """Multilingual BM25-like retriever that searches text chunks in the graph.""" |
| geode_graph.py | 207 | """Compute BM25 score for a document.""" |
| geode_graph.py | 232 | """Search text chunks in the graph using BM25 scoring.""" |
| geode_graph.py | 269 | # TEMPORAL METADATA RETRIEVER |
| geode_graph.py | 272 | """Multilingual retriever for temporal queries and events.""" |
| geode_graph.py | 280 | """Search for relevant documents based on dates, tags and metadata in any language.""" |
| geode_graph.py | 860 | Fast mode: vector + BM25 + temporal only (no LLM call per query). |

### Wiki/graph/entity model

| file | line | text |
| --- | --- | --- |
| geode_graph.py | 367 | # OBSIDIAN PRE-PROCESSING (multilingual) |
| geode_graph.py | 398 | """Extract structured triples from Obsidian [[wikilinks]] with multilingual inference.""" |
| geode_graph.py | 420 | relation = infer_relation(line, filename, target) |
| geode_graph.py | 421 | triples.append((filename, relation, target)) |
| geode_graph.py | 431 | Frontmatter keys are mapped to relations across supported languages. |
| geode_graph.py | 436 | # Frontmatter key -> relation mapping (multilingual) |
| geode_graph.py | 475 | for key, relation in key_relations.items(): |
| geode_graph.py | 478 | triples.append((filename, relation, value)) |

### Memory/update lifecycle

| file | line | text |
| --- | --- | --- |
| geode_graph.py | 631 | f"Delete '{STORAGE_DIR}/' to rebuild, or restore the previous model." |
| geode_graph.py | 668 | """Insert a single document into the existing graph (incremental).""" |
| geode_graph.py | 685 | f"Incremental insert: {os.path.basename(file_path)}..." |
| geode_graph.py | 694 | f"Incremental insert error: {e}. Full rebuild..." |
| geode_graph.py | 702 | """Update a modified document in the graph (delete + re-insert). |
| geode_graph.py | 705 | Falls back to full rebuild if the incremental update fails. |
| geode_graph.py | 738 | f"Incremental update error: {e}. Full rebuild..." |
| geode_graph.py | 784 | "Subsequent runs will be incremental." |

### Provenance/citation/evidence

| file | line | text |
| --- | --- | --- |
| CONTRIBUTING.md | 38 | ### Retriever Attribution Logging |
| CONTRIBUTING.md | 48 | ### Provenance Inspector |
| CONTRIBUTING.md | 69 | Add retriever attribution logging |
| README.md | 226 | - **Retriever attribution logging** - Log which retriever (vector, BM25, temporal, synonym) contributed context for each answer |
| README.md | 228 | - **Provenance inspector** - Surface the chain: answer claim -> cited note -> extracted entity/edge |

### Evaluation/observability

| file | line | text |
| --- | --- | --- |
| CONTRIBUTING.md | 41 | ### Evaluation Set |
| README.md | 227 | - **Evaluation set** - Build a categorized test suite (exact-source, multi-hop, temporal, negative questions) |

### Agent/MCP/tool surface

| file | line | text |
| --- | --- | --- |
| geode_graph.py | 72 | from llama_index.llms.ollama import Ollama |
| geode_graph.py | 73 | from llama_index.embeddings.ollama import OllamaEmbedding |
| geode_graph.py | 101 | Settings.llm = Ollama( |
| geode_graph.py | 1114 | """Verify Ollama is running and required models are available. |
| geode_graph.py | 1124 | # Check if Ollama is running |
| geode_graph.py | 1132 | "[bold red]Ollama is not running.[/bold red]\n\n" |
| geode_graph.py | 1133 | "Start Ollama before running Geode Graph:\n" |
| geode_graph.py | 1134 | " [dim]ollama serve[/dim]", |

## Gap

- Provenance/citation/evidence
- Evaluation/observability
- tests
- ci
