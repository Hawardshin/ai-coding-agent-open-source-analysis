# microsoft/DiskANN Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

A vector indexing library to bring fast, fresh and filtered search to your database

## 요약

- 조사 단위: `sources/microsoft__DiskANN` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 1,157 files, 281 directories, depth score 121, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 retrieval=test_data/partition/id_maps/merged_index_expected_subshard-0_ids_uint32.bin, test_data/partition/id_maps/merged_index_expected_subshard-1_ids_uint32.bin, test_data/partition/id_maps/merged_index_expected_subshard-2_ids_uint32.bin이고, 의존성 단서는 opentelemetry, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 knowledge/RAG pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | microsoft/DiskANN |
| Topic | LLM Wiki, RAG, and Knowledge / LLM 위키/RAG/지식베이스 |
| Region | global |
| Language | Rust |
| Stars | 1851 |
| Forks | 427 |
| License | none |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/microsoft__DiskANN](../../../../sources/microsoft__DiskANN) |
| Existing report | [reports/global-trending/repositories/microsoft__DiskANN.md](../../../global-trending/repositories/microsoft__DiskANN.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 1157 / 281 |
| Max observed depth | 9 |
| Top directories | .cargo, .github, diskann, diskann-benchmark, diskann-benchmark-core, diskann-benchmark-runner, diskann-benchmark-simd, diskann-bftree, diskann-disk, diskann-garnet, diskann-label-filter, diskann-linalg, diskann-platform, diskann-providers, diskann-quantization, diskann-tools, diskann-utils, diskann-vector, diskann-wide, rfcs |
| Top extensions | .rs: 715, .json: 133, .txt: 93, .md: 58, .toml: 32, .stderr: 28, .bin: 23, .yaml: 18, .index: 9, .yml: 9, .fbin: 7, (none): 6 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
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


## How It Runs

_No command surface extracted from root manifests._


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
| observability | opentelemetry |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
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


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 16 | [vectorset/src/main.rs](../../../../sources/microsoft__DiskANN/vectorset/src/main.rs)<br>[diskann-tools/src/bin/compute_groundtruth.rs](../../../../sources/microsoft__DiskANN/diskann-tools/src/bin/compute_groundtruth.rs)<br>[diskann-tools/src/bin/compute_multivec_groundtruth.rs](../../../../sources/microsoft__DiskANN/diskann-tools/src/bin/compute_multivec_groundtruth.rs)<br>[diskann-tools/src/bin/compute_specificities.rs](../../../../sources/microsoft__DiskANN/diskann-tools/src/bin/compute_specificities.rs)<br>[diskann-tools/src/bin/gen_associated_data_from_range.rs](../../../../sources/microsoft__DiskANN/diskann-tools/src/bin/gen_associated_data_from_range.rs)<br>[diskann-tools/src/bin/generate_minmax.rs](../../../../sources/microsoft__DiskANN/diskann-tools/src/bin/generate_minmax.rs)<br>[diskann-tools/src/bin/generate_pq.rs](../../../../sources/microsoft__DiskANN/diskann-tools/src/bin/generate_pq.rs)<br>[diskann-tools/src/bin/generate_synthetic_labels.rs](../../../../sources/microsoft__DiskANN/diskann-tools/src/bin/generate_synthetic_labels.rs) |
| agentRuntime | 12 | [agents.md](../../../../sources/microsoft__DiskANN/agents.md)<br>[diskann-wide/tools/FloatTestValues/Manifest.toml](../../../../sources/microsoft__DiskANN/diskann-wide/tools/FloatTestValues/Manifest.toml)<br>[diskann-wide/tools/FloatTestValues/Project.toml](../../../../sources/microsoft__DiskANN/diskann-wide/tools/FloatTestValues/Project.toml)<br>[diskann-wide/tools/FloatTestValues/README.md](../../../../sources/microsoft__DiskANN/diskann-wide/tools/FloatTestValues/README.md)<br>[diskann-wide/tools/FloatTestValues/src/FloatTestValues.jl](../../../../sources/microsoft__DiskANN/diskann-wide/tools/FloatTestValues/src/FloatTestValues.jl)<br>[diskann-quantization/tools/download-flatc.sh](../../../../sources/microsoft__DiskANN/diskann-quantization/tools/download-flatc.sh)<br>[diskann-providers/src/model/graph/provider/async_/memory_quant_vector_provider.rs](../../../../sources/microsoft__DiskANN/diskann-providers/src/model/graph/provider/async_/memory_quant_vector_provider.rs)<br>[diskann-providers/src/model/graph/provider/async_/memory_vector_provider.rs](../../../../sources/microsoft__DiskANN/diskann-providers/src/model/graph/provider/async_/memory_vector_provider.rs) |
| mcp | 0 | not obvious |
| retrieval | 295 | [test_data/partition/id_maps/merged_index_expected_subshard-0_ids_uint32.bin](../../../../sources/microsoft__DiskANN/test_data/partition/id_maps/merged_index_expected_subshard-0_ids_uint32.bin)<br>[test_data/partition/id_maps/merged_index_expected_subshard-1_ids_uint32.bin](../../../../sources/microsoft__DiskANN/test_data/partition/id_maps/merged_index_expected_subshard-1_ids_uint32.bin)<br>[test_data/partition/id_maps/merged_index_expected_subshard-2_ids_uint32.bin](../../../../sources/microsoft__DiskANN/test_data/partition/id_maps/merged_index_expected_subshard-2_ids_uint32.bin)<br>[test_data/disk_index_search/10pts_100dim_f32_base_query.bin](../../../../sources/microsoft__DiskANN/test_data/disk_index_search/10pts_100dim_f32_base_query.bin)<br>[test_data/disk_index_search/256pts_100dim_f32_truth_Index_disk.index](../../../../sources/microsoft__DiskANN/test_data/disk_index_search/256pts_100dim_f32_truth_Index_disk.index)<br>[test_data/disk_index_search/256pts_100dim_f32_truth_Index_pq_compressed.bin](../../../../sources/microsoft__DiskANN/test_data/disk_index_search/256pts_100dim_f32_truth_Index_pq_compressed.bin)<br>[test_data/disk_index_search/256pts_100dim_f32_truth_Index_pq_pivots.bin](../../../../sources/microsoft__DiskANN/test_data/disk_index_search/256pts_100dim_f32_truth_Index_pq_pivots.bin)<br>[test_data/disk_index_search/256pts_100dim_f32_truth_query_result.bin](../../../../sources/microsoft__DiskANN/test_data/disk_index_search/256pts_100dim_f32_truth_query_result.bin) |
| spec | 3 | [diskann-label-filter/inverted_index_architecture_design.md](../../../../sources/microsoft__DiskANN/diskann-label-filter/inverted_index_architecture_design.md)<br>[diskann-garnet/docs/data-design.md](../../../../sources/microsoft__DiskANN/diskann-garnet/docs/data-design.md)<br>[diskann-garnet/docs/ffi-design.rs](../../../../sources/microsoft__DiskANN/diskann-garnet/docs/ffi-design.rs) |
| eval | 566 | [test_data/delete_set_50pts.bin](../../../../sources/microsoft__DiskANN/test_data/delete_set_50pts.bin)<br>[test_data/kmeans_test_data_file.fbin](../../../../sources/microsoft__DiskANN/test_data/kmeans_test_data_file.fbin)<br>[test_data/sift/siftsmall_learn_256pts_minmax.fbin](../../../../sources/microsoft__DiskANN/test_data/sift/siftsmall_learn_256pts_minmax.fbin)<br>[test_data/sift/siftsmall_learn_256pts_normalized.fbin](../../../../sources/microsoft__DiskANN/test_data/sift/siftsmall_learn_256pts_normalized.fbin)<br>[test_data/sift/siftsmall_learn_256pts_u32_associated_data.fbin](../../../../sources/microsoft__DiskANN/test_data/sift/siftsmall_learn_256pts_u32_associated_data.fbin)<br>[test_data/sift/siftsmall_learn_256pts.fbin](../../../../sources/microsoft__DiskANN/test_data/sift/siftsmall_learn_256pts.fbin)<br>[test_data/sift/siftsmall_learn_pq_compressed.bin](../../../../sources/microsoft__DiskANN/test_data/sift/siftsmall_learn_pq_compressed.bin)<br>[test_data/sift/siftsmall_learn_pq_pivots.bin](../../../../sources/microsoft__DiskANN/test_data/sift/siftsmall_learn_pq_pivots.bin) |
| security | 1 | [SECURITY.md](../../../../sources/microsoft__DiskANN/SECURITY.md) |
| ci | 6 | [.github/workflows/ci.yml](../../../../sources/microsoft__DiskANN/.github/workflows/ci.yml)<br>[.github/workflows/disk-benchmarks-aa.yml](../../../../sources/microsoft__DiskANN/.github/workflows/disk-benchmarks-aa.yml)<br>[.github/workflows/disk-benchmarks.yml](../../../../sources/microsoft__DiskANN/.github/workflows/disk-benchmarks.yml)<br>[.github/workflows/nightly.yml](../../../../sources/microsoft__DiskANN/.github/workflows/nightly.yml)<br>[.github/workflows/publish-diskann-garnet-nuget.yml](../../../../sources/microsoft__DiskANN/.github/workflows/publish-diskann-garnet-nuget.yml)<br>[.github/workflows/publish.yml](../../../../sources/microsoft__DiskANN/.github/workflows/publish.yml) |
| container | 0 | not obvious |
| instruction | 1 | [agents.md](../../../../sources/microsoft__DiskANN/agents.md) |
| docs | 42 | [README.md](../../../../sources/microsoft__DiskANN/README.md)<br>[vectorset/README.md](../../../../sources/microsoft__DiskANN/vectorset/README.md)<br>[rfcs/README.md](../../../../sources/microsoft__DiskANN/rfcs/README.md)<br>[diskann-wide/README.md](../../../../sources/microsoft__DiskANN/diskann-wide/README.md)<br>[diskann-wide/tools/FloatTestValues/README.md](../../../../sources/microsoft__DiskANN/diskann-wide/tools/FloatTestValues/README.md)<br>[diskann-utils/README.md](../../../../sources/microsoft__DiskANN/diskann-utils/README.md)<br>[diskann-quantization/README.md](../../../../sources/microsoft__DiskANN/diskann-quantization/README.md)<br>[diskann-linalg/tools/LinAlg/README.md](../../../../sources/microsoft__DiskANN/diskann-linalg/tools/LinAlg/README.md) |
| config | 21 | [Cargo.lock](../../../../sources/microsoft__DiskANN/Cargo.lock)<br>[Cargo.toml](../../../../sources/microsoft__DiskANN/Cargo.toml)<br>[vectorset/Cargo.toml](../../../../sources/microsoft__DiskANN/vectorset/Cargo.toml)<br>[diskann-wide/Cargo.toml](../../../../sources/microsoft__DiskANN/diskann-wide/Cargo.toml)<br>[diskann-vector/Cargo.toml](../../../../sources/microsoft__DiskANN/diskann-vector/Cargo.toml)<br>[diskann-utils/Cargo.toml](../../../../sources/microsoft__DiskANN/diskann-utils/Cargo.toml)<br>[diskann-tools/Cargo.toml](../../../../sources/microsoft__DiskANN/diskann-tools/Cargo.toml)<br>[diskann-quantization/Cargo.toml](../../../../sources/microsoft__DiskANN/diskann-quantization/Cargo.toml) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 566 | [test_data/delete_set_50pts.bin](../../../../sources/microsoft__DiskANN/test_data/delete_set_50pts.bin)<br>[test_data/kmeans_test_data_file.fbin](../../../../sources/microsoft__DiskANN/test_data/kmeans_test_data_file.fbin)<br>[test_data/sift/siftsmall_learn_256pts_minmax.fbin](../../../../sources/microsoft__DiskANN/test_data/sift/siftsmall_learn_256pts_minmax.fbin)<br>[test_data/sift/siftsmall_learn_256pts_normalized.fbin](../../../../sources/microsoft__DiskANN/test_data/sift/siftsmall_learn_256pts_normalized.fbin)<br>[test_data/sift/siftsmall_learn_256pts_u32_associated_data.fbin](../../../../sources/microsoft__DiskANN/test_data/sift/siftsmall_learn_256pts_u32_associated_data.fbin)<br>[test_data/sift/siftsmall_learn_256pts.fbin](../../../../sources/microsoft__DiskANN/test_data/sift/siftsmall_learn_256pts.fbin) |
| CI workflows | 6 | [.github/workflows/ci.yml](../../../../sources/microsoft__DiskANN/.github/workflows/ci.yml)<br>[.github/workflows/disk-benchmarks-aa.yml](../../../../sources/microsoft__DiskANN/.github/workflows/disk-benchmarks-aa.yml)<br>[.github/workflows/disk-benchmarks.yml](../../../../sources/microsoft__DiskANN/.github/workflows/disk-benchmarks.yml)<br>[.github/workflows/nightly.yml](../../../../sources/microsoft__DiskANN/.github/workflows/nightly.yml)<br>[.github/workflows/publish-diskann-garnet-nuget.yml](../../../../sources/microsoft__DiskANN/.github/workflows/publish-diskann-garnet-nuget.yml)<br>[.github/workflows/publish.yml](../../../../sources/microsoft__DiskANN/.github/workflows/publish.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 1 | [SECURITY.md](../../../../sources/microsoft__DiskANN/SECURITY.md) |
| Agent instructions | 1 | [agents.md](../../../../sources/microsoft__DiskANN/agents.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | many top-level directories; module boundaries need review |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `test_data/partition/id_maps/merged_index_expected_subshard-0_ids_uint32.bin`, `test_data/partition/id_maps/merged_index_expected_subshard-1_ids_uint32.bin`, `test_data/partition/id_maps/merged_index_expected_subshard-2_ids_uint32.bin`.
2. Trace execution through entrypoints: `vectorset/src/main.rs`, `diskann-tools/src/bin/compute_groundtruth.rs`, `diskann-tools/src/bin/compute_multivec_groundtruth.rs`.
3. Map agent/tool runtime through: `agents.md`, `diskann-wide/tools/FloatTestValues/Manifest.toml`, `diskann-wide/tools/FloatTestValues/Project.toml`.
4. Inspect retrieval/memory/indexing through: `test_data/partition/id_maps/merged_index_expected_subshard-0_ids_uint32.bin`, `test_data/partition/id_maps/merged_index_expected_subshard-1_ids_uint32.bin`, `test_data/partition/id_maps/merged_index_expected_subshard-2_ids_uint32.bin`.
5. Verify behavior through test/eval files: `test_data/delete_set_50pts.bin`, `test_data/kmeans_test_data_file.fbin`, `test_data/sift/siftsmall_learn_256pts_minmax.fbin`.

## Existing Repository Insight

LLM 위키/RAG/지식베이스 관점에서 A vector indexing library to bring fast, fresh and filtered search to your database. 핵심 구조 신호는 Rust, Cargo.toml, README.md, AGENTS.md, tests, ci이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 knowledge/RAG pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
