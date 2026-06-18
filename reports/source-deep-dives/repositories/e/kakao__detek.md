# kakao/detek Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Extensible problem-detecting CLI tool for reliable Kubernetes cluster operations and rapid problem detections.

## 요약

- 조사 단위: `sources/kakao__detek` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 56 files, 12 directories, depth score 88, key references 9개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

개발 생산성/DevTools 관점에서 cli-first, agent/tool runtime, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 entrypoints=main.go이고, 의존성 단서는 cobra, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 9개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | kakao/detek |
| Topic | Developer Productivity and DevTools / 개발 생산성/DevTools |
| Region | korea |
| Language | Go |
| Stars | 90 |
| Forks | 11 |
| License | Apache-2.0 |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/kakao__detek](../../../../sources/kakao__detek) |
| Existing report | [reports/korea-trending/repositories/kakao__detek.md](../../../korea-trending/repositories/kakao__detek.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 56 / 12 |
| Max observed depth | 3 |
| Top directories | .github, cases, cmd, images, pkg |
| Top extensions | .go: 44, .md: 3, (none): 3, .png: 2, .yml: 2, .mod: 1, .sum: 1 |
| Source patterns | cli-first, agent/tool runtime, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| .github | ci surface | 1 |
| cases | top-level component | 1 |
| cmd | source boundary | 1 |
| images | top-level component | 1 |
| pkg | top-level component | 1 |


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
| developerSurface | cobra |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| entrypoints | [main.go](../../../../sources/kakao__detek/main.go) | entrypoints signal |
| config | [go.mod](../../../../sources/kakao__detek/go.mod) | config signal |
| ci | [.github/workflows/push.yml](../../../../sources/kakao__detek/.github/workflows/push.yml) | ci signal |
| ci | [.github/workflows/tests.yml](../../../../sources/kakao__detek/.github/workflows/tests.yml) | ci signal |
| docs | [README.md](../../../../sources/kakao__detek/README.md) | docs signal |
| docs | [cases/README.md](../../../../sources/kakao__detek/cases/README.md) | docs signal |
| container | [Dockerfile](../../../../sources/kakao__detek/Dockerfile) | container support |
| eval | [pkg/renderer/html_test.go](../../../../sources/kakao__detek/pkg/renderer/html_test.go) | eval support |
| eval | [pkg/renderer/json_test.go](../../../../sources/kakao__detek/pkg/renderer/json_test.go) | eval support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 1 | [main.go](../../../../sources/kakao__detek/main.go) |
| agentRuntime | 2 | [pkg/detek/context_test.go](../../../../sources/kakao__detek/pkg/detek/context_test.go)<br>[pkg/detek/context.go](../../../../sources/kakao__detek/pkg/detek/context.go) |
| mcp | 0 | not obvious |
| retrieval | 0 | not obvious |
| spec | 0 | not obvious |
| eval | 10 | [pkg/renderer/html_test.go](../../../../sources/kakao__detek/pkg/renderer/html_test.go)<br>[pkg/renderer/json_test.go](../../../../sources/kakao__detek/pkg/renderer/json_test.go)<br>[pkg/renderer/plan_table_test.go](../../../../sources/kakao__detek/pkg/renderer/plan_table_test.go)<br>[pkg/renderer/table_test.go](../../../../sources/kakao__detek/pkg/renderer/table_test.go)<br>[pkg/detek/context_test.go](../../../../sources/kakao__detek/pkg/detek/context_test.go)<br>[pkg/detek/fake_test.go](../../../../sources/kakao__detek/pkg/detek/fake_test.go)<br>[pkg/detek/manager_test.go](../../../../sources/kakao__detek/pkg/detek/manager_test.go)<br>[cases/collector_set_test.go](../../../../sources/kakao__detek/cases/collector_set_test.go) |
| security | 2 | [cases/detector/api_lifecycle_policy_v1beta1.go](../../../../sources/kakao__detek/cases/detector/api_lifecycle_policy_v1beta1.go)<br>[cases/collector/kubernetes_policy_v1beta1.go](../../../../sources/kakao__detek/cases/collector/kubernetes_policy_v1beta1.go) |
| ci | 2 | [.github/workflows/push.yml](../../../../sources/kakao__detek/.github/workflows/push.yml)<br>[.github/workflows/tests.yml](../../../../sources/kakao__detek/.github/workflows/tests.yml) |
| container | 1 | [Dockerfile](../../../../sources/kakao__detek/Dockerfile) |
| instruction | 0 | not obvious |
| docs | 2 | [README.md](../../../../sources/kakao__detek/README.md)<br>[cases/README.md](../../../../sources/kakao__detek/cases/README.md) |
| config | 1 | [go.mod](../../../../sources/kakao__detek/go.mod) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 10 | [pkg/renderer/html_test.go](../../../../sources/kakao__detek/pkg/renderer/html_test.go)<br>[pkg/renderer/json_test.go](../../../../sources/kakao__detek/pkg/renderer/json_test.go)<br>[pkg/renderer/plan_table_test.go](../../../../sources/kakao__detek/pkg/renderer/plan_table_test.go)<br>[pkg/renderer/table_test.go](../../../../sources/kakao__detek/pkg/renderer/table_test.go)<br>[pkg/detek/context_test.go](../../../../sources/kakao__detek/pkg/detek/context_test.go)<br>[pkg/detek/fake_test.go](../../../../sources/kakao__detek/pkg/detek/fake_test.go) |
| CI workflows | 2 | [.github/workflows/push.yml](../../../../sources/kakao__detek/.github/workflows/push.yml)<br>[.github/workflows/tests.yml](../../../../sources/kakao__detek/.github/workflows/tests.yml) |
| Containers / deploy | 1 | [Dockerfile](../../../../sources/kakao__detek/Dockerfile) |
| Security / policy | 2 | [cases/detector/api_lifecycle_policy_v1beta1.go](../../../../sources/kakao__detek/cases/detector/api_lifecycle_policy_v1beta1.go)<br>[cases/collector/kubernetes_policy_v1beta1.go](../../../../sources/kakao__detek/cases/collector/kubernetes_policy_v1beta1.go) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `main.go`, `go.mod`, `.github/workflows/push.yml`.
2. Trace execution through entrypoints: `main.go`.
3. Map agent/tool runtime through: `pkg/detek/context_test.go`, `pkg/detek/context.go`.
4. Verify behavior through test/eval files: `pkg/renderer/html_test.go`, `pkg/renderer/json_test.go`, `pkg/renderer/plan_table_test.go`.

## Existing Repository Insight

개발 생산성/DevTools 관점에서 Extensible problem detecting CLI tool for reliable Kubernetes cluster operations and rapid problem detections.. 핵심 구조 신호는 Go, go.mod, Dockerfile, README.md, LICENSE, ci이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 개발 생산성/DevTools 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, needs deeper structural scan입니다.
