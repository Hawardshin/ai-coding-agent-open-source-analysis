# toss/use-funnel

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/toss/use-funnel |
| local path | sources/toss__use-funnel |
| HEAD | 26a9aa7 |
| stars/forks | 567 / 61 |
| language | TypeScript |
| license | MIT |
| pushedAt | 2026-04-09T05:54:53Z |
| trendScore / priorityScore | 103 / 266 |


## 한줄 해석

- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Frontend / developer experience | 414 | docs/README.md, examples/nextjs-app-router/README.md, examples/nextjs-pages-router/README.md |
| Korean language / Korea domain | 179 | README.md, packages/browser/README.md, packages/core/README.md |
| Spec / doc-driven workflow | 3 | packages/core/test/stepBuilder.test.tsx |
| Security / compliance | 2 | packages/browser/CHANGELOG.md, packages/core/CHANGELOG.md |
| LLM wiki / memory / graph | 1 | CODE_OF_CONDUCT.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | example-rich, frontend, frontend-dx, graphMemory, korea-signal, llm-wiki-memory, security-compliance, spec-driven |
| stacks | Node/TypeScript/JavaScript |
| capabilities | Graph/memory store |


## 구조 요약

| key | value |
| --- | --- |
| files | 194 |
| manifests | 40 |
| docs | 78 |
| tests | 15 |
| ci/ops | 2 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | @use-funnel |
| headings | @use-funnel / Core Concepts / Strong Type Support / State Management by History / Various Router Support / Example / Visit [use-funnel.slash.page](https://use-funnel.slash.page) for docs, guides, API and more! / Contributing |
| excerpt | @use funnel <div align="center" <a href="https //use funnel.slash.page" title="@use funnel A powerful and safe step by step state management library" <img src="./docs/public/logo.png" width="200" / <h2 align="center" @use funnel</h2 </a <p style="font size 18px;" A powerful and safe step by step state management library</p </div ! MIT License https //img.shields.io/badge/license MIT blue.svg https //github.com/toss/use funnel/blob/main/LICENSE ! Discord Badge https //discord.com/api/guilds/1281071127052943361/widget.png?style=shield https //discord.gg/vGXbVjP2nY @use funnel is a React Hook https //react.dev/reference/rules/rules of hooks that helps you easily implement complex UI flows. Core |


## 주요 파일

### Manifests

- docs/README.md
- .changeset/README.md
- examples/nextjs-app-router/README.md
- examples/nextjs-pages-router/README.md
- README.md
- packages/browser/README.md
- packages/core/README.md
- packages/next/README.md
- packages/react-navigation-native/README.md
- packages/react-router-dom/README.md
- packages/react-router/README.md
- docs/next.config.mjs
- docs/package.json
- docs/tsconfig.json
- examples/nextjs-app-router/next.config.mjs
- examples/nextjs-app-router/package.json
- examples/nextjs-app-router/tsconfig.json
- examples/nextjs-pages-router/next.config.mjs
- examples/nextjs-pages-router/package.json
- examples/nextjs-pages-router/tsconfig.json


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| packages | 76 |
| docs | 58 |
| examples | 33 |
| _templates | 7 |
| .github | 6 |
| .changeset | 2 |
| .gitignore | 1 |
| .npmrc | 1 |
| .nvmrc | 1 |
| .vscode | 1 |
| CODE_OF_CONDUCT.md | 1 |
| CONTRIBUTING.md | 1 |
| eslint.config.js | 1 |
| LICENSE | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .tsx | 37 |
| .ts | 32 |
| .mdx | 28 |
| .json | 27 |
| .md | 21 |
| .js | 13 |
| [no-ext] | 8 |
| .t | 7 |
| .mjs | 6 |
| .yml | 5 |
| .css | 3 |
| .svg | 2 |
| .yaml | 2 |
| .cjs | 1 |
| .mp4 | 1 |
| .webmanifest | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
