# daangn/codepocket 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

다양한 코드를 모으고 함께 기여해서 중복 노력이 없는 개발 환경을 만들어요

## 요약

- 조사 단위: `sources/daangn__codepocket` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 281 files, 77 directories, depth score 105, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 entrypoints=server/src/index.ts, core/server/src/index.ts, client/src/App.tsx이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | daangn/codepocket |
| 주제 | 일반 AI 오픈소스 / 일반 AI 오픈소스 |
| Region | korea |
| Language | TypeScript |
| Stars | 94 |
| Forks | 5 |
| License | Apache-2.0 |
| 성숙도 | 초기 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/daangn__codepocket](../../../../sources/daangn__codepocket) |
| 기존 보고서 | [reports/korea-trending/repositories/daangn__codepocket.md](../../../korea-trending/repositories/daangn__codepocket.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 281 / 77 |
| 관측 최대 깊이 | 7 |
| 상위 디렉터리 | .deploy, .github, .yarn, cli, client, core, schema, server |
| 상위 확장자 | .ts: 130, .json: 55, .tsx: 51, .js: 11, .md: 9, (none): 8, .yml: 6, .cjs: 2, .example: 2, .html: 2, .compose: 1, .kontrol: 1 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| client | source boundary | 69 |
| server | source boundary | 7 |
| .github | ci surface | 1 |
| cli | top-level component | 1 |
| core | top-level component | 1 |
| schema | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| build | package.json | build | ultra -r build |
| serve-dev | package.json | dev | ultra -r dev |
| quality | package.json | format | eslint --fix . --ext .ts,.tsx,.json |
| build | package.json | lerna:publish | yarn build && lerna publish |
| quality | package.json | lint | eslint . --ext .ts,.tsx,.json |
| build | package.json | setting | yarn && yarn build |
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
| entrypoints | [server/src/index.ts](../../../../sources/daangn__codepocket/server/src/index.ts) | entrypoints signal |
| entrypoints | [core/server/src/index.ts](../../../../sources/daangn__codepocket/core/server/src/index.ts) | entrypoints signal |
| entrypoints | [client/src/App.tsx](../../../../sources/daangn__codepocket/client/src/App.tsx) | entrypoints signal |
| entrypoints | [client/src/main.tsx](../../../../sources/daangn__codepocket/client/src/main.tsx) | entrypoints signal |
| config | [package.json](../../../../sources/daangn__codepocket/package.json) | config signal |
| config | [server/package.json](../../../../sources/daangn__codepocket/server/package.json) | config signal |
| config | [server/tsconfig.json](../../../../sources/daangn__codepocket/server/tsconfig.json) | config signal |
| config | [schema/package.json](../../../../sources/daangn__codepocket/schema/package.json) | config signal |
| docs | [README.md](../../../../sources/daangn__codepocket/README.md) | docs signal |
| docs | [server/README.md](../../../../sources/daangn__codepocket/server/README.md) | docs signal |
| docs | [schema/README.md](../../../../sources/daangn__codepocket/schema/README.md) | docs signal |
| docs | [core/server/README.md](../../../../sources/daangn__codepocket/core/server/README.md) | docs signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 11 | [server/src/index.ts](../../../../sources/daangn__codepocket/server/src/index.ts)<br>[core/server/src/index.ts](../../../../sources/daangn__codepocket/core/server/src/index.ts)<br>[client/src/App.tsx](../../../../sources/daangn__codepocket/client/src/App.tsx)<br>[client/src/main.tsx](../../../../sources/daangn__codepocket/client/src/main.tsx)<br>[client/src/__mocks__/server.ts](../../../../sources/daangn__codepocket/client/src/__mocks__/server.ts)<br>[client/.storybook/main.js](../../../../sources/daangn__codepocket/client/.storybook/main.js)<br>[cli/lib/__mocks__/server.ts](../../../../sources/daangn__codepocket/cli/lib/__mocks__/server.ts)<br>[cli/bin/index.ts](../../../../sources/daangn__codepocket/cli/bin/index.ts) |
| agentRuntime | 23 | [client/src/token/hooks/useSearch.ts](../../../../sources/daangn__codepocket/client/src/token/hooks/useSearch.ts)<br>[client/src/shared/hooks/useClipboard.ts](../../../../sources/daangn__codepocket/client/src/shared/hooks/useClipboard.ts)<br>[client/src/shared/hooks/useCode.ts](../../../../sources/daangn__codepocket/client/src/shared/hooks/useCode.ts)<br>[client/src/shared/hooks/useCustomInfiniteQuery.ts](../../../../sources/daangn__codepocket/client/src/shared/hooks/useCustomInfiniteQuery.ts)<br>[client/src/shared/hooks/useCustomMutation.ts](../../../../sources/daangn__codepocket/client/src/shared/hooks/useCustomMutation.ts)<br>[client/src/shared/hooks/useCustomQuery.ts](../../../../sources/daangn__codepocket/client/src/shared/hooks/useCustomQuery.ts)<br>[client/src/shared/hooks/useKeyboard.ts](../../../../sources/daangn__codepocket/client/src/shared/hooks/useKeyboard.ts)<br>[client/src/shared/hooks/useModal.ts](../../../../sources/daangn__codepocket/client/src/shared/hooks/useModal.ts) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 32 | [server/src/index.ts](../../../../sources/daangn__codepocket/server/src/index.ts)<br>[server/src/dbModule/index.ts](../../../../sources/daangn__codepocket/server/src/dbModule/index.ts)<br>[core/server/src/index.ts](../../../../sources/daangn__codepocket/core/server/src/index.ts)<br>[core/server/src/types/index.ts](../../../../sources/daangn__codepocket/core/server/src/types/index.ts)<br>[core/server/src/slack/index.ts](../../../../sources/daangn__codepocket/core/server/src/slack/index.ts)<br>[client/index.html](../../../../sources/daangn__codepocket/client/index.html)<br>[client/src/shared/components/index.tsx](../../../../sources/daangn__codepocket/client/src/shared/components/index.tsx)<br>[client/src/shared/components/Modal/index.tsx](../../../../sources/daangn__codepocket/client/src/shared/components/Modal/index.tsx) |
| spec | 0 | 명확하지 않음 |
| eval | 7 | [client/src/shared/utils/test-utils.tsx](../../../../sources/daangn__codepocket/client/src/shared/utils/test-utils.tsx)<br>[client/src/auth/Auth.test.tsx](../../../../sources/daangn__codepocket/client/src/auth/Auth.test.tsx)<br>[cli/lib/command/__test__/delete.test.ts](../../../../sources/daangn__codepocket/cli/lib/command/__test__/delete.test.ts)<br>[cli/lib/command/__test__/list.test.ts](../../../../sources/daangn__codepocket/cli/lib/command/__test__/list.test.ts)<br>[cli/lib/command/__test__/pull.test.ts](../../../../sources/daangn__codepocket/cli/lib/command/__test__/pull.test.ts)<br>[cli/lib/command/__test__/push.test.ts](../../../../sources/daangn__codepocket/cli/lib/command/__test__/push.test.ts)<br>[.github/workflows/test.yml](../../../../sources/daangn__codepocket/.github/workflows/test.yml) |
| security | 11 | [client/src/auth/api.ts](../../../../sources/daangn__codepocket/client/src/auth/api.ts)<br>[client/src/auth/Auth.test.tsx](../../../../sources/daangn__codepocket/client/src/auth/Auth.test.tsx)<br>[client/src/auth/Auth.tsx](../../../../sources/daangn__codepocket/client/src/auth/Auth.tsx)<br>[client/src/auth/style.css.ts](../../../../sources/daangn__codepocket/client/src/auth/style.css.ts)<br>[client/src/auth/hooks/useCreateUser.ts](../../../../sources/daangn__codepocket/client/src/auth/hooks/useCreateUser.ts)<br>[client/src/auth/hooks/useCustomAuth0.ts](../../../../sources/daangn__codepocket/client/src/auth/hooks/useCustomAuth0.ts)<br>[client/src/auth/hooks/useTyping.ts](../../../../sources/daangn__codepocket/client/src/auth/hooks/useTyping.ts)<br>[client/src/auth/hooks/useVerifyUser.ts](../../../../sources/daangn__codepocket/client/src/auth/hooks/useVerifyUser.ts) |
| ci | 3 | [.github/workflows/deploy-codepocket-external.yml](../../../../sources/daangn__codepocket/.github/workflows/deploy-codepocket-external.yml)<br>[.github/workflows/lint.yml](../../../../sources/daangn__codepocket/.github/workflows/lint.yml)<br>[.github/workflows/test.yml](../../../../sources/daangn__codepocket/.github/workflows/test.yml) |
| container | 3 | [docker-compose.yml](../../../../sources/daangn__codepocket/docker-compose.yml)<br>[Dockerfile.compose](../../../../sources/daangn__codepocket/Dockerfile.compose)<br>[Dockerfile.kontrol](../../../../sources/daangn__codepocket/Dockerfile.kontrol) |
| instruction | 0 | 명확하지 않음 |
| docs | 6 | [README.md](../../../../sources/daangn__codepocket/README.md)<br>[server/README.md](../../../../sources/daangn__codepocket/server/README.md)<br>[schema/README.md](../../../../sources/daangn__codepocket/schema/README.md)<br>[core/server/README.md](../../../../sources/daangn__codepocket/core/server/README.md)<br>[client/README.md](../../../../sources/daangn__codepocket/client/README.md)<br>[cli/README.md](../../../../sources/daangn__codepocket/cli/README.md) |
| config | 13 | [package.json](../../../../sources/daangn__codepocket/package.json)<br>[server/package.json](../../../../sources/daangn__codepocket/server/package.json)<br>[server/tsconfig.json](../../../../sources/daangn__codepocket/server/tsconfig.json)<br>[schema/package.json](../../../../sources/daangn__codepocket/schema/package.json)<br>[schema/tsconfig.json](../../../../sources/daangn__codepocket/schema/tsconfig.json)<br>[core/server/package.json](../../../../sources/daangn__codepocket/core/server/package.json)<br>[core/server/tsconfig.json](../../../../sources/daangn__codepocket/core/server/tsconfig.json)<br>[client/package.json](../../../../sources/daangn__codepocket/client/package.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 7 | [client/src/shared/utils/test-utils.tsx](../../../../sources/daangn__codepocket/client/src/shared/utils/test-utils.tsx)<br>[client/src/auth/Auth.test.tsx](../../../../sources/daangn__codepocket/client/src/auth/Auth.test.tsx)<br>[cli/lib/command/__test__/delete.test.ts](../../../../sources/daangn__codepocket/cli/lib/command/__test__/delete.test.ts)<br>[cli/lib/command/__test__/list.test.ts](../../../../sources/daangn__codepocket/cli/lib/command/__test__/list.test.ts)<br>[cli/lib/command/__test__/pull.test.ts](../../../../sources/daangn__codepocket/cli/lib/command/__test__/pull.test.ts)<br>[cli/lib/command/__test__/push.test.ts](../../../../sources/daangn__codepocket/cli/lib/command/__test__/push.test.ts) |
| CI workflow | 3 | [.github/workflows/deploy-codepocket-external.yml](../../../../sources/daangn__codepocket/.github/workflows/deploy-codepocket-external.yml)<br>[.github/workflows/lint.yml](../../../../sources/daangn__codepocket/.github/workflows/lint.yml)<br>[.github/workflows/test.yml](../../../../sources/daangn__codepocket/.github/workflows/test.yml) |
| 컨테이너/배포 | 3 | [docker-compose.yml](../../../../sources/daangn__codepocket/docker-compose.yml)<br>[Dockerfile.compose](../../../../sources/daangn__codepocket/Dockerfile.compose)<br>[Dockerfile.kontrol](../../../../sources/daangn__codepocket/Dockerfile.kontrol) |
| 보안/정책 | 11 | [client/src/auth/api.ts](../../../../sources/daangn__codepocket/client/src/auth/api.ts)<br>[client/src/auth/Auth.test.tsx](../../../../sources/daangn__codepocket/client/src/auth/Auth.test.tsx)<br>[client/src/auth/Auth.tsx](../../../../sources/daangn__codepocket/client/src/auth/Auth.tsx)<br>[client/src/auth/style.css.ts](../../../../sources/daangn__codepocket/client/src/auth/style.css.ts)<br>[client/src/auth/hooks/useCreateUser.ts](../../../../sources/daangn__codepocket/client/src/auth/hooks/useCreateUser.ts)<br>[client/src/auth/hooks/useCustomAuth0.ts](../../../../sources/daangn__codepocket/client/src/auth/hooks/useCustomAuth0.ts) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `server/src/index.ts`, `core/server/src/index.ts`, `client/src/App.tsx`.
2. entrypoint를 따라 실행 흐름 확인: `server/src/index.ts`, `core/server/src/index.ts`, `client/src/App.tsx`.
3. agent/tool runtime 매핑: `client/src/token/hooks/useSearch.ts`, `client/src/shared/hooks/useClipboard.ts`, `client/src/shared/hooks/useCode.ts`.
4. retrieval/memory/indexing 확인: `server/src/index.ts`, `server/src/dbModule/index.ts`, `core/server/src/index.ts`.
5. test/eval 파일로 동작 검증: `client/src/shared/utils/test-utils.tsx`, `client/src/auth/Auth.test.tsx`, `cli/lib/command/__test__/delete.test.ts`.

## 기존 레포 인사이트

일반 AI 오픈소스 관점에서 다양한 코드를 모으고 함께 기여해서 중복 노력이 없는 개발 환경을 만들어요. 핵심 구조 신호는 TypeScript, package.json, docker-compose.yml, README.md, LICENSE, ci이며, 소스+보고서 근거 수준으로 초기 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 더 깊은 구조 스캔 필요입니다.
