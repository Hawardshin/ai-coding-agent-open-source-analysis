# toss/react-simplikit 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

A lightweight yet powerful library that provides various useful tools in React environments.

## 요약

- 조사 단위: `sources/toss__react-simplikit` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 1,428 files, 208 directories, depth score 114, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 entrypoints=packages/mobile/src/index.ts, packages/core/src/index.ts, examples/with-vite/src/App.tsx이고, 의존성 단서는 openai, react, commander, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | toss/react-simplikit |
| 주제 | 일반 AI 오픈소스 / 일반 AI 오픈소스 |
| Region | korea |
| Language | TypeScript |
| Stars | 319 |
| Forks | 68 |
| License | MIT |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/toss__react-simplikit](../../../../sources/toss__react-simplikit) |
| 기존 보고서 | [reports/korea-trending/repositories/toss__react-simplikit.md](../../../korea-trending/repositories/toss__react-simplikit.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 1428 / 208 |
| 관측 최대 깊이 | 7 |
| 상위 디렉터리 | .agents, .changeset, .claude, .claude-plugin, .github, .scripts, .vitepress, .yarn, docs, examples, packages, public |
| 상위 확장자 | .zip: 921, .ts: 201, .md: 183, .tsx: 42, .json: 21, (none): 11, .js: 9, .yml: 8, .svg: 7, .mts: 6, .png: 5, .cjs: 4 |
| 소스 패턴 | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, ui/extension surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| packages/mobile | packages workspace | 100 |
| packages/core | packages workspace | 62 |
| docs | documentation surface | 29 |
| packages/plugin | packages workspace | 8 |
| examples/with-vite | examples workspace | 5 |
| examples/shared | examples workspace | 3 |
| examples/with-nextjs | examples workspace | 2 |
| .github | ci surface | 1 |
| examples | top-level component | 1 |
| packages | source boundary | 1 |
| public | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| test | package.json | clean | rimraf ./coverage ./node_modules |
| utility | package.json | clean:all | yarn clean && yarn workspaces foreach -Ap run clean |
| serve-dev | package.json | example:vite | yarn build && yarn workspace with-vite dev |
| serve-dev | package.json | example:next | yarn workspace with-nextjs dev |
| utility | package.json | scaffold | tsx .scripts/index.ts scaffold |
| utility | package.json | changeset | changeset |
| utility | package.json | changeset:version | changeset version |
| utility | package.json | changeset:publish | changeset publish |
| utility | package.json | docs:gen | tsx .scripts/index.ts generate-docs |
| serve-dev | package.json | docs:dev | vitepress dev |
| serve-dev | package.json | docs:build | vitepress build |
| serve-dev | package.json | docs:preview | vitepress preview |
| quality | package.json | fix | yarn fix:lint && yarn fix:format |
| quality | package.json | fix:format | prettier . --write |
| quality | package.json | fix:lint | yarn workspaces foreach -Ap run lint --fix |
| test | package.json | test | yarn test:lint && yarn test:format && yarn test:type |
| test | package.json | test:format | prettier . --list-different |
| test | package.json | test:lint | yarn workspaces foreach -Ap run lint |
| test | package.json | test:type | yarn workspaces foreach -Ap run typecheck |
| test | package.json | test:spec | yarn workspaces foreach -Ap run test |
| test | package.json | test:coverage | yarn workspaces foreach -Ap run test:coverage |
| build | package.json | build | yarn workspaces foreach -Apt run build |
| build | package.json | prepack | yarn build |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | react |
| developerSurface | commander |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| entrypoints | [packages/mobile/src/index.ts](../../../../sources/toss__react-simplikit/packages/mobile/src/index.ts) | entrypoints signal |
| entrypoints | [packages/core/src/index.ts](../../../../sources/toss__react-simplikit/packages/core/src/index.ts) | entrypoints signal |
| entrypoints | [examples/with-vite/src/App.tsx](../../../../sources/toss__react-simplikit/examples/with-vite/src/App.tsx) | entrypoints signal |
| entrypoints | [examples/with-vite/src/index.css](../../../../sources/toss__react-simplikit/examples/with-vite/src/index.css) | entrypoints signal |
| config | [package.json](../../../../sources/toss__react-simplikit/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/toss__react-simplikit/tsconfig.json) | config signal |
| config | [packages/mobile/package.json](../../../../sources/toss__react-simplikit/packages/mobile/package.json) | config signal |
| config | [packages/mobile/tsconfig.json](../../../../sources/toss__react-simplikit/packages/mobile/tsconfig.json) | config signal |
| docs | [README-ko_kr.md](../../../../sources/toss__react-simplikit/README-ko_kr.md) | docs signal |
| docs | [README.md](../../../../sources/toss__react-simplikit/README.md) | docs signal |
| docs | [packages/plugin/README.md](../../../../sources/toss__react-simplikit/packages/plugin/README.md) | docs signal |
| docs | [packages/mobile/README-ko_kr.md](../../../../sources/toss__react-simplikit/packages/mobile/README-ko_kr.md) | docs signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 10 | [packages/mobile/src/index.ts](../../../../sources/toss__react-simplikit/packages/mobile/src/index.ts)<br>[packages/core/src/index.ts](../../../../sources/toss__react-simplikit/packages/core/src/index.ts)<br>[examples/with-vite/src/App.tsx](../../../../sources/toss__react-simplikit/examples/with-vite/src/App.tsx)<br>[examples/with-vite/src/index.css](../../../../sources/toss__react-simplikit/examples/with-vite/src/index.css)<br>[examples/with-vite/src/main.tsx](../../../../sources/toss__react-simplikit/examples/with-vite/src/main.tsx)<br>[examples/shared/src/index.ts](../../../../sources/toss__react-simplikit/examples/shared/src/index.ts)<br>[.yarn/sdks/typescript/bin/tsc](../../../../sources/toss__react-simplikit/.yarn/sdks/typescript/bin/tsc)<br>[.yarn/sdks/typescript/bin/tsserver](../../../../sources/toss__react-simplikit/.yarn/sdks/typescript/bin/tsserver) |
| agentRuntime | 240 | [AGENTS.md](../../../../sources/toss__react-simplikit/AGENTS.md)<br>[packages/plugin/skills/react-hook-writing/SKILL.md](../../../../sources/toss__react-simplikit/packages/plugin/skills/react-hook-writing/SKILL.md)<br>[packages/plugin/skills/react-hook-writing/references/patterns.md](../../../../sources/toss__react-simplikit/packages/plugin/skills/react-hook-writing/references/patterns.md)<br>[packages/plugin/skills/react-hook-review/SKILL.md](../../../../sources/toss__react-simplikit/packages/plugin/skills/react-hook-review/SKILL.md)<br>[packages/plugin/skills/react-design-principles/SKILL.md](../../../../sources/toss__react-simplikit/packages/plugin/skills/react-design-principles/SKILL.md)<br>[packages/plugin/skills/react-design-principles/references/principles.md](../../../../sources/toss__react-simplikit/packages/plugin/skills/react-design-principles/references/principles.md)<br>[packages/mobile/src/hooks/index.ts](../../../../sources/toss__react-simplikit/packages/mobile/src/hooks/index.ts)<br>[packages/mobile/src/hooks/useVisualViewport/index.ts](../../../../sources/toss__react-simplikit/packages/mobile/src/hooks/useVisualViewport/index.ts) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 72 | [packages/mobile/src/index.ts](../../../../sources/toss__react-simplikit/packages/mobile/src/index.ts)<br>[packages/mobile/src/utils/index.ts](../../../../sources/toss__react-simplikit/packages/mobile/src/utils/index.ts)<br>[packages/mobile/src/utils/subscribeKeyboardHeight/index.ts](../../../../sources/toss__react-simplikit/packages/mobile/src/utils/subscribeKeyboardHeight/index.ts)<br>[packages/mobile/src/utils/isServer/index.ts](../../../../sources/toss__react-simplikit/packages/mobile/src/utils/isServer/index.ts)<br>[packages/mobile/src/utils/isKeyboardVisible/index.ts](../../../../sources/toss__react-simplikit/packages/mobile/src/utils/isKeyboardVisible/index.ts)<br>[packages/mobile/src/utils/isIOS/index.ts](../../../../sources/toss__react-simplikit/packages/mobile/src/utils/isIOS/index.ts)<br>[packages/mobile/src/utils/isAndroid/index.ts](../../../../sources/toss__react-simplikit/packages/mobile/src/utils/isAndroid/index.ts)<br>[packages/mobile/src/utils/getSafeAreaInset/index.ts](../../../../sources/toss__react-simplikit/packages/mobile/src/utils/getSafeAreaInset/index.ts) |
| spec | 53 | [packages/plugin/skills/react-design-principles/SKILL.md](../../../../sources/toss__react-simplikit/packages/plugin/skills/react-design-principles/SKILL.md)<br>[packages/plugin/skills/react-design-principles/references/principles.md](../../../../sources/toss__react-simplikit/packages/plugin/skills/react-design-principles/references/principles.md)<br>[packages/mobile/src/hooks/usePageVisibility/usePageVisibility.spec.ts](../../../../sources/toss__react-simplikit/packages/mobile/src/hooks/usePageVisibility/usePageVisibility.spec.ts)<br>[packages/mobile/src/hooks/useNetworkStatus/useNetworkStatus.spec.ts](../../../../sources/toss__react-simplikit/packages/mobile/src/hooks/useNetworkStatus/useNetworkStatus.spec.ts)<br>[packages/core/src/utils/mergeRefs/mergeRefs.spec.ts](../../../../sources/toss__react-simplikit/packages/core/src/utils/mergeRefs/mergeRefs.spec.ts)<br>[packages/core/src/utils/mergeProps/mergeProps.spec.ts](../../../../sources/toss__react-simplikit/packages/core/src/utils/mergeProps/mergeProps.spec.ts)<br>[packages/core/src/utils/buildContext/buildContext.spec.tsx](../../../../sources/toss__react-simplikit/packages/core/src/utils/buildContext/buildContext.spec.tsx)<br>[packages/core/src/hooks/useVisibilityEvent/useVisibilityEvent.spec.ts](../../../../sources/toss__react-simplikit/packages/core/src/hooks/useVisibilityEvent/useVisibilityEvent.spec.ts) |
| eval | 87 | [packages/mobile/test/renderHookSSR.tsx](../../../../sources/toss__react-simplikit/packages/mobile/test/renderHookSSR.tsx)<br>[packages/mobile/test/renderSSR.tsx](../../../../sources/toss__react-simplikit/packages/mobile/test/renderSSR.tsx)<br>[packages/mobile/test/serverEnvironments.ts](../../../../sources/toss__react-simplikit/packages/mobile/test/serverEnvironments.ts)<br>[packages/mobile/src/utils/subscribeKeyboardHeight/subscribeKeyboardHeight.ssr.test.ts](../../../../sources/toss__react-simplikit/packages/mobile/src/utils/subscribeKeyboardHeight/subscribeKeyboardHeight.ssr.test.ts)<br>[packages/mobile/src/utils/subscribeKeyboardHeight/subscribeKeyboardHeight.test.ts](../../../../sources/toss__react-simplikit/packages/mobile/src/utils/subscribeKeyboardHeight/subscribeKeyboardHeight.test.ts)<br>[packages/mobile/src/utils/isServer/isServer.ssr.test.ts](../../../../sources/toss__react-simplikit/packages/mobile/src/utils/isServer/isServer.ssr.test.ts)<br>[packages/mobile/src/utils/isServer/isServer.test.ts](../../../../sources/toss__react-simplikit/packages/mobile/src/utils/isServer/isServer.test.ts)<br>[packages/mobile/src/utils/isKeyboardVisible/isKeyboardVisible.ssr.test.ts](../../../../sources/toss__react-simplikit/packages/mobile/src/utils/isKeyboardVisible/isKeyboardVisible.ssr.test.ts) |
| security | 0 | 명확하지 않음 |
| ci | 4 | [.github/workflows/autofix.yml](../../../../sources/toss__react-simplikit/.github/workflows/autofix.yml)<br>[.github/workflows/compressed-size.yml](../../../../sources/toss__react-simplikit/.github/workflows/compressed-size.yml)<br>[.github/workflows/integration.yml](../../../../sources/toss__react-simplikit/.github/workflows/integration.yml)<br>[.github/workflows/release.yml](../../../../sources/toss__react-simplikit/.github/workflows/release.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 3 | [AGENTS.md](../../../../sources/toss__react-simplikit/AGENTS.md)<br>[CLAUDE.md](../../../../sources/toss__react-simplikit/CLAUDE.md)<br>[.github/copilot-instructions.md](../../../../sources/toss__react-simplikit/.github/copilot-instructions.md) |
| docs | 36 | [README-ko_kr.md](../../../../sources/toss__react-simplikit/README-ko_kr.md)<br>[README.md](../../../../sources/toss__react-simplikit/README.md)<br>[packages/plugin/README.md](../../../../sources/toss__react-simplikit/packages/plugin/README.md)<br>[packages/mobile/README-ko_kr.md](../../../../sources/toss__react-simplikit/packages/mobile/README-ko_kr.md)<br>[packages/mobile/README.md](../../../../sources/toss__react-simplikit/packages/mobile/README.md)<br>[packages/core/README-ko_kr.md](../../../../sources/toss__react-simplikit/packages/core/README-ko_kr.md)<br>[packages/core/README.md](../../../../sources/toss__react-simplikit/packages/core/README.md)<br>[docs/hook-design-principles.md](../../../../sources/toss__react-simplikit/docs/hook-design-principles.md) |
| config | 15 | [package.json](../../../../sources/toss__react-simplikit/package.json)<br>[tsconfig.json](../../../../sources/toss__react-simplikit/tsconfig.json)<br>[packages/mobile/package.json](../../../../sources/toss__react-simplikit/packages/mobile/package.json)<br>[packages/mobile/tsconfig.json](../../../../sources/toss__react-simplikit/packages/mobile/tsconfig.json)<br>[packages/core/package.json](../../../../sources/toss__react-simplikit/packages/core/package.json)<br>[packages/core/tsconfig.json](../../../../sources/toss__react-simplikit/packages/core/tsconfig.json)<br>[examples/with-vite/package.json](../../../../sources/toss__react-simplikit/examples/with-vite/package.json)<br>[examples/with-vite/tsconfig.json](../../../../sources/toss__react-simplikit/examples/with-vite/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 87 | [packages/mobile/test/renderHookSSR.tsx](../../../../sources/toss__react-simplikit/packages/mobile/test/renderHookSSR.tsx)<br>[packages/mobile/test/renderSSR.tsx](../../../../sources/toss__react-simplikit/packages/mobile/test/renderSSR.tsx)<br>[packages/mobile/test/serverEnvironments.ts](../../../../sources/toss__react-simplikit/packages/mobile/test/serverEnvironments.ts)<br>[packages/mobile/src/utils/subscribeKeyboardHeight/subscribeKeyboardHeight.ssr.test.ts](../../../../sources/toss__react-simplikit/packages/mobile/src/utils/subscribeKeyboardHeight/subscribeKeyboardHeight.ssr.test.ts)<br>[packages/mobile/src/utils/subscribeKeyboardHeight/subscribeKeyboardHeight.test.ts](../../../../sources/toss__react-simplikit/packages/mobile/src/utils/subscribeKeyboardHeight/subscribeKeyboardHeight.test.ts)<br>[packages/mobile/src/utils/isServer/isServer.ssr.test.ts](../../../../sources/toss__react-simplikit/packages/mobile/src/utils/isServer/isServer.ssr.test.ts) |
| CI workflow | 4 | [.github/workflows/autofix.yml](../../../../sources/toss__react-simplikit/.github/workflows/autofix.yml)<br>[.github/workflows/compressed-size.yml](../../../../sources/toss__react-simplikit/.github/workflows/compressed-size.yml)<br>[.github/workflows/integration.yml](../../../../sources/toss__react-simplikit/.github/workflows/integration.yml)<br>[.github/workflows/release.yml](../../../../sources/toss__react-simplikit/.github/workflows/release.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 3 | [AGENTS.md](../../../../sources/toss__react-simplikit/AGENTS.md)<br>[CLAUDE.md](../../../../sources/toss__react-simplikit/CLAUDE.md)<br>[.github/copilot-instructions.md](../../../../sources/toss__react-simplikit/.github/copilot-instructions.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `packages/mobile/src/index.ts`, `packages/core/src/index.ts`, `examples/with-vite/src/App.tsx`.
2. entrypoint를 따라 실행 흐름 확인: `packages/mobile/src/index.ts`, `packages/core/src/index.ts`, `examples/with-vite/src/App.tsx`.
3. agent/tool runtime 매핑: `AGENTS.md`, `packages/plugin/skills/react-hook-writing/SKILL.md`, `packages/plugin/skills/react-hook-writing/references/patterns.md`.
4. retrieval/memory/indexing 확인: `packages/mobile/src/index.ts`, `packages/mobile/src/utils/index.ts`, `packages/mobile/src/utils/subscribeKeyboardHeight/index.ts`.
5. test/eval 파일로 동작 검증: `packages/mobile/test/renderHookSSR.tsx`, `packages/mobile/test/renderSSR.tsx`, `packages/mobile/test/serverEnvironments.ts`.

## 기존 레포 인사이트

일반 AI 오픈소스 관점에서 A lightweight yet powerful library that provides various useful tools in React environments.. 핵심 구조 신호는 TypeScript, package.json, README.md, AGENTS.md, CLAUDE.md, LICENSE이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 더 깊은 구조 스캔 필요입니다.
