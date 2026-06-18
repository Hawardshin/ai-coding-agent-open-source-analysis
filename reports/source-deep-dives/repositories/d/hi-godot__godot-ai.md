# hi-godot/godot-ai 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

Production-grade MCP server and AI tools for the Godot engine. A Snap to install. Totally free and fun.

## 요약

- 조사 단위: `sources/hi-godot__godot-ai` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 560 files, 40 directories, depth score 109, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=tests/integration/test_mcp_resources.py, tests/integration/test_mcp_tools.py, plugin/addons/godot_ai/mcp_dock.gd이고, 의존성 단서는 mcp, pydantic, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | hi-godot/godot-ai |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | GDScript |
| Stars | 596 |
| Forks | 38 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/hi-godot__godot-ai](../../../../sources/hi-godot__godot-ai) |
| 기존 보고서 | [reports/global-trending/repositories/hi-godot__godot-ai.md](../../../global-trending/repositories/hi-godot__godot-ai.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 560 / 40 |
| 관측 최대 깊이 | 6 |
| 상위 디렉터리 | .claude, .github, docs, plugin, script, src, test_project, tests |
| 상위 확장자 | .gd: 168, .uid: 164, .py: 162, (none): 24, .md: 16, .png: 7, .yml: 5, .tscn: 4, .gif: 2, .sh: 2, .cfg: 1, .godot: 1 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 46 |
| src | source boundary | 31 |
| docs | documentation surface | 24 |
| .github | ci surface | 1 |
| plugin | top-level component | 1 |
| script | top-level component | 1 |
| test_project | validation surface | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | pyproject.toml | godot-ai | godot-ai |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | mcp |
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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 3 | [test_project/main.tscn](../../../../sources/hi-godot__godot-ai/test_project/main.tscn)<br>[src/godot_ai/__main__.py](../../../../sources/hi-godot__godot-ai/src/godot_ai/__main__.py)<br>[src/godot_ai/server.py](../../../../sources/hi-godot__godot-ai/src/godot_ai/server.py) |
| agentRuntime | 34 | [AGENTS.md](../../../../sources/hi-godot__godot-ai/AGENTS.md)<br>[src/godot_ai/tools/__init__.py](../../../../sources/hi-godot__godot-ai/src/godot_ai/tools/__init__.py)<br>[src/godot_ai/tools/_meta_tool.py](../../../../sources/hi-godot__godot-ai/src/godot_ai/tools/_meta_tool.py)<br>[src/godot_ai/tools/_pagination.py](../../../../sources/hi-godot__godot-ai/src/godot_ai/tools/_pagination.py)<br>[src/godot_ai/tools/animation.py](../../../../sources/hi-godot__godot-ai/src/godot_ai/tools/animation.py)<br>[src/godot_ai/tools/api.py](../../../../sources/hi-godot__godot-ai/src/godot_ai/tools/api.py)<br>[src/godot_ai/tools/audio.py](../../../../sources/hi-godot__godot-ai/src/godot_ai/tools/audio.py)<br>[src/godot_ai/tools/autoload.py](../../../../sources/hi-godot__godot-ai/src/godot_ai/tools/autoload.py) |
| mcp | 14 | [tests/integration/test_mcp_resources.py](../../../../sources/hi-godot__godot-ai/tests/integration/test_mcp_resources.py)<br>[tests/integration/test_mcp_tools.py](../../../../sources/hi-godot__godot-ai/tests/integration/test_mcp_tools.py)<br>[plugin/addons/godot_ai/mcp_dock.gd](../../../../sources/hi-godot__godot-ai/plugin/addons/godot_ai/mcp_dock.gd)<br>[plugin/addons/godot_ai/mcp_dock.gd.uid](../../../../sources/hi-godot__godot-ai/plugin/addons/godot_ai/mcp_dock.gd.uid)<br>[plugin/addons/godot_ai/utils/mcp_adoption_label.gd](../../../../sources/hi-godot__godot-ai/plugin/addons/godot_ai/utils/mcp_adoption_label.gd)<br>[plugin/addons/godot_ai/utils/mcp_adoption_label.gd.uid](../../../../sources/hi-godot__godot-ai/plugin/addons/godot_ai/utils/mcp_adoption_label.gd.uid)<br>[plugin/addons/godot_ai/utils/mcp_client_refresh_state.gd](../../../../sources/hi-godot__godot-ai/plugin/addons/godot_ai/utils/mcp_client_refresh_state.gd)<br>[plugin/addons/godot_ai/utils/mcp_client_refresh_state.gd.uid](../../../../sources/hi-godot__godot-ai/plugin/addons/godot_ai/utils/mcp_client_refresh_state.gd.uid) |
| retrieval | 0 | 명확하지 않음 |
| spec | 1 | [docs/plugin-architecture.md](../../../../sources/hi-godot__godot-ai/docs/plugin-architecture.md) |
| eval | 192 | [tests/__init__.py](../../../../sources/hi-godot__godot-ai/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/hi-godot__godot-ai/tests/conftest.py)<br>[tests/unit/__init__.py](../../../../sources/hi-godot__godot-ai/tests/unit/__init__.py)<br>[tests/unit/_gdscript_text.py](../../../../sources/hi-godot__godot-ai/tests/unit/_gdscript_text.py)<br>[tests/unit/conftest.py](../../../../sources/hi-godot__godot-ai/tests/unit/conftest.py)<br>[tests/unit/test_asgi_session_diagnostics.py](../../../../sources/hi-godot__godot-ai/tests/unit/test_asgi_session_diagnostics.py)<br>[tests/unit/test_audit_data_loss_safeguards.py](../../../../sources/hi-godot__godot-ai/tests/unit/test_audit_data_loss_safeguards.py)<br>[tests/unit/test_camera_current_contract.py](../../../../sources/hi-godot__godot-ai/tests/unit/test_camera_current_contract.py) |
| security | 4 | [tests/unit/test_audit_data_loss_safeguards.py](../../../../sources/hi-godot__godot-ai/tests/unit/test_audit_data_loss_safeguards.py)<br>[tests/unit/test_origin_guard.py](../../../../sources/hi-godot__godot-ai/tests/unit/test_origin_guard.py)<br>[tests/unit/test_path_traversal_guard.py](../../../../sources/hi-godot__godot-ai/tests/unit/test_path_traversal_guard.py)<br>[src/godot_ai/transport/origin_guard.py](../../../../sources/hi-godot__godot-ai/src/godot_ai/transport/origin_guard.py) |
| ci | 4 | [.github/workflows/bump-and-release.yml](../../../../sources/hi-godot__godot-ai/.github/workflows/bump-and-release.yml)<br>[.github/workflows/ci.yml](../../../../sources/hi-godot__godot-ai/.github/workflows/ci.yml)<br>[.github/workflows/close-issues-on-beta-merge.yml](../../../../sources/hi-godot__godot-ai/.github/workflows/close-issues-on-beta-merge.yml)<br>[.github/workflows/release.yml](../../../../sources/hi-godot__godot-ai/.github/workflows/release.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 2 | [AGENTS.md](../../../../sources/hi-godot__godot-ai/AGENTS.md)<br>[CLAUDE.md](../../../../sources/hi-godot__godot-ai/CLAUDE.md) |
| docs | 22 | [README.md](../../../../sources/hi-godot__godot-ai/README.md)<br>[plugin/addons/godot_ai/README.md](../../../../sources/hi-godot__godot-ai/plugin/addons/godot_ai/README.md)<br>[docs/CONTRIBUTING.md](../../../../sources/hi-godot__godot-ai/docs/CONTRIBUTING.md)<br>[docs/friction-log.md](../../../../sources/hi-godot__godot-ai/docs/friction-log.md)<br>[docs/hero.png](../../../../sources/hi-godot__godot-ai/docs/hero.png)<br>[docs/icon.png](../../../../sources/hi-godot__godot-ai/docs/icon.png)<br>[docs/implementation-plan.md](../../../../sources/hi-godot__godot-ai/docs/implementation-plan.md)<br>[docs/packaging-distribution.md](../../../../sources/hi-godot__godot-ai/docs/packaging-distribution.md) |
| config | 2 | [pyproject.toml](../../../../sources/hi-godot__godot-ai/pyproject.toml)<br>[uv.lock](../../../../sources/hi-godot__godot-ai/uv.lock) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 192 | [tests/__init__.py](../../../../sources/hi-godot__godot-ai/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/hi-godot__godot-ai/tests/conftest.py)<br>[tests/unit/__init__.py](../../../../sources/hi-godot__godot-ai/tests/unit/__init__.py)<br>[tests/unit/_gdscript_text.py](../../../../sources/hi-godot__godot-ai/tests/unit/_gdscript_text.py)<br>[tests/unit/conftest.py](../../../../sources/hi-godot__godot-ai/tests/unit/conftest.py)<br>[tests/unit/test_asgi_session_diagnostics.py](../../../../sources/hi-godot__godot-ai/tests/unit/test_asgi_session_diagnostics.py) |
| CI workflow | 4 | [.github/workflows/bump-and-release.yml](../../../../sources/hi-godot__godot-ai/.github/workflows/bump-and-release.yml)<br>[.github/workflows/ci.yml](../../../../sources/hi-godot__godot-ai/.github/workflows/ci.yml)<br>[.github/workflows/close-issues-on-beta-merge.yml](../../../../sources/hi-godot__godot-ai/.github/workflows/close-issues-on-beta-merge.yml)<br>[.github/workflows/release.yml](../../../../sources/hi-godot__godot-ai/.github/workflows/release.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 4 | [tests/unit/test_audit_data_loss_safeguards.py](../../../../sources/hi-godot__godot-ai/tests/unit/test_audit_data_loss_safeguards.py)<br>[tests/unit/test_origin_guard.py](../../../../sources/hi-godot__godot-ai/tests/unit/test_origin_guard.py)<br>[tests/unit/test_path_traversal_guard.py](../../../../sources/hi-godot__godot-ai/tests/unit/test_path_traversal_guard.py)<br>[src/godot_ai/transport/origin_guard.py](../../../../sources/hi-godot__godot-ai/src/godot_ai/transport/origin_guard.py) |
| 에이전트 지시문 | 2 | [AGENTS.md](../../../../sources/hi-godot__godot-ai/AGENTS.md)<br>[CLAUDE.md](../../../../sources/hi-godot__godot-ai/CLAUDE.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `tests/integration/test_mcp_resources.py`, `tests/integration/test_mcp_tools.py`, `plugin/addons/godot_ai/mcp_dock.gd`.
2. entrypoint를 따라 실행 흐름 확인: `test_project/main.tscn`, `src/godot_ai/__main__.py`, `src/godot_ai/server.py`.
3. agent/tool runtime 매핑: `AGENTS.md`, `src/godot_ai/tools/__init__.py`, `src/godot_ai/tools/_meta_tool.py`.
4. test/eval 파일로 동작 검증: `tests/__init__.py`, `tests/conftest.py`, `tests/unit/__init__.py`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Production grade MCP server and AI tools for the Godot engine. A Snap to install. Totally free and fun.. 핵심 구조 신호는 GDScript, pyproject.toml, README.md, AGENTS.md, CLAUDE.md, LICENSE이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
