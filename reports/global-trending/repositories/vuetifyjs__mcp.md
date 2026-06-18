# vuetifyjs/mcp

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/vuetifyjs/mcp |
| local path | sources/vuetifyjs__mcp |
| HEAD | a9ff9d7 |
| stars/forks | 100 / 3 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-06-17T10:47:25Z |
| trendScore / priorityScore | 136 / 303 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- frontend/DX 신호가 있어 실제 사용자 인터페이스와 개발자 경험을 확인할 가치가 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| MCP / agent interoperability | 192 | README.md, Dockerfile, package.json |
| Frontend / app framework | 78 | README.md, src/services/documentation.ts, src/services/vuetify0.ts |
| Developer tools / DX | 50 | README.md, Dockerfile, package.json |
| Cloud native / infrastructure | 9 | src/services/documentation.ts, src/services/vuetify0.ts |
| Coding agent / software automation | 8 | README.md, src/transports/http.ts |
| Database / data infrastructure | 1 | src/services/logger.ts |
| Observability / evaluation | 1 | src/services/vuetify0.ts |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, database, devtools, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, mcp, observability, sdk-api, securityTooling |
| stacks | Node/TypeScript/JavaScript |
| capabilities | LLM/app framework, Infra/Ops, Security tooling, Frontend stack |


## Structure Summary

| key | value |
| --- | --- |
| files | 37 |
| manifests | 4 |
| docs | 4 |
| tests | 0 |
| ci/ops | 3 |
| spec artifacts | 2 |
| agent instruction files | 2 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Claude Code | Overview / Quick Start / Hosted HTTP Server (Easiest) / Claude Code / Local Installation / Start the Vuetify MCP server / Configuration / Using the Interactive CLI / Configure for hosted remote server / Or configure for local installation | <div align="center" <picture <source media=" prefers color scheme dark " srcset="https //cdn.vuetifyjs.com/docs/images/one/logos/vmcp logo dark.png" <img alt="Vuetify MCP Logo" src="https //cdn.vuetifyjs.com/docs/images/one/logos/vmcp logo light.png" height="100" </picture </div <p align="center" <a href="https //www.npmjs.com/package/@vuetify/mcp" <img src="https //img.shields.io/npm/v/@vuetify/mcp.svg" alt="npm version" </a <a href="https //npm.chart.dev/@vuetify/mcp" <img src="https //img.shields.io/npm/dm/@vuetify/mcp?color=blue" alt="npm downloads" </a <a href="https //opensource.org/licenses/MIT" <img src="https //img.shields.io/badge/License MIT blue.svg" alt="License MIT" </a <a href |


## Key Files

### Manifests

- README.md
- Dockerfile
- package.json
- tsconfig.json


### Spec / Docs / Prompt Artifacts

- src/prompts/documentation.ts
- src/prompts/index.ts


### Agent Instruction Files

- src/prompts/documentation.ts
- src/prompts/index.ts


## Top Directories

| dir | count |
| --- | --- |
| src | 19 |
| .github | 2 |
| .dockerignore | 1 |
| .env.example | 1 |
| .gitignore | 1 |
| .nvmrc | 1 |
| bin | 1 |
| CHANGELOG.md | 1 |
| Dockerfile | 1 |
| eslint.config.js | 1 |
| LICENSE.md | 1 |
| package.json | 1 |
| pnpm-lock.yaml | 1 |
| pnpm-workspace.yaml | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .ts | 19 |
| .md | 4 |
| [no-ext] | 4 |
| .json | 3 |
| .js | 2 |
| .yaml | 2 |
| .yml | 2 |
| .example | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
