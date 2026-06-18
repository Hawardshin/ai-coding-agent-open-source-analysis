# naver/cfcs 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

Write once, create framework components that supports React, Vue, Svelte, and more.

## 요약

- 조사 단위: `sources/naver__cfcs` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 218 files, 55 directories, depth score 93, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 monorepo/workspace, cli-first, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 entrypoints=packages/vue3/src/index.ts, packages/vue2/src/index.ts, packages/svelte/src/index.ts이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | naver/cfcs |
| 주제 | 일반 AI 오픈소스 / 일반 AI 오픈소스 |
| Region | korea |
| Language | TypeScript |
| Stars | 118 |
| Forks | 3 |
| License | MIT |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/naver__cfcs](../../../../sources/naver__cfcs) |
| 기존 보고서 | [reports/korea-trending/repositories/naver__cfcs.md](../../../korea-trending/repositories/naver__cfcs.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 218 / 55 |
| 관측 최대 깊이 | 6 |
| 상위 디렉터리 | .github, config, images, packages |
| 상위 확장자 | .ts: 53, .json: 45, .png: 21, .md: 19, .mdx: 18, (none): 18, .js: 16, .tsx: 12, .css: 6, .html: 3, .ico: 2, .svg: 2 |
| 소스 패턴 | monorepo/workspace, cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| packages/docs | packages workspace | 41 |
| packages/core | packages workspace | 15 |
| packages/angular | packages workspace | 13 |
| packages/react | packages workspace | 6 |
| packages/svelte | packages workspace | 6 |
| packages/vue2 | packages workspace | 6 |
| packages/vue3 | packages workspace | 6 |
| packages/cli | packages workspace | 3 |
| .github | ci surface | 1 |
| config | top-level component | 1 |
| images | top-level component | 1 |
| packages | source boundary | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| build | package.json | packages | npm run packages:update && npm run packages:build && npm run packages:publish |
| utility | package.json | packages:update | lerna-helper version |
| build | package.json | packages:build | npm run build --prefix packages/core && lerna run build --ignore @cfcs/core --ignore @cfcs/angular --ignore docs --stream |
| utility | package.json | packages:publish | lerna-helper publish --ignore @cfcs/angular --commit 'chore: update packages versions' |
| quality | package.json | changelog | lerna-helper changelog --type all --base @cfcs/core |
| build | package.json | docs:build | yarn docs:core && yarn docs:react && yarn docs:vue2 && yarn docs:vue3 && yarn docs:svelte |
| quality | package.json | docs:core | typedoc-to-mdx -c ./config/ttmdx-core.json |
| quality | package.json | docs:react | typedoc-to-mdx -c ./config/ttmdx-react.json |
| quality | package.json | docs:vue2 | typedoc-to-mdx -c ./config/ttmdx-vue2.json |
| quality | package.json | docs:vue3 | typedoc-to-mdx -c ./config/ttmdx-vue3.json |
| quality | package.json | docs:svelte | typedoc-to-mdx -c ./config/ttmdx-svelte.json |
| build | package.json | demo:build | npm run docs:build && npm run packages:build && npm run build --prefix packages/docs |
| utility | package.json | demo:deploy | lerna-helper deploy --base @cfcs/core --remote upstream |
| build | package.json | release | lerna-helper release --base @cfcs/core --remote upstream --branch main |


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
| entrypoints | [packages/vue3/src/index.ts](../../../../sources/naver__cfcs/packages/vue3/src/index.ts) | entrypoints signal |
| entrypoints | [packages/vue2/src/index.ts](../../../../sources/naver__cfcs/packages/vue2/src/index.ts) | entrypoints signal |
| entrypoints | [packages/svelte/src/index.ts](../../../../sources/naver__cfcs/packages/svelte/src/index.ts) | entrypoints signal |
| entrypoints | [packages/react/src/index.ts](../../../../sources/naver__cfcs/packages/react/src/index.ts) | entrypoints signal |
| config | [package.json](../../../../sources/naver__cfcs/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/naver__cfcs/tsconfig.json) | config signal |
| config | [packages/vue3/package.json](../../../../sources/naver__cfcs/packages/vue3/package.json) | config signal |
| config | [packages/vue3/tsconfig.json](../../../../sources/naver__cfcs/packages/vue3/tsconfig.json) | config signal |
| docs | [README.md](../../../../sources/naver__cfcs/README.md) | docs signal |
| docs | [packages/vue3/README.md](../../../../sources/naver__cfcs/packages/vue3/README.md) | docs signal |
| docs | [packages/vue2/README.md](../../../../sources/naver__cfcs/packages/vue2/README.md) | docs signal |
| docs | [packages/svelte/README.md](../../../../sources/naver__cfcs/packages/svelte/README.md) | docs signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 8 | [packages/vue3/src/index.ts](../../../../sources/naver__cfcs/packages/vue3/src/index.ts)<br>[packages/vue2/src/index.ts](../../../../sources/naver__cfcs/packages/vue2/src/index.ts)<br>[packages/svelte/src/index.ts](../../../../sources/naver__cfcs/packages/svelte/src/index.ts)<br>[packages/react/src/index.ts](../../../../sources/naver__cfcs/packages/react/src/index.ts)<br>[packages/core/src/index.ts](../../../../sources/naver__cfcs/packages/core/src/index.ts)<br>[packages/core/src/index.umd.ts](../../../../sources/naver__cfcs/packages/core/src/index.umd.ts)<br>[packages/angular/src/index.html](../../../../sources/naver__cfcs/packages/angular/src/index.html)<br>[packages/angular/src/main.ts](../../../../sources/naver__cfcs/packages/angular/src/main.ts) |
| agentRuntime | 1 | [packages/core/src/reactive/hooks.ts](../../../../sources/naver__cfcs/packages/core/src/reactive/hooks.ts) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 20 | [packages/vue3/src/index.ts](../../../../sources/naver__cfcs/packages/vue3/src/index.ts)<br>[packages/vue3/src/reactive/index.ts](../../../../sources/naver__cfcs/packages/vue3/src/reactive/index.ts)<br>[packages/vue2/src/index.ts](../../../../sources/naver__cfcs/packages/vue2/src/index.ts)<br>[packages/vue2/src/reactive/index.ts](../../../../sources/naver__cfcs/packages/vue2/src/reactive/index.ts)<br>[packages/svelte/src/index.ts](../../../../sources/naver__cfcs/packages/svelte/src/index.ts)<br>[packages/svelte/src/reactive/index.ts](../../../../sources/naver__cfcs/packages/svelte/src/reactive/index.ts)<br>[packages/react/src/index.ts](../../../../sources/naver__cfcs/packages/react/src/index.ts)<br>[packages/react/src/reactive/index.ts](../../../../sources/naver__cfcs/packages/react/src/reactive/index.ts) |
| spec | 4 | [packages/core/test/unit/computed.spec.ts](../../../../sources/naver__cfcs/packages/core/test/unit/computed.spec.ts)<br>[packages/angular/tsconfig.spec.json](../../../../sources/naver__cfcs/packages/angular/tsconfig.spec.json)<br>[packages/angular/src/app/app.component.spec.ts](../../../../sources/naver__cfcs/packages/angular/src/app/app.component.spec.ts)<br>[packages/angular/projects/angular/tsconfig.spec.json](../../../../sources/naver__cfcs/packages/angular/projects/angular/tsconfig.spec.json) |
| eval | 7 | [packages/core/tsconfig.test.json](../../../../sources/naver__cfcs/packages/core/tsconfig.test.json)<br>[packages/core/test/unit/computed.spec.ts](../../../../sources/naver__cfcs/packages/core/test/unit/computed.spec.ts)<br>[packages/core/test/manual/index.html](../../../../sources/naver__cfcs/packages/core/test/manual/index.html)<br>[packages/angular/tsconfig.spec.json](../../../../sources/naver__cfcs/packages/angular/tsconfig.spec.json)<br>[packages/angular/src/test.ts](../../../../sources/naver__cfcs/packages/angular/src/test.ts)<br>[packages/angular/src/app/app.component.spec.ts](../../../../sources/naver__cfcs/packages/angular/src/app/app.component.spec.ts)<br>[packages/angular/projects/angular/tsconfig.spec.json](../../../../sources/naver__cfcs/packages/angular/projects/angular/tsconfig.spec.json) |
| security | 0 | 명확하지 않음 |
| ci | 0 | 명확하지 않음 |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 75 | [README.md](../../../../sources/naver__cfcs/README.md)<br>[packages/vue3/README.md](../../../../sources/naver__cfcs/packages/vue3/README.md)<br>[packages/vue2/README.md](../../../../sources/naver__cfcs/packages/vue2/README.md)<br>[packages/svelte/README.md](../../../../sources/naver__cfcs/packages/svelte/README.md)<br>[packages/react/README.md](../../../../sources/naver__cfcs/packages/react/README.md)<br>[packages/docs/.eslintrc.json](../../../../sources/naver__cfcs/packages/docs/.eslintrc.json)<br>[packages/docs/.gitignore](../../../../sources/naver__cfcs/packages/docs/.gitignore)<br>[packages/docs/docusaurus.config.js](../../../../sources/naver__cfcs/packages/docs/docusaurus.config.js) |
| config | 19 | [package.json](../../../../sources/naver__cfcs/package.json)<br>[tsconfig.json](../../../../sources/naver__cfcs/tsconfig.json)<br>[packages/vue3/package.json](../../../../sources/naver__cfcs/packages/vue3/package.json)<br>[packages/vue3/tsconfig.json](../../../../sources/naver__cfcs/packages/vue3/tsconfig.json)<br>[packages/vue2/package.json](../../../../sources/naver__cfcs/packages/vue2/package.json)<br>[packages/vue2/tsconfig.json](../../../../sources/naver__cfcs/packages/vue2/tsconfig.json)<br>[packages/svelte/package.json](../../../../sources/naver__cfcs/packages/svelte/package.json)<br>[packages/svelte/tsconfig.json](../../../../sources/naver__cfcs/packages/svelte/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 7 | [packages/core/tsconfig.test.json](../../../../sources/naver__cfcs/packages/core/tsconfig.test.json)<br>[packages/core/test/unit/computed.spec.ts](../../../../sources/naver__cfcs/packages/core/test/unit/computed.spec.ts)<br>[packages/core/test/manual/index.html](../../../../sources/naver__cfcs/packages/core/test/manual/index.html)<br>[packages/angular/tsconfig.spec.json](../../../../sources/naver__cfcs/packages/angular/tsconfig.spec.json)<br>[packages/angular/src/test.ts](../../../../sources/naver__cfcs/packages/angular/src/test.ts)<br>[packages/angular/src/app/app.component.spec.ts](../../../../sources/naver__cfcs/packages/angular/src/app/app.component.spec.ts) |
| CI workflow | 0 | 명확하지 않음 |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | CI workflow 경로가 명확하지 않음; container/deploy 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `packages/vue3/src/index.ts`, `packages/vue2/src/index.ts`, `packages/svelte/src/index.ts`.
2. entrypoint를 따라 실행 흐름 확인: `packages/vue3/src/index.ts`, `packages/vue2/src/index.ts`, `packages/svelte/src/index.ts`.
3. agent/tool runtime 매핑: `packages/core/src/reactive/hooks.ts`.
4. retrieval/memory/indexing 확인: `packages/vue3/src/index.ts`, `packages/vue3/src/reactive/index.ts`, `packages/vue2/src/index.ts`.
5. test/eval 파일로 동작 검증: `packages/core/tsconfig.test.json`, `packages/core/test/unit/computed.spec.ts`, `packages/core/test/manual/index.html`.

## 기존 레포 인사이트

일반 AI 오픈소스 관점에서 Write once, create framework components that supports React, Vue, Svelte, and more.. 핵심 구조 신호는 TypeScript, package.json, README.md, LICENSE, ci, docs이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 더 깊은 구조 스캔 필요입니다.
