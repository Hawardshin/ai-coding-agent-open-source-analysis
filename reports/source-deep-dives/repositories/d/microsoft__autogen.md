# microsoft/autogen Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Local clone structure analysis: 1837 files, 482 directories.

## 요약

- 조사 단위: `sources/microsoft__autogen` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 1,837 files, 482 directories, depth score 135, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 mcp=python/packages/autogen-studio/tests/mcp/test_mcp_callbacks.py, python/packages/autogen-studio/tests/mcp/test_mcp_client.py, python/packages/autogen-studio/tests/mcp/test_mcp_integration.py이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | microsoft/autogen |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 59042 |
| Forks | 8905 |
| License | CC-BY-4.0 |
| Maturity | high-signal |
| Evidence | deep-source+report |
| Source | [sources/microsoft__autogen](../../../../sources/microsoft__autogen) |
| Existing report | [reports/global-trending/repositories/microsoft__autogen.md](../../../global-trending/repositories/microsoft__autogen.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 1837 / 482 |
| Max observed depth | 13 |
| Top directories | .azure, .devcontainer, .github, docs, dotnet, protos, python |
| Top extensions | .py: 546, .cs: 497, .md: 162, .tsx: 96, .csproj: 64, .ipynb: 49, (none): 49, .json: 42, .png: 42, .yaml: 41, .txt: 33, .ts: 29 |
| Source patterns | cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
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


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
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


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 325 | [python/templates/new-package/{{cookiecutter.package_name}}/tests/test_example.py](../../../../sources/microsoft__autogen/python/templates/new-package/{{cookiecutter.package_name}}/tests/test_example.py)<br>[python/samples/task_centric_memory/eval_learning_from_demonstration.py](../../../../sources/microsoft__autogen/python/samples/task_centric_memory/eval_learning_from_demonstration.py)<br>[python/samples/task_centric_memory/eval_retrieval.py](../../../../sources/microsoft__autogen/python/samples/task_centric_memory/eval_retrieval.py)<br>[python/samples/task_centric_memory/eval_self_teaching.py](../../../../sources/microsoft__autogen/python/samples/task_centric_memory/eval_self_teaching.py)<br>[python/samples/task_centric_memory/eval_teachability.py](../../../../sources/microsoft__autogen/python/samples/task_centric_memory/eval_teachability.py)<br>[python/packages/autogen-test-utils/LICENSE-CODE](../../../../sources/microsoft__autogen/python/packages/autogen-test-utils/LICENSE-CODE) |
| CI workflows | 12 | [.github/workflows/checks.yml](../../../../sources/microsoft__autogen/.github/workflows/checks.yml)<br>[.github/workflows/codeql.yml](../../../../sources/microsoft__autogen/.github/workflows/codeql.yml)<br>[.github/workflows/docs.yml](../../../../sources/microsoft__autogen/.github/workflows/docs.yml)<br>[.github/workflows/dotnet-build.yml](../../../../sources/microsoft__autogen/.github/workflows/dotnet-build.yml)<br>[.github/workflows/dotnet-release.yml](../../../../sources/microsoft__autogen/.github/workflows/dotnet-release.yml)<br>[.github/workflows/integration.yml](../../../../sources/microsoft__autogen/.github/workflows/integration.yml) |
| Containers / deploy | 12 | [python/packages/autogen-studio/Dockerfile](../../../../sources/microsoft__autogen/python/packages/autogen-studio/Dockerfile)<br>[python/packages/autogen-studio/frontend/src/components/views/deploy/manager.tsx](../../../../sources/microsoft__autogen/python/packages/autogen-studio/frontend/src/components/views/deploy/manager.tsx)<br>[python/packages/autogen-studio/frontend/src/components/views/deploy/sidebar.tsx](../../../../sources/microsoft__autogen/python/packages/autogen-studio/frontend/src/components/views/deploy/sidebar.tsx)<br>[python/packages/autogen-studio/frontend/src/components/views/deploy/types.tsx](../../../../sources/microsoft__autogen/python/packages/autogen-studio/frontend/src/components/views/deploy/types.tsx)<br>[python/packages/autogen-studio/frontend/src/components/views/deploy/guides/docker.tsx](../../../../sources/microsoft__autogen/python/packages/autogen-studio/frontend/src/components/views/deploy/guides/docker.tsx)<br>[python/packages/autogen-studio/frontend/src/components/views/deploy/guides/guides.tsx](../../../../sources/microsoft__autogen/python/packages/autogen-studio/frontend/src/components/views/deploy/guides/guides.tsx) |
| Security / policy | 17 | [SECURITY.md](../../../../sources/microsoft__autogen/SECURITY.md)<br>[python/packages/autogen-studio/frontend/src/components/utils/security-utils.ts](../../../../sources/microsoft__autogen/python/packages/autogen-studio/frontend/src/components/utils/security-utils.ts)<br>[python/packages/autogen-studio/frontend/src/auth/api.ts](../../../../sources/microsoft__autogen/python/packages/autogen-studio/frontend/src/auth/api.ts)<br>[python/packages/autogen-studio/frontend/src/auth/context.tsx](../../../../sources/microsoft__autogen/python/packages/autogen-studio/frontend/src/auth/context.tsx)<br>[python/packages/autogen-studio/frontend/src/auth/protected.tsx](../../../../sources/microsoft__autogen/python/packages/autogen-studio/frontend/src/auth/protected.tsx)<br>[python/packages/autogen-studio/autogenstudio/web/auth/__init__.py](../../../../sources/microsoft__autogen/python/packages/autogen-studio/autogenstudio/web/auth/__init__.py) |
| Agent instructions | 1 | [.github/copilot-instructions.md](../../../../sources/microsoft__autogen/.github/copilot-instructions.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `python/packages/autogen-studio/tests/mcp/test_mcp_callbacks.py`, `python/packages/autogen-studio/tests/mcp/test_mcp_client.py`, `python/packages/autogen-studio/tests/mcp/test_mcp_integration.py`.
2. Trace execution through entrypoints: `python/samples/gitty/src/gitty/__main__.py`, `python/samples/core_chess_game/main.py`, `python/samples/core_async_human_in_the_loop/main.py`.
3. Map agent/tool runtime through: `python/templates/new-package/hooks/post_gen_project.py`, `python/templates/new-package/hooks/pre_gen_project.py`, `python/samples/core_xlang_hello_python_agent/protos/agent_events_pb2_grpc.py`.
4. Inspect retrieval/memory/indexing through: `python/samples/task_centric_memory/chat_with_teachable_agent.py`, `python/samples/task_centric_memory/eval_learning_from_demonstration.py`, `python/samples/task_centric_memory/eval_retrieval.py`.
5. Verify behavior through test/eval files: `python/templates/new-package/{{cookiecutter.package_name}}/tests/test_example.py`, `python/samples/task_centric_memory/eval_learning_from_demonstration.py`, `python/samples/task_centric_memory/eval_retrieval.py`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Local clone structure analysis 1837 files, 482 directories.. 핵심 구조 신호는 Python, README.md, LICENSE, tests, ci, docs이며, deep-source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 major metadata risk not obvious입니다.
