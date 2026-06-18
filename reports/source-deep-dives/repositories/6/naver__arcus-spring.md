# naver/arcus-spring Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

ARCUS as a caching provider for the Spring Cache Abstraction

## 요약

- 조사 단위: `sources/naver__arcus-spring` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 45 files, 24 directories, depth score 56, key references 9개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 eval/test harness 구조로 읽힌다. 핵심 소스 근거는 docs=README.md, docs/01-arcus-cache-basics.md, docs/02-arcus-spring-concept.md이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 9개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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


## Repository Context

| Field | Value |
| --- | --- |
| Repository | naver/arcus-spring |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | Java |
| Stars | 28 |
| Forks | 17 |
| License | Apache-2.0 |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/naver__arcus-spring](../../../../sources/naver__arcus-spring) |
| Existing report | [reports/korea-trending/repositories/naver__arcus-spring.md](../../../korea-trending/repositories/naver__arcus-spring.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 45 / 24 |
| Max observed depth | 10 |
| Top directories | .github, docs, src |
| Top extensions | .java: 25, .md: 8, .xml: 5, (none): 4, .properties: 2, .yml: 1 |
| Source patterns | eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 19 |
| docs | documentation surface | 5 |
| .github | ci surface | 1 |


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
| docs | [README.md](../../../../sources/naver__arcus-spring/README.md) | docs signal |
| docs | [docs/01-arcus-cache-basics.md](../../../../sources/naver__arcus-spring/docs/01-arcus-cache-basics.md) | docs signal |
| docs | [docs/02-arcus-spring-concept.md](../../../../sources/naver__arcus-spring/docs/02-arcus-spring-concept.md) | docs signal |
| docs | [docs/03-arcus-spring-usage.md](../../../../sources/naver__arcus-spring/docs/03-arcus-spring-usage.md) | docs signal |
| eval | [src/test/resources/arcus_spring_arcusCache_annotation_test.xml](../../../../sources/naver__arcus-spring/src/test/resources/arcus_spring_arcusCache_annotation_test.xml) | eval signal |
| eval | [src/test/resources/arcus_spring_arcusCache_test.xml](../../../../sources/naver__arcus-spring/src/test/resources/arcus_spring_arcusCache_test.xml) | eval signal |
| eval | [src/test/resources/arcus_spring_arcusCacheManager_test.xml](../../../../sources/naver__arcus-spring/src/test/resources/arcus_spring_arcusCacheManager_test.xml) | eval signal |
| eval | [src/test/resources/arcus_spring_basic_context_test.xml](../../../../sources/naver__arcus-spring/src/test/resources/arcus_spring_basic_context_test.xml) | eval signal |
| ci | [.github/workflows/ci.yml](../../../../sources/naver__arcus-spring/.github/workflows/ci.yml) | ci support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 0 | not obvious |
| spec | 0 | not obvious |
| eval | 18 | [src/test/resources/arcus_spring_arcusCache_annotation_test.xml](../../../../sources/naver__arcus-spring/src/test/resources/arcus_spring_arcusCache_annotation_test.xml)<br>[src/test/resources/arcus_spring_arcusCache_test.xml](../../../../sources/naver__arcus-spring/src/test/resources/arcus_spring_arcusCache_test.xml)<br>[src/test/resources/arcus_spring_arcusCacheManager_test.xml](../../../../sources/naver__arcus-spring/src/test/resources/arcus_spring_arcusCacheManager_test.xml)<br>[src/test/resources/arcus_spring_basic_context_test.xml](../../../../sources/naver__arcus-spring/src/test/resources/arcus_spring_basic_context_test.xml)<br>[src/test/resources/arcus.properties](../../../../sources/naver__arcus-spring/src/test/resources/arcus.properties)<br>[src/test/resources/log4j2.properties](../../../../sources/naver__arcus-spring/src/test/resources/log4j2.properties)<br>[src/test/java/com/navercorp/arcus/spring/ApplicationContextLoadTest.java](../../../../sources/naver__arcus-spring/src/test/java/com/navercorp/arcus/spring/ApplicationContextLoadTest.java)<br>[src/test/java/com/navercorp/arcus/spring/concurrent/DefaultKeyLockProviderTest.java](../../../../sources/naver__arcus-spring/src/test/java/com/navercorp/arcus/spring/concurrent/DefaultKeyLockProviderTest.java) |
| security | 0 | not obvious |
| ci | 1 | [.github/workflows/ci.yml](../../../../sources/naver__arcus-spring/.github/workflows/ci.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 5 | [README.md](../../../../sources/naver__arcus-spring/README.md)<br>[docs/01-arcus-cache-basics.md](../../../../sources/naver__arcus-spring/docs/01-arcus-cache-basics.md)<br>[docs/02-arcus-spring-concept.md](../../../../sources/naver__arcus-spring/docs/02-arcus-spring-concept.md)<br>[docs/03-arcus-spring-usage.md](../../../../sources/naver__arcus-spring/docs/03-arcus-spring-usage.md)<br>[docs/04-arcus-spring-notes.md](../../../../sources/naver__arcus-spring/docs/04-arcus-spring-notes.md) |
| config | 0 | not obvious |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 18 | [src/test/resources/arcus_spring_arcusCache_annotation_test.xml](../../../../sources/naver__arcus-spring/src/test/resources/arcus_spring_arcusCache_annotation_test.xml)<br>[src/test/resources/arcus_spring_arcusCache_test.xml](../../../../sources/naver__arcus-spring/src/test/resources/arcus_spring_arcusCache_test.xml)<br>[src/test/resources/arcus_spring_arcusCacheManager_test.xml](../../../../sources/naver__arcus-spring/src/test/resources/arcus_spring_arcusCacheManager_test.xml)<br>[src/test/resources/arcus_spring_basic_context_test.xml](../../../../sources/naver__arcus-spring/src/test/resources/arcus_spring_basic_context_test.xml)<br>[src/test/resources/arcus.properties](../../../../sources/naver__arcus-spring/src/test/resources/arcus.properties)<br>[src/test/resources/log4j2.properties](../../../../sources/naver__arcus-spring/src/test/resources/log4j2.properties) |
| CI workflows | 1 | [.github/workflows/ci.yml](../../../../sources/naver__arcus-spring/.github/workflows/ci.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | container/deploy path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `README.md`, `docs/01-arcus-cache-basics.md`, `docs/02-arcus-spring-concept.md`.
2. Verify behavior through test/eval files: `src/test/resources/arcus_spring_arcusCache_annotation_test.xml`, `src/test/resources/arcus_spring_arcusCache_test.xml`, `src/test/resources/arcus_spring_arcusCacheManager_test.xml`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 ARCUS as a caching provider for the Spring Cache Abstraction. 핵심 구조 신호는 Java, pom.xml, README.md, LICENSE, ci, docs이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, needs deeper structural scan입니다.
