# SciSharp/BotSharp 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

AI Multi-Agent Framework in .NET

## 요약

- 조사 단위: `sources/SciSharp__BotSharp` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 1,951 files, 807 directories, depth score 105, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 agent/tool runtime, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 mcp=src/Infrastructure/BotSharp.OpenAPI/Controllers/Mcp/McpController.cs, src/Infrastructure/BotSharp.Core/MCP/BotSharpMCPExtensions.cs, src/Infrastructure/BotSharp.Core/MCP/Settings/MCPSettings.cs이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

## 바로가기

| 이동 | 여기서 볼 것 |
| --- | --- |
| [전체 시작 README](../../../../README.md) | 레포 전체 목적, 핵심 카테고리, 읽는 순서. |
| [전체 보고서 읽기 지도](../../../README.md) | 모든 보고서의 시작점, 주제, 폴더 지도. |
| [주제별 보고서 목차](../../../by-topic/README.md) | 조사 질문 기준으로 보고서를 찾는 입구. |
| [표/CSV 목차](../../../tables/README.md) | 표로 빠르게 훑고 CSV로 비교하는 입구. |
| [레포별 인사이트](../../../repository-insights/README.md) | 레포별 총평과 위험 신호. |
| [소스 딥다이브](../../README.md) | 주제별 소스 경로 근거. |
| [레포별 소스 딥다이브](../README.md) | 로컬 클론 1개당 1개 Markdown 딥다이브. |
| [소스 트렌드 인사이트](../../../source-insights/README.md) | 카테고리별 트렌드와 레포별 특징 비교. |


## 레포 컨텍스트

