# naver/egjs-flicking-plugins Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Plugins for @egjs/flicking

## 요약

- 조사 단위: `sources/naver__egjs-flicking-plugins` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 76 files, 13 directories, depth score 80, key references 9개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 retrieval/vector path, spec/docs-driven, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 entrypoints=src/index.ts이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 9개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | naver/egjs-flicking-plugins |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | TypeScript |
| Stars | 61 |
| Forks | 11 |
| License | MIT |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/naver__egjs-flicking-plugins](../../../../sources/naver__egjs-flicking-plugins) |
| Existing report | [reports/korea-trending/repositories/naver__egjs-flicking-plugins.md](../../../korea-trending/repositories/naver__egjs-flicking-plugins.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 76 / 13 |
| Max observed depth | 4 |
| Top directories | .github, config, css, src, test |
| Top extensions | .ts: 25, .js: 17, .json: 7, .css: 6, .html: 5, (none): 5, .jpg: 3, .md: 3, .yml: 3, .opts: 1, .template: 1 |
| Source patterns | retrieval/vector path, spec/docs-driven, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 4 |
| .github | ci surface | 1 |
| config | top-level component | 1 |
| css | top-level component | 1 |
| test | validation surface | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| serve-dev | package.json | start | concurrently "rollup -w --config ./rollup.config.dev.js" "http-serve" |
| build | package.json | build | rm -rf ./dist ./declaration && rollup -c && npm run declaration && npm run css && npm run printsizes |
| quality | package.json | declaration | rm -rf declaration && tsc -p tsconfig.declaration.json |
| build | package.json | printsizes | print-sizes ./dist --exclude=\.map |
| build | package.json | css | node config/build-css |
| quality | package.json | lint | eslint 'src/**/*.ts' |
| build | package.json | release | release-helper |
| test | package.json | test | karma start |
| test | package.json | test:chrome | karma start --chrome |
| test | package.json | coverage | karma start --coverage && print-coveralls --sort=desc |
| test | package.json | coveralls | cat ./coverage/lcov.info \| ./node_modules/coveralls/bin/coveralls.js |
| test | package.json | demo:build | npm run build && cpx 'dist/**/*' demo/release/latest/dist --clean |
| build | package.json | demo:prebuild-version | cpx 'dist/**/*' demo/release/$npm_package_version/dist --clean |
| test | package.json | demo:prebuild-latest | cpx 'dist/**/*' demo/release/latest/dist --clean |
| test | package.json | demo:predeploy | npm run build && npm run demo:prebuild-version && npm run demo:prebuild-latest |
| utility | package.json | demo:deploy | npm run demo:predeploy && gh-pages -a -d demo/ --remote upstream |


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
| entrypoints | [src/index.ts](../../../../sources/naver__egjs-flicking-plugins/src/index.ts) | entrypoints signal |
| config | [package.json](../../../../sources/naver__egjs-flicking-plugins/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/naver__egjs-flicking-plugins/tsconfig.json) | config signal |
| docs | [README.md](../../../../sources/naver__egjs-flicking-plugins/README.md) | docs signal |
| eval | [tsconfig.test.json](../../../../sources/naver__egjs-flicking-plugins/tsconfig.test.json) | eval signal |
| eval | [test/hammer-simulator.run.js](../../../../sources/naver__egjs-flicking-plugins/test/hammer-simulator.run.js) | eval signal |
| eval | [test/setup.js](../../../../sources/naver__egjs-flicking-plugins/test/setup.js) | eval signal |
| eval | [test/unit/.eslintrc.js](../../../../sources/naver__egjs-flicking-plugins/test/unit/.eslintrc.js) | eval signal |
| ci | [.github/workflows/test.yml](../../../../sources/naver__egjs-flicking-plugins/.github/workflows/test.yml) | ci support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 1 | [src/index.ts](../../../../sources/naver__egjs-flicking-plugins/src/index.ts) |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 2 | [src/index.ts](../../../../sources/naver__egjs-flicking-plugins/src/index.ts)<br>[src/pagination/index.ts](../../../../sources/naver__egjs-flicking-plugins/src/pagination/index.ts) |
| spec | 7 | [test/unit/Arrow.spec.ts](../../../../sources/naver__egjs-flicking-plugins/test/unit/Arrow.spec.ts)<br>[test/unit/AutoPlay.spec.ts](../../../../sources/naver__egjs-flicking-plugins/test/unit/AutoPlay.spec.ts)<br>[test/unit/Fade.spec.ts](../../../../sources/naver__egjs-flicking-plugins/test/unit/Fade.spec.ts)<br>[test/unit/Pagination.spec.ts](../../../../sources/naver__egjs-flicking-plugins/test/unit/Pagination.spec.ts)<br>[test/unit/Parallax.spec.ts](../../../../sources/naver__egjs-flicking-plugins/test/unit/Parallax.spec.ts)<br>[test/unit/Perspective.spec.ts](../../../../sources/naver__egjs-flicking-plugins/test/unit/Perspective.spec.ts)<br>[test/unit/Sync.spec.ts](../../../../sources/naver__egjs-flicking-plugins/test/unit/Sync.spec.ts) |
| eval | 30 | [tsconfig.test.json](../../../../sources/naver__egjs-flicking-plugins/tsconfig.test.json)<br>[test/hammer-simulator.run.js](../../../../sources/naver__egjs-flicking-plugins/test/hammer-simulator.run.js)<br>[test/setup.js](../../../../sources/naver__egjs-flicking-plugins/test/setup.js)<br>[test/unit/.eslintrc.js](../../../../sources/naver__egjs-flicking-plugins/test/unit/.eslintrc.js)<br>[test/unit/Arrow.spec.ts](../../../../sources/naver__egjs-flicking-plugins/test/unit/Arrow.spec.ts)<br>[test/unit/AutoPlay.spec.ts](../../../../sources/naver__egjs-flicking-plugins/test/unit/AutoPlay.spec.ts)<br>[test/unit/Fade.spec.ts](../../../../sources/naver__egjs-flicking-plugins/test/unit/Fade.spec.ts)<br>[test/unit/Pagination.spec.ts](../../../../sources/naver__egjs-flicking-plugins/test/unit/Pagination.spec.ts) |
| security | 0 | not obvious |
| ci | 1 | [.github/workflows/test.yml](../../../../sources/naver__egjs-flicking-plugins/.github/workflows/test.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 1 | [README.md](../../../../sources/naver__egjs-flicking-plugins/README.md) |
| config | 2 | [package.json](../../../../sources/naver__egjs-flicking-plugins/package.json)<br>[tsconfig.json](../../../../sources/naver__egjs-flicking-plugins/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 30 | [tsconfig.test.json](../../../../sources/naver__egjs-flicking-plugins/tsconfig.test.json)<br>[test/hammer-simulator.run.js](../../../../sources/naver__egjs-flicking-plugins/test/hammer-simulator.run.js)<br>[test/setup.js](../../../../sources/naver__egjs-flicking-plugins/test/setup.js)<br>[test/unit/.eslintrc.js](../../../../sources/naver__egjs-flicking-plugins/test/unit/.eslintrc.js)<br>[test/unit/Arrow.spec.ts](../../../../sources/naver__egjs-flicking-plugins/test/unit/Arrow.spec.ts)<br>[test/unit/AutoPlay.spec.ts](../../../../sources/naver__egjs-flicking-plugins/test/unit/AutoPlay.spec.ts) |
| CI workflows | 1 | [.github/workflows/test.yml](../../../../sources/naver__egjs-flicking-plugins/.github/workflows/test.yml) |
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

1. Start from key references: `src/index.ts`, `package.json`, `tsconfig.json`.
2. Trace execution through entrypoints: `src/index.ts`.
3. Inspect retrieval/memory/indexing through: `src/index.ts`, `src/pagination/index.ts`.
4. Verify behavior through test/eval files: `tsconfig.test.json`, `test/hammer-simulator.run.js`, `test/setup.js`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 Plugins for @egjs/flicking. 핵심 구조 신호는 TypeScript, package.json, README.md, LICENSE, tests, ci이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 needs deeper structural scan입니다.
