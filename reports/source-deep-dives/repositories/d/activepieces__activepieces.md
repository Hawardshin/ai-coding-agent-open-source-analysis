# activepieces/activepieces 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

AI Agents & MCPs & AI Workflow Automation • (~400 MCP servers for AI agents) • AI Automation / AI Agent with MCPs • AI Workflows & AI Agents • MCPs for AI Agents

## 요약

- 조사 단위: `sources/activepieces__activepieces` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 15,000 files, 3,972 directories, depth score 122, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=packages/web/src/features/agents/agent-tools/stores/mcp-tools.ts, packages/web/src/features/agents/agent-tools/mcp-tool-dialog/add-mcp-tool-form.tsx, packages/web/src/features/agents/agent-tools/mcp-tool-dialog/api.ts이고, 의존성 단서는 openai, anthropic, mcp, modelcontextprotocol, next, react, 검증/운영 단서는 test/eval 경로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | activepieces/activepieces |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 22806 |
| Forks | 3811 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/activepieces__activepieces](../../../../sources/activepieces__activepieces) |
| 기존 보고서 | [reports/global-trending/repositories/activepieces__activepieces.md](../../../global-trending/repositories/activepieces__activepieces.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 15000 / 3972 |
| 관측 최대 깊이 | 12 |
| 상위 디렉터리 | .agents, .claude, .cursor, .devcontainer, .github, .husky, .verdaccio, assets, benchmark, deploy, docs, packages, scripts, smoke-test, tools |
| 상위 확장자 | .ts: 7368, .json: 6107, .tsx: 715, .md: 435, .woff2: 226, (none): 38, .svg: 30, .js: 22, .png: 10, .sh: 10, .html: 9, .css: 4 |
| 소스 패턴 | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| packages/web | packages workspace | 150 |
| packages/pieces | packages workspace | 90 |
| packages/server | packages workspace | 38 |
| packages/shared | packages workspace | 14 |
| packages/tests-e2e | packages workspace | 8 |
| .devcontainer | deployment surface | 1 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| benchmark | validation surface | 1 |
| deploy | deployment surface | 1 |
| docs | documentation surface | 1 |
| packages | source boundary | 1 |
| scripts | top-level component | 1 |
| smoke-test | validation surface | 1 |
| tools | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | package.json | prepare | husky install \|\| true |
| build | package.json | prebuild | node tools/scripts/install-bun.js |
| serve-dev | package.json | serve:frontend | turbo run serve --filter=web |
| serve-dev | package.json | serve:backend | turbo run serve --filter=api |
| serve-dev | package.json | serve:engine | turbo run serve --filter=@activepieces/engine |
| serve-dev | package.json | serve:worker | turbo run serve --filter=worker |
| quality | package.json | push | turbo run lint && git push |
| serve-dev | package.json | dev | node tools/scripts/install-bun.js && turbo run serve --filter=web --filter=api --filter=@activepieces/engine --filter=worker --ui stream |
| serve-dev | package.json | dev:backend | turbo run serve --filter=api --filter=@activepieces/engine --ui stream |
| serve-dev | package.json | dev:frontend | turbo run serve --filter=web --filter=api --filter=@activepieces/engine --ui stream |
| serve-dev | package.json | start | node tools/setup-dev.js && npm run dev |
| test | package.json | test:e2e | npx playwright test --config=packages/tests-e2e/playwright.config.ts |
| test | package.json | test:sandbox-e2e | bash scripts/run-sandbox-e2e.sh |
| utility | package.json | db-migration | npx turbo run db-migration --filter=api -- |
| quality | package.json | check-migrations | npx turbo run check-migrations --filter=api |
| serve-dev | package.json | rollback | npm run rollback --workspace=packages/server/api -- |
| serve-dev | package.json | lint-core | turbo run lint --filter=@activepieces/shared --filter=@activepieces/engine --filter=api --filter=web --filter=@activepieces/server-utils --filter=worker --filter=ee-embed-sdk |
| quality | package.json | lint-pieces | turbo run lint --filter='@activepieces/piece-*' |
| quality | package.json | lint-affected | turbo run lint --affected |
| serve-dev | package.json | lint-dev | turbo run lint --filter='!@activepieces/piece-*' --force -- --fix |
| test | package.json | test-unit | turbo run test --filter=@activepieces/engine --filter=@activepieces/shared --filter=web |
| test | package.json | test-api | turbo run check-migrations test-ce test-ee test-cloud --filter=api --concurrency=1 |
| test | package.json | chat-evals | set -a && . ./.env.dev && set +a && tsx --tsconfig packages/server/worker/test/lib/chat-eval/cli/tsconfig.json packages/server/worker/test/lib/chat-eval/cli/index.ts |
| test | package.json | chat-evals:ci | set -a && . ./.env.dev && set +a && vitest run --dir packages/server/worker/test/lib/chat-eval |
| quality | package.json | cli | npx ts-node -r tsconfig-paths/register --project packages/cli/tsconfig.json packages/cli/src/index.ts |
| quality | package.json | create-piece | npx ts-node -r tsconfig-paths/register --project packages/cli/tsconfig.json packages/cli/src/index.ts pieces create |
| quality | package.json | create-action | npx ts-node -r tsconfig-paths/register --project packages/cli/tsconfig.json packages/cli/src/index.ts actions create |
| quality | package.json | create-trigger | npx ts-node -r tsconfig-paths/register --project packages/cli/tsconfig.json packages/cli/src/index.ts triggers create |
| quality | package.json | sync-pieces | npx ts-node -r tsconfig-paths/register --project packages/cli/tsconfig.json packages/cli/src/index.ts pieces sync |
| quality | package.json | pieces | npx ts-node -r tsconfig-paths/register --project packages/cli/tsconfig.json packages/cli/src/index.ts pieces |
| build | package.json | build-piece | npx ts-node -r tsconfig-paths/register --project packages/cli/tsconfig.json packages/cli/src/index.ts pieces build |
| quality | package.json | publish-piece-to-api | npx ts-node -r tsconfig-paths/register --project packages/cli/tsconfig.json packages/cli/src/index.ts pieces publish piece |
| quality | package.json | publish-piece | npx ts-node -r tsconfig-paths/register --project tools/tsconfig.tools.json tools/scripts/pieces/publish-piece.ts |
| quality | package.json | workers | npx ts-node -r tsconfig-paths/register --project packages/cli/tsconfig.json packages/cli/src/index.ts workers |
| utility | package.json | pull-i18n | crowdin pull --config crowdin.yml |
| utility | package.json | push-i18n | crowdin upload sources |
| utility | package.json | i18n:extract | i18next --config packages/web/i18next-parser.config.js |
| quality | package.json | bump-translated-pieces | npx ts-node --project tools/tsconfig.tools.json tools/scripts/pieces/bump-translated-pieces.ts |
| quality | package.json | bump-all-pieces-patch-version | npx ts-node --project tools/tsconfig.tools.json tools/scripts/pieces/bump-all-pieces-patch-version.ts |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai, anthropic |
| agentProtocols | mcp, modelcontextprotocol |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | next, react |
| developerSurface | commander |
| observability | opentelemetry |
| browserAutomation | playwright |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| mcp | [packages/web/src/features/agents/agent-tools/stores/mcp-tools.ts](../../../../sources/activepieces__activepieces/packages/web/src/features/agents/agent-tools/stores/mcp-tools.ts) | mcp signal |
| mcp | [packages/web/src/features/agents/agent-tools/mcp-tool-dialog/add-mcp-tool-form.tsx](../../../../sources/activepieces__activepieces/packages/web/src/features/agents/agent-tools/mcp-tool-dialog/add-mcp-tool-form.tsx) | mcp signal |
| mcp | [packages/web/src/features/agents/agent-tools/mcp-tool-dialog/api.ts](../../../../sources/activepieces__activepieces/packages/web/src/features/agents/agent-tools/mcp-tool-dialog/api.ts) | mcp signal |
| mcp | [packages/web/src/features/agents/agent-tools/mcp-tool-dialog/index.tsx](../../../../sources/activepieces__activepieces/packages/web/src/features/agents/agent-tools/mcp-tool-dialog/index.tsx) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/activepieces__activepieces/AGENTS.md) | agentRuntime signal |
| agentRuntime | [skills-lock.json](../../../../sources/activepieces__activepieces/skills-lock.json) | agentRuntime signal |
| agentRuntime | [tools/deploy.sh](../../../../sources/activepieces__activepieces/tools/deploy.sh) | agentRuntime signal |
| agentRuntime | [tools/reset-dev.sh](../../../../sources/activepieces__activepieces/tools/reset-dev.sh) | agentRuntime signal |
| entrypoints | [packages/web/src/main.tsx](../../../../sources/activepieces__activepieces/packages/web/src/main.tsx) | entrypoints signal |
| entrypoints | [packages/web/src/components/icons/server.tsx](../../../../sources/activepieces__activepieces/packages/web/src/components/icons/server.tsx) | entrypoints signal |
| entrypoints | [packages/shared/src/index.ts](../../../../sources/activepieces__activepieces/packages/shared/src/index.ts) | entrypoints signal |
| entrypoints | [packages/server/worker/src/index.ts](../../../../sources/activepieces__activepieces/packages/server/worker/src/index.ts) | entrypoints signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 458 | [packages/web/src/main.tsx](../../../../sources/activepieces__activepieces/packages/web/src/main.tsx)<br>[packages/web/src/components/icons/server.tsx](../../../../sources/activepieces__activepieces/packages/web/src/components/icons/server.tsx)<br>[packages/shared/src/index.ts](../../../../sources/activepieces__activepieces/packages/shared/src/index.ts)<br>[packages/server/worker/src/index.ts](../../../../sources/activepieces__activepieces/packages/server/worker/src/index.ts)<br>[packages/server/worker/src/lib/main.ts](../../../../sources/activepieces__activepieces/packages/server/worker/src/lib/main.ts)<br>[packages/server/utils/src/index.ts](../../../../sources/activepieces__activepieces/packages/server/utils/src/index.ts)<br>[packages/server/engine/src/main.ts](../../../../sources/activepieces__activepieces/packages/server/engine/src/main.ts)<br>[packages/server/api/src/main.ts](../../../../sources/activepieces__activepieces/packages/server/api/src/main.ts) |
| agentRuntime | 240 | [AGENTS.md](../../../../sources/activepieces__activepieces/AGENTS.md)<br>[skills-lock.json](../../../../sources/activepieces__activepieces/skills-lock.json)<br>[tools/deploy.sh](../../../../sources/activepieces__activepieces/tools/deploy.sh)<br>[tools/reset-dev.sh](../../../../sources/activepieces__activepieces/tools/reset-dev.sh)<br>[tools/reset.sh](../../../../sources/activepieces__activepieces/tools/reset.sh)<br>[tools/setup-dev.js](../../../../sources/activepieces__activepieces/tools/setup-dev.js)<br>[tools/tsconfig.tools.json](../../../../sources/activepieces__activepieces/tools/tsconfig.tools.json)<br>[tools/update.sh](../../../../sources/activepieces__activepieces/tools/update.sh) |
| mcp | 130 | [packages/web/src/features/agents/agent-tools/stores/mcp-tools.ts](../../../../sources/activepieces__activepieces/packages/web/src/features/agents/agent-tools/stores/mcp-tools.ts)<br>[packages/web/src/features/agents/agent-tools/mcp-tool-dialog/add-mcp-tool-form.tsx](../../../../sources/activepieces__activepieces/packages/web/src/features/agents/agent-tools/mcp-tool-dialog/add-mcp-tool-form.tsx)<br>[packages/web/src/features/agents/agent-tools/mcp-tool-dialog/api.ts](../../../../sources/activepieces__activepieces/packages/web/src/features/agents/agent-tools/mcp-tool-dialog/api.ts)<br>[packages/web/src/features/agents/agent-tools/mcp-tool-dialog/index.tsx](../../../../sources/activepieces__activepieces/packages/web/src/features/agents/agent-tools/mcp-tool-dialog/index.tsx)<br>[packages/web/src/features/agents/agent-tools/flow-tool-dialog/create-mcp-flow-button.tsx](../../../../sources/activepieces__activepieces/packages/web/src/features/agents/agent-tools/flow-tool-dialog/create-mcp-flow-button.tsx)<br>[packages/web/src/features/agents/agent-tools/components/mcp-tool.tsx](../../../../sources/activepieces__activepieces/packages/web/src/features/agents/agent-tools/components/mcp-tool.tsx)<br>[packages/web/src/assets/img/custom/mcp-with-background.svg](../../../../sources/activepieces__activepieces/packages/web/src/assets/img/custom/mcp-with-background.svg)<br>[packages/web/src/assets/img/custom/mcp.tsx](../../../../sources/activepieces__activepieces/packages/web/src/assets/img/custom/mcp.tsx) |
| retrieval | 933 | [smoke-test/verify-memory.sh](../../../../sources/activepieces__activepieces/smoke-test/verify-memory.sh)<br>[packages/web/index.html](../../../../sources/activepieces__activepieces/packages/web/index.html)<br>[packages/web/test/features/chat/lib/chunk-reducer.test.ts](../../../../sources/activepieces__activepieces/packages/web/test/features/chat/lib/chunk-reducer.test.ts)<br>[packages/web/src/features/variables/index.ts](../../../../sources/activepieces__activepieces/packages/web/src/features/variables/index.ts)<br>[packages/web/src/features/templates/index.ts](../../../../sources/activepieces__activepieces/packages/web/src/features/templates/index.ts)<br>[packages/web/src/features/tables/index.ts](../../../../sources/activepieces__activepieces/packages/web/src/features/tables/index.ts)<br>[packages/web/src/features/secret-managers/index.ts](../../../../sources/activepieces__activepieces/packages/web/src/features/secret-managers/index.ts)<br>[packages/web/src/features/projects/index.ts](../../../../sources/activepieces__activepieces/packages/web/src/features/projects/index.ts) |
| spec | 13 | [packages/web/tsconfig.spec.json](../../../../sources/activepieces__activepieces/packages/web/tsconfig.spec.json)<br>[packages/tests-e2e/scenarios/ee/dummy.spec.ts](../../../../sources/activepieces__activepieces/packages/tests-e2e/scenarios/ee/dummy.spec.ts)<br>[packages/tests-e2e/scenarios/ee/pieces/piece-isolation.spec.ts](../../../../sources/activepieces__activepieces/packages/tests-e2e/scenarios/ee/pieces/piece-isolation.spec.ts)<br>[packages/tests-e2e/scenarios/ce/pieces/piece-isolation.spec.ts](../../../../sources/activepieces__activepieces/packages/tests-e2e/scenarios/ce/pieces/piece-isolation.spec.ts)<br>[packages/tests-e2e/scenarios/ce/flows/webhook-should-return-response.spec.ts](../../../../sources/activepieces__activepieces/packages/tests-e2e/scenarios/ce/flows/webhook-should-return-response.spec.ts)<br>[packages/tests-e2e/scenarios/betterstack/webhook-should-return-response.flat.spec.js](../../../../sources/activepieces__activepieces/packages/tests-e2e/scenarios/betterstack/webhook-should-return-response.flat.spec.js)<br>[packages/shared/tsconfig.spec.json](../../../../sources/activepieces__activepieces/packages/shared/tsconfig.spec.json)<br>[packages/server/engine/tsconfig.spec.json](../../../../sources/activepieces__activepieces/packages/server/engine/tsconfig.spec.json) |
| eval | 421 | [docker-compose.test.yml](../../../../sources/activepieces__activepieces/docker-compose.test.yml)<br>[smoke-test/verify-delay.sh](../../../../sources/activepieces__activepieces/smoke-test/verify-delay.sh)<br>[smoke-test/verify-isolation.sh](../../../../sources/activepieces__activepieces/smoke-test/verify-isolation.sh)<br>[smoke-test/verify-memory.sh](../../../../sources/activepieces__activepieces/smoke-test/verify-memory.sh)<br>[smoke-test/verify.sh](../../../../sources/activepieces__activepieces/smoke-test/verify.sh)<br>[packages/web/tsconfig.spec.json](../../../../sources/activepieces__activepieces/packages/web/tsconfig.spec.json)<br>[packages/web/test/lib/path-utils.test.ts](../../../../sources/activepieces__activepieces/packages/web/test/lib/path-utils.test.ts)<br>[packages/web/test/features/chat/lib/chunk-reducer.test.ts](../../../../sources/activepieces__activepieces/packages/web/test/features/chat/lib/chunk-reducer.test.ts) |
| security | 457 | [SECURITY.md](../../../../sources/activepieces__activepieces/SECURITY.md)<br>[scripts/run-sandbox-e2e.sh](../../../../sources/activepieces__activepieces/scripts/run-sandbox-e2e.sh)<br>[packages/web/src/features/secret-managers/index.ts](../../../../sources/activepieces__activepieces/packages/web/src/features/secret-managers/index.ts)<br>[packages/web/src/features/secret-managers/hooks/secret-managers-hooks.ts](../../../../sources/activepieces__activepieces/packages/web/src/features/secret-managers/hooks/secret-managers-hooks.ts)<br>[packages/web/src/features/secret-managers/api/secret-managers-api.ts](../../../../sources/activepieces__activepieces/packages/web/src/features/secret-managers/api/secret-managers-api.ts)<br>[packages/web/src/features/platform-admin/hooks/audit-log-hooks.ts](../../../../sources/activepieces__activepieces/packages/web/src/features/platform-admin/hooks/audit-log-hooks.ts)<br>[packages/web/src/features/platform-admin/api/audit-events-api.ts](../../../../sources/activepieces__activepieces/packages/web/src/features/platform-admin/api/audit-events-api.ts)<br>[packages/web/src/features/connections/hooks/oauth-apps-hooks.ts](../../../../sources/activepieces__activepieces/packages/web/src/features/connections/hooks/oauth-apps-hooks.ts) |
| ci | 0 | 명확하지 않음 |
| container | 5 | [docker-compose.dev.yml](../../../../sources/activepieces__activepieces/docker-compose.dev.yml)<br>[docker-compose.test.yml](../../../../sources/activepieces__activepieces/docker-compose.test.yml)<br>[docker-compose.yml](../../../../sources/activepieces__activepieces/docker-compose.yml)<br>[Dockerfile](../../../../sources/activepieces__activepieces/Dockerfile)<br>[packages/server/worker/test/e2e/Dockerfile](../../../../sources/activepieces__activepieces/packages/server/worker/test/e2e/Dockerfile) |
| instruction | 6 | [AGENTS.md](../../../../sources/activepieces__activepieces/AGENTS.md)<br>[packages/web/AGENTS.md](../../../../sources/activepieces__activepieces/packages/web/AGENTS.md)<br>[packages/shared/CLAUDE.md](../../../../sources/activepieces__activepieces/packages/shared/CLAUDE.md)<br>[packages/server/AGENTS.md](../../../../sources/activepieces__activepieces/packages/server/AGENTS.md)<br>[packages/server/engine/CLAUDE.md](../../../../sources/activepieces__activepieces/packages/server/engine/CLAUDE.md)<br>[packages/pieces/CLAUDE.md](../../../../sources/activepieces__activepieces/packages/pieces/CLAUDE.md) |
| docs | 414 | [README.md](../../../../sources/activepieces__activepieces/README.md)<br>[packages/tests-e2e/README.md](../../../../sources/activepieces__activepieces/packages/tests-e2e/README.md)<br>[packages/shared/README.md](../../../../sources/activepieces__activepieces/packages/shared/README.md)<br>[packages/server/worker/test/lib/chat-eval/README.md](../../../../sources/activepieces__activepieces/packages/server/worker/test/lib/chat-eval/README.md)<br>[packages/server/worker/test/lib/chat-eval/fixtures/README.md](../../../../sources/activepieces__activepieces/packages/server/worker/test/lib/chat-eval/fixtures/README.md)<br>[packages/server/worker/test/e2e/README.md](../../../../sources/activepieces__activepieces/packages/server/worker/test/e2e/README.md)<br>[packages/server/engine/README.md](../../../../sources/activepieces__activepieces/packages/server/engine/README.md)<br>[packages/server/api/README.md](../../../../sources/activepieces__activepieces/packages/server/api/README.md) |
| config | 915 | [package.json](../../../../sources/activepieces__activepieces/package.json)<br>[turbo.json](../../../../sources/activepieces__activepieces/turbo.json)<br>[packages/web/package.json](../../../../sources/activepieces__activepieces/packages/web/package.json)<br>[packages/web/tsconfig.json](../../../../sources/activepieces__activepieces/packages/web/tsconfig.json)<br>[packages/tests-e2e/package.json](../../../../sources/activepieces__activepieces/packages/tests-e2e/package.json)<br>[packages/tests-e2e/tsconfig.json](../../../../sources/activepieces__activepieces/packages/tests-e2e/tsconfig.json)<br>[packages/shared/package.json](../../../../sources/activepieces__activepieces/packages/shared/package.json)<br>[packages/shared/tsconfig.json](../../../../sources/activepieces__activepieces/packages/shared/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 421 | [docker-compose.test.yml](../../../../sources/activepieces__activepieces/docker-compose.test.yml)<br>[smoke-test/verify-delay.sh](../../../../sources/activepieces__activepieces/smoke-test/verify-delay.sh)<br>[smoke-test/verify-isolation.sh](../../../../sources/activepieces__activepieces/smoke-test/verify-isolation.sh)<br>[smoke-test/verify-memory.sh](../../../../sources/activepieces__activepieces/smoke-test/verify-memory.sh)<br>[smoke-test/verify.sh](../../../../sources/activepieces__activepieces/smoke-test/verify.sh)<br>[packages/web/tsconfig.spec.json](../../../../sources/activepieces__activepieces/packages/web/tsconfig.spec.json) |
| CI workflow | 0 | 명확하지 않음 |
| 컨테이너/배포 | 5 | [docker-compose.dev.yml](../../../../sources/activepieces__activepieces/docker-compose.dev.yml)<br>[docker-compose.test.yml](../../../../sources/activepieces__activepieces/docker-compose.test.yml)<br>[docker-compose.yml](../../../../sources/activepieces__activepieces/docker-compose.yml)<br>[Dockerfile](../../../../sources/activepieces__activepieces/Dockerfile)<br>[packages/server/worker/test/e2e/Dockerfile](../../../../sources/activepieces__activepieces/packages/server/worker/test/e2e/Dockerfile) |
| 보안/정책 | 457 | [SECURITY.md](../../../../sources/activepieces__activepieces/SECURITY.md)<br>[scripts/run-sandbox-e2e.sh](../../../../sources/activepieces__activepieces/scripts/run-sandbox-e2e.sh)<br>[packages/web/src/features/secret-managers/index.ts](../../../../sources/activepieces__activepieces/packages/web/src/features/secret-managers/index.ts)<br>[packages/web/src/features/secret-managers/hooks/secret-managers-hooks.ts](../../../../sources/activepieces__activepieces/packages/web/src/features/secret-managers/hooks/secret-managers-hooks.ts)<br>[packages/web/src/features/secret-managers/api/secret-managers-api.ts](../../../../sources/activepieces__activepieces/packages/web/src/features/secret-managers/api/secret-managers-api.ts)<br>[packages/web/src/features/platform-admin/hooks/audit-log-hooks.ts](../../../../sources/activepieces__activepieces/packages/web/src/features/platform-admin/hooks/audit-log-hooks.ts) |
| 에이전트 지시문 | 6 | [AGENTS.md](../../../../sources/activepieces__activepieces/AGENTS.md)<br>[packages/web/AGENTS.md](../../../../sources/activepieces__activepieces/packages/web/AGENTS.md)<br>[packages/shared/CLAUDE.md](../../../../sources/activepieces__activepieces/packages/shared/CLAUDE.md)<br>[packages/server/AGENTS.md](../../../../sources/activepieces__activepieces/packages/server/AGENTS.md)<br>[packages/server/engine/CLAUDE.md](../../../../sources/activepieces__activepieces/packages/server/engine/CLAUDE.md)<br>[packages/pieces/CLAUDE.md](../../../../sources/activepieces__activepieces/packages/pieces/CLAUDE.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 큰 레포라 15000개 파일에서 스캔이 잘림 |
| operation | CI workflow 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `packages/web/src/features/agents/agent-tools/stores/mcp-tools.ts`, `packages/web/src/features/agents/agent-tools/mcp-tool-dialog/add-mcp-tool-form.tsx`, `packages/web/src/features/agents/agent-tools/mcp-tool-dialog/api.ts`.
2. entrypoint를 따라 실행 흐름 확인: `packages/web/src/main.tsx`, `packages/web/src/components/icons/server.tsx`, `packages/shared/src/index.ts`.
3. agent/tool runtime 매핑: `AGENTS.md`, `skills-lock.json`, `tools/deploy.sh`.
4. retrieval/memory/indexing 확인: `smoke-test/verify-memory.sh`, `packages/web/index.html`, `packages/web/test/features/chat/lib/chunk-reducer.test.ts`.
5. test/eval 파일로 동작 검증: `docker-compose.test.yml`, `smoke-test/verify-delay.sh`, `smoke-test/verify-isolation.sh`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 AI Agents & MCPs & AI Workflow Automation • ~400 MCP servers for AI agents • AI Automation / AI Agent with MCPs • AI Wor. 핵심 구조 신호는 TypeScript, package.json, Dockerfile, docker-compose.yml, README.md, AGENTS.md이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
