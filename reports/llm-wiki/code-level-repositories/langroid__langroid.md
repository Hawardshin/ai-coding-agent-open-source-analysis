# langroid/langroid 코드 레벨 분석

생성일: 2026-06-17T23:31:52.413Z

## 기본 판정

| 항목 | 값 |
| --- | --- |
| type | graph-rag/kg |
| maturity | A integrated platform (106) |
| stars | 4040 |
| language | Python |
| tags | rag, agent-knowledge, korea-signal |
| files/code/source | 657/436/141 |
| tests/ci | 120/10 |
| local path | sources/langroid__langroid |

## 파이프라인 단계

| 단계 | 상태 | matched files | source files | evidence |
| --- | --- | --- | --- | --- |
| Ingestion/source intake | code | 57 | 12 | langroid/parsing/document_parser.py:1308 # fallback: assume file upload is similar to OpenAI API |
| Parsing/OCR/document extraction | code | 75 | 10 | langroid/parsing/document_parser.py:28 from bs4 import BeautifulSoup |
| Chunking/splitting | code | 69 | 13 | langroid/mytypes.py:50 is_chunk: bool = False # if it is a chunk, don't split |
| Embedding/vector index | code | 117 | 23 | langroid/embedding_models/base.py:21 Abstract base class for an embedding model. |
| Retrieval/search/rerank | code | 187 | 46 | langroid/agent/tools/retrieval_tool.py:8 Retrieval tool, only to be used by a DocChatAgent. |
| Wiki/graph/entity model | code | 103 | 24 | langroid/__init__.py:50 Entity, |
| Memory/update lifecycle | code | 224 | 42 | visual_log.sh:3 echo "Starting import profiling without cache..." |
| Provenance/citation/evidence | code | 40 | 8 | langroid/agent/chat_agent.py:107 full_citations: Whether to show source reference citation + content for each |
| Evaluation/observability | code | 41 | 8 | langroid/agent/task.py:1954 # recall there's always a dummy msg with freq = 1 |
| Agent/MCP/tool surface | code | 440 | 67 | langroid/__init__.py:16 from . import agent |

## 의존성 신호

- LLM/app framework: openai, sentence-transformers, transformers, litellm
- Vector/search store: qdrant-client, lancedb, chromadb, weaviate-client, pinecone-client, pgvector, meilisearch-python-sdk
- Graph/KG store: neo4j
- Document parsing/OCR: bs4, pypdfium2, pymupdf4llm, pymupdf, pypdf, pytesseract, python-docx, unstructured
- Persistence/database: fakeredis, redis, sqlalchemy, psycopg2, psycopg2-binary, pymysql, pgvector, types-redis

## 주요 파일 후보

### Ingestion/source intake

- `langroid/parsing/document_parser.py`
- `langroid/parsing/spider.py`
- `langroid/parsing/url_loader.py`
- `langroid/vector_store/chromadb.py`
- `langroid/vector_store/lancedb.py`
- `langroid/vector_store/meilisearch.py`
- `langroid/vector_store/pineconedb.py`
- `langroid/vector_store/qdrantdb.py`
- `langroid/vector_store/weaviatedb.py`
- `langroid/agent/special/doc_chat_agent.py`
- `langroid/agent/special/lance_doc_chat_agent.py`
- `langroid/agent/special/retriever_agent.py`
- ... 6 more

### Parsing/OCR/document extraction

- `langroid/parsing/document_parser.py`
- `langroid/parsing/file_attachment.py`
- `langroid/parsing/para_sentence_split.py`
- `langroid/parsing/parser.py`
- `langroid/parsing/pdf_utils.py`
- `langroid/parsing/url_loader.py`
- `langroid/parsing/urls.py`
- `langroid/parsing/web_search.py`
- `langroid/agent/callbacks/chainlit.py`
- `langroid/agent/special/doc_chat_agent.py`
- `mkdocs.yml`
- `pyproject.toml`
- ... 6 more

### Chunking/splitting

- `langroid/mytypes.py`
- `langroid/language_models/openai_gpt.py`
- `langroid/parsing/__init__.py`
- `langroid/parsing/code_parser.py`
- `langroid/parsing/document_parser.py`
- `langroid/parsing/md_parser.py`
- `langroid/parsing/para_sentence_split.py`
- `langroid/parsing/parser.py`
- `langroid/parsing/utils.py`
- `langroid/vector_store/base.py`
- `langroid/agent/special/doc_chat_agent.py`
- `langroid/agent/special/relevance_extractor_agent.py`
- ... 6 more

