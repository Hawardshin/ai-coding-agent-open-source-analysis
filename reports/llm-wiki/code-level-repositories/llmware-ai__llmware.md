# llmware-ai/llmware 코드 레벨 분석

생성일: 2026-06-17T23:31:50.329Z

## 기본 판정

| 항목 | 값 |
| --- | --- |
| type | rag-knowledge-platform |
| maturity | A integrated platform (104) |
| stars | 14837 |
| language | Python |
| tags | rag, agent-knowledge, korea-signal |
| files/code/source | 430/238/219 |
| tests/ci | 20/9 |
| local path | sources/llmware-ai__llmware |

## 파이프라인 단계

| 단계 | 상태 | matched files | source files | evidence |
| --- | --- | --- | --- | --- |
| Ingestion/source intake | code | 23 | 15 | llmware/embeddings.py:2347 # https://neo4j.com/docs/operations-manual/current/tools/neo4j-admin/upload-to-aura/#_options |
| Parsing/OCR/document extraction | code | 63 | 45 | solutions/sources/parsing_microsoft_ir_docs.py:40 # optional - run an OCR against all of the images in the library - check out the example: |
| Chunking/splitting | code | 32 | 22 | llmware/embeddings.py:1159 chunk = tuple(itertools.islice(it, batch_size)) |
| Embedding/vector index | code | 94 | 49 | llmware/embeddings.py:15 """The embeddings module implements the supported vector databases. |
| Retrieval/search/rerank | code | 144 | 85 | llmware/retrieval.py:15 """The retrieval module implements the Query class. The Query class provides a high-level interface for executing |
| Wiki/graph/entity model | code | 80 | 25 | llmware/agents.py:716 """ Executes named entity classification analysis on a text, if passed directly, or will pull current |
| Memory/update lifecycle | code | 120 | 79 | llmware/agents.py:97 # reports are automatically aggregated through the lifecycle of the object |
| Provenance/citation/evidence | code | 30 | 22 | llmware/agents.py:912 params = ["evidence"] |
| Evaluation/observability | code | 39 | 32 | llmware/embeddings.py:1143 metric="euclidean", |
| Agent/MCP/tool surface | code | 124 | 89 | setup.py:78 'Wikipedia-API>=0.6.0','openai>=1.0', 'datasets>=2.15.0', 'yfinance>=0.2.38', 'pymilvus<=2.5.1', |

## 의존성 신호

- LLM/app framework: transformers, openai
- Vector/search store: pymilvus, pgvector, chromadb
- Persistence/database: psycopg-binary, psycopg, pgvector

## 주요 파일 후보

### Ingestion/source intake

- `llmware/embeddings.py`
- `llmware/library.py`
- `llmware/parsers.py`
- `llmware/resources.py`
- `llmware/util.py`
- `solutions/sources/office_parser_new_configs.py`
- `solutions/sources/parse_csv_custom.py`
- `solutions/sources/parse_documents.py`
- `solutions/sources/parse_jsonl_custom.py`
- `solutions/sources/pdf_parser_new_configs.py`
- `solutions/use_cases/biz_bot.py`
- `solutions/use_cases/lecture_tool/Home.py`
- ... 6 more

### Parsing/OCR/document extraction

- `solutions/sources/parsing_microsoft_ir_docs.py`
- `llmware/library.py`
- `llmware/parsers.py`
- `llmware/prompts.py`
- `llmware/resources.py`
- `llmware/setup.py`
- `llmware/util.py`
- `llmware/web_services.py`
- `solutions/embeddings/using_semantic_reranker_with_rag.py`
- `solutions/models/document_summarizer.py`
- `solutions/models/prompt_with_pdf_source.py`
- `solutions/models/prompt_with_sources.py`
- ... 6 more

### Chunking/splitting

- `llmware/embeddings.py`
- `llmware/models.py`
- `llmware/parsers.py`
- `llmware/resources.py`
- `llmware/util.py`
- `solutions/embeddings/using_semantic_reranker_with_rag.py`
- `solutions/gguf/using_slim_extract.py`
- `solutions/gguf/using-whisper-cpp-getting-started.py`
- `solutions/models/using_slim_extract.py`
- `solutions/slim_agents/agents-10-using_semantic_reranker_with_rag.py`
- `solutions/slim_agents/agents-3-using_slim_extract.py`
- `solutions/slim_agents/document_unique_topics_extraction.py`
- ... 6 more

### Embedding/vector index

- `llmware/embeddings.py`
- `solutions/embeddings/docs2vecs_with_milvus-contracts.py`
- `solutions/embeddings/docs2vecs_with_milvus-rag.py`
- `solutions/embeddings/docs2vecs_with_milvus-un_resolutions.py`
- `solutions/embeddings/embeddings_fast_start.py`
- `solutions/embeddings/using_chromadb.py`
- `solutions/embeddings/using_lance.py`
- `solutions/embeddings/using_milvus_lite.py`
- `solutions/embeddings/using_mongo_atlas.py`
- `solutions/embeddings/using_multiple_embeddings.py`
- `solutions/embeddings/using_multiple_vector_db.py`
- `solutions/embeddings/using_neo4j.py`
- ... 6 more

### Retrieval/search/rerank

- `llmware/retrieval.py`
- `solutions/slim_agents/ner-retrieval.py`
- `solutions/sources/bulk_retrieval.py`
- `solutions/sources/semantic_retrieval.py`
- `solutions/sources/text_retrieval.py`
- `setup.py`
- `llmware/embeddings.py`
- `llmware/library.py`
- `llmware/model_configs.py`
- `llmware/models.py`
- `llmware/parsers.py`
- `llmware/prompts.py`
- ... 6 more

### Wiki/graph/entity model

- `llmware/agents.py`
- `llmware/configs.py`
- `llmware/embeddings.py`
- `llmware/library.py`
- `solutions/gguf/bling_fast_start.py`
- `solutions/gguf/chat_models_gguf_fast_start.py`
- `solutions/gguf/using_function_calls.py`
- `solutions/models/bling_fast_start.py`
- `solutions/models/chat_models_gguf_fast_start.py`
- `solutions/models/using_function_calls.py`
- `solutions/slim_agents/agent-multistep-analysis.py`
- `solutions/slim_agents/agents-6-agent-multistep-analysis.py`
- ... 6 more

### Memory/update lifecycle

- `llmware/agents.py`
- `llmware/configs.py`
- `llmware/embeddings.py`
- `llmware/gguf_configs.py`
- `llmware/library.py`
- `llmware/model_configs.py`
- `llmware/models.py`
- `llmware/parsers.py`
- `llmware/prompts.py`
- `llmware/resources.py`
- `llmware/retrieval.py`
- `llmware/util.py`
- ... 6 more

### Provenance/citation/evidence

- `llmware/agents.py`
- `llmware/model_configs.py`
- `llmware/models.py`
- `llmware/prompts.py`
- `llmware/resources.py`
- `llmware/util.py`
- `llmware/web_services.py`
- `solutions/gguf/chat_models_gguf_fast_start.py`
- `solutions/gguf/dragon_rag_benchmark_tests_llmware.py`
- `solutions/gguf/using-whisper-cpp-getting-started.py`
- `solutions/models/chat_models_gguf_fast_start.py`
- `solutions/models/dragon_rag_benchmark_tests_llmware.py`
- ... 6 more

### Evaluation/observability

- `llmware/embeddings.py`
- `llmware/models.py`
- `llmware/resources.py`
- `llmware/retrieval.py`
- `solutions/gguf/bling_fast_start.py`
- `solutions/gguf/chat_models_gguf_fast_start.py`
- `solutions/gguf/dragon_gguf_fast_start.py`
- `solutions/gguf/dragon_rag_benchmark_tests_huggingface.py`
- `solutions/gguf/dragon_rag_benchmark_tests_llmware.py`
- `solutions/gguf/llmware_model_fast_start.py`
- `solutions/gguf/using_slim_extract.py`
- `solutions/gguf/using-phi-3-function-calls.py`
- ... 6 more

### Agent/MCP/tool surface

- `setup.py`
- `welcome_to_llmware_windows.sh`
- `welcome_to_llmware.sh`
- `llmware/agents.py`
- `llmware/configs.py`
- `llmware/model_configs.py`
- `llmware/models.py`
- `llmware/prompts.py`
- `llmware/util.py`
- `llmware/web_services.py`
- `solutions/embeddings/using_chromadb.py`
- `solutions/embeddings/using_milvus_lite.py`
- ... 6 more

## Evidence lines

### Ingestion/source intake

| file | line | text |
| --- | --- | --- |
| llmware/embeddings.py | 2347 | # https://neo4j.com/docs/operations-manual/current/tools/neo4j-admin/upload-to-aura/#_options |
| llmware/library.py | 599 | use_logging_file=use_logging_file).ingest(input_folder_path,dupe_check=True) |
| llmware/library.py | 958 | """Main method to ingest a website into a library. |
| llmware/library.py | 963 | The URL of the website to ingest. |
| llmware/library.py | 966 | Whether to follow and ingest links found on the website. |
| llmware/library.py | 969 | The maximum number of links to follow and ingest. |
| llmware/library.py | 1051 | """Alternative method to ingest PDFs that are scanned, or can not be otherwise parsed. |
| llmware/parsers.py | 23 | 'ingest' method that collates and parses any supported file types found in the input folder. |

### Parsing/OCR/document extraction

| file | line | text |
| --- | --- | --- |
| solutions/sources/parsing_microsoft_ir_docs.py | 40 | # optional - run an OCR against all of the images in the library - check out the example: |
| llmware/library.py | 15 | """The library module implements the logic for managing unstructured information (the text). |
| llmware/library.py | 40 | """Implements the interface to manage a collection of unstructured information as a ``Library``, i.e. a |
| llmware/library.py | 1029 | """Main method to add image and scanned OCR content into a library. |
| llmware/library.py | 1039 | The updated ``Library`` object after adding the image and OCR content. |
| llmware/library.py | 1061 | The updated ``Library`` object after adding the PDFs through OCR. |
| llmware/library.py | 1180 | """Convenience method in Library class to pass Library to Parser to run OCR on all of the images |
| llmware/library.py | 1181 | found in the Library, and OCR-extracted text from the images directly into the Library as additional |

### Chunking/splitting

| file | line | text |
| --- | --- | --- |
| llmware/embeddings.py | 1159 | chunk = tuple(itertools.islice(it, batch_size)) |
| llmware/embeddings.py | 1160 | while chunk: |
| llmware/embeddings.py | 1161 | yield chunk |
| llmware/embeddings.py | 1162 | chunk = tuple(itertools.islice(it, batch_size)) |
| llmware/embeddings.py | 2415 | 'label': 'Chunk', |
| llmware/embeddings.py | 2468 | "MERGE (c:Chunk {id: row.doc_id, block_id: row.block_id}) " |
| llmware/parsers.py | 637 | splitter = b.split("\n<") |
| llmware/parsers.py | 643 | for k, entries in enumerate(splitter): |

### Embedding/vector index

| file | line | text |
| --- | --- | --- |
| llmware/embeddings.py | 15 | """The embeddings module implements the supported vector databases. |
| llmware/embeddings.py | 17 | The common abstraction for all supported vector databases is the EmbeddingHandler class, which supports |
| llmware/embeddings.py | 18 | creating a new embedding, as well as searching and deleting the vector index. The module also implements the |
| llmware/embeddings.py | 19 | _EmbeddingUtils class, which provides a set of functions used by all vector database classes. |
| llmware/embeddings.py | 34 | """ By default, no vector db drivers are loaded into global program space unless and until they are invoked. Within |
| llmware/embeddings.py | 35 | each embedding class handler, there is a check if GLOBAL_{VECTOR_DB}_IMPORT is False, and if so, then the module |
| llmware/embeddings.py | 41 | chromadb = None |
| llmware/embeddings.py | 44 | lancedb = None |

### Retrieval/search/rerank

| file | line | text |
| --- | --- | --- |
| llmware/retrieval.py | 15 | """The retrieval module implements the Query class. The Query class provides a high-level interface for executing |
| llmware/retrieval.py | 18 | The Query class includes both text retrieval strategies, which operate directly as queries on the text collection |
| llmware/retrieval.py | 19 | database, as well as vector embedding semantic retrieval strategies, which require the use of o vector DB and that the |
| llmware/retrieval.py | 89 | >>> from llmware.retrieval import Query |
| llmware/retrieval.py | 396 | dictionaries, with each dictionary representing a single matching retrieval from the collection. """ |
| llmware/retrieval.py | 409 | # check that embedding model is available, and if not, flip to text search |
| llmware/retrieval.py | 515 | """ Execute a text search with page number constraint provided as page_num parameter. """ |
| llmware/retrieval.py | 961 | """ Augments the set of query results using alternative retrieval strategy. """ |

### Wiki/graph/entity model

| file | line | text |
| --- | --- | --- |
| llmware/agents.py | 716 | """ Executes named entity classification analysis on a text, if passed directly, or will pull current |
| llmware/agents.py | 717 | work item from the queue. Returns value output dictionary with named entity classification and |
| llmware/agents.py | 731 | """ Executes named entity classification analysis on a text, if passed directly, or will pull current |
| llmware/agents.py | 732 | work item from the queue. Returns value output dictionary with named entity classification and |
| llmware/agents.py | 823 | """ Generates a dictionary with keys corresponding to 'sentiment' and 'named entity recognition' (NER) |
| llmware/configs.py | 913 | "knowledge_graph": "text", |
| llmware/embeddings.py | 606 | # alt: _id = int(hit["entity"]["block_mongo_id"]) |
| llmware/embeddings.py | 607 | _id = hit["entity"]["block_mongo_id"] |

