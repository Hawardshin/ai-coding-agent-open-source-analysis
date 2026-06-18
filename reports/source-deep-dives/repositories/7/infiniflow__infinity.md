# infiniflow/infinity Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

The AI-native database built for LLM applications, providing incredibly fast hybrid search of dense vector, sparse vector, tensor (multi-vector), and full-text.

## 요약

- 조사 단위: `sources/infiniflow__infinity` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 4,038 files, 386 directories, depth score 118, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 retrieval=tools/generate_embedding_parquet.py, tools/generate_index_scan.py, tools/generate_wiki_embedding_plus.py이고, 의존성 단서는 pydantic, qdrant, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 knowledge/RAG pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | infiniflow/infinity |
| Topic | LLM Wiki, RAG, and Knowledge / LLM 위키/RAG/지식베이스 |
| Region | global |
| Language | C++ |
| Stars | 4571 |
| Forks | 426 |
| License | none |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/infiniflow__infinity](../../../../sources/infiniflow__infinity) |
| Existing report | [reports/global-trending/repositories/infiniflow__infinity.md](../../../global-trending/repositories/infiniflow__infinity.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 4038 / 386 |
| Max observed depth | 8 |
| Top directories | .github, .hooks, benchmark, client, cmake, conf, docs, example, go, gui, ports, python, resource, scripts, src, test, third_party, thrift, tools |
| Top extensions | .cpp: 1139, .cppm: 817, .h: 563, .py: 270, .c: 231, .slt: 166, .toml: 91, .s: 74, .asm: 58, .tsx: 58, .hpp: 55, .go: 49 |
| Source patterns | cli-first, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 15 |
| src | source boundary | 7 |
| .github | ci surface | 1 |
| benchmark | validation surface | 1 |
| client | source boundary | 1 |
| cmake | top-level component | 1 |
| conf | top-level component | 1 |
| example | top-level component | 1 |
| go | top-level component | 1 |
| gui | top-level component | 1 |
| ports | top-level component | 1 |
| python | top-level component | 1 |
| resource | top-level component | 1 |
| scripts | top-level component | 1 |
| test | validation surface | 1 |
| third_party | top-level component | 1 |
| thrift | top-level component | 1 |
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
| webRuntime | none |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| retrieval | [tools/generate_embedding_parquet.py](../../../../sources/infiniflow__infinity/tools/generate_embedding_parquet.py) | retrieval signal |
| retrieval | [tools/generate_index_scan.py](../../../../sources/infiniflow__infinity/tools/generate_index_scan.py) | retrieval signal |
| retrieval | [tools/generate_wiki_embedding_plus.py](../../../../sources/infiniflow__infinity/tools/generate_wiki_embedding_plus.py) | retrieval signal |
| retrieval | [tools/generate_wiki_embedding.py](../../../../sources/infiniflow__infinity/tools/generate_wiki_embedding.py) | retrieval signal |
| entrypoints | [src/bin/compilation_config.cppm.in](../../../../sources/infiniflow__infinity/src/bin/compilation_config.cppm.in) | entrypoints signal |
| entrypoints | [src/bin/infinity_core.cppm](../../../../sources/infiniflow__infinity/src/bin/infinity_core.cppm) | entrypoints signal |
| entrypoints | [src/bin/infinity_main.cpp](../../../../sources/infiniflow__infinity/src/bin/infinity_main.cpp) | entrypoints signal |
| entrypoints | [src/bin/infinity.cppm](../../../../sources/infiniflow__infinity/src/bin/infinity.cppm) | entrypoints signal |
| docs | [README.md](../../../../sources/infiniflow__infinity/README.md) | docs signal |
| docs | [tools/README.md](../../../../sources/infiniflow__infinity/tools/README.md) | docs signal |
| docs | [third_party/zsv/README.md](../../../../sources/infiniflow__infinity/third_party/zsv/README.md) | docs signal |
| docs | [third_party/xor_singleheader/README.md](../../../../sources/infiniflow__infinity/third_party/xor_singleheader/README.md) | docs signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 4 | [src/bin/compilation_config.cppm.in](../../../../sources/infiniflow__infinity/src/bin/compilation_config.cppm.in)<br>[src/bin/infinity_core.cppm](../../../../sources/infiniflow__infinity/src/bin/infinity_core.cppm)<br>[src/bin/infinity_main.cpp](../../../../sources/infiniflow__infinity/src/bin/infinity_main.cpp)<br>[src/bin/infinity.cppm](../../../../sources/infiniflow__infinity/src/bin/infinity.cppm) |
| agentRuntime | 595 | [AGENTS.md](../../../../sources/infiniflow__infinity/AGENTS.md)<br>[tools/clear_s3_bucket.py](../../../../sources/infiniflow__infinity/tools/clear_s3_bucket.py)<br>[tools/gdb.py](../../../../sources/infiniflow__infinity/tools/gdb.py)<br>[tools/generate_aggregate.py](../../../../sources/infiniflow__infinity/tools/generate_aggregate.py)<br>[tools/generate_big_point_query_test_fastroughfilter.py](../../../../sources/infiniflow__infinity/tools/generate_big_point_query_test_fastroughfilter.py)<br>[tools/generate_big_sparse.py](../../../../sources/infiniflow__infinity/tools/generate_big_sparse.py)<br>[tools/generate_big.py](../../../../sources/infiniflow__infinity/tools/generate_big.py)<br>[tools/generate_bvecs.py](../../../../sources/infiniflow__infinity/tools/generate_bvecs.py) |
| mcp | 0 | not obvious |
| retrieval | 391 | [tools/generate_embedding_parquet.py](../../../../sources/infiniflow__infinity/tools/generate_embedding_parquet.py)<br>[tools/generate_index_scan.py](../../../../sources/infiniflow__infinity/tools/generate_index_scan.py)<br>[tools/generate_wiki_embedding_plus.py](../../../../sources/infiniflow__infinity/tools/generate_wiki_embedding_plus.py)<br>[tools/generate_wiki_embedding.py](../../../../sources/infiniflow__infinity/tools/generate_wiki_embedding.py)<br>[third_party/zsv/src/vector_delim.c](../../../../sources/infiniflow__infinity/third_party/zsv/src/vector_delim.c)<br>[third_party/pgm/include/pgm/pgm_index_dynamic.hpp](../../../../sources/infiniflow__infinity/third_party/pgm/include/pgm/pgm_index_dynamic.hpp)<br>[third_party/pgm/include/pgm/pgm_index_variants.hpp](../../../../sources/infiniflow__infinity/third_party/pgm/include/pgm/pgm_index_variants.hpp)<br>[third_party/pgm/include/pgm/pgm_index.hpp](../../../../sources/infiniflow__infinity/third_party/pgm/include/pgm/pgm_index.hpp) |
| spec | 0 | not obvious |
| eval | 904 | [run_snapshot_stress_test.py](../../../../sources/infiniflow__infinity/run_snapshot_stress_test.py)<br>[tools/generate_big_point_query_test_fastroughfilter.py](../../../../sources/infiniflow__infinity/tools/generate_big_point_query_test_fastroughfilter.py)<br>[tools/generate_emvb_test_data_2.py](../../../../sources/infiniflow__infinity/tools/generate_emvb_test_data_2.py)<br>[tools/generate_emvb_test_data.py](../../../../sources/infiniflow__infinity/tools/generate_emvb_test_data.py)<br>[tools/generate_test_parquet.py](../../../../sources/infiniflow__infinity/tools/generate_test_parquet.py)<br>[tools/run_benchmark.py](../../../../sources/infiniflow__infinity/tools/run_benchmark.py)<br>[tools/run_cluster_test.py](../../../../sources/infiniflow__infinity/tools/run_cluster_test.py)<br>[tools/run_parallel_test_continuous.py](../../../../sources/infiniflow__infinity/tools/run_parallel_test_continuous.py) |
| security | 2 | [gui/lib/auth.ts](../../../../sources/infiniflow__infinity/gui/lib/auth.ts)<br>`gui/app/api/auth/[...nextauth]/route.ts` |
| ci | 5 | [.github/workflows/release.yml](../../../../sources/infiniflow__infinity/.github/workflows/release.yml)<br>[.github/workflows/slow_tests.yml](../../../../sources/infiniflow__infinity/.github/workflows/slow_tests.yml)<br>[.github/workflows/tests.yml](../../../../sources/infiniflow__infinity/.github/workflows/tests.yml)<br>[.github/workflows/x64-arm64-libstdc++.modules.json](../../../../sources/infiniflow__infinity/.github/workflows/x64-arm64-libstdc++.modules.json)<br>[.github/workflows/x64-x64-libstdc++.modules.json](../../../../sources/infiniflow__infinity/.github/workflows/x64-x64-libstdc++.modules.json) |
| container | 5 | [scripts/Dockerfile_infinity](../../../../sources/infiniflow__infinity/scripts/Dockerfile_infinity)<br>[scripts/Dockerfile_infinity_builder_opencloudos](../../../../sources/infiniflow__infinity/scripts/Dockerfile_infinity_builder_opencloudos)<br>[scripts/Dockerfile_infinity_builder_ubuntu22](../../../../sources/infiniflow__infinity/scripts/Dockerfile_infinity_builder_ubuntu22)<br>[scripts/Dockerfile_infinity_builder_ubuntu22_arm64](../../../../sources/infiniflow__infinity/scripts/Dockerfile_infinity_builder_ubuntu22_arm64)<br>[scripts/Dockerfile_infinity_opencloudos](../../../../sources/infiniflow__infinity/scripts/Dockerfile_infinity_opencloudos) |
| instruction | 2 | [AGENTS.md](../../../../sources/infiniflow__infinity/AGENTS.md)<br>[.github/copilot-instructions.md](../../../../sources/infiniflow__infinity/.github/copilot-instructions.md) |
| docs | 41 | [README.md](../../../../sources/infiniflow__infinity/README.md)<br>[tools/README.md](../../../../sources/infiniflow__infinity/tools/README.md)<br>[third_party/zsv/README.md](../../../../sources/infiniflow__infinity/third_party/zsv/README.md)<br>[third_party/xor_singleheader/README.md](../../../../sources/infiniflow__infinity/third_party/xor_singleheader/README.md)<br>[third_party/mlas/README.md](../../../../sources/infiniflow__infinity/third_party/mlas/README.md)<br>[third_party/minio-cpp/README.md](../../../../sources/infiniflow__infinity/third_party/minio-cpp/README.md)<br>[third_party/eigen-3.4.0/README.md](../../../../sources/infiniflow__infinity/third_party/eigen-3.4.0/README.md)<br>[third_party/curlpp/Readme.md](../../../../sources/infiniflow__infinity/third_party/curlpp/Readme.md) |
| config | 5 | [pyproject.toml](../../../../sources/infiniflow__infinity/pyproject.toml)<br>[uv.lock](../../../../sources/infiniflow__infinity/uv.lock)<br>[gui/package.json](../../../../sources/infiniflow__infinity/gui/package.json)<br>[gui/tsconfig.json](../../../../sources/infiniflow__infinity/gui/tsconfig.json)<br>[go/go.mod](../../../../sources/infiniflow__infinity/go/go.mod) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 904 | [run_snapshot_stress_test.py](../../../../sources/infiniflow__infinity/run_snapshot_stress_test.py)<br>[tools/generate_big_point_query_test_fastroughfilter.py](../../../../sources/infiniflow__infinity/tools/generate_big_point_query_test_fastroughfilter.py)<br>[tools/generate_emvb_test_data_2.py](../../../../sources/infiniflow__infinity/tools/generate_emvb_test_data_2.py)<br>[tools/generate_emvb_test_data.py](../../../../sources/infiniflow__infinity/tools/generate_emvb_test_data.py)<br>[tools/generate_test_parquet.py](../../../../sources/infiniflow__infinity/tools/generate_test_parquet.py)<br>[tools/run_benchmark.py](../../../../sources/infiniflow__infinity/tools/run_benchmark.py) |
| CI workflows | 5 | [.github/workflows/release.yml](../../../../sources/infiniflow__infinity/.github/workflows/release.yml)<br>[.github/workflows/slow_tests.yml](../../../../sources/infiniflow__infinity/.github/workflows/slow_tests.yml)<br>[.github/workflows/tests.yml](../../../../sources/infiniflow__infinity/.github/workflows/tests.yml)<br>[.github/workflows/x64-arm64-libstdc++.modules.json](../../../../sources/infiniflow__infinity/.github/workflows/x64-arm64-libstdc++.modules.json)<br>[.github/workflows/x64-x64-libstdc++.modules.json](../../../../sources/infiniflow__infinity/.github/workflows/x64-x64-libstdc++.modules.json) |
| Containers / deploy | 5 | [scripts/Dockerfile_infinity](../../../../sources/infiniflow__infinity/scripts/Dockerfile_infinity)<br>[scripts/Dockerfile_infinity_builder_opencloudos](../../../../sources/infiniflow__infinity/scripts/Dockerfile_infinity_builder_opencloudos)<br>[scripts/Dockerfile_infinity_builder_ubuntu22](../../../../sources/infiniflow__infinity/scripts/Dockerfile_infinity_builder_ubuntu22)<br>[scripts/Dockerfile_infinity_builder_ubuntu22_arm64](../../../../sources/infiniflow__infinity/scripts/Dockerfile_infinity_builder_ubuntu22_arm64)<br>[scripts/Dockerfile_infinity_opencloudos](../../../../sources/infiniflow__infinity/scripts/Dockerfile_infinity_opencloudos) |
| Security / policy | 2 | [gui/lib/auth.ts](../../../../sources/infiniflow__infinity/gui/lib/auth.ts)<br>`gui/app/api/auth/[...nextauth]/route.ts` |
| Agent instructions | 2 | [AGENTS.md](../../../../sources/infiniflow__infinity/AGENTS.md)<br>[.github/copilot-instructions.md](../../../../sources/infiniflow__infinity/.github/copilot-instructions.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | many top-level directories; module boundaries need review |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `tools/generate_embedding_parquet.py`, `tools/generate_index_scan.py`, `tools/generate_wiki_embedding_plus.py`.
2. Trace execution through entrypoints: `src/bin/compilation_config.cppm.in`, `src/bin/infinity_core.cppm`, `src/bin/infinity_main.cpp`.
3. Map agent/tool runtime through: `AGENTS.md`, `tools/clear_s3_bucket.py`, `tools/gdb.py`.
4. Inspect retrieval/memory/indexing through: `tools/generate_embedding_parquet.py`, `tools/generate_index_scan.py`, `tools/generate_wiki_embedding_plus.py`.
5. Verify behavior through test/eval files: `run_snapshot_stress_test.py`, `tools/generate_big_point_query_test_fastroughfilter.py`, `tools/generate_emvb_test_data_2.py`.

## Existing Repository Insight

LLM 위키/RAG/지식베이스 관점에서 The AI native database built for LLM applications, providing incredibly fast hybrid search of dense vector, sparse vecto. 핵심 구조 신호는 C++, pyproject.toml, README.md, AGENTS.md, LICENSE, pydantic이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 knowledge/RAG pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
