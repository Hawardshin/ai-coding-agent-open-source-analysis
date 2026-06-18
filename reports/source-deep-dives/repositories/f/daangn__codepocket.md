# daangn/codepocket Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

다양한 코드를 모으고 함께 기여해서 중복 노력이 없는 개발 환경을 만들어요

## 요약

- 조사 단위: `sources/daangn__codepocket` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 281 files, 77 directories, depth score 111, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 entrypoints=server/src/index.ts, core/server/src/index.ts, client/src/App.tsx이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

## Navigation

| Entry | Use it for |
| --- | --- |
| [Repository README](../../../../README.md) | Repo-wide orientation and top-level data/report structure. |
| [Reports Reading Index](../../../README.md) | Main report navigation, topics, and folder map. |
| [Reports by Topic](../../../by-topic/README.md) | Topic-first report navigation. |
| [Report Tables](../../../tables/README.md) | Table-first view and CSV exports. |
| [Repository Insights](../../../repository-insights/README.md) | Repository-by-repository assessment rows. |
| [Source Deep Dives](../../README.md) | Source-path-level findings by topic. |
| [Source Repository Deep Dives](../README.md) | One Markdown deep dive per cloned repository. |
| [Source Trend Insights](../../../source-insights/README.md) | Category trend insights and repository feature comparison from source evidence. |


## Repository Context

