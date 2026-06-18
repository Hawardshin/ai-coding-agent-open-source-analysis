# makenotion/notion-mcp-server Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Official Notion MCP Server

## 요약

- 조사 단위: `sources/makenotion__notion-mcp-server` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 52 files, 15 directories, depth score 111, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=src/openapi-mcp-server/index.ts, src/openapi-mcp-server/LICENSE, src/openapi-mcp-server/README.md이고, 의존성 단서는 modelcontextprotocol, express, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | makenotion/notion-mcp-server |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 4432 |
| Forks | 580 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/makenotion__notion-mcp-server](../../../../sources/makenotion__notion-mcp-server) |
| Existing report | [reports/global-trending/repositories/makenotion__notion-mcp-server.md](../../../global-trending/repositories/makenotion__notion-mcp-server.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 52 / 15 |
| Max observed depth | 6 |
| Top directories | .github, docs, scripts, src |
| Top extensions | .ts: 27, .md: 5, .png: 5, (none): 5, .json: 4, .yml: 4, .js: 1, .snap: 1 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 47 |
| docs | documentation surface | 6 |
| .github | ci surface | 1 |
| scripts | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| build | package.json | build | tsc -build && node scripts/build-cli.js |
| serve-dev | package.json | dev | tsx watch scripts/start-server.ts |
| test | package.json | test | NODE_ENV=test vitest run |
| test | package.json | test:watch | NODE_ENV=test vitest |
| test | package.json | test:coverage | NODE_ENV=test vitest run --coverage |
| entrypoint | package.json bin | cli.mjs | bin/cli.mjs |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | modelcontextprotocol |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | express |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [src/openapi-mcp-server/index.ts](../../../../sources/makenotion__notion-mcp-server/src/openapi-mcp-server/index.ts) | mcp signal |
| mcp | [src/openapi-mcp-server/LICENSE](../../../../sources/makenotion__notion-mcp-server/src/openapi-mcp-server/LICENSE) | mcp signal |
| mcp | [src/openapi-mcp-server/README.md](../../../../sources/makenotion__notion-mcp-server/src/openapi-mcp-server/README.md) | mcp signal |
| mcp | [src/openapi-mcp-server/openapi/file-upload.ts](../../../../sources/makenotion__notion-mcp-server/src/openapi-mcp-server/openapi/file-upload.ts) | mcp signal |
| instruction | [CLAUDE.md](../../../../sources/makenotion__notion-mcp-server/CLAUDE.md) | instruction signal |
| config | [package.json](../../../../sources/makenotion__notion-mcp-server/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/makenotion__notion-mcp-server/tsconfig.json) | config signal |
| ci | [.github/workflows/ci.yml](../../../../sources/makenotion__notion-mcp-server/.github/workflows/ci.yml) | ci support |
| ci | [.github/workflows/increment-version.yml](../../../../sources/makenotion__notion-mcp-server/.github/workflows/increment-version.yml) | ci support |
| container | [docker-compose.yml](../../../../sources/makenotion__notion-mcp-server/docker-compose.yml) | container support |
| container | [Dockerfile](../../../../sources/makenotion__notion-mcp-server/Dockerfile) | container support |
| eval | [src/openapi-mcp-server/openapi/__tests__/file-upload.test.ts](../../../../sources/makenotion__notion-mcp-server/src/openapi-mcp-server/openapi/__tests__/file-upload.test.ts) | eval support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 0 | not obvious |
| mcp | 25 | [src/openapi-mcp-server/index.ts](../../../../sources/makenotion__notion-mcp-server/src/openapi-mcp-server/index.ts)<br>[src/openapi-mcp-server/LICENSE](../../../../sources/makenotion__notion-mcp-server/src/openapi-mcp-server/LICENSE)<br>[src/openapi-mcp-server/README.md](../../../../sources/makenotion__notion-mcp-server/src/openapi-mcp-server/README.md)<br>[src/openapi-mcp-server/openapi/file-upload.ts](../../../../sources/makenotion__notion-mcp-server/src/openapi-mcp-server/openapi/file-upload.ts)<br>[src/openapi-mcp-server/openapi/parser.ts](../../../../sources/makenotion__notion-mcp-server/src/openapi-mcp-server/openapi/parser.ts)<br>[src/openapi-mcp-server/openapi/__tests__/file-upload.test.ts](../../../../sources/makenotion__notion-mcp-server/src/openapi-mcp-server/openapi/__tests__/file-upload.test.ts)<br>[src/openapi-mcp-server/openapi/__tests__/notion-markdown-tools.test.ts](../../../../sources/makenotion__notion-mcp-server/src/openapi-mcp-server/openapi/__tests__/notion-markdown-tools.test.ts)<br>[src/openapi-mcp-server/openapi/__tests__/notion-spec.snapshot.test.ts](../../../../sources/makenotion__notion-mcp-server/src/openapi-mcp-server/openapi/__tests__/notion-spec.snapshot.test.ts) |
| retrieval | 2 | [src/openapi-mcp-server/index.ts](../../../../sources/makenotion__notion-mcp-server/src/openapi-mcp-server/index.ts)<br>[src/openapi-mcp-server/auth/index.ts](../../../../sources/makenotion__notion-mcp-server/src/openapi-mcp-server/auth/index.ts) |
| spec | 2 | [src/openapi-mcp-server/openapi/__tests__/notion-spec.snapshot.test.ts](../../../../sources/makenotion__notion-mcp-server/src/openapi-mcp-server/openapi/__tests__/notion-spec.snapshot.test.ts)<br>[src/openapi-mcp-server/openapi/__tests__/__snapshots__/notion-spec.snapshot.test.ts.snap](../../../../sources/makenotion__notion-mcp-server/src/openapi-mcp-server/openapi/__tests__/__snapshots__/notion-spec.snapshot.test.ts.snap) |
| eval | 14 | [src/openapi-mcp-server/openapi/__tests__/file-upload.test.ts](../../../../sources/makenotion__notion-mcp-server/src/openapi-mcp-server/openapi/__tests__/file-upload.test.ts)<br>[src/openapi-mcp-server/openapi/__tests__/notion-markdown-tools.test.ts](../../../../sources/makenotion__notion-mcp-server/src/openapi-mcp-server/openapi/__tests__/notion-markdown-tools.test.ts)<br>[src/openapi-mcp-server/openapi/__tests__/notion-spec.snapshot.test.ts](../../../../sources/makenotion__notion-mcp-server/src/openapi-mcp-server/openapi/__tests__/notion-spec.snapshot.test.ts)<br>[src/openapi-mcp-server/openapi/__tests__/parser-multipart.test.ts](../../../../sources/makenotion__notion-mcp-server/src/openapi-mcp-server/openapi/__tests__/parser-multipart.test.ts)<br>[src/openapi-mcp-server/openapi/__tests__/parser.test.ts](../../../../sources/makenotion__notion-mcp-server/src/openapi-mcp-server/openapi/__tests__/parser.test.ts)<br>[src/openapi-mcp-server/openapi/__tests__/__snapshots__/notion-spec.snapshot.test.ts.snap](../../../../sources/makenotion__notion-mcp-server/src/openapi-mcp-server/openapi/__tests__/__snapshots__/notion-spec.snapshot.test.ts.snap)<br>[src/openapi-mcp-server/mcp/__tests__/proxy.test.ts](../../../../sources/makenotion__notion-mcp-server/src/openapi-mcp-server/mcp/__tests__/proxy.test.ts)<br>[src/openapi-mcp-server/mcp/__tests__/token.test.ts](../../../../sources/makenotion__notion-mcp-server/src/openapi-mcp-server/mcp/__tests__/token.test.ts) |
| security | 3 | [src/openapi-mcp-server/auth/index.ts](../../../../sources/makenotion__notion-mcp-server/src/openapi-mcp-server/auth/index.ts)<br>[src/openapi-mcp-server/auth/template.ts](../../../../sources/makenotion__notion-mcp-server/src/openapi-mcp-server/auth/template.ts)<br>[src/openapi-mcp-server/auth/types.ts](../../../../sources/makenotion__notion-mcp-server/src/openapi-mcp-server/auth/types.ts) |
| ci | 3 | [.github/workflows/ci.yml](../../../../sources/makenotion__notion-mcp-server/.github/workflows/ci.yml)<br>[.github/workflows/increment-version.yml](../../../../sources/makenotion__notion-mcp-server/.github/workflows/increment-version.yml)<br>[.github/workflows/publish.yml](../../../../sources/makenotion__notion-mcp-server/.github/workflows/publish.yml) |
| container | 2 | [docker-compose.yml](../../../../sources/makenotion__notion-mcp-server/docker-compose.yml)<br>[Dockerfile](../../../../sources/makenotion__notion-mcp-server/Dockerfile) |
| instruction | 1 | [CLAUDE.md](../../../../sources/makenotion__notion-mcp-server/CLAUDE.md) |
| docs | 7 | [README.md](../../../../sources/makenotion__notion-mcp-server/README.md)<br>[src/openapi-mcp-server/README.md](../../../../sources/makenotion__notion-mcp-server/src/openapi-mcp-server/README.md)<br>[docs/images/connections.png](../../../../sources/makenotion__notion-mcp-server/docs/images/connections.png)<br>[docs/images/integration-access.png](../../../../sources/makenotion__notion-mcp-server/docs/images/integration-access.png)<br>[docs/images/integrations-capabilities.png](../../../../sources/makenotion__notion-mcp-server/docs/images/integrations-capabilities.png)<br>[docs/images/integrations-creation.png](../../../../sources/makenotion__notion-mcp-server/docs/images/integrations-creation.png)<br>[docs/images/page-access-edit.png](../../../../sources/makenotion__notion-mcp-server/docs/images/page-access-edit.png) |
| config | 2 | [package.json](../../../../sources/makenotion__notion-mcp-server/package.json)<br>[tsconfig.json](../../../../sources/makenotion__notion-mcp-server/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 14 | [src/openapi-mcp-server/openapi/__tests__/file-upload.test.ts](../../../../sources/makenotion__notion-mcp-server/src/openapi-mcp-server/openapi/__tests__/file-upload.test.ts)<br>[src/openapi-mcp-server/openapi/__tests__/notion-markdown-tools.test.ts](../../../../sources/makenotion__notion-mcp-server/src/openapi-mcp-server/openapi/__tests__/notion-markdown-tools.test.ts)<br>[src/openapi-mcp-server/openapi/__tests__/notion-spec.snapshot.test.ts](../../../../sources/makenotion__notion-mcp-server/src/openapi-mcp-server/openapi/__tests__/notion-spec.snapshot.test.ts)<br>[src/openapi-mcp-server/openapi/__tests__/parser-multipart.test.ts](../../../../sources/makenotion__notion-mcp-server/src/openapi-mcp-server/openapi/__tests__/parser-multipart.test.ts)<br>[src/openapi-mcp-server/openapi/__tests__/parser.test.ts](../../../../sources/makenotion__notion-mcp-server/src/openapi-mcp-server/openapi/__tests__/parser.test.ts)<br>[src/openapi-mcp-server/openapi/__tests__/__snapshots__/notion-spec.snapshot.test.ts.snap](../../../../sources/makenotion__notion-mcp-server/src/openapi-mcp-server/openapi/__tests__/__snapshots__/notion-spec.snapshot.test.ts.snap) |
| CI workflows | 3 | [.github/workflows/ci.yml](../../../../sources/makenotion__notion-mcp-server/.github/workflows/ci.yml)<br>[.github/workflows/increment-version.yml](../../../../sources/makenotion__notion-mcp-server/.github/workflows/increment-version.yml)<br>[.github/workflows/publish.yml](../../../../sources/makenotion__notion-mcp-server/.github/workflows/publish.yml) |
| Containers / deploy | 2 | [docker-compose.yml](../../../../sources/makenotion__notion-mcp-server/docker-compose.yml)<br>[Dockerfile](../../../../sources/makenotion__notion-mcp-server/Dockerfile) |
| Security / policy | 3 | [src/openapi-mcp-server/auth/index.ts](../../../../sources/makenotion__notion-mcp-server/src/openapi-mcp-server/auth/index.ts)<br>[src/openapi-mcp-server/auth/template.ts](../../../../sources/makenotion__notion-mcp-server/src/openapi-mcp-server/auth/template.ts)<br>[src/openapi-mcp-server/auth/types.ts](../../../../sources/makenotion__notion-mcp-server/src/openapi-mcp-server/auth/types.ts) |
| Agent instructions | 1 | [CLAUDE.md](../../../../sources/makenotion__notion-mcp-server/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `src/openapi-mcp-server/index.ts`, `src/openapi-mcp-server/LICENSE`, `src/openapi-mcp-server/README.md`.
2. Inspect retrieval/memory/indexing through: `src/openapi-mcp-server/index.ts`, `src/openapi-mcp-server/auth/index.ts`.
3. Verify behavior through test/eval files: `src/openapi-mcp-server/openapi/__tests__/file-upload.test.ts`, `src/openapi-mcp-server/openapi/__tests__/notion-markdown-tools.test.ts`, `src/openapi-mcp-server/openapi/__tests__/notion-spec.snapshot.test.ts`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Official Notion MCP Server. 핵심 구조 신호는 TypeScript, package.json, Dockerfile, docker-compose.yml, README.md, CLAUDE.md이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
