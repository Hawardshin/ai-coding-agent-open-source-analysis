# DAWNCR0W/affine-mcp-server Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Model Context Protocol server for AFFiNE. Connect AI assistants to AFFiNE workspaces, documents, databases, and collaboration APIs over stdio or HTTP.

## 요약

- 조사 단위: `sources/DAWNCR0W__affine-mcp-server` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 119 files, 15 directories, depth score 112, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=src/util/mcp.ts이고, 의존성 단서는 modelcontextprotocol, express, playwright, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | DAWNCR0W/affine-mcp-server |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 201 |
| Forks | 59 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/DAWNCR0W__affine-mcp-server](../../../../sources/DAWNCR0W__affine-mcp-server) |
| Existing report | [reports/global-trending/repositories/DAWNCR0W__affine-mcp-server.md](../../../global-trending/repositories/DAWNCR0W__affine-mcp-server.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 119 / 15 |
| Max observed depth | 3 |
| Top directories | .github, bin, docker, docs, scripts, src, tests |
| Top extensions | .mjs: 42, .ts: 37, .md: 13, .yml: 10, (none): 6, .json: 4, .sh: 3, .png: 2, .example: 1, .yaml: 1 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 42 |
| src | source boundary | 21 |
| docs | documentation surface | 11 |
| .github | ci surface | 1 |
| bin | top-level component | 1 |
| docker | documentation surface | 1 |
| scripts | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| build | package.json | clean | node -e "require('fs').rmSync('dist',{ recursive: true, force: true })" |
| build | package.json | build | npm run clean && tsc -p tsconfig.json |
| serve-dev | package.json | dev | tsx watch src/index.ts |
| serve-dev | package.json | start | node dist/index.js |
| serve-dev | package.json | start:http | MCP_TRANSPORT=http node dist/index.js |
| test | package.json | test | npm run test:tool-manifest |
| test | package.json | test:cli-version | node tests/test-cli-version.mjs |
| test | package.json | test:cli-commands | node tests/test-cli-commands.mjs |
| test | package.json | test:cli-live | node tests/test-cli-live.mjs |
| test | package.json | test:tool-manifest | node scripts/verify-tool-manifest.mjs |
| test | package.json | test:tool-filtering | node tests/test-tool-filtering.mjs |
| test | package.json | test:comprehensive | bash tests/run-comprehensive.sh |
| test | package.json | test:comprehensive:raw | node test-comprehensive.mjs |
| test | package.json | test:e2e | bash tests/run-e2e.sh |
| test | package.json | test:db-create | node tests/test-database-creation.mjs |
| test | package.json | test:db-cells | node tests/test-database-cells.mjs |
| test | package.json | test:db-linked-doc | node tests/test-database-linked-doc.mjs |
| test | package.json | test:db-ui-rows | node tests/test-database-ui-rows.mjs |
| test | package.json | test:db-schema | node tests/test-database-schema.mjs |
| test | package.json | test:data-view | node tests/test-data-view.mjs |
| test | package.json | test:doc-discovery | node tests/test-doc-discovery.mjs |
| test | package.json | test:doc-properties | node tests/test-doc-properties.mjs |
| test | package.json | test:icons | node tests/test-icons.mjs |
| test | package.json | test:read-doc-linked-refs | node tests/test-read-doc-linked-refs.mjs |
| test | package.json | test:find-doc-by-title | node tests/test-find-doc-by-title.mjs |
| test | package.json | test:create-placement | node tests/test-create-placement.mjs |
| test | package.json | test:surface-elements | node tests/test-surface-elements.mjs |
| test | package.json | test:surface-element-gating | node scripts/verify-surface-element-gating.mjs |
| test | package.json | test:edgeless-seed | node tests/test-edgeless-canvas-setup.mjs |
| test | package.json | test:edgeless-ui | npx playwright test tests/playwright/verify-edgeless-canvas.pw.ts --config tests/playwright/playwright.config.ts |
| test | package.json | test:capabilities-fidelity | node tests/test-capabilities-fidelity.mjs |
| test | package.json | test:native-template | node tests/test-native-template-instantiation.mjs |
| test | package.json | test:data-view-ui | npx playwright test tests/playwright/verify-data-view.pw.ts --config tests/playwright/playwright.config.ts |
| test | package.json | test:bearer | node tests/test-bearer-auth.mjs |
| test | package.json | test:http-email-password | node tests/test-http-email-password.mjs |
| test | package.json | test:http-bearer | node tests/test-http-bearer.mjs |
| test | package.json | test:oauth-http | node tests/test-oauth-http.mjs |
| test | package.json | test:organize | node tests/test-organize-tools.mjs |
| test | package.json | test:create-doc-folder-placement | node tests/test-create-doc-folder-placement.mjs |
| test | package.json | test:supporting-tools | node tests/test-supporting-tools.mjs |


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
| browserAutomation | playwright |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [src/util/mcp.ts](../../../../sources/DAWNCR0W__affine-mcp-server/src/util/mcp.ts) | mcp signal |
| agentRuntime | [tool-manifest.json](../../../../sources/DAWNCR0W__affine-mcp-server/tool-manifest.json) | agentRuntime signal |
| agentRuntime | [src/tools/accessTokens.ts](../../../../sources/DAWNCR0W__affine-mcp-server/src/tools/accessTokens.ts) | agentRuntime signal |
| agentRuntime | [src/tools/auth.ts](../../../../sources/DAWNCR0W__affine-mcp-server/src/tools/auth.ts) | agentRuntime signal |
| agentRuntime | [src/tools/blobStorage.ts](../../../../sources/DAWNCR0W__affine-mcp-server/src/tools/blobStorage.ts) | agentRuntime signal |
| entrypoints | [src/cli.ts](../../../../sources/DAWNCR0W__affine-mcp-server/src/cli.ts) | entrypoints signal |
| entrypoints | [src/index.ts](../../../../sources/DAWNCR0W__affine-mcp-server/src/index.ts) | entrypoints signal |
| entrypoints | [bin/affine-mcp](../../../../sources/DAWNCR0W__affine-mcp-server/bin/affine-mcp) | entrypoints signal |
| config | [package.json](../../../../sources/DAWNCR0W__affine-mcp-server/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/DAWNCR0W__affine-mcp-server/tsconfig.json) | config signal |
| ci | [.github/workflows/ci.yml](../../../../sources/DAWNCR0W__affine-mcp-server/.github/workflows/ci.yml) | ci support |
| ci | [.github/workflows/docker.yml](../../../../sources/DAWNCR0W__affine-mcp-server/.github/workflows/docker.yml) | ci support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 3 | [src/cli.ts](../../../../sources/DAWNCR0W__affine-mcp-server/src/cli.ts)<br>[src/index.ts](../../../../sources/DAWNCR0W__affine-mcp-server/src/index.ts)<br>[bin/affine-mcp](../../../../sources/DAWNCR0W__affine-mcp-server/bin/affine-mcp) |
| agentRuntime | 16 | [tool-manifest.json](../../../../sources/DAWNCR0W__affine-mcp-server/tool-manifest.json)<br>[src/tools/accessTokens.ts](../../../../sources/DAWNCR0W__affine-mcp-server/src/tools/accessTokens.ts)<br>[src/tools/auth.ts](../../../../sources/DAWNCR0W__affine-mcp-server/src/tools/auth.ts)<br>[src/tools/blobStorage.ts](../../../../sources/DAWNCR0W__affine-mcp-server/src/tools/blobStorage.ts)<br>[src/tools/comments.ts](../../../../sources/DAWNCR0W__affine-mcp-server/src/tools/comments.ts)<br>[src/tools/docs.ts](../../../../sources/DAWNCR0W__affine-mcp-server/src/tools/docs.ts)<br>[src/tools/history.ts](../../../../sources/DAWNCR0W__affine-mcp-server/src/tools/history.ts)<br>[src/tools/icons.ts](../../../../sources/DAWNCR0W__affine-mcp-server/src/tools/icons.ts) |
| mcp | 1 | [src/util/mcp.ts](../../../../sources/DAWNCR0W__affine-mcp-server/src/util/mcp.ts) |
| retrieval | 1 | [src/index.ts](../../../../sources/DAWNCR0W__affine-mcp-server/src/index.ts) |
| spec | 0 | not obvious |
| eval | 50 | [test-comprehensive.mjs](../../../../sources/DAWNCR0W__affine-mcp-server/test-comprehensive.mjs)<br>[tests/acquire-credentials.mjs](../../../../sources/DAWNCR0W__affine-mcp-server/tests/acquire-credentials.mjs)<br>[tests/generate-test-env.sh](../../../../sources/DAWNCR0W__affine-mcp-server/tests/generate-test-env.sh)<br>[tests/run-comprehensive.sh](../../../../sources/DAWNCR0W__affine-mcp-server/tests/run-comprehensive.sh)<br>[tests/run-e2e.sh](../../../../sources/DAWNCR0W__affine-mcp-server/tests/run-e2e.sh)<br>[tests/test-bearer-auth.mjs](../../../../sources/DAWNCR0W__affine-mcp-server/tests/test-bearer-auth.mjs)<br>[tests/test-canvas-tool-map-demo.mjs](../../../../sources/DAWNCR0W__affine-mcp-server/tests/test-canvas-tool-map-demo.mjs)<br>[tests/test-capabilities-fidelity.mjs](../../../../sources/DAWNCR0W__affine-mcp-server/tests/test-capabilities-fidelity.mjs) |
| security | 6 | [SECURITY.md](../../../../sources/DAWNCR0W__affine-mcp-server/SECURITY.md)<br>[tests/test-bearer-auth.mjs](../../../../sources/DAWNCR0W__affine-mcp-server/tests/test-bearer-auth.mjs)<br>[tests/test-oauth-http.mjs](../../../../sources/DAWNCR0W__affine-mcp-server/tests/test-oauth-http.mjs)<br>[src/auth.ts](../../../../sources/DAWNCR0W__affine-mcp-server/src/auth.ts)<br>[src/oauth.ts](../../../../sources/DAWNCR0W__affine-mcp-server/src/oauth.ts)<br>[src/tools/auth.ts](../../../../sources/DAWNCR0W__affine-mcp-server/src/tools/auth.ts) |
| ci | 5 | [.github/workflows/ci.yml](../../../../sources/DAWNCR0W__affine-mcp-server/.github/workflows/ci.yml)<br>[.github/workflows/docker.yml](../../../../sources/DAWNCR0W__affine-mcp-server/.github/workflows/docker.yml)<br>[.github/workflows/e2e.yml](../../../../sources/DAWNCR0W__affine-mcp-server/.github/workflows/e2e.yml)<br>[.github/workflows/enforce-pr-base.yml](../../../../sources/DAWNCR0W__affine-mcp-server/.github/workflows/enforce-pr-base.yml)<br>[.github/workflows/npm-publish.yml](../../../../sources/DAWNCR0W__affine-mcp-server/.github/workflows/npm-publish.yml) |
| container | 2 | [Dockerfile](../../../../sources/DAWNCR0W__affine-mcp-server/Dockerfile)<br>[docker/docker-compose.yml](../../../../sources/DAWNCR0W__affine-mcp-server/docker/docker-compose.yml) |
| instruction | 0 | not obvious |
| docs | 9 | [README.md](../../../../sources/DAWNCR0W__affine-mcp-server/README.md)<br>[docs/client-setup.md](../../../../sources/DAWNCR0W__affine-mcp-server/docs/client-setup.md)<br>[docs/configuration-and-deployment.md](../../../../sources/DAWNCR0W__affine-mcp-server/docs/configuration-and-deployment.md)<br>[docs/edgeless-canvas-cookbook.md](../../../../sources/DAWNCR0W__affine-mcp-server/docs/edgeless-canvas-cookbook.md)<br>[docs/getting-started.md](../../../../sources/DAWNCR0W__affine-mcp-server/docs/getting-started.md)<br>[docs/tool-reference.md](../../../../sources/DAWNCR0W__affine-mcp-server/docs/tool-reference.md)<br>[docs/workflow-recipes.md](../../../../sources/DAWNCR0W__affine-mcp-server/docs/workflow-recipes.md)<br>[docs/assets/edgeless-canvas-demo-advanced-dark.png](../../../../sources/DAWNCR0W__affine-mcp-server/docs/assets/edgeless-canvas-demo-advanced-dark.png) |
| config | 2 | [package.json](../../../../sources/DAWNCR0W__affine-mcp-server/package.json)<br>[tsconfig.json](../../../../sources/DAWNCR0W__affine-mcp-server/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 50 | [test-comprehensive.mjs](../../../../sources/DAWNCR0W__affine-mcp-server/test-comprehensive.mjs)<br>[tests/acquire-credentials.mjs](../../../../sources/DAWNCR0W__affine-mcp-server/tests/acquire-credentials.mjs)<br>[tests/generate-test-env.sh](../../../../sources/DAWNCR0W__affine-mcp-server/tests/generate-test-env.sh)<br>[tests/run-comprehensive.sh](../../../../sources/DAWNCR0W__affine-mcp-server/tests/run-comprehensive.sh)<br>[tests/run-e2e.sh](../../../../sources/DAWNCR0W__affine-mcp-server/tests/run-e2e.sh)<br>[tests/test-bearer-auth.mjs](../../../../sources/DAWNCR0W__affine-mcp-server/tests/test-bearer-auth.mjs) |
| CI workflows | 5 | [.github/workflows/ci.yml](../../../../sources/DAWNCR0W__affine-mcp-server/.github/workflows/ci.yml)<br>[.github/workflows/docker.yml](../../../../sources/DAWNCR0W__affine-mcp-server/.github/workflows/docker.yml)<br>[.github/workflows/e2e.yml](../../../../sources/DAWNCR0W__affine-mcp-server/.github/workflows/e2e.yml)<br>[.github/workflows/enforce-pr-base.yml](../../../../sources/DAWNCR0W__affine-mcp-server/.github/workflows/enforce-pr-base.yml)<br>[.github/workflows/npm-publish.yml](../../../../sources/DAWNCR0W__affine-mcp-server/.github/workflows/npm-publish.yml) |
| Containers / deploy | 2 | [Dockerfile](../../../../sources/DAWNCR0W__affine-mcp-server/Dockerfile)<br>[docker/docker-compose.yml](../../../../sources/DAWNCR0W__affine-mcp-server/docker/docker-compose.yml) |
| Security / policy | 6 | [SECURITY.md](../../../../sources/DAWNCR0W__affine-mcp-server/SECURITY.md)<br>[tests/test-bearer-auth.mjs](../../../../sources/DAWNCR0W__affine-mcp-server/tests/test-bearer-auth.mjs)<br>[tests/test-oauth-http.mjs](../../../../sources/DAWNCR0W__affine-mcp-server/tests/test-oauth-http.mjs)<br>[src/auth.ts](../../../../sources/DAWNCR0W__affine-mcp-server/src/auth.ts)<br>[src/oauth.ts](../../../../sources/DAWNCR0W__affine-mcp-server/src/oauth.ts)<br>[src/tools/auth.ts](../../../../sources/DAWNCR0W__affine-mcp-server/src/tools/auth.ts) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | agent instruction files not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `src/util/mcp.ts`, `tool-manifest.json`, `src/tools/accessTokens.ts`.
2. Trace execution through entrypoints: `src/cli.ts`, `src/index.ts`, `bin/affine-mcp`.
3. Map agent/tool runtime through: `tool-manifest.json`, `src/tools/accessTokens.ts`, `src/tools/auth.ts`.
4. Inspect retrieval/memory/indexing through: `src/index.ts`.
5. Verify behavior through test/eval files: `test-comprehensive.mjs`, `tests/acquire-credentials.mjs`, `tests/generate-test-env.sh`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Model Context Protocol server for AFFiNE. Connect AI assistants to AFFiNE workspaces, documents, databases, and collabor. 핵심 구조 신호는 TypeScript, package.json, Dockerfile, README.md, LICENSE, modelcontextprotocol이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
