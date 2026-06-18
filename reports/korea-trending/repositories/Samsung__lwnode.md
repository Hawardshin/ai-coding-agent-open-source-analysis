# Samsung/lwnode

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/Samsung/lwnode |
| local path | sources/Samsung__lwnode |
| HEAD | b3de7be5 |
| stars/forks | 33 / 11 |
| language | C++ |
| license | NOASSERTION |
| pushedAt | 2026-04-21T07:08:13Z |
| trendScore / priorityScore | 77 / 227 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| LLM wiki / memory / graph | 112 | deps/node/test/common/README.md, README.md, deps/node/deps/npm/node_modules/debug/README.md |
| Frontend / developer experience | 70 | deps/node/tools/node_modules/babel-eslint/README.md, deps/node/tools/node_modules/eslint/node_modules/ajv/README.md, deps/node/tools/node_modules/eslint/node_modules/fast-deep-equal/README.md |
| Spec / doc-driven workflow | 41 | deps/node/test/fixtures/wpt/url/README.md, deps/node/test/wpt/README.md, README.md |
| Security / compliance | 36 | deps/node/tools/node_modules/eslint/node_modules/ajv/README.md, deps/node/tools/node_modules/eslint/node_modules/fast-deep-equal/README.md, deps/node/tools/node_modules/eslint/node_modules/minimatch/README.md |
| RAG / retrieval | 15 | deps/node/test/common/README.md, deps/node/tools/node_modules/babel-eslint/node_modules/source-map/README.md, deps/node/tools/node_modules/eslint/node_modules/ajv/README.md |
| Korean language / Korea domain | 10 | README.md, deps/node/README.md, modules/packages/device-api/README.md |
| Infra / observability | 2 | deps/node/tools/node_modules/eslint/README.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | context-engineering, documentParsing, evalObservability, example-rich, frontend-dx, graphMemory, infra-observability, korea-signal, llm-wiki-memory, llmFramework, localRuntime, rag, sdk-api, security-compliance, spec-driven |
| stacks | Node/TypeScript/JavaScript, Python, C/C++ |
| capabilities | LLM/app framework, Graph/memory store, Document parsing/OCR, Eval/observability, Local runtime |


## 구조 요약

| key | value |
| --- | --- |
| files | 8000 (capped) |
| manifests | 40 |
| docs | 423 |
| tests | 3465 |
| ci/ops | 7 |
| spec artifacts | 1 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | Lightweight Node.js |
| headings | Lightweight Node.js |
| excerpt | Lightweight Node.js ! License https //img.shields.io/badge/LICENSE Apache%202 blue LICENSE ! Actions Status https //github.com/Samsung/lwnode/actions/workflows/actions.yml/badge.svg https //github.com/Samsung/lwnode/actions Lightweight Node.js lwnode is a memory efficient Node.js implementation, which runs on top of Escargot https //github.com/Samsung/escargot , a memory optimized JavaScript Engine developed by Samsung Research. The following provides useful information about lwnode Build Guide docs/Build.md Lightweight node.js Supported Features docs/Spec.md Modules docs/lwnode modules.md Debugging Guide docs/Debugger.md Memory Usage Report https //pages.github.sec.samsung.net/lws/lwnode No |


## 주요 파일

### Manifests

- deps/node/tools/doc/README.md
- deps/node/benchmark/README.md
- deps/node/test/common/README.md
- deps/node/test/fixtures/0-dns/README.md
- deps/node/test/fixtures/wpt/README.md
- deps/node/test/fixtures/wpt/resources/webidl2/lib/README.md
- deps/node/test/fixtures/wpt/resources/webidl2/README.md
- deps/node/test/fixtures/wpt/url/README.md
- deps/node/test/README.md
- deps/node/test/wasi/README.md
- deps/node/test/wpt/README.md
- deps/node/tools/inspector_protocol/README.md
- README.md
- deps/node/deps/histogram/README.md
- deps/node/deps/npm/node_modules/debug/README.md
- deps/node/deps/npm/node_modules/figgy-pudding/README.md
- deps/node/deps/npm/node_modules/inflight/README.md
- deps/node/deps/npm/node_modules/isexe/README.md
- deps/node/deps/npm/node_modules/jsbn/README.md
- deps/node/deps/npm/node_modules/lodash.clonedeep/README.md


### Spec / Docs / Prompt Artifacts

- docs/Spec.md


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| deps | 7702 |
| src | 95 |
| include | 53 |
| test | 51 |
| modules | 45 |
| docs | 14 |
| tools | 7 |
| sample | 5 |
| .github | 2 |
| packaging | 2 |
| .clang-format | 1 |
| .gitignore | 1 |
| .gitmodules | 1 |
| common.gypi | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .js | 5285 |
| .h | 281 |
| .md | 269 |
| .html | 267 |
| .cc | 263 |
| .json | 234 |
| [no-ext] | 197 |
| .py | 144 |
| .mjs | 142 |
| .headers | 105 |
| .gyp | 104 |
| .pem | 101 |
| .out | 94 |
| .c | 85 |
| .txt | 41 |
| .sh | 26 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