| Field | Value |
| --- | --- |
| Repository | daangn/codepocket |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | TypeScript |
| Stars | 94 |
| Forks | 5 |
| License | Apache-2.0 |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/daangn__codepocket](../../../../sources/daangn__codepocket) |
| Existing report | [reports/korea-trending/repositories/daangn__codepocket.md](../../../korea-trending/repositories/daangn__codepocket.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 281 / 77 |
| Max observed depth | 7 |
| Top directories | .deploy, .github, .yarn, cli, client, core, schema, server |
| Top extensions | .ts: 130, .json: 55, .tsx: 51, .js: 11, .md: 9, (none): 8, .yml: 6, .cjs: 2, .example: 2, .html: 2, .compose: 1, .kontrol: 1 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| client | source boundary | 69 |
| server | source boundary | 7 |
| .github | ci surface | 1 |
| cli | top-level component | 1 |
| core | top-level component | 1 |
| schema | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| build | package.json | build | ultra -r build |
| serve-dev | package.json | dev | ultra -r dev |
| quality | package.json | format | eslint --fix . --ext .ts,.tsx,.json |
| build | package.json | lerna:publish | yarn build && lerna publish |
| quality | package.json | lint | eslint . --ext .ts,.tsx,.json |
| build | package.json | setting | yarn && yarn build |
| test | package.json | test | ultra -r test |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | none |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
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


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 11 | [server/src/index.ts](../../../../sources/daangn__codepocket/server/src/index.ts)<br>[core/server/src/index.ts](../../../../sources/daangn__codepocket/core/server/src/index.ts)<br>[client/src/App.tsx](../../../../sources/daangn__codepocket/client/src/App.tsx)<br>[client/src/main.tsx](../../../../sources/daangn__codepocket/client/src/main.tsx)<br>[client/src/__mocks__/server.ts](../../../../sources/daangn__codepocket/client/src/__mocks__/server.ts)<br>[client/.storybook/main.js](../../../../sources/daangn__codepocket/client/.storybook/main.js)<br>[cli/lib/__mocks__/server.ts](../../../../sources/daangn__codepocket/cli/lib/__mocks__/server.ts)<br>[cli/bin/index.ts](../../../../sources/daangn__codepocket/cli/bin/index.ts) |
| agentRuntime | 23 | [client/src/token/hooks/useSearch.ts](../../../../sources/daangn__codepocket/client/src/token/hooks/useSearch.ts)<br>[client/src/shared/hooks/useClipboard.ts](../../../../sources/daangn__codepocket/client/src/shared/hooks/useClipboard.ts)<br>[client/src/shared/hooks/useCode.ts](../../../../sources/daangn__codepocket/client/src/shared/hooks/useCode.ts)<br>[client/src/shared/hooks/useCustomInfiniteQuery.ts](../../../../sources/daangn__codepocket/client/src/shared/hooks/useCustomInfiniteQuery.ts)<br>[client/src/shared/hooks/useCustomMutation.ts](../../../../sources/daangn__codepocket/client/src/shared/hooks/useCustomMutation.ts)<br>[client/src/shared/hooks/useCustomQuery.ts](../../../../sources/daangn__codepocket/client/src/shared/hooks/useCustomQuery.ts)<br>[client/src/shared/hooks/useKeyboard.ts](../../../../sources/daangn__codepocket/client/src/shared/hooks/useKeyboard.ts)<br>[client/src/shared/hooks/useModal.ts](../../../../sources/daangn__codepocket/client/src/shared/hooks/useModal.ts) |
| mcp | 0 | not obvious |
| retrieval | 32 | [server/src/index.ts](../../../../sources/daangn__codepocket/server/src/index.ts)<br>[server/src/dbModule/index.ts](../../../../sources/daangn__codepocket/server/src/dbModule/index.ts)<br>[core/server/src/index.ts](../../../../sources/daangn__codepocket/core/server/src/index.ts)<br>[core/server/src/types/index.ts](../../../../sources/daangn__codepocket/core/server/src/types/index.ts)<br>[core/server/src/slack/index.ts](../../../../sources/daangn__codepocket/core/server/src/slack/index.ts)<br>[client/index.html](../../../../sources/daangn__codepocket/client/index.html)<br>[client/src/shared/components/index.tsx](../../../../sources/daangn__codepocket/client/src/shared/components/index.tsx)<br>[client/src/shared/components/Modal/index.tsx](../../../../sources/daangn__codepocket/client/src/shared/components/Modal/index.tsx) |
| spec | 0 | not obvious |
| eval | 7 | [client/src/shared/utils/test-utils.tsx](../../../../sources/daangn__codepocket/client/src/shared/utils/test-utils.tsx)<br>[client/src/auth/Auth.test.tsx](../../../../sources/daangn__codepocket/client/src/auth/Auth.test.tsx)<br>[cli/lib/command/__test__/delete.test.ts](../../../../sources/daangn__codepocket/cli/lib/command/__test__/delete.test.ts)<br>[cli/lib/command/__test__/list.test.ts](../../../../sources/daangn__codepocket/cli/lib/command/__test__/list.test.ts)<br>[cli/lib/command/__test__/pull.test.ts](../../../../sources/daangn__codepocket/cli/lib/command/__test__/pull.test.ts)<br>[cli/lib/command/__test__/push.test.ts](../../../../sources/daangn__codepocket/cli/lib/command/__test__/push.test.ts)<br>[.github/workflows/test.yml](../../../../sources/daangn__codepocket/.github/workflows/test.yml) |
| security | 11 | [client/src/auth/api.ts](../../../../sources/daangn__codepocket/client/src/auth/api.ts)<br>[client/src/auth/Auth.test.tsx](../../../../sources/daangn__codepocket/client/src/auth/Auth.test.tsx)<br>[client/src/auth/Auth.tsx](../../../../sources/daangn__codepocket/client/src/auth/Auth.tsx)<br>[client/src/auth/style.css.ts](../../../../sources/daangn__codepocket/client/src/auth/style.css.ts)<br>[client/src/auth/hooks/useCreateUser.ts](../../../../sources/daangn__codepocket/client/src/auth/hooks/useCreateUser.ts)<br>[client/src/auth/hooks/useCustomAuth0.ts](../../../../sources/daangn__codepocket/client/src/auth/hooks/useCustomAuth0.ts)<br>[client/src/auth/hooks/useTyping.ts](../../../../sources/daangn__codepocket/client/src/auth/hooks/useTyping.ts)<br>[client/src/auth/hooks/useVerifyUser.ts](../../../../sources/daangn__codepocket/client/src/auth/hooks/useVerifyUser.ts) |
| ci | 3 | [.github/workflows/deploy-codepocket-external.yml](../../../../sources/daangn__codepocket/.github/workflows/deploy-codepocket-external.yml)<br>[.github/workflows/lint.yml](../../../../sources/daangn__codepocket/.github/workflows/lint.yml)<br>[.github/workflows/test.yml](../../../../sources/daangn__codepocket/.github/workflows/test.yml) |
| container | 3 | [docker-compose.yml](../../../../sources/daangn__codepocket/docker-compose.yml)<br>[Dockerfile.compose](../../../../sources/daangn__codepocket/Dockerfile.compose)<br>[Dockerfile.kontrol](../../../../sources/daangn__codepocket/Dockerfile.kontrol) |
| instruction | 0 | not obvious |
| docs | 6 | [README.md](../../../../sources/daangn__codepocket/README.md)<br>[server/README.md](../../../../sources/daangn__codepocket/server/README.md)<br>[schema/README.md](../../../../sources/daangn__codepocket/schema/README.md)<br>[core/server/README.md](../../../../sources/daangn__codepocket/core/server/README.md)<br>[client/README.md](../../../../sources/daangn__codepocket/client/README.md)<br>[cli/README.md](../../../../sources/daangn__codepocket/cli/README.md) |
| config | 13 | [package.json](../../../../sources/daangn__codepocket/package.json)<br>[server/package.json](../../../../sources/daangn__codepocket/server/package.json)<br>[server/tsconfig.json](../../../../sources/daangn__codepocket/server/tsconfig.json)<br>[schema/package.json](../../../../sources/daangn__codepocket/schema/package.json)<br>[schema/tsconfig.json](../../../../sources/daangn__codepocket/schema/tsconfig.json)<br>[core/server/package.json](../../../../sources/daangn__codepocket/core/server/package.json)<br>[core/server/tsconfig.json](../../../../sources/daangn__codepocket/core/server/tsconfig.json)<br>[client/package.json](../../../../sources/daangn__codepocket/client/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 7 | [client/src/shared/utils/test-utils.tsx](../../../../sources/daangn__codepocket/client/src/shared/utils/test-utils.tsx)<br>[client/src/auth/Auth.test.tsx](../../../../sources/daangn__codepocket/client/src/auth/Auth.test.tsx)<br>[cli/lib/command/__test__/delete.test.ts](../../../../sources/daangn__codepocket/cli/lib/command/__test__/delete.test.ts)<br>[cli/lib/command/__test__/list.test.ts](../../../../sources/daangn__codepocket/cli/lib/command/__test__/list.test.ts)<br>[cli/lib/command/__test__/pull.test.ts](../../../../sources/daangn__codepocket/cli/lib/command/__test__/pull.test.ts)<br>[cli/lib/command/__test__/push.test.ts](../../../../sources/daangn__codepocket/cli/lib/command/__test__/push.test.ts) |
| CI workflows | 3 | [.github/workflows/deploy-codepocket-external.yml](../../../../sources/daangn__codepocket/.github/workflows/deploy-codepocket-external.yml)<br>[.github/workflows/lint.yml](../../../../sources/daangn__codepocket/.github/workflows/lint.yml)<br>[.github/workflows/test.yml](../../../../sources/daangn__codepocket/.github/workflows/test.yml) |
| Containers / deploy | 3 | [docker-compose.yml](../../../../sources/daangn__codepocket/docker-compose.yml)<br>[Dockerfile.compose](../../../../sources/daangn__codepocket/Dockerfile.compose)<br>[Dockerfile.kontrol](../../../../sources/daangn__codepocket/Dockerfile.kontrol) |
| Security / policy | 11 | [client/src/auth/api.ts](../../../../sources/daangn__codepocket/client/src/auth/api.ts)<br>[client/src/auth/Auth.test.tsx](../../../../sources/daangn__codepocket/client/src/auth/Auth.test.tsx)<br>[client/src/auth/Auth.tsx](../../../../sources/daangn__codepocket/client/src/auth/Auth.tsx)<br>[client/src/auth/style.css.ts](../../../../sources/daangn__codepocket/client/src/auth/style.css.ts)<br>[client/src/auth/hooks/useCreateUser.ts](../../../../sources/daangn__codepocket/client/src/auth/hooks/useCreateUser.ts)<br>[client/src/auth/hooks/useCustomAuth0.ts](../../../../sources/daangn__codepocket/client/src/auth/hooks/useCustomAuth0.ts) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `server/src/index.ts`, `core/server/src/index.ts`, `client/src/App.tsx`.
2. Trace execution through entrypoints: `server/src/index.ts`, `core/server/src/index.ts`, `client/src/App.tsx`.
3. Map agent/tool runtime through: `client/src/token/hooks/useSearch.ts`, `client/src/shared/hooks/useClipboard.ts`, `client/src/shared/hooks/useCode.ts`.
4. Inspect retrieval/memory/indexing through: `server/src/index.ts`, `server/src/dbModule/index.ts`, `core/server/src/index.ts`.
5. Verify behavior through test/eval files: `client/src/shared/utils/test-utils.tsx`, `client/src/auth/Auth.test.tsx`, `cli/lib/command/__test__/delete.test.ts`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 다양한 코드를 모으고 함께 기여해서 중복 노력이 없는 개발 환경을 만들어요. 핵심 구조 신호는 TypeScript, package.json, docker-compose.yml, README.md, LICENSE, ci이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, needs deeper structural scan입니다.
