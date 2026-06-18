# hexo-ai/sia Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

SIA is a Self Improving AI framework to autonomously improve the performance of any AI system (Model / Agent) on a benchmark task.

## 요약

- 조사 단위: `sources/hexo-ai__sia` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 128 files, 35 directories, depth score 102, key references 9개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

평가/관측/품질 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 eval=EVALUATION_GUIDE.md, tests/__init__.py, tests/conftest.py이고, 의존성 단서는 claude, fastapi, pydantic, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 9개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 quality and evaluation comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | hexo-ai/sia |
| Topic | Evals, Observability, and Quality / 평가/관측/품질 |
| Region | global |
| Language | Python |
| Stars | 1765 |
| Forks | 204 |
| License | none |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/hexo-ai__sia](../../../../sources/hexo-ai__sia) |
| Existing report | [reports/global-trending/repositories/hexo-ai__sia.md](../../../global-trending/repositories/hexo-ai__sia.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 128 / 35 |
| Max observed depth | 6 |
| Top directories | .github, docs, sia, tests |
| Top extensions | .py: 59, .json: 21, .md: 18, .csv: 9, .png: 7, .txt: 6, .yml: 3, (none): 3, .html: 1, .toml: 1 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 33 |
| docs | documentation surface | 13 |
| .github | ci surface | 1 |
| sia | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | pyproject.toml | sia | sia |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | claude |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | fastapi |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| eval | [EVALUATION_GUIDE.md](../../../../sources/hexo-ai__sia/EVALUATION_GUIDE.md) | eval signal |
| eval | [tests/__init__.py](../../../../sources/hexo-ai__sia/tests/__init__.py) | eval signal |
| eval | [tests/conftest.py](../../../../sources/hexo-ai__sia/tests/conftest.py) | eval signal |
| eval | [tests/golden_master.py](../../../../sources/hexo-ai__sia/tests/golden_master.py) | eval signal |
| entrypoints | [sia/__main__.py](../../../../sources/hexo-ai__sia/sia/__main__.py) | entrypoints signal |
| entrypoints | [sia/web/server.py](../../../../sources/hexo-ai__sia/sia/web/server.py) | entrypoints signal |
| config | [pyproject.toml](../../../../sources/hexo-ai__sia/pyproject.toml) | config signal |
| ci | [.github/workflows/ci.yml](../../../../sources/hexo-ai__sia/.github/workflows/ci.yml) | ci signal |
| ci | [.github/workflows/publish.yml](../../../../sources/hexo-ai__sia/.github/workflows/publish.yml) | ci signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 2 | [sia/__main__.py](../../../../sources/hexo-ai__sia/sia/__main__.py)<br>[sia/web/server.py](../../../../sources/hexo-ai__sia/sia/web/server.py) |
| agentRuntime | 8 | [tests/golden/context.md](../../../../sources/hexo-ai__sia/tests/golden/context.md)<br>[sia/agent_reference.py](../../../../sources/hexo-ai__sia/sia/agent_reference.py)<br>[sia/context_manager.py](../../../../sources/hexo-ai__sia/sia/context_manager.py)<br>[sia/agent_impls/__init__.py](../../../../sources/hexo-ai__sia/sia/agent_impls/__init__.py)<br>[sia/agent_impls/base.py](../../../../sources/hexo-ai__sia/sia/agent_impls/base.py)<br>[sia/agent_impls/claude.py](../../../../sources/hexo-ai__sia/sia/agent_impls/claude.py)<br>[sia/agent_impls/openhands.py](../../../../sources/hexo-ai__sia/sia/agent_impls/openhands.py)<br>[sia/agent_impls/pydantic_ai.py](../../../../sources/hexo-ai__sia/sia/agent_impls/pydantic_ai.py) |
| mcp | 0 | not obvious |
| retrieval | 1 | [sia/web/static/index.html](../../../../sources/hexo-ai__sia/sia/web/static/index.html) |
| spec | 1 | [docs/architecture.md](../../../../sources/hexo-ai__sia/docs/architecture.md) |
| eval | 36 | [EVALUATION_GUIDE.md](../../../../sources/hexo-ai__sia/EVALUATION_GUIDE.md)<br>[tests/__init__.py](../../../../sources/hexo-ai__sia/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/hexo-ai__sia/tests/conftest.py)<br>[tests/golden_master.py](../../../../sources/hexo-ai__sia/tests/golden_master.py)<br>[tests/test_agent_impls.py](../../../../sources/hexo-ai__sia/tests/test_agent_impls.py)<br>[tests/test_agent_reference.py](../../../../sources/hexo-ai__sia/tests/test_agent_reference.py)<br>[tests/test_cli_interface.py](../../../../sources/hexo-ai__sia/tests/test_cli_interface.py)<br>[tests/test_config_injection.py](../../../../sources/hexo-ai__sia/tests/test_config_injection.py) |
| security | 2 | [SECURITY.md](../../../../sources/hexo-ai__sia/SECURITY.md)<br>[tests/test_sandbox.py](../../../../sources/hexo-ai__sia/tests/test_sandbox.py) |
| ci | 2 | [.github/workflows/ci.yml](../../../../sources/hexo-ai__sia/.github/workflows/ci.yml)<br>[.github/workflows/publish.yml](../../../../sources/hexo-ai__sia/.github/workflows/publish.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 12 | [README.md](../../../../sources/hexo-ai__sia/README.md)<br>[docs/architecture.md](../../../../sources/hexo-ai__sia/docs/architecture.md)<br>[docs/configuration.md](../../../../sources/hexo-ai__sia/docs/configuration.md)<br>[docs/denoising.png](../../../../sources/hexo-ai__sia/docs/denoising.png)<br>[docs/flow.png](../../../../sources/hexo-ai__sia/docs/flow.png)<br>[docs/gpqa.png](../../../../sources/hexo-ai__sia/docs/gpqa.png)<br>[docs/lawbench.png](../../../../sources/hexo-ai__sia/docs/lawbench.png)<br>[docs/ml_agent.png](../../../../sources/hexo-ai__sia/docs/ml_agent.png) |
| config | 1 | [pyproject.toml](../../../../sources/hexo-ai__sia/pyproject.toml) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 36 | [EVALUATION_GUIDE.md](../../../../sources/hexo-ai__sia/EVALUATION_GUIDE.md)<br>[tests/__init__.py](../../../../sources/hexo-ai__sia/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/hexo-ai__sia/tests/conftest.py)<br>[tests/golden_master.py](../../../../sources/hexo-ai__sia/tests/golden_master.py)<br>[tests/test_agent_impls.py](../../../../sources/hexo-ai__sia/tests/test_agent_impls.py)<br>[tests/test_agent_reference.py](../../../../sources/hexo-ai__sia/tests/test_agent_reference.py) |
| CI workflows | 2 | [.github/workflows/ci.yml](../../../../sources/hexo-ai__sia/.github/workflows/ci.yml)<br>[.github/workflows/publish.yml](../../../../sources/hexo-ai__sia/.github/workflows/publish.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 2 | [SECURITY.md](../../../../sources/hexo-ai__sia/SECURITY.md)<br>[tests/test_sandbox.py](../../../../sources/hexo-ai__sia/tests/test_sandbox.py) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `EVALUATION_GUIDE.md`, `tests/__init__.py`, `tests/conftest.py`.
2. Trace execution through entrypoints: `sia/__main__.py`, `sia/web/server.py`.
3. Map agent/tool runtime through: `tests/golden/context.md`, `sia/agent_reference.py`, `sia/context_manager.py`.
4. Inspect retrieval/memory/indexing through: `sia/web/static/index.html`.
5. Verify behavior through test/eval files: `EVALUATION_GUIDE.md`, `tests/__init__.py`, `tests/conftest.py`.

## Existing Repository Insight

평가/관측/품질 관점에서 SIA is a Self Improving AI framework to autonomously improve the performance of any AI system Model / Agent on a benchma. 핵심 구조 신호는 Python, pyproject.toml, README.md, LICENSE, fastapi, pydantic이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 평가/관측/품질 레포입니다. 활용 관점은 quality and evaluation comparison point이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
