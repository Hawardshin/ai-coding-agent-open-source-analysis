# pathwaycom/llm-app 코드 레벨 분석

생성일: 2026-06-17T23:31:33.436Z

## 기본 판정

| 항목 | 값 |
| --- | --- |
| type | rag-knowledge-platform |
| maturity | B production-leaning (77) |
| stars | 59331 |
| language | Jupyter Notebook |
| tags | rag, document-chat, korea-signal |
| files/code/source | 88/18/18 |
| tests/ci | 0/21 |
| local path | sources/pathwaycom__llm-app |

## 파이프라인 단계

| 단계 | 상태 | matched files | source files | evidence |
| --- | --- | --- | --- | --- |
| Ingestion/source intake | doc-only | 14 | 0 | templates/adaptive_rag/app.yaml:13 # File System connector, reading data locally. |
| Parsing/OCR/document extraction | code | 17 | 2 | templates/unstructured_to_sql_on_the_fly/app.py:4 The aim of this project is to extract and structure the data out of unstructured data (PDFs, queries) |
| Chunking/splitting | code | 10 | 2 | templates/drive_alert/app.py:20 using the nearest neighbor index. A prompt is built from the relevant chunk |
| Embedding/vector index | code | 18 | 1 | templates/drive_alert/app.py:17 vectors using OpenAI embedding service, and store in a nearest neighbor index. |
| Retrieval/search/rerank | code | 20 | 4 | templates/drive_alert/app.py:209 # - then embed the query for nearest neighbor retrieval |
| Wiki/graph/entity model | code | 12 | 7 | templates/adaptive_rag/app.py:12 # To use Pathway Live Data Framework Community, comment out the line below. |
| Memory/update lifecycle | code | 26 | 9 | templates/adaptive_rag/app.py:53 persistence_backend = pw.persistence.Backend.filesystem("./Cache") |
| Provenance/citation/evidence | doc-only | 2 | 0 | CODE_OF_CONDUCT.md:78 ## Attribution |
| Evaluation/observability | code | 15 | 7 | templates/adaptive_rag/app.py:13 pw.set_license_key("demo-license-key-with-telemetry") |
| Agent/MCP/tool surface | code | 16 | 2 | templates/drive_alert/app.py:17 vectors using OpenAI embedding service, and store in a nearest neighbor index. |

## 의존성 신호

- LLM/app framework: openai
- Document parsing/OCR: beautifulsoup4
- Persistence/database: psycopg

## 주요 파일 후보

### Ingestion/source intake

- `templates/adaptive_rag/app.yaml`
- `templates/document_indexing/app.yaml`
- `templates/document_store_mcp_server/app.yaml`
- `templates/multimodal_rag/app.yaml`
- `templates/private_rag/app.yaml`
- `templates/question_answering_rag/app.yaml`
- `templates/slides_ai_search/app.yaml`
- `templates/adaptive_rag/README.md`
- `templates/document_indexing/README.md`
- `templates/document_store_mcp_server/README.md`
- `templates/multimodal_rag/README.md`
- `templates/private_rag/README.md`
- ... 2 more

### Parsing/OCR/document extraction

- `templates/unstructured_to_sql_on_the_fly/app.py`
- `templates/slides_ai_search/ui/ui.py`
- `templates/adaptive_rag/app.yaml`
- `templates/document_indexing/app.yaml`
- `templates/document_store_mcp_server/app.yaml`
- `templates/multimodal_rag/app.yaml`
- `templates/private_rag/app.yaml`
- `templates/question_answering_rag/app.yaml`
- `templates/slides_ai_search/app.yaml`
- `templates/slides_ai_search/nginx/nginx.conf`
- `README.md`
- `templates/document_indexing/README.md`
- ... 5 more

### Chunking/splitting

- `templates/drive_alert/app.py`
- `templates/slides_ai_search/app.py`
- `templates/adaptive_rag/app.yaml`
- `templates/document_indexing/app.yaml`
- `templates/document_store_mcp_server/app.yaml`
- `templates/multimodal_rag/app.yaml`
- `templates/private_rag/app.yaml`
- `templates/question_answering_rag/app.yaml`
- `templates/drive_alert/README.md`
- `templates/question_answering_rag/README.md`

### Embedding/vector index

