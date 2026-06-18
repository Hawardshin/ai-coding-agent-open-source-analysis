# junkai-li/NetCoreKevin Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

🤖基于.NET搭建的企业级中台AI知识库智能体开源架构：Skills技能管理、AI-Qdrant知识库、知识库重排模型、AI联网搜索、多智能体协同、智能体权限管控、AgentFramework、RAG检索增强、本地Ollama AI模型调用、智能体技能可控加载、领域事件、一库多租户、Log4、Jwt、CAP、SignalR、Mcp、Ioc、Hangfire、RabbitMQ、Xunit、前端（Vue + Ant Design）

## 요약

- 조사 단위: `sources/junkai-li__NetCoreKevin` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 863 files, 262 directories, depth score 116, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=Kevin/kevin.Module/Kevin.MCP.Server/Kevin.AI.MCP.Server.csproj, Kevin/kevin.Module/Kevin.MCP.Server/ServiceCollectionExtensions.cs, Kevin/kevin.Module/Kevin.MCP.Server/说明文档.txt이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | junkai-li/NetCoreKevin |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | C# |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/junkai-li__NetCoreKevin](../../../../sources/junkai-li__NetCoreKevin) |
| Existing report | [reports/korea-trending/repositories/junkai-li__NetCoreKevin.md](../../../korea-trending/repositories/junkai-li__NetCoreKevin.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 863 / 262 |
| Max observed depth | 8 |
| Top directories | App, Doc, InitData, Kevin, Test, vue |
| Top extensions | .cs: 652, .csproj: 41, .vue: 33, .js: 28, .png: 28, .txt: 13, .css: 12, .json: 9, .md: 9, (none): 8, .xml: 5, .config: 4 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| App | top-level component | 1 |
| Doc | documentation surface | 1 |
| InitData | top-level component | 1 |
| Kevin | top-level component | 1 |
| Test | validation surface | 1 |
| vue | top-level component | 1 |


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
| mcp | [Kevin/kevin.Module/Kevin.MCP.Server/Kevin.AI.MCP.Server.csproj](../../../../sources/junkai-li__NetCoreKevin/Kevin/kevin.Module/Kevin.MCP.Server/Kevin.AI.MCP.Server.csproj) | mcp signal |
| mcp | [Kevin/kevin.Module/Kevin.MCP.Server/ServiceCollectionExtensions.cs](../../../../sources/junkai-li__NetCoreKevin/Kevin/kevin.Module/Kevin.MCP.Server/ServiceCollectionExtensions.cs) | mcp signal |
| mcp | [Kevin/kevin.Module/Kevin.MCP.Server/说明文档.txt](../../../../sources/junkai-li__NetCoreKevin/Kevin/kevin.Module/Kevin.MCP.Server/说明文档.txt) | mcp signal |
| mcp | [Kevin/kevin.Module/Kevin.MCP.Server/Tools/MyTool.cs](../../../../sources/junkai-li__NetCoreKevin/Kevin/kevin.Module/Kevin.MCP.Server/Tools/MyTool.cs) | mcp signal |
| agentRuntime | [Test/Kevin.Web.Test/Kevin.RAG/Tools/DocumentProcessorTests.cs](../../../../sources/junkai-li__NetCoreKevin/Test/Kevin.Web.Test/Kevin.RAG/Tools/DocumentProcessorTests.cs) | agentRuntime signal |
| agentRuntime | [Test/Kevin.Web.Test/Kevin.RAG/Tools/ExcelReaderTests.cs](../../../../sources/junkai-li__NetCoreKevin/Test/Kevin.Web.Test/Kevin.RAG/Tools/ExcelReaderTests.cs) | agentRuntime signal |
| agentRuntime | [Test/Kevin.Web.Test/Kevin.RAG/Tools/HtmlReaderTests.cs](../../../../sources/junkai-li__NetCoreKevin/Test/Kevin.Web.Test/Kevin.RAG/Tools/HtmlReaderTests.cs) | agentRuntime signal |
| agentRuntime | [Test/Kevin.Web.Test/Kevin.RAG/Tools/ImageReaderTests.cs](../../../../sources/junkai-li__NetCoreKevin/Test/Kevin.Web.Test/Kevin.RAG/Tools/ImageReaderTests.cs) | agentRuntime signal |
| entrypoints | [vue/kevin.web.vue/src/App.vue](../../../../sources/junkai-li__NetCoreKevin/vue/kevin.web.vue/src/App.vue) | entrypoints signal |
| entrypoints | [vue/kevin.web.vue/src/main.js](../../../../sources/junkai-li__NetCoreKevin/vue/kevin.web.vue/src/main.js) | entrypoints signal |
| config | [vue/kevin.web.vue/package.json](../../../../sources/junkai-li__NetCoreKevin/vue/kevin.web.vue/package.json) | config signal |
| container | [docker-compose.yml](../../../../sources/junkai-li__NetCoreKevin/docker-compose.yml) | container support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 2 | [vue/kevin.web.vue/src/App.vue](../../../../sources/junkai-li__NetCoreKevin/vue/kevin.web.vue/src/App.vue)<br>[vue/kevin.web.vue/src/main.js](../../../../sources/junkai-li__NetCoreKevin/vue/kevin.web.vue/src/main.js) |
| agentRuntime | 29 | [Test/Kevin.Web.Test/Kevin.RAG/Tools/DocumentProcessorTests.cs](../../../../sources/junkai-li__NetCoreKevin/Test/Kevin.Web.Test/Kevin.RAG/Tools/DocumentProcessorTests.cs)<br>[Test/Kevin.Web.Test/Kevin.RAG/Tools/ExcelReaderTests.cs](../../../../sources/junkai-li__NetCoreKevin/Test/Kevin.Web.Test/Kevin.RAG/Tools/ExcelReaderTests.cs)<br>[Test/Kevin.Web.Test/Kevin.RAG/Tools/HtmlReaderTests.cs](../../../../sources/junkai-li__NetCoreKevin/Test/Kevin.Web.Test/Kevin.RAG/Tools/HtmlReaderTests.cs)<br>[Test/Kevin.Web.Test/Kevin.RAG/Tools/ImageReaderTests.cs](../../../../sources/junkai-li__NetCoreKevin/Test/Kevin.Web.Test/Kevin.RAG/Tools/ImageReaderTests.cs)<br>[Test/Kevin.Web.Test/Kevin.RAG/Tools/RemoteDocumentLoaderTests.cs](../../../../sources/junkai-li__NetCoreKevin/Test/Kevin.Web.Test/Kevin.RAG/Tools/RemoteDocumentLoaderTests.cs)<br>[Test/Kevin.Web.Test/Kevin.RAG/Tools/RemoteFileDownloaderTests.cs](../../../../sources/junkai-li__NetCoreKevin/Test/Kevin.Web.Test/Kevin.RAG/Tools/RemoteFileDownloaderTests.cs)<br>[Test/Kevin.Web.Test/Kevin.RAG/Tools/TextStreamReaderTests.cs](../../../../sources/junkai-li__NetCoreKevin/Test/Kevin.Web.Test/Kevin.RAG/Tools/TextStreamReaderTests.cs)<br>[Kevin/kevin.Module/Kevin.MCP.Server/Tools/MyTool.cs](../../../../sources/junkai-li__NetCoreKevin/Kevin/kevin.Module/Kevin.MCP.Server/Tools/MyTool.cs) |
| mcp | 7 | [Kevin/kevin.Module/Kevin.MCP.Server/Kevin.AI.MCP.Server.csproj](../../../../sources/junkai-li__NetCoreKevin/Kevin/kevin.Module/Kevin.MCP.Server/Kevin.AI.MCP.Server.csproj)<br>[Kevin/kevin.Module/Kevin.MCP.Server/ServiceCollectionExtensions.cs](../../../../sources/junkai-li__NetCoreKevin/Kevin/kevin.Module/Kevin.MCP.Server/ServiceCollectionExtensions.cs)<br>[Kevin/kevin.Module/Kevin.MCP.Server/说明文档.txt](../../../../sources/junkai-li__NetCoreKevin/Kevin/kevin.Module/Kevin.MCP.Server/说明文档.txt)<br>[Kevin/kevin.Module/Kevin.MCP.Server/Tools/MyTool.cs](../../../../sources/junkai-li__NetCoreKevin/Kevin/kevin.Module/Kevin.MCP.Server/Tools/MyTool.cs)<br>[Kevin/kevin.Module/Kevin.MCP.Server/Models/MCPSSEClientSetting.cs](../../../../sources/junkai-li__NetCoreKevin/Kevin/kevin.Module/Kevin.MCP.Server/Models/MCPSSEClientSetting.cs)<br>[Kevin/kevin.Module/Kevin.MCP.Server/Client/IMySSEToolClient.cs](../../../../sources/junkai-li__NetCoreKevin/Kevin/kevin.Module/Kevin.MCP.Server/Client/IMySSEToolClient.cs)<br>[Kevin/kevin.Module/Kevin.MCP.Server/Client/MySSEToolClient.cs](../../../../sources/junkai-li__NetCoreKevin/Kevin/kevin.Module/Kevin.MCP.Server/Client/MySSEToolClient.cs) |
| retrieval | 26 | [vue/kevin.web.vue/src/router/index.js](../../../../sources/junkai-li__NetCoreKevin/vue/kevin.web.vue/src/router/index.js)<br>[vue/kevin.web.vue/public/index.html](../../../../sources/junkai-li__NetCoreKevin/vue/kevin.web.vue/public/index.html)<br>[Test/Kevin.Web.Test/Kevin.RAG/Tools/DocumentProcessorTests.cs](../../../../sources/junkai-li__NetCoreKevin/Test/Kevin.Web.Test/Kevin.RAG/Tools/DocumentProcessorTests.cs)<br>[Test/Kevin.Web.Test/Kevin.RAG/Tools/ExcelReaderTests.cs](../../../../sources/junkai-li__NetCoreKevin/Test/Kevin.Web.Test/Kevin.RAG/Tools/ExcelReaderTests.cs)<br>[Test/Kevin.Web.Test/Kevin.RAG/Tools/HtmlReaderTests.cs](../../../../sources/junkai-li__NetCoreKevin/Test/Kevin.Web.Test/Kevin.RAG/Tools/HtmlReaderTests.cs)<br>[Test/Kevin.Web.Test/Kevin.RAG/Tools/ImageReaderTests.cs](../../../../sources/junkai-li__NetCoreKevin/Test/Kevin.Web.Test/Kevin.RAG/Tools/ImageReaderTests.cs)<br>[Test/Kevin.Web.Test/Kevin.RAG/Tools/RemoteDocumentLoaderTests.cs](../../../../sources/junkai-li__NetCoreKevin/Test/Kevin.Web.Test/Kevin.RAG/Tools/RemoteDocumentLoaderTests.cs)<br>[Test/Kevin.Web.Test/Kevin.RAG/Tools/RemoteFileDownloaderTests.cs](../../../../sources/junkai-li__NetCoreKevin/Test/Kevin.Web.Test/Kevin.RAG/Tools/RemoteFileDownloaderTests.cs) |
| spec | 0 | not obvious |
| eval | 30 | [Test/Testing.Shared/CancellationTokenGenerator.cs](../../../../sources/junkai-li__NetCoreKevin/Test/Testing.Shared/CancellationTokenGenerator.cs)<br>[Test/Testing.Shared/Kevin.Testing.Shared.csproj](../../../../sources/junkai-li__NetCoreKevin/Test/Testing.Shared/Kevin.Testing.Shared.csproj)<br>[Test/Testing.Shared/PriorityOrderer.cs](../../../../sources/junkai-li__NetCoreKevin/Test/Testing.Shared/PriorityOrderer.cs)<br>[Test/Testing.Shared/Attributes/AutoFakeItEasyAttribute.cs](../../../../sources/junkai-li__NetCoreKevin/Test/Testing.Shared/Attributes/AutoFakeItEasyAttribute.cs)<br>[Test/Testing.Shared/Attributes/TestPriorityAttribute .cs](../../../../sources/junkai-li__NetCoreKevin/Test/Testing.Shared/Attributes/TestPriorityAttribute .cs)<br>[Test/Kvin.Integration.Tests/AppGetToken.cs](../../../../sources/junkai-li__NetCoreKevin/Test/Kvin.Integration.Tests/AppGetToken.cs)<br>[Test/Kvin.Integration.Tests/AppTests.cs](../../../../sources/junkai-li__NetCoreKevin/Test/Kvin.Integration.Tests/AppTests.cs)<br>[Test/Kvin.Integration.Tests/GlobalUsings.cs](../../../../sources/junkai-li__NetCoreKevin/Test/Kvin.Integration.Tests/GlobalUsings.cs) |
| security | 22 | [vue/kevin.web.vue/src/api/permission.js](../../../../sources/junkai-li__NetCoreKevin/vue/kevin.web.vue/src/api/permission.js)<br>[Kevin/kevin.Module/kevin.Permission/ApplicationBuilderExtensions.cs](../../../../sources/junkai-li__NetCoreKevin/Kevin/kevin.Module/kevin.Permission/ApplicationBuilderExtensions.cs)<br>[Kevin/kevin.Module/kevin.Permission/kevin.Permission.csproj](../../../../sources/junkai-li__NetCoreKevin/Kevin/kevin.Module/kevin.Permission/kevin.Permission.csproj)<br>[Kevin/kevin.Module/kevin.Permission/ServiceCollectionExtensions.cs](../../../../sources/junkai-li__NetCoreKevin/Kevin/kevin.Module/kevin.Permission/ServiceCollectionExtensions.cs)<br>[Kevin/kevin.Module/kevin.Permission/Permission/FrameworkServiceExtension.cs](../../../../sources/junkai-li__NetCoreKevin/Kevin/kevin.Module/kevin.Permission/Permission/FrameworkServiceExtension.cs)<br>[Kevin/kevin.Module/kevin.Permission/Permission/GlobalData.cs](../../../../sources/junkai-li__NetCoreKevin/Kevin/kevin.Module/kevin.Permission/Permission/GlobalData.cs)<br>[Kevin/kevin.Module/kevin.Permission/Permission/SysAction.cs](../../../../sources/junkai-li__NetCoreKevin/Kevin/kevin.Module/kevin.Permission/Permission/SysAction.cs)<br>[Kevin/kevin.Module/kevin.Permission/Permission/SysArea.cs](../../../../sources/junkai-li__NetCoreKevin/Kevin/kevin.Module/kevin.Permission/Permission/SysArea.cs) |
| ci | 0 | not obvious |
| container | 3 | [docker-compose.yml](../../../../sources/junkai-li__NetCoreKevin/docker-compose.yml)<br>[App/WebApi/Dockerfile](../../../../sources/junkai-li__NetCoreKevin/App/WebApi/Dockerfile)<br>[App/WebApi/Dockerfile.original](../../../../sources/junkai-li__NetCoreKevin/App/WebApi/Dockerfile.original) |
| instruction | 0 | not obvious |
| docs | 33 | [README.md](../../../../sources/junkai-li__NetCoreKevin/README.md)<br>[vue/kevin.web.vue/README.md](../../../../sources/junkai-li__NetCoreKevin/vue/kevin.web.vue/README.md)<br>[Kevin/kevin.Module/kevin.Domain.EventBus/readme.txt](../../../../sources/junkai-li__NetCoreKevin/Kevin/kevin.Module/kevin.Domain.EventBus/readme.txt)<br>[Doc/localve.png](../../../../sources/junkai-li__NetCoreKevin/Doc/localve.png)<br>[Doc/wx_jiaoliuqun.JPG](../../../../sources/junkai-li__NetCoreKevin/Doc/wx_jiaoliuqun.JPG)<br>[Doc/wx.jpeg](../../../../sources/junkai-li__NetCoreKevin/Doc/wx.jpeg)<br>[Doc/项目相关/7f97a2cb-3707-46f6-a8f7-bc48196ed941.png](../../../../sources/junkai-li__NetCoreKevin/Doc/项目相关/7f97a2cb-3707-46f6-a8f7-bc48196ed941.png)<br>[Doc/项目相关/a4f1e8c1-7380-4b3f-acca-b01c849730bb.png](../../../../sources/junkai-li__NetCoreKevin/Doc/项目相关/a4f1e8c1-7380-4b3f-acca-b01c849730bb.png) |
| config | 1 | [vue/kevin.web.vue/package.json](../../../../sources/junkai-li__NetCoreKevin/vue/kevin.web.vue/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 30 | [Test/Testing.Shared/CancellationTokenGenerator.cs](../../../../sources/junkai-li__NetCoreKevin/Test/Testing.Shared/CancellationTokenGenerator.cs)<br>[Test/Testing.Shared/Kevin.Testing.Shared.csproj](../../../../sources/junkai-li__NetCoreKevin/Test/Testing.Shared/Kevin.Testing.Shared.csproj)<br>[Test/Testing.Shared/PriorityOrderer.cs](../../../../sources/junkai-li__NetCoreKevin/Test/Testing.Shared/PriorityOrderer.cs)<br>[Test/Testing.Shared/Attributes/AutoFakeItEasyAttribute.cs](../../../../sources/junkai-li__NetCoreKevin/Test/Testing.Shared/Attributes/AutoFakeItEasyAttribute.cs)<br>[Test/Testing.Shared/Attributes/TestPriorityAttribute .cs](../../../../sources/junkai-li__NetCoreKevin/Test/Testing.Shared/Attributes/TestPriorityAttribute .cs)<br>[Test/Kvin.Integration.Tests/AppGetToken.cs](../../../../sources/junkai-li__NetCoreKevin/Test/Kvin.Integration.Tests/AppGetToken.cs) |
| CI workflows | 0 | not obvious |
| Containers / deploy | 3 | [docker-compose.yml](../../../../sources/junkai-li__NetCoreKevin/docker-compose.yml)<br>[App/WebApi/Dockerfile](../../../../sources/junkai-li__NetCoreKevin/App/WebApi/Dockerfile)<br>[App/WebApi/Dockerfile.original](../../../../sources/junkai-li__NetCoreKevin/App/WebApi/Dockerfile.original) |
| Security / policy | 22 | [vue/kevin.web.vue/src/api/permission.js](../../../../sources/junkai-li__NetCoreKevin/vue/kevin.web.vue/src/api/permission.js)<br>[Kevin/kevin.Module/kevin.Permission/ApplicationBuilderExtensions.cs](../../../../sources/junkai-li__NetCoreKevin/Kevin/kevin.Module/kevin.Permission/ApplicationBuilderExtensions.cs)<br>[Kevin/kevin.Module/kevin.Permission/kevin.Permission.csproj](../../../../sources/junkai-li__NetCoreKevin/Kevin/kevin.Module/kevin.Permission/kevin.Permission.csproj)<br>[Kevin/kevin.Module/kevin.Permission/ServiceCollectionExtensions.cs](../../../../sources/junkai-li__NetCoreKevin/Kevin/kevin.Module/kevin.Permission/ServiceCollectionExtensions.cs)<br>[Kevin/kevin.Module/kevin.Permission/Permission/FrameworkServiceExtension.cs](../../../../sources/junkai-li__NetCoreKevin/Kevin/kevin.Module/kevin.Permission/Permission/FrameworkServiceExtension.cs)<br>[Kevin/kevin.Module/kevin.Permission/Permission/GlobalData.cs](../../../../sources/junkai-li__NetCoreKevin/Kevin/kevin.Module/kevin.Permission/Permission/GlobalData.cs) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | CI workflow path not obvious |
| security | agent instruction files not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `Kevin/kevin.Module/Kevin.MCP.Server/Kevin.AI.MCP.Server.csproj`, `Kevin/kevin.Module/Kevin.MCP.Server/ServiceCollectionExtensions.cs`, `Kevin/kevin.Module/Kevin.MCP.Server/说明文档.txt`.
2. Trace execution through entrypoints: `vue/kevin.web.vue/src/App.vue`, `vue/kevin.web.vue/src/main.js`.
3. Map agent/tool runtime through: `Test/Kevin.Web.Test/Kevin.RAG/Tools/DocumentProcessorTests.cs`, `Test/Kevin.Web.Test/Kevin.RAG/Tools/ExcelReaderTests.cs`, `Test/Kevin.Web.Test/Kevin.RAG/Tools/HtmlReaderTests.cs`.
4. Inspect retrieval/memory/indexing through: `vue/kevin.web.vue/src/router/index.js`, `vue/kevin.web.vue/public/index.html`, `Test/Kevin.Web.Test/Kevin.RAG/Tools/DocumentProcessorTests.cs`.
5. Verify behavior through test/eval files: `Test/Testing.Shared/CancellationTokenGenerator.cs`, `Test/Testing.Shared/Kevin.Testing.Shared.csproj`, `Test/Testing.Shared/PriorityOrderer.cs`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 🤖基于.NET搭建的企业级中台AI知识库智能体开源架构：Skills技能管理、AI Qdrant知识库、知识库重排模型、AI联网搜索、多智能体协同、智能体权限管控、AgentFramework、RAG检索增强、本地Ollama AI模型调. 핵심 구조 신호는 C#, docker-compose.yml, README.md, LICENSE, tests, docs이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 ci signal not obvious, license metadata missing, needs deeper structural scan입니다.
