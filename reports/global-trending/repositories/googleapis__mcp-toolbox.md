# googleapis/mcp-toolbox

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/googleapis/mcp-toolbox |
| local path | sources/googleapis__mcp-toolbox |
| HEAD | 2dada83 |
| stars/forks | 15643 / 1604 |
| language | Go |
| license |  |
| pushedAt | 2026-06-17T23:58:10Z |
| trendScore / priorityScore | 153 / 477 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Database / data infrastructure | 500 | README.md, npm/server/README.md, GEMINI.md |
| MCP / agent interoperability | 500 | pypi/README.md, README.md, npm/server/README.md |
| Developer tools / DX | 311 | README.md, npm/server-darwin-arm64/README.md, npm/server-darwin-x64/README.md |
| AI agent / orchestration | 258 | README.md, GEMINI.md, docs/en/documentation/configuration/pre-post-processing/go/adk/go.mod |
| Coding agent / software automation | 195 | README.md, GEMINI.md, docs/en/documentation/connect-to/ides/cloud_sql_mssql_admin_mcp.md |
| Observability / evaluation | 76 | README.md, docs/en/documentation/configuration/pre-post-processing/go/adk/go.mod, docs/en/documentation/getting-started/quickstart/go/adkgo/go.mod |
| RAG / retrieval / knowledge | 62 | README.md, docs/en/documentation/configuration/embedding-models/gemini.md, docs/en/integrations/alloydb/samples/mcp_quickstart.md |
| Cloud native / infrastructure | 57 | README.md, GEMINI.md, docs/en/documentation/configuration/pre-post-processing/go/adk/go.mod |
| Security / supply chain | 52 | README.md, Dockerfile, docs/en/documentation/configuration/pre-post-processing/go/agent_test.go |
| Data / ML platform | 10 | docs/en/integrations/bigquery/samples/mcp_quickstart/_index.md, docs/en/integrations/cloud-sql-pg/tools/vector-assist-define-spec.md, docs/en/integrations/neo4j/samples/mcp_quickstart.md |
| Frontend / app framework | 1 | docs/en/reference/cli.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python, Go |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 1698 |
| manifests | 40 |
| docs | 665 |
| tests | 454 |
| ci/ops | 23 |
| spec artifacts | 21 |
| agent instruction files | 15 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | MCP Toolbox for Databases | MCP Toolbox for Databases / Table of Contents / Why MCP Toolbox? / Quick Start: Prebuilt Tools / Quick Start: Custom Tools / Sources / Tools / Toolsets / Prompts / Install & Run the Toolbox server | <div align="center" ! logo ./logo.png MCP Toolbox for Databases <a href="https //trendshift.io/repositories/25495" target=" blank" <img src="https //trendshift.io/api/badge/repositories/25495" alt="googleapis%2Fmcp toolbox Trendshift" style="width 250px; height 55px;" width="250" height="55"/ </a ! Go Report Card https //goreportcard.com/badge/github.com/googleapis/mcp toolbox https //goreportcard.com/report/github.com/googleapis/mcp toolbox ! License Apache 2.0 https //img.shields.io/badge/License Apache%202.0 blue.svg https //opensource.org/licenses/Apache 2.0 ! Docs https //img.shields.io/badge/Docs MCP Toolbox blue https //mcp toolbox.dev/ ! Discord https //img.shields.io/badge/Discord % |


## Key Files

### Manifests

- pypi/README.md
- README.md
- npm/server-darwin-arm64/README.md
- npm/server-darwin-x64/README.md
- npm/server-linux-x64/README.md
- npm/server-win32-arm64/README.md
- npm/server-win32-x64/README.md
- npm/server/README.md
- GEMINI.md
- docs/en/documentation/configuration/pre-post-processing/go/adk/go.mod
- docs/en/documentation/configuration/pre-post-processing/js/adk/package.json
- docs/en/documentation/configuration/pre-post-processing/js/langchain/package.json
- docs/en/documentation/configuration/pre-post-processing/python/adk/requirements.txt
- docs/en/documentation/configuration/pre-post-processing/python/langchain/requirements.txt
- docs/en/documentation/getting-started/quickstart/go/adkgo/go.mod
- docs/en/documentation/getting-started/quickstart/go/genAI/go.mod
- docs/en/documentation/getting-started/quickstart/go/genkit/go.mod
- docs/en/documentation/getting-started/quickstart/go/langchain/go.mod
- docs/en/documentation/getting-started/quickstart/go/openAI/go.mod
- docs/en/documentation/getting-started/quickstart/js/adk/package.json


### Spec / Docs / Prompt Artifacts

- GEMINI.md
- docs/en/documentation/configuration/embedding-models/gemini.md
- docs/en/documentation/configuration/pre-post-processing/python/adk/requirements.txt
- docs/en/documentation/configuration/pre-post-processing/python/langchain/requirements.txt
- docs/en/documentation/getting-started/quickstart/python/adk/requirements.txt
- docs/en/documentation/getting-started/quickstart/python/core/requirements.txt
- docs/en/documentation/getting-started/quickstart/python/langchain/requirements.txt
- docs/en/documentation/getting-started/quickstart/python/llamaindex/requirements.txt
- internal/prompts/arguments_test.go
- internal/prompts/custom/custom_test.go
- internal/prompts/messages_test.go
- internal/prompts/prompts_test.go
- internal/prompts/promptsets_test.go
- tests/prompts/custom/prompts_integration_test.go
- docs/en/documentation/configuration/prompts/_index.md
- docs/en/documentation/configuration/prompts/custom/_index.md
- internal/prompts/arguments.go
- internal/prompts/custom/custom.go
- internal/prompts/messages.go
- internal/prompts/prompts.go


### Agent Instruction Files

- GEMINI.md
- docs/en/documentation/configuration/embedding-models/gemini.md
- internal/prompts/arguments_test.go
- internal/prompts/custom/custom_test.go
- internal/prompts/messages_test.go
- internal/prompts/prompts_test.go
- internal/prompts/promptsets_test.go
- tests/prompts/custom/prompts_integration_test.go
- docs/en/documentation/configuration/prompts/_index.md
- docs/en/documentation/configuration/prompts/custom/_index.md
- internal/prompts/arguments.go
- internal/prompts/custom/custom.go
- internal/prompts/messages.go
- internal/prompts/prompts.go
- internal/prompts/promptsets.go


## Top Directories

| dir | count |
| --- | --- |
| internal | 788 |
| docs | 644 |
| tests | 84 |
| .hugo | 47 |
| .github | 35 |
| npm | 29 |
| .ci | 23 |
| cmd | 19 |
| pypi | 8 |
| .gemini | 1 |
| .gitignore | 1 |
| .gitmodules | 1 |
| .golangci.yaml | 1 |
| .lycheeignore | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .go | 845 |
| .md | 599 |
| .yaml | 71 |
| .json | 29 |
| .js | 27 |
| .html | 23 |
| .py | 16 |
| .txt | 16 |
| .yml | 16 |
| .sh | 12 |
| .scss | 9 |
| .mod | 8 |
| .sum | 8 |
| [no-ext] | 8 |
| .ipynb | 3 |
| .toml | 3 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
