# KalyanKS-NLP/rag-zero-to-hero-guide 코드 레벨 분석

생성일: 2026-06-17T23:31:44.039Z

## 기본 판정

| 항목 | 값 |
| --- | --- |
| type | curated-list/tutorial |
| maturity | D small/demo/list (0) |
| stars | 1348 |
| language | Jupyter Notebook |
| tags | rag, document-chat, korea-signal |
| files/code/source | 20/0/0 |
| tests/ci | 0/0 |
| local path | sources/KalyanKS-NLP__rag-zero-to-hero-guide |

## 파이프라인 단계

| 단계 | 상태 | matched files | source files | evidence |
| --- | --- | --- | --- | --- |
| Ingestion/source intake | doc-only | 1 | 0 | README.md:71 \| Crawl4AI (Web Scraping) \| Open-source LLM Friendly Web Crawler & Scrapper \| [Link](https://github.com/unclecode/crawl4ai) \| |
| Parsing/OCR/document extraction | doc-only | 3 | 0 | README.md:81 \| PyMuPDF4LLM (Document) \| PyMuPDF4LLM library makes it easier to extract PDF content in the format you need for LLM & RAG environments. \| [Link](https://pymupdf.readthedocs.io/en/latest/pymupdf4llm/) \| |
| Chunking/splitting | doc-only | 4 | 0 | RAG Basics/How_does_RAG_work.md:12 - **Chunk:** Split text into smaller, meaningful segments for retrieval. |
| Embedding/vector index | doc-only | 7 | 0 | README.md:57 \| Haystack \| Haystack is an end-to-end LLM framework that allows you to build applications powered by LLMs, Transformer models, vector search and more. \| [Link](https://github.com/deepset-ai/haystack) \| |
| Retrieval/search/rerank | doc-only | 11 | 0 | README.md:27 \| How does RAG work? \| Explain the different steps in RAG - Indexing, Retrieval, Augmentation and Generation.\| [Link](RAG%20Basics/How_does_RAG_work.md)\| |
| Wiki/graph/entity model | doc-only | 3 | 0 | README.md:125 \| GraphRAG \| A modular graph-based Retrieval-Augmented Generation (RAG) system. \| [Link](https://github.com/microsoft/graphrag) \| |
| Memory/update lifecycle | doc-only | 2 | 0 | README.md:92 \| Chroma \| The AI-native open-source embedding database. The fastest way to build Python or JavaScript LLM apps with memory! \| [Link](https://github.com/chroma-core/chroma) \| |
| Provenance/citation/evidence | doc-only | 1 | 0 | RAG Basics/What_is_RAG.md:63 Healthcare Decision Support integrates RAG to pull patient data, medical literature, or treatment guidelines, assisting doctors with evidence-based recommendations or diagnoses. It enhances decision-making by providing u |
| Evaluation/observability | doc-only | 8 | 0 | README.md:20 \| [✅ RAG Evaluation Course](#rag-evaluation-course) \| \| \| |
| Agent/MCP/tool surface | doc-only | 11 | 0 | README.md:80 \| Llama Parse (Document) \| GenAI-native document parser that can parse complex document data for any downstream LLM use case (RAG, agents). \| [Link](https://github.com/run-llama/llama_cloud_services) \| |

## 의존성 신호

_없음_

## 주요 파일 후보

### Ingestion/source intake

- `README.md`

### Parsing/OCR/document extraction

- `README.md`
- `RAG Basics/RAG_Developer_Stack.md`
- `RAG Basics/RAG_Roadmap.md`

### Chunking/splitting

- `RAG Basics/How_does_RAG_work.md`
- `RAG Basics/RAG_must_know_terms.md`
- `RAG Evaluation/rag_generator_metrics.md`
- `RAG Evaluation/rag_retriever_metrics.md`

### Embedding/vector index

- `README.md`
- `RAG Basics/How_does_RAG_work.md`
- `RAG Basics/RAG_Developer_Stack.md`
- `RAG Basics/RAG_must_know_terms.md`
- `RAG Basics/RAG_Roadmap.md`
- `RAG Basics/What_is_RAG.md`
- `RAG Evaluation/rag_generator_metrics.md`

### Retrieval/search/rerank

- `README.md`
- `RAG Basics/How_does_RAG_work.md`
- `RAG Basics/RAG_Benefits_and_Challenges.md`
- `RAG Basics/RAG_Developer_Stack.md`
- `RAG Basics/RAG_must_know_terms.md`
- `RAG Basics/RAG_Roadmap.md`
- `RAG Basics/What_is_RAG.md`
- `RAG Basics/Why_RAG.md`
- `RAG Evaluation/rag_eval_intro.md`
- `RAG Evaluation/rag_generator_metrics.md`
- `RAG Evaluation/rag_retriever_metrics.md`

### Wiki/graph/entity model

- `README.md`
- `RAG Evaluation/rag_eval_intro.md`
- `RAG Evaluation/rag_retriever_metrics.md`

### Memory/update lifecycle

- `README.md`
- `RAG Basics/RAG_Roadmap.md`

### Provenance/citation/evidence

- `RAG Basics/What_is_RAG.md`

### Evaluation/observability

- `README.md`
- `RAG Basics/RAG_Benefits_and_Challenges.md`
- `RAG Basics/RAG_Developer_Stack.md`
- `RAG Basics/RAG_must_know_terms.md`
- `RAG Basics/RAG_Roadmap.md`
- `RAG Evaluation/rag_eval_intro.md`
- `RAG Evaluation/rag_generator_metrics.md`
- `RAG Evaluation/rag_retriever_metrics.md`

### Agent/MCP/tool surface

- `README.md`
- `RAG Basics/How_does_RAG_work.md`
- `RAG Basics/RAG_Benefits_and_Challenges.md`
- `RAG Basics/RAG_Developer_Stack.md`
- `RAG Basics/RAG_must_know_terms.md`
- `RAG Basics/RAG_Roadmap.md`
- `RAG Basics/What_is_RAG.md`
- `RAG Basics/Why_RAG.md`
- `RAG Evaluation/rag_eval_intro.md`
- `RAG Evaluation/rag_generator_metrics.md`
- `RAG Evaluation/rag_retriever_metrics.md`

## Evidence lines

### Ingestion/source intake

| file | line | text |
| --- | --- | --- |
| README.md | 71 | \| Crawl4AI (Web Scraping) \| Open-source LLM Friendly Web Crawler & Scrapper \| [Link](https://github.com/unclecode/crawl4ai) \| |
| README.md | 118 | \| R2R \| Agentic Retrieval-Augmented Generation (RAG) with a RESTful API. R2R offers multimodal content ingestion, hybrid search functionality, knowledge graphs, and comprehensive user and document management.\| [Link](htt |

### Parsing/OCR/document extraction

| file | line | text |
| --- | --- | --- |
| README.md | 81 | \| PyMuPDF4LLM (Document) \| PyMuPDF4LLM library makes it easier to extract PDF content in the format you need for LLM & RAG environments. \| [Link](https://pymupdf.readthedocs.io/en/latest/pymupdf4llm/) \| |
| RAG Basics/RAG_Developer_Stack.md | 25 | Data extraction libraries help to extract data from a variety of documents like web pages, PDF, word documents, images, power point presentations etc. Once the data is extracted, the data is chunked, encoded and then sto |
| RAG Basics/RAG_Roadmap.md | 33 | Extracting structured data from unstructured documents (PDFs, HTML, text, etc.) is essential for building knowledge bases in RAG. |

### Chunking/splitting

| file | line | text |
| --- | --- | --- |
| RAG Basics/How_does_RAG_work.md | 12 | - **Chunk:** Split text into smaller, meaningful segments for retrieval. |
| RAG Basics/RAG_must_know_terms.md | 9 | 2. **Chunk** – A small segment of a larger document, typically a paragraph or sentence. Chunking helps improve retrieval efficiency and relevance in RAG. |
| RAG Evaluation/rag_generator_metrics.md | 293 | Relevant Noise Sensitivity refers to the ratio of incorrect claims in a model’s response that are entailed by relevant retrieved chunks to the total number of response claims. A relevant chunk is a piece of retrieved con |
| RAG Evaluation/rag_generator_metrics.md | 321 | - **Worst Score (1)**: Occurs when every incorrect claim in the model response is directly supported by a relevant retrieved chunk. This suggests that the generator is entirely misled by noise in the relevant context. |
| RAG Evaluation/rag_generator_metrics.md | 331 | 5. **Check Entailment**: For each incorrect claim in the response, determine if it is entailed (supported or implied) by a relevant chunk |
| RAG Evaluation/rag_generator_metrics.md | 343 | - **Retrieved Relevant Chunk**: "The Mona Lisa is a famous portrait painted by Leonardo da Vinci. It is believed to have been started in the early 1500s. Some art historians date its completion to around 1519, placing it |
| RAG Evaluation/rag_generator_metrics.md | 351 | 2. **Relevant Chunk Identification**: The retrieved chunk is relevant because it contains "Leonardo da Vinci painted the Mona Lisa," matching the ground truth. |
| RAG Evaluation/rag_generator_metrics.md | 359 | - Incorrect claim ("15th century") is entailed by the relevant chunk’s statement: "...placing it firmly in the 15th century according to certain periodizations." |

### Embedding/vector index

| file | line | text |
| --- | --- | --- |
| README.md | 57 | \| Haystack \| Haystack is an end-to-end LLM framework that allows you to build applications powered by LLMs, Transformer models, vector search and more. \| [Link](https://github.com/deepset-ai/haystack) \| |
| README.md | 85 | <p align = "center"> <b> 🔵Vector Database🔵 </b> </p> |
| README.md | 89 | \| SQLite-Vec \| A vector search SQLite extension that runs anywhere! \| [Link](https://github.com/asg017/sqlite-vec) \| |
| README.md | 90 | \| FAISS \| A library for efficient similarity search and clustering of dense vectors. \| [Link](https://github.com/facebookresearch/faiss) \| |
| README.md | 91 | \| PGVector \| Open-source vector similarity search for Postgres \| [Link](https://github.com/pgvector/pgvector) \| |
| README.md | 92 | \| Chroma \| The AI-native open-source embedding database. The fastest way to build Python or JavaScript LLM apps with memory! \| [Link](https://github.com/chroma-core/chroma) \| |
| README.md | 93 | \| Qdrant \| High-performance, massive-scale Vector Database and Vector Search Engine for the next generation of AI. \| [Link](https://github.com/qdrant/qdrant) \| |
| README.md | 94 | \| Pincone \| The vector database for machine learning applications. \| [Link](https://github.com/pinecone-io) \| |

### Retrieval/search/rerank

| file | line | text |
| --- | --- | --- |
| README.md | 27 | \| How does RAG work? \| Explain the different steps in RAG - Indexing, Retrieval, Augmentation and Generation.\| [Link](RAG%20Basics/How_does_RAG_work.md)\| |
| README.md | 42 | \| RAG Retriever Evaluation Metrics \| Detailed explanation of RAG retriever evaluation metrics \| [Link](RAG%20Evaluation/rag_retriever_metrics.md) \| |
| README.md | 57 | \| Haystack \| Haystack is an end-to-end LLM framework that allows you to build applications powered by LLMs, Transformer models, vector search and more. \| [Link](https://github.com/deepset-ai/haystack) \| |
| README.md | 58 | \| fastRAG \| Research framework for efficient and optimized retrieval augmented generative pipelines, incorporating state-of-the-art LLMs and Information Retrieval. \| [Link](https://github.com/IntelLabs/fastRAG) \| |
| README.md | 89 | \| SQLite-Vec \| A vector search SQLite extension that runs anywhere! \| [Link](https://github.com/asg017/sqlite-vec) \| |
| README.md | 90 | \| FAISS \| A library for efficient similarity search and clustering of dense vectors. \| [Link](https://github.com/facebookresearch/faiss) \| |
| README.md | 91 | \| PGVector \| Open-source vector similarity search for Postgres \| [Link](https://github.com/pgvector/pgvector) \| |
| README.md | 93 | \| Qdrant \| High-performance, massive-scale Vector Database and Vector Search Engine for the next generation of AI. \| [Link](https://github.com/qdrant/qdrant) \| |

### Wiki/graph/entity model

| file | line | text |
| --- | --- | --- |
| README.md | 125 | \| GraphRAG \| A modular graph-based Retrieval-Augmented Generation (RAG) system. \| [Link](https://github.com/microsoft/graphrag) \| |
| README.md | 126 | \| Nano GraphRAG \| A simple, easy-to-hack GraphRAG implementation. \| [Link](https://github.com/gusye1234/nano-graphrag) \| |
| README.md | 127 | \| FastGraph RAG \| Streamlined and promptable Fast GraphRAG framework designed for interpretable, high-precision, agent-driven retrieval workflows. \| [Link](https://github.com/circlemind-ai/fast-graphrag) \| |
| RAG Evaluation/rag_eval_intro.md | 20 | Some of the popular metrics for RAG retriever evaluation are context precision, context recall, context entities recall and context relevancy. |
| RAG Evaluation/rag_eval_intro.md | 42 | <td>Context Entities Recall</td> |
| RAG Evaluation/rag_eval_intro.md | 45 | <td>Retriever’s ability to fetch the entities in the reference answer.</td> |
| RAG Evaluation/rag_retriever_metrics.md | 150 | ## Context Entities Recall |
| RAG Evaluation/rag_retriever_metrics.md | 152 | Context Entities Recall assesses how good the RAG system’s retriever is in fetching the entities in the reference answer. It is computed as the ratio of number of common entities between reference answer and the retrieve |

### Memory/update lifecycle

| file | line | text |
| --- | --- | --- |
| README.md | 92 | \| Chroma \| The AI-native open-source embedding database. The fastest way to build Python or JavaScript LLM apps with memory! \| [Link](https://github.com/chroma-core/chroma) \| |
| README.md | 115 | \| Agno \| Build AI Agents with memory, knowledge, tools and reasoning. Chat with them using a beautiful Agent UI. \| [Link](https://github.com/agno-agi/agno) \| |
| RAG Basics/RAG_Roadmap.md | 57 | Agents use reasoning, memory, and tool usage to interact with external systems and automate complex workflows. LLM-powered agents can dynamically retrieve and process data. |

### Provenance/citation/evidence

| file | line | text |
| --- | --- | --- |
| RAG Basics/What_is_RAG.md | 63 | Healthcare Decision Support integrates RAG to pull patient data, medical literature, or treatment guidelines, assisting doctors with evidence-based recommendations or diagnoses. It enhances decision-making by providing u |

### Evaluation/observability

| file | line | text |
| --- | --- | --- |
| README.md | 20 | \| [✅ RAG Evaluation Course](#rag-evaluation-course) \| \| \| |
| README.md | 38 | ## RAG Evaluation Course |
| README.md | 41 | \| RAG Evaluation Metrics Intro \| Brief overview of RAG evaluation metrics \| [Link](RAG%20Evaluation/rag_eval_intro.md) \| |
| README.md | 42 | \| RAG Retriever Evaluation Metrics \| Detailed explanation of RAG retriever evaluation metrics \| [Link](RAG%20Evaluation/rag_retriever_metrics.md) \| |
| README.md | 43 | \| RAG Generator Evaluation Metrics \| Detailed explanation of RAG generator evaluation metrics \| [Link](RAG%20Evaluation/rag_generator_metrics.md) \| |
| README.md | 44 | \| RAG Evaluation with RAGAS \| Implementation of RAG evaluation metrics with RAGAS library \| [Link](RAG%20Evaluation/notebooks/RAG_Evaluation_using_RAGAS.ipynb) \| |
| README.md | 45 | \| RAG Evaluation with DeepEval \| Implementation of RAG evaluation metrics with DeepEval library \| [Link](RAG%20Evaluation/notebooks/RAG_Evaluation_using_DeepEval.ipynb) \| |
| README.md | 65 | \| FlashRAG \| A Python Toolkit for Efficient RAG Research. This toolkit includes 36 pre-processed benchmark RAG datasets and 16 state-of-the-art RAG algorithms. \| [Link](https://github.com/RUC-NLPIR/FlashRAG) \| |

### Agent/MCP/tool surface

| file | line | text |
| --- | --- | --- |
| README.md | 80 | \| Llama Parse (Document) \| GenAI-native document parser that can parse complex document data for any downstream LLM use case (RAG, agents). \| [Link](https://github.com/run-llama/llama_cloud_services) \| |
| README.md | 114 | \| CrewAI \| Framework for orchestrating role-playing, autonomous AI agents. \| [Link](https://github.com/crewAIInc/crewAI) \| |
| README.md | 115 | \| Agno \| Build AI Agents with memory, knowledge, tools and reasoning. Chat with them using a beautiful Agent UI. \| [Link](https://github.com/agno-agi/agno) \| |
| README.md | 116 | \| LangGraph \| Build resilient language agents as graphs. \| [Link](https://github.com/langchain-ai/langgraph) \| |
| README.md | 117 | \| AutoGen \| An open-source framework for building AI agent systems. \| [Link](https://github.com/microsoft/autogen) \| |
| README.md | 127 | \| FastGraph RAG \| Streamlined and promptable Fast GraphRAG framework designed for interpretable, high-precision, agent-driven retrieval workflows. \| [Link](https://github.com/circlemind-ai/fast-graphrag) \| |
| RAG Basics/How_does_RAG_work.md | 3 | Authored by [Kalyan KS](https://www.linkedin.com/in/kalyanksnlp/). To stay updated with LLM, RAG and Agent updates, you can follow me on [LinkedIn](https://www.linkedin.com/in/kalyanksnlp/), [Twitter](https://x.com/kalya |
| RAG Basics/RAG_Benefits_and_Challenges.md | 3 | Authored by [Kalyan KS](https://www.linkedin.com/in/kalyanksnlp/). To stay updated with LLM, RAG and Agent updates, you can follow me on [LinkedIn](https://www.linkedin.com/in/kalyanksnlp/), [Twitter](https://x.com/kalya |

## Gap

- Provenance/citation/evidence
- Evaluation/observability
- Memory/update lifecycle
- tests
- ci
