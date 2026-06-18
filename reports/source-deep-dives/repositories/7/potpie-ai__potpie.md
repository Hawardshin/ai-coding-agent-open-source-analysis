# potpie-ai/potpie Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Local clone structure analysis: 1494 files, 274 directories.

## 요약

- 조사 단위: `sources/potpie-ai__potpie` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 1,494 files, 274 directories, depth score 138, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=potpie/context-engine/tests/unit/test_mcp_project_access.py, potpie/context-engine/adapters/inbound/mcp/__init__.py, potpie/context-engine/adapters/inbound/mcp/project_access.py이고, 의존성 단서는 openai, fastapi, pydantic, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | potpie-ai/potpie |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | mixed |
| Language | Python |
| Stars | 5456 |
| Forks | 637 |
| License | Apache License 2.0 |
| Maturity | high-signal |
| Evidence | deep-source+report |
| Source | [sources/potpie-ai__potpie](../../../../sources/potpie-ai__potpie) |
| Existing report | [reports/clone-structures/potpie-ai__potpie.md](../../../clone-structures/potpie-ai__potpie.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 1494 / 274 |
| Max observed depth | 12 |
| Top directories | .github, assets, docs, legacy, potpie |
| Top extensions | .py: 1246, .yaml: 60, .md: 49, .scm: 32, (none): 20, .sh: 15, .rs: 13, .toml: 8, .yml: 8, .conf: 7, .json: 7, .dockerfile: 6 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 14 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| legacy | top-level component | 1 |
| potpie | top-level component | 1 |


## How It Runs

_No command surface extracted from root manifests._


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | fastapi |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [potpie/context-engine/tests/unit/test_mcp_project_access.py](../../../../sources/potpie-ai__potpie/potpie/context-engine/tests/unit/test_mcp_project_access.py) | mcp signal |
| mcp | [potpie/context-engine/adapters/inbound/mcp/__init__.py](../../../../sources/potpie-ai__potpie/potpie/context-engine/adapters/inbound/mcp/__init__.py) | mcp signal |
| mcp | [potpie/context-engine/adapters/inbound/mcp/project_access.py](../../../../sources/potpie-ai__potpie/potpie/context-engine/adapters/inbound/mcp/project_access.py) | mcp signal |
| mcp | [potpie/context-engine/adapters/inbound/mcp/server.py](../../../../sources/potpie-ai__potpie/potpie/context-engine/adapters/inbound/mcp/server.py) | mcp signal |
| agentRuntime | [potpie/sandbox/docker-compose.yml](../../../../sources/potpie-ai__potpie/potpie/sandbox/docker-compose.yml) | agentRuntime signal |
| agentRuntime | [potpie/sandbox/pyproject.toml](../../../../sources/potpie-ai__potpie/potpie/sandbox/pyproject.toml) | agentRuntime signal |
| agentRuntime | [potpie/sandbox/uv.lock](../../../../sources/potpie-ai__potpie/potpie/sandbox/uv.lock) | agentRuntime signal |
| agentRuntime | [potpie/sandbox/tests/unit/test_daytona_provider.py](../../../../sources/potpie-ai__potpie/potpie/sandbox/tests/unit/test_daytona_provider.py) | agentRuntime signal |
| entrypoints | [potpie/sandbox/sandbox/parser_runner/__main__.py](../../../../sources/potpie-ai__potpie/potpie/sandbox/sandbox/parser_runner/__main__.py) | entrypoints signal |
| entrypoints | [potpie/context-engine/host/daemon_runtime/__main__.py](../../../../sources/potpie-ai__potpie/potpie/context-engine/host/daemon_runtime/__main__.py) | entrypoints signal |
| entrypoints | [potpie/context-engine/benchmarks/__main__.py](../../../../sources/potpie-ai__potpie/potpie/context-engine/benchmarks/__main__.py) | entrypoints signal |
| instruction | [potpie/context-engine/adapters/inbound/cli/templates/claude_bundle/CLAUDE.md](../../../../sources/potpie-ai__potpie/potpie/context-engine/adapters/inbound/cli/templates/claude_bundle/CLAUDE.md) | instruction signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 7 | [potpie/sandbox/sandbox/parser_runner/__main__.py](../../../../sources/potpie-ai__potpie/potpie/sandbox/sandbox/parser_runner/__main__.py)<br>[potpie/context-engine/host/daemon_runtime/__main__.py](../../../../sources/potpie-ai__potpie/potpie/context-engine/host/daemon_runtime/__main__.py)<br>[potpie/context-engine/benchmarks/__main__.py](../../../../sources/potpie-ai__potpie/potpie/context-engine/benchmarks/__main__.py)<br>[potpie/context-engine/adapters/inbound/mcp/server.py](../../../../sources/potpie-ai__potpie/potpie/context-engine/adapters/inbound/mcp/server.py)<br>[potpie/context-engine/adapters/inbound/http/__main__.py](../../../../sources/potpie-ai__potpie/potpie/context-engine/adapters/inbound/http/__main__.py)<br>[legacy/seed/__main__.py](../../../../sources/potpie-ai__potpie/legacy/seed/__main__.py)<br>[legacy/app/main.py](../../../../sources/potpie-ai__potpie/legacy/app/main.py) |
| agentRuntime | 967 | [potpie/sandbox/docker-compose.yml](../../../../sources/potpie-ai__potpie/potpie/sandbox/docker-compose.yml)<br>[potpie/sandbox/pyproject.toml](../../../../sources/potpie-ai__potpie/potpie/sandbox/pyproject.toml)<br>[potpie/sandbox/uv.lock](../../../../sources/potpie-ai__potpie/potpie/sandbox/uv.lock)<br>[potpie/sandbox/tests/unit/test_daytona_provider.py](../../../../sources/potpie-ai__potpie/potpie/sandbox/tests/unit/test_daytona_provider.py)<br>[potpie/sandbox/tests/unit/test_eviction_policy.py](../../../../sources/potpie-ai__potpie/potpie/sandbox/tests/unit/test_eviction_policy.py)<br>[potpie/sandbox/tests/unit/test_git_platform.py](../../../../sources/potpie-ai__potpie/potpie/sandbox/tests/unit/test_git_platform.py)<br>[potpie/sandbox/tests/unit/test_local_auth.py](../../../../sources/potpie-ai__potpie/potpie/sandbox/tests/unit/test_local_auth.py)<br>[potpie/sandbox/tests/unit/test_local_repo_cache.py](../../../../sources/potpie-ai__potpie/potpie/sandbox/tests/unit/test_local_repo_cache.py) |
| mcp | 5 | [potpie/context-engine/tests/unit/test_mcp_project_access.py](../../../../sources/potpie-ai__potpie/potpie/context-engine/tests/unit/test_mcp_project_access.py)<br>[potpie/context-engine/adapters/inbound/mcp/__init__.py](../../../../sources/potpie-ai__potpie/potpie/context-engine/adapters/inbound/mcp/__init__.py)<br>[potpie/context-engine/adapters/inbound/mcp/project_access.py](../../../../sources/potpie-ai__potpie/potpie/context-engine/adapters/inbound/mcp/project_access.py)<br>[potpie/context-engine/adapters/inbound/mcp/server.py](../../../../sources/potpie-ai__potpie/potpie/context-engine/adapters/inbound/mcp/server.py)<br>[potpie/context-engine/adapters/inbound/mcp/tools/__init__.py](../../../../sources/potpie-ai__potpie/potpie/context-engine/adapters/inbound/mcp/tools/__init__.py) |
| retrieval | 128 | [potpie/sandbox/sandbox/adapters/outbound/memory/__init__.py](../../../../sources/potpie-ai__potpie/potpie/sandbox/sandbox/adapters/outbound/memory/__init__.py)<br>[potpie/sandbox/sandbox/adapters/outbound/memory/eviction.py](../../../../sources/potpie-ai__potpie/potpie/sandbox/sandbox/adapters/outbound/memory/eviction.py)<br>[potpie/sandbox/sandbox/adapters/outbound/memory/locks.py](../../../../sources/potpie-ai__potpie/potpie/sandbox/sandbox/adapters/outbound/memory/locks.py)<br>[potpie/sandbox/sandbox/adapters/outbound/memory/store.py](../../../../sources/potpie-ai__potpie/potpie/sandbox/sandbox/adapters/outbound/memory/store.py)<br>[potpie/parsing/tests/test_py_graph.py](../../../../sources/potpie-ai__potpie/potpie/parsing/tests/test_py_graph.py)<br>[potpie/parsing/src/code_index.rs](../../../../sources/potpie-ai__potpie/potpie/parsing/src/code_index.rs)<br>[potpie/parsing/src/fff_search/content_index.rs](../../../../sources/potpie-ai__potpie/potpie/parsing/src/fff_search/content_index.rs)<br>[potpie/parsing/src/fff_search/file_index.rs](../../../../sources/potpie-ai__potpie/potpie/parsing/src/fff_search/file_index.rs) |
| spec | 11 | [potpie/context-engine/tests/unit/test_openapi_spec_scanner.py](../../../../sources/potpie-ai__potpie/potpie/context-engine/tests/unit/test_openapi_spec_scanner.py)<br>[potpie/context-engine/adapters/outbound/scanners/openapi_spec.py](../../../../sources/potpie-ai__potpie/potpie/context-engine/adapters/outbound/scanners/openapi_spec.py)<br>[legacy/app/modules/intelligence/tools/requirement_verification_tool.py](../../../../sources/potpie-ai__potpie/legacy/app/modules/intelligence/tools/requirement_verification_tool.py)<br>[legacy/app/modules/intelligence/agents/chat_agents/system_agents/low_level_design_agent.py](../../../../sources/potpie-ai__potpie/legacy/app/modules/intelligence/agents/chat_agents/system_agents/low_level_design_agent.py)<br>[legacy/app/modules/intelligence/agents/chat_agents/system_agents/specgen/architecture_agent.py](../../../../sources/potpie-ai__potpie/legacy/app/modules/intelligence/agents/chat_agents/system_agents/specgen/architecture_agent.py)<br>[legacy/app/modules/intelligence/agents/chat_agents/system_agents/specgen/requirements_agent.py](../../../../sources/potpie-ai__potpie/legacy/app/modules/intelligence/agents/chat_agents/system_agents/specgen/requirements_agent.py)<br>[legacy/app/modules/intelligence/agents/chat_agents/system_agents/specgen/spec_gen_agent.py](../../../../sources/potpie-ai__potpie/legacy/app/modules/intelligence/agents/chat_agents/system_agents/specgen/spec_gen_agent.py)<br>[legacy/app/modules/intelligence/agents/chat_agents/system_agents/specgen/spec_models.py](../../../../sources/potpie-ai__potpie/legacy/app/modules/intelligence/agents/chat_agents/system_agents/specgen/spec_models.py) |
| eval | 367 | [potpie/sandbox/tests/unit/test_daytona_provider.py](../../../../sources/potpie-ai__potpie/potpie/sandbox/tests/unit/test_daytona_provider.py)<br>[potpie/sandbox/tests/unit/test_eviction_policy.py](../../../../sources/potpie-ai__potpie/potpie/sandbox/tests/unit/test_eviction_policy.py)<br>[potpie/sandbox/tests/unit/test_git_platform.py](../../../../sources/potpie-ai__potpie/potpie/sandbox/tests/unit/test_git_platform.py)<br>[potpie/sandbox/tests/unit/test_local_auth.py](../../../../sources/potpie-ai__potpie/potpie/sandbox/tests/unit/test_local_auth.py)<br>[potpie/sandbox/tests/unit/test_local_repo_cache.py](../../../../sources/potpie-ai__potpie/potpie/sandbox/tests/unit/test_local_repo_cache.py)<br>[potpie/sandbox/tests/unit/test_parser_runner.py](../../../../sources/potpie-ai__potpie/potpie/sandbox/tests/unit/test_parser_runner.py)<br>[potpie/sandbox/tests/unit/test_repo_cache_store.py](../../../../sources/potpie-ai__potpie/potpie/sandbox/tests/unit/test_repo_cache_store.py)<br>[potpie/sandbox/tests/unit/test_sandbox_client.py](../../../../sources/potpie-ai__potpie/potpie/sandbox/tests/unit/test_sandbox_client.py) |
| security | 189 | [potpie/sandbox/docker-compose.yml](../../../../sources/potpie-ai__potpie/potpie/sandbox/docker-compose.yml)<br>[potpie/sandbox/pyproject.toml](../../../../sources/potpie-ai__potpie/potpie/sandbox/pyproject.toml)<br>[potpie/sandbox/uv.lock](../../../../sources/potpie-ai__potpie/potpie/sandbox/uv.lock)<br>[potpie/sandbox/tests/unit/test_daytona_provider.py](../../../../sources/potpie-ai__potpie/potpie/sandbox/tests/unit/test_daytona_provider.py)<br>[potpie/sandbox/tests/unit/test_eviction_policy.py](../../../../sources/potpie-ai__potpie/potpie/sandbox/tests/unit/test_eviction_policy.py)<br>[potpie/sandbox/tests/unit/test_git_platform.py](../../../../sources/potpie-ai__potpie/potpie/sandbox/tests/unit/test_git_platform.py)<br>[potpie/sandbox/tests/unit/test_local_auth.py](../../../../sources/potpie-ai__potpie/potpie/sandbox/tests/unit/test_local_auth.py)<br>[potpie/sandbox/tests/unit/test_local_repo_cache.py](../../../../sources/potpie-ai__potpie/potpie/sandbox/tests/unit/test_local_repo_cache.py) |
| ci | 7 | [legacy/deployment/stage/mom-api/Jenkinsfile_API](../../../../sources/potpie-ai__potpie/legacy/deployment/stage/mom-api/Jenkinsfile_API)<br>[legacy/deployment/stage/convo-server/Jenkinsfile_Convo](../../../../sources/potpie-ai__potpie/legacy/deployment/stage/convo-server/Jenkinsfile_Convo)<br>[legacy/deployment/stage/celery/Jenkinsfile_CELERY](../../../../sources/potpie-ai__potpie/legacy/deployment/stage/celery/Jenkinsfile_CELERY)<br>[legacy/deployment/prod/mom-api/Jenkinsfile_API_Prod](../../../../sources/potpie-ai__potpie/legacy/deployment/prod/mom-api/Jenkinsfile_API_Prod)<br>[legacy/deployment/prod/convo-server/Jenkinsfile_Convo_Prod](../../../../sources/potpie-ai__potpie/legacy/deployment/prod/convo-server/Jenkinsfile_Convo_Prod)<br>[legacy/deployment/prod/celery/Jenkinsfile_CELERY_Prod](../../../../sources/potpie-ai__potpie/legacy/deployment/prod/celery/Jenkinsfile_CELERY_Prod)<br>[.github/workflows/test.yml](../../../../sources/potpie-ai__potpie/.github/workflows/test.yml) |
| container | 30 | [potpie/sandbox/docker-compose.yml](../../../../sources/potpie-ai__potpie/potpie/sandbox/docker-compose.yml)<br>[potpie/sandbox/scripts/daytona-overrides/docker-compose.override.yaml](../../../../sources/potpie-ai__potpie/potpie/sandbox/scripts/daytona-overrides/docker-compose.override.yaml)<br>[potpie/sandbox/images/agent-sandbox/Dockerfile](../../../../sources/potpie-ai__potpie/potpie/sandbox/images/agent-sandbox/Dockerfile)<br>[potpie/sandbox/docker/Dockerfile.test](../../../../sources/potpie-ai__potpie/potpie/sandbox/docker/Dockerfile.test)<br>[legacy/compose.yaml](../../../../sources/potpie-ai__potpie/legacy/compose.yaml)<br>[legacy/dockerfile](../../../../sources/potpie-ai__potpie/legacy/dockerfile)<br>[legacy/deployment/stage/mom-api/api.Dockerfile](../../../../sources/potpie-ai__potpie/legacy/deployment/stage/mom-api/api.Dockerfile)<br>[legacy/deployment/stage/mom-api/Jenkinsfile_API](../../../../sources/potpie-ai__potpie/legacy/deployment/stage/mom-api/Jenkinsfile_API) |
| instruction | 2 | [potpie/context-engine/adapters/inbound/cli/templates/claude_bundle/CLAUDE.md](../../../../sources/potpie-ai__potpie/potpie/context-engine/adapters/inbound/cli/templates/claude_bundle/CLAUDE.md)<br>[potpie/context-engine/adapters/inbound/cli/templates/agent_bundle/AGENTS.md](../../../../sources/potpie-ai__potpie/potpie/context-engine/adapters/inbound/cli/templates/agent_bundle/AGENTS.md) |
| docs | 30 | [README.md](../../../../sources/potpie-ai__potpie/README.md)<br>[potpie/parsing/README.md](../../../../sources/potpie-ai__potpie/potpie/parsing/README.md)<br>[potpie/integrations/README.md](../../../../sources/potpie-ai__potpie/potpie/integrations/README.md)<br>[potpie/context-engine/benchmarks/README.md](../../../../sources/potpie-ai__potpie/potpie/context-engine/benchmarks/README.md)<br>[potpie/context-engine/benchmarks/fixtures/README.md](../../../../sources/potpie-ai__potpie/potpie/context-engine/benchmarks/fixtures/README.md)<br>[potpie/context-engine/adapters/inbound/cli/README.md](../../../../sources/potpie-ai__potpie/potpie/context-engine/adapters/inbound/cli/README.md)<br>[legacy/README.md](../../../../sources/potpie-ai__potpie/legacy/README.md)<br>[legacy/tests/README.md](../../../../sources/potpie-ai__potpie/legacy/tests/README.md) |
| config | 15 | [pyproject.toml](../../../../sources/potpie-ai__potpie/pyproject.toml)<br>[uv.lock](../../../../sources/potpie-ai__potpie/uv.lock)<br>[potpie/sandbox/pyproject.toml](../../../../sources/potpie-ai__potpie/potpie/sandbox/pyproject.toml)<br>[potpie/sandbox/uv.lock](../../../../sources/potpie-ai__potpie/potpie/sandbox/uv.lock)<br>[potpie/parsing/Cargo.lock](../../../../sources/potpie-ai__potpie/potpie/parsing/Cargo.lock)<br>[potpie/parsing/Cargo.toml](../../../../sources/potpie-ai__potpie/potpie/parsing/Cargo.toml)<br>[potpie/parsing/pyproject.toml](../../../../sources/potpie-ai__potpie/potpie/parsing/pyproject.toml)<br>[potpie/parsing/uv.lock](../../../../sources/potpie-ai__potpie/potpie/parsing/uv.lock) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 367 | [potpie/sandbox/tests/unit/test_daytona_provider.py](../../../../sources/potpie-ai__potpie/potpie/sandbox/tests/unit/test_daytona_provider.py)<br>[potpie/sandbox/tests/unit/test_eviction_policy.py](../../../../sources/potpie-ai__potpie/potpie/sandbox/tests/unit/test_eviction_policy.py)<br>[potpie/sandbox/tests/unit/test_git_platform.py](../../../../sources/potpie-ai__potpie/potpie/sandbox/tests/unit/test_git_platform.py)<br>[potpie/sandbox/tests/unit/test_local_auth.py](../../../../sources/potpie-ai__potpie/potpie/sandbox/tests/unit/test_local_auth.py)<br>[potpie/sandbox/tests/unit/test_local_repo_cache.py](../../../../sources/potpie-ai__potpie/potpie/sandbox/tests/unit/test_local_repo_cache.py)<br>[potpie/sandbox/tests/unit/test_parser_runner.py](../../../../sources/potpie-ai__potpie/potpie/sandbox/tests/unit/test_parser_runner.py) |
| CI workflows | 7 | [legacy/deployment/stage/mom-api/Jenkinsfile_API](../../../../sources/potpie-ai__potpie/legacy/deployment/stage/mom-api/Jenkinsfile_API)<br>[legacy/deployment/stage/convo-server/Jenkinsfile_Convo](../../../../sources/potpie-ai__potpie/legacy/deployment/stage/convo-server/Jenkinsfile_Convo)<br>[legacy/deployment/stage/celery/Jenkinsfile_CELERY](../../../../sources/potpie-ai__potpie/legacy/deployment/stage/celery/Jenkinsfile_CELERY)<br>[legacy/deployment/prod/mom-api/Jenkinsfile_API_Prod](../../../../sources/potpie-ai__potpie/legacy/deployment/prod/mom-api/Jenkinsfile_API_Prod)<br>[legacy/deployment/prod/convo-server/Jenkinsfile_Convo_Prod](../../../../sources/potpie-ai__potpie/legacy/deployment/prod/convo-server/Jenkinsfile_Convo_Prod)<br>[legacy/deployment/prod/celery/Jenkinsfile_CELERY_Prod](../../../../sources/potpie-ai__potpie/legacy/deployment/prod/celery/Jenkinsfile_CELERY_Prod) |
| Containers / deploy | 30 | [potpie/sandbox/docker-compose.yml](../../../../sources/potpie-ai__potpie/potpie/sandbox/docker-compose.yml)<br>[potpie/sandbox/scripts/daytona-overrides/docker-compose.override.yaml](../../../../sources/potpie-ai__potpie/potpie/sandbox/scripts/daytona-overrides/docker-compose.override.yaml)<br>[potpie/sandbox/images/agent-sandbox/Dockerfile](../../../../sources/potpie-ai__potpie/potpie/sandbox/images/agent-sandbox/Dockerfile)<br>[potpie/sandbox/docker/Dockerfile.test](../../../../sources/potpie-ai__potpie/potpie/sandbox/docker/Dockerfile.test)<br>[legacy/compose.yaml](../../../../sources/potpie-ai__potpie/legacy/compose.yaml)<br>[legacy/dockerfile](../../../../sources/potpie-ai__potpie/legacy/dockerfile) |
| Security / policy | 189 | [potpie/sandbox/docker-compose.yml](../../../../sources/potpie-ai__potpie/potpie/sandbox/docker-compose.yml)<br>[potpie/sandbox/pyproject.toml](../../../../sources/potpie-ai__potpie/potpie/sandbox/pyproject.toml)<br>[potpie/sandbox/uv.lock](../../../../sources/potpie-ai__potpie/potpie/sandbox/uv.lock)<br>[potpie/sandbox/tests/unit/test_daytona_provider.py](../../../../sources/potpie-ai__potpie/potpie/sandbox/tests/unit/test_daytona_provider.py)<br>[potpie/sandbox/tests/unit/test_eviction_policy.py](../../../../sources/potpie-ai__potpie/potpie/sandbox/tests/unit/test_eviction_policy.py)<br>[potpie/sandbox/tests/unit/test_git_platform.py](../../../../sources/potpie-ai__potpie/potpie/sandbox/tests/unit/test_git_platform.py) |
| Agent instructions | 2 | [potpie/context-engine/adapters/inbound/cli/templates/claude_bundle/CLAUDE.md](../../../../sources/potpie-ai__potpie/potpie/context-engine/adapters/inbound/cli/templates/claude_bundle/CLAUDE.md)<br>[potpie/context-engine/adapters/inbound/cli/templates/agent_bundle/AGENTS.md](../../../../sources/potpie-ai__potpie/potpie/context-engine/adapters/inbound/cli/templates/agent_bundle/AGENTS.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `potpie/context-engine/tests/unit/test_mcp_project_access.py`, `potpie/context-engine/adapters/inbound/mcp/__init__.py`, `potpie/context-engine/adapters/inbound/mcp/project_access.py`.
2. Trace execution through entrypoints: `potpie/sandbox/sandbox/parser_runner/__main__.py`, `potpie/context-engine/host/daemon_runtime/__main__.py`, `potpie/context-engine/benchmarks/__main__.py`.
3. Map agent/tool runtime through: `potpie/sandbox/docker-compose.yml`, `potpie/sandbox/pyproject.toml`, `potpie/sandbox/uv.lock`.
4. Inspect retrieval/memory/indexing through: `potpie/sandbox/sandbox/adapters/outbound/memory/__init__.py`, `potpie/sandbox/sandbox/adapters/outbound/memory/eviction.py`, `potpie/sandbox/sandbox/adapters/outbound/memory/locks.py`.
5. Verify behavior through test/eval files: `potpie/sandbox/tests/unit/test_daytona_provider.py`, `potpie/sandbox/tests/unit/test_eviction_policy.py`, `potpie/sandbox/tests/unit/test_git_platform.py`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Local clone structure analysis 1494 files, 274 directories.. 핵심 구조 신호는 Python, pyproject.toml, README.md, LICENSE, openai, fastapi이며, deep-source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

mixed 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 major metadata risk not obvious입니다.
