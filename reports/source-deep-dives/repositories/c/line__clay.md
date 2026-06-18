# line/clay Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Clay is an Android library project that provides image trimming which is originally an UI component of LINE Creators Studio

## 요약

- 조사 단위: `sources/line__clay` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 81 files, 53 directories, depth score 42, key references 3개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 eval/test harness 구조로 읽힌다. 핵심 소스 근거는 docs=README.md이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 3개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | line/clay |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | Kotlin |
| Stars | 118 |
| Forks | 21 |
| License | Apache-2.0 |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/line__clay](../../../../sources/line__clay) |
| Existing report | [reports/korea-trending/repositories/line__clay.md](../../../korea-trending/repositories/line__clay.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 81 / 53 |
| Max observed depth | 10 |
| Top directories | app, clayview, gradle, screenshot |
| Top extensions | .kt: 34, .png: 11, .xml: 9, .gradle: 5, (none): 4, .java: 3, .md: 3, .properties: 3, .pro: 2, .txt: 2, .bat: 1, .gif: 1 |
| Source patterns | eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| app | top-level component | 1 |
| clayview | top-level component | 1 |
| gradle | top-level component | 1 |
| screenshot | top-level component | 1 |


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
| docs | [README.md](../../../../sources/line__clay/README.md) | docs signal |
| eval | [app/src/test/java/com/linecorp/clay/ExampleUnitTest.java](../../../../sources/line__clay/app/src/test/java/com/linecorp/clay/ExampleUnitTest.java) | eval signal |
| eval | [app/src/main/res/drawable-xxhdpi/test.jpg](../../../../sources/line__clay/app/src/main/res/drawable-xxhdpi/test.jpg) | eval signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 0 | not obvious |
| spec | 0 | not obvious |
| eval | 2 | [app/src/test/java/com/linecorp/clay/ExampleUnitTest.java](../../../../sources/line__clay/app/src/test/java/com/linecorp/clay/ExampleUnitTest.java)<br>[app/src/main/res/drawable-xxhdpi/test.jpg](../../../../sources/line__clay/app/src/main/res/drawable-xxhdpi/test.jpg) |
| security | 0 | not obvious |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 1 | [README.md](../../../../sources/line__clay/README.md) |
| config | 0 | not obvious |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 2 | [app/src/test/java/com/linecorp/clay/ExampleUnitTest.java](../../../../sources/line__clay/app/src/test/java/com/linecorp/clay/ExampleUnitTest.java)<br>[app/src/main/res/drawable-xxhdpi/test.jpg](../../../../sources/line__clay/app/src/main/res/drawable-xxhdpi/test.jpg) |
| CI workflows | 0 | not obvious |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | CI workflow path not obvious; container/deploy path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `README.md`, `app/src/test/java/com/linecorp/clay/ExampleUnitTest.java`, `app/src/main/res/drawable-xxhdpi/test.jpg`.
2. Verify behavior through test/eval files: `app/src/test/java/com/linecorp/clay/ExampleUnitTest.java`, `app/src/main/res/drawable-xxhdpi/test.jpg`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 Clay is an Android library project that provides image trimming which is originally an UI component of LINE Creators Stu. 핵심 구조 신호는 Kotlin, build.gradle, README.md, docs이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, ci signal not obvious, needs deeper structural scan입니다.
