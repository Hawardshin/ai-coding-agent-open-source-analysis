# trpc-group/trpc-agent-go

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/trpc-group/trpc-agent-go |
| local path | sources/trpc-group__trpc-agent-go |
| HEAD | 43b120c |
| stars/forks | 0 / 0 |
| language | Go |
| license |  |
| pushedAt | 2026-06-17T07:20:30Z |
| trendScore / priorityScore | 82 / 236 |


## 한줄 해석

- MCP 서버/도구 표면이 있어 Claude Code/Codex류 에이전트와 직접 연결하기 좋다.
- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 로컬 LLM/온디바이스 실행 신호가 있어 비용/보안/오프라인 요구와 연결된다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / tool use | 500 | examples/prompt/langfuse/README.md, examples/prompt/late_context_messages/README.md, examples/a2aagent/customdatapart/README.md |
| LLM wiki / memory / graph | 500 | examples/agui/server/externaltool/agentnode_graphagent/README.md, examples/agui/server/externaltool/agentnode_llmagent/README.md, examples/agui/server/externaltool/agenttool_graphagent_graphagent/README.md |
| MCP / tool protocol | 207 | examples/evaluation/claudecode/README.md, examples/graph/mcptool/README.md, examples/llmagent_tool_call_retry/README.md |
| RAG / retrieval | 97 | examples/agenttool/README.md, examples/evaluation/llm/hallucination/README.md, examples/evaluation/llm/knowledgerecall/README.md |
| Frontend / developer experience | 71 | examples/agui/server/externaltool/graphagent/README.md, examples/graph/isolated_subagent/README.md, examples/llmagent/README.md |
| Security / compliance | 65 | examples/prompt/late_context_messages/README.md, codeexecutor/sandbox/docs/README.md, examples/a2asubagent/README.md |
| Infra / observability | 39 | codeexecutor/sandbox/docs/README.md, examples/a2aagent/README.md, examples/graph/a2asubagent/README.md |
| Spec / doc-driven workflow | 35 | examples/a2aagent/error_handling/README.md, examples/a2asubagent/README.md, examples/evaluation/jieba/README.md |
| Local LLM / on-device inference | 4 | examples/memory/mem0/README.md, examples/memory/README.md, examples/memory/tencentdb/README.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, context-engineering, documentParsing, evalObservability, example-rich, frontend-dx, graphMemory, infra, infra-observability, llm-wiki-memory, llmFramework, local-llm, mcp, rag, sdk-api, security-compliance, spec-driven, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python, Go |
| capabilities | LLM/app framework, Vector/search store, Graph/memory store, Document parsing/OCR, Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 3705 |
| manifests | 40 |
| docs | 563 |
| tests | 991 |
| ci/ops | 8 |
| spec artifacts | 24 |
| agent instruction files | 21 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | tRPC-Agent-Go |
| headings | tRPC-Agent-Go / Use Cases / Key Features / Multi-Agent Orchestration / Advanced Memory System / Rich Tool Integration / Production Observability / Agent Skills / Evaluation & Benchmarks / Table of Contents |
| excerpt | English 中文 README.zh CN.md tRPC Agent Go ! Go Reference https //pkg.go.dev/badge/trpc.group/trpc go/trpc agent go.svg https //pkg.go.dev/trpc.group/trpc go/trpc agent go ! Go Report Card https //goreportcard.com/badge/github.com/trpc group/trpc agent go https //goreportcard.com/report/github.com/trpc group/trpc agent go ! LICENSE https //img.shields.io/badge/license Apache 2.0 green.svg https //github.com/trpc group/trpc agent go/blob/main/LICENSE ! Releases https //img.shields.io/github/release/trpc group/trpc agent go.svg?style=flat square https //github.com/trpc group/trpc agent go/releases ! Tests https //github.com/trpc group/trpc agent go/actions/workflows/prc.yml/badge.svg https //git |


## 주요 파일

### Manifests

- examples/prompt/langfuse/README.md
- examples/prompt/late_context_messages/README.md
- codeexecutor/sandbox/docs/README.md
- examples/a2aagent/customdatapart/README.md
- examples/a2aagent/error_handling/README.md
- examples/a2aagent/README.md
- examples/a2asubagent/README.md
- examples/agenttool/README.md
- examples/agui/server/externaltool/agentnode_graphagent/README.md
- examples/agui/server/externaltool/agentnode_handoff_agenttool/README.md
- examples/agui/server/externaltool/agentnode_llmagent/README.md
- examples/agui/server/externaltool/agenttool_graphagent_graphagent/README.md
- examples/agui/server/externaltool/graphagent/README.md
- examples/agui/server/externaltool/llmagent/README.md
- examples/customagent/README.md
- examples/debugagent/project/README.md
- examples/debugagent/README.md
- examples/dynamicagenttool/README.md
- examples/evaluation/callbacks/README.md
- examples/evaluation/claudecode/README.md


### Spec / Docs / Prompt Artifacts

- examples/prompt/langfuse/README.md
- examples/prompt/late_context_messages/README.md
- AGENTS.md
- docs/mkdocs/assets/requirements.txt
- prompt/text_test.go
- examples/a2aadk/adk/requirements.txt
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
- internal/prompt/adapter/state/render.go
- internal/prompt/core/text.go
- prompt/provider/langfuse/langfuse.go
- examples/a2asubagent/agents/codecheck/spec.txt


### Agent Instruction Files

- examples/prompt/langfuse/README.md
- examples/prompt/late_context_messages/README.md
- AGENTS.md
- prompt/text_test.go
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
- internal/prompt/adapter/state/render.go


## 상위 디렉터리

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


## 확장자 분포

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


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
