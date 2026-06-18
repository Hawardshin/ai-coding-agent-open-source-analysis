# toss/h6s Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Serve headless component development kit for React production apps

## 요약

- 조사 단위: `sources/toss__h6s` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 2,985 files, 120 directories, depth score 120, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 entrypoints=packages/table/src/index.ts, packages/calendar/src/index.ts, docs/calendar/components/Main.tsx이고, 의존성 단서는 react, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | toss/h6s |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | TypeScript |
| Stars | 316 |
| Forks | 27 |
| License | MIT |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/toss__h6s](../../../../sources/toss__h6s) |
| Existing report | [reports/korea-trending/repositories/toss__h6s.md](../../../korea-trending/repositories/toss__h6s.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 2985 / 120 |
| Max observed depth | 10 |
| Top directories | .changeset, .codesandbox, .github, .husky, .storybook, .yarn, assets, docs, examples, packages, scripts, website |
| Top extensions | .zip: 2677, .ts: 97, .tsx: 59, .md: 23, .json: 22, .js: 16, .mdx: 16, .css: 15, .yml: 14, (none): 13, .html: 10, .png: 10 |
| Source patterns | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| packages/calendar | packages workspace | 28 |
| docs | documentation surface | 19 |
| packages/table | packages workspace | 10 |
| examples/react | examples workspace | 6 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| examples | top-level component | 1 |
| packages | source boundary | 1 |
| scripts | top-level component | 1 |
| website | documentation surface | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| test | package.json | check | yarn typecheck && yarn lint && yarn test |
| utility | package.json | changeset:version | yarn changeset version |
| utility | package.json | changeset:publish | yarn changeset publish |
| quality | package.json | lint | yarn workspaces foreach -ptR --from '@h6s/*' run lint |
| test | package.json | test | yarn workspaces foreach -ptR --from '@h6s/*' run test |
| quality | package.json | typecheck | yarn workspaces foreach -ptR --from '@h6s/*' run typecheck |
| build | package.json | build | yarn workspaces foreach -ptR --from '@h6s/*' run build |
| build | package.json | build:storybook | storybook build |
| serve-dev | package.json | storybook | storybook dev -p 6006 --quiet |
| utility | package.json | postinstall | husky install |


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
| entrypoints | [packages/table/src/index.ts](../../../../sources/toss__h6s/packages/table/src/index.ts) | entrypoints signal |
| entrypoints | [packages/calendar/src/index.ts](../../../../sources/toss__h6s/packages/calendar/src/index.ts) | entrypoints signal |
| entrypoints | [docs/calendar/components/Main.tsx](../../../../sources/toss__h6s/docs/calendar/components/Main.tsx) | entrypoints signal |
| entrypoints | [.yarn/sdks/typescript/bin/tsc](../../../../sources/toss__h6s/.yarn/sdks/typescript/bin/tsc) | entrypoints signal |
| config | [package.json](../../../../sources/toss__h6s/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/toss__h6s/tsconfig.json) | config signal |
| config | [website/package.json](../../../../sources/toss__h6s/website/package.json) | config signal |
| config | [website/tsconfig.json](../../../../sources/toss__h6s/website/tsconfig.json) | config signal |
| docs | [README-ko_kr.md](../../../../sources/toss__h6s/README-ko_kr.md) | docs signal |
| docs | [README.md](../../../../sources/toss__h6s/README.md) | docs signal |
| docs | [website/.gitignore](../../../../sources/toss__h6s/website/.gitignore) | docs signal |
| docs | [website/babel.config.js](../../../../sources/toss__h6s/website/babel.config.js) | docs signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 7 | [packages/table/src/index.ts](../../../../sources/toss__h6s/packages/table/src/index.ts)<br>[packages/calendar/src/index.ts](../../../../sources/toss__h6s/packages/calendar/src/index.ts)<br>[docs/calendar/components/Main.tsx](../../../../sources/toss__h6s/docs/calendar/components/Main.tsx)<br>[.yarn/sdks/typescript/bin/tsc](../../../../sources/toss__h6s/.yarn/sdks/typescript/bin/tsc)<br>[.yarn/sdks/typescript/bin/tsserver](../../../../sources/toss__h6s/.yarn/sdks/typescript/bin/tsserver)<br>[.yarn/sdks/prettier/bin/prettier.cjs](../../../../sources/toss__h6s/.yarn/sdks/prettier/bin/prettier.cjs)<br>[.storybook/main.js](../../../../sources/toss__h6s/.storybook/main.js) |
| agentRuntime | 6 | [website/src/hooks/useHover.ts](../../../../sources/toss__h6s/website/src/hooks/useHover.ts)<br>[packages/calendar/src/hooks/useIsMounted.test.tsx](../../../../sources/toss__h6s/packages/calendar/src/hooks/useIsMounted.test.tsx)<br>[packages/calendar/src/hooks/useIsMounted.tsx](../../../../sources/toss__h6s/packages/calendar/src/hooks/useIsMounted.tsx)<br>[.yarn/cache/agent-base-npm-5.1.1-d451a4ad62-82954db5dc.zip](../../../../sources/toss__h6s/.yarn/cache/agent-base-npm-5.1.1-d451a4ad62-82954db5dc.zip)<br>[.yarn/cache/agent-base-npm-6.0.2-428f325a93-21fb903e09.zip](../../../../sources/toss__h6s/.yarn/cache/agent-base-npm-6.0.2-428f325a93-21fb903e09.zip)<br>[.yarn/cache/agent-base-npm-7.1.0-4b12ba5111-f7828f9914.zip](../../../../sources/toss__h6s/.yarn/cache/agent-base-npm-7.1.0-4b12ba5111-f7828f9914.zip) |
| mcp | 0 | not obvious |
| retrieval | 30 | [website/src/pages/index.tsx](../../../../sources/toss__h6s/website/src/pages/index.tsx)<br>[packages/table/src/index.ts](../../../../sources/toss__h6s/packages/table/src/index.ts)<br>[packages/table/src/types/index.ts](../../../../sources/toss__h6s/packages/table/src/types/index.ts)<br>[packages/table/src/react/index.ts](../../../../sources/toss__h6s/packages/table/src/react/index.ts)<br>[packages/calendar/src/index.ts](../../../../sources/toss__h6s/packages/calendar/src/index.ts)<br>[packages/calendar/src/utils/index.ts](../../../../sources/toss__h6s/packages/calendar/src/utils/index.ts)<br>[packages/calendar/src/plugins/index.ts](../../../../sources/toss__h6s/packages/calendar/src/plugins/index.ts)<br>[packages/calendar/src/models/index.ts](../../../../sources/toss__h6s/packages/calendar/src/models/index.ts) |
| spec | 2 | [.yarn/cache/@aw-web-design-x-default-browser-npm-1.4.126-91a892f901-f7111a6f00.zip](../../../../sources/toss__h6s/.yarn/cache/@aw-web-design-x-default-browser-npm-1.4.126-91a892f901-f7111a6f00.zip)<br>[.yarn/cache/system-architecture-npm-0.1.0-d273b78665-ca0dd793c4.zip](../../../../sources/toss__h6s/.yarn/cache/system-architecture-npm-0.1.0-d273b78665-ca0dd793c4.zip) |
| eval | 29 | [packages/table/src/helpers/composeDataset.test.ts](../../../../sources/toss__h6s/packages/table/src/helpers/composeDataset.test.ts)<br>[packages/table/src/core/TableCore.test.ts](../../../../sources/toss__h6s/packages/table/src/core/TableCore.test.ts)<br>[packages/table/src/core/tfoot/buildFooters.test.ts](../../../../sources/toss__h6s/packages/table/src/core/tfoot/buildFooters.test.ts)<br>[packages/calendar/src/useCalendar.test.ts](../../../../sources/toss__h6s/packages/calendar/src/useCalendar.test.ts)<br>[packages/calendar/src/useSelection.test.ts](../../../../sources/toss__h6s/packages/calendar/src/useSelection.test.ts)<br>[packages/calendar/src/utils/addDays.test.ts](../../../../sources/toss__h6s/packages/calendar/src/utils/addDays.test.ts)<br>[packages/calendar/src/utils/arrayOf.test.ts](../../../../sources/toss__h6s/packages/calendar/src/utils/arrayOf.test.ts)<br>[packages/calendar/src/utils/getDaysInMonth.test.ts](../../../../sources/toss__h6s/packages/calendar/src/utils/getDaysInMonth.test.ts) |
| security | 2 | [SECURITY.md](../../../../sources/toss__h6s/SECURITY.md)<br>[.yarn/cache/registry-auth-token-npm-5.0.2-26eb592d5d-0d7683b71e.zip](../../../../sources/toss__h6s/.yarn/cache/registry-auth-token-npm-5.0.2-26eb592d5d-0d7683b71e.zip) |
| ci | 8 | [.github/workflows/auto-assign-action.yml](../../../../sources/toss__h6s/.github/workflows/auto-assign-action.yml)<br>[.github/workflows/build-examples.yml](../../../../sources/toss__h6s/.github/workflows/build-examples.yml)<br>[.github/workflows/build-website.yml](../../../../sources/toss__h6s/.github/workflows/build-website.yml)<br>[.github/workflows/ci.yml](../../../../sources/toss__h6s/.github/workflows/ci.yml)<br>[.github/workflows/labeler.yml](../../../../sources/toss__h6s/.github/workflows/labeler.yml)<br>[.github/workflows/release.yml](../../../../sources/toss__h6s/.github/workflows/release.yml)<br>[.github/workflows/sanity.yml](../../../../sources/toss__h6s/.github/workflows/sanity.yml)<br>[.github/workflows/size-label.yml](../../../../sources/toss__h6s/.github/workflows/size-label.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 134 | [README-ko_kr.md](../../../../sources/toss__h6s/README-ko_kr.md)<br>[README.md](../../../../sources/toss__h6s/README.md)<br>[website/.gitignore](../../../../sources/toss__h6s/website/.gitignore)<br>[website/babel.config.js](../../../../sources/toss__h6s/website/babel.config.js)<br>[website/CHANGELOG.md](../../../../sources/toss__h6s/website/CHANGELOG.md)<br>[website/docusaurus.config.js](../../../../sources/toss__h6s/website/docusaurus.config.js)<br>[website/netlify.toml](../../../../sources/toss__h6s/website/netlify.toml)<br>[website/package.json](../../../../sources/toss__h6s/website/package.json) |
| config | 14 | [package.json](../../../../sources/toss__h6s/package.json)<br>[tsconfig.json](../../../../sources/toss__h6s/tsconfig.json)<br>[website/package.json](../../../../sources/toss__h6s/website/package.json)<br>[website/tsconfig.json](../../../../sources/toss__h6s/website/tsconfig.json)<br>[packages/table/package.json](../../../../sources/toss__h6s/packages/table/package.json)<br>[packages/table/tsconfig.json](../../../../sources/toss__h6s/packages/table/tsconfig.json)<br>[packages/calendar/package.json](../../../../sources/toss__h6s/packages/calendar/package.json)<br>[packages/calendar/tsconfig.json](../../../../sources/toss__h6s/packages/calendar/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 29 | [packages/table/src/helpers/composeDataset.test.ts](../../../../sources/toss__h6s/packages/table/src/helpers/composeDataset.test.ts)<br>[packages/table/src/core/TableCore.test.ts](../../../../sources/toss__h6s/packages/table/src/core/TableCore.test.ts)<br>[packages/table/src/core/tfoot/buildFooters.test.ts](../../../../sources/toss__h6s/packages/table/src/core/tfoot/buildFooters.test.ts)<br>[packages/calendar/src/useCalendar.test.ts](../../../../sources/toss__h6s/packages/calendar/src/useCalendar.test.ts)<br>[packages/calendar/src/useSelection.test.ts](../../../../sources/toss__h6s/packages/calendar/src/useSelection.test.ts)<br>[packages/calendar/src/utils/addDays.test.ts](../../../../sources/toss__h6s/packages/calendar/src/utils/addDays.test.ts) |
| CI workflows | 8 | [.github/workflows/auto-assign-action.yml](../../../../sources/toss__h6s/.github/workflows/auto-assign-action.yml)<br>[.github/workflows/build-examples.yml](../../../../sources/toss__h6s/.github/workflows/build-examples.yml)<br>[.github/workflows/build-website.yml](../../../../sources/toss__h6s/.github/workflows/build-website.yml)<br>[.github/workflows/ci.yml](../../../../sources/toss__h6s/.github/workflows/ci.yml)<br>[.github/workflows/labeler.yml](../../../../sources/toss__h6s/.github/workflows/labeler.yml)<br>[.github/workflows/release.yml](../../../../sources/toss__h6s/.github/workflows/release.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 2 | [SECURITY.md](../../../../sources/toss__h6s/SECURITY.md)<br>[.yarn/cache/registry-auth-token-npm-5.0.2-26eb592d5d-0d7683b71e.zip](../../../../sources/toss__h6s/.yarn/cache/registry-auth-token-npm-5.0.2-26eb592d5d-0d7683b71e.zip) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `packages/table/src/index.ts`, `packages/calendar/src/index.ts`, `docs/calendar/components/Main.tsx`.
2. Trace execution through entrypoints: `packages/table/src/index.ts`, `packages/calendar/src/index.ts`, `docs/calendar/components/Main.tsx`.
3. Map agent/tool runtime through: `website/src/hooks/useHover.ts`, `packages/calendar/src/hooks/useIsMounted.test.tsx`, `packages/calendar/src/hooks/useIsMounted.tsx`.
4. Inspect retrieval/memory/indexing through: `website/src/pages/index.tsx`, `packages/table/src/index.ts`, `packages/table/src/types/index.ts`.
5. Verify behavior through test/eval files: `packages/table/src/helpers/composeDataset.test.ts`, `packages/table/src/core/TableCore.test.ts`, `packages/table/src/core/tfoot/buildFooters.test.ts`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 Serve headless component development kit for React production apps. 핵심 구조 신호는 TypeScript, package.json, README.md, LICENSE, react, ci이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, needs deeper structural scan입니다.
