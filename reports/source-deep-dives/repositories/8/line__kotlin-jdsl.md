# line/kotlin-jdsl Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Kotlin library that makes it easy to build and execute queries without generated metamodel

## 요약

- 조사 단위: `sources/line__kotlin-jdsl` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 982 files, 929 directories, depth score 84, key references 11개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 spec/docs-driven, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 config=package.json이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 11개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | line/kotlin-jdsl |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | Kotlin |
| Stars | 821 |
| Forks | 104 |
| License | Apache-2.0 |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/line__kotlin-jdsl](../../../../sources/line__kotlin-jdsl) |
| Existing report | [reports/korea-trending/repositories/line__kotlin-jdsl.md](../../../korea-trending/repositories/line__kotlin-jdsl.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 982 / 929 |
| Max observed depth | 13 |
| Top directories | .githook, .github, benchmark, docs, dsl, example, gradle, query-model, render, src, support |
| Top extensions | .kt: 820, .md: 54, .kts: 39, .xml: 9, (none): 9, .yml: 7, .factories: 6, .imports: 6, .properties: 6, .bat: 5, .jar: 5, .sh: 3 |
| Source patterns | spec/docs-driven, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 20 |
| src | source boundary | 5 |
| .github | ci surface | 1 |
| benchmark | validation surface | 1 |
| dsl | top-level component | 1 |
| example | top-level component | 1 |
| gradle | top-level component | 1 |
| query-model | top-level component | 1 |
| render | top-level component | 1 |
| support | top-level component | 1 |


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
| config | [package.json](../../../../sources/line__kotlin-jdsl/package.json) | config signal |
| docs | [README.md](../../../../sources/line__kotlin-jdsl/README.md) | docs signal |
| docs | [render/jpql/src/testFixtures/kotlin/com/linecorp/kotlinjdsl/render/jpql/entity/book/Book.kt](../../../../sources/line__kotlin-jdsl/render/jpql/src/testFixtures/kotlin/com/linecorp/kotlinjdsl/render/jpql/entity/book/Book.kt) | docs signal |
| docs | [render/jpql/src/testFixtures/kotlin/com/linecorp/kotlinjdsl/render/jpql/entity/book/BookAuthor.kt](../../../../sources/line__kotlin-jdsl/render/jpql/src/testFixtures/kotlin/com/linecorp/kotlinjdsl/render/jpql/entity/book/BookAuthor.kt) | docs signal |
| docs | [render/jpql/src/testFixtures/kotlin/com/linecorp/kotlinjdsl/render/jpql/entity/book/BookAuthorType.kt](../../../../sources/line__kotlin-jdsl/render/jpql/src/testFixtures/kotlin/com/linecorp/kotlinjdsl/render/jpql/entity/book/BookAuthorType.kt) | docs signal |
| eval | [support/spring-data-jpa-boot4/src/test/kotlin/org/springframework/data/jpa/repository/query/QueryEnhancerFactoryAdaptorTest.kt](../../../../sources/line__kotlin-jdsl/support/spring-data-jpa-boot4/src/test/kotlin/org/springframework/data/jpa/repository/query/QueryEnhancerFactoryAdaptorTest.kt) | eval signal |
| eval | [support/spring-data-jpa-boot4/src/test/kotlin/com/linecorp/kotlinjdsl/support/spring/data/jpa/JpqlEntityManagerUtilsTest.kt](../../../../sources/line__kotlin-jdsl/support/spring-data-jpa-boot4/src/test/kotlin/com/linecorp/kotlinjdsl/support/spring/data/jpa/JpqlEntityManagerUtilsTest.kt) | eval signal |
| eval | [support/spring-data-jpa/src/test/kotlin/com/linecorp/kotlinjdsl/support/spring/data/jpa/JpqlEntityManagerUtilsTest.kt](../../../../sources/line__kotlin-jdsl/support/spring-data-jpa/src/test/kotlin/com/linecorp/kotlinjdsl/support/spring/data/jpa/JpqlEntityManagerUtilsTest.kt) | eval signal |
| eval | [support/spring-batch6/src/test/kotlin/com/linecorp/kotlinjdsl/support/spring/batch/JpqlEntityManagerUtilsTest.kt](../../../../sources/line__kotlin-jdsl/support/spring-batch6/src/test/kotlin/com/linecorp/kotlinjdsl/support/spring/batch/JpqlEntityManagerUtilsTest.kt) | eval signal |
| ci | [.github/workflows/lint.yaml](../../../../sources/line__kotlin-jdsl/.github/workflows/lint.yaml) | ci support |
| ci | [.github/workflows/publish.yaml](../../../../sources/line__kotlin-jdsl/.github/workflows/publish.yaml) | ci support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 0 | not obvious |
| spec | 2 | [docs/ko/kotlin-jdsl-roadmap.md](../../../../sources/line__kotlin-jdsl/docs/ko/kotlin-jdsl-roadmap.md)<br>[docs/en/kotlin-jdsl-roadmap.md](../../../../sources/line__kotlin-jdsl/docs/en/kotlin-jdsl-roadmap.md) |
| eval | 305 | [support/spring-data-jpa-boot4/src/test/kotlin/org/springframework/data/jpa/repository/query/QueryEnhancerFactoryAdaptorTest.kt](../../../../sources/line__kotlin-jdsl/support/spring-data-jpa-boot4/src/test/kotlin/org/springframework/data/jpa/repository/query/QueryEnhancerFactoryAdaptorTest.kt)<br>[support/spring-data-jpa-boot4/src/test/kotlin/com/linecorp/kotlinjdsl/support/spring/data/jpa/JpqlEntityManagerUtilsTest.kt](../../../../sources/line__kotlin-jdsl/support/spring-data-jpa-boot4/src/test/kotlin/com/linecorp/kotlinjdsl/support/spring/data/jpa/JpqlEntityManagerUtilsTest.kt)<br>[support/spring-data-jpa/src/test/kotlin/com/linecorp/kotlinjdsl/support/spring/data/jpa/JpqlEntityManagerUtilsTest.kt](../../../../sources/line__kotlin-jdsl/support/spring-data-jpa/src/test/kotlin/com/linecorp/kotlinjdsl/support/spring/data/jpa/JpqlEntityManagerUtilsTest.kt)<br>[support/spring-batch6/src/test/kotlin/com/linecorp/kotlinjdsl/support/spring/batch/JpqlEntityManagerUtilsTest.kt](../../../../sources/line__kotlin-jdsl/support/spring-batch6/src/test/kotlin/com/linecorp/kotlinjdsl/support/spring/batch/JpqlEntityManagerUtilsTest.kt)<br>[support/spring-batch-javax/src/test/kotlin/com/linecorp/kotlinjdsl/support/spring/batch/javax/JpqlEntityManagerUtilsTest.kt](../../../../sources/line__kotlin-jdsl/support/spring-batch-javax/src/test/kotlin/com/linecorp/kotlinjdsl/support/spring/batch/javax/JpqlEntityManagerUtilsTest.kt)<br>[support/spring-batch/src/test/kotlin/com/linecorp/kotlinjdsl/support/spring/batch/JpqlEntityManagerUtilsTest.kt](../../../../sources/line__kotlin-jdsl/support/spring-batch/src/test/kotlin/com/linecorp/kotlinjdsl/support/spring/batch/JpqlEntityManagerUtilsTest.kt)<br>[support/hibernate-reactive-javax/src/test/kotlin/com/linecorp/kotlinjdsl/support/hibernate/reactive/JpqlMutinySessionUtilsTest.kt](../../../../sources/line__kotlin-jdsl/support/hibernate-reactive-javax/src/test/kotlin/com/linecorp/kotlinjdsl/support/hibernate/reactive/JpqlMutinySessionUtilsTest.kt)<br>[support/hibernate-reactive-javax/src/test/kotlin/com/linecorp/kotlinjdsl/support/hibernate/reactive/JpqlMutinyStatelessSessionUtilsTest.kt](../../../../sources/line__kotlin-jdsl/support/hibernate-reactive-javax/src/test/kotlin/com/linecorp/kotlinjdsl/support/hibernate/reactive/JpqlMutinyStatelessSessionUtilsTest.kt) |
| security | 0 | not obvious |
| ci | 3 | [.github/workflows/lint.yaml](../../../../sources/line__kotlin-jdsl/.github/workflows/lint.yaml)<br>[.github/workflows/publish.yaml](../../../../sources/line__kotlin-jdsl/.github/workflows/publish.yaml)<br>[.github/workflows/test.yaml](../../../../sources/line__kotlin-jdsl/.github/workflows/test.yaml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 77 | [README.md](../../../../sources/line__kotlin-jdsl/README.md)<br>[render/jpql/src/testFixtures/kotlin/com/linecorp/kotlinjdsl/render/jpql/entity/book/Book.kt](../../../../sources/line__kotlin-jdsl/render/jpql/src/testFixtures/kotlin/com/linecorp/kotlinjdsl/render/jpql/entity/book/Book.kt)<br>[render/jpql/src/testFixtures/kotlin/com/linecorp/kotlinjdsl/render/jpql/entity/book/BookAuthor.kt](../../../../sources/line__kotlin-jdsl/render/jpql/src/testFixtures/kotlin/com/linecorp/kotlinjdsl/render/jpql/entity/book/BookAuthor.kt)<br>[render/jpql/src/testFixtures/kotlin/com/linecorp/kotlinjdsl/render/jpql/entity/book/BookAuthorType.kt](../../../../sources/line__kotlin-jdsl/render/jpql/src/testFixtures/kotlin/com/linecorp/kotlinjdsl/render/jpql/entity/book/BookAuthorType.kt)<br>[render/jpql/src/testFixtures/kotlin/com/linecorp/kotlinjdsl/render/jpql/entity/book/BookPublisher.kt](../../../../sources/line__kotlin-jdsl/render/jpql/src/testFixtures/kotlin/com/linecorp/kotlinjdsl/render/jpql/entity/book/BookPublisher.kt)<br>[render/jpql/src/testFixtures/kotlin/com/linecorp/kotlinjdsl/render/jpql/entity/book/BookStatus.kt](../../../../sources/line__kotlin-jdsl/render/jpql/src/testFixtures/kotlin/com/linecorp/kotlinjdsl/render/jpql/entity/book/BookStatus.kt)<br>[render/jpql/src/testFixtures/kotlin/com/linecorp/kotlinjdsl/render/jpql/entity/book/Isbn.kt](../../../../sources/line__kotlin-jdsl/render/jpql/src/testFixtures/kotlin/com/linecorp/kotlinjdsl/render/jpql/entity/book/Isbn.kt)<br>[query-model/jpql/src/testFixtures/kotlin/com/linecorp/kotlinjdsl/querymodel/jpql/entity/book/Book.kt](../../../../sources/line__kotlin-jdsl/query-model/jpql/src/testFixtures/kotlin/com/linecorp/kotlinjdsl/querymodel/jpql/entity/book/Book.kt) |
| config | 1 | [package.json](../../../../sources/line__kotlin-jdsl/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 305 | [support/spring-data-jpa-boot4/src/test/kotlin/org/springframework/data/jpa/repository/query/QueryEnhancerFactoryAdaptorTest.kt](../../../../sources/line__kotlin-jdsl/support/spring-data-jpa-boot4/src/test/kotlin/org/springframework/data/jpa/repository/query/QueryEnhancerFactoryAdaptorTest.kt)<br>[support/spring-data-jpa-boot4/src/test/kotlin/com/linecorp/kotlinjdsl/support/spring/data/jpa/JpqlEntityManagerUtilsTest.kt](../../../../sources/line__kotlin-jdsl/support/spring-data-jpa-boot4/src/test/kotlin/com/linecorp/kotlinjdsl/support/spring/data/jpa/JpqlEntityManagerUtilsTest.kt)<br>[support/spring-data-jpa/src/test/kotlin/com/linecorp/kotlinjdsl/support/spring/data/jpa/JpqlEntityManagerUtilsTest.kt](../../../../sources/line__kotlin-jdsl/support/spring-data-jpa/src/test/kotlin/com/linecorp/kotlinjdsl/support/spring/data/jpa/JpqlEntityManagerUtilsTest.kt)<br>[support/spring-batch6/src/test/kotlin/com/linecorp/kotlinjdsl/support/spring/batch/JpqlEntityManagerUtilsTest.kt](../../../../sources/line__kotlin-jdsl/support/spring-batch6/src/test/kotlin/com/linecorp/kotlinjdsl/support/spring/batch/JpqlEntityManagerUtilsTest.kt)<br>[support/spring-batch-javax/src/test/kotlin/com/linecorp/kotlinjdsl/support/spring/batch/javax/JpqlEntityManagerUtilsTest.kt](../../../../sources/line__kotlin-jdsl/support/spring-batch-javax/src/test/kotlin/com/linecorp/kotlinjdsl/support/spring/batch/javax/JpqlEntityManagerUtilsTest.kt)<br>[support/spring-batch/src/test/kotlin/com/linecorp/kotlinjdsl/support/spring/batch/JpqlEntityManagerUtilsTest.kt](../../../../sources/line__kotlin-jdsl/support/spring-batch/src/test/kotlin/com/linecorp/kotlinjdsl/support/spring/batch/JpqlEntityManagerUtilsTest.kt) |
| CI workflows | 3 | [.github/workflows/lint.yaml](../../../../sources/line__kotlin-jdsl/.github/workflows/lint.yaml)<br>[.github/workflows/publish.yaml](../../../../sources/line__kotlin-jdsl/.github/workflows/publish.yaml)<br>[.github/workflows/test.yaml](../../../../sources/line__kotlin-jdsl/.github/workflows/test.yaml) |
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

1. Start from key references: `package.json`, `README.md`, `render/jpql/src/testFixtures/kotlin/com/linecorp/kotlinjdsl/render/jpql/entity/book/Book.kt`.
2. Verify behavior through test/eval files: `support/spring-data-jpa-boot4/src/test/kotlin/org/springframework/data/jpa/repository/query/QueryEnhancerFactoryAdaptorTest.kt`, `support/spring-data-jpa-boot4/src/test/kotlin/com/linecorp/kotlinjdsl/support/spring/data/jpa/JpqlEntityManagerUtilsTest.kt`, `support/spring-data-jpa/src/test/kotlin/com/linecorp/kotlinjdsl/support/spring/data/jpa/JpqlEntityManagerUtilsTest.kt`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 Kotlin library that makes it easy to build and execute queries without generated metamodel. 핵심 구조 신호는 Kotlin, package.json, README.md, LICENSE, ci, docs이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, needs deeper structural scan입니다.
