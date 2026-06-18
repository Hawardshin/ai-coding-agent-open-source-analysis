# MosslandOpenDevs/alpha

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/MosslandOpenDevs/alpha |
| local path | sources/MosslandOpenDevs__alpha |
| HEAD | 254640c |
| stars/forks | 0 / 0 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-05-18T04:32:31Z |
| trendScore / priorityScore | 99 / 221 |


## 한줄 해석

- MCP 서버/도구 표면이 있어 Claude Code/Codex류 에이전트와 직접 연결하기 좋다.
- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| LLM wiki / memory / graph | 300 | README.md, docs/audit-queries.md, lib/agents.ts |
| AI agent / tool use | 166 | AGENTS.md, README.md, CLAUDE.md |
| Korean language / Korea domain | 134 | README.md, docs/audit-queries.md, docs/audit-results/2026-05-06.json |
| MCP / tool protocol | 81 | README.md, lib/mcp-server.ts, app/api/mcp/route.ts |
| Frontend / developer experience | 71 | AGENTS.md, README.md, package.json |
| RAG / retrieval | 40 | README.md, lib/embeddings.ts, lib/mcp-server.ts |
| Spec / doc-driven workflow | 18 | README.md, CLAUDE.md, lib/mcp-server.ts |
| Security / compliance | 15 | docs/audit-results/2026-05-11-auto.json, app/llms.txt/route.ts, lib/community.ts |
| Infra / observability | 2 | pnpm-lock.yaml |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, evalObservability, frontend-dx, graphMemory, infra-observability, korea-signal, llm-wiki-memory, llmFramework, mcp, rag, sdk-api, security-compliance, spec-driven |
| stacks | Node/TypeScript/JavaScript |
| capabilities | LLM/app framework, Graph/memory store, Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 124 |
| manifests | 5 |
| docs | 8 |
| tests | 0 |
| ci/ops | 0 |
| spec artifacts | 2 |
| agent instruction files | 2 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | Alpha — by Mossland |
| headings | Alpha — by Mossland / Live surfaces / MCP server / Architecture / Stack / Local development / env config / edit .env.local — see below / Required env vars / Bring-your-own MIC data |
| excerpt | Alpha — by Mossland Korean crypto × AI vertical media + community at alpha.moss.land https //alpha.moss.land . Alpha aggregates Korean YouTube channels, news, and macro feeds into a canonical store of entities, topics, and events. On top of that store it publishes channel stance distributions, AI synthesized daily briefs, retrievable RAG Q&A, 8 disclosed AI personas with auto resolving 7 day price calls, and a 12 tool MCP server. Designed from day one to be cited by both human readers and major LLMs GPT, Gemini, Perplexity, Claude . Live surfaces alpha.moss.land https //alpha.moss.land — homepage today's alpha /brief/ date https //alpha.moss.land — daily brief, permanent URL /asset/ symbol h |


## 주요 파일

### Manifests

- AGENTS.md
- README.md
- CLAUDE.md
- package.json
- tsconfig.json


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- CLAUDE.md


### Agent Instruction Files

- AGENTS.md
- CLAUDE.md


## 상위 디렉터리

| dir | count |
| --- | --- |
| app | 44 |
| lib | 32 |
| scripts | 16 |
| components | 11 |
| docs | 5 |
| public | 2 |
| .env.example | 1 |
| .gitignore | 1 |
| .npmrc | 1 |
| AGENTS.md | 1 |
| CLAUDE.md | 1 |
| ecosystem.config.cjs | 1 |
| LICENSE | 1 |
| next.config.ts | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .ts | 63 |
| .tsx | 40 |
| .json | 6 |
| .md | 4 |
| [no-ext] | 3 |
| .yaml | 2 |
| .cjs | 1 |
| .css | 1 |
| .example | 1 |
| .html | 1 |
| .mjs | 1 |
| .xml | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
