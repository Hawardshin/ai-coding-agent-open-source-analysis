# yjhann33-design/korea-stock-insight-mcp Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

MCP server for Korean stock market analysis (DART disclosures + KRX prices). English-first, drop-in for Claude Desktop / Cursor.

## 요약

- 조사 단위: `sources/yjhann33-design__korea-stock-insight-mcp` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 12 files, 1 directories, depth score 59, key references 5개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 entrypoints=server.json, server.py이고, 의존성 단서는 claude, mcp, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 5개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | yjhann33-design/korea-stock-insight-mcp |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | Python |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/yjhann33-design__korea-stock-insight-mcp](../../../../sources/yjhann33-design__korea-stock-insight-mcp) |
| Existing report | [reports/korea-trending/repositories/yjhann33-design__korea-stock-insight-mcp.md](../../../korea-trending/repositories/yjhann33-design__korea-stock-insight-mcp.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 12 / 1 |
| Max observed depth | 2 |
| Top directories | scripts |
| Top extensions | .py: 5, .md: 2, (none): 2, .example: 1, .json: 1, .toml: 1 |
| Source patterns | cli-first, api/server, spec/docs-driven, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| scripts | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | pyproject.toml | korea-stock-insight-mcp | korea-stock-insight-mcp |


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
| entrypoints | [server.json](../../../../sources/yjhann33-design__korea-stock-insight-mcp/server.json) | entrypoints signal |
| entrypoints | [server.py](../../../../sources/yjhann33-design__korea-stock-insight-mcp/server.py) | entrypoints signal |
| config | [pyproject.toml](../../../../sources/yjhann33-design__korea-stock-insight-mcp/pyproject.toml) | config signal |
| eval | [SPEC.md](../../../../sources/yjhann33-design__korea-stock-insight-mcp/SPEC.md) | eval support |
| eval | [test_smoke.py](../../../../sources/yjhann33-design__korea-stock-insight-mcp/test_smoke.py) | eval support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 2 | [server.json](../../../../sources/yjhann33-design__korea-stock-insight-mcp/server.json)<br>[server.py](../../../../sources/yjhann33-design__korea-stock-insight-mcp/server.py) |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 0 | not obvious |
| spec | 1 | [SPEC.md](../../../../sources/yjhann33-design__korea-stock-insight-mcp/SPEC.md) |
| eval | 2 | [SPEC.md](../../../../sources/yjhann33-design__korea-stock-insight-mcp/SPEC.md)<br>[test_smoke.py](../../../../sources/yjhann33-design__korea-stock-insight-mcp/test_smoke.py) |
| security | 0 | not obvious |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 1 | [README.md](../../../../sources/yjhann33-design__korea-stock-insight-mcp/README.md) |
| config | 1 | [pyproject.toml](../../../../sources/yjhann33-design__korea-stock-insight-mcp/pyproject.toml) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 2 | [SPEC.md](../../../../sources/yjhann33-design__korea-stock-insight-mcp/SPEC.md)<br>[test_smoke.py](../../../../sources/yjhann33-design__korea-stock-insight-mcp/test_smoke.py) |
| CI workflows | 0 | not obvious |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | CI workflow path not obvious; container/deploy path not obvious |
| security | security/policy surface not obvious; agent instruction files not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `server.json`, `server.py`, `pyproject.toml`.
2. Trace execution through entrypoints: `server.json`, `server.py`.
3. Verify behavior through test/eval files: `SPEC.md`, `test_smoke.py`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 MCP server for Korean stock market analysis DART disclosures + KRX prices . English first, drop in for Claude Desktop / . 핵심 구조 신호는 Python, pyproject.toml, README.md, LICENSE, mcp, docs이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, ci signal not obvious, license metadata missing, needs deeper structural scan입니다.