### Memory/update lifecycle

| file | line | text |
| --- | --- | --- |
| llmware/agents.py | 97 | # reports are automatically aggregated through the lifecycle of the object |
| llmware/agents.py | 210 | """ Creates an incremental empty report dictionary in line with creation of a new work item. """ |
| llmware/agents.py | 487 | """ Unloads a tool, which removes it from memory - useful in long-running processes |
| llmware/agents.py | 1152 | basic_write_commands = ["DROP", "INSERT", "CREATE", "DELETE", "ALTER"] |
| llmware/agents.py | 1509 | # delete db and start fresh |
| llmware/agents.py | 1525 | logging.warning("update: delete sqlite experimental db - table - %s ", table_name) |
| llmware/agents.py | 1554 | """ Opens CSV file at folder_path fp and file_name fn and returns array-like output in memory """ |
| llmware/configs.py | 548 | "cache": True, |

### Provenance/citation/evidence

| file | line | text |
| --- | --- | --- |
| llmware/agents.py | 912 | params = ["evidence"] |
| llmware/agents.py | 917 | context = "Evidence: " + text1 + "\n" + "Conclusion: " + text2 |
| llmware/model_configs.py | 1113 | "primary_keys": ["evidence"], |
| llmware/model_configs.py | 1290 | "primary_keys": ["evidence"], |
| llmware/model_configs.py | 4284 | "text as evidence to support", |
| llmware/prompts.py | 175 | # source/evidence |
| llmware/prompts.py | 176 | "evidence", "evidence_metadata", "biblio" |
| llmware/prompts.py | 869 | "evidence": context, |

### Evaluation/observability

| file | line | text |
| --- | --- | --- |
| llmware/embeddings.py | 1143 | metric="euclidean", |
| llmware/resources.py | 5182 | progress of parsing. A status consists of a summary string and metrics that can be used to provide |
| llmware/retrieval.py | 801 | # assume that each block has at least two components: [0] core mongo block, and [1] distance metric |
| llmware/retrieval.py | 848 | # assume that each block has at least two components: [0] core mongo block, and [1] distance metric |
| solutions/gguf/bling_fast_start.py | 103 | "near its highest level in 14 years. The benchmark rate later eased from those levels, but " |
| solutions/gguf/bling_fast_start.py | 350 | "near its highest level in 14 years. The benchmark rate later eased from those levels, but " |
| solutions/gguf/chat_models_gguf_fast_start.py | 9 | # Run the benchmark test |
| solutions/gguf/chat_models_gguf_fast_start.py | 11 | """Run the benchmark test on the specified model with the given prompts. |

### Agent/MCP/tool surface

| file | line | text |
| --- | --- | --- |
| setup.py | 78 | 'Wikipedia-API>=0.6.0','openai>=1.0', 'datasets>=2.15.0', 'yfinance>=0.2.38', 'pymilvus<=2.5.1', |
| welcome_to_llmware_windows.sh | 15 | scp ./fast_start/agents/*.py . |
| welcome_to_llmware_windows.sh | 17 | scp ./examples/SLIM-Agents/agent-llmfx-getting-started.py . |
| welcome_to_llmware_windows.sh | 18 | scp ./examples/SLIM-Agents/using_slim_extract_model.py . |
| welcome_to_llmware_windows.sh | 48 | echo " -- agent-llmfx-getting-started.py" |
| welcome_to_llmware.sh | 15 | scp ./fast_start/agents/*.py . |
| welcome_to_llmware.sh | 17 | scp ./examples/SLIM-Agents/agent-llmfx-getting-started.py . |
| welcome_to_llmware.sh | 18 | scp ./examples/SLIM-Agents/using_slim_extract_model.py . |

## Gap

_없음_
