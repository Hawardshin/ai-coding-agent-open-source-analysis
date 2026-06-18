# giancarloerra/SocratiCode

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/giancarloerra/SocratiCode |
| local path | sources/giancarloerra__SocratiCode |
| HEAD | b2f368b |
| stars/forks | 3002 / 389 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-06-16T17:39:36Z |
| trendScore / priorityScore | 156 / 464 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Cloud native / infrastructure | 416 | extension/README.md, package.json, SECURITY.md |
| RAG / retrieval / knowledge | 276 | AGENTS.md, extension/README.md, CLAUDE.md |
| Local LLM / inference | 229 | extension/README.md, docker-compose.yml, extension/package.json |
| Frontend / app framework | 135 | extension/README.md, CHANGELOG.md, DEVELOPER.md |
| MCP / agent interoperability | 126 | AGENTS.md, extension/README.md, CLAUDE.md |
| Coding agent / software automation | 122 | AGENTS.md, extension/README.md, CLAUDE.md |
| Database / data infrastructure | 60 | AGENTS.md, extension/README.md, CLAUDE.md |
| Developer tools / DX | 47 | extension/README.md, package.json, tests/unit/embedding-provider.test.ts |
| AI agent / orchestration | 33 | AGENTS.md, extension/README.md, CLAUDE.md |
| Security / supply chain | 30 | extension/README.md, extension/package.json, SECURITY.md |
| Observability / evaluation | 22 | AGENTS.md, extension/README.md, CLAUDE.md |
| Data / ML platform | 13 | DEVELOPER.md, tests/helpers/fixtures.ts, tests/unit/viewer-app.test.ts |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 168 |
| manifests | 10 |
| docs | 21 |
| tests | 51 |
| ci/ops | 4 |
| spec artifacts | 3 |
| agent instruction files | 3 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | SocratiCode | SocratiCode / Contents / Quick Start / Plugins / Why SocratiCode / Built-in Code Search vs SocratiCode / Features / Prerequisites / Embedding performance on macOS / Windows / Example Workflow | <p align="center" <img src="./socraticode logo thumbnail.png" alt="SocratiCode logo" / </p SocratiCode <p align="center" <a href="https //github.com/giancarloerra/socraticode/actions/workflows/ci.yml" <img src="https //github.com/giancarloerra/socraticode/actions/workflows/ci.yml/badge.svg" alt="CI" </a <a href="LICENSE" <img src="https //img.shields.io/badge/License AGPL 3.0 blue.svg" alt="License AGPL 3.0" </a <a href="https //www.npmjs.com/package/socraticode" <img src="https //img.shields.io/npm/v/socraticode.svg" alt="npm version" </a <a href="https //nodejs.org/" <img src="https //img.shields.io/badge/node %3E%3D18 brightgreen.svg" alt="Node.js = 18" </a <a href="https //github.com/gia |


## Key Files

### Manifests

- AGENTS.md
- extension/README.md
- README.md
- CLAUDE.md
- GEMINI.md
- docker-compose.yml
- extension/package.json
- extension/tsconfig.json
- package.json
- tsconfig.json


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- CLAUDE.md
- GEMINI.md


### Agent Instruction Files

- AGENTS.md
- CLAUDE.md
- GEMINI.md


## Top Directories

| dir | count |
| --- | --- |
| tests | 50 |
| src | 46 |
| extension | 21 |
| .github | 7 |
| skills | 4 |
| scripts | 3 |
| .claude-plugin | 2 |
| .cursor-plugin | 2 |
| .codex-plugin | 1 |
| .editorconfig | 1 |
| .gitignore | 1 |
| .mcp.json | 1 |
| .release-it.json | 1 |
| .socraticodecontextartifacts.json.example | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .ts | 103 |
| .md | 21 |
| .json | 20 |
| [no-ext] | 8 |
| .yml | 7 |
| .mjs | 3 |
| .example | 2 |
| .js | 2 |
| .css | 1 |
| .html | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
