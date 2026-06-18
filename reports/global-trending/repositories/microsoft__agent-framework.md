# microsoft/agent-framework

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/microsoft/agent-framework |
| local path | sources/microsoft__agent-framework |
| HEAD | 26a0a7e |
| stars/forks | 11429 / 1919 |
| language | Python |
| license |  |
| pushedAt | 2026-06-17T23:50:15Z |
| trendScore / priorityScore | 161 / 483 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | docs/features/durable-agents/README.md, docs/features/vector-stores-and-embeddings/README.md, docs/features/durable-agents/AGENTS.md |
| Developer tools / DX | 238 | dotnet/samples/02-agents/A2A/A2AAgent_AsFunctionTools/README.md, dotnet/samples/02-agents/A2A/A2AAgent_PollingForTaskCompletion/README.md, dotnet/samples/02-agents/A2A/A2AAgent_ProtocolSelection/README.md |
| MCP / agent interoperability | 197 | docs/features/durable-agents/README.md, docs/features/durable-agents/AGENTS.md, dotnet/samples/02-agents/AgentProviders/foundry/Agent_Step09_UsingMcpClientAsTools/README.md |
| RAG / retrieval / knowledge | 101 | docs/features/vector-stores-and-embeddings/README.md, dotnet/samples/02-agents/AgentWithMemory/AgentWithMemory_Step04_MemoryUsingFoundry/README.md, dotnet/samples/02-agents/AgentWithMemory/AgentWithMemory_Step05_BoundedChatHistory/README.md |
| Cloud native / infrastructure | 90 | docs/features/durable-agents/README.md, docs/features/vector-stores-and-embeddings/README.md, dotnet/samples/02-agents/AgentOpenTelemetry/README.md |
| Database / data infrastructure | 84 | docs/features/durable-agents/README.md, docs/features/vector-stores-and-embeddings/README.md, dotnet/samples/02-agents/AgentWithMemory/AgentWithMemory_Step03_MemoryUsingValkey_Bedrock/README.md |
| Observability / evaluation | 77 | docs/features/durable-agents/README.md, docs/features/vector-stores-and-embeddings/README.md, dotnet/samples/02-agents/AgentOpenTelemetry/README.md |
| Security / supply chain | 49 | docs/features/vector-stores-and-embeddings/README.md, dotnet/samples/02-agents/AgentOpenTelemetry/README.md, dotnet/samples/02-agents/AgentProviders/anthropic/Agent_With_Anthropic/README.md |
| Data / ML platform | 25 | dotnet/samples/02-agents/AgentProviders/foundry/Agent_Step01_Basics/README.md, dotnet/samples/02-agents/Agents/Agent_Step11_Middleware/README.md, dotnet/samples/02-agents/Agents/Agent_Step18_CompactionPipeline/README.md |
| Local LLM / inference | 23 | docs/features/vector-stores-and-embeddings/README.md, dotnet/samples/02-agents/AgentProviders/ollama/Agent_With_Ollama/README.md, dotnet/samples/02-agents/AgentProviders/README.md |
| Coding agent / software automation | 17 | docs/features/durable-agents/README.md, dotnet/samples/04-hosting/DurableAgents/AzureFunctions/08_ReliableStreaming/README.md, dotnet/samples/04-hosting/DurableAgents/ConsoleApps/07_ReliableStreaming/README.md |
| Frontend / app framework | 1 | dotnet/samples/02-agents/AGUI/README.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python, .NET |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 4905 |
| manifests | 40 |
| docs | 492 |
| tests | 1109 |
| ci/ops | 79 |
| spec artifacts | 50 |
| agent instruction files | 35 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Welcome to Microsoft Agent Framework! | Welcome to Microsoft Agent Framework! / Is this the right framework for you? / Key Features / Table of Contents / Getting Started / Installation / This will install all sub-packages, see `python/packages` for individual packages. / It may take a minute on first install on Windows. / For Foundry integration (used in the .NET quickstart below): / Learning Resources | ! Microsoft Agent Framework docs/assets/readme banner.png Welcome to Microsoft Agent Framework! ! Microsoft Foundry Discord https //dcbadge.limes.pink/api/server/b5zjErwbQM?style=flat https //discord.gg/b5zjErwbQM ! MS Learn Documentation https //img.shields.io/badge/MS%20Learn Documentation blue https //learn.microsoft.com/en us/agent framework/ ! PyPI https //img.shields.io/pypi/v/agent framework https //pypi.org/project/agent framework/ ! NuGet https //img.shields.io/nuget/v/Microsoft.Agents.AI https //www.nuget.org/profiles/MicrosoftAgentFramework/ ! GitHub stars https //img.shields.io/github/stars/microsoft/agent framework?style=social https //github.com/microsoft/agent framework/starga |


