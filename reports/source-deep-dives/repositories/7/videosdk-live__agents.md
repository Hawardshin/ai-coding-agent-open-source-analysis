# videosdk-live/agents Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Open-source framework for developing real-time multimodal conversational AI agents.

## 요약

- 조사 단위: `sources/videosdk-live__agents` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 496 files, 193 directories, depth score 119, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 mcp=videosdk-agents/videosdk/agents/mcp/mcp_manager.py, videosdk-agents/videosdk/agents/mcp/mcp_server.py, examples/mcp_example.py이고, 의존성 단서는 openai, anthropic, mcp, langchain, click, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | videosdk-live/agents |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 629 |
| Forks | 92 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/videosdk-live__agents](../../../../sources/videosdk-live__agents) |
| Existing report | [reports/global-trending/repositories/videosdk-live__agents.md](../../../global-trending/repositories/videosdk-live__agents.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 496 / 193 |
| Max observed depth | 7 |
| Top directories | .github, examples, scripts, use_case_examples, videosdk-agents, videosdk-plugins |
| Top extensions | .py: 343, .md: 90, .toml: 37, .txt: 6, .html: 3, .json: 3, .dylib: 2, .ogg: 2, .yml: 2, (none): 2, .example: 1, .js: 1 |
| Source patterns | cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| examples/conversational_graph | examples workspace | 4 |
| examples/langgraph | examples workspace | 3 |
| examples/avatar | examples workspace | 2 |
| examples/langchain | examples workspace | 2 |
| examples/mcp_server_examples | examples workspace | 2 |
| .github | ci surface | 1 |
| examples | top-level component | 1 |
| examples/a2a | examples workspace | 1 |
| examples/human_in_the_loop | examples workspace | 1 |
| examples/mcp_example.py | examples workspace | 1 |
| examples/mem0 | examples workspace | 1 |
| examples/observability_hooks.py | examples workspace | 1 |
| examples/test_workflow_pipeline.py | examples workspace | 1 |
| scripts | top-level component | 1 |
| use_case_examples | top-level component | 1 |
| videosdk-agents | top-level component | 1 |
| videosdk-plugins | top-level component | 1 |


## How It Runs

_No command surface extracted from root manifests._


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai, anthropic |
| agentProtocols | mcp |
| agentFrameworks | langchain |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | none |
| developerSurface | click |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [videosdk-agents/videosdk/agents/mcp/mcp_manager.py](../../../../sources/videosdk-live__agents/videosdk-agents/videosdk/agents/mcp/mcp_manager.py) | mcp signal |
| mcp | [videosdk-agents/videosdk/agents/mcp/mcp_server.py](../../../../sources/videosdk-live__agents/videosdk-agents/videosdk/agents/mcp/mcp_server.py) | mcp signal |
| mcp | [examples/mcp_example.py](../../../../sources/videosdk-live__agents/examples/mcp_example.py) | mcp signal |
| mcp | [examples/mcp_server_examples/mcp_current_time_example.py](../../../../sources/videosdk-live__agents/examples/mcp_server_examples/mcp_current_time_example.py) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/videosdk-live__agents/AGENTS.md) | agentRuntime signal |
| agentRuntime | [SKILLS.md](../../../../sources/videosdk-live__agents/SKILLS.md) | agentRuntime signal |
| agentRuntime | [videosdk-plugins/SKILLS.md](../../../../sources/videosdk-live__agents/videosdk-plugins/SKILLS.md) | agentRuntime signal |
| agentRuntime | [videosdk-plugins/videosdk-plugins-xai/SKILLS.md](../../../../sources/videosdk-live__agents/videosdk-plugins/videosdk-plugins-xai/SKILLS.md) | agentRuntime signal |
| entrypoints | [examples/a2a/main.py](../../../../sources/videosdk-live__agents/examples/a2a/main.py) | entrypoints signal |
| instruction | [CLAUDE.md](../../../../sources/videosdk-live__agents/CLAUDE.md) | instruction signal |
| config | [pyproject.toml](../../../../sources/videosdk-live__agents/pyproject.toml) | config signal |
| config | [requirements.txt](../../../../sources/videosdk-live__agents/requirements.txt) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 1 | [examples/a2a/main.py](../../../../sources/videosdk-live__agents/examples/a2a/main.py) |
| agentRuntime | 176 | [AGENTS.md](../../../../sources/videosdk-live__agents/AGENTS.md)<br>[SKILLS.md](../../../../sources/videosdk-live__agents/SKILLS.md)<br>[videosdk-plugins/SKILLS.md](../../../../sources/videosdk-live__agents/videosdk-plugins/SKILLS.md)<br>[videosdk-plugins/videosdk-plugins-xai/SKILLS.md](../../../../sources/videosdk-live__agents/videosdk-plugins/videosdk-plugins-xai/SKILLS.md)<br>[videosdk-plugins/videosdk-plugins-ultravox/SKILLS.md](../../../../sources/videosdk-live__agents/videosdk-plugins/videosdk-plugins-ultravox/SKILLS.md)<br>[videosdk-plugins/videosdk-plugins-turn-detector/SKILLS.md](../../../../sources/videosdk-live__agents/videosdk-plugins/videosdk-plugins-turn-detector/SKILLS.md)<br>[videosdk-plugins/videosdk-plugins-speechify/SKILLS.md](../../../../sources/videosdk-live__agents/videosdk-plugins/videosdk-plugins-speechify/SKILLS.md)<br>[videosdk-plugins/videosdk-plugins-smallestai/SKILLS.md](../../../../sources/videosdk-live__agents/videosdk-plugins/videosdk-plugins-smallestai/SKILLS.md) |
| mcp | 6 | [videosdk-agents/videosdk/agents/mcp/mcp_manager.py](../../../../sources/videosdk-live__agents/videosdk-agents/videosdk/agents/mcp/mcp_manager.py)<br>[videosdk-agents/videosdk/agents/mcp/mcp_server.py](../../../../sources/videosdk-live__agents/videosdk-agents/videosdk/agents/mcp/mcp_server.py)<br>[examples/mcp_example.py](../../../../sources/videosdk-live__agents/examples/mcp_example.py)<br>[examples/mcp_server_examples/mcp_current_time_example.py](../../../../sources/videosdk-live__agents/examples/mcp_server_examples/mcp_current_time_example.py)<br>[examples/mcp_server_examples/mcp_server_example.py](../../../../sources/videosdk-live__agents/examples/mcp_server_examples/mcp_server_example.py)<br>[examples/human_in_the_loop/discord_mcp_server.py](../../../../sources/videosdk-live__agents/examples/human_in_the_loop/discord_mcp_server.py) |
| retrieval | 11 | [videosdk-plugins/videosdk-plugins-langchain/videosdk/plugins/langchain/graph.py](../../../../sources/videosdk-live__agents/videosdk-plugins/videosdk-plugins-langchain/videosdk/plugins/langchain/graph.py)<br>[videosdk-agents/videosdk/agents/graph_adapter.py](../../../../sources/videosdk-live__agents/videosdk-agents/videosdk/agents/graph_adapter.py)<br>[videosdk-agents/videosdk/agents/knowledge_base/__init__.py](../../../../sources/videosdk-live__agents/videosdk-agents/videosdk/agents/knowledge_base/__init__.py)<br>[videosdk-agents/videosdk/agents/knowledge_base/base.py](../../../../sources/videosdk-live__agents/videosdk-agents/videosdk/agents/knowledge_base/base.py)<br>[videosdk-agents/videosdk/agents/knowledge_base/config.py](../../../../sources/videosdk-live__agents/videosdk-agents/videosdk/agents/knowledge_base/config.py)<br>[use_case_examples/custom_rag_agent.py](../../../../sources/videosdk-live__agents/use_case_examples/custom_rag_agent.py)<br>[examples/mem0/memory_agent.py](../../../../sources/videosdk-live__agents/examples/mem0/memory_agent.py)<br>[examples/conversational_graph/customer_support.py](../../../../sources/videosdk-live__agents/examples/conversational_graph/customer_support.py) |
| spec | 4 | [requirements.txt](../../../../sources/videosdk-live__agents/requirements.txt)<br>[examples/langgraph/requirements.txt](../../../../sources/videosdk-live__agents/examples/langgraph/requirements.txt)<br>[examples/langchain/requirements.txt](../../../../sources/videosdk-live__agents/examples/langchain/requirements.txt)<br>[examples/avatar/avatar_server_examples/requirements.txt](../../../../sources/videosdk-live__agents/examples/avatar/avatar_server_examples/requirements.txt) |
| eval | 4 | [videosdk-agents/videosdk/agents/debug/tracing.py](../../../../sources/videosdk-live__agents/videosdk-agents/videosdk/agents/debug/tracing.py)<br>[use_case_examples/vision/quality_inspection_agent.py](../../../../sources/videosdk-live__agents/use_case_examples/vision/quality_inspection_agent.py)<br>[examples/observability_hooks.py](../../../../sources/videosdk-live__agents/examples/observability_hooks.py)<br>[examples/test_workflow_pipeline.py](../../../../sources/videosdk-live__agents/examples/test_workflow_pipeline.py) |
| security | 1 | [videosdk-agents/videosdk/agents/avatar/avatar_auth.py](../../../../sources/videosdk-live__agents/videosdk-agents/videosdk/agents/avatar/avatar_auth.py) |
| ci | 2 | [.github/workflows/build-and-deploy-docs.yml](../../../../sources/videosdk-live__agents/.github/workflows/build-and-deploy-docs.yml)<br>[.github/workflows/main.yml](../../../../sources/videosdk-live__agents/.github/workflows/main.yml) |
| container | 0 | not obvious |
| instruction | 2 | [AGENTS.md](../../../../sources/videosdk-live__agents/AGENTS.md)<br>[CLAUDE.md](../../../../sources/videosdk-live__agents/CLAUDE.md) |
| docs | 40 | [README.md](../../../../sources/videosdk-live__agents/README.md)<br>[videosdk-plugins/videosdk-plugins-xai/README.md](../../../../sources/videosdk-live__agents/videosdk-plugins/videosdk-plugins-xai/README.md)<br>[videosdk-plugins/videosdk-plugins-ultravox/README.md](../../../../sources/videosdk-live__agents/videosdk-plugins/videosdk-plugins-ultravox/README.md)<br>[videosdk-plugins/videosdk-plugins-turn-detector/README.md](../../../../sources/videosdk-live__agents/videosdk-plugins/videosdk-plugins-turn-detector/README.md)<br>[videosdk-plugins/videosdk-plugins-speechify/README.md](../../../../sources/videosdk-live__agents/videosdk-plugins/videosdk-plugins-speechify/README.md)<br>[videosdk-plugins/videosdk-plugins-smallestai/README.md](../../../../sources/videosdk-live__agents/videosdk-plugins/videosdk-plugins-smallestai/README.md)<br>[videosdk-plugins/videosdk-plugins-simli/README.md](../../../../sources/videosdk-live__agents/videosdk-plugins/videosdk-plugins-simli/README.md)<br>[videosdk-plugins/videosdk-plugins-silero/README.md](../../../../sources/videosdk-live__agents/videosdk-plugins/videosdk-plugins-silero/README.md) |
| config | 43 | [pyproject.toml](../../../../sources/videosdk-live__agents/pyproject.toml)<br>[requirements.txt](../../../../sources/videosdk-live__agents/requirements.txt)<br>[uv.lock](../../../../sources/videosdk-live__agents/uv.lock)<br>[videosdk-plugins/videosdk-plugins-xai/pyproject.toml](../../../../sources/videosdk-live__agents/videosdk-plugins/videosdk-plugins-xai/pyproject.toml)<br>[videosdk-plugins/videosdk-plugins-ultravox/pyproject.toml](../../../../sources/videosdk-live__agents/videosdk-plugins/videosdk-plugins-ultravox/pyproject.toml)<br>[videosdk-plugins/videosdk-plugins-turn-detector/pyproject.toml](../../../../sources/videosdk-live__agents/videosdk-plugins/videosdk-plugins-turn-detector/pyproject.toml)<br>[videosdk-plugins/videosdk-plugins-speechify/pyproject.toml](../../../../sources/videosdk-live__agents/videosdk-plugins/videosdk-plugins-speechify/pyproject.toml)<br>[videosdk-plugins/videosdk-plugins-smallestai/pyproject.toml](../../../../sources/videosdk-live__agents/videosdk-plugins/videosdk-plugins-smallestai/pyproject.toml) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 4 | [videosdk-agents/videosdk/agents/debug/tracing.py](../../../../sources/videosdk-live__agents/videosdk-agents/videosdk/agents/debug/tracing.py)<br>[use_case_examples/vision/quality_inspection_agent.py](../../../../sources/videosdk-live__agents/use_case_examples/vision/quality_inspection_agent.py)<br>[examples/observability_hooks.py](../../../../sources/videosdk-live__agents/examples/observability_hooks.py)<br>[examples/test_workflow_pipeline.py](../../../../sources/videosdk-live__agents/examples/test_workflow_pipeline.py) |
| CI workflows | 2 | [.github/workflows/build-and-deploy-docs.yml](../../../../sources/videosdk-live__agents/.github/workflows/build-and-deploy-docs.yml)<br>[.github/workflows/main.yml](../../../../sources/videosdk-live__agents/.github/workflows/main.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 1 | [videosdk-agents/videosdk/agents/avatar/avatar_auth.py](../../../../sources/videosdk-live__agents/videosdk-agents/videosdk/agents/avatar/avatar_auth.py) |
| Agent instructions | 2 | [AGENTS.md](../../../../sources/videosdk-live__agents/AGENTS.md)<br>[CLAUDE.md](../../../../sources/videosdk-live__agents/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `videosdk-agents/videosdk/agents/mcp/mcp_manager.py`, `videosdk-agents/videosdk/agents/mcp/mcp_server.py`, `examples/mcp_example.py`.
2. Trace execution through entrypoints: `examples/a2a/main.py`.
3. Map agent/tool runtime through: `AGENTS.md`, `SKILLS.md`, `videosdk-plugins/SKILLS.md`.
4. Inspect retrieval/memory/indexing through: `videosdk-plugins/videosdk-plugins-langchain/videosdk/plugins/langchain/graph.py`, `videosdk-agents/videosdk/agents/graph_adapter.py`, `videosdk-agents/videosdk/agents/knowledge_base/__init__.py`.
5. Verify behavior through test/eval files: `videosdk-agents/videosdk/agents/debug/tracing.py`, `use_case_examples/vision/quality_inspection_agent.py`, `examples/observability_hooks.py`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Open source framework for developing real time multimodal conversational AI agents.. 핵심 구조 신호는 Python, pyproject.toml, requirements.txt, README.md, AGENTS.md, CLAUDE.md이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
