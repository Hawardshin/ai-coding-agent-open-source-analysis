# line/garr Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Collection of high performance, thread-safe, lock-free go data structures

## 요약

- 조사 단위: `sources/line__garr` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 79 files, 8 directories, depth score 52, key references 4개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

보안/거버넌스/안전 관점에서 eval/test harness 구조로 읽힌다. 핵심 소스 근거는 ci=.github/workflows/ci.yml이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 4개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | line/garr |
| Topic | Security, Governance, and Safety / 보안/거버넌스/안전 |
| Region | korea |
| Language | Go |
| Stars | 371 |
| Forks | 9 |
| License | Apache-2.0 |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/line__garr](../../../../sources/line__garr) |
| Existing report | [reports/korea-trending/repositories/line__garr.md](../../../korea-trending/repositories/line__garr.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 79 / 8 |
| Max observed depth | 3 |
| Top directories | .github, adder, circuit-breaker, internal, queue, retry, worker-pool |
| Top extensions | .go: 65, .md: 8, (none): 3, .mod: 1, .sum: 1, .yml: 1 |
| Source patterns | eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| .github | ci surface | 1 |
| adder | top-level component | 1 |
| circuit-breaker | ci surface | 1 |
| internal | top-level component | 1 |
| queue | top-level component | 1 |
| retry | top-level component | 1 |
| worker-pool | top-level component | 1 |


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
| ci | [.github/workflows/ci.yml](../../../../sources/line__garr/.github/workflows/ci.yml) | ci signal |
| config | [go.mod](../../../../sources/line__garr/go.mod) | config signal |
| eval | [worker-pool/pool_test.go](../../../../sources/line__garr/worker-pool/pool_test.go) | eval support |
| eval | [retry/attemptLimitingBackoff_test.go](../../../../sources/line__garr/retry/attemptLimitingBackoff_test.go) | eval support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 0 | not obvious |
| spec | 0 | not obvious |
| eval | 27 | [worker-pool/pool_test.go](../../../../sources/line__garr/worker-pool/pool_test.go)<br>[retry/attemptLimitingBackoff_test.go](../../../../sources/line__garr/retry/attemptLimitingBackoff_test.go)<br>[retry/backoff_test.go](../../../../sources/line__garr/retry/backoff_test.go)<br>[retry/exponentialBackoff_test.go](../../../../sources/line__garr/retry/exponentialBackoff_test.go)<br>[retry/fixedBackoff_test.go](../../../../sources/line__garr/retry/fixedBackoff_test.go)<br>[retry/jitterAddingBackoff_test.go](../../../../sources/line__garr/retry/jitterAddingBackoff_test.go)<br>[retry/randomBackoff_test.go](../../../../sources/line__garr/retry/randomBackoff_test.go)<br>[retry/utils_test.go](../../../../sources/line__garr/retry/utils_test.go) |
| security | 0 | not obvious |
| ci | 1 | [.github/workflows/ci.yml](../../../../sources/line__garr/.github/workflows/ci.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 6 | [README.md](../../../../sources/line__garr/README.md)<br>[worker-pool/README.md](../../../../sources/line__garr/worker-pool/README.md)<br>[retry/README.md](../../../../sources/line__garr/retry/README.md)<br>[queue/README.md](../../../../sources/line__garr/queue/README.md)<br>[circuit-breaker/README.md](../../../../sources/line__garr/circuit-breaker/README.md)<br>[adder/README.md](../../../../sources/line__garr/adder/README.md) |
| config | 1 | [go.mod](../../../../sources/line__garr/go.mod) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 27 | [worker-pool/pool_test.go](../../../../sources/line__garr/worker-pool/pool_test.go)<br>[retry/attemptLimitingBackoff_test.go](../../../../sources/line__garr/retry/attemptLimitingBackoff_test.go)<br>[retry/backoff_test.go](../../../../sources/line__garr/retry/backoff_test.go)<br>[retry/exponentialBackoff_test.go](../../../../sources/line__garr/retry/exponentialBackoff_test.go)<br>[retry/fixedBackoff_test.go](../../../../sources/line__garr/retry/fixedBackoff_test.go)<br>[retry/jitterAddingBackoff_test.go](../../../../sources/line__garr/retry/jitterAddingBackoff_test.go) |
| CI workflows | 1 | [.github/workflows/ci.yml](../../../../sources/line__garr/.github/workflows/ci.yml) |
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

1. Start from key references: `.github/workflows/ci.yml`, `go.mod`, `worker-pool/pool_test.go`.
2. Verify behavior through test/eval files: `worker-pool/pool_test.go`, `retry/attemptLimitingBackoff_test.go`, `retry/backoff_test.go`.

## Existing Repository Insight

보안/거버넌스/안전 관점에서 Collection of high performance, thread safe, lock free go data structures. 핵심 구조 신호는 Go, go.mod, README.md, LICENSE, ci, docs이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 보안/거버넌스/안전 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, needs deeper structural scan입니다.
