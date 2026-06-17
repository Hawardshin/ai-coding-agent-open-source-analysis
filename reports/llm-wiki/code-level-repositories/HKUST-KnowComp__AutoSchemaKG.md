# HKUST-KnowComp/AutoSchemaKG 코드 레벨 분석

생성일: 2026-06-17T23:31:29.339Z

## 기본 판정

| 항목 | 값 |
| --- | --- |
| type | graph-rag/kg |
| maturity | A integrated platform (91) |
| stars | 761 |
| language | Python |
| tags | rag, knowledge-base, korea-signal |
| files/code/source | 1188/210/170 |
| tests/ci | 120/0 |
| local path | sources/HKUST-KnowComp__AutoSchemaKG |

## 파이프라인 단계

| 단계 | 상태 | matched files | source files | evidence |
| --- | --- | --- | --- | --- |
| Ingestion/source intake | code | 10 | 3 | atlas_rag/kg_construction/triple_extraction.py:391 data_loader = CustomDataLoader(dataset["train"], processor, self.prompt_instructions, self.result_schema) |
| Parsing/OCR/document extraction | code | 15 | 2 | EvaluateGeneralTask/lm-evaluation-harness/lm_eval/api/metrics.py:96 Paper: https://www.aclweb.org/anthology/W15-3049.pdf |
| Chunking/splitting | code | 36 | 19 | EvaluateFactuality/eval.py:107 eval_prompt=open("./prompt/segment/math/raw.txt").read() + "\n" |
| Embedding/vector index | code | 48 | 21 | atlas_rag/vectorstore/embedding_model.py:25 writer_node.writerow(["name:ID", "type", "file_id", "concepts", "synsets", "embedding:STRING", ":LABEL"]) |
| Retrieval/search/rerank | code | 83 | 37 | atlas_mutihopqa.py:3 from atlas_rag.retriever import HippoRAG2Retriever, TogRetriever, HippoRAGRetriever |
| Wiki/graph/entity model | code | 82 | 40 | neo4j_scripts/get_neo4j_cc.sh:11 wget https://neo4j.com/artifact.php?name=neo4j-community-${NEO4J_VERSION}-unix.tar.gz -O neo4j.tar.gz |
| Memory/update lifecycle | code | 53 | 26 | atlas_rag/kg_construction/concept_to_csv.py:32 # we need to read the concepts maps to the memory, as it is usually not too large. |
| Provenance/citation/evidence | doc-only | 10 | 0 | example/example_data/Dulce.json:11 "text": "## Chapter 2\n\nSam Rivera sat alone in a cramped office, the hum of a dozen servers murmuring a digital lullaby in the background. Surrounded by the glow of multiple screens, their eyes danced across lines of c |
| Evaluation/observability | code | 103 | 47 | atlas_mutihopqa.py:8 from atlas_rag.evaluation import BenchMarkConfig, RAGBenchmark |
| Agent/MCP/tool surface | code | 71 | 28 | atlas_mutihopqa.py:2 from openai import OpenAI |

## 의존성 신호

- LLM/app framework: transformers, vllm, openai, sentence-transformers
- Graph/KG store: networkx, neo4j
- Eval/observability: wandb
- Persistence/database: sqlitedict

## 주요 파일 후보

### Ingestion/source intake

- `atlas_rag/kg_construction/triple_extraction.py`
- `EvaluateGeneralTask/lm-evaluation-harness/scripts/zeno_visualize.py`
- `EvaluateGeneralTask/lm-evaluation-harness/lm_eval/models/api_models.py`
- `neo4j_scripts/neo4j.conf`
- `EvaluateGeneralTask/lm-evaluation-harness/.github/workflows/publish.yml`
- `EvaluateGeneralTask/lm-evaluation-harness/.github/workflows/unit_tests.yml`
- `example/example_data/pdf_data/Apple_Environmental_Progress_Report_2024.json`
- `EvaluateGeneralTask/lm-evaluation-harness/README.md`
- `EvaluateKGC/SchemaQuality/data/wikihow/node_type_test.txt`
- `example/example_data/md_data/Apple_Environmental_Progress_Report_2024.md`

### Parsing/OCR/document extraction

