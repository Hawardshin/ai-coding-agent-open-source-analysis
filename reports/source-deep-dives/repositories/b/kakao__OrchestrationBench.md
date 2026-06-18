# kakao/OrchestrationBench Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

kakao/OrchestrationBench

## 요약

- 조사 단위: `sources/kakao__OrchestrationBench` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 533 files, 16 directories, depth score 77, key references 8개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=src/agents/__init__.py, src/agents/base_agent.py, src/agents/llm_agent.py이고, 의존성 단서는 openai, anthropic, fastapi, pydantic, typer, vllm, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 8개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | kakao/OrchestrationBench |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | Python |
| Stars | 47 |
| Forks | 10 |
| License | Apache-2.0 |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/kakao__OrchestrationBench](../../../../sources/kakao__OrchestrationBench) |
| Existing report | [reports/korea-trending/repositories/kakao__OrchestrationBench.md](../../../korea-trending/repositories/kakao__OrchestrationBench.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 533 / 16 |
| Max observed depth | 4 |
| Top directories | config, data, docs, integration, src |
| Top extensions | .yaml: 452, .py: 36, .json: 35, .md: 4, (none): 3, .example: 1, .lock: 1, .toml: 1 |
| Source patterns | cli-first, api/server, agent/tool runtime, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 10 |
| docs | documentation surface | 3 |
| config | top-level component | 1 |
| data | top-level component | 1 |
| integration | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | pyproject.toml | evaluate | evaluate |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai, anthropic |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | vllm |
| webRuntime | fastapi |
| developerSurface | typer |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| agentRuntime | [src/agents/__init__.py](../../../../sources/kakao__OrchestrationBench/src/agents/__init__.py) | agentRuntime signal |
| agentRuntime | [src/agents/base_agent.py](../../../../sources/kakao__OrchestrationBench/src/agents/base_agent.py) | agentRuntime signal |
| agentRuntime | [src/agents/llm_agent.py](../../../../sources/kakao__OrchestrationBench/src/agents/llm_agent.py) | agentRuntime signal |
| agentRuntime | [src/agents/orchestration_agent.py](../../../../sources/kakao__OrchestrationBench/src/agents/orchestration_agent.py) | agentRuntime signal |
| config | [pyproject.toml](../../../../sources/kakao__OrchestrationBench/pyproject.toml) | config signal |
| config | [uv.lock](../../../../sources/kakao__OrchestrationBench/uv.lock) | config signal |
| eval | [src/evaluation.py](../../../../sources/kakao__OrchestrationBench/src/evaluation.py) | eval support |
| eval | [src/utils/evaluation/eval_utils.py](../../../../sources/kakao__OrchestrationBench/src/utils/evaluation/eval_utils.py) | eval support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 4 | [src/agents/__init__.py](../../../../sources/kakao__OrchestrationBench/src/agents/__init__.py)<br>[src/agents/base_agent.py](../../../../sources/kakao__OrchestrationBench/src/agents/base_agent.py)<br>[src/agents/llm_agent.py](../../../../sources/kakao__OrchestrationBench/src/agents/llm_agent.py)<br>[src/agents/orchestration_agent.py](../../../../sources/kakao__OrchestrationBench/src/agents/orchestration_agent.py) |
| mcp | 0 | not obvious |
| retrieval | 0 | not obvious |
| spec | 0 | not obvious |
| eval | 6 | [src/evaluation.py](../../../../sources/kakao__OrchestrationBench/src/evaluation.py)<br>[src/utils/evaluation/eval_utils.py](../../../../sources/kakao__OrchestrationBench/src/utils/evaluation/eval_utils.py)<br>[src/utils/evaluation/evaluate_arguments.py](../../../../sources/kakao__OrchestrationBench/src/utils/evaluation/evaluate_arguments.py)<br>[src/utils/evaluation/evaluate_workflow_as_DAG.py](../../../../sources/kakao__OrchestrationBench/src/utils/evaluation/evaluate_workflow_as_DAG.py)<br>[src/utils/evaluation/value_f1_calculation_util.py](../../../../sources/kakao__OrchestrationBench/src/utils/evaluation/value_f1_calculation_util.py)<br>[config/base_config/eval_config.yaml](../../../../sources/kakao__OrchestrationBench/config/base_config/eval_config.yaml) |
| security | 0 | not obvious |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 3 | [README.md](../../../../sources/kakao__OrchestrationBench/README.md)<br>[docs/result_format.json](../../../../sources/kakao__OrchestrationBench/docs/result_format.json)<br>[docs/result_format.md](../../../../sources/kakao__OrchestrationBench/docs/result_format.md) |
| config | 2 | [pyproject.toml](../../../../sources/kakao__OrchestrationBench/pyproject.toml)<br>[uv.lock](../../../../sources/kakao__OrchestrationBench/uv.lock) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 6 | [src/evaluation.py](../../../../sources/kakao__OrchestrationBench/src/evaluation.py)<br>[src/utils/evaluation/eval_utils.py](../../../../sources/kakao__OrchestrationBench/src/utils/evaluation/eval_utils.py)<br>[src/utils/evaluation/evaluate_arguments.py](../../../../sources/kakao__OrchestrationBench/src/utils/evaluation/evaluate_arguments.py)<br>[src/utils/evaluation/evaluate_workflow_as_DAG.py](../../../../sources/kakao__OrchestrationBench/src/utils/evaluation/evaluate_workflow_as_DAG.py)<br>[src/utils/evaluation/value_f1_calculation_util.py](../../../../sources/kakao__OrchestrationBench/src/utils/evaluation/value_f1_calculation_util.py)<br>[config/base_config/eval_config.yaml](../../../../sources/kakao__OrchestrationBench/config/base_config/eval_config.yaml) |
| CI workflows | 0 | not obvious |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | CI workflow path not obvious; container/deploy path not obvious |
| security | security/policy surface not obvious; agent instruction files not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `src/agents/__init__.py`, `src/agents/base_agent.py`, `src/agents/llm_agent.py`.
2. Map agent/tool runtime through: `src/agents/__init__.py`, `src/agents/base_agent.py`, `src/agents/llm_agent.py`.
3. Verify behavior through test/eval files: `src/evaluation.py`, `src/utils/evaluation/eval_utils.py`, `src/utils/evaluation/evaluate_arguments.py`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 설명 메타데이터가 짧습니다. 핵심 구조 신호는 Python, pyproject.toml, README.md, LICENSE, openai, anthropic이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, ci signal not obvious, needs deeper structural scan입니다.
