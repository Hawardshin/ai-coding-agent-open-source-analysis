# line/liff-playground

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/line/liff-playground |
| local path | sources/line__liff-playground |
| HEAD | f5ab823 |
| stars/forks | 118 / 56 |
| language | TypeScript |
| license | Apache-2.0 |
| pushedAt | 2026-05-13T02:58:08Z |
| trendScore / priorityScore | 91 / 202 |


## 한줄 해석

- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Frontend / developer experience | 69 | package.json, tsconfig.json, vite.config.ts |
| LLM wiki / memory / graph | 12 | CODE_OF_CONDUCT.md, LICENSE.txt |
| Korean language / Korea domain | 4 | README.md, CONTRIBUTING.md |
| Security / compliance | 3 | CODE_OF_CONDUCT.md, LICENSE.txt |


## 분류와 스택

| key | value |
| --- | --- |
| categories | frontend, frontend-dx, graphMemory, korea-signal, llm-wiki-memory, security-compliance |
| stacks | Node/TypeScript/JavaScript |
| capabilities | Graph/memory store |


## 구조 요약

| key | value |
| --- | --- |
| files | 43 |
| manifests | 4 |
| docs | 3 |
| tests | 0 |
| ci/ops | 3 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | LIFF Playground |
| headings | LIFF Playground / Table of contents / Preparation / 1. Get a LIFF ID / 2. Set the LIFF ID / Usage / Run on local / Deploy to a server |
| excerpt | LIFF Playground This is a web application that allows you to try out the basic features of the LINE Front end Framework LIFF https //developers.line.biz/en/docs/liff/overview/ . For example, you can deploy the following playground to your server. LIFF Playground https //liff playground.netlify.app Table of contents Preparation preparation 1. Get a LIFF ID 1 get a liff id 1. Set the LIFF ID 2 set the liff id Usage usage Run on local run on local Deploy to a server deploy to a server Preparation 1. Get a LIFF ID To start the LIFF Playground, you need to obtain a LIFF ID from the LINE Developers Console https //developers.line.biz/console/ . Follow the steps below to obtain a LIFF ID. Create a |


## 주요 파일

### Manifests

- README.md
- package.json
- tsconfig.json
- vite.config.ts


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| src | 23 |
| .github | 4 |
| public | 2 |
| .eslintrc.json | 1 |
| .gitignore | 1 |
| .nvmrc | 1 |
| .prettierignore | 1 |
| .prettierrc.json | 1 |
| CODE_OF_CONDUCT.md | 1 |
| CONTRIBUTING.md | 1 |
| index.html | 1 |
| LICENSE.txt | 1 |
| netlify.toml | 1 |
| package.json | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .css | 10 |
| .tsx | 10 |
| .json | 4 |
| .ts | 4 |
| [no-ext] | 4 |
| .md | 3 |
| .yml | 3 |
| .html | 1 |
| .mp3 | 1 |
| .mp4 | 1 |
| .toml | 1 |
| .txt | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
