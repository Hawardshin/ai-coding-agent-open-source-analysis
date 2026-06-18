# OldTemple91/korea-filings-api

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/OldTemple91/korea-filings-api |
| local path | sources/OldTemple91__korea-filings-api |
| HEAD | 8b0be0e |
| stars/forks | 0 / 0 |
| language | Java |
| license |  |
| pushedAt | 2026-06-16T08:09:12Z |
| trendScore / priorityScore | 92 / 243 |


## 한줄 해석

- MCP 서버/도구 표면이 있어 Claude Code/Codex류 에이전트와 직접 연결하기 좋다.
- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Frontend / developer experience | 330 | mcp/README.md, README.md, sdk/python/README.md |
| AI agent / tool use | 279 | mcp/README.md, README.md, sdk/python/README.md |
| Korean language / Korea domain | 275 | mcp/README.md, testclient/README.md, README.md |
| Spec / doc-driven workflow | 148 | testclient/README.md, README.md, sdk/python/README.md |
| MCP / tool protocol | 141 | mcp/README.md, README.md, mcp/Dockerfile |
| Infra / observability | 110 | testclient/README.md, README.md, build.gradle.kts |
| Security / compliance | 69 | mcp/README.md, testclient/README.md, README.md |
| LLM wiki / memory / graph | 41 | Dockerfile, docs/ARCHITECTURE.md, docs/PRD.md |
| RAG / retrieval | 8 | docs/PRD.md, docs/ROADMAP.md, src/main/java/com/dartintel/api/summarization/llm/GeminiFlashLiteClient.java |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, evalObservability, example-rich, frontend-dx, graphMemory, infra-observability, korea-signal, llm-wiki-memory, llmFramework, mcp, rag, sdk-api, security-compliance, spec-driven |
| stacks | Node/TypeScript/JavaScript, Python, Java/Kotlin |
| capabilities | LLM/app framework, Graph/memory store, Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 201 |
| manifests | 14 |
| docs | 14 |
| tests | 31 |
| ci/ops | 4 |
| spec artifacts | 4 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | Korea Filings |
| headings | Korea Filings / What it does / How to use it / TypeScript SDK / Python SDK / MCP server (Claude Desktop, Cursor, Continue, …) / curl / direct HTTP / 1) Resolve a company name to a ticker. Free, no wallet needed. / HTTP/2 200 / { "matches": [{ "ticker": "005930", "nameKr": "삼성전자", |
| excerpt | Korea Filings ! PyPI https //img.shields.io/pypi/v/koreafilings.svg?label=koreafilings https //pypi.org/project/koreafilings/ ! PyPI MCP https //img.shields.io/pypi/v/koreafilings mcp.svg?label=koreafilings mcp https //pypi.org/project/koreafilings mcp/ ! npm https //img.shields.io/npm/v/koreafilings.svg?label=koreafilings%20%28npm%29 https //www.npmjs.com/package/koreafilings ! License https //img.shields.io/badge/license MIT blue.svg LICENSE ! x402 https //img.shields.io/badge/payments x402 orange.svg https //www.x402.org/ An x402 https //www.x402.org/ paid HTTP API that turns Korean corporate disclosures DART · 전자공시 into machine ready English summaries — pay 0.005 USDC per summary over Ba |


## 주요 파일

### Manifests

- mcp/README.md
- testclient/README.md
- README.md
- sdk/python/README.md
- sdk/typescript/README.md
- mcp/Dockerfile
- mcp/pyproject.toml
- testclient/requirements.txt
- build.gradle.kts
- docker-compose.yml
- Dockerfile
- sdk/python/pyproject.toml
- sdk/typescript/package.json
- sdk/typescript/tsconfig.json


### Spec / Docs / Prompt Artifacts

- testclient/requirements.txt
- docs/ARCHITECTURE.md
- docs/PRD.md
- docs/ROADMAP.md


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| src | 125 |
| sdk | 28 |
| landing | 13 |
| docs | 8 |
| mcp | 6 |
| testclient | 4 |
| gradle | 2 |
| .dockerignore | 1 |
| .env.example | 1 |
| .github | 1 |
| .gitignore | 1 |
| build.gradle.kts | 1 |
| docker-compose.yml | 1 |
| Dockerfile | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .java | 107 |
| .md | 14 |
| .sql | 14 |
| .svg | 12 |
| [no-ext] | 12 |
| .py | 10 |
| .ts | 9 |
| .json | 4 |
| .txt | 3 |
| .yml | 3 |
| .example | 2 |
| .kts | 2 |
| .toml | 2 |
| .bat | 1 |
| .html | 1 |
| .jar | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
