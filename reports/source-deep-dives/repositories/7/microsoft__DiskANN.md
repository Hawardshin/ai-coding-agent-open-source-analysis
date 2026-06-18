# microsoft/DiskANN 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

A vector indexing library to bring fast, fresh and filtered search to your database

## 요약

- 조사 단위: `sources/microsoft__DiskANN` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 1,157 files, 281 directories, depth score 115, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 retrieval=test_data/partition/id_maps/merged_index_expected_subshard-0_ids_uint32.bin, test_data/partition/id_maps/merged_index_expected_subshard-1_ids_uint32.bin, test_data/partition/id_maps/merged_index_expected_subshard-2_ids_uint32.bin이고, 의존성 단서는 opentelemetry, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 지식/RAG 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | microsoft/DiskANN |
| 주제 | LLM 위키/RAG/지식베이스 / LLM 위키/RAG/지식베이스 |
| Region | global |
| Language | Rust |
| Stars | 1851 |
| Forks | 427 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/microsoft__DiskANN](../../../../sources/microsoft__DiskANN) |
| 기존 보고서 | [reports/global-trending/repositories/microsoft__DiskANN.md](../../../global-trending/repositories/microsoft__DiskANN.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 1157 / 281 |
| 관측 최대 깊이 | 9 |
| 상위 디렉터리 | .cargo, .github, diskann, diskann-benchmark, diskann-benchmark-core, diskann-benchmark-runner, diskann-benchmark-simd, diskann-bftree, diskann-disk, diskann-garnet, diskann-label-filter, diskann-linalg, diskann-platform, diskann-providers, diskann-quantization, diskann-tools, diskann-utils, diskann-vector, diskann-wide, rfcs |
| 상위 확장자 | .rs: 715, .json: 133, .txt: 93, .md: 58, .toml: 32, .stderr: 28, .bin: 23, .yaml: 18, .index: 9, .yml: 9, .fbin: 7, (none): 6 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| .github | ci surface | 1 |
| diskann | top-level component | 1 |
| diskann-benchmark | validation surface | 1 |
| diskann-benchmark-core | validation surface | 1 |
| diskann-benchmark-runner | validation surface | 1 |
| diskann-benchmark-simd | validation surface | 1 |
| diskann-bftree | top-level component | 1 |
| diskann-disk | top-level component | 1 |
| diskann-garnet | top-level component | 1 |
| diskann-label-filter | top-level component | 1 |
| diskann-linalg | top-level component | 1 |
| diskann-platform | top-level component | 1 |
| diskann-providers | top-level component | 1 |
| diskann-quantization | top-level component | 1 |
| diskann-tools | top-level component | 1 |
| diskann-utils | top-level component | 1 |
| diskann-vector | top-level component | 1 |
| diskann-wide | top-level component | 1 |


## 실행 방식

_root manifest에서 추출된 command surface가 없습니다._


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | 없음 |
| developerSurface | 없음 |
| observability | opentelemetry |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| retrieval | [test_data/partition/id_maps/merged_index_expected_subshard-0_ids_uint32.bin](../../../../sources/microsoft__DiskANN/test_data/partition/id_maps/merged_index_expected_subshard-0_ids_uint32.bin) | retrieval signal |
| retrieval | [test_data/partition/id_maps/merged_index_expected_subshard-1_ids_uint32.bin](../../../../sources/microsoft__DiskANN/test_data/partition/id_maps/merged_index_expected_subshard-1_ids_uint32.bin) | retrieval signal |
| retrieval | [test_data/partition/id_maps/merged_index_expected_subshard-2_ids_uint32.bin](../../../../sources/microsoft__DiskANN/test_data/partition/id_maps/merged_index_expected_subshard-2_ids_uint32.bin) | retrieval signal |
| retrieval | [test_data/disk_index_search/10pts_100dim_f32_base_query.bin](../../../../sources/microsoft__DiskANN/test_data/disk_index_search/10pts_100dim_f32_base_query.bin) | retrieval signal |
| entrypoints | [vectorset/src/main.rs](../../../../sources/microsoft__DiskANN/vectorset/src/main.rs) | entrypoints signal |
| entrypoints | [diskann-tools/src/bin/compute_groundtruth.rs](../../../../sources/microsoft__DiskANN/diskann-tools/src/bin/compute_groundtruth.rs) | entrypoints signal |
| entrypoints | [diskann-tools/src/bin/compute_multivec_groundtruth.rs](../../../../sources/microsoft__DiskANN/diskann-tools/src/bin/compute_multivec_groundtruth.rs) | entrypoints signal |
| entrypoints | [diskann-tools/src/bin/compute_specificities.rs](../../../../sources/microsoft__DiskANN/diskann-tools/src/bin/compute_specificities.rs) | entrypoints signal |
| docs | [README.md](../../../../sources/microsoft__DiskANN/README.md) | docs signal |
| docs | [vectorset/README.md](../../../../sources/microsoft__DiskANN/vectorset/README.md) | docs signal |
| docs | [rfcs/README.md](../../../../sources/microsoft__DiskANN/rfcs/README.md) | docs signal |
| docs | [diskann-wide/README.md](../../../../sources/microsoft__DiskANN/diskann-wide/README.md) | docs signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 16 | [vectorset/src/main.rs](../../../../sources/microsoft__DiskANN/vectorset/src/main.rs)<br>[diskann-tools/src/bin/compute_groundtruth.rs](../../../../sources/microsoft__DiskANN/diskann-tools/src/bin/compute_groundtruth.rs)<br>[diskann-tools/src/bin/compute_multivec_groundtruth.rs](../../../../sources/microsoft__DiskANN/diskann-tools/src/bin/compute_multivec_groundtruth.rs)<br>[diskann-tools/src/bin/compute_specificities.rs](../../../../sources/microsoft__DiskANN/diskann-tools/src/bin/compute_specificities.rs)<br>[diskann-tools/src/bin/gen_associated_data_from_range.rs](../../../../sources/microsoft__DiskANN/diskann-tools/src/bin/gen_associated_data_from_range.rs)<br>[diskann-tools/src/bin/generate_minmax.rs](../../../../sources/microsoft__DiskANN/diskann-tools/src/bin/generate_minmax.rs)<br>[diskann-tools/src/bin/generate_pq.rs](../../../../sources/microsoft__DiskANN/diskann-tools/src/bin/generate_pq.rs)<br>[diskann-tools/src/bin/generate_synthetic_labels.rs](../../../../sources/microsoft__DiskANN/diskann-tools/src/bin/generate_synthetic_labels.rs) |
| agentRuntime | 12 | [agents.md](../../../../sources/microsoft__DiskANN/agents.md)<br>[diskann-wide/tools/FloatTestValues/Manifest.toml](../../../../sources/microsoft__DiskANN/diskann-wide/tools/FloatTestValues/Manifest.toml)<br>[diskann-wide/tools/FloatTestValues/Project.toml](../../../../sources/microsoft__DiskANN/diskann-wide/tools/FloatTestValues/Project.toml)<br>[diskann-wide/tools/FloatTestValues/README.md](../../../../sources/microsoft__DiskANN/diskann-wide/tools/FloatTestValues/README.md)<br>[diskann-wide/tools/FloatTestValues/src/FloatTestValues.jl](../../../../sources/microsoft__DiskANN/diskann-wide/tools/FloatTestValues/src/FloatTestValues.jl)<br>[diskann-quantization/tools/download-flatc.sh](../../../../sources/microsoft__DiskANN/diskann-quantization/tools/download-flatc.sh)<br>[diskann-providers/src/model/graph/provider/async_/memory_quant_vector_provider.rs](../../../../sources/microsoft__DiskANN/diskann-providers/src/model/graph/provider/async_/memory_quant_vector_provider.rs)<br>[diskann-providers/src/model/graph/provider/async_/memory_vector_provider.rs](../../../../sources/microsoft__DiskANN/diskann-providers/src/model/graph/provider/async_/memory_vector_provider.rs) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 295 | [test_data/partition/id_maps/merged_index_expected_subshard-0_ids_uint32.bin](../../../../sources/microsoft__DiskANN/test_data/partition/id_maps/merged_index_expected_subshard-0_ids_uint32.bin)<br>[test_data/partition/id_maps/merged_index_expected_subshard-1_ids_uint32.bin](../../../../sources/microsoft__DiskANN/test_data/partition/id_maps/merged_index_expected_subshard-1_ids_uint32.bin)<br>[test_data/partition/id_maps/merged_index_expected_subshard-2_ids_uint32.bin](../../../../sources/microsoft__DiskANN/test_data/partition/id_maps/merged_index_expected_subshard-2_ids_uint32.bin)<br>[test_data/disk_index_search/10pts_100dim_f32_base_query.bin](../../../../sources/microsoft__DiskANN/test_data/disk_index_search/10pts_100dim_f32_base_query.bin)<br>[test_data/disk_index_search/256pts_100dim_f32_truth_Index_disk.index](../../../../sources/microsoft__DiskANN/test_data/disk_index_search/256pts_100dim_f32_truth_Index_disk.index)<br>[test_data/disk_index_search/256pts_100dim_f32_truth_Index_pq_compressed.bin](../../../../sources/microsoft__DiskANN/test_data/disk_index_search/256pts_100dim_f32_truth_Index_pq_compressed.bin)<br>[test_data/disk_index_search/256pts_100dim_f32_truth_Index_pq_pivots.bin](../../../../sources/microsoft__DiskANN/test_data/disk_index_search/256pts_100dim_f32_truth_Index_pq_pivots.bin)<br>[test_data/disk_index_search/256pts_100dim_f32_truth_query_result.bin](../../../../sources/microsoft__DiskANN/test_data/disk_index_search/256pts_100dim_f32_truth_query_result.bin) |
| spec | 3 | [diskann-label-filter/inverted_index_architecture_design.md](../../../../sources/microsoft__DiskANN/diskann-label-filter/inverted_index_architecture_design.md)<br>[diskann-garnet/docs/data-design.md](../../../../sources/microsoft__DiskANN/diskann-garnet/docs/data-design.md)<br>[diskann-garnet/docs/ffi-design.rs](../../../../sources/microsoft__DiskANN/diskann-garnet/docs/ffi-design.rs) |
| eval | 566 | [test_data/delete_set_50pts.bin](../../../../sources/microsoft__DiskANN/test_data/delete_set_50pts.bin)<br>[test_data/kmeans_test_data_file.fbin](../../../../sources/microsoft__DiskANN/test_data/kmeans_test_data_file.fbin)<br>[test_data/sift/siftsmall_learn_256pts_minmax.fbin](../../../../sources/microsoft__DiskANN/test_data/sift/siftsmall_learn_256pts_minmax.fbin)<br>[test_data/sift/siftsmall_learn_256pts_normalized.fbin](../../../../sources/microsoft__DiskANN/test_data/sift/siftsmall_learn_256pts_normalized.fbin)<br>[test_data/sift/siftsmall_learn_256pts_u32_associated_data.fbin](../../../../sources/microsoft__DiskANN/test_data/sift/siftsmall_learn_256pts_u32_associated_data.fbin)<br>[test_data/sift/siftsmall_learn_256pts.fbin](../../../../sources/microsoft__DiskANN/test_data/sift/siftsmall_learn_256pts.fbin)<br>[test_data/sift/siftsmall_learn_pq_compressed.bin](../../../../sources/microsoft__DiskANN/test_data/sift/siftsmall_learn_pq_compressed.bin)<br>[test_data/sift/siftsmall_learn_pq_pivots.bin](../../../../sources/microsoft__DiskANN/test_data/sift/siftsmall_learn_pq_pivots.bin) |
| security | 1 | [SECURITY.md](../../../../sources/microsoft__DiskANN/SECURITY.md) |
| ci | 6 | [.github/workflows/ci.yml](../../../../sources/microsoft__DiskANN/.github/workflows/ci.yml)<br>[.github/workflows/disk-benchmarks-aa.yml](../../../../sources/microsoft__DiskANN/.github/workflows/disk-benchmarks-aa.yml)<br>[.github/workflows/disk-benchmarks.yml](../../../../sources/microsoft__DiskANN/.github/workflows/disk-benchmarks.yml)<br>[.github/workflows/nightly.yml](../../../../sources/microsoft__DiskANN/.github/workflows/nightly.yml)<br>[.github/workflows/publish-diskann-garnet-nuget.yml](../../../../sources/microsoft__DiskANN/.github/workflows/publish-diskann-garnet-nuget.yml)<br>[.github/workflows/publish.yml](../../../../sources/microsoft__DiskANN/.github/workflows/publish.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 1 | [agents.md](../../../../sources/microsoft__DiskANN/agents.md) |
| docs | 42 | [README.md](../../../../sources/microsoft__DiskANN/README.md)<br>[vectorset/README.md](../../../../sources/microsoft__DiskANN/vectorset/README.md)<br>[rfcs/README.md](../../../../sources/microsoft__DiskANN/rfcs/README.md)<br>[diskann-wide/README.md](../../../../sources/microsoft__DiskANN/diskann-wide/README.md)<br>[diskann-wide/tools/FloatTestValues/README.md](../../../../sources/microsoft__DiskANN/diskann-wide/tools/FloatTestValues/README.md)<br>[diskann-utils/README.md](../../../../sources/microsoft__DiskANN/diskann-utils/README.md)<br>[diskann-quantization/README.md](../../../../sources/microsoft__DiskANN/diskann-quantization/README.md)<br>[diskann-linalg/tools/LinAlg/README.md](../../../../sources/microsoft__DiskANN/diskann-linalg/tools/LinAlg/README.md) |
| config | 21 | [Cargo.lock](../../../../sources/microsoft__DiskANN/Cargo.lock)<br>[Cargo.toml](../../../../sources/microsoft__DiskANN/Cargo.toml)<br>[vectorset/Cargo.toml](../../../../sources/microsoft__DiskANN/vectorset/Cargo.toml)<br>[diskann-wide/Cargo.toml](../../../../sources/microsoft__DiskANN/diskann-wide/Cargo.toml)<br>[diskann-vector/Cargo.toml](../../../../sources/microsoft__DiskANN/diskann-vector/Cargo.toml)<br>[diskann-utils/Cargo.toml](../../../../sources/microsoft__DiskANN/diskann-utils/Cargo.toml)<br>[diskann-tools/Cargo.toml](../../../../sources/microsoft__DiskANN/diskann-tools/Cargo.toml)<br>[diskann-quantization/Cargo.toml](../../../../sources/microsoft__DiskANN/diskann-quantization/Cargo.toml) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 566 | [test_data/delete_set_50pts.bin](../../../../sources/microsoft__DiskANN/test_data/delete_set_50pts.bin)<br>[test_data/kmeans_test_data_file.fbin](../../../../sources/microsoft__DiskANN/test_data/kmeans_test_data_file.fbin)<br>[test_data/sift/siftsmall_learn_256pts_minmax.fbin](../../../../sources/microsoft__DiskANN/test_data/sift/siftsmall_learn_256pts_minmax.fbin)<br>[test_data/sift/siftsmall_learn_256pts_normalized.fbin](../../../../sources/microsoft__DiskANN/test_data/sift/siftsmall_learn_256pts_normalized.fbin)<br>[test_data/sift/siftsmall_learn_256pts_u32_associated_data.fbin](../../../../sources/microsoft__DiskANN/test_data/sift/siftsmall_learn_256pts_u32_associated_data.fbin)<br>[test_data/sift/siftsmall_learn_256pts.fbin](../../../../sources/microsoft__DiskANN/test_data/sift/siftsmall_learn_256pts.fbin) |
| CI workflow | 6 | [.github/workflows/ci.yml](../../../../sources/microsoft__DiskANN/.github/workflows/ci.yml)<br>[.github/workflows/disk-benchmarks-aa.yml](../../../../sources/microsoft__DiskANN/.github/workflows/disk-benchmarks-aa.yml)<br>[.github/workflows/disk-benchmarks.yml](../../../../sources/microsoft__DiskANN/.github/workflows/disk-benchmarks.yml)<br>[.github/workflows/nightly.yml](../../../../sources/microsoft__DiskANN/.github/workflows/nightly.yml)<br>[.github/workflows/publish-diskann-garnet-nuget.yml](../../../../sources/microsoft__DiskANN/.github/workflows/publish-diskann-garnet-nuget.yml)<br>[.github/workflows/publish.yml](../../../../sources/microsoft__DiskANN/.github/workflows/publish.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 1 | [SECURITY.md](../../../../sources/microsoft__DiskANN/SECURITY.md) |
| 에이전트 지시문 | 1 | [agents.md](../../../../sources/microsoft__DiskANN/agents.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 상위 디렉터리가 많아 모듈 경계 재확인 필요 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `test_data/partition/id_maps/merged_index_expected_subshard-0_ids_uint32.bin`, `test_data/partition/id_maps/merged_index_expected_subshard-1_ids_uint32.bin`, `test_data/partition/id_maps/merged_index_expected_subshard-2_ids_uint32.bin`.
2. entrypoint를 따라 실행 흐름 확인: `vectorset/src/main.rs`, `diskann-tools/src/bin/compute_groundtruth.rs`, `diskann-tools/src/bin/compute_multivec_groundtruth.rs`.
3. agent/tool runtime 매핑: `agents.md`, `diskann-wide/tools/FloatTestValues/Manifest.toml`, `diskann-wide/tools/FloatTestValues/Project.toml`.
4. retrieval/memory/indexing 확인: `test_data/partition/id_maps/merged_index_expected_subshard-0_ids_uint32.bin`, `test_data/partition/id_maps/merged_index_expected_subshard-1_ids_uint32.bin`, `test_data/partition/id_maps/merged_index_expected_subshard-2_ids_uint32.bin`.
5. test/eval 파일로 동작 검증: `test_data/delete_set_50pts.bin`, `test_data/kmeans_test_data_file.fbin`, `test_data/sift/siftsmall_learn_256pts_minmax.fbin`.

## 기존 레포 인사이트

LLM 위키/RAG/지식베이스 관점에서 A vector indexing library to bring fast, fresh and filtered search to your database. 핵심 구조 신호는 Rust, Cargo.toml, README.md, AGENTS.md, tests, ci이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 지식/RAG 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
