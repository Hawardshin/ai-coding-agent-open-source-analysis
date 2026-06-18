# truffle-ai/dexto Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

A coding agent and general agent harness for building and orchestrating agentic applications.

## 요약

- 조사 단위: `sources/truffle-ai__dexto` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 1,872 files, 356 directories, depth score 132, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=packages/tui/src/interactive-commands/mcp/index.ts, packages/tools-builtins/src/implementations/exa-mcp.ts, packages/server/src/mcp/mcp-handler.ts이고, 의존성 단서는 express, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | truffle-ai/dexto |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 633 |
| Forks | 72 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/truffle-ai__dexto](../../../../sources/truffle-ai__dexto) |
| Existing report | [reports/global-trending/repositories/truffle-ai__dexto.md](../../../global-trending/repositories/truffle-ai__dexto.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 1872 / 356 |
| Max observed depth | 9 |
| Top directories | .agents, .changeset, .claude, .cursor, .github, .husky, agents, assets, commands, docs, eslint-rules, examples, feature-plans, packages, postman, scripts |
| Top extensions | .ts: 1146, .tsx: 228, .md: 210, .json: 96, .yml: 49, .svg: 26, .gif: 20, .png: 15, (none): 12, .css: 11, .wav: 11, .mjs: 8 |
| Source patterns | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| packages/webui | packages workspace | 67 |
| packages/cli | packages workspace | 57 |
| packages/tui | packages workspace | 50 |
| packages/core | packages workspace | 28 |
| docs | documentation surface | 19 |
| packages/server | packages workspace | 9 |
| packages/tools-plan | packages workspace | 8 |
| packages/registry | packages workspace | 7 |
| packages/tools-process | packages workspace | 6 |
| packages/tools-scheduler | packages workspace | 6 |
| packages/image-bundler | packages workspace | 5 |
| packages/tools-lifecycle | packages workspace | 5 |
| packages/tools-todo | packages workspace | 5 |
| examples/skills | examples workspace | 4 |
| packages/image-local | packages workspace | 4 |
| packages/image-logger-agent | packages workspace | 4 |
| packages/storage | packages workspace | 4 |
| packages/tools-builtins | packages workspace | 4 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| build | package.json | build | pnpm run build:packages && pnpm run copy-webui-dist |
| build | package.json | build:packages | turbo run build --filter="./packages/*" |
| build | package.json | build:all | pnpm run build:packages && pnpm run embed-webui |
| build | package.json | build:agent-management | turbo run build --filter=@dexto/agent-management... |
| build | package.json | build:analytics | turbo run build --filter=@dexto/analytics... |
| build | package.json | build:client-sdk | turbo run build --filter=@dexto/client-sdk... |
| build | package.json | build:clean | pnpm run clean && pnpm run build |
| build | package.json | build:check | pnpm run typecheck && pnpm run build |
| build | package.json | build:cli | turbo run build --filter=dexto... |
| build | package.json | build:core | turbo run build --filter=@dexto/core... |
| build | package.json | build:registry | turbo run build --filter=@dexto/registry... |
| serve-dev | package.json | build:server | turbo run build --filter=@dexto/server... |
| build | package.json | build:strict | pnpm run typecheck && pnpm run build |
| build | package.json | build:webui | turbo run build --filter=@dexto/webui... |
| serve-dev | package.json | build:webui:dev | turbo run build --filter=@dexto/webui... |
| build | package.json | build-webui | npx rimraf packages/webui/node_modules packages/webui/package-lock.json && pnpm -C packages/webui install && pnpm -C packages/webui build |
| utility | package.json | changeset:version | pnpm -w changeset version && pnpm -w install --no-frozen-lockfile |
| build | package.json | changeset:publish | pnpm -w build && pnpm -w changeset publish |
| build | package.json | clean | tsx scripts/clean-build-files.ts |
| utility | package.json | clean:storage | rimraf .dexto |
| build | package.json | copy-webui-dist | npx tsx scripts/copy-webui-dist.ts |
| serve-dev | package.json | dev | tsx scripts/dev-server.ts |
| serve-dev | package.json | dev:cli | turbo run build --filter=dexto... && cross-env DEXTO_DEV_MODE=true pnpm -C packages/cli start --mode cli |
| utility | package.json | link:cli | pnpm run link-cli |
| build | package.json | embed-webui | tsx scripts/copy-webui-dist.ts |
| quality | package.json | format | prettier --write "packages/**/*.{ts,tsx,js,jsx}" "scripts/**/*.ts" |
| quality | package.json | format:check | prettier --check "packages/**/*.{ts,tsx,js,jsx}" "scripts/**/*.ts" |
| quality | package.json | hono:check-inference | node scripts/check-hono-inference.mjs |
| build | package.json | install-cli | pnpm install && pnpm run build:all && tsx scripts/install-global-cli.ts install |
| build | package.json | install-cli-fast | pnpm install && pnpm run build:cli && tsx scripts/install-global-cli.ts install |
| build | package.json | link-cli | pnpm run build:all && tsx scripts/install-global-cli.ts link |
| build | package.json | link-cli-fast | pnpm run build:cli && tsx scripts/install-global-cli.ts link |
| quality | package.json | lint | turbo run lint |
| quality | package.json | lint:fix | eslint . --fix |
| build | package.json | prebuild |  |
| build | package.json | prepack | pnpm run build |
| utility | package.json | prepare | husky |
| build | package.json | repo:build | turbo run build |
| quality | package.json | repo:lint | turbo run lint |
| test | package.json | repo:test | turbo run test |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
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
| mcp | [packages/tui/src/interactive-commands/mcp/index.ts](../../../../sources/truffle-ai__dexto/packages/tui/src/interactive-commands/mcp/index.ts) | mcp signal |
| mcp | [packages/tools-builtins/src/implementations/exa-mcp.ts](../../../../sources/truffle-ai__dexto/packages/tools-builtins/src/implementations/exa-mcp.ts) | mcp signal |
| mcp | [packages/server/src/mcp/mcp-handler.ts](../../../../sources/truffle-ai__dexto/packages/server/src/mcp/mcp-handler.ts) | mcp signal |
| mcp | [packages/server/src/hono/routes/mcp.ts](../../../../sources/truffle-ai__dexto/packages/server/src/hono/routes/mcp.ts) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/truffle-ai__dexto/AGENTS.md) | agentRuntime signal |
| agentRuntime | [packages/webui/AGENTS.md](../../../../sources/truffle-ai__dexto/packages/webui/AGENTS.md) | agentRuntime signal |
| agentRuntime | [packages/webui/lib/analytics/hook.ts](../../../../sources/truffle-ai__dexto/packages/webui/lib/analytics/hook.ts) | agentRuntime signal |
| agentRuntime | [packages/webui/components/tool-renderers/DiffRenderer.tsx](../../../../sources/truffle-ai__dexto/packages/webui/components/tool-renderers/DiffRenderer.tsx) | agentRuntime signal |
| entrypoints | [packages/webui/src/main.tsx](../../../../sources/truffle-ai__dexto/packages/webui/src/main.tsx) | entrypoints signal |
| entrypoints | [packages/tui/src/index.ts](../../../../sources/truffle-ai__dexto/packages/tui/src/index.ts) | entrypoints signal |
| entrypoints | [packages/tools-todo/src/index.ts](../../../../sources/truffle-ai__dexto/packages/tools-todo/src/index.ts) | entrypoints signal |
| entrypoints | [packages/tools-scheduler/src/index.ts](../../../../sources/truffle-ai__dexto/packages/tools-scheduler/src/index.ts) | entrypoints signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 32 | [packages/webui/src/main.tsx](../../../../sources/truffle-ai__dexto/packages/webui/src/main.tsx)<br>[packages/tui/src/index.ts](../../../../sources/truffle-ai__dexto/packages/tui/src/index.ts)<br>[packages/tools-todo/src/index.ts](../../../../sources/truffle-ai__dexto/packages/tools-todo/src/index.ts)<br>[packages/tools-scheduler/src/index.ts](../../../../sources/truffle-ai__dexto/packages/tools-scheduler/src/index.ts)<br>[packages/tools-process/src/index.ts](../../../../sources/truffle-ai__dexto/packages/tools-process/src/index.ts)<br>[packages/tools-plan/src/index.ts](../../../../sources/truffle-ai__dexto/packages/tools-plan/src/index.ts)<br>[packages/tools-lifecycle/src/index.ts](../../../../sources/truffle-ai__dexto/packages/tools-lifecycle/src/index.ts)<br>[packages/tools-filesystem/src/index.ts](../../../../sources/truffle-ai__dexto/packages/tools-filesystem/src/index.ts) |
| agentRuntime | 592 | [AGENTS.md](../../../../sources/truffle-ai__dexto/AGENTS.md)<br>[packages/webui/AGENTS.md](../../../../sources/truffle-ai__dexto/packages/webui/AGENTS.md)<br>[packages/webui/lib/analytics/hook.ts](../../../../sources/truffle-ai__dexto/packages/webui/lib/analytics/hook.ts)<br>[packages/webui/components/tool-renderers/DiffRenderer.tsx](../../../../sources/truffle-ai__dexto/packages/webui/components/tool-renderers/DiffRenderer.tsx)<br>[packages/webui/components/tool-renderers/FileRenderer.tsx](../../../../sources/truffle-ai__dexto/packages/webui/components/tool-renderers/FileRenderer.tsx)<br>[packages/webui/components/tool-renderers/GenericRenderer.tsx](../../../../sources/truffle-ai__dexto/packages/webui/components/tool-renderers/GenericRenderer.tsx)<br>[packages/webui/components/tool-renderers/index.tsx](../../../../sources/truffle-ai__dexto/packages/webui/components/tool-renderers/index.tsx)<br>[packages/webui/components/tool-renderers/SearchRenderer.tsx](../../../../sources/truffle-ai__dexto/packages/webui/components/tool-renderers/SearchRenderer.tsx) |
| mcp | 58 | [packages/tui/src/interactive-commands/mcp/index.ts](../../../../sources/truffle-ai__dexto/packages/tui/src/interactive-commands/mcp/index.ts)<br>[packages/tools-builtins/src/implementations/exa-mcp.ts](../../../../sources/truffle-ai__dexto/packages/tools-builtins/src/implementations/exa-mcp.ts)<br>[packages/server/src/mcp/mcp-handler.ts](../../../../sources/truffle-ai__dexto/packages/server/src/mcp/mcp-handler.ts)<br>[packages/server/src/hono/routes/mcp.ts](../../../../sources/truffle-ai__dexto/packages/server/src/hono/routes/mcp.ts)<br>[packages/registry/src/mcp/index.ts](../../../../sources/truffle-ai__dexto/packages/registry/src/mcp/index.ts)<br>[packages/registry/src/mcp/server-registry-data.json](../../../../sources/truffle-ai__dexto/packages/registry/src/mcp/server-registry-data.json)<br>[packages/registry/src/mcp/server-registry.ts](../../../../sources/truffle-ai__dexto/packages/registry/src/mcp/server-registry.ts)<br>[packages/registry/src/mcp/types.ts](../../../../sources/truffle-ai__dexto/packages/registry/src/mcp/types.ts) |
| retrieval | 165 | [packages/webui/index.html](../../../../sources/truffle-ai__dexto/packages/webui/index.html)<br>[packages/webui/lib/stores/index.ts](../../../../sources/truffle-ai__dexto/packages/webui/lib/stores/index.ts)<br>[packages/webui/lib/events/index.ts](../../../../sources/truffle-ai__dexto/packages/webui/lib/events/index.ts)<br>[packages/webui/lib/events/middleware/index.ts](../../../../sources/truffle-ai__dexto/packages/webui/lib/events/middleware/index.ts)<br>[packages/webui/lib/analytics/index.ts](../../../../sources/truffle-ai__dexto/packages/webui/lib/analytics/index.ts)<br>[packages/webui/components/tool-renderers/index.tsx](../../../../sources/truffle-ai__dexto/packages/webui/components/tool-renderers/index.tsx)<br>[packages/webui/components/Toast/index.ts](../../../../sources/truffle-ai__dexto/packages/webui/components/Toast/index.ts)<br>[packages/webui/components/ModelPicker/index.ts](../../../../sources/truffle-ai__dexto/packages/webui/components/ModelPicker/index.ts) |
| spec | 6 | [scripts/generate-openapi-spec.ts](../../../../sources/truffle-ai__dexto/scripts/generate-openapi-spec.ts)<br>[packages/cli/src/utils/port-utils.spec.ts](../../../../sources/truffle-ai__dexto/packages/cli/src/utils/port-utils.spec.ts)<br>[docs/docs/architecture/_category_.json](../../../../sources/truffle-ai__dexto/docs/docs/architecture/_category_.json)<br>[docs/docs/architecture/overview.md](../../../../sources/truffle-ai__dexto/docs/docs/architecture/overview.md)<br>[docs/docs/architecture/services.md](../../../../sources/truffle-ai__dexto/docs/docs/architecture/services.md)<br>[.agents/skills/tdd/interface-design.md](../../../../sources/truffle-ai__dexto/.agents/skills/tdd/interface-design.md) |
| eval | 275 | [scripts/generate-openapi-spec.ts](../../../../sources/truffle-ai__dexto/scripts/generate-openapi-spec.ts)<br>[scripts/quality-checks.sh](../../../../sources/truffle-ai__dexto/scripts/quality-checks.sh)<br>[scripts/test_api.sh](../../../../sources/truffle-ai__dexto/scripts/test_api.sh)<br>[scripts/test-standalone-binaries.sh](../../../../sources/truffle-ai__dexto/scripts/test-standalone-binaries.sh)<br>[packages/webui/lib/composer-submit-intent.test.ts](../../../../sources/truffle-ai__dexto/packages/webui/lib/composer-submit-intent.test.ts)<br>[packages/webui/lib/stores/agentStore.test.ts](../../../../sources/truffle-ai__dexto/packages/webui/lib/stores/agentStore.test.ts)<br>[packages/webui/lib/stores/approvalStore.test.ts](../../../../sources/truffle-ai__dexto/packages/webui/lib/stores/approvalStore.test.ts)<br>[packages/webui/lib/stores/chatStore.test.ts](../../../../sources/truffle-ai__dexto/packages/webui/lib/stores/chatStore.test.ts) |
| security | 54 | [packages/tui/src/utils/dexto-auth-refresh.test.ts](../../../../sources/truffle-ai__dexto/packages/tui/src/utils/dexto-auth-refresh.test.ts)<br>[packages/tui/src/utils/dexto-auth-refresh.ts](../../../../sources/truffle-ai__dexto/packages/tui/src/utils/dexto-auth-refresh.ts)<br>[packages/tui/src/interactive-commands/auth/index.ts](../../../../sources/truffle-ai__dexto/packages/tui/src/interactive-commands/auth/index.ts)<br>[packages/server/SECURITY.md](../../../../sources/truffle-ai__dexto/packages/server/SECURITY.md)<br>[packages/server/src/hono/routes/dexto-auth.ts](../../../../sources/truffle-ai__dexto/packages/server/src/hono/routes/dexto-auth.ts)<br>[packages/server/src/hono/middleware/auth.ts](../../../../sources/truffle-ai__dexto/packages/server/src/hono/middleware/auth.ts)<br>[packages/core/src/tools/approval/session-tool-policy.test.ts](../../../../sources/truffle-ai__dexto/packages/core/src/tools/approval/session-tool-policy.test.ts)<br>[packages/core/src/tools/approval/session-tool-policy.ts](../../../../sources/truffle-ai__dexto/packages/core/src/tools/approval/session-tool-policy.ts) |
| ci | 9 | [.github/workflows/build_and_test.yml](../../../../sources/truffle-ai__dexto/.github/workflows/build_and_test.yml)<br>[.github/workflows/build-docs.yml](../../../../sources/truffle-ai__dexto/.github/workflows/build-docs.yml)<br>[.github/workflows/changesets-publish.yml](../../../../sources/truffle-ai__dexto/.github/workflows/changesets-publish.yml)<br>[.github/workflows/code-quality.yml](../../../../sources/truffle-ai__dexto/.github/workflows/code-quality.yml)<br>[.github/workflows/release-standalone-binaries.yml](../../../../sources/truffle-ai__dexto/.github/workflows/release-standalone-binaries.yml)<br>[.github/workflows/require-changeset.yml](../../../../sources/truffle-ai__dexto/.github/workflows/require-changeset.yml)<br>[.github/workflows/standalone-binary-smoke.yml](../../../../sources/truffle-ai__dexto/.github/workflows/standalone-binary-smoke.yml)<br>[.github/workflows/sync-cli-readme.yml](../../../../sources/truffle-ai__dexto/.github/workflows/sync-cli-readme.yml) |
| container | 16 | [compose.yaml](../../../../sources/truffle-ai__dexto/compose.yaml)<br>[Dockerfile](../../../../sources/truffle-ai__dexto/Dockerfile)<br>[packages/cli/src/cli/commands/deploy/client.test.ts](../../../../sources/truffle-ai__dexto/packages/cli/src/cli/commands/deploy/client.test.ts)<br>[packages/cli/src/cli/commands/deploy/client.ts](../../../../sources/truffle-ai__dexto/packages/cli/src/cli/commands/deploy/client.ts)<br>[packages/cli/src/cli/commands/deploy/config.test.ts](../../../../sources/truffle-ai__dexto/packages/cli/src/cli/commands/deploy/config.test.ts)<br>[packages/cli/src/cli/commands/deploy/config.ts](../../../../sources/truffle-ai__dexto/packages/cli/src/cli/commands/deploy/config.ts)<br>[packages/cli/src/cli/commands/deploy/entry-agent.ts](../../../../sources/truffle-ai__dexto/packages/cli/src/cli/commands/deploy/entry-agent.ts)<br>[packages/cli/src/cli/commands/deploy/index.test.ts](../../../../sources/truffle-ai__dexto/packages/cli/src/cli/commands/deploy/index.test.ts) |
| instruction | 4 | [AGENTS.md](../../../../sources/truffle-ai__dexto/AGENTS.md)<br>[packages/webui/AGENTS.md](../../../../sources/truffle-ai__dexto/packages/webui/AGENTS.md)<br>[packages/tui/src/AGENTS.md](../../../../sources/truffle-ai__dexto/packages/tui/src/AGENTS.md)<br>[.cursor/rules/service_initializer.mdc](../../../../sources/truffle-ai__dexto/.cursor/rules/service_initializer.mdc) |
| docs | 226 | [README.Docker.md](../../../../sources/truffle-ai__dexto/README.Docker.md)<br>[README.md](../../../../sources/truffle-ai__dexto/README.md)<br>[postman/README.md](../../../../sources/truffle-ai__dexto/postman/README.md)<br>[packages/webui/README.md](../../../../sources/truffle-ai__dexto/packages/webui/README.md)<br>[packages/webui/lib/README.md](../../../../sources/truffle-ai__dexto/packages/webui/lib/README.md)<br>[packages/webui/lib/stores/README.md](../../../../sources/truffle-ai__dexto/packages/webui/lib/stores/README.md)<br>[packages/webui/lib/events/README.md](../../../../sources/truffle-ai__dexto/packages/webui/lib/events/README.md)<br>[packages/tools-lifecycle/README.md](../../../../sources/truffle-ai__dexto/packages/tools-lifecycle/README.md) |
| config | 58 | [package.json](../../../../sources/truffle-ai__dexto/package.json)<br>[pnpm-workspace.yaml](../../../../sources/truffle-ai__dexto/pnpm-workspace.yaml)<br>[tsconfig.json](../../../../sources/truffle-ai__dexto/tsconfig.json)<br>[turbo.json](../../../../sources/truffle-ai__dexto/turbo.json)<br>[packages/webui/package.json](../../../../sources/truffle-ai__dexto/packages/webui/package.json)<br>[packages/webui/tsconfig.json](../../../../sources/truffle-ai__dexto/packages/webui/tsconfig.json)<br>[packages/tui/package.json](../../../../sources/truffle-ai__dexto/packages/tui/package.json)<br>[packages/tui/tsconfig.json](../../../../sources/truffle-ai__dexto/packages/tui/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 275 | [scripts/generate-openapi-spec.ts](../../../../sources/truffle-ai__dexto/scripts/generate-openapi-spec.ts)<br>[scripts/quality-checks.sh](../../../../sources/truffle-ai__dexto/scripts/quality-checks.sh)<br>[scripts/test_api.sh](../../../../sources/truffle-ai__dexto/scripts/test_api.sh)<br>[scripts/test-standalone-binaries.sh](../../../../sources/truffle-ai__dexto/scripts/test-standalone-binaries.sh)<br>[packages/webui/lib/composer-submit-intent.test.ts](../../../../sources/truffle-ai__dexto/packages/webui/lib/composer-submit-intent.test.ts)<br>[packages/webui/lib/stores/agentStore.test.ts](../../../../sources/truffle-ai__dexto/packages/webui/lib/stores/agentStore.test.ts) |
| CI workflows | 9 | [.github/workflows/build_and_test.yml](../../../../sources/truffle-ai__dexto/.github/workflows/build_and_test.yml)<br>[.github/workflows/build-docs.yml](../../../../sources/truffle-ai__dexto/.github/workflows/build-docs.yml)<br>[.github/workflows/changesets-publish.yml](../../../../sources/truffle-ai__dexto/.github/workflows/changesets-publish.yml)<br>[.github/workflows/code-quality.yml](../../../../sources/truffle-ai__dexto/.github/workflows/code-quality.yml)<br>[.github/workflows/release-standalone-binaries.yml](../../../../sources/truffle-ai__dexto/.github/workflows/release-standalone-binaries.yml)<br>[.github/workflows/require-changeset.yml](../../../../sources/truffle-ai__dexto/.github/workflows/require-changeset.yml) |
| Containers / deploy | 16 | [compose.yaml](../../../../sources/truffle-ai__dexto/compose.yaml)<br>[Dockerfile](../../../../sources/truffle-ai__dexto/Dockerfile)<br>[packages/cli/src/cli/commands/deploy/client.test.ts](../../../../sources/truffle-ai__dexto/packages/cli/src/cli/commands/deploy/client.test.ts)<br>[packages/cli/src/cli/commands/deploy/client.ts](../../../../sources/truffle-ai__dexto/packages/cli/src/cli/commands/deploy/client.ts)<br>[packages/cli/src/cli/commands/deploy/config.test.ts](../../../../sources/truffle-ai__dexto/packages/cli/src/cli/commands/deploy/config.test.ts)<br>[packages/cli/src/cli/commands/deploy/config.ts](../../../../sources/truffle-ai__dexto/packages/cli/src/cli/commands/deploy/config.ts) |
| Security / policy | 54 | [packages/tui/src/utils/dexto-auth-refresh.test.ts](../../../../sources/truffle-ai__dexto/packages/tui/src/utils/dexto-auth-refresh.test.ts)<br>[packages/tui/src/utils/dexto-auth-refresh.ts](../../../../sources/truffle-ai__dexto/packages/tui/src/utils/dexto-auth-refresh.ts)<br>[packages/tui/src/interactive-commands/auth/index.ts](../../../../sources/truffle-ai__dexto/packages/tui/src/interactive-commands/auth/index.ts)<br>[packages/server/SECURITY.md](../../../../sources/truffle-ai__dexto/packages/server/SECURITY.md)<br>[packages/server/src/hono/routes/dexto-auth.ts](../../../../sources/truffle-ai__dexto/packages/server/src/hono/routes/dexto-auth.ts)<br>[packages/server/src/hono/middleware/auth.ts](../../../../sources/truffle-ai__dexto/packages/server/src/hono/middleware/auth.ts) |
| Agent instructions | 4 | [AGENTS.md](../../../../sources/truffle-ai__dexto/AGENTS.md)<br>[packages/webui/AGENTS.md](../../../../sources/truffle-ai__dexto/packages/webui/AGENTS.md)<br>[packages/tui/src/AGENTS.md](../../../../sources/truffle-ai__dexto/packages/tui/src/AGENTS.md)<br>[.cursor/rules/service_initializer.mdc](../../../../sources/truffle-ai__dexto/.cursor/rules/service_initializer.mdc) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `packages/tui/src/interactive-commands/mcp/index.ts`, `packages/tools-builtins/src/implementations/exa-mcp.ts`, `packages/server/src/mcp/mcp-handler.ts`.
2. Trace execution through entrypoints: `packages/webui/src/main.tsx`, `packages/tui/src/index.ts`, `packages/tools-todo/src/index.ts`.
3. Map agent/tool runtime through: `AGENTS.md`, `packages/webui/AGENTS.md`, `packages/webui/lib/analytics/hook.ts`.
4. Inspect retrieval/memory/indexing through: `packages/webui/index.html`, `packages/webui/lib/stores/index.ts`, `packages/webui/lib/events/index.ts`.
5. Verify behavior through test/eval files: `scripts/generate-openapi-spec.ts`, `scripts/quality-checks.sh`, `scripts/test_api.sh`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 A coding agent and general agent harness for building and orchestrating agentic applications.. 핵심 구조 신호는 TypeScript, package.json, Dockerfile, README.md, AGENTS.md, LICENSE이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
