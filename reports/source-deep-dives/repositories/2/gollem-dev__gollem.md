# gollem-dev/gollem Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Go framework for agentic AI app with MCP and built-in tools

## 요약

- 조사 단위: `sources/gollem-dev__gollem` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 192 files, 44 directories, depth score 101, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 mcp=mcp/export_test.go, mcp/mcp_test.go, mcp/mcp.go이고, 의존성 단서는 openai, anthropic, modelcontextprotocol, opentelemetry, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | gollem-dev/gollem |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Go |
| Stars | 190 |
| Forks | 11 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/gollem-dev__gollem](../../../../sources/gollem-dev__gollem) |
| Existing report | [reports/global-trending/repositories/gollem-dev__gollem.md](../../../global-trending/repositories/gollem-dev__gollem.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 192 / 44 |
| Max observed depth | 4 |
| Top directories | .claude, .github, docs, examples, internal, llm, mcp, middleware, mock, strategy, templates, testdata, trace |
| Top extensions | .go: 142, .md: 32, .yml: 7, .png: 2, (none): 2, .gif: 1, .jpg: 1, .json: 1, .mod: 1, .pdf: 1, .sh: 1, .sum: 1 |
| Source patterns | cli-first, agent/tool runtime, retrieval/vector path, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 17 |
| examples/embedding | examples workspace | 2 |
| examples/json_schema | examples workspace | 2 |
| examples/mcp | examples workspace | 2 |
| examples/subagent_middleware | examples workspace | 2 |
| examples/tools | examples workspace | 2 |
| .github | ci surface | 1 |
| examples | top-level component | 1 |
| examples/basic | examples workspace | 1 |
| examples/chat | examples workspace | 1 |
| examples/history | examples workspace | 1 |
| examples/query | examples workspace | 1 |
| examples/README.md | examples workspace | 1 |
| examples/reflexion | examples workspace | 1 |
| examples/simple | examples workspace | 1 |
| examples/tracing | examples workspace | 1 |
| internal | top-level component | 1 |
| llm | top-level component | 1 |


## How It Runs

_No command surface extracted from root manifests._


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai, anthropic |
| agentProtocols | modelcontextprotocol |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | none |
| developerSurface | none |
| observability | opentelemetry |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [mcp/export_test.go](../../../../sources/gollem-dev__gollem/mcp/export_test.go) | mcp signal |
| mcp | [mcp/mcp_test.go](../../../../sources/gollem-dev__gollem/mcp/mcp_test.go) | mcp signal |
| mcp | [mcp/mcp.go](../../../../sources/gollem-dev__gollem/mcp/mcp.go) | mcp signal |
| mcp | [examples/mcp/main.go](../../../../sources/gollem-dev__gollem/examples/mcp/main.go) | mcp signal |
| agentRuntime | [tool_test.go](../../../../sources/gollem-dev__gollem/tool_test.go) | agentRuntime signal |
| agentRuntime | [tool.go](../../../../sources/gollem-dev__gollem/tool.go) | agentRuntime signal |
| agentRuntime | [templates/executor_prompt.md](../../../../sources/gollem-dev__gollem/templates/executor_prompt.md) | agentRuntime signal |
| agentRuntime | [templates/planner_prompt.md](../../../../sources/gollem-dev__gollem/templates/planner_prompt.md) | agentRuntime signal |
| entrypoints | [examples/tracing/main.go](../../../../sources/gollem-dev__gollem/examples/tracing/main.go) | entrypoints signal |
| entrypoints | [examples/tools/main.go](../../../../sources/gollem-dev__gollem/examples/tools/main.go) | entrypoints signal |
| entrypoints | [examples/subagent_middleware/main.go](../../../../sources/gollem-dev__gollem/examples/subagent_middleware/main.go) | entrypoints signal |
| entrypoints | [examples/simple/main.go](../../../../sources/gollem-dev__gollem/examples/simple/main.go) | entrypoints signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 12 | [examples/tracing/main.go](../../../../sources/gollem-dev__gollem/examples/tracing/main.go)<br>[examples/tools/main.go](../../../../sources/gollem-dev__gollem/examples/tools/main.go)<br>[examples/subagent_middleware/main.go](../../../../sources/gollem-dev__gollem/examples/subagent_middleware/main.go)<br>[examples/simple/main.go](../../../../sources/gollem-dev__gollem/examples/simple/main.go)<br>[examples/reflexion/main.go](../../../../sources/gollem-dev__gollem/examples/reflexion/main.go)<br>[examples/query/main.go](../../../../sources/gollem-dev__gollem/examples/query/main.go)<br>[examples/mcp/main.go](../../../../sources/gollem-dev__gollem/examples/mcp/main.go)<br>[examples/json_schema/main.go](../../../../sources/gollem-dev__gollem/examples/json_schema/main.go) |
| agentRuntime | 9 | [tool_test.go](../../../../sources/gollem-dev__gollem/tool_test.go)<br>[tool.go](../../../../sources/gollem-dev__gollem/tool.go)<br>[templates/executor_prompt.md](../../../../sources/gollem-dev__gollem/templates/executor_prompt.md)<br>[templates/planner_prompt.md](../../../../sources/gollem-dev__gollem/templates/planner_prompt.md)<br>[strategy/reflexion/memory_test.go](../../../../sources/gollem-dev__gollem/strategy/reflexion/memory_test.go)<br>[strategy/reflexion/memory.go](../../../../sources/gollem-dev__gollem/strategy/reflexion/memory.go)<br>[examples/tools/main.go](../../../../sources/gollem-dev__gollem/examples/tools/main.go)<br>[docs/tools.md](../../../../sources/gollem-dev__gollem/docs/tools.md) |
| mcp | 5 | [mcp/export_test.go](../../../../sources/gollem-dev__gollem/mcp/export_test.go)<br>[mcp/mcp_test.go](../../../../sources/gollem-dev__gollem/mcp/mcp_test.go)<br>[mcp/mcp.go](../../../../sources/gollem-dev__gollem/mcp/mcp.go)<br>[examples/mcp/main.go](../../../../sources/gollem-dev__gollem/examples/mcp/main.go)<br>[docs/mcp.md](../../../../sources/gollem-dev__gollem/docs/mcp.md) |
| retrieval | 7 | [strategy/reflexion/memory_test.go](../../../../sources/gollem-dev__gollem/strategy/reflexion/memory_test.go)<br>[strategy/reflexion/memory.go](../../../../sources/gollem-dev__gollem/strategy/reflexion/memory.go)<br>[llm/openai/embedding_test.go](../../../../sources/gollem-dev__gollem/llm/openai/embedding_test.go)<br>[llm/openai/embedding.go](../../../../sources/gollem-dev__gollem/llm/openai/embedding.go)<br>[llm/gemini/embedding_test.go](../../../../sources/gollem-dev__gollem/llm/gemini/embedding_test.go)<br>[llm/claude/embedding.go](../../../../sources/gollem-dev__gollem/llm/claude/embedding.go)<br>[examples/embedding/main.go](../../../../sources/gollem-dev__gollem/examples/embedding/main.go) |
| spec | 0 | not obvious |
| eval | 80 | [execute_response_test.go](../../../../sources/gollem-dev__gollem/execute_response_test.go)<br>[export_test.go](../../../../sources/gollem-dev__gollem/export_test.go)<br>[generate_test.go](../../../../sources/gollem-dev__gollem/generate_test.go)<br>[gollem_test.go](../../../../sources/gollem-dev__gollem/gollem_test.go)<br>[history_test.go](../../../../sources/gollem-dev__gollem/history_test.go)<br>[llm_test.go](../../../../sources/gollem-dev__gollem/llm_test.go)<br>[message_test.go](../../../../sources/gollem-dev__gollem/message_test.go)<br>[query_test.go](../../../../sources/gollem-dev__gollem/query_test.go) |
| security | 0 | not obvious |
| ci | 5 | [.github/workflows/gosec.yml](../../../../sources/gollem-dev__gollem/.github/workflows/gosec.yml)<br>[.github/workflows/integrity.yml](../../../../sources/gollem-dev__gollem/.github/workflows/integrity.yml)<br>[.github/workflows/lint.yml](../../../../sources/gollem-dev__gollem/.github/workflows/lint.yml)<br>[.github/workflows/test.yml](../../../../sources/gollem-dev__gollem/.github/workflows/test.yml)<br>[.github/workflows/trivy.yml](../../../../sources/gollem-dev__gollem/.github/workflows/trivy.yml) |
| container | 0 | not obvious |
| instruction | 1 | [CLAUDE.md](../../../../sources/gollem-dev__gollem/CLAUDE.md) |
| docs | 21 | [README.md](../../../../sources/gollem-dev__gollem/README.md)<br>[strategy/reflexion/README.md](../../../../sources/gollem-dev__gollem/strategy/reflexion/README.md)<br>[strategy/react/README.md](../../../../sources/gollem-dev__gollem/strategy/react/README.md)<br>[strategy/planexec/README.md](../../../../sources/gollem-dev__gollem/strategy/planexec/README.md)<br>[examples/README.md](../../../../sources/gollem-dev__gollem/examples/README.md)<br>[examples/subagent_middleware/README.md](../../../../sources/gollem-dev__gollem/examples/subagent_middleware/README.md)<br>[examples/json_schema/README.md](../../../../sources/gollem-dev__gollem/examples/json_schema/README.md)<br>[docs/debugging.md](../../../../sources/gollem-dev__gollem/docs/debugging.md) |
| config | 1 | [go.mod](../../../../sources/gollem-dev__gollem/go.mod) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 80 | [execute_response_test.go](../../../../sources/gollem-dev__gollem/execute_response_test.go)<br>[export_test.go](../../../../sources/gollem-dev__gollem/export_test.go)<br>[generate_test.go](../../../../sources/gollem-dev__gollem/generate_test.go)<br>[gollem_test.go](../../../../sources/gollem-dev__gollem/gollem_test.go)<br>[history_test.go](../../../../sources/gollem-dev__gollem/history_test.go)<br>[llm_test.go](../../../../sources/gollem-dev__gollem/llm_test.go) |
| CI workflows | 5 | [.github/workflows/gosec.yml](../../../../sources/gollem-dev__gollem/.github/workflows/gosec.yml)<br>[.github/workflows/integrity.yml](../../../../sources/gollem-dev__gollem/.github/workflows/integrity.yml)<br>[.github/workflows/lint.yml](../../../../sources/gollem-dev__gollem/.github/workflows/lint.yml)<br>[.github/workflows/test.yml](../../../../sources/gollem-dev__gollem/.github/workflows/test.yml)<br>[.github/workflows/trivy.yml](../../../../sources/gollem-dev__gollem/.github/workflows/trivy.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 1 | [CLAUDE.md](../../../../sources/gollem-dev__gollem/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `mcp/export_test.go`, `mcp/mcp_test.go`, `mcp/mcp.go`.
2. Trace execution through entrypoints: `examples/tracing/main.go`, `examples/tools/main.go`, `examples/subagent_middleware/main.go`.
3. Map agent/tool runtime through: `tool_test.go`, `tool.go`, `templates/executor_prompt.md`.
4. Inspect retrieval/memory/indexing through: `strategy/reflexion/memory_test.go`, `strategy/reflexion/memory.go`, `llm/openai/embedding_test.go`.
5. Verify behavior through test/eval files: `execute_response_test.go`, `export_test.go`, `generate_test.go`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Go framework for agentic AI app with MCP and built in tools. 핵심 구조 신호는 Go, go.mod, README.md, CLAUDE.md, LICENSE, openai이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
