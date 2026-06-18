# anthropics/claude-code Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Claude Code is an agentic coding tool that lives in your terminal, understands your codebase, and helps you code faster by executing routine tasks, explaining complex code, and handling git workflows - all through natural language commands.

## 요약

- 조사 단위: `sources/anthropics__claude-code` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 202 files, 98 directories, depth score 100, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 agent/tool runtime, spec/docs-driven, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 mcp=plugins/plugin-dev/skills/mcp-integration/SKILL.md, plugins/plugin-dev/skills/mcp-integration/references/authentication.md, plugins/plugin-dev/skills/mcp-integration/references/server-types.md이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | anthropics/claude-code |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 133037 |
| Forks | 21517 |
| License | none |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/anthropics__claude-code](../../../../sources/anthropics__claude-code) |
| Existing report | [reports/global-trending/repositories/anthropics__claude-code.md](../../../global-trending/repositories/anthropics__claude-code.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 202 / 98 |
| Max observed depth | 6 |
| Top directories | .claude, .claude-plugin, .devcontainer, .github, examples, plugins, Script, scripts |
| Top extensions | .md: 102, .json: 26, .py: 21, .sh: 19, .yml: 17, .ts: 5, (none): 4, .ps1: 2, .adml: 1, .admx: 1, .gif: 1, .mobileconfig: 1 |
| Source patterns | agent/tool runtime, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| examples/settings | examples workspace | 2 |
| .devcontainer | deployment surface | 1 |
| .github | ci surface | 1 |
| examples | top-level component | 1 |
| examples/mdm | examples workspace | 1 |
| plugins | top-level component | 1 |
| Script | top-level component | 1 |
| scripts | top-level component | 1 |


## How It Runs

_No command surface extracted from root manifests._


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
| mcp | [plugins/plugin-dev/skills/mcp-integration/SKILL.md](../../../../sources/anthropics__claude-code/plugins/plugin-dev/skills/mcp-integration/SKILL.md) | mcp signal |
| mcp | [plugins/plugin-dev/skills/mcp-integration/references/authentication.md](../../../../sources/anthropics__claude-code/plugins/plugin-dev/skills/mcp-integration/references/authentication.md) | mcp signal |
| mcp | [plugins/plugin-dev/skills/mcp-integration/references/server-types.md](../../../../sources/anthropics__claude-code/plugins/plugin-dev/skills/mcp-integration/references/server-types.md) | mcp signal |
| mcp | [plugins/plugin-dev/skills/mcp-integration/references/tool-usage.md](../../../../sources/anthropics__claude-code/plugins/plugin-dev/skills/mcp-integration/references/tool-usage.md) | mcp signal |
| agentRuntime | [plugins/security-guidance/hooks/_base.py](../../../../sources/anthropics__claude-code/plugins/security-guidance/hooks/_base.py) | agentRuntime signal |
| agentRuntime | [plugins/security-guidance/hooks/diffstate.py](../../../../sources/anthropics__claude-code/plugins/security-guidance/hooks/diffstate.py) | agentRuntime signal |
| agentRuntime | [plugins/security-guidance/hooks/ensure_agent_sdk.py](../../../../sources/anthropics__claude-code/plugins/security-guidance/hooks/ensure_agent_sdk.py) | agentRuntime signal |
| agentRuntime | [plugins/security-guidance/hooks/extensibility.py](../../../../sources/anthropics__claude-code/plugins/security-guidance/hooks/extensibility.py) | agentRuntime signal |
| ci | [.github/workflows/auto-close-duplicates.yml](../../../../sources/anthropics__claude-code/.github/workflows/auto-close-duplicates.yml) | ci support |
| ci | [.github/workflows/backfill-duplicate-comments.yml](../../../../sources/anthropics__claude-code/.github/workflows/backfill-duplicate-comments.yml) | ci support |
| container | [.devcontainer/Dockerfile](../../../../sources/anthropics__claude-code/.devcontainer/Dockerfile) | container support |
| eval | [plugins/pr-review-toolkit/agents/pr-test-analyzer.md](../../../../sources/anthropics__claude-code/plugins/pr-review-toolkit/agents/pr-test-analyzer.md) | eval support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 101 | [plugins/security-guidance/hooks/_base.py](../../../../sources/anthropics__claude-code/plugins/security-guidance/hooks/_base.py)<br>[plugins/security-guidance/hooks/diffstate.py](../../../../sources/anthropics__claude-code/plugins/security-guidance/hooks/diffstate.py)<br>[plugins/security-guidance/hooks/ensure_agent_sdk.py](../../../../sources/anthropics__claude-code/plugins/security-guidance/hooks/ensure_agent_sdk.py)<br>[plugins/security-guidance/hooks/extensibility.py](../../../../sources/anthropics__claude-code/plugins/security-guidance/hooks/extensibility.py)<br>[plugins/security-guidance/hooks/gitutil.py](../../../../sources/anthropics__claude-code/plugins/security-guidance/hooks/gitutil.py)<br>[plugins/security-guidance/hooks/hooks.json](../../../../sources/anthropics__claude-code/plugins/security-guidance/hooks/hooks.json)<br>[plugins/security-guidance/hooks/llm.py](../../../../sources/anthropics__claude-code/plugins/security-guidance/hooks/llm.py)<br>[plugins/security-guidance/hooks/patterns.py](../../../../sources/anthropics__claude-code/plugins/security-guidance/hooks/patterns.py) |
| mcp | 7 | [plugins/plugin-dev/skills/mcp-integration/SKILL.md](../../../../sources/anthropics__claude-code/plugins/plugin-dev/skills/mcp-integration/SKILL.md)<br>[plugins/plugin-dev/skills/mcp-integration/references/authentication.md](../../../../sources/anthropics__claude-code/plugins/plugin-dev/skills/mcp-integration/references/authentication.md)<br>[plugins/plugin-dev/skills/mcp-integration/references/server-types.md](../../../../sources/anthropics__claude-code/plugins/plugin-dev/skills/mcp-integration/references/server-types.md)<br>[plugins/plugin-dev/skills/mcp-integration/references/tool-usage.md](../../../../sources/anthropics__claude-code/plugins/plugin-dev/skills/mcp-integration/references/tool-usage.md)<br>[plugins/plugin-dev/skills/mcp-integration/examples/http-server.json](../../../../sources/anthropics__claude-code/plugins/plugin-dev/skills/mcp-integration/examples/http-server.json)<br>[plugins/plugin-dev/skills/mcp-integration/examples/sse-server.json](../../../../sources/anthropics__claude-code/plugins/plugin-dev/skills/mcp-integration/examples/sse-server.json)<br>[plugins/plugin-dev/skills/mcp-integration/examples/stdio-server.json](../../../../sources/anthropics__claude-code/plugins/plugin-dev/skills/mcp-integration/examples/stdio-server.json) |
| retrieval | 0 | not obvious |
| spec | 5 | [plugins/pr-review-toolkit/agents/type-design-analyzer.md](../../../../sources/anthropics__claude-code/plugins/pr-review-toolkit/agents/type-design-analyzer.md)<br>[plugins/plugin-dev/skills/agent-development/references/system-prompt-design.md](../../../../sources/anthropics__claude-code/plugins/plugin-dev/skills/agent-development/references/system-prompt-design.md)<br>[plugins/frontend-design/README.md](../../../../sources/anthropics__claude-code/plugins/frontend-design/README.md)<br>[plugins/frontend-design/skills/frontend-design/SKILL.md](../../../../sources/anthropics__claude-code/plugins/frontend-design/skills/frontend-design/SKILL.md)<br>[plugins/frontend-design/.claude-plugin/plugin.json](../../../../sources/anthropics__claude-code/plugins/frontend-design/.claude-plugin/plugin.json) |
| eval | 3 | [plugins/pr-review-toolkit/agents/pr-test-analyzer.md](../../../../sources/anthropics__claude-code/plugins/pr-review-toolkit/agents/pr-test-analyzer.md)<br>[plugins/plugin-dev/skills/hook-development/scripts/test-hook.sh](../../../../sources/anthropics__claude-code/plugins/plugin-dev/skills/hook-development/scripts/test-hook.sh)<br>[plugins/hookify/examples/require-tests-stop.local.md](../../../../sources/anthropics__claude-code/plugins/hookify/examples/require-tests-stop.local.md) |
| security | 16 | [SECURITY.md](../../../../sources/anthropics__claude-code/SECURITY.md)<br>[plugins/security-guidance/README.md](../../../../sources/anthropics__claude-code/plugins/security-guidance/README.md)<br>[plugins/security-guidance/hooks/_base.py](../../../../sources/anthropics__claude-code/plugins/security-guidance/hooks/_base.py)<br>[plugins/security-guidance/hooks/diffstate.py](../../../../sources/anthropics__claude-code/plugins/security-guidance/hooks/diffstate.py)<br>[plugins/security-guidance/hooks/ensure_agent_sdk.py](../../../../sources/anthropics__claude-code/plugins/security-guidance/hooks/ensure_agent_sdk.py)<br>[plugins/security-guidance/hooks/extensibility.py](../../../../sources/anthropics__claude-code/plugins/security-guidance/hooks/extensibility.py)<br>[plugins/security-guidance/hooks/gitutil.py](../../../../sources/anthropics__claude-code/plugins/security-guidance/hooks/gitutil.py)<br>[plugins/security-guidance/hooks/hooks.json](../../../../sources/anthropics__claude-code/plugins/security-guidance/hooks/hooks.json) |
| ci | 12 | [.github/workflows/auto-close-duplicates.yml](../../../../sources/anthropics__claude-code/.github/workflows/auto-close-duplicates.yml)<br>[.github/workflows/backfill-duplicate-comments.yml](../../../../sources/anthropics__claude-code/.github/workflows/backfill-duplicate-comments.yml)<br>[.github/workflows/claude-dedupe-issues.yml](../../../../sources/anthropics__claude-code/.github/workflows/claude-dedupe-issues.yml)<br>[.github/workflows/claude-issue-triage.yml](../../../../sources/anthropics__claude-code/.github/workflows/claude-issue-triage.yml)<br>[.github/workflows/claude.yml](../../../../sources/anthropics__claude-code/.github/workflows/claude.yml)<br>[.github/workflows/issue-lifecycle-comment.yml](../../../../sources/anthropics__claude-code/.github/workflows/issue-lifecycle-comment.yml)<br>[.github/workflows/issue-opened-dispatch.yml](../../../../sources/anthropics__claude-code/.github/workflows/issue-opened-dispatch.yml)<br>[.github/workflows/lock-closed-issues.yml](../../../../sources/anthropics__claude-code/.github/workflows/lock-closed-issues.yml) |
| container | 1 | [.devcontainer/Dockerfile](../../../../sources/anthropics__claude-code/.devcontainer/Dockerfile) |
| instruction | 0 | not obvious |
| docs | 20 | [README.md](../../../../sources/anthropics__claude-code/README.md)<br>[plugins/README.md](../../../../sources/anthropics__claude-code/plugins/README.md)<br>[plugins/security-guidance/README.md](../../../../sources/anthropics__claude-code/plugins/security-guidance/README.md)<br>[plugins/ralph-wiggum/README.md](../../../../sources/anthropics__claude-code/plugins/ralph-wiggum/README.md)<br>[plugins/pr-review-toolkit/README.md](../../../../sources/anthropics__claude-code/plugins/pr-review-toolkit/README.md)<br>[plugins/plugin-dev/README.md](../../../../sources/anthropics__claude-code/plugins/plugin-dev/README.md)<br>[plugins/plugin-dev/skills/plugin-structure/README.md](../../../../sources/anthropics__claude-code/plugins/plugin-dev/skills/plugin-structure/README.md)<br>[plugins/plugin-dev/skills/hook-development/scripts/README.md](../../../../sources/anthropics__claude-code/plugins/plugin-dev/skills/hook-development/scripts/README.md) |
| config | 0 | not obvious |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 3 | [plugins/pr-review-toolkit/agents/pr-test-analyzer.md](../../../../sources/anthropics__claude-code/plugins/pr-review-toolkit/agents/pr-test-analyzer.md)<br>[plugins/plugin-dev/skills/hook-development/scripts/test-hook.sh](../../../../sources/anthropics__claude-code/plugins/plugin-dev/skills/hook-development/scripts/test-hook.sh)<br>[plugins/hookify/examples/require-tests-stop.local.md](../../../../sources/anthropics__claude-code/plugins/hookify/examples/require-tests-stop.local.md) |
| CI workflows | 12 | [.github/workflows/auto-close-duplicates.yml](../../../../sources/anthropics__claude-code/.github/workflows/auto-close-duplicates.yml)<br>[.github/workflows/backfill-duplicate-comments.yml](../../../../sources/anthropics__claude-code/.github/workflows/backfill-duplicate-comments.yml)<br>[.github/workflows/claude-dedupe-issues.yml](../../../../sources/anthropics__claude-code/.github/workflows/claude-dedupe-issues.yml)<br>[.github/workflows/claude-issue-triage.yml](../../../../sources/anthropics__claude-code/.github/workflows/claude-issue-triage.yml)<br>[.github/workflows/claude.yml](../../../../sources/anthropics__claude-code/.github/workflows/claude.yml)<br>[.github/workflows/issue-lifecycle-comment.yml](../../../../sources/anthropics__claude-code/.github/workflows/issue-lifecycle-comment.yml) |
| Containers / deploy | 1 | [.devcontainer/Dockerfile](../../../../sources/anthropics__claude-code/.devcontainer/Dockerfile) |
| Security / policy | 16 | [SECURITY.md](../../../../sources/anthropics__claude-code/SECURITY.md)<br>[plugins/security-guidance/README.md](../../../../sources/anthropics__claude-code/plugins/security-guidance/README.md)<br>[plugins/security-guidance/hooks/_base.py](../../../../sources/anthropics__claude-code/plugins/security-guidance/hooks/_base.py)<br>[plugins/security-guidance/hooks/diffstate.py](../../../../sources/anthropics__claude-code/plugins/security-guidance/hooks/diffstate.py)<br>[plugins/security-guidance/hooks/ensure_agent_sdk.py](../../../../sources/anthropics__claude-code/plugins/security-guidance/hooks/ensure_agent_sdk.py)<br>[plugins/security-guidance/hooks/extensibility.py](../../../../sources/anthropics__claude-code/plugins/security-guidance/hooks/extensibility.py) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | none |
| security | agent instruction files not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `plugins/plugin-dev/skills/mcp-integration/SKILL.md`, `plugins/plugin-dev/skills/mcp-integration/references/authentication.md`, `plugins/plugin-dev/skills/mcp-integration/references/server-types.md`.
2. Map agent/tool runtime through: `plugins/security-guidance/hooks/_base.py`, `plugins/security-guidance/hooks/diffstate.py`, `plugins/security-guidance/hooks/ensure_agent_sdk.py`.
3. Verify behavior through test/eval files: `plugins/pr-review-toolkit/agents/pr-test-analyzer.md`, `plugins/plugin-dev/skills/hook-development/scripts/test-hook.sh`, `plugins/hookify/examples/require-tests-stop.local.md`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Claude Code is an agentic coding tool that lives in your terminal, understands your codebase, and helps you code faster . 핵심 구조 신호는 Python, README.md, ci, docs이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
