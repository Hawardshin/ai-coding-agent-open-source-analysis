# Power-Agent/PowerMCP 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

PowerMCP is an open-source collection of MCP servers for power system software like PowerWorld, PSSE and OpenDSS. These tools enable LLMs to directly interact with power system applications, facilitating intelligent coordination, simulation, and control in the energy domain.

## 요약

- 조사 단위: `sources/Power-Agent__PowerMCP` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 2,325 files, 34 directories, depth score 108, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=surge/surge_mcp.py, PyPSA/pypsa_mcp.py, PSSE/psse_mcp.py이고, 의존성 단서는 mcp, typer, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | Power-Agent/PowerMCP |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 157 |
| Forks | 49 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/Power-Agent__PowerMCP](../../../../sources/Power-Agent__PowerMCP) |
| 기존 보고서 | [reports/global-trending/repositories/Power-Agent__PowerMCP.md](../../../global-trending/repositories/Power-Agent__PowerMCP.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 2325 / 34 |
| 관측 최대 깊이 | 4 |
| 상위 디렉터리 | .github, ANDES, Egret, HOPE, LTSpice, OpenDSS, pandapower, PowerFactory, powerio, powermcp, PowerWorld, PSCAD, PSLF, PSSE, PyPSA, surge, tests |
| 상위 확장자 | .json: 2189, .py: 75, .md: 17, .txt: 13, .dss: 3, .toml: 3, .m: 2, .pwd: 2, .sav: 2, .yml: 2, (none): 2, .cntl: 1 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 13 |
| .github | ci surface | 1 |
| ANDES | top-level component | 1 |
| Egret | top-level component | 1 |
| HOPE | top-level component | 1 |
| LTSpice | top-level component | 1 |
| OpenDSS | top-level component | 1 |
| pandapower | top-level component | 1 |
| PowerFactory | top-level component | 1 |
| powerio | top-level component | 1 |
| powermcp | top-level component | 1 |
| PowerWorld | top-level component | 1 |
| PSCAD | top-level component | 1 |
| PSLF | top-level component | 1 |
| PSSE | top-level component | 1 |
| PyPSA | top-level component | 1 |
| surge | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | pyproject.toml | powermcp | powermcp |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | mcp |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | 없음 |
| developerSurface | typer |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| mcp | [surge/surge_mcp.py](../../../../sources/Power-Agent__PowerMCP/surge/surge_mcp.py) | mcp signal |
| mcp | [PyPSA/pypsa_mcp.py](../../../../sources/Power-Agent__PowerMCP/PyPSA/pypsa_mcp.py) | mcp signal |
| mcp | [PSSE/psse_mcp.py](../../../../sources/Power-Agent__PowerMCP/PSSE/psse_mcp.py) | mcp signal |
| mcp | [PSLF/pslf_mcp.py](../../../../sources/Power-Agent__PowerMCP/PSLF/pslf_mcp.py) | mcp signal |
| agentRuntime | [PSCAD/pscad_mcp/tools/app_tools.py](../../../../sources/Power-Agent__PowerMCP/PSCAD/pscad_mcp/tools/app_tools.py) | agentRuntime signal |
| agentRuntime | [PSCAD/pscad_mcp/tools/data_tools.py](../../../../sources/Power-Agent__PowerMCP/PSCAD/pscad_mcp/tools/data_tools.py) | agentRuntime signal |
| agentRuntime | [PSCAD/pscad_mcp/tools/project_tools.py](../../../../sources/Power-Agent__PowerMCP/PSCAD/pscad_mcp/tools/project_tools.py) | agentRuntime signal |
| agentRuntime | [PSCAD/pscad_mcp/tools/simset_tools.py](../../../../sources/Power-Agent__PowerMCP/PSCAD/pscad_mcp/tools/simset_tools.py) | agentRuntime signal |
| entrypoints | [PSCAD/pscad_mcp/main.py](../../../../sources/Power-Agent__PowerMCP/PSCAD/pscad_mcp/main.py) | entrypoints signal |
| entrypoints | [powermcp/__main__.py](../../../../sources/Power-Agent__PowerMCP/powermcp/__main__.py) | entrypoints signal |
| entrypoints | [OpenDSS/core/server.py](../../../../sources/Power-Agent__PowerMCP/OpenDSS/core/server.py) | entrypoints signal |
| entrypoints | [HOPE/src/hope_mcp_server/__main__.py](../../../../sources/Power-Agent__PowerMCP/HOPE/src/hope_mcp_server/__main__.py) | entrypoints signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 5 | [PSCAD/pscad_mcp/main.py](../../../../sources/Power-Agent__PowerMCP/PSCAD/pscad_mcp/main.py)<br>[powermcp/__main__.py](../../../../sources/Power-Agent__PowerMCP/powermcp/__main__.py)<br>[OpenDSS/core/server.py](../../../../sources/Power-Agent__PowerMCP/OpenDSS/core/server.py)<br>[HOPE/src/hope_mcp_server/__main__.py](../../../../sources/Power-Agent__PowerMCP/HOPE/src/hope_mcp_server/__main__.py)<br>[HOPE/src/hope_mcp_server/server.py](../../../../sources/Power-Agent__PowerMCP/HOPE/src/hope_mcp_server/server.py) |
| agentRuntime | 7 | [PSCAD/pscad_mcp/tools/app_tools.py](../../../../sources/Power-Agent__PowerMCP/PSCAD/pscad_mcp/tools/app_tools.py)<br>[PSCAD/pscad_mcp/tools/data_tools.py](../../../../sources/Power-Agent__PowerMCP/PSCAD/pscad_mcp/tools/data_tools.py)<br>[PSCAD/pscad_mcp/tools/project_tools.py](../../../../sources/Power-Agent__PowerMCP/PSCAD/pscad_mcp/tools/project_tools.py)<br>[PSCAD/pscad_mcp/tools/simset_tools.py](../../../../sources/Power-Agent__PowerMCP/PSCAD/pscad_mcp/tools/simset_tools.py)<br>[PSCAD/pscad_mcp/core/executor.py](../../../../sources/Power-Agent__PowerMCP/PSCAD/pscad_mcp/core/executor.py)<br>[powermcp/runner.py](../../../../sources/Power-Agent__PowerMCP/powermcp/runner.py)<br>[PowerFactory/Agent_DIgSILENT.py](../../../../sources/Power-Agent__PowerMCP/PowerFactory/Agent_DIgSILENT.py) |
| mcp | 27 | [surge/surge_mcp.py](../../../../sources/Power-Agent__PowerMCP/surge/surge_mcp.py)<br>[PyPSA/pypsa_mcp.py](../../../../sources/Power-Agent__PowerMCP/PyPSA/pypsa_mcp.py)<br>[PSSE/psse_mcp.py](../../../../sources/Power-Agent__PowerMCP/PSSE/psse_mcp.py)<br>[PSLF/pslf_mcp.py](../../../../sources/Power-Agent__PowerMCP/PSLF/pslf_mcp.py)<br>[PSCAD/mcp_installer.py](../../../../sources/Power-Agent__PowerMCP/PSCAD/mcp_installer.py)<br>[PSCAD/pscad_mcp/__init__.py](../../../../sources/Power-Agent__PowerMCP/PSCAD/pscad_mcp/__init__.py)<br>[PSCAD/pscad_mcp/main.py](../../../../sources/Power-Agent__PowerMCP/PSCAD/pscad_mcp/main.py)<br>[PSCAD/pscad_mcp/utils/doc_manager.py](../../../../sources/Power-Agent__PowerMCP/PSCAD/pscad_mcp/utils/doc_manager.py) |
| retrieval | 1 | [PSSE/psspy_command_json/_index.json](../../../../sources/Power-Agent__PowerMCP/PSSE/psspy_command_json/_index.json) |
| spec | 11 | [surge/requirements.txt](../../../../sources/Power-Agent__PowerMCP/surge/requirements.txt)<br>[PyPSA/requirements.txt](../../../../sources/Power-Agent__PowerMCP/PyPSA/requirements.txt)<br>[PSSE/requirements.txt](../../../../sources/Power-Agent__PowerMCP/PSSE/requirements.txt)<br>[PSLF/requirements.txt](../../../../sources/Power-Agent__PowerMCP/PSLF/requirements.txt)<br>[PowerWorld/requirements.txt](../../../../sources/Power-Agent__PowerMCP/PowerWorld/requirements.txt)<br>[PowerFactory/requirements.txt](../../../../sources/Power-Agent__PowerMCP/PowerFactory/requirements.txt)<br>[pandapower/requirements.txt](../../../../sources/Power-Agent__PowerMCP/pandapower/requirements.txt)<br>[OpenDSS/requirements.txt](../../../../sources/Power-Agent__PowerMCP/OpenDSS/requirements.txt) |
| eval | 26 | [tests/conftest.py](../../../../sources/Power-Agent__PowerMCP/tests/conftest.py)<br>[tests/test_clients.py](../../../../sources/Power-Agent__PowerMCP/tests/test_clients.py)<br>[tests/test_config.py](../../../../sources/Power-Agent__PowerMCP/tests/test_config.py)<br>[tests/test_detect.py](../../../../sources/Power-Agent__PowerMCP/tests/test_detect.py)<br>[tests/test_doctor.py](../../../../sources/Power-Agent__PowerMCP/tests/test_doctor.py)<br>[tests/test_powerio_server.py](../../../../sources/Power-Agent__PowerMCP/tests/test_powerio_server.py)<br>[tests/test_registry.py](../../../../sources/Power-Agent__PowerMCP/tests/test_registry.py)<br>[tests/test_runner.py](../../../../sources/Power-Agent__PowerMCP/tests/test_runner.py) |
| security | 0 | 명확하지 않음 |
| ci | 2 | [.github/workflows/publish.yml](../../../../sources/Power-Agent__PowerMCP/.github/workflows/publish.yml)<br>[.github/workflows/test.yml](../../../../sources/Power-Agent__PowerMCP/.github/workflows/test.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 15 | [README.md](../../../../sources/Power-Agent__PowerMCP/README.md)<br>[surge/README.md](../../../../sources/Power-Agent__PowerMCP/surge/README.md)<br>[PyPSA/README.md](../../../../sources/Power-Agent__PowerMCP/PyPSA/README.md)<br>[PSSE/README.md](../../../../sources/Power-Agent__PowerMCP/PSSE/README.md)<br>[PSLF/README.md](../../../../sources/Power-Agent__PowerMCP/PSLF/README.md)<br>[PSCAD/README.md](../../../../sources/Power-Agent__PowerMCP/PSCAD/README.md)<br>[PowerWorld/README.md](../../../../sources/Power-Agent__PowerMCP/PowerWorld/README.md)<br>[powermcp/README.md](../../../../sources/Power-Agent__PowerMCP/powermcp/README.md) |
| config | 15 | [pyproject.toml](../../../../sources/Power-Agent__PowerMCP/pyproject.toml)<br>[surge/requirements.txt](../../../../sources/Power-Agent__PowerMCP/surge/requirements.txt)<br>[PyPSA/requirements.txt](../../../../sources/Power-Agent__PowerMCP/PyPSA/requirements.txt)<br>[PSSE/requirements.txt](../../../../sources/Power-Agent__PowerMCP/PSSE/requirements.txt)<br>[PSLF/requirements.txt](../../../../sources/Power-Agent__PowerMCP/PSLF/requirements.txt)<br>[PSCAD/pyproject.toml](../../../../sources/Power-Agent__PowerMCP/PSCAD/pyproject.toml)<br>[PowerWorld/requirements.txt](../../../../sources/Power-Agent__PowerMCP/PowerWorld/requirements.txt)<br>[PowerFactory/requirements.txt](../../../../sources/Power-Agent__PowerMCP/PowerFactory/requirements.txt) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 26 | [tests/conftest.py](../../../../sources/Power-Agent__PowerMCP/tests/conftest.py)<br>[tests/test_clients.py](../../../../sources/Power-Agent__PowerMCP/tests/test_clients.py)<br>[tests/test_config.py](../../../../sources/Power-Agent__PowerMCP/tests/test_config.py)<br>[tests/test_detect.py](../../../../sources/Power-Agent__PowerMCP/tests/test_detect.py)<br>[tests/test_doctor.py](../../../../sources/Power-Agent__PowerMCP/tests/test_doctor.py)<br>[tests/test_powerio_server.py](../../../../sources/Power-Agent__PowerMCP/tests/test_powerio_server.py) |
| CI workflow | 2 | [.github/workflows/publish.yml](../../../../sources/Power-Agent__PowerMCP/.github/workflows/publish.yml)<br>[.github/workflows/test.yml](../../../../sources/Power-Agent__PowerMCP/.github/workflows/test.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음; agent instruction 파일이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `surge/surge_mcp.py`, `PyPSA/pypsa_mcp.py`, `PSSE/psse_mcp.py`.
2. entrypoint를 따라 실행 흐름 확인: `PSCAD/pscad_mcp/main.py`, `powermcp/__main__.py`, `OpenDSS/core/server.py`.
3. agent/tool runtime 매핑: `PSCAD/pscad_mcp/tools/app_tools.py`, `PSCAD/pscad_mcp/tools/data_tools.py`, `PSCAD/pscad_mcp/tools/project_tools.py`.
4. retrieval/memory/indexing 확인: `PSSE/psspy_command_json/_index.json`.
5. test/eval 파일로 동작 검증: `tests/conftest.py`, `tests/test_clients.py`, `tests/test_config.py`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 PowerMCP is an open source collection of MCP servers for power system software like PowerWorld, PSSE and OpenDSS. These . 핵심 구조 신호는 Python, pyproject.toml, README.md, LICENSE, mcp, tests이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
