# HKUST-KnowComp/AutoSchemaKG Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

This repository contains the implementation of AutoSchemaKG, a novel framework for automatic knowledge graph construction that combines schema generation via conceptualization.

## 요약

- 조사 단위: `sources/HKUST-KnowComp__AutoSchemaKG` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 1,099 files, 88 directories, depth score 107, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 api/server, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 retrieval=tests/test_embedding_model.py, neo4j_scripts/get_neo4j_wiki.sh, neo4j_scripts/start_neo4j_wiki.sh이고, 의존성 단서는 openai, fastapi, transformers, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 knowledge/RAG pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

## Navigation

| Entry | Use it for |
| --- | --- |
| [Repository README](../../../../README.md) | Repo-wide orientation and top-level data/report structure. |
| [Reports Reading Index](../../../README.md) | Main report navigation, topics, and folder map. |
| [Reports by Topic](../../../by-topic/README.md) | Topic-first report navigation. |
| [Report Tables](../../../tables/README.md) | Table-first view and CSV exports. |
| [Repository Insights](../../../repository-insights/README.md) | Repository-by-repository assessment rows. |
| [Source Deep Dives](../../README.md) | Source-path-level findings by topic. |
| [Source Repository Deep Dives](../README.md) | One Markdown deep dive per cloned repository. |
| [Source Trend Insights](../../../source-insights/README.md) | Category trend insights and repository feature comparison from source evidence. |


## Repository Context

