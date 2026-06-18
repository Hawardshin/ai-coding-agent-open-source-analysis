# tableau/tableau-mcp Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Tableau's official MCP Server. Helping Agents see and understand data.

## 요약

- 조사 단위: `sources/tableau__tableau-mcp` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 660 files, 126 directories, depth score 123, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=src/web/apps/mcp-app.html, src/web/apps/src/mcp-app.css, src/web/apps/src/mcp-app.ts이고, 의존성 단서는 openai, anthropic, mcp, modelcontextprotocol, express, playwright, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | tableau/tableau-mcp |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 294 |
| Forks | 116 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/tableau__tableau-mcp](../../../../sources/tableau__tableau-mcp) |
| Existing report | [reports/global-trending/repositories/tableau__tableau-mcp.md](../../../global-trending/repositories/tableau__tableau-mcp.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 660 / 126 |
| Max observed depth | 6 |
| Top directories | .claude, .cursor, .github, docs, scripts, src, tests, types |
| Top extensions | .ts: 491, .md: 75, .json: 31, .png: 18, .yml: 14, (none): 11, .css: 4, .mdc: 4, .list: 3, .svg: 2, .tsx: 2, .html: 1 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 79 |
| docs | documentation surface | 59 |
| src | source boundary | 57 |
| .github | ci surface | 1 |
| scripts | top-level component | 1 |
| types | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| build | package.json | build | tsx src/scripts/build.ts |
| build | package.json | build:desktop | tsx src/scripts/build.ts --variant desktop |
| build | package.json | build:combined | tsx src/scripts/build.ts --variant combined |
| serve-dev | package.json | build:dev | tsx src/scripts/build.ts --dev |
| build | package.json | build:docker | docker build -t tableau-mcp . |
| build | package.json | :build:mcpb | npx -y @anthropic-ai/mcpb pack . tableau-mcp.mcpb |
| build | package.json | build:mcpb | run-s build:manifest :build:mcpb |
| build | package.json | build:manifest | tsx src/scripts/createClaudeMcpBundleManifest.ts |
| serve-dev | package.json | start:http | node build/index.js |
| serve-dev | package.json | start:http:apm | node -r ./build/telemetry/tracing.js build/index.js |
| serve-dev | package.json | start:http:docker | docker run -p 3927:3927 -i --rm --env-file env.list tableau-mcp |
| quality | package.json | lint | npm exec eslint |
| quality | package.json | lint:fix | npm exec eslint -- --fix |
| test | package.json | inspect | npx @modelcontextprotocol/inspector --config config.json --server tableau |
| test | package.json | :inspect:http | npx @modelcontextprotocol/inspector --config config.http.json --server tableau |
| test | package.json | inspect:http | run-p start:http :inspect:http |
| test | package.json | inspect:docker | npx @modelcontextprotocol/inspector --config config.docker.json --server tableau |
| test | package.json | inspect:docker:http | run-p start:http:docker :inspect:http |
| test | package.json | build:inspect | run-s build inspect |
| test | package.json | build:inspect:docker | run-s build:docker inspect:docker |
| test | package.json | build:inspect:docker:http | run-s build:docker inspect:docker:http |
| test | package.json | test | vitest --config ./vitest.config.ts |
| test | package.json | test:e2e | vitest --config ./vitest.config.e2e.ts |
| test | package.json | test:eval | vitest --config ./vitest.config.eval.ts |
| test | package.json | test:oauth:embedded | vitest --config ./vitest.config.oauth.embedded.ts |
| test | package.json | test:oauth:tableau | npx playwright test |
| test | package.json | coverage | vitest run --config ./vitest.config.ts --coverage |
| utility | package.json | version:major | npm version major --no-git-tag-version |
| utility | package.json | version:minor | npm version minor --no-git-tag-version |
| utility | package.json | version:patch | npm version patch --no-git-tag-version |
| serve-dev | package.json | docs:start | npm run start --prefix docs |
| entrypoint | package.json bin | index.js | ./build/index.js |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai, anthropic |
| agentProtocols | mcp, modelcontextprotocol |
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
| mcp | [src/web/apps/mcp-app.html](../../../../sources/tableau__tableau-mcp/src/web/apps/mcp-app.html) | mcp signal |
| mcp | [src/web/apps/src/mcp-app.css](../../../../sources/tableau__tableau-mcp/src/web/apps/src/mcp-app.css) | mcp signal |
| mcp | [src/web/apps/src/mcp-app.ts](../../../../sources/tableau__tableau-mcp/src/web/apps/src/mcp-app.ts) | mcp signal |
| mcp | [docs/docs/developers/mcp-inspector.md](../../../../sources/tableau__tableau-mcp/docs/docs/developers/mcp-inspector.md) | mcp signal |
| agentRuntime | [src/tools/tool.ts](../../../../sources/tableau__tableau-mcp/src/tools/tool.ts) | agentRuntime signal |
| agentRuntime | [src/tools/toolContext.ts](../../../../sources/tableau__tableau-mcp/src/tools/toolContext.ts) | agentRuntime signal |
| agentRuntime | [src/tools/toolName.test.ts](../../../../sources/tableau__tableau-mcp/src/tools/toolName.test.ts) | agentRuntime signal |
| agentRuntime | [src/tools/toolName.ts](../../../../sources/tableau__tableau-mcp/src/tools/toolName.ts) | agentRuntime signal |
| entrypoints | [tests/e2e/server.test.ts](../../../../sources/tableau__tableau-mcp/tests/e2e/server.test.ts) | entrypoints signal |
| entrypoints | [src/index.combined.ts](../../../../sources/tableau__tableau-mcp/src/index.combined.ts) | entrypoints signal |
| entrypoints | [src/index.desktop.ts](../../../../sources/tableau__tableau-mcp/src/index.desktop.ts) | entrypoints signal |
| entrypoints | [src/index.ts](../../../../sources/tableau__tableau-mcp/src/index.ts) | entrypoints signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 9 | [tests/e2e/server.test.ts](../../../../sources/tableau__tableau-mcp/tests/e2e/server.test.ts)<br>[src/index.combined.ts](../../../../sources/tableau__tableau-mcp/src/index.combined.ts)<br>[src/index.desktop.ts](../../../../sources/tableau__tableau-mcp/src/index.desktop.ts)<br>[src/index.ts](../../../../sources/tableau__tableau-mcp/src/index.ts)<br>[src/server.desktop.test.ts](../../../../sources/tableau__tableau-mcp/src/server.desktop.test.ts)<br>[src/server.desktop.ts](../../../../sources/tableau__tableau-mcp/src/server.desktop.ts)<br>[src/server.ts](../../../../sources/tableau__tableau-mcp/src/server.ts)<br>[src/server.web.test.ts](../../../../sources/tableau__tableau-mcp/src/server.web.test.ts) |
| agentRuntime | 206 | [src/tools/tool.ts](../../../../sources/tableau__tableau-mcp/src/tools/tool.ts)<br>[src/tools/toolContext.ts](../../../../sources/tableau__tableau-mcp/src/tools/toolContext.ts)<br>[src/tools/toolName.test.ts](../../../../sources/tableau__tableau-mcp/src/tools/toolName.test.ts)<br>[src/tools/toolName.ts](../../../../sources/tableau__tableau-mcp/src/tools/toolName.ts)<br>[src/tools/web/adminGate.test.ts](../../../../sources/tableau__tableau-mcp/src/tools/web/adminGate.test.ts)<br>[src/tools/web/adminGate.ts](../../../../sources/tableau__tableau-mcp/src/tools/web/adminGate.ts)<br>[src/tools/web/convertViewImageToToolResult.ts](../../../../sources/tableau__tableau-mcp/src/tools/web/convertViewImageToToolResult.ts)<br>[src/tools/web/genericFilterDescription.ts](../../../../sources/tableau__tableau-mcp/src/tools/web/genericFilterDescription.ts) |
| mcp | 20 | [src/web/apps/mcp-app.html](../../../../sources/tableau__tableau-mcp/src/web/apps/mcp-app.html)<br>[src/web/apps/src/mcp-app.css](../../../../sources/tableau__tableau-mcp/src/web/apps/src/mcp-app.css)<br>[src/web/apps/src/mcp-app.ts](../../../../sources/tableau__tableau-mcp/src/web/apps/src/mcp-app.ts)<br>[docs/docs/developers/mcp-inspector.md](../../../../sources/tableau__tableau-mcp/docs/docs/developers/mcp-inspector.md)<br>[docs/docs/configuration/mcp-config/_category_.json](../../../../sources/tableau__tableau-mcp/docs/docs/configuration/mcp-config/_category_.json)<br>[docs/docs/configuration/mcp-config/env-vars.md](../../../../sources/tableau__tableau-mcp/docs/docs/configuration/mcp-config/env-vars.md)<br>[docs/docs/configuration/mcp-config/http-server.md](../../../../sources/tableau__tableau-mcp/docs/docs/configuration/mcp-config/http-server.md)<br>[docs/docs/configuration/mcp-config/oauth.md](../../../../sources/tableau__tableau-mcp/docs/docs/configuration/mcp-config/oauth.md) |
| retrieval | 8 | [src/index.combined.ts](../../../../sources/tableau__tableau-mcp/src/index.combined.ts)<br>[src/index.desktop.ts](../../../../sources/tableau__tableau-mcp/src/index.desktop.ts)<br>[src/index.ts](../../../../sources/tableau__tableau-mcp/src/index.ts)<br>[src/prompts/index.ts](../../../../sources/tableau__tableau-mcp/src/prompts/index.ts)<br>[src/desktop/libraries/workbook-serialization-converter/index.ts](../../../../sources/tableau__tableau-mcp/src/desktop/libraries/workbook-serialization-converter/index.ts)<br>[docs/src/pages/index.module.css](../../../../sources/tableau__tableau-mcp/docs/src/pages/index.module.css)<br>[docs/src/pages/index.tsx](../../../../sources/tableau__tableau-mcp/docs/src/pages/index.tsx)<br>[docs/src/components/HomepageFeatures/index.tsx](../../../../sources/tableau__tableau-mcp/docs/src/components/HomepageFeatures/index.tsx) |
| spec | 0 | not obvious |
| eval | 230 | [vitest.config.eval.ts](../../../../sources/tableau__tableau-mcp/vitest.config.eval.ts)<br>[tests/constants.ts](../../../../sources/tableau__tableau-mcp/tests/constants.ts)<br>[tests/testEnv.ts](../../../../sources/tableau__tableau-mcp/tests/testEnv.ts)<br>[tests/oauth/tableau-authz/constants.ts](../../../../sources/tableau__tableau-mcp/tests/oauth/tableau-authz/constants.ts)<br>[tests/oauth/tableau-authz/env.oauth.example.list](../../../../sources/tableau__tableau-mcp/tests/oauth/tableau-authz/env.oauth.example.list)<br>[tests/oauth/tableau-authz/oauthClient.ts](../../../../sources/tableau__tableau-mcp/tests/oauth/tableau-authz/oauthClient.ts)<br>[tests/oauth/tableau-authz/testEnv.ts](../../../../sources/tableau__tableau-mcp/tests/oauth/tableau-authz/testEnv.ts)<br>[tests/oauth/tableau-authz/tests/base.ts](../../../../sources/tableau__tableau-mcp/tests/oauth/tableau-authz/tests/base.ts) |
| security | 86 | [SECURITY.md](../../../../sources/tableau__tableau-mcp/SECURITY.md)<br>[vitest.config.oauth.embedded.ts](../../../../sources/tableau__tableau-mcp/vitest.config.oauth.embedded.ts)<br>[tests/oauth/tableau-authz/constants.ts](../../../../sources/tableau__tableau-mcp/tests/oauth/tableau-authz/constants.ts)<br>[tests/oauth/tableau-authz/env.oauth.example.list](../../../../sources/tableau__tableau-mcp/tests/oauth/tableau-authz/env.oauth.example.list)<br>[tests/oauth/tableau-authz/oauthClient.ts](../../../../sources/tableau__tableau-mcp/tests/oauth/tableau-authz/oauthClient.ts)<br>[tests/oauth/tableau-authz/testEnv.ts](../../../../sources/tableau__tableau-mcp/tests/oauth/tableau-authz/testEnv.ts)<br>[tests/oauth/tableau-authz/tests/base.ts](../../../../sources/tableau__tableau-mcp/tests/oauth/tableau-authz/tests/base.ts)<br>[tests/oauth/tableau-authz/tests/generatePulseInsightBriefTool.test.ts](../../../../sources/tableau__tableau-mcp/tests/oauth/tableau-authz/tests/generatePulseInsightBriefTool.test.ts) |
| ci | 11 | [.github/workflows/ci.yml](../../../../sources/tableau__tableau-mcp/.github/workflows/ci.yml)<br>[.github/workflows/cleanup-releases.yml](../../../../sources/tableau__tableau-mcp/.github/workflows/cleanup-releases.yml)<br>[.github/workflows/deploy.yml](../../../../sources/tableau__tableau-mcp/.github/workflows/deploy.yml)<br>[.github/workflows/docker-publish.yml](../../../../sources/tableau__tableau-mcp/.github/workflows/docker-publish.yml)<br>[.github/workflows/pr-post-merge-tests.yml](../../../../sources/tableau__tableau-mcp/.github/workflows/pr-post-merge-tests.yml)<br>[.github/workflows/pr-title-check.yml](../../../../sources/tableau__tableau-mcp/.github/workflows/pr-title-check.yml)<br>[.github/workflows/publish.yml](../../../../sources/tableau__tableau-mcp/.github/workflows/publish.yml)<br>[.github/workflows/tag.yml](../../../../sources/tableau__tableau-mcp/.github/workflows/tag.yml) |
| container | 1 | [Dockerfile](../../../../sources/tableau__tableau-mcp/Dockerfile) |
| instruction | 5 | [CLAUDE.md](../../../../sources/tableau__tableau-mcp/CLAUDE.md)<br>[.cursor/rules/auth.mdc](../../../../sources/tableau__tableau-mcp/.cursor/rules/auth.mdc)<br>[.cursor/rules/tableau-mcp.mdc](../../../../sources/tableau__tableau-mcp/.cursor/rules/tableau-mcp.mdc)<br>[.cursor/rules/testing.mdc](../../../../sources/tableau__tableau-mcp/.cursor/rules/testing.mdc)<br>[.cursor/rules/tools.mdc](../../../../sources/tableau__tableau-mcp/.cursor/rules/tools.mdc) |
| docs | 118 | [README.combined.md](../../../../sources/tableau__tableau-mcp/README.combined.md)<br>[README.desktop.md](../../../../sources/tableau__tableau-mcp/README.desktop.md)<br>[README.md](../../../../sources/tableau__tableau-mcp/README.md)<br>[docs/.gitignore](../../../../sources/tableau__tableau-mcp/docs/.gitignore)<br>[docs/docusaurus.config.ts](../../../../sources/tableau__tableau-mcp/docs/docusaurus.config.ts)<br>[docs/package-lock.json](../../../../sources/tableau__tableau-mcp/docs/package-lock.json)<br>[docs/package.json](../../../../sources/tableau__tableau-mcp/docs/package.json)<br>[docs/README.md](../../../../sources/tableau__tableau-mcp/docs/README.md) |
| config | 4 | [package.json](../../../../sources/tableau__tableau-mcp/package.json)<br>[tsconfig.json](../../../../sources/tableau__tableau-mcp/tsconfig.json)<br>[docs/package.json](../../../../sources/tableau__tableau-mcp/docs/package.json)<br>[docs/tsconfig.json](../../../../sources/tableau__tableau-mcp/docs/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 230 | [vitest.config.eval.ts](../../../../sources/tableau__tableau-mcp/vitest.config.eval.ts)<br>[tests/constants.ts](../../../../sources/tableau__tableau-mcp/tests/constants.ts)<br>[tests/testEnv.ts](../../../../sources/tableau__tableau-mcp/tests/testEnv.ts)<br>[tests/oauth/tableau-authz/constants.ts](../../../../sources/tableau__tableau-mcp/tests/oauth/tableau-authz/constants.ts)<br>[tests/oauth/tableau-authz/env.oauth.example.list](../../../../sources/tableau__tableau-mcp/tests/oauth/tableau-authz/env.oauth.example.list)<br>[tests/oauth/tableau-authz/oauthClient.ts](../../../../sources/tableau__tableau-mcp/tests/oauth/tableau-authz/oauthClient.ts) |
| CI workflows | 11 | [.github/workflows/ci.yml](../../../../sources/tableau__tableau-mcp/.github/workflows/ci.yml)<br>[.github/workflows/cleanup-releases.yml](../../../../sources/tableau__tableau-mcp/.github/workflows/cleanup-releases.yml)<br>[.github/workflows/deploy.yml](../../../../sources/tableau__tableau-mcp/.github/workflows/deploy.yml)<br>[.github/workflows/docker-publish.yml](../../../../sources/tableau__tableau-mcp/.github/workflows/docker-publish.yml)<br>[.github/workflows/pr-post-merge-tests.yml](../../../../sources/tableau__tableau-mcp/.github/workflows/pr-post-merge-tests.yml)<br>[.github/workflows/pr-title-check.yml](../../../../sources/tableau__tableau-mcp/.github/workflows/pr-title-check.yml) |
| Containers / deploy | 1 | [Dockerfile](../../../../sources/tableau__tableau-mcp/Dockerfile) |
| Security / policy | 86 | [SECURITY.md](../../../../sources/tableau__tableau-mcp/SECURITY.md)<br>[vitest.config.oauth.embedded.ts](../../../../sources/tableau__tableau-mcp/vitest.config.oauth.embedded.ts)<br>[tests/oauth/tableau-authz/constants.ts](../../../../sources/tableau__tableau-mcp/tests/oauth/tableau-authz/constants.ts)<br>[tests/oauth/tableau-authz/env.oauth.example.list](../../../../sources/tableau__tableau-mcp/tests/oauth/tableau-authz/env.oauth.example.list)<br>[tests/oauth/tableau-authz/oauthClient.ts](../../../../sources/tableau__tableau-mcp/tests/oauth/tableau-authz/oauthClient.ts)<br>[tests/oauth/tableau-authz/testEnv.ts](../../../../sources/tableau__tableau-mcp/tests/oauth/tableau-authz/testEnv.ts) |
| Agent instructions | 5 | [CLAUDE.md](../../../../sources/tableau__tableau-mcp/CLAUDE.md)<br>[.cursor/rules/auth.mdc](../../../../sources/tableau__tableau-mcp/.cursor/rules/auth.mdc)<br>[.cursor/rules/tableau-mcp.mdc](../../../../sources/tableau__tableau-mcp/.cursor/rules/tableau-mcp.mdc)<br>[.cursor/rules/testing.mdc](../../../../sources/tableau__tableau-mcp/.cursor/rules/testing.mdc)<br>[.cursor/rules/tools.mdc](../../../../sources/tableau__tableau-mcp/.cursor/rules/tools.mdc) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `src/web/apps/mcp-app.html`, `src/web/apps/src/mcp-app.css`, `src/web/apps/src/mcp-app.ts`.
2. Trace execution through entrypoints: `tests/e2e/server.test.ts`, `src/index.combined.ts`, `src/index.desktop.ts`.
3. Map agent/tool runtime through: `src/tools/tool.ts`, `src/tools/toolContext.ts`, `src/tools/toolName.test.ts`.
4. Inspect retrieval/memory/indexing through: `src/index.combined.ts`, `src/index.desktop.ts`, `src/index.ts`.
5. Verify behavior through test/eval files: `vitest.config.eval.ts`, `tests/constants.ts`, `tests/testEnv.ts`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Tableau's official MCP Server. Helping Agents see and understand data.. 핵심 구조 신호는 TypeScript, package.json, Dockerfile, README.md, CLAUDE.md, openai이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
