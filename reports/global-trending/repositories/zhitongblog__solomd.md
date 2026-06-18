# zhitongblog/solomd

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/zhitongblog/solomd |
| local path | sources/zhitongblog__solomd |
| HEAD | 65f2b77 |
| stars/forks | 376 / 17 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-06-17T06:28:15Z |
| trendScore / priorityScore | 142 / 443 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | app/src-tauri/sample-recipes/README.md, marketplace/README.md, README.md |
| MCP / agent interoperability | 500 | dev-mcp/README.md, mcp-server/README.md, marketplace/awesome-mcp/README.md |
| Developer tools / DX | 241 | dev-mcp/README.md, mcp-server/README.md, web-clipper/README.md |
| Coding agent / software automation | 180 | dev-mcp/README.md, mcp-server/README.md, web-clipper/README.md |
| Security / supply chain | 133 | web-clipper/README.md, app-store/README.md, ios-shortcuts/README.md |
| Local LLM / inference | 131 | README.md, docs/agents.md, docs/roadmap.md |
| Frontend / app framework | 113 | dev-mcp/README.md, app/README.md, README.md |
| RAG / retrieval / knowledge | 103 | dev-mcp/README.md, README.md, docs/agents.md |
| Cloud native / infrastructure | 52 | marketplace/smithery/README.md, mcp-server/Cargo.toml, marketplace/smithery/Dockerfile |
| Data / ML platform | 38 | web-clipper/README.md, scripts/README.md, app/src-tauri/examples/autogit_drive.rs |
| Database / data infrastructure | 35 | dev-mcp/README.md, web-clipper/README.md, dev-mcp/Cargo.toml |
| Observability / evaluation | 25 | dev-mcp/README.md, mcp-server/README.md, dev-mcp/Cargo.toml |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Rust, Ruby |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 762 |
| manifests | 31 |
| docs | 225 |
| tests | 20 |
| ci/ops | 4 |
| spec artifacts | 2 |
| agent instruction files | 1 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | SoloMD | SoloMD / New in 4.6 — the knowledge-graph layer / Three halves of one product / Use it / Print the MCP config snippet for your AI client. / Install / macOS — universal dmg (Apple Silicon + Intel, signed + notarized) / Windows — x64 / Linux — x86_64 + aarch64 / iPad | SoloMD The editor where agents live. ! Latest release https //img.shields.io/github/v/release/zhitongblog/solomd https //github.com/zhitongblog/solomd/releases/latest ! License MIT https //img.shields.io/github/license/zhitongblog/solomd?color=orange LICENSE ! Downloads https //img.shields.io/github/downloads/zhitongblog/solomd/total https //github.com/zhitongblog/solomd/releases ! Website https //img.shields.io/badge/website solomd.app ff9f40.svg https //solomd.app 🌐 中文 README.zh.md · 日本語 README.ja.md · 한국어 README.ko.md · Deutsch README.de.md · Français README.fr.md · Español README.es.md · Português README.pt.md · Italiano README.it.md · Polski README.pl.md · Nederlands README.nl.md · Tür |


## Key Files

### Manifests

- dev-mcp/README.md
- mcp-server/README.md
- web-clipper/README.md
- marketplace/awesome-mcp/README.md
- marketplace/client-docs/README.md
- app-store/README.md
- app/README.md
- app/src-tauri/sample-recipes/README.md
- ios-shortcuts/README.md
- marketplace/README.md
- README.md
- scripts/README.md
- web/public/demo/README.md
- web/README.md
- app-store/ios/screenshots/README.md
- app-store/macos/screenshots/README.md
- app/src-tauri/binaries/README.md
- marketplace/claude-code-skill/README.md
- marketplace/smithery/README.md
- dev-mcp/Cargo.toml


### Spec / Docs / Prompt Artifacts

- docs/agents.md
- docs/roadmap.md


### Agent Instruction Files

- docs/agents.md


## Top Directories

| dir | count |
| --- | --- |
| app | 324 |
| web | 132 |
| app-store | 130 |
| marketplace | 34 |
| web-clipper | 27 |
| scripts | 21 |
| distribution | 16 |
| mcp-server | 11 |
| marketing-zh | 9 |
| brand | 8 |
| docs | 7 |
| marketing | 7 |
| .agents | 5 |
| dev-mcp | 4 |


## Extension Distribution

| ext | count |
| --- | --- |
| .md | 216 |
| .ts | 128 |
| .astro | 100 |
| .vue | 95 |
| .rs | 62 |
| .sh | 26 |
| .yml | 26 |
| .json | 18 |
| [no-ext] | 15 |
| .mjs | 12 |
| .css | 10 |
| .yaml | 9 |
| .txt | 8 |
| .svg | 6 |
| .html | 5 |
| .toml | 4 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
