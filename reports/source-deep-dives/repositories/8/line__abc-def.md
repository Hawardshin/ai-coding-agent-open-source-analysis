# line/abc-def Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

ABC Def is an efficient design system using a three-tier token structure and Headless UI to create web components with consistent design and flexible customization.

## 요약

- 조사 단위: `sources/line__abc-def` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 1,292 files, 178 directories, depth score 106, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 entrypoints=packages/vue/src/index.ts, packages/styles/src/index.css, examples/vue-vite/src/App.vue이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | line/abc-def |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | TypeScript |
| Stars | 103 |
| Forks | 7 |
| License | Apache-2.0 |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/line__abc-def](../../../../sources/line__abc-def) |
| Existing report | [reports/korea-trending/repositories/line__abc-def.md](../../../korea-trending/repositories/line__abc-def.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 1292 / 178 |
| Max observed depth | 7 |
| Top directories | .changeset, .github, apps, docs, examples, packages, tooling |
| Top extensions | .vue: 607, .tsx: 449, .ts: 93, .css: 57, .json: 27, .html: 19, .md: 13, .js: 9, .yaml: 5, (none): 4, .png: 3, .mjs: 2 |
| Source patterns | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| apps/docs | apps workspace | 62 |
| packages/vue | packages workspace | 58 |
| examples/vue-vite | examples workspace | 15 |
| examples/nextjs | examples workspace | 14 |
| packages/react | packages workspace | 5 |
| examples/html-vite | examples workspace | 4 |
| packages/styles | packages workspace | 4 |
| docs | documentation surface | 2 |
| .github | ci surface | 1 |
| apps | source boundary | 1 |
| examples | top-level component | 1 |
| packages | source boundary | 1 |
| tooling | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| build | package.json | build | turbo run build |
| build | package.json | build:packages | turbo run build --filter='./packages/*' |
| build | package.json | build:examples | turbo run build --filter='./examples/*' |
| build | package.json | build:docs | turbo run build --filter @abc-def/docs |
| utility | package.json | clean | git clean -xdf node_modules .turbo .cache |
| utility | package.json | clean:workspaces | turbo run clean |
| serve-dev | package.json | dev | turbo watch dev --filter='./packages/*' --continue |
| quality | package.json | format | turbo run format --continue -- --cache --cache-location .cache/.prettiercache |
| quality | package.json | format:fix | turbo run format --continue -- --write --cache --cache-location .cache/.prettiercache |
| quality | package.json | lint | turbo run lint --continue -- --cache --cache-location .cache/.eslintcache |
| quality | package.json | lint:fix | turbo run lint --continue -- --fix --cache --cache-location .cache/.eslintcache |
| test | package.json | lint:ws | pnpm dlx sherif@latest |
| quality | package.json | postinstall | pnpm lint:ws |
| utility | package.json | changeset | changeset |
| utility | package.json | version-packages | changeset version |
| build | package.json | release | pnpm build:packages && changeset publish |
| quality | package.json | typecheck | turbo run typecheck |


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
| entrypoints | [packages/vue/src/index.ts](../../../../sources/line__abc-def/packages/vue/src/index.ts) | entrypoints signal |
| entrypoints | [packages/styles/src/index.css](../../../../sources/line__abc-def/packages/styles/src/index.css) | entrypoints signal |
| entrypoints | [examples/vue-vite/src/App.vue](../../../../sources/line__abc-def/examples/vue-vite/src/App.vue) | entrypoints signal |
| entrypoints | [examples/vue-vite/src/index.css](../../../../sources/line__abc-def/examples/vue-vite/src/index.css) | entrypoints signal |
| config | [package.json](../../../../sources/line__abc-def/package.json) | config signal |
| config | [pnpm-workspace.yaml](../../../../sources/line__abc-def/pnpm-workspace.yaml) | config signal |
| config | [turbo.json](../../../../sources/line__abc-def/turbo.json) | config signal |
| config | [tooling/typescript/package.json](../../../../sources/line__abc-def/tooling/typescript/package.json) | config signal |
| docs | [README.md](../../../../sources/line__abc-def/README.md) | docs signal |
| docs | [packages/vue/README.md](../../../../sources/line__abc-def/packages/vue/README.md) | docs signal |
| docs | [packages/styles/README.md](../../../../sources/line__abc-def/packages/styles/README.md) | docs signal |
| docs | [packages/react/README.md](../../../../sources/line__abc-def/packages/react/README.md) | docs signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 32 | [packages/vue/src/index.ts](../../../../sources/line__abc-def/packages/vue/src/index.ts)<br>[packages/styles/src/index.css](../../../../sources/line__abc-def/packages/styles/src/index.css)<br>[examples/vue-vite/src/App.vue](../../../../sources/line__abc-def/examples/vue-vite/src/App.vue)<br>[examples/vue-vite/src/index.css](../../../../sources/line__abc-def/examples/vue-vite/src/index.css)<br>[examples/vue-vite/src/main.ts](../../../../sources/line__abc-def/examples/vue-vite/src/main.ts)<br>[examples/html-vite/src/index.css](../../../../sources/line__abc-def/examples/html-vite/src/index.css)<br>[examples/html-vite/src/main.ts](../../../../sources/line__abc-def/examples/html-vite/src/main.ts)<br>[apps/docs/src/content/component-example-code.ts](../../../../sources/line__abc-def/apps/docs/src/content/component-example-code.ts) |
| agentRuntime | 40 | [packages/vue/src/components/context-menu/ContextMenu.vue](../../../../sources/line__abc-def/packages/vue/src/components/context-menu/ContextMenu.vue)<br>[packages/vue/src/components/context-menu/ContextMenuCheckboxItem.vue](../../../../sources/line__abc-def/packages/vue/src/components/context-menu/ContextMenuCheckboxItem.vue)<br>[packages/vue/src/components/context-menu/ContextMenuContent.vue](../../../../sources/line__abc-def/packages/vue/src/components/context-menu/ContextMenuContent.vue)<br>[packages/vue/src/components/context-menu/ContextMenuGroup.vue](../../../../sources/line__abc-def/packages/vue/src/components/context-menu/ContextMenuGroup.vue)<br>[packages/vue/src/components/context-menu/ContextMenuItem.vue](../../../../sources/line__abc-def/packages/vue/src/components/context-menu/ContextMenuItem.vue)<br>[packages/vue/src/components/context-menu/ContextMenuLabel.vue](../../../../sources/line__abc-def/packages/vue/src/components/context-menu/ContextMenuLabel.vue)<br>[packages/vue/src/components/context-menu/ContextMenuPortal.vue](../../../../sources/line__abc-def/packages/vue/src/components/context-menu/ContextMenuPortal.vue)<br>[packages/vue/src/components/context-menu/ContextMenuRadioGroup.vue](../../../../sources/line__abc-def/packages/vue/src/components/context-menu/ContextMenuRadioGroup.vue) |
| mcp | 0 | not obvious |
| retrieval | 64 | [tooling/prettier/index.js](../../../../sources/line__abc-def/tooling/prettier/index.js)<br>[tooling/eslint-plugin-header/index.js](../../../../sources/line__abc-def/tooling/eslint-plugin-header/index.js)<br>[packages/vue/src/index.ts](../../../../sources/line__abc-def/packages/vue/src/index.ts)<br>[packages/vue/src/components/index.ts](../../../../sources/line__abc-def/packages/vue/src/components/index.ts)<br>[packages/vue/src/components/tooltip/index.ts](../../../../sources/line__abc-def/packages/vue/src/components/tooltip/index.ts)<br>[packages/vue/src/components/toggle-group/index.ts](../../../../sources/line__abc-def/packages/vue/src/components/toggle-group/index.ts)<br>[packages/vue/src/components/toggle/index.ts](../../../../sources/line__abc-def/packages/vue/src/components/toggle/index.ts)<br>[packages/vue/src/components/textarea/index.ts](../../../../sources/line__abc-def/packages/vue/src/components/textarea/index.ts) |
| spec | 0 | not obvious |
| eval | 0 | not obvious |
| security | 1 | [SECURITY.md](../../../../sources/line__abc-def/SECURITY.md) |
| ci | 3 | [.github/workflows/ci.yaml](../../../../sources/line__abc-def/.github/workflows/ci.yaml)<br>[.github/workflows/deploy-docs.yaml](../../../../sources/line__abc-def/.github/workflows/deploy-docs.yaml)<br>[.github/workflows/publish-packages.yaml](../../../../sources/line__abc-def/.github/workflows/publish-packages.yaml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 42 | [README.md](../../../../sources/line__abc-def/README.md)<br>[packages/vue/README.md](../../../../sources/line__abc-def/packages/vue/README.md)<br>[packages/styles/README.md](../../../../sources/line__abc-def/packages/styles/README.md)<br>[packages/react/README.md](../../../../sources/line__abc-def/packages/react/README.md)<br>[docs/release.md](../../../../sources/line__abc-def/docs/release.md)<br>[apps/docs/eslint.config.js](../../../../sources/line__abc-def/apps/docs/eslint.config.js)<br>[apps/docs/next-env.d.ts](../../../../sources/line__abc-def/apps/docs/next-env.d.ts)<br>[apps/docs/next.config.ts](../../../../sources/line__abc-def/apps/docs/next.config.ts) |
| config | 24 | [package.json](../../../../sources/line__abc-def/package.json)<br>[pnpm-workspace.yaml](../../../../sources/line__abc-def/pnpm-workspace.yaml)<br>[turbo.json](../../../../sources/line__abc-def/turbo.json)<br>[tooling/typescript/package.json](../../../../sources/line__abc-def/tooling/typescript/package.json)<br>[tooling/prettier/package.json](../../../../sources/line__abc-def/tooling/prettier/package.json)<br>[tooling/prettier/tsconfig.json](../../../../sources/line__abc-def/tooling/prettier/tsconfig.json)<br>[tooling/github/package.json](../../../../sources/line__abc-def/tooling/github/package.json)<br>[tooling/eslint-plugin-header/package.json](../../../../sources/line__abc-def/tooling/eslint-plugin-header/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 0 | not obvious |
| CI workflows | 3 | [.github/workflows/ci.yaml](../../../../sources/line__abc-def/.github/workflows/ci.yaml)<br>[.github/workflows/deploy-docs.yaml](../../../../sources/line__abc-def/.github/workflows/deploy-docs.yaml)<br>[.github/workflows/publish-packages.yaml](../../../../sources/line__abc-def/.github/workflows/publish-packages.yaml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 1 | [SECURITY.md](../../../../sources/line__abc-def/SECURITY.md) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious; test/eval path not obvious |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `packages/vue/src/index.ts`, `packages/styles/src/index.css`, `examples/vue-vite/src/App.vue`.
2. Trace execution through entrypoints: `packages/vue/src/index.ts`, `packages/styles/src/index.css`, `examples/vue-vite/src/App.vue`.
3. Map agent/tool runtime through: `packages/vue/src/components/context-menu/ContextMenu.vue`, `packages/vue/src/components/context-menu/ContextMenuCheckboxItem.vue`, `packages/vue/src/components/context-menu/ContextMenuContent.vue`.
4. Inspect retrieval/memory/indexing through: `tooling/prettier/index.js`, `tooling/eslint-plugin-header/index.js`, `packages/vue/src/index.ts`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 ABC Def is an efficient design system using a three tier token structure and Headless UI to create web components with c. 핵심 구조 신호는 TypeScript, package.json, README.md, LICENSE, ci, docs이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, needs deeper structural scan입니다.
