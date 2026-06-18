# naver/egjs-axes Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

A module used to change the information of user action entered by various input devices such as touch screen or mouse into the logical virtual coordinates.

## 요약

- 조사 단위: `sources/naver__egjs-axes` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 420 files, 68 directories, depth score 105, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 entrypoints=packages/vue2-axes/src/index.ts, packages/vue-axes/src/App.vue, packages/vue-axes/src/main.ts이고, 의존성 단서는 react, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | naver/egjs-axes |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | TypeScript |
| Stars | 187 |
| Forks | 31 |
| License | MIT |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/naver__egjs-axes](../../../../sources/naver__egjs-axes) |
| Existing report | [reports/korea-trending/repositories/naver__egjs-axes.md](../../../korea-trending/repositories/naver__egjs-axes.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 420 / 68 |
| Max observed depth | 7 |
| Top directories | .github, config, packages |
| Top extensions | .png: 70, .jpg: 66, .ts: 40, .js: 34, .txt: 34, .css: 26, .json: 26, .tsx: 20, .svg: 19, .md: 16, (none): 16, .mdx: 14 |
| Source patterns | monorepo/workspace, cli-first, api/server, retrieval/vector path, spec/docs-driven, eval/test harness, ui/extension surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| packages/axes | packages workspace | 47 |
| packages/demo | packages workspace | 40 |
| packages/react-axes | packages workspace | 11 |
| packages/svelte-axes | packages workspace | 7 |
| packages/vue-axes | packages workspace | 7 |
| packages/vue2-axes | packages workspace | 7 |
| .github | ci surface | 1 |
| config | top-level component | 1 |
| packages | source boundary | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| quality | package.json | lint | eslint ./packages/axes/src/**/*.ts |
| build | package.json | packages | npm run packages:update && npm run packages:build && npm run packages:publish |
| utility | package.json | packages:update | lerna-helper version |
| build | package.json | packages:build | lerna run build --ignore demo |
| utility | package.json | packages:publish | lerna-helper publish --commit 'chore: update packages versions' |
| build | package.json | docs:build | rm -rf ./packages/demo/docs/api && jsdoc-to-mdx -c ./jsdoc-to-mdx.json |
| build | package.json | demo:build | npm run docs:build && npm run build --prefix packages/demo |
| build | package.json | demo:build-docusaurus | npm run build --prefix demo |
| build | package.json | demo:deploy | lerna-helper deploy --base @egjs/axes --src packages/demo/build/ --remote upstream |
| build | package.json | demo:deploy-origin | lerna-helper deploy --base @egjs/axes --src packages/demo/build/ --remote origin |
| build | package.json | release | lerna-helper release --base @egjs/axes --remote upstream --branch master |
| quality | package.json | prepush | npm run lint |
| utility | package.json | commitmsg | node config/validate-commit-msg.js |


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
| entrypoints | [packages/vue2-axes/src/index.ts](../../../../sources/naver__egjs-axes/packages/vue2-axes/src/index.ts) | entrypoints signal |
| entrypoints | [packages/vue-axes/src/App.vue](../../../../sources/naver__egjs-axes/packages/vue-axes/src/App.vue) | entrypoints signal |
| entrypoints | [packages/vue-axes/src/main.ts](../../../../sources/naver__egjs-axes/packages/vue-axes/src/main.ts) | entrypoints signal |
| entrypoints | [packages/svelte-axes/src/App.svelte](../../../../sources/naver__egjs-axes/packages/svelte-axes/src/App.svelte) | entrypoints signal |
| config | [package.json](../../../../sources/naver__egjs-axes/package.json) | config signal |
| config | [packages/vue2-axes/package.json](../../../../sources/naver__egjs-axes/packages/vue2-axes/package.json) | config signal |
| config | [packages/vue2-axes/tsconfig.json](../../../../sources/naver__egjs-axes/packages/vue2-axes/tsconfig.json) | config signal |
| config | [packages/vue-axes/package.json](../../../../sources/naver__egjs-axes/packages/vue-axes/package.json) | config signal |
| docs | [README.md](../../../../sources/naver__egjs-axes/README.md) | docs signal |
| docs | [packages/vue2-axes/README.md](../../../../sources/naver__egjs-axes/packages/vue2-axes/README.md) | docs signal |
| docs | [packages/vue-axes/README.md](../../../../sources/naver__egjs-axes/packages/vue-axes/README.md) | docs signal |
| docs | [packages/svelte-axes/README.md](../../../../sources/naver__egjs-axes/packages/svelte-axes/README.md) | docs signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 12 | [packages/vue2-axes/src/index.ts](../../../../sources/naver__egjs-axes/packages/vue2-axes/src/index.ts)<br>[packages/vue-axes/src/App.vue](../../../../sources/naver__egjs-axes/packages/vue-axes/src/App.vue)<br>[packages/vue-axes/src/main.ts](../../../../sources/naver__egjs-axes/packages/vue-axes/src/main.ts)<br>[packages/svelte-axes/src/App.svelte](../../../../sources/naver__egjs-axes/packages/svelte-axes/src/App.svelte)<br>[packages/svelte-axes/src/main.js](../../../../sources/naver__egjs-axes/packages/svelte-axes/src/main.js)<br>[packages/react-axes/src/App.css](../../../../sources/naver__egjs-axes/packages/react-axes/src/App.css)<br>[packages/react-axes/src/App.tsx](../../../../sources/naver__egjs-axes/packages/react-axes/src/App.tsx)<br>[packages/react-axes/src/index.css](../../../../sources/naver__egjs-axes/packages/react-axes/src/index.css) |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 19 | [packages/vue2-axes/src/index.ts](../../../../sources/naver__egjs-axes/packages/vue2-axes/src/index.ts)<br>[packages/vue2-axes/public/index.html](../../../../sources/naver__egjs-axes/packages/vue2-axes/public/index.html)<br>[packages/vue2-axes/demo/index.ts](../../../../sources/naver__egjs-axes/packages/vue2-axes/demo/index.ts)<br>[packages/vue-axes/src/vue-axes/index.ts](../../../../sources/naver__egjs-axes/packages/vue-axes/src/vue-axes/index.ts)<br>[packages/vue-axes/public/index.html](../../../../sources/naver__egjs-axes/packages/vue-axes/public/index.html)<br>[packages/svelte-axes/src/svelte-axes/index.ts](../../../../sources/naver__egjs-axes/packages/svelte-axes/src/svelte-axes/index.ts)<br>[packages/svelte-axes/public/index.html](../../../../sources/naver__egjs-axes/packages/svelte-axes/public/index.html)<br>[packages/react-axes/src/index.css](../../../../sources/naver__egjs-axes/packages/react-axes/src/index.css) |
| spec | 12 | [packages/axes/test/unit/AnimationManager.spec.js](../../../../sources/naver__egjs-axes/packages/axes/test/unit/AnimationManager.spec.js)<br>[packages/axes/test/unit/Axes.spec.js](../../../../sources/naver__egjs-axes/packages/axes/test/unit/Axes.spec.js)<br>[packages/axes/test/unit/AxisManager.spec.js](../../../../sources/naver__egjs-axes/packages/axes/test/unit/AxisManager.spec.js)<br>[packages/axes/test/unit/Coordinate.spec.js](../../../../sources/naver__egjs-axes/packages/axes/test/unit/Coordinate.spec.js)<br>[packages/axes/test/unit/InputObserver.spec.js](../../../../sources/naver__egjs-axes/packages/axes/test/unit/InputObserver.spec.js)<br>[packages/axes/test/unit/utils.spec.js](../../../../sources/naver__egjs-axes/packages/axes/test/unit/utils.spec.js)<br>[packages/axes/test/unit/inputType/InputType.spec.js](../../../../sources/naver__egjs-axes/packages/axes/test/unit/inputType/InputType.spec.js)<br>[packages/axes/test/unit/inputType/MoveKeyInput.spec.js](../../../../sources/naver__egjs-axes/packages/axes/test/unit/inputType/MoveKeyInput.spec.js) |
| eval | 25 | [packages/axes/test/hammer-simulator.run.js](../../../../sources/naver__egjs-axes/packages/axes/test/hammer-simulator.run.js)<br>[packages/axes/test/unit/AnimationManager.spec.js](../../../../sources/naver__egjs-axes/packages/axes/test/unit/AnimationManager.spec.js)<br>[packages/axes/test/unit/Axes.spec.js](../../../../sources/naver__egjs-axes/packages/axes/test/unit/Axes.spec.js)<br>[packages/axes/test/unit/AxisManager.spec.js](../../../../sources/naver__egjs-axes/packages/axes/test/unit/AxisManager.spec.js)<br>[packages/axes/test/unit/Coordinate.spec.js](../../../../sources/naver__egjs-axes/packages/axes/test/unit/Coordinate.spec.js)<br>[packages/axes/test/unit/InputObserver.spec.js](../../../../sources/naver__egjs-axes/packages/axes/test/unit/InputObserver.spec.js)<br>[packages/axes/test/unit/utils.spec.js](../../../../sources/naver__egjs-axes/packages/axes/test/unit/utils.spec.js)<br>[packages/axes/test/unit/inputType/InputType.spec.js](../../../../sources/naver__egjs-axes/packages/axes/test/unit/inputType/InputType.spec.js) |
| security | 0 | not obvious |
| ci | 1 | [.github/workflows/run-unit.yml](../../../../sources/naver__egjs-axes/.github/workflows/run-unit.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 55 | [README.md](../../../../sources/naver__egjs-axes/README.md)<br>[packages/vue2-axes/README.md](../../../../sources/naver__egjs-axes/packages/vue2-axes/README.md)<br>[packages/vue-axes/README.md](../../../../sources/naver__egjs-axes/packages/vue-axes/README.md)<br>[packages/svelte-axes/README.md](../../../../sources/naver__egjs-axes/packages/svelte-axes/README.md)<br>[packages/react-axes/README.md](../../../../sources/naver__egjs-axes/packages/react-axes/README.md)<br>[packages/demo/docusaurus.config.js](../../../../sources/naver__egjs-axes/packages/demo/docusaurus.config.js)<br>[packages/demo/README.md](../../../../sources/naver__egjs-axes/packages/demo/README.md)<br>[packages/demo/docs/tutorials/Getting Started.mdx](../../../../sources/naver__egjs-axes/packages/demo/docs/tutorials/Getting Started.mdx) |
| config | 13 | [package.json](../../../../sources/naver__egjs-axes/package.json)<br>[packages/vue2-axes/package.json](../../../../sources/naver__egjs-axes/packages/vue2-axes/package.json)<br>[packages/vue2-axes/tsconfig.json](../../../../sources/naver__egjs-axes/packages/vue2-axes/tsconfig.json)<br>[packages/vue-axes/package.json](../../../../sources/naver__egjs-axes/packages/vue-axes/package.json)<br>[packages/vue-axes/tsconfig.json](../../../../sources/naver__egjs-axes/packages/vue-axes/tsconfig.json)<br>[packages/svelte-axes/package.json](../../../../sources/naver__egjs-axes/packages/svelte-axes/package.json)<br>[packages/svelte-axes/tsconfig.json](../../../../sources/naver__egjs-axes/packages/svelte-axes/tsconfig.json)<br>[packages/react-axes/package.json](../../../../sources/naver__egjs-axes/packages/react-axes/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 25 | [packages/axes/test/hammer-simulator.run.js](../../../../sources/naver__egjs-axes/packages/axes/test/hammer-simulator.run.js)<br>[packages/axes/test/unit/AnimationManager.spec.js](../../../../sources/naver__egjs-axes/packages/axes/test/unit/AnimationManager.spec.js)<br>[packages/axes/test/unit/Axes.spec.js](../../../../sources/naver__egjs-axes/packages/axes/test/unit/Axes.spec.js)<br>[packages/axes/test/unit/AxisManager.spec.js](../../../../sources/naver__egjs-axes/packages/axes/test/unit/AxisManager.spec.js)<br>[packages/axes/test/unit/Coordinate.spec.js](../../../../sources/naver__egjs-axes/packages/axes/test/unit/Coordinate.spec.js)<br>[packages/axes/test/unit/InputObserver.spec.js](../../../../sources/naver__egjs-axes/packages/axes/test/unit/InputObserver.spec.js) |
| CI workflows | 1 | [.github/workflows/run-unit.yml](../../../../sources/naver__egjs-axes/.github/workflows/run-unit.yml) |
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

1. Start from key references: `packages/vue2-axes/src/index.ts`, `packages/vue-axes/src/App.vue`, `packages/vue-axes/src/main.ts`.
2. Trace execution through entrypoints: `packages/vue2-axes/src/index.ts`, `packages/vue-axes/src/App.vue`, `packages/vue-axes/src/main.ts`.
3. Inspect retrieval/memory/indexing through: `packages/vue2-axes/src/index.ts`, `packages/vue2-axes/public/index.html`, `packages/vue2-axes/demo/index.ts`.
4. Verify behavior through test/eval files: `packages/axes/test/hammer-simulator.run.js`, `packages/axes/test/unit/AnimationManager.spec.js`, `packages/axes/test/unit/Axes.spec.js`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 A module used to change the information of user action entered by various input devices such as touch screen or mouse in. 핵심 구조 신호는 TypeScript, package.json, README.md, LICENSE, react, ci이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, needs deeper structural scan입니다.
