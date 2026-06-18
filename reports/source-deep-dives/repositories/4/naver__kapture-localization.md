# naver/kapture-localization Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Provide mapping and localization pipelines based on kapture format

## 요약

- 조사 단위: `sources/naver__kapture-localization` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 287 files, 78 directories, depth score 102, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 agent/tool runtime, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 retrieval=tools/kapture_image_retrieval_late_fusion.py, pipeline/kapture_pipeline_image_retrieval_benchmark_from_pairsfile.py, pipeline/kapture_pipeline_image_retrieval_benchmark.py이고, 의존성 단서는 torch, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 knowledge/RAG pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | naver/kapture-localization |
| Topic | LLM Wiki, RAG, and Knowledge / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | Python |
| Stars | 286 |
| Forks | 43 |
| License | BSD-3-Clause |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/naver__kapture-localization](../../../../sources/naver__kapture-localization) |
| Existing report | [reports/korea-trending/repositories/naver__kapture-localization.md](../../../korea-trending/repositories/naver__kapture-localization.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 287 / 78 |
| Max observed depth | 11 |
| Top directories | .github, doc, kapture_localization, pipeline, samples, tests, tools |
| Top extensions | .py: 74, .png: 66, .jpg: 62, .desc: 16, .gfeat: 16, .kpt: 16, .txt: 12, .adoc: 10, .sh: 8, (none): 5, .yml: 2 |
| Source patterns | agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 3 |
| .github | ci surface | 1 |
| doc | documentation surface | 1 |
| kapture_localization | top-level component | 1 |
| pipeline | top-level component | 1 |
| samples | top-level component | 1 |
| tools | top-level component | 1 |


## How It Runs

_No command surface extracted from root manifests._


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | torch |
| webRuntime | none |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| retrieval | [tools/kapture_image_retrieval_late_fusion.py](../../../../sources/naver__kapture-localization/tools/kapture_image_retrieval_late_fusion.py) | retrieval signal |
| retrieval | [pipeline/kapture_pipeline_image_retrieval_benchmark_from_pairsfile.py](../../../../sources/naver__kapture-localization/pipeline/kapture_pipeline_image_retrieval_benchmark_from_pairsfile.py) | retrieval signal |
| retrieval | [pipeline/kapture_pipeline_image_retrieval_benchmark.py](../../../../sources/naver__kapture-localization/pipeline/kapture_pipeline_image_retrieval_benchmark.py) | retrieval signal |
| retrieval | [kapture_localization/image_retrieval/__init__.py](../../../../sources/naver__kapture-localization/kapture_localization/image_retrieval/__init__.py) | retrieval signal |
| docs | [README.adoc](../../../../sources/naver__kapture-localization/README.adoc) | docs signal |
| docs | [pipeline/README.adoc](../../../../sources/naver__kapture-localization/pipeline/README.adoc) | docs signal |
| docs | [doc/benchmark_results_aachen.adoc](../../../../sources/naver__kapture-localization/doc/benchmark_results_aachen.adoc) | docs signal |
| docs | [doc/benchmark_results_baidu.adoc](../../../../sources/naver__kapture-localization/doc/benchmark_results_baidu.adoc) | docs signal |
| eval | [tests/path_to_kapture_localization.py](../../../../sources/naver__kapture-localization/tests/path_to_kapture_localization.py) | eval signal |
| eval | [tests/test_evaluation.py](../../../../sources/naver__kapture-localization/tests/test_evaluation.py) | eval signal |
| config | [requirements.txt](../../../../sources/naver__kapture-localization/requirements.txt) | config signal |
| ci | [.github/workflows/kapture-localization-main.yml](../../../../sources/naver__kapture-localization/.github/workflows/kapture-localization-main.yml) | ci support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 27 | [tools/kapture_colmap_build_map.py](../../../../sources/naver__kapture-localization/tools/kapture_colmap_build_map.py)<br>[tools/kapture_colmap_build_sift_map.py](../../../../sources/naver__kapture-localization/tools/kapture_colmap_build_sift_map.py)<br>[tools/kapture_colmap_localize_localsfm.py](../../../../sources/naver__kapture-localization/tools/kapture_colmap_localize_localsfm.py)<br>[tools/kapture_colmap_localize_sift.py](../../../../sources/naver__kapture-localization/tools/kapture_colmap_localize_sift.py)<br>[tools/kapture_colmap_localize.py](../../../../sources/naver__kapture-localization/tools/kapture_colmap_localize.py)<br>[tools/kapture_compute_distance_pairs.py](../../../../sources/naver__kapture-localization/tools/kapture_compute_distance_pairs.py)<br>[tools/kapture_compute_image_pairs.py](../../../../sources/naver__kapture-localization/tools/kapture_compute_image_pairs.py)<br>[tools/kapture_compute_matches.py](../../../../sources/naver__kapture-localization/tools/kapture_compute_matches.py) |
| mcp | 0 | not obvious |
| retrieval | 6 | [tools/kapture_image_retrieval_late_fusion.py](../../../../sources/naver__kapture-localization/tools/kapture_image_retrieval_late_fusion.py)<br>[pipeline/kapture_pipeline_image_retrieval_benchmark_from_pairsfile.py](../../../../sources/naver__kapture-localization/pipeline/kapture_pipeline_image_retrieval_benchmark_from_pairsfile.py)<br>[pipeline/kapture_pipeline_image_retrieval_benchmark.py](../../../../sources/naver__kapture-localization/pipeline/kapture_pipeline_image_retrieval_benchmark.py)<br>[kapture_localization/image_retrieval/__init__.py](../../../../sources/naver__kapture-localization/kapture_localization/image_retrieval/__init__.py)<br>[kapture_localization/image_retrieval/fusion.py](../../../../sources/naver__kapture-localization/kapture_localization/image_retrieval/fusion.py)<br>[kapture_localization/image_retrieval/pairing.py](../../../../sources/naver__kapture-localization/kapture_localization/image_retrieval/pairing.py) |
| spec | 1 | [requirements.txt](../../../../sources/naver__kapture-localization/requirements.txt) |
| eval | 90 | [tests/path_to_kapture_localization.py](../../../../sources/naver__kapture-localization/tests/path_to_kapture_localization.py)<br>[tests/test_evaluation.py](../../../../sources/naver__kapture-localization/tests/test_evaluation.py)<br>[pipeline/kapture_pipeline_image_retrieval_benchmark_from_pairsfile.py](../../../../sources/naver__kapture-localization/pipeline/kapture_pipeline_image_retrieval_benchmark_from_pairsfile.py)<br>[pipeline/kapture_pipeline_image_retrieval_benchmark.py](../../../../sources/naver__kapture-localization/pipeline/kapture_pipeline_image_retrieval_benchmark.py)<br>[kapture_localization/evaluation.py](../../../../sources/naver__kapture-localization/kapture_localization/evaluation.py)<br>[doc/benchmark_results_aachen.adoc](../../../../sources/naver__kapture-localization/doc/benchmark_results_aachen.adoc)<br>[doc/benchmark_results_baidu.adoc](../../../../sources/naver__kapture-localization/doc/benchmark_results_baidu.adoc)<br>[doc/benchmark_results_gangnam.adoc](../../../../sources/naver__kapture-localization/doc/benchmark_results_gangnam.adoc) |
| security | 0 | not obvious |
| ci | 2 | [.github/workflows/kapture-localization-main.yml](../../../../sources/naver__kapture-localization/.github/workflows/kapture-localization-main.yml)<br>[.github/workflows/release.yml](../../../../sources/naver__kapture-localization/.github/workflows/release.yml) |
| container | 1 | [Dockerfile](../../../../sources/naver__kapture-localization/Dockerfile) |
| instruction | 0 | not obvious |
| docs | 122 | [README.adoc](../../../../sources/naver__kapture-localization/README.adoc)<br>[pipeline/README.adoc](../../../../sources/naver__kapture-localization/pipeline/README.adoc)<br>[doc/benchmark_results_aachen.adoc](../../../../sources/naver__kapture-localization/doc/benchmark_results_aachen.adoc)<br>[doc/benchmark_results_baidu.adoc](../../../../sources/naver__kapture-localization/doc/benchmark_results_baidu.adoc)<br>[doc/benchmark_results_gangnam.adoc](../../../../sources/naver__kapture-localization/doc/benchmark_results_gangnam.adoc)<br>[doc/benchmark_results_robotcar.adoc](../../../../sources/naver__kapture-localization/doc/benchmark_results_robotcar.adoc)<br>[doc/benchmark_results.adoc](../../../../sources/naver__kapture-localization/doc/benchmark_results.adoc)<br>[doc/benchmark.adoc](../../../../sources/naver__kapture-localization/doc/benchmark.adoc) |
| config | 1 | [requirements.txt](../../../../sources/naver__kapture-localization/requirements.txt) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 90 | [tests/path_to_kapture_localization.py](../../../../sources/naver__kapture-localization/tests/path_to_kapture_localization.py)<br>[tests/test_evaluation.py](../../../../sources/naver__kapture-localization/tests/test_evaluation.py)<br>[pipeline/kapture_pipeline_image_retrieval_benchmark_from_pairsfile.py](../../../../sources/naver__kapture-localization/pipeline/kapture_pipeline_image_retrieval_benchmark_from_pairsfile.py)<br>[pipeline/kapture_pipeline_image_retrieval_benchmark.py](../../../../sources/naver__kapture-localization/pipeline/kapture_pipeline_image_retrieval_benchmark.py)<br>[kapture_localization/evaluation.py](../../../../sources/naver__kapture-localization/kapture_localization/evaluation.py)<br>[doc/benchmark_results_aachen.adoc](../../../../sources/naver__kapture-localization/doc/benchmark_results_aachen.adoc) |
| CI workflows | 2 | [.github/workflows/kapture-localization-main.yml](../../../../sources/naver__kapture-localization/.github/workflows/kapture-localization-main.yml)<br>[.github/workflows/release.yml](../../../../sources/naver__kapture-localization/.github/workflows/release.yml) |
| Containers / deploy | 1 | [Dockerfile](../../../../sources/naver__kapture-localization/Dockerfile) |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | none |
| security | security/policy surface not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `tools/kapture_image_retrieval_late_fusion.py`, `pipeline/kapture_pipeline_image_retrieval_benchmark_from_pairsfile.py`, `pipeline/kapture_pipeline_image_retrieval_benchmark.py`.
2. Map agent/tool runtime through: `tools/kapture_colmap_build_map.py`, `tools/kapture_colmap_build_sift_map.py`, `tools/kapture_colmap_localize_localsfm.py`.
3. Inspect retrieval/memory/indexing through: `tools/kapture_image_retrieval_late_fusion.py`, `pipeline/kapture_pipeline_image_retrieval_benchmark_from_pairsfile.py`, `pipeline/kapture_pipeline_image_retrieval_benchmark.py`.
4. Verify behavior through test/eval files: `tests/path_to_kapture_localization.py`, `tests/test_evaluation.py`, `pipeline/kapture_pipeline_image_retrieval_benchmark_from_pairsfile.py`.

## Existing Repository Insight

LLM 위키/RAG/지식베이스 관점에서 Provide mapping and localization pipelines based on kapture format. 핵심 구조 신호는 Python, requirements.txt, Dockerfile, LICENSE, torch, tests이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 knowledge/RAG pattern reference이고, 후속 확인 포인트는 needs deeper structural scan입니다.
