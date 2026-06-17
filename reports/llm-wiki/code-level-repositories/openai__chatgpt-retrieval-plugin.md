# openai/chatgpt-retrieval-plugin 코드 레벨 분석

생성일: 2026-06-17T23:31:27.359Z

## 기본 판정

| 항목 | 값 |
| --- | --- |
| type | rag-knowledge-platform |
| maturity | A integrated platform (98) |
| stars | 21190 |
| language | Python |
| tags | rag, document-chat, korea-signal |
| files/code/source | 116/53/33 |
| tests/ci | 17/6 |
| local path | sources/openai__chatgpt-retrieval-plugin |

## 파이프라인 단계

| 단계 | 상태 | matched files | source files | evidence |
| --- | --- | --- | --- | --- |
| Ingestion/source intake | code | 5 | 2 | services/file.py:93 # get the file body from the upload file object |
| Parsing/OCR/document extraction | code | 6 | 1 | services/file.py:9 import pptx |
| Chunking/splitting | code | 25 | 14 | services/chunks.py:16 CHUNK_SIZE = 200 # The target size of each text chunk in tokens |
| Embedding/vector index | code | 73 | 20 | services/chunks.py:21 ) # The number of embeddings to request at a time |
| Retrieval/search/rerank | code | 48 | 8 | server/main.py:38 title="Retrieval Plugin API", |
| Wiki/graph/entity model | code | 8 | 1 | datastore/providers/milvus_datastore.py:451 metadata[x] = hit.entity.get(x) |
| Memory/update lifecycle | code | 49 | 21 | server/main.py:48 "/upsert-file", |
| Provenance/citation/evidence | code | 30 | 15 | models/models.py:14 source_id: Optional[str] = None |
| Evaluation/observability | code | 9 | 2 | datastore/providers/azurecosmosdb_datastore.py:216 similarity (str) : Similarity metric to use with the IVF index. Possible options are COS (cosine distance), |
| Agent/MCP/tool surface | code | 40 | 10 | services/chunks.py:8 from services.openai import get_embeddings |

## 의존성 신호

- Persistence/database: psycopg2cffi

## 주요 파일 후보

### Ingestion/source intake

- `services/file.py`
- `datastore/providers/azuresearch_datastore.py`
- `tests/datastore/providers/mongodb_atlas/test_integration.py`
- `README.md`
- `docs/providers/mongodb/setup.md`

### Parsing/OCR/document extraction

- `services/file.py`
- `pyproject.toml`
- `README.md`
- `scripts/process_zip/README.md`
- `docs/providers/analyticdb/setup.md`
- `docs/providers/llama/setup.md`

### Chunking/splitting

- `services/chunks.py`
- `datastore/providers/analyticdb_datastore.py`
- `datastore/providers/azurecosmosdb_datastore.py`
- `datastore/providers/azuresearch_datastore.py`
- `datastore/providers/chroma_datastore.py`
- `datastore/providers/elasticsearch_datastore.py`
- `datastore/providers/llama_datastore.py`
- `datastore/providers/milvus_datastore.py`
- `datastore/providers/mongodb_atlas_datastore.py`
- `datastore/providers/pgvector_datastore.py`
- `datastore/providers/pinecone_datastore.py`
- `datastore/providers/qdrant_datastore.py`
- ... 6 more

### Embedding/vector index

- `services/chunks.py`
- `services/openai.py`
- `datastore/datastore.py`
- `datastore/factory.py`
- `models/models.py`
- `datastore/providers/analyticdb_datastore.py`
- `datastore/providers/azurecosmosdb_datastore.py`
- `datastore/providers/azuresearch_datastore.py`
- `datastore/providers/chroma_datastore.py`
- `datastore/providers/elasticsearch_datastore.py`
- `datastore/providers/llama_datastore.py`
- `datastore/providers/milvus_datastore.py`
- ... 6 more

### Retrieval/search/rerank

