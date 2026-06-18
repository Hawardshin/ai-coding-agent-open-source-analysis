# preset-io/agor 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

Orchestrate Claude Code, Codex, and Gemini sessions on a multiplayer canvas. Manage git worktrees, track AI conversations, and visualize your team's agentic work in real-time.

## 요약

- 조사 단위: `sources/preset-io__agor` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 1,813 files, 257 directories, depth score 126, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=packages/executor/src/sdk-handlers/mcp-custom-headers-wiring.test.ts, packages/executor/src/sdk-handlers/base/mcp-scoping.test.ts, packages/executor/src/sdk-handlers/base/mcp-scoping.ts이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | preset-io/agor |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 1264 |
| Forks | 107 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/preset-io__agor](../../../../sources/preset-io__agor) |
| 기존 보고서 | [reports/global-trending/repositories/preset-io__agor.md](../../../global-trending/repositories/preset-io__agor.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 1813 / 257 |
| 관측 최대 깊이 | 8 |
| 상위 디렉터리 | .github, .husky, apps, context, docker, docs, Formula, migrations, packages, scripts |
| 상위 확장자 | .ts: 1030, .tsx: 276, .png: 111, .sql: 108, .json: 69, .md: 65, .mdx: 43, (none): 20, .mjs: 17, .css: 15, .yml: 15, .sh: 8 |
| 소스 패턴 | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| packages/executor | packages workspace | 105 |
| packages/core | packages workspace | 87 |
| apps/agor-ui | apps workspace | 41 |
| docs | documentation surface | 24 |
| apps/agor-docs | apps workspace | 9 |
| apps/agor-daemon | apps workspace | 5 |
| packages/agor-live | packages workspace | 5 |
| packages/client | packages workspace | 3 |
| apps/agor-cli | apps workspace | 2 |
| .github | ci surface | 1 |
| apps | source boundary | 1 |
| context | top-level component | 1 |
| docker | documentation surface | 1 |
| Formula | top-level component | 1 |
| migrations | top-level component | 1 |
| packages | source boundary | 1 |
| scripts | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| build | package.json | build | turbo run build |
| serve-dev | package.json | dev | turbo run dev |
| serve-dev | package.json | docs:dev | pnpm --filter @agor/docs dev |
| build | package.json | docs:build | pnpm --filter @agor/docs build |
| utility | package.json | docs:generate | pnpm --filter @agor/docs generate |
| quality | package.json | lint | biome check --diagnostic-level=warn . |
| quality | package.json | lint:fix | biome check --write . |
| quality | package.json | format | prettier --write . |
| test | package.json | test | turbo run test |
| quality | package.json | typecheck | turbo run typecheck --filter='!@agor/docs' |
| build | package.json | check | pnpm typecheck && pnpm lint && pnpm check:shortid && turbo run build --filter='!@agor/docs' |
| build | package.json | check:fix | pnpm lint:fix && pnpm typecheck && pnpm check:shortid && turbo run build --filter='!@agor/docs' |
| build | package.json | check:clean | turbo run typecheck build --filter='!@agor/docs' --force && pnpm lint && pnpm check:shortid |
| quality | package.json | check:shortid | node scripts/check-no-ad-hoc-shortid.mjs |
| utility | package.json | clean | turbo run clean && rm -rf node_modules |
| utility | package.json | prepare | husky |
| utility | package.json | cli:link | pnpm -C apps/agor-cli link --global |
| utility | package.json | cli:unlink | pnpm -C apps/agor-cli unlink --global |
| serve-dev | package.json | agor | NODE_NO_WARNINGS=1 pnpm --filter @agor/cli exec tsx bin/dev.ts |
| utility | package.json | seed | tsx scripts/seed.ts |
| utility | package.json | sync:agor-live-deps | node scripts/sync-agor-live-deps.mjs |
| quality | package.json | check:agor-live-deps | node scripts/sync-agor-live-deps.mjs --check |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | help | make help |
| serve-dev | Makefile | build-dev | make build-dev |
| build | Makefile | build-prod | make build-prod |
| serve-dev | Makefile | dev | make dev |
| serve-dev | Makefile | dev-build | make dev-build |
| utility | Makefile | prod | make prod |
| build | Makefile | prod-build | make prod-build |
| utility | Makefile | clean | make clean |
| utility | Makefile | clean-soft | make clean-soft |
| serve-dev | Makefile | logs-dev | make logs-dev |
| utility | Makefile | logs-prod | make logs-prod |
| serve-dev | Makefile | shell-dev | make shell-dev |
| utility | Makefile | shell-prod | make shell-prod |


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
| mcp | [packages/executor/src/sdk-handlers/mcp-custom-headers-wiring.test.ts](../../../../sources/preset-io__agor/packages/executor/src/sdk-handlers/mcp-custom-headers-wiring.test.ts) | mcp signal |
| mcp | [packages/executor/src/sdk-handlers/base/mcp-scoping.test.ts](../../../../sources/preset-io__agor/packages/executor/src/sdk-handlers/base/mcp-scoping.test.ts) | mcp signal |
| mcp | [packages/executor/src/sdk-handlers/base/mcp-scoping.ts](../../../../sources/preset-io__agor/packages/executor/src/sdk-handlers/base/mcp-scoping.ts) | mcp signal |
| mcp | [packages/executor/src/handlers/sdk/tool-registry.ts](../../../../sources/preset-io__agor/packages/executor/src/handlers/sdk/tool-registry.ts) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/preset-io__agor/AGENTS.md) | agentRuntime signal |
| agentRuntime | [packages/executor/IMPLEMENTATION.md](../../../../sources/preset-io__agor/packages/executor/IMPLEMENTATION.md) | agentRuntime signal |
| agentRuntime | [packages/executor/package.json](../../../../sources/preset-io__agor/packages/executor/package.json) | agentRuntime signal |
| agentRuntime | [packages/executor/README.md](../../../../sources/preset-io__agor/packages/executor/README.md) | agentRuntime signal |
| entrypoints | [packages/executor/src/cli.ts](../../../../sources/preset-io__agor/packages/executor/src/cli.ts) | entrypoints signal |
| entrypoints | [packages/executor/src/index.ts](../../../../sources/preset-io__agor/packages/executor/src/index.ts) | entrypoints signal |
| entrypoints | [packages/executor/bin/agor-executor](../../../../sources/preset-io__agor/packages/executor/bin/agor-executor) | entrypoints signal |
| entrypoints | [packages/core/src/index.ts](../../../../sources/preset-io__agor/packages/core/src/index.ts) | entrypoints signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 875 | [packages/executor/src/cli.ts](../../../../sources/preset-io__agor/packages/executor/src/cli.ts)<br>[packages/executor/src/index.ts](../../../../sources/preset-io__agor/packages/executor/src/index.ts)<br>[packages/executor/bin/agor-executor](../../../../sources/preset-io__agor/packages/executor/bin/agor-executor)<br>[packages/core/src/index.ts](../../../../sources/preset-io__agor/packages/core/src/index.ts)<br>[packages/client/src/index.ts](../../../../sources/preset-io__agor/packages/client/src/index.ts)<br>[packages/agor-live/bin/agor-daemon.js](../../../../sources/preset-io__agor/packages/agor-live/bin/agor-daemon.js)<br>[packages/agor-live/bin/agor.js](../../../../sources/preset-io__agor/packages/agor-live/bin/agor.js)<br>[packages/agor-live/bin/version-check.js](../../../../sources/preset-io__agor/packages/agor-live/bin/version-check.js) |
| agentRuntime | 294 | [AGENTS.md](../../../../sources/preset-io__agor/AGENTS.md)<br>[packages/executor/IMPLEMENTATION.md](../../../../sources/preset-io__agor/packages/executor/IMPLEMENTATION.md)<br>[packages/executor/package.json](../../../../sources/preset-io__agor/packages/executor/package.json)<br>[packages/executor/README.md](../../../../sources/preset-io__agor/packages/executor/README.md)<br>[packages/executor/tsconfig.json](../../../../sources/preset-io__agor/packages/executor/tsconfig.json)<br>[packages/executor/vitest.config.ts](../../../../sources/preset-io__agor/packages/executor/vitest.config.ts)<br>[packages/executor/test/executor.test.ts](../../../../sources/preset-io__agor/packages/executor/test/executor.test.ts)<br>[packages/executor/test/integration-test.sh](../../../../sources/preset-io__agor/packages/executor/test/integration-test.sh) |
| mcp | 94 | [packages/executor/src/sdk-handlers/mcp-custom-headers-wiring.test.ts](../../../../sources/preset-io__agor/packages/executor/src/sdk-handlers/mcp-custom-headers-wiring.test.ts)<br>[packages/executor/src/sdk-handlers/base/mcp-scoping.test.ts](../../../../sources/preset-io__agor/packages/executor/src/sdk-handlers/base/mcp-scoping.test.ts)<br>[packages/executor/src/sdk-handlers/base/mcp-scoping.ts](../../../../sources/preset-io__agor/packages/executor/src/sdk-handlers/base/mcp-scoping.ts)<br>[packages/executor/src/handlers/sdk/tool-registry.ts](../../../../sources/preset-io__agor/packages/executor/src/handlers/sdk/tool-registry.ts)<br>[packages/core/src/types/mcp.ts](../../../../sources/preset-io__agor/packages/core/src/types/mcp.ts)<br>[packages/core/src/tools/mcp/auth-secrets.test.ts](../../../../sources/preset-io__agor/packages/core/src/tools/mcp/auth-secrets.test.ts)<br>[packages/core/src/tools/mcp/auth-secrets.ts](../../../../sources/preset-io__agor/packages/core/src/tools/mcp/auth-secrets.ts)<br>[packages/core/src/tools/mcp/http-headers.test.ts](../../../../sources/preset-io__agor/packages/core/src/tools/mcp/http-headers.test.ts) |
| retrieval | 188 | [packages/executor/src/index.ts](../../../../sources/preset-io__agor/packages/executor/src/index.ts)<br>[packages/executor/src/sdk-handlers/opencode/index.ts](../../../../sources/preset-io__agor/packages/executor/src/sdk-handlers/opencode/index.ts)<br>[packages/executor/src/sdk-handlers/gemini/index.ts](../../../../sources/preset-io__agor/packages/executor/src/sdk-handlers/gemini/index.ts)<br>[packages/executor/src/sdk-handlers/copilot/index.ts](../../../../sources/preset-io__agor/packages/executor/src/sdk-handlers/copilot/index.ts)<br>[packages/executor/src/sdk-handlers/codex/index.ts](../../../../sources/preset-io__agor/packages/executor/src/sdk-handlers/codex/index.ts)<br>[packages/executor/src/sdk-handlers/claude-cli/index.ts](../../../../sources/preset-io__agor/packages/executor/src/sdk-handlers/claude-cli/index.ts)<br>[packages/executor/src/sdk-handlers/claude/index.ts](../../../../sources/preset-io__agor/packages/executor/src/sdk-handlers/claude/index.ts)<br>[packages/executor/src/sdk-handlers/base/index.ts](../../../../sources/preset-io__agor/packages/executor/src/sdk-handlers/base/index.ts) |
| spec | 8 | [docs/never-lose-prompt-design.md](../../../../sources/preset-io__agor/docs/never-lose-prompt-design.md)<br>[docs/internal/artifacts-roadmap-2026-05-09.md](../../../../sources/preset-io__agor/docs/internal/artifacts-roadmap-2026-05-09.md)<br>[docs/internal/global-search-design-2026-05-23.md](../../../../sources/preset-io__agor/docs/internal/global-search-design-2026-05-23.md)<br>[docs/internal/in-conversation-widgets-design-2026-05-19.md](../../../../sources/preset-io__agor/docs/internal/in-conversation-widgets-design-2026-05-19.md)<br>[docs/internal/schedules-first-class-design-2026-05-24.md](../../../../sources/preset-io__agor/docs/internal/schedules-first-class-design-2026-05-24.md)<br>[context/explorations/agor-home-page-design.md](../../../../sources/preset-io__agor/context/explorations/agor-home-page-design.md)<br>[context/concepts/architecture.md](../../../../sources/preset-io__agor/context/concepts/architecture.md)<br>[apps/agor-docs/pages/guide/architecture.mdx](../../../../sources/preset-io__agor/apps/agor-docs/pages/guide/architecture.mdx) |
| eval | 328 | [scripts/create-rbac-test-users.ts](../../../../sources/preset-io__agor/scripts/create-rbac-test-users.ts)<br>[scripts/test-docker.sh](../../../../sources/preset-io__agor/scripts/test-docker.sh)<br>[packages/executor/test/executor.test.ts](../../../../sources/preset-io__agor/packages/executor/test/executor.test.ts)<br>[packages/executor/test/integration-test.sh](../../../../sources/preset-io__agor/packages/executor/test/integration-test.sh)<br>[packages/executor/test/ipc-server.test.ts](../../../../sources/preset-io__agor/packages/executor/test/ipc-server.test.ts)<br>[packages/executor/test/manual-test.mjs](../../../../sources/preset-io__agor/packages/executor/test/manual-test.mjs)<br>[packages/executor/test/safe-stringify.test.ts](../../../../sources/preset-io__agor/packages/executor/test/safe-stringify.test.ts)<br>[packages/executor/test/simple-test.mjs](../../../../sources/preset-io__agor/packages/executor/test/simple-test.mjs) |
| security | 80 | [scripts/create-rbac-test-users.ts](../../../../sources/preset-io__agor/scripts/create-rbac-test-users.ts)<br>[packages/executor/src/sdk-handlers/gemini/permission-mapper.test.ts](../../../../sources/preset-io__agor/packages/executor/src/sdk-handlers/gemini/permission-mapper.test.ts)<br>[packages/executor/src/sdk-handlers/gemini/permission-mapper.ts](../../../../sources/preset-io__agor/packages/executor/src/sdk-handlers/gemini/permission-mapper.ts)<br>[packages/executor/src/sdk-handlers/copilot/permission-mapper.ts](../../../../sources/preset-io__agor/packages/executor/src/sdk-handlers/copilot/permission-mapper.ts)<br>[packages/executor/src/sdk-handlers/claude/permissions/permission-hooks.test.ts](../../../../sources/preset-io__agor/packages/executor/src/sdk-handlers/claude/permissions/permission-hooks.test.ts)<br>[packages/executor/src/sdk-handlers/claude/permissions/permission-hooks.ts](../../../../sources/preset-io__agor/packages/executor/src/sdk-handlers/claude/permissions/permission-hooks.ts)<br>[packages/executor/src/permissions/permission-manager.ts](../../../../sources/preset-io__agor/packages/executor/src/permissions/permission-manager.ts)<br>[packages/executor/src/permissions/permission-service.ts](../../../../sources/preset-io__agor/packages/executor/src/permissions/permission-service.ts) |
| ci | 7 | [.github/workflows/agor-live-smoke.yml](../../../../sources/preset-io__agor/.github/workflows/agor-live-smoke.yml)<br>[.github/workflows/audit.yml](../../../../sources/preset-io__agor/.github/workflows/audit.yml)<br>[.github/workflows/brew-formula-bump.yml](../../../../sources/preset-io__agor/.github/workflows/brew-formula-bump.yml)<br>[.github/workflows/ci.yml](../../../../sources/preset-io__agor/.github/workflows/ci.yml)<br>[.github/workflows/deploy-docs.yml](../../../../sources/preset-io__agor/.github/workflows/deploy-docs.yml)<br>[.github/workflows/docs-pr-check.yml](../../../../sources/preset-io__agor/.github/workflows/docs-pr-check.yml)<br>[.github/workflows/heavy-checks.yml](../../../../sources/preset-io__agor/.github/workflows/heavy-checks.yml) |
| container | 8 | [docker-compose.override.postgres.yml](../../../../sources/preset-io__agor/docker-compose.override.postgres.yml)<br>[docker-compose.override.yml](../../../../sources/preset-io__agor/docker-compose.override.yml)<br>[docker-compose.postgres.yml](../../../../sources/preset-io__agor/docker-compose.postgres.yml)<br>[docker-compose.prod.yml](../../../../sources/preset-io__agor/docker-compose.prod.yml)<br>[docker-compose.yml](../../../../sources/preset-io__agor/docker-compose.yml)<br>[docker/Dockerfile](../../../../sources/preset-io__agor/docker/Dockerfile)<br>[apps/agor-docs/docker-compose.yml](../../../../sources/preset-io__agor/apps/agor-docs/docker-compose.yml)<br>[apps/agor-docs/Dockerfile](../../../../sources/preset-io__agor/apps/agor-docs/Dockerfile) |
| instruction | 1 | [AGENTS.md](../../../../sources/preset-io__agor/AGENTS.md) |
| docs | 28 | [README.md](../../../../sources/preset-io__agor/README.md)<br>[packages/executor/README.md](../../../../sources/preset-io__agor/packages/executor/README.md)<br>[packages/core/src/seed/README.md](../../../../sources/preset-io__agor/packages/core/src/seed/README.md)<br>[packages/agor-live/README.md](../../../../sources/preset-io__agor/packages/agor-live/README.md)<br>[docs/jwt-expiry-investigation.md](../../../../sources/preset-io__agor/docs/jwt-expiry-investigation.md)<br>[docs/never-lose-prompt-design.md](../../../../sources/preset-io__agor/docs/never-lose-prompt-design.md)<br>[docs/internal/anonymous-mode-removal-analysis-2026-05-10.md](../../../../sources/preset-io__agor/docs/internal/anonymous-mode-removal-analysis-2026-05-10.md)<br>[docs/internal/artifacts-roadmap-2026-05-09.md](../../../../sources/preset-io__agor/docs/internal/artifacts-roadmap-2026-05-09.md) |
| config | 19 | [Makefile](../../../../sources/preset-io__agor/Makefile)<br>[package.json](../../../../sources/preset-io__agor/package.json)<br>[pnpm-workspace.yaml](../../../../sources/preset-io__agor/pnpm-workspace.yaml)<br>[turbo.json](../../../../sources/preset-io__agor/turbo.json)<br>[packages/executor/package.json](../../../../sources/preset-io__agor/packages/executor/package.json)<br>[packages/executor/tsconfig.json](../../../../sources/preset-io__agor/packages/executor/tsconfig.json)<br>[packages/core/package.json](../../../../sources/preset-io__agor/packages/core/package.json)<br>[packages/core/tsconfig.json](../../../../sources/preset-io__agor/packages/core/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 328 | [scripts/create-rbac-test-users.ts](../../../../sources/preset-io__agor/scripts/create-rbac-test-users.ts)<br>[scripts/test-docker.sh](../../../../sources/preset-io__agor/scripts/test-docker.sh)<br>[packages/executor/test/executor.test.ts](../../../../sources/preset-io__agor/packages/executor/test/executor.test.ts)<br>[packages/executor/test/integration-test.sh](../../../../sources/preset-io__agor/packages/executor/test/integration-test.sh)<br>[packages/executor/test/ipc-server.test.ts](../../../../sources/preset-io__agor/packages/executor/test/ipc-server.test.ts)<br>[packages/executor/test/manual-test.mjs](../../../../sources/preset-io__agor/packages/executor/test/manual-test.mjs) |
| CI workflow | 7 | [.github/workflows/agor-live-smoke.yml](../../../../sources/preset-io__agor/.github/workflows/agor-live-smoke.yml)<br>[.github/workflows/audit.yml](../../../../sources/preset-io__agor/.github/workflows/audit.yml)<br>[.github/workflows/brew-formula-bump.yml](../../../../sources/preset-io__agor/.github/workflows/brew-formula-bump.yml)<br>[.github/workflows/ci.yml](../../../../sources/preset-io__agor/.github/workflows/ci.yml)<br>[.github/workflows/deploy-docs.yml](../../../../sources/preset-io__agor/.github/workflows/deploy-docs.yml)<br>[.github/workflows/docs-pr-check.yml](../../../../sources/preset-io__agor/.github/workflows/docs-pr-check.yml) |
| 컨테이너/배포 | 8 | [docker-compose.override.postgres.yml](../../../../sources/preset-io__agor/docker-compose.override.postgres.yml)<br>[docker-compose.override.yml](../../../../sources/preset-io__agor/docker-compose.override.yml)<br>[docker-compose.postgres.yml](../../../../sources/preset-io__agor/docker-compose.postgres.yml)<br>[docker-compose.prod.yml](../../../../sources/preset-io__agor/docker-compose.prod.yml)<br>[docker-compose.yml](../../../../sources/preset-io__agor/docker-compose.yml)<br>[docker/Dockerfile](../../../../sources/preset-io__agor/docker/Dockerfile) |
| 보안/정책 | 80 | [scripts/create-rbac-test-users.ts](../../../../sources/preset-io__agor/scripts/create-rbac-test-users.ts)<br>[packages/executor/src/sdk-handlers/gemini/permission-mapper.test.ts](../../../../sources/preset-io__agor/packages/executor/src/sdk-handlers/gemini/permission-mapper.test.ts)<br>[packages/executor/src/sdk-handlers/gemini/permission-mapper.ts](../../../../sources/preset-io__agor/packages/executor/src/sdk-handlers/gemini/permission-mapper.ts)<br>[packages/executor/src/sdk-handlers/copilot/permission-mapper.ts](../../../../sources/preset-io__agor/packages/executor/src/sdk-handlers/copilot/permission-mapper.ts)<br>[packages/executor/src/sdk-handlers/claude/permissions/permission-hooks.test.ts](../../../../sources/preset-io__agor/packages/executor/src/sdk-handlers/claude/permissions/permission-hooks.test.ts)<br>[packages/executor/src/sdk-handlers/claude/permissions/permission-hooks.ts](../../../../sources/preset-io__agor/packages/executor/src/sdk-handlers/claude/permissions/permission-hooks.ts) |
| 에이전트 지시문 | 1 | [AGENTS.md](../../../../sources/preset-io__agor/AGENTS.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `packages/executor/src/sdk-handlers/mcp-custom-headers-wiring.test.ts`, `packages/executor/src/sdk-handlers/base/mcp-scoping.test.ts`, `packages/executor/src/sdk-handlers/base/mcp-scoping.ts`.
2. entrypoint를 따라 실행 흐름 확인: `packages/executor/src/cli.ts`, `packages/executor/src/index.ts`, `packages/executor/bin/agor-executor`.
3. agent/tool runtime 매핑: `AGENTS.md`, `packages/executor/IMPLEMENTATION.md`, `packages/executor/package.json`.
4. retrieval/memory/indexing 확인: `packages/executor/src/index.ts`, `packages/executor/src/sdk-handlers/opencode/index.ts`, `packages/executor/src/sdk-handlers/gemini/index.ts`.
5. test/eval 파일로 동작 검증: `scripts/create-rbac-test-users.ts`, `scripts/test-docker.sh`, `packages/executor/test/executor.test.ts`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Orchestrate Claude Code, Codex, and Gemini sessions on a multiplayer canvas. Manage git worktrees, track AI conversation. 핵심 구조 신호는 TypeScript, package.json, docker-compose.yml, Makefile, README.md, AGENTS.md이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
