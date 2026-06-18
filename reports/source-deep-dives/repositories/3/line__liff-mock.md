# line/liff-mock 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

LIFF Mock is a LIFF Plugin that make testing your LIFF app easy.

## 요약

- 조사 단위: `sources/line__liff-mock` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 123 files, 10 directories, depth score 80, key references 11개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

평가/관측/품질 관점에서 retrieval/vector path, eval/test harness, security/policy surface 구조로 읽힌다. 핵심 소스 근거는 eval=src/plugin.test.ts, src/shared.test.ts, src/store/GlobalStore.test.ts이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 11개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 품질/평가 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | line/liff-mock |
| 주제 | 평가/관측/품질 / 평가/관측/품질 |
| Region | korea |
| Language | TypeScript |
| Stars | 45 |
| Forks | 6 |
| License | Apache-2.0 |
| 성숙도 | 초기 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/line__liff-mock](../../../../sources/line__liff-mock) |
| 기존 보고서 | [reports/korea-trending/repositories/line__liff-mock.md](../../../korea-trending/repositories/line__liff-mock.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 123 / 10 |
| 관측 최대 깊이 | 4 |
| 상위 디렉터리 | .github, examples, src |
| 상위 확장자 | .ts: 102, .json: 8, .js: 4, (none): 4, .html: 2, .md: 2, .yml: 1 |
| 소스 패턴 | retrieval/vector path, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| src | source boundary | 45 |
| examples/npm-typescript-example | examples workspace | 5 |
| examples/cdn-example | examples workspace | 2 |
| .github | ci surface | 1 |
| examples | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| build | package.json | clean | rm -rf dist |
| quality | package.json | lint | eslint src |
| quality | package.json | format | prettier --check src |
| quality | package.json | type-check | tsc --noEmit |
| test | package.json | code-check | npm run lint && npm run format && npm run type-check && npm run test |
| build | package.json | build:cdn | webpack |
| build | package.json | build:npm | tsc |
| build | package.json | build:cdn:prod | NODE_ENV=production npm run build:cdn |
| build | package.json | build:npm:prod | NODE_ENV=production npm run build:npm |
| build | package.json | build | npm run clean && npm run build:npm && npm run build:cdn |
| build | package.json | build:prod | npm run clean && npm run build:npm:prod && npm run build:cdn:prod |
| serve-dev | package.json | serve | webpack serve |
| test | package.json | test | jest |
| test | package.json | test:watch | npm run test -- --watch |
| build | package.json | prepublishOnly | npm run code-check && npm run build:prod |


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
| eval | [src/plugin.test.ts](../../../../sources/line__liff-mock/src/plugin.test.ts) | eval signal |
| eval | [src/shared.test.ts](../../../../sources/line__liff-mock/src/shared.test.ts) | eval signal |
| eval | [src/store/GlobalStore.test.ts](../../../../sources/line__liff-mock/src/store/GlobalStore.test.ts) | eval signal |
| eval | [src/store/MockDataStore.test.ts](../../../../sources/line__liff-mock/src/store/MockDataStore.test.ts) | eval signal |
| entrypoints | [src/index.ts](../../../../sources/line__liff-mock/src/index.ts) | entrypoints signal |
| entrypoints | [examples/npm-typescript-example/src/index.ts](../../../../sources/line__liff-mock/examples/npm-typescript-example/src/index.ts) | entrypoints signal |
| config | [package.json](../../../../sources/line__liff-mock/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/line__liff-mock/tsconfig.json) | config signal |
| config | [examples/npm-typescript-example/package.json](../../../../sources/line__liff-mock/examples/npm-typescript-example/package.json) | config signal |
| config | [examples/npm-typescript-example/tsconfig.json](../../../../sources/line__liff-mock/examples/npm-typescript-example/tsconfig.json) | config signal |
| ci | [.github/workflows/code-check.yml](../../../../sources/line__liff-mock/.github/workflows/code-check.yml) | ci signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 2 | [src/index.ts](../../../../sources/line__liff-mock/src/index.ts)<br>[examples/npm-typescript-example/src/index.ts](../../../../sources/line__liff-mock/examples/npm-typescript-example/src/index.ts) |
| agentRuntime | 0 | 명확하지 않음 |
| mcp | 0 | 명확하지 않음 |
| retrieval | 5 | [src/index.ts](../../../../sources/line__liff-mock/src/index.ts)<br>[examples/npm-typescript-example/src/index.ts](../../../../sources/line__liff-mock/examples/npm-typescript-example/src/index.ts)<br>[examples/npm-typescript-example/public/index.html](../../../../sources/line__liff-mock/examples/npm-typescript-example/public/index.html)<br>[examples/cdn-example/index.html](../../../../sources/line__liff-mock/examples/cdn-example/index.html)<br>[examples/cdn-example/index.js](../../../../sources/line__liff-mock/examples/cdn-example/index.js) |
| spec | 0 | 명확하지 않음 |
| eval | 48 | [src/plugin.test.ts](../../../../sources/line__liff-mock/src/plugin.test.ts)<br>[src/shared.test.ts](../../../../sources/line__liff-mock/src/shared.test.ts)<br>[src/store/GlobalStore.test.ts](../../../../sources/line__liff-mock/src/store/GlobalStore.test.ts)<br>[src/store/MockDataStore.test.ts](../../../../sources/line__liff-mock/src/store/MockDataStore.test.ts)<br>[src/api/_addListener.test.ts](../../../../sources/line__liff-mock/src/api/_addListener.test.ts)<br>[src/api/_call.test.ts](../../../../sources/line__liff-mock/src/api/_call.test.ts)<br>[src/api/_dispatchEvent.test.ts](../../../../sources/line__liff-mock/src/api/_dispatchEvent.test.ts)<br>[src/api/_postMessage.test.ts](../../../../sources/line__liff-mock/src/api/_postMessage.test.ts) |
| security | 2 | [src/api/permission.test.ts](../../../../sources/line__liff-mock/src/api/permission.test.ts)<br>[src/api/permission.ts](../../../../sources/line__liff-mock/src/api/permission.ts) |
| ci | 1 | [.github/workflows/code-check.yml](../../../../sources/line__liff-mock/.github/workflows/code-check.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 1 | [README.md](../../../../sources/line__liff-mock/README.md) |
| config | 4 | [package.json](../../../../sources/line__liff-mock/package.json)<br>[tsconfig.json](../../../../sources/line__liff-mock/tsconfig.json)<br>[examples/npm-typescript-example/package.json](../../../../sources/line__liff-mock/examples/npm-typescript-example/package.json)<br>[examples/npm-typescript-example/tsconfig.json](../../../../sources/line__liff-mock/examples/npm-typescript-example/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 48 | [src/plugin.test.ts](../../../../sources/line__liff-mock/src/plugin.test.ts)<br>[src/shared.test.ts](../../../../sources/line__liff-mock/src/shared.test.ts)<br>[src/store/GlobalStore.test.ts](../../../../sources/line__liff-mock/src/store/GlobalStore.test.ts)<br>[src/store/MockDataStore.test.ts](../../../../sources/line__liff-mock/src/store/MockDataStore.test.ts)<br>[src/api/_addListener.test.ts](../../../../sources/line__liff-mock/src/api/_addListener.test.ts)<br>[src/api/_call.test.ts](../../../../sources/line__liff-mock/src/api/_call.test.ts) |
| CI workflow | 1 | [.github/workflows/code-check.yml](../../../../sources/line__liff-mock/.github/workflows/code-check.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 2 | [src/api/permission.test.ts](../../../../sources/line__liff-mock/src/api/permission.test.ts)<br>[src/api/permission.ts](../../../../sources/line__liff-mock/src/api/permission.ts) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `src/plugin.test.ts`, `src/shared.test.ts`, `src/store/GlobalStore.test.ts`.
2. entrypoint를 따라 실행 흐름 확인: `src/index.ts`, `examples/npm-typescript-example/src/index.ts`.
3. retrieval/memory/indexing 확인: `src/index.ts`, `examples/npm-typescript-example/src/index.ts`, `examples/npm-typescript-example/public/index.html`.
4. test/eval 파일로 동작 검증: `src/plugin.test.ts`, `src/shared.test.ts`, `src/store/GlobalStore.test.ts`.

## 기존 레포 인사이트

평가/관측/품질 관점에서 LIFF Mock is a LIFF Plugin that make testing your LIFF app easy.. 핵심 구조 신호는 TypeScript, package.json, README.md, LICENSE, ci, docs이며, 소스+보고서 근거 수준으로 초기 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 평가/관측/품질 레포입니다. 활용 관점은 품질/평가 비교 지점이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 더 깊은 구조 스캔 필요입니다.
