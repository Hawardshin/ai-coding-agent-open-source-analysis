# topoteretes/cognee Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Cognee is the open-source AI memory platform for agents. Give your AI agents persistent long-term memory across sessions with a self-hosted knowledge graph engine.

## 요약

- 조사 단위: `sources/topoteretes__cognee` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 2,290 files, 569 directories, depth score 132, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 retrieval=examples/pocs/disambiguation/extract_graph_from_data_with_entity_disambiguation.py, examples/guides/agent_memory_quickstart.py, examples/guides/custom_graph_model.py이고, 의존성 단서는 openai, anthropic, mcp, langchain, llama-index, fastapi, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 knowledge/RAG pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | topoteretes/cognee |
| Topic | LLM Wiki, RAG, and Knowledge / LLM 위키/RAG/지식베이스 |
| Region | global |
| Language | Python |
| Stars | 17885 |
| Forks | 1896 |
| License | none |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/topoteretes__cognee](../../../../sources/topoteretes__cognee) |
| Existing report | [reports/global-trending/repositories/topoteretes__cognee.md](../../../global-trending/repositories/topoteretes__cognee.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 2290 / 569 |
| Max observed depth | 8 |
| Top directories | .devcontainer, .github, assets, bin, cognee, cognee_db_workers, cognee-frontend, cognee-mcp, cognee-starter-kit, deployment, distributed, evals, examples, kuzu, licenses, logs, notebooks, temp, tools, working_dir_error_replication |
| Top extensions | .py: 1577, .tsx: 157, .txt: 101, .ts: 80, .json: 68, .md: 57, .yml: 54, .png: 35, .svg: 29, (none): 23, .yaml: 14, .sh: 9 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| examples/demos | examples workspace | 11 |
| examples/guides | examples workspace | 4 |
| examples/pocs | examples workspace | 4 |
| examples/configurations | examples workspace | 3 |
| .devcontainer | deployment surface | 1 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| bin | top-level component | 1 |
| cognee | top-level component | 1 |
| cognee_db_workers | top-level component | 1 |
| cognee-frontend | top-level component | 1 |
| cognee-mcp | top-level component | 1 |
| cognee-starter-kit | top-level component | 1 |
| deployment | deployment surface | 1 |
| distributed | top-level component | 1 |
| evals | top-level component | 1 |
| examples | top-level component | 1 |
| examples/custom_pipelines | examples workspace | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | pyproject.toml | cognee-cli | cognee-cli |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai, anthropic |
| agentProtocols | mcp |
| agentFrameworks | langchain, llama-index |
| vectorStores | chroma, pgvector |
| modelRuntime | transformers, ollama, llama |
| webRuntime | fastapi |
| developerSurface | none |
| observability | opentelemetry |
| browserAutomation | playwright |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| retrieval | [examples/pocs/disambiguation/extract_graph_from_data_with_entity_disambiguation.py](../../../../sources/topoteretes__cognee/examples/pocs/disambiguation/extract_graph_from_data_with_entity_disambiguation.py) | retrieval signal |
| retrieval | [examples/guides/agent_memory_quickstart.py](../../../../sources/topoteretes__cognee/examples/guides/agent_memory_quickstart.py) | retrieval signal |
| retrieval | [examples/guides/custom_graph_model.py](../../../../sources/topoteretes__cognee/examples/guides/custom_graph_model.py) | retrieval signal |
| retrieval | [examples/guides/graph_visualization.py](../../../../sources/topoteretes__cognee/examples/guides/graph_visualization.py) | retrieval signal |
| entrypoints | [cognee-mcp/src/server.py](../../../../sources/topoteretes__cognee/cognee-mcp/src/server.py) | entrypoints signal |
| entrypoints | [cognee-mcp/apps-src/src/main.tsx](../../../../sources/topoteretes__cognee/cognee-mcp/apps-src/src/main.tsx) | entrypoints signal |
| entrypoints | [cognee/__main__.py](../../../../sources/topoteretes__cognee/cognee/__main__.py) | entrypoints signal |
| entrypoints | [bin/dockerize](../../../../sources/topoteretes__cognee/bin/dockerize) | entrypoints signal |
| docs | [README_ko.md](../../../../sources/topoteretes__cognee/README_ko.md) | docs signal |
| docs | [README.md](../../../../sources/topoteretes__cognee/README.md) | docs signal |
| docs | [logs/README.md](../../../../sources/topoteretes__cognee/logs/README.md) | docs signal |
| docs | [licenses/README.md](../../../../sources/topoteretes__cognee/licenses/README.md) | docs signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 5 | [cognee-mcp/src/server.py](../../../../sources/topoteretes__cognee/cognee-mcp/src/server.py)<br>[cognee-mcp/apps-src/src/main.tsx](../../../../sources/topoteretes__cognee/cognee-mcp/apps-src/src/main.tsx)<br>[cognee/__main__.py](../../../../sources/topoteretes__cognee/cognee/__main__.py)<br>[bin/dockerize](../../../../sources/topoteretes__cognee/bin/dockerize)<br>[bin/generate-release-notes](../../../../sources/topoteretes__cognee/bin/generate-release-notes) |
| agentRuntime | 73 | [AGENTS.md](../../../../sources/topoteretes__cognee/AGENTS.md)<br>[tools/assess_branch_notes.py](../../../../sources/topoteretes__cognee/tools/assess_branch_notes.py)<br>[tools/check-lockfile.py](../../../../sources/topoteretes__cognee/tools/check-lockfile.py)<br>[tools/check-package.sh](../../../../sources/topoteretes__cognee/tools/check-package.sh)<br>[tools/generate_branch_notes.py](../../../../sources/topoteretes__cognee/tools/generate_branch_notes.py)<br>[tools/generate_release_notes.py](../../../../sources/topoteretes__cognee/tools/generate_release_notes.py)<br>[tools/merge_branch_diff.py](../../../../sources/topoteretes__cognee/tools/merge_branch_diff.py)<br>[tools/poetry-deps.sh](../../../../sources/topoteretes__cognee/tools/poetry-deps.sh) |
| mcp | 28 | [cognee-mcp/Dockerfile](../../../../sources/topoteretes__cognee/cognee-mcp/Dockerfile)<br>[cognee-mcp/entrypoint.sh](../../../../sources/topoteretes__cognee/cognee-mcp/entrypoint.sh)<br>[cognee-mcp/pyproject.toml](../../../../sources/topoteretes__cognee/cognee-mcp/pyproject.toml)<br>[cognee-mcp/README.md](../../../../sources/topoteretes__cognee/cognee-mcp/README.md)<br>[cognee-mcp/uv.lock](../../../../sources/topoteretes__cognee/cognee-mcp/uv.lock)<br>[cognee-mcp/tests/test_mcp_server_hardening.py](../../../../sources/topoteretes__cognee/cognee-mcp/tests/test_mcp_server_hardening.py)<br>[cognee-mcp/src/__init__.py](../../../../sources/topoteretes__cognee/cognee-mcp/src/__init__.py)<br>[cognee-mcp/src/client.py](../../../../sources/topoteretes__cognee/cognee-mcp/src/client.py) |
| retrieval | 399 | [examples/pocs/disambiguation/extract_graph_from_data_with_entity_disambiguation.py](../../../../sources/topoteretes__cognee/examples/pocs/disambiguation/extract_graph_from_data_with_entity_disambiguation.py)<br>[examples/guides/agent_memory_quickstart.py](../../../../sources/topoteretes__cognee/examples/guides/agent_memory_quickstart.py)<br>[examples/guides/custom_graph_model.py](../../../../sources/topoteretes__cognee/examples/guides/custom_graph_model.py)<br>[examples/guides/graph_visualization.py](../../../../sources/topoteretes__cognee/examples/guides/graph_visualization.py)<br>[examples/demos/custom_graph_model_entity_schema_definition.py](../../../../sources/topoteretes__cognee/examples/demos/custom_graph_model_entity_schema_definition.py)<br>[examples/demos/global_context_index_smoke_demo.py](../../../../sources/topoteretes__cognee/examples/demos/global_context_index_smoke_demo.py)<br>[examples/demos/session_feedback_lifecycle_demo/frontend/index.html](../../../../sources/topoteretes__cognee/examples/demos/session_feedback_lifecycle_demo/frontend/index.html)<br>[examples/custom_pipelines/relational_database_to_knowledge_graph_migration_example.py](../../../../sources/topoteretes__cognee/examples/custom_pipelines/relational_database_to_knowledge_graph_migration_example.py) |
| spec | 2 | [evals/requirements.txt](../../../../sources/topoteretes__cognee/evals/requirements.txt)<br>[cognee-mcp/apps-src/src/design.css](../../../../sources/topoteretes__cognee/cognee-mcp/apps-src/src/design.css) |
| eval | 490 | [working_dir_error_replication/run_subprocess_test.py](../../../../sources/topoteretes__cognee/working_dir_error_replication/run_subprocess_test.py)<br>[examples/pocs/prefetch_disambiguation/data/example2/part_002_dedup_test.txt](../../../../sources/topoteretes__cognee/examples/pocs/prefetch_disambiguation/data/example2/part_002_dedup_test.txt)<br>[examples/pocs/post_extraction_canonicalization/data/example2/part_002_dedup_test.txt](../../../../sources/topoteretes__cognee/examples/pocs/post_extraction_canonicalization/data/example2/part_002_dedup_test.txt)<br>[examples/demos/test_data/employees_ontology.owl](../../../../sources/topoteretes__cognee/examples/demos/test_data/employees_ontology.owl)<br>[examples/demos/test_data/employees.csv](../../../../sources/topoteretes__cognee/examples/demos/test_data/employees.csv)<br>[evals/benchmark_summary_cognee.json](../../../../sources/topoteretes__cognee/evals/benchmark_summary_cognee.json)<br>[evals/benchmark_summary_competition.json](../../../../sources/topoteretes__cognee/evals/benchmark_summary_competition.json)<br>[evals/src/create_benchmark_summary_json.py](../../../../sources/topoteretes__cognee/evals/src/create_benchmark_summary_json.py) |
| security | 36 | [SECURITY.md](../../../../sources/topoteretes__cognee/SECURITY.md)<br>[distributed/deploy/daytona_sandbox.py](../../../../sources/topoteretes__cognee/distributed/deploy/daytona_sandbox.py)<br>[cognee-frontend/src/ui/elements/Auth/AuthFormContainer.tsx](../../../../sources/topoteretes__cognee/cognee-frontend/src/ui/elements/Auth/AuthFormContainer.tsx)<br>[cognee-frontend/src/ui/elements/Auth/AuthPageContainer.tsx](../../../../sources/topoteretes__cognee/cognee-frontend/src/ui/elements/Auth/AuthPageContainer.tsx)<br>[cognee-frontend/src/ui/elements/Auth/index.ts](../../../../sources/topoteretes__cognee/cognee-frontend/src/ui/elements/Auth/index.ts)<br>[cognee-frontend/src/ui/elements/Auth/OAuthLoginButtons.tsx](../../../../sources/topoteretes__cognee/cognee-frontend/src/ui/elements/Auth/OAuthLoginButtons.tsx)<br>[cognee-frontend/src/ui/elements/Auth/ContentSections/AuthContentSectionCarousel.tsx](../../../../sources/topoteretes__cognee/cognee-frontend/src/ui/elements/Auth/ContentSections/AuthContentSectionCarousel.tsx)<br>[cognee-frontend/src/ui/elements/Auth/ContentSections/BuildSmarterAgentsYourWaySection.tsx](../../../../sources/topoteretes__cognee/cognee-frontend/src/ui/elements/Auth/ContentSections/BuildSmarterAgentsYourWaySection.tsx) |
| ci | 45 | [.github/workflows/adapter_caching_tests.yml](../../../../sources/topoteretes__cognee/.github/workflows/adapter_caching_tests.yml)<br>[.github/workflows/approve_dco.yaml](../../../../sources/topoteretes__cognee/.github/workflows/approve_dco.yaml)<br>[.github/workflows/backend_docker_build_test.yml](../../../../sources/topoteretes__cognee/.github/workflows/backend_docker_build_test.yml)<br>[.github/workflows/basic_tests.yml](../../../../sources/topoteretes__cognee/.github/workflows/basic_tests.yml)<br>[.github/workflows/clean_stale_pr.yaml](../../../../sources/topoteretes__cognee/.github/workflows/clean_stale_pr.yaml)<br>[.github/workflows/cli_tests.yml](../../../../sources/topoteretes__cognee/.github/workflows/cli_tests.yml)<br>[.github/workflows/community_greetings.yml](../../../../sources/topoteretes__cognee/.github/workflows/community_greetings.yml)<br>[.github/workflows/community_tests.yml](../../../../sources/topoteretes__cognee/.github/workflows/community_tests.yml) |
| container | 31 | [docker-compose.yml](../../../../sources/topoteretes__cognee/docker-compose.yml)<br>[Dockerfile](../../../../sources/topoteretes__cognee/Dockerfile)<br>[Dockerfile.ci](../../../../sources/topoteretes__cognee/Dockerfile.ci)<br>[evals/src/modal_apps/Dockerfile.neo4j-custom](../../../../sources/topoteretes__cognee/evals/src/modal_apps/Dockerfile.neo4j-custom)<br>[distributed/Dockerfile](../../../../sources/topoteretes__cognee/distributed/Dockerfile)<br>[distributed/deploy/daytona_sandbox.py](../../../../sources/topoteretes__cognee/distributed/deploy/daytona_sandbox.py)<br>[distributed/deploy/daytona.yaml](../../../../sources/topoteretes__cognee/distributed/deploy/daytona.yaml)<br>[distributed/deploy/devcontainer.json](../../../../sources/topoteretes__cognee/distributed/deploy/devcontainer.json) |
| instruction | 2 | [AGENTS.md](../../../../sources/topoteretes__cognee/AGENTS.md)<br>[CLAUDE.md](../../../../sources/topoteretes__cognee/CLAUDE.md) |
| docs | 23 | [README_ko.md](../../../../sources/topoteretes__cognee/README_ko.md)<br>[README.md](../../../../sources/topoteretes__cognee/README.md)<br>[logs/README.md](../../../../sources/topoteretes__cognee/logs/README.md)<br>[licenses/README.md](../../../../sources/topoteretes__cognee/licenses/README.md)<br>[examples/README.md](../../../../sources/topoteretes__cognee/examples/README.md)<br>[examples/pocs/disambiguation/README.md](../../../../sources/topoteretes__cognee/examples/pocs/disambiguation/README.md)<br>[evals/README.md](../../../../sources/topoteretes__cognee/evals/README.md)<br>[evals/old/comparative_eval/README.md](../../../../sources/topoteretes__cognee/evals/old/comparative_eval/README.md) |
| config | 12 | [poetry.lock](../../../../sources/topoteretes__cognee/poetry.lock)<br>[pyproject.toml](../../../../sources/topoteretes__cognee/pyproject.toml)<br>[uv.lock](../../../../sources/topoteretes__cognee/uv.lock)<br>[evals/requirements.txt](../../../../sources/topoteretes__cognee/evals/requirements.txt)<br>[evals/src/pyproject.toml](../../../../sources/topoteretes__cognee/evals/src/pyproject.toml)<br>[cognee-starter-kit/pyproject.toml](../../../../sources/topoteretes__cognee/cognee-starter-kit/pyproject.toml)<br>[cognee-mcp/pyproject.toml](../../../../sources/topoteretes__cognee/cognee-mcp/pyproject.toml)<br>[cognee-mcp/uv.lock](../../../../sources/topoteretes__cognee/cognee-mcp/uv.lock) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 490 | [working_dir_error_replication/run_subprocess_test.py](../../../../sources/topoteretes__cognee/working_dir_error_replication/run_subprocess_test.py)<br>[examples/pocs/prefetch_disambiguation/data/example2/part_002_dedup_test.txt](../../../../sources/topoteretes__cognee/examples/pocs/prefetch_disambiguation/data/example2/part_002_dedup_test.txt)<br>[examples/pocs/post_extraction_canonicalization/data/example2/part_002_dedup_test.txt](../../../../sources/topoteretes__cognee/examples/pocs/post_extraction_canonicalization/data/example2/part_002_dedup_test.txt)<br>[examples/demos/test_data/employees_ontology.owl](../../../../sources/topoteretes__cognee/examples/demos/test_data/employees_ontology.owl)<br>[examples/demos/test_data/employees.csv](../../../../sources/topoteretes__cognee/examples/demos/test_data/employees.csv)<br>[evals/benchmark_summary_cognee.json](../../../../sources/topoteretes__cognee/evals/benchmark_summary_cognee.json) |
| CI workflows | 45 | [.github/workflows/adapter_caching_tests.yml](../../../../sources/topoteretes__cognee/.github/workflows/adapter_caching_tests.yml)<br>[.github/workflows/approve_dco.yaml](../../../../sources/topoteretes__cognee/.github/workflows/approve_dco.yaml)<br>[.github/workflows/backend_docker_build_test.yml](../../../../sources/topoteretes__cognee/.github/workflows/backend_docker_build_test.yml)<br>[.github/workflows/basic_tests.yml](../../../../sources/topoteretes__cognee/.github/workflows/basic_tests.yml)<br>[.github/workflows/clean_stale_pr.yaml](../../../../sources/topoteretes__cognee/.github/workflows/clean_stale_pr.yaml)<br>[.github/workflows/cli_tests.yml](../../../../sources/topoteretes__cognee/.github/workflows/cli_tests.yml) |
| Containers / deploy | 31 | [docker-compose.yml](../../../../sources/topoteretes__cognee/docker-compose.yml)<br>[Dockerfile](../../../../sources/topoteretes__cognee/Dockerfile)<br>[Dockerfile.ci](../../../../sources/topoteretes__cognee/Dockerfile.ci)<br>[evals/src/modal_apps/Dockerfile.neo4j-custom](../../../../sources/topoteretes__cognee/evals/src/modal_apps/Dockerfile.neo4j-custom)<br>[distributed/Dockerfile](../../../../sources/topoteretes__cognee/distributed/Dockerfile)<br>[distributed/deploy/daytona_sandbox.py](../../../../sources/topoteretes__cognee/distributed/deploy/daytona_sandbox.py) |
| Security / policy | 36 | [SECURITY.md](../../../../sources/topoteretes__cognee/SECURITY.md)<br>[distributed/deploy/daytona_sandbox.py](../../../../sources/topoteretes__cognee/distributed/deploy/daytona_sandbox.py)<br>[cognee-frontend/src/ui/elements/Auth/AuthFormContainer.tsx](../../../../sources/topoteretes__cognee/cognee-frontend/src/ui/elements/Auth/AuthFormContainer.tsx)<br>[cognee-frontend/src/ui/elements/Auth/AuthPageContainer.tsx](../../../../sources/topoteretes__cognee/cognee-frontend/src/ui/elements/Auth/AuthPageContainer.tsx)<br>[cognee-frontend/src/ui/elements/Auth/index.ts](../../../../sources/topoteretes__cognee/cognee-frontend/src/ui/elements/Auth/index.ts)<br>[cognee-frontend/src/ui/elements/Auth/OAuthLoginButtons.tsx](../../../../sources/topoteretes__cognee/cognee-frontend/src/ui/elements/Auth/OAuthLoginButtons.tsx) |
| Agent instructions | 2 | [AGENTS.md](../../../../sources/topoteretes__cognee/AGENTS.md)<br>[CLAUDE.md](../../../../sources/topoteretes__cognee/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | many top-level directories; module boundaries need review |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `examples/pocs/disambiguation/extract_graph_from_data_with_entity_disambiguation.py`, `examples/guides/agent_memory_quickstart.py`, `examples/guides/custom_graph_model.py`.
2. Trace execution through entrypoints: `cognee-mcp/src/server.py`, `cognee-mcp/apps-src/src/main.tsx`, `cognee/__main__.py`.
3. Map agent/tool runtime through: `AGENTS.md`, `tools/assess_branch_notes.py`, `tools/check-lockfile.py`.
4. Inspect retrieval/memory/indexing through: `examples/pocs/disambiguation/extract_graph_from_data_with_entity_disambiguation.py`, `examples/guides/agent_memory_quickstart.py`, `examples/guides/custom_graph_model.py`.
5. Verify behavior through test/eval files: `working_dir_error_replication/run_subprocess_test.py`, `examples/pocs/prefetch_disambiguation/data/example2/part_002_dedup_test.txt`, `examples/pocs/post_extraction_canonicalization/data/example2/part_002_dedup_test.txt`.

## Existing Repository Insight

LLM 위키/RAG/지식베이스 관점에서 Cognee is the open source AI memory platform for agents. Give your AI agents persistent long term memory across sessions. 핵심 구조 신호는 Python, pyproject.toml, Dockerfile, docker-compose.yml, README.md, AGENTS.md이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 knowledge/RAG pattern reference이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
