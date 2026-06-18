# formulahendry/mcp-server-spec-driven-development Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Local clone structure analysis: 13 files, 2 directories.

## 요약

- 조사 단위: `sources/formulahendry__mcp-server-spec-driven-development` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 10 files, 1 directories, depth score 57, key references 5개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 entrypoints=server.json, src/index.ts, src/server.ts이고, 의존성 단서는 modelcontextprotocol, express, 검증/운영 단서는 운영 보조 파일은 추가 확인 필요이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 5개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | formulahendry/mcp-server-spec-driven-development |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | mixed |
| Language | TypeScript |
| Stars | 430 |
| Forks | 39 |
| License | MIT License |
| Maturity | solid |
| Evidence | deep-source+report |
| Source | [sources/formulahendry__mcp-server-spec-driven-development](../../../../sources/formulahendry__mcp-server-spec-driven-development) |
| Existing report | [reports/clone-structures/formulahendry__mcp-server-spec-driven-development.md](../../../clone-structures/formulahendry__mcp-server-spec-driven-development.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 10 / 1 |
| Max observed depth | 2 |
| Top directories | src |
| Top extensions | .json: 4, .ts: 3, (none): 2, .md: 1 |
| Source patterns | cli-first, api/server, retrieval/vector path |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 4 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| build | package.json | build | tsc && shx chmod +x dist/index.js |
| serve-dev | package.json | watch | tsc --watch |
| serve-dev | package.json | start | node ./dist/index.js |
| serve-dev | package.json | start:streamableHttp | node dist/streamableHttp.js |
| entrypoint | package.json bin | index.js | dist/index.js |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | modelcontextprotocol |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | express |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| entrypoints | [server.json](../../../../sources/formulahendry__mcp-server-spec-driven-development/server.json) | entrypoints signal |
| entrypoints | [src/index.ts](../../../../sources/formulahendry__mcp-server-spec-driven-development/src/index.ts) | entrypoints signal |
| entrypoints | [src/server.ts](../../../../sources/formulahendry__mcp-server-spec-driven-development/src/server.ts) | entrypoints signal |
| config | [package.json](../../../../sources/formulahendry__mcp-server-spec-driven-development/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/formulahendry__mcp-server-spec-driven-development/tsconfig.json) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 3 | [server.json](../../../../sources/formulahendry__mcp-server-spec-driven-development/server.json)<br>[src/index.ts](../../../../sources/formulahendry__mcp-server-spec-driven-development/src/index.ts)<br>[src/server.ts](../../../../sources/formulahendry__mcp-server-spec-driven-development/src/server.ts) |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 1 | [src/index.ts](../../../../sources/formulahendry__mcp-server-spec-driven-development/src/index.ts) |
| spec | 0 | not obvious |
| eval | 0 | not obvious |
| security | 0 | not obvious |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 1 | [README.md](../../../../sources/formulahendry__mcp-server-spec-driven-development/README.md) |
| config | 2 | [package.json](../../../../sources/formulahendry__mcp-server-spec-driven-development/package.json)<br>[tsconfig.json](../../../../sources/formulahendry__mcp-server-spec-driven-development/tsconfig.json) |


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

1. Start from key references: `server.json`, `src/index.ts`, `src/server.ts`.
2. Trace execution through entrypoints: `server.json`, `src/index.ts`, `src/server.ts`.
3. Inspect retrieval/memory/indexing through: `src/index.ts`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Local clone structure analysis 13 files, 2 directories.. 핵심 구조 신호는 TypeScript, package.json, README.md, LICENSE, modelcontextprotocol, docs이며, deep-source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

mixed 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, ci signal not obvious입니다.
