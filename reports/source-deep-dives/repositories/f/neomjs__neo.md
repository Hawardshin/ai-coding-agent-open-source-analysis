# neomjs/neo Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Neo.mjs is a self-evolving software organism: a professional end-to-end AI engineering team whose cross-model swarm inhabits live apps via Neural Link, Active Hybrid GraphRAG, DreamService, and self-healing loops.

## 요약

- 조사 단위: `sources/neomjs__neo` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 15,000 files, 2,546 directories, depth score 124, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=test/playwright/unit/ai/mcp/Authorization.spec.mjs, test/playwright/unit/ai/mcp/validation/GuideToolParity.spec.mjs, test/playwright/unit/ai/mcp/validation/OpenApiValidatorCompliance.spec.mjs이고, 의존성 단서는 modelcontextprotocol, commander, chroma, playwright, 검증/운영 단서는 test/eval 경로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | neomjs/neo |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | JavaScript |
| Stars | 3206 |
| Forks | 213 |
| License | MIT |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/neomjs__neo](../../../../sources/neomjs__neo) |
| Existing report | [reports/global-trending/repositories/neomjs__neo.md](../../../global-trending/repositories/neomjs__neo.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 15000 / 2546 |
| Max observed depth | 11 |
| Top directories | .agents, .claude, .codex, .gemini, .github, .husky, .neo-ai-data, ai, apps, buildScripts, docs, examples, learn, resources, src, test |
| Top extensions | .md: 12332, .mjs: 995, .jpg: 989, .scss: 621, .json: 23, .svg: 9, .js: 5, .jsonl: 5, .png: 4, .yaml: 4, .proto: 3, (none): 3 |
| Source patterns | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 7 |
| .codex | top-level component | 1 |
| .github | ci surface | 1 |
| ai | top-level component | 1 |
| apps | source boundary | 1 |
| buildScripts | top-level component | 1 |
| docs | documentation surface | 1 |
| examples | top-level component | 1 |
| learn | top-level component | 1 |
| resources | top-level component | 1 |
| test | validation surface | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| build | package.json | add-config | node ./buildScripts/create/addConfig.mjs |
| build | package.json | add-reactive-tags | node ./buildScripts/helpers/addReactiveTags.mjs |
| utility | package.json | ai:agent | node ./ai/scripts/runners/runAgent.mjs |
| utility | package.json | ai:analyze-nl-telemetry | node ./ai/scripts/diagnostics/analyzeNlTelemetry.mjs |
| utility | package.json | ai:audit-discussion-lifecycle | node ./ai/scripts/diagnostics/audit-discussion-lifecycle.mjs |
| utility | package.json | ai:audit-integrity | node ./ai/scripts/maintenance/auditGraphIntegrity.mjs |
| utility | package.json | ai:backup | node ./ai/scripts/maintenance/backup.mjs |
| utility | package.json | ai:benchmark-gemma4 | node ./ai/scripts/benchmark/gemma4-rem-benchmark.mjs |
| serve-dev | package.json | ai:benchmark-setup-class | node --expose-gc ./ai/scripts/benchmark/setupClass-cold-start.mjs |
| utility | package.json | ai:bootstrap-codex-sandbox | node ./ai/scripts/diagnostics/bootstrapCodexSandbox.mjs |
| quality | package.json | ai:check-identity-facts | node ./ai/scripts/diagnostics/check-identity-facts.mjs |
| quality | package.json | ai:check-retired-primitives | node ./ai/scripts/diagnostics/check-retired-primitives.mjs |
| quality | package.json | ai:check-substrate-size | node ./ai/scripts/diagnostics/check-substrate-size.mjs |
| utility | package.json | ai:compact-graphlog | node ./ai/scripts/maintenance/compactGraphLog.mjs |
| utility | package.json | ai:restore | node ./ai/scripts/maintenance/restore.mjs |
| build | package.json | ai:build-kb-faqs | node ./ai/scripts/maintenance/buildKbAgentFaqs.mjs |
| utility | package.json | ai:defrag-kb | node ./ai/scripts/maintenance/defragChromaDB.mjs --target knowledge-base |
| utility | package.json | ai:defrag-memory | node ./ai/scripts/maintenance/defragChromaDB.mjs --target memory-core |
| utility | package.json | ai:defrag-sqlite | node ./ai/scripts/maintenance/defragSQLiteDB.mjs |
| utility | package.json | ai:download-kb | node ./ai/scripts/maintenance/downloadKnowledgeBase.mjs |
| utility | package.json | ai:gemini-incident-cost-ledger | node ./ai/scripts/diagnostics/gemini-incident-cost-ledger.mjs |
| utility | package.json | ai:graph-lifecycle-report | node ./ai/scripts/maintenance/graphLifecycleReport.mjs |
| utility | package.json | ai:ingest-tenant | node ./ai/scripts/maintenance/ingestTenant.mjs |
| utility | package.json | ai:kb-push-client | node ./ai/scripts/maintenance/kbPushClient.mjs |
| quality | package.json | ai:mcp-healthcheck | node ./ai/scripts/diagnostics/mcpHealthcheck.mjs |
| utility | package.json | ai:mcp-client | node ./ai/mcp/client/mcp-cli.mjs |
| serve-dev | package.json | ai:mcp-server-file-system | node ./ai/mcp/server/file-system/mcp-server.mjs |
| serve-dev | package.json | ai:mcp-server-github-workflow | node ./ai/mcp/server/github-workflow/mcp-server.mjs |
| serve-dev | package.json | ai:mcp-server-knowledge-base | node ./ai/mcp/server/knowledge-base/mcp-server.mjs |
| serve-dev | package.json | ai:mcp-server-memory-core | node ./ai/mcp/server/memory-core/mcp-server.mjs |
| serve-dev | package.json | ai:mcp-server-neural-link | node ./ai/mcp/server/neural-link/mcp-server.mjs |
| utility | package.json | ai:migration-census-report | node ./ai/scripts/maintenance/migrationCensusReport.mjs |
| utility | package.json | ai:probe-keep-alive | node ./ai/scripts/benchmark/keep-alive-probe.mjs |
| utility | package.json | ai:prune-worktrees | node ./ai/scripts/migrations/bootstrapWorktree.mjs --prune-stale |
| utility | package.json | ai:prune-worktrees:dry-run | node ./ai/scripts/migrations/bootstrapWorktree.mjs --prune-stale --dry-run |
| utility | package.json | ai:prune-worktrees:schedule-dangerous | node ./ai/scripts/migrations/bootstrapWorktree.mjs --prune-stale --schedule-local --include-dirty --interval-ms 21600000 |
| test | package.json | ai:purge-test-collections | node ./ai/scripts/maintenance/purgeTestCollections.mjs |
| quality | package.json | ai:lint-agents | node ./ai/scripts/lint/lint-agents.mjs |
| quality | package.json | ai:lint-config-template-ssot | node ./ai/scripts/lint/lint-config-template-ssot.mjs |
| test | package.json | ai:lint-mcp-test-locations | node ./ai/scripts/lint/lint-mcp-test-locations.mjs |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | modelcontextprotocol |
| agentFrameworks | none |
| vectorStores | chroma |
| modelRuntime | none |
| webRuntime | none |
| developerSurface | commander |
| observability | none |
| browserAutomation | playwright |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [test/playwright/unit/ai/mcp/Authorization.spec.mjs](../../../../sources/neomjs__neo/test/playwright/unit/ai/mcp/Authorization.spec.mjs) | mcp signal |
| mcp | [test/playwright/unit/ai/mcp/validation/GuideToolParity.spec.mjs](../../../../sources/neomjs__neo/test/playwright/unit/ai/mcp/validation/GuideToolParity.spec.mjs) | mcp signal |
| mcp | [test/playwright/unit/ai/mcp/validation/OpenApiValidatorCompliance.spec.mjs](../../../../sources/neomjs__neo/test/playwright/unit/ai/mcp/validation/OpenApiValidatorCompliance.spec.mjs) | mcp signal |
| mcp | [test/playwright/unit/ai/mcp/server/BaseServer.spec.mjs](../../../../sources/neomjs__neo/test/playwright/unit/ai/mcp/server/BaseServer.spec.mjs) | mcp signal |
| agentRuntime | [AGENTS_STARTUP.md](../../../../sources/neomjs__neo/AGENTS_STARTUP.md) | agentRuntime signal |
| agentRuntime | [AGENTS.md](../../../../sources/neomjs__neo/AGENTS.md) | agentRuntime signal |
| agentRuntime | [test/playwright/unit/ai/services/memory-core/CoalescingEngineService.spec.mjs](../../../../sources/neomjs__neo/test/playwright/unit/ai/services/memory-core/CoalescingEngineService.spec.mjs) | agentRuntime signal |
| agentRuntime | [test/playwright/unit/ai/services/memory-core/CollectionBug.spec.mjs](../../../../sources/neomjs__neo/test/playwright/unit/ai/services/memory-core/CollectionBug.spec.mjs) | agentRuntime signal |
| entrypoints | [test/playwright/unit/ai/mcp/server/memory-core/Server.spec.mjs](../../../../sources/neomjs__neo/test/playwright/unit/ai/mcp/server/memory-core/Server.spec.mjs) | entrypoints signal |
| entrypoints | [test/playwright/unit/ai/mcp/server/knowledge-base/Server.spec.mjs](../../../../sources/neomjs__neo/test/playwright/unit/ai/mcp/server/knowledge-base/Server.spec.mjs) | entrypoints signal |
| entrypoints | [test/playwright/integration/ai/kb-ingestion/fixtures/external-workspaces/mini-cpp-workspace/src/main.cpp](../../../../sources/neomjs__neo/test/playwright/integration/ai/kb-ingestion/fixtures/external-workspaces/mini-cpp-workspace/src/main.cpp) | entrypoints signal |
| entrypoints | [src/index.js](../../../../sources/neomjs__neo/src/index.js) | entrypoints signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 5 | [test/playwright/unit/ai/mcp/server/memory-core/Server.spec.mjs](../../../../sources/neomjs__neo/test/playwright/unit/ai/mcp/server/memory-core/Server.spec.mjs)<br>[test/playwright/unit/ai/mcp/server/knowledge-base/Server.spec.mjs](../../../../sources/neomjs__neo/test/playwright/unit/ai/mcp/server/knowledge-base/Server.spec.mjs)<br>[test/playwright/integration/ai/kb-ingestion/fixtures/external-workspaces/mini-cpp-workspace/src/main.cpp](../../../../sources/neomjs__neo/test/playwright/integration/ai/kb-ingestion/fixtures/external-workspaces/mini-cpp-workspace/src/main.cpp)<br>[src/index.js](../../../../sources/neomjs__neo/src/index.js)<br>[src/Main.mjs](../../../../sources/neomjs__neo/src/Main.mjs) |
| agentRuntime | 62 | [AGENTS_STARTUP.md](../../../../sources/neomjs__neo/AGENTS_STARTUP.md)<br>[AGENTS.md](../../../../sources/neomjs__neo/AGENTS.md)<br>[test/playwright/unit/ai/services/memory-core/CoalescingEngineService.spec.mjs](../../../../sources/neomjs__neo/test/playwright/unit/ai/services/memory-core/CoalescingEngineService.spec.mjs)<br>[test/playwright/unit/ai/services/memory-core/CollectionBug.spec.mjs](../../../../sources/neomjs__neo/test/playwright/unit/ai/services/memory-core/CollectionBug.spec.mjs)<br>[test/playwright/unit/ai/services/memory-core/DatabaseService.backupPath.spec.mjs](../../../../sources/neomjs__neo/test/playwright/unit/ai/services/memory-core/DatabaseService.backupPath.spec.mjs)<br>[test/playwright/unit/ai/services/memory-core/DatabaseService.graphBackup.spec.mjs](../../../../sources/neomjs__neo/test/playwright/unit/ai/services/memory-core/DatabaseService.graphBackup.spec.mjs)<br>[test/playwright/unit/ai/services/memory-core/DatabaseService.importMergeChroma.spec.mjs](../../../../sources/neomjs__neo/test/playwright/unit/ai/services/memory-core/DatabaseService.importMergeChroma.spec.mjs)<br>[test/playwright/unit/ai/services/memory-core/FileSystemIngestor.spec.mjs](../../../../sources/neomjs__neo/test/playwright/unit/ai/services/memory-core/FileSystemIngestor.spec.mjs) |
| mcp | 35 | [test/playwright/unit/ai/mcp/Authorization.spec.mjs](../../../../sources/neomjs__neo/test/playwright/unit/ai/mcp/Authorization.spec.mjs)<br>[test/playwright/unit/ai/mcp/validation/GuideToolParity.spec.mjs](../../../../sources/neomjs__neo/test/playwright/unit/ai/mcp/validation/GuideToolParity.spec.mjs)<br>[test/playwright/unit/ai/mcp/validation/OpenApiValidatorCompliance.spec.mjs](../../../../sources/neomjs__neo/test/playwright/unit/ai/mcp/validation/OpenApiValidatorCompliance.spec.mjs)<br>[test/playwright/unit/ai/mcp/server/BaseServer.spec.mjs](../../../../sources/neomjs__neo/test/playwright/unit/ai/mcp/server/BaseServer.spec.mjs)<br>[test/playwright/unit/ai/mcp/server/FileSystemPolicy.spec.mjs](../../../../sources/neomjs__neo/test/playwright/unit/ai/mcp/server/FileSystemPolicy.spec.mjs)<br>[test/playwright/unit/ai/mcp/server/McpServerListToolsSmoke.spec.mjs](../../../../sources/neomjs__neo/test/playwright/unit/ai/mcp/server/McpServerListToolsSmoke.spec.mjs)<br>[test/playwright/unit/ai/mcp/server/shared/AuthService.spec.mjs](../../../../sources/neomjs__neo/test/playwright/unit/ai/mcp/server/shared/AuthService.spec.mjs)<br>[test/playwright/unit/ai/mcp/server/shared/logger.spec.mjs](../../../../sources/neomjs__neo/test/playwright/unit/ai/mcp/server/shared/logger.spec.mjs) |
| retrieval | 12177 | [test/playwright/unit/ai/services/shared/vector/chromaTestIsolation.spec.mjs](../../../../sources/neomjs__neo/test/playwright/unit/ai/services/shared/vector/chromaTestIsolation.spec.mjs)<br>[test/playwright/unit/ai/services/memory-core/CoalescingEngineService.spec.mjs](../../../../sources/neomjs__neo/test/playwright/unit/ai/services/memory-core/CoalescingEngineService.spec.mjs)<br>[test/playwright/unit/ai/services/memory-core/CollectionBug.spec.mjs](../../../../sources/neomjs__neo/test/playwright/unit/ai/services/memory-core/CollectionBug.spec.mjs)<br>[test/playwright/unit/ai/services/memory-core/DatabaseService.backupPath.spec.mjs](../../../../sources/neomjs__neo/test/playwright/unit/ai/services/memory-core/DatabaseService.backupPath.spec.mjs)<br>[test/playwright/unit/ai/services/memory-core/DatabaseService.graphBackup.spec.mjs](../../../../sources/neomjs__neo/test/playwright/unit/ai/services/memory-core/DatabaseService.graphBackup.spec.mjs)<br>[test/playwright/unit/ai/services/memory-core/DatabaseService.importMergeChroma.spec.mjs](../../../../sources/neomjs__neo/test/playwright/unit/ai/services/memory-core/DatabaseService.importMergeChroma.spec.mjs)<br>[test/playwright/unit/ai/services/memory-core/FileSystemIngestor.spec.mjs](../../../../sources/neomjs__neo/test/playwright/unit/ai/services/memory-core/FileSystemIngestor.spec.mjs)<br>[test/playwright/unit/ai/services/memory-core/GraphService.spec.mjs](../../../../sources/neomjs__neo/test/playwright/unit/ai/services/memory-core/GraphService.spec.mjs) |
| spec | 548 | [ROADMAP.md](../../../../sources/neomjs__neo/ROADMAP.md)<br>[test/playwright/unit/env.spec.mjs](../../../../sources/neomjs__neo/test/playwright/unit/env.spec.mjs)<br>[test/playwright/unit/worker/ReplyLoss.spec.mjs](../../../../sources/neomjs__neo/test/playwright/unit/worker/ReplyLoss.spec.mjs)<br>[test/playwright/unit/worker/ServiceBase.spec.mjs](../../../../sources/neomjs__neo/test/playwright/unit/worker/ServiceBase.spec.mjs)<br>[test/playwright/unit/worker/mixin/RemoteMethodAccess.spec.mjs](../../../../sources/neomjs__neo/test/playwright/unit/worker/mixin/RemoteMethodAccess.spec.mjs)<br>[test/playwright/unit/vdom/Advanced.spec.mjs](../../../../sources/neomjs__neo/test/playwright/unit/vdom/Advanced.spec.mjs)<br>[test/playwright/unit/vdom/AsymmetricMerging.spec.mjs](../../../../sources/neomjs__neo/test/playwright/unit/vdom/AsymmetricMerging.spec.mjs)<br>[test/playwright/unit/vdom/AsymmetricUpdates.spec.mjs](../../../../sources/neomjs__neo/test/playwright/unit/vdom/AsymmetricUpdates.spec.mjs) |
| eval | 587 | [test/playwright/fixtures.mjs](../../../../sources/neomjs__neo/test/playwright/fixtures.mjs)<br>[test/playwright/playwright.config.component.mjs](../../../../sources/neomjs__neo/test/playwright/playwright.config.component.mjs)<br>[test/playwright/playwright.config.e2e.mjs](../../../../sources/neomjs__neo/test/playwright/playwright.config.e2e.mjs)<br>[test/playwright/playwright.config.integration.mjs](../../../../sources/neomjs__neo/test/playwright/playwright.config.integration.mjs)<br>[test/playwright/playwright.config.mjs](../../../../sources/neomjs__neo/test/playwright/playwright.config.mjs)<br>[test/playwright/playwright.config.unit.mjs](../../../../sources/neomjs__neo/test/playwright/playwright.config.unit.mjs)<br>[test/playwright/setup.mjs](../../../../sources/neomjs__neo/test/playwright/setup.mjs)<br>[test/playwright/util/DeltaCapture.mjs](../../../../sources/neomjs__neo/test/playwright/util/DeltaCapture.mjs) |
| security | 2 | [test/playwright/unit/ai/services/knowledge-base/COVERAGE_AUDIT.md](../../../../sources/neomjs__neo/test/playwright/unit/ai/services/knowledge-base/COVERAGE_AUDIT.md)<br>[test/playwright/unit/ai/mcp/server/memory-core/Auth.spec.mjs](../../../../sources/neomjs__neo/test/playwright/unit/ai/mcp/server/memory-core/Auth.spec.mjs) |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 1 | [AGENTS.md](../../../../sources/neomjs__neo/AGENTS.md) |
| docs | 47 | [README.md](../../../../sources/neomjs__neo/README.md)<br>[test/playwright/unit/ai/buildScripts/docs/RebuildContentIndexesAndSeo.spec.mjs](../../../../sources/neomjs__neo/test/playwright/unit/ai/buildScripts/docs/RebuildContentIndexesAndSeo.spec.mjs)<br>[test/playwright/unit/ai/buildScripts/docs/seo/Generate.spec.mjs](../../../../sources/neomjs__neo/test/playwright/unit/ai/buildScripts/docs/seo/Generate.spec.mjs)<br>[test/playwright/unit/ai/buildScripts/docs/index/PortalContentIndexes.spec.mjs](../../../../sources/neomjs__neo/test/playwright/unit/ai/buildScripts/docs/index/PortalContentIndexes.spec.mjs)<br>[test/playwright/unit/ai/buildScripts/docs/index/TicketIndex.spec.mjs](../../../../sources/neomjs__neo/test/playwright/unit/ai/buildScripts/docs/index/TicketIndex.spec.mjs)<br>[test/playwright/integration/ai/kb-ingestion/fixtures/external-workspaces/mini-neo-workspace/README.md](../../../../sources/neomjs__neo/test/playwright/integration/ai/kb-ingestion/fixtures/external-workspaces/mini-neo-workspace/README.md)<br>[test/playwright/integration/ai/kb-ingestion/fixtures/external-workspaces/mini-es5-workspace/README.md](../../../../sources/neomjs__neo/test/playwright/integration/ai/kb-ingestion/fixtures/external-workspaces/mini-es5-workspace/README.md)<br>[test/playwright/integration/ai/kb-ingestion/fixtures/external-workspaces/mini-custom-source/README.md](../../../../sources/neomjs__neo/test/playwright/integration/ai/kb-ingestion/fixtures/external-workspaces/mini-custom-source/README.md) |
| config | 4 | [package.json](../../../../sources/neomjs__neo/package.json)<br>[test/playwright/integration/ai/kb-ingestion/fixtures/external-workspaces/mini-neo-workspace/package.json](../../../../sources/neomjs__neo/test/playwright/integration/ai/kb-ingestion/fixtures/external-workspaces/mini-neo-workspace/package.json)<br>[test/playwright/integration/ai/kb-ingestion/fixtures/external-workspaces/mini-es5-workspace/package.json](../../../../sources/neomjs__neo/test/playwright/integration/ai/kb-ingestion/fixtures/external-workspaces/mini-es5-workspace/package.json)<br>[test/playwright/integration/ai/kb-ingestion/fixtures/external-workspaces/mini-custom-source/package.json](../../../../sources/neomjs__neo/test/playwright/integration/ai/kb-ingestion/fixtures/external-workspaces/mini-custom-source/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 587 | [test/playwright/fixtures.mjs](../../../../sources/neomjs__neo/test/playwright/fixtures.mjs)<br>[test/playwright/playwright.config.component.mjs](../../../../sources/neomjs__neo/test/playwright/playwright.config.component.mjs)<br>[test/playwright/playwright.config.e2e.mjs](../../../../sources/neomjs__neo/test/playwright/playwright.config.e2e.mjs)<br>[test/playwright/playwright.config.integration.mjs](../../../../sources/neomjs__neo/test/playwright/playwright.config.integration.mjs)<br>[test/playwright/playwright.config.mjs](../../../../sources/neomjs__neo/test/playwright/playwright.config.mjs)<br>[test/playwright/playwright.config.unit.mjs](../../../../sources/neomjs__neo/test/playwright/playwright.config.unit.mjs) |
| CI workflows | 0 | not obvious |
| Containers / deploy | 0 | not obvious |
| Security / policy | 2 | [test/playwright/unit/ai/services/knowledge-base/COVERAGE_AUDIT.md](../../../../sources/neomjs__neo/test/playwright/unit/ai/services/knowledge-base/COVERAGE_AUDIT.md)<br>[test/playwright/unit/ai/mcp/server/memory-core/Auth.spec.mjs](../../../../sources/neomjs__neo/test/playwright/unit/ai/mcp/server/memory-core/Auth.spec.mjs) |
| Agent instructions | 1 | [AGENTS.md](../../../../sources/neomjs__neo/AGENTS.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | large repository scan truncated at 15000 files |
| operation | CI workflow path not obvious; container/deploy path not obvious |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `test/playwright/unit/ai/mcp/Authorization.spec.mjs`, `test/playwright/unit/ai/mcp/validation/GuideToolParity.spec.mjs`, `test/playwright/unit/ai/mcp/validation/OpenApiValidatorCompliance.spec.mjs`.
2. Trace execution through entrypoints: `test/playwright/unit/ai/mcp/server/memory-core/Server.spec.mjs`, `test/playwright/unit/ai/mcp/server/knowledge-base/Server.spec.mjs`, `test/playwright/integration/ai/kb-ingestion/fixtures/external-workspaces/mini-cpp-workspace/src/main.cpp`.
3. Map agent/tool runtime through: `AGENTS_STARTUP.md`, `AGENTS.md`, `test/playwright/unit/ai/services/memory-core/CoalescingEngineService.spec.mjs`.
4. Inspect retrieval/memory/indexing through: `test/playwright/unit/ai/services/shared/vector/chromaTestIsolation.spec.mjs`, `test/playwright/unit/ai/services/memory-core/CoalescingEngineService.spec.mjs`, `test/playwright/unit/ai/services/memory-core/CollectionBug.spec.mjs`.
5. Verify behavior through test/eval files: `test/playwright/fixtures.mjs`, `test/playwright/playwright.config.component.mjs`, `test/playwright/playwright.config.e2e.mjs`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Neo.mjs is a self evolving software organism a professional end to end AI engineering team whose cross model swarm inhab. 핵심 구조 신호는 JavaScript, package.json, README.md, AGENTS.md, LICENSE, modelcontextprotocol이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 needs deeper structural scan입니다.
