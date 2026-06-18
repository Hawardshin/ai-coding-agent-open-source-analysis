# scrypster/muninndb Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

The cognitive database. A new class of data storage. Not a vector store, not a graph DB, not a RAG wrapper. Ebbinghaus decay, Hebbian learning, and Bayesian confidence are engine-native primitives. Memories evolve on their own. MCP-native. Single binary.

## 요약

- 조사 단위: `sources/scrypster__muninndb` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 849 files, 126 directories, depth score 127, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 retrieval=web/embed.go, web/templates/index.html, sdk/node/src/index.ts이고, 의존성 단서는 prometheus, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 knowledge/RAG pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | scrypster/muninndb |
| Topic | LLM Wiki, RAG, and Knowledge / LLM 위키/RAG/지식베이스 |
| Region | global |
| Language | Go |
| Stars | 301 |
| Forks | 71 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/scrypster__muninndb](../../../../sources/scrypster__muninndb) |
| Existing report | [reports/global-trending/repositories/scrypster__muninndb.md](../../../global-trending/repositories/scrypster__muninndb.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 849 / 126 |
| Max observed depth | 9 |
| Top directories | .claude, .github, cmd, contrib, docs, internal, proto, scripts, sdk, testdata, web |
| Top extensions | .go: 690, .md: 49, .ts: 20, .py: 15, (none): 12, .js: 8, .php: 8, .yml: 7, .json: 6, .swift: 6, .kt: 5, .css: 4 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 41 |
| web | source boundary | 17 |
| cmd/muninn | cmd workspace | 4 |
| cmd/bench | cmd workspace | 2 |
| .github | ci surface | 1 |
| cmd | source boundary | 1 |
| cmd/diag | cmd workspace | 1 |
| cmd/eval-semantic | cmd workspace | 1 |
| contrib | top-level component | 1 |
| internal | top-level component | 1 |
| proto | top-level component | 1 |
| scripts | top-level component | 1 |
| sdk | top-level component | 1 |
| testdata | validation surface | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | fetch-assets | make fetch-assets |
| utility | Makefile | fetch-model | make fetch-model |
| utility | Makefile | fetch-ort-libs | make fetch-ort-libs |
| utility | Makefile | _ort-darwin-arm64 | make _ort-darwin-arm64 |
| utility | Makefile | _ort-darwin-amd64 | make _ort-darwin-amd64 |
| utility | Makefile | _ort-linux-amd64 | make _ort-linux-amd64 |
| utility | Makefile | _ort-linux-arm64 | make _ort-linux-arm64 |
| utility | Makefile | _ort-windows-amd64 | make _ort-windows-amd64 |
| utility | Makefile | clean-assets | make clean-assets |
| utility | Makefile | web | make web |
| utility | Makefile | css | make css |
| build | Makefile | build | make build |
| test | Makefile | test | make test |
| utility | Makefile | bench | make bench |
| test | Makefile | test-integration | make test-integration |
| utility | Makefile | eval-bible-setup | make eval-bible-setup |
| utility | Makefile | eval-bible | make eval-bible |
| utility | Makefile | eval-bible-quick | make eval-bible-quick |
| utility | Makefile | eval-bible-export | make eval-bible-export |


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
| retrieval | [web/embed.go](../../../../sources/scrypster__muninndb/web/embed.go) | retrieval signal |
| retrieval | [web/templates/index.html](../../../../sources/scrypster__muninndb/web/templates/index.html) | retrieval signal |
| retrieval | [sdk/node/src/index.ts](../../../../sources/scrypster__muninndb/sdk/node/src/index.ts) | retrieval signal |
| retrieval | [internal/working/memory_test.go](../../../../sources/scrypster__muninndb/internal/working/memory_test.go) | retrieval signal |
| entrypoints | [sdk/go/muninn/examples/quickstart/main.go](../../../../sources/scrypster__muninndb/sdk/go/muninn/examples/quickstart/main.go) | entrypoints signal |
| entrypoints | [sdk/go/muninn/examples/lifecycle/main.go](../../../../sources/scrypster__muninndb/sdk/go/muninn/examples/lifecycle/main.go) | entrypoints signal |
| entrypoints | [sdk/go/muninn/examples/cognitive_loop/main.go](../../../../sources/scrypster__muninndb/sdk/go/muninn/examples/cognitive_loop/main.go) | entrypoints signal |
| docs | [README.md](../../../../sources/scrypster__muninndb/README.md) | docs signal |
| docs | [sdk/python/README.md](../../../../sources/scrypster__muninndb/sdk/python/README.md) | docs signal |
| docs | [sdk/php/README.md](../../../../sources/scrypster__muninndb/sdk/php/README.md) | docs signal |
| docs | [sdk/node/README.md](../../../../sources/scrypster__muninndb/sdk/node/README.md) | docs signal |
| eval | [muninn_test.go](../../../../sources/scrypster__muninndb/muninn_test.go) | eval signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 15 | [sdk/node/src/index.ts](../../../../sources/scrypster__muninndb/sdk/node/src/index.ts)<br>[sdk/go/muninn/examples/quickstart/main.go](../../../../sources/scrypster__muninndb/sdk/go/muninn/examples/quickstart/main.go)<br>[sdk/go/muninn/examples/lifecycle/main.go](../../../../sources/scrypster__muninndb/sdk/go/muninn/examples/lifecycle/main.go)<br>[sdk/go/muninn/examples/cognitive_loop/main.go](../../../../sources/scrypster__muninndb/sdk/go/muninn/examples/cognitive_loop/main.go)<br>[internal/ui/server.go](../../../../sources/scrypster__muninndb/internal/ui/server.go)<br>[internal/transport/rest/server.go](../../../../sources/scrypster__muninndb/internal/transport/rest/server.go)<br>[internal/transport/mbp/server.go](../../../../sources/scrypster__muninndb/internal/transport/mbp/server.go)<br>[internal/transport/grpc/server.go](../../../../sources/scrypster__muninndb/internal/transport/grpc/server.go) |
| agentRuntime | 9 | [internal/working/memory_test.go](../../../../sources/scrypster__muninndb/internal/working/memory_test.go)<br>[internal/working/memory.go](../../../../sources/scrypster__muninndb/internal/working/memory.go)<br>[internal/replication/memory_backend.go](../../../../sources/scrypster__muninndb/internal/replication/memory_backend.go)<br>[internal/query/mql/executor.go](../../../../sources/scrypster__muninndb/internal/query/mql/executor.go)<br>[internal/mcp/context.go](../../../../sources/scrypster__muninndb/internal/mcp/context.go)<br>[internal/mcp/tools_test.go](../../../../sources/scrypster__muninndb/internal/mcp/tools_test.go)<br>[internal/mcp/tools.go](../../../../sources/scrypster__muninndb/internal/mcp/tools.go)<br>[docs/agent-prompting.md](../../../../sources/scrypster__muninndb/docs/agent-prompting.md) |
| mcp | 39 | [internal/mcp/auth_mk_test.go](../../../../sources/scrypster__muninndb/internal/mcp/auth_mk_test.go)<br>[internal/mcp/context.go](../../../../sources/scrypster__muninndb/internal/mcp/context.go)<br>[internal/mcp/convert_test.go](../../../../sources/scrypster__muninndb/internal/mcp/convert_test.go)<br>[internal/mcp/convert.go](../../../../sources/scrypster__muninndb/internal/mcp/convert.go)<br>[internal/mcp/decide_test.go](../../../../sources/scrypster__muninndb/internal/mcp/decide_test.go)<br>[internal/mcp/engine_adapter_test.go](../../../../sources/scrypster__muninndb/internal/mcp/engine_adapter_test.go)<br>[internal/mcp/engine_adapter.go](../../../../sources/scrypster__muninndb/internal/mcp/engine_adapter.go)<br>[internal/mcp/engine.go](../../../../sources/scrypster__muninndb/internal/mcp/engine.go) |
| retrieval | 75 | [web/embed.go](../../../../sources/scrypster__muninndb/web/embed.go)<br>[web/templates/index.html](../../../../sources/scrypster__muninndb/web/templates/index.html)<br>[sdk/node/src/index.ts](../../../../sources/scrypster__muninndb/sdk/node/src/index.ts)<br>[internal/working/memory_test.go](../../../../sources/scrypster__muninndb/internal/working/memory_test.go)<br>[internal/working/memory.go](../../../../sources/scrypster__muninndb/internal/working/memory.go)<br>[internal/storage/assoc_weight_index_test.go](../../../../sources/scrypster__muninndb/internal/storage/assoc_weight_index_test.go)<br>[internal/storage/embed_dim.go](../../../../sources/scrypster__muninndb/internal/storage/embed_dim.go)<br>[internal/storage/embed_migration_test.go](../../../../sources/scrypster__muninndb/internal/storage/embed_migration_test.go) |
| spec | 13 | [web/e2e/cluster_settings.spec.ts](../../../../sources/scrypster__muninndb/web/e2e/cluster_settings.spec.ts)<br>[web/e2e/dashboard.spec.ts](../../../../sources/scrypster__muninndb/web/e2e/dashboard.spec.ts)<br>[web/e2e/memories.spec.ts](../../../../sources/scrypster__muninndb/web/e2e/memories.spec.ts)<br>[web/e2e/settings.spec.ts](../../../../sources/scrypster__muninndb/web/e2e/settings.spec.ts)<br>[web/e2e/smoke.spec.ts](../../../../sources/scrypster__muninndb/web/e2e/smoke.spec.ts)<br>[sdk/python/requirements.txt](../../../../sources/scrypster__muninndb/sdk/python/requirements.txt)<br>[internal/replication/DESIGN.md](../../../../sources/scrypster__muninndb/internal/replication/DESIGN.md)<br>[docs/architecture.md](../../../../sources/scrypster__muninndb/docs/architecture.md) |
| eval | 396 | [muninn_test.go](../../../../sources/scrypster__muninndb/muninn_test.go)<br>[web/plugin-config-utils.test.js](../../../../sources/scrypster__muninndb/web/plugin-config-utils.test.js)<br>[web/time-utils.test.js](../../../../sources/scrypster__muninndb/web/time-utils.test.js)<br>[web/e2e/cluster_settings.spec.ts](../../../../sources/scrypster__muninndb/web/e2e/cluster_settings.spec.ts)<br>[web/e2e/dashboard.spec.ts](../../../../sources/scrypster__muninndb/web/e2e/dashboard.spec.ts)<br>[web/e2e/memories.spec.ts](../../../../sources/scrypster__muninndb/web/e2e/memories.spec.ts)<br>[web/e2e/settings.spec.ts](../../../../sources/scrypster__muninndb/web/e2e/settings.spec.ts)<br>[web/e2e/smoke.spec.ts](../../../../sources/scrypster__muninndb/web/e2e/smoke.spec.ts) |
| security | 44 | [web/e2e/fixtures/auth.ts](../../../../sources/scrypster__muninndb/web/e2e/fixtures/auth.ts)<br>[internal/transport/rest/audit_emit_test.go](../../../../sources/scrypster__muninndb/internal/transport/rest/audit_emit_test.go)<br>[internal/transport/rest/auth_handler_boost_test.go](../../../../sources/scrypster__muninndb/internal/transport/rest/auth_handler_boost_test.go)<br>[internal/storage/pebble_guard.go](../../../../sources/scrypster__muninndb/internal/storage/pebble_guard.go)<br>[internal/mcp/auth_mk_test.go](../../../../sources/scrypster__muninndb/internal/mcp/auth_mk_test.go)<br>[internal/engine/merge_guard_test.go](../../../../sources/scrypster__muninndb/internal/engine/merge_guard_test.go)<br>[internal/engine/merge_guard.go](../../../../sources/scrypster__muninndb/internal/engine/merge_guard.go)<br>[internal/consolidation/dream_guard_test.go](../../../../sources/scrypster__muninndb/internal/consolidation/dream_guard_test.go) |
| ci | 4 | [.github/workflows/ci.yml](../../../../sources/scrypster__muninndb/.github/workflows/ci.yml)<br>[.github/workflows/docker-publish.yml](../../../../sources/scrypster__muninndb/.github/workflows/docker-publish.yml)<br>[.github/workflows/publish-sdk.yml](../../../../sources/scrypster__muninndb/.github/workflows/publish-sdk.yml)<br>[.github/workflows/release.yml](../../../../sources/scrypster__muninndb/.github/workflows/release.yml) |
| container | 3 | [docker-compose.yml](../../../../sources/scrypster__muninndb/docker-compose.yml)<br>[Dockerfile](../../../../sources/scrypster__muninndb/Dockerfile)<br>[contrib/cluster/docker-compose.yml](../../../../sources/scrypster__muninndb/contrib/cluster/docker-compose.yml) |
| instruction | 0 | not obvious |
| docs | 40 | [README.md](../../../../sources/scrypster__muninndb/README.md)<br>[sdk/python/README.md](../../../../sources/scrypster__muninndb/sdk/python/README.md)<br>[sdk/php/README.md](../../../../sources/scrypster__muninndb/sdk/php/README.md)<br>[sdk/node/README.md](../../../../sources/scrypster__muninndb/sdk/node/README.md)<br>[sdk/muninndb/README.md](../../../../sources/scrypster__muninndb/sdk/muninndb/README.md)<br>[internal/replication/README.md](../../../../sources/scrypster__muninndb/internal/replication/README.md)<br>[docs/agent-prompting.md](../../../../sources/scrypster__muninndb/docs/agent-prompting.md)<br>[docs/architecture.md](../../../../sources/scrypster__muninndb/docs/architecture.md) |
| config | 9 | [go.mod](../../../../sources/scrypster__muninndb/go.mod)<br>[Makefile](../../../../sources/scrypster__muninndb/Makefile)<br>[web/package.json](../../../../sources/scrypster__muninndb/web/package.json)<br>[sdk/python/pyproject.toml](../../../../sources/scrypster__muninndb/sdk/python/pyproject.toml)<br>[sdk/python/requirements.txt](../../../../sources/scrypster__muninndb/sdk/python/requirements.txt)<br>[sdk/node/package.json](../../../../sources/scrypster__muninndb/sdk/node/package.json)<br>[sdk/node/tsconfig.json](../../../../sources/scrypster__muninndb/sdk/node/tsconfig.json)<br>[sdk/muninndb/pyproject.toml](../../../../sources/scrypster__muninndb/sdk/muninndb/pyproject.toml) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 396 | [muninn_test.go](../../../../sources/scrypster__muninndb/muninn_test.go)<br>[web/plugin-config-utils.test.js](../../../../sources/scrypster__muninndb/web/plugin-config-utils.test.js)<br>[web/time-utils.test.js](../../../../sources/scrypster__muninndb/web/time-utils.test.js)<br>[web/e2e/cluster_settings.spec.ts](../../../../sources/scrypster__muninndb/web/e2e/cluster_settings.spec.ts)<br>[web/e2e/dashboard.spec.ts](../../../../sources/scrypster__muninndb/web/e2e/dashboard.spec.ts)<br>[web/e2e/memories.spec.ts](../../../../sources/scrypster__muninndb/web/e2e/memories.spec.ts) |
| CI workflows | 4 | [.github/workflows/ci.yml](../../../../sources/scrypster__muninndb/.github/workflows/ci.yml)<br>[.github/workflows/docker-publish.yml](../../../../sources/scrypster__muninndb/.github/workflows/docker-publish.yml)<br>[.github/workflows/publish-sdk.yml](../../../../sources/scrypster__muninndb/.github/workflows/publish-sdk.yml)<br>[.github/workflows/release.yml](../../../../sources/scrypster__muninndb/.github/workflows/release.yml) |
| Containers / deploy | 3 | [docker-compose.yml](../../../../sources/scrypster__muninndb/docker-compose.yml)<br>[Dockerfile](../../../../sources/scrypster__muninndb/Dockerfile)<br>[contrib/cluster/docker-compose.yml](../../../../sources/scrypster__muninndb/contrib/cluster/docker-compose.yml) |
| Security / policy | 44 | [web/e2e/fixtures/auth.ts](../../../../sources/scrypster__muninndb/web/e2e/fixtures/auth.ts)<br>[internal/transport/rest/audit_emit_test.go](../../../../sources/scrypster__muninndb/internal/transport/rest/audit_emit_test.go)<br>[internal/transport/rest/auth_handler_boost_test.go](../../../../sources/scrypster__muninndb/internal/transport/rest/auth_handler_boost_test.go)<br>[internal/storage/pebble_guard.go](../../../../sources/scrypster__muninndb/internal/storage/pebble_guard.go)<br>[internal/mcp/auth_mk_test.go](../../../../sources/scrypster__muninndb/internal/mcp/auth_mk_test.go)<br>[internal/engine/merge_guard_test.go](../../../../sources/scrypster__muninndb/internal/engine/merge_guard_test.go) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `web/embed.go`, `web/templates/index.html`, `sdk/node/src/index.ts`.
2. Trace execution through entrypoints: `sdk/node/src/index.ts`, `sdk/go/muninn/examples/quickstart/main.go`, `sdk/go/muninn/examples/lifecycle/main.go`.
3. Map agent/tool runtime through: `internal/working/memory_test.go`, `internal/working/memory.go`, `internal/replication/memory_backend.go`.
4. Inspect retrieval/memory/indexing through: `web/embed.go`, `web/templates/index.html`, `sdk/node/src/index.ts`.
5. Verify behavior through test/eval files: `muninn_test.go`, `web/plugin-config-utils.test.js`, `web/time-utils.test.js`.

## Existing Repository Insight

LLM 위키/RAG/지식베이스 관점에서 The cognitive database. A new class of data storage. Not a vector store, not a graph DB, not a RAG wrapper. Ebbinghaus d. 핵심 구조 신호는 Go, go.mod, Dockerfile, docker-compose.yml, Makefile, README.md이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 knowledge/RAG pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
