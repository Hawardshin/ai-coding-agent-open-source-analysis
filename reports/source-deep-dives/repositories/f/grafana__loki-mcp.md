# grafana/loki-mcp Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

An MCP ( Model Context Protocol ) Server for Grafana Loki

## 요약

- 조사 단위: `sources/grafana__loki-mcp` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 27 files, 15 directories, depth score 87, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=loki-mcp-client, run-mcp-server.sh이고, 의존성 단서는 mcp, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | grafana/loki-mcp |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Go |
| Stars | 152 |
| Forks | 32 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/grafana__loki-mcp](../../../../sources/grafana__loki-mcp) |
| Existing report | [reports/global-trending/repositories/grafana__loki-mcp.md](../../../global-trending/repositories/grafana__loki-mcp.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 27 / 15 |
| Max observed depth | 4 |
| Top directories | .github, cmd, examples, grafana, internal, pkg, promtail |
| Top extensions | .go: 5, .json: 4, .yml: 4, (none): 4, .sh: 3, .html: 2, .md: 2, .mod: 1, .sum: 1, .yaml: 1 |
| Source patterns | cli-first, api/server, agent/tool runtime, eval/test harness, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| .github | ci surface | 1 |
| cmd | source boundary | 1 |
| cmd/client | cmd workspace | 1 |
| cmd/server | cmd workspace | 1 |
| examples | top-level component | 1 |
| grafana | top-level component | 1 |
| internal | top-level component | 1 |
| pkg | top-level component | 1 |
| promtail | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | all | make all |
| build | Makefile | build | make build |
| utility | Makefile | clean | make clean |
| test | Makefile | test | make test |
| utility | Makefile | run | make run |
| utility | Makefile | run-client | make run-client |
| utility | Makefile | deps | make deps |
| utility | Makefile | tidy | make tidy |
| build | Makefile | build-linux | make build-linux |
| utility | Makefile | help | make help |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | mcp |
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
| mcp | [loki-mcp-client](../../../../sources/grafana__loki-mcp/loki-mcp-client) | mcp signal |
| mcp | [run-mcp-server.sh](../../../../sources/grafana__loki-mcp/run-mcp-server.sh) | mcp signal |
| entrypoints | [cmd/server/main.go](../../../../sources/grafana__loki-mcp/cmd/server/main.go) | entrypoints signal |
| entrypoints | [cmd/client/main.go](../../../../sources/grafana__loki-mcp/cmd/client/main.go) | entrypoints signal |
| config | [go.mod](../../../../sources/grafana__loki-mcp/go.mod) | config signal |
| config | [Makefile](../../../../sources/grafana__loki-mcp/Makefile) | config signal |
| ci | [.github/workflows/ci.yml](../../../../sources/grafana__loki-mcp/.github/workflows/ci.yml) | ci support |
| ci | [.github/workflows/README.md](../../../../sources/grafana__loki-mcp/.github/workflows/README.md) | ci support |
| container | [docker-compose.yml](../../../../sources/grafana__loki-mcp/docker-compose.yml) | container support |
| container | [Dockerfile](../../../../sources/grafana__loki-mcp/Dockerfile) | container support |
| eval | [test-loki-query.sh](../../../../sources/grafana__loki-mcp/test-loki-query.sh) | eval support |
| eval | [internal/handlers/loki_test.go](../../../../sources/grafana__loki-mcp/internal/handlers/loki_test.go) | eval support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 2 | [cmd/server/main.go](../../../../sources/grafana__loki-mcp/cmd/server/main.go)<br>[cmd/client/main.go](../../../../sources/grafana__loki-mcp/cmd/client/main.go) |
| agentRuntime | 0 | not obvious |
| mcp | 2 | [loki-mcp-client](../../../../sources/grafana__loki-mcp/loki-mcp-client)<br>[run-mcp-server.sh](../../../../sources/grafana__loki-mcp/run-mcp-server.sh) |
| retrieval | 0 | not obvious |
| spec | 0 | not obvious |
| eval | 3 | [test-loki-query.sh](../../../../sources/grafana__loki-mcp/test-loki-query.sh)<br>[internal/handlers/loki_test.go](../../../../sources/grafana__loki-mcp/internal/handlers/loki_test.go)<br>[.github/workflows/test.yml](../../../../sources/grafana__loki-mcp/.github/workflows/test.yml) |
| security | 0 | not obvious |
| ci | 3 | [.github/workflows/ci.yml](../../../../sources/grafana__loki-mcp/.github/workflows/ci.yml)<br>[.github/workflows/README.md](../../../../sources/grafana__loki-mcp/.github/workflows/README.md)<br>[.github/workflows/test.yml](../../../../sources/grafana__loki-mcp/.github/workflows/test.yml) |
| container | 2 | [docker-compose.yml](../../../../sources/grafana__loki-mcp/docker-compose.yml)<br>[Dockerfile](../../../../sources/grafana__loki-mcp/Dockerfile) |
| instruction | 0 | not obvious |
| docs | 2 | [README.md](../../../../sources/grafana__loki-mcp/README.md)<br>[.github/workflows/README.md](../../../../sources/grafana__loki-mcp/.github/workflows/README.md) |
| config | 2 | [go.mod](../../../../sources/grafana__loki-mcp/go.mod)<br>[Makefile](../../../../sources/grafana__loki-mcp/Makefile) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 3 | [test-loki-query.sh](../../../../sources/grafana__loki-mcp/test-loki-query.sh)<br>[internal/handlers/loki_test.go](../../../../sources/grafana__loki-mcp/internal/handlers/loki_test.go)<br>[.github/workflows/test.yml](../../../../sources/grafana__loki-mcp/.github/workflows/test.yml) |
| CI workflows | 3 | [.github/workflows/ci.yml](../../../../sources/grafana__loki-mcp/.github/workflows/ci.yml)<br>[.github/workflows/README.md](../../../../sources/grafana__loki-mcp/.github/workflows/README.md)<br>[.github/workflows/test.yml](../../../../sources/grafana__loki-mcp/.github/workflows/test.yml) |
| Containers / deploy | 2 | [docker-compose.yml](../../../../sources/grafana__loki-mcp/docker-compose.yml)<br>[Dockerfile](../../../../sources/grafana__loki-mcp/Dockerfile) |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | security/policy surface not obvious; agent instruction files not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `loki-mcp-client`, `run-mcp-server.sh`, `cmd/server/main.go`.
2. Trace execution through entrypoints: `cmd/server/main.go`, `cmd/client/main.go`.
3. Verify behavior through test/eval files: `test-loki-query.sh`, `internal/handlers/loki_test.go`, `.github/workflows/test.yml`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 An MCP Model Context Protocol Server for Grafana Loki. 핵심 구조 신호는 Go, go.mod, Dockerfile, docker-compose.yml, Makefile, README.md이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
