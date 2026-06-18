# toss/h6s 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

Serve headless component development kit for React production apps

## 요약

- 조사 단위: `sources/toss__h6s` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 2,985 files, 120 directories, depth score 114, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 entrypoints=packages/table/src/index.ts, packages/calendar/src/index.ts, docs/calendar/components/Main.tsx이고, 의존성 단서는 react, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | toss/h6s |
| 주제 | 일반 AI 오픈소스 / 일반 AI 오픈소스 |
| Region | korea |
| Language | TypeScript |
| Stars | 316 |
| Forks | 27 |
| License | MIT |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/toss__h6s](../../../../sources/toss__h6s) |
| 기존 보고서 | [reports/korea-trending/repositories/toss__h6s.md](../../../korea-trending/repositories/toss__h6s.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 2985 / 120 |
| 관측 최대 깊이 | 10 |
| 상위 디렉터리 | .changeset, .codesandbox, .github, .husky, .storybook, .yarn, assets, docs, examples, packages, scripts, website |
| 상위 확장자 | .zip: 2677, .ts: 97, .tsx: 59, .md: 23, .json: 22, .js: 16, .mdx: 16, .css: 15, .yml: 14, (none): 13, .html: 10, .png: 10 |
| 소스 패턴 | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
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


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
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
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 7 | [packages/table/src/index.ts](../../../../sources/toss__h6s/packages/table/src/index.ts)<br>[packages/calendar/src/index.ts](../../../../sources/toss__h6s/packages/calendar/src/index.ts)<br>[docs/calendar/components/Main.tsx](../../../../sources/toss__h6s/docs/calendar/components/Main.tsx)<br>[.yarn/sdks/typescript/bin/tsc](../../../../sources/toss__h6s/.yarn/sdks/typescript/bin/tsc)<br>[.yarn/sdks/typescript/bin/tsserver](../../../../sources/toss__h6s/.yarn/sdks/typescript/bin/tsserver)<br>[.yarn/sdks/prettier/bin/prettier.cjs](../../../../sources/toss__h6s/.yarn/sdks/prettier/bin/prettier.cjs)<br>[.storybook/main.js](../../../../sources/toss__h6s/.storybook/main.js) |
| agentRuntime | 6 | [website/src/hooks/useHover.ts](../../../../sources/toss__h6s/website/src/hooks/useHover.ts)<br>[packages/calendar/src/hooks/useIsMounted.test.tsx](../../../../sources/toss__h6s/packages/calendar/src/hooks/useIsMounted.test.tsx)<br>[packages/calendar/src/hooks/useIsMounted.tsx](../../../../sources/toss__h6s/packages/calendar/src/hooks/useIsMounted.tsx)<br>[.yarn/cache/agent-base-npm-5.1.1-d451a4ad62-82954db5dc.zip](../../../../sources/toss__h6s/.yarn/cache/agent-base-npm-5.1.1-d451a4ad62-82954db5dc.zip)<br>[.yarn/cache/agent-base-npm-6.0.2-428f325a93-21fb903e09.zip](../../../../sources/toss__h6s/.yarn/cache/agent-base-npm-6.0.2-428f325a93-21fb903e09.zip)<br>[.yarn/cache/agent-base-npm-7.1.0-4b12ba5111-f7828f9914.zip](../../../../sources/toss__h6s/.yarn/cache/agent-base-npm-7.1.0-4b12ba5111-f7828f9914.zip) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 30 | [website/src/pages/index.tsx](../../../../sources/toss__h6s/website/src/pages/index.tsx)<br>[packages/table/src/index.ts](../../../../sources/toss__h6s/packages/table/src/index.ts)<br>[packages/table/src/types/index.ts](../../../../sources/toss__h6s/packages/table/src/types/index.ts)<br>[packages/table/src/react/index.ts](../../../../sources/toss__h6s/packages/table/src/react/index.ts)<br>[packages/calendar/src/index.ts](../../../../sources/toss__h6s/packages/calendar/src/index.ts)<br>[packages/calendar/src/utils/index.ts](../../../../sources/toss__h6s/packages/calendar/src/utils/index.ts)<br>[packages/calendar/src/plugins/index.ts](../../../../sources/toss__h6s/packages/calendar/src/plugins/index.ts)<br>[packages/calendar/src/models/index.ts](../../../../sources/toss__h6s/packages/calendar/src/models/index.ts) |
| spec | 2 | [.yarn/cache/@aw-web-design-x-default-browser-npm-1.4.126-91a892f901-f7111a6f00.zip](../../../../sources/toss__h6s/.yarn/cache/@aw-web-design-x-default-browser-npm-1.4.126-91a892f901-f7111a6f00.zip)<br>[.yarn/cache/system-architecture-npm-0.1.0-d273b78665-ca0dd793c4.zip](../../../../sources/toss__h6s/.yarn/cache/system-architecture-npm-0.1.0-d273b78665-ca0dd793c4.zip) |
| eval | 29 | [packages/table/src/helpers/composeDataset.test.ts](../../../../sources/toss__h6s/packages/table/src/helpers/composeDataset.test.ts)<br>[packages/table/src/core/TableCore.test.ts](../../../../sources/toss__h6s/packages/table/src/core/TableCore.test.ts)<br>[packages/table/src/core/tfoot/buildFooters.test.ts](../../../../sources/toss__h6s/packages/table/src/core/tfoot/buildFooters.test.ts)<br>[packages/calendar/src/useCalendar.test.ts](../../../../sources/toss__h6s/packages/calendar/src/useCalendar.test.ts)<br>[packages/calendar/src/useSelection.test.ts](../../../../sources/toss__h6s/packages/calendar/src/useSelection.test.ts)<br>[packages/calendar/src/utils/addDays.test.ts](../../../../sources/toss__h6s/packages/calendar/src/utils/addDays.test.ts)<br>[packages/calendar/src/utils/arrayOf.test.ts](../../../../sources/toss__h6s/packages/calendar/src/utils/arrayOf.test.ts)<br>[packages/calendar/src/utils/getDaysInMonth.test.ts](../../../../sources/toss__h6s/packages/calendar/src/utils/getDaysInMonth.test.ts) |
| security | 2 | [SECURITY.md](../../../../sources/toss__h6s/SECURITY.md)<br>[.yarn/cache/registry-auth-token-npm-5.0.2-26eb592d5d-0d7683b71e.zip](../../../../sources/toss__h6s/.yarn/cache/registry-auth-token-npm-5.0.2-26eb592d5d-0d7683b71e.zip) |
| ci | 8 | [.github/workflows/auto-assign-action.yml](../../../../sources/toss__h6s/.github/workflows/auto-assign-action.yml)<br>[.github/workflows/build-examples.yml](../../../../sources/toss__h6s/.github/workflows/build-examples.yml)<br>[.github/workflows/build-website.yml](../../../../sources/toss__h6s/.github/workflows/build-website.yml)<br>[.github/workflows/ci.yml](../../../../sources/toss__h6s/.github/workflows/ci.yml)<br>[.github/workflows/labeler.yml](../../../../sources/toss__h6s/.github/workflows/labeler.yml)<br>[.github/workflows/release.yml](../../../../sources/toss__h6s/.github/workflows/release.yml)<br>[.github/workflows/sanity.yml](../../../../sources/toss__h6s/.github/workflows/sanity.yml)<br>[.github/workflows/size-label.yml](../../../../sources/toss__h6s/.github/workflows/size-label.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 134 | [README-ko_kr.md](../../../../sources/toss__h6s/README-ko_kr.md)<br>[README.md](../../../../sources/toss__h6s/README.md)<br>[website/.gitignore](../../../../sources/toss__h6s/website/.gitignore)<br>[website/babel.config.js](../../../../sources/toss__h6s/website/babel.config.js)<br>[website/CHANGELOG.md](../../../../sources/toss__h6s/website/CHANGELOG.md)<br>[website/docusaurus.config.js](../../../../sources/toss__h6s/website/docusaurus.config.js)<br>[website/netlify.toml](../../../../sources/toss__h6s/website/netlify.toml)<br>[website/package.json](../../../../sources/toss__h6s/website/package.json) |
| config | 14 | [package.json](../../../../sources/toss__h6s/package.json)<br>[tsconfig.json](../../../../sources/toss__h6s/tsconfig.json)<br>[website/package.json](../../../../sources/toss__h6s/website/package.json)<br>[website/tsconfig.json](../../../../sources/toss__h6s/website/tsconfig.json)<br>[packages/table/package.json](../../../../sources/toss__h6s/packages/table/package.json)<br>[packages/table/tsconfig.json](../../../../sources/toss__h6s/packages/table/tsconfig.json)<br>[packages/calendar/package.json](../../../../sources/toss__h6s/packages/calendar/package.json)<br>[packages/calendar/tsconfig.json](../../../../sources/toss__h6s/packages/calendar/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 29 | [packages/table/src/helpers/composeDataset.test.ts](../../../../sources/toss__h6s/packages/table/src/helpers/composeDataset.test.ts)<br>[packages/table/src/core/TableCore.test.ts](../../../../sources/toss__h6s/packages/table/src/core/TableCore.test.ts)<br>[packages/table/src/core/tfoot/buildFooters.test.ts](../../../../sources/toss__h6s/packages/table/src/core/tfoot/buildFooters.test.ts)<br>[packages/calendar/src/useCalendar.test.ts](../../../../sources/toss__h6s/packages/calendar/src/useCalendar.test.ts)<br>[packages/calendar/src/useSelection.test.ts](../../../../sources/toss__h6s/packages/calendar/src/useSelection.test.ts)<br>[packages/calendar/src/utils/addDays.test.ts](../../../../sources/toss__h6s/packages/calendar/src/utils/addDays.test.ts) |
| CI workflow | 8 | [.github/workflows/auto-assign-action.yml](../../../../sources/toss__h6s/.github/workflows/auto-assign-action.yml)<br>[.github/workflows/build-examples.yml](../../../../sources/toss__h6s/.github/workflows/build-examples.yml)<br>[.github/workflows/build-website.yml](../../../../sources/toss__h6s/.github/workflows/build-website.yml)<br>[.github/workflows/ci.yml](../../../../sources/toss__h6s/.github/workflows/ci.yml)<br>[.github/workflows/labeler.yml](../../../../sources/toss__h6s/.github/workflows/labeler.yml)<br>[.github/workflows/release.yml](../../../../sources/toss__h6s/.github/workflows/release.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 2 | [SECURITY.md](../../../../sources/toss__h6s/SECURITY.md)<br>[.yarn/cache/registry-auth-token-npm-5.0.2-26eb592d5d-0d7683b71e.zip](../../../../sources/toss__h6s/.yarn/cache/registry-auth-token-npm-5.0.2-26eb592d5d-0d7683b71e.zip) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `packages/table/src/index.ts`, `packages/calendar/src/index.ts`, `docs/calendar/components/Main.tsx`.
2. entrypoint를 따라 실행 흐름 확인: `packages/table/src/index.ts`, `packages/calendar/src/index.ts`, `docs/calendar/components/Main.tsx`.
3. agent/tool runtime 매핑: `website/src/hooks/useHover.ts`, `packages/calendar/src/hooks/useIsMounted.test.tsx`, `packages/calendar/src/hooks/useIsMounted.tsx`.
4. retrieval/memory/indexing 확인: `website/src/pages/index.tsx`, `packages/table/src/index.ts`, `packages/table/src/types/index.ts`.
5. test/eval 파일로 동작 검증: `packages/table/src/helpers/composeDataset.test.ts`, `packages/table/src/core/TableCore.test.ts`, `packages/table/src/core/tfoot/buildFooters.test.ts`.

## 기존 레포 인사이트

일반 AI 오픈소스 관점에서 Serve headless component development kit for React production apps. 핵심 구조 신호는 TypeScript, package.json, README.md, LICENSE, react, ci이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 더 깊은 구조 스캔 필요입니다.
