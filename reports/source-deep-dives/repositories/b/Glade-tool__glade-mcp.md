# Glade-tool/glade-mcp 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

Connect any MCP-compatible AI client (Claude Code, Cursor, Windsurf) to Unity or Godot. 235+ granular tools, a Unity-aware system prompt, game design document project context, script semantic search, and skill calibration.

## 요약

- 조사 단위: `sources/Glade-tool__glade-mcp` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 891 files, 81 directories, depth score 97, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 api/server, agent/tool runtime, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 mcp=mcp-server/.gitignore, mcp-server/.mcp.json, mcp-server/.python-version이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

## 바로가기

| 이동 | 여기서 볼 것 |
| --- | --- |
| [전체 시작 README](../../../../README.md) | 레포 전체 목적, 핵심 카테고리, 읽는 순서. |
| [전체 보고서 읽기 지도](../../../README.md) | 모든 보고서의 시작점, 주제, 폴더 지도. |
| [주제별 보고서 목차](../../../by-topic/README.md) | 조사 질문 기준으로 보고서를 찾는 입구. |
| [표/CSV 목차](../../../tables/README.md) | 표로 빠르게 훑고 CSV로 비교하는 입구. |
| [레포별 인사이트](../../../repository-insights/README.md) | 레포별 총평과 위험 신호. |
| [소스 딥다이브](../../README.md) | 주제별 소스 경로 근거. |
| [레포별 소스 딥다이브](../README.md) | 로컬 클론 1개당 1개 Markdown 딥다이브. |
| [소스 트렌드 인사이트](../../../source-insights/README.md) | 카테고리별 트렌드와 레포별 특징 비교. |


## 레포 컨텍스트

