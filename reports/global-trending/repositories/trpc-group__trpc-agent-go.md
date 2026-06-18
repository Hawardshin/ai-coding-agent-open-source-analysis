# trpc-group/trpc-agent-go

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/trpc-group/trpc-agent-go |
| local path | sources/trpc-group__trpc-agent-go |
| HEAD | 43b120c |
| stars/forks | 1370 / 168 |
| language | Go |
| license |  |
| pushedAt | 2026-06-17T07:20:30Z |
| trendScore / priorityScore | 178 / 507 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | examples/a2aagent/customdatapart/README.md, examples/a2aagent/error_handling/README.md, examples/a2aagent/README.md |
| Observability / evaluation | 451 | examples/a2aagent/README.md, examples/evaluation/callbacks/README.md, examples/evaluation/claudecode/README.md |
| Database / data infrastructure | 208 | examples/evaluation/mysql/README.md, examples/guardrail/promptinjection/README.md, examples/knowledge/features/graphrag/viewer/README.md |
| MCP / agent interoperability | 194 | examples/evaluation/claudecode/README.md, examples/graph/mcptool/README.md, examples/llmagent_tool_call_retry/README.md |
| Cloud native / infrastructure | 142 | examples/a2aagent/error_handling/README.md, examples/a2aagent/README.md, examples/agui/client/tdesign-chat/README.md |
| Developer tools / DX | 85 | examples/a2aagent/error_handling/README.md, examples/a2asubagent/README.md, examples/agui/client/event_emitter/README.md |
| RAG / retrieval / knowledge | 72 | examples/evaluation/llm/hallucination/README.md, examples/evaluation/llm/knowledgerecall/README.md, examples/graph/retrieval_placeholder/README.md |
| Data / ML platform | 53 | examples/agui/client/event_emitter/README.md, examples/evaluation/claudecode/README.md, examples/evaluation/contextmessage/README.md |
| Frontend / app framework | 47 | examples/a2ui/client/README.md, examples/agui/client/copilotkit/README.md, examples/agui/client/README.md |
| Coding agent / software automation | 42 | examples/debugagent/README.md, examples/evaluation/claudecode/README.md, examples/graph/a2asubagent/README.md |
| Security / supply chain | 30 | examples/a2asubagent/README.md, examples/agenttool/README.md, examples/debugagent/README.md |
| Local LLM / inference | 4 | examples/memory/mem0/README.md, examples/memory/README.md, examples/memory/tencentdb/README.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python, Go |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 3705 |
| manifests | 40 |
| docs | 563 |
| tests | 991 |
| ci/ops | 8 |
| spec artifacts | 24 |
| agent instruction files | 21 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | tRPC-Agent-Go | tRPC-Agent-Go / Use Cases / Key Features / Multi-Agent Orchestration / Advanced Memory System / Rich Tool Integration / Production Observability / Agent Skills / Evaluation & Benchmarks / Table of Contents | English 中文 README.zh CN.md tRPC Agent Go ! Go Reference https //pkg.go.dev/badge/trpc.group/trpc go/trpc agent go.svg https //pkg.go.dev/trpc.group/trpc go/trpc agent go ! Go Report Card https //goreportcard.com/badge/github.com/trpc group/trpc agent go https //goreportcard.com/report/github.com/trpc group/trpc agent go ! LICENSE https //img.shields.io/badge/license Apache 2.0 green.svg https //github.com/trpc group/trpc agent go/blob/main/LICENSE ! Releases https //img.shields.io/github/release/trpc group/trpc agent go.svg?style=flat square https //github.com/trpc group/trpc agent go/releases ! Tests https //github.com/trpc group/trpc agent go/actions/workflows/prc.yml/badge.svg https //git |


## Key Files

### Manifests

- examples/a2aagent/customdatapart/README.md
- examples/a2aagent/error_handling/README.md
- examples/a2aagent/README.md
- examples/a2asubagent/README.md
- examples/a2ui/client/README.md
- examples/agenttool/README.md
- examples/agui/client/copilotkit/README.md
- examples/agui/client/event_emitter/README.md
- examples/agui/client/raw/README.md
- examples/agui/client/README.md
- examples/agui/client/tdesign-chat/README.md
- examples/agui/server/externaltool/agentnode_graphagent/README.md
- examples/agui/server/externaltool/agentnode_handoff_agenttool/README.md
- examples/agui/server/externaltool/agentnode_llmagent/README.md
- examples/agui/server/externaltool/agenttool_graphagent_graphagent/README.md
- examples/agui/server/externaltool/graphagent/README.md
- examples/agui/server/externaltool/llmagent/README.md
- examples/customagent/README.md
- examples/debugagent/project/README.md
- examples/debugagent/README.md


### Spec / Docs / Prompt Artifacts

- examples/prompt/langfuse/README.md
- examples/prompt/late_context_messages/README.md
- AGENTS.md
- examples/a2aadk/adk/requirements.txt
- docs/mkdocs/assets/requirements.txt
- prompt/text_test.go
- examples/a2asubagent/agents/codecheck/spec.txt
- examples/claudecode/.claude/agents/news-query-agent.md
- examples/evaluation/claudecode/.claude/agents/contact-lookup-agent.md
- examples/evaluation/claudecode/.claude/skills/weather-query/SKILL.md
- examples/prompt/langfuse/main.go
- examples/prompt/langfuse/prompt.txt
- examples/prompt/late_context_messages/main.go
- internal/prompt/adapter/state/render_test.go
- internal/prompt/core/text_state_subset_test.go
- openclaw/examples/stdin_chat/prompts/system/01_identity.md
- openclaw/examples/stdin_chat/prompts/system/02_style.md
- prompt/doc.go
- prompt/provider/langfuse/langfuse_test.go
- prompt/text.go


### Agent Instruction Files

- examples/prompt/langfuse/README.md
- examples/prompt/late_context_messages/README.md
- AGENTS.md
- prompt/text_test.go
- examples/claudecode/.claude/agents/news-query-agent.md
- examples/evaluation/claudecode/.claude/agents/contact-lookup-agent.md
- examples/evaluation/claudecode/.claude/skills/weather-query/SKILL.md
- examples/prompt/langfuse/main.go
- examples/prompt/langfuse/prompt.txt
- examples/prompt/late_context_messages/main.go
- internal/prompt/adapter/state/render_test.go
- internal/prompt/core/text_state_subset_test.go
- openclaw/examples/stdin_chat/prompts/system/01_identity.md
- openclaw/examples/stdin_chat/prompts/system/02_style.md
- prompt/doc.go


## Top Directories

| dir | count |
| --- | --- |
| examples | 992 |
| openclaw | 406 |
| evaluation | 295 |
| knowledge | 265 |
| internal | 212 |
| tool | 198 |
| session | 185 |
| agent | 164 |
| docs | 161 |
| server | 105 |
| memory | 103 |
| codeexecutor | 100 |
| model | 95 |
| graph | 82 |


## Extension Distribution

| ext | count |
| --- | --- |
| .go | 2701 |
| .md | 550 |
| .mod | 99 |
| .sum | 94 |
| .json | 90 |
| .sh | 29 |
| .py | 23 |
| .yaml | 20 |
| .js | 19 |
| .txt | 18 |
| [no-ext] | 12 |
| .sql | 10 |
| .yml | 8 |
| .svg | 7 |
| .ts | 6 |
| .html | 5 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
