# daangn/SushiBelt Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

view visible tracker for ios

## 요약

- 조사 단위: `sources/daangn__SushiBelt` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 66 files, 26 directories, depth score 53, key references 7개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 eval/test harness 구조로 읽힌다. 핵심 소스 근거는 docs=README.md이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 7개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | daangn/SushiBelt |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | Swift |
| Stars | 88 |
| Forks | 9 |
| License | NOASSERTION |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/daangn__SushiBelt](../../../../sources/daangn__SushiBelt) |
| Existing report | [reports/korea-trending/repositories/daangn__SushiBelt.md](../../../korea-trending/repositories/daangn__SushiBelt.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 66 / 26 |
| Max observed depth | 5 |
| Top directories | .github, Example, screenshots, Sources, Tests |
| Top extensions | .swift: 38, .png: 7, .json: 4, (none): 4, .plist: 3, .yml: 3, .lock: 1, .md: 1, .pbxproj: 1, .podspec: 1, .xcscheme: 1, .xcworkspacedata: 1 |
| Source patterns | eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| Tests | validation surface | 14 |
| .github | ci surface | 1 |
| Example | top-level component | 1 |
| screenshots | top-level component | 1 |
| Sources | top-level component | 1 |


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
| docs | [README.md](../../../../sources/daangn__SushiBelt/README.md) | docs signal |
| eval | [Tests/SushiBeltTests/SushiBeltTrackerItemTests.swift](../../../../sources/daangn__SushiBelt/Tests/SushiBeltTests/SushiBeltTrackerItemTests.swift) | eval signal |
| eval | [Tests/SushiBeltTests/SushiBeltTrackerTests.swift](../../../../sources/daangn__SushiBelt/Tests/SushiBeltTests/SushiBeltTrackerTests.swift) | eval signal |
| eval | [Tests/SushiBeltTests/TestDoubles/SushiBeltDebuggerSpy.swift](../../../../sources/daangn__SushiBelt/Tests/SushiBeltTests/TestDoubles/SushiBeltDebuggerSpy.swift) | eval signal |
| eval | [Tests/SushiBeltTests/TestDoubles/SushiBeltTrackerDataSourceStub.swift](../../../../sources/daangn__SushiBelt/Tests/SushiBeltTests/TestDoubles/SushiBeltTrackerDataSourceStub.swift) | eval signal |
| ci | [.github/workflows/ci.yml](../../../../sources/daangn__SushiBelt/.github/workflows/ci.yml) | ci support |
| ci | [.github/workflows/release.yml](../../../../sources/daangn__SushiBelt/.github/workflows/release.yml) | ci support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 0 | not obvious |
| spec | 0 | not obvious |
| eval | 14 | [Tests/SushiBeltTests/SushiBeltTrackerItemTests.swift](../../../../sources/daangn__SushiBelt/Tests/SushiBeltTests/SushiBeltTrackerItemTests.swift)<br>[Tests/SushiBeltTests/SushiBeltTrackerTests.swift](../../../../sources/daangn__SushiBelt/Tests/SushiBeltTests/SushiBeltTrackerTests.swift)<br>[Tests/SushiBeltTests/TestDoubles/SushiBeltDebuggerSpy.swift](../../../../sources/daangn__SushiBelt/Tests/SushiBeltTests/TestDoubles/SushiBeltDebuggerSpy.swift)<br>[Tests/SushiBeltTests/TestDoubles/SushiBeltTrackerDataSourceStub.swift](../../../../sources/daangn__SushiBelt/Tests/SushiBeltTests/TestDoubles/SushiBeltTrackerDataSourceStub.swift)<br>[Tests/SushiBeltTests/TestDoubles/SushiBeltTrackerDelegateSpy.swift](../../../../sources/daangn__SushiBelt/Tests/SushiBeltTests/TestDoubles/SushiBeltTrackerDelegateSpy.swift)<br>[Tests/SushiBeltTests/TestDoubles/SushiBeltTrackerIdentifierStub.swift](../../../../sources/daangn__SushiBelt/Tests/SushiBeltTests/TestDoubles/SushiBeltTrackerIdentifierStub.swift)<br>[Tests/SushiBeltTests/TestDoubles/SushiBeltTrackerItemDiffCheckerSpy.swift](../../../../sources/daangn__SushiBelt/Tests/SushiBeltTests/TestDoubles/SushiBeltTrackerItemDiffCheckerSpy.swift)<br>[Tests/SushiBeltTests/TestDoubles/UIPanGestureRecognizerStub.swift](../../../../sources/daangn__SushiBelt/Tests/SushiBeltTests/TestDoubles/UIPanGestureRecognizerStub.swift) |
| security | 0 | not obvious |
| ci | 2 | [.github/workflows/ci.yml](../../../../sources/daangn__SushiBelt/.github/workflows/ci.yml)<br>[.github/workflows/release.yml](../../../../sources/daangn__SushiBelt/.github/workflows/release.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 1 | [README.md](../../../../sources/daangn__SushiBelt/README.md) |
| config | 0 | not obvious |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 14 | [Tests/SushiBeltTests/SushiBeltTrackerItemTests.swift](../../../../sources/daangn__SushiBelt/Tests/SushiBeltTests/SushiBeltTrackerItemTests.swift)<br>[Tests/SushiBeltTests/SushiBeltTrackerTests.swift](../../../../sources/daangn__SushiBelt/Tests/SushiBeltTests/SushiBeltTrackerTests.swift)<br>[Tests/SushiBeltTests/TestDoubles/SushiBeltDebuggerSpy.swift](../../../../sources/daangn__SushiBelt/Tests/SushiBeltTests/TestDoubles/SushiBeltDebuggerSpy.swift)<br>[Tests/SushiBeltTests/TestDoubles/SushiBeltTrackerDataSourceStub.swift](../../../../sources/daangn__SushiBelt/Tests/SushiBeltTests/TestDoubles/SushiBeltTrackerDataSourceStub.swift)<br>[Tests/SushiBeltTests/TestDoubles/SushiBeltTrackerDelegateSpy.swift](../../../../sources/daangn__SushiBelt/Tests/SushiBeltTests/TestDoubles/SushiBeltTrackerDelegateSpy.swift)<br>[Tests/SushiBeltTests/TestDoubles/SushiBeltTrackerIdentifierStub.swift](../../../../sources/daangn__SushiBelt/Tests/SushiBeltTests/TestDoubles/SushiBeltTrackerIdentifierStub.swift) |
| CI workflows | 2 | [.github/workflows/ci.yml](../../../../sources/daangn__SushiBelt/.github/workflows/ci.yml)<br>[.github/workflows/release.yml](../../../../sources/daangn__SushiBelt/.github/workflows/release.yml) |
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

1. Start from key references: `README.md`, `Tests/SushiBeltTests/SushiBeltTrackerItemTests.swift`, `Tests/SushiBeltTests/SushiBeltTrackerTests.swift`.
2. Verify behavior through test/eval files: `Tests/SushiBeltTests/SushiBeltTrackerItemTests.swift`, `Tests/SushiBeltTests/SushiBeltTrackerTests.swift`, `Tests/SushiBeltTests/TestDoubles/SushiBeltDebuggerSpy.swift`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 view visible tracker for ios. 핵심 구조 신호는 Swift, README.md, LICENSE, tests, ci, docs이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 needs deeper structural scan입니다.
