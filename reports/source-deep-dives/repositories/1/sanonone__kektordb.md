# sanonone/kektordb 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

AI memory system combining vector search with temporal knowledge graph. Built-in cognitive engine for agents. Supports memory decay, contradiction detection, and MCP integration.

## 요약

- 조사 단위: `sources/sanonone__kektordb` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 296 files, 58 directories, depth score 117, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=internal/setup/json_mcp.go, internal/mcp/README.md, internal/mcp/server.go이고, 의존성 단서는 modelcontextprotocol, prometheus, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | sanonone/kektordb |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | Go |
| Stars | 없음 |
| Forks | 없음 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/sanonone__kektordb](../../../../sources/sanonone__kektordb) |
| 기존 보고서 | [reports/korea-trending/repositories/sanonone__kektordb.md](../../../korea-trending/repositories/sanonone__kektordb.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 296 / 58 |
| 관측 최대 깊이 | 6 |
| 상위 디렉터리 | .github, clients, cmd, docs, examples, internal, native, pkg, testdata |
| 상위 확장자 | .go: 175, .py: 33, .md: 32, .ts: 9, .yml: 6, (none): 6, .js: 5, .png: 5, .yaml: 5, .json: 4, .rs: 3, .gif: 2 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
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


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
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


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | modelcontextprotocol |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | 없음 |
| developerSurface | 없음 |
| observability | prometheus |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
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
| instruction | 0 | 명확하지 않음 |
| docs | 33 | [README.it.md](../../../../sources/sanonone__kektordb/README.it.md)<br>[README.md](../../../../sources/sanonone__kektordb/README.md)<br>[pkg/textanalyzer/README.md](../../../../sources/sanonone__kektordb/pkg/textanalyzer/README.md)<br>[pkg/storage/mmap/README.md](../../../../sources/sanonone__kektordb/pkg/storage/mmap/README.md)<br>[pkg/rag/README.md](../../../../sources/sanonone__kektordb/pkg/rag/README.md)<br>[pkg/proxy/README.md](../../../../sources/sanonone__kektordb/pkg/proxy/README.md)<br>[pkg/persistence/README.md](../../../../sources/sanonone__kektordb/pkg/persistence/README.md)<br>[pkg/metrics/README.md](../../../../sources/sanonone__kektordb/pkg/metrics/README.md) |
| config | 7 | [go.mod](../../../../sources/sanonone__kektordb/go.mod)<br>[Makefile](../../../../sources/sanonone__kektordb/Makefile)<br>[native/compute/Cargo.lock](../../../../sources/sanonone__kektordb/native/compute/Cargo.lock)<br>[native/compute/Cargo.toml](../../../../sources/sanonone__kektordb/native/compute/Cargo.toml)<br>[examples/full_library_test/go.mod](../../../../sources/sanonone__kektordb/examples/full_library_test/go.mod)<br>[clients/typescript/package.json](../../../../sources/sanonone__kektordb/clients/typescript/package.json)<br>[clients/typescript/tsconfig.json](../../../../sources/sanonone__kektordb/clients/typescript/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 96 | [pkg/textanalyzer/compressor_test.go](../../../../sources/sanonone__kektordb/pkg/textanalyzer/compressor_test.go)<br>[pkg/textanalyzer/stemmer_english_test.go](../../../../sources/sanonone__kektordb/pkg/textanalyzer/stemmer_english_test.go)<br>[pkg/textanalyzer/stemmer_italian_test.go](../../../../sources/sanonone__kektordb/pkg/textanalyzer/stemmer_italian_test.go)<br>[pkg/storage/mmap/arena_test.go](../../../../sources/sanonone__kektordb/pkg/storage/mmap/arena_test.go)<br>[pkg/rag/adaptive_retriever_test.go](../../../../sources/sanonone__kektordb/pkg/rag/adaptive_retriever_test.go)<br>[pkg/rag/loader_cli_test.go](../../../../sources/sanonone__kektordb/pkg/rag/loader_cli_test.go) |
| CI workflow | 2 | [.github/workflows/ci.yml](../../../../sources/sanonone__kektordb/.github/workflows/ci.yml)<br>[.github/workflows/release.yml](../../../../sources/sanonone__kektordb/.github/workflows/release.yml) |
| 컨테이너/배포 | 1 | [Dockerfile](../../../../sources/sanonone__kektordb/Dockerfile) |
| 보안/정책 | 3 | [pkg/auth/rbac.go](../../../../sources/sanonone__kektordb/pkg/auth/rbac.go)<br>[pkg/auth/README.md](../../../../sources/sanonone__kektordb/pkg/auth/README.md)<br>[internal/server/rbac_test.go](../../../../sources/sanonone__kektordb/internal/server/rbac_test.go) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | agent instruction 파일이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `internal/setup/json_mcp.go`, `internal/mcp/README.md`, `internal/mcp/server.go`.
2. entrypoint를 따라 실행 흐름 확인: `pkg/core/distance/gen/main.go`, `internal/server/server.go`, `internal/mcp/server.go`.
3. agent/tool runtime 매핑: `pkg/engine/memory_layer_test.go`, `pkg/engine/memory_reinforce_test.go`, `pkg/engine/memory_test.go`.
4. retrieval/memory/indexing 확인: `pkg/rag/adapter.go`, `pkg/rag/adaptive_retriever_test.go`, `pkg/rag/adaptive_retriever.go`.
5. test/eval 파일로 동작 검증: `pkg/textanalyzer/compressor_test.go`, `pkg/textanalyzer/stemmer_english_test.go`, `pkg/textanalyzer/stemmer_italian_test.go`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 AI memory system combining vector search with temporal knowledge graph. Built in cognitive engine for agents. Supports m. 핵심 구조 신호는 Go, go.mod, Dockerfile, Makefile, README.md, LICENSE이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
