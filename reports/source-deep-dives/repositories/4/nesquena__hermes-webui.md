# nesquena/hermes-webui Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Local clone structure analysis: 1237 files, 101 directories.

## 요약

- 조사 단위: `sources/nesquena__hermes-webui` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 1,173 files, 95 directories, depth score 135, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 api/server, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 mcp=mcp_server.py, tests/test_issue1968_mcp_profile_discovery.py, tests/test_issue538_mcp_management.py이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | nesquena/hermes-webui |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | mixed |
| Language | none |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | solid |
| Evidence | deep-source+report |
| Source | [sources/nesquena__hermes-webui](../../../../sources/nesquena__hermes-webui) |
| Existing report | [reports/clone-structures/nesquena__hermes-webui.md](../../../clone-structures/nesquena__hermes-webui.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 1173 / 95 |
| Max observed depth | 4 |
| Top directories | .github, api, docs, scripts, static, tests |
| Top extensions | .py: 914, .png: 170, .md: 38, .js: 14, .yml: 9, .json: 5, (none): 4, .html: 3, .sh: 3, .example: 2, .ps1: 2, .svg: 2 |
| Source patterns | api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 86 |
| docs | documentation surface | 61 |
| api | source boundary | 7 |
| .github | ci surface | 1 |
| scripts | top-level component | 1 |
| static | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| quality | package.json | lint:runtime | eslint --no-config-lookup -c eslint.runtime-guard.config.mjs "static/**/*.js" |


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
| mcp | [mcp_server.py](../../../../sources/nesquena__hermes-webui/mcp_server.py) | mcp signal |
| mcp | [tests/test_issue1968_mcp_profile_discovery.py](../../../../sources/nesquena__hermes-webui/tests/test_issue1968_mcp_profile_discovery.py) | mcp signal |
| mcp | [tests/test_issue538_mcp_management.py](../../../../sources/nesquena__hermes-webui/tests/test_issue538_mcp_management.py) | mcp signal |
| mcp | [tests/test_issue696_mcp_visibility_panel.py](../../../../sources/nesquena__hermes-webui/tests/test_issue696_mcp_visibility_panel.py) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/nesquena__hermes-webui/AGENTS.md) | agentRuntime signal |
| agentRuntime | [docs/rfcs/agent-source-boundary.md](../../../../sources/nesquena__hermes-webui/docs/rfcs/agent-source-boundary.md) | agentRuntime signal |
| agentRuntime | [docs/pr-media/guard-skill-detail-errors/skill-detail-error-after.png](../../../../sources/nesquena__hermes-webui/docs/pr-media/guard-skill-detail-errors/skill-detail-error-after.png) | agentRuntime signal |
| agentRuntime | [docs/pr-media/guard-skill-detail-errors/skill-detail-error-before.png](../../../../sources/nesquena__hermes-webui/docs/pr-media/guard-skill-detail-errors/skill-detail-error-before.png) | agentRuntime signal |
| entrypoints | [server.py](../../../../sources/nesquena__hermes-webui/server.py) | entrypoints signal |
| config | [package.json](../../../../sources/nesquena__hermes-webui/package.json) | config signal |
| config | [pyproject.toml](../../../../sources/nesquena__hermes-webui/pyproject.toml) | config signal |
| config | [requirements.txt](../../../../sources/nesquena__hermes-webui/requirements.txt) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 1 | [server.py](../../../../sources/nesquena__hermes-webui/server.py) |
| agentRuntime | 12 | [AGENTS.md](../../../../sources/nesquena__hermes-webui/AGENTS.md)<br>[docs/rfcs/agent-source-boundary.md](../../../../sources/nesquena__hermes-webui/docs/rfcs/agent-source-boundary.md)<br>[docs/pr-media/guard-skill-detail-errors/skill-detail-error-after.png](../../../../sources/nesquena__hermes-webui/docs/pr-media/guard-skill-detail-errors/skill-detail-error-after.png)<br>[docs/pr-media/guard-skill-detail-errors/skill-detail-error-before.png](../../../../sources/nesquena__hermes-webui/docs/pr-media/guard-skill-detail-errors/skill-detail-error-before.png)<br>[docs/pr-media/716/agent-health-alert.png](../../../../sources/nesquena__hermes-webui/docs/pr-media/716/agent-health-alert.png)<br>[docs/pr-media/2250/skill-detail-after.png](../../../../sources/nesquena__hermes-webui/docs/pr-media/2250/skill-detail-after.png)<br>[docs/pr-media/2250/skill-detail-before.png](../../../../sources/nesquena__hermes-webui/docs/pr-media/2250/skill-detail-before.png)<br>[docs/architecture/agent-api-contract.md](../../../../sources/nesquena__hermes-webui/docs/architecture/agent-api-contract.md) |
| mcp | 11 | [mcp_server.py](../../../../sources/nesquena__hermes-webui/mcp_server.py)<br>[tests/test_issue1968_mcp_profile_discovery.py](../../../../sources/nesquena__hermes-webui/tests/test_issue1968_mcp_profile_discovery.py)<br>[tests/test_issue538_mcp_management.py](../../../../sources/nesquena__hermes-webui/tests/test_issue538_mcp_management.py)<br>[tests/test_issue696_mcp_visibility_panel.py](../../../../sources/nesquena__hermes-webui/tests/test_issue696_mcp_visibility_panel.py)<br>[tests/test_issue697_mcp_tool_inventory.py](../../../../sources/nesquena__hermes-webui/tests/test_issue697_mcp_tool_inventory.py)<br>[tests/test_mcp_server.py](../../../../sources/nesquena__hermes-webui/tests/test_mcp_server.py)<br>[tests/test_mcp_tools_list_overflow.py](../../../../sources/nesquena__hermes-webui/tests/test_mcp_tools_list_overflow.py)<br>[docs/pr-media/697/mcp-tools-search-filter.png](../../../../sources/nesquena__hermes-webui/docs/pr-media/697/mcp-tools-search-filter.png) |
| retrieval | 15 | [tests/test_excalidraw_inline_embed.py](../../../../sources/nesquena__hermes-webui/tests/test_excalidraw_inline_embed.py)<br>[tests/test_issue1257_llm_wiki_status.py](../../../../sources/nesquena__hermes-webui/tests/test_issue1257_llm_wiki_status.py)<br>[tests/test_issue2184_fork_from_here_absolute_index.py](../../../../sources/nesquena__hermes-webui/tests/test_issue2184_fork_from_here_absolute_index.py)<br>[tests/test_issue2863_session_index_prime.py](../../../../sources/nesquena__hermes-webui/tests/test_issue2863_session_index_prime.py)<br>[tests/test_issue3506_memory_and_watcher.py](../../../../sources/nesquena__hermes-webui/tests/test_issue3506_memory_and_watcher.py)<br>[tests/test_issue3887_index_prime.py](../../../../sources/nesquena__hermes-webui/tests/test_issue3887_index_prime.py)<br>[tests/test_memory_session_lifecycle_generation.py](../../../../sources/nesquena__hermes-webui/tests/test_memory_session_lifecycle_generation.py)<br>[tests/test_memory_skill_badge.py](../../../../sources/nesquena__hermes-webui/tests/test_memory_skill_badge.py) |
| spec | 6 | [ARCHITECTURE.md](../../../../sources/nesquena__hermes-webui/ARCHITECTURE.md)<br>[DESIGN.md](../../../../sources/nesquena__hermes-webui/DESIGN.md)<br>[requirements.txt](../../../../sources/nesquena__hermes-webui/requirements.txt)<br>[ROADMAP.md](../../../../sources/nesquena__hermes-webui/ROADMAP.md)<br>[docs/architecture/agent-api-contract.md](../../../../sources/nesquena__hermes-webui/docs/architecture/agent-api-contract.md)<br>[docs/architecture/unified-session-db.md](../../../../sources/nesquena__hermes-webui/docs/architecture/unified-session-db.md) |
| eval | 854 | [tests/__init__.py](../../../../sources/nesquena__hermes-webui/tests/__init__.py)<br>[tests/_pytest_port.py](../../../../sources/nesquena__hermes-webui/tests/_pytest_port.py)<br>[tests/_wakeup_helpers.py](../../../../sources/nesquena__hermes-webui/tests/_wakeup_helpers.py)<br>[tests/browser_smoke.py](../../../../sources/nesquena__hermes-webui/tests/browser_smoke.py)<br>[tests/conftest.py](../../../../sources/nesquena__hermes-webui/tests/conftest.py)<br>[tests/test_1003_appearance_autosave.py](../../../../sources/nesquena__hermes-webui/tests/test_1003_appearance_autosave.py)<br>[tests/test_1003_preferences_autosave.py](../../../../sources/nesquena__hermes-webui/tests/test_1003_preferences_autosave.py)<br>[tests/test_1038_pwa_auth_redirect.py](../../../../sources/nesquena__hermes-webui/tests/test_1038_pwa_auth_redirect.py) |
| security | 37 | [eslint.runtime-guard.config.mjs](../../../../sources/nesquena__hermes-webui/eslint.runtime-guard.config.mjs)<br>[tests/test_1038_pwa_auth_redirect.py](../../../../sources/nesquena__hermes-webui/tests/test_1038_pwa_auth_redirect.py)<br>[tests/test_1694_root_saved_running_policy.py](../../../../sources/nesquena__hermes-webui/tests/test_1694_root_saved_running_policy.py)<br>[tests/test_agent_source_dependency_audit.py](../../../../sources/nesquena__hermes-webui/tests/test_agent_source_dependency_audit.py)<br>[tests/test_auth_password_hash_cache.py](../../../../sources/nesquena__hermes-webui/tests/test_auth_password_hash_cache.py)<br>[tests/test_auth_session_persistence.py](../../../../sources/nesquena__hermes-webui/tests/test_auth_session_persistence.py)<br>[tests/test_auth_sessions.py](../../../../sources/nesquena__hermes-webui/tests/test_auth_sessions.py)<br>[tests/test_auth.py](../../../../sources/nesquena__hermes-webui/tests/test_auth.py) |
| ci | 5 | [.github/workflows/browser-smoke.yml](../../../../sources/nesquena__hermes-webui/.github/workflows/browser-smoke.yml)<br>[.github/workflows/docker-smoke.yml](../../../../sources/nesquena__hermes-webui/.github/workflows/docker-smoke.yml)<br>[.github/workflows/native-windows-startup.yml](../../../../sources/nesquena__hermes-webui/.github/workflows/native-windows-startup.yml)<br>[.github/workflows/release.yml](../../../../sources/nesquena__hermes-webui/.github/workflows/release.yml)<br>[.github/workflows/tests.yml](../../../../sources/nesquena__hermes-webui/.github/workflows/tests.yml) |
| container | 4 | [docker-compose.three-container.yml](../../../../sources/nesquena__hermes-webui/docker-compose.three-container.yml)<br>[docker-compose.two-container.yml](../../../../sources/nesquena__hermes-webui/docker-compose.two-container.yml)<br>[docker-compose.yml](../../../../sources/nesquena__hermes-webui/docker-compose.yml)<br>[Dockerfile](../../../../sources/nesquena__hermes-webui/Dockerfile) |
| instruction | 1 | [AGENTS.md](../../../../sources/nesquena__hermes-webui/AGENTS.md) |
| docs | 199 | [README.md](../../../../sources/nesquena__hermes-webui/README.md)<br>[docs/advanced-chat-setup.md](../../../../sources/nesquena__hermes-webui/docs/advanced-chat-setup.md)<br>[docs/CONTRACTS.md](../../../../sources/nesquena__hermes-webui/docs/CONTRACTS.md)<br>[docs/docker.md](../../../../sources/nesquena__hermes-webui/docs/docker.md)<br>[docs/EXTENSIONS.md](../../../../sources/nesquena__hermes-webui/docs/EXTENSIONS.md)<br>[docs/ISSUES.md](../../../../sources/nesquena__hermes-webui/docs/ISSUES.md)<br>[docs/onboarding-agent-checklist.md](../../../../sources/nesquena__hermes-webui/docs/onboarding-agent-checklist.md)<br>[docs/onboarding.md](../../../../sources/nesquena__hermes-webui/docs/onboarding.md) |
| config | 3 | [package.json](../../../../sources/nesquena__hermes-webui/package.json)<br>[pyproject.toml](../../../../sources/nesquena__hermes-webui/pyproject.toml)<br>[requirements.txt](../../../../sources/nesquena__hermes-webui/requirements.txt) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 854 | [tests/__init__.py](../../../../sources/nesquena__hermes-webui/tests/__init__.py)<br>[tests/_pytest_port.py](../../../../sources/nesquena__hermes-webui/tests/_pytest_port.py)<br>[tests/_wakeup_helpers.py](../../../../sources/nesquena__hermes-webui/tests/_wakeup_helpers.py)<br>[tests/browser_smoke.py](../../../../sources/nesquena__hermes-webui/tests/browser_smoke.py)<br>[tests/conftest.py](../../../../sources/nesquena__hermes-webui/tests/conftest.py)<br>[tests/test_1003_appearance_autosave.py](../../../../sources/nesquena__hermes-webui/tests/test_1003_appearance_autosave.py) |
| CI workflows | 5 | [.github/workflows/browser-smoke.yml](../../../../sources/nesquena__hermes-webui/.github/workflows/browser-smoke.yml)<br>[.github/workflows/docker-smoke.yml](../../../../sources/nesquena__hermes-webui/.github/workflows/docker-smoke.yml)<br>[.github/workflows/native-windows-startup.yml](../../../../sources/nesquena__hermes-webui/.github/workflows/native-windows-startup.yml)<br>[.github/workflows/release.yml](../../../../sources/nesquena__hermes-webui/.github/workflows/release.yml)<br>[.github/workflows/tests.yml](../../../../sources/nesquena__hermes-webui/.github/workflows/tests.yml) |
| Containers / deploy | 4 | [docker-compose.three-container.yml](../../../../sources/nesquena__hermes-webui/docker-compose.three-container.yml)<br>[docker-compose.two-container.yml](../../../../sources/nesquena__hermes-webui/docker-compose.two-container.yml)<br>[docker-compose.yml](../../../../sources/nesquena__hermes-webui/docker-compose.yml)<br>[Dockerfile](../../../../sources/nesquena__hermes-webui/Dockerfile) |
| Security / policy | 37 | [eslint.runtime-guard.config.mjs](../../../../sources/nesquena__hermes-webui/eslint.runtime-guard.config.mjs)<br>[tests/test_1038_pwa_auth_redirect.py](../../../../sources/nesquena__hermes-webui/tests/test_1038_pwa_auth_redirect.py)<br>[tests/test_1694_root_saved_running_policy.py](../../../../sources/nesquena__hermes-webui/tests/test_1694_root_saved_running_policy.py)<br>[tests/test_agent_source_dependency_audit.py](../../../../sources/nesquena__hermes-webui/tests/test_agent_source_dependency_audit.py)<br>[tests/test_auth_password_hash_cache.py](../../../../sources/nesquena__hermes-webui/tests/test_auth_password_hash_cache.py)<br>[tests/test_auth_session_persistence.py](../../../../sources/nesquena__hermes-webui/tests/test_auth_session_persistence.py) |
| Agent instructions | 1 | [AGENTS.md](../../../../sources/nesquena__hermes-webui/AGENTS.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `mcp_server.py`, `tests/test_issue1968_mcp_profile_discovery.py`, `tests/test_issue538_mcp_management.py`.
2. Trace execution through entrypoints: `server.py`.
3. Map agent/tool runtime through: `AGENTS.md`, `docs/rfcs/agent-source-boundary.md`, `docs/pr-media/guard-skill-detail-errors/skill-detail-error-after.png`.
4. Inspect retrieval/memory/indexing through: `tests/test_excalidraw_inline_embed.py`, `tests/test_issue1257_llm_wiki_status.py`, `tests/test_issue2184_fork_from_here_absolute_index.py`.
5. Verify behavior through test/eval files: `tests/__init__.py`, `tests/_pytest_port.py`, `tests/_wakeup_helpers.py`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Local clone structure analysis 1237 files, 101 directories.. 핵심 구조 신호는 package.json, pyproject.toml, requirements.txt, Dockerfile, docker-compose.yml, tests이며, deep-source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

mixed 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing입니다.
