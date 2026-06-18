# toss/es-git

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/toss/es-git |
| local path | sources/toss__es-git |
| HEAD | 2222d34 |
| stars/forks | 319 / 12 |
| language | Rust |
| license | MIT |
| pushedAt | 2026-06-01T19:26:40Z |
| trendScore / priorityScore | 100 / 241 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Korean language / Korea domain | 30 | docs/README.md, README.md, package.json |
| Frontend / developer experience | 13 | docs/README.md, README.md, docs/package.json |
| LLM wiki / memory / graph | 2 | docs/reference/Rebase/Methods/inmemoryIndex.md |
| RAG / retrieval | 1 | docs/getting-started.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | evalObservability, frontend-dx, graphMemory, korea-signal, llm-wiki-memory, llmFramework, rag |
| stacks | Node/TypeScript/JavaScript, Rust |
| capabilities | LLM/app framework, Graph/memory store, Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 1060 |
| manifests | 11 |
| docs | 764 |
| tests | 222 |
| ci/ops | 3 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | es-git &middot; [![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/toss/es-git/blob/main/LICENSE) [![NPM badge](https://img.shields.io/npm/v/es-git?logo=npm)](https://www.npmjs.com/package/es-git) |
| headings | es-git &middot; [![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/toss/es-git/blob/main/LICENSE) [![NPM badge](https://img.shields.io/npm/v/es-git?logo=npm)](https://www.npmjs.com/package/es-git) / Examples / Documentation / Contributing / License |
| excerpt | ! wallpaper ./docs/public/og.png es git &middot; ! MIT License https //img.shields.io/badge/license MIT blue.svg https //github.com/toss/es git/blob/main/LICENSE ! NPM badge https //img.shields.io/npm/v/es git?logo=npm https //www.npmjs.com/package/es git English 한국어 https //github.com/toss/es git/blob/main/README ko kr.md es git is a modern git library built for Node.js. With its simple and intuitive interface, even complex git operations can be easily integrated, and the built in TypeScript types ensure fast and reliable development. es git builds high performance git functionality across different operating systems by using napi rs https //napi.rs/ to compile a native module from git2 rs |


## 주요 파일

### Manifests

- docs/README.md
- benchmarks/README.md
- README.md
- docs/package.json
- docs/tsconfig.json
- benchmarks/package.json
- benchmarks/tsconfig.json
- benchmarks/nodegit/package.json
- Cargo.toml
- package.json
- tsconfig.json


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| docs | 758 |
| tests | 222 |
| src | 39 |
| benchmarks | 9 |
| .github | 6 |
| .cargo | 1 |
| .gitattributes | 1 |
| .gitignore | 1 |
| .node-version | 1 |
| .npmignore | 1 |
| .scripts | 1 |
| .yarn | 1 |
| .yarnrc.yml | 1 |
| biome.json | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .md | 743 |
| [no-ext] | 151 |
| .ts | 57 |
| .rs | 40 |
| .sample | 40 |
| .json | 10 |
| .toml | 5 |
| .js | 3 |
| .yml | 3 |
| .mts | 2 |
| .cjs | 1 |
| .css | 1 |
| .mjs | 1 |
| .txt | 1 |
| .webmanifest | 1 |
| .yaml | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
