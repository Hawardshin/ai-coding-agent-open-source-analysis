# naver/egjs-view3d 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

Fast & customizable 3D model viewer for everyone

## 요약

- 조사 단위: `sources/naver__egjs-view3d` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 653 files, 123 directories, depth score 102, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 monorepo/workspace, cli-first, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 entrypoints=packages/vue3-view3d/src/index.ts, packages/vue3-view3d/src/index.umd.ts, packages/vue3-view3d/demo/main.ts이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | naver/egjs-view3d |
| 주제 | 일반 AI 오픈소스 / 일반 AI 오픈소스 |
| Region | korea |
| Language | TypeScript |
| Stars | 223 |
| Forks | 34 |
| License | MIT |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/naver__egjs-view3d](../../../../sources/naver__egjs-view3d) |
| 기존 보고서 | [reports/korea-trending/repositories/naver__egjs-view3d.md](../../../korea-trending/repositories/naver__egjs-view3d.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 653 / 123 |
| 관측 최대 깊이 | 8 |
| 상위 디렉터리 | .github, config, demo, packages |
| 상위 확장자 | .ts: 176, .mdx: 99, .json: 53, .tsx: 46, .js: 31, .svg: 31, (none): 24, .glb: 21, .md: 21, .webp: 21, .css: 18, .jpeg: 18 |
| 소스 패턴 | monorepo/workspace, cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| packages/view3d | packages workspace | 99 |
| packages/ngx-view3d | packages workspace | 9 |
| packages/react-view3d | packages workspace | 9 |
| packages/svelte-view3d | packages workspace | 9 |
| packages/vue-view3d | packages workspace | 9 |
| packages/vue3-view3d | packages workspace | 8 |
| packages/view3d-optimizer | packages workspace | 3 |
| .github | ci surface | 1 |
| config | top-level component | 1 |
| demo | top-level component | 1 |
| packages | source boundary | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| quality | package.json | lint | eslint 'packages/**/!(demo)/src/*.ts' |
| build | package.json | packages | npm run packages:update && npm run packages:build && npm run packages:publish |
| utility | package.json | packages:update | lerna-helper version |
| build | package.json | packages:build | npm run build --prefix packages/view3d && lerna run build --ignore @egjs/view3d --stream |
| utility | package.json | packages:publish | lerna-helper publish --commit 'chore: update packages versions' |
| quality | package.json | changelog | lerna-helper changelog --type all --base @egjs/view3d |
| build | package.json | docs:build | jsdoc-to-mdx -c ./jsdoc-to-mdx.json |
| build | package.json | demo:build | run-s demo:copy-lib docs:build demo:build-docusaurus |
| build | package.json | demo:copy-lib | npm run build --prefix packages/view3d && npm run demo:copy-lib --prefix packages/view3d |
| build | package.json | demo:build-docusaurus | npm run build --prefix demo |
| build | package.json | demo:deploy | lerna-helper deploy --base @egjs/view3d --src demo/build/ --remote upstream |
| build | package.json | demo:deploy-origin | lerna-helper deploy --base @egjs/view3d --src demo/build/ --remote origin |
| build | package.json | release | lerna-helper release --base @egjs/view3d --remote upstream --branch main |
| quality | package.json | bootstrap | lerna bootstrap --hoist three --hoist @types/three |


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
| entrypoints | [packages/vue3-view3d/src/index.ts](../../../../sources/naver__egjs-view3d/packages/vue3-view3d/src/index.ts) | entrypoints signal |
| entrypoints | [packages/vue3-view3d/src/index.umd.ts](../../../../sources/naver__egjs-view3d/packages/vue3-view3d/src/index.umd.ts) | entrypoints signal |
| entrypoints | [packages/vue3-view3d/demo/main.ts](../../../../sources/naver__egjs-view3d/packages/vue3-view3d/demo/main.ts) | entrypoints signal |
| entrypoints | [packages/vue-view3d/src/index.ts](../../../../sources/naver__egjs-view3d/packages/vue-view3d/src/index.ts) | entrypoints signal |
| config | [package.json](../../../../sources/naver__egjs-view3d/package.json) | config signal |
| config | [packages/vue3-view3d/package.json](../../../../sources/naver__egjs-view3d/packages/vue3-view3d/package.json) | config signal |
| config | [packages/vue3-view3d/tsconfig.json](../../../../sources/naver__egjs-view3d/packages/vue3-view3d/tsconfig.json) | config signal |
| config | [packages/vue-view3d/package.json](../../../../sources/naver__egjs-view3d/packages/vue-view3d/package.json) | config signal |
| docs | [README.md](../../../../sources/naver__egjs-view3d/README.md) | docs signal |
| docs | [packages/vue3-view3d/README.md](../../../../sources/naver__egjs-view3d/packages/vue3-view3d/README.md) | docs signal |
| docs | [packages/vue-view3d/README.md](../../../../sources/naver__egjs-view3d/packages/vue-view3d/README.md) | docs signal |
| docs | [packages/view3d-optimizer/README.md](../../../../sources/naver__egjs-view3d/packages/view3d-optimizer/README.md) | docs signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 15 | [packages/vue3-view3d/src/index.ts](../../../../sources/naver__egjs-view3d/packages/vue3-view3d/src/index.ts)<br>[packages/vue3-view3d/src/index.umd.ts](../../../../sources/naver__egjs-view3d/packages/vue3-view3d/src/index.umd.ts)<br>[packages/vue3-view3d/demo/main.ts](../../../../sources/naver__egjs-view3d/packages/vue3-view3d/demo/main.ts)<br>[packages/vue-view3d/src/index.ts](../../../../sources/naver__egjs-view3d/packages/vue-view3d/src/index.ts)<br>[packages/vue-view3d/src/index.umd.ts](../../../../sources/naver__egjs-view3d/packages/vue-view3d/src/index.umd.ts)<br>[packages/vue-view3d/demo/main.ts](../../../../sources/naver__egjs-view3d/packages/vue-view3d/demo/main.ts)<br>[packages/view3d/src/index.ts](../../../../sources/naver__egjs-view3d/packages/view3d/src/index.ts)<br>[packages/view3d/src/index.umd.ts](../../../../sources/naver__egjs-view3d/packages/view3d/src/index.umd.ts) |
| agentRuntime | 1 | [demo/src/components/playground/context.tsx](../../../../sources/naver__egjs-view3d/demo/src/components/playground/context.tsx) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 29 | [packages/vue3-view3d/src/index.ts](../../../../sources/naver__egjs-view3d/packages/vue3-view3d/src/index.ts)<br>[packages/vue3-view3d/src/index.umd.ts](../../../../sources/naver__egjs-view3d/packages/vue3-view3d/src/index.umd.ts)<br>[packages/vue-view3d/src/index.ts](../../../../sources/naver__egjs-view3d/packages/vue-view3d/src/index.ts)<br>[packages/vue-view3d/src/index.umd.ts](../../../../sources/naver__egjs-view3d/packages/vue-view3d/src/index.umd.ts)<br>[packages/vue-view3d/demo/index.html](../../../../sources/naver__egjs-view3d/packages/vue-view3d/demo/index.html)<br>[packages/view3d-optimizer/index.js](../../../../sources/naver__egjs-view3d/packages/view3d-optimizer/index.js)<br>[packages/view3d/test/manual/index.html](../../../../sources/naver__egjs-view3d/packages/view3d/test/manual/index.html)<br>[packages/view3d/test/manual/index.js](../../../../sources/naver__egjs-view3d/packages/view3d/test/manual/index.js) |
| spec | 39 | [packages/view3d/test/suite/utils.spec.ts](../../../../sources/naver__egjs-view3d/packages/view3d/test/suite/utils.spec.ts)<br>[packages/view3d/test/suite/View3D.spec.ts](../../../../sources/naver__egjs-view3d/packages/view3d/test/suite/View3D.spec.ts)<br>[packages/view3d/test/suite/xr/QuickLookSession.spec.ts](../../../../sources/naver__egjs-view3d/packages/view3d/test/suite/xr/QuickLookSession.spec.ts)<br>[packages/view3d/test/suite/xr/SceneViewerSession.spec.ts](../../../../sources/naver__egjs-view3d/packages/view3d/test/suite/xr/SceneViewerSession.spec.ts)<br>[packages/view3d/test/suite/xr/WebARSession.spec.ts](../../../../sources/naver__egjs-view3d/packages/view3d/test/suite/xr/WebARSession.spec.ts)<br>[packages/view3d/test/suite/xr/features/DOMOverlay.spec.ts](../../../../sources/naver__egjs-view3d/packages/view3d/test/suite/xr/features/DOMOverlay.spec.ts)<br>[packages/view3d/test/suite/xr/features/HitTest.spec.ts](../../../../sources/naver__egjs-view3d/packages/view3d/test/suite/xr/features/HitTest.spec.ts)<br>[packages/view3d/test/suite/plugin/ControlBar/AnimationProgressBar.spec.ts](../../../../sources/naver__egjs-view3d/packages/view3d/test/suite/plugin/ControlBar/AnimationProgressBar.spec.ts) |
| eval | 54 | [packages/view3d/test/.eslintrc.json](../../../../sources/naver__egjs-view3d/packages/view3d/test/.eslintrc.json)<br>[packages/view3d/test/.gitignore](../../../../sources/naver__egjs-view3d/packages/view3d/test/.gitignore)<br>[packages/view3d/test/cypress.json](../../../../sources/naver__egjs-view3d/packages/view3d/test/cypress.json)<br>[packages/view3d/test/package-lock.json](../../../../sources/naver__egjs-view3d/packages/view3d/test/package-lock.json)<br>[packages/view3d/test/package.json](../../../../sources/naver__egjs-view3d/packages/view3d/test/package.json)<br>[packages/view3d/test/setup.ts](../../../../sources/naver__egjs-view3d/packages/view3d/test/setup.ts)<br>[packages/view3d/test/test-utils.ts](../../../../sources/naver__egjs-view3d/packages/view3d/test/test-utils.ts)<br>[packages/view3d/test/tsconfig.json](../../../../sources/naver__egjs-view3d/packages/view3d/test/tsconfig.json) |
| security | 0 | 명확하지 않음 |
| ci | 1 | [.github/workflows/run-test.yml](../../../../sources/naver__egjs-view3d/.github/workflows/run-test.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 103 | [README.md](../../../../sources/naver__egjs-view3d/README.md)<br>[packages/vue3-view3d/README.md](../../../../sources/naver__egjs-view3d/packages/vue3-view3d/README.md)<br>[packages/vue-view3d/README.md](../../../../sources/naver__egjs-view3d/packages/vue-view3d/README.md)<br>[packages/view3d-optimizer/README.md](../../../../sources/naver__egjs-view3d/packages/view3d-optimizer/README.md)<br>[packages/view3d/README.md](../../../../sources/naver__egjs-view3d/packages/view3d/README.md)<br>[packages/svelte-view3d/README.md](../../../../sources/naver__egjs-view3d/packages/svelte-view3d/README.md)<br>[packages/react-view3d/README.md](../../../../sources/naver__egjs-view3d/packages/react-view3d/README.md)<br>[packages/ngx-view3d/README.md](../../../../sources/naver__egjs-view3d/packages/ngx-view3d/README.md) |
| config | 19 | [package.json](../../../../sources/naver__egjs-view3d/package.json)<br>[packages/vue3-view3d/package.json](../../../../sources/naver__egjs-view3d/packages/vue3-view3d/package.json)<br>[packages/vue3-view3d/tsconfig.json](../../../../sources/naver__egjs-view3d/packages/vue3-view3d/tsconfig.json)<br>[packages/vue-view3d/package.json](../../../../sources/naver__egjs-view3d/packages/vue-view3d/package.json)<br>[packages/vue-view3d/tsconfig.json](../../../../sources/naver__egjs-view3d/packages/vue-view3d/tsconfig.json)<br>[packages/view3d-optimizer/package.json](../../../../sources/naver__egjs-view3d/packages/view3d-optimizer/package.json)<br>[packages/view3d/package.json](../../../../sources/naver__egjs-view3d/packages/view3d/package.json)<br>[packages/view3d/tsconfig.json](../../../../sources/naver__egjs-view3d/packages/view3d/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 54 | [packages/view3d/test/.eslintrc.json](../../../../sources/naver__egjs-view3d/packages/view3d/test/.eslintrc.json)<br>[packages/view3d/test/.gitignore](../../../../sources/naver__egjs-view3d/packages/view3d/test/.gitignore)<br>[packages/view3d/test/cypress.json](../../../../sources/naver__egjs-view3d/packages/view3d/test/cypress.json)<br>[packages/view3d/test/package-lock.json](../../../../sources/naver__egjs-view3d/packages/view3d/test/package-lock.json)<br>[packages/view3d/test/package.json](../../../../sources/naver__egjs-view3d/packages/view3d/test/package.json)<br>[packages/view3d/test/setup.ts](../../../../sources/naver__egjs-view3d/packages/view3d/test/setup.ts) |
| CI workflow | 1 | [.github/workflows/run-test.yml](../../../../sources/naver__egjs-view3d/.github/workflows/run-test.yml) |
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

1. 핵심 참조에서 시작: `packages/vue3-view3d/src/index.ts`, `packages/vue3-view3d/src/index.umd.ts`, `packages/vue3-view3d/demo/main.ts`.
2. entrypoint를 따라 실행 흐름 확인: `packages/vue3-view3d/src/index.ts`, `packages/vue3-view3d/src/index.umd.ts`, `packages/vue3-view3d/demo/main.ts`.
3. agent/tool runtime 매핑: `demo/src/components/playground/context.tsx`.
4. retrieval/memory/indexing 확인: `packages/vue3-view3d/src/index.ts`, `packages/vue3-view3d/src/index.umd.ts`, `packages/vue-view3d/src/index.ts`.
5. test/eval 파일로 동작 검증: `packages/view3d/test/.eslintrc.json`, `packages/view3d/test/.gitignore`, `packages/view3d/test/cypress.json`.

## 기존 레포 인사이트

일반 AI 오픈소스 관점에서 Fast & customizable 3D model viewer for everyone. 핵심 구조 신호는 TypeScript, package.json, README.md, LICENSE, ci, docs이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 더 깊은 구조 스캔 필요입니다.