- `server/main.py`
- `datastore/providers/azurecosmosdb_datastore.py`
- `datastore/providers/azuresearch_datastore.py`
- `datastore/providers/chroma_datastore.py`
- `datastore/providers/milvus_datastore.py`
- `datastore/providers/mongodb_atlas_datastore.py`
- `datastore/providers/redis_datastore.py`
- `datastore/providers/weaviate_datastore.py`
- `pyproject.toml`
- `.well-known/ai-plugin.json`
- `.well-known/openapi.yaml`
- `local_server/ai-plugin.json`
- ... 6 more

### Wiki/graph/entity model

- `datastore/providers/milvus_datastore.py`
- `tests/datastore/providers/analyticdb/test_analyticdb_datastore.py`
- `tests/datastore/providers/milvus/test_milvus_datastore.py`
- `README.md`
- `docs/providers/analyticdb/setup.md`
- `docs/providers/llama/setup.md`
- `docs/providers/milvus/setup.md`
- `docs/providers/supabase/setup.md`

### Memory/update lifecycle

- `server/main.py`
- `datastore/datastore.py`
- `local_server/main.py`
- `datastore/providers/analyticdb_datastore.py`
- `datastore/providers/azurecosmosdb_datastore.py`
- `datastore/providers/azuresearch_datastore.py`
- `datastore/providers/chroma_datastore.py`
- `datastore/providers/elasticsearch_datastore.py`
- `datastore/providers/llama_datastore.py`
- `datastore/providers/milvus_datastore.py`
- `datastore/providers/mongodb_atlas_datastore.py`
- `datastore/providers/pgvector_datastore.py`
- ... 6 more

### Provenance/citation/evidence

- `models/models.py`
- `datastore/providers/analyticdb_datastore.py`
- `datastore/providers/azurecosmosdb_datastore.py`
- `datastore/providers/azuresearch_datastore.py`
- `datastore/providers/chroma_datastore.py`
- `datastore/providers/milvus_datastore.py`
- `datastore/providers/pgvector_datastore.py`
- `datastore/providers/postgres_datastore.py`
- `datastore/providers/qdrant_datastore.py`
- `datastore/providers/redis_datastore.py`
- `datastore/providers/supabase_datastore.py`
- `datastore/providers/weaviate_datastore.py`
- ... 6 more

### Evaluation/observability

- `datastore/providers/azurecosmosdb_datastore.py`
- `datastore/providers/azuresearch_datastore.py`
- `tests/datastore/providers/milvus/test_milvus_datastore.py`
- `README.md`
- `docs/providers/analyticdb/setup.md`
- `docs/providers/milvus/setup.md`
- `docs/providers/pinecone/setup.md`
- `docs/providers/redis/setup.md`
- `docs/providers/zilliz/setup.md`

### Agent/MCP/tool surface

- `services/chunks.py`
- `services/extract_metadata.py`
- `services/openai.py`
- `services/pii_detection.py`
- `datastore/datastore.py`
- `local_server/main.py`
- `datastore/providers/azurecosmosdb_datastore.py`
- `datastore/providers/azuresearch_datastore.py`
- `datastore/providers/chroma_datastore.py`
- `datastore/providers/redis_datastore.py`
- `pyproject.toml`
- `examples/authentication-methods/oauth/ai-plugin.json`
- ... 6 more

## Evidence lines

### Ingestion/source intake

