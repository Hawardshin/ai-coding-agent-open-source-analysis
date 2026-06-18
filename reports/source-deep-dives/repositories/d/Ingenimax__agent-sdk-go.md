# Ingenimax/agent-sdk-go Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

A powerful Go framework for building production-ready AI agents!

## 요약

- 조사 단위: `sources/Ingenimax__agent-sdk-go` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 597 files, 189 directories, depth score 123, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=pkg/mcp/adapters.go, pkg/mcp/builder_test.go, pkg/mcp/builder.go이고, 의존성 단서는 openai, modelcontextprotocol, weaviate, opentelemetry, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | Ingenimax/agent-sdk-go |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Go |
| Stars | 573 |
| Forks | 127 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/Ingenimax__agent-sdk-go](../../../../sources/Ingenimax__agent-sdk-go) |
| Existing report | [reports/global-trending/repositories/Ingenimax__agent-sdk-go.md](../../../global-trending/repositories/Ingenimax__agent-sdk-go.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 597 / 189 |
| Max observed depth | 8 |
| Top directories | .github, cmd, docs, examples, pkg, scripts |
| Top extensions | .go: 346, .md: 106, .tsx: 31, .yaml: 15, .json: 12, .txt: 11, .svg: 10, .js: 9, (none): 9, .woff2: 6, .mod: 5, .sum: 5 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| examples/mcp | examples workspace | 28 |
| examples/microservices | examples workspace | 11 |
| examples/llm | examples workspace | 8 |
| examples/orchestration | examples workspace | 6 |
| examples/subagents | examples workspace | 4 |
| examples/token-usage | examples workspace | 3 |
| docs | documentation surface | 2 |
| examples/memory | examples workspace | 2 |
| examples/simple_agent | examples workspace | 2 |
| examples/streaming | examples workspace | 2 |
| examples/streaming_intermediate_messages | examples workspace | 2 |
| examples/structured_output | examples workspace | 2 |
| examples/tools | examples workspace | 2 |
| examples/tracing | examples workspace | 2 |
| examples/ui | examples workspace | 2 |
| examples/vectorstore | examples workspace | 2 |
| .github | ci surface | 1 |
| cmd | source boundary | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | all | make all |
| build | Makefile | build-cli | make build-cli |
| build | Makefile | build | make build |
| utility | Makefile | install | make install |
| utility | Makefile | clean | make clean |
| test | Makefile | test | make test |
| quality | Makefile | lint | make lint |
| quality | Makefile | fmt | make fmt |
| utility | Makefile | tidy | make tidy |
| utility | Makefile | proto | make proto |
| serve-dev | Makefile | dev-setup | make dev-setup |
| build | Makefile | release | make release |
| serve-dev | Makefile | quickstart | make quickstart |
| utility | Makefile | help | make help |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai |
| agentProtocols | modelcontextprotocol |
| agentFrameworks | none |
| vectorStores | weaviate |
| modelRuntime | none |
| webRuntime | none |
| developerSurface | none |
| observability | opentelemetry |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [pkg/mcp/adapters.go](../../../../sources/Ingenimax__agent-sdk-go/pkg/mcp/adapters.go) | mcp signal |
| mcp | [pkg/mcp/builder_test.go](../../../../sources/Ingenimax__agent-sdk-go/pkg/mcp/builder_test.go) | mcp signal |
| mcp | [pkg/mcp/builder.go](../../../../sources/Ingenimax__agent-sdk-go/pkg/mcp/builder.go) | mcp signal |
| mcp | [pkg/mcp/errors_test.go](../../../../sources/Ingenimax__agent-sdk-go/pkg/mcp/errors_test.go) | mcp signal |
| agentRuntime | [agent-cli.rb](../../../../sources/Ingenimax__agent-sdk-go/agent-cli.rb) | agentRuntime signal |
| agentRuntime | [pkg/workflow/workflow.go](../../../../sources/Ingenimax__agent-sdk-go/pkg/workflow/workflow.go) | agentRuntime signal |
| agentRuntime | [pkg/tracing/context.go](../../../../sources/Ingenimax__agent-sdk-go/pkg/tracing/context.go) | agentRuntime signal |
| agentRuntime | [pkg/tools/agent_tool_test.go](../../../../sources/Ingenimax__agent-sdk-go/pkg/tools/agent_tool_test.go) | agentRuntime signal |
| entrypoints | [pkg/a2a/server.go](../../../../sources/Ingenimax__agent-sdk-go/pkg/a2a/server.go) | entrypoints signal |
| entrypoints | [examples/vectorstore/weaviate/main.go](../../../../sources/Ingenimax__agent-sdk-go/examples/vectorstore/weaviate/main.go) | entrypoints signal |
| entrypoints | [examples/ui/main.go](../../../../sources/Ingenimax__agent-sdk-go/examples/ui/main.go) | entrypoints signal |
| entrypoints | [examples/tracing/main.go](../../../../sources/Ingenimax__agent-sdk-go/examples/tracing/main.go) | entrypoints signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 87 | [pkg/a2a/server.go](../../../../sources/Ingenimax__agent-sdk-go/pkg/a2a/server.go)<br>[examples/vectorstore/weaviate/main.go](../../../../sources/Ingenimax__agent-sdk-go/examples/vectorstore/weaviate/main.go)<br>[examples/ui/main.go](../../../../sources/Ingenimax__agent-sdk-go/examples/ui/main.go)<br>[examples/tracing/main.go](../../../../sources/Ingenimax__agent-sdk-go/examples/tracing/main.go)<br>[examples/tools/huggingface_models/main.go](../../../../sources/Ingenimax__agent-sdk-go/examples/tools/huggingface_models/main.go)<br>[examples/tools/github_extractor/main.go](../../../../sources/Ingenimax__agent-sdk-go/examples/tools/github_extractor/main.go)<br>[examples/token-usage/main.go](../../../../sources/Ingenimax__agent-sdk-go/examples/token-usage/main.go)<br>[examples/subagents/main.go](../../../../sources/Ingenimax__agent-sdk-go/examples/subagents/main.go) |
| agentRuntime | 131 | [agent-cli.rb](../../../../sources/Ingenimax__agent-sdk-go/agent-cli.rb)<br>[pkg/workflow/workflow.go](../../../../sources/Ingenimax__agent-sdk-go/pkg/workflow/workflow.go)<br>[pkg/tracing/context.go](../../../../sources/Ingenimax__agent-sdk-go/pkg/tracing/context.go)<br>[pkg/tools/agent_tool_test.go](../../../../sources/Ingenimax__agent-sdk-go/pkg/tools/agent_tool_test.go)<br>[pkg/tools/agent_tool.go](../../../../sources/Ingenimax__agent-sdk-go/pkg/tools/agent_tool.go)<br>[pkg/tools/registry.go](../../../../sources/Ingenimax__agent-sdk-go/pkg/tools/registry.go)<br>[pkg/tools/websearch/websearch_test.go](../../../../sources/Ingenimax__agent-sdk-go/pkg/tools/websearch/websearch_test.go)<br>[pkg/tools/websearch/websearch.go](../../../../sources/Ingenimax__agent-sdk-go/pkg/tools/websearch/websearch.go) |
| mcp | 67 | [pkg/mcp/adapters.go](../../../../sources/Ingenimax__agent-sdk-go/pkg/mcp/adapters.go)<br>[pkg/mcp/builder_test.go](../../../../sources/Ingenimax__agent-sdk-go/pkg/mcp/builder_test.go)<br>[pkg/mcp/builder.go](../../../../sources/Ingenimax__agent-sdk-go/pkg/mcp/builder.go)<br>[pkg/mcp/errors_test.go](../../../../sources/Ingenimax__agent-sdk-go/pkg/mcp/errors_test.go)<br>[pkg/mcp/errors.go](../../../../sources/Ingenimax__agent-sdk-go/pkg/mcp/errors.go)<br>[pkg/mcp/lazy.go](../../../../sources/Ingenimax__agent-sdk-go/pkg/mcp/lazy.go)<br>[pkg/mcp/mcp.go](../../../../sources/Ingenimax__agent-sdk-go/pkg/mcp/mcp.go)<br>[pkg/mcp/metadata_test.go](../../../../sources/Ingenimax__agent-sdk-go/pkg/mcp/metadata_test.go) |
| retrieval | 60 | [pkg/tracing/traced_memory.go](../../../../sources/Ingenimax__agent-sdk-go/pkg/tracing/traced_memory.go)<br>[pkg/tools/graphrag/add_entity.go](../../../../sources/Ingenimax__agent-sdk-go/pkg/tools/graphrag/add_entity.go)<br>[pkg/tools/graphrag/add_relationship.go](../../../../sources/Ingenimax__agent-sdk-go/pkg/tools/graphrag/add_relationship.go)<br>[pkg/tools/graphrag/extract.go](../../../../sources/Ingenimax__agent-sdk-go/pkg/tools/graphrag/extract.go)<br>[pkg/tools/graphrag/get_context.go](../../../../sources/Ingenimax__agent-sdk-go/pkg/tools/graphrag/get_context.go)<br>[pkg/tools/graphrag/search.go](../../../../sources/Ingenimax__agent-sdk-go/pkg/tools/graphrag/search.go)<br>[pkg/task/service/core_memory.go](../../../../sources/Ingenimax__agent-sdk-go/pkg/task/service/core_memory.go)<br>[pkg/task/service/memory.go](../../../../sources/Ingenimax__agent-sdk-go/pkg/task/service/memory.go) |
| spec | 1 | [docs/graphrag/architecture.md](../../../../sources/Ingenimax__agent-sdk-go/docs/graphrag/architecture.md) |
| eval | 97 | [pkg/vectorstore/weaviate/weaviate_test.go](../../../../sources/Ingenimax__agent-sdk-go/pkg/vectorstore/weaviate/weaviate_test.go)<br>[pkg/tracing/context.go](../../../../sources/Ingenimax__agent-sdk-go/pkg/tracing/context.go)<br>[pkg/tracing/langfuse.go](../../../../sources/Ingenimax__agent-sdk-go/pkg/tracing/langfuse.go)<br>[pkg/tracing/opentelemetry.go](../../../../sources/Ingenimax__agent-sdk-go/pkg/tracing/opentelemetry.go)<br>[pkg/tracing/otel_langfuse_test.go](../../../../sources/Ingenimax__agent-sdk-go/pkg/tracing/otel_langfuse_test.go)<br>[pkg/tracing/otel_langfuse.go](../../../../sources/Ingenimax__agent-sdk-go/pkg/tracing/otel_langfuse.go)<br>[pkg/tracing/otel_tracer_adapter.go](../../../../sources/Ingenimax__agent-sdk-go/pkg/tracing/otel_tracer_adapter.go)<br>[pkg/tracing/session.go](../../../../sources/Ingenimax__agent-sdk-go/pkg/tracing/session.go) |
| security | 2 | [SECURITY.md](../../../../sources/Ingenimax__agent-sdk-go/SECURITY.md)<br>[pkg/retry/policy.go](../../../../sources/Ingenimax__agent-sdk-go/pkg/retry/policy.go) |
| ci | 2 | [.github/workflows/ci.yml](../../../../sources/Ingenimax__agent-sdk-go/.github/workflows/ci.yml)<br>[.github/workflows/release.yml](../../../../sources/Ingenimax__agent-sdk-go/.github/workflows/release.yml) |
| container | 0 | not obvious |
| instruction | 1 | [CLAUDE.md](../../../../sources/Ingenimax__agent-sdk-go/CLAUDE.md) |
| docs | 97 | [README.md](../../../../sources/Ingenimax__agent-sdk-go/README.md)<br>[pkg/task/README.md](../../../../sources/Ingenimax__agent-sdk-go/pkg/task/README.md)<br>[pkg/microservice/ui-nextjs/README.md](../../../../sources/Ingenimax__agent-sdk-go/pkg/microservice/ui-nextjs/README.md)<br>[pkg/mcp/README.md](../../../../sources/Ingenimax__agent-sdk-go/pkg/mcp/README.md)<br>[pkg/llm/vllm/README.md](../../../../sources/Ingenimax__agent-sdk-go/pkg/llm/vllm/README.md)<br>[pkg/llm/openai/README.md](../../../../sources/Ingenimax__agent-sdk-go/pkg/llm/openai/README.md)<br>[pkg/llm/ollama/README.md](../../../../sources/Ingenimax__agent-sdk-go/pkg/llm/ollama/README.md)<br>[pkg/llm/deepseek/README.md](../../../../sources/Ingenimax__agent-sdk-go/pkg/llm/deepseek/README.md) |
| config | 8 | [go.mod](../../../../sources/Ingenimax__agent-sdk-go/go.mod)<br>[Makefile](../../../../sources/Ingenimax__agent-sdk-go/Makefile)<br>[pkg/microservice/ui-nextjs/package.json](../../../../sources/Ingenimax__agent-sdk-go/pkg/microservice/ui-nextjs/package.json)<br>[pkg/microservice/ui-nextjs/tsconfig.json](../../../../sources/Ingenimax__agent-sdk-go/pkg/microservice/ui-nextjs/tsconfig.json)<br>[examples/token-usage/go.mod](../../../../sources/Ingenimax__agent-sdk-go/examples/token-usage/go.mod)<br>[examples/mcp/google-cse-yaml/go.mod](../../../../sources/Ingenimax__agent-sdk-go/examples/mcp/google-cse-yaml/go.mod)<br>[examples/mcp/google-cse/go.mod](../../../../sources/Ingenimax__agent-sdk-go/examples/mcp/google-cse/go.mod)<br>[examples/deployment_config/go.mod](../../../../sources/Ingenimax__agent-sdk-go/examples/deployment_config/go.mod) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 97 | [pkg/vectorstore/weaviate/weaviate_test.go](../../../../sources/Ingenimax__agent-sdk-go/pkg/vectorstore/weaviate/weaviate_test.go)<br>[pkg/tracing/context.go](../../../../sources/Ingenimax__agent-sdk-go/pkg/tracing/context.go)<br>[pkg/tracing/langfuse.go](../../../../sources/Ingenimax__agent-sdk-go/pkg/tracing/langfuse.go)<br>[pkg/tracing/opentelemetry.go](../../../../sources/Ingenimax__agent-sdk-go/pkg/tracing/opentelemetry.go)<br>[pkg/tracing/otel_langfuse_test.go](../../../../sources/Ingenimax__agent-sdk-go/pkg/tracing/otel_langfuse_test.go)<br>[pkg/tracing/otel_langfuse.go](../../../../sources/Ingenimax__agent-sdk-go/pkg/tracing/otel_langfuse.go) |
| CI workflows | 2 | [.github/workflows/ci.yml](../../../../sources/Ingenimax__agent-sdk-go/.github/workflows/ci.yml)<br>[.github/workflows/release.yml](../../../../sources/Ingenimax__agent-sdk-go/.github/workflows/release.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 2 | [SECURITY.md](../../../../sources/Ingenimax__agent-sdk-go/SECURITY.md)<br>[pkg/retry/policy.go](../../../../sources/Ingenimax__agent-sdk-go/pkg/retry/policy.go) |
| Agent instructions | 1 | [CLAUDE.md](../../../../sources/Ingenimax__agent-sdk-go/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `pkg/mcp/adapters.go`, `pkg/mcp/builder_test.go`, `pkg/mcp/builder.go`.
2. Trace execution through entrypoints: `pkg/a2a/server.go`, `examples/vectorstore/weaviate/main.go`, `examples/ui/main.go`.
3. Map agent/tool runtime through: `agent-cli.rb`, `pkg/workflow/workflow.go`, `pkg/tracing/context.go`.
4. Inspect retrieval/memory/indexing through: `pkg/tracing/traced_memory.go`, `pkg/tools/graphrag/add_entity.go`, `pkg/tools/graphrag/add_relationship.go`.
5. Verify behavior through test/eval files: `pkg/vectorstore/weaviate/weaviate_test.go`, `pkg/tracing/context.go`, `pkg/tracing/langfuse.go`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 A powerful Go framework for building production ready AI agents!. 핵심 구조 신호는 Go, go.mod, Makefile, README.md, CLAUDE.md, LICENSE이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
