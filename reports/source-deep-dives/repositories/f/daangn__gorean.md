# daangn/gorean Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

korean analyzer utility tools

## 요약

- 조사 단위: `sources/daangn__gorean` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 29 files, 5 directories, depth score 48, key references 6개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 eval/test harness 구조로 읽힌다. 핵심 소스 근거는 config=go.mod이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 6개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | daangn/gorean |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | Go |
| Stars | 36 |
| Forks | 2 |
| License | MIT |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/daangn__gorean](../../../../sources/daangn__gorean) |
| Existing report | [reports/korea-trending/repositories/daangn__gorean.md](../../../korea-trending/repositories/daangn__gorean.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 29 / 5 |
| Max observed depth | 3 |
| Top directories | .circleci, .github, sample |
| Top extensions | .go: 16, .md: 6, .yml: 3, (none): 2, .mod: 1, .sum: 1 |
| Source patterns | eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| .github | ci surface | 1 |
| sample | top-level component | 1 |


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
| config | [go.mod](../../../../sources/daangn__gorean/go.mod) | config signal |
| docs | [.github/README.md](../../../../sources/daangn__gorean/.github/README.md) | docs signal |
| eval | [capsule_test.go](../../../../sources/daangn__gorean/capsule_test.go) | eval signal |
| eval | [chosung_test.go](../../../../sources/daangn__gorean/chosung_test.go) | eval signal |
| eval | [edgengram_test.go](../../../../sources/daangn__gorean/edgengram_test.go) | eval signal |
| eval | [join_test.go](../../../../sources/daangn__gorean/join_test.go) | eval signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 0 | not obvious |
| spec | 0 | not obvious |
| eval | 7 | [capsule_test.go](../../../../sources/daangn__gorean/capsule_test.go)<br>[chosung_test.go](../../../../sources/daangn__gorean/chosung_test.go)<br>[edgengram_test.go](../../../../sources/daangn__gorean/edgengram_test.go)<br>[join_test.go](../../../../sources/daangn__gorean/join_test.go)<br>[korean_test.go](../../../../sources/daangn__gorean/korean_test.go)<br>[sort_test.go](../../../../sources/daangn__gorean/sort_test.go)<br>[split_test.go](../../../../sources/daangn__gorean/split_test.go) |
| security | 0 | not obvious |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 1 | [.github/README.md](../../../../sources/daangn__gorean/.github/README.md) |
| config | 1 | [go.mod](../../../../sources/daangn__gorean/go.mod) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 7 | [capsule_test.go](../../../../sources/daangn__gorean/capsule_test.go)<br>[chosung_test.go](../../../../sources/daangn__gorean/chosung_test.go)<br>[edgengram_test.go](../../../../sources/daangn__gorean/edgengram_test.go)<br>[join_test.go](../../../../sources/daangn__gorean/join_test.go)<br>[korean_test.go](../../../../sources/daangn__gorean/korean_test.go)<br>[sort_test.go](../../../../sources/daangn__gorean/sort_test.go) |
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

1. Start from key references: `go.mod`, `.github/README.md`, `capsule_test.go`.
2. Verify behavior through test/eval files: `capsule_test.go`, `chosung_test.go`, `edgengram_test.go`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 korean analyzer utility tools. 핵심 구조 신호는 Go, go.mod, LICENSE, ci이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, needs deeper structural scan입니다.
