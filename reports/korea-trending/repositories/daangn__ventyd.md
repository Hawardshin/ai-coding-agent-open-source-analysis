# daangn/ventyd

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/daangn/ventyd |
| local path | sources/daangn__ventyd |
| HEAD | e8c859a |
| stars/forks | 40 / 3 |
| language | TypeScript |
| license | MIT |
| pushedAt | 2026-06-04T02:26:59Z |
| trendScore / priorityScore | 97 / 271 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| LLM wiki / memory / graph | 500 | README.md, skill/README.md, package.json |
| Frontend / developer experience | 272 | README.md, skill/README.md, docs/package.json |
| Spec / doc-driven workflow | 32 | README.md, package.json, docs/content/docs/database.mdx |
| Korean language / Korea domain | 20 | README.md, skill/README.md, package.json |
| RAG / retrieval | 19 | README.md, docs/content/docs/testing.mdx, docs/content/docs/error-handling.mdx |
| AI agent / tool use | 8 | skill/README.md, docs/content/docs/skills.mdx, CHANGELOG.md |
| Infra / observability | 6 | README.md, docs/content/docs/error-handling.mdx, src/createRepository.ts |
| Security / compliance | 6 | README.md, docs/content/docs/event-granularity.mdx, docs/content/docs/plugins.mdx |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, evalObservability, frontend-dx, graphMemory, infra-observability, korea-signal, llm-wiki-memory, llmFramework, rag, security-compliance, spec-driven, vectorSearch |
| stacks | Node/TypeScript/JavaScript |
| capabilities | LLM/app framework, Vector/search store, Graph/memory store, Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 112 |
| manifests | 8 |
| docs | 44 |
| tests | 23 |
| ci/ops | 2 |
| spec artifacts | 1 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | Valibot |
| headings | Features / Installation / Installing Validation Libraries / Valibot / Zod / ArkType / TypeBox / Or use any Standard Schema-compliant library directly / Quick Start / 1. Define Your Schema |
| excerpt | <div align="center" <img src="./logo light.png gh light mode only" alt="Ventyd Logo" style="width 210px;" <img src="./logo dark.png gh dark mode only" alt="Ventyd Logo" style="width 210px;" <p A TypeScript first event sourcing library</p ! https //img.shields.io/npm/v/ventyd ! https //img.shields.io/npm/l/ventyd ! https //img.shields.io/npm/dt/ventyd ! https //img.shields.io/github/contributors/daangn/ventyd ! https //img.shields.io/github/last commit/daangn/ventyd </div Features Type Safe Event Sourcing Full TypeScript support with comprehensive type inference Standard Schema Support Built on Standard Schema https //standardschema.dev specification for maximum flexibility Multiple Validatio |


## 주요 파일

### Manifests

- .changeset/README.md
- README.md
- skill/README.md
- docs/package.json
- docs/tsconfig.json
- docs/vite.config.ts
- package.json
- tsconfig.json


### Spec / Docs / Prompt Artifacts

- docs/content/docs/architecture.mdx


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| docs | 35 |
| src | 28 |
| test | 23 |
| skill | 6 |
| .changeset | 2 |
| .github | 2 |
| .vscode | 2 |
| .editorconfig | 1 |
| .gitattributes | 1 |
| .gitignore | 1 |
| .yarn | 1 |
| .yarnrc.yml | 1 |
| biome.json | 1 |
| CHANGELOG.md | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .ts | 62 |
| .mdx | 15 |
| .json | 10 |
| .md | 9 |
| .tsx | 5 |
| [no-ext] | 5 |
| .yml | 3 |
| .cjs | 1 |
| .css | 1 |
| .mjs | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
