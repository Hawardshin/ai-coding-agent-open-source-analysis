# line/decaton 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

High throughput asynchronous task processing on Apache Kafka

## 요약

- 조사 단위: `sources/line__decaton` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 317 files, 217 directories, depth score 81, key references 10개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 agent/tool runtime, retrieval/vector path, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 docs=README.md, processor/README.md, docs/build.gradle이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 10개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | line/decaton |
| 주제 | 일반 AI 오픈소스 / 일반 AI 오픈소스 |
| Region | korea |
| Language | Java |
| Stars | 371 |
| Forks | 62 |
| License | Apache-2.0 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/line__decaton](../../../../sources/line__decaton) |
| 기존 보고서 | [reports/korea-trending/repositories/line__decaton.md](../../../korea-trending/repositories/line__decaton.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 317 / 217 |
| 관측 최대 깊이 | 11 |
| 상위 디렉터리 | .github, benchmark, brave, cb, centraldogma, client, common, developer-docs, docs, gradle, micrometer-tracing, processor, protobuf, protocol, scripts, spring, testing |
| 상위 확장자 | .java: 241, .gradle: 15, .adoc: 14, .md: 9, (none): 7, .png: 6, .sh: 6, .proto: 4, .properties: 3, .bat: 2, .jar: 2, .xml: 2 |
| 소스 패턴 | agent/tool runtime, retrieval/vector path, eval/test harness, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 40 |
| .github | ci surface | 1 |
| benchmark | validation surface | 1 |
| brave | top-level component | 1 |
| cb | top-level component | 1 |
| centraldogma | top-level component | 1 |
| client | source boundary | 1 |
| common | top-level component | 1 |
| developer-docs | documentation surface | 1 |
| gradle | top-level component | 1 |
| micrometer-tracing | ci surface | 1 |
| processor | top-level component | 1 |
| protobuf | top-level component | 1 |
| protocol | top-level component | 1 |
| scripts | top-level component | 1 |
| spring | top-level component | 1 |
| testing | validation surface | 1 |


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
| docs | [README.md](../../../../sources/line__decaton/README.md) | docs signal |
| docs | [processor/README.md](../../../../sources/line__decaton/processor/README.md) | docs signal |
| docs | [docs/build.gradle](../../../../sources/line__decaton/docs/build.gradle) | docs signal |
| docs | [docs/dynamic-property-configuration.adoc](../../../../sources/line__decaton/docs/dynamic-property-configuration.adoc) | docs signal |
| eval | [spring/src/test/java/com/linecorp/decaton/spring/PartitionScopeTest.java](../../../../sources/line__decaton/spring/src/test/java/com/linecorp/decaton/spring/PartitionScopeTest.java) | eval signal |
| eval | [spring/src/test/java/com/linecorp/decaton/spring/SpringProcessorSupplierTest.java](../../../../sources/line__decaton/spring/src/test/java/com/linecorp/decaton/spring/SpringProcessorSupplierTest.java) | eval signal |
| eval | [spring/src/test/java/com/linecorp/decaton/spring/SubpartitionScopeTest.java](../../../../sources/line__decaton/spring/src/test/java/com/linecorp/decaton/spring/SubpartitionScopeTest.java) | eval signal |
| eval | [spring/src/integrationTestSpringBoot3/java/com/linecorp/decatonl/spring/test/AutoConfigureDecatonConfigurationTest.java](../../../../sources/line__decaton/spring/src/integrationTestSpringBoot3/java/com/linecorp/decatonl/spring/test/AutoConfigureDecatonConfigurationTest.java) | eval signal |
| ci | [.github/workflows/ci.yml](../../../../sources/line__decaton/.github/workflows/ci.yml) | ci support |
| container | [benchmark/Dockerfile](../../../../sources/line__decaton/benchmark/Dockerfile) | container support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 1 | [benchmark/src/main/java/com/linecorp/decaton/benchmark/Runner.java](../../../../sources/line__decaton/benchmark/src/main/java/com/linecorp/decaton/benchmark/Runner.java) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 1 | [docs/index.adoc](../../../../sources/line__decaton/docs/index.adoc) |
| spec | 0 | 명확하지 않음 |
| eval | 89 | [spring/src/test/java/com/linecorp/decaton/spring/PartitionScopeTest.java](../../../../sources/line__decaton/spring/src/test/java/com/linecorp/decaton/spring/PartitionScopeTest.java)<br>[spring/src/test/java/com/linecorp/decaton/spring/SpringProcessorSupplierTest.java](../../../../sources/line__decaton/spring/src/test/java/com/linecorp/decaton/spring/SpringProcessorSupplierTest.java)<br>[spring/src/test/java/com/linecorp/decaton/spring/SubpartitionScopeTest.java](../../../../sources/line__decaton/spring/src/test/java/com/linecorp/decaton/spring/SubpartitionScopeTest.java)<br>[spring/src/integrationTestSpringBoot3/java/com/linecorp/decatonl/spring/test/AutoConfigureDecatonConfigurationTest.java](../../../../sources/line__decaton/spring/src/integrationTestSpringBoot3/java/com/linecorp/decatonl/spring/test/AutoConfigureDecatonConfigurationTest.java)<br>[spring/src/integrationTestSpringBoot3/java/com/linecorp/decatonl/spring/test/TestSpringBootApplication.java](../../../../sources/line__decaton/spring/src/integrationTestSpringBoot3/java/com/linecorp/decatonl/spring/test/TestSpringBootApplication.java)<br>[spring/src/integrationTestSpringBoot2/java/com/linecorp/decaton/spring/test/AutoConfigureDecatonConfigurationTest.java](../../../../sources/line__decaton/spring/src/integrationTestSpringBoot2/java/com/linecorp/decaton/spring/test/AutoConfigureDecatonConfigurationTest.java)<br>[spring/src/integrationTestSpringBoot2/java/com/linecorp/decaton/spring/test/TestSpringBootApplication.java](../../../../sources/line__decaton/spring/src/integrationTestSpringBoot2/java/com/linecorp/decaton/spring/test/TestSpringBootApplication.java)<br>[processor/src/testFixtures/java/com/linecorp/decaton/processor/tracing/TestTraceHandle.java](../../../../sources/line__decaton/processor/src/testFixtures/java/com/linecorp/decaton/processor/tracing/TestTraceHandle.java) |
| security | 0 | 명확하지 않음 |
| ci | 1 | [.github/workflows/ci.yml](../../../../sources/line__decaton/.github/workflows/ci.yml) |
| container | 1 | [benchmark/Dockerfile](../../../../sources/line__decaton/benchmark/Dockerfile) |
| instruction | 0 | 명확하지 않음 |
| docs | 54 | [README.md](../../../../sources/line__decaton/README.md)<br>[processor/README.md](../../../../sources/line__decaton/processor/README.md)<br>[docs/build.gradle](../../../../sources/line__decaton/docs/build.gradle)<br>[docs/dynamic-property-configuration.adoc](../../../../sources/line__decaton/docs/dynamic-property-configuration.adoc)<br>[docs/getting-started.adoc](../../../../sources/line__decaton/docs/getting-started.adoc)<br>[docs/index.adoc](../../../../sources/line__decaton/docs/index.adoc)<br>[docs/key-blocking.adoc](../../../../sources/line__decaton/docs/key-blocking.adoc)<br>[docs/monitoring.adoc](../../../../sources/line__decaton/docs/monitoring.adoc) |
| config | 0 | 명확하지 않음 |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 89 | [spring/src/test/java/com/linecorp/decaton/spring/PartitionScopeTest.java](../../../../sources/line__decaton/spring/src/test/java/com/linecorp/decaton/spring/PartitionScopeTest.java)<br>[spring/src/test/java/com/linecorp/decaton/spring/SpringProcessorSupplierTest.java](../../../../sources/line__decaton/spring/src/test/java/com/linecorp/decaton/spring/SpringProcessorSupplierTest.java)<br>[spring/src/test/java/com/linecorp/decaton/spring/SubpartitionScopeTest.java](../../../../sources/line__decaton/spring/src/test/java/com/linecorp/decaton/spring/SubpartitionScopeTest.java)<br>[spring/src/integrationTestSpringBoot3/java/com/linecorp/decatonl/spring/test/AutoConfigureDecatonConfigurationTest.java](../../../../sources/line__decaton/spring/src/integrationTestSpringBoot3/java/com/linecorp/decatonl/spring/test/AutoConfigureDecatonConfigurationTest.java)<br>[spring/src/integrationTestSpringBoot3/java/com/linecorp/decatonl/spring/test/TestSpringBootApplication.java](../../../../sources/line__decaton/spring/src/integrationTestSpringBoot3/java/com/linecorp/decatonl/spring/test/TestSpringBootApplication.java)<br>[spring/src/integrationTestSpringBoot2/java/com/linecorp/decaton/spring/test/AutoConfigureDecatonConfigurationTest.java](../../../../sources/line__decaton/spring/src/integrationTestSpringBoot2/java/com/linecorp/decaton/spring/test/AutoConfigureDecatonConfigurationTest.java) |
| CI workflow | 1 | [.github/workflows/ci.yml](../../../../sources/line__decaton/.github/workflows/ci.yml) |
| 컨테이너/배포 | 1 | [benchmark/Dockerfile](../../../../sources/line__decaton/benchmark/Dockerfile) |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | path scan에서 primary entrypoint가 명확하지 않음 |
| operation | 없음 |
| security | security/policy 표면이 명확하지 않음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `README.md`, `processor/README.md`, `docs/build.gradle`.
2. agent/tool runtime 매핑: `benchmark/src/main/java/com/linecorp/decaton/benchmark/Runner.java`.
3. retrieval/memory/indexing 확인: `docs/index.adoc`.
4. test/eval 파일로 동작 검증: `spring/src/test/java/com/linecorp/decaton/spring/PartitionScopeTest.java`, `spring/src/test/java/com/linecorp/decaton/spring/SpringProcessorSupplierTest.java`, `spring/src/test/java/com/linecorp/decaton/spring/SubpartitionScopeTest.java`.

## 기존 레포 인사이트

일반 AI 오픈소스 관점에서 High throughput asynchronous task processing on Apache Kafka. 핵심 구조 신호는 Java, build.gradle, README.md, LICENSE, tests, ci이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 더 깊은 구조 스캔 필요입니다.
