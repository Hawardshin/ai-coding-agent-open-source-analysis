# awkoy/notion-mcp-server Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Notion MCP server for Claude, Cursor, ChatGPT & Claude Desktop. Connect AI agents to Notion via Model Context Protocol — pages, databases, blocks, comments, files.

## 요약

- 조사 단위: `sources/awkoy__notion-mcp-server` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 98 files, 16 directories, depth score 111, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=mcp-registry-submission/README.md, mcp-registry-submission/server.yaml이고, 의존성 단서는 modelcontextprotocol, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | awkoy/notion-mcp-server |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 156 |
| Forks | 28 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/awkoy__notion-mcp-server](../../../../sources/awkoy__notion-mcp-server) |
| Existing report | [reports/global-trending/repositories/awkoy__notion-mcp-server.md](../../../global-trending/repositories/awkoy__notion-mcp-server.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 98 / 16 |
| Max observed depth | 3 |
| Top directories | .github, mcp-registry-submission, src, tests |
| Top extensions | .ts: 77, .yml: 5, (none): 5, .json: 4, .md: 4, .yaml: 2, .png: 1 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 25 |
| src | source boundary | 13 |
| .github | ci surface | 1 |
| mcp-registry-submission | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| build | package.json | build | shx rm -rf build && tsc && shx chmod +x build/*.js |
| build | package.json | prepare | npm run build |
| serve-dev | package.json | watch | tsc --watch |
| test | package.json | test | vitest run |
| test | package.json | test:watch | vitest |
| test | package.json | inspector | npx @modelcontextprotocol/inspector build/index.js -e NOTION_TOKEN=your_notion_token -e NOTION_PAGE_ID=your_notion_page_id |
| entrypoint | package.json bin | index.js | build/index.js |


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
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [mcp-registry-submission/README.md](../../../../sources/awkoy__notion-mcp-server/mcp-registry-submission/README.md) | mcp signal |
| mcp | [mcp-registry-submission/server.yaml](../../../../sources/awkoy__notion-mcp-server/mcp-registry-submission/server.yaml) | mcp signal |
| agentRuntime | [src/tools/index.ts](../../../../sources/awkoy__notion-mcp-server/src/tools/index.ts) | agentRuntime signal |
| agentRuntime | [src/tools/resources.ts](../../../../sources/awkoy__notion-mcp-server/src/tools/resources.ts) | agentRuntime signal |
| entrypoints | [src/index.ts](../../../../sources/awkoy__notion-mcp-server/src/index.ts) | entrypoints signal |
| config | [package.json](../../../../sources/awkoy__notion-mcp-server/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/awkoy__notion-mcp-server/tsconfig.json) | config signal |
| ci | [.github/workflows/ci.yml](../../../../sources/awkoy__notion-mcp-server/.github/workflows/ci.yml) | ci support |
| ci | [.github/workflows/publish-docker.yml](../../../../sources/awkoy__notion-mcp-server/.github/workflows/publish-docker.yml) | ci support |
| container | [docker-compose.yml](../../../../sources/awkoy__notion-mcp-server/docker-compose.yml) | container support |
| container | [Dockerfile](../../../../sources/awkoy__notion-mcp-server/Dockerfile) | container support |
| eval | [tests/config.test.ts](../../../../sources/awkoy__notion-mcp-server/tests/config.test.ts) | eval support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 2 | [src/index.ts](../../../../sources/awkoy__notion-mcp-server/src/index.ts)<br>[mcp-registry-submission/server.yaml](../../../../sources/awkoy__notion-mcp-server/mcp-registry-submission/server.yaml) |
| agentRuntime | 2 | [src/tools/index.ts](../../../../sources/awkoy__notion-mcp-server/src/tools/index.ts)<br>[src/tools/resources.ts](../../../../sources/awkoy__notion-mcp-server/src/tools/resources.ts) |
| mcp | 2 | [mcp-registry-submission/README.md](../../../../sources/awkoy__notion-mcp-server/mcp-registry-submission/README.md)<br>[mcp-registry-submission/server.yaml](../../../../sources/awkoy__notion-mcp-server/mcp-registry-submission/server.yaml) |
| retrieval | 7 | [src/index.ts](../../../../sources/awkoy__notion-mcp-server/src/index.ts)<br>[src/tools/index.ts](../../../../sources/awkoy__notion-mcp-server/src/tools/index.ts)<br>[src/server/index.ts](../../../../sources/awkoy__notion-mcp-server/src/server/index.ts)<br>[src/prompts/index.ts](../../../../sources/awkoy__notion-mcp-server/src/prompts/index.ts)<br>[src/operations/index.ts](../../../../sources/awkoy__notion-mcp-server/src/operations/index.ts)<br>[src/dispatch/index.ts](../../../../sources/awkoy__notion-mcp-server/src/dispatch/index.ts)<br>[src/config/index.ts](../../../../sources/awkoy__notion-mcp-server/src/config/index.ts) |
| spec | 0 | not obvious |
| eval | 23 | [tests/config.test.ts](../../../../sources/awkoy__notion-mcp-server/tests/config.test.ts)<br>[tests/dispatch.test.ts](../../../../sources/awkoy__notion-mcp-server/tests/dispatch.test.ts)<br>[tests/files.test.ts](../../../../sources/awkoy__notion-mcp-server/tests/files.test.ts)<br>[tests/filter-dsl.test.ts](../../../../sources/awkoy__notion-mcp-server/tests/filter-dsl.test.ts)<br>[tests/handlers.test.ts](../../../../sources/awkoy__notion-mcp-server/tests/handlers.test.ts)<br>[tests/http-auth.test.ts](../../../../sources/awkoy__notion-mcp-server/tests/http-auth.test.ts)<br>[tests/http-config.test.ts](../../../../sources/awkoy__notion-mcp-server/tests/http-config.test.ts)<br>[tests/http-integration.test.ts](../../../../sources/awkoy__notion-mcp-server/tests/http-integration.test.ts) |
| security | 3 | [tests/http-auth.test.ts](../../../../sources/awkoy__notion-mcp-server/tests/http-auth.test.ts)<br>[src/services/auth.ts](../../../../sources/awkoy__notion-mcp-server/src/services/auth.ts)<br>[src/server/auth.ts](../../../../sources/awkoy__notion-mcp-server/src/server/auth.ts) |
| ci | 3 | [.github/workflows/ci.yml](../../../../sources/awkoy__notion-mcp-server/.github/workflows/ci.yml)<br>[.github/workflows/publish-docker.yml](../../../../sources/awkoy__notion-mcp-server/.github/workflows/publish-docker.yml)<br>[.github/workflows/publish-npm.yml](../../../../sources/awkoy__notion-mcp-server/.github/workflows/publish-npm.yml) |
| container | 2 | [docker-compose.yml](../../../../sources/awkoy__notion-mcp-server/docker-compose.yml)<br>[Dockerfile](../../../../sources/awkoy__notion-mcp-server/Dockerfile) |
| instruction | 0 | not obvious |
| docs | 2 | [README.md](../../../../sources/awkoy__notion-mcp-server/README.md)<br>[mcp-registry-submission/README.md](../../../../sources/awkoy__notion-mcp-server/mcp-registry-submission/README.md) |
| config | 2 | [package.json](../../../../sources/awkoy__notion-mcp-server/package.json)<br>[tsconfig.json](../../../../sources/awkoy__notion-mcp-server/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 23 | [tests/config.test.ts](../../../../sources/awkoy__notion-mcp-server/tests/config.test.ts)<br>[tests/dispatch.test.ts](../../../../sources/awkoy__notion-mcp-server/tests/dispatch.test.ts)<br>[tests/files.test.ts](../../../../sources/awkoy__notion-mcp-server/tests/files.test.ts)<br>[tests/filter-dsl.test.ts](../../../../sources/awkoy__notion-mcp-server/tests/filter-dsl.test.ts)<br>[tests/handlers.test.ts](../../../../sources/awkoy__notion-mcp-server/tests/handlers.test.ts)<br>[tests/http-auth.test.ts](../../../../sources/awkoy__notion-mcp-server/tests/http-auth.test.ts) |
| CI workflows | 3 | [.github/workflows/ci.yml](../../../../sources/awkoy__notion-mcp-server/.github/workflows/ci.yml)<br>[.github/workflows/publish-docker.yml](../../../../sources/awkoy__notion-mcp-server/.github/workflows/publish-docker.yml)<br>[.github/workflows/publish-npm.yml](../../../../sources/awkoy__notion-mcp-server/.github/workflows/publish-npm.yml) |
| Containers / deploy | 2 | [docker-compose.yml](../../../../sources/awkoy__notion-mcp-server/docker-compose.yml)<br>[Dockerfile](../../../../sources/awkoy__notion-mcp-server/Dockerfile) |
| Security / policy | 3 | [tests/http-auth.test.ts](../../../../sources/awkoy__notion-mcp-server/tests/http-auth.test.ts)<br>[src/services/auth.ts](../../../../sources/awkoy__notion-mcp-server/src/services/auth.ts)<br>[src/server/auth.ts](../../../../sources/awkoy__notion-mcp-server/src/server/auth.ts) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | agent instruction files not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `mcp-registry-submission/README.md`, `mcp-registry-submission/server.yaml`, `src/tools/index.ts`.
2. Trace execution through entrypoints: `src/index.ts`, `mcp-registry-submission/server.yaml`.
3. Map agent/tool runtime through: `src/tools/index.ts`, `src/tools/resources.ts`.
4. Inspect retrieval/memory/indexing through: `src/index.ts`, `src/tools/index.ts`, `src/server/index.ts`.
5. Verify behavior through test/eval files: `tests/config.test.ts`, `tests/dispatch.test.ts`, `tests/files.test.ts`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Notion MCP server for Claude, Cursor, ChatGPT & Claude Desktop. Connect AI agents to Notion via Model Context Protocol —. 핵심 구조 신호는 TypeScript, package.json, Dockerfile, docker-compose.yml, README.md, LICENSE이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
