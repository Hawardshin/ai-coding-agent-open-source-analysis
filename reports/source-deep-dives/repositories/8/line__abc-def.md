# line/abc-def 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

ABC Def is an efficient design system using a three-tier token structure and Headless UI to create web components with consistent design and flexible customization.

## 요약

- 조사 단위: `sources/line__abc-def` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 1,292 files, 178 directories, depth score 100, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 entrypoints=packages/vue/src/index.ts, packages/styles/src/index.css, examples/vue-vite/src/App.vue이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 CI 워크플로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | line/abc-def |
| 주제 | 일반 AI 오픈소스 / 일반 AI 오픈소스 |
| Region | korea |
| Language | TypeScript |
| Stars | 103 |
| Forks | 7 |
| License | Apache-2.0 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/line__abc-def](../../../../sources/line__abc-def) |
| 기존 보고서 | [reports/korea-trending/repositories/line__abc-def.md](../../../korea-trending/repositories/line__abc-def.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 1292 / 178 |
| 관측 최대 깊이 | 7 |
| 상위 디렉터리 | .changeset, .github, apps, docs, examples, packages, tooling |
| 상위 확장자 | .vue: 607, .tsx: 449, .ts: 93, .css: 57, .json: 27, .html: 19, .md: 13, .js: 9, .yaml: 5, (none): 4, .png: 3, .mjs: 2 |
| 소스 패턴 | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| apps/docs | apps workspace | 62 |
| packages/vue | packages workspace | 58 |
| examples/vue-vite | examples workspace | 15 |
| examples/nextjs | examples workspace | 14 |
| packages/react | packages workspace | 5 |
| examples/html-vite | examples workspace | 4 |
| packages/styles | packages workspace | 4 |
| docs | documentation surface | 2 |
| .github | ci surface | 1 |
| apps | source boundary | 1 |
| examples | top-level component | 1 |
| packages | source boundary | 1 |
| tooling | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| build | package.json | build | turbo run build |
| build | package.json | build:packages | turbo run build --filter='./packages/*' |
| build | package.json | build:examples | turbo run build --filter='./examples/*' |
| build | package.json | build:docs | turbo run build --filter @abc-def/docs |
| utility | package.json | clean | git clean -xdf node_modules .turbo .cache |
| utility | package.json | clean:workspaces | turbo run clean |
| serve-dev | package.json | dev | turbo watch dev --filter='./packages/*' --continue |
| quality | package.json | format | turbo run format --continue -- --cache --cache-location .cache/.prettiercache |
| quality | package.json | format:fix | turbo run format --continue -- --write --cache --cache-location .cache/.prettiercache |
| quality | package.json | lint | turbo run lint --continue -- --cache --cache-location .cache/.eslintcache |
| quality | package.json | lint:fix | turbo run lint --continue -- --fix --cache --cache-location .cache/.eslintcache |
| test | package.json | lint:ws | pnpm dlx sherif@latest |
| quality | package.json | postinstall | pnpm lint:ws |
| utility | package.json | changeset | changeset |
| utility | package.json | version-packages | changeset version |
| build | package.json | release | pnpm build:packages && changeset publish |
| quality | package.json | typecheck | turbo run typecheck |


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
| entrypoints | [packages/vue/src/index.ts](../../../../sources/line__abc-def/packages/vue/src/index.ts) | entrypoints signal |
| entrypoints | [packages/styles/src/index.css](../../../../sources/line__abc-def/packages/styles/src/index.css) | entrypoints signal |
| entrypoints | [examples/vue-vite/src/App.vue](../../../../sources/line__abc-def/examples/vue-vite/src/App.vue) | entrypoints signal |
| entrypoints | [examples/vue-vite/src/index.css](../../../../sources/line__abc-def/examples/vue-vite/src/index.css) | entrypoints signal |
| config | [package.json](../../../../sources/line__abc-def/package.json) | config signal |
| config | [pnpm-workspace.yaml](../../../../sources/line__abc-def/pnpm-workspace.yaml) | config signal |
| config | [turbo.json](../../../../sources/line__abc-def/turbo.json) | config signal |
| config | [tooling/typescript/package.json](../../../../sources/line__abc-def/tooling/typescript/package.json) | config signal |
| docs | [README.md](../../../../sources/line__abc-def/README.md) | docs signal |
| docs | [packages/vue/README.md](../../../../sources/line__abc-def/packages/vue/README.md) | docs signal |
| docs | [packages/styles/README.md](../../../../sources/line__abc-def/packages/styles/README.md) | docs signal |
| docs | [packages/react/README.md](../../../../sources/line__abc-def/packages/react/README.md) | docs signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 32 | [packages/vue/src/index.ts](../../../../sources/line__abc-def/packages/vue/src/index.ts)<br>[packages/styles/src/index.css](../../../../sources/line__abc-def/packages/styles/src/index.css)<br>[examples/vue-vite/src/App.vue](../../../../sources/line__abc-def/examples/vue-vite/src/App.vue)<br>[examples/vue-vite/src/index.css](../../../../sources/line__abc-def/examples/vue-vite/src/index.css)<br>[examples/vue-vite/src/main.ts](../../../../sources/line__abc-def/examples/vue-vite/src/main.ts)<br>[examples/html-vite/src/index.css](../../../../sources/line__abc-def/examples/html-vite/src/index.css)<br>[examples/html-vite/src/main.ts](../../../../sources/line__abc-def/examples/html-vite/src/main.ts)<br>[apps/docs/src/content/component-example-code.ts](../../../../sources/line__abc-def/apps/docs/src/content/component-example-code.ts) |
| agentRuntime | 40 | [packages/vue/src/components/context-menu/ContextMenu.vue](../../../../sources/line__abc-def/packages/vue/src/components/context-menu/ContextMenu.vue)<br>[packages/vue/src/components/context-menu/ContextMenuCheckboxItem.vue](../../../../sources/line__abc-def/packages/vue/src/components/context-menu/ContextMenuCheckboxItem.vue)<br>[packages/vue/src/components/context-menu/ContextMenuContent.vue](../../../../sources/line__abc-def/packages/vue/src/components/context-menu/ContextMenuContent.vue)<br>[packages/vue/src/components/context-menu/ContextMenuGroup.vue](../../../../sources/line__abc-def/packages/vue/src/components/context-menu/ContextMenuGroup.vue)<br>[packages/vue/src/components/context-menu/ContextMenuItem.vue](../../../../sources/line__abc-def/packages/vue/src/components/context-menu/ContextMenuItem.vue)<br>[packages/vue/src/components/context-menu/ContextMenuLabel.vue](../../../../sources/line__abc-def/packages/vue/src/components/context-menu/ContextMenuLabel.vue)<br>[packages/vue/src/components/context-menu/ContextMenuPortal.vue](../../../../sources/line__abc-def/packages/vue/src/components/context-menu/ContextMenuPortal.vue)<br>[packages/vue/src/components/context-menu/ContextMenuRadioGroup.vue](../../../../sources/line__abc-def/packages/vue/src/components/context-menu/ContextMenuRadioGroup.vue) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 64 | [tooling/prettier/index.js](../../../../sources/line__abc-def/tooling/prettier/index.js)<br>[tooling/eslint-plugin-header/index.js](../../../../sources/line__abc-def/tooling/eslint-plugin-header/index.js)<br>[packages/vue/src/index.ts](../../../../sources/line__abc-def/packages/vue/src/index.ts)<br>[packages/vue/src/components/index.ts](../../../../sources/line__abc-def/packages/vue/src/components/index.ts)<br>[packages/vue/src/components/tooltip/index.ts](../../../../sources/line__abc-def/packages/vue/src/components/tooltip/index.ts)<br>[packages/vue/src/components/toggle-group/index.ts](../../../../sources/line__abc-def/packages/vue/src/components/toggle-group/index.ts)<br>[packages/vue/src/components/toggle/index.ts](../../../../sources/line__abc-def/packages/vue/src/components/toggle/index.ts)<br>[packages/vue/src/components/textarea/index.ts](../../../../sources/line__abc-def/packages/vue/src/components/textarea/index.ts) |
| spec | 0 | 명확하지 않음 |
| eval | 0 | 명확하지 않음 |
| security | 1 | [SECURITY.md](../../../../sources/line__abc-def/SECURITY.md) |
| ci | 3 | [.github/workflows/ci.yaml](../../../../sources/line__abc-def/.github/workflows/ci.yaml)<br>[.github/workflows/deploy-docs.yaml](../../../../sources/line__abc-def/.github/workflows/deploy-docs.yaml)<br>[.github/workflows/publish-packages.yaml](../../../../sources/line__abc-def/.github/workflows/publish-packages.yaml) |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 42 | [README.md](../../../../sources/line__abc-def/README.md)<br>[packages/vue/README.md](../../../../sources/line__abc-def/packages/vue/README.md)<br>[packages/styles/README.md](../../../../sources/line__abc-def/packages/styles/README.md)<br>[packages/react/README.md](../../../../sources/line__abc-def/packages/react/README.md)<br>[docs/release.md](../../../../sources/line__abc-def/docs/release.md)<br>[apps/docs/eslint.config.js](../../../../sources/line__abc-def/apps/docs/eslint.config.js)<br>[apps/docs/next-env.d.ts](../../../../sources/line__abc-def/apps/docs/next-env.d.ts)<br>[apps/docs/next.config.ts](../../../../sources/line__abc-def/apps/docs/next.config.ts) |
| config | 24 | [package.json](../../../../sources/line__abc-def/package.json)<br>[pnpm-workspace.yaml](../../../../sources/line__abc-def/pnpm-workspace.yaml)<br>[turbo.json](../../../../sources/line__abc-def/turbo.json)<br>[tooling/typescript/package.json](../../../../sources/line__abc-def/tooling/typescript/package.json)<br>[tooling/prettier/package.json](../../../../sources/line__abc-def/tooling/prettier/package.json)<br>[tooling/prettier/tsconfig.json](../../../../sources/line__abc-def/tooling/prettier/tsconfig.json)<br>[tooling/github/package.json](../../../../sources/line__abc-def/tooling/github/package.json)<br>[tooling/eslint-plugin-header/package.json](../../../../sources/line__abc-def/tooling/eslint-plugin-header/package.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 0 | 명확하지 않음 |
| CI workflow | 3 | [.github/workflows/ci.yaml](../../../../sources/line__abc-def/.github/workflows/ci.yaml)<br>[.github/workflows/deploy-docs.yaml](../../../../sources/line__abc-def/.github/workflows/deploy-docs.yaml)<br>[.github/workflows/publish-packages.yaml](../../../../sources/line__abc-def/.github/workflows/publish-packages.yaml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 1 | [SECURITY.md](../../../../sources/line__abc-def/SECURITY.md) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음; test/eval 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `packages/vue/src/index.ts`, `packages/styles/src/index.css`, `examples/vue-vite/src/App.vue`.
2. entrypoint를 따라 실행 흐름 확인: `packages/vue/src/index.ts`, `packages/styles/src/index.css`, `examples/vue-vite/src/App.vue`.
3. agent/tool runtime 매핑: `packages/vue/src/components/context-menu/ContextMenu.vue`, `packages/vue/src/components/context-menu/ContextMenuCheckboxItem.vue`, `packages/vue/src/components/context-menu/ContextMenuContent.vue`.
4. retrieval/memory/indexing 확인: `tooling/prettier/index.js`, `tooling/eslint-plugin-header/index.js`, `packages/vue/src/index.ts`.

## 기존 레포 인사이트

일반 AI 오픈소스 관점에서 ABC Def is an efficient design system using a three tier token structure and Headless UI to create web components with c. 핵심 구조 신호는 TypeScript, package.json, README.md, LICENSE, ci, docs이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 더 깊은 구조 스캔 필요입니다.
