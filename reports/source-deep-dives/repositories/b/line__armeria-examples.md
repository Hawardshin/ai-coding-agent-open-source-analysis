# line/armeria-examples 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

Armeria examples

## 요약

- 조사 단위: `sources/line__armeria-examples` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 267 files, 411 directories, depth score 70, key references 7개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 api/server, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 entrypoints=dropwizard/server.yaml이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 7개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

## 바로가기

| 이동 | 여기서 볼 것 |
| --- | --- |
| [전체 시작 README](../../../../README.md) | 레포 전체 목적, 핵심 카테고리, 읽는 순서. |
| [전체 보고서 읽기 지도](../../../README.md) | 모든 보고서의 시작점, 주제, 폴더 지도. |
| [주제별 보고서 목차](../../../by-topic/README.md) | 조사 질문 기준으로 보고서를 찾는 입구. |
| [표/CSV 목차](../../../tables/README.md) | 표로 빠르게 훑고 CSV로 비교하는 입구. |
| [레포별 인사이트](../../../repository-insights/README.md) | 레포별 총평과 위험 신호. |
| [소스 딥다이브](../../README.md) | 주제별 소스 경로 근거. |
| [레포별 소스 딥다이브](../README.md) | 로컬 클론 1개당 1개 Markdown 딥다이브. |
| [소스 트렌드 인사이트](../../../source-insights/README.md) | 카테고리별 트렌드와 레포별 특징 비교. |


## 레포 컨텍스트

