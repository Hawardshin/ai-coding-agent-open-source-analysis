# toss/suspensive Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

All-in-one for React Suspense — ErrorBoundary with shouldCatch, clientOnly to skip SSR for a boundary, Delay, and more

## 요약

- 조사 단위: `sources/toss__suspensive` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 545 files, 125 directories, depth score 113, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 entrypoints=packages/react-query-5/src/index.ts, packages/react-query-4/src/index.ts, packages/react-query/src/index.ts이고, 의존성 단서는 react, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | toss/suspensive |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | TypeScript |
| Stars | 1027 |
| Forks | 96 |
| License | MIT |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/toss__suspensive](../../../../sources/toss__suspensive) |
| Existing report | [reports/korea-trending/repositories/toss__suspensive.md](../../../korea-trending/repositories/toss__suspensive.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 545 / 125 |
| Max observed depth | 9 |
| Top directories | .changeset, .github, .husky, assets, configs, docs, examples, packages |
| Top extensions | .tsx: 159, .ts: 130, .mdx: 108, .json: 33, .md: 18, .png: 17, (none): 17, .mjs: 16, .yml: 13, .svg: 10, .jsx: 8, .css: 5 |
| Source patterns | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, ui/extension surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 42 |
| packages/react-query | packages workspace | 35 |
| packages/react | packages workspace | 29 |
| packages/react-query-4 | packages workspace | 25 |
| packages/react-query-5 | packages workspace | 20 |
| packages/codemods | packages workspace | 11 |
| packages/jotai | packages workspace | 10 |
| examples/vite-react-18-suspense-prerender-siblings-problem | examples workspace | 8 |
| examples/visualization | examples workspace | 4 |
| packages/next | packages workspace | 4 |
| examples/next-streaming-react-query | examples workspace | 3 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| configs | top-level component | 1 |
| examples | top-level component | 1 |
| packages | source boundary | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | package.json | blc:suspensive.org | pnpm blc https://suspensive.org --ro --exclude='https://x.com/*' --exclude='https://codesandbox.io/api/v1/sandboxes/define?undefined&environment=create-react-app' |
| build | package.json | build | turbo run build |
| utility | package.json | changeset | changeset |
| build | package.json | changeset:publish | pnpm run build && changeset publish |
| utility | package.json | changeset:version | changeset version && pnpm install --lockfile-only |
| test | package.json | ci:all | pnpm run ci:eslint && pnpm run ci:sherif && pnpm run ci:type && pnpm run ci:test && pnpm run ci:knip && pnpm run build |
| quality | package.json | ci:eslint | turbo run ci:eslint |
| build | package.json | ci:knip | pnpm run build && pnpm knip |
| utility | package.json | ci:sherif | sherif --ignore-package "./examples/*" --ignore-package "./docs/*" --ignore-dependency "@tanstack/react-query" |
| test | package.json | ci:test | turbo run ci:test |
| quality | package.json | ci:type | turbo run ci:type |
| utility | package.json | clean | turbo run clean |
| serve-dev | package.json | dev | turbo watch dev |
| quality | package.json | format | oxfmt --write "**/*.{ts,tsx,md}" |
| build | package.json | graph | rimraf ./graph && mkdir graph && turbo run build --graph=graph/index.html |
| quality | package.json | packlint | packlint sort -R |
| utility | package.json | preinstall | corepack enable |
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
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| entrypoints | [packages/react-query-5/src/index.ts](../../../../sources/toss__suspensive/packages/react-query-5/src/index.ts) | entrypoints signal |
| entrypoints | [packages/react-query-4/src/index.ts](../../../../sources/toss__suspensive/packages/react-query-4/src/index.ts) | entrypoints signal |
| entrypoints | [packages/react-query/src/index.ts](../../../../sources/toss__suspensive/packages/react-query/src/index.ts) | entrypoints signal |
| entrypoints | [packages/react-query/src/bin/cli.spec.ts](../../../../sources/toss__suspensive/packages/react-query/src/bin/cli.spec.ts) | entrypoints signal |
| config | [package.json](../../../../sources/toss__suspensive/package.json) | config signal |
| config | [pnpm-workspace.yaml](../../../../sources/toss__suspensive/pnpm-workspace.yaml) | config signal |
| config | [turbo.json](../../../../sources/toss__suspensive/turbo.json) | config signal |
| config | [packages/react-query-5/package.json](../../../../sources/toss__suspensive/packages/react-query-5/package.json) | config signal |
| docs | [README.md](../../../../sources/toss__suspensive/README.md) | docs signal |
| docs | [packages/react-query/README.md](../../../../sources/toss__suspensive/packages/react-query/README.md) | docs signal |
| docs | [packages/react/README.md](../../../../sources/toss__suspensive/packages/react/README.md) | docs signal |
| docs | [packages/jotai/README.md](../../../../sources/toss__suspensive/packages/jotai/README.md) | docs signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 31 | [packages/react-query-5/src/index.ts](../../../../sources/toss__suspensive/packages/react-query-5/src/index.ts)<br>[packages/react-query-4/src/index.ts](../../../../sources/toss__suspensive/packages/react-query-4/src/index.ts)<br>[packages/react-query/src/index.ts](../../../../sources/toss__suspensive/packages/react-query/src/index.ts)<br>[packages/react-query/src/bin/cli.spec.ts](../../../../sources/toss__suspensive/packages/react-query/src/bin/cli.spec.ts)<br>[packages/react-query/src/bin/cli.ts](../../../../sources/toss__suspensive/packages/react-query/src/bin/cli.ts)<br>[packages/react-query/src/bin/postinstall.spec.ts](../../../../sources/toss__suspensive/packages/react-query/src/bin/postinstall.spec.ts)<br>[packages/react-query/src/bin/postinstall.ts](../../../../sources/toss__suspensive/packages/react-query/src/bin/postinstall.ts)<br>[packages/react-query/src/bin/utils/commands.spec.ts](../../../../sources/toss__suspensive/packages/react-query/src/bin/utils/commands.spec.ts) |
| agentRuntime | 6 | [packages/react/src/hooks/useIsChanged.spec.ts](../../../../sources/toss__suspensive/packages/react/src/hooks/useIsChanged.spec.ts)<br>[packages/react/src/hooks/useIsChanged.ts](../../../../sources/toss__suspensive/packages/react/src/hooks/useIsChanged.ts)<br>[packages/react/src/hooks/usePrevious.spec.ts](../../../../sources/toss__suspensive/packages/react/src/hooks/usePrevious.spec.ts)<br>[packages/react/src/hooks/usePrevious.ts](../../../../sources/toss__suspensive/packages/react/src/hooks/usePrevious.ts)<br>[packages/react/src/hooks/useTimeout.spec.tsx](../../../../sources/toss__suspensive/packages/react/src/hooks/useTimeout.spec.tsx)<br>[packages/react/src/hooks/useTimeout.ts](../../../../sources/toss__suspensive/packages/react/src/hooks/useTimeout.ts) |
| mcp | 0 | not obvious |
| retrieval | 23 | [packages/react-query-5/src/index.ts](../../../../sources/toss__suspensive/packages/react-query-5/src/index.ts)<br>[packages/react-query-5/src/test-utils/index.ts](../../../../sources/toss__suspensive/packages/react-query-5/src/test-utils/index.ts)<br>[packages/react-query-4/src/index.ts](../../../../sources/toss__suspensive/packages/react-query-4/src/index.ts)<br>[packages/react-query-4/src/test-utils/index.ts](../../../../sources/toss__suspensive/packages/react-query-4/src/test-utils/index.ts)<br>[packages/react-query/src/index.ts](../../../../sources/toss__suspensive/packages/react-query/src/index.ts)<br>[packages/react/src/index.ts](../../../../sources/toss__suspensive/packages/react/src/index.ts)<br>[packages/react/src/test-utils/index.tsx](../../../../sources/toss__suspensive/packages/react/src/test-utils/index.tsx)<br>[packages/next/src/index.ts](../../../../sources/toss__suspensive/packages/next/src/index.ts) |
| spec | 33 | [packages/react-query-5/src/createGetQueryClient.spec.tsx](../../../../sources/toss__suspensive/packages/react-query-5/src/createGetQueryClient.spec.tsx)<br>[packages/react-query-5/src/QueriesHydration.spec.tsx](../../../../sources/toss__suspensive/packages/react-query-5/src/QueriesHydration.spec.tsx)<br>[packages/react-query-4/src/createGetQueryClient.spec.tsx](../../../../sources/toss__suspensive/packages/react-query-4/src/createGetQueryClient.spec.tsx)<br>[packages/react-query-4/src/IsFetching.spec.tsx](../../../../sources/toss__suspensive/packages/react-query-4/src/IsFetching.spec.tsx)<br>[packages/react-query-4/src/QueriesHydration.spec.tsx](../../../../sources/toss__suspensive/packages/react-query-4/src/QueriesHydration.spec.tsx)<br>[packages/react-query/src/bin/cli.spec.ts](../../../../sources/toss__suspensive/packages/react-query/src/bin/cli.spec.ts)<br>[packages/react-query/src/bin/postinstall.spec.ts](../../../../sources/toss__suspensive/packages/react-query/src/bin/postinstall.spec.ts)<br>[packages/react-query/src/bin/utils/commands.spec.ts](../../../../sources/toss__suspensive/packages/react-query/src/bin/utils/commands.spec.ts) |
| eval | 73 | [packages/react-query-5/src/createGetQueryClient.spec.tsx](../../../../sources/toss__suspensive/packages/react-query-5/src/createGetQueryClient.spec.tsx)<br>[packages/react-query-5/src/createGetQueryClient.test-d.tsx](../../../../sources/toss__suspensive/packages/react-query-5/src/createGetQueryClient.test-d.tsx)<br>[packages/react-query-5/src/IsFetching.test-d.tsx](../../../../sources/toss__suspensive/packages/react-query-5/src/IsFetching.test-d.tsx)<br>[packages/react-query-5/src/Mutation.test-d.tsx](../../../../sources/toss__suspensive/packages/react-query-5/src/Mutation.test-d.tsx)<br>[packages/react-query-5/src/PrefetchInfiniteQuery.test-d.tsx](../../../../sources/toss__suspensive/packages/react-query-5/src/PrefetchInfiniteQuery.test-d.tsx)<br>[packages/react-query-5/src/PrefetchQuery.test-d.tsx](../../../../sources/toss__suspensive/packages/react-query-5/src/PrefetchQuery.test-d.tsx)<br>[packages/react-query-5/src/QueriesHydration.spec.tsx](../../../../sources/toss__suspensive/packages/react-query-5/src/QueriesHydration.spec.tsx)<br>[packages/react-query-5/src/QueriesHydration.test-d.tsx](../../../../sources/toss__suspensive/packages/react-query-5/src/QueriesHydration.test-d.tsx) |
| security | 0 | not obvious |
| ci | 7 | [.github/workflows/autofix.yml](../../../../sources/toss__suspensive/.github/workflows/autofix.yml)<br>[.github/workflows/broken-link-checker.yml](../../../../sources/toss__suspensive/.github/workflows/broken-link-checker.yml)<br>[.github/workflows/ci.yml](../../../../sources/toss__suspensive/.github/workflows/ci.yml)<br>[.github/workflows/graph.yml](../../../../sources/toss__suspensive/.github/workflows/graph.yml)<br>[.github/workflows/knip.yml](../../../../sources/toss__suspensive/.github/workflows/knip.yml)<br>[.github/workflows/labeler.yml](../../../../sources/toss__suspensive/.github/workflows/labeler.yml)<br>[.github/workflows/release.yml](../../../../sources/toss__suspensive/.github/workflows/release.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 210 | [README.md](../../../../sources/toss__suspensive/README.md)<br>[packages/react-query/README.md](../../../../sources/toss__suspensive/packages/react-query/README.md)<br>[packages/react/README.md](../../../../sources/toss__suspensive/packages/react/README.md)<br>[packages/jotai/README.md](../../../../sources/toss__suspensive/packages/jotai/README.md)<br>[packages/codemods/README.md](../../../../sources/toss__suspensive/packages/codemods/README.md)<br>[docs/suspensive.org/.gitignore](../../../../sources/toss__suspensive/docs/suspensive.org/.gitignore)<br>[docs/suspensive.org/eslint.config.mjs](../../../../sources/toss__suspensive/docs/suspensive.org/eslint.config.mjs)<br>[docs/suspensive.org/next.config.mjs](../../../../sources/toss__suspensive/docs/suspensive.org/next.config.mjs) |
| config | 29 | [package.json](../../../../sources/toss__suspensive/package.json)<br>[pnpm-workspace.yaml](../../../../sources/toss__suspensive/pnpm-workspace.yaml)<br>[turbo.json](../../../../sources/toss__suspensive/turbo.json)<br>[packages/react-query-5/package.json](../../../../sources/toss__suspensive/packages/react-query-5/package.json)<br>[packages/react-query-5/tsconfig.json](../../../../sources/toss__suspensive/packages/react-query-5/tsconfig.json)<br>[packages/react-query-4/package.json](../../../../sources/toss__suspensive/packages/react-query-4/package.json)<br>[packages/react-query-4/tsconfig.json](../../../../sources/toss__suspensive/packages/react-query-4/tsconfig.json)<br>[packages/react-query/package.json](../../../../sources/toss__suspensive/packages/react-query/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 73 | [packages/react-query-5/src/createGetQueryClient.spec.tsx](../../../../sources/toss__suspensive/packages/react-query-5/src/createGetQueryClient.spec.tsx)<br>[packages/react-query-5/src/createGetQueryClient.test-d.tsx](../../../../sources/toss__suspensive/packages/react-query-5/src/createGetQueryClient.test-d.tsx)<br>[packages/react-query-5/src/IsFetching.test-d.tsx](../../../../sources/toss__suspensive/packages/react-query-5/src/IsFetching.test-d.tsx)<br>[packages/react-query-5/src/Mutation.test-d.tsx](../../../../sources/toss__suspensive/packages/react-query-5/src/Mutation.test-d.tsx)<br>[packages/react-query-5/src/PrefetchInfiniteQuery.test-d.tsx](../../../../sources/toss__suspensive/packages/react-query-5/src/PrefetchInfiniteQuery.test-d.tsx)<br>[packages/react-query-5/src/PrefetchQuery.test-d.tsx](../../../../sources/toss__suspensive/packages/react-query-5/src/PrefetchQuery.test-d.tsx) |
| CI workflows | 7 | [.github/workflows/autofix.yml](../../../../sources/toss__suspensive/.github/workflows/autofix.yml)<br>[.github/workflows/broken-link-checker.yml](../../../../sources/toss__suspensive/.github/workflows/broken-link-checker.yml)<br>[.github/workflows/ci.yml](../../../../sources/toss__suspensive/.github/workflows/ci.yml)<br>[.github/workflows/graph.yml](../../../../sources/toss__suspensive/.github/workflows/graph.yml)<br>[.github/workflows/knip.yml](../../../../sources/toss__suspensive/.github/workflows/knip.yml)<br>[.github/workflows/labeler.yml](../../../../sources/toss__suspensive/.github/workflows/labeler.yml) |
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

1. Start from key references: `packages/react-query-5/src/index.ts`, `packages/react-query-4/src/index.ts`, `packages/react-query/src/index.ts`.
2. Trace execution through entrypoints: `packages/react-query-5/src/index.ts`, `packages/react-query-4/src/index.ts`, `packages/react-query/src/index.ts`.
3. Map agent/tool runtime through: `packages/react/src/hooks/useIsChanged.spec.ts`, `packages/react/src/hooks/useIsChanged.ts`, `packages/react/src/hooks/usePrevious.spec.ts`.
4. Inspect retrieval/memory/indexing through: `packages/react-query-5/src/index.ts`, `packages/react-query-5/src/test-utils/index.ts`, `packages/react-query-4/src/index.ts`.
5. Verify behavior through test/eval files: `packages/react-query-5/src/createGetQueryClient.spec.tsx`, `packages/react-query-5/src/createGetQueryClient.test-d.tsx`, `packages/react-query-5/src/IsFetching.test-d.tsx`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 All in one for React Suspense — ErrorBoundary with shouldCatch, clientOnly to skip SSR for a boundary, Delay, and more. 핵심 구조 신호는 TypeScript, package.json, README.md, LICENSE, react, ci이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, needs deeper structural scan입니다.
