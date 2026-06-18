# Samsung/360tools Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

The 360tools package is software for VR video processing experiments. The software includes both 360 video conversion and quality metrics functionality

## 요약

- 조사 단위: `sources/Samsung__360tools` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 28 files, 4 directories, depth score 35, key references 2개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

평가/관측/품질 관점에서 eval/test harness 구조로 읽힌다. 핵심 소스 근거는 eval=app/360tools_metric/360tools_metric.c, app/360tools_metric/sphere_655362.txt이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 2개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 quality and evaluation comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | Samsung/360tools |
| Topic | Evals, Observability, and Quality / 평가/관측/품질 |
| Region | korea |
| Language | C |
| Stars | 117 |
| Forks | 48 |
| License | NOASSERTION |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/Samsung__360tools](../../../../sources/Samsung__360tools) |
| Existing report | [reports/korea-trending/repositories/Samsung__360tools.md](../../../korea-trending/repositories/Samsung__360tools.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 28 / 4 |
| Max observed depth | 3 |
| Top directories | app, src |
| Top extensions | .c: 13, .h: 12, .md: 1, .txt: 1, (none): 1 |
| Source patterns | eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| app | top-level component | 1 |
| src | source boundary | 1 |


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
| eval | [app/360tools_metric/360tools_metric.c](../../../../sources/Samsung__360tools/app/360tools_metric/360tools_metric.c) | eval signal |
| eval | [app/360tools_metric/sphere_655362.txt](../../../../sources/Samsung__360tools/app/360tools_metric/sphere_655362.txt) | eval signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 0 | not obvious |
| spec | 0 | not obvious |
| eval | 2 | [app/360tools_metric/360tools_metric.c](../../../../sources/Samsung__360tools/app/360tools_metric/360tools_metric.c)<br>[app/360tools_metric/sphere_655362.txt](../../../../sources/Samsung__360tools/app/360tools_metric/sphere_655362.txt) |
| security | 0 | not obvious |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 1 | [README.md](../../../../sources/Samsung__360tools/README.md) |
| config | 0 | not obvious |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 2 | [app/360tools_metric/360tools_metric.c](../../../../sources/Samsung__360tools/app/360tools_metric/360tools_metric.c)<br>[app/360tools_metric/sphere_655362.txt](../../../../sources/Samsung__360tools/app/360tools_metric/sphere_655362.txt) |
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

1. Start from key references: `app/360tools_metric/360tools_metric.c`, `app/360tools_metric/sphere_655362.txt`.
2. Verify behavior through test/eval files: `app/360tools_metric/360tools_metric.c`, `app/360tools_metric/sphere_655362.txt`.

## Existing Repository Insight

평가/관측/품질 관점에서 The 360tools package is software for VR video processing experiments. The software includes both 360 video conversion an. 핵심 구조 신호는 C, README.md, LICENSE, docs이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 평가/관측/품질 레포입니다. 활용 관점은 quality and evaluation comparison point이고, 후속 확인 포인트는 test signal not obvious, ci signal not obvious, needs deeper structural scan입니다.
