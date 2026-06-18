# naver/egjs-view3d Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Fast & customizable 3D model viewer for everyone

## 요약

- 조사 단위: `sources/naver__egjs-view3d` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 653 files, 123 directories, depth score 108, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 monorepo/workspace, cli-first, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 entrypoints=packages/vue3-view3d/src/index.ts, packages/vue3-view3d/src/index.umd.ts, packages/vue3-view3d/demo/main.ts이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | naver/egjs-view3d |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | TypeScript |
| Stars | 223 |
| Forks | 34 |
| License | MIT |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/naver__egjs-view3d](../../../../sources/naver__egjs-view3d) |
| Existing report | [reports/korea-trending/repositories/naver__egjs-view3d.md](../../../korea-trending/repositories/naver__egjs-view3d.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 653 / 123 |
| Max observed depth | 8 |
| Top directories | .github, config, demo, packages |
| Top extensions | .ts: 176, .mdx: 99, .json: 53, .tsx: 46, .js: 31, .svg: 31, (none): 24, .glb: 21, .md: 21, .webp: 21, .css: 18, .jpeg: 18 |
| Source patterns | monorepo/workspace, cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| packages/view3d | packages workspace | 99 |
| packages/ngx-view3d | packages workspace | 9 |
| packages/react-view3d | packages workspace | 9 |
| packages/svelte-view3d | packages workspace | 9 |
| packages/vue-view3d | packages workspace | 9 |
| packages/vue3-view3d | packages workspace | 8 |
| packages/view3d-optimizer | packages workspace | 3 |
| .github | ci surface | 1 |
| config | top-level component | 1 |
| demo | top-level component | 1 |
| packages | source boundary | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| quality | package.json | lint | eslint 'packages/**/!(demo)/src/*.ts' |
| build | package.json | packages | npm run packages:update && npm run packages:build && npm run packages:publish |
| utility | package.json | packages:update | lerna-helper version |
| build | package.json | packages:build | npm run build --prefix packages/view3d && lerna run build --ignore @egjs/view3d --stream |
| utility | package.json | packages:publish | lerna-helper publish --commit 'chore: update packages versions' |
| quality | package.json | changelog | lerna-helper changelog --type all --base @egjs/view3d |
| build | package.json | docs:build | jsdoc-to-mdx -c ./jsdoc-to-mdx.json |
| build | package.json | demo:build | run-s demo:copy-lib docs:build demo:build-docusaurus |
| build | package.json | demo:copy-lib | npm run build --prefix packages/view3d && npm run demo:copy-lib --prefix packages/view3d |
| build | package.json | demo:build-docusaurus | npm run build --prefix demo |
| build | package.json | demo:deploy | lerna-helper deploy --base @egjs/view3d --src demo/build/ --remote upstream |
| build | package.json | demo:deploy-origin | lerna-helper deploy --base @egjs/view3d --src demo/build/ --remote origin |
| build | package.json | release | lerna-helper release --base @egjs/view3d --remote upstream --branch main |
| quality | package.json | bootstrap | lerna bootstrap --hoist three --hoist @types/three |


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
| entrypoints | [packages/vue3-view3d/src/index.ts](../../../../sources/naver__egjs-view3d/packages/vue3-view3d/src/index.ts) | entrypoints signal |
| entrypoints | [packages/vue3-view3d/src/index.umd.ts](../../../../sources/naver__egjs-view3d/packages/vue3-view3d/src/index.umd.ts) | entrypoints signal |
| entrypoints | [packages/vue3-view3d/demo/main.ts](../../../../sources/naver__egjs-view3d/packages/vue3-view3d/demo/main.ts) | entrypoints signal |
| entrypoints | [packages/vue-view3d/src/index.ts](../../../../sources/naver__egjs-view3d/packages/vue-view3d/src/index.ts) | entrypoints signal |
| config | [package.json](../../../../sources/naver__egjs-view3d/package.json) | config signal |
| config | [packages/vue3-view3d/package.json](../../../../sources/naver__egjs-view3d/packages/vue3-view3d/package.json) | config signal |
| config | [packages/vue3-view3d/tsconfig.json](../../../../sources/naver__egjs-view3d/packages/vue3-view3d/tsconfig.json) | config signal |
| config | [packages/vue-view3d/package.json](../../../../sources/naver__egjs-view3d/packages/vue-view3d/package.json) | config signal |
| docs | [README.md](../../../../sources/naver__egjs-view3d/README.md) | docs signal |
| docs | [packages/vue3-view3d/README.md](../../../../sources/naver__egjs-view3d/packages/vue3-view3d/README.md) | docs signal |
| docs | [packages/vue-view3d/README.md](../../../../sources/naver__egjs-view3d/packages/vue-view3d/README.md) | docs signal |
| docs | [packages/view3d-optimizer/README.md](../../../../sources/naver__egjs-view3d/packages/view3d-optimizer/README.md) | docs signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 15 | [packages/vue3-view3d/src/index.ts](../../../../sources/naver__egjs-view3d/packages/vue3-view3d/src/index.ts)<br>[packages/vue3-view3d/src/index.umd.ts](../../../../sources/naver__egjs-view3d/packages/vue3-view3d/src/index.umd.ts)<br>[packages/vue3-view3d/demo/main.ts](../../../../sources/naver__egjs-view3d/packages/vue3-view3d/demo/main.ts)<br>[packages/vue-view3d/src/index.ts](../../../../sources/naver__egjs-view3d/packages/vue-view3d/src/index.ts)<br>[packages/vue-view3d/src/index.umd.ts](../../../../sources/naver__egjs-view3d/packages/vue-view3d/src/index.umd.ts)<br>[packages/vue-view3d/demo/main.ts](../../../../sources/naver__egjs-view3d/packages/vue-view3d/demo/main.ts)<br>[packages/view3d/src/index.ts](../../../../sources/naver__egjs-view3d/packages/view3d/src/index.ts)<br>[packages/view3d/src/index.umd.ts](../../../../sources/naver__egjs-view3d/packages/view3d/src/index.umd.ts) |
| agentRuntime | 1 | [demo/src/components/playground/context.tsx](../../../../sources/naver__egjs-view3d/demo/src/components/playground/context.tsx) |
| mcp | 0 | not obvious |
| retrieval | 29 | [packages/vue3-view3d/src/index.ts](../../../../sources/naver__egjs-view3d/packages/vue3-view3d/src/index.ts)<br>[packages/vue3-view3d/src/index.umd.ts](../../../../sources/naver__egjs-view3d/packages/vue3-view3d/src/index.umd.ts)<br>[packages/vue-view3d/src/index.ts](../../../../sources/naver__egjs-view3d/packages/vue-view3d/src/index.ts)<br>[packages/vue-view3d/src/index.umd.ts](../../../../sources/naver__egjs-view3d/packages/vue-view3d/src/index.umd.ts)<br>[packages/vue-view3d/demo/index.html](../../../../sources/naver__egjs-view3d/packages/vue-view3d/demo/index.html)<br>[packages/view3d-optimizer/index.js](../../../../sources/naver__egjs-view3d/packages/view3d-optimizer/index.js)<br>[packages/view3d/test/manual/index.html](../../../../sources/naver__egjs-view3d/packages/view3d/test/manual/index.html)<br>[packages/view3d/test/manual/index.js](../../../../sources/naver__egjs-view3d/packages/view3d/test/manual/index.js) |
| spec | 39 | [packages/view3d/test/suite/utils.spec.ts](../../../../sources/naver__egjs-view3d/packages/view3d/test/suite/utils.spec.ts)<br>[packages/view3d/test/suite/View3D.spec.ts](../../../../sources/naver__egjs-view3d/packages/view3d/test/suite/View3D.spec.ts)<br>[packages/view3d/test/suite/xr/QuickLookSession.spec.ts](../../../../sources/naver__egjs-view3d/packages/view3d/test/suite/xr/QuickLookSession.spec.ts)<br>[packages/view3d/test/suite/xr/SceneViewerSession.spec.ts](../../../../sources/naver__egjs-view3d/packages/view3d/test/suite/xr/SceneViewerSession.spec.ts)<br>[packages/view3d/test/suite/xr/WebARSession.spec.ts](../../../../sources/naver__egjs-view3d/packages/view3d/test/suite/xr/WebARSession.spec.ts)<br>[packages/view3d/test/suite/xr/features/DOMOverlay.spec.ts](../../../../sources/naver__egjs-view3d/packages/view3d/test/suite/xr/features/DOMOverlay.spec.ts)<br>[packages/view3d/test/suite/xr/features/HitTest.spec.ts](../../../../sources/naver__egjs-view3d/packages/view3d/test/suite/xr/features/HitTest.spec.ts)<br>[packages/view3d/test/suite/plugin/ControlBar/AnimationProgressBar.spec.ts](../../../../sources/naver__egjs-view3d/packages/view3d/test/suite/plugin/ControlBar/AnimationProgressBar.spec.ts) |
| eval | 54 | [packages/view3d/test/.eslintrc.json](../../../../sources/naver__egjs-view3d/packages/view3d/test/.eslintrc.json)<br>[packages/view3d/test/.gitignore](../../../../sources/naver__egjs-view3d/packages/view3d/test/.gitignore)<br>[packages/view3d/test/cypress.json](../../../../sources/naver__egjs-view3d/packages/view3d/test/cypress.json)<br>[packages/view3d/test/package-lock.json](../../../../sources/naver__egjs-view3d/packages/view3d/test/package-lock.json)<br>[packages/view3d/test/package.json](../../../../sources/naver__egjs-view3d/packages/view3d/test/package.json)<br>[packages/view3d/test/setup.ts](../../../../sources/naver__egjs-view3d/packages/view3d/test/setup.ts)<br>[packages/view3d/test/test-utils.ts](../../../../sources/naver__egjs-view3d/packages/view3d/test/test-utils.ts)<br>[packages/view3d/test/tsconfig.json](../../../../sources/naver__egjs-view3d/packages/view3d/test/tsconfig.json) |
| security | 0 | not obvious |
| ci | 1 | [.github/workflows/run-test.yml](../../../../sources/naver__egjs-view3d/.github/workflows/run-test.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 103 | [README.md](../../../../sources/naver__egjs-view3d/README.md)<br>[packages/vue3-view3d/README.md](../../../../sources/naver__egjs-view3d/packages/vue3-view3d/README.md)<br>[packages/vue-view3d/README.md](../../../../sources/naver__egjs-view3d/packages/vue-view3d/README.md)<br>[packages/view3d-optimizer/README.md](../../../../sources/naver__egjs-view3d/packages/view3d-optimizer/README.md)<br>[packages/view3d/README.md](../../../../sources/naver__egjs-view3d/packages/view3d/README.md)<br>[packages/svelte-view3d/README.md](../../../../sources/naver__egjs-view3d/packages/svelte-view3d/README.md)<br>[packages/react-view3d/README.md](../../../../sources/naver__egjs-view3d/packages/react-view3d/README.md)<br>[packages/ngx-view3d/README.md](../../../../sources/naver__egjs-view3d/packages/ngx-view3d/README.md) |
| config | 19 | [package.json](../../../../sources/naver__egjs-view3d/package.json)<br>[packages/vue3-view3d/package.json](../../../../sources/naver__egjs-view3d/packages/vue3-view3d/package.json)<br>[packages/vue3-view3d/tsconfig.json](../../../../sources/naver__egjs-view3d/packages/vue3-view3d/tsconfig.json)<br>[packages/vue-view3d/package.json](../../../../sources/naver__egjs-view3d/packages/vue-view3d/package.json)<br>[packages/vue-view3d/tsconfig.json](../../../../sources/naver__egjs-view3d/packages/vue-view3d/tsconfig.json)<br>[packages/view3d-optimizer/package.json](../../../../sources/naver__egjs-view3d/packages/view3d-optimizer/package.json)<br>[packages/view3d/package.json](../../../../sources/naver__egjs-view3d/packages/view3d/package.json)<br>[packages/view3d/tsconfig.json](../../../../sources/naver__egjs-view3d/packages/view3d/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 54 | [packages/view3d/test/.eslintrc.json](../../../../sources/naver__egjs-view3d/packages/view3d/test/.eslintrc.json)<br>[packages/view3d/test/.gitignore](../../../../sources/naver__egjs-view3d/packages/view3d/test/.gitignore)<br>[packages/view3d/test/cypress.json](../../../../sources/naver__egjs-view3d/packages/view3d/test/cypress.json)<br>[packages/view3d/test/package-lock.json](../../../../sources/naver__egjs-view3d/packages/view3d/test/package-lock.json)<br>[packages/view3d/test/package.json](../../../../sources/naver__egjs-view3d/packages/view3d/test/package.json)<br>[packages/view3d/test/setup.ts](../../../../sources/naver__egjs-view3d/packages/view3d/test/setup.ts) |
| CI workflows | 1 | [.github/workflows/run-test.yml](../../../../sources/naver__egjs-view3d/.github/workflows/run-test.yml) |
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

1. Start from key references: `packages/vue3-view3d/src/index.ts`, `packages/vue3-view3d/src/index.umd.ts`, `packages/vue3-view3d/demo/main.ts`.
2. Trace execution through entrypoints: `packages/vue3-view3d/src/index.ts`, `packages/vue3-view3d/src/index.umd.ts`, `packages/vue3-view3d/demo/main.ts`.
3. Map agent/tool runtime through: `demo/src/components/playground/context.tsx`.
4. Inspect retrieval/memory/indexing through: `packages/vue3-view3d/src/index.ts`, `packages/vue3-view3d/src/index.umd.ts`, `packages/vue-view3d/src/index.ts`.
5. Verify behavior through test/eval files: `packages/view3d/test/.eslintrc.json`, `packages/view3d/test/.gitignore`, `packages/view3d/test/cypress.json`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 Fast & customizable 3D model viewer for everyone. 핵심 구조 신호는 TypeScript, package.json, README.md, LICENSE, ci, docs이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, needs deeper structural scan입니다.
