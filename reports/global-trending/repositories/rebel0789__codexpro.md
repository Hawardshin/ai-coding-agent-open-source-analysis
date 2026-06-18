# rebel0789/codexpro

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/rebel0789/codexpro |
| local path | sources/rebel0789__codexpro |
| HEAD | 76ed1eb |
| stars/forks | 239 / 22 |
| language | JavaScript |
| license |  |
| pushedAt | 2026-06-17T22:55:35Z |
| trendScore / priorityScore | 147 / 371 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 293 | README.md, package.json, AGENTS.example.md |
| MCP / agent interoperability | 208 | README.md, package.json, AGENTS.example.md |
| Coding agent / software automation | 164 | README.md, package.json, AGENTS.example.md |
| Developer tools / DX | 74 | README.md, package.json, docs/index.html |
| Security / supply chain | 41 | README.md, package.json, docs/index.html |
| Cloud native / infrastructure | 16 | README.md, docs/index.html, DOMAIN_SETUP.md |
| Frontend / app framework | 5 | src/proContext.ts |
| Database / data infrastructure | 2 | README.md, config.example.env |
| Observability / evaluation | 1 | DOMAIN_SETUP.md |
| RAG / retrieval / knowledge | 1 | CHANGELOG.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, database, databaseRuntime, devtools, frontend, frontendStack, infra, infraOps, llmFramework, mcp, observability, rag, security, securityTooling |
| stacks | Node/TypeScript/JavaScript |
| capabilities | LLM/app framework, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 50 |
| manifests | 3 |
| docs | 19 |
| tests | 0 |
| ci/ops | 1 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | repo A | Why / Requirements / Status / Tools exposed to ChatGPT / Visual ChatGPT cards / Install / CodexPro Start / ChatGPT app setup / Easiest run mode / Codex-style context | <p align="center" <img src="docs/favicon.svg" width="72" height="72" alt="CodexPro logo" </p <h1 align="center" CodexPro</h1 <p align="center" Let ChatGPT web see your Codex style repo context and act like a local coding agent. </p <p align="center" <a href="https //www.npmjs.com/package/codexpro" <img alt="npm" src="https //img.shields.io/npm/v/codexpro?style=flat square" </a <a href="https //github.com/rebel0789/codexpro/actions" <img alt="CI" src="https //img.shields.io/github/actions/workflow/status/rebel0789/codexpro/ci.yml?branch=main&style=flat square" </a <a href="https //github.com/rebel0789/codexpro/blob/main/LICENSE" <img alt="License" src="https //img.shields.io/github/license/re |


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
| src | 14 |
| scripts | 9 |
| docs | 7 |
| .github | 1 |
| .gitignore | 1 |
| .npmignore | 1 |
| AGENTS.example.md | 1 |
| CHANGELOG.md | 1 |
| CHATGPT_PROMPT.md | 1 |
| CODEX_PROMPT.md | 1 |
| config.example.env | 1 |
| CONTRIBUTING.md | 1 |
| DOMAIN_SETUP.md | 1 |
| FAQ_ZH.md | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .ts | 14 |
| .md | 12 |
| .mjs | 9 |
| .json | 3 |
| .svg | 3 |
| [no-ext] | 3 |
| .html | 2 |
| .css | 1 |
| .env | 1 |
| .js | 1 |
| .yml | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
