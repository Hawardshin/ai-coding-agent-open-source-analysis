# line/abc-def

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/line/abc-def |
| local path | sources/line__abc-def |
| HEAD | 16790d2 |
| stars/forks | 103 / 7 |
| language | TypeScript |
| license | Apache-2.0 |
| pushedAt | 2026-06-16T23:37:56Z |
| trendScore / priorityScore | 94 / 232 |


## 한줄 해석

- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Frontend / developer experience | 500 | .changeset/README.md, README.md, packages/react/README.md |
| Security / compliance | 48 | README.md, apps/docs/src/content/component-example-code.ts, apps/docs/src/content/component-examples.tsx |
| LLM wiki / memory / graph | 4 | apps/docs/src/components/theme-toggle.tsx, apps/docs/src/content/components.ts, CODE_OF_CONDUCT.md |
| Korean language / Korea domain | 2 | CODE_OF_CONDUCT.md, CONTRIBUTING.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | example-rich, frontend, frontend-dx, graphMemory, korea-signal, llm-wiki-memory, security-compliance |
| stacks | Node/TypeScript/JavaScript |
| capabilities | Graph/memory store |


## 구조 요약

| key | value |
| --- | --- |
| files | 1291 |
| manifests | 28 |
| docs | 46 |
| tests | 0 |
| ci/ops | 3 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | ABC Def |
| headings | ABC Def / Packages / Install / Usage / Examples / Compatibility / Development / License |
| excerpt | ABC Def ABC Def is a CSS first design system for shared UI packages. The visual contract lives in @line/abc def styles ; the React and Vue packages render components against the same semantic selectors and tokens. Packages @line/abc def styles Tailwind CSS v4 tokens, semantic variables, and component selectors. @line/abc def react React components that render the shared selector contract. @line/abc def vue Vue components that render the shared selector contract. Install Install only the framework package you use. Plain HTML projects only need @line/abc def styles . Usage Import the shared stylesheet from CSS processed by Tailwind CSS v4 React apps import components from subpath entry points |


## 주요 파일

### Manifests

- .changeset/README.md
- README.md
- packages/react/README.md
- packages/styles/README.md
- packages/vue/README.md
- apps/docs/package.json
- apps/docs/tsconfig.json
- examples/html-vite/package.json
- examples/html-vite/tsconfig.json
- examples/html-vite/vite.config.ts
- examples/nextjs/package.json
- examples/nextjs/tsconfig.json
- examples/vue-vite/package.json
- examples/vue-vite/tsconfig.json
- examples/vue-vite/vite.config.ts
- package.json
- packages/react/package.json
- packages/react/tsconfig.json
- packages/styles/package.json
- packages/vue/package.json


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| examples | 738 |
| packages | 478 |
| apps | 33 |
| tooling | 17 |
| .github | 6 |
| .changeset | 2 |
| .vscode | 2 |
| .gitignore | 1 |
| .npmrc | 1 |
| .nvmrc | 1 |
| CHANGELOG.md | 1 |
| CODE_OF_CONDUCT.md | 1 |
| CONTRIBUTING.md | 1 |
| docs | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .vue | 607 |
| .tsx | 449 |
| .ts | 93 |
| .css | 57 |
| .json | 29 |
| .html | 19 |
| .md | 13 |
| .js | 9 |
| .yaml | 5 |
| [no-ext] | 4 |
| .mjs | 2 |
| .mp4 | 2 |
| .svg | 1 |
| .yml | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
