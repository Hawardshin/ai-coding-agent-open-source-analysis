# nhn/tui.image-editor Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

🍞🎨 Full-featured photo image editor using canvas. It is really easy, and it comes with great filters.

## 요약

- 조사 단위: `sources/nhn__tui.image-editor` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 498 files, 54 directories, depth score 113, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 entrypoints=apps/vue-image-editor/src/ImageEditor.vue, apps/vue-image-editor/src/index.js, apps/vue-image-editor/.storybook/main.js이고, 의존성 단서는 react, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | nhn/tui.image-editor |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | JavaScript |
| Stars | 7651 |
| Forks | 1377 |
| License | MIT |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/nhn__tui.image-editor](../../../../sources/nhn__tui.image-editor) |
| Existing report | [reports/korea-trending/repositories/nhn__tui.image-editor.md](../../../korea-trending/repositories/nhn__tui.image-editor.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 498 / 54 |
| Max observed depth | 8 |
| Top directories | .github, apps, docs |
| Top extensions | .svg: 258, .js: 155, .md: 19, .png: 13, .json: 12, .yml: 11, .styl: 10, .snap: 4, (none): 4, .css: 3, .html: 3, .jpg: 3 |
| Source patterns | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, ui/extension surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| apps/image-editor | apps workspace | 110 |
| docs | documentation surface | 10 |
| apps/vue-image-editor | apps workspace | 7 |
| apps/react-image-editor | apps workspace | 6 |
| .github | ci surface | 1 |
| apps | source boundary | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| build | package.json | build | lerna run build |
| build | package.json | build:image-editor | lerna run --scope tui-image-editor build |
| build | package.json | build:react | lerna run --scope @toast-ui/react-image-editor build |
| build | package.json | build:vue | lerna run --scope @toast-ui/vue-image-editor build |


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
| entrypoints | [apps/vue-image-editor/src/ImageEditor.vue](../../../../sources/nhn__tui.image-editor/apps/vue-image-editor/src/ImageEditor.vue) | entrypoints signal |
| entrypoints | [apps/vue-image-editor/src/index.js](../../../../sources/nhn__tui.image-editor/apps/vue-image-editor/src/index.js) | entrypoints signal |
| entrypoints | [apps/vue-image-editor/.storybook/main.js](../../../../sources/nhn__tui.image-editor/apps/vue-image-editor/.storybook/main.js) | entrypoints signal |
| entrypoints | [apps/react-image-editor/src/index.js](../../../../sources/nhn__tui.image-editor/apps/react-image-editor/src/index.js) | entrypoints signal |
| config | [package.json](../../../../sources/nhn__tui.image-editor/package.json) | config signal |
| config | [apps/vue-image-editor/package.json](../../../../sources/nhn__tui.image-editor/apps/vue-image-editor/package.json) | config signal |
| config | [apps/react-image-editor/package.json](../../../../sources/nhn__tui.image-editor/apps/react-image-editor/package.json) | config signal |
| config | [apps/image-editor/package.json](../../../../sources/nhn__tui.image-editor/apps/image-editor/package.json) | config signal |
| docs | [README.md](../../../../sources/nhn__tui.image-editor/README.md) | docs signal |
| docs | [docs/Apply-Mobile-Version-Image.md](../../../../sources/nhn__tui.image-editor/docs/Apply-Mobile-Version-Image.md) | docs signal |
| docs | [docs/Apply-Mobile-Version.md](../../../../sources/nhn__tui.image-editor/docs/Apply-Mobile-Version.md) | docs signal |
| docs | [docs/Basic-Tutorial.md](../../../../sources/nhn__tui.image-editor/docs/Basic-Tutorial.md) | docs signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 368 | [apps/vue-image-editor/src/ImageEditor.vue](../../../../sources/nhn__tui.image-editor/apps/vue-image-editor/src/ImageEditor.vue)<br>[apps/vue-image-editor/src/index.js](../../../../sources/nhn__tui.image-editor/apps/vue-image-editor/src/index.js)<br>[apps/vue-image-editor/.storybook/main.js](../../../../sources/nhn__tui.image-editor/apps/vue-image-editor/.storybook/main.js)<br>[apps/react-image-editor/src/index.js](../../../../sources/nhn__tui.image-editor/apps/react-image-editor/src/index.js)<br>[apps/react-image-editor/.storybook/main.js](../../../../sources/nhn__tui.image-editor/apps/react-image-editor/.storybook/main.js)<br>[apps/image-editor/src/index.js](../../../../sources/nhn__tui.image-editor/apps/image-editor/src/index.js)<br>[apps/image-editor/src/svg/default.svg](../../../../sources/nhn__tui.image-editor/apps/image-editor/src/svg/default.svg)<br>[apps/image-editor/src/svg/icon-d/ic-apply.svg](../../../../sources/nhn__tui.image-editor/apps/image-editor/src/svg/icon-d/ic-apply.svg) |
| agentRuntime | 2 | [apps/image-editor/src/js/ui/tools/colorpicker.js](../../../../sources/nhn__tui.image-editor/apps/image-editor/src/js/ui/tools/colorpicker.js)<br>[apps/image-editor/src/js/ui/tools/range.js](../../../../sources/nhn__tui.image-editor/apps/image-editor/src/js/ui/tools/range.js) |
| mcp | 0 | not obvious |
| retrieval | 8 | [apps/vue-image-editor/stories/index.stories.js](../../../../sources/nhn__tui.image-editor/apps/vue-image-editor/stories/index.stories.js)<br>[apps/vue-image-editor/src/index.js](../../../../sources/nhn__tui.image-editor/apps/vue-image-editor/src/index.js)<br>[apps/react-image-editor/stories/index.stories.js](../../../../sources/nhn__tui.image-editor/apps/react-image-editor/stories/index.stories.js)<br>[apps/react-image-editor/src/index.js](../../../../sources/nhn__tui.image-editor/apps/react-image-editor/src/index.js)<br>[apps/image-editor/index.d.ts](../../../../sources/nhn__tui.image-editor/apps/image-editor/index.d.ts)<br>[apps/image-editor/tests/index.js](../../../../sources/nhn__tui.image-editor/apps/image-editor/tests/index.js)<br>[apps/image-editor/src/index.js](../../../../sources/nhn__tui.image-editor/apps/image-editor/src/index.js)<br>[apps/image-editor/src/css/index.styl](../../../../sources/nhn__tui.image-editor/apps/image-editor/src/css/index.styl) |
| spec | 28 | [apps/image-editor/tests/action.spec.js](../../../../sources/nhn__tui.image-editor/apps/image-editor/tests/action.spec.js)<br>[apps/image-editor/tests/arrowLine.spec.js](../../../../sources/nhn__tui.image-editor/apps/image-editor/tests/arrowLine.spec.js)<br>[apps/image-editor/tests/command.spec.js](../../../../sources/nhn__tui.image-editor/apps/image-editor/tests/command.spec.js)<br>[apps/image-editor/tests/cropper.spec.js](../../../../sources/nhn__tui.image-editor/apps/image-editor/tests/cropper.spec.js)<br>[apps/image-editor/tests/cropzone.spec.js](../../../../sources/nhn__tui.image-editor/apps/image-editor/tests/cropzone.spec.js)<br>[apps/image-editor/tests/drawingMode.spec.js](../../../../sources/nhn__tui.image-editor/apps/image-editor/tests/drawingMode.spec.js)<br>[apps/image-editor/tests/filter.spec.js](../../../../sources/nhn__tui.image-editor/apps/image-editor/tests/filter.spec.js)<br>[apps/image-editor/tests/flip.spec.js](../../../../sources/nhn__tui.image-editor/apps/image-editor/tests/flip.spec.js) |
| eval | 38 | [apps/image-editor/tests/action.spec.js](../../../../sources/nhn__tui.image-editor/apps/image-editor/tests/action.spec.js)<br>[apps/image-editor/tests/arrowLine.spec.js](../../../../sources/nhn__tui.image-editor/apps/image-editor/tests/arrowLine.spec.js)<br>[apps/image-editor/tests/command.spec.js](../../../../sources/nhn__tui.image-editor/apps/image-editor/tests/command.spec.js)<br>[apps/image-editor/tests/cropper.spec.js](../../../../sources/nhn__tui.image-editor/apps/image-editor/tests/cropper.spec.js)<br>[apps/image-editor/tests/cropzone.spec.js](../../../../sources/nhn__tui.image-editor/apps/image-editor/tests/cropzone.spec.js)<br>[apps/image-editor/tests/drawingMode.spec.js](../../../../sources/nhn__tui.image-editor/apps/image-editor/tests/drawingMode.spec.js)<br>[apps/image-editor/tests/filter.spec.js](../../../../sources/nhn__tui.image-editor/apps/image-editor/tests/filter.spec.js)<br>[apps/image-editor/tests/flip.spec.js](../../../../sources/nhn__tui.image-editor/apps/image-editor/tests/flip.spec.js) |
| security | 0 | not obvious |
| ci | 4 | [.github/workflows/detectRuntimeError.yml](../../../../sources/nhn__tui.image-editor/.github/workflows/detectRuntimeError.yml)<br>[.github/workflows/publish-docs.yml](../../../../sources/nhn__tui.image-editor/.github/workflows/publish-docs.yml)<br>[.github/workflows/publish-npm.yml](../../../../sources/nhn__tui.image-editor/.github/workflows/publish-npm.yml)<br>[.github/workflows/publish-wrapper.yml](../../../../sources/nhn__tui.image-editor/.github/workflows/publish-wrapper.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 13 | [README.md](../../../../sources/nhn__tui.image-editor/README.md)<br>[docs/Apply-Mobile-Version-Image.md](../../../../sources/nhn__tui.image-editor/docs/Apply-Mobile-Version-Image.md)<br>[docs/Apply-Mobile-Version.md](../../../../sources/nhn__tui.image-editor/docs/Apply-Mobile-Version.md)<br>[docs/Basic-Tutorial.md](../../../../sources/nhn__tui.image-editor/docs/Basic-Tutorial.md)<br>[docs/COMMIT_MESSAGE_CONVENTION.md](../../../../sources/nhn__tui.image-editor/docs/COMMIT_MESSAGE_CONVENTION.md)<br>[docs/ImageEditor-2.0.0-Migration-guide.md](../../../../sources/nhn__tui.image-editor/docs/ImageEditor-2.0.0-Migration-guide.md)<br>[docs/ISSUE_TEMPLATE.md](../../../../sources/nhn__tui.image-editor/docs/ISSUE_TEMPLATE.md)<br>[docs/PULL_REQUEST_TEMPLATE.md](../../../../sources/nhn__tui.image-editor/docs/PULL_REQUEST_TEMPLATE.md) |
| config | 5 | [package.json](../../../../sources/nhn__tui.image-editor/package.json)<br>[apps/vue-image-editor/package.json](../../../../sources/nhn__tui.image-editor/apps/vue-image-editor/package.json)<br>[apps/react-image-editor/package.json](../../../../sources/nhn__tui.image-editor/apps/react-image-editor/package.json)<br>[apps/image-editor/package.json](../../../../sources/nhn__tui.image-editor/apps/image-editor/package.json)<br>[apps/image-editor/tests/types/tsconfig.json](../../../../sources/nhn__tui.image-editor/apps/image-editor/tests/types/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 38 | [apps/image-editor/tests/action.spec.js](../../../../sources/nhn__tui.image-editor/apps/image-editor/tests/action.spec.js)<br>[apps/image-editor/tests/arrowLine.spec.js](../../../../sources/nhn__tui.image-editor/apps/image-editor/tests/arrowLine.spec.js)<br>[apps/image-editor/tests/command.spec.js](../../../../sources/nhn__tui.image-editor/apps/image-editor/tests/command.spec.js)<br>[apps/image-editor/tests/cropper.spec.js](../../../../sources/nhn__tui.image-editor/apps/image-editor/tests/cropper.spec.js)<br>[apps/image-editor/tests/cropzone.spec.js](../../../../sources/nhn__tui.image-editor/apps/image-editor/tests/cropzone.spec.js)<br>[apps/image-editor/tests/drawingMode.spec.js](../../../../sources/nhn__tui.image-editor/apps/image-editor/tests/drawingMode.spec.js) |
| CI workflows | 4 | [.github/workflows/detectRuntimeError.yml](../../../../sources/nhn__tui.image-editor/.github/workflows/detectRuntimeError.yml)<br>[.github/workflows/publish-docs.yml](../../../../sources/nhn__tui.image-editor/.github/workflows/publish-docs.yml)<br>[.github/workflows/publish-npm.yml](../../../../sources/nhn__tui.image-editor/.github/workflows/publish-npm.yml)<br>[.github/workflows/publish-wrapper.yml](../../../../sources/nhn__tui.image-editor/.github/workflows/publish-wrapper.yml) |
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

1. Start from key references: `apps/vue-image-editor/src/ImageEditor.vue`, `apps/vue-image-editor/src/index.js`, `apps/vue-image-editor/.storybook/main.js`.
2. Trace execution through entrypoints: `apps/vue-image-editor/src/ImageEditor.vue`, `apps/vue-image-editor/src/index.js`, `apps/vue-image-editor/.storybook/main.js`.
3. Map agent/tool runtime through: `apps/image-editor/src/js/ui/tools/colorpicker.js`, `apps/image-editor/src/js/ui/tools/range.js`.
4. Inspect retrieval/memory/indexing through: `apps/vue-image-editor/stories/index.stories.js`, `apps/vue-image-editor/src/index.js`, `apps/react-image-editor/stories/index.stories.js`.
5. Verify behavior through test/eval files: `apps/image-editor/tests/action.spec.js`, `apps/image-editor/tests/arrowLine.spec.js`, `apps/image-editor/tests/command.spec.js`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 🍞🎨 Full featured photo image editor using canvas. It is really easy, and it comes with great filters.. 핵심 구조 신호는 JavaScript, package.json, README.md, LICENSE, react, vue이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, needs deeper structural scan입니다.
