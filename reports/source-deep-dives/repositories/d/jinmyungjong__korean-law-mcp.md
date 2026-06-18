# jinmyungjong/korean-law-mcp Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

한국 법령 검색 MCP 서버

## 요약

- 조사 단위: `sources/jinmyungjong__korean-law-mcp` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 3 files, 2 directories, depth score 39, key references 3개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 mcp=korean-law-mcp-render/package.json, korean-law-mcp-render/render.yaml, korean-law-mcp-render/src/index.js이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 운영 보조 파일은 추가 확인 필요이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 3개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | jinmyungjong/korean-law-mcp |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | JavaScript |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | watchlist |
| Evidence | source+report |
| Source | [sources/jinmyungjong__korean-law-mcp](../../../../sources/jinmyungjong__korean-law-mcp) |
| Existing report | [reports/korea-trending/repositories/jinmyungjong__korean-law-mcp.md](../../../korea-trending/repositories/jinmyungjong__korean-law-mcp.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 3 / 2 |
| Max observed depth | 3 |
| Top directories | korean-law-mcp-render |
| Top extensions | .js: 1, .json: 1, .yaml: 1 |
| Source patterns | agent/tool runtime, retrieval/vector path |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| korean-law-mcp-render | top-level component | 1 |


## How It Runs

_No command surface extracted from root manifests._


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
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
| mcp | [korean-law-mcp-render/package.json](../../../../sources/jinmyungjong__korean-law-mcp/korean-law-mcp-render/package.json) | mcp signal |
| mcp | [korean-law-mcp-render/render.yaml](../../../../sources/jinmyungjong__korean-law-mcp/korean-law-mcp-render/render.yaml) | mcp signal |
| mcp | [korean-law-mcp-render/src/index.js](../../../../sources/jinmyungjong__korean-law-mcp/korean-law-mcp-render/src/index.js) | mcp signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 1 | [korean-law-mcp-render/src/index.js](../../../../sources/jinmyungjong__korean-law-mcp/korean-law-mcp-render/src/index.js) |
| agentRuntime | 0 | not obvious |
| mcp | 3 | [korean-law-mcp-render/package.json](../../../../sources/jinmyungjong__korean-law-mcp/korean-law-mcp-render/package.json)<br>[korean-law-mcp-render/render.yaml](../../../../sources/jinmyungjong__korean-law-mcp/korean-law-mcp-render/render.yaml)<br>[korean-law-mcp-render/src/index.js](../../../../sources/jinmyungjong__korean-law-mcp/korean-law-mcp-render/src/index.js) |
| retrieval | 1 | [korean-law-mcp-render/src/index.js](../../../../sources/jinmyungjong__korean-law-mcp/korean-law-mcp-render/src/index.js) |
| spec | 0 | not obvious |
| eval | 0 | not obvious |
| security | 0 | not obvious |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 0 | not obvious |
| config | 1 | [korean-law-mcp-render/package.json](../../../../sources/jinmyungjong__korean-law-mcp/korean-law-mcp-render/package.json) |


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
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `korean-law-mcp-render/package.json`, `korean-law-mcp-render/render.yaml`, `korean-law-mcp-render/src/index.js`.
2. Trace execution through entrypoints: `korean-law-mcp-render/src/index.js`.
3. Inspect retrieval/memory/indexing through: `korean-law-mcp-render/src/index.js`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 한국 법령 검색 MCP 서버. 핵심 구조 신호는 JavaScript이며, source+report 근거 수준으로 watchlist 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, ci signal not obvious, license metadata missing, needs deeper structural scan입니다.
