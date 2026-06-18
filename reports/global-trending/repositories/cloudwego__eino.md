# cloudwego/eino

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/cloudwego/eino |
| local path | sources/cloudwego__eino |
| HEAD | e8832e2 |
| stars/forks | 11850 / 973 |
| language | Go |
| license |  |
| pushedAt | 2026-06-18T00:27:16Z |
| trendScore / priorityScore | 133 / 409 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | README.md, adk/agent_tool_test.go, adk/agentic_callback_integration_test.go |
| Security / supply chain | 94 | README.md, components/prompt/agentic_callback_extra_test.go, components/prompt/agentic_chat_template_test.go |
| Frontend / app framework | 76 | README.md, adk/agent_tool_test.go, adk/agentic_react_test.go |
| MCP / agent interoperability | 73 | adk/agentic_integration_test.go, schema/agentic_message_test.go, adk/middlewares/agentsmd/agentsmd_test.go |
| RAG / retrieval / knowledge | 57 | README.md, components/embedding/callback_extra_test.go, components/embedding/option_test.go |
| Coding agent / software automation | 10 | adk/middlewares/agentsmd/agentsmd_test.go, adk/middlewares/agentsmd/loader.go, adk/middlewares/filesystem/prompt.go |
| Local LLM / inference | 3 | README.md, components/embedding/doc.go |
| Observability / evaluation | 3 | README.md, .github/workflows/tests.yml |
| Cloud native / infrastructure | 2 | adk/filesystem/backend_inmemory.go, adk/middlewares/filesystem/prompt.go |
| Data / ML platform | 1 | components/prompt/doc.go |
| Database / data infrastructure | 1 | adk/prebuilt/deep/prompt.go |
| Developer tools / DX | 1 | adk/prebuilt/deep/prompt.go |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, devtools, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, security, securityTooling, vectorSearch |
| stacks | Go |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack |


## Structure Summary

| key | value |
| --- | --- |
| files | 364 |
| manifests | 4 |
| docs | 8 |
| tests | 136 |
| ci/ops | 3 |
| spec artifacts | 12 |
| agent instruction files | 12 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Eino | Eino / Overview / Quick Start / ChatModelAgent / DeepAgent / Composition / Key Features / Component Ecosystem / Stream Processing / Callback Aspects | Eino ! coverage https //raw.githubusercontent.com/cloudwego/eino/badges/.badges/main/coverage.svg ! Release https //img.shields.io/github/v/release/cloudwego/eino https //github.com/cloudwego/eino/releases ! WebSite https //img.shields.io/website?up message=cloudwego&url=https%3A%2F%2Fwww.cloudwego.io%2F https //www.cloudwego.io/ ! License https //img.shields.io/github/license/cloudwego/eino https //github.com/cloudwego/eino/blob/main/LICENSE ! Go Report Card https //goreportcard.com/badge/github.com/cloudwego/eino https //goreportcard.com/report/github.com/cloudwego/eino ! OpenIssue https //img.shields.io/github/issues/cloudwego/eino https //github.com/cloudwego/kitex/eino ! ClosedIssue htt |


## Key Files

### Manifests

- README.md
- go.mod
- flow/agent/multiagent/host/compose.go
- go.sum


### Spec / Docs / Prompt Artifacts

- components/prompt/agentic_callback_extra_test.go
- components/prompt/agentic_chat_template_test.go
- components/prompt/callback_extra_test.go
- components/prompt/chat_template_test.go
- components/prompt/option_test.go
- components/prompt/agentic_callback_extra.go
- components/prompt/agentic_chat_template.go
- components/prompt/callback_extra.go
- components/prompt/chat_template.go
- components/prompt/doc.go
- components/prompt/interface.go
- components/prompt/option.go


### Agent Instruction Files

- components/prompt/agentic_callback_extra_test.go
- components/prompt/agentic_chat_template_test.go
- components/prompt/callback_extra_test.go
- components/prompt/chat_template_test.go
- components/prompt/option_test.go
- components/prompt/agentic_callback_extra.go
- components/prompt/agentic_chat_template.go
- components/prompt/callback_extra.go
- components/prompt/chat_template.go
- components/prompt/doc.go
- components/prompt/interface.go
- components/prompt/option.go


## Top Directories

| dir | count |
| --- | --- |
| adk | 126 |
| components | 71 |
| compose | 56 |
| internal | 31 |
| schema | 26 |
| flow | 24 |
| .github | 8 |
| callbacks | 6 |
| scripts | 2 |
| utils | 2 |
| _typos.toml | 1 |
| .gitignore | 1 |
| .golangci.yaml | 1 |
| .licenserc.yaml | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .go | 338 |
| .md | 8 |
| .bin | 4 |
| .yml | 4 |
| .sh | 2 |
| .yaml | 2 |
| [no-ext] | 2 |
| .json | 1 |
| .mod | 1 |
| .sum | 1 |
| .toml | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
