# line/liff-mock

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/line/liff-mock |
| local path | sources/line__liff-mock |
| HEAD | 3d0c863 |
| stars/forks | 45 / 6 |
| language | TypeScript |
| license | Apache-2.0 |
| pushedAt | 2025-11-17T03:28:58Z |
| trendScore / priorityScore | 69 / 159 |


## 한줄 해석

- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Frontend / developer experience | 26 | README.md, examples/npm-typescript-example/package.json, package.json |
| Security / compliance | 2 | CODE_OF_CONDUCT.md |
| LLM wiki / memory / graph | 1 | CODE_OF_CONDUCT.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | example-rich, frontend-dx, korea-signal, llm-wiki-memory, sdk-api, security-compliance |
| stacks | Node/TypeScript/JavaScript |
| capabilities |  |


## 구조 요약

| key | value |
| --- | --- |
| files | 123 |
| manifests | 5 |
| docs | 2 |
| tests | 48 |
| ci/ops | 1 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | LIFF Mock |
| headings | LIFF Mock / Usage / NPM / With [Pluggable SDK](https://developers.line.biz/en/docs/liff/pluggable-sdk/) / CDN / API / liff.$mock.set / liff.$mock.clear / Example / Contribution |
| excerpt | LIFF Mock LIFF Mock is a LIFF Plugin that make testing your LIFF app easy. ※ LIFF Plugin feature is available since LIFF SDK v2.19.0. Usage NPM With Pluggable SDK https //developers.line.biz/en/docs/liff/pluggable sdk/ If you use LIFF Mock with Pluggable SDK mode, you have to install IsInClientModule before the installation of LiffMockPlugin because LIFF Mock depends on liff.isInClient API. CDN https //unpkg.com/@line/liff mock@1.0.4/dist/umd/liff mock.js API liff.$mock.set Set mock data liff.$mock.clear Restore default mock data Example See examples ./examples Contribution |


## 주요 파일

### Manifests

- README.md
- examples/npm-typescript-example/package.json
- examples/npm-typescript-example/tsconfig.json
- package.json
- tsconfig.json


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| src | 100 |
| examples | 9 |
| .github | 2 |
| .eslintrc.json | 1 |
| .gitignore | 1 |
| .nvmrc | 1 |
| .prettierrc.json | 1 |
| CODE_OF_CONDUCT.md | 1 |
| jest.config.js | 1 |
| LICENSE | 1 |
| package-lock.json | 1 |
| package.json | 1 |
| README.md | 1 |
| tsconfig.json | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .ts | 102 |
| .json | 8 |
| .js | 4 |
| [no-ext] | 4 |
| .html | 2 |
| .md | 2 |
| .yml | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
