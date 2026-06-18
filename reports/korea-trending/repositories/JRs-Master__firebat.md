# JRs-Master/firebat

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/JRs-Master/firebat |
| local path | sources/JRs-Master__firebat |
| HEAD | a08aefa |
| stars/forks | 0 / 0 |
| language | Rust |
| license |  |
| pushedAt | 2026-06-17T23:51:56Z |
| trendScore / priorityScore | 75 / 225 |


## 한줄 해석

- MCP 서버/도구 표면이 있어 Claude Code/Codex류 에이전트와 직접 연결하기 좋다.
- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| LLM wiki / memory / graph | 354 | README.md, system/prompts/tool_system.md, docs/CORE_BIBLE.md |
| MCP / tool protocol | 314 | README.md, infra/Cargo.toml, package.json |
| Frontend / developer experience | 227 | README.md, Cargo.toml, infra/Cargo.toml |
| AI agent / tool use | 114 | README.md, system/prompts/cron_agent.md, system/prompts/tool_system.md |
| RAG / retrieval | 103 | README.md, system/prompts/tool_system.md, docs/CORE_BIBLE.md |
| Security / compliance | 69 | README.md, infra/Cargo.toml, next.config.mjs |
| Korean language / Korea domain | 60 | README.md, system/prompts/cron_agent.md, system/prompts/tool_system.md |
| Spec / doc-driven workflow | 50 | README.md, system/prompts/cron_agent.md, system/prompts/tool_system.md |
| Infra / observability | 45 | README.md, core/Cargo.toml, infra/Cargo.toml |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, documentParsing, frontend, frontend-dx, graphMemory, infra-observability, korea-signal, llm-wiki-memory, llmFramework, mcp, rag, sdk-api, security-compliance, spec-driven, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python, Rust |
| capabilities | LLM/app framework, Vector/search store, Graph/memory store, Document parsing/OCR |


## 구조 요약

| key | value |
| --- | --- |
| files | 630 |
| manifests | 8 |
| docs | 13 |
| tests | 47 |
| ci/ops | 4 |
| spec artifacts | 5 |
| agent instruction files | 5 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | Terminal 1: Rust core gRPC server (port 50051) |
| headings | What is Firebat? / Architecture / Features / AI Function Calling Pipeline / Scheduling & Automation / Project Builder / MCP (Model Context Protocol) / Sandbox Execution / Built-in Components / Capability-Provider System |
| excerpt | <p align="center" <img src="app/icon.svg" width="80" alt="Firebat Logo" / </p <h1 align="center" Firebat</h1 <p align="center" <em Just Imagine. Firebat Runs.</em </p <p align="center" <strong AI Powered Visual Automation Agent VAA </strong — Self hosted, single node, multi LLM. <br / <sub 웹 UI에서 한 마디 대화로 웹 앱을 만들고·운영하고·자동화하는 AI 기반 시각적 자동화 에이전트</sub </p <p align="center" <img src="https //img.shields.io/badge/Next.js 16 black?logo=nextdotjs" alt="Next.js" / <img src="https //img.shields.io/badge/TypeScript 6 blue?logo=typescript" alt="TypeScript" / <img src="https //img.shields.io/badge/LLM Multi Provider 4285F4" alt="Multi Provider LLM" / <img src="https //img.shields.io/badge/MCP Rust orang |


## 주요 파일

### Manifests

- README.md
- Cargo.toml
- core/Cargo.toml
- infra/Cargo.toml
- infra/Dockerfile
- next.config.mjs
- package.json
- tsconfig.json


### Spec / Docs / Prompt Artifacts

- system/prompts/cron_agent.md
- system/prompts/library_extraction.md
- system/prompts/plan_mode_always.md
- system/prompts/plan_mode_auto.md
- system/prompts/tool_system.md


### Agent Instruction Files

- system/prompts/cron_agent.md
- system/prompts/library_extraction.md
- system/prompts/plan_mode_always.md
- system/prompts/plan_mode_auto.md
- system/prompts/tool_system.md


## 상위 디렉터리

| dir | count |
| --- | --- |
| app | 187 |
| infra | 116 |
| core | 110 |
| system | 99 |
| lib | 80 |
| docs | 6 |
| scripts | 4 |
| .github | 3 |
| proto | 3 |
| language | 2 |
| .cargo | 1 |
| .gitignore | 1 |
| ACKNOWLEDGEMENTS.md | 1 |
| buf.gen.yaml | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .rs | 216 |
| .ts | 193 |
| .json | 82 |
| .tsx | 77 |
| .mjs | 22 |
| .md | 13 |
| [no-ext] | 6 |
| .py | 4 |
| .toml | 4 |
| .yml | 3 |
| .sh | 2 |
| .yaml | 2 |
| .cjs | 1 |
| .css | 1 |
| .example | 1 |
| .js | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
