# Samsung/veles Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Distributed machine learning platform

## 요약

- 조사 단위: `sources/Samsung__veles` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 659 files, 132 directories, depth score 112, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 api/server, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 entrypoints=veles/__main__.py, veles/server.py이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | Samsung/veles |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | C++ |
| Stars | 917 |
| Forks | 180 |
| License | NOASSERTION |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/Samsung__veles](../../../../sources/Samsung__veles) |
| Existing report | [reports/korea-trending/repositories/Samsung__veles.md](../../../korea-trending/repositories/Samsung__veles.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 659 / 132 |
| Max observed depth | 8 |
| Top directories | .settings, cuda, debian, deploy, devices, docs, gource, libVeles, mastodon, ocl, veles, web |
| Top extensions | .py: 214, .png: 62, .h: 57, .rst: 45, .svn-base: 34, (none): 33, .cc: 30, .js: 18, .html: 16, .cl: 15, .json: 15, .sh: 13 |
| Source patterns | api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, containerized deploy |

### Components

| Component | Role | Signal count |
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
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
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


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 2 | [veles/__main__.py](../../../../sources/Samsung__veles/veles/__main__.py)<br>[veles/server.py](../../../../sources/Samsung__veles/veles/server.py) |
| agentRuntime | 20 | [veles/memory.py](../../../../sources/Samsung__veles/veles/memory.py)<br>[veles/workflow.py](../../../../sources/Samsung__veles/veles/workflow.py)<br>[veles/tests/forge/First/workflow_config.py](../../../../sources/Samsung__veles/veles/tests/forge/First/workflow_config.py)<br>[veles/tests/forge/First/workflow.py](../../../../sources/Samsung__veles/veles/tests/forge/First/workflow.py)<br>[libVeles/tests/memory_optimizer.cc](../../../../sources/Samsung__veles/libVeles/tests/memory_optimizer.cc)<br>[libVeles/tests/workflow_archive.cc](../../../../sources/Samsung__veles/libVeles/tests/workflow_archive.cc)<br>[libVeles/tests/workflow_loader.cc](../../../../sources/Samsung__veles/libVeles/tests/workflow_loader.cc)<br>[libVeles/tests/workflow.cc](../../../../sources/Samsung__veles/libVeles/tests/workflow.cc) |
| mcp | 0 | not obvious |
| retrieval | 7 | [veles/memory.py](../../../../sources/Samsung__veles/veles/memory.py)<br>[libVeles/tests/memory_optimizer.cc](../../../../sources/Samsung__veles/libVeles/tests/memory_optimizer.cc)<br>[libVeles/src/memory_node.h](../../../../sources/Samsung__veles/libVeles/src/memory_node.h)<br>[libVeles/src/memory_optimizer.cc](../../../../sources/Samsung__veles/libVeles/src/memory_optimizer.cc)<br>[libVeles/src/memory_optimizer.h](../../../../sources/Samsung__veles/libVeles/src/memory_optimizer.h)<br>[docs/source/index.rst](../../../../sources/Samsung__veles/docs/source/index.rst)<br>[docs/source/manualrst_veles_vector.rst](../../../../sources/Samsung__veles/docs/source/manualrst_veles_vector.rst) |
| spec | 4 | [requirements-dev.2.txt](../../../../sources/Samsung__veles/requirements-dev.2.txt)<br>[requirements-dev.3.txt](../../../../sources/Samsung__veles/requirements-dev.3.txt)<br>[requirements.txt](../../../../sources/Samsung__veles/requirements.txt)<br>[docs/source/manualrst_veles_system_requirements.rst](../../../../sources/Samsung__veles/docs/source/manualrst_veles_system_requirements.rst) |
| eval | 162 | [veles/tests/__init__.py](../../../../sources/Samsung__veles/veles/tests/__init__.py)<br>[veles/tests/accelerated_test.py](../../../../sources/Samsung__veles/veles/tests/accelerated_test.py)<br>[veles/tests/doubling_reset.py](../../../../sources/Samsung__veles/veles/tests/doubling_reset.py)<br>[veles/tests/jenkins.xml](../../../../sources/Samsung__veles/veles/tests/jenkins.xml)<br>[veles/tests/junit2csv.xsl](../../../../sources/Samsung__veles/veles/tests/junit2csv.xsl)<br>[veles/tests/manual_auto_histogram_plotter.py](../../../../sources/Samsung__veles/veles/tests/manual_auto_histogram_plotter.py)<br>[veles/tests/mastodon_sample_config.py](../../../../sources/Samsung__veles/veles/tests/mastodon_sample_config.py)<br>[veles/tests/mastodon_sample.py](../../../../sources/Samsung__veles/veles/tests/mastodon_sample.py) |
| security | 0 | not obvious |
| ci | 1 | [veles/tests/jenkins.xml](../../../../sources/Samsung__veles/veles/tests/jenkins.xml) |
| container | 12 | [deploy/deploy.sh](../../../../sources/Samsung__veles/deploy/deploy.sh)<br>[deploy/init-pyenv](../../../../sources/Samsung__veles/deploy/init-pyenv)<br>[deploy/libsodium.patch](../../../../sources/Samsung__veles/deploy/libsodium.patch)<br>[deploy/openpgm.patch](../../../../sources/Samsung__veles/deploy/openpgm.patch)<br>[deploy/ubuntu.sh](../../../../sources/Samsung__veles/deploy/ubuntu.sh)<br>[deploy/upstart/veles.forge_server.conf](../../../../sources/Samsung__veles/deploy/upstart/veles.forge_server.conf)<br>[deploy/upstart/veles.web_status.conf](../../../../sources/Samsung__veles/deploy/upstart/veles.web_status.conf)<br>[deploy/systemd/veles.forge_server.service](../../../../sources/Samsung__veles/deploy/systemd/veles.forge_server.service) |
| instruction | 0 | not obvious |
| docs | 109 | [README.md](../../../../sources/Samsung__veles/README.md)<br>[libVeles/docs/Doxyfile.in](../../../../sources/Samsung__veles/libVeles/docs/Doxyfile.in)<br>[libVeles/docs/Makefile.am](../../../../sources/Samsung__veles/libVeles/docs/Makefile.am)<br>[libVeles/docs/neural-network.jpg](../../../../sources/Samsung__veles/libVeles/docs/neural-network.jpg)<br>[docs/__init__.py](../../../../sources/Samsung__veles/docs/__init__.py)<br>[docs/.gitattributes](../../../../sources/Samsung__veles/docs/.gitattributes)<br>[docs/deps.sh](../../../../sources/Samsung__veles/docs/deps.sh)<br>[docs/draw_clones.py](../../../../sources/Samsung__veles/docs/draw_clones.py) |
| config | 7 | [requirements-dev.2.txt](../../../../sources/Samsung__veles/requirements-dev.2.txt)<br>[requirements-dev.3.txt](../../../../sources/Samsung__veles/requirements-dev.3.txt)<br>[requirements.txt](../../../../sources/Samsung__veles/requirements.txt)<br>[web/projects/forge/package.json](../../../../sources/Samsung__veles/web/projects/forge/package.json)<br>[web/projects/core/package.json](../../../../sources/Samsung__veles/web/projects/core/package.json)<br>[web/projects/bboxer/package.json](../../../../sources/Samsung__veles/web/projects/bboxer/package.json)<br>[docs/Makefile](../../../../sources/Samsung__veles/docs/Makefile) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 162 | [veles/tests/__init__.py](../../../../sources/Samsung__veles/veles/tests/__init__.py)<br>[veles/tests/accelerated_test.py](../../../../sources/Samsung__veles/veles/tests/accelerated_test.py)<br>[veles/tests/doubling_reset.py](../../../../sources/Samsung__veles/veles/tests/doubling_reset.py)<br>[veles/tests/jenkins.xml](../../../../sources/Samsung__veles/veles/tests/jenkins.xml)<br>[veles/tests/junit2csv.xsl](../../../../sources/Samsung__veles/veles/tests/junit2csv.xsl)<br>[veles/tests/manual_auto_histogram_plotter.py](../../../../sources/Samsung__veles/veles/tests/manual_auto_histogram_plotter.py) |
| CI workflows | 1 | [veles/tests/jenkins.xml](../../../../sources/Samsung__veles/veles/tests/jenkins.xml) |
| Containers / deploy | 12 | [deploy/deploy.sh](../../../../sources/Samsung__veles/deploy/deploy.sh)<br>[deploy/init-pyenv](../../../../sources/Samsung__veles/deploy/init-pyenv)<br>[deploy/libsodium.patch](../../../../sources/Samsung__veles/deploy/libsodium.patch)<br>[deploy/openpgm.patch](../../../../sources/Samsung__veles/deploy/openpgm.patch)<br>[deploy/ubuntu.sh](../../../../sources/Samsung__veles/deploy/ubuntu.sh)<br>[deploy/upstart/veles.forge_server.conf](../../../../sources/Samsung__veles/deploy/upstart/veles.forge_server.conf) |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | security/policy surface not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `veles/__main__.py`, `veles/server.py`, `requirements-dev.2.txt`.
2. Trace execution through entrypoints: `veles/__main__.py`, `veles/server.py`.
3. Map agent/tool runtime through: `veles/memory.py`, `veles/workflow.py`, `veles/tests/forge/First/workflow_config.py`.
4. Inspect retrieval/memory/indexing through: `veles/memory.py`, `libVeles/tests/memory_optimizer.cc`, `libVeles/src/memory_node.h`.
5. Verify behavior through test/eval files: `veles/tests/__init__.py`, `veles/tests/accelerated_test.py`, `veles/tests/doubling_reset.py`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 Distributed machine learning platform. 핵심 구조 신호는 C++, requirements.txt, README.md, docs, spec-artifacts이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, ci signal not obvious, needs deeper structural scan입니다.
