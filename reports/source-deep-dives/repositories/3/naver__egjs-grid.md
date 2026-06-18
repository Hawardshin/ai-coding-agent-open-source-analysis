# naver/egjs-grid 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

A component that can arrange items according to the type of grids

## 요약

- 조사 단위: `sources/naver__egjs-grid` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 376 files, 119 directories, depth score 96, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 monorepo/workspace, cli-first, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 entrypoints=src/index.cjs.ts, src/index.ts, src/index.umd.ts이고, 의존성 단서는 react, playwright, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | naver/egjs-grid |
| 주제 | 일반 AI 오픈소스 / 일반 AI 오픈소스 |
| Region | korea |
| Language | TypeScript |
| Stars | 316 |
| Forks | 17 |
| License | NOASSERTION |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/naver__egjs-grid](../../../../sources/naver__egjs-grid) |
| 기존 보고서 | [reports/korea-trending/repositories/naver__egjs-grid.md](../../../korea-trending/repositories/naver__egjs-grid.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 376 / 119 |
| 관측 최대 깊이 | 8 |
| 상위 디렉터리 | .github, .storybook, demo, packages, src, stories, test |
| 상위 확장자 | .ts: 118, .tsx: 81, .json: 39, .html: 37, .js: 33, (none): 18, .svelte: 10, .vue: 9, .md: 8, .png: 6, .css: 5, .jsx: 4 |
| 소스 패턴 | monorepo/workspace, cli-first, retrieval/vector path, spec/docs-driven, eval/test harness, ui/extension surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| packages/ngx-grid | packages workspace | 14 |
| packages/vue-grid | packages workspace | 13 |
| packages/svelte-grid | packages workspace | 12 |
| packages/react-grid | packages workspace | 9 |
| src | source boundary | 7 |
| .github | ci surface | 1 |
| demo | top-level component | 1 |
| packages | source boundary | 1 |
| stories | top-level component | 1 |
| test | validation surface | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| serve-dev | package.json | start | rollup -c -w |
| utility | package.json | jsdoc | rm -rf ./doc && jsdoc -c jsdoc.json |
| test | package.json | test | karma start |
| quality | package.json | lint | eslint ./src/ --ext .ts |
| build | package.json | build | rm -rf ./dist ./declaration && rollup -c && npm run declaration && npm run printsizes |
| test | package.json | test:chrome | karma start --chrome |
| test | package.json | coverage | karma start --coverage && print-coveralls --sort=desc |
| test | package.json | coveralls | cat ./coverage/lcov.info \| ./node_modules/coveralls/bin/coveralls.js |
| utility | package.json | e2e:pre-install | concurrently npm:e2e:pre-install:react npm:e2e:pre-install:angular npm:e2e:pre-install:angular-project npm:e2e:pre-install:vue npm:e2e:pre-install:svelte npm:e2e:pre-install:vue3 |
| utility | package.json | e2e:pre-install:react | cd packages/react-grid/ && npm i |
| utility | package.json | e2e:pre-install:angular | cd packages/ngx-grid/ && npm i |
| utility | package.json | e2e:pre-install:angular-project | cd packages/ngx-grid/projects/ngx-grid/ && npm i |
| utility | package.json | e2e:pre-install:vue | cd packages/vue-grid/ && npm i |
| utility | package.json | e2e:pre-install:svelte | cd packages/svelte-grid/ && npm i |
| utility | package.json | e2e:pre-install:vue3 | cd packages/vue-grid/vue3/ && npm i |
| build | package.json | e2e:pre-build | npm run build && cpx 'declaration/**/*' packages/ngx-grid/projects/ngx-grid/node_modules/@egjs/grid/declaration --clean |
| serve-dev | package.json | e2e:storybook | rm -rf node_modules/.cache/storybook/ && npm run e2e:storybook:all 2>&1 >/dev/null |
| utility | package.json | e2e:storybook:all | concurrently -k -r npm:e2e:storybook:vanilla npm:e2e:storybook:react npm:e2e:storybook:angular npm:e2e:storybook:vue npm:e2e:storybook:svelte npm:e2e:storybook:vue3 |
| utility | package.json | e2e:storybook:vanilla | node_modules/@storybook/react/bin/index.js -p 6006 --quiet --ci |
| utility | package.json | e2e:storybook:react | cd packages/react-grid/ && node_modules/@storybook/react/bin/index.js -p 6007 --quiet --ci |
| utility | package.json | e2e:storybook:angular | cd packages/ngx-grid/ && node_modules/@storybook/angular/bin/index.js -p 6008 --quiet --ci |
| utility | package.json | e2e:storybook:vue | cd packages/vue-grid/ && node_modules/@storybook/vue/bin/index.js -p 6009 --quiet --ci |
| utility | package.json | e2e:storybook:svelte | cd packages/svelte-grid/ && node_modules/@storybook/svelte/bin/index.js -p 6010 --quiet --ci |
| utility | package.json | e2e:storybook:vue3 | cd packages/vue-grid/vue3/ && node_modules/@storybook/vue3/bin/index.js -p 6011 --quiet --ci |
| utility | package.json | e2e:headless | concurrently -k -r -s "first" npm:e2e:storybook npm:e2e:steps |
| utility | package.json | e2e:steps | HEADLESS=true codeceptjs run --steps |
| utility | package.json | e2e:ui | concurrently -k -r npm:e2e:storybook "npm:e2e:ui:app" |
| utility | package.json | e2e:ui:app | codecept-ui --app --verbose |
| build | package.json | printsizes | print-sizes ./dist --exclude=\.map |
| quality | package.json | declaration | rm -rf declaration && tsc -p tsconfig.declaration.json |
| test | package.json | demo:build | npm run build && npm run jsdoc && npm run demo:prebuild-version && npm run demo:prebuild-latest && npm run build:storybook |
| build | package.json | demo:prebuild-version | cpx 'dist/**/*' demo/release/$npm_package_version/dist --clean && cpx 'doc/**/*' demo/release/$npm_package_version/doc --clean |
| test | package.json | demo:prebuild-latest | cpx 'dist/**/*' demo/release/latest/dist --clean && cpx 'doc/**/*' demo/release/latest/doc --clean |
| build | package.json | demo:deploy | npm run demo:build && npm run demo:deploy-add |
| utility | package.json | demo:deploy-add | gh-pages -d demo/ --add --remote upstream |
| utility | package.json | demo:deploy-init | gh-pages -d demo/ --remote upstream |
| build | package.json | release | release-helper upstream |
| build | package.json | packages | npm run packages:update && npm run packages:build && npm run packages:publish |
| utility | package.json | packages:update | pvu --update=react-grid,ngx-grid/projects/ngx-grid,vue-grid,svelte-grid |
| build | package.json | packages:build | pvu --build=react-grid,ngx-grid/,vue-grid,svelte-grid |


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
| entrypoints | [src/index.cjs.ts](../../../../sources/naver__egjs-grid/src/index.cjs.ts) | entrypoints signal |
| entrypoints | [src/index.ts](../../../../sources/naver__egjs-grid/src/index.ts) | entrypoints signal |
| entrypoints | [src/index.umd.ts](../../../../sources/naver__egjs-grid/src/index.umd.ts) | entrypoints signal |
| entrypoints | [packages/vue-grid/vue3/.storybook/main.js](../../../../sources/naver__egjs-grid/packages/vue-grid/vue3/.storybook/main.js) | entrypoints signal |
| config | [package.json](../../../../sources/naver__egjs-grid/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/naver__egjs-grid/tsconfig.json) | config signal |
| config | [test/e2e/tsconfig.json](../../../../sources/naver__egjs-grid/test/e2e/tsconfig.json) | config signal |
| config | [packages/vue-grid/package.json](../../../../sources/naver__egjs-grid/packages/vue-grid/package.json) | config signal |
| docs | [README.md](../../../../sources/naver__egjs-grid/README.md) | docs signal |
| docs | [packages/vue-grid/README.md](../../../../sources/naver__egjs-grid/packages/vue-grid/README.md) | docs signal |
| docs | [packages/svelte-grid/README.md](../../../../sources/naver__egjs-grid/packages/svelte-grid/README.md) | docs signal |
| docs | [packages/react-grid/README.md](../../../../sources/naver__egjs-grid/packages/react-grid/README.md) | docs signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 19 | [src/index.cjs.ts](../../../../sources/naver__egjs-grid/src/index.cjs.ts)<br>[src/index.ts](../../../../sources/naver__egjs-grid/src/index.ts)<br>[src/index.umd.ts](../../../../sources/naver__egjs-grid/src/index.umd.ts)<br>[packages/vue-grid/vue3/.storybook/main.js](../../../../sources/naver__egjs-grid/packages/vue-grid/vue3/.storybook/main.js)<br>[packages/vue-grid/src/index.ts](../../../../sources/naver__egjs-grid/packages/vue-grid/src/index.ts)<br>[packages/vue-grid/src/index.umd.ts](../../../../sources/naver__egjs-grid/packages/vue-grid/src/index.umd.ts)<br>[packages/vue-grid/.storybook/main.js](../../../../sources/naver__egjs-grid/packages/vue-grid/.storybook/main.js)<br>[packages/svelte-grid/src/index.d.ts](../../../../sources/naver__egjs-grid/packages/svelte-grid/src/index.d.ts) |
| agentRuntime | 0 | 명확하지 않음 |
| mcp | 0 | 명확하지 않음 |
| retrieval | 18 | [test/e2e/manual/index.html](../../../../sources/naver__egjs-grid/test/e2e/manual/index.html)<br>[src/index.cjs.ts](../../../../sources/naver__egjs-grid/src/index.cjs.ts)<br>[src/index.ts](../../../../sources/naver__egjs-grid/src/index.ts)<br>[src/index.umd.ts](../../../../sources/naver__egjs-grid/src/index.umd.ts)<br>[packages/vue-grid/vue3/storybook-static/index.html](../../../../sources/naver__egjs-grid/packages/vue-grid/vue3/storybook-static/index.html)<br>[packages/vue-grid/vue3/public/index.html](../../../../sources/naver__egjs-grid/packages/vue-grid/vue3/public/index.html)<br>[packages/vue-grid/src/index.ts](../../../../sources/naver__egjs-grid/packages/vue-grid/src/index.ts)<br>[packages/vue-grid/src/index.umd.ts](../../../../sources/naver__egjs-grid/packages/vue-grid/src/index.umd.ts) |
| spec | 12 | [test/unit/ContainerManager.spec.ts](../../../../sources/naver__egjs-grid/test/unit/ContainerManager.spec.ts)<br>[test/unit/FrameGrid.spec.ts](../../../../sources/naver__egjs-grid/test/unit/FrameGrid.spec.ts)<br>[test/unit/Grid.spec.ts](../../../../sources/naver__egjs-grid/test/unit/Grid.spec.ts)<br>[test/unit/GridItem.spec.ts](../../../../sources/naver__egjs-grid/test/unit/GridItem.spec.ts)<br>[test/unit/ItemRenderer.spec.ts](../../../../sources/naver__egjs-grid/test/unit/ItemRenderer.spec.ts)<br>[test/unit/JustifiedGrid.spec.ts](../../../../sources/naver__egjs-grid/test/unit/JustifiedGrid.spec.ts)<br>[test/unit/MasonryGrid.spec.ts](../../../../sources/naver__egjs-grid/test/unit/MasonryGrid.spec.ts)<br>[test/unit/PackingGrid.spec.ts](../../../../sources/naver__egjs-grid/test/unit/PackingGrid.spec.ts) |
| eval | 45 | [tsconfig.test.json](../../../../sources/naver__egjs-grid/tsconfig.test.json)<br>[test/unit/ContainerManager.spec.ts](../../../../sources/naver__egjs-grid/test/unit/ContainerManager.spec.ts)<br>[test/unit/FrameGrid.spec.ts](../../../../sources/naver__egjs-grid/test/unit/FrameGrid.spec.ts)<br>[test/unit/Grid.spec.ts](../../../../sources/naver__egjs-grid/test/unit/Grid.spec.ts)<br>[test/unit/GridItem.spec.ts](../../../../sources/naver__egjs-grid/test/unit/GridItem.spec.ts)<br>[test/unit/ItemRenderer.spec.ts](../../../../sources/naver__egjs-grid/test/unit/ItemRenderer.spec.ts)<br>[test/unit/JustifiedGrid.spec.ts](../../../../sources/naver__egjs-grid/test/unit/JustifiedGrid.spec.ts)<br>[test/unit/MasonryGrid.spec.ts](../../../../sources/naver__egjs-grid/test/unit/MasonryGrid.spec.ts) |
| security | 0 | 명확하지 않음 |
| ci | 1 | [.github/workflows/run-e2e.yml](../../../../sources/naver__egjs-grid/.github/workflows/run-e2e.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 7 | [README.md](../../../../sources/naver__egjs-grid/README.md)<br>[packages/vue-grid/README.md](../../../../sources/naver__egjs-grid/packages/vue-grid/README.md)<br>[packages/svelte-grid/README.md](../../../../sources/naver__egjs-grid/packages/svelte-grid/README.md)<br>[packages/react-grid/README.md](../../../../sources/naver__egjs-grid/packages/react-grid/README.md)<br>[packages/ngx-grid/README.md](../../../../sources/naver__egjs-grid/packages/ngx-grid/README.md)<br>[packages/ngx-grid/projects/ngx-grid/README.md](../../../../sources/naver__egjs-grid/packages/ngx-grid/projects/ngx-grid/README.md)<br>[.storybook/readme.js](../../../../sources/naver__egjs-grid/.storybook/readme.js) |
| config | 16 | [package.json](../../../../sources/naver__egjs-grid/package.json)<br>[tsconfig.json](../../../../sources/naver__egjs-grid/tsconfig.json)<br>[test/e2e/tsconfig.json](../../../../sources/naver__egjs-grid/test/e2e/tsconfig.json)<br>[packages/vue-grid/package.json](../../../../sources/naver__egjs-grid/packages/vue-grid/package.json)<br>[packages/vue-grid/tsconfig.json](../../../../sources/naver__egjs-grid/packages/vue-grid/tsconfig.json)<br>[packages/vue-grid/vue3/package.json](../../../../sources/naver__egjs-grid/packages/vue-grid/vue3/package.json)<br>[packages/svelte-grid/package.json](../../../../sources/naver__egjs-grid/packages/svelte-grid/package.json)<br>[packages/svelte-grid/tsconfig.json](../../../../sources/naver__egjs-grid/packages/svelte-grid/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 45 | [tsconfig.test.json](../../../../sources/naver__egjs-grid/tsconfig.test.json)<br>[test/unit/ContainerManager.spec.ts](../../../../sources/naver__egjs-grid/test/unit/ContainerManager.spec.ts)<br>[test/unit/FrameGrid.spec.ts](../../../../sources/naver__egjs-grid/test/unit/FrameGrid.spec.ts)<br>[test/unit/Grid.spec.ts](../../../../sources/naver__egjs-grid/test/unit/Grid.spec.ts)<br>[test/unit/GridItem.spec.ts](../../../../sources/naver__egjs-grid/test/unit/GridItem.spec.ts)<br>[test/unit/ItemRenderer.spec.ts](../../../../sources/naver__egjs-grid/test/unit/ItemRenderer.spec.ts) |
| CI workflow | 1 | [.github/workflows/run-e2e.yml](../../../../sources/naver__egjs-grid/.github/workflows/run-e2e.yml) |
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

1. 핵심 참조에서 시작: `src/index.cjs.ts`, `src/index.ts`, `src/index.umd.ts`.
2. entrypoint를 따라 실행 흐름 확인: `src/index.cjs.ts`, `src/index.ts`, `src/index.umd.ts`.
3. retrieval/memory/indexing 확인: `test/e2e/manual/index.html`, `src/index.cjs.ts`, `src/index.ts`.
4. test/eval 파일로 동작 검증: `tsconfig.test.json`, `test/unit/ContainerManager.spec.ts`, `test/unit/FrameGrid.spec.ts`.

## 기존 레포 인사이트

일반 AI 오픈소스 관점에서 A component that can arrange items according to the type of grids. 핵심 구조 신호는 TypeScript, package.json, README.md, LICENSE, react, playwright이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 더 깊은 구조 스캔 필요입니다.
