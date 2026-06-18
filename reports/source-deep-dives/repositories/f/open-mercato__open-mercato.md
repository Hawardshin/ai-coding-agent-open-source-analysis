# open-mercato/open-mercato Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

AI-Engineering Foundation Framework built with AI and designed for AI. Hundreds of architectural and domain decisions (multi-tenancy, RBAC, event flow, pricing, sales pipeline,CRM/ERP processes) are already made conventions and specs so agents (Cursor, Claude Code, Codex) arch. decisions without reinventing. Ship production grade with AI Agents.

## 요약

- 조사 단위: `sources/open-mercato__open-mercato` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 8,965 files, 2,628 directories, depth score 132, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

코딩 에이전트/IDE 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 entrypoints=packages/webhooks/src/index.ts, packages/ui/src/index.ts, packages/sync-akeneo/src/index.ts이고, 의존성 단서는 openai, next, react, playwright, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 coding-agent reference implementation이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | open-mercato/open-mercato |
| Topic | Coding Agent and IDE / 코딩 에이전트/IDE |
| Region | global |
| Language | TypeScript |
| Stars | 1411 |
| Forks | 300 |
| License | none |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/open-mercato__open-mercato](../../../../sources/open-mercato__open-mercato) |
| Existing report | [reports/global-trending/repositories/open-mercato__open-mercato.md](../../../global-trending/repositories/open-mercato__open-mercato.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 8965 / 2628 |
| Max observed depth | 13 |
| Top directories | .ai, .devcontainer, .github, .husky, apps, certs, config, docker, docs, packages, scripts, tests |
| Top extensions | .ts: 5576, .tsx: 1349, .md: 926, .json: 343, .mdx: 251, .png: 219, .mjs: 125, .sh: 33, (none): 25, .cjs: 24, .yml: 22, .svg: 12 |
| Source patterns | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| packages/ui | packages workspace | 58 |
| packages/shared | packages workspace | 49 |
| packages/webhooks | packages workspace | 36 |
| packages/core | packages workspace | 33 |
| packages/create-app | packages workspace | 30 |
| packages/cli | packages workspace | 25 |
| packages/enterprise | packages workspace | 22 |
| packages/search | packages workspace | 19 |
| packages/ai-assistant | packages workspace | 18 |
| packages/scheduler | packages workspace | 13 |
| apps/mercato | apps workspace | 12 |
| packages/onboarding | packages workspace | 10 |
| packages/queue | packages workspace | 9 |
| docs | documentation surface | 7 |
| packages/events | packages workspace | 7 |
| packages/storage-s3 | packages workspace | 5 |
| packages/sync-akeneo | packages workspace | 5 |
| packages/checkout | packages workspace | 4 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| serve-dev | package.json | dev | node ./scripts/dev.mjs |
| serve-dev | package.json | dev:classic | node ./scripts/dev.mjs --classic |
| serve-dev | package.json | dev:verbose | node ./scripts/dev.mjs --verbose |
| serve-dev | package.json | dev:ephemeral | tsx scripts/dev-ephemeral.ts |
| serve-dev | package.json | dev:ephemeral:classic | tsx scripts/dev-ephemeral.ts --classic |
| serve-dev | package.json | dev:ephemeral:verbose | tsx scripts/dev-ephemeral.ts --verbose |
| serve-dev | package.json | dev:greenfield | node ./scripts/dev.mjs --greenfield |
| serve-dev | package.json | dev:greenfield:classic | node ./scripts/dev.mjs --greenfield --classic |
| serve-dev | package.json | dev:greenfield:verbose | node ./scripts/dev.mjs --greenfield --verbose |
| serve-dev | package.json | dev:app | node ./scripts/dev.mjs --app-only |
| serve-dev | package.json | dev:app:verbose | yarn workspace @open-mercato/app dev:verbose |
| serve-dev | package.json | dev:profile | node ./scripts/profile-dev-rss.mjs --spawn-dev |
| serve-dev | package.json | dev:profile:report | node ./scripts/profile-dev-rss.mjs --report |
| serve-dev | package.json | watch:packages | node ./scripts/watch-packages.mjs |
| serve-dev | package.json | watch:packages:legacy | turbo run watch --filter='./packages/*' --concurrency=32 |
| build | package.json | build | yarn build:packages && yarn generate && yarn build:packages && yarn build:app |
| build | package.json | build:app | turbo run build --filter=@open-mercato/app |
| build | package.json | build:packages | turbo run build --filter='./packages/*' |
| quality | package.json | lint | turbo run lint |
| quality | package.json | typecheck | turbo run typecheck |
| test | package.json | test | cross-env NODE_OPTIONS=--max-old-space-size=768 turbo run test --concurrency=2 |
| serve-dev | package.json | start | turbo run start --filter=@open-mercato/app |
| utility | package.json | generate | turbo run generate --filter=@open-mercato/app |
| utility | package.json | reinstall | turbo run reinstall --filter=@open-mercato/app |
| utility | package.json | db:generate | yarn workspace @open-mercato/app db:generate |
| utility | package.json | db:migrate | turbo run db:migrate --filter=@open-mercato/app |
| utility | package.json | db:greenfield | turbo run db:greenfield --filter=@open-mercato/app |
| utility | package.json | initialize | turbo run initialize --filter=@open-mercato/app |
| utility | package.json | seed:defaults | yarn workspace @open-mercato/app seed:defaults |
| build | package.json | docker:up | docker compose -f docker-compose.fullapp.yml up --build -d |
| container | package.json | docker:down | docker compose -f docker-compose.fullapp.yml down |
| serve-dev | package.json | docker:dev:up | docker compose -f docker-compose.fullapp.dev.yml up --build -d |
| serve-dev | package.json | docker:dev:down | docker compose -f docker-compose.fullapp.dev.yml down |
| build | package.json | docker:ephemeral | docker compose -f docker-compose.preview.yaml up --build |
| container | package.json | docker:ephemeral:down | docker compose -f docker-compose.preview.yaml down |
| serve-dev | package.json | docker:dev | node scripts/docker-exec.mjs dev |
| build | package.json | docker:build:packages | node scripts/docker-exec.mjs build:packages |
| container | package.json | docker:generate | node scripts/docker-exec.mjs generate |
| container | package.json | docker:initialize | node scripts/docker-exec.mjs initialize |
| container | package.json | docker:reinstall | node scripts/docker-exec.mjs reinstall |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | next, react |
| developerSurface | none |
| observability | none |
| browserAutomation | playwright |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| entrypoints | [packages/webhooks/src/index.ts](../../../../sources/open-mercato__open-mercato/packages/webhooks/src/index.ts) | entrypoints signal |
| entrypoints | [packages/ui/src/index.ts](../../../../sources/open-mercato__open-mercato/packages/ui/src/index.ts) | entrypoints signal |
| entrypoints | [packages/sync-akeneo/src/index.ts](../../../../sources/open-mercato__open-mercato/packages/sync-akeneo/src/index.ts) | entrypoints signal |
| entrypoints | [packages/storage-s3/src/index.ts](../../../../sources/open-mercato__open-mercato/packages/storage-s3/src/index.ts) | entrypoints signal |
| agentRuntime | [AGENTS.md](../../../../sources/open-mercato__open-mercato/AGENTS.md) | agentRuntime signal |
| agentRuntime | [packages/webhooks/AGENTS.md](../../../../sources/open-mercato__open-mercato/packages/webhooks/AGENTS.md) | agentRuntime signal |
| agentRuntime | [packages/ui/AGENTS.md](../../../../sources/open-mercato__open-mercato/packages/ui/AGENTS.md) | agentRuntime signal |
| agentRuntime | [packages/ui/src/portal/hooks/useCustomerAuth.ts](../../../../sources/open-mercato__open-mercato/packages/ui/src/portal/hooks/useCustomerAuth.ts) | agentRuntime signal |
| instruction | [CLAUDE.md](../../../../sources/open-mercato__open-mercato/CLAUDE.md) | instruction signal |
| instruction | [packages/webhooks/CLAUDE.md](../../../../sources/open-mercato__open-mercato/packages/webhooks/CLAUDE.md) | instruction signal |
| security | [SECURITY.md](../../../../sources/open-mercato__open-mercato/SECURITY.md) | security signal |
| security | [scripts/dev-orchestration-log-policy.mjs](../../../../sources/open-mercato__open-mercato/scripts/dev-orchestration-log-policy.mjs) | security signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 266 | [packages/webhooks/src/index.ts](../../../../sources/open-mercato__open-mercato/packages/webhooks/src/index.ts)<br>[packages/ui/src/index.ts](../../../../sources/open-mercato__open-mercato/packages/ui/src/index.ts)<br>[packages/sync-akeneo/src/index.ts](../../../../sources/open-mercato__open-mercato/packages/sync-akeneo/src/index.ts)<br>[packages/storage-s3/src/index.ts](../../../../sources/open-mercato__open-mercato/packages/storage-s3/src/index.ts)<br>[packages/shared/src/index.ts](../../../../sources/open-mercato__open-mercato/packages/shared/src/index.ts)<br>[packages/shared/src/lib/i18n/server.ts](../../../../sources/open-mercato__open-mercato/packages/shared/src/lib/i18n/server.ts)<br>[packages/shared/src/lib/auth/server.ts](../../../../sources/open-mercato__open-mercato/packages/shared/src/lib/auth/server.ts)<br>[packages/shared/src/lib/auth/__tests__/server.apiKeyCache.test.ts](../../../../sources/open-mercato__open-mercato/packages/shared/src/lib/auth/__tests__/server.apiKeyCache.test.ts) |
| agentRuntime | 332 | [AGENTS.md](../../../../sources/open-mercato__open-mercato/AGENTS.md)<br>[packages/webhooks/AGENTS.md](../../../../sources/open-mercato__open-mercato/packages/webhooks/AGENTS.md)<br>[packages/ui/AGENTS.md](../../../../sources/open-mercato__open-mercato/packages/ui/AGENTS.md)<br>[packages/ui/src/portal/hooks/useCustomerAuth.ts](../../../../sources/open-mercato__open-mercato/packages/ui/src/portal/hooks/useCustomerAuth.ts)<br>[packages/ui/src/portal/hooks/usePortalAppEvent.ts](../../../../sources/open-mercato__open-mercato/packages/ui/src/portal/hooks/usePortalAppEvent.ts)<br>[packages/ui/src/portal/hooks/usePortalDashboardWidgets.ts](../../../../sources/open-mercato__open-mercato/packages/ui/src/portal/hooks/usePortalDashboardWidgets.ts)<br>[packages/ui/src/portal/hooks/usePortalEventBridge.ts](../../../../sources/open-mercato__open-mercato/packages/ui/src/portal/hooks/usePortalEventBridge.ts)<br>[packages/ui/src/portal/hooks/usePortalInjectedMenuItems.ts](../../../../sources/open-mercato__open-mercato/packages/ui/src/portal/hooks/usePortalInjectedMenuItems.ts) |
| mcp | 21 | [.mcp.json.example](../../../../sources/open-mercato__open-mercato/.mcp.json.example)<br>[packages/create-app/agentic/cursor/mcp.json.example](../../../../sources/open-mercato__open-mercato/packages/create-app/agentic/cursor/mcp.json.example)<br>[packages/create-app/agentic/codex/mcp.json.example](../../../../sources/open-mercato__open-mercato/packages/create-app/agentic/codex/mcp.json.example)<br>[packages/create-app/agentic/claude-code/mcp.json.example](../../../../sources/open-mercato__open-mercato/packages/create-app/agentic/claude-code/mcp.json.example)<br>[packages/ai-assistant/src/modules/ai_assistant/lib/mcp-client.ts](../../../../sources/open-mercato__open-mercato/packages/ai-assistant/src/modules/ai_assistant/lib/mcp-client.ts)<br>[packages/ai-assistant/src/modules/ai_assistant/lib/mcp-dev-key-resolution.ts](../../../../sources/open-mercato__open-mercato/packages/ai-assistant/src/modules/ai_assistant/lib/mcp-dev-key-resolution.ts)<br>[packages/ai-assistant/src/modules/ai_assistant/lib/mcp-dev-server.ts](../../../../sources/open-mercato__open-mercato/packages/ai-assistant/src/modules/ai_assistant/lib/mcp-dev-server.ts)<br>[packages/ai-assistant/src/modules/ai_assistant/lib/mcp-server-config.ts](../../../../sources/open-mercato__open-mercato/packages/ai-assistant/src/modules/ai_assistant/lib/mcp-server-config.ts) |
| retrieval | 287 | [scripts/__tests__/jest-memory-fanout.test.mjs](../../../../sources/open-mercato__open-mercato/scripts/__tests__/jest-memory-fanout.test.mjs)<br>[packages/webhooks/src/index.ts](../../../../sources/open-mercato__open-mercato/packages/webhooks/src/index.ts)<br>[packages/webhooks/src/modules/webhooks/index.ts](../../../../sources/open-mercato__open-mercato/packages/webhooks/src/modules/webhooks/index.ts)<br>[packages/ui/src/index.ts](../../../../sources/open-mercato__open-mercato/packages/ui/src/index.ts)<br>[packages/ui/src/theme/index.ts](../../../../sources/open-mercato__open-mercato/packages/ui/src/theme/index.ts)<br>[packages/ui/src/portal/components/index.ts](../../../../sources/open-mercato__open-mercato/packages/ui/src/portal/components/index.ts)<br>[packages/ui/src/backend/version-history/index.ts](../../../../sources/open-mercato__open-mercato/packages/ui/src/backend/version-history/index.ts)<br>[packages/ui/src/backend/settings/index.ts](../../../../sources/open-mercato__open-mercato/packages/ui/src/backend/settings/index.ts) |
| spec | 1148 | [packages/webhooks/src/modules/webhooks/__integration__/TC-LOCK-OSS-043.spec.ts](../../../../sources/open-mercato__open-mercato/packages/webhooks/src/modules/webhooks/__integration__/TC-LOCK-OSS-043.spec.ts)<br>[packages/webhooks/src/modules/webhooks/__integration__/TC-WEBHOOK-001.spec.ts](../../../../sources/open-mercato__open-mercato/packages/webhooks/src/modules/webhooks/__integration__/TC-WEBHOOK-001.spec.ts)<br>[packages/webhooks/src/modules/webhooks/__integration__/TC-WEBHOOK-002.spec.ts](../../../../sources/open-mercato__open-mercato/packages/webhooks/src/modules/webhooks/__integration__/TC-WEBHOOK-002.spec.ts)<br>[packages/webhooks/src/modules/webhooks/__integration__/TC-WEBHOOK-003.spec.ts](../../../../sources/open-mercato__open-mercato/packages/webhooks/src/modules/webhooks/__integration__/TC-WEBHOOK-003.spec.ts)<br>[packages/webhooks/src/modules/webhooks/__integration__/TC-WEBHOOK-004.spec.ts](../../../../sources/open-mercato__open-mercato/packages/webhooks/src/modules/webhooks/__integration__/TC-WEBHOOK-004.spec.ts)<br>[packages/webhooks/src/modules/webhooks/__integration__/TC-WEBHOOK-005.spec.ts](../../../../sources/open-mercato__open-mercato/packages/webhooks/src/modules/webhooks/__integration__/TC-WEBHOOK-005.spec.ts)<br>[packages/webhooks/src/modules/webhooks/__integration__/TC-WEBHOOK-006.spec.ts](../../../../sources/open-mercato__open-mercato/packages/webhooks/src/modules/webhooks/__integration__/TC-WEBHOOK-006.spec.ts)<br>[packages/webhooks/src/modules/webhooks/__integration__/TC-WEBHOOK-007.spec.ts](../../../../sources/open-mercato__open-mercato/packages/webhooks/src/modules/webhooks/__integration__/TC-WEBHOOK-007.spec.ts) |
| eval | 2564 | [tests/helpers/renderWithProviders.tsx](../../../../sources/open-mercato__open-mercato/tests/helpers/renderWithProviders.tsx)<br>[scripts/test-create-app-integration.ts](../../../../sources/open-mercato__open-mercato/scripts/test-create-app-integration.ts)<br>[scripts/test-create-app.ts](../../../../sources/open-mercato__open-mercato/scripts/test-create-app.ts)<br>[scripts/lib/__tests__/snapshot-release.test.mjs](../../../../sources/open-mercato__open-mercato/scripts/lib/__tests__/snapshot-release.test.mjs)<br>[scripts/__tests__/dev-cache-purge.test.mjs](../../../../sources/open-mercato__open-mercato/scripts/__tests__/dev-cache-purge.test.mjs)<br>[scripts/__tests__/dev-database-url.test.mjs](../../../../sources/open-mercato__open-mercato/scripts/__tests__/dev-database-url.test.mjs)<br>[scripts/__tests__/dev-ephemeral-shutdown.test.mjs](../../../../sources/open-mercato__open-mercato/scripts/__tests__/dev-ephemeral-shutdown.test.mjs)<br>[scripts/__tests__/dev-log-files.test.mjs](../../../../sources/open-mercato__open-mercato/scripts/__tests__/dev-log-files.test.mjs) |
| security | 649 | [SECURITY.md](../../../../sources/open-mercato__open-mercato/SECURITY.md)<br>[scripts/dev-orchestration-log-policy.mjs](../../../../sources/open-mercato__open-mercato/scripts/dev-orchestration-log-policy.mjs)<br>[scripts/__tests__/dev-orchestration-log-policy.test.mjs](../../../../sources/open-mercato__open-mercato/scripts/__tests__/dev-orchestration-log-policy.test.mjs)<br>[scripts/__tests__/windows-spawn-guard.test.mjs](../../../../sources/open-mercato__open-mercato/scripts/__tests__/windows-spawn-guard.test.mjs)<br>`packages/webhooks/src/modules/webhooks/api/webhooks/[id]/rotate-secret/route.ts`<br>`packages/webhooks/src/modules/webhooks/api/[id]/rotate-secret/route.ts`<br>[packages/shared/src/security/aclDependencies.ts](../../../../sources/open-mercato__open-mercato/packages/shared/src/security/aclDependencies.ts)<br>[packages/shared/src/security/enabledModulesRegistry.ts](../../../../sources/open-mercato__open-mercato/packages/shared/src/security/enabledModulesRegistry.ts) |
| ci | 8 | [.github/workflows/ci.yml](../../../../sources/open-mercato__open-mercato/.github/workflows/ci.yml)<br>[.github/workflows/dev-deploy.yml](../../../../sources/open-mercato__open-mercato/.github/workflows/dev-deploy.yml)<br>[.github/workflows/merge-gate.yml](../../../../sources/open-mercato__open-mercato/.github/workflows/merge-gate.yml)<br>[.github/workflows/qa-deploy.yml](../../../../sources/open-mercato__open-mercato/.github/workflows/qa-deploy.yml)<br>[.github/workflows/qa-stop-on-merge.yml](../../../../sources/open-mercato__open-mercato/.github/workflows/qa-stop-on-merge.yml)<br>[.github/workflows/release.yml](../../../../sources/open-mercato__open-mercato/.github/workflows/release.yml)<br>[.github/workflows/skills-tiers-lint.yml](../../../../sources/open-mercato__open-mercato/.github/workflows/skills-tiers-lint.yml)<br>[.github/workflows/snapshot.yml](../../../../sources/open-mercato__open-mercato/.github/workflows/snapshot.yml) |
| container | 50 | [docker-compose.fullapp.dev.yml](../../../../sources/open-mercato__open-mercato/docker-compose.fullapp.dev.yml)<br>[docker-compose.fullapp.traefik.dev.yml](../../../../sources/open-mercato__open-mercato/docker-compose.fullapp.traefik.dev.yml)<br>[docker-compose.fullapp.traefik.yml](../../../../sources/open-mercato__open-mercato/docker-compose.fullapp.traefik.yml)<br>[docker-compose.fullapp.yml](../../../../sources/open-mercato__open-mercato/docker-compose.fullapp.yml)<br>[docker-compose.preview.yaml](../../../../sources/open-mercato__open-mercato/docker-compose.preview.yaml)<br>[docker-compose.yml](../../../../sources/open-mercato__open-mercato/docker-compose.yml)<br>[Dockerfile](../../../../sources/open-mercato__open-mercato/Dockerfile)<br>[packages/ui/src/backend/charts/BarChart.tsx](../../../../sources/open-mercato__open-mercato/packages/ui/src/backend/charts/BarChart.tsx) |
| instruction | 59 | [AGENTS.md](../../../../sources/open-mercato__open-mercato/AGENTS.md)<br>[CLAUDE.md](../../../../sources/open-mercato__open-mercato/CLAUDE.md)<br>[packages/webhooks/AGENTS.md](../../../../sources/open-mercato__open-mercato/packages/webhooks/AGENTS.md)<br>[packages/webhooks/CLAUDE.md](../../../../sources/open-mercato__open-mercato/packages/webhooks/CLAUDE.md)<br>[packages/ui/AGENTS.md](../../../../sources/open-mercato__open-mercato/packages/ui/AGENTS.md)<br>[packages/ui/CLAUDE.md](../../../../sources/open-mercato__open-mercato/packages/ui/CLAUDE.md)<br>[packages/ui/src/backend/AGENTS.md](../../../../sources/open-mercato__open-mercato/packages/ui/src/backend/AGENTS.md)<br>[packages/shared/AGENTS.md](../../../../sources/open-mercato__open-mercato/packages/shared/AGENTS.md) |
| docs | 547 | [README.md](../../../../sources/open-mercato__open-mercato/README.md)<br>[packages/ui/README.md](../../../../sources/open-mercato__open-mercato/packages/ui/README.md)<br>[packages/shared/README.md](../../../../sources/open-mercato__open-mercato/packages/shared/README.md)<br>[packages/search/README.md](../../../../sources/open-mercato__open-mercato/packages/search/README.md)<br>[packages/search/src/modules/search/README.md](../../../../sources/open-mercato__open-mercato/packages/search/src/modules/search/README.md)<br>[packages/scheduler/README.md](../../../../sources/open-mercato__open-mercato/packages/scheduler/README.md)<br>[packages/queue/README.md](../../../../sources/open-mercato__open-mercato/packages/queue/README.md)<br>[packages/onboarding/README.md](../../../../sources/open-mercato__open-mercato/packages/onboarding/README.md) |
| config | 52 | [package.json](../../../../sources/open-mercato__open-mercato/package.json)<br>[tsconfig.json](../../../../sources/open-mercato__open-mercato/tsconfig.json)<br>[turbo.json](../../../../sources/open-mercato__open-mercato/turbo.json)<br>[packages/webhooks/package.json](../../../../sources/open-mercato__open-mercato/packages/webhooks/package.json)<br>[packages/webhooks/tsconfig.json](../../../../sources/open-mercato__open-mercato/packages/webhooks/tsconfig.json)<br>[packages/ui/package.json](../../../../sources/open-mercato__open-mercato/packages/ui/package.json)<br>[packages/ui/tsconfig.json](../../../../sources/open-mercato__open-mercato/packages/ui/tsconfig.json)<br>[packages/sync-akeneo/package.json](../../../../sources/open-mercato__open-mercato/packages/sync-akeneo/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 2564 | [tests/helpers/renderWithProviders.tsx](../../../../sources/open-mercato__open-mercato/tests/helpers/renderWithProviders.tsx)<br>[scripts/test-create-app-integration.ts](../../../../sources/open-mercato__open-mercato/scripts/test-create-app-integration.ts)<br>[scripts/test-create-app.ts](../../../../sources/open-mercato__open-mercato/scripts/test-create-app.ts)<br>[scripts/lib/__tests__/snapshot-release.test.mjs](../../../../sources/open-mercato__open-mercato/scripts/lib/__tests__/snapshot-release.test.mjs)<br>[scripts/__tests__/dev-cache-purge.test.mjs](../../../../sources/open-mercato__open-mercato/scripts/__tests__/dev-cache-purge.test.mjs)<br>[scripts/__tests__/dev-database-url.test.mjs](../../../../sources/open-mercato__open-mercato/scripts/__tests__/dev-database-url.test.mjs) |
| CI workflows | 8 | [.github/workflows/ci.yml](../../../../sources/open-mercato__open-mercato/.github/workflows/ci.yml)<br>[.github/workflows/dev-deploy.yml](../../../../sources/open-mercato__open-mercato/.github/workflows/dev-deploy.yml)<br>[.github/workflows/merge-gate.yml](../../../../sources/open-mercato__open-mercato/.github/workflows/merge-gate.yml)<br>[.github/workflows/qa-deploy.yml](../../../../sources/open-mercato__open-mercato/.github/workflows/qa-deploy.yml)<br>[.github/workflows/qa-stop-on-merge.yml](../../../../sources/open-mercato__open-mercato/.github/workflows/qa-stop-on-merge.yml)<br>[.github/workflows/release.yml](../../../../sources/open-mercato__open-mercato/.github/workflows/release.yml) |
| Containers / deploy | 50 | [docker-compose.fullapp.dev.yml](../../../../sources/open-mercato__open-mercato/docker-compose.fullapp.dev.yml)<br>[docker-compose.fullapp.traefik.dev.yml](../../../../sources/open-mercato__open-mercato/docker-compose.fullapp.traefik.dev.yml)<br>[docker-compose.fullapp.traefik.yml](../../../../sources/open-mercato__open-mercato/docker-compose.fullapp.traefik.yml)<br>[docker-compose.fullapp.yml](../../../../sources/open-mercato__open-mercato/docker-compose.fullapp.yml)<br>[docker-compose.preview.yaml](../../../../sources/open-mercato__open-mercato/docker-compose.preview.yaml)<br>[docker-compose.yml](../../../../sources/open-mercato__open-mercato/docker-compose.yml) |
| Security / policy | 649 | [SECURITY.md](../../../../sources/open-mercato__open-mercato/SECURITY.md)<br>[scripts/dev-orchestration-log-policy.mjs](../../../../sources/open-mercato__open-mercato/scripts/dev-orchestration-log-policy.mjs)<br>[scripts/__tests__/dev-orchestration-log-policy.test.mjs](../../../../sources/open-mercato__open-mercato/scripts/__tests__/dev-orchestration-log-policy.test.mjs)<br>[scripts/__tests__/windows-spawn-guard.test.mjs](../../../../sources/open-mercato__open-mercato/scripts/__tests__/windows-spawn-guard.test.mjs)<br>`packages/webhooks/src/modules/webhooks/api/webhooks/[id]/rotate-secret/route.ts`<br>`packages/webhooks/src/modules/webhooks/api/[id]/rotate-secret/route.ts` |
| Agent instructions | 59 | [AGENTS.md](../../../../sources/open-mercato__open-mercato/AGENTS.md)<br>[CLAUDE.md](../../../../sources/open-mercato__open-mercato/CLAUDE.md)<br>[packages/webhooks/AGENTS.md](../../../../sources/open-mercato__open-mercato/packages/webhooks/AGENTS.md)<br>[packages/webhooks/CLAUDE.md](../../../../sources/open-mercato__open-mercato/packages/webhooks/CLAUDE.md)<br>[packages/ui/AGENTS.md](../../../../sources/open-mercato__open-mercato/packages/ui/AGENTS.md)<br>[packages/ui/CLAUDE.md](../../../../sources/open-mercato__open-mercato/packages/ui/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `packages/webhooks/src/index.ts`, `packages/ui/src/index.ts`, `packages/sync-akeneo/src/index.ts`.
2. Trace execution through entrypoints: `packages/webhooks/src/index.ts`, `packages/ui/src/index.ts`, `packages/sync-akeneo/src/index.ts`.
3. Map agent/tool runtime through: `AGENTS.md`, `packages/webhooks/AGENTS.md`, `packages/ui/AGENTS.md`.
4. Inspect retrieval/memory/indexing through: `scripts/__tests__/jest-memory-fanout.test.mjs`, `packages/webhooks/src/index.ts`, `packages/webhooks/src/modules/webhooks/index.ts`.
5. Verify behavior through test/eval files: `tests/helpers/renderWithProviders.tsx`, `scripts/test-create-app-integration.ts`, `scripts/test-create-app.ts`.

## Existing Repository Insight

코딩 에이전트/IDE 관점에서 AI Engineering Foundation Framework built with AI and designed for AI. Hundreds of architectural and domain decisions mu. 핵심 구조 신호는 TypeScript, package.json, Dockerfile, docker-compose.yml, README.md, AGENTS.md이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 코딩 에이전트/IDE 레포입니다. 활용 관점은 coding-agent reference implementation이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
