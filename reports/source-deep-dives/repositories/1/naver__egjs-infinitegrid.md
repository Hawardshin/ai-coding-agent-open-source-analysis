# naver/egjs-infinitegrid 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

A module used to arrange card elements including content infinitely on a grid layout.

## 요약

- 조사 단위: `sources/naver__egjs-infinitegrid` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 1,271 files, 211 directories, depth score 97, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 monorepo/workspace, cli-first, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 entrypoints=packages/vue3-infinitegrid/src/index.ts, packages/vue3-infinitegrid/.storybook/main.js, packages/vue-infinitegrid/src/index.ts이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | naver/egjs-infinitegrid |
| 주제 | 일반 AI 오픈소스 / 일반 AI 오픈소스 |
| Region | korea |
| Language | TypeScript |
| Stars | 2359 |
| Forks | 95 |
| License | MIT |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/naver__egjs-infinitegrid](../../../../sources/naver__egjs-infinitegrid) |
| 기존 보고서 | [reports/korea-trending/repositories/naver__egjs-infinitegrid.md](../../../korea-trending/repositories/naver__egjs-infinitegrid.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 1271 / 211 |
| 관측 최대 깊이 | 8 |
| 상위 디렉터리 | .github, config, packages |
| 상위 확장자 | .mdx: 706, .ts: 130, .tsx: 101, .jpg: 60, .json: 48, .js: 42, .svg: 29, .html: 26, (none): 24, .txt: 23, .md: 21, .vue: 16 |
| 소스 패턴 | monorepo/workspace, cli-first, retrieval/vector path, spec/docs-driven, eval/test harness |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| packages/infinitegrid | packages workspace | 44 |
| packages/docs | packages workspace | 34 |
| packages/ngx-infinitegrid | packages workspace | 20 |
| packages/svelte-infinitegrid | packages workspace | 12 |
| packages/react-infinitegrid | packages workspace | 9 |
| packages/vue-infinitegrid | packages workspace | 7 |
| packages/vue3-infinitegrid | packages workspace | 6 |
| .github | ci surface | 1 |
| config | top-level component | 1 |
| packages | source boundary | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| build | package.json | packages | npm run packages:update && npm run packages:build && npm run packages:publish |
| utility | package.json | packages:update | lerna-helper version |
| build | package.json | packages:build | lerna run build --ignore @egjs/ngx-infinitegrid --ignore docs |
| utility | package.json | packages:publish | lerna-helper publish --ignore @egjs/ngx-infinitegrid --commit 'chore: update packages versions' |
| quality | package.json | changelog | lerna-helper changelog --type all --base @egjs/infinitegrid |
| build | package.json | docs:build | jsdoc-to-mdx -c ./jsdoc-to-mdx.json |
| utility | package.json | docs:version | node ./config/docs-version-up |
| build | package.json | demo:build | npm run docs:build && npm run docs:version && npm run build --prefix packages/docs |
| utility | package.json | demo:deploy | gh-pages -d ./demo --dest=./ --add --remote upstream |
| utility | package.json | deploy | lerna-helper deploy --base @egjs/infinitegrid --remote upstream |
| build | package.json | release | lerna-helper release --base @egjs/infinitegrid --remote upstream --branch master |


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
| entrypoints | [packages/vue3-infinitegrid/src/index.ts](../../../../sources/naver__egjs-infinitegrid/packages/vue3-infinitegrid/src/index.ts) | entrypoints signal |
| entrypoints | [packages/vue3-infinitegrid/.storybook/main.js](../../../../sources/naver__egjs-infinitegrid/packages/vue3-infinitegrid/.storybook/main.js) | entrypoints signal |
| entrypoints | [packages/vue-infinitegrid/src/index.ts](../../../../sources/naver__egjs-infinitegrid/packages/vue-infinitegrid/src/index.ts) | entrypoints signal |
| entrypoints | [packages/vue-infinitegrid/.storybook/main.js](../../../../sources/naver__egjs-infinitegrid/packages/vue-infinitegrid/.storybook/main.js) | entrypoints signal |
| config | [package.json](../../../../sources/naver__egjs-infinitegrid/package.json) | config signal |
| config | [packages/vue3-infinitegrid/package.json](../../../../sources/naver__egjs-infinitegrid/packages/vue3-infinitegrid/package.json) | config signal |
| config | [packages/vue3-infinitegrid/tsconfig.json](../../../../sources/naver__egjs-infinitegrid/packages/vue3-infinitegrid/tsconfig.json) | config signal |
| config | [packages/vue-infinitegrid/package.json](../../../../sources/naver__egjs-infinitegrid/packages/vue-infinitegrid/package.json) | config signal |
| docs | [README.md](../../../../sources/naver__egjs-infinitegrid/README.md) | docs signal |
| docs | [packages/vue3-infinitegrid/README.md](../../../../sources/naver__egjs-infinitegrid/packages/vue3-infinitegrid/README.md) | docs signal |
| docs | [packages/vue-infinitegrid/README.md](../../../../sources/naver__egjs-infinitegrid/packages/vue-infinitegrid/README.md) | docs signal |
| docs | [packages/svelte-infinitegrid/README.md](../../../../sources/naver__egjs-infinitegrid/packages/svelte-infinitegrid/README.md) | docs signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 20 | [packages/vue3-infinitegrid/src/index.ts](../../../../sources/naver__egjs-infinitegrid/packages/vue3-infinitegrid/src/index.ts)<br>[packages/vue3-infinitegrid/.storybook/main.js](../../../../sources/naver__egjs-infinitegrid/packages/vue3-infinitegrid/.storybook/main.js)<br>[packages/vue-infinitegrid/src/index.ts](../../../../sources/naver__egjs-infinitegrid/packages/vue-infinitegrid/src/index.ts)<br>[packages/vue-infinitegrid/.storybook/main.js](../../../../sources/naver__egjs-infinitegrid/packages/vue-infinitegrid/.storybook/main.js)<br>[packages/svelte-infinitegrid/src/index.d.ts](../../../../sources/naver__egjs-infinitegrid/packages/svelte-infinitegrid/src/index.d.ts)<br>[packages/svelte-infinitegrid/src/index.js](../../../../sources/naver__egjs-infinitegrid/packages/svelte-infinitegrid/src/index.js)<br>[packages/svelte-infinitegrid/src/index.umd.js](../../../../sources/naver__egjs-infinitegrid/packages/svelte-infinitegrid/src/index.umd.js)<br>[packages/svelte-infinitegrid/src/main.ts](../../../../sources/naver__egjs-infinitegrid/packages/svelte-infinitegrid/src/main.ts) |
| agentRuntime | 0 | 명확하지 않음 |
| mcp | 0 | 명확하지 않음 |
| retrieval | 16 | [packages/vue3-infinitegrid/src/index.ts](../../../../sources/naver__egjs-infinitegrid/packages/vue3-infinitegrid/src/index.ts)<br>[packages/vue-infinitegrid/src/index.ts](../../../../sources/naver__egjs-infinitegrid/packages/vue-infinitegrid/src/index.ts)<br>[packages/vue-infinitegrid/public/index.html](../../../../sources/naver__egjs-infinitegrid/packages/vue-infinitegrid/public/index.html)<br>[packages/svelte-infinitegrid/src/index.d.ts](../../../../sources/naver__egjs-infinitegrid/packages/svelte-infinitegrid/src/index.d.ts)<br>[packages/svelte-infinitegrid/src/index.js](../../../../sources/naver__egjs-infinitegrid/packages/svelte-infinitegrid/src/index.js)<br>[packages/svelte-infinitegrid/src/index.umd.js](../../../../sources/naver__egjs-infinitegrid/packages/svelte-infinitegrid/src/index.umd.js)<br>[packages/svelte-infinitegrid/public/index.html](../../../../sources/naver__egjs-infinitegrid/packages/svelte-infinitegrid/public/index.html)<br>[packages/react-infinitegrid/src/index.ts](../../../../sources/naver__egjs-infinitegrid/packages/react-infinitegrid/src/index.ts) |
| spec | 13 | [packages/ngx-infinitegrid/tsconfig.spec.json](../../../../sources/naver__egjs-infinitegrid/packages/ngx-infinitegrid/tsconfig.spec.json)<br>[packages/ngx-infinitegrid/src/app/app.component.spec.ts](../../../../sources/naver__egjs-infinitegrid/packages/ngx-infinitegrid/src/app/app.component.spec.ts)<br>[packages/ngx-infinitegrid/projects/ngx-infinitegrid/tsconfig.spec.json](../../../../sources/naver__egjs-infinitegrid/packages/ngx-infinitegrid/projects/ngx-infinitegrid/tsconfig.spec.json)<br>[packages/ngx-infinitegrid/projects/ngx-infinitegrid/src/lib/ngx-infinitegrid.component.spec.ts](../../../../sources/naver__egjs-infinitegrid/packages/ngx-infinitegrid/projects/ngx-infinitegrid/src/lib/ngx-infinitegrid.component.spec.ts)<br>[packages/infinitegrid/test/unit/cfcs.spec.ts](../../../../sources/naver__egjs-infinitegrid/packages/infinitegrid/test/unit/cfcs.spec.ts)<br>[packages/infinitegrid/test/unit/Grids.spec.ts](../../../../sources/naver__egjs-infinitegrid/packages/infinitegrid/test/unit/Grids.spec.ts)<br>[packages/infinitegrid/test/unit/GroupManager.spec.ts](../../../../sources/naver__egjs-infinitegrid/packages/infinitegrid/test/unit/GroupManager.spec.ts)<br>[packages/infinitegrid/test/unit/Infinite.spec.ts](../../../../sources/naver__egjs-infinitegrid/packages/infinitegrid/test/unit/Infinite.spec.ts) |
| eval | 29 | [packages/ngx-infinitegrid/tsconfig.spec.json](../../../../sources/naver__egjs-infinitegrid/packages/ngx-infinitegrid/tsconfig.spec.json)<br>[packages/ngx-infinitegrid/src/test.ts](../../../../sources/naver__egjs-infinitegrid/packages/ngx-infinitegrid/src/test.ts)<br>[packages/ngx-infinitegrid/src/app/app.component.spec.ts](../../../../sources/naver__egjs-infinitegrid/packages/ngx-infinitegrid/src/app/app.component.spec.ts)<br>[packages/ngx-infinitegrid/projects/ngx-infinitegrid/tsconfig.spec.json](../../../../sources/naver__egjs-infinitegrid/packages/ngx-infinitegrid/projects/ngx-infinitegrid/tsconfig.spec.json)<br>[packages/ngx-infinitegrid/projects/ngx-infinitegrid/src/test.ts](../../../../sources/naver__egjs-infinitegrid/packages/ngx-infinitegrid/projects/ngx-infinitegrid/src/test.ts)<br>[packages/ngx-infinitegrid/projects/ngx-infinitegrid/src/lib/ngx-infinitegrid.component.spec.ts](../../../../sources/naver__egjs-infinitegrid/packages/ngx-infinitegrid/projects/ngx-infinitegrid/src/lib/ngx-infinitegrid.component.spec.ts)<br>[packages/infinitegrid/tsconfig.test.json](../../../../sources/naver__egjs-infinitegrid/packages/infinitegrid/tsconfig.test.json)<br>[packages/infinitegrid/test/unit/cfcs.spec.ts](../../../../sources/naver__egjs-infinitegrid/packages/infinitegrid/test/unit/cfcs.spec.ts) |
| security | 0 | 명확하지 않음 |
| ci | 2 | [.github/workflows/run-e2e.yml](../../../../sources/naver__egjs-infinitegrid/.github/workflows/run-e2e.yml)<br>[.github/workflows/static.yml](../../../../sources/naver__egjs-infinitegrid/.github/workflows/static.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 892 | [README.md](../../../../sources/naver__egjs-infinitegrid/README.md)<br>[packages/vue3-infinitegrid/README.md](../../../../sources/naver__egjs-infinitegrid/packages/vue3-infinitegrid/README.md)<br>[packages/vue-infinitegrid/README.md](../../../../sources/naver__egjs-infinitegrid/packages/vue-infinitegrid/README.md)<br>[packages/svelte-infinitegrid/README.md](../../../../sources/naver__egjs-infinitegrid/packages/svelte-infinitegrid/README.md)<br>[packages/react-infinitegrid/README.md](../../../../sources/naver__egjs-infinitegrid/packages/react-infinitegrid/README.md)<br>[packages/ngx-infinitegrid/README.md](../../../../sources/naver__egjs-infinitegrid/packages/ngx-infinitegrid/README.md)<br>[packages/ngx-infinitegrid/projects/ngx-infinitegrid/README.md](../../../../sources/naver__egjs-infinitegrid/packages/ngx-infinitegrid/projects/ngx-infinitegrid/README.md)<br>[packages/infinitegrid/README.md](../../../../sources/naver__egjs-infinitegrid/packages/infinitegrid/README.md) |
| config | 16 | [package.json](../../../../sources/naver__egjs-infinitegrid/package.json)<br>[packages/vue3-infinitegrid/package.json](../../../../sources/naver__egjs-infinitegrid/packages/vue3-infinitegrid/package.json)<br>[packages/vue3-infinitegrid/tsconfig.json](../../../../sources/naver__egjs-infinitegrid/packages/vue3-infinitegrid/tsconfig.json)<br>[packages/vue-infinitegrid/package.json](../../../../sources/naver__egjs-infinitegrid/packages/vue-infinitegrid/package.json)<br>[packages/vue-infinitegrid/tsconfig.json](../../../../sources/naver__egjs-infinitegrid/packages/vue-infinitegrid/tsconfig.json)<br>[packages/svelte-infinitegrid/package.json](../../../../sources/naver__egjs-infinitegrid/packages/svelte-infinitegrid/package.json)<br>[packages/svelte-infinitegrid/tsconfig.json](../../../../sources/naver__egjs-infinitegrid/packages/svelte-infinitegrid/tsconfig.json)<br>[packages/react-infinitegrid/package.json](../../../../sources/naver__egjs-infinitegrid/packages/react-infinitegrid/package.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 29 | [packages/ngx-infinitegrid/tsconfig.spec.json](../../../../sources/naver__egjs-infinitegrid/packages/ngx-infinitegrid/tsconfig.spec.json)<br>[packages/ngx-infinitegrid/src/test.ts](../../../../sources/naver__egjs-infinitegrid/packages/ngx-infinitegrid/src/test.ts)<br>[packages/ngx-infinitegrid/src/app/app.component.spec.ts](../../../../sources/naver__egjs-infinitegrid/packages/ngx-infinitegrid/src/app/app.component.spec.ts)<br>[packages/ngx-infinitegrid/projects/ngx-infinitegrid/tsconfig.spec.json](../../../../sources/naver__egjs-infinitegrid/packages/ngx-infinitegrid/projects/ngx-infinitegrid/tsconfig.spec.json)<br>[packages/ngx-infinitegrid/projects/ngx-infinitegrid/src/test.ts](../../../../sources/naver__egjs-infinitegrid/packages/ngx-infinitegrid/projects/ngx-infinitegrid/src/test.ts)<br>[packages/ngx-infinitegrid/projects/ngx-infinitegrid/src/lib/ngx-infinitegrid.component.spec.ts](../../../../sources/naver__egjs-infinitegrid/packages/ngx-infinitegrid/projects/ngx-infinitegrid/src/lib/ngx-infinitegrid.component.spec.ts) |
| CI workflow | 2 | [.github/workflows/run-e2e.yml](../../../../sources/naver__egjs-infinitegrid/.github/workflows/run-e2e.yml)<br>[.github/workflows/static.yml](../../../../sources/naver__egjs-infinitegrid/.github/workflows/static.yml) |
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

1. 핵심 참조에서 시작: `packages/vue3-infinitegrid/src/index.ts`, `packages/vue3-infinitegrid/.storybook/main.js`, `packages/vue-infinitegrid/src/index.ts`.
2. entrypoint를 따라 실행 흐름 확인: `packages/vue3-infinitegrid/src/index.ts`, `packages/vue3-infinitegrid/.storybook/main.js`, `packages/vue-infinitegrid/src/index.ts`.
3. retrieval/memory/indexing 확인: `packages/vue3-infinitegrid/src/index.ts`, `packages/vue-infinitegrid/src/index.ts`, `packages/vue-infinitegrid/public/index.html`.
4. test/eval 파일로 동작 검증: `packages/ngx-infinitegrid/tsconfig.spec.json`, `packages/ngx-infinitegrid/src/test.ts`, `packages/ngx-infinitegrid/src/app/app.component.spec.ts`.

## 기존 레포 인사이트

일반 AI 오픈소스 관점에서 A module used to arrange card elements including content infinitely on a grid layout.. 핵심 구조 신호는 TypeScript, package.json, README.md, LICENSE, ci, docs이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 더 깊은 구조 스캔 필요입니다.
