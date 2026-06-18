# sanonone/kektordb Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

AI memory system combining vector search with temporal knowledge graph. Built-in cognitive engine for agents. Supports memory decay, contradiction detection, and MCP integration.

## 요약

- 조사 단위: `sources/sanonone__kektordb` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 296 files, 58 directories, depth score 123, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=internal/setup/json_mcp.go, internal/mcp/README.md, internal/mcp/server.go이고, 의존성 단서는 modelcontextprotocol, prometheus, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | sanonone/kektordb |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | Go |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/sanonone__kektordb](../../../../sources/sanonone__kektordb) |
| Existing report | [reports/korea-trending/repositories/sanonone__kektordb.md](../../../korea-trending/repositories/sanonone__kektordb.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 296 / 58 |
| Max observed depth | 6 |
| Top directories | .github, clients, cmd, docs, examples, internal, native, pkg, testdata |
| Top extensions | .go: 175, .py: 33, .md: 32, .ts: 9, .yml: 6, (none): 6, .js: 5, .png: 5, .yaml: 5, .json: 4, .rs: 3, .gif: 2 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 12 |
| cmd/kektordb | cmd workspace | 2 |
| examples/full_library_test | examples workspace | 2 |
| .github | ci surface | 1 |
| clients | source boundary | 1 |
| cmd | source boundary | 1 |
| cmd/test_autolink | cmd workspace | 1 |
| examples | top-level component | 1 |
| examples/python | examples workspace | 1 |
| internal | top-level component | 1 |
| native | top-level component | 1 |
| pkg | top-level component | 1 |
| testdata | validation surface | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | all | make all |
| utility | Makefile | run | make run |
| utility | Makefile | run-rust | make run-rust |
| test | Makefile | test | make test |
| test | Makefile | test-e2e | make test-e2e |
| test | Makefile | test-rust | make test-rust |
| utility | Makefile | bench | make bench |
| utility | Makefile | bench-rust | make bench-rust |
| utility | Makefile | ensure-protoc | make ensure-protoc |
| build | Makefile | build-rust-native | make build-rust-native |
| build | Makefile | build-rust-target | make build-rust-target |
| utility | Makefile | generate-avo | make generate-avo |
| build | Makefile | release | make release |
| utility | Makefile | .PHONY | make .PHONY |
| test | Makefile | release-test-linux | make release-test-linux |
| build | Makefile | release-build | make release-build |
| build | Makefile | release-build-pure | make release-build-pure |
| quality | Makefile | fmt | make fmt |
| utility | Makefile | clean | make clean |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | modelcontextprotocol |
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
| mcp | [internal/setup/json_mcp.go](../../../../sources/sanonone__kektordb/internal/setup/json_mcp.go) | mcp signal |
| mcp | [internal/mcp/README.md](../../../../sources/sanonone__kektordb/internal/mcp/README.md) | mcp signal |
| mcp | [internal/mcp/server.go](../../../../sources/sanonone__kektordb/internal/mcp/server.go) | mcp signal |
| mcp | [internal/mcp/service.go](../../../../sources/sanonone__kektordb/internal/mcp/service.go) | mcp signal |
| agentRuntime | [pkg/engine/memory_layer_test.go](../../../../sources/sanonone__kektordb/pkg/engine/memory_layer_test.go) | agentRuntime signal |
| agentRuntime | [pkg/engine/memory_reinforce_test.go](../../../../sources/sanonone__kektordb/pkg/engine/memory_reinforce_test.go) | agentRuntime signal |
| agentRuntime | [pkg/engine/memory_test.go](../../../../sources/sanonone__kektordb/pkg/engine/memory_test.go) | agentRuntime signal |
| entrypoints | [pkg/core/distance/gen/main.go](../../../../sources/sanonone__kektordb/pkg/core/distance/gen/main.go) | entrypoints signal |
| entrypoints | [internal/server/server.go](../../../../sources/sanonone__kektordb/internal/server/server.go) | entrypoints signal |
| entrypoints | [examples/full_library_test/main.go](../../../../sources/sanonone__kektordb/examples/full_library_test/main.go) | entrypoints signal |
| config | [go.mod](../../../../sources/sanonone__kektordb/go.mod) | config signal |
| config | [Makefile](../../../../sources/sanonone__kektordb/Makefile) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 7 | [pkg/core/distance/gen/main.go](../../../../sources/sanonone__kektordb/pkg/core/distance/gen/main.go)<br>[internal/server/server.go](../../../../sources/sanonone__kektordb/internal/server/server.go)<br>[internal/mcp/server.go](../../../../sources/sanonone__kektordb/internal/mcp/server.go)<br>[examples/full_library_test/main.go](../../../../sources/sanonone__kektordb/examples/full_library_test/main.go)<br>[cmd/test_autolink/main.go](../../../../sources/sanonone__kektordb/cmd/test_autolink/main.go)<br>[cmd/kektordb/main.go](../../../../sources/sanonone__kektordb/cmd/kektordb/main.go)<br>[clients/typescript/src/index.ts](../../../../sources/sanonone__kektordb/clients/typescript/src/index.ts) |
| agentRuntime | 3 | [pkg/engine/memory_layer_test.go](../../../../sources/sanonone__kektordb/pkg/engine/memory_layer_test.go)<br>[pkg/engine/memory_reinforce_test.go](../../../../sources/sanonone__kektordb/pkg/engine/memory_reinforce_test.go)<br>[pkg/engine/memory_test.go](../../../../sources/sanonone__kektordb/pkg/engine/memory_test.go) |
| mcp | 8 | [internal/setup/json_mcp.go](../../../../sources/sanonone__kektordb/internal/setup/json_mcp.go)<br>[internal/mcp/README.md](../../../../sources/sanonone__kektordb/internal/mcp/README.md)<br>[internal/mcp/server.go](../../../../sources/sanonone__kektordb/internal/mcp/server.go)<br>[internal/mcp/service.go](../../../../sources/sanonone__kektordb/internal/mcp/service.go)<br>[internal/mcp/session_test.go](../../../../sources/sanonone__kektordb/internal/mcp/session_test.go)<br>[internal/mcp/toolnames.go](../../../../sources/sanonone__kektordb/internal/mcp/toolnames.go)<br>[internal/mcp/transfer_test.go](../../../../sources/sanonone__kektordb/internal/mcp/transfer_test.go)<br>[internal/mcp/types.go](../../../../sources/sanonone__kektordb/internal/mcp/types.go) |
| retrieval | 46 | [pkg/rag/adapter.go](../../../../sources/sanonone__kektordb/pkg/rag/adapter.go)<br>[pkg/rag/adaptive_retriever_test.go](../../../../sources/sanonone__kektordb/pkg/rag/adaptive_retriever_test.go)<br>[pkg/rag/adaptive_retriever.go](../../../../sources/sanonone__kektordb/pkg/rag/adaptive_retriever.go)<br>[pkg/rag/config.go](../../../../sources/sanonone__kektordb/pkg/rag/config.go)<br>[pkg/rag/interfaces.go](../../../../sources/sanonone__kektordb/pkg/rag/interfaces.go)<br>[pkg/rag/loader_auto.go](../../../../sources/sanonone__kektordb/pkg/rag/loader_auto.go)<br>[pkg/rag/loader_cli_test.go](../../../../sources/sanonone__kektordb/pkg/rag/loader_cli_test.go)<br>[pkg/rag/loader_cli.go](../../../../sources/sanonone__kektordb/pkg/rag/loader_cli.go) |
| spec | 2 | [docs/design/001-hybrid-storage-architecture-rfc.md](../../../../sources/sanonone__kektordb/docs/design/001-hybrid-storage-architecture-rfc.md)<br>[docs/design/002-vision-pipeline-rfc.md](../../../../sources/sanonone__kektordb/docs/design/002-vision-pipeline-rfc.md) |
| eval | 96 | [pkg/textanalyzer/compressor_test.go](../../../../sources/sanonone__kektordb/pkg/textanalyzer/compressor_test.go)<br>[pkg/textanalyzer/stemmer_english_test.go](../../../../sources/sanonone__kektordb/pkg/textanalyzer/stemmer_english_test.go)<br>[pkg/textanalyzer/stemmer_italian_test.go](../../../../sources/sanonone__kektordb/pkg/textanalyzer/stemmer_italian_test.go)<br>[pkg/storage/mmap/arena_test.go](../../../../sources/sanonone__kektordb/pkg/storage/mmap/arena_test.go)<br>[pkg/rag/adaptive_retriever_test.go](../../../../sources/sanonone__kektordb/pkg/rag/adaptive_retriever_test.go)<br>[pkg/rag/loader_cli_test.go](../../../../sources/sanonone__kektordb/pkg/rag/loader_cli_test.go)<br>[pkg/rag/loader_smart_test.go](../../../../sources/sanonone__kektordb/pkg/rag/loader_smart_test.go)<br>[pkg/rag/pipeline_adaptive_test.go](../../../../sources/sanonone__kektordb/pkg/rag/pipeline_adaptive_test.go) |
| security | 3 | [pkg/auth/rbac.go](../../../../sources/sanonone__kektordb/pkg/auth/rbac.go)<br>[pkg/auth/README.md](../../../../sources/sanonone__kektordb/pkg/auth/README.md)<br>[internal/server/rbac_test.go](../../../../sources/sanonone__kektordb/internal/server/rbac_test.go) |
| ci | 2 | [.github/workflows/ci.yml](../../../../sources/sanonone__kektordb/.github/workflows/ci.yml)<br>[.github/workflows/release.yml](../../../../sources/sanonone__kektordb/.github/workflows/release.yml) |
| container | 1 | [Dockerfile](../../../../sources/sanonone__kektordb/Dockerfile) |
| instruction | 0 | not obvious |
| docs | 33 | [README.it.md](../../../../sources/sanonone__kektordb/README.it.md)<br>[README.md](../../../../sources/sanonone__kektordb/README.md)<br>[pkg/textanalyzer/README.md](../../../../sources/sanonone__kektordb/pkg/textanalyzer/README.md)<br>[pkg/storage/mmap/README.md](../../../../sources/sanonone__kektordb/pkg/storage/mmap/README.md)<br>[pkg/rag/README.md](../../../../sources/sanonone__kektordb/pkg/rag/README.md)<br>[pkg/proxy/README.md](../../../../sources/sanonone__kektordb/pkg/proxy/README.md)<br>[pkg/persistence/README.md](../../../../sources/sanonone__kektordb/pkg/persistence/README.md)<br>[pkg/metrics/README.md](../../../../sources/sanonone__kektordb/pkg/metrics/README.md) |
| config | 7 | [go.mod](../../../../sources/sanonone__kektordb/go.mod)<br>[Makefile](../../../../sources/sanonone__kektordb/Makefile)<br>[native/compute/Cargo.lock](../../../../sources/sanonone__kektordb/native/compute/Cargo.lock)<br>[native/compute/Cargo.toml](../../../../sources/sanonone__kektordb/native/compute/Cargo.toml)<br>[examples/full_library_test/go.mod](../../../../sources/sanonone__kektordb/examples/full_library_test/go.mod)<br>[clients/typescript/package.json](../../../../sources/sanonone__kektordb/clients/typescript/package.json)<br>[clients/typescript/tsconfig.json](../../../../sources/sanonone__kektordb/clients/typescript/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 96 | [pkg/textanalyzer/compressor_test.go](../../../../sources/sanonone__kektordb/pkg/textanalyzer/compressor_test.go)<br>[pkg/textanalyzer/stemmer_english_test.go](../../../../sources/sanonone__kektordb/pkg/textanalyzer/stemmer_english_test.go)<br>[pkg/textanalyzer/stemmer_italian_test.go](../../../../sources/sanonone__kektordb/pkg/textanalyzer/stemmer_italian_test.go)<br>[pkg/storage/mmap/arena_test.go](../../../../sources/sanonone__kektordb/pkg/storage/mmap/arena_test.go)<br>[pkg/rag/adaptive_retriever_test.go](../../../../sources/sanonone__kektordb/pkg/rag/adaptive_retriever_test.go)<br>[pkg/rag/loader_cli_test.go](../../../../sources/sanonone__kektordb/pkg/rag/loader_cli_test.go) |
| CI workflows | 2 | [.github/workflows/ci.yml](../../../../sources/sanonone__kektordb/.github/workflows/ci.yml)<br>[.github/workflows/release.yml](../../../../sources/sanonone__kektordb/.github/workflows/release.yml) |
| Containers / deploy | 1 | [Dockerfile](../../../../sources/sanonone__kektordb/Dockerfile) |
| Security / policy | 3 | [pkg/auth/rbac.go](../../../../sources/sanonone__kektordb/pkg/auth/rbac.go)<br>[pkg/auth/README.md](../../../../sources/sanonone__kektordb/pkg/auth/README.md)<br>[internal/server/rbac_test.go](../../../../sources/sanonone__kektordb/internal/server/rbac_test.go) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | agent instruction files not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `internal/setup/json_mcp.go`, `internal/mcp/README.md`, `internal/mcp/server.go`.
2. Trace execution through entrypoints: `pkg/core/distance/gen/main.go`, `internal/server/server.go`, `internal/mcp/server.go`.
3. Map agent/tool runtime through: `pkg/engine/memory_layer_test.go`, `pkg/engine/memory_reinforce_test.go`, `pkg/engine/memory_test.go`.
4. Inspect retrieval/memory/indexing through: `pkg/rag/adapter.go`, `pkg/rag/adaptive_retriever_test.go`, `pkg/rag/adaptive_retriever.go`.
5. Verify behavior through test/eval files: `pkg/textanalyzer/compressor_test.go`, `pkg/textanalyzer/stemmer_english_test.go`, `pkg/textanalyzer/stemmer_italian_test.go`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 AI memory system combining vector search with temporal knowledge graph. Built in cognitive engine for agents. Supports m. 핵심 구조 신호는 Go, go.mod, Dockerfile, Makefile, README.md, LICENSE이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
