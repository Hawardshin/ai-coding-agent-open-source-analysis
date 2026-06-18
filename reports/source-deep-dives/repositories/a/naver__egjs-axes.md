# naver/egjs-axes 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

A module used to change the information of user action entered by various input devices such as touch screen or mouse into the logical virtual coordinates.

## 요약

- 조사 단위: `sources/naver__egjs-axes` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 420 files, 68 directories, depth score 99, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 entrypoints=packages/vue2-axes/src/index.ts, packages/vue-axes/src/App.vue, packages/vue-axes/src/main.ts이고, 의존성 단서는 react, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | naver/egjs-axes |
| 주제 | 일반 AI 오픈소스 / 일반 AI 오픈소스 |
| Region | korea |
| Language | TypeScript |
| Stars | 187 |
| Forks | 31 |
| License | MIT |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/naver__egjs-axes](../../../../sources/naver__egjs-axes) |
| 기존 보고서 | [reports/korea-trending/repositories/naver__egjs-axes.md](../../../korea-trending/repositories/naver__egjs-axes.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 420 / 68 |
| 관측 최대 깊이 | 7 |
| 상위 디렉터리 | .github, config, packages |
| 상위 확장자 | .png: 70, .jpg: 66, .ts: 40, .js: 34, .txt: 34, .css: 26, .json: 26, .tsx: 20, .svg: 19, .md: 16, (none): 16, .mdx: 14 |
| 소스 패턴 | monorepo/workspace, cli-first, api/server, retrieval/vector path, spec/docs-driven, eval/test harness, ui/extension surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| packages/axes | packages workspace | 47 |
| packages/demo | packages workspace | 40 |
| packages/react-axes | packages workspace | 11 |
| packages/svelte-axes | packages workspace | 7 |
| packages/vue-axes | packages workspace | 7 |
| packages/vue2-axes | packages workspace | 7 |
| .github | ci surface | 1 |
| config | top-level component | 1 |
| packages | source boundary | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| quality | package.json | lint | eslint ./packages/axes/src/**/*.ts |
| build | package.json | packages | npm run packages:update && npm run packages:build && npm run packages:publish |
| utility | package.json | packages:update | lerna-helper version |
| build | package.json | packages:build | lerna run build --ignore demo |
| utility | package.json | packages:publish | lerna-helper publish --commit 'chore: update packages versions' |
| build | package.json | docs:build | rm -rf ./packages/demo/docs/api && jsdoc-to-mdx -c ./jsdoc-to-mdx.json |
| build | package.json | demo:build | npm run docs:build && npm run build --prefix packages/demo |
| build | package.json | demo:build-docusaurus | npm run build --prefix demo |
| build | package.json | demo:deploy | lerna-helper deploy --base @egjs/axes --src packages/demo/build/ --remote upstream |
| build | package.json | demo:deploy-origin | lerna-helper deploy --base @egjs/axes --src packages/demo/build/ --remote origin |
| build | package.json | release | lerna-helper release --base @egjs/axes --remote upstream --branch master |
| quality | package.json | prepush | npm run lint |
| utility | package.json | commitmsg | node config/validate-commit-msg.js |


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
| entrypoints | [packages/vue2-axes/src/index.ts](../../../../sources/naver__egjs-axes/packages/vue2-axes/src/index.ts) | entrypoints signal |
| entrypoints | [packages/vue-axes/src/App.vue](../../../../sources/naver__egjs-axes/packages/vue-axes/src/App.vue) | entrypoints signal |
| entrypoints | [packages/vue-axes/src/main.ts](../../../../sources/naver__egjs-axes/packages/vue-axes/src/main.ts) | entrypoints signal |
| entrypoints | [packages/svelte-axes/src/App.svelte](../../../../sources/naver__egjs-axes/packages/svelte-axes/src/App.svelte) | entrypoints signal |
| config | [package.json](../../../../sources/naver__egjs-axes/package.json) | config signal |
| config | [packages/vue2-axes/package.json](../../../../sources/naver__egjs-axes/packages/vue2-axes/package.json) | config signal |
| config | [packages/vue2-axes/tsconfig.json](../../../../sources/naver__egjs-axes/packages/vue2-axes/tsconfig.json) | config signal |
| config | [packages/vue-axes/package.json](../../../../sources/naver__egjs-axes/packages/vue-axes/package.json) | config signal |
| docs | [README.md](../../../../sources/naver__egjs-axes/README.md) | docs signal |
| docs | [packages/vue2-axes/README.md](../../../../sources/naver__egjs-axes/packages/vue2-axes/README.md) | docs signal |
| docs | [packages/vue-axes/README.md](../../../../sources/naver__egjs-axes/packages/vue-axes/README.md) | docs signal |
| docs | [packages/svelte-axes/README.md](../../../../sources/naver__egjs-axes/packages/svelte-axes/README.md) | docs signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 12 | [packages/vue2-axes/src/index.ts](../../../../sources/naver__egjs-axes/packages/vue2-axes/src/index.ts)<br>[packages/vue-axes/src/App.vue](../../../../sources/naver__egjs-axes/packages/vue-axes/src/App.vue)<br>[packages/vue-axes/src/main.ts](../../../../sources/naver__egjs-axes/packages/vue-axes/src/main.ts)<br>[packages/svelte-axes/src/App.svelte](../../../../sources/naver__egjs-axes/packages/svelte-axes/src/App.svelte)<br>[packages/svelte-axes/src/main.js](../../../../sources/naver__egjs-axes/packages/svelte-axes/src/main.js)<br>[packages/react-axes/src/App.css](../../../../sources/naver__egjs-axes/packages/react-axes/src/App.css)<br>[packages/react-axes/src/App.tsx](../../../../sources/naver__egjs-axes/packages/react-axes/src/App.tsx)<br>[packages/react-axes/src/index.css](../../../../sources/naver__egjs-axes/packages/react-axes/src/index.css) |
| agentRuntime | 0 | 명확하지 않음 |
| mcp | 0 | 명확하지 않음 |
| retrieval | 19 | [packages/vue2-axes/src/index.ts](../../../../sources/naver__egjs-axes/packages/vue2-axes/src/index.ts)<br>[packages/vue2-axes/public/index.html](../../../../sources/naver__egjs-axes/packages/vue2-axes/public/index.html)<br>[packages/vue2-axes/demo/index.ts](../../../../sources/naver__egjs-axes/packages/vue2-axes/demo/index.ts)<br>[packages/vue-axes/src/vue-axes/index.ts](../../../../sources/naver__egjs-axes/packages/vue-axes/src/vue-axes/index.ts)<br>[packages/vue-axes/public/index.html](../../../../sources/naver__egjs-axes/packages/vue-axes/public/index.html)<br>[packages/svelte-axes/src/svelte-axes/index.ts](../../../../sources/naver__egjs-axes/packages/svelte-axes/src/svelte-axes/index.ts)<br>[packages/svelte-axes/public/index.html](../../../../sources/naver__egjs-axes/packages/svelte-axes/public/index.html)<br>[packages/react-axes/src/index.css](../../../../sources/naver__egjs-axes/packages/react-axes/src/index.css) |
| spec | 12 | [packages/axes/test/unit/AnimationManager.spec.js](../../../../sources/naver__egjs-axes/packages/axes/test/unit/AnimationManager.spec.js)<br>[packages/axes/test/unit/Axes.spec.js](../../../../sources/naver__egjs-axes/packages/axes/test/unit/Axes.spec.js)<br>[packages/axes/test/unit/AxisManager.spec.js](../../../../sources/naver__egjs-axes/packages/axes/test/unit/AxisManager.spec.js)<br>[packages/axes/test/unit/Coordinate.spec.js](../../../../sources/naver__egjs-axes/packages/axes/test/unit/Coordinate.spec.js)<br>[packages/axes/test/unit/InputObserver.spec.js](../../../../sources/naver__egjs-axes/packages/axes/test/unit/InputObserver.spec.js)<br>[packages/axes/test/unit/utils.spec.js](../../../../sources/naver__egjs-axes/packages/axes/test/unit/utils.spec.js)<br>[packages/axes/test/unit/inputType/InputType.spec.js](../../../../sources/naver__egjs-axes/packages/axes/test/unit/inputType/InputType.spec.js)<br>[packages/axes/test/unit/inputType/MoveKeyInput.spec.js](../../../../sources/naver__egjs-axes/packages/axes/test/unit/inputType/MoveKeyInput.spec.js) |
| eval | 25 | [packages/axes/test/hammer-simulator.run.js](../../../../sources/naver__egjs-axes/packages/axes/test/hammer-simulator.run.js)<br>[packages/axes/test/unit/AnimationManager.spec.js](../../../../sources/naver__egjs-axes/packages/axes/test/unit/AnimationManager.spec.js)<br>[packages/axes/test/unit/Axes.spec.js](../../../../sources/naver__egjs-axes/packages/axes/test/unit/Axes.spec.js)<br>[packages/axes/test/unit/AxisManager.spec.js](../../../../sources/naver__egjs-axes/packages/axes/test/unit/AxisManager.spec.js)<br>[packages/axes/test/unit/Coordinate.spec.js](../../../../sources/naver__egjs-axes/packages/axes/test/unit/Coordinate.spec.js)<br>[packages/axes/test/unit/InputObserver.spec.js](../../../../sources/naver__egjs-axes/packages/axes/test/unit/InputObserver.spec.js)<br>[packages/axes/test/unit/utils.spec.js](../../../../sources/naver__egjs-axes/packages/axes/test/unit/utils.spec.js)<br>[packages/axes/test/unit/inputType/InputType.spec.js](../../../../sources/naver__egjs-axes/packages/axes/test/unit/inputType/InputType.spec.js) |
| security | 0 | 명확하지 않음 |
| ci | 1 | [.github/workflows/run-unit.yml](../../../../sources/naver__egjs-axes/.github/workflows/run-unit.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 55 | [README.md](../../../../sources/naver__egjs-axes/README.md)<br>[packages/vue2-axes/README.md](../../../../sources/naver__egjs-axes/packages/vue2-axes/README.md)<br>[packages/vue-axes/README.md](../../../../sources/naver__egjs-axes/packages/vue-axes/README.md)<br>[packages/svelte-axes/README.md](../../../../sources/naver__egjs-axes/packages/svelte-axes/README.md)<br>[packages/react-axes/README.md](../../../../sources/naver__egjs-axes/packages/react-axes/README.md)<br>[packages/demo/docusaurus.config.js](../../../../sources/naver__egjs-axes/packages/demo/docusaurus.config.js)<br>[packages/demo/README.md](../../../../sources/naver__egjs-axes/packages/demo/README.md)<br>[packages/demo/docs/tutorials/Getting Started.mdx](../../../../sources/naver__egjs-axes/packages/demo/docs/tutorials/Getting Started.mdx) |
| config | 13 | [package.json](../../../../sources/naver__egjs-axes/package.json)<br>[packages/vue2-axes/package.json](../../../../sources/naver__egjs-axes/packages/vue2-axes/package.json)<br>[packages/vue2-axes/tsconfig.json](../../../../sources/naver__egjs-axes/packages/vue2-axes/tsconfig.json)<br>[packages/vue-axes/package.json](../../../../sources/naver__egjs-axes/packages/vue-axes/package.json)<br>[packages/vue-axes/tsconfig.json](../../../../sources/naver__egjs-axes/packages/vue-axes/tsconfig.json)<br>[packages/svelte-axes/package.json](../../../../sources/naver__egjs-axes/packages/svelte-axes/package.json)<br>[packages/svelte-axes/tsconfig.json](../../../../sources/naver__egjs-axes/packages/svelte-axes/tsconfig.json)<br>[packages/react-axes/package.json](../../../../sources/naver__egjs-axes/packages/react-axes/package.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 25 | [packages/axes/test/hammer-simulator.run.js](../../../../sources/naver__egjs-axes/packages/axes/test/hammer-simulator.run.js)<br>[packages/axes/test/unit/AnimationManager.spec.js](../../../../sources/naver__egjs-axes/packages/axes/test/unit/AnimationManager.spec.js)<br>[packages/axes/test/unit/Axes.spec.js](../../../../sources/naver__egjs-axes/packages/axes/test/unit/Axes.spec.js)<br>[packages/axes/test/unit/AxisManager.spec.js](../../../../sources/naver__egjs-axes/packages/axes/test/unit/AxisManager.spec.js)<br>[packages/axes/test/unit/Coordinate.spec.js](../../../../sources/naver__egjs-axes/packages/axes/test/unit/Coordinate.spec.js)<br>[packages/axes/test/unit/InputObserver.spec.js](../../../../sources/naver__egjs-axes/packages/axes/test/unit/InputObserver.spec.js) |
| CI workflow | 1 | [.github/workflows/run-unit.yml](../../../../sources/naver__egjs-axes/.github/workflows/run-unit.yml) |
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

1. 핵심 참조에서 시작: `packages/vue2-axes/src/index.ts`, `packages/vue-axes/src/App.vue`, `packages/vue-axes/src/main.ts`.
2. entrypoint를 따라 실행 흐름 확인: `packages/vue2-axes/src/index.ts`, `packages/vue-axes/src/App.vue`, `packages/vue-axes/src/main.ts`.
3. retrieval/memory/indexing 확인: `packages/vue2-axes/src/index.ts`, `packages/vue2-axes/public/index.html`, `packages/vue2-axes/demo/index.ts`.
4. test/eval 파일로 동작 검증: `packages/axes/test/hammer-simulator.run.js`, `packages/axes/test/unit/AnimationManager.spec.js`, `packages/axes/test/unit/Axes.spec.js`.

## 기존 레포 인사이트

일반 AI 오픈소스 관점에서 A module used to change the information of user action entered by various input devices such as touch screen or mouse in. 핵심 구조 신호는 TypeScript, package.json, README.md, LICENSE, react, ci이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 더 깊은 구조 스캔 필요입니다.
