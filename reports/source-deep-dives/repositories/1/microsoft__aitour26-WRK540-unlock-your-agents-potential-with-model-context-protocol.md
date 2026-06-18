# microsoft/aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

microsoft/aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol

## 요약

- 조사 단위: `sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 240 files, 54 directories, depth score 119, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 mcp=src/shared/instructions/mcp_server_tools_with_code_interpreter.txt, src/shared/instructions/mcp_server_tools_with_semantic_search.txt, src/python/mcp_server/sales_analysis/config.py이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | microsoft/aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 424 |
| Forks | 107 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol) |
| Existing report | [reports/global-trending/repositories/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol.md](../../../global-trending/repositories/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 240 / 54 |
| Max observed depth | 7 |
| Top directories | .aspire, .devcontainer, .github, data, docs, img, infra, media, scripts, session-delivery-resources, src |
| Top extensions | .md: 69, .png: 40, .cs: 31, .py: 26, .json: 13, .ps1: 10, .yml: 8, .bicep: 6, .sh: 6, .txt: 6, (none): 6, .csproj: 4 |
| Source patterns | cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 67 |
| src | source boundary | 15 |
| .devcontainer | deployment surface | 1 |
| .github | ci surface | 1 |
| data | top-level component | 1 |
| img | top-level component | 1 |
| infra | top-level component | 1 |
| media | top-level component | 1 |
| scripts | top-level component | 1 |
| session-delivery-resources | top-level component | 1 |


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
| mcp | [src/shared/instructions/mcp_server_tools_with_code_interpreter.txt](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/src/shared/instructions/mcp_server_tools_with_code_interpreter.txt) | mcp signal |
| mcp | [src/shared/instructions/mcp_server_tools_with_semantic_search.txt](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/src/shared/instructions/mcp_server_tools_with_semantic_search.txt) | mcp signal |
| mcp | [src/python/mcp_server/sales_analysis/config.py](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/src/python/mcp_server/sales_analysis/config.py) | mcp signal |
| mcp | [src/python/mcp_server/sales_analysis/README.md](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/src/python/mcp_server/sales_analysis/README.md) | mcp signal |
| agentRuntime | [src/csharp/McpAgentWorkshop.McpServer/Tools/DatabaseSchemaTools.cs](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/src/csharp/McpAgentWorkshop.McpServer/Tools/DatabaseSchemaTools.cs) | agentRuntime signal |
| agentRuntime | [src/csharp/McpAgentWorkshop.McpServer/Tools/EchoTools.cs](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/src/csharp/McpAgentWorkshop.McpServer/Tools/EchoTools.cs) | agentRuntime signal |
| agentRuntime | [src/csharp/McpAgentWorkshop.McpServer/Tools/SalesTools.cs](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/src/csharp/McpAgentWorkshop.McpServer/Tools/SalesTools.cs) | agentRuntime signal |
| agentRuntime | [src/csharp/McpAgentWorkshop.McpServer/Tools/SemanticSearchTools.cs](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/src/csharp/McpAgentWorkshop.McpServer/Tools/SemanticSearchTools.cs) | agentRuntime signal |
| entrypoints | [infra/skillable/main.json](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/infra/skillable/main.json) | entrypoints signal |
| config | [pyproject.toml](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/pyproject.toml) | config signal |
| config | [requirements.lock.txt](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/requirements.lock.txt) | config signal |
| config | [requirements.windows.lock.txt](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/requirements.windows.lock.txt) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 1 | [infra/skillable/main.json](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/infra/skillable/main.json) |
| agentRuntime | 8 | [src/csharp/McpAgentWorkshop.McpServer/Tools/DatabaseSchemaTools.cs](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/src/csharp/McpAgentWorkshop.McpServer/Tools/DatabaseSchemaTools.cs)<br>[src/csharp/McpAgentWorkshop.McpServer/Tools/EchoTools.cs](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/src/csharp/McpAgentWorkshop.McpServer/Tools/EchoTools.cs)<br>[src/csharp/McpAgentWorkshop.McpServer/Tools/SalesTools.cs](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/src/csharp/McpAgentWorkshop.McpServer/Tools/SalesTools.cs)<br>[src/csharp/McpAgentWorkshop.McpServer/Tools/SemanticSearchTools.cs](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/src/csharp/McpAgentWorkshop.McpServer/Tools/SemanticSearchTools.cs)<br>[src/csharp/McpAgentWorkshop.McpServer/Tools/TimeTools.cs](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/src/csharp/McpAgentWorkshop.McpServer/Tools/TimeTools.cs)<br>[docs/docs/media/agent_web_chat.png](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/docs/docs/media/agent_web_chat.png)<br>[docs/docs/es/agent-service-overview.md](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/docs/docs/es/agent-service-overview.md)<br>[docs/docs/en/agent-service-overview.md](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/docs/docs/en/agent-service-overview.md) |
| mcp | 14 | [src/shared/instructions/mcp_server_tools_with_code_interpreter.txt](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/src/shared/instructions/mcp_server_tools_with_code_interpreter.txt)<br>[src/shared/instructions/mcp_server_tools_with_semantic_search.txt](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/src/shared/instructions/mcp_server_tools_with_semantic_search.txt)<br>[src/python/mcp_server/sales_analysis/config.py](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/src/python/mcp_server/sales_analysis/config.py)<br>[src/python/mcp_server/sales_analysis/README.md](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/src/python/mcp_server/sales_analysis/README.md)<br>[src/python/mcp_server/sales_analysis/sales_analysis_postgres.py](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/src/python/mcp_server/sales_analysis/sales_analysis_postgres.py)<br>[src/python/mcp_server/sales_analysis/sales_analysis_text_embeddings.py](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/src/python/mcp_server/sales_analysis/sales_analysis_text_embeddings.py)<br>[src/python/mcp_server/sales_analysis/sales_analysis.py](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/src/python/mcp_server/sales_analysis/sales_analysis.py)<br>[docs/docs/resources/MCAPS_WRK540_Unlock_Your_Agents_Potential_with_MCP.pptx](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/docs/docs/resources/MCAPS_WRK540_Unlock_Your_Agents_Potential_with_MCP.pptx) |
| retrieval | 5 | [src/shared/webapp/static/index.html](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/src/shared/webapp/static/index.html)<br>[docs/docs/es/index.md](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/docs/docs/es/index.md)<br>[docs/docs/en/index.md](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/docs/docs/en/index.md)<br>[data/raft-generator/generate_knowledge_base.py](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/data/raft-generator/generate_knowledge_base.py)<br>[data/raft-generator/README_RAG_RAFT.md](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/data/raft-generator/README_RAG_RAFT.md) |
| spec | 9 | [requirements.in](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/requirements.in)<br>[requirements.lock.txt](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/requirements.lock.txt)<br>[requirements.windows.lock.txt](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/requirements.windows.lock.txt)<br>[docs/requirements.txt](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/docs/requirements.txt)<br>[docs/docs/media/architecture.png](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/docs/docs/media/architecture.png)<br>[docs/docs/media/devtunnel-architecture.png](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/docs/docs/media/devtunnel-architecture.png)<br>[docs/docs/es/architecture.md](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/docs/docs/es/architecture.md)<br>[docs/docs/en/architecture.md](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/docs/docs/en/architecture.md) |
| eval | 12 | [docs/docs/media/ai-foundry-trace-agent-init.png](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/docs/docs/media/ai-foundry-trace-agent-init.png)<br>[docs/docs/media/ai-foundry-tracing.png](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/docs/docs/media/ai-foundry-tracing.png)<br>[docs/docs/media/lab-7-trace-overview.png](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/docs/docs/media/lab-7-trace-overview.png)<br>[docs/docs/media/lab-7-trace-timeline.png](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/docs/docs/media/lab-7-trace-timeline.png)<br>[docs/docs/media/monitor_resource_usage.png](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/docs/docs/media/monitor_resource_usage.png)<br>[docs/docs/media/monitor_usage.png](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/docs/docs/media/monitor_usage.png)<br>[docs/docs/es/lab-6-tracing.md](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/docs/docs/es/lab-6-tracing.md)<br>[docs/docs/es/lab-7-local-tracing-with-aspire.md](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/docs/docs/es/lab-7-local-tracing-with-aspire.md) |
| security | 2 | [SECURITY.md](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/SECURITY.md)<br>[data/database/row_level_security_guide.md](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/data/database/row_level_security_guide.md) |
| ci | 4 | [.github/workflows/add-to-project.yml](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/.github/workflows/add-to-project.yml)<br>[.github/workflows/docs.yml](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/.github/workflows/docs.yml)<br>[.github/workflows/dotnet-ci.yml](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/.github/workflows/dotnet-ci.yml)<br>[.github/workflows/python-ci.yml](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/.github/workflows/python-ci.yml) |
| container | 3 | [docker-compose.yml](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/docker-compose.yml)<br>[.devcontainer/docker-compose.devcontainer.yml](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/.devcontainer/docker-compose.devcontainer.yml)<br>[.devcontainer/Dockerfile](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/.devcontainer/Dockerfile) |
| instruction | 0 | not obvious |
| docs | 101 | [README.MD](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/README.MD)<br>[src/python/mcp_server/sales_analysis/README.md](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/src/python/mcp_server/sales_analysis/README.md)<br>[session-delivery-resources/readme.md](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/session-delivery-resources/readme.md)<br>[infra/skillable/README.md](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/infra/skillable/README.md)<br>[docs/mkdocs.yml](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/docs/mkdocs.yml)<br>[docs/README.md](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/docs/README.md)<br>[docs/requirements.txt](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/docs/requirements.txt)<br>[docs/docs/resources/MCAPS_WRK540_Unlock_Your_Agents_Potential_with_MCP.pptx](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/docs/docs/resources/MCAPS_WRK540_Unlock_Your_Agents_Potential_with_MCP.pptx) |
| config | 5 | [pyproject.toml](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/pyproject.toml)<br>[requirements.lock.txt](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/requirements.lock.txt)<br>[requirements.windows.lock.txt](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/requirements.windows.lock.txt)<br>[docs/requirements.txt](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/docs/requirements.txt)<br>[data/requirements.txt](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/data/requirements.txt) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 12 | [docs/docs/media/ai-foundry-trace-agent-init.png](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/docs/docs/media/ai-foundry-trace-agent-init.png)<br>[docs/docs/media/ai-foundry-tracing.png](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/docs/docs/media/ai-foundry-tracing.png)<br>[docs/docs/media/lab-7-trace-overview.png](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/docs/docs/media/lab-7-trace-overview.png)<br>[docs/docs/media/lab-7-trace-timeline.png](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/docs/docs/media/lab-7-trace-timeline.png)<br>[docs/docs/media/monitor_resource_usage.png](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/docs/docs/media/monitor_resource_usage.png)<br>[docs/docs/media/monitor_usage.png](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/docs/docs/media/monitor_usage.png) |
| CI workflows | 4 | [.github/workflows/add-to-project.yml](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/.github/workflows/add-to-project.yml)<br>[.github/workflows/docs.yml](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/.github/workflows/docs.yml)<br>[.github/workflows/dotnet-ci.yml](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/.github/workflows/dotnet-ci.yml)<br>[.github/workflows/python-ci.yml](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/.github/workflows/python-ci.yml) |
| Containers / deploy | 3 | [docker-compose.yml](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/docker-compose.yml)<br>[.devcontainer/docker-compose.devcontainer.yml](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/.devcontainer/docker-compose.devcontainer.yml)<br>[.devcontainer/Dockerfile](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/.devcontainer/Dockerfile) |
| Security / policy | 2 | [SECURITY.md](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/SECURITY.md)<br>[data/database/row_level_security_guide.md](../../../../sources/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol/data/database/row_level_security_guide.md) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | agent instruction files not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `src/shared/instructions/mcp_server_tools_with_code_interpreter.txt`, `src/shared/instructions/mcp_server_tools_with_semantic_search.txt`, `src/python/mcp_server/sales_analysis/config.py`.
2. Trace execution through entrypoints: `infra/skillable/main.json`.
3. Map agent/tool runtime through: `src/csharp/McpAgentWorkshop.McpServer/Tools/DatabaseSchemaTools.cs`, `src/csharp/McpAgentWorkshop.McpServer/Tools/EchoTools.cs`, `src/csharp/McpAgentWorkshop.McpServer/Tools/SalesTools.cs`.
4. Inspect retrieval/memory/indexing through: `src/shared/webapp/static/index.html`, `docs/docs/es/index.md`, `docs/docs/en/index.md`.
5. Verify behavior through test/eval files: `docs/docs/media/ai-foundry-trace-agent-init.png`, `docs/docs/media/ai-foundry-tracing.png`, `docs/docs/media/lab-7-trace-overview.png`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 설명 메타데이터가 짧습니다. 핵심 구조 신호는 Python, pyproject.toml, docker-compose.yml, README.md, LICENSE, ci이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
