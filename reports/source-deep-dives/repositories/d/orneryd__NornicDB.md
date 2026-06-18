# orneryd/NornicDB Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Nornicdb is a distributed low-latency, Graph+Vector, Temporal MVCC with all sub-ms HNSW search, graph traversal, and writes. Using Neo4j Bolt/Cypher and qdrant's gRPC means you can switch with no changes while adding intelligent features like schemas, managed embeddings, reranking+llm, GPU accel, Auto-TLP, Policy-based Memory Decay, and MCP server.

## 요약

- 조사 단위: `sources/orneryd__NornicDB` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 2,266 files, 213 directories, depth score 132, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 retrieval=ui/embed_noui.go, ui/embed.go, ui/index.html이고, 의존성 단서는 cobra, qdrant, opentelemetry, prometheus, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 knowledge/RAG pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | orneryd/NornicDB |
| Topic | LLM Wiki, RAG, and Knowledge / LLM 위키/RAG/지식베이스 |
| Region | global |
| Language | Go |
| Stars | 777 |
| Forks | 44 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/orneryd__NornicDB](../../../../sources/orneryd__NornicDB) |
| Existing report | [reports/global-trending/repositories/orneryd__NornicDB.md](../../../global-trending/repositories/orneryd__NornicDB.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 2266 / 213 |
| Max observed depth | 5 |
| Top directories | .agents, .githooks, .github, apoc, cmd, deploy, docker, docs, lib, macos, models, neural, pkg, plugins, scripts, testing, ui |
| Top extensions | .go: 1690, .md: 275, .tsx: 36, .sh: 29, .py: 26, .h: 20, .yml: 17, .yaml: 16, (none): 16, .png: 15, .txt: 14, .ts: 12 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 27 |
| .github | ci surface | 1 |
| apoc | top-level component | 1 |
| cmd | source boundary | 1 |
| cmd/eval | cmd workspace | 1 |
| cmd/kmeans-test-data | cmd workspace | 1 |
| cmd/metrics-doc-gen | cmd workspace | 1 |
| cmd/nornicdb | cmd workspace | 1 |
| cmd/nornicdb-admin | cmd workspace | 1 |
| cmd/oauth-provider | cmd workspace | 1 |
| cmd/swagger-ui | cmd workspace | 1 |
| deploy | deployment surface | 1 |
| docker | documentation surface | 1 |
| lib | source boundary | 1 |
| macos | top-level component | 1 |
| models | top-level component | 1 |
| neural | top-level component | 1 |
| pkg | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | .PHONY | make .PHONY |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | qdrant |
| modelRuntime | none |
| webRuntime | none |
| developerSurface | cobra |
| observability | opentelemetry, prometheus |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| retrieval | [ui/embed_noui.go](../../../../sources/orneryd__NornicDB/ui/embed_noui.go) | retrieval signal |
| retrieval | [ui/embed.go](../../../../sources/orneryd__NornicDB/ui/embed.go) | retrieval signal |
| retrieval | [ui/index.html](../../../../sources/orneryd__NornicDB/ui/index.html) | retrieval signal |
| retrieval | [ui/src/index.css](../../../../sources/orneryd__NornicDB/ui/src/index.css) | retrieval signal |
| entrypoints | [ui/src/App.tsx](../../../../sources/orneryd__NornicDB/ui/src/App.tsx) | entrypoints signal |
| entrypoints | [ui/src/main.tsx](../../../../sources/orneryd__NornicDB/ui/src/main.tsx) | entrypoints signal |
| entrypoints | [testing/benchmarks/northwind_power/main.go](../../../../sources/orneryd__NornicDB/testing/benchmarks/northwind_power/main.go) | entrypoints signal |
| docs | [mkdocs.yml](../../../../sources/orneryd__NornicDB/mkdocs.yml) | docs signal |
| docs | [README.md](../../../../sources/orneryd__NornicDB/README.md) | docs signal |
| docs | [ui/README.md](../../../../sources/orneryd__NornicDB/ui/README.md) | docs signal |
| docs | [ui/src/components/browser/README.md](../../../../sources/orneryd__NornicDB/ui/src/components/browser/README.md) | docs signal |
| eval | [testing/e2e/endpoints_bench_test.go](../../../../sources/orneryd__NornicDB/testing/e2e/endpoints_bench_test.go) | eval signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 21 | [ui/src/App.tsx](../../../../sources/orneryd__NornicDB/ui/src/App.tsx)<br>[ui/src/index.css](../../../../sources/orneryd__NornicDB/ui/src/index.css)<br>[ui/src/main.tsx](../../../../sources/orneryd__NornicDB/ui/src/main.tsx)<br>[testing/benchmarks/northwind_power/main.go](../../../../sources/orneryd__NornicDB/testing/benchmarks/northwind_power/main.go)<br>[testing/benchmarks/nornic_vs_qdrant/main.go](../../../../sources/orneryd__NornicDB/testing/benchmarks/nornic_vs_qdrant/main.go)<br>[testing/benchmarks/http_write_latency/main.go](../../../../sources/orneryd__NornicDB/testing/benchmarks/http_write_latency/main.go)<br>[testing/benchmarks/grpc_vs_bolt/main.go](../../../../sources/orneryd__NornicDB/testing/benchmarks/grpc_vs_bolt/main.go)<br>[scripts/perf_direct/main.go](../../../../sources/orneryd__NornicDB/scripts/perf_direct/main.go) |
| agentRuntime | 76 | [AGENTS.md](../../../../sources/orneryd__NornicDB/AGENTS.md)<br>[pkg/storage/memory_constraint_test.go](../../../../sources/orneryd__NornicDB/pkg/storage/memory_constraint_test.go)<br>[pkg/storage/memory_test.go](../../../../sources/orneryd__NornicDB/pkg/storage/memory_test.go)<br>[pkg/storage/memory.go](../../../../sources/orneryd__NornicDB/pkg/storage/memory.go)<br>[pkg/storage/lifecycle/planner.go](../../../../sources/orneryd__NornicDB/pkg/storage/lifecycle/planner.go)<br>[pkg/mcp/context.go](../../../../sources/orneryd__NornicDB/pkg/mcp/context.go)<br>[pkg/mcp/tools_test.go](../../../../sources/orneryd__NornicDB/pkg/mcp/tools_test.go)<br>[pkg/mcp/tools.go](../../../../sources/orneryd__NornicDB/pkg/mcp/tools.go) |
| mcp | 17 | [pkg/server/mcp_config_test.go](../../../../sources/orneryd__NornicDB/pkg/server/mcp_config_test.go)<br>[pkg/mcp/auth_test.go](../../../../sources/orneryd__NornicDB/pkg/mcp/auth_test.go)<br>[pkg/mcp/auth.go](../../../../sources/orneryd__NornicDB/pkg/mcp/auth.go)<br>[pkg/mcp/context.go](../../../../sources/orneryd__NornicDB/pkg/mcp/context.go)<br>[pkg/mcp/embedding_validation_test.go](../../../../sources/orneryd__NornicDB/pkg/mcp/embedding_validation_test.go)<br>[pkg/mcp/mcp_e2e_test.go](../../../../sources/orneryd__NornicDB/pkg/mcp/mcp_e2e_test.go)<br>[pkg/mcp/mcp_extended_test.go](../../../../sources/orneryd__NornicDB/pkg/mcp/mcp_extended_test.go)<br>[pkg/mcp/server_test.go](../../../../sources/orneryd__NornicDB/pkg/mcp/server_test.go) |
| retrieval | 182 | [ui/embed_noui.go](../../../../sources/orneryd__NornicDB/ui/embed_noui.go)<br>[ui/embed.go](../../../../sources/orneryd__NornicDB/ui/embed.go)<br>[ui/index.html](../../../../sources/orneryd__NornicDB/ui/index.html)<br>[ui/src/index.css](../../../../sources/orneryd__NornicDB/ui/src/index.css)<br>[ui/Bifrost/index.ts](../../../../sources/orneryd__NornicDB/ui/Bifrost/index.ts)<br>[testing/e2e/vector_traversal_shapes_bench_test.go](../../../../sources/orneryd__NornicDB/testing/e2e/vector_traversal_shapes_bench_test.go)<br>[scripts/convert_search_index_to_msgpack/main.go](../../../../sources/orneryd__NornicDB/scripts/convert_search_index_to_msgpack/main.go)<br>[scripts/convert_search_index_to_msgpack/README.md](../../../../sources/orneryd__NornicDB/scripts/convert_search_index_to_msgpack/README.md) |
| spec | 27 | [requirements-docs.txt](../../../../sources/orneryd__NornicDB/requirements-docs.txt)<br>[pkg/search/vector_query_spec.go](../../../../sources/orneryd__NornicDB/pkg/search/vector_query_spec.go)<br>[neural/requirements-extract.txt](../../../../sources/orneryd__NornicDB/neural/requirements-extract.txt)<br>[neural/requirements.txt](../../../../sources/orneryd__NornicDB/neural/requirements.txt)<br>[docs/architecture/clustering-roadmap.md](../../../../sources/orneryd__NornicDB/docs/architecture/clustering-roadmap.md)<br>[docs/architecture/cognitive-slm-architecture.md](../../../../sources/orneryd__NornicDB/docs/architecture/cognitive-slm-architecture.md)<br>[docs/architecture/composite-db-analysis.md](../../../../sources/orneryd__NornicDB/docs/architecture/composite-db-analysis.md)<br>[docs/architecture/cypher-parser-modes.md](../../../../sources/orneryd__NornicDB/docs/architecture/cypher-parser-modes.md) |
| eval | 1123 | [testing/e2e/endpoints_bench_test.go](../../../../sources/orneryd__NornicDB/testing/e2e/endpoints_bench_test.go)<br>[testing/e2e/vector_traversal_shapes_bench_test.go](../../../../sources/orneryd__NornicDB/testing/e2e/vector_traversal_shapes_bench_test.go)<br>[testing/benchmarks/nornic_vs_qdrant/qdrant-bench.yaml](../../../../sources/orneryd__NornicDB/testing/benchmarks/nornic_vs_qdrant/qdrant-bench.yaml)<br>[scripts/benchmark_northwind_vs_neo4j.sh](../../../../sources/orneryd__NornicDB/scripts/benchmark_northwind_vs_neo4j.sh)<br>[scripts/README_BENCHMARK_NORTHWIND.md](../../../../sources/orneryd__NornicDB/scripts/README_BENCHMARK_NORTHWIND.md)<br>[scripts/run_multi_db_e2e_test.sh](../../../../sources/orneryd__NornicDB/scripts/run_multi_db_e2e_test.sh)<br>[scripts/test_search_performance.sh](../../../../sources/orneryd__NornicDB/scripts/test_search_performance.sh)<br>[scripts/test_send_query.sh](../../../../sources/orneryd__NornicDB/scripts/test_send_query.sh) |
| security | 89 | [SECURITY.md](../../../../sources/orneryd__NornicDB/SECURITY.md)<br>[ui/src/pages/Security.tsx](../../../../sources/orneryd__NornicDB/ui/src/pages/Security.tsx)<br>[pkg/storage/badger_constraint_validation_policy_adjacent_extra_test.go](../../../../sources/orneryd__NornicDB/pkg/storage/badger_constraint_validation_policy_adjacent_extra_test.go)<br>[pkg/storage/badger_constraint_validation_policy_test.go](../../../../sources/orneryd__NornicDB/pkg/storage/badger_constraint_validation_policy_test.go)<br>[pkg/server/security_integration_test.go](../../../../sources/orneryd__NornicDB/pkg/server/security_integration_test.go)<br>[pkg/server/server_auth_cookie_test.go](../../../../sources/orneryd__NornicDB/pkg/server/server_auth_cookie_test.go)<br>[pkg/server/server_auth.go](../../../../sources/orneryd__NornicDB/pkg/server/server_auth.go)<br>[pkg/server/server_middleware_auth_test.go](../../../../sources/orneryd__NornicDB/pkg/server/server_middleware_auth_test.go) |
| ci | 6 | [.github/workflows/cd-llama-cpu.yml](../../../../sources/orneryd__NornicDB/.github/workflows/cd-llama-cpu.yml)<br>[.github/workflows/cd-llama-cuda.yml](../../../../sources/orneryd__NornicDB/.github/workflows/cd-llama-cuda.yml)<br>[.github/workflows/cd.yml](../../../../sources/orneryd__NornicDB/.github/workflows/cd.yml)<br>[.github/workflows/ci.yml](../../../../sources/orneryd__NornicDB/.github/workflows/ci.yml)<br>[.github/workflows/docs-pages.yml](../../../../sources/orneryd__NornicDB/.github/workflows/docs-pages.yml)<br>[.github/workflows/release-macos.yml](../../../../sources/orneryd__NornicDB/.github/workflows/release-macos.yml) |
| container | 28 | [docker-compose.amd64.yml](../../../../sources/orneryd__NornicDB/docker-compose.amd64.yml)<br>[docker-compose.arm64.yml](../../../../sources/orneryd__NornicDB/docker-compose.arm64.yml)<br>[docker-compose.yml](../../../../sources/orneryd__NornicDB/docker-compose.yml)<br>[docker/docker-compose.arm64-metal-heimdall.yml](../../../../sources/orneryd__NornicDB/docker/docker-compose.arm64-metal-heimdall.yml)<br>[docker/docker-compose.arm64-metal.yml](../../../../sources/orneryd__NornicDB/docker/docker-compose.arm64-metal.yml)<br>[docker/docker-compose.cuda.yml](../../../../sources/orneryd__NornicDB/docker/docker-compose.cuda.yml)<br>[docker/docker-compose.vulkan.yml](../../../../sources/orneryd__NornicDB/docker/docker-compose.vulkan.yml)<br>[docker/Dockerfile.amd64-cpu](../../../../sources/orneryd__NornicDB/docker/Dockerfile.amd64-cpu) |
| instruction | 1 | [AGENTS.md](../../../../sources/orneryd__NornicDB/AGENTS.md) |
| docs | 265 | [mkdocs.yml](../../../../sources/orneryd__NornicDB/mkdocs.yml)<br>[README.md](../../../../sources/orneryd__NornicDB/README.md)<br>[ui/README.md](../../../../sources/orneryd__NornicDB/ui/README.md)<br>[ui/src/components/browser/README.md](../../../../sources/orneryd__NornicDB/ui/src/components/browser/README.md)<br>[testing/e2e/README.md](../../../../sources/orneryd__NornicDB/testing/e2e/README.md)<br>[testing/benchmarks/nornic_vs_qdrant/README.md](../../../../sources/orneryd__NornicDB/testing/benchmarks/nornic_vs_qdrant/README.md)<br>[testing/benchmarks/http_write_latency/README.md](../../../../sources/orneryd__NornicDB/testing/benchmarks/http_write_latency/README.md)<br>[testing/benchmarks/grpc_vs_bolt/README.md](../../../../sources/orneryd__NornicDB/testing/benchmarks/grpc_vs_bolt/README.md) |
| config | 8 | [go.mod](../../../../sources/orneryd__NornicDB/go.mod)<br>[Makefile](../../../../sources/orneryd__NornicDB/Makefile)<br>[requirements-docs.txt](../../../../sources/orneryd__NornicDB/requirements-docs.txt)<br>[ui/package.json](../../../../sources/orneryd__NornicDB/ui/package.json)<br>[ui/tsconfig.json](../../../../sources/orneryd__NornicDB/ui/tsconfig.json)<br>[pkg/cypher/antlr/Makefile](../../../../sources/orneryd__NornicDB/pkg/cypher/antlr/Makefile)<br>[neural/requirements-extract.txt](../../../../sources/orneryd__NornicDB/neural/requirements-extract.txt)<br>[neural/requirements.txt](../../../../sources/orneryd__NornicDB/neural/requirements.txt) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 1123 | [testing/e2e/endpoints_bench_test.go](../../../../sources/orneryd__NornicDB/testing/e2e/endpoints_bench_test.go)<br>[testing/e2e/vector_traversal_shapes_bench_test.go](../../../../sources/orneryd__NornicDB/testing/e2e/vector_traversal_shapes_bench_test.go)<br>[testing/benchmarks/nornic_vs_qdrant/qdrant-bench.yaml](../../../../sources/orneryd__NornicDB/testing/benchmarks/nornic_vs_qdrant/qdrant-bench.yaml)<br>[scripts/benchmark_northwind_vs_neo4j.sh](../../../../sources/orneryd__NornicDB/scripts/benchmark_northwind_vs_neo4j.sh)<br>[scripts/README_BENCHMARK_NORTHWIND.md](../../../../sources/orneryd__NornicDB/scripts/README_BENCHMARK_NORTHWIND.md)<br>[scripts/run_multi_db_e2e_test.sh](../../../../sources/orneryd__NornicDB/scripts/run_multi_db_e2e_test.sh) |
| CI workflows | 6 | [.github/workflows/cd-llama-cpu.yml](../../../../sources/orneryd__NornicDB/.github/workflows/cd-llama-cpu.yml)<br>[.github/workflows/cd-llama-cuda.yml](../../../../sources/orneryd__NornicDB/.github/workflows/cd-llama-cuda.yml)<br>[.github/workflows/cd.yml](../../../../sources/orneryd__NornicDB/.github/workflows/cd.yml)<br>[.github/workflows/ci.yml](../../../../sources/orneryd__NornicDB/.github/workflows/ci.yml)<br>[.github/workflows/docs-pages.yml](../../../../sources/orneryd__NornicDB/.github/workflows/docs-pages.yml)<br>[.github/workflows/release-macos.yml](../../../../sources/orneryd__NornicDB/.github/workflows/release-macos.yml) |
| Containers / deploy | 28 | [docker-compose.amd64.yml](../../../../sources/orneryd__NornicDB/docker-compose.amd64.yml)<br>[docker-compose.arm64.yml](../../../../sources/orneryd__NornicDB/docker-compose.arm64.yml)<br>[docker-compose.yml](../../../../sources/orneryd__NornicDB/docker-compose.yml)<br>[docker/docker-compose.arm64-metal-heimdall.yml](../../../../sources/orneryd__NornicDB/docker/docker-compose.arm64-metal-heimdall.yml)<br>[docker/docker-compose.arm64-metal.yml](../../../../sources/orneryd__NornicDB/docker/docker-compose.arm64-metal.yml)<br>[docker/docker-compose.cuda.yml](../../../../sources/orneryd__NornicDB/docker/docker-compose.cuda.yml) |
| Security / policy | 89 | [SECURITY.md](../../../../sources/orneryd__NornicDB/SECURITY.md)<br>[ui/src/pages/Security.tsx](../../../../sources/orneryd__NornicDB/ui/src/pages/Security.tsx)<br>[pkg/storage/badger_constraint_validation_policy_adjacent_extra_test.go](../../../../sources/orneryd__NornicDB/pkg/storage/badger_constraint_validation_policy_adjacent_extra_test.go)<br>[pkg/storage/badger_constraint_validation_policy_test.go](../../../../sources/orneryd__NornicDB/pkg/storage/badger_constraint_validation_policy_test.go)<br>[pkg/server/security_integration_test.go](../../../../sources/orneryd__NornicDB/pkg/server/security_integration_test.go)<br>[pkg/server/server_auth_cookie_test.go](../../../../sources/orneryd__NornicDB/pkg/server/server_auth_cookie_test.go) |
| Agent instructions | 1 | [AGENTS.md](../../../../sources/orneryd__NornicDB/AGENTS.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `ui/embed_noui.go`, `ui/embed.go`, `ui/index.html`.
2. Trace execution through entrypoints: `ui/src/App.tsx`, `ui/src/index.css`, `ui/src/main.tsx`.
3. Map agent/tool runtime through: `AGENTS.md`, `pkg/storage/memory_constraint_test.go`, `pkg/storage/memory_test.go`.
4. Inspect retrieval/memory/indexing through: `ui/embed_noui.go`, `ui/embed.go`, `ui/index.html`.
5. Verify behavior through test/eval files: `testing/e2e/endpoints_bench_test.go`, `testing/e2e/vector_traversal_shapes_bench_test.go`, `testing/benchmarks/nornic_vs_qdrant/qdrant-bench.yaml`.

## Existing Repository Insight

LLM 위키/RAG/지식베이스 관점에서 Nornicdb is a distributed low latency, Graph+Vector, Temporal MVCC with all sub ms HNSW search, graph traversal, and wri. 핵심 구조 신호는 Go, go.mod, docker-compose.yml, Makefile, README.md, AGENTS.md이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 knowledge/RAG pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
