# whdrnr2583-cmd/koreanpulse

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/whdrnr2583-cmd/koreanpulse |
| local path | sources/whdrnr2583-cmd__koreanpulse |
| HEAD | 9245ee4 |
| stars/forks | 0 / 0 |
| language | Python |
| license |  |
| pushedAt | 2026-06-16T16:19:30Z |
| trendScore / priorityScore | 73 / 198 |


## 한줄 해석

- MCP 서버/도구 표면이 있어 Claude Code/Codex류 에이전트와 직접 연결하기 좋다.
- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Korean language / Korea domain | 500 | docs/assets/README.md, cache-worker/README.md, daily-worker/README.md |
| MCP / tool protocol | 397 | cache-worker/README.md, daily-worker/README.md, landing/README.md |
| Security / compliance | 196 | cache-worker/README.md, daily-worker/README.md, README.md |
| Frontend / developer experience | 70 | landing/README.md, README.md, cache-worker/package.json |
| AI agent / tool use | 55 | daily-worker/README.md, README.md, pyproject.toml |
| LLM wiki / memory / graph | 50 | README.md, docs/ARCHITECTURE.md, docs/BETA.md |
| Spec / doc-driven workflow | 25 | docs/assets/README.md, README.md, docs/SPEC.md |
| Infra / observability | 6 | docs/ARCHITECTURE.md, CHANGELOG.md, daily-worker/wrangler.toml |
| RAG / retrieval | 4 | docs/assets/README.md, README.md, CHANGELOG.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, documentParsing, evalObservability, example-rich, frontend-dx, graphMemory, infra-observability, korea-signal, llm-wiki-memory, llmFramework, mcp, rag, sdk-api, security-compliance, spec-driven |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Graph/memory store, Document parsing/OCR, Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 126 |
| manifests | 17 |
| docs | 32 |
| tests | 14 |
| ci/ops | 4 |
| spec artifacts | 2 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | koreanpulse |
| headings | koreanpulse / Status / Why I built this / Why this exists / Who pays / Pricing / Run it yourself (OSS) / What it does / Differentiation vs incumbents / Differentiation vs other Korean MCP servers |
| excerpt | <! mcp name io.github.whdrnr2583 cmd/koreanpulse <p align="center" <img src="docs/assets/logo.svg" alt="koreanpulse" width="256" height="256" </p koreanpulse Korean stock disclosures, activist filings & foreign holder flows in English — for AI agents via MCP. Korean stock market intelligence for AI assistants. koreanpulse is an MCP server that connects ChatGPT / Claude / Cursor / FastMCP agents to Korean KRX / KOSPI / KOSDAQ equity data — track DART corporate disclosures as they are filed, monitor foreign investor holding changes and activist investor campaigns, and search classified Korean industry news, all in English. Data and intelligence only — not buy/sell recommendations. Get pinged i |


## 주요 파일

### Manifests

- docs/assets/README.md
- cache-worker/README.md
- daily-worker/README.md
- landing/README.md
- README.md
- webhook-worker/README.md
- cache-worker/package.json
- cache-worker/tsconfig.json
- daily-worker/package.json
- daily-worker/tsconfig.json
- Dockerfile
- landing/next.config.js
- landing/package.json
- landing/tsconfig.json
- pyproject.toml
- webhook-worker/package.json
- webhook-worker/tsconfig.json


### Spec / Docs / Prompt Artifacts

- docs/SPEC.md
- docs/ARCHITECTURE.md


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| docs | 22 |
| landing | 21 |
| src | 19 |
| tests | 14 |
| webhook-worker | 12 |
| daily-worker | 11 |
| cache-worker | 8 |
| .github | 7 |
| .dockerignore | 1 |
| .env.example | 1 |
| .gitignore | 1 |
| CHANGELOG.md | 1 |
| CONTRIBUTING.md | 1 |
| Dockerfile | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .py | 34 |
| .md | 30 |
| .ts | 18 |
| .json | 14 |
| .tsx | 7 |
| .toml | 4 |
| .yml | 4 |
| [no-ext] | 4 |
| .sql | 3 |
| .js | 2 |
| .svg | 2 |
| .css | 1 |
| .example | 1 |
| .txt | 1 |
| .yaml | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
