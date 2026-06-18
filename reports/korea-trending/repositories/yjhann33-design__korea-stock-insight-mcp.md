# yjhann33-design/korea-stock-insight-mcp

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/yjhann33-design/korea-stock-insight-mcp |
| local path | sources/yjhann33-design__korea-stock-insight-mcp |
| HEAD | 7084e6c |
| stars/forks | 0 / 0 |
| language | Python |
| license |  |
| pushedAt | 2026-05-20T12:05:19Z |
| trendScore / priorityScore | 69 / 106 |


## 한줄 해석

- MCP 서버/도구 표면이 있어 Claude Code/Codex류 에이전트와 직접 연결하기 좋다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Korean language / Korea domain | 79 | README.md, pyproject.toml, SPEC.md |
| MCP / tool protocol | 74 | README.md, pyproject.toml, SPEC.md |
| Frontend / developer experience | 4 | SPEC.md |
| LLM wiki / memory / graph | 1 | README.md |
| Spec / doc-driven workflow | 1 |  |


## 분류와 스택

| key | value |
| --- | --- |
| categories | coding-agent, frontend-dx, graphMemory, korea-signal, llm-wiki-memory, llmFramework, mcp, spec-driven |
| stacks | Python |
| capabilities | LLM/app framework, Graph/memory store |


## 구조 요약

| key | value |
| --- | --- |
| files | 12 |
| manifests | 2 |
| docs | 2 |
| tests | 0 |
| ci/ops | 0 |
| spec artifacts | 1 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | Korea Stock Insight MCP |
| headings | Korea Stock Insight MCP / What you get / Why English-first matters / Quick start (Claude Desktop) / 1. Get a free DART API key / 2. Add to your Claude Desktop config / 3. Restart Claude Desktop and try / Sample queries (30 seconds, copy-paste into Claude) / 1. Memory-cycle peer comparison / 2. Disclosure radar before a catalyst |
| excerpt | Korea Stock Insight MCP mcp name io.github.yjhann33 design/korea stock insight mcp ! PyPI https //img.shields.io/pypi/v/korea stock insight mcp https //pypi.org/project/korea stock insight mcp/ ! License MIT https //img.shields.io/badge/License MIT yellow.svg https //opensource.org/licenses/MIT English first MCP — built for global LLM analysts, not Korean fluency speakers. Drop in for Claude Desktop, Cursor, Cline, and any MCP compatible client https //modelcontextprotocol.io/clients . Ask in English, get Korean filings, financials, and KOSPI/KOSDAQ prices in one tool call chain — DART corp code lookup, disclosures, XBRL statements, daily OHLCV. What you get Tool What it does get today date |


## 주요 파일

### Manifests

- README.md
- pyproject.toml


### Spec / Docs / Prompt Artifacts

- SPEC.md


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| .env.example | 1 |
| .gitignore | 1 |
| dart.py | 1 |
| krx.py | 1 |
| LICENSE | 1 |
| pyproject.toml | 1 |
| README.md | 1 |
| scripts | 1 |
| server.json | 1 |
| server.py | 1 |
| SPEC.md | 1 |
| test_smoke.py | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .py | 5 |
| .md | 2 |
| [no-ext] | 2 |
| .example | 1 |
| .json | 1 |
| .toml | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
