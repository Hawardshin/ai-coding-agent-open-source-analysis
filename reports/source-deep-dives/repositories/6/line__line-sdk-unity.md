# line/line-sdk-unity Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Provides a modern way of implementing LINE APIs in Unity games, for iOS and Android.

## 요약

- 조사 단위: `sources/line__line-sdk-unity` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 163 files, 40 directories, depth score 45, key references 3개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

개발 생산성/DevTools 관점에서 eval/test harness 구조로 읽힌다. 핵심 소스 근거는 docs=README.md이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 3개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | line/line-sdk-unity |
| Topic | Developer Productivity and DevTools / 개발 생산성/DevTools |
| Region | korea |
| Language | C# |
| Stars | 125 |
| Forks | 26 |
| License | Apache-2.0 |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/line__line-sdk-unity](../../../../sources/line__line-sdk-unity) |
| Existing report | [reports/korea-trending/repositories/line__line-sdk-unity.md](../../../korea-trending/repositories/line__line-sdk-unity.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 163 / 40 |
| Max observed depth | 10 |
| Top directories | .github, LINE_SDK_Unity, linesdk-android-unity-wrapper |
| Top extensions | .meta: 58, .cs: 26, .asset: 22, .kt: 11, (none): 9, .h: 5, .md: 4, .xml: 4, .m: 3, .properties: 3, .gradle: 2, .jar: 2 |
| Source patterns | eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| .github | ci surface | 1 |
| LINE_SDK_Unity | top-level component | 1 |
| linesdk-android-unity-wrapper | top-level component | 1 |


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
| docs | [README.md](../../../../sources/line__line-sdk-unity/README.md) | docs signal |
| eval | [LINE_SDK_Unity/Assets/Editor/Tests.meta](../../../../sources/line__line-sdk-unity/LINE_SDK_Unity/Assets/Editor/Tests.meta) | eval support |
| eval | [LINE_SDK_Unity/Assets/Editor/Tests/AccessTokenTest.cs](../../../../sources/line__line-sdk-unity/LINE_SDK_Unity/Assets/Editor/Tests/AccessTokenTest.cs) | eval support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 0 | not obvious |
| spec | 0 | not obvious |
| eval | 13 | [LINE_SDK_Unity/Assets/Editor/Tests.meta](../../../../sources/line__line-sdk-unity/LINE_SDK_Unity/Assets/Editor/Tests.meta)<br>[LINE_SDK_Unity/Assets/Editor/Tests/AccessTokenTest.cs](../../../../sources/line__line-sdk-unity/LINE_SDK_Unity/Assets/Editor/Tests/AccessTokenTest.cs)<br>[LINE_SDK_Unity/Assets/Editor/Tests/AccessTokenTest.cs.meta](../../../../sources/line__line-sdk-unity/LINE_SDK_Unity/Assets/Editor/Tests/AccessTokenTest.cs.meta)<br>[LINE_SDK_Unity/Assets/Editor/Tests/APITest.cs](../../../../sources/line__line-sdk-unity/LINE_SDK_Unity/Assets/Editor/Tests/APITest.cs)<br>[LINE_SDK_Unity/Assets/Editor/Tests/APITest.cs.meta](../../../../sources/line__line-sdk-unity/LINE_SDK_Unity/Assets/Editor/Tests/APITest.cs.meta)<br>[LINE_SDK_Unity/Assets/Editor/Tests/FlattenActionTest.cs](../../../../sources/line__line-sdk-unity/LINE_SDK_Unity/Assets/Editor/Tests/FlattenActionTest.cs)<br>[LINE_SDK_Unity/Assets/Editor/Tests/FlattenActionTest.cs.meta](../../../../sources/line__line-sdk-unity/LINE_SDK_Unity/Assets/Editor/Tests/FlattenActionTest.cs.meta)<br>[LINE_SDK_Unity/Assets/Editor/Tests/LoginResultTest.cs](../../../../sources/line__line-sdk-unity/LINE_SDK_Unity/Assets/Editor/Tests/LoginResultTest.cs) |
| security | 0 | not obvious |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 1 | [README.md](../../../../sources/line__line-sdk-unity/README.md) |
| config | 0 | not obvious |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 13 | [LINE_SDK_Unity/Assets/Editor/Tests.meta](../../../../sources/line__line-sdk-unity/LINE_SDK_Unity/Assets/Editor/Tests.meta)<br>[LINE_SDK_Unity/Assets/Editor/Tests/AccessTokenTest.cs](../../../../sources/line__line-sdk-unity/LINE_SDK_Unity/Assets/Editor/Tests/AccessTokenTest.cs)<br>[LINE_SDK_Unity/Assets/Editor/Tests/AccessTokenTest.cs.meta](../../../../sources/line__line-sdk-unity/LINE_SDK_Unity/Assets/Editor/Tests/AccessTokenTest.cs.meta)<br>[LINE_SDK_Unity/Assets/Editor/Tests/APITest.cs](../../../../sources/line__line-sdk-unity/LINE_SDK_Unity/Assets/Editor/Tests/APITest.cs)<br>[LINE_SDK_Unity/Assets/Editor/Tests/APITest.cs.meta](../../../../sources/line__line-sdk-unity/LINE_SDK_Unity/Assets/Editor/Tests/APITest.cs.meta)<br>[LINE_SDK_Unity/Assets/Editor/Tests/FlattenActionTest.cs](../../../../sources/line__line-sdk-unity/LINE_SDK_Unity/Assets/Editor/Tests/FlattenActionTest.cs) |
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

1. Start from key references: `README.md`, `LINE_SDK_Unity/Assets/Editor/Tests.meta`, `LINE_SDK_Unity/Assets/Editor/Tests/AccessTokenTest.cs`.
2. Verify behavior through test/eval files: `LINE_SDK_Unity/Assets/Editor/Tests.meta`, `LINE_SDK_Unity/Assets/Editor/Tests/AccessTokenTest.cs`, `LINE_SDK_Unity/Assets/Editor/Tests/AccessTokenTest.cs.meta`.

## Existing Repository Insight

개발 생산성/DevTools 관점에서 Provides a modern way of implementing LINE APIs in Unity games, for iOS and Android.. 핵심 구조 신호는 C#, README.md, LICENSE, ci, docs이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 개발 생산성/DevTools 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, needs deeper structural scan입니다.
