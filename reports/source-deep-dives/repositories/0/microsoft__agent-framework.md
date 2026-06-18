# microsoft/agent-framework Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

A framework for building, orchestrating and deploying AI agents and multi-agent workflows with support for Python and .NET.

## 요약

- 조사 단위: `sources/microsoft__agent-framework` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 4,942 files, 1,131 directories, depth score 132, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=python/scripts/local_mcp_streamable_http_server.py, python/samples/04-hosting/foundry-hosted-agents/responses/12_foundry_toolbox_mcp_skills/.dockerignore, python/samples/04-hosting/foundry-hosted-agents/responses/12_foundry_toolbox_mcp_skills/.env.example이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | microsoft/agent-framework |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 11429 |
| Forks | 1919 |
| License | none |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/microsoft__agent-framework](../../../../sources/microsoft__agent-framework) |
| Existing report | [reports/global-trending/repositories/microsoft__agent-framework.md](../../../global-trending/repositories/microsoft__agent-framework.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 4942 / 1131 |
| Max observed depth | 10 |
| Top directories | .devcontainer, .github, declarative-agents, docs, dotnet, python, schemas |
| Top extensions | .cs: 2075, .py: 1101, .md: 487, .csproj: 336, .json: 198, .yaml: 148, (none): 112, .tsx: 55, .txt: 54, .example: 46, .yml: 40, .toml: 34 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
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


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
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


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 1251 | [python/tests/samples/hosting/test_toolbox_endpoint.py](../../../../sources/microsoft__agent-framework/python/tests/samples/hosting/test_toolbox_endpoint.py)<br>[python/tests/samples/getting_started/test_agent_samples.py](../../../../sources/microsoft__agent-framework/python/tests/samples/getting_started/test_agent_samples.py)<br>[python/tests/samples/getting_started/test_chat_client_samples.py](../../../../sources/microsoft__agent-framework/python/tests/samples/getting_started/test_chat_client_samples.py)<br>[python/tests/samples/getting_started/test_threads_samples.py](../../../../sources/microsoft__agent-framework/python/tests/samples/getting_started/test_threads_samples.py)<br>[python/scripts/integration_test_report/__init__.py](../../../../sources/microsoft__agent-framework/python/scripts/integration_test_report/__init__.py)<br>[python/scripts/integration_test_report/__main__.py](../../../../sources/microsoft__agent-framework/python/scripts/integration_test_report/__main__.py) |
| CI workflows | 28 | [.github/workflows/codeql-analysis.yml](../../../../sources/microsoft__agent-framework/.github/workflows/codeql-analysis.yml)<br>[.github/workflows/devflow-pr-review.yml](../../../../sources/microsoft__agent-framework/.github/workflows/devflow-pr-review.yml)<br>[.github/workflows/dotnet-build-and-test.yml](../../../../sources/microsoft__agent-framework/.github/workflows/dotnet-build-and-test.yml)<br>[.github/workflows/dotnet-format.yml](../../../../sources/microsoft__agent-framework/.github/workflows/dotnet-format.yml)<br>[.github/workflows/dotnet-integration-tests.yml](../../../../sources/microsoft__agent-framework/.github/workflows/dotnet-integration-tests.yml)<br>[.github/workflows/dotnet-verify-samples.yml](../../../../sources/microsoft__agent-framework/.github/workflows/dotnet-verify-samples.yml) |
| Containers / deploy | 51 | [python/samples/04-hosting/foundry-hosted-agents/responses/12_foundry_toolbox_mcp_skills/Dockerfile](../../../../sources/microsoft__agent-framework/python/samples/04-hosting/foundry-hosted-agents/responses/12_foundry_toolbox_mcp_skills/Dockerfile)<br>[python/samples/04-hosting/foundry-hosted-agents/responses/11_monty_codeact/Dockerfile](../../../../sources/microsoft__agent-framework/python/samples/04-hosting/foundry-hosted-agents/responses/11_monty_codeact/Dockerfile)<br>[python/samples/04-hosting/foundry-hosted-agents/responses/10_foundry_memory/Dockerfile](../../../../sources/microsoft__agent-framework/python/samples/04-hosting/foundry-hosted-agents/responses/10_foundry_memory/Dockerfile)<br>[python/samples/04-hosting/foundry-hosted-agents/responses/09_foundry_skills/Dockerfile](../../../../sources/microsoft__agent-framework/python/samples/04-hosting/foundry-hosted-agents/responses/09_foundry_skills/Dockerfile)<br>[python/samples/04-hosting/foundry-hosted-agents/responses/08_azure_search_rag/Dockerfile](../../../../sources/microsoft__agent-framework/python/samples/04-hosting/foundry-hosted-agents/responses/08_azure_search_rag/Dockerfile)<br>[python/samples/04-hosting/foundry-hosted-agents/responses/07_observability/Dockerfile](../../../../sources/microsoft__agent-framework/python/samples/04-hosting/foundry-hosted-agents/responses/07_observability/Dockerfile) |
| Security / policy | 20 | [SECURITY.md](../../../../sources/microsoft__agent-framework/SECURITY.md)<br>[python/samples/04-hosting/foundry-hosted-agents/responses/09_foundry_skills/skills/escalation-policy/SKILL.md](../../../../sources/microsoft__agent-framework/python/samples/04-hosting/foundry-hosted-agents/responses/09_foundry_skills/skills/escalation-policy/SKILL.md)<br>[python/samples/02-agents/security/email_security_example.py](../../../../sources/microsoft__agent-framework/python/samples/02-agents/security/email_security_example.py)<br>[python/samples/02-agents/security/FIDES_DEVELOPER_GUIDE.md](../../../../sources/microsoft__agent-framework/python/samples/02-agents/security/FIDES_DEVELOPER_GUIDE.md)<br>[python/samples/02-agents/security/README.md](../../../../sources/microsoft__agent-framework/python/samples/02-agents/security/README.md)<br>[python/samples/02-agents/security/repo_confidentiality_example.py](../../../../sources/microsoft__agent-framework/python/samples/02-agents/security/repo_confidentiality_example.py) |
| Agent instructions | 32 | [python/AGENTS.md](../../../../sources/microsoft__agent-framework/python/AGENTS.md)<br>[python/samples/AGENTS.md](../../../../sources/microsoft__agent-framework/python/samples/AGENTS.md)<br>[python/packages/redis/AGENTS.md](../../../../sources/microsoft__agent-framework/python/packages/redis/AGENTS.md)<br>[python/packages/purview/AGENTS.md](../../../../sources/microsoft__agent-framework/python/packages/purview/AGENTS.md)<br>[python/packages/openai/AGENTS.md](../../../../sources/microsoft__agent-framework/python/packages/openai/AGENTS.md)<br>[python/packages/ollama/AGENTS.md](../../../../sources/microsoft__agent-framework/python/packages/ollama/AGENTS.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `python/scripts/local_mcp_streamable_http_server.py`, `python/samples/04-hosting/foundry-hosted-agents/responses/12_foundry_toolbox_mcp_skills/.dockerignore`, `python/samples/04-hosting/foundry-hosted-agents/responses/12_foundry_toolbox_mcp_skills/.env.example`.
2. Trace execution through entrypoints: `python/scripts/sample_validation/__main__.py`, `python/scripts/integration_test_report/__main__.py`, `python/samples/05-end-to-end/neo4j_graphrag/main.py`.
3. Map agent/tool runtime through: `python/AGENTS.md`, `python/scripts/sample_validation/workflow.py`, `python/samples/AGENTS.md`.
4. Inspect retrieval/memory/indexing through: `python/samples/05-end-to-end/neo4j_graphrag/main.py`, `python/samples/05-end-to-end/neo4j_graphrag/README.md`, `python/samples/05-end-to-end/chatkit-integration/frontend/index.html`.
5. Verify behavior through test/eval files: `python/tests/samples/hosting/test_toolbox_endpoint.py`, `python/tests/samples/getting_started/test_agent_samples.py`, `python/tests/samples/getting_started/test_chat_client_samples.py`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 A framework for building, orchestrating and deploying AI agents and multi agent workflows with support for Python and .N. 핵심 구조 신호는 Python, README.md, LICENSE, ci, docs, spec-artifacts이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
