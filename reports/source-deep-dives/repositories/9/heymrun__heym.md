# heymrun/heym Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Build AI workflows by prompt or visual canvas. Heym is source-available and self-hosted, with agents, RAG, MCP, HITL, observability, evals, token cost tracking and more.

## 요약

- 조사 단위: `sources/heymrun__heym` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 795 files, 78 directories, depth score 131, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=frontend/src/docs/content/tabs/mcp-tab.md, frontend/src/docs/content/nodes/mcp-call-node.md, frontend/src/components/MCP/MCPPanel.vue이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| [Source Trend Insights](../../../source-insights/README.md) | Category trend insights and repository feature comparison from source evidence. |


## Repository Context

| Field | Value |
| --- | --- |
| Repository | heymrun/heym |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 612 |
| Forks | 65 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/heymrun__heym](../../../../sources/heymrun__heym) |
| Existing report | [reports/global-trending/repositories/heymrun__heym.md](../../../global-trending/repositories/heymrun__heym.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 795 / 78 |
| Max observed depth | 6 |
| Top directories | .cursor, .github, backend, docker, docs, frontend |
| Top extensions | .py: 307, .md: 184, .vue: 140, .ts: 88, .webm: 17, .svg: 9, .sh: 7, (none): 7, .gif: 5, .png: 5, .yml: 5, .js: 4 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 52 |
| .github | ci surface | 1 |
| backend | top-level component | 1 |
| docker | documentation surface | 1 |
| frontend | top-level component | 1 |


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


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
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


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 122 | [run_tests.sh](../../../../sources/heymrun__heym/run_tests.sh)<br>[frontend/src/types/trace.ts](../../../../sources/heymrun__heym/frontend/src/types/trace.ts)<br>[frontend/src/docs/content/reference/expression-evaluation-dialog.md](../../../../sources/heymrun__heym/frontend/src/docs/content/reference/expression-evaluation-dialog.md)<br>[docs/superpowers/specs/2026-04-12-expressioninput-parametric-evaluation-design.md](../../../../sources/heymrun__heym/docs/superpowers/specs/2026-04-12-expressioninput-parametric-evaluation-design.md)<br>[docs/superpowers/specs/2026-06-09-opentelemetry-tracing-design.md](../../../../sources/heymrun__heym/docs/superpowers/specs/2026-06-09-opentelemetry-tracing-design.md)<br>[docs/superpowers/plans/2026-04-12-expressioninput-parametric-evaluation-implementation.md](../../../../sources/heymrun__heym/docs/superpowers/plans/2026-04-12-expressioninput-parametric-evaluation-implementation.md) |
| CI workflows | 3 | [.github/workflows/dependabot-automerge.yml](../../../../sources/heymrun__heym/.github/workflows/dependabot-automerge.yml)<br>[.github/workflows/pr-checks.yml](../../../../sources/heymrun__heym/.github/workflows/pr-checks.yml)<br>[.github/workflows/publish-release-image.yml](../../../../sources/heymrun__heym/.github/workflows/publish-release-image.yml) |
| Containers / deploy | 3 | [docker-compose.yml](../../../../sources/heymrun__heym/docker-compose.yml)<br>[frontend/Dockerfile](../../../../sources/heymrun__heym/frontend/Dockerfile)<br>[backend/Dockerfile](../../../../sources/heymrun__heym/backend/Dockerfile) |
| Security / policy | 22 | [SECURITY.md](../../../../sources/heymrun__heym/SECURITY.md)<br>[frontend/src/types/auth.ts](../../../../sources/heymrun__heym/frontend/src/types/auth.ts)<br>[frontend/src/stores/auth.ts](../../../../sources/heymrun__heym/frontend/src/stores/auth.ts)<br>[frontend/src/docs/content/reference/security.md](../../../../sources/heymrun__heym/frontend/src/docs/content/reference/security.md)<br>[backend/tests/test_auth_cookie_security.py](../../../../sources/heymrun__heym/backend/tests/test_auth_cookie_security.py)<br>[backend/tests/test_google_sheets_oauth.py](../../../../sources/heymrun__heym/backend/tests/test_google_sheets_oauth.py) |
| Agent instructions | 2 | [AGENTS.md](../../../../sources/heymrun__heym/AGENTS.md)<br>[CLAUDE.md](../../../../sources/heymrun__heym/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `frontend/src/docs/content/tabs/mcp-tab.md`, `frontend/src/docs/content/nodes/mcp-call-node.md`, `frontend/src/components/MCP/MCPPanel.vue`.
2. Trace execution through entrypoints: `frontend/src/App.vue`, `frontend/src/main.ts`, `backend/app/main.py`.
3. Map agent/tool runtime through: `AGENTS.md`, `frontend/src/types/workflow.ts`, `frontend/src/stores/workflow.ts`.
4. Inspect retrieval/memory/indexing through: `frontend/index.html`, `frontend/src/router/index.ts`, `frontend/src/docs/content/reference/agent-persistent-memory.md`.
5. Verify behavior through test/eval files: `run_tests.sh`, `frontend/src/types/trace.ts`, `frontend/src/docs/content/reference/expression-evaluation-dialog.md`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Build AI workflows by prompt or visual canvas. Heym is source available and self hosted, with agents, RAG, MCP, HITL, ob. 핵심 구조 신호는 Python, docker-compose.yml, README.md, AGENTS.md, CLAUDE.md, LICENSE이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
