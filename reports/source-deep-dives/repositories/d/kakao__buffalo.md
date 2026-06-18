# kakao/buffalo Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

TOROS Buffalo: A fast and scalable production-ready open source project for recommender systems

## 요약

- 조사 단위: `sources/kakao__buffalo` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 150 files, 55 directories, depth score 92, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 retrieval/vector path, spec/docs-driven, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 config=pyproject.toml, requirements-dev.txt, docs/Makefile이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | kakao/buffalo |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | Python |
| Stars | 581 |
| Forks | 109 |
| License | Apache-2.0 |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/kakao__buffalo](../../../../sources/kakao__buffalo) |
| Existing report | [reports/korea-trending/repositories/kakao__buffalo.md](../../../korea-trending/repositories/kakao__buffalo.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 150 / 55 |
| Max observed depth | 5 |
| Top directories | .github, 3rd, benchmark, buffalo, docs, examples, include, install, lib, tests |
| Top extensions | .py: 59, (none): 17, .hpp: 16, .pyx: 12, .cc: 9, .png: 9, .md: 8, .ipynb: 5, .rst: 4, .cu: 2, .yaml: 2, .cfg: 1 |
| Source patterns | retrieval/vector path, spec/docs-driven, eval/test harness, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 35 |
| docs | documentation surface | 11 |
| .github | ci surface | 1 |
| 3rd | top-level component | 1 |
| benchmark | validation surface | 1 |
| buffalo | top-level component | 1 |
| examples | top-level component | 1 |
| examples/Dockerfile | examples workspace | 1 |
| examples/README.md | examples workspace | 1 |
| include | top-level component | 1 |
| install | top-level component | 1 |
| lib | source boundary | 1 |


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
| config | [pyproject.toml](../../../../sources/kakao__buffalo/pyproject.toml) | config signal |
| config | [requirements-dev.txt](../../../../sources/kakao__buffalo/requirements-dev.txt) | config signal |
| config | [docs/Makefile](../../../../sources/kakao__buffalo/docs/Makefile) | config signal |
| docs | [README.md](../../../../sources/kakao__buffalo/README.md) | docs signal |
| docs | [tests/README.md](../../../../sources/kakao__buffalo/tests/README.md) | docs signal |
| docs | [examples/README.md](../../../../sources/kakao__buffalo/examples/README.md) | docs signal |
| docs | [docs/algo.rst](../../../../sources/kakao__buffalo/docs/algo.rst) | docs signal |
| eval | [tests/.gitignore](../../../../sources/kakao__buffalo/tests/.gitignore) | eval signal |
| eval | [tests/preprocess.py](../../../../sources/kakao__buffalo/tests/preprocess.py) | eval signal |
| eval | [tests/pytest.ini](../../../../sources/kakao__buffalo/tests/pytest.ini) | eval signal |
| ci | [.github/workflows/build_and_publush.yaml](../../../../sources/kakao__buffalo/.github/workflows/build_and_publush.yaml) | ci support |
| ci | [.github/workflows/static_lint.yaml](../../../../sources/kakao__buffalo/.github/workflows/static_lint.yaml) | ci support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 2 | [docs/index.rst](../../../../sources/kakao__buffalo/docs/index.rst)<br>[benchmark/fig/20190829.buffalo.memory.kakaoreco730m.png](../../../../sources/kakao__buffalo/benchmark/fig/20190829.buffalo.memory.kakaoreco730m.png) |
| spec | 1 | [requirements-dev.txt](../../../../sources/kakao__buffalo/requirements-dev.txt) |
| eval | 50 | [tests/.gitignore](../../../../sources/kakao__buffalo/tests/.gitignore)<br>[tests/preprocess.py](../../../../sources/kakao__buffalo/tests/preprocess.py)<br>[tests/pytest.ini](../../../../sources/kakao__buffalo/tests/pytest.ini)<br>[tests/README.md](../../../../sources/kakao__buffalo/tests/README.md)<br>[tests/util/__init__.py](../../../../sources/kakao__buffalo/tests/util/__init__.py)<br>[tests/util/test_aux.py](../../../../sources/kakao__buffalo/tests/util/test_aux.py)<br>[tests/util/test_util.py](../../../../sources/kakao__buffalo/tests/util/test_util.py)<br>[tests/parallel/__init__.py](../../../../sources/kakao__buffalo/tests/parallel/__init__.py) |
| security | 0 | not obvious |
| ci | 2 | [.github/workflows/build_and_publush.yaml](../../../../sources/kakao__buffalo/.github/workflows/build_and_publush.yaml)<br>[.github/workflows/static_lint.yaml](../../../../sources/kakao__buffalo/.github/workflows/static_lint.yaml) |
| container | 1 | [examples/Dockerfile](../../../../sources/kakao__buffalo/examples/Dockerfile) |
| instruction | 0 | not obvious |
| docs | 12 | [README.md](../../../../sources/kakao__buffalo/README.md)<br>[tests/README.md](../../../../sources/kakao__buffalo/tests/README.md)<br>[examples/README.md](../../../../sources/kakao__buffalo/examples/README.md)<br>[docs/algo.rst](../../../../sources/kakao__buffalo/docs/algo.rst)<br>[docs/buffalo.png](../../../../sources/kakao__buffalo/docs/buffalo.png)<br>[docs/conf.py](../../../../sources/kakao__buffalo/docs/conf.py)<br>[docs/index.rst](../../../../sources/kakao__buffalo/docs/index.rst)<br>[docs/intro.rst](../../../../sources/kakao__buffalo/docs/intro.rst) |
| config | 3 | [pyproject.toml](../../../../sources/kakao__buffalo/pyproject.toml)<br>[requirements-dev.txt](../../../../sources/kakao__buffalo/requirements-dev.txt)<br>[docs/Makefile](../../../../sources/kakao__buffalo/docs/Makefile) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 50 | [tests/.gitignore](../../../../sources/kakao__buffalo/tests/.gitignore)<br>[tests/preprocess.py](../../../../sources/kakao__buffalo/tests/preprocess.py)<br>[tests/pytest.ini](../../../../sources/kakao__buffalo/tests/pytest.ini)<br>[tests/README.md](../../../../sources/kakao__buffalo/tests/README.md)<br>[tests/util/__init__.py](../../../../sources/kakao__buffalo/tests/util/__init__.py)<br>[tests/util/test_aux.py](../../../../sources/kakao__buffalo/tests/util/test_aux.py) |
| CI workflows | 2 | [.github/workflows/build_and_publush.yaml](../../../../sources/kakao__buffalo/.github/workflows/build_and_publush.yaml)<br>[.github/workflows/static_lint.yaml](../../../../sources/kakao__buffalo/.github/workflows/static_lint.yaml) |
| Containers / deploy | 1 | [examples/Dockerfile](../../../../sources/kakao__buffalo/examples/Dockerfile) |
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

1. Start from key references: `pyproject.toml`, `requirements-dev.txt`, `docs/Makefile`.
2. Inspect retrieval/memory/indexing through: `docs/index.rst`, `benchmark/fig/20190829.buffalo.memory.kakaoreco730m.png`.
3. Verify behavior through test/eval files: `tests/.gitignore`, `tests/preprocess.py`, `tests/pytest.ini`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 TOROS Buffalo A fast and scalable production ready open source project for recommender systems. 핵심 구조 신호는 Python, pyproject.toml, README.md, LICENSE, tests, ci이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 needs deeper structural scan입니다.
