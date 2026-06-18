# daangn/metabridge

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/daangn/metabridge |
| local path | sources/daangn__metabridge |
| HEAD | c492c2a |
| stars/forks | 65 / 1 |
| language | TypeScript |
| license |  |
| pushedAt | 2025-07-24T01:30:15Z |
| trendScore / priorityScore | 69 / 186 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Frontend / developer experience | 169 | README.md, cli/package.json, cli/tsconfig.json |
| LLM wiki / memory / graph | 4 | plugins/typescript-docs/template/src/highlight.js/styles/github-dark.ts, plugins/typescript-docs/template/src/highlight.js/styles/github.ts |
| RAG / retrieval | 4 | .pnp.loader.mjs |
| Security / compliance | 2 | .yarn/sdks/typescript/lib/tsserver.js, .yarn/sdks/typescript/lib/tsserverlibrary.js |


## 분류와 스택

| key | value |
| --- | --- |
| categories | frontend-dx, korea-signal, llm-wiki-memory, rag, security-compliance |
| stacks | Node/TypeScript/JavaScript |
| capabilities |  |


## 구조 요약

| key | value |
| --- | --- |
| files | 84 |
| manifests | 25 |
| docs | 2 |
| tests | 9 |
| ci/ops | 0 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | metabridge |
| headings | metabridge / Usage / Install CLI / Generate code / Available Plugins / How to implement the JavaScript `Driver` / Contributors |
| excerpt | metabridge Usage Available Plugins @metabridge/plugin typescript TypeScript SDK @metabridge/plugin typescript docs TypeScript SDK Documentations for WebView @metabridge/plugin kotlin Kotlin Stub @metabridge/plugin swift Swift Stub How to implement the JavaScript Driver Just implement this Contributors @tonyfromundefined https //github.com/tonyfromundefined |


## 주요 파일

### Manifests

- README.md
- schema/README.md
- cli/package.json
- cli/tsconfig.json
- package.json
- schema/package.json
- schema/tsconfig.json
- tsconfig.json
- .yarn/sdks/prettier/package.json
- .yarn/sdks/typescript/package.json
- plugins/base/package.json
- plugins/base/tsconfig.json
- plugins/kotlin/package.json
- plugins/kotlin/tsconfig.json
- plugins/swift/package.json
- plugins/swift/tsconfig.json
- plugins/typescript-docs/package.json
- plugins/typescript-docs/template/vite.config.ts
- plugins/typescript-docs/tsconfig.json
- plugins/typescript/package.json


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| plugins | 50 |
| .yarn | 11 |
| schema | 7 |
| cli | 4 |
| .vscode | 2 |
| .editorconfig | 1 |
| .gitignore | 1 |
| .pnp.cjs | 1 |
| .pnp.loader.mjs | 1 |
| .prettierignore | 1 |
| .yarnrc.yml | 1 |
| lerna.json | 1 |
| package.json | 1 |
| README.md | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .json | 30 |
| .ts | 20 |
| [no-ext] | 12 |
| .tsx | 7 |
| .js | 6 |
| .cjs | 2 |
| .md | 2 |
| .yml | 2 |
| .css | 1 |
| .html | 1 |
| .mjs | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
