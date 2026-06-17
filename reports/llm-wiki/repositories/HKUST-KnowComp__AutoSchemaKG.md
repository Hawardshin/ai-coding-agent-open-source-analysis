# HKUST-KnowComp/AutoSchemaKG 구조 분석

생성일: 2026-06-17T22:56:52.162Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/HKUST-KnowComp__AutoSchemaKG |
| remote | https://github.com/HKUST-KnowComp/AutoSchemaKG |
| HEAD | d0a1666 (2026-01-14) Merge pull request #41 from HKUST-KnowComp/bugfix/0.0.5.post1 |
| branch | main |
| groups | llm-wiki-100 |
| files | 1099 |
| dirs | 88 |
| stack | Python |

## 구조 해석

- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- 스펙/템플릿/명령/스킬 아티팩트가 있어 에이전트나 SDD 워크플로우가 저장소 구조의 일부다.
- 테스트 파일이 충분히 노출되어 기능 검증과 회귀 검증 흐름을 추적할 수 있다.

## README 신호

- 파일: `README.md`
- 주요 heading: `AutoSchemaKG: A Knowledge Graph Construction Framework with Schema Generation and Knowledge Graph Completion`, `Update`, `AutoSchemaKG Overview`, `ATLAS Knowledge Graphs`, `Key Features of ATLAS Knowledge Graphs`, `Project Structure`, `Install atlas-rag through pip`, `KG Construction with ATLAS`, `client = OpenAI(api_key='<your_api_key>',base_url="<your_api_base_url>")`, `model_name = "meta-llama/llama-3.1-8b-instruct"`, `Construct entity&event graph`, `Convert Triples Json to CSV`, `Concept Generation`, `Create Concept CSV`, `Convert csv to graphml for networkx`, `Large Knowledge Graph Hosting and Retrieval Augmented Generation`, `Building New Knowledge Graphs and Implementing RAG`, `Examples and Documentation`

> AutoSchemaKG A Knowledge Graph Construction Framework with Schema Generation and Knowledge Graph Completion This repository contains the implementation of AutoSchemaKG, a novel framework for automatic knowledge graph construction that combines schema generation via conceptualization. The framework is designed to address the challenges of constructing high quality knowledge graphs from unstructured text. Homepage and Documentation https //hkust knowcomp.github.io/AutoSchemaKG/ This project uses the following paper and data Paper Read the paper Full Data Download the dataset (huggingface dataset) Neo4j CSV Dumps Download the dataset (huggingface dataset) Update (05/12) Add Documentation for atlas rag package and example directory. Include quick start examples for knowledge graph construction, hosting, and multi hop QA evaluation. (05/07) Update with batch generation and refactor the codeba

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .gitignore | file |
| atlas_mutihopqa.py | file |
| atlas_rag | dir |
| check_toml.py | file |
| dist | dir |
| docs | dir |
| EvaluateFactuality | dir |
| EvaluateGeneralTask | dir |
| EvaluateKGC | dir |
| example | dir |
| LICENSE | file |
| neo4j_scripts | dir |
| pyproject.toml | file |
| README.md | file |
| tests | dir |
| UPDATE.md | file |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| EvaluateGeneralTask/ | 877 |
| example/ | 67 |
| atlas_rag/ | 56 |
| EvaluateKGC/ | 48 |
| docs/ | 19 |
| neo4j_scripts/ | 14 |
| tests/ | 9 |
| (root) | 7 |
| EvaluateFactuality/ | 2 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| docs/ | 19 | preferred |
| tests/ | 9 | preferred |
| EvaluateGeneralTask/ | 877 | large |
| EvaluateGeneralTask/lm-evaluation-harness/ | 876 | large |
| EvaluateGeneralTask/lm-evaluation-harness/tests/ | 707 | large |
| EvaluateGeneralTask/lm-evaluation-harness/lm_eval/ | 115 | large |
| example/ | 67 | large |
| atlas_rag/ | 56 | large |
| EvaluateKGC/ | 48 | large |
| EvaluateKGC/SchemaQuality/ | 44 | large |
| EvaluateKGC/SchemaQuality/data/ | 41 | large |
| example/generated/ | 27 | large |
| example/example_scripts/ | 24 | large |
| EvaluateGeneralTask/lm-evaluation-harness/scripts/ | 20 | large |
| atlas_rag/kg_construction/ | 19 | large |
| docs/source/ | 17 | large |
| example/generated/Dulce/ | 15 | large |
| atlas_rag/retriever/ | 14 | large |
| neo4j_scripts/ | 14 | large |
| atlas_rag/llm_generator/ | 13 | large |
| example/generated/CICGPC_Glazing_ver1.0a/ | 12 | large |
| atlas_rag/kg_construction/utils/ | 11 | large |
| EvaluateGeneralTask/lm-evaluation-harness/docs/ | 10 | large |
| example/example_data/ | 10 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `EvaluateGeneralTask/lm-evaluation-harness/pyproject.toml`
- `EvaluateGeneralTask/lm-evaluation-harness/requirements.txt`
- `pyproject.toml`

