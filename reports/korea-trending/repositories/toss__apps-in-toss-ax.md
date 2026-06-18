# toss/apps-in-toss-ax

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/toss/apps-in-toss-ax |
| local path | sources/toss__apps-in-toss-ax |
| HEAD | 72412bb |
| stars/forks | 16 / 6 |
| language | Go |
| license |  |
| pushedAt | 2026-06-09T08:09:29Z |
| trendScore / priorityScore | 93 / 243 |


## 한줄 해석

- MCP 서버/도구 표면이 있어 Claude Code/Codex류 에이전트와 직접 연결하기 좋다.
- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Korean language / Korea domain | 204 | README.md, CLAUDE.md, go.mod |
| MCP / tool protocol | 162 | README.md, CLAUDE.md, go.mod |
| Frontend / developer experience | 100 | README.md, CLAUDE.md, go.mod |
| AI agent / tool use | 16 | CLAUDE.md, package.json, pkg/mcp/instructions.md |
| RAG / retrieval | 7 | CLAUDE.md, pkg/mcp/instructions.md, pkg/mcp/tools_get_doc.go |
| Spec / doc-driven workflow | 2 | CLAUDE.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, frontend-dx, korea-signal, localRuntime, mcp, rag, spec-driven, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Go, Ruby |
| capabilities | Vector/search store, Local runtime |


## 구조 요약

| key | value |
| --- | --- |
| files | 56 |
| manifests | 6 |
| docs | 6 |
| tests | 6 |
| ci/ops | 1 |
| spec artifacts | 1 |
| agent instruction files | 1 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | AX (AppsInToss eXperience) |
| headings | AX (AppsInToss eXperience) / 주요 기능 / MCP Tools / 지원 문서 / 설치 / Homebrew (macOS/Linux) / Scoop (Windows) / npm / 사용법 / MCP 서버 시작 |
| excerpt | AX AppsInToss eXperience AI 어시스턴트가 AppsInToss 미니앱 개발을 도울 수 있도록 설계된 MCP Model Context Protocol 서버입니다. 주요 기능 AX는 AI 어시스턴트에게 AppsInToss Developer Center의 문서와 예제를 제공하여, 토스 미니앱 개발에 대한 정확하고 컨텍스트 기반의 지원을 가능하게 합니다. MCP Tools 도구 설명 search docs AppsInToss 문서 검색 get doc 검색 결과의 문서 전체 내용 조회 search tds rn docs TDS React Native 문서 검색 get tds rn doc TDS React Native 문서 전체 내용 조회 search tds web docs TDS Web 문서 검색 get tds web doc TDS Web 문서 전체 내용 조회 list examples 코드 예제 목록 조회 get example 특정 예제 코드 조회 지원 문서 AppsInToss Developer Center 미니앱 개발 가이드 TDS React Native 토스 디자인 시스템 React Native TDS Web 토스 디자인 시스템 WebView 코드 예제 실제 구현 예제 모음 설치 Homebrew macOS/Linux Scoop Windows npm 사용법 MCP 서버 시작 Cursor/Claude에서 사용 ! Install |


## 주요 파일

### Manifests

- README.md
- CLAUDE.md
- go.mod
- Makefile
- package.json
- go.sum


### Spec / Docs / Prompt Artifacts

- CLAUDE.md


### Agent Instruction Files

- CLAUDE.md


## 상위 디렉터리

| dir | count |
| --- | --- |
| pkg | 29 |
| cmd | 7 |
| tools | 5 |
| internal | 3 |
| .agents | 1 |
| .github | 1 |
| .gitignore | 1 |
| .goreleaser.yaml | 1 |
| CLAUDE.md | 1 |
| go.mod | 1 |
| go.sum | 1 |
| main.go | 1 |
| Makefile | 1 |
| package.json | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .go | 41 |
| .md | 5 |
| .json | 2 |
| [no-ext] | 2 |
| .js | 1 |
| .mod | 1 |
| .rb | 1 |
| .sum | 1 |
| .yaml | 1 |
| .yml | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
