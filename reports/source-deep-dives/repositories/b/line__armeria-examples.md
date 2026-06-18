# line/armeria-examples Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Armeria examples

## 요약

- 조사 단위: `sources/line__armeria-examples` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 267 files, 411 directories, depth score 76, key references 7개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 api/server, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 entrypoints=dropwizard/server.yaml이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 7개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

## Navigation

| Entry | Use it for |
| --- | --- |
| [Repository README](../../../../README.md) | Repo-wide orientation and top-level data/report structure. |
| [Reports Reading Index](../../../README.md) | Main report navigation, topics, and folder map. |
| [Reports by Topic](../../../by-topic/README.md) | Topic-first report navigation. |
| [Report Tables](../../../tables/README.md) | Table-first view and CSV exports. |
| [Repository Insights](../../../repository-insights/README.md) | Repository-by-repository assessment rows. |
| [Source Deep Dives](../../README.md) | Source-path-level findings by topic. |
| [Source Repository Deep Dives](../README.md) | One Markdown deep dive per cloned repository. |
| [Source Trend Insights](../../../source-insights/README.md) | Category trend insights and repository feature comparison from source evidence. |


## Repository Context

| Field | Value |
| --- | --- |
| Repository | line/armeria-examples |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | Java |
| Stars | 148 |
| Forks | 57 |
| License | CC0-1.0 |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/line__armeria-examples](../../../../sources/line__armeria-examples) |
| Existing report | [reports/korea-trending/repositories/line__armeria-examples.md](../../../korea-trending/repositories/line__armeria-examples.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 267 / 411 |
| Max observed depth | 11 |
| Top directories | .github, annotated-http-service, context-propagation, dropwizard, graphql, graphql-sangria, grpc, grpc-envoy, grpc-reactor, proxy-server, resilience4j-spring, saml-service-provider, server-sent-events, spring-boot-jetty, spring-boot-minimal, spring-boot-tomcat, spring-boot-webflux, static-files, thrift, tutorials |
| Top extensions | .java: 88, (none): 45, .bat: 24, .gradle: 24, .jar: 24, .properties: 24, .yml: 10, .proto: 4, .yaml: 4, .html: 3, .scala: 3, .sh: 3 |
| Source patterns | api/server, agent/tool runtime, retrieval/vector path, eval/test harness |

### Components

| Component | Role | Signal count |
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


## How It Runs

_No command surface extracted from root manifests._


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | none |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| entrypoints | [dropwizard/server.yaml](../../../../sources/line__armeria-examples/dropwizard/server.yaml) | entrypoints signal |
| docs | [README.md](../../../../sources/line__armeria-examples/README.md) | docs signal |
| docs | [proxy-server/README.md](../../../../sources/line__armeria-examples/proxy-server/README.md) | docs signal |
| eval | [tutorials/thrift/src/test/java/example/armeria/server/blog/thrift/BlogServiceTest.java](../../../../sources/line__armeria-examples/tutorials/thrift/src/test/java/example/armeria/server/blog/thrift/BlogServiceTest.java) | eval signal |
| eval | [tutorials/rest-api-annotated-service/src/test/java/example/armeria/server/blog/BlogServiceTest.java](../../../../sources/line__armeria-examples/tutorials/rest-api-annotated-service/src/test/java/example/armeria/server/blog/BlogServiceTest.java) | eval signal |
| eval | [tutorials/grpc/src/test/java/example/armeria/server/blog/grpc/BlogServiceTest.java](../../../../sources/line__armeria-examples/tutorials/grpc/src/test/java/example/armeria/server/blog/grpc/BlogServiceTest.java) | eval signal |
| eval | [thrift/src/test/resources/.gitkeep](../../../../sources/line__armeria-examples/thrift/src/test/resources/.gitkeep) | eval signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 1 | [dropwizard/server.yaml](../../../../sources/line__armeria-examples/dropwizard/server.yaml) |
| agentRuntime | 28 | [context-propagation/rxjava/build.gradle](../../../../sources/line__armeria-examples/context-propagation/rxjava/build.gradle)<br>[context-propagation/rxjava/gradlew](../../../../sources/line__armeria-examples/context-propagation/rxjava/gradlew)<br>[context-propagation/rxjava/gradlew.bat](../../../../sources/line__armeria-examples/context-propagation/rxjava/gradlew.bat)<br>[context-propagation/rxjava/src/main/java/example/armeria/contextpropagation/rxjava/Main.java](../../../../sources/line__armeria-examples/context-propagation/rxjava/src/main/java/example/armeria/contextpropagation/rxjava/Main.java)<br>[context-propagation/rxjava/src/main/java/example/armeria/contextpropagation/rxjava/MainService.java](../../../../sources/line__armeria-examples/context-propagation/rxjava/src/main/java/example/armeria/contextpropagation/rxjava/MainService.java)<br>[context-propagation/rxjava/gradle/wrapper/gradle-wrapper.jar](../../../../sources/line__armeria-examples/context-propagation/rxjava/gradle/wrapper/gradle-wrapper.jar)<br>[context-propagation/rxjava/gradle/wrapper/gradle-wrapper.properties](../../../../sources/line__armeria-examples/context-propagation/rxjava/gradle/wrapper/gradle-wrapper.properties)<br>[context-propagation/reactor/build.gradle](../../../../sources/line__armeria-examples/context-propagation/reactor/build.gradle) |
| mcp | 0 | not obvious |
| retrieval | 2 | [server-sent-events/src/main/resources/index.html](../../../../sources/line__armeria-examples/server-sent-events/src/main/resources/index.html)<br>[proxy-server/src/main/resources/index.html](../../../../sources/line__armeria-examples/proxy-server/src/main/resources/index.html) |
| spec | 0 | not obvious |
| eval | 39 | [tutorials/thrift/src/test/java/example/armeria/server/blog/thrift/BlogServiceTest.java](../../../../sources/line__armeria-examples/tutorials/thrift/src/test/java/example/armeria/server/blog/thrift/BlogServiceTest.java)<br>[tutorials/rest-api-annotated-service/src/test/java/example/armeria/server/blog/BlogServiceTest.java](../../../../sources/line__armeria-examples/tutorials/rest-api-annotated-service/src/test/java/example/armeria/server/blog/BlogServiceTest.java)<br>[tutorials/grpc/src/test/java/example/armeria/server/blog/grpc/BlogServiceTest.java](../../../../sources/line__armeria-examples/tutorials/grpc/src/test/java/example/armeria/server/blog/grpc/BlogServiceTest.java)<br>[thrift/src/test/resources/.gitkeep](../../../../sources/line__armeria-examples/thrift/src/test/resources/.gitkeep)<br>[thrift/src/test/java/example/armeria/thrift/HelloServiceTest.java](../../../../sources/line__armeria-examples/thrift/src/test/java/example/armeria/thrift/HelloServiceTest.java)<br>[static-files/src/test/resources/.gitkeep](../../../../sources/line__armeria-examples/static-files/src/test/resources/.gitkeep)<br>[static-files/src/test/java/example/armeria/server/files/MainTest.java](../../../../sources/line__armeria-examples/static-files/src/test/java/example/armeria/server/files/MainTest.java)<br>[spring-boot-webflux/src/test/resources/application-testbed.yml](../../../../sources/line__armeria-examples/spring-boot-webflux/src/test/resources/application-testbed.yml) |
| security | 0 | not obvious |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 2 | [README.md](../../../../sources/line__armeria-examples/README.md)<br>[proxy-server/README.md](../../../../sources/line__armeria-examples/proxy-server/README.md) |
| config | 0 | not obvious |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 39 | [tutorials/thrift/src/test/java/example/armeria/server/blog/thrift/BlogServiceTest.java](../../../../sources/line__armeria-examples/tutorials/thrift/src/test/java/example/armeria/server/blog/thrift/BlogServiceTest.java)<br>[tutorials/rest-api-annotated-service/src/test/java/example/armeria/server/blog/BlogServiceTest.java](../../../../sources/line__armeria-examples/tutorials/rest-api-annotated-service/src/test/java/example/armeria/server/blog/BlogServiceTest.java)<br>[tutorials/grpc/src/test/java/example/armeria/server/blog/grpc/BlogServiceTest.java](../../../../sources/line__armeria-examples/tutorials/grpc/src/test/java/example/armeria/server/blog/grpc/BlogServiceTest.java)<br>[thrift/src/test/resources/.gitkeep](../../../../sources/line__armeria-examples/thrift/src/test/resources/.gitkeep)<br>[thrift/src/test/java/example/armeria/thrift/HelloServiceTest.java](../../../../sources/line__armeria-examples/thrift/src/test/java/example/armeria/thrift/HelloServiceTest.java)<br>[static-files/src/test/resources/.gitkeep](../../../../sources/line__armeria-examples/static-files/src/test/resources/.gitkeep) |
| CI workflows | 0 | not obvious |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | many top-level directories; module boundaries need review |
| operation | CI workflow path not obvious; container/deploy path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `dropwizard/server.yaml`, `README.md`, `proxy-server/README.md`.
2. Trace execution through entrypoints: `dropwizard/server.yaml`.
3. Map agent/tool runtime through: `context-propagation/rxjava/build.gradle`, `context-propagation/rxjava/gradlew`, `context-propagation/rxjava/gradlew.bat`.
4. Inspect retrieval/memory/indexing through: `server-sent-events/src/main/resources/index.html`, `proxy-server/src/main/resources/index.html`.
5. Verify behavior through test/eval files: `tutorials/thrift/src/test/java/example/armeria/server/blog/thrift/BlogServiceTest.java`, `tutorials/rest-api-annotated-service/src/test/java/example/armeria/server/blog/BlogServiceTest.java`, `tutorials/grpc/src/test/java/example/armeria/server/blog/grpc/BlogServiceTest.java`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 Armeria examples. 핵심 구조 신호는 Java, README.md, ci, docs, docker이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, needs deeper structural scan입니다.
