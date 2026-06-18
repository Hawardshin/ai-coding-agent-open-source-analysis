# tjwodud04/mcp-tour Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

MCP integration for Korea Tourism Organization's API using Claude Desktop App with help from Cursor

## 요약

- 조사 단위: `sources/tjwodud04__mcp-tour` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 12 files, 2 directories, depth score 63, key references 7개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=mcp_tour/__init__.py, mcp_tour/server.py, mcp_tour/hosts/__init__.py이고, 의존성 단서는 claude, mcp, pydantic, 검증/운영 단서는 운영 보조 파일은 추가 확인 필요이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 7개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | tjwodud04/mcp-tour |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | Python |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/tjwodud04__mcp-tour](../../../../sources/tjwodud04__mcp-tour) |
| Existing report | [reports/korea-trending/repositories/tjwodud04__mcp-tour.md](../../../korea-trending/repositories/tjwodud04__mcp-tour.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 12 / 2 |
| Max observed depth | 3 |
| Top directories | mcp_tour |
| Top extensions | .py: 5, (none): 2, .example: 1, .lock: 1, .md: 1, .toml: 1, .txt: 1 |
| Source patterns | cli-first, api/server, agent/tool runtime, spec/docs-driven |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| mcp_tour | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | pyproject.toml | mcp-tour-claude | mcp-tour-claude |
| utility | pyproject.toml | mcp-tour-cursor | mcp-tour-cursor |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | claude |
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
| mcp | [mcp_tour/__init__.py](../../../../sources/tjwodud04__mcp-tour/mcp_tour/__init__.py) | mcp signal |
| mcp | [mcp_tour/server.py](../../../../sources/tjwodud04__mcp-tour/mcp_tour/server.py) | mcp signal |
| mcp | [mcp_tour/hosts/__init__.py](../../../../sources/tjwodud04__mcp-tour/mcp_tour/hosts/__init__.py) | mcp signal |
| mcp | [mcp_tour/hosts/claude_desktop.py](../../../../sources/tjwodud04__mcp-tour/mcp_tour/hosts/claude_desktop.py) | mcp signal |
| config | [pyproject.toml](../../../../sources/tjwodud04__mcp-tour/pyproject.toml) | config signal |
| config | [requirements.txt](../../../../sources/tjwodud04__mcp-tour/requirements.txt) | config signal |
| config | [uv.lock](../../../../sources/tjwodud04__mcp-tour/uv.lock) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 1 | [mcp_tour/server.py](../../../../sources/tjwodud04__mcp-tour/mcp_tour/server.py) |
| agentRuntime | 0 | not obvious |
| mcp | 5 | [mcp_tour/__init__.py](../../../../sources/tjwodud04__mcp-tour/mcp_tour/__init__.py)<br>[mcp_tour/server.py](../../../../sources/tjwodud04__mcp-tour/mcp_tour/server.py)<br>[mcp_tour/hosts/__init__.py](../../../../sources/tjwodud04__mcp-tour/mcp_tour/hosts/__init__.py)<br>[mcp_tour/hosts/claude_desktop.py](../../../../sources/tjwodud04__mcp-tour/mcp_tour/hosts/claude_desktop.py)<br>[mcp_tour/hosts/cursor.py](../../../../sources/tjwodud04__mcp-tour/mcp_tour/hosts/cursor.py) |
| retrieval | 0 | not obvious |
| spec | 1 | [requirements.txt](../../../../sources/tjwodud04__mcp-tour/requirements.txt) |
| eval | 0 | not obvious |
| security | 0 | not obvious |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 1 | [README.md](../../../../sources/tjwodud04__mcp-tour/README.md) |
| config | 3 | [pyproject.toml](../../../../sources/tjwodud04__mcp-tour/pyproject.toml)<br>[requirements.txt](../../../../sources/tjwodud04__mcp-tour/requirements.txt)<br>[uv.lock](../../../../sources/tjwodud04__mcp-tour/uv.lock) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 0 | not obvious |
| CI workflows | 0 | not obvious |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | CI workflow path not obvious; container/deploy path not obvious; test/eval path not obvious |
| security | security/policy surface not obvious; agent instruction files not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `mcp_tour/__init__.py`, `mcp_tour/server.py`, `mcp_tour/hosts/__init__.py`.
2. Trace execution through entrypoints: `mcp_tour/server.py`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 MCP integration for Korea Tourism Organization's API using Claude Desktop App with help from Cursor. 핵심 구조 신호는 Python, pyproject.toml, requirements.txt, README.md, mcp, pydantic이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, ci signal not obvious, license metadata missing, needs deeper structural scan입니다.
