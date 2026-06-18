# henomis/phero

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/henomis/phero |
| local path | sources/henomis__phero |
| HEAD | 342f10b |
| stars/forks | 0 / 0 |
| language | Go |
| license |  |
| pushedAt | 2026-06-16T15:42:00Z |
| trendScore / priorityScore | 69 / 204 |


## 한줄 해석

- MCP 서버/도구 표면이 있어 Claude Code/Codex류 에이전트와 직접 연결하기 좋다.
- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 로컬 LLM/온디바이스 실행 신호가 있어 비용/보안/오프라인 요구와 연결된다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / tool use | 500 | examples/a2a/multi-agent/README.md, examples/conversational-agent/README.md, examples/evaluator-optimizer/README.md |
| RAG / retrieval | 500 | examples/conversational-agent/README.md, examples/long-term-memory/README.md, examples/nats-memory/README.md |
| LLM wiki / memory / graph | 420 | examples/conversational-agent/README.md, examples/long-term-memory/README.md, examples/nats-agent/README.md |
| MCP / tool protocol | 167 | examples/mcp/README.md, examples/playwright-mcp/README.md, README.md |
| Security / compliance | 106 | examples/social-simulation/README.md, agent/agent_test.go, agent/stream_test.go |
| Local LLM / on-device inference | 76 | examples/a2a/multi-agent/README.md, examples/conversational-agent/README.md, examples/evaluator-optimizer/README.md |
| Frontend / developer experience | 34 | examples/nats-agent/multi-agent/README.md, examples/nats-agent/README.md, examples/playwright-mcp/README.md |
| Infra / observability | 27 | examples/simple-agent/README.md, README.md, go.mod |
| Spec / doc-driven workflow | 7 | examples/nats-agent/README.md, examples/nats-memory/README.md, README.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, documentParsing, evalObservability, example-rich, frontend-dx, graphMemory, infra-observability, llm-wiki-memory, llmFramework, local-llm, localRuntime, mcp, rag, sdk-api, security-compliance, spec-driven, vectorSearch |
| stacks | Go |
| capabilities | LLM/app framework, Vector/search store, Graph/memory store, Document parsing/OCR, Eval/observability, Local runtime |


## 구조 요약

| key | value |
| --- | --- |
| files | 282 |
| manifests | 29 |
| docs | 25 |
| tests | 61 |
| ci/ops | 3 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | 🐜 Phero |
| headings | 🐜 Phero / Why Phero? / Features / Core Capabilities / Requirements / Quick Start / Architecture / 🤖 Agent Layer / 💬 LLM Layer / 🧠 Knowledge Layer |
| excerpt | ! Phero ./web/images/phero logo.png 🐜 Phero The chemical language of AI agents. Phero is a modern Go framework for building multi agent AI systems. Like ants in a colony, agents in Phero cooperate, communicate, and coordinate toward shared goals, each with specialized roles, working together through a clean, composable architecture. ! Build Status https //github.com/henomis/phero/actions/workflows/checks.yml/badge.svg https //github.com/henomis/phero/actions/workflows/checks.yml ! GoDoc https //godoc.org/github.com/henomis/phero?status.svg https //godoc.org/github.com/henomis/phero ! Go Report Card https //goreportcard.com/badge/github.com/henomis/phero https //goreportcard.com/report/githu |


## 주요 파일

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

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

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


## 확장자 분포

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


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
