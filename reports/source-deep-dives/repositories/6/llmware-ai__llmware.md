# llmware-ai/llmware Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Unified framework for building enterprise RAG pipelines with small, specialized models

## 요약

- 조사 단위: `sources/llmware-ai__llmware` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 546 files, 70 directories, depth score 115, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 agent/tool runtime, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 retrieval=tutorials/notebooks/quickstart_rag_colab.ipynb, tutorials/notebooks/NoteBook_Examples/ner_retrieval.ipynb, tutorials/notebooks/fast_start_examples/example_4_rag_text_query.ipynb이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 knowledge/RAG pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | llmware-ai/llmware |
| Topic | LLM Wiki, RAG, and Knowledge / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | Python |
| Stars | 14837 |
| Forks | 2921 |
| License | Apache-2.0 |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/llmware-ai__llmware](../../../../sources/llmware-ai__llmware) |
| Existing report | [reports/llm-wiki/repositories/llmware-ai__llmware.md](../../../llm-wiki/repositories/llmware-ai__llmware.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 546 / 70 |
| Max observed depth | 7 |
| Top directories | .github, docs, llmware, repo_docs, scripts, solutions, tests, tutorials |
| Top extensions | .py: 232, .md: 68, .dll: 64, .ipynb: 31, .so: 29, .0: 22, .dylib: 19, .1: 12, (none): 8, .yaml: 7, .5: 6, .sh: 5 |
| Source patterns | agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 32 |
| tests | validation surface | 25 |
| .github | ci surface | 1 |
| llmware | top-level component | 1 |
| repo_docs | documentation surface | 1 |
| scripts | top-level component | 1 |
| solutions | top-level component | 1 |
| tutorials | top-level component | 1 |


## How It Runs

_No command surface extracted from root manifests._


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | none |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
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


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 27 | [tutorials/notebooks/Agents_01.ipynb](../../../../sources/llmware-ai__llmware/tutorials/notebooks/Agents_01.ipynb)<br>[tutorials/notebooks/Agents_02.ipynb](../../../../sources/llmware-ai__llmware/tutorials/notebooks/Agents_02.ipynb)<br>[tutorials/notebooks/Agents_03.ipynb](../../../../sources/llmware-ai__llmware/tutorials/notebooks/Agents_03.ipynb)<br>[tutorials/notebooks/NoteBook_Examples/agent_multistep_analysis_nb.ipynb](../../../../sources/llmware-ai__llmware/tutorials/notebooks/NoteBook_Examples/agent_multistep_analysis_nb.ipynb)<br>[tutorials/notebooks/NoteBook_Examples/agent_with_custom_tables_example.ipynb](../../../../sources/llmware-ai__llmware/tutorials/notebooks/NoteBook_Examples/agent_with_custom_tables_example.ipynb)<br>[solutions/use_cases/agent_with_custom_tables.py](../../../../sources/llmware-ai__llmware/solutions/use_cases/agent_with_custom_tables.py)<br>[solutions/slim_agents/agent-llmfx-getting-started.py](../../../../sources/llmware-ai__llmware/solutions/slim_agents/agent-llmfx-getting-started.py)<br>[solutions/slim_agents/agent-multistep-analysis.py](../../../../sources/llmware-ai__llmware/solutions/slim_agents/agent-multistep-analysis.py) |
| mcp | 0 | not obvious |
| retrieval | 49 | [tutorials/notebooks/quickstart_rag_colab.ipynb](../../../../sources/llmware-ai__llmware/tutorials/notebooks/quickstart_rag_colab.ipynb)<br>[tutorials/notebooks/NoteBook_Examples/ner_retrieval.ipynb](../../../../sources/llmware-ai__llmware/tutorials/notebooks/NoteBook_Examples/ner_retrieval.ipynb)<br>[tutorials/notebooks/fast_start_examples/example_4_rag_text_query.ipynb](../../../../sources/llmware-ai__llmware/tutorials/notebooks/fast_start_examples/example_4_rag_text_query.ipynb)<br>[tutorials/notebooks/fast_start_examples/example_5_rag_semantic_query.ipynb](../../../../sources/llmware-ai__llmware/tutorials/notebooks/fast_start_examples/example_5_rag_semantic_query.ipynb)<br>[tutorials/notebooks/fast_start_examples/example_6_rag_multi_step_query_version_1ipynb.ipynb](../../../../sources/llmware-ai__llmware/tutorials/notebooks/fast_start_examples/example_6_rag_multi_step_query_version_1ipynb.ipynb)<br>[tutorials/notebooks/fast_start_examples/example_6_rag_multi_step_query_version_2.ipynb](../../../../sources/llmware-ai__llmware/tutorials/notebooks/fast_start_examples/example_6_rag_multi_step_query_version_2.ipynb)<br>[tutorials/notebooks/fast_start_examples/example_6_rag_multi_step_query_version_3.ipynb](../../../../sources/llmware-ai__llmware/tutorials/notebooks/fast_start_examples/example_6_rag_multi_step_query_version_3.ipynb)<br>[tests/retrieval/test_search_in_memory.py](../../../../sources/llmware-ai__llmware/tests/retrieval/test_search_in_memory.py) |
| spec | 3 | [solutions/use_cases/lecture_tool/requirements.txt](../../../../sources/llmware-ai__llmware/solutions/use_cases/lecture_tool/requirements.txt)<br>[llmware/requirements_extras.txt](../../../../sources/llmware-ai__llmware/llmware/requirements_extras.txt)<br>[llmware/requirements.txt](../../../../sources/llmware-ai__llmware/llmware/requirements.txt) |
| eval | 26 | [tests/README.md](../../../../sources/llmware-ai__llmware/tests/README.md)<br>[tests/run-tests.py](../../../../sources/llmware-ai__llmware/tests/run-tests.py)<br>[tests/set-env.sh](../../../../sources/llmware-ai__llmware/tests/set-env.sh)<br>[tests/utils.py](../../../../sources/llmware-ai__llmware/tests/utils.py)<br>[tests/retrieval/test_search_in_memory.py](../../../../sources/llmware-ai__llmware/tests/retrieval/test_search_in_memory.py)<br>[tests/models/test_agent_llmfx_process.py](../../../../sources/llmware-ai__llmware/tests/models/test_agent_llmfx_process.py)<br>[tests/models/test_cloud_model_providers.py](../../../../sources/llmware-ai__llmware/tests/models/test_cloud_model_providers.py)<br>[tests/models/test_cohere_command_r_model.py](../../../../sources/llmware-ai__llmware/tests/models/test_cohere_command_r_model.py) |
| security | 1 | [repo_docs/SECURITY.md](../../../../sources/llmware-ai__llmware/repo_docs/SECURITY.md) |
| ci | 1 | [.github/workflows/pages.yml](../../../../sources/llmware-ai__llmware/.github/workflows/pages.yml) |
| container | 8 | [scripts/docker/docker-compose_mongo_milvus.yaml](../../../../sources/llmware-ai__llmware/scripts/docker/docker-compose_mongo_milvus.yaml)<br>[scripts/docker/docker-compose-neo4j.yaml](../../../../sources/llmware-ai__llmware/scripts/docker/docker-compose-neo4j.yaml)<br>[scripts/docker/docker-compose-pgvector.yaml](../../../../sources/llmware-ai__llmware/scripts/docker/docker-compose-pgvector.yaml)<br>[scripts/docker/docker-compose-qdrant.yaml](../../../../sources/llmware-ai__llmware/scripts/docker/docker-compose-qdrant.yaml)<br>[scripts/docker/docker-compose-redis-stack.yaml](../../../../sources/llmware-ai__llmware/scripts/docker/docker-compose-redis-stack.yaml)<br>[scripts/docker/docker-compose.yaml](../../../../sources/llmware-ai__llmware/scripts/docker/docker-compose.yaml)<br>[scripts/docker/Dockerfile](../../../../sources/llmware-ai__llmware/scripts/docker/Dockerfile)<br>[scripts/devcontainer/docker-compose.yaml](../../../../sources/llmware-ai__llmware/scripts/devcontainer/docker-compose.yaml) |
| instruction | 2 | [docs/examples/agents.md](../../../../sources/llmware-ai__llmware/docs/examples/agents.md)<br>[docs/components/agents.md](../../../../sources/llmware-ai__llmware/docs/components/agents.md) |
| docs | 76 | [README.md](../../../../sources/llmware-ai__llmware/README.md)<br>[tutorials/notebooks/README.md](../../../../sources/llmware-ai__llmware/tutorials/notebooks/README.md)<br>[tutorials/getting_started/README.md](../../../../sources/llmware-ai__llmware/tutorials/getting_started/README.md)<br>[tests/README.md](../../../../sources/llmware-ai__llmware/tests/README.md)<br>[solutions/README.md](../../../../sources/llmware-ai__llmware/solutions/README.md)<br>[solutions/use_cases/README.md](../../../../sources/llmware-ai__llmware/solutions/use_cases/README.md)<br>[solutions/use_cases/lecture_tool/README.md](../../../../sources/llmware-ai__llmware/solutions/use_cases/lecture_tool/README.md)<br>[solutions/sources/README.md](../../../../sources/llmware-ai__llmware/solutions/sources/README.md) |
| config | 3 | [solutions/use_cases/lecture_tool/requirements.txt](../../../../sources/llmware-ai__llmware/solutions/use_cases/lecture_tool/requirements.txt)<br>[llmware/requirements_extras.txt](../../../../sources/llmware-ai__llmware/llmware/requirements_extras.txt)<br>[llmware/requirements.txt](../../../../sources/llmware-ai__llmware/llmware/requirements.txt) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 26 | [tests/README.md](../../../../sources/llmware-ai__llmware/tests/README.md)<br>[tests/run-tests.py](../../../../sources/llmware-ai__llmware/tests/run-tests.py)<br>[tests/set-env.sh](../../../../sources/llmware-ai__llmware/tests/set-env.sh)<br>[tests/utils.py](../../../../sources/llmware-ai__llmware/tests/utils.py)<br>[tests/retrieval/test_search_in_memory.py](../../../../sources/llmware-ai__llmware/tests/retrieval/test_search_in_memory.py)<br>[tests/models/test_agent_llmfx_process.py](../../../../sources/llmware-ai__llmware/tests/models/test_agent_llmfx_process.py) |
| CI workflows | 1 | [.github/workflows/pages.yml](../../../../sources/llmware-ai__llmware/.github/workflows/pages.yml) |
| Containers / deploy | 8 | [scripts/docker/docker-compose_mongo_milvus.yaml](../../../../sources/llmware-ai__llmware/scripts/docker/docker-compose_mongo_milvus.yaml)<br>[scripts/docker/docker-compose-neo4j.yaml](../../../../sources/llmware-ai__llmware/scripts/docker/docker-compose-neo4j.yaml)<br>[scripts/docker/docker-compose-pgvector.yaml](../../../../sources/llmware-ai__llmware/scripts/docker/docker-compose-pgvector.yaml)<br>[scripts/docker/docker-compose-qdrant.yaml](../../../../sources/llmware-ai__llmware/scripts/docker/docker-compose-qdrant.yaml)<br>[scripts/docker/docker-compose-redis-stack.yaml](../../../../sources/llmware-ai__llmware/scripts/docker/docker-compose-redis-stack.yaml)<br>[scripts/docker/docker-compose.yaml](../../../../sources/llmware-ai__llmware/scripts/docker/docker-compose.yaml) |
| Security / policy | 1 | [repo_docs/SECURITY.md](../../../../sources/llmware-ai__llmware/repo_docs/SECURITY.md) |
| Agent instructions | 2 | [docs/examples/agents.md](../../../../sources/llmware-ai__llmware/docs/examples/agents.md)<br>[docs/components/agents.md](../../../../sources/llmware-ai__llmware/docs/components/agents.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | none |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `tutorials/notebooks/quickstart_rag_colab.ipynb`, `tutorials/notebooks/NoteBook_Examples/ner_retrieval.ipynb`, `tutorials/notebooks/fast_start_examples/example_4_rag_text_query.ipynb`.
2. Map agent/tool runtime through: `tutorials/notebooks/Agents_01.ipynb`, `tutorials/notebooks/Agents_02.ipynb`, `tutorials/notebooks/Agents_03.ipynb`.
3. Inspect retrieval/memory/indexing through: `tutorials/notebooks/quickstart_rag_colab.ipynb`, `tutorials/notebooks/NoteBook_Examples/ner_retrieval.ipynb`, `tutorials/notebooks/fast_start_examples/example_4_rag_text_query.ipynb`.
4. Verify behavior through test/eval files: `tests/README.md`, `tests/run-tests.py`, `tests/set-env.sh`.

## Existing Repository Insight

LLM 위키/RAG/지식베이스 관점에서 Unified framework for building enterprise RAG pipelines with small, specialized models. 핵심 구조 신호는 Python, README.md, LICENSE, tests, ci, docs이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 knowledge/RAG pattern reference이고, 후속 확인 포인트는 needs deeper structural scan입니다.
