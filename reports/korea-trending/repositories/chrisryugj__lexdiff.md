# chrisryugj/lexdiff

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/chrisryugj/lexdiff |
| local path | sources/chrisryugj__lexdiff |
| HEAD | e541791 |
| stars/forks | 0 / 0 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-06-11T03:50:04Z |
| trendScore / priorityScore | 74 / 234 |


## 한줄 해석

- MCP 서버/도구 표면이 있어 Claude Code/Codex류 에이전트와 직접 연결하기 좋다.
- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Frontend / developer experience | 500 | README.md, CLAUDE.md, demo/package.json |
| RAG / retrieval | 500 | docs/README.md, evaluation/README.md, README.md |
| AI agent / tool use | 188 | README.md, CLAUDE.md, .claude/sync/CLAUDE.md |
| Spec / doc-driven workflow | 140 | docs/README.md, evaluation/README.md, .claude/sync/README.md |
| MCP / tool protocol | 139 | docs/README.md, README.md, CLAUDE.md |
| LLM wiki / memory / graph | 124 | docs/README.md, docs/17-LEGAL-AI-GRAPHRAG-PRD.md, docs/18-CLI-FIRST-MCP-ARCHITECTURE-REVIEW.md |
| Korean language / Korea domain | 45 | docs/README.md, CLAUDE.md, docs/18-CLI-FIRST-MCP-ARCHITECTURE-REVIEW.md |
| Infra / observability | 11 | docs/14-SKILLS_GUIDE.md, important-docs/13-NEO4J_LEGAL_RAG_BLUEPRINT.md, important-docs/14-GRAPHRAG_UPGRADE_PRD.md |
| Security / compliance | 9 | README.md, CLAUDE.md, next.config.mjs |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, documentParsing, evalObservability, example-rich, frontend, frontend-dx, graphMemory, infra-observability, korea-signal, llm-wiki-memory, llmFramework, mcp, rag, sdk-api, security-compliance, spec-driven, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Vector/search store, Graph/memory store, Document parsing/OCR, Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 689 |
| manifests | 13 |
| docs | 124 |
| tests | 40 |
| ci/ops | 2 |
| spec artifacts | 35 |
| agent instruction files | 32 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | LexDiff |
| headings | LexDiff / 💡 LexDiff로 무엇을 할 수 있나요? / 🧪 베타 안내 (v2.1.0) / 무료 사용 쿼터 (로그인 사용자 기준, 일일) / 🔑 BYOK (Bring Your Own Key) / 📊 로그 수집 안내 / 누구를 위한 건가요? / 빠른 시작 / 환경 변수 / 🧭 왜 Verbatim RAG인가? |
| excerpt | LexDiff 법령을 쉽게. AI로 똑똑하게. 공공 Legal AI의 시작. ! Live https //img.shields.io/badge/Live lexdiff.gomdori.app 1a2b4c https //lexdiff.gomdori.app ! Version https //img.shields.io/badge/version 2.2.0 beta b08d57 CHANGELOG.md ! Next.js 16 https //img.shields.io/badge/Next.js 16 black?logo=next.js https //nextjs.org ! TypeScript 5 https //img.shields.io/badge/TypeScript 5 3178C6?logo=typescript https //www.typescriptlang.org ! Gemini https //img.shields.io/badge/AI Gemini 3 Flash 4285F4?logo=google https //deepmind.google/technologies/gemini/ ! License BSL 1.1 https //img.shields.io/badge/License BSL 1.1 blue LICENSE 구글링으로 30분, GPT로 환각, LexDiff로 30초 — 법령·판례 근거까지. <p align="center" <img src="demo/out/l |


## 주요 파일

### Manifests

- docs/README.md
- evaluation/README.md
- README.md
- scripts/README.md
- .claude/sync/README.md
- CLAUDE.md
- .claude/sync/CLAUDE.md
- evaluation/requirements.txt
- demo/package.json
- demo/tsconfig.json
- next.config.mjs
- package.json
- tsconfig.json


### Spec / Docs / Prompt Artifacts

- .claude/sync/README.md
- CLAUDE.md
- .claude/sync/CLAUDE.md
- evaluation/requirements.txt
- .claude/agent.md
- .claude/openclaw-agent-config.md
- .claude/SUBAGENTS_GUIDE.md
- .claude/agents/api-debugger.md
- .claude/agents/component-refactor.md
- .claude/agents/doc-maintainer.md
- .claude/agents/regex-pattern-expert.md
- .claude/agents/task-logger.md
- .claude/settings.local.json
- .claude/skills/test-driven-development.md
- .claude/statusline.sh
- .claude/sync-from-global.sh
- .claude/sync-to-global.sh
- .claude/commands/commit.md
- .claude/commands/pull.md
- .claude/commands/push.md


### Agent Instruction Files

- .claude/sync/README.md
- CLAUDE.md
- .claude/sync/CLAUDE.md
- .claude/agent.md
- .claude/openclaw-agent-config.md
- .claude/SUBAGENTS_GUIDE.md
- .claude/agents/api-debugger.md
- .claude/agents/component-refactor.md
- .claude/agents/doc-maintainer.md
- .claude/agents/regex-pattern-expert.md
- .claude/agents/task-logger.md
- .claude/settings.local.json
- .claude/skills/test-driven-development.md
- .claude/statusline.sh
- .claude/sync-from-global.sh


## 상위 디렉터리

| dir | count |
| --- | --- |
| components | 157 |
| lib | 127 |
| scripts | 95 |
| app | 63 |
| __tests__ | 40 |
| .claude | 31 |
| docs | 31 |
| important-docs | 30 |
| src | 22 |
| hooks | 19 |
| evaluation | 12 |
| supabase | 11 |
| public | 9 |
| demo | 6 |


## 확장자 분포

| ext | count |
| --- | --- |
| .ts | 284 |
| .tsx | 149 |
| .md | 118 |
| .mjs | 35 |
| .json | 25 |
| .mts | 14 |
| .sql | 10 |
| .svg | 10 |
| .css | 7 |
| .html | 6 |
| .sh | 6 |
| .py | 5 |
| .cmd | 3 |
| [no-ext] | 3 |
| .js | 2 |
| .yml | 2 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
