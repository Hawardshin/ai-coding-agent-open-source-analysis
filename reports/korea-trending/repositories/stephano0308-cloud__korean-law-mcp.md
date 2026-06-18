# stephano0308-cloud/korean-law-mcp

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/stephano0308-cloud/korean-law-mcp |
| local path | sources/stephano0308-cloud__korean-law-mcp |
| HEAD | 1fc52c2 |
| stars/forks | 0 / 0 |
| language | Python |
| license |  |
| pushedAt | 2026-05-23T12:16:00Z |
| trendScore / priorityScore | 72 / 119 |


## 한줄 해석

- MCP 서버/도구 표면이 있어 Claude Code/Codex류 에이전트와 직접 연결하기 좋다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| MCP / tool protocol | 82 | README.md, gpts/national-civil-service-hr/README.md, Dockerfile |
| Korean language / Korea domain | 30 | README.md, gpts/national-civil-service-hr/README.md, Dockerfile |
| Spec / doc-driven workflow | 8 | README.md, gpts/national-civil-service-hr/README.md, Dockerfile |
| AI agent / tool use | 3 | src/mpm_law_catalog.py, test_gemini.py |
| LLM wiki / memory / graph | 1 | USAGE_GUIDE.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, documentParsing, korea-signal, llm-wiki-memory, llmFramework, mcp, spec-driven |
| stacks | Python |
| capabilities | LLM/app framework, Document parsing/OCR |


## 구조 요약

| key | value |
| --- | --- |
| files | 27 |
| manifests | 5 |
| docs | 6 |
| tests | 0 |
| ci/ops | 1 |
| spec artifacts | 1 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | 🏛️ 한국 법률/판례 검색 MCP 서버 |
| headings | 🏛️ 한국 법률/판례 검색 MCP 서버 / ✨ 주요 기능 / 🔍 법령 검색 / ⚖️ 판례 검색 / 📋 행정규칙 검색 / 🚀 성능 최적화 / 🎯 활용 사례 / 법률 전문가 / 기업 법무팀 / 스타트업/개발자 |
| excerpt | 🏛️ 한국 법률/판례 검색 MCP 서버 국가법령정보센터 Open API 를 활용한 고성능 MCP Model Context Protocol 서버입니다. AI 에이전트 Claude Desktop, Cursor 등 가 실시간으로 한국 법령, 판례, 행정규칙을 검색하고 분석할 수 있도록 합니다. ✨ 주요 기능 🔍 법령 검색 키워드 기반 법령 검색 민법, 상법, 근로기준법 등 다양한 법령 검색 법령 상세 조회 특정 법령의 전문 조문 및 상세 정보 조회 법령 기본 정보 소관부처, 공포일자, 시행일자, 개정 정보 포함 ⚖️ 판례 검색 판례 키워드 검색 손해배상, 계약, 부당해고 등 판례 검색 판례 상세 조회 판결요지, 판시사항, 판례 전문 조회 법원 필터링 대법원, 헌법재판소 등 법원별 필터링 지원 참조조문/판례 관련 법령 및 참조 판례 정보 제공 📋 행정규칙 검색 행정규칙 검색 각 부처의 행정규칙 검색 소관부처 정보 제정일자, 시행일자 등 상세 정보 🚀 성능 최적화 전략적 캐싱 법령/판례 데이터를 24시간 캐싱하여 API 호출 최소화 빠른 응답 속도 캐시 기반 즉시 응답 안정적인 운영 에러 핸들링 및 로깅 시스템 🎯 활용 사례 법률 전문가 계약서 검토 AI가 계약서를 분석하고 관련 법령 및 판례를 자동 참조 법률 자문 특정 사안에 대한 관련 법령 및 판례를 즉시 조회 판례 연구 유사 판례를 빠르게 검색하고 비교 분석 기업 법무팀 기업 |


## 주요 파일

### Manifests

- README.md
- gpts/national-civil-service-hr/README.md
- Dockerfile
- pyproject.toml
- requirements.txt


### Spec / Docs / Prompt Artifacts

- requirements.txt


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| src | 10 |
| gpts | 2 |
| .env.example | 1 |
| .gitignore | 1 |
| CHANGELOG.md | 1 |
| claude_desktop_config.json | 1 |
| Dockerfile | 1 |
| pyproject.toml | 1 |
| QUICK_START.md | 1 |
| README.md | 1 |
| requirements.txt | 1 |
| restart_server.ps1 | 1 |
| restart_server.sh | 1 |
| run_server.py | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .py | 13 |
| .md | 6 |
| [no-ext] | 2 |
| .example | 1 |
| .json | 1 |
| .ps1 | 1 |
| .sh | 1 |
| .toml | 1 |
| .txt | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
