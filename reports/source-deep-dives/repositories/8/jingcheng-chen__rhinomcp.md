# jingcheng-chen/rhinomcp 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

RhinoMCP connects Rhino 3D to AI Agent through the Model Context Protocol (MCP)

## 요약

- 조사 단위: `sources/jingcheng-chen__rhinomcp` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 232 files, 23 directories, depth score 95, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=.github/workflows/mcp-server-publish.yml이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | jingcheng-chen/rhinomcp |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 724 |
| Forks | 76 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/jingcheng-chen__rhinomcp](../../../../sources/jingcheng-chen__rhinomcp) |
| 기존 보고서 | [reports/global-trending/repositories/jingcheng-chen__rhinomcp.md](../../../global-trending/repositories/jingcheng-chen__rhinomcp.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 232 / 23 |
| 관측 최대 깊이 | 5 |
| 상위 디렉터리 | .github, contracts, docs, plugin, server |
| 상위 확장자 | .py: 77, .json: 76, .cs: 51, .md: 5, .jpg: 4, .yml: 4, (none): 4, .sh: 2, .txt: 2, .csproj: 1, .ico: 1, .ini: 1 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, eval/test harness |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| server | source boundary | 50 |
| docs | documentation surface | 9 |
| .github | ci surface | 1 |
| contracts | top-level component | 1 |
| plugin | top-level component | 1 |


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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 2 | [server/main.py](../../../../sources/jingcheng-chen__rhinomcp/server/main.py)<br>[server/src/rhinomcp/server.py](../../../../sources/jingcheng-chen__rhinomcp/server/src/rhinomcp/server.py) |
| agentRuntime | 36 | [server/src/rhinomcp/tools/_grasshopper_common.py](../../../../sources/jingcheng-chen__rhinomcp/server/src/rhinomcp/tools/_grasshopper_common.py)<br>[server/src/rhinomcp/tools/advanced_geometry.py](../../../../sources/jingcheng-chen__rhinomcp/server/src/rhinomcp/tools/advanced_geometry.py)<br>[server/src/rhinomcp/tools/analyze_objects.py](../../../../sources/jingcheng-chen__rhinomcp/server/src/rhinomcp/tools/analyze_objects.py)<br>[server/src/rhinomcp/tools/boolean_operations.py](../../../../sources/jingcheng-chen__rhinomcp/server/src/rhinomcp/tools/boolean_operations.py)<br>[server/src/rhinomcp/tools/capture_viewport.py](../../../../sources/jingcheng-chen__rhinomcp/server/src/rhinomcp/tools/capture_viewport.py)<br>[server/src/rhinomcp/tools/create_layer.py](../../../../sources/jingcheng-chen__rhinomcp/server/src/rhinomcp/tools/create_layer.py)<br>[server/src/rhinomcp/tools/create_object.py](../../../../sources/jingcheng-chen__rhinomcp/server/src/rhinomcp/tools/create_object.py)<br>[server/src/rhinomcp/tools/create_objects.py](../../../../sources/jingcheng-chen__rhinomcp/server/src/rhinomcp/tools/create_objects.py) |
| mcp | 1 | [.github/workflows/mcp-server-publish.yml](../../../../sources/jingcheng-chen__rhinomcp/.github/workflows/mcp-server-publish.yml) |
| retrieval | 5 | [server/src/rhinomcp/tools/grasshopper_graph.py](../../../../sources/jingcheng-chen__rhinomcp/server/src/rhinomcp/tools/grasshopper_graph.py)<br>[contracts/commands/gh_build_graph.json](../../../../sources/jingcheng-chen__rhinomcp/contracts/commands/gh_build_graph.json)<br>[contracts/commands/gh_clear_graph.json](../../../../sources/jingcheng-chen__rhinomcp/contracts/commands/gh_clear_graph.json)<br>[contracts/commands/gh_get_graph.json](../../../../sources/jingcheng-chen__rhinomcp/contracts/commands/gh_get_graph.json)<br>[contracts/commands/gh_mutate_graph.json](../../../../sources/jingcheng-chen__rhinomcp/contracts/commands/gh_mutate_graph.json) |
| spec | 0 | 명확하지 않음 |
| eval | 8 | [server/tests/__init__.py](../../../../sources/jingcheng-chen__rhinomcp/server/tests/__init__.py)<br>[server/tests/mock_rhino_server.py](../../../../sources/jingcheng-chen__rhinomcp/server/tests/mock_rhino_server.py)<br>[server/tests/test_connection.py](../../../../sources/jingcheng-chen__rhinomcp/server/tests/test_connection.py)<br>[server/tests/test_curve_operations.py](../../../../sources/jingcheng-chen__rhinomcp/server/tests/test_curve_operations.py)<br>[server/tests/test_integration.py](../../../../sources/jingcheng-chen__rhinomcp/server/tests/test_integration.py)<br>[server/tests/test_tools.py](../../../../sources/jingcheng-chen__rhinomcp/server/tests/test_tools.py)<br>[server/tests/test_validation.py](../../../../sources/jingcheng-chen__rhinomcp/server/tests/test_validation.py)<br>[contracts/test_schemas.py](../../../../sources/jingcheng-chen__rhinomcp/contracts/test_schemas.py) |
| security | 0 | 명확하지 않음 |
| ci | 3 | [.github/workflows/ci.yml](../../../../sources/jingcheng-chen__rhinomcp/.github/workflows/ci.yml)<br>[.github/workflows/mcp-server-publish.yml](../../../../sources/jingcheng-chen__rhinomcp/.github/workflows/mcp-server-publish.yml)<br>[.github/workflows/rhino-plugin-publish.yml](../../../../sources/jingcheng-chen__rhinomcp/.github/workflows/rhino-plugin-publish.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 12 | [README.md](../../../../sources/jingcheng-chen__rhinomcp/README.md)<br>[README.zh-CN.md](../../../../sources/jingcheng-chen__rhinomcp/README.zh-CN.md)<br>[server/README.md](../../../../sources/jingcheng-chen__rhinomcp/server/README.md)<br>[docs/IMPLEMENTATION.md](../../../../sources/jingcheng-chen__rhinomcp/docs/IMPLEMENTATION.md)<br>[docs/demo_chats/create_6x6x6_boxes.txt](../../../../sources/jingcheng-chen__rhinomcp/docs/demo_chats/create_6x6x6_boxes.txt)<br>[docs/demo_chats/create_rhinoceros_lego_blocks.txt](../../../../sources/jingcheng-chen__rhinomcp/docs/demo_chats/create_rhinoceros_lego_blocks.txt)<br>[docs/assets/claude_example.jpg](../../../../sources/jingcheng-chen__rhinomcp/docs/assets/claude_example.jpg)<br>[docs/assets/demo1.jpg](../../../../sources/jingcheng-chen__rhinomcp/docs/assets/demo1.jpg) |
| config | 2 | [server/pyproject.toml](../../../../sources/jingcheng-chen__rhinomcp/server/pyproject.toml)<br>[server/uv.lock](../../../../sources/jingcheng-chen__rhinomcp/server/uv.lock) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 8 | [server/tests/__init__.py](../../../../sources/jingcheng-chen__rhinomcp/server/tests/__init__.py)<br>[server/tests/mock_rhino_server.py](../../../../sources/jingcheng-chen__rhinomcp/server/tests/mock_rhino_server.py)<br>[server/tests/test_connection.py](../../../../sources/jingcheng-chen__rhinomcp/server/tests/test_connection.py)<br>[server/tests/test_curve_operations.py](../../../../sources/jingcheng-chen__rhinomcp/server/tests/test_curve_operations.py)<br>[server/tests/test_integration.py](../../../../sources/jingcheng-chen__rhinomcp/server/tests/test_integration.py)<br>[server/tests/test_tools.py](../../../../sources/jingcheng-chen__rhinomcp/server/tests/test_tools.py) |
| CI workflow | 3 | [.github/workflows/ci.yml](../../../../sources/jingcheng-chen__rhinomcp/.github/workflows/ci.yml)<br>[.github/workflows/mcp-server-publish.yml](../../../../sources/jingcheng-chen__rhinomcp/.github/workflows/mcp-server-publish.yml)<br>[.github/workflows/rhino-plugin-publish.yml](../../../../sources/jingcheng-chen__rhinomcp/.github/workflows/rhino-plugin-publish.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음; agent instruction 파일이 명확하지 않음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `.github/workflows/mcp-server-publish.yml`, `server/src/rhinomcp/tools/_grasshopper_common.py`, `server/src/rhinomcp/tools/advanced_geometry.py`.
2. entrypoint를 따라 실행 흐름 확인: `server/main.py`, `server/src/rhinomcp/server.py`.
3. agent/tool runtime 매핑: `server/src/rhinomcp/tools/_grasshopper_common.py`, `server/src/rhinomcp/tools/advanced_geometry.py`, `server/src/rhinomcp/tools/analyze_objects.py`.
4. retrieval/memory/indexing 확인: `server/src/rhinomcp/tools/grasshopper_graph.py`, `contracts/commands/gh_build_graph.json`, `contracts/commands/gh_clear_graph.json`.
5. test/eval 파일로 동작 검증: `server/tests/__init__.py`, `server/tests/mock_rhino_server.py`, `server/tests/test_connection.py`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 RhinoMCP connects Rhino 3D to AI Agent through the Model Context Protocol MCP. 핵심 구조 신호는 Python, README.md, LICENSE, ci, docs, spec-artifacts이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
