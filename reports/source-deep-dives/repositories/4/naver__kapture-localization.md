# naver/kapture-localization 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

Provide mapping and localization pipelines based on kapture format

## 요약

- 조사 단위: `sources/naver__kapture-localization` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 287 files, 78 directories, depth score 96, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 agent/tool runtime, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 retrieval=tools/kapture_image_retrieval_late_fusion.py, pipeline/kapture_pipeline_image_retrieval_benchmark_from_pairsfile.py, pipeline/kapture_pipeline_image_retrieval_benchmark.py이고, 의존성 단서는 torch, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 지식/RAG 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | naver/kapture-localization |
| 주제 | LLM 위키/RAG/지식베이스 / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | Python |
| Stars | 286 |
| Forks | 43 |
| License | BSD-3-Clause |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/naver__kapture-localization](../../../../sources/naver__kapture-localization) |
| 기존 보고서 | [reports/korea-trending/repositories/naver__kapture-localization.md](../../../korea-trending/repositories/naver__kapture-localization.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 287 / 78 |
| 관측 최대 깊이 | 11 |
| 상위 디렉터리 | .github, doc, kapture_localization, pipeline, samples, tests, tools |
| 상위 확장자 | .py: 74, .png: 66, .jpg: 62, .desc: 16, .gfeat: 16, .kpt: 16, .txt: 12, .adoc: 10, .sh: 8, (none): 5, .yml: 2 |
| 소스 패턴 | agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 3 |
| .github | ci surface | 1 |
| doc | documentation surface | 1 |
| kapture_localization | top-level component | 1 |
| pipeline | top-level component | 1 |
| samples | top-level component | 1 |
| tools | top-level component | 1 |


## 실행 방식

_root manifest에서 추출된 command surface가 없습니다._


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | torch |
| webRuntime | 없음 |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 27 | [tools/kapture_colmap_build_map.py](../../../../sources/naver__kapture-localization/tools/kapture_colmap_build_map.py)<br>[tools/kapture_colmap_build_sift_map.py](../../../../sources/naver__kapture-localization/tools/kapture_colmap_build_sift_map.py)<br>[tools/kapture_colmap_localize_localsfm.py](../../../../sources/naver__kapture-localization/tools/kapture_colmap_localize_localsfm.py)<br>[tools/kapture_colmap_localize_sift.py](../../../../sources/naver__kapture-localization/tools/kapture_colmap_localize_sift.py)<br>[tools/kapture_colmap_localize.py](../../../../sources/naver__kapture-localization/tools/kapture_colmap_localize.py)<br>[tools/kapture_compute_distance_pairs.py](../../../../sources/naver__kapture-localization/tools/kapture_compute_distance_pairs.py)<br>[tools/kapture_compute_image_pairs.py](../../../../sources/naver__kapture-localization/tools/kapture_compute_image_pairs.py)<br>[tools/kapture_compute_matches.py](../../../../sources/naver__kapture-localization/tools/kapture_compute_matches.py) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 6 | [tools/kapture_image_retrieval_late_fusion.py](../../../../sources/naver__kapture-localization/tools/kapture_image_retrieval_late_fusion.py)<br>[pipeline/kapture_pipeline_image_retrieval_benchmark_from_pairsfile.py](../../../../sources/naver__kapture-localization/pipeline/kapture_pipeline_image_retrieval_benchmark_from_pairsfile.py)<br>[pipeline/kapture_pipeline_image_retrieval_benchmark.py](../../../../sources/naver__kapture-localization/pipeline/kapture_pipeline_image_retrieval_benchmark.py)<br>[kapture_localization/image_retrieval/__init__.py](../../../../sources/naver__kapture-localization/kapture_localization/image_retrieval/__init__.py)<br>[kapture_localization/image_retrieval/fusion.py](../../../../sources/naver__kapture-localization/kapture_localization/image_retrieval/fusion.py)<br>[kapture_localization/image_retrieval/pairing.py](../../../../sources/naver__kapture-localization/kapture_localization/image_retrieval/pairing.py) |
| spec | 1 | [requirements.txt](../../../../sources/naver__kapture-localization/requirements.txt) |
| eval | 90 | [tests/path_to_kapture_localization.py](../../../../sources/naver__kapture-localization/tests/path_to_kapture_localization.py)<br>[tests/test_evaluation.py](../../../../sources/naver__kapture-localization/tests/test_evaluation.py)<br>[pipeline/kapture_pipeline_image_retrieval_benchmark_from_pairsfile.py](../../../../sources/naver__kapture-localization/pipeline/kapture_pipeline_image_retrieval_benchmark_from_pairsfile.py)<br>[pipeline/kapture_pipeline_image_retrieval_benchmark.py](../../../../sources/naver__kapture-localization/pipeline/kapture_pipeline_image_retrieval_benchmark.py)<br>[kapture_localization/evaluation.py](../../../../sources/naver__kapture-localization/kapture_localization/evaluation.py)<br>[doc/benchmark_results_aachen.adoc](../../../../sources/naver__kapture-localization/doc/benchmark_results_aachen.adoc)<br>[doc/benchmark_results_baidu.adoc](../../../../sources/naver__kapture-localization/doc/benchmark_results_baidu.adoc)<br>[doc/benchmark_results_gangnam.adoc](../../../../sources/naver__kapture-localization/doc/benchmark_results_gangnam.adoc) |
| security | 0 | 명확하지 않음 |
| ci | 2 | [.github/workflows/kapture-localization-main.yml](../../../../sources/naver__kapture-localization/.github/workflows/kapture-localization-main.yml)<br>[.github/workflows/release.yml](../../../../sources/naver__kapture-localization/.github/workflows/release.yml) |
| container | 1 | [Dockerfile](../../../../sources/naver__kapture-localization/Dockerfile) |
| instruction | 0 | 명확하지 않음 |
| docs | 122 | [README.adoc](../../../../sources/naver__kapture-localization/README.adoc)<br>[pipeline/README.adoc](../../../../sources/naver__kapture-localization/pipeline/README.adoc)<br>[doc/benchmark_results_aachen.adoc](../../../../sources/naver__kapture-localization/doc/benchmark_results_aachen.adoc)<br>[doc/benchmark_results_baidu.adoc](../../../../sources/naver__kapture-localization/doc/benchmark_results_baidu.adoc)<br>[doc/benchmark_results_gangnam.adoc](../../../../sources/naver__kapture-localization/doc/benchmark_results_gangnam.adoc)<br>[doc/benchmark_results_robotcar.adoc](../../../../sources/naver__kapture-localization/doc/benchmark_results_robotcar.adoc)<br>[doc/benchmark_results.adoc](../../../../sources/naver__kapture-localization/doc/benchmark_results.adoc)<br>[doc/benchmark.adoc](../../../../sources/naver__kapture-localization/doc/benchmark.adoc) |
| config | 1 | [requirements.txt](../../../../sources/naver__kapture-localization/requirements.txt) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 90 | [tests/path_to_kapture_localization.py](../../../../sources/naver__kapture-localization/tests/path_to_kapture_localization.py)<br>[tests/test_evaluation.py](../../../../sources/naver__kapture-localization/tests/test_evaluation.py)<br>[pipeline/kapture_pipeline_image_retrieval_benchmark_from_pairsfile.py](../../../../sources/naver__kapture-localization/pipeline/kapture_pipeline_image_retrieval_benchmark_from_pairsfile.py)<br>[pipeline/kapture_pipeline_image_retrieval_benchmark.py](../../../../sources/naver__kapture-localization/pipeline/kapture_pipeline_image_retrieval_benchmark.py)<br>[kapture_localization/evaluation.py](../../../../sources/naver__kapture-localization/kapture_localization/evaluation.py)<br>[doc/benchmark_results_aachen.adoc](../../../../sources/naver__kapture-localization/doc/benchmark_results_aachen.adoc) |
| CI workflow | 2 | [.github/workflows/kapture-localization-main.yml](../../../../sources/naver__kapture-localization/.github/workflows/kapture-localization-main.yml)<br>[.github/workflows/release.yml](../../../../sources/naver__kapture-localization/.github/workflows/release.yml) |
| 컨테이너/배포 | 1 | [Dockerfile](../../../../sources/naver__kapture-localization/Dockerfile) |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | path scan에서 primary entrypoint가 명확하지 않음 |
| operation | 없음 |
| security | security/policy 표면이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `tools/kapture_image_retrieval_late_fusion.py`, `pipeline/kapture_pipeline_image_retrieval_benchmark_from_pairsfile.py`, `pipeline/kapture_pipeline_image_retrieval_benchmark.py`.
2. agent/tool runtime 매핑: `tools/kapture_colmap_build_map.py`, `tools/kapture_colmap_build_sift_map.py`, `tools/kapture_colmap_localize_localsfm.py`.
3. retrieval/memory/indexing 확인: `tools/kapture_image_retrieval_late_fusion.py`, `pipeline/kapture_pipeline_image_retrieval_benchmark_from_pairsfile.py`, `pipeline/kapture_pipeline_image_retrieval_benchmark.py`.
4. test/eval 파일로 동작 검증: `tests/path_to_kapture_localization.py`, `tests/test_evaluation.py`, `pipeline/kapture_pipeline_image_retrieval_benchmark_from_pairsfile.py`.

## 기존 레포 인사이트

LLM 위키/RAG/지식베이스 관점에서 Provide mapping and localization pipelines based on kapture format. 핵심 구조 신호는 Python, requirements.txt, Dockerfile, LICENSE, torch, tests이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 지식/RAG 패턴 참고이고, 후속 확인 포인트는 더 깊은 구조 스캔 필요입니다.
