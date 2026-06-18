# DAWNCR0W/affine-mcp-server

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/DAWNCR0W/affine-mcp-server |
| local path | sources/DAWNCR0W__affine-mcp-server |
| HEAD | 50f8853 |
| stars/forks | 201 / 59 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-06-17T08:36:17Z |
| trendScore / priorityScore | 147 / 401 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| MCP / agent interoperability | 500 | README.md, Dockerfile, docs/client-setup.md |
| Database / data infrastructure | 215 | README.md, docker/docker-compose.yml, package.json |
| Developer tools / DX | 200 | README.md, docker/docker-compose.yml, docs/client-setup.md |
| Cloud native / infrastructure | 182 | README.md, Dockerfile, docs/client-setup.md |
| Security / supply chain | 173 | README.md, Dockerfile, docs/client-setup.md |
| Coding agent / software automation | 98 | README.md, docs/client-setup.md, tests/test-cli-commands.mjs |
| AI agent / orchestration | 16 | tests/test-database-schema.mjs, docs/edgeless-canvas-cookbook.md, src/cli.ts |
| Data / ML platform | 10 | .github/workflows/e2e.yml, tests/run-e2e.sh, tests/test-surface-elements.mjs |
| Frontend / app framework | 6 | tests/test-database-cells.mjs |
| RAG / retrieval / knowledge | 2 | README.md, package.json |
| Observability / evaluation | 1 | tests/test-tool-filtering.mjs |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, frontend, frontendStack, infra, infraOps, llmFramework, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 117 |
| manifests | 5 |
| docs | 13 |
| tests | 48 |
| ci/ops | 7 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | AFFiNE MCP Server | AFFiNE MCP Server / Table of Contents / Overview / Choose Your Path / Quick Start / 1. Install the CLI / 2. Or run the server in Docker / 3. Save credentials with interactive login / 4. Register the server with your client / 5. Verify the connection | AFFiNE MCP Server A Model Context Protocol MCP server for AFFiNE. It exposes AFFiNE workspaces and documents to AI assistants over stdio default or HTTP /mcp and supports both AFFiNE Cloud and self hosted deployments. ! Version https //img.shields.io/badge/version 2.3.0 blue https //github.com/dawncr0w/affine mcp server/releases ! MCP SDK https //img.shields.io/badge/MCP%20SDK 1.17.2 green https //github.com/modelcontextprotocol/typescript sdk ! CI https //github.com/dawncr0w/affine mcp server/actions/workflows/ci.yml/badge.svg https //github.com/dawncr0w/affine mcp server/actions/workflows/ci.yml ! License https //img.shields.io/badge/license MIT yellow LICENSE <a href="https //glama.ai/mcp |


## Key Files

### Manifests

- README.md
- docker/docker-compose.yml
- Dockerfile
- package.json
- tsconfig.json


### Spec / Docs / Prompt Artifacts

_none_


### Agent Instruction Files

_none_


## Top Directories

| dir | count |
| --- | --- |
| tests | 48 |
| src | 30 |
| .github | 10 |
| docs | 6 |
| scripts | 3 |
| docker | 2 |
| .coderabbit.yaml | 1 |
| .dockerignore | 1 |
| .editorconfig | 1 |
| .gitignore | 1 |
| bin | 1 |
| CHANGELOG.md | 1 |
| CODE_OF_CONDUCT.md | 1 |
| CONTRIBUTING.md | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .mjs | 42 |
| .ts | 37 |
| .md | 13 |
| .yml | 10 |
| [no-ext] | 6 |
| .json | 4 |
| .sh | 3 |
| .example | 1 |
| .yaml | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
