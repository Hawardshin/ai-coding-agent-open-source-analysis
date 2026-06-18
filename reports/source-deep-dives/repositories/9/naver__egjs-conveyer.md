# naver/egjs-conveyer Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Conveyer adds Drag gestures to your Native Scroll.

## 요약

- 조사 단위: `sources/naver__egjs-conveyer` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 765 files, 139 directories, depth score 108, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 retrieval=packages/vue2-conveyer/src/index.ts, packages/vue2-conveyer/public/index.html, packages/vue2-conveyer/demo/index.ts이고, 의존성 단서는 react, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 knowledge/RAG pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | naver/egjs-conveyer |
| Topic | LLM Wiki, RAG, and Knowledge / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | TypeScript |
| Stars | 126 |
| Forks | 8 |
| License | MIT |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/naver__egjs-conveyer](../../../../sources/naver__egjs-conveyer) |
| Existing report | [reports/korea-trending/repositories/naver__egjs-conveyer.md](../../../korea-trending/repositories/naver__egjs-conveyer.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 765 / 139 |
| Max observed depth | 7 |
| Top directories | .github, config, packages |
| Top extensions | .txt: 331, .mdx: 180, .ts: 47, .json: 42, .svg: 33, .tsx: 26, .md: 20, (none): 20, .js: 14, .png: 13, .css: 12, .html: 12 |
| Source patterns | monorepo/workspace, cli-first, api/server, retrieval/vector path, spec/docs-driven, eval/test harness, ui/extension surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| packages/docs | packages workspace | 37 |
| packages/conveyer | packages workspace | 20 |
| packages/ngx-conveyer | packages workspace | 16 |
| packages/react-conveyer | packages workspace | 13 |
| packages/svelte-conveyer | packages workspace | 7 |
| packages/vue-conveyer | packages workspace | 7 |
| packages/vue2-conveyer | packages workspace | 7 |
| .github | ci surface | 1 |
| config | top-level component | 1 |
| packages | source boundary | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| build | package.json | update-angular-consts | npm run build --prefix packages/conveyer && node ./config/update-type-consts.js |
| build | package.json | packages | npm run packages:update && npm run packages:build && npm run packages:publish |
| build | package.json | packages:update | release-helper version |
| build | package.json | packages:build | pnpm --filter=!@egjs/ngx-conveyer --filter=!docs -r run build |
| build | package.json | packages:publish | release-helper publish --ignore @egjs/ngx-conveyer --commit 'chore: update packages versions' |
| quality | package.json | changelog | lerna-helper changelog --type all --base @egjs/conveyer |
| build | package.json | docs:build | jsdoc-to-mdx -c ./jsdoc-to-mdx.json |
| utility | package.json | docs:version | node ./config/docs-version-up |
| build | package.json | demo:build | npm run docs:version && npm run build --prefix packages/docs |
| build | package.json | demo:deploy | release-helper deploy --base @egjs/conveyer --dest demo --remote origin |
| build | package.json | release | release-helper release --base @egjs/conveyer --remote upstream --branch main |
| utility | package.json | update:cfcs | cfcs lerna update |


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
| retrieval | [packages/vue2-conveyer/src/index.ts](../../../../sources/naver__egjs-conveyer/packages/vue2-conveyer/src/index.ts) | retrieval signal |
| retrieval | [packages/vue2-conveyer/public/index.html](../../../../sources/naver__egjs-conveyer/packages/vue2-conveyer/public/index.html) | retrieval signal |
| retrieval | [packages/vue2-conveyer/demo/index.ts](../../../../sources/naver__egjs-conveyer/packages/vue2-conveyer/demo/index.ts) | retrieval signal |
| retrieval | [packages/vue-conveyer/src/vue-conveyer/index.ts](../../../../sources/naver__egjs-conveyer/packages/vue-conveyer/src/vue-conveyer/index.ts) | retrieval signal |
| entrypoints | [packages/vue-conveyer/src/App.vue](../../../../sources/naver__egjs-conveyer/packages/vue-conveyer/src/App.vue) | entrypoints signal |
| entrypoints | [packages/vue-conveyer/src/main.ts](../../../../sources/naver__egjs-conveyer/packages/vue-conveyer/src/main.ts) | entrypoints signal |
| entrypoints | [packages/svelte-conveyer/src/App.svelte](../../../../sources/naver__egjs-conveyer/packages/svelte-conveyer/src/App.svelte) | entrypoints signal |
| docs | [README.md](../../../../sources/naver__egjs-conveyer/README.md) | docs signal |
| docs | [packages/vue2-conveyer/README.md](../../../../sources/naver__egjs-conveyer/packages/vue2-conveyer/README.md) | docs signal |
| docs | [packages/vue-conveyer/README.md](../../../../sources/naver__egjs-conveyer/packages/vue-conveyer/README.md) | docs signal |
| docs | [packages/svelte-conveyer/README.md](../../../../sources/naver__egjs-conveyer/packages/svelte-conveyer/README.md) | docs signal |
| eval | [packages/react-conveyer/src/App.test.tsx](../../../../sources/naver__egjs-conveyer/packages/react-conveyer/src/App.test.tsx) | eval signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 16 | [packages/vue2-conveyer/src/index.ts](../../../../sources/naver__egjs-conveyer/packages/vue2-conveyer/src/index.ts)<br>[packages/vue-conveyer/src/App.vue](../../../../sources/naver__egjs-conveyer/packages/vue-conveyer/src/App.vue)<br>[packages/vue-conveyer/src/main.ts](../../../../sources/naver__egjs-conveyer/packages/vue-conveyer/src/main.ts)<br>[packages/svelte-conveyer/src/App.svelte](../../../../sources/naver__egjs-conveyer/packages/svelte-conveyer/src/App.svelte)<br>[packages/svelte-conveyer/src/main.js](../../../../sources/naver__egjs-conveyer/packages/svelte-conveyer/src/main.js)<br>[packages/react-conveyer/src/App.css](../../../../sources/naver__egjs-conveyer/packages/react-conveyer/src/App.css)<br>[packages/react-conveyer/src/App.test.tsx](../../../../sources/naver__egjs-conveyer/packages/react-conveyer/src/App.test.tsx)<br>[packages/react-conveyer/src/App.tsx](../../../../sources/naver__egjs-conveyer/packages/react-conveyer/src/App.tsx) |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 18 | [packages/vue2-conveyer/src/index.ts](../../../../sources/naver__egjs-conveyer/packages/vue2-conveyer/src/index.ts)<br>[packages/vue2-conveyer/public/index.html](../../../../sources/naver__egjs-conveyer/packages/vue2-conveyer/public/index.html)<br>[packages/vue2-conveyer/demo/index.ts](../../../../sources/naver__egjs-conveyer/packages/vue2-conveyer/demo/index.ts)<br>[packages/vue-conveyer/src/vue-conveyer/index.ts](../../../../sources/naver__egjs-conveyer/packages/vue-conveyer/src/vue-conveyer/index.ts)<br>[packages/vue-conveyer/public/index.html](../../../../sources/naver__egjs-conveyer/packages/vue-conveyer/public/index.html)<br>[packages/svelte-conveyer/src/svelte-conveyer/index.ts](../../../../sources/naver__egjs-conveyer/packages/svelte-conveyer/src/svelte-conveyer/index.ts)<br>[packages/svelte-conveyer/public/index.html](../../../../sources/naver__egjs-conveyer/packages/svelte-conveyer/public/index.html)<br>[packages/react-conveyer/src/index.css](../../../../sources/naver__egjs-conveyer/packages/react-conveyer/src/index.css) |
| spec | 4 | [packages/ngx-conveyer/tsconfig.spec.json](../../../../sources/naver__egjs-conveyer/packages/ngx-conveyer/tsconfig.spec.json)<br>[packages/ngx-conveyer/src/app/app.component.spec.ts](../../../../sources/naver__egjs-conveyer/packages/ngx-conveyer/src/app/app.component.spec.ts)<br>[packages/ngx-conveyer/projects/ngx-conveyer/tsconfig.spec.json](../../../../sources/naver__egjs-conveyer/packages/ngx-conveyer/projects/ngx-conveyer/tsconfig.spec.json)<br>[packages/conveyer/test/unit/Conveyer.spec.ts](../../../../sources/naver__egjs-conveyer/packages/conveyer/test/unit/Conveyer.spec.ts) |
| eval | 16 | [packages/react-conveyer/src/App.test.tsx](../../../../sources/naver__egjs-conveyer/packages/react-conveyer/src/App.test.tsx)<br>[packages/ngx-conveyer/tsconfig.spec.json](../../../../sources/naver__egjs-conveyer/packages/ngx-conveyer/tsconfig.spec.json)<br>[packages/ngx-conveyer/src/test.ts](../../../../sources/naver__egjs-conveyer/packages/ngx-conveyer/src/test.ts)<br>[packages/ngx-conveyer/src/app/app.component.spec.ts](../../../../sources/naver__egjs-conveyer/packages/ngx-conveyer/src/app/app.component.spec.ts)<br>[packages/ngx-conveyer/projects/ngx-conveyer/tsconfig.spec.json](../../../../sources/naver__egjs-conveyer/packages/ngx-conveyer/projects/ngx-conveyer/tsconfig.spec.json)<br>[packages/ngx-conveyer/projects/ngx-conveyer/src/test.ts](../../../../sources/naver__egjs-conveyer/packages/ngx-conveyer/projects/ngx-conveyer/src/test.ts)<br>[packages/conveyer/tsconfig.test.json](../../../../sources/naver__egjs-conveyer/packages/conveyer/tsconfig.test.json)<br>[packages/conveyer/test/unit/Conveyer.spec.ts](../../../../sources/naver__egjs-conveyer/packages/conveyer/test/unit/Conveyer.spec.ts) |
| security | 0 | not obvious |
| ci | 1 | [.github/workflows/run-e2e.yml](../../../../sources/naver__egjs-conveyer/.github/workflows/run-e2e.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 612 | [README.md](../../../../sources/naver__egjs-conveyer/README.md)<br>[packages/vue2-conveyer/README.md](../../../../sources/naver__egjs-conveyer/packages/vue2-conveyer/README.md)<br>[packages/vue-conveyer/README.md](../../../../sources/naver__egjs-conveyer/packages/vue-conveyer/README.md)<br>[packages/svelte-conveyer/README.md](../../../../sources/naver__egjs-conveyer/packages/svelte-conveyer/README.md)<br>[packages/react-conveyer/README.md](../../../../sources/naver__egjs-conveyer/packages/react-conveyer/README.md)<br>[packages/ngx-conveyer/README.md](../../../../sources/naver__egjs-conveyer/packages/ngx-conveyer/README.md)<br>[packages/ngx-conveyer/projects/ngx-conveyer/README.md](../../../../sources/naver__egjs-conveyer/packages/ngx-conveyer/projects/ngx-conveyer/README.md)<br>[packages/docs/.gitignore](../../../../sources/naver__egjs-conveyer/packages/docs/.gitignore) |
| config | 16 | [package.json](../../../../sources/naver__egjs-conveyer/package.json)<br>[pnpm-workspace.yaml](../../../../sources/naver__egjs-conveyer/pnpm-workspace.yaml)<br>[packages/vue2-conveyer/package.json](../../../../sources/naver__egjs-conveyer/packages/vue2-conveyer/package.json)<br>[packages/vue2-conveyer/tsconfig.json](../../../../sources/naver__egjs-conveyer/packages/vue2-conveyer/tsconfig.json)<br>[packages/vue-conveyer/package.json](../../../../sources/naver__egjs-conveyer/packages/vue-conveyer/package.json)<br>[packages/vue-conveyer/tsconfig.json](../../../../sources/naver__egjs-conveyer/packages/vue-conveyer/tsconfig.json)<br>[packages/svelte-conveyer/package.json](../../../../sources/naver__egjs-conveyer/packages/svelte-conveyer/package.json)<br>[packages/svelte-conveyer/tsconfig.json](../../../../sources/naver__egjs-conveyer/packages/svelte-conveyer/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 16 | [packages/react-conveyer/src/App.test.tsx](../../../../sources/naver__egjs-conveyer/packages/react-conveyer/src/App.test.tsx)<br>[packages/ngx-conveyer/tsconfig.spec.json](../../../../sources/naver__egjs-conveyer/packages/ngx-conveyer/tsconfig.spec.json)<br>[packages/ngx-conveyer/src/test.ts](../../../../sources/naver__egjs-conveyer/packages/ngx-conveyer/src/test.ts)<br>[packages/ngx-conveyer/src/app/app.component.spec.ts](../../../../sources/naver__egjs-conveyer/packages/ngx-conveyer/src/app/app.component.spec.ts)<br>[packages/ngx-conveyer/projects/ngx-conveyer/tsconfig.spec.json](../../../../sources/naver__egjs-conveyer/packages/ngx-conveyer/projects/ngx-conveyer/tsconfig.spec.json)<br>[packages/ngx-conveyer/projects/ngx-conveyer/src/test.ts](../../../../sources/naver__egjs-conveyer/packages/ngx-conveyer/projects/ngx-conveyer/src/test.ts) |
| CI workflows | 1 | [.github/workflows/run-e2e.yml](../../../../sources/naver__egjs-conveyer/.github/workflows/run-e2e.yml) |
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

1. Start from key references: `packages/vue2-conveyer/src/index.ts`, `packages/vue2-conveyer/public/index.html`, `packages/vue2-conveyer/demo/index.ts`.
2. Trace execution through entrypoints: `packages/vue2-conveyer/src/index.ts`, `packages/vue-conveyer/src/App.vue`, `packages/vue-conveyer/src/main.ts`.
3. Inspect retrieval/memory/indexing through: `packages/vue2-conveyer/src/index.ts`, `packages/vue2-conveyer/public/index.html`, `packages/vue2-conveyer/demo/index.ts`.
4. Verify behavior through test/eval files: `packages/react-conveyer/src/App.test.tsx`, `packages/ngx-conveyer/tsconfig.spec.json`, `packages/ngx-conveyer/src/test.ts`.

## Existing Repository Insight

LLM 위키/RAG/지식베이스 관점에서 Conveyer adds Drag gestures to your Native Scroll.. 핵심 구조 신호는 TypeScript, package.json, README.md, LICENSE, react, ci이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 knowledge/RAG pattern reference이고, 후속 확인 포인트는 test signal not obvious, needs deeper structural scan입니다.
