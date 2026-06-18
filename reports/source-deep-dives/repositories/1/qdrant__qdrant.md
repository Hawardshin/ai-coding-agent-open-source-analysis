# qdrant/qdrant 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

Local clone structure analysis: 1874 files, 362 directories.

## 요약

- 조사 단위: `sources/qdrant__qdrant` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 1,874 files, 362 directories, depth score 118, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

데이터/벡터 플랫폼 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 retrieval=tests/openapi/test_filter_has_vector.py, tests/openapi/test_geo_payload_index.py, tests/openapi/test_multi_vector_uint8.py이고, 의존성 단서는 next, qdrant, prometheus, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | qdrant/qdrant |
| 주제 | 데이터/벡터 플랫폼 / 데이터/벡터 플랫폼 |
| Region | global |
| Language | Rust |
| Stars | 32410 |
| Forks | 2391 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 심층 소스+보고서 |
| 소스 | [sources/qdrant__qdrant](../../../../sources/qdrant__qdrant) |
| 기존 보고서 | [reports/global-trending/repositories/qdrant__qdrant.md](../../../global-trending/repositories/qdrant__qdrant.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 1874 / 362 |
| 관측 최대 깊이 | 9 |
| 상위 디렉터리 | .config, .github, config, docs, lib, openapi, pkg, src, tests, tools |
| 상위 확장자 | .rs: 1391, .py: 208, .json: 59, .sh: 32, .toml: 32, .yaml: 23, .comp: 22, .md: 21, .yml: 19, .proto: 16, (none): 16, .png: 6 |
| 소스 패턴 | cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy, ui/extension surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
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


## 실행 방식

_root manifest에서 추출된 command surface가 없습니다._


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | qdrant |
| modelRuntime | 없음 |
| webRuntime | next |
| developerSurface | 없음 |
| observability | prometheus |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 15 | [src/main.rs](../../../../sources/qdrant__qdrant/src/main.rs)<br>[lib/wal/src/bin/wal-ctl.rs](../../../../sources/qdrant__qdrant/lib/wal/src/bin/wal-ctl.rs)<br>[lib/storage/tests/integration/main.rs](../../../../sources/qdrant__qdrant/lib/storage/tests/integration/main.rs)<br>[lib/segment/tests/integration/main.rs](../../../../sources/qdrant__qdrant/lib/segment/tests/integration/main.rs)<br>[lib/quantization/tests/integration/main.rs](../../../../sources/qdrant__qdrant/lib/quantization/tests/integration/main.rs)<br>[lib/gridstore/benches/bustle_bench/main.rs](../../../../sources/qdrant__qdrant/lib/gridstore/benches/bustle_bench/main.rs)<br>[lib/edge/publish/examples/src/bin/add-named-vector.rs](../../../../sources/qdrant__qdrant/lib/edge/publish/examples/src/bin/add-named-vector.rs)<br>[lib/edge/publish/examples/src/bin/bm25-search.rs](../../../../sources/qdrant__qdrant/lib/edge/publish/examples/src/bin/bm25-search.rs) |
| agentRuntime | 35 | [tools/cargo_cmd_arch.sh](../../../../sources/qdrant__qdrant/tools/cargo_cmd_arch.sh)<br>[tools/clean-old-rocksdb-logs.sh](../../../../sources/qdrant__qdrant/tools/clean-old-rocksdb-logs.sh)<br>[tools/codespell.toml](../../../../sources/qdrant__qdrant/tools/codespell.toml)<br>[tools/entrypoint.sh](../../../../sources/qdrant__qdrant/tools/entrypoint.sh)<br>[tools/generate_docker_compose_cluster.sh](../../../../sources/qdrant__qdrant/tools/generate_docker_compose_cluster.sh)<br>[tools/generate_openapi_models.sh](../../../../sources/qdrant__qdrant/tools/generate_openapi_models.sh)<br>[tools/integration-test-coverage.sh](../../../../sources/qdrant__qdrant/tools/integration-test-coverage.sh)<br>[tools/missed_cherry_picks.sh](../../../../sources/qdrant__qdrant/tools/missed_cherry_picks.sh) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 460 | [tests/openapi/test_filter_has_vector.py](../../../../sources/qdrant__qdrant/tests/openapi/test_filter_has_vector.py)<br>[tests/openapi/test_geo_payload_index.py](../../../../sources/qdrant__qdrant/tests/openapi/test_geo_payload_index.py)<br>[tests/openapi/test_multi_vector_uint8.py](../../../../sources/qdrant__qdrant/tests/openapi/test_multi_vector_uint8.py)<br>[tests/openapi/test_multi_vector_unnamed.py](../../../../sources/qdrant__qdrant/tests/openapi/test_multi_vector_unnamed.py)<br>[tests/openapi/test_multi_vector.py](../../../../sources/qdrant__qdrant/tests/openapi/test_multi_vector.py)<br>[tests/openapi/test_named_vector_crud.py](../../../../sources/qdrant__qdrant/tests/openapi/test_named_vector_crud.py)<br>[tests/openapi/test_sparse_vector_config_update.py](../../../../sources/qdrant__qdrant/tests/openapi/test_sparse_vector_config_update.py)<br>[tests/openapi/test_sparse_vector_large.py](../../../../sources/qdrant__qdrant/tests/openapi/test_sparse_vector_large.py) |
| spec | 4 | [docs/roadmap/README.md](../../../../sources/qdrant__qdrant/docs/roadmap/README.md)<br>[docs/roadmap/roadmap-2022.md](../../../../sources/qdrant__qdrant/docs/roadmap/roadmap-2022.md)<br>[docs/roadmap/roadmap-2023.md](../../../../sources/qdrant__qdrant/docs/roadmap/roadmap-2023.md)<br>[docs/roadmap/roadmap-2024.md](../../../../sources/qdrant__qdrant/docs/roadmap/roadmap-2024.md) |
| eval | 432 | [tools/integration-test-coverage.sh](../../../../sources/qdrant__qdrant/tools/integration-test-coverage.sh)<br>[tools/unit-test-coverage.sh](../../../../sources/qdrant__qdrant/tools/unit-test-coverage.sh)<br>[tests/.gitignore](../../../../sources/qdrant__qdrant/tests/.gitignore)<br>[tests/basic_api_test.sh](../../../../sources/qdrant__qdrant/tests/basic_api_test.sh)<br>[tests/basic_grpc_inference_test.sh](../../../../sources/qdrant__qdrant/tests/basic_grpc_inference_test.sh)<br>[tests/basic_grpc_test.sh](../../../../sources/qdrant__qdrant/tests/basic_grpc_test.sh)<br>[tests/basic_multivector_grpc_test.sh](../../../../sources/qdrant__qdrant/tests/basic_multivector_grpc_test.sh)<br>[tests/basic_query_grpc_test.sh](../../../../sources/qdrant__qdrant/tests/basic_query_grpc_test.sh) |
| security | 23 | [tests/consensus_tests/auth_tests/__init__.py](../../../../sources/qdrant__qdrant/tests/consensus_tests/auth_tests/__init__.py)<br>[tests/consensus_tests/auth_tests/conftest.py](../../../../sources/qdrant__qdrant/tests/consensus_tests/auth_tests/conftest.py)<br>[tests/consensus_tests/auth_tests/test_audit_telemetry.py](../../../../sources/qdrant__qdrant/tests/consensus_tests/auth_tests/test_audit_telemetry.py)<br>[tests/consensus_tests/auth_tests/test_dashboard_whitelist_bypass.py](../../../../sources/qdrant__qdrant/tests/consensus_tests/auth_tests/test_dashboard_whitelist_bypass.py)<br>[tests/consensus_tests/auth_tests/test_jwt_access.py](../../../../sources/qdrant__qdrant/tests/consensus_tests/auth_tests/test_jwt_access.py)<br>[tests/consensus_tests/auth_tests/test_jwt_validation.py](../../../../sources/qdrant__qdrant/tests/consensus_tests/auth_tests/test_jwt_validation.py)<br>[tests/consensus_tests/auth_tests/test_snapshot_upload_authorization.py](../../../../sources/qdrant__qdrant/tests/consensus_tests/auth_tests/test_snapshot_upload_authorization.py)<br>[tests/consensus_tests/auth_tests/utils.py](../../../../sources/qdrant__qdrant/tests/consensus_tests/auth_tests/utils.py) |
| ci | 16 | [.github/workflows/codespell.yml](../../../../sources/qdrant__qdrant/.github/workflows/codespell.yml)<br>[.github/workflows/coverage.yml](../../../../sources/qdrant__qdrant/.github/workflows/coverage.yml)<br>[.github/workflows/dev-docker-image-build-gpu.yml](../../../../sources/qdrant__qdrant/.github/workflows/dev-docker-image-build-gpu.yml)<br>[.github/workflows/dev-docker-image-build.yml](../../../../sources/qdrant__qdrant/.github/workflows/dev-docker-image-build.yml)<br>[.github/workflows/dev-docker-image-prune.yml](../../../../sources/qdrant__qdrant/.github/workflows/dev-docker-image-prune.yml)<br>[.github/workflows/docker-image.yml](../../../../sources/qdrant__qdrant/.github/workflows/docker-image.yml)<br>[.github/workflows/edge-py-release.yml](../../../../sources/qdrant__qdrant/.github/workflows/edge-py-release.yml)<br>[.github/workflows/edge-rust-release.yml](../../../../sources/qdrant__qdrant/.github/workflows/edge-rust-release.yml) |
| container | 4 | [Dockerfile](../../../../sources/qdrant__qdrant/Dockerfile)<br>[tools/schema2openapi/Dockerfile](../../../../sources/qdrant__qdrant/tools/schema2openapi/Dockerfile)<br>[tools/compose/docker-compose.yaml](../../../../sources/qdrant__qdrant/tools/compose/docker-compose.yaml)<br>[tests/consensus_tests/docker-compose.yaml](../../../../sources/qdrant__qdrant/tests/consensus_tests/docker-compose.yaml) |
| instruction | 0 | 명확하지 않음 |
| docs | 82 | [README.md](../../../../sources/qdrant__qdrant/README.md)<br>[tests/e2e_tests/README.md](../../../../sources/qdrant__qdrant/tests/e2e_tests/README.md)<br>[lib/segment/src/index/field_index/full_text_index/stop_words/README.md](../../../../sources/qdrant__qdrant/lib/segment/src/index/field_index/full_text_index/stop_words/README.md)<br>[lib/gridstore/readme.md](../../../../sources/qdrant__qdrant/lib/gridstore/readme.md)<br>[lib/edge/README.md](../../../../sources/qdrant__qdrant/lib/edge/README.md)<br>[lib/edge/python/README.md](../../../../sources/qdrant__qdrant/lib/edge/python/README.md)<br>[lib/edge/publish/README.md](../../../../sources/qdrant__qdrant/lib/edge/publish/README.md)<br>[lib/collection/README.md](../../../../sources/qdrant__qdrant/lib/collection/README.md) |
| config | 30 | [Cargo.lock](../../../../sources/qdrant__qdrant/Cargo.lock)<br>[Cargo.toml](../../../../sources/qdrant__qdrant/Cargo.toml)<br>[tools/schema2openapi/package.json](../../../../sources/qdrant__qdrant/tools/schema2openapi/package.json)<br>[tests/pyproject.toml](../../../../sources/qdrant__qdrant/tests/pyproject.toml)<br>[tests/uv.lock](../../../../sources/qdrant__qdrant/tests/uv.lock)<br>[lib/wal/Cargo.toml](../../../../sources/qdrant__qdrant/lib/wal/Cargo.toml)<br>[lib/trififo/Cargo.toml](../../../../sources/qdrant__qdrant/lib/trififo/Cargo.toml)<br>[lib/storage/Cargo.toml](../../../../sources/qdrant__qdrant/lib/storage/Cargo.toml) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 432 | [tools/integration-test-coverage.sh](../../../../sources/qdrant__qdrant/tools/integration-test-coverage.sh)<br>[tools/unit-test-coverage.sh](../../../../sources/qdrant__qdrant/tools/unit-test-coverage.sh)<br>[tests/.gitignore](../../../../sources/qdrant__qdrant/tests/.gitignore)<br>[tests/basic_api_test.sh](../../../../sources/qdrant__qdrant/tests/basic_api_test.sh)<br>[tests/basic_grpc_inference_test.sh](../../../../sources/qdrant__qdrant/tests/basic_grpc_inference_test.sh)<br>[tests/basic_grpc_test.sh](../../../../sources/qdrant__qdrant/tests/basic_grpc_test.sh) |
| CI workflow | 16 | [.github/workflows/codespell.yml](../../../../sources/qdrant__qdrant/.github/workflows/codespell.yml)<br>[.github/workflows/coverage.yml](../../../../sources/qdrant__qdrant/.github/workflows/coverage.yml)<br>[.github/workflows/dev-docker-image-build-gpu.yml](../../../../sources/qdrant__qdrant/.github/workflows/dev-docker-image-build-gpu.yml)<br>[.github/workflows/dev-docker-image-build.yml](../../../../sources/qdrant__qdrant/.github/workflows/dev-docker-image-build.yml)<br>[.github/workflows/dev-docker-image-prune.yml](../../../../sources/qdrant__qdrant/.github/workflows/dev-docker-image-prune.yml)<br>[.github/workflows/docker-image.yml](../../../../sources/qdrant__qdrant/.github/workflows/docker-image.yml) |
| 컨테이너/배포 | 4 | [Dockerfile](../../../../sources/qdrant__qdrant/Dockerfile)<br>[tools/schema2openapi/Dockerfile](../../../../sources/qdrant__qdrant/tools/schema2openapi/Dockerfile)<br>[tools/compose/docker-compose.yaml](../../../../sources/qdrant__qdrant/tools/compose/docker-compose.yaml)<br>[tests/consensus_tests/docker-compose.yaml](../../../../sources/qdrant__qdrant/tests/consensus_tests/docker-compose.yaml) |
| 보안/정책 | 23 | [tests/consensus_tests/auth_tests/__init__.py](../../../../sources/qdrant__qdrant/tests/consensus_tests/auth_tests/__init__.py)<br>[tests/consensus_tests/auth_tests/conftest.py](../../../../sources/qdrant__qdrant/tests/consensus_tests/auth_tests/conftest.py)<br>[tests/consensus_tests/auth_tests/test_audit_telemetry.py](../../../../sources/qdrant__qdrant/tests/consensus_tests/auth_tests/test_audit_telemetry.py)<br>[tests/consensus_tests/auth_tests/test_dashboard_whitelist_bypass.py](../../../../sources/qdrant__qdrant/tests/consensus_tests/auth_tests/test_dashboard_whitelist_bypass.py)<br>[tests/consensus_tests/auth_tests/test_jwt_access.py](../../../../sources/qdrant__qdrant/tests/consensus_tests/auth_tests/test_jwt_access.py)<br>[tests/consensus_tests/auth_tests/test_jwt_validation.py](../../../../sources/qdrant__qdrant/tests/consensus_tests/auth_tests/test_jwt_validation.py) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `tests/openapi/test_filter_has_vector.py`, `tests/openapi/test_geo_payload_index.py`, `tests/openapi/test_multi_vector_uint8.py`.
2. entrypoint를 따라 실행 흐름 확인: `src/main.rs`, `lib/wal/src/bin/wal-ctl.rs`, `lib/storage/tests/integration/main.rs`.
3. agent/tool runtime 매핑: `tools/cargo_cmd_arch.sh`, `tools/clean-old-rocksdb-logs.sh`, `tools/codespell.toml`.
4. retrieval/memory/indexing 확인: `tests/openapi/test_filter_has_vector.py`, `tests/openapi/test_geo_payload_index.py`, `tests/openapi/test_multi_vector_uint8.py`.
5. test/eval 파일로 동작 검증: `tools/integration-test-coverage.sh`, `tools/unit-test-coverage.sh`, `tests/.gitignore`.

## 기존 레포 인사이트

데이터/벡터 플랫폼 관점에서 Local clone structure analysis 1874 files, 362 directories.. 핵심 구조 신호는 Rust, Cargo.toml, Dockerfile, README.md, LICENSE, next이며, 심층 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 데이터/벡터 플랫폼 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 라이선스 메타데이터 없음입니다.
