# naver/image-sprite-webpack-plugin 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

A webpack plugin that generates spritesheets from your stylesheets.

## 요약

- 조사 단위: `sources/naver__image-sprite-webpack-plugin` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 70 files, 23 directories, depth score 71, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 cli-first, retrieval/vector path, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 entrypoints=test/__fixtures__/simple/src/main.js, test/__fixtures__/mini-css-extract/src/main.js, src/index.ts이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | naver/image-sprite-webpack-plugin |
| 주제 | 일반 AI 오픈소스 / 일반 AI 오픈소스 |
| Region | korea |
| Language | TypeScript |
| Stars | 27 |
| Forks | 5 |
| License | MIT |
| 성숙도 | 초기 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/naver__image-sprite-webpack-plugin](../../../../sources/naver__image-sprite-webpack-plugin) |
| 기존 보고서 | [reports/korea-trending/repositories/naver__image-sprite-webpack-plugin.md](../../../korea-trending/repositories/naver__image-sprite-webpack-plugin.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 70 / 23 |
| 관측 최대 깊이 | 6 |
| 상위 디렉터리 | examples, src, test |
| 상위 확장자 | .png: 21, .js: 17, .json: 8, .css: 6, .ts: 5, .jsx: 4, (none): 4, .html: 2, .md: 2, .mjs: 1 |
| 소스 패턴 | cli-first, retrieval/vector path, eval/test harness |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| examples/webpack5-cssloader-single-chunk | examples workspace | 19 |
| examples/webpack5-mini-css-extract-multiple-chunks | examples workspace | 5 |
| src | source boundary | 3 |
| examples | top-level component | 1 |
| test | validation surface | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| build | package.json | build | tsc |
| serve-dev | package.json | build:watch | tsc --watch |
| build | package.json | prepublishOnly | npm run build |
| test | package.json | test | jest |
| test | package.json | test:watch | jest --watch |
| test | package.json | test:coverage | jest --coverage |
| quality | package.json | lint | eslint src |
| quality | package.json | format | prettier --write "src/**/*.ts" |
| quality | package.json | format:check | prettier --check "src/**/*.ts" |
| build | package.json | clean | rm -rf dist |


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
| entrypoints | [test/__fixtures__/simple/src/main.js](../../../../sources/naver__image-sprite-webpack-plugin/test/__fixtures__/simple/src/main.js) | entrypoints signal |
| entrypoints | [test/__fixtures__/mini-css-extract/src/main.js](../../../../sources/naver__image-sprite-webpack-plugin/test/__fixtures__/mini-css-extract/src/main.js) | entrypoints signal |
| entrypoints | [src/index.ts](../../../../sources/naver__image-sprite-webpack-plugin/src/index.ts) | entrypoints signal |
| entrypoints | [examples/webpack5-mini-css-extract-multiple-chunks/src/main.html](../../../../sources/naver__image-sprite-webpack-plugin/examples/webpack5-mini-css-extract-multiple-chunks/src/main.html) | entrypoints signal |
| config | [package.json](../../../../sources/naver__image-sprite-webpack-plugin/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/naver__image-sprite-webpack-plugin/tsconfig.json) | config signal |
| config | [examples/webpack5-mini-css-extract-multiple-chunks/package.json](../../../../sources/naver__image-sprite-webpack-plugin/examples/webpack5-mini-css-extract-multiple-chunks/package.json) | config signal |
| config | [examples/webpack5-mini-css-extract-multiple-chunks/some-npm-package/package.json](../../../../sources/naver__image-sprite-webpack-plugin/examples/webpack5-mini-css-extract-multiple-chunks/some-npm-package/package.json) | config signal |
| docs | [README.md](../../../../sources/naver__image-sprite-webpack-plugin/README.md) | docs signal |
| eval | [test/unit/ImageSpritePlugin.test.js](../../../../sources/naver__image-sprite-webpack-plugin/test/unit/ImageSpritePlugin.test.js) | eval signal |
| eval | [test/unit/Logger.test.js](../../../../sources/naver__image-sprite-webpack-plugin/test/unit/Logger.test.js) | eval signal |
| eval | [test/integration/spriteGeneration.test.js](../../../../sources/naver__image-sprite-webpack-plugin/test/integration/spriteGeneration.test.js) | eval signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 7 | [test/__fixtures__/simple/src/main.js](../../../../sources/naver__image-sprite-webpack-plugin/test/__fixtures__/simple/src/main.js)<br>[test/__fixtures__/mini-css-extract/src/main.js](../../../../sources/naver__image-sprite-webpack-plugin/test/__fixtures__/mini-css-extract/src/main.js)<br>[src/index.ts](../../../../sources/naver__image-sprite-webpack-plugin/src/index.ts)<br>[examples/webpack5-mini-css-extract-multiple-chunks/src/main.html](../../../../sources/naver__image-sprite-webpack-plugin/examples/webpack5-mini-css-extract-multiple-chunks/src/main.html)<br>[examples/webpack5-mini-css-extract-multiple-chunks/src/main.js](../../../../sources/naver__image-sprite-webpack-plugin/examples/webpack5-mini-css-extract-multiple-chunks/src/main.js)<br>[examples/webpack5-cssloader-single-chunk/src/main.html](../../../../sources/naver__image-sprite-webpack-plugin/examples/webpack5-cssloader-single-chunk/src/main.html)<br>[examples/webpack5-cssloader-single-chunk/src/main.js](../../../../sources/naver__image-sprite-webpack-plugin/examples/webpack5-cssloader-single-chunk/src/main.js) |
| agentRuntime | 0 | 명확하지 않음 |
| mcp | 0 | 명확하지 않음 |
| retrieval | 18 | [src/index.ts](../../../../sources/naver__image-sprite-webpack-plugin/src/index.ts)<br>[examples/webpack5-mini-css-extract-multiple-chunks/some-npm-package/index.js](../../../../sources/naver__image-sprite-webpack-plugin/examples/webpack5-mini-css-extract-multiple-chunks/some-npm-package/index.js)<br>[examples/webpack5-cssloader-single-chunk/.babelrc](../../../../sources/naver__image-sprite-webpack-plugin/examples/webpack5-cssloader-single-chunk/.babelrc)<br>[examples/webpack5-cssloader-single-chunk/debug-modid-dev.js](../../../../sources/naver__image-sprite-webpack-plugin/examples/webpack5-cssloader-single-chunk/debug-modid-dev.js)<br>[examples/webpack5-cssloader-single-chunk/debug-modid.js](../../../../sources/naver__image-sprite-webpack-plugin/examples/webpack5-cssloader-single-chunk/debug-modid.js)<br>[examples/webpack5-cssloader-single-chunk/debug-plugin.js](../../../../sources/naver__image-sprite-webpack-plugin/examples/webpack5-cssloader-single-chunk/debug-plugin.js)<br>[examples/webpack5-cssloader-single-chunk/package-lock.json](../../../../sources/naver__image-sprite-webpack-plugin/examples/webpack5-cssloader-single-chunk/package-lock.json)<br>[examples/webpack5-cssloader-single-chunk/package.json](../../../../sources/naver__image-sprite-webpack-plugin/examples/webpack5-cssloader-single-chunk/package.json) |
| spec | 0 | 명확하지 않음 |
| eval | 19 | [test/unit/ImageSpritePlugin.test.js](../../../../sources/naver__image-sprite-webpack-plugin/test/unit/ImageSpritePlugin.test.js)<br>[test/unit/Logger.test.js](../../../../sources/naver__image-sprite-webpack-plugin/test/unit/Logger.test.js)<br>[test/integration/spriteGeneration.test.js](../../../../sources/naver__image-sprite-webpack-plugin/test/integration/spriteGeneration.test.js)<br>[test/__fixtures__/simple/webpack.config.js](../../../../sources/naver__image-sprite-webpack-plugin/test/__fixtures__/simple/webpack.config.js)<br>[test/__fixtures__/simple/src/main.js](../../../../sources/naver__image-sprite-webpack-plugin/test/__fixtures__/simple/src/main.js)<br>[test/__fixtures__/simple/src/style.css](../../../../sources/naver__image-sprite-webpack-plugin/test/__fixtures__/simple/src/style.css)<br>[test/__fixtures__/simple/src/img/b-check-ok.png](../../../../sources/naver__image-sprite-webpack-plugin/test/__fixtures__/simple/src/img/b-check-ok.png)<br>[test/__fixtures__/simple/src/img/b-check.png](../../../../sources/naver__image-sprite-webpack-plugin/test/__fixtures__/simple/src/img/b-check.png) |
| security | 0 | 명확하지 않음 |
| ci | 0 | 명확하지 않음 |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 1 | [README.md](../../../../sources/naver__image-sprite-webpack-plugin/README.md) |
| config | 5 | [package.json](../../../../sources/naver__image-sprite-webpack-plugin/package.json)<br>[tsconfig.json](../../../../sources/naver__image-sprite-webpack-plugin/tsconfig.json)<br>[examples/webpack5-mini-css-extract-multiple-chunks/package.json](../../../../sources/naver__image-sprite-webpack-plugin/examples/webpack5-mini-css-extract-multiple-chunks/package.json)<br>[examples/webpack5-mini-css-extract-multiple-chunks/some-npm-package/package.json](../../../../sources/naver__image-sprite-webpack-plugin/examples/webpack5-mini-css-extract-multiple-chunks/some-npm-package/package.json)<br>[examples/webpack5-cssloader-single-chunk/package.json](../../../../sources/naver__image-sprite-webpack-plugin/examples/webpack5-cssloader-single-chunk/package.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 19 | [test/unit/ImageSpritePlugin.test.js](../../../../sources/naver__image-sprite-webpack-plugin/test/unit/ImageSpritePlugin.test.js)<br>[test/unit/Logger.test.js](../../../../sources/naver__image-sprite-webpack-plugin/test/unit/Logger.test.js)<br>[test/integration/spriteGeneration.test.js](../../../../sources/naver__image-sprite-webpack-plugin/test/integration/spriteGeneration.test.js)<br>[test/__fixtures__/simple/webpack.config.js](../../../../sources/naver__image-sprite-webpack-plugin/test/__fixtures__/simple/webpack.config.js)<br>[test/__fixtures__/simple/src/main.js](../../../../sources/naver__image-sprite-webpack-plugin/test/__fixtures__/simple/src/main.js)<br>[test/__fixtures__/simple/src/style.css](../../../../sources/naver__image-sprite-webpack-plugin/test/__fixtures__/simple/src/style.css) |
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

1. 핵심 참조에서 시작: `test/__fixtures__/simple/src/main.js`, `test/__fixtures__/mini-css-extract/src/main.js`, `src/index.ts`.
2. entrypoint를 따라 실행 흐름 확인: `test/__fixtures__/simple/src/main.js`, `test/__fixtures__/mini-css-extract/src/main.js`, `src/index.ts`.
3. retrieval/memory/indexing 확인: `src/index.ts`, `examples/webpack5-mini-css-extract-multiple-chunks/some-npm-package/index.js`, `examples/webpack5-cssloader-single-chunk/.babelrc`.
4. test/eval 파일로 동작 검증: `test/unit/ImageSpritePlugin.test.js`, `test/unit/Logger.test.js`, `test/integration/spriteGeneration.test.js`.

## 기존 레포 인사이트

일반 AI 오픈소스 관점에서 A webpack plugin that generates spritesheets from your stylesheets.. 핵심 구조 신호는 TypeScript, package.json, README.md, LICENSE, tests, docs이며, 소스+보고서 근거 수준으로 초기 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 CI 신호가 명확하지 않음, 더 깊은 구조 스캔 필요입니다.
