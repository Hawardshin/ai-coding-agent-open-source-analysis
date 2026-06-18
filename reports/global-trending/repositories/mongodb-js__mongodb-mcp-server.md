# mongodb-js/mongodb-mcp-server

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/mongodb-js/mongodb-mcp-server |
| local path | sources/mongodb-js__mongodb-mcp-server |
| HEAD | 4ad6ce3 |
| stars/forks | 1055 / 257 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-06-17T23:22:58Z |
| trendScore / priorityScore | 144 / 412 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| MCP / agent interoperability | 500 | packages/mongodb-mcp-remote/README.md, README.md, tests/browser/README.md |
| Database / data infrastructure | 133 | README.md, MCP_SERVER_LIBRARY.md, tests/accuracy/aggregate.autoEmbeddings.test.ts |
| Developer tools / DX | 119 | README.md, deploy/aws/README.md, deploy/azure/README.md |
| Cloud native / infrastructure | 109 | README.md, deploy/aws/README.md, deploy/azure/README.md |
| Security / supply chain | 107 | packages/mongodb-mcp-remote/README.md, README.md, deploy/azure/README.md |
| AI agent / orchestration | 60 | README.md, .github/copilot-instructions.md, tests/accuracy/sdk/accuracyResultStorage/resultStorage.ts |
| Data / ML platform | 60 | README.md, scripts/createMcpb.ts, tests/accuracy/aggregate.autoEmbeddings.test.ts |
| RAG / retrieval / knowledge | 44 | README.md, MCP_SERVER_LIBRARY.md, tests/accuracy/aggregate.autoEmbeddings.test.ts |
| Coding agent / software automation | 25 | README.md, .github/agents/agentic-workflows.agent.md, src/setup/setupMcpServer.ts |
| Frontend / app framework | 21 | tests/browser/polyfills/README.md, package.json, tests/browser/package.json |
| Observability / evaluation | 20 | README.md, deploy/aws/README.md, tests/integration/tools/mongodb/mongot-community-setup/docker-compose.yml |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, frontend, frontendStack, infra, infraOps, llmFramework, mcp, observability, rag, sdk-api, security, securityTooling |
| stacks | Node/TypeScript/JavaScript |
| capabilities | LLM/app framework, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 503 |
| manifests | 24 |
| docs | 17 |
| tests | 233 |
| ci/ops | 22 |
| spec artifacts | 1 |
| agent instruction files | 1 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | MongoDB MCP Server | MongoDB MCP Server / 📚 Table of Contents / Prerequisites / Setup / Quick Start / Set your credentials as environment variables first / Then start the server / Set your credentials as environment variables first / Then start the docker container / Set your credentials as environment variables first | ! Install in VS Code https //img.shields.io/badge/VS Code Install Server 0098FF?logo=data image/svg%2bxml;base64,PHN2ZyBmaWxsPSIjRkZGRkZGIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciICB2aWV3Qm94PSIwIDAgNDggNDgiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiPjxwYXRoIGQ9Ik00NC45OTkgMTAuODd2MjYuMjFjMCAxLjAzLS41OSAxLjk3LTEuNTEgMi40Mi0yLjY4IDEuMjktOCAzLjg1LTguMzUgNC4wMS0uMTMuMDctLjM4LjItLjY3LjMxLjM1LS42LjUzLTEuMy41My0yLjAyVjYuMmMwLS43NS0uMi0xLjQ1LS41Ni0yLjA2LjA5LjA0LjE3LjA4LjI0LjExLjIuMSA1Ljk4IDIuODYgOC44IDQuMkM0NC40MDkgOC45IDQ0Ljk5OSA5Ljg0IDQ0Ljk5OSAxMC44N3pNNy40OTkgMjYuMDNjMS42IDEuNDYgMy40MyAzLjEzIDUuMzQgNC44NmwtNC42IDMuNWMtLjc3LjU3LTEuNzguNS0yLjU2LS4wNS0uNS0uMzYtMS44OS0xLjY1LTEuODktMS42NS0xLjAxLS44MS0 |


## Key Files

### Manifests

- packages/mongodb-mcp-remote/README.md
- README.md
- tests/browser/polyfills/README.md
- tests/browser/README.md
- deploy/aws/README.md
- deploy/azure/README.md
- scripts/generate/README.md
- packages/mongodb-mcp-remote/package.json
- packages/mongodb-mcp-remote/tsconfig.json
- Dockerfile
- package.json
- tests/browser/package.json
- tests/browser/tsconfig.json
- tests/integration/tools/mongodb/mongot-community-setup/docker-compose.yml
- tsconfig.json
- deploy/aws/Dockerfile
- packages/metrics/package.json
- packages/metrics/tsconfig.json
- packages/types/package.json
- packages/types/tsconfig.json


### Spec / Docs / Prompt Artifacts

- .github/copilot-instructions.md


### Agent Instruction Files

- .github/copilot-instructions.md


## Top Directories

| dir | count |
| --- | --- |
| tests | 228 |
| src | 152 |
| packages | 30 |
| .github | 28 |
| scripts | 19 |
| api-extractor | 7 |
| deploy | 6 |
| .vscode | 3 |
| eslint-rules | 2 |
| packaging | 2 |
| .dockerignore | 1 |
| .gitattributes | 1 |
| .gitignore | 1 |
| .husky | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .ts | 395 |
| .json | 35 |
| .yml | 23 |
| .md | 17 |
| [no-ext] | 11 |
| .js | 4 |
| .sh | 4 |
| .tsx | 3 |
| .conf | 2 |
| .html | 2 |
| .yaml | 2 |
| .bicep | 1 |
| .css | 1 |
| .key | 1 |
| .mjs | 1 |
| .pem | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
