# intuit/quickbooks-online-mcp-server

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/intuit/quickbooks-online-mcp-server |
| local path | sources/intuit__quickbooks-online-mcp-server |
| HEAD | def3687 |
| stars/forks | 285 / 148 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-06-17T17:17:58Z |
| trendScore / priorityScore | 148 / 318 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| MCP / agent interoperability | 82 | README.md, package.json, docs/plans/2026-01-13-full-api-coverage-design.md |
| Security / supply chain | 58 | README.md, package.json, docs/plans/2026-01-13-full-api-coverage-design.md |
| Cloud native / infrastructure | 15 | README.md, tests/unit/handlers/bill.handlers.test.ts, tests/unit/handlers/vendor.handlers.test.ts |
| Coding agent / software automation | 15 | README.md, docs/plans/2026-01-13-full-api-coverage-design.md, docs/ARCHITECTURE.md |
| Developer tools / DX | 13 | package.json, docs/ARCHITECTURE.md, .github/workflows/claude-code-review.yml |
| Observability / evaluation | 1 | src/clients/quickbooks-client.ts |


## Categories And Stack

| key | value |
| --- | --- |
| categories | coding-agent, devtools, frontendStack, infra, infraOps, llmFramework, mcp, observability, security, securityTooling |
| stacks | Node/TypeScript/JavaScript |
| capabilities | LLM/app framework, Infra/Ops, Security tooling, Frontend stack |


## Structure Summary

| key | value |
| --- | --- |
| files | 339 |
| manifests | 4 |
| docs | 8 |
| tests | 27 |
| ci/ops | 2 |
| spec artifacts | 2 |
| agent instruction files | 1 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | QuickBooks Online MCP Server | QuickBooks Online MCP Server / Overview / Key Features / Quick Start / Installation / Clone the repository / Install dependencies / Build the project / Configuration / Optional: restrict which tool categories are registered (default: all enabled) | QuickBooks Online MCP Server <div align="center" A comprehensive Model Context Protocol MCP server for QuickBooks Online ! License MIT https //img.shields.io/badge/License MIT blue.svg LICENSE ! Tools https //img.shields.io/badge/Tools 144 green.svg available tools ! Entities https //img.shields.io/badge/Entities 29 orange.svg entities ! Reports https //img.shields.io/badge/Reports 11 purple.svg reports ! Coverage https //img.shields.io/badge/Coverage 100%25 brightgreen.svg testing ! Tests https //img.shields.io/badge/Tests 396 blue.svg testing Quick Start quick start Available Tools available tools Authentication authentication Documentation documentation </div Overview This MCP server prov |


## Key Files

### Manifests

- README.md
- package.json
- tsconfig.json
- tsconfig.test.json


### Spec / Docs / Prompt Artifacts

- docs/ARCHITECTURE.md
- .github/workflows/claude.yml


### Agent Instruction Files

- .github/workflows/claude.yml


## Top Directories

| dir | count |
| --- | --- |
| src | 293 |
| tests | 26 |
| .github | 3 |
| docs | 3 |
| scripts | 2 |
| .env.example | 1 |
| .gitignore | 1 |
| CHANGELOG.md | 1 |
| CODE_OF_CONDUCT.md | 1 |
| CONTRIBUTING.md | 1 |
| jest.config.js | 1 |
| LICENSE | 1 |
| package-lock.json | 1 |
| package.json | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .ts | 318 |
| .md | 8 |
| .json | 4 |
| [no-ext] | 3 |
| .mjs | 2 |
| .yml | 2 |
| .example | 1 |
| .js | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
