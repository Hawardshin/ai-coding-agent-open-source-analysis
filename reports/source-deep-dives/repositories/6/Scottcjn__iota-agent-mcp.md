# Scottcjn/iota-agent-mcp Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

MCP server for IOTA blockchain — 20 tools for AI agent integration (wallet, Move CLI, on-chain queries via Model Context Protocol)

## 요약

- 조사 단위: `sources/Scottcjn__iota-agent-mcp` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 15 files, 3 directories, depth score 68, key references 7개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=SKILL.md, __tests__/tools.test.ts이고, 의존성 단서는 modelcontextprotocol, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 7개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | Scottcjn/iota-agent-mcp |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | JavaScript |
| Stars | 58 |
| Forks | 12 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/Scottcjn__iota-agent-mcp](../../../../sources/Scottcjn__iota-agent-mcp) |
| Existing report | [reports/global-trending/repositories/Scottcjn__iota-agent-mcp.md](../../../global-trending/repositories/Scottcjn__iota-agent-mcp.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 15 / 3 |
| Max observed depth | 2 |
| Top directories | __tests__, .github, src |
| Top extensions | .md: 4, .ts: 4, .json: 3, (none): 2, .js: 1, .yml: 1 |
| Source patterns | cli-first, agent/tool runtime, retrieval/vector path, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 3 |
| __tests__ | validation surface | 1 |
| .github | ci surface | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| build | package.json | build | tsc |
| serve-dev | package.json | start | node dist/index.js |
| serve-dev | package.json | dev | tsx src/index.ts |
| test | package.json | test | node --experimental-vm-modules node_modules/.bin/jest --config jest.config.js |
| quality | package.json | lint | tsc --noEmit |
| build | package.json | prepublishOnly | npm run build |
| entrypoint | package.json bin | index.js | dist/index.js |


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
| agentRuntime | [SKILL.md](../../../../sources/Scottcjn__iota-agent-mcp/SKILL.md) | agentRuntime signal |
| agentRuntime | [__tests__/tools.test.ts](../../../../sources/Scottcjn__iota-agent-mcp/__tests__/tools.test.ts) | agentRuntime signal |
| entrypoints | [src/index.ts](../../../../sources/Scottcjn__iota-agent-mcp/src/index.ts) | entrypoints signal |
| config | [package.json](../../../../sources/Scottcjn__iota-agent-mcp/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/Scottcjn__iota-agent-mcp/tsconfig.json) | config signal |
| eval | [__tests__/helpers.test.ts](../../../../sources/Scottcjn__iota-agent-mcp/__tests__/helpers.test.ts) | eval support |
| eval | [__tests__/tokenize.test.ts](../../../../sources/Scottcjn__iota-agent-mcp/__tests__/tokenize.test.ts) | eval support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 1 | [src/index.ts](../../../../sources/Scottcjn__iota-agent-mcp/src/index.ts) |
| agentRuntime | 2 | [SKILL.md](../../../../sources/Scottcjn__iota-agent-mcp/SKILL.md)<br>[__tests__/tools.test.ts](../../../../sources/Scottcjn__iota-agent-mcp/__tests__/tools.test.ts) |
| mcp | 0 | not obvious |
| retrieval | 1 | [src/index.ts](../../../../sources/Scottcjn__iota-agent-mcp/src/index.ts) |
| spec | 0 | not obvious |
| eval | 3 | [__tests__/helpers.test.ts](../../../../sources/Scottcjn__iota-agent-mcp/__tests__/helpers.test.ts)<br>[__tests__/tokenize.test.ts](../../../../sources/Scottcjn__iota-agent-mcp/__tests__/tokenize.test.ts)<br>[__tests__/tools.test.ts](../../../../sources/Scottcjn__iota-agent-mcp/__tests__/tools.test.ts) |
| security | 0 | not obvious |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 1 | [README.md](../../../../sources/Scottcjn__iota-agent-mcp/README.md) |
| config | 2 | [package.json](../../../../sources/Scottcjn__iota-agent-mcp/package.json)<br>[tsconfig.json](../../../../sources/Scottcjn__iota-agent-mcp/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 3 | [__tests__/helpers.test.ts](../../../../sources/Scottcjn__iota-agent-mcp/__tests__/helpers.test.ts)<br>[__tests__/tokenize.test.ts](../../../../sources/Scottcjn__iota-agent-mcp/__tests__/tokenize.test.ts)<br>[__tests__/tools.test.ts](../../../../sources/Scottcjn__iota-agent-mcp/__tests__/tools.test.ts) |
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

1. Start from key references: `SKILL.md`, `__tests__/tools.test.ts`, `src/index.ts`.
2. Trace execution through entrypoints: `src/index.ts`.
3. Map agent/tool runtime through: `SKILL.md`, `__tests__/tools.test.ts`.
4. Inspect retrieval/memory/indexing through: `src/index.ts`.
5. Verify behavior through test/eval files: `__tests__/helpers.test.ts`, `__tests__/tokenize.test.ts`, `__tests__/tools.test.ts`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 MCP server for IOTA blockchain — 20 tools for AI agent integration wallet, Move CLI, on chain queries via Model Context . 핵심 구조 신호는 JavaScript, package.json, README.md, LICENSE, modelcontextprotocol, tests이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
