# swarmclawai/swarmvault

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/swarmclawai/swarmvault |
| local path | sources/swarmclawai__swarmvault |
| HEAD | 4ce0c7c |
| stars/forks | 0 / 0 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-06-12T10:39:15Z |
| trendScore / priorityScore | 73 / 211 |


## 한줄 해석

- MCP 서버/도구 표면이 있어 Claude Code/Codex류 에이전트와 직접 연결하기 좋다.
- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 로컬 LLM/온디바이스 실행 신호가 있어 비용/보안/오프라인 요구와 연결된다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / tool use | 500 | README.md, packages/cli/README.md, packages/engine/README.md |
| LLM wiki / memory / graph | 500 | README.md, worked/README.md, packages/cli/README.md |
| RAG / retrieval | 302 | README.md, worked/README.md, packages/cli/README.md |
| MCP / tool protocol | 168 | README.md, packages/cli/README.md, packages/engine/README.md |
| Frontend / developer experience | 130 | README.md, packages/cli/README.md, packages/engine/README.md |
| Local LLM / on-device inference | 83 | README.md, packages/cli/README.md, packages/engine/README.md |
| Spec / doc-driven workflow | 41 | README.md, packages/cli/README.md, packages/obsidian-plugin/README.md |
| Security / compliance | 25 | README.md, packages/cli/README.md, worked/voice-capture/README.md |
| Infra / observability | 1 | packages/engine/src/mcp.ts |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, context-engineering, documentParsing, evalObservability, example-rich, frontend-dx, graphMemory, infra-observability, llm-wiki, llm-wiki-memory, llmFramework, local-llm, localRuntime, mcp, rag, security-compliance, spec-driven |
| stacks | Node/TypeScript/JavaScript, Python, Rust, Go, Java/Kotlin, C/C++ |
| capabilities | LLM/app framework, Graph/memory store, Document parsing/OCR, Eval/observability, Local runtime |


## 구조 요약

| key | value |
| --- | --- |
| files | 351 |
| manifests | 31 |
| docs | 43 |
| tests | 119 |
| ci/ops | 3 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | SwarmVault |
| headings | SwarmVault / Try It in 30 Seconds / Three-Layer Architecture / Why SwarmVault / From Gist to Production / Install / Desktop App (no Node.js required) / CLI / Quickstart / Fast Path |
| excerpt | SwarmVault <! readme language nav start Languages English README.md 简体中文 README.zh CN.md 日本語 README.ja.md <! readme language nav end ! npm https //img.shields.io/npm/v/@swarmvaultai/cli https //www.npmjs.com/package/@swarmvaultai/cli ! npm downloads https //img.shields.io/npm/dw/@swarmvaultai/cli https //www.npmjs.com/package/@swarmvaultai/cli ! GitHub stars https //img.shields.io/github/stars/swarmclawai/swarmvault https //github.com/swarmclawai/swarmvault ! license https //img.shields.io/badge/license MIT green LICENSE ! node https //img.shields.io/badge/node %3E%3D24 brightgreen The local first LLM Wiki, knowledge graph builder, and RAG knowledge base for AI agents. SwarmVault turns docs, |


## 주요 파일

### Manifests

- README.md
- worked/README.md
- packages/cli/README.md
- packages/engine/README.md
- packages/obsidian-plugin/README.md
- packages/viewer/README.md
- skills/swarmvault/README.md
- smoke/fixtures/tiny-matrix/README.md
- worked/book-reading/README.md
- worked/capture/README.md
- worked/code-repo/README.md
- worked/large-repo/README.md
- worked/large-repo/sources/README.md
- worked/mixed-corpus/README.md
- worked/personal-knowledge-base/README.md
- worked/research-deep-dive/README.md
- worked/voice-capture/README.md
- Dockerfile
- package.json
- packages/cli/package.json


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| packages | 232 |
| smoke | 51 |
| scripts | 16 |
| worked | 16 |
| skills | 10 |
| .github | 2 |
| docs | 2 |
| .dockerignore | 1 |
| .gitignore | 1 |
| .npmrc | 1 |
| biome.json | 1 |
| CHANGELOG.md | 1 |
| CONTRIBUTING.md | 1 |
| Dockerfile | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .ts | 182 |
| .md | 39 |
| .tsx | 34 |
| .json | 20 |
| .mjs | 16 |
| [no-ext] | 6 |
| .html | 3 |
| .php | 3 |
| .sh | 3 |
| .svg | 3 |
| .yaml | 3 |
| .yml | 3 |
| .cs | 2 |
| .css | 2 |
| .dart | 2 |
| .go | 2 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
