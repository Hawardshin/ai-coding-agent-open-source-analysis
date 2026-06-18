# getmaxun/maxun Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

🔥 The open-source no-code platform for web scraping, crawling, search and AI data extraction • Turn websites into structured APIs in minutes 🔥

## 요약

- 조사 단위: `sources/getmaxun__maxun` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 256 files, 68 directories, depth score 104, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 api/server, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 mcp=server/tsconfig.mcp.json, server/src/mcp-worker.ts, public/svg/mcp.svg이고, 의존성 단서는 anthropic, modelcontextprotocol, express, next, react, playwright, 검증/운영 단서는 container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | getmaxun/maxun |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 15927 |
| Forks | 1329 |
| License | none |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/getmaxun__maxun](../../../../sources/getmaxun__maxun) |
| Existing report | [reports/global-trending/repositories/getmaxun__maxun.md](../../../global-trending/repositories/getmaxun__maxun.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 256 / 68 |
| Max observed depth | 5 |
| Top directories | .github, browser, docs, legacy, maxun-core, public, server, src |
| Top extensions | .ts: 97, .tsx: 92, .json: 17, .svg: 12, .js: 10, (none): 9, .md: 7, .sh: 3, .conf: 2, .yml: 2, .backend: 1, .css: 1 |
| Source patterns | api/server, agent/tool runtime, retrieval/vector path, security/policy surface, containerized deploy, ui/extension surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| server | source boundary | 25 |
| src | source boundary | 17 |
| docs | documentation surface | 3 |
| .github | ci surface | 1 |
| browser | top-level component | 1 |
| legacy | top-level component | 1 |
| maxun-core | top-level component | 1 |
| public | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| serve-dev | package.json | start | npm run build:server && concurrently -k "npm run server" "npm run client" |
| serve-dev | package.json | server | cross-env NODE_OPTIONS='--max-old-space-size=4096' node server/dist/server/src/server.js |
| serve-dev | package.json | start:dev | concurrently -k "npm run server:dev" "npm run client" |
| serve-dev | package.json | server:dev | cross-env NODE_OPTIONS='--max-old-space-size=4096' nodemon server/src/server.ts |
| serve-dev | package.json | client | vite |
| serve-dev | package.json | build | vite build |
| serve-dev | package.json | build:server | tsc -p server/tsconfig.json |
| serve-dev | package.json | preview | vite preview |
| quality | package.json | lint | ./node_modules/.bin/eslint . |
| utility | package.json | migrate | sequelize-cli db:migrate |
| utility | package.json | migrate:undo | sequelize-cli db:migrate:undo |
| utility | package.json | migrate:undo:all | sequelize-cli db:migrate:undo:all |
| utility | package.json | seed | sequelize-cli db:seed:all |
| utility | package.json | seed:undo:all | sequelize-cli db:seed:undo:all |
| utility | package.json | migration:generate | sequelize-cli migration:generate --name |
| serve-dev | package.json | mcp:build | tsc --project server/tsconfig.mcp.json |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | anthropic |
| agentProtocols | modelcontextprotocol |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | express, next, react |
| developerSurface | none |
| observability | none |
| browserAutomation | playwright |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [server/tsconfig.mcp.json](../../../../sources/getmaxun__maxun/server/tsconfig.mcp.json) | mcp signal |
| mcp | [server/src/mcp-worker.ts](../../../../sources/getmaxun__maxun/server/src/mcp-worker.ts) | mcp signal |
| mcp | [public/svg/mcp.svg](../../../../sources/getmaxun__maxun/public/svg/mcp.svg) | mcp signal |
| agentRuntime | [src/context/auth.tsx](../../../../sources/getmaxun__maxun/src/context/auth.tsx) | agentRuntime signal |
| agentRuntime | [src/context/browserActions.tsx](../../../../sources/getmaxun__maxun/src/context/browserActions.tsx) | agentRuntime signal |
| agentRuntime | [src/context/browserDimensions.tsx](../../../../sources/getmaxun__maxun/src/context/browserDimensions.tsx) | agentRuntime signal |
| agentRuntime | [src/context/browserSteps.tsx](../../../../sources/getmaxun__maxun/src/context/browserSteps.tsx) | agentRuntime signal |
| entrypoints | [src/App.tsx](../../../../sources/getmaxun__maxun/src/App.tsx) | entrypoints signal |
| entrypoints | [src/index.css](../../../../sources/getmaxun__maxun/src/index.css) | entrypoints signal |
| entrypoints | [src/index.tsx](../../../../sources/getmaxun__maxun/src/index.tsx) | entrypoints signal |
| entrypoints | [server/src/index.ts](../../../../sources/getmaxun__maxun/server/src/index.ts) | entrypoints signal |
| config | [package.json](../../../../sources/getmaxun__maxun/package.json) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 7 | [src/App.tsx](../../../../sources/getmaxun__maxun/src/App.tsx)<br>[src/index.css](../../../../sources/getmaxun__maxun/src/index.css)<br>[src/index.tsx](../../../../sources/getmaxun__maxun/src/index.tsx)<br>[server/src/index.ts](../../../../sources/getmaxun__maxun/server/src/index.ts)<br>[server/src/server.ts](../../../../sources/getmaxun__maxun/server/src/server.ts)<br>[maxun-core/src/index.ts](../../../../sources/getmaxun__maxun/maxun-core/src/index.ts)<br>[browser/server.ts](../../../../sources/getmaxun__maxun/browser/server.ts) |
| agentRuntime | 19 | [src/context/auth.tsx](../../../../sources/getmaxun__maxun/src/context/auth.tsx)<br>[src/context/browserActions.tsx](../../../../sources/getmaxun__maxun/src/context/browserActions.tsx)<br>[src/context/browserDimensions.tsx](../../../../sources/getmaxun__maxun/src/context/browserDimensions.tsx)<br>[src/context/browserSteps.tsx](../../../../sources/getmaxun__maxun/src/context/browserSteps.tsx)<br>[src/context/globalInfo.tsx](../../../../sources/getmaxun__maxun/src/context/globalInfo.tsx)<br>[src/context/socket.tsx](../../../../sources/getmaxun__maxun/src/context/socket.tsx)<br>[src/context/theme-provider.tsx](../../../../sources/getmaxun__maxun/src/context/theme-provider.tsx)<br>[src/api/workflow.ts](../../../../sources/getmaxun__maxun/src/api/workflow.ts) |
| mcp | 3 | [server/tsconfig.mcp.json](../../../../sources/getmaxun__maxun/server/tsconfig.mcp.json)<br>[server/src/mcp-worker.ts](../../../../sources/getmaxun__maxun/server/src/mcp-worker.ts)<br>[public/svg/mcp.svg](../../../../sources/getmaxun__maxun/public/svg/mcp.svg) |
| retrieval | 11 | [index.html](../../../../sources/getmaxun__maxun/index.html)<br>[src/index.css](../../../../sources/getmaxun__maxun/src/index.css)<br>[src/index.tsx](../../../../sources/getmaxun__maxun/src/index.tsx)<br>[src/components/action/action-settings/index.ts](../../../../sources/getmaxun__maxun/src/components/action/action-settings/index.ts)<br>[server/src/index.ts](../../../../sources/getmaxun__maxun/server/src/index.ts)<br>[server/src/workflow-management/scheduler/index.ts](../../../../sources/getmaxun__maxun/server/src/workflow-management/scheduler/index.ts)<br>[server/src/types/index.ts](../../../../sources/getmaxun__maxun/server/src/types/index.ts)<br>[server/src/routes/index.ts](../../../../sources/getmaxun__maxun/server/src/routes/index.ts) |
| spec | 0 | not obvious |
| eval | 0 | not obvious |
| security | 5 | [src/context/auth.tsx](../../../../sources/getmaxun__maxun/src/context/auth.tsx)<br>[src/api/auth.ts](../../../../sources/getmaxun__maxun/src/api/auth.ts)<br>[server/src/utils/auth.ts](../../../../sources/getmaxun__maxun/server/src/utils/auth.ts)<br>[server/src/routes/auth.ts](../../../../sources/getmaxun__maxun/server/src/routes/auth.ts)<br>[server/src/middlewares/auth.ts](../../../../sources/getmaxun__maxun/server/src/middlewares/auth.ts) |
| ci | 0 | not obvious |
| container | 4 | [docker-compose.yml](../../../../sources/getmaxun__maxun/docker-compose.yml)<br>[Dockerfile.backend](../../../../sources/getmaxun__maxun/Dockerfile.backend)<br>[Dockerfile.frontend](../../../../sources/getmaxun__maxun/Dockerfile.frontend)<br>[browser/Dockerfile](../../../../sources/getmaxun__maxun/browser/Dockerfile) |
| instruction | 0 | not obvious |
| docs | 4 | [README.md](../../../../sources/getmaxun__maxun/README.md)<br>[maxun-core/README.md](../../../../sources/getmaxun__maxun/maxun-core/README.md)<br>[docs/nginx.conf](../../../../sources/getmaxun__maxun/docs/nginx.conf)<br>[docs/self-hosting-docker.md](../../../../sources/getmaxun__maxun/docs/self-hosting-docker.md) |
| config | 7 | [package.json](../../../../sources/getmaxun__maxun/package.json)<br>[tsconfig.json](../../../../sources/getmaxun__maxun/tsconfig.json)<br>[server/tsconfig.json](../../../../sources/getmaxun__maxun/server/tsconfig.json)<br>[maxun-core/package.json](../../../../sources/getmaxun__maxun/maxun-core/package.json)<br>[maxun-core/tsconfig.json](../../../../sources/getmaxun__maxun/maxun-core/tsconfig.json)<br>[browser/package.json](../../../../sources/getmaxun__maxun/browser/package.json)<br>[browser/tsconfig.json](../../../../sources/getmaxun__maxun/browser/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 0 | not obvious |
| CI workflows | 0 | not obvious |
| Containers / deploy | 4 | [docker-compose.yml](../../../../sources/getmaxun__maxun/docker-compose.yml)<br>[Dockerfile.backend](../../../../sources/getmaxun__maxun/Dockerfile.backend)<br>[Dockerfile.frontend](../../../../sources/getmaxun__maxun/Dockerfile.frontend)<br>[browser/Dockerfile](../../../../sources/getmaxun__maxun/browser/Dockerfile) |
| Security / policy | 5 | [src/context/auth.tsx](../../../../sources/getmaxun__maxun/src/context/auth.tsx)<br>[src/api/auth.ts](../../../../sources/getmaxun__maxun/src/api/auth.ts)<br>[server/src/utils/auth.ts](../../../../sources/getmaxun__maxun/server/src/utils/auth.ts)<br>[server/src/routes/auth.ts](../../../../sources/getmaxun__maxun/server/src/routes/auth.ts)<br>[server/src/middlewares/auth.ts](../../../../sources/getmaxun__maxun/server/src/middlewares/auth.ts) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | CI workflow path not obvious; test/eval path not obvious |
| security | agent instruction files not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `server/tsconfig.mcp.json`, `server/src/mcp-worker.ts`, `public/svg/mcp.svg`.
2. Trace execution through entrypoints: `src/App.tsx`, `src/index.css`, `src/index.tsx`.
3. Map agent/tool runtime through: `src/context/auth.tsx`, `src/context/browserActions.tsx`, `src/context/browserDimensions.tsx`.
4. Inspect retrieval/memory/indexing through: `index.html`, `src/index.css`, `src/index.tsx`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 🔥 The open source no code platform for web scraping, crawling, search and AI data extraction • Turn websites into struc. 핵심 구조 신호는 TypeScript, package.json, docker-compose.yml, README.md, LICENSE, anthropic이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
