# naver/billboard.js 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

📊 Re-usable, easy interface JavaScript chart library based on D3.js

## 요약

- 조사 단위: `sources/naver__billboard.js` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 443 files, 82 directories, depth score 107, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 monorepo/workspace, cli-first, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 entrypoints=src/index.canvas.ts, src/index.esm.ts, src/index.ts이고, 의존성 단서는 react, playwright, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | naver/billboard.js |
| 주제 | 일반 AI 오픈소스 / 일반 AI 오픈소스 |
| Region | korea |
| Language | TypeScript |
| Stars | 5982 |
| Forks | 357 |
| License | MIT |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/naver__billboard.js](../../../../sources/naver__billboard.js) |
| 기존 보고서 | [reports/korea-trending/repositories/naver__billboard.js.md](../../../korea-trending/repositories/naver__billboard.js.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 443 / 82 |
| 관측 최대 깊이 | 5 |
| 상위 디렉터리 | .github, .husky, benchmark, config, demo, packages, src, test, types |
| 상위 확장자 | .ts: 321, .md: 18, .js: 17, .json: 13, .svg: 11, .cjs: 10, (none): 10, .css: 7, .html: 7, .scss: 7, .yml: 5, .csv: 4 |
| 소스 패턴 | monorepo/workspace, cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, ui/extension surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| src | source boundary | 17 |
| packages/react | packages workspace | 7 |
| .github | ci surface | 1 |
| benchmark | validation surface | 1 |
| config | top-level component | 1 |
| demo | top-level component | 1 |
| packages | source boundary | 1 |
| test | validation surface | 1 |
| types | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| serve-dev | package.json | start | webpack serve --open |
| serve-dev | package.json | start:plugin | cross-env PLUGIN=true webpack-dev-server --open |
| build | package.json | build | npm run build:production && npm run build:packaged && npm run build:theme && npm run build:plugin && npm run build:esm && npm run build:cjs && npm run build:plugin:types |
| build | package.json | build:cjs | node ./config/cjs.js |
| build | package.json | build:esm | rollup -c ./config/rollup/esm.js |
| build | package.json | build:production | cross-env NODE_ENV=production webpack |
| build | package.json | build:packaged | cross-env NODE_ENV=packaged webpack |
| serve-dev | package.json | build:dev | cross-env NODE_ENV=development webpack |
| build | package.json | build:theme | cross-env NODE_ENV=theme webpack |
| build | package.json | build:production:analyzer | cross-env ANALYZER=true npm run build:production |
| build | package.json | build:packaged:analyzer | cross-env ANALYZER=true npm run build:packaged |
| build | package.json | build:plugin | cross-env NODE_ENV=plugin webpack && cross-env NODE_ENV=plugin MODE=min webpack && cross-env NODE_ENV=plugin MODE=pkgd webpack && cross-env NODE_ENV=plugin MODE=pkgd-min webpack |
| build | package.json | build:plugin:types | node ./config/type.d-plugin.js |
| build | package.json | release | semantic-release |
| quality | package.json | lint | eslint |
| quality | package.json | format | dprint fmt |
| utility | package.json | loc | cloc --by-file src |
| test | package.json | test | vitest |
| test | package.json | coverage | vitest run |
| test | package.json | coverage:ci | cross-env NODE_ENV=CI npm run coverage |
| utility | package.json | jsdoc | node ./config/jsdoc.js |
| utility | package.json | jsdoc:cmd | jsdoc -c jsdoc.json |
| quality | package.json | lint-staged | lint-staged --config ./config/.lintstagedrc.json |
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
| browserAutomation | playwright |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| entrypoints | [src/index.canvas.ts](../../../../sources/naver__billboard.js/src/index.canvas.ts) | entrypoints signal |
| entrypoints | [src/index.esm.ts](../../../../sources/naver__billboard.js/src/index.esm.ts) | entrypoints signal |
| entrypoints | [src/index.ts](../../../../sources/naver__billboard.js/src/index.ts) | entrypoints signal |
| entrypoints | [src/config/Options/common/main.ts](../../../../sources/naver__billboard.js/src/config/Options/common/main.ts) | entrypoints signal |
| config | [package.json](../../../../sources/naver__billboard.js/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/naver__billboard.js/tsconfig.json) | config signal |
| config | [packages/react/package.json](../../../../sources/naver__billboard.js/packages/react/package.json) | config signal |
| config | [packages/react/tsconfig.json](../../../../sources/naver__billboard.js/packages/react/tsconfig.json) | config signal |
| docs | [README.md](../../../../sources/naver__billboard.js/README.md) | docs signal |
| docs | [packages/react/README.md](../../../../sources/naver__billboard.js/packages/react/README.md) | docs signal |
| eval | [test/treeshake/scenario-full.js](../../../../sources/naver__billboard.js/test/treeshake/scenario-full.js) | eval signal |
| eval | [test/treeshake/scenario-line-bar.js](../../../../sources/naver__billboard.js/test/treeshake/scenario-line-bar.js) | eval signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 6 | [src/index.canvas.ts](../../../../sources/naver__billboard.js/src/index.canvas.ts)<br>[src/index.esm.ts](../../../../sources/naver__billboard.js/src/index.esm.ts)<br>[src/index.ts](../../../../sources/naver__billboard.js/src/index.ts)<br>[src/config/Options/common/main.ts](../../../../sources/naver__billboard.js/src/config/Options/common/main.ts)<br>[packages/react/src/index.tsx](../../../../sources/naver__billboard.js/packages/react/src/index.tsx)<br>[packages/react/demo/main.tsx](../../../../sources/naver__billboard.js/packages/react/demo/main.tsx) |
| agentRuntime | 1 | [AGENTS.md](../../../../sources/naver__billboard.js/AGENTS.md) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 24 | [types/index.d.ts](../../../../sources/naver__billboard.js/types/index.d.ts)<br>[types/plugin/textoverlap/index.d.ts](../../../../sources/naver__billboard.js/types/plugin/textoverlap/index.d.ts)<br>[types/plugin/tableview/index.d.ts](../../../../sources/naver__billboard.js/types/plugin/tableview/index.d.ts)<br>[types/plugin/stanford/index.d.ts](../../../../sources/naver__billboard.js/types/plugin/stanford/index.d.ts)<br>[types/plugin/sparkline/index.d.ts](../../../../sources/naver__billboard.js/types/plugin/sparkline/index.d.ts)<br>[types/plugin/bubblecompare/index.d.ts](../../../../sources/naver__billboard.js/types/plugin/bubblecompare/index.d.ts)<br>[src/index.canvas.ts](../../../../sources/naver__billboard.js/src/index.canvas.ts)<br>[src/index.esm.ts](../../../../sources/naver__billboard.js/src/index.esm.ts) |
| spec | 95 | [test/shape/arc-needle-spec.ts](../../../../sources/naver__billboard.js/test/shape/arc-needle-spec.ts)<br>[test/shape/arc-rangeText-spec.ts](../../../../sources/naver__billboard.js/test/shape/arc-rangeText-spec.ts)<br>[test/shape/arc-spec.ts](../../../../sources/naver__billboard.js/test/shape/arc-spec.ts)<br>[test/shape/area-range-spec.ts](../../../../sources/naver__billboard.js/test/shape/area-range-spec.ts)<br>[test/shape/area-spec.ts](../../../../sources/naver__billboard.js/test/shape/area-spec.ts)<br>[test/shape/bar-coverage-spec.ts](../../../../sources/naver__billboard.js/test/shape/bar-coverage-spec.ts)<br>[test/shape/bar-spec.ts](../../../../sources/naver__billboard.js/test/shape/bar-spec.ts)<br>[test/shape/bubble-spec.ts](../../../../sources/naver__billboard.js/test/shape/bubble-spec.ts) |
| eval | 119 | [test/treeshake/scenario-full.js](../../../../sources/naver__billboard.js/test/treeshake/scenario-full.js)<br>[test/treeshake/scenario-line-bar.js](../../../../sources/naver__billboard.js/test/treeshake/scenario-line-bar.js)<br>[test/treeshake/scenario-pie.js](../../../../sources/naver__billboard.js/test/treeshake/scenario-pie.js)<br>[test/shape/arc-needle-spec.ts](../../../../sources/naver__billboard.js/test/shape/arc-needle-spec.ts)<br>[test/shape/arc-rangeText-spec.ts](../../../../sources/naver__billboard.js/test/shape/arc-rangeText-spec.ts)<br>[test/shape/arc-spec.ts](../../../../sources/naver__billboard.js/test/shape/arc-spec.ts)<br>[test/shape/area-range-spec.ts](../../../../sources/naver__billboard.js/test/shape/area-range-spec.ts)<br>[test/shape/area-spec.ts](../../../../sources/naver__billboard.js/test/shape/area-spec.ts) |
| security | 0 | 명확하지 않음 |
| ci | 3 | [.github/workflows/ci.yml](../../../../sources/naver__billboard.js/.github/workflows/ci.yml)<br>[.github/workflows/dependency-update.yml](../../../../sources/naver__billboard.js/.github/workflows/dependency-update.yml)<br>[.github/workflows/nightly-build.yml](../../../../sources/naver__billboard.js/.github/workflows/nightly-build.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 2 | [AGENTS.md](../../../../sources/naver__billboard.js/AGENTS.md)<br>[.github/copilot-instructions.md](../../../../sources/naver__billboard.js/.github/copilot-instructions.md) |
| docs | 2 | [README.md](../../../../sources/naver__billboard.js/README.md)<br>[packages/react/README.md](../../../../sources/naver__billboard.js/packages/react/README.md) |
| config | 4 | [package.json](../../../../sources/naver__billboard.js/package.json)<br>[tsconfig.json](../../../../sources/naver__billboard.js/tsconfig.json)<br>[packages/react/package.json](../../../../sources/naver__billboard.js/packages/react/package.json)<br>[packages/react/tsconfig.json](../../../../sources/naver__billboard.js/packages/react/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 119 | [test/treeshake/scenario-full.js](../../../../sources/naver__billboard.js/test/treeshake/scenario-full.js)<br>[test/treeshake/scenario-line-bar.js](../../../../sources/naver__billboard.js/test/treeshake/scenario-line-bar.js)<br>[test/treeshake/scenario-pie.js](../../../../sources/naver__billboard.js/test/treeshake/scenario-pie.js)<br>[test/shape/arc-needle-spec.ts](../../../../sources/naver__billboard.js/test/shape/arc-needle-spec.ts)<br>[test/shape/arc-rangeText-spec.ts](../../../../sources/naver__billboard.js/test/shape/arc-rangeText-spec.ts)<br>[test/shape/arc-spec.ts](../../../../sources/naver__billboard.js/test/shape/arc-spec.ts) |
| CI workflow | 3 | [.github/workflows/ci.yml](../../../../sources/naver__billboard.js/.github/workflows/ci.yml)<br>[.github/workflows/dependency-update.yml](../../../../sources/naver__billboard.js/.github/workflows/dependency-update.yml)<br>[.github/workflows/nightly-build.yml](../../../../sources/naver__billboard.js/.github/workflows/nightly-build.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 2 | [AGENTS.md](../../../../sources/naver__billboard.js/AGENTS.md)<br>[.github/copilot-instructions.md](../../../../sources/naver__billboard.js/.github/copilot-instructions.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `src/index.canvas.ts`, `src/index.esm.ts`, `src/index.ts`.
2. entrypoint를 따라 실행 흐름 확인: `src/index.canvas.ts`, `src/index.esm.ts`, `src/index.ts`.
3. agent/tool runtime 매핑: `AGENTS.md`.
4. retrieval/memory/indexing 확인: `types/index.d.ts`, `types/plugin/textoverlap/index.d.ts`, `types/plugin/tableview/index.d.ts`.
5. test/eval 파일로 동작 검증: `test/treeshake/scenario-full.js`, `test/treeshake/scenario-line-bar.js`, `test/treeshake/scenario-pie.js`.

## 기존 레포 인사이트

일반 AI 오픈소스 관점에서 📊 Re usable, easy interface JavaScript chart library based on D3.js. 핵심 구조 신호는 TypeScript, package.json, README.md, AGENTS.md, LICENSE, react이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 더 깊은 구조 스캔 필요입니다.
