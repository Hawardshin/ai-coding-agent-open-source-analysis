# adminhelper/saju-engine

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/adminhelper/saju-engine |
| local path | sources/adminhelper__saju-engine |
| HEAD | a2242ed |
| stars/forks | 0 / 0 |
| language | JavaScript |
| license |  |
| pushedAt | 2026-05-30T07:05:10Z |
| trendScore / priorityScore | 69 / 102 |


## 한줄 해석

- MCP 서버/도구 표면이 있어 Claude Code/Codex류 에이전트와 직접 연결하기 좋다.
- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| MCP / tool protocol | 117 | README.md, mcp/package.json, test/smoke-mcp.mjs |
| Korean language / Korea domain | 3 | README.md, mcp/package.json, .claude-plugin/plugin.json |
| RAG / retrieval | 2 | mcp/server.mjs |
| LLM wiki / memory / graph | 1 | mcp/lib/constants.mjs |


## 분류와 스택

| key | value |
| --- | --- |
| categories | coding-agent, data-ml, example-rich, korea-signal, llm-wiki-memory, mcp, rag |
| stacks | Node/TypeScript/JavaScript |
| capabilities |  |


## 구조 요약

| key | value |
| --- | --- |
| files | 22 |
| manifests | 2 |
| docs | 4 |
| tests | 2 |
| ci/ops | 0 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | 🔮 saju-engine |
| headings | 🔮 saju-engine / 목차 / ✨ 특징 / 🚀 빠른 시작 / (선택) 잘 도는지 확인 — 설치 불필요, Node 18+ 만 있으면 됨 / 📦 설치 / (A) Claude Code 플러그인으로 — 권장 / (B) MCP 서버만 단독 등록 / 💬 사용법 / 개인 사주 |
| excerpt | <div align="center" 🔮 saju engine 양력 생년월일시·성별만으로 30년 역술가 수준의 사주 四柱 ·궁합 보고서를 단청 丹靑 HTML로 만들어 주는 Claude Code 플러그인 A deterministic Korean Four Pillars Saju / 四柱 report generator for Claude Code — calculation engine + MCP server + diviner persona skill. ! License MIT https //img.shields.io/github/license/adminhelper/saju engine?color=green LICENSE ! Node ≥ 18 https //img.shields.io/badge/node %E2%89%A518 339933?logo=node.js&logoColor=white https //nodejs.org ! Zero dependencies https //img.shields.io/badge/dependencies 0 success ! Claude Code plugin https //img.shields.io/badge/Claude%20Code plugin 6E40C9 ! PRs welcome https //img.shields.io/badge/PRs welcome brightgreen CONTRIBUTING.md <img sr |


## 주요 파일

### Manifests

- README.md
- mcp/package.json


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| mcp | 9 |
| templates | 2 |
| test | 2 |
| .claude-plugin | 1 |
| .gitignore | 1 |
| .mcp.json | 1 |
| CONTRIBUTING.md | 1 |
| examples | 1 |
| LICENSE | 1 |
| README.md | 1 |
| skills | 1 |
| UPDATE.md | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .mjs | 10 |
| .md | 4 |
| .html | 3 |
| .json | 3 |
| [no-ext] | 2 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
