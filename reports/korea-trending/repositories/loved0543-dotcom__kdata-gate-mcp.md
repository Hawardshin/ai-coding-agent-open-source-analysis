# loved0543-dotcom/kdata-gate-mcp

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/loved0543-dotcom/kdata-gate-mcp |
| local path | sources/loved0543-dotcom__kdata-gate-mcp |
| HEAD | 35c1d8a |
| stars/forks | 0 / 0 |
| language | JavaScript |
| license |  |
| pushedAt | 2026-06-12T17:49:22Z |
| trendScore / priorityScore | 73 / 101 |


## 한줄 해석

- MCP 서버/도구 표면이 있어 Claude Code/Codex류 에이전트와 직접 연결하기 좋다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Korean language / Korea domain | 29 | README.md, package.json, server.json |
| MCP / tool protocol | 26 | README.md, package.json, .github/workflows/publish-mcp.yml |
| AI agent / tool use | 10 | README.md, package.json, server.json |
| Frontend / developer experience | 3 | package.json, server.mjs |
| Security / compliance | 3 | README.md, .github/workflows/publish-mcp.yml |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, frontend-dx, korea-signal, mcp, security-compliance |
| stacks | Node/TypeScript/JavaScript |
| capabilities |  |


## 구조 요약

| key | value |
| --- | --- |
| files | 5 |
| manifests | 2 |
| docs | 1 |
| tests | 0 |
| ci/ops | 1 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | K-Data Gate MCP Server |
| headings | K-Data Gate MCP Server / Quick start / Free pilot key (full responses, 100 calls/month) / Who is this for / Status / License |
| excerpt | K Data Gate MCP Server Korean market data for AI agents — in English JSON. 13 tools covering Products — search Korean products incl. K beauty, K food, K pop merch search korean products Trends — Naver search trend indices, viral detection for keywords like buldak or sunscreen get korea trends Stocks — prices, fundamentals, DART disclosures, investor flows, screeners 5 tools Real estate — apartment transactions from MOLIT get korea real estate Companies, FX/macro, tourism, weather Backed by the K Data Gate API https //kdata gate.vercel.app docs https //kdata gate.vercel.app/docs , OpenAPI https //kdata gate.vercel.app/openapi.json , llms.txt https //kdata gate.vercel.app/llms.txt . Quick star |


## 주요 파일

### Manifests

- README.md
- package.json


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| .github | 1 |
| package.json | 1 |
| README.md | 1 |
| server.json | 1 |
| server.mjs | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .json | 2 |
| .md | 1 |
| .mjs | 1 |
| .yml | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
