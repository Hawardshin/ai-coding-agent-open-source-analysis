# toss/toss-ui 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

toss/toss-ui

## 요약

- 조사 단위: `sources/toss__toss-ui` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 1,744 files, 53 directories, depth score 106, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 entrypoints=packages/utils/src/index.ts, packages/uikit/src/index.ts, packages/uikit/.storybook/main.js이고, 의존성 단서는 react, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | toss/toss-ui |
| 주제 | 일반 AI 오픈소스 / 일반 AI 오픈소스 |
| Region | korea |
| Language | TypeScript |
| Stars | 102 |
| Forks | 12 |
| License | Apache-2.0 |
| 성숙도 | 초기 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/toss__toss-ui](../../../../sources/toss__toss-ui) |
| 기존 보고서 | [reports/korea-trending/repositories/toss__toss-ui.md](../../../korea-trending/repositories/toss__toss-ui.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 1744 / 53 |
| 관측 최대 깊이 | 7 |
| 상위 디렉터리 | .husky, .yarn, packages, shared-configs |
| 상위 확장자 | .zip: 1627, .ts: 44, .js: 16, .json: 16, .tsx: 12, (none): 10, .mdx: 9, .md: 5, .cjs: 2, .yml: 2, .lock: 1 |
| 소스 패턴 | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, ui/extension surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| packages/styled | packages workspace | 27 |
| packages/uikit | packages workspace | 27 |
| packages/utils | packages workspace | 6 |
| packages/eslint-config | packages workspace | 4 |
| packages | source boundary | 1 |
| shared-configs | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| quality | package.json | lint | eslint . --ext .ts,.tsx |
| utility | package.json | postinstall | husky install |
| utility | package.json | prepublishOnly | pinst --disable |
| utility | package.json | postpublish | pinst --enable |


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
| entrypoints | [packages/utils/src/index.ts](../../../../sources/toss__toss-ui/packages/utils/src/index.ts) | entrypoints signal |
| entrypoints | [packages/uikit/src/index.ts](../../../../sources/toss__toss-ui/packages/uikit/src/index.ts) | entrypoints signal |
| entrypoints | [packages/uikit/.storybook/main.js](../../../../sources/toss__toss-ui/packages/uikit/.storybook/main.js) | entrypoints signal |
| entrypoints | [packages/styled/src/index.ts](../../../../sources/toss__toss-ui/packages/styled/src/index.ts) | entrypoints signal |
| config | [package.json](../../../../sources/toss__toss-ui/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/toss__toss-ui/tsconfig.json) | config signal |
| config | [packages/utils/package.json](../../../../sources/toss__toss-ui/packages/utils/package.json) | config signal |
| config | [packages/uikit/package.json](../../../../sources/toss__toss-ui/packages/uikit/package.json) | config signal |
| docs | [README.md](../../../../sources/toss__toss-ui/README.md) | docs signal |
| docs | [packages/utils/README.md](../../../../sources/toss__toss-ui/packages/utils/README.md) | docs signal |
| docs | [packages/uikit/README.md](../../../../sources/toss__toss-ui/packages/uikit/README.md) | docs signal |
| docs | [packages/uikit/docs/index.stories.mdx](../../../../sources/toss__toss-ui/packages/uikit/docs/index.stories.mdx) | docs signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 9 | [packages/utils/src/index.ts](../../../../sources/toss__toss-ui/packages/utils/src/index.ts)<br>[packages/uikit/src/index.ts](../../../../sources/toss__toss-ui/packages/uikit/src/index.ts)<br>[packages/uikit/.storybook/main.js](../../../../sources/toss__toss-ui/packages/uikit/.storybook/main.js)<br>[packages/styled/src/index.ts](../../../../sources/toss__toss-ui/packages/styled/src/index.ts)<br>[packages/styled/.storybook/main.js](../../../../sources/toss__toss-ui/packages/styled/.storybook/main.js)<br>[packages/eslint-config/src/index.js](../../../../sources/toss__toss-ui/packages/eslint-config/src/index.js)<br>[.yarn/sdks/typescript/bin/tsc](../../../../sources/toss__toss-ui/.yarn/sdks/typescript/bin/tsc)<br>[.yarn/sdks/typescript/bin/tsserver](../../../../sources/toss__toss-ui/.yarn/sdks/typescript/bin/tsserver) |
| agentRuntime | 3 | [.yarn/cache/agent-base-npm-6.0.2-428f325a93-e77eff83e1.zip](../../../../sources/toss__toss-ui/.yarn/cache/agent-base-npm-6.0.2-428f325a93-e77eff83e1.zip)<br>[.yarn/cache/memory-fs-npm-0.4.1-0a5f9b8954-ba79207118.zip](../../../../sources/toss__toss-ui/.yarn/cache/memory-fs-npm-0.4.1-0a5f9b8954-ba79207118.zip)<br>[.yarn/cache/memory-fs-npm-0.5.0-8be5938449-deb916f33c.zip](../../../../sources/toss__toss-ui/.yarn/cache/memory-fs-npm-0.5.0-8be5938449-deb916f33c.zip) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 25 | [packages/utils/src/index.ts](../../../../sources/toss__toss-ui/packages/utils/src/index.ts)<br>[packages/utils/src/lib/index.ts](../../../../sources/toss__toss-ui/packages/utils/src/lib/index.ts)<br>[packages/utils/src/lib/objects/index.ts](../../../../sources/toss__toss-ui/packages/utils/src/lib/objects/index.ts)<br>[packages/uikit/src/index.ts](../../../../sources/toss__toss-ui/packages/uikit/src/index.ts)<br>[packages/uikit/src/lib/index.ts](../../../../sources/toss__toss-ui/packages/uikit/src/lib/index.ts)<br>[packages/uikit/src/lib/utils/index.ts](../../../../sources/toss__toss-ui/packages/uikit/src/lib/utils/index.ts)<br>[packages/uikit/src/lib/types/index.ts](../../../../sources/toss__toss-ui/packages/uikit/src/lib/types/index.ts)<br>[packages/uikit/src/lib/components/index.ts](../../../../sources/toss__toss-ui/packages/uikit/src/lib/components/index.ts) |
| spec | 5 | [packages/uikit/tsconfig.spec.json](../../../../sources/toss__toss-ui/packages/uikit/tsconfig.spec.json)<br>[packages/uikit/src/lib/components/View/View.spec.tsx](../../../../sources/toss__toss-ui/packages/uikit/src/lib/components/View/View.spec.tsx)<br>[packages/uikit/src/lib/components/Stack/Stack.spec.tsx](../../../../sources/toss__toss-ui/packages/uikit/src/lib/components/Stack/Stack.spec.tsx)<br>[packages/styled/tsconfig.spec.json](../../../../sources/toss__toss-ui/packages/styled/tsconfig.spec.json)<br>[packages/styled/src/lib/createVariantPropInterpolation/createVariantPropInterpolation.spec.ts](../../../../sources/toss__toss-ui/packages/styled/src/lib/createVariantPropInterpolation/createVariantPropInterpolation.spec.ts) |
| eval | 11 | [packages/uikit/tsconfig.spec.json](../../../../sources/toss__toss-ui/packages/uikit/tsconfig.spec.json)<br>[packages/uikit/src/lib/components/View/View.spec.tsx](../../../../sources/toss__toss-ui/packages/uikit/src/lib/components/View/View.spec.tsx)<br>[packages/uikit/src/lib/components/Stack/Stack.spec.tsx](../../../../sources/toss__toss-ui/packages/uikit/src/lib/components/Stack/Stack.spec.tsx)<br>[packages/styled/tsconfig.spec.json](../../../../sources/toss__toss-ui/packages/styled/tsconfig.spec.json)<br>[packages/styled/src/lib/createVariantPropInterpolation/createVariantPropInterpolation.spec.ts](../../../../sources/toss__toss-ui/packages/styled/src/lib/createVariantPropInterpolation/createVariantPropInterpolation.spec.ts)<br>[.yarn/cache/@jest-test-result-npm-27.0.6-34f3e2e7a7-be967817bc.zip](../../../../sources/toss__toss-ui/.yarn/cache/@jest-test-result-npm-27.0.6-34f3e2e7a7-be967817bc.zip)<br>[.yarn/cache/@jest-test-sequencer-npm-27.0.6-86e97d4060-fb9adb58c7.zip](../../../../sources/toss__toss-ui/.yarn/cache/@jest-test-sequencer-npm-27.0.6-86e97d4060-fb9adb58c7.zip)<br>[.yarn/cache/@types-react-test-renderer-npm-17.0.1-9a42d8bb68-bd3f8c6c2a.zip](../../../../sources/toss__toss-ui/.yarn/cache/@types-react-test-renderer-npm-17.0.1-9a42d8bb68-bd3f8c6c2a.zip) |
| security | 0 | 명확하지 않음 |
| ci | 0 | 명확하지 않음 |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 21 | [README.md](../../../../sources/toss__toss-ui/README.md)<br>[packages/utils/README.md](../../../../sources/toss__toss-ui/packages/utils/README.md)<br>[packages/uikit/README.md](../../../../sources/toss__toss-ui/packages/uikit/README.md)<br>[packages/uikit/docs/index.stories.mdx](../../../../sources/toss__toss-ui/packages/uikit/docs/index.stories.mdx)<br>[packages/uikit/docs/components/View/View.docs.tsx](../../../../sources/toss__toss-ui/packages/uikit/docs/components/View/View.docs.tsx)<br>[packages/uikit/docs/components/View/View.stories.mdx](../../../../sources/toss__toss-ui/packages/uikit/docs/components/View/View.stories.mdx)<br>[packages/uikit/docs/components/Text/Text.docs.tsx](../../../../sources/toss__toss-ui/packages/uikit/docs/components/Text/Text.docs.tsx)<br>[packages/uikit/docs/components/Text/Text.stories.mdx](../../../../sources/toss__toss-ui/packages/uikit/docs/components/Text/Text.stories.mdx) |
| config | 11 | [package.json](../../../../sources/toss__toss-ui/package.json)<br>[tsconfig.json](../../../../sources/toss__toss-ui/tsconfig.json)<br>[packages/utils/package.json](../../../../sources/toss__toss-ui/packages/utils/package.json)<br>[packages/uikit/package.json](../../../../sources/toss__toss-ui/packages/uikit/package.json)<br>[packages/uikit/tsconfig.json](../../../../sources/toss__toss-ui/packages/uikit/tsconfig.json)<br>[packages/styled/package.json](../../../../sources/toss__toss-ui/packages/styled/package.json)<br>[packages/styled/tsconfig.json](../../../../sources/toss__toss-ui/packages/styled/tsconfig.json)<br>[packages/eslint-config/package.json](../../../../sources/toss__toss-ui/packages/eslint-config/package.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 11 | [packages/uikit/tsconfig.spec.json](../../../../sources/toss__toss-ui/packages/uikit/tsconfig.spec.json)<br>[packages/uikit/src/lib/components/View/View.spec.tsx](../../../../sources/toss__toss-ui/packages/uikit/src/lib/components/View/View.spec.tsx)<br>[packages/uikit/src/lib/components/Stack/Stack.spec.tsx](../../../../sources/toss__toss-ui/packages/uikit/src/lib/components/Stack/Stack.spec.tsx)<br>[packages/styled/tsconfig.spec.json](../../../../sources/toss__toss-ui/packages/styled/tsconfig.spec.json)<br>[packages/styled/src/lib/createVariantPropInterpolation/createVariantPropInterpolation.spec.ts](../../../../sources/toss__toss-ui/packages/styled/src/lib/createVariantPropInterpolation/createVariantPropInterpolation.spec.ts)<br>[.yarn/cache/@jest-test-result-npm-27.0.6-34f3e2e7a7-be967817bc.zip](../../../../sources/toss__toss-ui/.yarn/cache/@jest-test-result-npm-27.0.6-34f3e2e7a7-be967817bc.zip) |
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
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `packages/utils/src/index.ts`, `packages/uikit/src/index.ts`, `packages/uikit/.storybook/main.js`.
2. entrypoint를 따라 실행 흐름 확인: `packages/utils/src/index.ts`, `packages/uikit/src/index.ts`, `packages/uikit/.storybook/main.js`.
3. agent/tool runtime 매핑: `.yarn/cache/agent-base-npm-6.0.2-428f325a93-e77eff83e1.zip`, `.yarn/cache/memory-fs-npm-0.4.1-0a5f9b8954-ba79207118.zip`, `.yarn/cache/memory-fs-npm-0.5.0-8be5938449-deb916f33c.zip`.
4. retrieval/memory/indexing 확인: `packages/utils/src/index.ts`, `packages/utils/src/lib/index.ts`, `packages/utils/src/lib/objects/index.ts`.
5. test/eval 파일로 동작 검증: `packages/uikit/tsconfig.spec.json`, `packages/uikit/src/lib/components/View/View.spec.tsx`, `packages/uikit/src/lib/components/Stack/Stack.spec.tsx`.

## 기존 레포 인사이트

일반 AI 오픈소스 관점에서 설명 메타데이터가 짧습니다. 핵심 구조 신호는 TypeScript, package.json, README.md, react, docs이며, 소스+보고서 근거 수준으로 초기 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, CI 신호가 명확하지 않음, 더 깊은 구조 스캔 필요입니다.
