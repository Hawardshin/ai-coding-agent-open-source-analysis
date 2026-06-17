# SaiAkhil066/CORTEX-AI-SUPER-RAG 코드 레벨 분석

생성일: 2026-06-17T23:31:43.685Z

## 기본 판정

| 항목 | 값 |
| --- | --- |
| type | graph-rag/kg |
| maturity | A integrated platform (87) |
| stars | 1727 |
| language | Python |
| tags | rag, document-chat, korea-signal |
| files/code/source | 14/6/6 |
| tests/ci | 0/2 |
| local path | sources/SaiAkhil066__CORTEX-AI-SUPER-RAG |

## 파이프라인 단계

| 단계 | 상태 | matched files | source files | evidence |
| --- | --- | --- | --- | --- |
| Ingestion/source intake | code | 2 | 1 | app.py:371 "Much better retrieval, but slower at upload time." |
| Parsing/OCR/document extraction | code | 4 | 2 | app.py:374 "Upload PDF / DOCX / TXT", |
| Chunking/splitting | code | 5 | 4 | app.py:370 help="Prepend an LLM-generated context sentence to each chunk before indexing. " |
| Embedding/vector index | code | 4 | 2 | app.py:55 """Lightweight embeddings client used only for semantic caching.""" |
| Retrieval/search/rerank | code | 6 | 4 | app.py:325 reranker = load_reranker() |
| Wiki/graph/entity model | code | 6 | 4 | app.py:395 st.session_state.enable_graph_rag = st.checkbox("GraphRAG", value=st.session_state.enable_graph_rag) |
| Memory/update lifecycle | code | 4 | 3 | app.py:400 help="Generate multiple query variants and merge results with Reciprocal Rank Fusion." |
| Provenance/citation/evidence | absent | 0 | 0 |  |
| Evaluation/observability | code | 2 | 1 | utils/retriever_pipeline.py:13 """HyDE: append a hypothetical answer to improve recall.""" |
| Agent/MCP/tool surface | code | 6 | 4 | app.py:348 st.markdown('<span class="status-badge status-ok"><span class="dot"></span>Ollama connected</span>', unsafe_allow_html=True) |

## 의존성 신호

- LLM/app framework: langchain, langchain-community, langchain-core, langchain-classic, langchain-ollama, langchain-text-splitters, sentence-transformers
- Vector/search store: faiss-cpu
- Graph/KG store: networkx
- Document parsing/OCR: PyMuPDF, docx2txt, pypdf

## 주요 파일 후보

### Ingestion/source intake

- `app.py`
- `README.md`

### Parsing/OCR/document extraction

- `app.py`
- `utils/doc_handler.py`
- `README.md`
- `requirements.txt`

### Chunking/splitting

- `app.py`
- `utils/advanced_rag.py`
- `utils/build_graph.py`
- `utils/doc_handler.py`
- `README.md`

### Embedding/vector index

- `app.py`
- `utils/doc_handler.py`
- `README.md`
- `requirements.txt`

### Retrieval/search/rerank

- `app.py`
- `utils/advanced_rag.py`
- `utils/doc_handler.py`
- `utils/retriever_pipeline.py`
- `README.md`
- `requirements.txt`

### Wiki/graph/entity model

- `app.py`
- `utils/build_graph.py`
- `utils/doc_handler.py`
- `utils/retriever_pipeline.py`
- `README.md`
- `requirements.txt`

### Memory/update lifecycle

- `app.py`
- `utils/advanced_rag.py`
- `utils/retriever_pipeline.py`
- `README.md`

### Evaluation/observability

- `utils/retriever_pipeline.py`
- `README.md`

### Agent/MCP/tool surface

- `app.py`
- `install.sh`
- `utils/advanced_rag.py`
- `utils/doc_handler.py`
- `README.md`
- `requirements.txt`

## Evidence lines

### Ingestion/source intake

| file | line | text |
| --- | --- | --- |
| app.py | 371 | "Much better retrieval, but slower at upload time." |
| app.py | 374 | "Upload PDF / DOCX / TXT", |
| app.py | 522 | st.info("Upload documents in the sidebar to enable RAG retrieval.") |
| README.md | 31 | You upload a PDF. You ask a question.<br/> |
| README.md | 33 | <sub>No API key &nbsp;·&nbsp; No cloud upload &nbsp;·&nbsp; No subscription</sub> |
| README.md | 129 | Upload (PDF / DOCX / TXT) |

### Parsing/OCR/document extraction

| file | line | text |
| --- | --- | --- |
| app.py | 374 | "Upload PDF / DOCX / TXT", |
| app.py | 375 | type=["pdf", "docx", "txt"], |
| utils/doc_handler.py | 69 | if file.name.endswith(".pdf"): |
| utils/doc_handler.py | 71 | elif file.name.endswith(".docx"): |
| README.md | 31 | You upload a PDF. You ask a question.<br/> |
| README.md | 129 | Upload (PDF / DOCX / TXT) |
| README.md | 314 | <td><b>Document loading</b></td><td>PyMuPDF · Docx2txt · TextLoader</td> |
| README.md | 315 | <td><b>Supported files</b></td><td>PDF · DOCX · TXT · MD</td> |

### Chunking/splitting

