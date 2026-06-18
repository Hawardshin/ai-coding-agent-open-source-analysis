# microsoft/RAMPART Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

A pytest-native safety and security testing framework for agentic AI applications

## 요약

- 조사 단위: `sources/microsoft__RAMPART` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 186 files, 47 directories, depth score 102, key references 11개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

평가/관측/품질 관점에서 agent/tool runtime, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 eval=tests/__init__.py, tests/fixtures.py, tests/unit/__init__.py이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 11개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 quality and evaluation comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | microsoft/RAMPART |
| Topic | Evals, Observability, and Quality / 평가/관측/품질 |
| Region | global |
| Language | Python |
| Stars | 360 |
| Forks | 42 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/microsoft__RAMPART](../../../../sources/microsoft__RAMPART) |
| Existing report | [reports/global-trending/repositories/microsoft__RAMPART.md](../../../global-trending/repositories/microsoft__RAMPART.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 186 / 47 |
| Max observed depth | 4 |
| Top directories | .github, docs, rampart, scripts, tests |
| Top extensions | .py: 99, .md: 51, .yml: 12, .png: 5, .svg: 5, (none): 5, .yaml: 3, .css: 1, .example: 1, .html: 1, .lock: 1, .sh: 1 |
| Source patterns | agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 52 |
| tests | validation surface | 41 |
| .github | ci surface | 1 |
| rampart | top-level component | 1 |
| scripts | top-level component | 1 |


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
| eval | [tests/__init__.py](../../../../sources/microsoft__RAMPART/tests/__init__.py) | eval signal |
| eval | [tests/fixtures.py](../../../../sources/microsoft__RAMPART/tests/fixtures.py) | eval signal |
| eval | [tests/unit/__init__.py](../../../../sources/microsoft__RAMPART/tests/unit/__init__.py) | eval signal |
| eval | [tests/unit/surfaces/__init__.py](../../../../sources/microsoft__RAMPART/tests/unit/surfaces/__init__.py) | eval signal |
| config | [pyproject.toml](../../../../sources/microsoft__RAMPART/pyproject.toml) | config signal |
| config | [uv.lock](../../../../sources/microsoft__RAMPART/uv.lock) | config signal |
| ci | [.github/workflows/ci.yml](../../../../sources/microsoft__RAMPART/.github/workflows/ci.yml) | ci signal |
| ci | [.github/workflows/codeql.yml](../../../../sources/microsoft__RAMPART/.github/workflows/codeql.yml) | ci signal |
| ci | [.github/workflows/coverage.yml](../../../../sources/microsoft__RAMPART/.github/workflows/coverage.yml) | ci signal |
| ci | [.github/workflows/docs.yml](../../../../sources/microsoft__RAMPART/.github/workflows/docs.yml) | ci signal |
| instruction | [.github/copilot-instructions.md](../../../../sources/microsoft__RAMPART/.github/copilot-instructions.md) | instruction support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 1 | [rampart/evaluators/tool_called.py](../../../../sources/microsoft__RAMPART/rampart/evaluators/tool_called.py) |
| mcp | 0 | not obvious |
| retrieval | 8 | [docs/index.md](../../../../sources/microsoft__RAMPART/docs/index.md)<br>[docs/usage/index.md](../../../../sources/microsoft__RAMPART/docs/usage/index.md)<br>[docs/probes/index.md](../../../../sources/microsoft__RAMPART/docs/probes/index.md)<br>[docs/getting-started/index.md](../../../../sources/microsoft__RAMPART/docs/getting-started/index.md)<br>[docs/contributing/index.md](../../../../sources/microsoft__RAMPART/docs/contributing/index.md)<br>[docs/concepts/index.md](../../../../sources/microsoft__RAMPART/docs/concepts/index.md)<br>[docs/attacks/index.md](../../../../sources/microsoft__RAMPART/docs/attacks/index.md)<br>[docs/api/index.md](../../../../sources/microsoft__RAMPART/docs/api/index.md) |
| spec | 5 | [docs/images/rampart-architecture-dark.png](../../../../sources/microsoft__RAMPART/docs/images/rampart-architecture-dark.png)<br>[docs/images/rampart-architecture-dark.svg](../../../../sources/microsoft__RAMPART/docs/images/rampart-architecture-dark.svg)<br>[docs/images/rampart-architecture.png](../../../../sources/microsoft__RAMPART/docs/images/rampart-architecture.png)<br>[docs/images/rampart-architecture.svg](../../../../sources/microsoft__RAMPART/docs/images/rampart-architecture.svg)<br>[docs/contributing/architecture.md](../../../../sources/microsoft__RAMPART/docs/contributing/architecture.md) |
| eval | 55 | [tests/__init__.py](../../../../sources/microsoft__RAMPART/tests/__init__.py)<br>[tests/fixtures.py](../../../../sources/microsoft__RAMPART/tests/fixtures.py)<br>[tests/unit/__init__.py](../../../../sources/microsoft__RAMPART/tests/unit/__init__.py)<br>[tests/unit/surfaces/__init__.py](../../../../sources/microsoft__RAMPART/tests/unit/surfaces/__init__.py)<br>[tests/unit/surfaces/test_onedrive.py](../../../../sources/microsoft__RAMPART/tests/unit/surfaces/test_onedrive.py)<br>[tests/unit/reporting/__init__.py](../../../../sources/microsoft__RAMPART/tests/unit/reporting/__init__.py)<br>[tests/unit/reporting/test_json_file.py](../../../../sources/microsoft__RAMPART/tests/unit/reporting/test_json_file.py)<br>[tests/unit/reporting/test_report.py](../../../../sources/microsoft__RAMPART/tests/unit/reporting/test_report.py) |
| security | 1 | [.github/SECURITY.md](../../../../sources/microsoft__RAMPART/.github/SECURITY.md) |
| ci | 5 | [.github/workflows/ci.yml](../../../../sources/microsoft__RAMPART/.github/workflows/ci.yml)<br>[.github/workflows/codeql.yml](../../../../sources/microsoft__RAMPART/.github/workflows/codeql.yml)<br>[.github/workflows/coverage.yml](../../../../sources/microsoft__RAMPART/.github/workflows/coverage.yml)<br>[.github/workflows/docs.yml](../../../../sources/microsoft__RAMPART/.github/workflows/docs.yml)<br>[.github/workflows/scorecard.yml](../../../../sources/microsoft__RAMPART/.github/workflows/scorecard.yml) |
| container | 0 | not obvious |
| instruction | 1 | [.github/copilot-instructions.md](../../../../sources/microsoft__RAMPART/.github/copilot-instructions.md) |
| docs | 56 | [mkdocs.yml](../../../../sources/microsoft__RAMPART/mkdocs.yml)<br>[README.md](../../../../sources/microsoft__RAMPART/README.md)<br>[docs/404.md](../../../../sources/microsoft__RAMPART/docs/404.md)<br>[docs/glossary.md](../../../../sources/microsoft__RAMPART/docs/glossary.md)<br>[docs/index.md](../../../../sources/microsoft__RAMPART/docs/index.md)<br>[docs/usage/authoring-tests.md](../../../../sources/microsoft__RAMPART/docs/usage/authoring-tests.md)<br>[docs/usage/ci-integration.md](../../../../sources/microsoft__RAMPART/docs/usage/ci-integration.md)<br>[docs/usage/configuration.md](../../../../sources/microsoft__RAMPART/docs/usage/configuration.md) |
| config | 2 | [pyproject.toml](../../../../sources/microsoft__RAMPART/pyproject.toml)<br>[uv.lock](../../../../sources/microsoft__RAMPART/uv.lock) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 55 | [tests/__init__.py](../../../../sources/microsoft__RAMPART/tests/__init__.py)<br>[tests/fixtures.py](../../../../sources/microsoft__RAMPART/tests/fixtures.py)<br>[tests/unit/__init__.py](../../../../sources/microsoft__RAMPART/tests/unit/__init__.py)<br>[tests/unit/surfaces/__init__.py](../../../../sources/microsoft__RAMPART/tests/unit/surfaces/__init__.py)<br>[tests/unit/surfaces/test_onedrive.py](../../../../sources/microsoft__RAMPART/tests/unit/surfaces/test_onedrive.py)<br>[tests/unit/reporting/__init__.py](../../../../sources/microsoft__RAMPART/tests/unit/reporting/__init__.py) |
| CI workflows | 5 | [.github/workflows/ci.yml](../../../../sources/microsoft__RAMPART/.github/workflows/ci.yml)<br>[.github/workflows/codeql.yml](../../../../sources/microsoft__RAMPART/.github/workflows/codeql.yml)<br>[.github/workflows/coverage.yml](../../../../sources/microsoft__RAMPART/.github/workflows/coverage.yml)<br>[.github/workflows/docs.yml](../../../../sources/microsoft__RAMPART/.github/workflows/docs.yml)<br>[.github/workflows/scorecard.yml](../../../../sources/microsoft__RAMPART/.github/workflows/scorecard.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 1 | [.github/SECURITY.md](../../../../sources/microsoft__RAMPART/.github/SECURITY.md) |
| Agent instructions | 1 | [.github/copilot-instructions.md](../../../../sources/microsoft__RAMPART/.github/copilot-instructions.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `tests/__init__.py`, `tests/fixtures.py`, `tests/unit/__init__.py`.
2. Map agent/tool runtime through: `rampart/evaluators/tool_called.py`.
3. Inspect retrieval/memory/indexing through: `docs/index.md`, `docs/usage/index.md`, `docs/probes/index.md`.
4. Verify behavior through test/eval files: `tests/__init__.py`, `tests/fixtures.py`, `tests/unit/__init__.py`.

## Existing Repository Insight

평가/관측/품질 관점에서 A pytest native safety and security testing framework for agentic AI applications. 핵심 구조 신호는 Python, pyproject.toml, README.md, LICENSE, tests, ci이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 평가/관측/품질 레포입니다. 활용 관점은 quality and evaluation comparison point이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
