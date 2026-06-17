# OpenSPG/KAG 코드 레벨 분석

생성일: 2026-06-17T23:31:28.543Z

## 기본 판정

| 항목 | 값 |
| --- | --- |
| type | graph-rag/kg |
| maturity | A integrated platform (108) |
| stars | 8834 |
| language | Python |
| tags | rag, knowledge-base, korea-signal |
| files/code/source | 1183/739/619 |
| tests/ci | 60/2 |
| local path | sources/OpenSPG__KAG |

## 파이프라인 단계

| 단계 | 상태 | matched files | source files | evidence |
| --- | --- | --- | --- | --- |
| Ingestion/source intake | code | 10 | 1 | upload_dev.sh:7 twine upload dist/* |
| Parsing/OCR/document extraction | code | 29 | 8 | kag/builder/default_chain.py:76 @KAGBuilderChain.register("unstructured") |
| Chunking/splitting | code | 133 | 74 | kag/bridge/spg_server_bridge.py:14 from kag.builder.model.chunk import Chunk |
| Embedding/vector index | code | 43 | 28 | kag/indexer/kag_index.py:20 return "Chunk with optional text/vector index" |
| Retrieval/search/rerank | code | 160 | 102 | kag/solver/executor/retriever/kag_hybrid_retrieval_executor.py:45 def _wrapped_invoke(retriever, task, context, segment_name, kwargs): |
| Wiki/graph/entity model | code | 138 | 97 | kag/__init__.py:13 # "Licensor" shall mean the copyright owner or entity authorized by |
| Memory/update lifecycle | code | 114 | 82 | kag/common/conf.py:22 import knext.common.cache |
| Provenance/citation/evidence | code | 32 | 8 | kag/__init__.py:103 # attribution notices from the Source form of the Work, |
| Evaluation/observability | code | 59 | 28 | kag/open_benchmark/benchmark.sh:6 echo "Commands: build, eval, all" |
| Agent/MCP/tool surface | code | 161 | 81 | kag/bridge/spg_server_bridge.py:17 from kag.interface.common.llm_client import LLMCallCcontext, TokenMeterFactory |

## 의존성 신호

- LLM/app framework: openai, ollama
- Graph/KG store: networkx, neo4j
- Document parsing/OCR: pypdf, bs4, python-docx, pdfminer.six, PyPDF2

## 주요 파일 후보

### Ingestion/source intake

- `upload_dev.sh`
- `kag/open_benchmark/hotpotqa/data/qa_train.json`
- `kag/open_benchmark/hotpotqa/data/train_corpus.json`
- `kag/solver/executor/mcp/mcp.json`
- `kag/examples/csqa/solver/data/csqa_lightrag_answers.json`
- `kag/examples/csqa/solver/data/questions.json`
- `README.md`
- `docs/release_notes.md`
- `kag/examples/csqa/builder/data/introducing_regular_expressions.md`
- `kag/examples/csqa/builder/data/machine_learning_with_spark.md`

### Parsing/OCR/document extraction

- `kag/builder/default_chain.py`
- `kag/builder/prompt/outline_prompt.py`
- `kag/builder/component/reader/docx_reader.py`
- `kag/builder/component/reader/markdown_reader.py`
- `kag/builder/component/reader/mix_reader.py`
- `kag/builder/component/reader/pdf_reader.py`
- `kag/builder/component/scanner/directory_scanner.py`
- `kag/builder/component/splitter/outline_splitter.py`
- `kag/open_benchmark/hotpotqa/data/qa_train.json`
- `kag/open_benchmark/hotpotqa/data/train_corpus.json`
- `kag/examples/csqa/solver/data/csqa_lightrag_answers.json`
- `tests/unit/builder/test_runner.py`
- ... 6 more

### Chunking/splitting

- `kag/bridge/spg_server_bridge.py`
- `kag/builder/default_chain.py`
- `kag/common/utils.py`
- `kag/indexer/kag_index_manager.py`
- `kag/indexer/kag_index.py`
- `kag/interface/__init__.py`
- `kag/solver/main_solver.py`
- `knext/schema/client.py`
- `kag/builder/component/__init__.py`
- `kag/builder/model/chunk.py`
- `kag/builder/prompt/chunk_summary_prompt.py`
- `kag/builder/prompt/spg_prompt.py`
- ... 6 more

### Embedding/vector index

- `kag/indexer/kag_index.py`
- `kag/common/benchmarks/evaluate.py`
- `kag/common/graphstore/graph_store.py`
- `kag/common/graphstore/memory_graph.py`
- `kag/common/graphstore/neo4j_graph_store.py`
- `kag/common/vectorize_model/local_bge_model.py`
- `kag/common/vectorize_model/mock_model.py`
- `kag/common/vectorize_model/ollama_model.py`
- `kag/common/vectorize_model/openai_model.py`
- `kag/common/vectorize_model/sparse_bge_m3_model.py`
- `kag/common/vectorize_model/vectorize_model_config_checker.py`
- `kag/interface/builder/vectorizer_abc.py`
- ... 6 more

### Retrieval/search/rerank

- `kag/solver/executor/retriever/kag_hybrid_retrieval_executor.py`
- `kag/common/conf.py`
- `kag/common/utils.py`
- `kag/indexer/kag_index_manager.py`
- `kag/solver/__init__.py`
- `kag/solver/main_solver.py`
- `knext/graph/client.py`
- `knext/reasoner/client.py`
- `knext/search/__init__.py`
- `knext/search/client.py`
- `kag/common/benchmarks/evaUtils.py`
- `kag/common/checkpointer/base.py`
- ... 6 more

### Wiki/graph/entity model

- `kag/__init__.py`
- `kag/common/text_sim_by_vector.py`
- `kag/common/utils.py`
- `kag/indexer/kag_index_manager.py`
- `knext/graph/client.py`
- `knext/reasoner/client.py`
- `knext/schema/client.py`
- `knext/search/client.py`
- `kag/builder/prompt/analyze_table_prompt.py`
- `kag/builder/prompt/atomic_query_extract_prompt.py`
- `kag/builder/prompt/spg_prompt.py`
- `kag/common/benchmarks/evaUtils.py`
- ... 6 more

### Memory/update lifecycle

- `kag/common/conf.py`
- `knext/common/cache.py`
- `knext/reasoner/client.py`
- `knext/schema/client.py`
- `kag/bin/commands/builder.py`
- `kag/builder/operator/base.py`
- `kag/common/checkpointer/base.py`
- `kag/common/checkpointer/bin_checkpointer.py`
- `kag/common/graphstore/graph_store.py`
- `kag/common/graphstore/memory_graph.py`
- `kag/common/graphstore/neo4j_graph_store.py`
- `kag/interface/builder/scanner_abc.py`
- ... 6 more

### Provenance/citation/evidence

- `kag/__init__.py`
- `kag/open_benchmark/common_component/evidence_based_reasoner.py`
- `kag/solver/prompt/reference_generator.py`
- `kag/solver/prompt/thought_iterative_planning_prompt.py`
- `kag/builder/component/reader/docx_reader.py`
- `kag/builder/component/reader/pdf_reader.py`
- `kag/builder/prompt/default/knowledge_unit.py`
- `kag/open_benchmark/AffairQA/solver/executors/evidence_based_reasoner.py`
- `kag/open_benchmark/hotpotqa/data/qa_train.json`
- `kag/open_benchmark/hotpotqa/data/train_corpus.json`
- `kag/open_benchmark/musique/data/qa_sub.json`
- `kag/examples/csqa/solver/data/csqa_lightrag_answers.json`
- ... 6 more

### Evaluation/observability

- `kag/open_benchmark/benchmark.sh`
- `kag/bin/commands/__init__.py`
- `kag/bin/commands/benchmark.py`
- `kag/builder/operator/base.py`
- `kag/common/benchmarks/evaluate.py`
- `kag/common/benchmarks/evaUtils.py`
- `kag/common/rerank_model/local_bge_rerank_model.py`
- `kag/interface/solver/base_model.py`
- `kag/open_benchmark/prqa/evaluator.py`
- `kag/open_benchmark/utils/eval_qa.py`
- `kag/solver/executor/mock_executors.py`
- `kag/solver/prompt/atomic_query_rewrite_prompt.py`
- ... 6 more

### Agent/MCP/tool surface

- `kag/bridge/spg_server_bridge.py`
- `kag/indexer/kag_index_manager.py`
- `kag/interface/__init__.py`
- `kag/solver/__init__.py`
- `kag/solver/main_solver.py`
- `kag/bin/commands/builder.py`
- `kag/bin/commands/mcp_server.py`
- `kag/common/benchmarks/evaluate.py`
- `kag/common/benchmarks/evaUtils.py`
- `kag/common/benchmarks/LLMJudger.py`
- `kag/common/llm/llm_config_checker.py`
- `kag/common/llm/mock_llm.py`
- ... 6 more

## Evidence lines

### Ingestion/source intake

| file | line | text |
| --- | --- | --- |
| upload_dev.sh | 7 | twine upload dist/* |
| kag/solver/executor/mcp/mcp.json | 12 | "store_path":"/upload/mcp/8d386d1a-06a9-4220-b3ef-4751409eb530/music.py", |
| kag/examples/csqa/solver/data/csqa_lightrag_answers.json | 1008 | "A machine learning system with Spark typically includes components such as data ingestion and storage, data cleansing and transformation, model training and testing, model deployment and integration, and model monitorin |
| kag/examples/csqa/solver/data/csqa_lightrag_answers.json | 1019 | "lightrag_answer": "Designing a machine learning system with Apache Spark involves several key components that work together to process data, train models, and deploy them for real-world applications. Below is an overvie |
| kag/examples/csqa/solver/data/questions.json | 890 | "A machine learning system with Spark typically includes components such as data ingestion and storage, data cleansing and transformation, model training and testing, model deployment and integration, and model monitorin |
| README.md | 88 | * 2024.11.21 : Support Word docs upload, model invoke concurrency setting, User experience optimization, etc. |
| docs/release_notes.md | 18 | Users can now directly upload `.doc` or `.docx` files to streamline the knowledge base construction process. |
| kag/examples/csqa/builder/data/introducing_regular_expressions.md | 2080 | Pc \| Connector punctuation |

### Parsing/OCR/document extraction

| file | line | text |
| --- | --- | --- |
| kag/builder/default_chain.py | 76 | @KAGBuilderChain.register("unstructured") |
| kag/builder/default_chain.py | 80 | A class representing a default unstructured builder chain, used to build a knowledge graph from unstructured text data such as txt and pdf files. |
| kag/builder/prompt/outline_prompt.py | 23 | "instruction": "\n给定一段纯文本内容，请提取其中的标题，并返回一个列表。每个标题应包含以下信息：\n- 标题文本\n- 标题级别（例如 1 表示一级标题，2 表示二级标题等）\n\n假设标题遵循以下规则：\n1. 标题通常带有数字，我们的文本可能是从一些图片OCR生成的，所以标题可能隐藏在段落中，尽可能找出这些隐藏在段落中带有数字的标题\n2. 标题的级别可以通过以下方式推断：\n - 一级标题：通常是篇章级别的内容。 |
| kag/builder/prompt/outline_prompt.py | 53 | "instruction": "\nGiven a text content, please extract the titles and return them as a list. Each title should include the following information:\n- Title text\n- Title level (e.g., 1 for first level, 2 for second level, |
| kag/builder/component/reader/docx_reader.py | 16 | from docx import Document |
| kag/builder/component/reader/docx_reader.py | 17 | from docx.text.paragraph import Paragraph |
| kag/builder/component/reader/docx_reader.py | 69 | @ReaderABC.register("docx") |
| kag/builder/component/reader/docx_reader.py | 73 | A class for reading Docx files into Chunk objects. |

### Chunking/splitting

| file | line | text |
| --- | --- | --- |
| kag/bridge/spg_server_bridge.py | 14 | from kag.builder.model.chunk import Chunk |
| kag/bridge/spg_server_bridge.py | 42 | elif isinstance(data, Chunk): |
| kag/bridge/spg_server_bridge.py | 51 | f"expect Chunk and SubGraph nested in tuple and list; found {data.__class__}" |
| kag/bridge/spg_server_bridge.py | 83 | chunk, _ = collect_reader_outputs(reader_output) |
| kag/bridge/spg_server_bridge.py | 84 | chunks += chunk |
| kag/builder/default_chain.py | 81 | It consists of a reader, splitter, extractor, vectorizer, optional post-processor, and writer components. |
| kag/builder/default_chain.py | 87 | splitter: SplitterABC = None, |
| kag/builder/default_chain.py | 98 | splitter (SplitterABC): The splitter component to be used. |

### Embedding/vector index

| file | line | text |
| --- | --- | --- |
| kag/indexer/kag_index.py | 20 | return "Chunk with optional text/vector index" |
| kag/indexer/kag_index.py | 35 | return "Chunk summary with optional text/vector index" |
| kag/indexer/kag_index.py | 50 | return "Chunk event with optional text/vector index" |
| kag/indexer/kag_index.py | 65 | return "Atomic query index with optional text/vector index" |
| kag/indexer/kag_index.py | 80 | return "Atomic query index with optional text/vector index" |
| kag/common/benchmarks/evaluate.py | 31 | self, embedding_factory="text-embedding-ada-002", metrics: list = None |
| kag/common/benchmarks/evaluate.py | 51 | # embeddings = embedding_factory(self.embedding_factory, run_config) |
| kag/common/benchmarks/evaluate.py | 53 | # score = evaluate(dataset, metrics=[answer_similarity], embeddings = embeddings, run_config=run_config) |

### Retrieval/search/rerank

| file | line | text |
| --- | --- | --- |
| kag/solver/executor/retriever/kag_hybrid_retrieval_executor.py | 45 | def _wrapped_invoke(retriever, task, context, segment_name, kwargs): |
| kag/solver/executor/retriever/kag_hybrid_retrieval_executor.py | 47 | output = retriever.invoke( |
| kag/solver/executor/retriever/kag_hybrid_retrieval_executor.py | 136 | for retriever in self.retrievers: |
| kag/solver/executor/retriever/kag_hybrid_retrieval_executor.py | 138 | priority = getattr(retriever, "priority", 1) |
| kag/solver/executor/retriever/kag_hybrid_retrieval_executor.py | 139 | priority_groups[priority].append(retriever) |
| kag/solver/executor/retriever/kag_hybrid_retrieval_executor.py | 151 | outputs = [] # To collect output from each retriever |
| kag/solver/executor/retriever/kag_hybrid_retrieval_executor.py | 155 | for retriever in group: |
| kag/solver/executor/retriever/kag_hybrid_retrieval_executor.py | 156 | # Report the beginning of each sub-retriever execution |

### Wiki/graph/entity model

| file | line | text |
| --- | --- | --- |
| kag/__init__.py | 13 | # "Licensor" shall mean the copyright owner or entity authorized by |
| kag/__init__.py | 16 | # "Legal Entity" shall mean the union of the acting entity and all |
| kag/__init__.py | 17 | # other entities that control, are controlled by, or are under common |
| kag/__init__.py | 18 | # control with that entity. For the purposes of this definition, |
| kag/__init__.py | 20 | # direction or management of such entity, whether by contract or |
| kag/__init__.py | 22 | # outstanding shares, or (iii) beneficial ownership of such entity. |
| kag/__init__.py | 24 | # "You" (or "Your") shall mean an individual or Legal Entity |
| kag/__init__.py | 53 | # or by an individual or Legal Entity authorized to submit on behalf of |

### Memory/update lifecycle

| file | line | text |
| --- | --- | --- |
| kag/common/conf.py | 22 | import knext.common.cache |
| kag/common/conf.py | 209 | KAG_QA_TASK_CONFIG = knext.common.cache.LinkCache(maxsize=100, ttl=300) |
| kag/common/conf.py | 217 | for k in KAG_QA_TASK_CONFIG.cache.keys(): |
| knext/common/cache.py | 20 | def cache(self): |
| knext/common/cache.py | 24 | self.cache[key] = value |
| knext/common/cache.py | 27 | return self.cache.get(key) |
| knext/common/cache.py | 35 | def cache(self): |
| knext/common/cache.py | 39 | self.cache[key] = value |

### Provenance/citation/evidence

| file | line | text |
| --- | --- | --- |
| kag/__init__.py | 103 | # attribution notices from the Source form of the Work, |
| kag/__init__.py | 109 | # include a readable copy of the attribution notices contained |
| kag/__init__.py | 118 | # do not modify the License. You may add Your own attribution |
| kag/__init__.py | 121 | # that such additional attribution notices cannot be construed |
| kag/open_benchmark/common_component/evidence_based_reasoner.py | 104 | "description": "Synthesizes precise, evidence-backed answers to user queries by analyzing provided contextual documents. Note: Contextual documents are pre-loaded and processed implicitly; no explicit context parameter i |
| kag/solver/prompt/reference_generator.py | 49 | If the answer contains referenced information, include the `id` field from the reference. If it is not a retrieved result, no citation marker is needed. |
| kag/solver/prompt/reference_generator.py | 51 | Citations should be in the format `<reference id="chunk:1_2"></reference>`, and the cited symbol must exist in the `id` field of the references; otherwise, no citation should be provided. |
| kag/solver/prompt/thought_iterative_planning_prompt.py | 47 | "description": "Synthesizes precise, evidence-backed answers to user queries by analyzing provided contextual documents. Note: Contextual documents are pre-loaded and processed implicitly; no explicit context parameter i |

### Evaluation/observability

| file | line | text |
| --- | --- | --- |
| kag/open_benchmark/benchmark.sh | 6 | echo "Commands: build, eval, all" |
| kag/open_benchmark/benchmark.sh | 22 | echo "Commands: build, eval, all" |
| kag/open_benchmark/benchmark.sh | 32 | echo "Commands: build, eval, all" |
| kag/open_benchmark/benchmark.sh | 71 | eval) |
| kag/open_benchmark/benchmark.sh | 74 | python eval.py --qa_file "./data/qa.json" |
| kag/open_benchmark/benchmark.sh | 76 | python eval.py --qa_file "./data/qa_${data_set}.json" |
| kag/open_benchmark/benchmark.sh | 102 | python eval.py --qa_file "./data/qa.json" |
| kag/open_benchmark/benchmark.sh | 104 | python eval.py --qa_file "./data/qa_${data_set}.json" |

### Agent/MCP/tool surface

| file | line | text |
| --- | --- | --- |
| kag/bridge/spg_server_bridge.py | 17 | from kag.interface.common.llm_client import LLMCallCcontext, TokenMeterFactory |
| kag/indexer/kag_index_manager.py | 160 | "llm_client": llm_config, |
| kag/indexer/kag_index_manager.py | 710 | "llm_client": llm_config, |
| kag/indexer/kag_index_manager.py | 724 | "llm_client": llm_config, |
| kag/interface/__init__.py | 13 | from kag.interface.common.llm_client import LLMClient |
| kag/interface/__init__.py | 68 | "LLMClient", |
| kag/solver/__init__.py | 46 | from kag.solver.executor.mcp.mcp_executor import McpExecutor |
| kag/solver/main_solver.py | 235 | "openai", |

## Gap

_없음_
