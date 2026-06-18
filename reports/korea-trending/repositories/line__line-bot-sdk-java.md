# line/line-bot-sdk-java

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/line/line-bot-sdk-java |
| local path | sources/line__line-bot-sdk-java |
| HEAD | 08cd3af |
| stars/forks | 641 / 929 |
| language | Java |
| license | Apache-2.0 |
| pushedAt | 2026-06-17T19:12:51Z |
| trendScore / priorityScore | 119 / 303 |


## 한줄 해석

- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Korean language / Korea domain | 500 | line-bot-integration-test/README.md, README.md, spring-boot/line-bot-spring-boot-client/README.md |
| Security / compliance | 127 | README.md, samples/sample-spring-boot-echo-kotlin/README.md, samples/sample-spring-boot-echo/README.md |
| Frontend / developer experience | 60 | line-bot-integration-test/README.md, README.md, spring-boot/line-bot-spring-boot-client/README.md |
| LLM wiki / memory / graph | 13 | .github/workflows/gradle.yml, CODE_OF_CONDUCT.md, LICENSE.txt |
| Spec / doc-driven workflow | 5 | README.md, .github/workflows/gradle.yml, line-bot-parser/src/main/java/com/linecorp/bot/parser/LineSignatureValidator.java |
| AI agent / tool use | 1 | clients/line-bot-messaging-api-client/src/test/java/com/linecorp/bot/messaging/client/MessagingApiClientExTest.java |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, example-rich, frontend-dx, graphMemory, korea-signal, llm-wiki-memory, sdk-api, security-compliance, spec-driven |
| stacks | Node/TypeScript/JavaScript, Python, Java/Kotlin |
| capabilities | Graph/memory store |


## 구조 요약

| key | value |
| --- | --- |
| files | 723 |
| manifests | 31 |
| docs | 12 |
| tests | 96 |
| ci/ops | 8 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | LINE Messaging API SDK for Java |
| headings | LINE Messaging API SDK for Java / Introduction / Documentation / Requirements / Installation / Gradle (Kotlin) example / Sample code / Spring Boot integration / How do I use a proxy server? / How to get x-line-request-id header and error message |
| excerpt | LINE Messaging API SDK for Java ! Maven Central https //maven badges.herokuapp.com/maven central/com.linecorp.bot/line bot messaging api client/badge.svg https //maven badges.herokuapp.com/maven central/com.linecorp.bot/line bot messaging api client ! javadoc https //javadoc.io/badge2/com.linecorp.bot/line bot parser/javadoc.svg https //javadoc.io/doc/com.linecorp.bot/line bot parser Introduction The LINE Messaging API SDK for Java makes it easy to develop bots using LINE Messaging API, and you can create a sample bot within minutes. Documentation See the official API documentation for more information. English https //developers.line.biz/en/docs/messaging api/overview/ Japanese https //deve |


## 주요 파일

### Manifests

- line-bot-integration-test/README.md
- clients/line-bot-messaging-api-client/src/test/resources/flex/reconstruction/README.md
- README.md
- samples/sample-spring-boot-echo-kotlin/README.md
- samples/sample-spring-boot-echo/README.md
- samples/sample-spring-boot-kitchensink/README.md
- spring-boot/line-bot-spring-boot-client/README.md
- line-bot-integration-test/build.gradle.kts
- build.gradle.kts
- buildSrc/build.gradle.kts
- generator/pom.xml
- line-bot-jackson/build.gradle.kts
- line-bot-parser/build.gradle.kts
- line-bot-webhook/build.gradle.kts
- samples/sample-manage-audience/build.gradle.kts
- samples/sample-spring-boot-echo-kotlin/build.gradle.kts
- samples/sample-spring-boot-echo/build.gradle.kts
- samples/sample-spring-boot-kitchensink/build.gradle.kts
- clients/line-bot-client-base/build.gradle.kts
- clients/line-bot-insight-client/build.gradle.kts


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| clients | 410 |
| line-bot-webhook | 98 |
| samples | 73 |
| spring-boot | 46 |
| generator | 31 |
| .github | 14 |
| line-bot-integration-test | 12 |
| line-bot-parser | 10 |
| buildSrc | 6 |
| config | 3 |
| gradle | 2 |
| line-bot-jackson | 2 |
| .editorconfig | 1 |
| .gitignore | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .java | 514 |
| .json | 43 |
| [no-ext] | 43 |
| .kts | 29 |
| .ftlh | 28 |
| .xml | 15 |
| .yml | 14 |
| .md | 12 |
| .pebble | 8 |
| .imports | 3 |
| .properties | 3 |
| .py | 2 |
| .bat | 1 |
| .cjs | 1 |
| .codegenconfig | 1 |
| .json5 | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
