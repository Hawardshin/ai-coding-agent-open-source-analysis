# ProfessionalWiki/MediaWiki-MCP-Server

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/ProfessionalWiki/MediaWiki-MCP-Server |
| local path | sources/ProfessionalWiki__MediaWiki-MCP-Server |
| HEAD | 4bbb3c5 |
| stars/forks | 96 / 25 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-06-17T22:28:19Z |
| trendScore / priorityScore | 165 / 398 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| MCP / agent interoperability | 407 | AGENTS.md, README.md, CLAUDE.md |
| Security / supply chain | 385 | AGENTS.md, README.md, Dockerfile |
| Cloud native / infrastructure | 174 | AGENTS.md, README.md, Dockerfile |
| Developer tools / DX | 45 | AGENTS.md, README.md, package.json |
| Coding agent / software automation | 26 | README.md, docs/testing.md, docs/configuration.md |
| AI agent / orchestration | 24 | AGENTS.md, README.md, CLAUDE.md |
| Observability / evaluation | 11 | README.md, docs/deployment.md, docs/operations.md |
| RAG / retrieval / knowledge | 3 | README.md, docs/tool-conventions.md, CHANGELOG.md |
| Data / ML platform | 2 | docs/testing.md, CHANGELOG.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, devtools, frontendStack, infra, infraOps, llm-app, llmFramework, mcp, observability, rag, security, securityTooling |
| stacks | Node/TypeScript/JavaScript |
| capabilities | LLM/app framework, Infra/Ops, Security tooling, Frontend stack |


## Structure Summary

| key | value |
| --- | --- |
| files | 306 |
| manifests | 8 |
| docs | 13 |
| tests | 130 |
| ci/ops | 4 |
| spec artifacts | 2 |
| agent instruction files | 2 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | MediaWiki MCP Server | MediaWiki MCP Server / Features / Tools / Resources / Environment variables / Configuration / Authentication / Installation / Deployment / Security | MediaWiki MCP Server ! NPM Version https //img.shields.io/npm/v/%40professional wiki%2Fmediawiki mcp server?color=red https //www.npmjs.com/package/@professional wiki/mediawiki mcp server ! MIT licensed https //img.shields.io/npm/l/%40professional wiki%2Fmediawiki mcp server ./LICENSE An MCP Model Context Protocol server that enables Large Language Model LLM clients to interact with any MediaWiki wiki. Features Tools Every tool that operates on a wiki accepts an optional wiki argument naming the wiki to act on the wiki management and OAuth tools do not — pass a wiki key e.g. en.wikipedia.org or the full mcp //wikis/{wikiKey} URI. Omit it to use the configured default wiki see Configuration c |


## Key Files

### Manifests

- AGENTS.md
- README.md
- CLAUDE.md
- Dockerfile
- Makefile
- package.json
- tsconfig.json
- tsconfig.lint.json


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- CLAUDE.md


### Agent Instruction Files

- AGENTS.md
- CLAUDE.md


## Top Directories

| dir | count |
| --- | --- |
| src | 130 |
| tests | 130 |
| scripts | 8 |
| .github | 6 |
| docs | 6 |
| .dockerignore | 1 |
| .gitignore | 1 |
| .mcpbignore | 1 |
| .oxfmtrc.json | 1 |
| .oxlintrc.json | 1 |
| AGENTS.md | 1 |
| CHANGELOG.md | 1 |
| CLAUDE.md | 1 |
| config.example.json | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .ts | 261 |
| .json | 13 |
| .md | 13 |
| .cjs | 8 |
| [no-ext] | 6 |
| .yml | 5 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
