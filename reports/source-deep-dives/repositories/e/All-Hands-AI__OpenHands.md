# All-Hands-AI/OpenHands Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Local clone structure analysis: 2385 files, 368 directories.

## 요약

- 조사 단위: `sources/All-Hands-AI__OpenHands` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 2,384 files, 367 directories, depth score 138, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=tests/unit/server/routes/test_mcp_routes.py, tests/unit/mcp/test_mcp_integration.py, openhands/app_server/mcp/mcp_router.py이고, 의존성 단서는 openai, anthropic, gemini, mcp, fastapi, opentelemetry, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | All-Hands-AI/OpenHands |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | none |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | solid |
| Evidence | deep-source+report |
| Source | [sources/All-Hands-AI__OpenHands](../../../../sources/All-Hands-AI__OpenHands) |
| Existing report | [reports/clone-structures/All-Hands-AI__OpenHands.md](../../../clone-structures/All-Hands-AI__OpenHands.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 2384 / 367 |
| Max observed depth | 8 |
| Top directories | .agents, .devcontainer, .github, .openhands, containers, dev_config, enterprise, frontend, kind, openhands, openhands-ui, scripts, skills, tests |
| Top extensions | .py: 818, .tsx: 715, .ts: 498, .svg: 121, .md: 77, .j2: 34, .yml: 32, (none): 19, .sh: 9, .json: 8, .yaml: 8, .css: 7 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 54 |
| .devcontainer | deployment surface | 1 |
| .github | ci surface | 1 |
| containers | top-level component | 1 |
| dev_config | top-level component | 1 |
| enterprise | top-level component | 1 |
| frontend | top-level component | 1 |
| kind | top-level component | 1 |
| openhands | top-level component | 1 |
| openhands-ui | top-level component | 1 |
| scripts | top-level component | 1 |
| skills | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| build | Makefile | build | make build |
| quality | Makefile | check-dependencies | make check-dependencies |
| quality | Makefile | check-system | make check-system |
| quality | Makefile | check-python | make check-python |
| quality | Makefile | check-npm | make check-npm |
| quality | Makefile | check-nodejs | make check-nodejs |
| quality | Makefile | check-docker | make check-docker |
| quality | Makefile | check-tmux | make check-tmux |
| quality | Makefile | check-poetry | make check-poetry |
| utility | Makefile | install-python-dependencies | make install-python-dependencies |
| utility | Makefile | install-frontend-dependencies | make install-frontend-dependencies |
| utility | Makefile | install-pre-commit-hooks | make install-pre-commit-hooks |
| quality | Makefile | lint-backend | make lint-backend |
| quality | Makefile | lint-frontend | make lint-frontend |
| quality | Makefile | lint | make lint |
| utility | Makefile | kind | make kind |
| test | Makefile | test-frontend | make test-frontend |
| test | Makefile | test | make test |
| build | Makefile | build-frontend | make build-frontend |
| serve-dev | Makefile | start-backend | make start-backend |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai, anthropic, gemini |
| agentProtocols | mcp |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | fastapi |
| developerSurface | none |
| observability | opentelemetry |
| browserAutomation | playwright |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [tests/unit/server/routes/test_mcp_routes.py](../../../../sources/All-Hands-AI__OpenHands/tests/unit/server/routes/test_mcp_routes.py) | mcp signal |
| mcp | [tests/unit/mcp/test_mcp_integration.py](../../../../sources/All-Hands-AI__OpenHands/tests/unit/mcp/test_mcp_integration.py) | mcp signal |
| mcp | [openhands/app_server/mcp/mcp_router.py](../../../../sources/All-Hands-AI__OpenHands/openhands/app_server/mcp/mcp_router.py) | mcp signal |
| mcp | [frontend/src/utils/mcp-config.ts](../../../../sources/All-Hands-AI__OpenHands/frontend/src/utils/mcp-config.ts) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/All-Hands-AI__OpenHands/AGENTS.md) | agentRuntime signal |
| agentRuntime | [skills/add_agent.md](../../../../sources/All-Hands-AI__OpenHands/skills/add_agent.md) | agentRuntime signal |
| agentRuntime | [skills/add_repo_inst.md](../../../../sources/All-Hands-AI__OpenHands/skills/add_repo_inst.md) | agentRuntime signal |
| agentRuntime | [skills/address_pr_comments.md](../../../../sources/All-Hands-AI__OpenHands/skills/address_pr_comments.md) | agentRuntime signal |
| entrypoints | [openhands-ui/.storybook/main.ts](../../../../sources/All-Hands-AI__OpenHands/openhands-ui/.storybook/main.ts) | entrypoints signal |
| entrypoints | [openhands/server/__main__.py](../../../../sources/All-Hands-AI__OpenHands/openhands/server/__main__.py) | entrypoints signal |
| entrypoints | [frontend/src/index.css](../../../../sources/All-Hands-AI__OpenHands/frontend/src/index.css) | entrypoints signal |
| entrypoints | [frontend/src/icons/server.svg](../../../../sources/All-Hands-AI__OpenHands/frontend/src/icons/server.svg) | entrypoints signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 4 | [openhands-ui/.storybook/main.ts](../../../../sources/All-Hands-AI__OpenHands/openhands-ui/.storybook/main.ts)<br>[openhands/server/__main__.py](../../../../sources/All-Hands-AI__OpenHands/openhands/server/__main__.py)<br>[frontend/src/index.css](../../../../sources/All-Hands-AI__OpenHands/frontend/src/index.css)<br>[frontend/src/icons/server.svg](../../../../sources/All-Hands-AI__OpenHands/frontend/src/icons/server.svg) |
| agentRuntime | 352 | [AGENTS.md](../../../../sources/All-Hands-AI__OpenHands/AGENTS.md)<br>[skills/add_agent.md](../../../../sources/All-Hands-AI__OpenHands/skills/add_agent.md)<br>[skills/add_repo_inst.md](../../../../sources/All-Hands-AI__OpenHands/skills/add_repo_inst.md)<br>[skills/address_pr_comments.md](../../../../sources/All-Hands-AI__OpenHands/skills/address_pr_comments.md)<br>[skills/agent_memory.md](../../../../sources/All-Hands-AI__OpenHands/skills/agent_memory.md)<br>[skills/agent-builder.md](../../../../sources/All-Hands-AI__OpenHands/skills/agent-builder.md)<br>[skills/azure_devops.md](../../../../sources/All-Hands-AI__OpenHands/skills/azure_devops.md)<br>[skills/bitbucket_data_center.md](../../../../sources/All-Hands-AI__OpenHands/skills/bitbucket_data_center.md) |
| mcp | 20 | [tests/unit/server/routes/test_mcp_routes.py](../../../../sources/All-Hands-AI__OpenHands/tests/unit/server/routes/test_mcp_routes.py)<br>[tests/unit/mcp/test_mcp_integration.py](../../../../sources/All-Hands-AI__OpenHands/tests/unit/mcp/test_mcp_integration.py)<br>[openhands/app_server/mcp/mcp_router.py](../../../../sources/All-Hands-AI__OpenHands/openhands/app_server/mcp/mcp_router.py)<br>[frontend/src/utils/mcp-config.ts](../../../../sources/All-Hands-AI__OpenHands/frontend/src/utils/mcp-config.ts)<br>[frontend/src/routes/mcp-settings.tsx](../../../../sources/All-Hands-AI__OpenHands/frontend/src/routes/mcp-settings.tsx)<br>[frontend/src/hooks/mutation/use-add-mcp-server.ts](../../../../sources/All-Hands-AI__OpenHands/frontend/src/hooks/mutation/use-add-mcp-server.ts)<br>[frontend/src/hooks/mutation/use-delete-mcp-server.ts](../../../../sources/All-Hands-AI__OpenHands/frontend/src/hooks/mutation/use-delete-mcp-server.ts)<br>[frontend/src/hooks/mutation/use-update-mcp-server.ts](../../../../sources/All-Hands-AI__OpenHands/frontend/src/hooks/mutation/use-update-mcp-server.ts) |
| retrieval | 28 | [tests/unit/utils/test_chunk_localizer.py](../../../../sources/All-Hands-AI__OpenHands/tests/unit/utils/test_chunk_localizer.py)<br>[skills/agent_memory.md](../../../../sources/All-Hands-AI__OpenHands/skills/agent_memory.md)<br>[openhands-ui/index.css](../../../../sources/All-Hands-AI__OpenHands/openhands-ui/index.css)<br>[openhands-ui/index.ts](../../../../sources/All-Hands-AI__OpenHands/openhands-ui/index.ts)<br>[openhands-ui/components/spinner/index.css](../../../../sources/All-Hands-AI__OpenHands/openhands-ui/components/spinner/index.css)<br>[openhands-ui/components/interactive-chip/index.css](../../../../sources/All-Hands-AI__OpenHands/openhands-ui/components/interactive-chip/index.css)<br>[openhands-ui/components/button/index.css](../../../../sources/All-Hands-AI__OpenHands/openhands-ui/components/button/index.css)<br>[openhands/app_server/utils/chunk_localizer.py](../../../../sources/All-Hands-AI__OpenHands/openhands/app_server/utils/chunk_localizer.py) |
| spec | 15 | [tests/unit/app_server/test_docker_sandbox_spec_service_injector.py](../../../../sources/All-Hands-AI__OpenHands/tests/unit/app_server/test_docker_sandbox_spec_service_injector.py)<br>[openhands/app_server/sandbox/docker_sandbox_spec_service.py](../../../../sources/All-Hands-AI__OpenHands/openhands/app_server/sandbox/docker_sandbox_spec_service.py)<br>[openhands/app_server/sandbox/preset_sandbox_spec_service.py](../../../../sources/All-Hands-AI__OpenHands/openhands/app_server/sandbox/preset_sandbox_spec_service.py)<br>[openhands/app_server/sandbox/process_sandbox_spec_service.py](../../../../sources/All-Hands-AI__OpenHands/openhands/app_server/sandbox/process_sandbox_spec_service.py)<br>[openhands/app_server/sandbox/remote_sandbox_spec_service.py](../../../../sources/All-Hands-AI__OpenHands/openhands/app_server/sandbox/remote_sandbox_spec_service.py)<br>[openhands/app_server/sandbox/sandbox_spec_models.py](../../../../sources/All-Hands-AI__OpenHands/openhands/app_server/sandbox/sandbox_spec_models.py)<br>[openhands/app_server/sandbox/sandbox_spec_router.py](../../../../sources/All-Hands-AI__OpenHands/openhands/app_server/sandbox/sandbox_spec_router.py)<br>[openhands/app_server/sandbox/sandbox_spec_service.py](../../../../sources/All-Hands-AI__OpenHands/openhands/app_server/sandbox/sandbox_spec_service.py) |
| eval | 562 | [tests/__init__.py](../../../../sources/All-Hands-AI__OpenHands/tests/__init__.py)<br>[tests/unit/__init__.py](../../../../sources/All-Hands-AI__OpenHands/tests/unit/__init__.py)<br>[tests/unit/README.md](../../../../sources/All-Hands-AI__OpenHands/tests/unit/README.md)<br>[tests/unit/test_analytics_context.py](../../../../sources/All-Hands-AI__OpenHands/tests/unit/test_analytics_context.py)<br>[tests/unit/test_analytics_service.py](../../../../sources/All-Hands-AI__OpenHands/tests/unit/test_analytics_service.py)<br>[tests/unit/test_analytics_user_base.py](../../../../sources/All-Hands-AI__OpenHands/tests/unit/test_analytics_user_base.py)<br>[tests/unit/test_azure_devops.py](../../../../sources/All-Hands-AI__OpenHands/tests/unit/test_azure_devops.py)<br>[tests/unit/test_forgejo_service.py](../../../../sources/All-Hands-AI__OpenHands/tests/unit/test_forgejo_service.py) |
| security | 107 | [tests/unit/storage/data_models/test_secret_store.py](../../../../sources/All-Hands-AI__OpenHands/tests/unit/storage/data_models/test_secret_store.py)<br>[tests/unit/app_server/test_docker_sandbox_service.py](../../../../sources/All-Hands-AI__OpenHands/tests/unit/app_server/test_docker_sandbox_service.py)<br>[tests/unit/app_server/test_docker_sandbox_spec_service_injector.py](../../../../sources/All-Hands-AI__OpenHands/tests/unit/app_server/test_docker_sandbox_spec_service_injector.py)<br>[tests/unit/app_server/test_process_sandbox_service.py](../../../../sources/All-Hands-AI__OpenHands/tests/unit/app_server/test_process_sandbox_service.py)<br>[tests/unit/app_server/test_remote_sandbox_service.py](../../../../sources/All-Hands-AI__OpenHands/tests/unit/app_server/test_remote_sandbox_service.py)<br>[tests/unit/app_server/test_sandbox_secrets_router.py](../../../../sources/All-Hands-AI__OpenHands/tests/unit/app_server/test_sandbox_secrets_router.py)<br>[tests/unit/app_server/test_sandbox_service.py](../../../../sources/All-Hands-AI__OpenHands/tests/unit/app_server/test_sandbox_service.py)<br>[tests/unit/app_server/test_webhook_router_auth.py](../../../../sources/All-Hands-AI__OpenHands/tests/unit/app_server/test_webhook_router_auth.py) |
| ci | 23 | [.github/workflows/_build-image.yml](../../../../sources/All-Hands-AI__OpenHands/.github/workflows/_build-image.yml)<br>[.github/workflows/check-package-versions.yml](../../../../sources/All-Hands-AI__OpenHands/.github/workflows/check-package-versions.yml)<br>[.github/workflows/check-version-consistency.yml](../../../../sources/All-Hands-AI__OpenHands/.github/workflows/check-version-consistency.yml)<br>[.github/workflows/enterprise-apply-migrations-test-db.yml](../../../../sources/All-Hands-AI__OpenHands/.github/workflows/enterprise-apply-migrations-test-db.yml)<br>[.github/workflows/enterprise-check-migrations.yml](../../../../sources/All-Hands-AI__OpenHands/.github/workflows/enterprise-check-migrations.yml)<br>[.github/workflows/fe-e2e-tests.yml](../../../../sources/All-Hands-AI__OpenHands/.github/workflows/fe-e2e-tests.yml)<br>[.github/workflows/fe-unit-tests.yml](../../../../sources/All-Hands-AI__OpenHands/.github/workflows/fe-unit-tests.yml)<br>[.github/workflows/ghcr-build.yml](../../../../sources/All-Hands-AI__OpenHands/.github/workflows/ghcr-build.yml) |
| container | 5 | [docker-compose.yml](../../../../sources/All-Hands-AI__OpenHands/docker-compose.yml)<br>[enterprise/Dockerfile](../../../../sources/All-Hands-AI__OpenHands/enterprise/Dockerfile)<br>[containers/dev/compose.yml](../../../../sources/All-Hands-AI__OpenHands/containers/dev/compose.yml)<br>[containers/dev/Dockerfile](../../../../sources/All-Hands-AI__OpenHands/containers/dev/Dockerfile)<br>[containers/app/Dockerfile](../../../../sources/All-Hands-AI__OpenHands/containers/app/Dockerfile) |
| instruction | 1 | [AGENTS.md](../../../../sources/All-Hands-AI__OpenHands/AGENTS.md) |
| docs | 32 | [README.md](../../../../sources/All-Hands-AI__OpenHands/README.md)<br>[tests/unit/README.md](../../../../sources/All-Hands-AI__OpenHands/tests/unit/README.md)<br>[skills/README.md](../../../../sources/All-Hands-AI__OpenHands/skills/README.md)<br>[openhands-ui/README.md](../../../../sources/All-Hands-AI__OpenHands/openhands-ui/README.md)<br>[openhands/app_server/README.md](../../../../sources/All-Hands-AI__OpenHands/openhands/app_server/README.md)<br>[openhands/app_server/utils/README.md](../../../../sources/All-Hands-AI__OpenHands/openhands/app_server/utils/README.md)<br>[openhands/app_server/user/README.md](../../../../sources/All-Hands-AI__OpenHands/openhands/app_server/user/README.md)<br>[openhands/app_server/services/README.md](../../../../sources/All-Hands-AI__OpenHands/openhands/app_server/services/README.md) |
| config | 11 | [Makefile](../../../../sources/All-Hands-AI__OpenHands/Makefile)<br>[poetry.lock](../../../../sources/All-Hands-AI__OpenHands/poetry.lock)<br>[pyproject.toml](../../../../sources/All-Hands-AI__OpenHands/pyproject.toml)<br>[uv.lock](../../../../sources/All-Hands-AI__OpenHands/uv.lock)<br>[openhands-ui/package.json](../../../../sources/All-Hands-AI__OpenHands/openhands-ui/package.json)<br>[openhands-ui/tsconfig.json](../../../../sources/All-Hands-AI__OpenHands/openhands-ui/tsconfig.json)<br>[frontend/package.json](../../../../sources/All-Hands-AI__OpenHands/frontend/package.json)<br>[frontend/tsconfig.json](../../../../sources/All-Hands-AI__OpenHands/frontend/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 562 | [tests/__init__.py](../../../../sources/All-Hands-AI__OpenHands/tests/__init__.py)<br>[tests/unit/__init__.py](../../../../sources/All-Hands-AI__OpenHands/tests/unit/__init__.py)<br>[tests/unit/README.md](../../../../sources/All-Hands-AI__OpenHands/tests/unit/README.md)<br>[tests/unit/test_analytics_context.py](../../../../sources/All-Hands-AI__OpenHands/tests/unit/test_analytics_context.py)<br>[tests/unit/test_analytics_service.py](../../../../sources/All-Hands-AI__OpenHands/tests/unit/test_analytics_service.py)<br>[tests/unit/test_analytics_user_base.py](../../../../sources/All-Hands-AI__OpenHands/tests/unit/test_analytics_user_base.py) |
| CI workflows | 23 | [.github/workflows/_build-image.yml](../../../../sources/All-Hands-AI__OpenHands/.github/workflows/_build-image.yml)<br>[.github/workflows/check-package-versions.yml](../../../../sources/All-Hands-AI__OpenHands/.github/workflows/check-package-versions.yml)<br>[.github/workflows/check-version-consistency.yml](../../../../sources/All-Hands-AI__OpenHands/.github/workflows/check-version-consistency.yml)<br>[.github/workflows/enterprise-apply-migrations-test-db.yml](../../../../sources/All-Hands-AI__OpenHands/.github/workflows/enterprise-apply-migrations-test-db.yml)<br>[.github/workflows/enterprise-check-migrations.yml](../../../../sources/All-Hands-AI__OpenHands/.github/workflows/enterprise-check-migrations.yml)<br>[.github/workflows/fe-e2e-tests.yml](../../../../sources/All-Hands-AI__OpenHands/.github/workflows/fe-e2e-tests.yml) |
| Containers / deploy | 5 | [docker-compose.yml](../../../../sources/All-Hands-AI__OpenHands/docker-compose.yml)<br>[enterprise/Dockerfile](../../../../sources/All-Hands-AI__OpenHands/enterprise/Dockerfile)<br>[containers/dev/compose.yml](../../../../sources/All-Hands-AI__OpenHands/containers/dev/compose.yml)<br>[containers/dev/Dockerfile](../../../../sources/All-Hands-AI__OpenHands/containers/dev/Dockerfile)<br>[containers/app/Dockerfile](../../../../sources/All-Hands-AI__OpenHands/containers/app/Dockerfile) |
| Security / policy | 107 | [tests/unit/storage/data_models/test_secret_store.py](../../../../sources/All-Hands-AI__OpenHands/tests/unit/storage/data_models/test_secret_store.py)<br>[tests/unit/app_server/test_docker_sandbox_service.py](../../../../sources/All-Hands-AI__OpenHands/tests/unit/app_server/test_docker_sandbox_service.py)<br>[tests/unit/app_server/test_docker_sandbox_spec_service_injector.py](../../../../sources/All-Hands-AI__OpenHands/tests/unit/app_server/test_docker_sandbox_spec_service_injector.py)<br>[tests/unit/app_server/test_process_sandbox_service.py](../../../../sources/All-Hands-AI__OpenHands/tests/unit/app_server/test_process_sandbox_service.py)<br>[tests/unit/app_server/test_remote_sandbox_service.py](../../../../sources/All-Hands-AI__OpenHands/tests/unit/app_server/test_remote_sandbox_service.py)<br>[tests/unit/app_server/test_sandbox_secrets_router.py](../../../../sources/All-Hands-AI__OpenHands/tests/unit/app_server/test_sandbox_secrets_router.py) |
| Agent instructions | 1 | [AGENTS.md](../../../../sources/All-Hands-AI__OpenHands/AGENTS.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `tests/unit/server/routes/test_mcp_routes.py`, `tests/unit/mcp/test_mcp_integration.py`, `openhands/app_server/mcp/mcp_router.py`.
2. Trace execution through entrypoints: `openhands-ui/.storybook/main.ts`, `openhands/server/__main__.py`, `frontend/src/index.css`.
3. Map agent/tool runtime through: `AGENTS.md`, `skills/add_agent.md`, `skills/add_repo_inst.md`.
4. Inspect retrieval/memory/indexing through: `tests/unit/utils/test_chunk_localizer.py`, `skills/agent_memory.md`, `openhands-ui/index.css`.
5. Verify behavior through test/eval files: `tests/__init__.py`, `tests/unit/__init__.py`, `tests/unit/README.md`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Local clone structure analysis 2385 files, 368 directories.. 핵심 구조 신호는 pyproject.toml, docker-compose.yml, Makefile, README.md, AGENTS.md, openai이며, deep-source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing입니다.