### Embedding/vector index

- `langroid/embedding_models/base.py`
- `langroid/embedding_models/models.py`
- `langroid/embedding_models/remote_embeds.py`
- `langroid/embedding_models/protoc/embeddings_pb2_grpc.py`
- `langroid/embedding_models/protoc/embeddings_pb2.py`
- `langroid/mytypes.py`
- `langroid/parsing/code_parser.py`
- `langroid/parsing/parser.py`
- `langroid/utils/pydantic_utils.py`
- `langroid/utils/system.py`
- `langroid/vector_store/__init__.py`
- `langroid/vector_store/base.py`
- ... 6 more

### Retrieval/search/rerank

- `langroid/agent/tools/retrieval_tool.py`
- `scripts/fix-pydantic-imports.sh`
- `langroid/agent/base.py`
- `langroid/agent/chat_agent.py`
- `langroid/agent/openai_assistant.py`
- `langroid/agent/task.py`
- `langroid/agent/xml_tool_message.py`
- `langroid/cachedb/base.py`
- `langroid/cachedb/redis_cachedb.py`
- `langroid/language_models/openai_gpt.py`
- `langroid/parsing/__init__.py`
- `langroid/parsing/code_parser.py`
- ... 6 more

### Wiki/graph/entity model

- `langroid/__init__.py`
- `langroid/mytypes.py`
- `langroid/agent/base.py`
- `langroid/agent/chat_agent.py`
- `langroid/agent/chat_document.py`
- `langroid/agent/openai_assistant.py`
- `langroid/agent/task.py`
- `langroid/agent/xml_tool_message.py`
- `langroid/language_models/openai_gpt.py`
- `langroid/utils/html_logger.py`
- `langroid/vector_store/base.py`
- `langroid/agent/callbacks/chainlit.py`
- ... 6 more

### Memory/update lifecycle

- `visual_log.sh`
- `langroid/exceptions.py`
- `langroid/agent/base.py`
- `langroid/agent/chat_agent.py`
- `langroid/agent/chat_document.py`
- `langroid/agent/openai_assistant.py`
- `langroid/agent/task.py`
- `langroid/cachedb/base.py`
- `langroid/cachedb/redis_cachedb.py`
- `langroid/language_models/client_cache.py`
- `langroid/language_models/openai_gpt.py`
- `langroid/language_models/provider_params.py`
- ... 6 more

### Provenance/citation/evidence

- `langroid/agent/chat_agent.py`
- `langroid/agent/openai_assistant.py`
- `langroid/agent/task.py`
- `langroid/language_models/base.py`
- `langroid/parsing/repo_loader.py`
- `langroid/prompts/templates.py`
- `langroid/agent/special/doc_chat_agent.py`
- `langroid/utils/output/citations.py`
- `.github/workflows/docker-publish.yml`
- `examples/multi-agent-debate/system_messages.json`
- `examples/docqa/chat_search.py`
- `examples/docqa/chat-local.py`
- ... 6 more

### Evaluation/observability

- `langroid/agent/task.py`
- `langroid/language_models/openai_gpt.py`
- `langroid/language_models/provider_params.py`
- `langroid/utils/pandas_utils.py`
- `langroid/vector_store/base.py`
- `langroid/vector_store/lancedb.py`
- `langroid/vector_store/pineconedb.py`
- `langroid/agent/special/table_chat_agent.py`
- `examples/basic/done_sequences_example.py`
- `examples/basic/multi-agent-medical.py`
- `examples/multi-agent-debate/main_chainlit.py`
- `examples/portkey/portkey_advanced_features.py`
- ... 6 more

### Agent/MCP/tool surface

- `langroid/__init__.py`
- `langroid/mytypes.py`
- `langroid/agent/__init__.py`
- `langroid/agent/base.py`
- `langroid/agent/batch.py`
- `langroid/agent/chat_agent.py`
- `langroid/agent/chat_document.py`
- `langroid/agent/done_sequence_parser.py`
- `langroid/agent/openai_assistant.py`
- `langroid/agent/task.py`
- `langroid/agent/tool_message.py`
- `langroid/agent/xml_tool_message.py`
- ... 6 more

