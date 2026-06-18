# Marker-Inc-Korea/AutoRAG 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

AutoRAG: An Open-Source Framework for Retrieval-Augmented Generation (RAG) Evaluation & Optimization with AutoML-Style Automation

## 요약

- 조사 단위: `sources/Marker-Inc-Korea__AutoRAG` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 696 files, 174 directories, depth score 112, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, api/server, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 retrieval=tests/resources/simple_chunk.yaml, tests/resources/test_bm25_retrieval.pkl, tests/resources/result_project/2/retrieve_node_line/semantic_retrieval/0.parquet이고, 의존성 단서는 openai, langchain, llamaindex, llama-index, fastapi, vscode, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 지식/RAG 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

## 바로가기

| 이동 | 여기서 볼 것 |
| --- | --- |
| [전체 시작 README](../../../../README.md) | 레포 전체 목적, 핵심 카테고리, 읽는 순서. |
| [전체 보고서 읽기 지도](../../../README.md) | 모든 보고서의 시작점, 주제, 폴더 지도. |
| [주제별 보고서 목차](../../../by-topic/README.md) | 조사 질문 기준으로 보고서를 찾는 입구. |
| [표/CSV 목차](../../../tables/README.md) | 표로 빠르게 훑고 CSV로 비교하는 입구. |
| [레포별 인사이트](../../../repository-insights/README.md) | 레포별 총평과 위험 신호. |
| [소스 딥다이브](../../README.md) | 주제별 소스 경로 근거. |
| [레포별 소스 딥다이브](../README.md) | 로컬 클론 1개당 1개 Markdown 딥다이브. |
| [소스 트렌드 인사이트](../../../source-insights/README.md) | 카테고리별 트렌드와 레포별 특징 비교. |


## 레포 컨텍스트

