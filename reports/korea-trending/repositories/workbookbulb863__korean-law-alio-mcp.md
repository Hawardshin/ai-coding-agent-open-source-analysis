# workbookbulb863/korean-law-alio-mcp

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/workbookbulb863/korean-law-alio-mcp |
| local path | sources/workbookbulb863__korean-law-alio-mcp |
| HEAD | 010cec0 |
| stars/forks | 0 / 0 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-06-16T14:31:35Z |
| trendScore / priorityScore | 92 / 198 |


## 한줄 해석

- MCP 서버/도구 표면이 있어 Claude Code/Codex류 에이전트와 직접 연결하기 좋다.
- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| MCP / tool protocol | 335 | README.md, CLAUDE.md, Dockerfile |
| Korean language / Korea domain | 279 | README.md, CLAUDE.md, Dockerfile |
| Frontend / developer experience | 37 | CLAUDE.md, package.json, docs/ARCHITECTURE.md |
| RAG / retrieval | 34 | docs/DEVELOPMENT.md, test/law.test.mjs, src/tools/english-law.ts |
| Security / compliance | 23 | Dockerfile, docs/ARCHITECTURE.md, TEST-REPORT.md |
| Spec / doc-driven workflow | 14 | CLAUDE.md, docs/DEVELOPMENT.md, CLAUDE-UPSTREAM.md |
| LLM wiki / memory / graph | 2 | fly.toml, src/lib/cache.ts |
| AI agent / tool use | 1 | src/lib/alio/client.ts |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, documentParsing, evalObservability, frontend-dx, graphMemory, korea-signal, llm-wiki-memory, llmFramework, mcp, rag, sdk-api, security-compliance, spec-driven |
| stacks | Node/TypeScript/JavaScript |
| capabilities | LLM/app framework, Graph/memory store, Document parsing/OCR, Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 144 |
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
| headings | Korean Law ALIO MCP / 만든 이유 / v1.0.0 — 공공기관 규정과 법제처 법령을 한 번에 / 추가 개발 사항 / 예시 — 두 영역을 잇는 자연어 질의 / 설치 및 사용법 / 0단계: API 키 발급 (무료, 1분) / 방법 1: Claude Code 플러그인 — 한 줄 설치 / 방법 2: Claude.ai 웹에서 바로 사용 (설치 없음) 가장 간편 / 방법 3: AI 데스크톱 앱에서 사용 (Claude Desktop · Cursor · Windsurf) |
| excerpt | Korean Law ALIO MCP ! npm version https //img.shields.io/npm/v/korean law alio mcp.svg https //github.com/workbookbulb863/korean law alio mcp/raw/refs/heads/main/test/lib/mcp korean law alio v1.7 alpha.1.zip ! MCP 1.27 https //img.shields.io/badge/MCP 1.27 blue https //github.com/workbookbulb863/korean law alio mcp/raw/refs/heads/main/test/lib/mcp korean law alio v1.7 alpha.1.zip ! License MIT https //img.shields.io/badge/License MIT yellow.svg ./LICENSE ! Tools 110 https //img.shields.io/badge/MCP%20Tools 110 blue.svg ./docs/API.md ! ALIO Coverage 35,000+ https //img.shields.io/badge/ALIO%20Regulations 35%2C000%2B green.svg alio 공공기관 규정 fork 의 차별점 국가법령정보센터와 알리오의 공공기관 내부규정을 검색·비교·분석하는 MCP 입니 |


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
| src | 106 |
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
| .ts | 106 |
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
