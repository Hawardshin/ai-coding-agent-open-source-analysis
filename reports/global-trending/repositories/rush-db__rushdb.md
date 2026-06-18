# rush-db/rushdb

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/rush-db/rushdb |
| local path | sources/rush-db__rushdb |
| HEAD | 03edf8b |
| stars/forks | 196 / 17 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-06-11T17:24:10Z |
| trendScore / priorityScore | 148 / 446 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| RAG / retrieval / knowledge | 500 | README.md, .github/profile/README.md, packages/javascript-sdk/README.md |
| AI agent / orchestration | 436 | packages/mcp-server/README.md, README.md, .github/profile/README.md |
| MCP / agent interoperability | 334 | packages/mcp-server/README.md, README.md, .github/profile/README.md |
| Cloud native / infrastructure | 325 | README.md, charts/rushdb/README.md, packages/skills/README.md |
| Developer tools / DX | 293 | packages/mcp-server/README.md, .changeset/README.md, packages/javascript-sdk/tests/README.md |
| Database / data infrastructure | 285 | README.md, .github/profile/README.md, charts/rushdb/README.md |
| Security / supply chain | 92 | packages/mcp-server/README.md, platform/core/README.md, docs/docs/connect/mcp.mdx |
| Frontend / app framework | 79 | platform/dashboard/README.md, docs/package.json, packages/mcp-server/tsconfig.json |
| Data / ML platform | 74 | README.md, .github/profile/README.md, packages/javascript-sdk/README.md |
| Observability / evaluation | 46 | docs/docs/learn/reference/rest-api/ai-and-vectors/indexing.md, docs/docs/learn/tutorials/agent-memory/building-team-memory.mdx, docs/docs/learn/tutorials/ai-and-rag/ai-semantic-search.mdx |
| Coding agent / software automation | 35 | packages/mcp-server/README.md, README.md, .github/profile/README.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 938 |
| manifests | 31 |
| docs | 210 |
| tests | 28 |
| ci/ops | 7 |
| spec artifacts | 1 |
| agent instruction files | 0 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | RushDB | RushDB / The memory layer for AI agents and apps. / The problem / Quick start / Cloud path / or / Store and recall agent memory / Store — graph links sessions, actions, and context automatically / Recall — traverse relationships and filter by meaning / Connect to Claude, Cursor, or any MCP client | <div align="center" ! RushDB Logo https //raw.githubusercontent.com/rush db/rushdb/main/rushdb logo.svg RushDB The memory layer for AI agents and apps. Push any JSON. Your agent gets graph relationships, semantic search, and a live queryable schema — automatically. No pipeline. No separate stores. No schema planning. ! GitHub Stars https //img.shields.io/github/stars/rush db/rushdb?style=social https //github.com/rush db/rushdb ! Follow on X https //img.shields.io/twitter/follow/rushdb?style=social https //x.com/RushDatabase ! NPM Version https //img.shields.io/npm/v/%40rushdb%2Fjavascript sdk?label=npm https //www.npmjs.com/package/@rushdb/javascript sdk ! PyPI Version https //img.shields.i |


## Key Files

### Manifests

- docs/README.md
- packages/mcp-server/README.md
- .changeset/README.md
- packages/javascript-sdk/tests/README.md
- README.md
- .github/profile/README.md
- charts/rushdb/README.md
- packages/javascript-sdk/README.md
- packages/skills/README.md
- platform/core/README.md
- platform/dashboard/README.md
- docs/package.json
- docs/tsconfig.json
- packages/mcp-server/Dockerfile
- packages/mcp-server/package.json
- packages/mcp-server/tsconfig.json
- package.json
- platform/Dockerfile
- platform/package.json
- tsconfig.json


### Spec / Docs / Prompt Artifacts

- docs/docs/connect/agents.mdx


### Agent Instruction Files

_none_


## Top Directories

| dir | count |
| --- | --- |
| platform | 598 |
| docs | 183 |
| packages | 121 |
| charts | 13 |
| .github | 4 |
| .changeset | 2 |
| .dockerignore | 1 |
| .gitignore | 1 |
| .husky | 1 |
| .npmrc | 1 |
| .prettierignore | 1 |
| .prettierrc | 1 |
| CODE_OF_CONDUCT.md | 1 |
| commitlint.config.js | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .ts | 473 |
| .tsx | 175 |
| .mdx | 94 |
| .md | 73 |
| .json | 26 |
| [no-ext] | 23 |
| .svg | 18 |
| .yaml | 13 |
| .sql | 10 |
| .js | 8 |
| .css | 4 |
| .yml | 4 |
| .cjs | 3 |
| .ejs | 3 |
| .example | 3 |
| .txt | 2 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
