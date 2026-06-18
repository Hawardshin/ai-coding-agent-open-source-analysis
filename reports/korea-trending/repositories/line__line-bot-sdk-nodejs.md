# line/line-bot-sdk-nodejs

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/line/line-bot-sdk-nodejs |
| local path | sources/line__line-bot-sdk-nodejs |
| HEAD | 375db1d |
| stars/forks | 1067 / 429 |
| language | TypeScript |
| license | Apache-2.0 |
| pushedAt | 2026-06-17T13:31:18Z |
| trendScore / priorityScore | 122 / 326 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Frontend / developer experience | 367 | examples/echo-bot-esm/README.md, examples/echo-bot-ts-cjs/README.md, examples/echo-bot-ts-esm/README.md |
| AI agent / tool use | 97 | test/http-fetch.spec.ts, test/libs-channelAccessToken.spec.ts, test/libs-manageAudience.spec.ts |
| Korean language / Korea domain | 79 | examples/echo-bot-esm/README.md, examples/echo-bot-ts-cjs/README.md, examples/echo-bot-ts-esm/README.md |
| Security / compliance | 49 | examples/echo-bot-ts-cjs/README.md, examples/echo-bot-ts-esm/README.md, README.md |
| Spec / doc-driven workflow | 39 | examples/kitchensink/README.md, generator/README.md, README.md |
| RAG / retrieval | 20 | docs/guide/client.md, docs/guide/migration.md, test/line-bot-client.spec.ts |
| LLM wiki / memory / graph | 1 | CODE_OF_CONDUCT.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, example-rich, frontend-dx, korea-signal, llm-wiki-memory, llmFramework, localRuntime, rag, sdk-api, security-compliance, spec-driven |
| stacks | Node/TypeScript/JavaScript, Python, Java/Kotlin |
| capabilities | LLM/app framework, Local runtime |


## 구조 요약

| key | value |
| --- | --- |
| files | 565 |
| manifests | 31 |
| docs | 26 |
| tests | 49 |
| ci/ops | 9 |
| spec artifacts | 1 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | LINE Messaging API SDK for nodejs |
| headings | LINE Messaging API SDK for nodejs / Introduction / Documentation / Requirements / Installation / Help and media / Versioning / Contributing / License |
| excerpt | LINE Messaging API SDK for nodejs ! Github Action https //github.com/line/line bot sdk nodejs/actions/workflows/test.yml/badge.svg https //github.com/line/line bot sdk nodejs/actions/workflows/test.yml ! npmjs https //badge.fury.io/js/%40line%2Fbot sdk.svg https //www.npmjs.com/package/@line/bot sdk Introduction The LINE Messaging API SDK for nodejs makes it easy to develop bots using LINE Messaging API, and you can create a sample bot within minutes. Documentation See the official API documentation for more information English https //developers.line.biz/en/docs/messaging api/overview/ Japanese https //developers.line.biz/ja/docs/messaging api/overview/ line bot sdk nodejs documentation htt |


## 주요 파일

### Manifests

- examples/echo-bot-esm/README.md
- examples/echo-bot-ts-cjs/README.md
- examples/echo-bot-ts-esm/README.md
- examples/echo-bot/README.md
- examples/kitchensink/README.md
- examples/rich-menu/README.md
- generator/README.md
- README.md
- examples/echo-bot-esm/package.json
- examples/echo-bot-ts-cjs/package.json
- examples/echo-bot-ts-cjs/tsconfig.json
- examples/echo-bot-ts-esm/package.json
- examples/echo-bot-ts-esm/tsconfig.json
- examples/echo-bot/package.json
- examples/kitchensink/package.json
- examples/rich-menu/package.json
- generator/pom.xml
- package.json
- test/consumer/fixtures/js-cjs/package.json
- test/consumer/fixtures/js-esm/package.json


### Spec / Docs / Prompt Artifacts

- docs/getting-started/requirements.md


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| lib | 409 |
| examples | 42 |
| test | 37 |
| generator | 21 |
| .github | 14 |
| docs | 13 |
| scripts | 12 |
| .editorconfig | 1 |
| .gitignore | 1 |
| .gitmodules | 1 |
| .npmrc | 1 |
| .prettierrc.json | 1 |
| CODE_OF_CONDUCT.md | 1 |
| CONTRIBUTING.md | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .ts | 412 |
| [no-ext] | 48 |
| .json | 28 |
| .md | 22 |
| .mjs | 14 |
| .pebble | 10 |
| .yml | 10 |
| .java | 5 |
| .cjs | 4 |
| .js | 4 |
| .codegenconfig | 1 |
| .json5 | 1 |
| .mp4 | 1 |
| .py | 1 |
| .sh | 1 |
| .templatingengineadapter | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
