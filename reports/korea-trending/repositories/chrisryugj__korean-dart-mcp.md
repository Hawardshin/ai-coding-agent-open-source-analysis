# chrisryugj/korean-dart-mcp

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/chrisryugj/korean-dart-mcp |
| local path | sources/chrisryugj__korean-dart-mcp |
| HEAD | c1671ce |
| stars/forks | 0 / 0 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-06-11T00:18:00Z |
| trendScore / priorityScore | 76 / 158 |


## 한줄 해석

- MCP 서버/도구 표면이 있어 Claude Code/Codex류 에이전트와 직접 연결하기 좋다.
- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Korean language / Korea domain | 151 | README.md, CLAUDE.md, package.json |
| MCP / tool protocol | 140 | README.md, CLAUDE.md, package.json |
| Frontend / developer experience | 19 | README.md, package.json, src/server/mcp-server.ts |
| Spec / doc-driven workflow | 7 | src/tools/_helpers.ts |
| AI agent / tool use | 6 | README-EN.md, src/lib/xbrl-parser.ts, src/tools/get-attachments.ts |
| RAG / retrieval | 6 | README-EN.md, src/tools/search-disclosures.ts |
| LLM wiki / memory / graph | 3 | src/lib/dart-xml.ts |
| Security / compliance | 3 | CHANGELOG.md, README-EN.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, documentParsing, frontend-dx, graphMemory, korea-signal, llm-wiki-memory, mcp, rag, security-compliance, spec-driven |
| stacks | Node/TypeScript/JavaScript |
| capabilities | Graph/memory store, Document parsing/OCR |


## 구조 요약

| key | value |
| --- | --- |
| files | 49 |
| manifests | 4 |
| docs | 4 |
| tests | 0 |
| ci/ops | 0 |
| spec artifacts | 1 |
| agent instruction files | 1 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | Korean DART MCP |
| headings | Korean DART MCP / ⚡ 30초 설치 — 한 줄로 끝 / v0.9 — 무엇이 새로운가 / 💡 주식에 관심 많은 일반인이 쓸 수 있는 5가지 / 1. 내 보유종목 "경영진 눈치게임" / 2. "이 회사 회계 뭐 수상한 거 없나" / 3. "사업보고서 300쪽 읽기 싫어" / 4. "오늘 이런 공시 낸 회사 누구?" / 5. "A랑 B 중 뭐가 더 튼튼해" / 이런 사람에게 딱 |
| excerpt | Korean DART MCP OpenDART 83개 API를 15개 도구로. 공시·재무·지분·XBRL + 버핏급 애널리스트 프레임 내부자 시그널·회계 리스크·퀄리티 체크리스트 + HWP/PDF 첨부 마크다운화 를 AI 어시스턴트에서 바로 사용. ! npm version https //img.shields.io/npm/v/korean dart mcp.svg https //www.npmjs.com/package/korean dart mcp ! MCP 1.27 https //img.shields.io/badge/MCP 1.27 blue https //modelcontextprotocol.io ! License MIT https //img.shields.io/badge/License MIT yellow.svg LICENSE 금융감독원 OpenDART https //opendart.fss.or.kr/ 전자공시 기반 MCP 서버 + CLI. Claude Desktop, Cursor, Windsurf, Claude Code 등에서 바로 사용 가능. 자매 프로젝트 korean law mcp https //github.com/chrisryugj/korean law mcp 법제처 41 API → 15 도구 English documentation → README EN.md README EN.md ⚡ 30초 설치 — 한 줄로 끝 macOS / Linux |


## 주요 파일

### Manifests

- README.md
- CLAUDE.md
- package.json
- tsconfig.json


### Spec / Docs / Prompt Artifacts

- CLAUDE.md


### Agent Instruction Files

- CLAUDE.md


## 상위 디렉터리

| dir | count |
| --- | --- |
| src | 27 |
| scripts | 10 |
| .claude-plugin | 2 |
| .env.example | 1 |
| .gitignore | 1 |
| CHANGELOG.md | 1 |
| CLAUDE.md | 1 |
| LICENSE | 1 |
| package-lock.json | 1 |
| package.json | 1 |
| README-EN.md | 1 |
| README.md | 1 |
| tsconfig.json | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .ts | 27 |
| .mjs | 10 |
| .json | 5 |
| .md | 4 |
| [no-ext] | 2 |
| .example | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
