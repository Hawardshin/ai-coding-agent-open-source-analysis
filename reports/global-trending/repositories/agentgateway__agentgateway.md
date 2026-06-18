# agentgateway/agentgateway

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/agentgateway/agentgateway |
| local path | sources/agentgateway__agentgateway |
| HEAD | 3965abc |
| stars/forks | 3339 / 546 |
| language | Rust |
| license |  |
| pushedAt | 2026-06-17T19:56:52Z |
| trendScore / priorityScore | 174 / 474 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Cloud native / infrastructure | 500 | examples/a2a/strands-agents/README.md, examples/mcp-authentication/README.md, examples/README.md |
| MCP / agent interoperability | 399 | examples/mcp-authentication/README.md, examples/README.md, examples/a2a/README.md |
| Security / supply chain | 201 | examples/ai-prompt-guard/README.md, examples/mcp-authentication/README.md, examples/README.md |
| Observability / evaluation | 177 | examples/a2a/strands-agents/README.md, examples/ratelimiting/global/README.md, examples/ratelimiting/local/README.md |
| AI agent / orchestration | 89 | examples/a2a/strands-agents/README.md, examples/README.md, examples/a2a/README.md |
| Frontend / app framework | 70 | ui/package.json, controller/api/tests/agentgateway_policy_test.go, controller/api/tests/testdata/agentgateway_policy_invalid.yaml |
| Developer tools / DX | 35 | examples/a2a/strands-agents/README.md, examples/a2a/README.md, examples/delegation/README.md |
| Database / data infrastructure | 9 | examples/ratelimiting/global/README.md, go.mod |
| RAG / retrieval / knowledge | 2 | controller/api/README.md |
| Coding agent / software automation | 1 | controller/Makefile |
| Data / ML platform | 1 | controller/api/README.md |
| Local LLM / inference | 1 | controller/api/tests/testdata/agentgateway_backend_valid.yaml |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python, Rust, Go |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 1776 |
| manifests | 40 |
| docs | 57 |
| tests | 567 |
| ci/ops | 64 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md |  | Intro to Agentgateway Video / Key Features / Getting Started / Documentation / Sponsors / Contributing / Community Meetings / Roadmap / Contributors / Star History | <div align="center" <picture <source media=" prefers color scheme dark " srcset="https //raw.githubusercontent.com/agentgateway/agentgateway/refs/heads/main/img/banner light.svg" alt="agentgateway" width="400" <source media=" prefers color scheme light " srcset="https //raw.githubusercontent.com/agentgateway/agentgateway/refs/heads/main/img/banner dark.svg" alt="agentgateway" width="400" <img alt="agentgateway" src="https //raw.githubusercontent.com/agentgateway/agentgateway/refs/heads/main/img/banner light.svg" </picture <div <a href="https //opensource.org/licenses/Apache 2.0" <img src="https //img.shields.io/badge/License Apache2.0 brightgreen.svg?style=flat" alt="License Apache 2.0" </a |


## Key Files

### Manifests

- examples/a2a/strands-agents/README.md
- examples/ai-prompt-guard/README.md
- examples/mcp-authentication/README.md
- examples/prompt-enrichment/README.md
- examples/README.md
- examples/a2a/README.md
- examples/authorization/README.md
- examples/basic/README.md
- examples/delegation/README.md
- examples/http/README.md
- examples/multiplex/README.md
- examples/oauth2-proxy/README.md
- examples/oidc/README.md
- examples/openapi/README.md
- examples/ratelimiting/global/README.md
- examples/ratelimiting/local/README.md
- examples/standalone-epp/README.md
- examples/tailscale-auth/README.md
- examples/telemetry/README.md
- examples/telemetry/tracing/README.md


### Spec / Docs / Prompt Artifacts

_none_


### Agent Instruction Files

_none_


## Top Directories

| dir | count |
| --- | --- |
| controller | 858 |
| crates | 645 |
| ui | 102 |
| examples | 68 |
| tools | 35 |
| .github | 9 |
| api | 7 |
| manifests | 7 |
| schema | 7 |
| img | 5 |
| architecture | 3 |
| design | 3 |
| .cargo | 1 |
| .devcontainer.json | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .yaml | 508 |
| .go | 359 |
| .rs | 358 |
| .snap | 161 |
| .json | 74 |
| .tsx | 73 |
| .md | 57 |
| [no-ext] | 49 |
| .toml | 18 |
| .ts | 18 |
| .golden | 15 |
| .proto | 15 |
| .sh | 15 |
| .pem | 7 |
| .yml | 7 |
| .bin | 6 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
