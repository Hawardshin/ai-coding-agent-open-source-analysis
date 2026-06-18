# livekit/agents Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

A framework for building realtime voice AI agents 🤖🎙️📹

## 요약

- 조사 단위: `sources/livekit__agents` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 1,251 files, 389 directories, depth score 132, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=livekit-agents/livekit/agents/llm/mcp.py, examples/voice_agents/zapier_mcp_integration.py, examples/voice_agents/mcp/mcp-agent.py이고, 의존성 단서는 openai, anthropic, mcp, langchain, pydantic, playwright, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | livekit/agents |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 11023 |
| Forks | 3238 |
| License | none |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/livekit__agents](../../../../sources/livekit__agents) |
| Existing report | [reports/global-trending/repositories/livekit__agents.md](../../../global-trending/repositories/livekit__agents.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 1251 / 389 |
| Max observed depth | 8 |
| Top directories | .github, examples, livekit-agents, livekit-plugins, scripts, tests |
| Top extensions | .py: 886, .md: 123, .toml: 74, .typed: 71, (none): 33, .txt: 17, .yml: 14, .ogg: 8, .yaml: 4, .wav: 3, .c: 2, .json: 2 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 46 |
| examples/voice_agents | examples workspace | 11 |
| examples/avatar | examples workspace | 2 |
| examples/avatar_agents | examples workspace | 2 |
| examples/drive-thru | examples workspace | 2 |
| examples/frontdesk | examples workspace | 2 |
| examples/healthcare | examples workspace | 2 |
| examples/hotel_receptionist | examples workspace | 2 |
| examples/inference | examples workspace | 2 |
| examples/survey | examples workspace | 2 |
| .github | ci surface | 1 |
| examples | top-level component | 1 |
| examples/Dockerfile-example | examples workspace | 1 |
| examples/other | examples workspace | 1 |
| livekit-agents | top-level component | 1 |
| livekit-plugins | top-level component | 1 |
| scripts | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | help | make help |
| utility | Makefile | install | make install |
| quality | Makefile | format | make format |
| quality | Makefile | format-check | make format-check |
| quality | Makefile | lint | make lint |
| quality | Makefile | lint-fix | make lint-fix |
| quality | Makefile | type-check | make type-check |
| quality | Makefile | check | make check |
| utility | Makefile | fix | make fix |
| test | Makefile | unit-tests | make unit-tests |
| utility | Makefile | link-rtc | make link-rtc |
| utility | Makefile | link-rtc-local | make link-rtc-local |
| utility | Makefile | link-rtc-version | make link-rtc-version |
| utility | Makefile | unlink-rtc | make unlink-rtc |
| utility | Makefile | status | make status |
| utility | Makefile | doctor | make doctor |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai, anthropic |
| agentProtocols | mcp |
| agentFrameworks | langchain |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | none |
| developerSurface | none |
| observability | none |
| browserAutomation | playwright |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [livekit-agents/livekit/agents/llm/mcp.py](../../../../sources/livekit__agents/livekit-agents/livekit/agents/llm/mcp.py) | mcp signal |
| mcp | [examples/voice_agents/zapier_mcp_integration.py](../../../../sources/livekit__agents/examples/voice_agents/zapier_mcp_integration.py) | mcp signal |
| mcp | [examples/voice_agents/mcp/mcp-agent.py](../../../../sources/livekit__agents/examples/voice_agents/mcp/mcp-agent.py) | mcp signal |
| mcp | [examples/voice_agents/mcp/server.py](../../../../sources/livekit__agents/examples/voice_agents/mcp/server.py) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/livekit__agents/AGENTS.md) | agentRuntime signal |
| agentRuntime | [livekit-plugins/livekit-plugins-xai/livekit/plugins/xai/tools.py](../../../../sources/livekit__agents/livekit-plugins/livekit-plugins-xai/livekit/plugins/xai/tools.py) | agentRuntime signal |
| agentRuntime | [livekit-plugins/livekit-plugins-openai/livekit/plugins/openai/tools.py](../../../../sources/livekit__agents/livekit-plugins/livekit-plugins-openai/livekit/plugins/openai/tools.py) | agentRuntime signal |
| agentRuntime | [livekit-plugins/livekit-plugins-mistralai/livekit/plugins/mistralai/tools.py](../../../../sources/livekit__agents/livekit-plugins/livekit-plugins-mistralai/livekit/plugins/mistralai/tools.py) | agentRuntime signal |
| entrypoints | [livekit-plugins/livekit-blingfire/src/main.cpp](../../../../sources/livekit__agents/livekit-plugins/livekit-blingfire/src/main.cpp) | entrypoints signal |
| entrypoints | [livekit-agents/livekit/agents/__main__.py](../../../../sources/livekit__agents/livekit-agents/livekit/agents/__main__.py) | entrypoints signal |
| instruction | [CLAUDE.md](../../../../sources/livekit__agents/CLAUDE.md) | instruction signal |
| config | [makefile](../../../../sources/livekit__agents/makefile) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 3 | [livekit-plugins/livekit-blingfire/src/main.cpp](../../../../sources/livekit__agents/livekit-plugins/livekit-blingfire/src/main.cpp)<br>[livekit-agents/livekit/agents/__main__.py](../../../../sources/livekit__agents/livekit-agents/livekit/agents/__main__.py)<br>[examples/voice_agents/mcp/server.py](../../../../sources/livekit__agents/examples/voice_agents/mcp/server.py) |
| agentRuntime | 240 | [AGENTS.md](../../../../sources/livekit__agents/AGENTS.md)<br>[livekit-plugins/livekit-plugins-xai/livekit/plugins/xai/tools.py](../../../../sources/livekit__agents/livekit-plugins/livekit-plugins-xai/livekit/plugins/xai/tools.py)<br>[livekit-plugins/livekit-plugins-openai/livekit/plugins/openai/tools.py](../../../../sources/livekit__agents/livekit-plugins/livekit-plugins-openai/livekit/plugins/openai/tools.py)<br>[livekit-plugins/livekit-plugins-mistralai/livekit/plugins/mistralai/tools.py](../../../../sources/livekit__agents/livekit-plugins/livekit-plugins-mistralai/livekit/plugins/mistralai/tools.py)<br>[livekit-plugins/livekit-plugins-google/livekit/plugins/google/tools.py](../../../../sources/livekit__agents/livekit-plugins/livekit-plugins-google/livekit/plugins/google/tools.py)<br>[livekit-plugins/livekit-plugins-anthropic/livekit/plugins/anthropic/tools.py](../../../../sources/livekit__agents/livekit-plugins/livekit-plugins-anthropic/livekit/plugins/anthropic/tools.py)<br>[livekit-agents/livekit/agents/__init__.py](../../../../sources/livekit__agents/livekit-agents/livekit/agents/__init__.py)<br>[livekit-agents/livekit/agents/__main__.py](../../../../sources/livekit__agents/livekit-agents/livekit/agents/__main__.py) |
| mcp | 4 | [livekit-agents/livekit/agents/llm/mcp.py](../../../../sources/livekit__agents/livekit-agents/livekit/agents/llm/mcp.py)<br>[examples/voice_agents/zapier_mcp_integration.py](../../../../sources/livekit__agents/examples/voice_agents/zapier_mcp_integration.py)<br>[examples/voice_agents/mcp/mcp-agent.py](../../../../sources/livekit__agents/examples/voice_agents/mcp/mcp-agent.py)<br>[examples/voice_agents/mcp/server.py](../../../../sources/livekit__agents/examples/voice_agents/mcp/server.py) |
| retrieval | 7 | [tests/test_supervised_proc_memory.py](../../../../sources/livekit__agents/tests/test_supervised_proc_memory.py)<br>[examples/voice_agents/llamaindex-rag/.gitignore](../../../../sources/livekit__agents/examples/voice_agents/llamaindex-rag/.gitignore)<br>[examples/voice_agents/llamaindex-rag/chat_engine.py](../../../../sources/livekit__agents/examples/voice_agents/llamaindex-rag/chat_engine.py)<br>[examples/voice_agents/llamaindex-rag/query_engine.py](../../../../sources/livekit__agents/examples/voice_agents/llamaindex-rag/query_engine.py)<br>[examples/voice_agents/llamaindex-rag/README.md](../../../../sources/livekit__agents/examples/voice_agents/llamaindex-rag/README.md)<br>[examples/voice_agents/llamaindex-rag/retrieval.py](../../../../sources/livekit__agents/examples/voice_agents/llamaindex-rag/retrieval.py)<br>[examples/voice_agents/llamaindex-rag/data/raw_data.txt](../../../../sources/livekit__agents/examples/voice_agents/llamaindex-rag/data/raw_data.txt) |
| spec | 11 | [examples/voice_agents/requirements.txt](../../../../sources/livekit__agents/examples/voice_agents/requirements.txt)<br>[examples/survey/requirements.txt](../../../../sources/livekit__agents/examples/survey/requirements.txt)<br>[examples/other/text-to-speech/requirements.txt](../../../../sources/livekit__agents/examples/other/text-to-speech/requirements.txt)<br>[examples/inference/requirements.txt](../../../../sources/livekit__agents/examples/inference/requirements.txt)<br>[examples/hotel_receptionist/requirements.txt](../../../../sources/livekit__agents/examples/hotel_receptionist/requirements.txt)<br>[examples/healthcare/requirements.txt](../../../../sources/livekit__agents/examples/healthcare/requirements.txt)<br>[examples/frontdesk/requirements.txt](../../../../sources/livekit__agents/examples/frontdesk/requirements.txt)<br>[examples/drive-thru/requirements.txt](../../../../sources/livekit__agents/examples/drive-thru/requirements.txt) |
| eval | 145 | [tests/__init__.py](../../../../sources/livekit__agents/tests/__init__.py)<br>[tests/.gitattributes](../../../../sources/livekit__agents/tests/.gitattributes)<br>[tests/.gitignore](../../../../sources/livekit__agents/tests/.gitignore)<br>[tests/change-sophie.opus](../../../../sources/livekit__agents/tests/change-sophie.opus)<br>[tests/change-sophie.wav](../../../../sources/livekit__agents/tests/change-sophie.wav)<br>[tests/concurrency.py](../../../../sources/livekit__agents/tests/concurrency.py)<br>[tests/conftest.py](../../../../sources/livekit__agents/tests/conftest.py)<br>[tests/docker-compose.yml](../../../../sources/livekit__agents/tests/docker-compose.yml) |
| security | 1 | [livekit-plugins/livekit-plugins-nvidia/livekit/plugins/nvidia/auth.py](../../../../sources/livekit__agents/livekit-plugins/livekit-plugins-nvidia/livekit/plugins/nvidia/auth.py) |
| ci | 12 | [.github/workflows/auto-assign.yml](../../../../sources/livekit__agents/.github/workflows/auto-assign.yml)<br>[.github/workflows/build.yml](../../../../sources/livekit__agents/.github/workflows/build.yml)<br>[.github/workflows/ci.yml](../../../../sources/livekit__agents/.github/workflows/ci.yml)<br>[.github/workflows/deploy-examples.yml](../../../../sources/livekit__agents/.github/workflows/deploy-examples.yml)<br>[.github/workflows/download-stats.yml](../../../../sources/livekit__agents/.github/workflows/download-stats.yml)<br>[.github/workflows/evals.yml](../../../../sources/livekit__agents/.github/workflows/evals.yml)<br>[.github/workflows/publish-docs.yml](../../../../sources/livekit__agents/.github/workflows/publish-docs.yml)<br>[.github/workflows/publish.yml](../../../../sources/livekit__agents/.github/workflows/publish.yml) |
| container | 11 | [tests/docker-compose.yml](../../../../sources/livekit__agents/tests/docker-compose.yml)<br>[tests/Dockerfile.tests](../../../../sources/livekit__agents/tests/Dockerfile.tests)<br>[tests/Dockerfile.toxiproxy](../../../../sources/livekit__agents/tests/Dockerfile.toxiproxy)<br>[examples/Dockerfile-example](../../../../sources/livekit__agents/examples/Dockerfile-example)<br>[examples/survey/Dockerfile](../../../../sources/livekit__agents/examples/survey/Dockerfile)<br>[examples/inference/Dockerfile](../../../../sources/livekit__agents/examples/inference/Dockerfile)<br>[examples/hotel_receptionist/Dockerfile](../../../../sources/livekit__agents/examples/hotel_receptionist/Dockerfile)<br>[examples/healthcare/Dockerfile](../../../../sources/livekit__agents/examples/healthcare/Dockerfile) |
| instruction | 2 | [AGENTS.md](../../../../sources/livekit__agents/AGENTS.md)<br>[CLAUDE.md](../../../../sources/livekit__agents/CLAUDE.md) |
| docs | 106 | [README.md](../../../../sources/livekit__agents/README.md)<br>[livekit-plugins/livekit-plugins-xai/README.md](../../../../sources/livekit__agents/livekit-plugins/livekit-plugins-xai/README.md)<br>[livekit-plugins/livekit-plugins-upliftai/README.md](../../../../sources/livekit__agents/livekit-plugins/livekit-plugins-upliftai/README.md)<br>[livekit-plugins/livekit-plugins-ultravox/README.md](../../../../sources/livekit__agents/livekit-plugins/livekit-plugins-ultravox/README.md)<br>[livekit-plugins/livekit-plugins-turn-detector/README.md](../../../../sources/livekit__agents/livekit-plugins/livekit-plugins-turn-detector/README.md)<br>[livekit-plugins/livekit-plugins-trugen/README.md](../../../../sources/livekit__agents/livekit-plugins/livekit-plugins-trugen/README.md)<br>[livekit-plugins/livekit-plugins-telnyx/README.md](../../../../sources/livekit__agents/livekit-plugins/livekit-plugins-telnyx/README.md)<br>[livekit-plugins/livekit-plugins-tavus/README.md](../../../../sources/livekit__agents/livekit-plugins/livekit-plugins-tavus/README.md) |
| config | 88 | [makefile](../../../../sources/livekit__agents/makefile)<br>[pyproject.toml](../../../../sources/livekit__agents/pyproject.toml)<br>[uv.lock](../../../../sources/livekit__agents/uv.lock)<br>[tests/Makefile](../../../../sources/livekit__agents/tests/Makefile)<br>[livekit-plugins/livekit-plugins-xai/pyproject.toml](../../../../sources/livekit__agents/livekit-plugins/livekit-plugins-xai/pyproject.toml)<br>[livekit-plugins/livekit-plugins-upliftai/pyproject.toml](../../../../sources/livekit__agents/livekit-plugins/livekit-plugins-upliftai/pyproject.toml)<br>[livekit-plugins/livekit-plugins-ultravox/pyproject.toml](../../../../sources/livekit__agents/livekit-plugins/livekit-plugins-ultravox/pyproject.toml)<br>[livekit-plugins/livekit-plugins-turn-detector/pyproject.toml](../../../../sources/livekit__agents/livekit-plugins/livekit-plugins-turn-detector/pyproject.toml) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 145 | [tests/__init__.py](../../../../sources/livekit__agents/tests/__init__.py)<br>[tests/.gitattributes](../../../../sources/livekit__agents/tests/.gitattributes)<br>[tests/.gitignore](../../../../sources/livekit__agents/tests/.gitignore)<br>[tests/change-sophie.opus](../../../../sources/livekit__agents/tests/change-sophie.opus)<br>[tests/change-sophie.wav](../../../../sources/livekit__agents/tests/change-sophie.wav)<br>[tests/concurrency.py](../../../../sources/livekit__agents/tests/concurrency.py) |
| CI workflows | 12 | [.github/workflows/auto-assign.yml](../../../../sources/livekit__agents/.github/workflows/auto-assign.yml)<br>[.github/workflows/build.yml](../../../../sources/livekit__agents/.github/workflows/build.yml)<br>[.github/workflows/ci.yml](../../../../sources/livekit__agents/.github/workflows/ci.yml)<br>[.github/workflows/deploy-examples.yml](../../../../sources/livekit__agents/.github/workflows/deploy-examples.yml)<br>[.github/workflows/download-stats.yml](../../../../sources/livekit__agents/.github/workflows/download-stats.yml)<br>[.github/workflows/evals.yml](../../../../sources/livekit__agents/.github/workflows/evals.yml) |
| Containers / deploy | 11 | [tests/docker-compose.yml](../../../../sources/livekit__agents/tests/docker-compose.yml)<br>[tests/Dockerfile.tests](../../../../sources/livekit__agents/tests/Dockerfile.tests)<br>[tests/Dockerfile.toxiproxy](../../../../sources/livekit__agents/tests/Dockerfile.toxiproxy)<br>[examples/Dockerfile-example](../../../../sources/livekit__agents/examples/Dockerfile-example)<br>[examples/survey/Dockerfile](../../../../sources/livekit__agents/examples/survey/Dockerfile)<br>[examples/inference/Dockerfile](../../../../sources/livekit__agents/examples/inference/Dockerfile) |
| Security / policy | 1 | [livekit-plugins/livekit-plugins-nvidia/livekit/plugins/nvidia/auth.py](../../../../sources/livekit__agents/livekit-plugins/livekit-plugins-nvidia/livekit/plugins/nvidia/auth.py) |
| Agent instructions | 2 | [AGENTS.md](../../../../sources/livekit__agents/AGENTS.md)<br>[CLAUDE.md](../../../../sources/livekit__agents/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `livekit-agents/livekit/agents/llm/mcp.py`, `examples/voice_agents/zapier_mcp_integration.py`, `examples/voice_agents/mcp/mcp-agent.py`.
2. Trace execution through entrypoints: `livekit-plugins/livekit-blingfire/src/main.cpp`, `livekit-agents/livekit/agents/__main__.py`, `examples/voice_agents/mcp/server.py`.
3. Map agent/tool runtime through: `AGENTS.md`, `livekit-plugins/livekit-plugins-xai/livekit/plugins/xai/tools.py`, `livekit-plugins/livekit-plugins-openai/livekit/plugins/openai/tools.py`.
4. Inspect retrieval/memory/indexing through: `tests/test_supervised_proc_memory.py`, `examples/voice_agents/llamaindex-rag/.gitignore`, `examples/voice_agents/llamaindex-rag/chat_engine.py`.
5. Verify behavior through test/eval files: `tests/__init__.py`, `tests/.gitattributes`, `tests/.gitignore`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 A framework for building realtime voice AI agents 🤖🎙️📹. 핵심 구조 신호는 Python, pyproject.toml, Makefile, README.md, AGENTS.md, CLAUDE.md이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
