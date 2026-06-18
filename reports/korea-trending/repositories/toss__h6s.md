# toss/h6s

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/toss/h6s |
| local path | sources/toss__h6s |
| HEAD | 668be4b |
| stars/forks | 316 / 27 |
| language | TypeScript |
| license | MIT |
| pushedAt | 2026-04-09T08:49:45Z |
| trendScore / priorityScore | 87 / 221 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Frontend / developer experience | 201 | README.md, docs/calendar/next.config.mjs, docs/calendar/package.json |
| Korean language / Korea domain | 18 | README.md, package.json, packages/calendar/package.json |
| RAG / retrieval | 4 | .pnp.loader.mjs |


## 분류와 스택

| key | value |
| --- | --- |
| categories | example-rich, frontend, frontend-dx, korea-signal, rag, sdk-api |
| stacks | Node/TypeScript/JavaScript |
| capabilities |  |


## 구조 요약

| key | value |
| --- | --- |
| files | 300 |
| manifests | 23 |
| docs | 119 |
| tests | 20 |
| ci/ops | 8 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title |  |
| headings | Example / `useSelection(options)` / Examples / Why @h6s/calendar? / Problems with traditional calendar libraries / How @h6s/calendar solves this / Contributing / Other Packages / @h6s/table / License |
| excerpt | <div align="center" <img width="200" src="./assets/logo.png" alt="h6s" / <h1 @h6s/calendar</h1 A tiny, headless calendar hook for React. ! npm https //img.shields.io/npm/v/@h6s/calendar https //www.npmjs.com/package/@h6s/calendar ! bundle size https //img.shields.io/bundlephobia/minzip/@h6s/calendar?label=size https //bundlephobia.com/package/@h6s/calendar ! MIT License https //img.shields.io/badge/license MIT blue.svg https //github.com/toss/h6s/blob/main/LICENSE ! Ask DeepWiki https //deepwiki.com/badge.svg https //deepwiki.com/toss/h6s </div ENGLISH 한국어 ./README ko kr.md @h6s/calendar is a headless calendar hook library for React. It provides date calculations, navigation, and selection l |


## 주요 파일

### Manifests

- docs/calendar/README.md
- .changeset/README.md
- README.md
- website/README.md
- packages/calendar/README.md
- packages/table/README.md
- docs/calendar/next.config.mjs
- docs/calendar/package.json
- docs/calendar/tsconfig.json
- examples/react/next.config.js
- examples/react/package.json
- examples/react/tsconfig.json
- package.json
- tsconfig.json
- website/package.json
- website/tsconfig.json
- .yarn/sdks/prettier/package.json
- .yarn/sdks/typescript/package.json
- packages/calendar/package.json
- packages/calendar/tsconfig.json


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| packages | 100 |
| docs | 96 |
| website | 26 |
| examples | 17 |
| .github | 16 |
| .yarn | 12 |
| .idea | 4 |
| .storybook | 3 |
| .changeset | 2 |
| .vscode | 2 |
| scripts | 2 |
| .all-contributorsrc | 1 |
| .codesandbox | 1 |
| .gitignore | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .ts | 97 |
| .tsx | 59 |
| .json | 24 |
| .md | 23 |
| .js | 16 |
| .mdx | 16 |
| .css | 15 |
| .yml | 14 |
| [no-ext] | 13 |
| .html | 10 |
| .cjs | 4 |
| .xml | 3 |
| .mjs | 2 |
| .toml | 2 |
| .iml | 1 |
| .svg | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
