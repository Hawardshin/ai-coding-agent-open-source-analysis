# Glade-tool/glade-mcp Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Connect any MCP-compatible AI client (Claude Code, Cursor, Windsurf) to Unity or Godot. 235+ granular tools, a Unity-aware system prompt, game design document project context, script semantic search, and skill calibration.

## 요약

- 조사 단위: `sources/Glade-tool__glade-mcp` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 891 files, 81 directories, depth score 103, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 api/server, agent/tool runtime, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 mcp=mcp-server/.gitignore, mcp-server/.mcp.json, mcp-server/.python-version이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | Glade-tool/glade-mcp |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | C# |
| Stars | 168 |
| Forks | 20 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/Glade-tool__glade-mcp](../../../../sources/Glade-tool__glade-mcp) |
| Existing report | [reports/global-trending/repositories/Glade-tool__glade-mcp.md](../../../global-trending/repositories/Glade-tool__glade-mcp.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 891 / 81 |
| Max observed depth | 7 |
| Top directories | .github, assets, godot-bridge, mcp-server, unity-bridge |
| Top extensions | .meta: 347, .cs: 302, .gd: 121, .py: 86, .md: 9, (none): 8, .png: 4, .asmdef: 3, .json: 3, .txt: 2, .cfg: 1, .gif: 1 |
| Source patterns | api/server, agent/tool runtime, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| godot-bridge | top-level component | 1 |
| mcp-server | source boundary | 1 |
| unity-bridge | top-level component | 1 |


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
| mcp | [mcp-server/.gitignore](../../../../sources/Glade-tool__glade-mcp/mcp-server/.gitignore) | mcp signal |
| mcp | [mcp-server/.mcp.json](../../../../sources/Glade-tool__glade-mcp/mcp-server/.mcp.json) | mcp signal |
| mcp | [mcp-server/.python-version](../../../../sources/Glade-tool__glade-mcp/mcp-server/.python-version) | mcp signal |
| mcp | [mcp-server/CHANGELOG.md](../../../../sources/Glade-tool__glade-mcp/mcp-server/CHANGELOG.md) | mcp signal |
| agentRuntime | [unity-bridge/Editor/Tools.meta](../../../../sources/Glade-tool__glade-mcp/unity-bridge/Editor/Tools.meta) | agentRuntime signal |
| agentRuntime | [unity-bridge/Editor/Tools/IAsyncTool.cs](../../../../sources/Glade-tool__glade-mcp/unity-bridge/Editor/Tools/IAsyncTool.cs) | agentRuntime signal |
| agentRuntime | [unity-bridge/Editor/Tools/IAsyncTool.cs.meta](../../../../sources/Glade-tool__glade-mcp/unity-bridge/Editor/Tools/IAsyncTool.cs.meta) | agentRuntime signal |
| agentRuntime | [unity-bridge/Editor/Tools/Implementations.meta](../../../../sources/Glade-tool__glade-mcp/unity-bridge/Editor/Tools/Implementations.meta) | agentRuntime signal |
| entrypoints | [mcp-server/src/gladekit_mcp/__main__.py](../../../../sources/Glade-tool__glade-mcp/mcp-server/src/gladekit_mcp/__main__.py) | entrypoints signal |
| entrypoints | [mcp-server/src/gladekit_mcp/server.py](../../../../sources/Glade-tool__glade-mcp/mcp-server/src/gladekit_mcp/server.py) | entrypoints signal |
| entrypoints | [mcp-server/eval/__main__.py](../../../../sources/Glade-tool__glade-mcp/mcp-server/eval/__main__.py) | entrypoints signal |
| config | [unity-bridge/package.json](../../../../sources/Glade-tool__glade-mcp/unity-bridge/package.json) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 3 | [mcp-server/src/gladekit_mcp/__main__.py](../../../../sources/Glade-tool__glade-mcp/mcp-server/src/gladekit_mcp/__main__.py)<br>[mcp-server/src/gladekit_mcp/server.py](../../../../sources/Glade-tool__glade-mcp/mcp-server/src/gladekit_mcp/server.py)<br>[mcp-server/eval/__main__.py](../../../../sources/Glade-tool__glade-mcp/mcp-server/eval/__main__.py) |
| agentRuntime | 674 | [unity-bridge/Editor/Tools.meta](../../../../sources/Glade-tool__glade-mcp/unity-bridge/Editor/Tools.meta)<br>[unity-bridge/Editor/Tools/IAsyncTool.cs](../../../../sources/Glade-tool__glade-mcp/unity-bridge/Editor/Tools/IAsyncTool.cs)<br>[unity-bridge/Editor/Tools/IAsyncTool.cs.meta](../../../../sources/Glade-tool__glade-mcp/unity-bridge/Editor/Tools/IAsyncTool.cs.meta)<br>[unity-bridge/Editor/Tools/Implementations.meta](../../../../sources/Glade-tool__glade-mcp/unity-bridge/Editor/Tools/Implementations.meta)<br>[unity-bridge/Editor/Tools/ITool.cs](../../../../sources/Glade-tool__glade-mcp/unity-bridge/Editor/Tools/ITool.cs)<br>[unity-bridge/Editor/Tools/ITool.cs.meta](../../../../sources/Glade-tool__glade-mcp/unity-bridge/Editor/Tools/ITool.cs.meta)<br>[unity-bridge/Editor/Tools/Registrars.meta](../../../../sources/Glade-tool__glade-mcp/unity-bridge/Editor/Tools/Registrars.meta)<br>[unity-bridge/Editor/Tools/Templates.meta](../../../../sources/Glade-tool__glade-mcp/unity-bridge/Editor/Tools/Templates.meta) |
| mcp | 200 | [mcp-server/.gitignore](../../../../sources/Glade-tool__glade-mcp/mcp-server/.gitignore)<br>[mcp-server/.mcp.json](../../../../sources/Glade-tool__glade-mcp/mcp-server/.mcp.json)<br>[mcp-server/.python-version](../../../../sources/Glade-tool__glade-mcp/mcp-server/.python-version)<br>[mcp-server/CHANGELOG.md](../../../../sources/Glade-tool__glade-mcp/mcp-server/CHANGELOG.md)<br>[mcp-server/CONTRIBUTING.md](../../../../sources/Glade-tool__glade-mcp/mcp-server/CONTRIBUTING.md)<br>[mcp-server/LICENSE](../../../../sources/Glade-tool__glade-mcp/mcp-server/LICENSE)<br>[mcp-server/pyproject.toml](../../../../sources/Glade-tool__glade-mcp/mcp-server/pyproject.toml)<br>[mcp-server/README.md](../../../../sources/Glade-tool__glade-mcp/mcp-server/README.md) |
| retrieval | 0 | not obvious |
| spec | 0 | not obvious |
| eval | 87 | [unity-bridge/Tests.meta](../../../../sources/Glade-tool__glade-mcp/unity-bridge/Tests.meta)<br>[unity-bridge/Tests/AssetPipelineGuard_UrlAllowlist.cs](../../../../sources/Glade-tool__glade-mcp/unity-bridge/Tests/AssetPipelineGuard_UrlAllowlist.cs)<br>[unity-bridge/Tests/AssetPipelineGuard_UrlAllowlist.cs.meta](../../../../sources/Glade-tool__glade-mcp/unity-bridge/Tests/AssetPipelineGuard_UrlAllowlist.cs.meta)<br>[unity-bridge/Tests/BridgeDiagnostics_RingBuffer.cs](../../../../sources/Glade-tool__glade-mcp/unity-bridge/Tests/BridgeDiagnostics_RingBuffer.cs)<br>[unity-bridge/Tests/BridgeDiagnostics_RingBuffer.cs.meta](../../../../sources/Glade-tool__glade-mcp/unity-bridge/Tests/BridgeDiagnostics_RingBuffer.cs.meta)<br>[unity-bridge/Tests/CreateScriptTool_SessionSafety.cs](../../../../sources/Glade-tool__glade-mcp/unity-bridge/Tests/CreateScriptTool_SessionSafety.cs)<br>[unity-bridge/Tests/CreateScriptTool_SessionSafety.cs.meta](../../../../sources/Glade-tool__glade-mcp/unity-bridge/Tests/CreateScriptTool_SessionSafety.cs.meta)<br>[unity-bridge/Tests/CreateThirdPersonControllerTool_Tests.cs](../../../../sources/Glade-tool__glade-mcp/unity-bridge/Tests/CreateThirdPersonControllerTool_Tests.cs) |
| security | 6 | [unity-bridge/Tests/EditorAsyncDownload_Policy.cs](../../../../sources/Glade-tool__glade-mcp/unity-bridge/Tests/EditorAsyncDownload_Policy.cs)<br>[unity-bridge/Tests/EditorAsyncDownload_Policy.cs.meta](../../../../sources/Glade-tool__glade-mcp/unity-bridge/Tests/EditorAsyncDownload_Policy.cs.meta)<br>[godot-bridge/tests/unit/test_asset_pipeline_guard.gd](../../../../sources/Glade-tool__glade-mcp/godot-bridge/tests/unit/test_asset_pipeline_guard.gd)<br>[godot-bridge/addons/com.gladekit.mcp-bridge/services/asset_pipeline_guard.gd](../../../../sources/Glade-tool__glade-mcp/godot-bridge/addons/com.gladekit.mcp-bridge/services/asset_pipeline_guard.gd)<br>[godot-bridge/addons/com.gladekit.mcp-bridge/services/demo_assets_guard.gd](../../../../sources/Glade-tool__glade-mcp/godot-bridge/addons/com.gladekit.mcp-bridge/services/demo_assets_guard.gd)<br>[godot-bridge/addons/com.gladekit.mcp-bridge/services/read_only_guard.gd](../../../../sources/Glade-tool__glade-mcp/godot-bridge/addons/com.gladekit.mcp-bridge/services/read_only_guard.gd) |
| ci | 1 | [.github/workflows/release.yml](../../../../sources/Glade-tool__glade-mcp/.github/workflows/release.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 6 | [README.md](../../../../sources/Glade-tool__glade-mcp/README.md)<br>[mcp-server/README.md](../../../../sources/Glade-tool__glade-mcp/mcp-server/README.md)<br>[mcp-server/eval/README.md](../../../../sources/Glade-tool__glade-mcp/mcp-server/eval/README.md)<br>[godot-bridge/README.md](../../../../sources/Glade-tool__glade-mcp/godot-bridge/README.md)<br>[godot-bridge/tests/README.md](../../../../sources/Glade-tool__glade-mcp/godot-bridge/tests/README.md)<br>[assets/README.md](../../../../sources/Glade-tool__glade-mcp/assets/README.md) |
| config | 3 | [unity-bridge/package.json](../../../../sources/Glade-tool__glade-mcp/unity-bridge/package.json)<br>[mcp-server/pyproject.toml](../../../../sources/Glade-tool__glade-mcp/mcp-server/pyproject.toml)<br>[mcp-server/uv.lock](../../../../sources/Glade-tool__glade-mcp/mcp-server/uv.lock) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 87 | [unity-bridge/Tests.meta](../../../../sources/Glade-tool__glade-mcp/unity-bridge/Tests.meta)<br>[unity-bridge/Tests/AssetPipelineGuard_UrlAllowlist.cs](../../../../sources/Glade-tool__glade-mcp/unity-bridge/Tests/AssetPipelineGuard_UrlAllowlist.cs)<br>[unity-bridge/Tests/AssetPipelineGuard_UrlAllowlist.cs.meta](../../../../sources/Glade-tool__glade-mcp/unity-bridge/Tests/AssetPipelineGuard_UrlAllowlist.cs.meta)<br>[unity-bridge/Tests/BridgeDiagnostics_RingBuffer.cs](../../../../sources/Glade-tool__glade-mcp/unity-bridge/Tests/BridgeDiagnostics_RingBuffer.cs)<br>[unity-bridge/Tests/BridgeDiagnostics_RingBuffer.cs.meta](../../../../sources/Glade-tool__glade-mcp/unity-bridge/Tests/BridgeDiagnostics_RingBuffer.cs.meta)<br>[unity-bridge/Tests/CreateScriptTool_SessionSafety.cs](../../../../sources/Glade-tool__glade-mcp/unity-bridge/Tests/CreateScriptTool_SessionSafety.cs) |
| CI workflows | 1 | [.github/workflows/release.yml](../../../../sources/Glade-tool__glade-mcp/.github/workflows/release.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 6 | [unity-bridge/Tests/EditorAsyncDownload_Policy.cs](../../../../sources/Glade-tool__glade-mcp/unity-bridge/Tests/EditorAsyncDownload_Policy.cs)<br>[unity-bridge/Tests/EditorAsyncDownload_Policy.cs.meta](../../../../sources/Glade-tool__glade-mcp/unity-bridge/Tests/EditorAsyncDownload_Policy.cs.meta)<br>[godot-bridge/tests/unit/test_asset_pipeline_guard.gd](../../../../sources/Glade-tool__glade-mcp/godot-bridge/tests/unit/test_asset_pipeline_guard.gd)<br>[godot-bridge/addons/com.gladekit.mcp-bridge/services/asset_pipeline_guard.gd](../../../../sources/Glade-tool__glade-mcp/godot-bridge/addons/com.gladekit.mcp-bridge/services/asset_pipeline_guard.gd)<br>[godot-bridge/addons/com.gladekit.mcp-bridge/services/demo_assets_guard.gd](../../../../sources/Glade-tool__glade-mcp/godot-bridge/addons/com.gladekit.mcp-bridge/services/demo_assets_guard.gd)<br>[godot-bridge/addons/com.gladekit.mcp-bridge/services/read_only_guard.gd](../../../../sources/Glade-tool__glade-mcp/godot-bridge/addons/com.gladekit.mcp-bridge/services/read_only_guard.gd) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | agent instruction files not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `mcp-server/.gitignore`, `mcp-server/.mcp.json`, `mcp-server/.python-version`.
2. Trace execution through entrypoints: `mcp-server/src/gladekit_mcp/__main__.py`, `mcp-server/src/gladekit_mcp/server.py`, `mcp-server/eval/__main__.py`.
3. Map agent/tool runtime through: `unity-bridge/Editor/Tools.meta`, `unity-bridge/Editor/Tools/IAsyncTool.cs`, `unity-bridge/Editor/Tools/IAsyncTool.cs.meta`.
4. Verify behavior through test/eval files: `unity-bridge/Tests.meta`, `unity-bridge/Tests/AssetPipelineGuard_UrlAllowlist.cs`, `unity-bridge/Tests/AssetPipelineGuard_UrlAllowlist.cs.meta`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Connect any MCP compatible AI client Claude Code, Cursor, Windsurf to Unity or Godot. 235+ granular tools, a Unity aware. 핵심 구조 신호는 C#, README.md, LICENSE, ci, docs이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
