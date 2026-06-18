# toss/suspensive

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/toss/suspensive |
| local path | sources/toss__suspensive |
| HEAD | 38703d1 |
| stars/forks | 1027 / 96 |
| language | TypeScript |
| license | MIT |
| pushedAt | 2026-06-14T11:51:17Z |
| trendScore / priorityScore | 118 / 299 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Frontend / developer experience | 500 | README.md, packages/jotai/README.md, packages/react-query/README.md |
| Korean language / Korea domain | 93 | docs/suspensive.org/README.md, README.md, docs/suspensive.org/package.json |
| LLM wiki / memory / graph | 7 | docs/suspensive.org/src/content/en/docs/react-query/createGetQueryClient.mdx |
| Security / compliance | 5 | docs/suspensive.org/src/content/en/docs/react-query/createGetQueryClient.mdx |
| Spec / doc-driven workflow | 2 | docs/suspensive.org/src/content/en/docs/react-query/migration/migrate-to-v2.mdx, docs/suspensive.org/src/content/en/docs/react-query/motivation.mdx |
| RAG / retrieval | 1 | docs/suspensive.org/src/content/en/docs/introduction.mdx |


## 분류와 스택

| key | value |
| --- | --- |
| categories | example-rich, frontend, frontend-dx, graphMemory, korea-signal, llm-wiki-memory, rag, sdk-api, security-compliance, spec-driven |
| stacks | Node/TypeScript/JavaScript |
| capabilities | Graph/memory store |


## 구조 요약

| key | value |
| --- | --- |
| files | 526 |
| manifests | 40 |
| docs | 206 |
| tests | 38 |
| ci/ops | 7 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title |  |
| headings | What is Suspensive? / Packages / Key Features / Getting Started / Contributors |
| excerpt | <div align="center" <a href="https //suspensive.org" title="Suspensive All in one for React Suspense" <img src="https //github.com/toss/suspensive/blob/main/docs/suspensive.org/public/img/banner.png?raw=true" alt="Suspensive — All in one for React Suspense" height="400" / </a <p <a href="https //www.npmjs.com/package/@suspensive/react" <img src="https //img.shields.io/npm/v/@suspensive/react.svg?style=flat square&colorA=000&colorB=000" alt="npm version" / </a <a href="https //www.npmjs.com/package/@suspensive/react" <img src="https //img.shields.io/npm/dm/@suspensive/react.svg?style=flat square&colorA=000&colorB=000" alt="npm downloads" / </a <a href="https //github.com/toss/suspensive" <img |


## 주요 파일

### Manifests

- docs/suspensive.org/README.md
- .changeset/README.md
- packages/codemods/README.md
- README.md
- packages/jotai/README.md
- packages/react-query/README.md
- packages/react/README.md
- docs/suspensive.org/next.config.mjs
- docs/suspensive.org/package.json
- docs/suspensive.org/tsconfig.json
- examples/next-streaming-react-query/next.config.mjs
- examples/next-streaming-react-query/package.json
- examples/next-streaming-react-query/tsconfig.json
- examples/visualization/next.config.mjs
- examples/visualization/package.json
- examples/visualization/tsconfig.json
- examples/vite-react-18-suspense-prerender-siblings-problem/package.json
- examples/vite-react-18-suspense-prerender-siblings-problem/tsconfig.json
- examples/vite-react-18-suspense-prerender-siblings-problem/vite.config.ts
- package.json


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| packages | 228 |
| docs | 189 |
| examples | 61 |
| .github | 14 |
| configs | 11 |
| .changeset | 2 |
| .vscode | 2 |
| .gitignore | 1 |
| .husky | 1 |
| .lintstagedrc | 1 |
| .npmrc | 1 |
| .nvmrc | 1 |
| assets | 1 |
| CNAME | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .tsx | 159 |
| .ts | 130 |
| .mdx | 108 |
| .json | 35 |
| .md | 18 |
| [no-ext] | 17 |
| .mjs | 16 |
| .yml | 13 |
| .svg | 10 |
| .jsx | 8 |
| .css | 5 |
| .js | 4 |
| .yaml | 2 |
| .html | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
