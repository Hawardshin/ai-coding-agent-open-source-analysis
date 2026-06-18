# ssuksak/cheongyak-rag-mcp

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/ssuksak/cheongyak-rag-mcp |
| local path | sources/ssuksak__cheongyak-rag-mcp |
| HEAD | 0b6e0fb |
| stars/forks | 0 / 0 |
| language | Python |
| license |  |
| pushedAt | 2026-04-22T07:11:22Z |
| trendScore / priorityScore | 68 / 119 |


## 한줄 해석

- MCP 서버/도구 표면이 있어 Claude Code/Codex류 에이전트와 직접 연결하기 좋다.
- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| MCP / tool protocol | 90 | README.md, npm/package.json, pyproject.toml |
| RAG / retrieval | 73 | README.md, npm/package.json, pyproject.toml |
| Korean language / Korea domain | 8 | README.md, npm/package.json, pyproject.toml |
| AI agent / tool use | 1 | src/rag_mcp/scraper.py |
| Frontend / developer experience | 1 | README.md |
| Spec / doc-driven workflow | 1 | README.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, documentParsing, frontend-dx, korea-signal, llmFramework, mcp, rag, spec-driven, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Vector/search store, Document parsing/OCR |


## 구조 요약

| key | value |
| --- | --- |
| files | 19 |
| manifests | 3 |
| docs | 1 |
| tests | 0 |
| ci/ops | 0 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | 🏠 Cheongyak RAG MCP |
| headings | 🏠 Cheongyak RAG MCP / 특징 / 설치 / pip (Python) / npm (Node.js 래퍼) / 소스에서 설치 / 설정 / 자동 설정 (권장) / 수동 설정 / 선택: OpenAI API 키 (RAG Q&A용) |
| excerpt | 🏠 Cheongyak RAG MCP 한국 주택청약 정보 RAG MCP 서버. 청약홈 applyhome.co.kr 실시간 데이터 + PDF/HWP 공고문 RAG 검색. English english below 특징 실시간 청약 조회 — 청약홈에서 현재 청약가능 주택 목록, 상세정보, 분양가, 공급세대 붙임파일 자동 처리 — 모집공고문 PDF 자동 다운로드 + ChromaDB 색인 RAG Q&A — 색인된 공고문 기반 질의읜 OpenAI 연동, 선택 청약 가이드 — 자격요건, 순위, 특별공급 안내 PDF/HWP 지원 — 청약공고, 붙임자료 파일 직접 색인 공공데이터포털 — data.go.kr API 연동 선택 API 키 불필요 — 기본적으로 청약홈 스크래핑으로 작동 설치 pip Python npm Node.js 래퍼 npm으로 실행하면 자동으로 Python 패키지를 설치합니다. 소스에서 설치 설정 자동 설정 권장 최초 실행 시 인터랙티브 설정 마법사가 실행됩니다 수동 설정 ~/.config/cheongyak mcp/.env 파일 생성 API 키 없이도 청약홈 스크래핑으로 모든 기능 사용 가능합니다. MCP 클라이언트 설정 OpenCode ~/.config/opencode/opencode.json Claude Desktop claude desktop config.json Cursor / 기타 MCP 클라이언트 MCP 도구 목록 실시간 청약 |


## 주요 파일

### Manifests

- README.md
- npm/package.json
- pyproject.toml


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| src | 11 |
| npm | 3 |
| .env.example | 1 |
| .gitignore | 1 |
| LICENSE | 1 |
| pyproject.toml | 1 |
| README.md | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .py | 11 |
| .js | 2 |
| [no-ext] | 2 |
| .example | 1 |
| .json | 1 |
| .md | 1 |
| .toml | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
