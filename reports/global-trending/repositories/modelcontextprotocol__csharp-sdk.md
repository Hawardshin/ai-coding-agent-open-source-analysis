# modelcontextprotocol/csharp-sdk

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/modelcontextprotocol/csharp-sdk |
| local path | sources/modelcontextprotocol__csharp-sdk |
| HEAD | f93df7e |
| stars/forks | 4335 / 728 |
| language | C# |
| license |  |
| pushedAt | 2026-06-17T20:28:50Z |
| trendScore / priorityScore | 183 / 445 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| MCP / agent interoperability | 500 | samples/AspNetCoreMcpPerSessionTools/README.md, samples/FileBasedMcpServer/README.md, samples/ProtectedMcpClient/README.md |
| Security / supply chain | 86 | samples/ProtectedMcpClient/README.md, samples/ProtectedMcpServer/README.md, .github/copilot-instructions.md |
| Developer tools / DX | 81 | samples/AspNetCoreMcpPerSessionTools/README.md, README.md, samples/TasksExtension/README.md |
| Coding agent / software automation | 25 | tests/ModelContextProtocol.Tests/Configuration/McpServerBuilderExtensionsPromptsTests.cs, tests/ModelContextProtocol.Tests/Configuration/McpServerBuilderExtensionsResourcesTests.cs, tests/ModelContextProtocol.Tests/Configuration/McpServerBuilderExtensionsToolsTests.cs |
| Cloud native / infrastructure | 11 | docs/concepts/elicitation/samples/server/Program.cs, docs/concepts/elicitation/samples/server/Tools/InteractiveTools.cs, docs/concepts/httpcontext/samples/Program.cs |
| Data / ML platform | 8 | .github/copilot-instructions.md, tests/ModelContextProtocol.AspNetCore.Tests/MapMcpTests.cs, tests/ModelContextProtocol.Tests/Configuration/McpServerBuilderExtensionsMessageFilterTests.cs |
| Observability / evaluation | 5 | .github/copilot-instructions.md, samples/AspNetCoreMcpServer/Program.cs |
| AI agent / orchestration | 2 | tests/ModelContextProtocol.ConformanceClient/Program.cs |
| Database / data infrastructure | 1 | docs/concepts/elicitation/samples/server/Tools/InteractiveTools.cs |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontendStack, infra, infraOps, llmFramework, mcp, observability, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, .NET |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 799 |
| manifests | 10 |
| docs | 91 |
| tests | 262 |
| ci/ops | 7 |
| spec artifacts | 8 |
| agent instruction files | 6 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | MCP C# SDK | MCP C# SDK / Packages / Getting Started / About MCP / Cross-Application Access (Identity Assertion Authorization Grant flow) / License | MCP C SDK ! NuGet version https //img.shields.io/nuget/v/ModelContextProtocol.svg https //www.nuget.org/packages/ModelContextProtocol The official C SDK for the Model Context Protocol https //modelcontextprotocol.io/ , enabling .NET applications, services, and libraries to implement and interact with MCP clients and servers. Please visit the API documentation https //csharp.sdk.modelcontextprotocol.io/api/ModelContextProtocol.html for more details on available functionality. Packages This SDK consists of three main packages ModelContextProtocol.Core https //www.nuget.org/packages/ModelContextProtocol.Core ! NuGet version https //img.shields.io/nuget/v/ModelContextProtocol.Core.svg https //ww |


## Key Files

### Manifests

- samples/AspNetCoreMcpPerSessionTools/README.md
- samples/FileBasedMcpServer/README.md
- samples/ProtectedMcpClient/README.md
- samples/ProtectedMcpServer/README.md
- README.md
- samples/TasksExtension/README.md
- samples/WeatherAppServer/README.md
- Makefile
- package.json
- src/PACKAGE.md


### Spec / Docs / Prompt Artifacts

- .github/copilot-instructions.md
- samples/EverythingServer/Prompts/ComplexPromptType.cs
- samples/EverythingServer/Prompts/SimplePromptType.cs
- tests/ModelContextProtocol.ConformanceServer/Prompts/ConformancePrompts.cs
- tests/ModelContextProtocol.ConformanceServer/Prompts/IncompleteResultPrompts.cs
- docs/concepts/prompts/prompts.md
- docs/roadmap.md
- docs/concepts/tasks/tasks.md


### Agent Instruction Files

- .github/copilot-instructions.md
- samples/EverythingServer/Prompts/ComplexPromptType.cs
- samples/EverythingServer/Prompts/SimplePromptType.cs
- tests/ModelContextProtocol.ConformanceServer/Prompts/ConformancePrompts.cs
- tests/ModelContextProtocol.ConformanceServer/Prompts/IncompleteResultPrompts.cs
- docs/concepts/prompts/prompts.md


## Top Directories

| dir | count |
| --- | --- |
| src | 357 |
| tests | 262 |
| samples | 72 |
| docs | 65 |
| .github | 24 |
| .config | 1 |
| .devcontainer | 1 |
| .editorconfig | 1 |
| .gitattributes | 1 |
| .gitignore | 1 |
| CONTRIBUTING.md | 1 |
| Directory.Build.props | 1 |
| Directory.Packages.props | 1 |
| global.json | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .cs | 644 |
| .md | 54 |
| .csproj | 34 |
| .json | 32 |
| .yml | 10 |
| [no-ext] | 7 |
| .http | 6 |
| .props | 4 |
| .config | 1 |
| .html | 1 |
| .ipynb | 1 |
| .slnx | 1 |
| .snk | 1 |
| .svg | 1 |
| .txt | 1 |
| .xml | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
