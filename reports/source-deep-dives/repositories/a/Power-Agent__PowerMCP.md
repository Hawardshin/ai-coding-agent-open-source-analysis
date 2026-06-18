# Power-Agent/PowerMCP Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

PowerMCP is an open-source collection of MCP servers for power system software like PowerWorld, PSSE and OpenDSS. These tools enable LLMs to directly interact with power system applications, facilitating intelligent coordination, simulation, and control in the energy domain.

## 요약

- 조사 단위: `sources/Power-Agent__PowerMCP` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 2,325 files, 34 directories, depth score 114, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=surge/surge_mcp.py, PyPSA/pypsa_mcp.py, PSSE/psse_mcp.py이고, 의존성 단서는 mcp, typer, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | Power-Agent/PowerMCP |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 157 |
| Forks | 49 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/Power-Agent__PowerMCP](../../../../sources/Power-Agent__PowerMCP) |
| Existing report | [reports/global-trending/repositories/Power-Agent__PowerMCP.md](../../../global-trending/repositories/Power-Agent__PowerMCP.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 2325 / 34 |
| Max observed depth | 4 |
| Top directories | .github, ANDES, Egret, HOPE, LTSpice, OpenDSS, pandapower, PowerFactory, powerio, powermcp, PowerWorld, PSCAD, PSLF, PSSE, PyPSA, surge, tests |
| Top extensions | .json: 2189, .py: 75, .md: 17, .txt: 13, .dss: 3, .toml: 3, .m: 2, .pwd: 2, .sav: 2, .yml: 2, (none): 2, .cntl: 1 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness |

### Components

| Component | Role | Signal count |
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


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | pyproject.toml | powermcp | powermcp |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | mcp |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | none |
| developerSurface | typer |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
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


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 5 | [PSCAD/pscad_mcp/main.py](../../../../sources/Power-Agent__PowerMCP/PSCAD/pscad_mcp/main.py)<br>[powermcp/__main__.py](../../../../sources/Power-Agent__PowerMCP/powermcp/__main__.py)<br>[OpenDSS/core/server.py](../../../../sources/Power-Agent__PowerMCP/OpenDSS/core/server.py)<br>[HOPE/src/hope_mcp_server/__main__.py](../../../../sources/Power-Agent__PowerMCP/HOPE/src/hope_mcp_server/__main__.py)<br>[HOPE/src/hope_mcp_server/server.py](../../../../sources/Power-Agent__PowerMCP/HOPE/src/hope_mcp_server/server.py) |
| agentRuntime | 7 | [PSCAD/pscad_mcp/tools/app_tools.py](../../../../sources/Power-Agent__PowerMCP/PSCAD/pscad_mcp/tools/app_tools.py)<br>[PSCAD/pscad_mcp/tools/data_tools.py](../../../../sources/Power-Agent__PowerMCP/PSCAD/pscad_mcp/tools/data_tools.py)<br>[PSCAD/pscad_mcp/tools/project_tools.py](../../../../sources/Power-Agent__PowerMCP/PSCAD/pscad_mcp/tools/project_tools.py)<br>[PSCAD/pscad_mcp/tools/simset_tools.py](../../../../sources/Power-Agent__PowerMCP/PSCAD/pscad_mcp/tools/simset_tools.py)<br>[PSCAD/pscad_mcp/core/executor.py](../../../../sources/Power-Agent__PowerMCP/PSCAD/pscad_mcp/core/executor.py)<br>[powermcp/runner.py](../../../../sources/Power-Agent__PowerMCP/powermcp/runner.py)<br>[PowerFactory/Agent_DIgSILENT.py](../../../../sources/Power-Agent__PowerMCP/PowerFactory/Agent_DIgSILENT.py) |
| mcp | 27 | [surge/surge_mcp.py](../../../../sources/Power-Agent__PowerMCP/surge/surge_mcp.py)<br>[PyPSA/pypsa_mcp.py](../../../../sources/Power-Agent__PowerMCP/PyPSA/pypsa_mcp.py)<br>[PSSE/psse_mcp.py](../../../../sources/Power-Agent__PowerMCP/PSSE/psse_mcp.py)<br>[PSLF/pslf_mcp.py](../../../../sources/Power-Agent__PowerMCP/PSLF/pslf_mcp.py)<br>[PSCAD/mcp_installer.py](../../../../sources/Power-Agent__PowerMCP/PSCAD/mcp_installer.py)<br>[PSCAD/pscad_mcp/__init__.py](../../../../sources/Power-Agent__PowerMCP/PSCAD/pscad_mcp/__init__.py)<br>[PSCAD/pscad_mcp/main.py](../../../../sources/Power-Agent__PowerMCP/PSCAD/pscad_mcp/main.py)<br>[PSCAD/pscad_mcp/utils/doc_manager.py](../../../../sources/Power-Agent__PowerMCP/PSCAD/pscad_mcp/utils/doc_manager.py) |
| retrieval | 1 | [PSSE/psspy_command_json/_index.json](../../../../sources/Power-Agent__PowerMCP/PSSE/psspy_command_json/_index.json) |
| spec | 11 | [surge/requirements.txt](../../../../sources/Power-Agent__PowerMCP/surge/requirements.txt)<br>[PyPSA/requirements.txt](../../../../sources/Power-Agent__PowerMCP/PyPSA/requirements.txt)<br>[PSSE/requirements.txt](../../../../sources/Power-Agent__PowerMCP/PSSE/requirements.txt)<br>[PSLF/requirements.txt](../../../../sources/Power-Agent__PowerMCP/PSLF/requirements.txt)<br>[PowerWorld/requirements.txt](../../../../sources/Power-Agent__PowerMCP/PowerWorld/requirements.txt)<br>[PowerFactory/requirements.txt](../../../../sources/Power-Agent__PowerMCP/PowerFactory/requirements.txt)<br>[pandapower/requirements.txt](../../../../sources/Power-Agent__PowerMCP/pandapower/requirements.txt)<br>[OpenDSS/requirements.txt](../../../../sources/Power-Agent__PowerMCP/OpenDSS/requirements.txt) |
| eval | 26 | [tests/conftest.py](../../../../sources/Power-Agent__PowerMCP/tests/conftest.py)<br>[tests/test_clients.py](../../../../sources/Power-Agent__PowerMCP/tests/test_clients.py)<br>[tests/test_config.py](../../../../sources/Power-Agent__PowerMCP/tests/test_config.py)<br>[tests/test_detect.py](../../../../sources/Power-Agent__PowerMCP/tests/test_detect.py)<br>[tests/test_doctor.py](../../../../sources/Power-Agent__PowerMCP/tests/test_doctor.py)<br>[tests/test_powerio_server.py](../../../../sources/Power-Agent__PowerMCP/tests/test_powerio_server.py)<br>[tests/test_registry.py](../../../../sources/Power-Agent__PowerMCP/tests/test_registry.py)<br>[tests/test_runner.py](../../../../sources/Power-Agent__PowerMCP/tests/test_runner.py) |
| security | 0 | not obvious |
| ci | 2 | [.github/workflows/publish.yml](../../../../sources/Power-Agent__PowerMCP/.github/workflows/publish.yml)<br>[.github/workflows/test.yml](../../../../sources/Power-Agent__PowerMCP/.github/workflows/test.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 15 | [README.md](../../../../sources/Power-Agent__PowerMCP/README.md)<br>[surge/README.md](../../../../sources/Power-Agent__PowerMCP/surge/README.md)<br>[PyPSA/README.md](../../../../sources/Power-Agent__PowerMCP/PyPSA/README.md)<br>[PSSE/README.md](../../../../sources/Power-Agent__PowerMCP/PSSE/README.md)<br>[PSLF/README.md](../../../../sources/Power-Agent__PowerMCP/PSLF/README.md)<br>[PSCAD/README.md](../../../../sources/Power-Agent__PowerMCP/PSCAD/README.md)<br>[PowerWorld/README.md](../../../../sources/Power-Agent__PowerMCP/PowerWorld/README.md)<br>[powermcp/README.md](../../../../sources/Power-Agent__PowerMCP/powermcp/README.md) |
| config | 15 | [pyproject.toml](../../../../sources/Power-Agent__PowerMCP/pyproject.toml)<br>[surge/requirements.txt](../../../../sources/Power-Agent__PowerMCP/surge/requirements.txt)<br>[PyPSA/requirements.txt](../../../../sources/Power-Agent__PowerMCP/PyPSA/requirements.txt)<br>[PSSE/requirements.txt](../../../../sources/Power-Agent__PowerMCP/PSSE/requirements.txt)<br>[PSLF/requirements.txt](../../../../sources/Power-Agent__PowerMCP/PSLF/requirements.txt)<br>[PSCAD/pyproject.toml](../../../../sources/Power-Agent__PowerMCP/PSCAD/pyproject.toml)<br>[PowerWorld/requirements.txt](../../../../sources/Power-Agent__PowerMCP/PowerWorld/requirements.txt)<br>[PowerFactory/requirements.txt](../../../../sources/Power-Agent__PowerMCP/PowerFactory/requirements.txt) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 26 | [tests/conftest.py](../../../../sources/Power-Agent__PowerMCP/tests/conftest.py)<br>[tests/test_clients.py](../../../../sources/Power-Agent__PowerMCP/tests/test_clients.py)<br>[tests/test_config.py](../../../../sources/Power-Agent__PowerMCP/tests/test_config.py)<br>[tests/test_detect.py](../../../../sources/Power-Agent__PowerMCP/tests/test_detect.py)<br>[tests/test_doctor.py](../../../../sources/Power-Agent__PowerMCP/tests/test_doctor.py)<br>[tests/test_powerio_server.py](../../../../sources/Power-Agent__PowerMCP/tests/test_powerio_server.py) |
| CI workflows | 2 | [.github/workflows/publish.yml](../../../../sources/Power-Agent__PowerMCP/.github/workflows/publish.yml)<br>[.github/workflows/test.yml](../../../../sources/Power-Agent__PowerMCP/.github/workflows/test.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | security/policy surface not obvious; agent instruction files not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `surge/surge_mcp.py`, `PyPSA/pypsa_mcp.py`, `PSSE/psse_mcp.py`.
2. Trace execution through entrypoints: `PSCAD/pscad_mcp/main.py`, `powermcp/__main__.py`, `OpenDSS/core/server.py`.
3. Map agent/tool runtime through: `PSCAD/pscad_mcp/tools/app_tools.py`, `PSCAD/pscad_mcp/tools/data_tools.py`, `PSCAD/pscad_mcp/tools/project_tools.py`.
4. Inspect retrieval/memory/indexing through: `PSSE/psspy_command_json/_index.json`.
5. Verify behavior through test/eval files: `tests/conftest.py`, `tests/test_clients.py`, `tests/test_config.py`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 PowerMCP is an open source collection of MCP servers for power system software like PowerWorld, PSSE and OpenDSS. These . 핵심 구조 신호는 Python, pyproject.toml, README.md, LICENSE, mcp, tests이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