## Evidence lines

### Ingestion/source intake

| file | line | text |
| --- | --- | --- |
| langroid/parsing/document_parser.py | 1308 | # fallback: assume file upload is similar to OpenAI API |
| langroid/parsing/spider.py | 9 | from scrapy.crawler import CrawlerRunner |
| langroid/parsing/url_loader.py | 35 | # Base crawler config and specific configurations |
| langroid/parsing/url_loader.py | 43 | """Configuration for Trafilatura crawler.""" |
| langroid/parsing/url_loader.py | 50 | """Configuration for Firecrawl crawler.""" |
| langroid/parsing/url_loader.py | 53 | mode: str = "scrape" |
| langroid/parsing/url_loader.py | 99 | """Initialize the base crawler. |
| langroid/parsing/url_loader.py | 102 | config: Configuration for the crawler |

### Parsing/OCR/document extraction

| file | line | text |
| --- | --- | --- |
| langroid/parsing/document_parser.py | 28 | from bs4 import BeautifulSoup |
| langroid/parsing/document_parser.py | 41 | PDF = "pdf" |
| langroid/parsing/document_parser.py | 42 | DOCX = "docx" |
| langroid/parsing/document_parser.py | 47 | PPTX = "pptx" |
| langroid/parsing/document_parser.py | 111 | such as PDFs or Docx. |
| langroid/parsing/document_parser.py | 139 | if inferred_doc_type == DocumentType.PDF: |
| langroid/parsing/document_parser.py | 140 | if config.pdf.library == "fitz": |
| langroid/parsing/document_parser.py | 142 | elif config.pdf.library == "pymupdf4llm": |

### Chunking/splitting

| file | line | text |
| --- | --- | --- |
| langroid/mytypes.py | 50 | is_chunk: bool = False # if it is a chunk, don't split |
| langroid/language_models/openai_gpt.py | 937 | """Separate inline reasoning from text tokens in a streaming chunk. |
| langroid/language_models/openai_gpt.py | 940 | rather than using a separate reasoning field, this splits the chunk |
| langroid/language_models/openai_gpt.py | 1006 | # we have a "usage" chunk, and empty choices, so we're done |
| langroid/language_models/openai_gpt.py | 1007 | # ASSUMPTION: a usage chunk ONLY arrives AFTER all normal completion text! |
| langroid/language_models/openai_gpt.py | 1171 | # we got usage chunk, and empty choices, so we're done |
| langroid/language_models/openai_gpt.py | 1346 | # if not streaming, then we don't wait for last "usage" chunk |
| langroid/language_models/openai_gpt.py | 1349 | # mark done, so we quit after the last "usage" chunk |

### Embedding/vector index

