# HKUDS/DeepTutor Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

DeepTutor: Agent-native Personalized Tutoring. https://deeptutor.info/.

## 요약

- 조사 단위: `sources/HKUDS__DeepTutor` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 1,587 files, 316 directories, depth score 132, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=web/lib/mcp-api.ts, web/app/(utility)/settings/mcp/page.tsx, tests/services/mcp/test_mcp_config.py이고, 의존성 단서는 openai, anthropic, claude, mcp, llamaindex, llama-index, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | HKUDS/DeepTutor |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 24817 |
| Forks | 3355 |
| License | none |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/HKUDS__DeepTutor](../../../../sources/HKUDS__DeepTutor) |
| Existing report | [reports/global-trending/repositories/HKUDS__DeepTutor.md](../../../global-trending/repositories/HKUDS__DeepTutor.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 1587 / 316 |
| Max observed depth | 7 |
| Top directories | .github, assets, deeptutor, deeptutor_cli, deeptutor_web, packaging, requirements, scripts, tests, web |
| Top extensions | .py: 875, .tsx: 242, .yaml: 121, .ts: 116, .md: 75, .png: 65, .svg: 35, .yml: 13, .json: 9, .txt: 9, .mjs: 7, (none): 6 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| web | source boundary | 136 |
| tests | validation surface | 29 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| deeptutor | top-level component | 1 |
| deeptutor_cli | top-level component | 1 |
| deeptutor_web | source boundary | 1 |
| packaging | top-level component | 1 |
| requirements | top-level component | 1 |
| scripts | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | pyproject.toml | deeptutor | deeptutor |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai, anthropic, claude |
| agentProtocols | mcp |
| agentFrameworks | llamaindex, llama-index |
| vectorStores | none |
| modelRuntime | llama |
| webRuntime | fastapi, next |
| developerSurface | vscode, typer |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [web/lib/mcp-api.ts](../../../../sources/HKUDS__DeepTutor/web/lib/mcp-api.ts) | mcp signal |
| mcp | [tests/services/mcp/test_mcp_config.py](../../../../sources/HKUDS__DeepTutor/tests/services/mcp/test_mcp_config.py) | mcp signal |
| mcp | [tests/runtime/registry/test_tool_registry_execute.py](../../../../sources/HKUDS__DeepTutor/tests/runtime/registry/test_tool_registry_execute.py) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/HKUDS__DeepTutor/AGENTS.md) | agentRuntime signal |
| agentRuntime | [SKILL.md](../../../../sources/HKUDS__DeepTutor/SKILL.md) | agentRuntime signal |
| agentRuntime | [web/tests/skill-slug.test.ts](../../../../sources/HKUDS__DeepTutor/web/tests/skill-slug.test.ts) | agentRuntime signal |
| agentRuntime | [web/lib/memory-graph.ts](../../../../sources/HKUDS__DeepTutor/web/lib/memory-graph.ts) | agentRuntime signal |
| entrypoints | [requirements/server.txt](../../../../sources/HKUDS__DeepTutor/requirements/server.txt) | entrypoints signal |
| entrypoints | [deeptutor_cli/__main__.py](../../../../sources/HKUDS__DeepTutor/deeptutor_cli/__main__.py) | entrypoints signal |
| entrypoints | [deeptutor_cli/main.py](../../../../sources/HKUDS__DeepTutor/deeptutor_cli/main.py) | entrypoints signal |
| entrypoints | [deeptutor/__main__.py](../../../../sources/HKUDS__DeepTutor/deeptutor/__main__.py) | entrypoints signal |
| config | [pyproject.toml](../../../../sources/HKUDS__DeepTutor/pyproject.toml) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 6 | [requirements/server.txt](../../../../sources/HKUDS__DeepTutor/requirements/server.txt)<br>[deeptutor_cli/__main__.py](../../../../sources/HKUDS__DeepTutor/deeptutor_cli/__main__.py)<br>[deeptutor_cli/main.py](../../../../sources/HKUDS__DeepTutor/deeptutor_cli/main.py)<br>[deeptutor/__main__.py](../../../../sources/HKUDS__DeepTutor/deeptutor/__main__.py)<br>[deeptutor/services/sandbox/runner/server.py](../../../../sources/HKUDS__DeepTutor/deeptutor/services/sandbox/runner/server.py)<br>[deeptutor/api/main.py](../../../../sources/HKUDS__DeepTutor/deeptutor/api/main.py) |
| agentRuntime | 367 | [AGENTS.md](../../../../sources/HKUDS__DeepTutor/AGENTS.md)<br>[SKILL.md](../../../../sources/HKUDS__DeepTutor/SKILL.md)<br>[web/tests/skill-slug.test.ts](../../../../sources/HKUDS__DeepTutor/web/tests/skill-slug.test.ts)<br>[web/lib/memory-graph.ts](../../../../sources/HKUDS__DeepTutor/web/lib/memory-graph.ts)<br>[web/lib/skill-slug.ts](../../../../sources/HKUDS__DeepTutor/web/lib/skill-slug.ts)<br>[web/lib/skills-api.ts](../../../../sources/HKUDS__DeepTutor/web/lib/skills-api.ts)<br>[web/lib/tools-settings.ts](../../../../sources/HKUDS__DeepTutor/web/lib/tools-settings.ts)<br>[web/lib/chat-import/agent-store.ts](../../../../sources/HKUDS__DeepTutor/web/lib/chat-import/agent-store.ts) |
| mcp | 11 | [web/lib/mcp-api.ts](../../../../sources/HKUDS__DeepTutor/web/lib/mcp-api.ts)<br>`web/app/(utility)/settings/mcp/page.tsx`<br>[tests/services/mcp/test_mcp_config.py](../../../../sources/HKUDS__DeepTutor/tests/services/mcp/test_mcp_config.py)<br>[tests/runtime/registry/test_tool_registry_execute.py](../../../../sources/HKUDS__DeepTutor/tests/runtime/registry/test_tool_registry_execute.py)<br>[deeptutor/services/mcp/__init__.py](../../../../sources/HKUDS__DeepTutor/deeptutor/services/mcp/__init__.py)<br>[deeptutor/services/mcp/config.py](../../../../sources/HKUDS__DeepTutor/deeptutor/services/mcp/config.py)<br>[deeptutor/services/mcp/manager.py](../../../../sources/HKUDS__DeepTutor/deeptutor/services/mcp/manager.py)<br>[deeptutor/services/mcp/network.py](../../../../sources/HKUDS__DeepTutor/deeptutor/services/mcp/network.py) |
| retrieval | 228 | [web/tests/knowledge-helpers.test.ts](../../../../sources/HKUDS__DeepTutor/web/tests/knowledge-helpers.test.ts)<br>[web/lib/knowledge-api.ts](../../../../sources/HKUDS__DeepTutor/web/lib/knowledge-api.ts)<br>[web/lib/knowledge-helpers.ts](../../../../sources/HKUDS__DeepTutor/web/lib/knowledge-helpers.ts)<br>[web/lib/memory-graph.ts](../../../../sources/HKUDS__DeepTutor/web/lib/memory-graph.ts)<br>[web/lib/chat-import/index.ts](../../../../sources/HKUDS__DeepTutor/web/lib/chat-import/index.ts)<br>[web/i18n/index.ts](../../../../sources/HKUDS__DeepTutor/web/i18n/index.ts)<br>[web/components/memory/MemoryArchivedBanner.tsx](../../../../sources/HKUDS__DeepTutor/web/components/memory/MemoryArchivedBanner.tsx)<br>[web/components/memory/MemoryGraph.tsx](../../../../sources/HKUDS__DeepTutor/web/components/memory/MemoryGraph.tsx) |
| spec | 17 | [requirements.txt](../../../../sources/HKUDS__DeepTutor/requirements.txt)<br>[tests/test_matrix_requirements.py](../../../../sources/HKUDS__DeepTutor/tests/test_matrix_requirements.py)<br>[requirements/cli.txt](../../../../sources/HKUDS__DeepTutor/requirements/cli.txt)<br>[requirements/dev.txt](../../../../sources/HKUDS__DeepTutor/requirements/dev.txt)<br>[requirements/math-animator.txt](../../../../sources/HKUDS__DeepTutor/requirements/math-animator.txt)<br>[requirements/matrix-e2e.txt](../../../../sources/HKUDS__DeepTutor/requirements/matrix-e2e.txt)<br>[requirements/matrix.txt](../../../../sources/HKUDS__DeepTutor/requirements/matrix.txt)<br>[requirements/partners.txt](../../../../sources/HKUDS__DeepTutor/requirements/partners.txt) |
| eval | 311 | [web/tsconfig.node-tests.json](../../../../sources/HKUDS__DeepTutor/web/tsconfig.node-tests.json)<br>[web/tests/api-auth-redirect.test.ts](../../../../sources/HKUDS__DeepTutor/web/tests/api-auth-redirect.test.ts)<br>[web/tests/api-resolve-base.test.ts](../../../../sources/HKUDS__DeepTutor/web/tests/api-resolve-base.test.ts)<br>[web/tests/ask-user-state.test.ts](../../../../sources/HKUDS__DeepTutor/web/tests/ask-user-state.test.ts)<br>[web/tests/auth-enabled.test.ts](../../../../sources/HKUDS__DeepTutor/web/tests/auth-enabled.test.ts)<br>[web/tests/capability-access.test.ts](../../../../sources/HKUDS__DeepTutor/web/tests/capability-access.test.ts)<br>[web/tests/composer-keyboard.test.ts](../../../../sources/HKUDS__DeepTutor/web/tests/composer-keyboard.test.ts)<br>[web/tests/doc-attachments.test.ts](../../../../sources/HKUDS__DeepTutor/web/tests/doc-attachments.test.ts) |
| security | 29 | [web/tests/api-auth-redirect.test.ts](../../../../sources/HKUDS__DeepTutor/web/tests/api-auth-redirect.test.ts)<br>[web/tests/auth-enabled.test.ts](../../../../sources/HKUDS__DeepTutor/web/tests/auth-enabled.test.ts)<br>[web/tests/e2e/compliance-and-ux.audit.ts](../../../../sources/HKUDS__DeepTutor/web/tests/e2e/compliance-and-ux.audit.ts)<br>[web/scripts/i18n_audit.mjs](../../../../sources/HKUDS__DeepTutor/web/scripts/i18n_audit.mjs)<br>[web/lib/auth.ts](../../../../sources/HKUDS__DeepTutor/web/lib/auth.ts)<br>[web/components/auth/AdminLink.tsx](../../../../sources/HKUDS__DeepTutor/web/components/auth/AdminLink.tsx)<br>[web/components/auth/LogoutButton.tsx](../../../../sources/HKUDS__DeepTutor/web/components/auth/LogoutButton.tsx)<br>[tests/services/test_runtime_storage_guard.py](../../../../sources/HKUDS__DeepTutor/tests/services/test_runtime_storage_guard.py) |
| ci | 3 | [.github/workflows/docker-release.yml](../../../../sources/HKUDS__DeepTutor/.github/workflows/docker-release.yml)<br>[.github/workflows/pypi-release.yml](../../../../sources/HKUDS__DeepTutor/.github/workflows/pypi-release.yml)<br>[.github/workflows/tests.yml](../../../../sources/HKUDS__DeepTutor/.github/workflows/tests.yml) |
| container | 5 | [docker-compose.dev.yml](../../../../sources/HKUDS__DeepTutor/docker-compose.dev.yml)<br>[docker-compose.ghcr.yml](../../../../sources/HKUDS__DeepTutor/docker-compose.ghcr.yml)<br>[docker-compose.yml](../../../../sources/HKUDS__DeepTutor/docker-compose.yml)<br>[Dockerfile](../../../../sources/HKUDS__DeepTutor/Dockerfile)<br>[Dockerfile.runner](../../../../sources/HKUDS__DeepTutor/Dockerfile.runner) |
| instruction | 1 | [AGENTS.md](../../../../sources/HKUDS__DeepTutor/AGENTS.md) |
| docs | 99 | [README.md](../../../../sources/HKUDS__DeepTutor/README.md)<br>`web/app/(workspace)/book/page.tsx`<br>`web/app/(workspace)/book/components/BookChatPanel.tsx`<br>`web/app/(workspace)/book/components/BookCreator.tsx`<br>`web/app/(workspace)/book/components/BookHealthBanner.tsx`<br>`web/app/(workspace)/book/components/BookLibrary.tsx`<br>`web/app/(workspace)/book/components/BookProgressTimeline.tsx`<br>`web/app/(workspace)/book/components/BookSidebar.tsx` |
| config | 12 | [pyproject.toml](../../../../sources/HKUDS__DeepTutor/pyproject.toml)<br>[requirements.txt](../../../../sources/HKUDS__DeepTutor/requirements.txt)<br>[web/package.json](../../../../sources/HKUDS__DeepTutor/web/package.json)<br>[web/tsconfig.json](../../../../sources/HKUDS__DeepTutor/web/tsconfig.json)<br>[requirements/cli.txt](../../../../sources/HKUDS__DeepTutor/requirements/cli.txt)<br>[requirements/dev.txt](../../../../sources/HKUDS__DeepTutor/requirements/dev.txt)<br>[requirements/math-animator.txt](../../../../sources/HKUDS__DeepTutor/requirements/math-animator.txt)<br>[requirements/matrix-e2e.txt](../../../../sources/HKUDS__DeepTutor/requirements/matrix-e2e.txt) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 311 | [web/tsconfig.node-tests.json](../../../../sources/HKUDS__DeepTutor/web/tsconfig.node-tests.json)<br>[web/tests/api-auth-redirect.test.ts](../../../../sources/HKUDS__DeepTutor/web/tests/api-auth-redirect.test.ts)<br>[web/tests/api-resolve-base.test.ts](../../../../sources/HKUDS__DeepTutor/web/tests/api-resolve-base.test.ts)<br>[web/tests/ask-user-state.test.ts](../../../../sources/HKUDS__DeepTutor/web/tests/ask-user-state.test.ts)<br>[web/tests/auth-enabled.test.ts](../../../../sources/HKUDS__DeepTutor/web/tests/auth-enabled.test.ts)<br>[web/tests/capability-access.test.ts](../../../../sources/HKUDS__DeepTutor/web/tests/capability-access.test.ts) |
| CI workflows | 3 | [.github/workflows/docker-release.yml](../../../../sources/HKUDS__DeepTutor/.github/workflows/docker-release.yml)<br>[.github/workflows/pypi-release.yml](../../../../sources/HKUDS__DeepTutor/.github/workflows/pypi-release.yml)<br>[.github/workflows/tests.yml](../../../../sources/HKUDS__DeepTutor/.github/workflows/tests.yml) |
| Containers / deploy | 5 | [docker-compose.dev.yml](../../../../sources/HKUDS__DeepTutor/docker-compose.dev.yml)<br>[docker-compose.ghcr.yml](../../../../sources/HKUDS__DeepTutor/docker-compose.ghcr.yml)<br>[docker-compose.yml](../../../../sources/HKUDS__DeepTutor/docker-compose.yml)<br>[Dockerfile](../../../../sources/HKUDS__DeepTutor/Dockerfile)<br>[Dockerfile.runner](../../../../sources/HKUDS__DeepTutor/Dockerfile.runner) |
| Security / policy | 29 | [web/tests/api-auth-redirect.test.ts](../../../../sources/HKUDS__DeepTutor/web/tests/api-auth-redirect.test.ts)<br>[web/tests/auth-enabled.test.ts](../../../../sources/HKUDS__DeepTutor/web/tests/auth-enabled.test.ts)<br>[web/tests/e2e/compliance-and-ux.audit.ts](../../../../sources/HKUDS__DeepTutor/web/tests/e2e/compliance-and-ux.audit.ts)<br>[web/scripts/i18n_audit.mjs](../../../../sources/HKUDS__DeepTutor/web/scripts/i18n_audit.mjs)<br>[web/lib/auth.ts](../../../../sources/HKUDS__DeepTutor/web/lib/auth.ts)<br>[web/components/auth/AdminLink.tsx](../../../../sources/HKUDS__DeepTutor/web/components/auth/AdminLink.tsx) |
| Agent instructions | 1 | [AGENTS.md](../../../../sources/HKUDS__DeepTutor/AGENTS.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `web/lib/mcp-api.ts`, `tests/services/mcp/test_mcp_config.py`, `tests/runtime/registry/test_tool_registry_execute.py`.
2. Trace execution through entrypoints: `requirements/server.txt`, `deeptutor_cli/__main__.py`, `deeptutor_cli/main.py`.
3. Map agent/tool runtime through: `AGENTS.md`, `SKILL.md`, `web/tests/skill-slug.test.ts`.
4. Inspect retrieval/memory/indexing through: `web/tests/knowledge-helpers.test.ts`, `web/lib/knowledge-api.ts`, `web/lib/knowledge-helpers.ts`.
5. Verify behavior through test/eval files: `web/tsconfig.node-tests.json`, `web/tests/api-auth-redirect.test.ts`, `web/tests/api-resolve-base.test.ts`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 DeepTutor Agent native Personalized Tutoring. https //deeptutor.info/.. 핵심 구조 신호는 Python, pyproject.toml, requirements.txt, Dockerfile, docker-compose.yml, README.md이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
