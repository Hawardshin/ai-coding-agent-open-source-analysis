# sourcebot-dev/sourcebot Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Local clone structure analysis: 1330 files, 350 directories.

## 요약

- 조사 단위: `sources/sourcebot-dev__sourcebot` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 1,327 files, 347 directories, depth score 138, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=packages/web/src/features/mcp/mcpOAuthReturnTo.test.ts, packages/web/src/features/mcp/mcpOAuthReturnTo.ts, packages/web/src/features/mcp/prismaOAuthClientProvider.test.ts이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | sourcebot-dev/sourcebot |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | mixed |
| Language | none |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | solid |
| Evidence | deep-source+report |
| Source | [sources/sourcebot-dev__sourcebot](../../../../sources/sourcebot-dev__sourcebot) |
| Existing report | [reports/clone-structures/sourcebot-dev__sourcebot.md](../../../clone-structures/sourcebot-dev__sourcebot.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 1327 / 347 |
| Max observed depth | 12 |
| Top directories | .cursor, .devcontainer, .github, .yarn, configs, docs, ee, packages, schemas, scripts |
| Top extensions | .ts: 510, .tsx: 371, .png: 98, .mdx: 77, .sql: 77, .json: 43, .svg: 34, .yml: 24, .md: 20, .txt: 19, (none): 16, .mjs: 9 |
| Source patterns | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| packages/web | packages workspace | 183 |
| docs | documentation surface | 43 |
| packages/db | packages workspace | 10 |
| packages/schemas | packages workspace | 8 |
| packages/shared | packages workspace | 7 |
| packages/setupWizard | packages workspace | 5 |
| packages/backend | packages workspace | 4 |
| packages/queryLanguage | packages workspace | 4 |
| .devcontainer | deployment surface | 1 |
| .github | ci surface | 1 |
| configs | top-level component | 1 |
| ee | top-level component | 1 |
| packages | source boundary | 1 |
| schemas | top-level component | 1 |
| scripts | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| build | package.json | build | cross-env SKIP_ENV_VALIDATION=1 yarn workspaces foreach --all --topological run build |
| test | package.json | test | yarn workspaces foreach --all --topological run test |
| quality | package.json | lint | yarn workspaces foreach --all --topological run lint |
| serve-dev | package.json | dev | concurrently --kill-others --names "zoekt,worker,web,schemas" 'yarn dev:zoekt' 'yarn dev:backend' 'yarn dev:web' 'yarn watch:schemas' |
| serve-dev | package.json | with-env | cross-env PATH="$PWD/bin:$PATH" dotenv -e .env.development -c -- |
| serve-dev | package.json | dev:zoekt | yarn with-env zoekt-webserver -index .sourcebot/index -rpc |
| serve-dev | package.json | dev:backend | yarn with-env yarn workspace @sourcebot/backend dev:watch |
| serve-dev | package.json | dev:web | yarn with-env yarn workspace @sourcebot/web dev |
| serve-dev | package.json | watch:schemas | yarn workspace @sourcebot/schemas watch |
| serve-dev | package.json | dev:prisma:migrate:dev | yarn with-env yarn workspace @sourcebot/db prisma:migrate:dev |
| serve-dev | package.json | dev:prisma:generate | yarn with-env yarn workspace @sourcebot/db prisma:generate |
| serve-dev | package.json | dev:prisma:studio | yarn with-env yarn workspace @sourcebot/db prisma:studio |
| serve-dev | package.json | dev:prisma:migrate:reset | yarn with-env yarn workspace @sourcebot/db prisma:migrate:reset |
| serve-dev | package.json | dev:prisma:db:push | yarn with-env yarn workspace @sourcebot/db prisma:db:push |
| build | package.json | build:deps | yarn workspaces foreach --recursive --topological --from '{@sourcebot/schemas,@sourcebot/db,@sourcebot/shared,@sourcebot/query-language}' run build |
| utility | package.json | openapi:generate | yarn workspace @sourcebot/web openapi:generate |
| utility | package.json | tool:decrypt-jwe | yarn with-env yarn workspace @sourcebot/web tool:decrypt-jwe |
| utility | package.json | audit | yarn npm audit --all --recursive --no-deprecations |
| utility | Makefile | ALL | make ALL |
| utility | Makefile | yarn | make yarn |
| utility | Makefile | zoekt | make zoekt |
| utility | Makefile | update_submodule | make update_submodule |
| utility | Makefile | clean | make clean |
| utility | Makefile | soft-reset | make soft-reset |
| utility | Makefile | .PHONY | make .PHONY |


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
| mcp | [packages/web/src/features/mcp/mcpOAuthReturnTo.test.ts](../../../../sources/sourcebot-dev__sourcebot/packages/web/src/features/mcp/mcpOAuthReturnTo.test.ts) | mcp signal |
| mcp | [packages/web/src/features/mcp/mcpOAuthReturnTo.ts](../../../../sources/sourcebot-dev__sourcebot/packages/web/src/features/mcp/mcpOAuthReturnTo.ts) | mcp signal |
| mcp | [packages/web/src/features/mcp/prismaOAuthClientProvider.test.ts](../../../../sources/sourcebot-dev__sourcebot/packages/web/src/features/mcp/prismaOAuthClientProvider.test.ts) | mcp signal |
| mcp | [packages/web/src/features/mcp/prismaOAuthClientProvider.ts](../../../../sources/sourcebot-dev__sourcebot/packages/web/src/features/mcp/prismaOAuthClientProvider.ts) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/sourcebot-dev__sourcebot/AGENTS.md) | agentRuntime signal |
| agentRuntime | [packages/web/tools/decryptJWE.ts](../../../../sources/sourcebot-dev__sourcebot/packages/web/tools/decryptJWE.ts) | agentRuntime signal |
| agentRuntime | [packages/web/tools/generateOpenApi.ts](../../../../sources/sourcebot-dev__sourcebot/packages/web/tools/generateOpenApi.ts) | agentRuntime signal |
| agentRuntime | [packages/web/tools/globToRegexpPlayground.ts](../../../../sources/sourcebot-dev__sourcebot/packages/web/tools/globToRegexpPlayground.ts) | agentRuntime signal |
| entrypoints | [packages/web/src/ee/features/oauth/server.test.ts](../../../../sources/sourcebot-dev__sourcebot/packages/web/src/ee/features/oauth/server.test.ts) | entrypoints signal |
| entrypoints | [packages/web/src/ee/features/oauth/server.ts](../../../../sources/sourcebot-dev__sourcebot/packages/web/src/ee/features/oauth/server.ts) | entrypoints signal |
| entrypoints | [packages/web/src/ee/features/mcp/server.ts](../../../../sources/sourcebot-dev__sourcebot/packages/web/src/ee/features/mcp/server.ts) | entrypoints signal |
| entrypoints | [packages/shared/src/index.client.ts](../../../../sources/sourcebot-dev__sourcebot/packages/shared/src/index.client.ts) | entrypoints signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 9 | [packages/web/src/ee/features/oauth/server.test.ts](../../../../sources/sourcebot-dev__sourcebot/packages/web/src/ee/features/oauth/server.test.ts)<br>[packages/web/src/ee/features/oauth/server.ts](../../../../sources/sourcebot-dev__sourcebot/packages/web/src/ee/features/oauth/server.ts)<br>[packages/web/src/ee/features/mcp/server.ts](../../../../sources/sourcebot-dev__sourcebot/packages/web/src/ee/features/mcp/server.ts)<br>[packages/shared/src/index.client.ts](../../../../sources/sourcebot-dev__sourcebot/packages/shared/src/index.client.ts)<br>[packages/shared/src/index.server.ts](../../../../sources/sourcebot-dev__sourcebot/packages/shared/src/index.server.ts)<br>[packages/setupWizard/src/index.ts](../../../../sources/sourcebot-dev__sourcebot/packages/setupWizard/src/index.ts)<br>[packages/queryLanguage/src/index.ts](../../../../sources/sourcebot-dev__sourcebot/packages/queryLanguage/src/index.ts)<br>[packages/db/src/index.ts](../../../../sources/sourcebot-dev__sourcebot/packages/db/src/index.ts) |
| agentRuntime | 108 | [AGENTS.md](../../../../sources/sourcebot-dev__sourcebot/AGENTS.md)<br>[packages/web/tools/decryptJWE.ts](../../../../sources/sourcebot-dev__sourcebot/packages/web/tools/decryptJWE.ts)<br>[packages/web/tools/generateOpenApi.ts](../../../../sources/sourcebot-dev__sourcebot/packages/web/tools/generateOpenApi.ts)<br>[packages/web/tools/globToRegexpPlayground.ts](../../../../sources/sourcebot-dev__sourcebot/packages/web/tools/globToRegexpPlayground.ts)<br>[packages/web/tools/eslint-plugin-local/index.mjs](../../../../sources/sourcebot-dev__sourcebot/packages/web/tools/eslint-plugin-local/index.mjs)<br>[packages/web/tools/eslint-plugin-local/rules/requireAuthWrapper.mjs](../../../../sources/sourcebot-dev__sourcebot/packages/web/tools/eslint-plugin-local/rules/requireAuthWrapper.mjs)<br>[packages/web/tools/eslint-plugin-local/rules/requireAuthWrapper.test.mjs](../../../../sources/sourcebot-dev__sourcebot/packages/web/tools/eslint-plugin-local/rules/requireAuthWrapper.test.mjs)<br>[packages/web/src/hooks/use-mobile.tsx](../../../../sources/sourcebot-dev__sourcebot/packages/web/src/hooks/use-mobile.tsx) |
| mcp | 72 | [packages/web/src/features/mcp/mcpOAuthReturnTo.test.ts](../../../../sources/sourcebot-dev__sourcebot/packages/web/src/features/mcp/mcpOAuthReturnTo.test.ts)<br>[packages/web/src/features/mcp/mcpOAuthReturnTo.ts](../../../../sources/sourcebot-dev__sourcebot/packages/web/src/features/mcp/mcpOAuthReturnTo.ts)<br>[packages/web/src/features/mcp/prismaOAuthClientProvider.test.ts](../../../../sources/sourcebot-dev__sourcebot/packages/web/src/features/mcp/prismaOAuthClientProvider.test.ts)<br>[packages/web/src/features/mcp/prismaOAuthClientProvider.ts](../../../../sources/sourcebot-dev__sourcebot/packages/web/src/features/mcp/prismaOAuthClientProvider.ts)<br>[packages/web/src/features/mcp/prismaScope.test.ts](../../../../sources/sourcebot-dev__sourcebot/packages/web/src/features/mcp/prismaScope.test.ts)<br>[packages/web/src/features/mcp/prismaScope.ts](../../../../sources/sourcebot-dev__sourcebot/packages/web/src/features/mcp/prismaScope.ts)<br>[packages/web/src/features/chat/mcp/utils.test.ts](../../../../sources/sourcebot-dev__sourcebot/packages/web/src/features/chat/mcp/utils.test.ts)<br>[packages/web/src/features/chat/mcp/utils.ts](../../../../sources/sourcebot-dev__sourcebot/packages/web/src/features/chat/mcp/utils.ts) |
| retrieval | 34 | [schemas/v3/index.json](../../../../sources/sourcebot-dev__sourcebot/schemas/v3/index.json)<br>[schemas/v2/index.json](../../../../sources/sourcebot-dev__sourcebot/schemas/v2/index.json)<br>[schemas/v1/index.json](../../../../sources/sourcebot-dev__sourcebot/schemas/v1/index.json)<br>[packages/web/tools/eslint-plugin-local/index.mjs](../../../../sources/sourcebot-dev__sourcebot/packages/web/tools/eslint-plugin-local/index.mjs)<br>[packages/web/src/features/tools/index.ts](../../../../sources/sourcebot-dev__sourcebot/packages/web/src/features/tools/index.ts)<br>[packages/web/src/features/search/index.ts](../../../../sources/sourcebot-dev__sourcebot/packages/web/src/features/search/index.ts)<br>[packages/web/src/features/git/index.ts](../../../../sources/sourcebot-dev__sourcebot/packages/web/src/features/git/index.ts)<br>[packages/web/src/features/chat/components/chatBox/index.ts](../../../../sources/sourcebot-dev__sourcebot/packages/web/src/features/chat/components/chatBox/index.ts) |
| spec | 4 | [docs/images/architecture_diagram.png](../../../../sources/sourcebot-dev__sourcebot/docs/images/architecture_diagram.png)<br>[docs/docs/misc/architecture.mdx](../../../../sources/sourcebot-dev__sourcebot/docs/docs/misc/architecture.mdx)<br>[docs/docs/deployment/infrastructure/architecture.mdx](../../../../sources/sourcebot-dev__sourcebot/docs/docs/deployment/infrastructure/architecture.mdx)<br>[.github/workflows/update-roadmap-released.yml](../../../../sources/sourcebot-dev__sourcebot/.github/workflows/update-roadmap-released.yml) |
| eval | 81 | [packages/web/tools/eslint-plugin-local/rules/requireAuthWrapper.test.mjs](../../../../sources/sourcebot-dev__sourcebot/packages/web/tools/eslint-plugin-local/rules/requireAuthWrapper.test.mjs)<br>[packages/web/src/middleware/withAuth.test.ts](../../../../sources/sourcebot-dev__sourcebot/packages/web/src/middleware/withAuth.test.ts)<br>[packages/web/src/lib/entitlements.test.ts](../../../../sources/sourcebot-dev__sourcebot/packages/web/src/lib/entitlements.test.ts)<br>[packages/web/src/features/tools/utils.test.ts](../../../../sources/sourcebot-dev__sourcebot/packages/web/src/features/tools/utils.test.ts)<br>[packages/web/src/features/mcp/mcpOAuthReturnTo.test.ts](../../../../sources/sourcebot-dev__sourcebot/packages/web/src/features/mcp/mcpOAuthReturnTo.test.ts)<br>[packages/web/src/features/mcp/prismaOAuthClientProvider.test.ts](../../../../sources/sourcebot-dev__sourcebot/packages/web/src/features/mcp/prismaOAuthClientProvider.test.ts)<br>[packages/web/src/features/mcp/prismaScope.test.ts](../../../../sources/sourcebot-dev__sourcebot/packages/web/src/features/mcp/prismaScope.test.ts)<br>[packages/web/src/features/git/dateUtils.test.ts](../../../../sources/sourcebot-dev__sourcebot/packages/web/src/features/git/dateUtils.test.ts) |
| security | 64 | [packages/web/src/auth.ts](../../../../sources/sourcebot-dev__sourcebot/packages/web/src/auth.ts)<br>[packages/web/src/features/auth/identityProvidersProvider.tsx](../../../../sources/sourcebot-dev__sourcebot/packages/web/src/features/auth/identityProvidersProvider.tsx)<br>[packages/web/src/features/auth/roleProvider.tsx](../../../../sources/sourcebot-dev__sourcebot/packages/web/src/features/auth/roleProvider.tsx)<br>[packages/web/src/features/auth/useIdentityProviders.ts](../../../../sources/sourcebot-dev__sourcebot/packages/web/src/features/auth/useIdentityProviders.ts)<br>[packages/web/src/features/auth/useRole.ts](../../../../sources/sourcebot-dev__sourcebot/packages/web/src/features/auth/useRole.ts)<br>[packages/web/src/ee/features/oauth/actions.ts](../../../../sources/sourcebot-dev__sourcebot/packages/web/src/ee/features/oauth/actions.ts)<br>[packages/web/src/ee/features/oauth/apiHandler.test.ts](../../../../sources/sourcebot-dev__sourcebot/packages/web/src/ee/features/oauth/apiHandler.test.ts)<br>[packages/web/src/ee/features/oauth/apiHandler.ts](../../../../sources/sourcebot-dev__sourcebot/packages/web/src/ee/features/oauth/apiHandler.ts) |
| ci | 17 | [.github/workflows/_build.yml](../../../../sources/sourcebot-dev__sourcebot/.github/workflows/_build.yml)<br>[.github/workflows/_merge.yml](../../../../sources/sourcebot-dev__sourcebot/.github/workflows/_merge.yml)<br>[.github/workflows/changelog-reminder.yml](../../../../sources/sourcebot-dev__sourcebot/.github/workflows/changelog-reminder.yml)<br>[.github/workflows/claude-bug-fixer.yml](../../../../sources/sourcebot-dev__sourcebot/.github/workflows/claude-bug-fixer.yml)<br>[.github/workflows/claude.yml](../../../../sources/sourcebot-dev__sourcebot/.github/workflows/claude.yml)<br>[.github/workflows/docs-broken-links.yml](../../../../sources/sourcebot-dev__sourcebot/.github/workflows/docs-broken-links.yml)<br>[.github/workflows/license-audit.yml](../../../../sources/sourcebot-dev__sourcebot/.github/workflows/license-audit.yml)<br>[.github/workflows/linear-release.yml](../../../../sources/sourcebot-dev__sourcebot/.github/workflows/linear-release.yml) |
| container | 10 | [docker-compose-dev.yml](../../../../sources/sourcebot-dev__sourcebot/docker-compose-dev.yml)<br>[docker-compose.yml](../../../../sources/sourcebot-dev__sourcebot/docker-compose.yml)<br>[Dockerfile](../../../../sources/sourcebot-dev__sourcebot/Dockerfile)<br>[docs/docs/deployment/docker-compose.mdx](../../../../sources/sourcebot-dev__sourcebot/docs/docs/deployment/docker-compose.mdx)<br>[docs/docs/deployment/k8s.mdx](../../../../sources/sourcebot-dev__sourcebot/docs/docs/deployment/k8s.mdx)<br>[docs/docs/deployment/sizing-guide.mdx](../../../../sources/sourcebot-dev__sourcebot/docs/docs/deployment/sizing-guide.mdx)<br>[docs/docs/deployment/infrastructure/architecture.mdx](../../../../sources/sourcebot-dev__sourcebot/docs/docs/deployment/infrastructure/architecture.mdx)<br>[docs/docs/deployment/infrastructure/redis.mdx](../../../../sources/sourcebot-dev__sourcebot/docs/docs/deployment/infrastructure/redis.mdx) |
| instruction | 7 | [AGENTS.md](../../../../sources/sourcebot-dev__sourcebot/AGENTS.md)<br>[CLAUDE.md](../../../../sources/sourcebot-dev__sourcebot/CLAUDE.md)<br>[packages/web/src/features/billing/CLAUDE.md](../../../../sources/sourcebot-dev__sourcebot/packages/web/src/features/billing/CLAUDE.md)<br>`packages/web/src/app/(app)/CLAUDE.md`<br>[docs/docs/features/agents/agents.mdx](../../../../sources/sourcebot-dev__sourcebot/docs/docs/features/agents/agents.mdx)<br>[.cursor/rules/cloud_agent.mdc](../../../../sources/sourcebot-dev__sourcebot/.cursor/rules/cloud_agent.mdc)<br>[.cursor/rules/style.mdc](../../../../sources/sourcebot-dev__sourcebot/.cursor/rules/style.mdc) |
| docs | 172 | [README.md](../../../../sources/sourcebot-dev__sourcebot/README.md)<br>[packages/web/src/features/workerApi/README.md](../../../../sources/sourcebot-dev__sourcebot/packages/web/src/features/workerApi/README.md)<br>[packages/web/src/features/search/README.md](../../../../sources/sourcebot-dev__sourcebot/packages/web/src/features/search/README.md)<br>[packages/web/src/features/chat/README.md](../../../../sources/sourcebot-dev__sourcebot/packages/web/src/features/chat/README.md)<br>[packages/web/src/components/README.md](../../../../sources/sourcebot-dev__sourcebot/packages/web/src/components/README.md)<br>`packages/web/src/app/(app)/README.md`<br>`packages/web/src/app/(app)/browse/README.md`<br>[packages/shared/README.md](../../../../sources/sourcebot-dev__sourcebot/packages/shared/README.md) |
| config | 16 | [Makefile](../../../../sources/sourcebot-dev__sourcebot/Makefile)<br>[package.json](../../../../sources/sourcebot-dev__sourcebot/package.json)<br>[packages/web/package.json](../../../../sources/sourcebot-dev__sourcebot/packages/web/package.json)<br>[packages/web/tsconfig.json](../../../../sources/sourcebot-dev__sourcebot/packages/web/tsconfig.json)<br>[packages/shared/package.json](../../../../sources/sourcebot-dev__sourcebot/packages/shared/package.json)<br>[packages/shared/tsconfig.json](../../../../sources/sourcebot-dev__sourcebot/packages/shared/tsconfig.json)<br>[packages/setupWizard/package.json](../../../../sources/sourcebot-dev__sourcebot/packages/setupWizard/package.json)<br>[packages/setupWizard/tsconfig.json](../../../../sources/sourcebot-dev__sourcebot/packages/setupWizard/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 81 | [packages/web/tools/eslint-plugin-local/rules/requireAuthWrapper.test.mjs](../../../../sources/sourcebot-dev__sourcebot/packages/web/tools/eslint-plugin-local/rules/requireAuthWrapper.test.mjs)<br>[packages/web/src/middleware/withAuth.test.ts](../../../../sources/sourcebot-dev__sourcebot/packages/web/src/middleware/withAuth.test.ts)<br>[packages/web/src/lib/entitlements.test.ts](../../../../sources/sourcebot-dev__sourcebot/packages/web/src/lib/entitlements.test.ts)<br>[packages/web/src/features/tools/utils.test.ts](../../../../sources/sourcebot-dev__sourcebot/packages/web/src/features/tools/utils.test.ts)<br>[packages/web/src/features/mcp/mcpOAuthReturnTo.test.ts](../../../../sources/sourcebot-dev__sourcebot/packages/web/src/features/mcp/mcpOAuthReturnTo.test.ts)<br>[packages/web/src/features/mcp/prismaOAuthClientProvider.test.ts](../../../../sources/sourcebot-dev__sourcebot/packages/web/src/features/mcp/prismaOAuthClientProvider.test.ts) |
| CI workflows | 17 | [.github/workflows/_build.yml](../../../../sources/sourcebot-dev__sourcebot/.github/workflows/_build.yml)<br>[.github/workflows/_merge.yml](../../../../sources/sourcebot-dev__sourcebot/.github/workflows/_merge.yml)<br>[.github/workflows/changelog-reminder.yml](../../../../sources/sourcebot-dev__sourcebot/.github/workflows/changelog-reminder.yml)<br>[.github/workflows/claude-bug-fixer.yml](../../../../sources/sourcebot-dev__sourcebot/.github/workflows/claude-bug-fixer.yml)<br>[.github/workflows/claude.yml](../../../../sources/sourcebot-dev__sourcebot/.github/workflows/claude.yml)<br>[.github/workflows/docs-broken-links.yml](../../../../sources/sourcebot-dev__sourcebot/.github/workflows/docs-broken-links.yml) |
| Containers / deploy | 10 | [docker-compose-dev.yml](../../../../sources/sourcebot-dev__sourcebot/docker-compose-dev.yml)<br>[docker-compose.yml](../../../../sources/sourcebot-dev__sourcebot/docker-compose.yml)<br>[Dockerfile](../../../../sources/sourcebot-dev__sourcebot/Dockerfile)<br>[docs/docs/deployment/docker-compose.mdx](../../../../sources/sourcebot-dev__sourcebot/docs/docs/deployment/docker-compose.mdx)<br>[docs/docs/deployment/k8s.mdx](../../../../sources/sourcebot-dev__sourcebot/docs/docs/deployment/k8s.mdx)<br>[docs/docs/deployment/sizing-guide.mdx](../../../../sources/sourcebot-dev__sourcebot/docs/docs/deployment/sizing-guide.mdx) |
| Security / policy | 64 | [packages/web/src/auth.ts](../../../../sources/sourcebot-dev__sourcebot/packages/web/src/auth.ts)<br>[packages/web/src/features/auth/identityProvidersProvider.tsx](../../../../sources/sourcebot-dev__sourcebot/packages/web/src/features/auth/identityProvidersProvider.tsx)<br>[packages/web/src/features/auth/roleProvider.tsx](../../../../sources/sourcebot-dev__sourcebot/packages/web/src/features/auth/roleProvider.tsx)<br>[packages/web/src/features/auth/useIdentityProviders.ts](../../../../sources/sourcebot-dev__sourcebot/packages/web/src/features/auth/useIdentityProviders.ts)<br>[packages/web/src/features/auth/useRole.ts](../../../../sources/sourcebot-dev__sourcebot/packages/web/src/features/auth/useRole.ts)<br>[packages/web/src/ee/features/oauth/actions.ts](../../../../sources/sourcebot-dev__sourcebot/packages/web/src/ee/features/oauth/actions.ts) |
| Agent instructions | 7 | [AGENTS.md](../../../../sources/sourcebot-dev__sourcebot/AGENTS.md)<br>[CLAUDE.md](../../../../sources/sourcebot-dev__sourcebot/CLAUDE.md)<br>[packages/web/src/features/billing/CLAUDE.md](../../../../sources/sourcebot-dev__sourcebot/packages/web/src/features/billing/CLAUDE.md)<br>`packages/web/src/app/(app)/CLAUDE.md`<br>[docs/docs/features/agents/agents.mdx](../../../../sources/sourcebot-dev__sourcebot/docs/docs/features/agents/agents.mdx)<br>[.cursor/rules/cloud_agent.mdc](../../../../sources/sourcebot-dev__sourcebot/.cursor/rules/cloud_agent.mdc) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `packages/web/src/features/mcp/mcpOAuthReturnTo.test.ts`, `packages/web/src/features/mcp/mcpOAuthReturnTo.ts`, `packages/web/src/features/mcp/prismaOAuthClientProvider.test.ts`.
2. Trace execution through entrypoints: `packages/web/src/ee/features/oauth/server.test.ts`, `packages/web/src/ee/features/oauth/server.ts`, `packages/web/src/ee/features/mcp/server.ts`.
3. Map agent/tool runtime through: `AGENTS.md`, `packages/web/tools/decryptJWE.ts`, `packages/web/tools/generateOpenApi.ts`.
4. Inspect retrieval/memory/indexing through: `schemas/v3/index.json`, `schemas/v2/index.json`, `schemas/v1/index.json`.
5. Verify behavior through test/eval files: `packages/web/tools/eslint-plugin-local/rules/requireAuthWrapper.test.mjs`, `packages/web/src/middleware/withAuth.test.ts`, `packages/web/src/lib/entitlements.test.ts`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Local clone structure analysis 1330 files, 350 directories.. 핵심 구조 신호는 package.json, Dockerfile, docker-compose.yml, Makefile, README.md, tests이며, deep-source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

mixed 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing입니다.