- `EvaluateGeneralTask/lm-evaluation-harness/lm_eval/api/metrics.py`
- `EvaluateGeneralTask/lm-evaluation-harness/lm_eval/filters/extraction.py`
- `example/example_data/pdf_data/Apple_Environmental_Progress_Report_2024.json`
- `README.md`
- `docs/source/index.rst`
- `docs/build/html/searchindex.js`
- `docs/source/guide/file_formats.md`
- `docs/build/html/_sources/index.rst.txt`
- `EvaluateGeneralTask/lm-evaluation-harness/templates/new_yaml_task/README.md`
- `EvaluateKGC/SchemaQuality/data/wikihow/node_type_test.txt`
- `docs/build/html/_sources/guide/file_formats.md.txt`
- `docs/build/html/_static/js/versions.js`
- ... 3 more

### Chunking/splitting

- `EvaluateFactuality/eval.py`
- `atlas_rag/kg_construction/triple_config.py`
- `atlas_rag/kg_construction/triple_extraction.py`
- `atlas_rag/kg_construction/neo4j/neo4j_api.py`
- `atlas_rag/retriever/lkg_retriever/tog.py`
- `EvaluateGeneralTask/lm-evaluation-harness/lm_eval/utils.py`
- `atlas_rag/kg_construction/utils/csv_processing/csv_to_npy.py`
- `EvaluateGeneralTask/lm-evaluation-harness/lm_eval/api/task.py`
- `EvaluateGeneralTask/lm-evaluation-harness/lm_eval/decontamination/decontaminate.py`
- `EvaluateGeneralTask/lm-evaluation-harness/lm_eval/models/api_models.py`
- `EvaluateGeneralTask/lm-evaluation-harness/lm_eval/models/hf_vlms.py`
- `EvaluateGeneralTask/lm-evaluation-harness/lm_eval/models/huggingface.py`
- ... 6 more

### Embedding/vector index

- `atlas_rag/vectorstore/embedding_model.py`
- `atlas_mutihopqa.py`
- `atlas_rag/evaluation/benchmark.py`
- `atlas_rag/kg_construction/triple_extraction.py`
- `atlas_rag/retriever/hipporag.py`
- `atlas_rag/retriever/hipporag2.py`
- `atlas_rag/retriever/simple_retriever.py`
- `atlas_rag/retriever/tog_v2.py`
- `atlas_rag/retriever/tog_v3.py`
- `atlas_rag/vectorstore/create_graph_index.py`
- `atlas_rag/vectorstore/create_neo4j_index.py`
- `atlas_rag/kg_construction/neo4j/utils.py`
- ... 6 more

### Retrieval/search/rerank

- `atlas_mutihopqa.py`
- `EvaluateFactuality/eval.py`
- `atlas_rag/evaluation/benchmark.py`
- `atlas_rag/evaluation/evaluation.py`
- `atlas_rag/llm_generator/generation_config.py`
- `atlas_rag/llm_generator/llm_generator.py`
- `atlas_rag/retriever/base.py`
- `atlas_rag/retriever/hipporag.py`
- `atlas_rag/retriever/hipporag2.py`
- `atlas_rag/retriever/inference_config.py`
- `atlas_rag/retriever/simple_retriever.py`
- `atlas_rag/retriever/tog_v2.py`
- ... 6 more

### Wiki/graph/entity model

- `neo4j_scripts/get_neo4j_cc.sh`
- `neo4j_scripts/get_neo4j_pes2o.sh`
- `neo4j_scripts/get_neo4j_wiki.sh`
- `atlas_rag/evaluation/graph_evaluation.py`
- `atlas_rag/kg_construction/concept_generation.py`
- `atlas_rag/kg_construction/concept_to_csv.py`
- `atlas_rag/kg_construction/triple_extraction.py`
- `atlas_rag/llm_generator/llm_generator.py`
- `atlas_rag/retriever/hipporag.py`
- `atlas_rag/retriever/hipporag2.py`
- `atlas_rag/retriever/simple_retriever.py`
- `atlas_rag/retriever/tog_v2.py`
- ... 6 more

### Memory/update lifecycle

