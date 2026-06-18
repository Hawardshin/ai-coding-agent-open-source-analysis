# toss/apps-in-toss-ax Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

An AI-powered MCP/CLI toolkit for AppsInToss mini-app development, designed to assist the entire workflow from documentation and code examples to project scaffolding, building, and deployment

## 요약

- 조사 단위: `sources/toss__apps-in-toss-ax` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 56 files, 20 directories, depth score 91, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 mcp=pkg/mcp/completion_test.go, pkg/mcp/completion.go, pkg/mcp/instructions.go이고, 의존성 단서는 modelcontextprotocol, cobra, faiss, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | toss/apps-in-toss-ax |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | Go |
| Stars | 16 |
| Forks | 6 |
| License | none |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/toss__apps-in-toss-ax](../../../../sources/toss__apps-in-toss-ax) |
| Existing report | [reports/korea-trending/repositories/toss__apps-in-toss-ax.md](../../../korea-trending/repositories/toss__apps-in-toss-ax.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 56 / 20 |
| Max observed depth | 4 |
| Top directories | .agents, .github, cmd, internal, pkg, scripts, tools |
| Top extensions | .go: 41, .md: 5, .json: 2, (none): 2, .js: 1, .mod: 1, .rb: 1, .sum: 1, .yaml: 1, .yml: 1 |
| Source patterns | cli-first, agent/tool runtime, retrieval/vector path, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| .github | ci surface | 1 |
| cmd | source boundary | 1 |
| cmd/mcp.go | cmd workspace | 1 |
| internal | top-level component | 1 |
| pkg | top-level component | 1 |
| scripts | top-level component | 1 |
| tools | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | package.json | postinstall | node scripts/postinstall.js |
| utility | Makefile | .PHONY | make .PHONY |
| build | Makefile | build | make build |
| entrypoint | package.json bin | ax | bin/ax |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | modelcontextprotocol |
| agentFrameworks | none |
| vectorStores | faiss |
| modelRuntime | none |
| webRuntime | none |
| developerSurface | cobra |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [pkg/mcp/completion_test.go](../../../../sources/toss__apps-in-toss-ax/pkg/mcp/completion_test.go) | mcp signal |
| mcp | [pkg/mcp/completion.go](../../../../sources/toss__apps-in-toss-ax/pkg/mcp/completion.go) | mcp signal |
| mcp | [pkg/mcp/instructions.go](../../../../sources/toss__apps-in-toss-ax/pkg/mcp/instructions.go) | mcp signal |
| mcp | [pkg/mcp/instructions.md](../../../../sources/toss__apps-in-toss-ax/pkg/mcp/instructions.md) | mcp signal |
| agentRuntime | [tools/shared/github.go](../../../../sources/toss__apps-in-toss-ax/tools/shared/github.go) | agentRuntime signal |
| agentRuntime | [tools/publish/main_test.go](../../../../sources/toss__apps-in-toss-ax/tools/publish/main_test.go) | agentRuntime signal |
| agentRuntime | [tools/publish/main.go](../../../../sources/toss__apps-in-toss-ax/tools/publish/main.go) | agentRuntime signal |
| agentRuntime | [tools/publish/templates/ax.json](../../../../sources/toss__apps-in-toss-ax/tools/publish/templates/ax.json) | agentRuntime signal |
| entrypoints | [main.go](../../../../sources/toss__apps-in-toss-ax/main.go) | entrypoints signal |
| instruction | [CLAUDE.md](../../../../sources/toss__apps-in-toss-ax/CLAUDE.md) | instruction signal |
| config | [go.mod](../../../../sources/toss__apps-in-toss-ax/go.mod) | config signal |
| config | [Makefile](../../../../sources/toss__apps-in-toss-ax/Makefile) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 2 | [main.go](../../../../sources/toss__apps-in-toss-ax/main.go)<br>[tools/publish/main.go](../../../../sources/toss__apps-in-toss-ax/tools/publish/main.go) |
| agentRuntime | 11 | [tools/shared/github.go](../../../../sources/toss__apps-in-toss-ax/tools/shared/github.go)<br>[tools/publish/main_test.go](../../../../sources/toss__apps-in-toss-ax/tools/publish/main_test.go)<br>[tools/publish/main.go](../../../../sources/toss__apps-in-toss-ax/tools/publish/main.go)<br>[tools/publish/templates/ax.json](../../../../sources/toss__apps-in-toss-ax/tools/publish/templates/ax.json)<br>[tools/publish/templates/ax.rb](../../../../sources/toss__apps-in-toss-ax/tools/publish/templates/ax.rb)<br>[pkg/mcp/tools_get_doc.go](../../../../sources/toss__apps-in-toss-ax/pkg/mcp/tools_get_doc.go)<br>[pkg/mcp/tools_get_example.go](../../../../sources/toss__apps-in-toss-ax/pkg/mcp/tools_get_example.go)<br>[pkg/mcp/tools_list_examples.go](../../../../sources/toss__apps-in-toss-ax/pkg/mcp/tools_list_examples.go) |
| mcp | 16 | [pkg/mcp/completion_test.go](../../../../sources/toss__apps-in-toss-ax/pkg/mcp/completion_test.go)<br>[pkg/mcp/completion.go](../../../../sources/toss__apps-in-toss-ax/pkg/mcp/completion.go)<br>[pkg/mcp/instructions.go](../../../../sources/toss__apps-in-toss-ax/pkg/mcp/instructions.go)<br>[pkg/mcp/instructions.md](../../../../sources/toss__apps-in-toss-ax/pkg/mcp/instructions.md)<br>[pkg/mcp/lazy_searcher_test.go](../../../../sources/toss__apps-in-toss-ax/pkg/mcp/lazy_searcher_test.go)<br>[pkg/mcp/mcp.go](../../../../sources/toss__apps-in-toss-ax/pkg/mcp/mcp.go)<br>[pkg/mcp/prompts_miniapp_action_plan.go](../../../../sources/toss__apps-in-toss-ax/pkg/mcp/prompts_miniapp_action_plan.go)<br>[pkg/mcp/prompts_miniapp_action_plan.md](../../../../sources/toss__apps-in-toss-ax/pkg/mcp/prompts_miniapp_action_plan.md) |
| retrieval | 0 | not obvious |
| spec | 0 | not obvious |
| eval | 6 | [tools/publish/main_test.go](../../../../sources/toss__apps-in-toss-ax/tools/publish/main_test.go)<br>[pkg/search/search_test.go](../../../../sources/toss__apps-in-toss-ax/pkg/search/search_test.go)<br>[pkg/search/searcher_test.go](../../../../sources/toss__apps-in-toss-ax/pkg/search/searcher_test.go)<br>[pkg/mcp/completion_test.go](../../../../sources/toss__apps-in-toss-ax/pkg/mcp/completion_test.go)<br>[pkg/mcp/lazy_searcher_test.go](../../../../sources/toss__apps-in-toss-ax/pkg/mcp/lazy_searcher_test.go)<br>[pkg/llms/parser_test.go](../../../../sources/toss__apps-in-toss-ax/pkg/llms/parser_test.go) |
| security | 0 | not obvious |
| ci | 1 | [.github/workflows/release.yml](../../../../sources/toss__apps-in-toss-ax/.github/workflows/release.yml) |
| container | 0 | not obvious |
| instruction | 1 | [CLAUDE.md](../../../../sources/toss__apps-in-toss-ax/CLAUDE.md) |
| docs | 2 | [README.md](../../../../sources/toss__apps-in-toss-ax/README.md)<br>[pkg/docs/docs.go](../../../../sources/toss__apps-in-toss-ax/pkg/docs/docs.go) |
| config | 3 | [go.mod](../../../../sources/toss__apps-in-toss-ax/go.mod)<br>[Makefile](../../../../sources/toss__apps-in-toss-ax/Makefile)<br>[package.json](../../../../sources/toss__apps-in-toss-ax/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 6 | [tools/publish/main_test.go](../../../../sources/toss__apps-in-toss-ax/tools/publish/main_test.go)<br>[pkg/search/search_test.go](../../../../sources/toss__apps-in-toss-ax/pkg/search/search_test.go)<br>[pkg/search/searcher_test.go](../../../../sources/toss__apps-in-toss-ax/pkg/search/searcher_test.go)<br>[pkg/mcp/completion_test.go](../../../../sources/toss__apps-in-toss-ax/pkg/mcp/completion_test.go)<br>[pkg/mcp/lazy_searcher_test.go](../../../../sources/toss__apps-in-toss-ax/pkg/mcp/lazy_searcher_test.go)<br>[pkg/llms/parser_test.go](../../../../sources/toss__apps-in-toss-ax/pkg/llms/parser_test.go) |
| CI workflows | 1 | [.github/workflows/release.yml](../../../../sources/toss__apps-in-toss-ax/.github/workflows/release.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 1 | [CLAUDE.md](../../../../sources/toss__apps-in-toss-ax/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `pkg/mcp/completion_test.go`, `pkg/mcp/completion.go`, `pkg/mcp/instructions.go`.
2. Trace execution through entrypoints: `main.go`, `tools/publish/main.go`.
3. Map agent/tool runtime through: `tools/shared/github.go`, `tools/publish/main_test.go`, `tools/publish/main.go`.
4. Verify behavior through test/eval files: `tools/publish/main_test.go`, `pkg/search/search_test.go`, `pkg/search/searcher_test.go`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 An AI powered MCP/CLI toolkit for AppsInToss mini app development, designed to assist the entire workflow from documenta. 핵심 구조 신호는 Go, package.json, go.mod, Makefile, README.md, CLAUDE.md이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
