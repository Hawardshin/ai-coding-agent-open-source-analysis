# trpc-group/trpc-agent-go Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

A Go framework for building production agent systems with graph workflows, tools, memory, A2A, AG-UI, MCP, evaluation, and observability.

## 요약

- 조사 단위: `sources/trpc-group__trpc-agent-go` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 3,780 files, 1,100 directories, depth score 132, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=tool/mcp/config_test.go, tool/mcp/config.go, tool/mcp/tool_test.go이고, 의존성 단서는 openai, mcp, opentelemetry, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | trpc-group/trpc-agent-go |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | Go |
| Stars | 1370 |
| Forks | 168 |
| License | none |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/trpc-group__trpc-agent-go](../../../../sources/trpc-group__trpc-agent-go) |
| Existing report | [reports/global-trending/repositories/trpc-group__trpc-agent-go.md](../../../global-trending/repositories/trpc-group__trpc-agent-go.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 3780 / 1100 |
| Max observed depth | 10 |
| Top directories | .github, .resource, agent, artifact, benchmark, codeexecutor, docs, evaluation, event, evolution, examples, graph, internal, knowledge, log, memory, model, openclaw, planner, plugin |
| Top extensions | .go: 2701, .md: 552, .mod: 99, .sum: 94, .json: 90, .png: 60, .sh: 29, .py: 23, .yaml: 20, .js: 19, .txt: 18, (none): 13 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| examples/tool | examples workspace | 10 |
| server | source boundary | 8 |
| examples/telemetry | examples workspace | 5 |
| docs | documentation surface | 4 |
| examples/toolpipe | examples workspace | 4 |
| examples/mcpbroker | examples workspace | 2 |
| examples/team | examples workspace | 2 |
| examples/thinking | examples workspace | 2 |
| examples/timeaware | examples workspace | 2 |
| examples/todo | examples workspace | 2 |
| examples/todoenforcer | examples workspace | 2 |
| examples/tokentracker | examples workspace | 2 |
| examples/toolcallid | examples workspace | 2 |
| examples/toolfilter | examples workspace | 2 |
| examples/toolinterrupt | examples workspace | 2 |
| examples/toolpolicy | examples workspace | 2 |
| examples/transfer | examples workspace | 2 |
| examples/usermessagerewriter | examples workspace | 2 |


## How It Runs

_No command surface extracted from root manifests._


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai |
| agentProtocols | mcp |
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
| mcp | [tool/mcp/config_test.go](../../../../sources/trpc-group__trpc-agent-go/tool/mcp/config_test.go) | mcp signal |
| mcp | [tool/mcp/config.go](../../../../sources/trpc-group__trpc-agent-go/tool/mcp/config.go) | mcp signal |
| mcp | [tool/mcp/tool_test.go](../../../../sources/trpc-group__trpc-agent-go/tool/mcp/tool_test.go) | mcp signal |
| mcp | [tool/mcp/tool.go](../../../../sources/trpc-group__trpc-agent-go/tool/mcp/tool.go) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/trpc-group__trpc-agent-go/AGENTS.md) | agentRuntime signal |
| agentRuntime | [tool/callbacks_test.go](../../../../sources/trpc-group__trpc-agent-go/tool/callbacks_test.go) | agentRuntime signal |
| agentRuntime | [tool/callbacks.go](../../../../sources/trpc-group__trpc-agent-go/tool/callbacks.go) | agentRuntime signal |
| agentRuntime | [tool/context_test.go](../../../../sources/trpc-group__trpc-agent-go/tool/context_test.go) | agentRuntime signal |
| entrypoints | [tool/mcpbroker/testdata/stdio_server/main.go](../../../../sources/trpc-group__trpc-agent-go/tool/mcpbroker/testdata/stdio_server/main.go) | entrypoints signal |
| entrypoints | [tool/mcp/e2e/test_server/main.go](../../../../sources/trpc-group__trpc-agent-go/tool/mcp/e2e/test_server/main.go) | entrypoints signal |
| entrypoints | [telemetry/semconv/trace/server.go](../../../../sources/trpc-group__trpc-agent-go/telemetry/semconv/trace/server.go) | entrypoints signal |
| entrypoints | [server/promptiter/server.go](../../../../sources/trpc-group__trpc-agent-go/server/promptiter/server.go) | entrypoints signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 301 | [tool/mcpbroker/testdata/stdio_server/main.go](../../../../sources/trpc-group__trpc-agent-go/tool/mcpbroker/testdata/stdio_server/main.go)<br>[tool/mcp/e2e/test_server/main.go](../../../../sources/trpc-group__trpc-agent-go/tool/mcp/e2e/test_server/main.go)<br>[telemetry/semconv/trace/server.go](../../../../sources/trpc-group__trpc-agent-go/telemetry/semconv/trace/server.go)<br>[server/promptiter/server.go](../../../../sources/trpc-group__trpc-agent-go/server/promptiter/server.go)<br>[server/openai/server.go](../../../../sources/trpc-group__trpc-agent-go/server/openai/server.go)<br>[server/evaluation/server.go](../../../../sources/trpc-group__trpc-agent-go/server/evaluation/server.go)<br>[server/a2a/server.go](../../../../sources/trpc-group__trpc-agent-go/server/a2a/server.go)<br>[openclaw/internal/gateway/server.go](../../../../sources/trpc-group__trpc-agent-go/openclaw/internal/gateway/server.go) |
| agentRuntime | 1041 | [AGENTS.md](../../../../sources/trpc-group__trpc-agent-go/AGENTS.md)<br>[tool/callbacks_test.go](../../../../sources/trpc-group__trpc-agent-go/tool/callbacks_test.go)<br>[tool/callbacks.go](../../../../sources/trpc-group__trpc-agent-go/tool/callbacks.go)<br>[tool/context_test.go](../../../../sources/trpc-group__trpc-agent-go/tool/context_test.go)<br>[tool/context.go](../../../../sources/trpc-group__trpc-agent-go/tool/context.go)<br>[tool/filter_test.go](../../../../sources/trpc-group__trpc-agent-go/tool/filter_test.go)<br>[tool/filter.go](../../../../sources/trpc-group__trpc-agent-go/tool/filter.go)<br>[tool/final_result.go](../../../../sources/trpc-group__trpc-agent-go/tool/final_result.go) |
| mcp | 25 | [tool/mcp/config_test.go](../../../../sources/trpc-group__trpc-agent-go/tool/mcp/config_test.go)<br>[tool/mcp/config.go](../../../../sources/trpc-group__trpc-agent-go/tool/mcp/config.go)<br>[tool/mcp/tool_test.go](../../../../sources/trpc-group__trpc-agent-go/tool/mcp/tool_test.go)<br>[tool/mcp/tool.go](../../../../sources/trpc-group__trpc-agent-go/tool/mcp/tool.go)<br>[tool/mcp/toolset_additional_test.go](../../../../sources/trpc-group__trpc-agent-go/tool/mcp/toolset_additional_test.go)<br>[tool/mcp/toolset_http_test.go](../../../../sources/trpc-group__trpc-agent-go/tool/mcp/toolset_http_test.go)<br>[tool/mcp/toolset_test.go](../../../../sources/trpc-group__trpc-agent-go/tool/mcp/toolset_test.go)<br>[tool/mcp/toolset.go](../../../../sources/trpc-group__trpc-agent-go/tool/mcp/toolset.go) |
| retrieval | 752 | [tool/agent/agent_tool_graph_runtime.go](../../../../sources/trpc-group__trpc-agent-go/tool/agent/agent_tool_graph_runtime.go)<br>[tool/agent/capability_search_index.go](../../../../sources/trpc-group__trpc-agent-go/tool/agent/capability_search_index.go)<br>[telemetry/semconv/trace/embedding.go](../../../../sources/trpc-group__trpc-agent-go/telemetry/semconv/trace/embedding.go)<br>[session/redis/internal/hashidx/user_session_index_test.go](../../../../sources/trpc-group__trpc-agent-go/session/redis/internal/hashidx/user_session_index_test.go)<br>[session/redis/internal/hashidx/user_session_index.go](../../../../sources/trpc-group__trpc-agent-go/session/redis/internal/hashidx/user_session_index.go)<br>[runner/runner_memory_test.go](../../../../sources/trpc-group__trpc-agent-go/runner/runner_memory_test.go)<br>[plugin/toolsearch/knowledge_searcher.go](../../../../sources/trpc-group__trpc-agent-go/plugin/toolsearch/knowledge_searcher.go)<br>[plugin/toolsearch/knowledge_tool_test.go](../../../../sources/trpc-group__trpc-agent-go/plugin/toolsearch/knowledge_tool_test.go) |
| spec | 8 | [tool/openapi/openapi_spec_test.go](../../../../sources/trpc-group__trpc-agent-go/tool/openapi/openapi_spec_test.go)<br>[tool/openapi/openapi_spec.go](../../../../sources/trpc-group__trpc-agent-go/tool/openapi/openapi_spec.go)<br>[internal/workspaceprep/requirement.go](../../../../sources/trpc-group__trpc-agent-go/internal/workspaceprep/requirement.go)<br>[examples/a2asubagent/agents/codecheck/spec.txt](../../../../sources/trpc-group__trpc-agent-go/examples/a2asubagent/agents/codecheck/spec.txt)<br>[examples/a2aadk/adk/requirements.txt](../../../../sources/trpc-group__trpc-agent-go/examples/a2aadk/adk/requirements.txt)<br>[docs/mkdocs/assets/requirements.txt](../../../../sources/trpc-group__trpc-agent-go/docs/mkdocs/assets/requirements.txt)<br>[docs/mkdocs/assets/img/component_architecture.svg](../../../../sources/trpc-group__trpc-agent-go/docs/mkdocs/assets/img/component_architecture.svg)<br>[docs/design/debuglog-plugin.md](../../../../sources/trpc-group__trpc-agent-go/docs/design/debuglog-plugin.md) |
| eval | 1416 | [tool/callbacks_test.go](../../../../sources/trpc-group__trpc-agent-go/tool/callbacks_test.go)<br>[tool/context_test.go](../../../../sources/trpc-group__trpc-agent-go/tool/context_test.go)<br>[tool/filter_test.go](../../../../sources/trpc-group__trpc-agent-go/tool/filter_test.go)<br>[tool/merge_test.go](../../../../sources/trpc-group__trpc-agent-go/tool/merge_test.go)<br>[tool/permission_test.go](../../../../sources/trpc-group__trpc-agent-go/tool/permission_test.go)<br>[tool/retry_test.go](../../../../sources/trpc-group__trpc-agent-go/tool/retry_test.go)<br>[tool/stream_preferences_test.go](../../../../sources/trpc-group__trpc-agent-go/tool/stream_preferences_test.go)<br>[tool/stream_test.go](../../../../sources/trpc-group__trpc-agent-go/tool/stream_test.go) |
| security | 114 | [tool/permission_test.go](../../../../sources/trpc-group__trpc-agent-go/tool/permission_test.go)<br>[tool/permission.go](../../../../sources/trpc-group__trpc-agent-go/tool/permission.go)<br>[tool/workspaceexec/workspace_exec_policy_test.go](../../../../sources/trpc-group__trpc-agent-go/tool/workspaceexec/workspace_exec_policy_test.go)<br>[telemetry/trace/span_attribute_policy_test.go](../../../../sources/trpc-group__trpc-agent-go/telemetry/trace/span_attribute_policy_test.go)<br>[telemetry/trace/span_attribute_policy.go](../../../../sources/trpc-group__trpc-agent-go/telemetry/trace/span_attribute_policy.go)<br>[session/internal/summary/policy.go](../../../../sources/trpc-group__trpc-agent-go/session/internal/summary/policy.go)<br>[plugin/guardrail/guardrail_test.go](../../../../sources/trpc-group__trpc-agent-go/plugin/guardrail/guardrail_test.go)<br>[plugin/guardrail/guardrail.go](../../../../sources/trpc-group__trpc-agent-go/plugin/guardrail/guardrail.go) |
| ci | 5 | [.github/workflows/cla.yml](../../../../sources/trpc-group__trpc-agent-go/.github/workflows/cla.yml)<br>[.github/workflows/deploy.yml](../../../../sources/trpc-group__trpc-agent-go/.github/workflows/deploy.yml)<br>[.github/workflows/module-sum-check.yml](../../../../sources/trpc-group__trpc-agent-go/.github/workflows/module-sum-check.yml)<br>[.github/workflows/openclaw-release.yml](../../../../sources/trpc-group__trpc-agent-go/.github/workflows/openclaw-release.yml)<br>[.github/workflows/prc.yml](../../../../sources/trpc-group__trpc-agent-go/.github/workflows/prc.yml) |
| container | 3 | [openclaw/examples/sandbox_service_execution/Dockerfile](../../../../sources/trpc-group__trpc-agent-go/openclaw/examples/sandbox_service_execution/Dockerfile)<br>[examples/telemetry/jaeger-prometheus/docker-compose.yaml](../../../../sources/trpc-group__trpc-agent-go/examples/telemetry/jaeger-prometheus/docker-compose.yaml)<br>[examples/callbacks/timer/docker-compose.yaml](../../../../sources/trpc-group__trpc-agent-go/examples/callbacks/timer/docker-compose.yaml) |
| instruction | 1 | [AGENTS.md](../../../../sources/trpc-group__trpc-agent-go/AGENTS.md) |
| docs | 512 | [README.md](../../../../sources/trpc-group__trpc-agent-go/README.md)<br>[README.zh_CN.md](../../../../sources/trpc-group__trpc-agent-go/README.zh_CN.md)<br>[tool/webfetch/README.md](../../../../sources/trpc-group__trpc-agent-go/tool/webfetch/README.md)<br>[openclaw/README.md](../../../../sources/trpc-group__trpc-agent-go/openclaw/README.md)<br>[openclaw/README.zh_CN.md](../../../../sources/trpc-group__trpc-agent-go/openclaw/README.zh_CN.md)<br>[openclaw/skills/README.md](../../../../sources/trpc-group__trpc-agent-go/openclaw/skills/README.md)<br>[openclaw/examples/stdin_chat/README.md](../../../../sources/trpc-group__trpc-agent-go/openclaw/examples/stdin_chat/README.md)<br>[openclaw/examples/sandbox_service_execution/README.md](../../../../sources/trpc-group__trpc-agent-go/openclaw/examples/sandbox_service_execution/README.md) |
| config | 109 | [go.mod](../../../../sources/trpc-group__trpc-agent-go/go.mod)<br>[tool/wikipedia/go.mod](../../../../sources/trpc-group__trpc-agent-go/tool/wikipedia/go.mod)<br>[tool/webfetch/httpfetch/go.mod](../../../../sources/trpc-group__trpc-agent-go/tool/webfetch/httpfetch/go.mod)<br>[tool/webfetch/geminifetch/go.mod](../../../../sources/trpc-group__trpc-agent-go/tool/webfetch/geminifetch/go.mod)<br>[tool/webfetch/claudefetch/go.mod](../../../../sources/trpc-group__trpc-agent-go/tool/webfetch/claudefetch/go.mod)<br>[tool/openapi/go.mod](../../../../sources/trpc-group__trpc-agent-go/tool/openapi/go.mod)<br>[tool/google/go.mod](../../../../sources/trpc-group__trpc-agent-go/tool/google/go.mod)<br>[tool/email/go.mod](../../../../sources/trpc-group__trpc-agent-go/tool/email/go.mod) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 1416 | [tool/callbacks_test.go](../../../../sources/trpc-group__trpc-agent-go/tool/callbacks_test.go)<br>[tool/context_test.go](../../../../sources/trpc-group__trpc-agent-go/tool/context_test.go)<br>[tool/filter_test.go](../../../../sources/trpc-group__trpc-agent-go/tool/filter_test.go)<br>[tool/merge_test.go](../../../../sources/trpc-group__trpc-agent-go/tool/merge_test.go)<br>[tool/permission_test.go](../../../../sources/trpc-group__trpc-agent-go/tool/permission_test.go)<br>[tool/retry_test.go](../../../../sources/trpc-group__trpc-agent-go/tool/retry_test.go) |
| CI workflows | 5 | [.github/workflows/cla.yml](../../../../sources/trpc-group__trpc-agent-go/.github/workflows/cla.yml)<br>[.github/workflows/deploy.yml](../../../../sources/trpc-group__trpc-agent-go/.github/workflows/deploy.yml)<br>[.github/workflows/module-sum-check.yml](../../../../sources/trpc-group__trpc-agent-go/.github/workflows/module-sum-check.yml)<br>[.github/workflows/openclaw-release.yml](../../../../sources/trpc-group__trpc-agent-go/.github/workflows/openclaw-release.yml)<br>[.github/workflows/prc.yml](../../../../sources/trpc-group__trpc-agent-go/.github/workflows/prc.yml) |
| Containers / deploy | 3 | [openclaw/examples/sandbox_service_execution/Dockerfile](../../../../sources/trpc-group__trpc-agent-go/openclaw/examples/sandbox_service_execution/Dockerfile)<br>[examples/telemetry/jaeger-prometheus/docker-compose.yaml](../../../../sources/trpc-group__trpc-agent-go/examples/telemetry/jaeger-prometheus/docker-compose.yaml)<br>[examples/callbacks/timer/docker-compose.yaml](../../../../sources/trpc-group__trpc-agent-go/examples/callbacks/timer/docker-compose.yaml) |
| Security / policy | 114 | [tool/permission_test.go](../../../../sources/trpc-group__trpc-agent-go/tool/permission_test.go)<br>[tool/permission.go](../../../../sources/trpc-group__trpc-agent-go/tool/permission.go)<br>[tool/workspaceexec/workspace_exec_policy_test.go](../../../../sources/trpc-group__trpc-agent-go/tool/workspaceexec/workspace_exec_policy_test.go)<br>[telemetry/trace/span_attribute_policy_test.go](../../../../sources/trpc-group__trpc-agent-go/telemetry/trace/span_attribute_policy_test.go)<br>[telemetry/trace/span_attribute_policy.go](../../../../sources/trpc-group__trpc-agent-go/telemetry/trace/span_attribute_policy.go)<br>[session/internal/summary/policy.go](../../../../sources/trpc-group__trpc-agent-go/session/internal/summary/policy.go) |
| Agent instructions | 1 | [AGENTS.md](../../../../sources/trpc-group__trpc-agent-go/AGENTS.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | many top-level directories; module boundaries need review |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `tool/mcp/config_test.go`, `tool/mcp/config.go`, `tool/mcp/tool_test.go`.
2. Trace execution through entrypoints: `tool/mcpbroker/testdata/stdio_server/main.go`, `tool/mcp/e2e/test_server/main.go`, `telemetry/semconv/trace/server.go`.
3. Map agent/tool runtime through: `AGENTS.md`, `tool/callbacks_test.go`, `tool/callbacks.go`.
4. Inspect retrieval/memory/indexing through: `tool/agent/agent_tool_graph_runtime.go`, `tool/agent/capability_search_index.go`, `telemetry/semconv/trace/embedding.go`.
5. Verify behavior through test/eval files: `tool/callbacks_test.go`, `tool/context_test.go`, `tool/filter_test.go`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 A Go framework for building production agent systems with graph workflows, tools, memory, A2A, AG UI, MCP, evaluation, a. 핵심 구조 신호는 Go, go.mod, README.md, AGENTS.md, LICENSE, openai이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
