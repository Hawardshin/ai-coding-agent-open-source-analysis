# jung-jin-lee/paldo-mcp Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

MCP server exposing NVIDIA Nemotron-Personas-Korea (7M Korean synthetic personas) to Claude Code

## 요약

- 조사 단위: `sources/jung-jin-lee__paldo-mcp` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 38 files, 9 directories, depth score 72, key references 9개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=packages/paldo-mcp/package.json, packages/paldo-mcp/paldo-mcp-0.3.0.tgz, packages/paldo-mcp/tsconfig.json이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 운영 보조 파일은 추가 확인 필요이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 9개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | jung-jin-lee/paldo-mcp |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | TypeScript |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/jung-jin-lee__paldo-mcp](../../../../sources/jung-jin-lee__paldo-mcp) |
| Existing report | [reports/korea-trending/repositories/jung-jin-lee__paldo-mcp.md](../../../korea-trending/repositories/jung-jin-lee__paldo-mcp.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 38 / 9 |
| Max observed depth | 5 |
| Top directories | .claude-plugin, examples, packages |
| Top extensions | .ts: 21, .json: 7, .md: 6, (none): 2, .lock: 1, .tgz: 1 |
| Source patterns | monorepo/workspace, api/server, agent/tool runtime, retrieval/vector path |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| packages/paldo-mcp | packages workspace | 25 |
| packages/core | packages workspace | 4 |
| examples | top-level component | 1 |
| packages | source boundary | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| build | package.json | build | bun run --filter '*' build |
| quality | package.json | typecheck | bun run --filter '*' typecheck |
| test | package.json | test | bun test |


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
| mcp | [packages/paldo-mcp/package.json](../../../../sources/jung-jin-lee__paldo-mcp/packages/paldo-mcp/package.json) | mcp signal |
| mcp | [packages/paldo-mcp/paldo-mcp-0.3.0.tgz](../../../../sources/jung-jin-lee__paldo-mcp/packages/paldo-mcp/paldo-mcp-0.3.0.tgz) | mcp signal |
| mcp | [packages/paldo-mcp/tsconfig.json](../../../../sources/jung-jin-lee__paldo-mcp/packages/paldo-mcp/tsconfig.json) | mcp signal |
| mcp | [packages/paldo-mcp/src/claude-config.ts](../../../../sources/jung-jin-lee__paldo-mcp/packages/paldo-mcp/src/claude-config.ts) | mcp signal |
| entrypoints | [packages/paldo-mcp/src/index.ts](../../../../sources/jung-jin-lee__paldo-mcp/packages/paldo-mcp/src/index.ts) | entrypoints signal |
| entrypoints | [packages/paldo-mcp/src/server.ts](../../../../sources/jung-jin-lee__paldo-mcp/packages/paldo-mcp/src/server.ts) | entrypoints signal |
| entrypoints | [packages/core/src/index.ts](../../../../sources/jung-jin-lee__paldo-mcp/packages/core/src/index.ts) | entrypoints signal |
| config | [package.json](../../../../sources/jung-jin-lee__paldo-mcp/package.json) | config signal |
| config | [packages/core/package.json](../../../../sources/jung-jin-lee__paldo-mcp/packages/core/package.json) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 3 | [packages/paldo-mcp/src/index.ts](../../../../sources/jung-jin-lee__paldo-mcp/packages/paldo-mcp/src/index.ts)<br>[packages/paldo-mcp/src/server.ts](../../../../sources/jung-jin-lee__paldo-mcp/packages/paldo-mcp/src/server.ts)<br>[packages/core/src/index.ts](../../../../sources/jung-jin-lee__paldo-mcp/packages/core/src/index.ts) |
| agentRuntime | 0 | not obvious |
| mcp | 19 | [packages/paldo-mcp/package.json](../../../../sources/jung-jin-lee__paldo-mcp/packages/paldo-mcp/package.json)<br>[packages/paldo-mcp/paldo-mcp-0.3.0.tgz](../../../../sources/jung-jin-lee__paldo-mcp/packages/paldo-mcp/paldo-mcp-0.3.0.tgz)<br>[packages/paldo-mcp/tsconfig.json](../../../../sources/jung-jin-lee__paldo-mcp/packages/paldo-mcp/tsconfig.json)<br>[packages/paldo-mcp/src/claude-config.ts](../../../../sources/jung-jin-lee__paldo-mcp/packages/paldo-mcp/src/claude-config.ts)<br>[packages/paldo-mcp/src/download.ts](../../../../sources/jung-jin-lee__paldo-mcp/packages/paldo-mcp/src/download.ts)<br>[packages/paldo-mcp/src/format.ts](../../../../sources/jung-jin-lee__paldo-mcp/packages/paldo-mcp/src/format.ts)<br>[packages/paldo-mcp/src/index.ts](../../../../sources/jung-jin-lee__paldo-mcp/packages/paldo-mcp/src/index.ts)<br>[packages/paldo-mcp/src/paths.ts](../../../../sources/jung-jin-lee__paldo-mcp/packages/paldo-mcp/src/paths.ts) |
| retrieval | 3 | [packages/paldo-mcp/src/index.ts](../../../../sources/jung-jin-lee__paldo-mcp/packages/paldo-mcp/src/index.ts)<br>[packages/paldo-mcp/src/embeddings/embed.ts](../../../../sources/jung-jin-lee__paldo-mcp/packages/paldo-mcp/src/embeddings/embed.ts)<br>[packages/core/src/index.ts](../../../../sources/jung-jin-lee__paldo-mcp/packages/core/src/index.ts) |
| spec | 0 | not obvious |
| eval | 0 | not obvious |
| security | 0 | not obvious |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 2 | [README.en.md](../../../../sources/jung-jin-lee__paldo-mcp/README.en.md)<br>[README.md](../../../../sources/jung-jin-lee__paldo-mcp/README.md) |
| config | 5 | [package.json](../../../../sources/jung-jin-lee__paldo-mcp/package.json)<br>[packages/paldo-mcp/package.json](../../../../sources/jung-jin-lee__paldo-mcp/packages/paldo-mcp/package.json)<br>[packages/paldo-mcp/tsconfig.json](../../../../sources/jung-jin-lee__paldo-mcp/packages/paldo-mcp/tsconfig.json)<br>[packages/core/package.json](../../../../sources/jung-jin-lee__paldo-mcp/packages/core/package.json)<br>[packages/core/tsconfig.json](../../../../sources/jung-jin-lee__paldo-mcp/packages/core/tsconfig.json) |


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

1. Start from key references: `packages/paldo-mcp/package.json`, `packages/paldo-mcp/paldo-mcp-0.3.0.tgz`, `packages/paldo-mcp/tsconfig.json`.
2. Trace execution through entrypoints: `packages/paldo-mcp/src/index.ts`, `packages/paldo-mcp/src/server.ts`, `packages/core/src/index.ts`.
3. Inspect retrieval/memory/indexing through: `packages/paldo-mcp/src/index.ts`, `packages/paldo-mcp/src/embeddings/embed.ts`, `packages/core/src/index.ts`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 MCP server exposing NVIDIA Nemotron Personas Korea 7M Korean synthetic personas to Claude Code. 핵심 구조 신호는 TypeScript, package.json, README.md, LICENSE, docs이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, ci signal not obvious, license metadata missing, needs deeper structural scan입니다.
