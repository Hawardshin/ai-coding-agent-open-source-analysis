# line/line-openapi

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/line/line-openapi |
| local path | sources/line__line-openapi |
| HEAD | 779d8ca |
| stars/forks | 201 / 39 |
| language | JavaScript |
| license | Apache-2.0 |
| pushedAt | 2026-06-17T13:05:35Z |
| trendScore / priorityScore | 103 / 257 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Security / compliance | 28 | channel-access-token.yml, CODE_OF_CONDUCT.md, insight.yml |
| Frontend / developer experience | 25 | .github/workflows/sdk-testing.yml, liff.yml, tools/validate-property-camelcase.mjs |
| Korean language / Korea domain | 19 | .github/workflows/sdk-testing.yml, CODE_OF_CONDUCT.md, module-attach.yml |
| AI agent / tool use | 7 | .github/actions/post-comment-action/package-lock.json |
| Spec / doc-driven workflow | 5 | README.md, .github/workflows/sdk-testing.yml, module-attach.yml |
| RAG / retrieval | 3 | insight.yml |
| LLM wiki / memory / graph | 2 | CODE_OF_CONDUCT.md, module.yml |
| Infra / observability | 1 | README.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, frontend-dx, infra-observability, korea-signal, llm-wiki-memory, rag, sdk-api, security-compliance, spec-driven |
| stacks | Node/TypeScript/JavaScript |
| capabilities |  |


## 구조 요약

| key | value |
| --- | --- |
| files | 38 |
| manifests | 4 |
| docs | 5 |
| tests | 0 |
| ci/ops | 6 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | LINE OpenAPI |
| headings | LINE OpenAPI / What's this? / Which APIs are supported in this repository? / Project Files / How to Contribute / Known issues / Usage / Using Docker Command |
| excerpt | LINE OpenAPI What's this? This is the OpenAPI spec of the LINE's Public APIs. If you have an interesting use case for these files or have a request, please create an issue. Which APIs are supported in this repository? 1. This repository provides OpenAPI spec of the APIs, that listed on https //developers.line.biz/en/docs/. 2. This repository covers APIs on api.line.me , api data.line.me and manager.line.biz . Project Files File OpenAPI Version API EndPoint Description channel access token.yml 3.0.0 https //api.line.me/ Channel Access Token API insight.yml 3.0.0 https //api.line.me/v2/bot/insight/ Insight API liff.yml 3.0.2 https //api.line.me/liff/ LIFF API manage audience.yml 3.0.0 https // |


## 주요 파일

### Manifests

- README.md
- docker-compose.yml
- package.json
- .github/actions/post-comment-action/package.json


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| .github | 12 |
| tools | 8 |
| .gitignore | 1 |
| .spectral.yaml | 1 |
| channel-access-token.yml | 1 |
| CODE_OF_CONDUCT.md | 1 |
| docker-compose.yml | 1 |
| insight.yml | 1 |
| LICENSE | 1 |
| liff.yml | 1 |
| manage-audience.yml | 1 |
| messaging-api.yml | 1 |
| module-attach.yml | 1 |
| module.yml | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .yml | 16 |
| .mjs | 8 |
| .md | 5 |
| .json | 4 |
| [no-ext] | 2 |
| .js | 1 |
| .json5 | 1 |
| .yaml | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
