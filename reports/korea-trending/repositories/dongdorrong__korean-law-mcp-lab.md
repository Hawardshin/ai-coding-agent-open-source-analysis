# dongdorrong/korean-law-mcp-lab

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/dongdorrong/korean-law-mcp-lab |
| local path | sources/dongdorrong__korean-law-mcp-lab |
| HEAD | 1180973 |
| stars/forks | 0 / 0 |
| language | Shell |
| license |  |
| pushedAt | 2026-06-07T09:44:56Z |
| trendScore / priorityScore | 72 / 87 |


## 한줄 해석

- MCP 서버/도구 표면이 있어 Claude Code/Codex류 에이전트와 직접 연결하기 좋다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| MCP / tool protocol | 80 | README.md, docs/korean-law-mcp-guide.md, docs/integrated-practice.md |
| Korean language / Korea domain | 61 | README.md, docs/korean-law-mcp-guide.md, docs/integrated-practice.md |
| Frontend / developer experience | 2 | docs/korean-law-mcp-guide.md, docs/repo-crawl-report.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | example-rich, frontend-dx, korea-signal, mcp |
| stacks | docs/awesome-list |
| capabilities |  |


## 구조 요약

| key | value |
| --- | --- |
| files | 8 |
| manifests | 1 |
| docs | 5 |
| tests | 0 |
| ci/ops | 0 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | Korean Law MCP Lab |
| headings | Korean Law MCP Lab / 원본 저장소 / 로컬 구조 / 빠른 시작 / 1. legalize-kr 데이터 확인 / 2. korean-law-mcp CLI 확인 / 3. MCP HTTP 서버 확인 / 문서 / 현재 검증 상태 / 권장 다음 작업 |
| excerpt | Korean Law MCP Lab 검토일 2026 06 07 이 랩은 legalize kr/legalize kr 와 chrisryugj/korean law mcp 를 함께 실습하기 위한 작업 공간입니다. 목표는 한국 법령 데이터를 Git으로 탐색하는 방법과, 법제처 OpenAPI 기반 MCP/CLI 도구를 AI 클라이언트에서 활용하는 방법을 한 곳에서 비교해 보는 것입니다. 주의 이 저장소의 결과물은 개발/리서치 실습용입니다. 실제 법률 판단이나 사건 대응에는 최신 원문 확인과 전문가 검토가 필요합니다. 원본 저장소 저장소 로컬 경로 역할 https //github.com/legalize kr/legalize kr upstreams/legalize kr 대한민국 법령 Markdown 데이터와 Git 개정 이력 https //github.com/chrisryugj/korean law mcp upstreams/korean law mcp 법제처 OpenAPI 기반 MCP 서버 및 CLI 로컬 구조 빠른 시작 원본 저장소 클론은 용량과 중첩 Git 이슈를 피하기 위해 이 랩 저장소에 커밋하지 않습니다. 새 환경에서 시작할 때는 먼저 bootstrap 스크립트를 실행하세요. 1. legalize kr 데이터 확인 2. korean law mcp CLI 확인 실제 법제처 API 호출은 LAW OC 가 필요합니다. 3. MCP HTTP 서버 확인 |


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
| docs | 4 |
| .gitignore | 1 |
| examples | 1 |
| README.md | 1 |
| scripts | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .md | 5 |
| .example | 1 |
| .sh | 1 |
| [no-ext] | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
