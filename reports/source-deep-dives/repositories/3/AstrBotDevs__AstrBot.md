# AstrBotDevs/AstrBot Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

AI Agent Assistant & development framework that integrates lots of IM platforms, LLMs, plugins and AI feature, and can be your openclaw alternative. ✨

## 요약

- 조사 단위: `sources/AstrBotDevs__AstrBot` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 1,500 files, 227 directories, depth score 132, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=tests/unit/test_mcp_client_schema.py, docs/zh/use/mcp.md, docs/en/use/mcp.md이고, 의존성 단서는 openai, anthropic, mcp, fastapi, pydantic, click, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | AstrBotDevs/AstrBot |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 34851 |
| Forks | 2403 |
| License | none |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/AstrBotDevs__AstrBot](../../../../sources/AstrBotDevs__AstrBot) |
| Existing report | [reports/global-trending/repositories/AstrBotDevs__AstrBot.md](../../../global-trending/repositories/AstrBotDevs__AstrBot.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 1500 / 227 |
| Max observed depth | 8 |
| Top directories | .github, astrbot, changelogs, dashboard, docs, k8s, openspec, samples, scripts, tests, typings |
| Top extensions | .py: 591, .md: 403, .vue: 157, .json: 140, .ts: 59, .yml: 20, .yaml: 19, .png: 18, .js: 17, .scss: 16, .mjs: 13, (none): 11 |
| Source patterns | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 95 |
| tests | validation surface | 49 |
| .github | ci surface | 1 |
| astrbot | top-level component | 1 |
| changelogs | top-level component | 1 |
| dashboard | top-level component | 1 |
| k8s | deployment surface | 1 |
| openspec | top-level component | 1 |
| samples | top-level component | 1 |
| scripts | top-level component | 1 |
| typings | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | worktree | make worktree |
| utility | Makefile | worktree-add | make worktree-add |
| utility | Makefile | worktree-rm | make worktree-rm |
| test | Makefile | pr-test-neo | make pr-test-neo |
| test | Makefile | pr-test-full | make pr-test-full |
| test | Makefile | pr-test-full-fast | make pr-test-full-fast |
| utility | pyproject.toml | astrbot | astrbot |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai, anthropic |
| agentProtocols | mcp |
| agentFrameworks | none |
| vectorStores | faiss |
| modelRuntime | none |
| webRuntime | fastapi |
| developerSurface | click |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [tests/unit/test_mcp_client_schema.py](../../../../sources/AstrBotDevs__AstrBot/tests/unit/test_mcp_client_schema.py) | mcp signal |
| mcp | [docs/zh/use/mcp.md](../../../../sources/AstrBotDevs__AstrBot/docs/zh/use/mcp.md) | mcp signal |
| mcp | [docs/en/use/mcp.md](../../../../sources/AstrBotDevs__AstrBot/docs/en/use/mcp.md) | mcp signal |
| mcp | [astrbot/core/agent/mcp_client.py](../../../../sources/AstrBotDevs__AstrBot/astrbot/core/agent/mcp_client.py) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/AstrBotDevs__AstrBot/AGENTS.md) | agentRuntime signal |
| agentRuntime | [tests/agent/test_context_manager.py](../../../../sources/AstrBotDevs__AstrBot/tests/agent/test_context_manager.py) | agentRuntime signal |
| agentRuntime | [tests/agent/test_token_counter.py](../../../../sources/AstrBotDevs__AstrBot/tests/agent/test_token_counter.py) | agentRuntime signal |
| agentRuntime | [tests/agent/test_truncator.py](../../../../sources/AstrBotDevs__AstrBot/tests/agent/test_truncator.py) | agentRuntime signal |
| entrypoints | [main.py](../../../../sources/AstrBotDevs__AstrBot/main.py) | entrypoints signal |
| entrypoints | [dashboard/src/App.vue](../../../../sources/AstrBotDevs__AstrBot/dashboard/src/App.vue) | entrypoints signal |
| entrypoints | [dashboard/src/main.ts](../../../../sources/AstrBotDevs__AstrBot/dashboard/src/main.ts) | entrypoints signal |
| entrypoints | [astrbot/dashboard/server.py](../../../../sources/AstrBotDevs__AstrBot/astrbot/dashboard/server.py) | entrypoints signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 8 | [main.py](../../../../sources/AstrBotDevs__AstrBot/main.py)<br>[dashboard/src/App.vue](../../../../sources/AstrBotDevs__AstrBot/dashboard/src/App.vue)<br>[dashboard/src/main.ts](../../../../sources/AstrBotDevs__AstrBot/dashboard/src/main.ts)<br>[astrbot/dashboard/server.py](../../../../sources/AstrBotDevs__AstrBot/astrbot/dashboard/server.py)<br>[astrbot/core/platform/sources/lark/server.py](../../../../sources/AstrBotDevs__AstrBot/astrbot/core/platform/sources/lark/server.py)<br>[astrbot/cli/__main__.py](../../../../sources/AstrBotDevs__AstrBot/astrbot/cli/__main__.py)<br>[astrbot/builtin_stars/builtin_commands/main.py](../../../../sources/AstrBotDevs__AstrBot/astrbot/builtin_stars/builtin_commands/main.py)<br>[astrbot/builtin_stars/astrbot/main.py](../../../../sources/AstrBotDevs__AstrBot/astrbot/builtin_stars/astrbot/main.py) |
| agentRuntime | 85 | [AGENTS.md](../../../../sources/AstrBotDevs__AstrBot/AGENTS.md)<br>[tests/agent/test_context_manager.py](../../../../sources/AstrBotDevs__AstrBot/tests/agent/test_context_manager.py)<br>[tests/agent/test_token_counter.py](../../../../sources/AstrBotDevs__AstrBot/tests/agent/test_token_counter.py)<br>[tests/agent/test_truncator.py](../../../../sources/AstrBotDevs__AstrBot/tests/agent/test_truncator.py)<br>[docs/zh/use/agent-runner.md](../../../../sources/AstrBotDevs__AstrBot/docs/zh/use/agent-runner.md)<br>[docs/zh/use/context-compress.md](../../../../sources/AstrBotDevs__AstrBot/docs/zh/use/context-compress.md)<br>[docs/zh/use/skills.md](../../../../sources/AstrBotDevs__AstrBot/docs/zh/use/skills.md)<br>[docs/zh/providers/agent-runners.md](../../../../sources/AstrBotDevs__AstrBot/docs/zh/providers/agent-runners.md) |
| mcp | 4 | [tests/unit/test_mcp_client_schema.py](../../../../sources/AstrBotDevs__AstrBot/tests/unit/test_mcp_client_schema.py)<br>[docs/zh/use/mcp.md](../../../../sources/AstrBotDevs__AstrBot/docs/zh/use/mcp.md)<br>[docs/en/use/mcp.md](../../../../sources/AstrBotDevs__AstrBot/docs/en/use/mcp.md)<br>[astrbot/core/agent/mcp_client.py](../../../../sources/AstrBotDevs__AstrBot/astrbot/core/agent/mcp_client.py) |
| retrieval | 75 | [tests/test_openai_embedding_source.py](../../../../sources/AstrBotDevs__AstrBot/tests/test_openai_embedding_source.py)<br>[docs/zh/index.md](../../../../sources/AstrBotDevs__AstrBot/docs/zh/index.md)<br>[docs/zh/use/knowledge-base-old.md](../../../../sources/AstrBotDevs__AstrBot/docs/zh/use/knowledge-base-old.md)<br>[docs/zh/use/knowledge-base.md](../../../../sources/AstrBotDevs__AstrBot/docs/zh/use/knowledge-base.md)<br>[docs/tests/test_sync_docs_to_wiki.py](../../../../sources/AstrBotDevs__AstrBot/docs/tests/test_sync_docs_to_wiki.py)<br>[docs/scripts/sync_docs_to_wiki.py](../../../../sources/AstrBotDevs__AstrBot/docs/scripts/sync_docs_to_wiki.py)<br>[docs/en/index.md](../../../../sources/AstrBotDevs__AstrBot/docs/en/index.md)<br>[docs/en/use/knowledge-base.md](../../../../sources/AstrBotDevs__AstrBot/docs/en/use/knowledge-base.md) |
| spec | 2 | [requirements.txt](../../../../sources/AstrBotDevs__AstrBot/requirements.txt)<br>[astrbot/core/utils/requirements_utils.py](../../../../sources/AstrBotDevs__AstrBot/astrbot/core/utils/requirements_utils.py) |
| eval | 149 | [tests/conftest.py](../../../../sources/AstrBotDevs__AstrBot/tests/conftest.py)<br>[tests/test_agent_runner_media_resolver.py](../../../../sources/AstrBotDevs__AstrBot/tests/test_agent_runner_media_resolver.py)<br>[tests/test_anthropic_kimi_code_provider.py](../../../../sources/AstrBotDevs__AstrBot/tests/test_anthropic_kimi_code_provider.py)<br>[tests/test_api_key_open_api.py](../../../../sources/AstrBotDevs__AstrBot/tests/test_api_key_open_api.py)<br>[tests/test_backup.py](../../../../sources/AstrBotDevs__AstrBot/tests/test_backup.py)<br>[tests/test_chat_route.py](../../../../sources/AstrBotDevs__AstrBot/tests/test_chat_route.py)<br>[tests/test_cli_init.py](../../../../sources/AstrBotDevs__AstrBot/tests/test_cli_init.py)<br>[tests/test_cli_password.py](../../../../sources/AstrBotDevs__AstrBot/tests/test_cli_password.py) |
| security | 17 | [tests/test_security_fixes.py](../../../../sources/AstrBotDevs__AstrBot/tests/test_security_fixes.py)<br>[tests/test_skill_manager_sandbox_cache.py](../../../../sources/AstrBotDevs__AstrBot/tests/test_skill_manager_sandbox_cache.py)<br>[tests/unit/test_tool_permission.py](../../../../sources/AstrBotDevs__AstrBot/tests/unit/test_tool_permission.py)<br>[docs/zh/use/astrbot-agent-sandbox.md](../../../../sources/AstrBotDevs__AstrBot/docs/zh/use/astrbot-agent-sandbox.md)<br>[docs/en/use/astrbot-agent-sandbox.md](../../../../sources/AstrBotDevs__AstrBot/docs/en/use/astrbot-agent-sandbox.md)<br>[docs/en/use/astrbot-sandbox.md](../../../../sources/AstrBotDevs__AstrBot/docs/en/use/astrbot-sandbox.md)<br>[dashboard/src/views/authentication/auth/LoginPage.vue](../../../../sources/AstrBotDevs__AstrBot/dashboard/src/views/authentication/auth/LoginPage.vue)<br>[dashboard/src/views/authentication/auth/SetupPage.vue](../../../../sources/AstrBotDevs__AstrBot/dashboard/src/views/authentication/auth/SetupPage.vue) |
| ci | 12 | [.github/workflows/build-docs.yml](../../../../sources/AstrBotDevs__AstrBot/.github/workflows/build-docs.yml)<br>[.github/workflows/code-format.yml](../../../../sources/AstrBotDevs__AstrBot/.github/workflows/code-format.yml)<br>[.github/workflows/codeql.yml](../../../../sources/AstrBotDevs__AstrBot/.github/workflows/codeql.yml)<br>[.github/workflows/coverage_test.yml](../../../../sources/AstrBotDevs__AstrBot/.github/workflows/coverage_test.yml)<br>[.github/workflows/dashboard_ci.yml](../../../../sources/AstrBotDevs__AstrBot/.github/workflows/dashboard_ci.yml)<br>[.github/workflows/docker-image.yml](../../../../sources/AstrBotDevs__AstrBot/.github/workflows/docker-image.yml)<br>[.github/workflows/pr-title-check.yml](../../../../sources/AstrBotDevs__AstrBot/.github/workflows/pr-title-check.yml)<br>[.github/workflows/release.yml](../../../../sources/AstrBotDevs__AstrBot/.github/workflows/release.yml) |
| container | 41 | [compose.yml](../../../../sources/AstrBotDevs__AstrBot/compose.yml)<br>[Dockerfile](../../../../sources/AstrBotDevs__AstrBot/Dockerfile)<br>[k8s/astrbot_with_napcat/00-namespace.yaml](../../../../sources/AstrBotDevs__AstrBot/k8s/astrbot_with_napcat/00-namespace.yaml)<br>[k8s/astrbot_with_napcat/01-pvc.yaml](../../../../sources/AstrBotDevs__AstrBot/k8s/astrbot_with_napcat/01-pvc.yaml)<br>[k8s/astrbot_with_napcat/02-deployment.yaml](../../../../sources/AstrBotDevs__AstrBot/k8s/astrbot_with_napcat/02-deployment.yaml)<br>[k8s/astrbot_with_napcat/03-service-nodeport.yaml](../../../../sources/AstrBotDevs__AstrBot/k8s/astrbot_with_napcat/03-service-nodeport.yaml)<br>[k8s/astrbot_with_napcat/04-service-loadbalancer.yaml](../../../../sources/AstrBotDevs__AstrBot/k8s/astrbot_with_napcat/04-service-loadbalancer.yaml)<br>[k8s/astrbot/00-namespace.yaml](../../../../sources/AstrBotDevs__AstrBot/k8s/astrbot/00-namespace.yaml) |
| instruction | 2 | [AGENTS.md](../../../../sources/AstrBotDevs__AstrBot/AGENTS.md)<br>[.github/copilot-instructions.md](../../../../sources/AstrBotDevs__AstrBot/.github/copilot-instructions.md) |
| docs | 240 | [README_fr.md](../../../../sources/AstrBotDevs__AstrBot/README_fr.md)<br>[README_ja.md](../../../../sources/AstrBotDevs__AstrBot/README_ja.md)<br>[README_ru.md](../../../../sources/AstrBotDevs__AstrBot/README_ru.md)<br>[README_zh-TW.md](../../../../sources/AstrBotDevs__AstrBot/README_zh-TW.md)<br>[README_zh.md](../../../../sources/AstrBotDevs__AstrBot/README_zh.md)<br>[README.md](../../../../sources/AstrBotDevs__AstrBot/README.md)<br>[docs/.gitignore](../../../../sources/AstrBotDevs__AstrBot/docs/.gitignore)<br>[docs/package.json](../../../../sources/AstrBotDevs__AstrBot/docs/package.json) |
| config | 7 | [Makefile](../../../../sources/AstrBotDevs__AstrBot/Makefile)<br>[pyproject.toml](../../../../sources/AstrBotDevs__AstrBot/pyproject.toml)<br>[requirements.txt](../../../../sources/AstrBotDevs__AstrBot/requirements.txt)<br>[docs/package.json](../../../../sources/AstrBotDevs__AstrBot/docs/package.json)<br>[dashboard/package.json](../../../../sources/AstrBotDevs__AstrBot/dashboard/package.json)<br>[dashboard/pnpm-workspace.yaml](../../../../sources/AstrBotDevs__AstrBot/dashboard/pnpm-workspace.yaml)<br>[dashboard/tsconfig.json](../../../../sources/AstrBotDevs__AstrBot/dashboard/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 149 | [tests/conftest.py](../../../../sources/AstrBotDevs__AstrBot/tests/conftest.py)<br>[tests/test_agent_runner_media_resolver.py](../../../../sources/AstrBotDevs__AstrBot/tests/test_agent_runner_media_resolver.py)<br>[tests/test_anthropic_kimi_code_provider.py](../../../../sources/AstrBotDevs__AstrBot/tests/test_anthropic_kimi_code_provider.py)<br>[tests/test_api_key_open_api.py](../../../../sources/AstrBotDevs__AstrBot/tests/test_api_key_open_api.py)<br>[tests/test_backup.py](../../../../sources/AstrBotDevs__AstrBot/tests/test_backup.py)<br>[tests/test_chat_route.py](../../../../sources/AstrBotDevs__AstrBot/tests/test_chat_route.py) |
| CI workflows | 12 | [.github/workflows/build-docs.yml](../../../../sources/AstrBotDevs__AstrBot/.github/workflows/build-docs.yml)<br>[.github/workflows/code-format.yml](../../../../sources/AstrBotDevs__AstrBot/.github/workflows/code-format.yml)<br>[.github/workflows/codeql.yml](../../../../sources/AstrBotDevs__AstrBot/.github/workflows/codeql.yml)<br>[.github/workflows/coverage_test.yml](../../../../sources/AstrBotDevs__AstrBot/.github/workflows/coverage_test.yml)<br>[.github/workflows/dashboard_ci.yml](../../../../sources/AstrBotDevs__AstrBot/.github/workflows/dashboard_ci.yml)<br>[.github/workflows/docker-image.yml](../../../../sources/AstrBotDevs__AstrBot/.github/workflows/docker-image.yml) |
| Containers / deploy | 41 | [compose.yml](../../../../sources/AstrBotDevs__AstrBot/compose.yml)<br>[Dockerfile](../../../../sources/AstrBotDevs__AstrBot/Dockerfile)<br>[k8s/astrbot_with_napcat/00-namespace.yaml](../../../../sources/AstrBotDevs__AstrBot/k8s/astrbot_with_napcat/00-namespace.yaml)<br>[k8s/astrbot_with_napcat/01-pvc.yaml](../../../../sources/AstrBotDevs__AstrBot/k8s/astrbot_with_napcat/01-pvc.yaml)<br>[k8s/astrbot_with_napcat/02-deployment.yaml](../../../../sources/AstrBotDevs__AstrBot/k8s/astrbot_with_napcat/02-deployment.yaml)<br>[k8s/astrbot_with_napcat/03-service-nodeport.yaml](../../../../sources/AstrBotDevs__AstrBot/k8s/astrbot_with_napcat/03-service-nodeport.yaml) |
| Security / policy | 17 | [tests/test_security_fixes.py](../../../../sources/AstrBotDevs__AstrBot/tests/test_security_fixes.py)<br>[tests/test_skill_manager_sandbox_cache.py](../../../../sources/AstrBotDevs__AstrBot/tests/test_skill_manager_sandbox_cache.py)<br>[tests/unit/test_tool_permission.py](../../../../sources/AstrBotDevs__AstrBot/tests/unit/test_tool_permission.py)<br>[docs/zh/use/astrbot-agent-sandbox.md](../../../../sources/AstrBotDevs__AstrBot/docs/zh/use/astrbot-agent-sandbox.md)<br>[docs/en/use/astrbot-agent-sandbox.md](../../../../sources/AstrBotDevs__AstrBot/docs/en/use/astrbot-agent-sandbox.md)<br>[docs/en/use/astrbot-sandbox.md](../../../../sources/AstrBotDevs__AstrBot/docs/en/use/astrbot-sandbox.md) |
| Agent instructions | 2 | [AGENTS.md](../../../../sources/AstrBotDevs__AstrBot/AGENTS.md)<br>[.github/copilot-instructions.md](../../../../sources/AstrBotDevs__AstrBot/.github/copilot-instructions.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `tests/unit/test_mcp_client_schema.py`, `docs/zh/use/mcp.md`, `docs/en/use/mcp.md`.
2. Trace execution through entrypoints: `main.py`, `dashboard/src/App.vue`, `dashboard/src/main.ts`.
3. Map agent/tool runtime through: `AGENTS.md`, `tests/agent/test_context_manager.py`, `tests/agent/test_token_counter.py`.
4. Inspect retrieval/memory/indexing through: `tests/test_openai_embedding_source.py`, `docs/zh/index.md`, `docs/zh/use/knowledge-base-old.md`.
5. Verify behavior through test/eval files: `tests/conftest.py`, `tests/test_agent_runner_media_resolver.py`, `tests/test_anthropic_kimi_code_provider.py`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 AI Agent Assistant & development framework that integrates lots of IM platforms, LLMs, plugins and AI feature, and can b. 핵심 구조 신호는 Python, pyproject.toml, requirements.txt, Dockerfile, Makefile, README.md이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
