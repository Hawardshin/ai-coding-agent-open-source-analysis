# naver/egjs-imready Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

I'm Ready to check if the images or videos are loaded!

## 요약

- 조사 단위: `sources/naver__egjs-imready` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 196 files, 45 directories, depth score 99, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 entrypoints=packages/vue2-imready/src/index.ts, packages/vue2-imready/.storybook/main.js, packages/vue-imready/src/App.vue이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | naver/egjs-imready |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | TypeScript |
| Stars | 68 |
| Forks | 6 |
| License | NOASSERTION |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/naver__egjs-imready](../../../../sources/naver__egjs-imready) |
| Existing report | [reports/korea-trending/repositories/naver__egjs-imready.md](../../../korea-trending/repositories/naver__egjs-imready.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 196 / 45 |
| Max observed depth | 7 |
| Top directories | .github, config, demo, packages |
| Top extensions | .ts: 63, .json: 34, (none): 19, .js: 18, .md: 17, .tsx: 10, .html: 8, .css: 5, .png: 5, .ico: 4, .yml: 3, .opts: 2 |
| Source patterns | monorepo/workspace, cli-first, api/server, retrieval/vector path, spec/docs-driven, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| packages/ngx-imready | packages workspace | 21 |
| packages/imready | packages workspace | 20 |
| packages/react-imready | packages workspace | 12 |
| packages/vue2-imready | packages workspace | 8 |
| packages/svelte-imready | packages workspace | 7 |
| packages/vue-imready | packages workspace | 7 |
| .github | ci surface | 1 |
| config | top-level component | 1 |
| demo | top-level component | 1 |
| packages | source boundary | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| build | package.json | packages | npm run packages:update && npm run packages:build && npm run packages:publish |
| utility | package.json | packages:update | lerna-helper version |
| build | package.json | packages:build | npm run build --prefix packages/imready && lerna run build --ignore @egjs/imready --ignore @egjs/ngx-imready --ignore docs --stream |
| utility | package.json | packages:publish | lerna-helper publish --ignore @egjs/ngx-imready --commit 'chore: update packages versions' |
| build | package.json | docs:build | rm -rf ./doc && jsdoc -c jsdoc.json |
| utility | package.json | demo:deploy | lerna-helper deploy --base @egjs/imready --remote origin |
| build | package.json | release | lerna-helper release --base @egjs/imready --remote upstream --branch main |


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
| entrypoints | [packages/vue2-imready/src/index.ts](../../../../sources/naver__egjs-imready/packages/vue2-imready/src/index.ts) | entrypoints signal |
| entrypoints | [packages/vue2-imready/.storybook/main.js](../../../../sources/naver__egjs-imready/packages/vue2-imready/.storybook/main.js) | entrypoints signal |
| entrypoints | [packages/vue-imready/src/App.vue](../../../../sources/naver__egjs-imready/packages/vue-imready/src/App.vue) | entrypoints signal |
| entrypoints | [packages/vue-imready/src/main.ts](../../../../sources/naver__egjs-imready/packages/vue-imready/src/main.ts) | entrypoints signal |
| config | [package.json](../../../../sources/naver__egjs-imready/package.json) | config signal |
| config | [packages/vue2-imready/package.json](../../../../sources/naver__egjs-imready/packages/vue2-imready/package.json) | config signal |
| config | [packages/vue2-imready/tsconfig.json](../../../../sources/naver__egjs-imready/packages/vue2-imready/tsconfig.json) | config signal |
| config | [packages/vue-imready/package.json](../../../../sources/naver__egjs-imready/packages/vue-imready/package.json) | config signal |
| docs | [README.md](../../../../sources/naver__egjs-imready/README.md) | docs signal |
| docs | [packages/vue2-imready/README.md](../../../../sources/naver__egjs-imready/packages/vue2-imready/README.md) | docs signal |
| docs | [packages/vue-imready/README.md](../../../../sources/naver__egjs-imready/packages/vue-imready/README.md) | docs signal |
| docs | [packages/svelte-imready/README.md](../../../../sources/naver__egjs-imready/packages/svelte-imready/README.md) | docs signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 13 | [packages/vue2-imready/src/index.ts](../../../../sources/naver__egjs-imready/packages/vue2-imready/src/index.ts)<br>[packages/vue2-imready/.storybook/main.js](../../../../sources/naver__egjs-imready/packages/vue2-imready/.storybook/main.js)<br>[packages/vue-imready/src/App.vue](../../../../sources/naver__egjs-imready/packages/vue-imready/src/App.vue)<br>[packages/vue-imready/src/main.ts](../../../../sources/naver__egjs-imready/packages/vue-imready/src/main.ts)<br>[packages/svelte-imready/src/App.svelte](../../../../sources/naver__egjs-imready/packages/svelte-imready/src/App.svelte)<br>[packages/svelte-imready/src/main.js](../../../../sources/naver__egjs-imready/packages/svelte-imready/src/main.js)<br>[packages/react-imready/src/index.tsx](../../../../sources/naver__egjs-imready/packages/react-imready/src/index.tsx)<br>[packages/ngx-imready/src/index.html](../../../../sources/naver__egjs-imready/packages/ngx-imready/src/index.html) |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 16 | [packages/vue2-imready/src/index.ts](../../../../sources/naver__egjs-imready/packages/vue2-imready/src/index.ts)<br>[packages/vue2-imready/public/index.html](../../../../sources/naver__egjs-imready/packages/vue2-imready/public/index.html)<br>[packages/vue2-imready/demo/index.ts](../../../../sources/naver__egjs-imready/packages/vue2-imready/demo/index.ts)<br>[packages/vue-imready/src/vue-imready/index.ts](../../../../sources/naver__egjs-imready/packages/vue-imready/src/vue-imready/index.ts)<br>[packages/vue-imready/public/index.html](../../../../sources/naver__egjs-imready/packages/vue-imready/public/index.html)<br>[packages/svelte-imready/src/svelte-imready/index.ts](../../../../sources/naver__egjs-imready/packages/svelte-imready/src/svelte-imready/index.ts)<br>[packages/svelte-imready/public/index.html](../../../../sources/naver__egjs-imready/packages/svelte-imready/public/index.html)<br>[packages/react-imready/src/index.tsx](../../../../sources/naver__egjs-imready/packages/react-imready/src/index.tsx) |
| spec | 9 | [packages/react-imready/test/unit/ImReady.spec.tsx](../../../../sources/naver__egjs-imready/packages/react-imready/test/unit/ImReady.spec.tsx)<br>[packages/ngx-imready/tsconfig.spec.json](../../../../sources/naver__egjs-imready/packages/ngx-imready/tsconfig.spec.json)<br>[packages/ngx-imready/src/app/app.component.spec.ts](../../../../sources/naver__egjs-imready/packages/ngx-imready/src/app/app.component.spec.ts)<br>[packages/ngx-imready/projects/ngx-imready/tsconfig.spec.json](../../../../sources/naver__egjs-imready/packages/ngx-imready/projects/ngx-imready/tsconfig.spec.json)<br>[packages/ngx-imready/e2e/src/app.e2e-spec.ts](../../../../sources/naver__egjs-imready/packages/ngx-imready/e2e/src/app.e2e-spec.ts)<br>[packages/imready/test/unit/element.spec.ts](../../../../sources/naver__egjs-imready/packages/imready/test/unit/element.spec.ts)<br>[packages/imready/test/unit/Image.spec.ts](../../../../sources/naver__egjs-imready/packages/imready/test/unit/Image.spec.ts)<br>[packages/imready/test/unit/initialization.spec.ts](../../../../sources/naver__egjs-imready/packages/imready/test/unit/initialization.spec.ts) |
| eval | 17 | [packages/react-imready/tsconfig.test.json](../../../../sources/naver__egjs-imready/packages/react-imready/tsconfig.test.json)<br>[packages/react-imready/test/unit/ImReady.spec.tsx](../../../../sources/naver__egjs-imready/packages/react-imready/test/unit/ImReady.spec.tsx)<br>[packages/react-imready/test/unit/TestHelper.ts](../../../../sources/naver__egjs-imready/packages/react-imready/test/unit/TestHelper.ts)<br>[packages/ngx-imready/tsconfig.spec.json](../../../../sources/naver__egjs-imready/packages/ngx-imready/tsconfig.spec.json)<br>[packages/ngx-imready/src/test.ts](../../../../sources/naver__egjs-imready/packages/ngx-imready/src/test.ts)<br>[packages/ngx-imready/src/app/app.component.spec.ts](../../../../sources/naver__egjs-imready/packages/ngx-imready/src/app/app.component.spec.ts)<br>[packages/ngx-imready/projects/ngx-imready/tsconfig.spec.json](../../../../sources/naver__egjs-imready/packages/ngx-imready/projects/ngx-imready/tsconfig.spec.json)<br>[packages/ngx-imready/projects/ngx-imready/src/test.ts](../../../../sources/naver__egjs-imready/packages/ngx-imready/projects/ngx-imready/src/test.ts) |
| security | 0 | not obvious |
| ci | 1 | [.github/workflows/run-unit.yml](../../../../sources/naver__egjs-imready/.github/workflows/run-unit.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 8 | [README.md](../../../../sources/naver__egjs-imready/README.md)<br>[packages/vue2-imready/README.md](../../../../sources/naver__egjs-imready/packages/vue2-imready/README.md)<br>[packages/vue-imready/README.md](../../../../sources/naver__egjs-imready/packages/vue-imready/README.md)<br>[packages/svelte-imready/README.md](../../../../sources/naver__egjs-imready/packages/svelte-imready/README.md)<br>[packages/react-imready/README.md](../../../../sources/naver__egjs-imready/packages/react-imready/README.md)<br>[packages/ngx-imready/README.md](../../../../sources/naver__egjs-imready/packages/ngx-imready/README.md)<br>[packages/ngx-imready/projects/ngx-imready/README.md](../../../../sources/naver__egjs-imready/packages/ngx-imready/projects/ngx-imready/README.md)<br>[packages/imready/README.md](../../../../sources/naver__egjs-imready/packages/imready/README.md) |
| config | 15 | [package.json](../../../../sources/naver__egjs-imready/package.json)<br>[packages/vue2-imready/package.json](../../../../sources/naver__egjs-imready/packages/vue2-imready/package.json)<br>[packages/vue2-imready/tsconfig.json](../../../../sources/naver__egjs-imready/packages/vue2-imready/tsconfig.json)<br>[packages/vue-imready/package.json](../../../../sources/naver__egjs-imready/packages/vue-imready/package.json)<br>[packages/vue-imready/tsconfig.json](../../../../sources/naver__egjs-imready/packages/vue-imready/tsconfig.json)<br>[packages/svelte-imready/package.json](../../../../sources/naver__egjs-imready/packages/svelte-imready/package.json)<br>[packages/svelte-imready/tsconfig.json](../../../../sources/naver__egjs-imready/packages/svelte-imready/tsconfig.json)<br>[packages/react-imready/package.json](../../../../sources/naver__egjs-imready/packages/react-imready/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 17 | [packages/react-imready/tsconfig.test.json](../../../../sources/naver__egjs-imready/packages/react-imready/tsconfig.test.json)<br>[packages/react-imready/test/unit/ImReady.spec.tsx](../../../../sources/naver__egjs-imready/packages/react-imready/test/unit/ImReady.spec.tsx)<br>[packages/react-imready/test/unit/TestHelper.ts](../../../../sources/naver__egjs-imready/packages/react-imready/test/unit/TestHelper.ts)<br>[packages/ngx-imready/tsconfig.spec.json](../../../../sources/naver__egjs-imready/packages/ngx-imready/tsconfig.spec.json)<br>[packages/ngx-imready/src/test.ts](../../../../sources/naver__egjs-imready/packages/ngx-imready/src/test.ts)<br>[packages/ngx-imready/src/app/app.component.spec.ts](../../../../sources/naver__egjs-imready/packages/ngx-imready/src/app/app.component.spec.ts) |
| CI workflows | 1 | [.github/workflows/run-unit.yml](../../../../sources/naver__egjs-imready/.github/workflows/run-unit.yml) |
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

1. Start from key references: `packages/vue2-imready/src/index.ts`, `packages/vue2-imready/.storybook/main.js`, `packages/vue-imready/src/App.vue`.
2. Trace execution through entrypoints: `packages/vue2-imready/src/index.ts`, `packages/vue2-imready/.storybook/main.js`, `packages/vue-imready/src/App.vue`.
3. Inspect retrieval/memory/indexing through: `packages/vue2-imready/src/index.ts`, `packages/vue2-imready/public/index.html`, `packages/vue2-imready/demo/index.ts`.
4. Verify behavior through test/eval files: `packages/react-imready/tsconfig.test.json`, `packages/react-imready/test/unit/ImReady.spec.tsx`, `packages/react-imready/test/unit/TestHelper.ts`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 I'm Ready to check if the images or videos are loaded!. 핵심 구조 신호는 TypeScript, package.json, README.md, LICENSE, ci, docs이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, needs deeper structural scan입니다.