| 항목 | 값 |
| --- | --- |
| 레포 | Glade-tool/glade-mcp |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | C# |
| Stars | 168 |
| Forks | 20 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/Glade-tool__glade-mcp](../../../../sources/Glade-tool__glade-mcp) |
| 기존 보고서 | [reports/global-trending/repositories/Glade-tool__glade-mcp.md](../../../global-trending/repositories/Glade-tool__glade-mcp.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 891 / 81 |
| 관측 최대 깊이 | 7 |
| 상위 디렉터리 | .github, assets, godot-bridge, mcp-server, unity-bridge |
| 상위 확장자 | .meta: 347, .cs: 302, .gd: 121, .py: 86, .md: 9, (none): 8, .png: 4, .asmdef: 3, .json: 3, .txt: 2, .cfg: 1, .gif: 1 |
| 소스 패턴 | api/server, agent/tool runtime, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| godot-bridge | top-level component | 1 |
| mcp-server | source boundary | 1 |
| unity-bridge | top-level component | 1 |


## 실행 방식

_root manifest에서 추출된 command surface가 없습니다._


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | 없음 |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 3 | [mcp-server/src/gladekit_mcp/__main__.py](../../../../sources/Glade-tool__glade-mcp/mcp-server/src/gladekit_mcp/__main__.py)<br>[mcp-server/src/gladekit_mcp/server.py](../../../../sources/Glade-tool__glade-mcp/mcp-server/src/gladekit_mcp/server.py)<br>[mcp-server/eval/__main__.py](../../../../sources/Glade-tool__glade-mcp/mcp-server/eval/__main__.py) |
| agentRuntime | 674 | [unity-bridge/Editor/Tools.meta](../../../../sources/Glade-tool__glade-mcp/unity-bridge/Editor/Tools.meta)<br>[unity-bridge/Editor/Tools/IAsyncTool.cs](../../../../sources/Glade-tool__glade-mcp/unity-bridge/Editor/Tools/IAsyncTool.cs)<br>[unity-bridge/Editor/Tools/IAsyncTool.cs.meta](../../../../sources/Glade-tool__glade-mcp/unity-bridge/Editor/Tools/IAsyncTool.cs.meta)<br>[unity-bridge/Editor/Tools/Implementations.meta](../../../../sources/Glade-tool__glade-mcp/unity-bridge/Editor/Tools/Implementations.meta)<br>[unity-bridge/Editor/Tools/ITool.cs](../../../../sources/Glade-tool__glade-mcp/unity-bridge/Editor/Tools/ITool.cs)<br>[unity-bridge/Editor/Tools/ITool.cs.meta](../../../../sources/Glade-tool__glade-mcp/unity-bridge/Editor/Tools/ITool.cs.meta)<br>[unity-bridge/Editor/Tools/Registrars.meta](../../../../sources/Glade-tool__glade-mcp/unity-bridge/Editor/Tools/Registrars.meta)<br>[unity-bridge/Editor/Tools/Templates.meta](../../../../sources/Glade-tool__glade-mcp/unity-bridge/Editor/Tools/Templates.meta) |
| mcp | 200 | [mcp-server/.gitignore](../../../../sources/Glade-tool__glade-mcp/mcp-server/.gitignore)<br>[mcp-server/.mcp.json](../../../../sources/Glade-tool__glade-mcp/mcp-server/.mcp.json)<br>[mcp-server/.python-version](../../../../sources/Glade-tool__glade-mcp/mcp-server/.python-version)<br>[mcp-server/CHANGELOG.md](../../../../sources/Glade-tool__glade-mcp/mcp-server/CHANGELOG.md)<br>[mcp-server/CONTRIBUTING.md](../../../../sources/Glade-tool__glade-mcp/mcp-server/CONTRIBUTING.md)<br>[mcp-server/LICENSE](../../../../sources/Glade-tool__glade-mcp/mcp-server/LICENSE)<br>[mcp-server/pyproject.toml](../../../../sources/Glade-tool__glade-mcp/mcp-server/pyproject.toml)<br>[mcp-server/README.md](../../../../sources/Glade-tool__glade-mcp/mcp-server/README.md) |
| retrieval | 0 | 명확하지 않음 |
| spec | 0 | 명확하지 않음 |
| eval | 87 | [unity-bridge/Tests.meta](../../../../sources/Glade-tool__glade-mcp/unity-bridge/Tests.meta)<br>[unity-bridge/Tests/AssetPipelineGuard_UrlAllowlist.cs](../../../../sources/Glade-tool__glade-mcp/unity-bridge/Tests/AssetPipelineGuard_UrlAllowlist.cs)<br>[unity-bridge/Tests/AssetPipelineGuard_UrlAllowlist.cs.meta](../../../../sources/Glade-tool__glade-mcp/unity-bridge/Tests/AssetPipelineGuard_UrlAllowlist.cs.meta)<br>[unity-bridge/Tests/BridgeDiagnostics_RingBuffer.cs](../../../../sources/Glade-tool__glade-mcp/unity-bridge/Tests/BridgeDiagnostics_RingBuffer.cs)<br>[unity-bridge/Tests/BridgeDiagnostics_RingBuffer.cs.meta](../../../../sources/Glade-tool__glade-mcp/unity-bridge/Tests/BridgeDiagnostics_RingBuffer.cs.meta)<br>[unity-bridge/Tests/CreateScriptTool_SessionSafety.cs](../../../../sources/Glade-tool__glade-mcp/unity-bridge/Tests/CreateScriptTool_SessionSafety.cs)<br>[unity-bridge/Tests/CreateScriptTool_SessionSafety.cs.meta](../../../../sources/Glade-tool__glade-mcp/unity-bridge/Tests/CreateScriptTool_SessionSafety.cs.meta)<br>[unity-bridge/Tests/CreateThirdPersonControllerTool_Tests.cs](../../../../sources/Glade-tool__glade-mcp/unity-bridge/Tests/CreateThirdPersonControllerTool_Tests.cs) |
| security | 6 | [unity-bridge/Tests/EditorAsyncDownload_Policy.cs](../../../../sources/Glade-tool__glade-mcp/unity-bridge/Tests/EditorAsyncDownload_Policy.cs)<br>[unity-bridge/Tests/EditorAsyncDownload_Policy.cs.meta](../../../../sources/Glade-tool__glade-mcp/unity-bridge/Tests/EditorAsyncDownload_Policy.cs.meta)<br>[godot-bridge/tests/unit/test_asset_pipeline_guard.gd](../../../../sources/Glade-tool__glade-mcp/godot-bridge/tests/unit/test_asset_pipeline_guard.gd)<br>[godot-bridge/addons/com.gladekit.mcp-bridge/services/asset_pipeline_guard.gd](../../../../sources/Glade-tool__glade-mcp/godot-bridge/addons/com.gladekit.mcp-bridge/services/asset_pipeline_guard.gd)<br>[godot-bridge/addons/com.gladekit.mcp-bridge/services/demo_assets_guard.gd](../../../../sources/Glade-tool__glade-mcp/godot-bridge/addons/com.gladekit.mcp-bridge/services/demo_assets_guard.gd)<br>[godot-bridge/addons/com.gladekit.mcp-bridge/services/read_only_guard.gd](../../../../sources/Glade-tool__glade-mcp/godot-bridge/addons/com.gladekit.mcp-bridge/services/read_only_guard.gd) |
| ci | 1 | [.github/workflows/release.yml](../../../../sources/Glade-tool__glade-mcp/.github/workflows/release.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 6 | [README.md](../../../../sources/Glade-tool__glade-mcp/README.md)<br>[mcp-server/README.md](../../../../sources/Glade-tool__glade-mcp/mcp-server/README.md)<br>[mcp-server/eval/README.md](../../../../sources/Glade-tool__glade-mcp/mcp-server/eval/README.md)<br>[godot-bridge/README.md](../../../../sources/Glade-tool__glade-mcp/godot-bridge/README.md)<br>[godot-bridge/tests/README.md](../../../../sources/Glade-tool__glade-mcp/godot-bridge/tests/README.md)<br>[assets/README.md](../../../../sources/Glade-tool__glade-mcp/assets/README.md) |
| config | 3 | [unity-bridge/package.json](../../../../sources/Glade-tool__glade-mcp/unity-bridge/package.json)<br>[mcp-server/pyproject.toml](../../../../sources/Glade-tool__glade-mcp/mcp-server/pyproject.toml)<br>[mcp-server/uv.lock](../../../../sources/Glade-tool__glade-mcp/mcp-server/uv.lock) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 87 | [unity-bridge/Tests.meta](../../../../sources/Glade-tool__glade-mcp/unity-bridge/Tests.meta)<br>[unity-bridge/Tests/AssetPipelineGuard_UrlAllowlist.cs](../../../../sources/Glade-tool__glade-mcp/unity-bridge/Tests/AssetPipelineGuard_UrlAllowlist.cs)<br>[unity-bridge/Tests/AssetPipelineGuard_UrlAllowlist.cs.meta](../../../../sources/Glade-tool__glade-mcp/unity-bridge/Tests/AssetPipelineGuard_UrlAllowlist.cs.meta)<br>[unity-bridge/Tests/BridgeDiagnostics_RingBuffer.cs](../../../../sources/Glade-tool__glade-mcp/unity-bridge/Tests/BridgeDiagnostics_RingBuffer.cs)<br>[unity-bridge/Tests/BridgeDiagnostics_RingBuffer.cs.meta](../../../../sources/Glade-tool__glade-mcp/unity-bridge/Tests/BridgeDiagnostics_RingBuffer.cs.meta)<br>[unity-bridge/Tests/CreateScriptTool_SessionSafety.cs](../../../../sources/Glade-tool__glade-mcp/unity-bridge/Tests/CreateScriptTool_SessionSafety.cs) |
| CI workflow | 1 | [.github/workflows/release.yml](../../../../sources/Glade-tool__glade-mcp/.github/workflows/release.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 6 | [unity-bridge/Tests/EditorAsyncDownload_Policy.cs](../../../../sources/Glade-tool__glade-mcp/unity-bridge/Tests/EditorAsyncDownload_Policy.cs)<br>[unity-bridge/Tests/EditorAsyncDownload_Policy.cs.meta](../../../../sources/Glade-tool__glade-mcp/unity-bridge/Tests/EditorAsyncDownload_Policy.cs.meta)<br>[godot-bridge/tests/unit/test_asset_pipeline_guard.gd](../../../../sources/Glade-tool__glade-mcp/godot-bridge/tests/unit/test_asset_pipeline_guard.gd)<br>[godot-bridge/addons/com.gladekit.mcp-bridge/services/asset_pipeline_guard.gd](../../../../sources/Glade-tool__glade-mcp/godot-bridge/addons/com.gladekit.mcp-bridge/services/asset_pipeline_guard.gd)<br>[godot-bridge/addons/com.gladekit.mcp-bridge/services/demo_assets_guard.gd](../../../../sources/Glade-tool__glade-mcp/godot-bridge/addons/com.gladekit.mcp-bridge/services/demo_assets_guard.gd)<br>[godot-bridge/addons/com.gladekit.mcp-bridge/services/read_only_guard.gd](../../../../sources/Glade-tool__glade-mcp/godot-bridge/addons/com.gladekit.mcp-bridge/services/read_only_guard.gd) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | agent instruction 파일이 명확하지 않음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `mcp-server/.gitignore`, `mcp-server/.mcp.json`, `mcp-server/.python-version`.
2. entrypoint를 따라 실행 흐름 확인: `mcp-server/src/gladekit_mcp/__main__.py`, `mcp-server/src/gladekit_mcp/server.py`, `mcp-server/eval/__main__.py`.
3. agent/tool runtime 매핑: `unity-bridge/Editor/Tools.meta`, `unity-bridge/Editor/Tools/IAsyncTool.cs`, `unity-bridge/Editor/Tools/IAsyncTool.cs.meta`.
4. test/eval 파일로 동작 검증: `unity-bridge/Tests.meta`, `unity-bridge/Tests/AssetPipelineGuard_UrlAllowlist.cs`, `unity-bridge/Tests/AssetPipelineGuard_UrlAllowlist.cs.meta`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Connect any MCP compatible AI client Claude Code, Cursor, Windsurf to Unity or Godot. 235+ granular tools, a Unity aware. 핵심 구조 신호는 C#, README.md, LICENSE, ci, docs이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
