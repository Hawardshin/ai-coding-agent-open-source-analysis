# nhn/tui.code-snippet

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/nhn/tui.code-snippet |
| local path | sources/nhn__tui.code-snippet |
| HEAD | 3a88801 |
| stars/forks | 93 / 43 |
| language | JavaScript |
| license | MIT |
| pushedAt | 2023-07-09T10:14:33Z |
| trendScore / priorityScore | 73 / 175 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Spec / doc-driven workflow | 19 | docs/PULL_REQUEST_TEMPLATE.md, jest.config.js |
| LLM wiki / memory / graph | 17 | test/formatDate.spec.js, test/string.spec.js, CODE_OF_CONDUCT.md |
| RAG / retrieval | 4 | test/object.spec.js, object/pick.js |


## 분류와 스택

| key | value |
| --- | --- |
| categories | korea-signal, llm-wiki-memory, rag, spec-driven |
| stacks | Node/TypeScript/JavaScript |
| capabilities |  |


## 구조 요약

| key | value |
| --- | --- |
| files | 118 |
| manifests | 3 |
| docs | 10 |
| tests | 18 |
| ci/ops | 1 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | TOAST UI Tools: Code Snippet |
| headings | TOAST UI Tools: Code Snippet / 🚩 Table of Contents / 📙 Documents / 🎨 Features / 💾 Install / Via Package Manager / Download Source Files / 🔨 Usage / Bundle / 🌏 Browser Support |
| excerpt | TOAST UI Tools Code Snippet Group of utility methods to make ease with developing javascript applications. ! GitHub release https //img.shields.io/github/release/nhn/tui.code snippet.svg https //github.com/nhn/tui.code snippet/releases/latest ! npm https //img.shields.io/npm/v/tui code snippet.svg https //www.npmjs.com/package/tui code snippet ! GitHub license https //img.shields.io/github/license/nhn/tui.code snippet.svg https //github.com/nhn/tui.code snippet/blob/production/LICENSE ! PRs welcome https //img.shields.io/badge/PRs welcome ff69b4.svg https //github.com/nhn/tui.code snippet/labels/help%20wanted ! code with hearth by NHN Cloud https //img.shields.io/badge/%3C%2F%3E%20with%20%E2 |


## 주요 파일

### Manifests

- docs/README.md
- README.md
- package.json


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| type | 23 |
| domUtil | 18 |
| test | 18 |
| domEvent | 9 |
| .github | 5 |
| collection | 5 |
| docs | 4 |
| ajax | 3 |
| array | 3 |
| inheritance | 2 |
| object | 2 |
| request | 2 |
| string | 2 |
| tricks | 2 |


## 확장자 분포

| ext | count |
| --- | --- |
| .js | 96 |
| .md | 10 |
| [no-ext] | 6 |
| .json | 3 |
| .yml | 2 |
| .mjs | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
