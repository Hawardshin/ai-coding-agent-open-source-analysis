# sourcebot-dev/sourcebot 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

Local clone structure analysis: 1330 files, 350 directories.

## 요약

- 조사 단위: `sources/sourcebot-dev__sourcebot` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 1,327 files, 347 directories, depth score 126, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=packages/web/src/features/mcp/mcpOAuthReturnTo.test.ts, packages/web/src/features/mcp/mcpOAuthReturnTo.ts, packages/web/src/features/mcp/prismaOAuthClientProvider.test.ts이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

## 바로가기

| 이동 | 여기서 볼 것 |
| --- | --- |
| [전체 시작 README](../../../../README.md) | 레포 전체 목적, 핵심 카테고리, 읽는 순서. |
| [전체 보고서 읽기 지도](../../../README.md) | 모든 보고서의 시작점, 주제, 폴더 지도. |
| [주제별 보고서 목차](../../../by-topic/README.md) | 조사 질문 기준으로 보고서를 찾는 입구. |
| [표/CSV 목차](../../../tables/README.md) | 표로 빠르게 훑고 CSV로 비교하는 입구. |
| [레포별 인사이트](../../../repository-insights/README.md) | 레포별 총평과 위험 신호. |
| [소스 딥다이브](../../README.md) | 주제별 소스 경로 근거. |
| [레포별 소스 딥다이브](../README.md) | 로컬 클론 1개당 1개 Markdown 딥다이브. |
| [소스 트렌드 인사이트](../../../source-insights/README.md) | 카테고리별 트렌드와 레포별 특징 비교. |


## 레포 컨텍스트

