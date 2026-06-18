# microsoft/autogen 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

Local clone structure analysis: 1837 files, 482 directories.

## 요약

- 조사 단위: `sources/microsoft__autogen` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 1,837 files, 482 directories, depth score 123, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 mcp=python/packages/autogen-studio/tests/mcp/test_mcp_callbacks.py, python/packages/autogen-studio/tests/mcp/test_mcp_client.py, python/packages/autogen-studio/tests/mcp/test_mcp_integration.py이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | microsoft/autogen |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 59042 |
| Forks | 8905 |
| License | CC-BY-4.0 |
| 성숙도 | 고신호 |
| 근거 수준 | 심층 소스+보고서 |
| 소스 | [sources/microsoft__autogen](../../../../sources/microsoft__autogen) |
| 기존 보고서 | [reports/global-trending/repositories/microsoft__autogen.md](../../../global-trending/repositories/microsoft__autogen.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 1837 / 482 |
| 관측 최대 깊이 | 13 |
| 상위 디렉터리 | .azure, .devcontainer, .github, docs, dotnet, protos, python |
| 상위 확장자 | .py: 546, .cs: 497, .md: 162, .tsx: 96, .csproj: 64, .ipynb: 49, (none): 49, .json: 42, .png: 42, .yaml: 41, .txt: 33, .ts: 29 |
| 소스 패턴 | cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| python/packages/autogen-studio | python package | 86 |
| python/packages/autogen-ext | python package | 56 |
| python/packages/agbench | python package | 17 |
| python/packages/autogen-test-utils | python package | 9 |
| docs | documentation surface | 8 |
| python/packages/component-schema-gen | python package | 3 |
| python/packages/magentic-one-cli | python package | 3 |
| python/packages/autogen-agentchat | python package | 2 |
| python/packages/autogen-core | python package | 2 |
| python/packages/pyautogen | python package | 2 |
| .devcontainer | deployment surface | 1 |
| .github | ci surface | 1 |
| dotnet | top-level component | 1 |
| protos | top-level component | 1 |
| python | top-level component | 1 |
| python/packages/autogen-magentic-one | python package | 1 |


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
| mcp | [python/packages/autogen-studio/tests/mcp/test_mcp_callbacks.py](../../../../sources/microsoft__autogen/python/packages/autogen-studio/tests/mcp/test_mcp_callbacks.py) | mcp signal |
| mcp | [python/packages/autogen-studio/tests/mcp/test_mcp_client.py](../../../../sources/microsoft__autogen/python/packages/autogen-studio/tests/mcp/test_mcp_client.py) | mcp signal |
| mcp | [python/packages/autogen-studio/tests/mcp/test_mcp_integration.py](../../../../sources/microsoft__autogen/python/packages/autogen-studio/tests/mcp/test_mcp_integration.py) | mcp signal |
| mcp | [python/packages/autogen-studio/tests/mcp/test_mcp_websocket.py](../../../../sources/microsoft__autogen/python/packages/autogen-studio/tests/mcp/test_mcp_websocket.py) | mcp signal |
| agentRuntime | [python/templates/new-package/hooks/post_gen_project.py](../../../../sources/microsoft__autogen/python/templates/new-package/hooks/post_gen_project.py) | agentRuntime signal |
| agentRuntime | [python/templates/new-package/hooks/pre_gen_project.py](../../../../sources/microsoft__autogen/python/templates/new-package/hooks/pre_gen_project.py) | agentRuntime signal |
| agentRuntime | [python/samples/core_xlang_hello_python_agent/protos/agent_events_pb2_grpc.py](../../../../sources/microsoft__autogen/python/samples/core_xlang_hello_python_agent/protos/agent_events_pb2_grpc.py) | agentRuntime signal |
| agentRuntime | [python/samples/core_xlang_hello_python_agent/protos/agent_events_pb2_grpc.pyi](../../../../sources/microsoft__autogen/python/samples/core_xlang_hello_python_agent/protos/agent_events_pb2_grpc.pyi) | agentRuntime signal |
| entrypoints | [python/samples/gitty/src/gitty/__main__.py](../../../../sources/microsoft__autogen/python/samples/gitty/src/gitty/__main__.py) | entrypoints signal |
| entrypoints | [python/samples/core_chess_game/main.py](../../../../sources/microsoft__autogen/python/samples/core_chess_game/main.py) | entrypoints signal |
| entrypoints | [python/samples/core_async_human_in_the_loop/main.py](../../../../sources/microsoft__autogen/python/samples/core_async_human_in_the_loop/main.py) | entrypoints signal |
| entrypoints | [python/samples/agentchat_streamlit/main.py](../../../../sources/microsoft__autogen/python/samples/agentchat_streamlit/main.py) | entrypoints signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 12 | [python/samples/gitty/src/gitty/__main__.py](../../../../sources/microsoft__autogen/python/samples/gitty/src/gitty/__main__.py)<br>[python/samples/core_chess_game/main.py](../../../../sources/microsoft__autogen/python/samples/core_chess_game/main.py)<br>[python/samples/core_async_human_in_the_loop/main.py](../../../../sources/microsoft__autogen/python/samples/core_async_human_in_the_loop/main.py)<br>[python/samples/agentchat_streamlit/main.py](../../../../sources/microsoft__autogen/python/samples/agentchat_streamlit/main.py)<br>[python/samples/agentchat_chess_game/main.py](../../../../sources/microsoft__autogen/python/samples/agentchat_chess_game/main.py)<br>[python/packages/magentic-one-cli/src/magentic_one_cli/__main__.py](../../../../sources/microsoft__autogen/python/packages/magentic-one-cli/src/magentic_one_cli/__main__.py)<br>[python/packages/component-schema-gen/src/component_schema_gen/__main__.py](../../../../sources/microsoft__autogen/python/packages/component-schema-gen/src/component_schema_gen/__main__.py)<br>[python/packages/autogen-studio/frontend/src/index.d.ts](../../../../sources/microsoft__autogen/python/packages/autogen-studio/frontend/src/index.d.ts) |
| agentRuntime | 198 | [python/templates/new-package/hooks/post_gen_project.py](../../../../sources/microsoft__autogen/python/templates/new-package/hooks/post_gen_project.py)<br>[python/templates/new-package/hooks/pre_gen_project.py](../../../../sources/microsoft__autogen/python/templates/new-package/hooks/pre_gen_project.py)<br>[python/samples/core_xlang_hello_python_agent/protos/agent_events_pb2_grpc.py](../../../../sources/microsoft__autogen/python/samples/core_xlang_hello_python_agent/protos/agent_events_pb2_grpc.py)<br>[python/samples/core_xlang_hello_python_agent/protos/agent_events_pb2_grpc.pyi](../../../../sources/microsoft__autogen/python/samples/core_xlang_hello_python_agent/protos/agent_events_pb2_grpc.pyi)<br>[python/samples/core_xlang_hello_python_agent/protos/agent_events_pb2.py](../../../../sources/microsoft__autogen/python/samples/core_xlang_hello_python_agent/protos/agent_events_pb2.py)<br>[python/samples/core_xlang_hello_python_agent/protos/agent_events_pb2.pyi](../../../../sources/microsoft__autogen/python/samples/core_xlang_hello_python_agent/protos/agent_events_pb2.pyi)<br>[python/samples/core_streaming_handoffs_fastapi/agent_base.py](../../../../sources/microsoft__autogen/python/samples/core_streaming_handoffs_fastapi/agent_base.py)<br>[python/samples/core_streaming_handoffs_fastapi/agent_user.py](../../../../sources/microsoft__autogen/python/samples/core_streaming_handoffs_fastapi/agent_user.py) |
| mcp | 47 | [python/packages/autogen-studio/tests/mcp/test_mcp_callbacks.py](../../../../sources/microsoft__autogen/python/packages/autogen-studio/tests/mcp/test_mcp_callbacks.py)<br>[python/packages/autogen-studio/tests/mcp/test_mcp_client.py](../../../../sources/microsoft__autogen/python/packages/autogen-studio/tests/mcp/test_mcp_client.py)<br>[python/packages/autogen-studio/tests/mcp/test_mcp_integration.py](../../../../sources/microsoft__autogen/python/packages/autogen-studio/tests/mcp/test_mcp_integration.py)<br>[python/packages/autogen-studio/tests/mcp/test_mcp_websocket.py](../../../../sources/microsoft__autogen/python/packages/autogen-studio/tests/mcp/test_mcp_websocket.py)<br>[python/packages/autogen-studio/tests/mcp/test_mcp_wsbridge.py](../../../../sources/microsoft__autogen/python/packages/autogen-studio/tests/mcp/test_mcp_wsbridge.py)<br>[python/packages/autogen-studio/frontend/src/pages/mcp.tsx](../../../../sources/microsoft__autogen/python/packages/autogen-studio/frontend/src/pages/mcp.tsx)<br>[python/packages/autogen-studio/frontend/src/components/views/teambuilder/builder/component-editor/fields/workbench/mcp-capabilities-panel.tsx](../../../../sources/microsoft__autogen/python/packages/autogen-studio/frontend/src/components/views/teambuilder/builder/component-editor/fields/workbench/mcp-capabilities-panel.tsx)<br>[python/packages/autogen-studio/frontend/src/components/views/teambuilder/builder/component-editor/fields/workbench/mcp-prompts-tab.tsx](../../../../sources/microsoft__autogen/python/packages/autogen-studio/frontend/src/components/views/teambuilder/builder/component-editor/fields/workbench/mcp-prompts-tab.tsx) |
| retrieval | 124 | [python/samples/task_centric_memory/chat_with_teachable_agent.py](../../../../sources/microsoft__autogen/python/samples/task_centric_memory/chat_with_teachable_agent.py)<br>[python/samples/task_centric_memory/eval_learning_from_demonstration.py](../../../../sources/microsoft__autogen/python/samples/task_centric_memory/eval_learning_from_demonstration.py)<br>[python/samples/task_centric_memory/eval_retrieval.py](../../../../sources/microsoft__autogen/python/samples/task_centric_memory/eval_retrieval.py)<br>[python/samples/task_centric_memory/eval_self_teaching.py](../../../../sources/microsoft__autogen/python/samples/task_centric_memory/eval_self_teaching.py)<br>[python/samples/task_centric_memory/eval_teachability.py](../../../../sources/microsoft__autogen/python/samples/task_centric_memory/eval_teachability.py)<br>[python/samples/task_centric_memory/README.md](../../../../sources/microsoft__autogen/python/samples/task_centric_memory/README.md)<br>[python/samples/task_centric_memory/utils.py](../../../../sources/microsoft__autogen/python/samples/task_centric_memory/utils.py)<br>[python/samples/task_centric_memory/data_files/tasks/10_liars.yaml](../../../../sources/microsoft__autogen/python/samples/task_centric_memory/data_files/tasks/10_liars.yaml) |
| spec | 32 | [python/samples/core_streaming_handoffs_fastapi/requirements.txt](../../../../sources/microsoft__autogen/python/samples/core_streaming_handoffs_fastapi/requirements.txt)<br>[python/samples/agentchat_graphrag/requirements.txt](../../../../sources/microsoft__autogen/python/samples/agentchat_graphrag/requirements.txt)<br>[python/packages/autogen-studio/requirements.txt](../../../../sources/microsoft__autogen/python/packages/autogen-studio/requirements.txt)<br>[python/packages/agbench/src/agbench/template/requirements.txt](../../../../sources/microsoft__autogen/python/packages/agbench/src/agbench/template/requirements.txt)<br>[python/packages/agbench/benchmarks/HumanEval/Templates/AgentChat/requirements.txt](../../../../sources/microsoft__autogen/python/packages/agbench/benchmarks/HumanEval/Templates/AgentChat/requirements.txt)<br>[python/packages/agbench/benchmarks/GAIA/Templates/SelectorGroupChat/requirements.txt](../../../../sources/microsoft__autogen/python/packages/agbench/benchmarks/GAIA/Templates/SelectorGroupChat/requirements.txt)<br>[python/packages/agbench/benchmarks/GAIA/Templates/ParallelAgents/requirements.txt](../../../../sources/microsoft__autogen/python/packages/agbench/benchmarks/GAIA/Templates/ParallelAgents/requirements.txt)<br>[python/packages/agbench/benchmarks/GAIA/Templates/MagenticOne/requirements.txt](../../../../sources/microsoft__autogen/python/packages/agbench/benchmarks/GAIA/Templates/MagenticOne/requirements.txt) |
| eval | 325 | [python/templates/new-package/{{cookiecutter.package_name}}/tests/test_example.py](../../../../sources/microsoft__autogen/python/templates/new-package/{{cookiecutter.package_name}}/tests/test_example.py)<br>[python/samples/task_centric_memory/eval_learning_from_demonstration.py](../../../../sources/microsoft__autogen/python/samples/task_centric_memory/eval_learning_from_demonstration.py)<br>[python/samples/task_centric_memory/eval_retrieval.py](../../../../sources/microsoft__autogen/python/samples/task_centric_memory/eval_retrieval.py)<br>[python/samples/task_centric_memory/eval_self_teaching.py](../../../../sources/microsoft__autogen/python/samples/task_centric_memory/eval_self_teaching.py)<br>[python/samples/task_centric_memory/eval_teachability.py](../../../../sources/microsoft__autogen/python/samples/task_centric_memory/eval_teachability.py)<br>[python/packages/autogen-test-utils/LICENSE-CODE](../../../../sources/microsoft__autogen/python/packages/autogen-test-utils/LICENSE-CODE)<br>[python/packages/autogen-test-utils/pyproject.toml](../../../../sources/microsoft__autogen/python/packages/autogen-test-utils/pyproject.toml)<br>[python/packages/autogen-test-utils/README.md](../../../../sources/microsoft__autogen/python/packages/autogen-test-utils/README.md) |
| security | 17 | [SECURITY.md](../../../../sources/microsoft__autogen/SECURITY.md)<br>[python/packages/autogen-studio/frontend/src/components/utils/security-utils.ts](../../../../sources/microsoft__autogen/python/packages/autogen-studio/frontend/src/components/utils/security-utils.ts)<br>[python/packages/autogen-studio/frontend/src/auth/api.ts](../../../../sources/microsoft__autogen/python/packages/autogen-studio/frontend/src/auth/api.ts)<br>[python/packages/autogen-studio/frontend/src/auth/context.tsx](../../../../sources/microsoft__autogen/python/packages/autogen-studio/frontend/src/auth/context.tsx)<br>[python/packages/autogen-studio/frontend/src/auth/protected.tsx](../../../../sources/microsoft__autogen/python/packages/autogen-studio/frontend/src/auth/protected.tsx)<br>[python/packages/autogen-studio/autogenstudio/web/auth/__init__.py](../../../../sources/microsoft__autogen/python/packages/autogen-studio/autogenstudio/web/auth/__init__.py)<br>[python/packages/autogen-studio/autogenstudio/web/auth/authroutes.py](../../../../sources/microsoft__autogen/python/packages/autogen-studio/autogenstudio/web/auth/authroutes.py)<br>[python/packages/autogen-studio/autogenstudio/web/auth/dependencies.py](../../../../sources/microsoft__autogen/python/packages/autogen-studio/autogenstudio/web/auth/dependencies.py) |
| ci | 12 | [.github/workflows/checks.yml](../../../../sources/microsoft__autogen/.github/workflows/checks.yml)<br>[.github/workflows/codeql.yml](../../../../sources/microsoft__autogen/.github/workflows/codeql.yml)<br>[.github/workflows/docs.yml](../../../../sources/microsoft__autogen/.github/workflows/docs.yml)<br>[.github/workflows/dotnet-build.yml](../../../../sources/microsoft__autogen/.github/workflows/dotnet-build.yml)<br>[.github/workflows/dotnet-release.yml](../../../../sources/microsoft__autogen/.github/workflows/dotnet-release.yml)<br>[.github/workflows/integration.yml](../../../../sources/microsoft__autogen/.github/workflows/integration.yml)<br>[.github/workflows/issue-user-responded.yml](../../../../sources/microsoft__autogen/.github/workflows/issue-user-responded.yml)<br>[.github/workflows/lfs-check.yml](../../../../sources/microsoft__autogen/.github/workflows/lfs-check.yml) |
| container | 12 | [python/packages/autogen-studio/Dockerfile](../../../../sources/microsoft__autogen/python/packages/autogen-studio/Dockerfile)<br>[python/packages/autogen-studio/frontend/src/components/views/deploy/manager.tsx](../../../../sources/microsoft__autogen/python/packages/autogen-studio/frontend/src/components/views/deploy/manager.tsx)<br>[python/packages/autogen-studio/frontend/src/components/views/deploy/sidebar.tsx](../../../../sources/microsoft__autogen/python/packages/autogen-studio/frontend/src/components/views/deploy/sidebar.tsx)<br>[python/packages/autogen-studio/frontend/src/components/views/deploy/types.tsx](../../../../sources/microsoft__autogen/python/packages/autogen-studio/frontend/src/components/views/deploy/types.tsx)<br>[python/packages/autogen-studio/frontend/src/components/views/deploy/guides/docker.tsx](../../../../sources/microsoft__autogen/python/packages/autogen-studio/frontend/src/components/views/deploy/guides/docker.tsx)<br>[python/packages/autogen-studio/frontend/src/components/views/deploy/guides/guides.tsx](../../../../sources/microsoft__autogen/python/packages/autogen-studio/frontend/src/components/views/deploy/guides/guides.tsx)<br>[python/packages/autogen-studio/frontend/src/components/views/deploy/guides/python.tsx](../../../../sources/microsoft__autogen/python/packages/autogen-studio/frontend/src/components/views/deploy/guides/python.tsx)<br>[python/packages/agbench/src/agbench/res/Dockerfile](../../../../sources/microsoft__autogen/python/packages/agbench/src/agbench/res/Dockerfile) |
| instruction | 1 | [.github/copilot-instructions.md](../../../../sources/microsoft__autogen/.github/copilot-instructions.md) |
| docs | 318 | [README.md](../../../../sources/microsoft__autogen/README.md)<br>[python/README.md](../../../../sources/microsoft__autogen/python/README.md)<br>[python/templates/new-package/{{cookiecutter.package_name}}/README.md](../../../../sources/microsoft__autogen/python/templates/new-package/{{cookiecutter.package_name}}/README.md)<br>[python/samples/task_centric_memory/README.md](../../../../sources/microsoft__autogen/python/samples/task_centric_memory/README.md)<br>[python/samples/gitty/README.md](../../../../sources/microsoft__autogen/python/samples/gitty/README.md)<br>[python/samples/core_xlang_hello_python_agent/README.md](../../../../sources/microsoft__autogen/python/samples/core_xlang_hello_python_agent/README.md)<br>[python/samples/core_streaming_response_fastapi/README.md](../../../../sources/microsoft__autogen/python/samples/core_streaming_response_fastapi/README.md)<br>[python/samples/core_streaming_handoffs_fastapi/README.md](../../../../sources/microsoft__autogen/python/samples/core_streaming_handoffs_fastapi/README.md) |
| config | 24 | [python/pyproject.toml](../../../../sources/microsoft__autogen/python/pyproject.toml)<br>[python/uv.lock](../../../../sources/microsoft__autogen/python/uv.lock)<br>[python/templates/new-package/{{cookiecutter.package_name}}/pyproject.toml](../../../../sources/microsoft__autogen/python/templates/new-package/{{cookiecutter.package_name}}/pyproject.toml)<br>[python/samples/gitty/pyproject.toml](../../../../sources/microsoft__autogen/python/samples/gitty/pyproject.toml)<br>[python/samples/gitty/uv.lock](../../../../sources/microsoft__autogen/python/samples/gitty/uv.lock)<br>[python/samples/core_streaming_handoffs_fastapi/requirements.txt](../../../../sources/microsoft__autogen/python/samples/core_streaming_handoffs_fastapi/requirements.txt)<br>[python/samples/agentchat_graphrag/requirements.txt](../../../../sources/microsoft__autogen/python/samples/agentchat_graphrag/requirements.txt)<br>[python/packages/pyautogen/pyproject.toml](../../../../sources/microsoft__autogen/python/packages/pyautogen/pyproject.toml) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 325 | [python/templates/new-package/{{cookiecutter.package_name}}/tests/test_example.py](../../../../sources/microsoft__autogen/python/templates/new-package/{{cookiecutter.package_name}}/tests/test_example.py)<br>[python/samples/task_centric_memory/eval_learning_from_demonstration.py](../../../../sources/microsoft__autogen/python/samples/task_centric_memory/eval_learning_from_demonstration.py)<br>[python/samples/task_centric_memory/eval_retrieval.py](../../../../sources/microsoft__autogen/python/samples/task_centric_memory/eval_retrieval.py)<br>[python/samples/task_centric_memory/eval_self_teaching.py](../../../../sources/microsoft__autogen/python/samples/task_centric_memory/eval_self_teaching.py)<br>[python/samples/task_centric_memory/eval_teachability.py](../../../../sources/microsoft__autogen/python/samples/task_centric_memory/eval_teachability.py)<br>[python/packages/autogen-test-utils/LICENSE-CODE](../../../../sources/microsoft__autogen/python/packages/autogen-test-utils/LICENSE-CODE) |
| CI workflow | 12 | [.github/workflows/checks.yml](../../../../sources/microsoft__autogen/.github/workflows/checks.yml)<br>[.github/workflows/codeql.yml](../../../../sources/microsoft__autogen/.github/workflows/codeql.yml)<br>[.github/workflows/docs.yml](../../../../sources/microsoft__autogen/.github/workflows/docs.yml)<br>[.github/workflows/dotnet-build.yml](../../../../sources/microsoft__autogen/.github/workflows/dotnet-build.yml)<br>[.github/workflows/dotnet-release.yml](../../../../sources/microsoft__autogen/.github/workflows/dotnet-release.yml)<br>[.github/workflows/integration.yml](../../../../sources/microsoft__autogen/.github/workflows/integration.yml) |
| 컨테이너/배포 | 12 | [python/packages/autogen-studio/Dockerfile](../../../../sources/microsoft__autogen/python/packages/autogen-studio/Dockerfile)<br>[python/packages/autogen-studio/frontend/src/components/views/deploy/manager.tsx](../../../../sources/microsoft__autogen/python/packages/autogen-studio/frontend/src/components/views/deploy/manager.tsx)<br>[python/packages/autogen-studio/frontend/src/components/views/deploy/sidebar.tsx](../../../../sources/microsoft__autogen/python/packages/autogen-studio/frontend/src/components/views/deploy/sidebar.tsx)<br>[python/packages/autogen-studio/frontend/src/components/views/deploy/types.tsx](../../../../sources/microsoft__autogen/python/packages/autogen-studio/frontend/src/components/views/deploy/types.tsx)<br>[python/packages/autogen-studio/frontend/src/components/views/deploy/guides/docker.tsx](../../../../sources/microsoft__autogen/python/packages/autogen-studio/frontend/src/components/views/deploy/guides/docker.tsx)<br>[python/packages/autogen-studio/frontend/src/components/views/deploy/guides/guides.tsx](../../../../sources/microsoft__autogen/python/packages/autogen-studio/frontend/src/components/views/deploy/guides/guides.tsx) |
| 보안/정책 | 17 | [SECURITY.md](../../../../sources/microsoft__autogen/SECURITY.md)<br>[python/packages/autogen-studio/frontend/src/components/utils/security-utils.ts](../../../../sources/microsoft__autogen/python/packages/autogen-studio/frontend/src/components/utils/security-utils.ts)<br>[python/packages/autogen-studio/frontend/src/auth/api.ts](../../../../sources/microsoft__autogen/python/packages/autogen-studio/frontend/src/auth/api.ts)<br>[python/packages/autogen-studio/frontend/src/auth/context.tsx](../../../../sources/microsoft__autogen/python/packages/autogen-studio/frontend/src/auth/context.tsx)<br>[python/packages/autogen-studio/frontend/src/auth/protected.tsx](../../../../sources/microsoft__autogen/python/packages/autogen-studio/frontend/src/auth/protected.tsx)<br>[python/packages/autogen-studio/autogenstudio/web/auth/__init__.py](../../../../sources/microsoft__autogen/python/packages/autogen-studio/autogenstudio/web/auth/__init__.py) |
| 에이전트 지시문 | 1 | [.github/copilot-instructions.md](../../../../sources/microsoft__autogen/.github/copilot-instructions.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `python/packages/autogen-studio/tests/mcp/test_mcp_callbacks.py`, `python/packages/autogen-studio/tests/mcp/test_mcp_client.py`, `python/packages/autogen-studio/tests/mcp/test_mcp_integration.py`.
2. entrypoint를 따라 실행 흐름 확인: `python/samples/gitty/src/gitty/__main__.py`, `python/samples/core_chess_game/main.py`, `python/samples/core_async_human_in_the_loop/main.py`.
3. agent/tool runtime 매핑: `python/templates/new-package/hooks/post_gen_project.py`, `python/templates/new-package/hooks/pre_gen_project.py`, `python/samples/core_xlang_hello_python_agent/protos/agent_events_pb2_grpc.py`.
4. retrieval/memory/indexing 확인: `python/samples/task_centric_memory/chat_with_teachable_agent.py`, `python/samples/task_centric_memory/eval_learning_from_demonstration.py`, `python/samples/task_centric_memory/eval_retrieval.py`.
5. test/eval 파일로 동작 검증: `python/templates/new-package/{{cookiecutter.package_name}}/tests/test_example.py`, `python/samples/task_centric_memory/eval_learning_from_demonstration.py`, `python/samples/task_centric_memory/eval_retrieval.py`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Local clone structure analysis 1837 files, 482 directories.. 핵심 구조 신호는 Python, README.md, LICENSE, tests, ci, docs이며, 심층 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 큰 메타데이터 위험이 명확하지 않음입니다.
