# line/create-liff-app 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

Start developing LIFF application with a simple CLI command.

## 요약

- 조사 단위: `sources/line__create-liff-app` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 114 files, 38 directories, depth score 81, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

개발 생산성/DevTools 관점에서 cli-first, api/server, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 entrypoints=templates/vue-ts/src/App.vue, templates/vue-ts/src/main.ts, templates/vue/src/App.vue이고, 의존성 단서는 commander, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | line/create-liff-app |
| 주제 | 개발 생산성/DevTools / 개발 생산성/DevTools |
| Region | korea |
| Language | TypeScript |
| Stars | 80 |
| Forks | 17 |
| License | Apache-2.0 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/line__create-liff-app](../../../../sources/line__create-liff-app) |
| 기존 보고서 | [reports/korea-trending/repositories/line__create-liff-app.md](../../../korea-trending/repositories/line__create-liff-app.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 114 / 38 |
| 관측 최대 깊이 | 4 |
| 상위 디렉터리 | .github, templates, test |
| 상위 확장자 | .js: 18, .json: 15, .ts: 15, .ico: 12, .css: 8, .default: 8, .html: 8, .md: 6, .tsx: 5, .vue: 4, .yml: 4, (none): 4 |
| 소스 패턴 | cli-first, api/server, retrieval/vector path, eval/test harness |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| .github | ci surface | 1 |
| templates | top-level component | 1 |
| test | validation surface | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| build | package.json | build | tsc |
| serve-dev | package.json | watch | tsc -w |
| serve-dev | package.json | start | yarn build && node dist/index.js |
| test | package.json | test | yarn build && jest |
| quality | package.json | lint:eslint | eslint '**/*.{ts,js}' |
| quality | package.json | fix:eslint | yarn lint:eslint --fix |
| entrypoint | package.json bin | index.js | ./dist/index.js |
| entrypoint | package.json bin | index.js | ./dist/index.js |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | 없음 |
| developerSurface | commander |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| entrypoints | [templates/vue-ts/src/App.vue](../../../../sources/line__create-liff-app/templates/vue-ts/src/App.vue) | entrypoints signal |
| entrypoints | [templates/vue-ts/src/main.ts](../../../../sources/line__create-liff-app/templates/vue-ts/src/main.ts) | entrypoints signal |
| entrypoints | [templates/vue/src/App.vue](../../../../sources/line__create-liff-app/templates/vue/src/App.vue) | entrypoints signal |
| entrypoints | [templates/vue/src/main.js](../../../../sources/line__create-liff-app/templates/vue/src/main.js) | entrypoints signal |
| config | [package.json](../../../../sources/line__create-liff-app/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/line__create-liff-app/tsconfig.json) | config signal |
| config | [templates/vue-ts/package.json](../../../../sources/line__create-liff-app/templates/vue-ts/package.json) | config signal |
| config | [templates/vue-ts/tsconfig.json](../../../../sources/line__create-liff-app/templates/vue-ts/tsconfig.json) | config signal |
| ci | [.github/workflows/code-check.yml](../../../../sources/line__create-liff-app/.github/workflows/code-check.yml) | ci signal |
| ci | [.github/workflows/create-release-pr.yml](../../../../sources/line__create-liff-app/.github/workflows/create-release-pr.yml) | ci signal |
| ci | [.github/workflows/release.yml](../../../../sources/line__create-liff-app/.github/workflows/release.yml) | ci signal |
| docs | [README.md](../../../../sources/line__create-liff-app/README.md) | docs signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 16 | [templates/vue-ts/src/App.vue](../../../../sources/line__create-liff-app/templates/vue-ts/src/App.vue)<br>[templates/vue-ts/src/main.ts](../../../../sources/line__create-liff-app/templates/vue-ts/src/main.ts)<br>[templates/vue/src/App.vue](../../../../sources/line__create-liff-app/templates/vue/src/App.vue)<br>[templates/vue/src/main.js](../../../../sources/line__create-liff-app/templates/vue/src/main.js)<br>[templates/vanilla-ts/src/main.ts](../../../../sources/line__create-liff-app/templates/vanilla-ts/src/main.ts)<br>[templates/vanilla/main.js](../../../../sources/line__create-liff-app/templates/vanilla/main.js)<br>[templates/svelte-ts/src/App.svelte](../../../../sources/line__create-liff-app/templates/svelte-ts/src/App.svelte)<br>[templates/svelte-ts/src/main.ts](../../../../sources/line__create-liff-app/templates/svelte-ts/src/main.ts) |
| agentRuntime | 0 | 명확하지 않음 |
| mcp | 0 | 명확하지 않음 |
| retrieval | 13 | [index.ts](../../../../sources/line__create-liff-app/index.ts)<br>[test/index.test.ts](../../../../sources/line__create-liff-app/test/index.test.ts)<br>[templates/vue-ts/index.html](../../../../sources/line__create-liff-app/templates/vue-ts/index.html)<br>[templates/vue/index.html](../../../../sources/line__create-liff-app/templates/vue/index.html)<br>[templates/vanilla-ts/index.html](../../../../sources/line__create-liff-app/templates/vanilla-ts/index.html)<br>[templates/vanilla/index.html](../../../../sources/line__create-liff-app/templates/vanilla/index.html)<br>[templates/svelte-ts/index.html](../../../../sources/line__create-liff-app/templates/svelte-ts/index.html)<br>[templates/svelte/index.html](../../../../sources/line__create-liff-app/templates/svelte/index.html) |
| spec | 0 | 명확하지 않음 |
| eval | 1 | [test/index.test.ts](../../../../sources/line__create-liff-app/test/index.test.ts) |
| security | 0 | 명확하지 않음 |
| ci | 3 | [.github/workflows/code-check.yml](../../../../sources/line__create-liff-app/.github/workflows/code-check.yml)<br>[.github/workflows/create-release-pr.yml](../../../../sources/line__create-liff-app/.github/workflows/create-release-pr.yml)<br>[.github/workflows/release.yml](../../../../sources/line__create-liff-app/.github/workflows/release.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 1 | [README.md](../../../../sources/line__create-liff-app/README.md) |
| config | 14 | [package.json](../../../../sources/line__create-liff-app/package.json)<br>[tsconfig.json](../../../../sources/line__create-liff-app/tsconfig.json)<br>[templates/vue-ts/package.json](../../../../sources/line__create-liff-app/templates/vue-ts/package.json)<br>[templates/vue-ts/tsconfig.json](../../../../sources/line__create-liff-app/templates/vue-ts/tsconfig.json)<br>[templates/vue/package.json](../../../../sources/line__create-liff-app/templates/vue/package.json)<br>[templates/vanilla-ts/package.json](../../../../sources/line__create-liff-app/templates/vanilla-ts/package.json)<br>[templates/vanilla-ts/tsconfig.json](../../../../sources/line__create-liff-app/templates/vanilla-ts/tsconfig.json)<br>[templates/vanilla/package.json](../../../../sources/line__create-liff-app/templates/vanilla/package.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 1 | [test/index.test.ts](../../../../sources/line__create-liff-app/test/index.test.ts) |
| CI workflow | 3 | [.github/workflows/code-check.yml](../../../../sources/line__create-liff-app/.github/workflows/code-check.yml)<br>[.github/workflows/create-release-pr.yml](../../../../sources/line__create-liff-app/.github/workflows/create-release-pr.yml)<br>[.github/workflows/release.yml](../../../../sources/line__create-liff-app/.github/workflows/release.yml) |
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

1. 핵심 참조에서 시작: `templates/vue-ts/src/App.vue`, `templates/vue-ts/src/main.ts`, `templates/vue/src/App.vue`.
2. entrypoint를 따라 실행 흐름 확인: `templates/vue-ts/src/App.vue`, `templates/vue-ts/src/main.ts`, `templates/vue/src/App.vue`.
3. retrieval/memory/indexing 확인: `index.ts`, `test/index.test.ts`, `templates/vue-ts/index.html`.
4. test/eval 파일로 동작 검증: `test/index.test.ts`.

## 기존 레포 인사이트

개발 생산성/DevTools 관점에서 Start developing LIFF application with a simple CLI command.. 핵심 구조 신호는 TypeScript, package.json, README.md, tests, ci, docs이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 개발 생산성/DevTools 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 더 깊은 구조 스캔 필요입니다.