| Field | Value |
| --- | --- |
| Repository | HKUST-KnowComp/AutoSchemaKG |
| Topic | LLM Wiki, RAG, and Knowledge / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | Python |
| Stars | 761 |
| Forks | 104 |
| License | MIT |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/HKUST-KnowComp__AutoSchemaKG](../../../../sources/HKUST-KnowComp__AutoSchemaKG) |
| Existing report | [reports/llm-wiki/repositories/HKUST-KnowComp__AutoSchemaKG.md](../../../llm-wiki/repositories/HKUST-KnowComp__AutoSchemaKG.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 1099 / 88 |
| Max observed depth | 7 |
| Top directories | atlas_rag, docs, EvaluateFactuality, EvaluateGeneralTask, EvaluateKGC, example, neo4j_scripts, tests |
| Top extensions | .json: 354, (none): 350, .py: 183, .yaml: 62, .txt: 42, .md: 40, .csv: 23, .sh: 16, .ipynb: 6, .tsv: 4, .png: 3, .yml: 3 |
| Source patterns | api/server, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 23 |
| tests | validation surface | 11 |
| atlas_rag | top-level component | 1 |
| EvaluateFactuality | top-level component | 1 |
| EvaluateGeneralTask | top-level component | 1 |
| EvaluateKGC | top-level component | 1 |
| example | top-level component | 1 |
| neo4j_scripts | top-level component | 1 |


## How It Runs

_No command surface extracted from root manifests._


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | transformers |
| webRuntime | fastapi |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| retrieval | [tests/test_embedding_model.py](../../../../sources/HKUST-KnowComp__AutoSchemaKG/tests/test_embedding_model.py) | retrieval signal |
| retrieval | [neo4j_scripts/get_neo4j_wiki.sh](../../../../sources/HKUST-KnowComp__AutoSchemaKG/neo4j_scripts/get_neo4j_wiki.sh) | retrieval signal |
| retrieval | [neo4j_scripts/start_neo4j_wiki.sh](../../../../sources/HKUST-KnowComp__AutoSchemaKG/neo4j_scripts/start_neo4j_wiki.sh) | retrieval signal |
| retrieval | [neo4j_scripts/stop_neo4j_wiki.sh](../../../../sources/HKUST-KnowComp__AutoSchemaKG/neo4j_scripts/stop_neo4j_wiki.sh) | retrieval signal |
| entrypoints | [EvaluateGeneralTask/lm-evaluation-harness/lm_eval/__main__.py](../../../../sources/HKUST-KnowComp__AutoSchemaKG/EvaluateGeneralTask/lm-evaluation-harness/lm_eval/__main__.py) | entrypoints signal |
| docs | [README.md](../../../../sources/HKUST-KnowComp__AutoSchemaKG/README.md) | docs signal |
| docs | [example/readme.md](../../../../sources/HKUST-KnowComp__AutoSchemaKG/example/readme.md) | docs signal |
| docs | [example/pdf_md_conversion/readme.md](../../../../sources/HKUST-KnowComp__AutoSchemaKG/example/pdf_md_conversion/readme.md) | docs signal |
| docs | [example/example_scripts/parallel_generation/readme.md](../../../../sources/HKUST-KnowComp__AutoSchemaKG/example/example_scripts/parallel_generation/readme.md) | docs signal |
| eval | [tests/test_base_retriever.py](../../../../sources/HKUST-KnowComp__AutoSchemaKG/tests/test_base_retriever.py) | eval signal |
| eval | [tests/test_filter_template.py](../../../../sources/HKUST-KnowComp__AutoSchemaKG/tests/test_filter_template.py) | eval signal |
| eval | [tests/test_hipporag.py](../../../../sources/HKUST-KnowComp__AutoSchemaKG/tests/test_hipporag.py) | eval signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 1 | [EvaluateGeneralTask/lm-evaluation-harness/lm_eval/__main__.py](../../../../sources/HKUST-KnowComp__AutoSchemaKG/EvaluateGeneralTask/lm-evaluation-harness/lm_eval/__main__.py) |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 70 | [tests/test_embedding_model.py](../../../../sources/HKUST-KnowComp__AutoSchemaKG/tests/test_embedding_model.py)<br>[neo4j_scripts/get_neo4j_wiki.sh](../../../../sources/HKUST-KnowComp__AutoSchemaKG/neo4j_scripts/get_neo4j_wiki.sh)<br>[neo4j_scripts/start_neo4j_wiki.sh](../../../../sources/HKUST-KnowComp__AutoSchemaKG/neo4j_scripts/start_neo4j_wiki.sh)<br>[neo4j_scripts/stop_neo4j_wiki.sh](../../../../sources/HKUST-KnowComp__AutoSchemaKG/neo4j_scripts/stop_neo4j_wiki.sh)<br>[example/example_scripts/neo4j_kg/atlas_api_server_demo_wiki.py](../../../../sources/HKUST-KnowComp__AutoSchemaKG/example/example_scripts/neo4j_kg/atlas_api_server_demo_wiki.py)<br>[EvaluateGeneralTask/lm-evaluation-harness/tests/testdata/hendrycksTest-clinical_knowledge-v0-loglikelihood](../../../../sources/HKUST-KnowComp__AutoSchemaKG/EvaluateGeneralTask/lm-evaluation-harness/tests/testdata/hendrycksTest-clinical_knowledge-v0-loglikelihood)<br>[EvaluateGeneralTask/lm-evaluation-harness/tests/testdata/hendrycksTest-clinical_knowledge-v0-res.json](../../../../sources/HKUST-KnowComp__AutoSchemaKG/EvaluateGeneralTask/lm-evaluation-harness/tests/testdata/hendrycksTest-clinical_knowledge-v0-res.json)<br>[EvaluateGeneralTask/lm-evaluation-harness/lm_eval/tasks/mmlu/generative/mmlu_clinical_knowledge.yaml](../../../../sources/HKUST-KnowComp__AutoSchemaKG/EvaluateGeneralTask/lm-evaluation-harness/lm_eval/tasks/mmlu/generative/mmlu_clinical_knowledge.yaml) |
| spec | 1 | [EvaluateGeneralTask/lm-evaluation-harness/requirements.txt](../../../../sources/HKUST-KnowComp__AutoSchemaKG/EvaluateGeneralTask/lm-evaluation-harness/requirements.txt) |
| eval | 911 | [tests/test_base_retriever.py](../../../../sources/HKUST-KnowComp__AutoSchemaKG/tests/test_base_retriever.py)<br>[tests/test_embedding_model.py](../../../../sources/HKUST-KnowComp__AutoSchemaKG/tests/test_embedding_model.py)<br>[tests/test_filter_template.py](../../../../sources/HKUST-KnowComp__AutoSchemaKG/tests/test_filter_template.py)<br>[tests/test_hipporag.py](../../../../sources/HKUST-KnowComp__AutoSchemaKG/tests/test_hipporag.py)<br>[tests/test_hipporag2.py](../../../../sources/HKUST-KnowComp__AutoSchemaKG/tests/test_hipporag2.py)<br>[tests/test_indexer.py](../../../../sources/HKUST-KnowComp__AutoSchemaKG/tests/test_indexer.py)<br>[tests/test_prompt_template.py](../../../../sources/HKUST-KnowComp__AutoSchemaKG/tests/test_prompt_template.py)<br>[tests/test_simple_retriever.py](../../../../sources/HKUST-KnowComp__AutoSchemaKG/tests/test_simple_retriever.py) |
| security | 9 | [EvaluateGeneralTask/lm-evaluation-harness/tests/testdata/hendrycksTest-computer_security-v0-loglikelihood](../../../../sources/HKUST-KnowComp__AutoSchemaKG/EvaluateGeneralTask/lm-evaluation-harness/tests/testdata/hendrycksTest-computer_security-v0-loglikelihood)<br>[EvaluateGeneralTask/lm-evaluation-harness/tests/testdata/hendrycksTest-computer_security-v0-res.json](../../../../sources/HKUST-KnowComp__AutoSchemaKG/EvaluateGeneralTask/lm-evaluation-harness/tests/testdata/hendrycksTest-computer_security-v0-res.json)<br>[EvaluateGeneralTask/lm-evaluation-harness/tests/testdata/hendrycksTest-security_studies-v0-loglikelihood](../../../../sources/HKUST-KnowComp__AutoSchemaKG/EvaluateGeneralTask/lm-evaluation-harness/tests/testdata/hendrycksTest-security_studies-v0-loglikelihood)<br>[EvaluateGeneralTask/lm-evaluation-harness/tests/testdata/hendrycksTest-security_studies-v0-res.json](../../../../sources/HKUST-KnowComp__AutoSchemaKG/EvaluateGeneralTask/lm-evaluation-harness/tests/testdata/hendrycksTest-security_studies-v0-res.json)<br>[EvaluateGeneralTask/lm-evaluation-harness/tests/testdata/hendrycksTest-us_foreign_policy-v0-loglikelihood](../../../../sources/HKUST-KnowComp__AutoSchemaKG/EvaluateGeneralTask/lm-evaluation-harness/tests/testdata/hendrycksTest-us_foreign_policy-v0-loglikelihood)<br>[EvaluateGeneralTask/lm-evaluation-harness/tests/testdata/hendrycksTest-us_foreign_policy-v0-res.json](../../../../sources/HKUST-KnowComp__AutoSchemaKG/EvaluateGeneralTask/lm-evaluation-harness/tests/testdata/hendrycksTest-us_foreign_policy-v0-res.json)<br>[EvaluateGeneralTask/lm-evaluation-harness/lm_eval/tasks/mmlu/generative/mmlu_computer_security.yaml](../../../../sources/HKUST-KnowComp__AutoSchemaKG/EvaluateGeneralTask/lm-evaluation-harness/lm_eval/tasks/mmlu/generative/mmlu_computer_security.yaml)<br>[EvaluateGeneralTask/lm-evaluation-harness/lm_eval/tasks/mmlu/generative/mmlu_security_studies.yaml](../../../../sources/HKUST-KnowComp__AutoSchemaKG/EvaluateGeneralTask/lm-evaluation-harness/lm_eval/tasks/mmlu/generative/mmlu_security_studies.yaml) |
| ci | 3 | [EvaluateGeneralTask/lm-evaluation-harness/.github/workflows/new_tasks.yml](../../../../sources/HKUST-KnowComp__AutoSchemaKG/EvaluateGeneralTask/lm-evaluation-harness/.github/workflows/new_tasks.yml)<br>[EvaluateGeneralTask/lm-evaluation-harness/.github/workflows/publish.yml](../../../../sources/HKUST-KnowComp__AutoSchemaKG/EvaluateGeneralTask/lm-evaluation-harness/.github/workflows/publish.yml)<br>[EvaluateGeneralTask/lm-evaluation-harness/.github/workflows/unit_tests.yml](../../../../sources/HKUST-KnowComp__AutoSchemaKG/EvaluateGeneralTask/lm-evaluation-harness/.github/workflows/unit_tests.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 44 | [README.md](../../../../sources/HKUST-KnowComp__AutoSchemaKG/README.md)<br>[example/readme.md](../../../../sources/HKUST-KnowComp__AutoSchemaKG/example/readme.md)<br>[example/pdf_md_conversion/readme.md](../../../../sources/HKUST-KnowComp__AutoSchemaKG/example/pdf_md_conversion/readme.md)<br>[example/example_scripts/parallel_generation/readme.md](../../../../sources/HKUST-KnowComp__AutoSchemaKG/example/example_scripts/parallel_generation/readme.md)<br>[example/example_scripts/neo4j_kg/readme.md](../../../../sources/HKUST-KnowComp__AutoSchemaKG/example/example_scripts/neo4j_kg/readme.md)<br>[example/example_scripts/custom_extraction/readme.md](../../../../sources/HKUST-KnowComp__AutoSchemaKG/example/example_scripts/custom_extraction/readme.md)<br>[example/example_scripts/benchmark_extraction_example/readme.md](../../../../sources/HKUST-KnowComp__AutoSchemaKG/example/example_scripts/benchmark_extraction_example/readme.md)<br>[EvaluateKGC/README.md](../../../../sources/HKUST-KnowComp__AutoSchemaKG/EvaluateKGC/README.md) |
| config | 4 | [pyproject.toml](../../../../sources/HKUST-KnowComp__AutoSchemaKG/pyproject.toml)<br>[EvaluateGeneralTask/lm-evaluation-harness/pyproject.toml](../../../../sources/HKUST-KnowComp__AutoSchemaKG/EvaluateGeneralTask/lm-evaluation-harness/pyproject.toml)<br>[EvaluateGeneralTask/lm-evaluation-harness/requirements.txt](../../../../sources/HKUST-KnowComp__AutoSchemaKG/EvaluateGeneralTask/lm-evaluation-harness/requirements.txt)<br>[docs/Makefile](../../../../sources/HKUST-KnowComp__AutoSchemaKG/docs/Makefile) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 911 | [tests/test_base_retriever.py](../../../../sources/HKUST-KnowComp__AutoSchemaKG/tests/test_base_retriever.py)<br>[tests/test_embedding_model.py](../../../../sources/HKUST-KnowComp__AutoSchemaKG/tests/test_embedding_model.py)<br>[tests/test_filter_template.py](../../../../sources/HKUST-KnowComp__AutoSchemaKG/tests/test_filter_template.py)<br>[tests/test_hipporag.py](../../../../sources/HKUST-KnowComp__AutoSchemaKG/tests/test_hipporag.py)<br>[tests/test_hipporag2.py](../../../../sources/HKUST-KnowComp__AutoSchemaKG/tests/test_hipporag2.py)<br>[tests/test_indexer.py](../../../../sources/HKUST-KnowComp__AutoSchemaKG/tests/test_indexer.py) |
| CI workflows | 3 | [EvaluateGeneralTask/lm-evaluation-harness/.github/workflows/new_tasks.yml](../../../../sources/HKUST-KnowComp__AutoSchemaKG/EvaluateGeneralTask/lm-evaluation-harness/.github/workflows/new_tasks.yml)<br>[EvaluateGeneralTask/lm-evaluation-harness/.github/workflows/publish.yml](../../../../sources/HKUST-KnowComp__AutoSchemaKG/EvaluateGeneralTask/lm-evaluation-harness/.github/workflows/publish.yml)<br>[EvaluateGeneralTask/lm-evaluation-harness/.github/workflows/unit_tests.yml](../../../../sources/HKUST-KnowComp__AutoSchemaKG/EvaluateGeneralTask/lm-evaluation-harness/.github/workflows/unit_tests.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 9 | [EvaluateGeneralTask/lm-evaluation-harness/tests/testdata/hendrycksTest-computer_security-v0-loglikelihood](../../../../sources/HKUST-KnowComp__AutoSchemaKG/EvaluateGeneralTask/lm-evaluation-harness/tests/testdata/hendrycksTest-computer_security-v0-loglikelihood)<br>[EvaluateGeneralTask/lm-evaluation-harness/tests/testdata/hendrycksTest-computer_security-v0-res.json](../../../../sources/HKUST-KnowComp__AutoSchemaKG/EvaluateGeneralTask/lm-evaluation-harness/tests/testdata/hendrycksTest-computer_security-v0-res.json)<br>[EvaluateGeneralTask/lm-evaluation-harness/tests/testdata/hendrycksTest-security_studies-v0-loglikelihood](../../../../sources/HKUST-KnowComp__AutoSchemaKG/EvaluateGeneralTask/lm-evaluation-harness/tests/testdata/hendrycksTest-security_studies-v0-loglikelihood)<br>[EvaluateGeneralTask/lm-evaluation-harness/tests/testdata/hendrycksTest-security_studies-v0-res.json](../../../../sources/HKUST-KnowComp__AutoSchemaKG/EvaluateGeneralTask/lm-evaluation-harness/tests/testdata/hendrycksTest-security_studies-v0-res.json)<br>[EvaluateGeneralTask/lm-evaluation-harness/tests/testdata/hendrycksTest-us_foreign_policy-v0-loglikelihood](../../../../sources/HKUST-KnowComp__AutoSchemaKG/EvaluateGeneralTask/lm-evaluation-harness/tests/testdata/hendrycksTest-us_foreign_policy-v0-loglikelihood)<br>[EvaluateGeneralTask/lm-evaluation-harness/tests/testdata/hendrycksTest-us_foreign_policy-v0-res.json](../../../../sources/HKUST-KnowComp__AutoSchemaKG/EvaluateGeneralTask/lm-evaluation-harness/tests/testdata/hendrycksTest-us_foreign_policy-v0-res.json) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `tests/test_embedding_model.py`, `neo4j_scripts/get_neo4j_wiki.sh`, `neo4j_scripts/start_neo4j_wiki.sh`.
2. Trace execution through entrypoints: `EvaluateGeneralTask/lm-evaluation-harness/lm_eval/__main__.py`.
3. Inspect retrieval/memory/indexing through: `tests/test_embedding_model.py`, `neo4j_scripts/get_neo4j_wiki.sh`, `neo4j_scripts/start_neo4j_wiki.sh`.
4. Verify behavior through test/eval files: `tests/test_base_retriever.py`, `tests/test_embedding_model.py`, `tests/test_filter_template.py`.

## Existing Repository Insight

LLM 위키/RAG/지식베이스 관점에서 This repository contains the implementation of AutoSchemaKG, a novel framework for automatic knowledge graph constructio. 핵심 구조 신호는 Python, pyproject.toml, README.md, LICENSE, openai, fastapi이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 knowledge/RAG pattern reference이고, 후속 확인 포인트는 ci signal not obvious, needs deeper structural scan입니다.
