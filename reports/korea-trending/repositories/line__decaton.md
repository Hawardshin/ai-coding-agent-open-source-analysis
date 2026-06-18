# line/decaton

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/line/decaton |
| local path | sources/line__decaton |
| HEAD | 0f446fa |
| stars/forks | 371 / 62 |
| language | Java |
| license | Apache-2.0 |
| pushedAt | 2026-06-12T02:13:21Z |
| trendScore / priorityScore | 109 / 291 |


## 한줄 해석

- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Korean language / Korea domain | 500 | benchmark/README.md, README.md, docs/build.gradle |
| Security / compliance | 107 | README.md, testing/build.gradle, docs/example/src/main/java/example/BatchProducerMain.java |
| Infra / observability | 85 | docs/getting-started.adoc, docs/index.adoc, docs/monitoring.adoc |
| LLM wiki / memory / graph | 20 | docs/getting-started.adoc, docs/runtime.adoc, docs/task-compaction.adoc |
| Spec / doc-driven workflow | 9 | README.md, docs/getting-started.adoc, docs/runtime.adoc |
| AI agent / tool use | 1 | docs/why-decaton.adoc |
| Frontend / developer experience | 1 | micrometer-tracing/src/it/java/com/linecorp/decaton/processor/runtime/MicrometerTracingOtelBridgeTest.java |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, evalObservability, example-rich, frontend-dx, graphMemory, infra-observability, korea-signal, llm-wiki-memory, sdk-api, security-compliance, spec-driven |
| stacks | Java/Kotlin |
| capabilities | Graph/memory store, Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 320 |
| manifests | 18 |
| docs | 55 |
| tests | 47 |
| ci/ops | 2 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | Getting Started / Tutorial |
| headings | Getting Started / Tutorial / When to use (and when to not) / Minimum dependencies / Features / Performance / How to build / How to contribute / License / Contributor Credit |
| excerpt | Decaton ======= ! Build Status https //github.com/line/decaton/actions/workflows/ci.yml/badge.svg?branch=master https //github.com/line/decaton/actions?query=workflow%3ACI+branch%3Amaster+event%3Apush Decaton is a streaming task processing framework built on top of Apache Kafka https //kafka.apache.org/ . It is designed to enable "concurrent processing of records consumed from one partition" which isn't possible in many Kafka consumer frameworks. Here is the list of property that Decaton enables by default Concurrent either multi threaded or asynchronous processing of records consumed from one partition Preserve ordering guarantee by record keys Preserve At least once delivery semantics no m |


## 주요 파일

### Manifests

- docs/README.md
- benchmark/README.md
- processor/README.md
- README.md
- docs/build.gradle
- docs/example/build.gradle
- benchmark/build.gradle
- benchmark/Dockerfile
- testing/build.gradle
- brave/build.gradle
- build.gradle
- centraldogma/build.gradle
- client/build.gradle
- micrometer-tracing/build.gradle
- processor/build.gradle
- protobuf/build.gradle
- protocol/build.gradle
- spring/build.gradle


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| processor | 135 |
| docs | 47 |
| benchmark | 29 |
| testing | 17 |
| centraldogma | 16 |
| spring | 16 |
| client | 13 |
| brave | 6 |
| micrometer-tracing | 6 |
| protocol | 5 |
| cb | 4 |
| gradle | 3 |
| protobuf | 3 |
| .idea | 2 |


## 확장자 분포

| ext | count |
| --- | --- |
| .java | 241 |
| .gradle | 15 |
| .adoc | 14 |
| .md | 9 |
| .json | 7 |
| [no-ext] | 7 |
| .sh | 6 |
| .proto | 4 |
| .xml | 4 |
| .properties | 3 |
| .bat | 2 |
| .jar | 2 |
| .config | 1 |
| .factories | 1 |
| .imports | 1 |
| .template | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
