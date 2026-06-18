# nhn/tui.color-picker 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

Colorpicker component for web services.

## 요약

- 조사 단위: `sources/nhn__tui.color-picker` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 52 files, 14 directories, depth score 70, key references 10개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 retrieval/vector path, spec/docs-driven, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 config=package.json이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 10개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | nhn/tui.color-picker |
| 주제 | 일반 AI 오픈소스 / 일반 AI 오픈소스 |
| Region | korea |
| Language | JavaScript |
| Stars | 67 |
| Forks | 22 |
| License | NOASSERTION |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/nhn__tui.color-picker](../../../../sources/nhn__tui.color-picker) |
| 기존 보고서 | [reports/korea-trending/repositories/nhn__tui.color-picker.md](../../../korea-trending/repositories/nhn__tui.color-picker.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 52 / 14 |
| 관측 최대 깊이 | 4 |
| 상위 디렉터리 | .github, docs, examples, src, test |
| 상위 확장자 | .js: 27, .md: 10, .json: 4, (none): 4, .html: 3, .yml: 2, .css: 1, .styl: 1 |
| 소스 패턴 | retrieval/vector path, spec/docs-driven, eval/test harness |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 5 |
| src | source boundary | 2 |
| .github | ci surface | 1 |
| examples | top-level component | 1 |
| test | validation surface | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| test | package.json | test | jest |
| build | package.json | bundle | webpack --mode=production & webpack --mode=production --minify |
| serve-dev | package.json | serve | webpack-dev-server --inline --hot -d |
| serve-dev | package.json | doc:serve | tuidoc --serv |
| utility | package.json | doc | tuidoc |
| utility | package.json | note | tui-note |


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
| config | [package.json](../../../../sources/nhn__tui.color-picker/package.json) | config signal |
| docs | [README.md](../../../../sources/nhn__tui.color-picker/README.md) | docs signal |
| docs | [docs/COMMIT_MESSAGE_CONVENTION.md](../../../../sources/nhn__tui.color-picker/docs/COMMIT_MESSAGE_CONVENTION.md) | docs signal |
| docs | [docs/getting-started.md](../../../../sources/nhn__tui.color-picker/docs/getting-started.md) | docs signal |
| docs | [docs/PULL_REQUEST_TEMPLATE.md](../../../../sources/nhn__tui.color-picker/docs/PULL_REQUEST_TEMPLATE.md) | docs signal |
| eval | [test/colorUtil.spec.js](../../../../sources/nhn__tui.color-picker/test/colorUtil.spec.js) | eval signal |
| eval | [test/factory.spec.js](../../../../sources/nhn__tui.color-picker/test/factory.spec.js) | eval signal |
| eval | [test/palette.spec.js](../../../../sources/nhn__tui.color-picker/test/palette.spec.js) | eval signal |
| eval | [test/setup-globals.js](../../../../sources/nhn__tui.color-picker/test/setup-globals.js) | eval signal |
| ci | [.github/workflows/test_on_pull_request.yml](../../../../sources/nhn__tui.color-picker/.github/workflows/test_on_pull_request.yml) | ci support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 0 | 명확하지 않음 |
| mcp | 0 | 명확하지 않음 |
| retrieval | 1 | [src/js/index.js](../../../../sources/nhn__tui.color-picker/src/js/index.js) |
| spec | 8 | [test/colorUtil.spec.js](../../../../sources/nhn__tui.color-picker/test/colorUtil.spec.js)<br>[test/factory.spec.js](../../../../sources/nhn__tui.color-picker/test/factory.spec.js)<br>[test/palette.spec.js](../../../../sources/nhn__tui.color-picker/test/palette.spec.js)<br>[test/slider.spec.js](../../../../sources/nhn__tui.color-picker/test/slider.spec.js)<br>[test/core/collection.spec.js](../../../../sources/nhn__tui.color-picker/test/core/collection.spec.js)<br>[test/core/domUtil.spec.js](../../../../sources/nhn__tui.color-picker/test/core/domUtil.spec.js)<br>[test/core/drag.spec.js](../../../../sources/nhn__tui.color-picker/test/core/drag.spec.js)<br>[test/core/view.spec.js](../../../../sources/nhn__tui.color-picker/test/core/view.spec.js) |
| eval | 12 | [test/colorUtil.spec.js](../../../../sources/nhn__tui.color-picker/test/colorUtil.spec.js)<br>[test/factory.spec.js](../../../../sources/nhn__tui.color-picker/test/factory.spec.js)<br>[test/palette.spec.js](../../../../sources/nhn__tui.color-picker/test/palette.spec.js)<br>[test/setup-globals.js](../../../../sources/nhn__tui.color-picker/test/setup-globals.js)<br>[test/slider.spec.js](../../../../sources/nhn__tui.color-picker/test/slider.spec.js)<br>[test/fixtures/test.html](../../../../sources/nhn__tui.color-picker/test/fixtures/test.html)<br>[test/fixtures/view.html](../../../../sources/nhn__tui.color-picker/test/fixtures/view.html)<br>[test/core/collection.spec.js](../../../../sources/nhn__tui.color-picker/test/core/collection.spec.js) |
| security | 0 | 명확하지 않음 |
| ci | 1 | [.github/workflows/test_on_pull_request.yml](../../../../sources/nhn__tui.color-picker/.github/workflows/test_on_pull_request.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 5 | [README.md](../../../../sources/nhn__tui.color-picker/README.md)<br>[docs/COMMIT_MESSAGE_CONVENTION.md](../../../../sources/nhn__tui.color-picker/docs/COMMIT_MESSAGE_CONVENTION.md)<br>[docs/getting-started.md](../../../../sources/nhn__tui.color-picker/docs/getting-started.md)<br>[docs/PULL_REQUEST_TEMPLATE.md](../../../../sources/nhn__tui.color-picker/docs/PULL_REQUEST_TEMPLATE.md)<br>[docs/README.md](../../../../sources/nhn__tui.color-picker/docs/README.md) |
| config | 1 | [package.json](../../../../sources/nhn__tui.color-picker/package.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 12 | [test/colorUtil.spec.js](../../../../sources/nhn__tui.color-picker/test/colorUtil.spec.js)<br>[test/factory.spec.js](../../../../sources/nhn__tui.color-picker/test/factory.spec.js)<br>[test/palette.spec.js](../../../../sources/nhn__tui.color-picker/test/palette.spec.js)<br>[test/setup-globals.js](../../../../sources/nhn__tui.color-picker/test/setup-globals.js)<br>[test/slider.spec.js](../../../../sources/nhn__tui.color-picker/test/slider.spec.js)<br>[test/fixtures/test.html](../../../../sources/nhn__tui.color-picker/test/fixtures/test.html) |
| CI workflow | 1 | [.github/workflows/test_on_pull_request.yml](../../../../sources/nhn__tui.color-picker/.github/workflows/test_on_pull_request.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | path scan에서 primary entrypoint가 명확하지 않음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `package.json`, `README.md`, `docs/COMMIT_MESSAGE_CONVENTION.md`.
2. retrieval/memory/indexing 확인: `src/js/index.js`.
3. test/eval 파일로 동작 검증: `test/colorUtil.spec.js`, `test/factory.spec.js`, `test/palette.spec.js`.

## 기존 레포 인사이트

일반 AI 오픈소스 관점에서 Colorpicker component for web services.. 핵심 구조 신호는 JavaScript, package.json, README.md, LICENSE, tests, ci이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 더 깊은 구조 스캔 필요입니다.
