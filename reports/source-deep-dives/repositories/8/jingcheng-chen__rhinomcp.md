# jingcheng-chen/rhinomcp Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

RhinoMCP connects Rhino 3D to AI Agent through the Model Context Protocol (MCP)

## 요약

- 조사 단위: `sources/jingcheng-chen__rhinomcp` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 232 files, 23 directories, depth score 101, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=.github/workflows/mcp-server-publish.yml이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | jingcheng-chen/rhinomcp |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 724 |
| Forks | 76 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/jingcheng-chen__rhinomcp](../../../../sources/jingcheng-chen__rhinomcp) |
| Existing report | [reports/global-trending/repositories/jingcheng-chen__rhinomcp.md](../../../global-trending/repositories/jingcheng-chen__rhinomcp.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 232 / 23 |
| Max observed depth | 5 |
| Top directories | .github, contracts, docs, plugin, server |
| Top extensions | .py: 77, .json: 76, .cs: 51, .md: 5, .jpg: 4, .yml: 4, (none): 4, .sh: 2, .txt: 2, .csproj: 1, .ico: 1, .ini: 1 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| server | source boundary | 50 |
| docs | documentation surface | 9 |
| .github | ci surface | 1 |
| contracts | top-level component | 1 |
| plugin | top-level component | 1 |


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
| mcp | [.github/workflows/mcp-server-publish.yml](../../../../sources/jingcheng-chen__rhinomcp/.github/workflows/mcp-server-publish.yml) | mcp signal |
| agentRuntime | [server/src/rhinomcp/tools/_grasshopper_common.py](../../../../sources/jingcheng-chen__rhinomcp/server/src/rhinomcp/tools/_grasshopper_common.py) | agentRuntime signal |
| agentRuntime | [server/src/rhinomcp/tools/advanced_geometry.py](../../../../sources/jingcheng-chen__rhinomcp/server/src/rhinomcp/tools/advanced_geometry.py) | agentRuntime signal |
| agentRuntime | [server/src/rhinomcp/tools/analyze_objects.py](../../../../sources/jingcheng-chen__rhinomcp/server/src/rhinomcp/tools/analyze_objects.py) | agentRuntime signal |
| agentRuntime | [server/src/rhinomcp/tools/boolean_operations.py](../../../../sources/jingcheng-chen__rhinomcp/server/src/rhinomcp/tools/boolean_operations.py) | agentRuntime signal |
| entrypoints | [server/main.py](../../../../sources/jingcheng-chen__rhinomcp/server/main.py) | entrypoints signal |
| entrypoints | [server/src/rhinomcp/server.py](../../../../sources/jingcheng-chen__rhinomcp/server/src/rhinomcp/server.py) | entrypoints signal |
| config | [server/pyproject.toml](../../../../sources/jingcheng-chen__rhinomcp/server/pyproject.toml) | config signal |
| config | [server/uv.lock](../../../../sources/jingcheng-chen__rhinomcp/server/uv.lock) | config signal |
| ci | [.github/workflows/ci.yml](../../../../sources/jingcheng-chen__rhinomcp/.github/workflows/ci.yml) | ci support |
| eval | [server/tests/__init__.py](../../../../sources/jingcheng-chen__rhinomcp/server/tests/__init__.py) | eval support |
| eval | [server/tests/mock_rhino_server.py](../../../../sources/jingcheng-chen__rhinomcp/server/tests/mock_rhino_server.py) | eval support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 2 | [server/main.py](../../../../sources/jingcheng-chen__rhinomcp/server/main.py)<br>[server/src/rhinomcp/server.py](../../../../sources/jingcheng-chen__rhinomcp/server/src/rhinomcp/server.py) |
| agentRuntime | 36 | [server/src/rhinomcp/tools/_grasshopper_common.py](../../../../sources/jingcheng-chen__rhinomcp/server/src/rhinomcp/tools/_grasshopper_common.py)<br>[server/src/rhinomcp/tools/advanced_geometry.py](../../../../sources/jingcheng-chen__rhinomcp/server/src/rhinomcp/tools/advanced_geometry.py)<br>[server/src/rhinomcp/tools/analyze_objects.py](../../../../sources/jingcheng-chen__rhinomcp/server/src/rhinomcp/tools/analyze_objects.py)<br>[server/src/rhinomcp/tools/boolean_operations.py](../../../../sources/jingcheng-chen__rhinomcp/server/src/rhinomcp/tools/boolean_operations.py)<br>[server/src/rhinomcp/tools/capture_viewport.py](../../../../sources/jingcheng-chen__rhinomcp/server/src/rhinomcp/tools/capture_viewport.py)<br>[server/src/rhinomcp/tools/create_layer.py](../../../../sources/jingcheng-chen__rhinomcp/server/src/rhinomcp/tools/create_layer.py)<br>[server/src/rhinomcp/tools/create_object.py](../../../../sources/jingcheng-chen__rhinomcp/server/src/rhinomcp/tools/create_object.py)<br>[server/src/rhinomcp/tools/create_objects.py](../../../../sources/jingcheng-chen__rhinomcp/server/src/rhinomcp/tools/create_objects.py) |
| mcp | 1 | [.github/workflows/mcp-server-publish.yml](../../../../sources/jingcheng-chen__rhinomcp/.github/workflows/mcp-server-publish.yml) |
| retrieval | 5 | [server/src/rhinomcp/tools/grasshopper_graph.py](../../../../sources/jingcheng-chen__rhinomcp/server/src/rhinomcp/tools/grasshopper_graph.py)<br>[contracts/commands/gh_build_graph.json](../../../../sources/jingcheng-chen__rhinomcp/contracts/commands/gh_build_graph.json)<br>[contracts/commands/gh_clear_graph.json](../../../../sources/jingcheng-chen__rhinomcp/contracts/commands/gh_clear_graph.json)<br>[contracts/commands/gh_get_graph.json](../../../../sources/jingcheng-chen__rhinomcp/contracts/commands/gh_get_graph.json)<br>[contracts/commands/gh_mutate_graph.json](../../../../sources/jingcheng-chen__rhinomcp/contracts/commands/gh_mutate_graph.json) |
| spec | 0 | not obvious |
| eval | 8 | [server/tests/__init__.py](../../../../sources/jingcheng-chen__rhinomcp/server/tests/__init__.py)<br>[server/tests/mock_rhino_server.py](../../../../sources/jingcheng-chen__rhinomcp/server/tests/mock_rhino_server.py)<br>[server/tests/test_connection.py](../../../../sources/jingcheng-chen__rhinomcp/server/tests/test_connection.py)<br>[server/tests/test_curve_operations.py](../../../../sources/jingcheng-chen__rhinomcp/server/tests/test_curve_operations.py)<br>[server/tests/test_integration.py](../../../../sources/jingcheng-chen__rhinomcp/server/tests/test_integration.py)<br>[server/tests/test_tools.py](../../../../sources/jingcheng-chen__rhinomcp/server/tests/test_tools.py)<br>[server/tests/test_validation.py](../../../../sources/jingcheng-chen__rhinomcp/server/tests/test_validation.py)<br>[contracts/test_schemas.py](../../../../sources/jingcheng-chen__rhinomcp/contracts/test_schemas.py) |
| security | 0 | not obvious |
| ci | 3 | [.github/workflows/ci.yml](../../../../sources/jingcheng-chen__rhinomcp/.github/workflows/ci.yml)<br>[.github/workflows/mcp-server-publish.yml](../../../../sources/jingcheng-chen__rhinomcp/.github/workflows/mcp-server-publish.yml)<br>[.github/workflows/rhino-plugin-publish.yml](../../../../sources/jingcheng-chen__rhinomcp/.github/workflows/rhino-plugin-publish.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 12 | [README.md](../../../../sources/jingcheng-chen__rhinomcp/README.md)<br>[README.zh-CN.md](../../../../sources/jingcheng-chen__rhinomcp/README.zh-CN.md)<br>[server/README.md](../../../../sources/jingcheng-chen__rhinomcp/server/README.md)<br>[docs/IMPLEMENTATION.md](../../../../sources/jingcheng-chen__rhinomcp/docs/IMPLEMENTATION.md)<br>[docs/demo_chats/create_6x6x6_boxes.txt](../../../../sources/jingcheng-chen__rhinomcp/docs/demo_chats/create_6x6x6_boxes.txt)<br>[docs/demo_chats/create_rhinoceros_lego_blocks.txt](../../../../sources/jingcheng-chen__rhinomcp/docs/demo_chats/create_rhinoceros_lego_blocks.txt)<br>[docs/assets/claude_example.jpg](../../../../sources/jingcheng-chen__rhinomcp/docs/assets/claude_example.jpg)<br>[docs/assets/demo1.jpg](../../../../sources/jingcheng-chen__rhinomcp/docs/assets/demo1.jpg) |
| config | 2 | [server/pyproject.toml](../../../../sources/jingcheng-chen__rhinomcp/server/pyproject.toml)<br>[server/uv.lock](../../../../sources/jingcheng-chen__rhinomcp/server/uv.lock) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 8 | [server/tests/__init__.py](../../../../sources/jingcheng-chen__rhinomcp/server/tests/__init__.py)<br>[server/tests/mock_rhino_server.py](../../../../sources/jingcheng-chen__rhinomcp/server/tests/mock_rhino_server.py)<br>[server/tests/test_connection.py](../../../../sources/jingcheng-chen__rhinomcp/server/tests/test_connection.py)<br>[server/tests/test_curve_operations.py](../../../../sources/jingcheng-chen__rhinomcp/server/tests/test_curve_operations.py)<br>[server/tests/test_integration.py](../../../../sources/jingcheng-chen__rhinomcp/server/tests/test_integration.py)<br>[server/tests/test_tools.py](../../../../sources/jingcheng-chen__rhinomcp/server/tests/test_tools.py) |
| CI workflows | 3 | [.github/workflows/ci.yml](../../../../sources/jingcheng-chen__rhinomcp/.github/workflows/ci.yml)<br>[.github/workflows/mcp-server-publish.yml](../../../../sources/jingcheng-chen__rhinomcp/.github/workflows/mcp-server-publish.yml)<br>[.github/workflows/rhino-plugin-publish.yml](../../../../sources/jingcheng-chen__rhinomcp/.github/workflows/rhino-plugin-publish.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | security/policy surface not obvious; agent instruction files not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `.github/workflows/mcp-server-publish.yml`, `server/src/rhinomcp/tools/_grasshopper_common.py`, `server/src/rhinomcp/tools/advanced_geometry.py`.
2. Trace execution through entrypoints: `server/main.py`, `server/src/rhinomcp/server.py`.
3. Map agent/tool runtime through: `server/src/rhinomcp/tools/_grasshopper_common.py`, `server/src/rhinomcp/tools/advanced_geometry.py`, `server/src/rhinomcp/tools/analyze_objects.py`.
4. Inspect retrieval/memory/indexing through: `server/src/rhinomcp/tools/grasshopper_graph.py`, `contracts/commands/gh_build_graph.json`, `contracts/commands/gh_clear_graph.json`.
5. Verify behavior through test/eval files: `server/tests/__init__.py`, `server/tests/mock_rhino_server.py`, `server/tests/test_connection.py`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 RhinoMCP connects Rhino 3D to AI Agent through the Model Context Protocol MCP. 핵심 구조 신호는 Python, README.md, LICENSE, ci, docs, spec-artifacts이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
