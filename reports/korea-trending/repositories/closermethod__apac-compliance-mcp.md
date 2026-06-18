# closermethod/apac-compliance-mcp

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/closermethod/apac-compliance-mcp |
| local path | sources/closermethod__apac-compliance-mcp |
| HEAD | 8c1a171 |
| stars/forks | 0 / 0 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-05-04T17:27:24Z |
| trendScore / priorityScore | 68 / 101 |


## 한줄 해석

- MCP 서버/도구 표면이 있어 Claude Code/Codex류 에이전트와 직접 연결하기 좋다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| MCP / tool protocol | 29 | README.md, package.json, actor.json |
| Security / compliance | 24 | README.md, package.json, actor.json |
| Korean language / Korea domain | 23 | README.md, package.json, actor.json |
| AI agent / tool use | 15 | README.md, package.json, actor.json |
| Frontend / developer experience | 14 | package.json, package-lock.json, src/main.ts |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, frontend-dx, korea-signal, localRuntime, mcp, security-compliance, vectorSearch |
| stacks | Node/TypeScript/JavaScript |
| capabilities | Vector/search store, Local runtime |


## 구조 요약

| key | value |
| --- | --- |
| files | 10 |
| manifests | 4 |
| docs | 1 |
| tests | 0 |
| ci/ops | 1 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | APAC Compliance MCP — AI Agent Outbound for Asia-Pacific |
| headings | APAC Compliance MCP — AI Agent Outbound for Asia-Pacific / What This Solves / Tools (7) / Coverage (7 countries) / Use Cases / Pricing / Integration / License / Author |
| excerpt | APAC Compliance MCP — AI Agent Outbound for Asia Pacific Country briefs and compliance reasoning for AI agents selling into Japan, Singapore, Korea, India, Australia, Hong Kong, and Indonesia. By Elisabeth Hitz https //www.elisabethhitz.com — 10+ years B2B enterprise sales experience. Disclaimer. Reference frameworks for AI agent guidance. Not legal advice. Validate with qualified counsel before customer deployment. What This Solves AI SDR platforms work fine in English language Western markets. APAC requires structured handling of PDPA Singapore , APP Australia , APPI Japan , DPDP India , PIPA Korea , data localization rules per country, business culture nuance per market, holiday calendars |


## 주요 파일

### Manifests

- README.md
- Dockerfile
- package.json
- tsconfig.json


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| .gitignore | 1 |
| actor.json | 1 |
| Dockerfile | 1 |
| glama.json | 1 |
| input_schema.json | 1 |
| package-lock.json | 1 |
| package.json | 1 |
| README.md | 1 |
| src | 1 |
| tsconfig.json | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .json | 6 |
| [no-ext] | 2 |
| .md | 1 |
| .ts | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
