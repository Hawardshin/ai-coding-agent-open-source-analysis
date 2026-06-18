# 0xranx/OpenContext

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/0xranx/OpenContext |
| local path | sources/0xranx__OpenContext |
| HEAD | 0649e71 |
| stars/forks | 590 / 37 |
| language | JavaScript |
| license |  |
| pushedAt | 2026-06-16T01:43:12Z |
| trendScore / priorityScore | 142 / 402 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Coding agent / software automation | 296 | README.md, package.json, src-tauri/src/commands/agent.rs |
| AI agent / orchestration | 203 | src/ui/src/components/agent/README.md, AGENTS.md, README.md |
| Frontend / app framework | 188 | AGENTS.md, src-ios/README.md, package.json |
| Developer tools / DX | 157 | AGENTS.md, README.md, src-ios/README.md |
| RAG / retrieval / knowledge | 115 | AGENTS.md, README.md, crates/opencontext-node/README.md |
| MCP / agent interoperability | 80 | AGENTS.md, README.md, package.json |
| Database / data infrastructure | 16 | src-ios/README.md, src-ios/package.json, crates/opencontext-core/src/search/vector_store.rs |
| Local LLM / inference | 10 | src-tauri/src/commands/ai.rs, src/core/config.js, src/ui/server.js |
| Security / supply chain | 9 | .github/workflows/desktop-build.yml, src-tauri/tauri.conf.json |
| Cloud native / infrastructure | 6 | src/ui/src/components/agent/AgentSidebar.jsx |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, llmFramework, local-llm, mcp, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Rust, Swift, C/C++ |
| capabilities | LLM/app framework, Vector/search store, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 224 |
| manifests | 12 |
| docs | 8 |
| tests | 9 |
| ci/ops | 5 |
| spec artifacts | 1 |
| agent instruction files | 1 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | 1. Install | The Problem / The Solution / What's Included / Why OpenContext for Builders / Quick Start / Install CLI / Choose Your Path / 30-Second Setup (CLI + Cursor/Claude Code/Codex) / 1. Install / 2. Initialize (prompts for tool setup; defaults to all) | <div align="center" <picture <source media=" prefers color scheme dark " srcset="docs/images/logo dark.png" <source media=" prefers color scheme light " srcset="docs/images/logo light.png" <img alt="OpenContext Logo" src="docs/images/logo light.png" width="350" </picture <p <strong Give your AI assistant a persistent memory.</strong <br Stop repeating yourself. Start building smarter. </p <p <strong Bring your own coding agent.</strong OpenContext reuses your existing CLI Codex/Claude/OpenCode and adds a GUI + built in Skills/tools — no extra agent subscription. </p <table <tr <td <img src="docs/images/overview.png" alt="OpenContext Overview" height="260" </td <td <img src="docs/images/folde |


## Key Files

### Manifests

- src/ui/src/components/agent/README.md
- AGENTS.md
- README.md
- src-ios/README.md
- crates/opencontext-node/README.md
- package.json
- src-ios/package.json
- src-tauri/Cargo.toml
- crates/opencontext-core/Cargo.toml
- crates/opencontext-node/Cargo.toml
- crates/opencontext-node/package.json
- src/ui/src/package.json


### Spec / Docs / Prompt Artifacts

- AGENTS.md


### Agent Instruction Files

- AGENTS.md


## Top Directories

| dir | count |
| --- | --- |
| src | 103 |
| src-ios | 51 |
| crates | 25 |
| src-tauri | 17 |
| .github | 6 |
| tests | 6 |
| scripts | 3 |
| docs | 2 |
| .gitignore | 1 |
| AGENTS.md | 1 |
| bin | 1 |
| LICENSE | 1 |
| logo-dark.svg | 1 |
| mcp.example.json | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .js | 81 |
| .jsx | 41 |
| .rs | 28 |
| .json | 20 |
| .svg | 8 |
| .md | 6 |
| .yml | 6 |
| [no-ext] | 6 |
| .cjs | 5 |
| .toml | 3 |
| .css | 2 |
| .h | 2 |
| .html | 2 |
| .plist | 2 |
| .entitlements | 1 |
| .env | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
