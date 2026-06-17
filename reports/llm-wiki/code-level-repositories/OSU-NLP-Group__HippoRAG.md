# OSU-NLP-Group/HippoRAG 코드 레벨 분석

생성일: 2026-06-17T23:31:32.205Z

## 기본 판정

| 항목 | 값 |
| --- | --- |
| type | graph-rag/kg |
| maturity | C focused implementation (59) |
| stars | 3631 |
| language | Python |
| tags | rag, knowledge-base, document-chat |
| files/code/source | 79/62/62 |
| tests/ci | 0/0 |
| local path | sources/OSU-NLP-Group__HippoRAG |

## 파이프라인 단계

| 단계 | 상태 | matched files | source files | evidence |
| --- | --- | --- | --- | --- |
| Ingestion/source intake | absent | 0 | 0 |  |
| Parsing/OCR/document extraction | absent | 0 | 0 |  |
| Chunking/splitting | code | 8 | 7 | src/hipporag/HippoRAG.py:65 chunk_embedding_store (EmbeddingStore): The embedding store handling chunk embeddings. |
| Embedding/vector index | code | 25 | 24 | src/hipporag/embedding_store.py:19 embedding_model: The model used for embeddings. |
| Retrieval/search/rerank | code | 27 | 24 | src/hipporag/HippoRAG.py:30 from .rerank import DSPyFilter |
| Wiki/graph/entity model | code | 12 | 10 | src/hipporag/HippoRAG.py:66 entity_embedding_store (EmbeddingStore): The embedding store handling entity embeddings. |
| Memory/update lifecycle | code | 13 | 12 | src/hipporag/embedding_store.py:130 def delete(self, hash_ids): |
| Provenance/citation/evidence | doc-only | 1 | 0 | README.md:414 ## Citation |
| Evaluation/observability | code | 21 | 20 | src/hipporag/HippoRAG.py:26 from .evaluation.retrieval_eval import RetrievalRecall |
| Agent/MCP/tool surface | code | 23 | 21 | src/hipporag/rerank.py:4 from openai import OpenAI |

## 의존성 신호

- LLM/app framework: openai, litellm, vllm, transformers
- Graph/KG store: networkx, python_igraph

## 주요 파일 후보

### Chunking/splitting

- `src/hipporag/HippoRAG.py`
- `src/hipporag/StandardRAG.py`
- `src/hipporag/information_extraction/openie_openai.py`
- `src/hipporag/information_extraction/openie_transformers_offline.py`
- `src/hipporag/information_extraction/openie_vllm_offline.py`
- `src/hipporag/utils/config_utils.py`
- `src/hipporag/utils/misc_utils.py`
- `README.md`

### Embedding/vector index

- `src/hipporag/embedding_store.py`
- `src/hipporag/embedding_model/__init__.py`
- `src/hipporag/embedding_model/base.py`
- `src/hipporag/embedding_model/Cohere.py`
- `src/hipporag/embedding_model/Contriever.py`
- `src/hipporag/embedding_model/GritLM.py`
- `src/hipporag/embedding_model/NVEmbedV2.py`
- `src/hipporag/embedding_model/OpenAI.py`
- `src/hipporag/embedding_model/VLLM.py`
- `src/hipporag/HippoRAG.py`
- `src/hipporag/StandardRAG.py`
- `src/hipporag/utils/config_utils.py`
- ... 6 more

### Retrieval/search/rerank

- `src/hipporag/HippoRAG.py`
- `src/hipporag/rerank.py`
- `src/hipporag/StandardRAG.py`
- `src/hipporag/embedding_model/base.py`
- `src/hipporag/information_extraction/openie_openai.py`
- `src/hipporag/prompts/filter_default_prompt.py`
- `src/hipporag/prompts/linking.py`
- `src/hipporag/prompts/prompt_template_manager.py`
- `src/hipporag/utils/config_utils.py`
- `src/hipporag/utils/embed_utils.py`
- `src/hipporag/utils/qa_utils.py`
- `main_azure.py`
- ... 6 more

### Wiki/graph/entity model

- `src/hipporag/HippoRAG.py`
- `src/hipporag/StandardRAG.py`
- `src/hipporag/information_extraction/openie_transformers_offline.py`
- `src/hipporag/information_extraction/openie_vllm_offline.py`
- `src/hipporag/prompts/linking.py`
- `src/hipporag/utils/config_utils.py`
- `src/hipporag/utils/misc_utils.py`
- `src/hipporag/prompts/templates/ner_query.py`
- `src/hipporag/prompts/templates/ner.py`
- `src/hipporag/prompts/templates/triple_extraction.py`
- `CONTRIBUTING.md`
- `README.md`

