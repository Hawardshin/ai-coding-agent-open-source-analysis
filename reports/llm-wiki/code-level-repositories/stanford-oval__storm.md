# stanford-oval/storm 코드 레벨 분석

생성일: 2026-06-17T23:31:49.964Z

## 기본 판정

| 항목 | 값 |
| --- | --- |
| type | rag-knowledge-platform |
| maturity | A integrated platform (92) |
| stars | 28424 |
| language | Python |
| tags | rag, agent-knowledge, korea-signal |
| files/code/source | 66/52/40 |
| tests/ci | 0/2 |
| local path | sources/stanford-oval__storm |

## 파이프라인 단계

| 단계 | 상태 | matched files | source files | evidence |
| --- | --- | --- | --- | --- |
| Ingestion/source intake | code | 2 | 1 | knowledge_storm/storm_wiki/modules/retriever.py:118 "SourceWatch", |
| Parsing/OCR/document extraction | code | 7 | 6 | knowledge_storm/dataclass.py:302 For more details, please refer to Section 3.2 of Co-STORM paper: https://www.arxiv.org/pdf/2408.15232 |
| Chunking/splitting | code | 2 | 2 | knowledge_storm/rm.py:1232 "snippets": [result["chunk"]], |
| Embedding/vector index | code | 9 | 5 | knowledge_storm/encoder.py:38 A wrapper class for the LiteLLM embedding model, designed to handle embedding |
| Retrieval/search/rerank | code | 37 | 22 | knowledge_storm/dataclass.py:500 current_node (KnowledgeNode): The node to start the search from. |
| Wiki/graph/entity model | code | 2 | 2 | knowledge_storm/rm.py:545 knowledge_graph = result.get("knowledgeGraph") |
| Memory/update lifecycle | code | 8 | 8 | knowledge_storm/dataclass.py:759 # Recursively merge children first |
| Provenance/citation/evidence | code | 20 | 13 | knowledge_storm/dataclass.py:23 cited_info (Dict[int, 'Information']): A dictionary where the key is the citation index and the value is Information type. |
| Evaluation/observability | code | 6 | 6 | knowledge_storm/encoder.py:18 litellm.telemetry = False |
| Agent/MCP/tool surface | code | 21 | 10 | knowledge_storm/encoder.py:43 such as OpenAI and Azure embeddings. Users can specify the desired encoder type and |

## 의존성 신호

- LLM/app framework: dspy_ai, sentence-transformers, langchain-text-splitters, langchain-huggingface, langchain-qdrant, litellm
- Vector/search store: qdrant-client, langchain-qdrant

## 주요 파일 후보

### Ingestion/source intake

- `knowledge_storm/storm_wiki/modules/retriever.py`
- `.github/workflows/python-package.yml`

### Parsing/OCR/document extraction

- `knowledge_storm/dataclass.py`
- `knowledge_storm/interface.py`
- `knowledge_storm/collaborative_storm/modules/co_storm_agents.py`
- `knowledge_storm/collaborative_storm/modules/grounded_question_generation.py`
- `knowledge_storm/storm_wiki/modules/persona_generator.py`
- `knowledge_storm/storm_wiki/modules/storm_dataclass.py`
- `README.md`

### Chunking/splitting

- `knowledge_storm/rm.py`
- `knowledge_storm/utils.py`

### Embedding/vector index

- `knowledge_storm/encoder.py`
- `knowledge_storm/rm.py`
- `knowledge_storm/utils.py`
- `knowledge_storm/collaborative_storm/modules/co_storm_agents.py`
- `frontend/demo_light/demo_util.py`
- `examples/storm_examples/run_storm_wiki_gpt_with_VectorRM.py`
- `README.md`
- `requirements.txt`
- `examples/storm_examples/README.md`

### Retrieval/search/rerank

