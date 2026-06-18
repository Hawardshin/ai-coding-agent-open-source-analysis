# microsoft/mcp Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Catalog of official Microsoft MCP (Model Context Protocol) server implementations for AI-powered data access and tool integration

## 요약

- 조사 단위: `sources/microsoft__mcp` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 4,833 files, 1,376 directories, depth score 132, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=Microsoft.Mcp.slnx, tools/Fabric.Mcp.Tools.OneLake/README.md, tools/Fabric.Mcp.Tools.OneLake/upload_files_simple.ps1이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | microsoft/mcp |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | C# |
| Stars | 3326 |
| Forks | 531 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/microsoft__mcp](../../../../sources/microsoft__mcp) |
| Existing report | [reports/global-trending/repositories/microsoft__mcp.md](../../../global-trending/repositories/microsoft__mcp.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 4833 / 1376 |
| Max observed depth | 10 |
| Top directories | .config, .devcontainer, .github, core, docs, eng, Resources, servers, tools |
| Top extensions | .cs: 2747, .json: 1158, .md: 272, .ps1: 210, .csproj: 140, .yml: 119, .bicep: 45, .ts: 27, .txt: 20, (none): 15, .js: 14, .png: 11 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 5 |
| .devcontainer | deployment surface | 1 |
| .github | ci surface | 1 |
| core | top-level component | 1 |
| eng | top-level component | 1 |
| Resources | top-level component | 1 |
| servers | source boundary | 1 |
| tools | top-level component | 1 |


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
| mcp | [Microsoft.Mcp.slnx](../../../../sources/microsoft__mcp/Microsoft.Mcp.slnx) | mcp signal |
| mcp | [tools/Fabric.Mcp.Tools.OneLake/README.md](../../../../sources/microsoft__mcp/tools/Fabric.Mcp.Tools.OneLake/README.md) | mcp signal |
| mcp | [tools/Fabric.Mcp.Tools.OneLake/upload_files_simple.ps1](../../../../sources/microsoft__mcp/tools/Fabric.Mcp.Tools.OneLake/upload_files_simple.ps1) | mcp signal |
| mcp | [tools/Fabric.Mcp.Tools.OneLake/upload_files.ps1](../../../../sources/microsoft__mcp/tools/Fabric.Mcp.Tools.OneLake/upload_files.ps1) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/microsoft__mcp/AGENTS.md) | agentRuntime signal |
| entrypoints | [servers/Template.Mcp.Server/server.json](../../../../sources/microsoft__mcp/servers/Template.Mcp.Server/server.json) | entrypoints signal |
| entrypoints | [servers/Template.Mcp.Server/vscode/main.js](../../../../sources/microsoft__mcp/servers/Template.Mcp.Server/vscode/main.js) | entrypoints signal |
| entrypoints | [servers/Fabric.Mcp.Server/server.json](../../../../sources/microsoft__mcp/servers/Fabric.Mcp.Server/server.json) | entrypoints signal |
| entrypoints | [servers/Fabric.Mcp.Server/vscode/main.js](../../../../sources/microsoft__mcp/servers/Fabric.Mcp.Server/vscode/main.js) | entrypoints signal |
| instruction | [.github/copilot-instructions.md](../../../../sources/microsoft__mcp/.github/copilot-instructions.md) | instruction signal |
| config | [servers/Template.Mcp.Server/vscode/package.json](../../../../sources/microsoft__mcp/servers/Template.Mcp.Server/vscode/package.json) | config signal |
| config | [servers/Template.Mcp.Server/vscode/tsconfig.json](../../../../sources/microsoft__mcp/servers/Template.Mcp.Server/vscode/tsconfig.json) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 7 | [servers/Template.Mcp.Server/server.json](../../../../sources/microsoft__mcp/servers/Template.Mcp.Server/server.json)<br>[servers/Template.Mcp.Server/vscode/main.js](../../../../sources/microsoft__mcp/servers/Template.Mcp.Server/vscode/main.js)<br>[servers/Fabric.Mcp.Server/server.json](../../../../sources/microsoft__mcp/servers/Fabric.Mcp.Server/server.json)<br>[servers/Fabric.Mcp.Server/vscode/main.js](../../../../sources/microsoft__mcp/servers/Fabric.Mcp.Server/vscode/main.js)<br>[servers/Azure.Mcp.Server/server.json](../../../../sources/microsoft__mcp/servers/Azure.Mcp.Server/server.json)<br>[servers/Azure.Mcp.Server/vscode/main.js](../../../../sources/microsoft__mcp/servers/Azure.Mcp.Server/vscode/main.js)<br>[eng/common/docgeneration/templates/matthews/styles/main.js](../../../../sources/microsoft__mcp/eng/common/docgeneration/templates/matthews/styles/main.js) |
| agentRuntime | 3836 | [AGENTS.md](../../../../sources/microsoft__mcp/AGENTS.md)<br>[tools/Fabric.Mcp.Tools.OneLake/README.md](../../../../sources/microsoft__mcp/tools/Fabric.Mcp.Tools.OneLake/README.md)<br>[tools/Fabric.Mcp.Tools.OneLake/upload_files_simple.ps1](../../../../sources/microsoft__mcp/tools/Fabric.Mcp.Tools.OneLake/upload_files_simple.ps1)<br>[tools/Fabric.Mcp.Tools.OneLake/upload_files.ps1](../../../../sources/microsoft__mcp/tools/Fabric.Mcp.Tools.OneLake/upload_files.ps1)<br>[tools/Fabric.Mcp.Tools.OneLake/tests/Fabric.Mcp.Tools.OneLake.Tests/Fabric.Mcp.Tools.OneLake.Tests.csproj](../../../../sources/microsoft__mcp/tools/Fabric.Mcp.Tools.OneLake/tests/Fabric.Mcp.Tools.OneLake.Tests/Fabric.Mcp.Tools.OneLake.Tests.csproj)<br>[tools/Fabric.Mcp.Tools.OneLake/tests/Fabric.Mcp.Tools.OneLake.Tests/FabricOneLakeSetupTests.cs](../../../../sources/microsoft__mcp/tools/Fabric.Mcp.Tools.OneLake/tests/Fabric.Mcp.Tools.OneLake.Tests/FabricOneLakeSetupTests.cs)<br>[tools/Fabric.Mcp.Tools.OneLake/tests/Fabric.Mcp.Tools.OneLake.Tests/README.md](../../../../sources/microsoft__mcp/tools/Fabric.Mcp.Tools.OneLake/tests/Fabric.Mcp.Tools.OneLake.Tests/README.md)<br>[tools/Fabric.Mcp.Tools.OneLake/tests/Fabric.Mcp.Tools.OneLake.Tests/TestImplementationSummary.md](../../../../sources/microsoft__mcp/tools/Fabric.Mcp.Tools.OneLake/tests/Fabric.Mcp.Tools.OneLake.Tests/TestImplementationSummary.md) |
| mcp | 4377 | [Microsoft.Mcp.slnx](../../../../sources/microsoft__mcp/Microsoft.Mcp.slnx)<br>[tools/Fabric.Mcp.Tools.OneLake/README.md](../../../../sources/microsoft__mcp/tools/Fabric.Mcp.Tools.OneLake/README.md)<br>[tools/Fabric.Mcp.Tools.OneLake/upload_files_simple.ps1](../../../../sources/microsoft__mcp/tools/Fabric.Mcp.Tools.OneLake/upload_files_simple.ps1)<br>[tools/Fabric.Mcp.Tools.OneLake/upload_files.ps1](../../../../sources/microsoft__mcp/tools/Fabric.Mcp.Tools.OneLake/upload_files.ps1)<br>[tools/Fabric.Mcp.Tools.OneLake/tests/Fabric.Mcp.Tools.OneLake.Tests/Fabric.Mcp.Tools.OneLake.Tests.csproj](../../../../sources/microsoft__mcp/tools/Fabric.Mcp.Tools.OneLake/tests/Fabric.Mcp.Tools.OneLake.Tests/Fabric.Mcp.Tools.OneLake.Tests.csproj)<br>[tools/Fabric.Mcp.Tools.OneLake/tests/Fabric.Mcp.Tools.OneLake.Tests/FabricOneLakeSetupTests.cs](../../../../sources/microsoft__mcp/tools/Fabric.Mcp.Tools.OneLake/tests/Fabric.Mcp.Tools.OneLake.Tests/FabricOneLakeSetupTests.cs)<br>[tools/Fabric.Mcp.Tools.OneLake/tests/Fabric.Mcp.Tools.OneLake.Tests/README.md](../../../../sources/microsoft__mcp/tools/Fabric.Mcp.Tools.OneLake/tests/Fabric.Mcp.Tools.OneLake.Tests/README.md)<br>[tools/Fabric.Mcp.Tools.OneLake/tests/Fabric.Mcp.Tools.OneLake.Tests/TestImplementationSummary.md](../../../../sources/microsoft__mcp/tools/Fabric.Mcp.Tools.OneLake/tests/Fabric.Mcp.Tools.OneLake.Tests/TestImplementationSummary.md) |
| retrieval | 23 | [tools/Fabric.Mcp.Tools.Docs/src/Resources/item-definitions/graph-model-definition.md](../../../../sources/microsoft__mcp/tools/Fabric.Mcp.Tools.Docs/src/Resources/item-definitions/graph-model-definition.md)<br>[tools/Fabric.Mcp.Tools.Docs/src/Resources/item-definitions/graph-queryset-definition.md](../../../../sources/microsoft__mcp/tools/Fabric.Mcp.Tools.Docs/src/Resources/item-definitions/graph-queryset-definition.md)<br>[tools/Azure.Mcp.Tools.Search/tests/Azure.Mcp.Tools.Search.Tests/Knowledge/KnowledgeBaseGetCommandTests.cs](../../../../sources/microsoft__mcp/tools/Azure.Mcp.Tools.Search/tests/Azure.Mcp.Tools.Search.Tests/Knowledge/KnowledgeBaseGetCommandTests.cs)<br>[tools/Azure.Mcp.Tools.Search/tests/Azure.Mcp.Tools.Search.Tests/Knowledge/KnowledgeBaseRetrieveCommandTests.cs](../../../../sources/microsoft__mcp/tools/Azure.Mcp.Tools.Search/tests/Azure.Mcp.Tools.Search.Tests/Knowledge/KnowledgeBaseRetrieveCommandTests.cs)<br>[tools/Azure.Mcp.Tools.Search/tests/Azure.Mcp.Tools.Search.Tests/Knowledge/KnowledgeSourceGetCommandTests.cs](../../../../sources/microsoft__mcp/tools/Azure.Mcp.Tools.Search/tests/Azure.Mcp.Tools.Search.Tests/Knowledge/KnowledgeSourceGetCommandTests.cs)<br>[tools/Azure.Mcp.Tools.Search/tests/Azure.Mcp.Tools.Search.Tests/Index/IndexGetCommandTests.cs](../../../../sources/microsoft__mcp/tools/Azure.Mcp.Tools.Search/tests/Azure.Mcp.Tools.Search.Tests/Index/IndexGetCommandTests.cs)<br>[tools/Azure.Mcp.Tools.Search/tests/Azure.Mcp.Tools.Search.Tests/Index/IndexQueryCommandTests.cs](../../../../sources/microsoft__mcp/tools/Azure.Mcp.Tools.Search/tests/Azure.Mcp.Tools.Search.Tests/Index/IndexQueryCommandTests.cs)<br>[tools/Azure.Mcp.Tools.Search/src/Options/Knowledge/KnowledgeBaseGetOptions.cs](../../../../sources/microsoft__mcp/tools/Azure.Mcp.Tools.Search/src/Options/Knowledge/KnowledgeBaseGetOptions.cs) |
| spec | 19 | [tools/Azure.Mcp.Tools.SreAgent/tests/Azure.Mcp.Tools.SreAgent.Tests/Architecture/PlanCommandTests.cs](../../../../sources/microsoft__mcp/tools/Azure.Mcp.Tools.SreAgent/tests/Azure.Mcp.Tools.SreAgent.Tests/Architecture/PlanCommandTests.cs)<br>[tools/Azure.Mcp.Tools.SreAgent/src/Options/Architecture/PlanOptions.cs](../../../../sources/microsoft__mcp/tools/Azure.Mcp.Tools.SreAgent/src/Options/Architecture/PlanOptions.cs)<br>[tools/Azure.Mcp.Tools.SreAgent/src/Commands/Architecture/PlanCommand.cs](../../../../sources/microsoft__mcp/tools/Azure.Mcp.Tools.SreAgent/src/Commands/Architecture/PlanCommand.cs)<br>[tools/Azure.Mcp.Tools.Deploy/tests/Azure.Mcp.Tools.Deploy.Tests/Commands/Architecture/DiagramGenerateCommandTests.cs](../../../../sources/microsoft__mcp/tools/Azure.Mcp.Tools.Deploy/tests/Azure.Mcp.Tools.Deploy.Tests/Commands/Architecture/DiagramGenerateCommandTests.cs)<br>[tools/Azure.Mcp.Tools.Deploy/src/Templates/Architecture/architecture-diagram.md](../../../../sources/microsoft__mcp/tools/Azure.Mcp.Tools.Deploy/src/Templates/Architecture/architecture-diagram.md)<br>[tools/Azure.Mcp.Tools.Deploy/src/Options/Architecture/DiagramGenerateOptions.cs](../../../../sources/microsoft__mcp/tools/Azure.Mcp.Tools.Deploy/src/Options/Architecture/DiagramGenerateOptions.cs)<br>[tools/Azure.Mcp.Tools.Deploy/src/Commands/Architecture/DiagramGenerateCommand.cs](../../../../sources/microsoft__mcp/tools/Azure.Mcp.Tools.Deploy/src/Commands/Architecture/DiagramGenerateCommand.cs)<br>[tools/Azure.Mcp.Tools.CloudArchitect/tests/Azure.Mcp.Tools.CloudArchitect.Tests/Design/DesignCommandTests.cs](../../../../sources/microsoft__mcp/tools/Azure.Mcp.Tools.CloudArchitect/tests/Azure.Mcp.Tools.CloudArchitect.Tests/Design/DesignCommandTests.cs) |
| eval | 1233 | [tools/Fabric.Mcp.Tools.OneLake/tests/Fabric.Mcp.Tools.OneLake.Tests/Fabric.Mcp.Tools.OneLake.Tests.csproj](../../../../sources/microsoft__mcp/tools/Fabric.Mcp.Tools.OneLake/tests/Fabric.Mcp.Tools.OneLake.Tests/Fabric.Mcp.Tools.OneLake.Tests.csproj)<br>[tools/Fabric.Mcp.Tools.OneLake/tests/Fabric.Mcp.Tools.OneLake.Tests/FabricOneLakeSetupTests.cs](../../../../sources/microsoft__mcp/tools/Fabric.Mcp.Tools.OneLake/tests/Fabric.Mcp.Tools.OneLake.Tests/FabricOneLakeSetupTests.cs)<br>[tools/Fabric.Mcp.Tools.OneLake/tests/Fabric.Mcp.Tools.OneLake.Tests/README.md](../../../../sources/microsoft__mcp/tools/Fabric.Mcp.Tools.OneLake/tests/Fabric.Mcp.Tools.OneLake.Tests/README.md)<br>[tools/Fabric.Mcp.Tools.OneLake/tests/Fabric.Mcp.Tools.OneLake.Tests/TestImplementationSummary.md](../../../../sources/microsoft__mcp/tools/Fabric.Mcp.Tools.OneLake/tests/Fabric.Mcp.Tools.OneLake.Tests/TestImplementationSummary.md)<br>[tools/Fabric.Mcp.Tools.OneLake/tests/Fabric.Mcp.Tools.OneLake.Tests/TestSupport/CapturingHttpMessageHandler.cs](../../../../sources/microsoft__mcp/tools/Fabric.Mcp.Tools.OneLake/tests/Fabric.Mcp.Tools.OneLake.Tests/TestSupport/CapturingHttpMessageHandler.cs)<br>[tools/Fabric.Mcp.Tools.OneLake/tests/Fabric.Mcp.Tools.OneLake.Tests/TestSupport/FakeTokenCredential.cs](../../../../sources/microsoft__mcp/tools/Fabric.Mcp.Tools.OneLake/tests/Fabric.Mcp.Tools.OneLake.Tests/TestSupport/FakeTokenCredential.cs)<br>[tools/Fabric.Mcp.Tools.OneLake/tests/Fabric.Mcp.Tools.OneLake.Tests/Services/OneLakePathTraversalTests.cs](../../../../sources/microsoft__mcp/tools/Fabric.Mcp.Tools.OneLake/tests/Fabric.Mcp.Tools.OneLake.Tests/Services/OneLakePathTraversalTests.cs)<br>[tools/Fabric.Mcp.Tools.OneLake/tests/Fabric.Mcp.Tools.OneLake.Tests/Services/OneLakeServiceTests.cs](../../../../sources/microsoft__mcp/tools/Fabric.Mcp.Tools.OneLake/tests/Fabric.Mcp.Tools.OneLake.Tests/Services/OneLakeServiceTests.cs) |
| security | 46 | [SECURITY.md](../../../../sources/microsoft__mcp/SECURITY.md)<br>[tools/Azure.Mcp.Tools.Policy/tests/Azure.Mcp.Tools.Policy.Tests/Azure.Mcp.Tools.Policy.Tests.csproj](../../../../sources/microsoft__mcp/tools/Azure.Mcp.Tools.Policy/tests/Azure.Mcp.Tools.Policy.Tests/Azure.Mcp.Tools.Policy.Tests.csproj)<br>[tools/Azure.Mcp.Tools.Policy/tests/Azure.Mcp.Tools.Policy.Tests/Assignment/PolicyAssignmentListCommandTests.cs](../../../../sources/microsoft__mcp/tools/Azure.Mcp.Tools.Policy/tests/Azure.Mcp.Tools.Policy.Tests/Assignment/PolicyAssignmentListCommandTests.cs)<br>[tools/Azure.Mcp.Tools.Policy/src/AssemblyInfo.cs](../../../../sources/microsoft__mcp/tools/Azure.Mcp.Tools.Policy/src/AssemblyInfo.cs)<br>[tools/Azure.Mcp.Tools.Policy/src/Azure.Mcp.Tools.Policy.csproj](../../../../sources/microsoft__mcp/tools/Azure.Mcp.Tools.Policy/src/Azure.Mcp.Tools.Policy.csproj)<br>[tools/Azure.Mcp.Tools.Policy/src/GlobalUsings.cs](../../../../sources/microsoft__mcp/tools/Azure.Mcp.Tools.Policy/src/GlobalUsings.cs)<br>[tools/Azure.Mcp.Tools.Policy/src/PolicySetup.cs](../../../../sources/microsoft__mcp/tools/Azure.Mcp.Tools.Policy/src/PolicySetup.cs)<br>[tools/Azure.Mcp.Tools.Policy/src/Services/IPolicyService.cs](../../../../sources/microsoft__mcp/tools/Azure.Mcp.Tools.Policy/src/Services/IPolicyService.cs) |
| ci | 7 | [.github/workflows/auto-milestone-bugbash.yml](../../../../sources/microsoft__mcp/.github/workflows/auto-milestone-bugbash.yml)<br>[.github/workflows/doc-gap-detector.lock.yml](../../../../sources/microsoft__mcp/.github/workflows/doc-gap-detector.lock.yml)<br>[.github/workflows/doc-gap-detector.md](../../../../sources/microsoft__mcp/.github/workflows/doc-gap-detector.md)<br>[.github/workflows/event-processor.yml](../../../../sources/microsoft__mcp/.github/workflows/event-processor.yml)<br>[.github/workflows/event.yml](../../../../sources/microsoft__mcp/.github/workflows/event.yml)<br>[.github/workflows/post-apiview.yml](../../../../sources/microsoft__mcp/.github/workflows/post-apiview.yml)<br>[.github/workflows/scheduled-event-processor.yml](../../../../sources/microsoft__mcp/.github/workflows/scheduled-event-processor.yml) |
| container | 4 | [Dockerfile](../../../../sources/microsoft__mcp/Dockerfile)<br>[tools/Azure.Mcp.Tools.AppService/tests/Azure.Mcp.Tools.AppService.Tests/Commands/Webapp/Deployment/DeploymentGetCommandTests.cs](../../../../sources/microsoft__mcp/tools/Azure.Mcp.Tools.AppService/tests/Azure.Mcp.Tools.AppService.Tests/Commands/Webapp/Deployment/DeploymentGetCommandTests.cs)<br>[tools/Azure.Mcp.Tools.AppService/src/Options/Webapp/Deployment/DeploymentGetOptions.cs](../../../../sources/microsoft__mcp/tools/Azure.Mcp.Tools.AppService/src/Options/Webapp/Deployment/DeploymentGetOptions.cs)<br>[tools/Azure.Mcp.Tools.AppService/src/Commands/Webapp/Deployment/DeploymentGetCommand.cs](../../../../sources/microsoft__mcp/tools/Azure.Mcp.Tools.AppService/src/Commands/Webapp/Deployment/DeploymentGetCommand.cs) |
| instruction | 2 | [AGENTS.md](../../../../sources/microsoft__mcp/AGENTS.md)<br>[.github/copilot-instructions.md](../../../../sources/microsoft__mcp/.github/copilot-instructions.md) |
| docs | 73 | [README.md](../../../../sources/microsoft__mcp/README.md)<br>[tools/Fabric.Mcp.Tools.OneLake/README.md](../../../../sources/microsoft__mcp/tools/Fabric.Mcp.Tools.OneLake/README.md)<br>[tools/Fabric.Mcp.Tools.OneLake/tests/Fabric.Mcp.Tools.OneLake.Tests/README.md](../../../../sources/microsoft__mcp/tools/Fabric.Mcp.Tools.OneLake/tests/Fabric.Mcp.Tools.OneLake.Tests/README.md)<br>[tools/Fabric.Mcp.Tools.DataFactory/README.md](../../../../sources/microsoft__mcp/tools/Fabric.Mcp.Tools.DataFactory/README.md)<br>[tools/Fabric.Mcp.Tools.Core/tests/Fabric.Mcp.Tools.Core.Tests/README.md](../../../../sources/microsoft__mcp/tools/Fabric.Mcp.Tools.Core/tests/Fabric.Mcp.Tools.Core.Tests/README.md)<br>[tools/Azure.Mcp.Tools.SreAgent/tests/Azure.Mcp.Tools.SreAgent.Tests/Docs/DocsGetCommandTests.cs](../../../../sources/microsoft__mcp/tools/Azure.Mcp.Tools.SreAgent/tests/Azure.Mcp.Tools.SreAgent.Tests/Docs/DocsGetCommandTests.cs)<br>[tools/Azure.Mcp.Tools.SreAgent/tests/Azure.Mcp.Tools.SreAgent.Tests/Docs/MemoriesAddCommandTests.cs](../../../../sources/microsoft__mcp/tools/Azure.Mcp.Tools.SreAgent/tests/Azure.Mcp.Tools.SreAgent.Tests/Docs/MemoriesAddCommandTests.cs)<br>[tools/Azure.Mcp.Tools.SreAgent/tests/Azure.Mcp.Tools.SreAgent.Tests/Docs/MemoriesDeleteCommandTests.cs](../../../../sources/microsoft__mcp/tools/Azure.Mcp.Tools.SreAgent/tests/Azure.Mcp.Tools.SreAgent.Tests/Docs/MemoriesDeleteCommandTests.cs) |
| config | 10 | [servers/Template.Mcp.Server/vscode/package.json](../../../../sources/microsoft__mcp/servers/Template.Mcp.Server/vscode/package.json)<br>[servers/Template.Mcp.Server/vscode/tsconfig.json](../../../../sources/microsoft__mcp/servers/Template.Mcp.Server/vscode/tsconfig.json)<br>[servers/Fabric.Mcp.Server/vscode/package.json](../../../../sources/microsoft__mcp/servers/Fabric.Mcp.Server/vscode/package.json)<br>[servers/Fabric.Mcp.Server/vscode/tsconfig.json](../../../../sources/microsoft__mcp/servers/Fabric.Mcp.Server/vscode/tsconfig.json)<br>[servers/Azure.Mcp.Server/vscode/package.json](../../../../sources/microsoft__mcp/servers/Azure.Mcp.Server/vscode/package.json)<br>[servers/Azure.Mcp.Server/vscode/tsconfig.json](../../../../sources/microsoft__mcp/servers/Azure.Mcp.Server/vscode/tsconfig.json)<br>[servers/Azure.Mcp.Server/vscode/src/test/outerloop/fixtures/startup-trigger/package.json](../../../../sources/microsoft__mcp/servers/Azure.Mcp.Server/vscode/src/test/outerloop/fixtures/startup-trigger/package.json)<br>[eng/vsix-tools/package.json](../../../../sources/microsoft__mcp/eng/vsix-tools/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 1233 | [tools/Fabric.Mcp.Tools.OneLake/tests/Fabric.Mcp.Tools.OneLake.Tests/Fabric.Mcp.Tools.OneLake.Tests.csproj](../../../../sources/microsoft__mcp/tools/Fabric.Mcp.Tools.OneLake/tests/Fabric.Mcp.Tools.OneLake.Tests/Fabric.Mcp.Tools.OneLake.Tests.csproj)<br>[tools/Fabric.Mcp.Tools.OneLake/tests/Fabric.Mcp.Tools.OneLake.Tests/FabricOneLakeSetupTests.cs](../../../../sources/microsoft__mcp/tools/Fabric.Mcp.Tools.OneLake/tests/Fabric.Mcp.Tools.OneLake.Tests/FabricOneLakeSetupTests.cs)<br>[tools/Fabric.Mcp.Tools.OneLake/tests/Fabric.Mcp.Tools.OneLake.Tests/README.md](../../../../sources/microsoft__mcp/tools/Fabric.Mcp.Tools.OneLake/tests/Fabric.Mcp.Tools.OneLake.Tests/README.md)<br>[tools/Fabric.Mcp.Tools.OneLake/tests/Fabric.Mcp.Tools.OneLake.Tests/TestImplementationSummary.md](../../../../sources/microsoft__mcp/tools/Fabric.Mcp.Tools.OneLake/tests/Fabric.Mcp.Tools.OneLake.Tests/TestImplementationSummary.md)<br>[tools/Fabric.Mcp.Tools.OneLake/tests/Fabric.Mcp.Tools.OneLake.Tests/TestSupport/CapturingHttpMessageHandler.cs](../../../../sources/microsoft__mcp/tools/Fabric.Mcp.Tools.OneLake/tests/Fabric.Mcp.Tools.OneLake.Tests/TestSupport/CapturingHttpMessageHandler.cs)<br>[tools/Fabric.Mcp.Tools.OneLake/tests/Fabric.Mcp.Tools.OneLake.Tests/TestSupport/FakeTokenCredential.cs](../../../../sources/microsoft__mcp/tools/Fabric.Mcp.Tools.OneLake/tests/Fabric.Mcp.Tools.OneLake.Tests/TestSupport/FakeTokenCredential.cs) |
| CI workflows | 7 | [.github/workflows/auto-milestone-bugbash.yml](../../../../sources/microsoft__mcp/.github/workflows/auto-milestone-bugbash.yml)<br>[.github/workflows/doc-gap-detector.lock.yml](../../../../sources/microsoft__mcp/.github/workflows/doc-gap-detector.lock.yml)<br>[.github/workflows/doc-gap-detector.md](../../../../sources/microsoft__mcp/.github/workflows/doc-gap-detector.md)<br>[.github/workflows/event-processor.yml](../../../../sources/microsoft__mcp/.github/workflows/event-processor.yml)<br>[.github/workflows/event.yml](../../../../sources/microsoft__mcp/.github/workflows/event.yml)<br>[.github/workflows/post-apiview.yml](../../../../sources/microsoft__mcp/.github/workflows/post-apiview.yml) |
| Containers / deploy | 4 | [Dockerfile](../../../../sources/microsoft__mcp/Dockerfile)<br>[tools/Azure.Mcp.Tools.AppService/tests/Azure.Mcp.Tools.AppService.Tests/Commands/Webapp/Deployment/DeploymentGetCommandTests.cs](../../../../sources/microsoft__mcp/tools/Azure.Mcp.Tools.AppService/tests/Azure.Mcp.Tools.AppService.Tests/Commands/Webapp/Deployment/DeploymentGetCommandTests.cs)<br>[tools/Azure.Mcp.Tools.AppService/src/Options/Webapp/Deployment/DeploymentGetOptions.cs](../../../../sources/microsoft__mcp/tools/Azure.Mcp.Tools.AppService/src/Options/Webapp/Deployment/DeploymentGetOptions.cs)<br>[tools/Azure.Mcp.Tools.AppService/src/Commands/Webapp/Deployment/DeploymentGetCommand.cs](../../../../sources/microsoft__mcp/tools/Azure.Mcp.Tools.AppService/src/Commands/Webapp/Deployment/DeploymentGetCommand.cs) |
| Security / policy | 46 | [SECURITY.md](../../../../sources/microsoft__mcp/SECURITY.md)<br>[tools/Azure.Mcp.Tools.Policy/tests/Azure.Mcp.Tools.Policy.Tests/Azure.Mcp.Tools.Policy.Tests.csproj](../../../../sources/microsoft__mcp/tools/Azure.Mcp.Tools.Policy/tests/Azure.Mcp.Tools.Policy.Tests/Azure.Mcp.Tools.Policy.Tests.csproj)<br>[tools/Azure.Mcp.Tools.Policy/tests/Azure.Mcp.Tools.Policy.Tests/Assignment/PolicyAssignmentListCommandTests.cs](../../../../sources/microsoft__mcp/tools/Azure.Mcp.Tools.Policy/tests/Azure.Mcp.Tools.Policy.Tests/Assignment/PolicyAssignmentListCommandTests.cs)<br>[tools/Azure.Mcp.Tools.Policy/src/AssemblyInfo.cs](../../../../sources/microsoft__mcp/tools/Azure.Mcp.Tools.Policy/src/AssemblyInfo.cs)<br>[tools/Azure.Mcp.Tools.Policy/src/Azure.Mcp.Tools.Policy.csproj](../../../../sources/microsoft__mcp/tools/Azure.Mcp.Tools.Policy/src/Azure.Mcp.Tools.Policy.csproj)<br>[tools/Azure.Mcp.Tools.Policy/src/GlobalUsings.cs](../../../../sources/microsoft__mcp/tools/Azure.Mcp.Tools.Policy/src/GlobalUsings.cs) |
| Agent instructions | 2 | [AGENTS.md](../../../../sources/microsoft__mcp/AGENTS.md)<br>[.github/copilot-instructions.md](../../../../sources/microsoft__mcp/.github/copilot-instructions.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `Microsoft.Mcp.slnx`, `tools/Fabric.Mcp.Tools.OneLake/README.md`, `tools/Fabric.Mcp.Tools.OneLake/upload_files_simple.ps1`.
2. Trace execution through entrypoints: `servers/Template.Mcp.Server/server.json`, `servers/Template.Mcp.Server/vscode/main.js`, `servers/Fabric.Mcp.Server/server.json`.
3. Map agent/tool runtime through: `AGENTS.md`, `tools/Fabric.Mcp.Tools.OneLake/README.md`, `tools/Fabric.Mcp.Tools.OneLake/upload_files_simple.ps1`.
4. Inspect retrieval/memory/indexing through: `tools/Fabric.Mcp.Tools.Docs/src/Resources/item-definitions/graph-model-definition.md`, `tools/Fabric.Mcp.Tools.Docs/src/Resources/item-definitions/graph-queryset-definition.md`, `tools/Azure.Mcp.Tools.Search/tests/Azure.Mcp.Tools.Search.Tests/Knowledge/KnowledgeBaseGetCommandTests.cs`.
5. Verify behavior through test/eval files: `tools/Fabric.Mcp.Tools.OneLake/tests/Fabric.Mcp.Tools.OneLake.Tests/Fabric.Mcp.Tools.OneLake.Tests.csproj`, `tools/Fabric.Mcp.Tools.OneLake/tests/Fabric.Mcp.Tools.OneLake.Tests/FabricOneLakeSetupTests.cs`, `tools/Fabric.Mcp.Tools.OneLake/tests/Fabric.Mcp.Tools.OneLake.Tests/README.md`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Catalog of official Microsoft MCP Model Context Protocol server implementations for AI powered data access and tool inte. 핵심 구조 신호는 C#, Dockerfile, README.md, AGENTS.md, LICENSE, ci이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