- `atlas_rag/kg_construction/concept_to_csv.py`
- `atlas_rag/vectorstore/create_neo4j_index.py`
- `EvaluateGeneralTask/lm-evaluation-harness/lm_eval/__main__.py`
- `EvaluateGeneralTask/lm-evaluation-harness/lm_eval/evaluator.py`
- `EvaluateGeneralTask/lm-evaluation-harness/scripts/model_comparator.py`
- `EvaluateGeneralTask/lm-evaluation-harness/scripts/requests_caching.py`
- `atlas_rag/kg_construction/utils/csv_processing/csv_to_npy.py`
- `atlas_rag/kg_construction/utils/csv_processing/merge_csv.py`
- `EvaluateGeneralTask/lm-evaluation-harness/lm_eval/api/model.py`
- `EvaluateGeneralTask/lm-evaluation-harness/lm_eval/api/task.py`
- `EvaluateGeneralTask/lm-evaluation-harness/lm_eval/caching/cache.py`
- `EvaluateGeneralTask/lm-evaluation-harness/lm_eval/decontamination/decontaminate.py`
- ... 6 more

### Provenance/citation/evidence

- `example/example_data/Dulce.json`
- `example/example_data/pdf_data/Apple_Environmental_Progress_Report_2024.json`
- `example/generated/Dulce/kg_extraction/meta-llama_Meta-Llama-3.1-8B-Instruct_Dulce_output_20250705173900_1_in_1.json`
- `README.md`
- `docs/build/html/searchindex.js`
- `EvaluateGeneralTask/lm-evaluation-harness/templates/new_yaml_task/README.md`
- `EvaluateKGC/SchemaQuality/data/wikihow/node_type_test.txt`
- `docs/build/html/_static/js/theme.js`
- `EvaluateGeneralTask/lm-evaluation-harness/lm_eval/tasks/mmlu/README.md`
- `example/example_data/md_data/Apple_Environmental_Progress_Report_2024.md`

### Evaluation/observability

- `atlas_mutihopqa.py`
- `atlas_rag/logging.py`
- `atlas_rag/evaluation/__init__.py`
- `atlas_rag/evaluation/benchmark.py`
- `atlas_rag/evaluation/evaluation.py`
- `atlas_rag/kg_construction/triple_config.py`
- `atlas_rag/kg_construction/triple_extraction.py`
- `EvaluateKGC/SchemaQuality/eval.py`
- `EvaluateKGC/SchemaQuality/utils.py`
- `EvaluateKGC/TripleAccuracy/triple_acc.py`
- `atlas_rag/llm_generator/prompt/lkg_prompt.py`
- `EvaluateGeneralTask/lm-evaluation-harness/lm_eval/__main__.py`
- ... 6 more

### Agent/MCP/tool surface

- `atlas_mutihopqa.py`
- `EvaluateFactuality/eval.py`
- `atlas_rag/kg_construction/concept_generation.py`
- `atlas_rag/llm_generator/generation_config.py`
- `atlas_rag/llm_generator/llm_generator.py`
- `atlas_rag/vectorstore/embedding_model.py`
- `EvaluateKGC/InfoPreservation/answer_generation.py`
- `EvaluateKGC/InfoPreservation/question_generation.py`
- `EvaluateKGC/SchemaQuality/conceptualization_contextulized_api.py`
- `EvaluateKGC/TripleAccuracy/triple_acc.py`
- `atlas_rag/kg_construction/neo4j/neo4j_api.py`
- `atlas_rag/retriever/lkg_retriever/lkgr.py`
- ... 6 more

## Evidence lines

### Ingestion/source intake

