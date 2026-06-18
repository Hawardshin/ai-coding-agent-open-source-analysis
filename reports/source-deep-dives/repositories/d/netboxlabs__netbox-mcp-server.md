# netboxlabs/netbox-mcp-server Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Model Context Protocol (MCP) server for read-only interaction with NetBox data in LLMs

## 요약

- 조사 단위: `sources/netboxlabs__netbox-mcp-server` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 47 files, 9 directories, depth score 105, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=src/netbox_mcp_server/__init__.py, src/netbox_mcp_server/__main__.py, src/netbox_mcp_server/config.py이고, 의존성 단서는 mcp, pydantic, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | netboxlabs/netbox-mcp-server |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 187 |
| Forks | 84 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/netboxlabs__netbox-mcp-server](../../../../sources/netboxlabs__netbox-mcp-server) |
| Existing report | [reports/global-trending/repositories/netboxlabs__netbox-mcp-server.md](../../../global-trending/repositories/netboxlabs__netbox-mcp-server.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 47 / 9 |
| Max observed depth | 4 |
| Top directories | .claude, .github, src, tests |
| Top extensions | .py: 18, .yaml: 8, .md: 7, .yml: 5, (none): 5, .example: 1, .json5: 1, .lock: 1, .toml: 1 |
| Source patterns | cli-first, api/server, agent/tool runtime, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 14 |
| src | source boundary | 9 |
| .github | ci surface | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| serve-dev | pyproject.toml | netbox-mcp-server | netbox-mcp-server |


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
| mcp | [src/netbox_mcp_server/__init__.py](../../../../sources/netboxlabs__netbox-mcp-server/src/netbox_mcp_server/__init__.py) | mcp signal |
| mcp | [src/netbox_mcp_server/__main__.py](../../../../sources/netboxlabs__netbox-mcp-server/src/netbox_mcp_server/__main__.py) | mcp signal |
| mcp | [src/netbox_mcp_server/config.py](../../../../sources/netboxlabs__netbox-mcp-server/src/netbox_mcp_server/config.py) | mcp signal |
| mcp | [src/netbox_mcp_server/netbox_client.py](../../../../sources/netboxlabs__netbox-mcp-server/src/netbox_mcp_server/netbox_client.py) | mcp signal |
| agentRuntime | [.claude/skills/netbox-mcp-testing/SKILL.md](../../../../sources/netboxlabs__netbox-mcp-server/.claude/skills/netbox-mcp-testing/SKILL.md) | agentRuntime signal |
| entrypoints | [src/netbox_mcp_server/server.py](../../../../sources/netboxlabs__netbox-mcp-server/src/netbox_mcp_server/server.py) | entrypoints signal |
| instruction | [CLAUDE.md](../../../../sources/netboxlabs__netbox-mcp-server/CLAUDE.md) | instruction signal |
| config | [pyproject.toml](../../../../sources/netboxlabs__netbox-mcp-server/pyproject.toml) | config signal |
| config | [uv.lock](../../../../sources/netboxlabs__netbox-mcp-server/uv.lock) | config signal |
| ci | [.github/workflows/container-rescan.yaml](../../../../sources/netboxlabs__netbox-mcp-server/.github/workflows/container-rescan.yaml) | ci support |
| ci | [.github/workflows/container-scan.yaml](../../../../sources/netboxlabs__netbox-mcp-server/.github/workflows/container-scan.yaml) | ci support |
| container | [Dockerfile](../../../../sources/netboxlabs__netbox-mcp-server/Dockerfile) | container support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 2 | [src/netbox_mcp_server/__main__.py](../../../../sources/netboxlabs__netbox-mcp-server/src/netbox_mcp_server/__main__.py)<br>[src/netbox_mcp_server/server.py](../../../../sources/netboxlabs__netbox-mcp-server/src/netbox_mcp_server/server.py) |
| agentRuntime | 1 | [.claude/skills/netbox-mcp-testing/SKILL.md](../../../../sources/netboxlabs__netbox-mcp-server/.claude/skills/netbox-mcp-testing/SKILL.md) |
| mcp | 7 | [src/netbox_mcp_server/__init__.py](../../../../sources/netboxlabs__netbox-mcp-server/src/netbox_mcp_server/__init__.py)<br>[src/netbox_mcp_server/__main__.py](../../../../sources/netboxlabs__netbox-mcp-server/src/netbox_mcp_server/__main__.py)<br>[src/netbox_mcp_server/config.py](../../../../sources/netboxlabs__netbox-mcp-server/src/netbox_mcp_server/config.py)<br>[src/netbox_mcp_server/netbox_client.py](../../../../sources/netboxlabs__netbox-mcp-server/src/netbox_mcp_server/netbox_client.py)<br>[src/netbox_mcp_server/netbox_types.py](../../../../sources/netboxlabs__netbox-mcp-server/src/netbox_mcp_server/netbox_types.py)<br>[src/netbox_mcp_server/server.py](../../../../sources/netboxlabs__netbox-mcp-server/src/netbox_mcp_server/server.py)<br>[.claude/skills/netbox-mcp-testing/SKILL.md](../../../../sources/netboxlabs__netbox-mcp-server/.claude/skills/netbox-mcp-testing/SKILL.md) |
| retrieval | 0 | not obvious |
| spec | 0 | not obvious |
| eval | 13 | [tests/__init__.py](../../../../sources/netboxlabs__netbox-mcp-server/tests/__init__.py)<br>[tests/test_brief.py](../../../../sources/netboxlabs__netbox-mcp-server/tests/test_brief.py)<br>[tests/test_client_fallback.py](../../../../sources/netboxlabs__netbox-mcp-server/tests/test_client_fallback.py)<br>[tests/test_config.py](../../../../sources/netboxlabs__netbox-mcp-server/tests/test_config.py)<br>[tests/test_fallback_integration.py](../../../../sources/netboxlabs__netbox-mcp-server/tests/test_fallback_integration.py)<br>[tests/test_filter_validation.py](../../../../sources/netboxlabs__netbox-mcp-server/tests/test_filter_validation.py)<br>[tests/test_http_auth.py](../../../../sources/netboxlabs__netbox-mcp-server/tests/test_http_auth.py)<br>[tests/test_ordering.py](../../../../sources/netboxlabs__netbox-mcp-server/tests/test_ordering.py) |
| security | 2 | [SECURITY.md](../../../../sources/netboxlabs__netbox-mcp-server/SECURITY.md)<br>[tests/test_http_auth.py](../../../../sources/netboxlabs__netbox-mcp-server/tests/test_http_auth.py) |
| ci | 6 | [.github/workflows/container-rescan.yaml](../../../../sources/netboxlabs__netbox-mcp-server/.github/workflows/container-rescan.yaml)<br>[.github/workflows/container-scan.yaml](../../../../sources/netboxlabs__netbox-mcp-server/.github/workflows/container-scan.yaml)<br>[.github/workflows/docker-publish.yml](../../../../sources/netboxlabs__netbox-mcp-server/.github/workflows/docker-publish.yml)<br>[.github/workflows/release-finalize.yml](../../../../sources/netboxlabs__netbox-mcp-server/.github/workflows/release-finalize.yml)<br>[.github/workflows/release.yml](../../../../sources/netboxlabs__netbox-mcp-server/.github/workflows/release.yml)<br>[.github/workflows/test.yml](../../../../sources/netboxlabs__netbox-mcp-server/.github/workflows/test.yml) |
| container | 1 | [Dockerfile](../../../../sources/netboxlabs__netbox-mcp-server/Dockerfile) |
| instruction | 1 | [CLAUDE.md](../../../../sources/netboxlabs__netbox-mcp-server/CLAUDE.md) |
| docs | 2 | [README-client.md](../../../../sources/netboxlabs__netbox-mcp-server/README-client.md)<br>[README.md](../../../../sources/netboxlabs__netbox-mcp-server/README.md) |
| config | 2 | [pyproject.toml](../../../../sources/netboxlabs__netbox-mcp-server/pyproject.toml)<br>[uv.lock](../../../../sources/netboxlabs__netbox-mcp-server/uv.lock) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 13 | [tests/__init__.py](../../../../sources/netboxlabs__netbox-mcp-server/tests/__init__.py)<br>[tests/test_brief.py](../../../../sources/netboxlabs__netbox-mcp-server/tests/test_brief.py)<br>[tests/test_client_fallback.py](../../../../sources/netboxlabs__netbox-mcp-server/tests/test_client_fallback.py)<br>[tests/test_config.py](../../../../sources/netboxlabs__netbox-mcp-server/tests/test_config.py)<br>[tests/test_fallback_integration.py](../../../../sources/netboxlabs__netbox-mcp-server/tests/test_fallback_integration.py)<br>[tests/test_filter_validation.py](../../../../sources/netboxlabs__netbox-mcp-server/tests/test_filter_validation.py) |
| CI workflows | 6 | [.github/workflows/container-rescan.yaml](../../../../sources/netboxlabs__netbox-mcp-server/.github/workflows/container-rescan.yaml)<br>[.github/workflows/container-scan.yaml](../../../../sources/netboxlabs__netbox-mcp-server/.github/workflows/container-scan.yaml)<br>[.github/workflows/docker-publish.yml](../../../../sources/netboxlabs__netbox-mcp-server/.github/workflows/docker-publish.yml)<br>[.github/workflows/release-finalize.yml](../../../../sources/netboxlabs__netbox-mcp-server/.github/workflows/release-finalize.yml)<br>[.github/workflows/release.yml](../../../../sources/netboxlabs__netbox-mcp-server/.github/workflows/release.yml)<br>[.github/workflows/test.yml](../../../../sources/netboxlabs__netbox-mcp-server/.github/workflows/test.yml) |
| Containers / deploy | 1 | [Dockerfile](../../../../sources/netboxlabs__netbox-mcp-server/Dockerfile) |
| Security / policy | 2 | [SECURITY.md](../../../../sources/netboxlabs__netbox-mcp-server/SECURITY.md)<br>[tests/test_http_auth.py](../../../../sources/netboxlabs__netbox-mcp-server/tests/test_http_auth.py) |
| Agent instructions | 1 | [CLAUDE.md](../../../../sources/netboxlabs__netbox-mcp-server/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `src/netbox_mcp_server/__init__.py`, `src/netbox_mcp_server/__main__.py`, `src/netbox_mcp_server/config.py`.
2. Trace execution through entrypoints: `src/netbox_mcp_server/__main__.py`, `src/netbox_mcp_server/server.py`.
3. Map agent/tool runtime through: `.claude/skills/netbox-mcp-testing/SKILL.md`.
4. Verify behavior through test/eval files: `tests/__init__.py`, `tests/test_brief.py`, `tests/test_client_fallback.py`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Model Context Protocol MCP server for read only interaction with NetBox data in LLMs. 핵심 구조 신호는 Python, pyproject.toml, Dockerfile, README.md, CLAUDE.md, LICENSE이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
