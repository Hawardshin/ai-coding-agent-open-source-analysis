# mark3labs/mcp-go Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

A Go implementation of the Model Context Protocol (MCP), enabling seamless integration between LLM applications and external data sources and tools.

## 요약

- 조사 단위: `sources/mark3labs__mcp-go` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 265 files, 45 directories, depth score 112, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=mcp/base_metadata_test.go, mcp/consts.go, mcp/content_benchmark_test.go이고, 의존성 단서는 mcp, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | mark3labs/mcp-go |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Go |
| Stars | 8809 |
| Forks | 844 |
| License | none |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/mark3labs__mcp-go](../../../../sources/mark3labs__mcp-go) |
| Existing report | [reports/global-trending/repositories/mark3labs__mcp-go.md](../../../global-trending/repositories/mark3labs__mcp-go.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 265 / 45 |
| Max observed depth | 5 |
| Top directories | .github, .kit, client, e2e, examples, mcp, mcptest, otel, server, testdata, tracing, www |
| Top extensions | .go: 188, .md: 30, .mdx: 25, .yml: 6, (none): 3, .json: 2, .mod: 2, .png: 2, .sum: 2, .tmpl: 2, .css: 1, .lock: 1 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| server | source boundary | 45 |
| client | source boundary | 10 |
| examples/oauth_client | examples workspace | 4 |
| examples/inprocess_sampling | examples workspace | 2 |
| examples/sampling_client | examples workspace | 2 |
| examples/sampling_http_client | examples workspace | 2 |
| examples/sampling_http_server | examples workspace | 2 |
| examples/sampling_server | examples workspace | 2 |
| examples/structured_input_and_output | examples workspace | 2 |
| .github | ci surface | 1 |
| e2e | validation surface | 1 |
| examples | top-level component | 1 |
| examples/custom_context | examples workspace | 1 |
| examples/dynamic_path | examples workspace | 1 |
| examples/elicitation | examples workspace | 1 |
| examples/everything | examples workspace | 1 |
| examples/filesystem_stdio_client | examples workspace | 1 |
| examples/in_process | examples workspace | 1 |


## How It Runs

_No command surface extracted from root manifests._


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
| mcp | [mcp/base_metadata_test.go](../../../../sources/mark3labs__mcp-go/mcp/base_metadata_test.go) | mcp signal |
| mcp | [mcp/consts.go](../../../../sources/mark3labs__mcp-go/mcp/consts.go) | mcp signal |
| mcp | [mcp/content_benchmark_test.go](../../../../sources/mark3labs__mcp-go/mcp/content_benchmark_test.go) | mcp signal |
| mcp | [mcp/elicitation_test.go](../../../../sources/mark3labs__mcp-go/mcp/elicitation_test.go) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/mark3labs__mcp-go/AGENTS.md) | agentRuntime signal |
| agentRuntime | [www/docs/pages/servers/tools.mdx](../../../../sources/mark3labs__mcp-go/www/docs/pages/servers/tools.mdx) | agentRuntime signal |
| agentRuntime | [server/hooks.go](../../../../sources/mark3labs__mcp-go/server/hooks.go) | agentRuntime signal |
| agentRuntime | [server/tool_filter_call_test.go](../../../../sources/mark3labs__mcp-go/server/tool_filter_call_test.go) | agentRuntime signal |
| entrypoints | [server/server.go](../../../../sources/mark3labs__mcp-go/server/server.go) | entrypoints signal |
| entrypoints | [server/internal/gen/main.go](../../../../sources/mark3labs__mcp-go/server/internal/gen/main.go) | entrypoints signal |
| entrypoints | [otel/example/main.go](../../../../sources/mark3labs__mcp-go/otel/example/main.go) | entrypoints signal |
| entrypoints | [examples/typed_tools/main.go](../../../../sources/mark3labs__mcp-go/examples/typed_tools/main.go) | entrypoints signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 23 | [server/server.go](../../../../sources/mark3labs__mcp-go/server/server.go)<br>[server/internal/gen/main.go](../../../../sources/mark3labs__mcp-go/server/internal/gen/main.go)<br>[otel/example/main.go](../../../../sources/mark3labs__mcp-go/otel/example/main.go)<br>[examples/typed_tools/main.go](../../../../sources/mark3labs__mcp-go/examples/typed_tools/main.go)<br>[examples/task_tool/main.go](../../../../sources/mark3labs__mcp-go/examples/task_tool/main.go)<br>[examples/structured_input_and_output/main.go](../../../../sources/mark3labs__mcp-go/examples/structured_input_and_output/main.go)<br>[examples/simple_client/main.go](../../../../sources/mark3labs__mcp-go/examples/simple_client/main.go)<br>[examples/sampling_server/main.go](../../../../sources/mark3labs__mcp-go/examples/sampling_server/main.go) |
| agentRuntime | 10 | [AGENTS.md](../../../../sources/mark3labs__mcp-go/AGENTS.md)<br>[www/docs/pages/servers/tools.mdx](../../../../sources/mark3labs__mcp-go/www/docs/pages/servers/tools.mdx)<br>[server/hooks.go](../../../../sources/mark3labs__mcp-go/server/hooks.go)<br>[server/tool_filter_call_test.go](../../../../sources/mark3labs__mcp-go/server/tool_filter_call_test.go)<br>[server/internal/gen/hooks.go.tmpl](../../../../sources/mark3labs__mcp-go/server/internal/gen/hooks.go.tmpl)<br>[mcp/tools_additional_test.go](../../../../sources/mark3labs__mcp-go/mcp/tools_additional_test.go)<br>[mcp/tools_defer_loading_test.go](../../../../sources/mark3labs__mcp-go/mcp/tools_defer_loading_test.go)<br>[mcp/tools_properties_test.go](../../../../sources/mark3labs__mcp-go/mcp/tools_properties_test.go) |
| mcp | 32 | [mcp/base_metadata_test.go](../../../../sources/mark3labs__mcp-go/mcp/base_metadata_test.go)<br>[mcp/consts.go](../../../../sources/mark3labs__mcp-go/mcp/consts.go)<br>[mcp/content_benchmark_test.go](../../../../sources/mark3labs__mcp-go/mcp/content_benchmark_test.go)<br>[mcp/elicitation_test.go](../../../../sources/mark3labs__mcp-go/mcp/elicitation_test.go)<br>[mcp/elicitation_validation_test.go](../../../../sources/mark3labs__mcp-go/mcp/elicitation_validation_test.go)<br>[mcp/error_unmarshal_test.go](../../../../sources/mark3labs__mcp-go/mcp/error_unmarshal_test.go)<br>[mcp/errors_additional_test.go](../../../../sources/mark3labs__mcp-go/mcp/errors_additional_test.go)<br>[mcp/errors_test.go](../../../../sources/mark3labs__mcp-go/mcp/errors_test.go) |
| retrieval | 4 | [www/docs/pages/index.mdx](../../../../sources/mark3labs__mcp-go/www/docs/pages/index.mdx)<br>[www/docs/pages/transports/index.mdx](../../../../sources/mark3labs__mcp-go/www/docs/pages/transports/index.mdx)<br>[www/docs/pages/servers/index.mdx](../../../../sources/mark3labs__mcp-go/www/docs/pages/servers/index.mdx)<br>[www/docs/pages/clients/index.mdx](../../../../sources/mark3labs__mcp-go/www/docs/pages/clients/index.mdx) |
| spec | 0 | not obvious |
| eval | 100 | [tracing/tracing_test.go](../../../../sources/mark3labs__mcp-go/tracing/tracing_test.go)<br>[tracing/tracing.go](../../../../sources/mark3labs__mcp-go/tracing/tracing.go)<br>[server/client_info_store_test.go](../../../../sources/mark3labs__mcp-go/server/client_info_store_test.go)<br>[server/elicitation_test.go](../../../../sources/mark3labs__mcp-go/server/elicitation_test.go)<br>[server/http_cors_test.go](../../../../sources/mark3labs__mcp-go/server/http_cors_test.go)<br>[server/input_validation_test.go](../../../../sources/mark3labs__mcp-go/server/input_validation_test.go)<br>[server/logger_test.go](../../../../sources/mark3labs__mcp-go/server/logger_test.go)<br>[server/output_validation_test.go](../../../../sources/mark3labs__mcp-go/server/output_validation_test.go) |
| security | 13 | [SECURITY.md](../../../../sources/mark3labs__mcp-go/SECURITY.md)<br>[examples/oauth_client/main.go](../../../../sources/mark3labs__mcp-go/examples/oauth_client/main.go)<br>[examples/oauth_client/README.md](../../../../sources/mark3labs__mcp-go/examples/oauth_client/README.md)<br>[client/oauth_test.go](../../../../sources/mark3labs__mcp-go/client/oauth_test.go)<br>[client/oauth.go](../../../../sources/mark3labs__mcp-go/client/oauth.go)<br>[client/transport/oauth_nil_metadata_test.go](../../../../sources/mark3labs__mcp-go/client/transport/oauth_nil_metadata_test.go)<br>[client/transport/oauth_test.go](../../../../sources/mark3labs__mcp-go/client/transport/oauth_test.go)<br>[client/transport/oauth_utils_test.go](../../../../sources/mark3labs__mcp-go/client/transport/oauth_utils_test.go) |
| ci | 4 | [.github/workflows/ci.yml](../../../../sources/mark3labs__mcp-go/.github/workflows/ci.yml)<br>[.github/workflows/golangci-lint.yml](../../../../sources/mark3labs__mcp-go/.github/workflows/golangci-lint.yml)<br>[.github/workflows/pages.yml](../../../../sources/mark3labs__mcp-go/.github/workflows/pages.yml)<br>[.github/workflows/release.yml](../../../../sources/mark3labs__mcp-go/.github/workflows/release.yml) |
| container | 0 | not obvious |
| instruction | 1 | [AGENTS.md](../../../../sources/mark3labs__mcp-go/AGENTS.md) |
| docs | 39 | [README.md](../../../../sources/mark3labs__mcp-go/README.md)<br>[www/README.md](../../../../sources/mark3labs__mcp-go/www/README.md)<br>[www/docs/styles.css](../../../../sources/mark3labs__mcp-go/www/docs/styles.css)<br>[www/docs/public/logo.png](../../../../sources/mark3labs__mcp-go/www/docs/public/logo.png)<br>[www/docs/pages/core-concepts.mdx](../../../../sources/mark3labs__mcp-go/www/docs/pages/core-concepts.mdx)<br>[www/docs/pages/getting-started.mdx](../../../../sources/mark3labs__mcp-go/www/docs/pages/getting-started.mdx)<br>[www/docs/pages/index.mdx](../../../../sources/mark3labs__mcp-go/www/docs/pages/index.mdx)<br>[www/docs/pages/quick-start.mdx](../../../../sources/mark3labs__mcp-go/www/docs/pages/quick-start.mdx) |
| config | 4 | [go.mod](../../../../sources/mark3labs__mcp-go/go.mod)<br>[www/package.json](../../../../sources/mark3labs__mcp-go/www/package.json)<br>[www/tsconfig.json](../../../../sources/mark3labs__mcp-go/www/tsconfig.json)<br>[otel/go.mod](../../../../sources/mark3labs__mcp-go/otel/go.mod) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 100 | [tracing/tracing_test.go](../../../../sources/mark3labs__mcp-go/tracing/tracing_test.go)<br>[tracing/tracing.go](../../../../sources/mark3labs__mcp-go/tracing/tracing.go)<br>[server/client_info_store_test.go](../../../../sources/mark3labs__mcp-go/server/client_info_store_test.go)<br>[server/elicitation_test.go](../../../../sources/mark3labs__mcp-go/server/elicitation_test.go)<br>[server/http_cors_test.go](../../../../sources/mark3labs__mcp-go/server/http_cors_test.go)<br>[server/input_validation_test.go](../../../../sources/mark3labs__mcp-go/server/input_validation_test.go) |
| CI workflows | 4 | [.github/workflows/ci.yml](../../../../sources/mark3labs__mcp-go/.github/workflows/ci.yml)<br>[.github/workflows/golangci-lint.yml](../../../../sources/mark3labs__mcp-go/.github/workflows/golangci-lint.yml)<br>[.github/workflows/pages.yml](../../../../sources/mark3labs__mcp-go/.github/workflows/pages.yml)<br>[.github/workflows/release.yml](../../../../sources/mark3labs__mcp-go/.github/workflows/release.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 13 | [SECURITY.md](../../../../sources/mark3labs__mcp-go/SECURITY.md)<br>[examples/oauth_client/main.go](../../../../sources/mark3labs__mcp-go/examples/oauth_client/main.go)<br>[examples/oauth_client/README.md](../../../../sources/mark3labs__mcp-go/examples/oauth_client/README.md)<br>[client/oauth_test.go](../../../../sources/mark3labs__mcp-go/client/oauth_test.go)<br>[client/oauth.go](../../../../sources/mark3labs__mcp-go/client/oauth.go)<br>[client/transport/oauth_nil_metadata_test.go](../../../../sources/mark3labs__mcp-go/client/transport/oauth_nil_metadata_test.go) |
| Agent instructions | 1 | [AGENTS.md](../../../../sources/mark3labs__mcp-go/AGENTS.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `mcp/base_metadata_test.go`, `mcp/consts.go`, `mcp/content_benchmark_test.go`.
2. Trace execution through entrypoints: `server/server.go`, `server/internal/gen/main.go`, `otel/example/main.go`.
3. Map agent/tool runtime through: `AGENTS.md`, `www/docs/pages/servers/tools.mdx`, `server/hooks.go`.
4. Inspect retrieval/memory/indexing through: `www/docs/pages/index.mdx`, `www/docs/pages/transports/index.mdx`, `www/docs/pages/servers/index.mdx`.
5. Verify behavior through test/eval files: `tracing/tracing_test.go`, `tracing/tracing.go`, `server/client_info_store_test.go`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 A Go implementation of the Model Context Protocol MCP , enabling seamless integration between LLM applications and exter. 핵심 구조 신호는 Go, go.mod, README.md, AGENTS.md, LICENSE, mcp이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
