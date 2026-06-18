# naver/billboard.js Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

📊 Re-usable, easy interface JavaScript chart library based on D3.js

## 요약

- 조사 단위: `sources/naver__billboard.js` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 443 files, 82 directories, depth score 113, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 monorepo/workspace, cli-first, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 entrypoints=src/index.canvas.ts, src/index.esm.ts, src/index.ts이고, 의존성 단서는 react, playwright, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | naver/billboard.js |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | TypeScript |
| Stars | 5982 |
| Forks | 357 |
| License | MIT |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/naver__billboard.js](../../../../sources/naver__billboard.js) |
| Existing report | [reports/korea-trending/repositories/naver__billboard.js.md](../../../korea-trending/repositories/naver__billboard.js.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 443 / 82 |
| Max observed depth | 5 |
| Top directories | .github, .husky, benchmark, config, demo, packages, src, test, types |
| Top extensions | .ts: 321, .md: 18, .js: 17, .json: 13, .svg: 11, .cjs: 10, (none): 10, .css: 7, .html: 7, .scss: 7, .yml: 5, .csv: 4 |
| Source patterns | monorepo/workspace, cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, ui/extension surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 17 |
| packages/react | packages workspace | 7 |
| .github | ci surface | 1 |
| benchmark | validation surface | 1 |
| config | top-level component | 1 |
| demo | top-level component | 1 |
| packages | source boundary | 1 |
| test | validation surface | 1 |
| types | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| serve-dev | package.json | start | webpack serve --open |
| serve-dev | package.json | start:plugin | cross-env PLUGIN=true webpack-dev-server --open |
| build | package.json | build | npm run build:production && npm run build:packaged && npm run build:theme && npm run build:plugin && npm run build:esm && npm run build:cjs && npm run build:plugin:types |
| build | package.json | build:cjs | node ./config/cjs.js |
| build | package.json | build:esm | rollup -c ./config/rollup/esm.js |
| build | package.json | build:production | cross-env NODE_ENV=production webpack |
| build | package.json | build:packaged | cross-env NODE_ENV=packaged webpack |
| serve-dev | package.json | build:dev | cross-env NODE_ENV=development webpack |
| build | package.json | build:theme | cross-env NODE_ENV=theme webpack |
| build | package.json | build:production:analyzer | cross-env ANALYZER=true npm run build:production |
| build | package.json | build:packaged:analyzer | cross-env ANALYZER=true npm run build:packaged |
| build | package.json | build:plugin | cross-env NODE_ENV=plugin webpack && cross-env NODE_ENV=plugin MODE=min webpack && cross-env NODE_ENV=plugin MODE=pkgd webpack && cross-env NODE_ENV=plugin MODE=pkgd-min webpack |
| build | package.json | build:plugin:types | node ./config/type.d-plugin.js |
| build | package.json | release | semantic-release |
| quality | package.json | lint | eslint |
| quality | package.json | format | dprint fmt |
| utility | package.json | loc | cloc --by-file src |
| test | package.json | test | vitest |
| test | package.json | coverage | vitest run |
| test | package.json | coverage:ci | cross-env NODE_ENV=CI npm run coverage |
| utility | package.json | jsdoc | node ./config/jsdoc.js |
| utility | package.json | jsdoc:cmd | jsdoc -c jsdoc.json |
| quality | package.json | lint-staged | lint-staged --config ./config/.lintstagedrc.json |
| utility | package.json | prepare | husky |


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
| entrypoints | [src/index.canvas.ts](../../../../sources/naver__billboard.js/src/index.canvas.ts) | entrypoints signal |
| entrypoints | [src/index.esm.ts](../../../../sources/naver__billboard.js/src/index.esm.ts) | entrypoints signal |
| entrypoints | [src/index.ts](../../../../sources/naver__billboard.js/src/index.ts) | entrypoints signal |
| entrypoints | [src/config/Options/common/main.ts](../../../../sources/naver__billboard.js/src/config/Options/common/main.ts) | entrypoints signal |
| config | [package.json](../../../../sources/naver__billboard.js/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/naver__billboard.js/tsconfig.json) | config signal |
| config | [packages/react/package.json](../../../../sources/naver__billboard.js/packages/react/package.json) | config signal |
| config | [packages/react/tsconfig.json](../../../../sources/naver__billboard.js/packages/react/tsconfig.json) | config signal |
| docs | [README.md](../../../../sources/naver__billboard.js/README.md) | docs signal |
| docs | [packages/react/README.md](../../../../sources/naver__billboard.js/packages/react/README.md) | docs signal |
| eval | [test/treeshake/scenario-full.js](../../../../sources/naver__billboard.js/test/treeshake/scenario-full.js) | eval signal |
| eval | [test/treeshake/scenario-line-bar.js](../../../../sources/naver__billboard.js/test/treeshake/scenario-line-bar.js) | eval signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 6 | [src/index.canvas.ts](../../../../sources/naver__billboard.js/src/index.canvas.ts)<br>[src/index.esm.ts](../../../../sources/naver__billboard.js/src/index.esm.ts)<br>[src/index.ts](../../../../sources/naver__billboard.js/src/index.ts)<br>[src/config/Options/common/main.ts](../../../../sources/naver__billboard.js/src/config/Options/common/main.ts)<br>[packages/react/src/index.tsx](../../../../sources/naver__billboard.js/packages/react/src/index.tsx)<br>[packages/react/demo/main.tsx](../../../../sources/naver__billboard.js/packages/react/demo/main.tsx) |
| agentRuntime | 1 | [AGENTS.md](../../../../sources/naver__billboard.js/AGENTS.md) |
| mcp | 0 | not obvious |
| retrieval | 24 | [types/index.d.ts](../../../../sources/naver__billboard.js/types/index.d.ts)<br>[types/plugin/textoverlap/index.d.ts](../../../../sources/naver__billboard.js/types/plugin/textoverlap/index.d.ts)<br>[types/plugin/tableview/index.d.ts](../../../../sources/naver__billboard.js/types/plugin/tableview/index.d.ts)<br>[types/plugin/stanford/index.d.ts](../../../../sources/naver__billboard.js/types/plugin/stanford/index.d.ts)<br>[types/plugin/sparkline/index.d.ts](../../../../sources/naver__billboard.js/types/plugin/sparkline/index.d.ts)<br>[types/plugin/bubblecompare/index.d.ts](../../../../sources/naver__billboard.js/types/plugin/bubblecompare/index.d.ts)<br>[src/index.canvas.ts](../../../../sources/naver__billboard.js/src/index.canvas.ts)<br>[src/index.esm.ts](../../../../sources/naver__billboard.js/src/index.esm.ts) |
| spec | 95 | [test/shape/arc-needle-spec.ts](../../../../sources/naver__billboard.js/test/shape/arc-needle-spec.ts)<br>[test/shape/arc-rangeText-spec.ts](../../../../sources/naver__billboard.js/test/shape/arc-rangeText-spec.ts)<br>[test/shape/arc-spec.ts](../../../../sources/naver__billboard.js/test/shape/arc-spec.ts)<br>[test/shape/area-range-spec.ts](../../../../sources/naver__billboard.js/test/shape/area-range-spec.ts)<br>[test/shape/area-spec.ts](../../../../sources/naver__billboard.js/test/shape/area-spec.ts)<br>[test/shape/bar-coverage-spec.ts](../../../../sources/naver__billboard.js/test/shape/bar-coverage-spec.ts)<br>[test/shape/bar-spec.ts](../../../../sources/naver__billboard.js/test/shape/bar-spec.ts)<br>[test/shape/bubble-spec.ts](../../../../sources/naver__billboard.js/test/shape/bubble-spec.ts) |
| eval | 119 | [test/treeshake/scenario-full.js](../../../../sources/naver__billboard.js/test/treeshake/scenario-full.js)<br>[test/treeshake/scenario-line-bar.js](../../../../sources/naver__billboard.js/test/treeshake/scenario-line-bar.js)<br>[test/treeshake/scenario-pie.js](../../../../sources/naver__billboard.js/test/treeshake/scenario-pie.js)<br>[test/shape/arc-needle-spec.ts](../../../../sources/naver__billboard.js/test/shape/arc-needle-spec.ts)<br>[test/shape/arc-rangeText-spec.ts](../../../../sources/naver__billboard.js/test/shape/arc-rangeText-spec.ts)<br>[test/shape/arc-spec.ts](../../../../sources/naver__billboard.js/test/shape/arc-spec.ts)<br>[test/shape/area-range-spec.ts](../../../../sources/naver__billboard.js/test/shape/area-range-spec.ts)<br>[test/shape/area-spec.ts](../../../../sources/naver__billboard.js/test/shape/area-spec.ts) |
| security | 0 | not obvious |
| ci | 3 | [.github/workflows/ci.yml](../../../../sources/naver__billboard.js/.github/workflows/ci.yml)<br>[.github/workflows/dependency-update.yml](../../../../sources/naver__billboard.js/.github/workflows/dependency-update.yml)<br>[.github/workflows/nightly-build.yml](../../../../sources/naver__billboard.js/.github/workflows/nightly-build.yml) |
| container | 0 | not obvious |
| instruction | 2 | [AGENTS.md](../../../../sources/naver__billboard.js/AGENTS.md)<br>[.github/copilot-instructions.md](../../../../sources/naver__billboard.js/.github/copilot-instructions.md) |
| docs | 2 | [README.md](../../../../sources/naver__billboard.js/README.md)<br>[packages/react/README.md](../../../../sources/naver__billboard.js/packages/react/README.md) |
| config | 4 | [package.json](../../../../sources/naver__billboard.js/package.json)<br>[tsconfig.json](../../../../sources/naver__billboard.js/tsconfig.json)<br>[packages/react/package.json](../../../../sources/naver__billboard.js/packages/react/package.json)<br>[packages/react/tsconfig.json](../../../../sources/naver__billboard.js/packages/react/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 119 | [test/treeshake/scenario-full.js](../../../../sources/naver__billboard.js/test/treeshake/scenario-full.js)<br>[test/treeshake/scenario-line-bar.js](../../../../sources/naver__billboard.js/test/treeshake/scenario-line-bar.js)<br>[test/treeshake/scenario-pie.js](../../../../sources/naver__billboard.js/test/treeshake/scenario-pie.js)<br>[test/shape/arc-needle-spec.ts](../../../../sources/naver__billboard.js/test/shape/arc-needle-spec.ts)<br>[test/shape/arc-rangeText-spec.ts](../../../../sources/naver__billboard.js/test/shape/arc-rangeText-spec.ts)<br>[test/shape/arc-spec.ts](../../../../sources/naver__billboard.js/test/shape/arc-spec.ts) |
| CI workflows | 3 | [.github/workflows/ci.yml](../../../../sources/naver__billboard.js/.github/workflows/ci.yml)<br>[.github/workflows/dependency-update.yml](../../../../sources/naver__billboard.js/.github/workflows/dependency-update.yml)<br>[.github/workflows/nightly-build.yml](../../../../sources/naver__billboard.js/.github/workflows/nightly-build.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 2 | [AGENTS.md](../../../../sources/naver__billboard.js/AGENTS.md)<br>[.github/copilot-instructions.md](../../../../sources/naver__billboard.js/.github/copilot-instructions.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `src/index.canvas.ts`, `src/index.esm.ts`, `src/index.ts`.
2. Trace execution through entrypoints: `src/index.canvas.ts`, `src/index.esm.ts`, `src/index.ts`.
3. Map agent/tool runtime through: `AGENTS.md`.
4. Inspect retrieval/memory/indexing through: `types/index.d.ts`, `types/plugin/textoverlap/index.d.ts`, `types/plugin/tableview/index.d.ts`.
5. Verify behavior through test/eval files: `test/treeshake/scenario-full.js`, `test/treeshake/scenario-line-bar.js`, `test/treeshake/scenario-pie.js`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 📊 Re usable, easy interface JavaScript chart library based on D3.js. 핵심 구조 신호는 TypeScript, package.json, README.md, AGENTS.md, LICENSE, react이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 needs deeper structural scan입니다.
