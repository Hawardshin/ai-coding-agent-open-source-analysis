# nhn/tui.chart 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

🍞📊 Beautiful chart for data visualization.

## 요약

- 조사 단위: `sources/nhn__tui.chart` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 620 files, 59 directories, depth score 102, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 monorepo/workspace, api/server, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 entrypoints=apps/vue-chart/src/base.js, apps/vue-chart/src/index.js, apps/shared/src/index.ts이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | nhn/tui.chart |
| 주제 | 일반 AI 오픈소스 / 일반 AI 오픈소스 |
| Region | korea |
| Language | TypeScript |
| Stars | 5403 |
| Forks | 318 |
| License | MIT |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/nhn__tui.chart](../../../../sources/nhn__tui.chart) |
| 기존 보고서 | [reports/korea-trending/repositories/nhn__tui.chart.md](../../../korea-trending/repositories/nhn__tui.chart.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 620 / 59 |
| 관측 최대 깊이 | 5 |
| 상위 디렉터리 | .github, apps, docs |
| 상위 확장자 | .ts: 291, .html: 174, .md: 74, .js: 30, .json: 28, .yml: 12, (none): 7, .css: 3, .tsx: 1 |
| 소스 패턴 | monorepo/workspace, api/server, retrieval/vector path, spec/docs-driven, eval/test harness, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| apps/chart | apps workspace | 89 |
| apps/map-chart | apps workspace | 46 |
| docs | documentation surface | 40 |
| apps/shared | apps workspace | 13 |
| apps/react-chart | apps workspace | 8 |
| apps/vue-chart | apps workspace | 7 |
| .github | ci surface | 1 |
| apps | source boundary | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| build | package.json | build | lerna run build |
| build | package.json | build:chart | lerna run --scope @toast-ui/chart build |
| build | package.json | build:react | lerna run --scope @toast-ui/react-chart build |
| build | package.json | build:vue | lerna run --scope @toast-ui/vue-chart build |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | 없음 |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| entrypoints | [apps/vue-chart/src/base.js](../../../../sources/nhn__tui.chart/apps/vue-chart/src/base.js) | entrypoints signal |
| entrypoints | [apps/vue-chart/src/index.js](../../../../sources/nhn__tui.chart/apps/vue-chart/src/index.js) | entrypoints signal |
| entrypoints | [apps/shared/src/index.ts](../../../../sources/nhn__tui.chart/apps/shared/src/index.ts) | entrypoints signal |
| entrypoints | [apps/shared/src/store/reactive.ts](../../../../sources/nhn__tui.chart/apps/shared/src/store/reactive.ts) | entrypoints signal |
| config | [package.json](../../../../sources/nhn__tui.chart/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/nhn__tui.chart/tsconfig.json) | config signal |
| config | [apps/vue-chart/package.json](../../../../sources/nhn__tui.chart/apps/vue-chart/package.json) | config signal |
| config | [apps/shared/package.json](../../../../sources/nhn__tui.chart/apps/shared/package.json) | config signal |
| docs | [README.md](../../../../sources/nhn__tui.chart/README.md) | docs signal |
| docs | [docs/COMMIT_MESSAGE_CONVENTION.md](../../../../sources/nhn__tui.chart/docs/COMMIT_MESSAGE_CONVENTION.md) | docs signal |
| docs | [docs/PULL_REQUEST_TEMPLATE](../../../../sources/nhn__tui.chart/docs/PULL_REQUEST_TEMPLATE) | docs signal |
| docs | [docs/README.md](../../../../sources/nhn__tui.chart/docs/README.md) | docs signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 171 | [apps/vue-chart/src/base.js](../../../../sources/nhn__tui.chart/apps/vue-chart/src/base.js)<br>[apps/vue-chart/src/index.js](../../../../sources/nhn__tui.chart/apps/vue-chart/src/index.js)<br>[apps/shared/src/index.ts](../../../../sources/nhn__tui.chart/apps/shared/src/index.ts)<br>[apps/shared/src/store/reactive.ts](../../../../sources/nhn__tui.chart/apps/shared/src/store/reactive.ts)<br>[apps/shared/src/helpers/color.ts](../../../../sources/nhn__tui.chart/apps/shared/src/helpers/color.ts)<br>[apps/shared/src/helpers/dom.ts](../../../../sources/nhn__tui.chart/apps/shared/src/helpers/dom.ts)<br>[apps/shared/src/helpers/eventEmitter.ts](../../../../sources/nhn__tui.chart/apps/shared/src/helpers/eventEmitter.ts)<br>[apps/shared/src/helpers/htmlSanitizer.ts](../../../../sources/nhn__tui.chart/apps/shared/src/helpers/htmlSanitizer.ts) |
| agentRuntime | 0 | 명확하지 않음 |
| mcp | 0 | 명확하지 않음 |
| retrieval | 15 | [apps/vue-chart/index.d.ts](../../../../sources/nhn__tui.chart/apps/vue-chart/index.d.ts)<br>[apps/vue-chart/src/index.js](../../../../sources/nhn__tui.chart/apps/vue-chart/src/index.js)<br>[apps/vue-chart/demo/index.html](../../../../sources/nhn__tui.chart/apps/vue-chart/demo/index.html)<br>[apps/vue-chart/demo/index.js](../../../../sources/nhn__tui.chart/apps/vue-chart/demo/index.js)<br>[apps/shared/types/index.d.ts](../../../../sources/nhn__tui.chart/apps/shared/types/index.d.ts)<br>[apps/shared/src/index.ts](../../../../sources/nhn__tui.chart/apps/shared/src/index.ts)<br>[apps/react-chart/index.d.ts](../../../../sources/nhn__tui.chart/apps/react-chart/index.d.ts)<br>[apps/react-chart/src/index.ts](../../../../sources/nhn__tui.chart/apps/react-chart/src/index.ts) |
| spec | 58 | [apps/map-chart/tests/store/layout.spec.ts](../../../../sources/nhn__tui.chart/apps/map-chart/tests/store/layout.spec.ts)<br>[apps/map-chart/tests/store/legend.spec.ts](../../../../sources/nhn__tui.chart/apps/map-chart/tests/store/legend.spec.ts)<br>[apps/map-chart/tests/store/root.spec.ts](../../../../sources/nhn__tui.chart/apps/map-chart/tests/store/root.spec.ts)<br>[apps/map-chart/tests/store/scale.spec.ts](../../../../sources/nhn__tui.chart/apps/map-chart/tests/store/scale.spec.ts)<br>[apps/map-chart/tests/store/series.spec.ts](../../../../sources/nhn__tui.chart/apps/map-chart/tests/store/series.spec.ts)<br>[apps/map-chart/tests/store/theme.spec.ts](../../../../sources/nhn__tui.chart/apps/map-chart/tests/store/theme.spec.ts)<br>[apps/map-chart/tests/helpers/tooltip.spec.ts](../../../../sources/nhn__tui.chart/apps/map-chart/tests/helpers/tooltip.spec.ts)<br>[apps/chart/tests/store/axes.spec.ts](../../../../sources/nhn__tui.chart/apps/chart/tests/store/axes.spec.ts) |
| eval | 60 | [apps/map-chart/tests/store/layout.spec.ts](../../../../sources/nhn__tui.chart/apps/map-chart/tests/store/layout.spec.ts)<br>[apps/map-chart/tests/store/legend.spec.ts](../../../../sources/nhn__tui.chart/apps/map-chart/tests/store/legend.spec.ts)<br>[apps/map-chart/tests/store/root.spec.ts](../../../../sources/nhn__tui.chart/apps/map-chart/tests/store/root.spec.ts)<br>[apps/map-chart/tests/store/scale.spec.ts](../../../../sources/nhn__tui.chart/apps/map-chart/tests/store/scale.spec.ts)<br>[apps/map-chart/tests/store/series.spec.ts](../../../../sources/nhn__tui.chart/apps/map-chart/tests/store/series.spec.ts)<br>[apps/map-chart/tests/store/theme.spec.ts](../../../../sources/nhn__tui.chart/apps/map-chart/tests/store/theme.spec.ts)<br>[apps/map-chart/tests/helpers/tooltip.spec.ts](../../../../sources/nhn__tui.chart/apps/map-chart/tests/helpers/tooltip.spec.ts)<br>[apps/chart/tests/store/axes.spec.ts](../../../../sources/nhn__tui.chart/apps/chart/tests/store/axes.spec.ts) |
| security | 0 | 명확하지 않음 |
| ci | 9 | [.github/workflows/chart-check-types.yml](../../../../sources/nhn__tui.chart/.github/workflows/chart-check-types.yml)<br>[.github/workflows/chart-linter.yml](../../../../sources/nhn__tui.chart/.github/workflows/chart-linter.yml)<br>[.github/workflows/chart-test.yml](../../../../sources/nhn__tui.chart/.github/workflows/chart-test.yml)<br>[.github/workflows/map-chart-check-types.yml](../../../../sources/nhn__tui.chart/.github/workflows/map-chart-check-types.yml)<br>[.github/workflows/map-chart-linter.yml](../../../../sources/nhn__tui.chart/.github/workflows/map-chart-linter.yml)<br>[.github/workflows/map-chart-test.yml](../../../../sources/nhn__tui.chart/.github/workflows/map-chart-test.yml)<br>[.github/workflows/publish-docs.yml](../../../../sources/nhn__tui.chart/.github/workflows/publish-docs.yml)<br>[.github/workflows/publish-wrapper.yml](../../../../sources/nhn__tui.chart/.github/workflows/publish-wrapper.yml) |
| container | 19 | [apps/chart/src/charts/areaChart.ts](../../../../sources/nhn__tui.chart/apps/chart/src/charts/areaChart.ts)<br>[apps/chart/src/charts/barChart.ts](../../../../sources/nhn__tui.chart/apps/chart/src/charts/barChart.ts)<br>[apps/chart/src/charts/boxPlotChart.ts](../../../../sources/nhn__tui.chart/apps/chart/src/charts/boxPlotChart.ts)<br>[apps/chart/src/charts/bubbleChart.ts](../../../../sources/nhn__tui.chart/apps/chart/src/charts/bubbleChart.ts)<br>[apps/chart/src/charts/bulletChart.ts](../../../../sources/nhn__tui.chart/apps/chart/src/charts/bulletChart.ts)<br>[apps/chart/src/charts/chart.ts](../../../../sources/nhn__tui.chart/apps/chart/src/charts/chart.ts)<br>[apps/chart/src/charts/columnChart.ts](../../../../sources/nhn__tui.chart/apps/chart/src/charts/columnChart.ts)<br>[apps/chart/src/charts/columnLineChart.ts](../../../../sources/nhn__tui.chart/apps/chart/src/charts/columnLineChart.ts) |
| instruction | 0 | 명확하지 않음 |
| docs | 72 | [README.md](../../../../sources/nhn__tui.chart/README.md)<br>[docs/COMMIT_MESSAGE_CONVENTION.md](../../../../sources/nhn__tui.chart/docs/COMMIT_MESSAGE_CONVENTION.md)<br>[docs/PULL_REQUEST_TEMPLATE](../../../../sources/nhn__tui.chart/docs/PULL_REQUEST_TEMPLATE)<br>[docs/README.md](../../../../sources/nhn__tui.chart/docs/README.md)<br>[docs/v4.0-migration-guide-en.md](../../../../sources/nhn__tui.chart/docs/v4.0-migration-guide-en.md)<br>[docs/v4.0-migration-guide-ko.md](../../../../sources/nhn__tui.chart/docs/v4.0-migration-guide-ko.md)<br>[docs/ko/chart-area.md](../../../../sources/nhn__tui.chart/docs/ko/chart-area.md)<br>[docs/ko/chart-bar.md](../../../../sources/nhn__tui.chart/docs/ko/chart-bar.md) |
| config | 11 | [package.json](../../../../sources/nhn__tui.chart/package.json)<br>[tsconfig.json](../../../../sources/nhn__tui.chart/tsconfig.json)<br>[apps/vue-chart/package.json](../../../../sources/nhn__tui.chart/apps/vue-chart/package.json)<br>[apps/shared/package.json](../../../../sources/nhn__tui.chart/apps/shared/package.json)<br>[apps/shared/tsconfig.json](../../../../sources/nhn__tui.chart/apps/shared/tsconfig.json)<br>[apps/react-chart/package.json](../../../../sources/nhn__tui.chart/apps/react-chart/package.json)<br>[apps/react-chart/tsconfig.json](../../../../sources/nhn__tui.chart/apps/react-chart/tsconfig.json)<br>[apps/map-chart/package.json](../../../../sources/nhn__tui.chart/apps/map-chart/package.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 60 | [apps/map-chart/tests/store/layout.spec.ts](../../../../sources/nhn__tui.chart/apps/map-chart/tests/store/layout.spec.ts)<br>[apps/map-chart/tests/store/legend.spec.ts](../../../../sources/nhn__tui.chart/apps/map-chart/tests/store/legend.spec.ts)<br>[apps/map-chart/tests/store/root.spec.ts](../../../../sources/nhn__tui.chart/apps/map-chart/tests/store/root.spec.ts)<br>[apps/map-chart/tests/store/scale.spec.ts](../../../../sources/nhn__tui.chart/apps/map-chart/tests/store/scale.spec.ts)<br>[apps/map-chart/tests/store/series.spec.ts](../../../../sources/nhn__tui.chart/apps/map-chart/tests/store/series.spec.ts)<br>[apps/map-chart/tests/store/theme.spec.ts](../../../../sources/nhn__tui.chart/apps/map-chart/tests/store/theme.spec.ts) |
| CI workflow | 9 | [.github/workflows/chart-check-types.yml](../../../../sources/nhn__tui.chart/.github/workflows/chart-check-types.yml)<br>[.github/workflows/chart-linter.yml](../../../../sources/nhn__tui.chart/.github/workflows/chart-linter.yml)<br>[.github/workflows/chart-test.yml](../../../../sources/nhn__tui.chart/.github/workflows/chart-test.yml)<br>[.github/workflows/map-chart-check-types.yml](../../../../sources/nhn__tui.chart/.github/workflows/map-chart-check-types.yml)<br>[.github/workflows/map-chart-linter.yml](../../../../sources/nhn__tui.chart/.github/workflows/map-chart-linter.yml)<br>[.github/workflows/map-chart-test.yml](../../../../sources/nhn__tui.chart/.github/workflows/map-chart-test.yml) |
| 컨테이너/배포 | 19 | [apps/chart/src/charts/areaChart.ts](../../../../sources/nhn__tui.chart/apps/chart/src/charts/areaChart.ts)<br>[apps/chart/src/charts/barChart.ts](../../../../sources/nhn__tui.chart/apps/chart/src/charts/barChart.ts)<br>[apps/chart/src/charts/boxPlotChart.ts](../../../../sources/nhn__tui.chart/apps/chart/src/charts/boxPlotChart.ts)<br>[apps/chart/src/charts/bubbleChart.ts](../../../../sources/nhn__tui.chart/apps/chart/src/charts/bubbleChart.ts)<br>[apps/chart/src/charts/bulletChart.ts](../../../../sources/nhn__tui.chart/apps/chart/src/charts/bulletChart.ts)<br>[apps/chart/src/charts/chart.ts](../../../../sources/nhn__tui.chart/apps/chart/src/charts/chart.ts) |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | security/policy 표면이 명확하지 않음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `apps/vue-chart/src/base.js`, `apps/vue-chart/src/index.js`, `apps/shared/src/index.ts`.
2. entrypoint를 따라 실행 흐름 확인: `apps/vue-chart/src/base.js`, `apps/vue-chart/src/index.js`, `apps/shared/src/index.ts`.
3. retrieval/memory/indexing 확인: `apps/vue-chart/index.d.ts`, `apps/vue-chart/src/index.js`, `apps/vue-chart/demo/index.html`.
4. test/eval 파일로 동작 검증: `apps/map-chart/tests/store/layout.spec.ts`, `apps/map-chart/tests/store/legend.spec.ts`, `apps/map-chart/tests/store/root.spec.ts`.

## 기존 레포 인사이트

일반 AI 오픈소스 관점에서 🍞📊 Beautiful chart for data visualization.. 핵심 구조 신호는 TypeScript, package.json, README.md, LICENSE, vue, ci이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 더 깊은 구조 스캔 필요입니다.