| 항목 | 값 |
| --- | --- |
| 레포 | SciSharp/BotSharp |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | C# |
| Stars | 3075 |
| Forks | 638 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/SciSharp__BotSharp](../../../../sources/SciSharp__BotSharp) |
| 기존 보고서 | [reports/global-trending/repositories/SciSharp__BotSharp.md](../../../global-trending/repositories/SciSharp__BotSharp.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 1951 / 807 |
| 관측 최대 깊이 | 9 |
| 상위 디렉터리 | .github, arts, BotSharp.Core.UnitTests, dockerfiles, docs, src, tests |
| 상위 확장자 | .cs: 1555, .json: 110, .liquid: 83, .csproj: 69, .png: 49, .md: 42, (none): 6, .drawio: 5, .yml: 5, .pdf: 3, .sln: 3, .props: 2 |
| 소스 패턴 | agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| src | source boundary | 78 |
| docs | documentation surface | 68 |
| tests | validation surface | 58 |
| .github | ci surface | 1 |
| arts | top-level component | 1 |
| BotSharp.Core.UnitTests | validation surface | 1 |
| dockerfiles | documentation surface | 1 |


## 실행 방식

_root manifest에서 추출된 command surface가 없습니다._


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | 없음 |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 309 | [tests/BotSharp.Plugin.PizzaBot/Hooks/CommonAgentHook.cs](../../../../sources/SciSharp__BotSharp/tests/BotSharp.Plugin.PizzaBot/Hooks/CommonAgentHook.cs)<br>[tests/BotSharp.Plugin.PizzaBot/Hooks/PizzaBotAgentHook.cs](../../../../sources/SciSharp__BotSharp/tests/BotSharp.Plugin.PizzaBot/Hooks/PizzaBotAgentHook.cs)<br>[tests/BotSharp.Plugin.PizzaBot/Hooks/PizzaBotConversationHook.cs](../../../../sources/SciSharp__BotSharp/tests/BotSharp.Plugin.PizzaBot/Hooks/PizzaBotConversationHook.cs)<br>[tests/BotSharp.Plugin.PizzaBot/data/agents/fe8c60aa-b114-4ef3-93cb-a8efeac80f75/agent.json](../../../../sources/SciSharp__BotSharp/tests/BotSharp.Plugin.PizzaBot/data/agents/fe8c60aa-b114-4ef3-93cb-a8efeac80f75/agent.json)<br>[tests/BotSharp.Plugin.PizzaBot/data/agents/fe8c60aa-b114-4ef3-93cb-a8efeac80f75/instructions/instruction.liquid](../../../../sources/SciSharp__BotSharp/tests/BotSharp.Plugin.PizzaBot/data/agents/fe8c60aa-b114-4ef3-93cb-a8efeac80f75/instructions/instruction.liquid)<br>[tests/BotSharp.Plugin.PizzaBot/data/agents/fe8c60aa-b114-4ef3-93cb-a8efeac80f75/functions/make_payment.json](../../../../sources/SciSharp__BotSharp/tests/BotSharp.Plugin.PizzaBot/data/agents/fe8c60aa-b114-4ef3-93cb-a8efeac80f75/functions/make_payment.json)<br>[tests/BotSharp.Plugin.PizzaBot/data/agents/cdd9023f-a371-407a-43bf-f36ddccce340/agent.json](../../../../sources/SciSharp__BotSharp/tests/BotSharp.Plugin.PizzaBot/data/agents/cdd9023f-a371-407a-43bf-f36ddccce340/agent.json)<br>[tests/BotSharp.Plugin.PizzaBot/data/agents/c2b57a74-ae4e-4c81-b3ad-9ac5bff982bd/agent.json](../../../../sources/SciSharp__BotSharp/tests/BotSharp.Plugin.PizzaBot/data/agents/c2b57a74-ae4e-4c81-b3ad-9ac5bff982bd/agent.json) |
| mcp | 10 | [src/Infrastructure/BotSharp.OpenAPI/Controllers/Mcp/McpController.cs](../../../../sources/SciSharp__BotSharp/src/Infrastructure/BotSharp.OpenAPI/Controllers/Mcp/McpController.cs)<br>[src/Infrastructure/BotSharp.Core/MCP/BotSharpMCPExtensions.cs](../../../../sources/SciSharp__BotSharp/src/Infrastructure/BotSharp.Core/MCP/BotSharpMCPExtensions.cs)<br>[src/Infrastructure/BotSharp.Core/MCP/Settings/MCPSettings.cs](../../../../sources/SciSharp__BotSharp/src/Infrastructure/BotSharp.Core/MCP/Settings/MCPSettings.cs)<br>[src/Infrastructure/BotSharp.Core/MCP/Services/McpService.cs](../../../../sources/SciSharp__BotSharp/src/Infrastructure/BotSharp.Core/MCP/Services/McpService.cs)<br>[src/Infrastructure/BotSharp.Core/MCP/Managers/McpClientManager.cs](../../../../sources/SciSharp__BotSharp/src/Infrastructure/BotSharp.Core/MCP/Managers/McpClientManager.cs)<br>[src/Infrastructure/BotSharp.Core/MCP/Hooks/MCPToolAgentHook.cs](../../../../sources/SciSharp__BotSharp/src/Infrastructure/BotSharp.Core/MCP/Hooks/MCPToolAgentHook.cs)<br>[src/Infrastructure/BotSharp.Core/MCP/Helpers/AiFunctionHelper.cs](../../../../sources/SciSharp__BotSharp/src/Infrastructure/BotSharp.Core/MCP/Helpers/AiFunctionHelper.cs)<br>[src/Infrastructure/BotSharp.Abstraction/MCP/Services/IMcpService.cs](../../../../sources/SciSharp__BotSharp/src/Infrastructure/BotSharp.Abstraction/MCP/Services/IMcpService.cs) |
| retrieval | 46 | [src/Plugins/BotSharp.Plugin.OpenAI/Providers/Embedding/TextEmbeddingProvider.cs](../../../../sources/SciSharp__BotSharp/src/Plugins/BotSharp.Plugin.OpenAI/Providers/Embedding/TextEmbeddingProvider.cs)<br>[src/Plugins/BotSharp.Plugin.Membase/Models/Graph/Edge.cs](../../../../sources/SciSharp__BotSharp/src/Plugins/BotSharp.Plugin.Membase/Models/Graph/Edge.cs)<br>[src/Plugins/BotSharp.Plugin.Membase/Models/Graph/GraphInfo.cs](../../../../sources/SciSharp__BotSharp/src/Plugins/BotSharp.Plugin.Membase/Models/Graph/GraphInfo.cs)<br>[src/Plugins/BotSharp.Plugin.Membase/Models/Graph/Node.cs](../../../../sources/SciSharp__BotSharp/src/Plugins/BotSharp.Plugin.Membase/Models/Graph/Node.cs)<br>[src/Plugins/BotSharp.Plugin.KnowledgeBase/Services/Graph/SementicGraphKnowledgeBase.cs](../../../../sources/SciSharp__BotSharp/src/Plugins/BotSharp.Plugin.KnowledgeBase/Services/Graph/SementicGraphKnowledgeBase.cs)<br>[src/Plugins/BotSharp.Plugin.KnowledgeBase/Services/Base/Vector/VectorKnowledgeBase.Collection.cs](../../../../sources/SciSharp__BotSharp/src/Plugins/BotSharp.Plugin.KnowledgeBase/Services/Base/Vector/VectorKnowledgeBase.Collection.cs)<br>[src/Plugins/BotSharp.Plugin.KnowledgeBase/Services/Base/Vector/VectorKnowledgeBase.cs](../../../../sources/SciSharp__BotSharp/src/Plugins/BotSharp.Plugin.KnowledgeBase/Services/Base/Vector/VectorKnowledgeBase.cs)<br>[src/Plugins/BotSharp.Plugin.KnowledgeBase/Services/Base/Vector/VectorKnowledgeBase.Data.cs](../../../../sources/SciSharp__BotSharp/src/Plugins/BotSharp.Plugin.KnowledgeBase/Services/Base/Vector/VectorKnowledgeBase.Data.cs) |
| spec | 30 | [docs/requirements.txt](../../../../sources/SciSharp__BotSharp/docs/requirements.txt)<br>[docs/architecture/agent-utility.md](../../../../sources/SciSharp__BotSharp/docs/architecture/agent-utility.md)<br>[docs/architecture/authentication.md](../../../../sources/SciSharp__BotSharp/docs/architecture/authentication.md)<br>[docs/architecture/data-persistence.md](../../../../sources/SciSharp__BotSharp/docs/architecture/data-persistence.md)<br>[docs/architecture/hooks.md](../../../../sources/SciSharp__BotSharp/docs/architecture/hooks.md)<br>[docs/architecture/logging.md](../../../../sources/SciSharp__BotSharp/docs/architecture/logging.md)<br>[docs/architecture/plugin.md](../../../../sources/SciSharp__BotSharp/docs/architecture/plugin.md)<br>[docs/architecture/routing.md](../../../../sources/SciSharp__BotSharp/docs/architecture/routing.md) |
| eval | 72 | [tests/UnitTest/A2AServiceContinuationTokenTests.cs](../../../../sources/SciSharp__BotSharp/tests/UnitTest/A2AServiceContinuationTokenTests.cs)<br>[tests/UnitTest/MainTest.cs](../../../../sources/SciSharp__BotSharp/tests/UnitTest/MainTest.cs)<br>[tests/UnitTest/UnitTest.csproj](../../../../sources/SciSharp__BotSharp/tests/UnitTest/UnitTest.csproj)<br>[tests/UnitTest/Usings.cs](../../../../sources/SciSharp__BotSharp/tests/UnitTest/Usings.cs)<br>[tests/BotSharp.Test.RealtimeVoice/appsettings.json](../../../../sources/SciSharp__BotSharp/tests/BotSharp.Test.RealtimeVoice/appsettings.json)<br>[tests/BotSharp.Test.RealtimeVoice/BotSharp.Test.RealtimeVoice.csproj](../../../../sources/SciSharp__BotSharp/tests/BotSharp.Test.RealtimeVoice/BotSharp.Test.RealtimeVoice.csproj)<br>[tests/BotSharp.Test.RealtimeVoice/Program.cs](../../../../sources/SciSharp__BotSharp/tests/BotSharp.Test.RealtimeVoice/Program.cs)<br>[tests/BotSharp.Test.RealtimeVoice/Using.cs](../../../../sources/SciSharp__BotSharp/tests/BotSharp.Test.RealtimeVoice/Using.cs) |
| security | 0 | 명확하지 않음 |
| ci | 1 | [.github/workflows/build.yml](../../../../sources/SciSharp__BotSharp/.github/workflows/build.yml) |
| container | 10 | [dockerfiles/.env](../../../../sources/SciSharp__BotSharp/dockerfiles/.env)<br>[dockerfiles/appsettings.json](../../../../sources/SciSharp__BotSharp/dockerfiles/appsettings.json)<br>[dockerfiles/botsharp.json](../../../../sources/SciSharp__BotSharp/dockerfiles/botsharp.json)<br>[dockerfiles/docker-compose.infrastructure.override.yml](../../../../sources/SciSharp__BotSharp/dockerfiles/docker-compose.infrastructure.override.yml)<br>[dockerfiles/docker-compose.infrastructure.yml](../../../../sources/SciSharp__BotSharp/dockerfiles/docker-compose.infrastructure.yml)<br>[dockerfiles/docker-compose.yml](../../../../sources/SciSharp__BotSharp/dockerfiles/docker-compose.yml)<br>[dockerfiles/Readme.md](../../../../sources/SciSharp__BotSharp/dockerfiles/Readme.md)<br>[dockerfiles/run-docker-compose.ps1](../../../../sources/SciSharp__BotSharp/dockerfiles/run-docker-compose.ps1) |
| instruction | 0 | 명확하지 않음 |
| docs | 101 | [README.md](../../../../sources/SciSharp__BotSharp/README.md)<br>[src/Plugins/BotSharp.Plugin.WeChat/README.md](../../../../sources/SciSharp__BotSharp/src/Plugins/BotSharp.Plugin.WeChat/README.md)<br>[src/Plugins/BotSharp.Plugin.WebDriver/README.md](../../../../sources/SciSharp__BotSharp/src/Plugins/BotSharp.Plugin.WebDriver/README.md)<br>[src/Plugins/BotSharp.Plugin.SemanticKernel/readme.md](../../../../sources/SciSharp__BotSharp/src/Plugins/BotSharp.Plugin.SemanticKernel/readme.md)<br>[src/Plugins/BotSharp.Plugin.MicrosoftTeams/README.md](../../../../sources/SciSharp__BotSharp/src/Plugins/BotSharp.Plugin.MicrosoftTeams/README.md)<br>[src/Infrastructure/BotSharp.Core.Rules/docs/rule-flow-guide.md](../../../../sources/SciSharp__BotSharp/src/Infrastructure/BotSharp.Core.Rules/docs/rule-flow-guide.md)<br>[docs/conf.py](../../../../sources/SciSharp__BotSharp/docs/conf.py)<br>[docs/index.rst](../../../../sources/SciSharp__BotSharp/docs/index.rst) |
| config | 2 | [docs/Makefile](../../../../sources/SciSharp__BotSharp/docs/Makefile)<br>[docs/requirements.txt](../../../../sources/SciSharp__BotSharp/docs/requirements.txt) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 72 | [tests/UnitTest/A2AServiceContinuationTokenTests.cs](../../../../sources/SciSharp__BotSharp/tests/UnitTest/A2AServiceContinuationTokenTests.cs)<br>[tests/UnitTest/MainTest.cs](../../../../sources/SciSharp__BotSharp/tests/UnitTest/MainTest.cs)<br>[tests/UnitTest/UnitTest.csproj](../../../../sources/SciSharp__BotSharp/tests/UnitTest/UnitTest.csproj)<br>[tests/UnitTest/Usings.cs](../../../../sources/SciSharp__BotSharp/tests/UnitTest/Usings.cs)<br>[tests/BotSharp.Test.RealtimeVoice/appsettings.json](../../../../sources/SciSharp__BotSharp/tests/BotSharp.Test.RealtimeVoice/appsettings.json)<br>[tests/BotSharp.Test.RealtimeVoice/BotSharp.Test.RealtimeVoice.csproj](../../../../sources/SciSharp__BotSharp/tests/BotSharp.Test.RealtimeVoice/BotSharp.Test.RealtimeVoice.csproj) |
| CI workflow | 1 | [.github/workflows/build.yml](../../../../sources/SciSharp__BotSharp/.github/workflows/build.yml) |
| 컨테이너/배포 | 10 | [dockerfiles/.env](../../../../sources/SciSharp__BotSharp/dockerfiles/.env)<br>[dockerfiles/appsettings.json](../../../../sources/SciSharp__BotSharp/dockerfiles/appsettings.json)<br>[dockerfiles/botsharp.json](../../../../sources/SciSharp__BotSharp/dockerfiles/botsharp.json)<br>[dockerfiles/docker-compose.infrastructure.override.yml](../../../../sources/SciSharp__BotSharp/dockerfiles/docker-compose.infrastructure.override.yml)<br>[dockerfiles/docker-compose.infrastructure.yml](../../../../sources/SciSharp__BotSharp/dockerfiles/docker-compose.infrastructure.yml)<br>[dockerfiles/docker-compose.yml](../../../../sources/SciSharp__BotSharp/dockerfiles/docker-compose.yml) |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | path scan에서 primary entrypoint가 명확하지 않음 |
| operation | 없음 |
| security | security/policy 표면이 명확하지 않음; agent instruction 파일이 명확하지 않음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `src/Infrastructure/BotSharp.OpenAPI/Controllers/Mcp/McpController.cs`, `src/Infrastructure/BotSharp.Core/MCP/BotSharpMCPExtensions.cs`, `src/Infrastructure/BotSharp.Core/MCP/Settings/MCPSettings.cs`.
2. agent/tool runtime 매핑: `tests/BotSharp.Plugin.PizzaBot/Hooks/CommonAgentHook.cs`, `tests/BotSharp.Plugin.PizzaBot/Hooks/PizzaBotAgentHook.cs`, `tests/BotSharp.Plugin.PizzaBot/Hooks/PizzaBotConversationHook.cs`.
3. retrieval/memory/indexing 확인: `src/Plugins/BotSharp.Plugin.OpenAI/Providers/Embedding/TextEmbeddingProvider.cs`, `src/Plugins/BotSharp.Plugin.Membase/Models/Graph/Edge.cs`, `src/Plugins/BotSharp.Plugin.Membase/Models/Graph/GraphInfo.cs`.
4. test/eval 파일로 동작 검증: `tests/UnitTest/A2AServiceContinuationTokenTests.cs`, `tests/UnitTest/MainTest.cs`, `tests/UnitTest/UnitTest.csproj`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 AI Multi Agent Framework in .NET. 핵심 구조 신호는 C#, README.md, LICENSE, tests, ci, docs이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
