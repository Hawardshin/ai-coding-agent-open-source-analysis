# naver/egjs-persist 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

Provide cache interface to handle persisted data among history navigation.

## 요약

- 조사 단위: `sources/naver__egjs-persist` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 91 files, 24 directories, depth score 76, key references 10개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 api/server, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 retrieval=index.d.ts, src/index.js, src/index.umd.js이고, 의존성 단서는 express, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 10개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 지식/RAG 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | naver/egjs-persist |
| 주제 | LLM 위키/RAG/지식베이스 / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | JavaScript |
| Stars | 44 |
| Forks | 8 |
| License | MIT |
| 성숙도 | 초기 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/naver__egjs-persist](../../../../sources/naver__egjs-persist) |
| 기존 보고서 | [reports/korea-trending/repositories/naver__egjs-persist.md](../../../korea-trending/repositories/naver__egjs-persist.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 91 / 24 |
| 관측 최대 깊이 | 4 |
| 상위 디렉터리 | config, demo, rollup, src, test |
| 상위 확장자 | .js: 32, .html: 17, .css: 8, (none): 7, .md: 6, .png: 6, .svg: 6, .json: 3, .yml: 3, .opts: 1, .template: 1, .ts: 1 |
| 소스 패턴 | api/server, retrieval/vector path, spec/docs-driven, eval/test harness |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| src | source boundary | 5 |
| config | top-level component | 1 |
| demo | top-level component | 1 |
| rollup | top-level component | 1 |
| test | validation surface | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| serve-dev | package.json | start | webpack-dev-server --open |
| build | package.json | build | rollup -c |
| build | package.json | build:webpack | webpack --env production |
| test | package.json | test | karma start |
| test | package.json | test:chrome | karma start --chrome |
| quality | package.json | lint | eslint src |
| utility | package.json | jsdoc | rm -rf ./doc && jsdoc -c jsdoc.json |
| test | package.json | coverage | npm run simulate:node && karma start --coverage |
| build | package.json | simulate:node | npm run build && node ./dist/persist.js |
| build | package.json | release | node config/release.js |
| test | package.json | demo:start | npm run demo:prebuild-latest && npm run demo:updateVersion && jekyll serve --host=0.0.0.0 -s demo |
| build | package.json | demo:build | npm run demo:updateVersion && jekyll build -s demo |
| build | package.json | demo:prebuild-version | cpx 'dist/**/*' demo/release/$npm_package_version/dist --clean && cpx 'doc/**/*' demo/release/$npm_package_version/doc --clean |
| test | package.json | demo:prebuild-latest | cpx 'dist/**/*' demo/release/latest/dist --clean && cpx 'doc/**/*' demo/release/latest/doc --clean |
| test | package.json | demo:deploy | npm run build && npm run jsdoc && npm run demo:prebuild-version && npm run demo:prebuild-latest && npm run demo:build && gh-pages -d demo/_site --add --remote upstream |
| utility | package.json | demo:updateVersion | echo $npm_package_version > demo/_data/version.yml |
| utility | package.json | demo:setup | cpx 'node_modules/@egjs/common-demo/**/*' 'demo/' && rm demo/package.json |
| test | package.json | coveralls | cat ./coverage/lcov.info \| ./node_modules/coveralls/bin/coveralls.js |
| quality | package.json | prepush | npm run lint |
| utility | package.json | commitmsg | node config/validate-commit-msg.js |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | express |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| retrieval | [index.d.ts](../../../../sources/naver__egjs-persist/index.d.ts) | retrieval signal |
| retrieval | [src/index.js](../../../../sources/naver__egjs-persist/src/index.js) | retrieval signal |
| retrieval | [src/index.umd.js](../../../../sources/naver__egjs-persist/src/index.umd.js) | retrieval signal |
| retrieval | [demo/index.md](../../../../sources/naver__egjs-persist/demo/index.md) | retrieval signal |
| docs | [README.md](../../../../sources/naver__egjs-persist/README.md) | docs signal |
| eval | [test/unit/persist-migrate.spec.js](../../../../sources/naver__egjs-persist/test/unit/persist-migrate.spec.js) | eval signal |
| eval | [test/unit/persist.spec.js](../../../../sources/naver__egjs-persist/test/unit/persist.spec.js) | eval signal |
| eval | [test/unit/storageManager.spec.js](../../../../sources/naver__egjs-persist/test/unit/storageManager.spec.js) | eval signal |
| eval | [test/unit/TestHelper.js](../../../../sources/naver__egjs-persist/test/unit/TestHelper.js) | eval signal |
| config | [package.json](../../../../sources/naver__egjs-persist/package.json) | config signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 2 | [src/index.js](../../../../sources/naver__egjs-persist/src/index.js)<br>[src/index.umd.js](../../../../sources/naver__egjs-persist/src/index.umd.js) |
| agentRuntime | 0 | 명확하지 않음 |
| mcp | 0 | 명확하지 않음 |
| retrieval | 4 | [index.d.ts](../../../../sources/naver__egjs-persist/index.d.ts)<br>[src/index.js](../../../../sources/naver__egjs-persist/src/index.js)<br>[src/index.umd.js](../../../../sources/naver__egjs-persist/src/index.umd.js)<br>[demo/index.md](../../../../sources/naver__egjs-persist/demo/index.md) |
| spec | 4 | [test/unit/persist-migrate.spec.js](../../../../sources/naver__egjs-persist/test/unit/persist-migrate.spec.js)<br>[test/unit/persist.spec.js](../../../../sources/naver__egjs-persist/test/unit/persist.spec.js)<br>[test/unit/storageManager.spec.js](../../../../sources/naver__egjs-persist/test/unit/storageManager.spec.js)<br>[test/unit/utils.spec.js](../../../../sources/naver__egjs-persist/test/unit/utils.spec.js) |
| eval | 16 | [test/unit/persist-migrate.spec.js](../../../../sources/naver__egjs-persist/test/unit/persist-migrate.spec.js)<br>[test/unit/persist.spec.js](../../../../sources/naver__egjs-persist/test/unit/persist.spec.js)<br>[test/unit/storageManager.spec.js](../../../../sources/naver__egjs-persist/test/unit/storageManager.spec.js)<br>[test/unit/TestHelper.js](../../../../sources/naver__egjs-persist/test/unit/TestHelper.js)<br>[test/unit/utils.spec.js](../../../../sources/naver__egjs-persist/test/unit/utils.spec.js)<br>[test/manual/exceeded.html](../../../../sources/naver__egjs-persist/test/manual/exceeded.html)<br>[test/manual/persist.html](../../../../sources/naver__egjs-persist/test/manual/persist.html)<br>[test/manual/js/demo.js](../../../../sources/naver__egjs-persist/test/manual/js/demo.js) |
| security | 0 | 명확하지 않음 |
| ci | 0 | 명확하지 않음 |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 1 | [README.md](../../../../sources/naver__egjs-persist/README.md) |
| config | 1 | [package.json](../../../../sources/naver__egjs-persist/package.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 16 | [test/unit/persist-migrate.spec.js](../../../../sources/naver__egjs-persist/test/unit/persist-migrate.spec.js)<br>[test/unit/persist.spec.js](../../../../sources/naver__egjs-persist/test/unit/persist.spec.js)<br>[test/unit/storageManager.spec.js](../../../../sources/naver__egjs-persist/test/unit/storageManager.spec.js)<br>[test/unit/TestHelper.js](../../../../sources/naver__egjs-persist/test/unit/TestHelper.js)<br>[test/unit/utils.spec.js](../../../../sources/naver__egjs-persist/test/unit/utils.spec.js)<br>[test/manual/exceeded.html](../../../../sources/naver__egjs-persist/test/manual/exceeded.html) |
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

1. 핵심 참조에서 시작: `index.d.ts`, `src/index.js`, `src/index.umd.js`.
2. entrypoint를 따라 실행 흐름 확인: `src/index.js`, `src/index.umd.js`.
3. retrieval/memory/indexing 확인: `index.d.ts`, `src/index.js`, `src/index.umd.js`.
4. test/eval 파일로 동작 검증: `test/unit/persist-migrate.spec.js`, `test/unit/persist.spec.js`, `test/unit/storageManager.spec.js`.

## 기존 레포 인사이트

LLM 위키/RAG/지식베이스 관점에서 Provide cache interface to handle persisted data among history navigation.. 핵심 구조 신호는 JavaScript, package.json, README.md, LICENSE, tests, docs이며, 소스+보고서 근거 수준으로 초기 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 지식/RAG 패턴 참고이고, 후속 확인 포인트는 CI 신호가 명확하지 않음, 더 깊은 구조 스캔 필요입니다.
