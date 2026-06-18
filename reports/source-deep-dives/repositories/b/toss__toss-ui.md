# toss/toss-ui Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

toss/toss-ui

## 요약

- 조사 단위: `sources/toss__toss-ui` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 1,744 files, 53 directories, depth score 112, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 entrypoints=packages/utils/src/index.ts, packages/uikit/src/index.ts, packages/uikit/.storybook/main.js이고, 의존성 단서는 react, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | toss/toss-ui |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | TypeScript |
| Stars | 102 |
| Forks | 12 |
| License | Apache-2.0 |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/toss__toss-ui](../../../../sources/toss__toss-ui) |
| Existing report | [reports/korea-trending/repositories/toss__toss-ui.md](../../../korea-trending/repositories/toss__toss-ui.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 1744 / 53 |
| Max observed depth | 7 |
| Top directories | .husky, .yarn, packages, shared-configs |
| Top extensions | .zip: 1627, .ts: 44, .js: 16, .json: 16, .tsx: 12, (none): 10, .mdx: 9, .md: 5, .cjs: 2, .yml: 2, .lock: 1 |
| Source patterns | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, ui/extension surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| packages/styled | packages workspace | 27 |
| packages/uikit | packages workspace | 27 |
| packages/utils | packages workspace | 6 |
| packages/eslint-config | packages workspace | 4 |
| packages | source boundary | 1 |
| shared-configs | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| quality | package.json | lint | eslint . --ext .ts,.tsx |
| utility | package.json | postinstall | husky install |
| utility | package.json | prepublishOnly | pinst --disable |
| utility | package.json | postpublish | pinst --enable |


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
| entrypoints | [packages/utils/src/index.ts](../../../../sources/toss__toss-ui/packages/utils/src/index.ts) | entrypoints signal |
| entrypoints | [packages/uikit/src/index.ts](../../../../sources/toss__toss-ui/packages/uikit/src/index.ts) | entrypoints signal |
| entrypoints | [packages/uikit/.storybook/main.js](../../../../sources/toss__toss-ui/packages/uikit/.storybook/main.js) | entrypoints signal |
| entrypoints | [packages/styled/src/index.ts](../../../../sources/toss__toss-ui/packages/styled/src/index.ts) | entrypoints signal |
| config | [package.json](../../../../sources/toss__toss-ui/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/toss__toss-ui/tsconfig.json) | config signal |
| config | [packages/utils/package.json](../../../../sources/toss__toss-ui/packages/utils/package.json) | config signal |
| config | [packages/uikit/package.json](../../../../sources/toss__toss-ui/packages/uikit/package.json) | config signal |
| docs | [README.md](../../../../sources/toss__toss-ui/README.md) | docs signal |
| docs | [packages/utils/README.md](../../../../sources/toss__toss-ui/packages/utils/README.md) | docs signal |
| docs | [packages/uikit/README.md](../../../../sources/toss__toss-ui/packages/uikit/README.md) | docs signal |
| docs | [packages/uikit/docs/index.stories.mdx](../../../../sources/toss__toss-ui/packages/uikit/docs/index.stories.mdx) | docs signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 9 | [packages/utils/src/index.ts](../../../../sources/toss__toss-ui/packages/utils/src/index.ts)<br>[packages/uikit/src/index.ts](../../../../sources/toss__toss-ui/packages/uikit/src/index.ts)<br>[packages/uikit/.storybook/main.js](../../../../sources/toss__toss-ui/packages/uikit/.storybook/main.js)<br>[packages/styled/src/index.ts](../../../../sources/toss__toss-ui/packages/styled/src/index.ts)<br>[packages/styled/.storybook/main.js](../../../../sources/toss__toss-ui/packages/styled/.storybook/main.js)<br>[packages/eslint-config/src/index.js](../../../../sources/toss__toss-ui/packages/eslint-config/src/index.js)<br>[.yarn/sdks/typescript/bin/tsc](../../../../sources/toss__toss-ui/.yarn/sdks/typescript/bin/tsc)<br>[.yarn/sdks/typescript/bin/tsserver](../../../../sources/toss__toss-ui/.yarn/sdks/typescript/bin/tsserver) |
| agentRuntime | 3 | [.yarn/cache/agent-base-npm-6.0.2-428f325a93-e77eff83e1.zip](../../../../sources/toss__toss-ui/.yarn/cache/agent-base-npm-6.0.2-428f325a93-e77eff83e1.zip)<br>[.yarn/cache/memory-fs-npm-0.4.1-0a5f9b8954-ba79207118.zip](../../../../sources/toss__toss-ui/.yarn/cache/memory-fs-npm-0.4.1-0a5f9b8954-ba79207118.zip)<br>[.yarn/cache/memory-fs-npm-0.5.0-8be5938449-deb916f33c.zip](../../../../sources/toss__toss-ui/.yarn/cache/memory-fs-npm-0.5.0-8be5938449-deb916f33c.zip) |
| mcp | 0 | not obvious |
| retrieval | 25 | [packages/utils/src/index.ts](../../../../sources/toss__toss-ui/packages/utils/src/index.ts)<br>[packages/utils/src/lib/index.ts](../../../../sources/toss__toss-ui/packages/utils/src/lib/index.ts)<br>[packages/utils/src/lib/objects/index.ts](../../../../sources/toss__toss-ui/packages/utils/src/lib/objects/index.ts)<br>[packages/uikit/src/index.ts](../../../../sources/toss__toss-ui/packages/uikit/src/index.ts)<br>[packages/uikit/src/lib/index.ts](../../../../sources/toss__toss-ui/packages/uikit/src/lib/index.ts)<br>[packages/uikit/src/lib/utils/index.ts](../../../../sources/toss__toss-ui/packages/uikit/src/lib/utils/index.ts)<br>[packages/uikit/src/lib/types/index.ts](../../../../sources/toss__toss-ui/packages/uikit/src/lib/types/index.ts)<br>[packages/uikit/src/lib/components/index.ts](../../../../sources/toss__toss-ui/packages/uikit/src/lib/components/index.ts) |
| spec | 5 | [packages/uikit/tsconfig.spec.json](../../../../sources/toss__toss-ui/packages/uikit/tsconfig.spec.json)<br>[packages/uikit/src/lib/components/View/View.spec.tsx](../../../../sources/toss__toss-ui/packages/uikit/src/lib/components/View/View.spec.tsx)<br>[packages/uikit/src/lib/components/Stack/Stack.spec.tsx](../../../../sources/toss__toss-ui/packages/uikit/src/lib/components/Stack/Stack.spec.tsx)<br>[packages/styled/tsconfig.spec.json](../../../../sources/toss__toss-ui/packages/styled/tsconfig.spec.json)<br>[packages/styled/src/lib/createVariantPropInterpolation/createVariantPropInterpolation.spec.ts](../../../../sources/toss__toss-ui/packages/styled/src/lib/createVariantPropInterpolation/createVariantPropInterpolation.spec.ts) |
| eval | 11 | [packages/uikit/tsconfig.spec.json](../../../../sources/toss__toss-ui/packages/uikit/tsconfig.spec.json)<br>[packages/uikit/src/lib/components/View/View.spec.tsx](../../../../sources/toss__toss-ui/packages/uikit/src/lib/components/View/View.spec.tsx)<br>[packages/uikit/src/lib/components/Stack/Stack.spec.tsx](../../../../sources/toss__toss-ui/packages/uikit/src/lib/components/Stack/Stack.spec.tsx)<br>[packages/styled/tsconfig.spec.json](../../../../sources/toss__toss-ui/packages/styled/tsconfig.spec.json)<br>[packages/styled/src/lib/createVariantPropInterpolation/createVariantPropInterpolation.spec.ts](../../../../sources/toss__toss-ui/packages/styled/src/lib/createVariantPropInterpolation/createVariantPropInterpolation.spec.ts)<br>[.yarn/cache/@jest-test-result-npm-27.0.6-34f3e2e7a7-be967817bc.zip](../../../../sources/toss__toss-ui/.yarn/cache/@jest-test-result-npm-27.0.6-34f3e2e7a7-be967817bc.zip)<br>[.yarn/cache/@jest-test-sequencer-npm-27.0.6-86e97d4060-fb9adb58c7.zip](../../../../sources/toss__toss-ui/.yarn/cache/@jest-test-sequencer-npm-27.0.6-86e97d4060-fb9adb58c7.zip)<br>[.yarn/cache/@types-react-test-renderer-npm-17.0.1-9a42d8bb68-bd3f8c6c2a.zip](../../../../sources/toss__toss-ui/.yarn/cache/@types-react-test-renderer-npm-17.0.1-9a42d8bb68-bd3f8c6c2a.zip) |
| security | 0 | not obvious |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 21 | [README.md](../../../../sources/toss__toss-ui/README.md)<br>[packages/utils/README.md](../../../../sources/toss__toss-ui/packages/utils/README.md)<br>[packages/uikit/README.md](../../../../sources/toss__toss-ui/packages/uikit/README.md)<br>[packages/uikit/docs/index.stories.mdx](../../../../sources/toss__toss-ui/packages/uikit/docs/index.stories.mdx)<br>[packages/uikit/docs/components/View/View.docs.tsx](../../../../sources/toss__toss-ui/packages/uikit/docs/components/View/View.docs.tsx)<br>[packages/uikit/docs/components/View/View.stories.mdx](../../../../sources/toss__toss-ui/packages/uikit/docs/components/View/View.stories.mdx)<br>[packages/uikit/docs/components/Text/Text.docs.tsx](../../../../sources/toss__toss-ui/packages/uikit/docs/components/Text/Text.docs.tsx)<br>[packages/uikit/docs/components/Text/Text.stories.mdx](../../../../sources/toss__toss-ui/packages/uikit/docs/components/Text/Text.stories.mdx) |
| config | 11 | [package.json](../../../../sources/toss__toss-ui/package.json)<br>[tsconfig.json](../../../../sources/toss__toss-ui/tsconfig.json)<br>[packages/utils/package.json](../../../../sources/toss__toss-ui/packages/utils/package.json)<br>[packages/uikit/package.json](../../../../sources/toss__toss-ui/packages/uikit/package.json)<br>[packages/uikit/tsconfig.json](../../../../sources/toss__toss-ui/packages/uikit/tsconfig.json)<br>[packages/styled/package.json](../../../../sources/toss__toss-ui/packages/styled/package.json)<br>[packages/styled/tsconfig.json](../../../../sources/toss__toss-ui/packages/styled/tsconfig.json)<br>[packages/eslint-config/package.json](../../../../sources/toss__toss-ui/packages/eslint-config/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 11 | [packages/uikit/tsconfig.spec.json](../../../../sources/toss__toss-ui/packages/uikit/tsconfig.spec.json)<br>[packages/uikit/src/lib/components/View/View.spec.tsx](../../../../sources/toss__toss-ui/packages/uikit/src/lib/components/View/View.spec.tsx)<br>[packages/uikit/src/lib/components/Stack/Stack.spec.tsx](../../../../sources/toss__toss-ui/packages/uikit/src/lib/components/Stack/Stack.spec.tsx)<br>[packages/styled/tsconfig.spec.json](../../../../sources/toss__toss-ui/packages/styled/tsconfig.spec.json)<br>[packages/styled/src/lib/createVariantPropInterpolation/createVariantPropInterpolation.spec.ts](../../../../sources/toss__toss-ui/packages/styled/src/lib/createVariantPropInterpolation/createVariantPropInterpolation.spec.ts)<br>[.yarn/cache/@jest-test-result-npm-27.0.6-34f3e2e7a7-be967817bc.zip](../../../../sources/toss__toss-ui/.yarn/cache/@jest-test-result-npm-27.0.6-34f3e2e7a7-be967817bc.zip) |
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
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `packages/utils/src/index.ts`, `packages/uikit/src/index.ts`, `packages/uikit/.storybook/main.js`.
2. Trace execution through entrypoints: `packages/utils/src/index.ts`, `packages/uikit/src/index.ts`, `packages/uikit/.storybook/main.js`.
3. Map agent/tool runtime through: `.yarn/cache/agent-base-npm-6.0.2-428f325a93-e77eff83e1.zip`, `.yarn/cache/memory-fs-npm-0.4.1-0a5f9b8954-ba79207118.zip`, `.yarn/cache/memory-fs-npm-0.5.0-8be5938449-deb916f33c.zip`.
4. Inspect retrieval/memory/indexing through: `packages/utils/src/index.ts`, `packages/utils/src/lib/index.ts`, `packages/utils/src/lib/objects/index.ts`.
5. Verify behavior through test/eval files: `packages/uikit/tsconfig.spec.json`, `packages/uikit/src/lib/components/View/View.spec.tsx`, `packages/uikit/src/lib/components/Stack/Stack.spec.tsx`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 설명 메타데이터가 짧습니다. 핵심 구조 신호는 TypeScript, package.json, README.md, react, docs이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, ci signal not obvious, needs deeper structural scan입니다.
