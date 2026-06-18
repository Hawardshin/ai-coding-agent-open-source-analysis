# dangamsoft/cafe-mcp Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Korean Saju (Four Pillars) MCP server for Claude, ChatGPT, and AI agents

## 요약

- 조사 단위: `sources/dangamsoft__cafe-mcp` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 18 files, 4 directories, depth score 63, key references 4개입니다.
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


## Repository Context

| Field | Value |
| --- | --- |
| Repository | dangamsoft/cafe-mcp |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | JavaScript |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/dangamsoft__cafe-mcp](../../../../sources/dangamsoft__cafe-mcp) |
| Existing report | [reports/korea-trending/repositories/dangamsoft__cafe-mcp.md](../../../korea-trending/repositories/dangamsoft__cafe-mcp.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 18 / 4 |
| Max observed depth | 3 |
| Top directories | .github, ontology |
| Top extensions | .ttl: 8, .json: 3, .md: 3, (none): 2, .js: 1, .yml: 1 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| .github | ci surface | 1 |
| ontology | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| entrypoint | package.json bin | index.js | index.js |


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
| mcp | [.github/workflows/publish-mcp.yml](../../../../sources/dangamsoft__cafe-mcp/.github/workflows/publish-mcp.yml) | mcp signal |
| entrypoints | [server.json](../../../../sources/dangamsoft__cafe-mcp/server.json) | entrypoints signal |
| config | [package.json](../../../../sources/dangamsoft__cafe-mcp/package.json) | config signal |
| manifest-entrypoint | [index.js](../../../../sources/dangamsoft__cafe-mcp/index.js) | package manifest entrypoint |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 1 | [server.json](../../../../sources/dangamsoft__cafe-mcp/server.json) |
| agentRuntime | 0 | not obvious |
| mcp | 1 | [.github/workflows/publish-mcp.yml](../../../../sources/dangamsoft__cafe-mcp/.github/workflows/publish-mcp.yml) |
| retrieval | 1 | [index.js](../../../../sources/dangamsoft__cafe-mcp/index.js) |
| spec | 0 | not obvious |
| eval | 0 | not obvious |
| security | 0 | not obvious |
| ci | 1 | [.github/workflows/publish-mcp.yml](../../../../sources/dangamsoft__cafe-mcp/.github/workflows/publish-mcp.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 2 | [README.md](../../../../sources/dangamsoft__cafe-mcp/README.md)<br>[ontology/README.md](../../../../sources/dangamsoft__cafe-mcp/ontology/README.md) |
| config | 1 | [package.json](../../../../sources/dangamsoft__cafe-mcp/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 0 | not obvious |
| CI workflows | 1 | [.github/workflows/publish-mcp.yml](../../../../sources/dangamsoft__cafe-mcp/.github/workflows/publish-mcp.yml) |
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

1. Start from key references: `.github/workflows/publish-mcp.yml`, `server.json`, `package.json`.
2. Trace execution through entrypoints: `server.json`.
3. Inspect retrieval/memory/indexing through: `index.js`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Korean Saju Four Pillars MCP server for Claude, ChatGPT, and AI agents. 핵심 구조 신호는 JavaScript, package.json, README.md, LICENSE, modelcontextprotocol, ci이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
