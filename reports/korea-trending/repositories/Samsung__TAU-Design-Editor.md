# Samsung/TAU-Design-Editor

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/Samsung/TAU-Design-Editor |
| local path | sources/Samsung__TAU-Design-Editor |
| HEAD | bb3bebf |
| stars/forks | 28 / 18 |
| language | JavaScript |
| license | MIT |
| pushedAt | 2023-04-07T10:01:38Z |
| trendScore / priorityScore | 78 / 192 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Korean language / Korea domain | 16 | README.md, closet-component-packages/package.json, closet-default-component-packages/package.json |
| Spec / doc-driven workflow | 2 | tizen-package-builder/src/spec/support/jasmine.json |
| Frontend / developer experience | 1 | contents/libs/scrolling/package.json |
| LLM wiki / memory / graph | 1 | brackets-extension/README.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | documentParsing, example-rich, frontend-dx, korea-signal, llm-wiki-memory, rag, spec-driven |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | Document parsing/OCR |


## 구조 요약

| key | value |
| --- | --- |
| files | 878 |
| manifests | 40 |
| docs | 5 |
| tests | 36 |
| ci/ops | 0 |
| spec artifacts | 1 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title |  |
| headings | Getting Started / Prerequisites / Building for WATT / Building for VSCode extension / How to use for WATT / Features / Coding style tests / License |
| excerpt | TAU Design Editor ================= ! Build Status https //travis ci.org/Samsung/TAU Design Editor.svg?branch=master https //travis ci.org/Samsung/TAU Design Editor ! contributions welcome https //img.shields.io/badge/contributions welcome brightgreen.svg?style=flat https //github.com/Samsung/TAU Design Editor/issues This repository consists of Design Editor which offers WYSIWYG editing feature for TAU. This repo is used by WATT open source. Getting Started You can't use this repository standalone. It doesn't offer any UI which could be tested. It can be used as a part of WATT or VSCode extension. Prerequisites To build a TAU Design Editor ensure that you have Node.js 10.15.X installed. Exam |


## 주요 파일

### Manifests

- brackets-extension/README.md
- design-editor/README.md
- README.md
- closet-component-packages/components/paragraph_tag/package.json
- brackets-extension/package.json
- closet-component-packages/package.json
- closet-default-component-packages/package.json
- content-manager/package.json
- contents/package.json
- design-editor/package.json
- package.json
- tau-component-packages/package.json
- tau-html-parser/package.json
- tizen-package-builder/package.json
- brackets-extension/design-editor/package.json
- closet-component-packages/app-templates/desktop/empty-d/package.json
- closet-component-packages/app-templates/desktop/learn-animal-d/package.json
- closet-component-packages/app-templates/desktop/quiz-animal-d/package.json
- closet-component-packages/app-templates/desktop/shop-d/package.json
- closet-component-packages/app-templates/mobile/empty-m/package.json


### Spec / Docs / Prompt Artifacts

- tizen-package-builder/src/spec/support/jasmine.json


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| tau-component-packages | 283 |
| design-editor | 226 |
| contents | 112 |
| closet-component-packages | 71 |
| closet-default-component-packages | 52 |
| brackets-extension | 46 |
| vsc-extension | 30 |
| content-manager | 12 |
| tizen-package-builder | 9 |
| test | 8 |
| vsc | 7 |
| tau-html-parser | 5 |
| tools | 3 |
| .eslintignore | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .js | 303 |
| .json | 145 |
| .html | 96 |
| .less | 94 |
| .css | 56 |
| .svg | 56 |
| .ts | 45 |
| [no-ext] | 23 |
| .scss | 13 |
| .template | 13 |
| .xml | 13 |
| .md | 5 |
| .mp4 | 2 |
| .prefix | 2 |
| .suffix | 2 |
| .eot | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
