# toss/overlay-kit Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

A library for handling overlays more easily in React.

## 요약

- 조사 단위: `sources/toss__overlay-kit` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 184 files, 60 directories, depth score 106, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 entrypoints=packages/src/index.ts, examples/react-19/framer-motion/src/main.tsx, examples/react-18/framer-motion/src/main.tsx이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | toss/overlay-kit |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | TypeScript |
| Stars | 713 |
| Forks | 78 |
| License | MIT |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/toss__overlay-kit](../../../../sources/toss__overlay-kit) |
| Existing report | [reports/korea-trending/repositories/toss__overlay-kit.md](../../../korea-trending/repositories/toss__overlay-kit.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 184 / 60 |
| Max observed depth | 8 |
| Top directories | .changeset, .github, .yarn, docs, examples, packages |
| Top extensions | .mdx: 48, .tsx: 41, .ts: 26, .json: 17, (none): 14, .js: 7, .md: 7, .yml: 6, .cjs: 4, .html: 4, .png: 3, .txt: 3 |
| Source patterns | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 62 |
| packages/src | packages workspace | 15 |
| examples/react-16 | examples workspace | 4 |
| examples/react-17 | examples workspace | 4 |
| examples/react-18 | examples workspace | 4 |
| examples/react-19 | examples workspace | 4 |
| .github | ci surface | 1 |
| examples | top-level component | 1 |
| packages | source boundary | 1 |
| packages/package.json | packages workspace | 1 |
| packages/README.md | packages workspace | 1 |
| packages/setup.test.ts | packages workspace | 1 |
| packages/tsconfig.json | packages workspace | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| quality | package.json | lint | eslint . |
| utility | package.json | changeset:version | yarn changeset version |
| utility | package.json | changeset:publish | yarn changeset publish |


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
| entrypoints | [packages/src/index.ts](../../../../sources/toss__overlay-kit/packages/src/index.ts) | entrypoints signal |
| entrypoints | [examples/react-19/framer-motion/src/main.tsx](../../../../sources/toss__overlay-kit/examples/react-19/framer-motion/src/main.tsx) | entrypoints signal |
| entrypoints | [examples/react-18/framer-motion/src/main.tsx](../../../../sources/toss__overlay-kit/examples/react-18/framer-motion/src/main.tsx) | entrypoints signal |
| entrypoints | [examples/react-17/framer-motion/src/main.tsx](../../../../sources/toss__overlay-kit/examples/react-17/framer-motion/src/main.tsx) | entrypoints signal |
| config | [package.json](../../../../sources/toss__overlay-kit/package.json) | config signal |
| config | [packages/package.json](../../../../sources/toss__overlay-kit/packages/package.json) | config signal |
| config | [packages/tsconfig.json](../../../../sources/toss__overlay-kit/packages/tsconfig.json) | config signal |
| config | [examples/react-19/framer-motion/package.json](../../../../sources/toss__overlay-kit/examples/react-19/framer-motion/package.json) | config signal |
| docs | [README-ja_JP.md](../../../../sources/toss__overlay-kit/README-ja_JP.md) | docs signal |
| docs | [README-ko_kr.md](../../../../sources/toss__overlay-kit/README-ko_kr.md) | docs signal |
| docs | [README.md](../../../../sources/toss__overlay-kit/README.md) | docs signal |
| docs | [packages/README.md](../../../../sources/toss__overlay-kit/packages/README.md) | docs signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 10 | [packages/src/index.ts](../../../../sources/toss__overlay-kit/packages/src/index.ts)<br>[examples/react-19/framer-motion/src/main.tsx](../../../../sources/toss__overlay-kit/examples/react-19/framer-motion/src/main.tsx)<br>[examples/react-18/framer-motion/src/main.tsx](../../../../sources/toss__overlay-kit/examples/react-18/framer-motion/src/main.tsx)<br>[examples/react-17/framer-motion/src/main.tsx](../../../../sources/toss__overlay-kit/examples/react-17/framer-motion/src/main.tsx)<br>[examples/react-16/framer-motion/src/main.tsx](../../../../sources/toss__overlay-kit/examples/react-16/framer-motion/src/main.tsx)<br>[docs/src/components/main.tsx](../../../../sources/toss__overlay-kit/docs/src/components/main.tsx)<br>[.yarn/sdks/typescript/bin/tsc](../../../../sources/toss__overlay-kit/.yarn/sdks/typescript/bin/tsc)<br>[.yarn/sdks/typescript/bin/tsserver](../../../../sources/toss__overlay-kit/.yarn/sdks/typescript/bin/tsserver) |
| agentRuntime | 7 | [packages/src/context/context.ts](../../../../sources/toss__overlay-kit/packages/src/context/context.ts)<br>[packages/src/context/reducer.test.ts](../../../../sources/toss__overlay-kit/packages/src/context/reducer.test.ts)<br>[packages/src/context/reducer.ts](../../../../sources/toss__overlay-kit/packages/src/context/reducer.ts)<br>[packages/src/context/provider/content-overlay-controller.tsx](../../../../sources/toss__overlay-kit/packages/src/context/provider/content-overlay-controller.tsx)<br>[packages/src/context/provider/index.tsx](../../../../sources/toss__overlay-kit/packages/src/context/provider/index.tsx)<br>[docs/src/pages/ko/docs/guides/hooks.mdx](../../../../sources/toss__overlay-kit/docs/src/pages/ko/docs/guides/hooks.mdx)<br>[docs/src/pages/en/docs/guides/hooks.mdx](../../../../sources/toss__overlay-kit/docs/src/pages/en/docs/guides/hooks.mdx) |
| mcp | 0 | not obvious |
| retrieval | 12 | [packages/src/index.ts](../../../../sources/toss__overlay-kit/packages/src/index.ts)<br>[packages/src/utils/index.ts](../../../../sources/toss__overlay-kit/packages/src/utils/index.ts)<br>[packages/src/context/provider/index.tsx](../../../../sources/toss__overlay-kit/packages/src/context/provider/index.tsx)<br>[examples/react-19/framer-motion/index.html](../../../../sources/toss__overlay-kit/examples/react-19/framer-motion/index.html)<br>[examples/react-18/framer-motion/index.html](../../../../sources/toss__overlay-kit/examples/react-18/framer-motion/index.html)<br>[examples/react-17/framer-motion/index.html](../../../../sources/toss__overlay-kit/examples/react-17/framer-motion/index.html)<br>[examples/react-16/framer-motion/index.html](../../../../sources/toss__overlay-kit/examples/react-16/framer-motion/index.html)<br>[docs/src/pages/ko/index.mdx](../../../../sources/toss__overlay-kit/docs/src/pages/ko/index.mdx) |
| spec | 16 | [docs/src/pages/ko/docs/more/with-design-systems/_meta.tsx](../../../../sources/toss__overlay-kit/docs/src/pages/ko/docs/more/with-design-systems/_meta.tsx)<br>[docs/src/pages/ko/docs/more/with-design-systems/ant-design.mdx](../../../../sources/toss__overlay-kit/docs/src/pages/ko/docs/more/with-design-systems/ant-design.mdx)<br>[docs/src/pages/ko/docs/more/with-design-systems/chakra-ui.mdx](../../../../sources/toss__overlay-kit/docs/src/pages/ko/docs/more/with-design-systems/chakra-ui.mdx)<br>[docs/src/pages/ko/docs/more/with-design-systems/headless-ui.mdx](../../../../sources/toss__overlay-kit/docs/src/pages/ko/docs/more/with-design-systems/headless-ui.mdx)<br>[docs/src/pages/ko/docs/more/with-design-systems/mantine.mdx](../../../../sources/toss__overlay-kit/docs/src/pages/ko/docs/more/with-design-systems/mantine.mdx)<br>[docs/src/pages/ko/docs/more/with-design-systems/mui.mdx](../../../../sources/toss__overlay-kit/docs/src/pages/ko/docs/more/with-design-systems/mui.mdx)<br>[docs/src/pages/ko/docs/more/with-design-systems/radix-ui.mdx](../../../../sources/toss__overlay-kit/docs/src/pages/ko/docs/more/with-design-systems/radix-ui.mdx)<br>[docs/src/pages/ko/docs/more/with-design-systems/shadcn.mdx](../../../../sources/toss__overlay-kit/docs/src/pages/ko/docs/more/with-design-systems/shadcn.mdx) |
| eval | 7 | [packages/setup.test.ts](../../../../sources/toss__overlay-kit/packages/setup.test.ts)<br>[packages/src/event.test.tsx](../../../../sources/toss__overlay-kit/packages/src/event.test.tsx)<br>[packages/src/utils/create-overlay-context.test.tsx](../../../../sources/toss__overlay-kit/packages/src/utils/create-overlay-context.test.tsx)<br>[packages/src/utils/create-safe-context.test.tsx](../../../../sources/toss__overlay-kit/packages/src/utils/create-safe-context.test.tsx)<br>[packages/src/utils/create-use-external-events.test.ts](../../../../sources/toss__overlay-kit/packages/src/utils/create-use-external-events.test.ts)<br>[packages/src/utils/emitter.test.ts](../../../../sources/toss__overlay-kit/packages/src/utils/emitter.test.ts)<br>[packages/src/context/reducer.test.ts](../../../../sources/toss__overlay-kit/packages/src/context/reducer.test.ts) |
| security | 0 | not obvious |
| ci | 3 | [.github/workflows/autofix.yml](../../../../sources/toss__overlay-kit/.github/workflows/autofix.yml)<br>[.github/workflows/ci.yml](../../../../sources/toss__overlay-kit/.github/workflows/ci.yml)<br>[.github/workflows/release.yml](../../../../sources/toss__overlay-kit/.github/workflows/release.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 91 | [README-ja_JP.md](../../../../sources/toss__overlay-kit/README-ja_JP.md)<br>[README-ko_kr.md](../../../../sources/toss__overlay-kit/README-ko_kr.md)<br>[README.md](../../../../sources/toss__overlay-kit/README.md)<br>[packages/README.md](../../../../sources/toss__overlay-kit/packages/README.md)<br>[docs/.gitignore](../../../../sources/toss__overlay-kit/docs/.gitignore)<br>[docs/next-env.d.ts](../../../../sources/toss__overlay-kit/docs/next-env.d.ts)<br>[docs/next.config.mjs](../../../../sources/toss__overlay-kit/docs/next.config.mjs)<br>[docs/package.json](../../../../sources/toss__overlay-kit/docs/package.json) |
| config | 16 | [package.json](../../../../sources/toss__overlay-kit/package.json)<br>[packages/package.json](../../../../sources/toss__overlay-kit/packages/package.json)<br>[packages/tsconfig.json](../../../../sources/toss__overlay-kit/packages/tsconfig.json)<br>[examples/react-19/framer-motion/package.json](../../../../sources/toss__overlay-kit/examples/react-19/framer-motion/package.json)<br>[examples/react-19/framer-motion/tsconfig.json](../../../../sources/toss__overlay-kit/examples/react-19/framer-motion/tsconfig.json)<br>[examples/react-18/framer-motion/package.json](../../../../sources/toss__overlay-kit/examples/react-18/framer-motion/package.json)<br>[examples/react-18/framer-motion/tsconfig.json](../../../../sources/toss__overlay-kit/examples/react-18/framer-motion/tsconfig.json)<br>[examples/react-17/framer-motion/package.json](../../../../sources/toss__overlay-kit/examples/react-17/framer-motion/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 7 | [packages/setup.test.ts](../../../../sources/toss__overlay-kit/packages/setup.test.ts)<br>[packages/src/event.test.tsx](../../../../sources/toss__overlay-kit/packages/src/event.test.tsx)<br>[packages/src/utils/create-overlay-context.test.tsx](../../../../sources/toss__overlay-kit/packages/src/utils/create-overlay-context.test.tsx)<br>[packages/src/utils/create-safe-context.test.tsx](../../../../sources/toss__overlay-kit/packages/src/utils/create-safe-context.test.tsx)<br>[packages/src/utils/create-use-external-events.test.ts](../../../../sources/toss__overlay-kit/packages/src/utils/create-use-external-events.test.ts)<br>[packages/src/utils/emitter.test.ts](../../../../sources/toss__overlay-kit/packages/src/utils/emitter.test.ts) |
| CI workflows | 3 | [.github/workflows/autofix.yml](../../../../sources/toss__overlay-kit/.github/workflows/autofix.yml)<br>[.github/workflows/ci.yml](../../../../sources/toss__overlay-kit/.github/workflows/ci.yml)<br>[.github/workflows/release.yml](../../../../sources/toss__overlay-kit/.github/workflows/release.yml) |
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

1. Start from key references: `packages/src/index.ts`, `examples/react-19/framer-motion/src/main.tsx`, `examples/react-18/framer-motion/src/main.tsx`.
2. Trace execution through entrypoints: `packages/src/index.ts`, `examples/react-19/framer-motion/src/main.tsx`, `examples/react-18/framer-motion/src/main.tsx`.
3. Map agent/tool runtime through: `packages/src/context/context.ts`, `packages/src/context/reducer.test.ts`, `packages/src/context/reducer.ts`.
4. Inspect retrieval/memory/indexing through: `packages/src/index.ts`, `packages/src/utils/index.ts`, `packages/src/context/provider/index.tsx`.
5. Verify behavior through test/eval files: `packages/setup.test.ts`, `packages/src/event.test.tsx`, `packages/src/utils/create-overlay-context.test.tsx`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 A library for handling overlays more easily in React.. 핵심 구조 신호는 TypeScript, package.json, README.md, LICENSE, ci, docs이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, needs deeper structural scan입니다.
