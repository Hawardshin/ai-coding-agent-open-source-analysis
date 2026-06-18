# daangn/stackflow Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

🧱 Mobile-first stack navigator framework with composable plugin system

## 요약

- 조사 단위: `sources/daangn__stackflow` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 2,006 files, 107 directories, depth score 120, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 entrypoints=integrations/react/src/index.ts, extensions/react-ui-core/src/index.ts, extensions/plugin-stack-depth-change/src/index.ts이고, 의존성 단서는 react, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | daangn/stackflow |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | TypeScript |
| Stars | 1017 |
| Forks | 115 |
| License | MIT |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/daangn__stackflow](../../../../sources/daangn__stackflow) |
| Existing report | [reports/korea-trending/repositories/daangn__stackflow.md](../../../korea-trending/repositories/daangn__stackflow.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 2006 / 107 |
| Max observed depth | 7 |
| Top directories | .agents, .changeset, .claude, .github, .yarn, config, core, demo, docs, extensions, integrations, packages, scripts |
| Top extensions | .zip: 1464, .ts: 230, .tsx: 73, .md: 64, .json: 57, .mdx: 52, .js: 29, .yml: 6, (none): 6, .cjs: 4, .png: 4, .css: 2 |
| Source patterns | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, ui/extension surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 33 |
| packages/esbuild-config | packages workspace | 2 |
| .github | ci surface | 1 |
| config | top-level component | 1 |
| core | top-level component | 1 |
| demo | top-level component | 1 |
| extensions | top-level component | 1 |
| integrations | top-level component | 1 |
| packages | source boundary | 1 |
| scripts | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| build | package.json | build | ultra -r build |
| build | package.json | build:dts | ultra -r --build build:dts |
| utility | package.json | clean | ultra -r clean |
| serve-dev | package.json | dev | ultra -r --concurrency 100 dev |
| quality | package.json | format | biome check --write . |
| quality | package.json | lint | biome lint . |
| utility | package.json | changeset:version | yarn workspace @stackflow/docs generate:changelog && changeset version && yarn install --no-immutable |
| build | package.json | release | yarn clean && yarn build && changeset && yarn changeset:version && changeset publish |
| build | package.json | release:canary | yarn clean && yarn build && changeset pre enter canary && changeset && yarn changeset:version && changeset publish && changeset pre exit |
| test | package.json | test | yarn build && ultra -r test |
| quality | package.json | typecheck | ultra -r typecheck |
| utility | package.json | version | yarn install && git stage yarn.lock |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | react |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| entrypoints | [integrations/react/src/index.ts](../../../../sources/daangn__stackflow/integrations/react/src/index.ts) | entrypoints signal |
| entrypoints | [extensions/react-ui-core/src/index.ts](../../../../sources/daangn__stackflow/extensions/react-ui-core/src/index.ts) | entrypoints signal |
| entrypoints | [extensions/plugin-stack-depth-change/src/index.ts](../../../../sources/daangn__stackflow/extensions/plugin-stack-depth-change/src/index.ts) | entrypoints signal |
| entrypoints | [extensions/plugin-sentry/src/index.ts](../../../../sources/daangn__stackflow/extensions/plugin-sentry/src/index.ts) | entrypoints signal |
| config | [package.json](../../../../sources/daangn__stackflow/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/daangn__stackflow/tsconfig.json) | config signal |
| config | [packages/esbuild-config/package.json](../../../../sources/daangn__stackflow/packages/esbuild-config/package.json) | config signal |
| config | [integrations/react/package.json](../../../../sources/daangn__stackflow/integrations/react/package.json) | config signal |
| docs | [README.md](../../../../sources/daangn__stackflow/README.md) | docs signal |
| docs | [integrations/react/README.md](../../../../sources/daangn__stackflow/integrations/react/README.md) | docs signal |
| docs | [extensions/react-ui-core/README.md](../../../../sources/daangn__stackflow/extensions/react-ui-core/README.md) | docs signal |
| docs | [extensions/plugin-stack-depth-change/README.md](../../../../sources/daangn__stackflow/extensions/plugin-stack-depth-change/README.md) | docs signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 23 | [integrations/react/src/index.ts](../../../../sources/daangn__stackflow/integrations/react/src/index.ts)<br>[extensions/react-ui-core/src/index.ts](../../../../sources/daangn__stackflow/extensions/react-ui-core/src/index.ts)<br>[extensions/plugin-stack-depth-change/src/index.ts](../../../../sources/daangn__stackflow/extensions/plugin-stack-depth-change/src/index.ts)<br>[extensions/plugin-sentry/src/index.ts](../../../../sources/daangn__stackflow/extensions/plugin-sentry/src/index.ts)<br>[extensions/plugin-renderer-web/src/index.ts](../../../../sources/daangn__stackflow/extensions/plugin-renderer-web/src/index.ts)<br>[extensions/plugin-renderer-basic/src/index.ts](../../../../sources/daangn__stackflow/extensions/plugin-renderer-basic/src/index.ts)<br>[extensions/plugin-lifecycle/src/index.ts](../../../../sources/daangn__stackflow/extensions/plugin-lifecycle/src/index.ts)<br>[extensions/plugin-history-sync/src/index.ts](../../../../sources/daangn__stackflow/extensions/plugin-history-sync/src/index.ts) |
| agentRuntime | 28 | [AGENTS.md](../../../../sources/daangn__stackflow/AGENTS.md)<br>[.yarn/cache/agent-base-npm-6.0.2-428f325a93-21fb903e09.zip](../../../../sources/daangn__stackflow/.yarn/cache/agent-base-npm-6.0.2-428f325a93-21fb903e09.zip)<br>[.agents/skills/review-react/SKILL.md](../../../../sources/daangn__stackflow/.agents/skills/review-react/SKILL.md)<br>[.agents/skills/review-react/rules/_sections.md](../../../../sources/daangn__stackflow/.agents/skills/review-react/rules/_sections.md)<br>[.agents/skills/review-react/rules/_template.md](../../../../sources/daangn__stackflow/.agents/skills/review-react/rules/_template.md)<br>[.agents/skills/review-react/rules/advanced-event-handler-refs.md](../../../../sources/daangn__stackflow/.agents/skills/review-react/rules/advanced-event-handler-refs.md)<br>[.agents/skills/review-react/rules/advanced-init-once.md](../../../../sources/daangn__stackflow/.agents/skills/review-react/rules/advanced-init-once.md)<br>[.agents/skills/review-react/rules/react-rules-calling.md](../../../../sources/daangn__stackflow/.agents/skills/review-react/rules/react-rules-calling.md) |
| mcp | 0 | not obvious |
| retrieval | 45 | [packages/esbuild-config/index.js](../../../../sources/daangn__stackflow/packages/esbuild-config/index.js)<br>[integrations/react/src/index.ts](../../../../sources/daangn__stackflow/integrations/react/src/index.ts)<br>[integrations/react/src/utils/index.ts](../../../../sources/daangn__stackflow/integrations/react/src/utils/index.ts)<br>[integrations/react/src/stack/index.ts](../../../../sources/daangn__stackflow/integrations/react/src/stack/index.ts)<br>[integrations/react/src/shims/index.ts](../../../../sources/daangn__stackflow/integrations/react/src/shims/index.ts)<br>[integrations/react/src/plugins/index.ts](../../../../sources/daangn__stackflow/integrations/react/src/plugins/index.ts)<br>[integrations/react/src/loader/index.ts](../../../../sources/daangn__stackflow/integrations/react/src/loader/index.ts)<br>[integrations/react/src/core/index.ts](../../../../sources/daangn__stackflow/integrations/react/src/core/index.ts) |
| spec | 25 | [extensions/plugin-lifecycle/src/lifecyclePlugin.spec.tsx](../../../../sources/daangn__stackflow/extensions/plugin-lifecycle/src/lifecyclePlugin.spec.tsx)<br>[extensions/plugin-history-sync/src/historySyncPlugin.react.spec.tsx](../../../../sources/daangn__stackflow/extensions/plugin-history-sync/src/historySyncPlugin.react.spec.tsx)<br>[extensions/plugin-history-sync/src/historySyncPlugin.spec.ts](../../../../sources/daangn__stackflow/extensions/plugin-history-sync/src/historySyncPlugin.spec.ts)<br>[extensions/plugin-history-sync/src/last.spec.ts](../../../../sources/daangn__stackflow/extensions/plugin-history-sync/src/last.spec.ts)<br>[extensions/plugin-history-sync/src/makeTemplate.spec.ts](../../../../sources/daangn__stackflow/extensions/plugin-history-sync/src/makeTemplate.spec.ts)<br>[extensions/plugin-history-sync/src/normalizeActivityRouteMap.spec.ts](../../../../sources/daangn__stackflow/extensions/plugin-history-sync/src/normalizeActivityRouteMap.spec.ts)<br>[extensions/plugin-history-sync/src/normalizeRouteInput.spec.ts](../../../../sources/daangn__stackflow/extensions/plugin-history-sync/src/normalizeRouteInput.spec.ts)<br>[extensions/plugin-history-sync/src/sortActivityRoutes.spec.ts](../../../../sources/daangn__stackflow/extensions/plugin-history-sync/src/sortActivityRoutes.spec.ts) |
| eval | 29 | [extensions/plugin-lifecycle/src/lifecyclePlugin.spec.tsx](../../../../sources/daangn__stackflow/extensions/plugin-lifecycle/src/lifecyclePlugin.spec.tsx)<br>[extensions/plugin-history-sync/src/historySyncPlugin.react.spec.tsx](../../../../sources/daangn__stackflow/extensions/plugin-history-sync/src/historySyncPlugin.react.spec.tsx)<br>[extensions/plugin-history-sync/src/historySyncPlugin.spec.ts](../../../../sources/daangn__stackflow/extensions/plugin-history-sync/src/historySyncPlugin.spec.ts)<br>[extensions/plugin-history-sync/src/last.spec.ts](../../../../sources/daangn__stackflow/extensions/plugin-history-sync/src/last.spec.ts)<br>[extensions/plugin-history-sync/src/makeTemplate.spec.ts](../../../../sources/daangn__stackflow/extensions/plugin-history-sync/src/makeTemplate.spec.ts)<br>[extensions/plugin-history-sync/src/normalizeActivityRouteMap.spec.ts](../../../../sources/daangn__stackflow/extensions/plugin-history-sync/src/normalizeActivityRouteMap.spec.ts)<br>[extensions/plugin-history-sync/src/normalizeRouteInput.spec.ts](../../../../sources/daangn__stackflow/extensions/plugin-history-sync/src/normalizeRouteInput.spec.ts)<br>[extensions/plugin-history-sync/src/sortActivityRoutes.spec.ts](../../../../sources/daangn__stackflow/extensions/plugin-history-sync/src/sortActivityRoutes.spec.ts) |
| security | 0 | not obvious |
| ci | 4 | [.github/workflows/build.yml](../../../../sources/daangn__stackflow/.github/workflows/build.yml)<br>[.github/workflows/integration.yml](../../../../sources/daangn__stackflow/.github/workflows/integration.yml)<br>[.github/workflows/opencode.yml](../../../../sources/daangn__stackflow/.github/workflows/opencode.yml)<br>[.github/workflows/release.yml](../../../../sources/daangn__stackflow/.github/workflows/release.yml) |
| container | 0 | not obvious |
| instruction | 1 | [AGENTS.md](../../../../sources/daangn__stackflow/AGENTS.md) |
| docs | 118 | [README.md](../../../../sources/daangn__stackflow/README.md)<br>[integrations/react/README.md](../../../../sources/daangn__stackflow/integrations/react/README.md)<br>[extensions/react-ui-core/README.md](../../../../sources/daangn__stackflow/extensions/react-ui-core/README.md)<br>[extensions/plugin-stack-depth-change/README.md](../../../../sources/daangn__stackflow/extensions/plugin-stack-depth-change/README.md)<br>[extensions/plugin-sentry/README.md](../../../../sources/daangn__stackflow/extensions/plugin-sentry/README.md)<br>[extensions/plugin-renderer-web/README.md](../../../../sources/daangn__stackflow/extensions/plugin-renderer-web/README.md)<br>[extensions/plugin-renderer-basic/README.md](../../../../sources/daangn__stackflow/extensions/plugin-renderer-basic/README.md)<br>[extensions/plugin-lifecycle/README.md](../../../../sources/daangn__stackflow/extensions/plugin-lifecycle/README.md) |
| config | 41 | [package.json](../../../../sources/daangn__stackflow/package.json)<br>[tsconfig.json](../../../../sources/daangn__stackflow/tsconfig.json)<br>[packages/esbuild-config/package.json](../../../../sources/daangn__stackflow/packages/esbuild-config/package.json)<br>[integrations/react/package.json](../../../../sources/daangn__stackflow/integrations/react/package.json)<br>[integrations/react/tsconfig.json](../../../../sources/daangn__stackflow/integrations/react/tsconfig.json)<br>[extensions/react-ui-core/package.json](../../../../sources/daangn__stackflow/extensions/react-ui-core/package.json)<br>[extensions/react-ui-core/tsconfig.json](../../../../sources/daangn__stackflow/extensions/react-ui-core/tsconfig.json)<br>[extensions/plugin-stack-depth-change/package.json](../../../../sources/daangn__stackflow/extensions/plugin-stack-depth-change/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 29 | [extensions/plugin-lifecycle/src/lifecyclePlugin.spec.tsx](../../../../sources/daangn__stackflow/extensions/plugin-lifecycle/src/lifecyclePlugin.spec.tsx)<br>[extensions/plugin-history-sync/src/historySyncPlugin.react.spec.tsx](../../../../sources/daangn__stackflow/extensions/plugin-history-sync/src/historySyncPlugin.react.spec.tsx)<br>[extensions/plugin-history-sync/src/historySyncPlugin.spec.ts](../../../../sources/daangn__stackflow/extensions/plugin-history-sync/src/historySyncPlugin.spec.ts)<br>[extensions/plugin-history-sync/src/last.spec.ts](../../../../sources/daangn__stackflow/extensions/plugin-history-sync/src/last.spec.ts)<br>[extensions/plugin-history-sync/src/makeTemplate.spec.ts](../../../../sources/daangn__stackflow/extensions/plugin-history-sync/src/makeTemplate.spec.ts)<br>[extensions/plugin-history-sync/src/normalizeActivityRouteMap.spec.ts](../../../../sources/daangn__stackflow/extensions/plugin-history-sync/src/normalizeActivityRouteMap.spec.ts) |
| CI workflows | 4 | [.github/workflows/build.yml](../../../../sources/daangn__stackflow/.github/workflows/build.yml)<br>[.github/workflows/integration.yml](../../../../sources/daangn__stackflow/.github/workflows/integration.yml)<br>[.github/workflows/opencode.yml](../../../../sources/daangn__stackflow/.github/workflows/opencode.yml)<br>[.github/workflows/release.yml](../../../../sources/daangn__stackflow/.github/workflows/release.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 1 | [AGENTS.md](../../../../sources/daangn__stackflow/AGENTS.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `integrations/react/src/index.ts`, `extensions/react-ui-core/src/index.ts`, `extensions/plugin-stack-depth-change/src/index.ts`.
2. Trace execution through entrypoints: `integrations/react/src/index.ts`, `extensions/react-ui-core/src/index.ts`, `extensions/plugin-stack-depth-change/src/index.ts`.
3. Map agent/tool runtime through: `AGENTS.md`, `.yarn/cache/agent-base-npm-6.0.2-428f325a93-21fb903e09.zip`, `.agents/skills/review-react/SKILL.md`.
4. Inspect retrieval/memory/indexing through: `packages/esbuild-config/index.js`, `integrations/react/src/index.ts`, `integrations/react/src/utils/index.ts`.
5. Verify behavior through test/eval files: `extensions/plugin-lifecycle/src/lifecyclePlugin.spec.tsx`, `extensions/plugin-history-sync/src/historySyncPlugin.react.spec.tsx`, `extensions/plugin-history-sync/src/historySyncPlugin.spec.ts`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 🧱 Mobile first stack navigator framework with composable plugin system. 핵심 구조 신호는 TypeScript, package.json, README.md, AGENTS.md, LICENSE, react이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, needs deeper structural scan입니다.
