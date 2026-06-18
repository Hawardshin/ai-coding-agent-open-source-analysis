# naver/egjs-flicking-plugins 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

Plugins for @egjs/flicking

## 요약

- 조사 단위: `sources/naver__egjs-flicking-plugins` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 76 files, 13 directories, depth score 74, key references 9개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 retrieval/vector path, spec/docs-driven, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 entrypoints=src/index.ts이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 9개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | naver/egjs-flicking-plugins |
| 주제 | 일반 AI 오픈소스 / 일반 AI 오픈소스 |
| Region | korea |
| Language | TypeScript |
| Stars | 61 |
| Forks | 11 |
| License | MIT |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/naver__egjs-flicking-plugins](../../../../sources/naver__egjs-flicking-plugins) |
| 기존 보고서 | [reports/korea-trending/repositories/naver__egjs-flicking-plugins.md](../../../korea-trending/repositories/naver__egjs-flicking-plugins.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 76 / 13 |
| 관측 최대 깊이 | 4 |
| 상위 디렉터리 | .github, config, css, src, test |
| 상위 확장자 | .ts: 25, .js: 17, .json: 7, .css: 6, .html: 5, (none): 5, .jpg: 3, .md: 3, .yml: 3, .opts: 1, .template: 1 |
| 소스 패턴 | retrieval/vector path, spec/docs-driven, eval/test harness |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| src | source boundary | 4 |
| .github | ci surface | 1 |
| config | top-level component | 1 |
| css | top-level component | 1 |
| test | validation surface | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| serve-dev | package.json | start | concurrently "rollup -w --config ./rollup.config.dev.js" "http-serve" |
| build | package.json | build | rm -rf ./dist ./declaration && rollup -c && npm run declaration && npm run css && npm run printsizes |
| quality | package.json | declaration | rm -rf declaration && tsc -p tsconfig.declaration.json |
| build | package.json | printsizes | print-sizes ./dist --exclude=\.map |
| build | package.json | css | node config/build-css |
| quality | package.json | lint | eslint 'src/**/*.ts' |
| build | package.json | release | release-helper |
| test | package.json | test | karma start |
| test | package.json | test:chrome | karma start --chrome |
| test | package.json | coverage | karma start --coverage && print-coveralls --sort=desc |
| test | package.json | coveralls | cat ./coverage/lcov.info \| ./node_modules/coveralls/bin/coveralls.js |
| test | package.json | demo:build | npm run build && cpx 'dist/**/*' demo/release/latest/dist --clean |
| build | package.json | demo:prebuild-version | cpx 'dist/**/*' demo/release/$npm_package_version/dist --clean |
| test | package.json | demo:prebuild-latest | cpx 'dist/**/*' demo/release/latest/dist --clean |
| test | package.json | demo:predeploy | npm run build && npm run demo:prebuild-version && npm run demo:prebuild-latest |
| utility | package.json | demo:deploy | npm run demo:predeploy && gh-pages -a -d demo/ --remote upstream |


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
| entrypoints | [src/index.ts](../../../../sources/naver__egjs-flicking-plugins/src/index.ts) | entrypoints signal |
| config | [package.json](../../../../sources/naver__egjs-flicking-plugins/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/naver__egjs-flicking-plugins/tsconfig.json) | config signal |
| docs | [README.md](../../../../sources/naver__egjs-flicking-plugins/README.md) | docs signal |
| eval | [tsconfig.test.json](../../../../sources/naver__egjs-flicking-plugins/tsconfig.test.json) | eval signal |
| eval | [test/hammer-simulator.run.js](../../../../sources/naver__egjs-flicking-plugins/test/hammer-simulator.run.js) | eval signal |
| eval | [test/setup.js](../../../../sources/naver__egjs-flicking-plugins/test/setup.js) | eval signal |
| eval | [test/unit/.eslintrc.js](../../../../sources/naver__egjs-flicking-plugins/test/unit/.eslintrc.js) | eval signal |
| ci | [.github/workflows/test.yml](../../../../sources/naver__egjs-flicking-plugins/.github/workflows/test.yml) | ci support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 1 | [src/index.ts](../../../../sources/naver__egjs-flicking-plugins/src/index.ts) |
| agentRuntime | 0 | 명확하지 않음 |
| mcp | 0 | 명확하지 않음 |
| retrieval | 2 | [src/index.ts](../../../../sources/naver__egjs-flicking-plugins/src/index.ts)<br>[src/pagination/index.ts](../../../../sources/naver__egjs-flicking-plugins/src/pagination/index.ts) |
| spec | 7 | [test/unit/Arrow.spec.ts](../../../../sources/naver__egjs-flicking-plugins/test/unit/Arrow.spec.ts)<br>[test/unit/AutoPlay.spec.ts](../../../../sources/naver__egjs-flicking-plugins/test/unit/AutoPlay.spec.ts)<br>[test/unit/Fade.spec.ts](../../../../sources/naver__egjs-flicking-plugins/test/unit/Fade.spec.ts)<br>[test/unit/Pagination.spec.ts](../../../../sources/naver__egjs-flicking-plugins/test/unit/Pagination.spec.ts)<br>[test/unit/Parallax.spec.ts](../../../../sources/naver__egjs-flicking-plugins/test/unit/Parallax.spec.ts)<br>[test/unit/Perspective.spec.ts](../../../../sources/naver__egjs-flicking-plugins/test/unit/Perspective.spec.ts)<br>[test/unit/Sync.spec.ts](../../../../sources/naver__egjs-flicking-plugins/test/unit/Sync.spec.ts) |
| eval | 30 | [tsconfig.test.json](../../../../sources/naver__egjs-flicking-plugins/tsconfig.test.json)<br>[test/hammer-simulator.run.js](../../../../sources/naver__egjs-flicking-plugins/test/hammer-simulator.run.js)<br>[test/setup.js](../../../../sources/naver__egjs-flicking-plugins/test/setup.js)<br>[test/unit/.eslintrc.js](../../../../sources/naver__egjs-flicking-plugins/test/unit/.eslintrc.js)<br>[test/unit/Arrow.spec.ts](../../../../sources/naver__egjs-flicking-plugins/test/unit/Arrow.spec.ts)<br>[test/unit/AutoPlay.spec.ts](../../../../sources/naver__egjs-flicking-plugins/test/unit/AutoPlay.spec.ts)<br>[test/unit/Fade.spec.ts](../../../../sources/naver__egjs-flicking-plugins/test/unit/Fade.spec.ts)<br>[test/unit/Pagination.spec.ts](../../../../sources/naver__egjs-flicking-plugins/test/unit/Pagination.spec.ts) |
| security | 0 | 명확하지 않음 |
| ci | 1 | [.github/workflows/test.yml](../../../../sources/naver__egjs-flicking-plugins/.github/workflows/test.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 1 | [README.md](../../../../sources/naver__egjs-flicking-plugins/README.md) |
| config | 2 | [package.json](../../../../sources/naver__egjs-flicking-plugins/package.json)<br>[tsconfig.json](../../../../sources/naver__egjs-flicking-plugins/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 30 | [tsconfig.test.json](../../../../sources/naver__egjs-flicking-plugins/tsconfig.test.json)<br>[test/hammer-simulator.run.js](../../../../sources/naver__egjs-flicking-plugins/test/hammer-simulator.run.js)<br>[test/setup.js](../../../../sources/naver__egjs-flicking-plugins/test/setup.js)<br>[test/unit/.eslintrc.js](../../../../sources/naver__egjs-flicking-plugins/test/unit/.eslintrc.js)<br>[test/unit/Arrow.spec.ts](../../../../sources/naver__egjs-flicking-plugins/test/unit/Arrow.spec.ts)<br>[test/unit/AutoPlay.spec.ts](../../../../sources/naver__egjs-flicking-plugins/test/unit/AutoPlay.spec.ts) |
| CI workflow | 1 | [.github/workflows/test.yml](../../../../sources/naver__egjs-flicking-plugins/.github/workflows/test.yml) |
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

1. 핵심 참조에서 시작: `src/index.ts`, `package.json`, `tsconfig.json`.
2. entrypoint를 따라 실행 흐름 확인: `src/index.ts`.
3. retrieval/memory/indexing 확인: `src/index.ts`, `src/pagination/index.ts`.
4. test/eval 파일로 동작 검증: `tsconfig.test.json`, `test/hammer-simulator.run.js`, `test/setup.js`.

## 기존 레포 인사이트

일반 AI 오픈소스 관점에서 Plugins for @egjs/flicking. 핵심 구조 신호는 TypeScript, package.json, README.md, LICENSE, tests, ci이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 더 깊은 구조 스캔 필요입니다.
