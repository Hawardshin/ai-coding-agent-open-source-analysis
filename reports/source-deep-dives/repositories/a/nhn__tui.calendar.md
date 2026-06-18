# nhn/tui.calendar Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

🍞📅A JavaScript calendar that has everything you need.

## 요약

- 조사 단위: `sources/nhn__tui.calendar` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 680 files, 98 directories, depth score 114, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 entrypoints=libs/date/src/index.js, apps/vue-calendar/src/Calendar.js, apps/vue-calendar/example/main.js이고, 의존성 단서는 react, playwright, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | nhn/tui.calendar |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | TypeScript |
| Stars | 12655 |
| Forks | 1350 |
| License | MIT |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/nhn__tui.calendar](../../../../sources/nhn__tui.calendar) |
| Existing report | [reports/korea-trending/repositories/nhn__tui.calendar.md](../../../korea-trending/repositories/nhn__tui.calendar.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 680 / 98 |
| Max observed depth | 6 |
| Top directories | .github, .husky, apps, docs, libs, scripts |
| Top extensions | .png: 213, .ts: 187, .tsx: 112, .md: 39, .js: 38, .css: 27, .html: 18, .json: 17, (none): 11, .gif: 7, .yml: 5, .eot: 1 |
| Source patterns | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, ui/extension surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| apps/calendar | apps workspace | 156 |
| docs | documentation surface | 40 |
| libs/date | libs workspace | 12 |
| apps/react-calendar | apps workspace | 7 |
| apps/vue-calendar | apps workspace | 5 |
| .github | ci surface | 1 |
| apps | source boundary | 1 |
| libs | source boundary | 1 |
| scripts | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| build | package.json | build | npm run build --workspaces |
| build | package.json | build:calendar | npm run build --workspace=@toast-ui/calendar |
| build | package.json | build:react | npm run build --workspace=@toast-ui/react-calendar |
| build | package.json | build:vue | npm run build --workspace=@toast-ui/vue-calendar |
| build | package.json | build:date | npm run build --workspace=@toast-ui/date |
| build | package.json | build:calendar-storybook | npm run storybook:build --workspace=@toast-ui/calendar |
| build | package.json | build:calendar:docs | npm run docs:build --workspace=@toast-ui/calendar |
| serve-dev | package.json | serve:storybook | http-server ./apps/calendar/storybook-static |
| utility | package.json | install:date | cd libs/date && npm install |
| build | package.json | setup:date | npm run install:date && npm run build:date |
| quality | package.json | lint | npm run lint --workspaces |
| serve-dev | package.json | develop | npm run develop --workspace=@toast-ui/calendar |
| test | package.json | test | jest |
| test | package.json | test:watch | jest --watch |
| test | package.json | test:playwright | playwright test |
| test | package.json | test:playwright:local | playwright test --project=Chromium |
| test | package.json | test:playwright:inspect | playwright test --project=Chromium --debug |
| build | package.json | prepare | ts-patch install -s && husky install && ts-patch install -s && npm run build:date |
| utility | package.json | update:readme | node scripts/replaceLinkInReadme.js |


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
| browserAutomation | playwright |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| entrypoints | [libs/date/src/index.js](../../../../sources/nhn__tui.calendar/libs/date/src/index.js) | entrypoints signal |
| entrypoints | [apps/vue-calendar/src/Calendar.js](../../../../sources/nhn__tui.calendar/apps/vue-calendar/src/Calendar.js) | entrypoints signal |
| entrypoints | [apps/vue-calendar/example/main.js](../../../../sources/nhn__tui.calendar/apps/vue-calendar/example/main.js) | entrypoints signal |
| entrypoints | [apps/react-calendar/src/index.tsx](../../../../sources/nhn__tui.calendar/apps/react-calendar/src/index.tsx) | entrypoints signal |
| config | [package.json](../../../../sources/nhn__tui.calendar/package.json) | config signal |
| config | [libs/date/package.json](../../../../sources/nhn__tui.calendar/libs/date/package.json) | config signal |
| config | [apps/vue-calendar/package.json](../../../../sources/nhn__tui.calendar/apps/vue-calendar/package.json) | config signal |
| config | [apps/react-calendar/package.json](../../../../sources/nhn__tui.calendar/apps/react-calendar/package.json) | config signal |
| docs | [README.md](../../../../sources/nhn__tui.calendar/README.md) | docs signal |
| docs | [docs/COMMIT_MESSAGE_CONVENTION.md](../../../../sources/nhn__tui.calendar/docs/COMMIT_MESSAGE_CONVENTION.md) | docs signal |
| docs | [docs/ISSUE_TEMPLATE.md](../../../../sources/nhn__tui.calendar/docs/ISSUE_TEMPLATE.md) | docs signal |
| docs | [docs/PULL_REQUEST_TEMPLATE.md](../../../../sources/nhn__tui.calendar/docs/PULL_REQUEST_TEMPLATE.md) | docs signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 328 | [libs/date/src/index.js](../../../../sources/nhn__tui.calendar/libs/date/src/index.js)<br>[apps/vue-calendar/src/Calendar.js](../../../../sources/nhn__tui.calendar/apps/vue-calendar/src/Calendar.js)<br>[apps/vue-calendar/example/main.js](../../../../sources/nhn__tui.calendar/apps/vue-calendar/example/main.js)<br>[apps/react-calendar/src/index.tsx](../../../../sources/nhn__tui.calendar/apps/react-calendar/src/index.tsx)<br>[apps/react-calendar/src/isEqual.ts](../../../../sources/nhn__tui.calendar/apps/react-calendar/src/isEqual.ts)<br>[apps/react-calendar/example/main.tsx](../../../../sources/nhn__tui.calendar/apps/react-calendar/example/main.tsx)<br>[apps/calendar/src/calendarContainer.tsx](../../../../sources/nhn__tui.calendar/apps/calendar/src/calendarContainer.tsx)<br>[apps/calendar/src/index.ts](../../../../sources/nhn__tui.calendar/apps/calendar/src/index.ts) |
| agentRuntime | 36 | [apps/calendar/src/hooks/timezone/useEventsWithTimezone.ts](../../../../sources/nhn__tui.calendar/apps/calendar/src/hooks/timezone/useEventsWithTimezone.ts)<br>[apps/calendar/src/hooks/timezone/usePrimaryTimezone.ts](../../../../sources/nhn__tui.calendar/apps/calendar/src/hooks/timezone/usePrimaryTimezone.ts)<br>[apps/calendar/src/hooks/timezone/useTZConverter.spec.ts](../../../../sources/nhn__tui.calendar/apps/calendar/src/hooks/timezone/useTZConverter.spec.ts)<br>[apps/calendar/src/hooks/timezone/useTZConverter.ts](../../../../sources/nhn__tui.calendar/apps/calendar/src/hooks/timezone/useTZConverter.ts)<br>[apps/calendar/src/hooks/timeGrid/useTimeGridEventMove.spec.tsx](../../../../sources/nhn__tui.calendar/apps/calendar/src/hooks/timeGrid/useTimeGridEventMove.spec.tsx)<br>[apps/calendar/src/hooks/timeGrid/useTimeGridEventMove.ts](../../../../sources/nhn__tui.calendar/apps/calendar/src/hooks/timeGrid/useTimeGridEventMove.ts)<br>[apps/calendar/src/hooks/timeGrid/useTimeGridEventResize.ts](../../../../sources/nhn__tui.calendar/apps/calendar/src/hooks/timeGrid/useTimeGridEventResize.ts)<br>[apps/calendar/src/hooks/timeGrid/useTimeGridScrollSync.ts](../../../../sources/nhn__tui.calendar/apps/calendar/src/hooks/timeGrid/useTimeGridScrollSync.ts) |
| mcp | 0 | not obvious |
| retrieval | 18 | [libs/date/index.d.ts](../../../../sources/nhn__tui.calendar/libs/date/index.d.ts)<br>[libs/date/src/index.js](../../../../sources/nhn__tui.calendar/libs/date/src/index.js)<br>[apps/vue-calendar/index.d.ts](../../../../sources/nhn__tui.calendar/apps/vue-calendar/index.d.ts)<br>[apps/vue-calendar/example/index.html](../../../../sources/nhn__tui.calendar/apps/vue-calendar/example/index.html)<br>[apps/react-calendar/src/index.tsx](../../../../sources/nhn__tui.calendar/apps/react-calendar/src/index.tsx)<br>[apps/react-calendar/example/index.html](../../../../sources/nhn__tui.calendar/apps/react-calendar/example/index.html)<br>[apps/calendar/src/index.ts](../../../../sources/nhn__tui.calendar/apps/calendar/src/index.ts)<br>[apps/calendar/src/template/index.ts](../../../../sources/nhn__tui.calendar/apps/calendar/src/template/index.ts) |
| spec | 50 | [libs/date/test/localDate.spec.js](../../../../sources/nhn__tui.calendar/libs/date/test/localDate.spec.js)<br>[libs/date/test/momentDate.moment-timezone.spec.js](../../../../sources/nhn__tui.calendar/libs/date/test/momentDate.moment-timezone.spec.js)<br>[libs/date/test/momentDate.moment.spec.js](../../../../sources/nhn__tui.calendar/libs/date/test/momentDate.moment.spec.js)<br>[libs/date/test/utcDate.spec.js](../../../../sources/nhn__tui.calendar/libs/date/test/utcDate.spec.js)<br>[apps/calendar/src/utils/array.spec.ts](../../../../sources/nhn__tui.calendar/apps/calendar/src/utils/array.spec.ts)<br>[apps/calendar/src/utils/collection.spec.ts](../../../../sources/nhn__tui.calendar/apps/calendar/src/utils/collection.spec.ts)<br>[apps/calendar/src/utils/dom.spec.ts](../../../../sources/nhn__tui.calendar/apps/calendar/src/utils/dom.spec.ts)<br>[apps/calendar/src/utils/math.spec.ts](../../../../sources/nhn__tui.calendar/apps/calendar/src/utils/math.spec.ts) |
| eval | 57 | [libs/date/test/localDate.spec.js](../../../../sources/nhn__tui.calendar/libs/date/test/localDate.spec.js)<br>[libs/date/test/momentDate.moment-timezone.spec.js](../../../../sources/nhn__tui.calendar/libs/date/test/momentDate.moment-timezone.spec.js)<br>[libs/date/test/momentDate.moment.spec.js](../../../../sources/nhn__tui.calendar/libs/date/test/momentDate.moment.spec.js)<br>[libs/date/test/utcDate.spec.js](../../../../sources/nhn__tui.calendar/libs/date/test/utcDate.spec.js)<br>[apps/calendar/tsconfig.test.json](../../../../sources/nhn__tui.calendar/apps/calendar/tsconfig.test.json)<br>[apps/calendar/src/utils/array.spec.ts](../../../../sources/nhn__tui.calendar/apps/calendar/src/utils/array.spec.ts)<br>[apps/calendar/src/utils/collection.spec.ts](../../../../sources/nhn__tui.calendar/apps/calendar/src/utils/collection.spec.ts)<br>[apps/calendar/src/utils/dom.spec.ts](../../../../sources/nhn__tui.calendar/apps/calendar/src/utils/dom.spec.ts) |
| security | 0 | not obvious |
| ci | 4 | [.github/workflows/publish-calendar.yml](../../../../sources/nhn__tui.calendar/.github/workflows/publish-calendar.yml)<br>[.github/workflows/publish-docs.yml](../../../../sources/nhn__tui.calendar/.github/workflows/publish-docs.yml)<br>[.github/workflows/publish-wrappers.yml](../../../../sources/nhn__tui.calendar/.github/workflows/publish-wrappers.yml)<br>[.github/workflows/test.yml](../../../../sources/nhn__tui.calendar/.github/workflows/test.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 174 | [README.md](../../../../sources/nhn__tui.calendar/README.md)<br>[docs/COMMIT_MESSAGE_CONVENTION.md](../../../../sources/nhn__tui.calendar/docs/COMMIT_MESSAGE_CONVENTION.md)<br>[docs/ISSUE_TEMPLATE.md](../../../../sources/nhn__tui.calendar/docs/ISSUE_TEMPLATE.md)<br>[docs/PULL_REQUEST_TEMPLATE.md](../../../../sources/nhn__tui.calendar/docs/PULL_REQUEST_TEMPLATE.md)<br>[docs/README.md](../../../../sources/nhn__tui.calendar/docs/README.md)<br>[docs/ko/README.md](../../../../sources/nhn__tui.calendar/docs/ko/README.md)<br>[docs/ko/guide/getting-started.md](../../../../sources/nhn__tui.calendar/docs/ko/guide/getting-started.md)<br>[docs/ko/guide/migration-guide-v2.md](../../../../sources/nhn__tui.calendar/docs/ko/guide/migration-guide-v2.md) |
| config | 7 | [package.json](../../../../sources/nhn__tui.calendar/package.json)<br>[libs/date/package.json](../../../../sources/nhn__tui.calendar/libs/date/package.json)<br>[apps/vue-calendar/package.json](../../../../sources/nhn__tui.calendar/apps/vue-calendar/package.json)<br>[apps/react-calendar/package.json](../../../../sources/nhn__tui.calendar/apps/react-calendar/package.json)<br>[apps/react-calendar/tsconfig.json](../../../../sources/nhn__tui.calendar/apps/react-calendar/tsconfig.json)<br>[apps/calendar/package.json](../../../../sources/nhn__tui.calendar/apps/calendar/package.json)<br>[apps/calendar/tsconfig.json](../../../../sources/nhn__tui.calendar/apps/calendar/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 57 | [libs/date/test/localDate.spec.js](../../../../sources/nhn__tui.calendar/libs/date/test/localDate.spec.js)<br>[libs/date/test/momentDate.moment-timezone.spec.js](../../../../sources/nhn__tui.calendar/libs/date/test/momentDate.moment-timezone.spec.js)<br>[libs/date/test/momentDate.moment.spec.js](../../../../sources/nhn__tui.calendar/libs/date/test/momentDate.moment.spec.js)<br>[libs/date/test/utcDate.spec.js](../../../../sources/nhn__tui.calendar/libs/date/test/utcDate.spec.js)<br>[apps/calendar/tsconfig.test.json](../../../../sources/nhn__tui.calendar/apps/calendar/tsconfig.test.json)<br>[apps/calendar/src/utils/array.spec.ts](../../../../sources/nhn__tui.calendar/apps/calendar/src/utils/array.spec.ts) |
| CI workflows | 4 | [.github/workflows/publish-calendar.yml](../../../../sources/nhn__tui.calendar/.github/workflows/publish-calendar.yml)<br>[.github/workflows/publish-docs.yml](../../../../sources/nhn__tui.calendar/.github/workflows/publish-docs.yml)<br>[.github/workflows/publish-wrappers.yml](../../../../sources/nhn__tui.calendar/.github/workflows/publish-wrappers.yml)<br>[.github/workflows/test.yml](../../../../sources/nhn__tui.calendar/.github/workflows/test.yml) |
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

1. Start from key references: `libs/date/src/index.js`, `apps/vue-calendar/src/Calendar.js`, `apps/vue-calendar/example/main.js`.
2. Trace execution through entrypoints: `libs/date/src/index.js`, `apps/vue-calendar/src/Calendar.js`, `apps/vue-calendar/example/main.js`.
3. Map agent/tool runtime through: `apps/calendar/src/hooks/timezone/useEventsWithTimezone.ts`, `apps/calendar/src/hooks/timezone/usePrimaryTimezone.ts`, `apps/calendar/src/hooks/timezone/useTZConverter.spec.ts`.
4. Inspect retrieval/memory/indexing through: `libs/date/index.d.ts`, `libs/date/src/index.js`, `apps/vue-calendar/index.d.ts`.
5. Verify behavior through test/eval files: `libs/date/test/localDate.spec.js`, `libs/date/test/momentDate.moment-timezone.spec.js`, `libs/date/test/momentDate.moment.spec.js`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 🍞📅A JavaScript calendar that has everything you need.. 핵심 구조 신호는 TypeScript, package.json, README.md, LICENSE, react, playwright이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, needs deeper structural scan입니다.
