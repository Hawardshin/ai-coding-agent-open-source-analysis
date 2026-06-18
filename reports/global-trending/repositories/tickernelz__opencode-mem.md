# tickernelz/opencode-mem

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/tickernelz/opencode-mem |
| local path | sources/tickernelz__opencode-mem |
| HEAD | eeeed35 |
| stars/forks | 921 / 92 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-06-13T02:44:10Z |
| trendScore / priorityScore | 143 / 359 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Coding agent / software automation | 161 | README.md, package.json, .github/workflows/embedding-backend.yml |
| Database / data infrastructure | 138 | README.md, package.json, tests/memory-scope.test.ts |
| RAG / retrieval / knowledge | 63 | README.md, .github/workflows/embedding-backend.yml, tests/memory-scope.test.ts |
| AI agent / orchestration | 23 | README.md, package.json, src/services/ai/providers/google-gemini.ts |
| Security / supply chain | 21 | README.md, tests/privacy.test.ts, tests/tool-scope.test.ts |
| Cloud native / infrastructure | 14 | README.md, src/web/app.js, src/web/index.html |
| Data / ML platform | 14 | scripts/verify-embedding-backend.mjs, src/services/client.ts, src/services/embedding.ts |
| Frontend / app framework | 7 | src/services/client.ts, src/services/auto-capture.ts, src/web/i18n.js |
| Developer tools / DX | 6 | package.json, src/index.ts, src/services/ai/opencode-provider.ts |
| Local LLM / inference | 1 | src/config.ts |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, frontend, frontendStack, infra, llmFramework, local-llm, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript |
| capabilities | LLM/app framework, Vector/search store, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 88 |
| manifests | 3 |
| docs | 1 |
| tests | 24 |
| ci/ops | 2 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | OpenCode Memory | OpenCode Memory / Visual Overview / Core Features / Prerequisites / Getting Started / Usage Examples / Configuration Essentials / Memory Scope / Auto-Capture AI Provider / Public Subpath Exports | OpenCode Memory ! npm version https //img.shields.io/npm/v/opencode mem.svg https //www.npmjs.com/package/opencode mem ! npm downloads https //img.shields.io/npm/dm/opencode mem.svg https //www.npmjs.com/package/opencode mem ! license https //img.shields.io/npm/l/opencode mem.svg https //www.npmjs.com/package/opencode mem ! OpenCode Memory Banner .github/banner.png A persistent memory system for AI coding agents that enables long term context retention across sessions using local vector database technology. Visual Overview Project Memory Timeline ! Project Memory Timeline .github/screenshot project memory.png User Profile Viewer ! User Profile Viewer .github/screenshot user profile.png Core |


## Key Files

### Manifests

- README.md
- package.json
- tsconfig.json


### Spec / Docs / Prompt Artifacts

_none_


### Agent Instruction Files

_none_


## Top Directories

| dir | count |
| --- | --- |
| src | 52 |
| tests | 24 |
| .github | 3 |
| .gitignore | 1 |
| .husky | 1 |
| .npmrc | 1 |
| .prettierignore | 1 |
| .prettierrc | 1 |
| package.json | 1 |
| README.md | 1 |
| scripts | 1 |
| tsconfig.json | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .ts | 72 |
| [no-ext] | 5 |
| .yml | 3 |
| .js | 2 |
| .json | 2 |
| .css | 1 |
| .html | 1 |
| .md | 1 |
| .mjs | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
