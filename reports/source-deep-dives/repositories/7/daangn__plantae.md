# daangn/plantae 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

Plantae is a Request & Response API based middleware generator compatible with the various http clients (Fetch, Ky, Axios)

## 요약

- 조사 단위: `sources/daangn__plantae` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 790 files, 28 directories, depth score 106, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 entrypoints=packages/plugin-timeout/src/index.ts, packages/plugin-retry/src/index.ts, packages/plantae/src/index.ts이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | daangn/plantae |
| 주제 | 일반 AI 오픈소스 / 일반 AI 오픈소스 |
| Region | korea |
| Language | TypeScript |
| Stars | 72 |
| Forks | 1 |
| License | MIT |
| 성숙도 | 초기 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/daangn__plantae](../../../../sources/daangn__plantae) |
| 기존 보고서 | [reports/korea-trending/repositories/daangn__plantae.md](../../../korea-trending/repositories/daangn__plantae.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 790 / 28 |
| 관측 최대 깊이 | 5 |
| 상위 디렉터리 | .changeset, .github, .yarn, packages |
| 상위 확장자 | .zip: 725, .ts: 19, .json: 13, (none): 10, .js: 8, .md: 7, .yml: 4, .cjs: 2, .lock: 1, .yaml: 1 |
| 소스 패턴 | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| packages/plantae | packages workspace | 16 |
| packages/plugin-retry | packages workspace | 5 |
| packages/plugin-timeout | packages workspace | 5 |
| .github | ci surface | 1 |
| packages | source boundary | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| build | package.json | build | ultra -r build |
| build | package.json | build:dts | ultra -r --build build:dts |
| utility | package.json | clean | ultra -r clean |
| quality | package.json | check | biome check |
| quality | package.json | format | biome format --write |
| quality | package.json | lint | biome lint |
| build | package.json | release | yarn build && yarn changeset publish |
| test | package.json | test | yarn build && ultra -r test |
| quality | package.json | typecheck | tsc --noEmit |
| utility | package.json | version | changeset version && yarn install --no-immutable |
| utility | package.json | version:snapshot | changeset version --snapshot main && yarn install --no-immutable |


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
| entrypoints | [packages/plugin-timeout/src/index.ts](../../../../sources/daangn__plantae/packages/plugin-timeout/src/index.ts) | entrypoints signal |
| entrypoints | [packages/plugin-retry/src/index.ts](../../../../sources/daangn__plantae/packages/plugin-retry/src/index.ts) | entrypoints signal |
| entrypoints | [packages/plantae/src/index.ts](../../../../sources/daangn__plantae/packages/plantae/src/index.ts) | entrypoints signal |
| entrypoints | [.yarn/sdks/typescript/bin/tsc](../../../../sources/daangn__plantae/.yarn/sdks/typescript/bin/tsc) | entrypoints signal |
| config | [package.json](../../../../sources/daangn__plantae/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/daangn__plantae/tsconfig.json) | config signal |
| config | [packages/plugin-timeout/package.json](../../../../sources/daangn__plantae/packages/plugin-timeout/package.json) | config signal |
| config | [packages/plugin-timeout/tsconfig.json](../../../../sources/daangn__plantae/packages/plugin-timeout/tsconfig.json) | config signal |
| docs | [packages/plugin-timeout/README.md](../../../../sources/daangn__plantae/packages/plugin-timeout/README.md) | docs signal |
| docs | [packages/plugin-retry/README.md](../../../../sources/daangn__plantae/packages/plugin-retry/README.md) | docs signal |
| docs | [packages/plantae/README.md](../../../../sources/daangn__plantae/packages/plantae/README.md) | docs signal |
| docs | [.changeset/README.md](../../../../sources/daangn__plantae/.changeset/README.md) | docs signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 6 | [packages/plugin-timeout/src/index.ts](../../../../sources/daangn__plantae/packages/plugin-timeout/src/index.ts)<br>[packages/plugin-retry/src/index.ts](../../../../sources/daangn__plantae/packages/plugin-retry/src/index.ts)<br>[packages/plantae/src/index.ts](../../../../sources/daangn__plantae/packages/plantae/src/index.ts)<br>[.yarn/sdks/typescript/bin/tsc](../../../../sources/daangn__plantae/.yarn/sdks/typescript/bin/tsc)<br>[.yarn/sdks/typescript/bin/tsserver](../../../../sources/daangn__plantae/.yarn/sdks/typescript/bin/tsserver)<br>[.yarn/sdks/eslint/bin/eslint.js](../../../../sources/daangn__plantae/.yarn/sdks/eslint/bin/eslint.js) |
| agentRuntime | 2 | [.yarn/cache/agent-base-npm-6.0.2-428f325a93-f52b6872cc.zip](../../../../sources/daangn__plantae/.yarn/cache/agent-base-npm-6.0.2-428f325a93-f52b6872cc.zip)<br>[.yarn/cache/agent-base-npm-7.1.0-4b12ba5111-f7828f9914.zip](../../../../sources/daangn__plantae/.yarn/cache/agent-base-npm-7.1.0-4b12ba5111-f7828f9914.zip) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 8 | [packages/plugin-timeout/src/index.ts](../../../../sources/daangn__plantae/packages/plugin-timeout/src/index.ts)<br>[packages/plugin-retry/src/index.ts](../../../../sources/daangn__plantae/packages/plugin-retry/src/index.ts)<br>[packages/plantae/src/index.ts](../../../../sources/daangn__plantae/packages/plantae/src/index.ts)<br>[packages/plantae/src/ky/index.ts](../../../../sources/daangn__plantae/packages/plantae/src/ky/index.ts)<br>[packages/plantae/src/fetch/index.ts](../../../../sources/daangn__plantae/packages/plantae/src/fetch/index.ts)<br>[packages/plantae/src/axios/index.ts](../../../../sources/daangn__plantae/packages/plantae/src/axios/index.ts)<br>[.yarn/sdks/prettier/index.js](../../../../sources/daangn__plantae/.yarn/sdks/prettier/index.js)<br>[.yarn/cache/@changesets-get-dependents-graph-npm-1.3.6-ddd5f64f78-d2cbbc5041.zip](../../../../sources/daangn__plantae/.yarn/cache/@changesets-get-dependents-graph-npm-1.3.6-ddd5f64f78-d2cbbc5041.zip) |
| spec | 3 | [packages/plantae/src/ky/createKyHooks.spec.ts](../../../../sources/daangn__plantae/packages/plantae/src/ky/createKyHooks.spec.ts)<br>[packages/plantae/src/fetch/createFetch.spec.ts](../../../../sources/daangn__plantae/packages/plantae/src/fetch/createFetch.spec.ts)<br>[packages/plantae/src/axios/createAxiosInterceptors.spec.ts](../../../../sources/daangn__plantae/packages/plantae/src/axios/createAxiosInterceptors.spec.ts) |
| eval | 6 | [packages/plantae/src/test/utils.ts](../../../../sources/daangn__plantae/packages/plantae/src/test/utils.ts)<br>[packages/plantae/src/test/worker.ts](../../../../sources/daangn__plantae/packages/plantae/src/test/worker.ts)<br>[packages/plantae/src/ky/createKyHooks.spec.ts](../../../../sources/daangn__plantae/packages/plantae/src/ky/createKyHooks.spec.ts)<br>[packages/plantae/src/fetch/createFetch.spec.ts](../../../../sources/daangn__plantae/packages/plantae/src/fetch/createFetch.spec.ts)<br>[packages/plantae/src/axios/createAxiosInterceptors.spec.ts](../../../../sources/daangn__plantae/packages/plantae/src/axios/createAxiosInterceptors.spec.ts)<br>[.yarn/cache/safe-regex-test-npm-1.0.0-e94a09b84e-bc566d8beb.zip](../../../../sources/daangn__plantae/.yarn/cache/safe-regex-test-npm-1.0.0-e94a09b84e-bc566d8beb.zip) |
| security | 0 | 명확하지 않음 |
| ci | 2 | [.github/workflows/ci.yml](../../../../sources/daangn__plantae/.github/workflows/ci.yml)<br>[.github/workflows/publish.yml](../../../../sources/daangn__plantae/.github/workflows/publish.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 4 | [packages/plugin-timeout/README.md](../../../../sources/daangn__plantae/packages/plugin-timeout/README.md)<br>[packages/plugin-retry/README.md](../../../../sources/daangn__plantae/packages/plugin-retry/README.md)<br>[packages/plantae/README.md](../../../../sources/daangn__plantae/packages/plantae/README.md)<br>[.changeset/README.md](../../../../sources/daangn__plantae/.changeset/README.md) |
| config | 11 | [package.json](../../../../sources/daangn__plantae/package.json)<br>[tsconfig.json](../../../../sources/daangn__plantae/tsconfig.json)<br>[packages/plugin-timeout/package.json](../../../../sources/daangn__plantae/packages/plugin-timeout/package.json)<br>[packages/plugin-timeout/tsconfig.json](../../../../sources/daangn__plantae/packages/plugin-timeout/tsconfig.json)<br>[packages/plugin-retry/package.json](../../../../sources/daangn__plantae/packages/plugin-retry/package.json)<br>[packages/plugin-retry/tsconfig.json](../../../../sources/daangn__plantae/packages/plugin-retry/tsconfig.json)<br>[packages/plantae/package.json](../../../../sources/daangn__plantae/packages/plantae/package.json)<br>[packages/plantae/tsconfig.json](../../../../sources/daangn__plantae/packages/plantae/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 6 | [packages/plantae/src/test/utils.ts](../../../../sources/daangn__plantae/packages/plantae/src/test/utils.ts)<br>[packages/plantae/src/test/worker.ts](../../../../sources/daangn__plantae/packages/plantae/src/test/worker.ts)<br>[packages/plantae/src/ky/createKyHooks.spec.ts](../../../../sources/daangn__plantae/packages/plantae/src/ky/createKyHooks.spec.ts)<br>[packages/plantae/src/fetch/createFetch.spec.ts](../../../../sources/daangn__plantae/packages/plantae/src/fetch/createFetch.spec.ts)<br>[packages/plantae/src/axios/createAxiosInterceptors.spec.ts](../../../../sources/daangn__plantae/packages/plantae/src/axios/createAxiosInterceptors.spec.ts)<br>[.yarn/cache/safe-regex-test-npm-1.0.0-e94a09b84e-bc566d8beb.zip](../../../../sources/daangn__plantae/.yarn/cache/safe-regex-test-npm-1.0.0-e94a09b84e-bc566d8beb.zip) |
| CI workflow | 2 | [.github/workflows/ci.yml](../../../../sources/daangn__plantae/.github/workflows/ci.yml)<br>[.github/workflows/publish.yml](../../../../sources/daangn__plantae/.github/workflows/publish.yml) |
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

1. 핵심 참조에서 시작: `packages/plugin-timeout/src/index.ts`, `packages/plugin-retry/src/index.ts`, `packages/plantae/src/index.ts`.
2. entrypoint를 따라 실행 흐름 확인: `packages/plugin-timeout/src/index.ts`, `packages/plugin-retry/src/index.ts`, `packages/plantae/src/index.ts`.
3. agent/tool runtime 매핑: `.yarn/cache/agent-base-npm-6.0.2-428f325a93-f52b6872cc.zip`, `.yarn/cache/agent-base-npm-7.1.0-4b12ba5111-f7828f9914.zip`.
4. retrieval/memory/indexing 확인: `packages/plugin-timeout/src/index.ts`, `packages/plugin-retry/src/index.ts`, `packages/plantae/src/index.ts`.
5. test/eval 파일로 동작 검증: `packages/plantae/src/test/utils.ts`, `packages/plantae/src/test/worker.ts`, `packages/plantae/src/ky/createKyHooks.spec.ts`.

## 기존 레포 인사이트

일반 AI 오픈소스 관점에서 Plantae is a Request & Response API based middleware generator compatible with the various http clients Fetch, Ky, Axios. 핵심 구조 신호는 TypeScript, package.json, LICENSE, ci이며, 소스+보고서 근거 수준으로 초기 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 더 깊은 구조 스캔 필요입니다.
