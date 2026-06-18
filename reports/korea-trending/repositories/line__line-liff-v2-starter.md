# line/line-liff-v2-starter

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/line/line-liff-v2-starter |
| local path | sources/line__line-liff-v2-starter |
| HEAD | a5bc549 |
| stars/forks | 376 / 385 |
| language | CSS |
| license | Apache-2.0 |
| pushedAt | 2025-10-09T02:58:17Z |
| trendScore / priorityScore | 96 / 222 |


## 한줄 해석

- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Frontend / developer experience | 13 | src/nextjs/package.json, src/nextjs/pages/_app.js, src/nextjs/pages/index.js |
| LLM wiki / memory / graph | 12 | CODE_OF_CONDUCT.md, LICENSE.txt |
| Korean language / Korea domain | 3 | src/nextjs/pages/index.js, src/nuxtjs/pages/index.vue, src/vanilla/index.html |
| Security / compliance | 3 | CODE_OF_CONDUCT.md, LICENSE.txt |


## 분류와 스택

| key | value |
| --- | --- |
| categories | frontend-dx, graphMemory, korea-signal, llm-wiki-memory, security-compliance |
| stacks | Node/TypeScript/JavaScript |
| capabilities | Graph/memory store |


## 구조 요약

| key | value |
| --- | --- |
| files | 34 |
| manifests | 10 |
| docs | 9 |
| tests | 0 |
| ci/ops | 0 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | LIFF Starter |
| headings | LIFF Starter / Getting Start / Build & Deploy / Deploy the app using 'Deploy to Netlify' button / Build and deploy the app with Netlify CLI tools / Demo site |
| excerpt | LIFF Starter LIFF Starter is a good starter template can help you understand how to integrate LIFF into your own development environment. You can check the source code and modify it to implement some cool stuff with LIFF API. Getting Start Install dependencies You can run local server with Build & Deploy Deploy the app using 'Deploy to Netlify' button ! Deploy to Netlify https //www.netlify.com/img/deploy/button.svg https //app.netlify.com/start/deploy?repository=https //github.com/line/line liff v2 starter 1. Click Deploy to Netlify above. 2. On the "Create New App" page in Netlify, fill in the required information. 3. Click Deploy app . Build and deploy the app with Netlify CLI tools 1. In |


## 주요 파일

### Manifests

- README.md
- src/nextjs/README.md
- src/nuxtjs/README.md
- src/vanilla/README.md
- package.json
- src/nextjs/next.config.js
- src/nextjs/package.json
- src/nuxtjs/package.json
- src/nuxtjs/tsconfig.json
- src/vanilla/package.json


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| src | 22 |
| .github | 3 |
| .gitignore | 1 |
| .nvmrc | 1 |
| CODE_OF_CONDUCT.md | 1 |
| CONTRIBUTING.md | 1 |
| LICENSE.txt | 1 |
| netlify.toml | 1 |
| package.json | 1 |
| PULL_REQUEST_TEMPLATE.md | 1 |
| README.md | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .md | 9 |
| [no-ext] | 8 |
| .js | 5 |
| .json | 5 |
| .css | 2 |
| .html | 1 |
| .toml | 1 |
| .ts | 1 |
| .txt | 1 |
| .vue | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