| 항목 | 값 |
| --- | --- |
| 레포 | sourcebot-dev/sourcebot |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | mixed |
| Language | 없음 |
| Stars | 없음 |
| Forks | 없음 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 심층 소스+보고서 |
| 소스 | [sources/sourcebot-dev__sourcebot](../../../../sources/sourcebot-dev__sourcebot) |
| 기존 보고서 | [reports/clone-structures/sourcebot-dev__sourcebot.md](../../../clone-structures/sourcebot-dev__sourcebot.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 1327 / 347 |
| 관측 최대 깊이 | 12 |
| 상위 디렉터리 | .cursor, .devcontainer, .github, .yarn, configs, docs, ee, packages, schemas, scripts |
| 상위 확장자 | .ts: 510, .tsx: 371, .png: 98, .mdx: 77, .sql: 77, .json: 43, .svg: 34, .yml: 24, .md: 20, .txt: 19, (none): 16, .mjs: 9 |
| 소스 패턴 | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
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


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
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


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | 없음 |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
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


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 81 | [packages/web/tools/eslint-plugin-local/rules/requireAuthWrapper.test.mjs](../../../../sources/sourcebot-dev__sourcebot/packages/web/tools/eslint-plugin-local/rules/requireAuthWrapper.test.mjs)<br>[packages/web/src/middleware/withAuth.test.ts](../../../../sources/sourcebot-dev__sourcebot/packages/web/src/middleware/withAuth.test.ts)<br>[packages/web/src/lib/entitlements.test.ts](../../../../sources/sourcebot-dev__sourcebot/packages/web/src/lib/entitlements.test.ts)<br>[packages/web/src/features/tools/utils.test.ts](../../../../sources/sourcebot-dev__sourcebot/packages/web/src/features/tools/utils.test.ts)<br>[packages/web/src/features/mcp/mcpOAuthReturnTo.test.ts](../../../../sources/sourcebot-dev__sourcebot/packages/web/src/features/mcp/mcpOAuthReturnTo.test.ts)<br>[packages/web/src/features/mcp/prismaOAuthClientProvider.test.ts](../../../../sources/sourcebot-dev__sourcebot/packages/web/src/features/mcp/prismaOAuthClientProvider.test.ts) |
| CI workflow | 17 | [.github/workflows/_build.yml](../../../../sources/sourcebot-dev__sourcebot/.github/workflows/_build.yml)<br>[.github/workflows/_merge.yml](../../../../sources/sourcebot-dev__sourcebot/.github/workflows/_merge.yml)<br>[.github/workflows/changelog-reminder.yml](../../../../sources/sourcebot-dev__sourcebot/.github/workflows/changelog-reminder.yml)<br>[.github/workflows/claude-bug-fixer.yml](../../../../sources/sourcebot-dev__sourcebot/.github/workflows/claude-bug-fixer.yml)<br>[.github/workflows/claude.yml](../../../../sources/sourcebot-dev__sourcebot/.github/workflows/claude.yml)<br>[.github/workflows/docs-broken-links.yml](../../../../sources/sourcebot-dev__sourcebot/.github/workflows/docs-broken-links.yml) |
| 컨테이너/배포 | 10 | [docker-compose-dev.yml](../../../../sources/sourcebot-dev__sourcebot/docker-compose-dev.yml)<br>[docker-compose.yml](../../../../sources/sourcebot-dev__sourcebot/docker-compose.yml)<br>[Dockerfile](../../../../sources/sourcebot-dev__sourcebot/Dockerfile)<br>[docs/docs/deployment/docker-compose.mdx](../../../../sources/sourcebot-dev__sourcebot/docs/docs/deployment/docker-compose.mdx)<br>[docs/docs/deployment/k8s.mdx](../../../../sources/sourcebot-dev__sourcebot/docs/docs/deployment/k8s.mdx)<br>[docs/docs/deployment/sizing-guide.mdx](../../../../sources/sourcebot-dev__sourcebot/docs/docs/deployment/sizing-guide.mdx) |
| 보안/정책 | 64 | [packages/web/src/auth.ts](../../../../sources/sourcebot-dev__sourcebot/packages/web/src/auth.ts)<br>[packages/web/src/features/auth/identityProvidersProvider.tsx](../../../../sources/sourcebot-dev__sourcebot/packages/web/src/features/auth/identityProvidersProvider.tsx)<br>[packages/web/src/features/auth/roleProvider.tsx](../../../../sources/sourcebot-dev__sourcebot/packages/web/src/features/auth/roleProvider.tsx)<br>[packages/web/src/features/auth/useIdentityProviders.ts](../../../../sources/sourcebot-dev__sourcebot/packages/web/src/features/auth/useIdentityProviders.ts)<br>[packages/web/src/features/auth/useRole.ts](../../../../sources/sourcebot-dev__sourcebot/packages/web/src/features/auth/useRole.ts)<br>[packages/web/src/ee/features/oauth/actions.ts](../../../../sources/sourcebot-dev__sourcebot/packages/web/src/ee/features/oauth/actions.ts) |
| 에이전트 지시문 | 7 | [AGENTS.md](../../../../sources/sourcebot-dev__sourcebot/AGENTS.md)<br>[CLAUDE.md](../../../../sources/sourcebot-dev__sourcebot/CLAUDE.md)<br>[packages/web/src/features/billing/CLAUDE.md](../../../../sources/sourcebot-dev__sourcebot/packages/web/src/features/billing/CLAUDE.md)<br>`packages/web/src/app/(app)/CLAUDE.md`<br>[docs/docs/features/agents/agents.mdx](../../../../sources/sourcebot-dev__sourcebot/docs/docs/features/agents/agents.mdx)<br>[.cursor/rules/cloud_agent.mdc](../../../../sources/sourcebot-dev__sourcebot/.cursor/rules/cloud_agent.mdc) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `packages/web/src/features/mcp/mcpOAuthReturnTo.test.ts`, `packages/web/src/features/mcp/mcpOAuthReturnTo.ts`, `packages/web/src/features/mcp/prismaOAuthClientProvider.test.ts`.
2. entrypoint를 따라 실행 흐름 확인: `packages/web/src/ee/features/oauth/server.test.ts`, `packages/web/src/ee/features/oauth/server.ts`, `packages/web/src/ee/features/mcp/server.ts`.
3. agent/tool runtime 매핑: `AGENTS.md`, `packages/web/tools/decryptJWE.ts`, `packages/web/tools/generateOpenApi.ts`.
4. retrieval/memory/indexing 확인: `schemas/v3/index.json`, `schemas/v2/index.json`, `schemas/v1/index.json`.
5. test/eval 파일로 동작 검증: `packages/web/tools/eslint-plugin-local/rules/requireAuthWrapper.test.mjs`, `packages/web/src/middleware/withAuth.test.ts`, `packages/web/src/lib/entitlements.test.ts`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Local clone structure analysis 1330 files, 350 directories.. 핵심 구조 신호는 package.json, Dockerfile, docker-compose.yml, Makefile, README.md, tests이며, 심층 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

mixed 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음입니다.
