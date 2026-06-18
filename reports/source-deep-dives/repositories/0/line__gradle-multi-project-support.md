# line/gradle-multi-project-support Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

A collection of Gradle plugins to maintain the multi-project or multi-application in the mono-repo.

## 요약

- 조사 단위: `sources/line__gradle-multi-project-support` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 50 files, 69 directories, depth score 56, key references 9개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 eval/test harness 구조로 읽힌다. 핵심 소스 근거는 docs=README.md, recursive-git-log-plugin/README.md, build-recipe-plugin/README.md이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 9개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | line/gradle-multi-project-support |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | Kotlin |
| Stars | 88 |
| Forks | 15 |
| License | Apache-2.0 |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/line__gradle-multi-project-support](../../../../sources/line__gradle-multi-project-support) |
| Existing report | [reports/korea-trending/repositories/line__gradle-multi-project-support.md](../../../korea-trending/repositories/line__gradle-multi-project-support.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 50 / 69 |
| Max observed depth | 13 |
| Top directories | .github, build-recipe-plugin, gradle, recursive-git-log-plugin |
| Top extensions | .kt: 12, .properties: 10, .md: 7, .kts: 6, (none): 5, .log: 3, .yml: 3, .gradle: 2, .bat: 1, .jar: 1 |
| Source patterns | eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| .github | ci surface | 1 |
| build-recipe-plugin | ci surface | 1 |
| gradle | top-level component | 1 |
| recursive-git-log-plugin | top-level component | 1 |


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
| docs | [README.md](../../../../sources/line__gradle-multi-project-support/README.md) | docs signal |
| docs | [recursive-git-log-plugin/README.md](../../../../sources/line__gradle-multi-project-support/recursive-git-log-plugin/README.md) | docs signal |
| docs | [build-recipe-plugin/README.md](../../../../sources/line__gradle-multi-project-support/build-recipe-plugin/README.md) | docs signal |
| eval | [recursive-git-log-plugin/src/test/resources/.gitKeep](../../../../sources/line__gradle-multi-project-support/recursive-git-log-plugin/src/test/resources/.gitKeep) | eval signal |
| eval | [recursive-git-log-plugin/src/test/resources/assertion/change_log_v0.0.1_v0.0.2.log](../../../../sources/line__gradle-multi-project-support/recursive-git-log-plugin/src/test/resources/assertion/change_log_v0.0.1_v0.0.2.log) | eval signal |
| eval | [recursive-git-log-plugin/src/test/resources/assertion/change_log_v0.0.1_v0.0.3.log](../../../../sources/line__gradle-multi-project-support/recursive-git-log-plugin/src/test/resources/assertion/change_log_v0.0.1_v0.0.3.log) | eval signal |
| eval | [recursive-git-log-plugin/src/test/resources/assertion/change_log_v0.0.2_v0.0.3.log](../../../../sources/line__gradle-multi-project-support/recursive-git-log-plugin/src/test/resources/assertion/change_log_v0.0.2_v0.0.3.log) | eval signal |
| ci | [.github/workflows/publish.yml](../../../../sources/line__gradle-multi-project-support/.github/workflows/publish.yml) | ci support |
| ci | [.github/workflows/pull-request.yml](../../../../sources/line__gradle-multi-project-support/.github/workflows/pull-request.yml) | ci support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 0 | not obvious |
| spec | 0 | not obvious |
| eval | 19 | [recursive-git-log-plugin/src/test/resources/.gitKeep](../../../../sources/line__gradle-multi-project-support/recursive-git-log-plugin/src/test/resources/.gitKeep)<br>[recursive-git-log-plugin/src/test/resources/assertion/change_log_v0.0.1_v0.0.2.log](../../../../sources/line__gradle-multi-project-support/recursive-git-log-plugin/src/test/resources/assertion/change_log_v0.0.1_v0.0.2.log)<br>[recursive-git-log-plugin/src/test/resources/assertion/change_log_v0.0.1_v0.0.3.log](../../../../sources/line__gradle-multi-project-support/recursive-git-log-plugin/src/test/resources/assertion/change_log_v0.0.1_v0.0.3.log)<br>[recursive-git-log-plugin/src/test/resources/assertion/change_log_v0.0.2_v0.0.3.log](../../../../sources/line__gradle-multi-project-support/recursive-git-log-plugin/src/test/resources/assertion/change_log_v0.0.2_v0.0.3.log)<br>[recursive-git-log-plugin/src/test/kotlin/com/linecorp/support/project/multi/log/git/recursive/FunctionalTest.kt](../../../../sources/line__gradle-multi-project-support/recursive-git-log-plugin/src/test/kotlin/com/linecorp/support/project/multi/log/git/recursive/FunctionalTest.kt)<br>[build-recipe-plugin/src/test/resources/kotlin-dsl/build.gradle.kts](../../../../sources/line__gradle-multi-project-support/build-recipe-plugin/src/test/resources/kotlin-dsl/build.gradle.kts)<br>[build-recipe-plugin/src/test/resources/kotlin-dsl/settings.gradle.kts](../../../../sources/line__gradle-multi-project-support/build-recipe-plugin/src/test/resources/kotlin-dsl/settings.gradle.kts)<br>[build-recipe-plugin/src/test/resources/juice/api/server/gradle.properties](../../../../sources/line__gradle-multi-project-support/build-recipe-plugin/src/test/resources/juice/api/server/gradle.properties) |
| security | 0 | not obvious |
| ci | 2 | [.github/workflows/publish.yml](../../../../sources/line__gradle-multi-project-support/.github/workflows/publish.yml)<br>[.github/workflows/pull-request.yml](../../../../sources/line__gradle-multi-project-support/.github/workflows/pull-request.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 3 | [README.md](../../../../sources/line__gradle-multi-project-support/README.md)<br>[recursive-git-log-plugin/README.md](../../../../sources/line__gradle-multi-project-support/recursive-git-log-plugin/README.md)<br>[build-recipe-plugin/README.md](../../../../sources/line__gradle-multi-project-support/build-recipe-plugin/README.md) |
| config | 0 | not obvious |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 19 | [recursive-git-log-plugin/src/test/resources/.gitKeep](../../../../sources/line__gradle-multi-project-support/recursive-git-log-plugin/src/test/resources/.gitKeep)<br>[recursive-git-log-plugin/src/test/resources/assertion/change_log_v0.0.1_v0.0.2.log](../../../../sources/line__gradle-multi-project-support/recursive-git-log-plugin/src/test/resources/assertion/change_log_v0.0.1_v0.0.2.log)<br>[recursive-git-log-plugin/src/test/resources/assertion/change_log_v0.0.1_v0.0.3.log](../../../../sources/line__gradle-multi-project-support/recursive-git-log-plugin/src/test/resources/assertion/change_log_v0.0.1_v0.0.3.log)<br>[recursive-git-log-plugin/src/test/resources/assertion/change_log_v0.0.2_v0.0.3.log](../../../../sources/line__gradle-multi-project-support/recursive-git-log-plugin/src/test/resources/assertion/change_log_v0.0.2_v0.0.3.log)<br>[recursive-git-log-plugin/src/test/kotlin/com/linecorp/support/project/multi/log/git/recursive/FunctionalTest.kt](../../../../sources/line__gradle-multi-project-support/recursive-git-log-plugin/src/test/kotlin/com/linecorp/support/project/multi/log/git/recursive/FunctionalTest.kt)<br>[build-recipe-plugin/src/test/resources/kotlin-dsl/build.gradle.kts](../../../../sources/line__gradle-multi-project-support/build-recipe-plugin/src/test/resources/kotlin-dsl/build.gradle.kts) |
| CI workflows | 2 | [.github/workflows/publish.yml](../../../../sources/line__gradle-multi-project-support/.github/workflows/publish.yml)<br>[.github/workflows/pull-request.yml](../../../../sources/line__gradle-multi-project-support/.github/workflows/pull-request.yml) |
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

1. Start from key references: `README.md`, `recursive-git-log-plugin/README.md`, `build-recipe-plugin/README.md`.
2. Verify behavior through test/eval files: `recursive-git-log-plugin/src/test/resources/.gitKeep`, `recursive-git-log-plugin/src/test/resources/assertion/change_log_v0.0.1_v0.0.2.log`, `recursive-git-log-plugin/src/test/resources/assertion/change_log_v0.0.1_v0.0.3.log`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 A collection of Gradle plugins to maintain the multi project or multi application in the mono repo.. 핵심 구조 신호는 Kotlin, README.md, LICENSE, ci, docs이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, needs deeper structural scan입니다.
