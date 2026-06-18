# bripin123/rag-memory-epf-mcp Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Project-local RAG memory MCP server — knowledge graph + multilingual vector + FTS5 in a single SQLite file. Per-project isolation, 30 MCP tools, codepoint-safe chunking (Korean/CJK/emoji).

## 요약

- 조사 단위: `sources/bripin123__rag-memory-epf-mcp` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 40 files, 16 directories, depth score 87, key references 11개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 mcp=src/tools/tool-registry.ts, specs/changes/phase3-mcp-sdk/proposal.md, specs/changes/phase3-mcp-sdk/tasks.md이고, 의존성 단서는 modelcontextprotocol, transformers, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 11개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | bripin123/rag-memory-epf-mcp |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | JavaScript |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/bripin123__rag-memory-epf-mcp](../../../../sources/bripin123__rag-memory-epf-mcp) |
| Existing report | [reports/korea-trending/repositories/bripin123__rag-memory-epf-mcp.md](../../../korea-trending/repositories/bripin123__rag-memory-epf-mcp.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 40 / 16 |
| Max observed depth | 4 |
| Top directories | docs, specs, src, test |
| Top extensions | .md: 15, .ts: 11, .mjs: 7, .json: 3, (none): 3, .yml: 1 |
| Source patterns | cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 13 |
| docs | documentation surface | 6 |
| specs | top-level component | 1 |
| test | validation surface | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| build | package.json | build | tsc && shx chmod +x dist/*.js |
| build | package.json | prepare | npm run build |
| serve-dev | package.json | watch | tsc --watch |
| test | package.json | verify:invariants | node test/chunk-invariants.test.mjs |
| test | package.json | verify:engine | node test/engine-smoke.test.mjs && node test/launch-smoke.test.mjs && node test/sync-atomicity.test.mjs && node test/dedup.test.mjs && node test/search-degradation.test.mjs |
| test | package.json | test | npm run build && npm run verify:invariants && npm run verify:engine |
| build | package.json | prepublishOnly | npm run build && npm run verify:invariants && npm run verify:engine |
| entrypoint | package.json bin | index.js | dist/index.js |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | modelcontextprotocol |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | transformers |
| webRuntime | none |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [src/tools/tool-registry.ts](../../../../sources/bripin123__rag-memory-epf-mcp/src/tools/tool-registry.ts) | mcp signal |
| mcp | [specs/changes/phase3-mcp-sdk/proposal.md](../../../../sources/bripin123__rag-memory-epf-mcp/specs/changes/phase3-mcp-sdk/proposal.md) | mcp signal |
| mcp | [specs/changes/phase3-mcp-sdk/tasks.md](../../../../sources/bripin123__rag-memory-epf-mcp/specs/changes/phase3-mcp-sdk/tasks.md) | mcp signal |
| agentRuntime | [src/tools/graph-analytics-tools.ts](../../../../sources/bripin123__rag-memory-epf-mcp/src/tools/graph-analytics-tools.ts) | agentRuntime signal |
| agentRuntime | [src/tools/graph-query-tools.ts](../../../../sources/bripin123__rag-memory-epf-mcp/src/tools/graph-query-tools.ts) | agentRuntime signal |
| agentRuntime | [src/tools/knowledge-graph-tools.ts](../../../../sources/bripin123__rag-memory-epf-mcp/src/tools/knowledge-graph-tools.ts) | agentRuntime signal |
| agentRuntime | [src/tools/migration-tools.ts](../../../../sources/bripin123__rag-memory-epf-mcp/src/tools/migration-tools.ts) | agentRuntime signal |
| config | [package.json](../../../../sources/bripin123__rag-memory-epf-mcp/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/bripin123__rag-memory-epf-mcp/tsconfig.json) | config signal |
| eval | [SPEC-syncDocumentFromFile.md](../../../../sources/bripin123__rag-memory-epf-mcp/SPEC-syncDocumentFromFile.md) | eval support |
| eval | [test/chunk-invariants.test.mjs](../../../../sources/bripin123__rag-memory-epf-mcp/test/chunk-invariants.test.mjs) | eval support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 7 | [src/tools/graph-analytics-tools.ts](../../../../sources/bripin123__rag-memory-epf-mcp/src/tools/graph-analytics-tools.ts)<br>[src/tools/graph-query-tools.ts](../../../../sources/bripin123__rag-memory-epf-mcp/src/tools/graph-query-tools.ts)<br>[src/tools/knowledge-graph-tools.ts](../../../../sources/bripin123__rag-memory-epf-mcp/src/tools/knowledge-graph-tools.ts)<br>[src/tools/migration-tools.ts](../../../../sources/bripin123__rag-memory-epf-mcp/src/tools/migration-tools.ts)<br>[src/tools/rag-tools.ts](../../../../sources/bripin123__rag-memory-epf-mcp/src/tools/rag-tools.ts)<br>[src/tools/tool-registry.ts](../../../../sources/bripin123__rag-memory-epf-mcp/src/tools/tool-registry.ts)<br>[src/tools/types.ts](../../../../sources/bripin123__rag-memory-epf-mcp/src/tools/types.ts) |
| mcp | 3 | [src/tools/tool-registry.ts](../../../../sources/bripin123__rag-memory-epf-mcp/src/tools/tool-registry.ts)<br>[specs/changes/phase3-mcp-sdk/proposal.md](../../../../sources/bripin123__rag-memory-epf-mcp/specs/changes/phase3-mcp-sdk/proposal.md)<br>[specs/changes/phase3-mcp-sdk/tasks.md](../../../../sources/bripin123__rag-memory-epf-mcp/specs/changes/phase3-mcp-sdk/tasks.md) |
| retrieval | 8 | [index.ts](../../../../sources/bripin123__rag-memory-epf-mcp/index.ts)<br>[test/chunk-invariants.test.mjs](../../../../sources/bripin123__rag-memory-epf-mcp/test/chunk-invariants.test.mjs)<br>[src/tools/graph-analytics-tools.ts](../../../../sources/bripin123__rag-memory-epf-mcp/src/tools/graph-analytics-tools.ts)<br>[src/tools/graph-query-tools.ts](../../../../sources/bripin123__rag-memory-epf-mcp/src/tools/graph-query-tools.ts)<br>[src/tools/knowledge-graph-tools.ts](../../../../sources/bripin123__rag-memory-epf-mcp/src/tools/knowledge-graph-tools.ts)<br>[src/tools/rag-tools.ts](../../../../sources/bripin123__rag-memory-epf-mcp/src/tools/rag-tools.ts)<br>[docs/superpowers/specs/2026-05-27-rag-memory-engine-reliability-design.md](../../../../sources/bripin123__rag-memory-epf-mcp/docs/superpowers/specs/2026-05-27-rag-memory-engine-reliability-design.md)<br>[docs/superpowers/plans/2026-05-27-rag-memory-engine-reliability.md](../../../../sources/bripin123__rag-memory-epf-mcp/docs/superpowers/plans/2026-05-27-rag-memory-engine-reliability.md) |
| spec | 2 | [SPEC-syncDocumentFromFile.md](../../../../sources/bripin123__rag-memory-epf-mcp/SPEC-syncDocumentFromFile.md)<br>[docs/superpowers/specs/2026-05-27-rag-memory-engine-reliability-design.md](../../../../sources/bripin123__rag-memory-epf-mcp/docs/superpowers/specs/2026-05-27-rag-memory-engine-reliability-design.md) |
| eval | 8 | [SPEC-syncDocumentFromFile.md](../../../../sources/bripin123__rag-memory-epf-mcp/SPEC-syncDocumentFromFile.md)<br>[test/chunk-invariants.test.mjs](../../../../sources/bripin123__rag-memory-epf-mcp/test/chunk-invariants.test.mjs)<br>[test/dedup.test.mjs](../../../../sources/bripin123__rag-memory-epf-mcp/test/dedup.test.mjs)<br>[test/engine-smoke.test.mjs](../../../../sources/bripin123__rag-memory-epf-mcp/test/engine-smoke.test.mjs)<br>[test/launch-smoke.test.mjs](../../../../sources/bripin123__rag-memory-epf-mcp/test/launch-smoke.test.mjs)<br>[test/search-degradation.test.mjs](../../../../sources/bripin123__rag-memory-epf-mcp/test/search-degradation.test.mjs)<br>[test/sync-atomicity.test.mjs](../../../../sources/bripin123__rag-memory-epf-mcp/test/sync-atomicity.test.mjs)<br>[test/helpers/engine-test-db.mjs](../../../../sources/bripin123__rag-memory-epf-mcp/test/helpers/engine-test-db.mjs) |
| security | 0 | not obvious |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 3 | [README.md](../../../../sources/bripin123__rag-memory-epf-mcp/README.md)<br>[docs/superpowers/specs/2026-05-27-rag-memory-engine-reliability-design.md](../../../../sources/bripin123__rag-memory-epf-mcp/docs/superpowers/specs/2026-05-27-rag-memory-engine-reliability-design.md)<br>[docs/superpowers/plans/2026-05-27-rag-memory-engine-reliability.md](../../../../sources/bripin123__rag-memory-epf-mcp/docs/superpowers/plans/2026-05-27-rag-memory-engine-reliability.md) |
| config | 2 | [package.json](../../../../sources/bripin123__rag-memory-epf-mcp/package.json)<br>[tsconfig.json](../../../../sources/bripin123__rag-memory-epf-mcp/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 8 | [SPEC-syncDocumentFromFile.md](../../../../sources/bripin123__rag-memory-epf-mcp/SPEC-syncDocumentFromFile.md)<br>[test/chunk-invariants.test.mjs](../../../../sources/bripin123__rag-memory-epf-mcp/test/chunk-invariants.test.mjs)<br>[test/dedup.test.mjs](../../../../sources/bripin123__rag-memory-epf-mcp/test/dedup.test.mjs)<br>[test/engine-smoke.test.mjs](../../../../sources/bripin123__rag-memory-epf-mcp/test/engine-smoke.test.mjs)<br>[test/launch-smoke.test.mjs](../../../../sources/bripin123__rag-memory-epf-mcp/test/launch-smoke.test.mjs)<br>[test/search-degradation.test.mjs](../../../../sources/bripin123__rag-memory-epf-mcp/test/search-degradation.test.mjs) |
| CI workflows | 0 | not obvious |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | CI workflow path not obvious; container/deploy path not obvious |
| security | security/policy surface not obvious; agent instruction files not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `src/tools/tool-registry.ts`, `specs/changes/phase3-mcp-sdk/proposal.md`, `specs/changes/phase3-mcp-sdk/tasks.md`.
2. Map agent/tool runtime through: `src/tools/graph-analytics-tools.ts`, `src/tools/graph-query-tools.ts`, `src/tools/knowledge-graph-tools.ts`.
3. Inspect retrieval/memory/indexing through: `index.ts`, `test/chunk-invariants.test.mjs`, `src/tools/graph-analytics-tools.ts`.
4. Verify behavior through test/eval files: `SPEC-syncDocumentFromFile.md`, `test/chunk-invariants.test.mjs`, `test/dedup.test.mjs`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Project local RAG memory MCP server — knowledge graph + multilingual vector + FTS5 in a single SQLite file. Per project . 핵심 구조 신호는 JavaScript, package.json, README.md, LICENSE, modelcontextprotocol, transformers이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 ci signal not obvious, license metadata missing, needs deeper structural scan입니다.
