# jung-jin-lee/paldo-mcp

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/jung-jin-lee/paldo-mcp |
| local path | sources/jung-jin-lee__paldo-mcp |
| HEAD | e4e5665 |
| stars/forks | 0 / 0 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-05-24T02:22:07Z |
| trendScore / priorityScore | 69 / 122 |


## 한줄 해석

- MCP 서버/도구 표면이 있어 Claude Code/Codex류 에이전트와 직접 연결하기 좋다.
- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| MCP / tool protocol | 156 | README.md, packages/paldo-mcp/package.json, package.json |
| RAG / retrieval | 41 | README.md, packages/paldo-mcp/src/commands/init.ts, packages/paldo-mcp/src/commands/status.ts |
| Korean language / Korea domain | 30 | README.md, packages/paldo-mcp/package.json, package.json |
| Frontend / developer experience | 5 | packages/paldo-mcp/package.json, packages/core/package.json, packages/paldo-mcp/src/server.ts |
| LLM wiki / memory / graph | 5 | packages/paldo-mcp/src/embeddings/embed.ts, packages/paldo-mcp/src/embeddings/search.ts, packages/core/src/db.ts |


## 분류와 스택

| key | value |
| --- | --- |
| categories | coding-agent, example-rich, frontend-dx, graphMemory, korea-signal, llm-wiki-memory, llmFramework, mcp, rag, vectorSearch |
| stacks | Node/TypeScript/JavaScript |
| capabilities | LLM/app framework, Vector/search store, Graph/memory store |


## 구조 요약

| key | value |
| --- | --- |
| files | 37 |
| manifests | 7 |
| docs | 6 |
| tests | 0 |
| ci/ops | 0 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | paldo-mcp |
| headings | paldo-mcp / Claude Code 재시작 / 왜 필요한가 / 제공 도구 / 필터 키 (요약) / 예제 / CLI / 가장 흔한 경로 — 첫 사용자, 모든 프로젝트에서 사용 / 추가 프로젝트에만 노출 (팀과 .mcp.json 공유) / 본인만, 특정 프로젝트에서 |
| excerpt | paldo mcp 한국어 English README.en.md Paldo 팔도, 八道 — "한국의 여덟 도 道 ." 전국 단면을 담은 목소리 모음. NVIDIA Nemotron Personas Korea KOSIS 통계 기반, 1M 합성 페르소나 데이터셋을 Claude Code를 비롯한 모든 MCP 클라이언트에서 호출할 수 있게 해주는 MCP 서버입니다. 이제 Claude Code에서 한국어 또는 어떤 언어로든 그냥 물어보면 됩니다 "30대 서울 거주 직장인 5명 뽑아줘" Claude가 persona sample { filters { province "서울", age range 30, 39 }, n 5 } 를 호출해 직업별 서사·문화적 맥락·취미·커리어 목표까지 갖춘 사실적인 한국인 페르소나를 반환합니다. 왜 필요한가 LLM 응답을 "특정 한국인 관점"으로 grounding하려면 보통 ad hoc 프롬프트 "당신은 30대 서울 직장인…" 로 채우게 되는데, 이렇게 하면 편향됨 — 모델이 학습한 stereotyped 분포로 회귀 재현 불가 — 같은 입력에도 결과가 흔들림 다양성 부족 — 17개 시도, 252개 시군구의 실제 분포를 반영하지 못함 paldo mcp 는 NVIDIA가 KOSIS 통계에 정렬해 만든 1M 레코드를 Claude의 도구 호출로 직접 노출해, 위 문제를 한 번에 해결합니다. 제공 도구 도구 용도 호출 예시 pers |


## 주요 파일

### Manifests

- README.md
- packages/paldo-mcp/package.json
- packages/paldo-mcp/tsconfig.json
- package.json
- packages/core/package.json
- packages/core/tsconfig.json
- tsconfig.base.json


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| packages | 26 |
| examples | 4 |
| .claude-plugin | 1 |
| .gitignore | 1 |
| LICENSE | 1 |
| package.json | 1 |
| README.en.md | 1 |
| README.md | 1 |
| tsconfig.base.json | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .ts | 21 |
| .json | 7 |
| .md | 6 |
| [no-ext] | 2 |
| .tgz | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
