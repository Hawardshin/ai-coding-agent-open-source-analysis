# naver/egjs-infinitegrid Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

A module used to arrange card elements including content infinitely on a grid layout.

## 요약

- 조사 단위: `sources/naver__egjs-infinitegrid` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 1,271 files, 211 directories, depth score 103, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 monorepo/workspace, cli-first, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 entrypoints=packages/vue3-infinitegrid/src/index.ts, packages/vue3-infinitegrid/.storybook/main.js, packages/vue-infinitegrid/src/index.ts이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | naver/egjs-infinitegrid |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | TypeScript |
| Stars | 2359 |
| Forks | 95 |
| License | MIT |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/naver__egjs-infinitegrid](../../../../sources/naver__egjs-infinitegrid) |
| Existing report | [reports/korea-trending/repositories/naver__egjs-infinitegrid.md](../../../korea-trending/repositories/naver__egjs-infinitegrid.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 1271 / 211 |
| Max observed depth | 8 |
| Top directories | .github, config, packages |
| Top extensions | .mdx: 706, .ts: 130, .tsx: 101, .jpg: 60, .json: 48, .js: 42, .svg: 29, .html: 26, (none): 24, .txt: 23, .md: 21, .vue: 16 |
| Source patterns | monorepo/workspace, cli-first, retrieval/vector path, spec/docs-driven, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| packages/infinitegrid | packages workspace | 44 |
| packages/docs | packages workspace | 34 |
| packages/ngx-infinitegrid | packages workspace | 20 |
| packages/svelte-infinitegrid | packages workspace | 12 |
| packages/react-infinitegrid | packages workspace | 9 |
| packages/vue-infinitegrid | packages workspace | 7 |
| packages/vue3-infinitegrid | packages workspace | 6 |
| .github | ci surface | 1 |
| config | top-level component | 1 |
| packages | source boundary | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| build | package.json | packages | npm run packages:update && npm run packages:build && npm run packages:publish |
| utility | package.json | packages:update | lerna-helper version |
| build | package.json | packages:build | lerna run build --ignore @egjs/ngx-infinitegrid --ignore docs |
| utility | package.json | packages:publish | lerna-helper publish --ignore @egjs/ngx-infinitegrid --commit 'chore: update packages versions' |
| quality | package.json | changelog | lerna-helper changelog --type all --base @egjs/infinitegrid |
| build | package.json | docs:build | jsdoc-to-mdx -c ./jsdoc-to-mdx.json |
| utility | package.json | docs:version | node ./config/docs-version-up |
| build | package.json | demo:build | npm run docs:build && npm run docs:version && npm run build --prefix packages/docs |
| utility | package.json | demo:deploy | gh-pages -d ./demo --dest=./ --add --remote upstream |
| utility | package.json | deploy | lerna-helper deploy --base @egjs/infinitegrid --remote upstream |
| build | package.json | release | lerna-helper release --base @egjs/infinitegrid --remote upstream --branch master |


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
| entrypoints | [packages/vue3-infinitegrid/src/index.ts](../../../../sources/naver__egjs-infinitegrid/packages/vue3-infinitegrid/src/index.ts) | entrypoints signal |
| entrypoints | [packages/vue3-infinitegrid/.storybook/main.js](../../../../sources/naver__egjs-infinitegrid/packages/vue3-infinitegrid/.storybook/main.js) | entrypoints signal |
| entrypoints | [packages/vue-infinitegrid/src/index.ts](../../../../sources/naver__egjs-infinitegrid/packages/vue-infinitegrid/src/index.ts) | entrypoints signal |
| entrypoints | [packages/vue-infinitegrid/.storybook/main.js](../../../../sources/naver__egjs-infinitegrid/packages/vue-infinitegrid/.storybook/main.js) | entrypoints signal |
| config | [package.json](../../../../sources/naver__egjs-infinitegrid/package.json) | config signal |
| config | [packages/vue3-infinitegrid/package.json](../../../../sources/naver__egjs-infinitegrid/packages/vue3-infinitegrid/package.json) | config signal |
| config | [packages/vue3-infinitegrid/tsconfig.json](../../../../sources/naver__egjs-infinitegrid/packages/vue3-infinitegrid/tsconfig.json) | config signal |
| config | [packages/vue-infinitegrid/package.json](../../../../sources/naver__egjs-infinitegrid/packages/vue-infinitegrid/package.json) | config signal |
| docs | [README.md](../../../../sources/naver__egjs-infinitegrid/README.md) | docs signal |
| docs | [packages/vue3-infinitegrid/README.md](../../../../sources/naver__egjs-infinitegrid/packages/vue3-infinitegrid/README.md) | docs signal |
| docs | [packages/vue-infinitegrid/README.md](../../../../sources/naver__egjs-infinitegrid/packages/vue-infinitegrid/README.md) | docs signal |
| docs | [packages/svelte-infinitegrid/README.md](../../../../sources/naver__egjs-infinitegrid/packages/svelte-infinitegrid/README.md) | docs signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 20 | [packages/vue3-infinitegrid/src/index.ts](../../../../sources/naver__egjs-infinitegrid/packages/vue3-infinitegrid/src/index.ts)<br>[packages/vue3-infinitegrid/.storybook/main.js](../../../../sources/naver__egjs-infinitegrid/packages/vue3-infinitegrid/.storybook/main.js)<br>[packages/vue-infinitegrid/src/index.ts](../../../../sources/naver__egjs-infinitegrid/packages/vue-infinitegrid/src/index.ts)<br>[packages/vue-infinitegrid/.storybook/main.js](../../../../sources/naver__egjs-infinitegrid/packages/vue-infinitegrid/.storybook/main.js)<br>[packages/svelte-infinitegrid/src/index.d.ts](../../../../sources/naver__egjs-infinitegrid/packages/svelte-infinitegrid/src/index.d.ts)<br>[packages/svelte-infinitegrid/src/index.js](../../../../sources/naver__egjs-infinitegrid/packages/svelte-infinitegrid/src/index.js)<br>[packages/svelte-infinitegrid/src/index.umd.js](../../../../sources/naver__egjs-infinitegrid/packages/svelte-infinitegrid/src/index.umd.js)<br>[packages/svelte-infinitegrid/src/main.ts](../../../../sources/naver__egjs-infinitegrid/packages/svelte-infinitegrid/src/main.ts) |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 16 | [packages/vue3-infinitegrid/src/index.ts](../../../../sources/naver__egjs-infinitegrid/packages/vue3-infinitegrid/src/index.ts)<br>[packages/vue-infinitegrid/src/index.ts](../../../../sources/naver__egjs-infinitegrid/packages/vue-infinitegrid/src/index.ts)<br>[packages/vue-infinitegrid/public/index.html](../../../../sources/naver__egjs-infinitegrid/packages/vue-infinitegrid/public/index.html)<br>[packages/svelte-infinitegrid/src/index.d.ts](../../../../sources/naver__egjs-infinitegrid/packages/svelte-infinitegrid/src/index.d.ts)<br>[packages/svelte-infinitegrid/src/index.js](../../../../sources/naver__egjs-infinitegrid/packages/svelte-infinitegrid/src/index.js)<br>[packages/svelte-infinitegrid/src/index.umd.js](../../../../sources/naver__egjs-infinitegrid/packages/svelte-infinitegrid/src/index.umd.js)<br>[packages/svelte-infinitegrid/public/index.html](../../../../sources/naver__egjs-infinitegrid/packages/svelte-infinitegrid/public/index.html)<br>[packages/react-infinitegrid/src/index.ts](../../../../sources/naver__egjs-infinitegrid/packages/react-infinitegrid/src/index.ts) |
| spec | 13 | [packages/ngx-infinitegrid/tsconfig.spec.json](../../../../sources/naver__egjs-infinitegrid/packages/ngx-infinitegrid/tsconfig.spec.json)<br>[packages/ngx-infinitegrid/src/app/app.component.spec.ts](../../../../sources/naver__egjs-infinitegrid/packages/ngx-infinitegrid/src/app/app.component.spec.ts)<br>[packages/ngx-infinitegrid/projects/ngx-infinitegrid/tsconfig.spec.json](../../../../sources/naver__egjs-infinitegrid/packages/ngx-infinitegrid/projects/ngx-infinitegrid/tsconfig.spec.json)<br>[packages/ngx-infinitegrid/projects/ngx-infinitegrid/src/lib/ngx-infinitegrid.component.spec.ts](../../../../sources/naver__egjs-infinitegrid/packages/ngx-infinitegrid/projects/ngx-infinitegrid/src/lib/ngx-infinitegrid.component.spec.ts)<br>[packages/infinitegrid/test/unit/cfcs.spec.ts](../../../../sources/naver__egjs-infinitegrid/packages/infinitegrid/test/unit/cfcs.spec.ts)<br>[packages/infinitegrid/test/unit/Grids.spec.ts](../../../../sources/naver__egjs-infinitegrid/packages/infinitegrid/test/unit/Grids.spec.ts)<br>[packages/infinitegrid/test/unit/GroupManager.spec.ts](../../../../sources/naver__egjs-infinitegrid/packages/infinitegrid/test/unit/GroupManager.spec.ts)<br>[packages/infinitegrid/test/unit/Infinite.spec.ts](../../../../sources/naver__egjs-infinitegrid/packages/infinitegrid/test/unit/Infinite.spec.ts) |
| eval | 29 | [packages/ngx-infinitegrid/tsconfig.spec.json](../../../../sources/naver__egjs-infinitegrid/packages/ngx-infinitegrid/tsconfig.spec.json)<br>[packages/ngx-infinitegrid/src/test.ts](../../../../sources/naver__egjs-infinitegrid/packages/ngx-infinitegrid/src/test.ts)<br>[packages/ngx-infinitegrid/src/app/app.component.spec.ts](../../../../sources/naver__egjs-infinitegrid/packages/ngx-infinitegrid/src/app/app.component.spec.ts)<br>[packages/ngx-infinitegrid/projects/ngx-infinitegrid/tsconfig.spec.json](../../../../sources/naver__egjs-infinitegrid/packages/ngx-infinitegrid/projects/ngx-infinitegrid/tsconfig.spec.json)<br>[packages/ngx-infinitegrid/projects/ngx-infinitegrid/src/test.ts](../../../../sources/naver__egjs-infinitegrid/packages/ngx-infinitegrid/projects/ngx-infinitegrid/src/test.ts)<br>[packages/ngx-infinitegrid/projects/ngx-infinitegrid/src/lib/ngx-infinitegrid.component.spec.ts](../../../../sources/naver__egjs-infinitegrid/packages/ngx-infinitegrid/projects/ngx-infinitegrid/src/lib/ngx-infinitegrid.component.spec.ts)<br>[packages/infinitegrid/tsconfig.test.json](../../../../sources/naver__egjs-infinitegrid/packages/infinitegrid/tsconfig.test.json)<br>[packages/infinitegrid/test/unit/cfcs.spec.ts](../../../../sources/naver__egjs-infinitegrid/packages/infinitegrid/test/unit/cfcs.spec.ts) |
| security | 0 | not obvious |
| ci | 2 | [.github/workflows/run-e2e.yml](../../../../sources/naver__egjs-infinitegrid/.github/workflows/run-e2e.yml)<br>[.github/workflows/static.yml](../../../../sources/naver__egjs-infinitegrid/.github/workflows/static.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 892 | [README.md](../../../../sources/naver__egjs-infinitegrid/README.md)<br>[packages/vue3-infinitegrid/README.md](../../../../sources/naver__egjs-infinitegrid/packages/vue3-infinitegrid/README.md)<br>[packages/vue-infinitegrid/README.md](../../../../sources/naver__egjs-infinitegrid/packages/vue-infinitegrid/README.md)<br>[packages/svelte-infinitegrid/README.md](../../../../sources/naver__egjs-infinitegrid/packages/svelte-infinitegrid/README.md)<br>[packages/react-infinitegrid/README.md](../../../../sources/naver__egjs-infinitegrid/packages/react-infinitegrid/README.md)<br>[packages/ngx-infinitegrid/README.md](../../../../sources/naver__egjs-infinitegrid/packages/ngx-infinitegrid/README.md)<br>[packages/ngx-infinitegrid/projects/ngx-infinitegrid/README.md](../../../../sources/naver__egjs-infinitegrid/packages/ngx-infinitegrid/projects/ngx-infinitegrid/README.md)<br>[packages/infinitegrid/README.md](../../../../sources/naver__egjs-infinitegrid/packages/infinitegrid/README.md) |
| config | 16 | [package.json](../../../../sources/naver__egjs-infinitegrid/package.json)<br>[packages/vue3-infinitegrid/package.json](../../../../sources/naver__egjs-infinitegrid/packages/vue3-infinitegrid/package.json)<br>[packages/vue3-infinitegrid/tsconfig.json](../../../../sources/naver__egjs-infinitegrid/packages/vue3-infinitegrid/tsconfig.json)<br>[packages/vue-infinitegrid/package.json](../../../../sources/naver__egjs-infinitegrid/packages/vue-infinitegrid/package.json)<br>[packages/vue-infinitegrid/tsconfig.json](../../../../sources/naver__egjs-infinitegrid/packages/vue-infinitegrid/tsconfig.json)<br>[packages/svelte-infinitegrid/package.json](../../../../sources/naver__egjs-infinitegrid/packages/svelte-infinitegrid/package.json)<br>[packages/svelte-infinitegrid/tsconfig.json](../../../../sources/naver__egjs-infinitegrid/packages/svelte-infinitegrid/tsconfig.json)<br>[packages/react-infinitegrid/package.json](../../../../sources/naver__egjs-infinitegrid/packages/react-infinitegrid/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 29 | [packages/ngx-infinitegrid/tsconfig.spec.json](../../../../sources/naver__egjs-infinitegrid/packages/ngx-infinitegrid/tsconfig.spec.json)<br>[packages/ngx-infinitegrid/src/test.ts](../../../../sources/naver__egjs-infinitegrid/packages/ngx-infinitegrid/src/test.ts)<br>[packages/ngx-infinitegrid/src/app/app.component.spec.ts](../../../../sources/naver__egjs-infinitegrid/packages/ngx-infinitegrid/src/app/app.component.spec.ts)<br>[packages/ngx-infinitegrid/projects/ngx-infinitegrid/tsconfig.spec.json](../../../../sources/naver__egjs-infinitegrid/packages/ngx-infinitegrid/projects/ngx-infinitegrid/tsconfig.spec.json)<br>[packages/ngx-infinitegrid/projects/ngx-infinitegrid/src/test.ts](../../../../sources/naver__egjs-infinitegrid/packages/ngx-infinitegrid/projects/ngx-infinitegrid/src/test.ts)<br>[packages/ngx-infinitegrid/projects/ngx-infinitegrid/src/lib/ngx-infinitegrid.component.spec.ts](../../../../sources/naver__egjs-infinitegrid/packages/ngx-infinitegrid/projects/ngx-infinitegrid/src/lib/ngx-infinitegrid.component.spec.ts) |
| CI workflows | 2 | [.github/workflows/run-e2e.yml](../../../../sources/naver__egjs-infinitegrid/.github/workflows/run-e2e.yml)<br>[.github/workflows/static.yml](../../../../sources/naver__egjs-infinitegrid/.github/workflows/static.yml) |
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

1. Start from key references: `packages/vue3-infinitegrid/src/index.ts`, `packages/vue3-infinitegrid/.storybook/main.js`, `packages/vue-infinitegrid/src/index.ts`.
2. Trace execution through entrypoints: `packages/vue3-infinitegrid/src/index.ts`, `packages/vue3-infinitegrid/.storybook/main.js`, `packages/vue-infinitegrid/src/index.ts`.
3. Inspect retrieval/memory/indexing through: `packages/vue3-infinitegrid/src/index.ts`, `packages/vue-infinitegrid/src/index.ts`, `packages/vue-infinitegrid/public/index.html`.
4. Verify behavior through test/eval files: `packages/ngx-infinitegrid/tsconfig.spec.json`, `packages/ngx-infinitegrid/src/test.ts`, `packages/ngx-infinitegrid/src/app/app.component.spec.ts`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 A module used to arrange card elements including content infinitely on a grid layout.. 핵심 구조 신호는 TypeScript, package.json, README.md, LICENSE, ci, docs이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, needs deeper structural scan입니다.
