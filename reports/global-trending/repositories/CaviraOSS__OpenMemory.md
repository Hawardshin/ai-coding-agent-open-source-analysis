# CaviraOSS/OpenMemory

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/CaviraOSS/OpenMemory |
| local path | sources/CaviraOSS__OpenMemory |
| HEAD | 9e1f764 |
| stars/forks | 4243 / 481 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-06-16T16:28:41Z |
| trendScore / priorityScore | 196 / 490 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Database / data infrastructure | 144 | packages/openmemory-js/README.md, packages/openmemory-py/README.md, README.md |
| Developer tools / DX | 126 | packages/openmemory-js/README.md, packages/openmemory-py/README.md, dashboard/README.md |
| MCP / agent interoperability | 108 | packages/openmemory-js/README.md, packages/openmemory-py/README.md, README.md |
| RAG / retrieval / knowledge | 94 | packages/openmemory-js/README.md, packages/openmemory-py/README.md, README.md |
| AI agent / orchestration | 91 | packages/openmemory-js/README.md, packages/openmemory-py/README.md, README.md |
| Security / supply chain | 89 | dashboard/README.md, README.md, apps/vscode-extension/README.md |
| Cloud native / infrastructure | 64 | dashboard/README.md, README.md, Makefile |
| Frontend / app framework | 49 | dashboard/README.md, dashboard/Dockerfile, dashboard/package.json |
| Coding agent / software automation | 29 | packages/openmemory-js/README.md, README.md, apps/vscode-extension/README.md |
| Local LLM / inference | 27 | packages/openmemory-js/README.md, packages/openmemory-py/README.md, README.md |
| Data / ML platform | 4 | apps/vscode-extension/package.json, packages/openmemory-js/src/core/vector/valkey.ts |
| Observability / evaluation | 2 | SECURITY.md, packages/openmemory-js/src/memory/hsg.ts |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 279 |
| manifests | 18 |
| docs | 26 |
| tests | 11 |
| ci/ops | 8 |
| spec artifacts | 2 |
| agent instruction files | 0 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | 🚧 This project is currently being rewritten. | 🚧 This project is currently being rewritten. / Contributers needed / OpenMemory / 1. TL;DR – Use It in 10 Seconds / 🐍 Python (local-first) / 🟦 Node / JavaScript (local-first) / 📥 Connectors / python / 2. Modes: SDKs, Server, MCP / 2.1 Python SDK | 🚧 This project is currently being rewritten. Expect breaking changes and potential bugs. Contributers needed To contribute, visit https //github.com/CaviraOSS/OpenMemory/tree/rewrite branch. If you find an issue, please open a GitHub issue with details so it can be tracked and resolved. OpenMemory Real long term memory for AI agents. Not RAG. Not a vector DB. Self hosted, Python + Node. ! VS Code Extension https //img.shields.io/badge/VS%20Code Extension 007ACC?logo=visualstudiocode https //marketplace.visualstudio.com/items?itemName=Nullure.openmemory vscode ! Discord https //img.shields.io/discord/1300368230320697404?label=Discord https //discord.gg/93M9XSuEj6 ! PyPI https //img.shields.i |


## Key Files

### Manifests

- packages/openmemory-js/README.md
- packages/openmemory-py/README.md
- dashboard/README.md
- README.md
- apps/vscode-extension/README.md
- packages/openmemory-js/Dockerfile
- packages/openmemory-js/package.json
- packages/openmemory-js/tsconfig.json
- packages/openmemory-py/pyproject.toml
- dashboard/Dockerfile
- dashboard/next.config.js
- dashboard/package.json
- dashboard/tsconfig.json
- docker-compose.yml
- Makefile
- apps/vscode-extension/package.json
- apps/vscode-extension/tsconfig.json
- dashboard/tsconfig.tsbuildinfo


### Spec / Docs / Prompt Artifacts

- .do/spec.yaml
- ARCHITECTURE.md


### Agent Instruction Files

_none_


## Top Directories

| dir | count |
| --- | --- |
| packages | 148 |
| dashboard | 33 |
| examples | 19 |
| apps | 16 |
| tools | 16 |
| .github | 11 |
| docs | 10 |
| .do | 1 |
| .dockerignore | 1 |
| .editorconfig | 1 |
| .env.example | 1 |
| .gitattributes | 1 |
| .gitignore | 1 |
| .prettierrc.js | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .ts | 94 |
| .py | 93 |
| .md | 26 |
| .json | 14 |
| .tsx | 12 |
| .yml | 10 |
| [no-ext] | 10 |
| .js | 6 |
| .example | 2 |
| .mjs | 2 |
| .ps1 | 2 |
| .yaml | 2 |
| .css | 1 |
| .snap | 1 |
| .sql | 1 |
| .toml | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
