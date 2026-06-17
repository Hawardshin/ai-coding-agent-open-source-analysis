# NirDiamant/RAG_Techniques 코드 레벨 분석

생성일: 2026-06-17T23:31:21.557Z

## 기본 판정

| 항목 | 값 |
| --- | --- |
| type | curated-list/tutorial |
| maturity | C focused implementation (46) |
| stars | 28013 |
| language | Jupyter Notebook |
| tags | rag, document-chat, agent-knowledge, korea-signal |
| files/code/source | 51/2/2 |
| tests/ci | 2/2 |
| local path | sources/NirDiamant__RAG_Techniques |

## 파이프라인 단계

| 단계 | 상태 | matched files | source files | evidence |
| --- | --- | --- | --- | --- |
| Ingestion/source intake | absent | 0 | 0 |  |
| Parsing/OCR/document extraction | code | 3 | 1 | helper_functions.py:50 Encodes a PDF book into a vector store using OpenAI embeddings. |
| Chunking/splitting | code | 3 | 1 | helper_functions.py:2 from langchain_text_splitters import RecursiveCharacterTextSplitter |
| Embedding/vector index | code | 2 | 1 | helper_functions.py:4 from langchain_community.vectorstores import FAISS |
| Retrieval/search/rerank | code | 4 | 2 | helper_functions.py:131 Retrieves relevant context and unique URLs for a given question using the chunks query retriever. |
| Wiki/graph/entity model | doc-only | 3 | 0 | CONTRIBUTING.md:5 ## Join Our Community |
| Memory/update lifecycle | doc-only | 4 | 0 | .github/workflows/github-test.yml:26 cache: 'pip' |
| Provenance/citation/evidence | doc-only | 3 | 0 | CONTRIBUTING.md:125 8. **References:** Include relevant citations or resources if you have. |
| Evaluation/observability | code | 3 | 1 | evaluation/evalute_rag.py:2 RAG Evaluation Script |
| Agent/MCP/tool surface | code | 4 | 1 | helper_functions.py:7 from openai import RateLimitError |

## 의존성 신호

_없음_

## 주요 파일 후보

### Parsing/OCR/document extraction

- `helper_functions.py`
- `CONTRIBUTING.md`
- `README.md`

### Chunking/splitting

- `helper_functions.py`
- `README.md`
- `data/nike_2023_annual_report.txt`

### Embedding/vector index

- `helper_functions.py`
- `README.md`

### Retrieval/search/rerank

- `helper_functions.py`
- `evaluation/evalute_rag.py`
- `CONTRIBUTING.md`
- `README.md`

### Wiki/graph/entity model

- `CONTRIBUTING.md`
- `README.md`
- `data/nike_2023_annual_report.txt`

### Memory/update lifecycle

- `.github/workflows/github-test.yml`
- `CONTRIBUTING.md`
- `README.md`
- `data/nike_2023_annual_report.txt`

### Provenance/citation/evidence

- `CONTRIBUTING.md`
- `README.md`
- `data/nike_2023_annual_report.txt`

### Evaluation/observability

- `evaluation/evalute_rag.py`
- `README.md`
- `data/nike_2023_annual_report.txt`

### Agent/MCP/tool surface

- `helper_functions.py`
- `CONTRIBUTING.md`
- `README.md`
- `data/nike_2023_annual_report.txt`

## Evidence lines

### Parsing/OCR/document extraction

| file | line | text |
| --- | --- | --- |
| helper_functions.py | 50 | Encodes a PDF book into a vector store using OpenAI embeddings. |
| helper_functions.py | 53 | path: The path to the PDF file. |
| helper_functions.py | 61 | # Load PDF documents |
| helper_functions.py | 225 | Read a PDF document from the specified path and return its content as a string. |
| helper_functions.py | 228 | path (str): The file path to the PDF document. |
| helper_functions.py | 231 | str: The concatenated text content of all pages in the PDF document. |
| helper_functions.py | 233 | The function uses the 'fitz' library (PyMuPDF) to open the PDF document, iterate over each page, |
| helper_functions.py | 236 | # Open the PDF document located at the specified path |

