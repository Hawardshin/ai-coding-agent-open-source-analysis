# awkoy/notion-mcp-server

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/awkoy/notion-mcp-server |
| local path | sources/awkoy__notion-mcp-server |
| HEAD | 717cd58 |
| stars/forks | 156 / 28 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-06-17T16:17:37Z |
| trendScore / priorityScore | 144 / 357 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.
- frontend/DX 신호가 있어 실제 사용자 인터페이스와 개발자 경험을 확인할 가치가 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| MCP / agent interoperability | 223 | mcp-registry-submission/README.md, README.md, docker-compose.yml |
| Database / data infrastructure | 70 | README.md, src/prompts/index.ts, src/operations/databases.ts |
| Cloud native / infrastructure | 69 | mcp-registry-submission/README.md, README.md, Dockerfile |
| Coding agent / software automation | 62 | mcp-registry-submission/README.md, README.md, package.json |
| Developer tools / DX | 55 | README.md, package.json, src/prompts/index.ts |
| AI agent / orchestration | 24 | README.md, package.json, CHANGELOG.md |
| Security / supply chain | 23 | README.md, mcp-registry-submission/server.yaml, .github/workflows/ci.yml |
| Data / ML platform | 4 | README.md, CHANGELOG.md, src/operations/pages.ts |
| Frontend / app framework | 3 | CHANGELOG.md |
| Observability / evaluation | 1 | src/schema/timezone.ts |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, mcp, observability, security, securityTooling |
| stacks | Node/TypeScript/JavaScript |
| capabilities | LLM/app framework, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 97 |
| manifests | 6 |
| docs | 4 |
| tests | 23 |
| ci/ops | 5 |
| spec artifacts | 1 |
| agent instruction files | 1 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Notion MCP Server — Connect Claude, Cursor & ChatGPT to Notion via Model Context Protocol | Notion MCP Server — Connect Claude, Cursor & ChatGPT to Notion via Model Context Protocol / 📑 Table of Contents / 🪄 5-minute install (no coding required) / What you'll get / What you'll need / Step 1 — Get your Notion Personal Access Token / Step 2 — Tell Claude Desktop where the server lives / Step 2b — Did it work? / Step 3 — Try it / ⚡ Why this server? (vs. the official Notion MCP) | Notion MCP Server — Connect Claude, Cursor & ChatGPT to Notion via Model Context Protocol ! License https //img.shields.io/badge/license MIT green ! TypeScript https //img.shields.io/badge/TypeScript 4.9+ blue ! Model Context Protocol https //img.shields.io/badge/MCP Enabled purple ! notion mcp server on Smithery https //smithery.ai/badge/@awkoy/notion mcp server https //smithery.ai/server/@awkoy/notion mcp server ! NPM Downloads https //img.shields.io/npm/dw/notion mcp server ! Stars https //img.shields.io/github/stars/awkoy/notion mcp server An agent first Notion MCP server Model Context Protocol that connects Claude, Cursor, ChatGPT, Claude Desktop, Cline, Zed and other MCP compatible AI |


## Key Files

### Manifests

- mcp-registry-submission/README.md
- README.md
- docker-compose.yml
- Dockerfile
- package.json
- tsconfig.json


### Spec / Docs / Prompt Artifacts

- src/prompts/index.ts


### Agent Instruction Files

- src/prompts/index.ts


## Top Directories

| dir | count |
| --- | --- |
| src | 53 |
| tests | 23 |
| .github | 4 |
| mcp-registry-submission | 2 |
| .dockerignore | 1 |
| .gitignore | 1 |
| .npmrc | 1 |
| CHANGELOG.md | 1 |
| docker-compose.yml | 1 |
| Dockerfile | 1 |
| glama.json | 1 |
| LICENSE | 1 |
| MIGRATION.md | 1 |
| package-lock.json | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .ts | 77 |
| .yml | 5 |
| [no-ext] | 5 |
| .json | 4 |
| .md | 4 |
| .yaml | 2 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
