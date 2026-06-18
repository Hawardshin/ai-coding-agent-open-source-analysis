# Marker-Inc-Korea/AutoRAG Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

AutoRAG: An Open-Source Framework for Retrieval-Augmented Generation (RAG) Evaluation & Optimization with AutoML-Style Automation

## 요약

- 조사 단위: `sources/Marker-Inc-Korea__AutoRAG` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 696 files, 174 directories, depth score 118, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, api/server, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 retrieval=tests/resources/simple_chunk.yaml, tests/resources/test_bm25_retrieval.pkl, tests/resources/result_project/2/retrieve_node_line/semantic_retrieval/0.parquet이고, 의존성 단서는 openai, langchain, llamaindex, llama-index, fastapi, vscode, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 knowledge/RAG pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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


## Repository Context

| Field | Value |
| --- | --- |
| Repository | Marker-Inc-Korea/AutoRAG |
| Topic | LLM Wiki, RAG, and Knowledge / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | Python |
| Stars | 4832 |
| Forks | 403 |
| License | Apache-2.0 |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/Marker-Inc-Korea__AutoRAG](../../../../sources/Marker-Inc-Korea__AutoRAG) |
| Existing report | [reports/korea-trending/repositories/Marker-Inc-Korea__AutoRAG.md](../../../korea-trending/repositories/Marker-Inc-Korea__AutoRAG.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 696 / 174 |
| Max observed depth | 7 |
| Top directories | .github, autorag, docs, sample_config, sample_dataset, tests |
| Top extensions | .py: 310, .md: 111, .yaml: 58, .parquet: 54, .png: 45, .rst: 33, .csv: 30, .txt: 14, .pdf: 8, .yml: 6, (none): 6, .bin: 4 |
| Source patterns | cli-first, api/server, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy, ui/extension surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 83 |
| tests | validation surface | 82 |
| .github | ci surface | 1 |
| autorag | top-level component | 1 |
| sample_config | top-level component | 1 |
| sample_dataset | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | pyproject.toml | autorag | autorag |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai |
| agentProtocols | none |
| agentFrameworks | langchain, llamaindex, llama-index |
| vectorStores | chroma, qdrant, milvus, weaviate |
| modelRuntime | torch, transformers, vllm, ollama, llama |
| webRuntime | fastapi |
| developerSurface | vscode, click |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| retrieval | [tests/resources/simple_chunk.yaml](../../../../sources/Marker-Inc-Korea__AutoRAG/tests/resources/simple_chunk.yaml) | retrieval signal |
| retrieval | [tests/resources/test_bm25_retrieval.pkl](../../../../sources/Marker-Inc-Korea__AutoRAG/tests/resources/test_bm25_retrieval.pkl) | retrieval signal |
| retrieval | [tests/resources/result_project/2/retrieve_node_line/semantic_retrieval/0.parquet](../../../../sources/Marker-Inc-Korea__AutoRAG/tests/resources/result_project/2/retrieve_node_line/semantic_retrieval/0.parquet) | retrieval signal |
| retrieval | [tests/resources/result_project/2/retrieve_node_line/semantic_retrieval/best_0.parquet](../../../../sources/Marker-Inc-Korea__AutoRAG/tests/resources/result_project/2/retrieve_node_line/semantic_retrieval/best_0.parquet) | retrieval signal |
| docs | [README.md](../../../../sources/Marker-Inc-Korea__AutoRAG/README.md) | docs signal |
| docs | [tests/resources/README.md](../../../../sources/Marker-Inc-Korea__AutoRAG/tests/resources/README.md) | docs signal |
| docs | [sample_dataset/README.md](../../../../sources/Marker-Inc-Korea__AutoRAG/sample_dataset/README.md) | docs signal |
| docs | [docs/CNAME](../../../../sources/Marker-Inc-Korea__AutoRAG/docs/CNAME) | docs signal |
| eval | [tests/__init__.py](../../../../sources/Marker-Inc-Korea__AutoRAG/tests/__init__.py) | eval signal |
| eval | [tests/conftest.py](../../../../sources/Marker-Inc-Korea__AutoRAG/tests/conftest.py) | eval signal |
| eval | [tests/delete_tests.py](../../../../sources/Marker-Inc-Korea__AutoRAG/tests/delete_tests.py) | eval signal |
| eval | [tests/mock.py](../../../../sources/Marker-Inc-Korea__AutoRAG/tests/mock.py) | eval signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 126 | [tests/resources/simple_chunk.yaml](../../../../sources/Marker-Inc-Korea__AutoRAG/tests/resources/simple_chunk.yaml)<br>[tests/resources/test_bm25_retrieval.pkl](../../../../sources/Marker-Inc-Korea__AutoRAG/tests/resources/test_bm25_retrieval.pkl)<br>[tests/resources/result_project/2/retrieve_node_line/semantic_retrieval/0.parquet](../../../../sources/Marker-Inc-Korea__AutoRAG/tests/resources/result_project/2/retrieve_node_line/semantic_retrieval/0.parquet)<br>[tests/resources/result_project/2/retrieve_node_line/semantic_retrieval/best_0.parquet](../../../../sources/Marker-Inc-Korea__AutoRAG/tests/resources/result_project/2/retrieve_node_line/semantic_retrieval/best_0.parquet)<br>[tests/resources/result_project/2/retrieve_node_line/semantic_retrieval/summary.csv](../../../../sources/Marker-Inc-Korea__AutoRAG/tests/resources/result_project/2/retrieve_node_line/semantic_retrieval/summary.csv)<br>[tests/resources/result_project/2/retrieve_node_line/lexical_retrieval/0.parquet](../../../../sources/Marker-Inc-Korea__AutoRAG/tests/resources/result_project/2/retrieve_node_line/lexical_retrieval/0.parquet)<br>[tests/resources/result_project/2/retrieve_node_line/lexical_retrieval/best_0.parquet](../../../../sources/Marker-Inc-Korea__AutoRAG/tests/resources/result_project/2/retrieve_node_line/lexical_retrieval/best_0.parquet)<br>[tests/resources/result_project/2/retrieve_node_line/lexical_retrieval/summary.csv](../../../../sources/Marker-Inc-Korea__AutoRAG/tests/resources/result_project/2/retrieve_node_line/lexical_retrieval/summary.csv) |
| spec | 40 | [docs/requirements.txt](../../../../sources/Marker-Inc-Korea__AutoRAG/docs/requirements.txt)<br>[docs/source/roadmap/modular_rag.md](../../../../sources/Marker-Inc-Korea__AutoRAG/docs/source/roadmap/modular_rag.md)<br>[docs/source/api_spec/autorag.data.chunk.rst](../../../../sources/Marker-Inc-Korea__AutoRAG/docs/source/api_spec/autorag.data.chunk.rst)<br>[docs/source/api_spec/autorag.data.corpus.rst](../../../../sources/Marker-Inc-Korea__AutoRAG/docs/source/api_spec/autorag.data.corpus.rst)<br>[docs/source/api_spec/autorag.data.legacy.corpus.rst](../../../../sources/Marker-Inc-Korea__AutoRAG/docs/source/api_spec/autorag.data.legacy.corpus.rst)<br>[docs/source/api_spec/autorag.data.legacy.qacreation.rst](../../../../sources/Marker-Inc-Korea__AutoRAG/docs/source/api_spec/autorag.data.legacy.qacreation.rst)<br>[docs/source/api_spec/autorag.data.legacy.rst](../../../../sources/Marker-Inc-Korea__AutoRAG/docs/source/api_spec/autorag.data.legacy.rst)<br>[docs/source/api_spec/autorag.data.parse.rst](../../../../sources/Marker-Inc-Korea__AutoRAG/docs/source/api_spec/autorag.data.parse.rst) |
| eval | 320 | [tests/__init__.py](../../../../sources/Marker-Inc-Korea__AutoRAG/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/Marker-Inc-Korea__AutoRAG/tests/conftest.py)<br>[tests/delete_tests.py](../../../../sources/Marker-Inc-Korea__AutoRAG/tests/delete_tests.py)<br>[tests/mock.py](../../../../sources/Marker-Inc-Korea__AutoRAG/tests/mock.py)<br>[tests/resources/corpus_data_sample.parquet](../../../../sources/Marker-Inc-Korea__AutoRAG/tests/resources/corpus_data_sample.parquet)<br>[tests/resources/full.yaml](../../../../sources/Marker-Inc-Korea__AutoRAG/tests/resources/full.yaml)<br>[tests/resources/qa_data_sample.parquet](../../../../sources/Marker-Inc-Korea__AutoRAG/tests/resources/qa_data_sample.parquet)<br>[tests/resources/qa_test_data_sample.parquet](../../../../sources/Marker-Inc-Korea__AutoRAG/tests/resources/qa_test_data_sample.parquet) |
| security | 1 | [docs/source/_static/roadmap/policy.png](../../../../sources/Marker-Inc-Korea__AutoRAG/docs/source/_static/roadmap/policy.png) |
| ci | 3 | [.github/workflows/publish.yml](../../../../sources/Marker-Inc-Korea__AutoRAG/.github/workflows/publish.yml)<br>[.github/workflows/sphinx.yml](../../../../sources/Marker-Inc-Korea__AutoRAG/.github/workflows/sphinx.yml)<br>[.github/workflows/test.yml](../../../../sources/Marker-Inc-Korea__AutoRAG/.github/workflows/test.yml) |
| container | 7 | [docs/source/deploy/api_endpoint.md](../../../../sources/Marker-Inc-Korea__AutoRAG/docs/source/deploy/api_endpoint.md)<br>[docs/source/deploy/web.md](../../../../sources/Marker-Inc-Korea__AutoRAG/docs/source/deploy/web.md)<br>[autorag/deploy/__init__.py](../../../../sources/Marker-Inc-Korea__AutoRAG/autorag/deploy/__init__.py)<br>[autorag/deploy/api.py](../../../../sources/Marker-Inc-Korea__AutoRAG/autorag/deploy/api.py)<br>[autorag/deploy/base.py](../../../../sources/Marker-Inc-Korea__AutoRAG/autorag/deploy/base.py)<br>[autorag/deploy/gradio.py](../../../../sources/Marker-Inc-Korea__AutoRAG/autorag/deploy/gradio.py)<br>[autorag/deploy/swagger.yml](../../../../sources/Marker-Inc-Korea__AutoRAG/autorag/deploy/swagger.yml) |
| instruction | 1 | [.github/copilot-instructions.md](../../../../sources/Marker-Inc-Korea__AutoRAG/.github/copilot-instructions.md) |
| docs | 189 | [README.md](../../../../sources/Marker-Inc-Korea__AutoRAG/README.md)<br>[tests/resources/README.md](../../../../sources/Marker-Inc-Korea__AutoRAG/tests/resources/README.md)<br>[sample_dataset/README.md](../../../../sources/Marker-Inc-Korea__AutoRAG/sample_dataset/README.md)<br>[docs/CNAME](../../../../sources/Marker-Inc-Korea__AutoRAG/docs/CNAME)<br>[docs/make.bat](../../../../sources/Marker-Inc-Korea__AutoRAG/docs/make.bat)<br>[docs/Makefile](../../../../sources/Marker-Inc-Korea__AutoRAG/docs/Makefile)<br>[docs/requirements.txt](../../../../sources/Marker-Inc-Korea__AutoRAG/docs/requirements.txt)<br>[docs/source/CNAME](../../../../sources/Marker-Inc-Korea__AutoRAG/docs/source/CNAME) |
| config | 4 | [pyproject.toml](../../../../sources/Marker-Inc-Korea__AutoRAG/pyproject.toml)<br>[uv.lock](../../../../sources/Marker-Inc-Korea__AutoRAG/uv.lock)<br>[docs/Makefile](../../../../sources/Marker-Inc-Korea__AutoRAG/docs/Makefile)<br>[docs/requirements.txt](../../../../sources/Marker-Inc-Korea__AutoRAG/docs/requirements.txt) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 320 | [tests/__init__.py](../../../../sources/Marker-Inc-Korea__AutoRAG/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/Marker-Inc-Korea__AutoRAG/tests/conftest.py)<br>[tests/delete_tests.py](../../../../sources/Marker-Inc-Korea__AutoRAG/tests/delete_tests.py)<br>[tests/mock.py](../../../../sources/Marker-Inc-Korea__AutoRAG/tests/mock.py)<br>[tests/resources/corpus_data_sample.parquet](../../../../sources/Marker-Inc-Korea__AutoRAG/tests/resources/corpus_data_sample.parquet)<br>[tests/resources/full.yaml](../../../../sources/Marker-Inc-Korea__AutoRAG/tests/resources/full.yaml) |
| CI workflows | 3 | [.github/workflows/publish.yml](../../../../sources/Marker-Inc-Korea__AutoRAG/.github/workflows/publish.yml)<br>[.github/workflows/sphinx.yml](../../../../sources/Marker-Inc-Korea__AutoRAG/.github/workflows/sphinx.yml)<br>[.github/workflows/test.yml](../../../../sources/Marker-Inc-Korea__AutoRAG/.github/workflows/test.yml) |
| Containers / deploy | 7 | [docs/source/deploy/api_endpoint.md](../../../../sources/Marker-Inc-Korea__AutoRAG/docs/source/deploy/api_endpoint.md)<br>[docs/source/deploy/web.md](../../../../sources/Marker-Inc-Korea__AutoRAG/docs/source/deploy/web.md)<br>[autorag/deploy/__init__.py](../../../../sources/Marker-Inc-Korea__AutoRAG/autorag/deploy/__init__.py)<br>[autorag/deploy/api.py](../../../../sources/Marker-Inc-Korea__AutoRAG/autorag/deploy/api.py)<br>[autorag/deploy/base.py](../../../../sources/Marker-Inc-Korea__AutoRAG/autorag/deploy/base.py)<br>[autorag/deploy/gradio.py](../../../../sources/Marker-Inc-Korea__AutoRAG/autorag/deploy/gradio.py) |
| Security / policy | 1 | [docs/source/_static/roadmap/policy.png](../../../../sources/Marker-Inc-Korea__AutoRAG/docs/source/_static/roadmap/policy.png) |
| Agent instructions | 1 | [.github/copilot-instructions.md](../../../../sources/Marker-Inc-Korea__AutoRAG/.github/copilot-instructions.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `tests/resources/simple_chunk.yaml`, `tests/resources/test_bm25_retrieval.pkl`, `tests/resources/result_project/2/retrieve_node_line/semantic_retrieval/0.parquet`.
2. Inspect retrieval/memory/indexing through: `tests/resources/simple_chunk.yaml`, `tests/resources/test_bm25_retrieval.pkl`, `tests/resources/result_project/2/retrieve_node_line/semantic_retrieval/0.parquet`.
3. Verify behavior through test/eval files: `tests/__init__.py`, `tests/conftest.py`, `tests/delete_tests.py`.

## Existing Repository Insight

LLM 위키/RAG/지식베이스 관점에서 AutoRAG An Open Source Framework for Retrieval Augmented Generation RAG Evaluation & Optimization with AutoML Style Auto. 핵심 구조 신호는 Python, pyproject.toml, README.md, LICENSE, openai, langchain이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 knowledge/RAG pattern reference이고, 후속 확인 포인트는 needs deeper structural scan입니다.
