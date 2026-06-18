# hjhun/llm-wiki

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/hjhun/llm-wiki |
| local path | sources/hjhun__llm-wiki |
| HEAD | 5b4817e |
| stars/forks | 0 / 0 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-06-17T23:16:54Z |
| trendScore / priorityScore | 72 / 223 |


## 한줄 해석

- MCP 서버/도구 표면이 있어 Claude Code/Codex류 에이전트와 직접 연결하기 좋다.
- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 로컬 LLM/온디바이스 실행 신호가 있어 비용/보안/오프라인 요구와 연결된다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / tool use | 500 | examples/mini-wiki/README.md, AGENTS.md, cli-rs/README.md |
| LLM wiki / memory / graph | 500 | examples/mini-wiki/README.md, AGENTS.md, cli-rs/README.md |
| RAG / retrieval | 182 | AGENTS.md, clio-skill/README.md, README.md |
| Spec / doc-driven workflow | 83 | examples/mini-wiki/README.md, AGENTS.md, cli-rs/README.md |
| Security / compliance | 52 | AGENTS.md, README.md, webapp/README.md |
| Frontend / developer experience | 34 | AGENTS.md, README.md, webapp/README.md |
| Korean language / Korea domain | 21 | AGENTS.md, README.md, CLAUDE.md |
| Local LLM / on-device inference | 2 | llm-wiki.md, setup.sh |
| MCP / tool protocol | 2 | README.md, llm-wiki.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, evalObservability, example-rich, frontend-dx, graphMemory, korea-signal, llm-wiki, llm-wiki-memory, llmFramework, local-llm, mcp, rag, sdk-api, security-compliance, spec-driven, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Rust |
| capabilities | LLM/app framework, Vector/search store, Graph/memory store, Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 347 |
| manifests | 12 |
| docs | 52 |
| tests | 44 |
| ci/ops | 3 |
| spec artifacts | 2 |
| agent instruction files | 2 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | custom dir, skip graphify, custom port, then start |
| headings | The idea / What you actually get / Why developers might care / How it works / Quick start / Your first wiki in five minutes / Core workflows / Code Wiki / Command-line interface / Web UI |
| excerpt | <p align="center" <img src="docs/svg/clio.svg" alt="CLIO" width="120" </p <h1 align="center" CLIO</h1 <p align="center" <strong A local first LLM Wiki workbench.</strong <br Drop sources in <code raw/</code , let a coding agent compile them into a durable, interlinked Markdown wiki you own — readable, searchable, graphable, and version controlled. </p <p align="center" <a href="LICENSE" <img alt="License Apache 2.0" src="https //img.shields.io/badge/License Apache 2.0 blue.svg" </a <img alt="Version" src="https //img.shields.io/badge/version 1.0.1 informational" <img alt="Node" src="https //img.shields.io/badge/node %3E%3D20 success" <img alt="Local first" src="https //img.shields.io/badge/l |


## 주요 파일

### Manifests

- examples/mini-wiki/README.md
- AGENTS.md
- cli-rs/README.md
- clio-skill/README.md
- README.md
- tools/README.md
- webapp/README.md
- CLAUDE.md
- cli-rs/Cargo.toml
- webapp/next.config.mjs
- webapp/package.json
- webapp/tsconfig.json


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- CLAUDE.md


### Agent Instruction Files

- AGENTS.md
- CLAUDE.md


## 상위 디렉터리

| dir | count |
| --- | --- |
| webapp | 250 |
| cli-rs | 17 |
| examples | 16 |
| .agents | 14 |
| scripts | 11 |
| clio-skill | 10 |
| wiki | 8 |
| .github | 3 |
| docs | 3 |
| raw | 2 |
| systemd | 2 |
| tools | 2 |
| .gitignore | 1 |
| AGENTS.md | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .ts | 193 |
| .tsx | 49 |
| .md | 48 |
| .rs | 15 |
| .mjs | 11 |
| .sh | 10 |
| .json | 7 |
| [no-ext] | 6 |
| .yml | 3 |
| .svg | 2 |
| .css | 1 |
| .service | 1 |
| .toml | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