| file | line | text |
| --- | --- | --- |
| atlas_rag/kg_construction/triple_extraction.py | 391 | data_loader = CustomDataLoader(dataset["train"], processor, self.prompt_instructions, self.result_schema) |
| atlas_rag/kg_construction/triple_extraction.py | 401 | for batch in data_loader: |
| EvaluateGeneralTask/lm-evaluation-harness/scripts/zeno_visualize.py | 20 | description="Upload your data to the Zeno AI evaluation platform to visualize results. This requires a ZENO_API_KEY in your environment variables. The eleuther harness must be run with log_samples=True and an output_path |
| EvaluateGeneralTask/lm-evaluation-harness/scripts/zeno_visualize.py | 36 | """Upload the results of your benchmark tasks to the Zeno AI evaluation platform. |
| EvaluateGeneralTask/lm-evaluation-harness/scripts/zeno_visualize.py | 74 | # Upload data for all models |
| EvaluateGeneralTask/lm-evaluation-harness/lm_eval/models/api_models.py | 480 | connector=conn, timeout=ClientTimeout(total=self.timeout) |
| neo4j_scripts/neo4j.conf | 64 | # Network connector configuration |
| neo4j_scripts/neo4j.conf | 72 | # port for each connector, by setting their individual listen_address. |

### Parsing/OCR/document extraction

| file | line | text |
| --- | --- | --- |
| EvaluateGeneralTask/lm-evaluation-harness/lm_eval/api/metrics.py | 96 | Paper: https://www.aclweb.org/anthology/W15-3049.pdf |
| EvaluateGeneralTask/lm-evaluation-harness/lm_eval/api/metrics.py | 112 | Paper: http://mt-archive.info/AMTA-2006-Snover.pdf |
| EvaluateGeneralTask/lm-evaluation-harness/lm_eval/filters/extraction.py | 15 | (like numbers) from unstructured model outputs. |
| EvaluateGeneralTask/lm-evaluation-harness/lm_eval/filters/extraction.py | 66 | (like numbers) from unstructured model outputs. |
| example/example_data/pdf_data/Apple_Environmental_Progress_Report_2024.json | 4 | "text": "# **Environmental Progress Report**\n\n# Introduction\n\n# <span id=\"page-1-0\"></span>**Contents**\n\n# **Introduction**\n\n- [Reflections from Lisa Jackson](#page-2-0)\n- [Report highlights](#page-3-0)\n- [Go |
| README.md | 3 | This repository contains the implementation of AutoSchemaKG, a novel framework for automatic knowledge graph construction that combines schema generation via conceptualization. The framework is designed to address the ch |
| README.md | 15 | - (05/07) Update with batch generation and refactor the codebase. Add comprehensive documentation for examples including PDF/Markdown conversion, multi-language processing, parallel generation, and custom extraction. |
| README.md | 54 | │ ├── example_data/ # Sample datasets (JSON, Markdown, PDF) |

### Chunking/splitting

| file | line | text |
| --- | --- | --- |
| EvaluateFactuality/eval.py | 107 | eval_prompt=open("./prompt/segment/math/raw.txt").read() + "\n" |
| EvaluateFactuality/eval.py | 109 | eval_prompt=open("./prompt/segment/math/cot.txt").read() + "\n" |
| EvaluateFactuality/eval.py | 111 | eval_prompt=open("./prompt/segment/math/raw.txt").read() + "\n" |
| EvaluateFactuality/eval.py | 113 | eval_prompt=open("./prompt/segment/math/raw.txt").read() + "\n" |
| EvaluateFactuality/eval.py | 117 | eval_prompt=open("./prompt/segment/reasoning/raw.txt").read() + "\n" |
| EvaluateFactuality/eval.py | 119 | eval_prompt=open("./prompt/segment/reasoning/cot.txt").read() + "\n" |
| EvaluateFactuality/eval.py | 121 | eval_prompt=open("./prompt/segment/reasoning/raw.txt").read() + "\n" |
| EvaluateFactuality/eval.py | 123 | eval_prompt=open("./prompt/segment/reasoning/raw.txt").read() + "\n" |

### Embedding/vector index

| file | line | text |
| --- | --- | --- |
| atlas_rag/vectorstore/embedding_model.py | 25 | writer_node.writerow(["name:ID", "type", "file_id", "concepts", "synsets", "embedding:STRING", ":LABEL"]) |
| atlas_rag/vectorstore/embedding_model.py | 65 | writer_edge.writerow([":START_ID", ":END_ID", "relation", "file_id", "concepts", "synsets", "embedding:STRING", ":TYPE"]) |
| atlas_rag/vectorstore/embedding_model.py | 102 | writer_text_node.writerow(["text_id:ID", "original_text", ":LABEL", "embedding:STRING"]) |
| atlas_rag/vectorstore/embedding_model.py | 118 | embedding = text_node_embedding_dict[row[1]].tolist() |
| atlas_rag/vectorstore/embedding_model.py | 119 | new_row = [row[0], row[1], row[2], embedding] |
| atlas_rag/vectorstore/embedding_model.py | 129 | embedding = text_node_embedding_dict[row[1]].tolist() |
| atlas_rag/vectorstore/embedding_model.py | 130 | new_row = [row[0], row[1], row[2], embedding] |
| atlas_rag/vectorstore/embedding_model.py | 138 | def __init__(self, emb_client: OpenAI, model_name="text-embedding-3-small"): |

### Retrieval/search/rerank

| file | line | text |
| --- | --- | --- |
| atlas_mutihopqa.py | 3 | from atlas_rag.retriever import HippoRAG2Retriever, TogRetriever, HippoRAGRetriever |
| atlas_mutihopqa.py | 17 | argparser.add_argument('--graph_type', type=str, default='oie', choices=['atlas', 'oie', 'stanford_oie'], help='Type of graph to use for the retriever') |
| EvaluateFactuality/eval.py | 46 | match = re.search('[a-zA-Z]', string) |
| atlas_rag/evaluation/benchmark.py | 5 | from atlas_rag.retriever.base import BaseRetriever, BaseEdgeRetriever, BasePassageRetriever |
| atlas_rag/evaluation/benchmark.py | 50 | topN (int): Number of top passages to retrieve. Default is 5. |
| atlas_rag/evaluation/benchmark.py | 62 | topN: int = 5 # Number of top passages to retrieve |
| atlas_rag/evaluation/benchmark.py | 164 | for retriever in retrievers: |
| atlas_rag/evaluation/benchmark.py | 169 | retriever=retriever, |

### Wiki/graph/entity model

| file | line | text |
| --- | --- | --- |
| neo4j_scripts/get_neo4j_cc.sh | 11 | wget https://neo4j.com/artifact.php?name=neo4j-community-${NEO4J_VERSION}-unix.tar.gz -O neo4j.tar.gz |
| neo4j_scripts/get_neo4j_cc.sh | 13 | mv neo4j-community-${NEO4J_VERSION} ../neo4j-server-cc |
| neo4j_scripts/get_neo4j_pes2o.sh | 11 | wget https://neo4j.com/artifact.php?name=neo4j-community-${NEO4J_VERSION}-unix.tar.gz -O neo4j.tar.gz |
| neo4j_scripts/get_neo4j_pes2o.sh | 13 | mv neo4j-community-${NEO4J_VERSION} ../neo4j-server-pes2o |
| neo4j_scripts/get_neo4j_wiki.sh | 11 | wget https://neo4j.com/artifact.php?name=neo4j-community-${NEO4J_VERSION}-unix.tar.gz -O neo4j.tar.gz |
| neo4j_scripts/get_neo4j_wiki.sh | 13 | mv neo4j-community-${NEO4J_VERSION} ../neo4j-server-wiki |
| atlas_rag/evaluation/graph_evaluation.py | 22 | # Entity coverage (approx: distinct nodes / total nodes in docs → assume all nodes = entity mentions) |
| atlas_rag/evaluation/graph_evaluation.py | 25 | # Relation diversity per node |

### Memory/update lifecycle

| file | line | text |
| --- | --- | --- |
| atlas_rag/kg_construction/concept_to_csv.py | 32 | # we need to read the concepts maps to the memory, as it is usually not too large. |
| atlas_rag/vectorstore/create_neo4j_index.py | 52 | # cannot avoid loading into memory when training |
| EvaluateGeneralTask/lm-evaluation-harness/lm_eval/__main__.py | 143 | choices=["true", "refresh", "delete"], |
| EvaluateGeneralTask/lm-evaluation-harness/lm_eval/evaluator.py | 16 | from lm_eval.caching.cache import delete_cache |
| EvaluateGeneralTask/lm-evaluation-harness/lm_eval/evaluator.py | 101 | Rewrites all of the request cache if set to `True`. `None` if not desired. |
| EvaluateGeneralTask/lm-evaluation-harness/lm_eval/evaluator.py | 103 | Deletes all of the request cache if set to `True`. `None` if not desired. |
| EvaluateGeneralTask/lm-evaluation-harness/lm_eval/evaluator.py | 144 | eval_logger.info("Deleting requests cache...") |
| EvaluateGeneralTask/lm-evaluation-harness/lm_eval/evaluator.py | 222 | eval_logger.info(f"Using cache at {use_cache + '_rank' + str(lm.rank) + '.db'}") |

### Provenance/citation/evidence

| file | line | text |
| --- | --- | --- |
| example/example_data/Dulce.json | 11 | "text": "## Chapter 2\n\nSam Rivera sat alone in a cramped office, the hum of a dozen servers murmuring a digital lullaby in the background. Surrounded by the glow of multiple screens, their eyes danced across lines of c |
| example/example_data/pdf_data/Apple_Environmental_Progress_Report_2024.json | 4 | "text": "# **Environmental Progress Report**\n\n# Introduction\n\n# <span id=\"page-1-0\"></span>**Contents**\n\n# **Introduction**\n\n- [Reflections from Lisa Jackson](#page-2-0)\n- [Report highlights](#page-3-0)\n- [Go |
| example/generated/Dulce/kg_extraction/meta-llama_Meta-Llama-3.1-8B-Instruct_Dulce_output_20250705173900_1_in_1.json | 4 | {"id": "2", "metadata": {"lang": "en"}, "original_text": "rehension. 'This feels like more than a rescue or reconnaissance mission, doesn't it?'\n\nAlex turned, his features a mask of uneasy resolve.'It's like we're bein |
| README.md | 200 | ## Citation |
| docs/build/html/searchindex.js | 1 | Search.setIndex({"alltitles":{"1. Creating a Custom Prompt":[[1,"creating-a-custom-prompt"]],"1. GraphML":[[5,"graphml"]],"1. Install PyTorch":[[10,"install-pytorch"]],"1. Knowledge Graph Construction":[[11,"knowledge-gr |
| EvaluateGeneralTask/lm-evaluation-harness/templates/new_yaml_task/README.md | 14 | ### Citation |
| EvaluateGeneralTask/lm-evaluation-harness/templates/new_yaml_task/README.md | 17 | BibTeX-formatted citation goes here |
| EvaluateKGC/SchemaQuality/data/wikihow/node_type_test.txt | 1643 | gather evidence of your marriage apply |

### Evaluation/observability

| file | line | text |
| --- | --- | --- |
| atlas_mutihopqa.py | 8 | from atlas_rag.evaluation import BenchMarkConfig, RAGBenchmark |
| atlas_mutihopqa.py | 14 | argparser = argparse.ArgumentParser(description="Run Atlas Multi-hop QA Benchmark") |
| atlas_mutihopqa.py | 93 | benchmark = RAGBenchmark(config=benchmark_config, logger=logger) |
| atlas_mutihopqa.py | 94 | benchmark.run([hipporag2_retriever, hipporag_retriever], llm_generator=llm_generator) |
| atlas_rag/logging.py | 6 | from atlas_rag.evaluation.benchmark import BenchMarkConfig |
| atlas_rag/evaluation/__init__.py | 1 | from .benchmark import BenchMarkConfig, RAGBenchmark |
| atlas_rag/evaluation/benchmark.py | 15 | from atlas_rag.evaluation.evaluation import QAJudger |
| atlas_rag/evaluation/benchmark.py | 222 | # Calculate recall |

### Agent/MCP/tool surface

| file | line | text |
| --- | --- | --- |
| atlas_mutihopqa.py | 2 | from openai import OpenAI |
| atlas_mutihopqa.py | 40 | client = OpenAI( |
| atlas_mutihopqa.py | 41 | base_url="https://api.deepinfra.com/v1/openai", |
| EvaluateFactuality/eval.py | 11 | from openai import OpenAI |
| EvaluateFactuality/eval.py | 18 | client = OpenAI(base_url=url, api_key=os.environ['OPENAI_API_KEY']) |
| EvaluateFactuality/eval.py | 60 | parse.add_argument('--key',type=str,help='openai key') |
| EvaluateFactuality/eval.py | 63 | parse.add_argument('--url',type=str,help='openai url') |
| atlas_rag/kg_construction/concept_generation.py | 15 | logging.getLogger("openai").setLevel(logging.WARNING) |

## Gap

- Provenance/citation/evidence
- ci
