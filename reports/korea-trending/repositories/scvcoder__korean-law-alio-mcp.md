# scvcoder/korean-law-alio-mcp

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/scvcoder/korean-law-alio-mcp |
| local path | sources/scvcoder__korean-law-alio-mcp |
| HEAD | 09a00ac |
| stars/forks | 0 / 0 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-06-06T15:34:33Z |
| trendScore / priorityScore | 88 / 192 |


## 한줄 해석

- MCP 서버/도구 표면이 있어 Claude Code/Codex류 에이전트와 직접 연결하기 좋다.
- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| MCP / tool protocol | 358 | README.md, CLAUDE.md, Dockerfile |
| Korean language / Korea domain | 330 | README.md, CLAUDE.md, Dockerfile |
| RAG / retrieval | 36 | docs/DEVELOPMENT.md, test/law.test.mjs, src/tools/english-law.ts |
| Frontend / developer experience | 32 | CLAUDE.md, package.json, docs/ARCHITECTURE.md |
| Security / compliance | 17 | Dockerfile, docs/ARCHITECTURE.md, TEST-REPORT.md |
| Spec / doc-driven workflow | 15 | CLAUDE.md, docs/DEVELOPMENT.md, CHANGELOG.md |
| LLM wiki / memory / graph | 3 | CHANGELOG.md, fly.toml, src/lib/cache.ts |
| AI agent / tool use | 2 | src/lib/alio/client.ts, src/server/http-server.ts |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, documentParsing, evalObservability, frontend-dx, graphMemory, korea-signal, llm-wiki-memory, llmFramework, mcp, rag, sdk-api, security-compliance, spec-driven |
| stacks | Node/TypeScript/JavaScript |
| capabilities | LLM/app framework, Graph/memory store, Document parsing/OCR, Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 148 |
| manifests | 5 |
| docs | 14 |
| tests | 11 |
| ci/ops | 2 |
| spec artifacts | 3 |
| agent instruction files | 1 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | Korean Law ALIO MCP |
| headings | Korean Law ALIO MCP / 만든 이유 / v1.0.8 — 공공기관 규정과 법제처 법령을 한 번에 / 개발 사항 / 예시 — 📜 법제처의 법률정보와 🏢 알리오의 공공기관 내부규정을 잇는 자연어 질의 / 설치 및 사용법 / 사전 준비 1: API 키 발급 (무료, 1분) / 사전 준비 2: Node.js 설치 (권장) / 옵션 A — Homebrew (권장) / 옵션 B — 공식 인스톨러 |
| excerpt | Korean Law ALIO MCP ! npm version https //img.shields.io/npm/v/korean law alio mcp.svg https //www.npmjs.com/package/korean law alio mcp ! MCP 1.27 https //img.shields.io/badge/MCP 1.27 blue https //modelcontextprotocol.io ! License MIT https //img.shields.io/badge/License MIT yellow.svg ./LICENSE ! Tools 125 https //img.shields.io/badge/MCP%20Tools 125 blue.svg ./docs/API.md ! ALIO Coverage 35,000+ https //img.shields.io/badge/ALIO%20Regulations 35%2C000%2B green.svg alio 공공기관 규정 fork 의 차별점 국가법령정보센터와 알리오의 공공기관 내부규정을 검색·비교·분석하는 MCP 입니다. 법제처 87개 + ALIO 공공기관 내부규정 23개 + ALIO 보고서형 공시 단체협약·임금협약·노사협의회 각 5개 15개 = 총 125개 MCP 도구가 분석을 합니다. 1,600 법률, 10,000 행정규칙, 수만건 판례, 344개 공공기관 35,000 내부규정을 검색하고 비교 |


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
- ROADMAP.md


### Agent Instruction Files

- CLAUDE.md


## 상위 디렉터리

| dir | count |
| --- | --- |
| src | 110 |
| test | 11 |
| docs | 3 |
| .claude-plugin | 1 |
| .dockerignore | 1 |
| .env.example | 1 |
| .github | 1 |
| .gitignore | 1 |
| .mcp.json | 1 |
| CHANGELOG-UPSTREAM.md | 1 |
| CHANGELOG.md | 1 |
| CLAUDE-UPSTREAM.md | 1 |
| CLAUDE.md | 1 |
| Dockerfile | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .ts | 110 |
| .md | 14 |
| .mjs | 8 |
| .json | 5 |
| [no-ext] | 5 |
| .cjs | 3 |
| .example | 1 |
| .toml | 1 |
| .yml | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
