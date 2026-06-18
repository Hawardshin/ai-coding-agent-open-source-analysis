# modelcontextprotocol/servers

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/modelcontextprotocol/servers |
| local path | sources/modelcontextprotocol__servers |
| HEAD | 275175c |
| stars/forks | 87393 / 11022 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-06-17T01:40:52Z |
| trendScore / priorityScore | 211 / 515 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| MCP / agent interoperability | 500 | src/memory/README.md, src/everything/AGENTS.md, README.md |
| Developer tools / DX | 149 | src/everything/AGENTS.md, README.md, src/sequentialthinking/README.md |
| Cloud native / infrastructure | 90 | src/memory/README.md, src/everything/README.md, src/fetch/README.md |
| Security / supply chain | 52 | README.md, src/fetch/README.md, CLAUDE.md |
| AI agent / orchestration | 35 | README.md, src/fetch/README.md, src/git/README.md |
| RAG / retrieval / knowledge | 27 | src/memory/README.md, README.md, CLAUDE.md |
| Database / data infrastructure | 14 | README.md, src/sequentialthinking/README.md |
| Coding agent / software automation | 8 | src/sequentialthinking/README.md, CLAUDE.md, .github/workflows/claude.yml |
| Observability / evaluation | 7 | README.md, ADDITIONAL.md |
| Frontend / app framework | 4 | ADDITIONAL.md |
| Data / ML platform | 1 | CLAUDE.md |
| Local LLM / inference | 1 | ADDITIONAL.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, frontend, frontendStack, infra, infraOps, llmFramework, local-llm, mcp, observability, rag, security, securityTooling |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 139 |
| manifests | 30 |
| docs | 22 |
| tests | 19 |
| ci/ops | 12 |
| spec artifacts | 9 |
| agent instruction files | 8 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Model Context Protocol servers | Model Context Protocol servers / 🌟 Reference Servers / Archived / 🚀 Getting Started / Using MCP Servers in this Repository / With uvx / With pip / Using an MCP Client / 🛠️ Creating Your Own Server / 📚 Learn More | Model Context Protocol servers This repository is a collection of reference implementations for the Model Context Protocol https //modelcontextprotocol.io/ MCP , as well as references to community built servers and additional resources. !IMPORTANT If you are looking for a list of MCP servers, you can browse published servers on the MCP Registry https //registry.modelcontextprotocol.io/ . The repository served by this README is dedicated to housing just the small number of reference servers maintained by the MCP steering group. !WARNING The servers in this repository are intended as reference implementations to demonstrate MCP features and SDK usage. They are meant to serve as educational exa |


## Key Files

### Manifests

- src/memory/README.md
- src/everything/AGENTS.md
- README.md
- src/everything/README.md
- src/fetch/README.md
- src/filesystem/README.md
- src/git/README.md
- src/sequentialthinking/README.md
- src/time/README.md
- CLAUDE.md
- src/memory/Dockerfile
- src/memory/package.json
- src/memory/tsconfig.json
- package.json
- tsconfig.json
- src/everything/Dockerfile
- src/everything/package.json
- src/everything/tsconfig.json
- src/fetch/Dockerfile
- src/fetch/pyproject.toml


### Spec / Docs / Prompt Artifacts

- src/everything/AGENTS.md
- CLAUDE.md
- src/everything/prompts/args.ts
- src/everything/prompts/completions.ts
- src/everything/prompts/index.ts
- src/everything/prompts/resource.ts
- src/everything/prompts/simple.ts
- .github/workflows/claude.yml
- src/everything/docs/architecture.md


### Agent Instruction Files

- src/everything/AGENTS.md
- CLAUDE.md
- src/everything/prompts/args.ts
- src/everything/prompts/completions.ts
- src/everything/prompts/index.ts
- src/everything/prompts/resource.ts
- src/everything/prompts/simple.ts
- .github/workflows/claude.yml


## Top Directories

| dir | count |
| --- | --- |
| src | 118 |
| .github | 6 |
| .gitattributes | 1 |
| .gitignore | 1 |
| .mcp.json | 1 |
| .npmrc | 1 |
| ADDITIONAL.md | 1 |
| CLAUDE.md | 1 |
| CODE_OF_CONDUCT.md | 1 |
| CONTRIBUTING.md | 1 |
| LICENSE | 1 |
| package-lock.json | 1 |
| package.json | 1 |
| README.md | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .ts | 64 |
| .md | 22 |
| [no-ext] | 18 |
| .py | 14 |
| .json | 12 |
| .yml | 5 |
| .toml | 3 |
| .typed | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
