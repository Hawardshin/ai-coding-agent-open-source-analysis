# naver/kapture 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

kapture is a file format as well as a set of tools for manipulating datasets, and in particular Visual Localization and Structure from Motion data.

## 요약

- 조사 단위: `sources/naver__kapture` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 609 files, 225 directories, depth score 95, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 retrieval=samples/maupertuis_openMVG/ChateauMaupertuisTest/reconstruction_global/global_relative_rotation_pose_graph_final, samples/maupertuis_openMVG/ChateauMaupertuisTest/reconstruction_global/global_relative_rotation_pose_graph_final.svg, samples/maupertuis_openMVG/ChateauMaupertuisTest/reconstruction_global/global_relative_rotation_pose_graph.svg이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 지식/RAG 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | naver/kapture |
| 주제 | LLM 위키/RAG/지식베이스 / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | Python |
| Stars | 541 |
| Forks | 71 |
| License | BSD-3-Clause |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/naver__kapture](../../../../sources/naver__kapture) |
| 기존 보고서 | [reports/korea-trending/repositories/naver__kapture.md](../../../korea-trending/repositories/naver__kapture.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 609 / 225 |
| 관측 최대 깊이 | 10 |
| 상위 디렉터리 | .github, assets, dataset, doc, docker, kapture, samples, tests, tools |
| 상위 확장자 | .txt: 161, .py: 132, .jpg: 107, .kpt: 32, .depth: 27, .png: 22, .desc: 15, .matches: 15, (none): 13, .svg: 12, .json: 10, .ply: 10 |
| 소스 패턴 | cli-first, agent/tool runtime, retrieval/vector path, eval/test harness, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 23 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| dataset | top-level component | 1 |
| doc | documentation surface | 1 |
| docker | documentation surface | 1 |
| kapture | top-level component | 1 |
| samples | top-level component | 1 |
| tools | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| build | Makefile | build | make build |
| utility | Makefile | install | make install |
| serve-dev | Makefile | install_dev | make install_dev |
| container | Makefile | docker | make docker |
| quality | Makefile | check-docker | make check-docker |
| utility | Makefile | README.md | make README.md |
| quality | Makefile | check-asciidoctor | make check-asciidoctor |
| quality | Makefile | check-pandoc | make check-pandoc |
| utility | Makefile | clean | make clean |
| utility | Makefile | all | make all |
| test | Makefile | unittests | make unittests |
| utility | pyproject.toml | kapture_data_date_ranges | kapture_data_date_ranges |
| utility | pyproject.toml | kapture_download_dataset | kapture_download_dataset |
| utility | pyproject.toml | kapture_extract_exif | kapture_extract_exif |
| utility | pyproject.toml | kapture_export_colmap | kapture_export_colmap |
| container | pyproject.toml | kapture_export_image_list | kapture_export_image_list |
| utility | pyproject.toml | kapture_export_ply | kapture_export_ply |
| utility | pyproject.toml | kapture_export_LTVL2020 | kapture_export_LTVL2020 |
| utility | pyproject.toml | kapture_export_openmvg | kapture_export_openmvg |
| utility | pyproject.toml | kapture_export_opensfm | kapture_export_opensfm |
| utility | pyproject.toml | kapture_export_ETH_MS_LTVL | kapture_export_ETH_MS_LTVL |
| container | pyproject.toml | kapture_export_depth_images | kapture_export_depth_images |
| utility | pyproject.toml | kapture_export_4seasons_pairs | kapture_export_4seasons_pairs |
| utility | pyproject.toml | kapture_import_nvm | kapture_import_nvm |
| utility | pyproject.toml | kapture_import_utbm | kapture_import_utbm |
| utility | pyproject.toml | kapture_import_RIO10 | kapture_import_RIO10 |
| utility | pyproject.toml | kapture_import_silda | kapture_import_silda |
| utility | pyproject.toml | kapture_import_colmap | kapture_import_colmap |
| utility | pyproject.toml | kapture_import_rosbag | kapture_import_rosbag |
| utility | pyproject.toml | kapture_import_7scenes | kapture_import_7scenes |
| build | pyproject.toml | kapture_import_bundler | kapture_import_bundler |


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
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| retrieval | [samples/maupertuis_openMVG/ChateauMaupertuisTest/reconstruction_global/global_relative_rotation_pose_graph_final](../../../../sources/naver__kapture/samples/maupertuis_openMVG/ChateauMaupertuisTest/reconstruction_global/global_relative_rotation_pose_graph_final) | retrieval signal |
| retrieval | [samples/maupertuis_openMVG/ChateauMaupertuisTest/reconstruction_global/global_relative_rotation_pose_graph_final.svg](../../../../sources/naver__kapture/samples/maupertuis_openMVG/ChateauMaupertuisTest/reconstruction_global/global_relative_rotation_pose_graph_final.svg) | retrieval signal |
| retrieval | [samples/maupertuis_openMVG/ChateauMaupertuisTest/reconstruction_global/global_relative_rotation_pose_graph.svg](../../../../sources/naver__kapture/samples/maupertuis_openMVG/ChateauMaupertuisTest/reconstruction_global/global_relative_rotation_pose_graph.svg) | retrieval signal |
| retrieval | [samples/maupertuis_openMVG/ChateauMaupertuisTest/reconstruction_global/global_relative_rotation_view_graph.svg](../../../../sources/naver__kapture/samples/maupertuis_openMVG/ChateauMaupertuisTest/reconstruction_global/global_relative_rotation_view_graph.svg) | retrieval signal |
| docs | [README.adoc](../../../../sources/naver__kapture/README.adoc) | docs signal |
| docs | [doc/datasets.adoc](../../../../sources/naver__kapture/doc/datasets.adoc) | docs signal |
| docs | [doc/image_keypoints.jpg](../../../../sources/naver__kapture/doc/image_keypoints.jpg) | docs signal |
| docs | [doc/installation.adoc](../../../../sources/naver__kapture/doc/installation.adoc) | docs signal |
| eval | [tests/test_7scenes.py](../../../../sources/naver__kapture/tests/test_7scenes.py) | eval signal |
| eval | [tests/test_bundler.py](../../../../sources/naver__kapture/tests/test_bundler.py) | eval signal |
| eval | [tests/test_colmap.py](../../../../sources/naver__kapture/tests/test_colmap.py) | eval signal |
| eval | [tests/test_compare.py](../../../../sources/naver__kapture/tests/test_compare.py) | eval signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 39 | [tools/kapture_data_date_ranges.py](../../../../sources/naver__kapture/tools/kapture_data_date_ranges.py)<br>[tools/kapture_download_dataset.py](../../../../sources/naver__kapture/tools/kapture_download_dataset.py)<br>[tools/kapture_export_4seasons_pairs.py](../../../../sources/naver__kapture/tools/kapture_export_4seasons_pairs.py)<br>[tools/kapture_export_colmap.py](../../../../sources/naver__kapture/tools/kapture_export_colmap.py)<br>[tools/kapture_export_depth_images.py](../../../../sources/naver__kapture/tools/kapture_export_depth_images.py)<br>[tools/kapture_export_ETH_MS_LTVL.py](../../../../sources/naver__kapture/tools/kapture_export_ETH_MS_LTVL.py)<br>[tools/kapture_export_image_list.py](../../../../sources/naver__kapture/tools/kapture_export_image_list.py)<br>[tools/kapture_export_LTVL2020.py](../../../../sources/naver__kapture/tools/kapture_export_LTVL2020.py) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 5 | [samples/maupertuis_openMVG/ChateauMaupertuisTest/reconstruction_global/global_relative_rotation_pose_graph_final](../../../../sources/naver__kapture/samples/maupertuis_openMVG/ChateauMaupertuisTest/reconstruction_global/global_relative_rotation_pose_graph_final)<br>[samples/maupertuis_openMVG/ChateauMaupertuisTest/reconstruction_global/global_relative_rotation_pose_graph_final.svg](../../../../sources/naver__kapture/samples/maupertuis_openMVG/ChateauMaupertuisTest/reconstruction_global/global_relative_rotation_pose_graph_final.svg)<br>[samples/maupertuis_openMVG/ChateauMaupertuisTest/reconstruction_global/global_relative_rotation_pose_graph.svg](../../../../sources/naver__kapture/samples/maupertuis_openMVG/ChateauMaupertuisTest/reconstruction_global/global_relative_rotation_pose_graph.svg)<br>[samples/maupertuis_openMVG/ChateauMaupertuisTest/reconstruction_global/global_relative_rotation_view_graph.svg](../../../../sources/naver__kapture/samples/maupertuis_openMVG/ChateauMaupertuisTest/reconstruction_global/global_relative_rotation_view_graph.svg)<br>[dataset/kapture_dataset_index.yaml](../../../../sources/naver__kapture/dataset/kapture_dataset_index.yaml) |
| spec | 0 | 명확하지 않음 |
| eval | 22 | [tests/test_7scenes.py](../../../../sources/naver__kapture/tests/test_7scenes.py)<br>[tests/test_bundler.py](../../../../sources/naver__kapture/tests/test_bundler.py)<br>[tests/test_colmap.py](../../../../sources/naver__kapture/tests/test_colmap.py)<br>[tests/test_compare.py](../../../../sources/naver__kapture/tests/test_compare.py)<br>[tests/test_core.py](../../../../sources/naver__kapture/tests/test_core.py)<br>[tests/test_download.py](../../../../sources/naver__kapture/tests/test_download.py)<br>[tests/test_exif.py](../../../../sources/naver__kapture/tests/test_exif.py)<br>[tests/test_image_folder.py](../../../../sources/naver__kapture/tests/test_image_folder.py) |
| security | 0 | 명확하지 않음 |
| ci | 3 | [.github/workflows/kapture-push-main.yml](../../../../sources/naver__kapture/.github/workflows/kapture-push-main.yml)<br>[.github/workflows/kapture-release-docker.yml](../../../../sources/naver__kapture/.github/workflows/kapture-release-docker.yml)<br>[.github/workflows/kapture-release-pypi.yml](../../../../sources/naver__kapture/.github/workflows/kapture-release-pypi.yml) |
| container | 1 | [docker/Dockerfile](../../../../sources/naver__kapture/docker/Dockerfile) |
| instruction | 0 | 명확하지 않음 |
| docs | 5 | [README.adoc](../../../../sources/naver__kapture/README.adoc)<br>[doc/datasets.adoc](../../../../sources/naver__kapture/doc/datasets.adoc)<br>[doc/image_keypoints.jpg](../../../../sources/naver__kapture/doc/image_keypoints.jpg)<br>[doc/installation.adoc](../../../../sources/naver__kapture/doc/installation.adoc)<br>[doc/tutorial.adoc](../../../../sources/naver__kapture/doc/tutorial.adoc) |
| config | 2 | [Makefile](../../../../sources/naver__kapture/Makefile)<br>[pyproject.toml](../../../../sources/naver__kapture/pyproject.toml) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 22 | [tests/test_7scenes.py](../../../../sources/naver__kapture/tests/test_7scenes.py)<br>[tests/test_bundler.py](../../../../sources/naver__kapture/tests/test_bundler.py)<br>[tests/test_colmap.py](../../../../sources/naver__kapture/tests/test_colmap.py)<br>[tests/test_compare.py](../../../../sources/naver__kapture/tests/test_compare.py)<br>[tests/test_core.py](../../../../sources/naver__kapture/tests/test_core.py)<br>[tests/test_download.py](../../../../sources/naver__kapture/tests/test_download.py) |
| CI workflow | 3 | [.github/workflows/kapture-push-main.yml](../../../../sources/naver__kapture/.github/workflows/kapture-push-main.yml)<br>[.github/workflows/kapture-release-docker.yml](../../../../sources/naver__kapture/.github/workflows/kapture-release-docker.yml)<br>[.github/workflows/kapture-release-pypi.yml](../../../../sources/naver__kapture/.github/workflows/kapture-release-pypi.yml) |
| 컨테이너/배포 | 1 | [docker/Dockerfile](../../../../sources/naver__kapture/docker/Dockerfile) |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | path scan에서 primary entrypoint가 명확하지 않음 |
| operation | 없음 |
| security | security/policy 표면이 명확하지 않음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `samples/maupertuis_openMVG/ChateauMaupertuisTest/reconstruction_global/global_relative_rotation_pose_graph_final`, `samples/maupertuis_openMVG/ChateauMaupertuisTest/reconstruction_global/global_relative_rotation_pose_graph_final.svg`, `samples/maupertuis_openMVG/ChateauMaupertuisTest/reconstruction_global/global_relative_rotation_pose_graph.svg`.
2. agent/tool runtime 매핑: `tools/kapture_data_date_ranges.py`, `tools/kapture_download_dataset.py`, `tools/kapture_export_4seasons_pairs.py`.
3. retrieval/memory/indexing 확인: `samples/maupertuis_openMVG/ChateauMaupertuisTest/reconstruction_global/global_relative_rotation_pose_graph_final`, `samples/maupertuis_openMVG/ChateauMaupertuisTest/reconstruction_global/global_relative_rotation_pose_graph_final.svg`, `samples/maupertuis_openMVG/ChateauMaupertuisTest/reconstruction_global/global_relative_rotation_pose_graph.svg`.
4. test/eval 파일로 동작 검증: `tests/test_7scenes.py`, `tests/test_bundler.py`, `tests/test_colmap.py`.

## 기존 레포 인사이트

LLM 위키/RAG/지식베이스 관점에서 kapture is a file format as well as a set of tools for manipulating datasets, and in particular Visual Localization and . 핵심 구조 신호는 Python, pyproject.toml, Makefile, LICENSE, tests, ci이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 지식/RAG 패턴 참고이고, 후속 확인 포인트는 더 깊은 구조 스캔 필요입니다.
