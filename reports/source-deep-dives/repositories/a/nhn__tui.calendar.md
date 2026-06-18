# nhn/tui.calendar 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

🍞📅A JavaScript calendar that has everything you need.

## 요약

- 조사 단위: `sources/nhn__tui.calendar` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 680 files, 98 directories, depth score 108, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 entrypoints=libs/date/src/index.js, apps/vue-calendar/src/Calendar.js, apps/vue-calendar/example/main.js이고, 의존성 단서는 react, playwright, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

## 바로가기

| 이동 | 여기서 볼 것 |
| --- | --- |
| [전체 시작 README](../../../../README.md) | 레포 전체 목적, 핵심 카테고리, 읽는 순서. |
| [전체 보고서 읽기 지도](../../../README.md) | 모든 보고서의 시작점, 주제, 폴더 지도. |
| [주제별 보고서 목차](../../../by-topic/README.md) | 조사 질문 기준으로 보고서를 찾는 입구. |
| [표/CSV 목차](../../../tables/README.md) | 표로 빠르게 훑고 CSV로 비교하는 입구. |
| [레포별 인사이트](../../../repository-insights/README.md) | 레포별 총평과 위험 신호. |
| [소스 딥다이브](../../README.md) | 주제별 소스 경로 근거. |
| [레포별 소스 딥다이브](../README.md) | 로컬 클론 1개당 1개 Markdown 딥다이브. |
| [소스 트렌드 인사이트](../../../source-insights/README.md) | 카테고리별 트렌드와 레포별 특징 비교. |


## 레포 컨텍스트

