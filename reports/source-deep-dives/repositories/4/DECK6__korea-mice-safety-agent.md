# DECK6/korea-mice-safety-agent Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Offline ontology-based MCP agent for Korean MICE and outdoor-event safety planning

## 요약

- 조사 단위: `sources/DECK6__korea-mice-safety-agent` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 403 files, 60 directories, depth score 113, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=src/tool-registry.ts, src/tools/plan-korean-law-mcp-queries.ts이고, 의존성 단서는 modelcontextprotocol, commander, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | DECK6/korea-mice-safety-agent |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | TypeScript |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/DECK6__korea-mice-safety-agent](../../../../sources/DECK6__korea-mice-safety-agent) |
| Existing report | [reports/korea-trending/repositories/DECK6__korea-mice-safety-agent.md](../../../korea-trending/repositories/DECK6__korea-mice-safety-agent.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 403 / 60 |
| Max observed depth | 7 |
| Top directories | data, docs, outputs, scripts, src, tests |
| Top extensions | .md: 185, .csv: 89, .json: 50, .ts: 42, .mjs: 17, .html: 6, .docx: 5, .xlsx: 5, (none): 3, .example: 1 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 28 |
| docs | documentation surface | 21 |
| tests | validation surface | 3 |
| data | top-level component | 1 |
| outputs | top-level component | 1 |
| scripts | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| build | package.json | build | tsc && node -e "import('fs').then(fs=>fs.chmodSync('build/cli.js',0o755))" |
| serve-dev | package.json | start | node build/index.js |
| serve-dev | package.json | mcp:start | node build/cli.js serve |
| build | package.json | web | node build/cli.js web |
| build | package.json | tools | node build/cli.js tools |
| build | package.json | call | node build/cli.js call |
| utility | package.json | sync:venue-pdfs | node scripts/sync-venue-pdfs.mjs |
| build | package.json | build:venue-index | node scripts/build-venue-facility-index.mjs |
| build | package.json | build:public-venue-summaries | node scripts/generate-public-venue-summaries.mjs |
| build | package.json | build:kopis-directory | node build/cli.js build-venue-directory |
| utility | package.json | validate:venue-corpus | node scripts/validate-venue-corpus.mjs |
| serve-dev | package.json | audit:deps | npm audit --omit=dev --audit-level=high |
| utility | package.json | audit:package-safety | node scripts/audit-package-safety.mjs && npm run audit:deps |
| utility | package.json | prepublishOnly | npm run audit:package-safety |
| utility | package.json | apply:freshness-policy | node scripts/apply-source-freshness-policy.mjs |
| utility | package.json | audit:freshness | node scripts/audit-source-freshness.mjs |
| utility | package.json | verify:venue-sources | node scripts/verify-venue-source-links.mjs |
| utility | package.json | collect:local-ordinances | node scripts/collect-local-ordinances.mjs |
| utility | package.json | verify:priority-ordinances | node scripts/verify-priority-local-ordinance-articles.mjs |
| utility | package.json | refine:local-ordinances | node scripts/refine-local-ordinance-pack.mjs |
| utility | package.json | audit:sources | node scripts/generate-source-audit.mjs |
| utility | package.json | snapshot:ontology | node scripts/generate-ontology-diff.mjs --write-baseline |
| utility | package.json | diff:ontology | node scripts/generate-ontology-diff.mjs |
| utility | package.json | validate:scenarios | node scripts/validate-scenarios.mjs |
| quality | package.json | typecheck | tsc --noEmit |
| test | package.json | test | npm run build && node --test tests/*.test.mjs |
| entrypoint | package.json bin | cli.js | build/cli.js |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | modelcontextprotocol |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | none |
| developerSurface | commander |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [src/tool-registry.ts](../../../../sources/DECK6__korea-mice-safety-agent/src/tool-registry.ts) | mcp signal |
| mcp | [src/tools/plan-korean-law-mcp-queries.ts](../../../../sources/DECK6__korea-mice-safety-agent/src/tools/plan-korean-law-mcp-queries.ts) | mcp signal |
| agentRuntime | [src/tools/collect-mice-p0-ready-sources.ts](../../../../sources/DECK6__korea-mice-safety-agent/src/tools/collect-mice-p0-ready-sources.ts) | agentRuntime signal |
| agentRuntime | [src/tools/export-mice-safety-plan-bundle.ts](../../../../sources/DECK6__korea-mice-safety-agent/src/tools/export-mice-safety-plan-bundle.ts) | agentRuntime signal |
| agentRuntime | [src/tools/generate-mice-event-day-snapshot.ts](../../../../sources/DECK6__korea-mice-safety-agent/src/tools/generate-mice-event-day-snapshot.ts) | agentRuntime signal |
| entrypoints | [src/cli.ts](../../../../sources/DECK6__korea-mice-safety-agent/src/cli.ts) | entrypoints signal |
| entrypoints | [src/index.ts](../../../../sources/DECK6__korea-mice-safety-agent/src/index.ts) | entrypoints signal |
| entrypoints | [src/web/server.ts](../../../../sources/DECK6__korea-mice-safety-agent/src/web/server.ts) | entrypoints signal |
| config | [package.json](../../../../sources/DECK6__korea-mice-safety-agent/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/DECK6__korea-mice-safety-agent/tsconfig.json) | config signal |
| eval | [tests/domain-applicability.test.mjs](../../../../sources/DECK6__korea-mice-safety-agent/tests/domain-applicability.test.mjs) | eval support |
| eval | [tests/p0-p2-ready-keys.test.mjs](../../../../sources/DECK6__korea-mice-safety-agent/tests/p0-p2-ready-keys.test.mjs) | eval support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 3 | [src/cli.ts](../../../../sources/DECK6__korea-mice-safety-agent/src/cli.ts)<br>[src/index.ts](../../../../sources/DECK6__korea-mice-safety-agent/src/index.ts)<br>[src/web/server.ts](../../../../sources/DECK6__korea-mice-safety-agent/src/web/server.ts) |
| agentRuntime | 20 | [src/tool-registry.ts](../../../../sources/DECK6__korea-mice-safety-agent/src/tool-registry.ts)<br>[src/tools/collect-mice-p0-ready-sources.ts](../../../../sources/DECK6__korea-mice-safety-agent/src/tools/collect-mice-p0-ready-sources.ts)<br>[src/tools/export-mice-safety-plan-bundle.ts](../../../../sources/DECK6__korea-mice-safety-agent/src/tools/export-mice-safety-plan-bundle.ts)<br>[src/tools/generate-mice-event-day-snapshot.ts](../../../../sources/DECK6__korea-mice-safety-agent/src/tools/generate-mice-event-day-snapshot.ts)<br>[src/tools/generate-mice-safety-plan.ts](../../../../sources/DECK6__korea-mice-safety-agent/src/tools/generate-mice-safety-plan.ts)<br>[src/tools/list-mice-duties.ts](../../../../sources/DECK6__korea-mice-safety-agent/src/tools/list-mice-duties.ts)<br>[src/tools/list-mice-laws.ts](../../../../sources/DECK6__korea-mice-safety-agent/src/tools/list-mice-laws.ts)<br>[src/tools/mice-operations.ts](../../../../sources/DECK6__korea-mice-safety-agent/src/tools/mice-operations.ts) |
| mcp | 2 | [src/tool-registry.ts](../../../../sources/DECK6__korea-mice-safety-agent/src/tool-registry.ts)<br>[src/tools/plan-korean-law-mcp-queries.ts](../../../../sources/DECK6__korea-mice-safety-agent/src/tools/plan-korean-law-mcp-queries.ts) |
| retrieval | 11 | [src/index.ts](../../../../sources/DECK6__korea-mice-safety-agent/src/index.ts)<br>[src/ontology/mice/venue-facility-index.json](../../../../sources/DECK6__korea-mice-safety-agent/src/ontology/mice/venue-facility-index.json)<br>[scripts/build-venue-facility-index.mjs](../../../../sources/DECK6__korea-mice-safety-agent/scripts/build-venue-facility-index.mjs)<br>[outputs/may-2026-real-events/index.html](../../../../sources/DECK6__korea-mice-safety-agent/outputs/may-2026-real-events/index.html)<br>[outputs/may-2026-real-events/details/05-jungnang-rose-festival-2026/bundle/submission-packages/package-index.csv](../../../../sources/DECK6__korea-mice-safety-agent/outputs/may-2026-real-events/details/05-jungnang-rose-festival-2026/bundle/submission-packages/package-index.csv)<br>[outputs/may-2026-real-events/details/04-lotus-lantern-festival-2026/bundle/submission-packages/package-index.csv](../../../../sources/DECK6__korea-mice-safety-agent/outputs/may-2026-real-events/details/04-lotus-lantern-festival-2026/bundle/submission-packages/package-index.csv)<br>[outputs/may-2026-real-events/details/03-hangang-drone-light-show-2026/bundle/submission-packages/package-index.csv](../../../../sources/DECK6__korea-mice-safety-agent/outputs/may-2026-real-events/details/03-hangang-drone-light-show-2026/bundle/submission-packages/package-index.csv)<br>[outputs/may-2026-real-events/details/02-kintex-playx4-2026/bundle/submission-packages/package-index.csv](../../../../sources/DECK6__korea-mice-safety-agent/outputs/may-2026-real-events/details/02-kintex-playx4-2026/bundle/submission-packages/package-index.csv) |
| spec | 2 | [docs/API_ACCESS_REQUIREMENTS.md](../../../../sources/DECK6__korea-mice-safety-agent/docs/API_ACCESS_REQUIREMENTS.md)<br>[docs/PUBLIC_SITE_UX_SPEC_2026-06-11.md](../../../../sources/DECK6__korea-mice-safety-agent/docs/PUBLIC_SITE_UX_SPEC_2026-06-11.md) |
| eval | 26 | [tests/domain-applicability.test.mjs](../../../../sources/DECK6__korea-mice-safety-agent/tests/domain-applicability.test.mjs)<br>[tests/p0-p2-ready-keys.test.mjs](../../../../sources/DECK6__korea-mice-safety-agent/tests/p0-p2-ready-keys.test.mjs)<br>[outputs/real-event-tests-2026-05/summary.json](../../../../sources/DECK6__korea-mice-safety-agent/outputs/real-event-tests-2026-05/summary.json)<br>[outputs/real-event-tests-2026-05/SUMMARY.md](../../../../sources/DECK6__korea-mice-safety-agent/outputs/real-event-tests-2026-05/SUMMARY.md)<br>[outputs/real-event-tests-2026-05/kintex-playx4-2026/input.json](../../../../sources/DECK6__korea-mice-safety-agent/outputs/real-event-tests-2026-05/kintex-playx4-2026/input.json)<br>[outputs/real-event-tests-2026-05/kintex-playx4-2026/plan.md](../../../../sources/DECK6__korea-mice-safety-agent/outputs/real-event-tests-2026-05/kintex-playx4-2026/plan.md)<br>[outputs/real-event-tests-2026-05/kintex-playx4-2026/review.md](../../../../sources/DECK6__korea-mice-safety-agent/outputs/real-event-tests-2026-05/kintex-playx4-2026/review.md)<br>[outputs/real-event-tests-2026-05/kintex-playx4-2026/summary.json](../../../../sources/DECK6__korea-mice-safety-agent/outputs/real-event-tests-2026-05/kintex-playx4-2026/summary.json) |
| security | 20 | [scripts/apply-source-freshness-policy.mjs](../../../../sources/DECK6__korea-mice-safety-agent/scripts/apply-source-freshness-policy.mjs)<br>[scripts/audit-package-safety.mjs](../../../../sources/DECK6__korea-mice-safety-agent/scripts/audit-package-safety.mjs)<br>[scripts/audit-source-freshness.mjs](../../../../sources/DECK6__korea-mice-safety-agent/scripts/audit-source-freshness.mjs)<br>[scripts/generate-source-audit.mjs](../../../../sources/DECK6__korea-mice-safety-agent/scripts/generate-source-audit.mjs)<br>[outputs/may-2026-real-events/details/05-jungnang-rose-festival-2026/bundle/tables/security-access-plan.csv](../../../../sources/DECK6__korea-mice-safety-agent/outputs/may-2026-real-events/details/05-jungnang-rose-festival-2026/bundle/tables/security-access-plan.csv)<br>[outputs/may-2026-real-events/details/05-jungnang-rose-festival-2026/bundle/documents/08-security-access-plan.md](../../../../sources/DECK6__korea-mice-safety-agent/outputs/may-2026-real-events/details/05-jungnang-rose-festival-2026/bundle/documents/08-security-access-plan.md)<br>[outputs/may-2026-real-events/details/04-lotus-lantern-festival-2026/bundle/tables/security-access-plan.csv](../../../../sources/DECK6__korea-mice-safety-agent/outputs/may-2026-real-events/details/04-lotus-lantern-festival-2026/bundle/tables/security-access-plan.csv)<br>[outputs/may-2026-real-events/details/04-lotus-lantern-festival-2026/bundle/documents/08-security-access-plan.md](../../../../sources/DECK6__korea-mice-safety-agent/outputs/may-2026-real-events/details/04-lotus-lantern-festival-2026/bundle/documents/08-security-access-plan.md) |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 15 | [README.md](../../../../sources/DECK6__korea-mice-safety-agent/README.md)<br>[docs/API_ACCESS_REQUIREMENTS.md](../../../../sources/DECK6__korea-mice-safety-agent/docs/API_ACCESS_REQUIREMENTS.md)<br>[docs/CODEX_GOAL_P0_P2_READY_KEYS.md](../../../../sources/DECK6__korea-mice-safety-agent/docs/CODEX_GOAL_P0_P2_READY_KEYS.md)<br>[docs/DEVELOPMENT_NOTES.md](../../../../sources/DECK6__korea-mice-safety-agent/docs/DEVELOPMENT_NOTES.md)<br>[docs/FUTURE_DEVELOPMENT_PLAN.md](../../../../sources/DECK6__korea-mice-safety-agent/docs/FUTURE_DEVELOPMENT_PLAN.md)<br>[docs/ONTOLOGY_DIFF.md](../../../../sources/DECK6__korea-mice-safety-agent/docs/ONTOLOGY_DIFF.md)<br>[docs/PUBLIC_SITE_UX_SPEC_2026-06-11.md](../../../../sources/DECK6__korea-mice-safety-agent/docs/PUBLIC_SITE_UX_SPEC_2026-06-11.md)<br>[docs/RELEASE_CHECKLIST.md](../../../../sources/DECK6__korea-mice-safety-agent/docs/RELEASE_CHECKLIST.md) |
| config | 2 | [package.json](../../../../sources/DECK6__korea-mice-safety-agent/package.json)<br>[tsconfig.json](../../../../sources/DECK6__korea-mice-safety-agent/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 26 | [tests/domain-applicability.test.mjs](../../../../sources/DECK6__korea-mice-safety-agent/tests/domain-applicability.test.mjs)<br>[tests/p0-p2-ready-keys.test.mjs](../../../../sources/DECK6__korea-mice-safety-agent/tests/p0-p2-ready-keys.test.mjs)<br>[outputs/real-event-tests-2026-05/summary.json](../../../../sources/DECK6__korea-mice-safety-agent/outputs/real-event-tests-2026-05/summary.json)<br>[outputs/real-event-tests-2026-05/SUMMARY.md](../../../../sources/DECK6__korea-mice-safety-agent/outputs/real-event-tests-2026-05/SUMMARY.md)<br>[outputs/real-event-tests-2026-05/kintex-playx4-2026/input.json](../../../../sources/DECK6__korea-mice-safety-agent/outputs/real-event-tests-2026-05/kintex-playx4-2026/input.json)<br>[outputs/real-event-tests-2026-05/kintex-playx4-2026/plan.md](../../../../sources/DECK6__korea-mice-safety-agent/outputs/real-event-tests-2026-05/kintex-playx4-2026/plan.md) |
| CI workflows | 0 | not obvious |
| Containers / deploy | 0 | not obvious |
| Security / policy | 20 | [scripts/apply-source-freshness-policy.mjs](../../../../sources/DECK6__korea-mice-safety-agent/scripts/apply-source-freshness-policy.mjs)<br>[scripts/audit-package-safety.mjs](../../../../sources/DECK6__korea-mice-safety-agent/scripts/audit-package-safety.mjs)<br>[scripts/audit-source-freshness.mjs](../../../../sources/DECK6__korea-mice-safety-agent/scripts/audit-source-freshness.mjs)<br>[scripts/generate-source-audit.mjs](../../../../sources/DECK6__korea-mice-safety-agent/scripts/generate-source-audit.mjs)<br>[outputs/may-2026-real-events/details/05-jungnang-rose-festival-2026/bundle/tables/security-access-plan.csv](../../../../sources/DECK6__korea-mice-safety-agent/outputs/may-2026-real-events/details/05-jungnang-rose-festival-2026/bundle/tables/security-access-plan.csv)<br>[outputs/may-2026-real-events/details/05-jungnang-rose-festival-2026/bundle/documents/08-security-access-plan.md](../../../../sources/DECK6__korea-mice-safety-agent/outputs/may-2026-real-events/details/05-jungnang-rose-festival-2026/bundle/documents/08-security-access-plan.md) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | CI workflow path not obvious; container/deploy path not obvious |
| security | agent instruction files not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `src/tool-registry.ts`, `src/tools/plan-korean-law-mcp-queries.ts`, `src/tools/collect-mice-p0-ready-sources.ts`.
2. Trace execution through entrypoints: `src/cli.ts`, `src/index.ts`, `src/web/server.ts`.
3. Map agent/tool runtime through: `src/tool-registry.ts`, `src/tools/collect-mice-p0-ready-sources.ts`, `src/tools/export-mice-safety-plan-bundle.ts`.
4. Inspect retrieval/memory/indexing through: `src/index.ts`, `src/ontology/mice/venue-facility-index.json`, `scripts/build-venue-facility-index.mjs`.
5. Verify behavior through test/eval files: `tests/domain-applicability.test.mjs`, `tests/p0-p2-ready-keys.test.mjs`, `outputs/real-event-tests-2026-05/summary.json`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Offline ontology based MCP agent for Korean MICE and outdoor event safety planning. 핵심 구조 신호는 TypeScript, package.json, README.md, LICENSE, modelcontextprotocol, tests이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 ci signal not obvious, license metadata missing, needs deeper structural scan입니다.
