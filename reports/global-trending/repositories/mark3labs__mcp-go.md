# mark3labs/mcp-go

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/mark3labs/mcp-go |
| local path | sources/mark3labs__mcp-go |
| HEAD | 43c2ca0 |
| stars/forks | 8809 / 844 |
| language | Go |
| license |  |
| pushedAt | 2026-06-16T13:04:20Z |
| trendScore / priorityScore | 183 / 474 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| MCP / agent interoperability | 500 | examples/oauth_client/README.md, examples/sampling_client/README.md, examples/sampling_http_client/README.md |
| Security / supply chain | 245 | examples/oauth_client/README.md, examples/sampling_http_client/README.md, examples/sampling_http_server/README.md |
| Observability / evaluation | 57 | examples/sampling_http_server/README.md, otel/example/README.md, otel/README.md |
| Coding agent / software automation | 45 | .kit/prompts/code-audit.md, www/docs/pages/clients/operations.mdx, mcp/types_test.go |
| Developer tools / DX | 37 | examples/sampling_http_server/README.md, otel/README.md, README.md |
| AI agent / orchestration | 23 | README.md, .kit/prompts/code-audit.md, .kit/prompts/review-pr.md |
| Data / ML platform | 13 | www/docs/pages/clients/operations.mdx, www/docs/pages/servers/prompts.mdx, client/transport/oauth_test.go |
| RAG / retrieval / knowledge | 10 | README.md, client/client_edge_cases_test.go, mcp/types_test.go |
| Frontend / app framework | 8 | www/package.json, www/tsconfig.json, client/elicitation_test.go |
| Database / data infrastructure | 6 | README.md, www/docs/pages/clients/basics.mdx, client/transport/oauth_test.go |
| Cloud native / infrastructure | 1 | mcp/schema_cache.go |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Go |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 262 |
| manifests | 19 |
| docs | 56 |
| tests | 97 |
| ci/ops | 4 |
| spec artifacts | 12 |
| agent instruction files | 11 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md |  | Key features: / Table of Contents / Installation / Quickstart / What is MCP? / Core Concepts / Server / Resources / Tools / Prompts | <! omit in toc <div align="center" <img src="./logo.png" alt="MCP Go Logo" ! Build https //github.com/mark3labs/mcp go/actions/workflows/ci.yml/badge.svg?branch=main https //github.com/mark3labs/mcp go/actions/workflows/ci.yml ! Go Report Card https //goreportcard.com/badge/github.com/mark3labs/mcp go?cache https //goreportcard.com/report/github.com/mark3labs/mcp go ! GoDoc https //pkg.go.dev/badge/github.com/mark3labs/mcp go.svg https //pkg.go.dev/github.com/mark3labs/mcp go ! AgentRank https //agentrank ai.com/api/badge/tool/mark3labs mcp go https //agentrank ai.com/tool/mark3labs mcp go/ <strong A Go implementation of the Model Context Protocol MCP , enabling seamless integration between |


## Key Files

### Manifests

- examples/oauth_client/README.md
- examples/sampling_client/README.md
- examples/sampling_http_client/README.md
- examples/inprocess_sampling/README.md
- examples/sampling_http_server/README.md
- examples/sampling_server/README.md
- examples/structured_input_and_output/README.md
- otel/example/README.md
- AGENTS.md
- otel/README.md
- README.md
- www/README.md
- server/internal/gen/README.md
- go.mod
- otel/go.mod
- www/package.json
- www/tsconfig.json
- go.sum
- otel/go.sum


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- .kit/prompts/code-audit.md
- .kit/prompts/commit-push.md
- .kit/prompts/create-pr.md
- .kit/prompts/feature-request.md
- .kit/prompts/file-issue.md
- .kit/prompts/fix-issue.md
- .kit/prompts/new-prompt.md
- .kit/prompts/release-tagger.md
- .kit/prompts/review-pr.md
- .kit/prompts/update-docs.md
- www/docs/pages/servers/tasks.mdx


### Agent Instruction Files

- AGENTS.md
- .kit/prompts/code-audit.md
- .kit/prompts/commit-push.md
- .kit/prompts/create-pr.md
- .kit/prompts/feature-request.md
- .kit/prompts/file-issue.md
- .kit/prompts/fix-issue.md
- .kit/prompts/new-prompt.md
- .kit/prompts/release-tagger.md
- .kit/prompts/review-pr.md
- .kit/prompts/update-docs.md


## Top Directories

| dir | count |
| --- | --- |
| server | 68 |
| client | 54 |
| mcp | 32 |
| www | 31 |
| examples | 28 |
| otel | 13 |
| .kit | 10 |
| .github | 9 |
| mcptest | 3 |
| tracing | 2 |
| .gitignore | 1 |
| .golangci.yml | 1 |
| AGENTS.md | 1 |
| CODE_OF_CONDUCT.md | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .go | 188 |
| .md | 30 |
| .mdx | 25 |
| .yml | 6 |
| [no-ext] | 3 |
| .json | 2 |
| .mod | 2 |
| .sum | 2 |
| .tmpl | 2 |
| .css | 1 |
| .ts | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
