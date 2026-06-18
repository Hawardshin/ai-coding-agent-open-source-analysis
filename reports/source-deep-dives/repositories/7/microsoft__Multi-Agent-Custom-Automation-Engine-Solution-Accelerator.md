# microsoft/Multi-Agent-Custom-Automation-Engine-Solution-Accelerator Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

The Multi-Agent Custom Automation Engine Solution Accelerator is an AI-driven system that manages a group of AI agents to accomplish tasks based on user input. Powered by Microsoft Agent Framework, Azure Foundry, Azure Cosmos DB, and infrastructure services, it provides a reference application, allowing you to hit the ground running.

## 요약

- 조사 단위: `sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 528 files, 119 directories, depth score 125, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=src/tests/mcp_server/conftest.py, src/tests/mcp_server/test_factory.py, src/tests/mcp_server/test_fastmcp_run.py이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | microsoft/Multi-Agent-Custom-Automation-Engine-Solution-Accelerator |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 847 |
| Forks | 705 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator) |
| Existing report | [reports/global-trending/repositories/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator.md](../../../global-trending/repositories/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 528 / 119 |
| Max observed depth | 7 |
| Top directories | .azdo, .devcontainer, .github, data, docs, infra, src, tests |
| Top extensions | .py: 138, .tsx: 88, .png: 54, .md: 47, .csv: 32, .yml: 29, .json: 20, (none): 20, .css: 18, .ts: 17, .sh: 11, .txt: 9 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 128 |
| docs | documentation surface | 47 |
| tests | validation surface | 18 |
| .devcontainer | deployment surface | 1 |
| .github | ci surface | 1 |
| data | top-level component | 1 |
| infra | top-level component | 1 |


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
| mcp | [src/tests/mcp_server/conftest.py](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/src/tests/mcp_server/conftest.py) | mcp signal |
| mcp | [src/tests/mcp_server/test_factory.py](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/src/tests/mcp_server/test_factory.py) | mcp signal |
| mcp | [src/tests/mcp_server/test_fastmcp_run.py](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/src/tests/mcp_server/test_fastmcp_run.py) | mcp signal |
| mcp | [src/tests/mcp_server/test_hr_service.py](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/src/tests/mcp_server/test_hr_service.py) | mcp signal |
| agentRuntime | [src/tests/agents/__init__py](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/src/tests/agents/__init__py) | agentRuntime signal |
| agentRuntime | [src/tests/agents/test_foundry_integration.py](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/src/tests/agents/test_foundry_integration.py) | agentRuntime signal |
| agentRuntime | [src/tests/agents/test_human_approval_manager.py](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/src/tests/agents/test_human_approval_manager.py) | agentRuntime signal |
| agentRuntime | [src/tests/agents/test_proxy_agent.py](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/src/tests/agents/test_proxy_agent.py) | agentRuntime signal |
| entrypoints | [src/App/src/App.css](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/src/App/src/App.css) | entrypoints signal |
| entrypoints | [src/App/src/App.tsx](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/src/App/src/App.tsx) | entrypoints signal |
| entrypoints | [src/App/src/index.css](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/src/App/src/index.css) | entrypoints signal |
| entrypoints | [src/App/src/index.tsx](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/src/App/src/index.tsx) | entrypoints signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 5 | [src/App/src/App.css](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/src/App/src/App.css)<br>[src/App/src/App.tsx](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/src/App/src/App.tsx)<br>[src/App/src/index.css](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/src/App/src/index.css)<br>[src/App/src/index.tsx](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/src/App/src/index.tsx)<br>[infra/main.json](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/infra/main.json) |
| agentRuntime | 26 | [src/tests/agents/__init__py](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/src/tests/agents/__init__py)<br>[src/tests/agents/test_foundry_integration.py](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/src/tests/agents/test_foundry_integration.py)<br>[src/tests/agents/test_human_approval_manager.py](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/src/tests/agents/test_human_approval_manager.py)<br>[src/tests/agents/test_proxy_agent.py](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/src/tests/agents/test_proxy_agent.py)<br>[src/tests/agents/test_reasoning_agent.py](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/src/tests/agents/test_reasoning_agent.py)<br>[src/tests/agents/interactive_test_harness/foundry_agent_interactive.py](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/src/tests/agents/interactive_test_harness/foundry_agent_interactive.py)<br>[src/tests/agents/interactive_test_harness/reasoning_agent_interactive.py](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/src/tests/agents/interactive_test_harness/reasoning_agent_interactive.py)<br>[src/backend/v4/magentic_agents/models/agent_models.py](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/src/backend/v4/magentic_agents/models/agent_models.py) |
| mcp | 33 | [src/tests/mcp_server/conftest.py](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/src/tests/mcp_server/conftest.py)<br>[src/tests/mcp_server/test_factory.py](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/src/tests/mcp_server/test_factory.py)<br>[src/tests/mcp_server/test_fastmcp_run.py](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/src/tests/mcp_server/test_fastmcp_run.py)<br>[src/tests/mcp_server/test_hr_service.py](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/src/tests/mcp_server/test_hr_service.py)<br>[src/tests/mcp_server/test_utils.py](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/src/tests/mcp_server/test_utils.py)<br>[src/tests/backend/v4/common/services/test_mcp_service.py](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/src/tests/backend/v4/common/services/test_mcp_service.py)<br>[src/mcp_server/__init__.py](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/src/mcp_server/__init__.py)<br>[src/mcp_server/.env.example](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/src/mcp_server/.env.example) |
| retrieval | 13 | [src/App/index.html](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/src/App/index.html)<br>[src/App/src/index.css](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/src/App/src/index.css)<br>[src/App/src/index.tsx](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/src/App/src/index.tsx)<br>[src/App/src/utils/index.ts](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/src/App/src/utils/index.ts)<br>[src/App/src/store/index.ts](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/src/App/src/store/index.ts)<br>[src/App/src/pages/index.tsx](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/src/App/src/pages/index.tsx)<br>[src/App/src/models/index.tsx](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/src/App/src/models/index.tsx)<br>[src/App/src/hooks/index.tsx](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/src/App/src/hooks/index.tsx) |
| spec | 7 | [tests/e2e-test/requirements.txt](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/tests/e2e-test/requirements.txt)<br>[src/backend/requirements.txt](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/src/backend/requirements.txt)<br>[src/App/requirements.txt](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/src/App/requirements.txt)<br>[infra/vscode_web/endpoint-requirements.txt](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/infra/vscode_web/endpoint-requirements.txt)<br>[infra/vscode_web/requirements.txt](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/infra/vscode_web/requirements.txt)<br>[infra/scripts/requirements.txt](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/infra/scripts/requirements.txt)<br>[docs/images/readme/architecture.png](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/docs/images/readme/architecture.png) |
| eval | 76 | [tests/e2e-test/.gitignore](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/tests/e2e-test/.gitignore)<br>[tests/e2e-test/pytest.ini](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/tests/e2e-test/pytest.ini)<br>[tests/e2e-test/README.md](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/tests/e2e-test/README.md)<br>[tests/e2e-test/requirements.txt](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/tests/e2e-test/requirements.txt)<br>[tests/e2e-test/sample_dotenv_file.txt](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/tests/e2e-test/sample_dotenv_file.txt)<br>[tests/e2e-test/tests/__init__.py](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/tests/e2e-test/tests/__init__.py)<br>[tests/e2e-test/tests/conftest.py](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/tests/e2e-test/tests/conftest.py)<br>[tests/e2e-test/tests/test_MACAE_Smoke_test.py](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/tests/e2e-test/tests/test_MACAE_Smoke_test.py) |
| security | 34 | [SECURITY.md](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/SECURITY.md)<br>[src/tests/backend/auth/conftest.py](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/src/tests/backend/auth/conftest.py)<br>[src/tests/backend/auth/test_auth_utils.py](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/src/tests/backend/auth/test_auth_utils.py)<br>[src/backend/tests/auth/__init__.py](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/src/backend/tests/auth/__init__.py)<br>[src/backend/tests/auth/test_auth_utils.py](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/src/backend/tests/auth/test_auth_utils.py)<br>[src/backend/tests/auth/test_sample_user.py](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/src/backend/tests/auth/test_sample_user.py)<br>[src/backend/auth/__init__.py](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/src/backend/auth/__init__.py)<br>[src/backend/auth/auth_utils.py](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/src/backend/auth/auth_utils.py) |
| ci | 26 | [.github/workflows/agnext-biab-02-containerimage.yml](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/.github/workflows/agnext-biab-02-containerimage.yml)<br>[.github/workflows/azd-template-validation.yml](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/.github/workflows/azd-template-validation.yml)<br>[.github/workflows/azure-dev.yml](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/.github/workflows/azure-dev.yml)<br>[.github/workflows/broken-links-checker.yml](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/.github/workflows/broken-links-checker.yml)<br>[.github/workflows/codeql.yml](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/.github/workflows/codeql.yml)<br>[.github/workflows/create-release.yml](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/.github/workflows/create-release.yml)<br>[.github/workflows/deploy-orchestrator.yml](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/.github/workflows/deploy-orchestrator.yml)<br>[.github/workflows/deploy-v2.yml](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/.github/workflows/deploy-v2.yml) |
| container | 6 | [src/mcp_server/docker-compose.yml](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/src/mcp_server/docker-compose.yml)<br>[src/mcp_server/Dockerfile](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/src/mcp_server/Dockerfile)<br>[src/backend/Dockerfile](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/src/backend/Dockerfile)<br>[src/backend/Dockerfile.NoCache](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/src/backend/Dockerfile.NoCache)<br>[src/App/Dockerfile](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/src/App/Dockerfile)<br>[.devcontainer/Dockerfile](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/.devcontainer/Dockerfile) |
| instruction | 0 | not obvious |
| docs | 84 | [README.md](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/README.md)<br>[tests/e2e-test/README.md](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/tests/e2e-test/README.md)<br>[src/mcp_server/README_NEW.md](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/src/mcp_server/README_NEW.md)<br>[src/mcp_server/README.md](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/src/mcp_server/README.md)<br>[src/backend/README.md](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/src/backend/README.md)<br>[src/App/README.md](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/src/App/README.md)<br>[src/App/src/commonComponents/components/Panels/README.md](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/src/App/src/commonComponents/components/Panels/README.md)<br>[src/App/src/commonComponents/components/Layout/README.md](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/src/App/src/commonComponents/components/Layout/README.md) |
| config | 13 | [tests/e2e-test/requirements.txt](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/tests/e2e-test/requirements.txt)<br>[src/mcp_server/pyproject.toml](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/src/mcp_server/pyproject.toml)<br>[src/mcp_server/uv.lock](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/src/mcp_server/uv.lock)<br>[src/backend/pyproject.toml](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/src/backend/pyproject.toml)<br>[src/backend/requirements.txt](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/src/backend/requirements.txt)<br>[src/backend/uv.lock](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/src/backend/uv.lock)<br>[src/App/package.json](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/src/App/package.json)<br>[src/App/pyproject.toml](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/src/App/pyproject.toml) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 76 | [tests/e2e-test/.gitignore](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/tests/e2e-test/.gitignore)<br>[tests/e2e-test/pytest.ini](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/tests/e2e-test/pytest.ini)<br>[tests/e2e-test/README.md](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/tests/e2e-test/README.md)<br>[tests/e2e-test/requirements.txt](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/tests/e2e-test/requirements.txt)<br>[tests/e2e-test/sample_dotenv_file.txt](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/tests/e2e-test/sample_dotenv_file.txt)<br>[tests/e2e-test/tests/__init__.py](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/tests/e2e-test/tests/__init__.py) |
| CI workflows | 26 | [.github/workflows/agnext-biab-02-containerimage.yml](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/.github/workflows/agnext-biab-02-containerimage.yml)<br>[.github/workflows/azd-template-validation.yml](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/.github/workflows/azd-template-validation.yml)<br>[.github/workflows/azure-dev.yml](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/.github/workflows/azure-dev.yml)<br>[.github/workflows/broken-links-checker.yml](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/.github/workflows/broken-links-checker.yml)<br>[.github/workflows/codeql.yml](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/.github/workflows/codeql.yml)<br>[.github/workflows/create-release.yml](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/.github/workflows/create-release.yml) |
| Containers / deploy | 6 | [src/mcp_server/docker-compose.yml](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/src/mcp_server/docker-compose.yml)<br>[src/mcp_server/Dockerfile](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/src/mcp_server/Dockerfile)<br>[src/backend/Dockerfile](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/src/backend/Dockerfile)<br>[src/backend/Dockerfile.NoCache](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/src/backend/Dockerfile.NoCache)<br>[src/App/Dockerfile](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/src/App/Dockerfile)<br>[.devcontainer/Dockerfile](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/.devcontainer/Dockerfile) |
| Security / policy | 34 | [SECURITY.md](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/SECURITY.md)<br>[src/tests/backend/auth/conftest.py](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/src/tests/backend/auth/conftest.py)<br>[src/tests/backend/auth/test_auth_utils.py](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/src/tests/backend/auth/test_auth_utils.py)<br>[src/backend/tests/auth/__init__.py](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/src/backend/tests/auth/__init__.py)<br>[src/backend/tests/auth/test_auth_utils.py](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/src/backend/tests/auth/test_auth_utils.py)<br>[src/backend/tests/auth/test_sample_user.py](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/src/backend/tests/auth/test_sample_user.py) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | agent instruction files not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `src/tests/mcp_server/conftest.py`, `src/tests/mcp_server/test_factory.py`, `src/tests/mcp_server/test_fastmcp_run.py`.
2. Trace execution through entrypoints: `src/App/src/App.css`, `src/App/src/App.tsx`, `src/App/src/index.css`.
3. Map agent/tool runtime through: `src/tests/agents/__init__py`, `src/tests/agents/test_foundry_integration.py`, `src/tests/agents/test_human_approval_manager.py`.
4. Inspect retrieval/memory/indexing through: `src/App/index.html`, `src/App/src/index.css`, `src/App/src/index.tsx`.
5. Verify behavior through test/eval files: `tests/e2e-test/.gitignore`, `tests/e2e-test/pytest.ini`, `tests/e2e-test/README.md`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 The Multi Agent Custom Automation Engine Solution Accelerator is an AI driven system that manages a group of AI agents t. 핵심 구조 신호는 Python, README.md, LICENSE, tests, ci, docs이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
