# blockscout/mcp-server Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Wraps Blockscout APIs and exposes blockchain data by Model Context Protocol

## 요약

- 조사 단위: `sources/blockscout__mcp-server` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 272 files, 86 directories, depth score 126, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=MCP-REGISTRY-README.md, blockscout_mcp_server/__init__.py, blockscout_mcp_server/__main__.py이고, 의존성 단서는 mcp, pydantic, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | blockscout/mcp-server |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 40 |
| Forks | 19 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/blockscout__mcp-server](../../../../sources/blockscout__mcp-server) |
| Existing report | [reports/global-trending/repositories/blockscout__mcp-server.md](../../../global-trending/repositories/blockscout__mcp-server.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 272 / 86 |
| Max observed depth | 5 |
| Top directories | .agents, .claude, .codex, .cursor, .devcontainer, .gemini, .github, agent-skills, blockscout_mcp_server, gpt, mcpb, scripts, tests |
| Top extensions | .py: 162, .md: 34, .mdc: 20, .json: 10, .sh: 10, (none): 9, .yaml: 7, .toml: 6, .yml: 6, .example: 3, .html: 1, .ini: 1 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 82 |
| .codex | top-level component | 1 |
| .devcontainer | deployment surface | 1 |
| .github | ci surface | 1 |
| agent-skills | top-level component | 1 |
| blockscout_mcp_server | source boundary | 1 |
| gpt | top-level component | 1 |
| mcpb | top-level component | 1 |
| scripts | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| serve-dev | pyproject.toml | blockscout-mcp-server | blockscout-mcp-server |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | mcp |
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
| mcp | [MCP-REGISTRY-README.md](../../../../sources/blockscout__mcp-server/MCP-REGISTRY-README.md) | mcp signal |
| mcp | [blockscout_mcp_server/__init__.py](../../../../sources/blockscout__mcp-server/blockscout_mcp_server/__init__.py) | mcp signal |
| mcp | [blockscout_mcp_server/__main__.py](../../../../sources/blockscout__mcp-server/blockscout_mcp_server/__main__.py) | mcp signal |
| mcp | [blockscout_mcp_server/analytics.py](../../../../sources/blockscout__mcp-server/blockscout_mcp_server/analytics.py) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/blockscout__mcp-server/AGENTS.md) | agentRuntime signal |
| agentRuntime | [tests/tools/test_chain_resolution.py](../../../../sources/blockscout__mcp-server/tests/tools/test_chain_resolution.py) | agentRuntime signal |
| agentRuntime | [tests/tools/test_chain_support.py](../../../../sources/blockscout__mcp-server/tests/tools/test_chain_support.py) | agentRuntime signal |
| agentRuntime | [tests/tools/test_common_blockscout_request_auth.py](../../../../sources/blockscout__mcp-server/tests/tools/test_common_blockscout_request_auth.py) | agentRuntime signal |
| entrypoints | [server.json](../../../../sources/blockscout__mcp-server/server.json) | entrypoints signal |
| entrypoints | [blockscout_mcp_server/server.py](../../../../sources/blockscout__mcp-server/blockscout_mcp_server/server.py) | entrypoints signal |
| entrypoints | [.devcontainer/bin/cleanup-claude-session](../../../../sources/blockscout__mcp-server/.devcontainer/bin/cleanup-claude-session) | entrypoints signal |
| instruction | [.github/copilot-instructions.md](../../../../sources/blockscout__mcp-server/.github/copilot-instructions.md) | instruction signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 5 | [server.json](../../../../sources/blockscout__mcp-server/server.json)<br>[blockscout_mcp_server/__main__.py](../../../../sources/blockscout__mcp-server/blockscout_mcp_server/__main__.py)<br>[blockscout_mcp_server/server.py](../../../../sources/blockscout__mcp-server/blockscout_mcp_server/server.py)<br>[.devcontainer/bin/cleanup-claude-session](../../../../sources/blockscout__mcp-server/.devcontainer/bin/cleanup-claude-session)<br>[.devcontainer/bin/codex](../../../../sources/blockscout__mcp-server/.devcontainer/bin/codex) |
| agentRuntime | 111 | [AGENTS.md](../../../../sources/blockscout__mcp-server/AGENTS.md)<br>[tests/tools/test_chain_resolution.py](../../../../sources/blockscout__mcp-server/tests/tools/test_chain_resolution.py)<br>[tests/tools/test_chain_support.py](../../../../sources/blockscout__mcp-server/tests/tools/test_chain_support.py)<br>[tests/tools/test_common_blockscout_request_auth.py](../../../../sources/blockscout__mcp-server/tests/tools/test_common_blockscout_request_auth.py)<br>[tests/tools/test_common_blockscout_request.py](../../../../sources/blockscout__mcp-server/tests/tools/test_common_blockscout_request.py)<br>[tests/tools/test_common_metadata.py](../../../../sources/blockscout__mcp-server/tests/tools/test_common_metadata.py)<br>[tests/tools/test_common_post_request.py](../../../../sources/blockscout__mcp-server/tests/tools/test_common_post_request.py)<br>[tests/tools/test_common_truncate.py](../../../../sources/blockscout__mcp-server/tests/tools/test_common_truncate.py) |
| mcp | 61 | [MCP-REGISTRY-README.md](../../../../sources/blockscout__mcp-server/MCP-REGISTRY-README.md)<br>[blockscout_mcp_server/__init__.py](../../../../sources/blockscout__mcp-server/blockscout_mcp_server/__init__.py)<br>[blockscout_mcp_server/__main__.py](../../../../sources/blockscout__mcp-server/blockscout_mcp_server/__main__.py)<br>[blockscout_mcp_server/analytics.py](../../../../sources/blockscout__mcp-server/blockscout_mcp_server/analytics.py)<br>[blockscout_mcp_server/cache.py](../../../../sources/blockscout__mcp-server/blockscout_mcp_server/cache.py)<br>[blockscout_mcp_server/client_meta.py](../../../../sources/blockscout__mcp-server/blockscout_mcp_server/client_meta.py)<br>[blockscout_mcp_server/config.py](../../../../sources/blockscout__mcp-server/blockscout_mcp_server/config.py)<br>[blockscout_mcp_server/constants.py](../../../../sources/blockscout__mcp-server/blockscout_mcp_server/constants.py) |
| retrieval | 1 | [blockscout_mcp_server/templates/index.html](../../../../sources/blockscout__mcp-server/blockscout_mcp_server/templates/index.html) |
| spec | 4 | [SPEC.md](../../../../sources/blockscout__mcp-server/SPEC.md)<br>[.agents/skills/consult-spec/agent-instructions.md](../../../../sources/blockscout__mcp-server/.agents/skills/consult-spec/agent-instructions.md)<br>[.agents/skills/consult-spec/claude-code-rule.md](../../../../sources/blockscout__mcp-server/.agents/skills/consult-spec/claude-code-rule.md)<br>[.agents/skills/consult-spec/SKILL.md](../../../../sources/blockscout__mcp-server/.agents/skills/consult-spec/SKILL.md) |
| eval | 121 | [SPEC.md](../../../../sources/blockscout__mcp-server/SPEC.md)<br>[tests/conftest.py](../../../../sources/blockscout__mcp-server/tests/conftest.py)<br>[tests/test_analytics_helpers.py](../../../../sources/blockscout__mcp-server/tests/test_analytics_helpers.py)<br>[tests/test_analytics_source.py](../../../../sources/blockscout__mcp-server/tests/test_analytics_source.py)<br>[tests/test_analytics.py](../../../../sources/blockscout__mcp-server/tests/test_analytics.py)<br>[tests/test_bundled_skill_artifacts.py](../../../../sources/blockscout__mcp-server/tests/test_bundled_skill_artifacts.py)<br>[tests/test_cache.py](../../../../sources/blockscout__mcp-server/tests/test_cache.py)<br>[tests/test_client_meta.py](../../../../sources/blockscout__mcp-server/tests/test_client_meta.py) |
| security | 1 | [tests/tools/test_common_blockscout_request_auth.py](../../../../sources/blockscout__mcp-server/tests/tools/test_common_blockscout_request_auth.py) |
| ci | 5 | [.github/workflows/ci-lint.yml](../../../../sources/blockscout__mcp-server/.github/workflows/ci-lint.yml)<br>[.github/workflows/ci.yml](../../../../sources/blockscout__mcp-server/.github/workflows/ci.yml)<br>[.github/workflows/integration-tests.yml](../../../../sources/blockscout__mcp-server/.github/workflows/integration-tests.yml)<br>[.github/workflows/main.yml](../../../../sources/blockscout__mcp-server/.github/workflows/main.yml)<br>[.github/workflows/mcp-registry.yml](../../../../sources/blockscout__mcp-server/.github/workflows/mcp-registry.yml) |
| container | 2 | [Dockerfile](../../../../sources/blockscout__mcp-server/Dockerfile)<br>[tests/evals/docker-compose.yml](../../../../sources/blockscout__mcp-server/tests/evals/docker-compose.yml) |
| instruction | 26 | [AGENTS.md](../../../../sources/blockscout__mcp-server/AGENTS.md)<br>[.github/copilot-instructions.md](../../../../sources/blockscout__mcp-server/.github/copilot-instructions.md)<br>[.gemini/GEMINI.md](../../../../sources/blockscout__mcp-server/.gemini/GEMINI.md)<br>[.cursor/AGENTS.md](../../../../sources/blockscout__mcp-server/.cursor/AGENTS.md)<br>[.cursor/rules/000-role-and-task.mdc](../../../../sources/blockscout__mcp-server/.cursor/rules/000-role-and-task.mdc)<br>[.cursor/rules/010-implementation-rules.mdc](../../../../sources/blockscout__mcp-server/.cursor/rules/010-implementation-rules.mdc)<br>[.cursor/rules/110-new-mcp-tool.mdc](../../../../sources/blockscout__mcp-server/.cursor/rules/110-new-mcp-tool.mdc)<br>[.cursor/rules/112-direct-api-handlers.mdc](../../../../sources/blockscout__mcp-server/.cursor/rules/112-direct-api-handlers.mdc) |
| docs | 4 | [README.md](../../../../sources/blockscout__mcp-server/README.md)<br>[tests/evals/README.md](../../../../sources/blockscout__mcp-server/tests/evals/README.md)<br>[mcpb/README.md](../../../../sources/blockscout__mcp-server/mcpb/README.md)<br>[gpt/README.md](../../../../sources/blockscout__mcp-server/gpt/README.md) |
| config | 1 | [pyproject.toml](../../../../sources/blockscout__mcp-server/pyproject.toml) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 121 | [SPEC.md](../../../../sources/blockscout__mcp-server/SPEC.md)<br>[tests/conftest.py](../../../../sources/blockscout__mcp-server/tests/conftest.py)<br>[tests/test_analytics_helpers.py](../../../../sources/blockscout__mcp-server/tests/test_analytics_helpers.py)<br>[tests/test_analytics_source.py](../../../../sources/blockscout__mcp-server/tests/test_analytics_source.py)<br>[tests/test_analytics.py](../../../../sources/blockscout__mcp-server/tests/test_analytics.py)<br>[tests/test_bundled_skill_artifacts.py](../../../../sources/blockscout__mcp-server/tests/test_bundled_skill_artifacts.py) |
| CI workflows | 5 | [.github/workflows/ci-lint.yml](../../../../sources/blockscout__mcp-server/.github/workflows/ci-lint.yml)<br>[.github/workflows/ci.yml](../../../../sources/blockscout__mcp-server/.github/workflows/ci.yml)<br>[.github/workflows/integration-tests.yml](../../../../sources/blockscout__mcp-server/.github/workflows/integration-tests.yml)<br>[.github/workflows/main.yml](../../../../sources/blockscout__mcp-server/.github/workflows/main.yml)<br>[.github/workflows/mcp-registry.yml](../../../../sources/blockscout__mcp-server/.github/workflows/mcp-registry.yml) |
| Containers / deploy | 2 | [Dockerfile](../../../../sources/blockscout__mcp-server/Dockerfile)<br>[tests/evals/docker-compose.yml](../../../../sources/blockscout__mcp-server/tests/evals/docker-compose.yml) |
| Security / policy | 1 | [tests/tools/test_common_blockscout_request_auth.py](../../../../sources/blockscout__mcp-server/tests/tools/test_common_blockscout_request_auth.py) |
| Agent instructions | 26 | [AGENTS.md](../../../../sources/blockscout__mcp-server/AGENTS.md)<br>[.github/copilot-instructions.md](../../../../sources/blockscout__mcp-server/.github/copilot-instructions.md)<br>[.gemini/GEMINI.md](../../../../sources/blockscout__mcp-server/.gemini/GEMINI.md)<br>[.cursor/AGENTS.md](../../../../sources/blockscout__mcp-server/.cursor/AGENTS.md)<br>[.cursor/rules/000-role-and-task.mdc](../../../../sources/blockscout__mcp-server/.cursor/rules/000-role-and-task.mdc)<br>[.cursor/rules/010-implementation-rules.mdc](../../../../sources/blockscout__mcp-server/.cursor/rules/010-implementation-rules.mdc) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `MCP-REGISTRY-README.md`, `blockscout_mcp_server/__init__.py`, `blockscout_mcp_server/__main__.py`.
2. Trace execution through entrypoints: `server.json`, `blockscout_mcp_server/__main__.py`, `blockscout_mcp_server/server.py`.
3. Map agent/tool runtime through: `AGENTS.md`, `tests/tools/test_chain_resolution.py`, `tests/tools/test_chain_support.py`.
4. Inspect retrieval/memory/indexing through: `blockscout_mcp_server/templates/index.html`.
5. Verify behavior through test/eval files: `SPEC.md`, `tests/conftest.py`, `tests/test_analytics_helpers.py`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Wraps Blockscout APIs and exposes blockchain data by Model Context Protocol. 핵심 구조 신호는 Python, pyproject.toml, Dockerfile, README.md, AGENTS.md, LICENSE이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
