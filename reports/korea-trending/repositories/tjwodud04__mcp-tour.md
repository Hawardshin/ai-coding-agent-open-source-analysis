# tjwodud04/mcp-tour

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/tjwodud04/mcp-tour |
| local path | sources/tjwodud04__mcp-tour |
| HEAD | 8712ff7 |
| stars/forks | 0 / 0 |
| language | Python |
| license |  |
| pushedAt | 2026-06-17T01:58:43Z |
| trendScore / priorityScore | 73 / 102 |


## 한줄 해석

- MCP 서버/도구 표면이 있어 Claude Code/Codex류 에이전트와 직접 연결하기 좋다.
- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| MCP / tool protocol | 38 | README.md, pyproject.toml, mcp_tour/server.py |
| Korean language / Korea domain | 16 | README.md, pyproject.toml, mcp_tour/server.py |
| RAG / retrieval | 1 | README.md |
| Spec / doc-driven workflow | 1 |  |


## 분류와 스택

| key | value |
| --- | --- |
| categories | coding-agent, korea-signal, mcp, rag, spec-driven |
| stacks | Python |
| capabilities |  |


## 구조 요약

| key | value |
| --- | --- |
| files | 11 |
| manifests | 3 |
| docs | 1 |
| tests | 0 |
| ci/ops | 0 |
| spec artifacts | 1 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | Method 1: Using environment variables directly |
| headings | Description / Features / Data Source / Setup / Installation / Regular Installation / Claude Desktop Installation / Method 1: Using environment variables directly / Method 2: Using .env file / Method 1: Using environment variables directly |
| excerpt | MCP integration for Korea Tourism Organization's API using Claude Desktop App with help from Cursor. Example Using Tourism API in Claude Desktop App <div align="center" <img src="https //github.com/user attachments/assets/a5cd8ee6 e05a 4fdb 96bc ceaffaca1a2e" width="500" style="margin right 300px;" / <img src="https //github.com/user attachments/assets/f84e9c7c 89a4 4799 a568 9e942630ef1a" width="500" / </div Description This MCP server integrates the Korea Tourism Organization's public data API to provide related tourist spots information. It is designed to be used with Claude Desktop via the Model Context Protocol MCP . Features Retrieve related tourist spot recommendations Get detailed to |


## 주요 파일

### Manifests

- README.md
- pyproject.toml
- requirements.txt


### Spec / Docs / Prompt Artifacts

- requirements.txt


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| mcp_tour | 5 |
| .env.example | 1 |
| .gitignore | 1 |
| .python-version | 1 |
| pyproject.toml | 1 |
| README.md | 1 |
| requirements.txt | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .py | 5 |
| [no-ext] | 2 |
| .example | 1 |
| .md | 1 |
| .toml | 1 |
| .txt | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
