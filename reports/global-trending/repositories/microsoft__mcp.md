# microsoft/mcp

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/microsoft/mcp |
| local path | sources/microsoft__mcp |
| HEAD | 7a3ba50 |
| stars/forks | 3326 / 531 |
| language | C# |
| license |  |
| pushedAt | 2026-06-17T21:24:25Z |
| trendScore / priorityScore | 170 / 498 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| MCP / agent interoperability | 500 | eng/tools/CopilotCliTester/README.md, tools/Fabric.Mcp.Tools.Core/tests/Fabric.Mcp.Tools.Core.Tests/README.md, tools/Fabric.Mcp.Tools.OneLake/tests/Fabric.Mcp.Tools.OneLake.Tests/README.md |
| Observability / evaluation | 278 | docs/bug-bash/README.md, eng/tools/ToolDescriptionEvaluator/README.md, servers/Azure.Mcp.Server/README.md |
| Developer tools / DX | 271 | core/Microsoft.Mcp.Core/tests/Microsoft.Mcp.Tests/Generated/README.md, eng/tools/CopilotCliTester/README.md, docs/bug-bash/README.md |
| Database / data infrastructure | 230 | eng/tools/CopilotCliTester/README.md, docs/bug-bash/README.md, eng/tools/ToolDescriptionEvaluator/README.md |
| AI agent / orchestration | 191 | eng/tools/CopilotCliTester/README.md, docs/bug-bash/README.md, eng/common/mcp/README.md |
| Cloud native / infrastructure | 120 | docs/bug-bash/README.md, eng/tools/ToolDescriptionEvaluator/README.md, servers/Azure.Mcp.Server/azd-templates/README.md |
| Security / supply chain | 68 | eng/tools/CopilotCliTester/README.md, tools/Fabric.Mcp.Tools.OneLake/tests/Fabric.Mcp.Tools.OneLake.Tests/README.md, eng/common/mcp/README.md |
| Data / ML platform | 47 | servers/Azure.Mcp.Server/README.md, servers/Fabric.Mcp.Server/README.md, tools/Fabric.Mcp.Tools.DataFactory/README.md |
| Frontend / app framework | 35 | tools/Azure.Mcp.Tools.Monitor/src/Instrumentation/Resources/examples/nodejs/bunyan-setup.md, tools/Azure.Mcp.Tools.Monitor/src/Instrumentation/Resources/examples/nodejs/nextjs-setup.md |
| Coding agent / software automation | 27 | docs/bug-bash/README.md, servers/Azure.Mcp.Server/README.md, servers/Fabric.Mcp.Server/README.md |
| RAG / retrieval / knowledge | 9 | tools/Fabric.Mcp.Tools.OneLake/tests/Fabric.Mcp.Tools.OneLake.Tests/README.md, docs/bug-bash/README.md, eng/tools/ToolDescriptionEvaluator/README.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llmFramework, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python, .NET |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 4835 |
| manifests | 40 |
| docs | 289 |
| tests | 998 |
| ci/ops | 10 |
| spec artifacts | 12 |
| agent instruction files | 7 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | 🌟 Microsoft MCP Servers | 🌟 Microsoft MCP Servers / 📘 What is MCP? / 📁 Which MCP Servers are built from this repository? / 📚 Which MCP Servers are available from Microsoft? / <img height="18" width="18" src="https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/acom_social_icon_azure" alt="Microsoft Azure Logo" /> Azure / ✨ Microsoft Foundry / <img height="18" width="18" src="https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/acom_social_icon_azure" alt="Microsoft Azure Logo" /> Azure Resource Manager / <img height="18" width="18" src="https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/1062064-Products-1.2-24x24" alt="Microsoft Azure DevOps Logo" /> Azure DevOps / ☸️ Azure Kubernetes Service (AKS) / <img height="18" width="18" src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" alt="GitHub Logo" /> GitHub | 🌟 Microsoft MCP Servers 📘 What is MCP? Model Context Protocol MCP is an open protocol that standardizes how applications provide context to large language models LLMs . It allows AI applications to connect with various data sources and tools in a consistent manner, enhancing their capabilities and flexibility. MCP follows a client server architecture MCP Hosts Applications like AI assistants or IDEs that initiate connections. MCP Clients Connectors within the host application that maintain 1 1 connections with servers. MCP Servers Services that provide context and capabilities through the standardized MCP. For more details, visit the official MCP website https //modelcontextprotocol.io . � |


