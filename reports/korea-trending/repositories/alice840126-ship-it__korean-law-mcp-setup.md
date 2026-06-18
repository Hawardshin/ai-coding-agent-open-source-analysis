# alice840126-ship-it/korean-law-mcp-setup

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/alice840126-ship-it/korean-law-mcp-setup |
| local path | sources/alice840126-ship-it__korean-law-mcp-setup |
| HEAD | 4db8aa8 |
| stars/forks | 0 / 0 |
| language |  |
| license |  |
| pushedAt | 2026-04-06T03:59:03Z |
| trendScore / priorityScore | 68 / 76 |


## 한줄 해석

- MCP 서버/도구 표면이 있어 Claude Code/Codex류 에이전트와 직접 연결하기 좋다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Korean language / Korea domain | 9 | README.md, settings-snippet.json, 법령-command.md |
| MCP / tool protocol | 9 | README.md, settings-snippet.json, 법령-command.md |
| Spec / doc-driven workflow | 1 | README.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | coding-agent, korea-signal, mcp, spec-driven |
| stacks | docs/awesome-list |
| capabilities |  |


## 구조 요약

| key | value |
| --- | --- |
| files | 3 |
| manifests | 1 |
| docs | 2 |
| tests | 0 |
| ci/ops | 0 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | Korean Law MCP — Claude Code 세팅 가이드 |
| headings | Korean Law MCP — Claude Code 세팅 가이드 / 현재 상태 / Step 1. npm 설치 (완료) / Step 2. API 키 발급 / Step 3. settings.json 추가 (API 키 받으면) / 사용법 / 슬래시 명령어 / 자연어 (그냥 말해도 됨) / 참고 |
| excerpt | Korean Law MCP — Claude Code 세팅 가이드 한국 법령·판례 검색 MCP를 Claude Code에 연동하는 설정 파일 모음입니다. 현재 상태 x npm 전역 설치 완료 npm install g korean law mcp x /법령 슬래시 명령어 생성 ~/.claude/commands/법령.md x CLAUDE.md 자연어 트리거 추가 API 키 발급 대기 중 1~2일 소요 settings.json 연동 API 키 받으면 바로 추가 Step 1. npm 설치 완료 Step 2. API 키 발급 👉 법제처 오픈API 신청 https //open.law.go.kr/LSO/openApi/guideList.do 무료, 약 1~2일 소요 발급 후 OC 값을 복사해둘 것 Step 3. settings.json 추가 API 키 받으면 ~/.claude/settings.json 의 mcpServers 안에 아래 블록 추가 사용법 슬래시 명령어 자연어 그냥 말해도 됨 참고 원본 MCP https //github.com/chrisryugj/korean law mcp 제공 도구 89개 법령, 판례, 행정규칙, 조례, 조약 등 법제처 데이터베이스 기반 |


## 주요 파일

### Manifests

- README.md


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| README.md | 1 |
| settings-snippet.json | 1 |
| 법령-command.md | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .md | 2 |
| .json | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
