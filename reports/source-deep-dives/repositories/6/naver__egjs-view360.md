# naver/egjs-view360 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

360 integrated viewing solution

## 요약

- 조사 단위: `sources/naver__egjs-view360` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 595 files, 125 directories, depth score 95, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 monorepo/workspace, cli-first, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 entrypoints=packages/vue3-view360/src/index.ts, packages/vue3-view360/src/index.umd.ts, packages/vue3-view360/demo/main.ts이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | naver/egjs-view360 |
| 주제 | 일반 AI 오픈소스 / 일반 AI 오픈소스 |
| Region | korea |
| Language | TypeScript |
| Stars | 560 |
| Forks | 99 |
| License | MIT |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/naver__egjs-view360](../../../../sources/naver__egjs-view360) |
| 기존 보고서 | [reports/korea-trending/repositories/naver__egjs-view360.md](../../../korea-trending/repositories/naver__egjs-view360.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 595 / 125 |
| 관측 최대 깊이 | 9 |
| 상위 디렉터리 | .github, config, demo, packages |
| 상위 확장자 | .mdx: 192, .ts: 159, .json: 45, .tsx: 32, .js: 26, .jpg: 23, (none): 20, .md: 19, .css: 18, .svg: 9, .png: 8, .sass: 8 |
| 소스 패턴 | monorepo/workspace, cli-first, retrieval/vector path, spec/docs-driven, eval/test harness |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| packages/view360 | packages workspace | 29 |
| packages/ngx-view360 | packages workspace | 15 |
| packages/react-view360 | packages workspace | 15 |
| packages/vue-view360 | packages workspace | 14 |
| packages/svelte-view360 | packages workspace | 9 |
| packages/vue3-view360 | packages workspace | 9 |
| .github | ci surface | 1 |
| config | top-level component | 1 |
| demo | top-level component | 1 |
| packages | source boundary | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| quality | package.json | lint | eslint 'packages/**/!(demo)/src/*.ts' |
| test | package.json | test | lerna run test |
| build | package.json | packages | npm run packages:update && npm run packages:build && npm run packages:publish |
| utility | package.json | packages:update | lerna-helper version |
| build | package.json | packages:build | npm run build --prefix packages/view360 && lerna run build --ignore @egjs/view360 --ignore @egjs/ngx-view360 --stream |
| utility | package.json | packages:publish | lerna-helper publish --ignore @egjs/ngx-view360 --commit 'chore: update packages versions' |
| quality | package.json | changelog | lerna-helper changelog --type all --base @egjs/view360 |
| build | package.json | docs:build | typedoc-to-mdx -c typedoc-to-mdx.json |
| build | package.json | demo:build | run-s demo:copy-lib docs:build demo:build-docusaurus |
| build | package.json | demo:copy-lib | npm run build --prefix packages/view360 && npm run demo:copy-lib --prefix packages/view360 |
| build | package.json | demo:build-docusaurus | npm run build --prefix demo |
| build | package.json | demo:deploy | lerna-helper deploy --base @egjs/view360 --src demo/build/ --remote upstream |
| build | package.json | demo:deploy-origin | lerna-helper deploy --base @egjs/view360 --src demo/build/ --remote origin |
| build | package.json | release | lerna-helper release --base @egjs/view360 --remote upstream --branch master |


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
| entrypoints | [packages/vue3-view360/src/index.ts](../../../../sources/naver__egjs-view360/packages/vue3-view360/src/index.ts) | entrypoints signal |
| entrypoints | [packages/vue3-view360/src/index.umd.ts](../../../../sources/naver__egjs-view360/packages/vue3-view360/src/index.umd.ts) | entrypoints signal |
| entrypoints | [packages/vue3-view360/demo/main.ts](../../../../sources/naver__egjs-view360/packages/vue3-view360/demo/main.ts) | entrypoints signal |
| entrypoints | [packages/vue-view360/src/index.ts](../../../../sources/naver__egjs-view360/packages/vue-view360/src/index.ts) | entrypoints signal |
| config | [package.json](../../../../sources/naver__egjs-view360/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/naver__egjs-view360/tsconfig.json) | config signal |
| config | [packages/vue3-view360/package.json](../../../../sources/naver__egjs-view360/packages/vue3-view360/package.json) | config signal |
| config | [packages/vue3-view360/tsconfig.json](../../../../sources/naver__egjs-view360/packages/vue3-view360/tsconfig.json) | config signal |
| docs | [README.md](../../../../sources/naver__egjs-view360/README.md) | docs signal |
| docs | [packages/vue3-view360/README.md](../../../../sources/naver__egjs-view360/packages/vue3-view360/README.md) | docs signal |
| docs | [packages/vue-view360/README.md](../../../../sources/naver__egjs-view360/packages/vue-view360/README.md) | docs signal |
| docs | [packages/view360/README.md](../../../../sources/naver__egjs-view360/packages/view360/README.md) | docs signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 17 | [packages/vue3-view360/src/index.ts](../../../../sources/naver__egjs-view360/packages/vue3-view360/src/index.ts)<br>[packages/vue3-view360/src/index.umd.ts](../../../../sources/naver__egjs-view360/packages/vue3-view360/src/index.umd.ts)<br>[packages/vue3-view360/demo/main.ts](../../../../sources/naver__egjs-view360/packages/vue3-view360/demo/main.ts)<br>[packages/vue-view360/src/index.ts](../../../../sources/naver__egjs-view360/packages/vue-view360/src/index.ts)<br>[packages/vue-view360/src/index.umd.ts](../../../../sources/naver__egjs-view360/packages/vue-view360/src/index.umd.ts)<br>[packages/vue-view360/demo/main.ts](../../../../sources/naver__egjs-view360/packages/vue-view360/demo/main.ts)<br>[packages/view360/src/index.cjs.ts](../../../../sources/naver__egjs-view360/packages/view360/src/index.cjs.ts)<br>[packages/view360/src/index.ts](../../../../sources/naver__egjs-view360/packages/view360/src/index.ts) |
| agentRuntime | 0 | 명확하지 않음 |
| mcp | 0 | 명확하지 않음 |
| retrieval | 31 | [packages/vue3-view360/index.html](../../../../sources/naver__egjs-view360/packages/vue3-view360/index.html)<br>[packages/vue3-view360/src/index.ts](../../../../sources/naver__egjs-view360/packages/vue3-view360/src/index.ts)<br>[packages/vue3-view360/src/index.umd.ts](../../../../sources/naver__egjs-view360/packages/vue3-view360/src/index.umd.ts)<br>[packages/vue-view360/src/index.ts](../../../../sources/naver__egjs-view360/packages/vue-view360/src/index.ts)<br>[packages/vue-view360/src/index.umd.ts](../../../../sources/naver__egjs-view360/packages/vue-view360/src/index.umd.ts)<br>[packages/vue-view360/demo/index.html](../../../../sources/naver__egjs-view360/packages/vue-view360/demo/index.html)<br>[packages/view360/test/manual/index.css](../../../../sources/naver__egjs-view360/packages/view360/test/manual/index.css)<br>[packages/view360/test/manual/index.html](../../../../sources/naver__egjs-view360/packages/view360/test/manual/index.html) |
| spec | 6 | [packages/vue-view360/tests/unit/View360.spec.ts](../../../../sources/naver__egjs-view360/packages/vue-view360/tests/unit/View360.spec.ts)<br>[packages/view360/test/unit/specs/View360.spec.ts](../../../../sources/naver__egjs-view360/packages/view360/test/unit/specs/View360.spec.ts)<br>[packages/react-view360/test/View360.spec.tsx](../../../../sources/naver__egjs-view360/packages/react-view360/test/View360.spec.tsx)<br>[packages/ngx-view360/projects/ngx-view360/tsconfig.spec.json](../../../../sources/naver__egjs-view360/packages/ngx-view360/projects/ngx-view360/tsconfig.spec.json)<br>[packages/ngx-view360/projects/demo/tsconfig.spec.json](../../../../sources/naver__egjs-view360/packages/ngx-view360/projects/demo/tsconfig.spec.json)<br>[packages/ngx-view360/projects/demo/src/app/app.component.spec.ts](../../../../sources/naver__egjs-view360/packages/ngx-view360/projects/demo/src/app/app.component.spec.ts) |
| eval | 21 | [packages/vue-view360/tests/unit/test-utils.ts](../../../../sources/naver__egjs-view360/packages/vue-view360/tests/unit/test-utils.ts)<br>[packages/vue-view360/tests/unit/tsconfig.json](../../../../sources/naver__egjs-view360/packages/vue-view360/tests/unit/tsconfig.json)<br>[packages/vue-view360/tests/unit/View360.spec.ts](../../../../sources/naver__egjs-view360/packages/vue-view360/tests/unit/View360.spec.ts)<br>[packages/view360/test/unit/setup.ts](../../../../sources/naver__egjs-view360/packages/view360/test/unit/setup.ts)<br>[packages/view360/test/unit/shim.d.ts](../../../../sources/naver__egjs-view360/packages/view360/test/unit/shim.d.ts)<br>[packages/view360/test/unit/test-utils.ts](../../../../sources/naver__egjs-view360/packages/view360/test/unit/test-utils.ts)<br>[packages/view360/test/unit/tsconfig.json](../../../../sources/naver__egjs-view360/packages/view360/test/unit/tsconfig.json)<br>[packages/view360/test/unit/specs/View360.spec.ts](../../../../sources/naver__egjs-view360/packages/view360/test/unit/specs/View360.spec.ts) |
| security | 0 | 명확하지 않음 |
| ci | 1 | [.github/workflows/run-test.yml](../../../../sources/naver__egjs-view360/.github/workflows/run-test.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 198 | [README.md](../../../../sources/naver__egjs-view360/README.md)<br>[packages/vue3-view360/README.md](../../../../sources/naver__egjs-view360/packages/vue3-view360/README.md)<br>[packages/vue-view360/README.md](../../../../sources/naver__egjs-view360/packages/vue-view360/README.md)<br>[packages/view360/README.md](../../../../sources/naver__egjs-view360/packages/view360/README.md)<br>[packages/svelte-view360/README.md](../../../../sources/naver__egjs-view360/packages/svelte-view360/README.md)<br>[packages/react-view360/README.md](../../../../sources/naver__egjs-view360/packages/react-view360/README.md)<br>[packages/ngx-view360/README.md](../../../../sources/naver__egjs-view360/packages/ngx-view360/README.md)<br>[packages/ngx-view360/projects/ngx-view360/README.md](../../../../sources/naver__egjs-view360/packages/ngx-view360/projects/ngx-view360/README.md) |
| config | 19 | [package.json](../../../../sources/naver__egjs-view360/package.json)<br>[tsconfig.json](../../../../sources/naver__egjs-view360/tsconfig.json)<br>[packages/vue3-view360/package.json](../../../../sources/naver__egjs-view360/packages/vue3-view360/package.json)<br>[packages/vue3-view360/tsconfig.json](../../../../sources/naver__egjs-view360/packages/vue3-view360/tsconfig.json)<br>[packages/vue-view360/package.json](../../../../sources/naver__egjs-view360/packages/vue-view360/package.json)<br>[packages/vue-view360/tsconfig.json](../../../../sources/naver__egjs-view360/packages/vue-view360/tsconfig.json)<br>[packages/vue-view360/tests/unit/tsconfig.json](../../../../sources/naver__egjs-view360/packages/vue-view360/tests/unit/tsconfig.json)<br>[packages/view360/package.json](../../../../sources/naver__egjs-view360/packages/view360/package.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 21 | [packages/vue-view360/tests/unit/test-utils.ts](../../../../sources/naver__egjs-view360/packages/vue-view360/tests/unit/test-utils.ts)<br>[packages/vue-view360/tests/unit/tsconfig.json](../../../../sources/naver__egjs-view360/packages/vue-view360/tests/unit/tsconfig.json)<br>[packages/vue-view360/tests/unit/View360.spec.ts](../../../../sources/naver__egjs-view360/packages/vue-view360/tests/unit/View360.spec.ts)<br>[packages/view360/test/unit/setup.ts](../../../../sources/naver__egjs-view360/packages/view360/test/unit/setup.ts)<br>[packages/view360/test/unit/shim.d.ts](../../../../sources/naver__egjs-view360/packages/view360/test/unit/shim.d.ts)<br>[packages/view360/test/unit/test-utils.ts](../../../../sources/naver__egjs-view360/packages/view360/test/unit/test-utils.ts) |
| CI workflow | 1 | [.github/workflows/run-test.yml](../../../../sources/naver__egjs-view360/.github/workflows/run-test.yml) |
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

1. 핵심 참조에서 시작: `packages/vue3-view360/src/index.ts`, `packages/vue3-view360/src/index.umd.ts`, `packages/vue3-view360/demo/main.ts`.
2. entrypoint를 따라 실행 흐름 확인: `packages/vue3-view360/src/index.ts`, `packages/vue3-view360/src/index.umd.ts`, `packages/vue3-view360/demo/main.ts`.
3. retrieval/memory/indexing 확인: `packages/vue3-view360/index.html`, `packages/vue3-view360/src/index.ts`, `packages/vue3-view360/src/index.umd.ts`.
4. test/eval 파일로 동작 검증: `packages/vue-view360/tests/unit/test-utils.ts`, `packages/vue-view360/tests/unit/tsconfig.json`, `packages/vue-view360/tests/unit/View360.spec.ts`.

## 기존 레포 인사이트

일반 AI 오픈소스 관점에서 360 integrated viewing solution. 핵심 구조 신호는 TypeScript, package.json, README.md, LICENSE, ci, docs이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 더 깊은 구조 스캔 필요입니다.
