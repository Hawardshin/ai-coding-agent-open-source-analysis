# mastra-ai/mastra Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

From the team behind Gatsby, Mastra is a framework for building AI-powered applications and agents with a modern TypeScript stack.

## 요약

- 조사 단위: `sources/mastra-ai__mastra` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 10,504 files, 2,190 directories, depth score 132, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=templates/template-meeting-notes/src/mastra/mcp.ts, templates/template-docs-chatbot/src/mcp-server/server.ts, templates/template-docs-chatbot/src/mcp-server/tools/docs-tool.ts이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | mastra-ai/mastra |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 25182 |
| Forks | 2247 |
| License | none |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/mastra-ai__mastra](../../../../sources/mastra-ai__mastra) |
| Existing report | [reports/global-trending/repositories/mastra-ai__mastra.md](../../../global-trending/repositories/mastra-ai__mastra.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 10504 / 2190 |
| Max observed depth | 11 |
| Top directories | .agents, .changeset, .claude, .cursor, .dev, .github, .husky, .mastracode, .opencode, .superset, agent-sdks, auth, browser, channels, client-sdks, deployers, docs, e2e-tests, ee, embedders |
| Top extensions | .ts: 5813, .tsx: 1439, .json: 959, .mdx: 761, .md: 628, .js: 329, (none): 104, .yaml: 82, .yml: 77, .png: 55, .css: 41, .mp3: 38 |
| Source patterns | monorepo/workspace, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| packages/playground | packages workspace | 42 |
| packages/server | packages workspace | 12 |
| docs | documentation surface | 9 |
| packages/deployer | packages workspace | 3 |
| packages/playground-ui | packages workspace | 3 |
| packages/core | packages workspace | 2 |
| packages/memory | packages workspace | 2 |
| packages/rag | packages workspace | 2 |
| .github | ci surface | 1 |
| agent-sdks | top-level component | 1 |
| auth | top-level component | 1 |
| browser | top-level component | 1 |
| channels | top-level component | 1 |
| client-sdks | source boundary | 1 |
| deployers | deployment surface | 1 |
| e2e-tests | validation surface | 1 |
| ee | top-level component | 1 |
| embedders | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| serve-dev | package.json | changeset | pnpm --filter @internal/changeset-cli start |
| utility | package.json | changeset-cli | changeset |
| utility | package.json | ci:publish | pnpm publish -r |
| build | package.json | build | pnpm turbo build --filter "!./examples/*" --filter "!./examples/**/*" |
| serve-dev | package.json | build:server-adapters | pnpm turbo build --filter "./server-adapters/*" |
| build | package.json | build:integrations | pnpm turbo build --filter "./integrations/*" |
| build | package.json | build:packages | pnpm turbo build --filter "./packages/*" |
| build | package.json | build:combined-stores | pnpm turbo build --filter "./stores/*" |
| build | package.json | build:deployers | pnpm turbo build --filter "./deployers/*" |
| build | package.json | build:speech | pnpm turbo build --filter "./speech/*" |
| build | package.json | build:cli | pnpm turbo build --filter ./packages/cli |
| build | package.json | build:deployer | pnpm turbo build --filter ./packages/deployer |
| serve-dev | package.json | build:server | pnpm turbo build --filter ./packages/server |
| build | package.json | build:core | pnpm turbo build --filter ./packages/core |
| build | package.json | build:mcp | pnpm turbo build --filter ./packages/mcp |
| build | package.json | build:playground-ui | pnpm turbo build --filter ./packages/playground-ui/ |
| build | package.json | build:rag | pnpm turbo build --filter ./packages/rag |
| build | package.json | build:memory | pnpm turbo build --filter ./packages/memory |
| serve-dev | package.json | build:docs-mcp | pnpm turbo build --filter ./packages/mcp-docs-server |
| build | package.json | build:evals | pnpm turbo build --filter ./packages/evals |
| build | package.json | build:mastracode | pnpm turbo build --filter ./mastracode |
| build | package.json | build:clients | pnpm turbo build --filter "./client-sdks/*" |
| build | package.json | build:schema-compat | pnpm turbo build --filter ./packages/schema-compat |
| serve-dev | package.json | build:auth | pnpm turbo build --filter "./auth/*" --filter "./packages/auth" --filter "./server-adapters/*" |
| build | package.json | build:observability | pnpm turbo build --filter "./observability/*" |
| build | package.json | build:workspaces | pnpm turbo build --filter "./workspaces/*" |
| serve-dev | package.json | dev:playground | pnpm turbo run dev --filter ./packages/playground-ui --filter ./packages/playground --filter ./client-sdks/react |
| utility | package.json | generate:integration | tsx ./integration-generator/index.ts |
| test | package.json | test | vitest run |
| test | package.json | test:watch | vitest watch |
| test | package.json | test:watch:combined-stores | pnpm --filter "./stores/*" test:watch |
| test | package.json | test:auth | pnpm --filter "./auth/*" test && pnpm test:server-adapters |
| test | package.json | test:cli | pnpm --filter ./packages/cli test |
| test | package.json | test:deployer | pnpm --filter ./packages/deployer test |
| test | package.json | test:server | pnpm --filter ./packages/server test |
| test | package.json | test:server-adapters | pnpm --filter ./server-adapters/hono test && pnpm --filter ./server-adapters/express test && pnpm --filter ./server-adapters/nestjs test |
| test | package.json | test:core | pnpm --filter ./packages/core test |
| test | package.json | test:mcp | pnpm --filter ./packages/mcp test |
| test | package.json | test:rag | pnpm --filter ./packages/rag test |
| test | package.json | test:clients | pnpm --filter "./client-sdks/*" test |


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
| mcp | [templates/template-meeting-notes/src/mastra/mcp.ts](../../../../sources/mastra-ai__mastra/templates/template-meeting-notes/src/mastra/mcp.ts) | mcp signal |
| mcp | [templates/template-docs-chatbot/src/mcp-server/server.ts](../../../../sources/mastra-ai__mastra/templates/template-docs-chatbot/src/mcp-server/server.ts) | mcp signal |
| mcp | [templates/template-docs-chatbot/src/mcp-server/tools/docs-tool.ts](../../../../sources/mastra-ai__mastra/templates/template-docs-chatbot/src/mcp-server/tools/docs-tool.ts) | mcp signal |
| mcp | [templates/template-docs-chatbot/src/mcp-server/data/functions.json](../../../../sources/mastra-ai__mastra/templates/template-docs-chatbot/src/mcp-server/data/functions.json) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/mastra-ai__mastra/AGENTS.md) | agentRuntime signal |
| agentRuntime | [workspaces/vercel/src/sandbox/index.integration.test.ts](../../../../sources/mastra-ai__mastra/workspaces/vercel/src/sandbox/index.integration.test.ts) | agentRuntime signal |
| agentRuntime | [workspaces/vercel/src/sandbox/index.test.ts](../../../../sources/mastra-ai__mastra/workspaces/vercel/src/sandbox/index.test.ts) | agentRuntime signal |
| agentRuntime | [workspaces/vercel/src/sandbox/index.ts](../../../../sources/mastra-ai__mastra/workspaces/vercel/src/sandbox/index.ts) | agentRuntime signal |
| entrypoints | [workspaces/vercel/src/index.ts](../../../../sources/mastra-ai__mastra/workspaces/vercel/src/index.ts) | entrypoints signal |
| entrypoints | [workspaces/s3/src/index.ts](../../../../sources/mastra-ai__mastra/workspaces/s3/src/index.ts) | entrypoints signal |
| entrypoints | [workspaces/railway/src/index.ts](../../../../sources/mastra-ai__mastra/workspaces/railway/src/index.ts) | entrypoints signal |
| entrypoints | [workspaces/modal/src/index.ts](../../../../sources/mastra-ai__mastra/workspaces/modal/src/index.ts) | entrypoints signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 233 | [workspaces/vercel/src/index.ts](../../../../sources/mastra-ai__mastra/workspaces/vercel/src/index.ts)<br>[workspaces/s3/src/index.ts](../../../../sources/mastra-ai__mastra/workspaces/s3/src/index.ts)<br>[workspaces/railway/src/index.ts](../../../../sources/mastra-ai__mastra/workspaces/railway/src/index.ts)<br>[workspaces/modal/src/index.ts](../../../../sources/mastra-ai__mastra/workspaces/modal/src/index.ts)<br>[workspaces/google-drive/src/index.ts](../../../../sources/mastra-ai__mastra/workspaces/google-drive/src/index.ts)<br>[workspaces/gcs/src/index.ts](../../../../sources/mastra-ai__mastra/workspaces/gcs/src/index.ts)<br>[workspaces/files-sdk/src/index.ts](../../../../sources/mastra-ai__mastra/workspaces/files-sdk/src/index.ts)<br>[workspaces/e2b/src/index.ts](../../../../sources/mastra-ai__mastra/workspaces/e2b/src/index.ts) |
| agentRuntime | 2494 | [AGENTS.md](../../../../sources/mastra-ai__mastra/AGENTS.md)<br>[workspaces/vercel/src/sandbox/index.integration.test.ts](../../../../sources/mastra-ai__mastra/workspaces/vercel/src/sandbox/index.integration.test.ts)<br>[workspaces/vercel/src/sandbox/index.test.ts](../../../../sources/mastra-ai__mastra/workspaces/vercel/src/sandbox/index.test.ts)<br>[workspaces/vercel/src/sandbox/index.ts](../../../../sources/mastra-ai__mastra/workspaces/vercel/src/sandbox/index.ts)<br>[workspaces/vercel/src/executor/index.ts](../../../../sources/mastra-ai__mastra/workspaces/vercel/src/executor/index.ts)<br>[workspaces/railway/src/sandbox/index.integration.test.ts](../../../../sources/mastra-ai__mastra/workspaces/railway/src/sandbox/index.integration.test.ts)<br>[workspaces/railway/src/sandbox/index.test.ts](../../../../sources/mastra-ai__mastra/workspaces/railway/src/sandbox/index.test.ts)<br>[workspaces/railway/src/sandbox/index.ts](../../../../sources/mastra-ai__mastra/workspaces/railway/src/sandbox/index.ts) |
| mcp | 288 | [templates/template-meeting-notes/src/mastra/mcp.ts](../../../../sources/mastra-ai__mastra/templates/template-meeting-notes/src/mastra/mcp.ts)<br>[templates/template-docs-chatbot/src/mcp-server/server.ts](../../../../sources/mastra-ai__mastra/templates/template-docs-chatbot/src/mcp-server/server.ts)<br>[templates/template-docs-chatbot/src/mcp-server/tools/docs-tool.ts](../../../../sources/mastra-ai__mastra/templates/template-docs-chatbot/src/mcp-server/tools/docs-tool.ts)<br>[templates/template-docs-chatbot/src/mcp-server/data/functions.json](../../../../sources/mastra-ai__mastra/templates/template-docs-chatbot/src/mcp-server/data/functions.json)<br>[templates/template-docs-chatbot/src/mastra/mcp/mcp-client.ts](../../../../sources/mastra-ai__mastra/templates/template-docs-chatbot/src/mastra/mcp/mcp-client.ts)<br>[templates/template-company-knowledge/src/mastra/mcp.ts](../../../../sources/mastra-ai__mastra/templates/template-company-knowledge/src/mastra/mcp.ts)<br>[stores/spanner/src/storage/domains/mcp-servers/index.ts](../../../../sources/mastra-ai__mastra/stores/spanner/src/storage/domains/mcp-servers/index.ts)<br>[stores/spanner/src/storage/domains/mcp-clients/index.ts](../../../../sources/mastra-ai__mastra/stores/spanner/src/storage/domains/mcp-clients/index.ts) |
| retrieval | 1780 | [workspaces/vercel/src/index.ts](../../../../sources/mastra-ai__mastra/workspaces/vercel/src/index.ts)<br>[workspaces/vercel/src/sandbox/index.integration.test.ts](../../../../sources/mastra-ai__mastra/workspaces/vercel/src/sandbox/index.integration.test.ts)<br>[workspaces/vercel/src/sandbox/index.test.ts](../../../../sources/mastra-ai__mastra/workspaces/vercel/src/sandbox/index.test.ts)<br>[workspaces/vercel/src/sandbox/index.ts](../../../../sources/mastra-ai__mastra/workspaces/vercel/src/sandbox/index.ts)<br>[workspaces/vercel/src/microvm/index.integration.test.ts](../../../../sources/mastra-ai__mastra/workspaces/vercel/src/microvm/index.integration.test.ts)<br>[workspaces/vercel/src/microvm/index.test.ts](../../../../sources/mastra-ai__mastra/workspaces/vercel/src/microvm/index.test.ts)<br>[workspaces/vercel/src/microvm/index.ts](../../../../sources/mastra-ai__mastra/workspaces/vercel/src/microvm/index.ts)<br>[workspaces/vercel/src/executor/index.ts](../../../../sources/mastra-ai__mastra/workspaces/vercel/src/executor/index.ts) |
| spec | 73 | [voice/google-gemini-live-api/architecture-llm.md](../../../../sources/mastra-ai__mastra/voice/google-gemini-live-api/architecture-llm.md)<br>[voice/azure/architecture-llm.md](../../../../sources/mastra-ai__mastra/voice/azure/architecture-llm.md)<br>[stores/_test-utils/src/client-acceptance.ts](../../../../sources/mastra-ai__mastra/stores/_test-utils/src/client-acceptance.ts)<br>[packages/playground/e2e/tests/root.spec.ts](../../../../sources/mastra-ai__mastra/packages/playground/e2e/tests/root.spec.ts)<br>[packages/playground/e2e/tests/workflows/page.spec.ts](../../../../sources/mastra-ai__mastra/packages/playground/e2e/tests/workflows/page.spec.ts)<br>[packages/playground/e2e/tests/workflows/schedules.spec.ts](../../../../sources/mastra-ai__mastra/packages/playground/e2e/tests/workflows/schedules.spec.ts)<br>[packages/playground/e2e/tests/workflows/$workflowId/page.spec.ts](../../../../sources/mastra-ai__mastra/packages/playground/e2e/tests/workflows/$workflowId/page.spec.ts)<br>[packages/playground/e2e/tests/workflows/$workflowId/page.spec.ts-snapshots/overall-layout-information-1.aria.yml](../../../../sources/mastra-ai__mastra/packages/playground/e2e/tests/workflows/$workflowId/page.spec.ts-snapshots/overall-layout-information-1.aria.yml) |
| eval | 3200 | [vitest.config.observability.ts](../../../../sources/mastra-ai__mastra/vitest.config.observability.ts)<br>[workspaces/vercel/src/sandbox/index.integration.test.ts](../../../../sources/mastra-ai__mastra/workspaces/vercel/src/sandbox/index.integration.test.ts)<br>[workspaces/vercel/src/sandbox/index.test.ts](../../../../sources/mastra-ai__mastra/workspaces/vercel/src/sandbox/index.test.ts)<br>[workspaces/vercel/src/microvm/index.integration.test.ts](../../../../sources/mastra-ai__mastra/workspaces/vercel/src/microvm/index.integration.test.ts)<br>[workspaces/vercel/src/microvm/index.test.ts](../../../../sources/mastra-ai__mastra/workspaces/vercel/src/microvm/index.test.ts)<br>[workspaces/vercel/src/microvm/process-manager.test.ts](../../../../sources/mastra-ai__mastra/workspaces/vercel/src/microvm/process-manager.test.ts)<br>[workspaces/s3/src/filesystem/index.integration.test.ts](../../../../sources/mastra-ai__mastra/workspaces/s3/src/filesystem/index.integration.test.ts)<br>[workspaces/s3/src/filesystem/index.test.ts](../../../../sources/mastra-ai__mastra/workspaces/s3/src/filesystem/index.test.ts) |
| security | 471 | [workspaces/vercel/src/sandbox/index.integration.test.ts](../../../../sources/mastra-ai__mastra/workspaces/vercel/src/sandbox/index.integration.test.ts)<br>[workspaces/vercel/src/sandbox/index.test.ts](../../../../sources/mastra-ai__mastra/workspaces/vercel/src/sandbox/index.test.ts)<br>[workspaces/vercel/src/sandbox/index.ts](../../../../sources/mastra-ai__mastra/workspaces/vercel/src/sandbox/index.ts)<br>[workspaces/railway/src/sandbox/index.integration.test.ts](../../../../sources/mastra-ai__mastra/workspaces/railway/src/sandbox/index.integration.test.ts)<br>[workspaces/railway/src/sandbox/index.test.ts](../../../../sources/mastra-ai__mastra/workspaces/railway/src/sandbox/index.test.ts)<br>[workspaces/railway/src/sandbox/index.ts](../../../../sources/mastra-ai__mastra/workspaces/railway/src/sandbox/index.ts)<br>[workspaces/railway/src/sandbox/process-manager.ts](../../../../sources/mastra-ai__mastra/workspaces/railway/src/sandbox/process-manager.ts)<br>[workspaces/modal/src/sandbox/index.ts](../../../../sources/mastra-ai__mastra/workspaces/modal/src/sandbox/index.ts) |
| ci | 36 | [.github/workflows/backport-auto.yml](../../../../sources/mastra-ai__mastra/.github/workflows/backport-auto.yml)<br>[.github/workflows/call-external-mastra-workflow.yml](../../../../sources/mastra-ai__mastra/.github/workflows/call-external-mastra-workflow.yml)<br>[.github/workflows/changed-test-gate-labeler.yml](../../../../sources/mastra-ai__mastra/.github/workflows/changed-test-gate-labeler.yml)<br>[.github/workflows/changed-test-gate.yml](../../../../sources/mastra-ai__mastra/.github/workflows/changed-test-gate.yml)<br>[.github/workflows/cron-alpha-publish.yml](../../../../sources/mastra-ai__mastra/.github/workflows/cron-alpha-publish.yml)<br>[.github/workflows/cron-every-2h.yml](../../../../sources/mastra-ai__mastra/.github/workflows/cron-every-2h.yml)<br>[.github/workflows/delete-spam-issues.yml](../../../../sources/mastra-ai__mastra/.github/workflows/delete-spam-issues.yml)<br>[.github/workflows/e2e-docs.yml](../../../../sources/mastra-ai__mastra/.github/workflows/e2e-docs.yml) |
| container | 52 | [workspaces/s3/docker-compose.yml](../../../../sources/mastra-ai__mastra/workspaces/s3/docker-compose.yml)<br>[workspaces/gcs/docker-compose.yml](../../../../sources/mastra-ai__mastra/workspaces/gcs/docker-compose.yml)<br>[workspaces/azure/docker-compose.yml](../../../../sources/mastra-ai__mastra/workspaces/azure/docker-compose.yml)<br>[workflows/temporal/docker-compose.yaml](../../../../sources/mastra-ai__mastra/workflows/temporal/docker-compose.yaml)<br>[workflows/inngest/docker-compose.yaml](../../../../sources/mastra-ai__mastra/workflows/inngest/docker-compose.yaml)<br>[stores/upstash/docker-compose.yaml](../../../../sources/mastra-ai__mastra/stores/upstash/docker-compose.yaml)<br>[stores/spanner/docker-compose.yaml](../../../../sources/mastra-ai__mastra/stores/spanner/docker-compose.yaml)<br>[stores/redis/docker-compose.yaml](../../../../sources/mastra-ai__mastra/stores/redis/docker-compose.yaml) |
| instruction | 28 | [AGENTS.md](../../../../sources/mastra-ai__mastra/AGENTS.md)<br>[CLAUDE.md](../../../../sources/mastra-ai__mastra/CLAUDE.md)<br>[packages/server/AGENTS.md](../../../../sources/mastra-ai__mastra/packages/server/AGENTS.md)<br>[packages/server/CLAUDE.md](../../../../sources/mastra-ai__mastra/packages/server/CLAUDE.md)<br>[packages/rag/AGENTS.md](../../../../sources/mastra-ai__mastra/packages/rag/AGENTS.md)<br>[packages/playground-ui/AGENTS.md](../../../../sources/mastra-ai__mastra/packages/playground-ui/AGENTS.md)<br>[packages/playground-ui/CLAUDE.md](../../../../sources/mastra-ai__mastra/packages/playground-ui/CLAUDE.md)<br>[packages/playground-ui/.cursor/rules/frontend.mdc](../../../../sources/mastra-ai__mastra/packages/playground-ui/.cursor/rules/frontend.mdc) |
| docs | 1385 | [README.md](../../../../sources/mastra-ai__mastra/README.md)<br>[workspaces/s3/README.md](../../../../sources/mastra-ai__mastra/workspaces/s3/README.md)<br>[workspaces/railway/README.md](../../../../sources/mastra-ai__mastra/workspaces/railway/README.md)<br>[workspaces/google-drive/README.md](../../../../sources/mastra-ai__mastra/workspaces/google-drive/README.md)<br>[workspaces/gcs/README.md](../../../../sources/mastra-ai__mastra/workspaces/gcs/README.md)<br>[workspaces/files-sdk/README.md](../../../../sources/mastra-ai__mastra/workspaces/files-sdk/README.md)<br>[workspaces/e2b/README.md](../../../../sources/mastra-ai__mastra/workspaces/e2b/README.md)<br>[workspaces/docker/README.md](../../../../sources/mastra-ai__mastra/workspaces/docker/README.md) |
| config | 520 | [package.json](../../../../sources/mastra-ai__mastra/package.json)<br>[pnpm-workspace.yaml](../../../../sources/mastra-ai__mastra/pnpm-workspace.yaml)<br>[tsconfig.json](../../../../sources/mastra-ai__mastra/tsconfig.json)<br>[turbo.json](../../../../sources/mastra-ai__mastra/turbo.json)<br>[workspaces/vercel/package.json](../../../../sources/mastra-ai__mastra/workspaces/vercel/package.json)<br>[workspaces/vercel/tsconfig.json](../../../../sources/mastra-ai__mastra/workspaces/vercel/tsconfig.json)<br>[workspaces/s3/package.json](../../../../sources/mastra-ai__mastra/workspaces/s3/package.json)<br>[workspaces/s3/tsconfig.json](../../../../sources/mastra-ai__mastra/workspaces/s3/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 3200 | [vitest.config.observability.ts](../../../../sources/mastra-ai__mastra/vitest.config.observability.ts)<br>[workspaces/vercel/src/sandbox/index.integration.test.ts](../../../../sources/mastra-ai__mastra/workspaces/vercel/src/sandbox/index.integration.test.ts)<br>[workspaces/vercel/src/sandbox/index.test.ts](../../../../sources/mastra-ai__mastra/workspaces/vercel/src/sandbox/index.test.ts)<br>[workspaces/vercel/src/microvm/index.integration.test.ts](../../../../sources/mastra-ai__mastra/workspaces/vercel/src/microvm/index.integration.test.ts)<br>[workspaces/vercel/src/microvm/index.test.ts](../../../../sources/mastra-ai__mastra/workspaces/vercel/src/microvm/index.test.ts)<br>[workspaces/vercel/src/microvm/process-manager.test.ts](../../../../sources/mastra-ai__mastra/workspaces/vercel/src/microvm/process-manager.test.ts) |
| CI workflows | 36 | [.github/workflows/backport-auto.yml](../../../../sources/mastra-ai__mastra/.github/workflows/backport-auto.yml)<br>[.github/workflows/call-external-mastra-workflow.yml](../../../../sources/mastra-ai__mastra/.github/workflows/call-external-mastra-workflow.yml)<br>[.github/workflows/changed-test-gate-labeler.yml](../../../../sources/mastra-ai__mastra/.github/workflows/changed-test-gate-labeler.yml)<br>[.github/workflows/changed-test-gate.yml](../../../../sources/mastra-ai__mastra/.github/workflows/changed-test-gate.yml)<br>[.github/workflows/cron-alpha-publish.yml](../../../../sources/mastra-ai__mastra/.github/workflows/cron-alpha-publish.yml)<br>[.github/workflows/cron-every-2h.yml](../../../../sources/mastra-ai__mastra/.github/workflows/cron-every-2h.yml) |
| Containers / deploy | 52 | [workspaces/s3/docker-compose.yml](../../../../sources/mastra-ai__mastra/workspaces/s3/docker-compose.yml)<br>[workspaces/gcs/docker-compose.yml](../../../../sources/mastra-ai__mastra/workspaces/gcs/docker-compose.yml)<br>[workspaces/azure/docker-compose.yml](../../../../sources/mastra-ai__mastra/workspaces/azure/docker-compose.yml)<br>[workflows/temporal/docker-compose.yaml](../../../../sources/mastra-ai__mastra/workflows/temporal/docker-compose.yaml)<br>[workflows/inngest/docker-compose.yaml](../../../../sources/mastra-ai__mastra/workflows/inngest/docker-compose.yaml)<br>[stores/upstash/docker-compose.yaml](../../../../sources/mastra-ai__mastra/stores/upstash/docker-compose.yaml) |
| Security / policy | 471 | [workspaces/vercel/src/sandbox/index.integration.test.ts](../../../../sources/mastra-ai__mastra/workspaces/vercel/src/sandbox/index.integration.test.ts)<br>[workspaces/vercel/src/sandbox/index.test.ts](../../../../sources/mastra-ai__mastra/workspaces/vercel/src/sandbox/index.test.ts)<br>[workspaces/vercel/src/sandbox/index.ts](../../../../sources/mastra-ai__mastra/workspaces/vercel/src/sandbox/index.ts)<br>[workspaces/railway/src/sandbox/index.integration.test.ts](../../../../sources/mastra-ai__mastra/workspaces/railway/src/sandbox/index.integration.test.ts)<br>[workspaces/railway/src/sandbox/index.test.ts](../../../../sources/mastra-ai__mastra/workspaces/railway/src/sandbox/index.test.ts)<br>[workspaces/railway/src/sandbox/index.ts](../../../../sources/mastra-ai__mastra/workspaces/railway/src/sandbox/index.ts) |
| Agent instructions | 28 | [AGENTS.md](../../../../sources/mastra-ai__mastra/AGENTS.md)<br>[CLAUDE.md](../../../../sources/mastra-ai__mastra/CLAUDE.md)<br>[packages/server/AGENTS.md](../../../../sources/mastra-ai__mastra/packages/server/AGENTS.md)<br>[packages/server/CLAUDE.md](../../../../sources/mastra-ai__mastra/packages/server/CLAUDE.md)<br>[packages/rag/AGENTS.md](../../../../sources/mastra-ai__mastra/packages/rag/AGENTS.md)<br>[packages/playground-ui/AGENTS.md](../../../../sources/mastra-ai__mastra/packages/playground-ui/AGENTS.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | many top-level directories; module boundaries need review |
| operation | none |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `templates/template-meeting-notes/src/mastra/mcp.ts`, `templates/template-docs-chatbot/src/mcp-server/server.ts`, `templates/template-docs-chatbot/src/mcp-server/tools/docs-tool.ts`.
2. Trace execution through entrypoints: `workspaces/vercel/src/index.ts`, `workspaces/s3/src/index.ts`, `workspaces/railway/src/index.ts`.
3. Map agent/tool runtime through: `AGENTS.md`, `workspaces/vercel/src/sandbox/index.integration.test.ts`, `workspaces/vercel/src/sandbox/index.test.ts`.
4. Inspect retrieval/memory/indexing through: `workspaces/vercel/src/index.ts`, `workspaces/vercel/src/sandbox/index.integration.test.ts`, `workspaces/vercel/src/sandbox/index.test.ts`.
5. Verify behavior through test/eval files: `vitest.config.observability.ts`, `workspaces/vercel/src/sandbox/index.integration.test.ts`, `workspaces/vercel/src/sandbox/index.test.ts`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 From the team behind Gatsby, Mastra is a framework for building AI powered applications and agents with a modern TypeScr. 핵심 구조 신호는 TypeScript, package.json, README.md, AGENTS.md, CLAUDE.md, tests이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
