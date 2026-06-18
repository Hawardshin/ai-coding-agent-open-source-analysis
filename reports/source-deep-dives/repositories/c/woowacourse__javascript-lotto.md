# woowacourse/javascript-lotto 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

자바스크립트로 구현하는 로또 어플리케이션

## 요약

- 조사 단위: `sources/woowacourse__javascript-lotto` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 12 files, 4 directories, depth score 33, key references 2개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 retrieval/vector path, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 config=package.json이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 2개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | woowacourse/javascript-lotto |
| 주제 | 일반 AI 오픈소스 / 일반 AI 오픈소스 |
| Region | korea |
| Language | HTML |
| Stars | 19 |
| Forks | 231 |
| License | 없음 |
| 성숙도 | 초기 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/woowacourse__javascript-lotto](../../../../sources/woowacourse__javascript-lotto) |
| 기존 보고서 | [reports/korea-trending/repositories/woowacourse__javascript-lotto.md](../../../korea-trending/repositories/woowacourse__javascript-lotto.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 12 / 4 |
| 관측 최대 깊이 | 2 |
| 상위 디렉터리 | __tests__, .github, public, src |
| 상위 확장자 | (none): 5, .json: 3, .js: 2, .html: 1, .md: 1 |
| 소스 패턴 | retrieval/vector path, eval/test harness |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| src | source boundary | 3 |
| __tests__ | validation surface | 1 |
| .github | ci surface | 1 |
| public | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| serve-dev | package.json | build | vite build |
| test | package.json | test | jest --no-cache |
| serve-dev | package.json | start-step1 | node src/step1-index.js |
| serve-dev | package.json | start-step2 | vite |
| serve-dev | package.json | deploy | vite build --base=/javascript-lotto/ --minify=false && npx gh-pages -d dist |


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
| config | [package.json](../../../../sources/woowacourse__javascript-lotto/package.json) | config signal |
| eval | [__tests__/.gitkeep](../../../../sources/woowacourse__javascript-lotto/__tests__/.gitkeep) | eval signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 0 | 명확하지 않음 |
| mcp | 0 | 명확하지 않음 |
| retrieval | 3 | [index.html](../../../../sources/woowacourse__javascript-lotto/index.html)<br>[src/step1-index.js](../../../../sources/woowacourse__javascript-lotto/src/step1-index.js)<br>[src/step2-index.js](../../../../sources/woowacourse__javascript-lotto/src/step2-index.js) |
| spec | 0 | 명확하지 않음 |
| eval | 1 | [__tests__/.gitkeep](../../../../sources/woowacourse__javascript-lotto/__tests__/.gitkeep) |
| security | 0 | 명확하지 않음 |
| ci | 0 | 명확하지 않음 |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 0 | 명확하지 않음 |
| config | 1 | [package.json](../../../../sources/woowacourse__javascript-lotto/package.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 1 | [__tests__/.gitkeep](../../../../sources/woowacourse__javascript-lotto/__tests__/.gitkeep) |
| CI workflow | 0 | 명확하지 않음 |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | path scan에서 primary entrypoint가 명확하지 않음 |
| operation | CI workflow 경로가 명확하지 않음; container/deploy 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `package.json`, `__tests__/.gitkeep`.
2. retrieval/memory/indexing 확인: `index.html`, `src/step1-index.js`, `src/step2-index.js`.
3. test/eval 파일로 동작 검증: `__tests__/.gitkeep`.

## 기존 레포 인사이트

일반 AI 오픈소스 관점에서 자바스크립트로 구현하는 로또 어플리케이션. 핵심 구조 신호는 HTML, package.json, tests, ci이며, 소스+보고서 근거 수준으로 초기 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
