# naver/egjs-flicking Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

🎠 ♻️ Everyday 30 million people experience. It's reliable, flexible and extendable carousel.

## 요약

- 조사 단위: `sources/naver__egjs-flicking` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 2,411 files, 230 directories, depth score 106, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 monorepo/workspace, cli-first, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 entrypoints=src/index.cjs.ts, src/index.ts, src/index.umd.ts이고, 의존성 단서는 react, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | naver/egjs-flicking |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | TypeScript |
| Stars | 2921 |
| Forks | 139 |
| License | MIT |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/naver__egjs-flicking](../../../../sources/naver__egjs-flicking) |
| Existing report | [reports/korea-trending/repositories/naver__egjs-flicking.md](../../../korea-trending/repositories/naver__egjs-flicking.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 2411 / 230 |
| Max observed depth | 8 |
| Top directories | .github, config, debug, docs, packages, sass, src, test |
| Top extensions | .mdx: 1655, .ts: 194, .tsx: 118, .json: 99, .css: 68, .js: 57, .vue: 39, .html: 36, .png: 31, .svg: 31, (none): 28, .md: 25 |
| Source patterns | monorepo/workspace, cli-first, retrieval/vector path, spec/docs-driven, eval/test harness, ui/extension surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 32 |
| packages/vue-flicking | packages workspace | 20 |
| src | source boundary | 17 |
| packages/ngx-flicking | packages workspace | 9 |
| packages/svelte-flicking | packages workspace | 9 |
| packages/vue3-flicking | packages workspace | 9 |
| packages/react-flicking | packages workspace | 8 |
| packages/preact-flicking | packages workspace | 7 |
| .github | ci surface | 1 |
| config | top-level component | 1 |
| debug | top-level component | 1 |
| packages | source boundary | 1 |
| sass | top-level component | 1 |
| test | validation surface | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| serve-dev | package.json | start | concurrently "rollup -w --config ./rollup.config.dev.js" "http-serve" |
| build | package.json | build | run-s build:bundle build:declaration build:css printsizes |
| build | package.json | build:bundle | rm -rf ./dist && rollup -c |
| build | package.json | build:declaration | rm -rf ./declaration && tsc -p tsconfig.declaration.json |
| build | package.json | build:css | run-s build:css-clear build:sass build:css-prefix build:css-min |
| build | package.json | build:css-clear | rm -rf ./dist/*.css |
| build | package.json | build:sass | sass sass/:dist/ --style=expanded --no-source-map && sass sass/flicking.sass dist/flicking.min.css --style=compressed --no-source-map && sass sass/flicking-inline.sass dist/flicking-inline.min.css --style=compressed --no |
| build | package.json | build:css-prefix | postcss dist/*.css --replace --use autoprefixer --no-map |
| build | package.json | build:css-min | postcss dist/*.css --ext .min.css --use postcss-clean -d dist/ --no-map |
| quality | package.json | declaration | rm -rf declaration && tsc -p tsconfig.declaration.json |
| build | package.json | css | postcss css/*.css --use autoprefixer postcss-clean -d dist/ -m |
| build | package.json | printsizes | print-sizes ./dist --exclude=\.map |
| test | package.json | test | npm run test --prefix test/unit |
| test | package.json | test:chrome | npm run test:chrome --prefix test/unit |
| test | package.json | test:cfc | npm run test --prefix test/cfc |
| quality | package.json | lint | eslint src/**/*.ts |
| test | package.json | lint:test | eslint 'test/unit/**/*.ts' |
| utility | package.json | jsdoc | jsdoc -c jsdoc.json |
| serve-dev | package.json | jsdoc:watch | npm-watch jsdoc |
| build | package.json | docs:build | jsdoc-to-mdx -c ./jsdoc-to-mdx.json |
| utility | package.json | docs:version | node ./config/docs-version-up |
| build | package.json | docs:release | npm run docs:build && npm run docs:version && npm run build --prefix docs |
| build | package.json | demo:prebuild-version | cpx 'dist/**/*' docs/build/release/$npm_package_version/dist --clean |
| test | package.json | demo:prebuild-latest | cpx 'dist/**/*' docs/build/release/latest/dist --clean |
| test | package.json | demo:deploy | npm run docs:release && npm run build && npm run demo:prebuild-version && npm run demo:prebuild-latest && gh-pages -d docs/build/ --add --remote upstream |
| test | package.json | demo:deploy-origin | npm run docs:release && npm run build && npm run demo:prebuild-version && npm run demo:prebuild-latest && gh-pages -d docs/build/ --add --remote origin |
| build | package.json | release | release-helper upstream |
| utility | package.json | changelog | node ./config/changelog.js |
| test | package.json | coveralls | cat ./coverage/lcov.info \| ./node_modules/coveralls/bin/coveralls.js |
| build | package.json | packages | npm run packages:update && npm run packages:build && npm run packages:publish |
| utility | package.json | packages:update | pvu --update=react-flicking,ngx-flicking/projects/ngx-flicking,vue-flicking,vue3-flicking,svelte-flicking |
| build | package.json | packages:build | pvu --build=react-flicking,ngx-flicking,vue-flicking,vue3-flicking,svelte-flicking |
| build | package.json | packages:publish | pvu --publish=react-flicking,ngx-flicking/dist/ngx-flicking,vue-flicking,vue3-flicking,svelte-flicking |


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
| entrypoints | [src/index.cjs.ts](../../../../sources/naver__egjs-flicking/src/index.cjs.ts) | entrypoints signal |
| entrypoints | [src/index.ts](../../../../sources/naver__egjs-flicking/src/index.ts) | entrypoints signal |
| entrypoints | [src/index.umd.ts](../../../../sources/naver__egjs-flicking/src/index.umd.ts) | entrypoints signal |
| entrypoints | [packages/vue3-flicking/src/index.ts](../../../../sources/naver__egjs-flicking/packages/vue3-flicking/src/index.ts) | entrypoints signal |
| config | [package.json](../../../../sources/naver__egjs-flicking/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/naver__egjs-flicking/tsconfig.json) | config signal |
| config | [test/unit/package.json](../../../../sources/naver__egjs-flicking/test/unit/package.json) | config signal |
| config | [test/unit/tsconfig.json](../../../../sources/naver__egjs-flicking/test/unit/tsconfig.json) | config signal |
| docs | [README.md](../../../../sources/naver__egjs-flicking/README.md) | docs signal |
| docs | [packages/vue3-flicking/README.md](../../../../sources/naver__egjs-flicking/packages/vue3-flicking/README.md) | docs signal |
| docs | [packages/vue-flicking/README.md](../../../../sources/naver__egjs-flicking/packages/vue-flicking/README.md) | docs signal |
| docs | [packages/vue-flicking/demo/ssr/store/README.md](../../../../sources/naver__egjs-flicking/packages/vue-flicking/demo/ssr/store/README.md) | docs signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 16 | [src/index.cjs.ts](../../../../sources/naver__egjs-flicking/src/index.cjs.ts)<br>[src/index.ts](../../../../sources/naver__egjs-flicking/src/index.ts)<br>[src/index.umd.ts](../../../../sources/naver__egjs-flicking/src/index.umd.ts)<br>[packages/vue3-flicking/src/index.ts](../../../../sources/naver__egjs-flicking/packages/vue3-flicking/src/index.ts)<br>[packages/vue3-flicking/src/index.umd.ts](../../../../sources/naver__egjs-flicking/packages/vue3-flicking/src/index.umd.ts)<br>[packages/vue3-flicking/demo/main.ts](../../../../sources/naver__egjs-flicking/packages/vue3-flicking/demo/main.ts)<br>[packages/vue-flicking/src/index.ts](../../../../sources/naver__egjs-flicking/packages/vue-flicking/src/index.ts)<br>[packages/vue-flicking/src/index.umd.ts](../../../../sources/naver__egjs-flicking/packages/vue-flicking/src/index.umd.ts) |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 44 | [test/manual/index.html](../../../../sources/naver__egjs-flicking/test/manual/index.html)<br>[test/manual/js/index.js](../../../../sources/naver__egjs-flicking/test/manual/js/index.js)<br>[test/manual/css/index.css](../../../../sources/naver__egjs-flicking/test/manual/css/index.css)<br>[test/cfc/fixture/index.ts](../../../../sources/naver__egjs-flicking/test/cfc/fixture/index.ts)<br>[src/index.cjs.ts](../../../../sources/naver__egjs-flicking/src/index.cjs.ts)<br>[src/index.ts](../../../../sources/naver__egjs-flicking/src/index.ts)<br>[src/index.umd.ts](../../../../sources/naver__egjs-flicking/src/index.umd.ts)<br>[src/renderer/index.ts](../../../../sources/naver__egjs-flicking/src/renderer/index.ts) |
| spec | 37 | [test/unit/CrossFlicking.spec.ts](../../../../sources/naver__egjs-flicking/test/unit/CrossFlicking.spec.ts)<br>[test/unit/Flicking.spec.ts](../../../../sources/naver__egjs-flicking/test/unit/Flicking.spec.ts)<br>[test/unit/utils.spec.ts](../../../../sources/naver__egjs-flicking/test/unit/utils.spec.ts)<br>[test/unit/renderer/Renderer.spec.ts](../../../../sources/naver__egjs-flicking/test/unit/renderer/Renderer.spec.ts)<br>[test/unit/renderer/VanillaRenderer.spec.ts](../../../../sources/naver__egjs-flicking/test/unit/renderer/VanillaRenderer.spec.ts)<br>[test/unit/renderer/VirtualManager.spec.ts](../../../../sources/naver__egjs-flicking/test/unit/renderer/VirtualManager.spec.ts)<br>[test/unit/reactive/reactive.spec.ts](../../../../sources/naver__egjs-flicking/test/unit/reactive/reactive.spec.ts)<br>[test/unit/core/FlickingError.spec.ts](../../../../sources/naver__egjs-flicking/test/unit/core/FlickingError.spec.ts) |
| eval | 137 | [test/unit/.eslintrc.js](../../../../sources/naver__egjs-flicking/test/unit/.eslintrc.js)<br>[test/unit/CrossFlicking.spec.ts](../../../../sources/naver__egjs-flicking/test/unit/CrossFlicking.spec.ts)<br>[test/unit/Flicking.spec.ts](../../../../sources/naver__egjs-flicking/test/unit/Flicking.spec.ts)<br>[test/unit/hammer-simulator.run.js](../../../../sources/naver__egjs-flicking/test/unit/hammer-simulator.run.js)<br>[test/unit/karma.conf.js](../../../../sources/naver__egjs-flicking/test/unit/karma.conf.js)<br>[test/unit/mocha.opts](../../../../sources/naver__egjs-flicking/test/unit/mocha.opts)<br>[test/unit/package-lock.json](../../../../sources/naver__egjs-flicking/test/unit/package-lock.json)<br>[test/unit/package.json](../../../../sources/naver__egjs-flicking/test/unit/package.json) |
| security | 0 | not obvious |
| ci | 1 | [.github/workflows/run-test.yml](../../../../sources/naver__egjs-flicking/.github/workflows/run-test.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 1857 | [README.md](../../../../sources/naver__egjs-flicking/README.md)<br>[packages/vue3-flicking/README.md](../../../../sources/naver__egjs-flicking/packages/vue3-flicking/README.md)<br>[packages/vue-flicking/README.md](../../../../sources/naver__egjs-flicking/packages/vue-flicking/README.md)<br>[packages/vue-flicking/demo/ssr/store/README.md](../../../../sources/naver__egjs-flicking/packages/vue-flicking/demo/ssr/store/README.md)<br>[packages/vue-flicking/demo/ssr/static/README.md](../../../../sources/naver__egjs-flicking/packages/vue-flicking/demo/ssr/static/README.md)<br>[packages/vue-flicking/demo/ssr/plugins/README.md](../../../../sources/naver__egjs-flicking/packages/vue-flicking/demo/ssr/plugins/README.md)<br>[packages/vue-flicking/demo/ssr/pages/README.md](../../../../sources/naver__egjs-flicking/packages/vue-flicking/demo/ssr/pages/README.md)<br>[packages/vue-flicking/demo/ssr/middleware/README.md](../../../../sources/naver__egjs-flicking/packages/vue-flicking/demo/ssr/middleware/README.md) |
| config | 36 | [package.json](../../../../sources/naver__egjs-flicking/package.json)<br>[tsconfig.json](../../../../sources/naver__egjs-flicking/tsconfig.json)<br>[test/unit/package.json](../../../../sources/naver__egjs-flicking/test/unit/package.json)<br>[test/unit/tsconfig.json](../../../../sources/naver__egjs-flicking/test/unit/tsconfig.json)<br>[test/cfc/package.json](../../../../sources/naver__egjs-flicking/test/cfc/package.json)<br>[test/cfc/tsconfig.json](../../../../sources/naver__egjs-flicking/test/cfc/tsconfig.json)<br>[test/cfc/framework/vue3/package.json](../../../../sources/naver__egjs-flicking/test/cfc/framework/vue3/package.json)<br>[test/cfc/framework/vue3/tsconfig.json](../../../../sources/naver__egjs-flicking/test/cfc/framework/vue3/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 137 | [test/unit/.eslintrc.js](../../../../sources/naver__egjs-flicking/test/unit/.eslintrc.js)<br>[test/unit/CrossFlicking.spec.ts](../../../../sources/naver__egjs-flicking/test/unit/CrossFlicking.spec.ts)<br>[test/unit/Flicking.spec.ts](../../../../sources/naver__egjs-flicking/test/unit/Flicking.spec.ts)<br>[test/unit/hammer-simulator.run.js](../../../../sources/naver__egjs-flicking/test/unit/hammer-simulator.run.js)<br>[test/unit/karma.conf.js](../../../../sources/naver__egjs-flicking/test/unit/karma.conf.js)<br>[test/unit/mocha.opts](../../../../sources/naver__egjs-flicking/test/unit/mocha.opts) |
| CI workflows | 1 | [.github/workflows/run-test.yml](../../../../sources/naver__egjs-flicking/.github/workflows/run-test.yml) |
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
3. Inspect retrieval/memory/indexing through: `test/manual/index.html`, `test/manual/js/index.js`, `test/manual/css/index.css`.
4. Verify behavior through test/eval files: `test/unit/.eslintrc.js`, `test/unit/CrossFlicking.spec.ts`, `test/unit/Flicking.spec.ts`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 🎠 ♻️ Everyday 30 million people experience. It's reliable, flexible and extendable carousel.. 핵심 구조 신호는 TypeScript, package.json, README.md, LICENSE, react, tests이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 needs deeper structural scan입니다.
