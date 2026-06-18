# toss/overlay-kit

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/toss/overlay-kit |
| local path | sources/toss__overlay-kit |
| HEAD | 8f0e59c |
| stars/forks | 713 / 78 |
| language | TypeScript |
| license | MIT |
| pushedAt | 2026-06-04T16:31:10Z |
| trendScore / priorityScore | 111 / 291 |


## 한줄 해석

- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Frontend / developer experience | 500 | packages/README.md, README.md, docs/next.config.mjs |
| Korean language / Korea domain | 129 | packages/README.md, README.md, packages/package.json |
| LLM wiki / memory / graph | 85 | docs/public/llms-full.txt, docs/public/llms.txt, docs/public/ai.txt |
| AI agent / tool use | 8 | docs/src/pages/en/docs/ai-for-agents/llms-txt.mdx, docs/src/pages/en/docs/_meta.tsx, docs/src/pages/ko/docs/_meta.tsx |
| Security / compliance | 1 | packages/CHANGELOG.md |
| Spec / doc-driven workflow | 1 | docs/public/llms-full.txt |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, documentParsing, example-rich, frontend, frontend-dx, graphMemory, korea-signal, llm-wiki-memory, sdk-api, security-compliance, spec-driven |
| stacks | Node/TypeScript/JavaScript |
| capabilities | Graph/memory store, Document parsing/OCR |


## 구조 요약

| key | value |
| --- | --- |
| files | 181 |
| manifests | 24 |
| docs | 89 |
| tests | 7 |
| ci/ops | 3 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | overlay-kit &middot; [![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/toss/overlay-kit/blob/main/LICENSE) [![codecov](https://codecov.io/gh/toss/overlay-kit/graph/badge.svg?token=JBEAQTL7XK)](https://codecov.io/gh/toss/overlay-kit) [![Ask DeepWiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/toss/overlay-kit) |
| headings | overlay-kit &middot; [![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/toss/overlay-kit/blob/main/LICENSE) [![codecov](https://codecov.io/gh/toss/overlay-kit/graph/badge.svg?token=JBEAQTL7XK)](https://codecov.io/gh/toss/overlay-kit) [![Ask DeepWiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/toss/overlay-kit) / Example / Opening Simple Overlays / Opening Asynchronous Overlays / Why use overlay-kit? / Problems with Traditional Overlay Management** / Goals of overlay-kit / License |
| excerpt | ! ./docs/public/og.png overlay kit &middot; ! MIT License https //img.shields.io/badge/license MIT blue.svg https //github.com/toss/overlay kit/blob/main/LICENSE ! codecov https //codecov.io/gh/toss/overlay kit/graph/badge.svg?token=JBEAQTL7XK https //codecov.io/gh/toss/overlay kit ! Ask DeepWiki https //deepwiki.com/badge.svg https //deepwiki.com/toss/overlay kit English 한국어 https //github.com/toss/overlay kit/blob/main/README ko kr.md 日本語 https //github.com/toss/overlay kit/blob/main/README ja JP.md overlay kit is a library for declaratively managing overlays like modals, popups, and dialogs in React. You can efficiently implement overlays without complex state management or unnecessary ev |


## 주요 파일

### Manifests

- .changeset/README.md
- packages/README.md
- README.md
- docs/next.config.mjs
- docs/package.json
- docs/tsconfig.json
- examples/react-16/framer-motion/package.json
- examples/react-16/framer-motion/tsconfig.json
- examples/react-16/framer-motion/vite.config.ts
- examples/react-17/framer-motion/package.json
- examples/react-17/framer-motion/tsconfig.json
- examples/react-17/framer-motion/vite.config.ts
- examples/react-18/framer-motion/package.json
- examples/react-18/framer-motion/tsconfig.json
- examples/react-18/framer-motion/vite.config.ts
- examples/react-19/framer-motion/package.json
- examples/react-19/framer-motion/tsconfig.json
- examples/react-19/framer-motion/vite.config.ts
- package.json
- packages/package.json


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| docs | 82 |
| examples | 36 |
| packages | 26 |
| .yarn | 16 |
| .github | 5 |
| .changeset | 2 |
| .vscode | 2 |
| .gitignore | 1 |
| .nvmrc | 1 |
| .prettierignore | 1 |
| .prettierrc | 1 |
| .yarnrc.yml | 1 |
| codecov.yml | 1 |
| eslint.config.cjs | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .mdx | 48 |
| .tsx | 41 |
| .ts | 26 |
| .json | 19 |
| [no-ext] | 14 |
| .js | 7 |
| .md | 7 |
| .yml | 6 |
| .cjs | 4 |
| .html | 4 |
| .txt | 3 |
| .mjs | 1 |
| .mts | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
