# dappros/ethora

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/dappros/ethora |
| local path | sources/dappros__ethora |
| HEAD | 2823ba8 |
| stars/forks | 537 / 110 |
| language | JavaScript |
| license |  |
| pushedAt | 2026-06-17T20:20:00Z |
| trendScore / priorityScore | 186 / 419 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Developer tools / DX | 273 | features/README.md, README.md, features/scripts/package.json |
| Frontend / app framework | 132 | api/README.md, features/README.md, README.md |
| Security / supply chain | 47 | features/README.md, README.md, SECURITY.md |
| RAG / retrieval / knowledge | 19 | features/README.md, README.md, features/features.yaml |
| Cloud native / infrastructure | 10 | README.md, .github/workflows/pushClientWebToDockerHub.yml, QA_SCENARIOS.md |
| MCP / agent interoperability | 8 | README.md |
| AI agent / orchestration | 7 | api/README.md, README.md, QA_SCENARIOS.md |
| Coding agent / software automation | 7 | CONTRIBUTING.md, QA_SCENARIOS.md |
| Database / data infrastructure | 5 | README.md, api/chats.md, api/swagger.js |
| Data / ML platform | 3 | README.md, QA_SCENARIOS.md |
| Observability / evaluation | 1 | RELEASE-NOTES.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, mcp, observability, rag, sdk-api, security, securityTooling |
| stacks | Node/TypeScript/JavaScript |
| capabilities | LLM/app framework, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 29 |
| manifests | 4 |
| docs | 14 |
| tests | 0 |
| ci/ops | 3 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Ethora — SDK Monorepo | Ethora — SDK Monorepo / Ecosystem / Feature coverage across SDKs / Hosted services / Getting Started / Clone with all submodules / Automatic submodule bumps / Set up credentials (recommended) / Quick paths / See sdk-reactjs/README.md for embedding instructions | Ethora — SDK Monorepo ! GitHub stars https //img.shields.io/github/stars/dappros/ethora ! GitHub forks https //img.shields.io/github/forks/dappros/ethora ! GitHub license https //img.shields.io/github/license/dappros/ethora Chat, AI and messaging SDK platform. Add real time messaging, AI bots, and backend services to your app in minutes. This repository serves as the SDK monorepo — a single place to discover, clone, and navigate all Ethora SDKs, tools, and sample apps. Each component lives in its own focused repository, linked here as git submodules. Ecosystem Folder Repository Description Status sdk reactjs/ sdk reactjs/ ethora chat component https //github.com/dappros/ethora chat component |


## Key Files

### Manifests

- api/README.md
- features/README.md
- README.md
- features/scripts/package.json


### Spec / Docs / Prompt Artifacts

_none_


### Agent Instruction Files

_none_


## Top Directories

| dir | count |
| --- | --- |
| api | 7 |
| features | 6 |
| .github | 5 |
| .gitignore | 1 |
| .gitmodules | 1 |
| CODE_OF_CONDUCT.md | 1 |
| CONTRIBUTING.md | 1 |
| doap.xml | 1 |
| LICENSE | 1 |
| PULL_REQUEST_TEMPLATE.md | 1 |
| QA_SCENARIOS.md | 1 |
| README.md | 1 |
| RELEASE-NOTES.md | 1 |
| SECURITY.md | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .md | 14 |
| .js | 4 |
| [no-ext] | 4 |
| .yml | 3 |
| .json | 1 |
| .mjs | 1 |
| .xml | 1 |
| .yaml | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