| file | line | text |
| --- | --- | --- |
| services/file.py | 93 | # get the file body from the upload file object |
| datastore/providers/azuresearch_datastore.py | 79 | async def upload(): |
| datastore/providers/azuresearch_datastore.py | 84 | raise Exception(f"Failed to upload {len(azdocuments) - count} chunks") |
| datastore/providers/azuresearch_datastore.py | 108 | await upload() |
| datastore/providers/azuresearch_datastore.py | 112 | await upload() |
| tests/datastore/providers/mongodb_atlas/test_integration.py | 53 | """Upload documents to the datastore via plugin's REST API.""" |
| README.md | 518 | To keep the documents stored in the vector database up-to-date, consider using tools like [Zapier](https://zapier.com) or [Make](https://www.make.com) to configure incoming webhooks to your plugin's API based on events o |
| README.md | 538 | The `scripts` folder contains scripts to batch upsert or process text documents from different data sources, such as a zip file, JSON file, or JSONL file. These scripts use the plugin's upsert utility functions to upload |

### Parsing/OCR/document extraction

| file | line | text |
| --- | --- | --- |
| services/file.py | 9 | import pptx |
| services/file.py | 49 | if mimetype == "application/pdf": |
| services/file.py | 50 | # Extract text from pdf using PyPDF2 |
| services/file.py | 52 | extracted_text = " ".join([page.extract_text() for page in reader.pages]) |
| services/file.py | 60 | # Extract text from docx using docx2txt |
| services/file.py | 73 | # Extract text from pptx using python-pptx |
| services/file.py | 75 | presentation = pptx.Presentation(file) |
| pyproject.toml | 21 | python-pptx = "^0.6.21" |

### Chunking/splitting

| file | line | text |
| --- | --- | --- |
| services/chunks.py | 16 | CHUNK_SIZE = 200 # The target size of each text chunk in tokens |
| services/chunks.py | 17 | MIN_CHUNK_SIZE_CHARS = 350 # The minimum size of each text chunk in characters |
| services/chunks.py | 31 | chunk_token_size: The target size of each chunk in tokens, or None to use the default CHUNK_SIZE. |
| services/chunks.py | 46 | # Use the provided chunk token size or the default one |
| services/chunks.py | 54 | # Take the first chunk_size tokens as a chunk |
| services/chunks.py | 55 | chunk = tokens[:chunk_size] |
| services/chunks.py | 57 | # Decode the chunk into text |
| services/chunks.py | 58 | chunk_text = tokenizer.decode(chunk) |

### Embedding/vector index

| file | line | text |
| --- | --- | --- |
| services/chunks.py | 21 | ) # The number of embeddings to request at a time |
| services/chunks.py | 164 | with text, metadata, and embedding attributes. |
| services/chunks.py | 186 | # Get all the embeddings for the document chunks in batches, using get_embeddings |
| services/chunks.py | 187 | embeddings: List[List[float]] = [] |
| services/chunks.py | 194 | # Get the embeddings for the batch texts |
| services/chunks.py | 197 | # Append the batch embeddings to the embeddings list |
| services/chunks.py | 198 | embeddings.extend(batch_embeddings) |
| services/chunks.py | 200 | # Update the document chunk objects with the embeddings |

### Retrieval/search/rerank

