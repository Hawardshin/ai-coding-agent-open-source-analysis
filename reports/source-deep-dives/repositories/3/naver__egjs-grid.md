# naver/egjs-grid Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

A component that can arrange items according to the type of grids

## 요약

- 조사 단위: `sources/naver__egjs-grid` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 376 files, 119 directories, depth score 102, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 monorepo/workspace, cli-first, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 entrypoints=src/index.cjs.ts, src/index.ts, src/index.umd.ts이고, 의존성 단서는 react, playwright, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | naver/egjs-grid |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | TypeScript |
| Stars | 316 |
| Forks | 17 |
| License | NOASSERTION |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/naver__egjs-grid](../../../../sources/naver__egjs-grid) |
| Existing report | [reports/korea-trending/repositories/naver__egjs-grid.md](../../../korea-trending/repositories/naver__egjs-grid.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 376 / 119 |
| Max observed depth | 8 |
| Top directories | .github, .storybook, demo, packages, src, stories, test |
| Top extensions | .ts: 118, .tsx: 81, .json: 39, .html: 37, .js: 33, (none): 18, .svelte: 10, .vue: 9, .md: 8, .png: 6, .css: 5, .jsx: 4 |
| Source patterns | monorepo/workspace, cli-first, retrieval/vector path, spec/docs-driven, eval/test harness, ui/extension surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| packages/ngx-grid | packages workspace | 14 |
| packages/vue-grid | packages workspace | 13 |
| packages/svelte-grid | packages workspace | 12 |
| packages/react-grid | packages workspace | 9 |
| src | source boundary | 7 |
| .github | ci surface | 1 |
| demo | top-level component | 1 |
| packages | source boundary | 1 |
| stories | top-level component | 1 |
| test | validation surface | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| serve-dev | package.json | start | rollup -c -w |
| utility | package.json | jsdoc | rm -rf ./doc && jsdoc -c jsdoc.json |
| test | package.json | test | karma start |
| quality | package.json | lint | eslint ./src/ --ext .ts |
| build | package.json | build | rm -rf ./dist ./declaration && rollup -c && npm run declaration && npm run printsizes |
| test | package.json | test:chrome | karma start --chrome |
| test | package.json | coverage | karma start --coverage && print-coveralls --sort=desc |
| test | package.json | coveralls | cat ./coverage/lcov.info \| ./node_modules/coveralls/bin/coveralls.js |
| utility | package.json | e2e:pre-install | concurrently npm:e2e:pre-install:react npm:e2e:pre-install:angular npm:e2e:pre-install:angular-project npm:e2e:pre-install:vue npm:e2e:pre-install:svelte npm:e2e:pre-install:vue3 |
| utility | package.json | e2e:pre-install:react | cd packages/react-grid/ && npm i |
| utility | package.json | e2e:pre-install:angular | cd packages/ngx-grid/ && npm i |
| utility | package.json | e2e:pre-install:angular-project | cd packages/ngx-grid/projects/ngx-grid/ && npm i |
| utility | package.json | e2e:pre-install:vue | cd packages/vue-grid/ && npm i |
| utility | package.json | e2e:pre-install:svelte | cd packages/svelte-grid/ && npm i |
| utility | package.json | e2e:pre-install:vue3 | cd packages/vue-grid/vue3/ && npm i |
| build | package.json | e2e:pre-build | npm run build && cpx 'declaration/**/*' packages/ngx-grid/projects/ngx-grid/node_modules/@egjs/grid/declaration --clean |
| serve-dev | package.json | e2e:storybook | rm -rf node_modules/.cache/storybook/ && npm run e2e:storybook:all 2>&1 >/dev/null |
| utility | package.json | e2e:storybook:all | concurrently -k -r npm:e2e:storybook:vanilla npm:e2e:storybook:react npm:e2e:storybook:angular npm:e2e:storybook:vue npm:e2e:storybook:svelte npm:e2e:storybook:vue3 |
| utility | package.json | e2e:storybook:vanilla | node_modules/@storybook/react/bin/index.js -p 6006 --quiet --ci |
| utility | package.json | e2e:storybook:react | cd packages/react-grid/ && node_modules/@storybook/react/bin/index.js -p 6007 --quiet --ci |
| utility | package.json | e2e:storybook:angular | cd packages/ngx-grid/ && node_modules/@storybook/angular/bin/index.js -p 6008 --quiet --ci |
| utility | package.json | e2e:storybook:vue | cd packages/vue-grid/ && node_modules/@storybook/vue/bin/index.js -p 6009 --quiet --ci |
| utility | package.json | e2e:storybook:svelte | cd packages/svelte-grid/ && node_modules/@storybook/svelte/bin/index.js -p 6010 --quiet --ci |
| utility | package.json | e2e:storybook:vue3 | cd packages/vue-grid/vue3/ && node_modules/@storybook/vue3/bin/index.js -p 6011 --quiet --ci |
| utility | package.json | e2e:headless | concurrently -k -r -s "first" npm:e2e:storybook npm:e2e:steps |
| utility | package.json | e2e:steps | HEADLESS=true codeceptjs run --steps |
| utility | package.json | e2e:ui | concurrently -k -r npm:e2e:storybook "npm:e2e:ui:app" |
| utility | package.json | e2e:ui:app | codecept-ui --app --verbose |
| build | package.json | printsizes | print-sizes ./dist --exclude=\.map |
| quality | package.json | declaration | rm -rf declaration && tsc -p tsconfig.declaration.json |
| test | package.json | demo:build | npm run build && npm run jsdoc && npm run demo:prebuild-version && npm run demo:prebuild-latest && npm run build:storybook |
| build | package.json | demo:prebuild-version | cpx 'dist/**/*' demo/release/$npm_package_version/dist --clean && cpx 'doc/**/*' demo/release/$npm_package_version/doc --clean |
| test | package.json | demo:prebuild-latest | cpx 'dist/**/*' demo/release/latest/dist --clean && cpx 'doc/**/*' demo/release/latest/doc --clean |
| build | package.json | demo:deploy | npm run demo:build && npm run demo:deploy-add |
| utility | package.json | demo:deploy-add | gh-pages -d demo/ --add --remote upstream |
| utility | package.json | demo:deploy-init | gh-pages -d demo/ --remote upstream |
| build | package.json | release | release-helper upstream |
| build | package.json | packages | npm run packages:update && npm run packages:build && npm run packages:publish |
| utility | package.json | packages:update | pvu --update=react-grid,ngx-grid/projects/ngx-grid,vue-grid,svelte-grid |
| build | package.json | packages:build | pvu --build=react-grid,ngx-grid/,vue-grid,svelte-grid |


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
| browserAutomation | playwright |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| entrypoints | [src/index.cjs.ts](../../../../sources/naver__egjs-grid/src/index.cjs.ts) | entrypoints signal |
| entrypoints | [src/index.ts](../../../../sources/naver__egjs-grid/src/index.ts) | entrypoints signal |
| entrypoints | [src/index.umd.ts](../../../../sources/naver__egjs-grid/src/index.umd.ts) | entrypoints signal |
| entrypoints | [packages/vue-grid/vue3/.storybook/main.js](../../../../sources/naver__egjs-grid/packages/vue-grid/vue3/.storybook/main.js) | entrypoints signal |
| config | [package.json](../../../../sources/naver__egjs-grid/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/naver__egjs-grid/tsconfig.json) | config signal |
| config | [test/e2e/tsconfig.json](../../../../sources/naver__egjs-grid/test/e2e/tsconfig.json) | config signal |
| config | [packages/vue-grid/package.json](../../../../sources/naver__egjs-grid/packages/vue-grid/package.json) | config signal |
| docs | [README.md](../../../../sources/naver__egjs-grid/README.md) | docs signal |
| docs | [packages/vue-grid/README.md](../../../../sources/naver__egjs-grid/packages/vue-grid/README.md) | docs signal |
| docs | [packages/svelte-grid/README.md](../../../../sources/naver__egjs-grid/packages/svelte-grid/README.md) | docs signal |
| docs | [packages/react-grid/README.md](../../../../sources/naver__egjs-grid/packages/react-grid/README.md) | docs signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 19 | [src/index.cjs.ts](../../../../sources/naver__egjs-grid/src/index.cjs.ts)<br>[src/index.ts](../../../../sources/naver__egjs-grid/src/index.ts)<br>[src/index.umd.ts](../../../../sources/naver__egjs-grid/src/index.umd.ts)<br>[packages/vue-grid/vue3/.storybook/main.js](../../../../sources/naver__egjs-grid/packages/vue-grid/vue3/.storybook/main.js)<br>[packages/vue-grid/src/index.ts](../../../../sources/naver__egjs-grid/packages/vue-grid/src/index.ts)<br>[packages/vue-grid/src/index.umd.ts](../../../../sources/naver__egjs-grid/packages/vue-grid/src/index.umd.ts)<br>[packages/vue-grid/.storybook/main.js](../../../../sources/naver__egjs-grid/packages/vue-grid/.storybook/main.js)<br>[packages/svelte-grid/src/index.d.ts](../../../../sources/naver__egjs-grid/packages/svelte-grid/src/index.d.ts) |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 18 | [test/e2e/manual/index.html](../../../../sources/naver__egjs-grid/test/e2e/manual/index.html)<br>[src/index.cjs.ts](../../../../sources/naver__egjs-grid/src/index.cjs.ts)<br>[src/index.ts](../../../../sources/naver__egjs-grid/src/index.ts)<br>[src/index.umd.ts](../../../../sources/naver__egjs-grid/src/index.umd.ts)<br>[packages/vue-grid/vue3/storybook-static/index.html](../../../../sources/naver__egjs-grid/packages/vue-grid/vue3/storybook-static/index.html)<br>[packages/vue-grid/vue3/public/index.html](../../../../sources/naver__egjs-grid/packages/vue-grid/vue3/public/index.html)<br>[packages/vue-grid/src/index.ts](../../../../sources/naver__egjs-grid/packages/vue-grid/src/index.ts)<br>[packages/vue-grid/src/index.umd.ts](../../../../sources/naver__egjs-grid/packages/vue-grid/src/index.umd.ts) |
| spec | 12 | [test/unit/ContainerManager.spec.ts](../../../../sources/naver__egjs-grid/test/unit/ContainerManager.spec.ts)<br>[test/unit/FrameGrid.spec.ts](../../../../sources/naver__egjs-grid/test/unit/FrameGrid.spec.ts)<br>[test/unit/Grid.spec.ts](../../../../sources/naver__egjs-grid/test/unit/Grid.spec.ts)<br>[test/unit/GridItem.spec.ts](../../../../sources/naver__egjs-grid/test/unit/GridItem.spec.ts)<br>[test/unit/ItemRenderer.spec.ts](../../../../sources/naver__egjs-grid/test/unit/ItemRenderer.spec.ts)<br>[test/unit/JustifiedGrid.spec.ts](../../../../sources/naver__egjs-grid/test/unit/JustifiedGrid.spec.ts)<br>[test/unit/MasonryGrid.spec.ts](../../../../sources/naver__egjs-grid/test/unit/MasonryGrid.spec.ts)<br>[test/unit/PackingGrid.spec.ts](../../../../sources/naver__egjs-grid/test/unit/PackingGrid.spec.ts) |
| eval | 45 | [tsconfig.test.json](../../../../sources/naver__egjs-grid/tsconfig.test.json)<br>[test/unit/ContainerManager.spec.ts](../../../../sources/naver__egjs-grid/test/unit/ContainerManager.spec.ts)<br>[test/unit/FrameGrid.spec.ts](../../../../sources/naver__egjs-grid/test/unit/FrameGrid.spec.ts)<br>[test/unit/Grid.spec.ts](../../../../sources/naver__egjs-grid/test/unit/Grid.spec.ts)<br>[test/unit/GridItem.spec.ts](../../../../sources/naver__egjs-grid/test/unit/GridItem.spec.ts)<br>[test/unit/ItemRenderer.spec.ts](../../../../sources/naver__egjs-grid/test/unit/ItemRenderer.spec.ts)<br>[test/unit/JustifiedGrid.spec.ts](../../../../sources/naver__egjs-grid/test/unit/JustifiedGrid.spec.ts)<br>[test/unit/MasonryGrid.spec.ts](../../../../sources/naver__egjs-grid/test/unit/MasonryGrid.spec.ts) |
| security | 0 | not obvious |
| ci | 1 | [.github/workflows/run-e2e.yml](../../../../sources/naver__egjs-grid/.github/workflows/run-e2e.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 7 | [README.md](../../../../sources/naver__egjs-grid/README.md)<br>[packages/vue-grid/README.md](../../../../sources/naver__egjs-grid/packages/vue-grid/README.md)<br>[packages/svelte-grid/README.md](../../../../sources/naver__egjs-grid/packages/svelte-grid/README.md)<br>[packages/react-grid/README.md](../../../../sources/naver__egjs-grid/packages/react-grid/README.md)<br>[packages/ngx-grid/README.md](../../../../sources/naver__egjs-grid/packages/ngx-grid/README.md)<br>[packages/ngx-grid/projects/ngx-grid/README.md](../../../../sources/naver__egjs-grid/packages/ngx-grid/projects/ngx-grid/README.md)<br>[.storybook/readme.js](../../../../sources/naver__egjs-grid/.storybook/readme.js) |
| config | 16 | [package.json](../../../../sources/naver__egjs-grid/package.json)<br>[tsconfig.json](../../../../sources/naver__egjs-grid/tsconfig.json)<br>[test/e2e/tsconfig.json](../../../../sources/naver__egjs-grid/test/e2e/tsconfig.json)<br>[packages/vue-grid/package.json](../../../../sources/naver__egjs-grid/packages/vue-grid/package.json)<br>[packages/vue-grid/tsconfig.json](../../../../sources/naver__egjs-grid/packages/vue-grid/tsconfig.json)<br>[packages/vue-grid/vue3/package.json](../../../../sources/naver__egjs-grid/packages/vue-grid/vue3/package.json)<br>[packages/svelte-grid/package.json](../../../../sources/naver__egjs-grid/packages/svelte-grid/package.json)<br>[packages/svelte-grid/tsconfig.json](../../../../sources/naver__egjs-grid/packages/svelte-grid/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 45 | [tsconfig.test.json](../../../../sources/naver__egjs-grid/tsconfig.test.json)<br>[test/unit/ContainerManager.spec.ts](../../../../sources/naver__egjs-grid/test/unit/ContainerManager.spec.ts)<br>[test/unit/FrameGrid.spec.ts](../../../../sources/naver__egjs-grid/test/unit/FrameGrid.spec.ts)<br>[test/unit/Grid.spec.ts](../../../../sources/naver__egjs-grid/test/unit/Grid.spec.ts)<br>[test/unit/GridItem.spec.ts](../../../../sources/naver__egjs-grid/test/unit/GridItem.spec.ts)<br>[test/unit/ItemRenderer.spec.ts](../../../../sources/naver__egjs-grid/test/unit/ItemRenderer.spec.ts) |
| CI workflows | 1 | [.github/workflows/run-e2e.yml](../../../../sources/naver__egjs-grid/.github/workflows/run-e2e.yml) |
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

1. Start from key references: `src/index.cjs.ts`, `src/index.ts`, `src/index.umd.ts`.
2. Trace execution through entrypoints: `src/index.cjs.ts`, `src/index.ts`, `src/index.umd.ts`.
3. Inspect retrieval/memory/indexing through: `test/e2e/manual/index.html`, `src/index.cjs.ts`, `src/index.ts`.
4. Verify behavior through test/eval files: `tsconfig.test.json`, `test/unit/ContainerManager.spec.ts`, `test/unit/FrameGrid.spec.ts`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 A component that can arrange items according to the type of grids. 핵심 구조 신호는 TypeScript, package.json, README.md, LICENSE, react, playwright이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 needs deeper structural scan입니다.
