# xerrors/Yuxi 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

结合知识库、知识图谱管理的 多租户 Agent Harness 平台。 An agent harness that integrates a LightRAG knowledge base and knowledge graphs. Build with LangChain + Vue + FastAPI, support DeepAgents、MinerU PDF、Neo4j 、MCP.

## 요약

- 조사 단위: `sources/xerrors__Yuxi` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 649 files, 117 directories, depth score 124, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=web/src/apis/mcp_api.js, docs/agents/mcp-integration.md, backend/test/unit/toolkits/test_tool_registry.py이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | xerrors/Yuxi |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 5623 |
| Forks | 809 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/xerrors__Yuxi](../../../../sources/xerrors__Yuxi) |
| 기존 보고서 | [reports/global-trending/repositories/xerrors__Yuxi.md](../../../global-trending/repositories/xerrors__Yuxi.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 649 / 117 |
| 관측 최대 깊이 | 9 |
| 상위 디렉터리 | .github, backend, docker, docs, scripts, web |
| 상위 확장자 | .py: 299, .vue: 130, .js: 76, .md: 41, .svg: 27, .css: 7, (none): 7, .less: 5, .png: 5, .sh: 5, .yml: 5, .dockerfile: 4 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 56 |
| web | source boundary | 51 |
| .github | ci surface | 1 |
| backend | top-level component | 1 |
| docker | documentation surface | 1 |
| scripts | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | up | make up |
| utility | Makefile | down | make down |
| utility | Makefile | reset | make reset |
| utility | Makefile | up-lite | make up-lite |
| utility | Makefile | logs | make logs |
| utility | Makefile | seed | make seed |
| quality | Makefile | format | make format |


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
| mcp | [web/src/apis/mcp_api.js](../../../../sources/xerrors__Yuxi/web/src/apis/mcp_api.js) | mcp signal |
| mcp | [docs/agents/mcp-integration.md](../../../../sources/xerrors__Yuxi/docs/agents/mcp-integration.md) | mcp signal |
| mcp | [backend/test/unit/toolkits/test_tool_registry.py](../../../../sources/xerrors__Yuxi/backend/test/unit/toolkits/test_tool_registry.py) | mcp signal |
| mcp | [backend/test/unit/services/test_mcp_service.py](../../../../sources/xerrors__Yuxi/backend/test/unit/services/test_mcp_service.py) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/xerrors__Yuxi/AGENTS.md) | agentRuntime signal |
| agentRuntime | [web/src/stores/agent.js](../../../../sources/xerrors__Yuxi/web/src/stores/agent.js) | agentRuntime signal |
| agentRuntime | [web/src/components/ToolCallingResult/tools/AskUserQuestionTool.vue](../../../../sources/xerrors__Yuxi/web/src/components/ToolCallingResult/tools/AskUserQuestionTool.vue) | agentRuntime signal |
| agentRuntime | [web/src/components/ToolCallingResult/tools/CalculatorTool.vue](../../../../sources/xerrors__Yuxi/web/src/components/ToolCallingResult/tools/CalculatorTool.vue) | agentRuntime signal |
| entrypoints | [web/src/App.vue](../../../../sources/xerrors__Yuxi/web/src/App.vue) | entrypoints signal |
| entrypoints | [web/src/main.js](../../../../sources/xerrors__Yuxi/web/src/main.js) | entrypoints signal |
| entrypoints | [backend/server/main.py](../../../../sources/xerrors__Yuxi/backend/server/main.py) | entrypoints signal |
| entrypoints | [backend/package/yuxi/main.py](../../../../sources/xerrors__Yuxi/backend/package/yuxi/main.py) | entrypoints signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 4 | [web/src/App.vue](../../../../sources/xerrors__Yuxi/web/src/App.vue)<br>[web/src/main.js](../../../../sources/xerrors__Yuxi/web/src/main.js)<br>[backend/server/main.py](../../../../sources/xerrors__Yuxi/backend/server/main.py)<br>[backend/package/yuxi/main.py](../../../../sources/xerrors__Yuxi/backend/package/yuxi/main.py) |
| agentRuntime | 113 | [AGENTS.md](../../../../sources/xerrors__Yuxi/AGENTS.md)<br>[web/src/stores/agent.js](../../../../sources/xerrors__Yuxi/web/src/stores/agent.js)<br>[web/src/components/ToolCallingResult/tools/AskUserQuestionTool.vue](../../../../sources/xerrors__Yuxi/web/src/components/ToolCallingResult/tools/AskUserQuestionTool.vue)<br>[web/src/components/ToolCallingResult/tools/CalculatorTool.vue](../../../../sources/xerrors__Yuxi/web/src/components/ToolCallingResult/tools/CalculatorTool.vue)<br>[web/src/components/ToolCallingResult/tools/ChartTool.vue](../../../../sources/xerrors__Yuxi/web/src/components/ToolCallingResult/tools/ChartTool.vue)<br>[web/src/components/ToolCallingResult/tools/EditFileTool.vue](../../../../sources/xerrors__Yuxi/web/src/components/ToolCallingResult/tools/EditFileTool.vue)<br>[web/src/components/ToolCallingResult/tools/ExecuteTool.vue](../../../../sources/xerrors__Yuxi/web/src/components/ToolCallingResult/tools/ExecuteTool.vue)<br>[web/src/components/ToolCallingResult/tools/FindKbDocumentTool.vue](../../../../sources/xerrors__Yuxi/web/src/components/ToolCallingResult/tools/FindKbDocumentTool.vue) |
| mcp | 9 | [web/src/apis/mcp_api.js](../../../../sources/xerrors__Yuxi/web/src/apis/mcp_api.js)<br>[docs/agents/mcp-integration.md](../../../../sources/xerrors__Yuxi/docs/agents/mcp-integration.md)<br>[backend/test/unit/toolkits/test_tool_registry.py](../../../../sources/xerrors__Yuxi/backend/test/unit/toolkits/test_tool_registry.py)<br>[backend/test/unit/services/test_mcp_service.py](../../../../sources/xerrors__Yuxi/backend/test/unit/services/test_mcp_service.py)<br>[backend/test/unit/routers/test_mcp_router.py](../../../../sources/xerrors__Yuxi/backend/test/unit/routers/test_mcp_router.py)<br>[backend/server/routers/mcp_router.py](../../../../sources/xerrors__Yuxi/backend/server/routers/mcp_router.py)<br>[backend/package/yuxi/agents/mcp/__init__.py](../../../../sources/xerrors__Yuxi/backend/package/yuxi/agents/mcp/__init__.py)<br>[backend/package/yuxi/agents/mcp/repository.py](../../../../sources/xerrors__Yuxi/backend/package/yuxi/agents/mcp/repository.py) |
| retrieval | 96 | [web/index.html](../../../../sources/xerrors__Yuxi/web/index.html)<br>[web/src/utils/chunk_presets.js](../../../../sources/xerrors__Yuxi/web/src/utils/chunk_presets.js)<br>[web/src/router/index.js](../../../../sources/xerrors__Yuxi/web/src/router/index.js)<br>[web/src/components/ToolCallingResult/index.js](../../../../sources/xerrors__Yuxi/web/src/components/ToolCallingResult/index.js)<br>[web/src/assets/icons/files/folder-knowledge.svg](../../../../sources/xerrors__Yuxi/web/src/assets/icons/files/folder-knowledge.svg)<br>[web/src/apis/graph_api.js](../../../../sources/xerrors__Yuxi/web/src/apis/graph_api.js)<br>[web/src/apis/index.js](../../../../sources/xerrors__Yuxi/web/src/apis/index.js)<br>[web/src/apis/knowledge_api.js](../../../../sources/xerrors__Yuxi/web/src/apis/knowledge_api.js) |
| spec | 6 | [ARCHITECTURE.md](../../../../sources/xerrors__Yuxi/ARCHITECTURE.md)<br>[web/src/utils/__tests__/messageProcessor.spec.js](../../../../sources/xerrors__Yuxi/web/src/utils/__tests__/messageProcessor.spec.js)<br>[docs/develop-guides/design.md](../../../../sources/xerrors__Yuxi/docs/develop-guides/design.md)<br>[docs/develop-guides/roadmap.md](../../../../sources/xerrors__Yuxi/docs/develop-guides/roadmap.md)<br>[docs/agents/sandbox-architecture.md](../../../../sources/xerrors__Yuxi/docs/agents/sandbox-architecture.md)<br>[docker/sandbox_provisioner/requirements.txt](../../../../sources/xerrors__Yuxi/docker/sandbox_provisioner/requirements.txt) |
| eval | 125 | [web/src/utils/__tests__/messageProcessor.spec.js](../../../../sources/xerrors__Yuxi/web/src/utils/__tests__/messageProcessor.spec.js)<br>[web/src/utils/__tests__/pixelAvatar.test.js](../../../../sources/xerrors__Yuxi/web/src/utils/__tests__/pixelAvatar.test.js)<br>[web/src/utils/__tests__/runStreamResume.test.js](../../../../sources/xerrors__Yuxi/web/src/utils/__tests__/runStreamResume.test.js)<br>[web/src/utils/__tests__/subagentThread.test.js](../../../../sources/xerrors__Yuxi/web/src/utils/__tests__/subagentThread.test.js)<br>[web/src/utils/__tests__/svgRenderer.test.js](../../../../sources/xerrors__Yuxi/web/src/utils/__tests__/svgRenderer.test.js)<br>[docs/intro/evaluation.md](../../../../sources/xerrors__Yuxi/docs/intro/evaluation.md)<br>[backend/test/.env.test.example](../../../../sources/xerrors__Yuxi/backend/test/.env.test.example)<br>[backend/test/conftest.py](../../../../sources/xerrors__Yuxi/backend/test/conftest.py) |
| security | 24 | [web/src/apis/auth_api.js](../../../../sources/xerrors__Yuxi/web/src/apis/auth_api.js)<br>[web/public/protocols/privacy-policy.template.html](../../../../sources/xerrors__Yuxi/web/public/protocols/privacy-policy.template.html)<br>[docs/agents/sandbox-architecture.md](../../../../sources/xerrors__Yuxi/docs/agents/sandbox-architecture.md)<br>[docs/advanced/third-party-auth.md](../../../../sources/xerrors__Yuxi/docs/advanced/third-party-auth.md)<br>[docker/sandbox_provisioner/app.py](../../../../sources/xerrors__Yuxi/docker/sandbox_provisioner/app.py)<br>[docker/sandbox_provisioner/Dockerfile](../../../../sources/xerrors__Yuxi/docker/sandbox_provisioner/Dockerfile)<br>[docker/sandbox_provisioner/requirements.txt](../../../../sources/xerrors__Yuxi/docker/sandbox_provisioner/requirements.txt)<br>[docker/sandbox_provisioner/sandbox.env](../../../../sources/xerrors__Yuxi/docker/sandbox_provisioner/sandbox.env) |
| ci | 3 | [.github/workflows/close-stale-issues.yml](../../../../sources/xerrors__Yuxi/.github/workflows/close-stale-issues.yml)<br>[.github/workflows/deploy.yml](../../../../sources/xerrors__Yuxi/.github/workflows/deploy.yml)<br>[.github/workflows/ruff.yml](../../../../sources/xerrors__Yuxi/.github/workflows/ruff.yml) |
| container | 3 | [docker-compose.prod.yml](../../../../sources/xerrors__Yuxi/docker-compose.prod.yml)<br>[docker-compose.yml](../../../../sources/xerrors__Yuxi/docker-compose.yml)<br>[docker/sandbox_provisioner/Dockerfile](../../../../sources/xerrors__Yuxi/docker/sandbox_provisioner/Dockerfile) |
| instruction | 2 | [AGENTS.md](../../../../sources/xerrors__Yuxi/AGENTS.md)<br>[CLAUDE.md](../../../../sources/xerrors__Yuxi/CLAUDE.md) |
| docs | 39 | [README.en.md](../../../../sources/xerrors__Yuxi/README.en.md)<br>[README.md](../../../../sources/xerrors__Yuxi/README.md)<br>[docs/index.md](../../../../sources/xerrors__Yuxi/docs/index.md)<br>[docs/package.json](../../../../sources/xerrors__Yuxi/docs/package.json)<br>[docs/pnpm-lock.yaml](../../../../sources/xerrors__Yuxi/docs/pnpm-lock.yaml)<br>[docs/public/bb.png](../../../../sources/xerrors__Yuxi/docs/public/bb.png)<br>[docs/public/favicon.svg](../../../../sources/xerrors__Yuxi/docs/public/favicon.svg)<br>[docs/public/images/agent.png](../../../../sources/xerrors__Yuxi/docs/public/images/agent.png) |
| config | 8 | [Makefile](../../../../sources/xerrors__Yuxi/Makefile)<br>[web/package.json](../../../../sources/xerrors__Yuxi/web/package.json)<br>[docs/package.json](../../../../sources/xerrors__Yuxi/docs/package.json)<br>[docker/sandbox_provisioner/requirements.txt](../../../../sources/xerrors__Yuxi/docker/sandbox_provisioner/requirements.txt)<br>[backend/pyproject.toml](../../../../sources/xerrors__Yuxi/backend/pyproject.toml)<br>[backend/uv.lock](../../../../sources/xerrors__Yuxi/backend/uv.lock)<br>[backend/package/pyproject.toml](../../../../sources/xerrors__Yuxi/backend/package/pyproject.toml)<br>[backend/package/uv.lock](../../../../sources/xerrors__Yuxi/backend/package/uv.lock) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 125 | [web/src/utils/__tests__/messageProcessor.spec.js](../../../../sources/xerrors__Yuxi/web/src/utils/__tests__/messageProcessor.spec.js)<br>[web/src/utils/__tests__/pixelAvatar.test.js](../../../../sources/xerrors__Yuxi/web/src/utils/__tests__/pixelAvatar.test.js)<br>[web/src/utils/__tests__/runStreamResume.test.js](../../../../sources/xerrors__Yuxi/web/src/utils/__tests__/runStreamResume.test.js)<br>[web/src/utils/__tests__/subagentThread.test.js](../../../../sources/xerrors__Yuxi/web/src/utils/__tests__/subagentThread.test.js)<br>[web/src/utils/__tests__/svgRenderer.test.js](../../../../sources/xerrors__Yuxi/web/src/utils/__tests__/svgRenderer.test.js)<br>[docs/intro/evaluation.md](../../../../sources/xerrors__Yuxi/docs/intro/evaluation.md) |
| CI workflow | 3 | [.github/workflows/close-stale-issues.yml](../../../../sources/xerrors__Yuxi/.github/workflows/close-stale-issues.yml)<br>[.github/workflows/deploy.yml](../../../../sources/xerrors__Yuxi/.github/workflows/deploy.yml)<br>[.github/workflows/ruff.yml](../../../../sources/xerrors__Yuxi/.github/workflows/ruff.yml) |
| 컨테이너/배포 | 3 | [docker-compose.prod.yml](../../../../sources/xerrors__Yuxi/docker-compose.prod.yml)<br>[docker-compose.yml](../../../../sources/xerrors__Yuxi/docker-compose.yml)<br>[docker/sandbox_provisioner/Dockerfile](../../../../sources/xerrors__Yuxi/docker/sandbox_provisioner/Dockerfile) |
| 보안/정책 | 24 | [web/src/apis/auth_api.js](../../../../sources/xerrors__Yuxi/web/src/apis/auth_api.js)<br>[web/public/protocols/privacy-policy.template.html](../../../../sources/xerrors__Yuxi/web/public/protocols/privacy-policy.template.html)<br>[docs/agents/sandbox-architecture.md](../../../../sources/xerrors__Yuxi/docs/agents/sandbox-architecture.md)<br>[docs/advanced/third-party-auth.md](../../../../sources/xerrors__Yuxi/docs/advanced/third-party-auth.md)<br>[docker/sandbox_provisioner/app.py](../../../../sources/xerrors__Yuxi/docker/sandbox_provisioner/app.py)<br>[docker/sandbox_provisioner/Dockerfile](../../../../sources/xerrors__Yuxi/docker/sandbox_provisioner/Dockerfile) |
| 에이전트 지시문 | 2 | [AGENTS.md](../../../../sources/xerrors__Yuxi/AGENTS.md)<br>[CLAUDE.md](../../../../sources/xerrors__Yuxi/CLAUDE.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `web/src/apis/mcp_api.js`, `docs/agents/mcp-integration.md`, `backend/test/unit/toolkits/test_tool_registry.py`.
2. entrypoint를 따라 실행 흐름 확인: `web/src/App.vue`, `web/src/main.js`, `backend/server/main.py`.
3. agent/tool runtime 매핑: `AGENTS.md`, `web/src/stores/agent.js`, `web/src/components/ToolCallingResult/tools/AskUserQuestionTool.vue`.
4. retrieval/memory/indexing 확인: `web/index.html`, `web/src/utils/chunk_presets.js`, `web/src/router/index.js`.
5. test/eval 파일로 동작 검증: `web/src/utils/__tests__/messageProcessor.spec.js`, `web/src/utils/__tests__/pixelAvatar.test.js`, `web/src/utils/__tests__/runStreamResume.test.js`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 结合知识库、知识图谱管理的 多租户 Agent Harness 平台。 An agent harness that integrates a LightRAG knowledge base and knowledge graphs. Bui. 핵심 구조 신호는 Python, docker-compose.yml, Makefile, README.md, AGENTS.md, CLAUDE.md이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
