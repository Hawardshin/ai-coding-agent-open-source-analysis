# line/armeria-examples

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/line/armeria-examples |
| local path | sources/line__armeria-examples |
| HEAD | badcd0b |
| stars/forks | 148 / 57 |
| language | Java |
| license | CC0-1.0 |
| pushedAt | 2024-11-14T06:34:12Z |
| trendScore / priorityScore | 78 / 247 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Korean language / Korea domain | 492 | annotated-http-service/build.gradle, dropwizard/build.gradle, graphql-sangria/build.gradle |
| Infra / observability | 20 | README.md, resilience4j-spring/build.gradle, update-examples.sh |
| Frontend / developer experience | 16 | context-propagation/dagger/src/main/java/example/armeria/contextpropagation/dagger/Main.java, context-propagation/manual/src/main/java/example/armeria/contextpropagation/manual/Main.java, context-propagation/reactor/src/main/java/example/armeria/contextpropagation/reactor/Main.java |
| Security / compliance | 5 | LICENSE.txt, saml-service-provider/src/main/java/example/armeria/server/saml/sp/Main.java, server-sent-events/src/main/java/example/armeria/server/sse/Main.java |
| LLM wiki / memory / graph | 4 | README.md, saml-service-provider/src/main/java/example/armeria/server/saml/sp/Main.java |
| AI agent / tool use | 2 | dropwizard/src/test/resources/test-server.yaml |
| RAG / retrieval | 1 | spring-boot-webflux/src/main/java/example/springframework/boot/webflux/HelloController.java |
| Spec / doc-driven workflow | 1 | context-propagation/dagger/src/main/java/example/armeria/contextpropagation/dagger/Main.java |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, evalObservability, example-rich, frontend-dx, graphMemory, infra-observability, korea-signal, llm-wiki-memory, rag, security-compliance, spec-driven |
| stacks | Java/Kotlin |
| capabilities | Graph/memory store, Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 266 |
| manifests | 26 |
| docs | 2 |
| tests | 37 |
| ci/ops | 0 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | Armeria examples |
| headings | Armeria examples / Configure `-parameters` javac option / How to run / License |
| excerpt | Armeria examples annotated http service <a href="https //gitpod.io/ project=annotated http service/https //github.com/line/armeria examples/tree/main/annotated http service/src/main/java/example/armeria/server/annotated/Main.java" <img align="absmiddle" height="20" src="https //gitpod.io/button/open in gitpod.svg"/ </a Learn how to write an HTTP service using annotations. See Annotated services https //armeria.dev/docs/server annotated service . annotated http service kotlin <a href="https //gitpod.io/ project=annotated http service kotlin/https //github.com/line/armeria examples/tree/main/annotated http service kotlin/src/main/kotlin/example/armeria/server/annotated/kotlin/Main.kt" <img ali |


## 주요 파일

### Manifests

- proxy-server/README.md
- README.md
- annotated-http-service/build.gradle
- dropwizard/build.gradle
- graphql-sangria/build.gradle
- graphql/build.gradle
- grpc-envoy/build.gradle
- grpc-reactor/build.gradle
- grpc/build.gradle
- proxy-server/build.gradle
- resilience4j-spring/build.gradle
- saml-service-provider/build.gradle
- server-sent-events/build.gradle
- spring-boot-jetty/build.gradle
- spring-boot-minimal/build.gradle
- spring-boot-tomcat/build.gradle
- spring-boot-webflux/build.gradle
- static-files/build.gradle
- thrift/build.gradle
- context-propagation/dagger/build.gradle


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| tutorials | 33 |
| context-propagation | 28 |
| dropwizard | 16 |
| annotated-http-service | 14 |
| spring-boot-jetty | 14 |
| spring-boot-tomcat | 14 |
| grpc-envoy | 13 |
| saml-service-provider | 13 |
| spring-boot-minimal | 12 |
| spring-boot-webflux | 12 |
| grpc | 11 |
| grpc-reactor | 11 |
| proxy-server | 11 |
| thrift | 11 |


## 확장자 분포

| ext | count |
| --- | --- |
| .java | 88 |
| [no-ext] | 45 |
| .bat | 24 |
| .gradle | 24 |
| .jar | 24 |
| .properties | 24 |
| .yml | 10 |
| .proto | 4 |
| .yaml | 4 |
| .html | 3 |
| .scala | 3 |
| .sh | 3 |
| .md | 2 |
| .thrift | 2 |
| .crt | 1 |
| .dockerfile | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
