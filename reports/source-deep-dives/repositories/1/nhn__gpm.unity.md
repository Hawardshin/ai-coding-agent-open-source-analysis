# nhn/gpm.unity Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

A brand of NHN providing free services required for game development.

## 요약

- 조사 단위: `sources/nhn__gpm.unity` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 452 files, 67 directories, depth score 65, key references 5개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 docs=README.en.md, README.md, docs/WebView/README.en.md이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 5개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | nhn/gpm.unity |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | none |
| Stars | 434 |
| Forks | 60 |
| License | NOASSERTION |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/nhn__gpm.unity](../../../../sources/nhn__gpm.unity) |
| Existing report | [reports/korea-trending/repositories/nhn__gpm.unity.md](../../../korea-trending/repositories/nhn__gpm.unity.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 452 / 67 |
| Max observed depth | 5 |
| Top directories | .github, docs, release |
| Top extensions | .unitypackage: 129, .png: 120, .gif: 93, .md: 69, .xml: 27, .jpg: 11, .json: 1, .yml: 1, (none): 1 |
| Source patterns | agent/tool runtime, retrieval/vector path |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 43 |
| .github | ci surface | 1 |
| release | top-level component | 1 |


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
| docs | [README.en.md](../../../../sources/nhn__gpm.unity/README.en.md) | docs signal |
| docs | [README.md](../../../../sources/nhn__gpm.unity/README.md) | docs signal |
| docs | [docs/WebView/README.en.md](../../../../sources/nhn__gpm.unity/docs/WebView/README.en.md) | docs signal |
| docs | [docs/WebView/README.md](../../../../sources/nhn__gpm.unity/docs/WebView/README.md) | docs signal |
| ci | [.github/workflows/stale.yml](../../../../sources/nhn__gpm.unity/.github/workflows/stale.yml) | ci support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 1 | [docs/Profiler/images/memory_profiler.gif](../../../../sources/nhn__gpm.unity/docs/Profiler/images/memory_profiler.gif) |
| mcp | 0 | not obvious |
| retrieval | 4 | [release/Profiler/image/Profiler_Memory.png](../../../../sources/nhn__gpm.unity/release/Profiler/image/Profiler_Memory.png)<br>[docs/Profiler/images/memory_profiler.gif](../../../../sources/nhn__gpm.unity/docs/Profiler/images/memory_profiler.gif)<br>[docs/Profiler/images/profiler_edit_memory.gif](../../../../sources/nhn__gpm.unity/docs/Profiler/images/profiler_edit_memory.gif)<br>[docs/Profiler/images/profiler_memory_forum.gif](../../../../sources/nhn__gpm.unity/docs/Profiler/images/profiler_memory_forum.gif) |
| spec | 0 | not obvious |
| eval | 0 | not obvious |
| security | 0 | not obvious |
| ci | 1 | [.github/workflows/stale.yml](../../../../sources/nhn__gpm.unity/.github/workflows/stale.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 264 | [README.en.md](../../../../sources/nhn__gpm.unity/README.en.md)<br>[README.md](../../../../sources/nhn__gpm.unity/README.md)<br>[docs/WebView/README.en.md](../../../../sources/nhn__gpm.unity/docs/WebView/README.en.md)<br>[docs/WebView/README.md](../../../../sources/nhn__gpm.unity/docs/WebView/README.md)<br>[docs/WebView/ReleaseNotes.en.md](../../../../sources/nhn__gpm.unity/docs/WebView/ReleaseNotes.en.md)<br>[docs/WebView/ReleaseNotes.md](../../../../sources/nhn__gpm.unity/docs/WebView/ReleaseNotes.md)<br>[docs/WebView/images/forum_earth_americas.png](../../../../sources/nhn__gpm.unity/docs/WebView/images/forum_earth_americas.png)<br>[docs/WebView/images/forum_features.png](../../../../sources/nhn__gpm.unity/docs/WebView/images/forum_features.png) |
| config | 0 | not obvious |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 0 | not obvious |
| CI workflows | 1 | [.github/workflows/stale.yml](../../../../sources/nhn__gpm.unity/.github/workflows/stale.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | container/deploy path not obvious; test/eval path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `README.en.md`, `README.md`, `docs/WebView/README.en.md`.
2. Map agent/tool runtime through: `docs/Profiler/images/memory_profiler.gif`.
3. Inspect retrieval/memory/indexing through: `release/Profiler/image/Profiler_Memory.png`, `docs/Profiler/images/memory_profiler.gif`, `docs/Profiler/images/profiler_edit_memory.gif`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 A brand of NHN providing free services required for game development.. 핵심 구조 신호는 README.md, LICENSE, ci, docs, spec-artifacts이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, needs deeper structural scan입니다.
