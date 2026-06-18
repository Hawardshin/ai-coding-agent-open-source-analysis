# line/line-bot-mcp-server Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

MCP server that integrates the LINE Messaging API to connect an AI Agent to the LINE Official Account.

## 요약

- 조사 단위: `sources/line__line-bot-mcp-server` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 78 files, 17 directories, depth score 101, key references 11개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=test/tools/broadcastFlexMessage.test.ts, test/tools/broadcastTextMessage.test.ts, test/tools/cancelRichMenuDefault.test.ts이고, 의존성 단서는 modelcontextprotocol, puppeteer, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 11개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | line/line-bot-mcp-server |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | TypeScript |
| Stars | 599 |
| Forks | 108 |
| License | Apache-2.0 |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/line__line-bot-mcp-server](../../../../sources/line__line-bot-mcp-server) |
| Existing report | [reports/global-trending/repositories/line__line-bot-mcp-server.md](../../../global-trending/repositories/line__line-bot-mcp-server.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 78 / 17 |
| Max observed depth | 4 |
| Top directories | .github, assets, richmenu-template, scripts, src, test |
| Top extensions | .ts: 36, .md: 14, .yml: 8, .json: 6, (none): 5, .mjs: 3, .png: 3, .cjs: 1, .json5: 1, .sh: 1 |
| Source patterns | cli-first, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 16 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| richmenu-template | top-level component | 1 |
| scripts | top-level component | 1 |
| test | validation surface | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| test | package.json | build | npm run format:check && npm run typecheck:test && npm run clean && tsc && node scripts/chmod-bin.mjs |
| test | package.json | prettier | prettier "src/**/*.ts" "test/**/*.ts" |
| quality | package.json | format | npm run prettier -- --write |
| quality | package.json | format:check | npm run prettier -- -l |
| utility | package.json | clean | node scripts/clean.mjs |
| test | package.json | typecheck:test | tsc --project tsconfig.test.json |
| build | package.json | release | npm run build && npm publish --provenance --access public |
| quality | package.json | check:publint | publint |
| test | package.json | test | npm run build && vitest run |
| test | package.json | test:watch | vitest |
| entrypoint | package.json bin | index.js | ./dist/index.js |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | modelcontextprotocol |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | none |
| developerSurface | none |
| observability | none |
| browserAutomation | puppeteer |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| agentRuntime | [test/tools/broadcastFlexMessage.test.ts](../../../../sources/line__line-bot-mcp-server/test/tools/broadcastFlexMessage.test.ts) | agentRuntime signal |
| agentRuntime | [test/tools/broadcastTextMessage.test.ts](../../../../sources/line__line-bot-mcp-server/test/tools/broadcastTextMessage.test.ts) | agentRuntime signal |
| agentRuntime | [test/tools/cancelRichMenuDefault.test.ts](../../../../sources/line__line-bot-mcp-server/test/tools/cancelRichMenuDefault.test.ts) | agentRuntime signal |
| agentRuntime | [test/tools/createRichMenu.test.ts](../../../../sources/line__line-bot-mcp-server/test/tools/createRichMenu.test.ts) | agentRuntime signal |
| entrypoints | [src/index.ts](../../../../sources/line__line-bot-mcp-server/src/index.ts) | entrypoints signal |
| config | [package.json](../../../../sources/line__line-bot-mcp-server/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/line__line-bot-mcp-server/tsconfig.json) | config signal |
| ci | [.github/workflows/check-eol-newrelease.yml](../../../../sources/line__line-bot-mcp-server/.github/workflows/check-eol-newrelease.yml) | ci support |
| ci | [.github/workflows/close-issue.yml](../../../../sources/line__line-bot-mcp-server/.github/workflows/close-issue.yml) | ci support |
| container | [Dockerfile](../../../../sources/line__line-bot-mcp-server/Dockerfile) | container support |
| eval | [tsconfig.test.json](../../../../sources/line__line-bot-mcp-server/tsconfig.test.json) | eval support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 1 | [src/index.ts](../../../../sources/line__line-bot-mcp-server/src/index.ts) |
| agentRuntime | 25 | [test/tools/broadcastFlexMessage.test.ts](../../../../sources/line__line-bot-mcp-server/test/tools/broadcastFlexMessage.test.ts)<br>[test/tools/broadcastTextMessage.test.ts](../../../../sources/line__line-bot-mcp-server/test/tools/broadcastTextMessage.test.ts)<br>[test/tools/cancelRichMenuDefault.test.ts](../../../../sources/line__line-bot-mcp-server/test/tools/cancelRichMenuDefault.test.ts)<br>[test/tools/createRichMenu.test.ts](../../../../sources/line__line-bot-mcp-server/test/tools/createRichMenu.test.ts)<br>[test/tools/deleteRichMenu.test.ts](../../../../sources/line__line-bot-mcp-server/test/tools/deleteRichMenu.test.ts)<br>[test/tools/getFollowerIds.test.ts](../../../../sources/line__line-bot-mcp-server/test/tools/getFollowerIds.test.ts)<br>[test/tools/getMessageQuota.test.ts](../../../../sources/line__line-bot-mcp-server/test/tools/getMessageQuota.test.ts)<br>[test/tools/getProfile.test.ts](../../../../sources/line__line-bot-mcp-server/test/tools/getProfile.test.ts) |
| mcp | 0 | not obvious |
| retrieval | 1 | [src/index.ts](../../../../sources/line__line-bot-mcp-server/src/index.ts) |
| spec | 0 | not obvious |
| eval | 17 | [tsconfig.test.json](../../../../sources/line__line-bot-mcp-server/tsconfig.test.json)<br>[test/tools/broadcastFlexMessage.test.ts](../../../../sources/line__line-bot-mcp-server/test/tools/broadcastFlexMessage.test.ts)<br>[test/tools/broadcastTextMessage.test.ts](../../../../sources/line__line-bot-mcp-server/test/tools/broadcastTextMessage.test.ts)<br>[test/tools/cancelRichMenuDefault.test.ts](../../../../sources/line__line-bot-mcp-server/test/tools/cancelRichMenuDefault.test.ts)<br>[test/tools/createRichMenu.test.ts](../../../../sources/line__line-bot-mcp-server/test/tools/createRichMenu.test.ts)<br>[test/tools/deleteRichMenu.test.ts](../../../../sources/line__line-bot-mcp-server/test/tools/deleteRichMenu.test.ts)<br>[test/tools/getFollowerIds.test.ts](../../../../sources/line__line-bot-mcp-server/test/tools/getFollowerIds.test.ts)<br>[test/tools/getMessageQuota.test.ts](../../../../sources/line__line-bot-mcp-server/test/tools/getMessageQuota.test.ts) |
| security | 2 | [.github/workflows/npm-audit.yml](../../../../sources/line__line-bot-mcp-server/.github/workflows/npm-audit.yml)<br>[.github/scripts/npm-audit.sh](../../../../sources/line__line-bot-mcp-server/.github/scripts/npm-audit.sh) |
| ci | 7 | [.github/workflows/check-eol-newrelease.yml](../../../../sources/line__line-bot-mcp-server/.github/workflows/check-eol-newrelease.yml)<br>[.github/workflows/close-issue.yml](../../../../sources/line__line-bot-mcp-server/.github/workflows/close-issue.yml)<br>[.github/workflows/create-draft-release.yml](../../../../sources/line__line-bot-mcp-server/.github/workflows/create-draft-release.yml)<br>[.github/workflows/label-issue.yml](../../../../sources/line__line-bot-mcp-server/.github/workflows/label-issue.yml)<br>[.github/workflows/npm-audit.yml](../../../../sources/line__line-bot-mcp-server/.github/workflows/npm-audit.yml)<br>[.github/workflows/release.yml](../../../../sources/line__line-bot-mcp-server/.github/workflows/release.yml)<br>[.github/workflows/test.yml](../../../../sources/line__line-bot-mcp-server/.github/workflows/test.yml) |
| container | 1 | [Dockerfile](../../../../sources/line__line-bot-mcp-server/Dockerfile) |
| instruction | 0 | not obvious |
| docs | 2 | [README.ja.md](../../../../sources/line__line-bot-mcp-server/README.ja.md)<br>[README.md](../../../../sources/line__line-bot-mcp-server/README.md) |
| config | 2 | [package.json](../../../../sources/line__line-bot-mcp-server/package.json)<br>[tsconfig.json](../../../../sources/line__line-bot-mcp-server/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 17 | [tsconfig.test.json](../../../../sources/line__line-bot-mcp-server/tsconfig.test.json)<br>[test/tools/broadcastFlexMessage.test.ts](../../../../sources/line__line-bot-mcp-server/test/tools/broadcastFlexMessage.test.ts)<br>[test/tools/broadcastTextMessage.test.ts](../../../../sources/line__line-bot-mcp-server/test/tools/broadcastTextMessage.test.ts)<br>[test/tools/cancelRichMenuDefault.test.ts](../../../../sources/line__line-bot-mcp-server/test/tools/cancelRichMenuDefault.test.ts)<br>[test/tools/createRichMenu.test.ts](../../../../sources/line__line-bot-mcp-server/test/tools/createRichMenu.test.ts)<br>[test/tools/deleteRichMenu.test.ts](../../../../sources/line__line-bot-mcp-server/test/tools/deleteRichMenu.test.ts) |
| CI workflows | 7 | [.github/workflows/check-eol-newrelease.yml](../../../../sources/line__line-bot-mcp-server/.github/workflows/check-eol-newrelease.yml)<br>[.github/workflows/close-issue.yml](../../../../sources/line__line-bot-mcp-server/.github/workflows/close-issue.yml)<br>[.github/workflows/create-draft-release.yml](../../../../sources/line__line-bot-mcp-server/.github/workflows/create-draft-release.yml)<br>[.github/workflows/label-issue.yml](../../../../sources/line__line-bot-mcp-server/.github/workflows/label-issue.yml)<br>[.github/workflows/npm-audit.yml](../../../../sources/line__line-bot-mcp-server/.github/workflows/npm-audit.yml)<br>[.github/workflows/release.yml](../../../../sources/line__line-bot-mcp-server/.github/workflows/release.yml) |
| Containers / deploy | 1 | [Dockerfile](../../../../sources/line__line-bot-mcp-server/Dockerfile) |
| Security / policy | 2 | [.github/workflows/npm-audit.yml](../../../../sources/line__line-bot-mcp-server/.github/workflows/npm-audit.yml)<br>[.github/scripts/npm-audit.sh](../../../../sources/line__line-bot-mcp-server/.github/scripts/npm-audit.sh) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | agent instruction files not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `test/tools/broadcastFlexMessage.test.ts`, `test/tools/broadcastTextMessage.test.ts`, `test/tools/cancelRichMenuDefault.test.ts`.
2. Trace execution through entrypoints: `src/index.ts`.
3. Map agent/tool runtime through: `test/tools/broadcastFlexMessage.test.ts`, `test/tools/broadcastTextMessage.test.ts`, `test/tools/cancelRichMenuDefault.test.ts`.
4. Inspect retrieval/memory/indexing through: `src/index.ts`.
5. Verify behavior through test/eval files: `tsconfig.test.json`, `test/tools/broadcastFlexMessage.test.ts`, `test/tools/broadcastTextMessage.test.ts`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 MCP server that integrates the LINE Messaging API to connect an AI Agent to the LINE Official Account.. 핵심 구조 신호는 TypeScript, package.json, Dockerfile, README.md, LICENSE, modelcontextprotocol이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 needs deeper structural scan입니다.
