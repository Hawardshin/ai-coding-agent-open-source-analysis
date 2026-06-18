# hexabot-ai/Hexabot Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Hexabot v3 is an AI automation platform, combining workflows, actions, agents, and conversational channels in one runtime.

## 요약

- 조사 단위: `sources/hexabot-ai__Hexabot` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 1,798 files, 420 directories, depth score 132, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

AI 인프라/서빙 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 entrypoints=packages/widget/src/index.css, packages/widget/src/main.tsx, packages/types/src/index.test.ts이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | hexabot-ai/Hexabot |
| Topic | AI Infrastructure and Serving / AI 인프라/서빙 |
| Region | global |
| Language | TypeScript |
| Stars | 974 |
| Forks | 218 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/hexabot-ai__Hexabot](../../../../sources/hexabot-ai__Hexabot) |
| Existing report | [reports/global-trending/repositories/hexabot-ai__Hexabot.md](../../../global-trending/repositories/hexabot-ai__Hexabot.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 1798 / 420 |
| Max observed depth | 11 |
| Top directories | .github, .husky, docker, packages |
| Top extensions | .ts: 1190, .tsx: 383, .json: 70, .md: 31, (none): 27, .yml: 22, .scss: 21, .cjs: 14, .css: 12, .js: 4, .mts: 4, .html: 3 |
| Source patterns | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| packages/api | packages workspace | 110 |
| packages/graph | packages workspace | 62 |
| packages/frontend | packages workspace | 56 |
| packages/types | packages workspace | 38 |
| packages/widget | packages workspace | 22 |
| packages/cli | packages workspace | 6 |
| packages/agentic | packages workspace | 5 |
| .github | ci surface | 1 |
| docker | documentation surface | 1 |
| packages | source boundary | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| serve-dev | package.json | dev | turbo run dev --parallel |
| build | package.json | build | turbo run build |
| quality | package.json | lint | turbo run lint |
| test | package.json | test | turbo run test |
| quality | package.json | typecheck | turbo run typecheck |
| quality | package.json | format | turbo run format |
| utility | package.json | clean | turbo run clean |
| utility | package.json | prepare | husky |
| build | package.json | release:prepatch | ./bump-version.sh publish alpha prepatch |
| build | package.json | release:preminor | ./bump-version.sh publish alpha preminor |
| build | package.json | release:prerelease | ./bump-version.sh publish alpha prerelease |
| build | package.json | release:alpha:prepatch | ./bump-version.sh publish alpha prepatch |
| build | package.json | release:alpha:preminor | ./bump-version.sh publish alpha preminor |
| build | package.json | release:alpha:premajor | ./bump-version.sh publish alpha premajor |
| build | package.json | release:alpha:prerelease | ./bump-version.sh publish alpha prerelease |
| build | package.json | release:beta:prepatch | ./bump-version.sh publish beta prepatch |
| build | package.json | release:beta:preminor | ./bump-version.sh publish beta preminor |
| build | package.json | release:beta:premajor | ./bump-version.sh publish beta premajor |
| build | package.json | release:beta:prerelease | ./bump-version.sh publish beta prerelease |
| build | package.json | release:stable:patch | ./bump-version.sh publish stable patch |
| build | package.json | release:stable:minor | ./bump-version.sh publish stable minor |
| build | package.json | release:stable:major | ./bump-version.sh publish stable major |
| test | package.json | release:promote:latest | ./bump-version.sh promote latest current |
| serve-dev | package.json | dev:api | turbo run dev --filter=@hexabot-ai/api --filter=@hexabot-ai/agentic --filter=@hexabot-ai/types --parallel |


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
| entrypoints | [packages/widget/src/index.css](../../../../sources/hexabot-ai__Hexabot/packages/widget/src/index.css) | entrypoints signal |
| entrypoints | [packages/widget/src/main.tsx](../../../../sources/hexabot-ai__Hexabot/packages/widget/src/main.tsx) | entrypoints signal |
| entrypoints | [packages/types/src/index.test.ts](../../../../sources/hexabot-ai__Hexabot/packages/types/src/index.test.ts) | entrypoints signal |
| entrypoints | [packages/types/src/index.ts](../../../../sources/hexabot-ai__Hexabot/packages/types/src/index.ts) | entrypoints signal |
| container | [packages/widget/Dockerfile](../../../../sources/hexabot-ai__Hexabot/packages/widget/Dockerfile) | container signal |
| container | [packages/frontend/Dockerfile](../../../../sources/hexabot-ai__Hexabot/packages/frontend/Dockerfile) | container signal |
| container | [packages/api/Dockerfile](../../../../sources/hexabot-ai__Hexabot/packages/api/Dockerfile) | container signal |
| container | [packages/api/Dockerfile.base](../../../../sources/hexabot-ai__Hexabot/packages/api/Dockerfile.base) | container signal |
| config | [package.json](../../../../sources/hexabot-ai__Hexabot/package.json) | config signal |
| config | [pnpm-workspace.yaml](../../../../sources/hexabot-ai__Hexabot/pnpm-workspace.yaml) | config signal |
| config | [turbo.json](../../../../sources/hexabot-ai__Hexabot/turbo.json) | config signal |
| config | [packages/widget/package.json](../../../../sources/hexabot-ai__Hexabot/packages/widget/package.json) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 19 | [packages/widget/src/index.css](../../../../sources/hexabot-ai__Hexabot/packages/widget/src/index.css)<br>[packages/widget/src/main.tsx](../../../../sources/hexabot-ai__Hexabot/packages/widget/src/main.tsx)<br>[packages/types/src/index.test.ts](../../../../sources/hexabot-ai__Hexabot/packages/types/src/index.test.ts)<br>[packages/types/src/index.ts](../../../../sources/hexabot-ai__Hexabot/packages/types/src/index.ts)<br>[packages/graph/src/index.test.ts](../../../../sources/hexabot-ai__Hexabot/packages/graph/src/index.test.ts)<br>[packages/graph/src/index.ts](../../../../sources/hexabot-ai__Hexabot/packages/graph/src/index.ts)<br>[packages/frontend/src/App.tsx](../../../../sources/hexabot-ai__Hexabot/packages/frontend/src/App.tsx)<br>[packages/frontend/src/main.tsx](../../../../sources/hexabot-ai__Hexabot/packages/frontend/src/main.tsx) |
| agentRuntime | 360 | [AGENTS.md](../../../../sources/hexabot-ai__Hexabot/AGENTS.md)<br>[packages/widget/AGENTS.md](../../../../sources/hexabot-ai__Hexabot/packages/widget/AGENTS.md)<br>[packages/widget/src/hooks/useSubscribeBroadcastChannel.ts](../../../../sources/hexabot-ai__Hexabot/packages/widget/src/hooks/useSubscribeBroadcastChannel.ts)<br>[packages/widget/src/hooks/useTranslation.tsx](../../../../sources/hexabot-ai__Hexabot/packages/widget/src/hooks/useTranslation.tsx)<br>[packages/widget/src/hooks/useTypewriter.ts](../../../../sources/hexabot-ai__Hexabot/packages/widget/src/hooks/useTypewriter.ts)<br>[packages/types/AGENTS.md](../../../../sources/hexabot-ai__Hexabot/packages/types/AGENTS.md)<br>[packages/types/src/workflow/domain.ts](../../../../sources/hexabot-ai__Hexabot/packages/types/src/workflow/domain.ts)<br>[packages/types/src/workflow/helpers.ts](../../../../sources/hexabot-ai__Hexabot/packages/types/src/workflow/helpers.ts) |
| mcp | 63 | [packages/types/src/workflow/mcp-server.ts](../../../../sources/hexabot-ai__Hexabot/packages/types/src/workflow/mcp-server.ts)<br>[packages/types/src/user/mcp-token.ts](../../../../sources/hexabot-ai__Hexabot/packages/types/src/user/mcp-token.ts)<br>[packages/frontend/src/types/mcp-server.types.ts](../../../../sources/hexabot-ai__Hexabot/packages/frontend/src/types/mcp-server.types.ts)<br>[packages/frontend/src/components/profile/mcp-tokens.utils.test.ts](../../../../sources/hexabot-ai__Hexabot/packages/frontend/src/components/profile/mcp-tokens.utils.test.ts)<br>[packages/frontend/src/components/profile/mcp-tokens.utils.ts](../../../../sources/hexabot-ai__Hexabot/packages/frontend/src/components/profile/mcp-tokens.utils.ts)<br>[packages/frontend/src/components/mcp-servers/index.tsx](../../../../sources/hexabot-ai__Hexabot/packages/frontend/src/components/mcp-servers/index.tsx)<br>[packages/frontend/src/components/mcp-servers/McpServerForm.tsx](../../../../sources/hexabot-ai__Hexabot/packages/frontend/src/components/mcp-servers/McpServerForm.tsx)<br>[packages/frontend/src/components/mcp-servers/McpServerFormDialog.tsx](../../../../sources/hexabot-ai__Hexabot/packages/frontend/src/components/mcp-servers/McpServerFormDialog.tsx) |
| retrieval | 236 | [packages/widget/index.html](../../../../sources/hexabot-ai__Hexabot/packages/widget/index.html)<br>[packages/widget/src/index.css](../../../../sources/hexabot-ai__Hexabot/packages/widget/src/index.css)<br>[packages/widget/src/translations/index.ts](../../../../sources/hexabot-ai__Hexabot/packages/widget/src/translations/index.ts)<br>[packages/widget/public/index.html](../../../../sources/hexabot-ai__Hexabot/packages/widget/public/index.html)<br>[packages/types/src/index.test.ts](../../../../sources/hexabot-ai__Hexabot/packages/types/src/index.test.ts)<br>[packages/types/src/index.ts](../../../../sources/hexabot-ai__Hexabot/packages/types/src/index.ts)<br>[packages/types/src/workflow/index.ts](../../../../sources/hexabot-ai__Hexabot/packages/types/src/workflow/index.ts)<br>[packages/types/src/workflow/memory-definition.ts](../../../../sources/hexabot-ai__Hexabot/packages/types/src/workflow/memory-definition.ts) |
| spec | 167 | [packages/api/test/app.e2e-spec.ts](../../../../sources/hexabot-ai__Hexabot/packages/api/test/app.e2e-spec.ts)<br>[packages/api/src/app.service.spec.ts](../../../../sources/hexabot-ai__Hexabot/packages/api/src/app.service.spec.ts)<br>[packages/api/src/workflow/utils/memory-store.spec.ts](../../../../sources/hexabot-ai__Hexabot/packages/api/src/workflow/utils/memory-store.spec.ts)<br>[packages/api/src/workflow/utils/schema-instance.spec.ts](../../../../sources/hexabot-ai__Hexabot/packages/api/src/workflow/utils/schema-instance.spec.ts)<br>[packages/api/src/workflow/services/agentic.service.spec.ts](../../../../sources/hexabot-ai__Hexabot/packages/api/src/workflow/services/agentic.service.spec.ts)<br>[packages/api/src/workflow/services/mcp-client-pool.service.spec.ts](../../../../sources/hexabot-ai__Hexabot/packages/api/src/workflow/services/mcp-client-pool.service.spec.ts)<br>[packages/api/src/workflow/services/mcp-server.service.spec.ts](../../../../sources/hexabot-ai__Hexabot/packages/api/src/workflow/services/mcp-server.service.spec.ts)<br>[packages/api/src/workflow/services/memory-definition.service.spec.ts](../../../../sources/hexabot-ai__Hexabot/packages/api/src/workflow/services/memory-definition.service.spec.ts) |
| eval | 318 | [packages/widget/src/utils/SocketIoClient.test.ts](../../../../sources/hexabot-ai__Hexabot/packages/widget/src/utils/SocketIoClient.test.ts)<br>[packages/widget/src/utils/webhook-url.test.ts](../../../../sources/hexabot-ai__Hexabot/packages/widget/src/utils/webhook-url.test.ts)<br>[packages/widget/src/theme/theme.utils.test.ts](../../../../sources/hexabot-ai__Hexabot/packages/widget/src/theme/theme.utils.test.ts)<br>[packages/widget/src/test/setup.ts](../../../../sources/hexabot-ai__Hexabot/packages/widget/src/test/setup.ts)<br>[packages/widget/src/providers/ConfigProvider.test.tsx](../../../../sources/hexabot-ai__Hexabot/packages/widget/src/providers/ConfigProvider.test.tsx)<br>[packages/widget/src/providers/ThemeProvider.test.tsx](../../../../sources/hexabot-ai__Hexabot/packages/widget/src/providers/ThemeProvider.test.tsx)<br>[packages/widget/src/components/Message.test.tsx](../../../../sources/hexabot-ai__Hexabot/packages/widget/src/components/Message.test.tsx)<br>[packages/types/src/index.test.ts](../../../../sources/hexabot-ai__Hexabot/packages/types/src/index.test.ts) |
| security | 75 | [SECURITY.md](../../../../sources/hexabot-ai__Hexabot/SECURITY.md)<br>[packages/types/src/user/permission.ts](../../../../sources/hexabot-ai__Hexabot/packages/types/src/user/permission.ts)<br>[packages/types/src/audit/audit-log.ts](../../../../sources/hexabot-ai__Hexabot/packages/types/src/audit/audit-log.ts)<br>[packages/types/src/audit/index.ts](../../../../sources/hexabot-ai__Hexabot/packages/types/src/audit/index.ts)<br>[packages/frontend/src/types/auth/login.types.ts](../../../../sources/hexabot-ai__Hexabot/packages/frontend/src/types/auth/login.types.ts)<br>[packages/frontend/src/types/auth/permission.types.ts](../../../../sources/hexabot-ai__Hexabot/packages/frontend/src/types/auth/permission.types.ts)<br>[packages/frontend/src/hooks/auth/useAuthRedirection.ts](../../../../sources/hexabot-ai__Hexabot/packages/frontend/src/hooks/auth/useAuthRedirection.ts)<br>[packages/frontend/src/contexts/auth.context.tsx](../../../../sources/hexabot-ai__Hexabot/packages/frontend/src/contexts/auth.context.tsx) |
| ci | 3 | [.github/workflows/main-ci.yml](../../../../sources/hexabot-ai__Hexabot/.github/workflows/main-ci.yml)<br>[.github/workflows/npm-promote.yml](../../../../sources/hexabot-ai__Hexabot/.github/workflows/npm-promote.yml)<br>[.github/workflows/npm-publish.yml](../../../../sources/hexabot-ai__Hexabot/.github/workflows/npm-publish.yml) |
| container | 17 | [packages/widget/Dockerfile](../../../../sources/hexabot-ai__Hexabot/packages/widget/Dockerfile)<br>[packages/frontend/Dockerfile](../../../../sources/hexabot-ai__Hexabot/packages/frontend/Dockerfile)<br>[packages/api/Dockerfile](../../../../sources/hexabot-ai__Hexabot/packages/api/Dockerfile)<br>[packages/api/Dockerfile.base](../../../../sources/hexabot-ai__Hexabot/packages/api/Dockerfile.base)<br>[docker/docker-compose.dev.yml](../../../../sources/hexabot-ai__Hexabot/docker/docker-compose.dev.yml)<br>[docker/docker-compose.nginx.dev.yml](../../../../sources/hexabot-ai__Hexabot/docker/docker-compose.nginx.dev.yml)<br>[docker/docker-compose.nginx.prod.yml](../../../../sources/hexabot-ai__Hexabot/docker/docker-compose.nginx.prod.yml)<br>[docker/docker-compose.nginx.yml](../../../../sources/hexabot-ai__Hexabot/docker/docker-compose.nginx.yml) |
| instruction | 8 | [AGENTS.md](../../../../sources/hexabot-ai__Hexabot/AGENTS.md)<br>[packages/widget/AGENTS.md](../../../../sources/hexabot-ai__Hexabot/packages/widget/AGENTS.md)<br>[packages/types/AGENTS.md](../../../../sources/hexabot-ai__Hexabot/packages/types/AGENTS.md)<br>[packages/graph/AGENTS.md](../../../../sources/hexabot-ai__Hexabot/packages/graph/AGENTS.md)<br>[packages/frontend/AGENTS.md](../../../../sources/hexabot-ai__Hexabot/packages/frontend/AGENTS.md)<br>[packages/cli/AGENTS.md](../../../../sources/hexabot-ai__Hexabot/packages/cli/AGENTS.md)<br>[packages/api/AGENTS.md](../../../../sources/hexabot-ai__Hexabot/packages/api/AGENTS.md)<br>[packages/agentic/AGENTS.md](../../../../sources/hexabot-ai__Hexabot/packages/agentic/AGENTS.md) |
| docs | 15 | [README.md](../../../../sources/hexabot-ai__Hexabot/README.md)<br>[packages/widget/README.md](../../../../sources/hexabot-ai__Hexabot/packages/widget/README.md)<br>[packages/types/README.md](../../../../sources/hexabot-ai__Hexabot/packages/types/README.md)<br>[packages/graph/README.md](../../../../sources/hexabot-ai__Hexabot/packages/graph/README.md)<br>[packages/frontend/README.md](../../../../sources/hexabot-ai__Hexabot/packages/frontend/README.md)<br>[packages/cli/README.md](../../../../sources/hexabot-ai__Hexabot/packages/cli/README.md)<br>[packages/api/README.md](../../../../sources/hexabot-ai__Hexabot/packages/api/README.md)<br>[packages/api/src/websocket/README.md](../../../../sources/hexabot-ai__Hexabot/packages/api/src/websocket/README.md) |
| config | 20 | [package.json](../../../../sources/hexabot-ai__Hexabot/package.json)<br>[pnpm-workspace.yaml](../../../../sources/hexabot-ai__Hexabot/pnpm-workspace.yaml)<br>[turbo.json](../../../../sources/hexabot-ai__Hexabot/turbo.json)<br>[packages/widget/package.json](../../../../sources/hexabot-ai__Hexabot/packages/widget/package.json)<br>[packages/widget/tsconfig.json](../../../../sources/hexabot-ai__Hexabot/packages/widget/tsconfig.json)<br>[packages/types/package.json](../../../../sources/hexabot-ai__Hexabot/packages/types/package.json)<br>[packages/types/tsconfig.json](../../../../sources/hexabot-ai__Hexabot/packages/types/tsconfig.json)<br>[packages/graph/package.json](../../../../sources/hexabot-ai__Hexabot/packages/graph/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 318 | [packages/widget/src/utils/SocketIoClient.test.ts](../../../../sources/hexabot-ai__Hexabot/packages/widget/src/utils/SocketIoClient.test.ts)<br>[packages/widget/src/utils/webhook-url.test.ts](../../../../sources/hexabot-ai__Hexabot/packages/widget/src/utils/webhook-url.test.ts)<br>[packages/widget/src/theme/theme.utils.test.ts](../../../../sources/hexabot-ai__Hexabot/packages/widget/src/theme/theme.utils.test.ts)<br>[packages/widget/src/test/setup.ts](../../../../sources/hexabot-ai__Hexabot/packages/widget/src/test/setup.ts)<br>[packages/widget/src/providers/ConfigProvider.test.tsx](../../../../sources/hexabot-ai__Hexabot/packages/widget/src/providers/ConfigProvider.test.tsx)<br>[packages/widget/src/providers/ThemeProvider.test.tsx](../../../../sources/hexabot-ai__Hexabot/packages/widget/src/providers/ThemeProvider.test.tsx) |
| CI workflows | 3 | [.github/workflows/main-ci.yml](../../../../sources/hexabot-ai__Hexabot/.github/workflows/main-ci.yml)<br>[.github/workflows/npm-promote.yml](../../../../sources/hexabot-ai__Hexabot/.github/workflows/npm-promote.yml)<br>[.github/workflows/npm-publish.yml](../../../../sources/hexabot-ai__Hexabot/.github/workflows/npm-publish.yml) |
| Containers / deploy | 17 | [packages/widget/Dockerfile](../../../../sources/hexabot-ai__Hexabot/packages/widget/Dockerfile)<br>[packages/frontend/Dockerfile](../../../../sources/hexabot-ai__Hexabot/packages/frontend/Dockerfile)<br>[packages/api/Dockerfile](../../../../sources/hexabot-ai__Hexabot/packages/api/Dockerfile)<br>[packages/api/Dockerfile.base](../../../../sources/hexabot-ai__Hexabot/packages/api/Dockerfile.base)<br>[docker/docker-compose.dev.yml](../../../../sources/hexabot-ai__Hexabot/docker/docker-compose.dev.yml)<br>[docker/docker-compose.nginx.dev.yml](../../../../sources/hexabot-ai__Hexabot/docker/docker-compose.nginx.dev.yml) |
| Security / policy | 75 | [SECURITY.md](../../../../sources/hexabot-ai__Hexabot/SECURITY.md)<br>[packages/types/src/user/permission.ts](../../../../sources/hexabot-ai__Hexabot/packages/types/src/user/permission.ts)<br>[packages/types/src/audit/audit-log.ts](../../../../sources/hexabot-ai__Hexabot/packages/types/src/audit/audit-log.ts)<br>[packages/types/src/audit/index.ts](../../../../sources/hexabot-ai__Hexabot/packages/types/src/audit/index.ts)<br>[packages/frontend/src/types/auth/login.types.ts](../../../../sources/hexabot-ai__Hexabot/packages/frontend/src/types/auth/login.types.ts)<br>[packages/frontend/src/types/auth/permission.types.ts](../../../../sources/hexabot-ai__Hexabot/packages/frontend/src/types/auth/permission.types.ts) |
| Agent instructions | 8 | [AGENTS.md](../../../../sources/hexabot-ai__Hexabot/AGENTS.md)<br>[packages/widget/AGENTS.md](../../../../sources/hexabot-ai__Hexabot/packages/widget/AGENTS.md)<br>[packages/types/AGENTS.md](../../../../sources/hexabot-ai__Hexabot/packages/types/AGENTS.md)<br>[packages/graph/AGENTS.md](../../../../sources/hexabot-ai__Hexabot/packages/graph/AGENTS.md)<br>[packages/frontend/AGENTS.md](../../../../sources/hexabot-ai__Hexabot/packages/frontend/AGENTS.md)<br>[packages/cli/AGENTS.md](../../../../sources/hexabot-ai__Hexabot/packages/cli/AGENTS.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `packages/widget/src/index.css`, `packages/widget/src/main.tsx`, `packages/types/src/index.test.ts`.
2. Trace execution through entrypoints: `packages/widget/src/index.css`, `packages/widget/src/main.tsx`, `packages/types/src/index.test.ts`.
3. Map agent/tool runtime through: `AGENTS.md`, `packages/widget/AGENTS.md`, `packages/widget/src/hooks/useSubscribeBroadcastChannel.ts`.
4. Inspect retrieval/memory/indexing through: `packages/widget/index.html`, `packages/widget/src/index.css`, `packages/widget/src/translations/index.ts`.
5. Verify behavior through test/eval files: `packages/widget/src/utils/SocketIoClient.test.ts`, `packages/widget/src/utils/webhook-url.test.ts`, `packages/widget/src/theme/theme.utils.test.ts`.

## Existing Repository Insight

AI 인프라/서빙 관점에서 Hexabot v3 is an AI automation platform, combining workflows, actions, agents, and conversational channels in one runtim. 핵심 구조 신호는 TypeScript, package.json, README.md, AGENTS.md, ci, docs이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 AI 인프라/서빙 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
