# google/adk-python 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

An open-source, code-first Python toolkit for building, evaluating, and deploying sophisticated AI agents with flexibility and control.

## 요약

- 조사 단위: `sources/google__adk-python` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 2,155 files, 523 directories, depth score 126, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=tests/unittests/tools/test_load_mcp_resource_tool.py, tests/unittests/tools/mcp_tool/__init__.py, tests/unittests/tools/mcp_tool/test_conversion_utils.py이고, 의존성 단서는 openai, anthropic, claude, mcp, langchain, langgraph, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | google/adk-python |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 20158 |
| Forks | 3582 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/google__adk-python](../../../../sources/google__adk-python) |
| 기존 보고서 | [reports/global-trending/repositories/google__adk-python.md](../../../global-trending/repositories/google__adk-python.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 2155 / 523 |
| 관측 최대 깊이 | 9 |
| 상위 디렉터리 | .agents, .gemini, .github, assets, contributing, docs, scripts, src, tests |
| 상위 확장자 | .py: 1574, .md: 230, .json: 116, .js: 95, .yaml: 40, .yml: 26, .txt: 17, (none): 11, .png: 8, .tf: 7, .html: 5, .db: 3 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 146 |
| src | source boundary | 61 |
| docs | documentation surface | 13 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| contributing | top-level component | 1 |
| scripts | top-level component | 1 |


## 실행 방식

_root manifest에서 추출된 command surface가 없습니다._


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai, anthropic, claude |
| agentProtocols | mcp |
| agentFrameworks | langchain, langgraph, llama-index |
| vectorStores | chroma |
| modelRuntime | llama |
| webRuntime | fastapi |
| developerSurface | click |
| observability | opentelemetry |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
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


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 755 | [tests/__init__.py](../../../../sources/google__adk-python/tests/__init__.py)<br>[tests/unittests/__init__.py](../../../../sources/google__adk-python/tests/unittests/__init__.py)<br>[tests/unittests/conftest.py](../../../../sources/google__adk-python/tests/unittests/conftest.py)<br>[tests/unittests/test_optional_dependencies.py](../../../../sources/google__adk-python/tests/unittests/test_optional_dependencies.py)<br>[tests/unittests/test_release_dependencies.py](../../../../sources/google__adk-python/tests/unittests/test_release_dependencies.py)<br>[tests/unittests/test_runners.py](../../../../sources/google__adk-python/tests/unittests/test_runners.py) |
| CI workflow | 25 | [.github/workflows/analyze-releases-for-adk-docs-updates.yml](../../../../sources/google__adk-python/.github/workflows/analyze-releases-for-adk-docs-updates.yml)<br>[.github/workflows/block-merge.yml](../../../../sources/google__adk-python/.github/workflows/block-merge.yml)<br>[.github/workflows/check-file-contents.yml](../../../../sources/google__adk-python/.github/workflows/check-file-contents.yml)<br>[.github/workflows/copybara-pr-handler.yml](../../../../sources/google__adk-python/.github/workflows/copybara-pr-handler.yml)<br>[.github/workflows/discussion_answering.yml](../../../../sources/google__adk-python/.github/workflows/discussion_answering.yml)<br>[.github/workflows/issue-monitor.yml](../../../../sources/google__adk-python/.github/workflows/issue-monitor.yml) |
| 컨테이너/배포 | 2 | [tests/remote/triggers/test_agent/Dockerfile](../../../../sources/google__adk-python/tests/remote/triggers/test_agent/Dockerfile)<br>[contributing/samples/context_management/postgres_session_service/compose.yml](../../../../sources/google__adk-python/contributing/samples/context_management/postgres_session_service/compose.yml) |
| 보안/정책 | 104 | [tests/unittests/tools/openapi_tool/openapi_spec_parser/test_tool_auth_handler.py](../../../../sources/google__adk-python/tests/unittests/tools/openapi_tool/openapi_spec_parser/test_tool_auth_handler.py)<br>[tests/unittests/tools/openapi_tool/auth/test_auth_helper.py](../../../../sources/google__adk-python/tests/unittests/tools/openapi_tool/auth/test_auth_helper.py)<br>[tests/unittests/tools/openapi_tool/auth/credential_exchangers/test_auto_auth_credential_exchanger.py](../../../../sources/google__adk-python/tests/unittests/tools/openapi_tool/auth/credential_exchangers/test_auto_auth_credential_exchanger.py)<br>[tests/unittests/tools/openapi_tool/auth/credential_exchangers/test_base_auth_credential_exchanger.py](../../../../sources/google__adk-python/tests/unittests/tools/openapi_tool/auth/credential_exchangers/test_base_auth_credential_exchanger.py)<br>[tests/unittests/tools/openapi_tool/auth/credential_exchangers/test_oauth2_exchanger.py](../../../../sources/google__adk-python/tests/unittests/tools/openapi_tool/auth/credential_exchangers/test_oauth2_exchanger.py)<br>[tests/unittests/tools/openapi_tool/auth/credential_exchangers/test_service_account_exchanger.py](../../../../sources/google__adk-python/tests/unittests/tools/openapi_tool/auth/credential_exchangers/test_service_account_exchanger.py) |
| 에이전트 지시문 | 1 | [AGENTS.md](../../../../sources/google__adk-python/AGENTS.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `tests/unittests/tools/test_load_mcp_resource_tool.py`, `tests/unittests/tools/mcp_tool/__init__.py`, `tests/unittests/tools/mcp_tool/test_conversion_utils.py`.
2. entrypoint를 따라 실행 흐름 확인: `tests/unittests/a2a/integration/server.py`, `src/google/adk/cli/__main__.py`, `contributing/samples/tools/pydantic_argument/main.py`.
3. agent/tool runtime 매핑: `AGENTS.md`, `tests/unittests/workflow/__init__.py`, `tests/unittests/workflow/test_agent_node.py`.
4. retrieval/memory/indexing 확인: `tests/unittests/workflow/test_graph.py`, `tests/unittests/workflow/utils/test_workflow_graph_utils.py`, `tests/unittests/tools/test_load_memory_tool.py`.
5. test/eval 파일로 동작 검증: `tests/__init__.py`, `tests/unittests/__init__.py`, `tests/unittests/conftest.py`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 An open source, code first Python toolkit for building, evaluating, and deploying sophisticated AI agents with flexibili. 핵심 구조 신호는 Python, pyproject.toml, README.md, AGENTS.md, LICENSE, openai이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
