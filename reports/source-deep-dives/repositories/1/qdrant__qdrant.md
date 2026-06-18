# qdrant/qdrant Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Local clone structure analysis: 1874 files, 362 directories.

## 요약

- 조사 단위: `sources/qdrant__qdrant` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 1,874 files, 362 directories, depth score 130, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

데이터/벡터 플랫폼 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 retrieval=tests/openapi/test_filter_has_vector.py, tests/openapi/test_geo_payload_index.py, tests/openapi/test_multi_vector_uint8.py이고, 의존성 단서는 next, qdrant, prometheus, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | qdrant/qdrant |
| Topic | Data and Vector Platforms / 데이터/벡터 플랫폼 |
| Region | global |
| Language | Rust |
| Stars | 32410 |
| Forks | 2391 |
| License | none |
| Maturity | high-signal |
| Evidence | deep-source+report |
| Source | [sources/qdrant__qdrant](../../../../sources/qdrant__qdrant) |
| Existing report | [reports/global-trending/repositories/qdrant__qdrant.md](../../../global-trending/repositories/qdrant__qdrant.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 1874 / 362 |
| Max observed depth | 9 |
| Top directories | .config, .github, config, docs, lib, openapi, pkg, src, tests, tools |
| Top extensions | .rs: 1391, .py: 208, .json: 59, .sh: 32, .toml: 32, .yaml: 23, .comp: 22, .md: 21, .yml: 19, .proto: 16, (none): 16, .png: 6 |
| Source patterns | cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy, ui/extension surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| lib | source boundary | 94 |
| tests | validation surface | 67 |
| docs | documentation surface | 33 |
| src | source boundary | 12 |
| .github | ci surface | 1 |
| config | top-level component | 1 |
| openapi | source boundary | 1 |
| pkg | top-level component | 1 |
| tools | top-level component | 1 |


## How It Runs

_No command surface extracted from root manifests._


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | qdrant |
| modelRuntime | none |
| webRuntime | next |
| developerSurface | none |
| observability | prometheus |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| retrieval | [tests/openapi/test_filter_has_vector.py](../../../../sources/qdrant__qdrant/tests/openapi/test_filter_has_vector.py) | retrieval signal |
| retrieval | [tests/openapi/test_geo_payload_index.py](../../../../sources/qdrant__qdrant/tests/openapi/test_geo_payload_index.py) | retrieval signal |
| retrieval | [tests/openapi/test_multi_vector_uint8.py](../../../../sources/qdrant__qdrant/tests/openapi/test_multi_vector_uint8.py) | retrieval signal |
| retrieval | [tests/openapi/test_multi_vector_unnamed.py](../../../../sources/qdrant__qdrant/tests/openapi/test_multi_vector_unnamed.py) | retrieval signal |
| entrypoints | [src/main.rs](../../../../sources/qdrant__qdrant/src/main.rs) | entrypoints signal |
| entrypoints | [lib/wal/src/bin/wal-ctl.rs](../../../../sources/qdrant__qdrant/lib/wal/src/bin/wal-ctl.rs) | entrypoints signal |
| entrypoints | [lib/storage/tests/integration/main.rs](../../../../sources/qdrant__qdrant/lib/storage/tests/integration/main.rs) | entrypoints signal |
| entrypoints | [lib/segment/tests/integration/main.rs](../../../../sources/qdrant__qdrant/lib/segment/tests/integration/main.rs) | entrypoints signal |
| container | [Dockerfile](../../../../sources/qdrant__qdrant/Dockerfile) | container signal |
| container | [tools/schema2openapi/Dockerfile](../../../../sources/qdrant__qdrant/tools/schema2openapi/Dockerfile) | container signal |
| container | [tools/compose/docker-compose.yaml](../../../../sources/qdrant__qdrant/tools/compose/docker-compose.yaml) | container signal |
| container | [tests/consensus_tests/docker-compose.yaml](../../../../sources/qdrant__qdrant/tests/consensus_tests/docker-compose.yaml) | container signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 15 | [src/main.rs](../../../../sources/qdrant__qdrant/src/main.rs)<br>[lib/wal/src/bin/wal-ctl.rs](../../../../sources/qdrant__qdrant/lib/wal/src/bin/wal-ctl.rs)<br>[lib/storage/tests/integration/main.rs](../../../../sources/qdrant__qdrant/lib/storage/tests/integration/main.rs)<br>[lib/segment/tests/integration/main.rs](../../../../sources/qdrant__qdrant/lib/segment/tests/integration/main.rs)<br>[lib/quantization/tests/integration/main.rs](../../../../sources/qdrant__qdrant/lib/quantization/tests/integration/main.rs)<br>[lib/gridstore/benches/bustle_bench/main.rs](../../../../sources/qdrant__qdrant/lib/gridstore/benches/bustle_bench/main.rs)<br>[lib/edge/publish/examples/src/bin/add-named-vector.rs](../../../../sources/qdrant__qdrant/lib/edge/publish/examples/src/bin/add-named-vector.rs)<br>[lib/edge/publish/examples/src/bin/bm25-search.rs](../../../../sources/qdrant__qdrant/lib/edge/publish/examples/src/bin/bm25-search.rs) |
| agentRuntime | 35 | [tools/cargo_cmd_arch.sh](../../../../sources/qdrant__qdrant/tools/cargo_cmd_arch.sh)<br>[tools/clean-old-rocksdb-logs.sh](../../../../sources/qdrant__qdrant/tools/clean-old-rocksdb-logs.sh)<br>[tools/codespell.toml](../../../../sources/qdrant__qdrant/tools/codespell.toml)<br>[tools/entrypoint.sh](../../../../sources/qdrant__qdrant/tools/entrypoint.sh)<br>[tools/generate_docker_compose_cluster.sh](../../../../sources/qdrant__qdrant/tools/generate_docker_compose_cluster.sh)<br>[tools/generate_openapi_models.sh](../../../../sources/qdrant__qdrant/tools/generate_openapi_models.sh)<br>[tools/integration-test-coverage.sh](../../../../sources/qdrant__qdrant/tools/integration-test-coverage.sh)<br>[tools/missed_cherry_picks.sh](../../../../sources/qdrant__qdrant/tools/missed_cherry_picks.sh) |
| mcp | 0 | not obvious |
| retrieval | 460 | [tests/openapi/test_filter_has_vector.py](../../../../sources/qdrant__qdrant/tests/openapi/test_filter_has_vector.py)<br>[tests/openapi/test_geo_payload_index.py](../../../../sources/qdrant__qdrant/tests/openapi/test_geo_payload_index.py)<br>[tests/openapi/test_multi_vector_uint8.py](../../../../sources/qdrant__qdrant/tests/openapi/test_multi_vector_uint8.py)<br>[tests/openapi/test_multi_vector_unnamed.py](../../../../sources/qdrant__qdrant/tests/openapi/test_multi_vector_unnamed.py)<br>[tests/openapi/test_multi_vector.py](../../../../sources/qdrant__qdrant/tests/openapi/test_multi_vector.py)<br>[tests/openapi/test_named_vector_crud.py](../../../../sources/qdrant__qdrant/tests/openapi/test_named_vector_crud.py)<br>[tests/openapi/test_sparse_vector_config_update.py](../../../../sources/qdrant__qdrant/tests/openapi/test_sparse_vector_config_update.py)<br>[tests/openapi/test_sparse_vector_large.py](../../../../sources/qdrant__qdrant/tests/openapi/test_sparse_vector_large.py) |
| spec | 4 | [docs/roadmap/README.md](../../../../sources/qdrant__qdrant/docs/roadmap/README.md)<br>[docs/roadmap/roadmap-2022.md](../../../../sources/qdrant__qdrant/docs/roadmap/roadmap-2022.md)<br>[docs/roadmap/roadmap-2023.md](../../../../sources/qdrant__qdrant/docs/roadmap/roadmap-2023.md)<br>[docs/roadmap/roadmap-2024.md](../../../../sources/qdrant__qdrant/docs/roadmap/roadmap-2024.md) |
| eval | 432 | [tools/integration-test-coverage.sh](../../../../sources/qdrant__qdrant/tools/integration-test-coverage.sh)<br>[tools/unit-test-coverage.sh](../../../../sources/qdrant__qdrant/tools/unit-test-coverage.sh)<br>[tests/.gitignore](../../../../sources/qdrant__qdrant/tests/.gitignore)<br>[tests/basic_api_test.sh](../../../../sources/qdrant__qdrant/tests/basic_api_test.sh)<br>[tests/basic_grpc_inference_test.sh](../../../../sources/qdrant__qdrant/tests/basic_grpc_inference_test.sh)<br>[tests/basic_grpc_test.sh](../../../../sources/qdrant__qdrant/tests/basic_grpc_test.sh)<br>[tests/basic_multivector_grpc_test.sh](../../../../sources/qdrant__qdrant/tests/basic_multivector_grpc_test.sh)<br>[tests/basic_query_grpc_test.sh](../../../../sources/qdrant__qdrant/tests/basic_query_grpc_test.sh) |
| security | 23 | [tests/consensus_tests/auth_tests/__init__.py](../../../../sources/qdrant__qdrant/tests/consensus_tests/auth_tests/__init__.py)<br>[tests/consensus_tests/auth_tests/conftest.py](../../../../sources/qdrant__qdrant/tests/consensus_tests/auth_tests/conftest.py)<br>[tests/consensus_tests/auth_tests/test_audit_telemetry.py](../../../../sources/qdrant__qdrant/tests/consensus_tests/auth_tests/test_audit_telemetry.py)<br>[tests/consensus_tests/auth_tests/test_dashboard_whitelist_bypass.py](../../../../sources/qdrant__qdrant/tests/consensus_tests/auth_tests/test_dashboard_whitelist_bypass.py)<br>[tests/consensus_tests/auth_tests/test_jwt_access.py](../../../../sources/qdrant__qdrant/tests/consensus_tests/auth_tests/test_jwt_access.py)<br>[tests/consensus_tests/auth_tests/test_jwt_validation.py](../../../../sources/qdrant__qdrant/tests/consensus_tests/auth_tests/test_jwt_validation.py)<br>[tests/consensus_tests/auth_tests/test_snapshot_upload_authorization.py](../../../../sources/qdrant__qdrant/tests/consensus_tests/auth_tests/test_snapshot_upload_authorization.py)<br>[tests/consensus_tests/auth_tests/utils.py](../../../../sources/qdrant__qdrant/tests/consensus_tests/auth_tests/utils.py) |
| ci | 16 | [.github/workflows/codespell.yml](../../../../sources/qdrant__qdrant/.github/workflows/codespell.yml)<br>[.github/workflows/coverage.yml](../../../../sources/qdrant__qdrant/.github/workflows/coverage.yml)<br>[.github/workflows/dev-docker-image-build-gpu.yml](../../../../sources/qdrant__qdrant/.github/workflows/dev-docker-image-build-gpu.yml)<br>[.github/workflows/dev-docker-image-build.yml](../../../../sources/qdrant__qdrant/.github/workflows/dev-docker-image-build.yml)<br>[.github/workflows/dev-docker-image-prune.yml](../../../../sources/qdrant__qdrant/.github/workflows/dev-docker-image-prune.yml)<br>[.github/workflows/docker-image.yml](../../../../sources/qdrant__qdrant/.github/workflows/docker-image.yml)<br>[.github/workflows/edge-py-release.yml](../../../../sources/qdrant__qdrant/.github/workflows/edge-py-release.yml)<br>[.github/workflows/edge-rust-release.yml](../../../../sources/qdrant__qdrant/.github/workflows/edge-rust-release.yml) |
| container | 4 | [Dockerfile](../../../../sources/qdrant__qdrant/Dockerfile)<br>[tools/schema2openapi/Dockerfile](../../../../sources/qdrant__qdrant/tools/schema2openapi/Dockerfile)<br>[tools/compose/docker-compose.yaml](../../../../sources/qdrant__qdrant/tools/compose/docker-compose.yaml)<br>[tests/consensus_tests/docker-compose.yaml](../../../../sources/qdrant__qdrant/tests/consensus_tests/docker-compose.yaml) |
| instruction | 0 | not obvious |
| docs | 82 | [README.md](../../../../sources/qdrant__qdrant/README.md)<br>[tests/e2e_tests/README.md](../../../../sources/qdrant__qdrant/tests/e2e_tests/README.md)<br>[lib/segment/src/index/field_index/full_text_index/stop_words/README.md](../../../../sources/qdrant__qdrant/lib/segment/src/index/field_index/full_text_index/stop_words/README.md)<br>[lib/gridstore/readme.md](../../../../sources/qdrant__qdrant/lib/gridstore/readme.md)<br>[lib/edge/README.md](../../../../sources/qdrant__qdrant/lib/edge/README.md)<br>[lib/edge/python/README.md](../../../../sources/qdrant__qdrant/lib/edge/python/README.md)<br>[lib/edge/publish/README.md](../../../../sources/qdrant__qdrant/lib/edge/publish/README.md)<br>[lib/collection/README.md](../../../../sources/qdrant__qdrant/lib/collection/README.md) |
| config | 30 | [Cargo.lock](../../../../sources/qdrant__qdrant/Cargo.lock)<br>[Cargo.toml](../../../../sources/qdrant__qdrant/Cargo.toml)<br>[tools/schema2openapi/package.json](../../../../sources/qdrant__qdrant/tools/schema2openapi/package.json)<br>[tests/pyproject.toml](../../../../sources/qdrant__qdrant/tests/pyproject.toml)<br>[tests/uv.lock](../../../../sources/qdrant__qdrant/tests/uv.lock)<br>[lib/wal/Cargo.toml](../../../../sources/qdrant__qdrant/lib/wal/Cargo.toml)<br>[lib/trififo/Cargo.toml](../../../../sources/qdrant__qdrant/lib/trififo/Cargo.toml)<br>[lib/storage/Cargo.toml](../../../../sources/qdrant__qdrant/lib/storage/Cargo.toml) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 432 | [tools/integration-test-coverage.sh](../../../../sources/qdrant__qdrant/tools/integration-test-coverage.sh)<br>[tools/unit-test-coverage.sh](../../../../sources/qdrant__qdrant/tools/unit-test-coverage.sh)<br>[tests/.gitignore](../../../../sources/qdrant__qdrant/tests/.gitignore)<br>[tests/basic_api_test.sh](../../../../sources/qdrant__qdrant/tests/basic_api_test.sh)<br>[tests/basic_grpc_inference_test.sh](../../../../sources/qdrant__qdrant/tests/basic_grpc_inference_test.sh)<br>[tests/basic_grpc_test.sh](../../../../sources/qdrant__qdrant/tests/basic_grpc_test.sh) |
| CI workflows | 16 | [.github/workflows/codespell.yml](../../../../sources/qdrant__qdrant/.github/workflows/codespell.yml)<br>[.github/workflows/coverage.yml](../../../../sources/qdrant__qdrant/.github/workflows/coverage.yml)<br>[.github/workflows/dev-docker-image-build-gpu.yml](../../../../sources/qdrant__qdrant/.github/workflows/dev-docker-image-build-gpu.yml)<br>[.github/workflows/dev-docker-image-build.yml](../../../../sources/qdrant__qdrant/.github/workflows/dev-docker-image-build.yml)<br>[.github/workflows/dev-docker-image-prune.yml](../../../../sources/qdrant__qdrant/.github/workflows/dev-docker-image-prune.yml)<br>[.github/workflows/docker-image.yml](../../../../sources/qdrant__qdrant/.github/workflows/docker-image.yml) |
| Containers / deploy | 4 | [Dockerfile](../../../../sources/qdrant__qdrant/Dockerfile)<br>[tools/schema2openapi/Dockerfile](../../../../sources/qdrant__qdrant/tools/schema2openapi/Dockerfile)<br>[tools/compose/docker-compose.yaml](../../../../sources/qdrant__qdrant/tools/compose/docker-compose.yaml)<br>[tests/consensus_tests/docker-compose.yaml](../../../../sources/qdrant__qdrant/tests/consensus_tests/docker-compose.yaml) |
| Security / policy | 23 | [tests/consensus_tests/auth_tests/__init__.py](../../../../sources/qdrant__qdrant/tests/consensus_tests/auth_tests/__init__.py)<br>[tests/consensus_tests/auth_tests/conftest.py](../../../../sources/qdrant__qdrant/tests/consensus_tests/auth_tests/conftest.py)<br>[tests/consensus_tests/auth_tests/test_audit_telemetry.py](../../../../sources/qdrant__qdrant/tests/consensus_tests/auth_tests/test_audit_telemetry.py)<br>[tests/consensus_tests/auth_tests/test_dashboard_whitelist_bypass.py](../../../../sources/qdrant__qdrant/tests/consensus_tests/auth_tests/test_dashboard_whitelist_bypass.py)<br>[tests/consensus_tests/auth_tests/test_jwt_access.py](../../../../sources/qdrant__qdrant/tests/consensus_tests/auth_tests/test_jwt_access.py)<br>[tests/consensus_tests/auth_tests/test_jwt_validation.py](../../../../sources/qdrant__qdrant/tests/consensus_tests/auth_tests/test_jwt_validation.py) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `tests/openapi/test_filter_has_vector.py`, `tests/openapi/test_geo_payload_index.py`, `tests/openapi/test_multi_vector_uint8.py`.
2. Trace execution through entrypoints: `src/main.rs`, `lib/wal/src/bin/wal-ctl.rs`, `lib/storage/tests/integration/main.rs`.
3. Map agent/tool runtime through: `tools/cargo_cmd_arch.sh`, `tools/clean-old-rocksdb-logs.sh`, `tools/codespell.toml`.
4. Inspect retrieval/memory/indexing through: `tests/openapi/test_filter_has_vector.py`, `tests/openapi/test_geo_payload_index.py`, `tests/openapi/test_multi_vector_uint8.py`.
5. Verify behavior through test/eval files: `tools/integration-test-coverage.sh`, `tools/unit-test-coverage.sh`, `tests/.gitignore`.

## Existing Repository Insight

데이터/벡터 플랫폼 관점에서 Local clone structure analysis 1874 files, 362 directories.. 핵심 구조 신호는 Rust, Cargo.toml, Dockerfile, README.md, LICENSE, next이며, deep-source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 데이터/벡터 플랫폼 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 license metadata missing입니다.
