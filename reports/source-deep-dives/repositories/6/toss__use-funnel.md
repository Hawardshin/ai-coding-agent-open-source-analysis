# toss/use-funnel 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

A powerful and safe step-by-step state management library at React

## 요약

- 조사 단위: `sources/toss__use-funnel` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 203 files, 54 directories, depth score 89, key references 8개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

보안/거버넌스/안전 관점에서 monorepo/workspace, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 ci=.github/workflows/autofix.yml, .github/workflows/release.yml이고, 의존성 단서는 react, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 8개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | toss/use-funnel |
| 주제 | 보안/거버넌스/안전 / 보안/거버넌스/안전 |
| Region | korea |
| Language | TypeScript |
| Stars | 567 |
| Forks | 61 |
| License | MIT |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/toss__use-funnel](../../../../sources/toss__use-funnel) |
| 기존 보고서 | [reports/korea-trending/repositories/toss__use-funnel.md](../../../korea-trending/repositories/toss__use-funnel.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 203 / 54 |
| 관측 최대 깊이 | 6 |
| 상위 디렉터리 | _templates, .changeset, .github, docs, examples, packages |
| 상위 확장자 | .tsx: 37, .ts: 32, .mdx: 28, .json: 26, .md: 21, .js: 13, (none): 8, .png: 7, .t: 7, .mjs: 6, .yml: 5, .css: 3 |
| 소스 패턴 | monorepo/workspace, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, ui/extension surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 41 |
| packages/next | packages workspace | 10 |
| packages/core | packages workspace | 9 |
| packages/browser | packages workspace | 7 |
| packages/react-navigation-native | packages workspace | 7 |
| packages/react-router | packages workspace | 7 |
| packages/react-router-dom | packages workspace | 7 |
| examples/nextjs-pages-router | examples workspace | 6 |
| examples/nextjs-app-router | examples workspace | 5 |
| _templates | top-level component | 1 |
| .github | ci surface | 1 |
| examples | top-level component | 1 |
| packages | source boundary | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | package.json | add:router | hygen packages router |
| utility | package.json | prepare | husky |
| test | package.json | prettier | prettier --write "packages/*/{src,test}/**/*.{js,jsx,ts,tsx}" |
| utility | package.json | changeset | changeset |
| utility | package.json | changeset:publish | pnpm publish -r |
| utility | package.json | changeset:version | changeset version && pnpm install --lockfile-only |


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
| ci | [.github/workflows/autofix.yml](../../../../sources/toss__use-funnel/.github/workflows/autofix.yml) | ci signal |
| ci | [.github/workflows/release.yml](../../../../sources/toss__use-funnel/.github/workflows/release.yml) | ci signal |
| config | [package.json](../../../../sources/toss__use-funnel/package.json) | config signal |
| config | [pnpm-workspace.yaml](../../../../sources/toss__use-funnel/pnpm-workspace.yaml) | config signal |
| config | [packages/react-router-dom/package.json](../../../../sources/toss__use-funnel/packages/react-router-dom/package.json) | config signal |
| config | [packages/react-router-dom/tsconfig.json](../../../../sources/toss__use-funnel/packages/react-router-dom/tsconfig.json) | config signal |
| eval | [packages/react-router-dom/test/index.test.tsx](../../../../sources/toss__use-funnel/packages/react-router-dom/test/index.test.tsx) | eval support |
| eval | [packages/react-router/test/index.test.tsx](../../../../sources/toss__use-funnel/packages/react-router/test/index.test.tsx) | eval support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 7 | [packages/react-router-dom/src/index.ts](../../../../sources/toss__use-funnel/packages/react-router-dom/src/index.ts)<br>[packages/react-router/src/index.ts](../../../../sources/toss__use-funnel/packages/react-router/src/index.ts)<br>[packages/react-navigation-native/src/index.ts](../../../../sources/toss__use-funnel/packages/react-navigation-native/src/index.ts)<br>[packages/next/src/index.ts](../../../../sources/toss__use-funnel/packages/next/src/index.ts)<br>[packages/core/src/index.ts](../../../../sources/toss__use-funnel/packages/core/src/index.ts)<br>[packages/browser/src/index.ts](../../../../sources/toss__use-funnel/packages/browser/src/index.ts)<br>[_templates/packages/router/src/index.ts.t](../../../../sources/toss__use-funnel/_templates/packages/router/src/index.ts.t) |
| agentRuntime | 2 | [docs/src/pages/ko/docs/context-guide.mdx](../../../../sources/toss__use-funnel/docs/src/pages/ko/docs/context-guide.mdx)<br>[docs/src/pages/en/docs/context-guide.mdx](../../../../sources/toss__use-funnel/docs/src/pages/en/docs/context-guide.mdx) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 19 | [packages/react-router-dom/test/index.test.tsx](../../../../sources/toss__use-funnel/packages/react-router-dom/test/index.test.tsx)<br>[packages/react-router-dom/src/index.ts](../../../../sources/toss__use-funnel/packages/react-router-dom/src/index.ts)<br>[packages/react-router/test/index.test.tsx](../../../../sources/toss__use-funnel/packages/react-router/test/index.test.tsx)<br>[packages/react-router/src/index.ts](../../../../sources/toss__use-funnel/packages/react-router/src/index.ts)<br>[packages/react-navigation-native/test/index.test.tsx](../../../../sources/toss__use-funnel/packages/react-navigation-native/test/index.test.tsx)<br>[packages/react-navigation-native/src/index.ts](../../../../sources/toss__use-funnel/packages/react-navigation-native/src/index.ts)<br>[packages/next/test/index.test.tsx](../../../../sources/toss__use-funnel/packages/next/test/index.test.tsx)<br>[packages/next/src/index.ts](../../../../sources/toss__use-funnel/packages/next/src/index.ts) |
| spec | 2 | [examples/nextjs-pages-router/e2e/pages-router-funnel.spec.ts](../../../../sources/toss__use-funnel/examples/nextjs-pages-router/e2e/pages-router-funnel.spec.ts)<br>[examples/nextjs-app-router/e2e/app-router-funnel.spec.ts](../../../../sources/toss__use-funnel/examples/nextjs-app-router/e2e/app-router-funnel.spec.ts) |
| eval | 15 | [packages/react-router-dom/test/index.test.tsx](../../../../sources/toss__use-funnel/packages/react-router-dom/test/index.test.tsx)<br>[packages/react-router/test/index.test.tsx](../../../../sources/toss__use-funnel/packages/react-router/test/index.test.tsx)<br>[packages/react-navigation-native/test/index.test.tsx](../../../../sources/toss__use-funnel/packages/react-navigation-native/test/index.test.tsx)<br>[packages/next/test/compat.test.tsx](../../../../sources/toss__use-funnel/packages/next/test/compat.test.tsx)<br>[packages/next/test/index.test.tsx](../../../../sources/toss__use-funnel/packages/next/test/index.test.tsx)<br>[packages/next/test/util.test.ts](../../../../sources/toss__use-funnel/packages/next/test/util.test.ts)<br>[packages/next/test/utils.tsx](../../../../sources/toss__use-funnel/packages/next/test/utils.tsx)<br>[packages/core/test/memoryRouter.tsx](../../../../sources/toss__use-funnel/packages/core/test/memoryRouter.tsx) |
| security | 0 | 명확하지 않음 |
| ci | 2 | [.github/workflows/autofix.yml](../../../../sources/toss__use-funnel/.github/workflows/autofix.yml)<br>[.github/workflows/release.yml](../../../../sources/toss__use-funnel/.github/workflows/release.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 76 | [README.md](../../../../sources/toss__use-funnel/README.md)<br>[packages/react-router-dom/README.md](../../../../sources/toss__use-funnel/packages/react-router-dom/README.md)<br>[packages/react-router/README.md](../../../../sources/toss__use-funnel/packages/react-router/README.md)<br>[packages/react-navigation-native/README.md](../../../../sources/toss__use-funnel/packages/react-navigation-native/README.md)<br>[packages/next/README.md](../../../../sources/toss__use-funnel/packages/next/README.md)<br>[packages/core/README.md](../../../../sources/toss__use-funnel/packages/core/README.md)<br>[packages/browser/README.md](../../../../sources/toss__use-funnel/packages/browser/README.md)<br>[examples/nextjs-pages-router/README.md](../../../../sources/toss__use-funnel/examples/nextjs-pages-router/README.md) |
| config | 20 | [package.json](../../../../sources/toss__use-funnel/package.json)<br>[pnpm-workspace.yaml](../../../../sources/toss__use-funnel/pnpm-workspace.yaml)<br>[packages/react-router-dom/package.json](../../../../sources/toss__use-funnel/packages/react-router-dom/package.json)<br>[packages/react-router-dom/tsconfig.json](../../../../sources/toss__use-funnel/packages/react-router-dom/tsconfig.json)<br>[packages/react-router/package.json](../../../../sources/toss__use-funnel/packages/react-router/package.json)<br>[packages/react-router/tsconfig.json](../../../../sources/toss__use-funnel/packages/react-router/tsconfig.json)<br>[packages/react-navigation-native/package.json](../../../../sources/toss__use-funnel/packages/react-navigation-native/package.json)<br>[packages/react-navigation-native/tsconfig.json](../../../../sources/toss__use-funnel/packages/react-navigation-native/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 15 | [packages/react-router-dom/test/index.test.tsx](../../../../sources/toss__use-funnel/packages/react-router-dom/test/index.test.tsx)<br>[packages/react-router/test/index.test.tsx](../../../../sources/toss__use-funnel/packages/react-router/test/index.test.tsx)<br>[packages/react-navigation-native/test/index.test.tsx](../../../../sources/toss__use-funnel/packages/react-navigation-native/test/index.test.tsx)<br>[packages/next/test/compat.test.tsx](../../../../sources/toss__use-funnel/packages/next/test/compat.test.tsx)<br>[packages/next/test/index.test.tsx](../../../../sources/toss__use-funnel/packages/next/test/index.test.tsx)<br>[packages/next/test/util.test.ts](../../../../sources/toss__use-funnel/packages/next/test/util.test.ts) |
| CI workflow | 2 | [.github/workflows/autofix.yml](../../../../sources/toss__use-funnel/.github/workflows/autofix.yml)<br>[.github/workflows/release.yml](../../../../sources/toss__use-funnel/.github/workflows/release.yml) |
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

1. 핵심 참조에서 시작: `.github/workflows/autofix.yml`, `.github/workflows/release.yml`, `package.json`.
2. entrypoint를 따라 실행 흐름 확인: `packages/react-router-dom/src/index.ts`, `packages/react-router/src/index.ts`, `packages/react-navigation-native/src/index.ts`.
3. agent/tool runtime 매핑: `docs/src/pages/ko/docs/context-guide.mdx`, `docs/src/pages/en/docs/context-guide.mdx`.
4. retrieval/memory/indexing 확인: `packages/react-router-dom/test/index.test.tsx`, `packages/react-router-dom/src/index.ts`, `packages/react-router/test/index.test.tsx`.
5. test/eval 파일로 동작 검증: `packages/react-router-dom/test/index.test.tsx`, `packages/react-router/test/index.test.tsx`, `packages/react-navigation-native/test/index.test.tsx`.

## 기존 레포 인사이트

보안/거버넌스/안전 관점에서 A powerful and safe step by step state management library at React. 핵심 구조 신호는 TypeScript, package.json, README.md, LICENSE, react, ci이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 보안/거버넌스/안전 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 더 깊은 구조 스캔 필요입니다.
