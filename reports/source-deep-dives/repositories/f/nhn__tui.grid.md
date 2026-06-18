# nhn/tui.grid 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

🍞🔡 The Powerful Component to Display and Edit Data. Experience the Ultimate Data Transformer!

## 요약

- 조사 단위: `sources/nhn__tui.grid` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 392 files, 65 directories, depth score 90, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 monorepo/workspace, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 entrypoints=packages/toast-ui.vue-grid/src/index.js, packages/toast-ui.react-grid/src/index.js, packages/toast-ui.grid/src/index.ts이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | nhn/tui.grid |
| 주제 | 일반 AI 오픈소스 / 일반 AI 오픈소스 |
| Region | korea |
| Language | TypeScript |
| Stars | 2565 |
| Forks | 409 |
| License | MIT |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/nhn__tui.grid](../../../../sources/nhn__tui.grid) |
| 기존 보고서 | [reports/korea-trending/repositories/nhn__tui.grid.md](../../../korea-trending/repositories/nhn__tui.grid.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 392 / 65 |
| 관측 최대 깊이 | 6 |
| 상위 디렉터리 | .github, docs, packages |
| 상위 확장자 | .ts: 186, .md: 66, .tsx: 40, .html: 30, .js: 30, .json: 16, .yml: 14, .css: 4, (none): 4, .vue: 2 |
| 소스 패턴 | monorepo/workspace, retrieval/vector path, spec/docs-driven, eval/test harness |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| packages/toast-ui.grid | packages workspace | 126 |
| packages/toast-ui.react-grid | packages workspace | 6 |
| packages/toast-ui.vue-grid | packages workspace | 6 |
| .github | ci surface | 1 |
| docs | documentation surface | 1 |
| packages | source boundary | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| build | package.json | build | lerna run build --scope tui-grid |
| build | package.json | build:react | lerna run build --scope @toast-ui/react-grid |
| build | package.json | build:vue | lerna run build --scope @toast-ui/vue-grid |
| utility | package.json | note | tui-note |
| build | package.json | update:wrappers | lerna run update:wrapper --scope tui-grid && npm install --prefix packages/toast-ui.react-grid && npm install --prefix packages/toast-ui.vue-grid && npm run build:react && npm run build:vue |


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
| entrypoints | [packages/toast-ui.vue-grid/src/index.js](../../../../sources/nhn__tui.grid/packages/toast-ui.vue-grid/src/index.js) | entrypoints signal |
| entrypoints | [packages/toast-ui.react-grid/src/index.js](../../../../sources/nhn__tui.grid/packages/toast-ui.react-grid/src/index.js) | entrypoints signal |
| entrypoints | [packages/toast-ui.grid/src/index.ts](../../../../sources/nhn__tui.grid/packages/toast-ui.grid/src/index.ts) | entrypoints signal |
| config | [package.json](../../../../sources/nhn__tui.grid/package.json) | config signal |
| config | [packages/toast-ui.vue-grid/package.json](../../../../sources/nhn__tui.grid/packages/toast-ui.vue-grid/package.json) | config signal |
| config | [packages/toast-ui.react-grid/package.json](../../../../sources/nhn__tui.grid/packages/toast-ui.react-grid/package.json) | config signal |
| config | [packages/toast-ui.grid/package.json](../../../../sources/nhn__tui.grid/packages/toast-ui.grid/package.json) | config signal |
| docs | [README.md](../../../../sources/nhn__tui.grid/README.md) | docs signal |
| docs | [packages/toast-ui.vue-grid/README.md](../../../../sources/nhn__tui.grid/packages/toast-ui.vue-grid/README.md) | docs signal |
| docs | [packages/toast-ui.vue-grid/docs/getting-started.md](../../../../sources/nhn__tui.grid/packages/toast-ui.vue-grid/docs/getting-started.md) | docs signal |
| docs | [packages/toast-ui.react-grid/README.md](../../../../sources/nhn__tui.grid/packages/toast-ui.react-grid/README.md) | docs signal |
| eval | [packages/toast-ui.grid/cypress/integration/attributes.spec.ts](../../../../sources/nhn__tui.grid/packages/toast-ui.grid/cypress/integration/attributes.spec.ts) | eval signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 3 | [packages/toast-ui.vue-grid/src/index.js](../../../../sources/nhn__tui.grid/packages/toast-ui.vue-grid/src/index.js)<br>[packages/toast-ui.react-grid/src/index.js](../../../../sources/nhn__tui.grid/packages/toast-ui.react-grid/src/index.js)<br>[packages/toast-ui.grid/src/index.ts](../../../../sources/nhn__tui.grid/packages/toast-ui.grid/src/index.ts) |
| agentRuntime | 0 | 명확하지 않음 |
| mcp | 0 | 명확하지 않음 |
| retrieval | 19 | [packages/toast-ui.vue-grid/index.d.ts](../../../../sources/nhn__tui.grid/packages/toast-ui.vue-grid/index.d.ts)<br>[packages/toast-ui.vue-grid/src/index.js](../../../../sources/nhn__tui.grid/packages/toast-ui.vue-grid/src/index.js)<br>[packages/toast-ui.react-grid/index.d.ts](../../../../sources/nhn__tui.grid/packages/toast-ui.react-grid/index.d.ts)<br>[packages/toast-ui.react-grid/stories/index.stories.js](../../../../sources/nhn__tui.grid/packages/toast-ui.react-grid/stories/index.stories.js)<br>[packages/toast-ui.react-grid/src/index.js](../../../../sources/nhn__tui.grid/packages/toast-ui.react-grid/src/index.js)<br>[packages/toast-ui.grid/index.html](../../../../sources/nhn__tui.grid/packages/toast-ui.grid/index.html)<br>[packages/toast-ui.grid/types/index.d.ts](../../../../sources/nhn__tui.grid/packages/toast-ui.grid/types/index.d.ts)<br>[packages/toast-ui.grid/types/tui-pagination/index.d.ts](../../../../sources/nhn__tui.grid/packages/toast-ui.grid/types/tui-pagination/index.d.ts) |
| spec | 36 | [packages/toast-ui.grid/cypress/integration/attributes.spec.ts](../../../../sources/nhn__tui.grid/packages/toast-ui.grid/cypress/integration/attributes.spec.ts)<br>[packages/toast-ui.grid/cypress/integration/clientPagination.spec.ts](../../../../sources/nhn__tui.grid/packages/toast-ui.grid/cypress/integration/clientPagination.spec.ts)<br>[packages/toast-ui.grid/cypress/integration/clipboard.spec.ts](../../../../sources/nhn__tui.grid/packages/toast-ui.grid/cypress/integration/clipboard.spec.ts)<br>[packages/toast-ui.grid/cypress/integration/column.spec.ts](../../../../sources/nhn__tui.grid/packages/toast-ui.grid/cypress/integration/column.spec.ts)<br>[packages/toast-ui.grid/cypress/integration/columnOptions.spec.ts](../../../../sources/nhn__tui.grid/packages/toast-ui.grid/cypress/integration/columnOptions.spec.ts)<br>[packages/toast-ui.grid/cypress/integration/combinedFeatureTest.spec.ts](../../../../sources/nhn__tui.grid/packages/toast-ui.grid/cypress/integration/combinedFeatureTest.spec.ts)<br>[packages/toast-ui.grid/cypress/integration/contextMenu.spec.ts](../../../../sources/nhn__tui.grid/packages/toast-ui.grid/cypress/integration/contextMenu.spec.ts)<br>[packages/toast-ui.grid/cypress/integration/data.spec.ts](../../../../sources/nhn__tui.grid/packages/toast-ui.grid/cypress/integration/data.spec.ts) |
| eval | 39 | [packages/toast-ui.grid/cypress/integration/attributes.spec.ts](../../../../sources/nhn__tui.grid/packages/toast-ui.grid/cypress/integration/attributes.spec.ts)<br>[packages/toast-ui.grid/cypress/integration/clientPagination.spec.ts](../../../../sources/nhn__tui.grid/packages/toast-ui.grid/cypress/integration/clientPagination.spec.ts)<br>[packages/toast-ui.grid/cypress/integration/clipboard.spec.ts](../../../../sources/nhn__tui.grid/packages/toast-ui.grid/cypress/integration/clipboard.spec.ts)<br>[packages/toast-ui.grid/cypress/integration/column.spec.ts](../../../../sources/nhn__tui.grid/packages/toast-ui.grid/cypress/integration/column.spec.ts)<br>[packages/toast-ui.grid/cypress/integration/columnOptions.spec.ts](../../../../sources/nhn__tui.grid/packages/toast-ui.grid/cypress/integration/columnOptions.spec.ts)<br>[packages/toast-ui.grid/cypress/integration/combinedFeatureTest.spec.ts](../../../../sources/nhn__tui.grid/packages/toast-ui.grid/cypress/integration/combinedFeatureTest.spec.ts)<br>[packages/toast-ui.grid/cypress/integration/contextMenu.spec.ts](../../../../sources/nhn__tui.grid/packages/toast-ui.grid/cypress/integration/contextMenu.spec.ts)<br>[packages/toast-ui.grid/cypress/integration/data.spec.ts](../../../../sources/nhn__tui.grid/packages/toast-ui.grid/cypress/integration/data.spec.ts) |
| security | 0 | 명확하지 않음 |
| ci | 7 | [.github/workflows/check-types.yml](../../../../sources/nhn__tui.grid/.github/workflows/check-types.yml)<br>[.github/workflows/e2e-test.yml](../../../../sources/nhn__tui.grid/.github/workflows/e2e-test.yml)<br>[.github/workflows/example-page-test.yml](../../../../sources/nhn__tui.grid/.github/workflows/example-page-test.yml)<br>[.github/workflows/linter.yml](../../../../sources/nhn__tui.grid/.github/workflows/linter.yml)<br>[.github/workflows/publish-docs.yml](../../../../sources/nhn__tui.grid/.github/workflows/publish-docs.yml)<br>[.github/workflows/publish.yml](../../../../sources/nhn__tui.grid/.github/workflows/publish.yml)<br>[.github/workflows/visual-test.yml](../../../../sources/nhn__tui.grid/.github/workflows/visual-test.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 61 | [README.md](../../../../sources/nhn__tui.grid/README.md)<br>[packages/toast-ui.vue-grid/README.md](../../../../sources/nhn__tui.grid/packages/toast-ui.vue-grid/README.md)<br>[packages/toast-ui.vue-grid/docs/getting-started.md](../../../../sources/nhn__tui.grid/packages/toast-ui.vue-grid/docs/getting-started.md)<br>[packages/toast-ui.react-grid/README.md](../../../../sources/nhn__tui.grid/packages/toast-ui.react-grid/README.md)<br>[packages/toast-ui.grid/README.md](../../../../sources/nhn__tui.grid/packages/toast-ui.grid/README.md)<br>[packages/toast-ui.grid/docs/README.md](../../../../sources/nhn__tui.grid/packages/toast-ui.grid/docs/README.md)<br>[packages/toast-ui.grid/docs/v4.0-migration-guide-kor.md](../../../../sources/nhn__tui.grid/packages/toast-ui.grid/docs/v4.0-migration-guide-kor.md)<br>[packages/toast-ui.grid/docs/v4.0-migration-guide.md](../../../../sources/nhn__tui.grid/packages/toast-ui.grid/docs/v4.0-migration-guide.md) |
| config | 6 | [package.json](../../../../sources/nhn__tui.grid/package.json)<br>[packages/toast-ui.vue-grid/package.json](../../../../sources/nhn__tui.grid/packages/toast-ui.vue-grid/package.json)<br>[packages/toast-ui.react-grid/package.json](../../../../sources/nhn__tui.grid/packages/toast-ui.react-grid/package.json)<br>[packages/toast-ui.grid/package.json](../../../../sources/nhn__tui.grid/packages/toast-ui.grid/package.json)<br>[packages/toast-ui.grid/tsconfig.json](../../../../sources/nhn__tui.grid/packages/toast-ui.grid/tsconfig.json)<br>[packages/toast-ui.grid/cypress/tsconfig.json](../../../../sources/nhn__tui.grid/packages/toast-ui.grid/cypress/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 39 | [packages/toast-ui.grid/cypress/integration/attributes.spec.ts](../../../../sources/nhn__tui.grid/packages/toast-ui.grid/cypress/integration/attributes.spec.ts)<br>[packages/toast-ui.grid/cypress/integration/clientPagination.spec.ts](../../../../sources/nhn__tui.grid/packages/toast-ui.grid/cypress/integration/clientPagination.spec.ts)<br>[packages/toast-ui.grid/cypress/integration/clipboard.spec.ts](../../../../sources/nhn__tui.grid/packages/toast-ui.grid/cypress/integration/clipboard.spec.ts)<br>[packages/toast-ui.grid/cypress/integration/column.spec.ts](../../../../sources/nhn__tui.grid/packages/toast-ui.grid/cypress/integration/column.spec.ts)<br>[packages/toast-ui.grid/cypress/integration/columnOptions.spec.ts](../../../../sources/nhn__tui.grid/packages/toast-ui.grid/cypress/integration/columnOptions.spec.ts)<br>[packages/toast-ui.grid/cypress/integration/combinedFeatureTest.spec.ts](../../../../sources/nhn__tui.grid/packages/toast-ui.grid/cypress/integration/combinedFeatureTest.spec.ts) |
| CI workflow | 7 | [.github/workflows/check-types.yml](../../../../sources/nhn__tui.grid/.github/workflows/check-types.yml)<br>[.github/workflows/e2e-test.yml](../../../../sources/nhn__tui.grid/.github/workflows/e2e-test.yml)<br>[.github/workflows/example-page-test.yml](../../../../sources/nhn__tui.grid/.github/workflows/example-page-test.yml)<br>[.github/workflows/linter.yml](../../../../sources/nhn__tui.grid/.github/workflows/linter.yml)<br>[.github/workflows/publish-docs.yml](../../../../sources/nhn__tui.grid/.github/workflows/publish-docs.yml)<br>[.github/workflows/publish.yml](../../../../sources/nhn__tui.grid/.github/workflows/publish.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `packages/toast-ui.vue-grid/src/index.js`, `packages/toast-ui.react-grid/src/index.js`, `packages/toast-ui.grid/src/index.ts`.
2. entrypoint를 따라 실행 흐름 확인: `packages/toast-ui.vue-grid/src/index.js`, `packages/toast-ui.react-grid/src/index.js`, `packages/toast-ui.grid/src/index.ts`.
3. retrieval/memory/indexing 확인: `packages/toast-ui.vue-grid/index.d.ts`, `packages/toast-ui.vue-grid/src/index.js`, `packages/toast-ui.react-grid/index.d.ts`.
4. test/eval 파일로 동작 검증: `packages/toast-ui.grid/cypress/integration/attributes.spec.ts`, `packages/toast-ui.grid/cypress/integration/clientPagination.spec.ts`, `packages/toast-ui.grid/cypress/integration/clipboard.spec.ts`.

## 기존 레포 인사이트

일반 AI 오픈소스 관점에서 🍞🔡 The Powerful Component to Display and Edit Data. Experience the Ultimate Data Transformer!. 핵심 구조 신호는 TypeScript, package.json, README.md, LICENSE, ci, docs이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 더 깊은 구조 스캔 필요입니다.
