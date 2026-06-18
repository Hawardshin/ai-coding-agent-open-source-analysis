# KM-it-ops/memory-mcp

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/KM-it-ops/memory-mcp |
| local path | sources/KM-it-ops__memory-mcp |
| HEAD | 6ce088b |
| stars/forks | 0 / 0 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-06-17T23:53:00Z |
| trendScore / priorityScore | 81 / 145 |


## 한줄 해석

- MCP 서버/도구 표면이 있어 Claude Code/Codex류 에이전트와 직접 연결하기 좋다.
- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| LLM wiki / memory / graph | 115 | wiki-seeds/README.md, README.md, package.json |
| MCP / tool protocol | 74 | wiki-seeds/README.md, README.md, package.json |
| Frontend / developer experience | 12 | README.md, package.json, test/http.test.ts |
| Security / compliance | 9 | test/memory-write.test.ts, wiki-seeds/project/masked-signal-github-brand-rollout.md, register.md |
| AI agent / tool use | 2 | README.md, wiki-seeds/project/masked-signal-github-brand-rollout.md |
| RAG / retrieval | 2 | README.md, src/search.ts |
| Spec / doc-driven workflow | 2 | wiki-seeds/project/masked-signal-github-brand-rollout.md, test/search.test.ts |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, context-engineering, evalObservability, frontend-dx, graphMemory, llm-wiki, llm-wiki-memory, llmFramework, mcp, rag, security, security-compliance, spec-driven |
| stacks | Node/TypeScript/JavaScript |
| capabilities | LLM/app framework, Graph/memory store, Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 27 |
| manifests | 4 |
| docs | 4 |
| tests | 8 |
| ci/ops | 0 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | memory-mcp — shared-brain MCP server |
| headings | memory-mcp — shared-brain MCP server / Tools / Architecture / Config / Run |
| excerpt | memory mcp — shared brain MCP server A local stdio MCP https //modelcontextprotocol.io server over ~/.claude/memory . Exposes the LLM Wiki brain read / search / write so a memory written in any agent — Claude Code, Cursor, Codex — is readable and searchable in all three. One brain, three clients, file backed, no external service. Tools Tool What it does memory search Text + frontmatter ranking over name/description/tags/body + bucket filter, limit . memory read One memory by name → frontmatter + body + resolved outbound wikilinks . memory list List memories name, type, description , optional bucket filter. memory links Inbound + outbound wikilink neighbours for a memory. memory write Create/ |


## 주요 파일

### Manifests

- wiki-seeds/README.md
- README.md
- package.json
- tsconfig.json


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| src | 9 |
| test | 8 |
| wiki-seeds | 2 |
| .gitignore | 1 |
| LICENSE | 1 |
| package-lock.json | 1 |
| package.json | 1 |
| README.md | 1 |
| register.md | 1 |
| scripts | 1 |
| tsconfig.json | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .ts | 17 |
| .md | 4 |
| .json | 3 |
| [no-ext] | 2 |
| .mts | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
