# kakao/network-node-manager Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

network-node-manager is a kubernetes controller that controls the network configuration of a node to resolve network issues of kubernetes.

## 요약

- 조사 단위: `sources/kakao__network-node-manager` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 37 files, 15 directories, depth score 82, key references 10개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

AI 인프라/서빙 관점에서 cli-first, spec/docs-driven, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 entrypoints=main.go이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 10개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | kakao/network-node-manager |
| Topic | AI Infrastructure and Serving / AI 인프라/서빙 |
| Region | korea |
| Language | Go |
| Stars | 107 |
| Forks | 19 |
| License | Apache-2.0 |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/kakao__network-node-manager](../../../../sources/kakao__network-node-manager) |
| Existing report | [reports/korea-trending/repositories/kakao__network-node-manager.md](../../../korea-trending/repositories/kakao__network-node-manager.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 37 / 15 |
| Max observed depth | 3 |
| Top directories | .github, controllers, deploy, img, issues, pkg, scripts, test |
| Top extensions | .go: 15, .yml: 8, .md: 5, (none): 4, .mod: 1, .png: 1, .pptx: 1, .sh: 1, .sum: 1 |
| Source patterns | cli-first, spec/docs-driven, eval/test harness, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| .github | ci surface | 1 |
| controllers | top-level component | 1 |
| deploy | deployment surface | 1 |
| img | top-level component | 1 |
| issues | top-level component | 1 |
| pkg | top-level component | 1 |
| scripts | top-level component | 1 |
| test | validation surface | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | Makefile | all | make all |
| test | Makefile | test | make test |
| utility | Makefile | network-node-manager | make network-node-manager |
| utility | Makefile | run | make run |
| utility | Makefile | deploy | make deploy |
| quality | Makefile | fmt | make fmt |
| utility | Makefile | vet | make vet |
| build | Makefile | docker-build | make docker-build |
| container | Makefile | docker-push | make docker-push |


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
| entrypoints | [main.go](../../../../sources/kakao__network-node-manager/main.go) | entrypoints signal |
| container | [Dockerfile](../../../../sources/kakao__network-node-manager/Dockerfile) | container signal |
| container | [deploy/network-node-manager_iptables.yml](../../../../sources/kakao__network-node-manager/deploy/network-node-manager_iptables.yml) | container signal |
| container | [deploy/network-node-manager_ipvs.yml](../../../../sources/kakao__network-node-manager/deploy/network-node-manager_ipvs.yml) | container signal |
| config | [go.mod](../../../../sources/kakao__network-node-manager/go.mod) | config signal |
| config | [Makefile](../../../../sources/kakao__network-node-manager/Makefile) | config signal |
| ci | [.github/workflows/build.yml](../../../../sources/kakao__network-node-manager/.github/workflows/build.yml) | ci signal |
| ci | [.github/workflows/test.yml](../../../../sources/kakao__network-node-manager/.github/workflows/test.yml) | ci signal |
| eval | [test/manifests/nginx-deploy.yml](../../../../sources/kakao__network-node-manager/test/manifests/nginx-deploy.yml) | eval support |
| eval | [test/manifests/nginx-svc-ipv4-ipv6.yml](../../../../sources/kakao__network-node-manager/test/manifests/nginx-svc-ipv4-ipv6.yml) | eval support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 1 | [main.go](../../../../sources/kakao__network-node-manager/main.go) |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 0 | not obvious |
| spec | 1 | [img/network-node-manager_Architecture.PNG](../../../../sources/kakao__network-node-manager/img/network-node-manager_Architecture.PNG) |
| eval | 10 | [test/manifests/nginx-deploy.yml](../../../../sources/kakao__network-node-manager/test/manifests/nginx-deploy.yml)<br>[test/manifests/nginx-svc-ipv4-ipv6.yml](../../../../sources/kakao__network-node-manager/test/manifests/nginx-svc-ipv4-ipv6.yml)<br>[test/manifests/nginx-svc-ipv4.yml](../../../../sources/kakao__network-node-manager/test/manifests/nginx-svc-ipv4.yml)<br>[test/manifests/nginx-svc-ipv6.yml](../../../../sources/kakao__network-node-manager/test/manifests/nginx-svc-ipv6.yml)<br>[pkg/utils/utils_test.go](../../../../sources/kakao__network-node-manager/pkg/utils/utils_test.go)<br>[pkg/iptables/iptables_test.go](../../../../sources/kakao__network-node-manager/pkg/iptables/iptables_test.go)<br>[pkg/iptables/rule_test.go](../../../../sources/kakao__network-node-manager/pkg/iptables/rule_test.go)<br>[pkg/ip/ip_test.go](../../../../sources/kakao__network-node-manager/pkg/ip/ip_test.go) |
| security | 0 | not obvious |
| ci | 2 | [.github/workflows/build.yml](../../../../sources/kakao__network-node-manager/.github/workflows/build.yml)<br>[.github/workflows/test.yml](../../../../sources/kakao__network-node-manager/.github/workflows/test.yml) |
| container | 3 | [Dockerfile](../../../../sources/kakao__network-node-manager/Dockerfile)<br>[deploy/network-node-manager_iptables.yml](../../../../sources/kakao__network-node-manager/deploy/network-node-manager_iptables.yml)<br>[deploy/network-node-manager_ipvs.yml](../../../../sources/kakao__network-node-manager/deploy/network-node-manager_ipvs.yml) |
| instruction | 0 | not obvious |
| docs | 1 | [README.md](../../../../sources/kakao__network-node-manager/README.md) |
| config | 2 | [go.mod](../../../../sources/kakao__network-node-manager/go.mod)<br>[Makefile](../../../../sources/kakao__network-node-manager/Makefile) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 10 | [test/manifests/nginx-deploy.yml](../../../../sources/kakao__network-node-manager/test/manifests/nginx-deploy.yml)<br>[test/manifests/nginx-svc-ipv4-ipv6.yml](../../../../sources/kakao__network-node-manager/test/manifests/nginx-svc-ipv4-ipv6.yml)<br>[test/manifests/nginx-svc-ipv4.yml](../../../../sources/kakao__network-node-manager/test/manifests/nginx-svc-ipv4.yml)<br>[test/manifests/nginx-svc-ipv6.yml](../../../../sources/kakao__network-node-manager/test/manifests/nginx-svc-ipv6.yml)<br>[pkg/utils/utils_test.go](../../../../sources/kakao__network-node-manager/pkg/utils/utils_test.go)<br>[pkg/iptables/iptables_test.go](../../../../sources/kakao__network-node-manager/pkg/iptables/iptables_test.go) |
| CI workflows | 2 | [.github/workflows/build.yml](../../../../sources/kakao__network-node-manager/.github/workflows/build.yml)<br>[.github/workflows/test.yml](../../../../sources/kakao__network-node-manager/.github/workflows/test.yml) |
| Containers / deploy | 3 | [Dockerfile](../../../../sources/kakao__network-node-manager/Dockerfile)<br>[deploy/network-node-manager_iptables.yml](../../../../sources/kakao__network-node-manager/deploy/network-node-manager_iptables.yml)<br>[deploy/network-node-manager_ipvs.yml](../../../../sources/kakao__network-node-manager/deploy/network-node-manager_ipvs.yml) |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | security/policy surface not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `main.go`, `Dockerfile`, `deploy/network-node-manager_iptables.yml`.
2. Trace execution through entrypoints: `main.go`.
3. Verify behavior through test/eval files: `test/manifests/nginx-deploy.yml`, `test/manifests/nginx-svc-ipv4-ipv6.yml`, `test/manifests/nginx-svc-ipv4.yml`.

## Existing Repository Insight

AI 인프라/서빙 관점에서 network node manager is a kubernetes controller that controls the network configuration of a node to resolve network iss. 핵심 구조 신호는 Go, go.mod, Dockerfile, Makefile, README.md, LICENSE이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 AI 인프라/서빙 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 needs deeper structural scan입니다.
