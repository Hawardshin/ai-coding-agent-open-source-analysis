# naver/egjs-conveyer 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

Conveyer adds Drag gestures to your Native Scroll.

## 요약

- 조사 단위: `sources/naver__egjs-conveyer` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 765 files, 139 directories, depth score 102, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 retrieval=packages/vue2-conveyer/src/index.ts, packages/vue2-conveyer/public/index.html, packages/vue2-conveyer/demo/index.ts이고, 의존성 단서는 react, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 지식/RAG 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | naver/egjs-conveyer |
| 주제 | LLM 위키/RAG/지식베이스 / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | TypeScript |
| Stars | 126 |
| Forks | 8 |
| License | MIT |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/naver__egjs-conveyer](../../../../sources/naver__egjs-conveyer) |
| 기존 보고서 | [reports/korea-trending/repositories/naver__egjs-conveyer.md](../../../korea-trending/repositories/naver__egjs-conveyer.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 765 / 139 |
| 관측 최대 깊이 | 7 |
| 상위 디렉터리 | .github, config, packages |
| 상위 확장자 | .txt: 331, .mdx: 180, .ts: 47, .json: 42, .svg: 33, .tsx: 26, .md: 20, (none): 20, .js: 14, .png: 13, .css: 12, .html: 12 |
| 소스 패턴 | monorepo/workspace, cli-first, api/server, retrieval/vector path, spec/docs-driven, eval/test harness, ui/extension surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| packages/docs | packages workspace | 37 |
| packages/conveyer | packages workspace | 20 |
| packages/ngx-conveyer | packages workspace | 16 |
| packages/react-conveyer | packages workspace | 13 |
| packages/svelte-conveyer | packages workspace | 7 |
| packages/vue-conveyer | packages workspace | 7 |
| packages/vue2-conveyer | packages workspace | 7 |
| .github | ci surface | 1 |
| config | top-level component | 1 |
| packages | source boundary | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| build | package.json | update-angular-consts | npm run build --prefix packages/conveyer && node ./config/update-type-consts.js |
| build | package.json | packages | npm run packages:update && npm run packages:build && npm run packages:publish |
| build | package.json | packages:update | release-helper version |
| build | package.json | packages:build | pnpm --filter=!@egjs/ngx-conveyer --filter=!docs -r run build |
| build | package.json | packages:publish | release-helper publish --ignore @egjs/ngx-conveyer --commit 'chore: update packages versions' |
| quality | package.json | changelog | lerna-helper changelog --type all --base @egjs/conveyer |
| build | package.json | docs:build | jsdoc-to-mdx -c ./jsdoc-to-mdx.json |
| utility | package.json | docs:version | node ./config/docs-version-up |
| build | package.json | demo:build | npm run docs:version && npm run build --prefix packages/docs |
| build | package.json | demo:deploy | release-helper deploy --base @egjs/conveyer --dest demo --remote origin |
| build | package.json | release | release-helper release --base @egjs/conveyer --remote upstream --branch main |
| utility | package.json | update:cfcs | cfcs lerna update |


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
| retrieval | [packages/vue2-conveyer/src/index.ts](../../../../sources/naver__egjs-conveyer/packages/vue2-conveyer/src/index.ts) | retrieval signal |
| retrieval | [packages/vue2-conveyer/public/index.html](../../../../sources/naver__egjs-conveyer/packages/vue2-conveyer/public/index.html) | retrieval signal |
| retrieval | [packages/vue2-conveyer/demo/index.ts](../../../../sources/naver__egjs-conveyer/packages/vue2-conveyer/demo/index.ts) | retrieval signal |
| retrieval | [packages/vue-conveyer/src/vue-conveyer/index.ts](../../../../sources/naver__egjs-conveyer/packages/vue-conveyer/src/vue-conveyer/index.ts) | retrieval signal |
| entrypoints | [packages/vue-conveyer/src/App.vue](../../../../sources/naver__egjs-conveyer/packages/vue-conveyer/src/App.vue) | entrypoints signal |
| entrypoints | [packages/vue-conveyer/src/main.ts](../../../../sources/naver__egjs-conveyer/packages/vue-conveyer/src/main.ts) | entrypoints signal |
| entrypoints | [packages/svelte-conveyer/src/App.svelte](../../../../sources/naver__egjs-conveyer/packages/svelte-conveyer/src/App.svelte) | entrypoints signal |
| docs | [README.md](../../../../sources/naver__egjs-conveyer/README.md) | docs signal |
| docs | [packages/vue2-conveyer/README.md](../../../../sources/naver__egjs-conveyer/packages/vue2-conveyer/README.md) | docs signal |
| docs | [packages/vue-conveyer/README.md](../../../../sources/naver__egjs-conveyer/packages/vue-conveyer/README.md) | docs signal |
| docs | [packages/svelte-conveyer/README.md](../../../../sources/naver__egjs-conveyer/packages/svelte-conveyer/README.md) | docs signal |
| eval | [packages/react-conveyer/src/App.test.tsx](../../../../sources/naver__egjs-conveyer/packages/react-conveyer/src/App.test.tsx) | eval signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 16 | [packages/vue2-conveyer/src/index.ts](../../../../sources/naver__egjs-conveyer/packages/vue2-conveyer/src/index.ts)<br>[packages/vue-conveyer/src/App.vue](../../../../sources/naver__egjs-conveyer/packages/vue-conveyer/src/App.vue)<br>[packages/vue-conveyer/src/main.ts](../../../../sources/naver__egjs-conveyer/packages/vue-conveyer/src/main.ts)<br>[packages/svelte-conveyer/src/App.svelte](../../../../sources/naver__egjs-conveyer/packages/svelte-conveyer/src/App.svelte)<br>[packages/svelte-conveyer/src/main.js](../../../../sources/naver__egjs-conveyer/packages/svelte-conveyer/src/main.js)<br>[packages/react-conveyer/src/App.css](../../../../sources/naver__egjs-conveyer/packages/react-conveyer/src/App.css)<br>[packages/react-conveyer/src/App.test.tsx](../../../../sources/naver__egjs-conveyer/packages/react-conveyer/src/App.test.tsx)<br>[packages/react-conveyer/src/App.tsx](../../../../sources/naver__egjs-conveyer/packages/react-conveyer/src/App.tsx) |
| agentRuntime | 0 | 명확하지 않음 |
| mcp | 0 | 명확하지 않음 |
| retrieval | 18 | [packages/vue2-conveyer/src/index.ts](../../../../sources/naver__egjs-conveyer/packages/vue2-conveyer/src/index.ts)<br>[packages/vue2-conveyer/public/index.html](../../../../sources/naver__egjs-conveyer/packages/vue2-conveyer/public/index.html)<br>[packages/vue2-conveyer/demo/index.ts](../../../../sources/naver__egjs-conveyer/packages/vue2-conveyer/demo/index.ts)<br>[packages/vue-conveyer/src/vue-conveyer/index.ts](../../../../sources/naver__egjs-conveyer/packages/vue-conveyer/src/vue-conveyer/index.ts)<br>[packages/vue-conveyer/public/index.html](../../../../sources/naver__egjs-conveyer/packages/vue-conveyer/public/index.html)<br>[packages/svelte-conveyer/src/svelte-conveyer/index.ts](../../../../sources/naver__egjs-conveyer/packages/svelte-conveyer/src/svelte-conveyer/index.ts)<br>[packages/svelte-conveyer/public/index.html](../../../../sources/naver__egjs-conveyer/packages/svelte-conveyer/public/index.html)<br>[packages/react-conveyer/src/index.css](../../../../sources/naver__egjs-conveyer/packages/react-conveyer/src/index.css) |
| spec | 4 | [packages/ngx-conveyer/tsconfig.spec.json](../../../../sources/naver__egjs-conveyer/packages/ngx-conveyer/tsconfig.spec.json)<br>[packages/ngx-conveyer/src/app/app.component.spec.ts](../../../../sources/naver__egjs-conveyer/packages/ngx-conveyer/src/app/app.component.spec.ts)<br>[packages/ngx-conveyer/projects/ngx-conveyer/tsconfig.spec.json](../../../../sources/naver__egjs-conveyer/packages/ngx-conveyer/projects/ngx-conveyer/tsconfig.spec.json)<br>[packages/conveyer/test/unit/Conveyer.spec.ts](../../../../sources/naver__egjs-conveyer/packages/conveyer/test/unit/Conveyer.spec.ts) |
| eval | 16 | [packages/react-conveyer/src/App.test.tsx](../../../../sources/naver__egjs-conveyer/packages/react-conveyer/src/App.test.tsx)<br>[packages/ngx-conveyer/tsconfig.spec.json](../../../../sources/naver__egjs-conveyer/packages/ngx-conveyer/tsconfig.spec.json)<br>[packages/ngx-conveyer/src/test.ts](../../../../sources/naver__egjs-conveyer/packages/ngx-conveyer/src/test.ts)<br>[packages/ngx-conveyer/src/app/app.component.spec.ts](../../../../sources/naver__egjs-conveyer/packages/ngx-conveyer/src/app/app.component.spec.ts)<br>[packages/ngx-conveyer/projects/ngx-conveyer/tsconfig.spec.json](../../../../sources/naver__egjs-conveyer/packages/ngx-conveyer/projects/ngx-conveyer/tsconfig.spec.json)<br>[packages/ngx-conveyer/projects/ngx-conveyer/src/test.ts](../../../../sources/naver__egjs-conveyer/packages/ngx-conveyer/projects/ngx-conveyer/src/test.ts)<br>[packages/conveyer/tsconfig.test.json](../../../../sources/naver__egjs-conveyer/packages/conveyer/tsconfig.test.json)<br>[packages/conveyer/test/unit/Conveyer.spec.ts](../../../../sources/naver__egjs-conveyer/packages/conveyer/test/unit/Conveyer.spec.ts) |
| security | 0 | 명확하지 않음 |
| ci | 1 | [.github/workflows/run-e2e.yml](../../../../sources/naver__egjs-conveyer/.github/workflows/run-e2e.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 612 | [README.md](../../../../sources/naver__egjs-conveyer/README.md)<br>[packages/vue2-conveyer/README.md](../../../../sources/naver__egjs-conveyer/packages/vue2-conveyer/README.md)<br>[packages/vue-conveyer/README.md](../../../../sources/naver__egjs-conveyer/packages/vue-conveyer/README.md)<br>[packages/svelte-conveyer/README.md](../../../../sources/naver__egjs-conveyer/packages/svelte-conveyer/README.md)<br>[packages/react-conveyer/README.md](../../../../sources/naver__egjs-conveyer/packages/react-conveyer/README.md)<br>[packages/ngx-conveyer/README.md](../../../../sources/naver__egjs-conveyer/packages/ngx-conveyer/README.md)<br>[packages/ngx-conveyer/projects/ngx-conveyer/README.md](../../../../sources/naver__egjs-conveyer/packages/ngx-conveyer/projects/ngx-conveyer/README.md)<br>[packages/docs/.gitignore](../../../../sources/naver__egjs-conveyer/packages/docs/.gitignore) |
| config | 16 | [package.json](../../../../sources/naver__egjs-conveyer/package.json)<br>[pnpm-workspace.yaml](../../../../sources/naver__egjs-conveyer/pnpm-workspace.yaml)<br>[packages/vue2-conveyer/package.json](../../../../sources/naver__egjs-conveyer/packages/vue2-conveyer/package.json)<br>[packages/vue2-conveyer/tsconfig.json](../../../../sources/naver__egjs-conveyer/packages/vue2-conveyer/tsconfig.json)<br>[packages/vue-conveyer/package.json](../../../../sources/naver__egjs-conveyer/packages/vue-conveyer/package.json)<br>[packages/vue-conveyer/tsconfig.json](../../../../sources/naver__egjs-conveyer/packages/vue-conveyer/tsconfig.json)<br>[packages/svelte-conveyer/package.json](../../../../sources/naver__egjs-conveyer/packages/svelte-conveyer/package.json)<br>[packages/svelte-conveyer/tsconfig.json](../../../../sources/naver__egjs-conveyer/packages/svelte-conveyer/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 16 | [packages/react-conveyer/src/App.test.tsx](../../../../sources/naver__egjs-conveyer/packages/react-conveyer/src/App.test.tsx)<br>[packages/ngx-conveyer/tsconfig.spec.json](../../../../sources/naver__egjs-conveyer/packages/ngx-conveyer/tsconfig.spec.json)<br>[packages/ngx-conveyer/src/test.ts](../../../../sources/naver__egjs-conveyer/packages/ngx-conveyer/src/test.ts)<br>[packages/ngx-conveyer/src/app/app.component.spec.ts](../../../../sources/naver__egjs-conveyer/packages/ngx-conveyer/src/app/app.component.spec.ts)<br>[packages/ngx-conveyer/projects/ngx-conveyer/tsconfig.spec.json](../../../../sources/naver__egjs-conveyer/packages/ngx-conveyer/projects/ngx-conveyer/tsconfig.spec.json)<br>[packages/ngx-conveyer/projects/ngx-conveyer/src/test.ts](../../../../sources/naver__egjs-conveyer/packages/ngx-conveyer/projects/ngx-conveyer/src/test.ts) |
| CI workflow | 1 | [.github/workflows/run-e2e.yml](../../../../sources/naver__egjs-conveyer/.github/workflows/run-e2e.yml) |
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

1. 핵심 참조에서 시작: `packages/vue2-conveyer/src/index.ts`, `packages/vue2-conveyer/public/index.html`, `packages/vue2-conveyer/demo/index.ts`.
2. entrypoint를 따라 실행 흐름 확인: `packages/vue2-conveyer/src/index.ts`, `packages/vue-conveyer/src/App.vue`, `packages/vue-conveyer/src/main.ts`.
3. retrieval/memory/indexing 확인: `packages/vue2-conveyer/src/index.ts`, `packages/vue2-conveyer/public/index.html`, `packages/vue2-conveyer/demo/index.ts`.
4. test/eval 파일로 동작 검증: `packages/react-conveyer/src/App.test.tsx`, `packages/ngx-conveyer/tsconfig.spec.json`, `packages/ngx-conveyer/src/test.ts`.

## 기존 레포 인사이트

LLM 위키/RAG/지식베이스 관점에서 Conveyer adds Drag gestures to your Native Scroll.. 핵심 구조 신호는 TypeScript, package.json, README.md, LICENSE, react, ci이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 지식/RAG 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 더 깊은 구조 스캔 필요입니다.
