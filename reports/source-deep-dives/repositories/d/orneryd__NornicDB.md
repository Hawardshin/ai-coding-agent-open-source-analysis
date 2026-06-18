# orneryd/NornicDB 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

Nornicdb is a distributed low-latency, Graph+Vector, Temporal MVCC with all sub-ms HNSW search, graph traversal, and writes. Using Neo4j Bolt/Cypher and qdrant's gRPC means you can switch with no changes while adding intelligent features like schemas, managed embeddings, reranking+llm, GPU accel, Auto-TLP, Policy-based Memory Decay, and MCP server.

## 요약

- 조사 단위: `sources/orneryd__NornicDB` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 2,266 files, 213 directories, depth score 126, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 retrieval=ui/embed_noui.go, ui/embed.go, ui/index.html이고, 의존성 단서는 cobra, qdrant, opentelemetry, prometheus, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 지식/RAG 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

## 바로가기

| 이동 | 여기서 볼 것 |
| --- | --- |
| [전체 시작 README](../../../../README.md) | 레포 전체 목적, 핵심 카테고리, 읽는 순서. |
| [전체 보고서 읽기 지도](../../../README.md) | 모든 보고서의 시작점, 주제, 폴더 지도. |
| [주제별 보고서 목차](../../../by-topic/README.md) | 조사 질문 기준으로 보고서를 찾는 입구. |
| [표/CSV 목차](../../../tables/README.md) | 표로 빠르게 훑고 CSV로 비교하는 입구. |
| [레포별 인사이트](../../../repository-insights/README.md) | 레포별 총평과 위험 신호. |
| [소스 딥다이브](../../README.md) | 주제별 소스 경로 근거. |
| [레포별 소스 딥다이브](../README.md) | 로컬 클론 1개당 1개 Markdown 딥다이브. |
| [소스 트렌드 인사이트](../../../source-insights/README.md) | 카테고리별 트렌드와 레포별 특징 비교. |


## 레포 컨텍스트

