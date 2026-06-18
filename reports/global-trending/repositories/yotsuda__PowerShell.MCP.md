# yotsuda/PowerShell.MCP

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/yotsuda/PowerShell.MCP |
| local path | sources/yotsuda__PowerShell.MCP |
| HEAD | 1b7734d |
| stars/forks | 73 / 7 |
| language | C# |
| license |  |
| pushedAt | 2026-06-18T00:24:02Z |
| trendScore / priorityScore | 135 / 377 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| MCP / agent interoperability | 500 | PowerShell.MCP/PlatyPS/README.md, Tests/README.md, README.md |
| Cloud native / infrastructure | 246 | README.md, docs/pwsh-mcp-vs-ripple-evaluation.md, PowerShell.MCP.Proxy/Prompts/PowerShellPrompts.cs |
| Data / ML platform | 214 | README.md, docs/pwsh-mcp-vs-ripple-evaluation.md, PowerShell.MCP.Proxy/Prompts/Templates/dictation.md |
| Developer tools / DX | 110 | Tests/README.md, README.md, PowerShell.MCP.Proxy/Prompts/Templates/create-procedure.md |
| AI agent / orchestration | 91 | PowerShell.MCP/MCPModuleInitializer.cs, PowerShell.MCP.Proxy/Helpers/PipelineHelper.cs, PowerShell.MCP.Proxy/Services/ConsoleSessionManager.cs |
| Security / supply chain | 79 | README.md, SECURITY.md, .github/workflows/release.yml |
| Coding agent / software automation | 20 | README.md, .github/workflows/claude.yml, PowerShell.MCP/PlatyPS/en-US/Get-MCPOwner.md |
| Observability / evaluation | 10 | docs/macOS-Test-Procedure.md, SECURITY.md, PowerShell.MCP.Proxy/Resources/PromptDescriptions.Designer.cs |
| RAG / retrieval / knowledge | 2 | PowerShell.MCP.Proxy/Tools/PowerShellTools.cs, PowerShell.MCP/Services/TeeTextWriter.cs |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, databaseRuntime, devtools, example-rich, frontendStack, infra, infraOps, llmFramework, mcp, observability, rag, security, securityTooling |
| stacks | .NET |
| capabilities | LLM/app framework, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 184 |
| manifests | 3 |
| docs | 32 |
| tests | 72 |
| ci/ops | 4 |
| spec artifacts | 10 |
| agent instruction files | 10 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | PowerShell.MCP | PowerShell.MCP / Overview / Why PowerShell.MCP? / What Makes It Powerful / Architecture / Quick Start / Prerequisites / Ubuntu/Debian / Run in PowerShell (pwsh) / If the cask is unavailable, install from GitHub Release: | PowerShell.MCP ! PowerShell https //img.shields.io/badge/PowerShell 7.4+ blue.svg https //github.com/PowerShell/PowerShell ! Platform https //img.shields.io/badge/Platform Windows%20%7C%20Linux%20%7C%20macOS brightgreen.svg prerequisites ! PowerShell Gallery https //img.shields.io/powershellgallery/v/PowerShell.MCP https //www.powershellgallery.com/packages/PowerShell.MCP ! PowerShell Gallery https //img.shields.io/powershellgallery/dt/PowerShell.MCP https //www.powershellgallery.com/packages/PowerShell.MCP ! License MIT https //img.shields.io/badge/License MIT yellow.svg https //opensource.org/licenses/MIT Security Warning This module provides complete PowerShell access to your system. Mali |


## Key Files

### Manifests

- PowerShell.MCP/PlatyPS/README.md
- Tests/README.md
- README.md


### Spec / Docs / Prompt Artifacts

- PowerShell.MCP.Proxy/Prompts/PowerShellPrompts.cs
- PowerShell.MCP.Proxy/Prompts/PromptTemplateLoader.cs
- PowerShell.MCP.Proxy/Prompts/Templates/analyze.md
- PowerShell.MCP.Proxy/Prompts/Templates/create-procedure.md
- PowerShell.MCP.Proxy/Prompts/Templates/dictation.md
- PowerShell.MCP.Proxy/Prompts/Templates/exec-procedure.md
- PowerShell.MCP.Proxy/Prompts/Templates/html-guidelines.md
- PowerShell.MCP.Proxy/Prompts/Templates/learn.md
- PowerShell.MCP.Proxy/Prompts/Templates/map.md
- .github/workflows/claude.yml


### Agent Instruction Files

- PowerShell.MCP.Proxy/Prompts/PowerShellPrompts.cs
- PowerShell.MCP.Proxy/Prompts/PromptTemplateLoader.cs
- PowerShell.MCP.Proxy/Prompts/Templates/analyze.md
- PowerShell.MCP.Proxy/Prompts/Templates/create-procedure.md
- PowerShell.MCP.Proxy/Prompts/Templates/dictation.md
- PowerShell.MCP.Proxy/Prompts/Templates/exec-procedure.md
- PowerShell.MCP.Proxy/Prompts/Templates/html-guidelines.md
- PowerShell.MCP.Proxy/Prompts/Templates/learn.md
- PowerShell.MCP.Proxy/Prompts/Templates/map.md
- .github/workflows/claude.yml


## Top Directories

| dir | count |
| --- | --- |
| Tests | 72 |
| PowerShell.MCP.Proxy | 46 |
| PowerShell.MCP | 38 |
| .github | 6 |
| docs | 4 |
| licenses | 4 |
| Staging | 2 |
| .gitattributes | 1 |
| .gitignore | 1 |
| Build-AllPlatforms.ps1 | 1 |
| CHANGELOG.md | 1 |
| CODE_OF_CONDUCT.md | 1 |
| CONTRIBUTING.md | 1 |
| LICENSE | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .cs | 54 |
| .ps1 | 54 |
| .md | 32 |
| .resx | 19 |
| [no-ext] | 7 |
| .txt | 4 |
| .yml | 4 |
| .csproj | 3 |
| .json | 2 |
| .psd1 | 2 |
| .psm1 | 2 |
| .sln | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
