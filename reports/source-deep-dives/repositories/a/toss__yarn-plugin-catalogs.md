# toss/yarn-plugin-catalogs 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

A Yarn plugin that enables "Catalogs" - a workspace feature for defining dependency version ranges as reusable constants across your project.

## 요약

- 조사 단위: `sources/toss__yarn-plugin-catalogs` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 42 files, 15 directories, depth score 76, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 cli-first, api/server, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 entrypoints=.yarn/sdks/typescript/bin/tsc, .yarn/sdks/typescript/bin/tsserver이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | toss/yarn-plugin-catalogs |
| 주제 | 일반 AI 오픈소스 / 일반 AI 오픈소스 |
| Region | korea |
| Language | TypeScript |
| Stars | 68 |
| Forks | 8 |
| License | MIT |
| 성숙도 | 초기 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/toss__yarn-plugin-catalogs](../../../../sources/toss__yarn-plugin-catalogs) |
| 기존 보고서 | [reports/korea-trending/repositories/toss__yarn-plugin-catalogs.md](../../../korea-trending/repositories/toss__yarn-plugin-catalogs.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 42 / 15 |
| 관측 최대 깊이 | 5 |
| 상위 디렉터리 | .github, .yarn, bundles, sources |
| 상위 확장자 | .ts: 20, (none): 6, .js: 5, .json: 5, .yml: 3, .cjs: 1, .lock: 1, .md: 1 |
| 소스 패턴 | cli-first, api/server, retrieval/vector path, eval/test harness |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| .github | ci surface | 1 |
| bundles | top-level component | 1 |
| sources | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| build | package.json | build | builder build plugin |
| serve-dev | package.json | build:dev | builder build plugin --no-minify |
| build | package.json | clean | rimraf bundles |
| test | package.json | test | yarn build:dev && vitest run |
| test | package.json | test:watch | yarn build && vitest watch |
| quality | package.json | typecheck | tsc --noEmit |


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
| entrypoints | [.yarn/sdks/typescript/bin/tsc](../../../../sources/toss__yarn-plugin-catalogs/.yarn/sdks/typescript/bin/tsc) | entrypoints signal |
| entrypoints | [.yarn/sdks/typescript/bin/tsserver](../../../../sources/toss__yarn-plugin-catalogs/.yarn/sdks/typescript/bin/tsserver) | entrypoints signal |
| config | [package.json](../../../../sources/toss__yarn-plugin-catalogs/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/toss__yarn-plugin-catalogs/tsconfig.json) | config signal |
| config | [.yarn/sdks/typescript/package.json](../../../../sources/toss__yarn-plugin-catalogs/.yarn/sdks/typescript/package.json) | config signal |
| docs | [README.md](../../../../sources/toss__yarn-plugin-catalogs/README.md) | docs signal |
| eval | [sources/__tests__/apply-command.test.ts](../../../../sources/toss__yarn-plugin-catalogs/sources/__tests__/apply-command.test.ts) | eval signal |
| eval | [sources/__tests__/basic.test.ts](../../../../sources/toss__yarn-plugin-catalogs/sources/__tests__/basic.test.ts) | eval signal |
| eval | [sources/__tests__/default-groups.test.ts](../../../../sources/toss__yarn-plugin-catalogs/sources/__tests__/default-groups.test.ts) | eval signal |
| eval | [sources/__tests__/inheritance.test.ts](../../../../sources/toss__yarn-plugin-catalogs/sources/__tests__/inheritance.test.ts) | eval signal |
| ci | [.github/workflows/test.yml](../../../../sources/toss__yarn-plugin-catalogs/.github/workflows/test.yml) | ci support |
| manifest-entrypoint | [sources/index.ts](../../../../sources/toss__yarn-plugin-catalogs/sources/index.ts) | package manifest entrypoint |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 2 | [.yarn/sdks/typescript/bin/tsc](../../../../sources/toss__yarn-plugin-catalogs/.yarn/sdks/typescript/bin/tsc)<br>[.yarn/sdks/typescript/bin/tsserver](../../../../sources/toss__yarn-plugin-catalogs/.yarn/sdks/typescript/bin/tsserver) |
| agentRuntime | 0 | 명확하지 않음 |
| mcp | 0 | 명확하지 않음 |
| retrieval | 2 | [sources/index.ts](../../../../sources/toss__yarn-plugin-catalogs/sources/index.ts)<br>[sources/configuration/index.ts](../../../../sources/toss__yarn-plugin-catalogs/sources/configuration/index.ts) |
| spec | 0 | 명확하지 않음 |
| eval | 9 | [sources/__tests__/apply-command.test.ts](../../../../sources/toss__yarn-plugin-catalogs/sources/__tests__/apply-command.test.ts)<br>[sources/__tests__/basic.test.ts](../../../../sources/toss__yarn-plugin-catalogs/sources/__tests__/basic.test.ts)<br>[sources/__tests__/default-groups.test.ts](../../../../sources/toss__yarn-plugin-catalogs/sources/__tests__/default-groups.test.ts)<br>[sources/__tests__/inheritance.test.ts](../../../../sources/toss__yarn-plugin-catalogs/sources/__tests__/inheritance.test.ts)<br>[sources/__tests__/utils.ts](../../../../sources/toss__yarn-plugin-catalogs/sources/__tests__/utils.ts)<br>[sources/__tests__/validate-command.test.ts](../../../../sources/toss__yarn-plugin-catalogs/sources/__tests__/validate-command.test.ts)<br>[sources/__tests__/validate-project.test.ts](../../../../sources/toss__yarn-plugin-catalogs/sources/__tests__/validate-project.test.ts)<br>[sources/__tests__/validation.test.ts](../../../../sources/toss__yarn-plugin-catalogs/sources/__tests__/validation.test.ts) |
| security | 0 | 명확하지 않음 |
| ci | 1 | [.github/workflows/test.yml](../../../../sources/toss__yarn-plugin-catalogs/.github/workflows/test.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 1 | [README.md](../../../../sources/toss__yarn-plugin-catalogs/README.md) |
| config | 3 | [package.json](../../../../sources/toss__yarn-plugin-catalogs/package.json)<br>[tsconfig.json](../../../../sources/toss__yarn-plugin-catalogs/tsconfig.json)<br>[.yarn/sdks/typescript/package.json](../../../../sources/toss__yarn-plugin-catalogs/.yarn/sdks/typescript/package.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 9 | [sources/__tests__/apply-command.test.ts](../../../../sources/toss__yarn-plugin-catalogs/sources/__tests__/apply-command.test.ts)<br>[sources/__tests__/basic.test.ts](../../../../sources/toss__yarn-plugin-catalogs/sources/__tests__/basic.test.ts)<br>[sources/__tests__/default-groups.test.ts](../../../../sources/toss__yarn-plugin-catalogs/sources/__tests__/default-groups.test.ts)<br>[sources/__tests__/inheritance.test.ts](../../../../sources/toss__yarn-plugin-catalogs/sources/__tests__/inheritance.test.ts)<br>[sources/__tests__/utils.ts](../../../../sources/toss__yarn-plugin-catalogs/sources/__tests__/utils.ts)<br>[sources/__tests__/validate-command.test.ts](../../../../sources/toss__yarn-plugin-catalogs/sources/__tests__/validate-command.test.ts) |
| CI workflow | 1 | [.github/workflows/test.yml](../../../../sources/toss__yarn-plugin-catalogs/.github/workflows/test.yml) |
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

1. 핵심 참조에서 시작: `.yarn/sdks/typescript/bin/tsc`, `.yarn/sdks/typescript/bin/tsserver`, `package.json`.
2. entrypoint를 따라 실행 흐름 확인: `.yarn/sdks/typescript/bin/tsc`, `.yarn/sdks/typescript/bin/tsserver`.
3. retrieval/memory/indexing 확인: `sources/index.ts`, `sources/configuration/index.ts`.
4. test/eval 파일로 동작 검증: `sources/__tests__/apply-command.test.ts`, `sources/__tests__/basic.test.ts`, `sources/__tests__/default-groups.test.ts`.

## 기존 레포 인사이트

일반 AI 오픈소스 관점에서 A Yarn plugin that enables "Catalogs" a workspace feature for defining dependency version ranges as reusable constants a. 핵심 구조 신호는 TypeScript, package.json, README.md, LICENSE, ci, docs이며, 소스+보고서 근거 수준으로 초기 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 더 깊은 구조 스캔 필요입니다.
