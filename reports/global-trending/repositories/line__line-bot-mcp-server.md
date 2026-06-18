# line/line-bot-mcp-server

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/line/line-bot-mcp-server |
| local path | sources/line__line-bot-mcp-server |
| HEAD | bfbbdab |
| stars/forks | 599 / 108 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-06-18T00:17:13Z |
| trendScore / priorityScore | 157 / 342 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| MCP / agent interoperability | 225 | README.md, package.json, .github/workflows/check-eol-newrelease.yml |
| Developer tools / DX | 71 | package.json, test/helpers/mock-line-clients.ts, src/index.ts |
| Cloud native / infrastructure | 30 | README.md, .github/workflows/test.yml, README.ja.md |
| AI agent / orchestration | 15 | README.md, manifest.json, README.ja.md |
| Security / supply chain | 6 | Dockerfile, .github/workflows/npm-audit.yml, CODE_OF_CONDUCT.md |
| Coding agent / software automation | 2 | README.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, devtools, frontendStack, infra, infraOps, mcp, security, securityTooling |
| stacks | Node/TypeScript/JavaScript |
| capabilities | Infra/Ops, Security tooling, Frontend stack |


## Structure Summary

| key | value |
| --- | --- |
| files | 75 |
| manifests | 5 |
| docs | 14 |
| tests | 16 |
| ci/ops | 8 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | LINE Bot MCP Server | LINE Bot MCP Server / Tools / Installation (Using npx) / Step 1: Create LINE Official Account / Step 2: Configure AI Agent / Installation (Using Docker) / Step 1: Create LINE Official Account / Step 2: Build line-bot-mcp-server image / Step 3: Configure AI Agent / Local Development with Inspector | 日本語版 READMEはこちら README.ja.md LINE Bot MCP Server ! npmjs https //badge.fury.io/js/%40line%2Fline bot mcp server.svg https //www.npmjs.com/package/@line/line bot mcp server Model Context Protocol MCP https //github.com/modelcontextprotocol server implementation that integrates the LINE Messaging API to connect an AI Agent to the LINE Official Account. ! /assets/demo.png !NOTE This repository is provided as a preview version. While we offer it for experimental purposes, please be aware that it may not include complete functionality or comprehensive support. Tools 1. push text message Push a simple text message to a user via LINE. Inputs userId string? The user ID to receive a message. Defaults |


## Key Files

### Manifests

- README.md
- Dockerfile
- package.json
- tsconfig.json
- tsconfig.test.json


### Spec / Docs / Prompt Artifacts

_none_


### Agent Instruction Files

_none_


## Top Directories

| dir | count |
| --- | --- |
| src | 20 |
| .github | 15 |
| test | 15 |
| richmenu-template | 6 |
| scripts | 2 |
| .editorconfig | 1 |
| .gitignore | 1 |
| .npmrc | 1 |
| .prettierrc.json | 1 |
| CODE_OF_CONDUCT.md | 1 |
| CONTRIBUTING.md | 1 |
| Dockerfile | 1 |
| LICENSE | 1 |
| manifest.json | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .ts | 36 |
| .md | 14 |
| .yml | 8 |
| .json | 6 |
| [no-ext] | 5 |
| .mjs | 3 |
| .cjs | 1 |
| .json5 | 1 |
| .sh | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
