# generalaction/emdash Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Emdash is the Open-Source Agentic Development Environment (🧡 YC W26). Run multiple coding agents in parallel. Use any provider.

## 요약

- 조사 단위: `sources/generalaction__emdash` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 1,966 files, 301 directories, depth score 132, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=packages/core/src/agents/plugins/helpers/mcp.test.ts, packages/core/src/agents/plugins/helpers/mcp.ts, packages/core/src/agents/plugins/capabilities/mcp.ts이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | generalaction/emdash |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 4902 |
| Forks | 508 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/generalaction__emdash](../../../../sources/generalaction__emdash) |
| Existing report | [reports/global-trending/repositories/generalaction__emdash.md](../../../global-trending/repositories/generalaction__emdash.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 1966 / 301 |
| Max observed depth | 11 |
| Top directories | .claude, .github, agents, apps, packages, tooling |
| Top extensions | .ts: 1250, .tsx: 418, .svg: 95, .png: 65, .json: 40, .md: 29, .sql: 16, .yml: 13, (none): 8, .css: 7, .db: 6, .sh: 4 |
| Source patterns | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| apps/emdash-desktop | apps workspace | 120 |
| packages/plugins | packages workspace | 75 |
| packages/core | packages workspace | 32 |
| packages/ui | packages workspace | 6 |
| .github | ci surface | 1 |
| agents | top-level component | 1 |
| apps | source boundary | 1 |
| packages | source boundary | 1 |
| tooling | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| serve-dev | package.json | dev | pnpm -r run dev |
| build | package.json | build | pnpm -r run build |
| test | package.json | test | pnpm -r run test |
| quality | package.json | lint | pnpm -r run lint |
| quality | package.json | format | pnpm -r run format |
| quality | package.json | format:check | pnpm -r run format:check |
| quality | package.json | typecheck | pnpm -r run typecheck |


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
| mcp | [packages/core/src/agents/plugins/helpers/mcp.test.ts](../../../../sources/generalaction__emdash/packages/core/src/agents/plugins/helpers/mcp.test.ts) | mcp signal |
| mcp | [packages/core/src/agents/plugins/helpers/mcp.ts](../../../../sources/generalaction__emdash/packages/core/src/agents/plugins/helpers/mcp.ts) | mcp signal |
| mcp | [packages/core/src/agents/plugins/capabilities/mcp.ts](../../../../sources/generalaction__emdash/packages/core/src/agents/plugins/capabilities/mcp.ts) | mcp signal |
| mcp | [apps/emdash-desktop/src/shared/core/mcp/catalog.ts](../../../../sources/generalaction__emdash/apps/emdash-desktop/src/shared/core/mcp/catalog.ts) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/generalaction__emdash/AGENTS.md) | agentRuntime signal |
| agentRuntime | [packages/plugins/src/agents/registry.ts](../../../../sources/generalaction__emdash/packages/plugins/src/agents/registry.ts) | agentRuntime signal |
| agentRuntime | [packages/plugins/src/agents/impl/.gitkeep](../../../../sources/generalaction__emdash/packages/plugins/src/agents/impl/.gitkeep) | agentRuntime signal |
| agentRuntime | [packages/plugins/src/agents/impl/index.test.ts](../../../../sources/generalaction__emdash/packages/plugins/src/agents/impl/index.test.ts) | agentRuntime signal |
| entrypoints | [packages/ui/src/index.ts](../../../../sources/generalaction__emdash/packages/ui/src/index.ts) | entrypoints signal |
| entrypoints | [packages/ui/.storybook/main.ts](../../../../sources/generalaction__emdash/packages/ui/.storybook/main.ts) | entrypoints signal |
| entrypoints | [apps/emdash-desktop/src/types/env.d.ts](../../../../sources/generalaction__emdash/apps/emdash-desktop/src/types/env.d.ts) | entrypoints signal |
| entrypoints | [apps/emdash-desktop/src/types/webview.d.ts](../../../../sources/generalaction__emdash/apps/emdash-desktop/src/types/webview.d.ts) | entrypoints signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 1613 | [packages/ui/src/index.ts](../../../../sources/generalaction__emdash/packages/ui/src/index.ts)<br>[packages/ui/.storybook/main.ts](../../../../sources/generalaction__emdash/packages/ui/.storybook/main.ts)<br>[apps/emdash-desktop/src/types/env.d.ts](../../../../sources/generalaction__emdash/apps/emdash-desktop/src/types/env.d.ts)<br>[apps/emdash-desktop/src/types/webview.d.ts](../../../../sources/generalaction__emdash/apps/emdash-desktop/src/types/webview.d.ts)<br>[apps/emdash-desktop/src/shared/app-identity.canary.ts](../../../../sources/generalaction__emdash/apps/emdash-desktop/src/shared/app-identity.canary.ts)<br>[apps/emdash-desktop/src/shared/app-identity.ts](../../../../sources/generalaction__emdash/apps/emdash-desktop/src/shared/app-identity.ts)<br>[apps/emdash-desktop/src/shared/browser.test.ts](../../../../sources/generalaction__emdash/apps/emdash-desktop/src/shared/browser.test.ts)<br>[apps/emdash-desktop/src/shared/browser.ts](../../../../sources/generalaction__emdash/apps/emdash-desktop/src/shared/browser.ts) |
| agentRuntime | 245 | [AGENTS.md](../../../../sources/generalaction__emdash/AGENTS.md)<br>[packages/plugins/src/agents/registry.ts](../../../../sources/generalaction__emdash/packages/plugins/src/agents/registry.ts)<br>[packages/plugins/src/agents/impl/.gitkeep](../../../../sources/generalaction__emdash/packages/plugins/src/agents/impl/.gitkeep)<br>[packages/plugins/src/agents/impl/index.test.ts](../../../../sources/generalaction__emdash/packages/plugins/src/agents/impl/index.test.ts)<br>[packages/plugins/src/agents/impl/rovo/icon.ts](../../../../sources/generalaction__emdash/packages/plugins/src/agents/impl/rovo/icon.ts)<br>[packages/plugins/src/agents/impl/rovo/index.ts](../../../../sources/generalaction__emdash/packages/plugins/src/agents/impl/rovo/index.ts)<br>[packages/plugins/src/agents/impl/qwen/hooks.ts](../../../../sources/generalaction__emdash/packages/plugins/src/agents/impl/qwen/hooks.ts)<br>[packages/plugins/src/agents/impl/qwen/icon.ts](../../../../sources/generalaction__emdash/packages/plugins/src/agents/impl/qwen/icon.ts) |
| mcp | 63 | [packages/core/src/agents/plugins/helpers/mcp.test.ts](../../../../sources/generalaction__emdash/packages/core/src/agents/plugins/helpers/mcp.test.ts)<br>[packages/core/src/agents/plugins/helpers/mcp.ts](../../../../sources/generalaction__emdash/packages/core/src/agents/plugins/helpers/mcp.ts)<br>[packages/core/src/agents/plugins/capabilities/mcp.ts](../../../../sources/generalaction__emdash/packages/core/src/agents/plugins/capabilities/mcp.ts)<br>[apps/emdash-desktop/src/shared/core/mcp/catalog.ts](../../../../sources/generalaction__emdash/apps/emdash-desktop/src/shared/core/mcp/catalog.ts)<br>[apps/emdash-desktop/src/shared/core/mcp/types.ts](../../../../sources/generalaction__emdash/apps/emdash-desktop/src/shared/core/mcp/types.ts)<br>[apps/emdash-desktop/src/renderer/utils/mcp-icon-data.ts](../../../../sources/generalaction__emdash/apps/emdash-desktop/src/renderer/utils/mcp-icon-data.ts)<br>[apps/emdash-desktop/src/renderer/features/mcp/mcp-view.tsx](../../../../sources/generalaction__emdash/apps/emdash-desktop/src/renderer/features/mcp/mcp-view.tsx)<br>[apps/emdash-desktop/src/renderer/features/mcp/components/KeyValueSection.tsx](../../../../sources/generalaction__emdash/apps/emdash-desktop/src/renderer/features/mcp/components/KeyValueSection.tsx) |
| retrieval | 54 | [packages/ui/src/index.ts](../../../../sources/generalaction__emdash/packages/ui/src/index.ts)<br>[packages/ui/src/components/index.ts](../../../../sources/generalaction__emdash/packages/ui/src/components/index.ts)<br>[packages/plugins/src/agents/impl/index.test.ts](../../../../sources/generalaction__emdash/packages/plugins/src/agents/impl/index.test.ts)<br>[packages/plugins/src/agents/impl/rovo/index.ts](../../../../sources/generalaction__emdash/packages/plugins/src/agents/impl/rovo/index.ts)<br>[packages/plugins/src/agents/impl/qwen/index.ts](../../../../sources/generalaction__emdash/packages/plugins/src/agents/impl/qwen/index.ts)<br>[packages/plugins/src/agents/impl/pi/index.ts](../../../../sources/generalaction__emdash/packages/plugins/src/agents/impl/pi/index.ts)<br>[packages/plugins/src/agents/impl/opencode/index.ts](../../../../sources/generalaction__emdash/packages/plugins/src/agents/impl/opencode/index.ts)<br>[packages/plugins/src/agents/impl/mistral/index.ts](../../../../sources/generalaction__emdash/packages/plugins/src/agents/impl/mistral/index.ts) |
| spec | 5 | [apps/emdash-desktop/src/shared/core/workspaces/workspace-setup-spec.ts](../../../../sources/generalaction__emdash/apps/emdash-desktop/src/shared/core/workspaces/workspace-setup-spec.ts)<br>[agents/architecture/main-process.md](../../../../sources/generalaction__emdash/agents/architecture/main-process.md)<br>[agents/architecture/overview.md](../../../../sources/generalaction__emdash/agents/architecture/overview.md)<br>[agents/architecture/renderer.md](../../../../sources/generalaction__emdash/agents/architecture/renderer.md)<br>[agents/architecture/shared.md](../../../../sources/generalaction__emdash/agents/architecture/shared.md) |
| eval | 301 | [packages/plugins/src/agents/impl/index.test.ts](../../../../sources/generalaction__emdash/packages/plugins/src/agents/impl/index.test.ts)<br>[packages/plugins/src/agents/impl/mistral/hooks.test.ts](../../../../sources/generalaction__emdash/packages/plugins/src/agents/impl/mistral/hooks.test.ts)<br>[packages/core/src/lib/deep-equal.test.ts](../../../../sources/generalaction__emdash/packages/core/src/lib/deep-equal.test.ts)<br>[packages/core/src/lib/emitter.test.ts](../../../../sources/generalaction__emdash/packages/core/src/lib/emitter.test.ts)<br>[packages/core/src/lib/keyed-mutex.test.ts](../../../../sources/generalaction__emdash/packages/core/src/lib/keyed-mutex.test.ts)<br>[packages/core/src/lib/live-model.test.ts](../../../../sources/generalaction__emdash/packages/core/src/lib/live-model.test.ts)<br>[packages/core/src/lib/resource-map.test.ts](../../../../sources/generalaction__emdash/packages/core/src/lib/resource-map.test.ts)<br>[packages/core/src/host-dependencies/runtime/host-dependency-manager.test.ts](../../../../sources/generalaction__emdash/packages/core/src/host-dependencies/runtime/host-dependency-manager.test.ts) |
| security | 19 | [apps/emdash-desktop/src/renderer/lib/modal/use-close-guard.ts](../../../../sources/generalaction__emdash/apps/emdash-desktop/src/renderer/lib/modal/use-close-guard.ts)<br>[apps/emdash-desktop/src/renderer/features/tasks/task-config/sandbox-panel.tsx](../../../../sources/generalaction__emdash/apps/emdash-desktop/src/renderer/features/tasks/task-config/sandbox-panel.tsx)<br>[apps/emdash-desktop/src/renderer/features/integrations/components/github-auth-disclaimer.tsx](../../../../sources/generalaction__emdash/apps/emdash-desktop/src/renderer/features/integrations/components/github-auth-disclaimer.tsx)<br>[apps/emdash-desktop/src/main/core/ssh/connect/ssh-connect-auth.ts](../../../../sources/generalaction__emdash/apps/emdash-desktop/src/main/core/ssh/connect/ssh-connect-auth.ts)<br>[apps/emdash-desktop/src/main/core/shared/oauth-flow.ts](../../../../sources/generalaction__emdash/apps/emdash-desktop/src/main/core/shared/oauth-flow.ts)<br>[apps/emdash-desktop/src/main/core/github/services/github-api-auth-errors.ts](../../../../sources/generalaction__emdash/apps/emdash-desktop/src/main/core/github/services/github-api-auth-errors.ts)<br>[apps/emdash-desktop/src/main/core/github/services/github-api-auth-service-instance.ts](../../../../sources/generalaction__emdash/apps/emdash-desktop/src/main/core/github/services/github-api-auth-service-instance.ts)<br>[apps/emdash-desktop/src/main/core/github/services/github-api-auth-service.test.ts](../../../../sources/generalaction__emdash/apps/emdash-desktop/src/main/core/github/services/github-api-auth-service.test.ts) |
| ci | 5 | [.github/workflows/code-consistency-check.yml](../../../../sources/generalaction__emdash/.github/workflows/code-consistency-check.yml)<br>[.github/workflows/nix-build.yml](../../../../sources/generalaction__emdash/.github/workflows/nix-build.yml)<br>[.github/workflows/release-canary.yml](../../../../sources/generalaction__emdash/.github/workflows/release-canary.yml)<br>[.github/workflows/release-prod.yml](../../../../sources/generalaction__emdash/.github/workflows/release-prod.yml)<br>[.github/workflows/windows-beta-build.yml](../../../../sources/generalaction__emdash/.github/workflows/windows-beta-build.yml) |
| container | 3 | [apps/emdash-desktop/docker-compose.yaml](../../../../sources/generalaction__emdash/apps/emdash-desktop/docker-compose.yaml)<br>[apps/emdash-desktop/tooling/docker-ssh/dockerfile](../../../../sources/generalaction__emdash/apps/emdash-desktop/tooling/docker-ssh/dockerfile)<br>[apps/emdash-desktop/tooling/byoi/Dockerfile](../../../../sources/generalaction__emdash/apps/emdash-desktop/tooling/byoi/Dockerfile) |
| instruction | 2 | [AGENTS.md](../../../../sources/generalaction__emdash/AGENTS.md)<br>[CLAUDE.md](../../../../sources/generalaction__emdash/CLAUDE.md) |
| docs | 3 | [README.md](../../../../sources/generalaction__emdash/README.md)<br>[apps/emdash-desktop/tooling/byoi/README.md](../../../../sources/generalaction__emdash/apps/emdash-desktop/tooling/byoi/README.md)<br>[agents/README.md](../../../../sources/generalaction__emdash/agents/README.md) |
| config | 12 | [package.json](../../../../sources/generalaction__emdash/package.json)<br>[pnpm-workspace.yaml](../../../../sources/generalaction__emdash/pnpm-workspace.yaml)<br>[packages/ui/package.json](../../../../sources/generalaction__emdash/packages/ui/package.json)<br>[packages/ui/tsconfig.json](../../../../sources/generalaction__emdash/packages/ui/tsconfig.json)<br>[packages/plugins/package.json](../../../../sources/generalaction__emdash/packages/plugins/package.json)<br>[packages/plugins/tsconfig.json](../../../../sources/generalaction__emdash/packages/plugins/tsconfig.json)<br>[packages/core/package.json](../../../../sources/generalaction__emdash/packages/core/package.json)<br>[packages/core/tsconfig.json](../../../../sources/generalaction__emdash/packages/core/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 301 | [packages/plugins/src/agents/impl/index.test.ts](../../../../sources/generalaction__emdash/packages/plugins/src/agents/impl/index.test.ts)<br>[packages/plugins/src/agents/impl/mistral/hooks.test.ts](../../../../sources/generalaction__emdash/packages/plugins/src/agents/impl/mistral/hooks.test.ts)<br>[packages/core/src/lib/deep-equal.test.ts](../../../../sources/generalaction__emdash/packages/core/src/lib/deep-equal.test.ts)<br>[packages/core/src/lib/emitter.test.ts](../../../../sources/generalaction__emdash/packages/core/src/lib/emitter.test.ts)<br>[packages/core/src/lib/keyed-mutex.test.ts](../../../../sources/generalaction__emdash/packages/core/src/lib/keyed-mutex.test.ts)<br>[packages/core/src/lib/live-model.test.ts](../../../../sources/generalaction__emdash/packages/core/src/lib/live-model.test.ts) |
| CI workflows | 5 | [.github/workflows/code-consistency-check.yml](../../../../sources/generalaction__emdash/.github/workflows/code-consistency-check.yml)<br>[.github/workflows/nix-build.yml](../../../../sources/generalaction__emdash/.github/workflows/nix-build.yml)<br>[.github/workflows/release-canary.yml](../../../../sources/generalaction__emdash/.github/workflows/release-canary.yml)<br>[.github/workflows/release-prod.yml](../../../../sources/generalaction__emdash/.github/workflows/release-prod.yml)<br>[.github/workflows/windows-beta-build.yml](../../../../sources/generalaction__emdash/.github/workflows/windows-beta-build.yml) |
| Containers / deploy | 3 | [apps/emdash-desktop/docker-compose.yaml](../../../../sources/generalaction__emdash/apps/emdash-desktop/docker-compose.yaml)<br>[apps/emdash-desktop/tooling/docker-ssh/dockerfile](../../../../sources/generalaction__emdash/apps/emdash-desktop/tooling/docker-ssh/dockerfile)<br>[apps/emdash-desktop/tooling/byoi/Dockerfile](../../../../sources/generalaction__emdash/apps/emdash-desktop/tooling/byoi/Dockerfile) |
| Security / policy | 19 | [apps/emdash-desktop/src/renderer/lib/modal/use-close-guard.ts](../../../../sources/generalaction__emdash/apps/emdash-desktop/src/renderer/lib/modal/use-close-guard.ts)<br>[apps/emdash-desktop/src/renderer/features/tasks/task-config/sandbox-panel.tsx](../../../../sources/generalaction__emdash/apps/emdash-desktop/src/renderer/features/tasks/task-config/sandbox-panel.tsx)<br>[apps/emdash-desktop/src/renderer/features/integrations/components/github-auth-disclaimer.tsx](../../../../sources/generalaction__emdash/apps/emdash-desktop/src/renderer/features/integrations/components/github-auth-disclaimer.tsx)<br>[apps/emdash-desktop/src/main/core/ssh/connect/ssh-connect-auth.ts](../../../../sources/generalaction__emdash/apps/emdash-desktop/src/main/core/ssh/connect/ssh-connect-auth.ts)<br>[apps/emdash-desktop/src/main/core/shared/oauth-flow.ts](../../../../sources/generalaction__emdash/apps/emdash-desktop/src/main/core/shared/oauth-flow.ts)<br>[apps/emdash-desktop/src/main/core/github/services/github-api-auth-errors.ts](../../../../sources/generalaction__emdash/apps/emdash-desktop/src/main/core/github/services/github-api-auth-errors.ts) |
| Agent instructions | 2 | [AGENTS.md](../../../../sources/generalaction__emdash/AGENTS.md)<br>[CLAUDE.md](../../../../sources/generalaction__emdash/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `packages/core/src/agents/plugins/helpers/mcp.test.ts`, `packages/core/src/agents/plugins/helpers/mcp.ts`, `packages/core/src/agents/plugins/capabilities/mcp.ts`.
2. Trace execution through entrypoints: `packages/ui/src/index.ts`, `packages/ui/.storybook/main.ts`, `apps/emdash-desktop/src/types/env.d.ts`.
3. Map agent/tool runtime through: `AGENTS.md`, `packages/plugins/src/agents/registry.ts`, `packages/plugins/src/agents/impl/.gitkeep`.
4. Inspect retrieval/memory/indexing through: `packages/ui/src/index.ts`, `packages/ui/src/components/index.ts`, `packages/plugins/src/agents/impl/index.test.ts`.
5. Verify behavior through test/eval files: `packages/plugins/src/agents/impl/index.test.ts`, `packages/plugins/src/agents/impl/mistral/hooks.test.ts`, `packages/core/src/lib/deep-equal.test.ts`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Emdash is the Open Source Agentic Development Environment 🧡 YC W26 . Run multiple coding agents in parallel. Use any pr. 핵심 구조 신호는 TypeScript, package.json, README.md, AGENTS.md, CLAUDE.md, ci이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
