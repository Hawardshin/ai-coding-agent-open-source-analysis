# closermethod/apac-compliance-mcp Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

APAC sales + employment compliance MCP for AI agents. Singapore, Japan, Australia, India, Hong Kong, South Korea. PDPA, APP, employment law, B2B opt-out rules.

## 요약

- 조사 단위: `sources/closermethod__apac-compliance-mcp` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 10 files, 1 directories, depth score 46, key references 4개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, containerized deploy 구조로 읽힌다. 핵심 소스 근거는 entrypoints=src/main.ts이고, 의존성 단서는 modelcontextprotocol, 검증/운영 단서는 container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 4개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | closermethod/apac-compliance-mcp |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | TypeScript |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/closermethod__apac-compliance-mcp](../../../../sources/closermethod__apac-compliance-mcp) |
| Existing report | [reports/korea-trending/repositories/closermethod__apac-compliance-mcp.md](../../../korea-trending/repositories/closermethod__apac-compliance-mcp.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 10 / 1 |
| Max observed depth | 2 |
| Top directories | src |
| Top extensions | .json: 6, (none): 2, .md: 1, .ts: 1 |
| Source patterns | cli-first, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 2 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| build | package.json | build | tsc |
| serve-dev | package.json | start | node dist/main.js |
| serve-dev | package.json | dev | npx ts-node src/main.ts |


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
| entrypoints | [src/main.ts](../../../../sources/closermethod__apac-compliance-mcp/src/main.ts) | entrypoints signal |
| config | [package.json](../../../../sources/closermethod__apac-compliance-mcp/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/closermethod__apac-compliance-mcp/tsconfig.json) | config signal |
| container | [Dockerfile](../../../../sources/closermethod__apac-compliance-mcp/Dockerfile) | container support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 1 | [src/main.ts](../../../../sources/closermethod__apac-compliance-mcp/src/main.ts) |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 0 | not obvious |
| spec | 0 | not obvious |
| eval | 0 | not obvious |
| security | 0 | not obvious |
| ci | 0 | not obvious |
| container | 1 | [Dockerfile](../../../../sources/closermethod__apac-compliance-mcp/Dockerfile) |
| instruction | 0 | not obvious |
| docs | 1 | [README.md](../../../../sources/closermethod__apac-compliance-mcp/README.md) |
| config | 2 | [package.json](../../../../sources/closermethod__apac-compliance-mcp/package.json)<br>[tsconfig.json](../../../../sources/closermethod__apac-compliance-mcp/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 0 | not obvious |
| CI workflows | 0 | not obvious |
| Containers / deploy | 1 | [Dockerfile](../../../../sources/closermethod__apac-compliance-mcp/Dockerfile) |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | CI workflow path not obvious; test/eval path not obvious |
| security | security/policy surface not obvious; agent instruction files not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `src/main.ts`, `package.json`, `tsconfig.json`.
2. Trace execution through entrypoints: `src/main.ts`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 APAC sales + employment compliance MCP for AI agents. Singapore, Japan, Australia, India, Hong Kong, South Korea. PDPA, . 핵심 구조 신호는 TypeScript, package.json, Dockerfile, README.md, modelcontextprotocol, docs이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, ci signal not obvious, license metadata missing, needs deeper structural scan입니다.