| file | line | text |
| --- | --- | --- |
| server/main.py | 38 | title="Retrieval Plugin API", |
| server/main.py | 39 | description="A retrieval API for querying and filtering documents based on natural language queries and metadata", |
| server/main.py | 110 | description="Accepts search query objects array each with query and optional filter. Break down complex questions into sub-questions. Refine results by criteria, e.g. time / source, don't do this often. Split queries if |
| datastore/providers/azurecosmosdb_datastore.py | 147 | "$search": { |
| datastore/providers/azurecosmosdb_datastore.py | 165 | # Perform vector search |
| datastore/providers/azurecosmosdb_datastore.py | 215 | performing brute-force search, which has limited performance. |
| datastore/providers/azuresearch_datastore.py | 11 | from azure.search.documents.aio import SearchClient |
| datastore/providers/azuresearch_datastore.py | 12 | from azure.search.documents.indexes import SearchIndexClient |

### Wiki/graph/entity model

| file | line | text |
| --- | --- | --- |
| datastore/providers/milvus_datastore.py | 451 | metadata[x] = hit.entity.get(x) |
| datastore/providers/milvus_datastore.py | 485 | """Delete the entities based either on the chunk_id of the vector, |
| tests/datastore/providers/analyticdb/test_analyticdb_datastore.py | 184 | # Num entities currently doesn't track deletes |
| tests/datastore/providers/milvus/test_milvus_datastore.py | 204 | # Num entities currently doesn't track deletes |
| README.md | 612 | We welcome contributions from the community to help improve the ChatGPT Retrieval Plugin and expand its capabilities. If you have an idea or feature you'd like to contribute, please submit a pull request to the repositor |
| docs/providers/analyticdb/setup.md | 60 | \| `PG_COLLECTION` \| Optional \| AnalyticDB relation name \| `document_chunks` \| |
| docs/providers/llama/setup.md | 44 | and engage with the community on [discord](https://discord.com/invite/dGcwcsnxhU). |
| docs/providers/milvus/setup.md | 11 | - A developer-first community with multi-language support |

### Memory/update lifecycle

| file | line | text |
| --- | --- | --- |
| server/main.py | 48 | "/upsert-file", |
| server/main.py | 67 | ids = await datastore.upsert([document]) |
| server/main.py | 75 | "/upsert", |
| server/main.py | 78 | async def upsert( |
| server/main.py | 82 | ids = await datastore.upsert(request.documents) |
| server/main.py | 125 | @app.delete( |
| server/main.py | 126 | "/delete", |
| server/main.py | 129 | async def delete( |

### Provenance/citation/evidence

| file | line | text |
| --- | --- | --- |
| models/models.py | 14 | source_id: Optional[str] = None |
| models/models.py | 48 | source_id: Optional[str] = None |
| datastore/providers/analyticdb_datastore.py | 73 | source_id TEXT, |
| datastore/providers/analyticdb_datastore.py | 137 | chunk.metadata.source_id, |
| datastore/providers/analyticdb_datastore.py | 148 | INSERT INTO {self.collection_name} (id, content, embedding, document_id, source, source_id, url, author, created_at) |
| datastore/providers/analyticdb_datastore.py | 155 | source_id = EXCLUDED.source_id, |
| datastore/providers/analyticdb_datastore.py | 182 | source_id, |
| datastore/providers/analyticdb_datastore.py | 205 | ("source_id=%s", query_filter.source_id), |

### Evaluation/observability

| file | line | text |
| --- | --- | --- |
| datastore/providers/azurecosmosdb_datastore.py | 216 | similarity (str) : Similarity metric to use with the IVF index. Possible options are COS (cosine distance), |
| datastore/providers/azuresearch_datastore.py | 350 | hnsw_parameters=HnswParameters(metric="cosine"), |
| tests/datastore/providers/milvus/test_milvus_datastore.py | 32 | # since metric type is consine, we create vector contains only one element 1, others 0 |
| README.md | 392 | [Zilliz](https://zilliz.com) is a managed cloud-native vector database designed for billion-scale data. It offers a wide range of features, including multiple indexing algorithms, distance metrics, scalar filtering, time |
| README.md | 396 | [Milvus](https://milvus.io/) is an open-source, cloud-native vector database that scales to billions of vectors. It is the open-source version of Zilliz and shares many of its features, such as various indexing algorithm |
| README.md | 438 | [AnalyticDB](https://www.alibabacloud.com/help/en/analyticdb-for-postgresql/latest/product-introduction-overview) is a distributed cloud-native vector database designed for storing documents and vector embeddings. It is |
| docs/providers/analyticdb/setup.md | 3 | [AnalyticDB](https://www.alibabacloud.com/help/en/analyticdb-for-postgresql/latest/product-introduction-overview) is a distributed cloud-native vector database designed for storing documents and vector embeddings. It is |
| docs/providers/milvus/setup.md | 5 | - Various indexing algorithms and distance metrics |

### Agent/MCP/tool surface

| file | line | text |
| --- | --- | --- |
| services/chunks.py | 8 | from services.openai import get_embeddings |
| services/extract_metadata.py | 2 | from services.openai import get_chat_completion |
| services/openai.py | 2 | import openai |
| services/openai.py | 15 | Embed texts using OpenAI's ada model. |
| services/openai.py | 24 | Exception: If the OpenAI API call fails. |
| services/openai.py | 26 | # Call the OpenAI API to get the embeddings |
| services/openai.py | 32 | response = openai.Embedding.create(input=texts, model=EMBEDDING_MODEL, dimensions=EMBEDDING_DIMENSION) |
| services/openai.py | 34 | response = openai.Embedding.create(input=texts, deployment_id=deployment) |

## Gap

_없음_
