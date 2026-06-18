# toss/yarn-plugin-workspace-since Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

모노레포를 위한 yarn berry plugin

## 요약

- 조사 단위: `sources/toss__yarn-plugin-workspace-since` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 624 files, 19 directories, depth score 95, key references 11개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 cli-first, api/server, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 entrypoints=.yarn/sdks/typescript/bin/tsc, .yarn/sdks/typescript/bin/tsserver이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 11개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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


## Repository Context

| Field | Value |
| --- | --- |
| Repository | toss/yarn-plugin-workspace-since |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | TypeScript |
| Stars | 189 |
| Forks | 14 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/toss__yarn-plugin-workspace-since](../../../../sources/toss__yarn-plugin-workspace-since) |
| Existing report | [reports/korea-trending/repositories/toss__yarn-plugin-workspace-since.md](../../../korea-trending/repositories/toss__yarn-plugin-workspace-since.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 624 / 19 |
| Max observed depth | 5 |
| Top directories | .yarn, bundles, sources, testing |
| Top extensions | .zip: 572, .ts: 31, .js: 6, (none): 4, .cjs: 3, .json: 3, .yml: 2, .lock: 1, .md: 1, .mjs: 1 |
| Source patterns | cli-first, api/server, retrieval/vector path, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| bundles | top-level component | 1 |
| sources | top-level component | 1 |
| testing | validation surface | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| test | package.json | test | jest |
| build | package.json | build | builder build plugin |
| quality | package.json | typecheck | tsc --noEmit --project tsconfig.json |


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


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 2 | [.yarn/sdks/typescript/bin/tsc](../../../../sources/toss__yarn-plugin-workspace-since/.yarn/sdks/typescript/bin/tsc)<br>[.yarn/sdks/typescript/bin/tsserver](../../../../sources/toss__yarn-plugin-workspace-since/.yarn/sdks/typescript/bin/tsserver) |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 5 | [sources/index.ts](../../../../sources/toss__yarn-plugin-workspace-since/sources/index.ts)<br>[sources/PackageJson/index.ts](../../../../sources/toss__yarn-plugin-workspace-since/sources/PackageJson/index.ts)<br>[sources/getUpdatedWorkspaces/index.ts](../../../../sources/toss__yarn-plugin-workspace-since/sources/getUpdatedWorkspaces/index.ts)<br>[sources/ConventionalCommits/index.ts](../../../../sources/toss__yarn-plugin-workspace-since/sources/ConventionalCommits/index.ts)<br>[.yarn/cache/@algolia-cache-in-memory-npm-4.20.0-0cf4013dd0-3d67dcfae4.zip](../../../../sources/toss__yarn-plugin-workspace-since/.yarn/cache/@algolia-cache-in-memory-npm-4.20.0-0cf4013dd0-3d67dcfae4.zip) |
| spec | 0 | not obvious |
| eval | 13 | [sources/Workspace/getWorkspacesList.test.ts](../../../../sources/toss__yarn-plugin-workspace-since/sources/Workspace/getWorkspacesList.test.ts)<br>[sources/getUpdatedWorkspaces/distinct.test.ts](../../../../sources/toss__yarn-plugin-workspace-since/sources/getUpdatedWorkspaces/distinct.test.ts)<br>[sources/getUpdatedWorkspaces/getDependentWorkspace.test.ts](../../../../sources/toss__yarn-plugin-workspace-since/sources/getUpdatedWorkspaces/getDependentWorkspace.test.ts)<br>[sources/getUpdatedWorkspaces/getUpdatedWorkspaces.test.ts](../../../../sources/toss__yarn-plugin-workspace-since/sources/getUpdatedWorkspaces/getUpdatedWorkspaces.test.ts)<br>[sources/getUpdatedWorkspaces/matchWorkspacesByFiles.test.ts](../../../../sources/toss__yarn-plugin-workspace-since/sources/getUpdatedWorkspaces/matchWorkspacesByFiles.test.ts)<br>[sources/ConventionalCommits/ConventionalCommit.test.ts](../../../../sources/toss__yarn-plugin-workspace-since/sources/ConventionalCommits/ConventionalCommit.test.ts)<br>[sources/ConventionalCommits/reduceConventionalCommits.test.ts](../../../../sources/toss__yarn-plugin-workspace-since/sources/ConventionalCommits/reduceConventionalCommits.test.ts)<br>[sources/commands/ListCommand.test.ts](../../../../sources/toss__yarn-plugin-workspace-since/sources/commands/ListCommand.test.ts) |
| security | 1 | [.yarn/cache/oauth-sign-npm-0.9.0-7aa9422221-1809a366d2.zip](../../../../sources/toss__yarn-plugin-workspace-since/.yarn/cache/oauth-sign-npm-0.9.0-7aa9422221-1809a366d2.zip) |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 1 | [README.md](../../../../sources/toss__yarn-plugin-workspace-since/README.md) |
| config | 3 | [package.json](../../../../sources/toss__yarn-plugin-workspace-since/package.json)<br>[tsconfig.json](../../../../sources/toss__yarn-plugin-workspace-since/tsconfig.json)<br>[.yarn/sdks/typescript/package.json](../../../../sources/toss__yarn-plugin-workspace-since/.yarn/sdks/typescript/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 13 | [sources/Workspace/getWorkspacesList.test.ts](../../../../sources/toss__yarn-plugin-workspace-since/sources/Workspace/getWorkspacesList.test.ts)<br>[sources/getUpdatedWorkspaces/distinct.test.ts](../../../../sources/toss__yarn-plugin-workspace-since/sources/getUpdatedWorkspaces/distinct.test.ts)<br>[sources/getUpdatedWorkspaces/getDependentWorkspace.test.ts](../../../../sources/toss__yarn-plugin-workspace-since/sources/getUpdatedWorkspaces/getDependentWorkspace.test.ts)<br>[sources/getUpdatedWorkspaces/getUpdatedWorkspaces.test.ts](../../../../sources/toss__yarn-plugin-workspace-since/sources/getUpdatedWorkspaces/getUpdatedWorkspaces.test.ts)<br>[sources/getUpdatedWorkspaces/matchWorkspacesByFiles.test.ts](../../../../sources/toss__yarn-plugin-workspace-since/sources/getUpdatedWorkspaces/matchWorkspacesByFiles.test.ts)<br>[sources/ConventionalCommits/ConventionalCommit.test.ts](../../../../sources/toss__yarn-plugin-workspace-since/sources/ConventionalCommits/ConventionalCommit.test.ts) |
| CI workflows | 0 | not obvious |
| Containers / deploy | 0 | not obvious |
| Security / policy | 1 | [.yarn/cache/oauth-sign-npm-0.9.0-7aa9422221-1809a366d2.zip](../../../../sources/toss__yarn-plugin-workspace-since/.yarn/cache/oauth-sign-npm-0.9.0-7aa9422221-1809a366d2.zip) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | CI workflow path not obvious; container/deploy path not obvious |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `.yarn/sdks/typescript/bin/tsc`, `.yarn/sdks/typescript/bin/tsserver`, `package.json`.
2. Trace execution through entrypoints: `.yarn/sdks/typescript/bin/tsc`, `.yarn/sdks/typescript/bin/tsserver`.
3. Inspect retrieval/memory/indexing through: `sources/index.ts`, `sources/PackageJson/index.ts`, `sources/getUpdatedWorkspaces/index.ts`.
4. Verify behavior through test/eval files: `sources/Workspace/getWorkspacesList.test.ts`, `sources/getUpdatedWorkspaces/distinct.test.ts`, `sources/getUpdatedWorkspaces/getDependentWorkspace.test.ts`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 모노레포를 위한 yarn berry plugin. 핵심 구조 신호는 TypeScript, package.json, README.md, tests, docs이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 ci signal not obvious, license metadata missing, needs deeper structural scan입니다.
