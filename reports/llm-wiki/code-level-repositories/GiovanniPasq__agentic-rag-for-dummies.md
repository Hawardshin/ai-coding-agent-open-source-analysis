# GiovanniPasq/agentic-rag-for-dummies 코드 레벨 분석

생성일: 2026-06-17T23:31:32.987Z

## 기본 판정

| 항목 | 값 |
| --- | --- |
| type | curated-list/tutorial |
| maturity | C focused implementation (46) |
| stars | 3502 |
| language | Jupyter Notebook |
| tags | rag, document-chat, agent-knowledge, korea-signal |
| files/code/source | 35/23/23 |
| tests/ci | 0/1 |
| local path | sources/GiovanniPasq__agentic-rag-for-dummies |

## 파이프라인 단계

| 단계 | 상태 | matched files | source files | evidence |
| --- | --- | --- | --- | --- |
| Ingestion/source intake | code | 4 | 2 | project/ui/css.py:137 FILE UPLOAD |
| Parsing/OCR/document extraction | code | 8 | 5 | project/document_chunker.py:118 p_chunk.metadata.update({"source": str(doc_path.stem)+".pdf", "parent_id": parent_id}) |
| Chunking/splitting | code | 10 | 8 | project/config.py:31 # --- Text Splitter Configuration --- |
| Embedding/vector index | code | 6 | 3 | project/config.py:10 # --- Qdrant Configuration --- |
| Retrieval/search/rerank | code | 9 | 7 | project/config.py:16 SPARSE_MODEL = "Qdrant/bm25" |
| Wiki/graph/entity model | code | 3 | 1 | project/rag_agent/prompts.py:8 - Important facts or entities mentioned |
| Memory/update lifecycle | code | 8 | 6 | project/utils.py:12 """Delete everything under directory but not the directory itself (safe for Docker volume / bind mount roots).""" |
| Provenance/citation/evidence | absent | 0 | 0 |  |
| Evaluation/observability | code | 8 | 5 | project/app.py:11 # Tracing is unaffected. |
| Agent/MCP/tool surface | code | 9 | 6 | project/config.py:24 # --- Agent Configuration --- |

## 의존성 신호

- LLM/app framework: langchain-huggingface, langchain-ollama, langchain-qdrant, langchain-text-splitters, sentence-transformers
- Vector/search store: langchain-qdrant
- Document parsing/OCR: pymupdf4llm
- Eval/observability: langfuse, ragas

## 주요 파일 후보

### Ingestion/source intake

- `project/ui/css.py`
- `project/ui/gradio_app.py`
- `README.md`
- `project/README.md`

### Parsing/OCR/document extraction

- `project/document_chunker.py`
- `project/utils.py`
- `project/core/document_manager.py`
- `project/rag_agent/prompts.py`
- `project/ui/gradio_app.py`
- `notebooks/data/curated_ragas_qa.json`
- `README.md`
- `project/README.md`

### Chunking/splitting

- `project/config.py`
- `project/document_chunker.py`
- `project/core/chat_interface.py`
- `project/core/document_manager.py`
- `project/core/rag_system.py`
- `project/rag_agent/prompts.py`
- `project/rag_agent/tools.py`
- `project/ui/gradio_app.py`
- `README.md`
- `project/README.md`

### Embedding/vector index

- `project/config.py`
- `project/db/vector_db_manager.py`
- `project/rag_agent/tools.py`
- `README.md`
- `requirements.txt`
- `project/README.md`

### Retrieval/search/rerank

- `project/config.py`
- `project/core/chat_interface.py`
- `project/db/parent_store_manager.py`
- `project/rag_agent/nodes.py`
- `project/rag_agent/prompts.py`
- `project/rag_agent/tools.py`
- `project/ui/gradio_app.py`
- `README.md`
- `project/README.md`

### Wiki/graph/entity model

- `project/rag_agent/prompts.py`
- `notebooks/data/curated_ragas_qa.json`
- `README.md`

### Memory/update lifecycle

- `project/utils.py`
- `project/core/rag_system.py`
- `project/db/vector_db_manager.py`
- `project/rag_agent/graph.py`
- `project/rag_agent/prompts.py`
- `project/ui/gradio_app.py`
- `README.md`
- `project/README.md`

### Evaluation/observability

