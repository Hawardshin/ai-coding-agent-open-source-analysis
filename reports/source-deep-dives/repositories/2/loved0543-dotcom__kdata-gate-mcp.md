# loved0543-dotcom/kdata-gate-mcp Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

MCP server: Korean market data (K-beauty/K-food products, Naver trends, stocks, DART, real estate) in English JSON for AI agents

## 요약

- 조사 단위: `sources/loved0543-dotcom__kdata-gate-mcp` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 5 files, 2 directories, depth score 50, key references 4개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=.github/workflows/publish-mcp.yml이고, 의존성 단서는 modelcontextprotocol, 검증/운영 단서는 CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 4개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | loved0543-dotcom/kdata-gate-mcp |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | JavaScript |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/loved0543-dotcom__kdata-gate-mcp](../../../../sources/loved0543-dotcom__kdata-gate-mcp) |
| Existing report | [reports/korea-trending/repositories/loved0543-dotcom__kdata-gate-mcp.md](../../../korea-trending/repositories/loved0543-dotcom__kdata-gate-mcp.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 5 / 2 |
| Max observed depth | 3 |
| Top directories | .github |
| Top extensions | .json: 2, .md: 1, .mjs: 1, .yml: 1 |
| Source patterns | cli-first, api/server, agent/tool runtime |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| .github | ci surface | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| entrypoint | package.json bin | server.mjs | server.mjs |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | modelcontextprotocol |
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
| mcp | [.github/workflows/publish-mcp.yml](../../../../sources/loved0543-dotcom__kdata-gate-mcp/.github/workflows/publish-mcp.yml) | mcp signal |
| entrypoints | [server.json](../../../../sources/loved0543-dotcom__kdata-gate-mcp/server.json) | entrypoints signal |
| entrypoints | [server.mjs](../../../../sources/loved0543-dotcom__kdata-gate-mcp/server.mjs) | entrypoints signal |
| config | [package.json](../../../../sources/loved0543-dotcom__kdata-gate-mcp/package.json) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 2 | [server.json](../../../../sources/loved0543-dotcom__kdata-gate-mcp/server.json)<br>[server.mjs](../../../../sources/loved0543-dotcom__kdata-gate-mcp/server.mjs) |
| agentRuntime | 0 | not obvious |
| mcp | 1 | [.github/workflows/publish-mcp.yml](../../../../sources/loved0543-dotcom__kdata-gate-mcp/.github/workflows/publish-mcp.yml) |
| retrieval | 0 | not obvious |
| spec | 0 | not obvious |
| eval | 0 | not obvious |
| security | 0 | not obvious |
| ci | 1 | [.github/workflows/publish-mcp.yml](../../../../sources/loved0543-dotcom__kdata-gate-mcp/.github/workflows/publish-mcp.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 1 | [README.md](../../../../sources/loved0543-dotcom__kdata-gate-mcp/README.md) |
| config | 1 | [package.json](../../../../sources/loved0543-dotcom__kdata-gate-mcp/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 0 | not obvious |
| CI workflows | 1 | [.github/workflows/publish-mcp.yml](../../../../sources/loved0543-dotcom__kdata-gate-mcp/.github/workflows/publish-mcp.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious; test/eval path not obvious |
| security | security/policy surface not obvious; agent instruction files not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `.github/workflows/publish-mcp.yml`, `server.json`, `server.mjs`.
2. Trace execution through entrypoints: `server.json`, `server.mjs`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 MCP server Korean market data K beauty/K food products, Naver trends, stocks, DART, real estate in English JSON for AI a. 핵심 구조 신호는 JavaScript, package.json, README.md, modelcontextprotocol, ci, docs이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