### Chunking/splitting

| file | line | text |
| --- | --- | --- |
| helper_functions.py | 2 | from langchain_text_splitters import RecursiveCharacterTextSplitter |
| helper_functions.py | 54 | chunk_size: The desired size of each text chunk. |
| helper_functions.py | 55 | chunk_overlap: The amount of overlap between consecutive chunks. |
| helper_functions.py | 66 | text_splitter = RecursiveCharacterTextSplitter( |
| helper_functions.py | 85 | chunk_size (int): The size of each chunk of text. |
| helper_functions.py | 86 | chunk_overlap (int): The overlap between chunks. |
| helper_functions.py | 107 | text_splitter = RecursiveCharacterTextSplitter( |
| helper_functions.py | 115 | # Assign metadata to each chunk |

### Embedding/vector index

| file | line | text |
| --- | --- | --- |
| helper_functions.py | 4 | from langchain_community.vectorstores import FAISS |
| helper_functions.py | 50 | Encodes a PDF book into a vector store using OpenAI embeddings. |
| helper_functions.py | 58 | A FAISS vector store containing the encoded book content. |
| helper_functions.py | 72 | # Create embeddings and vector store |
| helper_functions.py | 73 | embeddings = OpenAIEmbeddings() |
| helper_functions.py | 74 | vectorstore = FAISS.from_documents(cleaned_texts, embeddings) |
| helper_functions.py | 81 | Encodes a string into a vector store using OpenAI embeddings. |
| helper_functions.py | 89 | FAISS: A vector store containing the encoded content. |

### Retrieval/search/rerank

| file | line | text |
| --- | --- | --- |
| helper_functions.py | 131 | Retrieves relevant context and unique URLs for a given question using the chunks query retriever. |
| helper_functions.py | 134 | question: The question for which to retrieve context and URLs. |
| helper_functions.py | 142 | # Retrieve relevant documents for the given question |
| helper_functions.py | 248 | def bm25_retrieval(bm25: BM25Okapi, cleaned_texts: List[str], query: str, k: int = 5) -> List[str]: |
| helper_functions.py | 250 | Perform BM25 retrieval and return the top k cleaned text chunks. |
| helper_functions.py | 253 | bm25 (BM25Okapi): Pre-computed BM25 index. |
| helper_functions.py | 254 | cleaned_texts (List[str]): List of cleaned text chunks corresponding to the BM25 index. |
| helper_functions.py | 256 | k (int): The number of text chunks to retrieve. |

### Wiki/graph/entity model

| file | line | text |
| --- | --- | --- |
| CONTRIBUTING.md | 5 | ## Join Our Community |
| CONTRIBUTING.md | 7 | We have a vibrant Discord community where contributors can discuss ideas, ask questions, and collaborate on RAG techniques. Join us at: |
| CONTRIBUTING.md | 22 | 6. **Engage in Discussions:** Participate in our Discord community to help shape the future of RAG. |
| CONTRIBUTING.md | 24 | Remember, no contribution is too small. Every improvement helps make this repository an even better resource for the community. |
| CONTRIBUTING.md | 28 | Found a problem or have a suggestion? Please create an issue on GitHub, providing as much detail as possible. You can also discuss issues in our Discord community. |
| CONTRIBUTING.md | 39 | 8. **Discuss:** Use the Discord community to discuss your contribution if you need feedback or have questions. |
| CONTRIBUTING.md | 152 | We're grateful for all our contributors and excited to see how you'll help expand the world's most comprehensive RAG resource. Don't hesitate to ask questions in our Discord community if you're unsure about anything. |
| README.md | 6 | A community-driven hub of **42+ runnable notebooks** covering RAG techniques from foundational to cutting-edge - the intuition, the code, and the references to build more accurate, context-rich retrieval systems. |

### Memory/update lifecycle

| file | line | text |
| --- | --- | --- |
| .github/workflows/github-test.yml | 26 | cache: 'pip' |
| CONTRIBUTING.md | 24 | Remember, no contribution is too small. Every improvement helps make this repository an even better resource for the community. |
| CONTRIBUTING.md | 92 | Remember: Always update BOTH the list and table when adding new techniques, and ensure the numbers match exactly between them. |
| README.md | 103 | 🧠 **[Agent Memory Techniques](https://github.com/NirDiamant/Agent_Memory_Techniques)** - 30 notebooks on agent memory: vector stores, knowledge graphs, Mem0, MemGPT, Zep, Graphiti. |
| README.md | 122 | > **Recently added:** MemoRAG (memory-augmented retrieval), End-to-End RAG Evaluation, Open-RAG-Eval, JSON RAG. **42 notebooks** and growing. |
| README.md | 173 | Start with basic retrieval queries and integrate incremental learning mechanisms. |
| README.md | 462 | ### 🧠 Memory-Augmented Retrieval |
| README.md | 464 | 29. **MemoRAG**: [<img src="https://img.shields.io/badge/GitHub-View-blue" height="20">](https://github.com/NirDiamant/RAG_TECHNIQUES/blob/main/all_rag_techniques/memorag.ipynb) [<img src="https://colab.research.google.c |

### Provenance/citation/evidence

| file | line | text |
| --- | --- | --- |
| CONTRIBUTING.md | 125 | 8. **References:** Include relevant citations or resources if you have. |
| README.md | 457 | Demonstrates the open-rag-eval library for evaluation using UMBRELA scoring, AutoNuggetizer, and citation/hallucination detection. |
| data/nike_2023_annual_report.txt | 1688 | Financial Statements, our operating segments are evidence of the structure of the Company's internal organization. The NIKE |
| data/nike_2023_annual_report.txt | 2408 | Such procedures included examining, on a test basis, evidence regarding the amounts and disclosures in the consolidated |
| data/nike_2023_annual_report.txt | 2448 | evidence relating to management's assessment of complex tax laws and regulations as it relates to determining the provision for |
| data/nike_2023_annual_report.txt | 2450 | Addressing the matter involved performing procedures and evaluating audit evidence in connection with forming our overall |
| data/nike_2023_annual_report.txt | 3706 | The Company's operating segments are evidence of the structure of the Company's internal organization. The NIKE Brand |

### Evaluation/observability

| file | line | text |
| --- | --- | --- |
| evaluation/evalute_rag.py | 2 | RAG Evaluation Script |
| evaluation/evalute_rag.py | 5 | using various metrics from the deepeval library. |
| evaluation/evalute_rag.py | 8 | - deepeval |
| evaluation/evalute_rag.py | 19 | from deepeval import evaluate |
| evaluation/evalute_rag.py | 20 | from deepeval.metrics import GEval, FaithfulnessMetric, ContextualRelevancyMetric |
| evaluation/evalute_rag.py | 21 | from deepeval.test_case import LLMTestCase, LLMTestCaseParams |
| evaluation/evalute_rag.py | 47 | Create a list of LLMTestCase objects for evaluation. |
| evaluation/evalute_rag.py | 70 | # Define evaluation metrics |

### Agent/MCP/tool surface

| file | line | text |
| --- | --- | --- |
| helper_functions.py | 7 | from openai import RateLimitError |
| helper_functions.py | 50 | Encodes a PDF book into a vector store using OpenAI embeddings. |
| helper_functions.py | 81 | Encodes a string into a vector store using OpenAI embeddings. |
| helper_functions.py | 326 | OPENAI = "openai" |
| helper_functions.py | 332 | OPENAI = "openai" |
| helper_functions.py | 334 | ANTHROPIC = "anthropic" |
| helper_functions.py | 352 | if provider == EmbeddingProvider.OPENAI: |
| CONTRIBUTING.md | 105 | • You can use Claude or other AI assistants to help you design the graph if needed<br> |

## Gap

- Provenance/citation/evidence
- Memory/update lifecycle
