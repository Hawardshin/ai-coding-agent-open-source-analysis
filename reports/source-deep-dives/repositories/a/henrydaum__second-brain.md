# henrydaum/second-brain Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Second Brain is an agentic framework that acts as an operating system, using local file intelligence, workflow automation, and LLMs to complete tasks and communicate over multiple modalities and messaging platforms.

## 요약

- 조사 단위: `sources/henrydaum__second-brain` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 133 files, 21 directories, depth score 106, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 mcp=tests/test_frontend_mcp.py, agent/tool_registry.py이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | henrydaum/second-brain |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 556 |
| Forks | 64 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/henrydaum__second-brain](../../../../sources/henrydaum__second-brain) |
| Existing report | [reports/global-trending/repositories/henrydaum__second-brain.md](../../../global-trending/repositories/henrydaum__second-brain.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 133 / 21 |
| Max observed depth | 4 |
| Top directories | .github, agent, attachments, config, events, pipeline, plugins, runtime, scripts, state_machine, stress, templates, tests |
| Top extensions | .py: 121, .md: 5, .txt: 2, (none): 2, .ico: 1, .pyw: 1, .yml: 1 |
| Source patterns | cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 27 |
| .github | ci surface | 1 |
| agent | top-level component | 1 |
| attachments | top-level component | 1 |
| config | top-level component | 1 |
| events | top-level component | 1 |
| pipeline | top-level component | 1 |
| plugins | top-level component | 1 |
| runtime | top-level component | 1 |
| scripts | top-level component | 1 |
| state_machine | top-level component | 1 |
| stress | top-level component | 1 |
| templates | top-level component | 1 |


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
| mcp | [tests/test_frontend_mcp.py](../../../../sources/henrydaum__second-brain/tests/test_frontend_mcp.py) | mcp signal |
| mcp | [agent/tool_registry.py](../../../../sources/henrydaum__second-brain/agent/tool_registry.py) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/henrydaum__second-brain/AGENTS.md) | agentRuntime signal |
| agentRuntime | [templates/tool_template.py](../../../../sources/henrydaum__second-brain/templates/tool_template.py) | agentRuntime signal |
| agentRuntime | [runtime/agent_scope.py](../../../../sources/henrydaum__second-brain/runtime/agent_scope.py) | agentRuntime signal |
| agentRuntime | [runtime/context.py](../../../../sources/henrydaum__second-brain/runtime/context.py) | agentRuntime signal |
| entrypoints | [main.py](../../../../sources/henrydaum__second-brain/main.py) | entrypoints signal |
| entrypoints | [main.pyw](../../../../sources/henrydaum__second-brain/main.pyw) | entrypoints signal |
| instruction | [CLAUDE.md](../../../../sources/henrydaum__second-brain/CLAUDE.md) | instruction signal |
| config | [requirements-dev.txt](../../../../sources/henrydaum__second-brain/requirements-dev.txt) | config signal |
| config | [requirements.txt](../../../../sources/henrydaum__second-brain/requirements.txt) | config signal |
| ci | [.github/workflows/ci.yml](../../../../sources/henrydaum__second-brain/.github/workflows/ci.yml) | ci support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 2 | [main.py](../../../../sources/henrydaum__second-brain/main.py)<br>[main.pyw](../../../../sources/henrydaum__second-brain/main.pyw) |
| agentRuntime | 9 | [AGENTS.md](../../../../sources/henrydaum__second-brain/AGENTS.md)<br>[templates/tool_template.py](../../../../sources/henrydaum__second-brain/templates/tool_template.py)<br>[runtime/agent_scope.py](../../../../sources/henrydaum__second-brain/runtime/agent_scope.py)<br>[runtime/context.py](../../../../sources/henrydaum__second-brain/runtime/context.py)<br>[runtime/hooks.py](../../../../sources/henrydaum__second-brain/runtime/hooks.py)<br>[plugins/helpers/memory_paths.py](../../../../sources/henrydaum__second-brain/plugins/helpers/memory_paths.py)<br>[agent/system_prompt_static.md](../../../../sources/henrydaum__second-brain/agent/system_prompt_static.md)<br>[agent/system_prompt.py](../../../../sources/henrydaum__second-brain/agent/system_prompt.py) |
| mcp | 2 | [tests/test_frontend_mcp.py](../../../../sources/henrydaum__second-brain/tests/test_frontend_mcp.py)<br>[agent/tool_registry.py](../../../../sources/henrydaum__second-brain/agent/tool_registry.py) |
| retrieval | 2 | [tests/test_memory_prompt.py](../../../../sources/henrydaum__second-brain/tests/test_memory_prompt.py)<br>[plugins/helpers/memory_paths.py](../../../../sources/henrydaum__second-brain/plugins/helpers/memory_paths.py) |
| spec | 2 | [requirements-dev.txt](../../../../sources/henrydaum__second-brain/requirements-dev.txt)<br>[requirements.txt](../../../../sources/henrydaum__second-brain/requirements.txt) |
| eval | 24 | [tests/__init__.py](../../../../sources/henrydaum__second-brain/tests/__init__.py)<br>[tests/test_agent_scope.py](../../../../sources/henrydaum__second-brain/tests/test_agent_scope.py)<br>[tests/test_commands.py](../../../../sources/henrydaum__second-brain/tests/test_commands.py)<br>[tests/test_config.py](../../../../sources/henrydaum__second-brain/tests/test_config.py)<br>[tests/test_conversation_loop.py](../../../../sources/henrydaum__second-brain/tests/test_conversation_loop.py)<br>[tests/test_database.py](../../../../sources/henrydaum__second-brain/tests/test_database.py)<br>[tests/test_frontend_manager.py](../../../../sources/henrydaum__second-brain/tests/test_frontend_manager.py)<br>[tests/test_frontend_mcp.py](../../../../sources/henrydaum__second-brain/tests/test_frontend_mcp.py) |
| security | 0 | not obvious |
| ci | 1 | [.github/workflows/ci.yml](../../../../sources/henrydaum__second-brain/.github/workflows/ci.yml) |
| container | 0 | not obvious |
| instruction | 2 | [AGENTS.md](../../../../sources/henrydaum__second-brain/AGENTS.md)<br>[CLAUDE.md](../../../../sources/henrydaum__second-brain/CLAUDE.md) |
| docs | 2 | [README.md](../../../../sources/henrydaum__second-brain/README.md)<br>[stress/README.md](../../../../sources/henrydaum__second-brain/stress/README.md) |
| config | 2 | [requirements-dev.txt](../../../../sources/henrydaum__second-brain/requirements-dev.txt)<br>[requirements.txt](../../../../sources/henrydaum__second-brain/requirements.txt) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 24 | [tests/__init__.py](../../../../sources/henrydaum__second-brain/tests/__init__.py)<br>[tests/test_agent_scope.py](../../../../sources/henrydaum__second-brain/tests/test_agent_scope.py)<br>[tests/test_commands.py](../../../../sources/henrydaum__second-brain/tests/test_commands.py)<br>[tests/test_config.py](../../../../sources/henrydaum__second-brain/tests/test_config.py)<br>[tests/test_conversation_loop.py](../../../../sources/henrydaum__second-brain/tests/test_conversation_loop.py)<br>[tests/test_database.py](../../../../sources/henrydaum__second-brain/tests/test_database.py) |
| CI workflows | 1 | [.github/workflows/ci.yml](../../../../sources/henrydaum__second-brain/.github/workflows/ci.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 2 | [AGENTS.md](../../../../sources/henrydaum__second-brain/AGENTS.md)<br>[CLAUDE.md](../../../../sources/henrydaum__second-brain/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `tests/test_frontend_mcp.py`, `agent/tool_registry.py`, `AGENTS.md`.
2. Trace execution through entrypoints: `main.py`, `main.pyw`.
3. Map agent/tool runtime through: `AGENTS.md`, `templates/tool_template.py`, `runtime/agent_scope.py`.
4. Inspect retrieval/memory/indexing through: `tests/test_memory_prompt.py`, `plugins/helpers/memory_paths.py`.
5. Verify behavior through test/eval files: `tests/__init__.py`, `tests/test_agent_scope.py`, `tests/test_commands.py`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Second Brain is an agentic framework that acts as an operating system, using local file intelligence, workflow automatio. 핵심 구조 신호는 Python, requirements.txt, README.md, AGENTS.md, CLAUDE.md, LICENSE이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
