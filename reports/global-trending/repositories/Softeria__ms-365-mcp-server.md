# Softeria/ms-365-mcp-server

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/Softeria/ms-365-mcp-server |
| local path | sources/Softeria__ms-365-mcp-server |
| HEAD | ae40eb9 |
| stars/forks | 785 / 303 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-06-17T18:53:45Z |
| trendScore / priorityScore | 168 / 400 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| MCP / agent interoperability | 280 | examples/azure-container-apps/README.md, README.md, src/generated/README.md |
| Security / supply chain | 207 | examples/azure-container-apps/README.md, README.md, test/token-cache-storage.test.ts |
| Cloud native / infrastructure | 76 | examples/azure-container-apps/README.md, README.md, docs/deployment.md |
| Developer tools / DX | 66 | examples/azure-container-apps/README.md, README.md, package.json |
| RAG / retrieval / knowledge | 17 | src/mcp-instructions.ts, test/bm25.test.ts, test/or-group-scopes.test.ts |
| AI agent / orchestration | 14 | README.md, test/multi-account.test.ts, src/tool-categories.ts |
| Database / data infrastructure | 6 | examples/azure-container-apps/README.md, docs/deployment.md, examples/azure-container-apps/deploy.ps1 |
| Coding agent / software automation | 5 | README.md, docs/deployment.md, src/graph-tools.ts |
| Observability / evaluation | 3 | test/discovery-search.test.ts, test/generator-schema-pruning.test.ts, src/audit-log.ts |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, database, databaseRuntime, devtools, example-rich, frontendStack, infra, infraOps, llmFramework, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 111 |
| manifests | 6 |
| docs | 5 |
| tests | 48 |
| ci/ops | 3 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | ms-365-mcp-server | ms-365-mcp-server / Supported Clouds / Prerequisites / Features / Output Format: JSON vs TOON / JSON Format (Default) / (experimental) TOON Format / Supported Services & Tools / Personal Account Tools (Available by default) / Organization Account Tools (Requires --org-mode flag) | ms 365 mcp server ! npm version https //img.shields.io/npm/v/@softeria/ms 365 mcp server.svg https //www.npmjs.com/package/@softeria/ms 365 mcp server ! build status https //github.com/softeria/ms 365 mcp server/actions/workflows/build.yml/badge.svg https //github.com/softeria/ms 365 mcp server/actions/workflows/build.yml ! license https //img.shields.io/badge/license MIT blue.svg https //github.com/softeria/ms 365 mcp server/blob/main/LICENSE Microsoft 365 MCP Server A Model Context Protocol MCP server for interacting with Microsoft 365 and Microsoft Office services through the Graph API. Supported Clouds This server supports multiple Microsoft cloud environments Cloud Description Auth Endp |


## Key Files

### Manifests

- examples/azure-container-apps/README.md
- README.md
- src/generated/README.md
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
| test | 47 |
| src | 33 |
| bin | 5 |
| examples | 3 |
| .github | 2 |
| .dockerignore | 1 |
| .env.example | 1 |
| .gitignore | 1 |
| .npmignore | 1 |
| .prettierrc | 1 |
| .releaserc.json | 1 |
| Dockerfile | 1 |
| docs | 1 |
| eslint.config.js | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .ts | 78 |
| .js | 6 |
| .json | 6 |
| [no-ext] | 6 |
| .md | 5 |
| .mjs | 5 |
| .yml | 2 |
| .bicep | 1 |
| .example | 1 |
| .ps1 | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
