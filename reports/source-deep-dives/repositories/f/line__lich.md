# line/lich Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

A library collection that enhances the development of Android apps.

## 요약

- 조사 단위: `sources/line__lich` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 330 files, 422 directories, depth score 73, key references 10개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 retrieval/vector path, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 docs=README.md, viewmodel/README.md, thrift/README.md이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 10개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | line/lich |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | Kotlin |
| Stars | 202 |
| Forks | 20 |
| License | Apache-2.0 |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/line__lich](../../../../sources/line__lich) |
| Existing report | [reports/korea-trending/repositories/line__lich.md](../../../korea-trending/repositories/line__lich.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 330 / 422 |
| Max observed depth | 12 |
| Top directories | .github, component, component-compose, component-debug, component-test, component-test-mockitokotlin, component-test-mockk, gradle, lifecycle, okhttp, publishing, sample_thrift, sample-app, savedstate, savedstate-compiler, static-analysis, thrift, thrift-logging, viewmodel, viewmodel-compose |
| Top extensions | .kt: 175, .xml: 47, .gradle: 31, (none): 31, .md: 12, .java: 5, .webp: 5, .componentprovider: 3, .pro: 3, .properties: 3, .lichviewmodelprovider: 2, .yml: 2 |
| Source patterns | retrieval/vector path, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| .github | ci surface | 1 |
| component | top-level component | 1 |
| component-compose | top-level component | 1 |
| component-debug | top-level component | 1 |
| component-test | validation surface | 1 |
| component-test-mockitokotlin | validation surface | 1 |
| component-test-mockk | validation surface | 1 |
| gradle | top-level component | 1 |
| lifecycle | top-level component | 1 |
| okhttp | top-level component | 1 |
| publishing | top-level component | 1 |
| sample_thrift | top-level component | 1 |
| sample-app | top-level component | 1 |
| savedstate | top-level component | 1 |
| savedstate-compiler | top-level component | 1 |
| static-analysis | top-level component | 1 |
| thrift | top-level component | 1 |
| thrift-logging | top-level component | 1 |


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
| docs | [README.md](../../../../sources/line__lich/README.md) | docs signal |
| docs | [viewmodel/README.md](../../../../sources/line__lich/viewmodel/README.md) | docs signal |
| docs | [thrift/README.md](../../../../sources/line__lich/thrift/README.md) | docs signal |
| docs | [savedstate/README.md](../../../../sources/line__lich/savedstate/README.md) | docs signal |
| eval | [viewmodel-test-mockk/.gitignore](../../../../sources/line__lich/viewmodel-test-mockk/.gitignore) | eval signal |
| eval | [viewmodel-test-mockk/build.gradle](../../../../sources/line__lich/viewmodel-test-mockk/build.gradle) | eval signal |
| eval | [viewmodel-test-mockk/src/main/AndroidManifest.xml](../../../../sources/line__lich/viewmodel-test-mockk/src/main/AndroidManifest.xml) | eval signal |
| eval | [viewmodel-test-mockk/src/main/java/com/linecorp/lich/viewmodel/test/mockk/Mocking.kt](../../../../sources/line__lich/viewmodel-test-mockk/src/main/java/com/linecorp/lich/viewmodel/test/mockk/Mocking.kt) | eval signal |
| ci | [.github/workflows/ci.yml](../../../../sources/line__lich/.github/workflows/ci.yml) | ci support |
| ci | [.github/workflows/ossrh.yml](../../../../sources/line__lich/.github/workflows/ossrh.yml) | ci support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 5 | [sample-app/app/src/main/res/navigation/child_nav_graph.xml](../../../../sources/line__lich/sample-app/app/src/main/res/navigation/child_nav_graph.xml)<br>[sample-app/app/src/main/res/navigation/main_nav_graph.xml](../../../../sources/line__lich/sample-app/app/src/main/res/navigation/main_nav_graph.xml)<br>[sample-app/app/src/main/res/layout/nav_graph_first_fragment.xml](../../../../sources/line__lich/sample-app/app/src/main/res/layout/nav_graph_first_fragment.xml)<br>[sample-app/app/src/main/res/layout/nav_graph_second_fragment.xml](../../../../sources/line__lich/sample-app/app/src/main/res/layout/nav_graph_second_fragment.xml)<br>[sample-app/app/src/main/res/layout/nav_graph_third_fragment.xml](../../../../sources/line__lich/sample-app/app/src/main/res/layout/nav_graph_third_fragment.xml) |
| spec | 0 | not obvious |
| eval | 106 | [viewmodel-test-mockk/.gitignore](../../../../sources/line__lich/viewmodel-test-mockk/.gitignore)<br>[viewmodel-test-mockk/build.gradle](../../../../sources/line__lich/viewmodel-test-mockk/build.gradle)<br>[viewmodel-test-mockk/src/main/AndroidManifest.xml](../../../../sources/line__lich/viewmodel-test-mockk/src/main/AndroidManifest.xml)<br>[viewmodel-test-mockk/src/main/java/com/linecorp/lich/viewmodel/test/mockk/Mocking.kt](../../../../sources/line__lich/viewmodel-test-mockk/src/main/java/com/linecorp/lich/viewmodel/test/mockk/Mocking.kt)<br>[viewmodel-test-mockk/src/androidTest/AndroidManifest.xml](../../../../sources/line__lich/viewmodel-test-mockk/src/androidTest/AndroidManifest.xml)<br>[viewmodel-test-mockk/src/androidTest/java/com/linecorp/lich/viewmodel/test/mockk/BarViewModel.kt](../../../../sources/line__lich/viewmodel-test-mockk/src/androidTest/java/com/linecorp/lich/viewmodel/test/mockk/BarViewModel.kt)<br>[viewmodel-test-mockk/src/androidTest/java/com/linecorp/lich/viewmodel/test/mockk/FooViewModel.kt](../../../../sources/line__lich/viewmodel-test-mockk/src/androidTest/java/com/linecorp/lich/viewmodel/test/mockk/FooViewModel.kt)<br>[viewmodel-test-mockk/src/androidTest/java/com/linecorp/lich/viewmodel/test/mockk/MockingTest.kt](../../../../sources/line__lich/viewmodel-test-mockk/src/androidTest/java/com/linecorp/lich/viewmodel/test/mockk/MockingTest.kt) |
| security | 0 | not obvious |
| ci | 2 | [.github/workflows/ci.yml](../../../../sources/line__lich/.github/workflows/ci.yml)<br>[.github/workflows/ossrh.yml](../../../../sources/line__lich/.github/workflows/ossrh.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 10 | [README.md](../../../../sources/line__lich/README.md)<br>[viewmodel/README.md](../../../../sources/line__lich/viewmodel/README.md)<br>[thrift/README.md](../../../../sources/line__lich/thrift/README.md)<br>[savedstate/README.md](../../../../sources/line__lich/savedstate/README.md)<br>[sample-app/README.md](../../../../sources/line__lich/sample-app/README.md)<br>[sample_thrift/README.md](../../../../sources/line__lich/sample_thrift/README.md)<br>[publishing/README.md](../../../../sources/line__lich/publishing/README.md)<br>[okhttp/README.md](../../../../sources/line__lich/okhttp/README.md) |
| config | 0 | not obvious |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 106 | [viewmodel-test-mockk/.gitignore](../../../../sources/line__lich/viewmodel-test-mockk/.gitignore)<br>[viewmodel-test-mockk/build.gradle](../../../../sources/line__lich/viewmodel-test-mockk/build.gradle)<br>[viewmodel-test-mockk/src/main/AndroidManifest.xml](../../../../sources/line__lich/viewmodel-test-mockk/src/main/AndroidManifest.xml)<br>[viewmodel-test-mockk/src/main/java/com/linecorp/lich/viewmodel/test/mockk/Mocking.kt](../../../../sources/line__lich/viewmodel-test-mockk/src/main/java/com/linecorp/lich/viewmodel/test/mockk/Mocking.kt)<br>[viewmodel-test-mockk/src/androidTest/AndroidManifest.xml](../../../../sources/line__lich/viewmodel-test-mockk/src/androidTest/AndroidManifest.xml)<br>[viewmodel-test-mockk/src/androidTest/java/com/linecorp/lich/viewmodel/test/mockk/BarViewModel.kt](../../../../sources/line__lich/viewmodel-test-mockk/src/androidTest/java/com/linecorp/lich/viewmodel/test/mockk/BarViewModel.kt) |
| CI workflows | 2 | [.github/workflows/ci.yml](../../../../sources/line__lich/.github/workflows/ci.yml)<br>[.github/workflows/ossrh.yml](../../../../sources/line__lich/.github/workflows/ossrh.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | many top-level directories; module boundaries need review; primary entrypoint not obvious from path scan |
| operation | container/deploy path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `README.md`, `viewmodel/README.md`, `thrift/README.md`.
2. Inspect retrieval/memory/indexing through: `sample-app/app/src/main/res/navigation/child_nav_graph.xml`, `sample-app/app/src/main/res/navigation/main_nav_graph.xml`, `sample-app/app/src/main/res/layout/nav_graph_first_fragment.xml`.
3. Verify behavior through test/eval files: `viewmodel-test-mockk/.gitignore`, `viewmodel-test-mockk/build.gradle`, `viewmodel-test-mockk/src/main/AndroidManifest.xml`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 A library collection that enhances the development of Android apps.. 핵심 구조 신호는 Kotlin, build.gradle, README.md, LICENSE, tests, ci이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 needs deeper structural scan입니다.
