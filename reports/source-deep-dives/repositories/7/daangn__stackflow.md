# daangn/stackflow 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

🧱 Mobile-first stack navigator framework with composable plugin system

## 요약

- 조사 단위: `sources/daangn__stackflow` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 2,006 files, 107 directories, depth score 114, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 entrypoints=integrations/react/src/index.ts, extensions/react-ui-core/src/index.ts, extensions/plugin-stack-depth-change/src/index.ts이고, 의존성 단서는 react, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | daangn/stackflow |
| 주제 | 일반 AI 오픈소스 / 일반 AI 오픈소스 |
| Region | korea |
| Language | TypeScript |
| Stars | 1017 |
| Forks | 115 |
| License | MIT |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/daangn__stackflow](../../../../sources/daangn__stackflow) |
| 기존 보고서 | [reports/korea-trending/repositories/daangn__stackflow.md](../../../korea-trending/repositories/daangn__stackflow.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 2006 / 107 |
| 관측 최대 깊이 | 7 |
| 상위 디렉터리 | .agents, .changeset, .claude, .github, .yarn, config, core, demo, docs, extensions, integrations, packages, scripts |
| 상위 확장자 | .zip: 1464, .ts: 230, .tsx: 73, .md: 64, .json: 57, .mdx: 52, .js: 29, .yml: 6, (none): 6, .cjs: 4, .png: 4, .css: 2 |
| 소스 패턴 | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, ui/extension surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 33 |
| packages/esbuild-config | packages workspace | 2 |
| .github | ci surface | 1 |
| config | top-level component | 1 |
| core | top-level component | 1 |
| demo | top-level component | 1 |
| extensions | top-level component | 1 |
| integrations | top-level component | 1 |
| packages | source boundary | 1 |
| scripts | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| build | package.json | build | ultra -r build |
| build | package.json | build:dts | ultra -r --build build:dts |
| utility | package.json | clean | ultra -r clean |
| serve-dev | package.json | dev | ultra -r --concurrency 100 dev |
| quality | package.json | format | biome check --write . |
| quality | package.json | lint | biome lint . |
| utility | package.json | changeset:version | yarn workspace @stackflow/docs generate:changelog && changeset version && yarn install --no-immutable |
| build | package.json | release | yarn clean && yarn build && changeset && yarn changeset:version && changeset publish |
| build | package.json | release:canary | yarn clean && yarn build && changeset pre enter canary && changeset && yarn changeset:version && changeset publish && changeset pre exit |
| test | package.json | test | yarn build && ultra -r test |
| quality | package.json | typecheck | ultra -r typecheck |
| utility | package.json | version | yarn install && git stage yarn.lock |


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
| entrypoints | [integrations/react/src/index.ts](../../../../sources/daangn__stackflow/integrations/react/src/index.ts) | entrypoints signal |
| entrypoints | [extensions/react-ui-core/src/index.ts](../../../../sources/daangn__stackflow/extensions/react-ui-core/src/index.ts) | entrypoints signal |
| entrypoints | [extensions/plugin-stack-depth-change/src/index.ts](../../../../sources/daangn__stackflow/extensions/plugin-stack-depth-change/src/index.ts) | entrypoints signal |
| entrypoints | [extensions/plugin-sentry/src/index.ts](../../../../sources/daangn__stackflow/extensions/plugin-sentry/src/index.ts) | entrypoints signal |
| config | [package.json](../../../../sources/daangn__stackflow/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/daangn__stackflow/tsconfig.json) | config signal |
| config | [packages/esbuild-config/package.json](../../../../sources/daangn__stackflow/packages/esbuild-config/package.json) | config signal |
| config | [integrations/react/package.json](../../../../sources/daangn__stackflow/integrations/react/package.json) | config signal |
| docs | [README.md](../../../../sources/daangn__stackflow/README.md) | docs signal |
| docs | [integrations/react/README.md](../../../../sources/daangn__stackflow/integrations/react/README.md) | docs signal |
| docs | [extensions/react-ui-core/README.md](../../../../sources/daangn__stackflow/extensions/react-ui-core/README.md) | docs signal |
| docs | [extensions/plugin-stack-depth-change/README.md](../../../../sources/daangn__stackflow/extensions/plugin-stack-depth-change/README.md) | docs signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 23 | [integrations/react/src/index.ts](../../../../sources/daangn__stackflow/integrations/react/src/index.ts)<br>[extensions/react-ui-core/src/index.ts](../../../../sources/daangn__stackflow/extensions/react-ui-core/src/index.ts)<br>[extensions/plugin-stack-depth-change/src/index.ts](../../../../sources/daangn__stackflow/extensions/plugin-stack-depth-change/src/index.ts)<br>[extensions/plugin-sentry/src/index.ts](../../../../sources/daangn__stackflow/extensions/plugin-sentry/src/index.ts)<br>[extensions/plugin-renderer-web/src/index.ts](../../../../sources/daangn__stackflow/extensions/plugin-renderer-web/src/index.ts)<br>[extensions/plugin-renderer-basic/src/index.ts](../../../../sources/daangn__stackflow/extensions/plugin-renderer-basic/src/index.ts)<br>[extensions/plugin-lifecycle/src/index.ts](../../../../sources/daangn__stackflow/extensions/plugin-lifecycle/src/index.ts)<br>[extensions/plugin-history-sync/src/index.ts](../../../../sources/daangn__stackflow/extensions/plugin-history-sync/src/index.ts) |
| agentRuntime | 28 | [AGENTS.md](../../../../sources/daangn__stackflow/AGENTS.md)<br>[.yarn/cache/agent-base-npm-6.0.2-428f325a93-21fb903e09.zip](../../../../sources/daangn__stackflow/.yarn/cache/agent-base-npm-6.0.2-428f325a93-21fb903e09.zip)<br>[.agents/skills/review-react/SKILL.md](../../../../sources/daangn__stackflow/.agents/skills/review-react/SKILL.md)<br>[.agents/skills/review-react/rules/_sections.md](../../../../sources/daangn__stackflow/.agents/skills/review-react/rules/_sections.md)<br>[.agents/skills/review-react/rules/_template.md](../../../../sources/daangn__stackflow/.agents/skills/review-react/rules/_template.md)<br>[.agents/skills/review-react/rules/advanced-event-handler-refs.md](../../../../sources/daangn__stackflow/.agents/skills/review-react/rules/advanced-event-handler-refs.md)<br>[.agents/skills/review-react/rules/advanced-init-once.md](../../../../sources/daangn__stackflow/.agents/skills/review-react/rules/advanced-init-once.md)<br>[.agents/skills/review-react/rules/react-rules-calling.md](../../../../sources/daangn__stackflow/.agents/skills/review-react/rules/react-rules-calling.md) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 45 | [packages/esbuild-config/index.js](../../../../sources/daangn__stackflow/packages/esbuild-config/index.js)<br>[integrations/react/src/index.ts](../../../../sources/daangn__stackflow/integrations/react/src/index.ts)<br>[integrations/react/src/utils/index.ts](../../../../sources/daangn__stackflow/integrations/react/src/utils/index.ts)<br>[integrations/react/src/stack/index.ts](../../../../sources/daangn__stackflow/integrations/react/src/stack/index.ts)<br>[integrations/react/src/shims/index.ts](../../../../sources/daangn__stackflow/integrations/react/src/shims/index.ts)<br>[integrations/react/src/plugins/index.ts](../../../../sources/daangn__stackflow/integrations/react/src/plugins/index.ts)<br>[integrations/react/src/loader/index.ts](../../../../sources/daangn__stackflow/integrations/react/src/loader/index.ts)<br>[integrations/react/src/core/index.ts](../../../../sources/daangn__stackflow/integrations/react/src/core/index.ts) |
| spec | 25 | [extensions/plugin-lifecycle/src/lifecyclePlugin.spec.tsx](../../../../sources/daangn__stackflow/extensions/plugin-lifecycle/src/lifecyclePlugin.spec.tsx)<br>[extensions/plugin-history-sync/src/historySyncPlugin.react.spec.tsx](../../../../sources/daangn__stackflow/extensions/plugin-history-sync/src/historySyncPlugin.react.spec.tsx)<br>[extensions/plugin-history-sync/src/historySyncPlugin.spec.ts](../../../../sources/daangn__stackflow/extensions/plugin-history-sync/src/historySyncPlugin.spec.ts)<br>[extensions/plugin-history-sync/src/last.spec.ts](../../../../sources/daangn__stackflow/extensions/plugin-history-sync/src/last.spec.ts)<br>[extensions/plugin-history-sync/src/makeTemplate.spec.ts](../../../../sources/daangn__stackflow/extensions/plugin-history-sync/src/makeTemplate.spec.ts)<br>[extensions/plugin-history-sync/src/normalizeActivityRouteMap.spec.ts](../../../../sources/daangn__stackflow/extensions/plugin-history-sync/src/normalizeActivityRouteMap.spec.ts)<br>[extensions/plugin-history-sync/src/normalizeRouteInput.spec.ts](../../../../sources/daangn__stackflow/extensions/plugin-history-sync/src/normalizeRouteInput.spec.ts)<br>[extensions/plugin-history-sync/src/sortActivityRoutes.spec.ts](../../../../sources/daangn__stackflow/extensions/plugin-history-sync/src/sortActivityRoutes.spec.ts) |
| eval | 29 | [extensions/plugin-lifecycle/src/lifecyclePlugin.spec.tsx](../../../../sources/daangn__stackflow/extensions/plugin-lifecycle/src/lifecyclePlugin.spec.tsx)<br>[extensions/plugin-history-sync/src/historySyncPlugin.react.spec.tsx](../../../../sources/daangn__stackflow/extensions/plugin-history-sync/src/historySyncPlugin.react.spec.tsx)<br>[extensions/plugin-history-sync/src/historySyncPlugin.spec.ts](../../../../sources/daangn__stackflow/extensions/plugin-history-sync/src/historySyncPlugin.spec.ts)<br>[extensions/plugin-history-sync/src/last.spec.ts](../../../../sources/daangn__stackflow/extensions/plugin-history-sync/src/last.spec.ts)<br>[extensions/plugin-history-sync/src/makeTemplate.spec.ts](../../../../sources/daangn__stackflow/extensions/plugin-history-sync/src/makeTemplate.spec.ts)<br>[extensions/plugin-history-sync/src/normalizeActivityRouteMap.spec.ts](../../../../sources/daangn__stackflow/extensions/plugin-history-sync/src/normalizeActivityRouteMap.spec.ts)<br>[extensions/plugin-history-sync/src/normalizeRouteInput.spec.ts](../../../../sources/daangn__stackflow/extensions/plugin-history-sync/src/normalizeRouteInput.spec.ts)<br>[extensions/plugin-history-sync/src/sortActivityRoutes.spec.ts](../../../../sources/daangn__stackflow/extensions/plugin-history-sync/src/sortActivityRoutes.spec.ts) |
| security | 0 | 명확하지 않음 |
| ci | 4 | [.github/workflows/build.yml](../../../../sources/daangn__stackflow/.github/workflows/build.yml)<br>[.github/workflows/integration.yml](../../../../sources/daangn__stackflow/.github/workflows/integration.yml)<br>[.github/workflows/opencode.yml](../../../../sources/daangn__stackflow/.github/workflows/opencode.yml)<br>[.github/workflows/release.yml](../../../../sources/daangn__stackflow/.github/workflows/release.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 1 | [AGENTS.md](../../../../sources/daangn__stackflow/AGENTS.md) |
| docs | 118 | [README.md](../../../../sources/daangn__stackflow/README.md)<br>[integrations/react/README.md](../../../../sources/daangn__stackflow/integrations/react/README.md)<br>[extensions/react-ui-core/README.md](../../../../sources/daangn__stackflow/extensions/react-ui-core/README.md)<br>[extensions/plugin-stack-depth-change/README.md](../../../../sources/daangn__stackflow/extensions/plugin-stack-depth-change/README.md)<br>[extensions/plugin-sentry/README.md](../../../../sources/daangn__stackflow/extensions/plugin-sentry/README.md)<br>[extensions/plugin-renderer-web/README.md](../../../../sources/daangn__stackflow/extensions/plugin-renderer-web/README.md)<br>[extensions/plugin-renderer-basic/README.md](../../../../sources/daangn__stackflow/extensions/plugin-renderer-basic/README.md)<br>[extensions/plugin-lifecycle/README.md](../../../../sources/daangn__stackflow/extensions/plugin-lifecycle/README.md) |
| config | 41 | [package.json](../../../../sources/daangn__stackflow/package.json)<br>[tsconfig.json](../../../../sources/daangn__stackflow/tsconfig.json)<br>[packages/esbuild-config/package.json](../../../../sources/daangn__stackflow/packages/esbuild-config/package.json)<br>[integrations/react/package.json](../../../../sources/daangn__stackflow/integrations/react/package.json)<br>[integrations/react/tsconfig.json](../../../../sources/daangn__stackflow/integrations/react/tsconfig.json)<br>[extensions/react-ui-core/package.json](../../../../sources/daangn__stackflow/extensions/react-ui-core/package.json)<br>[extensions/react-ui-core/tsconfig.json](../../../../sources/daangn__stackflow/extensions/react-ui-core/tsconfig.json)<br>[extensions/plugin-stack-depth-change/package.json](../../../../sources/daangn__stackflow/extensions/plugin-stack-depth-change/package.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 29 | [extensions/plugin-lifecycle/src/lifecyclePlugin.spec.tsx](../../../../sources/daangn__stackflow/extensions/plugin-lifecycle/src/lifecyclePlugin.spec.tsx)<br>[extensions/plugin-history-sync/src/historySyncPlugin.react.spec.tsx](../../../../sources/daangn__stackflow/extensions/plugin-history-sync/src/historySyncPlugin.react.spec.tsx)<br>[extensions/plugin-history-sync/src/historySyncPlugin.spec.ts](../../../../sources/daangn__stackflow/extensions/plugin-history-sync/src/historySyncPlugin.spec.ts)<br>[extensions/plugin-history-sync/src/last.spec.ts](../../../../sources/daangn__stackflow/extensions/plugin-history-sync/src/last.spec.ts)<br>[extensions/plugin-history-sync/src/makeTemplate.spec.ts](../../../../sources/daangn__stackflow/extensions/plugin-history-sync/src/makeTemplate.spec.ts)<br>[extensions/plugin-history-sync/src/normalizeActivityRouteMap.spec.ts](../../../../sources/daangn__stackflow/extensions/plugin-history-sync/src/normalizeActivityRouteMap.spec.ts) |
| CI workflow | 4 | [.github/workflows/build.yml](../../../../sources/daangn__stackflow/.github/workflows/build.yml)<br>[.github/workflows/integration.yml](../../../../sources/daangn__stackflow/.github/workflows/integration.yml)<br>[.github/workflows/opencode.yml](../../../../sources/daangn__stackflow/.github/workflows/opencode.yml)<br>[.github/workflows/release.yml](../../../../sources/daangn__stackflow/.github/workflows/release.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 1 | [AGENTS.md](../../../../sources/daangn__stackflow/AGENTS.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `integrations/react/src/index.ts`, `extensions/react-ui-core/src/index.ts`, `extensions/plugin-stack-depth-change/src/index.ts`.
2. entrypoint를 따라 실행 흐름 확인: `integrations/react/src/index.ts`, `extensions/react-ui-core/src/index.ts`, `extensions/plugin-stack-depth-change/src/index.ts`.
3. agent/tool runtime 매핑: `AGENTS.md`, `.yarn/cache/agent-base-npm-6.0.2-428f325a93-21fb903e09.zip`, `.agents/skills/review-react/SKILL.md`.
4. retrieval/memory/indexing 확인: `packages/esbuild-config/index.js`, `integrations/react/src/index.ts`, `integrations/react/src/utils/index.ts`.
5. test/eval 파일로 동작 검증: `extensions/plugin-lifecycle/src/lifecyclePlugin.spec.tsx`, `extensions/plugin-history-sync/src/historySyncPlugin.react.spec.tsx`, `extensions/plugin-history-sync/src/historySyncPlugin.spec.ts`.

## 기존 레포 인사이트

일반 AI 오픈소스 관점에서 🧱 Mobile first stack navigator framework with composable plugin system. 핵심 구조 신호는 TypeScript, package.json, README.md, AGENTS.md, LICENSE, react이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 더 깊은 구조 스캔 필요입니다.