### pyproject.toml

| 경로 | 이름 | poetry | uv | ruff | pytest |
| --- | --- | --- | --- | --- | --- |
| EvaluateGeneralTask/lm-evaluation-harness/pyproject.toml | lm_eval | false | false | true | false |
| pyproject.toml | atlas_rag | false | false | false | false |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `EvaluateFactuality/README.md`
- `EvaluateGeneralTask/README.md`
- `EvaluateGeneralTask/lm-evaluation-harness/README.md`
- `EvaluateGeneralTask/lm-evaluation-harness/docs/API_guide.md`
- `EvaluateGeneralTask/lm-evaluation-harness/docs/CONTRIBUTING.md`
- `EvaluateGeneralTask/lm-evaluation-harness/docs/README.md`
- `EvaluateGeneralTask/lm-evaluation-harness/docs/chat-template-readme.md`
- `EvaluateGeneralTask/lm-evaluation-harness/docs/decontamination.md`
- `EvaluateGeneralTask/lm-evaluation-harness/docs/img/fewshot_example_gpt3.png`
- `EvaluateGeneralTask/lm-evaluation-harness/docs/interface.md`
- `EvaluateGeneralTask/lm-evaluation-harness/docs/model_guide.md`
- `EvaluateGeneralTask/lm-evaluation-harness/docs/new_task_guide.md`
- `EvaluateGeneralTask/lm-evaluation-harness/docs/task_guide.md`
- `EvaluateGeneralTask/lm-evaluation-harness/lm_eval/tasks/README.md`
- `EvaluateGeneralTask/lm-evaluation-harness/lm_eval/tasks/mmlu/README.md`
- `EvaluateGeneralTask/lm-evaluation-harness/scripts/clean_training_data/README.md`
- `EvaluateGeneralTask/lm-evaluation-harness/templates/new_yaml_task/README.md`
- `EvaluateKGC/README.md`
- `README.md`
- `docs/Makefile`
- `docs/make.bat`
- `docs/source/_static/atlas-rag-icon-wo-background.ico`
- `docs/source/_static/atlas-rag-icon-wo-background.png`
- `docs/source/_static/atlas-rag-icon.ico`
- `docs/source/_static/atlas-rag-icon.png`
- `docs/source/billion_kg/existing_billion_kg.md`
- `docs/source/conf.py`
- `docs/source/example/advance_features.md`
- `docs/source/example/multilingual_support.md`
- `docs/source/example/parralel_generation.md`
- `docs/source/guide/configurations.md`
- `docs/source/guide/file_formats.md`
- `docs/source/guide/llm_providers.md`
- `docs/source/guide/retrieval_augmentation.md`
- `docs/source/guide/vectorstores.md`
- `docs/source/index.rst`
- `docs/source/intro/installation.md`
- `docs/source/intro/quickstart.md`
- `example/example_scripts/benchmark_extraction_example/readme.md`
- `example/example_scripts/custom_extraction/readme.md`
- `example/example_scripts/neo4j_kg/readme.md`
- `example/example_scripts/parallel_generation/readme.md`
- `example/pdf_md_conversion/readme.md`
- `example/readme.md`

