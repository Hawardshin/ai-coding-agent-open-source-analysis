# microsoft/Multi-Agent-Custom-Automation-Engine-Solution-Accelerator 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

The Multi-Agent Custom Automation Engine Solution Accelerator is an AI-driven system that manages a group of AI agents to accomplish tasks based on user input. Powered by Microsoft Agent Framework, Azure Foundry, Azure Cosmos DB, and infrastructure services, it provides a reference application, allowing you to hit the ground running.

## 요약

- 조사 단위: `sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 528 files, 119 directories, depth score 119, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=src/tests/mcp_server/conftest.py, src/tests/mcp_server/test_factory.py, src/tests/mcp_server/test_fastmcp_run.py이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | microsoft/Multi-Agent-Custom-Automation-Engine-Solution-Accelerator |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 847 |
| Forks | 705 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator) |
| 기존 보고서 | [reports/global-trending/repositories/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator.md](../../../global-trending/repositories/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 528 / 119 |
| 관측 최대 깊이 | 7 |
| 상위 디렉터리 | .azdo, .devcontainer, .github, data, docs, infra, src, tests |
| 상위 확장자 | .py: 138, .tsx: 88, .png: 54, .md: 47, .csv: 32, .yml: 29, .json: 20, (none): 20, .css: 18, .ts: 17, .sh: 11, .txt: 9 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| src | source boundary | 128 |
| docs | documentation surface | 47 |
| tests | validation surface | 18 |
| .devcontainer | deployment surface | 1 |
| .github | ci surface | 1 |
| data | top-level component | 1 |
| infra | top-level component | 1 |


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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
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
| instruction | 0 | 명확하지 않음 |
| docs | 84 | [README.md](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/README.md)<br>[tests/e2e-test/README.md](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/tests/e2e-test/README.md)<br>[src/mcp_server/README_NEW.md](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/src/mcp_server/README_NEW.md)<br>[src/mcp_server/README.md](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/src/mcp_server/README.md)<br>[src/backend/README.md](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/src/backend/README.md)<br>[src/App/README.md](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/src/App/README.md)<br>[src/App/src/commonComponents/components/Panels/README.md](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/src/App/src/commonComponents/components/Panels/README.md)<br>[src/App/src/commonComponents/components/Layout/README.md](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/src/App/src/commonComponents/components/Layout/README.md) |
| config | 13 | [tests/e2e-test/requirements.txt](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/tests/e2e-test/requirements.txt)<br>[src/mcp_server/pyproject.toml](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/src/mcp_server/pyproject.toml)<br>[src/mcp_server/uv.lock](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/src/mcp_server/uv.lock)<br>[src/backend/pyproject.toml](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/src/backend/pyproject.toml)<br>[src/backend/requirements.txt](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/src/backend/requirements.txt)<br>[src/backend/uv.lock](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/src/backend/uv.lock)<br>[src/App/package.json](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/src/App/package.json)<br>[src/App/pyproject.toml](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/src/App/pyproject.toml) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 76 | [tests/e2e-test/.gitignore](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/tests/e2e-test/.gitignore)<br>[tests/e2e-test/pytest.ini](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/tests/e2e-test/pytest.ini)<br>[tests/e2e-test/README.md](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/tests/e2e-test/README.md)<br>[tests/e2e-test/requirements.txt](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/tests/e2e-test/requirements.txt)<br>[tests/e2e-test/sample_dotenv_file.txt](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/tests/e2e-test/sample_dotenv_file.txt)<br>[tests/e2e-test/tests/__init__.py](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/tests/e2e-test/tests/__init__.py) |
| CI workflow | 26 | [.github/workflows/agnext-biab-02-containerimage.yml](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/.github/workflows/agnext-biab-02-containerimage.yml)<br>[.github/workflows/azd-template-validation.yml](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/.github/workflows/azd-template-validation.yml)<br>[.github/workflows/azure-dev.yml](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/.github/workflows/azure-dev.yml)<br>[.github/workflows/broken-links-checker.yml](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/.github/workflows/broken-links-checker.yml)<br>[.github/workflows/codeql.yml](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/.github/workflows/codeql.yml)<br>[.github/workflows/create-release.yml](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/.github/workflows/create-release.yml) |
| 컨테이너/배포 | 6 | [src/mcp_server/docker-compose.yml](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/src/mcp_server/docker-compose.yml)<br>[src/mcp_server/Dockerfile](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/src/mcp_server/Dockerfile)<br>[src/backend/Dockerfile](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/src/backend/Dockerfile)<br>[src/backend/Dockerfile.NoCache](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/src/backend/Dockerfile.NoCache)<br>[src/App/Dockerfile](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/src/App/Dockerfile)<br>[.devcontainer/Dockerfile](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/.devcontainer/Dockerfile) |
| 보안/정책 | 34 | [SECURITY.md](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/SECURITY.md)<br>[src/tests/backend/auth/conftest.py](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/src/tests/backend/auth/conftest.py)<br>[src/tests/backend/auth/test_auth_utils.py](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/src/tests/backend/auth/test_auth_utils.py)<br>[src/backend/tests/auth/__init__.py](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/src/backend/tests/auth/__init__.py)<br>[src/backend/tests/auth/test_auth_utils.py](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/src/backend/tests/auth/test_auth_utils.py)<br>[src/backend/tests/auth/test_sample_user.py](../../../../sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator/src/backend/tests/auth/test_sample_user.py) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | agent instruction 파일이 명확하지 않음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `src/tests/mcp_server/conftest.py`, `src/tests/mcp_server/test_factory.py`, `src/tests/mcp_server/test_fastmcp_run.py`.
2. entrypoint를 따라 실행 흐름 확인: `src/App/src/App.css`, `src/App/src/App.tsx`, `src/App/src/index.css`.
3. agent/tool runtime 매핑: `src/tests/agents/__init__py`, `src/tests/agents/test_foundry_integration.py`, `src/tests/agents/test_human_approval_manager.py`.
4. retrieval/memory/indexing 확인: `src/App/index.html`, `src/App/src/index.css`, `src/App/src/index.tsx`.
5. test/eval 파일로 동작 검증: `tests/e2e-test/.gitignore`, `tests/e2e-test/pytest.ini`, `tests/e2e-test/README.md`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 The Multi Agent Custom Automation Engine Solution Accelerator is an AI driven system that manages a group of AI agents t. 핵심 구조 신호는 Python, README.md, LICENSE, tests, ci, docs이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
