# henomis/phero Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

A modern Go framework for building multi-agent AI systems.

## 요약

- 조사 단위: `sources/henomis__phero` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 283 files, 91 directories, depth score 109, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=web/mcp.html, tests/e2e/mcp_test.go, tests/e2e/testdata/mcp-echo-server/main.go이고, 의존성 단서는 openai, anthropic, modelcontextprotocol, qdrant, weaviate, opentelemetry, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | henomis/phero |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | Go |
| Stars | 60 |
| Forks | 6 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/henomis__phero](../../../../sources/henomis__phero) |
| Existing report | [reports/global-trending/repositories/henomis__phero.md](../../../global-trending/repositories/henomis__phero.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 283 / 91 |
| Max observed depth | 7 |
| Top directories | .github, a2a, agent, document, embedding, examples, internal, llm, mcp, memory, nats, rag, skill, tests, textsplitter, tool, trace, vectorstore, web |
| Top extensions | .go: 233, .md: 25, .html: 14, (none): 4, .yml: 3, .css: 1, .mod: 1, .png: 1, .sum: 1 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, eval/test harness, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 17 |
| web | source boundary | 11 |
| examples/a2a | examples workspace | 8 |
| examples/mcp | examples workspace | 8 |
| examples/nats-agent | examples workspace | 8 |
| examples/long-term-memory | examples workspace | 4 |
| examples/nats-memory | examples workspace | 4 |
| examples/playwright-mcp | examples workspace | 4 |
| examples/rag-chatbot | examples workspace | 4 |
| examples/skills | examples workspace | 3 |
| examples/conversational-agent | examples workspace | 2 |
| examples/debate-committee | examples workspace | 2 |
| examples/evaluator-optimizer | examples workspace | 2 |
| examples/handoff | examples workspace | 2 |
| examples/human-in-the-loop | examples workspace | 2 |
| examples/multi-agent-workflow | examples workspace | 2 |
| examples/orchestrator-workers | examples workspace | 2 |
| examples/parallel-research | examples workspace | 2 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | all | make all |
| utility | Makefile | help | make help |
| test | Makefile | test | make test |
| test | Makefile | coverage | make coverage |
| build | Makefile | e2e-compile | make e2e-compile |
| utility | Makefile | e2e-up | make e2e-up |
| utility | Makefile | e2e-down | make e2e-down |
| utility | Makefile | e2e | make e2e |
| quality | Makefile | lint | make lint |
| quality | Makefile | fmt | make fmt |
| utility | Makefile | fix | make fix |
| utility | Makefile | vet | make vet |
| utility | Makefile | tidy | make tidy |
| utility | Makefile | clean | make clean |
| utility | Makefile | license | make license |
| utility | Makefile | doc | make doc |
| quality | Makefile | check | make check |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai, anthropic |
| agentProtocols | modelcontextprotocol |
| agentFrameworks | none |
| vectorStores | qdrant, weaviate |
| modelRuntime | none |
| webRuntime | none |
| developerSurface | none |
| observability | opentelemetry |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [web/mcp.html](../../../../sources/henomis__phero/web/mcp.html) | mcp signal |
| mcp | [tests/e2e/mcp_test.go](../../../../sources/henomis__phero/tests/e2e/mcp_test.go) | mcp signal |
| mcp | [tests/e2e/testdata/mcp-echo-server/main.go](../../../../sources/henomis__phero/tests/e2e/testdata/mcp-echo-server/main.go) | mcp signal |
| mcp | [mcp/doc.go](../../../../sources/henomis__phero/mcp/doc.go) | mcp signal |
| agentRuntime | [web/agent.html](../../../../sources/henomis__phero/web/agent.html) | agentRuntime signal |
| agentRuntime | [web/memory.html](../../../../sources/henomis__phero/web/memory.html) | agentRuntime signal |
| agentRuntime | [web/skill.html](../../../../sources/henomis__phero/web/skill.html) | agentRuntime signal |
| agentRuntime | [web/tool.html](../../../../sources/henomis__phero/web/tool.html) | agentRuntime signal |
| entrypoints | [nats/server.go](../../../../sources/henomis__phero/nats/server.go) | entrypoints signal |
| entrypoints | [examples/tracing/main.go](../../../../sources/henomis__phero/examples/tracing/main.go) | entrypoints signal |
| entrypoints | [examples/supervisor-blackboard/main.go](../../../../sources/henomis__phero/examples/supervisor-blackboard/main.go) | entrypoints signal |
| config | [go.mod](../../../../sources/henomis__phero/go.mod) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 40 | [tests/e2e/testdata/mcp-echo-server/main.go](../../../../sources/henomis__phero/tests/e2e/testdata/mcp-echo-server/main.go)<br>[nats/server.go](../../../../sources/henomis__phero/nats/server.go)<br>[examples/tracing/main.go](../../../../sources/henomis__phero/examples/tracing/main.go)<br>[examples/supervisor-blackboard/main.go](../../../../sources/henomis__phero/examples/supervisor-blackboard/main.go)<br>[examples/streaming/main.go](../../../../sources/henomis__phero/examples/streaming/main.go)<br>[examples/social-simulation/main.go](../../../../sources/henomis__phero/examples/social-simulation/main.go)<br>[examples/skills/main.go](../../../../sources/henomis__phero/examples/skills/main.go)<br>[examples/skills/skills/get-random-quote/scripts/get_random_quote/main.go](../../../../sources/henomis__phero/examples/skills/skills/get-random-quote/scripts/get_random_quote/main.go) |
| agentRuntime | 77 | [web/agent.html](../../../../sources/henomis__phero/web/agent.html)<br>[web/memory.html](../../../../sources/henomis__phero/web/memory.html)<br>[web/skill.html](../../../../sources/henomis__phero/web/skill.html)<br>[web/tool.html](../../../../sources/henomis__phero/web/tool.html)<br>[trace/context.go](../../../../sources/henomis__phero/trace/context.go)<br>[tool/skill/doc.go](../../../../sources/henomis__phero/tool/skill/doc.go)<br>[tool/skill/errors.go](../../../../sources/henomis__phero/tool/skill/errors.go)<br>[tool/skill/tool_test.go](../../../../sources/henomis__phero/tool/skill/tool_test.go) |
| mcp | 12 | [web/mcp.html](../../../../sources/henomis__phero/web/mcp.html)<br>[tests/e2e/mcp_test.go](../../../../sources/henomis__phero/tests/e2e/mcp_test.go)<br>[tests/e2e/testdata/mcp-echo-server/main.go](../../../../sources/henomis__phero/tests/e2e/testdata/mcp-echo-server/main.go)<br>[mcp/doc.go](../../../../sources/henomis__phero/mcp/doc.go)<br>[mcp/mcp_test.go](../../../../sources/henomis__phero/mcp/mcp_test.go)<br>[mcp/mcp.go](../../../../sources/henomis__phero/mcp/mcp.go)<br>[examples/playwright-mcp/main.go](../../../../sources/henomis__phero/examples/playwright-mcp/main.go)<br>[examples/playwright-mcp/README.md](../../../../sources/henomis__phero/examples/playwright-mcp/README.md) |
| retrieval | 43 | [web/embedding.html](../../../../sources/henomis__phero/web/embedding.html)<br>[web/index.html](../../../../sources/henomis__phero/web/index.html)<br>[web/memory.html](../../../../sources/henomis__phero/web/memory.html)<br>[web/rag.html](../../../../sources/henomis__phero/web/rag.html)<br>[tests/e2e/embedding_test.go](../../../../sources/henomis__phero/tests/e2e/embedding_test.go)<br>[tests/e2e/memory_test.go](../../../../sources/henomis__phero/tests/e2e/memory_test.go)<br>[tests/e2e/rag_test.go](../../../../sources/henomis__phero/tests/e2e/rag_test.go)<br>[rag/doc.go](../../../../sources/henomis__phero/rag/doc.go) |
| spec | 0 | not obvious |
| eval | 77 | [web/trace.html](../../../../sources/henomis__phero/web/trace.html)<br>[vectorstore/filter_test.go](../../../../sources/henomis__phero/vectorstore/filter_test.go)<br>[vectorstore/weaviate/weaviate_test.go](../../../../sources/henomis__phero/vectorstore/weaviate/weaviate_test.go)<br>[vectorstore/qdrant/filter_test.go](../../../../sources/henomis__phero/vectorstore/qdrant/filter_test.go)<br>[vectorstore/qdrant/qdrant_test.go](../../../../sources/henomis__phero/vectorstore/qdrant/qdrant_test.go)<br>[vectorstore/psql/filter_test.go](../../../../sources/henomis__phero/vectorstore/psql/filter_test.go)<br>[trace/context.go](../../../../sources/henomis__phero/trace/context.go)<br>[trace/doc.go](../../../../sources/henomis__phero/trace/doc.go) |
| security | 0 | not obvious |
| ci | 2 | [.github/workflows/checks.yml](../../../../sources/henomis__phero/.github/workflows/checks.yml)<br>[.github/workflows/web.yml](../../../../sources/henomis__phero/.github/workflows/web.yml) |
| container | 1 | [tests/e2e/docker-compose.yml](../../../../sources/henomis__phero/tests/e2e/docker-compose.yml) |
| instruction | 0 | not obvious |
| docs | 24 | [README.md](../../../../sources/henomis__phero/README.md)<br>[examples/README.md](../../../../sources/henomis__phero/examples/README.md)<br>[examples/supervisor-blackboard/README.md](../../../../sources/henomis__phero/examples/supervisor-blackboard/README.md)<br>[examples/social-simulation/README.md](../../../../sources/henomis__phero/examples/social-simulation/README.md)<br>[examples/skills/README.md](../../../../sources/henomis__phero/examples/skills/README.md)<br>[examples/simple-agent/README.md](../../../../sources/henomis__phero/examples/simple-agent/README.md)<br>[examples/rag-chatbot/README.md](../../../../sources/henomis__phero/examples/rag-chatbot/README.md)<br>[examples/prompt-chaining/README.md](../../../../sources/henomis__phero/examples/prompt-chaining/README.md) |
| config | 3 | [go.mod](../../../../sources/henomis__phero/go.mod)<br>[Makefile](../../../../sources/henomis__phero/Makefile)<br>[examples/mcp/server/Makefile](../../../../sources/henomis__phero/examples/mcp/server/Makefile) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 77 | [web/trace.html](../../../../sources/henomis__phero/web/trace.html)<br>[vectorstore/filter_test.go](../../../../sources/henomis__phero/vectorstore/filter_test.go)<br>[vectorstore/weaviate/weaviate_test.go](../../../../sources/henomis__phero/vectorstore/weaviate/weaviate_test.go)<br>[vectorstore/qdrant/filter_test.go](../../../../sources/henomis__phero/vectorstore/qdrant/filter_test.go)<br>[vectorstore/qdrant/qdrant_test.go](../../../../sources/henomis__phero/vectorstore/qdrant/qdrant_test.go)<br>[vectorstore/psql/filter_test.go](../../../../sources/henomis__phero/vectorstore/psql/filter_test.go) |
| CI workflows | 2 | [.github/workflows/checks.yml](../../../../sources/henomis__phero/.github/workflows/checks.yml)<br>[.github/workflows/web.yml](../../../../sources/henomis__phero/.github/workflows/web.yml) |
| Containers / deploy | 1 | [tests/e2e/docker-compose.yml](../../../../sources/henomis__phero/tests/e2e/docker-compose.yml) |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | many top-level directories; module boundaries need review |
| operation | none |
| security | security/policy surface not obvious; agent instruction files not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `web/mcp.html`, `tests/e2e/mcp_test.go`, `tests/e2e/testdata/mcp-echo-server/main.go`.
2. Trace execution through entrypoints: `tests/e2e/testdata/mcp-echo-server/main.go`, `nats/server.go`, `examples/tracing/main.go`.
3. Map agent/tool runtime through: `web/agent.html`, `web/memory.html`, `web/skill.html`.
4. Inspect retrieval/memory/indexing through: `web/embedding.html`, `web/index.html`, `web/memory.html`.
5. Verify behavior through test/eval files: `web/trace.html`, `vectorstore/filter_test.go`, `vectorstore/weaviate/weaviate_test.go`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 A modern Go framework for building multi agent AI systems.. 핵심 구조 신호는 Go, go.mod, Makefile, README.md, LICENSE, openai이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
