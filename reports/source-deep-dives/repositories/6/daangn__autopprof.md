# daangn/autopprof Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Automatically profile the Go applications when CPU or memory utilization crosses threshold

## 요약

- 조사 단위: `sources/daangn__autopprof` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 44 files, 6 directories, depth score 68, key references 10개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 eval/test harness, containerized deploy 구조로 읽힌다. 핵심 소스 근거는 docs=README.md이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 10개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 knowledge/RAG pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | daangn/autopprof |
| Topic | LLM Wiki, RAG, and Knowledge / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | Go |
| Stars | 218 |
| Forks | 10 |
| License | Apache-2.0 |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/daangn__autopprof](../../../../sources/daangn__autopprof) |
| Existing report | [reports/korea-trending/repositories/daangn__autopprof.md](../../../korea-trending/repositories/daangn__autopprof.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 44 / 6 |
| Max observed depth | 3 |
| Top directories | .github, examples, images, queryer, report |
| Top extensions | .go: 29, .yml: 3, (none): 3, .md: 2, .mod: 2, .png: 2, .sum: 2, .sh: 1 |
| Source patterns | eval/test harness, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| .github | ci surface | 1 |
| examples | top-level component | 1 |
| examples/go.mod | examples workspace | 1 |
| images | top-level component | 1 |
| queryer | top-level component | 1 |
| report | top-level component | 1 |


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
| docs | [README.md](../../../../sources/daangn__autopprof/README.md) | docs signal |
| eval | [autopprof_test.go](../../../../sources/daangn__autopprof/autopprof_test.go) | eval signal |
| eval | [autopprof_unsupported_test.go](../../../../sources/daangn__autopprof/autopprof_unsupported_test.go) | eval signal |
| eval | [benchmark.sh](../../../../sources/daangn__autopprof/benchmark.sh) | eval signal |
| eval | [metric_cpu.go](../../../../sources/daangn__autopprof/metric_cpu.go) | eval signal |
| config | [go.mod](../../../../sources/daangn__autopprof/go.mod) | config signal |
| config | [examples/go.mod](../../../../sources/daangn__autopprof/examples/go.mod) | config signal |
| ci | [.github/workflows/release.yml](../../../../sources/daangn__autopprof/.github/workflows/release.yml) | ci support |
| ci | [.github/workflows/test.yml](../../../../sources/daangn__autopprof/.github/workflows/test.yml) | ci support |
| container | [Dockerfile](../../../../sources/daangn__autopprof/Dockerfile) | container support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 0 | not obvious |
| spec | 0 | not obvious |
| eval | 14 | [autopprof_test.go](../../../../sources/daangn__autopprof/autopprof_test.go)<br>[autopprof_unsupported_test.go](../../../../sources/daangn__autopprof/autopprof_unsupported_test.go)<br>[benchmark.sh](../../../../sources/daangn__autopprof/benchmark.sh)<br>[metric_cpu.go](../../../../sources/daangn__autopprof/metric_cpu.go)<br>[metric_goroutine.go](../../../../sources/daangn__autopprof/metric_goroutine.go)<br>[metric_mem.go](../../../../sources/daangn__autopprof/metric_mem.go)<br>[metric.go](../../../../sources/daangn__autopprof/metric.go)<br>[profile_test.go](../../../../sources/daangn__autopprof/profile_test.go) |
| security | 0 | not obvious |
| ci | 2 | [.github/workflows/release.yml](../../../../sources/daangn__autopprof/.github/workflows/release.yml)<br>[.github/workflows/test.yml](../../../../sources/daangn__autopprof/.github/workflows/test.yml) |
| container | 1 | [Dockerfile](../../../../sources/daangn__autopprof/Dockerfile) |
| instruction | 0 | not obvious |
| docs | 1 | [README.md](../../../../sources/daangn__autopprof/README.md) |
| config | 2 | [go.mod](../../../../sources/daangn__autopprof/go.mod)<br>[examples/go.mod](../../../../sources/daangn__autopprof/examples/go.mod) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 14 | [autopprof_test.go](../../../../sources/daangn__autopprof/autopprof_test.go)<br>[autopprof_unsupported_test.go](../../../../sources/daangn__autopprof/autopprof_unsupported_test.go)<br>[benchmark.sh](../../../../sources/daangn__autopprof/benchmark.sh)<br>[metric_cpu.go](../../../../sources/daangn__autopprof/metric_cpu.go)<br>[metric_goroutine.go](../../../../sources/daangn__autopprof/metric_goroutine.go)<br>[metric_mem.go](../../../../sources/daangn__autopprof/metric_mem.go) |
| CI workflows | 2 | [.github/workflows/release.yml](../../../../sources/daangn__autopprof/.github/workflows/release.yml)<br>[.github/workflows/test.yml](../../../../sources/daangn__autopprof/.github/workflows/test.yml) |
| Containers / deploy | 1 | [Dockerfile](../../../../sources/daangn__autopprof/Dockerfile) |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | none |
| security | security/policy surface not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `README.md`, `autopprof_test.go`, `autopprof_unsupported_test.go`.
2. Verify behavior through test/eval files: `autopprof_test.go`, `autopprof_unsupported_test.go`, `benchmark.sh`.

## Existing Repository Insight

LLM 위키/RAG/지식베이스 관점에서 Automatically profile the Go applications when CPU or memory utilization crosses threshold. 핵심 구조 신호는 Go, go.mod, Dockerfile, README.md, LICENSE, docker이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 knowledge/RAG pattern reference이고, 후속 확인 포인트는 test signal not obvious, needs deeper structural scan입니다.
