# KM-it-ops/memory-mcp Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Shared-brain MCP server: read/search/write one LLM-Wiki memory across Claude Code, Cursor & Codex (stdio + authenticated HTTP hub)

## 요약

- 조사 단위: `sources/KM-it-ops__memory-mcp` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 27 files, 5 directories, depth score 79, key references 8개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 api/server, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=test/memory-read.test.ts, test/memory-write.test.ts, src/memory.ts이고, 의존성 단서는 modelcontextprotocol, express, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 8개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | KM-it-ops/memory-mcp |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | TypeScript |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/KM-it-ops__memory-mcp](../../../../sources/KM-it-ops__memory-mcp) |
| Existing report | [reports/korea-trending/repositories/KM-it-ops__memory-mcp.md](../../../korea-trending/repositories/KM-it-ops__memory-mcp.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 27 / 5 |
| Max observed depth | 3 |
| Top directories | scripts, src, test, wiki-seeds |
| Top extensions | .ts: 17, .md: 4, .json: 3, (none): 2, .mts: 1 |
| Source patterns | api/server, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 5 |
| scripts | top-level component | 1 |
| test | validation surface | 1 |
| wiki-seeds | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| serve-dev | package.json | serve | tsx src/server.ts |
| serve-dev | package.json | serve:http | tsx src/http.ts |
| quality | package.json | typecheck | tsc --noEmit |
| test | package.json | test | vitest run |


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
| agentRuntime | [test/memory-read.test.ts](../../../../sources/KM-it-ops__memory-mcp/test/memory-read.test.ts) | agentRuntime signal |
| agentRuntime | [test/memory-write.test.ts](../../../../sources/KM-it-ops__memory-mcp/test/memory-write.test.ts) | agentRuntime signal |
| agentRuntime | [src/memory.ts](../../../../sources/KM-it-ops__memory-mcp/src/memory.ts) | agentRuntime signal |
| entrypoints | [src/server.ts](../../../../sources/KM-it-ops__memory-mcp/src/server.ts) | entrypoints signal |
| config | [package.json](../../../../sources/KM-it-ops__memory-mcp/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/KM-it-ops__memory-mcp/tsconfig.json) | config signal |
| eval | [test/auth.test.ts](../../../../sources/KM-it-ops__memory-mcp/test/auth.test.ts) | eval support |
| eval | [test/frontmatter.test.ts](../../../../sources/KM-it-ops__memory-mcp/test/frontmatter.test.ts) | eval support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 1 | [src/server.ts](../../../../sources/KM-it-ops__memory-mcp/src/server.ts) |
| agentRuntime | 3 | [test/memory-read.test.ts](../../../../sources/KM-it-ops__memory-mcp/test/memory-read.test.ts)<br>[test/memory-write.test.ts](../../../../sources/KM-it-ops__memory-mcp/test/memory-write.test.ts)<br>[src/memory.ts](../../../../sources/KM-it-ops__memory-mcp/src/memory.ts) |
| mcp | 0 | not obvious |
| retrieval | 5 | [wiki-seeds/README.md](../../../../sources/KM-it-ops__memory-mcp/wiki-seeds/README.md)<br>[wiki-seeds/project/masked-signal-github-brand-rollout.md](../../../../sources/KM-it-ops__memory-mcp/wiki-seeds/project/masked-signal-github-brand-rollout.md)<br>[test/memory-read.test.ts](../../../../sources/KM-it-ops__memory-mcp/test/memory-read.test.ts)<br>[test/memory-write.test.ts](../../../../sources/KM-it-ops__memory-mcp/test/memory-write.test.ts)<br>[src/memory.ts](../../../../sources/KM-it-ops__memory-mcp/src/memory.ts) |
| spec | 0 | not obvious |
| eval | 8 | [test/auth.test.ts](../../../../sources/KM-it-ops__memory-mcp/test/auth.test.ts)<br>[test/frontmatter.test.ts](../../../../sources/KM-it-ops__memory-mcp/test/frontmatter.test.ts)<br>[test/http.test.ts](../../../../sources/KM-it-ops__memory-mcp/test/http.test.ts)<br>[test/lock.test.ts](../../../../sources/KM-it-ops__memory-mcp/test/lock.test.ts)<br>[test/memory-read.test.ts](../../../../sources/KM-it-ops__memory-mcp/test/memory-read.test.ts)<br>[test/memory-write.test.ts](../../../../sources/KM-it-ops__memory-mcp/test/memory-write.test.ts)<br>[test/scan.test.ts](../../../../sources/KM-it-ops__memory-mcp/test/scan.test.ts)<br>[test/search.test.ts](../../../../sources/KM-it-ops__memory-mcp/test/search.test.ts) |
| security | 2 | [test/auth.test.ts](../../../../sources/KM-it-ops__memory-mcp/test/auth.test.ts)<br>[src/auth.ts](../../../../sources/KM-it-ops__memory-mcp/src/auth.ts) |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 2 | [README.md](../../../../sources/KM-it-ops__memory-mcp/README.md)<br>[wiki-seeds/README.md](../../../../sources/KM-it-ops__memory-mcp/wiki-seeds/README.md) |
| config | 2 | [package.json](../../../../sources/KM-it-ops__memory-mcp/package.json)<br>[tsconfig.json](../../../../sources/KM-it-ops__memory-mcp/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 8 | [test/auth.test.ts](../../../../sources/KM-it-ops__memory-mcp/test/auth.test.ts)<br>[test/frontmatter.test.ts](../../../../sources/KM-it-ops__memory-mcp/test/frontmatter.test.ts)<br>[test/http.test.ts](../../../../sources/KM-it-ops__memory-mcp/test/http.test.ts)<br>[test/lock.test.ts](../../../../sources/KM-it-ops__memory-mcp/test/lock.test.ts)<br>[test/memory-read.test.ts](../../../../sources/KM-it-ops__memory-mcp/test/memory-read.test.ts)<br>[test/memory-write.test.ts](../../../../sources/KM-it-ops__memory-mcp/test/memory-write.test.ts) |
| CI workflows | 0 | not obvious |
| Containers / deploy | 0 | not obvious |
| Security / policy | 2 | [test/auth.test.ts](../../../../sources/KM-it-ops__memory-mcp/test/auth.test.ts)<br>[src/auth.ts](../../../../sources/KM-it-ops__memory-mcp/src/auth.ts) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | CI workflow path not obvious; container/deploy path not obvious |
| security | agent instruction files not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `test/memory-read.test.ts`, `test/memory-write.test.ts`, `src/memory.ts`.
2. Trace execution through entrypoints: `src/server.ts`.
3. Map agent/tool runtime through: `test/memory-read.test.ts`, `test/memory-write.test.ts`, `src/memory.ts`.
4. Inspect retrieval/memory/indexing through: `wiki-seeds/README.md`, `wiki-seeds/project/masked-signal-github-brand-rollout.md`, `test/memory-read.test.ts`.
5. Verify behavior through test/eval files: `test/auth.test.ts`, `test/frontmatter.test.ts`, `test/http.test.ts`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Shared brain MCP server read/search/write one LLM Wiki memory across Claude Code, Cursor & Codex stdio + authenticated H. 핵심 구조 신호는 TypeScript, package.json, README.md, LICENSE, modelcontextprotocol, tests이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 ci signal not obvious, license metadata missing, needs deeper structural scan입니다.
