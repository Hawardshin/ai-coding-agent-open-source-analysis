# sourcebot-dev/sourcebot 구조 분석

생성일: 2026-06-17T22:41:11.818Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/sourcebot-dev__sourcebot |
| remote | https://github.com/sourcebot-dev/sourcebot.git |
| HEAD | e626691 (2026-06-17) chore: upgrade @grpc/grpc-js to ^1.14.4 to address CVE-2026-48068, CVE-2026-48069 (#1315) |
| branch | main |
| groups | previous-clone-inventory-107 |
| files | 1330 |
| dirs | 350 |
| stack | Node/TypeScript/JavaScript |

## 구조 해석

- Monorepo/workspace 구조가 보이며 여러 패키지나 crate를 한 저장소에서 관리한다.
- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- 테스트 파일이 충분히 노출되어 기능 검증과 회귀 검증 흐름을 추적할 수 있다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `Features`, `Ask Sourcebot`, `Code Search`, `Code Navigation`, `Built-in File Explorer`, `Deploy Sourcebot`, `Build from source`

> <div align="center" <picture <source media="(prefers color scheme dark)" srcset=".github/images/logo dark.png" <img height="150" src=".github/images/logo light.png" </picture </div <div align="center" <div <h3 <a href="https //docs.sourcebot.dev" <strong Self Host</strong </a · <a href="https //app.sourcebot.dev" <strong Public Demo</strong </a </h3 </div <div <a href="https //docs.sourcebot.dev/" <strong Docs</strong </a · <a href="https //github.com/sourcebot dev/sourcebot/issues/459" <strong Roadmap</strong </a · <a href="https //github.com/sourcebot dev/sourcebot/issues/new?template=bug report.yml" <strong Report Bug</strong </a · <a href="https //github.com/sourcebot dev/sourcebot/issues/new?template=feature request.md" <strong Feature Request</strong </a · <a href="https //www.sourcebot.dev/changelog" <strong Changelog</strong </a </div <br/ <div </div </div <p align="center" <a hr

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| _typos.toml | file |
| .cursor | dir |
| .devcontainer | dir |
| .dockerignore | file |
| .env.development | file |
| .github | dir |
| .gitignore | file |
| .gitmodules | file |
| .prettierrc | file |
| .trivyignore | file |
| .vscode | dir |
| .yarn | dir |
| .yarnrc.yml | file |
| AGENTS.md | file |
| CHANGELOG.md | file |
| CLAUDE.md | file |
| Coastfile | file |
| configs | dir |
| CONTRIBUTING.md | file |
| docker-compose-dev.yml | file |
| docker-compose.yml | file |
| Dockerfile | file |
| docs | dir |
| ee | dir |
| entrypoint.sh | file |
| fly.toml | file |
| grafana.alloy | file |
| install-ctags-macos.sh | file |
| LICENSE.md | file |
| Makefile | file |
| package.json | file |
| packages | dir |
| prefix-output.sh | file |
| public.pem | file |
| README.md | file |
| schemas | dir |
| scripts | dir |
| supervisord.conf | file |
| trivy.yaml | file |
| vendor | dir |
| yarn.lock | file |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| packages/ | 1067 |
| docs/ | 162 |
| .github/ | 32 |
| (root) | 29 |
| schemas/ | 17 |
| scripts/ | 6 |
| .devcontainer/ | 5 |
| configs/ | 5 |
| .vscode/ | 3 |
| .cursor/ | 2 |
| .yarn/ | 1 |
| ee/ | 1 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| packages/ | 1067 | preferred |
| docs/ | 162 | preferred |
| scripts/ | 6 | preferred |
| packages/web/ | 829 | large |
| packages/web/src/ | 763 | large |
| packages/db/ | 94 | large |
| packages/db/prisma/ | 79 | large |
| docs/images/ | 76 | large |
| docs/docs/ | 57 | large |
| packages/backend/ | 47 | large |
| packages/web/public/ | 47 | large |
| packages/backend/src/ | 43 | large |
| packages/schemas/ | 37 | large |
| packages/schemas/src/ | 34 | large |
| .github/ | 32 | large |
| packages/shared/ | 24 | large |
| packages/queryLanguage/ | 21 | large |
| docs/snippets/ | 20 | large |
| packages/shared/src/ | 18 | large |
| .github/workflows/ | 17 | large |
| docs/snippets/schemas/ | 17 | large |
| schemas/ | 17 | large |
| docs/docs/features/ | 15 | large |
| packages/setupWizard/ | 15 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `.devcontainer/Dockerfile`
- `.devcontainer/docker-compose.yml`
- `Dockerfile`
- `docker-compose.yml`
- `package.json`
- `packages/backend/package.json`
- `packages/backend/tsconfig.json`
- `packages/db/package.json`
- `packages/db/tsconfig.json`
- `packages/queryLanguage/package.json`
- `packages/queryLanguage/tsconfig.json`
- `packages/schemas/package.json`
- `packages/schemas/tsconfig.json`
- `packages/setupWizard/package.json`
- `packages/setupWizard/tsconfig.json`
- `packages/shared/package.json`
- `packages/shared/tsconfig.json`
- `packages/web/package.json`
- `packages/web/tsconfig.json`
- `yarn.lock`

### package.json

| 경로 | 이름 | scripts | deps |
| --- | --- | --- | --- |
| package.json |  | build, test, lint, dev, with-env, dev:zoekt, dev:backend, dev:web, watch:schemas, dev:prisma:migrate:dev, dev:prisma:generate, dev:prisma:studio, dev:prisma:migrate:reset, dev:prisma:db:push, build:deps, openapi:generate |  |
| packages/backend/package.json | @sourcebot/backend | dev:watch, dev, build, test | @coderabbitai/bitbucket, @gitbeaker/rest, @octokit/app, @octokit/rest, @sentry/cli, @sentry/node, @sentry/profiling-node, @sourcebot/db, @sourcebot/schemas, @sourcebot/shared, @types/express, argparse, azure-devops-node-api, bullmq |
| packages/db/package.json | @sourcebot/db | build, postinstall, prisma:generate, prisma:generate:watch, prisma:migrate:dev, prisma:migrate:prod, prisma:migrate:reset, prisma:db:push, prisma:studio, tool:prisma, tool:run-script | @prisma/client, @types/readline-sync, readline-sync |
| packages/queryLanguage/package.json | @sourcebot/query-language | build, test, postinstall | @lezer/common, @lezer/lr |
| packages/schemas/package.json | @sourcebot/schemas | build, generate, watch, postinstall |  |
| packages/setupWizard/package.json | setup-sourcebot | build, watch, dev, prepublishOnly | @inquirer/prompts, chalk, inquirer-select-pro, ora |
| packages/shared/package.json | @sourcebot/shared | build, build:watch, postinstall, test, tool:resolve-env-overrides | @google-cloud/secret-manager, @logtail/node, @logtail/winston, @sourcebot/db, @sourcebot/schemas, @t3-oss/env-core, ajv, ioredis, micromatch, strip-json-comments, triple-beam, winston, zod |
| packages/web/package.json | @sourcebot/web | dev, build, start, lint, test, openapi:generate, generate:protos, dev:emails, tool:decrypt-jwe | @ai-sdk/amazon-bedrock, @ai-sdk/anthropic, @ai-sdk/azure, @ai-sdk/deepseek, @ai-sdk/google, @ai-sdk/google-vertex, @ai-sdk/mcp, @ai-sdk/mistral, @ai-sdk/openai, @ai-sdk/openai-compatible, @ai-sdk/react, @ai-sdk/xai, @anthropic-ai/sdk, @auth/prisma-adapter |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `CONTRIBUTING.md`
- `README.md`
- `docs/.editorconfig`
- `docs/README.md`
- `docs/api-reference/sourcebot-public.openapi.json`
- `docs/docs.json`
- `docs/docs/activating-a-subscription.mdx`
- `docs/docs/api-reference/authentication.mdx`
- `docs/docs/configuration/audit-logs.mdx`
- `docs/docs/configuration/auth/access-settings.mdx`
- `docs/docs/configuration/auth/authentication.mdx`
- `docs/docs/configuration/auth/faq.mdx`
- `docs/docs/configuration/auth/providers.mdx`
- `docs/docs/configuration/auth/roles-and-permissions.mdx`
- `docs/docs/configuration/config-file.mdx`
- `docs/docs/configuration/declarative-config.mdx`
- `docs/docs/configuration/environment-variables.mdx`
- `docs/docs/configuration/idp.mdx`
- `docs/docs/configuration/language-model-providers.mdx`
- `docs/docs/configuration/structured-logging.mdx`
- `docs/docs/configuration/transactional-emails.mdx`
- `docs/docs/connections/ado-cloud.mdx`
- `docs/docs/connections/ado-server.mdx`
- `docs/docs/connections/bitbucket-cloud.mdx`
- `docs/docs/connections/bitbucket-data-center.mdx`
- `docs/docs/connections/generic-git-host.mdx`
- `docs/docs/connections/gerrit.mdx`
- `docs/docs/connections/gitea.mdx`
- `docs/docs/connections/github.mdx`
- `docs/docs/connections/gitlab.mdx`
- `docs/docs/connections/indexing-your-code.mdx`
- `docs/docs/connections/local-repos.mdx`
- `docs/docs/connections/request-new.mdx`
- `docs/docs/deployment/docker-compose.mdx`
- `docs/docs/deployment/infrastructure/architecture.mdx`
- `docs/docs/deployment/infrastructure/redis.mdx`
- `docs/docs/deployment/k8s.mdx`
- `docs/docs/deployment/sizing-guide.mdx`
- `docs/docs/features/agents/agents.mdx`
- `docs/docs/features/agents/review-agent.mdx`
- `docs/docs/features/analytics.mdx`
- `docs/docs/features/ask/add-model-providers.mdx`
- `docs/docs/features/ask/ask-sourcebot.mdx`
- `docs/docs/features/ask/chat-sharing.mdx`
- `docs/docs/features/ask/connectors.mdx`
- `docs/docs/features/code-navigation.mdx`
- `docs/docs/features/mcp-server.mdx`
- `docs/docs/features/permission-syncing.mdx`
- `docs/docs/features/search/ai-search-assist.mdx`
- `docs/docs/features/search/code-search.mdx`
- ... 30 more

### 에이전트 지침 후보

- `.cursor/rules/cloud_agent.mdc`
- `.cursor/rules/style.mdc`
- `AGENTS.md`
- `CLAUDE.md`
- `docs/docs/features/mcp-server.mdx`
- `docs/images/mcp_api_key_settings.png`
- `docs/images/mcp_oauth_authorize.png`
- `packages/db/prisma/migrations/20260603172622_add_mcp_connectors/migration.sql`
- `packages/web/src/app/(app)/CLAUDE.md`
- `packages/web/src/app/(app)/chat/components/mcpOAuthStatusToast.tsx`
- `packages/web/src/app/(app)/settings/mcp/clientCard.tsx`
- `packages/web/src/app/(app)/settings/mcp/clients.ts`
- `packages/web/src/app/(app)/settings/mcp/mcpEntitlementMessage.tsx`
- `packages/web/src/app/(app)/settings/mcp/mcpPage.tsx`
- `packages/web/src/app/(app)/settings/mcp/page.tsx`
- `packages/web/src/app/(app)/settings/workspaceAskAgent/connectors/[serverId]/tools/mcpToolPermissionsPage.tsx`
- `packages/web/src/app/api/(server)/ee/askmcp/callback/route.test.ts`
- `packages/web/src/app/api/(server)/ee/askmcp/callback/route.ts`
- `packages/web/src/app/api/(server)/ee/askmcp/configuration/[serverId]/tools/route.test.ts`
- `packages/web/src/app/api/(server)/ee/askmcp/configuration/[serverId]/tools/route.ts`
- `packages/web/src/app/api/(server)/ee/askmcp/configuration/route.test.ts`
- `packages/web/src/app/api/(server)/ee/askmcp/configuration/route.ts`
- `packages/web/src/app/api/(server)/ee/askmcp/connect/route.test.ts`
- `packages/web/src/app/api/(server)/ee/askmcp/connect/route.ts`
- `packages/web/src/app/api/(server)/ee/askmcp/connect/types.ts`
- `packages/web/src/app/api/(server)/ee/askmcp/servers/route.test.ts`
- `packages/web/src/app/api/(server)/ee/askmcp/servers/route.ts`
- `packages/web/src/app/api/(server)/ee/askmcp/tools/route.test.ts`
- `packages/web/src/app/api/(server)/ee/askmcp/tools/route.ts`
- `packages/web/src/app/api/(server)/ee/mcp/route.ts`
- `packages/web/src/ee/features/chat/components/chatThread/mcpFailedServersBanner.tsx`
- `packages/web/src/ee/features/chat/components/chatThread/tools/mcpToolComponent.tsx`
- `packages/web/src/ee/features/chat/mcp/actions.test.ts`
- `packages/web/src/ee/features/chat/mcp/actions.ts`
- `packages/web/src/ee/features/chat/mcp/analytics.ts`
- `packages/web/src/ee/features/chat/mcp/components/accountAskAgentPage.test.tsx`
- `packages/web/src/ee/features/chat/mcp/components/accountAskAgentPage.tsx`
- `packages/web/src/ee/features/chat/mcp/components/connectMcpButton.tsx`
- `packages/web/src/ee/features/chat/mcp/components/connectorCard.test.tsx`
- `packages/web/src/ee/features/chat/mcp/components/connectorCard.tsx`
- `packages/web/src/ee/features/chat/mcp/components/connectorRowInfo.tsx`
- `packages/web/src/ee/features/chat/mcp/components/connectorToolDisclosure.test.tsx`
- `packages/web/src/ee/features/chat/mcp/components/connectorToolDisclosure.tsx`
- `packages/web/src/ee/features/chat/mcp/components/connectorToolUsageDisclosure.test.tsx`
- `packages/web/src/ee/features/chat/mcp/components/connectorToolUsageDisclosure.tsx`
- `packages/web/src/ee/features/chat/mcp/components/connectorsMenu.test.ts`
- `packages/web/src/ee/features/chat/mcp/components/connectorsMenu.tsx`
- `packages/web/src/ee/features/chat/mcp/components/mcpFavicon.tsx`
- `packages/web/src/ee/features/chat/mcp/components/prefabConnectorPopover.tsx`
- `packages/web/src/ee/features/chat/mcp/connectionStatus.test.ts`
- `packages/web/src/ee/features/chat/mcp/connectionStatus.ts`
- `packages/web/src/ee/features/chat/mcp/dcrDiscovery.test.ts`
- `packages/web/src/ee/features/chat/mcp/dcrDiscovery.ts`
- `packages/web/src/ee/features/chat/mcp/errors.ts`
- `packages/web/src/ee/features/chat/mcp/externalMcpError.test.ts`
- `packages/web/src/ee/features/chat/mcp/externalMcpError.ts`
- `packages/web/src/ee/features/chat/mcp/hooks/useConnectMcp.ts`
- `packages/web/src/ee/features/chat/mcp/hooks/useMcpToolMetadata.ts`
- `packages/web/src/ee/features/chat/mcp/mcpClientFactory.test.ts`
- `packages/web/src/ee/features/chat/mcp/mcpClientFactory.ts`
- `packages/web/src/ee/features/chat/mcp/mcpOAuthReturnTo.test.ts`
- `packages/web/src/ee/features/chat/mcp/mcpOAuthReturnTo.ts`
- `packages/web/src/ee/features/chat/mcp/mcpOAuthScopes.ts`
- `packages/web/src/ee/features/chat/mcp/mcpToolMetadata.test.ts`
- `packages/web/src/ee/features/chat/mcp/mcpToolMetadata.ts`
- `packages/web/src/ee/features/chat/mcp/mcpToolPermissionDisplay.tsx`
- `packages/web/src/ee/features/chat/mcp/mcpToolPermissions.ts`
- `packages/web/src/ee/features/chat/mcp/mcpToolRegistry.test.ts`
- `packages/web/src/ee/features/chat/mcp/mcpToolRegistry.ts`
- `packages/web/src/ee/features/chat/mcp/mcpToolSets.test.ts`
- `packages/web/src/ee/features/chat/mcp/mcpToolSets.ts`
- `packages/web/src/ee/features/chat/mcp/oauthScopeUtils.test.ts`
- `packages/web/src/ee/features/chat/mcp/oauthScopeUtils.ts`
- `packages/web/src/ee/features/chat/mcp/prefabMcpServers.ts`
- `packages/web/src/ee/features/chat/mcp/prismaOAuthClientProvider.test.ts`
- `packages/web/src/ee/features/chat/mcp/prismaOAuthClientProvider.ts`
- `packages/web/src/ee/features/chat/mcp/queryKeys.test.ts`
- `packages/web/src/ee/features/chat/mcp/queryKeys.ts`
- `packages/web/src/ee/features/chat/mcp/types.ts`
- `packages/web/src/ee/features/chat/mcp/utils.server.ts`
- ... 19 more

### 스펙/템플릿/명령/스킬 후보

_없음_

## 테스트 / CI / 배포 표면

### 테스트 후보

- `packages/backend/src/bitbucket.test.ts`
- `packages/backend/src/ee/syncSearchContexts.test.ts`
- `packages/backend/src/errors.test.ts`
- `packages/backend/src/git.test.ts`
- `packages/backend/src/github.test.ts`
- `packages/backend/src/gitlab.test.ts`
- `packages/backend/src/repoCompileUtils.test.ts`
- `packages/backend/src/repoIndexManager.test.ts`
- `packages/backend/src/utils.test.ts`
- `packages/queryLanguage/test/basic.txt`
- `packages/queryLanguage/test/grammar.regex.test.ts`
- `packages/queryLanguage/test/grammar.test.ts`
- `packages/queryLanguage/test/grouping.txt`
- `packages/queryLanguage/test/negation.txt`
- `packages/queryLanguage/test/operators.txt`
- `packages/queryLanguage/test/parenthesis.txt`
- `packages/queryLanguage/test/precedence.txt`
- `packages/queryLanguage/test/prefixes.txt`
- `packages/queryLanguage/test/quoted.txt`
- `packages/queryLanguage/test/regex.txt`
- `packages/shared/src/entitlements.test.ts`
- `packages/shared/src/env.server.test.ts`
- `packages/shared/src/utils.test.ts`
- `packages/web/src/app/(app)/browse/hooks/utils.test.ts`
- `packages/web/src/app/(app)/components/banners/bannerResolver.test.ts`
- `packages/web/src/app/(app)/components/searchBar/searchSuggestionsBox.test.tsx`
- `packages/web/src/app/api/(server)/ee/askmcp/callback/route.test.ts`
- `packages/web/src/app/api/(server)/ee/askmcp/configuration/[serverId]/tools/route.test.ts`
- `packages/web/src/app/api/(server)/ee/askmcp/configuration/route.test.ts`
- `packages/web/src/app/api/(server)/ee/askmcp/connect/route.test.ts`
- `packages/web/src/app/api/(server)/ee/askmcp/servers/route.test.ts`
- `packages/web/src/app/api/(server)/ee/askmcp/tools/route.test.ts`
- `packages/web/src/ee/features/chat/agent.test.ts`
- `packages/web/src/ee/features/chat/components/chatThread/codeFoldingExtension.test.ts`
- `packages/web/src/ee/features/chat/components/chatThread/detailsCard.test.tsx`
- `packages/web/src/ee/features/chat/components/chatThreadPanel.test.tsx`
- `packages/web/src/ee/features/chat/mcp/actions.test.ts`
- `packages/web/src/ee/features/chat/mcp/components/accountAskAgentPage.test.tsx`
- `packages/web/src/ee/features/chat/mcp/components/connectorCard.test.tsx`
- `packages/web/src/ee/features/chat/mcp/components/connectorToolDisclosure.test.tsx`
- `packages/web/src/ee/features/chat/mcp/components/connectorToolUsageDisclosure.test.tsx`
- `packages/web/src/ee/features/chat/mcp/components/connectorsMenu.test.ts`
- `packages/web/src/ee/features/chat/mcp/connectionStatus.test.ts`
- `packages/web/src/ee/features/chat/mcp/dcrDiscovery.test.ts`
- `packages/web/src/ee/features/chat/mcp/externalMcpError.test.ts`
- `packages/web/src/ee/features/chat/mcp/mcpClientFactory.test.ts`
- `packages/web/src/ee/features/chat/mcp/mcpOAuthReturnTo.test.ts`
- `packages/web/src/ee/features/chat/mcp/mcpToolMetadata.test.ts`
- `packages/web/src/ee/features/chat/mcp/mcpToolRegistry.test.ts`
- `packages/web/src/ee/features/chat/mcp/mcpToolSets.test.ts`
- `packages/web/src/ee/features/chat/mcp/oauthScopeUtils.test.ts`
- `packages/web/src/ee/features/chat/mcp/prismaOAuthClientProvider.test.ts`
- `packages/web/src/ee/features/chat/mcp/queryKeys.test.ts`
- `packages/web/src/ee/features/chat/mcp/utils.test.ts`
- `packages/web/src/ee/features/chat/useExtractReferences.test.ts`
- `packages/web/src/ee/features/chat/useMessagePairs.test.ts`
- `packages/web/src/ee/features/codeNav/components/symbolHoverPopup/symbolHoverTargetsExtension.test.ts`
- `packages/web/src/ee/features/oauth/apiHandler.test.ts`
- `packages/web/src/ee/features/oauth/constants.test.ts`
- `packages/web/src/ee/features/oauth/server.test.ts`
- `packages/web/src/features/agents/review-agent/nodes/githubPrParser.test.ts`
- `packages/web/src/features/agents/review-agent/nodes/githubPushPrReviews.test.ts`
- `packages/web/src/features/agents/review-agent/nodes/gitlabMrParser.test.ts`
- `packages/web/src/features/agents/review-agent/nodes/gitlabPushMrReviews.test.ts`
- `packages/web/src/features/chat/mcp/utils.test.ts`
- `packages/web/src/features/chat/mcpOAuthDraft.test.ts`
- `packages/web/src/features/chat/types.test.ts`
- `packages/web/src/features/chat/utils.test.ts`
- `packages/web/src/features/git/dateUtils.test.ts`
- `packages/web/src/features/git/getFileSourceApi.test.ts`
- `packages/web/src/features/git/listCommitsApi.test.ts`
- `packages/web/src/features/git/utils.test.ts`
- `packages/web/src/features/mcp/mcpOAuthReturnTo.test.ts`
- `packages/web/src/features/mcp/prismaOAuthClientProvider.test.ts`
- `packages/web/src/features/mcp/prismaScope.test.ts`
- `packages/web/src/features/tools/utils.test.ts`
- `packages/web/src/lib/entitlements.test.ts`
- `packages/web/src/middleware/withAuth.test.ts`

### CI/Docker 후보

- `.devcontainer/Dockerfile`
- `.devcontainer/docker-compose.yml`
- `.github/workflows/_build.yml`
- `.github/workflows/_merge.yml`
- `.github/workflows/changelog-reminder.yml`
- `.github/workflows/claude-bug-fixer.yml`
- `.github/workflows/claude.yml`
- `.github/workflows/docs-broken-links.yml`
- `.github/workflows/license-audit.yml`
- `.github/workflows/linear-release.yml`
- `.github/workflows/lint.yml`
- `.github/workflows/pr-gate.yml`
- `.github/workflows/release-dev.yml`
- `.github/workflows/release-prod.yml`
- `.github/workflows/release-setup-sourcebot.yml`
- `.github/workflows/tag-linear-issues.yml`
- `.github/workflows/test.yml`
- `.github/workflows/update-roadmap-released.yml`
- `.github/workflows/vulnerability-triage.yml`
- `Dockerfile`
- `docker-compose-dev.yml`
- `docker-compose.yml`
- `docs/docs/deployment/docker-compose.mdx`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .ts | 510 |
| .tsx | 371 |
| .png | 98 |
| .mdx | 77 |
| .sql | 77 |
| .json | 45 |
| .svg | 34 |
| .yml | 24 |
| .md | 20 |
| .txt | 19 |
| .mjs | 9 |
| .gitignore | 6 |
| .sh | 6 |
| .mp4 | 4 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `packages/ 내부 책임 분리`
- `docs/ 내부 책임 분리`
- `scripts/ 내부 책임 분리`
- `packages/web/ 내부 책임 분리`
- `packages/web/src/ 내부 책임 분리`
- `.devcontainer/Dockerfile 실행 스크립트와 패키지 경계`
- `.devcontainer/docker-compose.yml 실행 스크립트와 패키지 경계`
- `Dockerfile 실행 스크립트와 패키지 경계`
- `docker-compose.yml 실행 스크립트와 패키지 경계`
- `package.json 실행 스크립트와 패키지 경계`

