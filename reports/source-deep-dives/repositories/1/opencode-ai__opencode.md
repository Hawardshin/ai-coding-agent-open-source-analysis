# opencode-ai/opencode Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Local clone structure analysis: 162 files, 46 directories.

## 요약

- 조사 단위: `sources/opencode-ai__opencode` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 162 files, 46 directories, depth score 109, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 mcp=internal/llm/agent/mcp-tools.go이고, 의존성 단서는 openai, anthropic, mcp, cobra, chroma, opentelemetry, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | opencode-ai/opencode |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | mixed |
| Language | none |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | solid |
| Evidence | deep-source+report |
| Source | [sources/opencode-ai__opencode](../../../../sources/opencode-ai__opencode) |
| Existing report | [reports/clone-structures/opencode-ai__opencode.md](../../../clone-structures/opencode-ai__opencode.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 162 / 46 |
| Max observed depth | 5 |
| Top directories | .github, cmd, internal, scripts |
| Top extensions | .go: 140, (none): 6, .sql: 5, .yml: 3, .json: 2, .md: 2, .mod: 1, .sh: 1, .sum: 1, .yaml: 1 |
| Source patterns | cli-first, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| cmd/schema | cmd workspace | 2 |
| .github | ci surface | 1 |
| cmd | source boundary | 1 |
| internal | top-level component | 1 |
| scripts | top-level component | 1 |


## How It Runs

_No command surface extracted from root manifests._


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai, anthropic |
| agentProtocols | mcp |
| agentFrameworks | none |
| vectorStores | chroma |
| modelRuntime | none |
| webRuntime | none |
| developerSurface | cobra |
| observability | opentelemetry |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [internal/llm/agent/mcp-tools.go](../../../../sources/opencode-ai__opencode/internal/llm/agent/mcp-tools.go) | mcp signal |
| agentRuntime | [internal/llm/tools/bash.go](../../../../sources/opencode-ai__opencode/internal/llm/tools/bash.go) | agentRuntime signal |
| agentRuntime | [internal/llm/tools/diagnostics.go](../../../../sources/opencode-ai__opencode/internal/llm/tools/diagnostics.go) | agentRuntime signal |
| agentRuntime | [internal/llm/tools/edit.go](../../../../sources/opencode-ai__opencode/internal/llm/tools/edit.go) | agentRuntime signal |
| agentRuntime | [internal/llm/tools/fetch.go](../../../../sources/opencode-ai__opencode/internal/llm/tools/fetch.go) | agentRuntime signal |
| entrypoints | [main.go](../../../../sources/opencode-ai__opencode/main.go) | entrypoints signal |
| entrypoints | [cmd/schema/main.go](../../../../sources/opencode-ai__opencode/cmd/schema/main.go) | entrypoints signal |
| config | [go.mod](../../../../sources/opencode-ai__opencode/go.mod) | config signal |
| ci | [.github/workflows/build.yml](../../../../sources/opencode-ai__opencode/.github/workflows/build.yml) | ci support |
| ci | [.github/workflows/release.yml](../../../../sources/opencode-ai__opencode/.github/workflows/release.yml) | ci support |
| eval | [internal/tui/theme/theme_test.go](../../../../sources/opencode-ai__opencode/internal/tui/theme/theme_test.go) | eval support |
| eval | [internal/tui/components/dialog/custom_commands_test.go](../../../../sources/opencode-ai__opencode/internal/tui/components/dialog/custom_commands_test.go) | eval support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 2 | [main.go](../../../../sources/opencode-ai__opencode/main.go)<br>[cmd/schema/main.go](../../../../sources/opencode-ai__opencode/cmd/schema/main.go) |
| agentRuntime | 19 | [internal/llm/tools/bash.go](../../../../sources/opencode-ai__opencode/internal/llm/tools/bash.go)<br>[internal/llm/tools/diagnostics.go](../../../../sources/opencode-ai__opencode/internal/llm/tools/diagnostics.go)<br>[internal/llm/tools/edit.go](../../../../sources/opencode-ai__opencode/internal/llm/tools/edit.go)<br>[internal/llm/tools/fetch.go](../../../../sources/opencode-ai__opencode/internal/llm/tools/fetch.go)<br>[internal/llm/tools/file.go](../../../../sources/opencode-ai__opencode/internal/llm/tools/file.go)<br>[internal/llm/tools/glob.go](../../../../sources/opencode-ai__opencode/internal/llm/tools/glob.go)<br>[internal/llm/tools/grep.go](../../../../sources/opencode-ai__opencode/internal/llm/tools/grep.go)<br>[internal/llm/tools/ls_test.go](../../../../sources/opencode-ai__opencode/internal/llm/tools/ls_test.go) |
| mcp | 1 | [internal/llm/agent/mcp-tools.go](../../../../sources/opencode-ai__opencode/internal/llm/agent/mcp-tools.go) |
| retrieval | 1 | [internal/db/embed.go](../../../../sources/opencode-ai__opencode/internal/db/embed.go) |
| spec | 0 | not obvious |
| eval | 4 | [internal/tui/theme/theme_test.go](../../../../sources/opencode-ai__opencode/internal/tui/theme/theme_test.go)<br>[internal/tui/components/dialog/custom_commands_test.go](../../../../sources/opencode-ai__opencode/internal/tui/components/dialog/custom_commands_test.go)<br>[internal/llm/tools/ls_test.go](../../../../sources/opencode-ai__opencode/internal/llm/tools/ls_test.go)<br>[internal/llm/prompt/prompt_test.go](../../../../sources/opencode-ai__opencode/internal/llm/prompt/prompt_test.go) |
| security | 2 | [internal/tui/components/dialog/permission.go](../../../../sources/opencode-ai__opencode/internal/tui/components/dialog/permission.go)<br>[internal/permission/permission.go](../../../../sources/opencode-ai__opencode/internal/permission/permission.go) |
| ci | 2 | [.github/workflows/build.yml](../../../../sources/opencode-ai__opencode/.github/workflows/build.yml)<br>[.github/workflows/release.yml](../../../../sources/opencode-ai__opencode/.github/workflows/release.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 2 | [README.md](../../../../sources/opencode-ai__opencode/README.md)<br>[cmd/schema/README.md](../../../../sources/opencode-ai__opencode/cmd/schema/README.md) |
| config | 1 | [go.mod](../../../../sources/opencode-ai__opencode/go.mod) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 4 | [internal/tui/theme/theme_test.go](../../../../sources/opencode-ai__opencode/internal/tui/theme/theme_test.go)<br>[internal/tui/components/dialog/custom_commands_test.go](../../../../sources/opencode-ai__opencode/internal/tui/components/dialog/custom_commands_test.go)<br>[internal/llm/tools/ls_test.go](../../../../sources/opencode-ai__opencode/internal/llm/tools/ls_test.go)<br>[internal/llm/prompt/prompt_test.go](../../../../sources/opencode-ai__opencode/internal/llm/prompt/prompt_test.go) |
| CI workflows | 2 | [.github/workflows/build.yml](../../../../sources/opencode-ai__opencode/.github/workflows/build.yml)<br>[.github/workflows/release.yml](../../../../sources/opencode-ai__opencode/.github/workflows/release.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 2 | [internal/tui/components/dialog/permission.go](../../../../sources/opencode-ai__opencode/internal/tui/components/dialog/permission.go)<br>[internal/permission/permission.go](../../../../sources/opencode-ai__opencode/internal/permission/permission.go) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | agent instruction files not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `internal/llm/agent/mcp-tools.go`, `internal/llm/tools/bash.go`, `internal/llm/tools/diagnostics.go`.
2. Trace execution through entrypoints: `main.go`, `cmd/schema/main.go`.
3. Map agent/tool runtime through: `internal/llm/tools/bash.go`, `internal/llm/tools/diagnostics.go`, `internal/llm/tools/edit.go`.
4. Inspect retrieval/memory/indexing through: `internal/db/embed.go`.
5. Verify behavior through test/eval files: `internal/tui/theme/theme_test.go`, `internal/tui/components/dialog/custom_commands_test.go`, `internal/llm/tools/ls_test.go`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Local clone structure analysis 162 files, 46 directories.. 핵심 구조 신호는 go.mod, README.md, LICENSE, openai, anthropic, mcp이며, deep-source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

mixed 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, license metadata missing입니다.