- `templates/drive_alert/app.py`
- `pyproject.toml`
- `templates/adaptive_rag/app.yaml`
- `templates/document_indexing/app.yaml`
- `templates/document_store_mcp_server/app.yaml`
- `templates/multimodal_rag/app.yaml`
- `templates/private_rag/app.yaml`
- `templates/question_answering_rag/app.yaml`
- `templates/slides_ai_search/app.yaml`
- `README.md`
- `templates/adaptive_rag/README.md`
- `templates/document_indexing/README.md`
- ... 6 more

### Retrieval/search/rerank

- `templates/drive_alert/app.py`
- `templates/unstructured_to_sql_on_the_fly/app.py`
- `templates/slides_ai_search/ui/ui.py`
- `templates/unstructured_to_sql_on_the_fly/ui/server.py`
- `templates/adaptive_rag/app.yaml`
- `templates/document_indexing/app.yaml`
- `templates/document_store_mcp_server/app.yaml`
- `templates/multimodal_rag/app.yaml`
- `templates/private_rag/app.yaml`
- `templates/question_answering_rag/app.yaml`
- `templates/slides_ai_search/app.yaml`
- `README.md`
- ... 6 more

### Wiki/graph/entity model

- `templates/adaptive_rag/app.py`
- `templates/document_indexing/app.py`
- `templates/drive_alert/app.py`
- `templates/multimodal_rag/app.py`
- `templates/private_rag/app.py`
- `templates/question_answering_rag/app.py`
- `templates/unstructured_to_sql_on_the_fly/app.py`
- `.github/ISSUE_TEMPLATE/config.yml`
- `CODE_OF_CONDUCT.md`
- `CONTRIBUTING.md`
- `templates/multimodal_rag/README.md`
- `templates/private_rag/README.md`

### Memory/update lifecycle

- `templates/adaptive_rag/app.py`
- `templates/document_indexing/app.py`
- `templates/document_store_mcp_server/app.py`
- `templates/multimodal_rag/app.py`
- `templates/private_rag/app.py`
- `templates/question_answering_rag/app.py`
- `templates/slides_ai_search/app.py`
- `templates/question_answering_rag/ui/ui.py`
- `templates/slides_ai_search/ui/ui.py`
- `templates/adaptive_rag/app.yaml`
- `templates/document_indexing/app.yaml`
- `templates/document_store_mcp_server/app.yaml`
- ... 6 more

### Provenance/citation/evidence

- `CODE_OF_CONDUCT.md`
- `README.md`

### Evaluation/observability

- `templates/adaptive_rag/app.py`
- `templates/document_indexing/app.py`
- `templates/drive_alert/app.py`
- `templates/multimodal_rag/app.py`
- `templates/private_rag/app.py`
- `templates/question_answering_rag/app.py`
- `templates/unstructured_to_sql_on_the_fly/app.py`
- `templates/adaptive_rag/app.yaml`
- `templates/document_indexing/app.yaml`
- `templates/document_store_mcp_server/app.yaml`
- `templates/multimodal_rag/app.yaml`
- `templates/private_rag/app.yaml`
- ... 3 more

### Agent/MCP/tool surface

- `templates/drive_alert/app.py`
- `templates/unstructured_to_sql_on_the_fly/app.py`
- `pyproject.toml`
- `templates/document_store_mcp_server/app.yaml`
- `templates/private_rag/app.yaml`
- `README.md`
- `templates/adaptive_rag/README.md`
- `templates/document_indexing/README.md`
- `templates/document_store_mcp_server/README.md`
- `templates/drive_alert/README.md`
- `templates/multimodal_rag/README.md`
- `templates/private_rag/README.md`
- ... 4 more

## Evidence lines

### Ingestion/source intake

| file | line | text |
| --- | --- | --- |
| templates/adaptive_rag/app.yaml | 13 | # File System connector, reading data locally. |
| templates/adaptive_rag/app.yaml | 19 | # Uncomment to use the SharePoint connector |
| templates/adaptive_rag/app.yaml | 30 | # Uncomment to use the Google Drive connector |
| templates/document_indexing/app.yaml | 12 | # File System connector, reading data locally. |
| templates/document_indexing/app.yaml | 18 | # Uncomment to use the SharePoint connector |
| templates/document_indexing/app.yaml | 29 | # Uncomment to use the Google Drive connector |
| templates/document_store_mcp_server/app.yaml | 12 | # File System connector, reading data locally. |
| templates/document_store_mcp_server/app.yaml | 18 | # Uncomment to use the SharePoint connector |

