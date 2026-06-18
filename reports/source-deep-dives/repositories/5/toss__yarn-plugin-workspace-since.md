# toss/yarn-plugin-workspace-since 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

모노레포를 위한 yarn berry plugin

## 요약

- 조사 단위: `sources/toss__yarn-plugin-workspace-since` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 624 files, 19 directories, depth score 89, key references 11개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 cli-first, api/server, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 entrypoints=.yarn/sdks/typescript/bin/tsc, .yarn/sdks/typescript/bin/tsserver이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 11개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | toss/yarn-plugin-workspace-since |
| 주제 | 일반 AI 오픈소스 / 일반 AI 오픈소스 |
| Region | korea |
| Language | TypeScript |
| Stars | 189 |
| Forks | 14 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/toss__yarn-plugin-workspace-since](../../../../sources/toss__yarn-plugin-workspace-since) |
| 기존 보고서 | [reports/korea-trending/repositories/toss__yarn-plugin-workspace-since.md](../../../korea-trending/repositories/toss__yarn-plugin-workspace-since.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 624 / 19 |
| 관측 최대 깊이 | 5 |
| 상위 디렉터리 | .yarn, bundles, sources, testing |
| 상위 확장자 | .zip: 572, .ts: 31, .js: 6, (none): 4, .cjs: 3, .json: 3, .yml: 2, .lock: 1, .md: 1, .mjs: 1 |
| 소스 패턴 | cli-first, api/server, retrieval/vector path, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| bundles | top-level component | 1 |
| sources | top-level component | 1 |
| testing | validation surface | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| test | package.json | test | jest |
| build | package.json | build | builder build plugin |
| quality | package.json | typecheck | tsc --noEmit --project tsconfig.json |


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
| entrypoints | [.yarn/sdks/typescript/bin/tsc](../../../../sources/toss__yarn-plugin-workspace-since/.yarn/sdks/typescript/bin/tsc) | entrypoints signal |
| entrypoints | [.yarn/sdks/typescript/bin/tsserver](../../../../sources/toss__yarn-plugin-workspace-since/.yarn/sdks/typescript/bin/tsserver) | entrypoints signal |
| config | [package.json](../../../../sources/toss__yarn-plugin-workspace-since/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/toss__yarn-plugin-workspace-since/tsconfig.json) | config signal |
| config | [.yarn/sdks/typescript/package.json](../../../../sources/toss__yarn-plugin-workspace-since/.yarn/sdks/typescript/package.json) | config signal |
| docs | [README.md](../../../../sources/toss__yarn-plugin-workspace-since/README.md) | docs signal |
| eval | [sources/Workspace/getWorkspacesList.test.ts](../../../../sources/toss__yarn-plugin-workspace-since/sources/Workspace/getWorkspacesList.test.ts) | eval signal |
| eval | [sources/getUpdatedWorkspaces/distinct.test.ts](../../../../sources/toss__yarn-plugin-workspace-since/sources/getUpdatedWorkspaces/distinct.test.ts) | eval signal |
| eval | [sources/getUpdatedWorkspaces/getDependentWorkspace.test.ts](../../../../sources/toss__yarn-plugin-workspace-since/sources/getUpdatedWorkspaces/getDependentWorkspace.test.ts) | eval signal |
| eval | [sources/getUpdatedWorkspaces/getUpdatedWorkspaces.test.ts](../../../../sources/toss__yarn-plugin-workspace-since/sources/getUpdatedWorkspaces/getUpdatedWorkspaces.test.ts) | eval signal |
| manifest-entrypoint | [sources/index.ts](../../../../sources/toss__yarn-plugin-workspace-since/sources/index.ts) | package manifest entrypoint |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 2 | [.yarn/sdks/typescript/bin/tsc](../../../../sources/toss__yarn-plugin-workspace-since/.yarn/sdks/typescript/bin/tsc)<br>[.yarn/sdks/typescript/bin/tsserver](../../../../sources/toss__yarn-plugin-workspace-since/.yarn/sdks/typescript/bin/tsserver) |
| agentRuntime | 0 | 명확하지 않음 |
| mcp | 0 | 명확하지 않음 |
| retrieval | 5 | [sources/index.ts](../../../../sources/toss__yarn-plugin-workspace-since/sources/index.ts)<br>[sources/PackageJson/index.ts](../../../../sources/toss__yarn-plugin-workspace-since/sources/PackageJson/index.ts)<br>[sources/getUpdatedWorkspaces/index.ts](../../../../sources/toss__yarn-plugin-workspace-since/sources/getUpdatedWorkspaces/index.ts)<br>[sources/ConventionalCommits/index.ts](../../../../sources/toss__yarn-plugin-workspace-since/sources/ConventionalCommits/index.ts)<br>[.yarn/cache/@algolia-cache-in-memory-npm-4.20.0-0cf4013dd0-3d67dcfae4.zip](../../../../sources/toss__yarn-plugin-workspace-since/.yarn/cache/@algolia-cache-in-memory-npm-4.20.0-0cf4013dd0-3d67dcfae4.zip) |
| spec | 0 | 명확하지 않음 |
| eval | 13 | [sources/Workspace/getWorkspacesList.test.ts](../../../../sources/toss__yarn-plugin-workspace-since/sources/Workspace/getWorkspacesList.test.ts)<br>[sources/getUpdatedWorkspaces/distinct.test.ts](../../../../sources/toss__yarn-plugin-workspace-since/sources/getUpdatedWorkspaces/distinct.test.ts)<br>[sources/getUpdatedWorkspaces/getDependentWorkspace.test.ts](../../../../sources/toss__yarn-plugin-workspace-since/sources/getUpdatedWorkspaces/getDependentWorkspace.test.ts)<br>[sources/getUpdatedWorkspaces/getUpdatedWorkspaces.test.ts](../../../../sources/toss__yarn-plugin-workspace-since/sources/getUpdatedWorkspaces/getUpdatedWorkspaces.test.ts)<br>[sources/getUpdatedWorkspaces/matchWorkspacesByFiles.test.ts](../../../../sources/toss__yarn-plugin-workspace-since/sources/getUpdatedWorkspaces/matchWorkspacesByFiles.test.ts)<br>[sources/ConventionalCommits/ConventionalCommit.test.ts](../../../../sources/toss__yarn-plugin-workspace-since/sources/ConventionalCommits/ConventionalCommit.test.ts)<br>[sources/ConventionalCommits/reduceConventionalCommits.test.ts](../../../../sources/toss__yarn-plugin-workspace-since/sources/ConventionalCommits/reduceConventionalCommits.test.ts)<br>[sources/commands/ListCommand.test.ts](../../../../sources/toss__yarn-plugin-workspace-since/sources/commands/ListCommand.test.ts) |
| security | 1 | [.yarn/cache/oauth-sign-npm-0.9.0-7aa9422221-1809a366d2.zip](../../../../sources/toss__yarn-plugin-workspace-since/.yarn/cache/oauth-sign-npm-0.9.0-7aa9422221-1809a366d2.zip) |
| ci | 0 | 명확하지 않음 |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 1 | [README.md](../../../../sources/toss__yarn-plugin-workspace-since/README.md) |
| config | 3 | [package.json](../../../../sources/toss__yarn-plugin-workspace-since/package.json)<br>[tsconfig.json](../../../../sources/toss__yarn-plugin-workspace-since/tsconfig.json)<br>[.yarn/sdks/typescript/package.json](../../../../sources/toss__yarn-plugin-workspace-since/.yarn/sdks/typescript/package.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 13 | [sources/Workspace/getWorkspacesList.test.ts](../../../../sources/toss__yarn-plugin-workspace-since/sources/Workspace/getWorkspacesList.test.ts)<br>[sources/getUpdatedWorkspaces/distinct.test.ts](../../../../sources/toss__yarn-plugin-workspace-since/sources/getUpdatedWorkspaces/distinct.test.ts)<br>[sources/getUpdatedWorkspaces/getDependentWorkspace.test.ts](../../../../sources/toss__yarn-plugin-workspace-since/sources/getUpdatedWorkspaces/getDependentWorkspace.test.ts)<br>[sources/getUpdatedWorkspaces/getUpdatedWorkspaces.test.ts](../../../../sources/toss__yarn-plugin-workspace-since/sources/getUpdatedWorkspaces/getUpdatedWorkspaces.test.ts)<br>[sources/getUpdatedWorkspaces/matchWorkspacesByFiles.test.ts](../../../../sources/toss__yarn-plugin-workspace-since/sources/getUpdatedWorkspaces/matchWorkspacesByFiles.test.ts)<br>[sources/ConventionalCommits/ConventionalCommit.test.ts](../../../../sources/toss__yarn-plugin-workspace-since/sources/ConventionalCommits/ConventionalCommit.test.ts) |
| CI workflow | 0 | 명확하지 않음 |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 1 | [.yarn/cache/oauth-sign-npm-0.9.0-7aa9422221-1809a366d2.zip](../../../../sources/toss__yarn-plugin-workspace-since/.yarn/cache/oauth-sign-npm-0.9.0-7aa9422221-1809a366d2.zip) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | CI workflow 경로가 명확하지 않음; container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `.yarn/sdks/typescript/bin/tsc`, `.yarn/sdks/typescript/bin/tsserver`, `package.json`.
2. entrypoint를 따라 실행 흐름 확인: `.yarn/sdks/typescript/bin/tsc`, `.yarn/sdks/typescript/bin/tsserver`.
3. retrieval/memory/indexing 확인: `sources/index.ts`, `sources/PackageJson/index.ts`, `sources/getUpdatedWorkspaces/index.ts`.
4. test/eval 파일로 동작 검증: `sources/Workspace/getWorkspacesList.test.ts`, `sources/getUpdatedWorkspaces/distinct.test.ts`, `sources/getUpdatedWorkspaces/getDependentWorkspace.test.ts`.

## 기존 레포 인사이트

일반 AI 오픈소스 관점에서 모노레포를 위한 yarn berry plugin. 핵심 구조 신호는 TypeScript, package.json, README.md, tests, docs이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 CI 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
