# henomis/phero

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/henomis/phero |
| local path | sources/henomis__phero |
| HEAD | 342f10b |
| stars/forks | 60 / 6 |
| language | Go |
| license |  |
| pushedAt | 2026-06-16T15:42:00Z |
| trendScore / priorityScore | 146 / 408 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | examples/a2a/multi-agent/README.md, examples/conversational-agent/README.md, examples/evaluator-optimizer/README.md |
| RAG / retrieval / knowledge | 337 | examples/conversational-agent/README.md, examples/long-term-memory/README.md, examples/nats-memory/README.md |
| MCP / agent interoperability | 167 | examples/mcp/README.md, examples/playwright-mcp/README.md, README.md |
| Security / supply chain | 139 | examples/a2a/client/main.go, examples/a2a/multi-agent/editor/main.go, examples/a2a/multi-agent/orchestrator/main.go |
| Developer tools / DX | 135 | examples/a2a/multi-agent/README.md, examples/conversational-agent/README.md, examples/long-term-memory/README.md |
| Local LLM / inference | 76 | examples/a2a/multi-agent/README.md, examples/conversational-agent/README.md, examples/evaluator-optimizer/README.md |
| Cloud native / infrastructure | 31 | examples/long-term-memory/README.md, examples/nats-agent/multi-agent/README.md, examples/nats-agent/README.md |
| Database / data infrastructure | 27 | examples/conversational-agent/README.md, README.md, tests/e2e/docker-compose.yml |
| Observability / evaluation | 27 | examples/simple-agent/README.md, README.md, examples/evaluator-optimizer/main.go |
| Data / ML platform | 14 | examples/a2a/multi-agent/README.md, examples/nats-agent/multi-agent/README.md, README.md |
| Frontend / app framework | 2 | examples/social-simulation/personas.go, examples/social-simulation/simulation.go |
| Coding agent / software automation | 1 | mcp/doc.go |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Go |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 282 |
| manifests | 29 |
| docs | 25 |
| tests | 61 |
| ci/ops | 3 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | 🐜 Phero | 🐜 Phero / Why Phero? / Features / Core Capabilities / Requirements / Quick Start / Architecture / 🤖 Agent Layer / 💬 LLM Layer / 🧠 Knowledge Layer | ! Phero ./web/images/phero logo.png 🐜 Phero The chemical language of AI agents. Phero is a modern Go framework for building multi agent AI systems. Like ants in a colony, agents in Phero cooperate, communicate, and coordinate toward shared goals, each with specialized roles, working together through a clean, composable architecture. ! Build Status https //github.com/henomis/phero/actions/workflows/checks.yml/badge.svg https //github.com/henomis/phero/actions/workflows/checks.yml ! GoDoc https //godoc.org/github.com/henomis/phero?status.svg https //godoc.org/github.com/henomis/phero ! Go Report Card https //goreportcard.com/badge/github.com/henomis/phero https //goreportcard.com/report/githu |


## Key Files

### Manifests

- examples/a2a/multi-agent/README.md
- examples/conversational-agent/README.md
- examples/evaluator-optimizer/README.md
- examples/long-term-memory/README.md
- examples/mcp/README.md
- examples/multi-agent-workflow/README.md
- examples/nats-agent/multi-agent/README.md
- examples/nats-agent/README.md
- examples/nats-memory/README.md
- examples/playwright-mcp/README.md
- examples/prompt-chaining/README.md
- examples/rag-chatbot/README.md
- examples/simple-agent/README.md
- examples/README.md
- examples/a2a/README.md
- examples/debate-committee/README.md
- examples/handoff/README.md
- examples/human-in-the-loop/README.md
- examples/orchestrator-workers/README.md
- examples/parallel-research/README.md


### Spec / Docs / Prompt Artifacts

_none_


### Agent Instruction Files

_none_


## Top Directories

| dir | count |
| --- | --- |
| examples | 64 |
| llm | 35 |
| tool | 31 |
| memory | 20 |
| vectorstore | 20 |
| trace | 17 |
| tests | 16 |
| web | 15 |
| a2a | 11 |
| textsplitter | 9 |
| nats | 8 |
| agent | 7 |
| embedding | 5 |
| rag | 5 |


## Extension Distribution

| ext | count |
| --- | --- |
| .go | 233 |
| .md | 25 |
| .html | 14 |
| [no-ext] | 4 |
| .yml | 3 |
| .css | 1 |
| .mod | 1 |
| .sum | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
