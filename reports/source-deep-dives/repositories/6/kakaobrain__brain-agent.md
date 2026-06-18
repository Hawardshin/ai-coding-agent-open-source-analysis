# kakaobrain/brain-agent Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Brain Agent for Large-Scale and Multi-Task Agent Learning

## 요약

- 조사 단위: `sources/kakaobrain__brain-agent` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 57 files, 10 directories, depth score 74, key references 7개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 agent/tool runtime, spec/docs-driven, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=brain_agent/core/agents/__init__.py, brain_agent/core/agents/agent_abc.py, brain_agent/core/agents/agent_utils.py이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 7개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | kakaobrain/brain-agent |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | Python |
| Stars | 93 |
| Forks | 15 |
| License | MIT |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/kakaobrain__brain-agent](../../../../sources/kakaobrain__brain-agent) |
| Existing report | [reports/korea-trending/repositories/kakaobrain__brain-agent.md](../../../korea-trending/repositories/kakaobrain__brain-agent.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 57 / 10 |
| Max observed depth | 4 |
| Top directories | assets, brain_agent, configs |
| Top extensions | .py: 41, .yaml: 10, .png: 2, (none): 2, .md: 1, .txt: 1 |
| Source patterns | agent/tool runtime, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| assets | top-level component | 1 |
| brain_agent | top-level component | 1 |
| configs | top-level component | 1 |


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
| agentRuntime | [brain_agent/core/agents/__init__.py](../../../../sources/kakaobrain__brain-agent/brain_agent/core/agents/__init__.py) | agentRuntime signal |
| agentRuntime | [brain_agent/core/agents/agent_abc.py](../../../../sources/kakaobrain__brain-agent/brain_agent/core/agents/agent_abc.py) | agentRuntime signal |
| agentRuntime | [brain_agent/core/agents/agent_utils.py](../../../../sources/kakaobrain__brain-agent/brain_agent/core/agents/agent_utils.py) | agentRuntime signal |
| agentRuntime | [brain_agent/core/agents/dmlab_multitask_agent.py](../../../../sources/kakaobrain__brain-agent/brain_agent/core/agents/dmlab_multitask_agent.py) | agentRuntime signal |
| config | [requirements.txt](../../../../sources/kakaobrain__brain-agent/requirements.txt) | config signal |
| eval | [eval.py](../../../../sources/kakaobrain__brain-agent/eval.py) | eval support |
| eval | [configs/lstm_baseline_eval.yaml](../../../../sources/kakaobrain__brain-agent/configs/lstm_baseline_eval.yaml) | eval support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 4 | [brain_agent/core/agents/__init__.py](../../../../sources/kakaobrain__brain-agent/brain_agent/core/agents/__init__.py)<br>[brain_agent/core/agents/agent_abc.py](../../../../sources/kakaobrain__brain-agent/brain_agent/core/agents/agent_abc.py)<br>[brain_agent/core/agents/agent_utils.py](../../../../sources/kakaobrain__brain-agent/brain_agent/core/agents/agent_utils.py)<br>[brain_agent/core/agents/dmlab_multitask_agent.py](../../../../sources/kakaobrain__brain-agent/brain_agent/core/agents/dmlab_multitask_agent.py) |
| mcp | 0 | not obvious |
| retrieval | 0 | not obvious |
| spec | 1 | [requirements.txt](../../../../sources/kakaobrain__brain-agent/requirements.txt) |
| eval | 5 | [eval.py](../../../../sources/kakaobrain__brain-agent/eval.py)<br>[configs/lstm_baseline_eval.yaml](../../../../sources/kakaobrain__brain-agent/configs/lstm_baseline_eval.yaml)<br>[configs/trxl_baseline_eval.yaml](../../../../sources/kakaobrain__brain-agent/configs/trxl_baseline_eval.yaml)<br>[configs/trxl_future_pred_eval.yaml](../../../../sources/kakaobrain__brain-agent/configs/trxl_future_pred_eval.yaml)<br>[configs/trxl_recon_eval.yaml](../../../../sources/kakaobrain__brain-agent/configs/trxl_recon_eval.yaml) |
| security | 1 | [brain_agent/core/policy_worker.py](../../../../sources/kakaobrain__brain-agent/brain_agent/core/policy_worker.py) |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 1 | [README.md](../../../../sources/kakaobrain__brain-agent/README.md) |
| config | 1 | [requirements.txt](../../../../sources/kakaobrain__brain-agent/requirements.txt) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 5 | [eval.py](../../../../sources/kakaobrain__brain-agent/eval.py)<br>[configs/lstm_baseline_eval.yaml](../../../../sources/kakaobrain__brain-agent/configs/lstm_baseline_eval.yaml)<br>[configs/trxl_baseline_eval.yaml](../../../../sources/kakaobrain__brain-agent/configs/trxl_baseline_eval.yaml)<br>[configs/trxl_future_pred_eval.yaml](../../../../sources/kakaobrain__brain-agent/configs/trxl_future_pred_eval.yaml)<br>[configs/trxl_recon_eval.yaml](../../../../sources/kakaobrain__brain-agent/configs/trxl_recon_eval.yaml) |
| CI workflows | 0 | not obvious |
| Containers / deploy | 0 | not obvious |
| Security / policy | 1 | [brain_agent/core/policy_worker.py](../../../../sources/kakaobrain__brain-agent/brain_agent/core/policy_worker.py) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | CI workflow path not obvious; container/deploy path not obvious |
| security | agent instruction files not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `brain_agent/core/agents/__init__.py`, `brain_agent/core/agents/agent_abc.py`, `brain_agent/core/agents/agent_utils.py`.
2. Map agent/tool runtime through: `brain_agent/core/agents/__init__.py`, `brain_agent/core/agents/agent_abc.py`, `brain_agent/core/agents/agent_utils.py`.
3. Verify behavior through test/eval files: `eval.py`, `configs/lstm_baseline_eval.yaml`, `configs/trxl_baseline_eval.yaml`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Brain Agent for Large Scale and Multi Task Agent Learning. 핵심 구조 신호는 Python, requirements.txt, README.md, LICENSE, docs, spec-artifacts이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, ci signal not obvious, needs deeper structural scan입니다.
