# lxxzdrgnl/SAJUGURI

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/lxxzdrgnl/SAJUGURI |
| local path | sources/lxxzdrgnl__SAJUGURI |
| HEAD | cbd888a |
| stars/forks | 0 / 0 |
| language | Python |
| license |  |
| pushedAt | 2026-06-15T21:57:21Z |
| trendScore / priorityScore | 74 / 218 |


## 한줄 해석

- MCP 서버/도구 표면이 있어 Claude Code/Codex류 에이전트와 직접 연결하기 좋다.
- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Frontend / developer experience | 317 | AGENTS.md, backend/README.md, frontend/README.md |
| RAG / retrieval | 215 | AGENTS.md, backend/README.md, README.md |
| Spec / doc-driven workflow | 138 | AGENTS.md, backend/llm/prompts/daily_story.py, backend/llm/prompts/glossary.py |
| AI agent / tool use | 120 | AGENTS.md, backend/README.md, backend/pyproject.toml |
| Security / compliance | 52 | backend/README.md, backend/llm/prompts/report.py, docs/deploy-web-server.md |
| Infra / observability | 35 | README.md, backend/Dockerfile, backend/Makefile |
| Korean language / Korea domain | 12 | backend/README.md, README.md, backend/pyproject.toml |
| LLM wiki / memory / graph | 9 | docs/superpowers/plans/2026-06-13-chat-tools-twelve-un-hap-chung.md, docs/superpowers/plans/2026-06-14-report-async-job-pipeline.md, backend/llm/tools/saju_tools.py |
| MCP / tool protocol | 1 | AGENTS.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, evalObservability, frontend-dx, graphMemory, infra-observability, korea-signal, llm-wiki-memory, llmFramework, mcp, rag, sdk-api, security-compliance, spec-driven, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Vector/search store, Graph/memory store, Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 541 |
| manifests | 21 |
| docs | 28 |
| tests | 93 |
| ci/ops | 6 |
| spec artifacts | 17 |
| agent instruction files | 10 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | 사주구리 |
| headings | 사주구리 / Production / 사주팔자(四柱八字)란? / 주요 기능 / 핵심 컨셉: Headline-Driven Insights / 레이어별 상세 문서 / 기술 스택 / 빠른 시작 / Docker (권장) / 로컬 개발 |
| excerpt | 사주구리 ! Python https //img.shields.io/badge/Python 3.10+ 3776AB?style=flat square&logo=python&logoColor=white ! TypeScript https //img.shields.io/badge/TypeScript 5.0 3178C6?style=flat square&logo=typescript&logoColor=white ! Vue.js https //img.shields.io/badge/Vue.js 3.0 4FC08D?style=flat square&logo=vue.js&logoColor=white ! FastAPI https //img.shields.io/badge/FastAPI 0.111+ 009688?style=flat square&logo=fastapi&logoColor=white ! OpenAI https //img.shields.io/badge/OpenAI GPT 4o 412991?style=flat square&logo=openai&logoColor=white ! ChromaDB https //img.shields.io/badge/ChromaDB Vector DB FF6B35?style=flat square AI가 당신의 사주 四柱 와 오늘의 고민을 함께 읽어드립니다. "재물운" X "30대 중반, 바위 틈에서 물이 솟구치듯 재물이 터질 팔자" |


## 주요 파일

### Manifests

- AGENTS.md
- backend/README.md
- frontend/README.md
- README.md
- backend/Dockerfile
- backend/Makefile
- backend/pyproject.toml
- docker-compose.yml
- frontend/Dockerfile
- frontend/package.json
- frontend/tsconfig.json
- package.json
- apps/web/Dockerfile
- apps/web/package.json
- apps/web/tsconfig.json
- packages/api-client/package.json
- packages/api-client/tsconfig.json
- packages/core/package.json
- packages/core/tsconfig.json
- packages/design/package.json


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- docs/superpowers/specs/2026-04-30-chat-agent-design.md
- backend/llm/prompts/__init__.py
- backend/llm/prompts/chat.py
- backend/llm/prompts/compatibility_report.py
- backend/llm/prompts/daily_story.py
- backend/llm/prompts/glossary.py
- backend/llm/prompts/lang.py
- backend/llm/prompts/question.py
- backend/llm/prompts/report.py
- backend/llm/prompts/un_flow.py
- docs/design.md
- docs/superpowers/specs/2026-06-02-multi-domain-divination-platform-design.md
- docs/superpowers/specs/2026-06-12-mobile-ui-overhaul-design.md
- docs/superpowers/specs/2026-06-13-compatibility-report-design.md
- docs/superpowers/specs/2026-06-13-english-localization-design.md
- docs/superpowers/specs/2026-06-14-report-async-job-pipeline.md


### Agent Instruction Files

- AGENTS.md
- backend/llm/prompts/__init__.py
- backend/llm/prompts/chat.py
- backend/llm/prompts/compatibility_report.py
- backend/llm/prompts/daily_story.py
- backend/llm/prompts/glossary.py
- backend/llm/prompts/lang.py
- backend/llm/prompts/question.py
- backend/llm/prompts/report.py
- backend/llm/prompts/un_flow.py


## 상위 디렉터리

| dir | count |
| --- | --- |
| backend | 232 |
| apps | 158 |
| frontend | 71 |
| packages | 44 |
| docs | 24 |
| .github | 2 |
| .dockerignore | 1 |
| .env.example | 1 |
| .gitignore | 1 |
| AGENTS.md | 1 |
| docker-compose.yml | 1 |
| package.json | 1 |
| pnpm-lock.yaml | 1 |
| pnpm-workspace.yaml | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .py | 216 |
| .ts | 105 |
| .tsx | 95 |
| .vue | 40 |
| .md | 28 |
| .json | 20 |
| [no-ext] | 11 |
| .svg | 6 |
| .mjs | 4 |
| .yaml | 4 |
| .example | 3 |
| .yml | 3 |
| .css | 2 |
| .ini | 1 |
| .mako | 1 |
| .toml | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