- `knowledge_storm/dataclass.py`
- `knowledge_storm/encoder.py`
- `knowledge_storm/interface.py`
- `knowledge_storm/lm.py`
- `knowledge_storm/rm.py`
- `knowledge_storm/utils.py`
- `knowledge_storm/collaborative_storm/engine.py`
- `knowledge_storm/storm_wiki/engine.py`
- `knowledge_storm/collaborative_storm/modules/callback.py`
- `knowledge_storm/collaborative_storm/modules/co_storm_agents.py`
- `knowledge_storm/collaborative_storm/modules/collaborative_storm_utils.py`
- `knowledge_storm/collaborative_storm/modules/expert_generation.py`
- ... 6 more

### Wiki/graph/entity model

- `knowledge_storm/rm.py`
- `knowledge_storm/collaborative_storm/modules/expert_generation.py`

### Memory/update lifecycle

- `knowledge_storm/dataclass.py`
- `knowledge_storm/encoder.py`
- `knowledge_storm/lm.py`
- `knowledge_storm/collaborative_storm/modules/callback.py`
- `knowledge_storm/collaborative_storm/modules/co_storm_agents.py`
- `knowledge_storm/storm_wiki/modules/article_polish.py`
- `knowledge_storm/storm_wiki/modules/storm_dataclass.py`
- `frontend/demo_light/pages_util/MyArticles.py`

### Provenance/citation/evidence

- `knowledge_storm/dataclass.py`
- `knowledge_storm/interface.py`
- `knowledge_storm/utils.py`
- `knowledge_storm/collaborative_storm/modules/article_generation.py`
- `knowledge_storm/collaborative_storm/modules/collaborative_storm_utils.py`
- `knowledge_storm/collaborative_storm/modules/grounded_question_answering.py`
- `knowledge_storm/collaborative_storm/modules/grounded_question_generation.py`
- `knowledge_storm/collaborative_storm/modules/information_insertion_module.py`
- `knowledge_storm/collaborative_storm/modules/warmstart_hierarchical_chat.py`
- `knowledge_storm/storm_wiki/modules/article_generation.py`
- `knowledge_storm/storm_wiki/modules/article_polish.py`
- `knowledge_storm/storm_wiki/modules/storm_dataclass.py`
- ... 6 more

### Evaluation/observability

- `knowledge_storm/encoder.py`
- `knowledge_storm/lm.py`
- `knowledge_storm/collaborative_storm/modules/co_storm_agents.py`
- `knowledge_storm/collaborative_storm/modules/information_insertion_module.py`
- `knowledge_storm/storm_wiki/modules/knowledge_curation.py`
- `knowledge_storm/storm_wiki/modules/storm_dataclass.py`

### Agent/MCP/tool surface

- `knowledge_storm/encoder.py`
- `knowledge_storm/interface.py`
- `knowledge_storm/lm.py`
- `knowledge_storm/rm.py`
- `knowledge_storm/utils.py`
- `knowledge_storm/collaborative_storm/engine.py`
- `knowledge_storm/storm_wiki/engine.py`
- `knowledge_storm/collaborative_storm/modules/co_storm_agents.py`
- `knowledge_storm/collaborative_storm/modules/warmstart_hierarchical_chat.py`
- `frontend/demo_light/demo_util.py`
- `examples/costorm_examples/run_costorm_gpt.py`
- `examples/storm_examples/run_storm_wiki_claude.py`
- ... 6 more

## Evidence lines

### Ingestion/source intake

| file | line | text |
| --- | --- | --- |
| knowledge_storm/storm_wiki/modules/retriever.py | 118 | "SourceWatch", |
| .github/workflows/python-package.yml | 1 | name: Build and upload Python package |

### Parsing/OCR/document extraction

