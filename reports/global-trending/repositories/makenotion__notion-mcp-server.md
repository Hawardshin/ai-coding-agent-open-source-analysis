# makenotion/notion-mcp-server

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/makenotion/notion-mcp-server |
| local path | sources/makenotion__notion-mcp-server |
| HEAD | df04d3f |
| stars/forks | 4432 / 580 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-06-17T22:14:11Z |
| trendScore / priorityScore | 157 / 391 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.
- frontend/DX 신호가 있어 실제 사용자 인터페이스와 개발자 경험을 확인할 가치가 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| MCP / agent interoperability | 179 | src/openapi-mcp-server/README.md, README.md, CLAUDE.md |
| Cloud native / infrastructure | 97 | src/openapi-mcp-server/README.md, README.md, CLAUDE.md |
| Security / supply chain | 44 | README.md, src/openapi-mcp-server/mcp/__tests__/token.test.ts, .github/workflows/publish.yml |
| Database / data infrastructure | 31 | README.md, CLAUDE.md, src/openapi-mcp-server/mcp/proxy.ts |
| Developer tools / DX | 29 | README.md, CLAUDE.md, package.json |
| Coding agent / software automation | 14 | README.md, CLAUDE.md, src/openapi-mcp-server/mcp/proxy.ts |
| AI agent / orchestration | 4 | README.md, src/openapi-mcp-server/client/http-client.ts |
| Data / ML platform | 1 | src/openapi-mcp-server/openapi/__tests__/parser-multipart.test.ts |
| Frontend / app framework | 1 | tsconfig.json |
| Observability / evaluation | 1 | src/openapi-mcp-server/openapi/parser.ts |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, devtools, frontend, frontendStack, infra, infraOps, mcp, observability, sdk-api, security, securityTooling |
| stacks | Node/TypeScript/JavaScript |
| capabilities | Infra/Ops, Security tooling, Frontend stack |


## Structure Summary

| key | value |
| --- | --- |
| files | 47 |
| manifests | 7 |
| docs | 5 |
| tests | 14 |
| ci/ops | 5 |
| spec artifacts | 1 |
| agent instruction files | 1 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Notion MCP Server | Notion MCP Server / ⚠️ Version 2.0.0 breaking changes / What changed / Do I need to migrate? / Page content as Markdown / Installation / Transport options / Run with default stdio transport / Or explicitly specify stdio / Run with Streamable HTTP transport on port 3000 (default) | Notion MCP Server !NOTE We’ve introduced Notion MCP , a remote MCP server with the following improvements Easy installation via standard OAuth. No need to fiddle with JSON or API tokens anymore. Powerful tools tailored to AI agents, including editing pages in Markdown. These tools are designed with optimized token consumption in mind. Learn more and get started at Notion MCP documentation https //developers.notion.com/docs/mcp . We are prioritizing, and only providing active support for, Notion MCP remote . As a result We may sunset this local MCP server repository in the future. Issues and pull requests here are not actively monitored. Please do not file issues relating to the remote MCP he |


## Key Files

### Manifests

- src/openapi-mcp-server/README.md
- README.md
- CLAUDE.md
- docker-compose.yml
- Dockerfile
- package.json
- tsconfig.json


### Spec / Docs / Prompt Artifacts

- CLAUDE.md


### Agent Instruction Files

- CLAUDE.md


## Top Directories

| dir | count |
| --- | --- |
| src | 26 |
| scripts | 5 |
| .github | 4 |
| .dockerignore | 1 |
| .gitignore | 1 |
| CLAUDE.md | 1 |
| docker-compose.yml | 1 |
| Dockerfile | 1 |
| LICENSE | 1 |
| package-lock.json | 1 |
| package.json | 1 |
| README.md | 1 |
| RELEASING.md | 1 |
| tsconfig.json | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .ts | 27 |
| .md | 5 |
| [no-ext] | 5 |
| .json | 4 |
| .yml | 4 |
| .js | 1 |
| .snap | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