## Key Files

### Manifests

- docs/features/durable-agents/README.md
- docs/features/vector-stores-and-embeddings/README.md
- docs/features/durable-agents/AGENTS.md
- declarative-agents/agent-samples/README.md
- declarative-agents/workflow-samples/README.md
- dotnet/samples/02-agents/A2A/A2AAgent_AsFunctionTools/README.md
- dotnet/samples/02-agents/A2A/A2AAgent_PollingForTaskCompletion/README.md
- dotnet/samples/02-agents/A2A/A2AAgent_ProtocolSelection/README.md
- dotnet/samples/02-agents/A2A/A2AAgent_StreamReconnection/README.md
- dotnet/samples/02-agents/A2A/README.md
- dotnet/samples/02-agents/AgentOpenTelemetry/README.md
- dotnet/samples/02-agents/AgentProviders/a2a/Agent_With_A2A/README.md
- dotnet/samples/02-agents/AgentProviders/anthropic/Agent_Anthropic_Step01_Running/README.md
- dotnet/samples/02-agents/AgentProviders/anthropic/Agent_Anthropic_Step02_Reasoning/README.md
- dotnet/samples/02-agents/AgentProviders/anthropic/Agent_Anthropic_Step03_UsingFunctionTools/README.md
- dotnet/samples/02-agents/AgentProviders/anthropic/Agent_Anthropic_Step04_UsingSkills/README.md
- dotnet/samples/02-agents/AgentProviders/anthropic/Agent_With_Anthropic/README.md
- dotnet/samples/02-agents/AgentProviders/anthropic/README.md
- dotnet/samples/02-agents/AgentProviders/azure/Agent_With_AzureAIProject/README.md
- dotnet/samples/02-agents/AgentProviders/azure/Agent_With_AzureFoundryModel/README.md


### Spec / Docs / Prompt Artifacts

- docs/features/durable-agents/AGENTS.md
- dotnet/AGENTS.md
- dotnet/samples/AGENTS.md
- python/AGENTS.md
- python/samples/AGENTS.md
- python/packages/a2a/AGENTS.md
- python/packages/ag-ui/AGENTS.md
- python/packages/anthropic/AGENTS.md
- python/packages/azure-ai-search/AGENTS.md
- python/packages/azure-contentunderstanding/AGENTS.md
- python/packages/azure-cosmos/AGENTS.md
- python/packages/azurefunctions/AGENTS.md
- python/packages/bedrock/AGENTS.md
- python/packages/chatkit/AGENTS.md
- python/packages/claude/AGENTS.md
- python/packages/copilotstudio/AGENTS.md
- python/packages/core/AGENTS.md
- python/packages/declarative/AGENTS.md
- python/packages/devui/AGENTS.md
- python/packages/durabletask/AGENTS.md


### Agent Instruction Files

- docs/features/durable-agents/AGENTS.md
- dotnet/AGENTS.md
- dotnet/samples/AGENTS.md
- python/AGENTS.md
- python/samples/AGENTS.md
- python/packages/a2a/AGENTS.md
- python/packages/ag-ui/AGENTS.md
- python/packages/anthropic/AGENTS.md
- python/packages/azure-ai-search/AGENTS.md
- python/packages/azure-contentunderstanding/AGENTS.md
- python/packages/azure-cosmos/AGENTS.md
- python/packages/azurefunctions/AGENTS.md
- python/packages/bedrock/AGENTS.md
- python/packages/chatkit/AGENTS.md
- python/packages/claude/AGENTS.md


## Top Directories

| dir | count |
| --- | --- |
| dotnet | 3048 |
| python | 1723 |
| .github | 53 |
| docs | 48 |
| declarative-agents | 19 |
| .devcontainer | 2 |
| .gitattributes | 1 |
| .gitignore | 1 |
| CODE_OF_CONDUCT.md | 1 |
| COMMUNITY.md | 1 |
| CONTRIBUTING.md | 1 |
| LICENSE | 1 |
| README.md | 1 |
| schemas | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .cs | 2075 |
| .py | 1101 |
| .md | 487 |
| .csproj | 336 |
| .json | 206 |
| .yaml | 148 |
| [no-ext] | 112 |
| .tsx | 55 |
| .txt | 54 |
| .example | 46 |
| .yml | 40 |
| .toml | 34 |
| .ts | 27 |
| .http | 23 |
| .razor | 18 |
| .pyi | 17 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
