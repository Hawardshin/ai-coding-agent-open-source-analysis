# treesoop/hwp-mcp Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

MCP server for reading and writing HWP/HWPX (Korean Hangul) documents — built on rhwp. 34 tools, Claude/Cursor/ChatGPT compatible.

## 요약

- 조사 단위: `sources/treesoop__hwp-mcp` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 45 files, 9 directories, depth score 90, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=docs/superpowers/specs/2026-04-29-hwp-mcp-rhwp-rebuild-design.md, docs/superpowers/plans/2026-04-29-hwp-mcp-rhwp-rebuild.md이고, 의존성 단서는 modelcontextprotocol, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | treesoop/hwp-mcp |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | TypeScript |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/treesoop__hwp-mcp](../../../../sources/treesoop__hwp-mcp) |
| Existing report | [reports/korea-trending/repositories/treesoop__hwp-mcp.md](../../../korea-trending/repositories/treesoop__hwp-mcp.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 45 / 9 |
| Max observed depth | 4 |
| Top directories | docs, src, test |
| Top extensions | .ts: 31, .hwp: 5, .json: 3, .md: 3, (none): 2, .hwpx: 1 |
| Source patterns | cli-first, api/server, agent/tool runtime, spec/docs-driven, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 10 |
| docs | documentation surface | 6 |
| test | validation surface | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| build | package.json | build | tsc -p tsconfig.json |
| serve-dev | package.json | start | node dist/server.js |
| serve-dev | package.json | dev | tsx src/server.ts |
| test | package.json | test | vitest run |
| test | package.json | test:watch | vitest |
| test | package.json | build:fixtures | tsx test/fixtures/build-fixtures.ts |
| test | package.json | prepublishOnly | npm run build && npm test |
| entrypoint | package.json bin | server.js | dist/server.js |


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
| mcp | [docs/superpowers/specs/2026-04-29-hwp-mcp-rhwp-rebuild-design.md](../../../../sources/treesoop__hwp-mcp/docs/superpowers/specs/2026-04-29-hwp-mcp-rhwp-rebuild-design.md) | mcp signal |
| mcp | [docs/superpowers/plans/2026-04-29-hwp-mcp-rhwp-rebuild.md](../../../../sources/treesoop__hwp-mcp/docs/superpowers/plans/2026-04-29-hwp-mcp-rhwp-rebuild.md) | mcp signal |
| agentRuntime | [test/tools.advanced.test.ts](../../../../sources/treesoop__hwp-mcp/test/tools.advanced.test.ts) | agentRuntime signal |
| agentRuntime | [test/tools.edit.test.ts](../../../../sources/treesoop__hwp-mcp/test/tools.edit.test.ts) | agentRuntime signal |
| agentRuntime | [test/tools.images.test.ts](../../../../sources/treesoop__hwp-mcp/test/tools.images.test.ts) | agentRuntime signal |
| agentRuntime | [test/tools.read.test.ts](../../../../sources/treesoop__hwp-mcp/test/tools.read.test.ts) | agentRuntime signal |
| entrypoints | [test/server.bin-symlink.test.ts](../../../../sources/treesoop__hwp-mcp/test/server.bin-symlink.test.ts) | entrypoints signal |
| entrypoints | [test/server.smoke.test.ts](../../../../sources/treesoop__hwp-mcp/test/server.smoke.test.ts) | entrypoints signal |
| entrypoints | [src/server.ts](../../../../sources/treesoop__hwp-mcp/src/server.ts) | entrypoints signal |
| config | [package.json](../../../../sources/treesoop__hwp-mcp/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/treesoop__hwp-mcp/tsconfig.json) | config signal |
| eval | [test/core.document.open.test.ts](../../../../sources/treesoop__hwp-mcp/test/core.document.open.test.ts) | eval support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 3 | [test/server.bin-symlink.test.ts](../../../../sources/treesoop__hwp-mcp/test/server.bin-symlink.test.ts)<br>[test/server.smoke.test.ts](../../../../sources/treesoop__hwp-mcp/test/server.smoke.test.ts)<br>[src/server.ts](../../../../sources/treesoop__hwp-mcp/src/server.ts) |
| agentRuntime | 15 | [test/tools.advanced.test.ts](../../../../sources/treesoop__hwp-mcp/test/tools.advanced.test.ts)<br>[test/tools.edit.test.ts](../../../../sources/treesoop__hwp-mcp/test/tools.edit.test.ts)<br>[test/tools.images.test.ts](../../../../sources/treesoop__hwp-mcp/test/tools.images.test.ts)<br>[test/tools.read.test.ts](../../../../sources/treesoop__hwp-mcp/test/tools.read.test.ts)<br>[test/tools.render.test.ts](../../../../sources/treesoop__hwp-mcp/test/tools.render.test.ts)<br>[test/tools.replace-image.test.ts](../../../../sources/treesoop__hwp-mcp/test/tools.replace-image.test.ts)<br>[test/tools.write.test.ts](../../../../sources/treesoop__hwp-mcp/test/tools.write.test.ts)<br>[src/tools/edit.ts](../../../../sources/treesoop__hwp-mcp/src/tools/edit.ts) |
| mcp | 2 | [docs/superpowers/specs/2026-04-29-hwp-mcp-rhwp-rebuild-design.md](../../../../sources/treesoop__hwp-mcp/docs/superpowers/specs/2026-04-29-hwp-mcp-rhwp-rebuild-design.md)<br>[docs/superpowers/plans/2026-04-29-hwp-mcp-rhwp-rebuild.md](../../../../sources/treesoop__hwp-mcp/docs/superpowers/plans/2026-04-29-hwp-mcp-rhwp-rebuild.md) |
| retrieval | 0 | not obvious |
| spec | 1 | [docs/superpowers/specs/2026-04-29-hwp-mcp-rhwp-rebuild-design.md](../../../../sources/treesoop__hwp-mcp/docs/superpowers/specs/2026-04-29-hwp-mcp-rhwp-rebuild-design.md) |
| eval | 24 | [test/core.document.open.test.ts](../../../../sources/treesoop__hwp-mcp/test/core.document.open.test.ts)<br>[test/core.document.walk-eq.test.ts](../../../../sources/treesoop__hwp-mcp/test/core.document.walk-eq.test.ts)<br>[test/core.document.walk-hf.test.ts](../../../../sources/treesoop__hwp-mcp/test/core.document.walk-hf.test.ts)<br>[test/core.document.walk-images.test.ts](../../../../sources/treesoop__hwp-mcp/test/core.document.walk-images.test.ts)<br>[test/core.document.walk-tables.test.ts](../../../../sources/treesoop__hwp-mcp/test/core.document.walk-tables.test.ts)<br>[test/core.document.walk-text.test.ts](../../../../sources/treesoop__hwp-mcp/test/core.document.walk-text.test.ts)<br>[test/core.hwpx-mutate.test.ts](../../../../sources/treesoop__hwp-mcp/test/core.hwpx-mutate.test.ts)<br>[test/core.wasm-init.test.ts](../../../../sources/treesoop__hwp-mcp/test/core.wasm-init.test.ts) |
| security | 0 | not obvious |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 3 | [README.md](../../../../sources/treesoop__hwp-mcp/README.md)<br>[docs/superpowers/specs/2026-04-29-hwp-mcp-rhwp-rebuild-design.md](../../../../sources/treesoop__hwp-mcp/docs/superpowers/specs/2026-04-29-hwp-mcp-rhwp-rebuild-design.md)<br>[docs/superpowers/plans/2026-04-29-hwp-mcp-rhwp-rebuild.md](../../../../sources/treesoop__hwp-mcp/docs/superpowers/plans/2026-04-29-hwp-mcp-rhwp-rebuild.md) |
| config | 2 | [package.json](../../../../sources/treesoop__hwp-mcp/package.json)<br>[tsconfig.json](../../../../sources/treesoop__hwp-mcp/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 24 | [test/core.document.open.test.ts](../../../../sources/treesoop__hwp-mcp/test/core.document.open.test.ts)<br>[test/core.document.walk-eq.test.ts](../../../../sources/treesoop__hwp-mcp/test/core.document.walk-eq.test.ts)<br>[test/core.document.walk-hf.test.ts](../../../../sources/treesoop__hwp-mcp/test/core.document.walk-hf.test.ts)<br>[test/core.document.walk-images.test.ts](../../../../sources/treesoop__hwp-mcp/test/core.document.walk-images.test.ts)<br>[test/core.document.walk-tables.test.ts](../../../../sources/treesoop__hwp-mcp/test/core.document.walk-tables.test.ts)<br>[test/core.document.walk-text.test.ts](../../../../sources/treesoop__hwp-mcp/test/core.document.walk-text.test.ts) |
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

1. Start from key references: `docs/superpowers/specs/2026-04-29-hwp-mcp-rhwp-rebuild-design.md`, `docs/superpowers/plans/2026-04-29-hwp-mcp-rhwp-rebuild.md`, `test/tools.advanced.test.ts`.
2. Trace execution through entrypoints: `test/server.bin-symlink.test.ts`, `test/server.smoke.test.ts`, `src/server.ts`.
3. Map agent/tool runtime through: `test/tools.advanced.test.ts`, `test/tools.edit.test.ts`, `test/tools.images.test.ts`.
4. Verify behavior through test/eval files: `test/core.document.open.test.ts`, `test/core.document.walk-eq.test.ts`, `test/core.document.walk-hf.test.ts`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 MCP server for reading and writing HWP/HWPX Korean Hangul documents — built on rhwp. 34 tools, Claude/Cursor/ChatGPT com. 핵심 구조 신호는 TypeScript, package.json, README.md, LICENSE, modelcontextprotocol, tests이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 ci signal not obvious, license metadata missing, needs deeper structural scan입니다.
