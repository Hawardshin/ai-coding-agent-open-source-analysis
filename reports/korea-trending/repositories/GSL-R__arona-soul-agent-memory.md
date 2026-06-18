# GSL-R/arona-soul-agent-memory

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/GSL-R/arona-soul-agent-memory |
| local path | sources/GSL-R__arona-soul-agent-memory |
| HEAD | b2a97b4 |
| stars/forks | 0 / 0 |
| language |  |
| license |  |
| pushedAt | 2026-05-26T22:33:01Z |
| trendScore / priorityScore | 71 / 153 |


## 한줄 해석

- MCP 서버/도구 표면이 있어 Claude Code/Codex류 에이전트와 직접 연결하기 좋다.
- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / tool use | 308 | README.md, docs/02-memory-constraints.md, docs/03-agent-centric-memory.md |
| LLM wiki / memory / graph | 213 | README.md, docs/02-memory-constraints.md, docs/03-agent-centric-memory.md |
| RAG / retrieval | 33 | README.md, docs/02-memory-constraints.md, docs/06-prompt-format-lessons.md |
| Spec / doc-driven workflow | 21 | README.md, docs/03-agent-centric-memory.md, prompts/A1-runtime-shell.public.md |
| Security / compliance | 20 | README.md, docs/00-origin-and-scope.md, docs/04-record-routing.md |
| Korean language / Korea domain | 3 | README.md, README.ko.md |
| MCP / tool protocol | 1 | SECURITY.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, context-engineering, documentParsing, evalObservability, example-rich, graphMemory, korea-signal, llm-wiki-memory, mcp, rag, security-compliance, spec-driven |
| stacks | docs/awesome-list |
| capabilities | Graph/memory store, Document parsing/OCR, Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 36 |
| manifests | 1 |
| docs | 35 |
| tests | 0 |
| ci/ops | 0 |
| spec artifacts | 2 |
| agent instruction files | 2 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | ARONA_SOUL: Agent-Centric Memory Architecture |
| headings | ARONA_SOUL: Agent-Centric Memory Architecture / In 60 Seconds / Origin of These Patterns / Core Idea / Architecture Sketch / How to Read This Repository / What This Repository Contains / Design Principles / Why Markdown Instead of XML? / Public Scope |
| excerpt | ARONA SOUL Agent Centric Memory Architecture A case study on designing a long running companion agent under constrained memory retrieval. 한국어 README README.ko.md README.ko.md 한국어 문서 docs/ko/ docs/ko/ This repository is not a drop in prompt template. It is intentionally non executable a design case study for building a long running AI companion whose continuity comes from explicit memory architecture, operational rules, and self review loops rather than from an idealized infinite context window. It is written for people designing LLM agents, personal AI companions, long term memory systems, prompt based agent operating procedures, and safety boundaries for persistent agent behavior. The origi |


## 주요 파일

### Manifests

- README.md


### Spec / Docs / Prompt Artifacts

- prompts/A1-runtime-shell.public.md
- prompts/ARONA_SOUL.public.md


### Agent Instruction Files

- prompts/A1-runtime-shell.public.md
- prompts/ARONA_SOUL.public.md


## 상위 디렉터리

| dir | count |
| --- | --- |
| docs | 23 |
| examples | 6 |
| prompts | 2 |
| .gitignore | 1 |
| LICENSE.md | 1 |
| README.ko.md | 1 |
| README.md | 1 |
| SECURITY.md | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .md | 35 |
| [no-ext] | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
