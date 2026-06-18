# SciSharp/BotSharp Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

AI Multi-Agent Framework in .NET

## 요약

- 조사 단위: `sources/SciSharp__BotSharp` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 1,951 files, 807 directories, depth score 111, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 agent/tool runtime, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 mcp=src/Infrastructure/BotSharp.OpenAPI/Controllers/Mcp/McpController.cs, src/Infrastructure/BotSharp.Core/MCP/BotSharpMCPExtensions.cs, src/Infrastructure/BotSharp.Core/MCP/Settings/MCPSettings.cs이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | SciSharp/BotSharp |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | C# |
| Stars | 3075 |
| Forks | 638 |
| License | none |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/SciSharp__BotSharp](../../../../sources/SciSharp__BotSharp) |
| Existing report | [reports/global-trending/repositories/SciSharp__BotSharp.md](../../../global-trending/repositories/SciSharp__BotSharp.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 1951 / 807 |
| Max observed depth | 9 |
| Top directories | .github, arts, BotSharp.Core.UnitTests, dockerfiles, docs, src, tests |
| Top extensions | .cs: 1555, .json: 110, .liquid: 83, .csproj: 69, .png: 49, .md: 42, (none): 6, .drawio: 5, .yml: 5, .pdf: 3, .sln: 3, .props: 2 |
| Source patterns | agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 78 |
| docs | documentation surface | 68 |
| tests | validation surface | 58 |
| .github | ci surface | 1 |
| arts | top-level component | 1 |
| BotSharp.Core.UnitTests | validation surface | 1 |
| dockerfiles | documentation surface | 1 |


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
| mcp | [src/Infrastructure/BotSharp.OpenAPI/Controllers/Mcp/McpController.cs](../../../../sources/SciSharp__BotSharp/src/Infrastructure/BotSharp.OpenAPI/Controllers/Mcp/McpController.cs) | mcp signal |
| mcp | [src/Infrastructure/BotSharp.Core/MCP/BotSharpMCPExtensions.cs](../../../../sources/SciSharp__BotSharp/src/Infrastructure/BotSharp.Core/MCP/BotSharpMCPExtensions.cs) | mcp signal |
| mcp | [src/Infrastructure/BotSharp.Core/MCP/Settings/MCPSettings.cs](../../../../sources/SciSharp__BotSharp/src/Infrastructure/BotSharp.Core/MCP/Settings/MCPSettings.cs) | mcp signal |
| mcp | [src/Infrastructure/BotSharp.Core/MCP/Services/McpService.cs](../../../../sources/SciSharp__BotSharp/src/Infrastructure/BotSharp.Core/MCP/Services/McpService.cs) | mcp signal |
| agentRuntime | [tests/BotSharp.Plugin.PizzaBot/Hooks/CommonAgentHook.cs](../../../../sources/SciSharp__BotSharp/tests/BotSharp.Plugin.PizzaBot/Hooks/CommonAgentHook.cs) | agentRuntime signal |
| agentRuntime | [tests/BotSharp.Plugin.PizzaBot/Hooks/PizzaBotAgentHook.cs](../../../../sources/SciSharp__BotSharp/tests/BotSharp.Plugin.PizzaBot/Hooks/PizzaBotAgentHook.cs) | agentRuntime signal |
| agentRuntime | [tests/BotSharp.Plugin.PizzaBot/Hooks/PizzaBotConversationHook.cs](../../../../sources/SciSharp__BotSharp/tests/BotSharp.Plugin.PizzaBot/Hooks/PizzaBotConversationHook.cs) | agentRuntime signal |
| agentRuntime | [tests/BotSharp.Plugin.PizzaBot/data/agents/fe8c60aa-b114-4ef3-93cb-a8efeac80f75/agent.json](../../../../sources/SciSharp__BotSharp/tests/BotSharp.Plugin.PizzaBot/data/agents/fe8c60aa-b114-4ef3-93cb-a8efeac80f75/agent.json) | agentRuntime signal |
| config | [docs/Makefile](../../../../sources/SciSharp__BotSharp/docs/Makefile) | config signal |
| config | [docs/requirements.txt](../../../../sources/SciSharp__BotSharp/docs/requirements.txt) | config signal |
| ci | [.github/workflows/build.yml](../../../../sources/SciSharp__BotSharp/.github/workflows/build.yml) | ci support |
| container | [dockerfiles/.env](../../../../sources/SciSharp__BotSharp/dockerfiles/.env) | container support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 309 | [tests/BotSharp.Plugin.PizzaBot/Hooks/CommonAgentHook.cs](../../../../sources/SciSharp__BotSharp/tests/BotSharp.Plugin.PizzaBot/Hooks/CommonAgentHook.cs)<br>[tests/BotSharp.Plugin.PizzaBot/Hooks/PizzaBotAgentHook.cs](../../../../sources/SciSharp__BotSharp/tests/BotSharp.Plugin.PizzaBot/Hooks/PizzaBotAgentHook.cs)<br>[tests/BotSharp.Plugin.PizzaBot/Hooks/PizzaBotConversationHook.cs](../../../../sources/SciSharp__BotSharp/tests/BotSharp.Plugin.PizzaBot/Hooks/PizzaBotConversationHook.cs)<br>[tests/BotSharp.Plugin.PizzaBot/data/agents/fe8c60aa-b114-4ef3-93cb-a8efeac80f75/agent.json](../../../../sources/SciSharp__BotSharp/tests/BotSharp.Plugin.PizzaBot/data/agents/fe8c60aa-b114-4ef3-93cb-a8efeac80f75/agent.json)<br>[tests/BotSharp.Plugin.PizzaBot/data/agents/fe8c60aa-b114-4ef3-93cb-a8efeac80f75/instructions/instruction.liquid](../../../../sources/SciSharp__BotSharp/tests/BotSharp.Plugin.PizzaBot/data/agents/fe8c60aa-b114-4ef3-93cb-a8efeac80f75/instructions/instruction.liquid)<br>[tests/BotSharp.Plugin.PizzaBot/data/agents/fe8c60aa-b114-4ef3-93cb-a8efeac80f75/functions/make_payment.json](../../../../sources/SciSharp__BotSharp/tests/BotSharp.Plugin.PizzaBot/data/agents/fe8c60aa-b114-4ef3-93cb-a8efeac80f75/functions/make_payment.json)<br>[tests/BotSharp.Plugin.PizzaBot/data/agents/cdd9023f-a371-407a-43bf-f36ddccce340/agent.json](../../../../sources/SciSharp__BotSharp/tests/BotSharp.Plugin.PizzaBot/data/agents/cdd9023f-a371-407a-43bf-f36ddccce340/agent.json)<br>[tests/BotSharp.Plugin.PizzaBot/data/agents/c2b57a74-ae4e-4c81-b3ad-9ac5bff982bd/agent.json](../../../../sources/SciSharp__BotSharp/tests/BotSharp.Plugin.PizzaBot/data/agents/c2b57a74-ae4e-4c81-b3ad-9ac5bff982bd/agent.json) |
| mcp | 10 | [src/Infrastructure/BotSharp.OpenAPI/Controllers/Mcp/McpController.cs](../../../../sources/SciSharp__BotSharp/src/Infrastructure/BotSharp.OpenAPI/Controllers/Mcp/McpController.cs)<br>[src/Infrastructure/BotSharp.Core/MCP/BotSharpMCPExtensions.cs](../../../../sources/SciSharp__BotSharp/src/Infrastructure/BotSharp.Core/MCP/BotSharpMCPExtensions.cs)<br>[src/Infrastructure/BotSharp.Core/MCP/Settings/MCPSettings.cs](../../../../sources/SciSharp__BotSharp/src/Infrastructure/BotSharp.Core/MCP/Settings/MCPSettings.cs)<br>[src/Infrastructure/BotSharp.Core/MCP/Services/McpService.cs](../../../../sources/SciSharp__BotSharp/src/Infrastructure/BotSharp.Core/MCP/Services/McpService.cs)<br>[src/Infrastructure/BotSharp.Core/MCP/Managers/McpClientManager.cs](../../../../sources/SciSharp__BotSharp/src/Infrastructure/BotSharp.Core/MCP/Managers/McpClientManager.cs)<br>[src/Infrastructure/BotSharp.Core/MCP/Hooks/MCPToolAgentHook.cs](../../../../sources/SciSharp__BotSharp/src/Infrastructure/BotSharp.Core/MCP/Hooks/MCPToolAgentHook.cs)<br>[src/Infrastructure/BotSharp.Core/MCP/Helpers/AiFunctionHelper.cs](../../../../sources/SciSharp__BotSharp/src/Infrastructure/BotSharp.Core/MCP/Helpers/AiFunctionHelper.cs)<br>[src/Infrastructure/BotSharp.Abstraction/MCP/Services/IMcpService.cs](../../../../sources/SciSharp__BotSharp/src/Infrastructure/BotSharp.Abstraction/MCP/Services/IMcpService.cs) |
| retrieval | 46 | [src/Plugins/BotSharp.Plugin.OpenAI/Providers/Embedding/TextEmbeddingProvider.cs](../../../../sources/SciSharp__BotSharp/src/Plugins/BotSharp.Plugin.OpenAI/Providers/Embedding/TextEmbeddingProvider.cs)<br>[src/Plugins/BotSharp.Plugin.Membase/Models/Graph/Edge.cs](../../../../sources/SciSharp__BotSharp/src/Plugins/BotSharp.Plugin.Membase/Models/Graph/Edge.cs)<br>[src/Plugins/BotSharp.Plugin.Membase/Models/Graph/GraphInfo.cs](../../../../sources/SciSharp__BotSharp/src/Plugins/BotSharp.Plugin.Membase/Models/Graph/GraphInfo.cs)<br>[src/Plugins/BotSharp.Plugin.Membase/Models/Graph/Node.cs](../../../../sources/SciSharp__BotSharp/src/Plugins/BotSharp.Plugin.Membase/Models/Graph/Node.cs)<br>[src/Plugins/BotSharp.Plugin.KnowledgeBase/Services/Graph/SementicGraphKnowledgeBase.cs](../../../../sources/SciSharp__BotSharp/src/Plugins/BotSharp.Plugin.KnowledgeBase/Services/Graph/SementicGraphKnowledgeBase.cs)<br>[src/Plugins/BotSharp.Plugin.KnowledgeBase/Services/Base/Vector/VectorKnowledgeBase.Collection.cs](../../../../sources/SciSharp__BotSharp/src/Plugins/BotSharp.Plugin.KnowledgeBase/Services/Base/Vector/VectorKnowledgeBase.Collection.cs)<br>[src/Plugins/BotSharp.Plugin.KnowledgeBase/Services/Base/Vector/VectorKnowledgeBase.cs](../../../../sources/SciSharp__BotSharp/src/Plugins/BotSharp.Plugin.KnowledgeBase/Services/Base/Vector/VectorKnowledgeBase.cs)<br>[src/Plugins/BotSharp.Plugin.KnowledgeBase/Services/Base/Vector/VectorKnowledgeBase.Data.cs](../../../../sources/SciSharp__BotSharp/src/Plugins/BotSharp.Plugin.KnowledgeBase/Services/Base/Vector/VectorKnowledgeBase.Data.cs) |
| spec | 30 | [docs/requirements.txt](../../../../sources/SciSharp__BotSharp/docs/requirements.txt)<br>[docs/architecture/agent-utility.md](../../../../sources/SciSharp__BotSharp/docs/architecture/agent-utility.md)<br>[docs/architecture/authentication.md](../../../../sources/SciSharp__BotSharp/docs/architecture/authentication.md)<br>[docs/architecture/data-persistence.md](../../../../sources/SciSharp__BotSharp/docs/architecture/data-persistence.md)<br>[docs/architecture/hooks.md](../../../../sources/SciSharp__BotSharp/docs/architecture/hooks.md)<br>[docs/architecture/logging.md](../../../../sources/SciSharp__BotSharp/docs/architecture/logging.md)<br>[docs/architecture/plugin.md](../../../../sources/SciSharp__BotSharp/docs/architecture/plugin.md)<br>[docs/architecture/routing.md](../../../../sources/SciSharp__BotSharp/docs/architecture/routing.md) |
| eval | 72 | [tests/UnitTest/A2AServiceContinuationTokenTests.cs](../../../../sources/SciSharp__BotSharp/tests/UnitTest/A2AServiceContinuationTokenTests.cs)<br>[tests/UnitTest/MainTest.cs](../../../../sources/SciSharp__BotSharp/tests/UnitTest/MainTest.cs)<br>[tests/UnitTest/UnitTest.csproj](../../../../sources/SciSharp__BotSharp/tests/UnitTest/UnitTest.csproj)<br>[tests/UnitTest/Usings.cs](../../../../sources/SciSharp__BotSharp/tests/UnitTest/Usings.cs)<br>[tests/BotSharp.Test.RealtimeVoice/appsettings.json](../../../../sources/SciSharp__BotSharp/tests/BotSharp.Test.RealtimeVoice/appsettings.json)<br>[tests/BotSharp.Test.RealtimeVoice/BotSharp.Test.RealtimeVoice.csproj](../../../../sources/SciSharp__BotSharp/tests/BotSharp.Test.RealtimeVoice/BotSharp.Test.RealtimeVoice.csproj)<br>[tests/BotSharp.Test.RealtimeVoice/Program.cs](../../../../sources/SciSharp__BotSharp/tests/BotSharp.Test.RealtimeVoice/Program.cs)<br>[tests/BotSharp.Test.RealtimeVoice/Using.cs](../../../../sources/SciSharp__BotSharp/tests/BotSharp.Test.RealtimeVoice/Using.cs) |
| security | 0 | not obvious |
| ci | 1 | [.github/workflows/build.yml](../../../../sources/SciSharp__BotSharp/.github/workflows/build.yml) |
| container | 10 | [dockerfiles/.env](../../../../sources/SciSharp__BotSharp/dockerfiles/.env)<br>[dockerfiles/appsettings.json](../../../../sources/SciSharp__BotSharp/dockerfiles/appsettings.json)<br>[dockerfiles/botsharp.json](../../../../sources/SciSharp__BotSharp/dockerfiles/botsharp.json)<br>[dockerfiles/docker-compose.infrastructure.override.yml](../../../../sources/SciSharp__BotSharp/dockerfiles/docker-compose.infrastructure.override.yml)<br>[dockerfiles/docker-compose.infrastructure.yml](../../../../sources/SciSharp__BotSharp/dockerfiles/docker-compose.infrastructure.yml)<br>[dockerfiles/docker-compose.yml](../../../../sources/SciSharp__BotSharp/dockerfiles/docker-compose.yml)<br>[dockerfiles/Readme.md](../../../../sources/SciSharp__BotSharp/dockerfiles/Readme.md)<br>[dockerfiles/run-docker-compose.ps1](../../../../sources/SciSharp__BotSharp/dockerfiles/run-docker-compose.ps1) |
| instruction | 0 | not obvious |
| docs | 101 | [README.md](../../../../sources/SciSharp__BotSharp/README.md)<br>[src/Plugins/BotSharp.Plugin.WeChat/README.md](../../../../sources/SciSharp__BotSharp/src/Plugins/BotSharp.Plugin.WeChat/README.md)<br>[src/Plugins/BotSharp.Plugin.WebDriver/README.md](../../../../sources/SciSharp__BotSharp/src/Plugins/BotSharp.Plugin.WebDriver/README.md)<br>[src/Plugins/BotSharp.Plugin.SemanticKernel/readme.md](../../../../sources/SciSharp__BotSharp/src/Plugins/BotSharp.Plugin.SemanticKernel/readme.md)<br>[src/Plugins/BotSharp.Plugin.MicrosoftTeams/README.md](../../../../sources/SciSharp__BotSharp/src/Plugins/BotSharp.Plugin.MicrosoftTeams/README.md)<br>[src/Infrastructure/BotSharp.Core.Rules/docs/rule-flow-guide.md](../../../../sources/SciSharp__BotSharp/src/Infrastructure/BotSharp.Core.Rules/docs/rule-flow-guide.md)<br>[docs/conf.py](../../../../sources/SciSharp__BotSharp/docs/conf.py)<br>[docs/index.rst](../../../../sources/SciSharp__BotSharp/docs/index.rst) |
| config | 2 | [docs/Makefile](../../../../sources/SciSharp__BotSharp/docs/Makefile)<br>[docs/requirements.txt](../../../../sources/SciSharp__BotSharp/docs/requirements.txt) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 72 | [tests/UnitTest/A2AServiceContinuationTokenTests.cs](../../../../sources/SciSharp__BotSharp/tests/UnitTest/A2AServiceContinuationTokenTests.cs)<br>[tests/UnitTest/MainTest.cs](../../../../sources/SciSharp__BotSharp/tests/UnitTest/MainTest.cs)<br>[tests/UnitTest/UnitTest.csproj](../../../../sources/SciSharp__BotSharp/tests/UnitTest/UnitTest.csproj)<br>[tests/UnitTest/Usings.cs](../../../../sources/SciSharp__BotSharp/tests/UnitTest/Usings.cs)<br>[tests/BotSharp.Test.RealtimeVoice/appsettings.json](../../../../sources/SciSharp__BotSharp/tests/BotSharp.Test.RealtimeVoice/appsettings.json)<br>[tests/BotSharp.Test.RealtimeVoice/BotSharp.Test.RealtimeVoice.csproj](../../../../sources/SciSharp__BotSharp/tests/BotSharp.Test.RealtimeVoice/BotSharp.Test.RealtimeVoice.csproj) |
| CI workflows | 1 | [.github/workflows/build.yml](../../../../sources/SciSharp__BotSharp/.github/workflows/build.yml) |
| Containers / deploy | 10 | [dockerfiles/.env](../../../../sources/SciSharp__BotSharp/dockerfiles/.env)<br>[dockerfiles/appsettings.json](../../../../sources/SciSharp__BotSharp/dockerfiles/appsettings.json)<br>[dockerfiles/botsharp.json](../../../../sources/SciSharp__BotSharp/dockerfiles/botsharp.json)<br>[dockerfiles/docker-compose.infrastructure.override.yml](../../../../sources/SciSharp__BotSharp/dockerfiles/docker-compose.infrastructure.override.yml)<br>[dockerfiles/docker-compose.infrastructure.yml](../../../../sources/SciSharp__BotSharp/dockerfiles/docker-compose.infrastructure.yml)<br>[dockerfiles/docker-compose.yml](../../../../sources/SciSharp__BotSharp/dockerfiles/docker-compose.yml) |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | none |
| security | security/policy surface not obvious; agent instruction files not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `src/Infrastructure/BotSharp.OpenAPI/Controllers/Mcp/McpController.cs`, `src/Infrastructure/BotSharp.Core/MCP/BotSharpMCPExtensions.cs`, `src/Infrastructure/BotSharp.Core/MCP/Settings/MCPSettings.cs`.
2. Map agent/tool runtime through: `tests/BotSharp.Plugin.PizzaBot/Hooks/CommonAgentHook.cs`, `tests/BotSharp.Plugin.PizzaBot/Hooks/PizzaBotAgentHook.cs`, `tests/BotSharp.Plugin.PizzaBot/Hooks/PizzaBotConversationHook.cs`.
3. Inspect retrieval/memory/indexing through: `src/Plugins/BotSharp.Plugin.OpenAI/Providers/Embedding/TextEmbeddingProvider.cs`, `src/Plugins/BotSharp.Plugin.Membase/Models/Graph/Edge.cs`, `src/Plugins/BotSharp.Plugin.Membase/Models/Graph/GraphInfo.cs`.
4. Verify behavior through test/eval files: `tests/UnitTest/A2AServiceContinuationTokenTests.cs`, `tests/UnitTest/MainTest.cs`, `tests/UnitTest/UnitTest.csproj`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 AI Multi Agent Framework in .NET. 핵심 구조 신호는 C#, README.md, LICENSE, tests, ci, docs이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
