# Agent Harness and MCP Source Insights

Generated: 2026-06-18T15:12:59.248Z

MCP, tool registry, workflow/orchestration, hooks/skills

## 요약

- 조사 단위: 에이전트 하네스/MCP 카테고리에 속한 514개 source-scanned 레포입니다.
- 포함 범위: trend-linked 427개, key source reference 5524개, median source depth 121입니다.
- 탐색 방식: Category Insights를 먼저 보고, Top Repository Comparison의 source deep dive 링크를 따라 구현 근거를 확인합니다.

## 총평

에이전트 하네스/MCP 카테고리는 514개 레포로 구성되며, 현재 트렌드 데이터와 직접 연결된 레포 비중은 83%입니다. 이 카테고리의 비교 핵심은 star 순위가 아니라 dominant features, evidence buckets, validation surface, risk category를 같은 기준으로 맞춰 보는 것입니다.

## Navigation

| Entry | Use it for |
| --- | --- |
| [Repository README](../../../../README.md) | Repo-wide orientation and top-level data/report structure. |
| [Reports Reading Index](../../../README.md) | Main report navigation, topics, and folder map. |
| [Source Deep Dives](../../../source-deep-dives/README.md) | Source-path evidence and per-repository deep dives. |
| [Source Repository Deep Dives](../../../source-deep-dives/repositories/README.md) | One Markdown deep dive per cloned repository. |
| [Repository Insights](../../../repository-insights/README.md) | Repository-level assessment and role pages. |
| [Source Trend Insights](../../README.md) | Category trend insights and repository feature comparison. |
| [Source Insights by Category](../README.md) | Category-first source insight pages. |
| [Report Tables](../../../tables/README.md) | CSV and table-first navigation. |


## Category Insights

- 에이전트 하네스/MCP 카테고리는 514개 레포로 구성되며, 현재 트렌드 데이터와 직접 연결된 레포 비중은 83%입니다.
- 구조적으로 가장 많이 반복되는 패턴은 agent/tool runtime (482), eval/test harness (464), retrieval/vector path (434)이고, 파일 근거 bucket은 docs (512), config (473), eval (464), agentRuntime (456) 순서로 강합니다.
- MCP/tool protocol 표면이 76%에서 보입니다. 단순 라이브러리보다 agent tool 연결/registry를 비교해야 합니다.
- RAG, memory, vector/index 경로가 84%에서 보입니다. 저장소별 차이는 vector store보다 ingestion/chunking/eval 연결 방식에서 갈립니다.
- spec/requirements/ADR 경로가 74%에서 잡힙니다. spec-driven 관점에서는 문서 존재보다 acceptance/test trace까지 연결되는지가 핵심입니다.
- test/eval 표면이 90%로 높습니다. production reference로 볼 때 검증 harness와 CI를 먼저 비교하는 편이 좋습니다.
- container/deploy 경로가 57%에서 확인됩니다. 로컬 데모형보다 운영 배포형 레포 비중이 높습니다.
- AGENTS/CLAUDE/Codex/Cursor류 instruction 파일이 64%에서 보여 agent-native 개발 방식이 이미 레포 구조에 들어와 있습니다.

## Trend and Source Metrics

| Field | Value |
| --- | --- |
| Repositories | 514 |
| Trend-linked repositories | 427 |
| Global / Korea trend count | 340 / 110 |
| Both global and Korea | 23 |
| Max / median trend score | 250 / 143 |
| Total / median stars | 4912595 / 347 |
| Key source references | 5524 |
| Median file count | 557 |

## Source Feature Distribution

### Dominant Features

| Signal | Count |
| --- | ---: |
| agent-runtime | 482 |
| tests-evals | 467 |
| retrieval-memory | 434 |
| mcp/protocol | 412 |
| security-policy | 406 |
| cli-first | 391 |
| spec-artifacts | 381 |
| api/server | 351 |
| container-deploy | 293 |
| agent-instructions | 259 |
| monorepo | 124 |
| web-runtime | 56 |


### Architecture Patterns

| Signal | Count |
| --- | ---: |
| agent/tool runtime | 482 |
| eval/test harness | 464 |
| retrieval/vector path | 434 |
| security/policy surface | 406 |
| cli-first | 391 |
| spec/docs-driven | 381 |
| api/server | 351 |
| containerized deploy | 217 |
| monorepo/workspace | 124 |
| ui/extension surface | 24 |
| general source tree | 7 |
| Python source tree | 2 |


