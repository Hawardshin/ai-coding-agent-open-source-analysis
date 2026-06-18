# sodam-ai/Langent-MCP_One-Click_Kit

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/sodam-ai/Langent-MCP_One-Click_Kit |
| local path | sources/sodam-ai__Langent-MCP_One-Click_Kit |
| HEAD | 5fffb4a |
| stars/forks | 0 / 0 |
| language | Batchfile |
| license |  |
| pushedAt | 2026-06-16T14:27:33Z |
| trendScore / priorityScore | 93 / 143 |


## 한줄 해석

- MCP 서버/도구 표면이 있어 Claude Code/Codex류 에이전트와 직접 연결하기 좋다.
- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| MCP / tool protocol | 144 | README.md, README.ko.md, USER_GUIDE.md |
| Korean language / Korea domain | 9 | README.md, USER_GUIDE.md |
| Security / compliance | 7 | README.md, USER_GUIDE.md |
| RAG / retrieval | 5 | README.md, USER_GUIDE.md |
| LLM wiki / memory / graph | 3 | README.md, USER_GUIDE.md |
| Spec / doc-driven workflow | 3 | README.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | coding-agent, context-engineering, graphMemory, korea-signal, llm-wiki-memory, mcp, rag, security-compliance, spec-driven, vectorSearch |
| stacks | docs/awesome-list |
| capabilities | Vector/search store, Graph/memory store |


## 구조 요약

| key | value |
| --- | --- |
| files | 9 |
| manifests | 1 |
| docs | 4 |
| tests | 0 |
| ci/ops | 0 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | Langent MCP — One-Click Install/Run Kit (Windows) |
| headings | Langent MCP — One-Click Install/Run Kit (Windows) / 📑 Table of Contents / What is Langent? / How it works (at a glance) / File layout / Requirements (what you need) / ⬇️ How to download / Option A — Download as ZIP (easiest, no Git needed) / Option B — Clone with Git (if you have Git) / ⚡ Quick Start |
| excerpt | Langent MCP — One Click Install/Run Kit Windows Make the documents on your PC PDF, TXT, MD, etc. readable and searchable by AI, and see them clustered as stars in a 3D "knowledge nebula." Install with one double click, then connect it to AI tools Claude Desktop, Antigravity, Claude Code, Cursor and say "find ○○ in my documents." <div align="right" <a href="./README.md" 🇺🇸 English</a &nbsp; &nbsp; <a href="./README.ko.md" 🇰🇷 한국어</a </div ! Python https //img.shields.io/badge/Python 3.10%2B yellow?logo=python https //www.python.org/downloads/ ! Platform https //img.shields.io/badge/Platform Windows%2010%2F11 0078D4?logo=windows https //www.microsoft.com/windows ! License https //img.shield |


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
| .gitignore | 1 |
| INSTALL.bat | 1 |
| LICENSE | 1 |
| README.ko.md | 1 |
| README.md | 1 |
| RUN.bat | 1 |
| UNINSTALL.bat | 1 |
| USER_GUIDE.md | 1 |
| 사용설명서.md | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .md | 4 |
| .bat | 3 |
| [no-ext] | 2 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
