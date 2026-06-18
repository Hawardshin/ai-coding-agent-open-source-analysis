# microsoft/agent-framework 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

A framework for building, orchestrating and deploying AI agents and multi-agent workflows with support for Python and .NET.

## 요약

- 조사 단위: `sources/microsoft__agent-framework` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 4,942 files, 1,131 directories, depth score 126, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=python/scripts/local_mcp_streamable_http_server.py, python/samples/04-hosting/foundry-hosted-agents/responses/12_foundry_toolbox_mcp_skills/.dockerignore, python/samples/04-hosting/foundry-hosted-agents/responses/12_foundry_toolbox_mcp_skills/.env.example이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | microsoft/agent-framework |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 11429 |
| Forks | 1919 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/microsoft__agent-framework](../../../../sources/microsoft__agent-framework) |
| 기존 보고서 | [reports/global-trending/repositories/microsoft__agent-framework.md](../../../global-trending/repositories/microsoft__agent-framework.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 4942 / 1131 |
| 관측 최대 깊이 | 10 |
| 상위 디렉터리 | .devcontainer, .github, declarative-agents, docs, dotnet, python, schemas |
| 상위 확장자 | .cs: 2075, .py: 1101, .md: 487, .csproj: 336, .json: 198, .yaml: 148, (none): 112, .tsx: 55, .txt: 54, .example: 46, .yml: 40, .toml: 34 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 7 |
| python/packages/devui | python package | 6 |
| python/packages/foundry | python package | 6 |
| python/packages/openai | python package | 4 |
| python/packages/core | python package | 3 |
| python/packages/mistral | python package | 3 |
| python/packages/ollama | python package | 3 |
| python/packages/tools | python package | 3 |
| .devcontainer | deployment surface | 1 |
| .github | ci surface | 1 |
| declarative-agents | top-level component | 1 |
| dotnet | top-level component | 1 |
| python | top-level component | 1 |
| python/packages/a2a | python package | 1 |
| python/packages/ag-ui | python package | 1 |
| python/packages/anthropic | python package | 1 |
| python/packages/azure-ai-search | python package | 1 |
| python/packages/azure-contentunderstanding | python package | 1 |


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
| mcp | [python/scripts/local_mcp_streamable_http_server.py](../../../../sources/microsoft__agent-framework/python/scripts/local_mcp_streamable_http_server.py) | mcp signal |
| mcp | [python/samples/04-hosting/foundry-hosted-agents/responses/12_foundry_toolbox_mcp_skills/.dockerignore](../../../../sources/microsoft__agent-framework/python/samples/04-hosting/foundry-hosted-agents/responses/12_foundry_toolbox_mcp_skills/.dockerignore) | mcp signal |
| mcp | [python/samples/04-hosting/foundry-hosted-agents/responses/12_foundry_toolbox_mcp_skills/.env.example](../../../../sources/microsoft__agent-framework/python/samples/04-hosting/foundry-hosted-agents/responses/12_foundry_toolbox_mcp_skills/.env.example) | mcp signal |
| mcp | [python/samples/04-hosting/foundry-hosted-agents/responses/12_foundry_toolbox_mcp_skills/agent.manifest.yaml](../../../../sources/microsoft__agent-framework/python/samples/04-hosting/foundry-hosted-agents/responses/12_foundry_toolbox_mcp_skills/agent.manifest.yaml) | mcp signal |
| agentRuntime | [python/AGENTS.md](../../../../sources/microsoft__agent-framework/python/AGENTS.md) | agentRuntime signal |
| agentRuntime | [python/scripts/sample_validation/workflow.py](../../../../sources/microsoft__agent-framework/python/scripts/sample_validation/workflow.py) | agentRuntime signal |
| agentRuntime | [python/samples/AGENTS.md](../../../../sources/microsoft__agent-framework/python/samples/AGENTS.md) | agentRuntime signal |
| agentRuntime | [python/samples/05-end-to-end/workflow_evaluation/_tools.py](../../../../sources/microsoft__agent-framework/python/samples/05-end-to-end/workflow_evaluation/_tools.py) | agentRuntime signal |
| entrypoints | [python/scripts/sample_validation/__main__.py](../../../../sources/microsoft__agent-framework/python/scripts/sample_validation/__main__.py) | entrypoints signal |
| entrypoints | [python/scripts/integration_test_report/__main__.py](../../../../sources/microsoft__agent-framework/python/scripts/integration_test_report/__main__.py) | entrypoints signal |
| entrypoints | [python/samples/05-end-to-end/neo4j_graphrag/main.py](../../../../sources/microsoft__agent-framework/python/samples/05-end-to-end/neo4j_graphrag/main.py) | entrypoints signal |
| entrypoints | [python/samples/05-end-to-end/chatkit-integration/frontend/src/App.tsx](../../../../sources/microsoft__agent-framework/python/samples/05-end-to-end/chatkit-integration/frontend/src/App.tsx) | entrypoints signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 49 | [python/scripts/sample_validation/__main__.py](../../../../sources/microsoft__agent-framework/python/scripts/sample_validation/__main__.py)<br>[python/scripts/integration_test_report/__main__.py](../../../../sources/microsoft__agent-framework/python/scripts/integration_test_report/__main__.py)<br>[python/samples/05-end-to-end/neo4j_graphrag/main.py](../../../../sources/microsoft__agent-framework/python/samples/05-end-to-end/neo4j_graphrag/main.py)<br>[python/samples/05-end-to-end/chatkit-integration/frontend/src/App.tsx](../../../../sources/microsoft__agent-framework/python/samples/05-end-to-end/chatkit-integration/frontend/src/App.tsx)<br>[python/samples/05-end-to-end/chatkit-integration/frontend/src/main.tsx](../../../../sources/microsoft__agent-framework/python/samples/05-end-to-end/chatkit-integration/frontend/src/main.tsx)<br>[python/samples/05-end-to-end/ag_ui_workflow_handoff/frontend/src/App.tsx](../../../../sources/microsoft__agent-framework/python/samples/05-end-to-end/ag_ui_workflow_handoff/frontend/src/App.tsx)<br>[python/samples/05-end-to-end/ag_ui_workflow_handoff/frontend/src/main.tsx](../../../../sources/microsoft__agent-framework/python/samples/05-end-to-end/ag_ui_workflow_handoff/frontend/src/main.tsx)<br>[python/samples/05-end-to-end/ag_ui_workflow_handoff/backend/server.py](../../../../sources/microsoft__agent-framework/python/samples/05-end-to-end/ag_ui_workflow_handoff/backend/server.py) |
| agentRuntime | 1030 | [python/AGENTS.md](../../../../sources/microsoft__agent-framework/python/AGENTS.md)<br>[python/scripts/sample_validation/workflow.py](../../../../sources/microsoft__agent-framework/python/scripts/sample_validation/workflow.py)<br>[python/samples/AGENTS.md](../../../../sources/microsoft__agent-framework/python/samples/AGENTS.md)<br>[python/samples/05-end-to-end/workflow_evaluation/_tools.py](../../../../sources/microsoft__agent-framework/python/samples/05-end-to-end/workflow_evaluation/_tools.py)<br>[python/samples/05-end-to-end/workflow_evaluation/.env.example](../../../../sources/microsoft__agent-framework/python/samples/05-end-to-end/workflow_evaluation/.env.example)<br>[python/samples/05-end-to-end/workflow_evaluation/create_workflow.py](../../../../sources/microsoft__agent-framework/python/samples/05-end-to-end/workflow_evaluation/create_workflow.py)<br>[python/samples/05-end-to-end/workflow_evaluation/README.md](../../../../sources/microsoft__agent-framework/python/samples/05-end-to-end/workflow_evaluation/README.md)<br>[python/samples/05-end-to-end/workflow_evaluation/run_evaluation.py](../../../../sources/microsoft__agent-framework/python/samples/05-end-to-end/workflow_evaluation/run_evaluation.py) |
| mcp | 92 | [python/scripts/local_mcp_streamable_http_server.py](../../../../sources/microsoft__agent-framework/python/scripts/local_mcp_streamable_http_server.py)<br>[python/samples/04-hosting/foundry-hosted-agents/responses/12_foundry_toolbox_mcp_skills/.dockerignore](../../../../sources/microsoft__agent-framework/python/samples/04-hosting/foundry-hosted-agents/responses/12_foundry_toolbox_mcp_skills/.dockerignore)<br>[python/samples/04-hosting/foundry-hosted-agents/responses/12_foundry_toolbox_mcp_skills/.env.example](../../../../sources/microsoft__agent-framework/python/samples/04-hosting/foundry-hosted-agents/responses/12_foundry_toolbox_mcp_skills/.env.example)<br>[python/samples/04-hosting/foundry-hosted-agents/responses/12_foundry_toolbox_mcp_skills/agent.manifest.yaml](../../../../sources/microsoft__agent-framework/python/samples/04-hosting/foundry-hosted-agents/responses/12_foundry_toolbox_mcp_skills/agent.manifest.yaml)<br>[python/samples/04-hosting/foundry-hosted-agents/responses/12_foundry_toolbox_mcp_skills/agent.yaml](../../../../sources/microsoft__agent-framework/python/samples/04-hosting/foundry-hosted-agents/responses/12_foundry_toolbox_mcp_skills/agent.yaml)<br>[python/samples/04-hosting/foundry-hosted-agents/responses/12_foundry_toolbox_mcp_skills/Dockerfile](../../../../sources/microsoft__agent-framework/python/samples/04-hosting/foundry-hosted-agents/responses/12_foundry_toolbox_mcp_skills/Dockerfile)<br>[python/samples/04-hosting/foundry-hosted-agents/responses/12_foundry_toolbox_mcp_skills/main.py](../../../../sources/microsoft__agent-framework/python/samples/04-hosting/foundry-hosted-agents/responses/12_foundry_toolbox_mcp_skills/main.py)<br>[python/samples/04-hosting/foundry-hosted-agents/responses/12_foundry_toolbox_mcp_skills/README.md](../../../../sources/microsoft__agent-framework/python/samples/04-hosting/foundry-hosted-agents/responses/12_foundry_toolbox_mcp_skills/README.md) |
| retrieval | 81 | [python/samples/05-end-to-end/neo4j_graphrag/main.py](../../../../sources/microsoft__agent-framework/python/samples/05-end-to-end/neo4j_graphrag/main.py)<br>[python/samples/05-end-to-end/neo4j_graphrag/README.md](../../../../sources/microsoft__agent-framework/python/samples/05-end-to-end/neo4j_graphrag/README.md)<br>[python/samples/05-end-to-end/chatkit-integration/frontend/index.html](../../../../sources/microsoft__agent-framework/python/samples/05-end-to-end/chatkit-integration/frontend/index.html)<br>[python/samples/05-end-to-end/ag_ui_workflow_handoff/frontend/index.html](../../../../sources/microsoft__agent-framework/python/samples/05-end-to-end/ag_ui_workflow_handoff/frontend/index.html)<br>[python/samples/04-hosting/foundry-hosted-agents/responses/10_foundry_memory/.dockerignore](../../../../sources/microsoft__agent-framework/python/samples/04-hosting/foundry-hosted-agents/responses/10_foundry_memory/.dockerignore)<br>[python/samples/04-hosting/foundry-hosted-agents/responses/10_foundry_memory/.env.example](../../../../sources/microsoft__agent-framework/python/samples/04-hosting/foundry-hosted-agents/responses/10_foundry_memory/.env.example)<br>[python/samples/04-hosting/foundry-hosted-agents/responses/10_foundry_memory/agent.manifest.yaml](../../../../sources/microsoft__agent-framework/python/samples/04-hosting/foundry-hosted-agents/responses/10_foundry_memory/agent.manifest.yaml)<br>[python/samples/04-hosting/foundry-hosted-agents/responses/10_foundry_memory/agent.yaml](../../../../sources/microsoft__agent-framework/python/samples/04-hosting/foundry-hosted-agents/responses/10_foundry_memory/agent.yaml) |
| spec | 40 | [python/samples/04-hosting/foundry-hosted-agents/responses/12_foundry_toolbox_mcp_skills/requirements.txt](../../../../sources/microsoft__agent-framework/python/samples/04-hosting/foundry-hosted-agents/responses/12_foundry_toolbox_mcp_skills/requirements.txt)<br>[python/samples/04-hosting/foundry-hosted-agents/responses/10_foundry_memory/requirements.txt](../../../../sources/microsoft__agent-framework/python/samples/04-hosting/foundry-hosted-agents/responses/10_foundry_memory/requirements.txt)<br>[python/samples/04-hosting/foundry-hosted-agents/responses/09_foundry_skills/requirements.txt](../../../../sources/microsoft__agent-framework/python/samples/04-hosting/foundry-hosted-agents/responses/09_foundry_skills/requirements.txt)<br>[python/samples/04-hosting/foundry-hosted-agents/responses/08_azure_search_rag/requirements.txt](../../../../sources/microsoft__agent-framework/python/samples/04-hosting/foundry-hosted-agents/responses/08_azure_search_rag/requirements.txt)<br>[python/samples/04-hosting/foundry-hosted-agents/responses/07_observability/requirements.txt](../../../../sources/microsoft__agent-framework/python/samples/04-hosting/foundry-hosted-agents/responses/07_observability/requirements.txt)<br>[python/samples/04-hosting/foundry-hosted-agents/responses/06_files/requirements.txt](../../../../sources/microsoft__agent-framework/python/samples/04-hosting/foundry-hosted-agents/responses/06_files/requirements.txt)<br>[python/samples/04-hosting/foundry-hosted-agents/responses/05_workflows/requirements.txt](../../../../sources/microsoft__agent-framework/python/samples/04-hosting/foundry-hosted-agents/responses/05_workflows/requirements.txt)<br>[python/samples/04-hosting/foundry-hosted-agents/responses/04_foundry_toolbox/requirements.txt](../../../../sources/microsoft__agent-framework/python/samples/04-hosting/foundry-hosted-agents/responses/04_foundry_toolbox/requirements.txt) |
| eval | 1251 | [python/tests/samples/hosting/test_toolbox_endpoint.py](../../../../sources/microsoft__agent-framework/python/tests/samples/hosting/test_toolbox_endpoint.py)<br>[python/tests/samples/getting_started/test_agent_samples.py](../../../../sources/microsoft__agent-framework/python/tests/samples/getting_started/test_agent_samples.py)<br>[python/tests/samples/getting_started/test_chat_client_samples.py](../../../../sources/microsoft__agent-framework/python/tests/samples/getting_started/test_chat_client_samples.py)<br>[python/tests/samples/getting_started/test_threads_samples.py](../../../../sources/microsoft__agent-framework/python/tests/samples/getting_started/test_threads_samples.py)<br>[python/scripts/integration_test_report/__init__.py](../../../../sources/microsoft__agent-framework/python/scripts/integration_test_report/__init__.py)<br>[python/scripts/integration_test_report/__main__.py](../../../../sources/microsoft__agent-framework/python/scripts/integration_test_report/__main__.py)<br>[python/scripts/integration_test_report/aggregate.py](../../../../sources/microsoft__agent-framework/python/scripts/integration_test_report/aggregate.py)<br>[python/samples/05-end-to-end/workflow_evaluation/_tools.py](../../../../sources/microsoft__agent-framework/python/samples/05-end-to-end/workflow_evaluation/_tools.py) |
| security | 20 | [SECURITY.md](../../../../sources/microsoft__agent-framework/SECURITY.md)<br>[python/samples/04-hosting/foundry-hosted-agents/responses/09_foundry_skills/skills/escalation-policy/SKILL.md](../../../../sources/microsoft__agent-framework/python/samples/04-hosting/foundry-hosted-agents/responses/09_foundry_skills/skills/escalation-policy/SKILL.md)<br>[python/samples/02-agents/security/email_security_example.py](../../../../sources/microsoft__agent-framework/python/samples/02-agents/security/email_security_example.py)<br>[python/samples/02-agents/security/FIDES_DEVELOPER_GUIDE.md](../../../../sources/microsoft__agent-framework/python/samples/02-agents/security/FIDES_DEVELOPER_GUIDE.md)<br>[python/samples/02-agents/security/README.md](../../../../sources/microsoft__agent-framework/python/samples/02-agents/security/README.md)<br>[python/samples/02-agents/security/repo_confidentiality_example.py](../../../../sources/microsoft__agent-framework/python/samples/02-agents/security/repo_confidentiality_example.py)<br>[python/samples/02-agents/mcp/mcp_api_key_auth.py](../../../../sources/microsoft__agent-framework/python/samples/02-agents/mcp/mcp_api_key_auth.py)<br>[python/packages/tools/tests/test_policy.py](../../../../sources/microsoft__agent-framework/python/packages/tools/tests/test_policy.py) |
| ci | 28 | [.github/workflows/codeql-analysis.yml](../../../../sources/microsoft__agent-framework/.github/workflows/codeql-analysis.yml)<br>[.github/workflows/devflow-pr-review.yml](../../../../sources/microsoft__agent-framework/.github/workflows/devflow-pr-review.yml)<br>[.github/workflows/dotnet-build-and-test.yml](../../../../sources/microsoft__agent-framework/.github/workflows/dotnet-build-and-test.yml)<br>[.github/workflows/dotnet-format.yml](../../../../sources/microsoft__agent-framework/.github/workflows/dotnet-format.yml)<br>[.github/workflows/dotnet-integration-tests.yml](../../../../sources/microsoft__agent-framework/.github/workflows/dotnet-integration-tests.yml)<br>[.github/workflows/dotnet-verify-samples.yml](../../../../sources/microsoft__agent-framework/.github/workflows/dotnet-verify-samples.yml)<br>[.github/workflows/integration-tests-manual.yml](../../../../sources/microsoft__agent-framework/.github/workflows/integration-tests-manual.yml)<br>[.github/workflows/issue-triage.yml](../../../../sources/microsoft__agent-framework/.github/workflows/issue-triage.yml) |
| container | 51 | [python/samples/04-hosting/foundry-hosted-agents/responses/12_foundry_toolbox_mcp_skills/Dockerfile](../../../../sources/microsoft__agent-framework/python/samples/04-hosting/foundry-hosted-agents/responses/12_foundry_toolbox_mcp_skills/Dockerfile)<br>[python/samples/04-hosting/foundry-hosted-agents/responses/11_monty_codeact/Dockerfile](../../../../sources/microsoft__agent-framework/python/samples/04-hosting/foundry-hosted-agents/responses/11_monty_codeact/Dockerfile)<br>[python/samples/04-hosting/foundry-hosted-agents/responses/10_foundry_memory/Dockerfile](../../../../sources/microsoft__agent-framework/python/samples/04-hosting/foundry-hosted-agents/responses/10_foundry_memory/Dockerfile)<br>[python/samples/04-hosting/foundry-hosted-agents/responses/09_foundry_skills/Dockerfile](../../../../sources/microsoft__agent-framework/python/samples/04-hosting/foundry-hosted-agents/responses/09_foundry_skills/Dockerfile)<br>[python/samples/04-hosting/foundry-hosted-agents/responses/08_azure_search_rag/Dockerfile](../../../../sources/microsoft__agent-framework/python/samples/04-hosting/foundry-hosted-agents/responses/08_azure_search_rag/Dockerfile)<br>[python/samples/04-hosting/foundry-hosted-agents/responses/07_observability/Dockerfile](../../../../sources/microsoft__agent-framework/python/samples/04-hosting/foundry-hosted-agents/responses/07_observability/Dockerfile)<br>[python/samples/04-hosting/foundry-hosted-agents/responses/06_files/Dockerfile](../../../../sources/microsoft__agent-framework/python/samples/04-hosting/foundry-hosted-agents/responses/06_files/Dockerfile)<br>[python/samples/04-hosting/foundry-hosted-agents/responses/05_workflows/Dockerfile](../../../../sources/microsoft__agent-framework/python/samples/04-hosting/foundry-hosted-agents/responses/05_workflows/Dockerfile) |
| instruction | 32 | [python/AGENTS.md](../../../../sources/microsoft__agent-framework/python/AGENTS.md)<br>[python/samples/AGENTS.md](../../../../sources/microsoft__agent-framework/python/samples/AGENTS.md)<br>[python/packages/redis/AGENTS.md](../../../../sources/microsoft__agent-framework/python/packages/redis/AGENTS.md)<br>[python/packages/purview/AGENTS.md](../../../../sources/microsoft__agent-framework/python/packages/purview/AGENTS.md)<br>[python/packages/openai/AGENTS.md](../../../../sources/microsoft__agent-framework/python/packages/openai/AGENTS.md)<br>[python/packages/ollama/AGENTS.md](../../../../sources/microsoft__agent-framework/python/packages/ollama/AGENTS.md)<br>[python/packages/monty/AGENTS.md](../../../../sources/microsoft__agent-framework/python/packages/monty/AGENTS.md)<br>[python/packages/mistral/AGENTS.md](../../../../sources/microsoft__agent-framework/python/packages/mistral/AGENTS.md) |
| docs | 420 | [README.md](../../../../sources/microsoft__agent-framework/README.md)<br>[python/README.md](../../../../sources/microsoft__agent-framework/python/README.md)<br>[python/scripts/sample_validation/README.md](../../../../sources/microsoft__agent-framework/python/scripts/sample_validation/README.md)<br>[python/scripts/dependencies/README.md](../../../../sources/microsoft__agent-framework/python/scripts/dependencies/README.md)<br>[python/samples/README.md](../../../../sources/microsoft__agent-framework/python/samples/README.md)<br>[python/samples/semantic-kernel-migration/README.md](../../../../sources/microsoft__agent-framework/python/samples/semantic-kernel-migration/README.md)<br>[python/samples/autogen-migration/README.md](../../../../sources/microsoft__agent-framework/python/samples/autogen-migration/README.md)<br>[python/samples/05-end-to-end/workflow_evaluation/README.md](../../../../sources/microsoft__agent-framework/python/samples/05-end-to-end/workflow_evaluation/README.md) |
| config | 74 | [python/pyproject.toml](../../../../sources/microsoft__agent-framework/python/pyproject.toml)<br>[python/uv.lock](../../../../sources/microsoft__agent-framework/python/uv.lock)<br>[python/samples/05-end-to-end/chatkit-integration/frontend/package.json](../../../../sources/microsoft__agent-framework/python/samples/05-end-to-end/chatkit-integration/frontend/package.json)<br>[python/samples/05-end-to-end/chatkit-integration/frontend/tsconfig.json](../../../../sources/microsoft__agent-framework/python/samples/05-end-to-end/chatkit-integration/frontend/tsconfig.json)<br>[python/samples/05-end-to-end/ag_ui_workflow_handoff/frontend/package.json](../../../../sources/microsoft__agent-framework/python/samples/05-end-to-end/ag_ui_workflow_handoff/frontend/package.json)<br>[python/samples/05-end-to-end/ag_ui_workflow_handoff/frontend/tsconfig.json](../../../../sources/microsoft__agent-framework/python/samples/05-end-to-end/ag_ui_workflow_handoff/frontend/tsconfig.json)<br>[python/samples/04-hosting/foundry-hosted-agents/responses/12_foundry_toolbox_mcp_skills/requirements.txt](../../../../sources/microsoft__agent-framework/python/samples/04-hosting/foundry-hosted-agents/responses/12_foundry_toolbox_mcp_skills/requirements.txt)<br>[python/samples/04-hosting/foundry-hosted-agents/responses/11_monty_codeact/pyproject.toml](../../../../sources/microsoft__agent-framework/python/samples/04-hosting/foundry-hosted-agents/responses/11_monty_codeact/pyproject.toml) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 1251 | [python/tests/samples/hosting/test_toolbox_endpoint.py](../../../../sources/microsoft__agent-framework/python/tests/samples/hosting/test_toolbox_endpoint.py)<br>[python/tests/samples/getting_started/test_agent_samples.py](../../../../sources/microsoft__agent-framework/python/tests/samples/getting_started/test_agent_samples.py)<br>[python/tests/samples/getting_started/test_chat_client_samples.py](../../../../sources/microsoft__agent-framework/python/tests/samples/getting_started/test_chat_client_samples.py)<br>[python/tests/samples/getting_started/test_threads_samples.py](../../../../sources/microsoft__agent-framework/python/tests/samples/getting_started/test_threads_samples.py)<br>[python/scripts/integration_test_report/__init__.py](../../../../sources/microsoft__agent-framework/python/scripts/integration_test_report/__init__.py)<br>[python/scripts/integration_test_report/__main__.py](../../../../sources/microsoft__agent-framework/python/scripts/integration_test_report/__main__.py) |
| CI workflow | 28 | [.github/workflows/codeql-analysis.yml](../../../../sources/microsoft__agent-framework/.github/workflows/codeql-analysis.yml)<br>[.github/workflows/devflow-pr-review.yml](../../../../sources/microsoft__agent-framework/.github/workflows/devflow-pr-review.yml)<br>[.github/workflows/dotnet-build-and-test.yml](../../../../sources/microsoft__agent-framework/.github/workflows/dotnet-build-and-test.yml)<br>[.github/workflows/dotnet-format.yml](../../../../sources/microsoft__agent-framework/.github/workflows/dotnet-format.yml)<br>[.github/workflows/dotnet-integration-tests.yml](../../../../sources/microsoft__agent-framework/.github/workflows/dotnet-integration-tests.yml)<br>[.github/workflows/dotnet-verify-samples.yml](../../../../sources/microsoft__agent-framework/.github/workflows/dotnet-verify-samples.yml) |
| 컨테이너/배포 | 51 | [python/samples/04-hosting/foundry-hosted-agents/responses/12_foundry_toolbox_mcp_skills/Dockerfile](../../../../sources/microsoft__agent-framework/python/samples/04-hosting/foundry-hosted-agents/responses/12_foundry_toolbox_mcp_skills/Dockerfile)<br>[python/samples/04-hosting/foundry-hosted-agents/responses/11_monty_codeact/Dockerfile](../../../../sources/microsoft__agent-framework/python/samples/04-hosting/foundry-hosted-agents/responses/11_monty_codeact/Dockerfile)<br>[python/samples/04-hosting/foundry-hosted-agents/responses/10_foundry_memory/Dockerfile](../../../../sources/microsoft__agent-framework/python/samples/04-hosting/foundry-hosted-agents/responses/10_foundry_memory/Dockerfile)<br>[python/samples/04-hosting/foundry-hosted-agents/responses/09_foundry_skills/Dockerfile](../../../../sources/microsoft__agent-framework/python/samples/04-hosting/foundry-hosted-agents/responses/09_foundry_skills/Dockerfile)<br>[python/samples/04-hosting/foundry-hosted-agents/responses/08_azure_search_rag/Dockerfile](../../../../sources/microsoft__agent-framework/python/samples/04-hosting/foundry-hosted-agents/responses/08_azure_search_rag/Dockerfile)<br>[python/samples/04-hosting/foundry-hosted-agents/responses/07_observability/Dockerfile](../../../../sources/microsoft__agent-framework/python/samples/04-hosting/foundry-hosted-agents/responses/07_observability/Dockerfile) |
| 보안/정책 | 20 | [SECURITY.md](../../../../sources/microsoft__agent-framework/SECURITY.md)<br>[python/samples/04-hosting/foundry-hosted-agents/responses/09_foundry_skills/skills/escalation-policy/SKILL.md](../../../../sources/microsoft__agent-framework/python/samples/04-hosting/foundry-hosted-agents/responses/09_foundry_skills/skills/escalation-policy/SKILL.md)<br>[python/samples/02-agents/security/email_security_example.py](../../../../sources/microsoft__agent-framework/python/samples/02-agents/security/email_security_example.py)<br>[python/samples/02-agents/security/FIDES_DEVELOPER_GUIDE.md](../../../../sources/microsoft__agent-framework/python/samples/02-agents/security/FIDES_DEVELOPER_GUIDE.md)<br>[python/samples/02-agents/security/README.md](../../../../sources/microsoft__agent-framework/python/samples/02-agents/security/README.md)<br>[python/samples/02-agents/security/repo_confidentiality_example.py](../../../../sources/microsoft__agent-framework/python/samples/02-agents/security/repo_confidentiality_example.py) |
| 에이전트 지시문 | 32 | [python/AGENTS.md](../../../../sources/microsoft__agent-framework/python/AGENTS.md)<br>[python/samples/AGENTS.md](../../../../sources/microsoft__agent-framework/python/samples/AGENTS.md)<br>[python/packages/redis/AGENTS.md](../../../../sources/microsoft__agent-framework/python/packages/redis/AGENTS.md)<br>[python/packages/purview/AGENTS.md](../../../../sources/microsoft__agent-framework/python/packages/purview/AGENTS.md)<br>[python/packages/openai/AGENTS.md](../../../../sources/microsoft__agent-framework/python/packages/openai/AGENTS.md)<br>[python/packages/ollama/AGENTS.md](../../../../sources/microsoft__agent-framework/python/packages/ollama/AGENTS.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `python/scripts/local_mcp_streamable_http_server.py`, `python/samples/04-hosting/foundry-hosted-agents/responses/12_foundry_toolbox_mcp_skills/.dockerignore`, `python/samples/04-hosting/foundry-hosted-agents/responses/12_foundry_toolbox_mcp_skills/.env.example`.
2. entrypoint를 따라 실행 흐름 확인: `python/scripts/sample_validation/__main__.py`, `python/scripts/integration_test_report/__main__.py`, `python/samples/05-end-to-end/neo4j_graphrag/main.py`.
3. agent/tool runtime 매핑: `python/AGENTS.md`, `python/scripts/sample_validation/workflow.py`, `python/samples/AGENTS.md`.
4. retrieval/memory/indexing 확인: `python/samples/05-end-to-end/neo4j_graphrag/main.py`, `python/samples/05-end-to-end/neo4j_graphrag/README.md`, `python/samples/05-end-to-end/chatkit-integration/frontend/index.html`.
5. test/eval 파일로 동작 검증: `python/tests/samples/hosting/test_toolbox_endpoint.py`, `python/tests/samples/getting_started/test_agent_samples.py`, `python/tests/samples/getting_started/test_chat_client_samples.py`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 A framework for building, orchestrating and deploying AI agents and multi agent workflows with support for Python and .N. 핵심 구조 신호는 Python, README.md, LICENSE, ci, docs, spec-artifacts이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
