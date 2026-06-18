# toss/suspensive 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

All-in-one for React Suspense — ErrorBoundary with shouldCatch, clientOnly to skip SSR for a boundary, Delay, and more

## 요약

- 조사 단위: `sources/toss__suspensive` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 545 files, 125 directories, depth score 107, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 entrypoints=packages/react-query-5/src/index.ts, packages/react-query-4/src/index.ts, packages/react-query/src/index.ts이고, 의존성 단서는 react, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | toss/suspensive |
| 주제 | 일반 AI 오픈소스 / 일반 AI 오픈소스 |
| Region | korea |
| Language | TypeScript |
| Stars | 1027 |
| Forks | 96 |
| License | MIT |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/toss__suspensive](../../../../sources/toss__suspensive) |
| 기존 보고서 | [reports/korea-trending/repositories/toss__suspensive.md](../../../korea-trending/repositories/toss__suspensive.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 545 / 125 |
| 관측 최대 깊이 | 9 |
| 상위 디렉터리 | .changeset, .github, .husky, assets, configs, docs, examples, packages |
| 상위 확장자 | .tsx: 159, .ts: 130, .mdx: 108, .json: 33, .md: 18, .png: 17, (none): 17, .mjs: 16, .yml: 13, .svg: 10, .jsx: 8, .css: 5 |
| 소스 패턴 | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, ui/extension surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 42 |
| packages/react-query | packages workspace | 35 |
| packages/react | packages workspace | 29 |
| packages/react-query-4 | packages workspace | 25 |
| packages/react-query-5 | packages workspace | 20 |
| packages/codemods | packages workspace | 11 |
| packages/jotai | packages workspace | 10 |
| examples/vite-react-18-suspense-prerender-siblings-problem | examples workspace | 8 |
| examples/visualization | examples workspace | 4 |
| packages/next | packages workspace | 4 |
| examples/next-streaming-react-query | examples workspace | 3 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| configs | top-level component | 1 |
| examples | top-level component | 1 |
| packages | source boundary | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | package.json | blc:suspensive.org | pnpm blc https://suspensive.org --ro --exclude='https://x.com/*' --exclude='https://codesandbox.io/api/v1/sandboxes/define?undefined&environment=create-react-app' |
| build | package.json | build | turbo run build |
| utility | package.json | changeset | changeset |
| build | package.json | changeset:publish | pnpm run build && changeset publish |
| utility | package.json | changeset:version | changeset version && pnpm install --lockfile-only |
| test | package.json | ci:all | pnpm run ci:eslint && pnpm run ci:sherif && pnpm run ci:type && pnpm run ci:test && pnpm run ci:knip && pnpm run build |
| quality | package.json | ci:eslint | turbo run ci:eslint |
| build | package.json | ci:knip | pnpm run build && pnpm knip |
| utility | package.json | ci:sherif | sherif --ignore-package "./examples/*" --ignore-package "./docs/*" --ignore-dependency "@tanstack/react-query" |
| test | package.json | ci:test | turbo run ci:test |
| quality | package.json | ci:type | turbo run ci:type |
| utility | package.json | clean | turbo run clean |
| serve-dev | package.json | dev | turbo watch dev |
| quality | package.json | format | oxfmt --write "**/*.{ts,tsx,md}" |
| build | package.json | graph | rimraf ./graph && mkdir graph && turbo run build --graph=graph/index.html |
| quality | package.json | packlint | packlint sort -R |
| utility | package.json | preinstall | corepack enable |
| utility | package.json | prepare | husky |


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
| entrypoints | [packages/react-query-5/src/index.ts](../../../../sources/toss__suspensive/packages/react-query-5/src/index.ts) | entrypoints signal |
| entrypoints | [packages/react-query-4/src/index.ts](../../../../sources/toss__suspensive/packages/react-query-4/src/index.ts) | entrypoints signal |
| entrypoints | [packages/react-query/src/index.ts](../../../../sources/toss__suspensive/packages/react-query/src/index.ts) | entrypoints signal |
| entrypoints | [packages/react-query/src/bin/cli.spec.ts](../../../../sources/toss__suspensive/packages/react-query/src/bin/cli.spec.ts) | entrypoints signal |
| config | [package.json](../../../../sources/toss__suspensive/package.json) | config signal |
| config | [pnpm-workspace.yaml](../../../../sources/toss__suspensive/pnpm-workspace.yaml) | config signal |
| config | [turbo.json](../../../../sources/toss__suspensive/turbo.json) | config signal |
| config | [packages/react-query-5/package.json](../../../../sources/toss__suspensive/packages/react-query-5/package.json) | config signal |
| docs | [README.md](../../../../sources/toss__suspensive/README.md) | docs signal |
| docs | [packages/react-query/README.md](../../../../sources/toss__suspensive/packages/react-query/README.md) | docs signal |
| docs | [packages/react/README.md](../../../../sources/toss__suspensive/packages/react/README.md) | docs signal |
| docs | [packages/jotai/README.md](../../../../sources/toss__suspensive/packages/jotai/README.md) | docs signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 31 | [packages/react-query-5/src/index.ts](../../../../sources/toss__suspensive/packages/react-query-5/src/index.ts)<br>[packages/react-query-4/src/index.ts](../../../../sources/toss__suspensive/packages/react-query-4/src/index.ts)<br>[packages/react-query/src/index.ts](../../../../sources/toss__suspensive/packages/react-query/src/index.ts)<br>[packages/react-query/src/bin/cli.spec.ts](../../../../sources/toss__suspensive/packages/react-query/src/bin/cli.spec.ts)<br>[packages/react-query/src/bin/cli.ts](../../../../sources/toss__suspensive/packages/react-query/src/bin/cli.ts)<br>[packages/react-query/src/bin/postinstall.spec.ts](../../../../sources/toss__suspensive/packages/react-query/src/bin/postinstall.spec.ts)<br>[packages/react-query/src/bin/postinstall.ts](../../../../sources/toss__suspensive/packages/react-query/src/bin/postinstall.ts)<br>[packages/react-query/src/bin/utils/commands.spec.ts](../../../../sources/toss__suspensive/packages/react-query/src/bin/utils/commands.spec.ts) |
| agentRuntime | 6 | [packages/react/src/hooks/useIsChanged.spec.ts](../../../../sources/toss__suspensive/packages/react/src/hooks/useIsChanged.spec.ts)<br>[packages/react/src/hooks/useIsChanged.ts](../../../../sources/toss__suspensive/packages/react/src/hooks/useIsChanged.ts)<br>[packages/react/src/hooks/usePrevious.spec.ts](../../../../sources/toss__suspensive/packages/react/src/hooks/usePrevious.spec.ts)<br>[packages/react/src/hooks/usePrevious.ts](../../../../sources/toss__suspensive/packages/react/src/hooks/usePrevious.ts)<br>[packages/react/src/hooks/useTimeout.spec.tsx](../../../../sources/toss__suspensive/packages/react/src/hooks/useTimeout.spec.tsx)<br>[packages/react/src/hooks/useTimeout.ts](../../../../sources/toss__suspensive/packages/react/src/hooks/useTimeout.ts) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 23 | [packages/react-query-5/src/index.ts](../../../../sources/toss__suspensive/packages/react-query-5/src/index.ts)<br>[packages/react-query-5/src/test-utils/index.ts](../../../../sources/toss__suspensive/packages/react-query-5/src/test-utils/index.ts)<br>[packages/react-query-4/src/index.ts](../../../../sources/toss__suspensive/packages/react-query-4/src/index.ts)<br>[packages/react-query-4/src/test-utils/index.ts](../../../../sources/toss__suspensive/packages/react-query-4/src/test-utils/index.ts)<br>[packages/react-query/src/index.ts](../../../../sources/toss__suspensive/packages/react-query/src/index.ts)<br>[packages/react/src/index.ts](../../../../sources/toss__suspensive/packages/react/src/index.ts)<br>[packages/react/src/test-utils/index.tsx](../../../../sources/toss__suspensive/packages/react/src/test-utils/index.tsx)<br>[packages/next/src/index.ts](../../../../sources/toss__suspensive/packages/next/src/index.ts) |
| spec | 33 | [packages/react-query-5/src/createGetQueryClient.spec.tsx](../../../../sources/toss__suspensive/packages/react-query-5/src/createGetQueryClient.spec.tsx)<br>[packages/react-query-5/src/QueriesHydration.spec.tsx](../../../../sources/toss__suspensive/packages/react-query-5/src/QueriesHydration.spec.tsx)<br>[packages/react-query-4/src/createGetQueryClient.spec.tsx](../../../../sources/toss__suspensive/packages/react-query-4/src/createGetQueryClient.spec.tsx)<br>[packages/react-query-4/src/IsFetching.spec.tsx](../../../../sources/toss__suspensive/packages/react-query-4/src/IsFetching.spec.tsx)<br>[packages/react-query-4/src/QueriesHydration.spec.tsx](../../../../sources/toss__suspensive/packages/react-query-4/src/QueriesHydration.spec.tsx)<br>[packages/react-query/src/bin/cli.spec.ts](../../../../sources/toss__suspensive/packages/react-query/src/bin/cli.spec.ts)<br>[packages/react-query/src/bin/postinstall.spec.ts](../../../../sources/toss__suspensive/packages/react-query/src/bin/postinstall.spec.ts)<br>[packages/react-query/src/bin/utils/commands.spec.ts](../../../../sources/toss__suspensive/packages/react-query/src/bin/utils/commands.spec.ts) |
| eval | 73 | [packages/react-query-5/src/createGetQueryClient.spec.tsx](../../../../sources/toss__suspensive/packages/react-query-5/src/createGetQueryClient.spec.tsx)<br>[packages/react-query-5/src/createGetQueryClient.test-d.tsx](../../../../sources/toss__suspensive/packages/react-query-5/src/createGetQueryClient.test-d.tsx)<br>[packages/react-query-5/src/IsFetching.test-d.tsx](../../../../sources/toss__suspensive/packages/react-query-5/src/IsFetching.test-d.tsx)<br>[packages/react-query-5/src/Mutation.test-d.tsx](../../../../sources/toss__suspensive/packages/react-query-5/src/Mutation.test-d.tsx)<br>[packages/react-query-5/src/PrefetchInfiniteQuery.test-d.tsx](../../../../sources/toss__suspensive/packages/react-query-5/src/PrefetchInfiniteQuery.test-d.tsx)<br>[packages/react-query-5/src/PrefetchQuery.test-d.tsx](../../../../sources/toss__suspensive/packages/react-query-5/src/PrefetchQuery.test-d.tsx)<br>[packages/react-query-5/src/QueriesHydration.spec.tsx](../../../../sources/toss__suspensive/packages/react-query-5/src/QueriesHydration.spec.tsx)<br>[packages/react-query-5/src/QueriesHydration.test-d.tsx](../../../../sources/toss__suspensive/packages/react-query-5/src/QueriesHydration.test-d.tsx) |
| security | 0 | 명확하지 않음 |
| ci | 7 | [.github/workflows/autofix.yml](../../../../sources/toss__suspensive/.github/workflows/autofix.yml)<br>[.github/workflows/broken-link-checker.yml](../../../../sources/toss__suspensive/.github/workflows/broken-link-checker.yml)<br>[.github/workflows/ci.yml](../../../../sources/toss__suspensive/.github/workflows/ci.yml)<br>[.github/workflows/graph.yml](../../../../sources/toss__suspensive/.github/workflows/graph.yml)<br>[.github/workflows/knip.yml](../../../../sources/toss__suspensive/.github/workflows/knip.yml)<br>[.github/workflows/labeler.yml](../../../../sources/toss__suspensive/.github/workflows/labeler.yml)<br>[.github/workflows/release.yml](../../../../sources/toss__suspensive/.github/workflows/release.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 210 | [README.md](../../../../sources/toss__suspensive/README.md)<br>[packages/react-query/README.md](../../../../sources/toss__suspensive/packages/react-query/README.md)<br>[packages/react/README.md](../../../../sources/toss__suspensive/packages/react/README.md)<br>[packages/jotai/README.md](../../../../sources/toss__suspensive/packages/jotai/README.md)<br>[packages/codemods/README.md](../../../../sources/toss__suspensive/packages/codemods/README.md)<br>[docs/suspensive.org/.gitignore](../../../../sources/toss__suspensive/docs/suspensive.org/.gitignore)<br>[docs/suspensive.org/eslint.config.mjs](../../../../sources/toss__suspensive/docs/suspensive.org/eslint.config.mjs)<br>[docs/suspensive.org/next.config.mjs](../../../../sources/toss__suspensive/docs/suspensive.org/next.config.mjs) |
| config | 29 | [package.json](../../../../sources/toss__suspensive/package.json)<br>[pnpm-workspace.yaml](../../../../sources/toss__suspensive/pnpm-workspace.yaml)<br>[turbo.json](../../../../sources/toss__suspensive/turbo.json)<br>[packages/react-query-5/package.json](../../../../sources/toss__suspensive/packages/react-query-5/package.json)<br>[packages/react-query-5/tsconfig.json](../../../../sources/toss__suspensive/packages/react-query-5/tsconfig.json)<br>[packages/react-query-4/package.json](../../../../sources/toss__suspensive/packages/react-query-4/package.json)<br>[packages/react-query-4/tsconfig.json](../../../../sources/toss__suspensive/packages/react-query-4/tsconfig.json)<br>[packages/react-query/package.json](../../../../sources/toss__suspensive/packages/react-query/package.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 73 | [packages/react-query-5/src/createGetQueryClient.spec.tsx](../../../../sources/toss__suspensive/packages/react-query-5/src/createGetQueryClient.spec.tsx)<br>[packages/react-query-5/src/createGetQueryClient.test-d.tsx](../../../../sources/toss__suspensive/packages/react-query-5/src/createGetQueryClient.test-d.tsx)<br>[packages/react-query-5/src/IsFetching.test-d.tsx](../../../../sources/toss__suspensive/packages/react-query-5/src/IsFetching.test-d.tsx)<br>[packages/react-query-5/src/Mutation.test-d.tsx](../../../../sources/toss__suspensive/packages/react-query-5/src/Mutation.test-d.tsx)<br>[packages/react-query-5/src/PrefetchInfiniteQuery.test-d.tsx](../../../../sources/toss__suspensive/packages/react-query-5/src/PrefetchInfiniteQuery.test-d.tsx)<br>[packages/react-query-5/src/PrefetchQuery.test-d.tsx](../../../../sources/toss__suspensive/packages/react-query-5/src/PrefetchQuery.test-d.tsx) |
| CI workflow | 7 | [.github/workflows/autofix.yml](../../../../sources/toss__suspensive/.github/workflows/autofix.yml)<br>[.github/workflows/broken-link-checker.yml](../../../../sources/toss__suspensive/.github/workflows/broken-link-checker.yml)<br>[.github/workflows/ci.yml](../../../../sources/toss__suspensive/.github/workflows/ci.yml)<br>[.github/workflows/graph.yml](../../../../sources/toss__suspensive/.github/workflows/graph.yml)<br>[.github/workflows/knip.yml](../../../../sources/toss__suspensive/.github/workflows/knip.yml)<br>[.github/workflows/labeler.yml](../../../../sources/toss__suspensive/.github/workflows/labeler.yml) |
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

1. 핵심 참조에서 시작: `packages/react-query-5/src/index.ts`, `packages/react-query-4/src/index.ts`, `packages/react-query/src/index.ts`.
2. entrypoint를 따라 실행 흐름 확인: `packages/react-query-5/src/index.ts`, `packages/react-query-4/src/index.ts`, `packages/react-query/src/index.ts`.
3. agent/tool runtime 매핑: `packages/react/src/hooks/useIsChanged.spec.ts`, `packages/react/src/hooks/useIsChanged.ts`, `packages/react/src/hooks/usePrevious.spec.ts`.
4. retrieval/memory/indexing 확인: `packages/react-query-5/src/index.ts`, `packages/react-query-5/src/test-utils/index.ts`, `packages/react-query-4/src/index.ts`.
5. test/eval 파일로 동작 검증: `packages/react-query-5/src/createGetQueryClient.spec.tsx`, `packages/react-query-5/src/createGetQueryClient.test-d.tsx`, `packages/react-query-5/src/IsFetching.test-d.tsx`.

## 기존 레포 인사이트

일반 AI 오픈소스 관점에서 All in one for React Suspense — ErrorBoundary with shouldCatch, clientOnly to skip SSR for a boundary, Delay, and more. 핵심 구조 신호는 TypeScript, package.json, README.md, LICENSE, react, ci이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 더 깊은 구조 스캔 필요입니다.
