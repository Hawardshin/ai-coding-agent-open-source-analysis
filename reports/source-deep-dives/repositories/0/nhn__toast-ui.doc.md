# nhn/toast-ui.doc 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

nhn/toast-ui.doc

## 요약

- 조사 단위: `sources/nhn__toast-ui.doc` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 99 files, 20 directories, depth score 86, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 cli-first, api/server, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 entrypoints=bin/apiContentDataFactory.js, bin/apiDataFactory.js, bin/apiDataFactoryHelper.js이고, 의존성 단서는 react, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | nhn/toast-ui.doc |
| 주제 | 일반 AI 오픈소스 / 일반 AI 오픈소스 |
| Region | korea |
| Language | JavaScript |
| Stars | 133 |
| Forks | 19 |
| License | MIT |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/nhn__toast-ui.doc](../../../../sources/nhn__toast-ui.doc) |
| 기존 보고서 | [reports/korea-trending/repositories/nhn__toast-ui.doc.md](../../../korea-trending/repositories/nhn__toast-ui.doc.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 99 / 20 |
| 관측 최대 깊이 | 4 |
| 상위 디렉터리 | __mocks__, __tests__, .github, bin, demo, docs, src |
| 상위 확장자 | .js: 64, .scss: 17, .md: 10, .json: 3, (none): 3, .css: 1, .html: 1 |
| 소스 패턴 | cli-first, api/server, retrieval/vector path, spec/docs-driven, eval/test harness, ui/extension surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 4 |
| src | source boundary | 2 |
| __mocks__ | top-level component | 1 |
| __tests__ | validation surface | 1 |
| .github | ci surface | 1 |
| bin | top-level component | 1 |
| demo | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| test | package.json | test | jest |
| utility | package.json | clean | gatsby clean |
| serve-dev | package.json | develop | gatsby develop |
| build | package.json | build | gatsby build |
| test | package.json | build:latest | GATSBY_ACTIVE_ENV=latest gatsby build --prefix-paths |
| build | package.json | build:semver | GATSBY_ACTIVE_ENV=semver gatsby build --prefix-paths |
| serve-dev | package.json | serve | gatsby serve |
| serve-dev | package.json | tuidoc:dev | node ./bin/build --dev |
| build | package.json | tuidoc | node ./bin/build |
| serve-dev | package.json | tuidoc:serve | node ./bin/build --serv |
| utility | package.json | note | tui-note --tag=$(git describe --tags) |
| entrypoint | package.json bin | build.js | ./bin/build.js |


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
| entrypoints | [bin/apiContentDataFactory.js](../../../../sources/nhn__toast-ui.doc/bin/apiContentDataFactory.js) | entrypoints signal |
| entrypoints | [bin/apiDataFactory.js](../../../../sources/nhn__toast-ui.doc/bin/apiDataFactory.js) | entrypoints signal |
| entrypoints | [bin/apiDataFactoryHelper.js](../../../../sources/nhn__toast-ui.doc/bin/apiDataFactoryHelper.js) | entrypoints signal |
| entrypoints | [bin/apiNavigationDataFactory.js](../../../../sources/nhn__toast-ui.doc/bin/apiNavigationDataFactory.js) | entrypoints signal |
| config | [package.json](../../../../sources/nhn__toast-ui.doc/package.json) | config signal |
| docs | [README.md](../../../../sources/nhn__toast-ui.doc/README.md) | docs signal |
| docs | [docs/COMMIT_MESSAGE_CONVENTION.md](../../../../sources/nhn__toast-ui.doc/docs/COMMIT_MESSAGE_CONVENTION.md) | docs signal |
| docs | [docs/PULL_REQUEST_TEMPLATE.md](../../../../sources/nhn__toast-ui.doc/docs/PULL_REQUEST_TEMPLATE.md) | docs signal |
| docs | [docs/README.md](../../../../sources/nhn__toast-ui.doc/docs/README.md) | docs signal |
| eval | [__tests__/jest-preprocess.js](../../../../sources/nhn__toast-ui.doc/__tests__/jest-preprocess.js) | eval signal |
| eval | [__tests__/jest-setup.js](../../../../sources/nhn__toast-ui.doc/__tests__/jest-setup.js) | eval signal |
| eval | [__tests__/components/layout.spec.js](../../../../sources/nhn__toast-ui.doc/__tests__/components/layout.spec.js) | eval signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 6 | [bin/apiContentDataFactory.js](../../../../sources/nhn__toast-ui.doc/bin/apiContentDataFactory.js)<br>[bin/apiDataFactory.js](../../../../sources/nhn__toast-ui.doc/bin/apiDataFactory.js)<br>[bin/apiDataFactoryHelper.js](../../../../sources/nhn__toast-ui.doc/bin/apiDataFactoryHelper.js)<br>[bin/apiNavigationDataFactory.js](../../../../sources/nhn__toast-ui.doc/bin/apiNavigationDataFactory.js)<br>[bin/build.js](../../../../sources/nhn__toast-ui.doc/bin/build.js)<br>[bin/exampleDataFactory.js](../../../../sources/nhn__toast-ui.doc/bin/exampleDataFactory.js) |
| agentRuntime | 0 | 명확하지 않음 |
| mcp | 0 | 명확하지 않음 |
| retrieval | 1 | [src/pages/index.js](../../../../sources/nhn__toast-ui.doc/src/pages/index.js) |
| spec | 6 | [__tests__/components/layout.spec.js](../../../../sources/nhn__toast-ui.doc/__tests__/components/layout.spec.js)<br>[__tests__/components/ListGroup.spec.js](../../../../sources/nhn__toast-ui.doc/__tests__/components/ListGroup.spec.js)<br>[__tests__/components/ListItem.spec.js](../../../../sources/nhn__toast-ui.doc/__tests__/components/ListItem.spec.js)<br>[__tests__/components/SubListGroups.spec.js](../../../../sources/nhn__toast-ui.doc/__tests__/components/SubListGroups.spec.js)<br>[__tests__/components/tabs.spec.js](../../../../sources/nhn__toast-ui.doc/__tests__/components/tabs.spec.js)<br>[__tests__/components/ToggleButton.spec.js](../../../../sources/nhn__toast-ui.doc/__tests__/components/ToggleButton.spec.js) |
| eval | 8 | [__tests__/jest-preprocess.js](../../../../sources/nhn__toast-ui.doc/__tests__/jest-preprocess.js)<br>[__tests__/jest-setup.js](../../../../sources/nhn__toast-ui.doc/__tests__/jest-setup.js)<br>[__tests__/components/layout.spec.js](../../../../sources/nhn__toast-ui.doc/__tests__/components/layout.spec.js)<br>[__tests__/components/ListGroup.spec.js](../../../../sources/nhn__toast-ui.doc/__tests__/components/ListGroup.spec.js)<br>[__tests__/components/ListItem.spec.js](../../../../sources/nhn__toast-ui.doc/__tests__/components/ListItem.spec.js)<br>[__tests__/components/SubListGroups.spec.js](../../../../sources/nhn__toast-ui.doc/__tests__/components/SubListGroups.spec.js)<br>[__tests__/components/tabs.spec.js](../../../../sources/nhn__toast-ui.doc/__tests__/components/tabs.spec.js)<br>[__tests__/components/ToggleButton.spec.js](../../../../sources/nhn__toast-ui.doc/__tests__/components/ToggleButton.spec.js) |
| security | 0 | 명확하지 않음 |
| ci | 0 | 명확하지 않음 |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 5 | [README.md](../../../../sources/nhn__toast-ui.doc/README.md)<br>[docs/COMMIT_MESSAGE_CONVENTION.md](../../../../sources/nhn__toast-ui.doc/docs/COMMIT_MESSAGE_CONVENTION.md)<br>[docs/PULL_REQUEST_TEMPLATE.md](../../../../sources/nhn__toast-ui.doc/docs/PULL_REQUEST_TEMPLATE.md)<br>[docs/README.md](../../../../sources/nhn__toast-ui.doc/docs/README.md)<br>[demo/README.md](../../../../sources/nhn__toast-ui.doc/demo/README.md) |
| config | 1 | [package.json](../../../../sources/nhn__toast-ui.doc/package.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 8 | [__tests__/jest-preprocess.js](../../../../sources/nhn__toast-ui.doc/__tests__/jest-preprocess.js)<br>[__tests__/jest-setup.js](../../../../sources/nhn__toast-ui.doc/__tests__/jest-setup.js)<br>[__tests__/components/layout.spec.js](../../../../sources/nhn__toast-ui.doc/__tests__/components/layout.spec.js)<br>[__tests__/components/ListGroup.spec.js](../../../../sources/nhn__toast-ui.doc/__tests__/components/ListGroup.spec.js)<br>[__tests__/components/ListItem.spec.js](../../../../sources/nhn__toast-ui.doc/__tests__/components/ListItem.spec.js)<br>[__tests__/components/SubListGroups.spec.js](../../../../sources/nhn__toast-ui.doc/__tests__/components/SubListGroups.spec.js) |
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

1. 핵심 참조에서 시작: `bin/apiContentDataFactory.js`, `bin/apiDataFactory.js`, `bin/apiDataFactoryHelper.js`.
2. entrypoint를 따라 실행 흐름 확인: `bin/apiContentDataFactory.js`, `bin/apiDataFactory.js`, `bin/apiDataFactoryHelper.js`.
3. retrieval/memory/indexing 확인: `src/pages/index.js`.
4. test/eval 파일로 동작 검증: `__tests__/jest-preprocess.js`, `__tests__/jest-setup.js`, `__tests__/components/layout.spec.js`.

## 기존 레포 인사이트

일반 AI 오픈소스 관점에서 설명 메타데이터가 짧습니다. 핵심 구조 신호는 JavaScript, package.json, README.md, LICENSE, react, tests이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 더 깊은 구조 스캔 필요입니다.
