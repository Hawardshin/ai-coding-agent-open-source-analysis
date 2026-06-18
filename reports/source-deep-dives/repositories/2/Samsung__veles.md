# Samsung/veles 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

Distributed machine learning platform

## 요약

- 조사 단위: `sources/Samsung__veles` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 659 files, 132 directories, depth score 106, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 api/server, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 entrypoints=veles/__main__.py, veles/server.py이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | Samsung/veles |
| 주제 | 일반 AI 오픈소스 / 일반 AI 오픈소스 |
| Region | korea |
| Language | C++ |
| Stars | 917 |
| Forks | 180 |
| License | NOASSERTION |
| 성숙도 | 초기 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/Samsung__veles](../../../../sources/Samsung__veles) |
| 기존 보고서 | [reports/korea-trending/repositories/Samsung__veles.md](../../../korea-trending/repositories/Samsung__veles.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 659 / 132 |
| 관측 최대 깊이 | 8 |
| 상위 디렉터리 | .settings, cuda, debian, deploy, devices, docs, gource, libVeles, mastodon, ocl, veles, web |
| 상위 확장자 | .py: 214, .png: 62, .h: 57, .rst: 45, .svn-base: 34, (none): 33, .cc: 30, .js: 18, .html: 16, .cl: 15, .json: 15, .sh: 13 |
| 소스 패턴 | api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 41 |
| web | source boundary | 4 |
| cuda | top-level component | 1 |
| debian | top-level component | 1 |
| deploy | deployment surface | 1 |
| devices | top-level component | 1 |
| gource | top-level component | 1 |
| libVeles | source boundary | 1 |
| mastodon | top-level component | 1 |
| ocl | top-level component | 1 |
| veles | top-level component | 1 |


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
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| entrypoints | [veles/__main__.py](../../../../sources/Samsung__veles/veles/__main__.py) | entrypoints signal |
| entrypoints | [veles/server.py](../../../../sources/Samsung__veles/veles/server.py) | entrypoints signal |
| config | [requirements-dev.2.txt](../../../../sources/Samsung__veles/requirements-dev.2.txt) | config signal |
| config | [requirements-dev.3.txt](../../../../sources/Samsung__veles/requirements-dev.3.txt) | config signal |
| config | [requirements.txt](../../../../sources/Samsung__veles/requirements.txt) | config signal |
| config | [web/projects/forge/package.json](../../../../sources/Samsung__veles/web/projects/forge/package.json) | config signal |
| docs | [README.md](../../../../sources/Samsung__veles/README.md) | docs signal |
| docs | [libVeles/docs/Doxyfile.in](../../../../sources/Samsung__veles/libVeles/docs/Doxyfile.in) | docs signal |
| docs | [libVeles/docs/Makefile.am](../../../../sources/Samsung__veles/libVeles/docs/Makefile.am) | docs signal |
| docs | [libVeles/docs/neural-network.jpg](../../../../sources/Samsung__veles/libVeles/docs/neural-network.jpg) | docs signal |
| eval | [veles/tests/__init__.py](../../../../sources/Samsung__veles/veles/tests/__init__.py) | eval signal |
| eval | [veles/tests/accelerated_test.py](../../../../sources/Samsung__veles/veles/tests/accelerated_test.py) | eval signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 2 | [veles/__main__.py](../../../../sources/Samsung__veles/veles/__main__.py)<br>[veles/server.py](../../../../sources/Samsung__veles/veles/server.py) |
| agentRuntime | 20 | [veles/memory.py](../../../../sources/Samsung__veles/veles/memory.py)<br>[veles/workflow.py](../../../../sources/Samsung__veles/veles/workflow.py)<br>[veles/tests/forge/First/workflow_config.py](../../../../sources/Samsung__veles/veles/tests/forge/First/workflow_config.py)<br>[veles/tests/forge/First/workflow.py](../../../../sources/Samsung__veles/veles/tests/forge/First/workflow.py)<br>[libVeles/tests/memory_optimizer.cc](../../../../sources/Samsung__veles/libVeles/tests/memory_optimizer.cc)<br>[libVeles/tests/workflow_archive.cc](../../../../sources/Samsung__veles/libVeles/tests/workflow_archive.cc)<br>[libVeles/tests/workflow_loader.cc](../../../../sources/Samsung__veles/libVeles/tests/workflow_loader.cc)<br>[libVeles/tests/workflow.cc](../../../../sources/Samsung__veles/libVeles/tests/workflow.cc) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 7 | [veles/memory.py](../../../../sources/Samsung__veles/veles/memory.py)<br>[libVeles/tests/memory_optimizer.cc](../../../../sources/Samsung__veles/libVeles/tests/memory_optimizer.cc)<br>[libVeles/src/memory_node.h](../../../../sources/Samsung__veles/libVeles/src/memory_node.h)<br>[libVeles/src/memory_optimizer.cc](../../../../sources/Samsung__veles/libVeles/src/memory_optimizer.cc)<br>[libVeles/src/memory_optimizer.h](../../../../sources/Samsung__veles/libVeles/src/memory_optimizer.h)<br>[docs/source/index.rst](../../../../sources/Samsung__veles/docs/source/index.rst)<br>[docs/source/manualrst_veles_vector.rst](../../../../sources/Samsung__veles/docs/source/manualrst_veles_vector.rst) |
| spec | 4 | [requirements-dev.2.txt](../../../../sources/Samsung__veles/requirements-dev.2.txt)<br>[requirements-dev.3.txt](../../../../sources/Samsung__veles/requirements-dev.3.txt)<br>[requirements.txt](../../../../sources/Samsung__veles/requirements.txt)<br>[docs/source/manualrst_veles_system_requirements.rst](../../../../sources/Samsung__veles/docs/source/manualrst_veles_system_requirements.rst) |
| eval | 162 | [veles/tests/__init__.py](../../../../sources/Samsung__veles/veles/tests/__init__.py)<br>[veles/tests/accelerated_test.py](../../../../sources/Samsung__veles/veles/tests/accelerated_test.py)<br>[veles/tests/doubling_reset.py](../../../../sources/Samsung__veles/veles/tests/doubling_reset.py)<br>[veles/tests/jenkins.xml](../../../../sources/Samsung__veles/veles/tests/jenkins.xml)<br>[veles/tests/junit2csv.xsl](../../../../sources/Samsung__veles/veles/tests/junit2csv.xsl)<br>[veles/tests/manual_auto_histogram_plotter.py](../../../../sources/Samsung__veles/veles/tests/manual_auto_histogram_plotter.py)<br>[veles/tests/mastodon_sample_config.py](../../../../sources/Samsung__veles/veles/tests/mastodon_sample_config.py)<br>[veles/tests/mastodon_sample.py](../../../../sources/Samsung__veles/veles/tests/mastodon_sample.py) |
| security | 0 | 명확하지 않음 |
| ci | 1 | [veles/tests/jenkins.xml](../../../../sources/Samsung__veles/veles/tests/jenkins.xml) |
| container | 12 | [deploy/deploy.sh](../../../../sources/Samsung__veles/deploy/deploy.sh)<br>[deploy/init-pyenv](../../../../sources/Samsung__veles/deploy/init-pyenv)<br>[deploy/libsodium.patch](../../../../sources/Samsung__veles/deploy/libsodium.patch)<br>[deploy/openpgm.patch](../../../../sources/Samsung__veles/deploy/openpgm.patch)<br>[deploy/ubuntu.sh](../../../../sources/Samsung__veles/deploy/ubuntu.sh)<br>[deploy/upstart/veles.forge_server.conf](../../../../sources/Samsung__veles/deploy/upstart/veles.forge_server.conf)<br>[deploy/upstart/veles.web_status.conf](../../../../sources/Samsung__veles/deploy/upstart/veles.web_status.conf)<br>[deploy/systemd/veles.forge_server.service](../../../../sources/Samsung__veles/deploy/systemd/veles.forge_server.service) |
| instruction | 0 | 명확하지 않음 |
| docs | 109 | [README.md](../../../../sources/Samsung__veles/README.md)<br>[libVeles/docs/Doxyfile.in](../../../../sources/Samsung__veles/libVeles/docs/Doxyfile.in)<br>[libVeles/docs/Makefile.am](../../../../sources/Samsung__veles/libVeles/docs/Makefile.am)<br>[libVeles/docs/neural-network.jpg](../../../../sources/Samsung__veles/libVeles/docs/neural-network.jpg)<br>[docs/__init__.py](../../../../sources/Samsung__veles/docs/__init__.py)<br>[docs/.gitattributes](../../../../sources/Samsung__veles/docs/.gitattributes)<br>[docs/deps.sh](../../../../sources/Samsung__veles/docs/deps.sh)<br>[docs/draw_clones.py](../../../../sources/Samsung__veles/docs/draw_clones.py) |
| config | 7 | [requirements-dev.2.txt](../../../../sources/Samsung__veles/requirements-dev.2.txt)<br>[requirements-dev.3.txt](../../../../sources/Samsung__veles/requirements-dev.3.txt)<br>[requirements.txt](../../../../sources/Samsung__veles/requirements.txt)<br>[web/projects/forge/package.json](../../../../sources/Samsung__veles/web/projects/forge/package.json)<br>[web/projects/core/package.json](../../../../sources/Samsung__veles/web/projects/core/package.json)<br>[web/projects/bboxer/package.json](../../../../sources/Samsung__veles/web/projects/bboxer/package.json)<br>[docs/Makefile](../../../../sources/Samsung__veles/docs/Makefile) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 162 | [veles/tests/__init__.py](../../../../sources/Samsung__veles/veles/tests/__init__.py)<br>[veles/tests/accelerated_test.py](../../../../sources/Samsung__veles/veles/tests/accelerated_test.py)<br>[veles/tests/doubling_reset.py](../../../../sources/Samsung__veles/veles/tests/doubling_reset.py)<br>[veles/tests/jenkins.xml](../../../../sources/Samsung__veles/veles/tests/jenkins.xml)<br>[veles/tests/junit2csv.xsl](../../../../sources/Samsung__veles/veles/tests/junit2csv.xsl)<br>[veles/tests/manual_auto_histogram_plotter.py](../../../../sources/Samsung__veles/veles/tests/manual_auto_histogram_plotter.py) |
| CI workflow | 1 | [veles/tests/jenkins.xml](../../../../sources/Samsung__veles/veles/tests/jenkins.xml) |
| 컨테이너/배포 | 12 | [deploy/deploy.sh](../../../../sources/Samsung__veles/deploy/deploy.sh)<br>[deploy/init-pyenv](../../../../sources/Samsung__veles/deploy/init-pyenv)<br>[deploy/libsodium.patch](../../../../sources/Samsung__veles/deploy/libsodium.patch)<br>[deploy/openpgm.patch](../../../../sources/Samsung__veles/deploy/openpgm.patch)<br>[deploy/ubuntu.sh](../../../../sources/Samsung__veles/deploy/ubuntu.sh)<br>[deploy/upstart/veles.forge_server.conf](../../../../sources/Samsung__veles/deploy/upstart/veles.forge_server.conf) |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | security/policy 표면이 명확하지 않음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `veles/__main__.py`, `veles/server.py`, `requirements-dev.2.txt`.
2. entrypoint를 따라 실행 흐름 확인: `veles/__main__.py`, `veles/server.py`.
3. agent/tool runtime 매핑: `veles/memory.py`, `veles/workflow.py`, `veles/tests/forge/First/workflow_config.py`.
4. retrieval/memory/indexing 확인: `veles/memory.py`, `libVeles/tests/memory_optimizer.cc`, `libVeles/src/memory_node.h`.
5. test/eval 파일로 동작 검증: `veles/tests/__init__.py`, `veles/tests/accelerated_test.py`, `veles/tests/doubling_reset.py`.

## 기존 레포 인사이트

일반 AI 오픈소스 관점에서 Distributed machine learning platform. 핵심 구조 신호는 C++, requirements.txt, README.md, docs, spec-artifacts이며, 소스+보고서 근거 수준으로 초기 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, CI 신호가 명확하지 않음, 더 깊은 구조 스캔 필요입니다.
