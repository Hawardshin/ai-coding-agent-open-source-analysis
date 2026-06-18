# naver/egjs-view360 Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

360 integrated viewing solution

## 요약

- 조사 단위: `sources/naver__egjs-view360` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 595 files, 125 directories, depth score 101, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 monorepo/workspace, cli-first, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 entrypoints=packages/vue3-view360/src/index.ts, packages/vue3-view360/src/index.umd.ts, packages/vue3-view360/demo/main.ts이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | naver/egjs-view360 |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | TypeScript |
| Stars | 560 |
| Forks | 99 |
| License | MIT |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/naver__egjs-view360](../../../../sources/naver__egjs-view360) |
| Existing report | [reports/korea-trending/repositories/naver__egjs-view360.md](../../../korea-trending/repositories/naver__egjs-view360.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 595 / 125 |
| Max observed depth | 9 |
| Top directories | .github, config, demo, packages |
| Top extensions | .mdx: 192, .ts: 159, .json: 45, .tsx: 32, .js: 26, .jpg: 23, (none): 20, .md: 19, .css: 18, .svg: 9, .png: 8, .sass: 8 |
| Source patterns | monorepo/workspace, cli-first, retrieval/vector path, spec/docs-driven, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| packages/view360 | packages workspace | 29 |
| packages/ngx-view360 | packages workspace | 15 |
| packages/react-view360 | packages workspace | 15 |
| packages/vue-view360 | packages workspace | 14 |
| packages/svelte-view360 | packages workspace | 9 |
| packages/vue3-view360 | packages workspace | 9 |
| .github | ci surface | 1 |
| config | top-level component | 1 |
| demo | top-level component | 1 |
| packages | source boundary | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| quality | package.json | lint | eslint 'packages/**/!(demo)/src/*.ts' |
| test | package.json | test | lerna run test |
| build | package.json | packages | npm run packages:update && npm run packages:build && npm run packages:publish |
| utility | package.json | packages:update | lerna-helper version |
| build | package.json | packages:build | npm run build --prefix packages/view360 && lerna run build --ignore @egjs/view360 --ignore @egjs/ngx-view360 --stream |
| utility | package.json | packages:publish | lerna-helper publish --ignore @egjs/ngx-view360 --commit 'chore: update packages versions' |
| quality | package.json | changelog | lerna-helper changelog --type all --base @egjs/view360 |
| build | package.json | docs:build | typedoc-to-mdx -c typedoc-to-mdx.json |
| build | package.json | demo:build | run-s demo:copy-lib docs:build demo:build-docusaurus |
| build | package.json | demo:copy-lib | npm run build --prefix packages/view360 && npm run demo:copy-lib --prefix packages/view360 |
| build | package.json | demo:build-docusaurus | npm run build --prefix demo |
| build | package.json | demo:deploy | lerna-helper deploy --base @egjs/view360 --src demo/build/ --remote upstream |
| build | package.json | demo:deploy-origin | lerna-helper deploy --base @egjs/view360 --src demo/build/ --remote origin |
| build | package.json | release | lerna-helper release --base @egjs/view360 --remote upstream --branch master |


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
| entrypoints | [packages/vue3-view360/src/index.ts](../../../../sources/naver__egjs-view360/packages/vue3-view360/src/index.ts) | entrypoints signal |
| entrypoints | [packages/vue3-view360/src/index.umd.ts](../../../../sources/naver__egjs-view360/packages/vue3-view360/src/index.umd.ts) | entrypoints signal |
| entrypoints | [packages/vue3-view360/demo/main.ts](../../../../sources/naver__egjs-view360/packages/vue3-view360/demo/main.ts) | entrypoints signal |
| entrypoints | [packages/vue-view360/src/index.ts](../../../../sources/naver__egjs-view360/packages/vue-view360/src/index.ts) | entrypoints signal |
| config | [package.json](../../../../sources/naver__egjs-view360/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/naver__egjs-view360/tsconfig.json) | config signal |
| config | [packages/vue3-view360/package.json](../../../../sources/naver__egjs-view360/packages/vue3-view360/package.json) | config signal |
| config | [packages/vue3-view360/tsconfig.json](../../../../sources/naver__egjs-view360/packages/vue3-view360/tsconfig.json) | config signal |
| docs | [README.md](../../../../sources/naver__egjs-view360/README.md) | docs signal |
| docs | [packages/vue3-view360/README.md](../../../../sources/naver__egjs-view360/packages/vue3-view360/README.md) | docs signal |
| docs | [packages/vue-view360/README.md](../../../../sources/naver__egjs-view360/packages/vue-view360/README.md) | docs signal |
| docs | [packages/view360/README.md](../../../../sources/naver__egjs-view360/packages/view360/README.md) | docs signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 17 | [packages/vue3-view360/src/index.ts](../../../../sources/naver__egjs-view360/packages/vue3-view360/src/index.ts)<br>[packages/vue3-view360/src/index.umd.ts](../../../../sources/naver__egjs-view360/packages/vue3-view360/src/index.umd.ts)<br>[packages/vue3-view360/demo/main.ts](../../../../sources/naver__egjs-view360/packages/vue3-view360/demo/main.ts)<br>[packages/vue-view360/src/index.ts](../../../../sources/naver__egjs-view360/packages/vue-view360/src/index.ts)<br>[packages/vue-view360/src/index.umd.ts](../../../../sources/naver__egjs-view360/packages/vue-view360/src/index.umd.ts)<br>[packages/vue-view360/demo/main.ts](../../../../sources/naver__egjs-view360/packages/vue-view360/demo/main.ts)<br>[packages/view360/src/index.cjs.ts](../../../../sources/naver__egjs-view360/packages/view360/src/index.cjs.ts)<br>[packages/view360/src/index.ts](../../../../sources/naver__egjs-view360/packages/view360/src/index.ts) |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 31 | [packages/vue3-view360/index.html](../../../../sources/naver__egjs-view360/packages/vue3-view360/index.html)<br>[packages/vue3-view360/src/index.ts](../../../../sources/naver__egjs-view360/packages/vue3-view360/src/index.ts)<br>[packages/vue3-view360/src/index.umd.ts](../../../../sources/naver__egjs-view360/packages/vue3-view360/src/index.umd.ts)<br>[packages/vue-view360/src/index.ts](../../../../sources/naver__egjs-view360/packages/vue-view360/src/index.ts)<br>[packages/vue-view360/src/index.umd.ts](../../../../sources/naver__egjs-view360/packages/vue-view360/src/index.umd.ts)<br>[packages/vue-view360/demo/index.html](../../../../sources/naver__egjs-view360/packages/vue-view360/demo/index.html)<br>[packages/view360/test/manual/index.css](../../../../sources/naver__egjs-view360/packages/view360/test/manual/index.css)<br>[packages/view360/test/manual/index.html](../../../../sources/naver__egjs-view360/packages/view360/test/manual/index.html) |
| spec | 6 | [packages/vue-view360/tests/unit/View360.spec.ts](../../../../sources/naver__egjs-view360/packages/vue-view360/tests/unit/View360.spec.ts)<br>[packages/view360/test/unit/specs/View360.spec.ts](../../../../sources/naver__egjs-view360/packages/view360/test/unit/specs/View360.spec.ts)<br>[packages/react-view360/test/View360.spec.tsx](../../../../sources/naver__egjs-view360/packages/react-view360/test/View360.spec.tsx)<br>[packages/ngx-view360/projects/ngx-view360/tsconfig.spec.json](../../../../sources/naver__egjs-view360/packages/ngx-view360/projects/ngx-view360/tsconfig.spec.json)<br>[packages/ngx-view360/projects/demo/tsconfig.spec.json](../../../../sources/naver__egjs-view360/packages/ngx-view360/projects/demo/tsconfig.spec.json)<br>[packages/ngx-view360/projects/demo/src/app/app.component.spec.ts](../../../../sources/naver__egjs-view360/packages/ngx-view360/projects/demo/src/app/app.component.spec.ts) |
| eval | 21 | [packages/vue-view360/tests/unit/test-utils.ts](../../../../sources/naver__egjs-view360/packages/vue-view360/tests/unit/test-utils.ts)<br>[packages/vue-view360/tests/unit/tsconfig.json](../../../../sources/naver__egjs-view360/packages/vue-view360/tests/unit/tsconfig.json)<br>[packages/vue-view360/tests/unit/View360.spec.ts](../../../../sources/naver__egjs-view360/packages/vue-view360/tests/unit/View360.spec.ts)<br>[packages/view360/test/unit/setup.ts](../../../../sources/naver__egjs-view360/packages/view360/test/unit/setup.ts)<br>[packages/view360/test/unit/shim.d.ts](../../../../sources/naver__egjs-view360/packages/view360/test/unit/shim.d.ts)<br>[packages/view360/test/unit/test-utils.ts](../../../../sources/naver__egjs-view360/packages/view360/test/unit/test-utils.ts)<br>[packages/view360/test/unit/tsconfig.json](../../../../sources/naver__egjs-view360/packages/view360/test/unit/tsconfig.json)<br>[packages/view360/test/unit/specs/View360.spec.ts](../../../../sources/naver__egjs-view360/packages/view360/test/unit/specs/View360.spec.ts) |
| security | 0 | not obvious |
| ci | 1 | [.github/workflows/run-test.yml](../../../../sources/naver__egjs-view360/.github/workflows/run-test.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 198 | [README.md](../../../../sources/naver__egjs-view360/README.md)<br>[packages/vue3-view360/README.md](../../../../sources/naver__egjs-view360/packages/vue3-view360/README.md)<br>[packages/vue-view360/README.md](../../../../sources/naver__egjs-view360/packages/vue-view360/README.md)<br>[packages/view360/README.md](../../../../sources/naver__egjs-view360/packages/view360/README.md)<br>[packages/svelte-view360/README.md](../../../../sources/naver__egjs-view360/packages/svelte-view360/README.md)<br>[packages/react-view360/README.md](../../../../sources/naver__egjs-view360/packages/react-view360/README.md)<br>[packages/ngx-view360/README.md](../../../../sources/naver__egjs-view360/packages/ngx-view360/README.md)<br>[packages/ngx-view360/projects/ngx-view360/README.md](../../../../sources/naver__egjs-view360/packages/ngx-view360/projects/ngx-view360/README.md) |
| config | 19 | [package.json](../../../../sources/naver__egjs-view360/package.json)<br>[tsconfig.json](../../../../sources/naver__egjs-view360/tsconfig.json)<br>[packages/vue3-view360/package.json](../../../../sources/naver__egjs-view360/packages/vue3-view360/package.json)<br>[packages/vue3-view360/tsconfig.json](../../../../sources/naver__egjs-view360/packages/vue3-view360/tsconfig.json)<br>[packages/vue-view360/package.json](../../../../sources/naver__egjs-view360/packages/vue-view360/package.json)<br>[packages/vue-view360/tsconfig.json](../../../../sources/naver__egjs-view360/packages/vue-view360/tsconfig.json)<br>[packages/vue-view360/tests/unit/tsconfig.json](../../../../sources/naver__egjs-view360/packages/vue-view360/tests/unit/tsconfig.json)<br>[packages/view360/package.json](../../../../sources/naver__egjs-view360/packages/view360/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 21 | [packages/vue-view360/tests/unit/test-utils.ts](../../../../sources/naver__egjs-view360/packages/vue-view360/tests/unit/test-utils.ts)<br>[packages/vue-view360/tests/unit/tsconfig.json](../../../../sources/naver__egjs-view360/packages/vue-view360/tests/unit/tsconfig.json)<br>[packages/vue-view360/tests/unit/View360.spec.ts](../../../../sources/naver__egjs-view360/packages/vue-view360/tests/unit/View360.spec.ts)<br>[packages/view360/test/unit/setup.ts](../../../../sources/naver__egjs-view360/packages/view360/test/unit/setup.ts)<br>[packages/view360/test/unit/shim.d.ts](../../../../sources/naver__egjs-view360/packages/view360/test/unit/shim.d.ts)<br>[packages/view360/test/unit/test-utils.ts](../../../../sources/naver__egjs-view360/packages/view360/test/unit/test-utils.ts) |
| CI workflows | 1 | [.github/workflows/run-test.yml](../../../../sources/naver__egjs-view360/.github/workflows/run-test.yml) |
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

1. Start from key references: `packages/vue3-view360/src/index.ts`, `packages/vue3-view360/src/index.umd.ts`, `packages/vue3-view360/demo/main.ts`.
2. Trace execution through entrypoints: `packages/vue3-view360/src/index.ts`, `packages/vue3-view360/src/index.umd.ts`, `packages/vue3-view360/demo/main.ts`.
3. Inspect retrieval/memory/indexing through: `packages/vue3-view360/index.html`, `packages/vue3-view360/src/index.ts`, `packages/vue3-view360/src/index.umd.ts`.
4. Verify behavior through test/eval files: `packages/vue-view360/tests/unit/test-utils.ts`, `packages/vue-view360/tests/unit/tsconfig.json`, `packages/vue-view360/tests/unit/View360.spec.ts`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 360 integrated viewing solution. 핵심 구조 신호는 TypeScript, package.json, README.md, LICENSE, ci, docs이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, needs deeper structural scan입니다.
