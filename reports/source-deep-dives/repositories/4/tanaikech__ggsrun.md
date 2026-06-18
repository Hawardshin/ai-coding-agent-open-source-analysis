# tanaikech/ggsrun Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

High-performance Google Drive CLI and Model Context Protocol (MCP) Server for LLM/AI agents (v5.3.2). Natively execute Apps Script (GAS) dynamically, automate conflict policies, recursive transfer, and manage Drive infrastructure.

## 요약

- 조사 단위: `sources/tanaikech__ggsrun` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 61 files, 7 directories, depth score 75, key references 6개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=internal/app/handler_mcp.go이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 6개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | tanaikech/ggsrun |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Go |
| Stars | 166 |
| Forks | 18 |
| License | none |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/tanaikech__ggsrun](../../../../sources/tanaikech__ggsrun) |
| Existing report | [reports/global-trending/repositories/tanaikech__ggsrun.md](../../../global-trending/repositories/tanaikech__ggsrun.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 61 / 7 |
| Max observed depth | 3 |
| Top directories | help, internal, server |
| Top extensions | .go: 36, .gif: 8, .png: 5, .md: 4, .gs: 2, .jpg: 2, (none): 2, .mod: 1, .sum: 1 |
| Source patterns | cli-first, api/server, agent/tool runtime, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| server | source boundary | 4 |
| help | top-level component | 1 |
| internal | top-level component | 1 |


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
| mcp | [internal/app/handler_mcp.go](../../../../sources/tanaikech__ggsrun/internal/app/handler_mcp.go) | mcp signal |
| entrypoints | [main.go](../../../../sources/tanaikech__ggsrun/main.go) | entrypoints signal |
| entrypoints | [server/server.gs](../../../../sources/tanaikech__ggsrun/server/server.gs) | entrypoints signal |
| config | [go.mod](../../../../sources/tanaikech__ggsrun/go.mod) | config signal |
| eval | [server/server_test.gs](../../../../sources/tanaikech__ggsrun/server/server_test.gs) | eval support |
| eval | [internal/tui/fd_test.go](../../../../sources/tanaikech__ggsrun/internal/tui/fd_test.go) | eval support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 2 | [main.go](../../../../sources/tanaikech__ggsrun/main.go)<br>[server/server.gs](../../../../sources/tanaikech__ggsrun/server/server.gs) |
| agentRuntime | 0 | not obvious |
| mcp | 1 | [internal/app/handler_mcp.go](../../../../sources/tanaikech__ggsrun/internal/app/handler_mcp.go) |
| retrieval | 0 | not obvious |
| spec | 0 | not obvious |
| eval | 3 | [server/server_test.gs](../../../../sources/tanaikech__ggsrun/server/server_test.gs)<br>[internal/tui/fd_test.go](../../../../sources/tanaikech__ggsrun/internal/tui/fd_test.go)<br>[internal/app/conflict_test.go](../../../../sources/tanaikech__ggsrun/internal/app/conflict_test.go) |
| security | 1 | [internal/app/oauth.go](../../../../sources/tanaikech__ggsrun/internal/app/oauth.go) |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 9 | [README.md](../../../../sources/tanaikech__ggsrun/README.md)<br>[server/README.md](../../../../sources/tanaikech__ggsrun/server/README.md)<br>[help/README.md](../../../../sources/tanaikech__ggsrun/help/README.md)<br>[help/images/readme_Flow_exe1.png](../../../../sources/tanaikech__ggsrun/help/images/readme_Flow_exe1.png)<br>[help/images/readme_Flow_exe2.png](../../../../sources/tanaikech__ggsrun/help/images/readme_Flow_exe2.png)<br>[help/images/readme_flow.png](../../../../sources/tanaikech__ggsrun/help/images/readme_flow.png)<br>[help/images/readme_sheet.png](../../../../sources/tanaikech__ggsrun/help/images/readme_sheet.png)<br>[help/images/readme_sublimedemo.gif](../../../../sources/tanaikech__ggsrun/help/images/readme_sublimedemo.gif) |
| config | 1 | [go.mod](../../../../sources/tanaikech__ggsrun/go.mod) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 3 | [server/server_test.gs](../../../../sources/tanaikech__ggsrun/server/server_test.gs)<br>[internal/tui/fd_test.go](../../../../sources/tanaikech__ggsrun/internal/tui/fd_test.go)<br>[internal/app/conflict_test.go](../../../../sources/tanaikech__ggsrun/internal/app/conflict_test.go) |
| CI workflows | 0 | not obvious |
| Containers / deploy | 0 | not obvious |
| Security / policy | 1 | [internal/app/oauth.go](../../../../sources/tanaikech__ggsrun/internal/app/oauth.go) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | CI workflow path not obvious; container/deploy path not obvious |
| security | agent instruction files not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `internal/app/handler_mcp.go`, `main.go`, `server/server.gs`.
2. Trace execution through entrypoints: `main.go`, `server/server.gs`.
3. Verify behavior through test/eval files: `server/server_test.gs`, `internal/tui/fd_test.go`, `internal/app/conflict_test.go`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 High performance Google Drive CLI and Model Context Protocol MCP Server for LLM/AI agents v5.3.2 . Natively execute Apps. 핵심 구조 신호는 Go, go.mod, README.md, docs이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, ci signal not obvious, license metadata missing, needs deeper structural scan입니다.
