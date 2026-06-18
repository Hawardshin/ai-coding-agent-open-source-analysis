# hi-godot/godot-ai Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Production-grade MCP server and AI tools for the Godot engine. A Snap to install. Totally free and fun.

## 요약

- 조사 단위: `sources/hi-godot__godot-ai` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 560 files, 40 directories, depth score 115, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=tests/integration/test_mcp_resources.py, tests/integration/test_mcp_tools.py, plugin/addons/godot_ai/mcp_dock.gd이고, 의존성 단서는 mcp, pydantic, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | hi-godot/godot-ai |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | GDScript |
| Stars | 596 |
| Forks | 38 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/hi-godot__godot-ai](../../../../sources/hi-godot__godot-ai) |
| Existing report | [reports/global-trending/repositories/hi-godot__godot-ai.md](../../../global-trending/repositories/hi-godot__godot-ai.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 560 / 40 |
| Max observed depth | 6 |
| Top directories | .claude, .github, docs, plugin, script, src, test_project, tests |
| Top extensions | .gd: 168, .uid: 164, .py: 162, (none): 24, .md: 16, .png: 7, .yml: 5, .tscn: 4, .gif: 2, .sh: 2, .cfg: 1, .godot: 1 |
| Source patterns | cli-first, api/server, agent/tool runtime, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 46 |
| src | source boundary | 31 |
| docs | documentation surface | 24 |
| .github | ci surface | 1 |
| plugin | top-level component | 1 |
| script | top-level component | 1 |
| test_project | validation surface | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | pyproject.toml | godot-ai | godot-ai |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | mcp |
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
| mcp | [tests/integration/test_mcp_resources.py](../../../../sources/hi-godot__godot-ai/tests/integration/test_mcp_resources.py) | mcp signal |
| mcp | [tests/integration/test_mcp_tools.py](../../../../sources/hi-godot__godot-ai/tests/integration/test_mcp_tools.py) | mcp signal |
| mcp | [plugin/addons/godot_ai/mcp_dock.gd](../../../../sources/hi-godot__godot-ai/plugin/addons/godot_ai/mcp_dock.gd) | mcp signal |
| mcp | [plugin/addons/godot_ai/mcp_dock.gd.uid](../../../../sources/hi-godot__godot-ai/plugin/addons/godot_ai/mcp_dock.gd.uid) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/hi-godot__godot-ai/AGENTS.md) | agentRuntime signal |
| agentRuntime | [src/godot_ai/tools/__init__.py](../../../../sources/hi-godot__godot-ai/src/godot_ai/tools/__init__.py) | agentRuntime signal |
| agentRuntime | [src/godot_ai/tools/_meta_tool.py](../../../../sources/hi-godot__godot-ai/src/godot_ai/tools/_meta_tool.py) | agentRuntime signal |
| agentRuntime | [src/godot_ai/tools/_pagination.py](../../../../sources/hi-godot__godot-ai/src/godot_ai/tools/_pagination.py) | agentRuntime signal |
| entrypoints | [test_project/main.tscn](../../../../sources/hi-godot__godot-ai/test_project/main.tscn) | entrypoints signal |
| entrypoints | [src/godot_ai/__main__.py](../../../../sources/hi-godot__godot-ai/src/godot_ai/__main__.py) | entrypoints signal |
| entrypoints | [src/godot_ai/server.py](../../../../sources/hi-godot__godot-ai/src/godot_ai/server.py) | entrypoints signal |
| instruction | [CLAUDE.md](../../../../sources/hi-godot__godot-ai/CLAUDE.md) | instruction signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 3 | [test_project/main.tscn](../../../../sources/hi-godot__godot-ai/test_project/main.tscn)<br>[src/godot_ai/__main__.py](../../../../sources/hi-godot__godot-ai/src/godot_ai/__main__.py)<br>[src/godot_ai/server.py](../../../../sources/hi-godot__godot-ai/src/godot_ai/server.py) |
| agentRuntime | 34 | [AGENTS.md](../../../../sources/hi-godot__godot-ai/AGENTS.md)<br>[src/godot_ai/tools/__init__.py](../../../../sources/hi-godot__godot-ai/src/godot_ai/tools/__init__.py)<br>[src/godot_ai/tools/_meta_tool.py](../../../../sources/hi-godot__godot-ai/src/godot_ai/tools/_meta_tool.py)<br>[src/godot_ai/tools/_pagination.py](../../../../sources/hi-godot__godot-ai/src/godot_ai/tools/_pagination.py)<br>[src/godot_ai/tools/animation.py](../../../../sources/hi-godot__godot-ai/src/godot_ai/tools/animation.py)<br>[src/godot_ai/tools/api.py](../../../../sources/hi-godot__godot-ai/src/godot_ai/tools/api.py)<br>[src/godot_ai/tools/audio.py](../../../../sources/hi-godot__godot-ai/src/godot_ai/tools/audio.py)<br>[src/godot_ai/tools/autoload.py](../../../../sources/hi-godot__godot-ai/src/godot_ai/tools/autoload.py) |
| mcp | 14 | [tests/integration/test_mcp_resources.py](../../../../sources/hi-godot__godot-ai/tests/integration/test_mcp_resources.py)<br>[tests/integration/test_mcp_tools.py](../../../../sources/hi-godot__godot-ai/tests/integration/test_mcp_tools.py)<br>[plugin/addons/godot_ai/mcp_dock.gd](../../../../sources/hi-godot__godot-ai/plugin/addons/godot_ai/mcp_dock.gd)<br>[plugin/addons/godot_ai/mcp_dock.gd.uid](../../../../sources/hi-godot__godot-ai/plugin/addons/godot_ai/mcp_dock.gd.uid)<br>[plugin/addons/godot_ai/utils/mcp_adoption_label.gd](../../../../sources/hi-godot__godot-ai/plugin/addons/godot_ai/utils/mcp_adoption_label.gd)<br>[plugin/addons/godot_ai/utils/mcp_adoption_label.gd.uid](../../../../sources/hi-godot__godot-ai/plugin/addons/godot_ai/utils/mcp_adoption_label.gd.uid)<br>[plugin/addons/godot_ai/utils/mcp_client_refresh_state.gd](../../../../sources/hi-godot__godot-ai/plugin/addons/godot_ai/utils/mcp_client_refresh_state.gd)<br>[plugin/addons/godot_ai/utils/mcp_client_refresh_state.gd.uid](../../../../sources/hi-godot__godot-ai/plugin/addons/godot_ai/utils/mcp_client_refresh_state.gd.uid) |
| retrieval | 0 | not obvious |
| spec | 1 | [docs/plugin-architecture.md](../../../../sources/hi-godot__godot-ai/docs/plugin-architecture.md) |
| eval | 192 | [tests/__init__.py](../../../../sources/hi-godot__godot-ai/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/hi-godot__godot-ai/tests/conftest.py)<br>[tests/unit/__init__.py](../../../../sources/hi-godot__godot-ai/tests/unit/__init__.py)<br>[tests/unit/_gdscript_text.py](../../../../sources/hi-godot__godot-ai/tests/unit/_gdscript_text.py)<br>[tests/unit/conftest.py](../../../../sources/hi-godot__godot-ai/tests/unit/conftest.py)<br>[tests/unit/test_asgi_session_diagnostics.py](../../../../sources/hi-godot__godot-ai/tests/unit/test_asgi_session_diagnostics.py)<br>[tests/unit/test_audit_data_loss_safeguards.py](../../../../sources/hi-godot__godot-ai/tests/unit/test_audit_data_loss_safeguards.py)<br>[tests/unit/test_camera_current_contract.py](../../../../sources/hi-godot__godot-ai/tests/unit/test_camera_current_contract.py) |
| security | 4 | [tests/unit/test_audit_data_loss_safeguards.py](../../../../sources/hi-godot__godot-ai/tests/unit/test_audit_data_loss_safeguards.py)<br>[tests/unit/test_origin_guard.py](../../../../sources/hi-godot__godot-ai/tests/unit/test_origin_guard.py)<br>[tests/unit/test_path_traversal_guard.py](../../../../sources/hi-godot__godot-ai/tests/unit/test_path_traversal_guard.py)<br>[src/godot_ai/transport/origin_guard.py](../../../../sources/hi-godot__godot-ai/src/godot_ai/transport/origin_guard.py) |
| ci | 4 | [.github/workflows/bump-and-release.yml](../../../../sources/hi-godot__godot-ai/.github/workflows/bump-and-release.yml)<br>[.github/workflows/ci.yml](../../../../sources/hi-godot__godot-ai/.github/workflows/ci.yml)<br>[.github/workflows/close-issues-on-beta-merge.yml](../../../../sources/hi-godot__godot-ai/.github/workflows/close-issues-on-beta-merge.yml)<br>[.github/workflows/release.yml](../../../../sources/hi-godot__godot-ai/.github/workflows/release.yml) |
| container | 0 | not obvious |
| instruction | 2 | [AGENTS.md](../../../../sources/hi-godot__godot-ai/AGENTS.md)<br>[CLAUDE.md](../../../../sources/hi-godot__godot-ai/CLAUDE.md) |
| docs | 22 | [README.md](../../../../sources/hi-godot__godot-ai/README.md)<br>[plugin/addons/godot_ai/README.md](../../../../sources/hi-godot__godot-ai/plugin/addons/godot_ai/README.md)<br>[docs/CONTRIBUTING.md](../../../../sources/hi-godot__godot-ai/docs/CONTRIBUTING.md)<br>[docs/friction-log.md](../../../../sources/hi-godot__godot-ai/docs/friction-log.md)<br>[docs/hero.png](../../../../sources/hi-godot__godot-ai/docs/hero.png)<br>[docs/icon.png](../../../../sources/hi-godot__godot-ai/docs/icon.png)<br>[docs/implementation-plan.md](../../../../sources/hi-godot__godot-ai/docs/implementation-plan.md)<br>[docs/packaging-distribution.md](../../../../sources/hi-godot__godot-ai/docs/packaging-distribution.md) |
| config | 2 | [pyproject.toml](../../../../sources/hi-godot__godot-ai/pyproject.toml)<br>[uv.lock](../../../../sources/hi-godot__godot-ai/uv.lock) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 192 | [tests/__init__.py](../../../../sources/hi-godot__godot-ai/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/hi-godot__godot-ai/tests/conftest.py)<br>[tests/unit/__init__.py](../../../../sources/hi-godot__godot-ai/tests/unit/__init__.py)<br>[tests/unit/_gdscript_text.py](../../../../sources/hi-godot__godot-ai/tests/unit/_gdscript_text.py)<br>[tests/unit/conftest.py](../../../../sources/hi-godot__godot-ai/tests/unit/conftest.py)<br>[tests/unit/test_asgi_session_diagnostics.py](../../../../sources/hi-godot__godot-ai/tests/unit/test_asgi_session_diagnostics.py) |
| CI workflows | 4 | [.github/workflows/bump-and-release.yml](../../../../sources/hi-godot__godot-ai/.github/workflows/bump-and-release.yml)<br>[.github/workflows/ci.yml](../../../../sources/hi-godot__godot-ai/.github/workflows/ci.yml)<br>[.github/workflows/close-issues-on-beta-merge.yml](../../../../sources/hi-godot__godot-ai/.github/workflows/close-issues-on-beta-merge.yml)<br>[.github/workflows/release.yml](../../../../sources/hi-godot__godot-ai/.github/workflows/release.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 4 | [tests/unit/test_audit_data_loss_safeguards.py](../../../../sources/hi-godot__godot-ai/tests/unit/test_audit_data_loss_safeguards.py)<br>[tests/unit/test_origin_guard.py](../../../../sources/hi-godot__godot-ai/tests/unit/test_origin_guard.py)<br>[tests/unit/test_path_traversal_guard.py](../../../../sources/hi-godot__godot-ai/tests/unit/test_path_traversal_guard.py)<br>[src/godot_ai/transport/origin_guard.py](../../../../sources/hi-godot__godot-ai/src/godot_ai/transport/origin_guard.py) |
| Agent instructions | 2 | [AGENTS.md](../../../../sources/hi-godot__godot-ai/AGENTS.md)<br>[CLAUDE.md](../../../../sources/hi-godot__godot-ai/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `tests/integration/test_mcp_resources.py`, `tests/integration/test_mcp_tools.py`, `plugin/addons/godot_ai/mcp_dock.gd`.
2. Trace execution through entrypoints: `test_project/main.tscn`, `src/godot_ai/__main__.py`, `src/godot_ai/server.py`.
3. Map agent/tool runtime through: `AGENTS.md`, `src/godot_ai/tools/__init__.py`, `src/godot_ai/tools/_meta_tool.py`.
4. Verify behavior through test/eval files: `tests/__init__.py`, `tests/conftest.py`, `tests/unit/__init__.py`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Production grade MCP server and AI tools for the Godot engine. A Snap to install. Totally free and fun.. 핵심 구조 신호는 GDScript, pyproject.toml, README.md, AGENTS.md, CLAUDE.md, LICENSE이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