| file | line | text |
| --- | --- | --- |
| langroid/embedding_models/base.py | 21 | Abstract base class for an embedding model. |
| langroid/embedding_models/base.py | 26 | Return a copy of this embedding model suitable for use in cloned agents. |
| langroid/embedding_models/base.py | 75 | raise ValueError(f"Unknown embedding config: {config.__class__.__name__}") |
| langroid/embedding_models/models.py | 15 | from langroid.mytypes import Embeddings |
| langroid/embedding_models/models.py | 23 | model_name: str = "text-embedding-3-small" |
| langroid/embedding_models/models.py | 36 | model_name: str = "text-embedding-3-small" |
| langroid/embedding_models/models.py | 40 | # api_version defaulted to 2024-06-01 as per https://learn.microsoft.com/en-us/azure/ai-services/openai/how-to/embeddings?tabs=python-new |
| langroid/embedding_models/models.py | 64 | """Config for qdrant/fastembed embeddings, |

### Retrieval/search/rerank

| file | line | text |
| --- | --- | --- |
| langroid/agent/tools/retrieval_tool.py | 8 | Retrieval tool, only to be used by a DocChatAgent. |
| langroid/agent/tools/retrieval_tool.py | 14 | To retrieve up to <num_results> passages from a document-set, that are |
| langroid/agent/tools/retrieval_tool.py | 16 | search phrase. |
| scripts/fix-pydantic-imports.sh | 12 | # Define the directories to search in |
| langroid/agent/base.py | 2043 | - search for a tool in `msg.tool_messages` that has a field of output_type, |
| langroid/agent/base.py | 2079 | # then search for output_type as a field in a tool |
| langroid/agent/chat_agent.py | 109 | search_for_tools_everywhere: Whether to search for tools everywhere, |
| langroid/agent/chat_agent.py | 252 | # search for tools according to the agent configuration |

### Wiki/graph/entity model

| file | line | text |
| --- | --- | --- |
| langroid/__init__.py | 50 | Entity, |
| langroid/__init__.py | 78 | "Entity", |
| langroid/mytypes.py | 14 | class Entity(str, Enum): |
| langroid/mytypes.py | 16 | Enum for the different types of entities that can respond to the current message. |
| langroid/agent/base.py | 52 | from langroid.mytypes import Entity |
| langroid/agent/base.py | 212 | Tuple[Entity, Callable[[None \| str \| ChatDocument], None \| ChatDocument]] |
| langroid/agent/base.py | 215 | Sequence of (entity, response_method) pairs. This sequence is used |
| langroid/agent/base.py | 219 | Sequence of (entity, response_method) pairs. |

### Memory/update lifecycle

| file | line | text |
| --- | --- | --- |
| visual_log.sh | 3 | echo "Starting import profiling without cache..." |
| visual_log.sh | 27 | # Run Python import profiling without cache |
| visual_log.sh | 28 | echo "Profiling imports using Python's -X importtime with no cache..." |
| langroid/exceptions.py | 75 | uv sync --dev --extra "{extra}" |
| langroid/exceptions.py | 77 | uv sync --dev --extra "{extra}" --extra "another-extra" |
| langroid/agent/base.py | 1822 | # also applies on the sync path (GHSA-gjgq-w2m6-wr5q). |
| langroid/agent/base.py | 2287 | # usage, cost = 0 when response is from cache |
| langroid/agent/chat_agent.py | 426 | start (int): index of first message to delete; default = -2 |

### Provenance/citation/evidence

| file | line | text |
| --- | --- | --- |
| langroid/agent/chat_agent.py | 107 | full_citations: Whether to show source reference citation + content for each |
| langroid/agent/chat_agent.py | 108 | citation, or just the main reference citation. |
| langroid/agent/chat_agent.py | 144 | full_citations: bool = True # show source + content for each citation? |
| langroid/agent/chat_agent.py | 2189 | # we won't have citations yet, so we're done |
| langroid/agent/chat_agent.py | 2192 | citation = ( |
| langroid/agent/chat_agent.py | 2198 | print("[grey37]SOURCES:\n" + escape(citation) + "[/grey37]") |
| langroid/agent/chat_agent.py | 2201 | reasoning="", # Citations don't have reasoning |
| langroid/agent/chat_agent.py | 2202 | content=str(citation), |

### Evaluation/observability

| file | line | text |
| --- | --- | --- |
| langroid/agent/task.py | 1954 | # recall there's always a dummy msg with freq = 1 |
| langroid/language_models/openai_gpt.py | 352 | litellm.telemetry = False |
| langroid/language_models/provider_params.py | 35 | with features like automatic retries, fallbacks, load balancing, and observability. |
| langroid/utils/pandas_utils.py | 42 | "eval", |
| langroid/utils/pandas_utils.py | 112 | "eval", |
| langroid/utils/pandas_utils.py | 135 | "eval", |
| langroid/utils/pandas_utils.py | 293 | tree = ast.parse(expr, mode="eval") |
| langroid/utils/pandas_utils.py | 298 | # Curated ``__builtins__`` dict for ``eval()`` calls on LLM-generated pandas |

### Agent/MCP/tool surface

| file | line | text |
| --- | --- | --- |
| langroid/__init__.py | 16 | from . import agent |
| langroid/__init__.py | 18 | from .agent.base import ( |
| langroid/__init__.py | 19 | Agent, |
| langroid/__init__.py | 23 | from .agent.batch import ( |
| langroid/__init__.py | 29 | from .agent.chat_document import ( |
| langroid/__init__.py | 35 | from .agent.tool_message import ( |
| langroid/__init__.py | 39 | from .agent.chat_agent import ( |
| langroid/__init__.py | 44 | from .agent.task import Task, TaskConfig |

## Gap

_없음_
