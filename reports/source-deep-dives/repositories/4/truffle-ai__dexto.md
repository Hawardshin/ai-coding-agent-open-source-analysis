# truffle-ai/dexto 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

A coding agent and general agent harness for building and orchestrating agentic applications.

## 요약

- 조사 단위: `sources/truffle-ai__dexto` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 1,872 files, 356 directories, depth score 126, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=packages/tui/src/interactive-commands/mcp/index.ts, packages/tools-builtins/src/implementations/exa-mcp.ts, packages/server/src/mcp/mcp-handler.ts이고, 의존성 단서는 express, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | truffle-ai/dexto |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 633 |
| Forks | 72 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/truffle-ai__dexto](../../../../sources/truffle-ai__dexto) |
| 기존 보고서 | [reports/global-trending/repositories/truffle-ai__dexto.md](../../../global-trending/repositories/truffle-ai__dexto.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 1872 / 356 |
| 관측 최대 깊이 | 9 |
| 상위 디렉터리 | .agents, .changeset, .claude, .cursor, .github, .husky, agents, assets, commands, docs, eslint-rules, examples, feature-plans, packages, postman, scripts |
| 상위 확장자 | .ts: 1146, .tsx: 228, .md: 210, .json: 96, .yml: 49, .svg: 26, .gif: 20, .png: 15, (none): 12, .css: 11, .wav: 11, .mjs: 8 |
| 소스 패턴 | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
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


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
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


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | express |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
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


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 275 | [scripts/generate-openapi-spec.ts](../../../../sources/truffle-ai__dexto/scripts/generate-openapi-spec.ts)<br>[scripts/quality-checks.sh](../../../../sources/truffle-ai__dexto/scripts/quality-checks.sh)<br>[scripts/test_api.sh](../../../../sources/truffle-ai__dexto/scripts/test_api.sh)<br>[scripts/test-standalone-binaries.sh](../../../../sources/truffle-ai__dexto/scripts/test-standalone-binaries.sh)<br>[packages/webui/lib/composer-submit-intent.test.ts](../../../../sources/truffle-ai__dexto/packages/webui/lib/composer-submit-intent.test.ts)<br>[packages/webui/lib/stores/agentStore.test.ts](../../../../sources/truffle-ai__dexto/packages/webui/lib/stores/agentStore.test.ts) |
| CI workflow | 9 | [.github/workflows/build_and_test.yml](../../../../sources/truffle-ai__dexto/.github/workflows/build_and_test.yml)<br>[.github/workflows/build-docs.yml](../../../../sources/truffle-ai__dexto/.github/workflows/build-docs.yml)<br>[.github/workflows/changesets-publish.yml](../../../../sources/truffle-ai__dexto/.github/workflows/changesets-publish.yml)<br>[.github/workflows/code-quality.yml](../../../../sources/truffle-ai__dexto/.github/workflows/code-quality.yml)<br>[.github/workflows/release-standalone-binaries.yml](../../../../sources/truffle-ai__dexto/.github/workflows/release-standalone-binaries.yml)<br>[.github/workflows/require-changeset.yml](../../../../sources/truffle-ai__dexto/.github/workflows/require-changeset.yml) |
| 컨테이너/배포 | 16 | [compose.yaml](../../../../sources/truffle-ai__dexto/compose.yaml)<br>[Dockerfile](../../../../sources/truffle-ai__dexto/Dockerfile)<br>[packages/cli/src/cli/commands/deploy/client.test.ts](../../../../sources/truffle-ai__dexto/packages/cli/src/cli/commands/deploy/client.test.ts)<br>[packages/cli/src/cli/commands/deploy/client.ts](../../../../sources/truffle-ai__dexto/packages/cli/src/cli/commands/deploy/client.ts)<br>[packages/cli/src/cli/commands/deploy/config.test.ts](../../../../sources/truffle-ai__dexto/packages/cli/src/cli/commands/deploy/config.test.ts)<br>[packages/cli/src/cli/commands/deploy/config.ts](../../../../sources/truffle-ai__dexto/packages/cli/src/cli/commands/deploy/config.ts) |
| 보안/정책 | 54 | [packages/tui/src/utils/dexto-auth-refresh.test.ts](../../../../sources/truffle-ai__dexto/packages/tui/src/utils/dexto-auth-refresh.test.ts)<br>[packages/tui/src/utils/dexto-auth-refresh.ts](../../../../sources/truffle-ai__dexto/packages/tui/src/utils/dexto-auth-refresh.ts)<br>[packages/tui/src/interactive-commands/auth/index.ts](../../../../sources/truffle-ai__dexto/packages/tui/src/interactive-commands/auth/index.ts)<br>[packages/server/SECURITY.md](../../../../sources/truffle-ai__dexto/packages/server/SECURITY.md)<br>[packages/server/src/hono/routes/dexto-auth.ts](../../../../sources/truffle-ai__dexto/packages/server/src/hono/routes/dexto-auth.ts)<br>[packages/server/src/hono/middleware/auth.ts](../../../../sources/truffle-ai__dexto/packages/server/src/hono/middleware/auth.ts) |
| 에이전트 지시문 | 4 | [AGENTS.md](../../../../sources/truffle-ai__dexto/AGENTS.md)<br>[packages/webui/AGENTS.md](../../../../sources/truffle-ai__dexto/packages/webui/AGENTS.md)<br>[packages/tui/src/AGENTS.md](../../../../sources/truffle-ai__dexto/packages/tui/src/AGENTS.md)<br>[.cursor/rules/service_initializer.mdc](../../../../sources/truffle-ai__dexto/.cursor/rules/service_initializer.mdc) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `packages/tui/src/interactive-commands/mcp/index.ts`, `packages/tools-builtins/src/implementations/exa-mcp.ts`, `packages/server/src/mcp/mcp-handler.ts`.
2. entrypoint를 따라 실행 흐름 확인: `packages/webui/src/main.tsx`, `packages/tui/src/index.ts`, `packages/tools-todo/src/index.ts`.
3. agent/tool runtime 매핑: `AGENTS.md`, `packages/webui/AGENTS.md`, `packages/webui/lib/analytics/hook.ts`.
4. retrieval/memory/indexing 확인: `packages/webui/index.html`, `packages/webui/lib/stores/index.ts`, `packages/webui/lib/events/index.ts`.
5. test/eval 파일로 동작 검증: `scripts/generate-openapi-spec.ts`, `scripts/quality-checks.sh`, `scripts/test_api.sh`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 A coding agent and general agent harness for building and orchestrating agentic applications.. 핵심 구조 신호는 TypeScript, package.json, Dockerfile, README.md, AGENTS.md, LICENSE이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