### Parsing/OCR/document extraction

| file | line | text |
| --- | --- | --- |
| templates/unstructured_to_sql_on_the_fly/app.py | 4 | The aim of this project is to extract and structure the data out of unstructured data (PDFs, queries) |
| templates/unstructured_to_sql_on_the_fly/app.py | 14 | Specifically, Pipeline 1 reads in a collection of financial PDF documents from a local directory |
| templates/unstructured_to_sql_on_the_fly/app.py | 24 | https://pathway.com/developers/templates/rag/unstructured-to-structured |
| templates/unstructured_to_sql_on_the_fly/app.py | 46 | 4. For readability, if no aggregator is used, the company_symbol, year, |
| templates/slides_ai_search/ui/ui.py | 11 | from bs4 import BeautifulSoup |
| templates/slides_ai_search/ui/ui.py | 156 | soup = BeautifulSoup(response.content, "html.parser") |
| templates/slides_ai_search/ui/ui.py | 168 | """This demo app only allows `PDF` and `PPTX` documents. |
| templates/slides_ai_search/ui/ui.py | 169 | For other file types, convert to `PDF` or contact **Pathway**.""" |

### Chunking/splitting

| file | line | text |
| --- | --- | --- |
| templates/drive_alert/app.py | 20 | using the nearest neighbor index. A prompt is built from the relevant chunk |
| templates/drive_alert/app.py | 173 | splitter = TokenCountSplitter() |
| templates/drive_alert/app.py | 175 | chunks=splitter(pw.this.texts, min_tokens=40, max_tokens=120) |
| templates/drive_alert/app.py | 178 | documents = documents.select(chunk=pw.this.chunks[0]) |
| templates/drive_alert/app.py | 180 | enriched_documents = documents + documents.select(data=embedder(pw.this.chunk)) |
| templates/drive_alert/app.py | 239 | documents_list=pw.this.chunk |
| templates/slides_ai_search/app.py | 57 | splitter=None, |
| templates/adaptive_rag/app.yaml | 63 | # Defines the splitter settings for dividing text into smaller chunks. |

### Embedding/vector index