## Key Files

### Manifests

- core/Microsoft.Mcp.Core/tests/Microsoft.Mcp.Tests/Generated/README.md
- eng/tools/CopilotCliTester/README.md
- tools/Fabric.Mcp.Tools.Core/tests/Fabric.Mcp.Tools.Core.Tests/README.md
- tools/Fabric.Mcp.Tools.OneLake/tests/Fabric.Mcp.Tools.OneLake.Tests/README.md
- docs/bug-bash/README.md
- core/Microsoft.Mcp.Core/src/Areas/Server/Commands/README.md
- eng/common/mcp/README.md
- eng/common/tsp-client/README.md
- eng/tools/ToolDescriptionEvaluator/README.md
- servers/Azure.Mcp.Server/azd-templates/README.md
- servers/Azure.Mcp.Server/README.md
- servers/Fabric.Mcp.Server/README.md
- servers/Template.Mcp.Server/README.md
- tools/Fabric.Mcp.Tools.DataFactory/README.md
- tools/Fabric.Mcp.Tools.OneLake/README.md
- AGENTS.md
- eng/common/testproxy/onboarding/README.md
- eng/common/testproxy/scripts/resolve-asset-conflict/README.md
- eng/common/testproxy/scripts/tag-merge/README.md
- eng/common/TestResources/README.md


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- .github/copilot-instructions.md
- eng/tools/ToolDescriptionEvaluator/prompts/consolidated-prompts.json
- eng/tools/ToolDescriptionEvaluator/prompts/namespace-prompts.json
- eng/tools/ToolDescriptionEvaluator/prompts/namespace-tools.json
- eng/tools/ToolDescriptionEvaluator/prompts/prompts.json
- tools/Azure.Mcp.Tools.AzureBackup/docs/architecture.md
- tools/Fabric.Mcp.Tools.OneLake/src/Prompts/OneLakePrompts.cs
- servers/Azure.Mcp.Server/vscode/.vscode/tasks.json
- servers/Fabric.Mcp.Server/vscode/.vscode/tasks.json
- servers/Template.Mcp.Server/vscode/.vscode/tasks.json
- .vscode/tasks.json


### Agent Instruction Files

- AGENTS.md
- .github/copilot-instructions.md
- eng/tools/ToolDescriptionEvaluator/prompts/consolidated-prompts.json
- eng/tools/ToolDescriptionEvaluator/prompts/namespace-prompts.json
- eng/tools/ToolDescriptionEvaluator/prompts/namespace-tools.json
- eng/tools/ToolDescriptionEvaluator/prompts/prompts.json
- tools/Fabric.Mcp.Tools.OneLake/src/Prompts/OneLakePrompts.cs


## Top Directories

| dir | count |
| --- | --- |
| tools | 3756 |
| core | 471 |
| eng | 399 |
| servers | 142 |
| docs | 21 |
| .github | 19 |
| .vscode | 3 |
| .config | 1 |
| .devcontainer | 1 |
| .editorconfig | 1 |
| .gitattributes | 1 |
| .gitignore | 1 |
| AGENTS.md | 1 |
| CODE_OF_CONDUCT.md | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .cs | 2747 |
| .json | 1173 |
| .md | 272 |
| .ps1 | 210 |
| .csproj | 140 |
| .yml | 119 |
| .bicep | 45 |
| .ts | 27 |
| .txt | 20 |
| [no-ext] | 15 |
| .js | 14 |
| .wav | 11 |
| .partial | 6 |
| .slnx | 5 |
| .cmd | 3 |
| .props | 3 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
