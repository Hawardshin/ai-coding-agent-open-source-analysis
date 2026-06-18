# langchain-ai/open-swe Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Local clone structure analysis: 410 files, 38 directories.

## 요약

- 조사 단위: `sources/langchain-ai__open-swe` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 409 files, 37 directories, depth score 124, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 api/server, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 mcp=agent/integrations/datadog_mcp.py이고, 의존성 단서는 openai, anthropic, mcp, langchain, langgraph, fastapi, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | langchain-ai/open-swe |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 9994 |
| Forks | 1134 |
| License | none |
| Maturity | high-signal |
| Evidence | deep-source+report |
| Source | [sources/langchain-ai__open-swe](../../../../sources/langchain-ai__open-swe) |
| Existing report | [reports/global-trending/repositories/langchain-ai__open-swe.md](../../../global-trending/repositories/langchain-ai__open-swe.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 409 / 37 |
| Max observed depth | 6 |
| Top directories | .github, agent, evals, scripts, static, tests, ui |
| Top extensions | .py: 228, .tsx: 93, .ts: 31, .json: 11, .md: 11, (none): 9, .png: 7, .svg: 5, .yml: 5, .lock: 3, .css: 2, .toml: 2 |
| Source patterns | api/server, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 50 |
| .github | ci surface | 1 |
| agent | top-level component | 1 |
| evals | top-level component | 1 |
| scripts | top-level component | 1 |
| static | top-level component | 1 |
| ui | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | all | make all |
| serve-dev | Makefile | dev | make dev |
| utility | Makefile | run | make run |
| utility | Makefile | install | make install |
| test | Makefile | integration_tests | make integration_tests |
| quality | Makefile | lint | make lint |
| quality | Makefile | format | make format |
| quality | Makefile | format-check | make format-check |
| utility | Makefile | help | make help |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai, anthropic |
| agentProtocols | mcp |
| agentFrameworks | langchain, langgraph |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | fastapi |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [agent/integrations/datadog_mcp.py](../../../../sources/langchain-ai__open-swe/agent/integrations/datadog_mcp.py) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/langchain-ai__open-swe/AGENTS.md) | agentRuntime signal |
| agentRuntime | [ui/src/styles/agents.css](../../../../sources/langchain-ai__open-swe/ui/src/styles/agents.css) | agentRuntime signal |
| agentRuntime | [ui/src/routes/agents_.instructions.tsx](../../../../sources/langchain-ai__open-swe/ui/src/routes/agents_.instructions.tsx) | agentRuntime signal |
| agentRuntime | [ui/src/routes/agents.tsx](../../../../sources/langchain-ai__open-swe/ui/src/routes/agents.tsx) | agentRuntime signal |
| entrypoints | [agent/server.py](../../../../sources/langchain-ai__open-swe/agent/server.py) | entrypoints signal |
| instruction | [CLAUDE.md](../../../../sources/langchain-ai__open-swe/CLAUDE.md) | instruction signal |
| config | [Makefile](../../../../sources/langchain-ai__open-swe/Makefile) | config signal |
| config | [pyproject.toml](../../../../sources/langchain-ai__open-swe/pyproject.toml) | config signal |
| config | [uv.lock](../../../../sources/langchain-ai__open-swe/uv.lock) | config signal |
| config | [ui/package.json](../../../../sources/langchain-ai__open-swe/ui/package.json) | config signal |
| ci | [.github/workflows/ci.yml](../../../../sources/langchain-ai__open-swe/.github/workflows/ci.yml) | ci support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 1 | [agent/server.py](../../../../sources/langchain-ai__open-swe/agent/server.py) |
| agentRuntime | 204 | [AGENTS.md](../../../../sources/langchain-ai__open-swe/AGENTS.md)<br>[ui/src/styles/agents.css](../../../../sources/langchain-ai__open-swe/ui/src/styles/agents.css)<br>[ui/src/routes/agents_.instructions.tsx](../../../../sources/langchain-ai__open-swe/ui/src/routes/agents_.instructions.tsx)<br>[ui/src/routes/agents.tsx](../../../../sources/langchain-ai__open-swe/ui/src/routes/agents.tsx)<br>[ui/src/routes/agents/$threadId.tsx](../../../../sources/langchain-ai__open-swe/ui/src/routes/agents/$threadId.tsx)<br>[ui/src/routes/agents/index.tsx](../../../../sources/langchain-ai__open-swe/ui/src/routes/agents/index.tsx)<br>[ui/src/routes/agents/threads.tsx](../../../../sources/langchain-ai__open-swe/ui/src/routes/agents/threads.tsx)<br>[ui/src/routes/agents/reviews/$owner.$repo.$number.tsx](../../../../sources/langchain-ai__open-swe/ui/src/routes/agents/reviews/$owner.$repo.$number.tsx) |
| mcp | 1 | [agent/integrations/datadog_mcp.py](../../../../sources/langchain-ai__open-swe/agent/integrations/datadog_mcp.py) |
| retrieval | 8 | [ui/src/routes/index.tsx](../../../../sources/langchain-ai__open-swe/ui/src/routes/index.tsx)<br>[ui/src/routes/agents/index.tsx](../../../../sources/langchain-ai__open-swe/ui/src/routes/agents/index.tsx)<br>[ui/src/routes/agents/reviews/index.tsx](../../../../sources/langchain-ai__open-swe/ui/src/routes/agents/reviews/index.tsx)<br>[ui/src/routes/agents/automations/index.tsx](../../../../sources/langchain-ai__open-swe/ui/src/routes/agents/automations/index.tsx)<br>[ui/src/components/agents/z-index.ts](../../../../sources/langchain-ai__open-swe/ui/src/components/agents/z-index.ts)<br>[ui/src/components/agents/subagents/index.ts](../../../../sources/langchain-ai__open-swe/ui/src/components/agents/subagents/index.ts)<br>[ui/src/components/agents/ported/index.ts](../../../../sources/langchain-ai__open-swe/ui/src/components/agents/ported/index.ts)<br>[ui/src/components/agents/messages/index.ts](../../../../sources/langchain-ai__open-swe/ui/src/components/agents/messages/index.ts) |
| spec | 0 | not obvious |
| eval | 103 | [ui/src/lib/repo.test.ts](../../../../sources/langchain-ai__open-swe/ui/src/lib/repo.test.ts)<br>[tests/conftest.py](../../../../sources/langchain-ai__open-swe/tests/conftest.py)<br>[tests/test_account_link.py](../../../../sources/langchain-ai__open-swe/tests/test_account_link.py)<br>[tests/test_agent_instructions.py](../../../../sources/langchain-ai__open-swe/tests/test_agent_instructions.py)<br>[tests/test_agent_schedules.py](../../../../sources/langchain-ai__open-swe/tests/test_agent_schedules.py)<br>[tests/test_agent_subagent_models.py](../../../../sources/langchain-ai__open-swe/tests/test_agent_subagent_models.py)<br>[tests/test_agent_thread_pr_state.py](../../../../sources/langchain-ai__open-swe/tests/test_agent_thread_pr_state.py)<br>[tests/test_agent_usage.py](../../../../sources/langchain-ai__open-swe/tests/test_agent_usage.py) |
| security | 19 | [SECURITY.md](../../../../sources/langchain-ai__open-swe/SECURITY.md)<br>[tests/test_auth_sources.py](../../../../sources/langchain-ai__open-swe/tests/test_auth_sources.py)<br>[tests/test_github_oauth_refresh.py](../../../../sources/langchain-ai__open-swe/tests/test_github_oauth_refresh.py)<br>[tests/test_http_security.py](../../../../sources/langchain-ai__open-swe/tests/test_http_security.py)<br>[tests/test_langsmith_sandbox_config.py](../../../../sources/langchain-ai__open-swe/tests/test_langsmith_sandbox_config.py)<br>[tests/test_langsmith_sandbox_timeout.py](../../../../sources/langchain-ai__open-swe/tests/test_langsmith_sandbox_timeout.py)<br>[tests/test_proxy_auth.py](../../../../sources/langchain-ai__open-swe/tests/test_proxy_auth.py)<br>[tests/test_sandbox_paths.py](../../../../sources/langchain-ai__open-swe/tests/test_sandbox_paths.py) |
| ci | 4 | [.github/workflows/ci.yml](../../../../sources/langchain-ai__open-swe/.github/workflows/ci.yml)<br>[.github/workflows/pr_lint.yml](../../../../sources/langchain-ai__open-swe/.github/workflows/pr_lint.yml)<br>[.github/workflows/promote_main_to_prod.yml](../../../../sources/langchain-ai__open-swe/.github/workflows/promote_main_to_prod.yml)<br>[.github/workflows/reviewer_eval.yml](../../../../sources/langchain-ai__open-swe/.github/workflows/reviewer_eval.yml) |
| container | 1 | [Dockerfile](../../../../sources/langchain-ai__open-swe/Dockerfile) |
| instruction | 2 | [AGENTS.md](../../../../sources/langchain-ai__open-swe/AGENTS.md)<br>[CLAUDE.md](../../../../sources/langchain-ai__open-swe/CLAUDE.md) |
| docs | 3 | [README.md](../../../../sources/langchain-ai__open-swe/README.md)<br>[ui/README.md](../../../../sources/langchain-ai__open-swe/ui/README.md)<br>[evals/reviewer/README.md](../../../../sources/langchain-ai__open-swe/evals/reviewer/README.md) |
| config | 5 | [Makefile](../../../../sources/langchain-ai__open-swe/Makefile)<br>[pyproject.toml](../../../../sources/langchain-ai__open-swe/pyproject.toml)<br>[uv.lock](../../../../sources/langchain-ai__open-swe/uv.lock)<br>[ui/package.json](../../../../sources/langchain-ai__open-swe/ui/package.json)<br>[ui/tsconfig.json](../../../../sources/langchain-ai__open-swe/ui/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 103 | [ui/src/lib/repo.test.ts](../../../../sources/langchain-ai__open-swe/ui/src/lib/repo.test.ts)<br>[tests/conftest.py](../../../../sources/langchain-ai__open-swe/tests/conftest.py)<br>[tests/test_account_link.py](../../../../sources/langchain-ai__open-swe/tests/test_account_link.py)<br>[tests/test_agent_instructions.py](../../../../sources/langchain-ai__open-swe/tests/test_agent_instructions.py)<br>[tests/test_agent_schedules.py](../../../../sources/langchain-ai__open-swe/tests/test_agent_schedules.py)<br>[tests/test_agent_subagent_models.py](../../../../sources/langchain-ai__open-swe/tests/test_agent_subagent_models.py) |
| CI workflows | 4 | [.github/workflows/ci.yml](../../../../sources/langchain-ai__open-swe/.github/workflows/ci.yml)<br>[.github/workflows/pr_lint.yml](../../../../sources/langchain-ai__open-swe/.github/workflows/pr_lint.yml)<br>[.github/workflows/promote_main_to_prod.yml](../../../../sources/langchain-ai__open-swe/.github/workflows/promote_main_to_prod.yml)<br>[.github/workflows/reviewer_eval.yml](../../../../sources/langchain-ai__open-swe/.github/workflows/reviewer_eval.yml) |
| Containers / deploy | 1 | [Dockerfile](../../../../sources/langchain-ai__open-swe/Dockerfile) |
| Security / policy | 19 | [SECURITY.md](../../../../sources/langchain-ai__open-swe/SECURITY.md)<br>[tests/test_auth_sources.py](../../../../sources/langchain-ai__open-swe/tests/test_auth_sources.py)<br>[tests/test_github_oauth_refresh.py](../../../../sources/langchain-ai__open-swe/tests/test_github_oauth_refresh.py)<br>[tests/test_http_security.py](../../../../sources/langchain-ai__open-swe/tests/test_http_security.py)<br>[tests/test_langsmith_sandbox_config.py](../../../../sources/langchain-ai__open-swe/tests/test_langsmith_sandbox_config.py)<br>[tests/test_langsmith_sandbox_timeout.py](../../../../sources/langchain-ai__open-swe/tests/test_langsmith_sandbox_timeout.py) |
| Agent instructions | 2 | [AGENTS.md](../../../../sources/langchain-ai__open-swe/AGENTS.md)<br>[CLAUDE.md](../../../../sources/langchain-ai__open-swe/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `agent/integrations/datadog_mcp.py`, `AGENTS.md`, `ui/src/styles/agents.css`.
2. Trace execution through entrypoints: `agent/server.py`.
3. Map agent/tool runtime through: `AGENTS.md`, `ui/src/styles/agents.css`, `ui/src/routes/agents_.instructions.tsx`.
4. Inspect retrieval/memory/indexing through: `ui/src/routes/index.tsx`, `ui/src/routes/agents/index.tsx`, `ui/src/routes/agents/reviews/index.tsx`.
5. Verify behavior through test/eval files: `ui/src/lib/repo.test.ts`, `tests/conftest.py`, `tests/test_account_link.py`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Local clone structure analysis 410 files, 38 directories.. 핵심 구조 신호는 Python, pyproject.toml, Dockerfile, Makefile, README.md, AGENTS.md이며, deep-source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing입니다.
