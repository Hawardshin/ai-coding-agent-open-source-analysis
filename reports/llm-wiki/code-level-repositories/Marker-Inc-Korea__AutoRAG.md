# Marker-Inc-Korea/AutoRAG 코드 레벨 분석

생성일: 2026-06-17T23:31:37.933Z

## 기본 판정

| 항목 | 값 |
| --- | --- |
| type | rag-knowledge-platform |
| maturity | A integrated platform (96) |
| stars | 4832 |
| language | Python |
| tags | rag, document-chat, korea-signal |
| files/code/source | 641/310/178 |
| tests/ci | 120/3 |
| local path | sources/Marker-Inc-Korea__AutoRAG |

## 파이프라인 단계

| 단계 | 상태 | matched files | source files | evidence |
| --- | --- | --- | --- | --- |
| Ingestion/source intake | code | 9 | 3 | autorag/evaluator.py:164 # Ingest VectorDB corpus |
| Parsing/OCR/document extraction | code | 44 | 9 | autorag/support.py:20 "llamaparse": ("autorag.data.parse.llamaparse", "llama_parse"), |
| Chunking/splitting | code | 38 | 13 | autorag/chunker.py:8 from autorag.data.chunk.run import run_chunker |
| Embedding/vector index | code | 109 | 25 | autorag/embedding/base.py:7 from llama_index.core.embeddings.mock_embed_model import MockEmbedding |
| Retrieval/search/rerank | code | 180 | 62 | autorag/evaluation/retrieval_contents.py:21 Decorator for evaluating retrieval contents. |
| Wiki/graph/entity model | doc-only | 5 | 0 | pyproject.toml:82 "langchain-community>=0.4.1", |
| Memory/update lifecycle | code | 65 | 23 | autorag/validator.py:80 tempfile.NamedTemporaryFile(suffix=".parquet", delete=False) as qa_path, |
| Provenance/citation/evidence | code | 7 | 5 | autorag/node_line.py:70 source_path = os.path.join( |
| Evaluation/observability | code | 150 | 37 | autorag/dashboard.py:79 ### Metric Values |
| Agent/MCP/tool surface | code | 152 | 27 | autorag/__init__.py:9 from llama_index.llms.openai import OpenAI |

## 의존성 신호

- LLM/app framework: openai, llama-index, llama-index-core, llama-index-readers-file, llama-index-embeddings-openai, llama-index-embeddings-ollama, llama-index-embeddings-openai-like, llama-index-llms-openai
- Vector/search store: pymilvus, chromadb, weaviate-client, pinecone, qdrant-client
- Document parsing/OCR: PyMuPDF, pdfminer.six, pdfplumber, unstructured, PyPDF2

## 주요 파일 후보

### Ingestion/source intake

- `autorag/evaluator.py`
- `autorag/nodes/lexicalretrieval/bm25.py`
- `autorag/nodes/semanticretrieval/vectordb.py`
- `.github/workflows/publish.yml`
- `.github/workflows/sphinx.yml`
- `docs/source/integration/vectordb/couchbase.md`
- `docs/source/integration/vectordb/pinecone.md`
- `docs/source/integration/vectordb/qdrant.md`
- `docs/source/integration/vectordb/vectordb.md`

### Parsing/OCR/document extraction

- `autorag/support.py`
- `autorag/data/__init__.py`
- `autorag/data/parse/base.py`
- `autorag/data/parse/clova.py`
- `autorag/data/parse/langchain_parse.py`
- `autorag/data/parse/llamaparse.py`
- `autorag/data/parse/run.py`
- `autorag/data/parse/table_hybrid_parse.py`
- `autorag/nodes/queryexpansion/hyde.py`
- `pyproject.toml`
- `.github/workflows/test.yml`
- `sample_config/parse/all_files_full.yaml`
- ... 6 more

### Chunking/splitting

- `autorag/chunker.py`
- `autorag/support.py`
- `autorag/data/__init__.py`
- `autorag/data/chunk/base.py`
- `autorag/data/chunk/langchain_chunk.py`
- `autorag/data/chunk/llama_index_chunk.py`
- `autorag/data/qa/schema.py`
- `autorag/nodes/generator/minimax_llm.py`
- `autorag/nodes/generator/openai_llm.py`
- `autorag/nodes/passagereranker/colbert.py`
- `autorag/nodes/passagereranker/flashrank.py`
- `autorag/data/legacy/corpus/langchain.py`
- ... 6 more

### Embedding/vector index

- `autorag/embedding/base.py`
- `autorag/embedding/vllm.py`
- `autorag/evaluator.py`
- `autorag/deploy/base.py`
- `autorag/evaluation/util.py`
- `autorag/utils/util.py`
- `autorag/vectordb/__init__.py`
- `autorag/vectordb/base.py`
- `autorag/vectordb/chroma.py`
- `autorag/vectordb/couchbase.py`
- `autorag/vectordb/milvus.py`
- `autorag/vectordb/pinecone.py`
- ... 6 more

### Retrieval/search/rerank

- `autorag/evaluation/retrieval_contents.py`
- `autorag/evaluation/retrieval.py`
- `autorag/evaluation/metric/retrieval_contents.py`
- `autorag/evaluation/metric/retrieval.py`
- `autorag/nodes/hybridretrieval/base.py`
- `autorag/nodes/hybridretrieval/hybrid_cc.py`
- `autorag/nodes/hybridretrieval/hybrid_rrf.py`
- `autorag/nodes/hybridretrieval/run.py`
- `autorag/nodes/lexicalretrieval/__init__.py`
- `autorag/nodes/lexicalretrieval/bm25.py`
- `autorag/nodes/lexicalretrieval/run.py`
- `autorag/nodes/retrieval/base.py`
- ... 6 more

### Wiki/graph/entity model

- `pyproject.toml`
- `CODE_OF_CONDUCT.md`
- `CONTRIBUTING.md`
- `tests/resources/parse_data/all_files_full/markdown_sample.md`
- `tests/resources/parse_data/markdown_data/markdown_sample.md`

### Memory/update lifecycle

- `autorag/validator.py`
- `autorag/deploy/base.py`
- `autorag/embedding/vllm.py`
- `autorag/utils/util.py`
- `autorag/vectordb/__init__.py`
- `autorag/vectordb/base.py`
- `autorag/vectordb/chroma.py`
- `autorag/vectordb/couchbase.py`
- `autorag/vectordb/milvus.py`
- `autorag/vectordb/pinecone.py`
- `autorag/vectordb/qdrant.py`
- `autorag/vectordb/weaviate.py`
- ... 6 more

### Provenance/citation/evidence

- `autorag/node_line.py`
- `autorag/data/qa/extract_evidence.py`
- `autorag/data/qa/schema.py`
- `autorag/data/legacy/qacreation/llama_index.py`
- `autorag/data/qa/generation_gt/prompt.py`
- `README.md`
- `tests/resources/README.md`

### Evaluation/observability

- `autorag/dashboard.py`
- `autorag/evaluator.py`
- `autorag/evaluation/generation.py`
- `autorag/evaluation/retrieval_contents.py`
- `autorag/evaluation/retrieval.py`
- `autorag/evaluation/util.py`
- `autorag/schema/metricinput.py`
- `autorag/utils/util.py`
- `autorag/vectordb/pinecone.py`
- `autorag/vectordb/qdrant.py`
- `autorag/vectordb/weaviate.py`
- `autorag/evaluation/metric/generation.py`
- ... 6 more

### Agent/MCP/tool surface

- `autorag/__init__.py`
- `autorag/deploy/base.py`
- `autorag/embedding/base.py`
- `autorag/nodes/util.py`
- `autorag/utils/util.py`
- `autorag/vectordb/__init__.py`
- `autorag/vectordb/base.py`
- `autorag/data/chunk/base.py`
- `autorag/data/parse/llamaparse.py`
- `autorag/evaluation/metric/generation.py`
- `autorag/nodes/generator/minimax_llm.py`
- `autorag/nodes/generator/openai_llm.py`
- ... 6 more

## Evidence lines

### Ingestion/source intake

| file | line | text |
| --- | --- | --- |
| autorag/evaluator.py | 164 | # Ingest VectorDB corpus |
| autorag/evaluator.py | 182 | # API Ingest Method |
| autorag/evaluator.py | 247 | # ingest because bm25 supports update new corpus data |
| autorag/evaluator.py | 552 | # get the target ingest corpus from the whole corpus |
| autorag/evaluator.py | 555 | # get the target ingest corpus from the retrieval gt only |
| autorag/nodes/lexicalretrieval/bm25.py | 207 | f"bm25_path {bm25_path} does not exist. Please ingest first." |
| autorag/nodes/lexicalretrieval/bm25.py | 217 | f"You need to ingest again. Delete bm25 pkl file and re-ingest it." |
| autorag/nodes/semanticretrieval/vectordb.py | 249 | Ingest given corpus data to the vectordb. |

### Parsing/OCR/document extraction

| file | line | text |
| --- | --- | --- |
| autorag/support.py | 20 | "llamaparse": ("autorag.data.parse.llamaparse", "llama_parse"), |
| autorag/data/__init__.py | 71 | # PDF |
| autorag/data/__init__.py | 72 | "pdfminer": PDFMinerLoader, |
| autorag/data/__init__.py | 73 | "pdfplumber": PDFPlumberLoader, |
| autorag/data/__init__.py | 76 | "pymupdf": PyMuPDFLoader, |
| autorag/data/__init__.py | 91 | "unstructured": UnstructuredLoader, |
| autorag/data/parse/base.py | 30 | "pdf", |
| autorag/data/parse/base.py | 64 | elif func.__name__ in ["clova_ocr", "llama_parse", "table_hybrid_parse"]: |

### Chunking/splitting

| file | line | text |
| --- | --- | --- |
| autorag/chunker.py | 8 | from autorag.data.chunk.run import run_chunker |
| autorag/chunker.py | 14 | class Chunker: |
| autorag/chunker.py | 22 | ) -> "Chunker": |
| autorag/support.py | 25 | # chunk |
| autorag/support.py | 26 | "llama_index_chunk": ("autorag.data.chunk", "llama_index_chunk"), |
| autorag/support.py | 27 | "langchain_chunk": ("autorag.data.chunk", "langchain_chunk"), |
| autorag/data/__init__.py | 22 | RecursiveCharacterTextSplitter, |
| autorag/data/__init__.py | 112 | "recursivecharacter": RecursiveCharacterTextSplitter, |

