# farmbit-mdk/korea-market-data-mcp

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/farmbit-mdk/korea-market-data-mcp |
| local path | sources/farmbit-mdk__korea-market-data-mcp |
| HEAD | bdc90f5 |
| stars/forks | 0 / 0 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-06-10T08:58:48Z |
| trendScore / priorityScore | 69 / 182 |


## 한줄 해석

- MCP 서버/도구 표면이 있어 Claude Code/Codex류 에이전트와 직접 연결하기 좋다.
- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| MCP / tool protocol | 500 | AGENTS.md, examples/README.md, README.md |
| Security / compliance | 500 | AGENTS.md, examples/README.md, README.md |
| Korean language / Korea domain | 402 | AGENTS.md, examples/README.md, README.md |
| Spec / doc-driven workflow | 76 | AGENTS.md, README.md, docs/provider-adapter-spec.md |
| AI agent / tool use | 30 | AGENTS.md, README.md, docs/tool-spec.md |
| Frontend / developer experience | 12 | package.json, docs/troubleshooting.md, CONTRIBUTING.md |
| LLM wiki / memory / graph | 11 | docs/providers/kiwoom-auth-plan.md, docs/providers/provider-status.md, tests/kiwoom-token-client.test.ts |
| RAG / retrieval | 1 | README.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, example-rich, frontend-dx, graphMemory, korea-signal, llm-wiki-memory, mcp, rag, sdk-api, security-compliance, spec-driven |
| stacks | Node/TypeScript/JavaScript |
| capabilities | Graph/memory store |


## 구조 요약

| key | value |
| --- | --- |
| files | 180 |
| manifests | 5 |
| docs | 86 |
| tests | 19 |
| ci/ops | 0 |
| spec artifacts | 3 |
| agent instruction files | 1 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | korea-market-data-mcp |
| headings | korea-market-data-mcp / 한국어 Quick Start / 설치 / PowerShell 환경변수 / 로컬 검증 / Claude Desktop 질문 예시 / 지원하지 않는 기능 / Why this project exists / Project goals / Non-goals |
| excerpt | korea market data mcp Open source Model Context Protocol server for reliable Korean financial market data access from AI agents. korea market data mcp helps AI tools such as Codex, Claude, ChatGPT, Cursor, and other MCP compatible clients query Korean stocks, ETFs, indices, charts, and market data through structured provider adapters. The first target provider is Kiwoom Securities REST API . This project is intentionally read only . It does not provide trading, order execution, automated trading, or personal account access. 한국어 Quick Start korea market data mcp 는 Claude Desktop, GPT, Codex, Cursor 같은 AI 클라이언트가 국내 주식/ETF 데이터를 조회할 수 있도록 돕는 Kiwoom REST API 기반 read only MCP 서버 입니다. 이 MCP는 답변 엔진이 |


## 주요 파일

### Manifests

- AGENTS.md
- examples/README.md
- README.md
- package.json
- tsconfig.json


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- docs/architecture.md
- ROADMAP.md


### Agent Instruction Files

- AGENTS.md


## 상위 디렉터리

| dir | count |
| --- | --- |
| docs | 79 |
| src | 48 |
| tests | 19 |
| examples | 16 |
| scripts | 4 |
| .env.example | 1 |
| .gitattributes | 1 |
| .gitignore | 1 |
| AGENTS.md | 1 |
| CHANGELOG.md | 1 |
| CONTRIBUTING.md | 1 |
| LICENSE | 1 |
| package-lock.json | 1 |
| package.json | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .md | 86 |
| .ts | 72 |
| .json | 16 |
| .example | 3 |
| [no-ext] | 3 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
