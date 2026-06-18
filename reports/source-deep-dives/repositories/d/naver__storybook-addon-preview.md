# naver/storybook-addon-preview 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

Storybook Addon Preview can show user selected knobs in various framework code in Storybook

## 요약

- 조사 단위: `sources/naver__storybook-addon-preview` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 47 files, 9 directories, depth score 67, key references 9개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 cli-first, retrieval/vector path, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 entrypoints=test/.storybook/main.js, src/index.tsx이고, 의존성 단서는 react, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 9개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | naver/storybook-addon-preview |
| 주제 | 일반 AI 오픈소스 / 일반 AI 오픈소스 |
| Region | korea |
| Language | TypeScript |
| Stars | 65 |
| Forks | 9 |
| License | MIT |
| 성숙도 | 초기 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/naver__storybook-addon-preview](../../../../sources/naver__storybook-addon-preview) |
| 기존 보고서 | [reports/korea-trending/repositories/naver__storybook-addon-preview.md](../../../korea-trending/repositories/naver__storybook-addon-preview.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 47 / 9 |
| 관측 최대 깊이 | 3 |
| 상위 디렉터리 | images, src, test |
| 상위 확장자 | .ts: 18, .tsx: 8, (none): 6, .json: 5, .js: 3, .lock: 2, .md: 2, .css: 1, .jsx: 1, .png: 1 |
| 소스 패턴 | cli-first, retrieval/vector path, eval/test harness, ui/extension surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| src | source boundary | 5 |
| images | top-level component | 1 |
| test | validation surface | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| quality | package.json | lint | eslint ./src/ --ext .ts,.tsx |
| build | package.json | build | rm -rf ./dist && npm run build:cjs && npm run build:esm |
| build | package.json | build:cjs | tsc -p tsconfig.json && cpx 'src/css/*.css' 'dist/css' |
| build | package.json | build:esm | tsc -p tsconfig.esm.json && cpx 'src/css/*.css' 'dist/esm/css' |


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
| entrypoints | [test/.storybook/main.js](../../../../sources/naver__storybook-addon-preview/test/.storybook/main.js) | entrypoints signal |
| entrypoints | [src/index.tsx](../../../../sources/naver__storybook-addon-preview/src/index.tsx) | entrypoints signal |
| config | [package.json](../../../../sources/naver__storybook-addon-preview/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/naver__storybook-addon-preview/tsconfig.json) | config signal |
| config | [test/package.json](../../../../sources/naver__storybook-addon-preview/test/package.json) | config signal |
| config | [test/tsconfig.json](../../../../sources/naver__storybook-addon-preview/test/tsconfig.json) | config signal |
| docs | [README.md](../../../../sources/naver__storybook-addon-preview/README.md) | docs signal |
| eval | [test/global.d.ts](../../../../sources/naver__storybook-addon-preview/test/global.d.ts) | eval signal |
| eval | [test/yarn.lock](../../../../sources/naver__storybook-addon-preview/test/yarn.lock) | eval signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 2 | [test/.storybook/main.js](../../../../sources/naver__storybook-addon-preview/test/.storybook/main.js)<br>[src/index.tsx](../../../../sources/naver__storybook-addon-preview/src/index.tsx) |
| agentRuntime | 0 | 명확하지 않음 |
| mcp | 0 | 명확하지 않음 |
| retrieval | 3 | [src/index.tsx](../../../../sources/naver__storybook-addon-preview/src/index.tsx)<br>[src/props/index.ts](../../../../sources/naver__storybook-addon-preview/src/props/index.ts)<br>[src/codesandbox/index.ts](../../../../sources/naver__storybook-addon-preview/src/codesandbox/index.ts) |
| spec | 0 | 명확하지 않음 |
| eval | 11 | [test/global.d.ts](../../../../sources/naver__storybook-addon-preview/test/global.d.ts)<br>[test/package.json](../../../../sources/naver__storybook-addon-preview/test/package.json)<br>[test/tsconfig.json](../../../../sources/naver__storybook-addon-preview/test/tsconfig.json)<br>[test/yarn.lock](../../../../sources/naver__storybook-addon-preview/test/yarn.lock)<br>[test/stories/CodeSandbox.stories.tsx](../../../../sources/naver__storybook-addon-preview/test/stories/CodeSandbox.stories.tsx)<br>[test/stories/Controls.stories.tsx](../../../../sources/naver__storybook-addon-preview/test/stories/Controls.stories.tsx)<br>[test/stories/Knobs.stories.tsx](../../../../sources/naver__storybook-addon-preview/test/stories/Knobs.stories.tsx)<br>[test/stories/utils.ts](../../../../sources/naver__storybook-addon-preview/test/stories/utils.ts) |
| security | 0 | 명확하지 않음 |
| ci | 0 | 명확하지 않음 |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 1 | [README.md](../../../../sources/naver__storybook-addon-preview/README.md) |
| config | 4 | [package.json](../../../../sources/naver__storybook-addon-preview/package.json)<br>[tsconfig.json](../../../../sources/naver__storybook-addon-preview/tsconfig.json)<br>[test/package.json](../../../../sources/naver__storybook-addon-preview/test/package.json)<br>[test/tsconfig.json](../../../../sources/naver__storybook-addon-preview/test/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 11 | [test/global.d.ts](../../../../sources/naver__storybook-addon-preview/test/global.d.ts)<br>[test/package.json](../../../../sources/naver__storybook-addon-preview/test/package.json)<br>[test/tsconfig.json](../../../../sources/naver__storybook-addon-preview/test/tsconfig.json)<br>[test/yarn.lock](../../../../sources/naver__storybook-addon-preview/test/yarn.lock)<br>[test/stories/CodeSandbox.stories.tsx](../../../../sources/naver__storybook-addon-preview/test/stories/CodeSandbox.stories.tsx)<br>[test/stories/Controls.stories.tsx](../../../../sources/naver__storybook-addon-preview/test/stories/Controls.stories.tsx) |
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

1. 핵심 참조에서 시작: `test/.storybook/main.js`, `src/index.tsx`, `package.json`.
2. entrypoint를 따라 실행 흐름 확인: `test/.storybook/main.js`, `src/index.tsx`.
3. retrieval/memory/indexing 확인: `src/index.tsx`, `src/props/index.ts`, `src/codesandbox/index.ts`.
4. test/eval 파일로 동작 검증: `test/global.d.ts`, `test/package.json`, `test/tsconfig.json`.

## 기존 레포 인사이트

일반 AI 오픈소스 관점에서 Storybook Addon Preview can show user selected knobs in various framework code in Storybook. 핵심 구조 신호는 TypeScript, package.json, README.md, LICENSE, react, tests이며, 소스+보고서 근거 수준으로 초기 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 CI 신호가 명확하지 않음, 더 깊은 구조 스캔 필요입니다.
