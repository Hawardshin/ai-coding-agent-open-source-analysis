# heymrun/heym 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

Build AI workflows by prompt or visual canvas. Heym is source-available and self-hosted, with agents, RAG, MCP, HITL, observability, evals, token cost tracking and more.

## 요약

- 조사 단위: `sources/heymrun__heym` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 795 files, 78 directories, depth score 125, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=frontend/src/docs/content/tabs/mcp-tab.md, frontend/src/docs/content/nodes/mcp-call-node.md, frontend/src/components/MCP/MCPPanel.vue이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | heymrun/heym |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 612 |
| Forks | 65 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/heymrun__heym](../../../../sources/heymrun__heym) |
| 기존 보고서 | [reports/global-trending/repositories/heymrun__heym.md](../../../global-trending/repositories/heymrun__heym.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 795 / 78 |
| 관측 최대 깊이 | 6 |
| 상위 디렉터리 | .cursor, .github, backend, docker, docs, frontend |
| 상위 확장자 | .py: 307, .md: 184, .vue: 140, .ts: 88, .webm: 17, .svg: 9, .sh: 7, (none): 7, .gif: 5, .png: 5, .yml: 5, .js: 4 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 52 |
| .github | ci surface | 1 |
| backend | top-level component | 1 |
| docker | documentation surface | 1 |
| frontend | top-level component | 1 |


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
| mcp | [frontend/src/docs/content/tabs/mcp-tab.md](../../../../sources/heymrun__heym/frontend/src/docs/content/tabs/mcp-tab.md) | mcp signal |
| mcp | [frontend/src/docs/content/nodes/mcp-call-node.md](../../../../sources/heymrun__heym/frontend/src/docs/content/nodes/mcp-call-node.md) | mcp signal |
| mcp | [frontend/src/components/MCP/MCPPanel.vue](../../../../sources/heymrun__heym/frontend/src/components/MCP/MCPPanel.vue) | mcp signal |
| mcp | [frontend/public/features/showcase/mcp.webm](../../../../sources/heymrun__heym/frontend/public/features/showcase/mcp.webm) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/heymrun__heym/AGENTS.md) | agentRuntime signal |
| agentRuntime | [frontend/src/types/workflow.ts](../../../../sources/heymrun__heym/frontend/src/types/workflow.ts) | agentRuntime signal |
| agentRuntime | [frontend/src/stores/workflow.ts](../../../../sources/heymrun__heym/frontend/src/stores/workflow.ts) | agentRuntime signal |
| agentRuntime | [frontend/src/features/templates/hooks/useCreateFromTemplate.ts](../../../../sources/heymrun__heym/frontend/src/features/templates/hooks/useCreateFromTemplate.ts) | agentRuntime signal |
| entrypoints | [frontend/src/App.vue](../../../../sources/heymrun__heym/frontend/src/App.vue) | entrypoints signal |
| entrypoints | [frontend/src/main.ts](../../../../sources/heymrun__heym/frontend/src/main.ts) | entrypoints signal |
| entrypoints | [backend/app/main.py](../../../../sources/heymrun__heym/backend/app/main.py) | entrypoints signal |
| instruction | [CLAUDE.md](../../../../sources/heymrun__heym/CLAUDE.md) | instruction signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 3 | [frontend/src/App.vue](../../../../sources/heymrun__heym/frontend/src/App.vue)<br>[frontend/src/main.ts](../../../../sources/heymrun__heym/frontend/src/main.ts)<br>[backend/app/main.py](../../../../sources/heymrun__heym/backend/app/main.py) |
| agentRuntime | 24 | [AGENTS.md](../../../../sources/heymrun__heym/AGENTS.md)<br>[frontend/src/types/workflow.ts](../../../../sources/heymrun__heym/frontend/src/types/workflow.ts)<br>[frontend/src/stores/workflow.ts](../../../../sources/heymrun__heym/frontend/src/stores/workflow.ts)<br>[frontend/src/features/templates/hooks/useCreateFromTemplate.ts](../../../../sources/heymrun__heym/frontend/src/features/templates/hooks/useCreateFromTemplate.ts)<br>[frontend/src/features/templates/hooks/useShareTemplate.ts](../../../../sources/heymrun__heym/frontend/src/features/templates/hooks/useShareTemplate.ts)<br>[frontend/src/features/templates/hooks/useTemplates.ts](../../../../sources/heymrun__heym/frontend/src/features/templates/hooks/useTemplates.ts)<br>[frontend/src/docs/content/reference/agent-architecture.md](../../../../sources/heymrun__heym/frontend/src/docs/content/reference/agent-architecture.md)<br>[frontend/src/docs/content/reference/agent-persistent-memory.md](../../../../sources/heymrun__heym/frontend/src/docs/content/reference/agent-persistent-memory.md) |
| mcp | 23 | [frontend/src/docs/content/tabs/mcp-tab.md](../../../../sources/heymrun__heym/frontend/src/docs/content/tabs/mcp-tab.md)<br>[frontend/src/docs/content/nodes/mcp-call-node.md](../../../../sources/heymrun__heym/frontend/src/docs/content/nodes/mcp-call-node.md)<br>[frontend/src/components/MCP/MCPPanel.vue](../../../../sources/heymrun__heym/frontend/src/components/MCP/MCPPanel.vue)<br>[frontend/public/features/showcase/mcp.webm](../../../../sources/heymrun__heym/frontend/public/features/showcase/mcp.webm)<br>[docs/superpowers/specs/2026-05-05-multi-mcp-server-design.md](../../../../sources/heymrun__heym/docs/superpowers/specs/2026-05-05-multi-mcp-server-design.md)<br>[docs/superpowers/specs/2026-05-06-mcp-call-node-design.md](../../../../sources/heymrun__heym/docs/superpowers/specs/2026-05-06-mcp-call-node-design.md)<br>[docs/superpowers/plans/2026-05-05-multi-mcp-server.md](../../../../sources/heymrun__heym/docs/superpowers/plans/2026-05-05-multi-mcp-server.md)<br>[docs/superpowers/plans/2026-05-06-mcp-call-node.md](../../../../sources/heymrun__heym/docs/superpowers/plans/2026-05-06-mcp-call-node.md) |
| retrieval | 18 | [frontend/index.html](../../../../sources/heymrun__heym/frontend/index.html)<br>[frontend/src/router/index.ts](../../../../sources/heymrun__heym/frontend/src/router/index.ts)<br>[frontend/src/docs/content/reference/agent-persistent-memory.md](../../../../sources/heymrun__heym/frontend/src/docs/content/reference/agent-persistent-memory.md)<br>[frontend/src/docs/content/nodes/rag-node.md](../../../../sources/heymrun__heym/frontend/src/docs/content/nodes/rag-node.md)<br>[docs/superpowers/specs/2026-04-09-agent-node-persistent-memory-design.md](../../../../sources/heymrun__heym/docs/superpowers/specs/2026-04-09-agent-node-persistent-memory-design.md)<br>[backend/tests/test_agent_memory_api.py](../../../../sources/heymrun__heym/backend/tests/test_agent_memory_api.py)<br>[backend/tests/test_agent_memory.py](../../../../sources/heymrun__heym/backend/tests/test_agent_memory.py)<br>[backend/tests/test_vector_store_credential_access.py](../../../../sources/heymrun__heym/backend/tests/test_vector_store_credential_access.py) |
| spec | 40 | [frontend/src/docs/content/reference/agent-architecture.md](../../../../sources/heymrun__heym/frontend/src/docs/content/reference/agent-architecture.md)<br>[docs/superpowers/specs/2026-04-06-folder-zip-export-import-design.md](../../../../sources/heymrun__heym/docs/superpowers/specs/2026-04-06-folder-zip-export-import-design.md)<br>[docs/superpowers/specs/2026-04-07-agent-context-compression-design.md](../../../../sources/heymrun__heym/docs/superpowers/specs/2026-04-07-agent-context-compression-design.md)<br>[docs/superpowers/specs/2026-04-07-context-compression-comparison-tables-design.md](../../../../sources/heymrun__heym/docs/superpowers/specs/2026-04-07-context-compression-comparison-tables-design.md)<br>[docs/superpowers/specs/2026-04-08-running-executions-in-history-dialogs-design.md](../../../../sources/heymrun__heym/docs/superpowers/specs/2026-04-08-running-executions-in-history-dialogs-design.md)<br>[docs/superpowers/specs/2026-04-09-agent-node-persistent-memory-design.md](../../../../sources/heymrun__heym/docs/superpowers/specs/2026-04-09-agent-node-persistent-memory-design.md)<br>[docs/superpowers/specs/2026-04-09-drive-node-design.md](../../../../sources/heymrun__heym/docs/superpowers/specs/2026-04-09-drive-node-design.md)<br>[docs/superpowers/specs/2026-04-09-execute-node-do-not-wait-design.md](../../../../sources/heymrun__heym/docs/superpowers/specs/2026-04-09-execute-node-do-not-wait-design.md) |
| eval | 122 | [run_tests.sh](../../../../sources/heymrun__heym/run_tests.sh)<br>[frontend/src/types/trace.ts](../../../../sources/heymrun__heym/frontend/src/types/trace.ts)<br>[frontend/src/docs/content/reference/expression-evaluation-dialog.md](../../../../sources/heymrun__heym/frontend/src/docs/content/reference/expression-evaluation-dialog.md)<br>[docs/superpowers/specs/2026-04-12-expressioninput-parametric-evaluation-design.md](../../../../sources/heymrun__heym/docs/superpowers/specs/2026-04-12-expressioninput-parametric-evaluation-design.md)<br>[docs/superpowers/specs/2026-06-09-opentelemetry-tracing-design.md](../../../../sources/heymrun__heym/docs/superpowers/specs/2026-06-09-opentelemetry-tracing-design.md)<br>[docs/superpowers/plans/2026-04-12-expressioninput-parametric-evaluation-implementation.md](../../../../sources/heymrun__heym/docs/superpowers/plans/2026-04-12-expressioninput-parametric-evaluation-implementation.md)<br>[docs/superpowers/plans/2026-06-09-opentelemetry-tracing.md](../../../../sources/heymrun__heym/docs/superpowers/plans/2026-06-09-opentelemetry-tracing.md)<br>[backend/tests/test_active_executions_api.py](../../../../sources/heymrun__heym/backend/tests/test_active_executions_api.py) |
| security | 22 | [SECURITY.md](../../../../sources/heymrun__heym/SECURITY.md)<br>[frontend/src/types/auth.ts](../../../../sources/heymrun__heym/frontend/src/types/auth.ts)<br>[frontend/src/stores/auth.ts](../../../../sources/heymrun__heym/frontend/src/stores/auth.ts)<br>[frontend/src/docs/content/reference/security.md](../../../../sources/heymrun__heym/frontend/src/docs/content/reference/security.md)<br>[backend/tests/test_auth_cookie_security.py](../../../../sources/heymrun__heym/backend/tests/test_auth_cookie_security.py)<br>[backend/tests/test_google_sheets_oauth.py](../../../../sources/heymrun__heym/backend/tests/test_google_sheets_oauth.py)<br>[backend/tests/test_oauth_api.py](../../../../sources/heymrun__heym/backend/tests/test_oauth_api.py)<br>[backend/app/services/auth_rate_limiter.py](../../../../sources/heymrun__heym/backend/app/services/auth_rate_limiter.py) |
| ci | 3 | [.github/workflows/dependabot-automerge.yml](../../../../sources/heymrun__heym/.github/workflows/dependabot-automerge.yml)<br>[.github/workflows/pr-checks.yml](../../../../sources/heymrun__heym/.github/workflows/pr-checks.yml)<br>[.github/workflows/publish-release-image.yml](../../../../sources/heymrun__heym/.github/workflows/publish-release-image.yml) |
| container | 3 | [docker-compose.yml](../../../../sources/heymrun__heym/docker-compose.yml)<br>[frontend/Dockerfile](../../../../sources/heymrun__heym/frontend/Dockerfile)<br>[backend/Dockerfile](../../../../sources/heymrun__heym/backend/Dockerfile) |
| instruction | 2 | [AGENTS.md](../../../../sources/heymrun__heym/AGENTS.md)<br>[CLAUDE.md](../../../../sources/heymrun__heym/CLAUDE.md) |
| docs | 207 | [README.md](../../../../sources/heymrun__heym/README.md)<br>[frontend/src/docs/manifest.ts](../../../../sources/heymrun__heym/frontend/src/docs/manifest.ts)<br>[frontend/src/docs/content/tabs/analytics-tab.md](../../../../sources/heymrun__heym/frontend/src/docs/content/tabs/analytics-tab.md)<br>[frontend/src/docs/content/tabs/chat-tab.md](../../../../sources/heymrun__heym/frontend/src/docs/content/tabs/chat-tab.md)<br>[frontend/src/docs/content/tabs/credentials-tab.md](../../../../sources/heymrun__heym/frontend/src/docs/content/tabs/credentials-tab.md)<br>[frontend/src/docs/content/tabs/dashboard-tab.md](../../../../sources/heymrun__heym/frontend/src/docs/content/tabs/dashboard-tab.md)<br>[frontend/src/docs/content/tabs/datatable-tab.md](../../../../sources/heymrun__heym/frontend/src/docs/content/tabs/datatable-tab.md)<br>[frontend/src/docs/content/tabs/drive-tab.md](../../../../sources/heymrun__heym/frontend/src/docs/content/tabs/drive-tab.md) |
| config | 4 | [frontend/package.json](../../../../sources/heymrun__heym/frontend/package.json)<br>[frontend/tsconfig.json](../../../../sources/heymrun__heym/frontend/tsconfig.json)<br>[backend/pyproject.toml](../../../../sources/heymrun__heym/backend/pyproject.toml)<br>[backend/uv.lock](../../../../sources/heymrun__heym/backend/uv.lock) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 122 | [run_tests.sh](../../../../sources/heymrun__heym/run_tests.sh)<br>[frontend/src/types/trace.ts](../../../../sources/heymrun__heym/frontend/src/types/trace.ts)<br>[frontend/src/docs/content/reference/expression-evaluation-dialog.md](../../../../sources/heymrun__heym/frontend/src/docs/content/reference/expression-evaluation-dialog.md)<br>[docs/superpowers/specs/2026-04-12-expressioninput-parametric-evaluation-design.md](../../../../sources/heymrun__heym/docs/superpowers/specs/2026-04-12-expressioninput-parametric-evaluation-design.md)<br>[docs/superpowers/specs/2026-06-09-opentelemetry-tracing-design.md](../../../../sources/heymrun__heym/docs/superpowers/specs/2026-06-09-opentelemetry-tracing-design.md)<br>[docs/superpowers/plans/2026-04-12-expressioninput-parametric-evaluation-implementation.md](../../../../sources/heymrun__heym/docs/superpowers/plans/2026-04-12-expressioninput-parametric-evaluation-implementation.md) |
| CI workflow | 3 | [.github/workflows/dependabot-automerge.yml](../../../../sources/heymrun__heym/.github/workflows/dependabot-automerge.yml)<br>[.github/workflows/pr-checks.yml](../../../../sources/heymrun__heym/.github/workflows/pr-checks.yml)<br>[.github/workflows/publish-release-image.yml](../../../../sources/heymrun__heym/.github/workflows/publish-release-image.yml) |
| 컨테이너/배포 | 3 | [docker-compose.yml](../../../../sources/heymrun__heym/docker-compose.yml)<br>[frontend/Dockerfile](../../../../sources/heymrun__heym/frontend/Dockerfile)<br>[backend/Dockerfile](../../../../sources/heymrun__heym/backend/Dockerfile) |
| 보안/정책 | 22 | [SECURITY.md](../../../../sources/heymrun__heym/SECURITY.md)<br>[frontend/src/types/auth.ts](../../../../sources/heymrun__heym/frontend/src/types/auth.ts)<br>[frontend/src/stores/auth.ts](../../../../sources/heymrun__heym/frontend/src/stores/auth.ts)<br>[frontend/src/docs/content/reference/security.md](../../../../sources/heymrun__heym/frontend/src/docs/content/reference/security.md)<br>[backend/tests/test_auth_cookie_security.py](../../../../sources/heymrun__heym/backend/tests/test_auth_cookie_security.py)<br>[backend/tests/test_google_sheets_oauth.py](../../../../sources/heymrun__heym/backend/tests/test_google_sheets_oauth.py) |
| 에이전트 지시문 | 2 | [AGENTS.md](../../../../sources/heymrun__heym/AGENTS.md)<br>[CLAUDE.md](../../../../sources/heymrun__heym/CLAUDE.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `frontend/src/docs/content/tabs/mcp-tab.md`, `frontend/src/docs/content/nodes/mcp-call-node.md`, `frontend/src/components/MCP/MCPPanel.vue`.
2. entrypoint를 따라 실행 흐름 확인: `frontend/src/App.vue`, `frontend/src/main.ts`, `backend/app/main.py`.
3. agent/tool runtime 매핑: `AGENTS.md`, `frontend/src/types/workflow.ts`, `frontend/src/stores/workflow.ts`.
4. retrieval/memory/indexing 확인: `frontend/index.html`, `frontend/src/router/index.ts`, `frontend/src/docs/content/reference/agent-persistent-memory.md`.
5. test/eval 파일로 동작 검증: `run_tests.sh`, `frontend/src/types/trace.ts`, `frontend/src/docs/content/reference/expression-evaluation-dialog.md`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Build AI workflows by prompt or visual canvas. Heym is source available and self hosted, with agents, RAG, MCP, HITL, ob. 핵심 구조 신호는 Python, docker-compose.yml, README.md, AGENTS.md, CLAUDE.md, LICENSE이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
