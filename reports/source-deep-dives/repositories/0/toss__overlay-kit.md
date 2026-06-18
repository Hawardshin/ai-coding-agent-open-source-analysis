# toss/overlay-kit 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

A library for handling overlays more easily in React.

## 요약

- 조사 단위: `sources/toss__overlay-kit` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 184 files, 60 directories, depth score 100, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 entrypoints=packages/src/index.ts, examples/react-19/framer-motion/src/main.tsx, examples/react-18/framer-motion/src/main.tsx이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | toss/overlay-kit |
| 주제 | 일반 AI 오픈소스 / 일반 AI 오픈소스 |
| Region | korea |
| Language | TypeScript |
| Stars | 713 |
| Forks | 78 |
| License | MIT |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/toss__overlay-kit](../../../../sources/toss__overlay-kit) |
| 기존 보고서 | [reports/korea-trending/repositories/toss__overlay-kit.md](../../../korea-trending/repositories/toss__overlay-kit.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 184 / 60 |
| 관측 최대 깊이 | 8 |
| 상위 디렉터리 | .changeset, .github, .yarn, docs, examples, packages |
| 상위 확장자 | .mdx: 48, .tsx: 41, .ts: 26, .json: 17, (none): 14, .js: 7, .md: 7, .yml: 6, .cjs: 4, .html: 4, .png: 3, .txt: 3 |
| 소스 패턴 | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 62 |
| packages/src | packages workspace | 15 |
| examples/react-16 | examples workspace | 4 |
| examples/react-17 | examples workspace | 4 |
| examples/react-18 | examples workspace | 4 |
| examples/react-19 | examples workspace | 4 |
| .github | ci surface | 1 |
| examples | top-level component | 1 |
| packages | source boundary | 1 |
| packages/package.json | packages workspace | 1 |
| packages/README.md | packages workspace | 1 |
| packages/setup.test.ts | packages workspace | 1 |
| packages/tsconfig.json | packages workspace | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| quality | package.json | lint | eslint . |
| utility | package.json | changeset:version | yarn changeset version |
| utility | package.json | changeset:publish | yarn changeset publish |


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
| entrypoints | [packages/src/index.ts](../../../../sources/toss__overlay-kit/packages/src/index.ts) | entrypoints signal |
| entrypoints | [examples/react-19/framer-motion/src/main.tsx](../../../../sources/toss__overlay-kit/examples/react-19/framer-motion/src/main.tsx) | entrypoints signal |
| entrypoints | [examples/react-18/framer-motion/src/main.tsx](../../../../sources/toss__overlay-kit/examples/react-18/framer-motion/src/main.tsx) | entrypoints signal |
| entrypoints | [examples/react-17/framer-motion/src/main.tsx](../../../../sources/toss__overlay-kit/examples/react-17/framer-motion/src/main.tsx) | entrypoints signal |
| config | [package.json](../../../../sources/toss__overlay-kit/package.json) | config signal |
| config | [packages/package.json](../../../../sources/toss__overlay-kit/packages/package.json) | config signal |
| config | [packages/tsconfig.json](../../../../sources/toss__overlay-kit/packages/tsconfig.json) | config signal |
| config | [examples/react-19/framer-motion/package.json](../../../../sources/toss__overlay-kit/examples/react-19/framer-motion/package.json) | config signal |
| docs | [README-ja_JP.md](../../../../sources/toss__overlay-kit/README-ja_JP.md) | docs signal |
| docs | [README-ko_kr.md](../../../../sources/toss__overlay-kit/README-ko_kr.md) | docs signal |
| docs | [README.md](../../../../sources/toss__overlay-kit/README.md) | docs signal |
| docs | [packages/README.md](../../../../sources/toss__overlay-kit/packages/README.md) | docs signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 10 | [packages/src/index.ts](../../../../sources/toss__overlay-kit/packages/src/index.ts)<br>[examples/react-19/framer-motion/src/main.tsx](../../../../sources/toss__overlay-kit/examples/react-19/framer-motion/src/main.tsx)<br>[examples/react-18/framer-motion/src/main.tsx](../../../../sources/toss__overlay-kit/examples/react-18/framer-motion/src/main.tsx)<br>[examples/react-17/framer-motion/src/main.tsx](../../../../sources/toss__overlay-kit/examples/react-17/framer-motion/src/main.tsx)<br>[examples/react-16/framer-motion/src/main.tsx](../../../../sources/toss__overlay-kit/examples/react-16/framer-motion/src/main.tsx)<br>[docs/src/components/main.tsx](../../../../sources/toss__overlay-kit/docs/src/components/main.tsx)<br>[.yarn/sdks/typescript/bin/tsc](../../../../sources/toss__overlay-kit/.yarn/sdks/typescript/bin/tsc)<br>[.yarn/sdks/typescript/bin/tsserver](../../../../sources/toss__overlay-kit/.yarn/sdks/typescript/bin/tsserver) |
| agentRuntime | 7 | [packages/src/context/context.ts](../../../../sources/toss__overlay-kit/packages/src/context/context.ts)<br>[packages/src/context/reducer.test.ts](../../../../sources/toss__overlay-kit/packages/src/context/reducer.test.ts)<br>[packages/src/context/reducer.ts](../../../../sources/toss__overlay-kit/packages/src/context/reducer.ts)<br>[packages/src/context/provider/content-overlay-controller.tsx](../../../../sources/toss__overlay-kit/packages/src/context/provider/content-overlay-controller.tsx)<br>[packages/src/context/provider/index.tsx](../../../../sources/toss__overlay-kit/packages/src/context/provider/index.tsx)<br>[docs/src/pages/ko/docs/guides/hooks.mdx](../../../../sources/toss__overlay-kit/docs/src/pages/ko/docs/guides/hooks.mdx)<br>[docs/src/pages/en/docs/guides/hooks.mdx](../../../../sources/toss__overlay-kit/docs/src/pages/en/docs/guides/hooks.mdx) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 12 | [packages/src/index.ts](../../../../sources/toss__overlay-kit/packages/src/index.ts)<br>[packages/src/utils/index.ts](../../../../sources/toss__overlay-kit/packages/src/utils/index.ts)<br>[packages/src/context/provider/index.tsx](../../../../sources/toss__overlay-kit/packages/src/context/provider/index.tsx)<br>[examples/react-19/framer-motion/index.html](../../../../sources/toss__overlay-kit/examples/react-19/framer-motion/index.html)<br>[examples/react-18/framer-motion/index.html](../../../../sources/toss__overlay-kit/examples/react-18/framer-motion/index.html)<br>[examples/react-17/framer-motion/index.html](../../../../sources/toss__overlay-kit/examples/react-17/framer-motion/index.html)<br>[examples/react-16/framer-motion/index.html](../../../../sources/toss__overlay-kit/examples/react-16/framer-motion/index.html)<br>[docs/src/pages/ko/index.mdx](../../../../sources/toss__overlay-kit/docs/src/pages/ko/index.mdx) |
| spec | 16 | [docs/src/pages/ko/docs/more/with-design-systems/_meta.tsx](../../../../sources/toss__overlay-kit/docs/src/pages/ko/docs/more/with-design-systems/_meta.tsx)<br>[docs/src/pages/ko/docs/more/with-design-systems/ant-design.mdx](../../../../sources/toss__overlay-kit/docs/src/pages/ko/docs/more/with-design-systems/ant-design.mdx)<br>[docs/src/pages/ko/docs/more/with-design-systems/chakra-ui.mdx](../../../../sources/toss__overlay-kit/docs/src/pages/ko/docs/more/with-design-systems/chakra-ui.mdx)<br>[docs/src/pages/ko/docs/more/with-design-systems/headless-ui.mdx](../../../../sources/toss__overlay-kit/docs/src/pages/ko/docs/more/with-design-systems/headless-ui.mdx)<br>[docs/src/pages/ko/docs/more/with-design-systems/mantine.mdx](../../../../sources/toss__overlay-kit/docs/src/pages/ko/docs/more/with-design-systems/mantine.mdx)<br>[docs/src/pages/ko/docs/more/with-design-systems/mui.mdx](../../../../sources/toss__overlay-kit/docs/src/pages/ko/docs/more/with-design-systems/mui.mdx)<br>[docs/src/pages/ko/docs/more/with-design-systems/radix-ui.mdx](../../../../sources/toss__overlay-kit/docs/src/pages/ko/docs/more/with-design-systems/radix-ui.mdx)<br>[docs/src/pages/ko/docs/more/with-design-systems/shadcn.mdx](../../../../sources/toss__overlay-kit/docs/src/pages/ko/docs/more/with-design-systems/shadcn.mdx) |
| eval | 7 | [packages/setup.test.ts](../../../../sources/toss__overlay-kit/packages/setup.test.ts)<br>[packages/src/event.test.tsx](../../../../sources/toss__overlay-kit/packages/src/event.test.tsx)<br>[packages/src/utils/create-overlay-context.test.tsx](../../../../sources/toss__overlay-kit/packages/src/utils/create-overlay-context.test.tsx)<br>[packages/src/utils/create-safe-context.test.tsx](../../../../sources/toss__overlay-kit/packages/src/utils/create-safe-context.test.tsx)<br>[packages/src/utils/create-use-external-events.test.ts](../../../../sources/toss__overlay-kit/packages/src/utils/create-use-external-events.test.ts)<br>[packages/src/utils/emitter.test.ts](../../../../sources/toss__overlay-kit/packages/src/utils/emitter.test.ts)<br>[packages/src/context/reducer.test.ts](../../../../sources/toss__overlay-kit/packages/src/context/reducer.test.ts) |
| security | 0 | 명확하지 않음 |
| ci | 3 | [.github/workflows/autofix.yml](../../../../sources/toss__overlay-kit/.github/workflows/autofix.yml)<br>[.github/workflows/ci.yml](../../../../sources/toss__overlay-kit/.github/workflows/ci.yml)<br>[.github/workflows/release.yml](../../../../sources/toss__overlay-kit/.github/workflows/release.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 91 | [README-ja_JP.md](../../../../sources/toss__overlay-kit/README-ja_JP.md)<br>[README-ko_kr.md](../../../../sources/toss__overlay-kit/README-ko_kr.md)<br>[README.md](../../../../sources/toss__overlay-kit/README.md)<br>[packages/README.md](../../../../sources/toss__overlay-kit/packages/README.md)<br>[docs/.gitignore](../../../../sources/toss__overlay-kit/docs/.gitignore)<br>[docs/next-env.d.ts](../../../../sources/toss__overlay-kit/docs/next-env.d.ts)<br>[docs/next.config.mjs](../../../../sources/toss__overlay-kit/docs/next.config.mjs)<br>[docs/package.json](../../../../sources/toss__overlay-kit/docs/package.json) |
| config | 16 | [package.json](../../../../sources/toss__overlay-kit/package.json)<br>[packages/package.json](../../../../sources/toss__overlay-kit/packages/package.json)<br>[packages/tsconfig.json](../../../../sources/toss__overlay-kit/packages/tsconfig.json)<br>[examples/react-19/framer-motion/package.json](../../../../sources/toss__overlay-kit/examples/react-19/framer-motion/package.json)<br>[examples/react-19/framer-motion/tsconfig.json](../../../../sources/toss__overlay-kit/examples/react-19/framer-motion/tsconfig.json)<br>[examples/react-18/framer-motion/package.json](../../../../sources/toss__overlay-kit/examples/react-18/framer-motion/package.json)<br>[examples/react-18/framer-motion/tsconfig.json](../../../../sources/toss__overlay-kit/examples/react-18/framer-motion/tsconfig.json)<br>[examples/react-17/framer-motion/package.json](../../../../sources/toss__overlay-kit/examples/react-17/framer-motion/package.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 7 | [packages/setup.test.ts](../../../../sources/toss__overlay-kit/packages/setup.test.ts)<br>[packages/src/event.test.tsx](../../../../sources/toss__overlay-kit/packages/src/event.test.tsx)<br>[packages/src/utils/create-overlay-context.test.tsx](../../../../sources/toss__overlay-kit/packages/src/utils/create-overlay-context.test.tsx)<br>[packages/src/utils/create-safe-context.test.tsx](../../../../sources/toss__overlay-kit/packages/src/utils/create-safe-context.test.tsx)<br>[packages/src/utils/create-use-external-events.test.ts](../../../../sources/toss__overlay-kit/packages/src/utils/create-use-external-events.test.ts)<br>[packages/src/utils/emitter.test.ts](../../../../sources/toss__overlay-kit/packages/src/utils/emitter.test.ts) |
| CI workflow | 3 | [.github/workflows/autofix.yml](../../../../sources/toss__overlay-kit/.github/workflows/autofix.yml)<br>[.github/workflows/ci.yml](../../../../sources/toss__overlay-kit/.github/workflows/ci.yml)<br>[.github/workflows/release.yml](../../../../sources/toss__overlay-kit/.github/workflows/release.yml) |
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

1. 핵심 참조에서 시작: `packages/src/index.ts`, `examples/react-19/framer-motion/src/main.tsx`, `examples/react-18/framer-motion/src/main.tsx`.
2. entrypoint를 따라 실행 흐름 확인: `packages/src/index.ts`, `examples/react-19/framer-motion/src/main.tsx`, `examples/react-18/framer-motion/src/main.tsx`.
3. agent/tool runtime 매핑: `packages/src/context/context.ts`, `packages/src/context/reducer.test.ts`, `packages/src/context/reducer.ts`.
4. retrieval/memory/indexing 확인: `packages/src/index.ts`, `packages/src/utils/index.ts`, `packages/src/context/provider/index.tsx`.
5. test/eval 파일로 동작 검증: `packages/setup.test.ts`, `packages/src/event.test.tsx`, `packages/src/utils/create-overlay-context.test.tsx`.

## 기존 레포 인사이트

일반 AI 오픈소스 관점에서 A library for handling overlays more easily in React.. 핵심 구조 신호는 TypeScript, package.json, README.md, LICENSE, ci, docs이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 더 깊은 구조 스캔 필요입니다.
