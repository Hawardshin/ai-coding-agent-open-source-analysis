# Marker-Inc-Korea/AutoRAG 구조 분석

생성일: 2026-06-17T22:56:52.162Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/Marker-Inc-Korea__AutoRAG |
| remote | https://github.com/Marker-Inc-Korea/AutoRAG |
| HEAD | e0a717b (2026-04-04) Bump onnx from 1.17.0 to 1.21.0 (#1216) |
| branch | main |
| groups | llm-wiki-100 |
| files | 696 |
| dirs | 174 |
| stack | Python |

## 구조 해석

- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- 테스트 파일이 충분히 노출되어 기능 검증과 회귀 검증 흐름을 추적할 수 있다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `AutoRAG`, `YouTube Tutorial`, `Use AutoRAG in HuggingFace Space 🚀`, `Colab Tutorial`, `Index`, `Quick Install`, `Data Creation`, `📌 Supporting Data Creation Modules`, `Quick Start`, `1. Parsing`, `2. Chunking`, `3. QA Creation`, `RAG Optimization`, `How AutoRAG optimizes RAG pipeline?`, `📌 Supporting RAG Optimization Nodes & modules`, `Metrics`, `Quick Start`, `1. Set YAML File`

> AutoRAG RAG AutoML tool for automatically finding an optimal RAG pipeline for your data. <a href="https //trendshift.io/repositories/7832" target=" blank" <img src="https //trendshift.io/api/badge/repositories/7832" alt="Marker Inc Korea%2FAutoRAG Trendshift" style="width 250px; height 55px;" width="250" height="55"/ </a There are many RAG pipelines and modules out there, but you don’t know what pipeline is great for “your own data” and "your own use case." Making and evaluating all RAG modules is very time consuming and hard to do. But without it, you will never know which RAG pipeline is the best for your own use case. AutoRAG is a tool for finding the optimal RAG pipeline for “your data.” You can evaluate various RAG modules automatically with your own evaluation data and find the best RAG pipeline for your own use case. AutoRAG supports a simple way to evaluate many RAG module combin

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .github | dir |
| .gitignore | file |
| .pre-commit-config.yaml | file |
| autorag | dir |
| CNAME | file |
| CODE_OF_CONDUCT.md | file |
| CONTRIBUTING.md | file |
| docs | dir |
| LICENSE | file |
| pyproject.toml | file |
| README.md | file |
| sample_config | dir |
| sample_dataset | dir |
| tests | dir |
| uv.lock | file |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| tests/ | 271 |
| docs/ | 186 |
| autorag/ | 180 |
| sample_config/ | 37 |
| (root) | 9 |
| .github/ | 8 |
| sample_dataset/ | 5 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| docs/ | 186 | preferred |
| tests/ | 271 | preferred |
| docs/source/ | 182 | large |
| autorag/ | 180 | large |
| tests/resources/ | 140 | large |
| tests/autorag/ | 127 | large |
| tests/resources/result_project/ | 85 | large |
| autorag/nodes/ | 83 | large |
| tests/autorag/nodes/ | 65 | large |
| docs/source/nodes/ | 51 | large |
| autorag/data/ | 46 | large |
| docs/source/_static/ | 46 | large |
| sample_config/ | 37 | large |
| docs/source/api_spec/ | 32 | large |
| tests/autorag/data/ | 31 | large |
| sample_config/rag/ | 27 | large |
| tests/resources/parse_data/ | 27 | large |
| autorag/nodes/passagereranker/ | 24 | large |
| autorag/data/qa/ | 21 | large |
| docs/source/data_creation/ | 20 | large |
| autorag/evaluation/ | 15 | large |
| sample_config/rag/english/ | 15 | large |
| docs/source/integration/ | 12 | large |
| autorag/data/legacy/ | 10 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `docs/requirements.txt`
- `pyproject.toml`
- `uv.lock`

### pyproject.toml

| 경로 | 이름 | poetry | uv | ruff | pytest |
| --- | --- | --- | --- | --- | --- |
| pyproject.toml | AutoRAG | true | false | true | true |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `CONTRIBUTING.md`
- `README.md`
- `docs/CNAME`
- `docs/Makefile`
- `docs/make.bat`
- `docs/requirements.txt`
- `docs/source/CNAME`
- `docs/source/_static/data_creation.png`
- `docs/source/_static/data_creation_pipeline.png`
- `docs/source/_static/data_folder.png`
- `docs/source/_static/dcg.png`
- `docs/source/_static/f1_score.png`
- `docs/source/_static/integration/couchbase_search_index.png`
- `docs/source/_static/integration/nvidia_api.png`
- `docs/source/_static/integration/nvidia_nim.png`
- `docs/source/_static/integration/ollama_autorag.png`
- `docs/source/_static/map.png`
- `docs/source/_static/mrr.png`
- `docs/source/_static/ndcg.png`
- `docs/source/_static/ndcg_formula.png`
- `docs/source/_static/node_folder.png`
- `docs/source/_static/node_line_folder.png`
- `docs/source/_static/node_line_summary.png`
- `docs/source/_static/node_lines.png`
- `docs/source/_static/node_summary.png`
- `docs/source/_static/normal_distribution.png`
- `docs/source/_static/project_folder_example.png`
- `docs/source/_static/project_folders.png`
- `docs/source/_static/qa/data_creation_schema.png`
- `docs/source/_static/resources_folder.png`
- `docs/source/_static/roadmap/RAG_paradigms.png`
- `docs/source/_static/roadmap/advanced_RAG.png`
- `docs/source/_static/roadmap/cycle.png`
- `docs/source/_static/roadmap/merger.png`
- `docs/source/_static/roadmap/node_line_modular.png`
- `docs/source/_static/roadmap/policy.png`
- `docs/source/_static/samsung_sundae.jpeg`
- `docs/source/_static/score_fusion.png`
- `docs/source/_static/trial_folder.png`
- `docs/source/_static/trial_json.png`
- `docs/source/_static/trial_summary.png`
- `docs/source/_static/web_interface.png`
- `docs/source/_static/web_interface_gradio.png`
- `docs/source/_static/yaml/compact_structured.png`
- `docs/source/_static/yaml/detail_folder.png`
- `docs/source/_static/yaml/full_modules.png`
- `docs/source/_static/yaml/full_structured.png`
- `docs/source/_static/yaml/full_yaml_structure.png`
- `docs/source/_static/yaml/gpu_modules.png`
- `docs/source/_static/yaml/half_structured.png`
- ... 30 more

### 에이전트 지침 후보

- `.github/copilot-instructions.md`

### 스펙/템플릿/명령/스킬 후보

_없음_

## 테스트 / CI / 배포 표면

### 테스트 후보

- `tests/__init__.py`
- `tests/autorag/data/chunk/test_chunk_base.py`
- `tests/autorag/data/chunk/test_chunk_run.py`
- `tests/autorag/data/chunk/test_langchain_chunk.py`
- `tests/autorag/data/chunk/test_llama_index_chunk.py`
- `tests/autorag/data/legacy/corpus/test_base_corpus_legacy.py`
- `tests/autorag/data/legacy/corpus/test_langchain.py`
- `tests/autorag/data/legacy/corpus/test_llama_index_corpus.py`
- `tests/autorag/data/legacy/qacreation/test_base_qacreation.py`
- `tests/autorag/data/legacy/qacreation/test_llama_index_qacreation.py`
- `tests/autorag/data/legacy/qacreation/test_ragas_qa_creation.py`
- `tests/autorag/data/legacy/qacreation/test_simple.py`
- `tests/autorag/data/parse/test_clova.py`
- `tests/autorag/data/parse/test_langchain_parse.py`
- `tests/autorag/data/parse/test_llamaparse.py`
- `tests/autorag/data/parse/test_parse_base.py`
- `tests/autorag/data/parse/test_parse_run.py`
- `tests/autorag/data/parse/test_table_hybrid_parse.py`
- `tests/autorag/data/qa/evolve/base_test_query_evolve.py`
- `tests/autorag/data/qa/evolve/test_llama_index_query_evolve.py`
- `tests/autorag/data/qa/evolve/test_openai_query_evolve.py`
- `tests/autorag/data/qa/filter/test_dontknow.py`
- `tests/autorag/data/qa/filter/test_passage_dependency.py`
- `tests/autorag/data/qa/generation_gt/base_test_generation_gt.py`
- `tests/autorag/data/qa/generation_gt/test_llama_index_gen_gt.py`
- `tests/autorag/data/qa/generation_gt/test_openai_gen_gt.py`
- `tests/autorag/data/qa/query/base_test_query_gen.py`
- `tests/autorag/data/qa/query/test_llama_gen_query.py`
- `tests/autorag/data/qa/query/test_openai_gen_query.py`
- `tests/autorag/data/qa/test_data_creation_piepline.py`
- `tests/autorag/data/qa/test_sample.py`
- `tests/autorag/data/qa/test_schema.py`
- `tests/autorag/embedding/test_base.py`
- `tests/autorag/evaluate/metric/test_generation_metric.py`
- `tests/autorag/evaluate/metric/test_retrieval_contents_metric.py`
- `tests/autorag/evaluate/metric/test_retrieval_metric.py`
- `tests/autorag/evaluate/test_evaluate_util.py`
- `tests/autorag/evaluate/test_generation_evaluate.py`
- `tests/autorag/evaluate/test_retrieval_contents_evaluate.py`
- `tests/autorag/evaluate/test_retrieval_evaluate.py`
- `tests/autorag/nodes/generator/test_generator_base.py`
- `tests/autorag/nodes/generator/test_llama_index_llm.py`
- `tests/autorag/nodes/generator/test_minimax.py`
- `tests/autorag/nodes/generator/test_openai.py`
- `tests/autorag/nodes/generator/test_run_generator_node.py`
- `tests/autorag/nodes/generator/test_vllm.py`
- `tests/autorag/nodes/hybridretrieval/test_hybrid_cc.py`
- `tests/autorag/nodes/hybridretrieval/test_hybrid_rrf.py`
- `tests/autorag/nodes/hybridretrieval/test_run_hybrid_retrieval.py`
- `tests/autorag/nodes/lexicalretrieval/test_bm25.py`
- `tests/autorag/nodes/lexicalretrieval/test_run_lexical_retrieval.py`
- `tests/autorag/nodes/passageaugmenter/test_base_passage_augmenter.py`
- `tests/autorag/nodes/passageaugmenter/test_pass_passage_augmenter.py`
- `tests/autorag/nodes/passageaugmenter/test_prev_next_augmenter.py`
- `tests/autorag/nodes/passageaugmenter/test_run_passage_augmenter.py`
- `tests/autorag/nodes/passagecompressor/test_base_passage_compressor.py`
- `tests/autorag/nodes/passagecompressor/test_longllmlingua.py`
- `tests/autorag/nodes/passagecompressor/test_pass_compressor.py`
- `tests/autorag/nodes/passagecompressor/test_refine.py`
- `tests/autorag/nodes/passagecompressor/test_run_passage_compressor_node.py`
- `tests/autorag/nodes/passagecompressor/test_tree_summarize.py`
- `tests/autorag/nodes/passagefilter/test_pass_passage_filter.py`
- `tests/autorag/nodes/passagefilter/test_passage_filter_base.py`
- `tests/autorag/nodes/passagefilter/test_passage_filter_run.py`
- `tests/autorag/nodes/passagefilter/test_percentile_cutoff.py`
- `tests/autorag/nodes/passagefilter/test_recency_filter.py`
- `tests/autorag/nodes/passagefilter/test_similarity_percentile_cutoff.py`
- `tests/autorag/nodes/passagefilter/test_similarity_threshold_cutoff.py`
- `tests/autorag/nodes/passagefilter/test_threshold_cutoff.py`
- `tests/autorag/nodes/passagereranker/test_cohere_reranker.py`
- `tests/autorag/nodes/passagereranker/test_colbert_reranker.py`
- `tests/autorag/nodes/passagereranker/test_flag_embedding.py`
- `tests/autorag/nodes/passagereranker/test_flag_embedding_llm.py`
- `tests/autorag/nodes/passagereranker/test_flashrank_reranker.py`
- `tests/autorag/nodes/passagereranker/test_jina_reranker.py`
- `tests/autorag/nodes/passagereranker/test_koreranker.py`
- `tests/autorag/nodes/passagereranker/test_mixedbreadai_reranker.py`
- `tests/autorag/nodes/passagereranker/test_monot5.py`
- `tests/autorag/nodes/passagereranker/test_nvidia_reranker.py`
- `tests/autorag/nodes/passagereranker/test_openvino_reranker.py`
- ... 40 more

### CI/Docker 후보

- `.github/workflows/publish.yml`
- `.github/workflows/sphinx.yml`
- `.github/workflows/test.yml`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .py | 310 |
| .md | 111 |
| .yaml | 58 |
| .parquet | 54 |
| .png | 45 |
| .rst | 33 |
| .csv | 30 |
| .txt | 14 |
| .pdf | 8 |
| .yml | 6 |
| .bin | 4 |
| .json | 4 |
| .pkl | 4 |
| cname | 3 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `docs/ 내부 책임 분리`
- `tests/ 내부 책임 분리`
- `docs/source/ 내부 책임 분리`
- `autorag/ 내부 책임 분리`
- `tests/resources/ 내부 책임 분리`
- `docs/requirements.txt 실행 스크립트와 패키지 경계`
- `pyproject.toml 실행 스크립트와 패키지 경계`
- `uv.lock 실행 스크립트와 패키지 경계`