| file | line | text |
| --- | --- | --- |
| knowledge_storm/dataclass.py | 302 | For more details, please refer to Section 3.2 of Co-STORM paper: https://www.arxiv.org/pdf/2408.15232 |
| knowledge_storm/interface.py | 29 | in STORM paper https://arxiv.org/pdf/2402.14207.pdf, additional information |
| knowledge_storm/collaborative_storm/modules/co_storm_agents.py | 115 | For more information, please refer to Section 3.4 of Co-STORM paper: https://www.arxiv.org/pdf/2408.15232 |
| knowledge_storm/collaborative_storm/modules/co_storm_agents.py | 166 | For more information, please refer to Section 3.5 of Co-STORM paper: https://www.arxiv.org/pdf/2408.15232 |
| knowledge_storm/collaborative_storm/modules/grounded_question_generation.py | 7 | For more detailed information, refer to Section 3.5 of the Co-STORM paper: https://www.arxiv.org/pdf/2408.15232. |
| knowledge_storm/storm_wiki/modules/persona_generator.py | 7 | from bs4 import BeautifulSoup |
| knowledge_storm/storm_wiki/modules/persona_generator.py | 14 | soup = BeautifulSoup(response.content, "html.parser") |
| knowledge_storm/storm_wiki/modules/storm_dataclass.py | 54 | in STORM paper https://arxiv.org/pdf/2402.14207.pdf, additional information |

### Chunking/splitting

