# olimorris/codecompanion.nvim Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

✨ AI Coding, Vim Style

## 요약

- 조사 단위: `sources/olimorris__codecompanion.nvim` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 687 files, 141 directories, depth score 120, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 agent/tool runtime, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 mcp=tests/stubs/mcp/tools.jsonl, tests/mocks/mcp_client_transport.lua, tests/mcp/test_mcp_client.lua이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | olimorris/codecompanion.nvim |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Lua |
| Stars | 6672 |
| Forks | 424 |
| License | none |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/olimorris__codecompanion.nvim](../../../../sources/olimorris__codecompanion.nvim) |
| Existing report | [reports/global-trending/repositories/olimorris__codecompanion.nvim.md](../../../global-trending/repositories/olimorris__codecompanion.nvim.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 687 / 141 |
| Max observed depth | 8 |
| Top directories | .codecompanion, .github, doc, lua, plugin, queries, scripts, tests |
| Top extensions | .lua: 433, .txt: 81, .md: 69, .scm: 21, (none): 21, .yml: 11, .json: 4, .png: 3, .sh: 3, .example: 2, .js: 2, .jsonl: 2 |
| Source patterns | agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 91 |
| .github | ci surface | 1 |
| doc | documentation surface | 1 |
| lua | top-level component | 1 |
| plugin | top-level component | 1 |
| queries | top-level component | 1 |
| scripts | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | Makefile | all | make all |
| utility | Makefile | docs | make docs |
| quality | Makefile | format | make format |
| test | Makefile | test | make test |
| test | Makefile | test_file | make test_file |
| utility | Makefile | deps | make deps |


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
| mcp | [tests/stubs/mcp/tools.jsonl](../../../../sources/olimorris__codecompanion.nvim/tests/stubs/mcp/tools.jsonl) | mcp signal |
| mcp | [tests/mocks/mcp_client_transport.lua](../../../../sources/olimorris__codecompanion.nvim/tests/mocks/mcp_client_transport.lua) | mcp signal |
| mcp | [tests/mcp/test_mcp_client.lua](../../../../sources/olimorris__codecompanion.nvim/tests/mcp/test_mcp_client.lua) | mcp signal |
| mcp | [tests/mcp/test_mcp_tools.lua](../../../../sources/olimorris__codecompanion.nvim/tests/mcp/test_mcp_tools.lua) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/olimorris__codecompanion.nvim/AGENTS.md) | agentRuntime signal |
| agentRuntime | [tests/stubs/workflow.lua](../../../../sources/olimorris__codecompanion.nvim/tests/stubs/workflow.lua) | agentRuntime signal |
| agentRuntime | [tests/scripts/context_management.lua](../../../../sources/olimorris__codecompanion.nvim/tests/scripts/context_management.lua) | agentRuntime signal |
| instruction | [CLAUDE.md](../../../../sources/olimorris__codecompanion.nvim/CLAUDE.md) | instruction signal |
| instruction | [tests/stubs/rules/CLAUDE.md](../../../../sources/olimorris__codecompanion.nvim/tests/stubs/rules/CLAUDE.md) | instruction signal |
| config | [Makefile](../../../../sources/olimorris__codecompanion.nvim/Makefile) | config signal |
| config | [doc/package.json](../../../../sources/olimorris__codecompanion.nvim/doc/package.json) | config signal |
| ci | [.github/workflows/ci.yml](../../../../sources/olimorris__codecompanion.nvim/.github/workflows/ci.yml) | ci support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 150 | [AGENTS.md](../../../../sources/olimorris__codecompanion.nvim/AGENTS.md)<br>[tests/stubs/workflow.lua](../../../../sources/olimorris__codecompanion.nvim/tests/stubs/workflow.lua)<br>[tests/stubs/mcp/tools.jsonl](../../../../sources/olimorris__codecompanion.nvim/tests/stubs/mcp/tools.jsonl)<br>[tests/scripts/context_management.lua](../../../../sources/olimorris__codecompanion.nvim/tests/scripts/context_management.lua)<br>[tests/scripts/tool_testing/.env.example](../../../../sources/olimorris__codecompanion.nvim/tests/scripts/tool_testing/.env.example)<br>[tests/scripts/tool_testing/config.local.lua.example](../../../../sources/olimorris__codecompanion.nvim/tests/scripts/tool_testing/config.local.lua.example)<br>[tests/scripts/tool_testing/config.lua](../../../../sources/olimorris__codecompanion.nvim/tests/scripts/tool_testing/config.lua)<br>[tests/scripts/tool_testing/README.md](../../../../sources/olimorris__codecompanion.nvim/tests/scripts/tool_testing/README.md) |
| mcp | 14 | [tests/stubs/mcp/tools.jsonl](../../../../sources/olimorris__codecompanion.nvim/tests/stubs/mcp/tools.jsonl)<br>[tests/mocks/mcp_client_transport.lua](../../../../sources/olimorris__codecompanion.nvim/tests/mocks/mcp_client_transport.lua)<br>[tests/mcp/test_mcp_client.lua](../../../../sources/olimorris__codecompanion.nvim/tests/mcp/test_mcp_client.lua)<br>[tests/mcp/test_mcp_tools.lua](../../../../sources/olimorris__codecompanion.nvim/tests/mcp/test_mcp_tools.lua)<br>[tests/mcp/test_mcp.lua](../../../../sources/olimorris__codecompanion.nvim/tests/mcp/test_mcp.lua)<br>[tests/interactions/chat/tools/test_tool_registry.lua](../../../../sources/olimorris__codecompanion.nvim/tests/interactions/chat/tools/test_tool_registry.lua)<br>[lua/codecompanion/mcp/client.lua](../../../../sources/olimorris__codecompanion.nvim/lua/codecompanion/mcp/client.lua)<br>[lua/codecompanion/mcp/init.lua](../../../../sources/olimorris__codecompanion.nvim/lua/codecompanion/mcp/init.lua) |
| retrieval | 5 | [tests/interactions/chat/tools/builtin/test_memory.lua](../../../../sources/olimorris__codecompanion.nvim/tests/interactions/chat/tools/builtin/test_memory.lua)<br>[lua/codecompanion/interactions/chat/tools/builtin/memory.lua](../../../../sources/olimorris__codecompanion.nvim/lua/codecompanion/interactions/chat/tools/builtin/memory.lua)<br>[doc/index.md](../../../../sources/olimorris__codecompanion.nvim/doc/index.md)<br>[doc/usage/chat-buffer/index.md](../../../../sources/olimorris__codecompanion.nvim/doc/usage/chat-buffer/index.md)<br>[doc/.vitepress/theme/index.js](../../../../sources/olimorris__codecompanion.nvim/doc/.vitepress/theme/index.js) |
| spec | 1 | [doc/architecture.md](../../../../sources/olimorris__codecompanion.nvim/doc/architecture.md) |
| eval | 323 | [tests/config.lua](../../../../sources/olimorris__codecompanion.nvim/tests/config.lua)<br>[tests/expectations.lua](../../../../sources/olimorris__codecompanion.nvim/tests/expectations.lua)<br>[tests/helpers.lua](../../../../sources/olimorris__codecompanion.nvim/tests/helpers.lua)<br>[tests/log.lua](../../../../sources/olimorris__codecompanion.nvim/tests/log.lua)<br>[tests/test_cmds.lua](../../../../sources/olimorris__codecompanion.nvim/tests/test_cmds.lua)<br>[tests/test_diff.lua](../../../../sources/olimorris__codecompanion.nvim/tests/test_diff.lua)<br>[tests/test_extensions.lua](../../../../sources/olimorris__codecompanion.nvim/tests/test_extensions.lua)<br>[tests/test_has.lua](../../../../sources/olimorris__codecompanion.nvim/tests/test_has.lua) |
| security | 3 | [tests/stubs/acp/permission_two_step.jsonl](../../../../sources/olimorris__codecompanion.nvim/tests/stubs/acp/permission_two_step.jsonl)<br>[tests/interactions/chat/acp/test_permission_request.lua](../../../../sources/olimorris__codecompanion.nvim/tests/interactions/chat/acp/test_permission_request.lua)<br>[lua/codecompanion/interactions/chat/acp/request_permission.lua](../../../../sources/olimorris__codecompanion.nvim/lua/codecompanion/interactions/chat/acp/request_permission.lua) |
| ci | 9 | [.github/workflows/ci.yml](../../../../sources/olimorris__codecompanion.nvim/.github/workflows/ci.yml)<br>[.github/workflows/claude.yml](../../../../sources/olimorris__codecompanion.nvim/.github/workflows/claude.yml)<br>[.github/workflows/format.yml](../../../../sources/olimorris__codecompanion.nvim/.github/workflows/format.yml)<br>[.github/workflows/release.yml](../../../../sources/olimorris__codecompanion.nvim/.github/workflows/release.yml)<br>[.github/workflows/require-checklist.yml](../../../../sources/olimorris__codecompanion.nvim/.github/workflows/require-checklist.yml)<br>[.github/workflows/rockspec.yml](../../../../sources/olimorris__codecompanion.nvim/.github/workflows/rockspec.yml)<br>[.github/workflows/spelling.yaml](../../../../sources/olimorris__codecompanion.nvim/.github/workflows/spelling.yaml)<br>[.github/workflows/sponsors.yml](../../../../sources/olimorris__codecompanion.nvim/.github/workflows/sponsors.yml) |
| container | 1 | [Dockerfile](../../../../sources/olimorris__codecompanion.nvim/Dockerfile) |
| instruction | 3 | [AGENTS.md](../../../../sources/olimorris__codecompanion.nvim/AGENTS.md)<br>[CLAUDE.md](../../../../sources/olimorris__codecompanion.nvim/CLAUDE.md)<br>[tests/stubs/rules/CLAUDE.md](../../../../sources/olimorris__codecompanion.nvim/tests/stubs/rules/CLAUDE.md) |
| docs | 51 | [README.md](../../../../sources/olimorris__codecompanion.nvim/README.md)<br>[tests/scripts/tool_testing/README.md](../../../../sources/olimorris__codecompanion.nvim/tests/scripts/tool_testing/README.md)<br>[doc/.gitignore](../../../../sources/olimorris__codecompanion.nvim/doc/.gitignore)<br>[doc/agent-client-protocol.md](../../../../sources/olimorris__codecompanion.nvim/doc/agent-client-protocol.md)<br>[doc/architecture.md](../../../../sources/olimorris__codecompanion.nvim/doc/architecture.md)<br>[doc/codecompanion.txt](../../../../sources/olimorris__codecompanion.nvim/doc/codecompanion.txt)<br>[doc/getting-started.md](../../../../sources/olimorris__codecompanion.nvim/doc/getting-started.md)<br>[doc/index.md](../../../../sources/olimorris__codecompanion.nvim/doc/index.md) |
| config | 2 | [Makefile](../../../../sources/olimorris__codecompanion.nvim/Makefile)<br>[doc/package.json](../../../../sources/olimorris__codecompanion.nvim/doc/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 323 | [tests/config.lua](../../../../sources/olimorris__codecompanion.nvim/tests/config.lua)<br>[tests/expectations.lua](../../../../sources/olimorris__codecompanion.nvim/tests/expectations.lua)<br>[tests/helpers.lua](../../../../sources/olimorris__codecompanion.nvim/tests/helpers.lua)<br>[tests/log.lua](../../../../sources/olimorris__codecompanion.nvim/tests/log.lua)<br>[tests/test_cmds.lua](../../../../sources/olimorris__codecompanion.nvim/tests/test_cmds.lua)<br>[tests/test_diff.lua](../../../../sources/olimorris__codecompanion.nvim/tests/test_diff.lua) |
| CI workflows | 9 | [.github/workflows/ci.yml](../../../../sources/olimorris__codecompanion.nvim/.github/workflows/ci.yml)<br>[.github/workflows/claude.yml](../../../../sources/olimorris__codecompanion.nvim/.github/workflows/claude.yml)<br>[.github/workflows/format.yml](../../../../sources/olimorris__codecompanion.nvim/.github/workflows/format.yml)<br>[.github/workflows/release.yml](../../../../sources/olimorris__codecompanion.nvim/.github/workflows/release.yml)<br>[.github/workflows/require-checklist.yml](../../../../sources/olimorris__codecompanion.nvim/.github/workflows/require-checklist.yml)<br>[.github/workflows/rockspec.yml](../../../../sources/olimorris__codecompanion.nvim/.github/workflows/rockspec.yml) |
| Containers / deploy | 1 | [Dockerfile](../../../../sources/olimorris__codecompanion.nvim/Dockerfile) |
| Security / policy | 3 | [tests/stubs/acp/permission_two_step.jsonl](../../../../sources/olimorris__codecompanion.nvim/tests/stubs/acp/permission_two_step.jsonl)<br>[tests/interactions/chat/acp/test_permission_request.lua](../../../../sources/olimorris__codecompanion.nvim/tests/interactions/chat/acp/test_permission_request.lua)<br>[lua/codecompanion/interactions/chat/acp/request_permission.lua](../../../../sources/olimorris__codecompanion.nvim/lua/codecompanion/interactions/chat/acp/request_permission.lua) |
| Agent instructions | 3 | [AGENTS.md](../../../../sources/olimorris__codecompanion.nvim/AGENTS.md)<br>[CLAUDE.md](../../../../sources/olimorris__codecompanion.nvim/CLAUDE.md)<br>[tests/stubs/rules/CLAUDE.md](../../../../sources/olimorris__codecompanion.nvim/tests/stubs/rules/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | none |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `tests/stubs/mcp/tools.jsonl`, `tests/mocks/mcp_client_transport.lua`, `tests/mcp/test_mcp_client.lua`.
2. Map agent/tool runtime through: `AGENTS.md`, `tests/stubs/workflow.lua`, `tests/stubs/mcp/tools.jsonl`.
3. Inspect retrieval/memory/indexing through: `tests/interactions/chat/tools/builtin/test_memory.lua`, `lua/codecompanion/interactions/chat/tools/builtin/memory.lua`, `doc/index.md`.
4. Verify behavior through test/eval files: `tests/config.lua`, `tests/expectations.lua`, `tests/helpers.lua`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 ✨ AI Coding, Vim Style. 핵심 구조 신호는 Lua, Dockerfile, Makefile, README.md, AGENTS.md, CLAUDE.md이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
