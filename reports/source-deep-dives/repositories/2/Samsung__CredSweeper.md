# Samsung/CredSweeper Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

CredSweeper is a tool to detect credentials in any directories or files. CredSweeper could help users to detect unwanted exposure of credentials (such as token, passwords, api keys etc.) in advance. By scanning lines, filtering, and using AI model as option, CredSweeper reports lines with possible credentials, where the line is, and expected type o

## 요약

- 조사 단위: `sources/Samsung__CredSweeper` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 775 files, 45 directories, depth score 113, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

보안/거버넌스/안전 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 security=SECURITY.md, tests/samples/auth_n.template, tests/samples/auth.hs이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | Samsung/CredSweeper |
| Topic | Security, Governance, and Safety / 보안/거버넌스/안전 |
| Region | korea |
| Language | Python |
| Stars | 204 |
| Forks | 49 |
| License | MIT |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/Samsung__CredSweeper](../../../../sources/Samsung__CredSweeper) |
| Existing report | [reports/korea-trending/repositories/Samsung__CredSweeper.md](../../../korea-trending/repositories/Samsung__CredSweeper.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 775 / 45 |
| Max observed depth | 4 |
| Top directories | .ci, .github, credsweeper, docs, experiment, fuzz, tests |
| Top extensions | .py: 342, (none): 258, .rst: 24, .json: 13, .md: 10, .yml: 10, .patch: 7, .sh: 7, .txt: 7, .hs: 5, .png: 5, .yaml: 5 |
| Source patterns | cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 58 |
| docs | documentation surface | 42 |
| .github | ci surface | 1 |
| credsweeper | top-level component | 1 |
| experiment | top-level component | 1 |
| fuzz | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | pyproject.toml | credsweeper | credsweeper |


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
| security | [SECURITY.md](../../../../sources/Samsung__CredSweeper/SECURITY.md) | security signal |
| security | [tests/samples/auth_n.template](../../../../sources/Samsung__CredSweeper/tests/samples/auth_n.template) | security signal |
| security | [tests/samples/auth.hs](../../../../sources/Samsung__CredSweeper/tests/samples/auth.hs) | security signal |
| security | [tests/samples/azure_secret_value](../../../../sources/Samsung__CredSweeper/tests/samples/azure_secret_value) | security signal |
| ci | [.github/workflows/action.yml](../../../../sources/Samsung__CredSweeper/.github/workflows/action.yml) | ci signal |
| ci | [.github/workflows/benchmark.yml](../../../../sources/Samsung__CredSweeper/.github/workflows/benchmark.yml) | ci signal |
| ci | [.github/workflows/check.yml](../../../../sources/Samsung__CredSweeper/.github/workflows/check.yml) | ci signal |
| ci | [.github/workflows/fuzz.yml](../../../../sources/Samsung__CredSweeper/.github/workflows/fuzz.yml) | ci signal |
| config | [pyproject.toml](../../../../sources/Samsung__CredSweeper/pyproject.toml) | config signal |
| config | [requirements.txt](../../../../sources/Samsung__CredSweeper/requirements.txt) | config signal |
| config | [fuzz/requirements.txt](../../../../sources/Samsung__CredSweeper/fuzz/requirements.txt) | config signal |
| config | [experiment/requirements.txt](../../../../sources/Samsung__CredSweeper/experiment/requirements.txt) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 4 | [fuzz/__main__.py](../../../../sources/Samsung__CredSweeper/fuzz/__main__.py)<br>[experiment/main.py](../../../../sources/Samsung__CredSweeper/experiment/main.py)<br>[credsweeper/__main__.py](../../../../sources/Samsung__CredSweeper/credsweeper/__main__.py)<br>[credsweeper/main.py](../../../../sources/Samsung__CredSweeper/credsweeper/main.py) |
| agentRuntime | 4 | [experiment/tools/base64_test.py](../../../../sources/Samsung__CredSweeper/experiment/tools/base64_test.py)<br>[experiment/tools/entropy_test.py](../../../../sources/Samsung__CredSweeper/experiment/tools/entropy_test.py)<br>[experiment/tools/morpheme_test.py](../../../../sources/Samsung__CredSweeper/experiment/tools/morpheme_test.py)<br>[experiment/tools/strength_test.py](../../../../sources/Samsung__CredSweeper/experiment/tools/strength_test.py) |
| mcp | 0 | not obvious |
| retrieval | 1 | [docs/source/index.rst](../../../../sources/Samsung__CredSweeper/docs/source/index.rst) |
| spec | 6 | [requirements.txt](../../../../sources/Samsung__CredSweeper/requirements.txt)<br>[fuzz/requirements.txt](../../../../sources/Samsung__CredSweeper/fuzz/requirements.txt)<br>[experiment/requirements.txt](../../../../sources/Samsung__CredSweeper/experiment/requirements.txt)<br>[docs/requirements.txt](../../../../sources/Samsung__CredSweeper/docs/requirements.txt)<br>[docs/source/overall_architecture.rst](../../../../sources/Samsung__CredSweeper/docs/source/overall_architecture.rst)<br>[docs/images/Architecture.png](../../../../sources/Samsung__CredSweeper/docs/images/Architecture.png) |
| eval | 376 | [tests/__init__.py](../../../../sources/Samsung__CredSweeper/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/Samsung__CredSweeper/tests/conftest.py)<br>[tests/README.md](../../../../sources/Samsung__CredSweeper/tests/README.md)<br>[tests/test_app.py](../../../../sources/Samsung__CredSweeper/tests/test_app.py)<br>[tests/test_doc.py](../../../../sources/Samsung__CredSweeper/tests/test_doc.py)<br>[tests/test_git.py](../../../../sources/Samsung__CredSweeper/tests/test_git.py)<br>[tests/test_main.py](../../../../sources/Samsung__CredSweeper/tests/test_main.py)<br>[tests/utils/__init__.py](../../../../sources/Samsung__CredSweeper/tests/utils/__init__.py) |
| security | 22 | [SECURITY.md](../../../../sources/Samsung__CredSweeper/SECURITY.md)<br>[tests/samples/auth_n.template](../../../../sources/Samsung__CredSweeper/tests/samples/auth_n.template)<br>[tests/samples/auth.hs](../../../../sources/Samsung__CredSweeper/tests/samples/auth.hs)<br>[tests/samples/azure_secret_value](../../../../sources/Samsung__CredSweeper/tests/samples/azure_secret_value)<br>[tests/samples/digital_ocean_oauth_access_token](../../../../sources/Samsung__CredSweeper/tests/samples/digital_ocean_oauth_access_token)<br>[tests/samples/doc_secret_pair](../../../../sources/Samsung__CredSweeper/tests/samples/doc_secret_pair)<br>[tests/samples/dropbox_api_secret_long_term](../../../../sources/Samsung__CredSweeper/tests/samples/dropbox_api_secret_long_term)<br>[tests/samples/dropbox_oauth_token](../../../../sources/Samsung__CredSweeper/tests/samples/dropbox_oauth_token) |
| ci | 7 | [.github/workflows/action.yml](../../../../sources/Samsung__CredSweeper/.github/workflows/action.yml)<br>[.github/workflows/benchmark.yml](../../../../sources/Samsung__CredSweeper/.github/workflows/benchmark.yml)<br>[.github/workflows/check.yml](../../../../sources/Samsung__CredSweeper/.github/workflows/check.yml)<br>[.github/workflows/fuzz.yml](../../../../sources/Samsung__CredSweeper/.github/workflows/fuzz.yml)<br>[.github/workflows/pypi.yml](../../../../sources/Samsung__CredSweeper/.github/workflows/pypi.yml)<br>[.github/workflows/rottenness.yml](../../../../sources/Samsung__CredSweeper/.github/workflows/rottenness.yml)<br>[.github/workflows/test.yml](../../../../sources/Samsung__CredSweeper/.github/workflows/test.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 40 | [README.md](../../../../sources/Samsung__CredSweeper/README.md)<br>[tests/README.md](../../../../sources/Samsung__CredSweeper/tests/README.md)<br>[fuzz/README.md](../../../../sources/Samsung__CredSweeper/fuzz/README.md)<br>[experiment/README.md](../../../../sources/Samsung__CredSweeper/experiment/README.md)<br>[docs/make.bat](../../../../sources/Samsung__CredSweeper/docs/make.bat)<br>[docs/Makefile](../../../../sources/Samsung__CredSweeper/docs/Makefile)<br>[docs/README.md](../../../../sources/Samsung__CredSweeper/docs/README.md)<br>[docs/requirements.txt](../../../../sources/Samsung__CredSweeper/docs/requirements.txt) |
| config | 6 | [pyproject.toml](../../../../sources/Samsung__CredSweeper/pyproject.toml)<br>[requirements.txt](../../../../sources/Samsung__CredSweeper/requirements.txt)<br>[fuzz/requirements.txt](../../../../sources/Samsung__CredSweeper/fuzz/requirements.txt)<br>[experiment/requirements.txt](../../../../sources/Samsung__CredSweeper/experiment/requirements.txt)<br>[docs/Makefile](../../../../sources/Samsung__CredSweeper/docs/Makefile)<br>[docs/requirements.txt](../../../../sources/Samsung__CredSweeper/docs/requirements.txt) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 376 | [tests/__init__.py](../../../../sources/Samsung__CredSweeper/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/Samsung__CredSweeper/tests/conftest.py)<br>[tests/README.md](../../../../sources/Samsung__CredSweeper/tests/README.md)<br>[tests/test_app.py](../../../../sources/Samsung__CredSweeper/tests/test_app.py)<br>[tests/test_doc.py](../../../../sources/Samsung__CredSweeper/tests/test_doc.py)<br>[tests/test_git.py](../../../../sources/Samsung__CredSweeper/tests/test_git.py) |
| CI workflows | 7 | [.github/workflows/action.yml](../../../../sources/Samsung__CredSweeper/.github/workflows/action.yml)<br>[.github/workflows/benchmark.yml](../../../../sources/Samsung__CredSweeper/.github/workflows/benchmark.yml)<br>[.github/workflows/check.yml](../../../../sources/Samsung__CredSweeper/.github/workflows/check.yml)<br>[.github/workflows/fuzz.yml](../../../../sources/Samsung__CredSweeper/.github/workflows/fuzz.yml)<br>[.github/workflows/pypi.yml](../../../../sources/Samsung__CredSweeper/.github/workflows/pypi.yml)<br>[.github/workflows/rottenness.yml](../../../../sources/Samsung__CredSweeper/.github/workflows/rottenness.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 22 | [SECURITY.md](../../../../sources/Samsung__CredSweeper/SECURITY.md)<br>[tests/samples/auth_n.template](../../../../sources/Samsung__CredSweeper/tests/samples/auth_n.template)<br>[tests/samples/auth.hs](../../../../sources/Samsung__CredSweeper/tests/samples/auth.hs)<br>[tests/samples/azure_secret_value](../../../../sources/Samsung__CredSweeper/tests/samples/azure_secret_value)<br>[tests/samples/digital_ocean_oauth_access_token](../../../../sources/Samsung__CredSweeper/tests/samples/digital_ocean_oauth_access_token)<br>[tests/samples/doc_secret_pair](../../../../sources/Samsung__CredSweeper/tests/samples/doc_secret_pair) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `SECURITY.md`, `tests/samples/auth_n.template`, `tests/samples/auth.hs`.
2. Trace execution through entrypoints: `fuzz/__main__.py`, `experiment/main.py`, `credsweeper/__main__.py`.
3. Map agent/tool runtime through: `experiment/tools/base64_test.py`, `experiment/tools/entropy_test.py`, `experiment/tools/morpheme_test.py`.
4. Inspect retrieval/memory/indexing through: `docs/source/index.rst`.
5. Verify behavior through test/eval files: `tests/__init__.py`, `tests/conftest.py`, `tests/README.md`.

## Existing Repository Insight

보안/거버넌스/안전 관점에서 CredSweeper is a tool to detect credentials in any directories or files. CredSweeper could help users to detect unwanted. 핵심 구조 신호는 Python, pyproject.toml, requirements.txt, README.md, LICENSE, tests이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 보안/거버넌스/안전 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 needs deeper structural scan입니다.
