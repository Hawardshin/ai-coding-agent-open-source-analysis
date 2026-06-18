# naver/egjs-imready 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

I'm Ready to check if the images or videos are loaded!

## 요약

- 조사 단위: `sources/naver__egjs-imready` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 196 files, 45 directories, depth score 93, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 entrypoints=packages/vue2-imready/src/index.ts, packages/vue2-imready/.storybook/main.js, packages/vue-imready/src/App.vue이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | naver/egjs-imready |
| 주제 | 일반 AI 오픈소스 / 일반 AI 오픈소스 |
| Region | korea |
| Language | TypeScript |
| Stars | 68 |
| Forks | 6 |
| License | NOASSERTION |
| 성숙도 | 초기 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/naver__egjs-imready](../../../../sources/naver__egjs-imready) |
| 기존 보고서 | [reports/korea-trending/repositories/naver__egjs-imready.md](../../../korea-trending/repositories/naver__egjs-imready.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 196 / 45 |
| 관측 최대 깊이 | 7 |
| 상위 디렉터리 | .github, config, demo, packages |
| 상위 확장자 | .ts: 63, .json: 34, (none): 19, .js: 18, .md: 17, .tsx: 10, .html: 8, .css: 5, .png: 5, .ico: 4, .yml: 3, .opts: 2 |
| 소스 패턴 | monorepo/workspace, cli-first, api/server, retrieval/vector path, spec/docs-driven, eval/test harness |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| packages/ngx-imready | packages workspace | 21 |
| packages/imready | packages workspace | 20 |
| packages/react-imready | packages workspace | 12 |
| packages/vue2-imready | packages workspace | 8 |
| packages/svelte-imready | packages workspace | 7 |
| packages/vue-imready | packages workspace | 7 |
| .github | ci surface | 1 |
| config | top-level component | 1 |
| demo | top-level component | 1 |
| packages | source boundary | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| build | package.json | packages | npm run packages:update && npm run packages:build && npm run packages:publish |
| utility | package.json | packages:update | lerna-helper version |
| build | package.json | packages:build | npm run build --prefix packages/imready && lerna run build --ignore @egjs/imready --ignore @egjs/ngx-imready --ignore docs --stream |
| utility | package.json | packages:publish | lerna-helper publish --ignore @egjs/ngx-imready --commit 'chore: update packages versions' |
| build | package.json | docs:build | rm -rf ./doc && jsdoc -c jsdoc.json |
| utility | package.json | demo:deploy | lerna-helper deploy --base @egjs/imready --remote origin |
| build | package.json | release | lerna-helper release --base @egjs/imready --remote upstream --branch main |


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
| entrypoints | [packages/vue2-imready/src/index.ts](../../../../sources/naver__egjs-imready/packages/vue2-imready/src/index.ts) | entrypoints signal |
| entrypoints | [packages/vue2-imready/.storybook/main.js](../../../../sources/naver__egjs-imready/packages/vue2-imready/.storybook/main.js) | entrypoints signal |
| entrypoints | [packages/vue-imready/src/App.vue](../../../../sources/naver__egjs-imready/packages/vue-imready/src/App.vue) | entrypoints signal |
| entrypoints | [packages/vue-imready/src/main.ts](../../../../sources/naver__egjs-imready/packages/vue-imready/src/main.ts) | entrypoints signal |
| config | [package.json](../../../../sources/naver__egjs-imready/package.json) | config signal |
| config | [packages/vue2-imready/package.json](../../../../sources/naver__egjs-imready/packages/vue2-imready/package.json) | config signal |
| config | [packages/vue2-imready/tsconfig.json](../../../../sources/naver__egjs-imready/packages/vue2-imready/tsconfig.json) | config signal |
| config | [packages/vue-imready/package.json](../../../../sources/naver__egjs-imready/packages/vue-imready/package.json) | config signal |
| docs | [README.md](../../../../sources/naver__egjs-imready/README.md) | docs signal |
| docs | [packages/vue2-imready/README.md](../../../../sources/naver__egjs-imready/packages/vue2-imready/README.md) | docs signal |
| docs | [packages/vue-imready/README.md](../../../../sources/naver__egjs-imready/packages/vue-imready/README.md) | docs signal |
| docs | [packages/svelte-imready/README.md](../../../../sources/naver__egjs-imready/packages/svelte-imready/README.md) | docs signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 13 | [packages/vue2-imready/src/index.ts](../../../../sources/naver__egjs-imready/packages/vue2-imready/src/index.ts)<br>[packages/vue2-imready/.storybook/main.js](../../../../sources/naver__egjs-imready/packages/vue2-imready/.storybook/main.js)<br>[packages/vue-imready/src/App.vue](../../../../sources/naver__egjs-imready/packages/vue-imready/src/App.vue)<br>[packages/vue-imready/src/main.ts](../../../../sources/naver__egjs-imready/packages/vue-imready/src/main.ts)<br>[packages/svelte-imready/src/App.svelte](../../../../sources/naver__egjs-imready/packages/svelte-imready/src/App.svelte)<br>[packages/svelte-imready/src/main.js](../../../../sources/naver__egjs-imready/packages/svelte-imready/src/main.js)<br>[packages/react-imready/src/index.tsx](../../../../sources/naver__egjs-imready/packages/react-imready/src/index.tsx)<br>[packages/ngx-imready/src/index.html](../../../../sources/naver__egjs-imready/packages/ngx-imready/src/index.html) |
| agentRuntime | 0 | 명확하지 않음 |
| mcp | 0 | 명확하지 않음 |
| retrieval | 16 | [packages/vue2-imready/src/index.ts](../../../../sources/naver__egjs-imready/packages/vue2-imready/src/index.ts)<br>[packages/vue2-imready/public/index.html](../../../../sources/naver__egjs-imready/packages/vue2-imready/public/index.html)<br>[packages/vue2-imready/demo/index.ts](../../../../sources/naver__egjs-imready/packages/vue2-imready/demo/index.ts)<br>[packages/vue-imready/src/vue-imready/index.ts](../../../../sources/naver__egjs-imready/packages/vue-imready/src/vue-imready/index.ts)<br>[packages/vue-imready/public/index.html](../../../../sources/naver__egjs-imready/packages/vue-imready/public/index.html)<br>[packages/svelte-imready/src/svelte-imready/index.ts](../../../../sources/naver__egjs-imready/packages/svelte-imready/src/svelte-imready/index.ts)<br>[packages/svelte-imready/public/index.html](../../../../sources/naver__egjs-imready/packages/svelte-imready/public/index.html)<br>[packages/react-imready/src/index.tsx](../../../../sources/naver__egjs-imready/packages/react-imready/src/index.tsx) |
| spec | 9 | [packages/react-imready/test/unit/ImReady.spec.tsx](../../../../sources/naver__egjs-imready/packages/react-imready/test/unit/ImReady.spec.tsx)<br>[packages/ngx-imready/tsconfig.spec.json](../../../../sources/naver__egjs-imready/packages/ngx-imready/tsconfig.spec.json)<br>[packages/ngx-imready/src/app/app.component.spec.ts](../../../../sources/naver__egjs-imready/packages/ngx-imready/src/app/app.component.spec.ts)<br>[packages/ngx-imready/projects/ngx-imready/tsconfig.spec.json](../../../../sources/naver__egjs-imready/packages/ngx-imready/projects/ngx-imready/tsconfig.spec.json)<br>[packages/ngx-imready/e2e/src/app.e2e-spec.ts](../../../../sources/naver__egjs-imready/packages/ngx-imready/e2e/src/app.e2e-spec.ts)<br>[packages/imready/test/unit/element.spec.ts](../../../../sources/naver__egjs-imready/packages/imready/test/unit/element.spec.ts)<br>[packages/imready/test/unit/Image.spec.ts](../../../../sources/naver__egjs-imready/packages/imready/test/unit/Image.spec.ts)<br>[packages/imready/test/unit/initialization.spec.ts](../../../../sources/naver__egjs-imready/packages/imready/test/unit/initialization.spec.ts) |
| eval | 17 | [packages/react-imready/tsconfig.test.json](../../../../sources/naver__egjs-imready/packages/react-imready/tsconfig.test.json)<br>[packages/react-imready/test/unit/ImReady.spec.tsx](../../../../sources/naver__egjs-imready/packages/react-imready/test/unit/ImReady.spec.tsx)<br>[packages/react-imready/test/unit/TestHelper.ts](../../../../sources/naver__egjs-imready/packages/react-imready/test/unit/TestHelper.ts)<br>[packages/ngx-imready/tsconfig.spec.json](../../../../sources/naver__egjs-imready/packages/ngx-imready/tsconfig.spec.json)<br>[packages/ngx-imready/src/test.ts](../../../../sources/naver__egjs-imready/packages/ngx-imready/src/test.ts)<br>[packages/ngx-imready/src/app/app.component.spec.ts](../../../../sources/naver__egjs-imready/packages/ngx-imready/src/app/app.component.spec.ts)<br>[packages/ngx-imready/projects/ngx-imready/tsconfig.spec.json](../../../../sources/naver__egjs-imready/packages/ngx-imready/projects/ngx-imready/tsconfig.spec.json)<br>[packages/ngx-imready/projects/ngx-imready/src/test.ts](../../../../sources/naver__egjs-imready/packages/ngx-imready/projects/ngx-imready/src/test.ts) |
| security | 0 | 명확하지 않음 |
| ci | 1 | [.github/workflows/run-unit.yml](../../../../sources/naver__egjs-imready/.github/workflows/run-unit.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 8 | [README.md](../../../../sources/naver__egjs-imready/README.md)<br>[packages/vue2-imready/README.md](../../../../sources/naver__egjs-imready/packages/vue2-imready/README.md)<br>[packages/vue-imready/README.md](../../../../sources/naver__egjs-imready/packages/vue-imready/README.md)<br>[packages/svelte-imready/README.md](../../../../sources/naver__egjs-imready/packages/svelte-imready/README.md)<br>[packages/react-imready/README.md](../../../../sources/naver__egjs-imready/packages/react-imready/README.md)<br>[packages/ngx-imready/README.md](../../../../sources/naver__egjs-imready/packages/ngx-imready/README.md)<br>[packages/ngx-imready/projects/ngx-imready/README.md](../../../../sources/naver__egjs-imready/packages/ngx-imready/projects/ngx-imready/README.md)<br>[packages/imready/README.md](../../../../sources/naver__egjs-imready/packages/imready/README.md) |
| config | 15 | [package.json](../../../../sources/naver__egjs-imready/package.json)<br>[packages/vue2-imready/package.json](../../../../sources/naver__egjs-imready/packages/vue2-imready/package.json)<br>[packages/vue2-imready/tsconfig.json](../../../../sources/naver__egjs-imready/packages/vue2-imready/tsconfig.json)<br>[packages/vue-imready/package.json](../../../../sources/naver__egjs-imready/packages/vue-imready/package.json)<br>[packages/vue-imready/tsconfig.json](../../../../sources/naver__egjs-imready/packages/vue-imready/tsconfig.json)<br>[packages/svelte-imready/package.json](../../../../sources/naver__egjs-imready/packages/svelte-imready/package.json)<br>[packages/svelte-imready/tsconfig.json](../../../../sources/naver__egjs-imready/packages/svelte-imready/tsconfig.json)<br>[packages/react-imready/package.json](../../../../sources/naver__egjs-imready/packages/react-imready/package.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 17 | [packages/react-imready/tsconfig.test.json](../../../../sources/naver__egjs-imready/packages/react-imready/tsconfig.test.json)<br>[packages/react-imready/test/unit/ImReady.spec.tsx](../../../../sources/naver__egjs-imready/packages/react-imready/test/unit/ImReady.spec.tsx)<br>[packages/react-imready/test/unit/TestHelper.ts](../../../../sources/naver__egjs-imready/packages/react-imready/test/unit/TestHelper.ts)<br>[packages/ngx-imready/tsconfig.spec.json](../../../../sources/naver__egjs-imready/packages/ngx-imready/tsconfig.spec.json)<br>[packages/ngx-imready/src/test.ts](../../../../sources/naver__egjs-imready/packages/ngx-imready/src/test.ts)<br>[packages/ngx-imready/src/app/app.component.spec.ts](../../../../sources/naver__egjs-imready/packages/ngx-imready/src/app/app.component.spec.ts) |
| CI workflow | 1 | [.github/workflows/run-unit.yml](../../../../sources/naver__egjs-imready/.github/workflows/run-unit.yml) |
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

1. 핵심 참조에서 시작: `packages/vue2-imready/src/index.ts`, `packages/vue2-imready/.storybook/main.js`, `packages/vue-imready/src/App.vue`.
2. entrypoint를 따라 실행 흐름 확인: `packages/vue2-imready/src/index.ts`, `packages/vue2-imready/.storybook/main.js`, `packages/vue-imready/src/App.vue`.
3. retrieval/memory/indexing 확인: `packages/vue2-imready/src/index.ts`, `packages/vue2-imready/public/index.html`, `packages/vue2-imready/demo/index.ts`.
4. test/eval 파일로 동작 검증: `packages/react-imready/tsconfig.test.json`, `packages/react-imready/test/unit/ImReady.spec.tsx`, `packages/react-imready/test/unit/TestHelper.ts`.

## 기존 레포 인사이트

일반 AI 오픈소스 관점에서 I'm Ready to check if the images or videos are loaded!. 핵심 구조 신호는 TypeScript, package.json, README.md, LICENSE, ci, docs이며, 소스+보고서 근거 수준으로 초기 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 더 깊은 구조 스캔 필요입니다.