| 항목 | 값 |
| --- | --- |
| 레포 | orneryd/NornicDB |
| 주제 | LLM 위키/RAG/지식베이스 / LLM 위키/RAG/지식베이스 |
| Region | global |
| Language | Go |
| Stars | 777 |
| Forks | 44 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/orneryd__NornicDB](../../../../sources/orneryd__NornicDB) |
| 기존 보고서 | [reports/global-trending/repositories/orneryd__NornicDB.md](../../../global-trending/repositories/orneryd__NornicDB.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 2266 / 213 |
| 관측 최대 깊이 | 5 |
| 상위 디렉터리 | .agents, .githooks, .github, apoc, cmd, deploy, docker, docs, lib, macos, models, neural, pkg, plugins, scripts, testing, ui |
| 상위 확장자 | .go: 1690, .md: 275, .tsx: 36, .sh: 29, .py: 26, .h: 20, .yml: 17, .yaml: 16, (none): 16, .png: 15, .txt: 14, .ts: 12 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
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


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
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


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | qdrant |
| modelRuntime | 없음 |
| webRuntime | 없음 |
| developerSurface | cobra |
| observability | opentelemetry, prometheus |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
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


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 1123 | [testing/e2e/endpoints_bench_test.go](../../../../sources/orneryd__NornicDB/testing/e2e/endpoints_bench_test.go)<br>[testing/e2e/vector_traversal_shapes_bench_test.go](../../../../sources/orneryd__NornicDB/testing/e2e/vector_traversal_shapes_bench_test.go)<br>[testing/benchmarks/nornic_vs_qdrant/qdrant-bench.yaml](../../../../sources/orneryd__NornicDB/testing/benchmarks/nornic_vs_qdrant/qdrant-bench.yaml)<br>[scripts/benchmark_northwind_vs_neo4j.sh](../../../../sources/orneryd__NornicDB/scripts/benchmark_northwind_vs_neo4j.sh)<br>[scripts/README_BENCHMARK_NORTHWIND.md](../../../../sources/orneryd__NornicDB/scripts/README_BENCHMARK_NORTHWIND.md)<br>[scripts/run_multi_db_e2e_test.sh](../../../../sources/orneryd__NornicDB/scripts/run_multi_db_e2e_test.sh) |
| CI workflow | 6 | [.github/workflows/cd-llama-cpu.yml](../../../../sources/orneryd__NornicDB/.github/workflows/cd-llama-cpu.yml)<br>[.github/workflows/cd-llama-cuda.yml](../../../../sources/orneryd__NornicDB/.github/workflows/cd-llama-cuda.yml)<br>[.github/workflows/cd.yml](../../../../sources/orneryd__NornicDB/.github/workflows/cd.yml)<br>[.github/workflows/ci.yml](../../../../sources/orneryd__NornicDB/.github/workflows/ci.yml)<br>[.github/workflows/docs-pages.yml](../../../../sources/orneryd__NornicDB/.github/workflows/docs-pages.yml)<br>[.github/workflows/release-macos.yml](../../../../sources/orneryd__NornicDB/.github/workflows/release-macos.yml) |
| 컨테이너/배포 | 28 | [docker-compose.amd64.yml](../../../../sources/orneryd__NornicDB/docker-compose.amd64.yml)<br>[docker-compose.arm64.yml](../../../../sources/orneryd__NornicDB/docker-compose.arm64.yml)<br>[docker-compose.yml](../../../../sources/orneryd__NornicDB/docker-compose.yml)<br>[docker/docker-compose.arm64-metal-heimdall.yml](../../../../sources/orneryd__NornicDB/docker/docker-compose.arm64-metal-heimdall.yml)<br>[docker/docker-compose.arm64-metal.yml](../../../../sources/orneryd__NornicDB/docker/docker-compose.arm64-metal.yml)<br>[docker/docker-compose.cuda.yml](../../../../sources/orneryd__NornicDB/docker/docker-compose.cuda.yml) |
| 보안/정책 | 89 | [SECURITY.md](../../../../sources/orneryd__NornicDB/SECURITY.md)<br>[ui/src/pages/Security.tsx](../../../../sources/orneryd__NornicDB/ui/src/pages/Security.tsx)<br>[pkg/storage/badger_constraint_validation_policy_adjacent_extra_test.go](../../../../sources/orneryd__NornicDB/pkg/storage/badger_constraint_validation_policy_adjacent_extra_test.go)<br>[pkg/storage/badger_constraint_validation_policy_test.go](../../../../sources/orneryd__NornicDB/pkg/storage/badger_constraint_validation_policy_test.go)<br>[pkg/server/security_integration_test.go](../../../../sources/orneryd__NornicDB/pkg/server/security_integration_test.go)<br>[pkg/server/server_auth_cookie_test.go](../../../../sources/orneryd__NornicDB/pkg/server/server_auth_cookie_test.go) |
| 에이전트 지시문 | 1 | [AGENTS.md](../../../../sources/orneryd__NornicDB/AGENTS.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `ui/embed_noui.go`, `ui/embed.go`, `ui/index.html`.
2. entrypoint를 따라 실행 흐름 확인: `ui/src/App.tsx`, `ui/src/index.css`, `ui/src/main.tsx`.
3. agent/tool runtime 매핑: `AGENTS.md`, `pkg/storage/memory_constraint_test.go`, `pkg/storage/memory_test.go`.
4. retrieval/memory/indexing 확인: `ui/embed_noui.go`, `ui/embed.go`, `ui/index.html`.
5. test/eval 파일로 동작 검증: `testing/e2e/endpoints_bench_test.go`, `testing/e2e/vector_traversal_shapes_bench_test.go`, `testing/benchmarks/nornic_vs_qdrant/qdrant-bench.yaml`.

## 기존 레포 인사이트

LLM 위키/RAG/지식베이스 관점에서 Nornicdb is a distributed low latency, Graph+Vector, Temporal MVCC with all sub ms HNSW search, graph traversal, and wri. 핵심 구조 신호는 Go, go.mod, docker-compose.yml, Makefile, README.md, AGENTS.md이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 지식/RAG 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
