# naver/egjs-agent

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/naver/egjs-agent |
| local path | sources/naver__egjs-agent |
| HEAD | 6852f91 |
| stars/forks | 125 / 17 |
| language | TypeScript |
| license | MIT |
| pushedAt | 2024-08-23T06:28:45Z |
| trendScore / priorityScore | 105 / 252 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / tool use | 256 | README.md, package.json, src/agent.ts |
| Korean language / Korea domain | 76 | README.md, package.json, test/unit/userAgentConsts.ts |
| Frontend / developer experience | 7 | README.md, package.json, demo/_includes/facebook.html |
| Spec / doc-driven workflow | 4 | jest.config.js |
| LLM wiki / memory / graph | 3 | config/validate-commit-msg.js, CONTRIBUTING.md, demo/common/css/monokai.css |
| Security / compliance | 1 | README.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, example-rich, frontend-dx, korea-signal, llm-wiki-memory, rag, security-compliance, spec-driven |
| stacks | Node/TypeScript/JavaScript |
| capabilities |  |


## 구조 요약

| key | value |
| --- | --- |
| files | 63 |
| manifests | 4 |
| docs | 8 |
| tests | 6 |
| ci/ops | 0 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | egjs-agent |
| headings | egjs-agent / Documents / Download and Installation / Installation with npm / For development / Prepare for Client Hints and User-Agent Reduction! / User-Agent Reduction Proposed Rollout Plan / In the future / Possible (You can know exactly) / If you want to use only the method using navigator.userAgent |
| excerpt | egjs agent ! npm version https //img.shields.io/npm/v/@egjs/agent.svg?style=flat square&color=007acc&label=version https //www.npmjs.com/package/@egjs/agent ! Build Status https //img.shields.io/travis/naver/egjs agent.svg?style=flat square&label=build https //travis ci.org/naver/egjs agent ! Coverage Status https //img.shields.io/coveralls/github/naver/egjs agent.svg?style=flat square&label=coverage https //coveralls.io/github/naver/egjs agent?branch=master ! Support TypeScript https //img.shields.io/static/v1.svg?label=&message=TypeScript&color=294E80&style=flat square&logo=typescript Extracts browser and operating system information from the user agent string or user agent object userAgen |


## 주요 파일

### Manifests

- README.md
- package.json
- tsconfig.json
- tsconfig.declaration.json


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| demo | 27 |
| src | 7 |
| test | 6 |
| .github | 3 |
| config | 2 |
| .editorconfig | 1 |
| .eslintignore | 1 |
| .eslintrc | 1 |
| .gitignore | 1 |
| .npmignore | 1 |
| .travis.yml | 1 |
| CONTRIBUTING.md | 1 |
| global.d.ts | 1 |
| jest.config.js | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .ts | 12 |
| .html | 9 |
| .md | 8 |
| .js | 7 |
| [no-ext] | 7 |
| .svg | 6 |
| .json | 5 |
| .css | 4 |
| .yml | 4 |
| .template | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