### Memory/update lifecycle

- `src/hipporag/embedding_store.py`
- `src/hipporag/HippoRAG.py`
- `src/hipporag/StandardRAG.py`
- `src/hipporag/embedding_model/base.py`
- `src/hipporag/llm/base.py`
- `src/hipporag/llm/bedrock_llm.py`
- `src/hipporag/llm/openai_gpt.py`
- `src/hipporag/llm/transformers_llm.py`
- `tests_azure.py`
- `tests_local.py`
- `tests_openai.py`
- `demo_azure.py`
- ... 1 more

### Provenance/citation/evidence

- `README.md`

### Evaluation/observability

- `src/hipporag/HippoRAG.py`
- `src/hipporag/rerank.py`
- `src/hipporag/StandardRAG.py`
- `src/hipporag/embedding_model/Contriever.py`
- `src/hipporag/evaluation/base.py`
- `src/hipporag/evaluation/qa_eval.py`
- `src/hipporag/evaluation/retrieval_eval.py`
- `src/hipporag/information_extraction/openie_openai.py`
- `main_azure.py`
- `main_dpr.py`
- `main.py`
- `test_transformers.py`
- ... 6 more

### Agent/MCP/tool surface

- `src/hipporag/rerank.py`
- `src/hipporag/embedding_model/__init__.py`
- `src/hipporag/embedding_model/OpenAI.py`
- `src/hipporag/llm/bedrock_llm.py`
- `src/hipporag/llm/openai_gpt.py`
- `src/hipporag/utils/config_utils.py`
- `src/hipporag/utils/llm_utils.py`
- `src/hipporag/utils/qa_utils.py`
- `main_azure.py`
- `main_dpr.py`
- `main.py`
- `setup.py`
- ... 6 more

## Evidence lines

### Chunking/splitting

| file | line | text |
| --- | --- | --- |
| src/hipporag/HippoRAG.py | 65 | chunk_embedding_store (EmbeddingStore): The embedding store handling chunk embeddings. |
| src/hipporag/HippoRAG.py | 144 | self.global_config.embedding_batch_size, 'chunk') |
| src/hipporag/HippoRAG.py | 299 | [self.chunk_embedding_store.text_to_hash_id[chunk] for chunk in docs_to_delete]) |
| src/hipporag/HippoRAG.py | 781 | This method is responsible for iterating through a list of chunk identifiers |
| src/hipporag/HippoRAG.py | 783 | between the passage nodes (defined by the chunk identifiers) and the phrase |
| src/hipporag/HippoRAG.py | 793 | with the corresponding chunk in the chunk_ids list. |
| src/hipporag/HippoRAG.py | 892 | chunk_keys (List[str]): A list of chunk keys that represent identifiers |
| src/hipporag/HippoRAG.py | 898 | second element is a set of chunk keys that still need to |

### Embedding/vector index

| file | line | text |
| --- | --- | --- |
| src/hipporag/embedding_store.py | 19 | embedding_model: The model used for embeddings. |
| src/hipporag/embedding_store.py | 95 | self.hash_ids, self.texts, self.embeddings = df["hash_id"].values.tolist(), df["content"].values.tolist(), df["embedding"].values.tolist() |
| src/hipporag/embedding_store.py | 103 | assert len(self.hash_ids) == len(self.texts) == len(self.embeddings) |
| src/hipporag/embedding_store.py | 106 | self.hash_ids, self.texts, self.embeddings = [], [], [] |
| src/hipporag/embedding_store.py | 113 | "embedding": self.embeddings |
| src/hipporag/embedding_store.py | 116 | self.hash_id_to_row = {h: {"hash_id": h, "content": t} for h, t, e in zip(self.hash_ids, self.texts, self.embeddings)} |
| src/hipporag/embedding_store.py | 122 | def _upsert(self, hash_ids, texts, embeddings): |
| src/hipporag/embedding_store.py | 123 | self.embeddings.extend(embeddings) |

### Retrieval/search/rerank

