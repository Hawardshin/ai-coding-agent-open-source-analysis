# qdrant/qdrant 구조 분석

생성일: 2026-06-17T22:41:11.818Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/qdrant__qdrant |
| remote | https://github.com/qdrant/qdrant |
| HEAD | 44ad62f (2026-06-03) Bump version to 1.18.2 (#9290) |
| branch | master |
| groups | adjacent-tech-50, previous-clone-inventory-107 |
| files | 1874 |
| dirs | 362 |
| stack | Node/TypeScript/JavaScript, Python, Rust |

## 구조 해석

- 핵심 구현은 `src/`, `lib/`, `core/` 계열 디렉터리에 집중되어 있다.
- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- 테스트 파일이 충분히 노출되어 기능 검증과 회귀 검증 흐름을 추적할 수 있다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `Getting Started`, `Agent Skills`, `Client-Server`, `Clients`, `Qdrant Edge`, `Where Do I Go from Here?`, `Demo Projects`, `Discover Semantic Text Search 🔍`, `Explore Similar Image Search - Food Discovery 🍕`, `Master Extreme Classification - E-Commerce Product Categorization 📺`, `API`, `REST`, `gRPC`, `Features`, `Dense, Sparse, and Multi Vector Search`, `Filtering on Payload`, `Hybrid Search`, `Vector Quantization and On-Disk Storage`

> <p align="center" <picture <source media="(prefers color scheme dark)" srcset="https //github.com/qdrant/qdrant/raw/master/docs/logo dark.svg" <source media="(prefers color scheme light)" srcset="https //github.com/qdrant/qdrant/raw/master/docs/logo light.svg" <img height="100" alt="Qdrant" src="https //github.com/qdrant/qdrant/raw/master/docs/logo.svg" </picture </p <p align="center" <b Vector Search Engine for the next generation of AI applications</b </p <p align=center <a href="https //github.com/qdrant/qdrant/actions/workflows/rust.yml" <img src="https //img.shields.io/github/actions/workflow/status/qdrant/qdrant/rust.yml?style=flat square" alt="Tests status" </a <a href="https //api.qdrant.tech/" <img src="https //img.shields.io/badge/Docs OpenAPI%203.0 success?style=flat square" alt="OpenAPI Docs" </a <a href="https //github.com/qdrant/qdrant/blob/master/LICENSE" <img src="https /

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .config | dir |
| .dockerignore | file |
| .gitattributes | file |
| .github | dir |
| .gitignore | file |
| .rusty-hook.toml | file |
| Cargo.lock | file |
| Cargo.toml | file |
| clippy.toml | file |
| config | dir |
| CONTRIBUTING.md | file |
| Dockerfile | file |
| docs | dir |
| lib | dir |
| LICENSE | file |
| openapi | dir |
| pkg | dir |
| README.md | file |
| rustfmt.toml | file |
| shell.nix | file |
| src | dir |
| tests | dir |
| tools | dir |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| lib/ | 1381 |
| tests/ | 231 |
| src/ | 114 |
| docs/ | 70 |
| .github/ | 27 |
| tools/ | 20 |
| (root) | 13 |
| openapi/ | 11 |
| config/ | 4 |
| pkg/ | 2 |
| .config/ | 1 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| src/ | 114 | preferred |
| lib/ | 1381 | preferred |
| docs/ | 70 | preferred |
| tests/ | 231 | preferred |
| tools/ | 20 | preferred |
| lib/segment/ | 596 | large |
| lib/segment/src/ | 544 | large |
| lib/collection/ | 210 | large |
| lib/collection/src/ | 189 | large |
| lib/common/ | 163 | large |
| lib/common/common/ | 128 | large |
| lib/edge/ | 113 | large |
| tests/consensus_tests/ | 93 | large |
| tests/openapi/ | 87 | large |
| lib/edge/python/ | 66 | large |
| lib/shard/ | 64 | large |
| lib/shard/src/ | 62 | large |
| docs/redoc/ | 56 | large |
| lib/quantization/ | 56 | large |
| lib/storage/ | 49 | large |
| lib/storage/src/ | 46 | large |
| src/common/ | 46 | large |
| lib/api/ | 37 | large |
| lib/api/src/ | 35 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `Cargo.toml`
- `Dockerfile`
- `lib/api/Cargo.toml`
- `lib/bm25/Cargo.toml`
- `lib/collection/Cargo.toml`
- `lib/common/cancel/Cargo.toml`
- `lib/common/common/Cargo.toml`
- `lib/common/dataset/Cargo.toml`
- `lib/common/io_bridge_object_store/Cargo.toml`
- `lib/common/issues/Cargo.toml`
- `lib/edge/Cargo.toml`
- `lib/edge/publish/Cargo.toml`
- `lib/edge/publish/examples/Cargo.toml`
- `lib/edge/python/Cargo.toml`
- `lib/edge/python/codegen/Cargo.toml`
- `lib/edge/python/pyproject.toml`
- `lib/gpu/Cargo.toml`
- `lib/gridstore/Cargo.toml`
- `lib/macros/Cargo.toml`
- `lib/posting_list/Cargo.toml`
- `lib/quantization/Cargo.toml`
- `lib/segment/Cargo.toml`
- `lib/shard/Cargo.toml`
- `lib/sparse/Cargo.toml`
- `lib/storage/Cargo.toml`
- `lib/trififo/Cargo.toml`
- `lib/wal/Cargo.toml`
- `tests/pyproject.toml`
- `tests/uv.lock`
- `tools/schema2openapi/Dockerfile`
- `tools/schema2openapi/package.json`

### package.json

| 경로 | 이름 | scripts | deps |
| --- | --- | --- | --- |
| tools/schema2openapi/package.json | tools | convert | @openapi-contrib/json-schema-to-openapi-schema |

### pyproject.toml

| 경로 | 이름 | poetry | uv | ruff | pytest |
| --- | --- | --- | --- | --- | --- |
| lib/edge/python/pyproject.toml |  | false | false | false | false |
| tests/pyproject.toml | qdrant-test-deps | false | true | false | true |

### Cargo.toml

| 경로 | 이름 | workspace | members |
| --- | --- | --- | --- |
| Cargo.toml | qdrant | true |      "lib/api", "lib/bm25",     "lib/collection",     "lib/common/*",     "lib/edge",     "lib/edge/python",     "lib/edge/python/codegen",     "lib/gridstore",     "lib/macros",   |
| lib/api/Cargo.toml | api | false |  |
| lib/bm25/Cargo.toml | bm25 | false |  |
| lib/collection/Cargo.toml | collection | false |  |
| lib/common/cancel/Cargo.toml | cancel | false |  |
| lib/common/common/Cargo.toml | common | false |  |
| lib/common/dataset/Cargo.toml | dataset | false |  |
| lib/common/io_bridge_object_store/Cargo.toml | io_bridge_object_store | false |  |
| lib/common/issues/Cargo.toml | issues | false |  |
| lib/edge/Cargo.toml | edge | false |  |
| lib/edge/publish/Cargo.toml |  | true |  "examples", "qdrant-edge"  |
| lib/edge/publish/examples/Cargo.toml | examples | false |  |
| lib/edge/python/Cargo.toml | qdrant-edge-py | false |  |
| lib/edge/python/codegen/Cargo.toml | edge-py-codegen | false |  |
| lib/gpu/Cargo.toml | gpu | false |  |
| lib/gridstore/Cargo.toml | gridstore | false |  |
| lib/macros/Cargo.toml | macros | false |  |
| lib/posting_list/Cargo.toml | posting_list | false |  |
| lib/quantization/Cargo.toml | quantization | false |  |
| lib/segment/Cargo.toml | segment | false |  |
| lib/shard/Cargo.toml | shard | false |  |
| lib/sparse/Cargo.toml | sparse | false |  |
| lib/storage/Cargo.toml | storage | false |  |
| lib/trififo/Cargo.toml | trififo | false |  |
| lib/wal/Cargo.toml | wal | false |  |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `CONTRIBUTING.md`
- `README.md`
- `docs/CODE_OF_CONDUCT.md`
- `docs/CONTRIBUTING.md`
- `docs/DEVELOPMENT.md`
- `docs/imgs/call-graph-profile.png`
- `docs/imgs/ci-coverage-report.png`
- `docs/imgs/flamegraph-profile.png`
- `docs/imgs/local-coverage-report.png`
- `docs/logo-dark.svg`
- `docs/logo-light.svg`
- `docs/logo.svg`
- `docs/redoc/.gitignore`
- `docs/redoc/default_version.js`
- `docs/redoc/index.html`
- `docs/redoc/master/openapi.json`
- `docs/redoc/v0.10.0/openapi.json`
- `docs/redoc/v0.10.1/openapi.json`
- `docs/redoc/v0.10.2/openapi.json`
- `docs/redoc/v0.10.3/openapi.json`
- `docs/redoc/v0.10.4/openapi.json`
- `docs/redoc/v0.10.5/openapi.json`
- `docs/redoc/v0.11.0/openapi.json`
- `docs/redoc/v0.11.1/openapi.json`
- `docs/redoc/v0.11.2/openapi.json`
- `docs/redoc/v0.11.3/openapi.json`
- `docs/redoc/v0.11.4/openapi.json`
- `docs/redoc/v0.11.5/openapi.json`
- `docs/redoc/v0.11.6/openapi.json`
- `docs/redoc/v0.11.7/openapi.json`
- `docs/redoc/v0.4.2/openapi.json`
- `docs/redoc/v0.5.0/openapi.json`
- `docs/redoc/v0.5.1/openapi.json`
- `docs/redoc/v0.6.0/openapi.json`
- `docs/redoc/v0.7.0/openapi.json`
- `docs/redoc/v0.8.0/openapi.json`
- `docs/redoc/v0.8.1/openapi.json`
- `docs/redoc/v0.8.2/openapi.json`
- `docs/redoc/v0.8.3/openapi.json`
- `docs/redoc/v0.8.4/openapi.json`
- `docs/redoc/v0.8.5/openapi.json`
- `docs/redoc/v0.8.6/openapi.json`
- `docs/redoc/v0.9.0/openapi.json`
- `docs/redoc/v0.9.1/openapi.json`
- `docs/redoc/v1.0.1/openapi.json`
- `docs/redoc/v1.0.2/openapi.json`
- `docs/redoc/v1.0.3/openapi.json`
- `docs/redoc/v1.1.0/openapi.json`
- `docs/redoc/v1.1.1/openapi.json`
- `docs/redoc/v1.1.2/openapi.json`
- ... 30 more

### 에이전트 지침 후보

_없음_

### 스펙/템플릿/명령/스킬 후보

_없음_

## 테스트 / CI / 배포 표면

### 테스트 후보

- `lib/collection/src/collection_manager/tests/mod.rs`
- `lib/collection/src/collection_manager/tests/test_search_aggregation.rs`
- `lib/collection/src/tests/deferred_points_dedup.rs`
- `lib/collection/src/tests/deferred_points_tests.rs`
- `lib/collection/src/tests/fix_payload_indices.rs`
- `lib/collection/src/tests/fixtures.rs`
- `lib/collection/src/tests/hw_metrics.rs`
- `lib/collection/src/tests/mod.rs`
- `lib/collection/src/tests/payload.rs`
- `lib/collection/src/tests/points_dedup.rs`
- `lib/collection/src/tests/query_prefetch_offset_limit.rs`
- `lib/collection/src/tests/sha_256_test.rs`
- `lib/collection/src/tests/shard_query.rs`
- `lib/collection/src/tests/shard_telemetry.rs`
- `lib/collection/src/tests/snapshot_test.rs`
- `lib/collection/src/tests/sparse_vectors_validation_tests.rs`
- `lib/collection/src/tests/wal_recovery_test.rs`
- `lib/collection/tests/integration/collection_restore_test.rs`
- `lib/collection/tests/integration/collection_test.rs`
- `lib/collection/tests/integration/common/mod.rs`
- `lib/collection/tests/integration/continuous_snapshot_test.rs`
- `lib/collection/tests/integration/distance_matrix_test.rs`
- `lib/collection/tests/integration/grouping_test.rs`
- `lib/collection/tests/integration/lookup_test.rs`
- `lib/collection/tests/integration/main.rs`
- `lib/collection/tests/integration/multi_vec_test.rs`
- `lib/collection/tests/integration/pagination_test.rs`
- `lib/collection/tests/integration/snapshot_recovery_test.rs`
- `lib/common/io_bridge_object_store/src/tests/integration.rs`
- `lib/common/io_bridge_object_store/src/tests/mod.rs`
- `lib/common/io_bridge_object_store/src/tests/rustfs.rs`
- `lib/edge/tests/wal_options.rs`
- `lib/quantization/tests/integration/empty_storage.rs`
- `lib/quantization/tests/integration/load_validation.rs`
- `lib/quantization/tests/integration/main.rs`
- `lib/quantization/tests/integration/metrics.rs`
- `lib/quantization/tests/integration/stop_condition.rs`
- `lib/quantization/tests/integration/test_avx2.rs`
- `lib/quantization/tests/integration/test_binary.rs`
- `lib/quantization/tests/integration/test_binary_encodings.rs`
- `lib/quantization/tests/integration/test_neon.rs`
- `lib/quantization/tests/integration/test_pq.rs`
- `lib/quantization/tests/integration/test_simple.rs`
- `lib/quantization/tests/integration/test_sse.rs`
- `lib/quantization/tests/integration/test_tq.rs`
- `lib/segment/src/index/field_index/full_text_index/tests/mod.rs`
- `lib/segment/src/index/field_index/full_text_index/tests/test_congruence.rs`
- `lib/segment/src/index/field_index/tests/histogram_i64_tests.rs`
- `lib/segment/src/index/field_index/tests/histogram_test_utils.rs`
- `lib/segment/src/index/field_index/tests/histogram_tests.rs`
- `lib/segment/src/index/field_index/tests/mod.rs`
- `lib/segment/src/index/hnsw_index/gpu/shaders/tests/test_candidates_heap.comp`
- `lib/segment/src/index/hnsw_index/gpu/shaders/tests/test_heuristic.comp`
- `lib/segment/src/index/hnsw_index/gpu/shaders/tests/test_hnsw_search.comp`
- `lib/segment/src/index/hnsw_index/gpu/shaders/tests/test_nearest_heap.comp`
- `lib/segment/src/index/hnsw_index/gpu/shaders/tests/test_vector_storage.comp`
- `lib/segment/src/index/hnsw_index/tests/mod.rs`
- `lib/segment/src/index/hnsw_index/tests/test_compact_graph_layer.rs`
- `lib/segment/src/index/hnsw_index/tests/test_graph_connectivity.rs`
- `lib/segment/src/segment/tests/mod.rs`
- `lib/segment/src/segment/tests/test_immutable_payload_index_files.rs`
- `lib/segment/src/segment/tests/test_vector_name_ops.rs`
- `lib/segment/src/vector_storage/tests/async_raw_scorer.rs`
- `lib/segment/src/vector_storage/tests/custom_query_scorer_equivalency.rs`
- `lib/segment/src/vector_storage/tests/mod.rs`
- `lib/segment/src/vector_storage/tests/test_appendable_dense_vector_storage.rs`
- `lib/segment/src/vector_storage/tests/test_appendable_multi_dense_vector_storage.rs`
- `lib/segment/src/vector_storage/tests/test_appendable_sparse_vector_storage.rs`
- `lib/segment/src/vector_storage/tests/utils.rs`
- `lib/segment/tests/integration/batch_search_test.rs`
- `lib/segment/tests/integration/byte_storage_hnsw_test.rs`
- `lib/segment/tests/integration/byte_storage_quantization_test.rs`
- `lib/segment/tests/integration/disbalanced_vectors_test.rs`
- `lib/segment/tests/integration/exact_search_test.rs`
- `lib/segment/tests/integration/fail_recovery_test.rs`
- `lib/segment/tests/integration/filtering_context_check.rs`
- `lib/segment/tests/integration/filtrable_hnsw_test.rs`
- `lib/segment/tests/integration/fixtures/mod.rs`
- `lib/segment/tests/integration/fixtures/segment.rs`
- `lib/segment/tests/integration/gpu_hnsw_test.rs`
- ... 40 more

### CI/Docker 후보

- `.github/workflows/codespell.yml`
- `.github/workflows/coverage.yml`
- `.github/workflows/dev-docker-image-build-gpu.yml`
- `.github/workflows/dev-docker-image-build.yml`
- `.github/workflows/dev-docker-image-prune.yml`
- `.github/workflows/docker-image.yml`
- `.github/workflows/edge-py-release.yml`
- `.github/workflows/edge-rust-release.yml`
- `.github/workflows/edge-test.yml`
- `.github/workflows/integration-tests.yml`
- `.github/workflows/io-bridge-object-store-tests.yml`
- `.github/workflows/long-e2e-tests.yml`
- `.github/workflows/release-artifacts.yml`
- `.github/workflows/rust-gpu.yml`
- `.github/workflows/rust-lint.yml`
- `.github/workflows/rust.yml`
- `Dockerfile`
- `tests/consensus_tests/docker-compose.yaml`
- `tests/e2e_tests/test_data/tls-compose.yaml`
- `tools/compose/docker-compose.yaml`
- `tools/schema2openapi/Dockerfile`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .rs | 1391 |
| .py | 208 |
| .json | 59 |
| .sh | 32 |
| .toml | 32 |
| .yaml | 23 |
| .comp | 22 |
| .md | 21 |
| .yml | 19 |
| .proto | 16 |
| .gitignore | 7 |
| .png | 6 |
| .c | 4 |
| .svg | 4 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `src/ 내부 책임 분리`
- `lib/ 내부 책임 분리`
- `docs/ 내부 책임 분리`
- `tests/ 내부 책임 분리`
- `tools/ 내부 책임 분리`
- `Cargo.toml 실행 스크립트와 패키지 경계`
- `Dockerfile 실행 스크립트와 패키지 경계`
- `lib/api/Cargo.toml 실행 스크립트와 패키지 경계`
- `lib/bm25/Cargo.toml 실행 스크립트와 패키지 경계`
- `lib/collection/Cargo.toml 실행 스크립트와 패키지 경계`

