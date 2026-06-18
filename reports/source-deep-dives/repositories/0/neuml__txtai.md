# neuml/txtai 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

💡 All-in-one AI framework for semantic search, LLM orchestration and language model workflows

## 요약

- 조사 단위: `sources/neuml__txtai` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 621 files, 84 directories, depth score 114, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 agent/tool runtime, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 retrieval=src/python/txtai/pipeline/llm/rag.py, src/python/txtai/graph/__init__.py, src/python/txtai/graph/base.py이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 지식/RAG 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | neuml/txtai |
| 주제 | LLM 위키/RAG/지식베이스 / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | Python |
| Stars | 12669 |
| Forks | 834 |
| License | Apache-2.0 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/neuml__txtai](../../../../sources/neuml__txtai) |
| 기존 보고서 | [reports/llm-wiki/repositories/neuml__txtai.md](../../../llm-wiki/repositories/neuml__txtai.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 621 / 84 |
| 관측 최대 깊이 | 6 |
| 상위 디렉터리 | .github, docker, docs, examples, src, test |
| 상위 확장자 | .py: 373, .ipynb: 85, .md: 77, .png: 43, .excalidraw: 22, (none): 11, .yml: 4, .cff: 1, .gif: 1, .html: 1, .jpg: 1, .toml: 1 |
| 소스 패턴 | agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| src | source boundary | 59 |
| docs | documentation surface | 45 |
| .github | ci surface | 1 |
| docker | documentation surface | 1 |
| examples | top-level component | 1 |
| examples/02_Build_an_Embeddings_index_with_Hugging_Face_Datasets.ipynb | examples workspace | 1 |
| examples/03_Build_an_Embeddings_index_from_a_data_source.ipynb | examples workspace | 1 |
| examples/29_Anatomy_of_a_txtai_index.ipynb | examples workspace | 1 |
| examples/37_Embeddings_index_components.ipynb | examples workspace | 1 |
| examples/38_Introducing_the_Semantic_Graph.ipynb | examples workspace | 1 |
| examples/47_Building_an_efficient_sparse_keyword_index_in_Python.ipynb | examples workspace | 1 |
| examples/50_All_about_vector_quantization.ipynb | examples workspace | 1 |
| examples/52_Build_RAG_pipelines_with_txtai.ipynb | examples workspace | 1 |
| examples/55_Generate_knowledge_with_Semantic_Graphs_and_RAG.ipynb | examples workspace | 1 |
| examples/57_Build_knowledge_graphs_with_LLM_driven_entity_extraction.ipynb | examples workspace | 1 |
| examples/58_Advanced_RAG_with_graph_path_traversal.ipynb | examples workspace | 1 |
| examples/60_Advanced_RAG_with_guided_generation.ipynb | examples workspace | 1 |
| examples/62_RAG_with_llama_cpp_and_external_API_services.ipynb | examples workspace | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | data | make data |
| test | Makefile | test | make test |
| test | Makefile | coverage | make coverage |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | 없음 |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| retrieval | [src/python/txtai/pipeline/llm/rag.py](../../../../sources/neuml__txtai/src/python/txtai/pipeline/llm/rag.py) | retrieval signal |
| retrieval | [src/python/txtai/graph/__init__.py](../../../../sources/neuml__txtai/src/python/txtai/graph/__init__.py) | retrieval signal |
| retrieval | [src/python/txtai/graph/base.py](../../../../sources/neuml__txtai/src/python/txtai/graph/base.py) | retrieval signal |
| retrieval | [src/python/txtai/graph/factory.py](../../../../sources/neuml__txtai/src/python/txtai/graph/factory.py) | retrieval signal |
| entrypoints | [src/python/txtai/console/__main__.py](../../../../sources/neuml__txtai/src/python/txtai/console/__main__.py) | entrypoints signal |
| docs | [mkdocs.yml](../../../../sources/neuml__txtai/mkdocs.yml) | docs signal |
| docs | [README.md](../../../../sources/neuml__txtai/README.md) | docs signal |
| docs | [docs/cloud.md](../../../../sources/neuml__txtai/docs/cloud.md) | docs signal |
| docs | [docs/examples.md](../../../../sources/neuml__txtai/docs/examples.md) | docs signal |
| eval | [test/python/testagent.py](../../../../sources/neuml__txtai/test/python/testagent.py) | eval signal |
| eval | [test/python/testapp.py](../../../../sources/neuml__txtai/test/python/testapp.py) | eval signal |
| eval | [test/python/testarchive.py](../../../../sources/neuml__txtai/test/python/testarchive.py) | eval signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 1 | [src/python/txtai/console/__main__.py](../../../../sources/neuml__txtai/src/python/txtai/console/__main__.py) |
| agentRuntime | 62 | [src/python/txtai/workflow/__init__.py](../../../../sources/neuml__txtai/src/python/txtai/workflow/__init__.py)<br>[src/python/txtai/workflow/base.py](../../../../sources/neuml__txtai/src/python/txtai/workflow/base.py)<br>[src/python/txtai/workflow/execute.py](../../../../sources/neuml__txtai/src/python/txtai/workflow/execute.py)<br>[src/python/txtai/workflow/factory.py](../../../../sources/neuml__txtai/src/python/txtai/workflow/factory.py)<br>[src/python/txtai/workflow/task/__init__.py](../../../../sources/neuml__txtai/src/python/txtai/workflow/task/__init__.py)<br>[src/python/txtai/workflow/task/base.py](../../../../sources/neuml__txtai/src/python/txtai/workflow/task/base.py)<br>[src/python/txtai/workflow/task/console.py](../../../../sources/neuml__txtai/src/python/txtai/workflow/task/console.py)<br>[src/python/txtai/workflow/task/export.py](../../../../sources/neuml__txtai/src/python/txtai/workflow/task/export.py) |
| mcp | 1 | [docs/api/mcp.md](../../../../sources/neuml__txtai/docs/api/mcp.md) |
| retrieval | 57 | [src/python/txtai/pipeline/llm/rag.py](../../../../sources/neuml__txtai/src/python/txtai/pipeline/llm/rag.py)<br>[src/python/txtai/graph/__init__.py](../../../../sources/neuml__txtai/src/python/txtai/graph/__init__.py)<br>[src/python/txtai/graph/base.py](../../../../sources/neuml__txtai/src/python/txtai/graph/base.py)<br>[src/python/txtai/graph/factory.py](../../../../sources/neuml__txtai/src/python/txtai/graph/factory.py)<br>[src/python/txtai/graph/networkx.py](../../../../sources/neuml__txtai/src/python/txtai/graph/networkx.py)<br>[src/python/txtai/graph/query.py](../../../../sources/neuml__txtai/src/python/txtai/graph/query.py)<br>[src/python/txtai/graph/rdbms.py](../../../../sources/neuml__txtai/src/python/txtai/graph/rdbms.py)<br>[src/python/txtai/graph/topics.py](../../../../sources/neuml__txtai/src/python/txtai/graph/topics.py) |
| spec | 3 | [docs/images/architecture-dark.png](../../../../sources/neuml__txtai/docs/images/architecture-dark.png)<br>[docs/images/architecture.excalidraw](../../../../sources/neuml__txtai/docs/images/architecture.excalidraw)<br>[docs/images/architecture.png](../../../../sources/neuml__txtai/docs/images/architecture.png) |
| eval | 95 | [test/python/testagent.py](../../../../sources/neuml__txtai/test/python/testagent.py)<br>[test/python/testapp.py](../../../../sources/neuml__txtai/test/python/testapp.py)<br>[test/python/testarchive.py](../../../../sources/neuml__txtai/test/python/testarchive.py)<br>[test/python/testcloud.py](../../../../sources/neuml__txtai/test/python/testcloud.py)<br>[test/python/testconsole.py](../../../../sources/neuml__txtai/test/python/testconsole.py)<br>[test/python/testembeddings.py](../../../../sources/neuml__txtai/test/python/testembeddings.py)<br>[test/python/testgraph.py](../../../../sources/neuml__txtai/test/python/testgraph.py)<br>[test/python/testlibrary.py](../../../../sources/neuml__txtai/test/python/testlibrary.py) |
| security | 1 | [docs/api/security.md](../../../../sources/neuml__txtai/docs/api/security.md) |
| ci | 3 | [.github/workflows/build.yml](../../../../sources/neuml__txtai/.github/workflows/build.yml)<br>[.github/workflows/docs.yml](../../../../sources/neuml__txtai/.github/workflows/docs.yml)<br>[.github/workflows/minimal.yml](../../../../sources/neuml__txtai/.github/workflows/minimal.yml) |
| container | 6 | [docker/workflow/Dockerfile](../../../../sources/neuml__txtai/docker/workflow/Dockerfile)<br>[docker/schedule/Dockerfile](../../../../sources/neuml__txtai/docker/schedule/Dockerfile)<br>[docker/minimal/Dockerfile](../../../../sources/neuml__txtai/docker/minimal/Dockerfile)<br>[docker/base/Dockerfile](../../../../sources/neuml__txtai/docker/base/Dockerfile)<br>[docker/aws/Dockerfile](../../../../sources/neuml__txtai/docker/aws/Dockerfile)<br>[docker/api/Dockerfile](../../../../sources/neuml__txtai/docker/api/Dockerfile) |
| instruction | 0 | 명확하지 않음 |
| docs | 143 | [mkdocs.yml](../../../../sources/neuml__txtai/mkdocs.yml)<br>[README.md](../../../../sources/neuml__txtai/README.md)<br>[docs/cloud.md](../../../../sources/neuml__txtai/docs/cloud.md)<br>[docs/examples.md](../../../../sources/neuml__txtai/docs/examples.md)<br>[docs/faq.md](../../../../sources/neuml__txtai/docs/faq.md)<br>[docs/further.md](../../../../sources/neuml__txtai/docs/further.md)<br>[docs/index.md](../../../../sources/neuml__txtai/docs/index.md)<br>[docs/install.md](../../../../sources/neuml__txtai/docs/install.md) |
| config | 2 | [Makefile](../../../../sources/neuml__txtai/Makefile)<br>[pyproject.toml](../../../../sources/neuml__txtai/pyproject.toml) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 95 | [test/python/testagent.py](../../../../sources/neuml__txtai/test/python/testagent.py)<br>[test/python/testapp.py](../../../../sources/neuml__txtai/test/python/testapp.py)<br>[test/python/testarchive.py](../../../../sources/neuml__txtai/test/python/testarchive.py)<br>[test/python/testcloud.py](../../../../sources/neuml__txtai/test/python/testcloud.py)<br>[test/python/testconsole.py](../../../../sources/neuml__txtai/test/python/testconsole.py)<br>[test/python/testembeddings.py](../../../../sources/neuml__txtai/test/python/testembeddings.py) |
| CI workflow | 3 | [.github/workflows/build.yml](../../../../sources/neuml__txtai/.github/workflows/build.yml)<br>[.github/workflows/docs.yml](../../../../sources/neuml__txtai/.github/workflows/docs.yml)<br>[.github/workflows/minimal.yml](../../../../sources/neuml__txtai/.github/workflows/minimal.yml) |
| 컨테이너/배포 | 6 | [docker/workflow/Dockerfile](../../../../sources/neuml__txtai/docker/workflow/Dockerfile)<br>[docker/schedule/Dockerfile](../../../../sources/neuml__txtai/docker/schedule/Dockerfile)<br>[docker/minimal/Dockerfile](../../../../sources/neuml__txtai/docker/minimal/Dockerfile)<br>[docker/base/Dockerfile](../../../../sources/neuml__txtai/docker/base/Dockerfile)<br>[docker/aws/Dockerfile](../../../../sources/neuml__txtai/docker/aws/Dockerfile)<br>[docker/api/Dockerfile](../../../../sources/neuml__txtai/docker/api/Dockerfile) |
| 보안/정책 | 1 | [docs/api/security.md](../../../../sources/neuml__txtai/docs/api/security.md) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `src/python/txtai/pipeline/llm/rag.py`, `src/python/txtai/graph/__init__.py`, `src/python/txtai/graph/base.py`.
2. entrypoint를 따라 실행 흐름 확인: `src/python/txtai/console/__main__.py`.
3. agent/tool runtime 매핑: `src/python/txtai/workflow/__init__.py`, `src/python/txtai/workflow/base.py`, `src/python/txtai/workflow/execute.py`.
4. retrieval/memory/indexing 확인: `src/python/txtai/pipeline/llm/rag.py`, `src/python/txtai/graph/__init__.py`, `src/python/txtai/graph/base.py`.
5. test/eval 파일로 동작 검증: `test/python/testagent.py`, `test/python/testapp.py`, `test/python/testarchive.py`.

## 기존 레포 인사이트

LLM 위키/RAG/지식베이스 관점에서 💡 All in one AI framework for semantic search, LLM orchestration and language model workflows. 핵심 구조 신호는 Python, pyproject.toml, Makefile, README.md, LICENSE, tests이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 지식/RAG 패턴 참고이고, 후속 확인 포인트는 더 깊은 구조 스캔 필요입니다.
