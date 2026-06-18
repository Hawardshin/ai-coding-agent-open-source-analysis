# naver/kapture Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

kapture is a file format as well as a set of tools for manipulating datasets, and in particular Visual Localization and Structure from Motion data.

## 요약

- 조사 단위: `sources/naver__kapture` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 609 files, 225 directories, depth score 101, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 retrieval=samples/maupertuis_openMVG/ChateauMaupertuisTest/reconstruction_global/global_relative_rotation_pose_graph_final, samples/maupertuis_openMVG/ChateauMaupertuisTest/reconstruction_global/global_relative_rotation_pose_graph_final.svg, samples/maupertuis_openMVG/ChateauMaupertuisTest/reconstruction_global/global_relative_rotation_pose_graph.svg이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 knowledge/RAG pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | naver/kapture |
| Topic | LLM Wiki, RAG, and Knowledge / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | Python |
| Stars | 541 |
| Forks | 71 |
| License | BSD-3-Clause |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/naver__kapture](../../../../sources/naver__kapture) |
| Existing report | [reports/korea-trending/repositories/naver__kapture.md](../../../korea-trending/repositories/naver__kapture.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 609 / 225 |
| Max observed depth | 10 |
| Top directories | .github, assets, dataset, doc, docker, kapture, samples, tests, tools |
| Top extensions | .txt: 161, .py: 132, .jpg: 107, .kpt: 32, .depth: 27, .png: 22, .desc: 15, .matches: 15, (none): 13, .svg: 12, .json: 10, .ply: 10 |
| Source patterns | cli-first, agent/tool runtime, retrieval/vector path, eval/test harness, containerized deploy |

### Components

| Component | Role | Signal count |
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


## How It Runs

| Category | Source | Name | Command |
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
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
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


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 39 | [tools/kapture_data_date_ranges.py](../../../../sources/naver__kapture/tools/kapture_data_date_ranges.py)<br>[tools/kapture_download_dataset.py](../../../../sources/naver__kapture/tools/kapture_download_dataset.py)<br>[tools/kapture_export_4seasons_pairs.py](../../../../sources/naver__kapture/tools/kapture_export_4seasons_pairs.py)<br>[tools/kapture_export_colmap.py](../../../../sources/naver__kapture/tools/kapture_export_colmap.py)<br>[tools/kapture_export_depth_images.py](../../../../sources/naver__kapture/tools/kapture_export_depth_images.py)<br>[tools/kapture_export_ETH_MS_LTVL.py](../../../../sources/naver__kapture/tools/kapture_export_ETH_MS_LTVL.py)<br>[tools/kapture_export_image_list.py](../../../../sources/naver__kapture/tools/kapture_export_image_list.py)<br>[tools/kapture_export_LTVL2020.py](../../../../sources/naver__kapture/tools/kapture_export_LTVL2020.py) |
| mcp | 0 | not obvious |
| retrieval | 5 | [samples/maupertuis_openMVG/ChateauMaupertuisTest/reconstruction_global/global_relative_rotation_pose_graph_final](../../../../sources/naver__kapture/samples/maupertuis_openMVG/ChateauMaupertuisTest/reconstruction_global/global_relative_rotation_pose_graph_final)<br>[samples/maupertuis_openMVG/ChateauMaupertuisTest/reconstruction_global/global_relative_rotation_pose_graph_final.svg](../../../../sources/naver__kapture/samples/maupertuis_openMVG/ChateauMaupertuisTest/reconstruction_global/global_relative_rotation_pose_graph_final.svg)<br>[samples/maupertuis_openMVG/ChateauMaupertuisTest/reconstruction_global/global_relative_rotation_pose_graph.svg](../../../../sources/naver__kapture/samples/maupertuis_openMVG/ChateauMaupertuisTest/reconstruction_global/global_relative_rotation_pose_graph.svg)<br>[samples/maupertuis_openMVG/ChateauMaupertuisTest/reconstruction_global/global_relative_rotation_view_graph.svg](../../../../sources/naver__kapture/samples/maupertuis_openMVG/ChateauMaupertuisTest/reconstruction_global/global_relative_rotation_view_graph.svg)<br>[dataset/kapture_dataset_index.yaml](../../../../sources/naver__kapture/dataset/kapture_dataset_index.yaml) |
| spec | 0 | not obvious |
| eval | 22 | [tests/test_7scenes.py](../../../../sources/naver__kapture/tests/test_7scenes.py)<br>[tests/test_bundler.py](../../../../sources/naver__kapture/tests/test_bundler.py)<br>[tests/test_colmap.py](../../../../sources/naver__kapture/tests/test_colmap.py)<br>[tests/test_compare.py](../../../../sources/naver__kapture/tests/test_compare.py)<br>[tests/test_core.py](../../../../sources/naver__kapture/tests/test_core.py)<br>[tests/test_download.py](../../../../sources/naver__kapture/tests/test_download.py)<br>[tests/test_exif.py](../../../../sources/naver__kapture/tests/test_exif.py)<br>[tests/test_image_folder.py](../../../../sources/naver__kapture/tests/test_image_folder.py) |
| security | 0 | not obvious |
| ci | 3 | [.github/workflows/kapture-push-main.yml](../../../../sources/naver__kapture/.github/workflows/kapture-push-main.yml)<br>[.github/workflows/kapture-release-docker.yml](../../../../sources/naver__kapture/.github/workflows/kapture-release-docker.yml)<br>[.github/workflows/kapture-release-pypi.yml](../../../../sources/naver__kapture/.github/workflows/kapture-release-pypi.yml) |
| container | 1 | [docker/Dockerfile](../../../../sources/naver__kapture/docker/Dockerfile) |
| instruction | 0 | not obvious |
| docs | 5 | [README.adoc](../../../../sources/naver__kapture/README.adoc)<br>[doc/datasets.adoc](../../../../sources/naver__kapture/doc/datasets.adoc)<br>[doc/image_keypoints.jpg](../../../../sources/naver__kapture/doc/image_keypoints.jpg)<br>[doc/installation.adoc](../../../../sources/naver__kapture/doc/installation.adoc)<br>[doc/tutorial.adoc](../../../../sources/naver__kapture/doc/tutorial.adoc) |
| config | 2 | [Makefile](../../../../sources/naver__kapture/Makefile)<br>[pyproject.toml](../../../../sources/naver__kapture/pyproject.toml) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 22 | [tests/test_7scenes.py](../../../../sources/naver__kapture/tests/test_7scenes.py)<br>[tests/test_bundler.py](../../../../sources/naver__kapture/tests/test_bundler.py)<br>[tests/test_colmap.py](../../../../sources/naver__kapture/tests/test_colmap.py)<br>[tests/test_compare.py](../../../../sources/naver__kapture/tests/test_compare.py)<br>[tests/test_core.py](../../../../sources/naver__kapture/tests/test_core.py)<br>[tests/test_download.py](../../../../sources/naver__kapture/tests/test_download.py) |
| CI workflows | 3 | [.github/workflows/kapture-push-main.yml](../../../../sources/naver__kapture/.github/workflows/kapture-push-main.yml)<br>[.github/workflows/kapture-release-docker.yml](../../../../sources/naver__kapture/.github/workflows/kapture-release-docker.yml)<br>[.github/workflows/kapture-release-pypi.yml](../../../../sources/naver__kapture/.github/workflows/kapture-release-pypi.yml) |
| Containers / deploy | 1 | [docker/Dockerfile](../../../../sources/naver__kapture/docker/Dockerfile) |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | none |
| security | security/policy surface not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `samples/maupertuis_openMVG/ChateauMaupertuisTest/reconstruction_global/global_relative_rotation_pose_graph_final`, `samples/maupertuis_openMVG/ChateauMaupertuisTest/reconstruction_global/global_relative_rotation_pose_graph_final.svg`, `samples/maupertuis_openMVG/ChateauMaupertuisTest/reconstruction_global/global_relative_rotation_pose_graph.svg`.
2. Map agent/tool runtime through: `tools/kapture_data_date_ranges.py`, `tools/kapture_download_dataset.py`, `tools/kapture_export_4seasons_pairs.py`.
3. Inspect retrieval/memory/indexing through: `samples/maupertuis_openMVG/ChateauMaupertuisTest/reconstruction_global/global_relative_rotation_pose_graph_final`, `samples/maupertuis_openMVG/ChateauMaupertuisTest/reconstruction_global/global_relative_rotation_pose_graph_final.svg`, `samples/maupertuis_openMVG/ChateauMaupertuisTest/reconstruction_global/global_relative_rotation_pose_graph.svg`.
4. Verify behavior through test/eval files: `tests/test_7scenes.py`, `tests/test_bundler.py`, `tests/test_colmap.py`.

## Existing Repository Insight

LLM 위키/RAG/지식베이스 관점에서 kapture is a file format as well as a set of tools for manipulating datasets, and in particular Visual Localization and . 핵심 구조 신호는 Python, pyproject.toml, Makefile, LICENSE, tests, ci이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 knowledge/RAG pattern reference이고, 후속 확인 포인트는 needs deeper structural scan입니다.