### Evidence Bucket Coverage

| Signal | Count |
| --- | ---: |
| docs | 512 |
| config | 473 |
| eval | 464 |
| agentRuntime | 456 |
| retrieval | 433 |
| entrypoints | 420 |
| ci | 419 |
| security | 406 |
| mcp | 390 |
| spec | 381 |
| instruction | 327 |
| container | 293 |


### Dependency Groups

| Signal | Count |
| --- | ---: |
| agentProtocols | 210 |
| llmProviders | 152 |
| webRuntime | 129 |
| developerSurface | 102 |
| modelRuntime | 87 |
| observability | 60 |
| browserAutomation | 54 |
| vectorStores | 47 |
| agentFrameworks | 42 |


### Command Surface

| Signal | Count |
| --- | ---: |
| utility | 290 |
| test | 206 |
| quality | 199 |
| build | 194 |
| serve-dev | 183 |
| entrypoint | 82 |
| container | 20 |


### Risk Categories

_No signals._


## Top Trend Repositories

| Repository | Category | Compare score | Trend score | Stars | Language | Features | Standout | Risks | Links |
| --- | --- | ---: | ---: | ---: | --- | --- | --- | --- | --- |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | 에이전트 하네스/MCP | 628 | 250 | 58803 | Python | monorepo, cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/f/mem0ai__mem0.md) / [report](../../../global-trending/repositories/mem0ai__mem0.md) / [source](../../../../sources/mem0ai__mem0) |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 에이전트 하네스/MCP | 612 | 238 | 139576 | Python | api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/a/langchain-ai__langchain.md) / [report](../../../global-trending/repositories/langchain-ai__langchain.md) / [source](../../../../sources/langchain-ai__langchain) |
| [deepset-ai/haystack](https://github.com/deepset-ai/haystack) | 에이전트 하네스/MCP | 610 | 249 | 25594 | MDX | api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions, model-runtime | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | entrypoint path not obvious | [source deep dive](../../../source-deep-dives/repositories/b/deepset-ai__haystack.md) / [report](../../../global-trending/repositories/deepset-ai__haystack.md) / [source](../../../../sources/deepset-ai__haystack) |
| [langgenius/dify](https://github.com/langgenius/dify) | 에이전트 하네스/MCP | 601 | 230 | 145630 | TypeScript | monorepo, cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/6/langgenius__dify.md) / [report](../../../global-trending/repositories/langgenius__dify.md) / [source](../../../../sources/langgenius__dify) |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | 에이전트 하네스/MCP | 596 | 230 | 50200 | Python | api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions, model-runtime | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/4/run-llama__llama_index.md) / [report](../../../global-trending/repositories/run-llama__llama_index.md) / [source](../../../../sources/run-llama__llama_index) |
| [mudler/LocalAI](https://github.com/mudler/LocalAI) | 에이전트 하네스/MCP | 587 | 222 | 46944 | Go | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/5/mudler__LocalAI.md) / [report](../../../global-trending/repositories/mudler__LocalAI.md) / [source](../../../../sources/mudler__LocalAI) |
| [anomalyco/opencode](https://github.com/anomalyco/opencode) | 에이전트 하네스/MCP | 580 | 210 | 175712 | TypeScript | monorepo, cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/9/anomalyco__opencode.md) / [report](../../../global-trending/repositories/anomalyco__opencode.md) / [source](../../../../sources/anomalyco__opencode) |
| [ruvnet/ruflo](https://github.com/ruvnet/ruflo) | 에이전트 하네스/MCP | 573 | 215 | 59994 | TypeScript | monorepo, cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/2/ruvnet__ruflo.md) / [report](../../../global-trending/repositories/ruvnet__ruflo.md) / [source](../../../../sources/ruvnet__ruflo) |
| [mastra-ai/mastra](https://github.com/mastra-ai/mastra) | 에이전트 하네스/MCP | 569 | 217 | 25182 | TypeScript | monorepo, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/0/mastra-ai__mastra.md) / [report](../../../global-trending/repositories/mastra-ai__mastra.md) / [source](../../../../sources/mastra-ai__mastra) |
| [crewAIInc/crewAI](https://github.com/crewAIInc/crewAI) | 에이전트 하네스/MCP | 568 | 208 | 53827 | Python | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/4/crewAIInc__crewAI.md) / [report](../../../global-trending/repositories/crewAIInc__crewAI.md) / [source](../../../../sources/crewAIInc__crewAI) |
| [EverMind-AI/EverOS](https://github.com/EverMind-AI/EverOS) | 에이전트 하네스/MCP | 563 | 221 | 7691 | Python | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/a/EverMind-AI__EverOS.md) / [report](../../../global-trending/repositories/EverMind-AI__EverOS.md) / [source](../../../../sources/EverMind-AI__EverOS) |
| [modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers) | 에이전트 하네스/MCP | 562 | 211 | 87393 | TypeScript | api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/5/modelcontextprotocol__servers.md) / [report](../../../global-trending/repositories/modelcontextprotocol__servers.md) / [source](../../../../sources/modelcontextprotocol__servers) |
| [google/adk-python](https://github.com/google/adk-python) | 에이전트 하네스/MCP | 557 | 210 | 20158 | Python | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/4/google__adk-python.md) / [report](../../../global-trending/repositories/google__adk-python.md) / [source](../../../../sources/google__adk-python) |
| [bytedance/deer-flow](https://github.com/bytedance/deer-flow) | 에이전트 하네스/MCP | 556 | 202 | 71423 | Python | monorepo, cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/4/bytedance__deer-flow.md) / [report](../../../global-trending/repositories/bytedance__deer-flow.md) / [source](../../../../sources/bytedance__deer-flow) |
| [github/github-mcp-server](https://github.com/github/github-mcp-server) | 에이전트 하네스/MCP | 549 | 211 | 30770 | Go | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/b/github__github-mcp-server.md) / [report](../../../global-trending/repositories/github__github-mcp-server.md) / [source](../../../../sources/github__github-mcp-server) |
| [rocketride-org/rocketride-server](https://github.com/rocketride-org/rocketride-server) | 에이전트 하네스/MCP | 545 | 210 | 3866 | Python | monorepo, cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/7/rocketride-org__rocketride-server.md) / [report](../../../global-trending/repositories/rocketride-org__rocketride-server.md) / [source](../../../../sources/rocketride-org__rocketride-server) |
| [langchain4j/langchain4j](https://github.com/langchain4j/langchain4j) | 에이전트 하네스/MCP | 538 | 227 | 12359 | Java | agent-runtime, mcp/protocol, retrieval-memory, tests-evals, security-policy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | entrypoint path not obvious | [source deep dive](../../../source-deep-dives/repositories/e/langchain4j__langchain4j.md) / [report](../../../global-trending/repositories/langchain4j__langchain4j.md) / [source](../../../../sources/langchain4j__langchain4j) |
| [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) | 에이전트 하네스/MCP | 536 | 207 | 5246 | C | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/1/DeusData__codebase-memory-mcp.md) / [report](../../../global-trending/repositories/DeusData__codebase-memory-mcp.md) / [source](../../../../sources/DeusData__codebase-memory-mcp) |
| [GLips/Figma-Context-MCP](https://github.com/GLips/Figma-Context-MCP) | 에이전트 하네스/MCP | 534 | 207 | 15139 | TypeScript | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, agent-instructions, web-runtime | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/7/GLips__Figma-Context-MCP.md) / [report](../../../global-trending/repositories/GLips__Figma-Context-MCP.md) / [source](../../../../sources/GLips__Figma-Context-MCP) |
| [anthropics/claude-code](https://github.com/anthropics/claude-code) | 에이전트 하네스/MCP | 525 | 210 | 133037 | Python | agent-runtime, mcp/protocol, spec-artifacts, tests-evals, security-policy, container-deploy | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | entrypoint path not obvious | [source deep dive](../../../source-deep-dives/repositories/f/anthropics__claude-code.md) / [report](../../../global-trending/repositories/anthropics__claude-code.md) / [source](../../../../sources/anthropics__claude-code) |


## Top Repository Comparison

| Repository | Category | Compare score | Trend score | Stars | Language | Features | Standout | Risks | Links |
| --- | --- | ---: | ---: | ---: | --- | --- | --- | --- | --- |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | 에이전트 하네스/MCP | 628 | 250 | 58803 | Python | monorepo, cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/f/mem0ai__mem0.md) / [report](../../../global-trending/repositories/mem0ai__mem0.md) / [source](../../../../sources/mem0ai__mem0) |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 에이전트 하네스/MCP | 612 | 238 | 139576 | Python | api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/a/langchain-ai__langchain.md) / [report](../../../global-trending/repositories/langchain-ai__langchain.md) / [source](../../../../sources/langchain-ai__langchain) |
| [deepset-ai/haystack](https://github.com/deepset-ai/haystack) | 에이전트 하네스/MCP | 610 | 249 | 25594 | MDX | api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions, model-runtime | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | entrypoint path not obvious | [source deep dive](../../../source-deep-dives/repositories/b/deepset-ai__haystack.md) / [report](../../../global-trending/repositories/deepset-ai__haystack.md) / [source](../../../../sources/deepset-ai__haystack) |
| [langgenius/dify](https://github.com/langgenius/dify) | 에이전트 하네스/MCP | 601 | 230 | 145630 | TypeScript | monorepo, cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/6/langgenius__dify.md) / [report](../../../global-trending/repositories/langgenius__dify.md) / [source](../../../../sources/langgenius__dify) |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | 에이전트 하네스/MCP | 596 | 230 | 50200 | Python | api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions, model-runtime | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/4/run-llama__llama_index.md) / [report](../../../global-trending/repositories/run-llama__llama_index.md) / [source](../../../../sources/run-llama__llama_index) |
| [mudler/LocalAI](https://github.com/mudler/LocalAI) | 에이전트 하네스/MCP | 587 | 222 | 46944 | Go | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/5/mudler__LocalAI.md) / [report](../../../global-trending/repositories/mudler__LocalAI.md) / [source](../../../../sources/mudler__LocalAI) |
| [anomalyco/opencode](https://github.com/anomalyco/opencode) | 에이전트 하네스/MCP | 580 | 210 | 175712 | TypeScript | monorepo, cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/9/anomalyco__opencode.md) / [report](../../../global-trending/repositories/anomalyco__opencode.md) / [source](../../../../sources/anomalyco__opencode) |
| [ruvnet/ruflo](https://github.com/ruvnet/ruflo) | 에이전트 하네스/MCP | 573 | 215 | 59994 | TypeScript | monorepo, cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/2/ruvnet__ruflo.md) / [report](../../../global-trending/repositories/ruvnet__ruflo.md) / [source](../../../../sources/ruvnet__ruflo) |
| [mastra-ai/mastra](https://github.com/mastra-ai/mastra) | 에이전트 하네스/MCP | 569 | 217 | 25182 | TypeScript | monorepo, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/0/mastra-ai__mastra.md) / [report](../../../global-trending/repositories/mastra-ai__mastra.md) / [source](../../../../sources/mastra-ai__mastra) |
| [crewAIInc/crewAI](https://github.com/crewAIInc/crewAI) | 에이전트 하네스/MCP | 568 | 208 | 53827 | Python | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/4/crewAIInc__crewAI.md) / [report](../../../global-trending/repositories/crewAIInc__crewAI.md) / [source](../../../../sources/crewAIInc__crewAI) |
| [EverMind-AI/EverOS](https://github.com/EverMind-AI/EverOS) | 에이전트 하네스/MCP | 563 | 221 | 7691 | Python | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/a/EverMind-AI__EverOS.md) / [report](../../../global-trending/repositories/EverMind-AI__EverOS.md) / [source](../../../../sources/EverMind-AI__EverOS) |
| [modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers) | 에이전트 하네스/MCP | 562 | 211 | 87393 | TypeScript | api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/5/modelcontextprotocol__servers.md) / [report](../../../global-trending/repositories/modelcontextprotocol__servers.md) / [source](../../../../sources/modelcontextprotocol__servers) |
| [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli) | 에이전트 하네스/MCP | 562 | 200 | 105365 | TypeScript | monorepo, cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/a/google-gemini__gemini-cli.md) / [report](../../../global-trending/repositories/google-gemini__gemini-cli.md) / [source](../../../../sources/google-gemini__gemini-cli) |
| [openai/codex](https://github.com/openai/codex) | 에이전트 하네스/MCP | 561 | 200 | 91749 | Rust | monorepo, cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/9/openai__codex.md) / [report](../../../global-trending/repositories/openai__codex.md) / [source](../../../../sources/openai__codex) |
| [google/adk-python](https://github.com/google/adk-python) | 에이전트 하네스/MCP | 557 | 210 | 20158 | Python | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/4/google__adk-python.md) / [report](../../../global-trending/repositories/google__adk-python.md) / [source](../../../../sources/google__adk-python) |
| [aaif-goose/goose](https://github.com/aaif-goose/goose) | 에이전트 하네스/MCP | 557 | 200 | 49691 | Rust | monorepo, cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/3/aaif-goose__goose.md) / [report](../../../global-trending/repositories/aaif-goose__goose.md) / [source](../../../../sources/aaif-goose__goose) |
| [bytedance/deer-flow](https://github.com/bytedance/deer-flow) | 에이전트 하네스/MCP | 556 | 202 | 71423 | Python | monorepo, cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/4/bytedance__deer-flow.md) / [report](../../../global-trending/repositories/bytedance__deer-flow.md) / [source](../../../../sources/bytedance__deer-flow) |
| [cline/cline](https://github.com/cline/cline) | 에이전트 하네스/MCP | 554 | 200 | 63454 | TypeScript | monorepo, cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/f/cline__cline.md) / [report](../../../global-trending/repositories/cline__cline.md) / [source](../../../../sources/cline__cline) |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | 에이전트 하네스/MCP | 554 | 195 | 83034 | Python | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/4/infiniflow__ragflow.md) / [report](../../../global-trending/repositories/infiniflow__ragflow.md) / [source](../../../../sources/infiniflow__ragflow) |
| [danny-avila/LibreChat](https://github.com/danny-avila/LibreChat) | 에이전트 하네스/MCP | 552 | 202 | 39364 | TypeScript | monorepo, cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/5/danny-avila__LibreChat.md) / [report](../../../global-trending/repositories/danny-avila__LibreChat.md) / [source](../../../../sources/danny-avila__LibreChat) |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 에이전트 하네스/MCP | 552 | 194 | 83195 | Python | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/6/vllm-project__vllm.md) / [report](../../../global-trending/repositories/vllm-project__vllm.md) / [source](../../../../sources/vllm-project__vllm) |
| [github/github-mcp-server](https://github.com/github/github-mcp-server) | 에이전트 하네스/MCP | 549 | 211 | 30770 | Go | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/b/github__github-mcp-server.md) / [report](../../../global-trending/repositories/github__github-mcp-server.md) / [source](../../../../sources/github__github-mcp-server) |
| [rocketride-org/rocketride-server](https://github.com/rocketride-org/rocketride-server) | 에이전트 하네스/MCP | 545 | 210 | 3866 | Python | monorepo, cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/7/rocketride-org__rocketride-server.md) / [report](../../../global-trending/repositories/rocketride-org__rocketride-server.md) / [source](../../../../sources/rocketride-org__rocketride-server) |
| [FlowiseAI/Flowise](https://github.com/FlowiseAI/Flowise) | 에이전트 하네스/MCP | 540 | 195 | 53689 | TypeScript | monorepo, cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/0/FlowiseAI__Flowise.md) / [report](../../../global-trending/repositories/FlowiseAI__Flowise.md) / [source](../../../../sources/FlowiseAI__Flowise) |
| [chopratejas/headroom](https://github.com/chopratejas/headroom) | 에이전트 하네스/MCP | 539 | 194 | 31580 | Python | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/a/chopratejas__headroom.md) / [report](../../../global-trending/repositories/chopratejas__headroom.md) / [source](../../../../sources/chopratejas__headroom) |
| [langchain4j/langchain4j](https://github.com/langchain4j/langchain4j) | 에이전트 하네스/MCP | 538 | 227 | 12359 | Java | agent-runtime, mcp/protocol, retrieval-memory, tests-evals, security-policy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | entrypoint path not obvious | [source deep dive](../../../source-deep-dives/repositories/e/langchain4j__langchain4j.md) / [report](../../../global-trending/repositories/langchain4j__langchain4j.md) / [source](../../../../sources/langchain4j__langchain4j) |
| [langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) | 에이전트 하네스/MCP | 538 | 193 | 35062 | Python | monorepo, cli-first, api/server, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/7/langchain-ai__langgraph.md) / [report](../../../global-trending/repositories/langchain-ai__langgraph.md) / [source](../../../../sources/langchain-ai__langgraph) |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | 에이전트 하네스/MCP | 537 | 187 | 217294 | JavaScript | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, agent-instructions, model-runtime | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/f/affaan-m__ECC.md) / [report](../../../global-trending/repositories/affaan-m__ECC.md) / [source](../../../../sources/affaan-m__ECC) |
| [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) | 에이전트 하네스/MCP | 536 | 207 | 5246 | C | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/1/DeusData__codebase-memory-mcp.md) / [report](../../../global-trending/repositories/DeusData__codebase-memory-mcp.md) / [source](../../../../sources/DeusData__codebase-memory-mcp) |
| [ggml-org/llama.cpp](https://github.com/ggml-org/llama.cpp) | 에이전트 하네스/MCP | 534 | 184 | 117045 | C++ | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, agent-instructions, model-runtime | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/5/ggml-org__llama.cpp.md) / [report](../../../global-trending/repositories/ggml-org__llama.cpp.md) / [source](../../../../sources/ggml-org__llama.cpp) |


## Risk Watchlist

| Repository | Category | Compare score | Trend score | Stars | Language | Features | Standout | Risks | Links |
| --- | --- | ---: | ---: | ---: | --- | --- | --- | --- | --- |
| [NirDiamant/GenAI_Agents](https://github.com/NirDiamant/GenAI_Agents) | 에이전트 하네스/MCP | 461 | 195 | 22690 | Jupyter Notebook | agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, security-policy | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | entrypoint path not obvious, test/eval path not obvious, ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/2/NirDiamant__GenAI_Agents.md) / [report](../../../global-trending/repositories/NirDiamant__GenAI_Agents.md) / [source](../../../../sources/NirDiamant__GenAI_Agents) |
| [Denis2054/Context-Engineering-for-Multi-Agent-Systems](https://github.com/Denis2054/Context-Engineering-for-Multi-Agent-Systems) | 에이전트 하네스/MCP | 352 | 160 | 247 | Jupyter Notebook | agent-runtime, mcp/protocol, retrieval-memory, security-policy | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | entrypoint path not obvious, test/eval path not obvious, ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/3/Denis2054__Context-Engineering-for-Multi-Agent-Systems.md) / [report](../../../global-trending/repositories/Denis2054__Context-Engineering-for-Multi-Agent-Systems.md) / [source](../../../../sources/Denis2054__Context-Engineering-for-Multi-Agent-Systems) |
| [ai-boost/awesome-harness-engineering](https://github.com/ai-boost/awesome-harness-engineering) | 에이전트 하네스/MCP | 319 | 160 | 1905 | Python | agent-runtime, agent-instructions | agent-runtime, agent-instructions | entrypoint path not obvious, test/eval path not obvious, ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/6/ai-boost__awesome-harness-engineering.md) / [report](../../../global-trending/repositories/ai-boost__awesome-harness-engineering.md) / [source](../../../../sources/ai-boost__awesome-harness-engineering) |
| [MosslandOpenDevs/alpha](https://github.com/MosslandOpenDevs/alpha) | 에이전트 하네스/MCP | 251 | 99 | 0 | TypeScript | monorepo, agent-runtime, mcp/protocol, security-policy, agent-instructions, web-runtime | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | entrypoint path not obvious, test/eval path not obvious, ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/c/MosslandOpenDevs__alpha.md) / [report](../../../korea-trending/repositories/MosslandOpenDevs__alpha.md) / [source](../../../../sources/MosslandOpenDevs__alpha) |
| [SheikhSheave/Claude-Code-CLI-Reference](https://github.com/SheikhSheave/Claude-Code-CLI-Reference) | 에이전트 하네스/MCP | 240 | 139 | 211 | unknown |  | 소스 구조 신호가 약해 추가 수동 확인이 필요한 레포 | entrypoint path not obvious, test/eval path not obvious, ci path not obvious, no high-confidence source references | [source deep dive](../../../source-deep-dives/repositories/b/SheikhSheave__Claude-Code-CLI-Reference.md) / [report](../../../global-trending/repositories/SheikhSheave__Claude-Code-CLI-Reference.md) / [source](../../../../sources/SheikhSheave__Claude-Code-CLI-Reference) |
| [naver/egjs](https://github.com/naver/egjs) | 에이전트 하네스/MCP | 226 | 109 | 945 | JavaScript |  | 소스 구조 신호가 약해 추가 수동 확인이 필요한 레포 | entrypoint path not obvious, test/eval path not obvious, ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/0/naver__egjs.md) / [report](../../../korea-trending/repositories/naver__egjs.md) / [source](../../../../sources/naver__egjs) |
| [johnisanerd/Apify-Naver-Search-API](https://github.com/johnisanerd/Apify-Naver-Search-API) | 에이전트 하네스/MCP | 154 | 92 | 0 | Python |  | 소스 구조 신호가 약해 추가 수동 확인이 필요한 레포 | entrypoint path not obvious, test/eval path not obvious, ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/1/johnisanerd__Apify-Naver-Search-API.md) / [report](../../../korea-trending/repositories/johnisanerd__Apify-Naver-Search-API.md) / [source](../../../../sources/johnisanerd__Apify-Naver-Search-API) |
| [johnisanerd/Apify-Naver-AI-Overview-API](https://github.com/johnisanerd/Apify-Naver-AI-Overview-API) | 에이전트 하네스/MCP | 153 | 92 | 0 | Python |  | 소스 구조 신호가 약해 추가 수동 확인이 필요한 레포 | entrypoint path not obvious, test/eval path not obvious, ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/6/johnisanerd__Apify-Naver-AI-Overview-API.md) / [report](../../../korea-trending/repositories/johnisanerd__Apify-Naver-AI-Overview-API.md) / [source](../../../../sources/johnisanerd__Apify-Naver-AI-Overview-API) |
| [sodam-ai/Langent-MCP_One-Click_Kit](https://github.com/sodam-ai/Langent-MCP_One-Click_Kit) | 에이전트 하네스/MCP | 141 | 93 | 0 | Batchfile |  | 소스 구조 신호가 약해 추가 수동 확인이 필요한 레포 | entrypoint path not obvious, test/eval path not obvious, ci path not obvious, no high-confidence source references | [source deep dive](../../../source-deep-dives/repositories/2/sodam-ai__Langent-MCP_One-Click_Kit.md) / [report](../../../korea-trending/repositories/sodam-ai__Langent-MCP_One-Click_Kit.md) / [source](../../../../sources/sodam-ai__Langent-MCP_One-Click_Kit) |
| [mcpads/create-retro-game-kr-patch](https://github.com/mcpads/create-retro-game-kr-patch) | 에이전트 하네스/MCP | 140 | 71 | 0 | unknown | agent-runtime | agent-runtime | entrypoint path not obvious, test/eval path not obvious, ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/e/mcpads__create-retro-game-kr-patch.md) / [report](../../../korea-trending/repositories/mcpads__create-retro-game-kr-patch.md) / [source](../../../../sources/mcpads__create-retro-game-kr-patch) |
| [latemonk/agent-store-skills](https://github.com/latemonk/agent-store-skills) | 에이전트 하네스/MCP | 138 | 73 | 0 | unknown | agent-runtime | agent-runtime | entrypoint path not obvious, test/eval path not obvious, ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/2/latemonk__agent-store-skills.md) / [report](../../../korea-trending/repositories/latemonk__agent-store-skills.md) / [source](../../../../sources/latemonk__agent-store-skills) |
| [rhkswnd0118-crypto/korean-rag-chatbot-boilerplate](https://github.com/rhkswnd0118-crypto/korean-rag-chatbot-boilerplate) | 에이전트 하네스/MCP | 134 | 66 | 0 | JavaScript | retrieval-memory, spec-artifacts | retrieval-memory, spec-artifacts | entrypoint path not obvious, test/eval path not obvious, ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/3/rhkswnd0118-crypto__korean-rag-chatbot-boilerplate.md) / [report](../../../korea-trending/repositories/rhkswnd0118-crypto__korean-rag-chatbot-boilerplate.md) / [source](../../../../sources/rhkswnd0118-crypto__korean-rag-chatbot-boilerplate) |
| [dongdorrong/korean-law-mcp-lab](https://github.com/dongdorrong/korean-law-mcp-lab) | 에이전트 하네스/MCP | 132 | 72 | 0 | Shell | agent-runtime, mcp/protocol | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | entrypoint path not obvious, test/eval path not obvious, ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/1/dongdorrong__korean-law-mcp-lab.md) / [report](../../../korea-trending/repositories/dongdorrong__korean-law-mcp-lab.md) / [source](../../../../sources/dongdorrong__korean-law-mcp-lab) |
| [hwan96-ai/genai-case-study-showcase](https://github.com/hwan96-ai/genai-case-study-showcase) | 에이전트 하네스/MCP | 123 | 75 | 0 | HTML | retrieval-memory | retrieval-memory | entrypoint path not obvious, test/eval path not obvious, ci path not obvious, no high-confidence source references | [source deep dive](../../../source-deep-dives/repositories/d/hwan96-ai__genai-case-study-showcase.md) / [report](../../../korea-trending/repositories/hwan96-ai__genai-case-study-showcase.md) / [source](../../../../sources/hwan96-ai__genai-case-study-showcase) |
| [ajgarciaj/NaViL](https://github.com/ajgarciaj/NaViL) | 에이전트 하네스/MCP | 104 | 69 | 0 | unknown |  | 소스 구조 신호가 약해 추가 수동 확인이 필요한 레포 | entrypoint path not obvious, test/eval path not obvious, ci path not obvious, no high-confidence source references | [source deep dive](../../../source-deep-dives/repositories/f/ajgarciaj__NaViL.md) / [report](../../../korea-trending/repositories/ajgarciaj__NaViL.md) / [source](../../../../sources/ajgarciaj__NaViL) |
| [gracebereblue-cpu/-mcp](https://github.com/gracebereblue-cpu/-mcp) | 에이전트 하네스/MCP | 103 | 76 | 0 | unknown |  | 소스 구조 신호가 약해 추가 수동 확인이 필요한 레포 | entrypoint path not obvious, test/eval path not obvious, ci path not obvious, no high-confidence source references | [source deep dive](../../../source-deep-dives/repositories/3/gracebereblue-cpu__-mcp.md) / [report](../../../korea-trending/repositories/gracebereblue-cpu__-mcp.md) / [source](../../../../sources/gracebereblue-cpu__-mcp) |
| [everynation/kimchisushi-mcp](https://github.com/everynation/kimchisushi-mcp) | 에이전트 하네스/MCP | 103 | 73 | 0 | unknown |  | 소스 구조 신호가 약해 추가 수동 확인이 필요한 레포 | entrypoint path not obvious, test/eval path not obvious, ci path not obvious, no high-confidence source references | [source deep dive](../../../source-deep-dives/repositories/1/everynation__kimchisushi-mcp.md) / [report](../../../korea-trending/repositories/everynation__kimchisushi-mcp.md) / [source](../../../../sources/everynation__kimchisushi-mcp) |
| [dream8837z/hwp-hwpx-proposal-mcp](https://github.com/dream8837z/hwp-hwpx-proposal-mcp) | 에이전트 하네스/MCP | 101 | 69 | 0 | unknown |  | 소스 구조 신호가 약해 추가 수동 확인이 필요한 레포 | entrypoint path not obvious, test/eval path not obvious, ci path not obvious, no high-confidence source references | [source deep dive](../../../source-deep-dives/repositories/2/dream8837z__hwp-hwpx-proposal-mcp.md) / [report](../../../korea-trending/repositories/dream8837z__hwp-hwpx-proposal-mcp.md) / [source](../../../../sources/dream8837z__hwp-hwpx-proposal-mcp) |
| [alice840126-ship-it/korean-law-mcp-setup](https://github.com/alice840126-ship-it/korean-law-mcp-setup) | 에이전트 하네스/MCP | 101 | 68 | 0 | unknown |  | 소스 구조 신호가 약해 추가 수동 확인이 필요한 레포 | entrypoint path not obvious, test/eval path not obvious, ci path not obvious, no high-confidence source references | [source deep dive](../../../source-deep-dives/repositories/a/alice840126-ship-it__korean-law-mcp-setup.md) / [report](../../../korea-trending/repositories/alice840126-ship-it__korean-law-mcp-setup.md) / [source](../../../../sources/alice840126-ship-it__korean-law-mcp-setup) |
| [WangRongsheng/awesome-LLM-resources](https://github.com/WangRongsheng/awesome-LLM-resources) | 에이전트 하네스/MCP | 85 | 0 | 8550 | unknown |  | 소스 구조 신호가 약해 추가 수동 확인이 필요한 레포 | entrypoint path not obvious, test/eval path not obvious, ci path not obvious, no high-confidence source references | [source deep dive](../../../source-deep-dives/repositories/c/WangRongsheng__awesome-LLM-resources.md) / [report](../../../llm-wiki/repositories/WangRongsheng__awesome-LLM-resources.md) / [source](../../../../sources/WangRongsheng__awesome-LLM-resources) |
