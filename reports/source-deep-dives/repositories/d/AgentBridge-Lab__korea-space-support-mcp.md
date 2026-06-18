# AgentBridge-Lab/korea-space-support-mcp Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

한국 우주·항공·국방우주 정부 R&D 지원사업 공고 데이터셋 — 크롤러·분류기·MCP·REST API

## 요약

- 조사 단위: `sources/AgentBridge-Lab__korea-space-support-mcp` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 92 files, 32 directories, depth score 100, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=korea-business-mcp-agent-instructions.md, korea-business-mcp-product-plan.md, korea-space-support-mcp-agent-instructions.md이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | AgentBridge-Lab/korea-space-support-mcp |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | TypeScript |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/AgentBridge-Lab__korea-space-support-mcp](../../../../sources/AgentBridge-Lab__korea-space-support-mcp) |
| Existing report | [reports/korea-trending/repositories/AgentBridge-Lab__korea-space-support-mcp.md](../../../korea-trending/repositories/AgentBridge-Lab__korea-space-support-mcp.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 92 / 32 |
| Max observed depth | 8 |
| Top directories | .github, apps, data, docs, ops, packages, scripts |
| Top extensions | .ts: 27, .md: 18, .json: 17, .tsx: 11, .mjs: 7, .jpg: 5, (none): 2, .css: 1, .example: 1, .jsonl: 1, .plist: 1, .yml: 1 |
| Source patterns | monorepo/workspace, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| apps/web | apps workspace | 24 |
| docs | documentation surface | 19 |
| apps/mcp | apps workspace | 7 |
| packages/shared | packages workspace | 6 |
| apps/api | apps workspace | 4 |
| .github | ci surface | 1 |
| apps | source boundary | 1 |
| data | top-level component | 1 |
| ops | top-level component | 1 |
| packages | source boundary | 1 |
| scripts | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| serve-dev | package.json | dev:api | npm --workspace @bidscout/shared run build && npm --workspace @bidscout/api run dev |
| serve-dev | package.json | dev:mcp | npm --workspace @bidscout/shared run build && npm --workspace @bidscout/mcp run dev |
| serve-dev | package.json | dev:web | npm --workspace @bidscout/shared run build && npm --workspace @bidscout/web run dev |
| utility | package.json | ingest:space | node scripts/ingest-space-programs.mjs |
| build | package.json | check:space | npm --workspace @bidscout/shared run build && node scripts/evaluate-space-mvp.mjs |
| build | package.json | check:space-search | npm --workspace @bidscout/shared run build && node scripts/verify-space-search-samples.mjs |
| build | package.json | check:space-surfaces | npm --workspace @bidscout/shared run build && npm --workspace @bidscout/api run build && npm --workspace @bidscout/mcp run build && node scripts/verify-space-api-mcp-smoke.mjs |
| utility | package.json | report:space | node scripts/report-space-refresh.mjs |
| utility | package.json | refresh:space | node scripts/run-space-refresh.mjs |
| utility | package.json | refresh:space:scheduled | node scripts/run-scheduled-space-refresh.mjs |
| test | package.json | verify:space | npm run check:space && npm run check:space-search && npm run check:space-surfaces && npm test && npm run typecheck && npm run build |
| build | package.json | build | npm --workspace @bidscout/shared run build && npm --workspace @bidscout/api run build && npm --workspace @bidscout/mcp run build && npm --workspace @bidscout/web run build |
| quality | package.json | typecheck | npm --workspace @bidscout/shared run typecheck && npm --workspace @bidscout/api run typecheck && npm --workspace @bidscout/mcp run typecheck && npm --workspace @bidscout/web run typecheck |
| test | package.json | test | npm run test --workspaces --if-present |


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
| mcp | [korea-business-mcp-agent-instructions.md](../../../../sources/AgentBridge-Lab__korea-space-support-mcp/korea-business-mcp-agent-instructions.md) | mcp signal |
| mcp | [korea-business-mcp-product-plan.md](../../../../sources/AgentBridge-Lab__korea-space-support-mcp/korea-business-mcp-product-plan.md) | mcp signal |
| mcp | [korea-space-support-mcp-agent-instructions.md](../../../../sources/AgentBridge-Lab__korea-space-support-mcp/korea-space-support-mcp-agent-instructions.md) | mcp signal |
| mcp | [korea-support-mcp-agent-instructions-ko.md](../../../../sources/AgentBridge-Lab__korea-space-support-mcp/korea-support-mcp-agent-instructions-ko.md) | mcp signal |
| entrypoints | [packages/shared/src/index.ts](../../../../sources/AgentBridge-Lab__korea-space-support-mcp/packages/shared/src/index.ts) | entrypoints signal |
| entrypoints | [apps/web/src/lib/api.server.ts](../../../../sources/AgentBridge-Lab__korea-space-support-mcp/apps/web/src/lib/api.server.ts) | entrypoints signal |
| entrypoints | [apps/web/src/lib/api.ts](../../../../sources/AgentBridge-Lab__korea-space-support-mcp/apps/web/src/lib/api.ts) | entrypoints signal |
| entrypoints | [apps/web/src/lib/format.ts](../../../../sources/AgentBridge-Lab__korea-space-support-mcp/apps/web/src/lib/format.ts) | entrypoints signal |
| config | [package.json](../../../../sources/AgentBridge-Lab__korea-space-support-mcp/package.json) | config signal |
| config | [packages/shared/package.json](../../../../sources/AgentBridge-Lab__korea-space-support-mcp/packages/shared/package.json) | config signal |
| config | [packages/shared/tsconfig.json](../../../../sources/AgentBridge-Lab__korea-space-support-mcp/packages/shared/tsconfig.json) | config signal |
| config | [apps/web/package.json](../../../../sources/AgentBridge-Lab__korea-space-support-mcp/apps/web/package.json) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 24 | [packages/shared/src/index.ts](../../../../sources/AgentBridge-Lab__korea-space-support-mcp/packages/shared/src/index.ts)<br>[apps/web/src/lib/api.server.ts](../../../../sources/AgentBridge-Lab__korea-space-support-mcp/apps/web/src/lib/api.server.ts)<br>[apps/web/src/lib/api.ts](../../../../sources/AgentBridge-Lab__korea-space-support-mcp/apps/web/src/lib/api.ts)<br>[apps/web/src/lib/format.ts](../../../../sources/AgentBridge-Lab__korea-space-support-mcp/apps/web/src/lib/format.ts)<br>[apps/web/src/lib/types.ts](../../../../sources/AgentBridge-Lab__korea-space-support-mcp/apps/web/src/lib/types.ts)<br>[apps/web/src/components/Badge.tsx](../../../../sources/AgentBridge-Lab__korea-space-support-mcp/apps/web/src/components/Badge.tsx)<br>[apps/web/src/components/FilterPanel.tsx](../../../../sources/AgentBridge-Lab__korea-space-support-mcp/apps/web/src/components/FilterPanel.tsx)<br>[apps/web/src/components/KeywordSearchBar.tsx](../../../../sources/AgentBridge-Lab__korea-space-support-mcp/apps/web/src/components/KeywordSearchBar.tsx) |
| agentRuntime | 0 | not obvious |
| mcp | 13 | [korea-business-mcp-agent-instructions.md](../../../../sources/AgentBridge-Lab__korea-space-support-mcp/korea-business-mcp-agent-instructions.md)<br>[korea-business-mcp-product-plan.md](../../../../sources/AgentBridge-Lab__korea-space-support-mcp/korea-business-mcp-product-plan.md)<br>[korea-space-support-mcp-agent-instructions.md](../../../../sources/AgentBridge-Lab__korea-space-support-mcp/korea-space-support-mcp-agent-instructions.md)<br>[korea-support-mcp-agent-instructions-ko.md](../../../../sources/AgentBridge-Lab__korea-space-support-mcp/korea-support-mcp-agent-instructions-ko.md)<br>[korea-support-mcp-agent-instructions.md](../../../../sources/AgentBridge-Lab__korea-space-support-mcp/korea-support-mcp-agent-instructions.md)<br>[uk-tender-mcp-agent-instructions.md](../../../../sources/AgentBridge-Lab__korea-space-support-mcp/uk-tender-mcp-agent-instructions.md)<br>[uk-tender-mcp-product-plan.md](../../../../sources/AgentBridge-Lab__korea-space-support-mcp/uk-tender-mcp-product-plan.md)<br>[scripts/verify-space-api-mcp-smoke.mjs](../../../../sources/AgentBridge-Lab__korea-space-support-mcp/scripts/verify-space-api-mcp-smoke.mjs) |
| retrieval | 6 | [scripts/ingest-space-programs.mjs](../../../../sources/AgentBridge-Lab__korea-space-support-mcp/scripts/ingest-space-programs.mjs)<br>[packages/shared/src/index.ts](../../../../sources/AgentBridge-Lab__korea-space-support-mcp/packages/shared/src/index.ts)<br>[data/space-ingest-report.json](../../../../sources/AgentBridge-Lab__korea-space-support-mcp/data/space-ingest-report.json)<br>[apps/web/src/app/api/space-programs/ingest-report/route.ts](../../../../sources/AgentBridge-Lab__korea-space-support-mcp/apps/web/src/app/api/space-programs/ingest-report/route.ts)<br>[apps/mcp/src/index.ts](../../../../sources/AgentBridge-Lab__korea-space-support-mcp/apps/mcp/src/index.ts)<br>[apps/api/src/index.ts](../../../../sources/AgentBridge-Lab__korea-space-support-mcp/apps/api/src/index.ts) |
| spec | 1 | [docs/web-ui-spec.md](../../../../sources/AgentBridge-Lab__korea-space-support-mcp/docs/web-ui-spec.md) |
| eval | 3 | [packages/shared/src/date-utils.test.ts](../../../../sources/AgentBridge-Lab__korea-space-support-mcp/packages/shared/src/date-utils.test.ts)<br>[packages/shared/src/space-search.test.ts](../../../../sources/AgentBridge-Lab__korea-space-support-mcp/packages/shared/src/space-search.test.ts)<br>[docs/web-ui-spec.md](../../../../sources/AgentBridge-Lab__korea-space-support-mcp/docs/web-ui-spec.md) |
| security | 0 | not obvious |
| ci | 1 | [.github/workflows/verify-space.yml](../../../../sources/AgentBridge-Lab__korea-space-support-mcp/.github/workflows/verify-space.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 15 | [README.md](../../../../sources/AgentBridge-Lab__korea-space-support-mcp/README.md)<br>[docs/korea-space-data-sources.md](../../../../sources/AgentBridge-Lab__korea-space-support-mcp/docs/korea-space-data-sources.md)<br>[docs/korea-space-mcp-work-report.md](../../../../sources/AgentBridge-Lab__korea-space-support-mcp/docs/korea-space-mcp-work-report.md)<br>[docs/space-ingestion-runbook.md](../../../../sources/AgentBridge-Lab__korea-space-support-mcp/docs/space-ingestion-runbook.md)<br>[docs/space-mcp-handoff.md](../../../../sources/AgentBridge-Lab__korea-space-support-mcp/docs/space-mcp-handoff.md)<br>[docs/space-source-terms-review.md](../../../../sources/AgentBridge-Lab__korea-space-support-mcp/docs/space-source-terms-review.md)<br>[docs/uk-data-sources.md](../../../../sources/AgentBridge-Lab__korea-space-support-mcp/docs/uk-data-sources.md)<br>[docs/web-ui-spec.md](../../../../sources/AgentBridge-Lab__korea-space-support-mcp/docs/web-ui-spec.md) |
| config | 9 | [package.json](../../../../sources/AgentBridge-Lab__korea-space-support-mcp/package.json)<br>[packages/shared/package.json](../../../../sources/AgentBridge-Lab__korea-space-support-mcp/packages/shared/package.json)<br>[packages/shared/tsconfig.json](../../../../sources/AgentBridge-Lab__korea-space-support-mcp/packages/shared/tsconfig.json)<br>[apps/web/package.json](../../../../sources/AgentBridge-Lab__korea-space-support-mcp/apps/web/package.json)<br>[apps/web/tsconfig.json](../../../../sources/AgentBridge-Lab__korea-space-support-mcp/apps/web/tsconfig.json)<br>[apps/mcp/package.json](../../../../sources/AgentBridge-Lab__korea-space-support-mcp/apps/mcp/package.json)<br>[apps/mcp/tsconfig.json](../../../../sources/AgentBridge-Lab__korea-space-support-mcp/apps/mcp/tsconfig.json)<br>[apps/api/package.json](../../../../sources/AgentBridge-Lab__korea-space-support-mcp/apps/api/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 3 | [packages/shared/src/date-utils.test.ts](../../../../sources/AgentBridge-Lab__korea-space-support-mcp/packages/shared/src/date-utils.test.ts)<br>[packages/shared/src/space-search.test.ts](../../../../sources/AgentBridge-Lab__korea-space-support-mcp/packages/shared/src/space-search.test.ts)<br>[docs/web-ui-spec.md](../../../../sources/AgentBridge-Lab__korea-space-support-mcp/docs/web-ui-spec.md) |
| CI workflows | 1 | [.github/workflows/verify-space.yml](../../../../sources/AgentBridge-Lab__korea-space-support-mcp/.github/workflows/verify-space.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | security/policy surface not obvious; agent instruction files not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `korea-business-mcp-agent-instructions.md`, `korea-business-mcp-product-plan.md`, `korea-space-support-mcp-agent-instructions.md`.
2. Trace execution through entrypoints: `packages/shared/src/index.ts`, `apps/web/src/lib/api.server.ts`, `apps/web/src/lib/api.ts`.
3. Inspect retrieval/memory/indexing through: `scripts/ingest-space-programs.mjs`, `packages/shared/src/index.ts`, `data/space-ingest-report.json`.
4. Verify behavior through test/eval files: `packages/shared/src/date-utils.test.ts`, `packages/shared/src/space-search.test.ts`, `docs/web-ui-spec.md`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 한국 우주·항공·국방우주 정부 R&D 지원사업 공고 데이터셋 — 크롤러·분류기·MCP·REST API. 핵심 구조 신호는 TypeScript, package.json, README.md, LICENSE, ci, docs이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
