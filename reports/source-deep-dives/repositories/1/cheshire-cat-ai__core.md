# cheshire-cat-ai/core Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

AI agent microservice

## 요약

- 조사 단위: `sources/cheshire-cat-ai__core` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 133 files, 49 directories, depth score 97, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=tests/agents/test_agent_form.py, tests/agents/test_agent_tools.py, src/cat/context.py이고, 의존성 단서는 openai, mcp, fastapi, pydantic, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | cheshire-cat-ai/core |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 3045 |
| Forks | 405 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/cheshire-cat-ai__core](../../../../sources/cheshire-cat-ai__core) |
| Existing report | [reports/global-trending/repositories/cheshire-cat-ai__core.md](../../../global-trending/repositories/cheshire-cat-ai__core.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 133 / 49 |
| Max observed depth | 7 |
| Top directories | .tmp_deactivated_workflows_github, readme, src, tests, tests_giga |
| Top extensions | .py: 99, .md: 13, .txt: 6, .json: 4, (none): 3, .yml: 2, .html: 1, .jpeg: 1, .lock: 1, .pdf: 1, .svg: 1, .toml: 1 |
| Source patterns | cli-first, api/server, agent/tool runtime, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 44 |
| src | source boundary | 28 |
| readme | top-level component | 1 |
| tests_giga | validation surface | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | pyproject.toml | ccat | ccat |


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
| agentRuntime | [tests/agents/test_agent_form.py](../../../../sources/cheshire-cat-ai__core/tests/agents/test_agent_form.py) | agentRuntime signal |
| agentRuntime | [tests/agents/test_agent_tools.py](../../../../sources/cheshire-cat-ai__core/tests/agents/test_agent_tools.py) | agentRuntime signal |
| agentRuntime | [src/cat/context.py](../../../../sources/cheshire-cat-ai__core/src/cat/context.py) | agentRuntime signal |
| agentRuntime | [src/cat/services/agents/base.py](../../../../sources/cheshire-cat-ai__core/src/cat/services/agents/base.py) | agentRuntime signal |
| entrypoints | [src/cat/main.py](../../../../sources/cheshire-cat-ai__core/src/cat/main.py) | entrypoints signal |
| entrypoints | [src/cat/protocols/model_context/server.py](../../../../sources/cheshire-cat-ai__core/src/cat/protocols/model_context/server.py) | entrypoints signal |
| config | [pyproject.toml](../../../../sources/cheshire-cat-ai__core/pyproject.toml) | config signal |
| config | [uv.lock](../../../../sources/cheshire-cat-ai__core/uv.lock) | config signal |
| config | [tests/mocks/mock_plugin/requirements.txt](../../../../sources/cheshire-cat-ai__core/tests/mocks/mock_plugin/requirements.txt) | config signal |
| config | [src/cat/scaffold/plugins/ui/requirements.txt](../../../../sources/cheshire-cat-ai__core/src/cat/scaffold/plugins/ui/requirements.txt) | config signal |
| eval | [tests_giga/test_ambient_context.py](../../../../sources/cheshire-cat-ai__core/tests_giga/test_ambient_context.py) | eval support |
| eval | [tests/__init__.py](../../../../sources/cheshire-cat-ai__core/tests/__init__.py) | eval support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 2 | [src/cat/main.py](../../../../sources/cheshire-cat-ai__core/src/cat/main.py)<br>[src/cat/protocols/model_context/server.py](../../../../sources/cheshire-cat-ai__core/src/cat/protocols/model_context/server.py) |
| agentRuntime | 8 | [tests/agents/test_agent_form.py](../../../../sources/cheshire-cat-ai__core/tests/agents/test_agent_form.py)<br>[tests/agents/test_agent_tools.py](../../../../sources/cheshire-cat-ai__core/tests/agents/test_agent_tools.py)<br>[src/cat/context.py](../../../../sources/cheshire-cat-ai__core/src/cat/context.py)<br>[src/cat/services/agents/base.py](../../../../sources/cheshire-cat-ai__core/src/cat/services/agents/base.py)<br>[src/cat/services/agents/default.py](../../../../sources/cheshire-cat-ai__core/src/cat/services/agents/default.py)<br>[src/cat/routes/agents.py](../../../../sources/cheshire-cat-ai__core/src/cat/routes/agents.py)<br>[src/cat/mad_hatter/decorators/hook.py](../../../../sources/cheshire-cat-ai__core/src/cat/mad_hatter/decorators/hook.py)<br>[src/cat/mad_hatter/decorators/tool.py](../../../../sources/cheshire-cat-ai__core/src/cat/mad_hatter/decorators/tool.py) |
| mcp | 0 | not obvious |
| retrieval | 0 | not obvious |
| spec | 4 | [tests/mocks/mock_plugin/requirements.txt](../../../../sources/cheshire-cat-ai__core/tests/mocks/mock_plugin/requirements.txt)<br>[src/cat/scaffold/plugins/ui/requirements.txt](../../../../sources/cheshire-cat-ai__core/src/cat/scaffold/plugins/ui/requirements.txt)<br>[src/cat/scaffold/plugins/llms/requirements.txt](../../../../sources/cheshire-cat-ai__core/src/cat/scaffold/plugins/llms/requirements.txt)<br>[src/cat/scaffold/plugins/chats/requirements.txt](../../../../sources/cheshire-cat-ai__core/src/cat/scaffold/plugins/chats/requirements.txt) |
| eval | 36 | [tests_giga/test_ambient_context.py](../../../../sources/cheshire-cat-ai__core/tests_giga/test_ambient_context.py)<br>[tests/__init__.py](../../../../sources/cheshire-cat-ai__core/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/cheshire-cat-ai__core/tests/conftest.py)<br>[tests/test_cat_utils.py](../../../../sources/cheshire-cat-ai__core/tests/test_cat_utils.py)<br>[tests/test_config.py](../../../../sources/cheshire-cat-ai__core/tests/test_config.py)<br>[tests/utils.py](../../../../sources/cheshire-cat-ai__core/tests/utils.py)<br>[tests/routes/test_custom_endpoints.py](../../../../sources/cheshire-cat-ai__core/tests/routes/test_custom_endpoints.py)<br>[tests/routes/test_routes_base.py](../../../../sources/cheshire-cat-ai__core/tests/routes/test_routes_base.py) |
| security | 11 | [tests/routes/auth/test_custom_auth_handler.py](../../../../sources/cheshire-cat-ai__core/tests/routes/auth/test_custom_auth_handler.py)<br>[tests/routes/auth/test_env_api_key.py](../../../../sources/cheshire-cat-ai__core/tests/routes/auth/test_env_api_key.py)<br>[tests/routes/auth/test_jwt.py](../../../../sources/cheshire-cat-ai__core/tests/routes/auth/test_jwt.py)<br>[tests/routes/auth/test_permissions_registry.py](../../../../sources/cheshire-cat-ai__core/tests/routes/auth/test_permissions_registry.py)<br>[src/cat/routes/auth/oauth.py](../../../../sources/cheshire-cat-ai__core/src/cat/routes/auth/oauth.py)<br>[src/cat/routes/auth/default_idp/idp.html](../../../../sources/cheshire-cat-ai__core/src/cat/routes/auth/default_idp/idp.html)<br>[src/cat/routes/auth/default_idp/idp.py](../../../../sources/cheshire-cat-ai__core/src/cat/routes/auth/default_idp/idp.py)<br>[src/cat/auth/__init__.py](../../../../sources/cheshire-cat-ai__core/src/cat/auth/__init__.py) |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 9 | [README.md](../../../../sources/cheshire-cat-ai__core/README.md)<br>[src/cat/scaffold/plugins/readme.md](../../../../sources/cheshire-cat-ai__core/src/cat/scaffold/plugins/readme.md)<br>[src/cat/scaffold/plugins/ui/README.md](../../../../sources/cheshire-cat-ai__core/src/cat/scaffold/plugins/ui/README.md)<br>[src/cat/scaffold/plugins/llms/README.md](../../../../sources/cheshire-cat-ai__core/src/cat/scaffold/plugins/llms/README.md)<br>[src/cat/scaffold/plugins/chats/README.md](../../../../sources/cheshire-cat-ai__core/src/cat/scaffold/plugins/chats/README.md)<br>[src/cat/scaffold/data/readme.md](../../../../sources/cheshire-cat-ai__core/src/cat/scaffold/data/readme.md)<br>[src/cat/scaffold/data/uploads/readme.md](../../../../sources/cheshire-cat-ai__core/src/cat/scaffold/data/uploads/readme.md)<br>[readme/cheshire-cat.jpeg](../../../../sources/cheshire-cat-ai__core/readme/cheshire-cat.jpeg) |
| config | 6 | [pyproject.toml](../../../../sources/cheshire-cat-ai__core/pyproject.toml)<br>[uv.lock](../../../../sources/cheshire-cat-ai__core/uv.lock)<br>[tests/mocks/mock_plugin/requirements.txt](../../../../sources/cheshire-cat-ai__core/tests/mocks/mock_plugin/requirements.txt)<br>[src/cat/scaffold/plugins/ui/requirements.txt](../../../../sources/cheshire-cat-ai__core/src/cat/scaffold/plugins/ui/requirements.txt)<br>[src/cat/scaffold/plugins/llms/requirements.txt](../../../../sources/cheshire-cat-ai__core/src/cat/scaffold/plugins/llms/requirements.txt)<br>[src/cat/scaffold/plugins/chats/requirements.txt](../../../../sources/cheshire-cat-ai__core/src/cat/scaffold/plugins/chats/requirements.txt) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 36 | [tests_giga/test_ambient_context.py](../../../../sources/cheshire-cat-ai__core/tests_giga/test_ambient_context.py)<br>[tests/__init__.py](../../../../sources/cheshire-cat-ai__core/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/cheshire-cat-ai__core/tests/conftest.py)<br>[tests/test_cat_utils.py](../../../../sources/cheshire-cat-ai__core/tests/test_cat_utils.py)<br>[tests/test_config.py](../../../../sources/cheshire-cat-ai__core/tests/test_config.py)<br>[tests/utils.py](../../../../sources/cheshire-cat-ai__core/tests/utils.py) |
| CI workflows | 0 | not obvious |
| Containers / deploy | 0 | not obvious |
| Security / policy | 11 | [tests/routes/auth/test_custom_auth_handler.py](../../../../sources/cheshire-cat-ai__core/tests/routes/auth/test_custom_auth_handler.py)<br>[tests/routes/auth/test_env_api_key.py](../../../../sources/cheshire-cat-ai__core/tests/routes/auth/test_env_api_key.py)<br>[tests/routes/auth/test_jwt.py](../../../../sources/cheshire-cat-ai__core/tests/routes/auth/test_jwt.py)<br>[tests/routes/auth/test_permissions_registry.py](../../../../sources/cheshire-cat-ai__core/tests/routes/auth/test_permissions_registry.py)<br>[src/cat/routes/auth/oauth.py](../../../../sources/cheshire-cat-ai__core/src/cat/routes/auth/oauth.py)<br>[src/cat/routes/auth/default_idp/idp.html](../../../../sources/cheshire-cat-ai__core/src/cat/routes/auth/default_idp/idp.html) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | CI workflow path not obvious; container/deploy path not obvious |
| security | agent instruction files not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `tests/agents/test_agent_form.py`, `tests/agents/test_agent_tools.py`, `src/cat/context.py`.
2. Trace execution through entrypoints: `src/cat/main.py`, `src/cat/protocols/model_context/server.py`.
3. Map agent/tool runtime through: `tests/agents/test_agent_form.py`, `tests/agents/test_agent_tools.py`, `src/cat/context.py`.
4. Verify behavior through test/eval files: `tests_giga/test_ambient_context.py`, `tests/__init__.py`, `tests/conftest.py`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 AI agent microservice. 핵심 구조 신호는 Python, pyproject.toml, README.md, LICENSE, openai, mcp이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 ci signal not obvious, license metadata missing, needs deeper structural scan입니다.
