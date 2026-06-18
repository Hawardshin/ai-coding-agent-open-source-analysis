# z0nam/korea-rio-mcp

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/z0nam/korea-rio-mcp |
| local path | sources/z0nam__korea-rio-mcp |
| HEAD | 90e6034 |
| stars/forks | 0 / 0 |
| language | Python |
| license |  |
| pushedAt | 2026-05-25T09:54:59Z |
| trendScore / priorityScore | 69 / 109 |


## 한줄 해석

- MCP 서버/도구 표면이 있어 Claude Code/Codex류 에이전트와 직접 연결하기 좋다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| MCP / tool protocol | 88 | README.md, pyproject.toml, src/rio_mcp/__init__.py |
| Korean language / Korea domain | 72 | README.md, pyproject.toml, src/rio_mcp/__init__.py |
| Security / compliance | 16 | README.md, src/rio_mcp/engine/effects.py, src/rio_mcp/server.py |
| AI agent / tool use | 1 | src/rio_mcp/data_source/bok.py |
| Spec / doc-driven workflow | 1 | STATUS.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, korea-signal, mcp, security-compliance, spec-driven |
| stacks | Python |
| capabilities |  |


## 구조 요약

| key | value |
| --- | --- |
| files | 47 |
| manifests | 2 |
| docs | 7 |
| tests | 3 |
| ci/ops | 0 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | korea-rio-mcp |
| headings | korea-rio-mcp / What it does / Install / From GitHub (recommended for end users): / From a local checkout (development): / Tools / MCP client config / Adding a new region / Data note / Tests |
| excerpt | English 한국어 README.ko.md korea rio mcp Regional Input Output RIO economic impact analysis as a cross platform MCP server . Computes production / value added / employment induced effects split in region vs out of region for an economic event in any Korean region, using Bank of Korea regional input output tables. Works with Claude Code, Codex, and Gemini CLI over stdio. Generalized from the 26p17 Seogwipo festival impact study; the Jeju 2020 table ships as a validated golden case. 🔰 New to this / not an AI power user? Start with the beginner walkthrough ONBOARDING.md ONBOARDING.md Korean, step by step . Unlike data access MCP servers e.g. OECD MCP, bcrp mcp that fetch published statistics, ko |


## 주요 파일

### Manifests

- README.md
- pyproject.toml


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| src | 32 |
| data | 4 |
| tests | 3 |
| .gitignore | 1 |
| LICENSE | 1 |
| ONBOARDING.md | 1 |
| pyproject.toml | 1 |
| README.ko.md | 1 |
| README.md | 1 |
| scripts | 1 |
| STATUS.md | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .csv | 22 |
| .py | 17 |
| .md | 5 |
| [no-ext] | 2 |
| .toml | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