| 항목 | 값 |
| --- | --- |
| 레포 | nhn/tui.calendar |
| 주제 | 일반 AI 오픈소스 / 일반 AI 오픈소스 |
| Region | korea |
| Language | TypeScript |
| Stars | 12655 |
| Forks | 1350 |
| License | MIT |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/nhn__tui.calendar](../../../../sources/nhn__tui.calendar) |
| 기존 보고서 | [reports/korea-trending/repositories/nhn__tui.calendar.md](../../../korea-trending/repositories/nhn__tui.calendar.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 680 / 98 |
| 관측 최대 깊이 | 6 |
| 상위 디렉터리 | .github, .husky, apps, docs, libs, scripts |
| 상위 확장자 | .png: 213, .ts: 187, .tsx: 112, .md: 39, .js: 38, .css: 27, .html: 18, .json: 17, (none): 11, .gif: 7, .yml: 5, .eot: 1 |
| 소스 패턴 | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, ui/extension surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
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


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
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


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | react |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | playwright |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 328 | [libs/date/src/index.js](../../../../sources/nhn__tui.calendar/libs/date/src/index.js)<br>[apps/vue-calendar/src/Calendar.js](../../../../sources/nhn__tui.calendar/apps/vue-calendar/src/Calendar.js)<br>[apps/vue-calendar/example/main.js](../../../../sources/nhn__tui.calendar/apps/vue-calendar/example/main.js)<br>[apps/react-calendar/src/index.tsx](../../../../sources/nhn__tui.calendar/apps/react-calendar/src/index.tsx)<br>[apps/react-calendar/src/isEqual.ts](../../../../sources/nhn__tui.calendar/apps/react-calendar/src/isEqual.ts)<br>[apps/react-calendar/example/main.tsx](../../../../sources/nhn__tui.calendar/apps/react-calendar/example/main.tsx)<br>[apps/calendar/src/calendarContainer.tsx](../../../../sources/nhn__tui.calendar/apps/calendar/src/calendarContainer.tsx)<br>[apps/calendar/src/index.ts](../../../../sources/nhn__tui.calendar/apps/calendar/src/index.ts) |
| agentRuntime | 36 | [apps/calendar/src/hooks/timezone/useEventsWithTimezone.ts](../../../../sources/nhn__tui.calendar/apps/calendar/src/hooks/timezone/useEventsWithTimezone.ts)<br>[apps/calendar/src/hooks/timezone/usePrimaryTimezone.ts](../../../../sources/nhn__tui.calendar/apps/calendar/src/hooks/timezone/usePrimaryTimezone.ts)<br>[apps/calendar/src/hooks/timezone/useTZConverter.spec.ts](../../../../sources/nhn__tui.calendar/apps/calendar/src/hooks/timezone/useTZConverter.spec.ts)<br>[apps/calendar/src/hooks/timezone/useTZConverter.ts](../../../../sources/nhn__tui.calendar/apps/calendar/src/hooks/timezone/useTZConverter.ts)<br>[apps/calendar/src/hooks/timeGrid/useTimeGridEventMove.spec.tsx](../../../../sources/nhn__tui.calendar/apps/calendar/src/hooks/timeGrid/useTimeGridEventMove.spec.tsx)<br>[apps/calendar/src/hooks/timeGrid/useTimeGridEventMove.ts](../../../../sources/nhn__tui.calendar/apps/calendar/src/hooks/timeGrid/useTimeGridEventMove.ts)<br>[apps/calendar/src/hooks/timeGrid/useTimeGridEventResize.ts](../../../../sources/nhn__tui.calendar/apps/calendar/src/hooks/timeGrid/useTimeGridEventResize.ts)<br>[apps/calendar/src/hooks/timeGrid/useTimeGridScrollSync.ts](../../../../sources/nhn__tui.calendar/apps/calendar/src/hooks/timeGrid/useTimeGridScrollSync.ts) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 18 | [libs/date/index.d.ts](../../../../sources/nhn__tui.calendar/libs/date/index.d.ts)<br>[libs/date/src/index.js](../../../../sources/nhn__tui.calendar/libs/date/src/index.js)<br>[apps/vue-calendar/index.d.ts](../../../../sources/nhn__tui.calendar/apps/vue-calendar/index.d.ts)<br>[apps/vue-calendar/example/index.html](../../../../sources/nhn__tui.calendar/apps/vue-calendar/example/index.html)<br>[apps/react-calendar/src/index.tsx](../../../../sources/nhn__tui.calendar/apps/react-calendar/src/index.tsx)<br>[apps/react-calendar/example/index.html](../../../../sources/nhn__tui.calendar/apps/react-calendar/example/index.html)<br>[apps/calendar/src/index.ts](../../../../sources/nhn__tui.calendar/apps/calendar/src/index.ts)<br>[apps/calendar/src/template/index.ts](../../../../sources/nhn__tui.calendar/apps/calendar/src/template/index.ts) |
| spec | 50 | [libs/date/test/localDate.spec.js](../../../../sources/nhn__tui.calendar/libs/date/test/localDate.spec.js)<br>[libs/date/test/momentDate.moment-timezone.spec.js](../../../../sources/nhn__tui.calendar/libs/date/test/momentDate.moment-timezone.spec.js)<br>[libs/date/test/momentDate.moment.spec.js](../../../../sources/nhn__tui.calendar/libs/date/test/momentDate.moment.spec.js)<br>[libs/date/test/utcDate.spec.js](../../../../sources/nhn__tui.calendar/libs/date/test/utcDate.spec.js)<br>[apps/calendar/src/utils/array.spec.ts](../../../../sources/nhn__tui.calendar/apps/calendar/src/utils/array.spec.ts)<br>[apps/calendar/src/utils/collection.spec.ts](../../../../sources/nhn__tui.calendar/apps/calendar/src/utils/collection.spec.ts)<br>[apps/calendar/src/utils/dom.spec.ts](../../../../sources/nhn__tui.calendar/apps/calendar/src/utils/dom.spec.ts)<br>[apps/calendar/src/utils/math.spec.ts](../../../../sources/nhn__tui.calendar/apps/calendar/src/utils/math.spec.ts) |
| eval | 57 | [libs/date/test/localDate.spec.js](../../../../sources/nhn__tui.calendar/libs/date/test/localDate.spec.js)<br>[libs/date/test/momentDate.moment-timezone.spec.js](../../../../sources/nhn__tui.calendar/libs/date/test/momentDate.moment-timezone.spec.js)<br>[libs/date/test/momentDate.moment.spec.js](../../../../sources/nhn__tui.calendar/libs/date/test/momentDate.moment.spec.js)<br>[libs/date/test/utcDate.spec.js](../../../../sources/nhn__tui.calendar/libs/date/test/utcDate.spec.js)<br>[apps/calendar/tsconfig.test.json](../../../../sources/nhn__tui.calendar/apps/calendar/tsconfig.test.json)<br>[apps/calendar/src/utils/array.spec.ts](../../../../sources/nhn__tui.calendar/apps/calendar/src/utils/array.spec.ts)<br>[apps/calendar/src/utils/collection.spec.ts](../../../../sources/nhn__tui.calendar/apps/calendar/src/utils/collection.spec.ts)<br>[apps/calendar/src/utils/dom.spec.ts](../../../../sources/nhn__tui.calendar/apps/calendar/src/utils/dom.spec.ts) |
| security | 0 | 명확하지 않음 |
| ci | 4 | [.github/workflows/publish-calendar.yml](../../../../sources/nhn__tui.calendar/.github/workflows/publish-calendar.yml)<br>[.github/workflows/publish-docs.yml](../../../../sources/nhn__tui.calendar/.github/workflows/publish-docs.yml)<br>[.github/workflows/publish-wrappers.yml](../../../../sources/nhn__tui.calendar/.github/workflows/publish-wrappers.yml)<br>[.github/workflows/test.yml](../../../../sources/nhn__tui.calendar/.github/workflows/test.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 174 | [README.md](../../../../sources/nhn__tui.calendar/README.md)<br>[docs/COMMIT_MESSAGE_CONVENTION.md](../../../../sources/nhn__tui.calendar/docs/COMMIT_MESSAGE_CONVENTION.md)<br>[docs/ISSUE_TEMPLATE.md](../../../../sources/nhn__tui.calendar/docs/ISSUE_TEMPLATE.md)<br>[docs/PULL_REQUEST_TEMPLATE.md](../../../../sources/nhn__tui.calendar/docs/PULL_REQUEST_TEMPLATE.md)<br>[docs/README.md](../../../../sources/nhn__tui.calendar/docs/README.md)<br>[docs/ko/README.md](../../../../sources/nhn__tui.calendar/docs/ko/README.md)<br>[docs/ko/guide/getting-started.md](../../../../sources/nhn__tui.calendar/docs/ko/guide/getting-started.md)<br>[docs/ko/guide/migration-guide-v2.md](../../../../sources/nhn__tui.calendar/docs/ko/guide/migration-guide-v2.md) |
| config | 7 | [package.json](../../../../sources/nhn__tui.calendar/package.json)<br>[libs/date/package.json](../../../../sources/nhn__tui.calendar/libs/date/package.json)<br>[apps/vue-calendar/package.json](../../../../sources/nhn__tui.calendar/apps/vue-calendar/package.json)<br>[apps/react-calendar/package.json](../../../../sources/nhn__tui.calendar/apps/react-calendar/package.json)<br>[apps/react-calendar/tsconfig.json](../../../../sources/nhn__tui.calendar/apps/react-calendar/tsconfig.json)<br>[apps/calendar/package.json](../../../../sources/nhn__tui.calendar/apps/calendar/package.json)<br>[apps/calendar/tsconfig.json](../../../../sources/nhn__tui.calendar/apps/calendar/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 57 | [libs/date/test/localDate.spec.js](../../../../sources/nhn__tui.calendar/libs/date/test/localDate.spec.js)<br>[libs/date/test/momentDate.moment-timezone.spec.js](../../../../sources/nhn__tui.calendar/libs/date/test/momentDate.moment-timezone.spec.js)<br>[libs/date/test/momentDate.moment.spec.js](../../../../sources/nhn__tui.calendar/libs/date/test/momentDate.moment.spec.js)<br>[libs/date/test/utcDate.spec.js](../../../../sources/nhn__tui.calendar/libs/date/test/utcDate.spec.js)<br>[apps/calendar/tsconfig.test.json](../../../../sources/nhn__tui.calendar/apps/calendar/tsconfig.test.json)<br>[apps/calendar/src/utils/array.spec.ts](../../../../sources/nhn__tui.calendar/apps/calendar/src/utils/array.spec.ts) |
| CI workflow | 4 | [.github/workflows/publish-calendar.yml](../../../../sources/nhn__tui.calendar/.github/workflows/publish-calendar.yml)<br>[.github/workflows/publish-docs.yml](../../../../sources/nhn__tui.calendar/.github/workflows/publish-docs.yml)<br>[.github/workflows/publish-wrappers.yml](../../../../sources/nhn__tui.calendar/.github/workflows/publish-wrappers.yml)<br>[.github/workflows/test.yml](../../../../sources/nhn__tui.calendar/.github/workflows/test.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `libs/date/src/index.js`, `apps/vue-calendar/src/Calendar.js`, `apps/vue-calendar/example/main.js`.
2. entrypoint를 따라 실행 흐름 확인: `libs/date/src/index.js`, `apps/vue-calendar/src/Calendar.js`, `apps/vue-calendar/example/main.js`.
3. agent/tool runtime 매핑: `apps/calendar/src/hooks/timezone/useEventsWithTimezone.ts`, `apps/calendar/src/hooks/timezone/usePrimaryTimezone.ts`, `apps/calendar/src/hooks/timezone/useTZConverter.spec.ts`.
4. retrieval/memory/indexing 확인: `libs/date/index.d.ts`, `libs/date/src/index.js`, `apps/vue-calendar/index.d.ts`.
5. test/eval 파일로 동작 검증: `libs/date/test/localDate.spec.js`, `libs/date/test/momentDate.moment-timezone.spec.js`, `libs/date/test/momentDate.moment.spec.js`.

## 기존 레포 인사이트

일반 AI 오픈소스 관점에서 🍞📅A JavaScript calendar that has everything you need.. 핵심 구조 신호는 TypeScript, package.json, README.md, LICENSE, react, playwright이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 더 깊은 구조 스캔 필요입니다.
