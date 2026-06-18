# naver/egjs-flicking-plugins

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/naver/egjs-flicking-plugins |
| local path | sources/naver__egjs-flicking-plugins |
| HEAD | 87671e2 |
| stars/forks | 61 / 11 |
| language | TypeScript |
| license | MIT |
| pushedAt | 2025-01-07T05:43:27Z |
| trendScore / priorityScore | 67 / 187 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Frontend / developer experience | 68 | package.json, test/hammer-simulator.run.js, .eslintrc.js |
| Korean language / Korea domain | 33 | README.md, package.json, config/validate-commit-msg.js |
| Spec / doc-driven workflow | 7 |  |
| LLM wiki / memory / graph | 1 | config/validate-commit-msg.js |
| RAG / retrieval | 1 | config/changelog.js |


## 분류와 스택

| key | value |
| --- | --- |
| categories | frontend-dx, korea-signal, llm-wiki-memory, localRuntime, rag, spec-driven |
| stacks | Node/TypeScript/JavaScript |
| capabilities | Local runtime |


## 구조 요약

| key | value |
| --- | --- |
| files | 73 |
| manifests | 6 |
| docs | 3 |
| tests | 26 |
| ci/ops | 1 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | @egjs/flicking-plugins [![version][badge-version]][link-version] <a href="https://travis-ci.org/naver/egjs-flicking-plugins" target="_blank"><img alt="Travis (.org)" src="https://img.shields.io/travis/naver/egjs-flicking-plugins.svg?style=flat-square&label=build&logo=travis%20ci" /></a> [![Coverage Status](https://coveralls.io/repos/github/naver/egjs-flicking-plugins/badge.svg?branch=master)](https://coveralls.io/github/naver/egjs-flicking-plugins?branch=master) |
| headings | @egjs/flicking-plugins [![version][badge-version]][link-version] <a href="https://travis-ci.org/naver/egjs-flicking-plugins" target="_blank"><img alt="Travis (.org)" src="https://img.shields.io/travis/naver/egjs-flicking-plugins.svg?style=flat-square&label=build&logo=travis%20ci" /></a> [![Coverage Status](https://coveralls.io/repos/github/naver/egjs-flicking-plugins/badge.svg?branch=master)](https://coveralls.io/github/naver/egjs-flicking-plugins?branch=master) / ⚙️ Installation / 🏃 Quick Start / 📝 Feedback / 📜 License |
| excerpt | @egjs/flicking plugins ! version badge version link version <a href="https //travis ci.org/naver/egjs flicking plugins" target=" blank" <img alt="Travis .org " src="https //img.shields.io/travis/naver/egjs flicking plugins.svg?style=flat square&label=build&logo=travis%20ci" / </a ! Coverage Status https //coveralls.io/repos/github/naver/egjs flicking plugins/badge.svg?branch=master https //coveralls.io/github/naver/egjs flicking plugins?branch=master <h1 align="center" style="max width 100%;" <img width="800" alt="Flicking Logo" src="https //naver.github.io/egjs flicking/images/flicking.svg" style="max width 100%;" / <br/ <a href="https //naver.github.io/egjs flicking/Plugins" @egjs/flicking |


## 주요 파일

### Manifests

- README.md
- package.json
- tsconfig.json
- tsconfig.test.json
- tsconfig.declaration.json
- tsconfig.eslint.json


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| test | 25 |
| src | 17 |
| config | 6 |
| .github | 4 |
| css | 2 |
| .editorconfig | 1 |
| .eslintrc.js | 1 |
| .gitignore | 1 |
| .npmignore | 1 |
| .travis.yml | 1 |
| CONTRIBUTING | 1 |
| jsdoc.json | 1 |
| karma.conf.js | 1 |
| LICENSE | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .ts | 25 |
| .js | 17 |
| .json | 7 |
| .css | 6 |
| .html | 5 |
| [no-ext] | 5 |
| .md | 3 |
| .yml | 3 |
| .opts | 1 |
| .template | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
