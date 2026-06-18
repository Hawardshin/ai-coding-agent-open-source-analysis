# naver/anny Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Anny, A Free and Interpretable Human Body Model for all ages, written in PyTorch.

## 요약

- 조사 단위: `sources/naver__anny` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 1,574 files, 66 directories, depth score 93, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 retrieval/vector path, eval/test harness, containerized deploy 구조로 읽힌다. 핵심 소스 근거는 config=pyproject.toml, uv.lock이고, 의존성 단서는 torch, 검증/운영 단서는 test/eval 경로가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | naver/anny |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | Jupyter Notebook |
| Stars | 486 |
| Forks | 37 |
| License | NOASSERTION |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/naver__anny](../../../../sources/naver__anny) |
| Existing report | [reports/korea-trending/repositories/naver__anny.md](../../../korea-trending/repositories/naver__anny.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 1574 / 66 |
| Max observed depth | 9 |
| Top directories | .devcontainer, docker, docs, scripts, src, test, tutorials |
| Top extensions | .gz: 1260, .png: 188, .py: 50, .json: 30, .jpg: 12, .obj: 8, .ipynb: 4, .md: 4, .pth: 4, (none): 4, .bash: 2, .html: 1 |
| Source patterns | retrieval/vector path, eval/test harness, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 5 |
| src | source boundary | 2 |
| .devcontainer | deployment surface | 1 |
| docker | documentation surface | 1 |
| scripts | top-level component | 1 |
| test | validation surface | 1 |
| tutorials | top-level component | 1 |


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
| config | [pyproject.toml](../../../../sources/naver__anny/pyproject.toml) | config signal |
| config | [uv.lock](../../../../sources/naver__anny/uv.lock) | config signal |
| docs | [README.md](../../../../sources/naver__anny/README.md) | docs signal |
| docs | [docs/index.html](../../../../sources/naver__anny/docs/index.html) | docs signal |
| docs | [docs/figures/anny_teaser.jpg](../../../../sources/naver__anny/docs/figures/anny_teaser.jpg) | docs signal |
| docs | [docs/figures/interactive_demo.jpg](../../../../sources/naver__anny/docs/figures/interactive_demo.jpg) | docs signal |
| eval | [test/__init__.py](../../../../sources/naver__anny/test/__init__.py) | eval signal |
| eval | [test/test_degenerate_configuration.py](../../../../sources/naver__anny/test/test_degenerate_configuration.py) | eval signal |
| eval | [test/test_instantiation.py](../../../../sources/naver__anny/test/test_instantiation.py) | eval signal |
| eval | [test/test_kinematics.py](../../../../sources/naver__anny/test/test_kinematics.py) | eval signal |
| container | [docker/docker-compose.yml](../../../../sources/naver__anny/docker/docker-compose.yml) | container support |
| container | [docker/Dockerfile](../../../../sources/naver__anny/docker/Dockerfile) | container support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 1 | [docs/index.html](../../../../sources/naver__anny/docs/index.html) |
| spec | 0 | not obvious |
| eval | 15 | [test/__init__.py](../../../../sources/naver__anny/test/__init__.py)<br>[test/test_degenerate_configuration.py](../../../../sources/naver__anny/test/test_degenerate_configuration.py)<br>[test/test_instantiation.py](../../../../sources/naver__anny/test/test_instantiation.py)<br>[test/test_kinematics.py](../../../../sources/naver__anny/test/test_kinematics.py)<br>[test/test_local_changes.py](../../../../sources/naver__anny/test/test_local_changes.py)<br>[test/test_param_regressor.py](../../../../sources/naver__anny/test/test_param_regressor.py)<br>[test/test_pickle.py](../../../../sources/naver__anny/test/test_pickle.py)<br>[test/test_pose_parameterization.py](../../../../sources/naver__anny/test/test_pose_parameterization.py) |
| security | 0 | not obvious |
| ci | 0 | not obvious |
| container | 3 | [docker/docker-compose.yml](../../../../sources/naver__anny/docker/docker-compose.yml)<br>[docker/Dockerfile](../../../../sources/naver__anny/docker/Dockerfile)<br>[.devcontainer/Dockerfile](../../../../sources/naver__anny/.devcontainer/Dockerfile) |
| instruction | 1 | [CLAUDE.md](../../../../sources/naver__anny/CLAUDE.md) |
| docs | 5 | [README.md](../../../../sources/naver__anny/README.md)<br>[docs/index.html](../../../../sources/naver__anny/docs/index.html)<br>[docs/figures/anny_teaser.jpg](../../../../sources/naver__anny/docs/figures/anny_teaser.jpg)<br>[docs/figures/interactive_demo.jpg](../../../../sources/naver__anny/docs/figures/interactive_demo.jpg)<br>[docker/Readme.md](../../../../sources/naver__anny/docker/Readme.md) |
| config | 2 | [pyproject.toml](../../../../sources/naver__anny/pyproject.toml)<br>[uv.lock](../../../../sources/naver__anny/uv.lock) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 15 | [test/__init__.py](../../../../sources/naver__anny/test/__init__.py)<br>[test/test_degenerate_configuration.py](../../../../sources/naver__anny/test/test_degenerate_configuration.py)<br>[test/test_instantiation.py](../../../../sources/naver__anny/test/test_instantiation.py)<br>[test/test_kinematics.py](../../../../sources/naver__anny/test/test_kinematics.py)<br>[test/test_local_changes.py](../../../../sources/naver__anny/test/test_local_changes.py)<br>[test/test_param_regressor.py](../../../../sources/naver__anny/test/test_param_regressor.py) |
| CI workflows | 0 | not obvious |
| Containers / deploy | 3 | [docker/docker-compose.yml](../../../../sources/naver__anny/docker/docker-compose.yml)<br>[docker/Dockerfile](../../../../sources/naver__anny/docker/Dockerfile)<br>[.devcontainer/Dockerfile](../../../../sources/naver__anny/.devcontainer/Dockerfile) |
| Security / policy | 0 | not obvious |
| Agent instructions | 1 | [CLAUDE.md](../../../../sources/naver__anny/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | CI workflow path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `pyproject.toml`, `uv.lock`, `README.md`.
2. Inspect retrieval/memory/indexing through: `docs/index.html`.
3. Verify behavior through test/eval files: `test/__init__.py`, `test/test_degenerate_configuration.py`, `test/test_instantiation.py`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 Anny, A Free and Interpretable Human Body Model for all ages, written in PyTorch.. 핵심 구조 신호는 Jupyter Notebook, pyproject.toml, README.md, CLAUDE.md, LICENSE, torch이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 ci signal not obvious, needs deeper structural scan입니다.
