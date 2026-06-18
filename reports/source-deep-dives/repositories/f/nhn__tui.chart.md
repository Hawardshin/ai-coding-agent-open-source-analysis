# nhn/tui.chart Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

🍞📊 Beautiful chart for data visualization.

## 요약

- 조사 단위: `sources/nhn__tui.chart` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 620 files, 59 directories, depth score 108, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 monorepo/workspace, api/server, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 entrypoints=apps/vue-chart/src/base.js, apps/vue-chart/src/index.js, apps/shared/src/index.ts이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | nhn/tui.chart |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | TypeScript |
| Stars | 5403 |
| Forks | 318 |
| License | MIT |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/nhn__tui.chart](../../../../sources/nhn__tui.chart) |
| Existing report | [reports/korea-trending/repositories/nhn__tui.chart.md](../../../korea-trending/repositories/nhn__tui.chart.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 620 / 59 |
| Max observed depth | 5 |
| Top directories | .github, apps, docs |
| Top extensions | .ts: 291, .html: 174, .md: 74, .js: 30, .json: 28, .yml: 12, (none): 7, .css: 3, .tsx: 1 |
| Source patterns | monorepo/workspace, api/server, retrieval/vector path, spec/docs-driven, eval/test harness, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| apps/chart | apps workspace | 89 |
| apps/map-chart | apps workspace | 46 |
| docs | documentation surface | 40 |
| apps/shared | apps workspace | 13 |
| apps/react-chart | apps workspace | 8 |
| apps/vue-chart | apps workspace | 7 |
| .github | ci surface | 1 |
| apps | source boundary | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| build | package.json | build | lerna run build |
| build | package.json | build:chart | lerna run --scope @toast-ui/chart build |
| build | package.json | build:react | lerna run --scope @toast-ui/react-chart build |
| build | package.json | build:vue | lerna run --scope @toast-ui/vue-chart build |


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
| entrypoints | [apps/vue-chart/src/base.js](../../../../sources/nhn__tui.chart/apps/vue-chart/src/base.js) | entrypoints signal |
| entrypoints | [apps/vue-chart/src/index.js](../../../../sources/nhn__tui.chart/apps/vue-chart/src/index.js) | entrypoints signal |
| entrypoints | [apps/shared/src/index.ts](../../../../sources/nhn__tui.chart/apps/shared/src/index.ts) | entrypoints signal |
| entrypoints | [apps/shared/src/store/reactive.ts](../../../../sources/nhn__tui.chart/apps/shared/src/store/reactive.ts) | entrypoints signal |
| config | [package.json](../../../../sources/nhn__tui.chart/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/nhn__tui.chart/tsconfig.json) | config signal |
| config | [apps/vue-chart/package.json](../../../../sources/nhn__tui.chart/apps/vue-chart/package.json) | config signal |
| config | [apps/shared/package.json](../../../../sources/nhn__tui.chart/apps/shared/package.json) | config signal |
| docs | [README.md](../../../../sources/nhn__tui.chart/README.md) | docs signal |
| docs | [docs/COMMIT_MESSAGE_CONVENTION.md](../../../../sources/nhn__tui.chart/docs/COMMIT_MESSAGE_CONVENTION.md) | docs signal |
| docs | [docs/PULL_REQUEST_TEMPLATE](../../../../sources/nhn__tui.chart/docs/PULL_REQUEST_TEMPLATE) | docs signal |
| docs | [docs/README.md](../../../../sources/nhn__tui.chart/docs/README.md) | docs signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 171 | [apps/vue-chart/src/base.js](../../../../sources/nhn__tui.chart/apps/vue-chart/src/base.js)<br>[apps/vue-chart/src/index.js](../../../../sources/nhn__tui.chart/apps/vue-chart/src/index.js)<br>[apps/shared/src/index.ts](../../../../sources/nhn__tui.chart/apps/shared/src/index.ts)<br>[apps/shared/src/store/reactive.ts](../../../../sources/nhn__tui.chart/apps/shared/src/store/reactive.ts)<br>[apps/shared/src/helpers/color.ts](../../../../sources/nhn__tui.chart/apps/shared/src/helpers/color.ts)<br>[apps/shared/src/helpers/dom.ts](../../../../sources/nhn__tui.chart/apps/shared/src/helpers/dom.ts)<br>[apps/shared/src/helpers/eventEmitter.ts](../../../../sources/nhn__tui.chart/apps/shared/src/helpers/eventEmitter.ts)<br>[apps/shared/src/helpers/htmlSanitizer.ts](../../../../sources/nhn__tui.chart/apps/shared/src/helpers/htmlSanitizer.ts) |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 15 | [apps/vue-chart/index.d.ts](../../../../sources/nhn__tui.chart/apps/vue-chart/index.d.ts)<br>[apps/vue-chart/src/index.js](../../../../sources/nhn__tui.chart/apps/vue-chart/src/index.js)<br>[apps/vue-chart/demo/index.html](../../../../sources/nhn__tui.chart/apps/vue-chart/demo/index.html)<br>[apps/vue-chart/demo/index.js](../../../../sources/nhn__tui.chart/apps/vue-chart/demo/index.js)<br>[apps/shared/types/index.d.ts](../../../../sources/nhn__tui.chart/apps/shared/types/index.d.ts)<br>[apps/shared/src/index.ts](../../../../sources/nhn__tui.chart/apps/shared/src/index.ts)<br>[apps/react-chart/index.d.ts](../../../../sources/nhn__tui.chart/apps/react-chart/index.d.ts)<br>[apps/react-chart/src/index.ts](../../../../sources/nhn__tui.chart/apps/react-chart/src/index.ts) |
| spec | 58 | [apps/map-chart/tests/store/layout.spec.ts](../../../../sources/nhn__tui.chart/apps/map-chart/tests/store/layout.spec.ts)<br>[apps/map-chart/tests/store/legend.spec.ts](../../../../sources/nhn__tui.chart/apps/map-chart/tests/store/legend.spec.ts)<br>[apps/map-chart/tests/store/root.spec.ts](../../../../sources/nhn__tui.chart/apps/map-chart/tests/store/root.spec.ts)<br>[apps/map-chart/tests/store/scale.spec.ts](../../../../sources/nhn__tui.chart/apps/map-chart/tests/store/scale.spec.ts)<br>[apps/map-chart/tests/store/series.spec.ts](../../../../sources/nhn__tui.chart/apps/map-chart/tests/store/series.spec.ts)<br>[apps/map-chart/tests/store/theme.spec.ts](../../../../sources/nhn__tui.chart/apps/map-chart/tests/store/theme.spec.ts)<br>[apps/map-chart/tests/helpers/tooltip.spec.ts](../../../../sources/nhn__tui.chart/apps/map-chart/tests/helpers/tooltip.spec.ts)<br>[apps/chart/tests/store/axes.spec.ts](../../../../sources/nhn__tui.chart/apps/chart/tests/store/axes.spec.ts) |
| eval | 60 | [apps/map-chart/tests/store/layout.spec.ts](../../../../sources/nhn__tui.chart/apps/map-chart/tests/store/layout.spec.ts)<br>[apps/map-chart/tests/store/legend.spec.ts](../../../../sources/nhn__tui.chart/apps/map-chart/tests/store/legend.spec.ts)<br>[apps/map-chart/tests/store/root.spec.ts](../../../../sources/nhn__tui.chart/apps/map-chart/tests/store/root.spec.ts)<br>[apps/map-chart/tests/store/scale.spec.ts](../../../../sources/nhn__tui.chart/apps/map-chart/tests/store/scale.spec.ts)<br>[apps/map-chart/tests/store/series.spec.ts](../../../../sources/nhn__tui.chart/apps/map-chart/tests/store/series.spec.ts)<br>[apps/map-chart/tests/store/theme.spec.ts](../../../../sources/nhn__tui.chart/apps/map-chart/tests/store/theme.spec.ts)<br>[apps/map-chart/tests/helpers/tooltip.spec.ts](../../../../sources/nhn__tui.chart/apps/map-chart/tests/helpers/tooltip.spec.ts)<br>[apps/chart/tests/store/axes.spec.ts](../../../../sources/nhn__tui.chart/apps/chart/tests/store/axes.spec.ts) |
| security | 0 | not obvious |
| ci | 9 | [.github/workflows/chart-check-types.yml](../../../../sources/nhn__tui.chart/.github/workflows/chart-check-types.yml)<br>[.github/workflows/chart-linter.yml](../../../../sources/nhn__tui.chart/.github/workflows/chart-linter.yml)<br>[.github/workflows/chart-test.yml](../../../../sources/nhn__tui.chart/.github/workflows/chart-test.yml)<br>[.github/workflows/map-chart-check-types.yml](../../../../sources/nhn__tui.chart/.github/workflows/map-chart-check-types.yml)<br>[.github/workflows/map-chart-linter.yml](../../../../sources/nhn__tui.chart/.github/workflows/map-chart-linter.yml)<br>[.github/workflows/map-chart-test.yml](../../../../sources/nhn__tui.chart/.github/workflows/map-chart-test.yml)<br>[.github/workflows/publish-docs.yml](../../../../sources/nhn__tui.chart/.github/workflows/publish-docs.yml)<br>[.github/workflows/publish-wrapper.yml](../../../../sources/nhn__tui.chart/.github/workflows/publish-wrapper.yml) |
| container | 19 | [apps/chart/src/charts/areaChart.ts](../../../../sources/nhn__tui.chart/apps/chart/src/charts/areaChart.ts)<br>[apps/chart/src/charts/barChart.ts](../../../../sources/nhn__tui.chart/apps/chart/src/charts/barChart.ts)<br>[apps/chart/src/charts/boxPlotChart.ts](../../../../sources/nhn__tui.chart/apps/chart/src/charts/boxPlotChart.ts)<br>[apps/chart/src/charts/bubbleChart.ts](../../../../sources/nhn__tui.chart/apps/chart/src/charts/bubbleChart.ts)<br>[apps/chart/src/charts/bulletChart.ts](../../../../sources/nhn__tui.chart/apps/chart/src/charts/bulletChart.ts)<br>[apps/chart/src/charts/chart.ts](../../../../sources/nhn__tui.chart/apps/chart/src/charts/chart.ts)<br>[apps/chart/src/charts/columnChart.ts](../../../../sources/nhn__tui.chart/apps/chart/src/charts/columnChart.ts)<br>[apps/chart/src/charts/columnLineChart.ts](../../../../sources/nhn__tui.chart/apps/chart/src/charts/columnLineChart.ts) |
| instruction | 0 | not obvious |
| docs | 72 | [README.md](../../../../sources/nhn__tui.chart/README.md)<br>[docs/COMMIT_MESSAGE_CONVENTION.md](../../../../sources/nhn__tui.chart/docs/COMMIT_MESSAGE_CONVENTION.md)<br>[docs/PULL_REQUEST_TEMPLATE](../../../../sources/nhn__tui.chart/docs/PULL_REQUEST_TEMPLATE)<br>[docs/README.md](../../../../sources/nhn__tui.chart/docs/README.md)<br>[docs/v4.0-migration-guide-en.md](../../../../sources/nhn__tui.chart/docs/v4.0-migration-guide-en.md)<br>[docs/v4.0-migration-guide-ko.md](../../../../sources/nhn__tui.chart/docs/v4.0-migration-guide-ko.md)<br>[docs/ko/chart-area.md](../../../../sources/nhn__tui.chart/docs/ko/chart-area.md)<br>[docs/ko/chart-bar.md](../../../../sources/nhn__tui.chart/docs/ko/chart-bar.md) |
| config | 11 | [package.json](../../../../sources/nhn__tui.chart/package.json)<br>[tsconfig.json](../../../../sources/nhn__tui.chart/tsconfig.json)<br>[apps/vue-chart/package.json](../../../../sources/nhn__tui.chart/apps/vue-chart/package.json)<br>[apps/shared/package.json](../../../../sources/nhn__tui.chart/apps/shared/package.json)<br>[apps/shared/tsconfig.json](../../../../sources/nhn__tui.chart/apps/shared/tsconfig.json)<br>[apps/react-chart/package.json](../../../../sources/nhn__tui.chart/apps/react-chart/package.json)<br>[apps/react-chart/tsconfig.json](../../../../sources/nhn__tui.chart/apps/react-chart/tsconfig.json)<br>[apps/map-chart/package.json](../../../../sources/nhn__tui.chart/apps/map-chart/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 60 | [apps/map-chart/tests/store/layout.spec.ts](../../../../sources/nhn__tui.chart/apps/map-chart/tests/store/layout.spec.ts)<br>[apps/map-chart/tests/store/legend.spec.ts](../../../../sources/nhn__tui.chart/apps/map-chart/tests/store/legend.spec.ts)<br>[apps/map-chart/tests/store/root.spec.ts](../../../../sources/nhn__tui.chart/apps/map-chart/tests/store/root.spec.ts)<br>[apps/map-chart/tests/store/scale.spec.ts](../../../../sources/nhn__tui.chart/apps/map-chart/tests/store/scale.spec.ts)<br>[apps/map-chart/tests/store/series.spec.ts](../../../../sources/nhn__tui.chart/apps/map-chart/tests/store/series.spec.ts)<br>[apps/map-chart/tests/store/theme.spec.ts](../../../../sources/nhn__tui.chart/apps/map-chart/tests/store/theme.spec.ts) |
| CI workflows | 9 | [.github/workflows/chart-check-types.yml](../../../../sources/nhn__tui.chart/.github/workflows/chart-check-types.yml)<br>[.github/workflows/chart-linter.yml](../../../../sources/nhn__tui.chart/.github/workflows/chart-linter.yml)<br>[.github/workflows/chart-test.yml](../../../../sources/nhn__tui.chart/.github/workflows/chart-test.yml)<br>[.github/workflows/map-chart-check-types.yml](../../../../sources/nhn__tui.chart/.github/workflows/map-chart-check-types.yml)<br>[.github/workflows/map-chart-linter.yml](../../../../sources/nhn__tui.chart/.github/workflows/map-chart-linter.yml)<br>[.github/workflows/map-chart-test.yml](../../../../sources/nhn__tui.chart/.github/workflows/map-chart-test.yml) |
| Containers / deploy | 19 | [apps/chart/src/charts/areaChart.ts](../../../../sources/nhn__tui.chart/apps/chart/src/charts/areaChart.ts)<br>[apps/chart/src/charts/barChart.ts](../../../../sources/nhn__tui.chart/apps/chart/src/charts/barChart.ts)<br>[apps/chart/src/charts/boxPlotChart.ts](../../../../sources/nhn__tui.chart/apps/chart/src/charts/boxPlotChart.ts)<br>[apps/chart/src/charts/bubbleChart.ts](../../../../sources/nhn__tui.chart/apps/chart/src/charts/bubbleChart.ts)<br>[apps/chart/src/charts/bulletChart.ts](../../../../sources/nhn__tui.chart/apps/chart/src/charts/bulletChart.ts)<br>[apps/chart/src/charts/chart.ts](../../../../sources/nhn__tui.chart/apps/chart/src/charts/chart.ts) |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | security/policy surface not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `apps/vue-chart/src/base.js`, `apps/vue-chart/src/index.js`, `apps/shared/src/index.ts`.
2. Trace execution through entrypoints: `apps/vue-chart/src/base.js`, `apps/vue-chart/src/index.js`, `apps/shared/src/index.ts`.
3. Inspect retrieval/memory/indexing through: `apps/vue-chart/index.d.ts`, `apps/vue-chart/src/index.js`, `apps/vue-chart/demo/index.html`.
4. Verify behavior through test/eval files: `apps/map-chart/tests/store/layout.spec.ts`, `apps/map-chart/tests/store/legend.spec.ts`, `apps/map-chart/tests/store/root.spec.ts`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 🍞📊 Beautiful chart for data visualization.. 핵심 구조 신호는 TypeScript, package.json, README.md, LICENSE, vue, ci이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, needs deeper structural scan입니다.
