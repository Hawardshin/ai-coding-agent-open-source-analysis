# strands-agents/evals Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

A comprehensive evaluation framework for AI agents and LLM applications.

## 요약

- 조사 단위: `sources/strands-agents__evals` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 350 files, 86 directories, depth score 99, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=AGENTS.md, SKILL.md, tests/strands_evals/tools/test_evaluation_tools.py이고, 의존성 단서는 langchain, langgraph, pydantic, opentelemetry, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | strands-agents/evals |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 145 |
| Forks | 39 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/strands-agents__evals](../../../../sources/strands-agents__evals) |
| Existing report | [reports/global-trending/repositories/strands-agents__evals.md](../../../global-trending/repositories/strands-agents__evals.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 350 / 86 |
| Max observed depth | 8 |
| Top directories | .github, src, tests, tests_integ |
| Top extensions | .py: 320, .yml: 14, .md: 9, (none): 3, .json: 2, .toml: 1, .yaml: 1 |
| Source patterns | cli-first, agent/tool runtime, retrieval/vector path, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 38 |
| src | source boundary | 21 |
| .github | ci surface | 1 |
| tests_integ | validation surface | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | pyproject.toml | strands-evals | strands-evals |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
| agentFrameworks | langchain, langgraph |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | none |
| developerSurface | none |
| observability | opentelemetry |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| agentRuntime | [AGENTS.md](../../../../sources/strands-agents__evals/AGENTS.md) | agentRuntime signal |
| agentRuntime | [SKILL.md](../../../../sources/strands-agents__evals/SKILL.md) | agentRuntime signal |
| agentRuntime | [tests/strands_evals/tools/test_evaluation_tools.py](../../../../sources/strands-agents__evals/tests/strands_evals/tools/test_evaluation_tools.py) | agentRuntime signal |
| agentRuntime | [tests/strands_evals/cli/fixtures/agents.py](../../../../sources/strands-agents__evals/tests/strands_evals/cli/fixtures/agents.py) | agentRuntime signal |
| entrypoints | [src/strands_evals/__main__.py](../../../../sources/strands-agents__evals/src/strands_evals/__main__.py) | entrypoints signal |
| entrypoints | [src/strands_evals/cli/__main__.py](../../../../sources/strands-agents__evals/src/strands_evals/cli/__main__.py) | entrypoints signal |
| entrypoints | [src/strands_evals/cli/main.py](../../../../sources/strands-agents__evals/src/strands_evals/cli/main.py) | entrypoints signal |
| config | [pyproject.toml](../../../../sources/strands-agents__evals/pyproject.toml) | config signal |
| ci | [.github/workflows/auto-strands-review.yml](../../../../sources/strands-agents__evals/.github/workflows/auto-strands-review.yml) | ci support |
| ci | [.github/workflows/integration-test.yml](../../../../sources/strands-agents__evals/.github/workflows/integration-test.yml) | ci support |
| eval | [tests_integ/conftest.py](../../../../sources/strands-agents__evals/tests_integ/conftest.py) | eval support |
| eval | [tests_integ/test_cloudwatch_provider.py](../../../../sources/strands-agents__evals/tests_integ/test_cloudwatch_provider.py) | eval support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 3 | [src/strands_evals/__main__.py](../../../../sources/strands-agents__evals/src/strands_evals/__main__.py)<br>[src/strands_evals/cli/__main__.py](../../../../sources/strands-agents__evals/src/strands_evals/cli/__main__.py)<br>[src/strands_evals/cli/main.py](../../../../sources/strands-agents__evals/src/strands_evals/cli/main.py) |
| agentRuntime | 17 | [AGENTS.md](../../../../sources/strands-agents__evals/AGENTS.md)<br>[SKILL.md](../../../../sources/strands-agents__evals/SKILL.md)<br>[tests/strands_evals/tools/test_evaluation_tools.py](../../../../sources/strands-agents__evals/tests/strands_evals/tools/test_evaluation_tools.py)<br>[tests/strands_evals/cli/fixtures/agents.py](../../../../sources/strands-agents__evals/tests/strands_evals/cli/fixtures/agents.py)<br>[src/strands_evals/types/simulation/tool.py](../../../../sources/strands-agents__evals/src/strands_evals/types/simulation/tool.py)<br>[src/strands_evals/tools/evaluation_tools.py](../../../../sources/strands-agents__evals/src/strands_evals/tools/evaluation_tools.py)<br>[src/strands_evals/simulation/tool_simulator.py](../../../../sources/strands-agents__evals/src/strands_evals/simulation/tool_simulator.py)<br>[src/strands_evals/simulation/tools/__init__.py](../../../../sources/strands-agents__evals/src/strands_evals/simulation/tools/__init__.py) |
| mcp | 0 | not obvious |
| retrieval | 4 | [tests/strands_evals/mappers/test_strands_in_memory_mapper.py](../../../../sources/strands-agents__evals/tests/strands_evals/mappers/test_strands_in_memory_mapper.py)<br>[tests/strands_evals/extractors/test_graph_extractor.py](../../../../sources/strands-agents__evals/tests/strands_evals/extractors/test_graph_extractor.py)<br>[src/strands_evals/mappers/strands_in_memory_session_mapper.py](../../../../sources/strands-agents__evals/src/strands_evals/mappers/strands_in_memory_session_mapper.py)<br>[src/strands_evals/extractors/graph_extractor.py](../../../../sources/strands-agents__evals/src/strands_evals/extractors/graph_extractor.py) |
| spec | 0 | not obvious |
| eval | 128 | [tests_integ/conftest.py](../../../../sources/strands-agents__evals/tests_integ/conftest.py)<br>[tests_integ/test_cloudwatch_provider.py](../../../../sources/strands-agents__evals/tests_integ/test_cloudwatch_provider.py)<br>[tests_integ/test_langchain_openinference_eval.py](../../../../sources/strands-agents__evals/tests_integ/test_langchain_openinference_eval.py)<br>[tests_integ/test_langchain_traceloop_eval.py](../../../../sources/strands-agents__evals/tests_integ/test_langchain_traceloop_eval.py)<br>[tests_integ/test_langfuse_provider.py](../../../../sources/strands-agents__evals/tests_integ/test_langfuse_provider.py)<br>[tests_integ/test_multimodal_output_evaluator.py](../../../../sources/strands-agents__evals/tests_integ/test_multimodal_output_evaluator.py)<br>[tests_integ/test_output_evaluator.py](../../../../sources/strands-agents__evals/tests_integ/test_output_evaluator.py)<br>[tests/__init__.py](../../../../sources/strands-agents__evals/tests/__init__.py) |
| security | 0 | not obvious |
| ci | 8 | [.github/workflows/auto-strands-review.yml](../../../../sources/strands-agents__evals/.github/workflows/auto-strands-review.yml)<br>[.github/workflows/integration-test.yml](../../../../sources/strands-agents__evals/.github/workflows/integration-test.yml)<br>[.github/workflows/issue-labeler.yml](../../../../sources/strands-agents__evals/.github/workflows/issue-labeler.yml)<br>[.github/workflows/pr-and-push.yml](../../../../sources/strands-agents__evals/.github/workflows/pr-and-push.yml)<br>[.github/workflows/pr-title.yml](../../../../sources/strands-agents__evals/.github/workflows/pr-title.yml)<br>[.github/workflows/pypi-publish-on-release.yml](../../../../sources/strands-agents__evals/.github/workflows/pypi-publish-on-release.yml)<br>[.github/workflows/strands-command.yml](../../../../sources/strands-agents__evals/.github/workflows/strands-command.yml)<br>[.github/workflows/test-lint.yml](../../../../sources/strands-agents__evals/.github/workflows/test-lint.yml) |
| container | 0 | not obvious |
| instruction | 1 | [AGENTS.md](../../../../sources/strands-agents__evals/AGENTS.md) |
| docs | 3 | [README.md](../../../../sources/strands-agents__evals/README.md)<br>[src/strands_evals/providers/README.md](../../../../sources/strands-agents__evals/src/strands_evals/providers/README.md)<br>[src/strands_evals/experimental/redteam/README.md](../../../../sources/strands-agents__evals/src/strands_evals/experimental/redteam/README.md) |
| config | 1 | [pyproject.toml](../../../../sources/strands-agents__evals/pyproject.toml) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 128 | [tests_integ/conftest.py](../../../../sources/strands-agents__evals/tests_integ/conftest.py)<br>[tests_integ/test_cloudwatch_provider.py](../../../../sources/strands-agents__evals/tests_integ/test_cloudwatch_provider.py)<br>[tests_integ/test_langchain_openinference_eval.py](../../../../sources/strands-agents__evals/tests_integ/test_langchain_openinference_eval.py)<br>[tests_integ/test_langchain_traceloop_eval.py](../../../../sources/strands-agents__evals/tests_integ/test_langchain_traceloop_eval.py)<br>[tests_integ/test_langfuse_provider.py](../../../../sources/strands-agents__evals/tests_integ/test_langfuse_provider.py)<br>[tests_integ/test_multimodal_output_evaluator.py](../../../../sources/strands-agents__evals/tests_integ/test_multimodal_output_evaluator.py) |
| CI workflows | 8 | [.github/workflows/auto-strands-review.yml](../../../../sources/strands-agents__evals/.github/workflows/auto-strands-review.yml)<br>[.github/workflows/integration-test.yml](../../../../sources/strands-agents__evals/.github/workflows/integration-test.yml)<br>[.github/workflows/issue-labeler.yml](../../../../sources/strands-agents__evals/.github/workflows/issue-labeler.yml)<br>[.github/workflows/pr-and-push.yml](../../../../sources/strands-agents__evals/.github/workflows/pr-and-push.yml)<br>[.github/workflows/pr-title.yml](../../../../sources/strands-agents__evals/.github/workflows/pr-title.yml)<br>[.github/workflows/pypi-publish-on-release.yml](../../../../sources/strands-agents__evals/.github/workflows/pypi-publish-on-release.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 1 | [AGENTS.md](../../../../sources/strands-agents__evals/AGENTS.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `AGENTS.md`, `SKILL.md`, `tests/strands_evals/tools/test_evaluation_tools.py`.
2. Trace execution through entrypoints: `src/strands_evals/__main__.py`, `src/strands_evals/cli/__main__.py`, `src/strands_evals/cli/main.py`.
3. Map agent/tool runtime through: `AGENTS.md`, `SKILL.md`, `tests/strands_evals/tools/test_evaluation_tools.py`.
4. Inspect retrieval/memory/indexing through: `tests/strands_evals/mappers/test_strands_in_memory_mapper.py`, `tests/strands_evals/extractors/test_graph_extractor.py`, `src/strands_evals/mappers/strands_in_memory_session_mapper.py`.
5. Verify behavior through test/eval files: `tests_integ/conftest.py`, `tests_integ/test_cloudwatch_provider.py`, `tests_integ/test_langchain_openinference_eval.py`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 A comprehensive evaluation framework for AI agents and LLM applications.. 핵심 구조 신호는 Python, pyproject.toml, README.md, AGENTS.md, LICENSE, langchain이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
