# daangn/graplix 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

Authorization framework for implementing Relation-based Access Control (ReBAC) with the Resolver (Inspired by GraphQL)

## 요약

- 조사 단위: `sources/daangn__graplix` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 114 files, 24 directories, depth score 91, key references 8개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

보안/거버넌스/안전 관점에서 monorepo/workspace, cli-first, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 instruction=CLAUDE.md이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 8개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | daangn/graplix |
| 주제 | 보안/거버넌스/안전 / 보안/거버넌스/안전 |
| Region | korea |
| Language | TypeScript |
| Stars | 92 |
| Forks | 6 |
| License | MIT |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/daangn__graplix](../../../../sources/daangn__graplix) |
| 기존 보고서 | [reports/korea-trending/repositories/daangn__graplix.md](../../../korea-trending/repositories/daangn__graplix.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 114 / 24 |
| 관측 최대 깊이 | 5 |
| 상위 디렉터리 | .changeset, .github, .tech-specs, .yarn, packages, scripts, skill |
| 상위 확장자 | .ts: 51, .json: 18, .md: 18, .graplix: 14, (none): 8, .yml: 2, .cjs: 1, .langium: 1, .lock: 1 |
| 소스 패턴 | monorepo/workspace, cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| packages/language | packages workspace | 9 |
| packages/codegen | packages workspace | 8 |
| packages/engine | packages workspace | 7 |
| packages/vscode-extension | packages workspace | 3 |
| .github | ci surface | 1 |
| packages | source boundary | 1 |
| scripts | top-level component | 1 |
| skill | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| build | package.json | build | ultra -r build |
| build | package.json | build:docs | yarn workspace @graplix/engine build:docs |
| utility | package.json | changeset:publish | changeset publish |
| utility | package.json | changeset:version | changeset version && yarn install --mode update-lockfile |
| quality | package.json | format | biome check --fix --unsafe |
| test | package.json | test | ultra -r test |


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
| instruction | [CLAUDE.md](../../../../sources/daangn__graplix/CLAUDE.md) | instruction signal |
| ci | [.github/workflows/deploy-packages.yml](../../../../sources/daangn__graplix/.github/workflows/deploy-packages.yml) | ci signal |
| config | [package.json](../../../../sources/daangn__graplix/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/daangn__graplix/tsconfig.json) | config signal |
| config | [packages/vscode-extension/package.json](../../../../sources/daangn__graplix/packages/vscode-extension/package.json) | config signal |
| config | [packages/vscode-extension/tsconfig.json](../../../../sources/daangn__graplix/packages/vscode-extension/tsconfig.json) | config signal |
| eval | [packages/language/src/parse.spec.ts](../../../../sources/daangn__graplix/packages/language/src/parse.spec.ts) | eval support |
| eval | [packages/language/src/validator.spec.ts](../../../../sources/daangn__graplix/packages/language/src/validator.spec.ts) | eval support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 4 | [packages/language/src/index.ts](../../../../sources/daangn__graplix/packages/language/src/index.ts)<br>[packages/engine/src/index.ts](../../../../sources/daangn__graplix/packages/engine/src/index.ts)<br>[packages/codegen/src/cli.ts](../../../../sources/daangn__graplix/packages/codegen/src/cli.ts)<br>[packages/codegen/src/index.ts](../../../../sources/daangn__graplix/packages/codegen/src/index.ts) |
| agentRuntime | 6 | [skill/README.md](../../../../sources/daangn__graplix/skill/README.md)<br>[skill/SKILL.md](../../../../sources/daangn__graplix/skill/SKILL.md)<br>[skill/references/common-errors.md](../../../../sources/daangn__graplix/skill/references/common-errors.md)<br>[skill/references/embedded-docs.md](../../../../sources/daangn__graplix/skill/references/embedded-docs.md)<br>[skill/references/quick-start.md](../../../../sources/daangn__graplix/skill/references/quick-start.md)<br>[skill/references/schema-syntax.md](../../../../sources/daangn__graplix/skill/references/schema-syntax.md) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 3 | [packages/language/src/index.ts](../../../../sources/daangn__graplix/packages/language/src/index.ts)<br>[packages/engine/src/index.ts](../../../../sources/daangn__graplix/packages/engine/src/index.ts)<br>[packages/codegen/src/index.ts](../../../../sources/daangn__graplix/packages/codegen/src/index.ts) |
| spec | 4 | [packages/language/src/parse.spec.ts](../../../../sources/daangn__graplix/packages/language/src/parse.spec.ts)<br>[packages/language/src/validator.spec.ts](../../../../sources/daangn__graplix/packages/language/src/validator.spec.ts)<br>[packages/engine/src/buildEngine.spec.ts](../../../../sources/daangn__graplix/packages/engine/src/buildEngine.spec.ts)<br>[packages/codegen/src/generate.spec.ts](../../../../sources/daangn__graplix/packages/codegen/src/generate.spec.ts) |
| eval | 4 | [packages/language/src/parse.spec.ts](../../../../sources/daangn__graplix/packages/language/src/parse.spec.ts)<br>[packages/language/src/validator.spec.ts](../../../../sources/daangn__graplix/packages/language/src/validator.spec.ts)<br>[packages/engine/src/buildEngine.spec.ts](../../../../sources/daangn__graplix/packages/engine/src/buildEngine.spec.ts)<br>[packages/codegen/src/generate.spec.ts](../../../../sources/daangn__graplix/packages/codegen/src/generate.spec.ts) |
| security | 0 | 명확하지 않음 |
| ci | 1 | [.github/workflows/deploy-packages.yml](../../../../sources/daangn__graplix/.github/workflows/deploy-packages.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 1 | [CLAUDE.md](../../../../sources/daangn__graplix/CLAUDE.md) |
| docs | 7 | [README.md](../../../../sources/daangn__graplix/README.md)<br>[skill/README.md](../../../../sources/daangn__graplix/skill/README.md)<br>[packages/vscode-extension/README.md](../../../../sources/daangn__graplix/packages/vscode-extension/README.md)<br>[packages/language/README.md](../../../../sources/daangn__graplix/packages/language/README.md)<br>[packages/engine/README.md](../../../../sources/daangn__graplix/packages/engine/README.md)<br>[packages/codegen/README.md](../../../../sources/daangn__graplix/packages/codegen/README.md)<br>[.changeset/README.md](../../../../sources/daangn__graplix/.changeset/README.md) |
| config | 10 | [package.json](../../../../sources/daangn__graplix/package.json)<br>[tsconfig.json](../../../../sources/daangn__graplix/tsconfig.json)<br>[packages/vscode-extension/package.json](../../../../sources/daangn__graplix/packages/vscode-extension/package.json)<br>[packages/vscode-extension/tsconfig.json](../../../../sources/daangn__graplix/packages/vscode-extension/tsconfig.json)<br>[packages/language/package.json](../../../../sources/daangn__graplix/packages/language/package.json)<br>[packages/language/tsconfig.json](../../../../sources/daangn__graplix/packages/language/tsconfig.json)<br>[packages/engine/package.json](../../../../sources/daangn__graplix/packages/engine/package.json)<br>[packages/engine/tsconfig.json](../../../../sources/daangn__graplix/packages/engine/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 4 | [packages/language/src/parse.spec.ts](../../../../sources/daangn__graplix/packages/language/src/parse.spec.ts)<br>[packages/language/src/validator.spec.ts](../../../../sources/daangn__graplix/packages/language/src/validator.spec.ts)<br>[packages/engine/src/buildEngine.spec.ts](../../../../sources/daangn__graplix/packages/engine/src/buildEngine.spec.ts)<br>[packages/codegen/src/generate.spec.ts](../../../../sources/daangn__graplix/packages/codegen/src/generate.spec.ts) |
| CI workflow | 1 | [.github/workflows/deploy-packages.yml](../../../../sources/daangn__graplix/.github/workflows/deploy-packages.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 1 | [CLAUDE.md](../../../../sources/daangn__graplix/CLAUDE.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `CLAUDE.md`, `.github/workflows/deploy-packages.yml`, `package.json`.
2. entrypoint를 따라 실행 흐름 확인: `packages/language/src/index.ts`, `packages/engine/src/index.ts`, `packages/codegen/src/cli.ts`.
3. agent/tool runtime 매핑: `skill/README.md`, `skill/SKILL.md`, `skill/references/common-errors.md`.
4. retrieval/memory/indexing 확인: `packages/language/src/index.ts`, `packages/engine/src/index.ts`, `packages/codegen/src/index.ts`.
5. test/eval 파일로 동작 검증: `packages/language/src/parse.spec.ts`, `packages/language/src/validator.spec.ts`, `packages/engine/src/buildEngine.spec.ts`.

## 기존 레포 인사이트

보안/거버넌스/안전 관점에서 Authorization framework for implementing Relation based Access Control ReBAC with the Resolver Inspired by GraphQL. 핵심 구조 신호는 TypeScript, package.json, README.md, CLAUDE.md, LICENSE, tests이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 보안/거버넌스/안전 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 더 깊은 구조 스캔 필요입니다.
