# google/adk-python Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

An open-source, code-first Python toolkit for building, evaluating, and deploying sophisticated AI agents with flexibility and control.

## 요약

- 조사 단위: `sources/google__adk-python` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 2,155 files, 523 directories, depth score 132, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=tests/unittests/tools/test_load_mcp_resource_tool.py, tests/unittests/tools/mcp_tool/__init__.py, tests/unittests/tools/mcp_tool/test_conversion_utils.py이고, 의존성 단서는 openai, anthropic, claude, mcp, langchain, langgraph, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | google/adk-python |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 20158 |
| Forks | 3582 |
| License | none |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/google__adk-python](../../../../sources/google__adk-python) |
| Existing report | [reports/global-trending/repositories/google__adk-python.md](../../../global-trending/repositories/google__adk-python.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 2155 / 523 |
| Max observed depth | 9 |
| Top directories | .agents, .gemini, .github, assets, contributing, docs, scripts, src, tests |
| Top extensions | .py: 1574, .md: 230, .json: 116, .js: 95, .yaml: 40, .yml: 26, .txt: 17, (none): 11, .png: 8, .tf: 7, .html: 5, .db: 3 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 146 |
| src | source boundary | 61 |
| docs | documentation surface | 13 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| contributing | top-level component | 1 |
| scripts | top-level component | 1 |


## How It Runs

_No command surface extracted from root manifests._


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai, anthropic, claude |
| agentProtocols | mcp |
| agentFrameworks | langchain, langgraph, llama-index |
| vectorStores | chroma |
| modelRuntime | llama |
| webRuntime | fastapi |
| developerSurface | click |
| observability | opentelemetry |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [tests/unittests/tools/test_load_mcp_resource_tool.py](../../../../sources/google__adk-python/tests/unittests/tools/test_load_mcp_resource_tool.py) | mcp signal |
| mcp | [tests/unittests/tools/mcp_tool/__init__.py](../../../../sources/google__adk-python/tests/unittests/tools/mcp_tool/__init__.py) | mcp signal |
| mcp | [tests/unittests/tools/mcp_tool/test_conversion_utils.py](../../../../sources/google__adk-python/tests/unittests/tools/mcp_tool/test_conversion_utils.py) | mcp signal |
| mcp | [tests/unittests/tools/mcp_tool/test_mcp_session_manager.py](../../../../sources/google__adk-python/tests/unittests/tools/mcp_tool/test_mcp_session_manager.py) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/google__adk-python/AGENTS.md) | agentRuntime signal |
| agentRuntime | [tests/unittests/workflow/__init__.py](../../../../sources/google__adk-python/tests/unittests/workflow/__init__.py) | agentRuntime signal |
| agentRuntime | [tests/unittests/workflow/test_agent_node.py](../../../../sources/google__adk-python/tests/unittests/workflow/test_agent_node.py) | agentRuntime signal |
| agentRuntime | [tests/unittests/workflow/test_agent_transfer.py](../../../../sources/google__adk-python/tests/unittests/workflow/test_agent_transfer.py) | agentRuntime signal |
| entrypoints | [tests/unittests/a2a/integration/server.py](../../../../sources/google__adk-python/tests/unittests/a2a/integration/server.py) | entrypoints signal |
| entrypoints | [src/google/adk/cli/__main__.py](../../../../sources/google__adk-python/src/google/adk/cli/__main__.py) | entrypoints signal |
| entrypoints | [contributing/samples/tools/pydantic_argument/main.py](../../../../sources/google__adk-python/contributing/samples/tools/pydantic_argument/main.py) | entrypoints signal |
| entrypoints | [contributing/samples/plugin/plugin_basic/main.py](../../../../sources/google__adk-python/contributing/samples/plugin/plugin_basic/main.py) | entrypoints signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 39 | [tests/unittests/a2a/integration/server.py](../../../../sources/google__adk-python/tests/unittests/a2a/integration/server.py)<br>[src/google/adk/cli/__main__.py](../../../../sources/google__adk-python/src/google/adk/cli/__main__.py)<br>[contributing/samples/tools/pydantic_argument/main.py](../../../../sources/google__adk-python/contributing/samples/tools/pydantic_argument/main.py)<br>[contributing/samples/plugin/plugin_basic/main.py](../../../../sources/google__adk-python/contributing/samples/plugin/plugin_basic/main.py)<br>[contributing/samples/patterns/json_passing_agent/main.py](../../../../sources/google__adk-python/contributing/samples/patterns/json_passing_agent/main.py)<br>[contributing/samples/patterns/fields_planner/main.py](../../../../sources/google__adk-python/contributing/samples/patterns/fields_planner/main.py)<br>[contributing/samples/multimodal/static_non_text_content/main.py](../../../../sources/google__adk-python/contributing/samples/multimodal/static_non_text_content/main.py)<br>[contributing/samples/models/litellm_streaming/main.py](../../../../sources/google__adk-python/contributing/samples/models/litellm_streaming/main.py) |
| agentRuntime | 866 | [AGENTS.md](../../../../sources/google__adk-python/AGENTS.md)<br>[tests/unittests/workflow/__init__.py](../../../../sources/google__adk-python/tests/unittests/workflow/__init__.py)<br>[tests/unittests/workflow/test_agent_node.py](../../../../sources/google__adk-python/tests/unittests/workflow/test_agent_node.py)<br>[tests/unittests/workflow/test_agent_transfer.py](../../../../sources/google__adk-python/tests/unittests/workflow/test_agent_transfer.py)<br>[tests/unittests/workflow/test_dynamic_node_scheduler.py](../../../../sources/google__adk-python/tests/unittests/workflow/test_dynamic_node_scheduler.py)<br>[tests/unittests/workflow/test_dynamic_use_as_output.py](../../../../sources/google__adk-python/tests/unittests/workflow/test_dynamic_use_as_output.py)<br>[tests/unittests/workflow/test_function_node.py](../../../../sources/google__adk-python/tests/unittests/workflow/test_function_node.py)<br>[tests/unittests/workflow/test_graph.py](../../../../sources/google__adk-python/tests/unittests/workflow/test_graph.py) |
| mcp | 67 | [tests/unittests/tools/test_load_mcp_resource_tool.py](../../../../sources/google__adk-python/tests/unittests/tools/test_load_mcp_resource_tool.py)<br>[tests/unittests/tools/mcp_tool/__init__.py](../../../../sources/google__adk-python/tests/unittests/tools/mcp_tool/__init__.py)<br>[tests/unittests/tools/mcp_tool/test_conversion_utils.py](../../../../sources/google__adk-python/tests/unittests/tools/mcp_tool/test_conversion_utils.py)<br>[tests/unittests/tools/mcp_tool/test_mcp_session_manager.py](../../../../sources/google__adk-python/tests/unittests/tools/mcp_tool/test_mcp_session_manager.py)<br>[tests/unittests/tools/mcp_tool/test_mcp_tool.py](../../../../sources/google__adk-python/tests/unittests/tools/mcp_tool/test_mcp_tool.py)<br>[tests/unittests/tools/mcp_tool/test_mcp_toolset_auth.py](../../../../sources/google__adk-python/tests/unittests/tools/mcp_tool/test_mcp_toolset_auth.py)<br>[tests/unittests/tools/mcp_tool/test_mcp_toolset.py](../../../../sources/google__adk-python/tests/unittests/tools/mcp_tool/test_mcp_toolset.py)<br>[tests/unittests/tools/mcp_tool/test_session_context.py](../../../../sources/google__adk-python/tests/unittests/tools/mcp_tool/test_session_context.py) |
| retrieval | 161 | [tests/unittests/workflow/test_graph.py](../../../../sources/google__adk-python/tests/unittests/workflow/test_graph.py)<br>[tests/unittests/workflow/utils/test_workflow_graph_utils.py](../../../../sources/google__adk-python/tests/unittests/workflow/utils/test_workflow_graph_utils.py)<br>[tests/unittests/tools/test_load_memory_tool.py](../../../../sources/google__adk-python/tests/unittests/tools/test_load_memory_tool.py)<br>[tests/unittests/tools/retrieval/__init__.py](../../../../sources/google__adk-python/tests/unittests/tools/retrieval/__init__.py)<br>[tests/unittests/tools/retrieval/test_base_retrieval_tool.py](../../../../sources/google__adk-python/tests/unittests/tools/retrieval/test_base_retrieval_tool.py)<br>[tests/unittests/tools/retrieval/test_files_retrieval.py](../../../../sources/google__adk-python/tests/unittests/tools/retrieval/test_files_retrieval.py)<br>[tests/unittests/tools/retrieval/test_vertex_ai_rag_retrieval.py](../../../../sources/google__adk-python/tests/unittests/tools/retrieval/test_vertex_ai_rag_retrieval.py)<br>[tests/unittests/memory/test_in_memory_memory_service.py](../../../../sources/google__adk-python/tests/unittests/memory/test_in_memory_memory_service.py) |
| spec | 35 | [tests/unittests/tools/openapi_tool/openapi_spec_parser/test_openapi_spec_parser.py](../../../../sources/google__adk-python/tests/unittests/tools/openapi_tool/openapi_spec_parser/test_openapi_spec_parser.py)<br>[tests/unittests/tools/openapi_tool/openapi_spec_parser/test_openapi_toolset.py](../../../../sources/google__adk-python/tests/unittests/tools/openapi_tool/openapi_spec_parser/test_openapi_toolset.py)<br>[tests/unittests/tools/openapi_tool/openapi_spec_parser/test_operation_parser.py](../../../../sources/google__adk-python/tests/unittests/tools/openapi_tool/openapi_spec_parser/test_operation_parser.py)<br>[tests/unittests/tools/openapi_tool/openapi_spec_parser/test_rest_api_tool.py](../../../../sources/google__adk-python/tests/unittests/tools/openapi_tool/openapi_spec_parser/test_rest_api_tool.py)<br>[tests/unittests/tools/openapi_tool/openapi_spec_parser/test_tool_auth_handler.py](../../../../sources/google__adk-python/tests/unittests/tools/openapi_tool/openapi_spec_parser/test_tool_auth_handler.py)<br>[tests/unittests/tools/openapi_tool/openapi_spec_parser/test.yaml](../../../../sources/google__adk-python/tests/unittests/tools/openapi_tool/openapi_spec_parser/test.yaml)<br>[src/google/adk/tools/openapi_tool/openapi_spec_parser/__init__.py](../../../../sources/google__adk-python/src/google/adk/tools/openapi_tool/openapi_spec_parser/__init__.py)<br>[src/google/adk/tools/openapi_tool/openapi_spec_parser/openapi_spec_parser.py](../../../../sources/google__adk-python/src/google/adk/tools/openapi_tool/openapi_spec_parser/openapi_spec_parser.py) |
| eval | 755 | [tests/__init__.py](../../../../sources/google__adk-python/tests/__init__.py)<br>[tests/unittests/__init__.py](../../../../sources/google__adk-python/tests/unittests/__init__.py)<br>[tests/unittests/conftest.py](../../../../sources/google__adk-python/tests/unittests/conftest.py)<br>[tests/unittests/test_optional_dependencies.py](../../../../sources/google__adk-python/tests/unittests/test_optional_dependencies.py)<br>[tests/unittests/test_release_dependencies.py](../../../../sources/google__adk-python/tests/unittests/test_release_dependencies.py)<br>[tests/unittests/test_runners.py](../../../../sources/google__adk-python/tests/unittests/test_runners.py)<br>[tests/unittests/test_samples.py](../../../../sources/google__adk-python/tests/unittests/test_samples.py)<br>[tests/unittests/testing_utils.py](../../../../sources/google__adk-python/tests/unittests/testing_utils.py) |
| security | 104 | [tests/unittests/tools/openapi_tool/openapi_spec_parser/test_tool_auth_handler.py](../../../../sources/google__adk-python/tests/unittests/tools/openapi_tool/openapi_spec_parser/test_tool_auth_handler.py)<br>[tests/unittests/tools/openapi_tool/auth/test_auth_helper.py](../../../../sources/google__adk-python/tests/unittests/tools/openapi_tool/auth/test_auth_helper.py)<br>[tests/unittests/tools/openapi_tool/auth/credential_exchangers/test_auto_auth_credential_exchanger.py](../../../../sources/google__adk-python/tests/unittests/tools/openapi_tool/auth/credential_exchangers/test_auto_auth_credential_exchanger.py)<br>[tests/unittests/tools/openapi_tool/auth/credential_exchangers/test_base_auth_credential_exchanger.py](../../../../sources/google__adk-python/tests/unittests/tools/openapi_tool/auth/credential_exchangers/test_base_auth_credential_exchanger.py)<br>[tests/unittests/tools/openapi_tool/auth/credential_exchangers/test_oauth2_exchanger.py](../../../../sources/google__adk-python/tests/unittests/tools/openapi_tool/auth/credential_exchangers/test_oauth2_exchanger.py)<br>[tests/unittests/tools/openapi_tool/auth/credential_exchangers/test_service_account_exchanger.py](../../../../sources/google__adk-python/tests/unittests/tools/openapi_tool/auth/credential_exchangers/test_service_account_exchanger.py)<br>[tests/unittests/tools/mcp_tool/test_mcp_toolset_auth.py](../../../../sources/google__adk-python/tests/unittests/tools/mcp_tool/test_mcp_toolset_auth.py)<br>[tests/unittests/tools/apihub_tool/clients/test_secret_client_deprecated.py](../../../../sources/google__adk-python/tests/unittests/tools/apihub_tool/clients/test_secret_client_deprecated.py) |
| ci | 25 | [.github/workflows/analyze-releases-for-adk-docs-updates.yml](../../../../sources/google__adk-python/.github/workflows/analyze-releases-for-adk-docs-updates.yml)<br>[.github/workflows/block-merge.yml](../../../../sources/google__adk-python/.github/workflows/block-merge.yml)<br>[.github/workflows/check-file-contents.yml](../../../../sources/google__adk-python/.github/workflows/check-file-contents.yml)<br>[.github/workflows/copybara-pr-handler.yml](../../../../sources/google__adk-python/.github/workflows/copybara-pr-handler.yml)<br>[.github/workflows/discussion_answering.yml](../../../../sources/google__adk-python/.github/workflows/discussion_answering.yml)<br>[.github/workflows/issue-monitor.yml](../../../../sources/google__adk-python/.github/workflows/issue-monitor.yml)<br>[.github/workflows/mypy-new-errors.yml](../../../../sources/google__adk-python/.github/workflows/mypy-new-errors.yml)<br>[.github/workflows/mypy.yml](../../../../sources/google__adk-python/.github/workflows/mypy.yml) |
| container | 2 | [tests/remote/triggers/test_agent/Dockerfile](../../../../sources/google__adk-python/tests/remote/triggers/test_agent/Dockerfile)<br>[contributing/samples/context_management/postgres_session_service/compose.yml](../../../../sources/google__adk-python/contributing/samples/context_management/postgres_session_service/compose.yml) |
| instruction | 1 | [AGENTS.md](../../../../sources/google__adk-python/AGENTS.md) |
| docs | 158 | [README.md](../../../../sources/google__adk-python/README.md)<br>[tests/remote/triggers/README.md](../../../../sources/google__adk-python/tests/remote/triggers/README.md)<br>[tests/integration/integrations/agent_identity/README.md](../../../../sources/google__adk-python/tests/integration/integrations/agent_identity/README.md)<br>[tests/integration/fixture/bigquery_agent/README.md](../../../../sources/google__adk-python/tests/integration/fixture/bigquery_agent/README.md)<br>[src/google/adk/skills/README.md](../../../../sources/google__adk-python/src/google/adk/skills/README.md)<br>[src/google/adk/sessions/migration/README.md](../../../../sources/google__adk-python/src/google/adk/sessions/migration/README.md)<br>[src/google/adk/labs/README.md](../../../../sources/google__adk-python/src/google/adk/labs/README.md)<br>[src/google/adk/labs/openai/README.md](../../../../sources/google__adk-python/src/google/adk/labs/openai/README.md) |
| config | 7 | [pyproject.toml](../../../../sources/google__adk-python/pyproject.toml)<br>[contributing/samples/multimodal/computer_use/requirements.txt](../../../../sources/google__adk-python/contributing/samples/multimodal/computer_use/requirements.txt)<br>[contributing/samples/integrations/langchain_youtube_search_agent/requirements.txt](../../../../sources/google__adk-python/contributing/samples/integrations/langchain_youtube_search_agent/requirements.txt)<br>[contributing/samples/integrations/gcp_auth/client/requirements.txt](../../../../sources/google__adk-python/contributing/samples/integrations/gcp_auth/client/requirements.txt)<br>[contributing/samples/integrations/authn-adk-all-in-one/requirements.txt](../../../../sources/google__adk-python/contributing/samples/integrations/authn-adk-all-in-one/requirements.txt)<br>[contributing/samples/integrations/authn-adk-all-in-one/adk_agents/requirements.txt](../../../../sources/google__adk-python/contributing/samples/integrations/authn-adk-all-in-one/adk_agents/requirements.txt)<br>[contributing/samples/adk_team/adk_knowledge_agent/requirements.txt](../../../../sources/google__adk-python/contributing/samples/adk_team/adk_knowledge_agent/requirements.txt) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 755 | [tests/__init__.py](../../../../sources/google__adk-python/tests/__init__.py)<br>[tests/unittests/__init__.py](../../../../sources/google__adk-python/tests/unittests/__init__.py)<br>[tests/unittests/conftest.py](../../../../sources/google__adk-python/tests/unittests/conftest.py)<br>[tests/unittests/test_optional_dependencies.py](../../../../sources/google__adk-python/tests/unittests/test_optional_dependencies.py)<br>[tests/unittests/test_release_dependencies.py](../../../../sources/google__adk-python/tests/unittests/test_release_dependencies.py)<br>[tests/unittests/test_runners.py](../../../../sources/google__adk-python/tests/unittests/test_runners.py) |
| CI workflows | 25 | [.github/workflows/analyze-releases-for-adk-docs-updates.yml](../../../../sources/google__adk-python/.github/workflows/analyze-releases-for-adk-docs-updates.yml)<br>[.github/workflows/block-merge.yml](../../../../sources/google__adk-python/.github/workflows/block-merge.yml)<br>[.github/workflows/check-file-contents.yml](../../../../sources/google__adk-python/.github/workflows/check-file-contents.yml)<br>[.github/workflows/copybara-pr-handler.yml](../../../../sources/google__adk-python/.github/workflows/copybara-pr-handler.yml)<br>[.github/workflows/discussion_answering.yml](../../../../sources/google__adk-python/.github/workflows/discussion_answering.yml)<br>[.github/workflows/issue-monitor.yml](../../../../sources/google__adk-python/.github/workflows/issue-monitor.yml) |
| Containers / deploy | 2 | [tests/remote/triggers/test_agent/Dockerfile](../../../../sources/google__adk-python/tests/remote/triggers/test_agent/Dockerfile)<br>[contributing/samples/context_management/postgres_session_service/compose.yml](../../../../sources/google__adk-python/contributing/samples/context_management/postgres_session_service/compose.yml) |
| Security / policy | 104 | [tests/unittests/tools/openapi_tool/openapi_spec_parser/test_tool_auth_handler.py](../../../../sources/google__adk-python/tests/unittests/tools/openapi_tool/openapi_spec_parser/test_tool_auth_handler.py)<br>[tests/unittests/tools/openapi_tool/auth/test_auth_helper.py](../../../../sources/google__adk-python/tests/unittests/tools/openapi_tool/auth/test_auth_helper.py)<br>[tests/unittests/tools/openapi_tool/auth/credential_exchangers/test_auto_auth_credential_exchanger.py](../../../../sources/google__adk-python/tests/unittests/tools/openapi_tool/auth/credential_exchangers/test_auto_auth_credential_exchanger.py)<br>[tests/unittests/tools/openapi_tool/auth/credential_exchangers/test_base_auth_credential_exchanger.py](../../../../sources/google__adk-python/tests/unittests/tools/openapi_tool/auth/credential_exchangers/test_base_auth_credential_exchanger.py)<br>[tests/unittests/tools/openapi_tool/auth/credential_exchangers/test_oauth2_exchanger.py](../../../../sources/google__adk-python/tests/unittests/tools/openapi_tool/auth/credential_exchangers/test_oauth2_exchanger.py)<br>[tests/unittests/tools/openapi_tool/auth/credential_exchangers/test_service_account_exchanger.py](../../../../sources/google__adk-python/tests/unittests/tools/openapi_tool/auth/credential_exchangers/test_service_account_exchanger.py) |
| Agent instructions | 1 | [AGENTS.md](../../../../sources/google__adk-python/AGENTS.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `tests/unittests/tools/test_load_mcp_resource_tool.py`, `tests/unittests/tools/mcp_tool/__init__.py`, `tests/unittests/tools/mcp_tool/test_conversion_utils.py`.
2. Trace execution through entrypoints: `tests/unittests/a2a/integration/server.py`, `src/google/adk/cli/__main__.py`, `contributing/samples/tools/pydantic_argument/main.py`.
3. Map agent/tool runtime through: `AGENTS.md`, `tests/unittests/workflow/__init__.py`, `tests/unittests/workflow/test_agent_node.py`.
4. Inspect retrieval/memory/indexing through: `tests/unittests/workflow/test_graph.py`, `tests/unittests/workflow/utils/test_workflow_graph_utils.py`, `tests/unittests/tools/test_load_memory_tool.py`.
5. Verify behavior through test/eval files: `tests/__init__.py`, `tests/unittests/__init__.py`, `tests/unittests/conftest.py`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 An open source, code first Python toolkit for building, evaluating, and deploying sophisticated AI agents with flexibili. 핵심 구조 신호는 Python, pyproject.toml, README.md, AGENTS.md, LICENSE, openai이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
