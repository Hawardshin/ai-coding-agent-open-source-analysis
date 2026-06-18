# Azure-Samples/azure-ai-travel-agents

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/Azure-Samples/azure-ai-travel-agents |
| local path | sources/Azure-Samples__azure-ai-travel-agents |
| HEAD | a66e229 |
| stars/forks | 443 / 167 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-06-17T10:04:36Z |
| trendScore / priorityScore | 182 / 490 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | packages/mcp-servers/destination-recommendation/README.md, packages/mcp-servers/itinerary-planning/README.md, packages/mcp-servers/README.md |
| Cloud native / infrastructure | 500 | packages/mcp-servers/destination-recommendation/README.md, packages/mcp-servers/itinerary-planning/README.md, packages/mcp-servers/README.md |
| MCP / agent interoperability | 500 | packages/mcp-servers/destination-recommendation/README.md, packages/mcp-servers/itinerary-planning/README.md, packages/mcp-servers/README.md |
| Observability / evaluation | 236 | packages/mcp-servers/README.md, AGENTS.md, README.md |
| Developer tools / DX | 173 | packages/mcp-servers/itinerary-planning/README.md, AGENTS.md, README.md |
| Security / supply chain | 94 | AGENTS.md, .github/actions/ai-opsec-agent/readme.md, packages/mcp-servers/echo-ping/Dockerfile |
| Local LLM / inference | 45 | AGENTS.md, README.md, packages/api-langchain-js/README.md |
| Frontend / app framework | 44 | AGENTS.md, docs/package.json, .github/copilot-instructions.md |
| Data / ML platform | 20 | docs/mcp-servers.md, packages/api-llamaindex-ts/package.json, docs/advanced-setup.md |
| Coding agent / software automation | 19 | AGENTS.md, .github/workflows/ai-opsec-agent.yml, docs/development-guide.md |
| RAG / retrieval / knowledge | 18 | AGENTS.md, .github/copilot-instructions.md, docs/orchestration.md |
| Database / data infrastructure | 6 | docs/deployment-architecture.md, docs/technical-architecture.md, packages/mcp-servers/itinerary-planning/src/mcp_server.py |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python, Java/Kotlin, .NET |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 715 |
| manifests | 34 |
| docs | 42 |
| tests | 17 |
| ci/ops | 25 |
| spec artifacts | 4 |
| agent instruction files | 2 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md |  | Overview / High-Level Architecture / Features / Preview the application locally for FREE / One setup script / Cost estimation / Quick deploy the sample to Azure / Clean up / Advanced Setup / Contributing | <div align="center" <img src="./docs/ai travel agents logo.png" alt="" align="center" height="128" / <h1 Agents and MCP Orchestration <br with Langchain.js, LlamaIndex.TS,<br and Microsoft Agent Framework!</h1 ! Join Microsoft Foundry Community Discord https //img.shields.io/badge/Discord Microsoft Foundry Community Discord blue?style=flat square&logo=discord&color=5865f2&logoColor=fff https //discord.gg/NcwHpz6bRW ! Join Microsoft Foundry Developer Forum https //img.shields.io/badge/GitHub Microsoft Foundry Developer Forum blue?style=flat square&logo=github&color=000000&logoColor=fff https //aka.ms/foundry/forum ! Announcement blog post https //img.shields.io/badge/Announcement%20Blog%20pos |


## Key Files

### Manifests

- packages/mcp-servers/destination-recommendation/README.md
- packages/mcp-servers/itinerary-planning/README.md
- packages/mcp-servers/README.md
- AGENTS.md
- README.md
- packages/api-langchain-js/README.md
- packages/api-llamaindex-ts/README.md
- packages/api-maf-python/README.md
- packages/api-maf-python/src/orchestrator/tools/README.md
- packages/ui-angular/README.md
- docs/package.json
- packages/mcp-servers/customer-query/Dockerfile
- packages/mcp-servers/destination-recommendation/Dockerfile
- packages/mcp-servers/destination-recommendation/pom.xml
- packages/mcp-servers/echo-ping/Dockerfile
- packages/mcp-servers/echo-ping/package.json
- packages/mcp-servers/echo-ping/tsconfig.json
- packages/mcp-servers/itinerary-planning/Dockerfile
- packages/mcp-servers/itinerary-planning/pyproject.toml
- .devcontainer/Dockerfile


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- .github/copilot-instructions.md
- .vscode/tasks.json
- packages/ui-angular/.vscode/tasks.json


### Agent Instruction Files

- AGENTS.md
- .github/copilot-instructions.md


## Top Directories

| dir | count |
| --- | --- |
| packages | 635 |
| docs | 24 |
| .github | 22 |
| infra | 14 |
| .vscode | 3 |
| .devcontainer | 2 |
| .dockerignore | 1 |
| .gitignore | 1 |
| .repomixignore | 1 |
| adventure.config.json | 1 |
| AGENTS.md | 1 |
| azure.yaml | 1 |
| CONTRIBUTING.md | 1 |
| docker-compose.yml | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .ts | 515 |
| .md | 39 |
| .py | 35 |
| .json | 30 |
| [no-ext] | 22 |
| .yml | 18 |
| .java | 11 |
| .cs | 5 |
| .ps1 | 5 |
| .sample | 5 |
| .sh | 5 |
| .bicep | 3 |
| .css | 3 |
| .html | 3 |
| .csproj | 2 |
| .toml | 2 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
