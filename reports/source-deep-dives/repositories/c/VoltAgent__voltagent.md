# VoltAgent/voltagent 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

AI Agent Engineering Platform built on an Open Source TypeScript AI Agent Framework

## 요약

- 조사 단위: `sources/VoltAgent__voltagent` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 2,795 files, 839 directories, depth score 126, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=website/static/img/logos/mcp/index.tsx, website/src/pages/tutorial/mcp.tsx, website/src/components/mcp-list/mcp-page/CodeBlock.tsx이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | VoltAgent/voltagent |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | TypeScript |
| Stars | 9661 |
| Forks | 999 |
| License | MIT |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/VoltAgent__voltagent](../../../../sources/VoltAgent__voltagent) |
| 기존 보고서 | [reports/llm-wiki/repositories/VoltAgent__voltagent.md](../../../llm-wiki/repositories/VoltAgent__voltagent.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 2795 / 839 |
| 관측 최대 깊이 | 9 |
| 상위 디렉터리 | .changeset, .cursor, .devcontainer, .github, .husky, archive, docs, examples, i18n, packages, scripts, tools, website |
| 상위 확장자 | .ts: 1113, .md: 537, .tsx: 401, .json: 327, (none): 80, .example: 70, .js: 69, .css: 39, .svg: 27, .png: 25, .mts: 24, .template: 21 |
| 소스 패턴 | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| packages/server-elysia | packages workspace | 24 |
| packages/server-core | packages workspace | 23 |
| packages/sandbox-blaxel | packages workspace | 13 |
| packages/server-hono | packages workspace | 13 |
| packages/sandbox-daytona | packages workspace | 8 |
| packages/sandbox-e2b | packages workspace | 8 |
| packages/voice | packages workspace | 7 |
| packages/create-voltagent-app | packages workspace | 5 |
| packages/serverless-hono | packages workspace | 5 |
| packages/supabase | packages workspace | 5 |
| packages/vercel-ai-exporter | packages workspace | 4 |
| packages/postgres | packages workspace | 3 |
| packages/scorers | packages workspace | 3 |
| packages/sdk | packages workspace | 3 |
| packages/voltagent-memory | packages workspace | 3 |
| packages/cli | packages workspace | 2 |
| packages/core | packages workspace | 2 |
| packages/mcp-server | packages workspace | 2 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | package.json | archive:deprecated | node scripts/archive-deprecated.js |
| utility | package.json | attw | lerna run attw --scope @voltagent/* |
| utility | package.json | attw:all | lerna run attw --scope @voltagent/* |
| utility | package.json | biome | biome |
| utility | package.json | bootstrap | lerna bootstrap |
| build | package.json | build | lerna run build --ignore @voltagent/vercel-ai-exporter |
| build | package.json | build:all | lerna run build --scope @voltagent/* --ignore @voltagent/vercel-ai-exporter --scope create-voltagent-app --concurrency 1 |
| build | package.json | build:example | lerna run build --scope voltagent-basic-example |
| utility | package.json | changeset | changeset |
| utility | package.json | clean | lerna run clean && lerna clean --yes && rimraf node_modules |
| build | package.json | coffee | pnpm nuke && pnpm i && pnpm build:all |
| serve-dev | package.json | dev | lerna run dev --ignore voltagent-example-* |
| quality | package.json | format | prettier --write "**/*.{ts,tsx,md}" |
| quality | package.json | lint | biome check . |
| quality | package.json | lint:ci | biome ci . |
| quality | package.json | lint:error | biome check . --diagnostic-level error |
| quality | package.json | lint:fix | biome check . --write |
| quality | package.json | lint:staged | lint-staged |
| build | package.json | nuke | echo 'Removing all node_modules, builds and lockfiles' && pnpm nuke:node_modules && pnpm nuke:builds && pnpm nuke:lockfiles |
| build | package.json | nuke:builds | lerna exec -- rimraf dist && lerna exec -- rimraf build |
| utility | package.json | nuke:lockfiles | lerna exec -- rimraf package-lock.json && lerna exec -- rimraf yarn.lock && lerna exec -- rimraf pnpm-lock.yaml |
| utility | package.json | nuke:node_modules | lerna clean --yes && rimraf node_modules |
| utility | package.json | nx | nx |
| utility | package.json | prepare | husky install |
| build | package.json | prerelease:enter | pnpm changeset pre enter next |
| build | package.json | prerelease:exit | pnpm changeset pre exit |
| build | package.json | prerelease:publish | pnpm build && pnpm changeset publish |
| build | package.json | prerelease:version | pnpm changeset version |
| build | package.json | prerelease:version-packages | pnpm changeset version && pnpm i --ignore-scripts --lockfile-only --no-frozen-lockfile --reporter=ndjson --stream && git add pnpm-lock.yaml |
| quality | package.json | publint | lerna run publint --scope @voltagent/core |
| quality | package.json | publint:all | lerna run publint --scope @voltagent/* |
| utility | package.json | publish | lerna publish |
| utility | package.json | sp | syncpack |
| serve-dev | package.json | start | lerna run start |
| utility | package.json | sync:docs-mcp | node scripts/sync-docs-mcp.js |
| test | package.json | test | lerna run test --stream |
| test | package.json | test:all | lerna run test --stream --scope @voltagent/* |
| test | package.json | test:all:coverage | pnpm test:all -- -- --coverage |
| test | package.json | test:coverage | pnpm test -- -- --coverage |
| utility | package.json | version-packages | pnpm changeset version && pnpm i --ignore-scripts --lockfile-only --no-frozen-lockfile --reporter=ndjson --stream && git add pnpm-lock.yaml |


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
| mcp | [website/static/img/logos/mcp/index.tsx](../../../../sources/VoltAgent__voltagent/website/static/img/logos/mcp/index.tsx) | mcp signal |
| mcp | [website/src/pages/tutorial/mcp.tsx](../../../../sources/VoltAgent__voltagent/website/src/pages/tutorial/mcp.tsx) | mcp signal |
| mcp | [website/src/components/mcp-list/mcp-page/CodeBlock.tsx](../../../../sources/VoltAgent__voltagent/website/src/components/mcp-list/mcp-page/CodeBlock.tsx) | mcp signal |
| mcp | [website/src/components/mcp-list/mcp-page/DynamicServerConfigContentRenderer.tsx](../../../../sources/VoltAgent__voltagent/website/src/components/mcp-list/mcp-page/DynamicServerConfigContentRenderer.tsx) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/VoltAgent__voltagent/AGENTS.md) | agentRuntime signal |
| agentRuntime | [website/static/img/ops/agent-chat.png](../../../../sources/VoltAgent__voltagent/website/static/img/ops/agent-chat.png) | agentRuntime signal |
| agentRuntime | [website/static/img/ops/agent-list.png](../../../../sources/VoltAgent__voltagent/website/static/img/ops/agent-list.png) | agentRuntime signal |
| agentRuntime | [website/src/pages/tutorial/memory.tsx](../../../../sources/VoltAgent__voltagent/website/src/pages/tutorial/memory.tsx) | agentRuntime signal |
| entrypoints | [tools/core/src/index.ts](../../../../sources/VoltAgent__voltagent/tools/core/src/index.ts) | entrypoints signal |
| entrypoints | [tools/core/src/generators/provider/files/src/index.ts.template](../../../../sources/VoltAgent__voltagent/tools/core/src/generators/provider/files/src/index.ts.template) | entrypoints signal |
| entrypoints | [tools/core/src/generators/package/files/src/index.ts](../../../../sources/VoltAgent__voltagent/tools/core/src/generators/package/files/src/index.ts) | entrypoints signal |
| entrypoints | [tools/core/src/generators/example/files/src/index.ts](../../../../sources/VoltAgent__voltagent/tools/core/src/generators/example/files/src/index.ts) | entrypoints signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 147 | [tools/core/src/index.ts](../../../../sources/VoltAgent__voltagent/tools/core/src/index.ts)<br>[tools/core/src/generators/provider/files/src/index.ts.template](../../../../sources/VoltAgent__voltagent/tools/core/src/generators/provider/files/src/index.ts.template)<br>[tools/core/src/generators/package/files/src/index.ts](../../../../sources/VoltAgent__voltagent/tools/core/src/generators/package/files/src/index.ts)<br>[tools/core/src/generators/example/files/src/index.ts](../../../../sources/VoltAgent__voltagent/tools/core/src/generators/example/files/src/index.ts)<br>[packages/voltagent-memory/src/index.ts](../../../../sources/VoltAgent__voltagent/packages/voltagent-memory/src/index.ts)<br>[packages/voice/src/index.ts](../../../../sources/VoltAgent__voltagent/packages/voice/src/index.ts)<br>[packages/vercel-ai-exporter/src/index.ts](../../../../sources/VoltAgent__voltagent/packages/vercel-ai-exporter/src/index.ts)<br>[packages/supabase/src/index.ts](../../../../sources/VoltAgent__voltagent/packages/supabase/src/index.ts) |
| agentRuntime | 463 | [AGENTS.md](../../../../sources/VoltAgent__voltagent/AGENTS.md)<br>[website/static/img/ops/agent-chat.png](../../../../sources/VoltAgent__voltagent/website/static/img/ops/agent-chat.png)<br>[website/static/img/ops/agent-list.png](../../../../sources/VoltAgent__voltagent/website/static/img/ops/agent-list.png)<br>[website/src/pages/tutorial/memory.tsx](../../../../sources/VoltAgent__voltagent/website/src/pages/tutorial/memory.tsx)<br>[website/src/hooks/use-keydown.ts](../../../../sources/VoltAgent__voltagent/website/src/hooks/use-keydown.ts)<br>[website/src/hooks/use-media-query.ts](../../../../sources/VoltAgent__voltagent/website/src/hooks/use-media-query.ts)<br>[website/src/hooks/use-outside-click.ts](../../../../sources/VoltAgent__voltagent/website/src/hooks/use-outside-click.ts)<br>[website/src/components/supervisor-agent/workflow-code-example.tsx](../../../../sources/VoltAgent__voltagent/website/src/components/supervisor-agent/workflow-code-example.tsx) |
| mcp | 169 | [website/static/img/logos/mcp/index.tsx](../../../../sources/VoltAgent__voltagent/website/static/img/logos/mcp/index.tsx)<br>[website/src/pages/tutorial/mcp.tsx](../../../../sources/VoltAgent__voltagent/website/src/pages/tutorial/mcp.tsx)<br>[website/src/components/mcp-list/mcp-page/CodeBlock.tsx](../../../../sources/VoltAgent__voltagent/website/src/components/mcp-list/mcp-page/CodeBlock.tsx)<br>[website/src/components/mcp-list/mcp-page/DynamicServerConfigContentRenderer.tsx](../../../../sources/VoltAgent__voltagent/website/src/components/mcp-list/mcp-page/DynamicServerConfigContentRenderer.tsx)<br>[website/src/components/mcp-list/mcp-page/mcp-info.tsx](../../../../sources/VoltAgent__voltagent/website/src/components/mcp-list/mcp-page/mcp-info.tsx)<br>[website/src/components/mcp-list/mcp-page/recommended-servers.tsx](../../../../sources/VoltAgent__voltagent/website/src/components/mcp-list/mcp-page/recommended-servers.tsx)<br>[website/src/components/mcp-list/mcp-page/serverConfigContent.ts](../../../../sources/VoltAgent__voltagent/website/src/components/mcp-list/mcp-page/serverConfigContent.ts)<br>[website/src/components/mcp-list/mcp-page/tool-input.tsx](../../../../sources/VoltAgent__voltagent/website/src/components/mcp-list/mcp-page/tool-input.tsx) |
| retrieval | 678 | [website/static/img/logos/index.ts](../../../../sources/VoltAgent__voltagent/website/static/img/logos/index.ts)<br>[website/static/img/logos/x/index.tsx](../../../../sources/VoltAgent__voltagent/website/static/img/logos/x/index.tsx)<br>[website/static/img/logos/vscode/index.tsx](../../../../sources/VoltAgent__voltagent/website/static/img/logos/vscode/index.tsx)<br>[website/static/img/logos/supabase/index.tsx](../../../../sources/VoltAgent__voltagent/website/static/img/logos/supabase/index.tsx)<br>[website/static/img/logos/reddit/index.tsx](../../../../sources/VoltAgent__voltagent/website/static/img/logos/reddit/index.tsx)<br>[website/static/img/logos/openai/index.tsx](../../../../sources/VoltAgent__voltagent/website/static/img/logos/openai/index.tsx)<br>[website/static/img/logos/observability/signoz/index.tsx](../../../../sources/VoltAgent__voltagent/website/static/img/logos/observability/signoz/index.tsx)<br>[website/static/img/logos/observability/new-relic/index.tsx](../../../../sources/VoltAgent__voltagent/website/static/img/logos/observability/new-relic/index.tsx) |
| spec | 230 | [DESIGN.md](../../../../sources/VoltAgent__voltagent/DESIGN.md)<br>[website/docs/api/server-architecture.md](../../../../sources/VoltAgent__voltagent/website/docs/api/server-architecture.md)<br>[tools/core/tsconfig.spec.json](../../../../sources/VoltAgent__voltagent/tools/core/tsconfig.spec.json)<br>[tools/core/src/generators/provider/provider.spec.ts](../../../../sources/VoltAgent__voltagent/tools/core/src/generators/provider/provider.spec.ts)<br>[tools/core/src/generators/provider/files/src/provider.spec.ts.template](../../../../sources/VoltAgent__voltagent/tools/core/src/generators/provider/files/src/provider.spec.ts.template)<br>[tools/core/src/generators/package/package.spec.ts](../../../../sources/VoltAgent__voltagent/tools/core/src/generators/package/package.spec.ts)<br>[tools/core/src/generators/package/files/src/lib/foobar.spec.ts](../../../../sources/VoltAgent__voltagent/tools/core/src/generators/package/files/src/lib/foobar.spec.ts)<br>[tools/core/src/generators/example/example.spec.ts](../../../../sources/VoltAgent__voltagent/tools/core/src/generators/example/example.spec.ts) |
| eval | 345 | [website/static/img/mlflow-tracing.png](../../../../sources/VoltAgent__voltagent/website/static/img/mlflow-tracing.png)<br>[website/static/img/logos/observability/honeyhive.png](../../../../sources/VoltAgent__voltagent/website/static/img/logos/observability/honeyhive.png)<br>[website/static/img/logos/observability/traceloop.png](../../../../sources/VoltAgent__voltagent/website/static/img/logos/observability/traceloop.png)<br>[website/static/img/logos/observability/signoz/index.tsx](../../../../sources/VoltAgent__voltagent/website/static/img/logos/observability/signoz/index.tsx)<br>[website/static/img/logos/observability/new-relic/index.tsx](../../../../sources/VoltAgent__voltagent/website/static/img/logos/observability/new-relic/index.tsx)<br>[website/static/img/logos/observability/langwatch/index.tsx](../../../../sources/VoltAgent__voltagent/website/static/img/logos/observability/langwatch/index.tsx)<br>[website/static/img/logos/observability/langsmith/index.tsx](../../../../sources/VoltAgent__voltagent/website/static/img/logos/observability/langsmith/index.tsx)<br>[website/static/img/logos/observability/langfuse/index.tsx](../../../../sources/VoltAgent__voltagent/website/static/img/logos/observability/langfuse/index.tsx) |
| security | 75 | [SECURITY.md](../../../../sources/VoltAgent__voltagent/SECURITY.md)<br>[website/src/components/privacy-policy/index.tsx](../../../../sources/VoltAgent__voltagent/website/src/components/privacy-policy/index.tsx)<br>[website/docs/workspaces/sandbox.md](../../../../sources/VoltAgent__voltagent/website/docs/workspaces/sandbox.md)<br>[website/docs/workspaces/security.md](../../../../sources/VoltAgent__voltagent/website/docs/workspaces/security.md)<br>[website/docs/workflows/steps/and-guardrail.md](../../../../sources/VoltAgent__voltagent/website/docs/workflows/steps/and-guardrail.md)<br>[packages/server-hono/src/auth/index.ts](../../../../sources/VoltAgent__voltagent/packages/server-hono/src/auth/index.ts)<br>[packages/server-hono/src/auth/middleware.spec.ts](../../../../sources/VoltAgent__voltagent/packages/server-hono/src/auth/middleware.spec.ts)<br>[packages/server-hono/src/auth/middleware.ts](../../../../sources/VoltAgent__voltagent/packages/server-hono/src/auth/middleware.ts) |
| ci | 3 | [.github/workflows/prerelease.yml](../../../../sources/VoltAgent__voltagent/.github/workflows/prerelease.yml)<br>[.github/workflows/pull-request.yml](../../../../sources/VoltAgent__voltagent/.github/workflows/pull-request.yml)<br>[.github/workflows/release.yml](../../../../sources/VoltAgent__voltagent/.github/workflows/release.yml) |
| container | 5 | [packages/postgres/docker-compose.test.yaml](../../../../sources/VoltAgent__voltagent/packages/postgres/docker-compose.test.yaml)<br>[packages/create-voltagent-app/templates/base/Dockerfile.template](../../../../sources/VoltAgent__voltagent/packages/create-voltagent-app/templates/base/Dockerfile.template)<br>[examples/with-whatsapp/Dockerfile](../../../../sources/VoltAgent__voltagent/examples/with-whatsapp/Dockerfile)<br>[examples/with-cerbos/docker-compose.yml](../../../../sources/VoltAgent__voltagent/examples/with-cerbos/docker-compose.yml)<br>[examples/with-ad-creator/Dockerfile](../../../../sources/VoltAgent__voltagent/examples/with-ad-creator/Dockerfile) |
| instruction | 3 | [AGENTS.md](../../../../sources/VoltAgent__voltagent/AGENTS.md)<br>[website/docs/api/endpoints/agents.md](../../../../sources/VoltAgent__voltagent/website/docs/api/endpoints/agents.md)<br>[.cursor/rules/agents.mdc](../../../../sources/VoltAgent__voltagent/.cursor/rules/agents.mdc) |
| docs | 929 | [README.md](../../../../sources/VoltAgent__voltagent/README.md)<br>[website/.env.example](../../../../sources/VoltAgent__voltagent/website/.env.example)<br>[website/.gitignore](../../../../sources/VoltAgent__voltagent/website/.gitignore)<br>[website/babel.config.js](../../../../sources/VoltAgent__voltagent/website/babel.config.js)<br>[website/components.json](../../../../sources/VoltAgent__voltagent/website/components.json)<br>[website/docusaurus.config.ts](../../../../sources/VoltAgent__voltagent/website/docusaurus.config.ts)<br>[website/package-lock.json](../../../../sources/VoltAgent__voltagent/website/package-lock.json)<br>[website/package.json](../../../../sources/VoltAgent__voltagent/website/package.json) |
| config | 263 | [nx.json](../../../../sources/VoltAgent__voltagent/nx.json)<br>[package.json](../../../../sources/VoltAgent__voltagent/package.json)<br>[pnpm-workspace.yaml](../../../../sources/VoltAgent__voltagent/pnpm-workspace.yaml)<br>[tsconfig.json](../../../../sources/VoltAgent__voltagent/tsconfig.json)<br>[website/package.json](../../../../sources/VoltAgent__voltagent/website/package.json)<br>[website/tsconfig.json](../../../../sources/VoltAgent__voltagent/website/tsconfig.json)<br>[tools/core/package.json](../../../../sources/VoltAgent__voltagent/tools/core/package.json)<br>[tools/core/tsconfig.json](../../../../sources/VoltAgent__voltagent/tools/core/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 345 | [website/static/img/mlflow-tracing.png](../../../../sources/VoltAgent__voltagent/website/static/img/mlflow-tracing.png)<br>[website/static/img/logos/observability/honeyhive.png](../../../../sources/VoltAgent__voltagent/website/static/img/logos/observability/honeyhive.png)<br>[website/static/img/logos/observability/traceloop.png](../../../../sources/VoltAgent__voltagent/website/static/img/logos/observability/traceloop.png)<br>[website/static/img/logos/observability/signoz/index.tsx](../../../../sources/VoltAgent__voltagent/website/static/img/logos/observability/signoz/index.tsx)<br>[website/static/img/logos/observability/new-relic/index.tsx](../../../../sources/VoltAgent__voltagent/website/static/img/logos/observability/new-relic/index.tsx)<br>[website/static/img/logos/observability/langwatch/index.tsx](../../../../sources/VoltAgent__voltagent/website/static/img/logos/observability/langwatch/index.tsx) |
| CI workflow | 3 | [.github/workflows/prerelease.yml](../../../../sources/VoltAgent__voltagent/.github/workflows/prerelease.yml)<br>[.github/workflows/pull-request.yml](../../../../sources/VoltAgent__voltagent/.github/workflows/pull-request.yml)<br>[.github/workflows/release.yml](../../../../sources/VoltAgent__voltagent/.github/workflows/release.yml) |
| 컨테이너/배포 | 5 | [packages/postgres/docker-compose.test.yaml](../../../../sources/VoltAgent__voltagent/packages/postgres/docker-compose.test.yaml)<br>[packages/create-voltagent-app/templates/base/Dockerfile.template](../../../../sources/VoltAgent__voltagent/packages/create-voltagent-app/templates/base/Dockerfile.template)<br>[examples/with-whatsapp/Dockerfile](../../../../sources/VoltAgent__voltagent/examples/with-whatsapp/Dockerfile)<br>[examples/with-cerbos/docker-compose.yml](../../../../sources/VoltAgent__voltagent/examples/with-cerbos/docker-compose.yml)<br>[examples/with-ad-creator/Dockerfile](../../../../sources/VoltAgent__voltagent/examples/with-ad-creator/Dockerfile) |
| 보안/정책 | 75 | [SECURITY.md](../../../../sources/VoltAgent__voltagent/SECURITY.md)<br>[website/src/components/privacy-policy/index.tsx](../../../../sources/VoltAgent__voltagent/website/src/components/privacy-policy/index.tsx)<br>[website/docs/workspaces/sandbox.md](../../../../sources/VoltAgent__voltagent/website/docs/workspaces/sandbox.md)<br>[website/docs/workspaces/security.md](../../../../sources/VoltAgent__voltagent/website/docs/workspaces/security.md)<br>[website/docs/workflows/steps/and-guardrail.md](../../../../sources/VoltAgent__voltagent/website/docs/workflows/steps/and-guardrail.md)<br>[packages/server-hono/src/auth/index.ts](../../../../sources/VoltAgent__voltagent/packages/server-hono/src/auth/index.ts) |
| 에이전트 지시문 | 3 | [AGENTS.md](../../../../sources/VoltAgent__voltagent/AGENTS.md)<br>[website/docs/api/endpoints/agents.md](../../../../sources/VoltAgent__voltagent/website/docs/api/endpoints/agents.md)<br>[.cursor/rules/agents.mdc](../../../../sources/VoltAgent__voltagent/.cursor/rules/agents.mdc) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `website/static/img/logos/mcp/index.tsx`, `website/src/pages/tutorial/mcp.tsx`, `website/src/components/mcp-list/mcp-page/CodeBlock.tsx`.
2. entrypoint를 따라 실행 흐름 확인: `tools/core/src/index.ts`, `tools/core/src/generators/provider/files/src/index.ts.template`, `tools/core/src/generators/package/files/src/index.ts`.
3. agent/tool runtime 매핑: `AGENTS.md`, `website/static/img/ops/agent-chat.png`, `website/static/img/ops/agent-list.png`.
4. retrieval/memory/indexing 확인: `website/static/img/logos/index.ts`, `website/static/img/logos/x/index.tsx`, `website/static/img/logos/vscode/index.tsx`.
5. test/eval 파일로 동작 검증: `website/static/img/mlflow-tracing.png`, `website/static/img/logos/observability/honeyhive.png`, `website/static/img/logos/observability/traceloop.png`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 AI Agent Engineering Platform built on an Open Source TypeScript AI Agent Framework. 핵심 구조 신호는 TypeScript, package.json, README.md, AGENTS.md, ci, docs이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 더 깊은 구조 스캔 필요입니다.
