# GLips/Figma-Context-MCP Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

MCP server to provide Figma layout information to AI coding agents like Cursor

## 요약

- 조사 단위: `sources/GLips__Figma-Context-MCP` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 101 files, 21 directories, depth score 115, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=src/mcp-server.ts, src/mcp/index.ts, src/mcp/progress.ts이고, 의존성 단서는 modelcontextprotocol, express, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | GLips/Figma-Context-MCP |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 15139 |
| Forks | 1198 |
| License | none |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/GLips__Figma-Context-MCP](../../../../sources/GLips__Figma-Context-MCP) |
| Existing report | [reports/global-trending/repositories/GLips__Figma-Context-MCP.md](../../../global-trending/repositories/GLips__Figma-Context-MCP.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 101 / 21 |
| Max observed depth | 4 |
| Top directories | .claude, .github, scripts, src |
| Top extensions | .ts: 75, .md: 8, .json: 5, .yml: 5, (none): 4, .example: 1, .js: 1, .mjs: 1, .yaml: 1 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 41 |
| .github | ci surface | 1 |
| scripts | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| build | package.json | build | tsup --dts |
| quality | package.json | type-check | tsc --noEmit |
| test | package.json | test | vitest run |
| serve-dev | package.json | start | node dist/bin.js |
| serve-dev | package.json | start:cli | cross-env NODE_ENV=cli node dist/bin.js |
| serve-dev | package.json | start:http | node dist/bin.js |
| serve-dev | package.json | dev | cross-env NODE_ENV=development tsup --watch |
| serve-dev | package.json | dev:cli | cross-env NODE_ENV=development tsup --watch -- --stdio |
| quality | package.json | lint | eslint . |
| quality | package.json | format | prettier --write "src/**/*.ts" |
| test | package.json | inspect | pnpx @modelcontextprotocol/inspector |
| utility | package.json | benchmark:simplify | tsx scripts/benchmark-simplify.ts |
| build | package.json | prepack | pnpm build |
| entrypoint | package.json bin | bin.js | dist/bin.js |


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
| mcp | [src/mcp-server.ts](../../../../sources/GLips__Figma-Context-MCP/src/mcp-server.ts) | mcp signal |
| mcp | [src/mcp/index.ts](../../../../sources/GLips__Figma-Context-MCP/src/mcp/index.ts) | mcp signal |
| mcp | [src/mcp/progress.ts](../../../../sources/GLips__Figma-Context-MCP/src/mcp/progress.ts) | mcp signal |
| mcp | [src/mcp/validation-capture.ts](../../../../sources/GLips__Figma-Context-MCP/src/mcp/validation-capture.ts) | mcp signal |
| agentRuntime | [src/mcp/tools/download-figma-images-tool.ts](../../../../sources/GLips__Figma-Context-MCP/src/mcp/tools/download-figma-images-tool.ts) | agentRuntime signal |
| agentRuntime | [src/mcp/tools/get-figma-data-tool.ts](../../../../sources/GLips__Figma-Context-MCP/src/mcp/tools/get-figma-data-tool.ts) | agentRuntime signal |
| agentRuntime | [src/mcp/tools/index.ts](../../../../sources/GLips__Figma-Context-MCP/src/mcp/tools/index.ts) | agentRuntime signal |
| entrypoints | [server.json](../../../../sources/GLips__Figma-Context-MCP/server.json) | entrypoints signal |
| entrypoints | [src/index.ts](../../../../sources/GLips__Figma-Context-MCP/src/index.ts) | entrypoints signal |
| entrypoints | [src/server.ts](../../../../sources/GLips__Figma-Context-MCP/src/server.ts) | entrypoints signal |
| entrypoints | [src/tests/server.test.ts](../../../../sources/GLips__Figma-Context-MCP/src/tests/server.test.ts) | entrypoints signal |
| instruction | [CLAUDE.md](../../../../sources/GLips__Figma-Context-MCP/CLAUDE.md) | instruction signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 4 | [server.json](../../../../sources/GLips__Figma-Context-MCP/server.json)<br>[src/index.ts](../../../../sources/GLips__Figma-Context-MCP/src/index.ts)<br>[src/server.ts](../../../../sources/GLips__Figma-Context-MCP/src/server.ts)<br>[src/tests/server.test.ts](../../../../sources/GLips__Figma-Context-MCP/src/tests/server.test.ts) |
| agentRuntime | 3 | [src/mcp/tools/download-figma-images-tool.ts](../../../../sources/GLips__Figma-Context-MCP/src/mcp/tools/download-figma-images-tool.ts)<br>[src/mcp/tools/get-figma-data-tool.ts](../../../../sources/GLips__Figma-Context-MCP/src/mcp/tools/get-figma-data-tool.ts)<br>[src/mcp/tools/index.ts](../../../../sources/GLips__Figma-Context-MCP/src/mcp/tools/index.ts) |
| mcp | 7 | [src/mcp-server.ts](../../../../sources/GLips__Figma-Context-MCP/src/mcp-server.ts)<br>[src/mcp/index.ts](../../../../sources/GLips__Figma-Context-MCP/src/mcp/index.ts)<br>[src/mcp/progress.ts](../../../../sources/GLips__Figma-Context-MCP/src/mcp/progress.ts)<br>[src/mcp/validation-capture.ts](../../../../sources/GLips__Figma-Context-MCP/src/mcp/validation-capture.ts)<br>[src/mcp/tools/download-figma-images-tool.ts](../../../../sources/GLips__Figma-Context-MCP/src/mcp/tools/download-figma-images-tool.ts)<br>[src/mcp/tools/get-figma-data-tool.ts](../../../../sources/GLips__Figma-Context-MCP/src/mcp/tools/get-figma-data-tool.ts)<br>[src/mcp/tools/index.ts](../../../../sources/GLips__Figma-Context-MCP/src/mcp/tools/index.ts) |
| retrieval | 6 | [src/index.ts](../../../../sources/GLips__Figma-Context-MCP/src/index.ts)<br>[src/telemetry/index.ts](../../../../sources/GLips__Figma-Context-MCP/src/telemetry/index.ts)<br>[src/services/errors/index.ts](../../../../sources/GLips__Figma-Context-MCP/src/services/errors/index.ts)<br>[src/mcp/index.ts](../../../../sources/GLips__Figma-Context-MCP/src/mcp/index.ts)<br>[src/mcp/tools/index.ts](../../../../sources/GLips__Figma-Context-MCP/src/mcp/tools/index.ts)<br>[src/extractors/index.ts](../../../../sources/GLips__Figma-Context-MCP/src/extractors/index.ts) |
| spec | 3 | [ROADMAP.md](../../../../sources/GLips__Figma-Context-MCP/ROADMAP.md)<br>[src/utils/serializable-design.ts](../../../../sources/GLips__Figma-Context-MCP/src/utils/serializable-design.ts)<br>[src/extractors/design-extractor.ts](../../../../sources/GLips__Figma-Context-MCP/src/extractors/design-extractor.ts) |
| eval | 18 | [src/tests/benchmark.test.ts](../../../../sources/GLips__Figma-Context-MCP/src/tests/benchmark.test.ts)<br>[src/tests/config.test.ts](../../../../sources/GLips__Figma-Context-MCP/src/tests/config.test.ts)<br>[src/tests/effects.test.ts](../../../../sources/GLips__Figma-Context-MCP/src/tests/effects.test.ts)<br>[src/tests/error-meta.test.ts](../../../../sources/GLips__Figma-Context-MCP/src/tests/error-meta.test.ts)<br>[src/tests/finalize.test.ts](../../../../sources/GLips__Figma-Context-MCP/src/tests/finalize.test.ts)<br>[src/tests/http-header-auth.test.ts](../../../../sources/GLips__Figma-Context-MCP/src/tests/http-header-auth.test.ts)<br>[src/tests/image-processing.test.ts](../../../../sources/GLips__Figma-Context-MCP/src/tests/image-processing.test.ts)<br>[src/tests/integration.test.ts](../../../../sources/GLips__Figma-Context-MCP/src/tests/integration.test.ts) |
| security | 1 | [src/tests/http-header-auth.test.ts](../../../../sources/GLips__Figma-Context-MCP/src/tests/http-header-auth.test.ts) |
| ci | 2 | [.github/workflows/ci.yml](../../../../sources/GLips__Figma-Context-MCP/.github/workflows/ci.yml)<br>[.github/workflows/release.yml](../../../../sources/GLips__Figma-Context-MCP/.github/workflows/release.yml) |
| container | 0 | not obvious |
| instruction | 1 | [CLAUDE.md](../../../../sources/GLips__Figma-Context-MCP/CLAUDE.md) |
| docs | 2 | [README.md](../../../../sources/GLips__Figma-Context-MCP/README.md)<br>[src/extractors/README.md](../../../../sources/GLips__Figma-Context-MCP/src/extractors/README.md) |
| config | 2 | [package.json](../../../../sources/GLips__Figma-Context-MCP/package.json)<br>[tsconfig.json](../../../../sources/GLips__Figma-Context-MCP/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 18 | [src/tests/benchmark.test.ts](../../../../sources/GLips__Figma-Context-MCP/src/tests/benchmark.test.ts)<br>[src/tests/config.test.ts](../../../../sources/GLips__Figma-Context-MCP/src/tests/config.test.ts)<br>[src/tests/effects.test.ts](../../../../sources/GLips__Figma-Context-MCP/src/tests/effects.test.ts)<br>[src/tests/error-meta.test.ts](../../../../sources/GLips__Figma-Context-MCP/src/tests/error-meta.test.ts)<br>[src/tests/finalize.test.ts](../../../../sources/GLips__Figma-Context-MCP/src/tests/finalize.test.ts)<br>[src/tests/http-header-auth.test.ts](../../../../sources/GLips__Figma-Context-MCP/src/tests/http-header-auth.test.ts) |
| CI workflows | 2 | [.github/workflows/ci.yml](../../../../sources/GLips__Figma-Context-MCP/.github/workflows/ci.yml)<br>[.github/workflows/release.yml](../../../../sources/GLips__Figma-Context-MCP/.github/workflows/release.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 1 | [src/tests/http-header-auth.test.ts](../../../../sources/GLips__Figma-Context-MCP/src/tests/http-header-auth.test.ts) |
| Agent instructions | 1 | [CLAUDE.md](../../../../sources/GLips__Figma-Context-MCP/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `src/mcp-server.ts`, `src/mcp/index.ts`, `src/mcp/progress.ts`.
2. Trace execution through entrypoints: `server.json`, `src/index.ts`, `src/server.ts`.
3. Map agent/tool runtime through: `src/mcp/tools/download-figma-images-tool.ts`, `src/mcp/tools/get-figma-data-tool.ts`, `src/mcp/tools/index.ts`.
4. Inspect retrieval/memory/indexing through: `src/index.ts`, `src/telemetry/index.ts`, `src/services/errors/index.ts`.
5. Verify behavior through test/eval files: `src/tests/benchmark.test.ts`, `src/tests/config.test.ts`, `src/tests/effects.test.ts`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 MCP server to provide Figma layout information to AI coding agents like Cursor. 핵심 구조 신호는 TypeScript, package.json, README.md, CLAUDE.md, LICENSE, modelcontextprotocol이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
