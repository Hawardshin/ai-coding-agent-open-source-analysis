# JeongSeongMok/tossinvest-openapi-mcp

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/JeongSeongMok/tossinvest-openapi-mcp |
| local path | sources/JeongSeongMok__tossinvest-openapi-mcp |
| HEAD | eb5cceb |
| stars/forks | 0 / 0 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-06-10T07:31:54Z |
| trendScore / priorityScore | 69 / 141 |


## 한줄 해석

- MCP 서버/도구 표면이 있어 Claude Code/Codex류 에이전트와 직접 연결하기 좋다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| MCP / tool protocol | 164 | README.md, CLAUDE.md, Dockerfile |
| Korean language / Korea domain | 118 | README.md, CLAUDE.md, package.json |
| Spec / doc-driven workflow | 50 | README.md, CLAUDE.md, src/spec/store.ts |
| Frontend / developer experience | 22 | README.md, CLAUDE.md, Dockerfile |
| AI agent / tool use | 15 | CLAUDE.md, package.json, docs/robots.txt |
| Security / compliance | 4 | CLAUDE.md, src/codegen.ts, src/format.ts |
| LLM wiki / memory / graph | 1 | src/spec/store.ts |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, frontend-dx, graphMemory, korea-signal, llm-wiki-memory, mcp, sdk-api, security-compliance, spec-driven |
| stacks | Node/TypeScript/JavaScript |
| capabilities | Graph/memory store |


## 구조 요약

| key | value |
| --- | --- |
| files | 22 |
| manifests | 5 |
| docs | 8 |
| tests | 1 |
| ci/ops | 1 |
| spec artifacts | 2 |
| agent instruction files | 1 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | tossinvest-openapi-mcp |
| headings | tossinvest-openapi-mcp / 개요 / 제공 도구 / 요구 사항 / 설치 및 사용 (stdio) / Claude (Claude Desktop / Claude Code / Cursor) — JSON / Codex CLI — TOML (`~/.codex/config.toml`) / 설정 파일 위치 / 동작 확인 / → stderr에 "tossinvest-openapi-mcp running on stdio" 출력 후 stdin으로 MCP 메시지 대기 |
| excerpt | tossinvest openapi mcp 토스증권 Open API 를 개발자와 AI 에이전트가 쉽게 탐색·연동할 수 있도록 돕는 MCP https //modelcontextprotocol.io Model Context Protocol 서버. ! npm version https //img.shields.io/npm/v/tossinvest openapi mcp.svg https //www.npmjs.com/package/tossinvest openapi mcp ! License MIT https //img.shields.io/badge/License MIT yellow.svg LICENSE ! MCP https //img.shields.io/badge/MCP stdio blue.svg https //modelcontextprotocol.io ! Node https //img.shields.io/badge/node %3E%3D18 green.svg https //nodejs.org 언어 한국어 · English README.en.md · 日本語 README.ja.md ! tossinvest openapi mcp MCP server https //glama.ai/mcp/servers/JeongSeongMok/tossinvest openapi mcp/badges/card.svg https //glama.ai/mcp/servers/JeongSe |


## 주요 파일

### Manifests

- README.md
- CLAUDE.md
- Dockerfile
- package.json
- tsconfig.json


### Spec / Docs / Prompt Artifacts

- CLAUDE.md
- src/spec/store.ts


### Agent Instruction Files

- CLAUDE.md


## 상위 디렉터리

| dir | count |
| --- | --- |
| src | 6 |
| docs | 4 |
| .gitignore | 1 |
| CLAUDE.md | 1 |
| Dockerfile | 1 |
| glama.json | 1 |
| LICENSE | 1 |
| openapi.json | 1 |
| package-lock.json | 1 |
| package.json | 1 |
| README.en.md | 1 |
| README.ja.md | 1 |
| README.md | 1 |
| tsconfig.json | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .ts | 6 |
| .json | 5 |
| .md | 4 |
| [no-ext] | 4 |
| .html | 1 |
| .txt | 1 |
| .xml | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
