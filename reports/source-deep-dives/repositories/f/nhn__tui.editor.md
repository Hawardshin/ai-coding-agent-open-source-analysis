# nhn/tui.editor Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

🍞📝 Markdown WYSIWYG Editor. GFM Standard + Chart & UML Extensible.

## 요약

- 조사 단위: `sources/nhn__tui.editor` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 501 files, 148 directories, depth score 103, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 monorepo/workspace, api/server, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 entrypoints=plugins/uml/src/index.ts, plugins/table-merged-cell/src/index.ts, plugins/color-syntax/src/index.ts이고, 의존성 단서는 react, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | nhn/tui.editor |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | TypeScript |
| Stars | 17983 |
| Forks | 1848 |
| License | MIT |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/nhn__tui.editor](../../../../sources/nhn__tui.editor) |
| Existing report | [reports/korea-trending/repositories/nhn__tui.editor.md](../../../korea-trending/repositories/nhn__tui.editor.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 501 / 148 |
| Max observed depth | 8 |
| Top directories | __mocks__, .github, apps, docs, libs, plugins, scripts, types |
| Top extensions | .ts: 315, .js: 52, .md: 40, .html: 36, .json: 23, .yml: 11, .css: 10, (none): 4, .snap: 3, .png: 2, .tsx: 2, .vue: 2 |
| Source patterns | monorepo/workspace, api/server, retrieval/vector path, spec/docs-driven, eval/test harness, ui/extension surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| apps/editor | apps workspace | 48 |
| libs/toastmark | libs workspace | 40 |
| docs | documentation surface | 26 |
| apps/react-editor | apps workspace | 10 |
| apps/vue-editor | apps workspace | 10 |
| __mocks__ | top-level component | 1 |
| .github | ci surface | 1 |
| apps | source boundary | 1 |
| libs | source boundary | 1 |
| plugins | top-level component | 1 |
| scripts | top-level component | 1 |
| types | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| quality | package.json | lint:all | lerna run --stream lint |
| test | package.json | test:all | jest |
| test | package.json | test:types:all | lerna run --stream test:types |
| build | package.json | build:all | lerna run --stream build |
| quality | package.json | lint | node ./scripts/pkg-script.js --script lint --type $type |
| test | package.json | test | node ./scripts/pkg-script.js --script test --type $type |
| test | package.json | test:ci | node ./scripts/pkg-script.js --script test:ci --type $type |
| test | package.json | test:types | node ./scripts/pkg-script.js --script test:types --type $type |
| serve-dev | package.json | serve | node ./scripts/pkg-script.js --script serve --type $type |
| serve-dev | package.json | serve:ie | node ./scripts/pkg-script.js --script serve:ie --type $type |
| build | package.json | build | node ./scripts/pkg-script.js --script build --type $type |
| serve-dev | package.json | doc:dev | node ./scripts/pkg-script.js --script doc:dev --type editor |
| quality | package.json | doc | node ./scripts/pkg-script.js --script doc --type editor |
| utility | package.json | publish:cdn | node ./scripts/publish-cdn.js |


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
| entrypoints | [plugins/uml/src/index.ts](../../../../sources/nhn__tui.editor/plugins/uml/src/index.ts) | entrypoints signal |
| entrypoints | [plugins/table-merged-cell/src/index.ts](../../../../sources/nhn__tui.editor/plugins/table-merged-cell/src/index.ts) | entrypoints signal |
| entrypoints | [plugins/color-syntax/src/index.ts](../../../../sources/nhn__tui.editor/plugins/color-syntax/src/index.ts) | entrypoints signal |
| entrypoints | [plugins/code-syntax-highlight/src/index.ts](../../../../sources/nhn__tui.editor/plugins/code-syntax-highlight/src/index.ts) | entrypoints signal |
| config | [package.json](../../../../sources/nhn__tui.editor/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/nhn__tui.editor/tsconfig.json) | config signal |
| config | [plugins/uml/package.json](../../../../sources/nhn__tui.editor/plugins/uml/package.json) | config signal |
| config | [plugins/uml/tsconfig.json](../../../../sources/nhn__tui.editor/plugins/uml/tsconfig.json) | config signal |
| docs | [README.md](../../../../sources/nhn__tui.editor/README.md) | docs signal |
| docs | [plugins/uml/README.md](../../../../sources/nhn__tui.editor/plugins/uml/README.md) | docs signal |
| docs | [plugins/table-merged-cell/README.md](../../../../sources/nhn__tui.editor/plugins/table-merged-cell/README.md) | docs signal |
| docs | [plugins/color-syntax/README.md](../../../../sources/nhn__tui.editor/plugins/color-syntax/README.md) | docs signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 213 | [plugins/uml/src/index.ts](../../../../sources/nhn__tui.editor/plugins/uml/src/index.ts)<br>[plugins/table-merged-cell/src/index.ts](../../../../sources/nhn__tui.editor/plugins/table-merged-cell/src/index.ts)<br>[plugins/color-syntax/src/index.ts](../../../../sources/nhn__tui.editor/plugins/color-syntax/src/index.ts)<br>[plugins/code-syntax-highlight/src/index.ts](../../../../sources/nhn__tui.editor/plugins/code-syntax-highlight/src/index.ts)<br>[plugins/chart/src/index.ts](../../../../sources/nhn__tui.editor/plugins/chart/src/index.ts)<br>[libs/toastmark/src/index.ts](../../../../sources/nhn__tui.editor/libs/toastmark/src/index.ts)<br>[apps/vue-editor/src/Editor.vue](../../../../sources/nhn__tui.editor/apps/vue-editor/src/Editor.vue)<br>[apps/vue-editor/src/index.js](../../../../sources/nhn__tui.editor/apps/vue-editor/src/index.js) |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 32 | [plugins/uml/index.d.ts](../../../../sources/nhn__tui.editor/plugins/uml/index.d.ts)<br>[plugins/uml/src/index.ts](../../../../sources/nhn__tui.editor/plugins/uml/src/index.ts)<br>[plugins/uml/demo/esm/index.html](../../../../sources/nhn__tui.editor/plugins/uml/demo/esm/index.html)<br>[plugins/table-merged-cell/types/index.d.ts](../../../../sources/nhn__tui.editor/plugins/table-merged-cell/types/index.d.ts)<br>[plugins/table-merged-cell/src/index.ts](../../../../sources/nhn__tui.editor/plugins/table-merged-cell/src/index.ts)<br>[plugins/table-merged-cell/demo/esm/index.html](../../../../sources/nhn__tui.editor/plugins/table-merged-cell/demo/esm/index.html)<br>[plugins/color-syntax/types/index.d.ts](../../../../sources/nhn__tui.editor/plugins/color-syntax/types/index.d.ts)<br>[plugins/color-syntax/src/index.ts](../../../../sources/nhn__tui.editor/plugins/color-syntax/src/index.ts) |
| spec | 62 | [plugins/uml/src/__test__/integration/umlPlugin.spec.ts](../../../../sources/nhn__tui.editor/plugins/uml/src/__test__/integration/umlPlugin.spec.ts)<br>[plugins/table-merged-cell/src/__test__/integration/convertor.spec.ts](../../../../sources/nhn__tui.editor/plugins/table-merged-cell/src/__test__/integration/convertor.spec.ts)<br>[plugins/table-merged-cell/src/__test__/integration/wysiwyg/addColumn.spec.ts](../../../../sources/nhn__tui.editor/plugins/table-merged-cell/src/__test__/integration/wysiwyg/addColumn.spec.ts)<br>[plugins/table-merged-cell/src/__test__/integration/wysiwyg/addRow.spec.ts](../../../../sources/nhn__tui.editor/plugins/table-merged-cell/src/__test__/integration/wysiwyg/addRow.spec.ts)<br>[plugins/table-merged-cell/src/__test__/integration/wysiwyg/mergeCells.spec.ts](../../../../sources/nhn__tui.editor/plugins/table-merged-cell/src/__test__/integration/wysiwyg/mergeCells.spec.ts)<br>[plugins/table-merged-cell/src/__test__/integration/wysiwyg/removeColumn.spec.ts](../../../../sources/nhn__tui.editor/plugins/table-merged-cell/src/__test__/integration/wysiwyg/removeColumn.spec.ts)<br>[plugins/table-merged-cell/src/__test__/integration/wysiwyg/removeRow.spec.ts](../../../../sources/nhn__tui.editor/plugins/table-merged-cell/src/__test__/integration/wysiwyg/removeRow.spec.ts)<br>[plugins/table-merged-cell/src/__test__/integration/wysiwyg/splitCells.spec.ts](../../../../sources/nhn__tui.editor/plugins/table-merged-cell/src/__test__/integration/wysiwyg/splitCells.spec.ts) |
| eval | 69 | [plugins/uml/src/__test__/integration/umlPlugin.spec.ts](../../../../sources/nhn__tui.editor/plugins/uml/src/__test__/integration/umlPlugin.spec.ts)<br>[plugins/table-merged-cell/src/__test__/integration/convertor.spec.ts](../../../../sources/nhn__tui.editor/plugins/table-merged-cell/src/__test__/integration/convertor.spec.ts)<br>[plugins/table-merged-cell/src/__test__/integration/wysiwyg/addColumn.spec.ts](../../../../sources/nhn__tui.editor/plugins/table-merged-cell/src/__test__/integration/wysiwyg/addColumn.spec.ts)<br>[plugins/table-merged-cell/src/__test__/integration/wysiwyg/addRow.spec.ts](../../../../sources/nhn__tui.editor/plugins/table-merged-cell/src/__test__/integration/wysiwyg/addRow.spec.ts)<br>[plugins/table-merged-cell/src/__test__/integration/wysiwyg/mergeCells.spec.ts](../../../../sources/nhn__tui.editor/plugins/table-merged-cell/src/__test__/integration/wysiwyg/mergeCells.spec.ts)<br>[plugins/table-merged-cell/src/__test__/integration/wysiwyg/removeColumn.spec.ts](../../../../sources/nhn__tui.editor/plugins/table-merged-cell/src/__test__/integration/wysiwyg/removeColumn.spec.ts)<br>[plugins/table-merged-cell/src/__test__/integration/wysiwyg/removeRow.spec.ts](../../../../sources/nhn__tui.editor/plugins/table-merged-cell/src/__test__/integration/wysiwyg/removeRow.spec.ts)<br>[plugins/table-merged-cell/src/__test__/integration/wysiwyg/splitCells.spec.ts](../../../../sources/nhn__tui.editor/plugins/table-merged-cell/src/__test__/integration/wysiwyg/splitCells.spec.ts) |
| security | 0 | not obvious |
| ci | 9 | [.github/workflows/check-types.yml](../../../../sources/nhn__tui.editor/.github/workflows/check-types.yml)<br>[.github/workflows/examplePageTest.yml](../../../../sources/nhn__tui.editor/.github/workflows/examplePageTest.yml)<br>[.github/workflows/linter.yml](../../../../sources/nhn__tui.editor/.github/workflows/linter.yml)<br>[.github/workflows/plugin-test.yml](../../../../sources/nhn__tui.editor/.github/workflows/plugin-test.yml)<br>[.github/workflows/publish-cdn.yml](../../../../sources/nhn__tui.editor/.github/workflows/publish-cdn.yml)<br>[.github/workflows/publish-doc.yml](../../../../sources/nhn__tui.editor/.github/workflows/publish-doc.yml)<br>[.github/workflows/publish-npm-wrapper.yml](../../../../sources/nhn__tui.editor/.github/workflows/publish-npm-wrapper.yml)<br>[.github/workflows/publish-npm.yml](../../../../sources/nhn__tui.editor/.github/workflows/publish-npm.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 35 | [README.md](../../../../sources/nhn__tui.editor/README.md)<br>[plugins/uml/README.md](../../../../sources/nhn__tui.editor/plugins/uml/README.md)<br>[plugins/table-merged-cell/README.md](../../../../sources/nhn__tui.editor/plugins/table-merged-cell/README.md)<br>[plugins/color-syntax/README.md](../../../../sources/nhn__tui.editor/plugins/color-syntax/README.md)<br>[plugins/code-syntax-highlight/README.md](../../../../sources/nhn__tui.editor/plugins/code-syntax-highlight/README.md)<br>[plugins/chart/README.md](../../../../sources/nhn__tui.editor/plugins/chart/README.md)<br>[libs/toastmark/README.md](../../../../sources/nhn__tui.editor/libs/toastmark/README.md)<br>[docs/COMMIT_MESSAGE_CONVENTION.md](../../../../sources/nhn__tui.editor/docs/COMMIT_MESSAGE_CONVENTION.md) |
| config | 19 | [package.json](../../../../sources/nhn__tui.editor/package.json)<br>[tsconfig.json](../../../../sources/nhn__tui.editor/tsconfig.json)<br>[plugins/uml/package.json](../../../../sources/nhn__tui.editor/plugins/uml/package.json)<br>[plugins/uml/tsconfig.json](../../../../sources/nhn__tui.editor/plugins/uml/tsconfig.json)<br>[plugins/table-merged-cell/package.json](../../../../sources/nhn__tui.editor/plugins/table-merged-cell/package.json)<br>[plugins/table-merged-cell/tsconfig.json](../../../../sources/nhn__tui.editor/plugins/table-merged-cell/tsconfig.json)<br>[plugins/color-syntax/package.json](../../../../sources/nhn__tui.editor/plugins/color-syntax/package.json)<br>[plugins/color-syntax/tsconfig.json](../../../../sources/nhn__tui.editor/plugins/color-syntax/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 69 | [plugins/uml/src/__test__/integration/umlPlugin.spec.ts](../../../../sources/nhn__tui.editor/plugins/uml/src/__test__/integration/umlPlugin.spec.ts)<br>[plugins/table-merged-cell/src/__test__/integration/convertor.spec.ts](../../../../sources/nhn__tui.editor/plugins/table-merged-cell/src/__test__/integration/convertor.spec.ts)<br>[plugins/table-merged-cell/src/__test__/integration/wysiwyg/addColumn.spec.ts](../../../../sources/nhn__tui.editor/plugins/table-merged-cell/src/__test__/integration/wysiwyg/addColumn.spec.ts)<br>[plugins/table-merged-cell/src/__test__/integration/wysiwyg/addRow.spec.ts](../../../../sources/nhn__tui.editor/plugins/table-merged-cell/src/__test__/integration/wysiwyg/addRow.spec.ts)<br>[plugins/table-merged-cell/src/__test__/integration/wysiwyg/mergeCells.spec.ts](../../../../sources/nhn__tui.editor/plugins/table-merged-cell/src/__test__/integration/wysiwyg/mergeCells.spec.ts)<br>[plugins/table-merged-cell/src/__test__/integration/wysiwyg/removeColumn.spec.ts](../../../../sources/nhn__tui.editor/plugins/table-merged-cell/src/__test__/integration/wysiwyg/removeColumn.spec.ts) |
| CI workflows | 9 | [.github/workflows/check-types.yml](../../../../sources/nhn__tui.editor/.github/workflows/check-types.yml)<br>[.github/workflows/examplePageTest.yml](../../../../sources/nhn__tui.editor/.github/workflows/examplePageTest.yml)<br>[.github/workflows/linter.yml](../../../../sources/nhn__tui.editor/.github/workflows/linter.yml)<br>[.github/workflows/plugin-test.yml](../../../../sources/nhn__tui.editor/.github/workflows/plugin-test.yml)<br>[.github/workflows/publish-cdn.yml](../../../../sources/nhn__tui.editor/.github/workflows/publish-cdn.yml)<br>[.github/workflows/publish-doc.yml](../../../../sources/nhn__tui.editor/.github/workflows/publish-doc.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `plugins/uml/src/index.ts`, `plugins/table-merged-cell/src/index.ts`, `plugins/color-syntax/src/index.ts`.
2. Trace execution through entrypoints: `plugins/uml/src/index.ts`, `plugins/table-merged-cell/src/index.ts`, `plugins/color-syntax/src/index.ts`.
3. Inspect retrieval/memory/indexing through: `plugins/uml/index.d.ts`, `plugins/uml/src/index.ts`, `plugins/uml/demo/esm/index.html`.
4. Verify behavior through test/eval files: `plugins/uml/src/__test__/integration/umlPlugin.spec.ts`, `plugins/table-merged-cell/src/__test__/integration/convertor.spec.ts`, `plugins/table-merged-cell/src/__test__/integration/wysiwyg/addColumn.spec.ts`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 🍞📝 Markdown WYSIWYG Editor. GFM Standard + Chart & UML Extensible.. 핵심 구조 신호는 TypeScript, package.json, README.md, LICENSE, react, vue이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, needs deeper structural scan입니다.