| file | line | text |
| --- | --- | --- |
| templates/drive_alert/app.py | 17 | vectors using OpenAI embedding service, and store in a nearest neighbor index. |
| templates/drive_alert/app.py | 19 | Each query text is first turned into a vector, then relevant document chunks are found |
| templates/drive_alert/app.py | 134 | embedder_locator: str = "text-embedding-ada-002", |
| templates/drive_alert/app.py | 147 | embedder = OpenAIEmbedder( |
| templates/drive_alert/app.py | 180 | enriched_documents = documents + documents.select(data=embedder(pw.this.chunk)) |
| templates/drive_alert/app.py | 228 | data=embedder(pw.this.query), |
| pyproject.toml | 4 | description = "LLM-App is a library for creating responsive AI applications leveraging OpenAI/Hugging Face APIs to provide responses to user queries based on live data sources. Build your own LLM application in 30 lines |
| templates/adaptive_rag/app.yaml | 57 | # Specifies the embedder model for converting text into embeddings. |

### Retrieval/search/rerank

| file | line | text |
| --- | --- | --- |
| templates/drive_alert/app.py | 209 | # - then embed the query for nearest neighbor retrieval |
| templates/unstructured_to_sql_on_the_fly/app.py | 137 | to retrieve data from the columns. |
| templates/slides_ai_search/ui/ui.py | 42 | <H4><b>Search your slide decks""" |
| templates/slides_ai_search/ui/ui.py | 179 | markdown_table = "\| Slides Ready for Search \|\n\| --- \|\n" |
| templates/slides_ai_search/ui/ui.py | 415 | f"""No results were found for search query: `{question}` |
| templates/unstructured_to_sql_on_the_fly/ui/server.py | 40 | "Search for something", |
| templates/adaptive_rag/app.yaml | 73 | # Sets up the retriever factory for indexing and retrieving documents. |
| templates/adaptive_rag/app.yaml | 79 | # Manages the storage and retrieval of documents for the RAG template. |

### Wiki/graph/entity model

| file | line | text |
| --- | --- | --- |
| templates/adaptive_rag/app.py | 12 | # To use Pathway Live Data Framework Community, comment out the line below. |
| templates/document_indexing/app.py | 12 | # To use Pathway Live Data Framework Community, comment out the line below. |
| templates/drive_alert/app.py | 43 | # To use Pathway Live Data Framework Community, comment out the line below. |
| templates/multimodal_rag/app.py | 12 | # To use Pathway Live Data Framework Community, comment out the line below. |
| templates/private_rag/app.py | 12 | # To use Pathway Live Data Framework Community, comment out the line below. |
| templates/question_answering_rag/app.py | 12 | # To use Pathway Live Data Framework Community, comment out the line below. |
| templates/unstructured_to_sql_on_the_fly/app.py | 72 | # To use Pathway Live Data Framework Community, comment out the line below. |
| .github/ISSUE_TEMPLATE/config.yml | 5 | about: We are using Discussions as a place to connect with other members of the Pathway community. |

### Memory/update lifecycle

| file | line | text |
| --- | --- | --- |
| templates/adaptive_rag/app.py | 53 | persistence_backend = pw.persistence.Backend.filesystem("./Cache") |
| templates/document_indexing/app.py | 52 | persistence_backend = pw.persistence.Backend.filesystem("./Cache") |
| templates/document_store_mcp_server/app.py | 29 | persistence_backend = pw.persistence.Backend.filesystem("./Cache") |
| templates/multimodal_rag/app.py | 53 | persistence_backend = pw.persistence.Backend.filesystem("./Cache") |
| templates/private_rag/app.py | 53 | persistence_backend = pw.persistence.Backend.filesystem("./Cache") |
| templates/question_answering_rag/app.py | 53 | persistence_backend = pw.persistence.Backend.filesystem("./Cache") |
| templates/slides_ai_search/app.py | 83 | persistence_backend = pw.persistence.Backend.filesystem("./Cache") |
| templates/question_answering_rag/ui/ui.py | 138 | st.button("⟳ Refresh", use_container_width=True) |

### Provenance/citation/evidence

| file | line | text |
| --- | --- | --- |
| CODE_OF_CONDUCT.md | 78 | ## Attribution |
| README.md | 64 | ▶️ [An introduction to building LLM apps with Pathway Live Data Framework](https://www.youtube.com/watch?v=kcrJSk00duw) - by [Jan Chorowski](https://scholar.google.com/citations?user=Yc94070AAAAJ) |

### Evaluation/observability

| file | line | text |
| --- | --- | --- |
| templates/adaptive_rag/app.py | 13 | pw.set_license_key("demo-license-key-with-telemetry") |
| templates/document_indexing/app.py | 13 | pw.set_license_key("demo-license-key-with-telemetry") |
| templates/drive_alert/app.py | 44 | pw.set_license_key("demo-license-key-with-telemetry") |
| templates/multimodal_rag/app.py | 13 | pw.set_license_key("demo-license-key-with-telemetry") |
| templates/private_rag/app.py | 13 | pw.set_license_key("demo-license-key-with-telemetry") |
| templates/question_answering_rag/app.py | 13 | pw.set_license_key("demo-license-key-with-telemetry") |
| templates/unstructured_to_sql_on_the_fly/app.py | 73 | pw.set_license_key("demo-license-key-with-telemetry") |
| templates/adaptive_rag/app.yaml | 77 | metric: !pw.indexing.USearchMetricKind.COS |

### Agent/MCP/tool surface

| file | line | text |
| --- | --- | --- |
| templates/drive_alert/app.py | 17 | vectors using OpenAI embedding service, and store in a nearest neighbor index. |
| templates/drive_alert/app.py | 21 | and sent to the OpenAI GPT3.5 chat service for processing and answering. |
| templates/unstructured_to_sql_on_the_fly/app.py | 16 | then extracts, using the OpenAI API, the wanted fields. |
| templates/unstructured_to_sql_on_the_fly/app.py | 21 | Each query text is converted into a SQL query using the OpenAI API. |
| pyproject.toml | 4 | description = "LLM-App is a library for creating responsive AI applications leveraging OpenAI/Hugging Face APIs to provide responses to user queries based on live data sources. Build your own LLM application in 30 lines |
| templates/document_store_mcp_server/app.yaml | 72 | # Streamable MCP server, can be proxied |
| templates/document_store_mcp_server/app.yaml | 74 | name: "Streamable MCP Server" |
| templates/private_rag/app.yaml | 50 | $llm_model: "ollama/mistral" |

## Gap

- Provenance/citation/evidence
- tests
