# mastra-ai/mastra 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

From the team behind Gatsby, Mastra is a framework for building AI-powered applications and agents with a modern TypeScript stack.

## 요약

- 조사 단위: `sources/mastra-ai__mastra` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 10,504 files, 2,190 directories, depth score 126, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=templates/template-meeting-notes/src/mastra/mcp.ts, templates/template-docs-chatbot/src/mcp-server/server.ts, templates/template-docs-chatbot/src/mcp-server/tools/docs-tool.ts이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | mastra-ai/mastra |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 25182 |
| Forks | 2247 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/mastra-ai__mastra](../../../../sources/mastra-ai__mastra) |
| 기존 보고서 | [reports/global-trending/repositories/mastra-ai__mastra.md](../../../global-trending/repositories/mastra-ai__mastra.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 10504 / 2190 |
| 관측 최대 깊이 | 11 |
| 상위 디렉터리 | .agents, .changeset, .claude, .cursor, .dev, .github, .husky, .mastracode, .opencode, .superset, agent-sdks, auth, browser, channels, client-sdks, deployers, docs, e2e-tests, ee, embedders |
| 상위 확장자 | .ts: 5813, .tsx: 1439, .json: 959, .mdx: 761, .md: 628, .js: 329, (none): 104, .yaml: 82, .yml: 77, .png: 55, .css: 41, .mp3: 38 |
| 소스 패턴 | monorepo/workspace, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
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


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
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


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 3200 | [vitest.config.observability.ts](../../../../sources/mastra-ai__mastra/vitest.config.observability.ts)<br>[workspaces/vercel/src/sandbox/index.integration.test.ts](../../../../sources/mastra-ai__mastra/workspaces/vercel/src/sandbox/index.integration.test.ts)<br>[workspaces/vercel/src/sandbox/index.test.ts](../../../../sources/mastra-ai__mastra/workspaces/vercel/src/sandbox/index.test.ts)<br>[workspaces/vercel/src/microvm/index.integration.test.ts](../../../../sources/mastra-ai__mastra/workspaces/vercel/src/microvm/index.integration.test.ts)<br>[workspaces/vercel/src/microvm/index.test.ts](../../../../sources/mastra-ai__mastra/workspaces/vercel/src/microvm/index.test.ts)<br>[workspaces/vercel/src/microvm/process-manager.test.ts](../../../../sources/mastra-ai__mastra/workspaces/vercel/src/microvm/process-manager.test.ts) |
| CI workflow | 36 | [.github/workflows/backport-auto.yml](../../../../sources/mastra-ai__mastra/.github/workflows/backport-auto.yml)<br>[.github/workflows/call-external-mastra-workflow.yml](../../../../sources/mastra-ai__mastra/.github/workflows/call-external-mastra-workflow.yml)<br>[.github/workflows/changed-test-gate-labeler.yml](../../../../sources/mastra-ai__mastra/.github/workflows/changed-test-gate-labeler.yml)<br>[.github/workflows/changed-test-gate.yml](../../../../sources/mastra-ai__mastra/.github/workflows/changed-test-gate.yml)<br>[.github/workflows/cron-alpha-publish.yml](../../../../sources/mastra-ai__mastra/.github/workflows/cron-alpha-publish.yml)<br>[.github/workflows/cron-every-2h.yml](../../../../sources/mastra-ai__mastra/.github/workflows/cron-every-2h.yml) |
| 컨테이너/배포 | 52 | [workspaces/s3/docker-compose.yml](../../../../sources/mastra-ai__mastra/workspaces/s3/docker-compose.yml)<br>[workspaces/gcs/docker-compose.yml](../../../../sources/mastra-ai__mastra/workspaces/gcs/docker-compose.yml)<br>[workspaces/azure/docker-compose.yml](../../../../sources/mastra-ai__mastra/workspaces/azure/docker-compose.yml)<br>[workflows/temporal/docker-compose.yaml](../../../../sources/mastra-ai__mastra/workflows/temporal/docker-compose.yaml)<br>[workflows/inngest/docker-compose.yaml](../../../../sources/mastra-ai__mastra/workflows/inngest/docker-compose.yaml)<br>[stores/upstash/docker-compose.yaml](../../../../sources/mastra-ai__mastra/stores/upstash/docker-compose.yaml) |
| 보안/정책 | 471 | [workspaces/vercel/src/sandbox/index.integration.test.ts](../../../../sources/mastra-ai__mastra/workspaces/vercel/src/sandbox/index.integration.test.ts)<br>[workspaces/vercel/src/sandbox/index.test.ts](../../../../sources/mastra-ai__mastra/workspaces/vercel/src/sandbox/index.test.ts)<br>[workspaces/vercel/src/sandbox/index.ts](../../../../sources/mastra-ai__mastra/workspaces/vercel/src/sandbox/index.ts)<br>[workspaces/railway/src/sandbox/index.integration.test.ts](../../../../sources/mastra-ai__mastra/workspaces/railway/src/sandbox/index.integration.test.ts)<br>[workspaces/railway/src/sandbox/index.test.ts](../../../../sources/mastra-ai__mastra/workspaces/railway/src/sandbox/index.test.ts)<br>[workspaces/railway/src/sandbox/index.ts](../../../../sources/mastra-ai__mastra/workspaces/railway/src/sandbox/index.ts) |
| 에이전트 지시문 | 28 | [AGENTS.md](../../../../sources/mastra-ai__mastra/AGENTS.md)<br>[CLAUDE.md](../../../../sources/mastra-ai__mastra/CLAUDE.md)<br>[packages/server/AGENTS.md](../../../../sources/mastra-ai__mastra/packages/server/AGENTS.md)<br>[packages/server/CLAUDE.md](../../../../sources/mastra-ai__mastra/packages/server/CLAUDE.md)<br>[packages/rag/AGENTS.md](../../../../sources/mastra-ai__mastra/packages/rag/AGENTS.md)<br>[packages/playground-ui/AGENTS.md](../../../../sources/mastra-ai__mastra/packages/playground-ui/AGENTS.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 상위 디렉터리가 많아 모듈 경계 재확인 필요 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `templates/template-meeting-notes/src/mastra/mcp.ts`, `templates/template-docs-chatbot/src/mcp-server/server.ts`, `templates/template-docs-chatbot/src/mcp-server/tools/docs-tool.ts`.
2. entrypoint를 따라 실행 흐름 확인: `workspaces/vercel/src/index.ts`, `workspaces/s3/src/index.ts`, `workspaces/railway/src/index.ts`.
3. agent/tool runtime 매핑: `AGENTS.md`, `workspaces/vercel/src/sandbox/index.integration.test.ts`, `workspaces/vercel/src/sandbox/index.test.ts`.
4. retrieval/memory/indexing 확인: `workspaces/vercel/src/index.ts`, `workspaces/vercel/src/sandbox/index.integration.test.ts`, `workspaces/vercel/src/sandbox/index.test.ts`.
5. test/eval 파일로 동작 검증: `vitest.config.observability.ts`, `workspaces/vercel/src/sandbox/index.integration.test.ts`, `workspaces/vercel/src/sandbox/index.test.ts`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 From the team behind Gatsby, Mastra is a framework for building AI powered applications and agents with a modern TypeScr. 핵심 구조 신호는 TypeScript, package.json, README.md, AGENTS.md, CLAUDE.md, tests이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
