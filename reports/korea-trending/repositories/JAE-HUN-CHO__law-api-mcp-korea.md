# JAE-HUN-CHO/law-api-mcp-korea

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/JAE-HUN-CHO/law-api-mcp-korea |
| local path | sources/JAE-HUN-CHO__law-api-mcp-korea |
| HEAD | 3572432 |
| stars/forks | 0 / 0 |
| language | Python |
| license |  |
| pushedAt | 2026-04-18T06:37:32Z |
| trendScore / priorityScore | 68 / 115 |


## 한줄 해석

- MCP 서버/도구 표면이 있어 Claude Code/Codex류 에이전트와 직접 연결하기 좋다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| MCP / tool protocol | 39 | AGENTS.md, README.md, pyproject.toml |
| Korean language / Korea domain | 9 | README.md, pyproject.toml |
| Spec / doc-driven workflow | 8 | tests/test_mcp_server_improvements.py |
| AI agent / tool use | 1 |  |
| Security / compliance | 1 | AGENTS.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, documentParsing, korea-signal, mcp, sdk-api, security-compliance, spec-driven |
| stacks | Python |
| capabilities | Document parsing/OCR |


## 구조 요약

| key | value |
| --- | --- |
| files | 629 |
| manifests | 5 |
| docs | 389 |
| tests | 16 |
| ci/ops | 0 |
| spec artifacts | 1 |
| agent instruction files | 1 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | law-api-mcp-korea |
| headings | law-api-mcp-korea / 설치 / 설정 / 또는 / 주요 기능 / 법령 약어 자동 해석 / 판례·결정례 통합 검색 (`search_decisions`) / AI 법령 인용 검증 (`verify_citations`) / 빠른 사용 (CLI) / API 카탈로그 탐색 |
| excerpt | law api mcp korea 법제처 국가법령정보 공동활용 OPEN API를 감싸는 CLI + MCP 서버 Python 패키지입니다. 191개 API 문서를 정본으로 유지하면서, 법령 약어 해석·판례 통합 검색·AI 인용 검증 기능을 추가로 제공합니다. 공식 배포 채널 GitHub Releases only PyPI 미지원 설치 공개 배포용 wheel wheel 파일은 GitHub Releases https //github.com/JAE HUN CHO/law api mcp korea/releases 에서 내려받습니다. 로컬 개발용 설정 법제처 OPEN API는 OC 사용자 이메일 ID 파라미터가 필수입니다. 환경변수 기본값 설명 LAW API OC — API 인증키 이메일 ID LAW API TIMEOUT 30 요청 타임아웃 초 LAW API FORCE HTTPS — true / 1 이면 http → https 강제 변환 .env 는 로컬 전용이며 저장소에 커밋하지 않습니다. 주요 기능 법령 약어 자동 해석 search current law , list apis , search decisions 등에서 약어를 정식 법령명으로 자동 변환합니다. 판례·결정례 통합 검색 search decisions 9개 도메인을 하나의 도구로 검색합니다. 코드 또는 한국어 약어를 모두 지원합니다. 코드 한국어 약어 도메인 prec 판례, 대법원 대법원 |


## 주요 파일

### Manifests

- api/docs/README.md
- src/law_api_mcp_korea/api_docs/README.md
- AGENTS.md
- README.md
- pyproject.toml


### Spec / Docs / Prompt Artifacts

- AGENTS.md


### Agent Instruction Files

- AGENTS.md


## 상위 디렉터리

| dir | count |
| --- | --- |
| src | 405 |
| api | 192 |
| tests | 16 |
| tools | 6 |
| reports | 4 |
| .gitignore | 1 |
| AGENTS.md | 1 |
| law_openapi_mcp_evaluation.xml | 1 |
| LICENSE | 1 |
| pyproject.toml | 1 |
| README.md | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .md | 389 |
| .json | 198 |
| .py | 36 |
| [no-ext] | 2 |
| .csv | 1 |
| .toml | 1 |
| .typed | 1 |
| .xml | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
