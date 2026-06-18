# majiayu000/remem

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/majiayu000/remem |
| local path | sources/majiayu000__remem |
| HEAD | f00d1e4 |
| stars/forks | 0 / 0 |
| language | Rust |
| license |  |
| pushedAt | 2026-06-17T23:51:19Z |
| trendScore / priorityScore | 77 / 244 |


## 한줄 해석

- MCP 서버/도구 표면이 있어 Claude Code/Codex류 에이전트와 직접 연결하기 좋다.
- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 로컬 LLM/온디바이스 실행 신호가 있어 비용/보안/오프라인 요구와 연결된다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| LLM wiki / memory / graph | 500 | docs/invi/README.md, eval/README.md, eval/locomo/README.md |
| AI agent / tool use | 342 | README.md, docs/spec-memory-governance-v2.md, docs/spec-memory-ownership-routing.md |
| RAG / retrieval | 341 | docs/invi/README.md, eval/README.md, eval/locomo/README.md |
| MCP / tool protocol | 269 | AGENTS.md, README.md, plugins/remem/apps/remem/README.md |
| Spec / doc-driven workflow | 164 | eval/README.md, README.md, plugins/remem/README.md |
| Security / compliance | 97 | README.md, docs/spec-memory-ai-config.md, docs/spec-memory-governance-v2.md |
| Frontend / developer experience | 66 | plugins/remem/apps/remem/README.md, plugins/remem/README.md, docs/memory-systems-comparison.md |
| Infra / observability | 7 | docs/ref/memory-retrieval-research-2026-05-24.md, docs/spec-codex-context-injection-gating-2026-05-25.md, SPEC-memory-library-hardening-2026-05-16.md |
| Local LLM / on-device inference | 5 | docs/invi/00-final-design.md, docs/invi/09-rewind-capture.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, context-engineering, documentParsing, evalObservability, frontend-dx, graphMemory, infra-observability, llm-wiki-memory, llmFramework, local-llm, localRuntime, mcp, rag, sdk-api, security-compliance, spec-driven, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python, Rust |
| capabilities | LLM/app framework, Vector/search store, Graph/memory store, Document parsing/OCR, Eval/observability, Local runtime |


## 구조 요약

| key | value |
| --- | --- |
| files | 747 |
| manifests | 11 |
| docs | 114 |
| tests | 88 |
| ci/ops | 3 |
| spec artifacts | 50 |
| agent instruction files | 7 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | Remem Memory |
| headings | Remem Memory / The Problem / How remem Solves This / Quickstart / Other Install Channels / Quick install options / npm wrapper / Cargo / Manual GitHub Release download / Build from source |
| excerpt | Remem Memory Automatic memory for Claude Code and Codex. Language English 简体中文 README.zh CN.md remem is a single Rust binary that automatically captures, distills, and injects project context across Claude Code and Codex sessions decisions, patterns, preferences, and learnings. Stop re explaining your project every new session. ! CI https //github.com/majiayu000/remem/actions/workflows/ci.yml/badge.svg https //github.com/majiayu000/remem/actions/workflows/ci.yml ! License MIT https //img.shields.io/badge/License MIT blue.svg LICENSE ! Remem Memory terminal demo assets/remem demo.gif The Problem Session amnesia every new Claude Code or Codex session starts from zero. Lost context bug fix rati |


## 주요 파일

### Manifests

- docs/invi/README.md
- eval/README.md
- eval/locomo/README.md
- AGENTS.md
- README.md
- npm/remem/README.md
- plugins/remem/apps/remem/README.md
- plugins/remem/README.md
- CLAUDE.md
- Cargo.toml
- npm/remem/package.json


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- CLAUDE.md
- docs/specs/refactor-steps/SPEC-step16-mcp-server-split-2026-04-01.md
- docs/specs/refactor-steps/SPEC-step17-memory-promote-split-2026-04-01.md
- docs/specs/refactor-steps/SPEC-step23-eval-local-split-2026-04-01.md
- docs/specs/refactor-steps/SPEC-step26-memory-service-split-2026-04-01.md
- docs/specs/refactor-steps/SPEC-step34-memory-search-split-2026-04-01.md
- docs/specs/refactor-steps/SPEC-step35-claude-memory-split-2026-04-01.md
- docs/specs/refactor-steps/SPEC-step38-eval-metrics-split-2026-04-01.md
- docs/specs/refactor-steps/SPEC-step39-memory-format-split-2026-04-01.md
- docs/specs/refactor-steps/SPEC-step41-memory-events-split-2026-04-01.md
- docs/specs/refactor-steps/SPEC-step46-search-memory-split-2026-04-01.md
- docs/specs/refactor-steps/SPEC-step8-db-memory-split-2026-04-01.md
- prompts/compress.txt
- prompts/dream.txt
- prompts/observation.txt
- prompts/summary.txt
- prompts/task_observation.txt
- docs/ARCHITECTURE.md
- docs/specs/refactor-steps/SPEC-step10-search-split-2026-04-01.md


### Agent Instruction Files

- AGENTS.md
- CLAUDE.md
- prompts/compress.txt
- prompts/dream.txt
- prompts/observation.txt
- prompts/summary.txt
- prompts/task_observation.txt


## 상위 디렉터리

| dir | count |
| --- | --- |
| src | 544 |
| docs | 85 |
| eval | 35 |
| plugins | 21 |
| tests | 10 |
| .github | 7 |
| npm | 7 |
| prompts | 5 |
| site | 4 |
| scripts | 3 |
| .agents | 1 |
| .gitignore | 1 |
| .remem | 1 |
| AGENTS.md | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .rs | 508 |
| .md | 114 |
| .sql | 45 |
| .json | 36 |
| .js | 17 |
| .py | 6 |
| .txt | 5 |
| .yml | 4 |
| [no-ext] | 3 |
| .css | 2 |
| .html | 2 |
| .jsonl | 1 |
| .sh | 1 |
| .svg | 1 |
| .tape | 1 |
| .toml | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
