# Palm1r/QodeAssist

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/Palm1r/QodeAssist |
| local path | sources/Palm1r__QodeAssist |
| HEAD | 34ce787 |
| stars/forks | 410 / 57 |
| language | C++ |
| license |  |
| pushedAt | 2026-06-17T13:16:53Z |
| trendScore / priorityScore | 138 / 320 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Local LLM / inference | 75 | README.md, docs/llamacpp-configuration.md, docs/ollama-configuration.md |
| AI agent / orchestration | 47 | README.md, docs/agent-roles.md, docs/chat-summarization.md |
| MCP / agent interoperability | 30 | README.md, CMakeLists.txt |
| Coding agent / software automation | 29 | README.md, docs/openai-configuration.md, docs/project-rules.md |
| Developer tools / DX | 25 | README.md, docs/agent-roles.md, docs/file-context.md |
| Observability / evaluation | 2 | README.md |
| Security / supply chain | 1 | README.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, databaseRuntime, devtools, frontendStack, llm-app, llmFramework, local-llm, mcp, observability, security, securityTooling |
| stacks | Node/TypeScript/JavaScript, C/C++ |
| capabilities | LLM/app framework, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 552 |
| manifests | 2 |
| docs | 17 |
| tests | 7 |
| ci/ops | 2 |
| spec artifacts | 1 |
| agent instruction files | 0 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | QodeAssist — AI coding assistant for Qt Creator | QodeAssist — AI coding assistant for Qt Creator / Table of Contents / Overview / Install plugin to QtCreator / Method 1: Using the Extension Registry (Recommended) / Method 2: Using QodeAssistUpdater (Beta) / Check current status and available updates / Install latest version / Method 3: Manual Installation / Configuration | QodeAssist — AI coding assistant for Qt Creator ! Build plugin https //github.com/Palm1r/QodeAssist/actions/workflows/build cmake.yml/badge.svg?branch=main https //github.com/Palm1r/QodeAssist/actions/workflows/build cmake.yml ! GitHub Tag https //img.shields.io/github/v/tag/Palm1r/QodeAssist?label=release https //github.com/Palm1r/QodeAssist/releases ! GitHub Downloads all assets, all releases https //img.shields.io/github/downloads/Palm1r/QodeAssist/total?color=41%2C173%2C71&label=downloads ! License GPL v3 https //img.shields.io/badge/License GPLv3 blue.svg https //www.gnu.org/licenses/gpl 3.0 ! Discord https //dcbadge.limes.pink/api/server/BGMkUsXUgf?style=flat https //discord.gg/BGMkUsX |


## Key Files

### Manifests

- .github/workflows/README.md
- README.md


### Spec / Docs / Prompt Artifacts

- sources/providersConfig/claude.toml


### Agent Instruction Files

_none_


## Top Directories

| dir | count |
| --- | --- |
| sources | 97 |
| ChatView | 85 |
| settings | 69 |
| TaskFlow | 43 |
| providers | 35 |
| tools | 29 |
| widgets | 28 |
| context | 20 |
| templates | 20 |
| pluginllmcore | 18 |
| resources | 14 |
| docs | 13 |
| UIControls | 12 |
| chat | 10 |


## Extension Distribution

| ext | count |
| --- | --- |
| .hpp | 226 |
| .cpp | 172 |
| .svg | 33 |
| .qml | 32 |
| .txt | 22 |
| .toml | 18 |
| .md | 17 |
| .ts | 14 |
| .h | 5 |
| [no-ext] | 4 |
| .qrc | 3 |
| .yml | 2 |
| .in | 1 |
| .ini | 1 |
| .js | 1 |
| .json | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
