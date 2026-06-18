# kakao/khaiii Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Kakao Hangul Analyzer III

## 요약

- 조사 단위: `sources/kakao__khaiii` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 130 files, 28 directories, depth score 94, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 cli-first, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 entrypoints=rsc/bin/compile_errpatch.py, rsc/bin/compile_model.py, rsc/bin/compile_preanal.py이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | kakao/khaiii |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | Python |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/kakao__khaiii](../../../../sources/kakao__khaiii) |
| Existing report | [reports/korea-trending/repositories/kakao__khaiii.md](../../../korea-trending/repositories/kakao__khaiii.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 130 / 28 |
| Max observed depth | 6 |
| Top directories | .github, cmake, docker, include, munjong, rsc, src, train |
| Top extensions | .py: 45, .cpp: 23, .hpp: 19, .cmake: 5, .in: 4, .md: 4, .png: 4, (none): 4, .auto: 3, .manual: 3, .txt: 3, .h: 2 |
| Source patterns | cli-first, retrieval/vector path, spec/docs-driven, eval/test harness, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 11 |
| .github | ci surface | 1 |
| cmake | top-level component | 1 |
| docker | documentation surface | 1 |
| include | top-level component | 1 |
| munjong | top-level component | 1 |
| rsc | top-level component | 1 |
| train | top-level component | 1 |


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
| entrypoints | [rsc/bin/compile_errpatch.py](../../../../sources/kakao__khaiii/rsc/bin/compile_errpatch.py) | entrypoints signal |
| entrypoints | [rsc/bin/compile_model.py](../../../../sources/kakao__khaiii/rsc/bin/compile_model.py) | entrypoints signal |
| entrypoints | [rsc/bin/compile_preanal.py](../../../../sources/kakao__khaiii/rsc/bin/compile_preanal.py) | entrypoints signal |
| entrypoints | [rsc/bin/compile_restore.py](../../../../sources/kakao__khaiii/rsc/bin/compile_restore.py) | entrypoints signal |
| config | [requirements.txt](../../../../sources/kakao__khaiii/requirements.txt) | config signal |
| config | [train/requirements.txt](../../../../sources/kakao__khaiii/train/requirements.txt) | config signal |
| config | [rsc/Makefile](../../../../sources/kakao__khaiii/rsc/Makefile) | config signal |
| docs | [README.md](../../../../sources/kakao__khaiii/README.md) | docs signal |
| docs | [.github/doc/khaiii_for_space_error.pptx](../../../../sources/kakao__khaiii/.github/doc/khaiii_for_space_error.pptx) | docs signal |
| docs | [.github/doc/network.pptx](../../../../sources/kakao__khaiii/.github/doc/network.pptx) | docs signal |
| eval | [train/eval.py](../../../../sources/kakao__khaiii/train/eval.py) | eval signal |
| eval | [src/test/python/test_khaiii/__init__.py](../../../../sources/kakao__khaiii/src/test/python/test_khaiii/__init__.py) | eval signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 4 | [rsc/bin/compile_errpatch.py](../../../../sources/kakao__khaiii/rsc/bin/compile_errpatch.py)<br>[rsc/bin/compile_model.py](../../../../sources/kakao__khaiii/rsc/bin/compile_model.py)<br>[rsc/bin/compile_preanal.py](../../../../sources/kakao__khaiii/rsc/bin/compile_preanal.py)<br>[rsc/bin/compile_restore.py](../../../../sources/kakao__khaiii/rsc/bin/compile_restore.py) |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 2 | [src/main/cpp/khaiii/Embed.cpp](../../../../sources/kakao__khaiii/src/main/cpp/khaiii/Embed.cpp)<br>[src/main/cpp/khaiii/Embed.hpp](../../../../sources/kakao__khaiii/src/main/cpp/khaiii/Embed.hpp) |
| spec | 2 | [requirements.txt](../../../../sources/kakao__khaiii/requirements.txt)<br>[train/requirements.txt](../../../../sources/kakao__khaiii/train/requirements.txt) |
| eval | 9 | [train/eval.py](../../../../sources/kakao__khaiii/train/eval.py)<br>[src/test/python/test_khaiii/__init__.py](../../../../sources/kakao__khaiii/src/test/python/test_khaiii/__init__.py)<br>[src/test/python/test_khaiii/test_khaiii.py](../../../../sources/kakao__khaiii/src/test/python/test_khaiii/test_khaiii.py)<br>[src/test/cpp/test_main.cpp](../../../../sources/kakao__khaiii/src/test/cpp/test_main.cpp)<br>[src/test/cpp/khaiii/ErrPatchTest.cpp](../../../../sources/kakao__khaiii/src/test/cpp/khaiii/ErrPatchTest.cpp)<br>[src/test/cpp/khaiii/KhaiiiApiTest.cpp](../../../../sources/kakao__khaiii/src/test/cpp/khaiii/KhaiiiApiTest.cpp)<br>[src/test/cpp/khaiii/KhaiiiApiTest.hpp](../../../../sources/kakao__khaiii/src/test/cpp/khaiii/KhaiiiApiTest.hpp)<br>[src/test/cpp/khaiii/KhaiiiDevTest.cpp](../../../../sources/kakao__khaiii/src/test/cpp/khaiii/KhaiiiDevTest.cpp) |
| security | 0 | not obvious |
| ci | 0 | not obvious |
| container | 1 | [docker/Dockerfile](../../../../sources/kakao__khaiii/docker/Dockerfile) |
| instruction | 0 | not obvious |
| docs | 3 | [README.md](../../../../sources/kakao__khaiii/README.md)<br>[.github/doc/khaiii_for_space_error.pptx](../../../../sources/kakao__khaiii/.github/doc/khaiii_for_space_error.pptx)<br>[.github/doc/network.pptx](../../../../sources/kakao__khaiii/.github/doc/network.pptx) |
| config | 3 | [requirements.txt](../../../../sources/kakao__khaiii/requirements.txt)<br>[train/requirements.txt](../../../../sources/kakao__khaiii/train/requirements.txt)<br>[rsc/Makefile](../../../../sources/kakao__khaiii/rsc/Makefile) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 9 | [train/eval.py](../../../../sources/kakao__khaiii/train/eval.py)<br>[src/test/python/test_khaiii/__init__.py](../../../../sources/kakao__khaiii/src/test/python/test_khaiii/__init__.py)<br>[src/test/python/test_khaiii/test_khaiii.py](../../../../sources/kakao__khaiii/src/test/python/test_khaiii/test_khaiii.py)<br>[src/test/cpp/test_main.cpp](../../../../sources/kakao__khaiii/src/test/cpp/test_main.cpp)<br>[src/test/cpp/khaiii/ErrPatchTest.cpp](../../../../sources/kakao__khaiii/src/test/cpp/khaiii/ErrPatchTest.cpp)<br>[src/test/cpp/khaiii/KhaiiiApiTest.cpp](../../../../sources/kakao__khaiii/src/test/cpp/khaiii/KhaiiiApiTest.cpp) |
| CI workflows | 0 | not obvious |
| Containers / deploy | 1 | [docker/Dockerfile](../../../../sources/kakao__khaiii/docker/Dockerfile) |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | CI workflow path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `rsc/bin/compile_errpatch.py`, `rsc/bin/compile_model.py`, `rsc/bin/compile_preanal.py`.
2. Trace execution through entrypoints: `rsc/bin/compile_errpatch.py`, `rsc/bin/compile_model.py`, `rsc/bin/compile_preanal.py`.
3. Inspect retrieval/memory/indexing through: `src/main/cpp/khaiii/Embed.cpp`, `src/main/cpp/khaiii/Embed.hpp`.
4. Verify behavior through test/eval files: `train/eval.py`, `src/test/python/test_khaiii/__init__.py`, `src/test/python/test_khaiii/test_khaiii.py`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 Kakao Hangul Analyzer III. 핵심 구조 신호는 Python, requirements.txt, README.md, LICENSE, ci, docs이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