### Embedding/vector index

| file | line | text |
| --- | --- | --- |
| autorag/embedding/base.py | 7 | from llama_index.core.embeddings.mock_embed_model import MockEmbedding |
| autorag/embedding/base.py | 8 | from llama_index.embeddings.openai import OpenAIEmbedding |
| autorag/embedding/base.py | 9 | from llama_index.embeddings.openai import OpenAIEmbeddingModelType |
| autorag/embedding/base.py | 10 | from llama_index.embeddings.ollama import OllamaEmbedding |
| autorag/embedding/base.py | 11 | from llama_index.embeddings.openai_like import OpenAILikeEmbedding |
| autorag/embedding/base.py | 14 | from autorag.embedding.vllm import VllmEmbedding |
| autorag/embedding/base.py | 20 | """Mock embedding with random vectors.""" |
| autorag/embedding/base.py | 47 | from llama_index.embeddings.huggingface import HuggingFaceEmbedding |

### Retrieval/search/rerank

| file | line | text |
| --- | --- | --- |
| autorag/evaluation/retrieval_contents.py | 21 | Decorator for evaluating retrieval contents. |
| autorag/evaluation/retrieval_contents.py | 23 | which is the output of conventional retrieval modules. |
| autorag/evaluation/retrieval.py | 41 | Decorator for evaluating retrieval results. |
| autorag/evaluation/retrieval.py | 43 | which is the output of conventional retrieval modules. |
| autorag/evaluation/metric/retrieval_contents.py | 2 | This file contains the retrieval contents metric, |
| autorag/evaluation/metric/retrieval.py | 11 | Compute f1 score for retrieval. |
| autorag/nodes/hybridretrieval/base.py | 5 | from autorag.nodes.retrieval.base import BaseRetrieval |
| autorag/nodes/hybridretrieval/hybrid_cc.py | 100 | raise ValueError("You must at least one metrics for retrieval evaluation.") |

