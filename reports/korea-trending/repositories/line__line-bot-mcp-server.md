# line/line-bot-mcp-server

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/line/line-bot-mcp-server |
| local path | sources/line__line-bot-mcp-server |
| HEAD | bfbbdab |
| stars/forks | 599 / 108 |
| language | TypeScript |
| license | Apache-2.0 |
| pushedAt | 2026-06-17T17:54:59Z |
| trendScore / priorityScore | 148 / 346 |


## 한줄 해석

- MCP 서버/도구 표면이 있어 Claude Code/Codex류 에이전트와 직접 연결하기 좋다.
- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| MCP / tool protocol | 225 | README.md, package.json, .github/workflows/check-eol-newrelease.yml |
| Frontend / developer experience | 74 | package.json, .prettierrc.json, CONTRIBUTING.md |
| Korean language / Korea domain | 60 | README.md, package.json, .github/workflows/check-eol-newrelease.yml |
| AI agent / tool use | 15 | README.md, manifest.json, README.ja.md |
| RAG / retrieval | 8 | README.md, manifest.json, test/e2e/pushTextMessage.e2e.test.ts |
| Security / compliance | 6 | Dockerfile, .github/workflows/npm-audit.yml, CODE_OF_CONDUCT.md |
| LLM wiki / memory / graph | 2 | CODE_OF_CONDUCT.md, CONTRIBUTING.md |
| Spec / doc-driven workflow | 1 | README.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, frontend-dx, graphMemory, korea-signal, llm-wiki-memory, mcp, rag, security-compliance, spec-driven |
| stacks | Node/TypeScript/JavaScript |
| capabilities | Graph/memory store |


## 구조 요약

| key | value |
| --- | --- |
| files | 75 |
| manifests | 5 |
| docs | 14 |
| tests | 16 |
| ci/ops | 8 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | LINE Bot MCP Server |
| headings | LINE Bot MCP Server / Tools / Installation (Using npx) / Step 1: Create LINE Official Account / Step 2: Configure AI Agent / Installation (Using Docker) / Step 1: Create LINE Official Account / Step 2: Build line-bot-mcp-server image / Step 3: Configure AI Agent / Local Development with Inspector |
| excerpt | 日本語版 READMEはこちら README.ja.md LINE Bot MCP Server ! npmjs https //badge.fury.io/js/%40line%2Fline bot mcp server.svg https //www.npmjs.com/package/@line/line bot mcp server Model Context Protocol MCP https //github.com/modelcontextprotocol server implementation that integrates the LINE Messaging API to connect an AI Agent to the LINE Official Account. ! /assets/demo.png !NOTE This repository is provided as a preview version. While we offer it for experimental purposes, please be aware that it may not include complete functionality or comprehensive support. Tools 1. push text message Push a simple text message to a user via LINE. Inputs userId string? The user ID to receive a message. Defaults |


## 주요 파일

### Manifests

- README.md
- Dockerfile
- package.json
- tsconfig.json
- tsconfig.test.json


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| src | 20 |
| .github | 15 |
| test | 15 |
| richmenu-template | 6 |
| scripts | 2 |
| .editorconfig | 1 |
| .gitignore | 1 |
| .npmrc | 1 |
| .prettierrc.json | 1 |
| CODE_OF_CONDUCT.md | 1 |
| CONTRIBUTING.md | 1 |
| Dockerfile | 1 |
| LICENSE | 1 |
| manifest.json | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .ts | 36 |
| .md | 14 |
| .yml | 8 |
| .json | 6 |
| [no-ext] | 5 |
| .mjs | 3 |
| .cjs | 1 |
| .json5 | 1 |
| .sh | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
