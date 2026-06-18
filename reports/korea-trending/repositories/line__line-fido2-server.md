# line/line-fido2-server

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/line/line-fido2-server |
| local path | sources/line__line-fido2-server |
| HEAD | 1c5b7e0 |
| stars/forks | 580 / 109 |
| language | Java |
| license | Apache-2.0 |
| pushedAt | 2026-04-28T23:36:20Z |
| trendScore / priorityScore | 105 / 287 |


## 한줄 해석

- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Korean language / Korea domain | 500 | README.md, build.gradle.kts, fido2-demo/demo/build.gradle.kts |
| Security / compliance | 252 | README.md, build.gradle.kts, common/build.gradle.kts |
| LLM wiki / memory / graph | 44 | README.md, CODE_OF_CONDUCT.md, fido2-demo/base/src/main/java/com/linecorp/line/auth/fido/fido2/base/config/BaseAutoConfiguration.java |
| Spec / doc-driven workflow | 10 | fido2-demo/demo/src/docs/asciidoc/api-guide.adoc, fido2-core/src/docs/asciidoc/api-guide.adoc, fido2-core/src/main/java/com/linecorp/line/auth/fido/fido2/server/attestation/android/keyattestation/AndroidKeyAttestationVerifier.java |
| Frontend / developer experience | 5 | README.md |
| AI agent / tool use | 1 | build.gradle.kts |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, example-rich, frontend-dx, graphMemory, korea-signal, llm-wiki-memory, sdk-api, security, security-compliance, spec-driven, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Java/Kotlin |
| capabilities | Vector/search store, Graph/memory store |


## 구조 요약

| key | value |
| --- | --- |
| files | 344 |
| manifests | 11 |
| docs | 6 |
| tests | 47 |
| ci/ops | 5 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | LINE FIDO2 SERVER |
| headings | LINE FIDO2 SERVER / Overview / What is FIDO2? / Challenge-Response Protocol / Screenshots / Chrome on Mac with Touch ID / Modules / Features / How to Run / Manual Run |
| excerpt | LINE FIDO2 SERVER ! Stars https //img.shields.io/github/stars/line/line fido2 server.svg?style=social ! Repo Size https //img.shields.io/github/repo size/line/line fido2 server ! License Apache 2.0 https //img.shields.io/github/license/line/line fido2 server ! Top Language https //img.shields.io/github/languages/top/line/line fido2 server ! Spring Boot https //img.shields.io/badge/Spring%20Boot 2.7.12 green ! Java version https //img.shields.io/badge/Java 11 green ! Data base https //img.shields.io/badge/Storage MySQL%2FH2%2FRedis blue ! Last Commit https //img.shields.io/github/last commit/line/line fido2 server FIDO2 WebAuthn Server officially certified by FIDO Alliance <img src="images/fi |


## 주요 파일

### Manifests

- README.md
- build.gradle.kts
- common/build.gradle.kts
- docker-compose.yml
- fido2-core/build.gradle.kts
- fido2-core/Dockerfile
- fido2-demo/base/build.gradle.kts
- fido2-demo/demo/build.gradle.kts
- fido2-demo/demo/Dockerfile
- rpserver/build.gradle.kts
- rpserver/Dockerfile


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| fido2-core | 130 |
| common | 97 |
| fido2-demo | 68 |
| rpserver | 33 |
| .github | 2 |
| gradle | 2 |
| .gitignore | 1 |
| build.gradle.kts | 1 |
| CODE_OF_CONDUCT.md | 1 |
| CONTRIBUTING.md | 1 |
| docker-compose.yml | 1 |
| gradlew | 1 |
| gradlew.bat | 1 |
| LICENSE | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .java | 287 |
| .json | 14 |
| [no-ext] | 9 |
| .kts | 7 |
| .yml | 7 |
| .md | 4 |
| .snippet | 3 |
| .adoc | 2 |
| .sh | 2 |
| .bat | 1 |
| .css | 1 |
| .factories | 1 |
| .html | 1 |
| .jar | 1 |
| .js | 1 |
| .jwt | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
