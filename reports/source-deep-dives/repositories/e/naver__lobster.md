# naver/lobster Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

🦞 Distributed kubernetes container logging system

## 요약

- 조사 단위: `sources/naver__lobster` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 252 files, 95 directories, depth score 118, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

AI 인프라/서빙 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 entrypoints=pkg/operator/server/server.go, pkg/loggen/server.go, pkg/lobster/server/server.go이고, 의존성 단서는 prometheus, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | naver/lobster |
| Topic | AI Infrastructure and Serving / AI 인프라/서빙 |
| Region | korea |
| Language | Go |
| Stars | 70 |
| Forks | 3 |
| License | Apache-2.0 |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/naver__lobster](../../../../sources/naver__lobster) |
| Existing report | [reports/korea-trending/repositories/naver__lobster.md](../../../korea-trending/repositories/naver__lobster.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 252 / 95 |
| Max observed depth | 7 |
| Top directories | .github, cmd, deploy, docs, pkg, web |
| Top extensions | .go: 171, .yaml: 24, .md: 22, .png: 11, .json: 6, (none): 6, .css: 2, .js: 2, .txt: 2, .gif: 1, .html: 1, .mod: 1 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 39 |
| web | source boundary | 4 |
| .github | ci surface | 1 |
| cmd | source boundary | 1 |
| cmd/lobster-exporter | cmd workspace | 1 |
| cmd/lobster-global | cmd workspace | 1 |
| cmd/lobster-operator | cmd workspace | 1 |
| cmd/lobster-query | cmd workspace | 1 |
| cmd/lobster-store | cmd workspace | 1 |
| cmd/lobster-syncer | cmd workspace | 1 |
| cmd/loggen | cmd workspace | 1 |
| deploy | deployment surface | 1 |
| pkg | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| quality | Makefile | fmt | make fmt |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | vet | make vet |
| utility | Makefile | .PHONY | make .PHONY |
| quality | Makefile | lint | make lint |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | manifests | make manifests |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | generate | make generate |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | postProcessManifests | make postProcessManifests |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | protoc-gen-go | make protoc-gen-go |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | protoc-gen-go-grpc | make protoc-gen-go-grpc |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | controller-gen | make controller-gen |
| utility | Makefile | .PHONY | make .PHONY |
| quality | Makefile | golangci-linter | make golangci-linter |


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
| entrypoints | [pkg/operator/server/server.go](../../../../sources/naver__lobster/pkg/operator/server/server.go) | entrypoints signal |
| entrypoints | [pkg/loggen/server.go](../../../../sources/naver__lobster/pkg/loggen/server.go) | entrypoints signal |
| entrypoints | [pkg/lobster/server/server.go](../../../../sources/naver__lobster/pkg/lobster/server/server.go) | entrypoints signal |
| entrypoints | [pkg/lobster/proto/server.go](../../../../sources/naver__lobster/pkg/lobster/proto/server.go) | entrypoints signal |
| container | [deploy/Chart.yaml](../../../../sources/naver__lobster/deploy/Chart.yaml) | container signal |
| container | [deploy/README.md](../../../../sources/naver__lobster/deploy/README.md) | container signal |
| container | [deploy/values/public/lobster-cluster_basic.yaml](../../../../sources/naver__lobster/deploy/values/public/lobster-cluster_basic.yaml) | container signal |
| container | [deploy/values/public/lobster-cluster_logsink-extension.yaml](../../../../sources/naver__lobster/deploy/values/public/lobster-cluster_logsink-extension.yaml) | container signal |
| config | [go.mod](../../../../sources/naver__lobster/go.mod) | config signal |
| config | [Makefile](../../../../sources/naver__lobster/Makefile) | config signal |
| ci | [.github/workflows/go-lobster.yaml](../../../../sources/naver__lobster/.github/workflows/go-lobster.yaml) | ci signal |
| eval | [pkg/operator/server/api/v1/types_test.go](../../../../sources/naver__lobster/pkg/operator/server/api/v1/types_test.go) | eval support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 11 | [pkg/operator/server/server.go](../../../../sources/naver__lobster/pkg/operator/server/server.go)<br>[pkg/loggen/server.go](../../../../sources/naver__lobster/pkg/loggen/server.go)<br>[pkg/lobster/server/server.go](../../../../sources/naver__lobster/pkg/lobster/server/server.go)<br>[pkg/lobster/proto/server.go](../../../../sources/naver__lobster/pkg/lobster/proto/server.go)<br>[cmd/loggen/main.go](../../../../sources/naver__lobster/cmd/loggen/main.go)<br>[cmd/lobster-syncer/main.go](../../../../sources/naver__lobster/cmd/lobster-syncer/main.go)<br>[cmd/lobster-store/main.go](../../../../sources/naver__lobster/cmd/lobster-store/main.go)<br>[cmd/lobster-query/main.go](../../../../sources/naver__lobster/cmd/lobster-query/main.go) |
| agentRuntime | 1 | [pkg/lobster/tailer/tail/ratelimiter/memory.go](../../../../sources/naver__lobster/pkg/lobster/tailer/tail/ratelimiter/memory.go) |
| mcp | 0 | not obvious |
| retrieval | 7 | [pkg/lobster/tailer/tail/ratelimiter/memory.go](../../../../sources/naver__lobster/pkg/lobster/tailer/tail/ratelimiter/memory.go)<br>[pkg/lobster/proto/chunk_grpc.pb.go](../../../../sources/naver__lobster/pkg/lobster/proto/chunk_grpc.pb.go)<br>[pkg/lobster/proto/chunk.pb.go](../../../../sources/naver__lobster/pkg/lobster/proto/chunk.pb.go)<br>[pkg/lobster/proto/chunk.proto](../../../../sources/naver__lobster/pkg/lobster/proto/chunk.proto)<br>[pkg/lobster/model/chunk.go](../../../../sources/naver__lobster/pkg/lobster/model/chunk.go)<br>[docs/images/chunk_block.png](../../../../sources/naver__lobster/docs/images/chunk_block.png)<br>[docs/design/chunk_block.md](../../../../sources/naver__lobster/docs/design/chunk_block.md) |
| spec | 9 | [docs/design/chunk_block.md](../../../../sources/naver__lobster/docs/design/chunk_block.md)<br>[docs/design/container_logs.md](../../../../sources/naver__lobster/docs/design/container_logs.md)<br>[docs/design/lobster_query.md](../../../../sources/naver__lobster/docs/design/lobster_query.md)<br>[docs/design/lobster_store.md](../../../../sources/naver__lobster/docs/design/lobster_store.md)<br>[docs/design/log_sink.md](../../../../sources/naver__lobster/docs/design/log_sink.md)<br>[docs/design/loggen.md](../../../../sources/naver__lobster/docs/design/loggen.md)<br>[docs/design/metrics.md](../../../../sources/naver__lobster/docs/design/metrics.md)<br>[docs/design/notes.md](../../../../sources/naver__lobster/docs/design/notes.md) |
| eval | 13 | [pkg/operator/server/api/v1/types_test.go](../../../../sources/naver__lobster/pkg/operator/server/api/v1/types_test.go)<br>[pkg/operator/api/v1/template/template_test.go](../../../../sources/naver__lobster/pkg/operator/api/v1/template/template_test.go)<br>[pkg/loggen/inspector_test.go](../../../../sources/naver__lobster/pkg/loggen/inspector_test.go)<br>[pkg/lobster/util/timestamp_test.go](../../../../sources/naver__lobster/pkg/lobster/util/timestamp_test.go)<br>[pkg/lobster/tailer/tail/watch/inotify_tracker_race_test.go](../../../../sources/naver__lobster/pkg/lobster/tailer/tail/watch/inotify_tracker_race_test.go)<br>[pkg/lobster/store/limiter_test.go](../../../../sources/naver__lobster/pkg/lobster/store/limiter_test.go)<br>[pkg/lobster/store/writer_test.go](../../../../sources/naver__lobster/pkg/lobster/store/writer_test.go)<br>[pkg/lobster/sink/exporter/uploader/kafka_test.go](../../../../sources/naver__lobster/pkg/lobster/sink/exporter/uploader/kafka_test.go) |
| security | 7 | [pkg/lobster/sink/exporter/uploader/auth/authenz.go](../../../../sources/naver__lobster/pkg/lobster/sink/exporter/uploader/auth/authenz.go)<br>[pkg/lobster/sink/exporter/uploader/auth/manager.go](../../../../sources/naver__lobster/pkg/lobster/sink/exporter/uploader/auth/manager.go)<br>[pkg/lobster/sink/exporter/uploader/auth/round_tripper.go](../../../../sources/naver__lobster/pkg/lobster/sink/exporter/uploader/auth/round_tripper.go)<br>[pkg/lobster/sink/exporter/uploader/auth/token_provider.go](../../../../sources/naver__lobster/pkg/lobster/sink/exporter/uploader/auth/token_provider.go)<br>[pkg/lobster/sink/exporter/uploader/auth/unencoded_credential.go](../../../../sources/naver__lobster/pkg/lobster/sink/exporter/uploader/auth/unencoded_credential.go)<br>[deploy/templates/store/rbac.yaml](../../../../sources/naver__lobster/deploy/templates/store/rbac.yaml)<br>[deploy/templates/operator/rbac.yaml](../../../../sources/naver__lobster/deploy/templates/operator/rbac.yaml) |
| ci | 1 | [.github/workflows/go-lobster.yaml](../../../../sources/naver__lobster/.github/workflows/go-lobster.yaml) |
| container | 21 | [deploy/Chart.yaml](../../../../sources/naver__lobster/deploy/Chart.yaml)<br>[deploy/README.md](../../../../sources/naver__lobster/deploy/README.md)<br>[deploy/values/public/lobster-cluster_basic.yaml](../../../../sources/naver__lobster/deploy/values/public/lobster-cluster_basic.yaml)<br>[deploy/values/public/lobster-cluster_logsink-extension.yaml](../../../../sources/naver__lobster/deploy/values/public/lobster-cluster_logsink-extension.yaml)<br>[deploy/values/public/lobster-global-query.yaml](../../../../sources/naver__lobster/deploy/values/public/lobster-global-query.yaml)<br>[deploy/values/public/lobster-operator.yaml](../../../../sources/naver__lobster/deploy/values/public/lobster-operator.yaml)<br>[deploy/templates/priorityClass.yaml](../../../../sources/naver__lobster/deploy/templates/priorityClass.yaml)<br>[deploy/templates/syncer/deployment.yaml](../../../../sources/naver__lobster/deploy/templates/syncer/deployment.yaml) |
| instruction | 0 | not obvious |
| docs | 43 | [README.md](../../../../sources/naver__lobster/README.md)<br>[web/static/docs/query/swagger.json](../../../../sources/naver__lobster/web/static/docs/query/swagger.json)<br>[web/static/docs/operator/swagger.json](../../../../sources/naver__lobster/web/static/docs/operator/swagger.json)<br>[web/static/docs/global-query/swagger.json](../../../../sources/naver__lobster/web/static/docs/global-query/swagger.json)<br>[pkg/docs/query/docs.go](../../../../sources/naver__lobster/pkg/docs/query/docs.go)<br>[pkg/docs/query/swagger.json](../../../../sources/naver__lobster/pkg/docs/query/swagger.json)<br>[pkg/docs/query/swagger.yaml](../../../../sources/naver__lobster/pkg/docs/query/swagger.yaml)<br>[pkg/docs/operator/docs.go](../../../../sources/naver__lobster/pkg/docs/operator/docs.go) |
| config | 2 | [go.mod](../../../../sources/naver__lobster/go.mod)<br>[Makefile](../../../../sources/naver__lobster/Makefile) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 13 | [pkg/operator/server/api/v1/types_test.go](../../../../sources/naver__lobster/pkg/operator/server/api/v1/types_test.go)<br>[pkg/operator/api/v1/template/template_test.go](../../../../sources/naver__lobster/pkg/operator/api/v1/template/template_test.go)<br>[pkg/loggen/inspector_test.go](../../../../sources/naver__lobster/pkg/loggen/inspector_test.go)<br>[pkg/lobster/util/timestamp_test.go](../../../../sources/naver__lobster/pkg/lobster/util/timestamp_test.go)<br>[pkg/lobster/tailer/tail/watch/inotify_tracker_race_test.go](../../../../sources/naver__lobster/pkg/lobster/tailer/tail/watch/inotify_tracker_race_test.go)<br>[pkg/lobster/store/limiter_test.go](../../../../sources/naver__lobster/pkg/lobster/store/limiter_test.go) |
| CI workflows | 1 | [.github/workflows/go-lobster.yaml](../../../../sources/naver__lobster/.github/workflows/go-lobster.yaml) |
| Containers / deploy | 21 | [deploy/Chart.yaml](../../../../sources/naver__lobster/deploy/Chart.yaml)<br>[deploy/README.md](../../../../sources/naver__lobster/deploy/README.md)<br>[deploy/values/public/lobster-cluster_basic.yaml](../../../../sources/naver__lobster/deploy/values/public/lobster-cluster_basic.yaml)<br>[deploy/values/public/lobster-cluster_logsink-extension.yaml](../../../../sources/naver__lobster/deploy/values/public/lobster-cluster_logsink-extension.yaml)<br>[deploy/values/public/lobster-global-query.yaml](../../../../sources/naver__lobster/deploy/values/public/lobster-global-query.yaml)<br>[deploy/values/public/lobster-operator.yaml](../../../../sources/naver__lobster/deploy/values/public/lobster-operator.yaml) |
| Security / policy | 7 | [pkg/lobster/sink/exporter/uploader/auth/authenz.go](../../../../sources/naver__lobster/pkg/lobster/sink/exporter/uploader/auth/authenz.go)<br>[pkg/lobster/sink/exporter/uploader/auth/manager.go](../../../../sources/naver__lobster/pkg/lobster/sink/exporter/uploader/auth/manager.go)<br>[pkg/lobster/sink/exporter/uploader/auth/round_tripper.go](../../../../sources/naver__lobster/pkg/lobster/sink/exporter/uploader/auth/round_tripper.go)<br>[pkg/lobster/sink/exporter/uploader/auth/token_provider.go](../../../../sources/naver__lobster/pkg/lobster/sink/exporter/uploader/auth/token_provider.go)<br>[pkg/lobster/sink/exporter/uploader/auth/unencoded_credential.go](../../../../sources/naver__lobster/pkg/lobster/sink/exporter/uploader/auth/unencoded_credential.go)<br>[deploy/templates/store/rbac.yaml](../../../../sources/naver__lobster/deploy/templates/store/rbac.yaml) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `pkg/operator/server/server.go`, `pkg/loggen/server.go`, `pkg/lobster/server/server.go`.
2. Trace execution through entrypoints: `pkg/operator/server/server.go`, `pkg/loggen/server.go`, `pkg/lobster/server/server.go`.
3. Map agent/tool runtime through: `pkg/lobster/tailer/tail/ratelimiter/memory.go`.
4. Inspect retrieval/memory/indexing through: `pkg/lobster/tailer/tail/ratelimiter/memory.go`, `pkg/lobster/proto/chunk_grpc.pb.go`, `pkg/lobster/proto/chunk.pb.go`.
5. Verify behavior through test/eval files: `pkg/operator/server/api/v1/types_test.go`, `pkg/operator/api/v1/template/template_test.go`, `pkg/loggen/inspector_test.go`.

## Existing Repository Insight

AI 인프라/서빙 관점에서 🦞 Distributed kubernetes container logging system. 핵심 구조 신호는 Go, go.mod, Makefile, README.md, LICENSE, ci이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 AI 인프라/서빙 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, needs deeper structural scan입니다.
