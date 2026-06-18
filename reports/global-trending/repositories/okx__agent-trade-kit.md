# okx/agent-trade-kit

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/okx/agent-trade-kit |
| local path | sources/okx__agent-trade-kit |
| HEAD | df755fe |
| stars/forks | 335 / 56 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-06-17T09:57:46Z |
| trendScore / priorityScore | 151 / 382 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| MCP / agent interoperability | 448 | packages/mcp/README.md, README.md, packages/mcp/package.json |
| Developer tools / DX | 447 | packages/cli/README.md, README.md, skills/README.md |
| AI agent / orchestration | 157 | README.md, skills/README.md, packages/cli/package.json |
| Coding agent / software automation | 106 | packages/mcp/README.md, README.md, skills/README.md |
| Security / supply chain | 86 | packages/cli/README.md, packages/mcp/README.md, README.md |
| Cloud native / infrastructure | 24 | docs/configuration.md, packages/cli/test/market-dispatch.test.ts, packages/core/test/rest-client.test.ts |
| Observability / evaluation | 8 | docs/configuration.md, docs/faq.md, docs/module-registry.md |
| Database / data infrastructure | 6 | README.md, docs/cli-reference.md, docs/modules/smartmoney.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, database, devtools, frontendStack, infra, infraOps, mcp, observability, sdk-api, security, securityTooling |
| stacks | Node/TypeScript/JavaScript |
| capabilities | Infra/Ops, Security tooling, Frontend stack |


## Structure Summary

| key | value |
| --- | --- |
| files | 339 |
| manifests | 16 |
| docs | 97 |
| tests | 93 |
| ci/ops | 3 |
| spec artifacts | 1 |
| agent instruction files | 0 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | OKX Agent Trade Kit | OKX Agent Trade Kit / What is this? / Features / Modules / Quick Start / 1. Install / 2. Configure OKX API credentials (interactive wizard) / 3. Register the MCP server with your AI client / okx-trade-mcp / okx-trade-cli | OKX Agent Trade Kit ! CI https //github.com/okx/agent tradekit/actions/workflows/ci.yml/badge.svg https //github.com/okx/agent tradekit/actions/workflows/ci.yml ! codecov https //codecov.io/gh/okx/agent tradekit/branch/master/graph/badge.svg https //codecov.io/gh/okx/agent tradekit ! npm mcp https //img.shields.io/npm/v/okx trade mcp?label=okx trade mcp https //www.npmjs.com/package/okx trade mcp ! npm downloads mcp https //img.shields.io/npm/dt/okx trade mcp?label=mcp+total+downloads https //www.npmjs.com/package/okx trade mcp ! npm cli https //img.shields.io/npm/v/okx trade cli?label=okx trade cli https //www.npmjs.com/package/okx trade cli ! npm downloads cli https //img.shields.io/npm/dt |


## Key Files

### Manifests

- packages/cli/README.md
- packages/mcp/README.md
- README.md
- scripts/smoke-test/README.md
- skills/README.md
- packages/cli/test/tsconfig.json
- packages/mcp/test/tsconfig.json
- packages/cli/package.json
- packages/cli/tsconfig.json
- packages/mcp/package.json
- packages/mcp/tsconfig.json
- package.json
- packages/core/test/tsconfig.json
- packages/core/package.json
- packages/core/tsconfig.json
- tsconfig.base.json


### Spec / Docs / Prompt Artifacts

- ARCHITECTURE.md


### Agent Instruction Files

_none_


## Top Directories

| dir | count |
| --- | --- |
| packages | 213 |
| skills | 60 |
| docs | 24 |
| scripts | 12 |
| .github | 8 |
| test | 3 |
| .env.example | 1 |
| .gitignore | 1 |
| .npmrc | 1 |
| ARCHITECTURE.md | 1 |
| ARCHITECTURE.zh-CN.md | 1 |
| CHANGELOG.md | 1 |
| CHANGELOG.zh-CN.md | 1 |
| config.toml.example | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .ts | 203 |
| .md | 97 |
| .json | 15 |
| .sh | 5 |
| .yml | 5 |
| .mjs | 3 |
| [no-ext] | 3 |
| .example | 2 |
| .js | 2 |
| .yaml | 2 |
| .ps1 | 1 |
| .txt | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
