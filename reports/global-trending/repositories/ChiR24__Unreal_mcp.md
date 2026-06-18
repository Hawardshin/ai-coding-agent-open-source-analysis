# ChiR24/Unreal_mcp

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/ChiR24/Unreal_mcp |
| local path | sources/ChiR24__Unreal_mcp |
| HEAD | e1ceb64 |
| stars/forks | 729 / 136 |
| language | C++ |
| license |  |
| pushedAt | 2026-06-16T07:03:34Z |
| trendScore / priorityScore | 140 / 409 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| MCP / agent interoperability | 473 | tests/AGENTS.md, plugins/McpAutomationBridge/README.md, plugins/UnrealAgent/README.md |
| Developer tools / DX | 225 | tests/AGENTS.md, plugins/McpAutomationBridge/README.md, plugins/UnrealAgent/README.md |
| Security / supply chain | 97 | tests/AGENTS.md, plugins/McpAutomationBridge/README.md, AGENTS.md |
| AI agent / orchestration | 80 | tests/AGENTS.md, plugins/UnrealAgent/README.md, plugins/UnrealAgent/Resources/OpenCodeStudioKit/README.md |
| Coding agent / software automation | 77 | plugins/McpAutomationBridge/README.md, plugins/UnrealAgent/README.md, plugins/UnrealAgent/Resources/OpenCodeStudioKit/README.md |
| Observability / evaluation | 18 | AGENTS.md, README.md, docs/editor-plugin-extension.md |
| Cloud native / infrastructure | 17 | README.md, docs/Engine-API-Reference.md, tests/mcp-tools/gameplay/manage-ai.test.mjs |
| Data / ML platform | 15 | plugins/UnrealAgent/README.md, docs/editor-plugin-extension.md, docs/native-automation-progress.md |
| RAG / retrieval / knowledge | 3 | tests/AGENTS.md, AGENTS.md, docs/Roadmap.md |
| Database / data infrastructure | 1 | docs/editor-plugin-extension.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, devtools, frontendStack, infra, infraOps, llmFramework, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, C/C++, .NET |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack |


## Structure Summary

| key | value |
| --- | --- |
| files | 1826 |
| manifests | 21 |
| docs | 30 |
| tests | 146 |
| ci/ops | 15 |
| spec artifacts | 16 |
| agent instruction files | 15 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Unreal Engine MCP Server | Unreal Engine MCP Server / Table of Contents / Features / Architecture / Getting Started / Prerequisites / Step 1: Install MCP Server (Option B only — skip for Native MCP) / Step 2: Install Unreal Plugin / macOS / Linux / Windows | Unreal Engine MCP Server ! License MIT https //img.shields.io/badge/License MIT yellow.svg https //opensource.org/licenses/MIT ! NPM Package https //img.shields.io/npm/v/unreal engine mcp server https //www.npmjs.com/package/unreal engine mcp server ! MCP SDK https //img.shields.io/badge/MCP%20SDK TypeScript blue https //github.com/modelcontextprotocol/sdk ! Unreal Engine https //img.shields.io/badge/Unreal%20Engine 5.0 5.8 orange https //www.unrealengine.com/ ! MCP Registry https //img.shields.io/badge/MCP%20Registry Published green https //registry.modelcontextprotocol.io/ ! Project Board https //img.shields.io/badge/Project Roadmap blueviolet?logo=github https //github.com/users/ChiR24/pr |


## Key Files

### Manifests

- tests/AGENTS.md
- plugins/McpAutomationBridge/README.md
- plugins/UnrealAgent/README.md
- plugins/UnrealAgent/Resources/OpenCodeStudioKit/README.md
- AGENTS.md
- plugins/McpAutomationBridge/AGENTS.md
- plugins/McpAutomationBridge/Source/McpAutomationBridge/Private/MCP/AGENTS.md
- plugins/UnrealAgent/AGENTS.md
- plugins/UnrealAgent/Source/UnrealAgent/Private/Acp/AGENTS.md
- plugins/UnrealAgent/Source/UnrealAgent/Private/UI/AGENTS.md
- src/automation/AGENTS.md
- src/server/AGENTS.md
- src/tools/AGENTS.md
- src/tools/handlers/AGENTS.md
- src/types/AGENTS.md
- src/utils/AGENTS.md
- README.md
- GEMINI.md
- Dockerfile
- package.json


### Spec / Docs / Prompt Artifacts

- tests/AGENTS.md
- AGENTS.md
- plugins/McpAutomationBridge/AGENTS.md
- plugins/McpAutomationBridge/Source/McpAutomationBridge/Private/MCP/AGENTS.md
- plugins/UnrealAgent/AGENTS.md
- plugins/UnrealAgent/Source/UnrealAgent/Private/Acp/AGENTS.md
- plugins/UnrealAgent/Source/UnrealAgent/Private/UI/AGENTS.md
- src/automation/AGENTS.md
- src/server/AGENTS.md
- src/tools/AGENTS.md
- src/tools/handlers/AGENTS.md
- src/types/AGENTS.md
- src/utils/AGENTS.md
- GEMINI.md
- .github/copilot-instructions.md
- docs/Roadmap.md


### Agent Instruction Files

- tests/AGENTS.md
- AGENTS.md
- plugins/McpAutomationBridge/AGENTS.md
- plugins/McpAutomationBridge/Source/McpAutomationBridge/Private/MCP/AGENTS.md
- plugins/UnrealAgent/AGENTS.md
- plugins/UnrealAgent/Source/UnrealAgent/Private/Acp/AGENTS.md
- plugins/UnrealAgent/Source/UnrealAgent/Private/UI/AGENTS.md
- src/automation/AGENTS.md
- src/server/AGENTS.md
- src/tools/AGENTS.md
- src/tools/handlers/AGENTS.md
- src/types/AGENTS.md
- src/utils/AGENTS.md
- GEMINI.md
- .github/copilot-instructions.md


## Top Directories

| dir | count |
| --- | --- |
| plugins | 1294 |
| src | 400 |
| tests | 74 |
| .github | 23 |
| docs | 6 |
| scripts | 6 |
| .dockerignore | 1 |
| .env.example | 1 |
| .env.production | 1 |
| .gitattributes | 1 |
| .gitignore | 1 |
| .jules | 1 |
| AGENTS.md | 1 |
| CHANGELOG.md | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .cpp | 1056 |
| .ts | 427 |
| .h | 219 |
| .mjs | 43 |
| .md | 30 |
| .yml | 21 |
| .json | 8 |
| [no-ext] | 7 |
| .cs | 2 |
| .ini | 2 |
| .js | 2 |
| .uplugin | 2 |
| .bat | 1 |
| .cjs | 1 |
| .example | 1 |
| .mp4 | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
