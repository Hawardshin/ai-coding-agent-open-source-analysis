# llmware-ai/llmware 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

Unified framework for building enterprise RAG pipelines with small, specialized models

## 요약

- 조사 단위: `sources/llmware-ai__llmware` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 546 files, 70 directories, depth score 109, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 agent/tool runtime, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 retrieval=tutorials/notebooks/quickstart_rag_colab.ipynb, tutorials/notebooks/NoteBook_Examples/ner_retrieval.ipynb, tutorials/notebooks/fast_start_examples/example_4_rag_text_query.ipynb이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 지식/RAG 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | llmware-ai/llmware |
| 주제 | LLM 위키/RAG/지식베이스 / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | Python |
| Stars | 14837 |
| Forks | 2921 |
| License | Apache-2.0 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/llmware-ai__llmware](../../../../sources/llmware-ai__llmware) |
| 기존 보고서 | [reports/llm-wiki/repositories/llmware-ai__llmware.md](../../../llm-wiki/repositories/llmware-ai__llmware.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 546 / 70 |
| 관측 최대 깊이 | 7 |
| 상위 디렉터리 | .github, docs, llmware, repo_docs, scripts, solutions, tests, tutorials |
| 상위 확장자 | .py: 232, .md: 68, .dll: 64, .ipynb: 31, .so: 29, .0: 22, .dylib: 19, .1: 12, (none): 8, .yaml: 7, .5: 6, .sh: 5 |
| 소스 패턴 | agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 32 |
| tests | validation surface | 25 |
| .github | ci surface | 1 |
| llmware | top-level component | 1 |
| repo_docs | documentation surface | 1 |
| scripts | top-level component | 1 |
| solutions | top-level component | 1 |
| tutorials | top-level component | 1 |


## 실행 방식

_root manifest에서 추출된 command surface가 없습니다._


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
| retrieval | [tutorials/notebooks/quickstart_rag_colab.ipynb](../../../../sources/llmware-ai__llmware/tutorials/notebooks/quickstart_rag_colab.ipynb) | retrieval signal |
| retrieval | [tutorials/notebooks/NoteBook_Examples/ner_retrieval.ipynb](../../../../sources/llmware-ai__llmware/tutorials/notebooks/NoteBook_Examples/ner_retrieval.ipynb) | retrieval signal |
| retrieval | [tutorials/notebooks/fast_start_examples/example_4_rag_text_query.ipynb](../../../../sources/llmware-ai__llmware/tutorials/notebooks/fast_start_examples/example_4_rag_text_query.ipynb) | retrieval signal |
| retrieval | [tutorials/notebooks/fast_start_examples/example_5_rag_semantic_query.ipynb](../../../../sources/llmware-ai__llmware/tutorials/notebooks/fast_start_examples/example_5_rag_semantic_query.ipynb) | retrieval signal |
| docs | [README.md](../../../../sources/llmware-ai__llmware/README.md) | docs signal |
| docs | [tutorials/notebooks/README.md](../../../../sources/llmware-ai__llmware/tutorials/notebooks/README.md) | docs signal |
| docs | [tutorials/getting_started/README.md](../../../../sources/llmware-ai__llmware/tutorials/getting_started/README.md) | docs signal |
| docs | [tests/README.md](../../../../sources/llmware-ai__llmware/tests/README.md) | docs signal |
| eval | [tests/run-tests.py](../../../../sources/llmware-ai__llmware/tests/run-tests.py) | eval signal |
| eval | [tests/set-env.sh](../../../../sources/llmware-ai__llmware/tests/set-env.sh) | eval signal |
| eval | [tests/utils.py](../../../../sources/llmware-ai__llmware/tests/utils.py) | eval signal |
| config | [solutions/use_cases/lecture_tool/requirements.txt](../../../../sources/llmware-ai__llmware/solutions/use_cases/lecture_tool/requirements.txt) | config signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 27 | [tutorials/notebooks/Agents_01.ipynb](../../../../sources/llmware-ai__llmware/tutorials/notebooks/Agents_01.ipynb)<br>[tutorials/notebooks/Agents_02.ipynb](../../../../sources/llmware-ai__llmware/tutorials/notebooks/Agents_02.ipynb)<br>[tutorials/notebooks/Agents_03.ipynb](../../../../sources/llmware-ai__llmware/tutorials/notebooks/Agents_03.ipynb)<br>[tutorials/notebooks/NoteBook_Examples/agent_multistep_analysis_nb.ipynb](../../../../sources/llmware-ai__llmware/tutorials/notebooks/NoteBook_Examples/agent_multistep_analysis_nb.ipynb)<br>[tutorials/notebooks/NoteBook_Examples/agent_with_custom_tables_example.ipynb](../../../../sources/llmware-ai__llmware/tutorials/notebooks/NoteBook_Examples/agent_with_custom_tables_example.ipynb)<br>[solutions/use_cases/agent_with_custom_tables.py](../../../../sources/llmware-ai__llmware/solutions/use_cases/agent_with_custom_tables.py)<br>[solutions/slim_agents/agent-llmfx-getting-started.py](../../../../sources/llmware-ai__llmware/solutions/slim_agents/agent-llmfx-getting-started.py)<br>[solutions/slim_agents/agent-multistep-analysis.py](../../../../sources/llmware-ai__llmware/solutions/slim_agents/agent-multistep-analysis.py) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 49 | [tutorials/notebooks/quickstart_rag_colab.ipynb](../../../../sources/llmware-ai__llmware/tutorials/notebooks/quickstart_rag_colab.ipynb)<br>[tutorials/notebooks/NoteBook_Examples/ner_retrieval.ipynb](../../../../sources/llmware-ai__llmware/tutorials/notebooks/NoteBook_Examples/ner_retrieval.ipynb)<br>[tutorials/notebooks/fast_start_examples/example_4_rag_text_query.ipynb](../../../../sources/llmware-ai__llmware/tutorials/notebooks/fast_start_examples/example_4_rag_text_query.ipynb)<br>[tutorials/notebooks/fast_start_examples/example_5_rag_semantic_query.ipynb](../../../../sources/llmware-ai__llmware/tutorials/notebooks/fast_start_examples/example_5_rag_semantic_query.ipynb)<br>[tutorials/notebooks/fast_start_examples/example_6_rag_multi_step_query_version_1ipynb.ipynb](../../../../sources/llmware-ai__llmware/tutorials/notebooks/fast_start_examples/example_6_rag_multi_step_query_version_1ipynb.ipynb)<br>[tutorials/notebooks/fast_start_examples/example_6_rag_multi_step_query_version_2.ipynb](../../../../sources/llmware-ai__llmware/tutorials/notebooks/fast_start_examples/example_6_rag_multi_step_query_version_2.ipynb)<br>[tutorials/notebooks/fast_start_examples/example_6_rag_multi_step_query_version_3.ipynb](../../../../sources/llmware-ai__llmware/tutorials/notebooks/fast_start_examples/example_6_rag_multi_step_query_version_3.ipynb)<br>[tests/retrieval/test_search_in_memory.py](../../../../sources/llmware-ai__llmware/tests/retrieval/test_search_in_memory.py) |
| spec | 3 | [solutions/use_cases/lecture_tool/requirements.txt](../../../../sources/llmware-ai__llmware/solutions/use_cases/lecture_tool/requirements.txt)<br>[llmware/requirements_extras.txt](../../../../sources/llmware-ai__llmware/llmware/requirements_extras.txt)<br>[llmware/requirements.txt](../../../../sources/llmware-ai__llmware/llmware/requirements.txt) |
| eval | 26 | [tests/README.md](../../../../sources/llmware-ai__llmware/tests/README.md)<br>[tests/run-tests.py](../../../../sources/llmware-ai__llmware/tests/run-tests.py)<br>[tests/set-env.sh](../../../../sources/llmware-ai__llmware/tests/set-env.sh)<br>[tests/utils.py](../../../../sources/llmware-ai__llmware/tests/utils.py)<br>[tests/retrieval/test_search_in_memory.py](../../../../sources/llmware-ai__llmware/tests/retrieval/test_search_in_memory.py)<br>[tests/models/test_agent_llmfx_process.py](../../../../sources/llmware-ai__llmware/tests/models/test_agent_llmfx_process.py)<br>[tests/models/test_cloud_model_providers.py](../../../../sources/llmware-ai__llmware/tests/models/test_cloud_model_providers.py)<br>[tests/models/test_cohere_command_r_model.py](../../../../sources/llmware-ai__llmware/tests/models/test_cohere_command_r_model.py) |
| security | 1 | [repo_docs/SECURITY.md](../../../../sources/llmware-ai__llmware/repo_docs/SECURITY.md) |
| ci | 1 | [.github/workflows/pages.yml](../../../../sources/llmware-ai__llmware/.github/workflows/pages.yml) |
| container | 8 | [scripts/docker/docker-compose_mongo_milvus.yaml](../../../../sources/llmware-ai__llmware/scripts/docker/docker-compose_mongo_milvus.yaml)<br>[scripts/docker/docker-compose-neo4j.yaml](../../../../sources/llmware-ai__llmware/scripts/docker/docker-compose-neo4j.yaml)<br>[scripts/docker/docker-compose-pgvector.yaml](../../../../sources/llmware-ai__llmware/scripts/docker/docker-compose-pgvector.yaml)<br>[scripts/docker/docker-compose-qdrant.yaml](../../../../sources/llmware-ai__llmware/scripts/docker/docker-compose-qdrant.yaml)<br>[scripts/docker/docker-compose-redis-stack.yaml](../../../../sources/llmware-ai__llmware/scripts/docker/docker-compose-redis-stack.yaml)<br>[scripts/docker/docker-compose.yaml](../../../../sources/llmware-ai__llmware/scripts/docker/docker-compose.yaml)<br>[scripts/docker/Dockerfile](../../../../sources/llmware-ai__llmware/scripts/docker/Dockerfile)<br>[scripts/devcontainer/docker-compose.yaml](../../../../sources/llmware-ai__llmware/scripts/devcontainer/docker-compose.yaml) |
| instruction | 2 | [docs/examples/agents.md](../../../../sources/llmware-ai__llmware/docs/examples/agents.md)<br>[docs/components/agents.md](../../../../sources/llmware-ai__llmware/docs/components/agents.md) |
| docs | 76 | [README.md](../../../../sources/llmware-ai__llmware/README.md)<br>[tutorials/notebooks/README.md](../../../../sources/llmware-ai__llmware/tutorials/notebooks/README.md)<br>[tutorials/getting_started/README.md](../../../../sources/llmware-ai__llmware/tutorials/getting_started/README.md)<br>[tests/README.md](../../../../sources/llmware-ai__llmware/tests/README.md)<br>[solutions/README.md](../../../../sources/llmware-ai__llmware/solutions/README.md)<br>[solutions/use_cases/README.md](../../../../sources/llmware-ai__llmware/solutions/use_cases/README.md)<br>[solutions/use_cases/lecture_tool/README.md](../../../../sources/llmware-ai__llmware/solutions/use_cases/lecture_tool/README.md)<br>[solutions/sources/README.md](../../../../sources/llmware-ai__llmware/solutions/sources/README.md) |
| config | 3 | [solutions/use_cases/lecture_tool/requirements.txt](../../../../sources/llmware-ai__llmware/solutions/use_cases/lecture_tool/requirements.txt)<br>[llmware/requirements_extras.txt](../../../../sources/llmware-ai__llmware/llmware/requirements_extras.txt)<br>[llmware/requirements.txt](../../../../sources/llmware-ai__llmware/llmware/requirements.txt) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 26 | [tests/README.md](../../../../sources/llmware-ai__llmware/tests/README.md)<br>[tests/run-tests.py](../../../../sources/llmware-ai__llmware/tests/run-tests.py)<br>[tests/set-env.sh](../../../../sources/llmware-ai__llmware/tests/set-env.sh)<br>[tests/utils.py](../../../../sources/llmware-ai__llmware/tests/utils.py)<br>[tests/retrieval/test_search_in_memory.py](../../../../sources/llmware-ai__llmware/tests/retrieval/test_search_in_memory.py)<br>[tests/models/test_agent_llmfx_process.py](../../../../sources/llmware-ai__llmware/tests/models/test_agent_llmfx_process.py) |
| CI workflow | 1 | [.github/workflows/pages.yml](../../../../sources/llmware-ai__llmware/.github/workflows/pages.yml) |
| 컨테이너/배포 | 8 | [scripts/docker/docker-compose_mongo_milvus.yaml](../../../../sources/llmware-ai__llmware/scripts/docker/docker-compose_mongo_milvus.yaml)<br>[scripts/docker/docker-compose-neo4j.yaml](../../../../sources/llmware-ai__llmware/scripts/docker/docker-compose-neo4j.yaml)<br>[scripts/docker/docker-compose-pgvector.yaml](../../../../sources/llmware-ai__llmware/scripts/docker/docker-compose-pgvector.yaml)<br>[scripts/docker/docker-compose-qdrant.yaml](../../../../sources/llmware-ai__llmware/scripts/docker/docker-compose-qdrant.yaml)<br>[scripts/docker/docker-compose-redis-stack.yaml](../../../../sources/llmware-ai__llmware/scripts/docker/docker-compose-redis-stack.yaml)<br>[scripts/docker/docker-compose.yaml](../../../../sources/llmware-ai__llmware/scripts/docker/docker-compose.yaml) |
| 보안/정책 | 1 | [repo_docs/SECURITY.md](../../../../sources/llmware-ai__llmware/repo_docs/SECURITY.md) |
| 에이전트 지시문 | 2 | [docs/examples/agents.md](../../../../sources/llmware-ai__llmware/docs/examples/agents.md)<br>[docs/components/agents.md](../../../../sources/llmware-ai__llmware/docs/components/agents.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | path scan에서 primary entrypoint가 명확하지 않음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `tutorials/notebooks/quickstart_rag_colab.ipynb`, `tutorials/notebooks/NoteBook_Examples/ner_retrieval.ipynb`, `tutorials/notebooks/fast_start_examples/example_4_rag_text_query.ipynb`.
2. agent/tool runtime 매핑: `tutorials/notebooks/Agents_01.ipynb`, `tutorials/notebooks/Agents_02.ipynb`, `tutorials/notebooks/Agents_03.ipynb`.
3. retrieval/memory/indexing 확인: `tutorials/notebooks/quickstart_rag_colab.ipynb`, `tutorials/notebooks/NoteBook_Examples/ner_retrieval.ipynb`, `tutorials/notebooks/fast_start_examples/example_4_rag_text_query.ipynb`.
4. test/eval 파일로 동작 검증: `tests/README.md`, `tests/run-tests.py`, `tests/set-env.sh`.

## 기존 레포 인사이트

LLM 위키/RAG/지식베이스 관점에서 Unified framework for building enterprise RAG pipelines with small, specialized models. 핵심 구조 신호는 Python, README.md, LICENSE, tests, ci, docs이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 지식/RAG 패턴 참고이고, 후속 확인 포인트는 더 깊은 구조 스캔 필요입니다.
