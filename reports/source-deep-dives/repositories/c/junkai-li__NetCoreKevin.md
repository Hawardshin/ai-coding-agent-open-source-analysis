# junkai-li/NetCoreKevin 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

🤖基于.NET搭建的企业级中台AI知识库智能体开源架构：Skills技能管理、AI-Qdrant知识库、知识库重排模型、AI联网搜索、多智能体协同、智能体权限管控、AgentFramework、RAG检索增强、本地Ollama AI模型调用、智能体技能可控加载、领域事件、一库多租户、Log4、Jwt、CAP、SignalR、Mcp、Ioc、Hangfire、RabbitMQ、Xunit、前端（Vue + Ant Design）

## 요약

- 조사 단위: `sources/junkai-li__NetCoreKevin` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 863 files, 262 directories, depth score 110, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=Kevin/kevin.Module/Kevin.MCP.Server/Kevin.AI.MCP.Server.csproj, Kevin/kevin.Module/Kevin.MCP.Server/ServiceCollectionExtensions.cs, Kevin/kevin.Module/Kevin.MCP.Server/说明文档.txt이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | junkai-li/NetCoreKevin |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | C# |
| Stars | 없음 |
| Forks | 없음 |
| License | 없음 |
| 성숙도 | 초기 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/junkai-li__NetCoreKevin](../../../../sources/junkai-li__NetCoreKevin) |
| 기존 보고서 | [reports/korea-trending/repositories/junkai-li__NetCoreKevin.md](../../../korea-trending/repositories/junkai-li__NetCoreKevin.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 863 / 262 |
| 관측 최대 깊이 | 8 |
| 상위 디렉터리 | App, Doc, InitData, Kevin, Test, vue |
| 상위 확장자 | .cs: 652, .csproj: 41, .vue: 33, .js: 28, .png: 28, .txt: 13, .css: 12, .json: 9, .md: 9, (none): 8, .xml: 5, .config: 4 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| App | top-level component | 1 |
| Doc | documentation surface | 1 |
| InitData | top-level component | 1 |
| Kevin | top-level component | 1 |
| Test | validation surface | 1 |
| vue | top-level component | 1 |


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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 2 | [vue/kevin.web.vue/src/App.vue](../../../../sources/junkai-li__NetCoreKevin/vue/kevin.web.vue/src/App.vue)<br>[vue/kevin.web.vue/src/main.js](../../../../sources/junkai-li__NetCoreKevin/vue/kevin.web.vue/src/main.js) |
| agentRuntime | 29 | [Test/Kevin.Web.Test/Kevin.RAG/Tools/DocumentProcessorTests.cs](../../../../sources/junkai-li__NetCoreKevin/Test/Kevin.Web.Test/Kevin.RAG/Tools/DocumentProcessorTests.cs)<br>[Test/Kevin.Web.Test/Kevin.RAG/Tools/ExcelReaderTests.cs](../../../../sources/junkai-li__NetCoreKevin/Test/Kevin.Web.Test/Kevin.RAG/Tools/ExcelReaderTests.cs)<br>[Test/Kevin.Web.Test/Kevin.RAG/Tools/HtmlReaderTests.cs](../../../../sources/junkai-li__NetCoreKevin/Test/Kevin.Web.Test/Kevin.RAG/Tools/HtmlReaderTests.cs)<br>[Test/Kevin.Web.Test/Kevin.RAG/Tools/ImageReaderTests.cs](../../../../sources/junkai-li__NetCoreKevin/Test/Kevin.Web.Test/Kevin.RAG/Tools/ImageReaderTests.cs)<br>[Test/Kevin.Web.Test/Kevin.RAG/Tools/RemoteDocumentLoaderTests.cs](../../../../sources/junkai-li__NetCoreKevin/Test/Kevin.Web.Test/Kevin.RAG/Tools/RemoteDocumentLoaderTests.cs)<br>[Test/Kevin.Web.Test/Kevin.RAG/Tools/RemoteFileDownloaderTests.cs](../../../../sources/junkai-li__NetCoreKevin/Test/Kevin.Web.Test/Kevin.RAG/Tools/RemoteFileDownloaderTests.cs)<br>[Test/Kevin.Web.Test/Kevin.RAG/Tools/TextStreamReaderTests.cs](../../../../sources/junkai-li__NetCoreKevin/Test/Kevin.Web.Test/Kevin.RAG/Tools/TextStreamReaderTests.cs)<br>[Kevin/kevin.Module/Kevin.MCP.Server/Tools/MyTool.cs](../../../../sources/junkai-li__NetCoreKevin/Kevin/kevin.Module/Kevin.MCP.Server/Tools/MyTool.cs) |
| mcp | 7 | [Kevin/kevin.Module/Kevin.MCP.Server/Kevin.AI.MCP.Server.csproj](../../../../sources/junkai-li__NetCoreKevin/Kevin/kevin.Module/Kevin.MCP.Server/Kevin.AI.MCP.Server.csproj)<br>[Kevin/kevin.Module/Kevin.MCP.Server/ServiceCollectionExtensions.cs](../../../../sources/junkai-li__NetCoreKevin/Kevin/kevin.Module/Kevin.MCP.Server/ServiceCollectionExtensions.cs)<br>[Kevin/kevin.Module/Kevin.MCP.Server/说明文档.txt](../../../../sources/junkai-li__NetCoreKevin/Kevin/kevin.Module/Kevin.MCP.Server/说明文档.txt)<br>[Kevin/kevin.Module/Kevin.MCP.Server/Tools/MyTool.cs](../../../../sources/junkai-li__NetCoreKevin/Kevin/kevin.Module/Kevin.MCP.Server/Tools/MyTool.cs)<br>[Kevin/kevin.Module/Kevin.MCP.Server/Models/MCPSSEClientSetting.cs](../../../../sources/junkai-li__NetCoreKevin/Kevin/kevin.Module/Kevin.MCP.Server/Models/MCPSSEClientSetting.cs)<br>[Kevin/kevin.Module/Kevin.MCP.Server/Client/IMySSEToolClient.cs](../../../../sources/junkai-li__NetCoreKevin/Kevin/kevin.Module/Kevin.MCP.Server/Client/IMySSEToolClient.cs)<br>[Kevin/kevin.Module/Kevin.MCP.Server/Client/MySSEToolClient.cs](../../../../sources/junkai-li__NetCoreKevin/Kevin/kevin.Module/Kevin.MCP.Server/Client/MySSEToolClient.cs) |
| retrieval | 26 | [vue/kevin.web.vue/src/router/index.js](../../../../sources/junkai-li__NetCoreKevin/vue/kevin.web.vue/src/router/index.js)<br>[vue/kevin.web.vue/public/index.html](../../../../sources/junkai-li__NetCoreKevin/vue/kevin.web.vue/public/index.html)<br>[Test/Kevin.Web.Test/Kevin.RAG/Tools/DocumentProcessorTests.cs](../../../../sources/junkai-li__NetCoreKevin/Test/Kevin.Web.Test/Kevin.RAG/Tools/DocumentProcessorTests.cs)<br>[Test/Kevin.Web.Test/Kevin.RAG/Tools/ExcelReaderTests.cs](../../../../sources/junkai-li__NetCoreKevin/Test/Kevin.Web.Test/Kevin.RAG/Tools/ExcelReaderTests.cs)<br>[Test/Kevin.Web.Test/Kevin.RAG/Tools/HtmlReaderTests.cs](../../../../sources/junkai-li__NetCoreKevin/Test/Kevin.Web.Test/Kevin.RAG/Tools/HtmlReaderTests.cs)<br>[Test/Kevin.Web.Test/Kevin.RAG/Tools/ImageReaderTests.cs](../../../../sources/junkai-li__NetCoreKevin/Test/Kevin.Web.Test/Kevin.RAG/Tools/ImageReaderTests.cs)<br>[Test/Kevin.Web.Test/Kevin.RAG/Tools/RemoteDocumentLoaderTests.cs](../../../../sources/junkai-li__NetCoreKevin/Test/Kevin.Web.Test/Kevin.RAG/Tools/RemoteDocumentLoaderTests.cs)<br>[Test/Kevin.Web.Test/Kevin.RAG/Tools/RemoteFileDownloaderTests.cs](../../../../sources/junkai-li__NetCoreKevin/Test/Kevin.Web.Test/Kevin.RAG/Tools/RemoteFileDownloaderTests.cs) |
| spec | 0 | 명확하지 않음 |
| eval | 30 | [Test/Testing.Shared/CancellationTokenGenerator.cs](../../../../sources/junkai-li__NetCoreKevin/Test/Testing.Shared/CancellationTokenGenerator.cs)<br>[Test/Testing.Shared/Kevin.Testing.Shared.csproj](../../../../sources/junkai-li__NetCoreKevin/Test/Testing.Shared/Kevin.Testing.Shared.csproj)<br>[Test/Testing.Shared/PriorityOrderer.cs](../../../../sources/junkai-li__NetCoreKevin/Test/Testing.Shared/PriorityOrderer.cs)<br>[Test/Testing.Shared/Attributes/AutoFakeItEasyAttribute.cs](../../../../sources/junkai-li__NetCoreKevin/Test/Testing.Shared/Attributes/AutoFakeItEasyAttribute.cs)<br>[Test/Testing.Shared/Attributes/TestPriorityAttribute .cs](../../../../sources/junkai-li__NetCoreKevin/Test/Testing.Shared/Attributes/TestPriorityAttribute .cs)<br>[Test/Kvin.Integration.Tests/AppGetToken.cs](../../../../sources/junkai-li__NetCoreKevin/Test/Kvin.Integration.Tests/AppGetToken.cs)<br>[Test/Kvin.Integration.Tests/AppTests.cs](../../../../sources/junkai-li__NetCoreKevin/Test/Kvin.Integration.Tests/AppTests.cs)<br>[Test/Kvin.Integration.Tests/GlobalUsings.cs](../../../../sources/junkai-li__NetCoreKevin/Test/Kvin.Integration.Tests/GlobalUsings.cs) |
| security | 22 | [vue/kevin.web.vue/src/api/permission.js](../../../../sources/junkai-li__NetCoreKevin/vue/kevin.web.vue/src/api/permission.js)<br>[Kevin/kevin.Module/kevin.Permission/ApplicationBuilderExtensions.cs](../../../../sources/junkai-li__NetCoreKevin/Kevin/kevin.Module/kevin.Permission/ApplicationBuilderExtensions.cs)<br>[Kevin/kevin.Module/kevin.Permission/kevin.Permission.csproj](../../../../sources/junkai-li__NetCoreKevin/Kevin/kevin.Module/kevin.Permission/kevin.Permission.csproj)<br>[Kevin/kevin.Module/kevin.Permission/ServiceCollectionExtensions.cs](../../../../sources/junkai-li__NetCoreKevin/Kevin/kevin.Module/kevin.Permission/ServiceCollectionExtensions.cs)<br>[Kevin/kevin.Module/kevin.Permission/Permission/FrameworkServiceExtension.cs](../../../../sources/junkai-li__NetCoreKevin/Kevin/kevin.Module/kevin.Permission/Permission/FrameworkServiceExtension.cs)<br>[Kevin/kevin.Module/kevin.Permission/Permission/GlobalData.cs](../../../../sources/junkai-li__NetCoreKevin/Kevin/kevin.Module/kevin.Permission/Permission/GlobalData.cs)<br>[Kevin/kevin.Module/kevin.Permission/Permission/SysAction.cs](../../../../sources/junkai-li__NetCoreKevin/Kevin/kevin.Module/kevin.Permission/Permission/SysAction.cs)<br>[Kevin/kevin.Module/kevin.Permission/Permission/SysArea.cs](../../../../sources/junkai-li__NetCoreKevin/Kevin/kevin.Module/kevin.Permission/Permission/SysArea.cs) |
| ci | 0 | 명확하지 않음 |
| container | 3 | [docker-compose.yml](../../../../sources/junkai-li__NetCoreKevin/docker-compose.yml)<br>[App/WebApi/Dockerfile](../../../../sources/junkai-li__NetCoreKevin/App/WebApi/Dockerfile)<br>[App/WebApi/Dockerfile.original](../../../../sources/junkai-li__NetCoreKevin/App/WebApi/Dockerfile.original) |
| instruction | 0 | 명확하지 않음 |
| docs | 33 | [README.md](../../../../sources/junkai-li__NetCoreKevin/README.md)<br>[vue/kevin.web.vue/README.md](../../../../sources/junkai-li__NetCoreKevin/vue/kevin.web.vue/README.md)<br>[Kevin/kevin.Module/kevin.Domain.EventBus/readme.txt](../../../../sources/junkai-li__NetCoreKevin/Kevin/kevin.Module/kevin.Domain.EventBus/readme.txt)<br>[Doc/localve.png](../../../../sources/junkai-li__NetCoreKevin/Doc/localve.png)<br>[Doc/wx_jiaoliuqun.JPG](../../../../sources/junkai-li__NetCoreKevin/Doc/wx_jiaoliuqun.JPG)<br>[Doc/wx.jpeg](../../../../sources/junkai-li__NetCoreKevin/Doc/wx.jpeg)<br>[Doc/项目相关/7f97a2cb-3707-46f6-a8f7-bc48196ed941.png](../../../../sources/junkai-li__NetCoreKevin/Doc/项目相关/7f97a2cb-3707-46f6-a8f7-bc48196ed941.png)<br>[Doc/项目相关/a4f1e8c1-7380-4b3f-acca-b01c849730bb.png](../../../../sources/junkai-li__NetCoreKevin/Doc/项目相关/a4f1e8c1-7380-4b3f-acca-b01c849730bb.png) |
| config | 1 | [vue/kevin.web.vue/package.json](../../../../sources/junkai-li__NetCoreKevin/vue/kevin.web.vue/package.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 30 | [Test/Testing.Shared/CancellationTokenGenerator.cs](../../../../sources/junkai-li__NetCoreKevin/Test/Testing.Shared/CancellationTokenGenerator.cs)<br>[Test/Testing.Shared/Kevin.Testing.Shared.csproj](../../../../sources/junkai-li__NetCoreKevin/Test/Testing.Shared/Kevin.Testing.Shared.csproj)<br>[Test/Testing.Shared/PriorityOrderer.cs](../../../../sources/junkai-li__NetCoreKevin/Test/Testing.Shared/PriorityOrderer.cs)<br>[Test/Testing.Shared/Attributes/AutoFakeItEasyAttribute.cs](../../../../sources/junkai-li__NetCoreKevin/Test/Testing.Shared/Attributes/AutoFakeItEasyAttribute.cs)<br>[Test/Testing.Shared/Attributes/TestPriorityAttribute .cs](../../../../sources/junkai-li__NetCoreKevin/Test/Testing.Shared/Attributes/TestPriorityAttribute .cs)<br>[Test/Kvin.Integration.Tests/AppGetToken.cs](../../../../sources/junkai-li__NetCoreKevin/Test/Kvin.Integration.Tests/AppGetToken.cs) |
| CI workflow | 0 | 명확하지 않음 |
| 컨테이너/배포 | 3 | [docker-compose.yml](../../../../sources/junkai-li__NetCoreKevin/docker-compose.yml)<br>[App/WebApi/Dockerfile](../../../../sources/junkai-li__NetCoreKevin/App/WebApi/Dockerfile)<br>[App/WebApi/Dockerfile.original](../../../../sources/junkai-li__NetCoreKevin/App/WebApi/Dockerfile.original) |
| 보안/정책 | 22 | [vue/kevin.web.vue/src/api/permission.js](../../../../sources/junkai-li__NetCoreKevin/vue/kevin.web.vue/src/api/permission.js)<br>[Kevin/kevin.Module/kevin.Permission/ApplicationBuilderExtensions.cs](../../../../sources/junkai-li__NetCoreKevin/Kevin/kevin.Module/kevin.Permission/ApplicationBuilderExtensions.cs)<br>[Kevin/kevin.Module/kevin.Permission/kevin.Permission.csproj](../../../../sources/junkai-li__NetCoreKevin/Kevin/kevin.Module/kevin.Permission/kevin.Permission.csproj)<br>[Kevin/kevin.Module/kevin.Permission/ServiceCollectionExtensions.cs](../../../../sources/junkai-li__NetCoreKevin/Kevin/kevin.Module/kevin.Permission/ServiceCollectionExtensions.cs)<br>[Kevin/kevin.Module/kevin.Permission/Permission/FrameworkServiceExtension.cs](../../../../sources/junkai-li__NetCoreKevin/Kevin/kevin.Module/kevin.Permission/Permission/FrameworkServiceExtension.cs)<br>[Kevin/kevin.Module/kevin.Permission/Permission/GlobalData.cs](../../../../sources/junkai-li__NetCoreKevin/Kevin/kevin.Module/kevin.Permission/Permission/GlobalData.cs) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | CI workflow 경로가 명확하지 않음 |
| security | agent instruction 파일이 명확하지 않음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `Kevin/kevin.Module/Kevin.MCP.Server/Kevin.AI.MCP.Server.csproj`, `Kevin/kevin.Module/Kevin.MCP.Server/ServiceCollectionExtensions.cs`, `Kevin/kevin.Module/Kevin.MCP.Server/说明文档.txt`.
2. entrypoint를 따라 실행 흐름 확인: `vue/kevin.web.vue/src/App.vue`, `vue/kevin.web.vue/src/main.js`.
3. agent/tool runtime 매핑: `Test/Kevin.Web.Test/Kevin.RAG/Tools/DocumentProcessorTests.cs`, `Test/Kevin.Web.Test/Kevin.RAG/Tools/ExcelReaderTests.cs`, `Test/Kevin.Web.Test/Kevin.RAG/Tools/HtmlReaderTests.cs`.
4. retrieval/memory/indexing 확인: `vue/kevin.web.vue/src/router/index.js`, `vue/kevin.web.vue/public/index.html`, `Test/Kevin.Web.Test/Kevin.RAG/Tools/DocumentProcessorTests.cs`.
5. test/eval 파일로 동작 검증: `Test/Testing.Shared/CancellationTokenGenerator.cs`, `Test/Testing.Shared/Kevin.Testing.Shared.csproj`, `Test/Testing.Shared/PriorityOrderer.cs`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 🤖基于.NET搭建的企业级中台AI知识库智能体开源架构：Skills技能管理、AI Qdrant知识库、知识库重排模型、AI联网搜索、多智能体协同、智能体权限管控、AgentFramework、RAG检索增强、本地Ollama AI模型调. 핵심 구조 신호는 C#, docker-compose.yml, README.md, LICENSE, tests, docs이며, 소스+보고서 근거 수준으로 초기 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 CI 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
