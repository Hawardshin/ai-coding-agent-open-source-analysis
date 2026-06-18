# chrisryugj/korean-law-mcp

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/chrisryugj/korean-law-mcp |
| local path | sources/chrisryugj__korean-law-mcp |
| HEAD | 7cb7db0 |
| stars/forks | 0 / 0 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-06-11T04:31:05Z |
| trendScore / priorityScore | 92 / 201 |


## 한줄 해석

- MCP 서버/도구 표면이 있어 Claude Code/Codex류 에이전트와 직접 연결하기 좋다.
- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| MCP / tool protocol | 226 | README.md, CLAUDE.md, Dockerfile |
| Korean language / Korea domain | 170 | README.md, CLAUDE.md, Dockerfile |
| RAG / retrieval | 46 | README.md, docs/FTC-RAG-INTEGRATION.md, docs/DEVELOPMENT.md |
| AI agent / tool use | 40 | README.md, docs/PRECEDENT-SEARCH-GUIDELINES.md, test/test-compact-query-planner.cjs |
| Security / compliance | 39 | README.md, CLAUDE.md, docs/ARCHITECTURE.md |
| Frontend / developer experience | 28 | README.md, CLAUDE.md, package.json |
| LLM wiki / memory / graph | 7 | README.md, fly.toml, README-EN.md |
| Spec / doc-driven workflow | 6 | CLAUDE.md, docs/DEVELOPMENT.md, .claude/next-sessions.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, documentParsing, evalObservability, frontend-dx, graphMemory, korea-signal, llm-wiki-memory, llmFramework, mcp, rag, sdk-api, security-compliance, spec-driven, vectorSearch |
| stacks | Node/TypeScript/JavaScript |
| capabilities | LLM/app framework, Vector/search store, Graph/memory store, Document parsing/OCR, Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 141 |
| manifests | 5 |
| docs | 12 |
| tests | 17 |
| ci/ops | 2 |
| spec artifacts | 5 |
| agent instruction files | 3 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | Korean Law MCP |
| headings | Korean Law MCP / v4.4.0 — 노출 도구 통폐합 19개 → 9개 (컨텍스트 52% 감축) / v4.3 — 판례 생사 확인 + 행위시법 판단 / 1. `cite_check` — 판례 생사 확인 (한국형 Shepard's Citator) / 2. `applicable_law` — 행위시법 판단 + 부칙 경과규정 / v4.0 — 3개 킬러 기능 동시 추가 / 1. `impact_map` — 조문 한 줄의 파급효과 그래프 / 2. `time_travel` — 두 시점 본문 자동 diff / 3. `action_plan` — 이럴 땐 이렇게, 5단계 안내 / + v4.2.0 — 법령 현행성 가드 (개정 전 법령 오답 방지) |
| excerpt | Korean Law MCP 법제처 42개 API를 9개 도구로. 법령, 판례, 행정규칙, 자치법규, 조약, 해석례 국세청 포함 + LLM 환각 방지 인용 검증 + 조문 영향 그래프 + 시점 비교 자동 diff + 이럴 땐 이렇게 — 5단계 안내 + 판례 생사 확인 Citator + 행위시법 판단 을 AI 어시스턴트나 터미널에서 바로 사용. ! npm version https //img.shields.io/npm/v/korean law mcp.svg https //www.npmjs.com/package/korean law mcp ! MCP 1.27 https //img.shields.io/badge/MCP 1.27 blue https //modelcontextprotocol.io ! License MIT https //img.shields.io/badge/License MIT yellow.svg LICENSE 법제처 Open API 기반 MCP 서버 + CLI. Claude Desktop, Cursor, Windsurf, Zed, Claude.ai 등에서 바로 사용 가능. English ./README EN.md ! Korean Law MCP 데모 ./demo.gif v4.4.0 — 노출 도구 통폐합 19개 → 9개 컨텍스트 52% 감축 MCP 클라이언트가 매 세션 읽는 도구 목록 ListTools 을 ~15.1KB → ~7.2KB로 |


## 주요 파일

### Manifests

- README.md
- CLAUDE.md
- Dockerfile
- package.json
- tsconfig.json


### Spec / Docs / Prompt Artifacts

- CLAUDE.md
- docs/ARCHITECTURE.md
- .claude/next-sessions.md
- ROADMAP.md
- .claude/commands/deploy.md


### Agent Instruction Files

- CLAUDE.md
- .claude/next-sessions.md
- .claude/commands/deploy.md


## 상위 디렉터리

| dir | count |
| --- | --- |
| src | 100 |
| test | 17 |
| docs | 5 |
| .claude | 2 |
| .claude-plugin | 2 |
| .dockerignore | 1 |
| .env.example | 1 |
| .github | 1 |
| .gitignore | 1 |
| CHANGELOG.md | 1 |
| CLAUDE.md | 1 |
| Dockerfile | 1 |
| fly.toml | 1 |
| LICENSE | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .ts | 100 |
| .cjs | 17 |
| .md | 12 |
| .json | 5 |
| [no-ext] | 4 |
| .example | 1 |
| .toml | 1 |
| .yml | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
