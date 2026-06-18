# line/centraldogma-go Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Go client library for Central Dogma

## 요약

- 조사 단위: `sources/line__centraldogma-go` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 51 files, 5 directories, depth score 72, key references 10개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 cli-first, api/server, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 entrypoints=internal/app/dogma/main.go이고, 의존성 단서는 prometheus, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 10개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | line/centraldogma-go |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | Go |
| Stars | 54 |
| Forks | 17 |
| License | Apache-2.0 |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/line__centraldogma-go](../../../../sources/line__centraldogma-go) |
| Existing report | [reports/korea-trending/repositories/line__centraldogma-go.md](../../../korea-trending/repositories/line__centraldogma-go.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 51 / 5 |
| Max observed depth | 4 |
| Top directories | .github, internal |
| Top extensions | .go: 36, .yml: 5, .md: 3, (none): 3, .mod: 2, .sum: 2 |
| Source patterns | cli-first, api/server, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| .github | ci surface | 1 |
| internal | top-level component | 1 |


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
| observability | prometheus |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| entrypoints | [internal/app/dogma/main.go](../../../../sources/line__centraldogma-go/internal/app/dogma/main.go) | entrypoints signal |
| config | [go.mod](../../../../sources/line__centraldogma-go/go.mod) | config signal |
| config | [internal/app/dogma/go.mod](../../../../sources/line__centraldogma-go/internal/app/dogma/go.mod) | config signal |
| docs | [README.md](../../../../sources/line__centraldogma-go/README.md) | docs signal |
| eval | [content_service_test.go](../../../../sources/line__centraldogma-go/content_service_test.go) | eval signal |
| eval | [dogma_test.go](../../../../sources/line__centraldogma-go/dogma_test.go) | eval signal |
| eval | [metric_test.go](../../../../sources/line__centraldogma-go/metric_test.go) | eval signal |
| eval | [metric.go](../../../../sources/line__centraldogma-go/metric.go) | eval signal |
| ci | [.github/workflows/action_build.yml](../../../../sources/line__centraldogma-go/.github/workflows/action_build.yml) | ci support |
| ci | [.github/workflows/release.yml](../../../../sources/line__centraldogma-go/.github/workflows/release.yml) | ci support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 1 | [internal/app/dogma/main.go](../../../../sources/line__centraldogma-go/internal/app/dogma/main.go) |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 0 | not obvious |
| spec | 0 | not obvious |
| eval | 15 | [content_service_test.go](../../../../sources/line__centraldogma-go/content_service_test.go)<br>[dogma_test.go](../../../../sources/line__centraldogma-go/dogma_test.go)<br>[metric_test.go](../../../../sources/line__centraldogma-go/metric_test.go)<br>[metric.go](../../../../sources/line__centraldogma-go/metric.go)<br>[project_service_test.go](../../../../sources/line__centraldogma-go/project_service_test.go)<br>[repository_service_test.go](../../../../sources/line__centraldogma-go/repository_service_test.go)<br>[utils_test.go](../../../../sources/line__centraldogma-go/utils_test.go)<br>[watch_service_test.go](../../../../sources/line__centraldogma-go/watch_service_test.go) |
| security | 0 | not obvious |
| ci | 2 | [.github/workflows/action_build.yml](../../../../sources/line__centraldogma-go/.github/workflows/action_build.yml)<br>[.github/workflows/release.yml](../../../../sources/line__centraldogma-go/.github/workflows/release.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 1 | [README.md](../../../../sources/line__centraldogma-go/README.md) |
| config | 2 | [go.mod](../../../../sources/line__centraldogma-go/go.mod)<br>[internal/app/dogma/go.mod](../../../../sources/line__centraldogma-go/internal/app/dogma/go.mod) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 15 | [content_service_test.go](../../../../sources/line__centraldogma-go/content_service_test.go)<br>[dogma_test.go](../../../../sources/line__centraldogma-go/dogma_test.go)<br>[metric_test.go](../../../../sources/line__centraldogma-go/metric_test.go)<br>[metric.go](../../../../sources/line__centraldogma-go/metric.go)<br>[project_service_test.go](../../../../sources/line__centraldogma-go/project_service_test.go)<br>[repository_service_test.go](../../../../sources/line__centraldogma-go/repository_service_test.go) |
| CI workflows | 2 | [.github/workflows/action_build.yml](../../../../sources/line__centraldogma-go/.github/workflows/action_build.yml)<br>[.github/workflows/release.yml](../../../../sources/line__centraldogma-go/.github/workflows/release.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `internal/app/dogma/main.go`, `go.mod`, `internal/app/dogma/go.mod`.
2. Trace execution through entrypoints: `internal/app/dogma/main.go`.
3. Verify behavior through test/eval files: `content_service_test.go`, `dogma_test.go`, `metric_test.go`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 Go client library for Central Dogma. 핵심 구조 신호는 Go, go.mod, README.md, LICENSE, ci, docs이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, needs deeper structural scan입니다.
