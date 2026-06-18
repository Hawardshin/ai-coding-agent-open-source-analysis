# toss/packlint 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

Lint Package.json in large JavaScript Monorepos

## 요약

- 조사 단위: `sources/toss__packlint` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 92 files, 29 directories, depth score 90, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 entrypoints=packages/core/src/index.ts, packages/command/src/index.ts, packages/cli/src/index.ts이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | toss/packlint |
| 주제 | 일반 AI 오픈소스 / 일반 AI 오픈소스 |
| Region | korea |
| Language | TypeScript |
| Stars | 35 |
| Forks | 5 |
| License | MIT |
| 성숙도 | 초기 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/toss__packlint](../../../../sources/toss__packlint) |
| 기존 보고서 | [reports/korea-trending/repositories/toss__packlint.md](../../../korea-trending/repositories/toss__packlint.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 92 / 29 |
| 관측 최대 깊이 | 6 |
| 상위 디렉터리 | .changeset, .github, .yarn, packages |
| 상위 확장자 | .ts: 39, .json: 13, .js: 10, .md: 9, (none): 8, .mjs: 4, .yml: 4, .cjs: 3, .lock: 1, .toml: 1 |
| 소스 패턴 | monorepo/workspace, cli-first, api/server, retrieval/vector path, spec/docs-driven, eval/test harness |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| packages/command | packages workspace | 11 |
| packages/core | packages workspace | 9 |
| packages/cli | packages workspace | 8 |
| .github | ci surface | 1 |
| packages | source boundary | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| build | package.json | build | turbo run build |
| serve-dev | package.json | dev | turbo run dev |
| quality | package.json | typecheck | turbo run typecheck |
| utility | package.json | changeset:publish | changeset publish |
| utility | package.json | changeset:version | changeset version |
| quality | package.json | lint:all | yarn eslint --fix |
| quality | package.json | packlint:all | yarn packlint -R |
| utility | package.json | prepack | turbo run prepack |
| test | package.json | test:all | yarn vitest run |


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
| entrypoints | [packages/core/src/index.ts](../../../../sources/toss__packlint/packages/core/src/index.ts) | entrypoints signal |
| entrypoints | [packages/command/src/index.ts](../../../../sources/toss__packlint/packages/command/src/index.ts) | entrypoints signal |
| entrypoints | [packages/cli/src/index.ts](../../../../sources/toss__packlint/packages/cli/src/index.ts) | entrypoints signal |
| entrypoints | [packages/cli/src/main.ts](../../../../sources/toss__packlint/packages/cli/src/main.ts) | entrypoints signal |
| config | [package.json](../../../../sources/toss__packlint/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/toss__packlint/tsconfig.json) | config signal |
| config | [turbo.json](../../../../sources/toss__packlint/turbo.json) | config signal |
| config | [packages/core/package.json](../../../../sources/toss__packlint/packages/core/package.json) | config signal |
| docs | [README.md](../../../../sources/toss__packlint/README.md) | docs signal |
| docs | [packages/core/README.md](../../../../sources/toss__packlint/packages/core/README.md) | docs signal |
| docs | [packages/command/README.md](../../../../sources/toss__packlint/packages/command/README.md) | docs signal |
| docs | [packages/cli/README.md](../../../../sources/toss__packlint/packages/cli/README.md) | docs signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 9 | [packages/core/src/index.ts](../../../../sources/toss__packlint/packages/core/src/index.ts)<br>[packages/command/src/index.ts](../../../../sources/toss__packlint/packages/command/src/index.ts)<br>[packages/cli/src/index.ts](../../../../sources/toss__packlint/packages/cli/src/index.ts)<br>[packages/cli/src/main.ts](../../../../sources/toss__packlint/packages/cli/src/main.ts)<br>[packages/cli/bin/index.js](../../../../sources/toss__packlint/packages/cli/bin/index.js)<br>[.yarn/sdks/typescript/bin/tsc](../../../../sources/toss__packlint/.yarn/sdks/typescript/bin/tsc)<br>[.yarn/sdks/typescript/bin/tsserver](../../../../sources/toss__packlint/.yarn/sdks/typescript/bin/tsserver)<br>[.yarn/sdks/prettier/bin/prettier.cjs](../../../../sources/toss__packlint/.yarn/sdks/prettier/bin/prettier.cjs) |
| agentRuntime | 0 | 명확하지 않음 |
| mcp | 0 | 명확하지 않음 |
| retrieval | 12 | [packages/core/src/index.ts](../../../../sources/toss__packlint/packages/core/src/index.ts)<br>[packages/core/src/testing/index.ts](../../../../sources/toss__packlint/packages/core/src/testing/index.ts)<br>[packages/core/src/operations/index.ts](../../../../sources/toss__packlint/packages/core/src/operations/index.ts)<br>[packages/core/src/models/index.ts](../../../../sources/toss__packlint/packages/core/src/models/index.ts)<br>[packages/core/src/contexts/index.ts](../../../../sources/toss__packlint/packages/core/src/contexts/index.ts)<br>[packages/command/src/index.ts](../../../../sources/toss__packlint/packages/command/src/index.ts)<br>[packages/command/src/operations/index.ts](../../../../sources/toss__packlint/packages/command/src/operations/index.ts)<br>[packages/command/src/commands/index.ts](../../../../sources/toss__packlint/packages/command/src/commands/index.ts) |
| spec | 2 | [packages/command/src/operations/merge-package-json.spec.ts](../../../../sources/toss__packlint/packages/command/src/operations/merge-package-json.spec.ts)<br>[packages/command/src/operations/sort-package-json.spec.ts](../../../../sources/toss__packlint/packages/command/src/operations/sort-package-json.spec.ts) |
| eval | 2 | [packages/command/src/operations/merge-package-json.spec.ts](../../../../sources/toss__packlint/packages/command/src/operations/merge-package-json.spec.ts)<br>[packages/command/src/operations/sort-package-json.spec.ts](../../../../sources/toss__packlint/packages/command/src/operations/sort-package-json.spec.ts) |
| security | 0 | 명확하지 않음 |
| ci | 2 | [.github/workflows/ci.yml](../../../../sources/toss__packlint/.github/workflows/ci.yml)<br>[.github/workflows/release.yml](../../../../sources/toss__packlint/.github/workflows/release.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 5 | [README.md](../../../../sources/toss__packlint/README.md)<br>[packages/core/README.md](../../../../sources/toss__packlint/packages/core/README.md)<br>[packages/command/README.md](../../../../sources/toss__packlint/packages/command/README.md)<br>[packages/cli/README.md](../../../../sources/toss__packlint/packages/cli/README.md)<br>[.changeset/README.md](../../../../sources/toss__packlint/.changeset/README.md) |
| config | 12 | [package.json](../../../../sources/toss__packlint/package.json)<br>[tsconfig.json](../../../../sources/toss__packlint/tsconfig.json)<br>[turbo.json](../../../../sources/toss__packlint/turbo.json)<br>[packages/core/package.json](../../../../sources/toss__packlint/packages/core/package.json)<br>[packages/core/tsconfig.json](../../../../sources/toss__packlint/packages/core/tsconfig.json)<br>[packages/command/package.json](../../../../sources/toss__packlint/packages/command/package.json)<br>[packages/command/tsconfig.json](../../../../sources/toss__packlint/packages/command/tsconfig.json)<br>[packages/cli/package.json](../../../../sources/toss__packlint/packages/cli/package.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 2 | [packages/command/src/operations/merge-package-json.spec.ts](../../../../sources/toss__packlint/packages/command/src/operations/merge-package-json.spec.ts)<br>[packages/command/src/operations/sort-package-json.spec.ts](../../../../sources/toss__packlint/packages/command/src/operations/sort-package-json.spec.ts) |
| CI workflow | 2 | [.github/workflows/ci.yml](../../../../sources/toss__packlint/.github/workflows/ci.yml)<br>[.github/workflows/release.yml](../../../../sources/toss__packlint/.github/workflows/release.yml) |
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

1. 핵심 참조에서 시작: `packages/core/src/index.ts`, `packages/command/src/index.ts`, `packages/cli/src/index.ts`.
2. entrypoint를 따라 실행 흐름 확인: `packages/core/src/index.ts`, `packages/command/src/index.ts`, `packages/cli/src/index.ts`.
3. retrieval/memory/indexing 확인: `packages/core/src/index.ts`, `packages/core/src/testing/index.ts`, `packages/core/src/operations/index.ts`.
4. test/eval 파일로 동작 검증: `packages/command/src/operations/merge-package-json.spec.ts`, `packages/command/src/operations/sort-package-json.spec.ts`.

## 기존 레포 인사이트

일반 AI 오픈소스 관점에서 Lint Package.json in large JavaScript Monorepos. 핵심 구조 신호는 TypeScript, package.json, README.md, LICENSE, ci, docs이며, 소스+보고서 근거 수준으로 초기 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 더 깊은 구조 스캔 필요입니다.
