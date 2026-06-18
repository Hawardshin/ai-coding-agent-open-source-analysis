# Samsung/ClickAgent Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

ClickAgent: Enhancing UI Location Capabilities of Autonomous Agents

## 요약

- 조사 단위: `sources/Samsung__ClickAgent` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 28 files, 5 directories, depth score 66, key references 7개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 api/server, agent/tool runtime, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=agent/api_florence.py, agent/api_internvl.py, agent/api_model.py이고, 의존성 단서는 fastapi, torch, transformers, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 7개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | Samsung/ClickAgent |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | Python |
| Stars | 29 |
| Forks | 6 |
| License | none |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/Samsung__ClickAgent](../../../../sources/Samsung__ClickAgent) |
| Existing report | [reports/korea-trending/repositories/Samsung__ClickAgent.md](../../../korea-trending/repositories/Samsung__ClickAgent.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 28 / 5 |
| Max observed depth | 3 |
| Top directories | agent, api, assets, tests |
| Top extensions | .py: 20, .png: 2, .csv: 1, .ini: 1, .json: 1, .md: 1, .mp4: 1, .txt: 1 |
| Source patterns | api/server, agent/tool runtime, spec/docs-driven, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 3 |
| agent | top-level component | 1 |
| api | source boundary | 1 |
| assets | top-level component | 1 |


## How It Runs

_No command surface extracted from root manifests._


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | torch, transformers |
| webRuntime | fastapi |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| agentRuntime | [agent/api_florence.py](../../../../sources/Samsung__ClickAgent/agent/api_florence.py) | agentRuntime signal |
| agentRuntime | [agent/api_internvl.py](../../../../sources/Samsung__ClickAgent/agent/api_internvl.py) | agentRuntime signal |
| agentRuntime | [agent/api_model.py](../../../../sources/Samsung__ClickAgent/agent/api_model.py) | agentRuntime signal |
| agentRuntime | [agent/api_qwen.py](../../../../sources/Samsung__ClickAgent/agent/api_qwen.py) | agentRuntime signal |
| config | [requirements.txt](../../../../sources/Samsung__ClickAgent/requirements.txt) | config signal |
| eval | [tests/run_test.py](../../../../sources/Samsung__ClickAgent/tests/run_test.py) | eval support |
| eval | [tests/test_sets/test_set.csv](../../../../sources/Samsung__ClickAgent/tests/test_sets/test_set.csv) | eval support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 12 | [agent/api_florence.py](../../../../sources/Samsung__ClickAgent/agent/api_florence.py)<br>[agent/api_internvl.py](../../../../sources/Samsung__ClickAgent/agent/api_internvl.py)<br>[agent/api_model.py](../../../../sources/Samsung__ClickAgent/agent/api_model.py)<br>[agent/api_qwen.py](../../../../sources/Samsung__ClickAgent/agent/api_qwen.py)<br>[agent/api_seeclick.py](../../../../sources/Samsung__ClickAgent/agent/api_seeclick.py)<br>[agent/chat_internvl.py](../../../../sources/Samsung__ClickAgent/agent/chat_internvl.py)<br>[agent/config_manager.py](../../../../sources/Samsung__ClickAgent/agent/config_manager.py)<br>[agent/controller.py](../../../../sources/Samsung__ClickAgent/agent/controller.py) |
| mcp | 0 | not obvious |
| retrieval | 0 | not obvious |
| spec | 2 | [requirements.txt](../../../../sources/Samsung__ClickAgent/requirements.txt)<br>[assets/overview_architecture.png](../../../../sources/Samsung__ClickAgent/assets/overview_architecture.png) |
| eval | 2 | [tests/run_test.py](../../../../sources/Samsung__ClickAgent/tests/run_test.py)<br>[tests/test_sets/test_set.csv](../../../../sources/Samsung__ClickAgent/tests/test_sets/test_set.csv) |
| security | 0 | not obvious |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 1 | [README.md](../../../../sources/Samsung__ClickAgent/README.md) |
| config | 1 | [requirements.txt](../../../../sources/Samsung__ClickAgent/requirements.txt) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 2 | [tests/run_test.py](../../../../sources/Samsung__ClickAgent/tests/run_test.py)<br>[tests/test_sets/test_set.csv](../../../../sources/Samsung__ClickAgent/tests/test_sets/test_set.csv) |
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

1. Start from key references: `agent/api_florence.py`, `agent/api_internvl.py`, `agent/api_model.py`.
2. Map agent/tool runtime through: `agent/api_florence.py`, `agent/api_internvl.py`, `agent/api_model.py`.
3. Verify behavior through test/eval files: `tests/run_test.py`, `tests/test_sets/test_set.csv`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 ClickAgent Enhancing UI Location Capabilities of Autonomous Agents. 핵심 구조 신호는 Python, requirements.txt, README.md, fastapi, torch, transformers이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 ci signal not obvious, license metadata missing, needs deeper structural scan입니다.
