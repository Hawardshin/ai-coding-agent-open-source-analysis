# nhn/tui.editor

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/nhn/tui.editor |
| local path | sources/nhn__tui.editor |
| HEAD | 0c5c11b |
| stars/forks | 17983 / 1848 |
| language | TypeScript |
| license | MIT |
| pushedAt | 2024-08-01T15:38:05Z |
| trendScore / priorityScore | 99 / 274 |


## 한줄 해석

- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.
- 스타 수가 높아 글로벌 채택/학습 자료로도 우선순위가 높다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Frontend / developer experience | 122 | README.md, apps/react-editor/README.md, apps/vue-editor/README.md |
| Spec / doc-driven workflow | 92 | README.md, libs/toastmark/README.md, apps/editor/src/spec/mark.ts |
| LLM wiki / memory / graph | 11 | README.md, libs/toastmark/package.json, docs/en/i18n.md |
| Korean language / Korea domain | 5 | README.md, docs/en/i18n.md, docs/ko/i18n.md |
| AI agent / tool use | 2 | libs/toastmark/README.md |
| Security / compliance | 1 | README.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, data-ml, example-rich, frontend, frontend-dx, korea-signal, llm-wiki-memory, security-compliance, spec-driven |
| stacks | Node/TypeScript/JavaScript |
| capabilities |  |


## 구조 요약

| key | value |
| --- | --- |
| files | 499 |
| manifests | 31 |
| docs | 40 |
| tests | 61 |
| ci/ops | 9 |
| spec artifacts | 3 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | ![TOAST UI Editor](https://uicdn.toast.com/toastui/img/tui-editor-bi.png) |
| headings | ![TOAST UI Editor](https://uicdn.toast.com/toastui/img/tui-editor-bi.png) / 🚩 Table of Contents / 📦 Packages / TOAST UI Editor / TOAST UI Editor's Wrappers / TOAST UI Editor's Plugins / 🤖 Why TOAST UI Editor? / Productive Markdown Mode / Easy WYSIWYG Mode / UI |
| excerpt | ! TOAST UI Editor https //uicdn.toast.com/toastui/img/tui editor bi.png GFM Markdown and WYSIWYG Editor Productive and Extensible ! github release version https //img.shields.io/github/v/release/nhn/tui.editor.svg?include prereleases https //github.com/nhn/tui.editor/releases/latest ! npm version https //img.shields.io/npm/v/@toast ui/editor.svg https //www.npmjs.com/package/@toast ui/editor ! license https //img.shields.io/github/license/nhn/tui.editor.svg https //github.com/nhn/tui.editor/blob/master/LICENSE ! PRs welcome https //img.shields.io/badge/PRs welcome ff69b4.svg https //github.com/nhn/tui.editor/issues?q=is%3Aissue+is%3Aopen+label%3A%22help+wanted%22 ! code with hearth by NHN Cl |


## 주요 파일

### Manifests

- docs/README.md
- docs/ko/README.md
- README.md
- apps/editor/README.md
- apps/react-editor/README.md
- apps/vue-editor/README.md
- libs/toastmark/README.md
- plugins/chart/README.md
- plugins/code-syntax-highlight/README.md
- plugins/color-syntax/README.md
- plugins/table-merged-cell/README.md
- plugins/uml/README.md
- package.json
- tsconfig.json
- apps/editor/package.json
- apps/editor/tsconfig.json
- apps/react-editor/package.json
- apps/react-editor/tsconfig.json
- apps/vue-editor/package.json
- libs/toastmark/package.json


### Spec / Docs / Prompt Artifacts

- apps/editor/src/spec/mark.ts
- apps/editor/src/spec/node.ts
- apps/editor/src/spec/specManager.ts


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| apps | 272 |
| plugins | 110 |
| libs | 59 |
| docs | 25 |
| .github | 14 |
| scripts | 2 |
| __mocks__ | 1 |
| .eslintrc.js | 1 |
| .gitignore | 1 |
| .prettierignore | 1 |
| .prettierrc.js | 1 |
| CODE_OF_CONDUCT.md | 1 |
| CONTRIBUTING.md | 1 |
| jest-setup.js | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .ts | 315 |
| .js | 52 |
| .md | 40 |
| .html | 36 |
| .json | 23 |
| .yml | 11 |
| .css | 10 |
| [no-ext] | 4 |
| .snap | 3 |
| .tsx | 2 |
| .vue | 2 |
| .jsx | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
