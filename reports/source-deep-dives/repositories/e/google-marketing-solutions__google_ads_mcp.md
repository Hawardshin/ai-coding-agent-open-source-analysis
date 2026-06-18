# google-marketing-solutions/google_ads_mcp Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

The Google Ads MCP Server is an implementation of the Model Context Protocol (MCP) that enables Large Language Models (LLMs), such as Gemini, to interact directly with the Google Ads API.

## 요약

- 조사 단위: `sources/google-marketing-solutions__google_ads_mcp` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 48 files, 10 directories, depth score 87, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=ads_mcp/__init__.py, ads_mcp/coordinator.py, ads_mcp/server.py이고, 의존성 단서는 gemini, mcp, 검증/운영 단서는 test/eval 경로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | google-marketing-solutions/google_ads_mcp |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 227 |
| Forks | 71 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/google-marketing-solutions__google_ads_mcp](../../../../sources/google-marketing-solutions__google_ads_mcp) |
| Existing report | [reports/global-trending/repositories/google-marketing-solutions__google_ads_mcp.md](../../../global-trending/repositories/google-marketing-solutions__google_ads_mcp.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 48 / 10 |
| Max observed depth | 4 |
| Top directories | ads_mcp, tests |
| Top extensions | .py: 32, (none): 8, .md: 5, .lock: 1, .toml: 1, .yaml: 1 |
| Source patterns | cli-first, api/server, agent/tool runtime, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 23 |
| ads_mcp | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| serve-dev | pyproject.toml | run-mcp-server | run-mcp-server |
| serve-dev | pyproject.toml | run-mcp-server-stdio | run-mcp-server-stdio |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | gemini |
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
| mcp | [ads_mcp/__init__.py](../../../../sources/google-marketing-solutions__google_ads_mcp/ads_mcp/__init__.py) | mcp signal |
| mcp | [ads_mcp/coordinator.py](../../../../sources/google-marketing-solutions__google_ads_mcp/ads_mcp/coordinator.py) | mcp signal |
| mcp | [ads_mcp/server.py](../../../../sources/google-marketing-solutions__google_ads_mcp/ads_mcp/server.py) | mcp signal |
| mcp | [ads_mcp/stdio.py](../../../../sources/google-marketing-solutions__google_ads_mcp/ads_mcp/stdio.py) | mcp signal |
| agentRuntime | [tests/tools/__init__.py](../../../../sources/google-marketing-solutions__google_ads_mcp/tests/tools/__init__.py) | agentRuntime signal |
| agentRuntime | [tests/tools/test_api.py](../../../../sources/google-marketing-solutions__google_ads_mcp/tests/tools/test_api.py) | agentRuntime signal |
| agentRuntime | [tests/tools/test_docs.py](../../../../sources/google-marketing-solutions__google_ads_mcp/tests/tools/test_docs.py) | agentRuntime signal |
| agentRuntime | [tests/tools/mutations/test_ad_group.py](../../../../sources/google-marketing-solutions__google_ads_mcp/tests/tools/mutations/test_ad_group.py) | agentRuntime signal |
| instruction | [GEMINI.md](../../../../sources/google-marketing-solutions__google_ads_mcp/GEMINI.md) | instruction signal |
| config | [pyproject.toml](../../../../sources/google-marketing-solutions__google_ads_mcp/pyproject.toml) | config signal |
| config | [uv.lock](../../../../sources/google-marketing-solutions__google_ads_mcp/uv.lock) | config signal |
| eval | [tests/__init__.py](../../../../sources/google-marketing-solutions__google_ads_mcp/tests/__init__.py) | eval support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 1 | [ads_mcp/server.py](../../../../sources/google-marketing-solutions__google_ads_mcp/ads_mcp/server.py) |
| agentRuntime | 28 | [tests/tools/__init__.py](../../../../sources/google-marketing-solutions__google_ads_mcp/tests/tools/__init__.py)<br>[tests/tools/test_api.py](../../../../sources/google-marketing-solutions__google_ads_mcp/tests/tools/test_api.py)<br>[tests/tools/test_docs.py](../../../../sources/google-marketing-solutions__google_ads_mcp/tests/tools/test_docs.py)<br>[tests/tools/mutations/test_ad_group.py](../../../../sources/google-marketing-solutions__google_ads_mcp/tests/tools/mutations/test_ad_group.py)<br>[tests/tools/mutations/test_ad.py](../../../../sources/google-marketing-solutions__google_ads_mcp/tests/tools/mutations/test_ad.py)<br>[tests/tools/mutations/test_budget.py](../../../../sources/google-marketing-solutions__google_ads_mcp/tests/tools/mutations/test_budget.py)<br>[tests/tools/mutations/test_campaign.py](../../../../sources/google-marketing-solutions__google_ads_mcp/tests/tools/mutations/test_campaign.py)<br>[tests/tools/mutations/test_common.py](../../../../sources/google-marketing-solutions__google_ads_mcp/tests/tools/mutations/test_common.py) |
| mcp | 25 | [ads_mcp/__init__.py](../../../../sources/google-marketing-solutions__google_ads_mcp/ads_mcp/__init__.py)<br>[ads_mcp/coordinator.py](../../../../sources/google-marketing-solutions__google_ads_mcp/ads_mcp/coordinator.py)<br>[ads_mcp/server.py](../../../../sources/google-marketing-solutions__google_ads_mcp/ads_mcp/server.py)<br>[ads_mcp/stdio.py](../../../../sources/google-marketing-solutions__google_ads_mcp/ads_mcp/stdio.py)<br>[ads_mcp/utils.py](../../../../sources/google-marketing-solutions__google_ads_mcp/ads_mcp/utils.py)<br>[ads_mcp/tools/__init__.py](../../../../sources/google-marketing-solutions__google_ads_mcp/ads_mcp/tools/__init__.py)<br>[ads_mcp/tools/_ads_api.py](../../../../sources/google-marketing-solutions__google_ads_mcp/ads_mcp/tools/_ads_api.py)<br>[ads_mcp/tools/_utils.py](../../../../sources/google-marketing-solutions__google_ads_mcp/ads_mcp/tools/_utils.py) |
| retrieval | 0 | not obvious |
| spec | 0 | not obvious |
| eval | 13 | [tests/__init__.py](../../../../sources/google-marketing-solutions__google_ads_mcp/tests/__init__.py)<br>[tests/test_server.py](../../../../sources/google-marketing-solutions__google_ads_mcp/tests/test_server.py)<br>[tests/test_stdio.py](../../../../sources/google-marketing-solutions__google_ads_mcp/tests/test_stdio.py)<br>[tests/tools/__init__.py](../../../../sources/google-marketing-solutions__google_ads_mcp/tests/tools/__init__.py)<br>[tests/tools/test_api.py](../../../../sources/google-marketing-solutions__google_ads_mcp/tests/tools/test_api.py)<br>[tests/tools/test_docs.py](../../../../sources/google-marketing-solutions__google_ads_mcp/tests/tools/test_docs.py)<br>[tests/tools/mutations/test_ad_group.py](../../../../sources/google-marketing-solutions__google_ads_mcp/tests/tools/mutations/test_ad_group.py)<br>[tests/tools/mutations/test_ad.py](../../../../sources/google-marketing-solutions__google_ads_mcp/tests/tools/mutations/test_ad.py) |
| security | 0 | not obvious |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 1 | [GEMINI.md](../../../../sources/google-marketing-solutions__google_ads_mcp/GEMINI.md) |
| docs | 1 | [README.md](../../../../sources/google-marketing-solutions__google_ads_mcp/README.md) |
| config | 2 | [pyproject.toml](../../../../sources/google-marketing-solutions__google_ads_mcp/pyproject.toml)<br>[uv.lock](../../../../sources/google-marketing-solutions__google_ads_mcp/uv.lock) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 13 | [tests/__init__.py](../../../../sources/google-marketing-solutions__google_ads_mcp/tests/__init__.py)<br>[tests/test_server.py](../../../../sources/google-marketing-solutions__google_ads_mcp/tests/test_server.py)<br>[tests/test_stdio.py](../../../../sources/google-marketing-solutions__google_ads_mcp/tests/test_stdio.py)<br>[tests/tools/__init__.py](../../../../sources/google-marketing-solutions__google_ads_mcp/tests/tools/__init__.py)<br>[tests/tools/test_api.py](../../../../sources/google-marketing-solutions__google_ads_mcp/tests/tools/test_api.py)<br>[tests/tools/test_docs.py](../../../../sources/google-marketing-solutions__google_ads_mcp/tests/tools/test_docs.py) |
| CI workflows | 0 | not obvious |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 1 | [GEMINI.md](../../../../sources/google-marketing-solutions__google_ads_mcp/GEMINI.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | CI workflow path not obvious; container/deploy path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `ads_mcp/__init__.py`, `ads_mcp/coordinator.py`, `ads_mcp/server.py`.
2. Trace execution through entrypoints: `ads_mcp/server.py`.
3. Map agent/tool runtime through: `tests/tools/__init__.py`, `tests/tools/test_api.py`, `tests/tools/test_docs.py`.
4. Verify behavior through test/eval files: `tests/__init__.py`, `tests/test_server.py`, `tests/test_stdio.py`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 The Google Ads MCP Server is an implementation of the Model Context Protocol MCP that enables Large Language Models LLMs. 핵심 구조 신호는 Python, pyproject.toml, README.md, LICENSE, mcp, tests이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 ci signal not obvious, license metadata missing, needs deeper structural scan입니다.
