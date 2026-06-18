# markus-global/markus

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/markus-global/markus |
| local path | sources/markus-global__markus |
| HEAD | afffbcb |
| stars/forks | 161 / 4 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-06-17T15:27:28Z |
| trendScore / priorityScore | 138 / 405 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | templates/openclaw-markus-skill/AGENTS.md, README.md, packages/gui/README.md |
| Security / supply chain | 127 | docs/API.md, docs/ARCHITECTURE.md, docs/GUIDE.md |
| Developer tools / DX | 121 | packages/cli/README.md, templates/openclaw-markus-skill/AGENTS.md, README.md |
| Cloud native / infrastructure | 120 | templates/openclaw-markus-skill/AGENTS.md, README.md, packages/gui/README.md |
| Database / data infrastructure | 68 | templates/openclaw-markus-skill/AGENTS.md, README.md, docs/MEMORY-SYSTEM.md |
| RAG / retrieval / knowledge | 57 | docs/MEMORY-SYSTEM.md, docs/PROMPT-ENGINEERING.md, docs/API.md |
| Coding agent / software automation | 55 | README.md, docs/ARCHITECTURE.md, packages/core/test/llm-auth-profiles.test.ts |
| Frontend / app framework | 53 | README.md, packages/web-ui/package.json, packages/web-ui/tsconfig.json |
| MCP / agent interoperability | 41 | README.md, docs/MEMORY-SYSTEM.md, docs/PROMPT-ENGINEERING.md |
| Local LLM / inference | 40 | README.md, docs/PROMPT-ENGINEERING.md, packages/cli/test/commands-init.test.ts |
| Data / ML platform | 33 | README.md, docs/PROMPT-ENGINEERING.md, docs/ARCHITECTURE.md |
| Observability / evaluation | 14 | docs/PROMPT-ENGINEERING.md, docs/ARCHITECTURE.md, docs/COGNITIVE-ARCHITECTURE.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling |
| stacks | Node/TypeScript/JavaScript, Swift |
| capabilities | LLM/app framework, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 724 |
| manifests | 34 |
| docs | 96 |
| tests | 202 |
| ci/ops | 9 |
| spec artifacts | 3 |
| agent instruction files | 1 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Install | What is Markus? / Quick Start / Install / or: npm install -g @markus-global/cli / Launch / How It Works / 1. Describe what you need / 2. Agents execute in parallel / 3. Review and deliver / Key Features | <p align="center" <img src="logo.png" width="200" alt="Markus Logo" / </p <h1 align="center" Markus</h1 <p align="center" <strong Build AI teams that actually deliver.</strong </p <p align="center" The open source AI workforce platform. Developers, researchers, writers, analysts &mdash;<br an AI team that runs around the clock at a fraction of the cost. </p <p align="center" <a href="https //github.com/markus global/markus/actions/workflows/ci.yml" <img src="https //img.shields.io/github/actions/workflow/status/markus global/markus/ci.yml?branch=main&label=CI" alt="CI Status" </a <a href="https //github.com/markus global/markus/releases" <img src="https //img.shields.io/github/v/release/mark |


## Key Files

### Manifests

- packages/cli/README.md
- templates/openclaw-markus-skill/AGENTS.md
- README.md
- packages/gui/README.md
- packages/cli/package.json
- packages/cli/tsconfig.json
- packages/storage/package.json
- packages/storage/tsconfig.json
- deploy/docker-compose.yml
- Dockerfile
- package.json
- tsconfig.json
- packages/a2a/package.json
- packages/a2a/tsconfig.json
- packages/chrome-extension/package.json
- packages/chrome-extension/tsconfig.json
- packages/comms/package.json
- packages/comms/tsconfig.json
- packages/core/package.json
- packages/core/tsconfig.json


### Spec / Docs / Prompt Artifacts

- templates/openclaw-markus-skill/AGENTS.md
- docs/ARCHITECTURE.md
- packages/gui/ARCHITECTURE.md


### Agent Instruction Files

- templates/openclaw-markus-skill/AGENTS.md


## Top Directories

| dir | count |
| --- | --- |
| packages | 574 |
| templates | 102 |
| scripts | 11 |
| docs | 10 |
| deploy | 6 |
| .github | 2 |
| .gitignore | 1 |
| CONTRIBUTING.md | 1 |
| Dockerfile | 1 |
| eslint.config.js | 1 |
| examples | 1 |
| LICENSE | 1 |
| LICENSE-COMMERCIAL.md | 1 |
| markus.json.example | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .ts | 452 |
| .md | 96 |
| .json | 85 |
| .tsx | 54 |
| .yaml | 7 |
| .sh | 6 |
| .mjs | 4 |
| .yml | 4 |
| [no-ext] | 4 |
| .js | 3 |
| .example | 2 |
| .html | 2 |
| .ps1 | 2 |
| .css | 1 |
| .json5 | 1 |
| .swift | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
