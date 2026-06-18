# kkollsga/kglite 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

Lightweight in-memory knowledge graph with Cypher query support

## 요약

- 조사 단위: `sources/kkollsga__kglite` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 896 files, 131 directories, depth score 119, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 retrieval=tests/test_code_tree_graph_ergonomics.py, tests/test_disk_property_index.py, tests/test_embedding_id_index.py이고, 의존성 단서는 mcp, transformers, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 지식/RAG 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | kkollsga/kglite |
| 주제 | LLM 위키/RAG/지식베이스 / LLM 위키/RAG/지식베이스 |
| Region | mixed |
| Language | Rust |
| Stars | 31 |
| Forks | 4 |
| License | MIT |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/kkollsga__kglite](../../../../sources/kkollsga__kglite) |
| 기존 보고서 | [reports/llm-wiki/repositories/kkollsga__kglite.md](../../../llm-wiki/repositories/kkollsga__kglite.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 896 / 131 |
| 관측 최대 깊이 | 9 |
| 상위 디렉터리 | .cargo, .github, benchmarks, crates, docs, examples, kglite, scripts, tests |
| 상위 확장자 | .rs: 355, .py: 259, .md: 171, .json: 61, .toml: 10, .yml: 9, .yaml: 6, (none): 5, .kgl: 4, .csv: 2, .ipynb: 2, .lock: 2 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 92 |
| docs | documentation surface | 47 |
| crates/kglite | crates workspace | 33 |
| crates/kglite-mcp-server | crates workspace | 28 |
| crates/kglite-bolt-server | crates workspace | 3 |
| crates/kglite-c | crates workspace | 2 |
| crates/kglite-py | crates workspace | 2 |
| .github | ci surface | 1 |
| benchmarks | validation surface | 1 |
| crates | source boundary | 1 |
| examples | top-level component | 1 |
| examples/codebase_to_claude_mcp.ipynb | examples workspace | 1 |
| examples/open_source_workspace_mcp.yaml | examples workspace | 1 |
| examples/sec_to_claude_mcp.ipynb | examples workspace | 1 |
| kglite | top-level component | 1 |
| scripts | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| serve-dev | Makefile | dev | make dev |
| serve-dev | Makefile | dev-with-bin | make dev-with-bin |
| build | Makefile | bundle-bin | make bundle-bin |
| test | Makefile | test | make test |
| test | Makefile | test-rust | make test-rust |
| test | Makefile | test-py | make test-py |
| utility | Makefile | bench | make bench |
| utility | Makefile | bench-save | make bench-save |
| utility | Makefile | bench-compare | make bench-compare |
| quality | Makefile | bench-check-v090 | make bench-check-v090 |
| quality | Makefile | bench-check | make bench-check |
| build | Makefile | refresh-release-constants | make refresh-release-constants |
| utility | Makefile | neo4j-up | make neo4j-up |
| utility | Makefile | neo4j-down | make neo4j-down |
| utility | Makefile | neo4j-conformance | make neo4j-conformance |
| utility | Makefile | bolt-conformance | make bolt-conformance |
| quality | Makefile | check | make check |
| quality | Makefile | fmt | make fmt |
| quality | Makefile | fmt-py | make fmt-py |
| serve-dev | pyproject.toml | kglite-mcp-server | kglite-mcp-server |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | mcp |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | transformers |
| webRuntime | 없음 |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| retrieval | [tests/test_code_tree_graph_ergonomics.py](../../../../sources/kkollsga__kglite/tests/test_code_tree_graph_ergonomics.py) | retrieval signal |
| retrieval | [tests/test_disk_property_index.py](../../../../sources/kkollsga__kglite/tests/test_disk_property_index.py) | retrieval signal |
| retrieval | [tests/test_embedding_id_index.py](../../../../sources/kkollsga__kglite/tests/test_embedding_id_index.py) | retrieval signal |
| retrieval | [tests/test_embedding_integrity.py](../../../../sources/kkollsga__kglite/tests/test_embedding_integrity.py) | retrieval signal |
| entrypoints | [crates/kglite-py/src/lib.rs](../../../../sources/kkollsga__kglite/crates/kglite-py/src/lib.rs) | entrypoints signal |
| entrypoints | [crates/kglite-mcp-server/src/lib.rs](../../../../sources/kkollsga__kglite/crates/kglite-mcp-server/src/lib.rs) | entrypoints signal |
| entrypoints | [crates/kglite-mcp-server/src/main.rs](../../../../sources/kkollsga__kglite/crates/kglite-mcp-server/src/main.rs) | entrypoints signal |
| entrypoints | [crates/kglite-c/src/lib.rs](../../../../sources/kkollsga__kglite/crates/kglite-c/src/lib.rs) | entrypoints signal |
| docs | [README.md](../../../../sources/kkollsga__kglite/README.md) | docs signal |
| docs | [tests/fixtures/okf/google/README.md](../../../../sources/kkollsga__kglite/tests/fixtures/okf/google/README.md) | docs signal |
| docs | [docs/changelog.md](../../../../sources/kkollsga__kglite/docs/changelog.md) | docs signal |
| docs | [docs/conf.py](../../../../sources/kkollsga__kglite/docs/conf.py) | docs signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 8 | [crates/kglite-py/src/lib.rs](../../../../sources/kkollsga__kglite/crates/kglite-py/src/lib.rs)<br>[crates/kglite-mcp-server/src/lib.rs](../../../../sources/kkollsga__kglite/crates/kglite-mcp-server/src/lib.rs)<br>[crates/kglite-mcp-server/src/main.rs](../../../../sources/kkollsga__kglite/crates/kglite-mcp-server/src/main.rs)<br>[crates/kglite-c/src/lib.rs](../../../../sources/kkollsga__kglite/crates/kglite-c/src/lib.rs)<br>[crates/kglite-bolt-server/src/main.rs](../../../../sources/kkollsga__kglite/crates/kglite-bolt-server/src/main.rs)<br>[crates/kglite/src/lib.rs](../../../../sources/kkollsga__kglite/crates/kglite/src/lib.rs)<br>[crates/kglite/src/bin/bz2_bench.rs](../../../../sources/kkollsga__kglite/crates/kglite/src/bin/bz2_bench.rs)<br>[benchmarks/graphgen/src/main.rs](../../../../sources/kkollsga__kglite/benchmarks/graphgen/src/main.rs) |
| agentRuntime | 50 | [tests/fixtures/tool_baseline.json](../../../../sources/kkollsga__kglite/tests/fixtures/tool_baseline.json)<br>[tests/fixtures/okf/golden/obsidian/MEMORY.md](../../../../sources/kkollsga__kglite/tests/fixtures/okf/golden/obsidian/MEMORY.md)<br>[crates/kglite-mcp-server/src/tools.rs](../../../../sources/kkollsga__kglite/crates/kglite-mcp-server/src/tools.rs)<br>[crates/kglite-mcp-server/skills/code_graph_analysis.md](../../../../sources/kkollsga__kglite/crates/kglite-mcp-server/skills/code_graph_analysis.md)<br>[crates/kglite-mcp-server/skills/code_graph_views.md](../../../../sources/kkollsga__kglite/crates/kglite-mcp-server/skills/code_graph_views.md)<br>[crates/kglite-mcp-server/skills/cypher_query.md](../../../../sources/kkollsga__kglite/crates/kglite-mcp-server/skills/cypher_query.md)<br>[crates/kglite-mcp-server/skills/explore.md](../../../../sources/kkollsga__kglite/crates/kglite-mcp-server/skills/explore.md)<br>[crates/kglite-mcp-server/skills/graph_overview.md](../../../../sources/kkollsga__kglite/crates/kglite-mcp-server/skills/graph_overview.md) |
| mcp | 34 | [tests/test_mcp_embed.py](../../../../sources/kkollsga__kglite/tests/test_mcp_embed.py)<br>[tests/test_mcp_server_bundled_wheel.py](../../../../sources/kkollsga__kglite/tests/test_mcp_server_bundled_wheel.py)<br>[tests/test_mcp_server_smoke.py](../../../../sources/kkollsga__kglite/tests/test_mcp_server_smoke.py)<br>[tests/test_single_mcp_server.py](../../../../sources/kkollsga__kglite/tests/test_single_mcp_server.py)<br>[tests/fixtures/graph_with_duplicates_mcp.yaml](../../../../sources/kkollsga__kglite/tests/fixtures/graph_with_duplicates_mcp.yaml)<br>[tests/fixtures/graph_with_orphans_mcp.yaml](../../../../sources/kkollsga__kglite/tests/fixtures/graph_with_orphans_mcp.yaml)<br>[tests/fixtures/spatial_graph_mcp.yaml](../../../../sources/kkollsga__kglite/tests/fixtures/spatial_graph_mcp.yaml)<br>[tests/fixtures/timeseries_graph_mcp.yaml](../../../../sources/kkollsga__kglite/tests/fixtures/timeseries_graph_mcp.yaml) |
| retrieval | 261 | [tests/test_code_tree_graph_ergonomics.py](../../../../sources/kkollsga__kglite/tests/test_code_tree_graph_ergonomics.py)<br>[tests/test_disk_property_index.py](../../../../sources/kkollsga__kglite/tests/test_disk_property_index.py)<br>[tests/test_embedding_id_index.py](../../../../sources/kkollsga__kglite/tests/test_embedding_id_index.py)<br>[tests/test_embedding_integrity.py](../../../../sources/kkollsga__kglite/tests/test_embedding_integrity.py)<br>[tests/test_embedding_provenance.py](../../../../sources/kkollsga__kglite/tests/test_embedding_provenance.py)<br>[tests/test_graph_algorithms.py](../../../../sources/kkollsga__kglite/tests/test_graph_algorithms.py)<br>[tests/test_graph_extend.py](../../../../sources/kkollsga__kglite/tests/test_graph_extend.py)<br>[tests/test_graph_mutations.py](../../../../sources/kkollsga__kglite/tests/test_graph_mutations.py) |
| spec | 3 | [docs/requirements.txt](../../../../sources/kkollsga__kglite/docs/requirements.txt)<br>[docs/concepts/architecture.md](../../../../sources/kkollsga__kglite/docs/concepts/architecture.md)<br>[docs/concepts/design-decisions.md](../../../../sources/kkollsga__kglite/docs/concepts/design-decisions.md) |
| eval | 401 | [tests/__init__.py](../../../../sources/kkollsga__kglite/tests/__init__.py)<br>[tests/bench_spatial.py](../../../../sources/kkollsga__kglite/tests/bench_spatial.py)<br>[tests/benchmark_storage_modes.py](../../../../sources/kkollsga__kglite/tests/benchmark_storage_modes.py)<br>[tests/benchmark_wikidata_disk.py](../../../../sources/kkollsga__kglite/tests/benchmark_wikidata_disk.py)<br>[tests/conftest.py](../../../../sources/kkollsga__kglite/tests/conftest.py)<br>[tests/test_aggregation_perf.py](../../../../sources/kkollsga__kglite/tests/test_aggregation_perf.py)<br>[tests/test_aliases.py](../../../../sources/kkollsga__kglite/tests/test_aliases.py)<br>[tests/test_auto_vacuum.py](../../../../sources/kkollsga__kglite/tests/test_auto_vacuum.py) |
| security | 3 | [scripts/perf_audit.py](../../../../sources/kkollsga__kglite/scripts/perf_audit.py)<br>[crates/kglite-bolt-server/src/auth.rs](../../../../sources/kkollsga__kglite/crates/kglite-bolt-server/src/auth.rs)<br>[.github/SECURITY.md](../../../../sources/kkollsga__kglite/.github/SECURITY.md) |
| ci | 4 | [.github/workflows/benchmarks.yml](../../../../sources/kkollsga__kglite/.github/workflows/benchmarks.yml)<br>[.github/workflows/build_wheels.yml](../../../../sources/kkollsga__kglite/.github/workflows/build_wheels.yml)<br>[.github/workflows/ci.yml](../../../../sources/kkollsga__kglite/.github/workflows/ci.yml)<br>[.github/workflows/publish_crates.yml](../../../../sources/kkollsga__kglite/.github/workflows/publish_crates.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 1 | [CLAUDE.md](../../../../sources/kkollsga__kglite/CLAUDE.md) |
| docs | 68 | [README.md](../../../../sources/kkollsga__kglite/README.md)<br>[tests/fixtures/okf/google/README.md](../../../../sources/kkollsga__kglite/tests/fixtures/okf/google/README.md)<br>[docs/changelog.md](../../../../sources/kkollsga__kglite/docs/changelog.md)<br>[docs/conf.py](../../../../sources/kkollsga__kglite/docs/conf.py)<br>[docs/contributing.md](../../../../sources/kkollsga__kglite/docs/contributing.md)<br>[docs/index.md](../../../../sources/kkollsga__kglite/docs/index.md)<br>[docs/requirements.txt](../../../../sources/kkollsga__kglite/docs/requirements.txt)<br>[docs/schemas/extensions/csv_http_server.json](../../../../sources/kkollsga__kglite/docs/schemas/extensions/csv_http_server.json) |
| config | 12 | [Cargo.lock](../../../../sources/kkollsga__kglite/Cargo.lock)<br>[Cargo.toml](../../../../sources/kkollsga__kglite/Cargo.toml)<br>[Makefile](../../../../sources/kkollsga__kglite/Makefile)<br>[pyproject.toml](../../../../sources/kkollsga__kglite/pyproject.toml)<br>[docs/requirements.txt](../../../../sources/kkollsga__kglite/docs/requirements.txt)<br>[crates/kglite-py/Cargo.toml](../../../../sources/kkollsga__kglite/crates/kglite-py/Cargo.toml)<br>[crates/kglite-mcp-server/Cargo.toml](../../../../sources/kkollsga__kglite/crates/kglite-mcp-server/Cargo.toml)<br>[crates/kglite-c/Cargo.toml](../../../../sources/kkollsga__kglite/crates/kglite-c/Cargo.toml) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 401 | [tests/__init__.py](../../../../sources/kkollsga__kglite/tests/__init__.py)<br>[tests/bench_spatial.py](../../../../sources/kkollsga__kglite/tests/bench_spatial.py)<br>[tests/benchmark_storage_modes.py](../../../../sources/kkollsga__kglite/tests/benchmark_storage_modes.py)<br>[tests/benchmark_wikidata_disk.py](../../../../sources/kkollsga__kglite/tests/benchmark_wikidata_disk.py)<br>[tests/conftest.py](../../../../sources/kkollsga__kglite/tests/conftest.py)<br>[tests/test_aggregation_perf.py](../../../../sources/kkollsga__kglite/tests/test_aggregation_perf.py) |
| CI workflow | 4 | [.github/workflows/benchmarks.yml](../../../../sources/kkollsga__kglite/.github/workflows/benchmarks.yml)<br>[.github/workflows/build_wheels.yml](../../../../sources/kkollsga__kglite/.github/workflows/build_wheels.yml)<br>[.github/workflows/ci.yml](../../../../sources/kkollsga__kglite/.github/workflows/ci.yml)<br>[.github/workflows/publish_crates.yml](../../../../sources/kkollsga__kglite/.github/workflows/publish_crates.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 3 | [scripts/perf_audit.py](../../../../sources/kkollsga__kglite/scripts/perf_audit.py)<br>[crates/kglite-bolt-server/src/auth.rs](../../../../sources/kkollsga__kglite/crates/kglite-bolt-server/src/auth.rs)<br>[.github/SECURITY.md](../../../../sources/kkollsga__kglite/.github/SECURITY.md) |
| 에이전트 지시문 | 1 | [CLAUDE.md](../../../../sources/kkollsga__kglite/CLAUDE.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `tests/test_code_tree_graph_ergonomics.py`, `tests/test_disk_property_index.py`, `tests/test_embedding_id_index.py`.
2. entrypoint를 따라 실행 흐름 확인: `crates/kglite-py/src/lib.rs`, `crates/kglite-mcp-server/src/lib.rs`, `crates/kglite-mcp-server/src/main.rs`.
3. agent/tool runtime 매핑: `tests/fixtures/tool_baseline.json`, `tests/fixtures/okf/golden/obsidian/MEMORY.md`, `crates/kglite-mcp-server/src/tools.rs`.
4. retrieval/memory/indexing 확인: `tests/test_code_tree_graph_ergonomics.py`, `tests/test_disk_property_index.py`, `tests/test_embedding_id_index.py`.
5. test/eval 파일로 동작 검증: `tests/__init__.py`, `tests/bench_spatial.py`, `tests/benchmark_storage_modes.py`.

## 기존 레포 인사이트

LLM 위키/RAG/지식베이스 관점에서 Lightweight in memory knowledge graph with Cypher query support. 핵심 구조 신호는 Rust, pyproject.toml, Cargo.toml, Makefile, README.md, CLAUDE.md이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

mixed 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 지식/RAG 패턴 참고이고, 후속 확인 포인트는 더 깊은 구조 스캔 필요입니다.
