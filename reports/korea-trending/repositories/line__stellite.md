# line/stellite

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/line/stellite |
| local path | sources/line__stellite |
| HEAD | 5bd1c1f |
| stars/forks | 475 / 78 |
| language | C++ |
| license | Apache-2.0 |
| pushedAt | 2023-03-20T22:12:51Z |
| trendScore / priorityScore | 88 / 237 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Security / compliance | 26 | example/client/README.md, README.md, node_binder/test_client.js |
| Korean language / Korea domain | 13 | example/MyStelliteTest/README.md, README.md, example/MyStelliteTest/app/build.gradle |
| LLM wiki / memory / graph | 13 | CODE_OF_CONDUCT.md, licenses/License_quic_Android_20160219.txt, licenses/License_quic_iOS_20160219.txt |
| RAG / retrieval | 6 | node_binder/test.js, node_binder/_incoming_response.js, tools/build.py |
| Frontend / developer experience | 3 | tools/build.py |
| Spec / doc-driven workflow | 3 | BUILD.md, licenses/License_quic_iOS_20160219.txt |


## 분류와 스택

| key | value |
| --- | --- |
| categories | example-rich, frontend-dx, graphMemory, korea-signal, llm-wiki-memory, rag, sdk-api, security-compliance, spec-driven |
| stacks | Node/TypeScript/JavaScript, Python, Java/Kotlin, C/C++ |
| capabilities | Graph/memory store |


## 구조 요약

| key | value |
| --- | --- |
| files | 300 |
| manifests | 7 |
| docs | 10 |
| tests | 7 |
| ci/ops | 0 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | Welcome to Stellite |
| headings | Welcome to Stellite / Why QUIC? / Stellite project stack / Stellite QUIC server / Stellite client library / Getting started / Read more / License |
| excerpt | Welcome to Stellite Stellite project is a client library and server application that offers an easy way to develop, build, and implement client/server running primarily over the QUIC protocol developed by Google as part of the Chromium project. It aims to provide fast and stable connectivity to mobile applications. Stellite is an open source project developed by LINE Corporation http //linecorp.com/en/ based on the Chromium project. Licensed under Apache License 2.0 http //www.apache.org/licenses/LICENSE 2.0 . Why QUIC? Today, mobile application developers are struggling with challenges posed by constantly changing network environments; long connection time RTT overhead , packet loss, handov |


## 주요 파일

### Manifests

- example/client/README.md
- example/MyStelliteTest/README.md
- README.md
- example/MyStelliteTest/app/build.gradle
- example/MyStelliteTest/build.gradle
- node_binder/package.json
- test_tools/node/package.json


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| stellite | 119 |
| example | 89 |
| node_binder | 45 |
| test_tools | 15 |
| modified_files | 12 |
| node_modified_files | 4 |
| licenses | 2 |
| .gitignore | 1 |
| BUILD_DEP.txt | 1 |
| BUILD.md | 1 |
| chromium.tag | 1 |
| CLIENT_GUIDE.md | 1 |
| CODE_OF_CONDUCT.md | 1 |
| CONTRIBUTING.md | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .cc | 97 |
| .h | 95 |
| .js | 10 |
| .md | 10 |
| .xml | 9 |
| .gn | 7 |
| [no-ext] | 7 |
| .jar | 5 |
| .plist | 5 |
| .cpp | 4 |
| .json | 4 |
| .m | 4 |
| .py | 4 |
| .gradle | 3 |
| .properties | 3 |
| .txt | 3 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
