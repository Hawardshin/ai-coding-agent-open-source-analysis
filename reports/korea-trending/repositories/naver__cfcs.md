# naver/cfcs

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/naver/cfcs |
| local path | sources/naver__cfcs |
| HEAD | 798b4fb |
| stars/forks | 118 / 3 |
| language | TypeScript |
| license | MIT |
| pushedAt | 2025-07-24T02:02:42Z |
| trendScore / priorityScore | 75 / 217 |


## 한줄 해석

- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Frontend / developer experience | 468 | README.md, packages/core/README.md, packages/react/README.md |
| Korean language / Korea domain | 188 | README.md, packages/core/README.md, packages/react/README.md |
| Spec / doc-driven workflow | 24 | packages/docs/static/font/Staatliches/OFL.txt, config/typedoc-core.json, config/typedoc-react.json |
| LLM wiki / memory / graph | 3 | packages/docs/showcase/layout/index.tsx, packages/docs/showcase/layout/styles.module.css |


## 분류와 스택

| key | value |
| --- | --- |
| categories | example-rich, frontend, frontend-dx, graphMemory, korea-signal, llm-wiki-memory, llmFramework, spec-driven |
| stacks | Node/TypeScript/JavaScript |
| capabilities | LLM/app framework, Graph/memory store |


## 구조 요약

| key | value |
| --- | --- |
| files | 197 |
| manifests | 40 |
| docs | 68 |
| tests | 6 |
| ci/ops | 0 |
| spec artifacts | 1 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title |  |
| headings | Description / Who should use this library? / Concepts / CFCs Reactive / 📦 Packages / 📝 Feedback / 📜 License |
| excerpt | <p align="center" </p <h2 align="center" style="max width 100%;" <img src="./images/logo.png" / <br/ <a href=" " Cross Framework Components</a </h2 <p align="center" Write once, create framework components that supports React, Vue, Svelte, and more.</p <p align="middle" <a href="https //www.npmjs.com/package/@cfcs/core" target=" blank" <img src="https //img.shields.io/npm/v/@cfcs/core.svg?style=flat square&color=00d8ff&label=version&logo=NPM" </a &nbsp; <img src="https //img.shields.io/badge/language typescript blue.svg?style=flat square" / &nbsp; <a href="https //github.com/naver/cfcs/blob/main/LICENSE" target=" blank" <img alt="GitHub" src="https //img.shields.io/github/license/naver/cfcs. |


## 주요 파일

### Manifests

- README.md
- packages/angular/projects/angular/README.md
- packages/angular/README.md
- packages/cli/README.md
- packages/core/README.md
- packages/react/README.md
- packages/svelte/README.md
- packages/vue2/README.md
- packages/vue3/README.md
- packages/docs/package.json
- packages/docs/tsconfig.json
- package.json
- tsconfig.json
- packages/angular/package.json
- packages/angular/projects/angular/package.json
- packages/angular/tsconfig.json
- packages/cli/package.json
- packages/cli/tsconfig.json
- packages/core/package.json
- packages/core/tsconfig.json


### Spec / Docs / Prompt Artifacts

- packages/angular/.vscode/tasks.json


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| packages | 173 |
| config | 10 |
| .github | 2 |
| .editorconfig | 1 |
| .gitignore | 1 |
| .yarnrc | 1 |
| CHANGELOG.md | 1 |
| lerna.json | 1 |
| LICENSE | 1 |
| NOTICE | 1 |
| package.json | 1 |
| reactive.md | 1 |
| README.md | 1 |
| tsconfig.api.json | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .ts | 53 |
| .json | 48 |
| .md | 19 |
| .mdx | 18 |
| [no-ext] | 18 |
| .js | 16 |
| .tsx | 12 |
| .css | 6 |
| .html | 3 |
| .svg | 2 |
| .ttf | 1 |
| .txt | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
