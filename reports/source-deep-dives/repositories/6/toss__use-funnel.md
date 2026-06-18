# toss/use-funnel Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

A powerful and safe step-by-step state management library at React

## 요약

- 조사 단위: `sources/toss__use-funnel` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 203 files, 54 directories, depth score 95, key references 8개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

보안/거버넌스/안전 관점에서 monorepo/workspace, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 ci=.github/workflows/autofix.yml, .github/workflows/release.yml이고, 의존성 단서는 react, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 8개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | toss/use-funnel |
| Topic | Security, Governance, and Safety / 보안/거버넌스/안전 |
| Region | korea |
| Language | TypeScript |
| Stars | 567 |
| Forks | 61 |
| License | MIT |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/toss__use-funnel](../../../../sources/toss__use-funnel) |
| Existing report | [reports/korea-trending/repositories/toss__use-funnel.md](../../../korea-trending/repositories/toss__use-funnel.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 203 / 54 |
| Max observed depth | 6 |
| Top directories | _templates, .changeset, .github, docs, examples, packages |
| Top extensions | .tsx: 37, .ts: 32, .mdx: 28, .json: 26, .md: 21, .js: 13, (none): 8, .png: 7, .t: 7, .mjs: 6, .yml: 5, .css: 3 |
| Source patterns | monorepo/workspace, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, ui/extension surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 41 |
| packages/next | packages workspace | 10 |
| packages/core | packages workspace | 9 |
| packages/browser | packages workspace | 7 |
| packages/react-navigation-native | packages workspace | 7 |
| packages/react-router | packages workspace | 7 |
| packages/react-router-dom | packages workspace | 7 |
| examples/nextjs-pages-router | examples workspace | 6 |
| examples/nextjs-app-router | examples workspace | 5 |
| _templates | top-level component | 1 |
| .github | ci surface | 1 |
| examples | top-level component | 1 |
| packages | source boundary | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | package.json | add:router | hygen packages router |
| utility | package.json | prepare | husky |
| test | package.json | prettier | prettier --write "packages/*/{src,test}/**/*.{js,jsx,ts,tsx}" |
| utility | package.json | changeset | changeset |
| utility | package.json | changeset:publish | pnpm publish -r |
| utility | package.json | changeset:version | changeset version && pnpm install --lockfile-only |


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
| ci | [.github/workflows/autofix.yml](../../../../sources/toss__use-funnel/.github/workflows/autofix.yml) | ci signal |
| ci | [.github/workflows/release.yml](../../../../sources/toss__use-funnel/.github/workflows/release.yml) | ci signal |
| config | [package.json](../../../../sources/toss__use-funnel/package.json) | config signal |
| config | [pnpm-workspace.yaml](../../../../sources/toss__use-funnel/pnpm-workspace.yaml) | config signal |
| config | [packages/react-router-dom/package.json](../../../../sources/toss__use-funnel/packages/react-router-dom/package.json) | config signal |
| config | [packages/react-router-dom/tsconfig.json](../../../../sources/toss__use-funnel/packages/react-router-dom/tsconfig.json) | config signal |
| eval | [packages/react-router-dom/test/index.test.tsx](../../../../sources/toss__use-funnel/packages/react-router-dom/test/index.test.tsx) | eval support |
| eval | [packages/react-router/test/index.test.tsx](../../../../sources/toss__use-funnel/packages/react-router/test/index.test.tsx) | eval support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 7 | [packages/react-router-dom/src/index.ts](../../../../sources/toss__use-funnel/packages/react-router-dom/src/index.ts)<br>[packages/react-router/src/index.ts](../../../../sources/toss__use-funnel/packages/react-router/src/index.ts)<br>[packages/react-navigation-native/src/index.ts](../../../../sources/toss__use-funnel/packages/react-navigation-native/src/index.ts)<br>[packages/next/src/index.ts](../../../../sources/toss__use-funnel/packages/next/src/index.ts)<br>[packages/core/src/index.ts](../../../../sources/toss__use-funnel/packages/core/src/index.ts)<br>[packages/browser/src/index.ts](../../../../sources/toss__use-funnel/packages/browser/src/index.ts)<br>[_templates/packages/router/src/index.ts.t](../../../../sources/toss__use-funnel/_templates/packages/router/src/index.ts.t) |
| agentRuntime | 2 | [docs/src/pages/ko/docs/context-guide.mdx](../../../../sources/toss__use-funnel/docs/src/pages/ko/docs/context-guide.mdx)<br>[docs/src/pages/en/docs/context-guide.mdx](../../../../sources/toss__use-funnel/docs/src/pages/en/docs/context-guide.mdx) |
| mcp | 0 | not obvious |
| retrieval | 19 | [packages/react-router-dom/test/index.test.tsx](../../../../sources/toss__use-funnel/packages/react-router-dom/test/index.test.tsx)<br>[packages/react-router-dom/src/index.ts](../../../../sources/toss__use-funnel/packages/react-router-dom/src/index.ts)<br>[packages/react-router/test/index.test.tsx](../../../../sources/toss__use-funnel/packages/react-router/test/index.test.tsx)<br>[packages/react-router/src/index.ts](../../../../sources/toss__use-funnel/packages/react-router/src/index.ts)<br>[packages/react-navigation-native/test/index.test.tsx](../../../../sources/toss__use-funnel/packages/react-navigation-native/test/index.test.tsx)<br>[packages/react-navigation-native/src/index.ts](../../../../sources/toss__use-funnel/packages/react-navigation-native/src/index.ts)<br>[packages/next/test/index.test.tsx](../../../../sources/toss__use-funnel/packages/next/test/index.test.tsx)<br>[packages/next/src/index.ts](../../../../sources/toss__use-funnel/packages/next/src/index.ts) |
| spec | 2 | [examples/nextjs-pages-router/e2e/pages-router-funnel.spec.ts](../../../../sources/toss__use-funnel/examples/nextjs-pages-router/e2e/pages-router-funnel.spec.ts)<br>[examples/nextjs-app-router/e2e/app-router-funnel.spec.ts](../../../../sources/toss__use-funnel/examples/nextjs-app-router/e2e/app-router-funnel.spec.ts) |
| eval | 15 | [packages/react-router-dom/test/index.test.tsx](../../../../sources/toss__use-funnel/packages/react-router-dom/test/index.test.tsx)<br>[packages/react-router/test/index.test.tsx](../../../../sources/toss__use-funnel/packages/react-router/test/index.test.tsx)<br>[packages/react-navigation-native/test/index.test.tsx](../../../../sources/toss__use-funnel/packages/react-navigation-native/test/index.test.tsx)<br>[packages/next/test/compat.test.tsx](../../../../sources/toss__use-funnel/packages/next/test/compat.test.tsx)<br>[packages/next/test/index.test.tsx](../../../../sources/toss__use-funnel/packages/next/test/index.test.tsx)<br>[packages/next/test/util.test.ts](../../../../sources/toss__use-funnel/packages/next/test/util.test.ts)<br>[packages/next/test/utils.tsx](../../../../sources/toss__use-funnel/packages/next/test/utils.tsx)<br>[packages/core/test/memoryRouter.tsx](../../../../sources/toss__use-funnel/packages/core/test/memoryRouter.tsx) |
| security | 0 | not obvious |
| ci | 2 | [.github/workflows/autofix.yml](../../../../sources/toss__use-funnel/.github/workflows/autofix.yml)<br>[.github/workflows/release.yml](../../../../sources/toss__use-funnel/.github/workflows/release.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 76 | [README.md](../../../../sources/toss__use-funnel/README.md)<br>[packages/react-router-dom/README.md](../../../../sources/toss__use-funnel/packages/react-router-dom/README.md)<br>[packages/react-router/README.md](../../../../sources/toss__use-funnel/packages/react-router/README.md)<br>[packages/react-navigation-native/README.md](../../../../sources/toss__use-funnel/packages/react-navigation-native/README.md)<br>[packages/next/README.md](../../../../sources/toss__use-funnel/packages/next/README.md)<br>[packages/core/README.md](../../../../sources/toss__use-funnel/packages/core/README.md)<br>[packages/browser/README.md](../../../../sources/toss__use-funnel/packages/browser/README.md)<br>[examples/nextjs-pages-router/README.md](../../../../sources/toss__use-funnel/examples/nextjs-pages-router/README.md) |
| config | 20 | [package.json](../../../../sources/toss__use-funnel/package.json)<br>[pnpm-workspace.yaml](../../../../sources/toss__use-funnel/pnpm-workspace.yaml)<br>[packages/react-router-dom/package.json](../../../../sources/toss__use-funnel/packages/react-router-dom/package.json)<br>[packages/react-router-dom/tsconfig.json](../../../../sources/toss__use-funnel/packages/react-router-dom/tsconfig.json)<br>[packages/react-router/package.json](../../../../sources/toss__use-funnel/packages/react-router/package.json)<br>[packages/react-router/tsconfig.json](../../../../sources/toss__use-funnel/packages/react-router/tsconfig.json)<br>[packages/react-navigation-native/package.json](../../../../sources/toss__use-funnel/packages/react-navigation-native/package.json)<br>[packages/react-navigation-native/tsconfig.json](../../../../sources/toss__use-funnel/packages/react-navigation-native/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 15 | [packages/react-router-dom/test/index.test.tsx](../../../../sources/toss__use-funnel/packages/react-router-dom/test/index.test.tsx)<br>[packages/react-router/test/index.test.tsx](../../../../sources/toss__use-funnel/packages/react-router/test/index.test.tsx)<br>[packages/react-navigation-native/test/index.test.tsx](../../../../sources/toss__use-funnel/packages/react-navigation-native/test/index.test.tsx)<br>[packages/next/test/compat.test.tsx](../../../../sources/toss__use-funnel/packages/next/test/compat.test.tsx)<br>[packages/next/test/index.test.tsx](../../../../sources/toss__use-funnel/packages/next/test/index.test.tsx)<br>[packages/next/test/util.test.ts](../../../../sources/toss__use-funnel/packages/next/test/util.test.ts) |
| CI workflows | 2 | [.github/workflows/autofix.yml](../../../../sources/toss__use-funnel/.github/workflows/autofix.yml)<br>[.github/workflows/release.yml](../../../../sources/toss__use-funnel/.github/workflows/release.yml) |
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

1. Start from key references: `.github/workflows/autofix.yml`, `.github/workflows/release.yml`, `package.json`.
2. Trace execution through entrypoints: `packages/react-router-dom/src/index.ts`, `packages/react-router/src/index.ts`, `packages/react-navigation-native/src/index.ts`.
3. Map agent/tool runtime through: `docs/src/pages/ko/docs/context-guide.mdx`, `docs/src/pages/en/docs/context-guide.mdx`.
4. Inspect retrieval/memory/indexing through: `packages/react-router-dom/test/index.test.tsx`, `packages/react-router-dom/src/index.ts`, `packages/react-router/test/index.test.tsx`.
5. Verify behavior through test/eval files: `packages/react-router-dom/test/index.test.tsx`, `packages/react-router/test/index.test.tsx`, `packages/react-navigation-native/test/index.test.tsx`.

## Existing Repository Insight

보안/거버넌스/안전 관점에서 A powerful and safe step by step state management library at React. 핵심 구조 신호는 TypeScript, package.json, README.md, LICENSE, react, ci이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 보안/거버넌스/안전 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, needs deeper structural scan입니다.
