# line/create-liff-app Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Start developing LIFF application with a simple CLI command.

## 요약

- 조사 단위: `sources/line__create-liff-app` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 114 files, 38 directories, depth score 87, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

개발 생산성/DevTools 관점에서 cli-first, api/server, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 entrypoints=templates/vue-ts/src/App.vue, templates/vue-ts/src/main.ts, templates/vue/src/App.vue이고, 의존성 단서는 commander, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | line/create-liff-app |
| Topic | Developer Productivity and DevTools / 개발 생산성/DevTools |
| Region | korea |
| Language | TypeScript |
| Stars | 80 |
| Forks | 17 |
| License | Apache-2.0 |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/line__create-liff-app](../../../../sources/line__create-liff-app) |
| Existing report | [reports/korea-trending/repositories/line__create-liff-app.md](../../../korea-trending/repositories/line__create-liff-app.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 114 / 38 |
| Max observed depth | 4 |
| Top directories | .github, templates, test |
| Top extensions | .js: 18, .json: 15, .ts: 15, .ico: 12, .css: 8, .default: 8, .html: 8, .md: 6, .tsx: 5, .vue: 4, .yml: 4, (none): 4 |
| Source patterns | cli-first, api/server, retrieval/vector path, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| .github | ci surface | 1 |
| templates | top-level component | 1 |
| test | validation surface | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| build | package.json | build | tsc |
| serve-dev | package.json | watch | tsc -w |
| serve-dev | package.json | start | yarn build && node dist/index.js |
| test | package.json | test | yarn build && jest |
| quality | package.json | lint:eslint | eslint '**/*.{ts,js}' |
| quality | package.json | fix:eslint | yarn lint:eslint --fix |
| entrypoint | package.json bin | index.js | ./dist/index.js |
| entrypoint | package.json bin | index.js | ./dist/index.js |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | none |
| developerSurface | commander |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| entrypoints | [templates/vue-ts/src/App.vue](../../../../sources/line__create-liff-app/templates/vue-ts/src/App.vue) | entrypoints signal |
| entrypoints | [templates/vue-ts/src/main.ts](../../../../sources/line__create-liff-app/templates/vue-ts/src/main.ts) | entrypoints signal |
| entrypoints | [templates/vue/src/App.vue](../../../../sources/line__create-liff-app/templates/vue/src/App.vue) | entrypoints signal |
| entrypoints | [templates/vue/src/main.js](../../../../sources/line__create-liff-app/templates/vue/src/main.js) | entrypoints signal |
| config | [package.json](../../../../sources/line__create-liff-app/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/line__create-liff-app/tsconfig.json) | config signal |
| config | [templates/vue-ts/package.json](../../../../sources/line__create-liff-app/templates/vue-ts/package.json) | config signal |
| config | [templates/vue-ts/tsconfig.json](../../../../sources/line__create-liff-app/templates/vue-ts/tsconfig.json) | config signal |
| ci | [.github/workflows/code-check.yml](../../../../sources/line__create-liff-app/.github/workflows/code-check.yml) | ci signal |
| ci | [.github/workflows/create-release-pr.yml](../../../../sources/line__create-liff-app/.github/workflows/create-release-pr.yml) | ci signal |
| ci | [.github/workflows/release.yml](../../../../sources/line__create-liff-app/.github/workflows/release.yml) | ci signal |
| docs | [README.md](../../../../sources/line__create-liff-app/README.md) | docs signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 16 | [templates/vue-ts/src/App.vue](../../../../sources/line__create-liff-app/templates/vue-ts/src/App.vue)<br>[templates/vue-ts/src/main.ts](../../../../sources/line__create-liff-app/templates/vue-ts/src/main.ts)<br>[templates/vue/src/App.vue](../../../../sources/line__create-liff-app/templates/vue/src/App.vue)<br>[templates/vue/src/main.js](../../../../sources/line__create-liff-app/templates/vue/src/main.js)<br>[templates/vanilla-ts/src/main.ts](../../../../sources/line__create-liff-app/templates/vanilla-ts/src/main.ts)<br>[templates/vanilla/main.js](../../../../sources/line__create-liff-app/templates/vanilla/main.js)<br>[templates/svelte-ts/src/App.svelte](../../../../sources/line__create-liff-app/templates/svelte-ts/src/App.svelte)<br>[templates/svelte-ts/src/main.ts](../../../../sources/line__create-liff-app/templates/svelte-ts/src/main.ts) |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 13 | [index.ts](../../../../sources/line__create-liff-app/index.ts)<br>[test/index.test.ts](../../../../sources/line__create-liff-app/test/index.test.ts)<br>[templates/vue-ts/index.html](../../../../sources/line__create-liff-app/templates/vue-ts/index.html)<br>[templates/vue/index.html](../../../../sources/line__create-liff-app/templates/vue/index.html)<br>[templates/vanilla-ts/index.html](../../../../sources/line__create-liff-app/templates/vanilla-ts/index.html)<br>[templates/vanilla/index.html](../../../../sources/line__create-liff-app/templates/vanilla/index.html)<br>[templates/svelte-ts/index.html](../../../../sources/line__create-liff-app/templates/svelte-ts/index.html)<br>[templates/svelte/index.html](../../../../sources/line__create-liff-app/templates/svelte/index.html) |
| spec | 0 | not obvious |
| eval | 1 | [test/index.test.ts](../../../../sources/line__create-liff-app/test/index.test.ts) |
| security | 0 | not obvious |
| ci | 3 | [.github/workflows/code-check.yml](../../../../sources/line__create-liff-app/.github/workflows/code-check.yml)<br>[.github/workflows/create-release-pr.yml](../../../../sources/line__create-liff-app/.github/workflows/create-release-pr.yml)<br>[.github/workflows/release.yml](../../../../sources/line__create-liff-app/.github/workflows/release.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 1 | [README.md](../../../../sources/line__create-liff-app/README.md) |
| config | 14 | [package.json](../../../../sources/line__create-liff-app/package.json)<br>[tsconfig.json](../../../../sources/line__create-liff-app/tsconfig.json)<br>[templates/vue-ts/package.json](../../../../sources/line__create-liff-app/templates/vue-ts/package.json)<br>[templates/vue-ts/tsconfig.json](../../../../sources/line__create-liff-app/templates/vue-ts/tsconfig.json)<br>[templates/vue/package.json](../../../../sources/line__create-liff-app/templates/vue/package.json)<br>[templates/vanilla-ts/package.json](../../../../sources/line__create-liff-app/templates/vanilla-ts/package.json)<br>[templates/vanilla-ts/tsconfig.json](../../../../sources/line__create-liff-app/templates/vanilla-ts/tsconfig.json)<br>[templates/vanilla/package.json](../../../../sources/line__create-liff-app/templates/vanilla/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 1 | [test/index.test.ts](../../../../sources/line__create-liff-app/test/index.test.ts) |
| CI workflows | 3 | [.github/workflows/code-check.yml](../../../../sources/line__create-liff-app/.github/workflows/code-check.yml)<br>[.github/workflows/create-release-pr.yml](../../../../sources/line__create-liff-app/.github/workflows/create-release-pr.yml)<br>[.github/workflows/release.yml](../../../../sources/line__create-liff-app/.github/workflows/release.yml) |
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

1. Start from key references: `templates/vue-ts/src/App.vue`, `templates/vue-ts/src/main.ts`, `templates/vue/src/App.vue`.
2. Trace execution through entrypoints: `templates/vue-ts/src/App.vue`, `templates/vue-ts/src/main.ts`, `templates/vue/src/App.vue`.
3. Inspect retrieval/memory/indexing through: `index.ts`, `test/index.test.ts`, `templates/vue-ts/index.html`.
4. Verify behavior through test/eval files: `test/index.test.ts`.

## Existing Repository Insight

개발 생산성/DevTools 관점에서 Start developing LIFF application with a simple CLI command.. 핵심 구조 신호는 TypeScript, package.json, README.md, tests, ci, docs이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 개발 생산성/DevTools 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 needs deeper structural scan입니다.
