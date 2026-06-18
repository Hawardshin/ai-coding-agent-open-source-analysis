# naver/p2pcp Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

An application that provides fast file system replication with peer-to-peer transfer.

## 요약

- 조사 단위: `sources/naver__p2pcp` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 90 files, 15 directories, depth score 90, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 cli-first, retrieval/vector path, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 entrypoints=src/main.go이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | naver/p2pcp |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | Go |
| Stars | 23 |
| Forks | 2 |
| License | Apache-2.0 |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/naver__p2pcp](../../../../sources/naver__p2pcp) |
| Existing report | [reports/korea-trending/repositories/naver__p2pcp.md](../../../korea-trending/repositories/naver__p2pcp.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 90 / 15 |
| Max observed depth | 3 |
| Top directories | .github, docs, src, test |
| Top extensions | .go: 63, .sh: 7, (none): 6, .yaml: 5, .md: 3, .yml: 2, .css: 1, .html: 1, .mod: 1, .sum: 1 |
| Source patterns | cli-first, retrieval/vector path, eval/test harness, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 37 |
| docs | documentation surface | 5 |
| .github | ci surface | 1 |
| test | validation surface | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | Makefile | dynamic | make dynamic |
| container | Makefile | image | make image |
| quality | Makefile | fmt | make fmt |
| quality | Makefile | fmt-check | make fmt-check |
| test | Makefile | test | make test |
| utility | Makefile | e2e | make e2e |
| utility | Makefile | e2e-local | make e2e-local |
| utility | Makefile | e2e-peer | make e2e-peer |
| utility | Makefile | e2e-command | make e2e-command |
| utility | Makefile | e2e-k8s | make e2e-k8s |
| utility | Makefile | clean | make clean |
| utility | Makefile | .PHONY | make .PHONY |


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
| entrypoints | [src/main.go](../../../../sources/naver__p2pcp/src/main.go) | entrypoints signal |
| config | [Makefile](../../../../sources/naver__p2pcp/Makefile) | config signal |
| config | [src/go.mod](../../../../sources/naver__p2pcp/src/go.mod) | config signal |
| docs | [README.ko.md](../../../../sources/naver__p2pcp/README.ko.md) | docs signal |
| docs | [README.md](../../../../sources/naver__p2pcp/README.md) | docs signal |
| docs | [test/README.md](../../../../sources/naver__p2pcp/test/README.md) | docs signal |
| docs | [docs/.nojekyll](../../../../sources/naver__p2pcp/docs/.nojekyll) | docs signal |
| eval | [test/command_test.sh](../../../../sources/naver__p2pcp/test/command_test.sh) | eval signal |
| eval | [test/common.sh](../../../../sources/naver__p2pcp/test/common.sh) | eval signal |
| eval | [test/create_checksum.sh](../../../../sources/naver__p2pcp/test/create_checksum.sh) | eval signal |
| eval | [test/create_random_data.sh](../../../../sources/naver__p2pcp/test/create_random_data.sh) | eval signal |
| ci | [.github/workflows/ci.yml](../../../../sources/naver__p2pcp/.github/workflows/ci.yml) | ci support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 1 | [src/main.go](../../../../sources/naver__p2pcp/src/main.go) |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 8 | [src/types/chunk_test.go](../../../../sources/naver__p2pcp/src/types/chunk_test.go)<br>[src/types/chunk.go](../../../../sources/naver__p2pcp/src/types/chunk.go)<br>[src/transfer/chunk_manager_test.go](../../../../sources/naver__p2pcp/src/transfer/chunk_manager_test.go)<br>[src/transfer/chunk_manager.go](../../../../sources/naver__p2pcp/src/transfer/chunk_manager.go)<br>[src/transfer/chunk_queue_test.go](../../../../sources/naver__p2pcp/src/transfer/chunk_queue_test.go)<br>[src/transfer/chunk_queue.go](../../../../sources/naver__p2pcp/src/transfer/chunk_queue.go)<br>[src/transfer/chunk_reader.go](../../../../sources/naver__p2pcp/src/transfer/chunk_reader.go)<br>[docs/index.html](../../../../sources/naver__p2pcp/docs/index.html) |
| spec | 0 | not obvious |
| eval | 41 | [test/command_test.sh](../../../../sources/naver__p2pcp/test/command_test.sh)<br>[test/common.sh](../../../../sources/naver__p2pcp/test/common.sh)<br>[test/create_checksum.sh](../../../../sources/naver__p2pcp/test/create_checksum.sh)<br>[test/create_random_data.sh](../../../../sources/naver__p2pcp/test/create_random_data.sh)<br>[test/k8s_test.sh](../../../../sources/naver__p2pcp/test/k8s_test.sh)<br>[test/local_test.sh](../../../../sources/naver__p2pcp/test/local_test.sh)<br>[test/peer_test.sh](../../../../sources/naver__p2pcp/test/peer_test.sh)<br>[test/README.md](../../../../sources/naver__p2pcp/test/README.md) |
| security | 0 | not obvious |
| ci | 2 | [.github/workflows/ci.yml](../../../../sources/naver__p2pcp/.github/workflows/ci.yml)<br>[.github/workflows/release.yml](../../../../sources/naver__p2pcp/.github/workflows/release.yml) |
| container | 6 | [Dockerfile](../../../../sources/naver__p2pcp/Dockerfile)<br>[test/k8s/p2pcp-namespace.yaml](../../../../sources/naver__p2pcp/test/k8s/p2pcp-namespace.yaml)<br>[test/k8s/p2pcp-peer-service.yaml](../../../../sources/naver__p2pcp/test/k8s/p2pcp-peer-service.yaml)<br>[test/k8s/p2pcp-peer.yaml](../../../../sources/naver__p2pcp/test/k8s/p2pcp-peer.yaml)<br>[test/k8s/p2pcp-seeder-service.yaml](../../../../sources/naver__p2pcp/test/k8s/p2pcp-seeder-service.yaml)<br>[test/k8s/p2pcp-seeder.yaml](../../../../sources/naver__p2pcp/test/k8s/p2pcp-seeder.yaml) |
| instruction | 0 | not obvious |
| docs | 6 | [README.ko.md](../../../../sources/naver__p2pcp/README.ko.md)<br>[README.md](../../../../sources/naver__p2pcp/README.md)<br>[test/README.md](../../../../sources/naver__p2pcp/test/README.md)<br>[docs/.nojekyll](../../../../sources/naver__p2pcp/docs/.nojekyll)<br>[docs/index.html](../../../../sources/naver__p2pcp/docs/index.html)<br>[docs/style.css](../../../../sources/naver__p2pcp/docs/style.css) |
| config | 2 | [Makefile](../../../../sources/naver__p2pcp/Makefile)<br>[src/go.mod](../../../../sources/naver__p2pcp/src/go.mod) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 41 | [test/command_test.sh](../../../../sources/naver__p2pcp/test/command_test.sh)<br>[test/common.sh](../../../../sources/naver__p2pcp/test/common.sh)<br>[test/create_checksum.sh](../../../../sources/naver__p2pcp/test/create_checksum.sh)<br>[test/create_random_data.sh](../../../../sources/naver__p2pcp/test/create_random_data.sh)<br>[test/k8s_test.sh](../../../../sources/naver__p2pcp/test/k8s_test.sh)<br>[test/local_test.sh](../../../../sources/naver__p2pcp/test/local_test.sh) |
| CI workflows | 2 | [.github/workflows/ci.yml](../../../../sources/naver__p2pcp/.github/workflows/ci.yml)<br>[.github/workflows/release.yml](../../../../sources/naver__p2pcp/.github/workflows/release.yml) |
| Containers / deploy | 6 | [Dockerfile](../../../../sources/naver__p2pcp/Dockerfile)<br>[test/k8s/p2pcp-namespace.yaml](../../../../sources/naver__p2pcp/test/k8s/p2pcp-namespace.yaml)<br>[test/k8s/p2pcp-peer-service.yaml](../../../../sources/naver__p2pcp/test/k8s/p2pcp-peer-service.yaml)<br>[test/k8s/p2pcp-peer.yaml](../../../../sources/naver__p2pcp/test/k8s/p2pcp-peer.yaml)<br>[test/k8s/p2pcp-seeder-service.yaml](../../../../sources/naver__p2pcp/test/k8s/p2pcp-seeder-service.yaml)<br>[test/k8s/p2pcp-seeder.yaml](../../../../sources/naver__p2pcp/test/k8s/p2pcp-seeder.yaml) |
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

1. Start from key references: `src/main.go`, `Makefile`, `src/go.mod`.
2. Trace execution through entrypoints: `src/main.go`.
3. Inspect retrieval/memory/indexing through: `src/types/chunk_test.go`, `src/types/chunk.go`, `src/transfer/chunk_manager_test.go`.
4. Verify behavior through test/eval files: `test/command_test.sh`, `test/common.sh`, `test/create_checksum.sh`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 An application that provides fast file system replication with peer to peer transfer.. 핵심 구조 신호는 Go, Dockerfile, Makefile, README.md, LICENSE, tests이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 needs deeper structural scan입니다.
