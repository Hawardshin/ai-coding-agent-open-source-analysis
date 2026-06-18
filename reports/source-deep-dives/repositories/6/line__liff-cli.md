# line/liff-cli Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

line/liff-cli

## 요약

- 조사 단위: `sources/line__liff-cli` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 75 files, 16 directories, depth score 92, key references 10개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

개발 생산성/DevTools 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 entrypoints=src/cli.ts이고, 의존성 단서는 commander, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 10개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | line/liff-cli |
| Topic | Developer Productivity and DevTools / 개발 생산성/DevTools |
| Region | korea |
| Language | TypeScript |
| Stars | 32 |
| Forks | 5 |
| License | Apache-2.0 |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/line__liff-cli](../../../../sources/line__liff-cli) |
| Existing report | [reports/korea-trending/repositories/line__liff-cli.md](../../../korea-trending/repositories/line__liff-cli.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 75 / 16 |
| Max observed depth | 4 |
| Top directories | .github, src |
| Top extensions | .ts: 54, (none): 7, .json: 5, .md: 4, .yml: 3, .js: 2 |
| Source patterns | cli-first, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 37 |
| .github | ci surface | 1 |


## How It Runs

| Category | Source | Name | Command |
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


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | none |
| developerSurface | commander |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
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


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 1 | [src/cli.ts](../../../../sources/line__liff-cli/src/cli.ts) |
| agentRuntime | 1 | [src/api/agent.ts](../../../../sources/line__liff-cli/src/api/agent.ts) |
| mcp | 0 | not obvious |
| retrieval | 11 | [index.js](../../../../sources/line__liff-cli/index.js)<br>[src/serve/commands/index.test.ts](../../../../sources/line__liff-cli/src/serve/commands/index.test.ts)<br>[src/serve/commands/index.ts](../../../../sources/line__liff-cli/src/serve/commands/index.ts)<br>[src/scaffold/commands/index.test.ts](../../../../sources/line__liff-cli/src/scaffold/commands/index.test.ts)<br>[src/scaffold/commands/index.ts](../../../../sources/line__liff-cli/src/scaffold/commands/index.ts)<br>[src/init/commands/index.test.ts](../../../../sources/line__liff-cli/src/init/commands/index.test.ts)<br>[src/init/commands/index.ts](../../../../sources/line__liff-cli/src/init/commands/index.ts)<br>[src/channel/commands/index.test.ts](../../../../sources/line__liff-cli/src/channel/commands/index.test.ts) |
| spec | 0 | not obvious |
| eval | 22 | [src/setup.test.ts](../../../../sources/line__liff-cli/src/setup.test.ts)<br>[src/serve/resolveEndpointUrl.test.ts](../../../../sources/line__liff-cli/src/serve/resolveEndpointUrl.test.ts)<br>[src/serve/resolveProxy.test.ts](../../../../sources/line__liff-cli/src/serve/resolveProxy.test.ts)<br>[src/serve/serveAction.test.ts](../../../../sources/line__liff-cli/src/serve/serveAction.test.ts)<br>[src/serve/commands/index.test.ts](../../../../sources/line__liff-cli/src/serve/commands/index.test.ts)<br>[src/scaffold/scaffoldAction.test.ts](../../../../sources/line__liff-cli/src/scaffold/scaffoldAction.test.ts)<br>[src/scaffold/commands/index.test.ts](../../../../sources/line__liff-cli/src/scaffold/commands/index.test.ts)<br>[src/init/initAction.test.ts](../../../../sources/line__liff-cli/src/init/initAction.test.ts) |
| security | 2 | [src/api/auth.test.ts](../../../../sources/line__liff-cli/src/api/auth.test.ts)<br>[src/api/auth.ts](../../../../sources/line__liff-cli/src/api/auth.ts) |
| ci | 3 | [.github/workflows/code-check.yml](../../../../sources/line__liff-cli/.github/workflows/code-check.yml)<br>[.github/workflows/publish.yml](../../../../sources/line__liff-cli/.github/workflows/publish.yml)<br>[.github/workflows/semantic-pull-request.yml](../../../../sources/line__liff-cli/.github/workflows/semantic-pull-request.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 1 | [README.md](../../../../sources/line__liff-cli/README.md) |
| config | 2 | [package.json](../../../../sources/line__liff-cli/package.json)<br>[tsconfig.json](../../../../sources/line__liff-cli/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 22 | [src/setup.test.ts](../../../../sources/line__liff-cli/src/setup.test.ts)<br>[src/serve/resolveEndpointUrl.test.ts](../../../../sources/line__liff-cli/src/serve/resolveEndpointUrl.test.ts)<br>[src/serve/resolveProxy.test.ts](../../../../sources/line__liff-cli/src/serve/resolveProxy.test.ts)<br>[src/serve/serveAction.test.ts](../../../../sources/line__liff-cli/src/serve/serveAction.test.ts)<br>[src/serve/commands/index.test.ts](../../../../sources/line__liff-cli/src/serve/commands/index.test.ts)<br>[src/scaffold/scaffoldAction.test.ts](../../../../sources/line__liff-cli/src/scaffold/scaffoldAction.test.ts) |
| CI workflows | 3 | [.github/workflows/code-check.yml](../../../../sources/line__liff-cli/.github/workflows/code-check.yml)<br>[.github/workflows/publish.yml](../../../../sources/line__liff-cli/.github/workflows/publish.yml)<br>[.github/workflows/semantic-pull-request.yml](../../../../sources/line__liff-cli/.github/workflows/semantic-pull-request.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 2 | [src/api/auth.test.ts](../../../../sources/line__liff-cli/src/api/auth.test.ts)<br>[src/api/auth.ts](../../../../sources/line__liff-cli/src/api/auth.ts) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `src/cli.ts`, `package.json`, `tsconfig.json`.
2. Trace execution through entrypoints: `src/cli.ts`.
3. Map agent/tool runtime through: `src/api/agent.ts`.
4. Inspect retrieval/memory/indexing through: `index.js`, `src/serve/commands/index.test.ts`, `src/serve/commands/index.ts`.
5. Verify behavior through test/eval files: `src/setup.test.ts`, `src/serve/resolveEndpointUrl.test.ts`, `src/serve/resolveProxy.test.ts`.

## Existing Repository Insight

개발 생산성/DevTools 관점에서 설명 메타데이터가 짧습니다. 핵심 구조 신호는 TypeScript, package.json, README.md, LICENSE, ci, docs이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 개발 생산성/DevTools 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, needs deeper structural scan입니다.
