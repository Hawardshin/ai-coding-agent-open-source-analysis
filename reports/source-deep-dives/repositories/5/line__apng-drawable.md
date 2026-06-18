# line/apng-drawable Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

A lightweight and fast Animated Portable Network Graphics (APNG) image decoder for Android

## 요약

- 조사 단위: `sources/line__apng-drawable` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 70 files, 39 directories, depth score 51, key references 6개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 eval/test harness 구조로 읽힌다. 핵심 소스 근거는 docs=README.md이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 6개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | line/apng-drawable |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | Kotlin |
| Stars | 253 |
| Forks | 31 |
| License | Apache-2.0 |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/line__apng-drawable](../../../../sources/line__apng-drawable) |
| Existing report | [reports/korea-trending/repositories/line__apng-drawable.md](../../../korea-trending/repositories/line__apng-drawable.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 70 / 39 |
| Max observed depth | 9 |
| Top directories | .github, apng-drawable, gradle, sample-app |
| Top extensions | .png: 12, .xml: 10, (none): 10, .kt: 8, .h: 6, .cpp: 5, .kts: 4, .md: 3, .pro: 2, .properties: 2, .yml: 2, .bat: 1 |
| Source patterns | eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| .github | ci surface | 1 |
| apng-drawable | top-level component | 1 |
| gradle | top-level component | 1 |
| sample-app | top-level component | 1 |


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
| docs | [README.md](../../../../sources/line__apng-drawable/README.md) | docs signal |
| eval | [sample-app/src/main/assets/test.png](../../../../sources/line__apng-drawable/sample-app/src/main/assets/test.png) | eval signal |
| eval | [apng-drawable/src/test/kotlin/com/linecorp/apng/ApngDrawableTest.kt](../../../../sources/line__apng-drawable/apng-drawable/src/test/kotlin/com/linecorp/apng/ApngDrawableTest.kt) | eval signal |
| eval | [apng-drawable/src/test/kotlin/com/linecorp/apng/utils/AssertUtils.kt](../../../../sources/line__apng-drawable/apng-drawable/src/test/kotlin/com/linecorp/apng/utils/AssertUtils.kt) | eval signal |
| ci | [.github/workflows/ossrh.yml](../../../../sources/line__apng-drawable/.github/workflows/ossrh.yml) | ci support |
| ci | [.github/workflows/pull-request.yml](../../../../sources/line__apng-drawable/.github/workflows/pull-request.yml) | ci support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 0 | not obvious |
| spec | 0 | not obvious |
| eval | 3 | [sample-app/src/main/assets/test.png](../../../../sources/line__apng-drawable/sample-app/src/main/assets/test.png)<br>[apng-drawable/src/test/kotlin/com/linecorp/apng/ApngDrawableTest.kt](../../../../sources/line__apng-drawable/apng-drawable/src/test/kotlin/com/linecorp/apng/ApngDrawableTest.kt)<br>[apng-drawable/src/test/kotlin/com/linecorp/apng/utils/AssertUtils.kt](../../../../sources/line__apng-drawable/apng-drawable/src/test/kotlin/com/linecorp/apng/utils/AssertUtils.kt) |
| security | 0 | not obvious |
| ci | 2 | [.github/workflows/ossrh.yml](../../../../sources/line__apng-drawable/.github/workflows/ossrh.yml)<br>[.github/workflows/pull-request.yml](../../../../sources/line__apng-drawable/.github/workflows/pull-request.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 1 | [README.md](../../../../sources/line__apng-drawable/README.md) |
| config | 0 | not obvious |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 3 | [sample-app/src/main/assets/test.png](../../../../sources/line__apng-drawable/sample-app/src/main/assets/test.png)<br>[apng-drawable/src/test/kotlin/com/linecorp/apng/ApngDrawableTest.kt](../../../../sources/line__apng-drawable/apng-drawable/src/test/kotlin/com/linecorp/apng/ApngDrawableTest.kt)<br>[apng-drawable/src/test/kotlin/com/linecorp/apng/utils/AssertUtils.kt](../../../../sources/line__apng-drawable/apng-drawable/src/test/kotlin/com/linecorp/apng/utils/AssertUtils.kt) |
| CI workflows | 2 | [.github/workflows/ossrh.yml](../../../../sources/line__apng-drawable/.github/workflows/ossrh.yml)<br>[.github/workflows/pull-request.yml](../../../../sources/line__apng-drawable/.github/workflows/pull-request.yml) |
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

1. Start from key references: `README.md`, `sample-app/src/main/assets/test.png`, `apng-drawable/src/test/kotlin/com/linecorp/apng/ApngDrawableTest.kt`.
2. Verify behavior through test/eval files: `sample-app/src/main/assets/test.png`, `apng-drawable/src/test/kotlin/com/linecorp/apng/ApngDrawableTest.kt`, `apng-drawable/src/test/kotlin/com/linecorp/apng/utils/AssertUtils.kt`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 A lightweight and fast Animated Portable Network Graphics APNG image decoder for Android. 핵심 구조 신호는 Kotlin, README.md, LICENSE, ci, docs이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, needs deeper structural scan입니다.