### Wiki/graph/entity model

| file | line | text |
| --- | --- | --- |
| pyproject.toml | 82 | "langchain-community>=0.4.1", |
| CODE_OF_CONDUCT.md | 5 | We, the contributors and maintainers, commit to ensuring that everyone's participation in our project and community is free from harassment, regardless of age, body size, disability, ethnicity, gender identity and expres |
| CODE_OF_CONDUCT.md | 14 | * Putting the good of the community first |
| CODE_OF_CONDUCT.md | 15 | * Demonstrating empathy for other community members |
| CODE_OF_CONDUCT.md | 33 | This Code of Conduct applies both within project spaces and in public spaces when an individual is representing the project or its community. Examples of representing a project or community include using an official proj |
| CONTRIBUTING.md | 13 | Also, join our Discord at [here](https://discord.gg/P4DYXfmSAs) and discuss about your contribution with the community. |
| tests/resources/parse_data/all_files_full/markdown_sample.md | 5 | We, the contributors and maintainers, commit to ensuring that everyone's participation in our project and community is |
| tests/resources/parse_data/all_files_full/markdown_sample.md | 16 | * Putting the good of the community first* Demonstrating empathy for other community members |

### Memory/update lifecycle

| file | line | text |
| --- | --- | --- |
| autorag/validator.py | 80 | tempfile.NamedTemporaryFile(suffix=".parquet", delete=False) as qa_path, |
| autorag/validator.py | 81 | tempfile.NamedTemporaryFile(suffix=".parquet", delete=False) as corpus_path, |
| autorag/deploy/base.py | 66 | summary_df = summary_df.merge(strategy_df, on="node_type", how="left") |
| autorag/embedding/vllm.py | 41 | description="Directory to download and load the weights. (Default to the default cache dir of huggingface)", |
| autorag/utils/util.py | 318 | def save_parquet_safe(df: pd.DataFrame, filepath: str, upsert: bool = False): |
| autorag/utils/util.py | 326 | if os.path.exists(filepath) and not upsert: |
| autorag/utils/util.py | 329 | "Set upsert True if you want to overwrite the file." |
| autorag/vectordb/__init__.py | 46 | target_dict[0].pop("name") # delete a name key |

### Provenance/citation/evidence

| file | line | text |
| --- | --- | --- |
| autorag/node_line.py | 70 | source_path = os.path.join( |
| autorag/node_line.py | 75 | if os.path.exists(source_path): |
| autorag/node_line.py | 77 | source_path, os.path.join(retrieval_dir, f"{index}.parquet") |
| autorag/data/qa/extract_evidence.py | 1 | # This module is about extracting evidence from the given retrieval gt passage |
| autorag/data/qa/schema.py | 226 | # make evidence start_end_idx |
| autorag/data/qa/schema.py | 275 | :param evidence_indices: The evidence indices at the corresponding Raw. |
| autorag/data/qa/schema.py | 277 | :param evidence_paths: The evidence paths at the corresponding Raw. |
| autorag/data/legacy/qacreation/llama_index.py | 191 | basic_answer_system_prompt = """You are an AI assistant to answer the given question in the provide evidence text. |

### Evaluation/observability

| file | line | text |
| --- | --- | --- |
| autorag/dashboard.py | 79 | ### Metric Values |
| autorag/evaluator.py | 219 | logger.info("Evaluation complete.") |
| autorag/evaluator.py | 389 | logger.info("Evaluation complete.") |
| autorag/evaluation/generation.py | 7 | from autorag.evaluation.metric.generation import ( |
| autorag/evaluation/generation.py | 16 | from autorag.evaluation.util import cast_metrics |
| autorag/evaluation/generation.py | 34 | metric_inputs: List[MetricInput], metrics: Union[List[str], List[Dict]] |
| autorag/evaluation/generation.py | 61 | metric_names, metric_params = cast_metrics(metrics) |
| autorag/evaluation/generation.py | 66 | f"metric {metric_name} is not in supported metrics: {GENERATION_METRIC_FUNC_DICT.keys()}" |

### Agent/MCP/tool surface

| file | line | text |
| --- | --- | --- |
| autorag/__init__.py | 9 | from llama_index.llms.openai import OpenAI |
| autorag/__init__.py | 55 | "openai": OpenAI, |
| autorag/__init__.py | 63 | from llama_index.llms.ollama import Ollama |
| autorag/__init__.py | 66 | generator_models["ollama"] = Ollama |
| autorag/deploy/base.py | 141 | "embedding_model": "openai", |
| autorag/deploy/base.py | 142 | "collection_name": "openai", |
| autorag/embedding/base.py | 8 | from llama_index.embeddings.openai import OpenAIEmbedding |
| autorag/embedding/base.py | 9 | from llama_index.embeddings.openai import OpenAIEmbeddingModelType |

## Gap

_없음_
