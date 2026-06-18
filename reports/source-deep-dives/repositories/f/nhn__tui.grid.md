# nhn/tui.grid Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

🍞🔡 The Powerful Component to Display and Edit Data. Experience the Ultimate Data Transformer!

## 요약

- 조사 단위: `sources/nhn__tui.grid` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 392 files, 65 directories, depth score 96, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 monorepo/workspace, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 entrypoints=packages/toast-ui.vue-grid/src/index.js, packages/toast-ui.react-grid/src/index.js, packages/toast-ui.grid/src/index.ts이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | nhn/tui.grid |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | TypeScript |
| Stars | 2565 |
| Forks | 409 |
| License | MIT |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/nhn__tui.grid](../../../../sources/nhn__tui.grid) |
| Existing report | [reports/korea-trending/repositories/nhn__tui.grid.md](../../../korea-trending/repositories/nhn__tui.grid.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 392 / 65 |
| Max observed depth | 6 |
| Top directories | .github, docs, packages |
| Top extensions | .ts: 186, .md: 66, .tsx: 40, .html: 30, .js: 30, .json: 16, .yml: 14, .css: 4, (none): 4, .vue: 2 |
| Source patterns | monorepo/workspace, retrieval/vector path, spec/docs-driven, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| packages/toast-ui.grid | packages workspace | 126 |
| packages/toast-ui.react-grid | packages workspace | 6 |
| packages/toast-ui.vue-grid | packages workspace | 6 |
| .github | ci surface | 1 |
| docs | documentation surface | 1 |
| packages | source boundary | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| build | package.json | build | lerna run build --scope tui-grid |
| build | package.json | build:react | lerna run build --scope @toast-ui/react-grid |
| build | package.json | build:vue | lerna run build --scope @toast-ui/vue-grid |
| utility | package.json | note | tui-note |
| build | package.json | update:wrappers | lerna run update:wrapper --scope tui-grid && npm install --prefix packages/toast-ui.react-grid && npm install --prefix packages/toast-ui.vue-grid && npm run build:react && npm run build:vue |


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
| entrypoints | [packages/toast-ui.vue-grid/src/index.js](../../../../sources/nhn__tui.grid/packages/toast-ui.vue-grid/src/index.js) | entrypoints signal |
| entrypoints | [packages/toast-ui.react-grid/src/index.js](../../../../sources/nhn__tui.grid/packages/toast-ui.react-grid/src/index.js) | entrypoints signal |
| entrypoints | [packages/toast-ui.grid/src/index.ts](../../../../sources/nhn__tui.grid/packages/toast-ui.grid/src/index.ts) | entrypoints signal |
| config | [package.json](../../../../sources/nhn__tui.grid/package.json) | config signal |
| config | [packages/toast-ui.vue-grid/package.json](../../../../sources/nhn__tui.grid/packages/toast-ui.vue-grid/package.json) | config signal |
| config | [packages/toast-ui.react-grid/package.json](../../../../sources/nhn__tui.grid/packages/toast-ui.react-grid/package.json) | config signal |
| config | [packages/toast-ui.grid/package.json](../../../../sources/nhn__tui.grid/packages/toast-ui.grid/package.json) | config signal |
| docs | [README.md](../../../../sources/nhn__tui.grid/README.md) | docs signal |
| docs | [packages/toast-ui.vue-grid/README.md](../../../../sources/nhn__tui.grid/packages/toast-ui.vue-grid/README.md) | docs signal |
| docs | [packages/toast-ui.vue-grid/docs/getting-started.md](../../../../sources/nhn__tui.grid/packages/toast-ui.vue-grid/docs/getting-started.md) | docs signal |
| docs | [packages/toast-ui.react-grid/README.md](../../../../sources/nhn__tui.grid/packages/toast-ui.react-grid/README.md) | docs signal |
| eval | [packages/toast-ui.grid/cypress/integration/attributes.spec.ts](../../../../sources/nhn__tui.grid/packages/toast-ui.grid/cypress/integration/attributes.spec.ts) | eval signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 3 | [packages/toast-ui.vue-grid/src/index.js](../../../../sources/nhn__tui.grid/packages/toast-ui.vue-grid/src/index.js)<br>[packages/toast-ui.react-grid/src/index.js](../../../../sources/nhn__tui.grid/packages/toast-ui.react-grid/src/index.js)<br>[packages/toast-ui.grid/src/index.ts](../../../../sources/nhn__tui.grid/packages/toast-ui.grid/src/index.ts) |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 19 | [packages/toast-ui.vue-grid/index.d.ts](../../../../sources/nhn__tui.grid/packages/toast-ui.vue-grid/index.d.ts)<br>[packages/toast-ui.vue-grid/src/index.js](../../../../sources/nhn__tui.grid/packages/toast-ui.vue-grid/src/index.js)<br>[packages/toast-ui.react-grid/index.d.ts](../../../../sources/nhn__tui.grid/packages/toast-ui.react-grid/index.d.ts)<br>[packages/toast-ui.react-grid/stories/index.stories.js](../../../../sources/nhn__tui.grid/packages/toast-ui.react-grid/stories/index.stories.js)<br>[packages/toast-ui.react-grid/src/index.js](../../../../sources/nhn__tui.grid/packages/toast-ui.react-grid/src/index.js)<br>[packages/toast-ui.grid/index.html](../../../../sources/nhn__tui.grid/packages/toast-ui.grid/index.html)<br>[packages/toast-ui.grid/types/index.d.ts](../../../../sources/nhn__tui.grid/packages/toast-ui.grid/types/index.d.ts)<br>[packages/toast-ui.grid/types/tui-pagination/index.d.ts](../../../../sources/nhn__tui.grid/packages/toast-ui.grid/types/tui-pagination/index.d.ts) |
| spec | 36 | [packages/toast-ui.grid/cypress/integration/attributes.spec.ts](../../../../sources/nhn__tui.grid/packages/toast-ui.grid/cypress/integration/attributes.spec.ts)<br>[packages/toast-ui.grid/cypress/integration/clientPagination.spec.ts](../../../../sources/nhn__tui.grid/packages/toast-ui.grid/cypress/integration/clientPagination.spec.ts)<br>[packages/toast-ui.grid/cypress/integration/clipboard.spec.ts](../../../../sources/nhn__tui.grid/packages/toast-ui.grid/cypress/integration/clipboard.spec.ts)<br>[packages/toast-ui.grid/cypress/integration/column.spec.ts](../../../../sources/nhn__tui.grid/packages/toast-ui.grid/cypress/integration/column.spec.ts)<br>[packages/toast-ui.grid/cypress/integration/columnOptions.spec.ts](../../../../sources/nhn__tui.grid/packages/toast-ui.grid/cypress/integration/columnOptions.spec.ts)<br>[packages/toast-ui.grid/cypress/integration/combinedFeatureTest.spec.ts](../../../../sources/nhn__tui.grid/packages/toast-ui.grid/cypress/integration/combinedFeatureTest.spec.ts)<br>[packages/toast-ui.grid/cypress/integration/contextMenu.spec.ts](../../../../sources/nhn__tui.grid/packages/toast-ui.grid/cypress/integration/contextMenu.spec.ts)<br>[packages/toast-ui.grid/cypress/integration/data.spec.ts](../../../../sources/nhn__tui.grid/packages/toast-ui.grid/cypress/integration/data.spec.ts) |
| eval | 39 | [packages/toast-ui.grid/cypress/integration/attributes.spec.ts](../../../../sources/nhn__tui.grid/packages/toast-ui.grid/cypress/integration/attributes.spec.ts)<br>[packages/toast-ui.grid/cypress/integration/clientPagination.spec.ts](../../../../sources/nhn__tui.grid/packages/toast-ui.grid/cypress/integration/clientPagination.spec.ts)<br>[packages/toast-ui.grid/cypress/integration/clipboard.spec.ts](../../../../sources/nhn__tui.grid/packages/toast-ui.grid/cypress/integration/clipboard.spec.ts)<br>[packages/toast-ui.grid/cypress/integration/column.spec.ts](../../../../sources/nhn__tui.grid/packages/toast-ui.grid/cypress/integration/column.spec.ts)<br>[packages/toast-ui.grid/cypress/integration/columnOptions.spec.ts](../../../../sources/nhn__tui.grid/packages/toast-ui.grid/cypress/integration/columnOptions.spec.ts)<br>[packages/toast-ui.grid/cypress/integration/combinedFeatureTest.spec.ts](../../../../sources/nhn__tui.grid/packages/toast-ui.grid/cypress/integration/combinedFeatureTest.spec.ts)<br>[packages/toast-ui.grid/cypress/integration/contextMenu.spec.ts](../../../../sources/nhn__tui.grid/packages/toast-ui.grid/cypress/integration/contextMenu.spec.ts)<br>[packages/toast-ui.grid/cypress/integration/data.spec.ts](../../../../sources/nhn__tui.grid/packages/toast-ui.grid/cypress/integration/data.spec.ts) |
| security | 0 | not obvious |
| ci | 7 | [.github/workflows/check-types.yml](../../../../sources/nhn__tui.grid/.github/workflows/check-types.yml)<br>[.github/workflows/e2e-test.yml](../../../../sources/nhn__tui.grid/.github/workflows/e2e-test.yml)<br>[.github/workflows/example-page-test.yml](../../../../sources/nhn__tui.grid/.github/workflows/example-page-test.yml)<br>[.github/workflows/linter.yml](../../../../sources/nhn__tui.grid/.github/workflows/linter.yml)<br>[.github/workflows/publish-docs.yml](../../../../sources/nhn__tui.grid/.github/workflows/publish-docs.yml)<br>[.github/workflows/publish.yml](../../../../sources/nhn__tui.grid/.github/workflows/publish.yml)<br>[.github/workflows/visual-test.yml](../../../../sources/nhn__tui.grid/.github/workflows/visual-test.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 61 | [README.md](../../../../sources/nhn__tui.grid/README.md)<br>[packages/toast-ui.vue-grid/README.md](../../../../sources/nhn__tui.grid/packages/toast-ui.vue-grid/README.md)<br>[packages/toast-ui.vue-grid/docs/getting-started.md](../../../../sources/nhn__tui.grid/packages/toast-ui.vue-grid/docs/getting-started.md)<br>[packages/toast-ui.react-grid/README.md](../../../../sources/nhn__tui.grid/packages/toast-ui.react-grid/README.md)<br>[packages/toast-ui.grid/README.md](../../../../sources/nhn__tui.grid/packages/toast-ui.grid/README.md)<br>[packages/toast-ui.grid/docs/README.md](../../../../sources/nhn__tui.grid/packages/toast-ui.grid/docs/README.md)<br>[packages/toast-ui.grid/docs/v4.0-migration-guide-kor.md](../../../../sources/nhn__tui.grid/packages/toast-ui.grid/docs/v4.0-migration-guide-kor.md)<br>[packages/toast-ui.grid/docs/v4.0-migration-guide.md](../../../../sources/nhn__tui.grid/packages/toast-ui.grid/docs/v4.0-migration-guide.md) |
| config | 6 | [package.json](../../../../sources/nhn__tui.grid/package.json)<br>[packages/toast-ui.vue-grid/package.json](../../../../sources/nhn__tui.grid/packages/toast-ui.vue-grid/package.json)<br>[packages/toast-ui.react-grid/package.json](../../../../sources/nhn__tui.grid/packages/toast-ui.react-grid/package.json)<br>[packages/toast-ui.grid/package.json](../../../../sources/nhn__tui.grid/packages/toast-ui.grid/package.json)<br>[packages/toast-ui.grid/tsconfig.json](../../../../sources/nhn__tui.grid/packages/toast-ui.grid/tsconfig.json)<br>[packages/toast-ui.grid/cypress/tsconfig.json](../../../../sources/nhn__tui.grid/packages/toast-ui.grid/cypress/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 39 | [packages/toast-ui.grid/cypress/integration/attributes.spec.ts](../../../../sources/nhn__tui.grid/packages/toast-ui.grid/cypress/integration/attributes.spec.ts)<br>[packages/toast-ui.grid/cypress/integration/clientPagination.spec.ts](../../../../sources/nhn__tui.grid/packages/toast-ui.grid/cypress/integration/clientPagination.spec.ts)<br>[packages/toast-ui.grid/cypress/integration/clipboard.spec.ts](../../../../sources/nhn__tui.grid/packages/toast-ui.grid/cypress/integration/clipboard.spec.ts)<br>[packages/toast-ui.grid/cypress/integration/column.spec.ts](../../../../sources/nhn__tui.grid/packages/toast-ui.grid/cypress/integration/column.spec.ts)<br>[packages/toast-ui.grid/cypress/integration/columnOptions.spec.ts](../../../../sources/nhn__tui.grid/packages/toast-ui.grid/cypress/integration/columnOptions.spec.ts)<br>[packages/toast-ui.grid/cypress/integration/combinedFeatureTest.spec.ts](../../../../sources/nhn__tui.grid/packages/toast-ui.grid/cypress/integration/combinedFeatureTest.spec.ts) |
| CI workflows | 7 | [.github/workflows/check-types.yml](../../../../sources/nhn__tui.grid/.github/workflows/check-types.yml)<br>[.github/workflows/e2e-test.yml](../../../../sources/nhn__tui.grid/.github/workflows/e2e-test.yml)<br>[.github/workflows/example-page-test.yml](../../../../sources/nhn__tui.grid/.github/workflows/example-page-test.yml)<br>[.github/workflows/linter.yml](../../../../sources/nhn__tui.grid/.github/workflows/linter.yml)<br>[.github/workflows/publish-docs.yml](../../../../sources/nhn__tui.grid/.github/workflows/publish-docs.yml)<br>[.github/workflows/publish.yml](../../../../sources/nhn__tui.grid/.github/workflows/publish.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `packages/toast-ui.vue-grid/src/index.js`, `packages/toast-ui.react-grid/src/index.js`, `packages/toast-ui.grid/src/index.ts`.
2. Trace execution through entrypoints: `packages/toast-ui.vue-grid/src/index.js`, `packages/toast-ui.react-grid/src/index.js`, `packages/toast-ui.grid/src/index.ts`.
3. Inspect retrieval/memory/indexing through: `packages/toast-ui.vue-grid/index.d.ts`, `packages/toast-ui.vue-grid/src/index.js`, `packages/toast-ui.react-grid/index.d.ts`.
4. Verify behavior through test/eval files: `packages/toast-ui.grid/cypress/integration/attributes.spec.ts`, `packages/toast-ui.grid/cypress/integration/clientPagination.spec.ts`, `packages/toast-ui.grid/cypress/integration/clipboard.spec.ts`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 🍞🔡 The Powerful Component to Display and Edit Data. Experience the Ultimate Data Transformer!. 핵심 구조 신호는 TypeScript, package.json, README.md, LICENSE, ci, docs이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, needs deeper structural scan입니다.
