# StarRocks/mcp-server-starrocks Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

StarRocks MCP (Model Context Protocol) Server

## 요약

- 조사 단위: `sources/StarRocks__mcp-server-starrocks` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 20 files, 5 directories, depth score 86, key references 10개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=src/mcp_server_starrocks/__init__.py, src/mcp_server_starrocks/connection_health_checker.py, src/mcp_server_starrocks/db_client.py이고, 의존성 단서는 mcp, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 10개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | StarRocks/mcp-server-starrocks |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 175 |
| Forks | 55 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/StarRocks__mcp-server-starrocks](../../../../sources/StarRocks__mcp-server-starrocks) |
| Existing report | [reports/global-trending/repositories/StarRocks__mcp-server-starrocks.md](../../../global-trending/repositories/StarRocks__mcp-server-starrocks.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 20 / 5 |
| Max observed depth | 3 |
| Top directories | .github, src, tests |
| Top extensions | .py: 8, .md: 4, (none): 3, .ini: 1, .jpg: 1, .json: 1, .toml: 1, .yml: 1 |
| Source patterns | cli-first, api/server, agent/tool runtime, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 9 |
| tests | validation surface | 5 |
| .github | ci surface | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| serve-dev | pyproject.toml | mcp-server-starrocks | mcp-server-starrocks |


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
| mcp | [src/mcp_server_starrocks/__init__.py](../../../../sources/StarRocks__mcp-server-starrocks/src/mcp_server_starrocks/__init__.py) | mcp signal |
| mcp | [src/mcp_server_starrocks/connection_health_checker.py](../../../../sources/StarRocks__mcp-server-starrocks/src/mcp_server_starrocks/connection_health_checker.py) | mcp signal |
| mcp | [src/mcp_server_starrocks/db_client.py](../../../../sources/StarRocks__mcp-server-starrocks/src/mcp_server_starrocks/db_client.py) | mcp signal |
| mcp | [src/mcp_server_starrocks/db_summary_manager.py](../../../../sources/StarRocks__mcp-server-starrocks/src/mcp_server_starrocks/db_summary_manager.py) | mcp signal |
| entrypoints | [src/mcp_server_starrocks/server.py](../../../../sources/StarRocks__mcp-server-starrocks/src/mcp_server_starrocks/server.py) | entrypoints signal |
| instruction | [CLAUDE.md](../../../../sources/StarRocks__mcp-server-starrocks/CLAUDE.md) | instruction signal |
| config | [pyproject.toml](../../../../sources/StarRocks__mcp-server-starrocks/pyproject.toml) | config signal |
| ci | [.github/workflows/publish.yml](../../../../sources/StarRocks__mcp-server-starrocks/.github/workflows/publish.yml) | ci support |
| eval | [tests/__init__.py](../../../../sources/StarRocks__mcp-server-starrocks/tests/__init__.py) | eval support |
| eval | [tests/README.md](../../../../sources/StarRocks__mcp-server-starrocks/tests/README.md) | eval support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 1 | [src/mcp_server_starrocks/server.py](../../../../sources/StarRocks__mcp-server-starrocks/src/mcp_server_starrocks/server.py) |
| agentRuntime | 0 | not obvious |
| mcp | 6 | [src/mcp_server_starrocks/__init__.py](../../../../sources/StarRocks__mcp-server-starrocks/src/mcp_server_starrocks/__init__.py)<br>[src/mcp_server_starrocks/connection_health_checker.py](../../../../sources/StarRocks__mcp-server-starrocks/src/mcp_server_starrocks/connection_health_checker.py)<br>[src/mcp_server_starrocks/db_client.py](../../../../sources/StarRocks__mcp-server-starrocks/src/mcp_server_starrocks/db_client.py)<br>[src/mcp_server_starrocks/db_summary_manager.py](../../../../sources/StarRocks__mcp-server-starrocks/src/mcp_server_starrocks/db_summary_manager.py)<br>[src/mcp_server_starrocks/secret_resolver.py](../../../../sources/StarRocks__mcp-server-starrocks/src/mcp_server_starrocks/secret_resolver.py)<br>[src/mcp_server_starrocks/server.py](../../../../sources/StarRocks__mcp-server-starrocks/src/mcp_server_starrocks/server.py) |
| retrieval | 0 | not obvious |
| spec | 0 | not obvious |
| eval | 3 | [tests/__init__.py](../../../../sources/StarRocks__mcp-server-starrocks/tests/__init__.py)<br>[tests/README.md](../../../../sources/StarRocks__mcp-server-starrocks/tests/README.md)<br>[tests/test_db_client.py](../../../../sources/StarRocks__mcp-server-starrocks/tests/test_db_client.py) |
| security | 1 | [src/mcp_server_starrocks/secret_resolver.py](../../../../sources/StarRocks__mcp-server-starrocks/src/mcp_server_starrocks/secret_resolver.py) |
| ci | 1 | [.github/workflows/publish.yml](../../../../sources/StarRocks__mcp-server-starrocks/.github/workflows/publish.yml) |
| container | 0 | not obvious |
| instruction | 1 | [CLAUDE.md](../../../../sources/StarRocks__mcp-server-starrocks/CLAUDE.md) |
| docs | 2 | [README.md](../../../../sources/StarRocks__mcp-server-starrocks/README.md)<br>[tests/README.md](../../../../sources/StarRocks__mcp-server-starrocks/tests/README.md) |
| config | 1 | [pyproject.toml](../../../../sources/StarRocks__mcp-server-starrocks/pyproject.toml) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 3 | [tests/__init__.py](../../../../sources/StarRocks__mcp-server-starrocks/tests/__init__.py)<br>[tests/README.md](../../../../sources/StarRocks__mcp-server-starrocks/tests/README.md)<br>[tests/test_db_client.py](../../../../sources/StarRocks__mcp-server-starrocks/tests/test_db_client.py) |
| CI workflows | 1 | [.github/workflows/publish.yml](../../../../sources/StarRocks__mcp-server-starrocks/.github/workflows/publish.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 1 | [src/mcp_server_starrocks/secret_resolver.py](../../../../sources/StarRocks__mcp-server-starrocks/src/mcp_server_starrocks/secret_resolver.py) |
| Agent instructions | 1 | [CLAUDE.md](../../../../sources/StarRocks__mcp-server-starrocks/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `src/mcp_server_starrocks/__init__.py`, `src/mcp_server_starrocks/connection_health_checker.py`, `src/mcp_server_starrocks/db_client.py`.
2. Trace execution through entrypoints: `src/mcp_server_starrocks/server.py`.
3. Verify behavior through test/eval files: `tests/__init__.py`, `tests/README.md`, `tests/test_db_client.py`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 StarRocks MCP Model Context Protocol Server. 핵심 구조 신호는 Python, pyproject.toml, README.md, CLAUDE.md, LICENSE, mcp이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
