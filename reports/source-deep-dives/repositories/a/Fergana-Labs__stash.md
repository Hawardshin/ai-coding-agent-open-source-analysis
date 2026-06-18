# Fergana-Labs/stash Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Shared memory for your team's coding agents

## 요약

- 조사 단위: `sources/Fergana-Labs__stash` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 1,019 files, 214 directories, depth score 132, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=powerpoint-mcp/.env.example, powerpoint-mcp/.gitignore, powerpoint-mcp/Dockerfile이고, 의존성 단서는 mcp, typer, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | Fergana-Labs/stash |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 94 |
| Forks | 22 |
| License | none |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/Fergana-Labs__stash](../../../../sources/Fergana-Labs__stash) |
| Existing report | [reports/global-trending/repositories/Fergana-Labs__stash.md](../../../global-trending/repositories/Fergana-Labs__stash.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 1019 / 214 |
| Max observed depth | 9 |
| Top directories | .claude-plugin, .github, backend, chrome_extension, cli, collab, docs, frontend, plugins, powerpoint-mcp, scripts, sdk, stashai, www |
| Top extensions | .py: 503, .tsx: 213, .ts: 90, .json: 50, .md: 35, .png: 20, (none): 19, .svg: 16, .jsx: 13, .sh: 11, .yml: 9, .html: 8 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 23 |
| .github | ci surface | 1 |
| backend | top-level component | 1 |
| chrome_extension | top-level component | 1 |
| cli | top-level component | 1 |
| collab | top-level component | 1 |
| frontend | top-level component | 1 |
| plugins | top-level component | 1 |
| powerpoint-mcp | top-level component | 1 |
| scripts | top-level component | 1 |
| sdk | top-level component | 1 |
| stashai | top-level component | 1 |
| www | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | pyproject.toml | stash | stash |
| utility | pyproject.toml | stash-mcp | stash-mcp |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | mcp |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | none |
| developerSurface | typer |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [powerpoint-mcp/.env.example](../../../../sources/Fergana-Labs__stash/powerpoint-mcp/.env.example) | mcp signal |
| mcp | [powerpoint-mcp/.gitignore](../../../../sources/Fergana-Labs__stash/powerpoint-mcp/.gitignore) | mcp signal |
| mcp | [powerpoint-mcp/Dockerfile](../../../../sources/Fergana-Labs__stash/powerpoint-mcp/Dockerfile) | mcp signal |
| mcp | [powerpoint-mcp/pyproject.toml](../../../../sources/Fergana-Labs__stash/powerpoint-mcp/pyproject.toml) | mcp signal |
| agentRuntime | [www/app/pages/agents/page.tsx](../../../../sources/Fergana-Labs__stash/www/app/pages/agents/page.tsx) | agentRuntime signal |
| agentRuntime | [www/app/pages/agents/raw/route.ts](../../../../sources/Fergana-Labs__stash/www/app/pages/agents/raw/route.ts) | agentRuntime signal |
| agentRuntime | [www/app/pages/_lib/agent-docs.ts](../../../../sources/Fergana-Labs__stash/www/app/pages/_lib/agent-docs.ts) | agentRuntime signal |
| agentRuntime | [www/app/memory/page.tsx](../../../../sources/Fergana-Labs__stash/www/app/memory/page.tsx) | agentRuntime signal |
| entrypoints | [collab/src/server.ts](../../../../sources/Fergana-Labs__stash/collab/src/server.ts) | entrypoints signal |
| entrypoints | [cli/main.py](../../../../sources/Fergana-Labs__stash/cli/main.py) | entrypoints signal |
| entrypoints | [backend/main.py](../../../../sources/Fergana-Labs__stash/backend/main.py) | entrypoints signal |
| instruction | [CLAUDE.md](../../../../sources/Fergana-Labs__stash/CLAUDE.md) | instruction signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 3 | [collab/src/server.ts](../../../../sources/Fergana-Labs__stash/collab/src/server.ts)<br>[cli/main.py](../../../../sources/Fergana-Labs__stash/cli/main.py)<br>[backend/main.py](../../../../sources/Fergana-Labs__stash/backend/main.py) |
| agentRuntime | 66 | [www/app/pages/agents/page.tsx](../../../../sources/Fergana-Labs__stash/www/app/pages/agents/page.tsx)<br>[www/app/pages/agents/raw/route.ts](../../../../sources/Fergana-Labs__stash/www/app/pages/agents/raw/route.ts)<br>[www/app/pages/_lib/agent-docs.ts](../../../../sources/Fergana-Labs__stash/www/app/pages/_lib/agent-docs.ts)<br>[www/app/memory/page.tsx](../../../../sources/Fergana-Labs__stash/www/app/memory/page.tsx)<br>[www/app/agent-native-drive/page.tsx](../../../../sources/Fergana-Labs__stash/www/app/agent-native-drive/page.tsx)<br>[www/app/admin/skills/actions.ts](../../../../sources/Fergana-Labs__stash/www/app/admin/skills/actions.ts)<br>[www/app/admin/skills/page.tsx](../../../../sources/Fergana-Labs__stash/www/app/admin/skills/page.tsx)<br>[www/app/admin/skills/SkillsAdminClient.tsx](../../../../sources/Fergana-Labs__stash/www/app/admin/skills/SkillsAdminClient.tsx) |
| mcp | 14 | [powerpoint-mcp/.env.example](../../../../sources/Fergana-Labs__stash/powerpoint-mcp/.env.example)<br>[powerpoint-mcp/.gitignore](../../../../sources/Fergana-Labs__stash/powerpoint-mcp/.gitignore)<br>[powerpoint-mcp/Dockerfile](../../../../sources/Fergana-Labs__stash/powerpoint-mcp/Dockerfile)<br>[powerpoint-mcp/pyproject.toml](../../../../sources/Fergana-Labs__stash/powerpoint-mcp/pyproject.toml)<br>[powerpoint-mcp/README.md](../../../../sources/Fergana-Labs__stash/powerpoint-mcp/README.md)<br>[powerpoint-mcp/requirements.txt](../../../../sources/Fergana-Labs__stash/powerpoint-mcp/requirements.txt)<br>[powerpoint-mcp/tests/__init__.py](../../../../sources/Fergana-Labs__stash/powerpoint-mcp/tests/__init__.py)<br>[powerpoint-mcp/src/__init__.py](../../../../sources/Fergana-Labs__stash/powerpoint-mcp/src/__init__.py) |
| retrieval | 16 | [www/app/memory/page.tsx](../../../../sources/Fergana-Labs__stash/www/app/memory/page.tsx)<br>[plugins/openclaw-plugin/index.ts](../../../../sources/Fergana-Labs__stash/plugins/openclaw-plugin/index.ts)<br>[frontend/src/app/onboarding/paths/memory/MemoryAskStep.tsx](../../../../sources/Fergana-Labs__stash/frontend/src/app/onboarding/paths/memory/MemoryAskStep.tsx)<br>`frontend/src/app/(app)/skills/[slug]/embed/loading.tsx`<br>`frontend/src/app/(app)/skills/[slug]/embed/page.tsx`<br>[frontend/public/design/index.html](../../../../sources/Fergana-Labs__stash/frontend/public/design/index.html)<br>[backend/tests/test_embedding_security.py](../../../../sources/Fergana-Labs__stash/backend/tests/test_embedding_security.py)<br>[backend/tests/test_xlsx_ingest.py](../../../../sources/Fergana-Labs__stash/backend/tests/test_xlsx_ingest.py) |
| spec | 25 | [ARCHITECTURE.md](../../../../sources/Fergana-Labs__stash/ARCHITECTURE.md)<br>[www/DESIGN.md](../../../../sources/Fergana-Labs__stash/www/DESIGN.md)<br>[powerpoint-mcp/requirements.txt](../../../../sources/Fergana-Labs__stash/powerpoint-mcp/requirements.txt)<br>[frontend/public/design/design-canvas.jsx](../../../../sources/Fergana-Labs__stash/frontend/public/design/design-canvas.jsx)<br>[frontend/public/design/icons.jsx](../../../../sources/Fergana-Labs__stash/frontend/public/design/icons.jsx)<br>[frontend/public/design/index.html](../../../../sources/Fergana-Labs__stash/frontend/public/design/index.html)<br>[frontend/public/design/mock-data.jsx](../../../../sources/Fergana-Labs__stash/frontend/public/design/mock-data.jsx)<br>[frontend/public/design/shell.jsx](../../../../sources/Fergana-Labs__stash/frontend/public/design/shell.jsx) |
| eval | 175 | [powerpoint-mcp/tests/__init__.py](../../../../sources/Fergana-Labs__stash/powerpoint-mcp/tests/__init__.py)<br>[plugins/tests/conftest.py](../../../../sources/Fergana-Labs__stash/plugins/tests/conftest.py)<br>[plugins/tests/test_adapters.py](../../../../sources/Fergana-Labs__stash/plugins/tests/test_adapters.py)<br>[plugins/tests/test_assets_in_sync.py](../../../../sources/Fergana-Labs__stash/plugins/tests/test_assets_in_sync.py)<br>[plugins/tests/test_event_queue.py](../../../../sources/Fergana-Labs__stash/plugins/tests/test_event_queue.py)<br>[plugins/tests/test_plugin_config.py](../../../../sources/Fergana-Labs__stash/plugins/tests/test_plugin_config.py)<br>[plugins/tests/test_scope.py](../../../../sources/Fergana-Labs__stash/plugins/tests/test_scope.py)<br>[plugins/tests/test_session_upload.py](../../../../sources/Fergana-Labs__stash/plugins/tests/test_session_upload.py) |
| security | 32 | [SECURITY.md](../../../../sources/Fergana-Labs__stash/SECURITY.md)<br>[www/public/.well-known/security.txt](../../../../sources/Fergana-Labs__stash/www/public/.well-known/security.txt)<br>[www/lib/admin-auth.ts](../../../../sources/Fergana-Labs__stash/www/lib/admin-auth.ts)<br>[www/lib/security-headers.ts](../../../../sources/Fergana-Labs__stash/www/lib/security-headers.ts)<br>[www/app/security/page.tsx](../../../../sources/Fergana-Labs__stash/www/app/security/page.tsx)<br>[frontend/src/app/landing-auth-check/LandingAuthCheckClient.tsx](../../../../sources/Fergana-Labs__stash/frontend/src/app/landing-auth-check/LandingAuthCheckClient.tsx)<br>[frontend/src/app/landing-auth-check/page.tsx](../../../../sources/Fergana-Labs__stash/frontend/src/app/landing-auth-check/page.tsx)<br>[docs/security-operations.md](../../../../sources/Fergana-Labs__stash/docs/security-operations.md) |
| ci | 4 | [.github/workflows/bump-plugin-version.yml](../../../../sources/Fergana-Labs__stash/.github/workflows/bump-plugin-version.yml)<br>[.github/workflows/docker-publish.yml](../../../../sources/Fergana-Labs__stash/.github/workflows/docker-publish.yml)<br>[.github/workflows/publish.yml](../../../../sources/Fergana-Labs__stash/.github/workflows/publish.yml)<br>[.github/workflows/test.yml](../../../../sources/Fergana-Labs__stash/.github/workflows/test.yml) |
| container | 7 | [docker-compose.local.yml](../../../../sources/Fergana-Labs__stash/docker-compose.local.yml)<br>[docker-compose.prod.yml](../../../../sources/Fergana-Labs__stash/docker-compose.prod.yml)<br>[docker-compose.yml](../../../../sources/Fergana-Labs__stash/docker-compose.yml)<br>[powerpoint-mcp/Dockerfile](../../../../sources/Fergana-Labs__stash/powerpoint-mcp/Dockerfile)<br>[frontend/Dockerfile](../../../../sources/Fergana-Labs__stash/frontend/Dockerfile)<br>[collab/Dockerfile](../../../../sources/Fergana-Labs__stash/collab/Dockerfile)<br>[backend/Dockerfile](../../../../sources/Fergana-Labs__stash/backend/Dockerfile) |
| instruction | 7 | [CLAUDE.md](../../../../sources/Fergana-Labs__stash/CLAUDE.md)<br>[stashai/plugin/assets/opencode/AGENTS.md](../../../../sources/Fergana-Labs__stash/stashai/plugin/assets/opencode/AGENTS.md)<br>[stashai/plugin/assets/codex/AGENTS.md](../../../../sources/Fergana-Labs__stash/stashai/plugin/assets/codex/AGENTS.md)<br>[plugins/opencode-plugin/AGENTS.md](../../../../sources/Fergana-Labs__stash/plugins/opencode-plugin/AGENTS.md)<br>[plugins/gemini-plugin/GEMINI.md](../../../../sources/Fergana-Labs__stash/plugins/gemini-plugin/GEMINI.md)<br>[plugins/codex-plugin/AGENTS.md](../../../../sources/Fergana-Labs__stash/plugins/codex-plugin/AGENTS.md)<br>[plugins/claude-plugin/CLAUDE.md](../../../../sources/Fergana-Labs__stash/plugins/claude-plugin/CLAUDE.md) |
| docs | 45 | [README.md](../../../../sources/Fergana-Labs__stash/README.md)<br>[www/README.md](../../../../sources/Fergana-Labs__stash/www/README.md)<br>[www/app/docs/components.tsx](../../../../sources/Fergana-Labs__stash/www/app/docs/components.tsx)<br>[www/app/docs/layout.tsx](../../../../sources/Fergana-Labs__stash/www/app/docs/layout.tsx)<br>[www/app/docs/page.tsx](../../../../sources/Fergana-Labs__stash/www/app/docs/page.tsx)<br>[www/app/docs/self-hosting/page.tsx](../../../../sources/Fergana-Labs__stash/www/app/docs/self-hosting/page.tsx)<br>[www/app/docs/quickstart/page.tsx](../../../../sources/Fergana-Labs__stash/www/app/docs/quickstart/page.tsx)<br>[www/app/docs/contributing/page.tsx](../../../../sources/Fergana-Labs__stash/www/app/docs/contributing/page.tsx) |
| config | 18 | [pyproject.toml](../../../../sources/Fergana-Labs__stash/pyproject.toml)<br>[uv.lock](../../../../sources/Fergana-Labs__stash/uv.lock)<br>[www/package.json](../../../../sources/Fergana-Labs__stash/www/package.json)<br>[www/tsconfig.json](../../../../sources/Fergana-Labs__stash/www/tsconfig.json)<br>[stashai/plugin/assets/opencode/package.json](../../../../sources/Fergana-Labs__stash/stashai/plugin/assets/opencode/package.json)<br>[sdk/pyproject.toml](../../../../sources/Fergana-Labs__stash/sdk/pyproject.toml)<br>[powerpoint-mcp/pyproject.toml](../../../../sources/Fergana-Labs__stash/powerpoint-mcp/pyproject.toml)<br>[powerpoint-mcp/requirements.txt](../../../../sources/Fergana-Labs__stash/powerpoint-mcp/requirements.txt) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 175 | [powerpoint-mcp/tests/__init__.py](../../../../sources/Fergana-Labs__stash/powerpoint-mcp/tests/__init__.py)<br>[plugins/tests/conftest.py](../../../../sources/Fergana-Labs__stash/plugins/tests/conftest.py)<br>[plugins/tests/test_adapters.py](../../../../sources/Fergana-Labs__stash/plugins/tests/test_adapters.py)<br>[plugins/tests/test_assets_in_sync.py](../../../../sources/Fergana-Labs__stash/plugins/tests/test_assets_in_sync.py)<br>[plugins/tests/test_event_queue.py](../../../../sources/Fergana-Labs__stash/plugins/tests/test_event_queue.py)<br>[plugins/tests/test_plugin_config.py](../../../../sources/Fergana-Labs__stash/plugins/tests/test_plugin_config.py) |
| CI workflows | 4 | [.github/workflows/bump-plugin-version.yml](../../../../sources/Fergana-Labs__stash/.github/workflows/bump-plugin-version.yml)<br>[.github/workflows/docker-publish.yml](../../../../sources/Fergana-Labs__stash/.github/workflows/docker-publish.yml)<br>[.github/workflows/publish.yml](../../../../sources/Fergana-Labs__stash/.github/workflows/publish.yml)<br>[.github/workflows/test.yml](../../../../sources/Fergana-Labs__stash/.github/workflows/test.yml) |
| Containers / deploy | 7 | [docker-compose.local.yml](../../../../sources/Fergana-Labs__stash/docker-compose.local.yml)<br>[docker-compose.prod.yml](../../../../sources/Fergana-Labs__stash/docker-compose.prod.yml)<br>[docker-compose.yml](../../../../sources/Fergana-Labs__stash/docker-compose.yml)<br>[powerpoint-mcp/Dockerfile](../../../../sources/Fergana-Labs__stash/powerpoint-mcp/Dockerfile)<br>[frontend/Dockerfile](../../../../sources/Fergana-Labs__stash/frontend/Dockerfile)<br>[collab/Dockerfile](../../../../sources/Fergana-Labs__stash/collab/Dockerfile) |
| Security / policy | 32 | [SECURITY.md](../../../../sources/Fergana-Labs__stash/SECURITY.md)<br>[www/public/.well-known/security.txt](../../../../sources/Fergana-Labs__stash/www/public/.well-known/security.txt)<br>[www/lib/admin-auth.ts](../../../../sources/Fergana-Labs__stash/www/lib/admin-auth.ts)<br>[www/lib/security-headers.ts](../../../../sources/Fergana-Labs__stash/www/lib/security-headers.ts)<br>[www/app/security/page.tsx](../../../../sources/Fergana-Labs__stash/www/app/security/page.tsx)<br>[frontend/src/app/landing-auth-check/LandingAuthCheckClient.tsx](../../../../sources/Fergana-Labs__stash/frontend/src/app/landing-auth-check/LandingAuthCheckClient.tsx) |
| Agent instructions | 7 | [CLAUDE.md](../../../../sources/Fergana-Labs__stash/CLAUDE.md)<br>[stashai/plugin/assets/opencode/AGENTS.md](../../../../sources/Fergana-Labs__stash/stashai/plugin/assets/opencode/AGENTS.md)<br>[stashai/plugin/assets/codex/AGENTS.md](../../../../sources/Fergana-Labs__stash/stashai/plugin/assets/codex/AGENTS.md)<br>[plugins/opencode-plugin/AGENTS.md](../../../../sources/Fergana-Labs__stash/plugins/opencode-plugin/AGENTS.md)<br>[plugins/gemini-plugin/GEMINI.md](../../../../sources/Fergana-Labs__stash/plugins/gemini-plugin/GEMINI.md)<br>[plugins/codex-plugin/AGENTS.md](../../../../sources/Fergana-Labs__stash/plugins/codex-plugin/AGENTS.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `powerpoint-mcp/.env.example`, `powerpoint-mcp/.gitignore`, `powerpoint-mcp/Dockerfile`.
2. Trace execution through entrypoints: `collab/src/server.ts`, `cli/main.py`, `backend/main.py`.
3. Map agent/tool runtime through: `www/app/pages/agents/page.tsx`, `www/app/pages/agents/raw/route.ts`, `www/app/pages/_lib/agent-docs.ts`.
4. Inspect retrieval/memory/indexing through: `www/app/memory/page.tsx`, `plugins/openclaw-plugin/index.ts`, `frontend/src/app/onboarding/paths/memory/MemoryAskStep.tsx`.
5. Verify behavior through test/eval files: `powerpoint-mcp/tests/__init__.py`, `plugins/tests/conftest.py`, `plugins/tests/test_adapters.py`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Shared memory for your team's coding agents. 핵심 구조 신호는 Python, pyproject.toml, docker-compose.yml, README.md, CLAUDE.md, LICENSE이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
