# naver/pr-stats 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

PR에 대한 유용한 통계를 산출하는 GitHub Actions

## 요약

- 조사 단위: `sources/naver__pr-stats` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 128 files, 17 directories, depth score 68, key references 7개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

개발 생산성/DevTools 관점에서 agent/tool runtime, retrieval/vector path, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 entrypoints=src/index.ts이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 7개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | naver/pr-stats |
| 주제 | 개발 생산성/DevTools / 개발 생산성/DevTools |
| Region | korea |
| Language | TypeScript |
| Stars | 204 |
| Forks | 14 |
| License | Apache-2.0 |
| 성숙도 | 초기 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/naver__pr-stats](../../../../sources/naver__pr-stats) |
| 기존 보고서 | [reports/korea-trending/repositories/naver__pr-stats.md](../../../korea-trending/repositories/naver__pr-stats.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 128 / 17 |
| 관측 최대 깊이 | 5 |
| 상위 디렉터리 | src |
| 상위 확장자 | .ts: 116, (none): 6, .json: 3, .md: 2, .yml: 1 |
| 소스 패턴 | agent/tool runtime, retrieval/vector path, eval/test harness |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| src | source boundary | 55 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| build | package.json | build | ncc build src/index.ts -o dist |
| test | package.json | test | mocha -r ts-node/register -r tsconfig-paths/register 'src/**/*.test.ts' |
| quality | package.json | lint:fix | eslint --fix --ext .js,.ts . |
| quality | package.json | prettier | npx prettier --write **/*.{js,ts} |
| quality | package.json | types | tsc |


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
| entrypoints | [src/index.ts](../../../../sources/naver__pr-stats/src/index.ts) | entrypoints signal |
| config | [package.json](../../../../sources/naver__pr-stats/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/naver__pr-stats/tsconfig.json) | config signal |
| docs | [README.en.md](../../../../sources/naver__pr-stats/README.en.md) | docs signal |
| docs | [README.md](../../../../sources/naver__pr-stats/README.md) | docs signal |
| eval | [src/test-helper/index.ts](../../../../sources/naver__pr-stats/src/test-helper/index.ts) | eval support |
| eval | [src/stats/user/__test__/average-comment-count.test.ts](../../../../sources/naver__pr-stats/src/stats/user/__test__/average-comment-count.test.ts) | eval support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 1 | [src/index.ts](../../../../sources/naver__pr-stats/src/index.ts) |
| agentRuntime | 1 | [src/context.ts](../../../../sources/naver__pr-stats/src/context.ts) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 12 | [src/index.ts](../../../../sources/naver__pr-stats/src/index.ts)<br>[src/util/index.ts](../../../../sources/naver__pr-stats/src/util/index.ts)<br>[src/types/index.ts](../../../../sources/naver__pr-stats/src/types/index.ts)<br>[src/test-helper/index.ts](../../../../sources/naver__pr-stats/src/test-helper/index.ts)<br>[src/stats/index.ts](../../../../sources/naver__pr-stats/src/stats/index.ts)<br>[src/stats/user/index.ts](../../../../sources/naver__pr-stats/src/stats/user/index.ts)<br>[src/stats/pr-list/index.ts](../../../../sources/naver__pr-stats/src/stats/pr-list/index.ts)<br>[src/stats/pr/index.ts](../../../../sources/naver__pr-stats/src/stats/pr/index.ts) |
| spec | 0 | 명확하지 않음 |
| eval | 41 | [src/test-helper/index.ts](../../../../sources/naver__pr-stats/src/test-helper/index.ts)<br>[src/stats/user/__test__/average-comment-count.test.ts](../../../../sources/naver__pr-stats/src/stats/user/__test__/average-comment-count.test.ts)<br>[src/stats/user/__test__/average-lines-changed-per-commit.test.ts](../../../../sources/naver__pr-stats/src/stats/user/__test__/average-lines-changed-per-commit.test.ts)<br>[src/stats/user/__test__/average-response-time.test.ts](../../../../sources/naver__pr-stats/src/stats/user/__test__/average-response-time.test.ts)<br>[src/stats/user/__test__/average-time-to-approval.test.ts](../../../../sources/naver__pr-stats/src/stats/user/__test__/average-time-to-approval.test.ts)<br>[src/stats/user/__test__/participation-count.test.ts](../../../../sources/naver__pr-stats/src/stats/user/__test__/participation-count.test.ts)<br>[src/stats/user/__test__/participation-rate.test.ts](../../../../sources/naver__pr-stats/src/stats/user/__test__/participation-rate.test.ts)<br>[src/stats/user/__test__/requested-count.test.ts](../../../../sources/naver__pr-stats/src/stats/user/__test__/requested-count.test.ts) |
| security | 0 | 명확하지 않음 |
| ci | 0 | 명확하지 않음 |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 2 | [README.en.md](../../../../sources/naver__pr-stats/README.en.md)<br>[README.md](../../../../sources/naver__pr-stats/README.md) |
| config | 2 | [package.json](../../../../sources/naver__pr-stats/package.json)<br>[tsconfig.json](../../../../sources/naver__pr-stats/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 41 | [src/test-helper/index.ts](../../../../sources/naver__pr-stats/src/test-helper/index.ts)<br>[src/stats/user/__test__/average-comment-count.test.ts](../../../../sources/naver__pr-stats/src/stats/user/__test__/average-comment-count.test.ts)<br>[src/stats/user/__test__/average-lines-changed-per-commit.test.ts](../../../../sources/naver__pr-stats/src/stats/user/__test__/average-lines-changed-per-commit.test.ts)<br>[src/stats/user/__test__/average-response-time.test.ts](../../../../sources/naver__pr-stats/src/stats/user/__test__/average-response-time.test.ts)<br>[src/stats/user/__test__/average-time-to-approval.test.ts](../../../../sources/naver__pr-stats/src/stats/user/__test__/average-time-to-approval.test.ts)<br>[src/stats/user/__test__/participation-count.test.ts](../../../../sources/naver__pr-stats/src/stats/user/__test__/participation-count.test.ts) |
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

1. 핵심 참조에서 시작: `src/index.ts`, `package.json`, `tsconfig.json`.
2. entrypoint를 따라 실행 흐름 확인: `src/index.ts`.
3. agent/tool runtime 매핑: `src/context.ts`.
4. retrieval/memory/indexing 확인: `src/index.ts`, `src/util/index.ts`, `src/types/index.ts`.
5. test/eval 파일로 동작 검증: `src/test-helper/index.ts`, `src/stats/user/__test__/average-comment-count.test.ts`, `src/stats/user/__test__/average-lines-changed-per-commit.test.ts`.

## 기존 레포 인사이트

개발 생산성/DevTools 관점에서 PR에 대한 유용한 통계를 산출하는 GitHub Actions. 핵심 구조 신호는 TypeScript, package.json, README.md, LICENSE, docs이며, 소스+보고서 근거 수준으로 초기 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 개발 생산성/DevTools 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, CI 신호가 명확하지 않음, 더 깊은 구조 스캔 필요입니다.
