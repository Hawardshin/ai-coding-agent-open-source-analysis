# naver/cfcs Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Write once, create framework components that supports React, Vue, Svelte, and more.

## 요약

- 조사 단위: `sources/naver__cfcs` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 218 files, 55 directories, depth score 99, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 monorepo/workspace, cli-first, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 entrypoints=packages/vue3/src/index.ts, packages/vue2/src/index.ts, packages/svelte/src/index.ts이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | naver/cfcs |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | TypeScript |
| Stars | 118 |
| Forks | 3 |
| License | MIT |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/naver__cfcs](../../../../sources/naver__cfcs) |
| Existing report | [reports/korea-trending/repositories/naver__cfcs.md](../../../korea-trending/repositories/naver__cfcs.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 218 / 55 |
| Max observed depth | 6 |
| Top directories | .github, config, images, packages |
| Top extensions | .ts: 53, .json: 45, .png: 21, .md: 19, .mdx: 18, (none): 18, .js: 16, .tsx: 12, .css: 6, .html: 3, .ico: 2, .svg: 2 |
| Source patterns | monorepo/workspace, cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| packages/docs | packages workspace | 41 |
| packages/core | packages workspace | 15 |
| packages/angular | packages workspace | 13 |
| packages/react | packages workspace | 6 |
| packages/svelte | packages workspace | 6 |
| packages/vue2 | packages workspace | 6 |
| packages/vue3 | packages workspace | 6 |
| packages/cli | packages workspace | 3 |
| .github | ci surface | 1 |
| config | top-level component | 1 |
| images | top-level component | 1 |
| packages | source boundary | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| build | package.json | packages | npm run packages:update && npm run packages:build && npm run packages:publish |
| utility | package.json | packages:update | lerna-helper version |
| build | package.json | packages:build | npm run build --prefix packages/core && lerna run build --ignore @cfcs/core --ignore @cfcs/angular --ignore docs --stream |
| utility | package.json | packages:publish | lerna-helper publish --ignore @cfcs/angular --commit 'chore: update packages versions' |
| quality | package.json | changelog | lerna-helper changelog --type all --base @cfcs/core |
| build | package.json | docs:build | yarn docs:core && yarn docs:react && yarn docs:vue2 && yarn docs:vue3 && yarn docs:svelte |
| quality | package.json | docs:core | typedoc-to-mdx -c ./config/ttmdx-core.json |
| quality | package.json | docs:react | typedoc-to-mdx -c ./config/ttmdx-react.json |
| quality | package.json | docs:vue2 | typedoc-to-mdx -c ./config/ttmdx-vue2.json |
| quality | package.json | docs:vue3 | typedoc-to-mdx -c ./config/ttmdx-vue3.json |
| quality | package.json | docs:svelte | typedoc-to-mdx -c ./config/ttmdx-svelte.json |
| build | package.json | demo:build | npm run docs:build && npm run packages:build && npm run build --prefix packages/docs |
| utility | package.json | demo:deploy | lerna-helper deploy --base @cfcs/core --remote upstream |
| build | package.json | release | lerna-helper release --base @cfcs/core --remote upstream --branch main |


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
| entrypoints | [packages/vue3/src/index.ts](../../../../sources/naver__cfcs/packages/vue3/src/index.ts) | entrypoints signal |
| entrypoints | [packages/vue2/src/index.ts](../../../../sources/naver__cfcs/packages/vue2/src/index.ts) | entrypoints signal |
| entrypoints | [packages/svelte/src/index.ts](../../../../sources/naver__cfcs/packages/svelte/src/index.ts) | entrypoints signal |
| entrypoints | [packages/react/src/index.ts](../../../../sources/naver__cfcs/packages/react/src/index.ts) | entrypoints signal |
| config | [package.json](../../../../sources/naver__cfcs/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/naver__cfcs/tsconfig.json) | config signal |
| config | [packages/vue3/package.json](../../../../sources/naver__cfcs/packages/vue3/package.json) | config signal |
| config | [packages/vue3/tsconfig.json](../../../../sources/naver__cfcs/packages/vue3/tsconfig.json) | config signal |
| docs | [README.md](../../../../sources/naver__cfcs/README.md) | docs signal |
| docs | [packages/vue3/README.md](../../../../sources/naver__cfcs/packages/vue3/README.md) | docs signal |
| docs | [packages/vue2/README.md](../../../../sources/naver__cfcs/packages/vue2/README.md) | docs signal |
| docs | [packages/svelte/README.md](../../../../sources/naver__cfcs/packages/svelte/README.md) | docs signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 8 | [packages/vue3/src/index.ts](../../../../sources/naver__cfcs/packages/vue3/src/index.ts)<br>[packages/vue2/src/index.ts](../../../../sources/naver__cfcs/packages/vue2/src/index.ts)<br>[packages/svelte/src/index.ts](../../../../sources/naver__cfcs/packages/svelte/src/index.ts)<br>[packages/react/src/index.ts](../../../../sources/naver__cfcs/packages/react/src/index.ts)<br>[packages/core/src/index.ts](../../../../sources/naver__cfcs/packages/core/src/index.ts)<br>[packages/core/src/index.umd.ts](../../../../sources/naver__cfcs/packages/core/src/index.umd.ts)<br>[packages/angular/src/index.html](../../../../sources/naver__cfcs/packages/angular/src/index.html)<br>[packages/angular/src/main.ts](../../../../sources/naver__cfcs/packages/angular/src/main.ts) |
| agentRuntime | 1 | [packages/core/src/reactive/hooks.ts](../../../../sources/naver__cfcs/packages/core/src/reactive/hooks.ts) |
| mcp | 0 | not obvious |
| retrieval | 20 | [packages/vue3/src/index.ts](../../../../sources/naver__cfcs/packages/vue3/src/index.ts)<br>[packages/vue3/src/reactive/index.ts](../../../../sources/naver__cfcs/packages/vue3/src/reactive/index.ts)<br>[packages/vue2/src/index.ts](../../../../sources/naver__cfcs/packages/vue2/src/index.ts)<br>[packages/vue2/src/reactive/index.ts](../../../../sources/naver__cfcs/packages/vue2/src/reactive/index.ts)<br>[packages/svelte/src/index.ts](../../../../sources/naver__cfcs/packages/svelte/src/index.ts)<br>[packages/svelte/src/reactive/index.ts](../../../../sources/naver__cfcs/packages/svelte/src/reactive/index.ts)<br>[packages/react/src/index.ts](../../../../sources/naver__cfcs/packages/react/src/index.ts)<br>[packages/react/src/reactive/index.ts](../../../../sources/naver__cfcs/packages/react/src/reactive/index.ts) |
| spec | 4 | [packages/core/test/unit/computed.spec.ts](../../../../sources/naver__cfcs/packages/core/test/unit/computed.spec.ts)<br>[packages/angular/tsconfig.spec.json](../../../../sources/naver__cfcs/packages/angular/tsconfig.spec.json)<br>[packages/angular/src/app/app.component.spec.ts](../../../../sources/naver__cfcs/packages/angular/src/app/app.component.spec.ts)<br>[packages/angular/projects/angular/tsconfig.spec.json](../../../../sources/naver__cfcs/packages/angular/projects/angular/tsconfig.spec.json) |
| eval | 7 | [packages/core/tsconfig.test.json](../../../../sources/naver__cfcs/packages/core/tsconfig.test.json)<br>[packages/core/test/unit/computed.spec.ts](../../../../sources/naver__cfcs/packages/core/test/unit/computed.spec.ts)<br>[packages/core/test/manual/index.html](../../../../sources/naver__cfcs/packages/core/test/manual/index.html)<br>[packages/angular/tsconfig.spec.json](../../../../sources/naver__cfcs/packages/angular/tsconfig.spec.json)<br>[packages/angular/src/test.ts](../../../../sources/naver__cfcs/packages/angular/src/test.ts)<br>[packages/angular/src/app/app.component.spec.ts](../../../../sources/naver__cfcs/packages/angular/src/app/app.component.spec.ts)<br>[packages/angular/projects/angular/tsconfig.spec.json](../../../../sources/naver__cfcs/packages/angular/projects/angular/tsconfig.spec.json) |
| security | 0 | not obvious |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 75 | [README.md](../../../../sources/naver__cfcs/README.md)<br>[packages/vue3/README.md](../../../../sources/naver__cfcs/packages/vue3/README.md)<br>[packages/vue2/README.md](../../../../sources/naver__cfcs/packages/vue2/README.md)<br>[packages/svelte/README.md](../../../../sources/naver__cfcs/packages/svelte/README.md)<br>[packages/react/README.md](../../../../sources/naver__cfcs/packages/react/README.md)<br>[packages/docs/.eslintrc.json](../../../../sources/naver__cfcs/packages/docs/.eslintrc.json)<br>[packages/docs/.gitignore](../../../../sources/naver__cfcs/packages/docs/.gitignore)<br>[packages/docs/docusaurus.config.js](../../../../sources/naver__cfcs/packages/docs/docusaurus.config.js) |
| config | 19 | [package.json](../../../../sources/naver__cfcs/package.json)<br>[tsconfig.json](../../../../sources/naver__cfcs/tsconfig.json)<br>[packages/vue3/package.json](../../../../sources/naver__cfcs/packages/vue3/package.json)<br>[packages/vue3/tsconfig.json](../../../../sources/naver__cfcs/packages/vue3/tsconfig.json)<br>[packages/vue2/package.json](../../../../sources/naver__cfcs/packages/vue2/package.json)<br>[packages/vue2/tsconfig.json](../../../../sources/naver__cfcs/packages/vue2/tsconfig.json)<br>[packages/svelte/package.json](../../../../sources/naver__cfcs/packages/svelte/package.json)<br>[packages/svelte/tsconfig.json](../../../../sources/naver__cfcs/packages/svelte/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 7 | [packages/core/tsconfig.test.json](../../../../sources/naver__cfcs/packages/core/tsconfig.test.json)<br>[packages/core/test/unit/computed.spec.ts](../../../../sources/naver__cfcs/packages/core/test/unit/computed.spec.ts)<br>[packages/core/test/manual/index.html](../../../../sources/naver__cfcs/packages/core/test/manual/index.html)<br>[packages/angular/tsconfig.spec.json](../../../../sources/naver__cfcs/packages/angular/tsconfig.spec.json)<br>[packages/angular/src/test.ts](../../../../sources/naver__cfcs/packages/angular/src/test.ts)<br>[packages/angular/src/app/app.component.spec.ts](../../../../sources/naver__cfcs/packages/angular/src/app/app.component.spec.ts) |
| CI workflows | 0 | not obvious |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | CI workflow path not obvious; container/deploy path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `packages/vue3/src/index.ts`, `packages/vue2/src/index.ts`, `packages/svelte/src/index.ts`.
2. Trace execution through entrypoints: `packages/vue3/src/index.ts`, `packages/vue2/src/index.ts`, `packages/svelte/src/index.ts`.
3. Map agent/tool runtime through: `packages/core/src/reactive/hooks.ts`.
4. Inspect retrieval/memory/indexing through: `packages/vue3/src/index.ts`, `packages/vue3/src/reactive/index.ts`, `packages/vue2/src/index.ts`.
5. Verify behavior through test/eval files: `packages/core/tsconfig.test.json`, `packages/core/test/unit/computed.spec.ts`, `packages/core/test/manual/index.html`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 Write once, create framework components that supports React, Vue, Svelte, and more.. 핵심 구조 신호는 TypeScript, package.json, README.md, LICENSE, ci, docs이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, needs deeper structural scan입니다.
