# introfini/ZotSeek Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

AI semantic search for Zotero, with a built-in MCP server for AI agents (Claude Code, Codex). Find papers by meaning. 100% local and private.

## 요약

- 조사 단위: `sources/introfini__ZotSeek` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 96 files, 23 directories, depth score 88, key references 9개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 agent/tool runtime, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 mcp=src/server/mcp-endpoint.ts, src/dev/suites/mcp-server.ts, docs/MCP.md이고, 의존성 단서는 transformers, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 9개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | introfini/ZotSeek |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 128 |
| Forks | 8 |
| License | none |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/introfini__ZotSeek](../../../../sources/introfini__ZotSeek) |
| Existing report | [reports/global-trending/repositories/introfini__ZotSeek.md](../../../global-trending/repositories/introfini__ZotSeek.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 96 / 23 |
| Max observed depth | 6 |
| Top directories | content, docs, locale, scripts, skin, src |
| Top extensions | .ts: 45, .png: 9, .json: 8, .md: 7, .xhtml: 6, .dtd: 4, .ftl: 4, .js: 4, (none): 3, .css: 2, .mjs: 1, .onnx: 1 |
| Source patterns | agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 18 |
| src | source boundary | 10 |
| content | top-level component | 1 |
| locale | top-level component | 1 |
| scripts | top-level component | 1 |
| skin | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| build | package.json | build | node scripts/build.js |
| serve-dev | package.json | build:dev | node scripts/build.js --dev |
| serve-dev | package.json | watch | node scripts/build.js --watch |
| serve-dev | package.json | start | npm run build && npm run start:zotero |
| serve-dev | package.json | start:zotero | open -a Zotero --args -purgecaches -ZoteroDebugText -jsconsole |
| build | package.json | release | node scripts/release.js |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
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
| mcp | [src/server/mcp-endpoint.ts](../../../../sources/introfini__ZotSeek/src/server/mcp-endpoint.ts) | mcp signal |
| mcp | [src/dev/suites/mcp-server.ts](../../../../sources/introfini__ZotSeek/src/dev/suites/mcp-server.ts) | mcp signal |
| mcp | [docs/MCP.md](../../../../sources/introfini__ZotSeek/docs/MCP.md) | mcp signal |
| agentRuntime | [docs/images/context-menu-pdf-find-similar.png](../../../../sources/introfini__ZotSeek/docs/images/context-menu-pdf-find-similar.png) | agentRuntime signal |
| agentRuntime | [docs/images/context-menu.png](../../../../sources/introfini__ZotSeek/docs/images/context-menu.png) | agentRuntime signal |
| entrypoints | [src/index.ts](../../../../sources/introfini__ZotSeek/src/index.ts) | entrypoints signal |
| config | [package.json](../../../../sources/introfini__ZotSeek/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/introfini__ZotSeek/tsconfig.json) | config signal |
| eval | [src/dev/self-test.ts](../../../../sources/introfini__ZotSeek/src/dev/self-test.ts) | eval support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 1 | [src/index.ts](../../../../sources/introfini__ZotSeek/src/index.ts) |
| agentRuntime | 2 | [docs/images/context-menu-pdf-find-similar.png](../../../../sources/introfini__ZotSeek/docs/images/context-menu-pdf-find-similar.png)<br>[docs/images/context-menu.png](../../../../sources/introfini__ZotSeek/docs/images/context-menu.png) |
| mcp | 3 | [src/server/mcp-endpoint.ts](../../../../sources/introfini__ZotSeek/src/server/mcp-endpoint.ts)<br>[src/dev/suites/mcp-server.ts](../../../../sources/introfini__ZotSeek/src/dev/suites/mcp-server.ts)<br>[docs/MCP.md](../../../../sources/introfini__ZotSeek/docs/MCP.md) |
| retrieval | 9 | [src/index.ts](../../../../sources/introfini__ZotSeek/src/index.ts)<br>[src/worker/embedding-worker.ts](../../../../sources/introfini__ZotSeek/src/worker/embedding-worker.ts)<br>[src/core/auto-index-manager.ts](../../../../sources/introfini__ZotSeek/src/core/auto-index-manager.ts)<br>[src/core/embedding-pipeline.ts](../../../../sources/introfini__ZotSeek/src/core/embedding-pipeline.ts)<br>[src/core/vector-store-sqlite.ts](../../../../sources/introfini__ZotSeek/src/core/vector-store-sqlite.ts)<br>[content/models/Xenova/nomic-embed-text-v1.5/config.json](../../../../sources/introfini__ZotSeek/content/models/Xenova/nomic-embed-text-v1.5/config.json)<br>[content/models/Xenova/nomic-embed-text-v1.5/tokenizer_config.json](../../../../sources/introfini__ZotSeek/content/models/Xenova/nomic-embed-text-v1.5/tokenizer_config.json)<br>[content/models/Xenova/nomic-embed-text-v1.5/tokenizer.json](../../../../sources/introfini__ZotSeek/content/models/Xenova/nomic-embed-text-v1.5/tokenizer.json) |
| spec | 2 | [docs/ROADMAP.md](../../../../sources/introfini__ZotSeek/docs/ROADMAP.md)<br>[docs/SEARCH_ARCHITECTURE.md](../../../../sources/introfini__ZotSeek/docs/SEARCH_ARCHITECTURE.md) |
| eval | 1 | [src/dev/self-test.ts](../../../../sources/introfini__ZotSeek/src/dev/self-test.ts) |
| security | 0 | not obvious |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 13 | [README.md](../../../../sources/introfini__ZotSeek/README.md)<br>[docs/API.md](../../../../sources/introfini__ZotSeek/docs/API.md)<br>[docs/DEVELOPMENT.md](../../../../sources/introfini__ZotSeek/docs/DEVELOPMENT.md)<br>[docs/MCP.md](../../../../sources/introfini__ZotSeek/docs/MCP.md)<br>[docs/ROADMAP.md](../../../../sources/introfini__ZotSeek/docs/ROADMAP.md)<br>[docs/SEARCH_ARCHITECTURE.md](../../../../sources/introfini__ZotSeek/docs/SEARCH_ARCHITECTURE.md)<br>[docs/images/context-menu-pdf-find-similar.png](../../../../sources/introfini__ZotSeek/docs/images/context-menu-pdf-find-similar.png)<br>[docs/images/context-menu.png](../../../../sources/introfini__ZotSeek/docs/images/context-menu.png) |
| config | 2 | [package.json](../../../../sources/introfini__ZotSeek/package.json)<br>[tsconfig.json](../../../../sources/introfini__ZotSeek/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 1 | [src/dev/self-test.ts](../../../../sources/introfini__ZotSeek/src/dev/self-test.ts) |
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

1. Start from key references: `src/server/mcp-endpoint.ts`, `src/dev/suites/mcp-server.ts`, `docs/MCP.md`.
2. Trace execution through entrypoints: `src/index.ts`.
3. Map agent/tool runtime through: `docs/images/context-menu-pdf-find-similar.png`, `docs/images/context-menu.png`.
4. Inspect retrieval/memory/indexing through: `src/index.ts`, `src/worker/embedding-worker.ts`, `src/core/auto-index-manager.ts`.
5. Verify behavior through test/eval files: `src/dev/self-test.ts`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 AI semantic search for Zotero, with a built in MCP server for AI agents Claude Code, Codex . Find papers by meaning. 100. 핵심 구조 신호는 TypeScript, package.json, README.md, transformers, docs, spec-artifacts이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, ci signal not obvious, license metadata missing, needs deeper structural scan입니다.