- `project/app.py`
- `project/config.py`
- `project/core/chat_interface.py`
- `project/core/observability.py`
- `project/core/rag_system.py`
- `README.md`
- `requirements.txt`
- `project/README.md`

### Agent/MCP/tool surface

- `project/config.py`
- `project/rag_agent/edges.py`
- `project/rag_agent/graph_state.py`
- `project/rag_agent/graph.py`
- `project/rag_agent/nodes.py`
- `project/rag_agent/prompts.py`
- `README.md`
- `requirements.txt`
- `project/README.md`

## Evidence lines

### Ingestion/source intake

| file | line | text |
| --- | --- | --- |
| project/ui/css.py | 137 | FILE UPLOAD |
| project/ui/css.py | 140 | [data-testid="file-upload"] { |
| project/ui/css.py | 149 | [data-testid="file-upload"]:hover { |
| project/ui/css.py | 155 | [data-testid="file-upload"] * { |
| project/ui/css.py | 160 | [data-testid="file-upload"] .label { |
| project/ui/gradio_app.py | 50 | gr.Markdown("Upload PDF or Markdown files. Duplicates will be automatically skipped.") |
| README.md | 1105 | Build a Gradio interface with conversation persistence and human-in-the-loop support. For a complete end-to-end pipeline Gradio interface, including document ingestion, please refer to [project/README.md](./project/READM |
| README.md | 1173 | **Google Colab:** Click the **Open in Colab** badge at the top of this README, upload your PDFs to a `docs/` folder in the file browser, install dependencies with `pip install -r requirements.txt`, then run all cells top |

### Parsing/OCR/document extraction

| file | line | text |
| --- | --- | --- |
| project/document_chunker.py | 118 | p_chunk.metadata.update({"source": str(doc_path.stem)+".pdf", "parent_id": parent_id}) |
| project/utils.py | 4 | import pymupdf.layout |
| project/utils.py | 26 | doc = pymupdf.open(pdf_path) |
| project/core/document_manager.py | 18 | document_paths = [p for p in document_paths if p and Path(p).suffix.lower() in [".pdf", ".md"]] |
| project/core/document_manager.py | 63 | return sorted([p.name.replace(".md", ".pdf") for p in self.markdown_dir.glob("*.md")]) |
| project/rag_agent/prompts.py | 10 | - Sources file name (e.g., file1.pdf) or documents referenced |
| project/rag_agent/prompts.py | 105 | - Use Markdown (headings, bold, lists) for readability. |
| project/rag_agent/prompts.py | 111 | - List ONLY entries that have a real file extension (e.g. ".pdf", ".docx", ".txt"). |

### Chunking/splitting

| file | line | text |
| --- | --- | --- |
| project/config.py | 31 | # --- Text Splitter Configuration --- |
| project/document_chunker.py | 5 | from langchain_text_splitters import MarkdownHeaderTextSplitter, RecursiveCharacterTextSplitter |
| project/document_chunker.py | 13 | self.__child_splitter = RecursiveCharacterTextSplitter( |
| project/document_chunker.py | 45 | parent_chunks = self.__parent_splitter.split_text(f.read()) |
| project/document_chunker.py | 61 | for chunk in chunks: |
| project/document_chunker.py | 63 | current = chunk |
| project/document_chunker.py | 65 | current.page_content += "\n\n" + chunk.page_content |
| project/document_chunker.py | 66 | self.__merge_metadata(current.metadata, chunk.metadata) |

### Embedding/vector index

| file | line | text |
| --- | --- | --- |
| project/config.py | 10 | # --- Qdrant Configuration --- |
| project/config.py | 15 | DENSE_MODEL = "Qwen/Qwen3-Embedding-0.6B" |
| project/config.py | 16 | SPARSE_MODEL = "Qdrant/bm25" |
| project/db/vector_db_manager.py | 44 | f"Qdrant collection '{collection_name}' has dense vector size " |
| project/db/vector_db_manager.py | 47 | "changing embedding models." |
| project/db/vector_db_manager.py | 54 | print(f"Removing existing Qdrant collection: {collection_name}") |
| project/db/vector_db_manager.py | 64 | embedding=self.__dense_embeddings, |
| project/rag_agent/tools.py | 19 | results = self.collection.similarity_search( |

### Retrieval/search/rerank

| file | line | text |
| --- | --- | --- |
| project/config.py | 16 | SPARSE_MODEL = "Qdrant/bm25" |
| project/config.py | 20 | # --- Retrieval Configuration --- |
| project/core/chat_interface.py | 30 | match = re.search(r"\{.*\}", buffer, re.DOTALL) |
| project/db/parent_store_manager.py | 42 | match = re.search(r'_parent_(\d+)$', id_str) |
| project/rag_agent/nodes.py | 113 | new_ids.add(f"search::{query}") |
| project/rag_agent/nodes.py | 155 | search_queries = sorted(r.replace("search::", "") for r in retrieved_ids if r.startswith("search::")) |
| project/rag_agent/nodes.py | 161 | block += "Search queries already run:\n" + "\n".join(f"- {q}" for q in search_queries) + "\n" |
| project/rag_agent/prompts.py | 24 | Your task is to rewrite the current user query for optimal document retrieval, incorporating conversation context only when necessary. |

### Wiki/graph/entity model

| file | line | text |
| --- | --- | --- |
| project/rag_agent/prompts.py | 8 | - Important facts or entities mentioned |
| project/rag_agent/prompts.py | 40 | - Preserve concrete keywords and named entities |
| notebooks/data/curated_ragas_qa.json | 116 | "reference": "Centralized systems depend on a single entity, which creates risks such as corruption, hacking, business failures, and gatekeeping. Blockchains reduce reliance on those central intermediaries.", |
| notebooks/data/curated_ragas_qa.json | 118 | "single entity, such as a bank or land registry", |
| notebooks/data/curated_ragas_qa.json | 186 | "reference": "Permissionless blockchains allow anyone to participate in consensus and validation, while permissioned blockchains restrict participation to selected entities.", |
| README.md | 528 | - Important facts or entities mentioned |
| README.md | 567 | - Preserve concrete keywords and named entities |

### Memory/update lifecycle

| file | line | text |
| --- | --- | --- |
| project/utils.py | 12 | """Delete everything under directory but not the directory itself (safe for Docker volume / bind mount roots).""" |
| project/core/rag_system.py | 42 | print(f"Warning: Could not delete thread {self.thread_id}: {e}") |
| project/db/vector_db_manager.py | 57 | print(f"Warning: could not delete collection {collection_name}: {e}") |
| project/rag_agent/graph.py | 2 | from langgraph.checkpoint.memory import InMemorySaver |
| project/rag_agent/prompts.py | 68 | Compressed Memory: |
| project/ui/gradio_app.py | 73 | refresh_btn = gr.Button("Refresh", size="md") |
| README.md | 8 | <strong>Build a modular Agentic RAG system with LangGraph, conversation memory, and human-in-the-loop query clarification</strong> |
| README.md | 59 | \| 🧠 **Conversation Memory** \| Maintains context across questions for natural dialogue \| |

### Evaluation/observability

| file | line | text |
| --- | --- | --- |
| project/app.py | 11 | # Tracing is unaffected. |
| project/app.py | 12 | # Known bug: https://github.com/open-telemetry/opentelemetry-python/issues/2606 |
| project/app.py | 17 | logging.getLogger("opentelemetry.context").addFilter(_SuppressOtelDetachWarning()) |
| project/config.py | 42 | # --- Langfuse Observability --- |
| project/core/chat_interface.py | 154 | self.rag_system.observability.flush() |
| project/core/observability.py | 7 | class Observability: |
| project/core/observability.py | 18 | logger.warning("Langfuse enabled but API keys are missing — skipping") |
| project/core/observability.py | 23 | from langfuse import get_client |

### Agent/MCP/tool surface

| file | line | text |
| --- | --- | --- |
| project/config.py | 24 | # --- Agent Configuration --- |
| project/rag_agent/edges.py | 6 | def route_after_rewrite(state: State) -> Literal["request_clarification", "agent"]: |
| project/rag_agent/edges.py | 11 | Send("agent", {"question": query, "question_index": idx, "messages": []}) |
| project/rag_agent/graph_state.py | 14 | """State for main agent graph""" |
| project/rag_agent/graph_state.py | 22 | """State for individual agent subgraph""" |
| project/rag_agent/graph.py | 26 | print("Compiling agent graph...") |
| project/rag_agent/graph.py | 48 | graph_builder.add_node("agent", agent_subgraph) |
| project/rag_agent/graph.py | 55 | graph_builder.add_edge(["agent"], "aggregate_answers") |

## Gap

- Provenance/citation/evidence
- tests