### 에이전트 지침 후보

_없음_

### 스펙/템플릿/명령/스킬 후보

- `EvaluateGeneralTask/lm-evaluation-harness/templates/new_yaml_task/README.md`
- `EvaluateGeneralTask/lm-evaluation-harness/templates/new_yaml_task/blank_yaml.yaml`

## 테스트 / CI / 배포 표면

### 테스트 후보

- `EvaluateGeneralTask/lm-evaluation-harness/tests/__init__.py`
- `EvaluateGeneralTask/lm-evaluation-harness/tests/models/test_api.py`
- `EvaluateGeneralTask/lm-evaluation-harness/tests/models/test_gguf.py`
- `EvaluateGeneralTask/lm-evaluation-harness/tests/models/test_gptqmodel.py`
- `EvaluateGeneralTask/lm-evaluation-harness/tests/models/test_huggingface.py`
- `EvaluateGeneralTask/lm-evaluation-harness/tests/models/test_neuralmagic.py`
- `EvaluateGeneralTask/lm-evaluation-harness/tests/models/test_openvino.py`
- `EvaluateGeneralTask/lm-evaluation-harness/tests/models/test_vllm.py`
- `EvaluateGeneralTask/lm-evaluation-harness/tests/test_cli.py`
- `EvaluateGeneralTask/lm-evaluation-harness/tests/test_evaluator.py`
- `EvaluateGeneralTask/lm-evaluation-harness/tests/test_include_path.py`
- `EvaluateGeneralTask/lm-evaluation-harness/tests/test_janitor.py`
- `EvaluateGeneralTask/lm-evaluation-harness/tests/test_misc.py`
- `EvaluateGeneralTask/lm-evaluation-harness/tests/test_prompt.py`
- `EvaluateGeneralTask/lm-evaluation-harness/tests/test_requests_caching.py`
- `EvaluateGeneralTask/lm-evaluation-harness/tests/test_task_manager.py`
- `EvaluateGeneralTask/lm-evaluation-harness/tests/test_tasks.py`
- `EvaluateGeneralTask/lm-evaluation-harness/tests/test_utils.py`
- `EvaluateGeneralTask/lm-evaluation-harness/tests/testconfigs/arc_test.yaml`
- `EvaluateGeneralTask/lm-evaluation-harness/tests/testdata/ai2_arc_10_hf_pretrained-EleutherAI-pythia-14m-dtype-float32-device-cpu.txt`
- `EvaluateGeneralTask/lm-evaluation-harness/tests/testdata/anagrams1-v0-greedy_until`
- `EvaluateGeneralTask/lm-evaluation-harness/tests/testdata/anagrams1-v0-res.json`
- `EvaluateGeneralTask/lm-evaluation-harness/tests/testdata/anagrams2-v0-greedy_until`
- `EvaluateGeneralTask/lm-evaluation-harness/tests/testdata/anagrams2-v0-res.json`
- `EvaluateGeneralTask/lm-evaluation-harness/tests/testdata/anli_r1-v0-loglikelihood`
- `EvaluateGeneralTask/lm-evaluation-harness/tests/testdata/anli_r1-v0-res.json`
- `EvaluateGeneralTask/lm-evaluation-harness/tests/testdata/anli_r2-v0-loglikelihood`
- `EvaluateGeneralTask/lm-evaluation-harness/tests/testdata/anli_r2-v0-res.json`
- `EvaluateGeneralTask/lm-evaluation-harness/tests/testdata/anli_r3-v0-loglikelihood`
- `EvaluateGeneralTask/lm-evaluation-harness/tests/testdata/anli_r3-v0-res.json`
- `EvaluateGeneralTask/lm-evaluation-harness/tests/testdata/arc_challenge-v0-loglikelihood`
- `EvaluateGeneralTask/lm-evaluation-harness/tests/testdata/arc_challenge-v0-res.json`
- `EvaluateGeneralTask/lm-evaluation-harness/tests/testdata/arc_challenge-v2.0-loglikelihood`
- `EvaluateGeneralTask/lm-evaluation-harness/tests/testdata/arc_challenge-v2.0-res.json`
- `EvaluateGeneralTask/lm-evaluation-harness/tests/testdata/arc_easy-v0-loglikelihood`
- `EvaluateGeneralTask/lm-evaluation-harness/tests/testdata/arc_easy-v0-res.json`
- `EvaluateGeneralTask/lm-evaluation-harness/tests/testdata/arithmetic_1dc-v0-loglikelihood`
- `EvaluateGeneralTask/lm-evaluation-harness/tests/testdata/arithmetic_1dc-v0-res.json`
- `EvaluateGeneralTask/lm-evaluation-harness/tests/testdata/arithmetic_2da-v0-loglikelihood`
- `EvaluateGeneralTask/lm-evaluation-harness/tests/testdata/arithmetic_2da-v0-res.json`
- `EvaluateGeneralTask/lm-evaluation-harness/tests/testdata/arithmetic_2dm-v0-loglikelihood`
- `EvaluateGeneralTask/lm-evaluation-harness/tests/testdata/arithmetic_2dm-v0-res.json`
- `EvaluateGeneralTask/lm-evaluation-harness/tests/testdata/arithmetic_2ds-v0-loglikelihood`
- `EvaluateGeneralTask/lm-evaluation-harness/tests/testdata/arithmetic_2ds-v0-res.json`
- `EvaluateGeneralTask/lm-evaluation-harness/tests/testdata/arithmetic_3da-v0-loglikelihood`
- `EvaluateGeneralTask/lm-evaluation-harness/tests/testdata/arithmetic_3da-v0-res.json`
- `EvaluateGeneralTask/lm-evaluation-harness/tests/testdata/arithmetic_3ds-v0-loglikelihood`
- `EvaluateGeneralTask/lm-evaluation-harness/tests/testdata/arithmetic_3ds-v0-res.json`
- `EvaluateGeneralTask/lm-evaluation-harness/tests/testdata/arithmetic_4da-v0-loglikelihood`
- `EvaluateGeneralTask/lm-evaluation-harness/tests/testdata/arithmetic_4da-v0-res.json`
- `EvaluateGeneralTask/lm-evaluation-harness/tests/testdata/arithmetic_4ds-v0-loglikelihood`
- `EvaluateGeneralTask/lm-evaluation-harness/tests/testdata/arithmetic_4ds-v0-res.json`
- `EvaluateGeneralTask/lm-evaluation-harness/tests/testdata/arithmetic_5da-v0-loglikelihood`
- `EvaluateGeneralTask/lm-evaluation-harness/tests/testdata/arithmetic_5da-v0-res.json`
- `EvaluateGeneralTask/lm-evaluation-harness/tests/testdata/arithmetic_5ds-v0-loglikelihood`
- `EvaluateGeneralTask/lm-evaluation-harness/tests/testdata/arithmetic_5ds-v0-res.json`
- `EvaluateGeneralTask/lm-evaluation-harness/tests/testdata/blimp_adjunct_island-v0-loglikelihood`
- `EvaluateGeneralTask/lm-evaluation-harness/tests/testdata/blimp_adjunct_island-v0-res.json`
- `EvaluateGeneralTask/lm-evaluation-harness/tests/testdata/blimp_anaphor_gender_agreement-v0-loglikelihood`
- `EvaluateGeneralTask/lm-evaluation-harness/tests/testdata/blimp_anaphor_gender_agreement-v0-res.json`
- `EvaluateGeneralTask/lm-evaluation-harness/tests/testdata/blimp_anaphor_number_agreement-v0-loglikelihood`
- `EvaluateGeneralTask/lm-evaluation-harness/tests/testdata/blimp_anaphor_number_agreement-v0-res.json`
- `EvaluateGeneralTask/lm-evaluation-harness/tests/testdata/blimp_animate_subject_passive-v0-loglikelihood`
- `EvaluateGeneralTask/lm-evaluation-harness/tests/testdata/blimp_animate_subject_passive-v0-res.json`
- `EvaluateGeneralTask/lm-evaluation-harness/tests/testdata/blimp_animate_subject_trans-v0-loglikelihood`
- `EvaluateGeneralTask/lm-evaluation-harness/tests/testdata/blimp_animate_subject_trans-v0-res.json`
- `EvaluateGeneralTask/lm-evaluation-harness/tests/testdata/blimp_causative-v0-loglikelihood`
- `EvaluateGeneralTask/lm-evaluation-harness/tests/testdata/blimp_causative-v0-res.json`
- `EvaluateGeneralTask/lm-evaluation-harness/tests/testdata/blimp_complex_NP_island-v0-loglikelihood`
- `EvaluateGeneralTask/lm-evaluation-harness/tests/testdata/blimp_complex_NP_island-v0-res.json`
- `EvaluateGeneralTask/lm-evaluation-harness/tests/testdata/blimp_coordinate_structure_constraint_complex_left_branch-v0-loglikelihood`
- `EvaluateGeneralTask/lm-evaluation-harness/tests/testdata/blimp_coordinate_structure_constraint_complex_left_branch-v0-res.json`
- `EvaluateGeneralTask/lm-evaluation-harness/tests/testdata/blimp_coordinate_structure_constraint_object_extraction-v0-loglikelihood`
- `EvaluateGeneralTask/lm-evaluation-harness/tests/testdata/blimp_coordinate_structure_constraint_object_extraction-v0-res.json`
- `EvaluateGeneralTask/lm-evaluation-harness/tests/testdata/blimp_determiner_noun_agreement_1-v0-loglikelihood`
- `EvaluateGeneralTask/lm-evaluation-harness/tests/testdata/blimp_determiner_noun_agreement_1-v0-res.json`
- `EvaluateGeneralTask/lm-evaluation-harness/tests/testdata/blimp_determiner_noun_agreement_2-v0-loglikelihood`
- `EvaluateGeneralTask/lm-evaluation-harness/tests/testdata/blimp_determiner_noun_agreement_2-v0-res.json`
- `EvaluateGeneralTask/lm-evaluation-harness/tests/testdata/blimp_determiner_noun_agreement_irregular_1-v0-loglikelihood`
- `EvaluateGeneralTask/lm-evaluation-harness/tests/testdata/blimp_determiner_noun_agreement_irregular_1-v0-res.json`
- ... 40 more

