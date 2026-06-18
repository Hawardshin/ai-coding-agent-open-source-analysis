# SonAIengine/ku-portal-mcp

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/SonAIengine/ku-portal-mcp |
| local path | sources/SonAIengine__ku-portal-mcp |
| HEAD | 588d6b6 |
| stars/forks | 0 / 0 |
| language | Python |
| license |  |
| pushedAt | 2026-06-07T12:17:58Z |
| trendScore / priorityScore | 72 / 138 |


## 한줄 해석

- MCP 서버/도구 표면이 있어 Claude Code/Codex류 에이전트와 직접 연결하기 좋다.
- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| MCP / tool protocol | 93 | README.md, CLAUDE.md, pyproject.toml |
| Korean language / Korea domain | 59 | README.md, pyproject.toml, ku_portal_mcp/academic.py |
| Security / compliance | 20 | ku_portal_mcp/lms.py, CHANGELOG.md |
| RAG / retrieval | 10 | ku_portal_mcp/courses.py, ku_portal_mcp/grades.py, ku_portal_mcp/lms.py |
| AI agent / tool use | 8 | ku_portal_mcp/auth.py, ku_portal_mcp/dept_notices.py, ku_portal_mcp/library.py |
| LLM wiki / memory / graph | 3 | CHANGELOG.md, examples/commands/ku.md |
| Spec / doc-driven workflow | 2 | examples/commands/ku.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, documentParsing, example-rich, graphMemory, korea-signal, llm-wiki-memory, mcp, rag, security-compliance, spec-driven |
| stacks | Python |
| capabilities | Graph/memory store, Document parsing/OCR |


## 구조 요약

| key | value |
| --- | --- |
| files | 35 |
| manifests | 3 |
| docs | 9 |
| tests | 7 |
| ci/ops | 0 |
| spec artifacts | 1 |
| agent instruction files | 1 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | ku-portal-mcp |
| headings | ku-portal-mcp / 이런 걸 할 수 있어요 / 1. 공지사항 / 학사일정 / 장학공지 / 2. 도서관 좌석 현황 (로그인 불필요) / 3. 수업시간표 + ICS 내보내기 / 4. 내 수강신청 내역 / 5. 전체 성적 / 누적 GPA / 취득학점 / 6. 개설과목 검색 + 강의계획서 / 7. 강의실 시간표 — "이 강의실 오늘 비었나?" / 8. Canvas LMS — 수강과목 / 과제 / 강의자료 |
| excerpt | <p align="center" <img alt="Korea University" src="https //upload.wikimedia.org/wikipedia/commons/thumb/7/74/Korea University logotype %28English version%29.svg/320px Korea University logotype %28English version%29.svg.png" width="320" / </p ku portal mcp ! PyPI version https //img.shields.io/pypi/v/ku portal mcp.svg https //pypi.org/project/ku portal mcp/ ! Python https //img.shields.io/pypi/pyversions/ku portal mcp.svg https //pypi.org/project/ku portal mcp/ ! License MIT https //img.shields.io/badge/License MIT yellow.svg https //opensource.org/licenses/MIT 고려대학교 KUPID 포털 MCP 서버 — Claude Code에서 대학 생활에 필요한 정보를 바로 조회 "공지사항 보여줘", "도서관 빈자리 있어?", "이번 주 과제 뭐 있어?" 같은 자연어로 포털과 LMS를 사용할 수 있습니다. <t |


## 주요 파일

### Manifests

- README.md
- CLAUDE.md
- pyproject.toml


### Spec / Docs / Prompt Artifacts

- CLAUDE.md


### Agent Instruction Files

- CLAUDE.md


## 상위 디렉터리

| dir | count |
| --- | --- |
| ku_portal_mcp | 14 |
| tests | 7 |
| .github | 3 |
| .env.example | 1 |
| .gitignore | 1 |
| CHANGELOG.md | 1 |
| CLAUDE.md | 1 |
| CONTRIBUTING.md | 1 |
| examples | 1 |
| EXAMPLES.md | 1 |
| LICENSE | 1 |
| pyproject.toml | 1 |
| README.md | 1 |
| run.py | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .py | 22 |
| .md | 9 |
| [no-ext] | 2 |
| .example | 1 |
| .toml | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
