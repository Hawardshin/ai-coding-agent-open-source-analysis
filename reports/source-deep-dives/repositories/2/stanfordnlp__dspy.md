# stanfordnlp/dspy Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Local clone structure analysis: 540 files, 149 directories.

## 요약

- 조사 단위: `sources/stanfordnlp__dspy` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 540 files, 149 directories, depth score 125, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

평가/관측/품질 관점에서 agent/tool runtime, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 eval=tests/__init__.py, tests/conftest.py, tests/mock_interpreter.py이고, 의존성 단서는 openai, anthropic, mcp, langchain, pydantic, weaviate, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 quality and evaluation comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | stanfordnlp/dspy |
| Topic | Evals, Observability, and Quality / 평가/관측/품질 |
| Region | mixed |
| Language | none |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | solid |
| Evidence | deep-source+report |
| Source | [sources/stanfordnlp__dspy](../../../../sources/stanfordnlp__dspy) |
| Existing report | [reports/clone-structures/stanfordnlp__dspy.md](../../../clone-structures/stanfordnlp__dspy.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 540 / 149 |
| Max observed depth | 7 |
| Top directories | .github, docs, dspy, tests |
| Top extensions | .py: 260, .md: 167, .png: 31, .ipynb: 20, .json: 15, .svg: 13, .yml: 10, (none): 5, .js: 4, .html: 3, .yaml: 3, .css: 2 |
| Source patterns | agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 95 |
| tests | validation surface | 49 |
| .github | ci surface | 1 |
| dspy | top-level component | 1 |


## How It Runs

_No command surface extracted from root manifests._


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai, anthropic |
| agentProtocols | mcp |
| agentFrameworks | langchain |
| vectorStores | weaviate |
| modelRuntime | none |
| webRuntime | none |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| eval | [tests/__init__.py](../../../../sources/stanfordnlp__dspy/tests/__init__.py) | eval signal |
| eval | [tests/conftest.py](../../../../sources/stanfordnlp__dspy/tests/conftest.py) | eval signal |
| eval | [tests/mock_interpreter.py](../../../../sources/stanfordnlp__dspy/tests/mock_interpreter.py) | eval signal |
| eval | [tests/README.md](../../../../sources/stanfordnlp__dspy/tests/README.md) | eval signal |
| entrypoints | [tests/reliability/generate/__main__.py](../../../../sources/stanfordnlp__dspy/tests/reliability/generate/__main__.py) | entrypoints signal |
| config | [pyproject.toml](../../../../sources/stanfordnlp__dspy/pyproject.toml) | config signal |
| config | [uv.lock](../../../../sources/stanfordnlp__dspy/uv.lock) | config signal |
| config | [docs/requirements.txt](../../../../sources/stanfordnlp__dspy/docs/requirements.txt) | config signal |
| config | [.github/.internal_dspyai/pyproject.toml](../../../../sources/stanfordnlp__dspy/.github/.internal_dspyai/pyproject.toml) | config signal |
| ci | [.github/workflows/build_and_release.yml](../../../../sources/stanfordnlp__dspy/.github/workflows/build_and_release.yml) | ci signal |
| ci | [.github/workflows/docs-push.yml](../../../../sources/stanfordnlp__dspy/.github/workflows/docs-push.yml) | ci signal |
| ci | [.github/workflows/precommits_check.yml](../../../../sources/stanfordnlp__dspy/.github/workflows/precommits_check.yml) | ci signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 1 | [tests/reliability/generate/__main__.py](../../../../sources/stanfordnlp__dspy/tests/reliability/generate/__main__.py) |
| agentRuntime | 16 | [dspy/primitives/runner.js](../../../../sources/stanfordnlp__dspy/dspy/primitives/runner.js)<br>[dspy/primitives/sandbox_serializable.py](../../../../sources/stanfordnlp__dspy/dspy/primitives/sandbox_serializable.py)<br>[dspy/adapters/types/tool.py](../../../../sources/stanfordnlp__dspy/dspy/adapters/types/tool.py)<br>[docs/hooks/fetch_stats.py](../../../../sources/stanfordnlp__dspy/docs/hooks/fetch_stats.py)<br>[docs/docs/tutorials/tool_use/index.ipynb](../../../../sources/stanfordnlp__dspy/docs/docs/tutorials/tool_use/index.ipynb)<br>[docs/docs/tutorials/agents/index.ipynb](../../../../sources/stanfordnlp__dspy/docs/docs/tutorials/agents/index.ipynb)<br>[docs/docs/tutorials/agents/mlflow-tracing-agent.png](../../../../sources/stanfordnlp__dspy/docs/docs/tutorials/agents/mlflow-tracing-agent.png)<br>[docs/docs/learn/programming/tools.md](../../../../sources/stanfordnlp__dspy/docs/docs/learn/programming/tools.md) |
| mcp | 6 | [tests/utils/test_mcp.py](../../../../sources/stanfordnlp__dspy/tests/utils/test_mcp.py)<br>[tests/utils/resources/mcp_server.py](../../../../sources/stanfordnlp__dspy/tests/utils/resources/mcp_server.py)<br>[dspy/utils/mcp.py](../../../../sources/stanfordnlp__dspy/dspy/utils/mcp.py)<br>[docs/docs/tutorials/mcp/index.md](../../../../sources/stanfordnlp__dspy/docs/docs/tutorials/mcp/index.md)<br>[docs/docs/learn/programming/mcp.md](../../../../sources/stanfordnlp__dspy/docs/docs/learn/programming/mcp.md)<br>[docs/docs/diving-deeper/tools-react-and-mcp.md](../../../../sources/stanfordnlp__dspy/docs/docs/diving-deeper/tools-react-and-mcp.md) |
| retrieval | 61 | [tests/clients/test_embedding.py](../../../../sources/stanfordnlp__dspy/tests/clients/test_embedding.py)<br>[dspy/clients/embedding.py](../../../../sources/stanfordnlp__dspy/dspy/clients/embedding.py)<br>[docs/docs/index.md](../../../../sources/stanfordnlp__dspy/docs/docs/index.md)<br>[docs/docs/tutorials/index.md](../../../../sources/stanfordnlp__dspy/docs/docs/tutorials/index.md)<br>[docs/docs/tutorials/yahoo_finance_react/index.md](../../../../sources/stanfordnlp__dspy/docs/docs/tutorials/yahoo_finance_react/index.md)<br>[docs/docs/tutorials/tool_use/index.ipynb](../../../../sources/stanfordnlp__dspy/docs/docs/tutorials/tool_use/index.ipynb)<br>[docs/docs/tutorials/streaming/index.md](../../../../sources/stanfordnlp__dspy/docs/docs/tutorials/streaming/index.md)<br>[docs/docs/tutorials/saving/index.md](../../../../sources/stanfordnlp__dspy/docs/docs/tutorials/saving/index.md) |
| spec | 2 | [docs/requirements.txt](../../../../sources/stanfordnlp__dspy/docs/requirements.txt)<br>[docs/docs/roadmap.md](../../../../sources/stanfordnlp__dspy/docs/docs/roadmap.md) |
| eval | 158 | [tests/__init__.py](../../../../sources/stanfordnlp__dspy/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/stanfordnlp__dspy/tests/conftest.py)<br>[tests/mock_interpreter.py](../../../../sources/stanfordnlp__dspy/tests/mock_interpreter.py)<br>[tests/README.md](../../../../sources/stanfordnlp__dspy/tests/README.md)<br>[tests/utils/__init__.py](../../../../sources/stanfordnlp__dspy/tests/utils/__init__.py)<br>[tests/utils/test_annotation.py](../../../../sources/stanfordnlp__dspy/tests/utils/test_annotation.py)<br>[tests/utils/test_asyncify.py](../../../../sources/stanfordnlp__dspy/tests/utils/test_asyncify.py)<br>[tests/utils/test_exceptions.py](../../../../sources/stanfordnlp__dspy/tests/utils/test_exceptions.py) |
| security | 3 | [SECURITY.md](../../../../sources/stanfordnlp__dspy/SECURITY.md)<br>[tests/primitives/test_sandbox_serializable.py](../../../../sources/stanfordnlp__dspy/tests/primitives/test_sandbox_serializable.py)<br>[dspy/primitives/sandbox_serializable.py](../../../../sources/stanfordnlp__dspy/dspy/primitives/sandbox_serializable.py) |
| ci | 5 | [.github/workflows/build_and_release.yml](../../../../sources/stanfordnlp__dspy/.github/workflows/build_and_release.yml)<br>[.github/workflows/docs-push.yml](../../../../sources/stanfordnlp__dspy/.github/workflows/docs-push.yml)<br>[.github/workflows/precommits_check.yml](../../../../sources/stanfordnlp__dspy/.github/workflows/precommits_check.yml)<br>[.github/workflows/run_tests.yml](../../../../sources/stanfordnlp__dspy/.github/workflows/run_tests.yml)<br>[.github/workflows/build_utils/test_version.py](../../../../sources/stanfordnlp__dspy/.github/workflows/build_utils/test_version.py) |
| container | 2 | [docs/docs/tutorials/deployment/dspy_mlflow_ui.png](../../../../sources/stanfordnlp__dspy/docs/docs/tutorials/deployment/dspy_mlflow_ui.png)<br>[docs/docs/tutorials/deployment/index.md](../../../../sources/stanfordnlp__dspy/docs/docs/tutorials/deployment/index.md) |
| instruction | 0 | not obvious |
| docs | 248 | [README.md](../../../../sources/stanfordnlp__dspy/README.md)<br>[tests/README.md](../../../../sources/stanfordnlp__dspy/tests/README.md)<br>[tests/reliability/README.md](../../../../sources/stanfordnlp__dspy/tests/reliability/README.md)<br>[tests/docs/test_mkdocs_links.py](../../../../sources/stanfordnlp__dspy/tests/docs/test_mkdocs_links.py)<br>[docs/.gitignore](../../../../sources/stanfordnlp__dspy/docs/.gitignore)<br>[docs/mkdocs.yml](../../../../sources/stanfordnlp__dspy/docs/mkdocs.yml)<br>[docs/Pipfile](../../../../sources/stanfordnlp__dspy/docs/Pipfile)<br>[docs/Pipfile.lock](../../../../sources/stanfordnlp__dspy/docs/Pipfile.lock) |
| config | 4 | [pyproject.toml](../../../../sources/stanfordnlp__dspy/pyproject.toml)<br>[uv.lock](../../../../sources/stanfordnlp__dspy/uv.lock)<br>[docs/requirements.txt](../../../../sources/stanfordnlp__dspy/docs/requirements.txt)<br>[.github/.internal_dspyai/pyproject.toml](../../../../sources/stanfordnlp__dspy/.github/.internal_dspyai/pyproject.toml) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 158 | [tests/__init__.py](../../../../sources/stanfordnlp__dspy/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/stanfordnlp__dspy/tests/conftest.py)<br>[tests/mock_interpreter.py](../../../../sources/stanfordnlp__dspy/tests/mock_interpreter.py)<br>[tests/README.md](../../../../sources/stanfordnlp__dspy/tests/README.md)<br>[tests/utils/__init__.py](../../../../sources/stanfordnlp__dspy/tests/utils/__init__.py)<br>[tests/utils/test_annotation.py](../../../../sources/stanfordnlp__dspy/tests/utils/test_annotation.py) |
| CI workflows | 5 | [.github/workflows/build_and_release.yml](../../../../sources/stanfordnlp__dspy/.github/workflows/build_and_release.yml)<br>[.github/workflows/docs-push.yml](../../../../sources/stanfordnlp__dspy/.github/workflows/docs-push.yml)<br>[.github/workflows/precommits_check.yml](../../../../sources/stanfordnlp__dspy/.github/workflows/precommits_check.yml)<br>[.github/workflows/run_tests.yml](../../../../sources/stanfordnlp__dspy/.github/workflows/run_tests.yml)<br>[.github/workflows/build_utils/test_version.py](../../../../sources/stanfordnlp__dspy/.github/workflows/build_utils/test_version.py) |
| Containers / deploy | 2 | [docs/docs/tutorials/deployment/dspy_mlflow_ui.png](../../../../sources/stanfordnlp__dspy/docs/docs/tutorials/deployment/dspy_mlflow_ui.png)<br>[docs/docs/tutorials/deployment/index.md](../../../../sources/stanfordnlp__dspy/docs/docs/tutorials/deployment/index.md) |
| Security / policy | 3 | [SECURITY.md](../../../../sources/stanfordnlp__dspy/SECURITY.md)<br>[tests/primitives/test_sandbox_serializable.py](../../../../sources/stanfordnlp__dspy/tests/primitives/test_sandbox_serializable.py)<br>[dspy/primitives/sandbox_serializable.py](../../../../sources/stanfordnlp__dspy/dspy/primitives/sandbox_serializable.py) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `tests/__init__.py`, `tests/conftest.py`, `tests/mock_interpreter.py`.
2. Trace execution through entrypoints: `tests/reliability/generate/__main__.py`.
3. Map agent/tool runtime through: `dspy/primitives/runner.js`, `dspy/primitives/sandbox_serializable.py`, `dspy/adapters/types/tool.py`.
4. Inspect retrieval/memory/indexing through: `tests/clients/test_embedding.py`, `dspy/clients/embedding.py`, `docs/docs/index.md`.
5. Verify behavior through test/eval files: `tests/__init__.py`, `tests/conftest.py`, `tests/mock_interpreter.py`.

## Existing Repository Insight

평가/관측/품질 관점에서 Local clone structure analysis 540 files, 149 directories.. 핵심 구조 신호는 pyproject.toml, README.md, LICENSE, openai, anthropic, langchain이며, deep-source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

mixed 신호의 평가/관측/품질 레포입니다. 활용 관점은 quality and evaluation comparison point이고, 후속 확인 포인트는 license metadata missing입니다.
