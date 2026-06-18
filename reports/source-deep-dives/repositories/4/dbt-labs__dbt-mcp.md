# dbt-labs/dbt-mcp Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

A MCP (Model Context Protocol) server for interacting with dbt.

## 요약

- 조사 단위: `sources/dbt-labs__dbt-mcp` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 507 files, 105 directories, depth score 129, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=tests/unit/mcp_server_metadata/__init__.py, tests/unit/mcp_server_metadata/test_tools.py, tests/unit/mcp/__init__.py이고, 의존성 단서는 openai, mcp, fastapi, pydantic, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | dbt-labs/dbt-mcp |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 581 |
| Forks | 124 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/dbt-labs__dbt-mcp](../../../../sources/dbt-labs__dbt-mcp) |
| Existing report | [reports/global-trending/repositories/dbt-labs__dbt-mcp.md](../../../global-trending/repositories/dbt-labs__dbt-mcp.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 507 / 105 |
| Max observed depth | 6 |
| Top directories | .changes, .claude, .github, .task, docs, evals, examples, scripts, src, tests, ui |
| Top extensions | .py: 236, .md: 181, (none): 22, .gql: 11, .yml: 10, .toml: 9, .json: 7, .lock: 6, .yaml: 6, .ts: 5, .css: 2, .example: 2 |
| Source patterns | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 73 |
| tests | validation surface | 62 |
| examples/aws_strands_agent | examples workspace | 8 |
| examples/ai_sdk_agent | examples workspace | 5 |
| examples/crewai_agent | examples workspace | 4 |
| examples/langgraph_agent | examples workspace | 4 |
| examples/openai_agent | examples workspace | 4 |
| examples/openai_responses | examples workspace | 4 |
| examples/remote_mcp | examples workspace | 4 |
| docs | documentation surface | 3 |
| examples/google_adk_agent | examples workspace | 3 |
| examples/pydantic_ai_agent | examples workspace | 3 |
| examples/ag2_agent | examples workspace | 2 |
| .github | ci surface | 1 |
| evals | top-level component | 1 |
| examples | top-level component | 1 |
| scripts | top-level component | 1 |
| ui | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | pyproject.toml | dbt-mcp | dbt-mcp |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai |
| agentProtocols | mcp |
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
| mcp | [tests/unit/mcp_server_metadata/__init__.py](../../../../sources/dbt-labs__dbt-mcp/tests/unit/mcp_server_metadata/__init__.py) | mcp signal |
| mcp | [tests/unit/mcp_server_metadata/test_tools.py](../../../../sources/dbt-labs__dbt-mcp/tests/unit/mcp_server_metadata/test_tools.py) | mcp signal |
| mcp | [tests/unit/mcp/__init__.py](../../../../sources/dbt-labs__dbt-mcp/tests/unit/mcp/__init__.py) | mcp signal |
| mcp | [tests/unit/mcp/test_dispatcher.py](../../../../sources/dbt-labs__dbt-mcp/tests/unit/mcp/test_dispatcher.py) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/dbt-labs__dbt-mcp/AGENTS.md) | agentRuntime signal |
| agentRuntime | [tests/unit/tools/test_definitions.py](../../../../sources/dbt-labs__dbt-mcp/tests/unit/tools/test_definitions.py) | agentRuntime signal |
| agentRuntime | [tests/unit/tools/test_disable_tools.py](../../../../sources/dbt-labs__dbt-mcp/tests/unit/tools/test_disable_tools.py) | agentRuntime signal |
| agentRuntime | [tests/unit/tools/test_injection.py](../../../../sources/dbt-labs__dbt-mcp/tests/unit/tools/test_injection.py) | agentRuntime signal |
| entrypoints | [ui/src/App.css](../../../../sources/dbt-labs__dbt-mcp/ui/src/App.css) | entrypoints signal |
| entrypoints | [ui/src/App.tsx](../../../../sources/dbt-labs__dbt-mcp/ui/src/App.tsx) | entrypoints signal |
| entrypoints | [ui/src/index.css](../../../../sources/dbt-labs__dbt-mcp/ui/src/index.css) | entrypoints signal |
| entrypoints | [ui/src/main.tsx](../../../../sources/dbt-labs__dbt-mcp/ui/src/main.tsx) | entrypoints signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 15 | [ui/src/App.css](../../../../sources/dbt-labs__dbt-mcp/ui/src/App.css)<br>[ui/src/App.tsx](../../../../sources/dbt-labs__dbt-mcp/ui/src/App.tsx)<br>[ui/src/index.css](../../../../sources/dbt-labs__dbt-mcp/ui/src/index.css)<br>[ui/src/main.tsx](../../../../sources/dbt-labs__dbt-mcp/ui/src/main.tsx)<br>[src/dbt_mcp/main.py](../../../../sources/dbt-labs__dbt-mcp/src/dbt_mcp/main.py)<br>[src/dbt_mcp/mcp/server.py](../../../../sources/dbt-labs__dbt-mcp/src/dbt_mcp/mcp/server.py)<br>[src/client/main.py](../../../../sources/dbt-labs__dbt-mcp/src/client/main.py)<br>[examples/remote_mcp/main.py](../../../../sources/dbt-labs__dbt-mcp/examples/remote_mcp/main.py) |
| agentRuntime | 37 | [AGENTS.md](../../../../sources/dbt-labs__dbt-mcp/AGENTS.md)<br>[tests/unit/tools/test_definitions.py](../../../../sources/dbt-labs__dbt-mcp/tests/unit/tools/test_definitions.py)<br>[tests/unit/tools/test_disable_tools.py](../../../../sources/dbt-labs__dbt-mcp/tests/unit/tools/test_disable_tools.py)<br>[tests/unit/tools/test_injection.py](../../../../sources/dbt-labs__dbt-mcp/tests/unit/tools/test_injection.py)<br>[tests/unit/tools/test_precedence.py](../../../../sources/dbt-labs__dbt-mcp/tests/unit/tools/test_precedence.py)<br>[tests/unit/tools/test_product_docs.py](../../../../sources/dbt-labs__dbt-mcp/tests/unit/tools/test_product_docs.py)<br>[tests/unit/tools/test_tool_names.py](../../../../sources/dbt-labs__dbt-mcp/tests/unit/tools/test_tool_names.py)<br>[tests/unit/tools/test_toolsets.py](../../../../sources/dbt-labs__dbt-mcp/tests/unit/tools/test_toolsets.py) |
| mcp | 217 | [tests/unit/mcp_server_metadata/__init__.py](../../../../sources/dbt-labs__dbt-mcp/tests/unit/mcp_server_metadata/__init__.py)<br>[tests/unit/mcp_server_metadata/test_tools.py](../../../../sources/dbt-labs__dbt-mcp/tests/unit/mcp_server_metadata/test_tools.py)<br>[tests/unit/mcp/__init__.py](../../../../sources/dbt-labs__dbt-mcp/tests/unit/mcp/__init__.py)<br>[tests/unit/mcp/test_dispatcher.py](../../../../sources/dbt-labs__dbt-mcp/tests/unit/mcp/test_dispatcher.py)<br>[tests/unit/config/test_mcp_lock_symlink.py](../../../../sources/dbt-labs__dbt-mcp/tests/unit/config/test_mcp_lock_symlink.py)<br>[tests/integration/remote_mcp/test_remote_mcp.py](../../../../sources/dbt-labs__dbt-mcp/tests/integration/remote_mcp/test_remote_mcp.py)<br>[src/remote_mcp/__init__.py](../../../../sources/dbt-labs__dbt-mcp/src/remote_mcp/__init__.py)<br>[src/remote_mcp/session.py](../../../../sources/dbt-labs__dbt-mcp/src/remote_mcp/session.py) |
| retrieval | 3 | [ui/index.html](../../../../sources/dbt-labs__dbt-mcp/ui/index.html)<br>[ui/src/index.css](../../../../sources/dbt-labs__dbt-mcp/ui/src/index.css)<br>[examples/ai_sdk_agent/src/index.ts](../../../../sources/dbt-labs__dbt-mcp/examples/ai_sdk_agent/src/index.ts) |
| spec | 1 | [examples/aws_strands_agent/requirements.txt](../../../../sources/dbt-labs__dbt-mcp/examples/aws_strands_agent/requirements.txt) |
| eval | 101 | [tests/__init__.py](../../../../sources/dbt-labs__dbt-mcp/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/dbt-labs__dbt-mcp/tests/conftest.py)<br>[tests/env_vars.py](../../../../sources/dbt-labs__dbt-mcp/tests/env_vars.py)<br>[tests/unit/__init__.py](../../../../sources/dbt-labs__dbt-mcp/tests/unit/__init__.py)<br>[tests/unit/tracking/test_tracking.py](../../../../sources/dbt-labs__dbt-mcp/tests/unit/tracking/test_tracking.py)<br>[tests/unit/tools/test_definitions.py](../../../../sources/dbt-labs__dbt-mcp/tests/unit/tools/test_definitions.py)<br>[tests/unit/tools/test_disable_tools.py](../../../../sources/dbt-labs__dbt-mcp/tests/unit/tools/test_disable_tools.py)<br>[tests/unit/tools/test_injection.py](../../../../sources/dbt-labs__dbt-mcp/tests/unit/tools/test_injection.py) |
| security | 19 | [tests/unit/oauth/test_credentials_provider.py](../../../../sources/dbt-labs__dbt-mcp/tests/unit/oauth/test_credentials_provider.py)<br>[tests/unit/oauth/test_dbt_platform.py](../../../../sources/dbt-labs__dbt-mcp/tests/unit/oauth/test_dbt_platform.py)<br>[tests/unit/oauth/test_fastapi_app_pagination.py](../../../../sources/dbt-labs__dbt-mcp/tests/unit/oauth/test_fastapi_app_pagination.py)<br>[tests/unit/oauth/test_refresh.py](../../../../sources/dbt-labs__dbt-mcp/tests/unit/oauth/test_refresh.py)<br>[tests/unit/oauth/test_token_provider.py](../../../../sources/dbt-labs__dbt-mcp/tests/unit/oauth/test_token_provider.py)<br>[tests/unit/oauth/test_token_refresh_at_startup.py](../../../../sources/dbt-labs__dbt-mcp/tests/unit/oauth/test_token_refresh_at_startup.py)<br>[tests/unit/oauth/test_token.py](../../../../sources/dbt-labs__dbt-mcp/tests/unit/oauth/test_token.py)<br>[tests/unit/oauth/test_validate_settings_has_token.py](../../../../sources/dbt-labs__dbt-mcp/tests/unit/oauth/test_validate_settings_has_token.py) |
| ci | 6 | [.github/workflows/changelog-check.yml](../../../../sources/dbt-labs__dbt-mcp/.github/workflows/changelog-check.yml)<br>[.github/workflows/codeowners-check.yml](../../../../sources/dbt-labs__dbt-mcp/.github/workflows/codeowners-check.yml)<br>[.github/workflows/create-release-pr.yml](../../../../sources/dbt-labs__dbt-mcp/.github/workflows/create-release-pr.yml)<br>[.github/workflows/integration-tests-pr.yaml](../../../../sources/dbt-labs__dbt-mcp/.github/workflows/integration-tests-pr.yaml)<br>[.github/workflows/release.yml](../../../../sources/dbt-labs__dbt-mcp/.github/workflows/release.yml)<br>[.github/workflows/run-checks-pr.yaml](../../../../sources/dbt-labs__dbt-mcp/.github/workflows/run-checks-pr.yaml) |
| container | 1 | [Dockerfile](../../../../sources/dbt-labs__dbt-mcp/Dockerfile) |
| instruction | 2 | [AGENTS.md](../../../../sources/dbt-labs__dbt-mcp/AGENTS.md)<br>[CLAUDE.md](../../../../sources/dbt-labs__dbt-mcp/CLAUDE.md) |
| docs | 15 | [README.md](../../../../sources/dbt-labs__dbt-mcp/README.md)<br>[ui/README.md](../../../../sources/dbt-labs__dbt-mcp/ui/README.md)<br>[src/dbt_mcp/tools/readme_mappings.py](../../../../sources/dbt-labs__dbt-mcp/src/dbt_mcp/tools/readme_mappings.py)<br>[examples/remote_mcp/README.md](../../../../sources/dbt-labs__dbt-mcp/examples/remote_mcp/README.md)<br>[examples/pydantic_ai_agent/README.md](../../../../sources/dbt-labs__dbt-mcp/examples/pydantic_ai_agent/README.md)<br>[examples/openai_responses/README.md](../../../../sources/dbt-labs__dbt-mcp/examples/openai_responses/README.md)<br>[examples/openai_agent/README.md](../../../../sources/dbt-labs__dbt-mcp/examples/openai_agent/README.md)<br>[examples/langgraph_agent/README.md](../../../../sources/dbt-labs__dbt-mcp/examples/langgraph_agent/README.md) |
| config | 21 | [pyproject.toml](../../../../sources/dbt-labs__dbt-mcp/pyproject.toml)<br>[uv.lock](../../../../sources/dbt-labs__dbt-mcp/uv.lock)<br>[ui/package.json](../../../../sources/dbt-labs__dbt-mcp/ui/package.json)<br>[ui/pnpm-workspace.yaml](../../../../sources/dbt-labs__dbt-mcp/ui/pnpm-workspace.yaml)<br>[ui/tsconfig.json](../../../../sources/dbt-labs__dbt-mcp/ui/tsconfig.json)<br>[examples/remote_mcp/pyproject.toml](../../../../sources/dbt-labs__dbt-mcp/examples/remote_mcp/pyproject.toml)<br>[examples/remote_mcp/uv.lock](../../../../sources/dbt-labs__dbt-mcp/examples/remote_mcp/uv.lock)<br>[examples/pydantic_ai_agent/pyproject.toml](../../../../sources/dbt-labs__dbt-mcp/examples/pydantic_ai_agent/pyproject.toml) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 101 | [tests/__init__.py](../../../../sources/dbt-labs__dbt-mcp/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/dbt-labs__dbt-mcp/tests/conftest.py)<br>[tests/env_vars.py](../../../../sources/dbt-labs__dbt-mcp/tests/env_vars.py)<br>[tests/unit/__init__.py](../../../../sources/dbt-labs__dbt-mcp/tests/unit/__init__.py)<br>[tests/unit/tracking/test_tracking.py](../../../../sources/dbt-labs__dbt-mcp/tests/unit/tracking/test_tracking.py)<br>[tests/unit/tools/test_definitions.py](../../../../sources/dbt-labs__dbt-mcp/tests/unit/tools/test_definitions.py) |
| CI workflows | 6 | [.github/workflows/changelog-check.yml](../../../../sources/dbt-labs__dbt-mcp/.github/workflows/changelog-check.yml)<br>[.github/workflows/codeowners-check.yml](../../../../sources/dbt-labs__dbt-mcp/.github/workflows/codeowners-check.yml)<br>[.github/workflows/create-release-pr.yml](../../../../sources/dbt-labs__dbt-mcp/.github/workflows/create-release-pr.yml)<br>[.github/workflows/integration-tests-pr.yaml](../../../../sources/dbt-labs__dbt-mcp/.github/workflows/integration-tests-pr.yaml)<br>[.github/workflows/release.yml](../../../../sources/dbt-labs__dbt-mcp/.github/workflows/release.yml)<br>[.github/workflows/run-checks-pr.yaml](../../../../sources/dbt-labs__dbt-mcp/.github/workflows/run-checks-pr.yaml) |
| Containers / deploy | 1 | [Dockerfile](../../../../sources/dbt-labs__dbt-mcp/Dockerfile) |
| Security / policy | 19 | [tests/unit/oauth/test_credentials_provider.py](../../../../sources/dbt-labs__dbt-mcp/tests/unit/oauth/test_credentials_provider.py)<br>[tests/unit/oauth/test_dbt_platform.py](../../../../sources/dbt-labs__dbt-mcp/tests/unit/oauth/test_dbt_platform.py)<br>[tests/unit/oauth/test_fastapi_app_pagination.py](../../../../sources/dbt-labs__dbt-mcp/tests/unit/oauth/test_fastapi_app_pagination.py)<br>[tests/unit/oauth/test_refresh.py](../../../../sources/dbt-labs__dbt-mcp/tests/unit/oauth/test_refresh.py)<br>[tests/unit/oauth/test_token_provider.py](../../../../sources/dbt-labs__dbt-mcp/tests/unit/oauth/test_token_provider.py)<br>[tests/unit/oauth/test_token_refresh_at_startup.py](../../../../sources/dbt-labs__dbt-mcp/tests/unit/oauth/test_token_refresh_at_startup.py) |
| Agent instructions | 2 | [AGENTS.md](../../../../sources/dbt-labs__dbt-mcp/AGENTS.md)<br>[CLAUDE.md](../../../../sources/dbt-labs__dbt-mcp/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `tests/unit/mcp_server_metadata/__init__.py`, `tests/unit/mcp_server_metadata/test_tools.py`, `tests/unit/mcp/__init__.py`.
2. Trace execution through entrypoints: `ui/src/App.css`, `ui/src/App.tsx`, `ui/src/index.css`.
3. Map agent/tool runtime through: `AGENTS.md`, `tests/unit/tools/test_definitions.py`, `tests/unit/tools/test_disable_tools.py`.
4. Inspect retrieval/memory/indexing through: `ui/index.html`, `ui/src/index.css`, `examples/ai_sdk_agent/src/index.ts`.
5. Verify behavior through test/eval files: `tests/__init__.py`, `tests/conftest.py`, `tests/env_vars.py`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 A MCP Model Context Protocol server for interacting with dbt.. 핵심 구조 신호는 Python, pyproject.toml, Dockerfile, README.md, AGENTS.md, CLAUDE.md이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
