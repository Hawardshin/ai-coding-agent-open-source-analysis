# langfuse/langfuse 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

Local clone structure analysis: 3660 files, 1176 directories.

## 요약

- 조사 단위: `sources/langfuse__langfuse` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 3,657 files, 1,175 directories, depth score 126, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=web/src/pages/api/public/mcp/index.ts, web/src/features/mcp/README.md, web/src/features/mcp/types.ts이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | langfuse/langfuse |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | mixed |
| Language | 없음 |
| Stars | 없음 |
| Forks | 없음 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 심층 소스+보고서 |
| 소스 | [sources/langfuse__langfuse](../../../../sources/langfuse__langfuse) |
| 기존 보고서 | [reports/clone-structures/langfuse__langfuse.md](../../../clone-structures/langfuse__langfuse.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 3657 / 1175 |
| 관측 최대 깊이 | 10 |
| 상위 디렉터리 | .agents, .devcontainer, .github, .husky, ee, fern, packages, patches, scripts, specs, web, worker |
| 상위 확장자 | .ts: 1794, .tsx: 827, .sql: 542, .md: 228, .json: 81, .yml: 78, .sh: 15, (none): 15, .mjs: 12, .svg: 10, .yaml: 10, .png: 9 |
| 소스 패턴 | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| web | source boundary | 194 |
| packages/shared | packages workspace | 12 |
| packages/eslint-plugin | packages workspace | 3 |
| .devcontainer | deployment surface | 1 |
| .github | ci surface | 1 |
| ee | top-level component | 1 |
| fern | top-level component | 1 |
| packages | source boundary | 1 |
| packages/config-eslint | packages workspace | 1 |
| packages/config-typescript | packages workspace | 1 |
| patches | top-level component | 1 |
| scripts | top-level component | 1 |
| specs | top-level component | 1 |
| worker | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| quality | package.json | agents:check | node scripts/agents/sync-agent-shims.mjs --check |
| utility | package.json | agents:sync | node scripts/agents/sync-agent-shims.mjs |
| utility | package.json | postinstall | node -e "const fs = require('node:fs'); const cp = require('node:child_process'); if (!fs.existsSync('scripts/postinstall.sh')) { console.log('Skipping repo postinstall helper: scripts/postinstall.sh is not present in th |
| utility | package.json | preinstall | npx only-allow pnpm |
| serve-dev | package.json | infra:dev:up | docker compose -f ./docker-compose.dev.yml up -d --wait |
| serve-dev | package.json | infra:dev:down | docker compose -f ./docker-compose.dev.yml down |
| serve-dev | package.json | infra:dev:prune | docker compose -f ./docker-compose.dev.yml down -v |
| utility | package.json | db:generate | turbo run db:generate |
| utility | package.json | db:migrate | turbo run db:migrate |
| utility | package.json | db:seed | turbo run db:seed |
| utility | package.json | db:seed:examples | turbo run db:seed:examples |
| utility | package.json | nuke | bash ./scripts/nuke.sh |
| utility | package.json | seed | pnpm --filter=shared run seed:scenario |
| test | package.json | dx | pnpm i && pnpm run infra:dev:prune && pnpm run infra:dev:up --pull always && pnpm --filter=shared run db:reset:test && pnpm --filter=shared run db:reset && pnpm --filter=shared run ch:reset && pnpm --filter=shared run db |
| test | package.json | dx-f | pnpm i && pnpm run infra:dev:prune && pnpm run infra:dev:up --pull always && pnpm --filter=shared run db:reset:test && pnpm --filter=shared run db:reset -f && SKIP_CONFIRM=1 pnpm --filter=shared run ch:reset && pnpm --fi |
| test | package.json | dx:skip-infra | pnpm i && pnpm --filter=shared run db:reset:test && pnpm --filter=shared run db:reset && pnpm --filter=shared run ch:reset && pnpm --filter=shared run db:seed:examples && pnpm run dev |
| build | package.json | build | turbo run build |
| build | package.json | build:check | turbo run build:check |
| quality | package.json | typecheck | turbo run typecheck |
| quality | package.json | tc | turbo run typecheck |
| serve-dev | package.json | start | turbo run start |
| serve-dev | package.json | dev | turbo run dev |
| serve-dev | package.json | dev:worker | turbo run dev --filter=worker |
| serve-dev | package.json | dev:web | turbo run dev --filter=web |
| serve-dev | package.json | dev:web-webpack | turbo run dev --filter=web -- --webpack |
| quality | package.json | lint | turbo run lint |
| quality | package.json | format | prettier --write "**/*.{js,jsx,ts,tsx,css}" --experimental-cli |
| quality | package.json | format:check | prettier --check "**/*.{js,jsx,ts,tsx,css}" --experimental-cli |
| utility | package.json | playwright:install | pnpm --filter web exec playwright install chromium |
| test | package.json | test | turbo run test |
| build | package.json | release | dotenv -e ../.env -- release-it |
| build | package.json | release:cloud | bash ./scripts/release-cloud.sh |
| utility | package.json | prepare | husky |


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
| mcp | [web/src/pages/api/public/mcp/index.ts](../../../../sources/langfuse__langfuse/web/src/pages/api/public/mcp/index.ts) | mcp signal |
| mcp | [web/src/features/mcp/README.md](../../../../sources/langfuse__langfuse/web/src/features/mcp/README.md) | mcp signal |
| mcp | [web/src/features/mcp/types.ts](../../../../sources/langfuse__langfuse/web/src/features/mcp/types.ts) | mcp signal |
| mcp | [web/src/features/mcp/server/bootstrap.ts](../../../../sources/langfuse__langfuse/web/src/features/mcp/server/bootstrap.ts) | mcp signal |
| agentRuntime | [worker/AGENTS.md](../../../../sources/langfuse__langfuse/worker/AGENTS.md) | agentRuntime signal |
| agentRuntime | [web/AGENTS.md](../../../../sources/langfuse__langfuse/web/AGENTS.md) | agentRuntime signal |
| agentRuntime | [web/src/hooks/use-environment-filter-options-cache.tsx](../../../../sources/langfuse__langfuse/web/src/hooks/use-environment-filter-options-cache.tsx) | agentRuntime signal |
| agentRuntime | [web/src/hooks/use-mobile.tsx](../../../../sources/langfuse__langfuse/web/src/hooks/use-mobile.tsx) | agentRuntime signal |
| entrypoints | [worker/src/app.ts](../../../../sources/langfuse__langfuse/worker/src/app.ts) | entrypoints signal |
| entrypoints | [worker/src/index.ts](../../../../sources/langfuse__langfuse/worker/src/index.ts) | entrypoints signal |
| entrypoints | [web/.storybook/main.ts](../../../../sources/langfuse__langfuse/web/.storybook/main.ts) | entrypoints signal |
| entrypoints | [packages/shared/src/index.ts](../../../../sources/langfuse__langfuse/packages/shared/src/index.ts) | entrypoints signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 7 | [worker/src/app.ts](../../../../sources/langfuse__langfuse/worker/src/app.ts)<br>[worker/src/index.ts](../../../../sources/langfuse__langfuse/worker/src/index.ts)<br>[web/.storybook/main.ts](../../../../sources/langfuse__langfuse/web/.storybook/main.ts)<br>[packages/shared/src/index.ts](../../../../sources/langfuse__langfuse/packages/shared/src/index.ts)<br>[packages/shared/src/features/monitors/server.ts](../../../../sources/langfuse__langfuse/packages/shared/src/features/monitors/server.ts)<br>[packages/eslint-plugin/src/index.ts](../../../../sources/langfuse__langfuse/packages/eslint-plugin/src/index.ts)<br>[ee/src/index.ts](../../../../sources/langfuse__langfuse/ee/src/index.ts) |
| agentRuntime | 411 | [worker/AGENTS.md](../../../../sources/langfuse__langfuse/worker/AGENTS.md)<br>[web/AGENTS.md](../../../../sources/langfuse__langfuse/web/AGENTS.md)<br>[web/src/hooks/use-environment-filter-options-cache.tsx](../../../../sources/langfuse__langfuse/web/src/hooks/use-environment-filter-options-cache.tsx)<br>[web/src/hooks/use-mobile.tsx](../../../../sources/langfuse__langfuse/web/src/hooks/use-mobile.tsx)<br>[web/src/hooks/useClickWithoutSelection.ts](../../../../sources/langfuse__langfuse/web/src/hooks/useClickWithoutSelection.ts)<br>[web/src/hooks/useCollapsibleSystemPrompt.ts](../../../../sources/langfuse__langfuse/web/src/hooks/useCollapsibleSystemPrompt.ts)<br>[web/src/hooks/useCopyToClipboard.clienttest.ts](../../../../sources/langfuse__langfuse/web/src/hooks/useCopyToClipboard.clienttest.ts)<br>[web/src/hooks/useCopyToClipboard.ts](../../../../sources/langfuse__langfuse/web/src/hooks/useCopyToClipboard.ts) |
| mcp | 107 | [web/src/pages/api/public/mcp/index.ts](../../../../sources/langfuse__langfuse/web/src/pages/api/public/mcp/index.ts)<br>[web/src/features/mcp/README.md](../../../../sources/langfuse__langfuse/web/src/features/mcp/README.md)<br>[web/src/features/mcp/types.ts](../../../../sources/langfuse__langfuse/web/src/features/mcp/types.ts)<br>[web/src/features/mcp/server/bootstrap.ts](../../../../sources/langfuse__langfuse/web/src/features/mcp/server/bootstrap.ts)<br>[web/src/features/mcp/server/mcpServer.ts](../../../../sources/langfuse__langfuse/web/src/features/mcp/server/mcpServer.ts)<br>[web/src/features/mcp/server/registry.ts](../../../../sources/langfuse__langfuse/web/src/features/mcp/server/registry.ts)<br>[web/src/features/mcp/server/security.ts](../../../../sources/langfuse__langfuse/web/src/features/mcp/server/security.ts)<br>[web/src/features/mcp/server/transport.ts](../../../../sources/langfuse__langfuse/web/src/features/mcp/server/transport.ts) |
| retrieval | 295 | [worker/src/index.ts](../../../../sources/langfuse__langfuse/worker/src/index.ts)<br>[worker/src/services/IngestionService/index.ts](../../../../sources/langfuse__langfuse/worker/src/services/IngestionService/index.ts)<br>[worker/src/services/ClickhouseWriter/index.ts](../../../../sources/langfuse__langfuse/worker/src/services/ClickhouseWriter/index.ts)<br>[worker/src/scripts/verifyClickhouseRecords/index.ts](../../../../sources/langfuse__langfuse/worker/src/scripts/verifyClickhouseRecords/index.ts)<br>[worker/src/scripts/refillQueueEvent/index.ts](../../../../sources/langfuse__langfuse/worker/src/scripts/refillQueueEvent/index.ts)<br>[worker/src/features/utils/index.ts](../../../../sources/langfuse__langfuse/worker/src/features/utils/index.ts)<br>[worker/src/features/queue-metrics-runner/index.ts](../../../../sources/langfuse__langfuse/worker/src/features/queue-metrics-runner/index.ts)<br>[worker/src/features/monitor-runner/index.ts](../../../../sources/langfuse__langfuse/worker/src/features/monitor-runner/index.ts) |
| spec | 17 | [web/src/components/design-system/README.md](../../../../sources/langfuse__langfuse/web/src/components/design-system/README.md)<br>[web/src/components/design-system/Spinner/Spinner.stories.tsx](../../../../sources/langfuse__langfuse/web/src/components/design-system/Spinner/Spinner.stories.tsx)<br>[web/src/components/design-system/Spinner/Spinner.tsx](../../../../sources/langfuse__langfuse/web/src/components/design-system/Spinner/Spinner.tsx)<br>[web/src/__e2e__/auth.spec.ts](../../../../sources/langfuse__langfuse/web/src/__e2e__/auth.spec.ts)<br>[web/src/__e2e__/create-project.spec.ts](../../../../sources/langfuse__langfuse/web/src/__e2e__/create-project.spec.ts)<br>[web/.agents/skills/vercel-composition-patterns/rules/architecture-avoid-boolean-props.md](../../../../sources/langfuse__langfuse/web/.agents/skills/vercel-composition-patterns/rules/architecture-avoid-boolean-props.md)<br>[web/.agents/skills/vercel-composition-patterns/rules/architecture-compound-components.md](../../../../sources/langfuse__langfuse/web/.agents/skills/vercel-composition-patterns/rules/architecture-compound-components.md)<br>[.github/workflows/sdk-api-spec.yml](../../../../sources/langfuse__langfuse/.github/workflows/sdk-api-spec.yml) |
| eval | 624 | [.env.test.example](../../../../sources/langfuse__langfuse/.env.test.example)<br>[worker/src/services/IngestionService/tests/calculateTokenCost.unit.test.ts](../../../../sources/langfuse__langfuse/worker/src/services/IngestionService/tests/calculateTokenCost.unit.test.ts)<br>[worker/src/services/IngestionService/tests/IngestionService.integration.test.ts](../../../../sources/langfuse__langfuse/worker/src/services/IngestionService/tests/IngestionService.integration.test.ts)<br>[worker/src/services/IngestionService/tests/IngestionService.unit.test.ts](../../../../sources/langfuse__langfuse/worker/src/services/IngestionService/tests/IngestionService.unit.test.ts)<br>[worker/src/services/IngestionService/tests/utils.unit.test.ts](../../../../sources/langfuse__langfuse/worker/src/services/IngestionService/tests/utils.unit.test.ts)<br>[worker/src/services/ClickhouseWriter/ClickhouseWriter.unit.test.ts](../../../../sources/langfuse__langfuse/worker/src/services/ClickhouseWriter/ClickhouseWriter.unit.test.ts)<br>[worker/src/scripts/send-test-spend-alert-emails.ts](../../../../sources/langfuse__langfuse/worker/src/scripts/send-test-spend-alert-emails.ts)<br>[worker/src/scripts/send-test-threshold-emails.ts](../../../../sources/langfuse__langfuse/worker/src/scripts/send-test-threshold-emails.ts) |
| security | 80 | [SECURITY.md](../../../../sources/langfuse__langfuse/SECURITY.md)<br>[worker/src/__tests__/fetchLLMCompletion-bedrock-auth.test.ts](../../../../sources/langfuse__langfuse/worker/src/__tests__/fetchLLMCompletion-bedrock-auth.test.ts)<br>[web/types/next-auth.d.ts](../../../../sources/langfuse__langfuse/web/types/next-auth.d.ts)<br>[web/src/server/auth.ts](../../../../sources/langfuse__langfuse/web/src/server/auth.ts)<br>[web/src/pages/auth/enterprise-sso-required.tsx](../../../../sources/langfuse__langfuse/web/src/pages/auth/enterprise-sso-required.tsx)<br>[web/src/pages/auth/error.tsx](../../../../sources/langfuse__langfuse/web/src/pages/auth/error.tsx)<br>[web/src/pages/auth/hf-spaces.tsx](../../../../sources/langfuse__langfuse/web/src/pages/auth/hf-spaces.tsx)<br>[web/src/pages/auth/reset-password.tsx](../../../../sources/langfuse__langfuse/web/src/pages/auth/reset-password.tsx) |
| ci | 25 | [.github/workflows/_deploy_ecs_service.yml](../../../../sources/langfuse__langfuse/.github/workflows/_deploy_ecs_service.yml)<br>[.github/workflows/ci.yml.template](../../../../sources/langfuse__langfuse/.github/workflows/ci.yml.template)<br>[.github/workflows/cla-assistant.yml](../../../../sources/langfuse__langfuse/.github/workflows/cla-assistant.yml)<br>[.github/workflows/claude-code-security-review.yml](../../../../sources/langfuse__langfuse/.github/workflows/claude-code-security-review.yml)<br>[.github/workflows/claude-review-maintainer-prs.yml](../../../../sources/langfuse__langfuse/.github/workflows/claude-review-maintainer-prs.yml)<br>[.github/workflows/codeql.yml](../../../../sources/langfuse__langfuse/.github/workflows/codeql.yml)<br>[.github/workflows/codespell.yml](../../../../sources/langfuse__langfuse/.github/workflows/codespell.yml)<br>[.github/workflows/dependabot-rebase-stale.yml](../../../../sources/langfuse__langfuse/.github/workflows/dependabot-rebase-stale.yml) |
| container | 23 | [docker-compose.build.yml](../../../../sources/langfuse__langfuse/docker-compose.build.yml)<br>[docker-compose.dev-azure.yml](../../../../sources/langfuse__langfuse/docker-compose.dev-azure.yml)<br>[docker-compose.dev-redis-cluster.yml](../../../../sources/langfuse__langfuse/docker-compose.dev-redis-cluster.yml)<br>[docker-compose.dev.yml](../../../../sources/langfuse__langfuse/docker-compose.dev.yml)<br>[docker-compose.yml](../../../../sources/langfuse__langfuse/docker-compose.yml)<br>[worker/Dockerfile](../../../../sources/langfuse__langfuse/worker/Dockerfile)<br>[web/Dockerfile](../../../../sources/langfuse__langfuse/web/Dockerfile)<br>[web/src/features/score-analytics/components/charts/Heatmap.tsx](../../../../sources/langfuse__langfuse/web/src/features/score-analytics/components/charts/Heatmap.tsx) |
| instruction | 10 | [worker/AGENTS.md](../../../../sources/langfuse__langfuse/worker/AGENTS.md)<br>[web/AGENTS.md](../../../../sources/langfuse__langfuse/web/AGENTS.md)<br>[web/CLAUDE.md](../../../../sources/langfuse__langfuse/web/CLAUDE.md)<br>[web/src/ee/features/in-app-agent/AGENTS.md](../../../../sources/langfuse__langfuse/web/src/ee/features/in-app-agent/AGENTS.md)<br>[web/.agents/skills/vercel-react-best-practices/AGENTS.md](../../../../sources/langfuse__langfuse/web/.agents/skills/vercel-react-best-practices/AGENTS.md)<br>[web/.agents/skills/vercel-composition-patterns/AGENTS.md](../../../../sources/langfuse__langfuse/web/.agents/skills/vercel-composition-patterns/AGENTS.md)<br>[packages/shared/AGENTS.md](../../../../sources/langfuse__langfuse/packages/shared/AGENTS.md)<br>[packages/shared/scripts/seeder/AGENTS.md](../../../../sources/langfuse__langfuse/packages/shared/scripts/seeder/AGENTS.md) |
| docs | 42 | [README.cn.md](../../../../sources/langfuse__langfuse/README.cn.md)<br>[README.ja.md](../../../../sources/langfuse__langfuse/README.ja.md)<br>[README.kr.md](../../../../sources/langfuse__langfuse/README.kr.md)<br>[README.md](../../../../sources/langfuse__langfuse/README.md)<br>[worker/src/scripts/verifyClickhouseRecords/README.md](../../../../sources/langfuse__langfuse/worker/src/scripts/verifyClickhouseRecords/README.md)<br>[worker/src/scripts/replayIngestionEventsV2/README.md](../../../../sources/langfuse__langfuse/worker/src/scripts/replayIngestionEventsV2/README.md)<br>[worker/src/scripts/replayIngestionEvents/README.md](../../../../sources/langfuse__langfuse/worker/src/scripts/replayIngestionEvents/README.md)<br>[worker/src/scripts/refillQueueEvent/README.md](../../../../sources/langfuse__langfuse/worker/src/scripts/refillQueueEvent/README.md) |
| config | 16 | [package.json](../../../../sources/langfuse__langfuse/package.json)<br>[pnpm-workspace.yaml](../../../../sources/langfuse__langfuse/pnpm-workspace.yaml)<br>[turbo.json](../../../../sources/langfuse__langfuse/turbo.json)<br>[worker/package.json](../../../../sources/langfuse__langfuse/worker/package.json)<br>[worker/tsconfig.json](../../../../sources/langfuse__langfuse/worker/tsconfig.json)<br>[web/package.json](../../../../sources/langfuse__langfuse/web/package.json)<br>[web/tsconfig.json](../../../../sources/langfuse__langfuse/web/tsconfig.json)<br>[web/.storybook/tsconfig.json](../../../../sources/langfuse__langfuse/web/.storybook/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 624 | [.env.test.example](../../../../sources/langfuse__langfuse/.env.test.example)<br>[worker/src/services/IngestionService/tests/calculateTokenCost.unit.test.ts](../../../../sources/langfuse__langfuse/worker/src/services/IngestionService/tests/calculateTokenCost.unit.test.ts)<br>[worker/src/services/IngestionService/tests/IngestionService.integration.test.ts](../../../../sources/langfuse__langfuse/worker/src/services/IngestionService/tests/IngestionService.integration.test.ts)<br>[worker/src/services/IngestionService/tests/IngestionService.unit.test.ts](../../../../sources/langfuse__langfuse/worker/src/services/IngestionService/tests/IngestionService.unit.test.ts)<br>[worker/src/services/IngestionService/tests/utils.unit.test.ts](../../../../sources/langfuse__langfuse/worker/src/services/IngestionService/tests/utils.unit.test.ts)<br>[worker/src/services/ClickhouseWriter/ClickhouseWriter.unit.test.ts](../../../../sources/langfuse__langfuse/worker/src/services/ClickhouseWriter/ClickhouseWriter.unit.test.ts) |
| CI workflow | 25 | [.github/workflows/_deploy_ecs_service.yml](../../../../sources/langfuse__langfuse/.github/workflows/_deploy_ecs_service.yml)<br>[.github/workflows/ci.yml.template](../../../../sources/langfuse__langfuse/.github/workflows/ci.yml.template)<br>[.github/workflows/cla-assistant.yml](../../../../sources/langfuse__langfuse/.github/workflows/cla-assistant.yml)<br>[.github/workflows/claude-code-security-review.yml](../../../../sources/langfuse__langfuse/.github/workflows/claude-code-security-review.yml)<br>[.github/workflows/claude-review-maintainer-prs.yml](../../../../sources/langfuse__langfuse/.github/workflows/claude-review-maintainer-prs.yml)<br>[.github/workflows/codeql.yml](../../../../sources/langfuse__langfuse/.github/workflows/codeql.yml) |
| 컨테이너/배포 | 23 | [docker-compose.build.yml](../../../../sources/langfuse__langfuse/docker-compose.build.yml)<br>[docker-compose.dev-azure.yml](../../../../sources/langfuse__langfuse/docker-compose.dev-azure.yml)<br>[docker-compose.dev-redis-cluster.yml](../../../../sources/langfuse__langfuse/docker-compose.dev-redis-cluster.yml)<br>[docker-compose.dev.yml](../../../../sources/langfuse__langfuse/docker-compose.dev.yml)<br>[docker-compose.yml](../../../../sources/langfuse__langfuse/docker-compose.yml)<br>[worker/Dockerfile](../../../../sources/langfuse__langfuse/worker/Dockerfile) |
| 보안/정책 | 80 | [SECURITY.md](../../../../sources/langfuse__langfuse/SECURITY.md)<br>[worker/src/__tests__/fetchLLMCompletion-bedrock-auth.test.ts](../../../../sources/langfuse__langfuse/worker/src/__tests__/fetchLLMCompletion-bedrock-auth.test.ts)<br>[web/types/next-auth.d.ts](../../../../sources/langfuse__langfuse/web/types/next-auth.d.ts)<br>[web/src/server/auth.ts](../../../../sources/langfuse__langfuse/web/src/server/auth.ts)<br>[web/src/pages/auth/enterprise-sso-required.tsx](../../../../sources/langfuse__langfuse/web/src/pages/auth/enterprise-sso-required.tsx)<br>[web/src/pages/auth/error.tsx](../../../../sources/langfuse__langfuse/web/src/pages/auth/error.tsx) |
| 에이전트 지시문 | 10 | [worker/AGENTS.md](../../../../sources/langfuse__langfuse/worker/AGENTS.md)<br>[web/AGENTS.md](../../../../sources/langfuse__langfuse/web/AGENTS.md)<br>[web/CLAUDE.md](../../../../sources/langfuse__langfuse/web/CLAUDE.md)<br>[web/src/ee/features/in-app-agent/AGENTS.md](../../../../sources/langfuse__langfuse/web/src/ee/features/in-app-agent/AGENTS.md)<br>[web/.agents/skills/vercel-react-best-practices/AGENTS.md](../../../../sources/langfuse__langfuse/web/.agents/skills/vercel-react-best-practices/AGENTS.md)<br>[web/.agents/skills/vercel-composition-patterns/AGENTS.md](../../../../sources/langfuse__langfuse/web/.agents/skills/vercel-composition-patterns/AGENTS.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `web/src/pages/api/public/mcp/index.ts`, `web/src/features/mcp/README.md`, `web/src/features/mcp/types.ts`.
2. entrypoint를 따라 실행 흐름 확인: `worker/src/app.ts`, `worker/src/index.ts`, `web/.storybook/main.ts`.
3. agent/tool runtime 매핑: `worker/AGENTS.md`, `web/AGENTS.md`, `web/src/hooks/use-environment-filter-options-cache.tsx`.
4. retrieval/memory/indexing 확인: `worker/src/index.ts`, `worker/src/services/IngestionService/index.ts`, `worker/src/services/ClickhouseWriter/index.ts`.
5. test/eval 파일로 동작 검증: `.env.test.example`, `worker/src/services/IngestionService/tests/calculateTokenCost.unit.test.ts`, `worker/src/services/IngestionService/tests/IngestionService.integration.test.ts`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Local clone structure analysis 3660 files, 1176 directories.. 핵심 구조 신호는 package.json, docker-compose.yml, README.md, LICENSE, tests, ci이며, 심층 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

mixed 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음입니다.
