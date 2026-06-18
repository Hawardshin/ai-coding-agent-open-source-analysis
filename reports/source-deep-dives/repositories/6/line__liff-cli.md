# line/liff-cli 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

line/liff-cli

## 요약

- 조사 단위: `sources/line__liff-cli` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 75 files, 16 directories, depth score 86, key references 10개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

개발 생산성/DevTools 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 entrypoints=src/cli.ts이고, 의존성 단서는 commander, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 10개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | line/liff-cli |
| 주제 | 개발 생산성/DevTools / 개발 생산성/DevTools |
| Region | korea |
| Language | TypeScript |
| Stars | 32 |
| Forks | 5 |
| License | Apache-2.0 |
| 성숙도 | 초기 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/line__liff-cli](../../../../sources/line__liff-cli) |
| 기존 보고서 | [reports/korea-trending/repositories/line__liff-cli.md](../../../korea-trending/repositories/line__liff-cli.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 75 / 16 |
| 관측 최대 깊이 | 4 |
| 상위 디렉터리 | .github, src |
| 상위 확장자 | .ts: 54, (none): 7, .json: 5, .md: 4, .yml: 3, .js: 2 |
| 소스 패턴 | cli-first, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| src | source boundary | 37 |
| .github | ci surface | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| quality | package.json | format | prettier --check . |
| quality | package.json | format:fix | prettier --write . |
| quality | package.json | lint | eslint src && publint --strict |
| quality | package.json | code-check | npm run format && npm run lint |
| test | package.json | test | vitest |
| build | package.json | clean | rm -rf dist |
| build | package.json | build | npm run clean && tsc --project tsconfig.build.json |
| serve-dev | package.json | start | ./index.js |
| serve-dev | package.json | dev | node --watch --watch-path=./src --watch-path=./dev.js dev.js |
| build | package.json | release | changelogen --release |
| entrypoint | package.json bin | index.js | index.js |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | 없음 |
| developerSurface | commander |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| entrypoints | [src/cli.ts](../../../../sources/line__liff-cli/src/cli.ts) | entrypoints signal |
| config | [package.json](../../../../sources/line__liff-cli/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/line__liff-cli/tsconfig.json) | config signal |
| ci | [.github/workflows/code-check.yml](../../../../sources/line__liff-cli/.github/workflows/code-check.yml) | ci signal |
| ci | [.github/workflows/publish.yml](../../../../sources/line__liff-cli/.github/workflows/publish.yml) | ci signal |
| ci | [.github/workflows/semantic-pull-request.yml](../../../../sources/line__liff-cli/.github/workflows/semantic-pull-request.yml) | ci signal |
| docs | [README.md](../../../../sources/line__liff-cli/README.md) | docs signal |
| eval | [src/setup.test.ts](../../../../sources/line__liff-cli/src/setup.test.ts) | eval support |
| eval | [src/serve/resolveEndpointUrl.test.ts](../../../../sources/line__liff-cli/src/serve/resolveEndpointUrl.test.ts) | eval support |
| manifest-entrypoint | [index.js](../../../../sources/line__liff-cli/index.js) | package manifest entrypoint |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 1 | [src/cli.ts](../../../../sources/line__liff-cli/src/cli.ts) |
| agentRuntime | 1 | [src/api/agent.ts](../../../../sources/line__liff-cli/src/api/agent.ts) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 11 | [index.js](../../../../sources/line__liff-cli/index.js)<br>[src/serve/commands/index.test.ts](../../../../sources/line__liff-cli/src/serve/commands/index.test.ts)<br>[src/serve/commands/index.ts](../../../../sources/line__liff-cli/src/serve/commands/index.ts)<br>[src/scaffold/commands/index.test.ts](../../../../sources/line__liff-cli/src/scaffold/commands/index.test.ts)<br>[src/scaffold/commands/index.ts](../../../../sources/line__liff-cli/src/scaffold/commands/index.ts)<br>[src/init/commands/index.test.ts](../../../../sources/line__liff-cli/src/init/commands/index.test.ts)<br>[src/init/commands/index.ts](../../../../sources/line__liff-cli/src/init/commands/index.ts)<br>[src/channel/commands/index.test.ts](../../../../sources/line__liff-cli/src/channel/commands/index.test.ts) |
| spec | 0 | 명확하지 않음 |
| eval | 22 | [src/setup.test.ts](../../../../sources/line__liff-cli/src/setup.test.ts)<br>[src/serve/resolveEndpointUrl.test.ts](../../../../sources/line__liff-cli/src/serve/resolveEndpointUrl.test.ts)<br>[src/serve/resolveProxy.test.ts](../../../../sources/line__liff-cli/src/serve/resolveProxy.test.ts)<br>[src/serve/serveAction.test.ts](../../../../sources/line__liff-cli/src/serve/serveAction.test.ts)<br>[src/serve/commands/index.test.ts](../../../../sources/line__liff-cli/src/serve/commands/index.test.ts)<br>[src/scaffold/scaffoldAction.test.ts](../../../../sources/line__liff-cli/src/scaffold/scaffoldAction.test.ts)<br>[src/scaffold/commands/index.test.ts](../../../../sources/line__liff-cli/src/scaffold/commands/index.test.ts)<br>[src/init/initAction.test.ts](../../../../sources/line__liff-cli/src/init/initAction.test.ts) |
| security | 2 | [src/api/auth.test.ts](../../../../sources/line__liff-cli/src/api/auth.test.ts)<br>[src/api/auth.ts](../../../../sources/line__liff-cli/src/api/auth.ts) |
| ci | 3 | [.github/workflows/code-check.yml](../../../../sources/line__liff-cli/.github/workflows/code-check.yml)<br>[.github/workflows/publish.yml](../../../../sources/line__liff-cli/.github/workflows/publish.yml)<br>[.github/workflows/semantic-pull-request.yml](../../../../sources/line__liff-cli/.github/workflows/semantic-pull-request.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 1 | [README.md](../../../../sources/line__liff-cli/README.md) |
| config | 2 | [package.json](../../../../sources/line__liff-cli/package.json)<br>[tsconfig.json](../../../../sources/line__liff-cli/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 22 | [src/setup.test.ts](../../../../sources/line__liff-cli/src/setup.test.ts)<br>[src/serve/resolveEndpointUrl.test.ts](../../../../sources/line__liff-cli/src/serve/resolveEndpointUrl.test.ts)<br>[src/serve/resolveProxy.test.ts](../../../../sources/line__liff-cli/src/serve/resolveProxy.test.ts)<br>[src/serve/serveAction.test.ts](../../../../sources/line__liff-cli/src/serve/serveAction.test.ts)<br>[src/serve/commands/index.test.ts](../../../../sources/line__liff-cli/src/serve/commands/index.test.ts)<br>[src/scaffold/scaffoldAction.test.ts](../../../../sources/line__liff-cli/src/scaffold/scaffoldAction.test.ts) |
| CI workflow | 3 | [.github/workflows/code-check.yml](../../../../sources/line__liff-cli/.github/workflows/code-check.yml)<br>[.github/workflows/publish.yml](../../../../sources/line__liff-cli/.github/workflows/publish.yml)<br>[.github/workflows/semantic-pull-request.yml](../../../../sources/line__liff-cli/.github/workflows/semantic-pull-request.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 2 | [src/api/auth.test.ts](../../../../sources/line__liff-cli/src/api/auth.test.ts)<br>[src/api/auth.ts](../../../../sources/line__liff-cli/src/api/auth.ts) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `src/cli.ts`, `package.json`, `tsconfig.json`.
2. entrypoint를 따라 실행 흐름 확인: `src/cli.ts`.
3. agent/tool runtime 매핑: `src/api/agent.ts`.
4. retrieval/memory/indexing 확인: `index.js`, `src/serve/commands/index.test.ts`, `src/serve/commands/index.ts`.
5. test/eval 파일로 동작 검증: `src/setup.test.ts`, `src/serve/resolveEndpointUrl.test.ts`, `src/serve/resolveProxy.test.ts`.

## 기존 레포 인사이트

개발 생산성/DevTools 관점에서 설명 메타데이터가 짧습니다. 핵심 구조 신호는 TypeScript, package.json, README.md, LICENSE, ci, docs이며, 소스+보고서 근거 수준으로 초기 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 개발 생산성/DevTools 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 더 깊은 구조 스캔 필요입니다.