| file | line | text |
| --- | --- | --- |
| src/hipporag/HippoRAG.py | 30 | from .rerank import DSPyFilter |
| src/hipporag/HippoRAG.py | 73 | when a rerank file path is specified in the global configuration. |
| src/hipporag/HippoRAG.py | 74 | ready_to_retrieve (bool): A flag indicating whether the system is ready for retrieval |
| src/hipporag/HippoRAG.py | 216 | assert False, logger.info('Done with OpenIE, run online indexing for future retrieval.') |
| src/hipporag/HippoRAG.py | 221 | based on the given documents and encodes passages, entities and facts separately for later retrieval. |
| src/hipporag/HippoRAG.py | 363 | def retrieve(self, |
| src/hipporag/HippoRAG.py | 368 | Performs retrieval using the HippoRAG 2 framework, which consists of several steps: |
| src/hipporag/HippoRAG.py | 369 | - Fact Retrieval |

### Wiki/graph/entity model

| file | line | text |
| --- | --- | --- |
| src/hipporag/HippoRAG.py | 66 | entity_embedding_store (EmbeddingStore): The embedding store handling entity embeddings. |
| src/hipporag/HippoRAG.py | 147 | self.global_config.embedding_batch_size, 'entity') |
| src/hipporag/HippoRAG.py | 221 | based on the given documents and encodes passages, entities and facts separately for later retrieval. |
| src/hipporag/HippoRAG.py | 259 | logger.info(f"Encoding Entities") |
| src/hipporag/HippoRAG.py | 283 | Note that triples and entities which are indexed from chunks that are not being removed will not be removed. |
| src/hipporag/HippoRAG.py | 334 | #Filter out entities that appear in unaltered chunks |
| src/hipporag/HippoRAG.py | 349 | logger.info(f"Deleting {len(filtered_ent_ids_to_delete)} Entities") |
| src/hipporag/HippoRAG.py | 734 | for entities and relations, and updates various internal statistics |

### Memory/update lifecycle

| file | line | text |
| --- | --- | --- |
| src/hipporag/embedding_store.py | 130 | def delete(self, hash_ids): |
| src/hipporag/HippoRAG.py | 280 | def delete(self, docs_to_delete: List[str]): |
| src/hipporag/HippoRAG.py | 297 | #Get ids for chunks to delete |
| src/hipporag/HippoRAG.py | 301 | #Find triples in chunks to delete |
| src/hipporag/HippoRAG.py | 353 | self.entity_embedding_store.delete(filtered_ent_ids_to_delete) |
| src/hipporag/HippoRAG.py | 354 | self.fact_embedding_store.delete(triple_ids_to_delete) |
| src/hipporag/HippoRAG.py | 355 | self.chunk_embedding_store.delete(chunk_ids_to_delete) |
| src/hipporag/HippoRAG.py | 357 | #Delete Nodes from Graph |

### Provenance/citation/evidence

| file | line | text |
| --- | --- | --- |
| README.md | 414 | ## Citation |

### Evaluation/observability

| file | line | text |
| --- | --- | --- |
| src/hipporag/HippoRAG.py | 26 | from .evaluation.retrieval_eval import RetrievalRecall |
| src/hipporag/HippoRAG.py | 27 | from .evaluation.qa_eval import QAExactMatch, QAF1Score |
| src/hipporag/HippoRAG.py | 382 | if retrieval performance evaluation is enabled (`do_eval_retrieval` in global configuration). |
| src/hipporag/HippoRAG.py | 386 | If retrieval performance evaluation is not enabled, returns a list of QuerySolution objects, each containing |
| src/hipporag/HippoRAG.py | 387 | the retrieved documents and their scores for the corresponding query. If evaluation is enabled, also returns |
| src/hipporag/HippoRAG.py | 388 | a dictionary containing the evaluation metrics computed over the retrieved results. |
| src/hipporag/HippoRAG.py | 445 | logger.info(f"Evaluation results for retrieval: {overall_retrieval_result}") |
| src/hipporag/HippoRAG.py | 460 | recall @ k, exact match and F1 score metrics. |

### Agent/MCP/tool surface

| file | line | text |
| --- | --- | --- |
| src/hipporag/rerank.py | 4 | from openai import OpenAI |
| src/hipporag/rerank.py | 91 | # call openai |
| src/hipporag/embedding_model/__init__.py | 5 | from .OpenAI import OpenAIEmbeddingModel |
| src/hipporag/embedding_model/OpenAI.py | 8 | from openai import OpenAI |
| src/hipporag/embedding_model/OpenAI.py | 9 | from openai import AzureOpenAI |
| src/hipporag/embedding_model/OpenAI.py | 34 | self.client = OpenAI( |
| src/hipporag/llm/bedrock_llm.py | 69 | llm_model_name="anthropic.claude-3-5-haiku-20241022-v1:0" or any other Bedrock Model-ID |
| src/hipporag/llm/openai_gpt.py | 10 | import openai |

## Gap

- Provenance/citation/evidence
- tests
- ci
