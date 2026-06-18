# kakao/kafka-connect-web

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/kakao/kafka-connect-web |
| local path | sources/kakao__kafka-connect-web |
| HEAD | ba3298d |
| stars/forks | 119 / 12 |
| language | Vue |
| license | Apache-2.0 |
| pushedAt | 2023-10-17T09:30:54Z |
| trendScore / priorityScore | 72 / 174 |


## 한줄 해석

- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Frontend / developer experience | 41 | README.md, Dockerfile, package.json |
| LLM wiki / memory / graph | 11 | NOTICE.md |
| Korean language / Korea domain | 4 | README.md, CONTRIBUTING.md, NOTICE.md |
| Security / compliance | 2 | README.md, NOTICE.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | frontend-dx, graphMemory, korea-signal, llm-wiki-memory, security-compliance |
| stacks | Node/TypeScript/JavaScript |
| capabilities | Graph/memory store |


## 구조 요약

| key | value |
| --- | --- |
| files | 19 |
| manifests | 3 |
| docs | 3 |
| tests | 0 |
| ci/ops | 1 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | kafka-connect-web |
| headings | kafka-connect-web / Features / Preset CORS config in connect-distributed.properties / Quickstart with docker image / Build & Run from source / License |
| excerpt | kafka connect web ! screenshot screenshot.png This project is a web tool for operating kafka connect. Kafka source/sink connectors can be created, modified, and deleted through the web. It can also operate connections linked to multiple Kafka connect clusters. You can use it for immediate operation through the docker image. Features Managing kafka connectors Multiple Kafka Connect Cluster support Create source/sink connectors Modify, delete source/sink connectors Look up connector plugins Preset CORS config in connect distributed.properties To allow cross origin requests to the Kafka Connect REST API add Quickstart with docker image Build & Run from source License This software is licensed u |


## 주요 파일

### Manifests

- README.md
- Dockerfile
- package.json


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| src | 7 |
| .gitignore | 1 |
| babel.config.js | 1 |
| CONTRIBUTING.md | 1 |
| Dockerfile | 1 |
| entrypoint.sh | 1 |
| kafka-connect-web.iml | 1 |
| LICENSE | 1 |
| NOTICE.md | 1 |
| package-lock.json | 1 |
| package.json | 1 |
| public | 1 |
| README.md | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .vue | 6 |
| .md | 3 |
| [no-ext] | 3 |
| .js | 2 |
| .json | 2 |
| .html | 1 |
| .iml | 1 |
| .sh | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