| 항목 | 값 |
| --- | --- |
| 레포 | Marker-Inc-Korea/AutoRAG |
| 주제 | LLM 위키/RAG/지식베이스 / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | Python |
| Stars | 4832 |
| Forks | 403 |
| License | Apache-2.0 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/Marker-Inc-Korea__AutoRAG](../../../../sources/Marker-Inc-Korea__AutoRAG) |
| 기존 보고서 | [reports/korea-trending/repositories/Marker-Inc-Korea__AutoRAG.md](../../../korea-trending/repositories/Marker-Inc-Korea__AutoRAG.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 696 / 174 |
| 관측 최대 깊이 | 7 |
| 상위 디렉터리 | .github, autorag, docs, sample_config, sample_dataset, tests |
| 상위 확장자 | .py: 310, .md: 111, .yaml: 58, .parquet: 54, .png: 45, .rst: 33, .csv: 30, .txt: 14, .pdf: 8, .yml: 6, (none): 6, .bin: 4 |
| 소스 패턴 | cli-first, api/server, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy, ui/extension surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 83 |
| tests | validation surface | 82 |
| .github | ci surface | 1 |
| autorag | top-level component | 1 |
| sample_config | top-level component | 1 |
| sample_dataset | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | pyproject.toml | autorag | autorag |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai |
| agentProtocols | 없음 |
| agentFrameworks | langchain, llamaindex, llama-index |
| vectorStores | chroma, qdrant, milvus, weaviate |
| modelRuntime | torch, transformers, vllm, ollama, llama |
| webRuntime | fastapi |
| developerSurface | vscode, click |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 0 | 명확하지 않음 |
| mcp | 0 | 명확하지 않음 |
| retrieval | 126 | [tests/resources/simple_chunk.yaml](../../../../sources/Marker-Inc-Korea__AutoRAG/tests/resources/simple_chunk.yaml)<br>[tests/resources/test_bm25_retrieval.pkl](../../../../sources/Marker-Inc-Korea__AutoRAG/tests/resources/test_bm25_retrieval.pkl)<br>[tests/resources/result_project/2/retrieve_node_line/semantic_retrieval/0.parquet](../../../../sources/Marker-Inc-Korea__AutoRAG/tests/resources/result_project/2/retrieve_node_line/semantic_retrieval/0.parquet)<br>[tests/resources/result_project/2/retrieve_node_line/semantic_retrieval/best_0.parquet](../../../../sources/Marker-Inc-Korea__AutoRAG/tests/resources/result_project/2/retrieve_node_line/semantic_retrieval/best_0.parquet)<br>[tests/resources/result_project/2/retrieve_node_line/semantic_retrieval/summary.csv](../../../../sources/Marker-Inc-Korea__AutoRAG/tests/resources/result_project/2/retrieve_node_line/semantic_retrieval/summary.csv)<br>[tests/resources/result_project/2/retrieve_node_line/lexical_retrieval/0.parquet](../../../../sources/Marker-Inc-Korea__AutoRAG/tests/resources/result_project/2/retrieve_node_line/lexical_retrieval/0.parquet)<br>[tests/resources/result_project/2/retrieve_node_line/lexical_retrieval/best_0.parquet](../../../../sources/Marker-Inc-Korea__AutoRAG/tests/resources/result_project/2/retrieve_node_line/lexical_retrieval/best_0.parquet)<br>[tests/resources/result_project/2/retrieve_node_line/lexical_retrieval/summary.csv](../../../../sources/Marker-Inc-Korea__AutoRAG/tests/resources/result_project/2/retrieve_node_line/lexical_retrieval/summary.csv) |
| spec | 40 | [docs/requirements.txt](../../../../sources/Marker-Inc-Korea__AutoRAG/docs/requirements.txt)<br>[docs/source/roadmap/modular_rag.md](../../../../sources/Marker-Inc-Korea__AutoRAG/docs/source/roadmap/modular_rag.md)<br>[docs/source/api_spec/autorag.data.chunk.rst](../../../../sources/Marker-Inc-Korea__AutoRAG/docs/source/api_spec/autorag.data.chunk.rst)<br>[docs/source/api_spec/autorag.data.corpus.rst](../../../../sources/Marker-Inc-Korea__AutoRAG/docs/source/api_spec/autorag.data.corpus.rst)<br>[docs/source/api_spec/autorag.data.legacy.corpus.rst](../../../../sources/Marker-Inc-Korea__AutoRAG/docs/source/api_spec/autorag.data.legacy.corpus.rst)<br>[docs/source/api_spec/autorag.data.legacy.qacreation.rst](../../../../sources/Marker-Inc-Korea__AutoRAG/docs/source/api_spec/autorag.data.legacy.qacreation.rst)<br>[docs/source/api_spec/autorag.data.legacy.rst](../../../../sources/Marker-Inc-Korea__AutoRAG/docs/source/api_spec/autorag.data.legacy.rst)<br>[docs/source/api_spec/autorag.data.parse.rst](../../../../sources/Marker-Inc-Korea__AutoRAG/docs/source/api_spec/autorag.data.parse.rst) |
| eval | 320 | [tests/__init__.py](../../../../sources/Marker-Inc-Korea__AutoRAG/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/Marker-Inc-Korea__AutoRAG/tests/conftest.py)<br>[tests/delete_tests.py](../../../../sources/Marker-Inc-Korea__AutoRAG/tests/delete_tests.py)<br>[tests/mock.py](../../../../sources/Marker-Inc-Korea__AutoRAG/tests/mock.py)<br>[tests/resources/corpus_data_sample.parquet](../../../../sources/Marker-Inc-Korea__AutoRAG/tests/resources/corpus_data_sample.parquet)<br>[tests/resources/full.yaml](../../../../sources/Marker-Inc-Korea__AutoRAG/tests/resources/full.yaml)<br>[tests/resources/qa_data_sample.parquet](../../../../sources/Marker-Inc-Korea__AutoRAG/tests/resources/qa_data_sample.parquet)<br>[tests/resources/qa_test_data_sample.parquet](../../../../sources/Marker-Inc-Korea__AutoRAG/tests/resources/qa_test_data_sample.parquet) |
| security | 1 | [docs/source/_static/roadmap/policy.png](../../../../sources/Marker-Inc-Korea__AutoRAG/docs/source/_static/roadmap/policy.png) |
| ci | 3 | [.github/workflows/publish.yml](../../../../sources/Marker-Inc-Korea__AutoRAG/.github/workflows/publish.yml)<br>[.github/workflows/sphinx.yml](../../../../sources/Marker-Inc-Korea__AutoRAG/.github/workflows/sphinx.yml)<br>[.github/workflows/test.yml](../../../../sources/Marker-Inc-Korea__AutoRAG/.github/workflows/test.yml) |
| container | 7 | [docs/source/deploy/api_endpoint.md](../../../../sources/Marker-Inc-Korea__AutoRAG/docs/source/deploy/api_endpoint.md)<br>[docs/source/deploy/web.md](../../../../sources/Marker-Inc-Korea__AutoRAG/docs/source/deploy/web.md)<br>[autorag/deploy/__init__.py](../../../../sources/Marker-Inc-Korea__AutoRAG/autorag/deploy/__init__.py)<br>[autorag/deploy/api.py](../../../../sources/Marker-Inc-Korea__AutoRAG/autorag/deploy/api.py)<br>[autorag/deploy/base.py](../../../../sources/Marker-Inc-Korea__AutoRAG/autorag/deploy/base.py)<br>[autorag/deploy/gradio.py](../../../../sources/Marker-Inc-Korea__AutoRAG/autorag/deploy/gradio.py)<br>[autorag/deploy/swagger.yml](../../../../sources/Marker-Inc-Korea__AutoRAG/autorag/deploy/swagger.yml) |
| instruction | 1 | [.github/copilot-instructions.md](../../../../sources/Marker-Inc-Korea__AutoRAG/.github/copilot-instructions.md) |
| docs | 189 | [README.md](../../../../sources/Marker-Inc-Korea__AutoRAG/README.md)<br>[tests/resources/README.md](../../../../sources/Marker-Inc-Korea__AutoRAG/tests/resources/README.md)<br>[sample_dataset/README.md](../../../../sources/Marker-Inc-Korea__AutoRAG/sample_dataset/README.md)<br>[docs/CNAME](../../../../sources/Marker-Inc-Korea__AutoRAG/docs/CNAME)<br>[docs/make.bat](../../../../sources/Marker-Inc-Korea__AutoRAG/docs/make.bat)<br>[docs/Makefile](../../../../sources/Marker-Inc-Korea__AutoRAG/docs/Makefile)<br>[docs/requirements.txt](../../../../sources/Marker-Inc-Korea__AutoRAG/docs/requirements.txt)<br>[docs/source/CNAME](../../../../sources/Marker-Inc-Korea__AutoRAG/docs/source/CNAME) |
| config | 4 | [pyproject.toml](../../../../sources/Marker-Inc-Korea__AutoRAG/pyproject.toml)<br>[uv.lock](../../../../sources/Marker-Inc-Korea__AutoRAG/uv.lock)<br>[docs/Makefile](../../../../sources/Marker-Inc-Korea__AutoRAG/docs/Makefile)<br>[docs/requirements.txt](../../../../sources/Marker-Inc-Korea__AutoRAG/docs/requirements.txt) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 320 | [tests/__init__.py](../../../../sources/Marker-Inc-Korea__AutoRAG/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/Marker-Inc-Korea__AutoRAG/tests/conftest.py)<br>[tests/delete_tests.py](../../../../sources/Marker-Inc-Korea__AutoRAG/tests/delete_tests.py)<br>[tests/mock.py](../../../../sources/Marker-Inc-Korea__AutoRAG/tests/mock.py)<br>[tests/resources/corpus_data_sample.parquet](../../../../sources/Marker-Inc-Korea__AutoRAG/tests/resources/corpus_data_sample.parquet)<br>[tests/resources/full.yaml](../../../../sources/Marker-Inc-Korea__AutoRAG/tests/resources/full.yaml) |
| CI workflow | 3 | [.github/workflows/publish.yml](../../../../sources/Marker-Inc-Korea__AutoRAG/.github/workflows/publish.yml)<br>[.github/workflows/sphinx.yml](../../../../sources/Marker-Inc-Korea__AutoRAG/.github/workflows/sphinx.yml)<br>[.github/workflows/test.yml](../../../../sources/Marker-Inc-Korea__AutoRAG/.github/workflows/test.yml) |
| 컨테이너/배포 | 7 | [docs/source/deploy/api_endpoint.md](../../../../sources/Marker-Inc-Korea__AutoRAG/docs/source/deploy/api_endpoint.md)<br>[docs/source/deploy/web.md](../../../../sources/Marker-Inc-Korea__AutoRAG/docs/source/deploy/web.md)<br>[autorag/deploy/__init__.py](../../../../sources/Marker-Inc-Korea__AutoRAG/autorag/deploy/__init__.py)<br>[autorag/deploy/api.py](../../../../sources/Marker-Inc-Korea__AutoRAG/autorag/deploy/api.py)<br>[autorag/deploy/base.py](../../../../sources/Marker-Inc-Korea__AutoRAG/autorag/deploy/base.py)<br>[autorag/deploy/gradio.py](../../../../sources/Marker-Inc-Korea__AutoRAG/autorag/deploy/gradio.py) |
| 보안/정책 | 1 | [docs/source/_static/roadmap/policy.png](../../../../sources/Marker-Inc-Korea__AutoRAG/docs/source/_static/roadmap/policy.png) |
| 에이전트 지시문 | 1 | [.github/copilot-instructions.md](../../../../sources/Marker-Inc-Korea__AutoRAG/.github/copilot-instructions.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | path scan에서 primary entrypoint가 명확하지 않음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `tests/resources/simple_chunk.yaml`, `tests/resources/test_bm25_retrieval.pkl`, `tests/resources/result_project/2/retrieve_node_line/semantic_retrieval/0.parquet`.
2. retrieval/memory/indexing 확인: `tests/resources/simple_chunk.yaml`, `tests/resources/test_bm25_retrieval.pkl`, `tests/resources/result_project/2/retrieve_node_line/semantic_retrieval/0.parquet`.
3. test/eval 파일로 동작 검증: `tests/__init__.py`, `tests/conftest.py`, `tests/delete_tests.py`.

## 기존 레포 인사이트

LLM 위키/RAG/지식베이스 관점에서 AutoRAG An Open Source Framework for Retrieval Augmented Generation RAG Evaluation & Optimization with AutoML Style Auto. 핵심 구조 신호는 Python, pyproject.toml, README.md, LICENSE, openai, langchain이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 지식/RAG 패턴 참고이고, 후속 확인 포인트는 더 깊은 구조 스캔 필요입니다.
