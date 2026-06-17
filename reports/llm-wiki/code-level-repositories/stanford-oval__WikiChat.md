# stanford-oval/WikiChat 코드 레벨 분석

생성일: 2026-06-17T23:31:17.384Z

## 기본 판정

| 항목 | 값 |
| --- | --- |
| type | persistent-llm-wiki |
| maturity | A integrated platform (94) |
| stars | 1602 |
| language | Python |
| tags | direct-llm-wiki, rag, korea-signal |
| files/code/source | 151/62/57 |
| tests/ci | 8/0 |
| local path | sources/stanford-oval__WikiChat |

## 파이프라인 단계

| 단계 | 상태 | matched files | source files | evidence |
| --- | --- | --- | --- | --- |
| Ingestion/source intake | code | 16 | 9 | corpora.py:78 icon_path="https://upload.wikimedia.org/wikipedia/commons/7/75/HarukiMurakami.png", |
| Parsing/OCR/document extraction | code | 8 | 6 | preprocessing/custom_docling.py:7 from bs4 import BeautifulSoup, Tag |
| Chunking/splitting | code | 7 | 5 | preprocessing/convert_jsonl_to_parquet.py:41 # Create a new Parquet file and write the first chunk |
| Embedding/vector index | code | 22 | 16 | retrieval/scripts/benchmark_embedding_latency.py:26 embeddings = ort_session.run(None, inputs_onnx)[ |
| Retrieval/search/rerank | code | 58 | 30 | retrieval/create_index.py:23 from retrieval.embedding_model_info import ( |
| Wiki/graph/entity model | code | 13 | 5 | preprocessing/entity_translation.py:20 entity_name: The name of the entity to translate. |
| Memory/update lifecycle | code | 22 | 9 | preprocessing/convert_jsonl_to_parquet.py:45 # Clear the data list to free up memory |
| Provenance/citation/evidence | code | 12 | 6 | pipelines/chatbot.py:133 # extract all citations in [1], [2], [3] format |
| Evaluation/observability | code | 16 | 9 | benchmark/user_simulator.py:2 Uses an LLM to talk to our chatbot. Used for evaluation and model distillation. |
| Agent/MCP/tool surface | code | 11 | 4 | chainlit_callback_handler.py:61 if run.run_type == "agent": |

## 의존성 신호

_없음_

## 주요 파일 후보

### Ingestion/source intake

- `corpora.py`
- `preprocessing/upload_collections_to_hf_hub.py`
- `retrieval/retrieval_commons.py`
- `retrieval/retriever_server.py`
- `retrieval/upload_collection.py`
- `public/js/upload.js`
- `retrieval/scripts/compare_rerankers.py`
- `retrieval/scripts/qdrant_snapshot.py`
- `retrieval/scripts/upload_folder_to_hf_hub.py`
- `.chainlit/config.toml`
- `.chainlit/translations/de.json`
- `.chainlit/translations/en-US.json`
- ... 4 more

### Parsing/OCR/document extraction

- `preprocessing/custom_docling.py`
- `preprocessing/entity_translation.py`
- `preprocessing/get_all_wiki_sizes.py`
- `preprocessing/get_common_english_words.py`
- `preprocessing/preprocess_semantic_scholar_dump.py`
- `tasks/preprocessing.py`
- `conda_env.yaml`
- `tests/test_custom_docling.py`

### Chunking/splitting

- `preprocessing/convert_jsonl_to_parquet.py`
- `preprocessing/custom_docling.py`
- `preprocessing/preprocess_semantic_scholar_dump.py`
- `retrieval/upload_collection.py`
- `tasks/preprocessing.py`
- `benchmark/topics/recent_articles_es.json`
- `preprocessing/word_list.txt`

### Embedding/vector index

- `retrieval/scripts/benchmark_embedding_latency.py`
- `chainlit_callback_handler.py`
- `corpora.py`
- `preprocessing/custom_docling.py`
- `preprocessing/preprocess_semantic_scholar_dump.py`
- `retrieval/create_index.py`
- `retrieval/qdrant_index.py`
- `retrieval/retrieval_commons.py`
- `retrieval/retriever_server.py`
- `tasks/defaults.py`
- `tasks/docker_tasks.py`
- `tasks/preprocessing.py`
- ... 6 more

### Retrieval/search/rerank

- `retrieval/create_index.py`
- `retrieval/embedding_model_info.py`
- `retrieval/llm_reranker.py`
- `retrieval/qdrant_index.py`
- `retrieval/retrieval_commons.py`
- `retrieval/retriever_api.py`
- `retrieval/retriever_server.py`
- `retrieval/search_query.py`
- `retrieval/search_result_block.py`
- `retrieval/upload_collection.py`
- `tasks/retrieval.py`
- `retrieval/scripts/benchmark_embedding_latency.py`
- ... 6 more

### Wiki/graph/entity model

- `preprocessing/entity_translation.py`
- `preprocessing/preprocess_wikipedia_html_dump.py`
- `preprocessing/utils.py`
- `retrieval/embedding_model_info.py`
- `tasks/preprocessing.py`
- `benchmark/topics/recent_articles_de.json`
- `benchmark/topics/recent_articles_en.json`
- `benchmark/topics/recent_articles_es.json`
- `benchmark/topics/recent_articles_it.json`
- `benchmark/topics/recent_articles_ja.json`
- `benchmark/topics/recent_articles_zh.json`
- `tests/test_custom_docling.py`
- ... 1 more

### Memory/update lifecycle

- `preprocessing/convert_jsonl_to_parquet.py`
- `preprocessing/custom_docling.py`
- `preprocessing/entity_translation.py`
- `preprocessing/preprocess_semantic_scholar_dump.py`
- `retrieval/create_index.py`
- `retrieval/upload_collection.py`
- `tasks/setup.py`
- `utils/cache.py`
- `retrieval/scripts/qdrant_snapshot.py`
- `conda_env.yaml`
- `.chainlit/config.toml`
- `.chainlit/translations/en-US.json`
- ... 6 more

### Provenance/citation/evidence

- `pipelines/chatbot.py`
- `pipelines/dialogue_state.py`
- `pipelines/pipeline_arguments.py`
- `pipelines/utils.py`
- `preprocessing/custom_docling.py`
- `preprocessing/preprocess_semantic_scholar_dump.py`
- `benchmark/topics/recent_articles_de.json`
- `benchmark/topics/recent_articles_en.json`
- `tests/test_custom_docling.py`
- `chainlit.md`
- `README.md`
- `preprocessing/word_list.txt`

### Evaluation/observability

- `benchmark/user_simulator.py`
- `retrieval/qdrant_index.py`
- `retrieval/retrieval_commons.py`
- `tasks/__init__.py`
- `tasks/benchmark.py`
- `benchmark/scripts/evaluate_distillation.py`
- `benchmark/scripts/get_wikipedia_articles_for_benchmark.py`
- `retrieval/scripts/benchmark_embedding_latency.py`
- `retrieval/scripts/compare_rerankers.py`
- `conda_env.yaml`
- `llm_config.yaml`
- `.chainlit/config.toml`
- ... 4 more

### Agent/MCP/tool surface

- `chainlit_callback_handler.py`
- `preprocessing/block.py`
- `preprocessing/utils.py`
- `benchmark/scripts/get_wikipedia_articles_for_benchmark.py`
- `llm_config.yaml`
- `.chainlit/config.toml`
- `benchmark/topics/recent_articles_de.json`
- `benchmark/topics/recent_articles_en.json`
- `benchmark/topics/recent_articles_fr.json`
- `README.md`
- `preprocessing/word_list.txt`

## Evidence lines

### Ingestion/source intake

| file | line | text |
| --- | --- | --- |
| corpora.py | 78 | icon_path="https://upload.wikimedia.org/wikipedia/commons/7/75/HarukiMurakami.png", |
| corpora.py | 128 | icon_path="https://upload.wikimedia.org/wikipedia/commons/1/15/Africa-countries-WAFU-UFOA.png", |
| corpora.py | 133 | icon_path="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/StateLibQld_1_133053_Agamemnon_%28ship%29.jpg/420px-StateLibQld_1_133053_Agamemnon_%28ship%29.jpg", |
| preprocessing/upload_collections_to_hf_hub.py | 16 | description="Upload preprocessed Wikipedia collection files to HuggingFace Hub" |
| preprocessing/upload_collections_to_hf_hub.py | 28 | help="List of language codes (e.g., de en fr). If not provided, the list will be empty. Use `all` to upload all languages.", |
| preprocessing/upload_collections_to_hf_hub.py | 58 | # Upload the Wikidata translation map |
| retrieval/retrieval_commons.py | 265 | vectors (list[list[float]]): A list of vectors to upload. |
| retrieval/retrieval_commons.py | 266 | payloads: A list of payloads to upload. |

### Parsing/OCR/document extraction

| file | line | text |
| --- | --- | --- |
| preprocessing/custom_docling.py | 7 | from bs4 import BeautifulSoup, Tag |
| preprocessing/custom_docling.py | 634 | self.soup = BeautifulSoup(text_stream, "lxml") |
| preprocessing/custom_docling.py | 638 | self.soup = BeautifulSoup(html_content, "lxml") |
| preprocessing/entity_translation.py | 1 | from bs4 import BeautifulSoup |
| preprocessing/entity_translation.py | 66 | html_soup: BeautifulSoup, |
| preprocessing/get_all_wiki_sizes.py | 5 | from bs4 import BeautifulSoup |
| preprocessing/get_all_wiki_sizes.py | 27 | # Create a BeautifulSoup object |
| preprocessing/get_all_wiki_sizes.py | 28 | soup = BeautifulSoup(html_content, "html.parser") |

### Chunking/splitting

| file | line | text |
| --- | --- | --- |
| preprocessing/convert_jsonl_to_parquet.py | 41 | # Create a new Parquet file and write the first chunk |
| preprocessing/convert_jsonl_to_parquet.py | 48 | # Write any remaining data that didn't fill up a full chunk |
| preprocessing/custom_docling.py | 12 | from docling_core.transforms.chunker.base import BaseChunk |
| preprocessing/custom_docling.py | 13 | from docling_core.transforms.chunker.hierarchical_chunker import ( |
| preprocessing/custom_docling.py | 18 | from docling_core.transforms.chunker.hybrid_chunker import HybridChunker |
| preprocessing/custom_docling.py | 363 | r"""Chunker implementation leveraging the document layout. |
| preprocessing/custom_docling.py | 459 | def chunk(self, dl_doc: DoclingDocument, **kwargs: Any) -> Iterator[BaseChunk]: |
| preprocessing/custom_docling.py | 460 | r"""Chunk the provided document. |

### Embedding/vector index

| file | line | text |
| --- | --- | --- |
| retrieval/scripts/benchmark_embedding_latency.py | 26 | embeddings = ort_session.run(None, inputs_onnx)[ |
| retrieval/scripts/benchmark_embedding_latency.py | 30 | embeddings / np.linalg.norm( |
| retrieval/scripts/benchmark_embedding_latency.py | 31 | embeddings, axis=1, keepdims=True |
| retrieval/scripts/benchmark_embedding_latency.py | 38 | parser = argparse.ArgumentParser(description="Benchmark embedding latency.") |
| retrieval/scripts/benchmark_embedding_latency.py | 43 | help="The name of the embedding model to use.", |
| retrieval/scripts/benchmark_embedding_latency.py | 78 | f"Latency when embedding {len(test_queries)} queries, averaged over {num_iterations} iterations: {average_latency:.2f} seconds" |
| chainlit_callback_handler.py | 71 | elif run.run_type == "embedding": |
| chainlit_callback_handler.py | 72 | step_type = "embedding" |

### Retrieval/search/rerank

| file | line | text |
| --- | --- | --- |
| retrieval/create_index.py | 23 | from retrieval.embedding_model_info import ( |
| retrieval/create_index.py | 27 | from retrieval.qdrant_index import AsyncQdrantVectorDB |
| retrieval/create_index.py | 475 | help="If set, will keep the index and vectors in RAM for faster search. Will use a lot more memory.", |
| retrieval/embedding_model_info.py | 43 | "query_template": lambda query: f"<instruct>Given a web search query, retrieve relevant passages that answer the query.\n<query>{query}'", |
| retrieval/embedding_model_info.py | 62 | "query_template": lambda query: f"Instruct: Given a web search query, retrieve relevant passages that answer the query\nQuery: {query}", |
| retrieval/embedding_model_info.py | 68 | "query_template": lambda query: f"Instruct: Given a web search query, retrieve relevant passages that answer the query\nQuery: {query}", |
| retrieval/llm_reranker.py | 16 | from retrieval.retrieval_commons import QueryResult, SearchResultBlock |
| retrieval/llm_reranker.py | 56 | async def rerank( |

### Wiki/graph/entity model

| file | line | text |
| --- | --- | --- |
| preprocessing/entity_translation.py | 20 | entity_name: The name of the entity to translate. |
| preprocessing/entity_translation.py | 25 | A string containing the original entity name and its English translation, |
| preprocessing/entity_translation.py | 27 | non-redundant. Returns just the entity name if the translation is redundant or not found. |
| preprocessing/entity_translation.py | 36 | # remove parenthesis in entities like `XYZ (singer)` |
| preprocessing/entity_translation.py | 53 | # f"Did not find link entity in Wikidata for {entity_name}", |
| preprocessing/preprocess_wikipedia_html_dump.py | 337 | help="If we should translate named entities to English using Wikidata. Has no effect if `--language` is English", |
| preprocessing/utils.py | 91 | entity: str, inverse_redirection_map: dict, global_translation_map: dict |
| preprocessing/utils.py | 93 | if entity not in global_translation_map and ( |

### Memory/update lifecycle

| file | line | text |
| --- | --- | --- |
| preprocessing/convert_jsonl_to_parquet.py | 45 | # Clear the data list to free up memory |
| preprocessing/custom_docling.py | 366 | merge_list_items (bool): Whether to merge successive list items. |
| preprocessing/entity_translation.py | 75 | # delete Wikipedia links like "edit this article" etc. |
| preprocessing/preprocess_semantic_scholar_dump.py | 246 | # Merge paragraphs without section that have consecutive start and end |
| preprocessing/preprocess_semantic_scholar_dump.py | 253 | else: # Consecutive, merge with previous |
| retrieval/create_index.py | 475 | help="If set, will keep the index and vectors in RAM for faster search. Will use a lot more memory.", |
| retrieval/upload_collection.py | 58 | temp_file = tempfile.NamedTemporaryFile(dir="workdir/uploads", delete=False) |
| tasks/setup.py | 182 | 5. Sets up NVMe (Non-Volatile Memory Express) storage. |

### Provenance/citation/evidence

| file | line | text |
| --- | --- | --- |
| pipelines/chatbot.py | 133 | # extract all citations in [1], [2], [3] format |
| pipelines/chatbot.py | 134 | citations = re.findall(r"\[\d+\]", agent_utterance) |
| pipelines/chatbot.py | 135 | if len(citations) == 0: |
| pipelines/chatbot.py | 138 | for citation in citations: |
| pipelines/chatbot.py | 139 | citation_index = int(citation[1:-1]) - 1 |
| pipelines/dialogue_state.py | 132 | # remove all citations, otherwise, chatbot might try to recite them |
| pipelines/dialogue_state.py | 133 | citations = re.findall(r"\[\d+\]", history) |
| pipelines/dialogue_state.py | 134 | for citation in citations: |

### Evaluation/observability

| file | line | text |
| --- | --- | --- |
| benchmark/user_simulator.py | 2 | Uses an LLM to talk to our chatbot. Used for evaluation and model distillation. |
| benchmark/user_simulator.py | 49 | template_file="benchmark/prompts/user_with_passage.prompt", |
| retrieval/qdrant_index.py | 47 | # These parameters result in a 99.1% precision@10 compared to exact search, using Alibaba-NLP/gte-multilingual-base embedding model on the English Wikipedia index |
| retrieval/qdrant_index.py | 49 | # Oversampling is important here, without it, the precision@10 is only ~66% |
| retrieval/retrieval_commons.py | 128 | # self.embedding_model.eval() |
| tasks/__init__.py | 5 | # Import specific functions/classes from benchmark |
| tasks/__init__.py | 6 | from tasks.benchmark import simulate_users, benchmark_articles, db_to_file |
| tasks/benchmark.py | 67 | f"python benchmark/user_simulator.py {pipeline_flags} " |

### Agent/MCP/tool surface

| file | line | text |
| --- | --- | --- |
| chainlit_callback_handler.py | 61 | if run.run_type == "agent": |
| preprocessing/block.py | 6 | from openai import BaseModel |
| preprocessing/utils.py | 197 | # the API expects a user agent |
| preprocessing/utils.py | 210 | headers={"User-Agent": "wikichat/1.0"}, |
| benchmark/scripts/get_wikipedia_articles_for_benchmark.py | 79 | # the API expects a user agent |
| benchmark/scripts/get_wikipedia_articles_for_benchmark.py | 83 | headers={"User-Agent": "wikichat/1.0"}, |
| llm_config.yaml | 10 | # Follow the examples provided for Azure, OpenAI, Groq, Together, Mistral, and local models as needed, and remove unused llm endpoints. |
| llm_config.yaml | 27 | # Example of OpenAI models via Azure |

## Gap

- ci
