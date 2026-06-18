# line/create-liff-app

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/line/create-liff-app |
| local path | sources/line__create-liff-app |
| HEAD | 6fb6601 |
| stars/forks | 80 / 17 |
| language | TypeScript |
| license | Apache-2.0 |
| pushedAt | 2026-01-14T02:17:07Z |
| trendScore / priorityScore | 80 / 216 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Frontend / developer experience | 246 | README.md, package.json, templates/react-ts/package.json |
| LLM wiki / memory / graph | 12 | CODE_OF_CONDUCT.md, LICENSE.txt |
| Security / compliance | 7 | .github/workflows/release.yml, CODE_OF_CONDUCT.md, create-liff-app.ts |
| Korean language / Korea domain | 3 | README.md, CODE_OF_CONDUCT.md |
| RAG / retrieval | 2 | test/index.test.ts |


## 분류와 스택

| key | value |
| --- | --- |
| categories | frontend-dx, graphMemory, korea-signal, llm-wiki-memory, rag, security-compliance |
| stacks | Node/TypeScript/JavaScript |
| capabilities | Graph/memory store |


## 구조 요약

| key | value |
| --- | --- |
| files | 105 |
| manifests | 17 |
| docs | 6 |
| tests | 1 |
| ci/ops | 3 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | @line/create-liff-app |
| headings | @line/create-liff-app / About / LIFF / Templates / Getting Started / Create LIFF Channel / Installation / Options / [License](https://github.com/line/create-liff-app/blob/master/LINCENSE.txt) |
| excerpt | @line/create liff app ! License https //img.shields.io/badge/license Apache red https //www.apache.org/licenses/LICENSE 2.0 ! Node https //img.shields.io/badge/node %E2%89%A7%2014 green?logo=node.js https //www.npmjs.com/package/@line/create liff app Start developing LIFF application with a simple CLI command. About about LIFF liff Templates templates Getting Started getting started Create LIFF Channel create liff channel Installation installation Options options License license About LIFF LINE Front end Framework LIFF is a platform for web apps provided by LY Corporation. The web apps running on this platform are called LIFF apps. Do you want to know more about LIFF? Learn more https //deve |


## 주요 파일

### Manifests

- README.md
- package.json
- tsconfig.json
- templates/react-ts/package.json
- templates/react-ts/tsconfig.json
- templates/react-ts/vite.config.ts
- templates/react/package.json
- templates/svelte-ts/package.json
- templates/svelte-ts/tsconfig.json
- templates/svelte/package.json
- templates/vanilla-ts/package.json
- templates/vanilla-ts/tsconfig.json
- templates/vanilla/package.json
- templates/vue-ts/package.json
- templates/vue-ts/tsconfig.json
- templates/vue-ts/vite.config.ts
- templates/vue/package.json


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| templates | 83 |
| .github | 8 |
| .eslintignore | 1 |
| .eslintrc.js | 1 |
| .gitignore | 1 |
| .nvmrc | 1 |
| CODE_OF_CONDUCT.md | 1 |
| CONTRIBUTING.md | 1 |
| create-liff-app.ts | 1 |
| index.ts | 1 |
| jest.config.js | 1 |
| LICENSE.txt | 1 |
| package.json | 1 |
| README.md | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .json | 19 |
| .js | 18 |
| .ts | 15 |
| .css | 8 |
| .default | 8 |
| .html | 8 |
| .md | 6 |
| .tsx | 5 |
| .vue | 4 |
| .yml | 4 |
| [no-ext] | 4 |
| .jsx | 2 |
| .svelte | 2 |
| .mjs | 1 |
| .txt | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