### CI/Docker 후보

_없음_

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .json | 354 |
| .py | 183 |
| .yaml | 62 |
| .txt | 42 |
| .md | 40 |
| .csv | 23 |
| .sh | 16 |
| .ipynb | 6 |
| .tsv | 4 |
| .png | 3 |
| .yml | 3 |
| .0-loglikelihood | 2 |
| .ds_store | 2 |
| .gitignore | 2 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `docs/ 내부 책임 분리`
- `tests/ 내부 책임 분리`
- `EvaluateGeneralTask/ 내부 책임 분리`
- `EvaluateGeneralTask/lm-evaluation-harness/ 내부 책임 분리`
- `EvaluateGeneralTask/lm-evaluation-harness/tests/ 내부 책임 분리`
- `EvaluateGeneralTask/lm-evaluation-harness/templates/new_yaml_task/README.md 스펙/명령 의미`
- `EvaluateGeneralTask/lm-evaluation-harness/templates/new_yaml_task/blank_yaml.yaml 스펙/명령 의미`
- `EvaluateGeneralTask/lm-evaluation-harness/pyproject.toml 실행 스크립트와 패키지 경계`
- `EvaluateGeneralTask/lm-evaluation-harness/requirements.txt 실행 스크립트와 패키지 경계`
- `pyproject.toml 실행 스크립트와 패키지 경계`

