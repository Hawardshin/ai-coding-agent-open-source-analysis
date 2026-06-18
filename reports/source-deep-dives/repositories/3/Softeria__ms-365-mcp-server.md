# Softeria/ms-365-mcp-server Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

A Model Context Protocol (MCP) server for interacting with Microsoft 365 and Office services through the Graph API

## 요약

- 조사 단위: `sources/Softeria__ms-365-mcp-server` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 111 files, 12 directories, depth score 111, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=test/mcp-instructions.test.ts, src/mcp-instructions.ts, bin/modules/generate-mcp-tools.mjs이고, 의존성 단서는 modelcontextprotocol, express, commander, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | Softeria/ms-365-mcp-server |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 785 |
| Forks | 303 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/Softeria__ms-365-mcp-server](../../../../sources/Softeria__ms-365-mcp-server) |
| Existing report | [reports/global-trending/repositories/Softeria__ms-365-mcp-server.md](../../../global-trending/repositories/Softeria__ms-365-mcp-server.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 111 / 12 |
| Max observed depth | 3 |
| Top directories | .github, bin, docs, examples, src, test |
| Top extensions | .ts: 78, .js: 6, .json: 6, (none): 6, .md: 5, .mjs: 5, .yml: 2, .bicep: 1, .example: 1, .ps1: 1 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 18 |
| docs | documentation surface | 2 |
| .github | ci surface | 1 |
| bin | top-level component | 1 |
| examples | top-level component | 1 |
| examples/azure-container-apps | examples workspace | 1 |
| test | validation surface | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | package.json | generate | node bin/generate-graph-client.mjs |
| build | package.json | build | tsup |
| test | package.json | test | vitest run |
| test | package.json | test:watch | vitest |
| serve-dev | package.json | dev | tsx src/index.ts |
| serve-dev | package.json | dev:http | tsx --watch src/index.ts --http 127.0.0.1:3000 -v |
| quality | package.json | format | prettier --write "**/*.{ts,mts,js,mjs,json,md}" |
| quality | package.json | format:check | prettier --check "**/*.{ts,mts,js,mjs,json,md}" |
| quality | package.json | lint | eslint . |
| quality | package.json | lint:fix | eslint . --fix |
| test | package.json | verify | npm run generate && npm run lint && npm run format:check && npm run build && npm run test |
| test | package.json | inspector | npx @modelcontextprotocol/inspector tsx src/index.ts |
| entrypoint | package.json bin | index.js | dist/index.js |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | modelcontextprotocol |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | express |
| developerSurface | commander |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [test/mcp-instructions.test.ts](../../../../sources/Softeria__ms-365-mcp-server/test/mcp-instructions.test.ts) | mcp signal |
| mcp | [src/mcp-instructions.ts](../../../../sources/Softeria__ms-365-mcp-server/src/mcp-instructions.ts) | mcp signal |
| mcp | [bin/modules/generate-mcp-tools.mjs](../../../../sources/Softeria__ms-365-mcp-server/bin/modules/generate-mcp-tools.mjs) | mcp signal |
| agentRuntime | [test/tool-filtering.test.ts](../../../../sources/Softeria__ms-365-mcp-server/test/tool-filtering.test.ts) | agentRuntime signal |
| agentRuntime | [test/tool-schema.test.ts](../../../../sources/Softeria__ms-365-mcp-server/test/tool-schema.test.ts) | agentRuntime signal |
| agentRuntime | [src/tool-categories.ts](../../../../sources/Softeria__ms-365-mcp-server/src/tool-categories.ts) | agentRuntime signal |
| agentRuntime | [src/lib/tool-schema.ts](../../../../sources/Softeria__ms-365-mcp-server/src/lib/tool-schema.ts) | agentRuntime signal |
| entrypoints | [src/cli.ts](../../../../sources/Softeria__ms-365-mcp-server/src/cli.ts) | entrypoints signal |
| entrypoints | [src/index.ts](../../../../sources/Softeria__ms-365-mcp-server/src/index.ts) | entrypoints signal |
| entrypoints | [src/server.ts](../../../../sources/Softeria__ms-365-mcp-server/src/server.ts) | entrypoints signal |
| entrypoints | [bin/generate-graph-client.mjs](../../../../sources/Softeria__ms-365-mcp-server/bin/generate-graph-client.mjs) | entrypoints signal |
| config | [package.json](../../../../sources/Softeria__ms-365-mcp-server/package.json) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 8 | [src/cli.ts](../../../../sources/Softeria__ms-365-mcp-server/src/cli.ts)<br>[src/index.ts](../../../../sources/Softeria__ms-365-mcp-server/src/index.ts)<br>[src/server.ts](../../../../sources/Softeria__ms-365-mcp-server/src/server.ts)<br>[bin/generate-graph-client.mjs](../../../../sources/Softeria__ms-365-mcp-server/bin/generate-graph-client.mjs)<br>[bin/modules/download-openapi.mjs](../../../../sources/Softeria__ms-365-mcp-server/bin/modules/download-openapi.mjs)<br>[bin/modules/extract-descriptions.mjs](../../../../sources/Softeria__ms-365-mcp-server/bin/modules/extract-descriptions.mjs)<br>[bin/modules/generate-mcp-tools.mjs](../../../../sources/Softeria__ms-365-mcp-server/bin/modules/generate-mcp-tools.mjs)<br>[bin/modules/simplified-openapi.mjs](../../../../sources/Softeria__ms-365-mcp-server/bin/modules/simplified-openapi.mjs) |
| agentRuntime | 4 | [test/tool-filtering.test.ts](../../../../sources/Softeria__ms-365-mcp-server/test/tool-filtering.test.ts)<br>[test/tool-schema.test.ts](../../../../sources/Softeria__ms-365-mcp-server/test/tool-schema.test.ts)<br>[src/tool-categories.ts](../../../../sources/Softeria__ms-365-mcp-server/src/tool-categories.ts)<br>[src/lib/tool-schema.ts](../../../../sources/Softeria__ms-365-mcp-server/src/lib/tool-schema.ts) |
| mcp | 3 | [test/mcp-instructions.test.ts](../../../../sources/Softeria__ms-365-mcp-server/test/mcp-instructions.test.ts)<br>[src/mcp-instructions.ts](../../../../sources/Softeria__ms-365-mcp-server/src/mcp-instructions.ts)<br>[bin/modules/generate-mcp-tools.mjs](../../../../sources/Softeria__ms-365-mcp-server/bin/modules/generate-mcp-tools.mjs) |
| retrieval | 8 | [test/graph-api.test.ts](../../../../sources/Softeria__ms-365-mcp-server/test/graph-api.test.ts)<br>[test/graph-resilience.test.ts](../../../../sources/Softeria__ms-365-mcp-server/test/graph-resilience.test.ts)<br>[src/graph-client.ts](../../../../sources/Softeria__ms-365-mcp-server/src/graph-client.ts)<br>[src/graph-tools.ts](../../../../sources/Softeria__ms-365-mcp-server/src/graph-tools.ts)<br>[src/index.ts](../../../../sources/Softeria__ms-365-mcp-server/src/index.ts)<br>[src/lib/graph-resilience.ts](../../../../sources/Softeria__ms-365-mcp-server/src/lib/graph-resilience.ts)<br>[src/__tests__/graph-tools.test.ts](../../../../sources/Softeria__ms-365-mcp-server/src/__tests__/graph-tools.test.ts)<br>[bin/generate-graph-client.mjs](../../../../sources/Softeria__ms-365-mcp-server/bin/generate-graph-client.mjs) |
| spec | 0 | not obvious |
| eval | 50 | [test-calendar-fix.js](../../../../sources/Softeria__ms-365-mcp-server/test-calendar-fix.js)<br>[test-real-calendar.js](../../../../sources/Softeria__ms-365-mcp-server/test-real-calendar.js)<br>[test/allowed-scopes.test.ts](../../../../sources/Softeria__ms-365-mcp-server/test/allowed-scopes.test.ts)<br>[test/audit-log.test.ts](../../../../sources/Softeria__ms-365-mcp-server/test/audit-log.test.ts)<br>[test/auth-paths.test.ts](../../../../sources/Softeria__ms-365-mcp-server/test/auth-paths.test.ts)<br>[test/auth-pinning.test.ts](../../../../sources/Softeria__ms-365-mcp-server/test/auth-pinning.test.ts)<br>[test/auth-silent-error.test.ts](../../../../sources/Softeria__ms-365-mcp-server/test/auth-silent-error.test.ts)<br>[test/auth-storage.test.ts](../../../../sources/Softeria__ms-365-mcp-server/test/auth-storage.test.ts) |
| security | 14 | [SECURITY.md](../../../../sources/Softeria__ms-365-mcp-server/SECURITY.md)<br>[test/audit-log.test.ts](../../../../sources/Softeria__ms-365-mcp-server/test/audit-log.test.ts)<br>[test/auth-paths.test.ts](../../../../sources/Softeria__ms-365-mcp-server/test/auth-paths.test.ts)<br>[test/auth-pinning.test.ts](../../../../sources/Softeria__ms-365-mcp-server/test/auth-pinning.test.ts)<br>[test/auth-silent-error.test.ts](../../../../sources/Softeria__ms-365-mcp-server/test/auth-silent-error.test.ts)<br>[test/auth-storage.test.ts](../../../../sources/Softeria__ms-365-mcp-server/test/auth-storage.test.ts)<br>[test/auth-tools.test.ts](../../../../sources/Softeria__ms-365-mcp-server/test/auth-tools.test.ts)<br>[test/discovery-auth.test.ts](../../../../sources/Softeria__ms-365-mcp-server/test/discovery-auth.test.ts) |
| ci | 2 | [.github/workflows/build.yml](../../../../sources/Softeria__ms-365-mcp-server/.github/workflows/build.yml)<br>[.github/workflows/release.yml](../../../../sources/Softeria__ms-365-mcp-server/.github/workflows/release.yml) |
| container | 1 | [Dockerfile](../../../../sources/Softeria__ms-365-mcp-server/Dockerfile) |
| instruction | 0 | not obvious |
| docs | 4 | [README.md](../../../../sources/Softeria__ms-365-mcp-server/README.md)<br>[src/generated/README.md](../../../../sources/Softeria__ms-365-mcp-server/src/generated/README.md)<br>[examples/azure-container-apps/README.md](../../../../sources/Softeria__ms-365-mcp-server/examples/azure-container-apps/README.md)<br>[docs/deployment.md](../../../../sources/Softeria__ms-365-mcp-server/docs/deployment.md) |
| config | 2 | [package.json](../../../../sources/Softeria__ms-365-mcp-server/package.json)<br>[tsconfig.json](../../../../sources/Softeria__ms-365-mcp-server/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 50 | [test-calendar-fix.js](../../../../sources/Softeria__ms-365-mcp-server/test-calendar-fix.js)<br>[test-real-calendar.js](../../../../sources/Softeria__ms-365-mcp-server/test-real-calendar.js)<br>[test/allowed-scopes.test.ts](../../../../sources/Softeria__ms-365-mcp-server/test/allowed-scopes.test.ts)<br>[test/audit-log.test.ts](../../../../sources/Softeria__ms-365-mcp-server/test/audit-log.test.ts)<br>[test/auth-paths.test.ts](../../../../sources/Softeria__ms-365-mcp-server/test/auth-paths.test.ts)<br>[test/auth-pinning.test.ts](../../../../sources/Softeria__ms-365-mcp-server/test/auth-pinning.test.ts) |
| CI workflows | 2 | [.github/workflows/build.yml](../../../../sources/Softeria__ms-365-mcp-server/.github/workflows/build.yml)<br>[.github/workflows/release.yml](../../../../sources/Softeria__ms-365-mcp-server/.github/workflows/release.yml) |
| Containers / deploy | 1 | [Dockerfile](../../../../sources/Softeria__ms-365-mcp-server/Dockerfile) |
| Security / policy | 14 | [SECURITY.md](../../../../sources/Softeria__ms-365-mcp-server/SECURITY.md)<br>[test/audit-log.test.ts](../../../../sources/Softeria__ms-365-mcp-server/test/audit-log.test.ts)<br>[test/auth-paths.test.ts](../../../../sources/Softeria__ms-365-mcp-server/test/auth-paths.test.ts)<br>[test/auth-pinning.test.ts](../../../../sources/Softeria__ms-365-mcp-server/test/auth-pinning.test.ts)<br>[test/auth-silent-error.test.ts](../../../../sources/Softeria__ms-365-mcp-server/test/auth-silent-error.test.ts)<br>[test/auth-storage.test.ts](../../../../sources/Softeria__ms-365-mcp-server/test/auth-storage.test.ts) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | agent instruction files not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `test/mcp-instructions.test.ts`, `src/mcp-instructions.ts`, `bin/modules/generate-mcp-tools.mjs`.
2. Trace execution through entrypoints: `src/cli.ts`, `src/index.ts`, `src/server.ts`.
3. Map agent/tool runtime through: `test/tool-filtering.test.ts`, `test/tool-schema.test.ts`, `src/tool-categories.ts`.
4. Inspect retrieval/memory/indexing through: `test/graph-api.test.ts`, `test/graph-resilience.test.ts`, `src/graph-client.ts`.
5. Verify behavior through test/eval files: `test-calendar-fix.js`, `test-real-calendar.js`, `test/allowed-scopes.test.ts`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 A Model Context Protocol MCP server for interacting with Microsoft 365 and Office services through the Graph API. 핵심 구조 신호는 TypeScript, package.json, Dockerfile, README.md, LICENSE, modelcontextprotocol이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
