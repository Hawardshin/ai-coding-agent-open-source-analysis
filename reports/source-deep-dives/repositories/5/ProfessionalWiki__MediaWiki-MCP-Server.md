# ProfessionalWiki/MediaWiki-MCP-Server Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Model Context Protocol (MCP) Server to connect your AI with any MediaWiki

## 요약

- 조사 단위: `sources/ProfessionalWiki__MediaWiki-MCP-Server` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 306 files, 41 directories, depth score 120, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=mcp.docker.json, mcp.json이고, 의존성 단서는 anthropic, mcp, modelcontextprotocol, express, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | ProfessionalWiki/MediaWiki-MCP-Server |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 96 |
| Forks | 25 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/ProfessionalWiki__MediaWiki-MCP-Server](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server) |
| Existing report | [reports/global-trending/repositories/ProfessionalWiki__MediaWiki-MCP-Server.md](../../../global-trending/repositories/ProfessionalWiki__MediaWiki-MCP-Server.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 306 / 41 |
| Max observed depth | 5 |
| Top directories | .github, docs, mcpb, scripts, src, tests |
| Top extensions | .ts: 261, .json: 13, .md: 13, .cjs: 8, (none): 6, .yml: 5 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 110 |
| src | source boundary | 28 |
| docs | documentation surface | 7 |
| .github | ci surface | 1 |
| mcpb | top-level component | 1 |
| scripts | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| serve-dev | package.json | start | node dist/index.js |
| serve-dev | package.json | start:http | MCP_TRANSPORT=http node dist/index.js |
| serve-dev | package.json | dev | tsgo --watch |
| build | package.json | build | tsgo |
| test | package.json | fmt | oxfmt src tests scripts |
| test | package.json | fmt:check | oxfmt --check src tests scripts |
| test | package.json | test | vitest run |
| test | package.json | test:watch | vitest |
| quality | package.json | lint | oxlint --tsconfig=./tsconfig.lint.json |
| serve-dev | package.json | validate:server-json | node scripts/validate-server-json.cjs |
| test | package.json | preflight | npm ci && npm run lint && npm run fmt:check && npm run validate:server-json && npm run test && npm run build && npm run bundle -- --clean |
| utility | package.json | prepare | lefthook install |
| test | package.json | inspector | concurrently --kill-others "tsgo --watch" "npx -y @modelcontextprotocol/inspector@latest node dist/index.js" |
| test | package.json | inspector:http | concurrently --kill-others "tsgo --watch" "npx -y @modelcontextprotocol/inspector@latest" "MCP_TRANSPORT=http node dist/index.js" |
| test | package.json | mcpjam | concurrently --kill-others "tsgo --watch" "npx -y @mcpjam/inspector@latest node $(pwd)/dist/index.js" |
| build | package.json | bundle | npm run build && node scripts/bundle.cjs |
| utility | package.json | preversion | npm run preflight |
| serve-dev | package.json | version | node scripts/sync-version.cjs && node scripts/promote-changelog.cjs && git add server.json mcpb/manifest.json gemini-extension.json CHANGELOG.md |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | install | make install |
| utility | Makefile | update | make update |
| build | Makefile | build | make build |
| test | Makefile | test | make test |
| quality | Makefile | lint | make lint |
| serve-dev | Makefile | start | make start |
| serve-dev | Makefile | dev | make dev |
| test | Makefile | inspector | make inspector |
| utility | Makefile | mcpjam | make mcpjam |
| entrypoint | package.json bin | index.js | dist/index.js |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | anthropic |
| agentProtocols | mcp, modelcontextprotocol |
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
| mcp | [mcp.docker.json](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/mcp.docker.json) | mcp signal |
| mcp | [mcp.json](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/mcp.json) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/AGENTS.md) | agentRuntime signal |
| agentRuntime | [tests/tools/add-wiki.test.ts](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/tests/tools/add-wiki.test.ts) | agentRuntime signal |
| agentRuntime | [tests/tools/compare-pages.test.ts](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/tests/tools/compare-pages.test.ts) | agentRuntime signal |
| agentRuntime | [tests/tools/create-page.test.ts](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/tests/tools/create-page.test.ts) | agentRuntime signal |
| entrypoints | [server.json](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/server.json) | entrypoints signal |
| entrypoints | [src/index.ts](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/src/index.ts) | entrypoints signal |
| entrypoints | [src/server.ts](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/src/server.ts) | entrypoints signal |
| instruction | [CLAUDE.md](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/CLAUDE.md) | instruction signal |
| config | [Makefile](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/Makefile) | config signal |
| config | [package.json](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/package.json) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 3 | [server.json](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/server.json)<br>[src/index.ts](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/src/index.ts)<br>[src/server.ts](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/src/server.ts) |
| agentRuntime | 109 | [AGENTS.md](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/AGENTS.md)<br>[tests/tools/add-wiki.test.ts](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/tests/tools/add-wiki.test.ts)<br>[tests/tools/compare-pages.test.ts](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/tests/tools/compare-pages.test.ts)<br>[tests/tools/create-page.test.ts](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/tests/tools/create-page.test.ts)<br>[tests/tools/delete-page.test.ts](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/tests/tools/delete-page.test.ts)<br>[tests/tools/get-category-members.test.ts](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/tests/tools/get-category-members.test.ts)<br>[tests/tools/get-file-data.test.ts](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/tests/tools/get-file-data.test.ts)<br>[tests/tools/get-file.test.ts](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/tests/tools/get-file.test.ts) |
| mcp | 2 | [mcp.docker.json](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/mcp.docker.json)<br>[mcp.json](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/mcp.json) |
| retrieval | 16 | [tests/tools/add-wiki.test.ts](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/tests/tools/add-wiki.test.ts)<br>[tests/tools/index.test.ts](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/tests/tools/index.test.ts)<br>[tests/tools/remove-wiki.test.ts](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/tests/tools/remove-wiki.test.ts)<br>[tests/tools/extensions/index.test.ts](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/tests/tools/extensions/index.test.ts)<br>[tests/runtime/dispatch.wiki.test.ts](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/tests/runtime/dispatch.wiki.test.ts)<br>[tests/resources/index.test.ts](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/tests/resources/index.test.ts)<br>[src/index.ts](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/src/index.ts)<br>[src/tools/add-wiki.ts](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/src/tools/add-wiki.ts) |
| spec | 0 | not obvious |
| eval | 130 | [tests/setup.ts](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/tests/setup.ts)<br>[tests/wikis/activeWiki.test.ts](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/tests/wikis/activeWiki.test.ts)<br>[tests/wikis/execSecret.test.ts](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/tests/wikis/execSecret.test.ts)<br>[tests/wikis/mwnErrorSanitizer.test.ts](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/tests/wikis/mwnErrorSanitizer.test.ts)<br>[tests/wikis/mwnProvider.test.ts](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/tests/wikis/mwnProvider.test.ts)<br>[tests/wikis/siteInfo.test.ts](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/tests/wikis/siteInfo.test.ts)<br>[tests/wikis/uploadDirs.test.ts](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/tests/wikis/uploadDirs.test.ts)<br>[tests/wikis/wikiCache.test.ts](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/tests/wikis/wikiCache.test.ts) |
| security | 47 | [SECURITY.md](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/SECURITY.md)<br>[tests/transport/streamableHttp.oauth.test.ts](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/tests/transport/streamableHttp.oauth.test.ts)<br>[tests/tools/oauth-logout.test.ts](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/tests/tools/oauth-logout.test.ts)<br>[tests/tools/oauth-status.test.ts](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/tests/tools/oauth-status.test.ts)<br>[tests/runtime/dispatch.oauth.test.ts](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/tests/runtime/dispatch.oauth.test.ts)<br>[tests/auth/acquireToken.test.ts](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/tests/auth/acquireToken.test.ts)<br>[tests/auth/browserAuth.test.ts](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/tests/auth/browserAuth.test.ts)<br>[tests/auth/metadata.test.ts](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/tests/auth/metadata.test.ts) |
| ci | 3 | [.github/workflows/ci.yml](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/.github/workflows/ci.yml)<br>[.github/workflows/publish-image.yml](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/.github/workflows/publish-image.yml)<br>[.github/workflows/release.yml](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/.github/workflows/release.yml) |
| container | 1 | [Dockerfile](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/Dockerfile) |
| instruction | 2 | [AGENTS.md](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/AGENTS.md)<br>[CLAUDE.md](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/CLAUDE.md) |
| docs | 7 | [README.md](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/README.md)<br>[docs/configuration.md](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/docs/configuration.md)<br>[docs/deployment.md](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/docs/deployment.md)<br>[docs/operations.md](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/docs/operations.md)<br>[docs/releasing.md](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/docs/releasing.md)<br>[docs/testing.md](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/docs/testing.md)<br>[docs/tool-conventions.md](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/docs/tool-conventions.md) |
| config | 3 | [Makefile](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/Makefile)<br>[package.json](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/package.json)<br>[tsconfig.json](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 130 | [tests/setup.ts](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/tests/setup.ts)<br>[tests/wikis/activeWiki.test.ts](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/tests/wikis/activeWiki.test.ts)<br>[tests/wikis/execSecret.test.ts](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/tests/wikis/execSecret.test.ts)<br>[tests/wikis/mwnErrorSanitizer.test.ts](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/tests/wikis/mwnErrorSanitizer.test.ts)<br>[tests/wikis/mwnProvider.test.ts](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/tests/wikis/mwnProvider.test.ts)<br>[tests/wikis/siteInfo.test.ts](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/tests/wikis/siteInfo.test.ts) |
| CI workflows | 3 | [.github/workflows/ci.yml](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/.github/workflows/ci.yml)<br>[.github/workflows/publish-image.yml](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/.github/workflows/publish-image.yml)<br>[.github/workflows/release.yml](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/.github/workflows/release.yml) |
| Containers / deploy | 1 | [Dockerfile](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/Dockerfile) |
| Security / policy | 47 | [SECURITY.md](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/SECURITY.md)<br>[tests/transport/streamableHttp.oauth.test.ts](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/tests/transport/streamableHttp.oauth.test.ts)<br>[tests/tools/oauth-logout.test.ts](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/tests/tools/oauth-logout.test.ts)<br>[tests/tools/oauth-status.test.ts](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/tests/tools/oauth-status.test.ts)<br>[tests/runtime/dispatch.oauth.test.ts](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/tests/runtime/dispatch.oauth.test.ts)<br>[tests/auth/acquireToken.test.ts](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/tests/auth/acquireToken.test.ts) |
| Agent instructions | 2 | [AGENTS.md](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/AGENTS.md)<br>[CLAUDE.md](../../../../sources/ProfessionalWiki__MediaWiki-MCP-Server/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `mcp.docker.json`, `mcp.json`, `AGENTS.md`.
2. Trace execution through entrypoints: `server.json`, `src/index.ts`, `src/server.ts`.
3. Map agent/tool runtime through: `AGENTS.md`, `tests/tools/add-wiki.test.ts`, `tests/tools/compare-pages.test.ts`.
4. Inspect retrieval/memory/indexing through: `tests/tools/add-wiki.test.ts`, `tests/tools/index.test.ts`, `tests/tools/remove-wiki.test.ts`.
5. Verify behavior through test/eval files: `tests/setup.ts`, `tests/wikis/activeWiki.test.ts`, `tests/wikis/execSecret.test.ts`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Model Context Protocol MCP Server to connect your AI with any MediaWiki. 핵심 구조 신호는 TypeScript, package.json, Dockerfile, Makefile, README.md, AGENTS.md이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
