# line/decaton Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

High throughput asynchronous task processing on Apache Kafka

## 요약

- 조사 단위: `sources/line__decaton` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 317 files, 217 directories, depth score 87, key references 10개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 agent/tool runtime, retrieval/vector path, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 docs=README.md, processor/README.md, docs/build.gradle이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 10개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | line/decaton |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | Java |
| Stars | 371 |
| Forks | 62 |
| License | Apache-2.0 |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/line__decaton](../../../../sources/line__decaton) |
| Existing report | [reports/korea-trending/repositories/line__decaton.md](../../../korea-trending/repositories/line__decaton.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 317 / 217 |
| Max observed depth | 11 |
| Top directories | .github, benchmark, brave, cb, centraldogma, client, common, developer-docs, docs, gradle, micrometer-tracing, processor, protobuf, protocol, scripts, spring, testing |
| Top extensions | .java: 241, .gradle: 15, .adoc: 14, .md: 9, (none): 7, .png: 6, .sh: 6, .proto: 4, .properties: 3, .bat: 2, .jar: 2, .xml: 2 |
| Source patterns | agent/tool runtime, retrieval/vector path, eval/test harness, containerized deploy |

### Components

| Component | Role | Signal count |
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


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 1 | [benchmark/src/main/java/com/linecorp/decaton/benchmark/Runner.java](../../../../sources/line__decaton/benchmark/src/main/java/com/linecorp/decaton/benchmark/Runner.java) |
| mcp | 0 | not obvious |
| retrieval | 1 | [docs/index.adoc](../../../../sources/line__decaton/docs/index.adoc) |
| spec | 0 | not obvious |
| eval | 89 | [spring/src/test/java/com/linecorp/decaton/spring/PartitionScopeTest.java](../../../../sources/line__decaton/spring/src/test/java/com/linecorp/decaton/spring/PartitionScopeTest.java)<br>[spring/src/test/java/com/linecorp/decaton/spring/SpringProcessorSupplierTest.java](../../../../sources/line__decaton/spring/src/test/java/com/linecorp/decaton/spring/SpringProcessorSupplierTest.java)<br>[spring/src/test/java/com/linecorp/decaton/spring/SubpartitionScopeTest.java](../../../../sources/line__decaton/spring/src/test/java/com/linecorp/decaton/spring/SubpartitionScopeTest.java)<br>[spring/src/integrationTestSpringBoot3/java/com/linecorp/decatonl/spring/test/AutoConfigureDecatonConfigurationTest.java](../../../../sources/line__decaton/spring/src/integrationTestSpringBoot3/java/com/linecorp/decatonl/spring/test/AutoConfigureDecatonConfigurationTest.java)<br>[spring/src/integrationTestSpringBoot3/java/com/linecorp/decatonl/spring/test/TestSpringBootApplication.java](../../../../sources/line__decaton/spring/src/integrationTestSpringBoot3/java/com/linecorp/decatonl/spring/test/TestSpringBootApplication.java)<br>[spring/src/integrationTestSpringBoot2/java/com/linecorp/decaton/spring/test/AutoConfigureDecatonConfigurationTest.java](../../../../sources/line__decaton/spring/src/integrationTestSpringBoot2/java/com/linecorp/decaton/spring/test/AutoConfigureDecatonConfigurationTest.java)<br>[spring/src/integrationTestSpringBoot2/java/com/linecorp/decaton/spring/test/TestSpringBootApplication.java](../../../../sources/line__decaton/spring/src/integrationTestSpringBoot2/java/com/linecorp/decaton/spring/test/TestSpringBootApplication.java)<br>[processor/src/testFixtures/java/com/linecorp/decaton/processor/tracing/TestTraceHandle.java](../../../../sources/line__decaton/processor/src/testFixtures/java/com/linecorp/decaton/processor/tracing/TestTraceHandle.java) |
| security | 0 | not obvious |
| ci | 1 | [.github/workflows/ci.yml](../../../../sources/line__decaton/.github/workflows/ci.yml) |
| container | 1 | [benchmark/Dockerfile](../../../../sources/line__decaton/benchmark/Dockerfile) |
| instruction | 0 | not obvious |
| docs | 54 | [README.md](../../../../sources/line__decaton/README.md)<br>[processor/README.md](../../../../sources/line__decaton/processor/README.md)<br>[docs/build.gradle](../../../../sources/line__decaton/docs/build.gradle)<br>[docs/dynamic-property-configuration.adoc](../../../../sources/line__decaton/docs/dynamic-property-configuration.adoc)<br>[docs/getting-started.adoc](../../../../sources/line__decaton/docs/getting-started.adoc)<br>[docs/index.adoc](../../../../sources/line__decaton/docs/index.adoc)<br>[docs/key-blocking.adoc](../../../../sources/line__decaton/docs/key-blocking.adoc)<br>[docs/monitoring.adoc](../../../../sources/line__decaton/docs/monitoring.adoc) |
| config | 0 | not obvious |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 89 | [spring/src/test/java/com/linecorp/decaton/spring/PartitionScopeTest.java](../../../../sources/line__decaton/spring/src/test/java/com/linecorp/decaton/spring/PartitionScopeTest.java)<br>[spring/src/test/java/com/linecorp/decaton/spring/SpringProcessorSupplierTest.java](../../../../sources/line__decaton/spring/src/test/java/com/linecorp/decaton/spring/SpringProcessorSupplierTest.java)<br>[spring/src/test/java/com/linecorp/decaton/spring/SubpartitionScopeTest.java](../../../../sources/line__decaton/spring/src/test/java/com/linecorp/decaton/spring/SubpartitionScopeTest.java)<br>[spring/src/integrationTestSpringBoot3/java/com/linecorp/decatonl/spring/test/AutoConfigureDecatonConfigurationTest.java](../../../../sources/line__decaton/spring/src/integrationTestSpringBoot3/java/com/linecorp/decatonl/spring/test/AutoConfigureDecatonConfigurationTest.java)<br>[spring/src/integrationTestSpringBoot3/java/com/linecorp/decatonl/spring/test/TestSpringBootApplication.java](../../../../sources/line__decaton/spring/src/integrationTestSpringBoot3/java/com/linecorp/decatonl/spring/test/TestSpringBootApplication.java)<br>[spring/src/integrationTestSpringBoot2/java/com/linecorp/decaton/spring/test/AutoConfigureDecatonConfigurationTest.java](../../../../sources/line__decaton/spring/src/integrationTestSpringBoot2/java/com/linecorp/decaton/spring/test/AutoConfigureDecatonConfigurationTest.java) |
| CI workflows | 1 | [.github/workflows/ci.yml](../../../../sources/line__decaton/.github/workflows/ci.yml) |
| Containers / deploy | 1 | [benchmark/Dockerfile](../../../../sources/line__decaton/benchmark/Dockerfile) |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | none |
| security | security/policy surface not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `README.md`, `processor/README.md`, `docs/build.gradle`.
2. Map agent/tool runtime through: `benchmark/src/main/java/com/linecorp/decaton/benchmark/Runner.java`.
3. Inspect retrieval/memory/indexing through: `docs/index.adoc`.
4. Verify behavior through test/eval files: `spring/src/test/java/com/linecorp/decaton/spring/PartitionScopeTest.java`, `spring/src/test/java/com/linecorp/decaton/spring/SpringProcessorSupplierTest.java`, `spring/src/test/java/com/linecorp/decaton/spring/SubpartitionScopeTest.java`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 High throughput asynchronous task processing on Apache Kafka. 핵심 구조 신호는 Java, build.gradle, README.md, LICENSE, tests, ci이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 needs deeper structural scan입니다.