| file | line | text |
| --- | --- | --- |
| knowledge_storm/rm.py | 1232 | "snippets": [result["chunk"]], |
| knowledge_storm/utils.py | 15 | from langchain_text_splitters import RecursiveCharacterTextSplitter |
| knowledge_storm/utils.py | 187 | chunk_size: Size of each chunk if you need to build the vector store from documents. |
| knowledge_storm/utils.py | 188 | chunk_overlap: Overlap between chunks if you need to build the vector store from documents. |
| knowledge_storm/utils.py | 264 | from langchain_text_splitters import RecursiveCharacterTextSplitter |
| knowledge_storm/utils.py | 266 | text_splitter = RecursiveCharacterTextSplitter( |
| knowledge_storm/utils.py | 654 | self.text_splitter = RecursiveCharacterTextSplitter( |
| knowledge_storm/utils.py | 709 | articles[u]["snippets"] = self.text_splitter.split_text(articles[u]["text"]) |

### Embedding/vector index

| file | line | text |
| --- | --- | --- |
| knowledge_storm/encoder.py | 38 | A wrapper class for the LiteLLM embedding model, designed to handle embedding |
| knowledge_storm/encoder.py | 40 | embedding results for improved performance. |
| knowledge_storm/encoder.py | 42 | The Encoder utilizes the LiteLLM library to interact with various embedding models, |
| knowledge_storm/encoder.py | 43 | such as OpenAI and Azure embeddings. Users can specify the desired encoder type and |
| knowledge_storm/encoder.py | 47 | - Support for multiple embedding models (e.g., OpenAI, Azure). |
| knowledge_storm/encoder.py | 48 | - Parallel processing for faster embedding generation. |
| knowledge_storm/encoder.py | 49 | - Local disk caching to store and reuse embedding results. |
| knowledge_storm/encoder.py | 53 | Refer to the LiteLLM documentation for details on supported embedding models: |

### Retrieval/search/rerank

| file | line | text |
| --- | --- | --- |
| knowledge_storm/dataclass.py | 500 | current_node (KnowledgeNode): The node to start the search from. |
| knowledge_storm/encoder.py | 102 | reset (bool): If True, resets the total token usage counter after retrieval. |
| knowledge_storm/interface.py | 260 | class Retriever: |
| knowledge_storm/interface.py | 262 | An abstract base class for retriever modules. It provides a template for retrieving information based on a query. |
| knowledge_storm/interface.py | 264 | This class should be extended to implement specific retrieval functionalities. |
| knowledge_storm/interface.py | 265 | Users can design their retriever modules as needed by implementing the retrieve method. |
| knowledge_storm/interface.py | 266 | The retrieval model/search engine used for each part should be declared with a suffix '_rm' in the attribute name. |
| knowledge_storm/interface.py | 269 | def __init__(self, rm: dspy.Retrieve, max_thread: int = 1): |

### Wiki/graph/entity model

| file | line | text |
| --- | --- | --- |
| knowledge_storm/rm.py | 545 | knowledge_graph = result.get("knowledgeGraph") |
| knowledge_storm/rm.py | 558 | knowledge_graph.get("description") |
| knowledge_storm/rm.py | 559 | if knowledge_graph is not None |
| knowledge_storm/collaborative_storm/modules/expert_generation.py | 28 | For example, if the discussion focus is about a recent event at a specific university, consider inviting students, faculty members, journalists covering the event, university officials, and local community members. |

### Memory/update lifecycle

| file | line | text |
| --- | --- | --- |
| knowledge_storm/dataclass.py | 759 | # Recursively merge children first |
| knowledge_storm/dataclass.py | 763 | # If the node has exactly one child, merge its content with the child and remove the child |
| knowledge_storm/encoder.py | 20 | from litellm.caching.caching import Cache |
| knowledge_storm/encoder.py | 23 | litellm.cache = Cache(disk_cache_dir=disk_cache_dir, type="disk") |
| knowledge_storm/encoder.py | 144 | embedding_cache (Optional[Dict[str, np.ndarray]]): A cache to store previously computed embeddings. |
| knowledge_storm/lm.py | 40 | from litellm.caching.caching import Cache |
| knowledge_storm/lm.py | 43 | litellm.cache = Cache(disk_cache_dir=disk_cache_dir, type="disk") |
| knowledge_storm/lm.py | 64 | cache=True, |

### Provenance/citation/evidence

| file | line | text |
| --- | --- | --- |
| knowledge_storm/dataclass.py | 23 | cited_info (Dict[int, 'Information']): A dictionary where the key is the citation index and the value is Information type. |
| knowledge_storm/interface.py | 301 | # STORM generate the article with citations. We do not consider multi-hop citations. |
| knowledge_storm/interface.py | 302 | # Remove citations in the source to avoid confusion. |
| knowledge_storm/utils.py | 339 | Removes all citations from a given string. Citations are assumed to be in the format |
| knowledge_storm/utils.py | 344 | s (str): The string from which citations are to be removed. |
| knowledge_storm/utils.py | 347 | str: The string with all citation patterns removed. |
| knowledge_storm/utils.py | 355 | Extracts citation indexes from the provided content string and returns them as a list of integers. |
| knowledge_storm/utils.py | 358 | content (str): The content string containing citations in the format [number]. |

### Evaluation/observability

| file | line | text |
| --- | --- | --- |
| knowledge_storm/encoder.py | 18 | litellm.telemetry = False |
| knowledge_storm/lm.py | 38 | litellm.telemetry = False |
| knowledge_storm/collaborative_storm/modules/co_storm_agents.py | 4 | from sklearn.metrics.pairwise import cosine_similarity |
| knowledge_storm/collaborative_storm/modules/information_insertion_module.py | 7 | from sklearn.metrics.pairwise import cosine_similarity |
| knowledge_storm/storm_wiki/modules/knowledge_curation.py | 57 | ground_truth_url: The ground_truth_url will be excluded from search to avoid ground truth leakage in evaluation. |
| knowledge_storm/storm_wiki/modules/storm_dataclass.py | 8 | from sklearn.metrics.pairwise import cosine_similarity |

### Agent/MCP/tool surface

| file | line | text |
| --- | --- | --- |
| knowledge_storm/encoder.py | 43 | such as OpenAI and Azure embeddings. Users can specify the desired encoder type and |
| knowledge_storm/encoder.py | 47 | - Support for multiple embedding models (e.g., OpenAI, Azure). |
| knowledge_storm/encoder.py | 68 | encoder_type (Optional[str]): Type of encoder ('openai', 'azure', etc.). |
| knowledge_storm/encoder.py | 82 | if encoder_type.lower() == "openai": |
| knowledge_storm/encoder.py | 94 | f"Unsupported ENCODER_API_TYPE '{encoder_type}'. Supported types are 'openai', 'azure', 'together'." |
| knowledge_storm/encoder.py | 138 | Get text embeddings using OpenAI's text-embedding-3-small model. |
| knowledge_storm/encoder.py | 143 | api_key (str): The API key for accessing OpenAI's services. |
| knowledge_storm/interface.py | 565 | class Agent(ABC): |

## Gap

- tests
