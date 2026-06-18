# toss/docflow 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

A TypeScript-first documentation generator from JSDoc comments

## 요약

- 조사 단위: `sources/toss__docflow` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 224 files, 87 directories, depth score 101, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 entrypoints=packages/cli/src/cli.ts, packages/cli/src/index.ts, packages/cli/bin/cli.js이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | toss/docflow |
| 주제 | 일반 AI 오픈소스 / 일반 AI 오픈소스 |
| Region | korea |
| Language | TypeScript |
| Stars | 106 |
| Forks | 13 |
| License | MIT |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/toss__docflow](../../../../sources/toss__docflow) |
| 기존 보고서 | [reports/korea-trending/repositories/toss__docflow.md](../../../korea-trending/repositories/toss__docflow.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 224 / 87 |
| 관측 최대 깊이 | 9 |
| 상위 디렉터리 | .changeset, .github, .yarn, docs, packages |
| 상위 확장자 | .ts: 95, .md: 72, .json: 11, .js: 10, (none): 9, .mts: 7, .png: 7, .yml: 5, .cjs: 4, .css: 1, .gif: 1, .lock: 1 |
| 소스 패턴 | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| packages/cli | packages workspace | 73 |
| docs | documentation surface | 43 |
| .github | ci surface | 1 |
| packages | source boundary | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| quality | package.json | lint | yarn workspaces foreach -ptR --from 'packages/*' run lint |
| quality | package.json | typecheck | yarn workspaces foreach -ptR --from 'packages/*' run typecheck |
| build | package.json | build | yarn workspaces foreach -ptR --from 'packages/*' run build |
| test | package.json | test | yarn workspaces foreach -ptR --from 'packages/*' run test |
| quality | package.json | format | prettier --write 'packages/**/*' 'docs/**/*.{ts,tsx,js,jsx,json}' |
| quality | package.json | format:check | prettier --check 'packages/**/*' 'docs/**/*.{ts,tsx,js,jsx,json}' |
| utility | package.json | changeset:version | changeset version |
| utility | package.json | changeset:publish | changeset publish |


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
| entrypoints | [packages/cli/src/cli.ts](../../../../sources/toss__docflow/packages/cli/src/cli.ts) | entrypoints signal |
| entrypoints | [packages/cli/src/index.ts](../../../../sources/toss__docflow/packages/cli/src/index.ts) | entrypoints signal |
| entrypoints | [packages/cli/bin/cli.js](../../../../sources/toss__docflow/packages/cli/bin/cli.js) | entrypoints signal |
| entrypoints | [.yarn/sdks/typescript/bin/tsc](../../../../sources/toss__docflow/.yarn/sdks/typescript/bin/tsc) | entrypoints signal |
| config | [package.json](../../../../sources/toss__docflow/package.json) | config signal |
| config | [packages/cli/package.json](../../../../sources/toss__docflow/packages/cli/package.json) | config signal |
| config | [packages/cli/tsconfig.json](../../../../sources/toss__docflow/packages/cli/tsconfig.json) | config signal |
| config | [docs/package.json](../../../../sources/toss__docflow/docs/package.json) | config signal |
| docs | [README-ko_kr.md](../../../../sources/toss__docflow/README-ko_kr.md) | docs signal |
| docs | [README.md](../../../../sources/toss__docflow/README.md) | docs signal |
| docs | [packages/cli/README.md](../../../../sources/toss__docflow/packages/cli/README.md) | docs signal |
| docs | [docs/index.md](../../../../sources/toss__docflow/docs/index.md) | docs signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 7 | [packages/cli/src/cli.ts](../../../../sources/toss__docflow/packages/cli/src/cli.ts)<br>[packages/cli/src/index.ts](../../../../sources/toss__docflow/packages/cli/src/index.ts)<br>[packages/cli/bin/cli.js](../../../../sources/toss__docflow/packages/cli/bin/cli.js)<br>[.yarn/sdks/typescript/bin/tsc](../../../../sources/toss__docflow/.yarn/sdks/typescript/bin/tsc)<br>[.yarn/sdks/typescript/bin/tsserver](../../../../sources/toss__docflow/.yarn/sdks/typescript/bin/tsserver)<br>[.yarn/sdks/prettier/bin/prettier.cjs](../../../../sources/toss__docflow/.yarn/sdks/prettier/bin/prettier.cjs)<br>[.yarn/sdks/eslint/bin/eslint.js](../../../../sources/toss__docflow/.yarn/sdks/eslint/bin/eslint.js) |
| agentRuntime | 1 | [packages/cli/src/tests/e2e/workflow.e2e.spec.ts](../../../../sources/toss__docflow/packages/cli/src/tests/e2e/workflow.e2e.spec.ts) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 9 | [packages/cli/src/index.ts](../../../../sources/toss__docflow/packages/cli/src/index.ts)<br>[packages/cli/src/commands/generate/index.ts](../../../../sources/toss__docflow/packages/cli/src/commands/generate/index.ts)<br>[packages/cli/src/commands/check/index.ts](../../../../sources/toss__docflow/packages/cli/src/commands/check/index.ts)<br>[docs/index.md](../../../../sources/toss__docflow/docs/index.md)<br>[docs/ko/index.md](../../../../sources/toss__docflow/docs/ko/index.md)<br>[docs/en/index.md](../../../../sources/toss__docflow/docs/en/index.md)<br>[docs/.vitepress/theme/index.ts](../../../../sources/toss__docflow/docs/.vitepress/theme/index.ts)<br>[.yarn/sdks/prettier/index.cjs](../../../../sources/toss__docflow/.yarn/sdks/prettier/index.cjs) |
| spec | 26 | [packages/cli/src/tests/plugin/plugin-loader.spec.ts](../../../../sources/toss__docflow/packages/cli/src/tests/plugin/plugin-loader.spec.ts)<br>[packages/cli/src/tests/plugin/plugin-manager.spec.ts](../../../../sources/toss__docflow/packages/cli/src/tests/plugin/plugin-manager.spec.ts)<br>[packages/cli/src/tests/package-manager/package-manager.spec.ts](../../../../sources/toss__docflow/packages/cli/src/tests/package-manager/package-manager.spec.ts)<br>[packages/cli/src/tests/e2e/workflow.e2e.spec.ts](../../../../sources/toss__docflow/packages/cli/src/tests/e2e/workflow.e2e.spec.ts)<br>[packages/cli/src/tests/core/entry-point.spec.ts](../../../../sources/toss__docflow/packages/cli/src/tests/core/entry-point.spec.ts)<br>[packages/cli/src/tests/core/get-ts-config-path.spec.ts](../../../../sources/toss__docflow/packages/cli/src/tests/core/get-ts-config-path.spec.ts)<br>[packages/cli/src/tests/core/get-ts-project.spec.ts](../../../../sources/toss__docflow/packages/cli/src/tests/core/get-ts-project.spec.ts)<br>[packages/cli/src/tests/core/parser/source/exclude-barrel-re-exports.spec.ts](../../../../sources/toss__docflow/packages/cli/src/tests/core/parser/source/exclude-barrel-re-exports.spec.ts) |
| eval | 37 | [packages/cli/src/tests/utils/create-e2e-workspace.ts](../../../../sources/toss__docflow/packages/cli/src/tests/utils/create-e2e-workspace.ts)<br>[packages/cli/src/tests/utils/create-test-workspace.ts](../../../../sources/toss__docflow/packages/cli/src/tests/utils/create-test-workspace.ts)<br>[packages/cli/src/tests/utils/create-ts-source-file.ts](../../../../sources/toss__docflow/packages/cli/src/tests/utils/create-ts-source-file.ts)<br>[packages/cli/src/tests/utils/docflow-config.ts](../../../../sources/toss__docflow/packages/cli/src/tests/utils/docflow-config.ts)<br>[packages/cli/src/tests/utils/generator-config.ts](../../../../sources/toss__docflow/packages/cli/src/tests/utils/generator-config.ts)<br>[packages/cli/src/tests/utils/package-creators.ts](../../../../sources/toss__docflow/packages/cli/src/tests/utils/package-creators.ts)<br>[packages/cli/src/tests/utils/parse-jsdoc-from-node.ts](../../../../sources/toss__docflow/packages/cli/src/tests/utils/parse-jsdoc-from-node.ts)<br>[packages/cli/src/tests/utils/plugin-mocks.ts](../../../../sources/toss__docflow/packages/cli/src/tests/utils/plugin-mocks.ts) |
| security | 0 | 명확하지 않음 |
| ci | 3 | [.github/workflows/ci.yml](../../../../sources/toss__docflow/.github/workflows/ci.yml)<br>[.github/workflows/deploy-docs.yml](../../../../sources/toss__docflow/.github/workflows/deploy-docs.yml)<br>[.github/workflows/release.yml](../../../../sources/toss__docflow/.github/workflows/release.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 90 | [README-ko_kr.md](../../../../sources/toss__docflow/README-ko_kr.md)<br>[README.md](../../../../sources/toss__docflow/README.md)<br>[packages/cli/README.md](../../../../sources/toss__docflow/packages/cli/README.md)<br>[docs/index.md](../../../../sources/toss__docflow/docs/index.md)<br>[docs/package.json](../../../../sources/toss__docflow/docs/package.json)<br>[docs/README.md](../../../../sources/toss__docflow/docs/README.md)<br>[docs/public/hero.png](../../../../sources/toss__docflow/docs/public/hero.png)<br>[docs/public/logo.png](../../../../sources/toss__docflow/docs/public/logo.png) |
| config | 7 | [package.json](../../../../sources/toss__docflow/package.json)<br>[packages/cli/package.json](../../../../sources/toss__docflow/packages/cli/package.json)<br>[packages/cli/tsconfig.json](../../../../sources/toss__docflow/packages/cli/tsconfig.json)<br>[docs/package.json](../../../../sources/toss__docflow/docs/package.json)<br>[.yarn/sdks/typescript/package.json](../../../../sources/toss__docflow/.yarn/sdks/typescript/package.json)<br>[.yarn/sdks/prettier/package.json](../../../../sources/toss__docflow/.yarn/sdks/prettier/package.json)<br>[.yarn/sdks/eslint/package.json](../../../../sources/toss__docflow/.yarn/sdks/eslint/package.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 37 | [packages/cli/src/tests/utils/create-e2e-workspace.ts](../../../../sources/toss__docflow/packages/cli/src/tests/utils/create-e2e-workspace.ts)<br>[packages/cli/src/tests/utils/create-test-workspace.ts](../../../../sources/toss__docflow/packages/cli/src/tests/utils/create-test-workspace.ts)<br>[packages/cli/src/tests/utils/create-ts-source-file.ts](../../../../sources/toss__docflow/packages/cli/src/tests/utils/create-ts-source-file.ts)<br>[packages/cli/src/tests/utils/docflow-config.ts](../../../../sources/toss__docflow/packages/cli/src/tests/utils/docflow-config.ts)<br>[packages/cli/src/tests/utils/generator-config.ts](../../../../sources/toss__docflow/packages/cli/src/tests/utils/generator-config.ts)<br>[packages/cli/src/tests/utils/package-creators.ts](../../../../sources/toss__docflow/packages/cli/src/tests/utils/package-creators.ts) |
| CI workflow | 3 | [.github/workflows/ci.yml](../../../../sources/toss__docflow/.github/workflows/ci.yml)<br>[.github/workflows/deploy-docs.yml](../../../../sources/toss__docflow/.github/workflows/deploy-docs.yml)<br>[.github/workflows/release.yml](../../../../sources/toss__docflow/.github/workflows/release.yml) |
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

1. 핵심 참조에서 시작: `packages/cli/src/cli.ts`, `packages/cli/src/index.ts`, `packages/cli/bin/cli.js`.
2. entrypoint를 따라 실행 흐름 확인: `packages/cli/src/cli.ts`, `packages/cli/src/index.ts`, `packages/cli/bin/cli.js`.
3. agent/tool runtime 매핑: `packages/cli/src/tests/e2e/workflow.e2e.spec.ts`.
4. retrieval/memory/indexing 확인: `packages/cli/src/index.ts`, `packages/cli/src/commands/generate/index.ts`, `packages/cli/src/commands/check/index.ts`.
5. test/eval 파일로 동작 검증: `packages/cli/src/tests/utils/create-e2e-workspace.ts`, `packages/cli/src/tests/utils/create-test-workspace.ts`, `packages/cli/src/tests/utils/create-ts-source-file.ts`.

## 기존 레포 인사이트

일반 AI 오픈소스 관점에서 A TypeScript first documentation generator from JSDoc comments. 핵심 구조 신호는 TypeScript, package.json, README.md, LICENSE, ci, docs이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 더 깊은 구조 스캔 필요입니다.