| file | line | text |
| --- | --- | --- |
| app.py | 370 | help="Prepend an LLM-generated context sentence to each chunk before indexing. " |
| utils/advanced_rag.py | 32 | """Generate a short situating context for a chunk given its document summary.""" |
| utils/advanced_rag.py | 36 | f"<chunk>\n{chunk_text}\n</chunk>\n\n" |
| utils/advanced_rag.py | 37 | "Write a SINGLE short sentence (max 25 words) that situates this chunk " |
| utils/build_graph.py | 31 | for chunk in doc_chunks: |
| utils/build_graph.py | 32 | text = chunk.page_content |
| utils/build_graph.py | 36 | results.append(chunk) |
| utils/doc_handler.py | 27 | """Prepend an LLM-generated situating sentence to each chunk (Anthropic technique).""" |

### Embedding/vector index

| file | line | text |
| --- | --- | --- |
| app.py | 55 | """Lightweight embeddings client used only for semantic caching.""" |
| app.py | 468 | chips = ["🔍 BM25+FAISS"] |
| utils/doc_handler.py | 5 | from langchain_community.vectorstores import FAISS |
| utils/doc_handler.py | 98 | # 🚀 Contextual Retrieval — enrich each chunk before embedding/indexing |
| utils/doc_handler.py | 105 | embeddings = OllamaEmbeddings(model=embedding_model, base_url=base_url) |
| utils/doc_handler.py | 108 | vector_store = FAISS.from_documents(texts, embeddings) |
| utils/doc_handler.py | 110 | st.error(f"Failed to build vector store: {str(e)}") |
| README.md | 52 | <sub>LLM prepends situating context to every chunk <i>before</i> indexing. Each vector carries the full document story, not just a fragment.</sub> |

### Retrieval/search/rerank

| file | line | text |
| --- | --- | --- |
| app.py | 325 | reranker = load_reranker() |
| app.py | 337 | 'letter-spacing:0.18em;color:#6a70a0;margin-top:3px;">RETRIEVAL ENGINE · 2026</div></div></div>', |
| app.py | 368 | "Contextual Retrieval ✨", |
| app.py | 371 | "Much better retrieval, but slower at upload time." |
| app.py | 382 | uploaded_files, reranker, EMBEDDINGS_MODEL, OLLAMA_BASE_URL, |
| app.py | 399 | "RAG-Fusion (RRF)", value=st.session_state.enable_fusion, |
| app.py | 464 | st.markdown('<div class="brand-kicker">AGENTIC RETRIEVAL ENGINE · 2026</div>', unsafe_allow_html=True) |
| app.py | 468 | chips = ["🔍 BM25+FAISS"] |

### Wiki/graph/entity model

| file | line | text |
| --- | --- | --- |
| app.py | 395 | st.session_state.enable_graph_rag = st.checkbox("GraphRAG", value=st.session_state.enable_graph_rag) |
| app.py | 470 | if st.session_state.enable_graph_rag: chips.append("🕸️ GraphRAG") |
| utils/build_graph.py | 8 | entities = re.findall(r'\b[A-Z][a-z]+(?: [A-Z][a-z]+)*\b', doc.page_content) |
| utils/build_graph.py | 9 | if len(entities) > 1: |
| utils/build_graph.py | 10 | for i in range(len(entities) - 1): |
| utils/build_graph.py | 11 | G.add_edge(entities[i], entities[i + 1], source=doc.page_content[:200]) |
| utils/build_graph.py | 27 | # Find doc chunks that contain any of the matched/related entity names |
| utils/build_graph.py | 33 | if any(entity.lower() in text.lower() for entity in all_entities): |

### Memory/update lifecycle

| file | line | text |
| --- | --- | --- |
| app.py | 400 | help="Generate multiple query variants and merge results with Reciprocal Rank Fusion." |
| app.py | 407 | "Semantic Cache ⚡", value=st.session_state.enable_cache, |
| app.py | 475 | if st.session_state.enable_cache: chips.append("💾 Cache") |
| app.py | 672 | # ─── Semantic cache lookup ──────────────────────────────────────────────────── |
| app.py | 701 | # Keep the cache bounded |
| app.py | 719 | # ⚡ Serve from semantic cache |
| utils/advanced_rag.py | 65 | """Merge multiple ranked Document lists into one via RRF.""" |
| utils/advanced_rag.py | 91 | # ─── 4. Semantic Cache helpers ──────────────────────────────────────────────── |

### Evaluation/observability

| file | line | text |
| --- | --- | --- |
| utils/retriever_pipeline.py | 13 | """HyDE: append a hypothetical answer to improve recall.""" |
| README.md | 59 | <sub>Generates N query variants, retrieves independently for each, then merges all ranked lists via Reciprocal Rank Fusion for better recall.</sub> |

### Agent/MCP/tool surface

| file | line | text |
| --- | --- | --- |
| app.py | 348 | st.markdown('<span class="status-badge status-ok"><span class="dot"></span>Ollama connected</span>', unsafe_allow_html=True) |
| app.py | 350 | st.markdown('<span class="status-badge status-err"><span class="dot"></span>Ollama offline</span>', unsafe_allow_html=True) |
| app.py | 351 | st.error("Start Ollama with: `ollama serve`") |
| app.py | 663 | answer = "❌ Cannot connect to Ollama. Make sure it's running with `ollama serve`." |
| install.sh | 12 | # 1. Check for existing Ollama installation |
| install.sh | 13 | if ! command -v ollama &> /dev/null |
| install.sh | 15 | echo "Ollama not found. Installing Ollama..." |
| install.sh | 16 | curl -fsSL https://ollama.com/install.sh \| sh \|\| error_exit "Ollama installation failed." |

## Gap

- Provenance/citation/evidence
- tests