| 항목 | 값 |
| --- | --- |
| 레포 | line/armeria-examples |
| 주제 | 일반 AI 오픈소스 / 일반 AI 오픈소스 |
| Region | korea |
| Language | Java |
| Stars | 148 |
| Forks | 57 |
| License | CC0-1.0 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/line__armeria-examples](../../../../sources/line__armeria-examples) |
| 기존 보고서 | [reports/korea-trending/repositories/line__armeria-examples.md](../../../korea-trending/repositories/line__armeria-examples.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 267 / 411 |
| 관측 최대 깊이 | 11 |
| 상위 디렉터리 | .github, annotated-http-service, context-propagation, dropwizard, graphql, graphql-sangria, grpc, grpc-envoy, grpc-reactor, proxy-server, resilience4j-spring, saml-service-provider, server-sent-events, spring-boot-jetty, spring-boot-minimal, spring-boot-tomcat, spring-boot-webflux, static-files, thrift, tutorials |
| 상위 확장자 | .java: 88, (none): 45, .bat: 24, .gradle: 24, .jar: 24, .properties: 24, .yml: 10, .proto: 4, .yaml: 4, .html: 3, .scala: 3, .sh: 3 |
| 소스 패턴 | api/server, agent/tool runtime, retrieval/vector path, eval/test harness |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| .github | ci surface | 1 |
| annotated-http-service | top-level component | 1 |
| context-propagation | top-level component | 1 |
| dropwizard | top-level component | 1 |
| graphql | top-level component | 1 |
| graphql-sangria | top-level component | 1 |
| grpc | top-level component | 1 |
| grpc-envoy | top-level component | 1 |
| grpc-reactor | top-level component | 1 |
| proxy-server | source boundary | 1 |
| resilience4j-spring | top-level component | 1 |
| saml-service-provider | top-level component | 1 |
| server-sent-events | source boundary | 1 |
| spring-boot-jetty | top-level component | 1 |
| spring-boot-minimal | top-level component | 1 |
| spring-boot-tomcat | top-level component | 1 |
| spring-boot-webflux | source boundary | 1 |
| static-files | top-level component | 1 |


## 실행 방식

_root manifest에서 추출된 command surface가 없습니다._


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | 없음 |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| entrypoints | [dropwizard/server.yaml](../../../../sources/line__armeria-examples/dropwizard/server.yaml) | entrypoints signal |
| docs | [README.md](../../../../sources/line__armeria-examples/README.md) | docs signal |
| docs | [proxy-server/README.md](../../../../sources/line__armeria-examples/proxy-server/README.md) | docs signal |
| eval | [tutorials/thrift/src/test/java/example/armeria/server/blog/thrift/BlogServiceTest.java](../../../../sources/line__armeria-examples/tutorials/thrift/src/test/java/example/armeria/server/blog/thrift/BlogServiceTest.java) | eval signal |
| eval | [tutorials/rest-api-annotated-service/src/test/java/example/armeria/server/blog/BlogServiceTest.java](../../../../sources/line__armeria-examples/tutorials/rest-api-annotated-service/src/test/java/example/armeria/server/blog/BlogServiceTest.java) | eval signal |
| eval | [tutorials/grpc/src/test/java/example/armeria/server/blog/grpc/BlogServiceTest.java](../../../../sources/line__armeria-examples/tutorials/grpc/src/test/java/example/armeria/server/blog/grpc/BlogServiceTest.java) | eval signal |
| eval | [thrift/src/test/resources/.gitkeep](../../../../sources/line__armeria-examples/thrift/src/test/resources/.gitkeep) | eval signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 1 | [dropwizard/server.yaml](../../../../sources/line__armeria-examples/dropwizard/server.yaml) |
| agentRuntime | 28 | [context-propagation/rxjava/build.gradle](../../../../sources/line__armeria-examples/context-propagation/rxjava/build.gradle)<br>[context-propagation/rxjava/gradlew](../../../../sources/line__armeria-examples/context-propagation/rxjava/gradlew)<br>[context-propagation/rxjava/gradlew.bat](../../../../sources/line__armeria-examples/context-propagation/rxjava/gradlew.bat)<br>[context-propagation/rxjava/src/main/java/example/armeria/contextpropagation/rxjava/Main.java](../../../../sources/line__armeria-examples/context-propagation/rxjava/src/main/java/example/armeria/contextpropagation/rxjava/Main.java)<br>[context-propagation/rxjava/src/main/java/example/armeria/contextpropagation/rxjava/MainService.java](../../../../sources/line__armeria-examples/context-propagation/rxjava/src/main/java/example/armeria/contextpropagation/rxjava/MainService.java)<br>[context-propagation/rxjava/gradle/wrapper/gradle-wrapper.jar](../../../../sources/line__armeria-examples/context-propagation/rxjava/gradle/wrapper/gradle-wrapper.jar)<br>[context-propagation/rxjava/gradle/wrapper/gradle-wrapper.properties](../../../../sources/line__armeria-examples/context-propagation/rxjava/gradle/wrapper/gradle-wrapper.properties)<br>[context-propagation/reactor/build.gradle](../../../../sources/line__armeria-examples/context-propagation/reactor/build.gradle) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 2 | [server-sent-events/src/main/resources/index.html](../../../../sources/line__armeria-examples/server-sent-events/src/main/resources/index.html)<br>[proxy-server/src/main/resources/index.html](../../../../sources/line__armeria-examples/proxy-server/src/main/resources/index.html) |
| spec | 0 | 명확하지 않음 |
| eval | 39 | [tutorials/thrift/src/test/java/example/armeria/server/blog/thrift/BlogServiceTest.java](../../../../sources/line__armeria-examples/tutorials/thrift/src/test/java/example/armeria/server/blog/thrift/BlogServiceTest.java)<br>[tutorials/rest-api-annotated-service/src/test/java/example/armeria/server/blog/BlogServiceTest.java](../../../../sources/line__armeria-examples/tutorials/rest-api-annotated-service/src/test/java/example/armeria/server/blog/BlogServiceTest.java)<br>[tutorials/grpc/src/test/java/example/armeria/server/blog/grpc/BlogServiceTest.java](../../../../sources/line__armeria-examples/tutorials/grpc/src/test/java/example/armeria/server/blog/grpc/BlogServiceTest.java)<br>[thrift/src/test/resources/.gitkeep](../../../../sources/line__armeria-examples/thrift/src/test/resources/.gitkeep)<br>[thrift/src/test/java/example/armeria/thrift/HelloServiceTest.java](../../../../sources/line__armeria-examples/thrift/src/test/java/example/armeria/thrift/HelloServiceTest.java)<br>[static-files/src/test/resources/.gitkeep](../../../../sources/line__armeria-examples/static-files/src/test/resources/.gitkeep)<br>[static-files/src/test/java/example/armeria/server/files/MainTest.java](../../../../sources/line__armeria-examples/static-files/src/test/java/example/armeria/server/files/MainTest.java)<br>[spring-boot-webflux/src/test/resources/application-testbed.yml](../../../../sources/line__armeria-examples/spring-boot-webflux/src/test/resources/application-testbed.yml) |
| security | 0 | 명확하지 않음 |
| ci | 0 | 명확하지 않음 |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 2 | [README.md](../../../../sources/line__armeria-examples/README.md)<br>[proxy-server/README.md](../../../../sources/line__armeria-examples/proxy-server/README.md) |
| config | 0 | 명확하지 않음 |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 39 | [tutorials/thrift/src/test/java/example/armeria/server/blog/thrift/BlogServiceTest.java](../../../../sources/line__armeria-examples/tutorials/thrift/src/test/java/example/armeria/server/blog/thrift/BlogServiceTest.java)<br>[tutorials/rest-api-annotated-service/src/test/java/example/armeria/server/blog/BlogServiceTest.java](../../../../sources/line__armeria-examples/tutorials/rest-api-annotated-service/src/test/java/example/armeria/server/blog/BlogServiceTest.java)<br>[tutorials/grpc/src/test/java/example/armeria/server/blog/grpc/BlogServiceTest.java](../../../../sources/line__armeria-examples/tutorials/grpc/src/test/java/example/armeria/server/blog/grpc/BlogServiceTest.java)<br>[thrift/src/test/resources/.gitkeep](../../../../sources/line__armeria-examples/thrift/src/test/resources/.gitkeep)<br>[thrift/src/test/java/example/armeria/thrift/HelloServiceTest.java](../../../../sources/line__armeria-examples/thrift/src/test/java/example/armeria/thrift/HelloServiceTest.java)<br>[static-files/src/test/resources/.gitkeep](../../../../sources/line__armeria-examples/static-files/src/test/resources/.gitkeep) |
| CI workflow | 0 | 명확하지 않음 |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 상위 디렉터리가 많아 모듈 경계 재확인 필요 |
| operation | CI workflow 경로가 명확하지 않음; container/deploy 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `dropwizard/server.yaml`, `README.md`, `proxy-server/README.md`.
2. entrypoint를 따라 실행 흐름 확인: `dropwizard/server.yaml`.
3. agent/tool runtime 매핑: `context-propagation/rxjava/build.gradle`, `context-propagation/rxjava/gradlew`, `context-propagation/rxjava/gradlew.bat`.
4. retrieval/memory/indexing 확인: `server-sent-events/src/main/resources/index.html`, `proxy-server/src/main/resources/index.html`.
5. test/eval 파일로 동작 검증: `tutorials/thrift/src/test/java/example/armeria/server/blog/thrift/BlogServiceTest.java`, `tutorials/rest-api-annotated-service/src/test/java/example/armeria/server/blog/BlogServiceTest.java`, `tutorials/grpc/src/test/java/example/armeria/server/blog/grpc/BlogServiceTest.java`.

## 기존 레포 인사이트

일반 AI 오픈소스 관점에서 Armeria examples. 핵심 구조 신호는 Java, README.md, ci, docs, docker이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 더 깊은 구조 스캔 필요입니다.
